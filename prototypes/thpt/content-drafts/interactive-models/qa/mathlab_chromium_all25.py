#!/usr/bin/env python3
"""Read-only, source-SHA-locked browser QA for the 25 Math Lab HTML snapshots.
No site deployment, learner data, academic handoff, or mastery modification.
Run from repository root: python prototypes/thpt/content-drafts/interactive-models/qa/mathlab_chromium_all25.py
Requires: pip install playwright; python -m playwright install chromium
"""
import hashlib
import json
import re
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = Path(__file__).resolve().parents[1]
REGISTER = BASE / "Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md"
OUT = Path("artifacts/math-lab-chromium")
WIDTHS = (320, 390, 768, 1280)

def blob_sha(data):
    return hashlib.sha1(b"blob " + str(len(data)).encode() + b"\0" + data).hexdigest()

def selected():
    rows = []
    for line in REGISTER.read_text(encoding="utf-8").splitlines():
        m = re.match(r'^\| (\d{2}) \| (?:CĐ|SGK).*?\[selected\]\(\./selected/([^)]*\.html)\) · `([0-9a-f]{40})`', line)
        if m:
            rows.append({"slot":m.group(1), "file":m.group(2), "expected_sha":m.group(3)})
    if len(rows) != 25 or len({r["slot"] for r in rows}) != 25 or len({r["file"] for r in rows}) != 25:
        raise RuntimeError("MODEL REGISTER must contain precisely 25 distinct selected models.")
    return rows

CHECK = """() => {
 const w=innerWidth,d=document.documentElement;
 const offs=[...document.querySelectorAll('input,select,button')].filter(x=>{
   const r=x.getBoundingClientRect();return r.width>0 && (r.left < -3 || r.right > w+3)
 }).slice(0,8).map(x=>x.id||x.tagName);
 const visual=[...document.querySelectorAll('canvas,svg')].map(x=>({
   tag:x.tagName.toLowerCase(),width:x.getBoundingClientRect().width,
   height:x.getBoundingClientRect().height,
   pixelWidth:x.tagName.toLowerCase()==='canvas'?x.width:null,
   pixelHeight:x.tagName.toLowerCase()==='canvas'?x.height:null
 }));
 return {width:w,scrollWidth:d.scrollWidth,offscreenControls:offs,visual,
    heading:document.querySelector('h1')?.innerText||'',
    interactive:document.querySelectorAll('input,select,button').length,
    textChars:document.body.innerText.length};
}"""

INTERACT = """() => {
 let before=document.body.innerText,chosen=null;
 const range=[...document.querySelectorAll('input[type=range]')].find(x=>!x.disabled);
 const select=[...document.querySelectorAll('select')].find(x=>!x.disabled&&x.options.length>1);
 const box=[...document.querySelectorAll('input[type=checkbox]')].find(x=>!x.disabled);
 if(range){
   const v=range.value;range.value=(v===range.max?range.min:range.max);
   range.dispatchEvent(new Event('input',{bubbles:true}));
   range.dispatchEvent(new Event('change',{bubbles:true}));
   chosen={type:'range',id:range.id,old:v,new:range.value};
 }else if(select){
   const v=select.value;select.selectedIndex=select.selectedIndex===0?1:0;
   select.dispatchEvent(new Event('change',{bubbles:true}));
   chosen={type:'select',id:select.id,old:v,new:select.value};
 }else if(box){
   const v=box.checked;box.checked=!v;
   box.dispatchEvent(new Event('change',{bubbles:true}));
   chosen={type:'checkbox',id:box.id,old:v,new:box.checked};
 }
 return {chosen,textUpdated:document.body.innerText!==before};
}"""

