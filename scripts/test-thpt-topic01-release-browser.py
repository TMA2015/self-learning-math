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
    expect(nav.locator("a")).to_have_count(3)  # CĐ02 W1 neighbor now published
    expect(nav.locator("a[href='../../cd02/kien-thuc/']")).to_have_count(1)
    assert not any((link.get_attribute("href") or "") == "../"+part+"/" for link in nav.locator("a").all())
    assert p.locator("[data-thpt-readiness],[data-mastery-credit]").count()==0
    assert not p.evaluate("document.documentElement.className.includes('topic01-boot-pending-')"),(engine,width,part,"hydration never completed")
    if p.locator(".topic01-boot-status").is_visible():
     raise AssertionError(("CD01_HYDRATION_ERROR",engine,width,part,errors,p.evaluate("""() => ({html:document.documentElement.className,ready:document.querySelector('[data-topic01-knowledge-start]')?.dataset.ready,console:document.querySelector('.topic01-boot-status')?.textContent})""")))
    expect(p.locator(".topic01-boot-status")).to_be_hidden()
    assert p.locator(".topic01-boot-status").count()==1
    if part=="kien-thuc":
     tabs=p.locator("[data-topic01-module-tab]")
     expect(tabs).to_have_count(3)
     expect(p.locator("[data-topic01-subtab]")).to_have_count(11)
     for short_tab in p.locator("[data-topic01-module-tab],[data-topic01-subtab]").all():
      short=short_tab.inner_text().strip()
      full=short_tab.get_attribute("title")
      assert full and len(short)<len(full) and len(short)<=32,(engine,width,short,full)
      assert short_tab.get_attribute("aria-label")==full
     assert p.locator('[data-topic01-module-tab="1"]').inner_text()=="1. Mệnh đề và lập luận"
     expect(p.locator("[data-topic01-callout]")).to_have_count(12)
     expected={"concept":("rgb(232, 247, 242)",9),"rule":("rgb(234, 241, 252)",1),"recap":("rgb(255, 243, 213)",1),"formula":("rgba(0, 0, 0, 0)",1)}
     p.locator("body").evaluate("(el)=>el.setAttribute('data-md-color-scheme','default')")
     for role,(color,count) in expected.items():
      boxes=p.locator('[data-topic01-callout="'+role+'"]')
      expect(boxes).to_have_count(count)
      for box in boxes.all():
       assert box.evaluate("(e)=>getComputedStyle(e).backgroundColor")==color,(engine,width,role,box.evaluate("(e)=>getComputedStyle(e).backgroundColor"))
     # Regression: approved set-difference equation must be genuine MathJax, never raw Markdown escape.
     tabs.nth(1).click()
     p.locator('[data-topic01-subtab="2-3"]').click()
     formula=p.locator('[data-topic01-callout="concept"]').filter(has_text="Hiệu giữ tập đứng trước")
     expect(formula).to_have_count(1)
     assert "[A\\setminus B=" not in formula.inner_text(),(engine,width,"raw set difference formula")
     assert formula.locator(".arithmatex").count()>=2,(engine,width,"missing MathJax source")
     # Compare disclosure CSS with the accepted SGK Golden: no default bright green panel.
     for tab in tabs.all():
      tab.click()
      active=p.locator("[data-topic01-module-panel]:visible")
      expect(active).to_have_count(1)
      for sub in active.locator("[data-topic01-subtab]").all():
       sub.click()
       if active.locator("details.question:visible").count():
        disclosure=active.locator("details.question:visible").first
        assert disclosure.evaluate("(e)=>getComputedStyle(e).backgroundColor")=="rgb(248, 250, 255)",(engine,width,"SGK disclosure background")
        assert disclosure.locator("summary").evaluate("(e)=>getComputedStyle(e).color")=="rgb(38, 62, 115)",(engine,width,"SGK disclosure summary")
       assert sub.evaluate("(e)=>getComputedStyle(e).fontSize")==("14px" if width<=640 else "15px")
       assert sub.evaluate("(e)=>e.getBoundingClientRect().height")==44
       overflow=p.evaluate("""() => ({scroll:document.documentElement.scrollWidth,viewport:innerWidth, elements:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect(),style=getComputedStyle(e);return r.right>innerWidth+2&&style.display!=='none'&&style.visibility!=='hidden'&&r.width>0}).slice(0,14).map(e=>({tag:e.tagName,class:e.className?.toString().slice(0,100),right:Math.round(e.getBoundingClientRect().right),width:Math.round(e.getBoundingClientRect().width),text:e.textContent.slice(0,48)}))})""")
       assert overflow["scroll"]<=overflow["viewport"]+1,(engine,width,"viewport overflow",overflow)
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
       expect(modal.locator(".topic01-question-body > .topic01-stem-label strong")).to_have_text("Đề bài")
       expect(modal.locator("details[open]")).to_have_count(0)
       expect(modal.locator(".thpt-r4-formative-submit")).to_have_count(0) # no duplicated action
       detail=modal.locator(".thpt-r4-formative-actions details")
       expect(detail).to_have_count(1)
       detail.locator("summary").click()
       expect(detail.locator(".thpt-r4-formative-reveal")).to_be_visible()
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
      expect(body.locator(":scope > .topic01-stem-label strong")).to_have_text("Đề bài")
      solution=body.locator("#topic01-current-solution")
      expect(solution).to_be_hidden()
      expect(body.locator("input,textarea")).to_have_count(0)
      body.get_by_role("button",name="Đối chiếu",exact=True).click()
      expect(solution).to_be_visible()
      expect(solution).to_have_attribute("data-thpt-canonical-solution",body.get_attribute("data-thpt-canonical-item"))
      expect(solution.locator(".g10sc-error")).to_have_count(0)
   if width==390:
    # Simulate a blocked Topic JS: raw source must recover instead of a blank page.
    for part,marker in (("kien-thuc","knowledge"),("luyen-tap","practice"),("tu-kiem-tra","selfcheck")):
     fallback=ctx.new_page()
     fallback.route("**/thpt-topic01-release-tabs-v1.js",lambda route:route.abort())
     fallback.goto(BASE+part+"/",wait_until="domcontentloaded")
     expect(fallback.locator(".topic01-boot-status")).to_be_visible()
     assert fallback.evaluate("(part)=>document.documentElement.classList.contains('topic01-boot-fallback-'+part)",marker)
     assert fallback.locator("article.md-typeset > h1").count()>=1
     if part=="tu-kiem-tra":
      assert fallback.locator("article.md-typeset > p > strong").count()>=11
     fallback.close()
   assert not errors,(engine,width,errors)
   print(f"PASS CĐ01 {engine} {width}: 12 colors, SGK typography, 3 groups/24 items, 11 replay solutions, Golden modal")
   ctx.close()
  browser.close()
server.shutdown()
