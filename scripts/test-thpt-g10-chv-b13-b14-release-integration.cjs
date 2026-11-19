"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const gitBlob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md";
const raw=fs.readFileSync(sourcePath);
assert.equal(gitBlob(raw),"49502fe39cf0a67f6a3e973a77f94164150637a7","Immutable reviewed R01 source unexpectedly changed");
const source=raw.toString("utf8");
const part=source.slice(source.indexOf("## 5. D3"),source.indexOf("## 6. D4"));
const headings=[...part.matchAll(/^### \d{2}\. `(THPT-G10-B1[34]-[CP]\d{2})`/gm)];
assert.equal(headings.length,16,"Require 16 original reviewed B13-B14 formative IDs");
const field=(s,k)=>{const line=s.split("\n").find(x=>x.startsWith("- **"+k+":** "));assert(line,"missing "+k);return line.slice(("- **"+k+":** ").length).trim()};
const math=s=>s.replace(/\\\((.*?)\\\)/g,(_,m)=>"$"+m+"$").replace(/\\\[([\s\S]*?)\\\]/g,(_,m)=>"$$"+m+"$$");
const expected=headings.map((m,i)=>{
 const b=part.slice(m.index,headings[i+1]?.index||part.length),id=m[1],meta=field(b,"LESSON_ID");
 const lesson=(meta.match(/`G10-B(\d{2})`/)||[])[1],role=(meta.match(/`SGK_(CORE|PRACTICE)`/)||[])[1];
 const skill=(meta.match(/OUTCOME_ID:\*\* `([^`]+)/)||[])[1],difficulty=(meta.match(/DIFFICULTY:\*\* `([^`]+)/)||[])[1],opts=fieldOrEmpty(b,"OPTIONS").split(" | ").filter(Boolean).map(math);
 const record={item_id:id,lesson:String(Number(lesson)),role:role==="CORE"?"CORE":"PRACTICE",skill,stem:math(field(b,"STEM")),...(opts.length?{options:opts,answerKey:(field(b,"KEY_CHOICE").match(/`([A-D])`/)||[])[1]}:{}),solution:"Đáp án: "+math(field(b,"KEY"))+"\nLời giải: "+math(field(b,"WORKED_SOLUTION")),hint:math(field(b,"HINT_PUBLIC_ONLY")),exposure:"FORMATIVE_ONLY",difficulty};
 return record;
});
function fieldOrEmpty(s,k){const line=s.split("\n").find(x=>x.startsWith("- **"+k+":** "));return line?line.slice(("- **"+k+":** ").length).trim():""}
const ctx={window:{}};vm.runInNewContext(read("docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"),ctx);
const bank=ctx.window.THPT_CHV_B13_B14_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Invalid scoped B13-B14 canonical bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Runtime not exactly equivalent to reviewed R01 for B13-B14");
// G10 B13 Q18 self-verification: independent arithmetic under the SGK KNTT
// position-splitting quartile rule; not a reviewer verdict and not a UI checksum.
const sortedStats=values=>{
 const v=[...values].sort((a,b)=>a-b),n=v.length;
 assert(n>0,"At least one datum is required");
 const med=a=>a.length%2?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2;
 const low=v.slice(0,Math.floor(n/2)),high=v.slice(Math.ceil(n/2));
 const freq=new Map();for(const x of v)freq.set(x,(freq.get(x)||0)+1);
 const times=[...freq.values()],top=Math.max(...times);
 const modes=times.every(x=>x===top)?[]:[...freq].filter(([,f])=>f===top).map(([x])=>x);
 return {mean:v.reduce((a,b)=>a+b,0)/n,median:med(v),q1:n>=2?med(low):null,q3:n>=2?med(high):null,modes};
};
const near=(actual,expected,id)=>assert(Math.abs(actual-expected)<1e-10,id+" expected "+expected+", got "+actual);
const samples=[
 ["EDGE-singleton",[5],{mean:5,median:5,q1:null,q3:null}],
 ["TRY05",[2,4,4,10],{mean:5}],
 ["TRY06",[9,2,12,5],{median:7}],
 ["TRY07",[1,2,3,4,5,6,7],{q1:2,median:4,q3:6}],
 ["TRY08",[2,2,3,3,5],{modes:[2,3]}],
 ["TRY09",[4,5,6,7,28],{mean:10,median:6}],
 ["D5 original SVG",[2,3,3,7,10],{q1:2.5,median:3,q3:8.5}],
 ["EX3.1",[6,12,4,9,6,5,7],{mean:7,median:6,q1:5,q3:9,modes:[6]}],
 ["EX3.2",[11,3,14,7,5,9],{mean:49/6,median:8,q1:5,q3:11,modes:[]}],
 ["EX3.3",[3,4,4,8,8,8,10,10],{mean:55/8,median:8,q1:4,q3:9,modes:[8]}],
 ["EX3.4",[5,6,6,7,100],{mean:124/5,median:6}],
 ["C01",[3,5,7,9],{mean:6}],
 ["C02",[1,2,4,8,12],{median:4}],
 ["P01",[2,2,4,4,4,8],{mean:4}],
 ["P02",[1,3,4,8,9,10],{q1:3,median:6,q3:9}],
 ["P03",[1,1,3,3,5,7],{modes:[1,3]}],
 ["P04",[4,5,5,6,30],{mean:10,median:5}],
 ["P05",[1,2,3,4,6,8,9],{q1:2,median:4,q3:8}],
 ["P06-A",[6,7,8,9,10],{mean:8,median:8}],
 ["P06-B",[6,7,8,9,30],{mean:12,median:8}],
 ["W13",[1,2,2,2,3,3,3,3,4,4],{mean:2.7,median:3,q1:2,q3:3,modes:[3]}],
 ["W13 changed 4 to 20",[1,2,2,2,3,3,3,3,4,20],{mean:4.3,median:3}]
];
for(const [id,data,expected]of samples){
 const found=sortedStats(data);
 for(const [key,val]of Object.entries(expected)){
  if(key==="modes")assert.deepEqual(found.modes,val,id+" incorrect ties or KNTT equal-frequency no-mode rule");
  else if(val===null)assert.equal(found[key],null,id+" n=1 cannot split into two nonempty quartile halves");
  else near(found[key],val,id+" "+key);
 }
 if(expected.q1!==undefined&&expected.q1!==null)assert(found.q1<=found.median&&found.median<=found.q3,
  id+" violates sorted quartile order");
}
const b13Page=read("docs/thpt-preview/sgk/chuong-v/bai-13.md");
for(const [tag,witness]of [["EX3.1","6,12,4,9,6,5,7"],["EX3.2","11,3,14,7,5,9"],
 ["EX3.3","3,4,4,8,8,8,10,10"],["EX3.4","5,6,6,7,100"]])
 assert(b13Page.includes(witness),tag+" verified data changed without revalidating math");
