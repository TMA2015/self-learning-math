"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"../site");
const chapter=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
assert(fs.existsSync(path.join(root,"assets/stylesheets/thpt-g11-knowledge-modelb-v1.css")),"G11 scoped stylesheet MUST be in shared deployed site");
for(let n=1;n<=33;n++){
 const target=path.join(root,"thpt-preview/sgk/lop-11/chuong-"+chapter(n)+"/bai-"+n+"/index.html");
 assert(fs.existsSync(target),"G11 B"+n+" missing from final bundled site");
 const html=fs.readFileSync(target,"utf8");
 assert.equal((html.match(/class="tabbed-set/g)||[]).length,1,"G11 B"+n+" exactly one Level-1 tabbed set");
 const found=[...html.matchAll(/<label\b[^>]*>([^<]+)<\/label>/g)].map(x=>x[1].trim()).filter(x=>labels.includes(x));
 assert.deepEqual(found,labels,"G11 B"+n+" four exact student tab labels in assembled release");
 assert(html.includes("data-ped-first-try")&&html.includes("data-thpt-help-id"),"G11 B"+n+" real First Try and D6 not missing");
 assert(!html.includes('data-g11-chapter-selfcheck="CH')&&!html.includes("data-thpt-readiness"),"G11 B"+n+" must not mount independent self-check inside Knowledge");
}
console.log("PASS built G11 Model B 33/33 pages, one four-tab set, First Try/D6, scoped CSS, no Readiness before deployment");
