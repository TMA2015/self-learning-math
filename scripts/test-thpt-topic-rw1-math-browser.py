#!/usr/bin/env python3
"""#1055 X-G.5: all 22 Knowledge pages, ordered source/HTML/browser parity. Canonical sources stay locked."""
from __future__ import annotations
import functools
import http.server
import html
import json
import pathlib
import re
import subprocess
import sys
import threading
from collections import Counter
from playwright.sync_api import sync_playwright, expect

ROOT=pathlib.Path(__file__).resolve().parent.parent
BASE_SHA="bb1c4eead91282f67478dd615a41739a6091c2ff"
FILES={
    "scripts/test-thpt-topic01-release-intake.cjs",
    "docs/assets/javascripts/math-details-v1.js",
    "docs/assets/javascripts/thpt-topic01-release-tabs-v1.js",
    "docs/assets/javascripts/thpt-topic-w1-golden-v1.js",
    "docs/assets/javascripts/thpt-topic-w2-golden-v1.js",
    "scripts/test-thpt-topic-rw1-math-browser.py",
    "scripts/test-thpt-release-impact.cjs",
    ".github/workflows/thpt-topic-rw1-math-qa.yml",
    ".github/workflows/deploy.yml",
    ".github/workflows/thpt-deploy-scope-safety-qa.yml",
}
RW1_SIZES={"01":11,"02":16,"03":12,"04":18,"05":17,"06":16,"07":18,"08":18}
RW2_SIZES={"09":32,"10":36,"11":22,"12":12,"13":16,"14":23,"15":22,"16":21}
RW2="--rw2" in sys.argv
ALL22_TAIL="--tail" in sys.argv
TAIL_SIZES={"17":12,"18":40,"19":14,"20":9,"21":8,"22":13}
REFRESH01="--topic01-refresh" in sys.argv
REFRESHW1="--topic-w1-refresh" in sys.argv
REFRESH=REFRESH01 or REFRESHW1
SIZES={"01":11} if REFRESH01 else {"02":16,"03":12,"04":18,"05":17} if REFRESHW1 else TAIL_SIZES if ALL22_TAIL else RW2_SIZES if RW2 else RW1_SIZES
WAVE="W1-REFRESH" if REFRESHW1 else "SHARED-17-22" if ALL22_TAIL else "R-W2" if RW2 else "R-W1"
CURRENT_BASE="ad3545985c7a1e369799e66fa770678860827be4"
CURRENT_FILES={
    "docs/assets/javascripts/math-details-v1.js",
    "docs/assets/javascripts/thpt-topic-w2-golden-v1.js",
    "docs/assets/javascripts/thpt-topic-w3-golden-v1.js",
    "docs/assets/javascripts/thpt-topic-w4-golden-v1.js",
    "scripts/test-thpt-topic-rw1-math-browser.py",
    ".github/workflows/thpt-topic-rw1-math-qa.yml",
    "scripts/test-thpt-release-impact.cjs",
    "scripts/test-thpt-topic-w2-golden-browser.py",
    "scripts/test-thpt-topic-w3-golden-browser.py",
    "scripts/test-thpt-topic-w4-golden-browser.py",
    "scripts/test-thpt-topic-knowledge-tabs-v3.cjs",
    "docs/assets/javascripts/thpt-topic-w5-golden-v1.js",
    "scripts/test-thpt-topic-w5-golden-browser.py",
    ".github/workflows/deploy.yml",
    ".github/workflows/thpt-deploy-scope-safety-qa.yml",
}
def current_scope():
    changed=set(subprocess.check_output(["git","diff","--no-renames","--name-only",CURRENT_BASE,"HEAD"],cwd=ROOT,text=True).splitlines())
    assert changed==CURRENT_FILES,("SHARED_MATH_SCOPE_HOLD",sorted(changed^CURRENT_FILES))
    path="docs/assets/javascripts/math-details-v1.js"
    old=subprocess.check_output(["git","show",CURRENT_BASE+":"+path],cwd=ROOT,text=True)
    new=(ROOT/path).read_text(encoding="utf-8")
    assert old.split("/* OWNER #1055 R-W1",1)[0]==new.split("/* OWNER #1055, X-G.5",1)[0], "SGK/THCS shared code changed"
    for wave in (2,3,4,5):
        adapter=f"docs/assets/javascripts/thpt-topic-w{wave}-golden-v1.js"
        original=subprocess.check_output(["git","show",CURRENT_BASE+":"+adapter],cwd=ROOT,text=True)
        candidate=(ROOT/adapter).read_text(encoding="utf-8")
        assert original.split("function practiceBank(){",1)[1]==candidate.split("function practiceBank(){",1)[1],(adapter,"Practice/SelfCheck functions changed")
    for f in CURRENT_FILES:
        if f.endswith((".js",".cjs")):
            subprocess.run(["node","--check",f],cwd=ROOT,check=True)
    print("PASS exact fifteen paths, canonical/source/assessment/receipt/SVG unchanged, SGK/THCS prefix and Practice/SelfCheck implementation identical",flush=True)
if "--shared-candidate-scope" in sys.argv:
    current_scope()
    sys.exit(0)

