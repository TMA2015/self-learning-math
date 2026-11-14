#!/usr/bin/env node
"use strict";
/*
 * RELEASE-only dry-run: overlay G10 Knowledge on current main during CI,
 * retain the published shared title transformer, and verify final rendered
 * headings. This DOES NOT bypass Academic/PED Q18 or deploy.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const foldName=/^\s*\?\?\?\s+question\s+"([^"]+)"/gm;
const isAnswerReveal=title=>/(?:đối chiếu|lời giải|đáp án|tự mở kết quả)/i.test(title);
const concise=/<summary[^>]*>\s*Đối chiếu\s*<\/summary>/g;
const longTitle=/<summary[^>]*>\s*(?:Em đã[^<]{0,180}Mở (?:lời giải|đáp án)|Mở (?:lời giải|đáp án) sau khi)[^<]*<\/summary>/gi;

/* Only the exact 4-row Q18 ChVI follow-on receipt authorizes contextual
 * self-practice labels. Canonical First Try headings stay 'Đối chiếu'.
 * The integration-main test must receive this receipt from candidate CI. */
const uxPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md");
const uxReceipt=fs.existsSync(uxPath)?fs.readFileSync(uxPath,"utf8"):"";
const uxRows=[...uxReceipt.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
if(uxReceipt)assert.equal(uxRows.length,4,"ChVI UX receipt must have four immutable lessons");
const ux=new Map(uxRows.map(m=>[Number(m[1]),{baseline:m[2],candidate:m[3],examples:Number(m[4])}]));
if(uxReceipt)assert.equal(ux.size,4,"ChVI UX receipt duplicate lesson");
const chviiReceiptPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md");
const chviiReceipt=fs.existsSync(chviiReceiptPath)?fs.readFileSync(chviiReceiptPath,"utf8"):"";
const chviiRows=[...chviiReceipt.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(chviiReceipt)assert.equal(chviiRows.length,4,"ChVII must have all four signed first-try/HELP/example receipts");
const chvii=new Map(chviiRows.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));

const chviiNarrativeReceiptPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_CONTINUOUS_EXPLANATION_Q18_DELTA_RECEIPT_20261113.md");
const chviiNarrativeReceipt=fs.existsSync(chviiNarrativeReceiptPath)?
 fs.readFileSync(chviiNarrativeReceiptPath,"utf8"):"";
const chviiNarrativeRows=[...chviiNarrativeReceipt.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(chviiNarrativeReceipt)assert.equal(chviiNarrativeRows.length,4,
 "ChVII continuous-explanation follow-on receipt needs exactly four signed rows");
const chviiNarrative=new Map(chviiNarrativeRows.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
if(chviiNarrativeReceipt)assert.equal(chviiNarrative.size,4,"ChVII additive receipt lesson duplication");

const chviiAp2Path=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_AP2_EQUIVALENT_MATHJAX_DELTA_RECEIPT_20261113.md");
const chviiAp2Text=fs.existsSync(chviiAp2Path)?fs.readFileSync(chviiAp2Path,"utf8"):"";
const chviiAp2Matches=[...chviiAp2Text.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \|/gm)];
if(chviiAp2Text)assert.equal(chviiAp2Matches.length,4,"AP2 exact rows for all four ChVII lessons");
const chviiAp2=new Map(chviiAp2Matches.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5])}]));

const chviiR02Path=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_R02_ACADEMIC_PED_PASS_RELEASE_INTAKE_20261114.md");
const chviiR02Text=fs.existsSync(chviiR02Path)?fs.readFileSync(chviiR02Path,"utf8"):"";
const chviiR02Matches=[...chviiR02Text.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(chviiR02Text)assert.equal(chviiR02Matches.length,4,"R02 academic intake requires four signed lesson rows");
const chviiR02=new Map(chviiR02Matches.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));

const clarityPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_R02_LEARNER_CLARITY_DELTA_RECEIPT_20261114.md");
const clarityText=fs.existsSync(clarityPath)?fs.readFileSync(clarityPath,"utf8"):"";
const clarityMatches=[...clarityText.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(clarityText)assert.equal(clarityMatches.length,4,"exact four ChVII learner-clarity rows");
const clarity=new Map(clarityMatches.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));

const workFixPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_R02_WORK_BROWSER_FOLLOWUP_UX_RECEIPT_20261114.md");
const workFixText=fs.existsSync(workFixPath)?fs.readFileSync(workFixPath,"utf8"):"";
const workFixMatch=[...workFixText.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(workFixText)assert.equal(workFixMatch.length,4,"Work Browser follow-up must include all four B19–B22 rows");
const workFix=new Map(workFixMatch.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));

const stemAP2Path=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_R02_AP2_STEM_DISPLAY_EQUIVALENT_RECEIPT_20261114.md");
const stemAP2Text=fs.existsSync(stemAP2Path)?fs.readFileSync(stemAP2Path,"utf8"):"";
const stemAP2Matches=[...stemAP2Text.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
if(stemAP2Text)assert.equal(stemAP2Matches.length,4,"Four signed AP2 stem equivalence rows required");
const stemAP2=new Map(stemAP2Matches.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4])}]));

const htmlSelfPractice=/<summary[^>]*>\s*Xem lời giải ba câu tự luyện\s*<\/summary>/g;
const blob=raw=>crypto.createHash("sha1")
 .update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");

