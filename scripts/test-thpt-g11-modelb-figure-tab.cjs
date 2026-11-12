"use strict";
// Model B must reveal the real teaching panel before lazy SVG visual checks.
// This preserves source figure counts, decode, sizing and all assessment assertions.
const assert=require("node:assert/strict");
async function revealModelBFigure(page,image){
 const tabs=page.locator(".md-content .tabbed-set");
 assert.equal(await tabs.count(),1,"one G11 four-panel Model B tab set expected");
 const labels=tabs.locator(".tabbed-labels > label");
 assert.deepEqual((await labels.allInnerTexts()).map(s=>s.trim()),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
  "learner-facing Model B tab names changed");
 const idx=await image.evaluate(el=>{
  const panel=el.closest(".tabbed-block");
  return panel&&panel.parentElement?[...panel.parentElement.children].indexOf(panel):-1;
 });
 assert(idx>=0&&idx<4,"original reviewed figure must belong to a Model B content panel");
 await labels.nth(idx).click();
 assert(await image.isVisible(),"learner cannot see original reviewed figure after opening tab");
}
module.exports={revealModelBFigure};
