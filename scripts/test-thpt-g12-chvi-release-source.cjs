"use strict";
/* G12 ChVI RELEASE source-lock & Q15/Q16 preflight: no private RD1 imported. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p));
const text=p=>read(p).toString("utf8");
const gitblob=data=>crypto.createHash("sha1").update(Buffer.from("blob "+data.length+"\0")).update(data).digest("hex");
const source="prototypes/thpt/content-drafts/G12_SGK_CHVI_B18_B19_END_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const receipt="prototypes/thpt/review-packets/G12_CHVI_R00_INDEPENDENT_ACADEMIC_PED_SOURCE_RECEIPT_20261103.md";
const reviewer="prototypes/thpt/review-packets/G12_CHVI_R00_NOTEBOOKLM_INDEPENDENT_ACADEMIC_PED_VERBATIM_20261103.txt";
for(const [p,sha] of [[source,"1578efd4d2d46deb9bae064d12752d88fc3747b8"],[receipt,"c371e9f4873caa04c0c005b625316cf07ef5449a"],[reviewer,"24ee4f23655f24eff1fadd463f8c476a417faab7"]])
 assert.equal(gitblob(read(p)),sha,"Immutable review source/receipt "+p);
const bank=JSON.parse(text("docs/assets/data/thpt-g12-chvi-b18-b19-public-r00.json"));
assert.equal(bank.packet_id,"G12-SGK-CHVI-B18-B19-END-R00");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,"1578efd4d2d46deb9bae064d12752d88fc3747b8");
assert.equal(bank.receipt_blob,"c371e9f4873caa04c0c005b625316cf07ef5449a");
assert.equal(bank.items.length,56);assert.equal(new Set(bank.items.map(q=>q.item_id)).size,56);
assert.equal(new Set(bank.items.map(q=>q.outcome_id)).size,14);
for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]){
 const group=bank.items.filter(q=>q.role===role);assert.equal(group.length,14,role);
 for(const q of group)assert(q.stem&&q.answer&&q.solution&&q.item_id.match(/^THPT-G12-B(?:18|19)-[CPAW]\d\d$/),"Complete canonical item "+q.item_id);
}
assert.equal(bank.items.filter(q=>q.role==="SGK_WRITTEN"&&q.rubric?.[0]).length,14,"14 Reviewed Written /5 rubrics");
assert.equal(bank.help.length,14);
for(const h of bank.help){assert.equal(h.steps.length,5);assert(bank.items.some(q=>q.item_id===h.return_item));assert(bank.items.some(q=>q.item_id===h.practice_item));}
assert.equal(bank.end_references.length,14);
assert.equal(new Set(bank.end_references.map(x=>x.item_id)).size,14,"END placement reuses public IDs");
for(const ref of bank.end_references){const q=bank.items.find(x=>x.item_id===ref.item_id);assert(q&&q.role==="SGK_APPLICATION"&&q.outcome_id===ref.outcome_id,"END references same public item");}
const png={
 "Temp_FIG-G12-CHVI-B18-SET-R00.png":"acc91a96bf301f52976fafba76163c81e8278d1c",
 "Temp_FIG-G12-CHVI-B18-TABLE-R00.png":"2d4b4da79346d5b5fd143785bbac42e386f996fa",
 "Temp_FIG-G12-CHVI-B18-TREE-R00.png":"dbb8e6ee706487c036beafa12f179db66f82f2c8",
 "Temp_FIG-G12-CHVI-B19-BAYES-R00.png":"c5fa054cfb2e5925121323ba28433d257f8631f4",
 "Temp_FIG-G12-CHVI-B19-TOTAL-R00.png":"c5c03c36d8e8cc6ccd390583d0ce7df8aab66deb"};
for(const [name,sha] of Object.entries(png)){
 for(const prefix of ["prototypes/thpt/content-drafts/png/","docs/assets/images/thpt/"])
  assert.equal(gitblob(read(prefix+name)),sha,"5 original reviewed figure blobs "+name);
}
for(const n of [18,19]){
 const content=text("docs/thpt-preview/sgk/lop-12/chuong-vi/bai-"+n+".md");
 assert.equal((content.match(/^### (?:[^#\n]+)/gm)||[]).length,7,"Seven outcome lessons B"+n);
 assert.equal((content.match(/<details class="thpt-r4-try-reveal">/g)||[]).length,2,"Two voluntary after-try disclosures");
 assert(!/REVIEW_CANDIDATE_NOT_PASS|NOTEBOOKLM|PRIVATE_RD1|SOURCE_RECEIPT/.test(content),"No author metadata in learner lesson");
}
const modal=text("docs/assets/javascripts/thpt-g12-golden-formative-modal-v1.js");
assert(modal.includes("VI:[4,56]")&&modal.includes("[data-g12-chvi-hub]"),"Shared Golden VI only");
const client=text("docs/assets/javascripts/thpt-g12-chvi-b18-b19-r00.js");
assert(client.includes("Final Submit")&&client.includes("submitted=true")&&client.includes("for(const {q,input,result}of entries)"),"Q16 guarded submission");
assert(!/localStorage|sessionStorage|Firebase|RoadmapTutor\.run/.test(client),"Client self-check never writes Mastery or calls AI");
const mk=text("mkdocs.yml");
assert(mk.includes("thpt-g12-chvi-b18-b19-r00.js")&&mk.includes("thpt-preview/sgk/lop-12/chuong-vi/bai-19.md"),"MkDocs route & runtime wired");
const manifest=text("prototypes/thpt/release-queue/ready/G12-SGK-CHVI-B18-B19-END-R00.md");
assert(manifest.includes("STATE: CONTENT_READY")&&manifest.includes("ACADEMIC_SOURCE_BLOB: 1578efd4"),"V2 author packet not promoted to released");
console.log("PASS G12 ChVI RELEASE source lock: 56 canonical / 14 outcomes / 14 D6 / 14 END reuse / 5 PNG / no private RD1 / Final Submit client only.");
