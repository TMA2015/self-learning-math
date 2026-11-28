"use strict";
// Exact owner #1132 delta; historical #1039 source receipts remain immutable.
// No claim of new Academic/PED approval; only current public successor source and technical QA.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,".."),manifestPath="prototypes/thpt/ux795/G11_REMAINING_1132_DELTA_20261128.json";
const routes=["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-11/chuong-iii.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-11/chuong-iii/luyen-tap.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md","docs/thpt-preview/sgk/lop-11/chuong-ix.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md","docs/thpt-preview/sgk/lop-11/chuong-ix/luyen-tap.md","docs/thpt-preview/sgk/lop-11/chuong-v.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md","docs/thpt-preview/sgk/lop-11/chuong-v/luyen-tap.md","docs/thpt-preview/sgk/lop-11/chuong-vi.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md","docs/thpt-preview/sgk/lop-11/chuong-vi/luyen-tap.md","docs/thpt-preview/sgk/lop-11/chuong-vii.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md","docs/thpt-preview/sgk/lop-11/chuong-vii/luyen-tap.md","docs/thpt-preview/sgk/lop-11/chuong-viii.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md","docs/thpt-preview/sgk/lop-11/chuong-viii/luyen-tap.md"];
const files=[...routes,...["prototypes/thpt/ux795/G11_REMAINING_1132_DELTA_20261128.json","scripts/thpt-1132-g11-knowledge-delta.cjs","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/test-sgk-golden-first-paint.cjs"]];
const reason="OWNER_1132_G11_KNOWLEDGE_BATCH";
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
const matches=a=>same(a,files),matchesRoutes=a=>same(a,routes);
const blob=b=>{b=Buffer.from(b);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const lesson=p=>/\/bai-\d+\.md$/.test(p);
function manifest(){const s=read(manifestPath);assert.equal(blob(s),"2c931aca8af4d81e3bdde595e4d3729ee6f2416e","exact owner delta manifest");return JSON.parse(s);}
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
const attrs=s=>[...s.matchAll(/\b(?:data-[\w-]+|id|href|src|class|role|aria-label)="[^"]*"/g)].map(z=>z[0]).sort();
function verify(base){
 const m=manifest();assert.equal(base,m.base,"CP13 approved main");assert(same(m.items.map(x=>x.path),routes));
 assert.equal(m.items.reduce((a,x)=>a+x.edits.length,0),104);
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
   assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(s));
   const recovery=t=>t.split('=== "Lỗi thường gặp"')[1].split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length;
   assert.equal(recovery(s),recovery(old),"same recovery sections");
  }
  console.log("PASS CP14 source/Q15/Q16 "+x.path+" "+blob(s));
 }
 console.log("PASS CP14 104 exact edits; 44 public pages");
}
async function browserQA(browser,base,engine,widths){
 manifest();const queue=routes.flatMap(rel=>widths.map(width=>({rel,width})));let done=0;
 async function worker(){
  while(queue.length){
   const {rel,width}=queue.shift(),source=read(rel);
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
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
      if(overflow>20){
       const detail=await page.evaluate(()=>{
        const viewport=innerWidth;
        const nodes=[...document.querySelectorAll("article, article *")].map(el=>({el,r:el.getBoundingClientRect()})).filter(({el,r})=>r.width>0&&r.height>0&&r.right>viewport+20&&getComputedStyle(el).visibility!=="hidden").sort((a,b)=>b.r.right-a.r.right).slice(0,16);
        return {viewport,documentWidth:document.documentElement.scrollWidth,offenders:nodes.map(({el,r})=>({tag:el.tagName,cls:el.getAttribute("class"),left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),parent:el.parentElement?.tagName,parentClass:el.parentElement?.getAttribute("class"),text:(el.textContent||"").trim().slice(0,180)}))};
       });
       console.error("CP14_OVERFLOW_DIAGNOSTIC",JSON.stringify({rel,width,tab:i,overflow,...detail}));
      }
      assert(overflow<=20,rel+" page overflow "+width+" tab "+i);
     }
    }else{
     const lead=source.match(/<p class="thpt-r4-lead">([^<]*)<\/p>/)[1];
     assert.equal((await page.locator("article .thpt-r4-lead").first().innerText()).trim(),lead,rel+" guidance");
     for(const key of ["data-thpt-open-quiz"])assert.deepEqual(await page.locator("article ["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)).sort(),key),ids(source,key),rel+" unchanged quiz identity");
     assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,rel+" page overflow "+width);
     if(rel.endsWith("/chuong-ix.md"))assert.equal(await page.locator("article ol").first().locator("li").count(),5,rel+" five separate learning steps");
    }
    console.log("PASS CP14 "+engine+" "+width+" "+rel);done++;
   }finally{await page.close();}
  }
 }
 await Promise.all(Array.from({length:3},worker));assert.equal(done,routes.length*widths.length);
 console.log("PASS CP14 targeted browser "+done+"/"+done);
}
module.exports={files,routes,reason,matches,matchesRoutes,verify,browserQA};
