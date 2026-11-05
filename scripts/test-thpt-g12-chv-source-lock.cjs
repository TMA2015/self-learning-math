"use strict";
/* RELEASE G12 SGK ChV R01 — immutable source/receipt, 96 PUBLIC canonical and Q16 boundary. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const base=path.resolve(__dirname,"..");
const at=p=>path.join(base,p),read=p=>fs.readFileSync(at(p),"utf8");
const blob=p=>{const b=fs.readFileSync(at(p));return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const sourcePath="prototypes/thpt/content-drafts/G12_SGK_CHV_B14_B17_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md";
const r00Path="prototypes/thpt/content-drafts/G12_SGK_CHV_B14_B17_PUBLIC_R00_SOURCE_LOCK_SOURCE_GAP.md";
const receiptPath="prototypes/thpt/review-packets/G12_CHV_R01_ACADEMIC_PED_COMPOSITE_SOURCE_RECEIPT_20261103.md";
const handoffPath="prototypes/thpt/release-handoffs/G12-SGK-CHV-B14-B17-R01_HANDOFF_V2_20261103.md";
const readyPath="prototypes/thpt/release-queue/ready/G12-SGK-CHV-B14-B17-R01.md";
const sourceSha="11eb2834cfdb4a24685157f84666c2bb0767970a";
const receiptSha="a07070119259bd0133535fc3250d008cd78d8195";
assert.equal(blob(sourcePath),sourceSha,"Unchanged AUTHORING R01 source");
assert.equal(blob(r00Path),"9e73f50efdf237ebdae8e64572e45b9b22e8dbbd","Historical R00");
assert.equal(blob(receiptPath),receiptSha,"Immutable independent composite reviewer receipt");
assert.equal(blob("prototypes/thpt/review-packets/G12_CHV_R01_B14_Q01_W01_Q06_TARGETED_NOTEBOOKLM_VERBATIM_20261103.txt"),"c06fd2e187afd6ad7e848d208f218bb044a7d690");
for(const p of [handoffPath,readyPath])assert(read(p).includes(sourceSha)&&read(p).includes(receiptSha),p+" references immutable source/receipt");
const source=read(sourcePath),receipt=read(receiptPath);
const bankText=read("docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json");
const bank=JSON.parse(bankText);
assert.equal(bank.packet_id,"G12-SGK-CHV-B14-B17-R01");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,sourceSha);
assert.equal(bank.receipt_blob,receiptSha);
assert.equal(bank.items.length,96);
assert.equal(new Set(bank.items.map(q=>q.item_id)).size,96,"No duplicated canonical ID");
assert.equal(bank.help.length,24);
assert.equal(bank.end_references.length,24);
assert.equal(new Set(bank.end_references.map(q=>q.placement_id)).size,24);
const byID=new Map(bank.items.map(q=>[q.item_id,q]));
for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"])
 assert.equal(bank.items.filter(q=>q.role===role).length,24,"Canonical role "+role);
const sourceItems=[...source.matchAll(/^#### (THPT-G12-B(14|15|16|17)-([CPAW])(\d{2})) —[^\n]*\n([\s\S]*?)(?=^#### |^### |^## |^<!-- END|$(?![\s\S]))/gm)];
assert.equal(sourceItems.length,96,"All source item blocks parsed");
const mByID=new Map(sourceItems.map(m=>[m[1],m]));
const lineValue=(block,label)=>{
 const p="- **"+label+":** ";
 const line=block.split("\n").find(s=>s.startsWith(p));
 assert(line,"Missing source field "+label);
 return line.slice(p.length).trim();
};
let rubricCount=0;
for(const q of bank.items){
 const m=mByID.get(q.item_id);
 assert(m,"Missing canonical original "+q.item_id);
 assert.equal(q.lesson_id,"B"+m[2]);
 assert.equal(q.outcome_id,"G12-CHV-B"+m[2]+"-O"+m[4]);
 assert.equal(q.role,({C:"CORE",P:"SGK_PRACTICE",A:"SGK_APPLICATION",W:"SGK_WRITTEN"})[m[3]]);
 for(const [key,label]of [["stem","Đề duy nhất"],["answer","Đáp án canonical (chỉ mở khi được phép)"],["solution","Lời giải có suy luận"]])
  assert.equal(q[key],lineValue(m[5],label),"Immutable "+key+" for "+q.item_id);
 if(q.role==="SGK_WRITTEN"){
  assert.equal(q.rubric?.length,1,"Rubric /5 "+q.item_id);
  const rubLine=m[5].split("\n").find(x=>x.startsWith("- **Rubric Written /5 (chấm theo từng bước)"));
  assert(rubLine,"Original Written rubric missing "+q.item_id);
  assert.equal(q.rubric[0],rubLine.slice(rubLine.indexOf(":** ")+4).trim());
  rubricCount++;
 }
}
assert.equal(rubricCount,24);
const sourceHelps=[...source.matchAll(/^#### (HELP-G12-B(14|15|16|17)-(\d{2})) —[^\n]*\n([\s\S]*?)(?=^#### |^### |^## |^<!-- END|$(?![\s\S]))/gm)];
assert.equal(sourceHelps.length,24);
const hByID=new Map(sourceHelps.map(m=>[m[1],m]));
for(const h of bank.help){
 const m=hByID.get(h.help_id);assert(m,"Unreviewed HELP "+h.help_id);
 assert.equal(h.outcome_id,"G12-CHV-B"+m[2]+"-O"+m[3]);
 assert.deepEqual(h.steps,m[4].split("\n").filter(x=>/^[1-5]\. \*\*/.test(x)).map(x=>x.replace(/^[1-5]\. /,"")));
 for(const [ref,role]of [[h.return_item,"CORE"],[h.practice_item,"SGK_PRACTICE"]])
  assert(byID.has(ref)&&byID.get(ref).role===role&&byID.get(ref).outcome_id===h.outcome_id);
}
const endItems=[];
for(const e of bank.end_references){
 const q=byID.get(e.item_id);
 assert(q&&q.role==="SGK_APPLICATION"&&q.outcome_id===e.outcome_id,"Bad END reuse "+e.placement_id);
 assert(source.includes(e.placement_id)&&source.includes(e.item_id),"END not source-canonical");
 endItems.push(q);
}
assert.equal(new Set(endItems.map(q=>q.item_id)).size,24);
assert.equal(endItems.filter(q=>q.optional_after_b17).length,1,"Exactly one optional END placement");
assert.equal(bank.items.filter(q=>q.optional_after_b17).length,4,"Optional C07/P07/A07/W07");
assert.equal(bank.help.filter(h=>h.optional_after_b17).length,1,"Optional HELP07");
assert.deepEqual(bank.items.filter(q=>q.optional_after_b17).map(q=>q.item_id),
 ["THPT-G12-B14-C07","THPT-G12-B14-P07","THPT-G12-B14-A07","THPT-G12-B14-W07"]);
