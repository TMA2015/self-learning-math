#!/usr/bin/env node
"use strict";
// Owner #662: a reviewed RD1-derived client selfcheck is public and voluntary.
// Guard against exposing the PRIVATE source/archive, unintended keys, independent readiness credit, or Mastery.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const read=p=>fs.readFileSync(p,"utf8"),exists=p=>fs.existsSync(p);
const publicBank="assets/data/thpt-g11-selfcheck/CHI.json";
const privateArchive=/(?:_INTERNAL_G11_CHI|Temp_G11_CHI_B01_B04_RD0_RD1|PRIVATE_RD1|20_RD1_CANONICAL_ACADEMIC)/i;
const id=/THPT[-_]G11[-_]CHI[-_]RD1[-_]\d{2}/i;
const exts=new Set([".html",".js",".json",".md",".css",".svg",".txt"]);
const book=JSON.parse(read("docs/"+publicBank));
assert.equal(book.schema,"thpt-g11-reviewed-selfcheck-v1");
assert.equal(book.scope,"SGK_CHAPTER_SELF_CHECK");
assert.equal(book.mastery_credit,false);
assert.equal(book.independent_readiness_credit,false);
assert.equal(book.persist_results,false);
assert.equal(book.public_client_answer_keys,true);
assert.equal(book.items.length,20);
assert.equal(new Set(book.items.map(q=>q.item_id)).size,20);
for(const q of book.items){
  assert(/^THPT-G11-CHI-RD1-\d{2}$/.test(q.item_id));
  assert(q.stem&&q.answer&&q.solution&&q.rubric,"Missing reviewed Written evidence");
  assert.equal(q.type,"WRITTEN_RUBRIC","Written must not be auto machine-scored");
}
const page="docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md";
assert(read(page).includes('data-g11-chapter-selfcheck="CHI"'),"Voluntary Final Submit self-check route missing");
assert(!/CHƯA KÍCH HOẠT|Skill Mastery.*được ghi/.test(read(page)));
const js=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(!/localStorage\.setItem|sessionStorage\.setItem|firebase\.database|masteryCredit\s*:\s*true/.test(js));
assert(js.includes("independent_readiness_credit!==false"));
let examined=0,allowed=0;
function scan(root){
  assert(exists(root),"Missing client tree: "+root);
  function walk(folder){
    for(const entry of fs.readdirSync(folder,{withFileTypes:true})){
      const full=path.join(folder,entry.name);
      if(entry.isDirectory()){walk(full);continue;}
      if(!entry.isFile()||!exts.has(path.extname(full).toLowerCase()))continue;
      const rel=full.replaceAll(path.sep,"/");
      assert(!privateArchive.test(rel),"Private source/archive filename leaked: "+rel);
      const content=read(full);
      const sanctioned=rel.endsWith("/"+publicBank);
      if(id.test(content)){
        assert(sanctioned,"RD1 answer/ID unexpectedly copied outside single reviewed public client selfcheck book: "+rel);
        allowed++;
      }
      examined++;
    }
  }walk(root);
}
scan("docs/thpt-preview/sgk/lop-11/chuong-i");
scan("docs/assets/javascripts");
scan("docs/assets/data");
for(const site of ["site","site-thpt-preview"]){
  scan(site);
  assert(exists(site+"/"+publicBank),"Public reviewed selfcheck book missing from site");
  assert(exists(site+"/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js"),"Selfcheck runtime missing from site");
  const html=read(site+"/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong/index.html");
  assert(html.includes('data-g11-chapter-selfcheck="CHI"'),"Built selfcheck route missing");
  assert(!html.includes("THPT-G11-CHI-RD1-01"),"Answer IDs pre-rendered in HTML");
}
assert.equal(allowed,3,"Exactly one sanctioned source JSON and one per built site may expose 20 question IDs");
console.log("PASS G11 ChI voluntary selfcheck: exactly 20 reviewed client questions; raw private archive absent, only one controlled JSON per client; no independent Readiness or Mastery credit. Inspected "+examined+" files.");
