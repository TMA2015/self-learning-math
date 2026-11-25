#!/usr/bin/env python3
"""W2 CĐ06–11 ONLY: compiled MkDocs Golden browser/QA, no deploy, no SGK sweep."""
from __future__ import annotations
import functools
import http.server
import pathlib
import threading

from playwright.sync_api import sync_playwright, expect

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / "site-thpt-preview"
assert BUILD.is_dir(), "THPT MkDocs compiled tree required"
server = http.server.ThreadingHTTPServer(
    ("127.0.0.1", 0),
    functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(BUILD))
)
threading.Thread(target=server.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{server.server_address[1]}/thpt-preview/chuyen-de/"
SIZES = {
    "06": (4, 4, 16, 66, 16, 3),
    "07": (4, 4, 18, 69, 18, 3),
    "08": (4, 4, 18, 58, 18, 3),
    "09": (5, 4, 32, 108, 32, 4),
    "10": (6, 6, 36, 120, 36, 4),
    "11": (4, 4, 22, 116, 22, 4),
}
PALETTE = {
    "concept": "rgb(232, 247, 242)",
    "rule": "rgb(234, 241, 252)",
    "recap": "rgb(255, 243, 213)",
    "formula": "rgba(0, 0, 0, 0)",
}

with sync_playwright() as pw:
    for engine in ("chromium", "webkit"):
        browser = getattr(pw, engine).launch(headless=True)
        for topic, (groups, practice_groups, outcomes, item_count, replays, svg_count) in SIZES.items():
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
                      const stem=label.nextElementSibling,details=stem?.nextElementSibling;
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
                bad_semantic = roles.evaluate_all("""els=>els.map(el=>({role:el.dataset.topicW1Callout,labels:[...el.children].map(p=>p.querySelector(':scope > strong')?.textContent||'').filter(s=>/^(ĐỊNH NGHĨA|KHÁI NIỆM|CÔNG THỨC|HỆ THỨC|TÍNH CHẤT|ĐỊNH LÝ|ĐỊNH LÍ|QUY TẮC|PHƯƠNG PHÁP|KIẾN THỨC CẦN GHI NHỚ|GHI NHỚ|LƯU Ý)/.test(s.toLocaleUpperCase('vi').trim())),html:el.innerHTML.slice(0,250)})).filter(b=>b.labels.length!==1)""")
                assert not bad_semantic, (topic,"merged or unlabelled formal cards",bad_semantic[:5])
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
                        if(n.matches('details.question')){details++;break}
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
                    checks = list(range(group_count)) if (engine == "chromium" and width == 820) else sorted({0,group_count-1})
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
                        details.locator("summary").click()
                        expect(details.locator(".thpt-r4-formative-reveal")).to_be_visible()
                    total_seen += group_count
                    modal.locator(".topic-w1-close").click()
                    expect(modal).to_be_hidden()
                assert total_seen == item_count, (topic,item_count,total_seen)
                load("tu-kiem-tra")
                selfcheck = page.locator("[data-topic-w1-selfcheck]")
                expect(selfcheck).to_be_visible()
                jump = selfcheck.locator(".g10sc-jump-button")
                expect(jump).to_have_count(replays)
                questions = list(range(replays)) if (engine == "chromium" and width == 820) else sorted({0,replays-1})
                for j in questions:
                    jump.nth(j).click()
                    body = selfcheck.locator(".g10sc-body")
                    expect(body.locator("h3")).to_have_text("Câu "+str(j+1))
                    assert body.locator("input,textarea").count() == 0
                    expect(body.locator(":scope > .topic-w1-stem-label strong")).to_have_text("Đề bài")
                    solution = body.locator("[data-topic-w1-solution]")
                    expect(solution).to_be_hidden()
                    body.get_by_role("button",name="Đối chiếu",exact=True).click()
                    expect(solution).to_be_visible()
                    assert solution.get_attribute("data-thpt-canonical-solution") == body.get_attribute("data-thpt-canonical-item"), (topic,j,"wrong canonical answer")
                    assert solution.locator(".g10sc-error").count()==0, (topic,j,"public solution retrieval failed")
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
