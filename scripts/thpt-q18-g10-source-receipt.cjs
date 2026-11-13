#!/usr/bin/env node
"use strict";
/* Q18 v2.0 baseline and Knowledge candidate SHA selection.
 * This retires only obsolete exact-text fingerprints; never infers academic
 * reviewer PASS or alters Q15/Q16, canonical IDs, math or private bank data.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const ledger="prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md";
const editorReceipt="prototypes/thpt/ux795/G10_CHIV_B07_B11_SGK_S1_Q18_EDITORIAL_RECEIPT_20261112.md";
function chivEditorialReceiptRows(){
 const file=path.join(root,editorReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(0[7-9]|1[01]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,5,"ChIV S1/Q18 editorial receipt requires five source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,5,"ChIV editorial source rows must be unique");
 return rows;
}

const chvReceipt="prototypes/thpt/ux795/G10_CHV_B12_B14_S1_Q18_EDITORIAL_RECEIPT_20261113.md";
function chvEditorialReceiptRows(){
 const file=path.join(root,chvReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[234]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,3,"ChV S1/Q18 editorial receipt requires exactly three source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,3,"ChV source rows must be unique");
 return rows;
}

const chviReceipt="prototypes/thpt/ux795/G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md";
function chviEditorialReceiptRows(){
 const file=path.join(root,chviReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVI S1/Q18 editorial receipt requires four source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,4,"ChVI editorial source rows must be unique");
 return rows;
}

const chviExampleUxReceipt="prototypes/thpt/ux795/G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md";
function chviExampleUxReceiptRows(){
 const file=path.join(root,chviExampleUxReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVI example UX follow-on receipt requires four exact rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],examples:Number(m[4])}]));
 assert.equal(rows.size,4,"ChVI UX lesson rows must be unique");
 return rows;
}

function expectedG10KnowledgeBlob(lesson,legacy){
 assert(/^[a-f0-9]{40}$/.test(legacy),"Historical source SHA malformed");
 const name="B"+String(lesson).replace(/^B/,"").padStart(2,"0");
 const file=path.join(root,ledger);
 if(!fs.existsSync(file))return legacy;
 const lines=fs.readFileSync(file,"utf8").split(/\r?\n/);
 const matches=lines.filter(l=>new RegExp("^\\|\\s*"+name+"\\s*\\|").test(l));
 assert.equal(matches.length,1,name+" must appear once in Q18 candidate source ledger");
 const blobs=[...matches[0].matchAll(/[a-f0-9]{40}/g)].map(x=>x[0]);
 assert.equal(blobs.length,2,name+" must carry baseline AND candidate Git blob");
 assert.notEqual(blobs[0],blobs[1],name+" Knowledge delta must not silently change baseline identity");

 const chiv=chivEditorialReceiptRows().get(name);
 const chv=chvEditorialReceiptRows().get(name);
 assert(!(chiv&&chv),name+" duplicate editorial receipts");
 const chvi=chviEditorialReceiptRows().get(name);
 assert(!(chvi&&(chiv||chv)),name+" overlapping editorial source receipts");
 const row=chiv||chv||chvi;
 if(row){
  assert.equal(row.baseline,blobs[1],name+" immutable S1/Q18 baseline must match ledger candidate");
  assert.notEqual(row.candidate,row.baseline,name+" editorial source must be distinct");
  assert.equal(row.moved,({B07:5,B08:5,B09:5,B10:6,B11:4,B12:4,B13:5,B14:5,B15:5,B16:5,B17:5,B18:4})[name],name+" moved First Try count");
  const ux=chviExampleUxReceiptRows().get(name);
  if(ux){
   assert(chvi&&!chiv&&!chv,name+" UX follow-on restricted to published Chapter VI source");
   assert.equal(ux.baseline,row.candidate,name+" immutable source chain: original ChVI receipt → UX delta");
   assert.notEqual(ux.candidate,ux.baseline,name+" follow-on UX candidate SHA must change");
   assert.equal(ux.examples,({B15:1,B16:4,B17:4,B18:4})[name],name+" explicit Golden example section count");
   return ux.candidate;
  }
  return row.candidate;
 }
 return blobs[1];
}
function candidateG10KnowledgeBlob(lesson){
 const sentinel="0".repeat(40),result=expectedG10KnowledgeBlob(lesson,sentinel);
 return result===sentinel?null:result;
}
module.exports={expectedG10KnowledgeBlob,candidateG10KnowledgeBlob,chivEditorialReceiptRows,chvEditorialReceiptRows,chviEditorialReceiptRows,chviExampleUxReceiptRows};
