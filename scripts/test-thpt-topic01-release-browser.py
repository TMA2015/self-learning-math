"""CĐ01 only: compiled Golden UI 20261122.1, original source and public-mode safety."""
from __future__ import annotations
import functools
import http.server
import pathlib
import threading
from playwright.sync_api import sync_playwright, expect

ROOT=pathlib.Path(__file__).resolve().parent.parent
BUILD=ROOT/"site-thpt-preview"
assert BUILD.is_dir()
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(BUILD)))
threading.Thread(target=server.serve_forever,daemon=True).start()
BASE=f"http://127.0.0.1:{server.server_address[1]}/thpt-preview/chuyen-de/cd01/"
with sync_playwright() as pw:
 for engine in ("chromium","webkit"):
  browser=getattr(pw,engine).launch(headless=True)
  for width in (390,820,1440):
   ctx=browser.new_context(viewport={"width":width,"height":840},device_scale_factor=1)
   p=ctx.new_page()
   errors=[]
   p.on("pageerror",lambda error:errors.append(str(error)))
   for part in ("kien-thuc","luyen-tap","tu-kiem-tra"):
    assert p.goto(BASE+part+"/",wait_until="domcontentloaded").status==200
    nav=p.locator(".topic01-release-nav .thpt-sgk-lesson-nav")
    expect(nav.locator(":scope > *")).to_have_count(4)
    expect(nav.locator("a")).to_have_count(2)
    assert not any(("/"+part+"/") in (link.get_attribute("href") or "") for link in nav.locator("a").all())
    assert p.locator("[data-thpt-readiness],[data-mastery-credit]").count()==0
    if part=="kien-thuc":
     tabs=p.locator("[data-topic01-module-tab]")
     expect(tabs).to_have_count(3)
     expect(p.locator("[data-topic01-subtab]")).to_have_count(11)
     expect(p.locator("[data-topic01-callout]")).to_have_count(12)
     expected={"concept":("rgb(232, 247, 242)",9),"rule":("rgb(234, 241, 252)",1),"recap":("rgb(255, 243, 213)",1),"formula":("rgba(0, 0, 0, 0)",1)}
     p.locator("body").evaluate("(el)=>el.setAttribute('data-md-color-scheme','default')")
     for role,(color,count) in expected.items():
      boxes=p.locator('[data-topic01-callout="'+role+'"]')
      expect(boxes).to_have_count(count)
      for box in boxes.all():
       assert box.evaluate("(e)=>getComputedStyle(e).backgroundColor")==color,(engine,width,role,box.evaluate("(e)=>getComputedStyle(e).backgroundColor"))
     for tab in tabs.all():
      tab.click()
      active=p.locator("[data-topic01-module-panel]:visible")
      expect(active).to_have_count(1)
      for sub in active.locator("[data-topic01-subtab]").all():
       sub.click()
       assert sub.evaluate("(e)=>getComputedStyle(e).fontSize")==("14px" if width<=640 else "15px")
       assert sub.evaluate("(e)=>e.getBoundingClientRect().height")==44
       assert p.evaluate("document.documentElement.scrollWidth<=innerWidth+1"),(engine,width,"viewport overflow")
     assert p.locator("article.md-typeset").evaluate("(e)=>parseFloat(getComputedStyle(e).fontSize)")==p.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)*.8")
     for name in ("THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg","THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg"):
      img=p.locator("img[src*='"+name+"']")
      expect(img).to_have_count(1)
      assert p.request.get(img.evaluate("(e)=>e.src")).ok
     assert p.locator("a[href='../../../math-lab/models/slm-top01-truth-01/']").count()==1
    elif part=="luyen-tap":
     cards=p.locator("[data-topic01-practice-card]")
     expect(cards).to_have_count(3)
     expect(p.locator("[data-topic01-source-shelf]")).to_be_hidden()
     grid=p.locator(".topic01-golden-grid")
     assert len(grid.evaluate("(e)=>getComputedStyle(e).gridTemplateColumns").split())==(1 if width<=640 else 2)
     modal=p.locator("dialog.topic01-practice-dialog")
     for i,(count,first) in enumerate(((11,1),(8,12),(5,20))):
      cards.nth(i).click()
      expect(modal).to_be_visible()
      buttons=modal.locator(".thpt-r4-modal-question-nav button")
      expect(buttons).to_have_count(count)
      for j in range(count):
       buttons.nth(j).click()
       expect(modal.locator("[data-topic01-current-item]")).to_have_attribute("data-topic01-current-item",str(first+j))
       expect(modal.locator("details[open]")).to_have_count(0)
       reveal=modal.locator(".thpt-r4-formative-submit")
       expect(reveal).to_have_text("Đối chiếu")
       reveal.click()
       expect(modal.locator("details[open] .thpt-r4-formative-reveal")).to_be_visible()
      modal.locator(".topic01-close").click()
      expect(modal).to_be_hidden()
    else:
     root=p.locator("[data-topic01-public-selfcheck]")
     expect(root).to_be_visible()
     jumps=root.locator(".g10sc-jump-button")
     expect(jumps).to_have_count(11)
     for j in range(11):
      jumps.nth(j).click()
      body=root.locator(".g10sc-body")
      expect(body.locator("h3")).to_have_text("Câu "+str(j+1)) # Câu 11 included
      solution=body.locator("#topic01-current-solution")
      expect(solution).to_be_hidden()
      expect(body.locator("input,textarea")).to_have_count(0)
      body.get_by_role("button",name="Đối chiếu",exact=True).click()
      expect(solution).to_be_visible()
      expect(solution).to_have_attribute("data-thpt-canonical-solution",body.get_attribute("data-thpt-canonical-item"))
      expect(solution.locator(".g10sc-error")).to_have_count(0)
   assert not errors,(engine,width,errors)
   print(f"PASS CĐ01 {engine} {width}: 12 colors, SGK typography, 3 groups/24 items, 11 replay solutions, Golden modal")
   ctx.close()
  browser.close()
server.shutdown()
