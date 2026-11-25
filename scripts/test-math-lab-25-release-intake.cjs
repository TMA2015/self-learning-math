#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."), read=p=>fs.readFileSync(path.join(root,p),"utf8");
const blob=s=>{const b=Buffer.from(s,"utf8");return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex")};
const rows=read("scripts/math-lab-25-release-manifest.tsv").trim().split("\n").filter(x=>!x.startsWith("#")).map(x=>x.split("\t"));
assert.equal(rows.length,25,"Expected 25 exact source model identities");
const ids=new Set(),routes=new Set();
for(const [id,sha,src,asset,page,grade,group] of rows){
 assert(!ids.has(id),"Duplicate MODEL_ID: "+id);ids.add(id);
 assert(!routes.has(page),"Duplicate model page: "+page);routes.add(page);
 assert(/^[a-f0-9]{40}$/.test(sha),"Invalid source blob "+id);
 assert(src.endsWith("/"+id+".html")&&asset.endsWith("/"+id+".html"),"Wrong source map "+id);
 const html=read(asset),wrapper=read(page);
 assert.equal(blob(html),sha,"Authoring source Git blob changed "+id);
 assert(wrapper.includes('data-math-lab-model="'+id+'"'),"Wrong page ID "+id);
 assert(wrapper.includes('sandbox="allow-scripts"')&&!wrapper.includes("allow-same-origin"),"Unsafe iframe sandbox "+id);
 assert(wrapper.includes("../../../.."),"Subpath unsafe iframe URL "+id);
 assert(wrapper.includes("href=\"../../\""),"Missing library back link "+id);
 assert(/name=["']viewport/.test(html),"Source viewport missing "+id);
 assert(!/\beval\s*\(|new Function\s*\(|XMLHttpRequest|WebSocket|sendBeacon/.test(html),"Prohibited source API "+id);
 assert(!/src=["']https?:|href=["']https?:/i.test(html),"External HTTP asset "+id);
 assert(!/\b(?:localStorage|sessionStorage|indexedDB|document\.cookie|window\.parent|window\.top|postMessage|XMLHttpRequest|WebSocket|sendBeacon|navigator\.serviceWorker)\b|\bfetch\s*\(/.test(html),"Standalone model may not access shared site data/network: "+id);
}
assert.equal([...ids].filter(x=>x.startsWith("SLM-TOP")).length,22,"Wrong Topic model count");
assert.equal([...ids].filter(x=>x.startsWith("SLM-SGK")).length,3,"Wrong SGK model count");
const catalog=read("docs/thpt-preview/math-lab/index.md"),home=read("docs/thpt-preview/home.md");
const main=read("mkdocs.yml"),thpt=read("mkdocs.thpt-preview.yml");
for(const id of ids)assert(catalog.includes('href="models/'+id.toLowerCase()+'/"'),"Restored full-page model route missing "+id);
assert.equal((catalog.match(/data-ml-card\b/g)||[]).length,25,"Expected 25 cards");
assert.equal((catalog.match(/href="models\/slm-[a-z0-9-]+\/"/g)||[]).length,25,"All 25 must open original contextual viewer routes");
const libraryJS=read("docs/assets/javascripts/math-lab-library-v1.js");
const launcherJS=read("docs/assets/javascripts/thpt-r4-preview.js");
const hook=read("hooks/math_lab_full_page.py");
assert(hook.includes("def on_post_page(")&&hook.includes("data-ml-restored-full-page")&&hook.includes("Math Lab source SHA mismatch"),"Source-locked full-page compositor missing");
assert(main.includes("hooks/math_lab_full_page.py")&&thpt.includes("INHERIT: mkdocs.yml"),"Both MkDocs configs must compose restored Math Lab viewer");
assert(!libraryJS.includes("location.replace(expected.href)"),"Redirect must not strip model-page metadata/back links");
assert(libraryJS.includes("requestAnimationFrame(mountMathLabShortcut)")&&libraryJS.includes('a.dataset.thptMathLabShortcut="1"'),"Legacy Math Lab shortcut compatibility guard missing");
assert(launcherJS.includes('btn.dataset.thptR4Launcher="1"')&&launcherJS.includes('["Math Lab · 25 mô hình tương tác","math-lab/"]')&&launcherJS.includes('title.textContent="Toán THPT 6+1"')&&!launcherJS.includes('["Danh mục 22 Chuyên đề đã phát hành","chuyen-de/"]'),"Owner THPT 6+1 menu missing");

assert.equal((home.match(/href="\.\.\/math-lab\/"/g)||[]).length,1,"Home missing ONE Math Lab card");
assert(home.indexOf('href="../thu-vien/"')<home.indexOf('href="../math-lab/"')&&home.indexOf('href="../math-lab/"')<home.indexOf('href="../tien-do/"'),"Home card order must be Library / Math Lab / Progress");
for(const c of [main,thpt]){
 assert(c.includes("Math Lab: thpt-preview/math-lab/index.md"),"Left menu Math Lab missing");
 assert(c.includes("assets/stylesheets/math-lab-library-v1.css")&&c.includes("assets/javascripts/math-lab-library-v1.js"),"Math Lab scoped assets missing");
 assert(!c.includes("models/slm-top01-truth-01.md"),"Do not put models in menu");
}
if(process.argv.includes("--built")){
 for(const dir of ["site","site-thpt-preview"]){
  if(!fs.existsSync(path.join(root,dir)))continue;
  const out=path.join(root,dir),landing=path.join(out,"thpt-preview/math-lab/index.html");
  assert(fs.existsSync(landing),"Catalog HTML not built "+dir);
  assert(fs.readFileSync(landing,"utf8").includes("data-math-lab-catalog"),"Catalog controls not in build "+dir);
  assert(fs.readFileSync(landing,"utf8").includes('href="models/slm-top01-truth-01/"'),"Built catalog link must return to contextual full page");

  for(const [id,sha,src,asset,page] of rows){
   const model=path.join(out,asset.replace(/^docs\//,""));
   const view=path.join(out,page.replace(/^docs\//,"").replace(/\.md$/,"/index.html"));
   assert(fs.existsSync(model),"Built model missing "+id+" "+dir);
   assert(fs.existsSync(view),"Built viewer missing "+id+" "+dir);
   assert.equal(blob(fs.readFileSync(model,"utf8")),sha,"Built bytes don't match authoring SHA: "+id);
   const full=fs.readFileSync(view,"utf8");
   assert(full.includes('data-ml-restored-full-page="true"'),"Restored full-page header missing "+id);
   assert(full.includes('data-math-lab-model="'+id+'"'),"Model identity lost "+id);
   assert(!full.includes("<iframe"),"Nested frame still rendered "+id);
   assert(full.includes("← Về tổng quan Math Lab")&&full.includes("← Trở về danh sách 25 mô hình"),"Both back links missing "+id);
   assert(full.includes("Khám phá bằng cách điều chỉnh mô hình."),"Original teaching guidance lost "+id);
   assert(full.includes('href="../../"'),"Return href changed "+id);
   assert((full.match(/<script\b/g)||[]).length>0,"Original model JS missing "+id);
   if(id==="SLM-TOP04-EXPLOG-01"){
    assert(full.includes("Vẽ y=aˣ và y=logₐ(x)"),"CĐ04 composed student intro must raise exponent");
    assert(!full.includes("Vẽ y=a^x và y=logₐ(x)"),"CĐ04 typo remains in built viewer");
    assert(fs.readFileSync(model,"utf8").includes("Vẽ y=a^x và y=logₐ(x)"),"Original signed authoring source must remain byte-exact");
   }
  }
  console.log("PASS BUILT "+dir+" 25/25 models/viewers");
 }
}
console.log("PASS MATH_LAB_25_RELEASE_SOURCE_MATCH IDs=25 TOP=22 SGK=3; no deploy");
