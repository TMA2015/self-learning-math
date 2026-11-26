#!/usr/bin/env python3
"""W2 CĐ06–11 ONLY: compiled MkDocs Golden browser/QA, no deploy, no SGK sweep."""
from __future__ import annotations
import functools
import http.server
import pathlib
import threading
import sys
import re
import html

from playwright.sync_api import sync_playwright, expect

ROOT = pathlib.Path(__file__).resolve().parent.parent
W2A="--w2a" in sys.argv
W2B="--w2b" in sys.argv
assert not (W2A and W2B), "Select one wave"
REFRESH=W2A or W2B
BUILD = ROOT / ("site" if REFRESH else "site-thpt-preview")
class ProjectHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self,p):
        prefix="/self-learning-math"
        if REFRESH and p.startswith(prefix+"/"): p=p[len(prefix):]
        return super().translate_path(p)
assert BUILD.is_dir(), "THPT MkDocs compiled tree required"
server = http.server.ThreadingHTTPServer(
    ("127.0.0.1", 0),
    functools.partial(ProjectHandler, directory=str(BUILD))
)
threading.Thread(target=server.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{server.server_address[1]}"+("/self-learning-math" if REFRESH else "")+"/thpt-preview/chuyen-de/"
SIZES = {
    "06": (4, 4, 16, 66, 16, 5),
    "07": (4, 4, 18, 69, 18, 3),
    "08": (4, 4, 18, 58, 18, 3),
    "09": (5, 4, 32, 108, 32, 4),
    "10": (6, 6, 36, 120, 36, 5),
    "11": (4, 4, 22, 116, 22, 4),
}
if REFRESH:
    SIZES={k:v for k,v in SIZES.items() if k in (("06","07","08") if W2A else ("09","10","11"))}
PALETTE = {
    "concept": "rgb(232, 247, 242)",
    "rule": "rgb(234, 241, 252)",
    "recap": "rgb(255, 243, 213)",
    "formula": "rgba(0, 0, 0, 0)",
}

def source_math(topic,part,marker):
    raw=(ROOT/f"docs/thpt-preview/chuyen-de/cd{topic}/{part}.md").read_text(encoding="utf-8")
    raw=raw.split(f"<!-- TOPIC{topic}_APPROVED_SOURCE_END -->",1)[0]
    blocks=re.split(r"<!-- "+marker+r":\s*",raw)[1:]
    result={}
    def formulas(t):
        return [re.sub(r"\s+","",html.unescape(m[0] or m[1])) for m in re.findall(r"\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]",t)]
    for block in blocks:
        item=block.split(";",1)[0]
        stem,_,solution=block.partition("<details")
        solution=solution.split("</details>",1)[0]
        result[item]=(formulas(stem),formulas(solution) if marker=="DISPLAY_ONLY_CANONICAL" else [],"**Các phương án:**" in stem)
    return result

def assert_math(page,root,expected,label,stem_only=False):
 # Do not invoke typeset in a test: require actual learner runtime.
 page.wait_for_function("""({selector,stemOnly,count})=>{
  const root=document.querySelector(selector),m=window.MathJax?.startup?.document?.math;
  if(!root||!m)return false;
  const visible=e=>root.contains(e)&&!e.closest('[hidden],details:not([open])')&&(!stemOnly||!e.closest('details,.g10sc-review'));
  return [...m].filter(i=>i.typesetRoot&&visible(i.typesetRoot)).length>=count;
 }""",arg={"selector":root,"stemOnly":stem_only,"count":len(expected)},timeout=20000)
 got=page.locator(root).evaluate(r"""(root,stemOnly)=>{
  const visible=e=>root.contains(e)&&!e.closest('[hidden],details:not([open])')&&(!stemOnly||!e.closest('details,.g10sc-review'));
  const math=[...MathJax.startup.document.math].filter(i=>i.typesetRoot&&visible(i.typesetRoot)).sort((a,b)=>a.typesetRoot===b.typesetRoot?0:a.typesetRoot.compareDocumentPosition(b.typesetRoot)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1).map(i=>i.math.replace(/\s+/g,''));
  const errors=[...root.querySelectorAll('mjx-merror,mjx-container mjx-container')].filter(visible).length;
  const missing=[...root.querySelectorAll('.arithmatex')].filter(visible).filter(e=>e.querySelectorAll('mjx-container').length!==1).length;
  const raw=[];const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){const n=walker.currentNode,e=n.parentElement;if(e&&visible(e)&&!e.closest('mjx-container,.arithmatex,script,style,svg,code,pre')&&/\\(?:\(|\)|\[|\]|mathbb\b|setminus\b|cup\b|cap\b|frac\b|sqrt\b|ge\b|le\b|ne\b|mid\b)/.test(n.nodeValue))raw.push(n.nodeValue.trim().slice(0,120));}
  return {math,errors,missing,raw};
 }""",stem_only)
 assert got["math"]==expected and got["errors"]==got["missing"]==0 and not got["raw"],(label,expected,got)
def assert_signed_display(page,topic,outcome,root):
    # Check actual signed display TeX, not a historical renderer-specific marker.
    raw=(ROOT/f"docs/thpt-preview/chuyen-de/cd{topic}/kien-thuc.md").read_text(encoding="utf-8")
    section=re.split(r"^### "+re.escape(outcome)+r"\.\s",raw,flags=re.M)[1]
    section=re.split(r"^#{2,3} ",section,maxsplit=1,flags=re.M)[0]
    section=re.sub(r"^>\s?", "", section,flags=re.M)
    expected=[re.sub(r"\s+","",html.unescape(x)) for x in re.findall(r"\\\[([\s\S]*?)\\\]",section)]
    assert len(expected)==1,(topic,outcome,"signed display inventory",expected)
    expect(root.locator("mjx-container[display='true']")).to_have_count(1,timeout=20000)
    expect(root.locator("mjx-container[display='true']")).to_be_visible()
    got=root.evaluate(r"""el=>[...MathJax.startup.document.math].filter(i=>i.display&&i.typesetRoot&&el.contains(i.typesetRoot)&&!i.typesetRoot.closest('[hidden],details:not([open])')).map(i=>i.math.replace(/\s+/g,''))""")
    assert got==expected,(topic,outcome,"signed display mismatch",expected,got)
    assert root.locator("mjx-merror,mjx-container mjx-container").count()==0

with sync_playwright() as pw:
    for engine in ("chromium", "webkit"):
        browser = getattr(pw, engine).launch(headless=True)
        for topic, (groups, practice_groups, outcomes, item_count, replays, svg_count) in SIZES.items():
            if REFRESH:
                practice_math=source_math(topic,"luyen-tap","DISPLAY_ONLY_CANONICAL")
                replay_math=source_math(topic,"tu-kiem-tra","PUBLIC_REPLAY_ONLY")
                assert len(practice_math)==item_count and len(replay_math)==replays
            for width in (390, 820, 1440):
                ctx = browser.new_context(viewport={"width": width, "height": 850}, device_scale_factor=1)
                page = ctx.new_page()
                errors: list[str] = []
                notices: list[str] = []
                page.on("pageerror", lambda err: errors.append(str(err)))
                page.on("console", lambda msg: notices.append(msg.text) if msg.type == "error" else None)
                prefix = BASE + "cd" + topic + "/"
                def load(part: str):
                    res = page.goto(prefix + part + "/", wait_until="domcontentloaded")
                    assert res and res.status == 200, (engine, topic, width, part, "HTTP")
                    if page.evaluate("document.documentElement.classList.contains('topic-w1-fallback')"):
                        debug = page.evaluate("""() => ({
                          current:document.querySelector('[data-topic-w1]')?.outerHTML.slice(0,350),
                          part:document.querySelector('[data-topic-w1-source-start]')?.outerHTML,
                          end:document.querySelector('[data-topic-w1-source-end]')?.outerHTML,
                          golden:!!window.THPT_GOLDEN_RUNTIME,
                          js:[...document.scripts].filter(s=>s.src.includes('topic-w1')).map(s=>s.src),
                          headings:[...document.querySelectorAll('article.md-typeset > h2')].map(x=>x.textContent.slice(0,70))
                        })""")
                        raise AssertionError((engine,topic,width,part,"W1 hydration fallback",errors,notices[-8:],debug))
                    expect(page.locator(".topic-w1-boot-status")).to_be_hidden(timeout=15000)
                    assert page.evaluate("!document.documentElement.classList.contains('topic-w1-pending')"), (engine, topic, width, part, "hydration")
                    assert page.evaluate("!document.documentElement.classList.contains('topic-w1-fallback')"), (engine, topic, width, part, "fallback activated")
                    nav = page.locator(".topic-w1-release-nav .thpt-sgk-lesson-nav")
                    expect(nav.locator(":scope > *")).to_have_count(4)
                    assert not any(
                        (link.get_attribute("href") or "") == ("../" + part + "/") for link in nav.locator("a").all()
                    ), (topic, part, "current page must not appear in nav")
                    assert page.locator("[data-thpt-readiness],[data-mastery-credit]").count() == 0
                load("kien-thuc")
                knowledge = page.locator("[data-topic-w1-knowledge]")
                expect(knowledge).to_be_visible()
                topic_heading=page.locator("article.md-typeset > h1.topic-w1-topic-heading")
                expect(topic_heading).to_have_text({
          "10": "Chuyên đề 10 · Ứng dụng đạo hàm: Khảo sát hàm số và tối ưu hóa",
          "11": "Chuyên đề 11 · Nguyên hàm, tích phân và ứng dụng hình học",
          "06": "Chuyên đề 06 · Lượng giác và phương trình lượng giác",
          "07": "Chuyên đề 07 · Dãy số, cấp số cộng và cấp số nhân",
          "08": "Chuyên đề 08 · Giới hạn và tính liên tục",
          "09": "Chuyên đề 09 · Đạo hàm và ý nghĩa vi phân"
}[topic])
                assert page.evaluate("""() => {
                    const title=document.querySelector('article.md-typeset > h1.topic-w1-topic-heading');
                    const intro=document.querySelector('article.md-typeset > p.topic-w1-source-intro');
                    const knowledge=document.querySelector('article.md-typeset > h1:not(.topic-w1-topic-heading)');
                    if(!title||!intro||!knowledge)return false;
                    return !!(title.compareDocumentPosition(intro)&Node.DOCUMENT_POSITION_FOLLOWING)
                        &&!!(intro.compareDocumentPosition(knowledge)&Node.DOCUMENT_POSITION_FOLLOWING);
                }"""), (topic,"Title → lead → Kiến thức order")
                assert page.locator("article.md-typeset > h1.topic-w1-topic-heading").count()==1
                assert page.locator("article.md-typeset > p.topic-w1-source-intro").is_hidden(), (topic, "redundant lead should be hidden")
                assert not page.locator("article.md-typeset > p.topic-w1-source-intro").inner_text().strip(), (topic, "redundant lead survived")
                tabs = page.locator("[data-topic-w1-module-tab]")
                expect(tabs).to_have_count(groups)
                expect(page.locator("[data-topic-w1-subtab]")).to_have_count(outcomes)
                for tab in page.locator("[data-topic-w1-module-tab],[data-topic-w1-subtab]").all():
                    short=tab.inner_text().strip()
                    full=tab.get_attribute("title")
                    assert full and len(short)<=len(full) and len(short)<=32,(engine,topic,width,short,full)
                    assert tab.get_attribute("aria-label")==full
                assert tabs.first.inner_text() == {
    "10": "1. Biến thiên",
    "11": "1. Nguyên hàm",
    "06": "1. Góc quay",
    "07": "1. Dãy số",
    "08": "1. Giới hạn dãy số",
    "09": "1. Định nghĩa đạo hàm"
}[topic]
                assert tabs.first.evaluate("(e)=>getComputedStyle(e.parentElement).display") == "flex"
                assert tabs.first.evaluate("(e)=>getComputedStyle(e).backgroundColor") != "rgba(0, 0, 0, 0)"
                assert page.locator("article.md-typeset").evaluate(
                    "(e)=>parseFloat(getComputedStyle(e).fontSize)"
                ) == page.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)*.8")
                page.locator("body").evaluate("(e)=>e.setAttribute('data-md-color-scheme','default')")
                # Compare actual CSS values with CĐ01 at exactly the same engine and width.
                # Font/spacing-only smoke was previously too weak to catch screenshot drift.
                def golden_snapshot(pg):
                    return pg.evaluate("""() => {
                      const base=document.querySelector('.topic01-knowledge-layout');
                      if(!base)throw Error('Missing Golden Knowledge layout');
                      const label=[...base.querySelectorAll('.thpt-r4-knowledge-content-panel > p')]
                       .find(p=>p.querySelector(':scope > strong')?.textContent.trim()==='Vận dụng');
                      if(!label)throw Error('Golden Vận dụng label missing');
                      const stem=label.nextElementSibling,host=stem?.nextElementSibling,details=host?.matches('details.question')?host:host?.querySelector('details.question');
                      if(stem?.tagName!=='P'||!details?.matches('details.question'))
                       throw Error('Golden label → stem → details contract broken');
                      const tab=base.querySelector('.thpt-r4-knowledge-module-tab');
                      const sub=base.querySelector('.thpt-r4-knowledge-subtabs .thpt-r4-knowledge-tab');
                      const css=(e,props)=>Object.fromEntries(props.map(k=>[k,getComputedStyle(e)[k]]));
                      return {
                       tab:css(tab,['fontSize','fontWeight','height','paddingTop','paddingLeft','borderRadius','backgroundColor']),
                       sub:css(sub,['fontSize','fontWeight','height','paddingTop','paddingLeft','borderRadius']),
                       label:css(label,['fontSize','lineHeight','marginTop','marginBottom']),
                       strong:css(label.querySelector('strong'),['fontSize','fontWeight']),
                       stem:css(stem,['fontSize','lineHeight','marginTop','marginBottom']),
                       disclosure:css(details,['backgroundColor','borderTopWidth','borderRadius','marginTop','marginBottom']),
                       summary:css(details.querySelector('summary'),['fontSize','fontWeight','lineHeight','paddingTop','paddingLeft','color'])
                      };
                    }""")
                reference=ctx.new_page()
                response=reference.goto(BASE+"cd01/kien-thuc/",wait_until="domcontentloaded")
                assert response and response.status==200
                if reference.locator(".topic01-boot-status").is_visible():
                    raise AssertionError(("GOLDEN_REFERENCE_HYDRATION_ERROR",engine,topic,width,reference.evaluate("""() => ({html:document.documentElement.className,status:document.querySelector('.topic01-boot-status')?.textContent,ready:document.querySelector('[data-topic01-knowledge-start]')?.dataset.ready})""")))
                expect(reference.locator(".topic01-boot-status")).to_be_hidden()
                golden_styles=golden_snapshot(reference)
                topic_styles=golden_snapshot(page)
                drift={k:{"CĐ01":golden_styles[k],"W1":topic_styles[k]} for k in golden_styles if golden_styles[k]!=topic_styles[k]}
                assert not drift,(engine,topic,width,"Golden computed-style drift",drift)
                reference.close()
                assert page.locator(".topic-w2-model-link a").count()==1, (topic,"Math Lab model link")
                assert page.locator(".topic-w2-model-link a").get_attribute("href") is not None
                roles = page.locator("[data-topic-w1-callout]")
                assert roles.count() >= outcomes, (topic, "missing 3+1 boxes", roles.count())
                bad_semantic = roles.evaluate_all("""els=>els.map(el=>({continuation: (()=>{const panel=el.closest('.thpt-r4-knowledge-content-panel');let prior=el.previousElementSibling;while(prior&&!prior.hasAttribute('data-topic-w1-callout'))prior=prior.previousElementSibling;return panel?.querySelector('h3')?.textContent.startsWith('2.3.')&&el.dataset.topicW1Callout==='concept'&&prior?.dataset.topicW1Callout==='concept'&&el.textContent.trim().startsWith('Viết')&&el.textContent.includes('Giới hạn');})(),role:el.dataset.topicW1Callout,labels:[...el.children].map(p=>p.querySelector(':scope > strong')?.textContent||'').filter(s=>/^(ĐỊNH NGHĨA|KHÁI NIỆM|CÔNG THỨC|HỆ THỨC|TÍNH CHẤT|ĐỊNH LÝ|ĐỊNH LÍ|QUY TẮC|PHƯƠNG PHÁP|KIẾN THỨC CẦN GHI NHỚ|GHI NHỚ|LƯU Ý)/.test(s.toLocaleUpperCase('vi').trim())),html:el.innerHTML.slice(0,250)})).filter(b=>b.labels.length!==1 && !(b.labels.length===0 && b.continuation))""")
                assert not bad_semantic, (topic,"merged or unlabelled formal cards",bad_semantic[:5])
                if topic == '08':
                    continuation=page.locator('.thpt-r4-knowledge-content-panel').filter(has=page.locator('h3',has_text='2.3. Giới hạn vô cực gần điểm')).locator('[data-topic-w1-callout="concept"]')
                    expect(continuation).to_have_count(2)
                    assert continuation.nth(1).inner_text().strip().startswith('Viết')
                for role, color in PALETTE.items():
                    elems = page.locator('[data-topic-w1-callout="' + role + '"]')
                    for e in elems.all():
                        bg = e.evaluate("(node)=>getComputedStyle(node).backgroundColor")
                        assert bg == color, (engine, topic, width, role, bg, e.evaluate("""el=>({classes:el.className,body:document.body.className,article:el.closest('.md-content__inner')?.className,scope:el.matches('body.thpt-r4-topic-knowledge .md-typeset.topic-w1-knowledge .topic01-knowledge-layout [data-topic-w1-callout="concept"]'),sheet:[...document.querySelectorAll('link[rel="stylesheet"]')].map(e=>({href:e.href,loaded:!!e.sheet})).filter(x=>x.href.includes('topic-'))})"""))
                disclosure_found = False
                for i in range(groups):
                    tabs.nth(i).click()
                    panel = page.locator("[data-topic-w1-module-panel]:visible")
                    expect(panel).to_have_count(1)
                    subtabs = panel.locator("[data-topic-w1-subtab]")
                    count = subtabs.count()
                    checks = list(range(count)) if (width == 820 and engine == "chromium") else sorted({0, count-1})
                    for j in checks:
                        subtabs.nth(j).click()
                        active = panel.locator(".thpt-r4-knowledge-content-panel:visible")
                        expect(active).to_have_count(1)
                        current = subtabs.nth(j)
                        assert current.evaluate("(e)=>getComputedStyle(e).fontSize") == ("14px" if width <= 640 else "15px")
                        assert current.evaluate("(e)=>Math.round(e.getBoundingClientRect().height)") == 44
                        details = active.locator("details.question")
                        if details.count():
                            disclosure_found = True
                            d = details.first
                            assert d.evaluate("(e)=>getComputedStyle(e).backgroundColor") == "rgb(248, 250, 255)", (
                                engine, topic, width, "Golden Knowledge Đối chiếu",
                            )
                            assert d.locator("summary").evaluate("(e)=>getComputedStyle(e).color") == "rgb(38, 62, 115)"
                        # Every visible W2 SVG must stay a supporting illustration, not a full-width poster.
                        for fig in active.locator("img[data-topic-w2-figure]").all():
                            bounds = fig.evaluate("""e => ({w:e.getBoundingClientRect().width,
                                h:e.getBoundingClientRect().height,src:e.getAttribute('src')})""")
                            assert 10 < bounds["w"] <= 701 and 10 < bounds["h"] <= 451, (
                                engine, topic, width, "W2 figure exceeds reading footprint", bounds,
                            )
                        width_info = page.evaluate("({scroll:document.documentElement.scrollWidth,inner:innerWidth})")
                        assert width_info["scroll"] <= width_info["inner"] + 1, (engine, topic, width, width_info)
                assert disclosure_found, (engine, topic, "knowledge must include a voluntary solution")
                # Owner Golden CĐ01: original Vận dụng label, stem, disclosure must
                # be siblings on the white panel, never combined in a framed card.
                assert knowledge.locator(".topic-w1-application").count() == 0, (topic,"unapproved Vận dụng outer card")
                labels = knowledge.locator(".thpt-r4-knowledge-content-panel > p").filter(
                    has=page.locator(":scope > strong", has_text="Vận dụng")
                )
                assert labels.count() == outcomes, (topic, "Vận dụng coverage", labels.count(), outcomes)
                application_issues = knowledge.evaluate("""root=>[...root.querySelectorAll('.thpt-r4-knowledge-content-panel')]
                  .flatMap(panel=>[...panel.children].filter(e=>e.tagName==='P'&&e.querySelector(':scope > strong')?.textContent.trim()==='Vận dụng')
                    .map(label=>{let n=label.nextElementSibling,stem=0,details=0;
                      while(n&&n.tagName!=='H3'&&!n.matches('.thpt-r4-knowledge-conclusion,.thpt-r4-key-formula')){
                        if(n.matches('p'))stem++;
                        if(n.matches('details.question')||n.querySelector('details.question')){details++;break}
                        n=n.nextElementSibling
                      }
                      return {stem,details,wrapped:!!label.closest('.topic-w1-application')}
                    })).filter(x=>x.stem<1||x.details!==1||x.wrapped)""")
                assert not application_issues, (topic,"Golden application layout",application_issues[:5])
                # All original SVG source figures must be available in generated THPT site.
                imgs = page.locator("[data-topic-w1-knowledge] img")
                expect(imgs).to_have_count(svg_count)
                for img in imgs.all():
                    url = img.evaluate("(e)=>e.src")
                    assert page.request.get(url).ok, (topic, "broken SVG", url)
                # OWNER P2 HOTFIX: figure footprint and MathJax across actual browser widths.
                # These assert visible geometry/typesetting, not mere source hashes or counts.
                assert imgs.count() == imgs.evaluate_all("els => els.filter(e => e.dataset.topicW2Figure === '1').length"), (topic, "W2 figure style marker")
                if topic == "06":
                    page.locator('[data-topic-w1-module-tab="1"]').click()
                    page.locator('[data-topic-w1-subtab="1-1"]').click()
                    chasles = page.locator('[data-topic-w1-callout="rule"]').filter(has_text="Hệ thức Chasles")
                    expect(chasles).to_have_count(1)
                    if REFRESH:
                        assert_signed_display(page,topic,"1.1",chasles)
                    else:
                        restored = chasles.locator('[data-topic-w2-display-math="recovered-display"]')
                        expect(restored).to_have_count(1)
                        expect(restored.locator("mjx-container").first).to_be_visible(timeout=20000)
                    assert not chasles.evaluate(r"(e) => e.innerText.includes('\\operatorname')"), (
                        engine, topic, width, "raw Chasles TeX escaped into visible text",
                    )
                    page.locator('[data-topic-w1-subtab="1-2"]').click()
                    circle = page.locator('img[src*="THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS"]')
                    measured = circle.evaluate("""e => ({width:e.getBoundingClientRect().width,
                        height:e.getBoundingClientRect().height})""")
                    assert 150 < measured["width"] <= 481, (engine, topic, width, "oversized unit circle", measured)
                    assert 80 < measured["height"] <= 431, (engine, topic, width, "oversized unit-circle height", measured)
                    if width >= 820:
                        # SVG 620 viewBox units, largest label 19 units -> ~15px when capped at 480.
                        label_px = 19 * measured["width"] / 620
                        assert 12 <= label_px <= 20, (topic, width, "SVG text not comparable to prose", label_px)
                if topic == "08":
                    page.locator('[data-topic-w1-module-tab="1"]').click()
                    page.locator('[data-topic-w1-subtab="1-4"]').click()
                    limits = page.locator('[data-topic-w1-callout="rule"]').filter(
                        has_text="Phép toán với giới hạn hữu hạn của dãy số"
                    )
                    expect(limits).to_have_count(1)
                    if REFRESH:
                        # The current signed aligned display follows the labelled card as a sibling.
                        assert_signed_display(page,topic,"1.4",page.locator(".thpt-r4-knowledge-content-panel:visible"))
                    else:
                        recovered = limits.locator('[data-topic-w2-display-math="recovered-display"]')
                        expect(recovered).to_have_count(1)
                        expect(recovered.locator("mjx-container").first).to_be_visible(timeout=20000)
                    assert not limits.evaluate(r"(e) => e.innerText.includes('\\lim(')"), (
                        engine, topic, width, "raw limit TeX escaped into visible text",
                    )
                if topic in ("09", "11"):
                    module, sub = ("4", "4-6") if topic == "09" else ("1", "1-5")
                    page.locator(f'[data-topic-w1-module-tab="{module}"]').click()
                    page.locator(f'[data-topic-w1-subtab="{sub}"]').click()
                    current = page.locator('.thpt-r4-knowledge-content-panel:visible')
                    if W2B:
                        # The new signed exponent expressions are explicit TeX.
                        # Compare the entire visible outcome (before disclosure) to source.
                        raw=(ROOT/f"docs/thpt-preview/chuyen-de/cd{topic}/kien-thuc.md").read_text(encoding="utf-8")
                        outcome="4.6" if topic=="09" else "1.5"
                        section=re.split(r"^### "+re.escape(outcome)+r"\.\s",raw,flags=re.M)[1]
                        section=re.split(r"^#{2,3} ",section,maxsplit=1,flags=re.M)[0].split("<details",1)[0]
                        expected=[re.sub(r"\s+","",html.unescape(x or y)) for x,y in re.findall(r"\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]",section)]
                        assert expected and any("^" in x for x in expected)
                        assert_math(page,".thpt-r4-knowledge-content-panel:visible",expected,(topic,engine,width,outcome,"explicit exponent parity"))
                    else:
                        # Shared renderer uses native semantic superscripts for explicit
                        # plain-text shorthand; canonical TeX still uses MathJax.
                        exp = current.locator('sup[data-topic-rw1-original]')
                        assert exp.count() >= (2 if topic == "09" else 3), (engine, topic, width, "raw superscripts not normalized", exp.count())
                        expect(exp.first).to_be_visible(timeout=20000)
                        assert exp.first.inner_text() == ("g" if topic == "09" else "2x"), (topic, "incorrect exponent content")
                        assert not current.evaluate(r"(e) => /(?:e|a|x)\^\{/.test(e.innerText)"), (
                            engine, topic, width, "visible unrendered superscript syntax",
                        )
                # Check dark role readability only on one representative per topic.
                if width == 820:
                    page.locator("body").evaluate("(e)=>e.setAttribute('data-md-color-scheme','slate')")
                    dark = page.locator('[data-topic-w1-callout="concept"]').first
                    if dark.count():
                        assert dark.evaluate("(e)=>getComputedStyle(e).backgroundColor") != PALETTE["concept"]
                load("luyen-tap")
                cards = page.locator("[data-topic-w1-practice-card]")
                expect(cards).to_have_count(practice_groups)
                expect(page.locator(".topic-w1-source-shelf")).to_be_hidden()
                if REFRESH:
                    expect(page.locator(".topic-w1-source-shelf > template")).to_have_count(1)
                    assert page.locator(".topic-w1-source-shelf mjx-container").count()==0
                grid = page.locator(".topic01-golden-grid")
                assert len(grid.evaluate("(e)=>getComputedStyle(e).gridTemplateColumns").split()) == (1 if width <= 640 else 2)
                modal = page.locator("[data-topic-w1-dialog]")
                total_seen = 0
                for i in range(practice_groups):
                    cards.nth(i).click()
                    expect(modal).to_be_visible()
                    chooser = modal.locator(".thpt-r4-modal-question-nav button")
                    group_count = chooser.count()
                    assert group_count > 0
                    checks = list(range(group_count)) if REFRESH or (engine == "chromium" and width == 820) else sorted({0,group_count-1})
                    for j in checks:
                        chooser.nth(j).click()
                        card = modal.locator("[data-thpt-canonical-item]")
                        assert card.get_attribute("data-thpt-canonical-item"), (topic,i,j,"item_id missing")
                        expect(card.locator(":scope > .topic-w1-stem-label strong")).to_have_text("Đề bài")
                        assert modal.locator(".thpt-r4-formative-submit").count() == 0, "duplicate answer action"
                        details = modal.locator(".thpt-r4-formative-actions details")
                        expect(details).to_have_count(1)
                        assert not details.evaluate("(e)=>e.open"), (topic,i,j,"early reveal")
                        expect(details.locator("summary")).to_have_text("📖 Đáp án / Lời giải")
                        if REFRESH:
                            item=card.get_attribute("data-thpt-canonical-item")
                            stem,sol,options=practice_math[item]
                            assert_math(page,".topic-w1-question-body",stem,(topic,engine,width,item,"Practice stem"),True)
                            if options: assert "Các phương án:" in card.inner_text()
                        details.locator("summary").click()
                        expect(details.locator(".thpt-r4-formative-reveal")).to_be_visible()
                        if REFRESH:
                            assert_math(page,".topic-w1-question-body .thpt-r4-formative-reveal",sol,(topic,engine,width,item,"Practice solution"))
                            if j==0:
                                details.locator("summary").click()
                                expect(details.locator(".thpt-r4-formative-reveal")).to_be_hidden()
                                details.locator("summary").click()
                                expect(details.locator(".thpt-r4-formative-reveal")).to_be_visible()
                                assert_math(page,".topic-w1-question-body .thpt-r4-formative-reveal",sol,(topic,engine,width,item,"Practice reopen"))
                    total_seen += group_count
                    modal.locator(".topic-w1-close").click()
                    expect(modal).to_be_hidden()
                assert total_seen == item_count, (topic,item_count,total_seen)
                load("tu-kiem-tra")
                selfcheck = page.locator("[data-topic-w1-selfcheck]")
                expect(selfcheck).to_be_visible()
                if REFRESH:
                    expect(page.locator(".topic-w1-selfcheck-source-shelf > template")).to_have_count(1)
                    assert page.locator(".topic-w1-selfcheck-source-shelf mjx-container").count()==0
                jump = selfcheck.locator(".g10sc-jump-button")
                expect(jump).to_have_count(replays)
                questions = list(range(replays)) if REFRESH or (engine == "chromium" and width == 820) else sorted({0,replays-1})
                for j in questions:
                    jump.nth(j).click()
                    body = selfcheck.locator(".g10sc-body")
                    expect(body.locator("h3")).to_have_text("Câu "+str(j+1))
                    assert body.locator("input,textarea").count() == 0
                    expect(body.locator(":scope > .topic-w1-stem-label strong")).to_have_text("Đề bài")
                    solution = body.locator("[data-topic-w1-solution]")
                    expect(solution).to_be_hidden()
                    if REFRESH:
                        item=body.get_attribute("data-thpt-canonical-item")
                        stem,_,options=replay_math[item]
                        assert_math(page,"[data-topic-w1-selfcheck] .g10sc-rich",stem,(topic,engine,width,item,"Replay stem"))
                        if options:
                            option_text=body.locator(".g10sc-rich").inner_text()
                            assert all(x in option_text for x in ("Các phương án:","A.","B.","C.","D.")),(topic,item,"missing options")
                    body.get_by_role("button",name="Đối chiếu",exact=True).click()
                    expect(solution).to_be_visible()
                    assert solution.get_attribute("data-thpt-canonical-solution") == body.get_attribute("data-thpt-canonical-item"), (topic,j,"wrong canonical answer")
                    assert solution.locator(".g10sc-error").count()==0, (topic,j,"public solution retrieval failed")
                    if REFRESH:
                        assert_math(page,"[data-topic-w1-solution]",practice_math[item][1],(topic,engine,width,item,"Replay solution"))
                        if j==0:
                            body.get_by_role("button",name="Ẩn đối chiếu",exact=True).click()
                            expect(solution).to_be_hidden()
                            body.get_by_role("button",name="Đối chiếu",exact=True).click()
                            expect(solution).to_be_visible()
                            assert_math(page,"[data-topic-w1-solution]",practice_math[item][1],(topic,engine,width,item,"Replay reopen"))
                assert not errors, (engine,topic,width,"uncaught JS",errors)
                print(f"PASS {engine} CĐ{topic} {width}px: {outcomes} outcomes, {groups} groups/{item_count} items, {replays} replay, 3+1 + MathJax/SVG/Golden hydration")
                ctx.close()
            if engine == "chromium":
                # A missing Topic JS must expose the approved static source, not a permanently blank screen.
                ctx = browser.new_context(viewport={"width":390,"height":844})
                fallback = ctx.new_page()
                fallback.route("**/thpt-topic-w2-golden-v1.js", lambda route: route.abort())
                fallback.goto(BASE+"cd"+topic+"/tu-kiem-tra/", wait_until="domcontentloaded")
                expect(fallback.locator(".topic-w1-boot-status")).to_be_visible()
                assert fallback.evaluate("document.documentElement.classList.contains('topic-w1-fallback')")
                assert fallback.locator("article.md-typeset > p > strong").count() >= replays, (topic,"hidden content on JS failure")
                fallback.close();ctx.close()
                print(f"PASS CĐ{topic}: JS blocked fallback preserves {replays} public stems")
        browser.close()
server.shutdown()
