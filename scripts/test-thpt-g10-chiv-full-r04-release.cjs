#!/usr/bin/env node
"use strict";
/* RELEASE custody G10 ChIV FULL R04 — immutable AUTHORING #778 source d8020a23db8ec8465f5361e3c9834cdb6a55538e
 * Independent review 7584ccdbf246db49f67b7ada208698d2b0aeeeee
 * Corrected R01 figures PDF SHA256 d4804fd7b037afee5560097c1844139de9f8911dde95e10fc6ebbd84d05a60e5
 * Q07/PED4 PASS receipt Git blob fa7b89f93b7632bec18910c4dad3fa9fe698e7b8.
 * Never render R00 wrong-arrowhead force/river drawings. No RD1/Mastery.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path");
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const sha=t=>{const b=Buffer.from(t);return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const gitblob=p=>sha(read(p));
const fnv=t=>{let h=2166136261;for(let i=0;i<t.length;i++)h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const records=[
  {
    "lesson": 7,
    "outcome": "G10-B07-DEFINITION",
    "id": "THPT-G10-CHIV-TRY01",
    "help": "HELP-G10-B07-01",
    "hash": "59a82717"
  },
  {
    "lesson": 7,
    "outcome": "G10-B07-LENGTH",
    "id": "THPT-G10-CHIV-TRY02",
    "help": "HELP-G10-B07-02",
    "hash": "03c2130c"
  },
  {
    "lesson": 7,
    "outcome": "G10-B07-DIRECTION",
    "id": "THPT-G10-CHIV-TRY03",
    "help": "HELP-G10-B07-02",
    "hash": "b183ac9c"
  },
  {
    "lesson": 7,
    "outcome": "G10-B07-EQUALITY",
    "id": "THPT-G10-CHIV-TRY04",
    "help": "HELP-G10-B07-02",
    "hash": "f0002f94"
  },
  {
    "lesson": 7,
    "outcome": "G10-B07-ZERO",
    "id": "THPT-G10-CHIV-TRY05",
    "help": "HELP-G10-B07-02",
    "hash": "47f8ac09"
  },
  {
    "lesson": 8,
    "outcome": "G10-B08-TRIANGLE",
    "id": "THPT-G10-CHIV-TRY06",
    "help": "HELP-G10-B08-01",
    "hash": "56349619"
  },
  {
    "lesson": 8,
    "outcome": "G10-B08-PARALLELOGRAM",
    "id": "THPT-G10-CHIV-TRY07",
    "help": "HELP-G10-B08-02",
    "hash": "3927d828"
  },
  {
    "lesson": 8,
    "outcome": "G10-B08-OPPOSITE-SUBTRACTION",
    "id": "THPT-G10-CHIV-TRY08",
    "help": "HELP-G10-B08-01",
    "hash": "0cc7054b"
  },
  {
    "lesson": 8,
    "outcome": "G10-B08-MIDPOINT",
    "id": "THPT-G10-CHIV-TRY09",
    "help": "HELP-G10-B08-02",
    "hash": "153c1422"
  },
  {
    "lesson": 8,
    "outcome": "G10-B08-CENTROID",
    "id": "THPT-G10-CHIV-TRY10",
    "help": "HELP-G10-B08-02",
    "hash": "88ac180a"
  },
  {
    "lesson": 9,
    "outcome": "G10-B09-SCALAR_DEFINITION",
    "id": "THPT-G10-CHIV-TRY11",
    "help": "HELP-G10-B09-01",
    "hash": "13a42cf9"
  },
  {
    "lesson": 9,
    "outcome": "G10-B09-LENGTH_DIRECTION",
    "id": "THPT-G10-CHIV-TRY12",
    "help": "HELP-G10-B09-01",
    "hash": "0dcd92f8"
  },
  {
    "lesson": 9,
    "outcome": "G10-B09-DISTRIBUTION",
    "id": "THPT-G10-CHIV-TRY13",
    "help": "HELP-G10-B09-01",
    "hash": "9e77da47"
  },
  {
    "lesson": 9,
    "outcome": "G10-B09-COLLINEAR",
    "id": "THPT-G10-CHIV-TRY14",
    "help": "HELP-G10-B09-01",
    "hash": "f7e2c531"
  },
  {
    "lesson": 9,
    "outcome": "G10-B09-MIDPOINT_CENTROID",
    "id": "THPT-G10-CHIV-TRY15",
    "help": "HELP-G10-B09-02",
    "hash": "ad102ef0"
  },
  {
    "lesson": 10,
    "outcome": "G10-B10-VECTOR_COORDS",
    "id": "THPT-G10-CHIV-TRY16",
    "help": "HELP-G10-B10-01",
    "hash": "c867d68a"
  },
  {
    "lesson": 10,
    "outcome": "G10-B10-OPERATIONS",
    "id": "THPT-G10-CHIV-TRY17",
    "help": "HELP-G10-B10-01",
    "hash": "e9aa7e7e"
  },
  {
    "lesson": 10,
    "outcome": "G10-B10-NORM_DISTANCE",
    "id": "THPT-G10-CHIV-TRY18",
    "help": "HELP-G10-B10-01",
    "hash": "07c093a2"
  },
  {
    "lesson": 10,
    "outcome": "G10-B10-COLLINEAR_COORDS",
    "id": "THPT-G10-CHIV-TRY19",
    "help": "HELP-G10-B10-02",
    "hash": "a17f4656"
  },
  {
    "lesson": 10,
    "outcome": "G10-B10-MIDPOINT_CENTROID",
    "id": "THPT-G10-CHIV-TRY20",
    "help": "HELP-G10-B10-02",
    "hash": "e79d4f3d"
  },
  {
    "lesson": 11,
    "outcome": "G10-B11-GEOMETRIC_DOT",
    "id": "THPT-G10-CHIV-TRY21",
    "help": "HELP-G10-B11-02",
    "hash": "0e00cc30"
  },
  {
    "lesson": 11,
    "outcome": "G10-B11-COORDINATE_DOT",
    "id": "THPT-G10-CHIV-TRY22",
    "help": "HELP-G10-B11-01",
    "hash": "7ed7c019"
  },
  {
    "lesson": 11,
    "outcome": "G10-B11-PERPENDICULAR",
    "id": "THPT-G10-CHIV-TRY23",
    "help": "HELP-G10-B11-01",
    "hash": "fcc319df"
  },
  {
    "lesson": 11,
    "outcome": "G10-B11-APPLICATION",
    "id": "THPT-G10-CHIV-TRY24",
    "help": "HELP-G10-B11-02",
    "hash": "cef36e5d"
  }
];
const original={7:"fc4e427314092e1d744bd9ff4fba2f3a909afde1",8:"c5724953a5d866dc994380079b5515c731567dce",9:"355fcefb56f747939b3f6dd2020cb7d6779054fb",10:"4fb41cfb430edbf2434ab46ef521cbe06afb303e",11:"4b45cd8d1d76b7e3d1904cc995d4c792543d21f0"};
const names=["Vì sao cần học","Kiến thức cần nhớ trước","Hiểu bản chất trước công thức","Đọc hình như thế nào","Chọn phương pháp và giới hạn","Tự thử trước Core"];
const ansNames=["Kết quả","Vì sao","Đường tự sửa nếu mắc lỗi"],seen=[];
for(const n of [7,8,9,10,11]){
 const path="docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md",s=read(path);
  // Candidate Model B replaces historical comment boundaries with 4 tabs.
  // Preserve original canonical First Try/outcome/D6 and source Git blob;
  // the historical bounded-FNV verification below stays unchanged for old pages.
  const tabs=[...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
  if(tabs.length){
   assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
     "B"+n+": four exact owner Knowledge tabs");
   assert.equal(sha(s),expectedG10KnowledgeBlob(n,original[n]),"B"+n+": candidate source blob drift");
   const originalRecords=records.filter(x=>x.lesson===n);
   const matches=[...s.matchAll(/data-thpt-first-try-id="([^"]+)" data-outcome-id="([^"]+)" data-thpt-help-ref="([^"]+)"/g)]
      .filter(x=>/^THPT-G10-CHIV-TRY\d\d$/.test(x[1]));
   assert.equal(matches.length,originalRecords.length,"B"+n+": reviewed First Try coverage changed");
   matches.forEach((m,i)=>{
    const rec=originalRecords[i];
    assert.equal(m[1],rec.id,"B"+n+": canonical item ID/order changed");
    assert.equal(m[2],rec.outcome,"B"+n+": original outcome changed");
    assert.equal(m[3],rec.help,"B"+n+": D6 binding changed");
    assert(!seen.includes(rec.id),"B"+n+": duplicate canonical First Try");seen.push(rec.id);
    const at=s.indexOf('data-thpt-first-try-id="'+rec.id+'"');
    const next=i+1<originalRecords.length?
      s.indexOf('data-thpt-first-try-id="'+originalRecords[i+1].id+'"',at+1):s.length;
    assert(at>=0&&next>at&&/^\s*\?\?\? question "/m.test(s.slice(at,next)),
      "B"+n+": closed answer missing "+rec.id);
    const helpAt=s.indexOf('data-thpt-help-id="'+rec.help+'"');
    assert(helpAt>=0&&/^\s*\?\?\? tip "/m.test(s.slice(helpAt,helpAt+1900)),
      "B"+n+": canonical D6 help must be closed "+rec.help);
   });
   assert.equal((s.match(/^    \?\?\? question "/gm)||[]).length,
     originalRecords.length+(n===10||n===11?1:0),"B"+n+": answer fold counts");
   for(const i of [1,2])assert.equal(
     (s.match(new RegExp('data-thpt-help-id="HELP-G10-B'+String(n).padStart(2,"0")+'-0'+i+'"','g'))||[]).length,1,
     "B"+n+": original D6 identity lost");
   assert(!/data-thpt-readiness|data-mastery-credit|data-mastery-write/.test(s),
     "B"+n+": Knowledge cannot activate official assessment/Mastery");
   continue;
  }
 const bounded=/<!-- G10_CHIV_FULL_R04_ALL_BEGIN -->[\s\S]*?<!-- G10_CHIV_FULL_R04_ALL_END -->\n\n/g;
 assert.equal([...s.matchAll(bounded)].length,1,"One bounded source-locked pedagogy section B"+n);
 const afterB11=/<!-- G10_CHIV_POST_B11_TRANSFER_ALL_BEGIN -->[\s\S]*?<!-- G10_CHIV_POST_B11_TRANSFER_ALL_END -->\n\n/g;
 assert.equal([...s.matchAll(afterB11)].length,n===11?1:0,
   "Reviewed force application must be placed only after B11 lesson and before continuing");
 if(n===11){
   assert(s.indexOf("## 4. Tự khắc phục lỗi thường gặp")<s.indexOf("<!-- G10_CHIV_POST_B11_TRANSFER_ALL_BEGIN -->")&&
     s.indexOf("<!-- G10_CHIV_POST_B11_TRANSFER_ALL_END -->")<s.indexOf("## 5. Tiếp tục"),
     "FORCE requires B11 dot-product prerequisites and must be AFTER complete B11 lesson, not before Core");
 }
 assert.equal(sha(s.replace(bounded,"").replace(afterB11,"")),original[n],"Original S1 Knowledge D2 D5 D6 changed B"+n);
 const blocks=[...s.matchAll(/<!-- G10_CHIV_R04_BEGIN:(THPT-G10-CHIV-TRY\d\d) OUTCOME=(G10-B(?:07|08|09|10|11)-[A-Z_-]+) -->([\s\S]*?)<!-- G10_CHIV_R04_END:\1 -->/g)];
 assert.equal(blocks.length,({7:5,8:5,9:5,10:5,11:4})[n],"Original 24 distinct outcome paths partition B"+n);
 for(const [,id,outcome,text]of blocks){
  const rec=records.find(x=>x.id===id);
  assert(rec&&rec.lesson===n&&rec.outcome===outcome,"Canonical placement "+id);
  assert(!seen.includes(id),"Q15 no duplicate "+id);seen.push(id);
  assert(text.includes('data-thpt-first-try-id="'+id+'"')&&text.includes('data-outcome-id="'+outcome+'"')&&text.includes('data-thpt-help-ref="'+rec.help+'"'),"Canonical item/outcome/HELP "+id);
  const ped=[...text.matchAll(/^\*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(x=>names.includes(x[1])).map(x=>({name:x[1],val:x[2]}));
  assert.deepEqual(ped.map(x=>x.name),names,"PED1–PED6 complete and ordered "+id);
  const answers=[...text.matchAll(/^    \*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(x=>ansNames.includes(x[1])).map(x=>({name:x[1],val:x[2]}));
  assert.deepEqual(answers.map(x=>x.name),ansNames,"Approved result/why/remedy disclosed "+id);
  assert.equal(fnv(JSON.stringify([outcome,id,rec.help,ped.map(x=>x.val),answers.map(x=>x.val)])),rec.hash,"Approved text fingerprint differs "+id);
  assert.equal((text.match(/\?\?\? question/g)||[]).length,1,"Exactly one voluntary solution fold "+id);
 }
 for(const i of [1,2])assert.equal((s.match(new RegExp('data-thpt-help-id="HELP-G10-B'+String(n).padStart(2,"0")+'-0'+i+'"','g'))||[]).length,1,
 "Existing original reviewer D6 remains canonical B"+n+"-"+i);
}
assert.equal(seen.length,24);assert.equal(new Set(seen).size,24);
// Both transfer cases have a reviewed Additive R00 academic text and corrected R01 diagram geometry.
const transfer={FORCE:{lesson:11,stem:"THPT-G10-CHIV-TRY-FORCE-TR01",outcome:"G10-B11-GEOMETRIC_DOT",help:"HELP-G10-CHIV-FORCE-TR01",ex:"EX-G10-B08-FORCE-TR01",written:"THPT-G10-CHIV-W08-FORCE-TR01",hash:"8af67a69"},
 RIVER:{lesson:10,stem:"THPT-G10-CHIV-TRY-RIVER-TR01",outcome:"G10-B10-OPERATIONS",help:"HELP-G10-CHIV-RIVER-TR01",ex:"EX-G10-B10-RIVER-TR01",written:"THPT-G10-CHIV-W10-RIVER-TR01",hash:"debe3fa6"}};
const pedNames=["Vì sao cần học","Kiến thức tiền đề","Hiểu bản chất trước công thức","Hướng dẫn đọc hình","Chọn phương pháp và giới hạn"];
for(const [tag,rec]of Object.entries(transfer)){
  const modelB=read("docs/thpt-preview/sgk/chuong-iv/bai-"+rec.lesson+".md");
  if(modelB.includes('=== "Khám phá kiến thức"')){
   assert(modelB.includes('data-thpt-first-try-id="'+rec.stem+'"')&&
     modelB.includes('data-outcome-id="'+rec.outcome+'"')&&
     modelB.includes('data-thpt-help-ref="'+rec.help+'"')&&
     modelB.includes('data-thpt-help-id="'+rec.help+'"'),
     "Transfer source canonical Q15/outcome/D6 "+tag);
   assert(modelB.includes("#### Ví dụ có hướng dẫn — "+rec.ex),
     "Transfer worked method D2 "+tag);
   assert(modelB.includes("THPT_G10_CHIV_"+tag+"_TRANSFER_D5_R01_CORRECTED.svg"),
     "Transfer reviewed vector geometry D5 "+tag);
   const at=modelB.indexOf('data-thpt-first-try-id="'+rec.stem+'"');
   const h=modelB.indexOf('data-thpt-help-id="'+rec.help+'"',at);
   assert(at>=0&&h>at&&/^\s*\?\?\? question "/m.test(modelB.slice(at,h)),
     "Transfer result must stay default-closed "+tag);
   assert(/^\s*\?\?\? tip "/m.test(modelB.slice(h,h+1800)),
     "Transfer D6 must stay default-closed "+tag);
   continue;
  }
 const s=read("docs/thpt-preview/sgk/chuong-iv/bai-"+rec.lesson+".md"),begin="<!-- G10_CHIV_TRANSFER_BEGIN:"+tag+" -->",end="<!-- G10_CHIV_TRANSFER_END:"+tag+" -->";
 assert.equal(s.split(begin).length,2);assert.equal(s.split(end).length,2);
 const block=s.split(begin)[1].split(end)[0];
 assert(block.includes('data-thpt-first-try-id="'+rec.stem+'"')&&block.includes('data-thpt-help-id="'+rec.help+'"')&&block.includes('data-outcome-id="'+rec.outcome+'"'),"Correct transfer and outcome placement "+tag);
 const ped=[...block.matchAll(/^\*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(m=>pedNames.includes(m[1])).map(m=>({label:m[1],v:m[2]}));
 assert.deepEqual(ped.map(x=>x.label),pedNames,"Five reviewer verbatim transfer pedagogies "+tag);
 const stem=block.match(/^\*\*Tự thử trước Core:\*\* ([^\n]+)$/m)?.[1];
 const ans=block.match(/\?\?\? question "[^"]+"\s+    ([^\n]+)/)?.[1];
 const example=block.match(/#### Ví dụ có hướng dẫn — EX-G10-B(?:08|10)-(?:FORCE|RIVER)-TR01\s+([\s\S]*?)<span id="help-g10-chiv-/i)?.[1]?.trim();
 const steps=[...block.matchAll(/^    [1-5]\. \*\*([^\n]+)$/gm)].map(m=>m[1]);
 assert.equal(steps.length,5,"Five-step independent D6 "+tag);
 assert.equal(fnv(JSON.stringify([tag,rec.stem,rec.ex,rec.written,rec.help,ped.map(x=>x.v),stem,ans,example,steps])),rec.hash,"Source locked transfer text changed "+tag);
 assert(block.includes('data-thpt-reviewed-d5="FIG-G10-CHIV-'+tag+'-TR01"'),"Corrected R01 source reviewed diagram placement "+tag);
}
const written=[
 ["docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b07-b08.md","1abf99f02c572c47006cba16976cd256aa05ce85","THPT-G10-CHIV-W08-FORCE-TR01","eb4fd345",3],
 ["docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11.md","cf1257a8a8061e3312e370c888fcf69c7737c0c0","THPT-G10-CHIV-W10-RIVER-TR01","62c136dd",4]];
for(const [p,original,id,hash,count]of written){
 const s=read(p),begin="<!-- G10_CHIV_R04_WRITTEN_ALL_BEGIN -->",end="<!-- G10_CHIV_R04_WRITTEN_ALL_END -->\n";
 assert.equal(s.split(begin).length,2);assert.equal(s.split(end).length,2);
 const old=s.replace(/<!-- G10_CHIV_R04_WRITTEN_ALL_BEGIN -->[\s\S]*?<!-- G10_CHIV_R04_WRITTEN_ALL_END -->\n/,"");
 assert.equal(sha(old),original,"Original historic Written source changed "+p);
 const b="<!-- G10_CHIV_R04_WRITTEN_BEGIN:"+id+" -->",e="<!-- G10_CHIV_R04_WRITTEN_END:"+id+" -->";
 assert(s.includes(b)&&s.includes(e),"Source-reviewed canonical new Written "+id);
 const section=s.split(b)[1].split(e)[0];
 assert.equal(fnv(section),hash,"New Written answer/rubric content changed "+id);
 assert.equal((section.match(/<details>/g)||[]).length,2,"Separate voluntary hint and solution/rubric "+id);
 assert(!/<details[^>]* open/.test(section),"No pre-open hint/answer/rubric "+id);
 assert(section.includes("<table>")&&section.includes('data-thpt-written-canonical="'+id+'"'),"One four-point rubric and one canonical item "+id);
 assert.equal((s.match(/data-thpt-written-canonical="/g)||[]).length,count,"Original Written +1 only "+p);
}
for(const [p,old]of [
 ["docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js","028fb4c053ed08863ca4ba3110d104b46708da0c"],
 ["docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js","713e6a97b95c2c807c8b76045b324bdddf1a6737"],
 ["docs/assets/data/thpt-g10-readiness/CHIV.json","55b2753c04cffff897947d7007bdc860bc19fcfb"]]){
 assert.equal(gitblob(p),old,"Historic formative and Q16 bank MUST remain immutable: "+p);
}
const bank=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHIV.json"));
assert.equal(bank.items.length,21);assert.equal(bank.mastery_credit,false);assert.equal(bank.persist_results,false);
assert(read("docs/thpt-preview/sgk/chuong-iv/tu-kiem-tra-chuong.md").includes('data-g10-chapter-selfcheck="CHIV"'));
for(const [p,hash]of [
 ["docs/assets/images/thpt/THPT_G10_CHIV_FORCE_TRANSFER_D5_R01_CORRECTED.svg","1718bdd8d36d4ba4dfdffce38051a43fc546473f"],
 ["docs/assets/images/thpt/THPT_G10_CHIV_RIVER_TRANSFER_D5_R01_CORRECTED.svg","5c5fcf8adf4d4e0ded4b84c7ffc5364f5f6ca80f"]]){
 assert.equal(gitblob(p),hash,"Corrected R01 vector geometry RELEASE SVG must not drift "+p);
 const t=read(p);assert(t.includes("<desc")&&t.includes('orient="auto"')&&t.includes('marker-end=')&&!/<script\b/i.test(t),"Accessible static corrected vector arrows "+p);
}
if(process.argv.includes("--built")){
 for(const [n,c]of [[7,5],[8,5],[9,5],[10,6],[11,5]]){
  const html=read("site/thpt-preview/sgk/chuong-iv/bai-"+n+"/index.html");
  assert.equal((html.match(/data-thpt-first-try-id="THPT-G10-CHIV-TRY/g)||[]).length,c,"All built first tries B"+n);
  assert(!html.includes("??? question")&&!html.includes("??? tip"),"Raw Markdown disclosures leaked B"+n);
 }
 for(const [, ,id]of written)assert(read("site/thpt-preview/thu-vien/"+(id.includes("W08")?"tu-luan-chuong-iv-b07-b08":"tu-luan-chuong-iv-b09-b11")+"/index.html").includes('data-thpt-written-canonical="'+id+'"'),"New Written not built "+id);
 for(const f of ["FORCE","RIVER"])assert(fs.existsSync(path.join(root,"site/assets/images/thpt/THPT_G10_CHIV_"+f+"_TRANSFER_D5_R01_CORRECTED.svg")),"Missing corrected built SVG "+f);
}
console.log("PASS G10 ChIV FULL R04: 24 source locked PED/First Try + two reviewed transfer, corrected R01 arrowhead D5, two Written, 21 client Final Submit, 45 old formative/Written frozen; no RD1/Mastery.");
