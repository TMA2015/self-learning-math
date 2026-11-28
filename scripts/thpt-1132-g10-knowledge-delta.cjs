"use strict";
// Owner #1132: exact successor of CP12; source proof, not a new academic/PED verdict.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const manifestPath="prototypes/thpt/ux795/G10_REMAINING_1132_DELTA_20261128.json";
const pins={
 "docs/thpt-preview/sgk/chuong-vi/bai-15.md": "598dbee6c0988f608f541ca57944add63203b76d",
 "docs/thpt-preview/sgk/chuong-vi/bai-17.md": "2241b637a6c456579bb9ba76b25ded6f919a5505",
 "docs/thpt-preview/sgk/chuong-vii/bai-19.md": "8be86d20b996135f3df178db28e0a574be1da279",
 "docs/thpt-preview/sgk/chuong-vii/bai-20.md": "469056151e609073d4c17621646c1a300eae225d",
 "docs/thpt-preview/sgk/chuong-vii/bai-21.md": "d11ebf77c7efc85256de9f0ccebef41e1fb792b9",
 "docs/thpt-preview/sgk/chuong-vii/bai-22.md": "bc05764439f72355d589fc96369e240bcf6e4421",
 "docs/thpt-preview/sgk/chuong-viii/bai-23.md": "df4d0fe9c7b6d4db4becca2d3e3b6c5f6791a360",
 "docs/thpt-preview/sgk/chuong-viii/bai-24.md": "5e78cda9f4df66437760c1ee6f5d3160b7d3353d",
 "docs/thpt-preview/sgk/chuong-viii/bai-25.md": "4170a041648ae6e4a3c60a9e6e854fdc236ab466",
 "docs/thpt-preview/sgk/chuong-ix/bai-26.md": "fba126a450f417c6e93b204f86016c9f587e7f98",
 "docs/thpt-preview/sgk/chuong-ix/bai-27.md": "6606a6f57db55ab94cc1fdad169871d478735a37",
 "docs/thpt-preview/sgk/chuong-ii/bai-3.md": "59ec2a4150796ad40e66531a53672a97e266f464",
 "docs/thpt-preview/sgk/chuong-ii/bai-4.md": "7f4623dbb22acbbc24e55c46883716747e371d45",
 "docs/thpt-preview/sgk/chuong-iii/bai-6.md": "10cee42c1729d35cbbfcffcd7ba68d7f7e8ec735",
 "docs/thpt-preview/sgk/chuong-iv/bai-7.md": "c91679aaf1b47a0208605ad256e850c86976f025",
 "docs/thpt-preview/sgk/chuong-iv/bai-8.md": "e7f1f5ad083c550175124d89c6932855be2e5672",
 "docs/thpt-preview/sgk/chuong-iv/bai-9.md": "492aa9b84896907b38cf7fc7dc727365297298dc",
 "docs/thpt-preview/sgk/chuong-iv/bai-10.md": "cd3a7e43c0c5b1d45a42caabb93f4e6cb55cb857",
 "docs/thpt-preview/sgk/chuong-iv/bai-11.md": "e29f73faf14d78bea1c47dc01b853cc17fac29df",
 "docs/thpt-preview/sgk/chuong-v/bai-12.md": "73be11154c1dbd39562c656b0a6ee9edf0607f31",
 "docs/thpt-preview/sgk/chuong-v/bai-13.md": "507c4b8168d98de081add0daa311fcc5fdc8bb2f",
 "docs/thpt-preview/sgk/chuong-v/bai-14.md": "802d55e990d4314d484ae7f83bc3e38e24744113",
 "docs/thpt-preview/sgk/chuong-vi/bai-16.md": "4de1b62e3dc7369ce1c51683264125ba17ac12a1",
 "docs/thpt-preview/sgk/chuong-vi/bai-18.md": "b5f44ff7bd1bb90a3962e0447ded04d25fd6825e",
 "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md": "b686bce13305fe816f2f808433031666ba107975",
 "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md": "b1b1e711e1eafa73c546a1a782a696c5f678684e",
 "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md": "64e928366ef0bbce80d392a540cd3e4365c5771a",
 "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md": "bbd8493c299a419173026f6e6bd970ef6e6e2e64"
};
const companions=["prototypes/thpt/ux795/G10_REMAINING_1132_DELTA_20261128.json","scripts/thpt-1132-g10-knowledge-delta.cjs","scripts/thpt-q18-g10-source-receipt.cjs","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml"];
const routes=Object.keys(pins).filter(p=>p.startsWith("docs/")).sort();
const files=[...Object.keys(pins),...companions];
const reason="OWNER_1132_G10_KNOWLEDGE_BATCH";
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
const matches=a=>same(a,files);
const matchesRoutes=a=>same(a,routes);
const blob=b=>{b=Buffer.from(b);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
function manifest(){const s=read(manifestPath);assert.equal(blob(s),"201bd25f07694f0368b02329a67eb6ba405e05fe","locked owner delta manifest");return JSON.parse(s);}
function currentBlob(n){const p=routes.find(p=>p.endsWith("/bai-"+Number(n)+".md"));if(!p)return null;assert.equal(blob(read(p)),pins[p],"exact CP13 successor "+p);return pins[p];}
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
const links=x=>x.edits.flatMap(e=>[...e.after.matchAll(/\[([^\]]+)\]\(#([^)]+)\)/g)].map(z=>[z[1],z[2]]));
function verify(base){
 const m=manifest();assert.equal(m.items.length,28);assert(same(m.items.map(x=>x.path),Object.keys(pins)));
 const old={},now={};
 for(const x of m.items){
  let s=cp.execFileSync("git",["show",base+":"+x.path],{cwd:root,encoding:"utf8"});
  assert.equal(blob(s),x.old,"CP12 prior blob "+x.path);old[x.path]=s;
  for(const e of x.edits){assert(e.before.length>0&&s.split(e.before).length===e.count+1,"unique ordered edit "+x.path);s=s.replace(e.before,e.after);}
  now[x.path]=read(x.path);assert.equal(blob(s),pins[x.path],"expected successor "+x.path);assert.equal(s,now[x.path],"only exact edits "+x.path);
  if(!routes.includes(x.path))continue;
  for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-thpt-help-ref","data-thpt-fig-id","data-outcome-id"])assert.deepEqual(ids(s,key),ids(old[x.path],key),key+" "+x.path);
  const labels=t=>[...t.matchAll(/^    \?\?\? question "[^"]+"$/gm)].map(z=>z[0]);
  assert.deepEqual(labels(s),labels(old[x.path]),"preserve voluntary disclosure labels "+x.path);
  assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(z=>z[1]),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final)/i.test(s));
  for(const [,id] of links(x))assert.equal([...s.matchAll(/(?:^|\s)id="([^"]+)"/g)].filter(z=>z[1]===id).length,1,"exact link target "+id);
  console.log("PASS CP13 exact source/Q15/Q16 "+x.path);
 }
 for(const x of m.items.filter(x=>!routes.includes(x.path))){
  const n=Number(x.path.match(/_B(\d+)_CANONICAL/)[1]),p=routes.find(p=>p.endsWith("/bai-"+n+".md"));
  assert.equal(old[x.path].split(old[p]).length,2,"prior single canonical "+n);
  assert.equal(old[x.path].replace(old[p],now[p]),now[x.path],"exact Knowledge parity, other manuscript bytes unchanged "+n);
 }
 console.log("PASS CP13 24 lessons, 4 manuscripts, 61 exact edits");
}
async function browserQA(browser,base,engine,widths){
 const m=manifest();
 const queue=routes.flatMap(rel=>widths.map(width=>({rel,width})));
 let done=0;
 async function worker(){
  while(queue.length){
   const {rel,width}=queue.shift(),x=m.items.find(i=>i.path===rel),source=read(rel);
   const page=await browser.newPage({viewport:{width,height:width===390?844:900}});
   page.setDefaultTimeout(30000);
   try{
    assert((await page.goto(base+"/"+rel.slice(5,-3)+"/",{waitUntil:"load",timeout:60000}))?.ok(),rel);
    await page.waitForFunction(()=>Boolean(window.MathJax?.startup?.promise));
    await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
    await page.waitForFunction(()=>[...document.querySelectorAll("article .arithmatex")].every(el=>el.querySelector("mjx-container")));
    const tabs=page.locator(".md-content .tabbed-set").first(),panels=tabs.locator(".tabbed-content > .tabbed-block"),labels=tabs.locator(".tabbed-labels > label");
    assert.deepEqual((await labels.allInnerTexts()).map(s=>s.trim()),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],rel);
    assert.equal(await page.locator("article mjx-merror").count(),0,rel+" math error");
    assert.equal(await page.locator("article details.question[open]").count(),0,rel+" pre-action answer");
    assert.equal(await page.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,rel+" assessment isolation");
    for(const key of ["data-thpt-first-try-id","data-thpt-help-id"]){assert.deepEqual(await page.locator("["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)).sort(),key),ids(source,key),rel+" "+key);}
    for(let i=0;i<4;i++){await labels.nth(i).click();assert(await panels.nth(i).isVisible(),rel+" tab "+i);assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,rel+" page overflow "+width);}
    for(const [label,id] of links(x)){
     await labels.nth(3).click();
     await panels.nth(3).locator('a[href="#'+id+'"]').filter({hasText:label}).click();
     await page.waitForFunction(id=>{const t=document.getElementById(id);return t&&t.closest(".tabbed-block")?.getClientRects().length>0&&decodeURIComponent(location.hash)==="#"+id;},id);
    }
    console.log("PASS CP13 "+engine+" "+width+" "+rel);done++;
   }finally{await page.close();}
  }
 }
 await Promise.all(Array.from({length:3},worker));assert.equal(done,routes.length*widths.length);
 console.log("PASS CP13 targeted browser "+done+"/"+done);
}
module.exports={files,routes,reason,matches,matchesRoutes,currentBlob,verify,browserQA};