def scope():
    changed=set(subprocess.check_output(["git","diff","--no-renames","--name-only",BASE_SHA,"HEAD"],cwd=ROOT,text=True).splitlines())
    assert changed==FILES,("RW1_SCOPE_HOLD",sorted(changed^FILES))
    helper="docs/assets/javascripts/math-details-v1.js"
    old=subprocess.check_output(["git","show",BASE_SHA+":"+helper],cwd=ROOT,text=True)
    new=(ROOT/helper).read_text(encoding="utf-8")
    prior=new.split("/* OWNER #1055 R-W1, DELTA_A_UI.",1)[0]
    assert prior.rstrip().replace('element.dataset.topicRw1Managed === "1" || ',"")==old.rstrip(), "Unrelated shared math behavior changed"
    assert r"/\/thpt-preview\/chuyen-de\/cd0[1-8]\/kien-thuc\/(?:index\.html)?$/" in new
    assert 'part==="kien-thuc"&&["06","07","08"].includes(topic)' in (ROOT/"docs/assets/javascripts/thpt-topic-w2-golden-v1.js").read_text()
    for f in FILES:
        if f.endswith(".js"):
            subprocess.run(["node","--check",f],cwd=ROOT,check=True)
    print("PASS RW1 exact ten paths; all canonical content/Q18/SVG/assessment and unrelated runtime source unchanged",flush=True)
if "--scope" in sys.argv:
    scope()
    sys.exit(0)

BUILD=ROOT/("site" if REFRESH else "site-thpt-preview")
assert BUILD.is_dir()
class RefreshProjectHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self,p):
        prefix="/self-learning-math"
        if REFRESH and p.startswith(prefix+"/"): p=p[len(prefix):]
        return super().translate_path(p)
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(RefreshProjectHandler,directory=str(BUILD)))
threading.Thread(target=server.serve_forever,daemon=True).start()
BASE=f"http://127.0.0.1:{server.server_address[1]}"+("/self-learning-math" if REFRESH else "")+"/thpt-preview/chuyen-de/"
MODULE="[data-topic01-module-tab],[data-topic-w1-module-tab]"
SUB="[data-topic01-subtab],[data-topic-w1-subtab]"
PANEL=".thpt-r4-knowledge-content-panel:visible"
# Extract the original formula inventory from the immutable built HTML, before
# adapters or MathJax run. Recover only the exact escaped display forms.
SOURCE=r"""async () => {
 const doc=new DOMParser().parseFromString(await (await fetch(location.href)).text(),"text/html");
 const article=doc.querySelector("article.md-typeset");
 const result={};
 const heads=[...article.querySelectorAll("h3")].filter(h=>/^\d+\.\d+\./.test(h.textContent));
 const rx=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\[\s*\n([\s\S]*?)\n\s*\]|\[A\\setminus B=\{x\\in A:x\\notin B\}\.\]|\[\|A\\cup B\|=\|A\|\+\|B\|-\|A\\cap B\|\.\]|\[((?:(?!\\[\(\[])[^\[\]\r\n])+)\]/g;
 const canon=s=>s.replace(/\s+/g,"");
 for(const h of heads){
  const key=h.textContent.match(/^\d+\.\d+/)[0], values=[];
  let n=h;
  while(n){
   const w=doc.createTreeWalker(n,NodeFilter.SHOW_TEXT);
   while(w.nextNode()){
    if(w.currentNode.parentElement?.closest("script,style,code,pre,svg"))continue;
    for(const m of w.currentNode.nodeValue.matchAll(rx)){
     if(m[3]!==undefined&&!(/\\[A-Za-z]+/.test(m[3])||(/=/.test(m[3])&&/[\^_]/.test(m[3]))))continue;
     if(m[4]!==undefined&&!((/\\[A-Za-z]+/.test(m[4])&&(/=/.test(m[4])||/\\(?:approx|leq?|geq?|neq?|equiv)\b/.test(m[4])))||(/=/.test(m[4])&&/[\^_]/.test(m[4])&&/^[A-Za-z0-9()+\-−.,\s^_{}=]+$/.test(m[4]))))continue;
     let tex=m[1]??m[2]??m[3]??m[4]??m[0].slice(1,-1);
     if(m[0].startsWith("[A\\setminus"))tex="A\\setminus B=\\{x\\in A:x\\notin B\\}.";
     values.push(canon(tex));
    }
   }
   n=n.nextElementSibling;
   if(!n||n.matches("h2")||n.matches("h3")&&/^\d+\.\d+\./.test(n.textContent))break;
  }
  result[key]=values;
 }
 return result;
}"""

def markdown_inventory(topic):
    """Independent source inventory, not derived from compiled HTML.
    Strip only source comments/fenced examples and Markdown quote prefixes.
    Retain full TeX, including braces, punctuation and explicit display mode.
    A mismatch is actionable; it is never waived by counting HTML wrappers."""
    path=ROOT/"docs"/"thpt-preview"/"chuyen-de"/("cd"+topic)/"kien-thuc.md"
    text=path.read_text(encoding="utf-8")
    text=re.sub(r"<!--[\s\S]*?-->","",text)
    text=re.sub(r"(?ms)^\s*[\x60~]{3,}[^\n]*\n.*?^\s*[\x60~]{3,}\s*$","",text)
    text=re.sub(r"(?m)^[ \t]*(?:>[ \t]*)+","",text)
    heads=list(re.finditer(r"(?m)^#{2,3} (\d+\.\d+\.|\d+\.)[^\n]*",text))
    result={}
    pattern=re.compile(r"\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]")
    for i,head in enumerate(heads):
        if not head.group(1).count(".")==2:
            continue
        key=head.group(1).rstrip(".")
        block=text[head.start():heads[i+1].start() if i+1<len(heads) else len(text)]
        result[key]=[re.sub(r"\s+","",html.unescape(m.group(1) if m.group(1) is not None else m.group(2))) for m in pattern.finditer(block)]
    assert len(result)==SIZES[topic],(topic,"Markdown outcome inventory",len(result),SIZES[topic])
    return result

