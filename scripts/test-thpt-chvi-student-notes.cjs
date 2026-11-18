#!/usr/bin/env node
"use strict";
// ChVI student-first lesson information: editorial review logs must not leak into student HTML.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const crypto=require("node:crypto");
const {chviExampleUxReceiptRows}=require("./thpt-q18-g10-source-receipt.cjs");
const banned=/NOTEBOOKLM|ACADEMIC_CLEARANCE|SNAPSHOT_PASS|TÍCH HỢP ĐANG QA|BÀI MẪU R4|Chỉ là bài học trình diễn|chờ review delta|Giới hạn nguồn và phát hành|chưa có cấp phép phát hành website/i;
const pedagogical={15:"Khái niệm hàm số",16:"Chuyển động theo phương thẳng đứng",17:"Bất phương trình có tham số",18:"nghiệm ngoại lai"};
const built=process.argv.includes("--built");
for(const [lesson,anchor] of Object.entries(pedagogical)){
 const source=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 assert(source.includes(anchor),"B"+lesson+" lost pedagogical content");
 assert(!banned.test(source),"B"+lesson+" has project management text in lesson");
 assert(source.includes('thpt-r4-eyebrow')&&source.includes('thpt-r4-lead'),"B"+lesson+" lacks learner intro");
 assert(!source.includes("!!! warning"),"B"+lesson+" contains an old alarming review callout");
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const start=html.indexOf('<article class="md-content__inner md-typeset">'),end=html.indexOf("</article>",start);
  assert(start>=0&&end>start,"B"+lesson+" compiled article missing");
  const article=html.slice(start,end);
  assert(!banned.test(article),"B"+lesson+" published student article leaks review metadata");
  assert(!article.includes('class="admonition warning"'),"B"+lesson+" student page still has large admin warning");
  if(lesson==="17"){
   const ux=chviExampleUxReceiptRows().get("B17");
   if(ux){
    const raw=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-17.md"));
    const sha=crypto.createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
    assert.equal(sha,ux.candidate,"B17 student-first note must match signed UX candidate source");
    const label="Nếu hệ số bậc hai cũng phụ thuộc tham số thì sao?";
    const summaries=[...article.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)]
     .filter(m=>m[1].includes(label));
    assert.equal(summaries.length,1,"B17 learner-facing coefficient note must occur exactly once");
    const noteStart=article.lastIndexOf("<details",summaries[0].index);
    const opening=article.slice(noteStart,article.indexOf(">",noteStart)+1);
    assert(noteStart>=0&&/class="[^"]*(?:question|tip)[^"]*"/.test(opening),
      "B17 voluntary extension remains native accessible disclosure");
    assert(!/<details\b[^>]*\sopen(?:\s|=|>)/.test(opening),
      "B17 optional student note must remain closed by default");
    const noteEnd=article.indexOf("</details>",summaries[0].index);
    assert(noteEnd>summaries[0].index,"B17 learner condition note body missing");
    const note=article.slice(noteStart,noteEnd);
    assert(note.includes("hệ số của x² khác 0")&&note.includes("bậc nhất hoặc hằng số")&&
     note.includes("biệt thức Δ"),"B17 note must explain the a(m)=0 mathematical boundary");
    assert(!/phạm vi Core|outcome Core|SGK trang 24|SBT trang 17|phần nâng cao|được đặt ở phần/.test(note),
     "B17 management/review metadata leaked in student-facing coefficient note");
   }else{
   // Model B uses the native MkDocs question/tip <details> wrapper instead
   // of the prior custom-class wrapper. Identify this exact S1 scope note by
   // its UNIQUE learner-visible summary, then verify its full original text.
   const label="Lưu ý về phạm vi Core và mở rộng của bài toán tham số";
   const summaries=[...article.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)]
     .filter(m=>m[1].includes(label));
   assert.equal(summaries.length,1,
     "B17 original S1 fixed-a extension note must remain exactly once beside 5 First Tries and 5 D6");
   const noteStart=article.lastIndexOf("<details",summaries[0].index);
   const opening=article.slice(noteStart,article.indexOf(">",noteStart)+1);
   assert(noteStart>=0&&/class="[^"]*(?:question|tip)[^"]*"/.test(opening),
     "B17 reviewed note must render as a native default-closed details box");
   assert(!/<details\b[^>]*\sopen(?:\s|=|>)/.test(opening),"B17 note must begin collapsed");
   const noteEnd=article.indexOf("</details>",summaries[0].index);
   assert(noteEnd>summaries[0].index,"B17 approved R02 note missing");
   const note=article.slice(noteStart,noteEnd);
   assert(note.includes("hệ số bậc hai a cố định khác 0")
       &&note.includes("thuộc phạm vi vận dụng kiến thức Core"),
       "B17 R02: fixed nonzero leading coefficient must be Core application");
   assert(note.includes("Nếu a phụ thuộc tham số và có thể bằng 0")
       &&note.includes("phần nâng cao"),
       "B17 R02: variable leading coefficient a=0 must be specialized");
   assert(note.includes("SGK trang 24, bài 6.17")
       &&note.includes("SBT trang 17 Ví dụ 3 và trang 18 bài 6.24"),
       "B17 R02: exact original S1 source citations missing");
   assert(!note.includes("Phần bất phương trình có tham số là nội dung luyện tập mở rộng"),
       "B17 R02: prior blanket non-Core tier wording reintroduced");
   }
  }
 }
 console.log("PASS B"+lesson+" student-first notes"+(built?" compiled HTML":""));
}
