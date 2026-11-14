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

const chviiReceipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md";
function chviiEditorialReceiptRows(){
 const file=path.join(root,chviiReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVII Q18 receipt must contain exactly four source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
 assert.equal(rows.size,4,"ChVII Q18 editorial source IDs must be unique");
 return rows;
}

const chviiContinuousReceipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_CONTINUOUS_EXPLANATION_Q18_DELTA_RECEIPT_20261113.md";
function chviiContinuousReceiptRows(){
 const file=path.join(root,chviiContinuousReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(19|20|21|22) \| `([a-f0-9]{40})` \| `([a-f0-9]{40})` \| (\d+) \| (\d+) \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVII follow-on Q18 continuous-narrative receipt requires four source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
 assert.equal(rows.size,4,"ChVII narrative rows must be unique");
 return rows;
}

const chviiAp2Receipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_AP2_EQUIVALENT_MATHJAX_DELTA_RECEIPT_20261113.md";
function chviiAp2ReceiptRows(){
 const file=path.join(root,chviiAp2Receipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVII AP2 source-lock requires four exact lesson blobs");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5])}]));
 assert.equal(rows.size,4,"ChVII AP2 rows must not duplicate lesson IDs");
 return rows;
}

const chviiR02Receipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_R02_ACADEMIC_PED_PASS_RELEASE_INTAKE_20261114.md";
function chviiR02ReceiptRows(){
 const filename=path.join(root,chviiR02Receipt);
 if(!fs.existsSync(filename))return new Map();
 const body=fs.readFileSync(filename,"utf8");
 const found=[...body.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
 assert.equal(found.length,4,"R02 scoped Q18 intake requires all four lessons");
 const rows=new Map(found.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
 assert.equal(rows.size,4,"R02 receipt duplicate lesson");
 return rows;
}

const chviiClarityReceipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_R02_LEARNER_CLARITY_DELTA_RECEIPT_20261114.md";
function chviiClarityReceiptRows(){
 const p=path.join(root,chviiClarityReceipt);
 if(!fs.existsSync(p))return new Map();
 const body=fs.readFileSync(p,"utf8");
 const found=[...body.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
 assert.equal(found.length,4,"R02 learner clarity receipt must lock B19–B22");
 const rows=new Map(found.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
 assert.equal(rows.size,4,"R02 learner clarity receipt duplicates lesson");
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
 const chvii=chviiEditorialReceiptRows().get(name);
 assert(!(chvii&&(chiv||chv||chvi)),name+" overlapping ChVII source receipt");
 const row=chiv||chv||chvi||chvii;
 if(row){
  assert.equal(row.baseline,blobs[1],name+" immutable S1/Q18 baseline must match ledger candidate");
  assert.notEqual(row.candidate,row.baseline,name+" editorial source must be distinct");
  assert.equal(row.moved,({B07:5,B08:5,B09:5,B10:6,B11:4,B12:4,B13:5,B14:5,B15:5,B16:5,B17:5,B18:4,B19:7,B20:5,B21:5,B22:8})[name],name+" moved First Try count");
  if(chvii){
   assert.equal(chvii.helps,({B19:9,B20:7,B21:7,B22:10})[name],name+" exact total HELP count");
   assert.equal(chvii.examples,({B19:2,B20:2,B21:2,B22:3})[name],name+" anti-ChVI Golden worked-example count");
  }
  const ux=chviExampleUxReceiptRows().get(name);
  if(ux){
   assert(chvi&&!chiv&&!chv,name+" UX follow-on restricted to published Chapter VI source");
   assert.equal(ux.baseline,row.candidate,name+" immutable source chain: original ChVI receipt → UX delta");
   assert.notEqual(ux.candidate,ux.baseline,name+" follow-on UX candidate SHA must change");
   assert.equal(ux.examples,({B15:1,B16:4,B17:4,B18:4})[name],name+" explicit Golden example section count");
   return ux.candidate;
  }
  const narrative=chviiContinuousReceiptRows().get(name);
  if(narrative){
   assert(chvii&&!chiv&&!chv&&!chvi,name+" narrative receipt outside Chapter VII");
   assert.equal(narrative.baseline,chvii.candidate,name+" follow-on source chain must start at approved published ChVII Git blob");
   assert.notEqual(narrative.candidate,narrative.baseline,name+" meaningful narrative delta expected");
   assert.equal(narrative.moved,chvii.moved,name+" canonical First Try count drift");
   assert.equal(narrative.helps,chvii.helps,name+" HELP count drift");
   assert.equal(narrative.examples,chvii.examples,name+" example count drift");
   const mathjax=chviiAp2ReceiptRows().get(name);
   if(mathjax){
    assert.equal(mathjax.baseline,narrative.candidate,name+" AP2 source chain must follow reviewed PR845 SHA");
    assert.notEqual(mathjax.candidate,mathjax.baseline,name+" AP2 candidate must be a new blob");
    assert.equal(mathjax.moved,narrative.moved,name+" AP2 must preserve canonical questions");
    assert.equal(mathjax.helps,narrative.helps,name+" AP2 must preserve D6 HELP");
    const r02=chviiR02ReceiptRows().get(name);
    if(r02){
     assert.equal(r02.baseline,mathjax.candidate,name+" R02 must start at exact AP2 approved source blob");
     assert.notEqual(r02.candidate,r02.baseline,name+" actual student teaching revision must change source");
     assert.equal(r02.moved,mathjax.moved,name+" canonical Vận dụng count must remain fixed");
     assert.equal(r02.helps,mathjax.helps,name+" canonical HELP count must remain fixed");
     assert.equal(r02.examples,chvii.examples,name+" original worked-example count preserved");
     const clarity=chviiClarityReceiptRows().get(name);
     if(clarity){
      assert.equal(clarity.baseline,r02.candidate,name+" learner clarity must extend exact R02 PASS source");
      assert.notEqual(clarity.candidate,clarity.baseline,name+" clarity patch must actually change source");
      assert.equal(clarity.moved,r02.moved,name+" clarity cannot delete canonical exercises");
      assert.equal(clarity.helps,r02.helps,name+" clarity cannot alter D6 HELP");
      assert.equal(clarity.examples,r02.examples,name+" clarity cannot delete worked examples");
      return clarity.candidate;
     }
     return r02.candidate;
    }
    return mathjax.candidate;
   }
   return narrative.candidate;
  }
  return row.candidate;
 }
 return blobs[1];
}
function candidateG10KnowledgeBlob(lesson){
 const sentinel="0".repeat(40),result=expectedG10KnowledgeBlob(lesson,sentinel);
 return result===sentinel?null:result;
}
module.exports={expectedG10KnowledgeBlob,candidateG10KnowledgeBlob,chivEditorialReceiptRows,chvEditorialReceiptRows,chviEditorialReceiptRows,chviExampleUxReceiptRows,chviiEditorialReceiptRows,chviiContinuousReceiptRows,chviiAp2ReceiptRows,chviiR02ReceiptRows,chviiClarityReceiptRows};