AUDIT=r"""panel => {
 const issues=[], visible=el=>!el.closest("[hidden],details:not([open])")&&el.getClientRects().length;
 const walker=document.createTreeWalker(panel,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const t=walker.currentNode,p=t.parentElement;
  if(!p||p.closest(".arithmatex,mjx-container,math,script,style,svg,code,pre,sup,sub")||!visible(p))continue;
  if(/\\(?:\(|\[|\)|\]|frac\b|sqrt\b|lim\b|operatorname\b|setminus\b|cup\b|cap\b|mathbb\b|begin\b|end\b|ge\b|le\b|ne\b|cdot\b|to\b)|\*\*|[A-Za-z0-9)\]][\^_](?:\{|\(|[−-]?[A-Za-z0-9])/.test(t.nodeValue))issues.push(t.nodeValue.trim().slice(0,160));
 }
 const wrappers=[...panel.querySelectorAll(".arithmatex")].filter(visible);
 const errors=[...panel.querySelectorAll("mjx-merror,mjx-container mjx-container")].filter(visible).length;
 const missing=wrappers.filter(el=>el.querySelectorAll("mjx-container").length!==1).length;
 const math=[...MathJax.startup.document.math].filter(item=>item.typesetRoot&&panel.contains(item.typesetRoot))
  .sort((a,b)=>a.typesetRoot===b.typesetRoot?0:(a.typesetRoot.compareDocumentPosition(b.typesetRoot)&Node.DOCUMENT_POSITION_FOLLOWING)?-1:1)
  .map(item=>item.math.replace(/\s+/g,""));
 const loose=[...panel.querySelectorAll("details[data-topic-rw1-managed] > mjx-container,details[data-topic-rw1-managed] > span.arithmatex:not([data-topic-rw1-display])")].length;
 return {issues,errors,missing,math,loose,wrappers:wrappers.length};
}"""
def tab_check(button,width):
    info=button.evaluate("""e=>({short:e.textContent.trim(),full:e.title,aria:e.getAttribute('aria-label'),height:e.getBoundingClientRect().height,font:getComputedStyle(e).fontSize,scroll:e.scrollWidth,client:e.clientWidth})""")
    assert info["full"] and info["aria"]==info["full"] and len(info["short"])<=len(info["full"]) and len(info["short"])<=32,info
    assert abs(info["height"]-44)<=1 and info["font"]==("14px" if width<=640 else "15px"),info
    assert info["scroll"]<=info["client"]+2,("clipped tab",info)

