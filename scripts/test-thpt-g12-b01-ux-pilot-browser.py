"""Browser-only pilot QA; no public site write, no Tutor API, no Mastery."""
from pathlib import Path
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parents[1]
preview = (root / "prototypes/thpt/ux-ped/G12_B01_PRESENTATION_AB_20261104.html").as_uri()
out = root / "artifacts/thpt-ux-ped-pilot"
out.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    try:
        for width, height in [(390, 844), (820, 1180), (1440, 900)]:
            page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
            errors = []
            page.on("pageerror", lambda e: errors.append(str(e)))
            page.goto(preview, wait_until="load")
            assert page.locator("article h2").count() == 7, "Original section count mismatch"
            assert page.locator("img").count() == 1
            assert page.locator("img").evaluate("(img) => img.complete && img.naturalWidth > 0"), "Pinned SVG missing"
            a_text = page.locator("#lesson").inner_text()
            assert "Đạo hàm giúp" in a_text and "Tự thử trước Core" in a_text
            page.screenshot(path=str(out / f"original-{width}.png"), full_page=True)
            page.get_by_role("button", name="B · Phân tầng dễ đọc").click()
            assert page.locator("article[data-mode=B]").count() == 1
            assert page.locator("section.lesson-unit").count() == 7
            assert page.locator(".opening-chunk").count() >= 3
            assert page.locator("details.fig-audit").count() == 1
            assert page.locator("details.fig-audit").get_attribute("open") is None
            assert page.locator(".reading-guide").count() == 1
            assert page.locator("p.try-step").count() == 3
            b_text = page.locator("#lesson").inner_text()
            assert "Đạo hàm giúp" in b_text and "Tự thử trước Core" in b_text
            assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 3"), "Horizontal overflow in B"
            assert page.locator("img").evaluate("(img) => img.complete && img.naturalWidth > 0")
            assert not errors, "JavaScript errors: " + "; ".join(errors)
            page.screenshot(path=str(out / f"variant-{width}.png"), full_page=True)
            page.get_by_role("button", name="A · Bản gốc").click()
            assert page.locator("#lesson").inner_text() == a_text, "A must remain reproducible after toggling"
            assert page.locator("[data-floating-ai]").count() == 0
            # T4 participant mode: assigned ONE variant, no visible A/B switch and
            # no reviewer hints. Source and figures must match the preview exactly.
            page.goto(preview + "?participant=A", wait_until="load")
            assert page.locator("html[data-trial-participant=true]").count() == 1
            assert page.locator("article[data-mode=A]").count() == 1
            assert page.locator(".controls").is_hidden(), "T4 learner may not switch A/B"
            assert page.locator(".source-note").is_hidden(), "Hide reviewer source metadata in T4"
            assert page.locator("#lesson").inner_text() == a_text, "Participant A differs from approved A preview"
            assert page.locator("img").evaluate("(img) => img.complete && img.naturalWidth > 0")
            assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 3")
            page.screenshot(path=str(out / f"participant-a-{width}.png"), full_page=True)
            page.goto(preview + "?participant=B", wait_until="load")
            assert page.locator("html[data-trial-participant=true]").count() == 1
            assert page.locator("article[data-mode=B]").count() == 1
            assert page.locator(".controls").is_hidden()
            assert page.locator(".source-note").is_hidden()
            assert page.locator("#lesson").inner_text() == b_text, "Participant B differs from approved B preview"
            assert page.locator("section.lesson-unit").count() == 7
            assert page.locator("img").evaluate("(img) => img.complete && img.naturalWidth > 0")
            assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 3")
            assert not errors, "JavaScript errors: " + "; ".join(errors)
            page.screenshot(path=str(out / f"participant-b-{width}.png"), full_page=True)
            print(f"PASS G12 B01 pilot {width}px: source/SVG A=B, reviewer toggle and participant A/B locked visual flows, no overflow/errors")
            page.close()
    finally:
        browser.close()