def specific(page, slot):
    if slot == "06":
        return page.evaluate("""() => {
          const q=window.__I798_FINAL_QA__;if(!q)return false;
          const a=q.compute(-90),b=q.compute(270);
          return a.residualAngle===-90&&a.terminalDeg===270&&b.residualAngle===270
            &&Math.abs(a.sin-b.sin)<1e-10&&Math.abs(a.cos-b.cos)<1e-10;
        }""")
    if slot == "11":
        return page.evaluate("""() => {
          const q=window.I798MathR08;if(!q)return false;
          let n=0,max=0;
          for(let a=-2;a<2;a+=.5)for(let b=a+.5;b<=3;b+=.5)
          for(const k of [1,2,7,20,80])for(const mode of ['left','right','mid']){
            const x=q.riemann({a,b,n:k,mode});
            max=Math.max(max,Math.abs(x.errorCheck));n++;
          }
          return n>500&&max<1e-9;
        }""")
    if slot == "22":
        return page.evaluate("""() => {
          document.getElementById('try-extreme')?.click();
          const r=document.querySelector('#plot-svg')?.getBoundingClientRect();
          const orange=[...document.querySelectorAll('#dots circle')]
             .filter(x=>x.getAttribute('fill')==='#e9922a');
          return !!r && orange.length===1 && orange.every(x=>{
             const d=x.getBoundingClientRect();return d.left>=r.left-2&&d.right<=r.right+2;
          });
        }""")
    if slot == "25":
        return page.evaluate("""() => {
          const q=window.__I798_FINAL_QA__;if(!q)return false;
          const s={left:0,right:8,includeLeft:true,includeRight:true};
          return q.compute({...s,family:'sin',m:1}).roots.length===1
            &&q.compute({...s,family:'tan',m:20}).roots.length===2;
        }""")
    return True

def main():
    OUT.mkdir(parents=True,exist_ok=True)
    result={"method":"full exact HTML/CSS/JS, Git blob SHA checked before Chromium",
            "viewports":list(WIDTHS),"models":[]}
    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
        result["chromium"]=browser.version
        for rec in selected():
            raw=(BASE/"selected"/rec["file"]).read_bytes()
            actual=blob_sha(raw)
            item={**rec,"actual_sha":actual,"sha_match":actual==rec["expected_sha"],"views":[]}
            if not item["sha_match"]:
                item["status"]="SOURCE_SHA_HOLD"
                result["models"].append(item)
                print(rec["slot"],item["status"],flush=True)
                continue
            html=raw.decode("utf-8-sig")
            for w in WIDTHS:
                context=browser.new_context(viewport={"width":w,"height":850},device_scale_factor=1)
                page=context.new_page();errors=[]
                page.on("pageerror",lambda e:errors.append(str(e)))
                v={"viewport":w,"assertions":{},"errors":errors}
                try:
                    page.set_content(html,wait_until="load",timeout=20000)
                    page.wait_for_timeout(90)
                    initial=page.evaluate(CHECK);v["initial"]=initial
                    v["assertions"].update({
                      "heading":bool(initial["heading"]),
                      "controls":initial["interactive"]>0,
                      "no_scroll_overflow":initial["scrollWidth"]<=w+3,
                      "no_offscreen_controls":not initial["offscreenControls"],
                      "visual_sized":all(x["width"]>0 and x["height"]>0 for x in initial["visual"]),
                      "math_condition":specific(page,rec["slot"])
                    })
                    v["interaction"]=page.evaluate(INTERACT)
                    page.wait_for_timeout(90)
                    final=page.evaluate(CHECK);v["final"]=final
                    v["assertions"]["no_js_error"]=not errors
                    v["assertions"]["no_overflow_after_input"]=final["scrollWidth"]<=w+3
                    v["assertions"]["no_offscreen_controls_after"]=not final["offscreenControls"]
                    if w in (390,1280):
                        screenshot=f"Temp_MathLab_{rec['slot']}_{w}px.png"
                        page.screenshot(path=str(OUT/screenshot),full_page=True)
                        v["screenshot"]=screenshot
                except Exception as err:
                    v["exception"]=str(err)
                    v["assertions"]["script_completed"]=False
                v["pass"]=all(v["assertions"].values()) and not errors
                item["views"].append(v)
                context.close()
            item["status"]="BROWSER_DEV_QA_PASS" if all(v["pass"] for v in item["views"]) else "BROWSER_DEV_QA_HOLD"
            result["models"].append(item)
            print(rec["slot"],item["status"],actual,flush=True)
        browser.close()
    result["qa_pass"]=sum(x["status"]=="BROWSER_DEV_QA_PASS" for x in result["models"])
    result["qa_hold"]=25-result["qa_pass"]
    (OUT/"Temp_MathLab_25_Chromium_Results.json").write_text(
        json.dumps(result,ensure_ascii=False,indent=2),encoding="utf-8")
    print("FINAL",result["qa_pass"],"PASS",result["qa_hold"],"HOLD",flush=True)
    return 0 if not result["qa_hold"] else 1

if __name__=="__main__":
    sys.exit(main())
