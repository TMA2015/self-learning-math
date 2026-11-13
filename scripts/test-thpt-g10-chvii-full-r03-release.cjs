#!/usr/bin/env node
"use strict";
/* RELEASE source and Q15 custody: G10 ChVII FULL R03, AUTHORING Draft #778
 * source composite Git blob 3ec28c8fb8cb0d63ea390546bba5a2edf9510e0d
 * reviewer chain c90275d306ddef83026bc2b2f25f21930ec573eb,
 * additive independently reviewed module f52d6f74e9700183240a62d4192ff42829ab6503.
 * SVG geometry RELEASE-owned, equivalent to D5 design spec a2ee2b226780b3aeff379ccb7d5eae0bde0156b5.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path");
const {expectedG10KnowledgeBlob,chviiEditorialReceiptRows,chviiContinuousReceiptRows}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const shaText=s=>{const b=Buffer.from(s);return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const gitblob=p=>shaText(read(p));
const fnv=t=>{let h=2166136261;for(let i=0;i<t.length;i++)h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const historical=[
  {
    "lesson": 19,
    "outcome": "G10-B19-NORMAL_DIRECTION",
    "id": "THPT-G10-CHVII-TRY01",
    "help": "HELP-G10-CHVII-TRY01",
    "hash": "dbd76664"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-GENERAL_POINT",
    "id": "THPT-G10-CHVII-TRY02",
    "help": "HELP-G10-CHVII-TRY02",
    "hash": "797b1284"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-PARAMETRIC",
    "id": "THPT-G10-CHVII-TRY03",
    "help": "HELP-G10-CHVII-TRY03",
    "hash": "18f0d9ca"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-TWO_POINTS",
    "id": "THPT-G10-CHVII-TRY04",
    "help": "HELP-G10-CHVII-TRY04",
    "hash": "234c9858"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-MEMBERSHIP",
    "id": "THPT-G10-CHVII-TRY05",
    "help": "HELP-G10-CHVII-TRY05",
    "hash": "8a5533bd"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-MULTISTEP",
    "id": "THPT-G10-CHVII-TRY06",
    "help": "HELP-G10-CHVII-TRY06",
    "hash": "e9a5a568"
  },
  {
    "lesson": 19,
    "outcome": "G10-B19-LINEAR_MODEL",
    "id": "THPT-G10-CHVII-TRY07",
    "help": "HELP-G10-CHVII-TRY07",
    "hash": "aaeae128"
  },
  {
    "lesson": 20,
    "outcome": "G10-B20-RELATIVE_POSITION",
    "id": "THPT-G10-CHVII-TRY08",
    "help": "HELP-G10-CHVII-TRY08",
    "hash": "e1071dfb"
  },
  {
    "lesson": 20,
    "outcome": "G10-B20-PERPENDICULAR",
    "id": "THPT-G10-CHVII-TRY09",
    "help": "HELP-G10-CHVII-TRY09",
    "hash": "f3160198"
  },
  {
    "lesson": 20,
    "outcome": "G10-B20-INTERSECTION",
    "id": "THPT-G10-CHVII-TRY10",
    "help": "HELP-G10-CHVII-TRY10",
    "hash": "e54e7518"
  },
  {
    "lesson": 20,
    "outcome": "G10-B20-DISTANCE",
    "id": "THPT-G10-CHVII-TRY11",
    "help": "HELP-G10-CHVII-TRY11",
    "hash": "55d779d2"
  },
  {
    "lesson": 20,
    "outcome": "G10-B20-ANGLE",
    "id": "THPT-G10-CHVII-TRY12",
    "help": "HELP-G10-CHVII-TRY12",
    "hash": "74daba43"
  },
  {
    "lesson": 21,
    "outcome": "G10-B21-CIRCLE_STANDARD",
    "id": "THPT-G10-CHVII-TRY13",
    "help": "HELP-G10-CHVII-TRY13",
    "hash": "9d955387"
  },
  {
    "lesson": 21,
    "outcome": "G10-B21-CIRCLE_GENERAL",
    "id": "THPT-G10-CHVII-TRY14",
    "help": "HELP-G10-CHVII-TRY14",
    "hash": "c658a6ae"
  },
  {
    "lesson": 21,
    "outcome": "G10-B21-CIRCLE_TANGENT",
    "id": "THPT-G10-CHVII-TRY15",
    "help": "HELP-G10-CHVII-TRY15",
    "hash": "651d17aa"
  },
  {
    "lesson": 21,
    "outcome": "G10-B21-CIRCLE_THROUGH_POINTS",
    "id": "THPT-G10-CHVII-TRY16",
    "help": "HELP-G10-CHVII-TRY16",
    "hash": "f642d855"
  },
  {
    "lesson": 21,
    "outcome": "G10-B21-LINE_CIRCLE_POSITION",
    "id": "THPT-G10-CHVII-TRY17",
    "help": "HELP-G10-CHVII-TRY17",
    "hash": "6cdc8d71"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-ELLIPSE_PARAMETERS",
    "id": "THPT-G10-CHVII-TRY18",
    "help": "HELP-G10-CHVII-TRY18",
    "hash": "215f30ee"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-HYPERBOLA_PARAMETERS",
    "id": "THPT-G10-CHVII-TRY19",
    "help": "HELP-G10-CHVII-TRY19",
    "hash": "bc71f5aa"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-HYPERBOLA_ASYMPTOTES",
    "id": "THPT-G10-CHVII-TRY20",
    "help": "HELP-G10-CHVII-TRY20",
    "hash": "e6d51ca6"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-PARABOLA_FOCUS",
    "id": "THPT-G10-CHVII-TRY21",
    "help": "HELP-G10-CHVII-TRY21",
    "hash": "5b965baf"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-CONIC_INTERSECTION",
    "id": "THPT-G10-CHVII-TRY22",
    "help": "HELP-G10-CHVII-TRY22",
    "hash": "752cc74f"
  },
  {
    "lesson": 22,
    "outcome": "G10-B22-CONIC_MODEL",
    "id": "THPT-G10-CHVII-TRY23",
    "help": "HELP-G10-CHVII-TRY23",
    "hash": "ff096619"
  }
],original={"19":"8c85401ded1a249fa6d62342a3b0560d352276a0","20":"4253bae511fff53803f24f6ec69364b0ae171fab","21":"23fdc71c66f562cedad4cc380dcd3d87298f9264","22":"0d991a9b461c270247899a038267058f89e5ffbe"},transfer={"ELLIPSE":"28cfcc1c","HYPERBOLA":"a8dcd830"},written={"ELLIPSE":"9c63c7a1","HYPERBOLA":"07c64571"};
const names=["Vì sao cần học","Kiến thức tiền đề","Bản chất trước công thức","Hướng dẫn đọc hình","Chọn phương pháp và giới hạn"];
const answers=["Đáp án","Lý do","Nếu chưa đúng"],all=[];
for(const n of [19,20,21,22]){
 const s=read("docs/thpt-preview/sgk/chuong-vii/bai-"+n+".md");
  // Owner Model B: source/learning path is different, but the 23 reviewed
  // canonical placements and each D6 route must be identical to old evidence.
  const modelTabs=[...s.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
  if(modelTabs.length){
   assert.deepEqual(modelTabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
     "B"+n+": owner four-tab Knowledge model");
   assert.equal(shaText(s),expectedG10KnowledgeBlob(n,original[n]),"B"+n+": candidate Git source SHA");
   const refs=historical.filter(x=>x.lesson===n);
   const spans=[...s.matchAll(/data-thpt-first-try-id="([^"]+)" data-outcome-id="([^"]+)" data-thpt-help-ref="([^"]+)"/g)];
   const originalSpans=spans.filter(m=>/^THPT-G10-CHVII-TRY\d\d$/.test(m[1]));
   assert.equal(originalSpans.length,refs.length,"B"+n+": all reviewed original Q15 placements");
   originalSpans.forEach((m,i)=>{
    const rec=refs[i];assert.equal(m[1],rec.id,"B"+n+": canonical ID changed");
    assert.equal(m[2],rec.outcome,"B"+n+": outcome mapping changed");
    assert.equal(m[3],rec.help,"B"+n+": HELP reference changed");
    assert(!all.includes(rec.id),"B"+n+": duplicated original First Try");all.push(rec.id);
    const at=s.indexOf('data-thpt-first-try-id="'+rec.id+'"');
    const next=i+1<refs.length?s.indexOf('data-thpt-first-try-id="'+refs[i+1].id+'"',at+1):s.length;
    assert(at>=0&&next>at&&/^\s*\?\?\? question "/m.test(s.slice(at,next)),
      "B"+n+": source-locked First Try lacks closed answer "+rec.id);
    const hx=s.indexOf('data-thpt-help-id="'+rec.help+'"');
    assert(hx>=0&&/^\s*\?\?\? tip "/m.test(s.slice(hx,hx+1300)),
      "B"+n+": source-locked D6 not collapsed "+rec.help);
   });
   assert(!/data-thpt-readiness|data-mastery-credit|data-mastery-write/.test(s),
     "B"+n+": Knowledge must not claim assessment or Mastery");
   continue;
  }
 const range=/<!-- G10_CHVII_FULL_R03_ALL_BEGIN -->[\s\S]*?<!-- G10_CHVII_FULL_R03_ALL_END -->\n\n/g;
 assert.equal([...s.matchAll(range)].length,1,"One full reviewed narrative section B"+n);
 assert.equal(shaText(s.replace(range,"")),original[n],"Original full S1 Knowledge, D2, D5, D6 source modified B"+n);
 const blocks=[...s.matchAll(/<!-- G10_CHVII_R03_BEGIN:(THPT-G10-CHVII-TRY\d\d) OUTCOME=(G10-B(?:19|20|21|22)-[A-Z_]+) -->([\s\S]*?)<!-- G10_CHVII_R03_END:\1 -->/g)];
 assert.equal(blocks.length,({19:7,20:5,21:5,22:6})[n],"Expected all historical PED outcomes in B"+n);
 for(const [,id,outcome,text]of blocks){
  const rec=historical.find(x=>x.id===id);
  assert(rec&&rec.lesson===n&&rec.outcome===outcome,"Q15 canonical outcome mapping "+id);
  assert(!all.includes(id),"No duplicated historical First Try "+id);all.push(id);
  assert(text.includes('data-thpt-first-try-id="'+id+'"')&&text.includes('data-thpt-help-ref="'+rec.help+'"')&&text.includes('data-thpt-help-id="'+rec.help+'"'));
  const ped=[...text.matchAll(/^\*\*([^*]+):\*\* (.*)$/gm)].filter(x=>names.includes(x[1])).map(x=>({name:x[1],val:x[2]}));
  assert.deepEqual(ped.map(x=>x.name),names,"PED1–5 labels ordered "+id);
  const q=text.match(/^\*\*Tự thử trước Core:\*\* (.*)$/m);
  const ans=[...text.matchAll(/^    \*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(x=>answers.includes(x[1])).map(x=>({name:x[1],val:x[2]}));
  assert.deepEqual(ans.map(x=>x.name),answers,"Three source answers "+id);
  const steps=[...text.matchAll(/^    [1-5]\. \*\*([^\n]+)$/gm)].map(x=>x[1]);
  assert.equal(steps.length,5,"Five exact D6 steps "+id);
  assert.equal(fnv(JSON.stringify([outcome,id,rec.help,ped.map(x=>x.val),q?.[1],ans.map(x=>x.val),steps])),rec.hash,"Academic source fingerprint changed "+id);
  assert.equal((text.match(/\?\?\? question/g)||[]).length,1,"Voluntary answer disclosure "+id);
  assert.equal((text.match(/\?\?\? tip/g)||[]).length,1,"Voluntary D6 path "+id);
 }
}
assert.equal(all.length,23);
const b22=read("docs/thpt-preview/sgk/chuong-vii/bai-22.md");
for(const tag of ["ELLIPSE","HYPERBOLA"]){
  if(b22.includes('=== "Khám phá kiến thức"')){
    const id="THPT-G10-CHVII-TRY-"+tag+"-TR01";
    const help="HELP-G10-CHVII-"+tag+"-TR01",ex="EX-G10-B22-"+tag+"-TR01";
    assert(b22.includes('data-thpt-first-try-id="'+id+'"')&&b22.includes('data-thpt-help-ref="'+help+'"')&&b22.includes('data-thpt-help-id="'+help+'"'),
      "Transfer Q15/D6 source identity "+tag);
    const editor=chviiEditorialReceiptRows().get("B22");
    if(editor){
     const newer=chviiContinuousReceiptRows().get("B22");
     if(newer){
      assert.equal(newer.baseline,editor.candidate,
        "B22 owner narrative amendment must start at original published S1 Q18 blob");
      assert.equal(gitblob("docs/thpt-preview/sgk/chuong-vii/bai-22.md"),newer.candidate,
        "B22 continuous narrative source must match exact signed follow-on Q18 receipt");
      const bridge=tag==="ELLIPSE"?"Ta có thể kiểm nghiệm thêm cách đọc hoành độ qua một mái che":
        "Tương tự, khi đã hiểu vì sao chênh lệch thời gian dẫn đến hypebol";
      assert(b22.includes(bridge),"Transfer D2 reasoning must survive as natural exposition "+tag);
      assert(!b22.includes("#### Minh họa — ")&&!b22.includes("**Tại sao là D2 mới:**"),
        "B22 must not reintroduce learner-facing microheadings or internal D2 metadata");
     }else{
      assert.equal(gitblob("docs/thpt-preview/sgk/chuong-vii/bai-22.md"),editor.candidate,
        "B22 original approved S1 Q18 source required");
      const learnerTitle=tag==="ELLIPSE"?"#### Minh họa — Kiểm tra độ hở của mái nửa elip":
        "#### Minh họa — Hai trạm phát tín hiệu";
      assert(b22.includes(learnerTitle),"Historical transfer D2 learner-facing reasoning "+tag);
     }
     assert(!b22.includes("#### Ví dụ giải có hướng dẫn — "+ex),
       "B22 internal EX identifier must not leak in learner interface");
    }else{
     assert(b22.includes("#### Ví dụ giải có hướng dẫn — "+ex),"Transfer D2 historical title "+tag);
    }
    const sourceSVG="THPT_G10_CHVII_"+tag+"_TRANSFER_D5_R00.svg";
    assert(b22.includes(sourceSVG),"Transfer D5 diagram preserved "+tag);
    const hx=b22.indexOf('data-thpt-help-id="'+help+'"');
    assert(hx>=0&&/^\s*\?\?\? tip "/m.test(b22.slice(hx,hx+1300)),
      "Transfer D6 must remain folded "+tag);
    assert(!all.includes(id),"Transfer Q15 identity duplicate "+tag);all.push(id);
    continue;
  }
 const begin="<!-- G10_CHVII_TRANSFER_BEGIN:"+tag+" -->",end="<!-- G10_CHVII_TRANSFER_END:"+tag+" -->";
 const part=b22.split(begin).length===2&&b22.split(end).length===2?b22.split(begin)[1].split(end)[0]:null;
 assert(part,"Missing reviewed transfer module "+tag);
 const id="THPT-G10-CHVII-TRY-"+tag+"-TR01",help="HELP-G10-CHVII-"+tag+"-TR01",ex="EX-G10-B22-"+tag+"-TR01";
 assert(part.includes('data-thpt-first-try-id="'+id+'"')&&part.includes('data-thpt-help-id="'+help+'"')&&part.includes("#### Ví dụ giải có hướng dẫn — "+ex),"Canonical First Try/D2/HELP labels "+tag);
 const ped=[...part.matchAll(/^\*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(x=>["Vì sao cần học","Kiến thức tiền đề","Bản chất trước công thức","Hướng dẫn đọc hình","Vì sao chọn phương pháp và giới hạn"].includes(x[1])).map(x=>x[2]);
 const stem=part.match(/^\*\*Tự thử trước Core:\*\* ([^\n]+)$/m)?.[1];
 const answer=part.match(/\?\?\? question "[^"]+"\s+    ([^\n]+)/)?.[1];
 const example=part.match(/#### Ví dụ giải có hướng dẫn — EX-G10-B22-[A-Z]+-TR01\s+([\s\S]*?)<span id="help-g10-chvii-/i)?.[1]?.trim();
 const steps=[...part.matchAll(/^    [1-5]\. \*\*([^\n]+)$/gm)].map(x=>x[1]);
 assert.equal(ped.length,5,"Transfer PED1–5 "+tag);assert.equal(steps.length,5,"Five transfer D6 "+tag);
 const h=fnv(JSON.stringify([tag,id,ex,"THPT-G10-CHVII-W22-"+tag+"-TR01",help,ped,stem,answer,example,steps]));
 assert.equal(h,transfer[tag],"Transfer independently reviewed source changed "+tag);
 assert(part.includes('data-thpt-reviewed-d5="FIG-G10-CHVII-'+tag+'-TR01"'),"Reviewed D5 figure placement "+tag);
 all.push(id);
}
assert.equal(all.length,25);assert.equal(new Set(all).size,25);
const oldWritten="docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md",w=read(oldWritten);
const wRange=/\n<!-- G10_CHVII_TRANSFER_WRITTEN_ALL_BEGIN -->[\s\S]*?<!-- G10_CHVII_TRANSFER_WRITTEN_ALL_END -->\n/;
assert(wRange.test(w));assert.equal(shaText(w.replace(wRange,"")),"ebc70018a168998c7dd43b34c3e195a2b1e15ed7","Four historic Written must remain exact");
for(const tag of ["ELLIPSE","HYPERBOLA"]){
 const id="THPT-G10-CHVII-W22-"+tag+"-TR01";
 const begin="<!-- G10_CHVII_TRANSFER_WRITTEN_BEGIN:"+id+" -->",end="<!-- G10_CHVII_TRANSFER_WRITTEN_END:"+id+" -->";
 const html=w.split(begin).length===2&&w.split(end).length===2?w.split(begin)[1].split(end)[0]:null;
 assert(html&&html.includes('data-thpt-written-canonical="'+id+'"')&&(html.match(/<details>/g)||[]).length===2,"One canonical new Written and optional hint + solution "+id);
 assert(!/<details[^>]+open/.test(html),"No automatic answer/rubric exposure "+id);
}
for(const [p,sha]of [
 ["docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js","2b191d7abba7a4f5bd79d4c122673cd53a45495b"],
 ["docs/assets/data/thpt-g10-readiness/CHVII.json","113e291ecf9e2e3258e6bf573b87b53b02372ca6"]])assert.equal(gitblob(p),sha,"Frozen historical public item source mutated: "+p);
const self=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHVII.json"));assert.equal(self.items.length,22);assert.equal(self.mastery_credit,false);assert.equal(self.persist_results,false);
const svgs=["ELLIPSE","HYPERBOLA"].map(k=>"docs/assets/images/thpt/THPT_G10_CHVII_"+k+"_TRANSFER_D5_R00.svg");
for(const file of svgs){const s=read(file);assert(/<svg[\s\S]*<\/svg>/.test(s)&&s.includes("<desc")&&s.includes("viewBox")&&!s.includes("<script"),"Accessible static reviewed-geometry SVG "+file)}
if(process.argv.includes("--built")){
 for(const n of [19,20,21,22]){
  const html=read("site/thpt-preview/sgk/chuong-vii/bai-"+n+"/index.html");
  const expected=({19:7,20:5,21:5,22:8})[n];
  assert.equal((html.match(/data-thpt-first-try-id="THPT-G10-CHVII-TRY/g)||[]).length,expected,"Built distinct First Try "+n);
  assert(!html.includes("??? question")&&!html.includes("??? tip"),"Raw disclosure leaked B"+n);
 }
 const html=read("site/thpt-preview/thu-vien/tu-luan-chuong-vii/index.html");
 for(const tag of ["ELLIPSE","HYPERBOLA"])assert(html.includes('data-thpt-written-canonical="THPT-G10-CHVII-W22-'+tag+'-TR01"'),"Built new Written "+tag);
 for(const f of svgs)assert(fs.existsSync(path.join(root,"site",f.replace("docs/",""))),"Built D5 SVG asset "+f);
}
console.log("PASS G10 ChVII FULL R03: 23 historic +2 transfer canonical First Try/5-step D6, two D2, two D5 SVG, two new Written post-attempt, frozen 32 formative/4 Written/22 client Q16, no private RD1/Mastery.");