for(const id of ["C01","C02","P01","P02","P03","P04","P05","P06"])
 assert(bank.records.some(x=>x.item_id==="THPT-G10-B13-"+id),"Missing original B13 canonical "+id);
const originalW13=read("docs/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14.md");
assert(originalW13.includes('data-thpt-written-canonical="THPT-G10-CHV-W13"')&&
 originalW13.includes("43")&&originalW13.includes("2{,}7")&&originalW13.includes("4{,}3"),
 "Original self-checked W13 solution/rubric needs independent recomputation if modified");
console.log("PASS G10 B13 math Q18 self-check: 22 independent samples across 5 TRY, 4 examples, D5, 8 canonical, Written; odd/even, ties, extreme changes");
const others=["thpt-chi-reviewed-formative-v1.js","thpt-chii-reviewed-formative-v1.js","thpt-chiii-reviewed-formative-v1.js","thpt-chiv-b07-b08-reviewed-formative-v1.js","thpt-chiv-b09-b11-reviewed-formative-v1.js","thpt-chvi-reviewed-formative-v1.js","thpt-chvii-reviewed-formative-v1.js","thpt-chviii-reviewed-formative-v1.js","thpt-chix-reviewed-formative-v1.js","thpt-g11-chi-reviewed-formative-v1.js"];
const prior=others.flatMap(x=>[...read("docs/assets/javascripts/"+x).matchAll(/"item_id"\s*:\s*"([^"]+)"/g)].map(m=>m[1]));
assert.equal(new Set([...prior,...expected.map(x=>x.item_id)]).size,prior.length+16,"Canonical collision against existing G10/G11 bank");
const figureSource=source.slice(source.indexOf("## 7. D5"),source.indexOf("## 8. D6"));
for(const n of [13,14]){
 const figName=n===13?"THPT_G10_B13_QUARTILES_D5_R01.svg":"THPT_G10_B14_DISPERSION_D5_R01.svg";
 const offset=figureSource.indexOf("### `FIG-G10-B"+n+"-01`");
 assert(offset>=0,"Missing original frozen D5 figure "+n);
 const begin=figureSource.indexOf("```xml\n",offset)+7,end=figureSource.indexOf("\n```",begin);
 assert(begin>6&&end>begin);
 assert.equal(read("docs/assets/images/thpt/"+figName),figureSource.slice(begin,end).trim()+"\n","D5 SVG differs from original R01");
 const page=read("docs/thpt-preview/sgk/chuong-v/bai-"+n+".md");
 const tabs=[...page.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
 if(tabs.length){
  assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
   "B"+n+" must keep exact Model B four horizontal tabs");
  assert(page.includes(figName),"B"+n+" original D5 SVG missing");
   assert.equal((page.match(n===13?/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm:/^    ### 3\.[1-3]\. Ví dụ [1-3] —/gm)||[]).length,n===13?4:3,
    "B"+n+" expected worked-example count: B13 four reasoned, B14 three historic");
   if(n===14){
    const tab=page.slice(page.indexOf('=== "Ví dụ"'),page.indexOf('=== "Lỗi thường gặp"'));
    assert.equal((tab.match(/class="thpt-g10-example-solution"/g)||[]).length,3,
     "B14 original three EX numbers now have source-authored step-by-step Golden solutions");
    for(const token of ["**Đề:**","**Phân tích:**","**Kiểm lại:**"])
     assert.equal(tab.split(token).length-1,3,"B14 one "+token+" per example");
   }
   if(n===13){
    const tab=page.slice(page.indexOf('=== "Ví dụ"'),page.indexOf('=== "Lỗi thường gặp"'));
    assert.equal((tab.match(/class="thpt-g10-example-solution"/g)||[]).length,4,
     "B13 four examples in neutral Golden panels");
    assert(tab.includes("Bước 1")&&tab.includes("Phân tích:")&&
     page.includes("Đọc hình ngay khi học tứ phân vị"),
     "B13 worked reasoning and concept-guided quartile figure required");
   }
 }else{
  assert(page.includes("## 1. Kiến thức SGK")&&page.includes("## 2. Ví dụ")&&page.includes(figName));
  assert.equal((page.match(/^### Ví dụ [123]\./gm)||[]).length,3);
 }
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2);
 for(const role of ["core","practice"])assert(read("docs/thpt-preview/sgk/chuong-v/luyen-tap.md").includes('data-thpt-open-quiz="b'+n+'-'+role+'"'));
 assert.equal(bank.forLesson(n,"core").length,2);
 assert.equal(bank.forLesson(n,"practice").length,6);
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14.md");
for(const id of ["THPT-G10-CHV-W13","THPT-G10-CHV-W14-ANCHOR"])assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1);
assert(written.includes("không ghi điểm hay Skill Mastery"));
const root=read("docs/assets/javascripts/thpt-r4-preview.js");
assert.equal(root.split("THPT_CHV_B13_B14_REVIEWED_FORMATIVE").length-1,2);
assert(root.includes("Number(lesson)<=14?\"V\""));
assert(!/data-thpt-readiness|data-mastery-credit/.test(read("docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md")));
assert(read("docs/thpt-preview/sgk/chuong-v.md").includes('href="bai-12/"')&&read("docs/thpt-preview/sgk/chuong-v.md").includes("Tự kiểm tra cuối chương"));
if(process.argv.includes("--built")){
 for(const n of [13,14])assert(fs.existsSync("site/thpt-preview/sgk/chuong-v/bai-"+n+"/index.html"));
 assert(fs.existsSync("site/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14/index.html"));
}
console.log("PASS G10 ChV B13-B14: 16/16 R01 source-equivalent public canonical, 2 exact SVG, 4 HELP, 2 Written/Anchor, inactive Readiness, no Mastery");
