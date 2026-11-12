#!/usr/bin/env node
"use strict";
/* Q18 v2.0 baseline and Knowledge candidate SHA selection.
 * This retires only obsolete exact-text fingerprints; never infers academic
 * reviewer PASS or alters Q15/Q16, canonical IDs, math or private bank data.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const ledger="prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md";
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
 return blobs[1];
}
function candidateG10KnowledgeBlob(lesson){
 const sentinel="0".repeat(40),result=expectedG10KnowledgeBlob(lesson,sentinel);
 return result===sentinel?null:result;
}
module.exports={expectedG10KnowledgeBlob,candidateG10KnowledgeBlob};