assert(bank.items.filter(q=>q.optional_after_b17).every(q=>q.curriculum_scope==="SGK_APPLICATION_INTEGRATED_AFTER_B17"));
assert.equal(bank.optional_extension.outcome_id,"G12-CHV-B14-O07");
assert.equal(bank.optional_extension.display_after_lesson,"B17");
const chapterPath="docs/thpt-preview/sgk/lop-12/chuong-v/";
const lessonPages={};
for(const n of [14,15,16,17])lessonPages[n]=read(chapterPath+"bai-"+n+".md");
const optionalPage=read(chapterPath+"mo-rong-sau-bai-17.md");
const fieldMap=[
 ["PED1 WHY","- **Vì sao cần biết:**"],["PED2 Tiền đề","- **Kiến thức tiền đề:**"],
 ["PED3 Bản chất trước công thức","- **Bản chất trước công thức:**"],
 ["D1 Công thức/định nghĩa","- **Định nghĩa và công thức:**"],
 ["Điều kiện, giới hạn","- **Điều kiện và giới hạn:**"],
 ["PED5 Tại sao chọn cách này","- **Lý do chọn phương pháp:**"],
 ["Bẫy thường gặp","- **Bẫy cần tự phát hiện:**"],
 ["Đề ví dụ","**Đề:**"],["Lời giải theo lý do","**Lời giải có suy luận:**"]
];
let outcomes=0;
for(const match of source.matchAll(/^### (G12-CHV-B(14|15|16|17)-O\d{2}) —/gm)){
 const outcome=match[1],n=Number(match[2]),next=source.indexOf("\n### G12-CHV-",match.index+4);
 const block=source.slice(match.index,next<0?undefined:next);
 const page=outcome==="G12-CHV-B14-O07"?optionalPage:lessonPages[n];
 assert(page.includes("<!-- OUTCOME_ID: "+outcome+" -->"),"Missing outcome marker "+outcome);
 for(const [label,display]of fieldMap){
  const prefix="**"+label+":** ";
  const line=block.split("\n").find(x=>x.startsWith(prefix));
  assert(line&&page.includes(display+" "+line.slice(prefix.length)),"Learner page drift "+outcome+" "+label);
 }
 outcomes++;
}
assert.equal(outcomes,24);
assert(!lessonPages[14].includes("<!-- OUTCOME_ID: G12-CHV-B14-O07 -->"),"Optional O07 must not precede B17");
assert(optionalPage.includes("<!-- OUTCOME_ID: G12-CHV-B14-O07 -->"));
let tries=0;
for(const m of source.matchAll(/^### (B(14|15|16|17)-T\d{2}) —[^\n]*\n([\s\S]*?)(?=^### |^## |^<!-- END|$(?![\s\S]))/gm)){
 const target=m[1]==="B14-T02"?optionalPage:lessonPages[Number(m[2])];
 const line=m[3].split("\n").find(x=>x.startsWith("**Đề:** "));
 assert(line&&target.includes("<!-- FIRST_TRY_ID: "+m[1]+" -->")&&target.includes(line.slice(8)),"First Try source drift "+m[1]);
 tries++;
}
assert.equal(tries,8);
const figures={
 "Temp_FIG-G12-CHV-B14-R00.png":"5763cbd3c555a40e2644e9666611a7b4ecaa4070",
 "Temp_FIG-G12-CHV-B15-R00.png":"8991b0aaa4e532c0b7b8284608462b2286035733",
 "Temp_FIG-G12-CHV-B151-R00.png":"447205394c355531845746ccf3a2474a2e910974",
 "Temp_FIG-G12-CHV-B16-R00.png":"4dbe38abdc36744cedf69e4e411c8449d7f0b31d",
 "Temp_FIG-G12-CHV-B161-R00.png":"a6d03ef5310ad93ce2cb8cebc03ff6e54bed55fb",
 "Temp_FIG-G12-CHV-B17-R00.png":"3a87aa63ef68d3c12c170a213f7ea6a4ab719532"
};
for(const [name,sha]of Object.entries(figures)){
 assert.equal(blob("prototypes/thpt/content-drafts/png/"+name),sha);
 assert.equal(blob("docs/assets/images/thpt/"+name),sha);
 assert(receipt.includes(sha),"PNG must be in review receipt "+name);
}
const runtime=read("docs/assets/javascripts/thpt-g12-chv-b14-b17-r01.js");
const css=read("docs/assets/stylesheets/thpt-g12-chv-b14-b17-r01.css");
const config=read("mkdocs.thpt-preview.yml");
assert(runtime.includes("23 câu chính")&&runtime.includes("q.optional_after_b17")&&runtime.includes("submitted=true"));
assert(runtime.includes("../data/thpt-g12-chv-b14-b17-public-r01.json")&&!runtime.includes("b11-b13-public"));
assert(runtime.includes("b14-optional")&&runtime.includes("card.hidden=i!==cursor"));
assert(!/localStorage|sessionStorage|setDoc\(|getFirestore\(/.test(runtime),"No progress/mastery writes");
assert(!/PRIVATE_RD1|heldout_stem|protectedAnswer/.test(bankText));
assert(config.includes("assets/javascripts/thpt-g12-chv-b14-b17-r01.js")&&config.includes("assets/stylesheets/thpt-g12-chv-b14-b17-r01.css"));
assert(config.includes("chuong-v/tu-kiem-tra-chuong.md"));
assert(css.includes(".g12-chv-hub"));
console.log("PASS G12 ChV: original R01 source/receipt; 96 PUBLIC × answer/solution/rubric; 24 outcomes × 9 fields; 8 First Try; 24 HELP; 6 PNG; 23 mandatory + 1 optional END; Q16 no Mastery.");
