#!/usr/bin/env node
"use strict";
/*
 * Read-only, source-faithful editorial census for SGK THPT 79 lessons.
 * Does NOT certify academic S1 headings, authoring, AP visual PASS or owner
 * Golden approval. NO writes to source. Only optional report output directory.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const bounds={
 10:[2,4,6,11,14,18,22,25,27],
 11:[4,7,9,14,17,21,27,30,33],
 12:[5,8,10,13,17,19]
};
const roman=["i","ii","iii","iv","v","vi","vii","viii","ix"];
const ids=[10,11,12].flatMap(grade=>Array.from({length:bounds[grade].at(-1)},(_,i)=>({grade,lesson:i+1})));
assert.equal(ids.length,79,"expected 27+33+19 SGK lessons");
function route(grade,n){
 const chapter=roman[bounds[grade].findIndex(end=>n<=end)];
 assert(chapter,"unknown chapter");
 return "docs/thpt-preview/sgk/"+(grade===10?"":"lop-"+grade+"/")+"chuong-"+chapter+"/bai-"+n+".md";
}
function sha(source){
 const b=Buffer.from(source,"utf8");
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
}
const tabLabels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const rawHeadings=s=>[...s.matchAll(/^ {0,12}(#{2,4})\s+(.+)$/gm)].map(m=>({level:m[1].length,title:m[2].trim()}));
function inspect(grade,n){
 const rel=route(grade,n),abs=path.join(root,rel);
 assert(fs.existsSync(abs),"Missing mandatory 79 SGK source "+rel);
 const source=fs.readFileSync(abs,"utf8"),raw=source.split(/^=== "([^"]+)"\s*$/gm);
 const labels=[...source.matchAll(/^=== "([^"]+)"\s*$/gm)].map(m=>m[1]);
 const hasFour=labels.length===4&&labels.every((v,i)=>v===tabLabels[i]);
 const flags=[];
 if(!hasFour) flags.push("F01_NO_FOUR_TABS");
 let tabHeadings=[[],[],[],[]],guideLabels=0,duplicateSGK=0,prelude=false,
 unnumbered=0,missingHeadingNumber=0,possibleExample=0,boxFormulas=0,tables=0,remember=false;
 const body=hasFour?[raw[2],raw[4],raw[6],raw[8]]:[source];
 for(let i=0;i<body.length;i++){
   const s=body[i]||"";
   tabHeadings[i]=rawHeadings(s);
   const expected=i+1;
   if(hasFour){
     for(const h of tabHeadings[i]){
       if(h.level!==3)continue; // a true visible subheading in the native tab
       if(!new RegExp("^"+expected+"\\.[0-9]+(?:\\.|\\s)").test(h.title))missingHeadingNumber++;
       if(!/^[1-4]\.[0-9]+/.test(h.title))unnumbered++;
     }
   }
 }
 if(hasFour){
   const k=body[1],h=tabHeadings[1].filter(x=>x.level===3);
   duplicateSGK=h.filter(x=>/^Kiến thức SGK$/i.test(x.title)).length;
   if(duplicateSGK)flags.push("F02_DUPLICATE_SGK_HEADER");
   const idx=k.search(/^ {0,12}#{3}\s+/m);
   const before=idx<0?k:k.slice(0,idx);
   const clean=before.replace(/<[^>]+>/g,"").replace(/<!--[\s\S]*?-->/g,"").trim();
   prelude=clean.length>70;
   if(prelude)flags.push("F03_KNOWLEDGE_PREFACE");
   if(unnumbered>0||missingHeadingNumber>0||!/^\s*2\.1[.\s]/.test(h[0]?.title||""))
     flags.push("F04_INCONSISTENT_NUMBERING");
   const labelPattern=/\*\*(?:Kiến thức tiền đề|Bản chất trước công thức|Hướng dẫn đọc hình(?:\/sơ đồ|\/bảng)?|Hướng dẫn đọc bảng|Lý do chọn phương pháp(?:, điều kiện và giới hạn)?)[:.]/gi;
   guideLabels=(k.match(labelPattern)||[]).length;
   if(guideLabels>0)flags.push("F05_PED_CHECKLIST_VISIBLE");
   possibleExample=(k.match(/^ {0,12}#{3,4}\s+(?:Ví dụ|EX-|Bài giải)|\*\*Ví dụ\s*[0-9]*\*\*/gmi)||[]).length;
   if(possibleExample>0)flags.push("F06_POSSIBLE_SOLVED_EXAMPLE_IN_KNOWLEDGE");
   const exampleHs=tabHeadings[2].filter(x=>x.level===3);
   const exampleNums=exampleHs.filter(x=>/^3\.[0-9]+(?:[.\s])/.test(x.title)).length;
   if(exampleHs.length>0&&exampleNums!==exampleHs.length)flags.push("F07_UNNUMBERED_EXAMPLES");
   if(tabHeadings[3].filter(x=>x.level===3).some(x=>!/^4\.[0-9]+[.\s]/.test(x.title)))
     flags.push("F08_UNNUMBERED_MISTAKES");
 }else{
   // Legacy format outside G10 candidate: this is a structural migration gap,
   // not an automatic defect in the previously accepted mathematical source.
   guideLabels=(source.match(/Kiến thức tiền đề|Hướng dẫn đọc hình|Bản chất trước công thức/g)||[]).length;
 }
 boxFormulas=(source.match(/\\boxed\s*\{|math-principle|thpt-r4-math-box/gi)||[]).length;
 remember=/Kiến thức cần nhớ|Kiến thức cần ghi nhớ/i.test(source);
 tables=(source.match(/<table\b|^\s*\|[^|\n]+\|/gm)||[]).length;
 if(tables>0)flags.push("M01_TABLE_ALIGNMENT_REVIEW");
 if(boxFormulas===0)flags.push("M02_KEY_FORMULA_EMPHASIS_REVIEW");
 if(!remember)flags.push("M03_NEED_MEMORY_BOX_REVIEW");
 flags.push("S1_SECTION_MAPPING_NOT_YET_VERIFIED");
 return {
  grade,lesson:n,rel,blob:sha(source),tabs:labels,
  knowledge_h3:hasFour?tabHeadings[1].filter(h=>h.level===3).length:0,
  discovery_h3:hasFour?tabHeadings[0].filter(h=>h.level===3).length:0,
  example_h3:hasFour?tabHeadings[2].filter(h=>h.level===3).length:0,
  mistake_h3:hasFour?tabHeadings[3].filter(h=>h.level===3).length:0,
  ped_labels:guideLabels,formula_boxes:boxFormulas,table_signals:tables,
  has_memory:remember,flags,
  structural_flags:flags.filter(x=>x.startsWith("F")),
  manual_flags:flags.filter(x=>x.startsWith("M")||x.startsWith("S1"))
 };
}
function main(){
 assert.equal(route(10,1),"docs/thpt-preview/sgk/chuong-i/bai-1.md");
 assert.equal(route(10,27),"docs/thpt-preview/sgk/chuong-ix/bai-27.md");
 assert.equal(route(11,33),"docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md");
 assert.equal(route(12,19),"docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md");
 const rows=ids.map(x=>inspect(x.grade,x.lesson));
 assert.equal(rows.filter(x=>x.grade===10).length,27);
 assert.equal(rows.filter(x=>x.grade===11).length,33);
 assert.equal(rows.filter(x=>x.grade===12).length,19);
 const counts={};
 for(const row of rows)for(const f of row.flags)counts[f]=(counts[f]||0)+1;
 const summary={
  timestamp:"2026-11-12",status:"BASELINE_CENSUS_ONLY_NOT_GOLDEN_PASS",
  standard:"SLM-THPT-QUALITY-ONE v3.0.1",snapshot:"Current checked-out Git commit (see CI run head_sha)",
  lesson_count:79,classes:{10:27,11:33,12:19},
  four_tabs:rows.filter(x=>x.tabs.length===4&&x.tabs.every((l,i)=>l===tabLabels[i])).length,
  unique_git_blobs:new Set(rows.map(x=>x.blob)).size,
  structural_flags:counts,
  owner_gold_sample:"PENDING",
  s1_verified_count:0
 };
 assert.equal(summary.unique_git_blobs,79,"unexpected duplicate 79 complete source blobs");
 const lines=[
 "# Báo cáo kiểm kê biên tập SGK THPT — 79 bài (baseline)",
 "",
 "STATUS: BASELINE_CENSUS_ONLY / KHÔNG PHẢI S1 PASS / OWNER GOLDEN PENDING / NO MERGE, NO DEPLOY.",
 "SOURCE: 79 Git blobs trong commit CI đang kiểm. Không sửa toán, ID, đáp án, RD1.",
 "THAM CHIẾU: SCR-SGK-79-EDITORIAL-20261112 / Golden mẫu đề xuất.",
 "",
 "## Tổng hợp",
 "",
 "- Bài có đủ đúng bốn tab Model B hiện hành: "+summary.four_tabs+"/79.",
 "- Nguồn kiểm kê: Toán 10 = 27, Toán 11 = 33, Toán 12 = 19.",
 "- Đối chiếu đề mục SGK S1 đã thực hiện: **0/79** ở bước static auto audit. Cần xác minh sách/trang in bởi AUTHORING, không suy từ tên file.",
 "- Các cờ F = dấu hiệu cấu trúc kiểm tra bằng nguồn; M = tín hiệu cần kiểm bằng mắt/SGK, **không phải phán quyết lỗi tự động**.",
 "",
 "## Mã lỗi/tín hiệu",
 "",
 "| Mã | Diễn giải | Số bài |",
 "|---|---|---:|"
 ];
 for(const [k,v] of Object.entries(counts).sort())lines.push("| "+k+" | "+
  ({
   F01_NO_FOUR_TABS:"Không đủ 4 tab Model B đã duyệt để migrate",
   F02_DUPLICATE_SGK_HEADER:"Lặp 'Kiến thức SGK' trong tab 2",
   F03_KNOWLEDGE_PREFACE:"Đoạn mở đầu dài ở tab 2 trước đề mục",
   F04_INCONSISTENT_NUMBERING:"Đánh số 1.x–4.x không thống nhất",
   F05_PED_CHECKLIST_VISIBLE:"Nhãn kiểm toán sư phạm xen trong tab 2",
   F06_POSSIBLE_SOLVED_EXAMPLE_IN_KNOWLEDGE:"Ví dụ có thể đặt sai tab — kiểm tay",
   F07_UNNUMBERED_EXAMPLES:"Ví dụ tab 3 không theo 3.x",
   F08_UNNUMBERED_MISTAKES:"Lỗi thường gặp tab 4 không theo 4.x",
   M01_TABLE_ALIGNMENT_REVIEW:"Có bảng — kiểm căn trên/dưới và thiết bị",
   M02_KEY_FORMULA_EMPHASIS_REVIEW:"Không phát hiện khung công thức — cần phân loại SGK",
   M03_NEED_MEMORY_BOX_REVIEW:"Không thấy hộp 'Kiến thức cần nhớ' — không ép có",
   S1_SECTION_MAPPING_NOT_YET_VERIFIED:"Chưa có đối chiếu đề mục SGK/trang in"
  }[k]||"") +" | "+v+" |");
 lines.push("","## Danh sách 79 nguồn (SHA Git blob thực tại snapshot)","",
 "| Lớp | Bài | Git blob | Tab | H3 Kiến thức | F (cấu trúc) | M (cần kiểm tay) |",
 "|---|---:|---|---:|---:|---|---|");
 for(const row of rows){
   lines.push("| "+row.grade+" | "+String(row.lesson).padStart(2,"0")+" | "+
    String.fromCharCode(96)+row.blob+String.fromCharCode(96)+" | "+row.tabs.length+" | "+
    row.knowledge_h3+" | "+(row.structural_flags.join(", ")||"—")+" | "+(row.manual_flags.join(", ")||"—")+" |");
 }
 lines.push("","## Phạm vi cần thực hiện sau kiểm kê",
  "",
  "1. Chốt Golden mẫu với owner, đưa điều khoản vào chuẩn Q01–Q18 đang hiệu lực (không tạo chuẩn khác).",
  "2. AUTHORING kiểm mapping tên/đầu mục/độ sâu SGK S1 theo từng Bài/Outcome, ghi trang in. RELEASE chỉ hiển thị/QA.",
  "3. Ưu tiên G10 theo từng chương; G11/G12 vẫn HOLD cho đến owner mở phạm vi.",
  "4. Kiểm tất cả biến thể bảng, công thức quan trọng, hộp ghi nhớ, vị trí hình, ví dụ; dùng kiểm trình duyệt 390/820/1440 và thiết bị thật P2 khi yêu cầu.",
  "5. Không tự biến kết quả scan/regex thành Academic/PED PASS hay cấp quyền merge/deploy.",
  "");
 const destArg=process.argv.indexOf("--out");
 if(destArg>=0){
  assert(process.argv[destArg+1],"--out requires output directory");
  const dir=path.resolve(root,process.argv[destArg+1]);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,"Temp_THPT_SGK_79_Editorial_Inventory_20261112.md"),lines.join("\n"),"utf8");
  fs.writeFileSync(path.join(dir,"Temp_THPT_SGK_79_Editorial_Inventory_20261112.json"),JSON.stringify({summary,rows},null,2)+"\n","utf8");
 }
 console.log("SGK_EDITORIAL_BASELINE "+JSON.stringify(summary));
 for(const row of rows)console.log("INVENTORY "+row.grade+"-B"+String(row.lesson).padStart(2,"0")+" "+row.blob+" "+row.flags.join(","));
 console.log("REPORT_ONLY: 79/79 sources inspected; owner Golden and S1 mapping still pending. No automatic academic/release PASS.");
}
main();
