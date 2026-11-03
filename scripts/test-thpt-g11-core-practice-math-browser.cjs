"use strict";
// G11 RELEASE AP2 viewport QA: every B01–B33 Core/Practice item on 390,
// every lesson/role on 820/1440; immutability and P2 real Safari separate.
const assert=require("node:assert/strict"),fs=require("node:fs"),{chromium}=require("playwright");
const names=["chi-reviewed-formative-v1","chi-b03-b04-reviewed-formative-r01","chii-b05-b07-source-locked-formative-r03","chiii-b08-b09-source-locked-formative-r03","chiv-b10-b14-source-locked-formative-r03","chv-b15-b17-source-locked-formative-r03","chvi-b18-b21-source-locked-formative-r01","chvii-b22-b27-source-locked-formative-r01","chviii-b28-b30-source-locked-formative-r00","chix-b31-b33-source-locked-formative-r00"];
const records=names.flatMap(name=>{
 const src=fs.readFileSync("docs/assets/javascripts/thpt-g11-"+name+".js","utf8");
 const a=src.indexOf("const records=")+"const records=".length,b=src.indexOf("\n];",a);
 assert(b>a,"Malformed bank "+name);
 return JSON.parse(src.slice(a,b+2));
});
const chapter=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
const origin="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/";
const hasMath=text=>/\$[^$\n]+\$/.test(text);
(async()=>{
 const chromiumBrowser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let questions=0,roleViews=0,mathPrompts=0,answers=0;
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await chromiumBrowser.newPage({viewport});
   try{
    for(let ch=1;ch<=9;ch++){
     const lessonNumbers=Array.from({length:33},(_,i)=>i+1).filter(n=>["i","ii","iii","iv","v","vi","vii","viii","ix"][ch-1]===chapter(n));
     const route=origin+"chuong-"+["i","ii","iii","iv","v","vi","vii","viii","ix"][ch-1]+"/luyen-tap/";
     const response=await page.goto(route,{waitUntil:"networkidle",timeout:45000});
     assert(response?.ok(),"Missing G11 Core/Practice hub "+route);
     await page.waitForFunction(()=>Boolean(window.MathJax?.typesetPromise),null,{timeout:30000});
     for(const lesson of lessonNumbers){
      for(const role of ["core","practice"]){
       const selected=records.filter(q=>Number(q.lesson)===lesson&&(role==="core"?q.role==="CORE":q.role!=="CORE"));
       assert(selected.length>0,"No canonical items B"+lesson+" "+role);
       const open=page.locator('[data-thpt-open-quiz="g11-b'+lesson+'-'+role+'"]');
       assert.equal(await open.count(),1,"Missing route button B"+lesson+" "+role);
       await open.click();
       const dlg=page.locator("dialog.thpt-r4-practice-dialog");
       await dlg.waitFor({state:"visible",timeout:12000});
       const nav=dlg.locator(".thpt-r4-modal-question-nav button");
       assert.equal(await nav.count(),selected.length,"Incorrect role count B"+lesson+" "+role);
       roleViews++;
       // All 359 questions on phone; one item per role at tablet/desktop.
       const limit=viewport.width===390?selected.length:1;
       for(let i=0;i<limit;i++){
        const q=selected[i];
        if(i)await nav.nth(i).click();
        const card=dlg.locator(".thpt-r4-reviewed-formative-card");
        assert.equal(await card.getAttribute("data-thpt-canonical-item"),q.item_id,"Wrong canonical ID");
        const prompt=card.locator("h3");
        if(hasMath(q.stem)){
         await prompt.locator("mjx-container").first().waitFor({state:"attached",timeout:12000});
         const shown=await prompt.innerText();
         assert(!shown.includes("$"),"Unrendered dollar in "+q.item_id+": "+shown);
         assert(await prompt.locator(".thpt-r4-formative-math-inline").count()>0,"ChIX paired dollar math must remain INLINE "+q.item_id);
         assert.equal(await prompt.locator(".thpt-r4-formative-math-display").count(),0,"ChIX inline dollar math must not become display math "+q.item_id);
         mathPrompts++;
        }
        if(q.stem.includes("\x60")||q.stem.includes("**")){
         const visible=await prompt.innerText();
         assert(!visible.includes("\x60")&&!visible.includes("**"),"Unrendered original math markup "+q.item_id);
        }
        if(lesson===5&&q.stem.includes("u_")){
         assert(await prompt.locator("sub[data-thpt-reviewed-script]").count()>0,"Raw G11 B05 subscript: "+q.item_id);
        }
        if(lesson===18&&q.stem.includes("^")&&!q.stem.includes("$")&&/\^\(/.test(q.stem)){
         assert(await prompt.locator("sup[data-thpt-reviewed-script]").count()>0,"Raw G11 B18 power: "+q.item_id);
        }
        assert.equal(await card.locator("details[open]").count(),0,"Premature shown solution "+q.item_id);
        assert.equal(await card.locator(".thpt-r4-formative-feedback").innerText(),"","Premature correctness feedback "+q.item_id);
        if(viewport.width===390){
         const input=card.locator(".thpt-r4-formative-answer textarea");
         if(await input.count())await input.fill("Em tự giải");
         else await card.locator('.thpt-r4-formative-answer input[type="radio"]').first().check();
         await card.locator(".thpt-r4-formative-submit").click();
         if(await input.count()){
          const sol=card.locator("details").nth(1);
          assert(await sol.getAttribute("open")!==null,"No opt-in formative comparison "+q.item_id);
          if(hasMath(q.solution)){
           await sol.locator("mjx-container").first().waitFor({state:"attached",timeout:12000});
           assert(!(await sol.innerText()).includes("$"),"Raw TeX in reviewed solution "+q.item_id);
          }
          answers++;
         }
        }
        questions++;
       }
       await dlg.locator("[data-thpt-modal-close]").click();
      }
     }
     assert((await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth))<=20,"Page horizontal overflow at "+viewport.width);
    }
    const legacy=await page.goto("http://127.0.0.1:8765/kien-thuc/",{waitUntil:"networkidle"});
    assert(legacy?.ok(),"THCS regression route missing");
    assert.equal(await page.locator(".thpt-r4-reviewed-formative").count(),0,"THCS contaminated by G11 modal");
   }finally{await page.close()}
  }
  assert(questions>=359+66*2,"Insufficient G11 item/role visual coverage");
  assert(mathPrompts>=50,"ChIX TeX prompts not typeset in the actual modal");
  console.log("PASS G11 AP2 Core/Practice B01–B33: "+questions+" rendered questions, "+roleViews+" role modals, "+mathPrompts+" MathJax prompts, "+answers+" submitted manual comparisons; 390/820/1440, THCS isolated");
 }finally{await chromiumBrowser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
