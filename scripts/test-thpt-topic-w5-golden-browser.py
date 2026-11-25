#!/usr/bin/env python3
"""W5 CĐ19–22 ONLY: compiled MkDocs Golden browser/QA, no deploy, no SGK sweep."""
from __future__ import annotations
import functools
import http.server
import pathlib
import re
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
    "19": (3, 3, 14, 42, 7, 4),
    "20": (2, 3, 9, 20, 11, 2),
    "21": (3, 3, 8, 11, 8, 2),
    "22": (3, 3, 13, 114, 9, 2),
}
PALETTE = {
    "concept": "rgb(232, 247, 242)",
    "rule": "rgb(234, 241, 252)",
    "recap": "rgb(255, 243, 213)",
    "formula": "rgba(0, 0, 0, 0)",
}


def audit_visible_math(root, case: str) -> None:
    """Check actual text nodes, excluding MathJax, code and closed solutions.

    This covers ALL W5 Knowledge outcomes, canonical Practice items and public
    SelfCheck replays (Chromium/820), not only six previously reported cards.
    Intervals such as [0,10) are not mistaken for TeX display math.
    """
    leaking = root.evaluate(r"""node => {
      const found = [], walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      const caret = /(?:\([^()\n]{1,70}\)|[A-Za-z0-9][A-Za-z0-9_]{0,20})\^(?:\{|\(|[A-Za-z0-9])/;
      const cmd = /\\(?:frac|sum|binom|sqrt|lim|operatorname|mathbb|cup|cap|mid|bar|overrightarrow)\b/;
      // A statistical interval [10;20) followed by prose n=20 is NOT TeX.
      // Require both an expression-like start and the matching closing ].
      const bracket = /\[\s*(?:\\[A-Za-z]{2,}|[A-Za-z][A-Za-z0-9_]{0,20}\s*=|\([^()\n]{1,70}\)\^|P\()[^\]\n]{0,350}\]/;
      while (walk.nextNode()) {
        const t = walk.currentNode, p = t.parentElement;
        if (!p || p.closest('.arithmatex,mjx-container,code,pre,script,style,textarea,svg,details:not([open]),[hidden]')) continue;
        const raw = t.nodeValue || '';
        if (caret.test(raw) || cmd.test(raw) || bracket.test(raw)) {
          found.push(raw.trim().slice(0,210));
          if (found.length >= 6) break;
        }
      }
      return found;
    }""")
    assert not leaking, ("W5_COMPLETE_VISIBLE_MATH_AUDIT", case, leaking)


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
                if engine == "chromium" and topic == "19" and width == 820:
                    # Screenshot #7: 5+1 now points to the official catalog, not
                    # a demo with no canonical Topic/assessment source.
                    launch = page.locator("[data-thpt-r4-launcher]")
                    expect(launch).to_be_visible()
                    assert launch.locator(".roadmap-topic-launcher__name").inner_text() == "danh mục"
                    launch.click()
                    chooser = page.locator("[data-thpt-r4-shortcut-dialog]")
                    expect(chooser).to_be_visible()
                    actual = chooser.locator('a[href$="/thpt-preview/chuyen-de/"]')
                    assert actual.count() >= 1
                    assert chooser.locator('a[href*="/chuyen-de/ham-so/"]').count() == 0
                    page.keyboard.press("Escape")
                    legacy = ctx.new_page()
                    for old_part in ("kien-thuc", "luyen-tap", "tu-kiem-tra"):
                        legacy.goto(BASE + "ham-so/" + old_part + "/", wait_until="domcontentloaded")
                        legacy.wait_for_url(re.compile(r"/thpt-preview/chuyen-de/$"), timeout=10000)
                    assert legacy.locator(".topic01-legacy-note").count() == 0
                    legacy.close()
                knowledge = page.locator("[data-topic-w1-knowledge]")
                expect(knowledge).to_be_visible()
                topic_heading=page.locator("article.md-typeset > h1.topic-w1-topic-heading")
                expect(topic_heading).to_have_text({
  "19": "Chuyên đề 19 · Đại số tổ hợp và Nhị thức Newton",
  "20": "Chuyên đề 20 · Xác suất cổ điển và các quy tắc tính xác suất",
  "21": "Chuyên đề 21 · Xác suất có điều kiện, công thức toàn phần và Bayes",
  "22": "Chuyên đề 22 · Thống kê mô tả và phân tích số liệu"
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
  "19": "1. Quy tắc đếm và chia trường",
  "20": "1. Mô hình ngẫu nhiên",
  "21": "1. Biết thêm thông tin và xác",
  "22": "1. Dữ liệu thô, độ chính xác và"
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
                       .find(p=>/^Vận dụng[:.]?$/.test(p.querySelector(':scope > strong')?.textContent.trim()||''));
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
                assert page.locator(".topic-w5-model-link a").count()==1, (topic,"Math Lab model link")
                assert page.locator(".topic-w5-model-link a").get_attribute("href") is not None
                # W5 links to existing Math Lab only; assert destination is really available,
                # without inspecting or re-testing the independent Math Lab app.
                model_url = page.locator(".topic-w5-model-link a").evaluate("(e)=>e.href")
                assert page.request.get(model_url).ok, (topic, "Math Lab model URL broken", model_url)
                roles = page.locator("[data-topic-w1-callout]")
                assert roles.count() >= outcomes, (topic, "missing 3+1 boxes", roles.count())
                bad_semantic = roles.evaluate_all("""els=>els.map(el=>({role:el.dataset.topicW1Callout,labels:[...el.children].map(p=>p.querySelector(':scope > strong')?.textContent||'').filter(s=>/^(ĐỊNH NGHĨA|KHÁI NIỆM|CÔNG THỨC|HỆ THỨC|TÍNH CHẤT|ĐỊNH LÝ|ĐỊNH LÍ|QUY TẮC|PHƯƠNG PHÁP|KIẾN THỨC CẦN GHI NHỚ|GHI NHỚ|LƯU Ý|CHÚ Ý)/.test(s.toLocaleUpperCase('vi').trim())),html:el.innerHTML.slice(0,250)})).filter(b=>b.labels.length!==1)""")
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
                        if width == 820 and engine == "chromium":
                            audit_visible_math(active, f"CĐ{topic} Knowledge {i+1}.{j+1}")
                            if topic == "19" and i == 2 and j in (0, 1):
                                repaired = active.locator('sup[data-topic-rw1-original]')
                                assert repaired.count() >= 3, ("CĐ19_SIGNED_NEWTON_INLINE_TEX", i, j)
                                expect(repaired.first).to_be_visible(timeout=15000)
                                assert repaired.first.inner_text() == ("n−k" if j == 0 else "5"), ("CĐ19_SIGNED_NEWTON_EXPONENT", i, j)
                        raw_display = active.evaluate(r"""e => /\[\s*(?:\\vec|\(\\vec|\\sin|\\cos|\\tan|\\frac|\\sqrt|\\lim|\\operatorname)/.test(e.innerText)""")
                        assert not raw_display, (engine, topic, width, i, j, "visible unrendered display TeX", active.evaluate(r"""e => e.innerText.match(/\[.{0,500}?\\(?:vec|sin|frac|sqrt|lim|operatorname)[\s\S]{0,400}/s)?.[0] || e.innerText.slice(0,220)"""))
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
                        # Every visible W3 SVG must stay a supporting illustration, not a full-width poster.
                        for fig in active.locator("img[data-topic-w3-figure]").all():
                            bounds = fig.evaluate("""e => ({w:e.getBoundingClientRect().width,
                                h:e.getBoundingClientRect().height,src:e.getAttribute('src')})""")
                            assert 10 < bounds["w"] <= 701 and 10 < bounds["h"] <= 451, (
                                engine, topic, width, "W3 figure exceeds reading footprint", bounds,
                            )
                        width_info = page.evaluate("({scroll:document.documentElement.scrollWidth,inner:innerWidth})")
                        assert width_info["scroll"] <= width_info["inner"] + 1, (engine, topic, width, width_info)
                assert disclosure_found, (engine, topic, "knowledge must include a voluntary solution")
                # Owner Golden CĐ01: original Vận dụng label, stem, disclosure must
                # be siblings on the white panel, never combined in a framed card.
                assert knowledge.locator(".topic-w1-application").count() == 0, (topic,"unapproved Vận dụng outer card")
                # Only match the canonical bold label. Substring matching counts
                # approved bold advice containing "Vận dụng" as an extra question.
                labels = knowledge.locator(".thpt-r4-knowledge-content-panel > p").filter(
                    has=page.locator(":scope > strong", has_text=re.compile(r"^\s*Vận dụng\s*[:.]?\s*$"))
                )
                # CĐ17's signed Q18 explicitly includes one additional voluntary
                # 2.4 frustum k=0/1/2/1 exploration with its own Đối chiếu.
                # It is source-authored discovery, not a new Q15 canonical item.
                app_expected = {"19":14,"20":17,"21":8,"22":13}[topic]
                assert labels.count() == app_expected, (topic, "Vận dụng coverage", labels.count(), app_expected)
                application_issues = knowledge.evaluate("""root=>[...root.querySelectorAll('.thpt-r4-knowledge-content-panel')]
                  .flatMap(panel=>[...panel.children].filter(e=>e.tagName==='P'&&/^Vận dụng[:.]?$/.test(e.querySelector(':scope > strong')?.textContent.trim()||''))
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
                # W3 OWNER P2 prevention carried forward into W3 actual browser rendering.
                assert imgs.count() == imgs.evaluate_all("els => els.filter(e => e.dataset.topicW3Figure === '1').length"), (topic,"figure scope")
                # Inactive tab figures have zero layout size by design; real bounding boxes
                # are checked when every relevant subtab is activated above.
                # Actual MathJax, not a token-only or syntax-only gate.
                page.locator('[data-topic-w1-module-tab="1"]').click()
                page.locator('[data-topic-w1-subtab="1-1"]').click()
                first_panel = page.locator('.thpt-r4-knowledge-content-panel:visible')
                expect(first_panel).to_be_visible()
                assert first_panel.locator("mjx-container").count()>0, (engine,topic,width,"MathJax missing after activating a formula-bearing tab")
                # Prevent W3 escaped-TeX / caret regressions on learner-visible text.
                raw = first_panel.evaluate(r"""e => /\\operatorname|\\lim\b|(?:e|a|x)\^\{/.test(e.innerText)""")
                assert not raw, (engine,topic,width,"unrendered TeX in Knowledge panel")
                # Check dark role readability only on one representative per topic.
                if width == 820:
                    page.locator("body").evaluate("(e)=>e.setAttribute('data-md-color-scheme','slate')")
                    dark = page.locator('[data-topic-w1-callout="concept"]').first
                    if dark.count():
                        assert dark.evaluate("(e)=>getComputedStyle(e).backgroundColor") != PALETTE["concept"]
                # Owner screenshot regression: MkDocs eats display \\[ and \\] in
                # signed Knowledge blockquotes. Check *actual visible* formula
                # cards on each affected Topic, not merely any MathJax on page.
                reported_display_formulas = {
                    "19": [("3", "3-2", "[(a-b)^n="), ("3", "3-3", "[(1+r)^5=")],
                    "20": [("2", "2-3", "[P(A\\\\cup B)=")],
                    "21": [("2", "2-1", "[P(L)=")],
                    "22": [("3", "3-1", "[R_g="), ("3", "3-2", "[IQR_g=")],
                }
                for module_id, subtab_id, literal in reported_display_formulas[topic]:
                    page.locator('[data-topic-w1-module-tab="' + module_id + '"]').click()
                    page.locator('[data-topic-w1-subtab="' + subtab_id + '"]').click()
                    current_panel = page.locator(".thpt-r4-knowledge-content-panel:visible")
                    expect(current_panel).to_have_count(1)
                    orphan_literals = current_panel.evaluate("""(root, raw) => [...root.querySelectorAll('p')]
                      .flatMap(p => [...p.childNodes])
                      .filter(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.includes(raw))
                      .map(n => n.nodeValue.slice(0, 220))""", literal)
                    assert not orphan_literals, (engine, topic, width, subtab_id,
                                                 "OWNER_P1_RAW_DISPLAY_MATH", orphan_literals)
                    recovered = current_panel.locator('[data-topic-rw1-display="1"][data-topic-rw1-original^="["]')
                    assert recovered.count() >= 1, (engine, topic, width, subtab_id,
                                                     "DISPLAY_MATH_WRAPPER_MISSING", literal)
                    expect(recovered.first.locator("mjx-container")).to_have_count(1, timeout=12000)
                    expect(recovered.first.locator("mjx-container").first).to_be_visible(timeout=12000)
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
                        if width == 820 and engine == "chromium":
                            audit_visible_math(card, f"CĐ{topic} Practice item {j+1}")
                        assert modal.locator(".thpt-r4-formative-submit").count() == 0, "duplicate answer action"
                        details = modal.locator(".thpt-r4-formative-actions details")
                        expect(details).to_have_count(1)
                        assert not details.evaluate("(e)=>e.open"), (topic,i,j,"early reveal")
                        expect(details.locator("summary")).to_have_text("📖 Đáp án / Lời giải")
                        details.locator("summary").click()
                        expect(details.locator(".thpt-r4-formative-reveal")).to_be_visible()
                        if width == 820 and engine == "chromium":
                            audit_visible_math(details, f"CĐ{topic} Practice solution {j+1}")
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
                    if width == 820 and engine == "chromium":
                        audit_visible_math(body, f"CĐ{topic} SelfCheck item {j+1}")
                    assert body.locator("input,textarea").count() == 0
                    expect(body.locator(":scope > .topic-w1-stem-label strong")).to_have_text("Đề bài")
                    solution = body.locator("[data-topic-w1-solution]")
                    expect(solution).to_be_hidden()
                    body.get_by_role("button",name="Đối chiếu",exact=True).click()
                    expect(solution).to_be_visible()
                    assert solution.get_attribute("data-thpt-canonical-solution") == body.get_attribute("data-thpt-canonical-item"), (topic,j,"wrong canonical answer")
                    assert solution.locator(".g10sc-error").count()==0, (topic,j,"public solution retrieval failed")
                    if width == 820 and engine == "chromium":
                        audit_visible_math(solution, f"CĐ{topic} SelfCheck solution {j+1}")
                assert not errors, (engine,topic,width,"uncaught JS",errors)
                print(f"PASS {engine} CĐ{topic} {width}px: {outcomes} outcomes, {groups} groups/{item_count} items, {replays} replay, 3+1 + MathJax/SVG/Golden hydration")
                ctx.close()
            if engine == "chromium":
                # A missing Topic JS must expose the approved static source, not a permanently blank screen.
                ctx = browser.new_context(viewport={"width":390,"height":844})
                fallback = ctx.new_page()
                fallback.route("**/thpt-topic-w5-golden-v1.js", lambda route: route.abort())
                fallback.goto(BASE+"cd"+topic+"/tu-kiem-tra/", wait_until="domcontentloaded")
                expect(fallback.locator(".topic-w1-boot-status")).to_be_visible()
                assert fallback.evaluate("document.documentElement.classList.contains('topic-w1-fallback')")
                assert fallback.locator("article.md-typeset > p > strong").count() >= replays, (topic,"hidden content on JS failure")
                fallback.close();ctx.close()
                print(f"PASS CĐ{topic}: JS blocked fallback preserves {replays} public stems")
        browser.close()
server.shutdown()
