"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path");
const base=path.resolve(__dirname,"..");
const at=p=>path.join(base,p),read=p=>fs.readFileSync(at(p),"utf8");
const blob=p=>{const b=fs.readFileSync(at(p));return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const sourceFile="prototypes/thpt/content-drafts/G12_SGK_CHIV_B11_B13_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const receiptFile="prototypes/thpt/review-packets/G12_CHIV_R00_INDEPENDENT_ACADEMIC_PED_SOURCE_RECEIPT_20261103.md";
const sourceHash="45722cd386a498f3e0e96a09928c85565af56d1b",receiptHash="feabeeeef262e7f6b28c898cdf77e6aa4194da24";
assert.equal(blob(sourceFile),sourceHash);assert.equal(blob(receiptFile),receiptHash);
for(const p of ["prototypes/thpt/release-handoffs/G12-SGK-CHIV-B11-B13-R00_HANDOFF_V2_20261103.md","prototypes/thpt/release-queue/ready/G12-SGK-CHIV-B11-B13-R00.md"])
 assert(read(p).includes(sourceHash)&&read(p).includes(receiptHash),"Source/receipt V2 lock "+p);
const source=read(sourceFile),receipt=read(receiptFile),bank=JSON.parse(read("docs/assets/data/thpt-g12-chiv-b11-b13-public-r00.json"));
assert.equal(bank.packet_id,"G12-SGK-CHIV-B11-B13-R00");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,sourceHash);assert.equal(bank.receipt_blob,receiptHash);
assert.equal(bank.items.length,88);assert.equal(new Set(bank.items.map(q=>q.item_id)).size,88);
assert.equal(bank.help.length,22);assert.equal(bank.end_references.length,22);
const roles={C:"CORE",P:"SGK_PRACTICE",A:"SGK_APPLICATION",W:"SGK_WRITTEN"};
for(const role of Object.values(roles))assert.equal(bank.items.filter(q=>q.role===role).length,22);
const originals=[...source.matchAll(/^#### (THPT-G12-B(11|12|13)-([CPAW])(\d{2})) —[^\n]*\n([\s\S]*?)(?=^#### |^### |^## |^<!-- END|$(?![\s\S]))/gm)];
assert.equal(originals.length,88);
const byID=new Map(originals.map(m=>[m[1],m]));
const get=(block,label)=>{const prefix="- **"+label+":** ",line=block.split("\n").find(x=>x.startsWith(prefix));assert(line,"Missing "+label);return line.slice(prefix.length).trim()};
for(const q of bank.items){
 const m=byID.get(q.item_id);assert(m,"Unknown item "+q.item_id);
 assert.equal(q.role,roles[m[3]]);assert.equal(q.lesson_id,"B"+m[2]);assert.equal(q.outcome_id,"G12-CHIV-B"+m[2]+"-O"+m[4]);
 for(const [key,label]of [["stem","Đề duy nhất"],["answer","Đáp án canonical (chỉ mở khi được phép)"],["solution","Lời giải từng bước"]])
  assert.equal(q[key],get(m[5],label),"Canonical changed "+key+" "+q.item_id);
 if(m[3]==="W")assert.deepEqual(q.rubric,[get(m[5],"Rubric tự luận /5")]);
}
const d6=new Map([...source.matchAll(/^#### (HELP-G12-B(11|12|13)-(\d{2})) —[^\n]*\n([\s\S]*?)(?=^#### |^### |^## |^<!-- END|$(?![\s\S]))/gm)].map(m=>[m[1],m]));
assert.equal(d6.size,22);
for(const h of bank.help){
 const m=d6.get(h.help_id);assert(m,"Missing HELP "+h.help_id);
 assert.deepEqual(h.steps,m[4].split("\n").filter(x=>/^[1-5]\. \*\*/.test(x)).map(x=>x.replace(/^[1-5]\. /,"")));
 assert(bank.items.some(q=>q.item_id===h.return_item&&q.outcome_id===h.outcome_id&&q.role==="CORE"));
 assert(bank.items.some(q=>q.item_id===h.practice_item&&q.outcome_id===h.outcome_id&&q.role==="SGK_PRACTICE"));
}
const bt=String.fromCharCode(96);
const endLines=source.split("\n").filter(x=>x.startsWith("| "+bt+"G12-CHIV-END-"));
assert.equal(endLines.length,22);
for(const e of bank.end_references){
 assert(endLines.some(line=>line.includes(bt+e.placement_id+bt)&&line.includes(bt+e.item_id+bt)&&line.includes(bt+e.outcome_id+bt)));
 assert(bank.items.some(q=>q.item_id===e.item_id&&q.outcome_id===e.outcome_id&&q.role==="SGK_APPLICATION"));
}
assert.equal(new Set(bank.end_references.map(e=>e.item_id)).size,22);
const fields=[
["WHY — Vì sao học","- **Vì sao cần biết:**"],["WHAT — Kiến thức tiền đề","- **Kiến thức tiền đề:**"],
["HOW — Bản chất trước công thức","- **Bản chất trước công thức:**"],
["Định nghĩa / quy tắc phải hiểu","- **Định nghĩa và công thức:**"],["Điều kiện và giới hạn áp dụng","- **Điều kiện và giới hạn:**"],
["Tại sao chọn phương pháp này","- **Lý do chọn phương pháp:**"],["Đề","**Đề:**"],
["Lời giải có suy luận","**Lời giải có suy luận:**"],["Bẫy cần tự phát hiện","**Bẫy cần tự phát hiện:**"]];
let tested=0,tries=0;
for(const n of [11,12,13]){
 const page=read("docs/thpt-preview/sgk/lop-12/chuong-iv/bai-"+n+".md");
 const st=source.indexOf("# Bài "+n+" —"),en=source.indexOf("<!-- END EXACT ORIGINAL REVIEWED SOURCE: Temp_G12_CHIV_B"+n+"_LEARNING_R00_20261103.md -->",st);
 assert(st>=0&&en>st,"Missing reviewed B"+n);
 const lesson=source.slice(st,en),outcomes=[...lesson.matchAll(/^### (G12-CHIV-B\d{2}-O\d{2}) — (.+)$/gm)];
 assert.equal(outcomes.length,n===13?8:7);
 for(let i=0;i<outcomes.length;i++){
  const o=outcomes[i],end=i+1<outcomes.length?outcomes[i+1].index:lesson.indexOf("\n## 3. Mạch Core",o.index);
  const section=lesson.slice(o.index,end).split(/^#### THPT-G12-/m)[0],marker="<!-- OUTCOME_ID: "+o[1]+" -->";
  const at=page.indexOf(marker),next=page.indexOf("<!-- OUTCOME_ID:",at+marker.length);
  assert(at>=0,"Missing page outcome "+o[1]);
  const visible=page.slice(at,next<0?page.indexOf("\n## 3. Đọc hình minh họa gốc",at):next);
  for(const [original,display]of fields){
   const prefix="**"+original+":** ",line=section.split("\n").find(s=>s.startsWith(prefix));
   assert(line,"Source field missing "+original+" "+o[1]);
   assert(visible.includes(display+" "+line.slice(prefix.length)),"Learner text changed "+original+" "+o[1]);
  }
  tested++;
 }
 const part=lesson.split("## 1. TỰ THỬ TRƯỚC CORE")[1].split("## 2. Học theo OUTCOME")[0];
 const q=[...part.matchAll(/^### (B\d{2}-T\d{2}) — [^\n]*\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)];
 assert.equal(q.length,2);
 for(const t of q){
  const prefix="**Đề Tự thử:** ",line=t[2].split("\n").find(s=>s.startsWith(prefix));
  const pos=page.indexOf("<!-- FIRST_TRY_ID: "+t[1]+" -->");
  assert(line&&pos>=0&&page.slice(pos).includes(line.slice(prefix.length)),"First Try text drift "+t[1]);tries++;
 }
}
assert.equal(tested,22);assert.equal(tries,6);
const images={
"Temp_FIG-G12-CHIV-B11-PRIMITIVES-R00.png":"4e96237316480ba45d70311fd19ca58a61cb47a2",
"Temp_FIG-G12-CHIV-B12-NEWTON-LEIBNIZ-R00.png":"e021d323e5cd6b78239f71c5aa831736a68adeb3",
"Temp_FIG-G12-CHIV-B12-SIGNED-AREA-R00.png":"3145a6b8d4742f23824ca5c9f9d0b57413ef42a3",
"Temp_FIG-G12-CHIV-B13-REVOLUTION-R00.png":"aa208f18683764a81346eeaec1a1c53aa16831a4",
"Temp_FIG-G12-CHIV-B13-TWO-CURVES-R00.png":"a67d5f1589eef420c23236b9447bbff35bac19bb",
"Temp_FIG-G12-CHIV-B13-VOLUME-SLICES-R00.png":"052f0ee20952f21d881b034af301d0880c9455ba"};
for(const [name,sha]of Object.entries(images)){
 assert.equal(blob("prototypes/thpt/content-drafts/png/"+name),sha);
 assert.equal(blob("docs/assets/images/thpt/"+name),sha);
 assert(receipt.includes(sha));
}
const runtime=read("docs/assets/javascripts/thpt-g12-chiv-b11-b13-r00.js");
assert(runtime.includes("Chương IV")&&!runtime.includes("Chương III"));
assert(runtime.includes("submitted=true")&&runtime.includes("card.hidden=i!==cursor"));
assert(!/localStorage|sessionStorage|setDoc\(|getFirestore\(/.test(runtime));
console.log("PASS ChIV: 88 canonical, 22 outcomes x 9 source fields, six First Try, 22 D6/END, six reviewed PNG, Q16 no Mastery.");
