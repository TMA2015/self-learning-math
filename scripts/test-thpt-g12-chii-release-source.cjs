"use strict";
/* G12 ChII public-only Q01–Q18 RELEASE source fidelity and assessment gates. */
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const git=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const sourcePath="prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const receiptPath="prototypes/thpt/review-packets/G12_CHII_R00_INDEPENDENT_ACADEMIC_PED_COMPOSITE_SOURCE_RECEIPT_20261103.md";
const sourceSHA="856a37bd16d2746ffc2e12906de18d1f4338a3b6",receiptSHA="92c07bc943a3e5f1789b8c9e5e7a3acc1bea7532";
assert.equal(git(sourcePath),sourceSHA);assert.equal(git(receiptPath),receiptSHA);
const bank=JSON.parse(read("docs/assets/data/thpt-g12-chii-b06-b08-public-r00.json"));
assert.equal(bank.packet_id,"G12-SGK-CHII-B06-B08-R00");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,sourceSHA);assert.equal(bank.receipt_blob,receiptSHA);
assert.equal(bank.items.length,64);assert.equal(bank.help.length,16);assert.equal(bank.end_references.length,16);
assert.equal(new Set(bank.items.map(x=>x.item_id)).size,64);
assert.equal(new Set(bank.items.map(x=>x.outcome_id)).size,16);
const counts={};bank.items.forEach(q=>{const k=q.lesson_id+"."+q.role;counts[k]=(counts[k]||0)+1});
assert.deepEqual(counts,{"B06.CORE":6,"B06.PRACTICE":12,"B06.WRITTEN":6,"B07.CORE":4,"B07.PRACTICE":8,"B07.WRITTEN":4,"B08.CORE":6,"B08.PRACTICE":12,"B08.WRITTEN":6});
const src=read(sourcePath),rx=/\*\*\x60ITEM_ID=(THPT-G12-B0[678]-[CPW]\d\d)\x60\s*·\s*\x60OUTCOME_ID=(G12-CHII-B0[678]-O\d\d)\x60\s*·\s*\x60ROLE=(CORE|PRACTICE|WRITTEN)\x60\*\*/g,ms=[...src.matchAll(rx)];
assert.equal(ms.length,64);
const orig=new Map();
for(let i=0;i<ms.length;i++){
 const m=ms[i],body=src.slice(m.index+m[0].length,i+1<ms.length?ms[i+1].index:src.length);
 const field=rx=>body.match(rx)?.[1]?.trim()||"";
 orig.set(m[1],{item_id:m[1],outcome_id:m[2],lesson_id:m[1].match(/B0[678]/)[0],role:m[3],
  stem:field(/- \*\*Đề mới:\*\*\s*(.+)/),answer:field(/- \*\*Đáp án:\*\*\s*(.+)/),
  solution:field(/- \*\*Lời giải\/suy luận:\*\*\s*(.+)/),
  rubric:field(/- \*\*Rubric tự luận \(tổng 5 điểm, tự đối chiếu sau khi làm\):\*\*\s*(.+)/)});
}
for(const q of bank.items){
 const x=orig.get(q.item_id);assert(x,"Unoriginal item "+q.item_id);
 assert.deepEqual(q,x,"Original content + rubric byte text unchanged "+q.item_id);
 if(q.role==="WRITTEN")assert(q.rubric&&/điểm/.test(q.rubric),"Written /5 rubric missing");
}
const d6=[...src.matchAll(/^\|\s*\x60(THPT-G12-B0[678]-HELP\d\d)\x60\s*\|\s*\x60(G12-CHII-B0[678]-O\d\d)\x60\s*\|\s*([^|]+)\|\s*\x60(THPT-G12-B0[678]-C\d\d)\x60\s*→\s*\x60(THPT-G12-B0[678]-P\d\d)\x60\s*\|$/gm)].map(m=>({help_id:m[1],outcome_id:m[2],lesson_id:m[1].match(/B0[678]/)[0],review_path:m[3].trim(),return_item:m[4],practice_item:m[5]}));
assert.deepEqual(bank.help,d6,"D6 canonical same-outcome mapping must be identical");
const section=src.slice(src.indexOf("### Placement bảng câu cuối chương"),src.indexOf("## 2. Ma trận canonical item"));
const end=[...section.matchAll(/^\|\s*(\d\d)\s*\|\s*\x60(THPT-G12-B0[678]-P\d\d)\x60\s*\|\s*\x60(G12-CHII-B0[678]-O\d\d)\x60\s*\|\s*([^|]+)\|/gm)].map(m=>({position:Number(m[1]),item_id:m[2],outcome_id:m[3],remedial_path:m[4].trim()}));
assert.deepEqual(bank.end_references,end,"END references: no new item clones");
for(const x of bank.end_references){const q=orig.get(x.item_id);assert(q&&q.role==="PRACTICE"&&q.outcome_id===x.outcome_id)}
for(const x of bank.help){assert(orig.get(x.return_item)?.outcome_id===x.outcome_id);assert(orig.get(x.practice_item)?.outcome_id===x.outcome_id)}
const figs=[["B06","26e388d873521aa5b0bae945343e69357490ec16"],["B07","979ca912e99fdadfc4e91ae0edad5db34fc13928"],["B08","13445da079245a556a08e7a57069d9987097a0be"]];
for(const [id,sha]of figs){const p="FIG-G12-CHII-"+id+"-R00.svg";assert.equal(git("prototypes/thpt/content-drafts/svg/"+p),sha);assert.equal(git("docs/assets/images/thpt/"+p),sha)}
for(const n of [6,7,8]){
 const page=read("docs/thpt-preview/sgk/lop-12/chuong-ii/bai-"+n+".md");
 assert(!page.includes('data-g12-chii-lesson'),"No canonical bank items inside Knowledge B0"+n);
 assert(page.includes('href="../luyen-tap/#b0'+n+'-core"'),"Missing Core chapter hub link");
 assert(page.includes('href="../luyen-tap/#b0'+n+'-practice"'),"Missing Practice chapter hub link");
 assert(page.includes("Tự thử trước Core"),"First-try must be in exact lesson");
 assert(page.includes("## 7. Core, Luyện tập"),"Student links to separate chapter practice page");
 assert(page.includes("FIG-G12-CHII-B0"+n+"-R00.svg"),"Original SVG missing");
 const id="B0"+n;
 const a=src.indexOf("# G12-SGK-CHII-"+id+" —");
 const z=src.indexOf("<!-- END EXACT SOURCE COMPONENT",a);
 const lesson=src.slice(a,z);
 const heads=[...lesson.matchAll(/^## ([^\n]+)$/gm)];
 const blocks=heads.map((m,i)=>({name:m[1],text:lesson.slice(m.index+m[0].length,i+1<heads.length?heads[i+1].index:lesson.length).trim()}));
 for(const b of blocks.filter(b=>/Vì sao|Kiến thức tiền đề|bản chất|Hình thành|Ví dụ|Tự thử/i.test(b.name))){
  // Owner P2 approved AP-only display normalization: section 3's historical
  // "2.x" subheadings corrected to "3.x", and B08's consecutive $ blocks
  // split across separate paragraphs. This is an EXACT allowed transform,
  // not relaxed academic source comparison: every original math token, prose,
  // condition, worked step and rubric remains byte-identical otherwise.
  let expected=b.text;
  if((n===7||n===8)&&/bản chất|Hình thành/i.test(b.name)){
   expected=expected.replace(/^### 2\.([1-5])\./gm,"### 3.$1.");
   if(n===8){
    const old=String.raw`§\vec a+\vec b=(x_1+x_2;y_1+y_2;z_1+z_2),§
§\vec a-\vec b=(x_1-x_2;y_1-y_2;z_1-z_2),\quad k\vec a=(kx_1;ky_1;kz_1).§`.replaceAll("§",()=>String.fromCharCode(36).repeat(2));
    const corrected=String.raw`§\vec a+\vec b=(x_1+x_2;y_1+y_2;z_1+z_2),§

§\vec a-\vec b=(x_1-x_2;y_1-y_2;z_1-z_2),§

§k\vec a=(kx_1;ky_1;kz_1).§`.replaceAll("§",()=>String.fromCharCode(36).repeat(2));
    assert(expected.includes(old),"Source-locked B08 original equations must not change");
    expected=expected.replace(old,()=>corrected); // function preserves literal TeX $
   }
  }
  assert(page.includes(expected),"Original pedagogy source changed outside approved AP presentation "+id+" "+b.name);
 }
}
const root="docs/thpt-preview/sgk/lop-12/";
for(const p of ["index.md","chuong-i.md","chuong-ii.md","chuong-ii/luyen-tap.md",..."678".split("").map(n=>"chuong-ii/bai-"+n+".md"),"chuong-ii/tu-kiem-tra-chuong.md"])assert(fs.existsSync(root+p));
const hub=read(root+"chuong-ii/luyen-tap.md");
assert(hub.includes('data-g12-chii-hub'),"Dedicated chapter-level hub");
assert(read(root+"chuong-ii.md").includes('href="luyen-tap/"'),"Chapter overview hub tile");
assert(read("mkdocs.thpt-preview.yml").includes("thpt-preview/sgk/lop-12/chuong-ii/luyen-tap.md"),"Chapter nav hub route");
const script=read("docs/assets/javascripts/thpt-g12-chii-b06-b08-r00.js");
assert(script.includes("const startHub=")&&script.includes('data-g12-chii-hub'),"Chapter practice hub runtime");
assert(!script.includes("const startLesson="),"No inline lesson item rendering");
assert(script.includes('link.href="../luyen-tap/#"'),"End Final Submit remediation must return chapter hub");

assert(script.includes("bank.end_references.length!==16"));
assert(script.includes("entries.filter(x=>!x.input.value.trim()).length"));
assert(script.includes("if(missing){status.textContent="));
assert(script.includes("bank.items.length!==64"));
assert(script.includes("if(button.disabled)return"));
assert(script.includes("q.role!==\"PRACTICE\""));
for(const forbidden of ["innerHTML","localStorage.setItem","sessionStorage.setItem","firebase.","SkillMastery=","SGK_CHAPTER_READINESS="])assert(!script.includes(forbidden));
for(const cf of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const cfg=read(cf);assert(cfg.includes("thpt-g12-chii-b06-b08-r00.js"));assert(cfg.includes("thpt-g12-chii-b06-b08-r00.css"));assert(cfg.includes("lop-12/chuong-ii.md"));
}
console.log("PASS G12 SGK ChII source-lock: 64/64 canonical items separated into chapter hub; 16 outcomes/D6/END references; 3 SVG, 3 Knowledge lessons, Q15/Q16/Q18 protected.");