if "--written-library-only" in sys.argv:
    # WRITTEN_LIBRARY_UI_ONLY: actual assembled HTML; content parity for every
    # static Written card; UI comparison to B26 Core only.
    subprocess.run(["node","scripts/assemble-thpt-site.cjs"],cwd=ROOT,check=True)
    public=ROOT/"site"
    cards_re=r'<section\b(?=[^>]*\bclass="thpt-r4-written-card")[^>]*>[\s\S]*?</section>'
    old_re=r'<details><summary>([\s\S]*?)</summary>([\s\S]*?)</details>'
    new_re=r'<details><summary>([\s\S]*?)</summary><div class="slm-written-reveal">([\s\S]*?)</div></details>'
    pages=cards=controls=0
    for src in sorted((BUILD/"thpt-preview/thu-vien").rglob("*.html")):
        raw=src.read_text(encoding="utf-8")
        actual=(public/src.relative_to(BUILD)).read_text(encoding="utf-8")
        old=re.findall(cards_re,raw); new=re.findall(cards_re,actual)
        assert len(old)==len(new),src
        if not old:
            assert 'id="slm-written-library-ui"' not in actual,src
            continue
        assert 'id="slm-written-library-ui"' in actual,src
        pages+=1
        for before,after in zip(old,new):
            pairs=re.findall(old_re,before); shown=re.findall(new_re,after)
            assert pairs and len(pairs)==len(shown),(src,before[:120])
            for (label,body),(name,result) in zip(pairs,shown):
                assert name==("Lời giải và rubic" if "rubric" in label.lower() else "Gợi ý"),(src,label,name)
                assert body==result,("Canonical disclosure body changed",src)
            restored=after.replace('<div class="slm-written-actions">',"",1)
            restored=re.sub(new_re,lambda m: '<details><summary>'+pairs.pop(0)[0]+'</summary>'+m[2]+'</details>',restored)
            # Remove the single wrapper closing tag after the last disclosure.
            restored=restored.replace("</details></div>","</details>",1)
            assert restored==before,("Unrelated card markup changed",src)
            cards+=1; controls+=len(shown)
    assert pages>=15 and cards>=50 and controls>=cards,(pages,cards,controls)
    print(f"PASS written library exact content: {pages} pages, {cards} cards, {controls} controls",flush=True)
    class ProjectHandler(http.server.SimpleHTTPRequestHandler):
        def translate_path(self,p):
            prefix="/self-learning-math"
            if p.startswith(prefix+"/"): p=p[len(prefix):]
            return super().translate_path(p)
    live_server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(ProjectHandler,directory=str(public)))
    threading.Thread(target=live_server.serve_forever,daemon=True).start()
    live=f"http://127.0.0.1:{live_server.server_address[1]}/self-learning-math/thpt-preview/"
    style="""e=>{const s=getComputedStyle(e);return Object.fromEntries(['height','minHeight','maxHeight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderTopColor','borderTopLeftRadius','backgroundColor','color','fontSize','fontWeight','lineHeight'].map(k=>[k,s[k]]))}"""
    with sync_playwright() as pw:
        for engine in ("chromium","webkit"):
            browser=getattr(pw,engine).launch(headless=True)
            for width in (390,820,1440):
                page=browser.new_page(viewport={"width":width,"height":850})
                page.goto(live+"sgk/chuong-ix/luyen-tap/",wait_until="domcontentloaded")
                page.locator('[data-thpt-open-quiz="b26-core"]').click(timeout=20000)
                ref=page.locator(".thpt-r4-reviewed-formative-card .thpt-r4-formative-actions details summary").first
                expect(ref).to_be_visible(timeout=20000)
                reference={}
                for theme in ("default","slate"):
                    page.locator("body").evaluate("(e,t)=>e.setAttribute('data-md-color-scheme',t)",theme)
                    reference[theme]=ref.evaluate(style)
                page.goto(live+"thu-vien/tu-luan/",wait_until="domcontentloaded")
                card=page.locator("#tu-luan-thuong-demo")
                btn=card.locator(".slm-written-actions>details>summary")
                expect(btn).to_have_count(2)
                assert btn.all_inner_texts()==["Gợi ý","Lời giải và rubic"]
                details=card.locator(".slm-written-actions>details")
                panels=details.locator(".slm-written-reveal")
                assert details.evaluate_all("els=>els.every(e=>!e.open)")
                for theme in ("default","slate"):
                    page.locator("body").evaluate("(e,t)=>e.setAttribute('data-md-color-scheme',t)",theme)
                    for button in btn.all():
                        assert button.evaluate(style)==reference[theme],(engine,width,theme,button.evaluate(style),reference[theme])
                        assert button.evaluate("""e=>['::before','::after'].every(p=>{const s=getComputedStyle(e,p);return s.content==='none'||s.display==='none'})""")
                btn.nth(0).click(); expect(panels.nth(0)).to_be_visible()
                assert not details.nth(1).evaluate("e=>e.open")
                btn.nth(1).click(); expect(panels.nth(1)).to_be_visible()
                assert details.nth(0).evaluate("e=>e.open")
                outer=card.locator(":scope>p:not(.thpt-r4-eyebrow)").first.evaluate("e=>getComputedStyle(e).fontSize")
                for panel in panels.all():
                    info=panel.evaluate("""e=>{const s=getComputedStyle(e);return {font:s.fontSize,padding:[s.paddingTop,s.paddingRight,s.paddingBottom,s.paddingLeft],sizes:[...e.querySelectorAll('p,li,th,td')].map(n=>getComputedStyle(n).fontSize),fits:e.scrollWidth<=e.clientWidth+2}}""")
                    assert info["font"]==outer and all(v==outer for v in info["sizes"]),(engine,width,outer,info)
                    assert info["padding"]==["12px","14px","12px","14px"] and info["fits"],info
                assert page.evaluate("document.documentElement.scrollWidth<=innerWidth+2")
                btn.nth(0).click(); expect(panels.nth(0)).to_be_hidden()
                assert details.nth(1).evaluate("e=>e.open")
                btn.nth(1).click(); expect(panels.nth(1)).to_be_hidden()
                page.goto(live+"thu-vien/tu-luan-g11-chuong-viii/",wait_until="domcontentloaded")
                only=page.locator(".thpt-r4-written-card").first.locator(".slm-written-actions>details>summary")
                expect(only).to_have_count(1); expect(only).to_have_text("Lời giải và rubic")
                only.click(); expect(only.locator("xpath=following-sibling::div")).to_be_visible()
                print(f"PASS written library {engine} {width}: exact Core style, text-only, body/table typography, independent toggles, solution-only route",flush=True)
                page.close()
            browser.close()
    live_server.shutdown(); server.shutdown()
    sys.exit(0)

