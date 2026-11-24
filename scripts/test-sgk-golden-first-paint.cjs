#!/usr/bin/env node
"use strict";
/* UI-only: no academic/P2 verdict, no learner mutation. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path");
const {chromium,webkit}=require("playwright");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const chapters=[["i",1,2],["ii",3,4],["iii",5,6],["iv",7,11],["v",12,14],
 ["vi",15,18],["vii",19,22],["viii",23,25],["ix",26,27]];
const rows=chapters.flatMap(([c,a,b])=>Array.from({length:b-a+1},(_,i)=>({
 n:a+i,grade:10,rel:"thpt-preview/sgk/chuong-"+c+"/bai-"+(a+i)
})));
for(const n of [1,2,3,4])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-i/bai-"+n});
for(const n of [5,6,7,8,9])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-"+(n<=7?"ii":"iii")+"/bai-"+n});
for(const n of [10,11,12,13,14])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-iv/bai-"+n});
for(const n of [15,16,17])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-v/bai-"+n});
for(const n of [18,19,20,21])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-vi/bai-"+n});
for(const n of [22,23,24,25,26,27])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-vii/bai-"+n});
for(const n of [28,29,30,31,32,33])rows.push({n,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-"+(n<=30?"viii":"ix")+"/bai-"+n});
for(const n of [1,2,3,4,5])rows.push({n,grade:12,rel:"thpt-preview/sgk/lop-12/chuong-i/bai-"+n});
for(const n of [6,7,8])rows.push({n,grade:12,rel:"thpt-preview/sgk/lop-12/chuong-ii/bai-"+n});
for(const n of [9,10])rows.push({n,grade:12,rel:"thpt-preview/sgk/lop-12/chuong-iii/bai-"+n});
for(const n of [11,12,13])rows.push({n,grade:12,rel:"thpt-preview/sgk/lop-12/chuong-iv/bai-"+n});
for(const n of [14,15,16,17])rows.push({n,grade:12,rel:"thpt-preview/sgk/lop-12/chuong-v/bai-"+n});
const mode=process.env.SGK_FIRST_PAINT_MODE||"FULL";
assert(["FULL","G11_W1","G11_W2","G11_W3","G11_W4","G11_W5","G11_W6","G11_W7","G12_W8","G12_W9","G12_W10","G12_W11","G12_W12"].includes(mode),"Unknown First Paint QA mode");
const scoped=mode!=="FULL",w2=mode==="G11_W2",w3=mode==="G11_W3",w4=mode==="G11_W4",w5=mode==="G11_W5",w6=mode==="G11_W6",w7=mode==="G11_W7",w8=mode==="G12_W8",w9=mode==="G12_W9",w10=mode==="G12_W10",w11=mode==="G12_W11",w12=mode==="G12_W12";
const selected=w12?rows.filter(x=>x.grade===10&&x.n===10||x.grade===12&&x.n>=13&&x.n<=17):w11?rows.filter(x=>x.grade===10&&x.n===10||x.grade===12&&x.n>=10&&x.n<=13):w10?rows.filter(x=>x.grade===10&&x.n===10||x.grade===12&&x.n>=8&&x.n<=10):w9?rows.filter(x=>x.grade===10&&x.n===10||x.grade===12&&x.n>=5&&x.n<=8):scoped?rows.filter(x=>x.grade===10&&x.n===10||w8&&x.grade===12&&x.n<=5||x.grade===11&&(w8?x.n===33:w7?x.n>=27:w6?x.n>=21&&x.n<=27:w5?x.n>=17&&x.n<=21:w4?x.n>=14&&x.n<=17:w3?x.n>=9&&x.n<=14:w2?x.n>=4&&x.n<=9:x.n<=4)):rows;
const smoke=row=>row.grade===10||w12&&row.grade===12&&row.n===13||w11&&row.grade===12&&row.n===10||w10&&row.grade===12&&row.n===8||w9&&row.grade===12&&row.n===5||row.grade===11&&row.n===(w8?33:w7?27:w6?21:w5?17:w4?14:w3?9:w2?4:1);
const chapterFor=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
const headings=["1. Khám phá kiến thức","2. Kiến thức SGK",
 "3. Ví dụ","4. Lỗi thường gặp và cách tự khắc phục"];
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const attr=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(m=>m[1]);
const matchH2=/<h2 class="thpt-g10-section-heading">([^<]+)<\/h2>/g;
for(const row of selected){
 const html=read("site-thpt-preview/"+row.rel+"/index.html");
 const source=read("docs/"+row.rel+".md");
 const article=html.match(/<article\b[^>]*>/g)||[];
 assert.equal(article.length,1,row.rel+" duplicate article");
 assert(article[0].includes('data-sgk-golden-first-paint="true"')&&
  article[0].includes("thpt-g10-knowledge-ap1")&&
  article[0].includes(row.grade===10&&row.n<=6?"thpt-g10-first-six-golden":"thpt-g10-chiv-golden"),
  row.rel+" missing pre-rendered Golden classes");
 assert.deepEqual([...html.matchAll(matchH2)].map(m=>m[1]),headings,
  row.rel+" static Golden tab headings missing or duplicated");
 assert.equal((html.match(/class="tabbed-block"/g)||[]).length,4,row.rel+" tab panels");
 const active=[...html.matchAll(/<label\b[^>]*class="slm-g10-active-tab"[^>]*>(.*?)<\/label>/g)];
 assert.equal(active.length,1,row.rel+" initial active tab count");
 assert.equal(active[0][1],labels[0],row.rel+" initial selected tab");

 const initialNav=[...html.matchAll(/<nav class="thpt-r4-lesson-tabs thpt-sgk-lesson-nav" data-sgk-lesson-nav="([^"]+)"/g)];
 assert.equal(initialNav.length,1,row.rel+" exactly one initial SGK navigation");
 assert.equal(initialNav[0][1],row.grade+"-B"+row.n,row.rel+" navigation owner route");
 assert.equal(attr(html,"data-sgk-lesson-link").length,(row.n===1||row.n===(row.grade===10?27:33)?3:4),
  row.rel+" exactly four navigation choices, with disabled edge slots");
 // G10's existing runtime removes only these decorative hero leads after load;
 // they must not flash and then disappear on the first browser paint.
 if(row.grade===10&&(row.n<=22||row.n>=24))
  assert(!html.includes('<p class="thpt-r4-lead">'),row.rel+" decorative lead still flashes");

 for(const k of ["data-thpt-first-try-id","data-thpt-help-id"])
  assert.deepEqual(attr(html,k),attr(source,k),row.rel+" Q15 source-to-DOM "+k);
}
for(const rel of ["thpt-preview/sgk/lop-12/chuong-vi/bai-18"])
 assert(!read("site-thpt-preview/"+rel+"/index.html").includes('data-sgk-golden-first-paint="true"'),
  rel+" excluded route modified");
assert.equal(selected.length,scoped?(w12?6:w11?5:w10?4:w9?5:w8?7:w7?8:w6?8:w5?6:w4?5:w2||w3?7:5):77);
console.log("PASS STATIC_FIRST_PAINT: "+selected.length+" exact routes; four headings, IDs, excluded G12 B18");

(async()=>{
 for(const [engine,driver] of (scoped?[["Chromium",chromium]]:[["Chromium",chromium],["WebKit",webkit]])){
 const browser=await driver.launch(engine==="Chromium"?{headless:true,args:["--no-sandbox"]}:{headless:true});
 const reps=scoped?selected:rows.filter(x=>x.grade===11||x.grade===12||[1,7,16,23,27].includes(x.n));
 const base=(process.env.SGK_FIRST_PAINT_BASE_URL||"http://127.0.0.1:8765").replace(/\/$/,"");
 let checks=0;
 const unloadedGeometry=new Map();
 let maxGeometryDelta=0;
 try{
  for(const width of [390,820,1440]){
   for(const row of reps){
    // W1 affected lessons use every viewport; unchanged B01/B10 only one smoke.
    if(scoped&&smoke(row)&&width!==820)continue;
    for(const js of [false,true]){
     const context=await browser.newContext({javaScriptEnabled:js,
      viewport:{width,height:width===390?844:900}});
     try{
      const page=await context.newPage();
      const response=await page.goto(base+"/"+row.rel+"/",{waitUntil:"domcontentloaded",timeout:60000});
      assert(response?.ok(),row.rel+" page missing");
      // A DOMContentLoaded response is not proof that late stylesheets have loaded.
      await page.waitForLoadState("load",{timeout:30000});
      const v=await page.evaluate(()=>{
       const a=document.querySelector("article.md-content__inner");
       const labels=[...a.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
       const h2=[...a.querySelectorAll(".tabbed-block > h2.thpt-g10-section-heading")];
       const ls=getComputedStyle(labels[0]);
       const hs=getComputedStyle(h2[0]);
       return {marker:a.dataset.sgkGoldenFirstPaint,
        active:labels.filter(x=>x.classList.contains("slm-g10-active-tab")).length,
        labels:labels.map(x=>x.textContent.trim()),headings:h2.map(x=>x.textContent.trim()),
        pad:parseFloat(ls.paddingLeft),radius:parseFloat(ls.borderTopLeftRadius),
        headingBorder:parseFloat(hs.borderLeftWidth),
        rootClasses:a.className,hasDirectTabs:Boolean(a.querySelector(":scope > .tabbed-set")),
        hybridStyleLinks:[...document.querySelectorAll("link[rel=stylesheet]")].filter(x=>x.href.includes("thpt-g10-knowledge-hybrid-l1-v1.css")).map(x=>x.href),
        styleSheets:document.styleSheets.length,
        navCount:a.querySelectorAll(".thpt-r4-screen > nav[data-sgk-lesson-nav]").length,
        navId:a.querySelector(".thpt-r4-screen > nav[data-sgk-lesson-nav]")?.dataset.sgkLessonNav,
        navChoices:a.querySelectorAll(".thpt-r4-screen nav.thpt-sgk-lesson-nav > a, .thpt-r4-screen nav.thpt-sgk-lesson-nav > span").length,
        leadCount:a.querySelectorAll(".thpt-r4-screen .thpt-r4-lead").length,
        geometry:Object.fromEntries([
         ["heroBottom",a.querySelector(".thpt-r4-screen")?.getBoundingClientRect().bottom],
         ["navTop",a.querySelector(".thpt-r4-screen > nav[data-sgk-lesson-nav]")?.getBoundingClientRect().top],
         ["navBottom",a.querySelector(".thpt-r4-screen > nav[data-sgk-lesson-nav]")?.getBoundingClientRect().bottom],
         ["tabsTop",a.querySelector(".tabbed-set > .tabbed-labels")?.getBoundingClientRect().top],
         ["tabsHeight",a.querySelector(".tabbed-set > .tabbed-labels")?.getBoundingClientRect().height],
         ["firstHeadingTop",h2[0]?.getBoundingClientRect().top]
        ])};
      });
      const k=engine+" "+row.rel+" "+width+" "+(js?"JS":"NO_JS");
      assert.equal(v.marker,"true",k+" marker");
      assert.deepEqual(v.labels,labels,k+" labels");
      assert.deepEqual(v.headings,headings,k+" missing/duplicate headings");
      assert.equal(v.active,1,k+" active label");
      assert.equal(v.navCount,1,k+" prebuilt navigation count");
      assert.equal(v.navId,row.grade+"-B"+row.n,k+" navigation route");
      assert.equal(v.navChoices,4,k+" exact four nav destinations, including disabled edge");
      if(row.grade===10&&(row.n<=22||row.n>=24))assert.equal(v.leadCount,0,k+" hero lead must not appear and then disappear");
      if(!(v.pad>=8&&v.radius>=4&&v.headingBorder>=3))
       console.error("GOLDEN_STYLE_DIAGNOSTIC "+k+" "+JSON.stringify(v));
      assert(v.pad>=8&&v.radius>=4&&v.headingBorder>=3,
       k+" incorrect computed Golden CSS");
      // Compare finished styles with JS off vs on. The initial article
      // must not be geometrically moved by the runtime's late DOM patching.
      const key=row.rel+"@"+width;
      if(!js){
       unloadedGeometry.set(key,v.geometry);
      }else{
       const original=unloadedGeometry.get(key);
       assert(original,k+" missing no-JS comparison");
       for(const [part,before] of Object.entries(original)){
        const after=v.geometry[part];
        assert(Number.isFinite(before)&&Number.isFinite(after),
         k+" missing geometry anchor "+part);
        const shift=Math.abs(after-before);
        maxGeometryDelta=Math.max(maxGeometryDelta,shift);
        assert(shift<=4,
         k+" unexpected top-of-page visual shift "+part+
         " (no-JS "+before.toFixed(2)+"px; JS "+after.toFixed(2)+"px)");
       }
       const t=page.locator(".tabbed-set > .tabbed-labels > label");
       await t.nth(3).click();
       assert(await page.locator(".tabbed-set > input[type=radio]").nth(3).isChecked(),
        k+" tab interaction");
       if(scoped&&(row.grade===11&&row.n>=2||row.grade===12)){
        assert(await t.nth(3).evaluate(el=>el.classList.contains("slm-g10-active-tab")),k+" active tab synchronization");
        const nav=page.locator("article nav[data-sgk-lesson-nav]");
        const chapter="/thpt-preview/sgk/lop-"+row.grade+"/chuong-";
        const ch=n=>row.grade===12?(n<=5?"i":n<=8?"ii":n<=10?"iii":n<=13?"iv":n<=17?"v":"vi"):chapterFor(n);
        const expected={"previous":chapter+ch(row.n-1)+"/bai-"+(row.n-1)+"/","next":chapter+ch(row.n+1)+"/bai-"+(row.n+1)+"/","practice":chapter+ch(row.n)+"/luyen-tap/","selfcheck":chapter+ch(row.n)+"/tu-kiem-tra-chuong/"};
        if(row.grade===12&&row.n===1){delete expected.previous;assert.equal(await nav.locator("span[aria-disabled=true]").count(),1,k+" first lesson disabled previous");}
        if(row.grade===11&&row.n===33){delete expected.next;assert.equal(await nav.locator("span[aria-disabled=true]").count(),1,k+" final lesson disabled next");}
        for(const [kind,url] of Object.entries(expected))assert.equal(new URL(await nav.locator(`[data-sgk-lesson-link="${kind}"]`).evaluate(el=>el.href)).pathname,url,k+" nav "+kind);
       }
       assert.equal(await page.locator(".tabbed-block > h2.thpt-g10-section-heading").count(),4,
        k+" duplicate heading after JS");
      }
      checks++;
      console.log("PASS FIRST_PAINT "+k);
     }finally{await context.close()}
    }
   }
  }
 }finally{await browser.close()}
 assert.equal(checks,scoped?(w12?28:w11?22:w10?16:w9?22:w8?34:w7?40:w6?40:w5?28:w4?22:w2||w3?34:22):reps.length*3*2);
 console.log("PASS GOLDEN FIRST PAINT "+engine+": "+checks+
  " JS/no-JS modes/viewports; max top-of-page geometric delta "+
  maxGeometryDelta.toFixed(2)+"px");
 }
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
