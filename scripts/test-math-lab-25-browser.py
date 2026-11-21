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
with sync_playwright() as pw:
 for browser_name in ("chromium","webkit"):
    browser=getattr(pw,browser_name).launch(headless=True)
    for width in (320,390,820,1440):
      context=browser.new_context(viewport={"width":width,"height":850},device_scale_factor=1)
      page=context.new_page()
      errors=[]
      page.on("pageerror",lambda err:errors.append(str(err)))
      page.goto(base+"/thpt-preview/math-lab/",wait_until="domcontentloaded")
      page.locator("[data-ml-card]").first.wait_for()
      assert page.locator("[data-ml-card]").count()==25, (browser_name,width,"cards")
      assert page.locator("[data-ml-count]").inner_text().startswith("25"),(browser_name,width,"count")
      page.locator('[data-ml-mode="grade"]').click()
      assert page.locator('[data-ml-mode="grade"]').get_attribute("aria-pressed")=="true"
      page.locator("[data-ml-search]").fill("Bayes")
      assert page.locator("[data-ml-card]").count()==1,(browser_name,width,"search")
      page.goto(base+"/thpt-preview/math-lab/models/slm-top21-bayes-tree-r01/",wait_until="domcontentloaded")
      assert page.locator("[data-math-lab-model]").count()==1
      page.locator(".ml-frame iframe").wait_for()
      assert page.locator(".ml-frame iframe").get_attribute("sandbox")=="allow-scripts"
      page.goto(base+"/thpt-preview/math-lab/",wait_until="domcontentloaded")
      assert page.locator('[data-ml-mode="grade"]').get_attribute("aria-pressed")=="true",(browser_name,width,"view preserved")
      assert page.locator("[data-ml-search]").input_value()=="Bayes",(browser_name,width,"search preserved")
      page.locator("[data-ml-search]").fill("")
      for row in rows:
        model_id=row[0]
        slug=model_id.lower()
        page.goto(base+"/thpt-preview/math-lab/models/"+slug+"/",wait_until="domcontentloaded")
        frame=page.locator(".ml-frame iframe")
        frame.wait_for()
        assert frame.get_attribute("sandbox")=="allow-scripts",(browser_name,width,model_id,"sandbox")
        model_frame=next((fr for fr in page.frames if fr.url.endswith(model_id+".html")),None)
        assert model_frame is not None,(browser_name,width,model_id,"iframe asset not loaded")
        model_frame.locator("body").wait_for()
        assert model_frame.locator("button,input,select").count()>0,(browser_name,width,model_id,"no controls")
        is_isolated=model_frame.evaluate("() => { try { return !Boolean(window.parent.document.body); } catch(e) { return true; } }")
        assert is_isolated,(browser_name,width,model_id,"parent DOM accessible")
        assert page.locator(".ml-back").count()==2,(browser_name,width,model_id,"back links")
        assert page.locator(".ml-frame iframe").evaluate("(e) => e.getBoundingClientRect().width <= document.documentElement.clientWidth + 1"),(browser_name,width,model_id,"frame overflow")
      if errors:
        failures.append((browser_name,width,errors[:6]))
      print(f"PASS {browser_name} {width}px catalog filters + 25 frame pages / isolation")
      context.close()
    browser.close()
server.shutdown()
assert not failures, "Unexpected JS exceptions: "+repr(failures)
print("PASS Math Lab browser 2 engines x 4 widths x 25 models = 200 frame checks")
