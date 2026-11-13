#!/usr/bin/env node
"use strict";
/* G10 ChVI S1/Q18 v3.1.0 §X-F: exact baseline + four-row candidate receipt.
   Only academic source/answer and layout parity; not official assessment PASS. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),
 cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),baseline="bb6d7a92308d78628761a3284264fa7b55d6c912";
const {chviEditorialReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
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
const tries={15:5,16:5,17:5,18:4},figs={15:1,16:2,17:1,18:1},examples={15:1,16:3,17:4,18:4};
const rows=chviEditorialReceiptRows();assert.equal(rows.size,4,"4 signed source rows required");
let total=0;
for(const n of [15,16,17,18]){
 const row=rows.get("B"+n);assert(row,"Missing B"+n+" receipt row");
 const file="docs/thpt-preview/sgk/chuong-vi/bai-"+n+".md";
 const bytes=fs.readFileSync(path.join(root,file)),s=bytes.toString("utf8");
 const base=cp.spawnSync("git",["show",baseline+":"+file],{cwd:root,encoding:"utf8"});
 assert.equal(base.status,0,"Cannot read immutable B"+n+" baseline "+base.stderr);
 const old=base.stdout;
 assert.equal(blob(old),row.baseline,"B"+n+" published baseline SHA");
 assert.equal(blob(bytes),row.candidate,"B"+n+" current candidate SHA");
 assert.equal(candidateG10KnowledgeBlob(n),row.candidate,"B"+n+" Q18 routing mismatch");
 assert.equal(row.moved,tries[n],"B"+n+" historical First Try count");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id","data-thpt-fig-id"]){
  assert.deepEqual(ids(s,key),ids(old,key),"B"+n+" immutable canonical "+key);
  assert.equal(ids(s,key).length,new Set(ids(s,key)).size,"B"+n+" duplicate "+key);
 }
 assert.deepEqual(answers(s),answers(old),"B"+n+" original public First Try answer changed");
 assert.equal(answers(s).length,tries[n],"B"+n+" original answer count");
 assert.deepEqual(helpers(s),helpers(old),"B"+n+" original D6 body changed");
 assert.equal(helpers(s).length,tries[n],"B"+n+" D6 body count");
 const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),labels,"B"+n+" level-1 tabs");
 const d=s.slice(s.indexOf('=== "Khám phá kiến thức"'),s.indexOf('=== "Kiến thức SGK"'));
 const k=s.slice(s.indexOf('=== "Kiến thức SGK"'),s.indexOf('=== "Ví dụ"'));
 const e=s.slice(s.indexOf('=== "Ví dụ"'),s.indexOf('=== "Lỗi thường gặp"'));
 const m=s.slice(s.indexOf('=== "Lỗi thường gặp"'));
 assert.deepEqual([...d.matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),
  ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],"B"+n+" discovery layout");
 assert.deepEqual([...k.matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),titles[n],"B"+n+" S1 formal titles");
 assert(k.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),"B"+n+" formal tab must start at 2.1");
 assert.equal(ids(d,"data-thpt-first-try-id").length,tries[n],"B"+n+" every First Try in Discovery");
 assert.equal(ids(m,"data-thpt-help-id").length,tries[n],"B"+n+" every HELP in last tab");
 assert(!/data-thpt-(?:first-try-id|help-id)=/.test(k+e),"B"+n+" misplaced study/HELP ID");
 assert(!/data-thpt-help-id=/.test(d),"B"+n+" HELP in discovery");
 assert.equal((s.match(/<figure/g)||[]).length,figs[n],"B"+n+" original figures");
 assert.equal((e.match(/^    ### /gm)||[]).length,examples[n],"B"+n+" original worked examples");
 assert(!/data-mastery-credit|data-mastery-write|data-thpt-readiness/.test(s),"B"+n+" exam or Mastery leaked");
 const rem=new Map();for(const v of latex(s))rem.set(v,(rem.get(v)||0)+1);
 for(const v of latex(old)){const count=rem.get(v)||0;assert(count>0,"B"+n+" mathematical expression missing "+v.slice(0,90));rem.set(v,count-1);}
 assert.equal((s.match(/^    \\\[$/gm)||[]).length,(s.match(/^    \\\]$/gm)||[]).length,"B"+n+" math display delimiters");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="BROKEN-'),"data-thpt-first-try-id"),
  ids(old,"data-thpt-first-try-id"),"B"+n+" ID mutation must fail");
 assert.notDeepEqual([...k.replace(titles[n][0],"WRONG_S1").matchAll(/^    ### (.*)$/gm)].map(z=>z[1]),titles[n],"B"+n+" S1 negative test");
 assert.notEqual(blob(s+" "),row.candidate,"B"+n+" SHA corruption negative test");
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
assert(b16.includes("Tính chất theo dấu hệ số")&&b16.includes("Hàm số bậc hai \\(a\\ne0\\)")&&!b16.includes("Hàm số bậc hai (a\n    e0)"),"B16 a!=0 and full formal monotonicity");
console.log("PASS G10 ChVI Q18 source parity: 19/19 First Try, 19 D6, 5 original figures, 12 example sections; no official scoring, NO DEPLOY.");
