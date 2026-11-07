"use strict";
/* Checks approved SGK ChVI lesson-outcome STRUCTURAL INTEGRATION only.
 * These assertions are not a new NotebookLM academic verdict or byte-level parity proof.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const map=read("prototypes/thpt/THPT_G10_CHVI_APPROVED_KNOWLEDGE_PARITY_S1_20261028.md");
const expected={15:5,16:5,17:5,18:4};
const outcomes=[...map.matchAll(/^\| (B1[5678]_OUT_\d\d) \|/gm)].map(x=>x[1]);
assert.equal(outcomes.length,19,"Approved ChVI content matrix must list 19 SGK outcomes");
assert.equal(new Set(outcomes).size,19,"Outcome row repeated");
for(const [lesson,count] of Object.entries(expected)){
 assert.equal(outcomes.filter(x=>x.startsWith("B"+lesson+"_")).length,count,
   "Incorrect reviewed SGK outcome count for B"+lesson);
}
const checks={
 15:["Khái niệm hàm số","tập xác định","tập giá trị","Bảng có đầu vào lặp",
      "Đồ thị","x_0\\in D","hàm số cho theo từng khoảng","C(3)","đồng biến","nghịch biến"],
 16:["a\\ne 0","tập xác định","Đỉnh","trục đối xứng","Bốn bước vẽ","\\Delta",
      "thpt-r4-plot","Chuyển động theo phương thẳng đứng","Doanh thu và giá bán"],
 17:["Tam thức bậc hai","\\Delta","nghiệm kép","Bảng xét dấu","a>0",
      "a<0","Bất phương trình có tham số","rào ba cạnh","dấu bằng"],
 18:["\\sqrt{A(x)}=\\sqrt{B(x)}","\\sqrt{A(x)}=B(x)",
      "B(x)\\ge0","ngoại lai","tam giác vuông","\\sqrt{u^2}=|u|",
      "thử lại"]
};
for(const [lesson,required] of Object.entries(checks)){
 const src=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 assert(!/NOTEBOOKLM|ACADEMIC_CLEARANCE|TÍCH HỢP ĐANG QA/.test(src),"Internal review metadata exposed to student in B"+lesson);
 for(const term of required)assert(src.toLocaleLowerCase("vi").includes(term.toLocaleLowerCase("vi")),
   "B"+lesson+" website knowledge source lacks expected reviewed concept: "+term);
 assert(!src.includes("data-thpt-assessment=\"sgk-chapter\""),
   "Lesson must not inline protected chapter Readiness scope");
}
const nav=read("mkdocs.thpt-preview.yml");
assert(nav.includes("thpt-preview/sgk/chuong-vi/luyen-tap.md"));
assert(nav.includes("thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"));
assert(nav.includes("thpt-chvi-reviewed-formative-v1.js"));
const readiness=read("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md");
const reviewed=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHVI.json"));
assert(readiness.includes('data-g10-chapter-selfcheck="CHVI"')&&readiness.includes("Final Submit"));
assert.equal(reviewed.items.length,20,"Approved public CHVI selfcheck: 18 old +2 R04 Written");
assert.equal(fnv(JSON.stringify(reviewed.items.slice(0,18))),"a1c5d223","Old 18 source-locked content unchanged");
assert.deepEqual(reviewed.items.slice(18).map(q=>q.item_id),["THPT-G10-B16-R06","THPT-G10-B17-R05"]);
assert.equal(reviewed.targeted_delta?.review_receipt_blob,"43b2da942b9d8d3ec5a32647e3ed1a217125a255");
assert.equal(reviewed.mastery_credit,false,"Do not import self-check grades into Skill Mastery");
assert.equal(reviewed.persist_results,false,"Do not alter student progress history");
const content=Object.values(expected).reduce((a,b)=>a+b,0);
console.log("PASS THPT ChVI 19/"+content+
 " approved-outcome structural lesson mapping, reviewed client-only 18 frozen +2 new approved R04 chapter self-check and formative asset wiring; not full academic byte parity.");
