#!/usr/bin/env node
"use strict";
/* G10 B01–B06 learner-facing Golden browser QA.
 * B01 now references owner-corrected R02 source and immutable R01→R02 Q18
 * receipts; B03–B06 keep exact historic SHA. Golden UI/answer and D6
 * regressions are checked; this does NOT independently approve Delta C.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_G10_URL||"http://127.0.0.1:8765";
const SHA={
"docs/thpt-preview/sgk/chuong-i/bai-1.md":"fb4bd72f6101523e30e30cc970d74c23b76228a8",
"docs/thpt-preview/sgk/chuong-i/bai-2.md":"8a7b90f1768b789429def045e38ebe97e6adbf3a",
"docs/thpt-preview/sgk/chuong-ii/bai-3.md":"c9ae5104c2f65779f2dd452d3f7775abe2600b7b",
"docs/thpt-preview/sgk/chuong-ii/bai-4.md":"2c432958169cd9f3a8a66e6bc07610b6a60d5815",
"docs/thpt-preview/sgk/chuong-iii/bai-5.md":"d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2",
"docs/thpt-preview/sgk/chuong-iii/bai-6.md":"3a2f4392357b0a7155488ba2427fbb2dde0dde81"
};
const STYLES={
"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css":"44442773ac31eb1a46f0cab699a7d2c7974a5f37",
"docs/assets/stylesheets/site-design-system.css":"cede51cfff25ef4f6c612c894c81f4639625c32b",
"docs/assets/stylesheets/thpt-r4-preview.css":"f46b7280965c226039093c408dc7f8e3e78001fa",
"docs/assets/stylesheets/thpt-sgk-lesson-nav-v1.css":"4bf16bba1cd144f0a69c932d8ead24dd4534f4cb",
"mkdocs.yml":"0567277340fa5c062dd83e63f7e8796556d1ba51",
"mkdocs.thpt-preview.yml":"a18192415be322da6b3bdea6e6ca462cf1a189b4"
};
function hash(buffer){
 const b=Buffer.isBuffer(buffer)?buffer:Buffer.from(buffer);
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
}
function checkSHA(){
 for(const [p,sha] of Object.entries({...SHA,...STYLES})){
  const data=fs.readFileSync(path.join(root,p));
  if(p==="docs/thpt-preview/sgk/chuong-i/bai-1.md"){
   const original=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_ENRICHMENT_DELTA_RECEIPT_R01_20261115.md"),"utf8");
   const follow=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_OWNER_P2_DELTA_RECEIPT_R02_20261115.md"),"utf8");
   const oldCandidate=original.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const newBaseline=follow.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const newCandidate=follow.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert(oldCandidate&&newBaseline===oldCandidate&&original.includes("**BASELINE_LESSON_GIT_BLOB:** "+String.fromCharCode(96)+sha+String.fromCharCode(96)),
    "B01 R02 must extend original owner-reviewed R01 / frozen historical SGK baseline");
   assert.equal(hash(data),newCandidate,"B01 owner P2 source must match exactly R02 Q18 candidate Git blob");
  }else if(p==="docs/thpt-preview/sgk/chuong-i/bai-2.md"){
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
   const baseline=receipt.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const candidate=receipt.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert.equal(baseline,sha,"B02 immutable prior SGK candidate source SHA remains source-locked");
   assert.equal(hash(data),candidate,"B02 source must exactly match S1/Q18 enrichment receipt");
  }else if(p==="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"){
   const b01=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_DEFINITION_COLOR_UI_DELTA_A_20261116.md"),"utf8");
   const b02=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
   const b01Baseline=b01.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const b01Candidate=b01.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const b02Baseline=b02.match(/^\*\*CSS_PATH:\*\*.*baseline \x60([a-f0-9]{40})\x60/m)?.[1];
   const b02Candidate=b02.match(/^\*\*CSS_PATH:\*\*.*candidate \x60([a-f0-9]{40})\x60/m)?.[1];
   assert(b01Baseline===sha&&b01Candidate===b02Baseline,
    "Original B01 teal receipt must be immutable and B02 CSS extend that exact blob");
   assert.equal(hash(data),b02Candidate,"B02 scoped teal CSS must match its source-locked Q18 receipt");
  }else assert.equal(hash(data),sha,"Untouched SGK sibling source/theme drift: "+p);
 }
 const q18=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
 const asset=fs.readFileSync(path.join(root,
  "docs/assets/images/thpt/G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"));
 const js=fs.readFileSync(path.join(root,"docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js"));
 assert(q18.includes("**SVG_ASSET_GIT_BLOB:** "+String.fromCharCode(96)+hash(asset)+String.fromCharCode(96)),
  "B02 S1 nested-set diagram must match immutable figure SHA");
 assert(q18.includes("candidate "+String.fromCharCode(96)+hash(js)+String.fromCharCode(96)),
  "B02 Golden route JS must match Q18 candidate SHA");
}
const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const ch=n=>n<=2?"i":n<=4?"ii":"iii";
const widths=[390,820,1440];
(async()=>{
 checkSHA();
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let passed=0;
 try{
  for(const width of widths){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    for(let n=1;n<=6;n++){
     const loc="G10-B"+n+"@"+width;
     const url=base+"/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+"/";
     const res=await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
     assert(res?.ok(),loc+" HTML page reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10B01B06EditorialNumbered==="true",{timeout:15000});
     const tabs=page.locator(".md-content__inner .tabbed-set").first();
     const labels=tabs.locator(":scope > .tabbed-labels > label");
     assert.deepEqual((await labels.allInnerTexts()).map(t=>t.trim()),names,loc+" four section titles");
     const groups=tabs.locator(":scope > .tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,loc+" EXACT four original tab blocks");
     const discovery=groups.nth(0).locator("h3");
     const discoveryTitles=(await discovery.allInnerTexts()).map(x=>x.trim());
     const expectedDiscovery=n===1?
      ["1.1. Vì sao toán học cần mệnh đề?",
       "1.2. Đọc đúng chiều của một lời khẳng định",
       "1.3. “Mọi” và “có ít nhất một” khác nhau ra sao?",
       "1.4. Thuật ngữ và điều em cần nhớ"]:
      n===2?["1.1. Tập hợp giúp ta xác định những đối tượng nào?",
       "1.2. Đọc hình và tìm phần chung","1.3. Thuật ngữ và mục tiêu bài học"]:
      ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"];
     assert.deepEqual(discoveryTitles,expectedDiscovery,loc+" meaningful concept-first discovery headings");
     const knowledge=(await groups.nth(1).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(knowledge.length>=(n===2?3:4)&&knowledge.every((v,i)=>v.startsWith("2."+(i+1)+". ")),loc+" authentic S1 SGK main sections");
     if(n===2)assert.deepEqual(knowledge,["2.1. Các khái niệm cơ bản về tập hợp",
      "2.2. Các tập hợp số","2.3. Các phép toán trên tập hợp"],loc+" original S1 has 3 main sections");
     if(n===1){
      const conceptBoxes=groups.nth(1).locator(".thpt-r4-knowledge-conclusion");
      assert.equal(await conceptBoxes.count(),7,loc+" B01 canonical boxed definitions and notation");
      const boxText=(await conceptBoxes.allInnerTexts()).join(" ");
      for(const key of ["Mệnh đề:","Mệnh đề chứa biến:","Mệnh đề phủ định:",
          "Mệnh đề kéo theo:","Mệnh đề đảo:","Mệnh đề tương đương:","Kí hiệu — Lượng từ:"])
        assert(boxText.includes(key),loc+" missing core S1 learner concept "+key);
      const applications=(await groups.nth(1).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng."));
      assert.equal(applications.length,5,loc+" five visually uniform Vận dụng prompts");
      const analyses=(await groups.nth(2).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Phân tích."));
      assert.equal(analyses.length,4,loc+" four correctly titled analysis paragraphs before solution");
      assert(!await groups.nth(2).getByText("Vì sao chọn cách này?",{exact:true}).count(),
        loc+" never render rejected method-choice prompt");
     }
     if(n===2){
      const knowledgePane=groups.nth(1);
      const boxes=knowledgePane.locator(".thpt-r4-concept-card");
      assert.equal(await boxes.count(),13,loc+" thirteen source-aligned concept boxes");
      assert.equal(await knowledgePane.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)").count(),4,
        loc+" four amber memory cards");
      const ids=await knowledgePane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.equal(ids.length,6,loc+" original six B02 First Tries");
      assert.equal(new Set(ids).size,6,loc+" no duplicate First Try ID");
      const texts=await knowledgePane.locator("p").allInnerTexts();
      assert.equal(texts.filter(x=>x.trim().startsWith("Vận dụng.")).length,6,
       loc+" six uniform Vận dụng titles");
      const analyses=await groups.nth(2).locator("p").allInnerTexts();
      assert.equal(analyses.filter(x=>x.trim().startsWith("Phân tích.")).length,4,
        loc+" four analysis-before-method examples");
      const diagram=knowledgePane.locator('img[src*="G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"]');
      assert.equal(await diagram.count(),1,loc+" S1 nested number sets SVG present");
      await page.waitForFunction(()=>{
       const image=document.querySelector('img[src*="G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"]');
       return !!image&&image.complete&&image.naturalWidth>0;
      },null,{timeout:15000});
     }
     const exampleTitles=(await groups.nth(2).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(exampleTitles.length>=(n===2?4:3)&&exampleTitles.every((v,i)=>v.startsWith("3."+(i+1)+". Ví dụ "+(i+1)+" —")),loc+" S1 extended worked example titles");
     // Visual consistency: every worked example has one full tinted solution,
     // and the table's headers and cells share the same column alignment.
     const solutions=groups.nth(2).locator(".thpt-g10-example-solution");
     assert.equal(await solutions.count(),exampleTitles.length,loc+" complete worked-solution panels");
     const solutionState=await solutions.evaluateAll(nodes=>nodes.map(node=>({
      starts:/^Lời giải(?:\s+theo vùng)?\./iu.test(node.firstElementChild?.textContent.trim()||""),
      background:getComputedStyle(node).backgroundColor,
      padding:parseFloat(getComputedStyle(node).paddingTop),
      originalStrong:node.firstElementChild?.querySelector(":scope > strong")?.textContent.trim()||""
     })));
     assert(solutionState.every(x=>x.starts&&x.padding>0&&x.background!=="rgba(0, 0, 0, 0)"),
      loc+" restored visually boxed solution text");
     const tableResults=await page.locator(".thpt-g10-knowledge-table").evaluateAll(tables=>tables.map(table=>{
      const header=table.querySelector("thead tr");
      const body=table.querySelector("tbody tr");
      if(!header||!body)return false;
      return [...header.cells].every((cell,i)=>{
       const data=body.cells[i];
       if(!data)return false;
       return getComputedStyle(cell).textAlign===getComputedStyle(data).textAlign &&
         getComputedStyle(data).verticalAlign==="middle";
      });
     }));
     assert(tableResults.every(Boolean),loc+" header/data table alignment");
     // MkDocs Material animates selection color; assert the settled Golden
     // reference color, not a transient interpolation during navigation.
     await page.waitForFunction(()=>{
      const label=document.querySelector(".md-content__inner .tabbed-labels > label");
      return !!label&&getComputedStyle(label).backgroundColor==="rgb(40, 77, 181)";
     },null,{timeout:4500});
     const golden=await page.evaluate(()=>{
      const root=document.querySelector(".md-content__inner");
      const sections=[...root.querySelectorAll(".tabbed-content > .tabbed-block")];
      const tabLabels=[...root.querySelectorAll(".tabbed-labels > label")];
      return {
       fourHeadings:sections.map(b=>b.querySelector(":scope > h2.thpt-g10-section-heading")?.textContent.trim()||""),
       headers:[...root.querySelectorAll(".tabbed-block > h3")].every(h=>
        getComputedStyle(h).borderLeftWidth==="4px" &&
        getComputedStyle(h).backgroundImage.includes("linear-gradient")),
       lead:root.querySelectorAll(".thpt-r4-lead").length,
       notes:root.querySelectorAll("p.thpt-r4-footnote").length,
       notesLast:sections[3].querySelectorAll("p.thpt-r4-footnote").length,
       noteText:[...root.querySelectorAll("p.thpt-r4-footnote")].map(p=>p.textContent).join(" "),
       disclosure:[...root.querySelectorAll("details.question")].every(d=>
        d.querySelector("summary")?.textContent.trim()==="Đối chiếu" &&
        getComputedStyle(d).backgroundColor==="rgb(248, 250, 255)"),
       tip:[...root.querySelectorAll("details.tip")].every(d=>
        getComputedStyle(d).backgroundColor==="rgb(248, 250, 255)"),
       firstTabBg:getComputedStyle(tabLabels[0]).backgroundColor
      };
     });
     assert.deepEqual(golden.fourHeadings,[
      "1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ",
      "4. Lỗi thường gặp và cách tự khắc phục"
     ],loc+" Golden HTML section bars and numbering");
     assert(golden.headers,loc+" numbered headings have pale background and blue border");
     assert.equal(golden.lead,0,loc+" redundant lead paragraph removed");
     assert.equal(golden.notes,1,loc+" only one source note for entire lesson");
     assert.equal(golden.notesLast,1,loc+" source only inside last tab");
     assert(!/Luyện tập tự đối chiếu không phải|Học liệu tự luyện không dùng/.test(golden.noteText),
      loc+" no redundant self-check disclaimer");
     assert(golden.disclosure&&golden.tip,loc+" subdued reference disclosure styling");
     assert.equal(golden.firstTabBg,"rgb(40, 77, 181)",loc+" HTML blue active tab styling");

     // Match owner HTML Golden, not Material's smaller table/disclosure fonts.
     const fontAudit=await page.evaluate(()=>{
      const article=document.querySelector(".md-content__inner");
      const reference=article.querySelector(".tabbed-block p");
      const px=el=>el?parseFloat(getComputedStyle(el).fontSize):null;
      const body=px(reference);
      const cells=[...article.querySelectorAll(".tabbed-block table th,.tabbed-block table td")].map(px);
      const folds=[...article.querySelectorAll(".tabbed-block details.question")];
      const summaries=folds.map(d=>px(d.querySelector("summary")));
      const inside=folds.flatMap(d=>[...d.querySelectorAll("p")].map(px));
      const callouts=[...article.querySelectorAll(".thpt-r4-knowledge-conclusion")].map(x=>({
       background:getComputedStyle(x).backgroundColor,
       left:getComputedStyle(x).borderLeftColor
      }));
      const labels=[...article.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
      return {body,cells,summaries,inside,callouts,
       buttons:labels.map(l=>({height:l.getBoundingClientRect().height,font:px(l),width:l.getBoundingClientRect().width}))};
     });
     assert(fontAudit.body>0,loc+" normal text reference measurable");
     assert(fontAudit.cells.every(px=>Math.abs(px-fontAudit.body)<.6),loc+" all table fonts match normal text");
     assert(fontAudit.summaries.every(px=>Math.abs(px-fontAudit.body)<.6),
      loc+" Đối chiếu label same normal-text size");
     assert(fontAudit.inside.every(px=>Math.abs(px-fontAudit.body)<.6),
      loc+" revealed answer text same normal-text size");
     assert(fontAudit.callouts.length>0,loc+" concept or memory callouts exist");
     if(n===1){
      assert.equal(fontAudit.callouts.length,7,loc+" exactly seven S1 concept/notation boxes");
      assert(fontAudit.callouts.every(c=>c.background==="rgb(232, 247, 242)"&&c.left==="rgb(8, 125, 105)"),
       loc+" B01 teal S1 definitions distinct from amber memory box (light mode)");
      const scheme=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion")
       .evaluateAll(nodes=>nodes.map(el=>({
        bg:getComputedStyle(el).backgroundColor,
        left:getComputedStyle(el).borderLeftColor
       })));
      assert(dark.length===7&&dark.every(c=>c.bg==="rgb(25, 61, 54)"&&c.left==="rgb(118, 223, 199)"),
       loc+" B01 concept boxes use slate teal theme");
      await page.evaluate(old=>{
       if(old===null)document.body.removeAttribute("data-md-color-scheme");
       else document.body.setAttribute("data-md-color-scheme",old);
      },scheme);
     }else{
      assert(fontAudit.callouts.every(c=>c.background==="rgb(255, 243, 213)"&&c.left==="rgb(196, 154, 55)"),
       loc+" B02–B06 keep original amber memory cards");
     }
     assert(fontAudit.buttons.every(b=>b.height>=42&&b.height<=52),
      loc+" compact original-HTML tab height");
     // Actual TOC interaction (including hidden sidebar at phone width):
     // click a heading of tab 2 while tab 3 is active, then reverse.
     const sgkId=await groups.nth(1).locator("h3[id]").first().getAttribute("id");
     const exId=await groups.nth(2).locator("h3[id]").first().getAttribute("id");
     for(const [from,to,id] of [[2,1,sgkId],[1,2,exId]]){
      await labels.nth(from).click();
      const link=page.locator('.md-sidebar--secondary a[href="#'+id+'"]').first();
      assert.equal(await link.count(),1,loc+" TOC anchor "+id+" exists");
      await link.evaluate(a=>a.click()); // works when mobile TOC is collapsed
      await page.waitForFunction(x=>{
       const target=document.getElementById(x);
       return !!target&&target.getBoundingClientRect().height>0;
      },id);
      assert(await groups.nth(to).isVisible(),loc+" TOC navigates to hidden tab "+(to+1));
      assert.equal(new URL(page.url()).hash,"#"+id,loc+" TOC maintains deep-link history");
     }
     // Direct #deep-links and browser back must restore the correct tab.
     await page.evaluate(id=>{window.location.hash="#"+id;},sgkId);
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,sgkId);
     assert(await groups.nth(1).isVisible(),loc+" hashchange activates Knowledge tab");
     const mistakes=groups.nth(3).locator(":scope > details.tip > summary");
     assert((await mistakes.count())>=2,loc+" original remediation folds");
     const mistakeTitles=(await mistakes.allInnerTexts()).map(x=>x.trim());
     assert(mistakeTitles.every((v,i)=>v.startsWith("4."+(i+1)+". ")),loc+" 4.x mistake labels");
     const source=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+".md"),"utf8");
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id"]){
      const exp=[...source.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
      const got=(await page.locator("["+key+"]").evaluateAll((elements,k)=>elements.map(e=>e.getAttribute(k)),key)).sort();
      assert.deepEqual(got,exp,loc+" "+key+" parity");
     }
     for(let t=0;t<4;t++){
      await labels.nth(t).click();
      assert(await groups.nth(t).isVisible(),loc+" tab "+(t+1)+" actually opens");
     }
     assert.equal(await tabs.locator("details.question[open]").count(),0,loc+" no pre-revealed formative answer");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,loc+" no RD1 readiness mounted in Knowledge");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+3);
     assert(!overflow,loc+" whole-page overflow");
     passed++;
     console.log("PASS "+loc+" four compact HTML tabs, framed headings, quiet disclosures, single footer, source/answer safety");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(passed,18);
 console.log("PASS 18/18 real browser cases G10 B01-B06 (390/820/1440). B01 owner P2 R02 SHA chain, B02–B06 and CSS/config immutable; no answer-key/backend/deploy mutation.");
})().catch(e=>{console.error(e);process.exitCode=1});
