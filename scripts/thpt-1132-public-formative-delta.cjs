"use strict";
// #1132 owner 7234992998 — exactly four public formative corrections.
// Preserve old independent snapshots and all unaffected records; not an Academic/PED verdict.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),crypto=require("node:crypto"),cp=require("node:child_process"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),cases={
 "docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js": {
  "old": "1b59b046b6539280817fb1b968dc9c8460fca7c5",
  "updated": "512b91f27433064bc3504581fe0bc7b9b4b956a5",
  "swaps": [
   [
    "Hai vectơ khác không bằng nhau khi nào?",
    "Cho hai vectơ đều khác vectơ-không. Khi nào hai vectơ này bằng nhau?"
   ],
   [
    "Với ba điểm A, B, C bất kì, $\\\\overrightarrow{AB}+\\\\overrightarrow{BC}$ bằng vectơ nào?",
    "Với mọi bộ ba điểm A, B, C, tổng $\\\\overrightarrow{AB}+\\\\overrightarrow{BC}$ luôn bằng vectơ nào?"
   ],
   [
    "D. $\\\\vec0$ (luôn đúng)",
    "D. $\\\\vec0$"
   ],
   [
    "(CA + AB = CB)",
    "($\\\\overrightarrow{CA}+\\\\overrightarrow{AB}=\\\\overrightarrow{CB}$)"
   ]
  ]
 },
 "docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js": {
  "old": "713e6a97b95c2c807c8b76045b324bdddf1a6737",
  "updated": "95572260642865204af6686a408d5e3500fa985a",
  "swaps": [
   [
    "Chọn cặp vectơ **khác không** vuông góc.",
    "Trong các cặp sau, cặp nào gồm hai vectơ đều khác vectơ-không và vuông góc với nhau?"
   ]
  ]
 },
 "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md": {
  "old": "599fedbcaab1bd42b2257180bdec1513cac4f573",
  "updated": "2aca842327878e3150295b68f530d4740d61154c",
  "swaps": [
   [
    "Chọn cặp vectơ **khác không** vuông góc.",
    "Trong các cặp sau, cặp nào gồm hai vectơ đều khác vectơ-không và vuông góc với nhau?"
   ]
  ]
 },
 "docs/thpt-preview/chuyen-de/cd13/luyen-tap.md": {
  "old": "cf37f9a7ae39e2019b633ea59279fc88c348cbc2",
  "updated": "5c201fca30e0d123f0c096b4038e5b48b42e939e",
  "swaps": [
   [
    "Với ba điểm A, B, C bất kì, \\(\\overrightarrow{AB}+\\overrightarrow{BC}\\) bằng vectơ nào?",
    "Với mọi bộ ba điểm A, B, C, tổng \\(\\overrightarrow{AB}+\\overrightarrow{BC}\\) luôn bằng vectơ nào?"
   ],
   [
    "D. \\(\\vec0\\) (luôn đúng)",
    "D. \\(\\vec0\\)"
   ]
  ]
 }
},files=["docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js","docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js","prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md","docs/thpt-preview/chuyen-de/cd13/luyen-tap.md","scripts/thpt-1132-public-formative-delta.cjs","scripts/thpt-q18-g10-source-receipt.cjs","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/test-thpt-g10-chiv-b07-b08-release-integration.cjs","scripts/test-thpt-g10-chiv-b09-b11-release-integration.cjs","scripts/test-thpt-g10-chiv-full-r04-release.cjs","scripts/test-thpt-g10-b10-single-canonical-source.cjs","scripts/test-thpt-shared-editorial-source-equivalent-20261121.cjs","scripts/test-thpt-topic-w3-source-locked.py"],routes=["docs/thpt-preview/sgk/chuong-iv/luyen-tap.md","docs/thpt-preview/chuyen-de/cd13/luyen-tap.md"],reason="OWNER_1132_G10_PUBLIC_FOUR_ITEMS";
const same=(x,y)=>x.length===y.length&&new Set(x).size===x.length&&x.every(v=>y.includes(v));
const matches=paths=>same(paths,files),matchesRoutes=paths=>same(paths,routes);
const blob=s=>{const b=Buffer.from(s);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
function previous(p,s){
 const d=cases[p];if(!d)return s;
 assert.equal(blob(s),d.updated,p+" exact #1132 public successor");
 for(const [before,after] of [...d.swaps].reverse()){
  assert.equal(s.split(after).length,2,p+" exact unique approved correction");s=s.replace(after,before);
 }
 assert.equal(blob(s),d.old,p+" old snapshot recovered byte-for-byte");return s;
}
const records=(s,g)=>{const c={window:{}};vm.runInNewContext(s,c);const bank=c.window[g];assert(bank?.validate().valid);return Array.from(bank.records)};
function verify(base){
 for(const [p,d] of Object.entries(cases)){
  const current=read(p),old=previous(p,current);
  if(base)assert.equal(cp.execFileSync("git",["show",base+":"+p],{cwd:root}).toString("utf8"),old,p+" exact immediate parent");
 }
 const expected={"THPT-G10-B07-C02":"C","THPT-G10-B08-C01":"A","THPT-G10-B08-P02":null,"THPT-G10-B11-C02":"A"},seen=[];
 for(const [p,g] of [["docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js","THPT_CHIV_B07_B08_REVIEWED_FORMATIVE"],["docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js","THPT_CHIV_B09_B11_REVIEWED_FORMATIVE"]]){
  const s=read(p),old=records(previous(p,s),g),now=records(s,g);
  assert.equal(now.length,old.length);
  assert.equal(new Set(now.map(x=>x.item_id)).size,now.length);
  for(let i=0;i<now.length;i++){
   const x=now[i],y=old[i];assert.equal(x.item_id,y.item_id);assert.equal(x.answerKey,y.answerKey);assert.equal(x.solution.split("\n")[0],y.solution.split("\n")[0]);
   assert.equal(x.exposure,"FORMATIVE_ONLY");assert.equal(x.role,y.role);assert.equal(x.skill,y.skill);
   if(JSON.stringify(x)!==JSON.stringify(y)){assert(Object.hasOwn(expected,x.item_id));assert.equal(x.answerKey??null,expected[x.item_id]);seen.push(x.item_id)}
  }
 }
 assert.deepEqual(seen.sort(),Object.keys(expected).sort());
 assert(read("prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md").includes("Trong các cặp sau, cặp nào gồm hai vectơ đều khác vectơ-không và vuông góc với nhau?"));
 const topic=read("docs/thpt-preview/chuyen-de/cd13/luyen-tap.md");assert.equal(topic.split("DISPLAY_ONLY_CANONICAL: THPT-G10-B08-C01;").length,2);
 assert.equal(topic.split("DISPLAY_ONLY_CANONICAL: THPT-G10-B08-P02;").length,2);
 assert(topic.includes("\\(\\overrightarrow{CA}+\\overrightarrow{AB}=\\overrightarrow{CB}\\)"));
 console.log("PASS #1132 four exact public records, canonical B11 and CĐ13 projection, unchanged IDs/keys/roles/answers");
}
async function browserQA(browser,base,engine,widths){
 verify();
 for(const width of widths){
  const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
  page.setDefaultTimeout(30000);
  try{
   for(const [id,needle,key] of [
    ["THPT-G10-B07-C02","Cho hai vectơ đều khác vectơ-không","C"],
    ["THPT-G10-B08-C01","Với mọi bộ ba điểm A, B, C","A"],
    ["THPT-G10-B08-P02","Rút gọn",null],
    ["THPT-G10-B11-C02","hai vectơ đều khác vectơ-không và vuông góc","A"]
   ]){
    assert((await page.goto(base+"/thpt-preview/sgk/chuong-iv/luyen-tap/?item="+id,{waitUntil:"domcontentloaded"}))?.ok());
    const dialog=page.locator("dialog.thpt-r4-practice-dialog");await dialog.waitFor({state:"visible"});
    const card=dialog.locator("[data-thpt-canonical-item]");await card.waitFor({state:"visible"});
    assert.equal(await card.getAttribute("data-thpt-canonical-item"),id);
    assert((await card.locator("h3").innerText()).includes(needle),id+" corrected stem");
    assert.equal(await card.locator("details[open]").count(),0);
    assert.equal(await card.locator("input[type=radio]").count(),key?4:0);
    if(key){await card.locator('input[type=radio][value="'+key+'"]').check();await card.locator(".thpt-r4-formative-submit").click();assert((await card.locator(".thpt-r4-formative-feedback").innerText()).startsWith("Đúng!"))}
    if(id.endsWith("P02")){
     await card.locator("details").filter({hasText:"Đáp án / Lời giải"}).locator("summary").click();
     const solution=card.locator("details[open]");await solution.locator("mjx-container").first().waitFor({state:"visible"});
     assert.equal(await solution.locator("mjx-merror").count(),0);
    }
    if(id.endsWith("B08-C01"))assert(!(await card.locator(".thpt-r4-formative-choice-group").innerText()).includes("(luôn đúng)"));
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20);
    await dialog.locator("[data-thpt-modal-close]").click();
    console.log("PASS "+engine+" @"+width+" "+id);
   }
   assert((await page.goto(base+"/thpt-preview/chuyen-de/cd13/luyen-tap/",{waitUntil:"domcontentloaded"}))?.ok());
   await page.locator('[data-topic-w1-practice-card="1"]').click();
   const dlg=page.locator("dialog[data-topic-w1-dialog]");await dlg.waitFor({state:"visible"});
   for(const [index,id] of [[4,"THPT-G10-B08-C01"],[6,"THPT-G10-B08-P02"]]){
    await dlg.locator(".thpt-r4-modal-question-nav button").nth(index).click();
    const card=dlg.locator("[data-thpt-canonical-item]");assert.equal(await card.getAttribute("data-thpt-canonical-item"),id);assert.equal(await card.locator("details[open]").count(),0);
    if(index===4){assert((await card.innerText()).includes("Với mọi bộ ba điểm A, B, C"));assert(!(await card.innerText()).includes("(luôn đúng)"))}
    else{await card.locator("details summary").click();await card.locator("details[open] mjx-container").first().waitFor({state:"visible"});assert.equal(await card.locator("mjx-merror").count(),0)}
    console.log("PASS "+engine+" @"+width+" CĐ13 "+id);
   }
   assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20);
  }finally{await page.close()}
 }
}
module.exports={previous,verify,matches,matchesRoutes,routes,files,reason,browserQA};
if(require.main===module){if(process.argv[2]==="--reverse")process.stdout.write(previous(process.argv[3],read(process.argv[3])));else verify();}
