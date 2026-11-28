"use strict";
// Exact owner #1132 delta; historical #1039 source receipts remain immutable.
// No claim of new Academic/PED approval; only current public successor source and technical QA.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,".."),manifestPath="prototypes/thpt/ux795/G12_REMAINING_1132_DELTA_20261128.json";
const routes=["docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/thpt-preview/sgk/lop-12/chuong-iii.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/luyen-tap.md","docs/thpt-preview/sgk/lop-12/chuong-iv.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-12/chuong-iv/luyen-tap.md","docs/thpt-preview/sgk/lop-12/chuong-v.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md","docs/thpt-preview/sgk/lop-12/chuong-vi.md","docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-12/chuong-vi/luyen-tap.md"];
const files=[...routes,...["prototypes/thpt/ux795/G12_REMAINING_1132_DELTA_20261128.json","scripts/thpt-1132-g12-knowledge-delta.cjs","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/test-sgk-golden-first-paint.cjs"]];
const reason="OWNER_1132_G12_KNOWLEDGE_BATCH";
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
const matches=a=>same(a,files),matchesRoutes=a=>same(a,routes);
const blob=b=>{b=Buffer.from(b);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const lesson=p=>/\/bai-\d+\.md$/.test(p);
function manifest(){const s=read(manifestPath);assert.equal(blob(s),"88caaaec3bc0370a7680de772a901bab2aad98bd","exact owner delta manifest");return JSON.parse(s);}
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
const attrs=s=>[...s.matchAll(/\b(?:data-[\w-]+|id|href|src|class|role|aria-label)="[^"]*"/g)].map(z=>z[0]).sort();
function verify(base){
 const m=manifest();assert.equal(base,m.base,"exact prior approved main");assert(same(m.items.map(x=>x.path),routes));
 assert.equal(m.items.reduce((a,x)=>a+x.edits.length,0),83);
 for(const x of m.items){
  const old=cp.execFileSync("git",["show",base+":"+x.path],{cwd:root,encoding:"utf8"});
  assert.equal(blob(old),x.old,"old source "+x.path);let s=old;
  for(const e of x.edits){assert(e.before.length>0&&s.split(e.before).length===e.count+1,"unique ordered edit "+x.path);s=s.replace(e.before,()=>e.after);}
  assert.equal(s,read(x.path),"exact successor "+x.path);
  assert.deepEqual(attrs(s),attrs(old),"preserve runtime/navigation/media attributes "+x.path);
  if(lesson(x.path)){
   const labels=t=>[...t.matchAll(/^    \?\?\? question "[^"]+"$/gm)].map(z=>z[0]);
   assert.deepEqual(labels(s),labels(old),"disclosure labels "+x.path);
   assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(z=>z[1]),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]);
   assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g12-chapter-selfcheck)/i.test(s));
   const recovery=t=>t.split('=== "Lỗi thường gặp"')[1].split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length;
   assert.equal(recovery(s),recovery(old),"same recovery sections");
  }
  console.log("PASS CP15 source/Q15/Q16 "+x.path+" "+blob(s));
 }
 console.log("PASS CP15 83 exact edits; 26 public pages");
}
async function browserQA(browser,base,engine,widths){
 manifest();const queue=routes.flatMap(rel=>widths.map(width=>({rel,width})));let done=0;const failures=[];
 async function worker(){
  while(queue.length){
   const {rel,width}=queue.shift(),source=read(rel);let failed=false;
   const page=await browser.newPage({viewport:{width,height:width===390?844:900}});page.setDefaultTimeout(30000);
   try{
    assert((await page.goto(base+"/"+rel.slice(5,-3)+"/",{waitUntil:"load",timeout:60000}))?.ok(),rel);
    await page.waitForFunction(()=>Boolean(window.MathJax?.startup?.promise));
    await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
    await page.waitForFunction(()=>[...document.querySelectorAll("article .arithmatex")].every(el=>el.querySelector("mjx-container")));
    assert.equal(await page.locator("article mjx-merror").count(),0,rel+" math error");
    assert.equal(await page.locator("article details.question[open]").count(),0,rel+" pre-action answer");
    assert.equal(await page.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,rel+" assessment isolation");
    if(lesson(rel)){
     const tabs=page.locator(".md-content .tabbed-set").first(),panels=tabs.locator(".tabbed-content > .tabbed-block"),labels=tabs.locator(".tabbed-labels > label");
     assert.deepEqual((await labels.allInnerTexts()).map(s=>s.trim()),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],rel);
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id"])assert.deepEqual(await page.locator("["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)).sort(),key),ids(source,key),rel+" "+key);
     for(let i=0;i<4;i++){
      await labels.nth(i).click();assert(await panels.nth(i).isVisible(),rel+" tab "+i);
      if(rel.endsWith("/chuong-vi/bai-18.md")&&i===2){
       const tbl=panels.nth(i).locator('[aria-label="Lời giải ví dụ 3.3"] table');
       assert.equal(await tbl.count(),1,rel+" probability table");
       assert.deepEqual(await tbl.locator("tbody tr").evaluateAll(rows=>rows.map(row=>[...row.querySelectorAll("td")].map(cell=>cell.textContent.trim()))),[["12","8","20"],["20","40","60"],["32","48","80"]],rel+" exact probability table values");
      }
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
      if(overflow>20){
       const detail=await page.evaluate(()=>{
        const viewport=innerWidth;
        const nodes=[...document.querySelectorAll("article, article *")].map(el=>({el,r:el.getBoundingClientRect()})).filter(({el,r})=>r.width>0&&r.height>0&&r.right>viewport+20&&getComputedStyle(el).visibility!=="hidden").sort((a,b)=>b.r.right-a.r.right).slice(0,16);
        return {viewport,documentWidth:document.documentElement.scrollWidth,offenders:nodes.map(({el,r})=>({tag:el.tagName,cls:el.getAttribute("class"),left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),parent:el.parentElement?.tagName,parentClass:el.parentElement?.getAttribute("class"),text:(el.textContent||"").trim().slice(0,180)}))};
       });
       console.error("CP15_OVERFLOW_DIAGNOSTIC",JSON.stringify({rel,width,tab:i,overflow,...detail}));
      }
      if(overflow>20){failed=true;failures.push(rel+" page overflow "+width+" tab "+i+" ("+overflow+"px)");}
     }
    }else{
     const lead=source.match(/<p class="thpt-r4-lead">([^<]*)<\/p>/)[1];
     assert.equal((await page.locator("article .thpt-r4-lead").first().innerText()).trim(),lead,rel+" guidance");
     for(const key of ["data-thpt-open-quiz"])assert.deepEqual(await page.locator("article ["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)).sort(),key),ids(source,key),rel+" unchanged quiz identity");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(overflow>20){failed=true;failures.push(rel+" page overflow "+width+" ("+overflow+"px)");}
     
    }
    console.log((failed?"FAIL":"PASS")+" CP15 "+engine+" "+width+" "+rel);done++;
   }finally{await page.close();}
  }
 }
 await Promise.all(Array.from({length:3},worker));assert.equal(done,routes.length*widths.length);assert.equal(failures.length,0,failures.join("\n"));
 console.log("PASS CP15 targeted browser "+done+"/"+done);
}
module.exports={files,routes,reason,matches,matchesRoutes,verify,browserQA};
