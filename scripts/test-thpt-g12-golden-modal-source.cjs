"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const src=p=>fs.readFileSync(path.join(root,p),"utf8");
const runtime=src("docs/assets/javascripts/thpt-g12-golden-formative-modal-v1.js");
for(const required of ['text.startsWith("$$",i)','text.startsWith("\\\\(",i)', 'const mathNode=el(', 'const script=el(', 'q.item_id', 'solution.open=true', 'thpt-g12-golden-solution', 'thpt-g12-golden-d6'])
 assert(runtime.includes(required),"Golden G12 missing AP2/assessment guard: "+required);
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const c=src(config);
 assert(c.includes("assets/javascripts/thpt-g12-golden-formative-modal-v1.js"));
 assert(c.includes("assets/stylesheets/thpt-g12-golden-formative-modal-v1.css"));
}
for(const [n,p]of [["I","thpt-g12-chi-b01-b05-r00.js"],["II","thpt-g12-chii-b06-b08-r00.js"],["III","thpt-g12-chiii-b09-b10-r00.js"],["IV","thpt-g12-chiv-b11-b13-r00.js"]])
 assert(src("docs/assets/javascripts/"+p).includes('mount(root,bank,{chapter:"'+n+'"}'),"Ch"+n+" must use shared Golden R4");
assert(!/localStorage|sessionStorage|setDoc\(|getFirestore\(/.test(runtime));
console.log("PASS G12 Golden R4: four chapters share one source-locked modal, math parser and Q16-safe no-persistence controls");
