#!/usr/bin/env node
"use strict";
/**
 * AUTHORING-only, fail-closed structural preflight BEFORE NotebookLM.
 * Does not mark Academic/PED PASS; NEVER reads protected private RD1 sources.
 * Usage: node scripts/audit-thpt-authoring-preflight.cjs <source.md>
 *        --lesson-nums=5,6,7 --items=42 --outcomes=16 --sha=<40hex>
 *        --require-ped
 * Can be used for G10/G11/G12 SGK; for Topic use its OWN explicit outcome/profile.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const cp=require("node:child_process");
const ROOT=path.resolve(__dirname,"..");
function audit(text, options) {
  const issues=[],warnings=[],evidence={};
  const matches=[...text.matchAll(/^#{3,5}\s+`?(THPT-G(?:10|11|12)-[A-Z0-9-]+)`?/gm)];
  const canonical=matches.map(m=>m[1]).filter(id=>/-(?:C|P|W)\d{2}(?:-ANCHOR)?$/.test(id));
  const unique=new Set(canonical);
  const outcomeMatches=[...text.matchAll(/^\|\s*`?(G(?:10|11|12)-(?:B\d{2}|CH[A-Z]+)-[A-Z0-9_-]+)`?\s*\|/gm)];
  const outcomes=[...new Set(outcomeMatches.map(m=>m[1]))];
  evidence.publicItems=canonical.length;
  evidence.uniquePublicItems=unique.size;
  evidence.outcomes=outcomes.length;
  evidence.pedMarkerCount=(text.match(/PED[1-6]/g)||[]).length;
  evidence.selfTryMentions=(text.match(/Tự thử|tự thử/gi)||[]).length;
  if(!canonical.length)issues.push("PREFLIGHT_PUBLIC_ITEM_HEADINGS_MISSING");
  if(unique.size!==canonical.length)issues.push("DUPLICATED_CANONICAL_ITEM_ID");
  if(options.items!==undefined&&canonical.length!==options.items)issues.push("EXPECTED_PUBLIC_ITEM_COUNT_MISMATCH");
  if(options.outcomes!==undefined&&outcomes.length!==options.outcomes)issues.push("EXPECTED_OUTCOME_COUNT_MISMATCH");
  if(/^#{2,5}\s+`?THPT-G(?:10|11|12)-[^\n]*-RD1-\d+/m.test(text))issues.push("PRIVATE_RD1_HEADING_EXPOSED");
  for(const m of matches) {
    const id=m[1];
    if(!/-(?:C|P|W)\d{2}(?:-ANCHOR)?$/.test(id))continue;
    const line=text.slice(m.index,text.indexOf("\n",m.index)>=0?text.indexOf("\n",m.index):undefined);
    if(/-C\d{2}$/.test(id)&&!/CORE/.test(line))issues.push("CORE_ROLE_MISSING:"+id);
    if(/-P\d{2}$/.test(id)&&!/PRACTICE|APPLICATION/.test(line))issues.push("PRACTICE_ROLE_MISSING:"+id);
    if(/-W\d{2}(?:-ANCHOR)?$/.test(id)&&!/WRITTEN/.test(line))issues.push("WRITTEN_ROLE_MISSING:"+id);
  }
  for(const n of options.lessons||[]) {
    const key="B"+String(n).padStart(2,"0");
    const lessonIds=canonical.filter(id=>id.includes("-"+key+"-"));
    evidence[key]={publicItemHeadings:lessonIds.length};
    if(!lessonIds.length)issues.push("LESSON_PUBLIC_ITEMS_MISSING:"+key);
    const why=new RegExp("(?:R\\d+-NEW|PED1|\\bWHY\\b|Vì sao|Tại sao|Vấn đề|Tình huống)[^\\n]{0,100}"+key+"|"+key+"[^\\n]{0,100}(?:PED1|WHY|Vì sao|Vấn đề)","i");
    const hinted=why.test(text);
    evidence[key].pedWhyMention=hinted;
    if(options.ped&&!hinted)warnings.push("PED1_SOURCE_POSITION_MANUAL_VERIFY:"+key);
  }
  if(options.ped&&evidence.selfTryMentions===0)issues.push("PED6_FIRST_TRY_EVIDENCE_MISSING");
  if(options.ped&&evidence.pedMarkerCount===0)warnings.push("PED1_TO_PED6_OUTCOME_MAPPING_MANUAL_VERIFY");
  if(!/D1/i.test(text)||!/D2/i.test(text)||!/D3/i.test(text)||!/D4/i.test(text)||!/D5/i.test(text)||!/D6/i.test(text))
    issues.push("D1_D6_SECTION_MARKER_MISSING");
  if(!/điều kiện|giả thiết|domain|TXĐ/i.test(text))warnings.push("MATH_DOMAIN_CONDITIONS_MANUAL_VERIFY");
  if(!/lời giải|giải thích|đáp án/i.test(text))warnings.push("ITEM_ANSWER_SOLUTION_MANUAL_VERIFY");
  warnings.push("S1_SGK_SBT_PRINTED_PAGES_REQUIRE_INDEPENDENT_SOURCE_RECEIPT");
  warnings.push("PED1_PED6_BY_OUTCOME_REQUIRES_INDEPENDENT_HUMAN_NOTEBOOKLM_REVIEW");
  warnings.push("PRIVATE_RD1_CUSTODY_SHA_AND_EXPOSURE_REQUIRE_SEPARATE_PROOF");
  warnings.push("READY_V2_REQUIRES_EXACT_REVIEW_RECEIPT_AND_NO_BLOCKERS");
  return {status:issues.length?"STRUCTURE_HOLD":"STRUCTURE_PREFLIGHT_ONLY_NOT_ACADEMIC_PASS",issues,warnings,evidence,ids:canonical,outcomes};
}
function selfTest(){
  const a=audit("## D1 D2 D3 D4 D5 D6\n### THPT-G11-B05-C01 · SGK_CORE · G11-B05-X\n| `G11-B05-X` | Test |\nTự thử. Vì sao B05?",{items:1,outcomes:1,lessons:[5],ped:true});
  assert.equal(a.status,"STRUCTURE_PREFLIGHT_ONLY_NOT_ACADEMIC_PASS");
  const dup=audit("## D1 D2 D3 D4 D5 D6\n### THPT-G11-B05-C01 · SGK_CORE\n### THPT-G11-B05-C01 · SGK_CORE", {items:2});
  assert(dup.issues.includes("DUPLICATED_CANONICAL_ITEM_ID"));
  const priv=audit("## D1 D2 D3 D4 D5 D6\n### THPT-G11-CHII-RD1-01\n### THPT-G11-B05-P01 · PRACTICE", {});
  assert(priv.issues.includes("PRIVATE_RD1_HEADING_EXPOSED"));
  console.log("PASS authoring preflight self-test (3 fixtures), structural only");
}
if(process.argv.includes("--self-test")){selfTest();process.exit(0)}
const filename=process.argv[2];
assert(filename&&!filename.startsWith("--"),"Source path required");
const input=path.resolve(ROOT,filename);
assert(input.startsWith(ROOT+path.sep),"File must be inside repo");
const allowed=["prototypes/thpt/content-drafts/","prototypes/thpt/review-packets/"];
assert(allowed.some(s=>filename.startsWith(s))&&filename.endsWith(".md"),"Only public author source markdown");
const flags=Object.fromEntries(process.argv.slice(3).filter(s=>s.startsWith("--")).map(s=>{const [k,...v]=s.slice(2).split("=");return[k,v.join("=")||"true"]}));
const options={lessons:flags["lesson-nums"]?flags["lesson-nums"].split(",").map(Number):[],ped:flags["require-ped"]==="true"};
if(flags.items!==undefined)options.items=Number(flags.items);
if(flags.outcomes!==undefined)options.outcomes=Number(flags.outcomes);
const content=fs.readFileSync(input,"utf8");
const actualSha=cp.execFileSync("git",["hash-object","--",input],{cwd:ROOT,encoding:"utf8"}).trim();
if(flags.sha)assert.equal(actualSha,flags.sha,"Source snapshot SHA mismatch (cannot inherit earlier PASS)");
const result=audit(content,options);
console.log(JSON.stringify({file:filename,gitBlob:actualSha,...result},null,2));
if(result.issues.length)process.exitCode=1;