if "--back-top-only" in sys.argv:
    # TOPIC_BACK_TOP_R3: test final production assembly, not preview HTML.
    from html.parser import HTMLParser
    import hashlib
    subprocess.run(["node","scripts/assemble-thpt-site.cjs"],cwd=ROOT,check=True)
    public=ROOT/"site"
    js_hash=hashlib.sha256((public/"assets/javascripts/sticky-nav-v1.js").read_bytes()).hexdigest()[:16]
    css_hash=hashlib.sha256((public/"assets/stylesheets/site-design-system.css").read_bytes()).hexdigest()[:16]
    class TopInventory(HTMLParser):
        def __init__(self):
            super().__init__(); self.top=[]; self.js=[]; self.css=[]
        def handle_starttag(self,tag,attrs):
            a=dict(attrs)
            if tag=='button' and a.get('data-md-component')=='top': self.top.append(a)
            if tag=='script' and '/sticky-nav-v1.js' in a.get('src',''): self.js.append(a['src'])
            if tag=='link' and '/site-design-system.css' in a.get('href',''): self.css.append(a['href'])
    native=0; standalone=0
    for source in sorted((BUILD/'thpt-preview').rglob('*.html')):
        original=source.read_text(encoding='utf-8')
        path=public/source.relative_to(BUILD)
        output=path.read_text(encoding='utf-8')
        prior=TopInventory(); prior.feed(original)
        parser=TopInventory(); parser.feed(output)
        if not prior.top:
            assert output==original,path
            standalone+=1
            continue
        assert len(parser.top)==len(parser.js)==len(parser.css)==1,path
        top=parser.top[0]
        assert 'slm-topic-back-top' in top['class'].split() and top['title']==top['aria-label']=='Về đầu trang' and 'hidden' in top,path
        assert parser.js[0]==prior.js[0]+'?v='+js_hash and parser.css[0]==prior.css[0]+'?v='+css_hash,path
        old_btn=re.search(r'<button\b(?=[^>]*\bdata-md-component="top")[^>]*>[\s\S]*?</button>',original).group(0)
        new_btn=re.search(r'<button\b(?=[^>]*\bdata-md-component="top")[^>]*>[\s\S]*?</button>',output).group(0)
        assert 'Trở lại mục lục' not in new_btn and re.search(r'<svg\b[\s\S]*?</svg>',old_btn).group(0)==re.search(r'<svg\b[\s\S]*?</svg>',new_btn).group(0),path
        restored=output.replace(new_btn,old_btn,1).replace('src="'+parser.js[0]+'"','src="'+prior.js[0]+'"',1).replace('href="'+parser.css[0]+'"','href="'+prior.css[0]+'"',1)
        assert restored==original,("Unrelated HTML changed",path)
        native+=1
    assert native>=150 and standalone==25,(native,standalone)
    print(f"PASS R3 assembled HTML: {native} native controls, versioned assets, exact unrelated HTML parity; {standalone} models unchanged",flush=True)
    class ProjectHandler(http.server.SimpleHTTPRequestHandler):
        def translate_path(self,p):
            prefix="/self-learning-math"
            if p.startswith(prefix+"/"): p=p[len(prefix):]
            return super().translate_path(p)
    live_server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(ProjectHandler,directory=str(public)))
    threading.Thread(target=live_server.serve_forever,daemon=True).start()
    live=f"http://127.0.0.1:{live_server.server_address[1]}/self-learning-math/"
    routes=((390,'sgk/chuong-v/bai-14/'),(1440,'chuyen-de/cd01/kien-thuc/'))
    with sync_playwright() as pw:
        for engine in ("chromium","webkit"):
            browser=getattr(pw,engine).launch(headless=True)
            for width,route in routes:
                page=browser.new_page(viewport={"width":width,"height":700})
                # Markup/styling must be correct without late JS DOM rewrite.
                page.route("**/sticky-nav-v1.js*",lambda route: route.abort())
                page.goto(live+"thpt-preview/"+route,wait_until="domcontentloaded")
                top=page.locator("button.md-top.slm-topic-back-top")
                expect(top).to_have_count(1,timeout=20000)
                expect(top).to_have_attribute("aria-label","Về đầu trang")
                expect(top).to_have_attribute("title","Về đầu trang")
                assert top.inner_text().strip()==""
                expect(top).to_be_hidden()
                selected=lambda:page.locator('[role="tab"][aria-selected="true"]').evaluate_all("(els)=>els.map(e=>e.getAttribute('aria-controls')||e.id||e.textContent.trim())")
                if route.endswith("kien-thuc/"):
                    expect(page.locator('.thpt-r4-knowledge-tab[role="tab"]:visible').first).to_be_visible(timeout=20000)
                active=selected()
                page.wait_for_load_state("load")
                page.wait_for_function("typeof window.viewport$?.subscribe === 'function'")
                if page.evaluate("document.documentElement.scrollHeight-innerHeight<240"):
                    # A short page needs no scroll control; test initial hidden state,
                    # common styling and label rather than inventing scrollable content.
                    print(f"PASS R3 native component present and hidden on short route {route} {engine} {width}",flush=True)
                    page.close()
                    continue
                # Material shows the native control only on an up-scroll at y>0.
                # Wait for its actual viewport stream, then use two settled scroll
                # positions within the reading area (not a changing footer/end).
                page.wait_for_function("typeof window.viewport$?.subscribe === 'function'")
                page.evaluate("""() => {
                  window.__r3ViewportOffsets=[];
                  window.viewport$.subscribe(v=>window.__r3ViewportOffsets.push(v.offset.y));
                }""")
                page.wait_for_function("window.__r3ViewportOffsets.length>0 && document.documentElement.scrollHeight-innerHeight>=240")
                down=page.evaluate("""() => {
                  const max=document.documentElement.scrollHeight-innerHeight;
                  const y=Math.min(800,max-8);
                  window.scrollTo({top:y,behavior:'instant'});
                  return y;
                }""")
                page.wait_for_function("y=>Math.abs(scrollY-y)<3 && Math.abs(window.__r3ViewportOffsets.at(-1)-y)<3",arg=down)
                page.wait_for_timeout(350)
                up=down-100
                page.evaluate("y=>window.scrollTo({top:y,behavior:'instant'})",up)
                page.wait_for_function("y=>Math.abs(scrollY-y)<3 && Math.abs(window.__r3ViewportOffsets.at(-1)-y)<3",arg=up)
                try:
                    expect(top).to_be_visible(timeout=10000)
                except AssertionError:
                    print("R3_NATIVE_VISIBILITY_HOLD",engine,width,route,top.evaluate("""e=>({
                      y:scrollY,offsets:window.__r3ViewportOffsets.slice(-20),
                      mainTop:document.querySelector('main')?.offsetTop,
                      hidden:e.hidden,inline:e.getAttribute('style'),
                      visibility:getComputedStyle(e).visibility,display:getComputedStyle(e).display
                    })"""),flush=True)
                    raise
                for theme in ("default","slate"):
                    page.locator("body").evaluate("(e,t)=>e.setAttribute('data-md-color-scheme',t)",theme)
                    geo=top.evaluate("""e=>{
                      const r=e.getBoundingClientRect(),s=getComputedStyle(e),ai=document.querySelector('.floating-ai-launcher'),a=ai?.getBoundingClientRect();
                      return {w:r.width,h:r.height,right:innerWidth-r.right,bottom:innerHeight-r.bottom,position:s.position,radius:s.borderTopLeftRadius,color:s.color,bg:s.backgroundColor,svg:e.querySelectorAll('svg').length,hit:e.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)),aiGap:a&&a.width?a.top-r.bottom:null};
                    }""")
                    assert abs(geo["w"]-44)<=1 and abs(geo["h"]-44)<=1,geo
                    assert geo["position"]=="fixed" and geo["radius"]=="10px" and 10<=geo["right"]<=40 and 75<=geo["bottom"]<=160,geo
                    assert geo["color"]=="rgb(255, 255, 255)" and geo["bg"]=="rgb(40, 77, 181)" and geo["svg"]==1 and geo["hit"],geo
                    assert geo["aiGap"] is None or geo["aiGap"]>=8,geo
                top.click()
                page.wait_for_function("window.scrollY<=2",timeout=10000)
                expect(top).to_be_hidden()
                assert selected()==active,"Active Knowledge tabs changed"
                print(f"PASS R3 Back to top {route} {engine} {width}: geometry, safe spacing, light/slate, native scroll, tab retained",flush=True)
                page.close()
            # THCS remains unchanged: verify actual root build with its own HTTP server.
            thcs=browser.new_page(viewport={"width":820,"height":700})
            root_server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(ROOT/"site")))
            threading.Thread(target=root_server.serve_forever,daemon=True).start()
            thcs.goto(f"http://127.0.0.1:{root_server.server_address[1]}/kien-thuc/02-so-va-phep-tinh/",wait_until="load")
            expect(thcs.locator("button.md-top")).to_have_count(1)
            expect(thcs.locator(".slm-topic-back-top")).to_have_count(0)
            assert "Trở lại mục lục" in thcs.locator("button.md-top").text_content()
            print(f"PASS R3 THCS excluded {engine}",flush=True)
            thcs.close(); root_server.shutdown()
            browser.close()
    live_server.shutdown()
    server.shutdown()
    sys.exit(0)

