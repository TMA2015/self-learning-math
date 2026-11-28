"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const text=p=>fs.readFileSync(p,"utf8");
// One current B09 academic manuscript is authoritative; all web artifacts must match.
require("./test-thpt-g10-b09-single-canonical-source.cjs");
// B10 owner-authorized next lesson: one source, immutable old bank, 3+1 CSS.
require("./test-thpt-g10-b10-single-canonical-source.cjs");
const blob=bytes=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+bytes.length+"\0"),bytes])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md";
const sourceBytes=fs.readFileSync(sourcePath);
assert.equal(blob(sourceBytes),"a9f6fab820559a8da98a5a42cd9902dbf9891f34","Academic source snapshot changed");
const source=sourceBytes.toString("utf8");
const section=source.slice(source.indexOf("## 5. D3 —"),source.indexOf("## 6. D4 —"));
const heading=/^### \x60(THPT-G10-B(09|10|11)-[CP]\d{2})\x60 — B\d+ \| \x60(SGK_CORE|SGK_PRACTICE)\x60 \| \x60([^\x60]+)\x60 \| \x60(MCQ|SHORT)\x60 \| \x60([^\x60]+)\x60 \| \x60content_version=1\x60/gm;
const hits=[...section.matchAll(heading)];assert.equal(hits.length,24);
const field=(s,label)=>{const line=s.split("\n").find(x=>x.startsWith("**"+label+":**"));assert(line,"missing "+label);return line.slice(("**"+label+":**").length).trim()};
const expected=hits.map((h,i)=>{
 const b=section.slice(h.index+h[0].length,i+1<hits.length?hits[i+1].index:section.length);
 const key=field(b,"Đáp án");
 const obj={item_id:h[1],lesson:String(Number(h[2])),role:h[3]==="SGK_CORE"?"CORE":"PRACTICE",skill:h[4],stem:field(b,"Câu hỏi")};
 if(h[5]==="MCQ"){
  const raw=field(b,"Lựa chọn"),options=[...raw.matchAll(/(?:^|;\s+)([A-D])\.\s/g)];
  assert.equal(options.length,4,"Source options: "+h[1]);
  obj.options=options.map((m,k)=>m[1]+". "+raw.slice(m.index+m[0].length,k+1<4?options[k+1].index:raw.length).replace(/;\s*$/,"").trim());
  obj.answerKey=key;
 }
 obj.solution="Đáp án: "+key+"\nLời giải: "+field(b,"Lời giải");
 obj.hint=field(b,"Hint chỉ dùng sau/ngoài kiểm tra");obj.exposure="FORMATIVE_ONLY";obj.difficulty=h[6];
 return obj;
});
const context={window:{}};
vm.runInNewContext(require("./thpt-1132-public-formative-delta.cjs").previous("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js",text("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js")),context);
const bank=context.window.THPT_CHIV_B09_B11_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Invalid new bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),
 "Original 24 R01 items must remain source-exact and immutable");
const historical=bank.records.map(x=>x.item_id);
vm.runInNewContext(text("docs/assets/javascripts/thpt-g10-b09-decomp-r04-formative-extension.js"),context);
const delta=context.window.THPT_G10_B09_DECOMP_R04_EXTENSION;
assert(delta?.validate().valid,"B09 isolated P07 extension invalid");
const extra=delta.forLesson("9","practice");
assert.equal(extra.length,1,"B09 has exactly one canonical decomposition extension");
assert.equal(extra[0].item_id,"THPT-G10-B09-P07");
assert.equal(extra[0].skill,"G10-B09-DECOMP_S1");
assert(!historical.includes(extra[0].item_id),"P07 cannot duplicate any original R01 item");
assert.equal(delta.forLesson("10","practice").length,0,"B10 must not receive B09 P07");
assert.equal(delta.forLesson("9","core").length,0,"B09 original Core must remain unchanged");
const r04=text("prototypes/thpt/ux795/G10_CHIV_B09_DECOMP_CANONICAL_DELTA_R04_20261117.md");
assert(r04.includes("THPT-G10-B09-P07")&&r04.includes("G10-B09-DECOMP_S1")&&
 r04.includes("SOURCE-CANDIDATE")&&r04.includes("not independent reviewer"),
 "P07 must have a scoped non-fabricated Q18 source receipt");