let lessons=0,first=0,reveals=0;
for(let n=1;n<=27;n++){
 const route="thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n;
 const markdown=fs.readFileSync(path.join(root,"docs",route+".md"),"utf8");
 const html=fs.readFileSync(path.join(root,"site-thpt-preview",route,"index.html"),"utf8");
 const titles=[...markdown.matchAll(foldName)].map(m=>m[1]);
 const count=titles.filter(isAnswerReveal).length;
 const ids=[...markdown.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const short=(html.match(concise)||[]).length;
 const verbose=(html.match(longTitle)||[]).length;
 assert(count>=ids.length,"B"+n+" all canonical First Try disclosures must be among explicit answer-reveal titles");
 const followon=ux.get(n);
 if(followon){
  const source=fs.readFileSync(path.join(root,"docs",route+".md"));
  assert.equal(blob(source),followon.candidate,"B"+n+" source SHA must match signed UX receipt");
 }
 const signedVII=chvii.get(n),amendedVII=chviiNarrative.get(n),ap2=chviiAp2.get(n),r02=chviiR02.get(n),edited=clarity.get(n),work=workFix.get(n),display=stemAP2.get(n);
 if(signedVII){
  const source=fs.readFileSync(path.join(root,"docs",route+".md"));
  if(amendedVII){
   assert.equal(amendedVII.baseline,signedVII.candidate,"B"+n+" follow-on Q18 baseline must match published Chapter VII signed source");
   assert.equal(amendedVII.tries,signedVII.tries,"B"+n+" FirstTry count altered in narrative receipt");
   assert.equal(amendedVII.helps,signedVII.helps,"B"+n+" HELP count altered in narrative receipt");
   assert.equal(amendedVII.examples,signedVII.examples,"B"+n+" D2 example count altered in narrative receipt");
  }
  if(ap2){
   assert(amendedVII,"B"+n+" AP2 cannot skip reviewed narrative source");
   assert.equal(ap2.baseline,amendedVII.candidate,"B"+n+" AP2 SHA must follow reviewed PR845 candidate");
   assert.equal(ap2.tries,signedVII.tries,"B"+n+" AP2 preserves canonical questions");
   assert.equal(ap2.helps,signedVII.helps,"B"+n+" AP2 preserves HELP");
  }
  if(r02){
   assert(ap2,"B"+n+" R02 teaching must follow independently reviewed AP2 base");
   assert.equal(r02.baseline,ap2.candidate,"B"+n+" exact R02 baseline");
   assert.equal(r02.tries,signedVII.tries,"B"+n+" canonical item total");
   assert.equal(r02.helps,signedVII.helps,"B"+n+" D6 count");
   assert.equal(r02.examples,signedVII.examples,"B"+n+" unchanged worked SGK examples");
  }
  if(edited){
   assert(r02,"B"+n+" clarity receipt must extend independent Academic/PED R02 source");
   assert.equal(edited.baseline,r02.candidate,"B"+n+" R02 source chain must be exact");
   assert.equal(edited.tries,signedVII.tries,"B"+n+" canonical First Try must be fixed");
   assert.equal(edited.helps,signedVII.helps,"B"+n+" HELP must be fixed");
   assert.equal(edited.examples,signedVII.examples,"B"+n+" D2 worked examples must be fixed");
  }
  if(work){
   assert(edited,"B"+n+" Work correction must build on independently reviewed R02 source");
   assert.equal(work.baseline,edited.candidate,"B"+n+" exact Work follow-up source baseline");
   assert.equal(work.tries,signedVII.tries,"B"+n+" canonical item count frozen");
   assert.equal(work.helps,signedVII.helps,"B"+n+" D6 HELP count frozen");
   assert.equal(work.examples,signedVII.examples,"B"+n+" worked examples count frozen");
  }
  if(display){
   assert(work,"B"+n+" AP2 source must follow Work fixed release candidate");
   assert.equal(display.baseline,work.candidate,"B"+n+" AP2 stem old source does not match Work receipt");
   assert.equal(display.tries,signedVII.tries,"B"+n+" AP2 must keep all canonical items");
  }
  const last=display?.candidate||work?.candidate||edited?.candidate||r02?.candidate||ap2?.candidate||amendedVII?.candidate||signedVII.candidate;
  assert.equal(blob(source),last,"B"+n+" ChVII source must match latest signed Q18 source-chain receipt");
  assert.equal(ids.length,signedVII.tries,"B"+n+" original ChVII FirstTry count");
  assert.equal([...markdown.matchAll(/data-thpt-help-id="([^"]+)"/g)].length,signedVII.helps,
   "B"+n+" ChVII D6 source receipt drift");
  assert.equal([...markdown.slice(markdown.indexOf('=== "Ví dụ"'),markdown.indexOf('=== "Lỗi thường gặp"')).matchAll(/^    ### /gm)].length,
   signedVII.examples,"B"+n+" worked-example solution count must be source locked");
 }

 if(followon&&[15,17,18].includes(n)){
  const self=(html.match(htmlSelfPractice)||[]).length;
  assert.equal(self,1,"B"+n+" one descriptive solution reveal for exactly three voluntary self-practice questions");
  assert.equal(short,ids.length,"B"+n+" every canonical First Try keeps concise Đối chiếu");
  assert.equal(count,short+self,"B"+n+" no unaccounted answer-reveal title");
 }else{
  assert.equal(short,count,"B"+n+" concise canonical answer labels must remain unchanged");
 }
 assert.equal(verbose,0,"B"+n+" obsolete spoken-style answer reveal titles must not show in post-merge HTML");
 for(const id of ids)assert(html.includes(id),"B"+n+" canonical First Try ID lost in main+candidate output: "+id);
 assert(!/<summary[^>]*>\s*Em vận dụng\s*<\/summary>/i.test(html),"B"+n+" application headings must be concise");
 lessons++;first+=ids.length;reveals+=short;
}
assert.equal(lessons,27,"Only G10 Knowledge scope is requested");
assert.equal(first,137,"The 137 existing First Try placements must remain canonical");
assert(reveals>=first,"At least all 137 First Try placements must have user-visible Đối chiếu labels");
console.log("PASS main+candidate dry-run 27 G10 Knowledge pages: "+reveals+" concise Đối chiếu labels for "+first+" First Tries; no verbose reveal headings, IDs preserved. NO DEPLOY; Q18 remains HOLD.");
