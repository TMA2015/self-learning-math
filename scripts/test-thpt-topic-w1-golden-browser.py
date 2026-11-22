#!/usr/bin/env python3
"""W1 CĐ02–05 ONLY: compiled MkDocs Golden browser/QA, no deploy, no SGK sweep."""
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
    "02": (4, 16, 38, 16, 3),
    "03": (4, 12, 31, 12, 3),
    "04": (5, 18, 75, 18, 5),
    "05": (4, 17, 38, 17, 3),
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
        for topic, (groups, outcomes, item_count, replays, svg_count) in SIZES.items():
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
                        ("/" + part + "/") in (link.get_attribute("href") or "") for link in nav.locator("a").all()
                    ), (topic, part, "current page must not appear in nav")
                    assert page.locator("[data-thpt-readiness],[data-mastery-credit]").count() == 0
                load("kien-thuc")
                knowledge = page.locator("[data-topic-w1-knowledge]")
                expect(knowledge).to_be_visible()
                tabs = page.locator("[data-topic-w1-module-tab]")
                expect(tabs).to_have_count(groups)
                expect(page.locator("[data-topic-w1-subtab]")).to_have_count(outcomes)
                assert page.locator("article.md-typeset").evaluate(
                    "(e)=>parseFloat(getComputedStyle(e).fontSize)"
                ) == page.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)*.8")
                page.locator("body").evaluate("(e)=>e.setAttribute('data-md-color-scheme','default')")
                roles = page.locator("[data-topic-w1-callout]")
                assert roles.count() >= outcomes, (topic, "missing 3+1 boxes", roles.count())
                for role, color in PALETTE.items():
                    elems = page.locator('[data-topic-w1-callout="' + role + '"]')
                    for e in elems.all():
                        bg = e.evaluate("(node)=>getComputedStyle(node).backgroundColor")
                        assert bg == color, (engine, topic, width, role, bg)
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
                        width_info = page.evaluate("({scroll:document.documentElement.scrollWidth,inner:innerWidth})")
                        assert width_info["scroll"] <= width_info["inner"] + 1, (engine, topic, width, width_info)
                assert disclosure_found, (engine, topic, "knowledge must include a voluntary solution")
                # All original SVG source figures must be available in generated THPT site.
                imgs = page.locator("[data-topic-w1-knowledge] img")
                expect(imgs).to_have_count(svg_count)
                for img in imgs.all():
                    url = img.evaluate("(e)=>e.src")
                    assert page.request.get(url).ok, (topic, "broken SVG", url)
                # Check dark role readability only on one representative per topic.
                if width == 820:
                    page.locator("body").evaluate("(e)=>e.setAttribute('data-md-color-scheme','slate')")
                    dark = page.locator('[data-topic-w1-callout="concept"]').first
                    if dark.count():
                        assert dark.evaluate("(e)=>getComputedStyle(e).backgroundColor") != PALETTE["concept"]
                load("luyen-tap")
                cards = page.locator("[data-topic-w1-practice-card]")
                expect(cards).to_have_count(groups)
                expect(page.locator(".topic-w1-source-shelf")).to_be_hidden()
                grid = page.locator(".topic01-golden-grid")
                assert len(grid.evaluate("(e)=>getComputedStyle(e).gridTemplateColumns").split()) == (1 if width <= 640 else 2)
                modal = page.locator("[data-topic-w1-dialog]")
                total_seen = 0
                for i in range(groups):
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
                fallback.route("**/thpt-topic-w1-golden-v1.js", lambda route: route.abort())
                fallback.goto(BASE+"cd"+topic+"/tu-kiem-tra/", wait_until="domcontentloaded")
                expect(fallback.locator(".topic-w1-boot-status")).to_be_visible()
                assert fallback.evaluate("document.documentElement.classList.contains('topic-w1-fallback')")
                assert fallback.locator("article.md-typeset > p > strong").count() >= replays, (topic,"hidden content on JS failure")
                fallback.close();ctx.close()
                print(f"PASS CĐ{topic}: JS blocked fallback preserves {replays} public stems")
        browser.close()
server.shutdown()
