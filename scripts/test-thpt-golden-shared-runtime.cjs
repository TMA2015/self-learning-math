"use strict";
/* Issue #763: executable shared Golden runtime contract, not a CSS/count test.
 * No SGK contents, backend, readiness secret or private RD1 is imported here. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),vm=require("node:vm"),path=require("node:path");
const base=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(base,p),"utf8");
class Element {
 constructor(tag="button"){this.tagName=tag;this.listeners=new Map();this.attributes={};this.children=[];this.isConnected=true;this.className="";this.open=false;this.disabled=false;this.focused=false}
 addEventListener(type,fn){const old=this.listeners.get(type)||[];old.push(fn);this.listeners.set(type,old)}
 setAttribute(k,v){this.attributes[k]=String(v)}
 getAttribute(k){return this.attributes[k]??null}
 append(...elements){this.children.push(...elements)}
 replaceChildren(...elements){this.children=[...elements]}
 click(){for(const fn of this.listeners.get("click")||[])fn({target:this})}
 focus(){this.focused=true}
 emit(type,event={target:this}){for(const fn of this.listeners.get(type)||[])fn(event)}
}
class Dialog extends Element {
 constructor(){super("dialog");this.dataset={}}
 showModal(){if(this.open)throw Error("double modal");this.open=true}
 close(){if(!this.open)return;this.open=false;this.emit("close")}
}
const box={window:{},document:{createElement:tag=>new Element(tag)},location:{pathname:"/thpt-preview/sgk/lop-11/chuong-i/luyen-tap/"},HTMLDialogElement:Dialog};
vm.runInNewContext(read("docs/assets/javascripts/thpt-golden-runtime-v1.js"),box,{filename:"thpt-golden-runtime-v1.js"});
const golden=box.window.THPT_GOLDEN_RUNTIME;
assert.equal(golden.version,"1.0.0");
assert.equal(Object.isFrozen(golden),true);
const dialog=new Dialog(),close=new Element(),trigger=new Element();
const ctl=golden.bindDialog({dialog,closeButton:close});
ctl.open(trigger);assert(dialog.open);assert.equal(dialog.dataset.thptGoldenSharedBound,"1");
close.click();assert.equal(dialog.open,false);assert(trigger.focused,"Focus returns to source card after closing");
ctl.open(trigger);dialog.emit("click",{target:dialog});assert.equal(dialog.open,false,"Backdrop closes via same controller");
assert.throws(()=>golden.bindDialog({dialog}),/duplicate dialog binding/);
const nav=new Element("nav");let selected=-1;
const buttons=golden.renderNav({container:nav,count:5,index:1,onSelect:i=>{selected=i}});
assert.equal(buttons.length,5);assert.equal(nav.children.length,5);
assert.equal(buttons.filter(x=>x.className.includes("active")).length,1);
assert.equal(buttons[1].getAttribute("aria-current"),"true");
buttons[4].click();assert.equal(selected,4);
assert.throws(()=>golden.renderNav({container:nav,count:5,index:5,onSelect:()=>{}}),/invalid question navigation/);
let index=0;const prev=new Element(),next=new Element();
const pager=golden.bindPager({prev,next,getIndex:()=>index,getCount:()=>3,go:i=>{index=i;pager.sync()}});
assert(prev.disabled&&!next.disabled);prev.click();assert.equal(index,0);
next.click();assert.equal(index,1);next.click();assert.equal(index,2);assert(next.disabled);
next.click();assert.equal(index,2);prev.click();assert.equal(index,1);
box.location.pathname="/thpt-preview/sgk/lop-12/chuong-i/tu-kiem-tra-chuong/";
assert.throws(()=>golden.bindDialog({dialog:new Dialog()}),/protected assessment/);
assert.throws(()=>golden.renderNav({container:nav,count:1,index:0,onSelect:()=>{}}),/protected assessment/);
box.location.pathname="/thpt-preview/chuyen-de/ham-so/luyen-tap/";
const topicDemoController=golden.bindDialog({dialog:new Dialog(),closeButton:new Element()});
assert.equal(typeof topicDemoController.open,"function","Future Topic route reuses the exact runtime API; no Topic content released");
const core=read("docs/assets/javascripts/thpt-r4-preview.js");
const g12=read("docs/assets/javascripts/thpt-g12-golden-formative-modal-v1.js");
const g11Supplement=read("docs/assets/javascripts/thpt-g11-supplement-p99-p109-r00.js");
const exp=read("docs/assets/javascripts/thpt-g12-exp01-exp02-r01.js");
const year=read("docs/assets/javascripts/thpt-g12-yearend-r00.js");
for(const [name,s]of [["G10/G11",core],["G12 ChI–VI",g12],["G11 SUPPLEMENT",g11Supplement],["G12 EXP",exp],["G12 YEAR",year]]){
 assert(s.includes("THPT_GOLDEN_RUNTIME"),name+" must invoke the same shared code (not duplicate CSS)");
 assert(s.includes("golden.bindDialog("),name+" must delegate real native dialog lifecycle");
 assert(!s.includes("localStorage.setItem("),name+" must not add Mastery writes");
}
for(const [name,s]of [["G10/G11",core],["G12 ChI–VI",g12],["G12 EXP",exp],["G12 YEAR",year]]){
 assert(s.includes("golden.renderNav("),name+" must delegate question navigation");
 assert(s.includes("golden.bindPager("),name+" must delegate Previous/Next boundaries");
}
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const y=read(config),global=y.indexOf("assets/javascripts/thpt-golden-runtime-v1.js");
 const g10=y.indexOf("assets/javascripts/thpt-r4-preview.js"),g11=y.indexOf("assets/javascripts/thpt-g11-supplement-p99-p109-r00.js");
 const g12=y.indexOf("assets/javascripts/thpt-g12-golden-formative-modal-v1.js");
 assert(global>0&&global<g10&&global<g11&&global<g12,"Runtime must precede all grade adapters "+config);
}
const runtimeCode=read("docs/assets/javascripts/thpt-golden-runtime-v1.js");
for(const forbidden of ["firebase.","setDoc(","recordMastery","localStorage.","sessionStorage.","SGK_CHAPTER_READINESS","TOPIC_READINESS"])
 assert(!runtimeCode.includes(forbidden),"Shared display engine may not write student/independent assessment state: "+forbidden);
for(const source of [core,g12,g11Supplement,exp,year])
 new (require("node:vm").Script)(source);
console.log("PASS issue #763 shared Golden runtime: G10/G11/G12 six chapters/EXP/YEAR real modal+nav/pager; protected END denial, focus/ESC contract, future Topic API, no Mastery/academic rewrite.");
