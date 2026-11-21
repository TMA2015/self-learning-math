"""Real compiled Topic01 student-page smoke; never touches production or Firebase."""
from __future__ import annotations
import functools
import http.server
import pathlib
import re
import threading
from playwright.sync_api import sync_playwright

ROOT=pathlib.Path(__file__).resolve().parent.parent
BUILD=ROOT/"site-thpt-preview"
assert BUILD.is_dir(), "Build MkDocs THPT before browser QA"
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(BUILD)))
threading.Thread(target=server.serve_forever,daemon=True).start()
BASE=f"http://127.0.0.1:{server.server_address[1]}"
with sync_playwright() as pw:
 for engine in ("chromium","webkit"):
  b=getattr(pw,engine).launch(headless=True)
  for width in (320,390,820,1440):
   ctx=b.new_context(viewport={"width":width,"height":840},device_scale_factor=1)
   p=ctx.new_page()
   errors=[]
   p.on("pageerror",lambda error:errors.append(str(error)))
   route=BASE+"/thpt-preview/chuyen-de/"
   assert p.goto(route,wait_until="domcontentloaded").status==200
   assert p.locator('[data-thpt-topic="1"]').count()==1,(engine,width,"catalog")
   assert p.locator('.topic01-legacy-note a[href*="ham-so/kien-thuc/"]').count()==1,(engine,width,"legacy deep link in catalog")
   for part in ("kien-thuc","luyen-tap","tu-kiem-tra"):
    res=p.goto(route+"cd01/"+part+"/",wait_until="networkidle")
    assert res.status==200,(engine,width,part,"HTTP")
    assert p.locator(".thpt-r4-topic-steps a").count()==3,(engine,width,part,"3-part nav")
    assert p.locator(".topic01-end-nav a").first.count()==1
    assert p.locator("details[open]").count()==0,(engine,width,part,"answers pre-exposed")
    assert p.locator("[data-thpt-readiness],[data-mastery-credit]").count()==0,(engine,width,part,"Q16 leak")
    if part=="kien-thuc":
     p.locator("[data-topic01-module-tab]").first.wait_for(timeout=15000)
     assert p.locator("[data-topic01-module-tab]").count()==3,(engine,width,"outer tabs")
     assert p.locator("[data-topic01-subtab]").count()==11,(engine,width,"inner tabs")
     p.locator('[data-topic01-module-tab="2"]').click()
     assert p.locator('[data-topic01-module-panel="2"]').is_visible(),(engine,width,"module switch")
     p.locator('[data-topic01-module-tab="1"]').click()
     assert p.locator("a[href='../../../math-lab/models/slm-top01-truth-01/']").count()==1,(engine,width,"math lab link")
     assert p.locator("img[src*='THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg']").count()==1
     assert p.locator("img[src*='THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg']").count()==1
    elif part=="luyen-tap":
     if p.locator("[data-topic01-practice-card]").count()!=24:
      debug=p.evaluate("""() => ({
       marker:!!document.querySelector('[data-topic01-practice-start]'),
       end:!!document.querySelector('[data-topic01-practice-end]'),
       article:!!document.querySelector('[data-topic01-practice-start]')?.closest('.md-typeset'),
       h2:[...document.querySelectorAll('article.md-typeset h2, .md-typeset > h2')].slice(-10).map(x=>x.textContent.slice(0,60)),
       sourceBai:[...document.querySelectorAll('.md-typeset p > strong')].filter(x=>/^Bài\\s+\\d+\\./.test(x.textContent)).length,
       golden:!!window.THPT_GOLDEN_RUNTIME,
       library:!!document.querySelector('script[src*="thpt-topic01-release-tabs"]'),
       ready:document.querySelector('[data-topic01-practice-start]')?.dataset.ready||null
      })""")
      raise AssertionError((engine,width,"Golden 24-card source projection failed",debug))
     p.locator("[data-topic01-practice-card]").first.wait_for(timeout=15000)
     assert p.locator("[data-topic01-practice-card]").count()==24,(engine,width,"24 Golden cards")
     assert p.locator("[data-topic01-source-shelf]").count()==1,(engine,width,"source shelf")
     assert p.locator("[data-topic01-source-shelf]").is_hidden(),(engine,width,"no inline bulk questions")
     assert p.locator("dialog.topic01-practice-dialog[open]").count()==0
     p.locator('[data-topic01-practice-card="1"]').click()
     modal=p.locator("dialog.topic01-practice-dialog")
     assert modal.is_visible(),(engine,width,"Golden modal open")
     assert modal.locator("[data-topic01-current-item]").get_attribute("data-topic01-current-item")=="1"
     assert modal.locator(".thpt-r4-modal-question-nav button").count()==24
     assert modal.locator("details[open]").count()==0,(engine,width,"one question no answer pre-open")
     modal.locator(".thpt-r4-modal-question-nav button").last.click()
     assert modal.locator("[data-topic01-current-item]").get_attribute("data-topic01-current-item")=="24"
     assert modal.locator("details").count()==1,(engine,width,"one actual Practice solution")
     modal.locator("details summary").click()
     assert modal.locator("details[open]").count()==1
     modal.locator(".topic01-close").click()
     assert not modal.is_visible()
    else:
     assert p.get_by_text(re.compile(r"Câu 11")).count()>0,(engine,width,"full selfcheck")
     assert p.locator("details").count()==1,(engine,width,"only voluntary answer-location disclosure")
     d=p.locator("details").first
     assert d.get_attribute("open") is None
     d.locator("summary").click()
     assert d.get_attribute("open") is not None
     assert p.get_by_text(re.compile(r"không phải kết quả kiểm tra")).count()>0
   assert not errors,(engine,width,"JS errors",errors[:5])
   print(f"PASS Topic01 {engine} {width}: 3-part UX, Knowledge tabs, 24 practice, 11 public selfcheck")
   ctx.close()
  b.close()
server.shutdown()
print("PASS Topic01 compiled browser AP1-AP5, Chromium/WebKit x 4 widths")