const ui=text("docs/assets/javascripts/thpt-r4-preview.js");
assert(ui.includes('const isB09Extension=!isG11&&requestedItem==="THPT-G10-B09-P07"')&&
 ui.includes("b09Extension.forLesson(lesson,parts[2])")&&
 ui.includes("await loadB09PracticeExtension()")&&
 ui.includes("thpt-g10-b09-decomp-r04-formative-extension.js"),
 "Practice modal and deep link must load P07 only on G10 B09");
const practice=text("docs/thpt-preview/sgk/chuong-iv/luyen-tap.md");
assert(practice.includes("41 câu tự luyện")&&practice.includes("Bài 9 · Vectơ</strong><p>7 câu"),
 "Learner-facing B09 Practice count must match one added P07");
const figures=[
["THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg","8670fd4815f89a1f56e824cdab2d2d3696299422"],
["THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg","fb293bfb7c89b1247ebea310a1f97e04ea1ebab0"],
["THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg","9b16fbab2be9be385076b759675e98241811ac7f"]];
for(const [name,hash] of figures){
 const bytes=fs.readFileSync("docs/assets/images/thpt/"+name);
 assert.equal(blob(bytes),hash,"Changed D5 SVG: "+name);
 assert(!bytes.toString("utf8").includes("<script"));
}
for(const n of [9,10,11]){
 assert.equal(bank.forLesson(n,"core").length,2);assert.equal(bank.forLesson(n,"practice").length,6);
 const p=text("docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md");
 assert.deepEqual([...p.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
  "B"+n+": exactly four owner-approved Model B tabs required");
 assert.equal((p.match(/^    ### (?:3\.[1-4]\. )?Ví dụ \d+\b/gm)||[]).length,[9,10,11].includes(n)?4:3,
  "B"+n+": B09 decomposition / B10 river / B11 force must appear as fourth worked Example in the correct tab");
 assert.equal((p.match(new RegExp('data-thpt-help-id="HELP-G10-B'+String(n).padStart(2,"0")+'-0[12]"',"g"))||[]).length,2,"Original reviewer R01 D6 IDs remain untouched; transfer D6 guarded separately");
 for(const kind of ["core","practice"])assert(text("docs/thpt-preview/sgk/chuong-iv/luyen-tap.md").includes('data-thpt-open-quiz="b'+n+'-'+kind+'"'));
}
const written=text("docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11.md");
for(const id of ["THPT-G10-CHIV-W09","THPT-G10-CHIV-W10","THPT-G10-CHIV-W11-ANCHOR"])
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1);
const banks=["thpt-chi-reviewed-formative-v1.js","thpt-chii-reviewed-formative-v1.js",
"thpt-chiii-reviewed-formative-v1.js","thpt-chiv-b07-b08-reviewed-formative-v1.js",
"thpt-chvi-reviewed-formative-v1.js","thpt-chvii-reviewed-formative-v1.js",
"thpt-chviii-reviewed-formative-v1.js","thpt-chix-reviewed-formative-v1.js"];
const existing=banks.flatMap(name=>[...text("docs/assets/javascripts/"+name).matchAll(/"item_id"\s*:\s*"([^"]+)"/g)].map(m=>m[1]));
assert.equal(new Set(existing).size,existing.length);
assert.equal(new Set([...existing,...bank.records.map(x=>x.item_id)]).size,existing.length+24,"Duplicate canonical ID");
assert(!/data-thpt-readiness|data-mastery-credit/.test(text("docs/thpt-preview/sgk/chuong-iv/tu-kiem-tra-chuong.md")));
if(process.argv.includes("--built")){
 for(const n of [9,10,11])assert(fs.existsSync("site/thpt-preview/sgk/chuong-iv/bai-"+n+"/index.html"));
 assert(fs.existsSync("site/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11/index.html"));
}
console.log("PASS: 24/24 historic R01 items immutable + one G10 B09 P07 isolated extension, no changes to B10/B11/Readiness/Mastery");
