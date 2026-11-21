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
}
assert.equal([...ids].filter(x=>x.startsWith("SLM-TOP")).length,22,"Wrong Topic model count");
assert.equal([...ids].filter(x=>x.startsWith("SLM-SGK")).length,3,"Wrong SGK model count");
const catalog=read("docs/thpt-preview/math-lab/index.md"),home=read("docs/thpt-preview/home.md");
const main=read("mkdocs.yml"),thpt=read("mkdocs.thpt-preview.yml");
for(const id of ids)assert(catalog.includes("models/"+id.toLowerCase()+"/"),"Catalog card missing "+id);
assert.equal((catalog.match(/data-ml-card\b/g)||[]).length,25,"Expected 25 cards");
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
  for(const [id,sha,src,asset,page] of rows){
   const model=path.join(out,asset.replace(/^docs\//,""));
   const view=path.join(out,page.replace(/^docs\//,"").replace(/\.md$/,"/index.html"));
   assert(fs.existsSync(model),"Built model missing "+id+" "+dir);
   assert(fs.existsSync(view),"Built viewer missing "+id+" "+dir);
   assert.equal(blob(fs.readFileSync(model,"utf8")),sha,"Built bytes don't match authoring SHA: "+id);
   assert(fs.readFileSync(view,"utf8").includes('sandbox="allow-scripts"'),"Frame sandbox lost "+id);
  }
  console.log("PASS BUILT "+dir+" 25/25 models/viewers");
 }
}
console.log("PASS MATH_LAB_25_RELEASE_SOURCE_MATCH IDs=25 TOP=22 SGK=3; no deploy");
