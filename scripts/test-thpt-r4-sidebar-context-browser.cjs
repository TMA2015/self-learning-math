"use strict";
// UI-only AP/R regression: desktop sidebar reveals current SGK chapter/Topic;
// summaries show one navigation level, existing iPhone/iPad drawer untouched.
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const root="http://127.0.0.1:8765/thpt-preview/";
const cases=[
 ["sgk-overview","sgk/", "sgk-summary"],
 ["sgk-g11-b9","sgk/lop-11/chuong-iii/bai-9/","sgk-lesson"],
 ["sgk-g11-b8","sgk/lop-11/chuong-iii/bai-8/","sgk-lesson"],
 ["sgk-g10-b1","sgk/chuong-i/bai-1/","sgk-lesson"],
 ["topic-overview","chuyen-de/","topic-summary"],
 ["topic-lesson","chuyen-de/ham-so/kien-thuc/","topic-lesson"]
];
const inspect=page=>page.evaluate(()=>{
 const p=document.querySelector(".md-sidebar--primary nav.md-nav--primary");
 if(!p)return {error:"missing primary nav"};
 const groups=[...p.querySelectorAll("li.md-nav__item--nested")];
 const top=[...(p.querySelector(":scope > ul.md-nav__list")?.children||[])].filter(li=>li.matches("li.md-nav__item--nested"));
 const label=li=>li?.querySelector(":scope > label.md-nav__link .md-ellipsis")?.textContent?.trim()||"";
 const sgk=top.find(li=>label(li)==="Học theo SGK KNTT");
 const topic=top.find(li=>label(li)==="Học theo chuyên đề");
 const state=li=>{
  if(!li)return null;
  const nav=li.querySelector(":scope > nav.md-nav"),btn=li.querySelector(":scope > button.thpt-r4-sidebar-toggle");
  return {title:label(li),open:Boolean(nav&&!nav.hidden),aria:btn?.getAttribute("aria-expanded")??null,native:li.querySelector(":scope > input.md-nav__toggle")?.checked??null,
   active:li.classList.contains("md-nav__item--active"),
   level:nav?.dataset.mdLevel??null,button:Boolean(btn)};
 };
 const within=root=>groups.filter(li=>root?.contains(li));
 return {sgk:state(sgk),topic:state(topic),
  sgkGrades:within(sgk).filter(li=>li.querySelector(":scope > nav.md-nav")?.dataset.mdLevel==="2").map(state),
  sgkChapters:within(sgk).filter(li=>li.querySelector(":scope > nav.md-nav")?.dataset.mdLevel==="3").map(state),
  topicChildren:within(topic).filter(li=>li!==topic).map(state),
  activeNested:groups.filter(li=>li.classList.contains("md-nav__item--active")).map(state),
  buttons:p.querySelectorAll("button.thpt-r4-sidebar-toggle").length
 };
});
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [1440,1920]){
   const page=await browser.newPage({viewport:{width,height:900}});
   try{
    for(const [name,pathname,kind] of cases){
     const res=await page.goto(root+pathname,{waitUntil:"networkidle"});
     assert(res?.ok(),name+" HTTP");
     const s=await inspect(page);
     assert(!s.error,name+" "+s.error);
     if(kind.startsWith("sgk")){
      assert.equal(s.sgk?.open,true,name+" SGK root open");
      assert.equal(s.topic?.open,false,name+" Topic root closed");
     }else{
      assert.equal(s.topic?.open,true,name+" Topic root open");
      assert.equal(s.sgk?.open,false,name+" SGK root closed");
     }
     if(kind==="sgk-summary"){
      assert(s.sgkGrades.length>=2,name+" >=2 available grades");
      assert(s.sgkGrades.every(x=>x.open&&x.native&&x.aria==="true"),name+" all available grade groups opened");
      assert(s.sgkChapters.length>=12,name+" chapter list exists");
      assert(s.sgkChapters.every(x=>!x.open&&!x.native),name+" every chapter stays collapsed");
     }
     if(kind==="sgk-lesson"){
      assert.equal(s.sgkGrades.filter(x=>x.open).length,1,name+" exactly one grade open");
      assert.equal(s.sgkChapters.filter(x=>x.open).length,1,name+" exactly current chapter open");
      assert(s.sgkChapters.filter(x=>x.open).every(x=>x.active&&x.aria==="true"&&x.native),name+" only active chapter selected");
      assert(s.activeNested.filter(x=>!x.open).length===0,name+" all active ancestors expanded");
     }
     if(kind==="topic-summary")assert(s.topicChildren.every(x=>!x.open),name+" topic titles only");
     if(kind==="topic-lesson")assert(s.topicChildren.filter(x=>x.open).length===1&&s.topicChildren.filter(x=>x.open).every(x=>x.active),name+" exactly current topic open");
     if(name==="sgk-g11-b9"){
      const chapter=page.locator('.md-sidebar--primary li.md-nav__item--active > nav.md-nav[data-md-level="3"]').first().locator('xpath=..');
      const button=chapter.locator(":scope > button.thpt-r4-sidebar-toggle");
      await button.click();
      assert.equal(await button.getAttribute("aria-expanded"),"false",name+" manual collapse works");
      await button.click();
      assert.equal(await button.getAttribute("aria-expanded"),"true",name+" manual reopen works");
     }
    }
   }finally{await page.close();}
  }
  for(const width of [390,820]){
   const page=await browser.newPage({viewport:{width,height:844}});
   try{
    const res=await page.goto(root+"sgk/lop-11/chuong-iii/bai-9/",{waitUntil:"networkidle"});
    assert(res?.ok(),"compact learner route "+width);
    const s=await inspect(page);
    assert.equal(s.buttons,0,"Keep Material mobile/tablet native drawer, no desktop accordion controls "+width);
   }finally{await page.close();}
  }
  console.log("PASS THPT sidebar context desktop 1440/1920 SGK + Topic overview/lesson, current chapter, manual toggle; compact 390/820 native drawer preserved");
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});