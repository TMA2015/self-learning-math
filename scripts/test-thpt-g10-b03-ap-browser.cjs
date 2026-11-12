#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const url="http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/bai-3/";
(async()=>{
 const b=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await b.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    const resp=await page.goto(url,{waitUntil:"networkidle"});
    assert(resp?.ok(),"B03 page unavailable "+width);

    const modelB=page.locator(".md-content .tabbed-set").first();
    if(await modelB.count()){
      const labels=(await modelB.locator(".tabbed-labels > label").allInnerTexts()).map(x=>x.trim());
      assert.deepEqual(labels,["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ","4. Lỗi thường gặp"],
        "B03 exact owner-approved Model B L1 vocabulary");
      const blocks=modelB.locator(".tabbed-content > .tabbed-block");
      assert.equal(await blocks.count(),4,"B03 exactly four student panels");
      await modelB.locator(".tabbed-labels > label").nth(1).click();
      assert(await blocks.nth(1).isVisible(),"B03 SGK content panel selectable");
      const heads=(await blocks.nth(1).locator("h3").allInnerTexts()).map(x=>x.trim());
      for(const concept of [
        "2.1. Nhận diện bất phương trình bậc nhất hai ẩn",
        "2.2. Cặp nghiệm",
        "2.3. Đường biên",
        "2.4. Chọn đúng nửa mặt phẳng nghiệm",
        "2.5. Từ điều kiện đời sống"
      ]) assert(heads.some(h=>h.startsWith(concept)),"B03 Model B mathematical outcome missing "+concept);
      const img=blocks.nth(1).locator('img[src$="THPT_G10_B03_HALFPLANES_D5_R01.svg"]');
      assert.equal(await img.count(),1,"B03 reviewed half-plane D5 should remain");
      assert((await img.getAttribute("alt"))?.length>25,"B03 educational figure needs meaningful alt");
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(async el=>{if(el.decode)await el.decode()});
      const dims=await img.evaluate(el=>({
        ready:el.complete&&el.naturalWidth>0,
        width:el.getBoundingClientRect().width,
        parent:el.parentElement.getBoundingClientRect().width
      }));
      assert(dims.ready&&dims.width<=dims.parent+2,"B03 original SVG missing or overflows "+width);
      await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>=10,{timeout:12000});
      const geometry=await page.evaluate(()=>{
        const panel=document.querySelector(".md-content .tabbed-set .tabbed-content > .tabbed-block:nth-child(2)");
        if(!panel)throw Error("B03 SGK knowledge panel missing");
        const outside=[...panel.querySelectorAll("mjx-container")].filter(el=>{
          const r=el.getBoundingClientRect();
          return r.width>0&&(r.left < -5||r.right > innerWidth+5);
        });
        const inaccessible=outside.filter(el=>{
          // An expression may exceed the phone viewport if its enclosing
          // formula/table has a working LOCAL horizontal scroll. In that case
          // all symbols remain reachable; it is not clipped or page overflow.
          for(let node=el.parentElement;node&&node!==panel;node=node.parentElement){
            const style=getComputedStyle(node);
            if(!/^(auto|scroll)$/.test(style.overflowX))continue;
            if(node.scrollWidth<=node.clientWidth+1)continue;
            const before=node.scrollLeft;
            node.scrollLeft=Math.max(1,node.scrollWidth-node.clientWidth);
            const moves=node.scrollLeft>before+0.5;
            node.scrollLeft=before;
            if(moves)return false;
          }
          return true;
        });
        return {overflow:document.documentElement.scrollWidth-innerWidth,
          wideMath:outside.length,inaccessible:inaccessible.map(el=>({
            tex:el.getAttribute("aria-label"),text:el.textContent?.slice(0,100)
          }))};
      });
      assert(geometry.overflow<=20,"B03 horizontal page overflow "+width+": "+geometry.overflow);
      assert.deepEqual(geometry.inaccessible,[],"B03 inaccessible Knowledge MathJax at "+width+
        ": "+JSON.stringify(geometry.inaccessible));
      if(geometry.wideMath)console.log("PASS B03 "+width+"px: "+geometry.wideMath+
        " wide MathJax expression(s) reachable through local horizontal scrolling");
      assert.equal(await page.locator("[data-thpt-help-id]").count(),2,"B03 original D6 source IDs preserved");
      assert.equal(await page.locator("[data-thpt-first-try-id]").count(),5,"B03 original 5 self-attempts preserved");
      assert.equal(await page.locator("details.question[open]").count(),0,"B03 must not expose answers");
      console.log("PASS G10 B03 Model B AP: five mathematical outcomes, MathJax, D5, D6 and closed answers @"+width);
      continue;
    }
    const heads=await page.locator("h3").allInnerTexts();
    for(const name of ["1. Dạng bất phương trình bậc nhất hai ẩn","2. Cặp nghiệm và miền nghiệm","3. Quy trình biểu diễn miền nghiệm","4. Điều kiện thực tiễn"]){
     assert(heads.some(h=>h.trim().startsWith(name)),"B03 heading missing "+name);
    }
    const img=page.locator(".thpt-r4-probability-figure img");
    assert.equal(await img.count(),1,"B03 original D5 SVG missing");
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(el=>el.complete&&el.naturalWidth>0));
    const size=await img.evaluate(el=>({child:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
    assert(size.child<=size.parent+2,"B03 SVG overflow "+width);
    await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>=10,{timeout:12000});
    // Source parity guarantees all examples/suffix are byte-unchanged; AP regression
    // checks new Knowledge groups, while existing long worked-example display math
    // may sit in a contained horizontal-scrolling MathJax wrapper on narrow phones.
    const over=await page.evaluate(()=>{
     const h2=[...document.querySelectorAll("h2")];
     const first=h2.find(e=>e.textContent.includes("1. Kiến thức SGK"));
     const next=h2.find(e=>e.textContent.includes("2. Ví dụ"));
     if(!first||!next)throw new Error("B03 Knowledge boundaries missing");
     const insideKnowledge=e=>Boolean(first.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)&&Boolean(e.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING);
     const out=[...document.querySelectorAll("mjx-container")].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left< -5||r.right>innerWidth+5)});
     return {body:document.documentElement.scrollWidth-window.innerWidth,
      mathInKnowledge:out.filter(insideKnowledge).map(e=>({tex:e.getAttribute("aria-label"),text:e.textContent?.slice(0,90)})),
      mathOutsideKnowledge:out.filter(e=>!insideKnowledge(e)).length};
    });
    assert(over.body<=12,"B03 horizontal page overflow "+width+": "+over.body);
    assert.equal(over.mathInKnowledge.length,0,"B03 Knowledge MathJax overflow "+width+": "+JSON.stringify(over.mathInKnowledge));
    if(over.mathOutsideKnowledge)console.log("INFO B03 original, byte-unchanged examples/other math outside viewport at "+width+": "+over.mathOutsideKnowledge);
    assert.equal(await page.locator("[data-thpt-help-id]").count(),2,"B03 D6 help count changed");
   }finally{await page.close();}
  }
  console.log("PASS G10 B03 AP browser: 4 pedagogical groups, math/SVG/D6 responsive at 390/820/1440.");
 }finally{await b.close();}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
