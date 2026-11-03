"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   const open=async path=>{
    const resp=await page.goto(base+path,{waitUntil:"networkidle"});
    assert(resp?.ok(),"THPT route failed "+path);
    await page.locator("[data-thpt-filter-input]").waitFor();
   };
   const query=async(str,expected)=>{
    await page.locator("[data-thpt-filter-input]").fill(str);
    const visible=page.locator("[data-thpt-filter-item]:visible");
    assert.equal(await visible.count(),expected,
      "Unexpected matching count for "+JSON.stringify(str)+" at "+viewport.width);
    return visible;
   };
   await open("sgk/");
   const field=page.locator("[data-thpt-filter-input]");
   assert.equal(await field.count(),1,"SGK search must be unique");
   assert((await field.getAttribute("placeholder")).includes("bài 1"),
    "Placeholder must provide an actually supported lesson query");
   assert.equal(await page.locator("[data-thpt-search-only]:visible").count(),0,
    "Direct lesson results must not clutter default chapter index");
   const gradePanels=page.locator("details.library-cluster[data-thpt-filter-group]");
   assert.equal(await gradePanels.count(),3,"All three SGK grade panels must exist");
   for(const grade of ["10","11","12"]){
    const panel=page.locator('details.library-cluster[data-thpt-grade="'+grade+'"]');
    assert.equal(await panel.getAttribute("open"),"","Grade "+grade+" must be expanded by default");
    assert(await panel.locator("summary").isVisible(),"Grade "+grade+" heading must be visible");
   }
   const grade10Text=await page.locator('[data-thpt-grade="10"] summary').innerText();
   assert(!/khung đối chiếu|phạm vi được duyệt|Core\/Luyện tập|B01–B02/.test(grade10Text),
     "Grade 10 summary must not expose old release-process notes");
   await query("lớp 10",9); // 8 available chapter cards + one clearly marked unpublished ChV
   let result=await query("chương I",2); // published G10 and G11 chapter I
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/"));
   result=await query("chương II",2); // G10 and G11 ChII
   assert((await result.first().getAttribute("href")).endsWith("chuong-ii/"));
   result=await query("lớp 10, chương I",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/"));
   result=await query("bài 1",2); // grade is required to disambiguate B01
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/bai-1/"));
   result=await query("lớp 10, chương I, bài 2",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-i/bai-2/"));
   result=await query("bài 7",2); // G10 and G11 B07
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-7/"));
   result=await query("tọa độ",2);
   const paths=await result.evaluateAll(nodes=>nodes.map(node=>node.getAttribute("href")));
   assert(paths.some(path=>path.endsWith("chuong-vii/")),"Coordinate chapter remains discoverable");
   assert(paths.some(path=>path.endsWith("chuong-iv/bai-10/")),"New coordinate lesson must be discoverable");
   await query("toa do",2);
   result=await query("chương IV, bài 9",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-9/"));
   result=await query("bài 10",2); // Both G10 and newly released G11 B10
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-10/"));
   result=await query("bài 11",2); // Both G10 and newly released G11 B11
   assert((await result.first().getAttribute("href")).endsWith("chuong-iv/bai-11/"));
   result=await query("bài 12",2); // Both G10 and newly released G11 B12
   assert((await result.first().getAttribute("href")).endsWith("chuong-v/bai-12/"));
   result=await query("chương V, bài 12",1);
   assert((await result.first().getAttribute("href")).endsWith("chuong-v/bai-12/"),"Released B12 should be found");
   result=await query("bài 13",2); // Both G10 and newly released G11 B13
   assert((await result.first().getAttribute("href")).endsWith("chuong-v/bai-13/"));
   result=await query("bài 14",2); // Both G10 and newly released G11 B14
   assert((await result.first().getAttribute("href")).endsWith("chuong-v/bai-14/"));
   result=await query("lớp 11",9); // G11 ChI–ChVIII, current release candidate
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-i/"));
   result=await query("lớp 11, chương I, bài 1",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-i/bai-1/"));
   result=await query("lớp 11, bài 2",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-i/bai-2/"));
   result=await query("lớp 11, bài 3",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-i/bai-3/"),"Released G11 B03 should resolve correctly");
   result=await query("lớp 11, bài 4",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-i/bai-4/"),"Released G11 B04 should resolve correctly");
   result=await query("lớp 11, chương II",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-ii/"),"G11 ChII chapter search");
   for(const lesson of [5,6,7]){
    result=await query("lớp 11, bài "+lesson,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-ii/bai-"+lesson+"/"),"G11 ChII B0"+lesson+" search");
   }
   result=await query("lớp 11, chương III",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-iii/"),"G11 ChIII chapter search");
   for(const lesson of [8,9]){
    result=await query("lớp 11, bài "+lesson,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-iii/bai-"+lesson+"/"),"G11 B0"+lesson+" search");
   }
   result=await query("lớp 11, chương IV",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-iv/"),"G11 ChIV chapter search");
   for(const lesson of [10,11,12,13,14]){
    result=await query("lớp 11, bài "+lesson,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-iv/bai-"+lesson+"/"),"G11 B"+lesson+" direct search");
   }
   result=await query("lớp 11, chương V",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-v/"),"G11 ChV chapter search");
   for(const n of [15,16,17]){
    result=await query("lớp 11, bài "+n,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-v/bai-"+n+"/"),"G11 B"+n+" search");
   }
   result=await query("lớp 11, chương VI",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-vi/"),"G11 ChVI chapter search");
   for(const n of [18,19,20,21]){
    result=await query("lớp 11, bài "+n,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-vi/bai-"+n+"/"),"G11 ChVI B"+n+" direct search");
   }
   result=await query("lớp 11, chương VII",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-vii/"),"G11 ChVII chapter search");
   for(const n of [22,23,24,25,26,27]){
    result=await query("lớp 11, bài "+n,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-vii/bai-"+n+"/"),"G11 ChVII B"+n+" direct search");
   }
   result=await query("lớp 11, chương VIII",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-viii/"),"G11 ChVIII chapter search");
   for(const n of [28,29,30]){
    result=await query("lớp 11, bài "+n,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-viii/bai-"+n+"/"),"G11 ChVIII B"+n+" direct search");
   }
   await query("lớp 12, bài 1",0);
   await query("xyz-khong-co",0);
   await field.fill("");
   assert.equal(await page.locator("[data-thpt-search-only]:visible").count(),0);
   await open("chuyen-de/");
   const topic=await query("chuyên đề 1",1);
   assert((await topic.first().getAttribute("href")).endsWith("ham-so/kien-thuc/"));
   await query("chuyen de 01",1);
   await query("hàm số",1);
   await query("ham so",1);
   await query("đại số",1);
   await query("chuyên đề 2",0);
   await query("đạo hàm",0); // Not published: placeholder must not imply otherwise
   assert.equal(await page.locator("[data-thpt-filter-input]").count(),1);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
   assert(overflow<=20,"Search UI overflow at "+viewport.width);
   await page.close();
  }
     result=await query("lớp 11, chương IX",1);
   assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-ix/"),"G11 ChIX chapter search");
   for(const n of [31,32,33]){
    result=await query("lớp 11, bài "+n,1);
    assert((await result.first().getAttribute("href")).endsWith("lop-11/chuong-ix/bai-"+n+"/"),"G11 B"+n+" search");
   }
  const thcs=await browser.newPage({viewport:{width:390,height:844}});
  await thcs.goto("http://127.0.0.1:8765/kien-thuc/",{waitUntil:"networkidle"});
  assert.equal(await thcs.locator(".library-search").count(),1,
   "THCS Golden search must remain unchanged");
  assert.equal(await thcs.locator("[data-thpt-filter-input]").count(),0,
   "THPT search must not leak into THCS");
  await thcs.close();
  console.log("PASS G10/G11 SGK class/chapter/lesson + Topic search desktop/iPad/phone, published-only links and THCS isolation");
 }finally{await browser.close()}
})().catch(error=>{console.error("FAIL THPT search browser",error);process.exit(1)});
