"""Browser release QA for isolated Math Lab on the actual MkDocs build. No deploy."""
from __future__ import annotations
import csv
import functools
import http.server
import os
import pathlib
import threading
from playwright.sync_api import sync_playwright

ROOT=pathlib.Path(__file__).resolve().parent.parent
BUILD=ROOT/"site-thpt-preview"
assert BUILD.is_dir(), "Build THPT preview first"
with (ROOT/"scripts/math-lab-25-release-manifest.tsv").open(encoding="utf-8") as f:
    rows=[row for row in csv.reader((line for line in f if not line.startswith("#")),delimiter="\t")]
assert len(rows)==25

handler=functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(BUILD))
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f"http://127.0.0.1:{server.server_address[1]}"
failures=[]
SHOTS=ROOT/"artifacts/math-lab-review"
SHOTS.mkdir(parents=True,exist_ok=True)
(SHOTS/"README_PREVIEW.txt").write_text(
    "Math Lab preview only -- NOT production.\n"
    "This ZIP contains actual Chromium screenshots and the built THPT site.\n"
    "From the extracted directory, run:\n"
    "  python -m http.server 8080 --directory site-thpt-preview\n"
    "Open http://localhost:8080/thpt-preview/home/ or\n"
    "http://localhost:8080/thpt-preview/math-lab/ in your browser.\n"
    "On iPad connected to the same Wi-Fi, use your PC's local IP and port 8080.\n"
    "Keep this server private; do not expose it to the Internet.\n",
    encoding="utf-8"
)
with sync_playwright() as pw:
 for browser_name in ("chromium","webkit"):
    browser=getattr(pw,browser_name).launch(headless=True)
    for width in (320,390,820,1440):
      context=browser.new_context(viewport={"width":width,"height":850},device_scale_factor=1)
      page=context.new_page()
      errors=[]
      page.on("pageerror",lambda err:errors.append(str(err)))
      if browser_name=="chromium" and width in (390,1440):
        page.goto(base+"/thpt-preview/home/",wait_until="domcontentloaded")
        page.locator(".thpt-r4-grid .thpt-r4-tile").first.wait_for()
        assert page.locator(".thpt-r4-grid .thpt-r4-tile").count()==6
        page.screenshot(path=str(SHOTS/f"home-{width}.png"),animations="disabled")
      page.goto(base+"/thpt-preview/math-lab/",wait_until="domcontentloaded")
      page.locator("[data-ml-card]").first.wait_for()
      if browser_name=="chromium" and width in (390,820,1440):
        page.screenshot(path=str(SHOTS/f"catalog-{width}.png"),animations="disabled")
      assert page.locator("[data-ml-card]").count()==25, (browser_name,width,"cards")
      assert page.locator("[data-ml-count]").inner_text().startswith("25"),(browser_name,width,"count")
      page.locator('[data-ml-mode="grade"]').click()
      assert page.locator('[data-ml-mode="grade"]').get_attribute("aria-pressed")=="true"
      page.locator("[data-ml-search]").fill("Bayes")
      assert page.locator("[data-ml-card]").count()==1,(browser_name,width,"search")
      # Old model-page bookmarks now render their ORIGINAL page context
      # around the actual standalone interaction, as one TOP document.
      legacy=base+"/thpt-preview/math-lab/models/slm-top21-bayes-tree-r01/"
      page.goto(legacy,wait_until="domcontentloaded")
      assert page.url==legacy,(browser_name,width,"old model page incorrectly redirected")
      assert page.locator("[data-ml-restored-full-page]").count()==1
      assert page.locator("#ml-restored-top a[href='../../']").count()==1
      assert page.locator("#ml-restored-bottom a[href='../../']").count()==1
      assert page.locator("iframe").count()==0,(browser_name,width,"frame still present")
      page.goto(base+"/thpt-preview/math-lab/",wait_until="domcontentloaded")
      assert page.locator('[data-ml-mode="grade"]').get_attribute("aria-pressed")=="true",(browser_name,width,"view preserved")
      assert page.locator("[data-ml-search]").input_value()=="Bayes",(browser_name,width,"search preserved")
      page.locator("[data-ml-search]").fill("")
      # Every card opens the restored original model PAGE (not a bare asset).
      for row in rows:
        model_id=row[0]
        slug=model_id.lower()
        expected="models/"+slug+"/"
        card=page.locator('[data-ml-card][href="'+expected+'"]')
        assert card.count()==1,(browser_name,width,model_id,"restored-page card missing")
      page.locator('[data-ml-card][href="models/slm-top21-bayes-tree-r01/"]').click()
      page.wait_for_url(base+"/thpt-preview/math-lab/models/slm-top21-bayes-tree-r01/",timeout=15000)
      assert len(page.frames)==1,(browser_name,width,"catalog link inserted iframe")
      assert page.locator("#ml-restored-top .ml-heading").inner_text()=="Bayes và sơ đồ cây"
      # Actual visible top BACK link, not the browser navigation button.
      page.locator("#ml-restored-top a").click()
      page.wait_for_url(base+"/thpt-preview/math-lab/",timeout=15000)
      assert page.locator("[data-ml-card]").count()==25,(browser_name,width,"Math Lab back link broken")
      if browser_name=="chromium" and width in (390,820,1440):
        page.goto(base+"/thpt-preview/home/",wait_until="domcontentloaded")
        launcher=page.locator("[data-thpt-r4-launcher]")
        launcher.wait_for()
        assert "5 + 1" in launcher.inner_text(),(browser_name,width,"Golden 5+1 changed")
        launcher.click()
        dialog=page.locator("[data-thpt-r4-shortcut-dialog]")
        assert dialog.locator('[data-thpt-math-lab-shortcut="1"]').count()==1,(browser_name,width,"Math Lab shortcut missing")
        assert dialog.locator('nav[aria-label="Năm lối tắt chính Toán THPT"] a').count()==5,(browser_name,width,"Five main groups changed")
        assert dialog.locator('[data-thpt-math-lab-shortcut="1"]').get_attribute("href").endswith("/thpt-preview/math-lab/"),(browser_name,width,"Math Lab shortcut wrong URL")
      for row in rows:
        model_id=row[0]
        # Original Markdown page context + unchanged signed interactive body.
        # No nested scrolling iframe. Verify BOTH originally authored back links.
        page.goto(base+"/thpt-preview/math-lab/models/"+model_id.lower()+"/",wait_until="domcontentloaded")
        page.locator("[data-ml-restored-full-page]").wait_for()
        assert len(page.frames)==1,(browser_name,width,model_id,"nested frame found")
        assert page.locator("iframe").count()==0,(browser_name,width,model_id,"frame still present")
        assert page.locator("#ml-restored-top a[href='../../']").count()==1,(browser_name,width,model_id,"top Math Lab back missing")
        assert page.locator("#ml-restored-bottom a[href='../../']").count()==1,(browser_name,width,model_id,"bottom Math Lab back missing")
        assert "Khám phá bằng cách điều chỉnh mô hình." in page.locator("#ml-restored-bottom").inner_text(),(browser_name,width,model_id,"teaching note missing")
        assert page.locator("#ml-restored-top .ml-kicker").inner_text().startswith("MATH LAB"),(browser_name,width,model_id,"page label missing")
        assert page.locator("#ml-restored-top .ml-description").inner_text().strip(),(browser_name,width,model_id,"page description missing")
        assert page.locator("button,input,select").count()>0,(browser_name,width,model_id,"original model controls missing")
        box=page.evaluate("""() => {
          const d=document.documentElement, max=Math.max(0,d.scrollHeight-innerHeight);
          scrollTo(0,max);
          return {viewport:innerWidth,scrollWidth:d.scrollWidth,max,y:scrollY,top:window===window.top};
        }""")
        assert box["top"],(browser_name,width,model_id,"not top-level")
        assert box["scrollWidth"]<=box["viewport"]+3,(browser_name,width,model_id,"horizontal document overflow",box)
        assert box["max"]<5 or box["y"]>=box["max"]-5,(browser_name,width,model_id,"cannot reach model bottom",box)
        if browser_name=="chromium" and model_id in ("SLM-TOP21-BAYES-TREE-R01","SLM-TOP06-UNIT-CIRCLE-01") and width in (390,1440):
          page.screenshot(path=str(SHOTS/f"model-fullpage-{model_id.lower()}-{width}.png"),animations="disabled",full_page=True)
      if errors:
        failures.append((browser_name,width,errors[:6]))
      print(f"PASS {browser_name} {width}px 25 model pages: restored context, both back links, no iframe, controls, one-scroll, Golden 5+1")
      context.close()
    browser.close()
server.shutdown()
assert not failures, "Unexpected JS exceptions: "+repr(failures)
print("PASS Math Lab browser 2 engines x 4 widths x 25 models = 200 contextual, frameless full-page checks")
