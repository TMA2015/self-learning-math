"use strict";
/* G12 SGK ChI R00, public-only, immutable AUTHORING V2 source lock.
 * This checks Grade 12 R1/Q15/Q16/Q18 independently from the website runtime.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),crypto=require("node:crypto");
const read=x=>fs.readFileSync(x,"utf8");
const sha=x=>{const a=fs.readFileSync(x);return crypto.createHash("sha1").update("blob "+a.length+"\0").update(a).digest("hex")};
const base="prototypes/thpt/content-drafts/";
const bank=JSON.parse(read("docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json"));
assert.equal(bank.packet_id,"G12-SGK-CHI-B01-B05-R00");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,"f0862dcdab21dec136e43969f45c42638e7c7574");
assert.equal(bank.receipt_blob,"8fef1c7dbd9b404881ff40cec8147c9ae89ef473");
const delta=bank.targeted_delta;
const expectedDeltaIds=["THPT-G12-CHI-B01-W01","THPT-G12-CHI-B01-W02"];
assert.equal(delta?.scope,"G12_B01_W01_W02_SOLUTION_ONLY");
assert.equal(delta.class,"DELTA_C_ACADEMIC_MATERIAL");
assert.deepEqual(delta.item_ids,expectedDeltaIds);
assert.equal(delta.original_source_blob,bank.source_blob);
assert.equal(delta.authoring_source_blob,"86063e922bbb883f6ae9a3d86049f60ff3fe5562");
assert.equal(delta.independent_review_blob,"9f0466b7ded7d2a7441fdc55768949536f7a680e");
assert.equal(delta.composite_receipt_blob,"39c7c98a0f311f72a7eb70b25b75d38b34998793");
assert.equal(delta.protected_rd1_new,0);assert.equal(delta.mastery,false);
const deltaChecksums=new Map([["THPT-G12-CHI-B01-W01","64ada968"],["THPT-G12-CHI-B01-W02","cf8dfbc3"]]);
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};

assert.equal(sha(base+"G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md"),bank.source_blob);
assert.equal(sha("prototypes/thpt/review-packets/G12_SGK_CHI_B01_B05_R00_INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_PASS_SOURCE_RECEIPT_20261102.md"),bank.receipt_blob);
const paths=[
"G12_SGK_CHI_B01_CONCEPT_FIRST_PUBLIC_CANONICAL_R00_AUTHOR_DRAFT_20261102.md",
"G12_SGK_CHI_B02_EXTREMA_R00_AUTHOR_DRAFT_20261102.md",
"G12_SGK_CHI_B03_ASYMPTOTES_R00_AUTHOR_DRAFT_20261102.md",
"G12_SGK_CHI_B04_FUNCTION_SURVEY_R00_AUTHOR_DRAFT_20261102.md",
"G12_SGK_CHI_B05_APPLIED_DERIVATIVE_R00_AUTHOR_DRAFT_20261102.md",
"G12_SGK_CHI_END_CHAPTER_SELF_CHECK_RD0_R00_AUTHOR_DRAFT_20261102.md"
];
const componentShas=["adf4f161ff4db1d203465b22b88da8827bf8a699","ae768307157fbfc38cb4c61443dee599197aa0f4","0143707da223a2dd476ab9cbc40d48c15b87b916","01242eea1c26fb142b3a285bb8e122c7d6ebfa18","a5abc67eb67aaf33c7954c200d836779c2da5e5b","b9dc8aa0ae1e4f36fb365df4f01b2d4d259e5d85"];
assert.deepEqual(bank.source_component_blobs,componentShas);
for(let i=0;i<paths.length;i++)assert.equal(sha(base+paths[i]),componentShas[i],paths[i]);
const sections=text=>{
 const matches=[...text.matchAll(/^## ([^\n]+)\s*$/gm)];
 return matches.map((m,i)=>({title:m[1].trim(),body:text.slice(m.index+m[0].length,i+1<matches.length?matches[i+1].index:text.length).trim()}));
};
const subheads=text=>{
 const matches=[...text.matchAll(/^### ([^\n]+)\s*$/gm)];
 return matches.map((m,i)=>({title:m[1].trim(),body:text.slice(m.index+m[0].length,i+1<matches.length?matches[i+1].index:text.length).trim()}));
};
const fields=text=>{
 const matches=[...text.matchAll(/^\*\*([^*\n]+):\*\*\s*/gm)];
 return matches.map((m,i)=>({label:m[1].trim(),value:text.slice(m.index+m[0].length,i+1<matches.length?matches[i+1].index:text.length).trim()}));
};
const byId=new Map();const byHelp=new Map();const inputs=paths.map(p=>sections(read(base+p)));
let exampleCount=0;
inputs.forEach((ss,i)=>{
 const all=ss.flatMap(x=>subheads(x.body));
 for(const item of all){
  const id=item.title.split(/\s+\|\s+/)[0].trim();
  if(/^THPT-G12-CHI-/.test(id)){assert(!byId.has(id));byId.set(id,item)}
  if(/^HELP-G12-/.test(id)){assert(!byHelp.has(id));byHelp.set(id,item)}
  if(/^EX-G12-/.test(id))exampleCount++;
 }
 const p=i<5?read("docs/thpt-preview/sgk/lop-12/chuong-i/bai-"+(i+1)+".md"):read("docs/thpt-preview/sgk/lop-12/chuong-i/tu-kiem-tra-chuong.md");
 // All body-text in each approved concept, self-try and reasoned example is unmodified.
 const relevant=ss.filter(x=>/PED1|PED2|PED3|PED6/.test(x.title));
 for(const x of relevant)assert(p.includes(x.body),"Unmodified original SGK lesson text absent: "+paths[i]+" "+x.title);
});
assert.equal(exampleCount,24);
assert.equal(byId.size,78);assert.equal(byHelp.size,36);
assert.equal(bank.items.length,78);assert.equal(bank.help.length,36);
assert.equal(new Set(bank.items.map(q=>q.item_id)).size,78);
assert.equal(new Set(bank.items.map(q=>q.outcome_id)).size,36);
const totals={};for(const q of bank.items)totals[q.lesson_id]=(totals[q.lesson_id]||0)+1;
assert.deepEqual(totals,{B01:11,B02:12,B03:14,B04:14,B05:15,END:12});
for(const q of bank.items){
 const original=byId.get(q.item_id);
 assert(original,q.item_id+" missing in original source");
 const attrs=Object.fromEntries(original.title.split(/\s+\|\s+/).slice(1).map(z=>z.split("=")));
 const fs0=fields(original.body);
 const find=rx=>fs0.find(f=>rx.test(f.label))?.value||"";
 assert.equal(q.stem,find(/^(?:Câu hỏi(?: tự luận)?|Hỏi|Đề)$/),q.item_id+" stem");
 const originalAnswer=find(/^(?:Đáp án|Đối chiếu|Author-key|Lời giải tự mở)/);
 if(deltaChecksums.has(q.item_id)){
   assert.equal(originalAnswer,"",q.item_id+" original R00 answer remains empty on locked source");
   assert(q.answer.length>120&&q.solution?.length>700,q.item_id+" target reviewed answer and D6");
   assert(q.solution.includes("**D6 sau đối chiếu:**"),q.item_id+" post-comparison remedial route");
   assert.equal(fnv(q.answer+"\\0"+q.solution),deltaChecksums.get(q.item_id),q.item_id+" exact reviewed DELTA C answer/solution");
 }else{
   assert.equal(q.answer,originalAnswer,q.item_id+" historic answer unchanged");
   assert.equal(q.solution,undefined,q.item_id+" no unrelated solution additions");
 }
 assert.equal(q.rubric,find(/^(?:Rubric tự đối chiếu|Rubric \/4)/),q.item_id+" rubric");
 assert.equal(q.outcome_id,attrs.skill_id,q.item_id+" primary outcome");
 assert.equal(q.placement,attrs.placement,q.item_id+" placement");
 assert.equal(q.role,attrs.role,q.item_id+" role");
}
for(const h of bank.help){
 const original=byHelp.get(h.help_id);assert(original,h.help_id+" source");
 assert.equal(h.body,original.body,h.help_id+" exact remediation steps");
 const attrs=Object.fromEntries(original.title.split(/\s+\|\s+/).slice(1).map(z=>z.split("=")));
 assert.equal(h.outcome_id,attrs.skill_id);
 assert.equal(h.return_item,attrs.return_item);
 const q=bank.items.find(q=>q.item_id===h.return_item);
 assert(q&&q.outcome_id===h.outcome_id,h.help_id+" D6 same-skill return");
}
const fig=[
["G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg","e2696224533994826104e6c505d9dab26fc0a2e2"],
["G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg","057991020c0f9349f160047cd87ae35ce03a87ef"],
["G12_B03_FIG01_ASYMPTOTES_R00.svg","802f01f5b8dce392e3a064a54efe33ae1aea44fc"],
["G12_B04_FIG01_RATIONAL_SURVEY_R00.svg","529b05d33fb0347dab70587c84c8ec08789c5c98"],
["G12_B04_FIG02_CUBIC_SURVEY_R00.svg","8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b"],
["G12_B05_FIG01_BOX_VOLUME_R00.svg","eacd5ba60f25d87c102917a55d314fb16d6f8341"]
];
for(const [file,gitSha]of fig){
 assert.equal(sha(base+file),gitSha,"Original figure exact source");
 assert.equal(sha("docs/assets/images/thpt/"+file),gitSha,"Published figure bytes original");
}
const root="docs/thpt-preview/sgk/lop-12/";
for(const p of ["index.md","chuong-i.md","chuong-i/luyen-tap.md",...[1,2,3,4,5].map(i=>"chuong-i/bai-"+i+".md"),"chuong-i/tu-kiem-tra-chuong.md"]){
 assert(fs.existsSync(root+p),"G12 route "+p);
}
const js=read("docs/assets/javascripts/thpt-g12-chi-b01-b05-r00.js");
const goldenJs=read("docs/assets/javascripts/thpt-g12-golden-formative-modal-v1.js");
assert(goldenJs.includes("const postCompareGate=chapter===\\"I\\""),"Reviewed G12 B01 solutions require self-attempt before reveal");
assert(goldenJs.includes("if(postCompareGate&&!state.submitted)solution.hidden=true"),"Solutions hidden before submission");
assert(goldenJs.includes("if(postCompareGate)solution.hidden=false"),"Solutions revealed only after user submits");
assert(goldenJs.includes('chapter==="I"?"4":"5"'),"Original ChI /4; other G12 /5 must remain");

