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
 const num=[...document.querySelectorAll('input[type=number]')].find(x=>!x.disabled);
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
 }else if(num){
   const v=num.value;num.value=(v===num.max?num.min:num.max);
   num.dispatchEvent(new Event('change',{bubbles:true}));
   chosen={type:'number',id:num.id,old:v,new:num.value};
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
    if slot == "21":
        return page.evaluate("""() => {
          const q=window.__SLM_MATH_LAB_21__;if(!q)return false;
          const start=q.getState(),r=q.getResult();
          const conservation=r.total===10000&&r.AB+r.AN+r.NB+r.NN===10000;
          const zero=q.update({pA:0,pBA:0,pBN:0})&&q.getResult().B===0;
          q.update(start);
          return conservation&&zero&&q.getResult().B===r.B;
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


# Per-model mathematical probes executed in the *real page*, not a JS/Canvas mock.
# Distinct from smoke-test "the control changed something": each model must satisfy
# a concrete oracle or meaningful boundary condition. Restore original UI afterwards.
SEMANTIC = r"""async (slot) => {
 const id=x=>document.getElementById(x);
 const text=x=>id(x)?.textContent||'';
 const failures=[],check=(v,label)=>{if(!v)failures.push(label)};
 const set=(x,v,event='input')=>{const c=id(x);if(!c)throw Error('Missing control '+x);
   c.value=String(v);c.dispatchEvent(new Event('input',{bubbles:true}));c.dispatchEvent(new Event('change',{bubbles:true}));};
 const tick=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 const near=(a,b,tol=1e-7)=>Math.abs(a-b)<=tol;
 const originalReset=id('reset')||id('reset-stats');
 try {
  switch (slot) {
   case '01': {
     set('p',1);set('q',0);await tick();
     check(text('readout').includes('p⇒q=Sai'),'implication_false_only_when_p_true_q_false');
     set('p',0);await tick();
     check(text('readout').includes('p⇒q=Đúng'),'implication_true_with_false_p');
     break;
   }
   case '02': {
     set('k',-1);await tick();
     check(text('readout').includes('không có nghiệm thực'),'quadratic_negative_k_no_roots');
     set('k',0);await tick();
     check(text('readout').includes('nghiệm kép'),'quadratic_zero_k_double_root');
     break;
   }
   case '03': {
     set('x',-1);await tick();
     check(text('readout').includes('Thế lại phương trình gốc: không đúng'),'extraneous_negative_root');
     set('x',2);await tick();
     check(text('readout').includes('Thế lại phương trình gốc: đúng'),'original_equation_unique_root');
     break;
   }
   case '04': {
     set('ai',0);await tick();
     check(text('readout').includes('nghịch biến'),'log_base_less_than_one_decreasing');
     set('ai',4);await tick();
     check(text('readout').includes('đồng biến'),'log_base_greater_than_one_increasing');
     break;
   }
   case '05': {
     set('a',1);set('b',-4);set('c',3);
     id('absOut').checked=true;id('absOut').dispatchEvent(new Event('change',{bubbles:true}));
     id('absIn').checked=true;id('absIn').dispatchEvent(new Event('change',{bubbles:true}));
     await tick();
     check(text('summary').includes('15')&&text('summary').includes('−1'),'two_absolute_transformations_differ_at_negative_x');
     break;
   }
   case '06': {
     const q=window.__I798_FINAL_QA__,a=q.compute(-90),b=q.compute(270);
     check(a.residualAngle===-90&&b.residualAngle===270&&near(a.sin,-1)&&near(a.cos,0),'signed_angular_arc_and_terminal_values');
     break;
   }
   case '07': {
     set('n',8);set('d',2);set('r',1.5);await tick();
     check(text('readout').includes('vₙ lớn hơn uₙ'),'geometric_exceeds_arithmetic_at_n8');
     break;
   }
   case '08': {
     set('b',2);await tick();
     check(text('readout').includes('Hàm liên tục tại 0'),'left_right_limits_equal');
     set('b',1);await tick();
     check(text('readout').includes('Hàm không liên tục tại 0'),'one_sided_limits_different');
     break;
   }
   case '09': {
     set('fn','flat','change');set('x',0);set('step',1);set('side',1);await tick();
     check(text('info').includes('Tiếp tuyến: f′(x₀) = 0'),'flat_cubic_derivative_zero');
     set('fn','turn','change');await tick();
     check(text('info').includes('Tiếp tuyến: f′(x₀) = −1'),'turn_cubic_derivative_negative_one');
     break;
   }
   case '10': {
     set('x',2);await tick();
     check(text('readout').includes('V=x(12−2x)²=128'),'open_box_maximum_at_x2');
     set('x',1);await tick();
     check(text('readout').includes('V=x(12−2x)²=100'),'open_box_volume_at_x1');
     break;
   }
   case '11': {
     const q=window.__I798_FINAL_QA__.model,s=q.getState();
     q.setState({a:1,b:2,n:20,mode:'mid'});
     const v=q.getResult();
     check(near(v.exact,7/3)&&v.error<0&&near(v.error,v.theorError,1e-9),'riemann_midpoint_underestimate_x_squared');
     q.setState(s); break;
   }
   case '12': {
     set('b',12);await tick();
     check(text('readout').includes('Số tam giác không suy biến: 2'),'ssa_two_solutions');
     set('b',16);await tick();
     check(text('readout').includes('Số tam giác không suy biến: 1'),'ssa_tangent_one_solution');
     set('b',18);await tick();
     check(text('readout').includes('Số tam giác không suy biến: 0'),'ssa_no_triangle');
     break;
   }
   case '13': {
     set('angle',90);await tick();check(text('readout').includes('Tích vô hướng bằng 0'),'dot_product_orthogonal');
     set('angle',180);await tick();check(text('readout').includes('Tích vô hướng âm'),'dot_product_opposite');
     break;
   }
   case '14': {
     set('p',4);set('x',2);await tick();
     check(text('readout').includes('MD=x+p/2=4')&&text('readout').includes('tức MF=MD'),'parabola_equidistant_focus_directrix');
     break;
   }
   case '15': {
     set('h',0);set('angle',0);await tick();
     check(text('classification').includes('nằm trong'),'line_contained_in_plane');
     set('h',1);await tick();
     check(text('classification').includes('song song'),'line_parallel_outside_plane');
     set('angle',45);await tick();
     check(text('classification').includes('cắt'),'line_intersects_plane');
     break;
   }
   case '16': {
     set('run',0);set('rise',0);await tick();
     check(text('status').includes('suy biến'),'zero_length_ramp_undefined_angle');
     set('rise',3);await tick();
     check(text('math').includes('tanθ không xác định'),'vertical_ramp_tangent_undefined');
     set('run',4);await tick();
     check(text('math').includes('= 5 m'),'three_four_five_right_triangle');
     break;
   }
   case '17': {
     set('a',6);set('h',4);set('k',0);await tick();
     check(text('reason').includes('hình chóp')&&text('frustum').includes('48'),'frustum_k0_pyramid');
     set('k',1);await tick();
     check(text('reason').includes('lăng trụ')&&text('frustum').includes('144'),'frustum_k1_prism');
     set('k',.5);await tick();
     check(text('frustum').includes('84'),'frustum_khalf_volume84');
     break;
   }
   case '18': {
     set('radius',5);set('distance',5);await tick();
     check(text('sphere-result').includes('Tiếp xúc'),'sphere_plane_tangent');
     set('distance',6);await tick();
     check(text('sphere-result').includes('Không có điểm chung'),'sphere_plane_disjoint');
     set('distance',3);await tick();
     check(text('sphere-result').includes('= 4'),'sphere_plane_section_radius4');
     break;
   }
   case '19': {
     set('a',4);set('b',3);set('countMode','or');await tick();
     check(text('countOutput').includes('4 + 3 = 7'),'addition_rule_disjoint');
     set('countMode','and','input');await tick();
     check(text('countOutput').includes('4 × 3 = 12'),'multiplication_rule');
     set('n',4);set('k',2);set('orderMode','group','input');await tick();
     check(text('orderOutput').includes('= 6'),'unordered_choice_4_2');
     set('orderMode','roles','input');await tick();
     check(text('orderOutput').includes('= 12'),'ordered_roles_4_2');
     break;
   }
   case '20': {
     const q=window.__I798_MODEL12__,s=q.getState();
     const indep=q.math({onlyA:1,both:1,onlyB:1,neither:1,focus:'union'});
     check(indep.independent&&indep.U===3&&indep.C===1,'independent_events_balanced_table');
     const disjoint=q.math({onlyA:1,both:0,onlyB:1,neither:2,focus:'union'});
     check(disjoint.disjoint&&!disjoint.independent&&disjoint.U===2,'disjoint_positive_probability_not_independent');
     const zero=q.math({onlyA:0,both:0,onlyB:1,neither:1,focus:'union'});
     check(zero.disjoint&&zero.independent,'zero_probability_event_independent_exception');
     break;
   }
   case '21': {
     const q=window.__SLM_MATH_LAB_21__,s=q.getState();
     const r=q.getResult();check(r.total===10000&&r.AB+r.AN+r.NB+r.NN===10000,'bayes_leaf_conservation');
     q.update({pA:0,pBA:0,pBN:0});check(q.getResult().B===0,'bayes_zero_evidence');
     q.update(s);break;
   }
   case '22': {
     id('try-extreme').click();await tick();
     const dots=[...document.querySelectorAll('#dots circle')];
     const orange=dots.filter(x=>x.getAttribute('fill')==='#e9922a');
     const svg=id('plot-svg').getBoundingClientRect();
     check(orange.length===1&&orange.every(x=>{let b=x.getBoundingClientRect();return b.left>=svg.left-2&&b.right<=svg.right+2;}),'outlier_twenty_visible_full_svg');
     break;
   }
   case '23': {
     const q=window.__I798_FINAL_QA__,a=q.compute(-270),b=q.compute(90),c=q.compute(450);
     check(a.terminalDeg===90&&near(a.sin,1)&&near(a.cos,0)&&near(a.sin,b.sin)&&near(b.sin,c.sin),'sin_cos_period_360');
     break;
   }
   case '24': {
     const q=window.__I798_FINAL_QA__,a=q.compute(0),b=q.compute(90),c=q.compute(45),d=q.compute(225);
     check(a.tanDefined&&!a.cotDefined&&!b.tanDefined&&b.cotDefined,'tan_cot_domain_poles');
     check(near(c.tan,1)&&near(c.cot,1)&&near(d.tan,1)&&near(d.cot,1),'tan_cot_period_180');
     break;
   }
   case '25': {
     const q=window.__I798_FINAL_QA__,s={left:0,right:8,includeLeft:true,includeRight:true};
     check(q.compute({...s,family:'sin',m:1.5}).roots.length===0,'sin_eq_gt_one_no_roots');
     check(q.compute({...s,family:'sin',m:1}).roots.length===1,'sin_eq_one_duplicate_removed');
     check(q.compute({...s,family:'tan',m:0}).roots.length===3,'tan_eq_zero_closed_interval_three_roots');
     check(q.compute({...s,includeRight:false,family:'tan',m:0}).roots.length===2,'tan_eq_zero_half_open_two_roots');
     break;
   }
   default: failures.push('uncovered_slot_'+slot);
  }
 }catch(e){failures.push('probe_exception: '+(e?.stack||e));}
 try {if(originalReset)originalReset.click()}catch(e){failures.push('restore_exception: '+e);}
 return {pass:failures.length===0,failures};
}"""

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
                      "math_condition":specific(page,rec["slot"]),
                      "semantic_oracle":False
                    })
                    v["semantic"]=page.evaluate(SEMANTIC,rec["slot"])
                    v["assertions"]["semantic_oracle"]=bool(v["semantic"].get("pass"))
                    before_text=page.locator("body").inner_text()
                    before_graph=page.evaluate("""() => [...document.querySelectorAll('canvas,svg')]
                      .map(x=>x.tagName.toLowerCase()==='canvas'?x.toDataURL():x.outerHTML).join('||')""")
                    v["interaction"]=page.evaluate(INTERACT)
                    page.wait_for_timeout(120)
                    final=page.evaluate(CHECK);v["final"]=final
                    after_text=page.locator("body").inner_text()
                    after_graph=page.evaluate("""() => [...document.querySelectorAll('canvas,svg')]
                      .map(x=>x.tagName.toLowerCase()==='canvas'?x.toDataURL():x.outerHTML).join('||')""")
                    v["assertions"]["interaction_visible_effect"]=(
                        before_text!=after_text or before_graph!=after_graph)
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