if "--disclosures-only" in sys.argv:
    # TOPIC_SGK_DISCLOSURE_ONLY: compare actual component computed style
    # against approved SGK B14, and inspect six representative Topic routes.
    cases={"01":11,"03":12,"06":16,"13":16,"17":13,"22":13}
    style_js="""el => {
      const props=['fontSize','fontWeight','lineHeight','color','backgroundColor','borderTopColor','borderTopWidth','borderRadius','boxShadow','paddingTop','paddingRight','paddingBottom','paddingLeft','marginTop','marginBottom','minHeight'];
      const read=(e,pseudo,keys=props)=>Object.fromEntries(keys.map(k=>[k,getComputedStyle(e,pseudo)[k]]));
      const summary=el.querySelector(':scope > summary');
      const prose=el.querySelector('p,li');
      return {box:read(el),summary:read(summary),marker:read(summary,'::before',['content','color','fontSize','width','top','left','transform']),prose:prose?read(prose,null,['fontSize','lineHeight']):null};
    }"""
    with sync_playwright() as pw:
        for engine in ("chromium","webkit"):
            browser=getattr(pw,engine).launch(headless=True)
            for width in (390,1440):
                page=browser.new_page(viewport={"width":width,"height":850})
                sgk=BASE.replace("chuyen-de/","sgk/chuong-v/bai-14/")
                page.goto(sgk,wait_until="domcontentloaded")
                expect(page.locator(".md-typeset.thpt-g10-chv-golden")).to_have_count(1,timeout=20000)
                sgk_answer=page.locator('.tabbed-block details.question').filter(has=page.locator('summary',has_text=re.compile(r"^Đối chiếu$"))).first
                sgk_tip=page.locator('.tabbed-block details.tip').filter(has=page.locator('summary',has_text=re.compile(r"^Kiểm lỗi$"))).first
                assert sgk_answer.count() and sgk_tip.count(),"SGK reference missing"
                for theme in ("default","slate"):
                    page.locator("body").evaluate("(e,t)=>e.setAttribute('data-md-color-scheme',t)",theme)
                    reference={}
                    for kind,el in (("answer",sgk_answer),("mistake",sgk_tip)):
                        el.evaluate("e=>e.open=false")
                        closed=el.evaluate(style_js)
                        el.evaluate("e=>e.open=true")
                        opened=el.evaluate(style_js)
                        reference[kind]=(closed,opened)
                    for topic,number in cases.items():
                        tab=browser.new_page(viewport={"width":width,"height":850})
                        tab.goto(BASE+"cd"+topic+"/kien-thuc/",wait_until="domcontentloaded")
                        expect(tab.locator(".topic01-knowledge-layout")).to_be_visible(timeout=20000)
                        tab.locator("body").evaluate("(e,t)=>e.setAttribute('data-md-color-scheme',t)",theme)
                        answers=tab.locator('details[data-topic-sgk-disclosure="answer"]')
                        tips=tab.locator('details[data-topic-sgk-disclosure="mistake"]')
                        expect(answers).to_have_count(number)
                        expect(tips).to_have_count(number)
                        assert answers.evaluate_all("els=>els.every(e=>!e.open&&e.classList.contains('question')&&e.nextElementSibling?.matches('details.tip[data-topic-sgk-disclosure=mistake]'))")
                        assert tips.evaluate_all("els=>els.every(e=>!e.open&&e.querySelector(':scope > summary').textContent==='Kiểm lỗi'&&e.children.length>1)")
                        # A disclosure can belong to a non-default Knowledge subtab.
                        # Activate its real learner-facing tabs in outer-to-inner order;
                        # never force-click a hidden control or manipulate panel.hidden.
                        answer=answers.first
                        panel_ids=answer.evaluate("""e=>[
                          e.closest('.thpt-r4-knowledge-module-panel')?.id,
                          e.closest('.thpt-r4-knowledge-content-panel')?.id
                        ].filter(Boolean)""")
                        assert panel_ids,(topic,"disclosure outside Knowledge panels")
                        for panel_id in panel_ids:
                            button=tab.locator('[role="tab"][aria-controls="'+panel_id+'"]')
                            expect(button).to_have_count(1)
                            button.click()
                            expect(button).to_have_attribute("aria-selected","true")
                        tip=answer.locator('xpath=following-sibling::*[1]')
                        expect(tip).to_have_attribute("data-topic-sgk-disclosure","mistake")
                        # Log the actual ancestor geometry/cascade if navigation succeeded
                        # but the native control remains hidden; do not waive visibility.
                        for component in (answer,tip):
                            try:
                                expect(component.locator("summary")).to_be_visible()
                            except AssertionError:
                                diagnostic=component.locator("summary").evaluate("""e=>{
                                  const rules=[];
                                  function scan(list,node){
                                    for(const r of list){
                                      if(r.conditionText && r instanceof CSSMediaRule && !matchMedia(r.conditionText).matches)continue;
                                      if(r.cssRules){scan(r.cssRules,node);continue}
                                      if(!r.selectorText||!r.style)continue;
                                      try{if(node.matches(r.selectorText)&&['display','visibility','content-visibility','height','max-height','position'].some(k=>r.style.getPropertyValue(k)))rules.push({node:node.tagName+'.'+node.className,selector:r.selectorText,css:r.style.cssText})}catch{}
                                    }
                                  }
                                  const chain=[];
                                  for(let n=e;n;n=n.parentElement){
                                    const c=getComputedStyle(n),b=n.getBoundingClientRect();
                                    chain.push({tag:n.tagName,id:n.id,cls:n.className,hidden:n.hidden,open:n.open,inline:n.getAttribute('style'),display:c.display,visibility:c.visibility,contentVisibility:c.contentVisibility,position:c.position,rect:[b.x,b.y,b.width,b.height]});
                                    if(c.display==='none'||c.visibility!=='visible'||!b.height||n.classList.contains('topic-sgk-disclosure-pair'))for(const sheet of document.styleSheets){try{scan(sheet.cssRules,n)}catch{}}
                                  }
                                  return {chain,rules:rules.slice(-80),root:document.documentElement.className};
                                }""")
                                print("DISCLOSURE_VISIBILITY_HOLD",topic,engine,width,theme,panel_ids,json.dumps(diagnostic,ensure_ascii=False),flush=True)
                                raise
                        for kind,el in (("answer",answer),("mistake",tip)):
                            closed=el.evaluate(style_js)
                            el.locator("summary").click()
                            expect(el).to_have_attribute("open","")
                            opened=el.evaluate(style_js)
                            for state,a,b in (("closed",closed,reference[kind][0]),("opened",opened,reference[kind][1])):
                                for k in ("box","summary","marker"):
                                    # Material open summary negative margins derive from the same border/padding.
                                    assert a[k]==b[k],(topic,engine,width,theme,kind,state,k,a[k],b[k])
                            assert opened["prose"] and opened["prose"]["fontSize"]==el.evaluate("e=>getComputedStyle(e.closest('.thpt-r4-knowledge-content-panel')).fontSize"),(topic,kind,opened)
                            el.locator("summary").click()
                            assert not el.evaluate("e=>e.open")
                        # Independent toggles: neither reveal must open the other.
                        answer.locator("summary").click()
                        assert not tip.evaluate("e=>e.open")
                        tip.locator("summary").click()
                        assert answer.evaluate("e=>e.open") and tip.evaluate("e=>e.open")
                        answer.locator("summary").click()
                        assert tip.evaluate("e=>e.open")
                        tab.close()
                        print(f"PASS Topic/SGK disclosures CĐ{topic} {engine} {width} {theme}: {number} pairs",flush=True)
                page.close()
            browser.close()
    server.shutdown()
    sys.exit(0)