assert(js.includes("data-g12-chi-hub")&&js.includes("data-g12-chi-selfcheck"));
assert(js.includes("const startHub=")&&js.includes("const groupCard="));
assert(!js.includes("const startLesson="),"No inline lesson exercise renderer");
assert(js.includes('button.dataset.g12ChiFinal=""')&&js.includes("entries.filter(x=>!x.input.value.trim()).length"));
assert(js.includes("if(button.disabled)return")&&js.includes("input.disabled=true"));
assert(!js.includes(".innerHTML")&&!js.includes("localStorage.setItem(")&&!js.includes("sessionStorage.setItem("));
for(const denied of ["SkillMastery=","SGK_CHAPTER_READINESS=","firebase.","/api/"])assert(!js.includes(denied));
for(const cf of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const y=read(cf);assert(y.includes("assets/javascripts/thpt-g12-chi-b01-b05-r00.js"));
 assert(y.includes("assets/stylesheets/thpt-g12-chi-b01-b05-r00.css"));
 assert(y.includes("thpt-preview/sgk/lop-12/chuong-i.md"));
}
const hub=read(root+"chuong-i/luyen-tap.md");
assert(hub.includes('data-g12-chi-hub'),"One chapter-wide Core/Practice page");
assert(read(root+"chuong-i.md").includes('href="luyen-tap/"'),"Chapter navigation exposes hub");
const preview=read("mkdocs.thpt-preview.yml");
assert(preview.includes("thpt-preview/sgk/lop-12/chuong-i/luyen-tap.md"),"R4 navigation exposes hub");
let originalKnowledgeCount=0;
for(let i=1;i<=5;i++){
 const p=read(root+"chuong-i/bai-"+i+".md");
 assert(!p.includes("data-g12-chi-lesson"),"No inline exercise questions on lesson B0"+i);
 assert(p.includes('href="../luyen-tap/#b0'+i+'-core"'),"Missing Core navigation B0"+i);
 assert(p.includes('href="../luyen-tap/#b0'+i+'-practice"'),"Missing Practice navigation B0"+i);
 assert(p.includes("## 6. Tự thử"),"Original novice pre-Core content retained");
 originalKnowledgeCount++;
}
const publicPractice=bank.items.filter(q=>q.lesson_id!=="END");
assert.equal(publicPractice.length,66,"Same 66 original public formative items remain");
assert.equal(bank.items.filter(q=>q.lesson_id==="END").length,12,"12 end-of-chapter protected by Q16");
assert.equal(new Set(publicPractice.map(q=>q.item_id)).size,66,"No cloned item IDs");
assert.equal(bank.help.filter(x=>x.lesson_id!=="END").length,32,"All original lesson D6 preserved");
assert(read(root+"chuong-i/tu-kiem-tra-chuong.md").includes('data-g12-chi-selfcheck="END"'));
assert(read("docs/thpt-preview/sgk/index.md").includes('data-thpt-grade="12"'));
console.log("PASS G12 ChI single canonical: 66 lesson questions in separate 5-lesson hub; 12 END; 36 D6; 6 SVG; 9 SGK routes; no inline questions/Mastery.");
