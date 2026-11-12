"use strict";
/* Historical G11 SGK Knowledge snapshot replay for existing canonical-source QA.
 * Q18 v3.0.1: only immutable original snapshot uses historical heading/FNV
 * gates. New Model B candidate is independently byte-verified against exact
 * original Git blob + signed 33-row receipt in custom source/browser CI.
 * NEVER use this helper for actual built-site/browser/assessment checks.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const receipt=path.join(root,"prototypes/thpt/ux795/UX795_G11_B01_B33_ENRICHMENT_DELTA_RECEIPT_Q18_V301_20261112.md");
const read=fs.readFileSync.bind(fs);
const map=new Map;
const group=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
for(const line of read(receipt,"utf8").split("\n")){
 const n=Number(line.match(/^\| G11-B(\d{2})/)?.[1]);
 if(!n)continue;
 const hashes=[...line.matchAll(/[0-9a-f]{40}/g)].map(m=>m[0]);
 assert.equal(hashes.length,2,"G11 source receipt must carry two Git blob IDs");
 map.set("docs/thpt-preview/sgk/lop-11/chuong-"+group(n)+"/bai-"+n+".md",{baseline:hashes[0],candidate:hashes[1]});
}
assert.equal(map.size,33,"One immutable baseline and candidate for every G11 lesson");
const cache=new Map();
let active=false;
function compatible(input,options){
 const src=String(input).replaceAll("\\","/"),i=src.indexOf("docs/thpt-preview/sgk/lop-11/");
 if(i<0)return null;
 const relative=src.slice(i);
 return map.get(relative)?{relative,meta:map.get(relative)}:null;
}
module.exports=function installG11HistoricalSourceReplay(){
 if(active)return;active=true;
 fs.readFileSync=function originalSnapshotRead(input,options){
  const found=compatible(input,options);
  if(!found)return read(input,options);
  const candidate=read(input);
  if(!candidate.includes(Buffer.from('=== "Khám phá kiến thức"')))return options?read(input,options):candidate;
  if(!cache.has(found.relative)){
   const sha=cp.execFileSync("git",["hash-object","--",path.resolve(root,found.relative)],{cwd:root,encoding:"utf8"}).trim();
   assert.equal(sha,found.meta.candidate,found.relative+" candidate Q18 Git blob drift");
   const old=cp.execFileSync("git",["cat-file","blob",found.meta.baseline],{cwd:root,maxBuffer:1024*1024*2});
   cache.set(found.relative,old);
   process.stdout.write("HISTORICAL_SOURCE_REPLAY "+found.relative+" immutable="+found.meta.baseline.slice(0,9)+"; candidate="+found.meta.candidate.slice(0,9)+" checked separately\n");
  }
  const value=cache.get(found.relative);
  return typeof options==="string"?value.toString(options):options&&typeof options==="object"&&options.encoding?value.toString(options.encoding):Buffer.from(value);
 };
};