if "--tabs-only" in sys.argv:
    # RW3_TAB_SCOPE_HOLD: check labels and sampled navigation only.
    expected_labels={}
    for wave in (4,5):
        js=(ROOT/f"docs/assets/javascripts/thpt-topic-w{wave}-golden-v1.js").read_text(encoding="utf-8")
        data=json.loads(re.search(r"const topicTabNames=(\{[\s\S]*?\n\});",js).group(1))
        expected_labels.update(data)
    with sync_playwright() as pw:
        for engine in ("chromium","webkit"):
            browser=getattr(pw,engine).launch(headless=True)
            for topic,outcomes in TAIL_SIZES.items():
                headings=(ROOT/f"docs/thpt-preview/chuyen-de/cd{topic}/kien-thuc.md").read_text(encoding="utf-8")
                modules=re.findall(r"^## (.+)$",headings,re.M)
                subs=re.findall(r"^### (.+)$",headings,re.M)
                labels=expected_labels[topic]
                for width in (390,820,1440):
                    page=browser.new_page(viewport={"width":width,"height":850})
                    errors=[]
                    page.on("pageerror",lambda e:errors.append(str(e)))
                    res=page.goto(BASE+"cd"+topic+"/kien-thuc/",wait_until="domcontentloaded")
                    assert res and res.status==200
                    expect(page.locator(".topic01-knowledge-layout")).to_be_visible(timeout=20000)
                    expect(page.locator(MODULE)).to_have_count(len(modules))
                    expect(page.locator(SUB)).to_have_count(outcomes)
                    offset=0
                    for i,module in enumerate(page.locator(MODULE).all()):
                        module.click()
                        tab_check(module,width)
                        assert module.inner_text().strip()==labels["modules"][i]
                        assert module.get_attribute("title").strip()==modules[i].strip()
                        group=page.locator(".thpt-r4-knowledge-module-panel:visible")
                        for j,sub in enumerate(group.locator(SUB).all()):
                            tab_check(sub,width)
                            assert sub.inner_text().strip()==labels["subs"][i][j]
                            assert sub.get_attribute("title").strip()==subs[offset].strip()
                            if j==0 or j==len(labels["subs"][i])-1:
                                sub.click()
                                expect(page.locator(PANEL)).to_be_visible()
                                assert page.locator(PANEL).locator("h3").first.inner_text().strip()==subs[offset].strip()
                            offset+=1
                    assert offset==outcomes and not errors,(topic,width,errors)
                    page.close()
                    print(f"PASS R-W3 tab labels CĐ{topic} {engine} {width}: {outcomes}",flush=True)
            browser.close()
    server.shutdown()
    sys.exit(0)

