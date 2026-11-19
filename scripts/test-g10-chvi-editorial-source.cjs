#!/usr/bin/env node
"use strict";
/* G10 ChVI S1/Q18 v3.1.0 §X-F: exact baseline + four-row candidate receipt.
   Only academic source/answer and layout parity; not official assessment PASS. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),
 cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),baseline="bb6d7a92308d78628761a3284264fa7b55d6c912";
const {chviEditorialReceiptRows,chviExampleUxReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const blob=b=>{b=Buffer.isBuffer(b)?b:Buffer.from(b);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
const answers=s=>[...s.matchAll(/<div class="thpt-r4-first-try-answer">[\s\S]*?<\/div>/g)].map(m=>m[0]).sort();
const latex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(m=>(m[1]||m[2]).trim().replace(/\s+/g," "));
const helpers=s=>[...s.matchAll(/data-thpt-help-id="([^"]+)" hidden><\/span>[\s\S]*?\?\?\? tip "[^"]+"[\s\S]*?<\/ol>/g)]
 .map(m=>({id:m[1],body:m[0]})).sort((a,b)=>a.id.localeCompare(b.id));
const titles={
 15:["2.1. Khái niệm hàm số","2.2. Đồ thị của hàm số","2.3. Sự đồng biến, nghịch biến của hàm số"],
 16:["2.1. Khái niệm hàm số bậc hai","2.2. Đồ thị của hàm số bậc hai"],
 17:["2.1. Dấu của tam thức bậc hai","2.2. Bất phương trình bậc hai"],
 18:["2.1. Phương trình dạng \\(\\sqrt{A(x)}=\\sqrt{B(x)}\\)",
     "2.2. Phương trình dạng \\(\\sqrt{A(x)}=B(x)\\)"]
};
const tries={15:5,16:5,17:5,18:4},figs={15:1,16:2,17:1,18:1},examples={15:4,16:4,17:4,18:4};
const rows=chviEditorialReceiptRows();assert.equal(rows.size,4,"4 signed source rows required");
const ux=chviExampleUxReceiptRows();assert.equal(ux.size,4,"4 immutable follow-on example UX delta rows required");
const published="f23f22bdb0a01c35d73f21a6fe6ec9d1de0f9160";
let total=0;
for(const n of [15,16,17,18]){
 const row=rows.get("B"+n);assert(row,"Missing B"+n+" receipt row");
 const file="docs/thpt-preview/sgk/chuong-vi/bai-"+n+".md";
 const bytes=fs.readFileSync(path.join(root,file)),s=bytes.toString("utf8");
 const base=cp.spawnSync("git",["show",baseline+":"+file],{cwd:root,encoding:"utf8"});
 assert.equal(base.status,0,"Cannot read immutable B"+n+" baseline "+base.stderr);
 const old=base.stdout;
 const uxrow=ux.get("B"+n);assert(uxrow,"B"+n+" missing scoped UX row");
 const prior=cp.spawnSync("git",["show",published+":"+file],{cwd:root,encoding:"utf8"});
 assert.equal(prior.status,0,"Cannot read immutable released G10 ChVI source "+prior.stderr);
 assert.equal(blob(old),row.baseline,"B"+n+" historical S1 baseline SHA");
 assert.equal(blob(prior.stdout),row.candidate,"B"+n+" original P1 source unchanged");
 assert.equal(uxrow.baseline,row.candidate,"B"+n+" original receipt → UX delta chain");
 assert.equal(uxrow.examples,n===15?1:examples[n],
  "B"+n+" historical UX example count must remain frozen");
 const expected=candidateG10KnowledgeBlob(n);
 assert.equal(blob(bytes),expected,"B"+n+" current source must equal its own latest Q18 receipt");
 if(n!==15&&n!==16)assert.equal(expected,uxrow.candidate,
  "B"+n+" current source remains identical to published UX snapshot");
 else if(n===16){
  const r16=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
  const f16=k=>r16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f16("BASELINE_PUBLISHED_B16_SOURCE_BLOB"),uxrow.candidate,
   "B16 draft must follow immutable historical ChVI UX snapshot");
  assert.equal(f16("CANDIDATE_B16_SOURCE_BLOB"),expected,
   "B16 latest draft source must match its own signed owner receipt");
 }else{
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md"),"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("BASELINE_PUBLISHED_B15_BLOB"),uxrow.candidate,
   "B15 current source must extend original owner-reviewed UX source");
  assert.equal(f("CANDIDATE_B15_SOURCE_BLOB"),"131947762d1c2ad1c109602a5cbe2e7fea71652e",
   "B15 pre-P2 signed self-QA snapshot must stay immutable");
  const p2=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
  const p2f=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(p2f("CANDIDATE_B15_SOURCE_BLOB"),"cc0b8a2d8aad63fc360246b07122094498634779",
   "B15 historical P2 source receipt must stay immutable");
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md"),"utf8");
  const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f02("PREVIOUS_B15_SOURCE_BLOB"),p2f("CANDIDATE_B15_SOURCE_BLOB"),
   "B15 new R02 must follow exact approved owner screenshot P2 source");
  assert.equal(f02("CANDIDATE_B15_SOURCE_BLOB"),expected,
   "B15 new R02 source must match latest signed SHA");
 }
 assert.equal(row.moved,tries[n],"B"+n+" historical First Try count");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id","data-thpt-fig-id"]){
  assert.deepEqual(ids(s,key),ids(old,key),"B"+n+" immutable canonical "+key);
  assert.equal(ids(s,key).length,new Set(ids(s,key)).size,"B"+n+" duplicate "+key);
 }
 assert.deepEqual(answers(s),answers(old),"B"+n+" original public First Try answer changed");
 assert.equal(answers(s).length,tries[n],"B"+n+" original answer count");
 if(n!==15){
  const nowHelp=helpers(s),oldHelp=helpers(old);
  const normalized=list=>list.map(z=>({id:z.id,
   body:z.body.replace(/\?\?\? tip "[^"]+"/,"??? tip \"CANONICAL_D6\"")}));
  assert.deepEqual(n===16?normalized(nowHelp):nowHelp,n===16?normalized(oldHelp):oldHelp,
   "B"+n+" original D6 recovery bodies and IDs must be preserved; B16 may relabel only");
  assert.equal(nowHelp.length,tries[n],"B"+n+" D6 body count");
 }else{
  assert.equal((s.match(/^    \?\?\? tip "4\.[1-5]\. /gm)||[]).length,5,
   "B15 must have five meaningfully named misconceptions, not repeated D6 tips");
  assert(!s.includes("Gợi ý khắc phục khi chưa làm được — 5 bước"),
   "B15 generic repeated error headings must be eliminated");
  for(const term of ["Dấu hiệu sai:","Vì sao sai?","Tự kiểm:","Sửa lại:","Tập tiếp:"])
   assert.equal(s.split(term).length-1,5,"B15 five real error/recovery steps: "+term);
 }
 const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),labels,"B"+n+" level-1 tabs");
 const d=s.slice(s.indexOf('=== "Khám phá kiến thức"'),s.indexOf('=== "Kiến thức SGK"'));
 const k=s.slice(s.indexOf('=== "Kiến thức SGK"'),s.indexOf('=== "Ví dụ"'));
 const e=s.slice(s.indexOf('=== "Ví dụ"'),s.indexOf('=== "Lỗi thường gặp"'));
 const m=s.slice(s.indexOf('=== "Lỗi thường gặp"'));
 assert.deepEqual([...d.matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),
  n===15?["1.1. Vì sao cần học hàm số?","1.2. Tự khám phá năm tình huống","1.3. Kiến thức tiền đề và mục tiêu"]:
  ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],"B"+n+" discovery narrative layout");
 assert.deepEqual([...k.matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),titles[n],"B"+n+" S1 formal titles");
 if(n!==15)assert(k.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),"B"+n+" historical formal tab must start at 2.1");
 else{
  assert(k.indexOf("### 2.1.")>0&&k.indexOf("### 2.1.")<k.indexOf("### 2.2."),
   "B15 formal S1 must present canonical sections 2.1–2.3 after learner transition");
  assert.equal((k.match(/thpt-r4-concept-card/g)||[]).length,4,
   "B15 four typed formal concepts/definitions");
  assert.equal((k.match(/thpt-r4-rule-card/g)||[]).length,1,
   "B15 one typed formal graph membership rule");
  assert.equal((d.match(/\*\*Em vận dụng\.\*\*/g)||[]).length,5,
   "B15 all five First Try prompts must visibly exist before Core");
 }
 if(n===16){
  assert.equal((d.match(/\*\*Vận dụng\.\*\*/g)||[]).length,5,
   "B16 should have exactly five student-facing Vận dụng labels");
  assert(!d.includes("Em vận dụng")&&!d.includes("Vì sao chọn phương pháp này?"),
   "No obsolete labels or editorial pseudo-headings for B16");
 }
 assert.equal(ids(d,"data-thpt-first-try-id").length,tries[n],"B"+n+" every First Try in Discovery");
 assert.equal(ids(m,"data-thpt-help-id").length,tries[n],"B"+n+" every HELP in last tab");
 assert(!/data-thpt-(?:first-try-id|help-id)=/.test(k+e),"B"+n+" misplaced study/HELP ID");
 assert(!/data-thpt-help-id=/.test(d),"B"+n+" HELP in discovery");
 assert.equal((s.match(/<figure/g)||[]).length,figs[n],"B"+n+" original figures");
 assert.equal((e.match(/^    ### /gm)||[]).length,examples[n],"B"+n+" original worked examples");
 assert(!/data-mastery-credit|data-mastery-write|data-thpt-readiness/.test(s),"B"+n+" exam or Mastery leaked");
 if(n!==15){
  const visibleMath=latex(s),rem=new Map();for(const v of visibleMath)rem.set(v,(rem.get(v)||0)+1);
  // B16 has four explicitly reviewed SOURCE-EQUIVALENT notational rewrites,
  // not removed mathematical facts: semicolon coordinates/ranges, compact
  // nonzero condition, and solution written on the same math line.
  const notation16=new Map([
   ["a\\ne 0","a\\ne0"],
   ["I(1,-4)","I(1;-4)"],
   ["[-4,+\\infty)","T=[-4;+\\infty)"],
   ["(x-1)^2=4","(x-1)^2=4\\Rightarrow x=1\\pm2=-1,3"]
  ]);
  for(const v of latex(old)){
   let chosen=v;
   if(!(rem.get(chosen)||0)&&n===16&&notation16.has(v)){
    // An original standalone equality may have been combined into a longer
    // already-existing answer line. Verify the exact equivalent expression,
    // rather than require a second identical occurrence.
    const equivalent=notation16.get(v);
    assert(visibleMath.includes(equivalent),
     "B16 reviewed equivalent mathematical expression missing: "+v);
    continue;
   }
   const count=rem.get(chosen)||0;
   assert(count>0,"B"+n+" mathematical expression missing: "+v.slice(0,90));
   rem.set(chosen,count-1);
  }
 }else{
  const check=["f(x)=\\sqrt{x-1}","g(x)=\\frac{x+1}{x-2}","C(3)=12",
   "C(5)=12+4(5-3)=20","x_1<x_2","f(-2)=3","f(2)=3\\ne5"];
  for(const expr of check)assert(s.includes(expr),"B15 source-math baseline/evidence missing "+expr);
  for(const token of ["**Đề:**","**Phân tích:**","**Lời giải.**","**Kiểm lại:**"])
   assert.equal(e.split(token).length-1,4,"B15 four pedagogically complete examples "+token);
 }
 assert.equal((s.match(/^    \\\[$/gm)||[]).length,(s.match(/^    \\\]$/gm)||[]).length,"B"+n+" math display delimiters");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="BROKEN-'),"data-thpt-first-try-id"),
  ids(old,"data-thpt-first-try-id"),"B"+n+" ID mutation must fail");
 assert.notDeepEqual([...k.replace(titles[n][0],"WRONG_S1").matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),titles[n],"B"+n+" S1 negative test");
 assert.notEqual(blob(s+" "),expected,"B"+n+" SHA corruption negative test");
 total+=tries[n];console.log("PASS B"+n+" S1 "+titles[n].length+" titles; "+tries[n]+" canonical First Try and HELP original bodies; math/figures/IDs preserved");
}
assert.equal(total,19);
const quadratic=x=>x*x-4*x+3;
assert.deepEqual([0,1,2,3,4].map(quadratic),[3,0,-1,0,3],"B16 symmetric value table");
for(const [a,h,k]of [[1,2,-1],[-1,2,1]]){
 for(const x of [h-2,h+2])assert(a>0?a*(x-h)**2+k>=k:a*(x-h)**2+k<=k,"B16 range/vertex");
}
const sign=x=>-x*x+4*x-3;
assert(sign(1)===0&&sign(3)===0&&sign(2)>0&&sign(0)<0,"B17 sign theorem");
const area=x=>x*(18-2*x);assert(area(3)===36&&area(6)===36&&area(4)>36&&area(2)<36,"B17 contextual fence");
assert(Math.abs(Math.sqrt(4*4+9)/5-(8-4)/4)<1e-12&&((8-364/9)/4)<0,"B18 filtered root");
const b16=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-16.md"),"utf8");
assert(b16.includes("Định nghĩa — Hàm số bậc hai:")&&b16.includes("\\(a\\ne0\\)")&&
 b16.includes("Quy tắc — Dấu")&&
 b16.includes("Nếu \\(a>0\\)")&&b16.includes("Nếu \\(a<0\\)")&&
 b16.includes("nghịch biến trên")&&b16.includes("đồng biến trên")&&
 b16.includes("tập giá trị")&&!b16.includes("Hàm số bậc hai (a\n    e0)"),
 "B16 canonical definition a!=0, both signs and complete monotonicity must remain");
// Q07/AP3: an SVG with only its title is not an actual graph. The B16
// formal figure must contain a drawn curve and coordinate geometry before
// its learner-facing "Cách đọc hình" can count as pedagogical evidence.
const fig16=(b16.match(/<figure[^>]*data-thpt-quadratic-plot[^>]*>[\s\S]*?<\/figure>/)||[])[0];
assert(fig16,"B16_OUT_03 Q07 missing canonical formal quadratic figure");
const drawable=fig16?.includes("<svg")?fig16:null;
assert(drawable&&/<(?:path|polyline)\b/.test(drawable)&&
 (drawable.match(/<line\b/g)||[]).length>=2,
 "AUTHORING_DEFECT B16_OUT_03 Q07/AP3: formal quadratic SVG has title only, lacks plotted parabola and x/y axes");

assert(/data-plot-a="1" data-plot-b="-4" data-plot-c="3"/.test(fig16),
 "B16 chart coefficients must match y=x²−4x+3 exactly");
const curve=(fig16.match(/<path d="(M[^"]+)" fill="none" stroke="#2853bb"/)||[])[1];
assert(curve,"B16 missing visible parabolic blue curve (not merely axes)");
const sampled=[...curve.matchAll(/[ML]([\d.]+) ([\d.]+)/g)]
 .map(m=>({px:Number(m[1]),py:Number(m[2])}));
assert.equal(sampled.length,97,"B16 Q07 parabolic line must be sampled at 97 visible points");
for(const {px,py} of sampled){
 const x=(px-120)/112,y=(315-py)/52,actual=x*x-4*x+3;
 assert(Math.abs(y-actual)<.012,"B16 displayed curve geometry diverges from quadratic at x="+x);
}
for(const [px,py] of [[344,367],[232,315],[456,315],[120,159]]){
 assert(fig16.includes('cx="'+px+'" cy="'+py+'"'),
 "B16 missing correctly positioned vertex/axis-intersection marker "+px+","+py);
}
assert(fig16.includes("x = 2")&&fig16.includes("I(2; −1)")&&
 fig16.includes("(1; 0)")&&fig16.includes("(3; 0)")&&fig16.includes("(0; 3)"),
 "B16 Q07 plotted labels must identify vertex, axis, and three intersections");
assert(fig16.includes("thpt-r4-concept-figure")&&fig16.includes('viewBox="0 0 760 440"'),
 "B16 plotted graph should fit existing Golden responsive figure treatment");

require("./test-g10-b15-p2-editorial-delta.cjs");
console.log("PASS G10 ChVI Q18 original→P1→example UX source chain: 19/19 First Try, 19 D6, 5 original figures, 13 example sections; NO DEPLOY.");
