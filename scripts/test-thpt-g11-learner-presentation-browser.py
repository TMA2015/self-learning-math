#!/usr/bin/env python3
"""Owner 03/11 G11 visual presentation QA; not independent academic/P2 real-Safari approval."""
from playwright.sync_api import sync_playwright
ROOT="http://127.0.0.1:8765"
P=ROOT+"/thpt-preview/sgk/lop-11/"
def visit(page,p):
    response=page.goto(P+p,wait_until="networkidle",timeout=35000)
    assert response and response.ok, f"HTTP failed: {p}"
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    try:
        for width,height in [(390,844),(820,1180),(1440,900)]:
            page=browser.new_page(viewport={"width":width,"height":height})
            try:
                visit(page,"chuong-vi/bai-18/")
                hs=page.locator(".md-content__inner h3").all_inner_texts()
                assert len([x for x in hs if x.startswith("1.")])==6,(width,hs)
                assert not any(x.startswith("2A") for x in hs)
                assert page.locator(".md-content__inner sup").count()>=8,"B18 powers remain raw"
                assert page.locator("code.thpt-math-notation sup").count()>=4,"Inline code powers not visually raised"
                visit(page,"chuong-vi/bai-21/")
                assert page.locator("code.thpt-math-notation sub").count()>=2,"log_a subscript remains raw"
                for n in (22,23,24,25,26,27):
                    visit(page,f"chuong-vii/bai-{n}/")
                    hs=page.locator(".md-content__inner h3").all_inner_texts()
                    assert any(x.startswith("1.5. Làm rõ") for x in hs),f"B{n} lacks 1.5 section"
                    assert not any(x.startswith("4B") for x in hs),f"B{n} retained 4B"
                for n in (28,29,30):
                    visit(page,f"chuong-viii/bai-{n}/")
                    hs=page.locator(".md-content__inner h3").all_inner_texts()
                    assert len([x for x in hs if x.startswith("1.")])==6,f"B{n} numbering mismatch"
                    assert not any(x.startswith("§") for x in hs)
                    assert page.evaluate("document.documentElement.scrollWidth-window.innerWidth")<=20,f"B{n} overflow at {width}"
                response=page.goto(ROOT+"/kien-thuc/",wait_until="networkidle",timeout=35000)
                assert response and response.ok
                assert page.locator("code.thpt-math-notation").count()==0,"THCS affected by THPT math normalizer"
            finally:
                page.close()
        print("PASS: G11 display 390/820/1440, B18 math, B22-27 4B, B28-30 headings, THCS isolation")
    finally:
        browser.close()