cases=0
formula_cases=0
with sync_playwright() as pw:
    for engine in ("chromium","webkit"):
        browser=getattr(pw,engine).launch(headless=True)
        for topic,outcomes in SIZES.items():
            for width in (390,820,1440):
                page=browser.new_page(viewport={"width":width,"height":850},device_scale_factor=1)
                errors=[]
                page.on("pageerror",lambda err:errors.append(str(err)))
                page.on("console",lambda msg:errors.append(msg.text) if msg.type=="error" and ("TOPIC_RW1_MATH_HOLD" in msg.text or "TOPIC_W1_GOLDEN_HOLD" in msg.text) else None)
                res=page.goto(BASE+"cd"+topic+"/kien-thuc/",wait_until="domcontentloaded")
                assert res and res.status==200
                expect(page.locator(".topic01-knowledge-layout")).to_be_visible(timeout=20000)
                page.wait_for_function("()=>!!window.SLMTopicRW1Math && !!window.MathJax?.startup?.document",timeout=30000)
                page.evaluate("()=>MathJax.startup.promise")
                inventory=page.evaluate(SOURCE)
                signed=markdown_inventory(topic)
                assert set(inventory)==set(signed),(topic,"source/HTML outcome mismatch",set(inventory)^set(signed))
                for key,values in signed.items():
                    source_math=Counter(values); html_math=Counter(inventory[key])
                    assert source_math==html_math,(topic,key,"Markdown -> compiled HTML formula mismatch",list((source_math-html_math).items())[:10],list((html_math-source_math).items())[:10])
                    assert values==inventory[key],(topic,key,"Markdown -> HTML formula order mismatch")
                assert len(inventory)==outcomes,(topic,"source outcome inventory",len(inventory),outcomes)
                expect(page.locator(SUB)).to_have_count(outcomes)
                assert page.locator("[data-thpt-readiness],[data-mastery-credit]").count()==0
                seen=set()
                for module in page.locator(MODULE).all():
                    module.click()
                    tab_check(module,width)
                    group=page.locator(".thpt-r4-knowledge-module-panel:visible")
                    expect(group).to_have_count(1)
                    for sub in group.locator(SUB).all():
                        sub.click()
                        tab_check(sub,width)
                        panel=page.locator(PANEL)
                        expect(panel).to_have_count(1)
                        key=re.match(r"^\d+\.\d+",panel.locator("h3").first.inner_text()).group()
                        assert key not in seen,(topic,key)
                        seen.add(key)
                        disclosures=panel.locator("details.question")
                        assert disclosures.count()>=1,(topic,key,"missing disclosure")
                        for d in disclosures.all():
                            assert d.get_attribute("data-topic-rw1-managed")=="1"
                            assert d.get_attribute("open") is None,(topic,key,"answer opened before action")
                            d.locator("summary").click()
                            expect(d).to_have_attribute("open","")
                        # Real runtime only; do not call typeset manually in QA.
                        page.wait_for_function("""()=>{const p=document.querySelector('.thpt-r4-knowledge-content-panel:not([hidden])');return !!p&&[...document.querySelectorAll('.thpt-r4-knowledge-content-panel .arithmatex')].filter(x=>!x.closest('[hidden],details:not([open])')).every(x=>x.querySelectorAll('mjx-container').length===1)}""",timeout=30000)
                        first=panel.evaluate(AUDIT)
                        expected=Counter(signed[key]);actual=Counter(first["math"])
                        assert expected==actual,(engine,topic,width,key,"formula parity",list((expected-actual).items())[:8],list((actual-expected).items())[:8])
                        assert first["math"]==signed[key],(engine,topic,width,key,"actual DOM formula order mismatch")
                        assert not first["issues"] and first["errors"]==first["missing"]==first["loose"]==0,(engine,topic,width,key,first)
                        for d in disclosures.all():
                            for _ in range(2):
                                d.locator("summary").click()
                                assert d.get_attribute("open") is None
                                d.locator("summary").click()
                                expect(d).to_have_attribute("open","")
                        # Let toggle callbacks and the queued MathJax work settle.
                        page.wait_for_timeout(120)
                        second=panel.evaluate(AUDIT)
                        assert second["math"]==first["math"] and Counter(second["math"])==actual and second["errors"]==second["missing"]==second["loose"]==0 and not second["issues"],(engine,topic,width,key,"reopen drift",second)
                        for d in disclosures.all():
                            d.locator("summary").click()
                            assert d.get_attribute("open") is None
                        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"),(engine,topic,width,key,"page overflow")
                        cases+=1
                        formula_cases+=sum(expected.values())
                assert seen==set(inventory),(topic,seen,set(inventory))
                assert not errors,(engine,topic,width,errors)
                print(f"PASS {WAVE} {engine} CĐ{topic} @{width}: {len(seen)} outcomes, Markdown/HTML/MathJax parity, 2 reopen cycles, tab labels",flush=True)
                page.close()
        browser.close()
assert cases==sum(SIZES.values())*6,(cases,sum(SIZES.values())*6)
print(f"PASS {WAVE} all {cases} outcome/viewports; {formula_cases} explicit source formula/viewports",flush=True)
server.shutdown()
