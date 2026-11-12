#!/usr/bin/env node
"use strict";
/* DELTA_A_UI: 6 published source blobs and ALL CSS/main configs unchanged;
 * only rendered headings 1.x,3.x,4.x and tab labels 1-4 are added.
 * This is not S1 approval / not final release or Mastery evidence.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_G10_URL||"http://127.0.0.1:8765";
const SHA={
"docs/thpt-preview/sgk/chuong-i/bai-1.md":"fb4bd72f6101523e30e30cc970d74c23b76228a8",
"docs/thpt-preview/sgk/chuong-i/bai-2.md":"8a7b90f1768b789429def045e38ebe97e6adbf3a",
"docs/thpt-preview/sgk/chuong-ii/bai-3.md":"c9ae5104c2f65779f2dd452d3f7775abe2600b7b",
"docs/thpt-preview/sgk/chuong-ii/bai-4.md":"2c432958169cd9f3a8a66e6bc07610b6a60d5815",
"docs/thpt-preview/sgk/chuong-iii/bai-5.md":"d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2",
"docs/thpt-preview/sgk/chuong-iii/bai-6.md":"3a2f4392357b0a7155488ba2427fbb2dde0dde81"
};
const STYLES={
"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css":"4acf8094740835fec618e0f1a45189053b06f387",
"docs/assets/stylesheets/site-design-system.css":"cede51cfff25ef4f6c612c894c81f4639625c32b",
"docs/assets/stylesheets/thpt-r4-preview.css":"f46b7280965c226039093c408dc7f8e3e78001fa",
"docs/assets/stylesheets/thpt-sgk-lesson-nav-v1.css":"4bf16bba1cd144f0a69c932d8ead24dd4534f4cb",
"mkdocs.yml":"0567277340fa5c062dd83e63f7e8796556d1ba51",
"mkdocs.thpt-preview.yml":"a18192415be322da6b3bdea6e6ca462cf1a189b4"
};
function hash(buffer){
 const b=Buffer.isBuffer(buffer)?buffer:Buffer.from(buffer);
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
}
function checkSHA(){
 for(const [p,sha] of Object.entries({...SHA,...STYLES}))
  assert.equal(hash(fs.readFileSync(path.join(root,p))),sha,"DELTA_A violation, non-UI source/theme changed: "+p);
}
const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const ch=n=>n<=2?"i":n<=4?"ii":"iii";
const widths=[390,820,1440];
(async()=>{
 checkSHA();
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let passed=0;
 try{
  for(const width of widths){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    for(let n=1;n<=6;n++){
     const loc="G10-B"+n+"@"+width;
     const url=base+"/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+"/";
     const res=await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
     assert(res?.ok(),loc+" HTML page reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10B01B06EditorialNumbered==="true",{timeout:15000});
     const tabs=page.locator(".md-content__inner .tabbed-set").first();
     const labels=tabs.locator(":scope > .tabbed-labels > label");
     assert.deepEqual((await labels.allInnerTexts()).map(t=>t.trim()),names.map((v,i)=>(i+1)+". "+v),loc+" four section titles");
     const groups=tabs.locator(":scope > .tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,loc+" EXACT four original tab blocks");
     const discovery=groups.nth(0).locator("h3");
     assert.deepEqual((await discovery.allInnerTexts()).map(x=>x.trim()),[
      "1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"
     ],loc+" discovery headings");
     const knowledge=(await groups.nth(1).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(knowledge.length>=4&&knowledge.every((v,i)=>v.startsWith("2."+(i+1)+". ")),loc+" original SGK 2.x preserved");
     const exampleTitles=(await groups.nth(2).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(exampleTitles.length>=3&&exampleTitles.every((v,i)=>v.startsWith("3."+(i+1)+". Ví dụ "+(i+1)+" —")),loc+" 3.x examples");
     const mistakes=groups.nth(3).locator(":scope > details.tip > summary");
     assert((await mistakes.count())>=2,loc+" original remediation folds");
     const mistakeTitles=(await mistakes.allInnerTexts()).map(x=>x.trim());
     assert(mistakeTitles.every((v,i)=>v.startsWith("4."+(i+1)+". ")),loc+" 4.x mistake labels");
     const source=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+".md"),"utf8");
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id"]){
      const exp=[...source.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
      const got=(await page.locator("["+key+"]").evaluateAll((elements,k)=>elements.map(e=>e.getAttribute(k)),key)).sort();
      assert.deepEqual(got,exp,loc+" "+key+" parity");
     }
     for(let t=0;t<4;t++){
      await labels.nth(t).click();
      assert(await groups.nth(t).isVisible(),loc+" tab "+(t+1)+" actually opens");
     }
     assert.equal(await tabs.locator("details.question[open]").count(),0,loc+" no pre-revealed formative answer");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,loc+" no RD1 readiness mounted in Knowledge");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+3);
     assert(!overflow,loc+" whole-page overflow");
     passed++;
     console.log("PASS "+loc+" 4-tab numbering, headings, FirstTry/D6 and 1-6 original theme");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(passed,18);
 console.log("PASS 18/18 real browser cases G10 B01-B06 (390/820/1440). SOURCE/CSS original SHA 12/12. DELTA_A_UI only. No academic source/learner/backend/merge/deploy.");
})().catch(e=>{console.error(e);process.exitCode=1});
