#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),http=require("node:http");
const {chromium}=require("playwright");
const docs=path.resolve(__dirname,"../docs");
const book=JSON.parse(fs.readFileSync(path.join(docs,"assets/data/thpt-g11-selfcheck/CHI.json"),"utf8"));
assert.equal(book.items.length,20);
assert.equal(book.scope,"SGK_CHAPTER_SELF_CHECK");
assert.equal(book.independent_readiness_credit,false);
assert.equal(book.persist_results,false);
assert.equal(book.mastery_credit,false);
assert.equal(book.public_client_answer_keys,true);
assert(book.items.every(q=>q.type==="WRITTEN_RUBRIC"&&q.rubric&&q.solution),"All 20 must be human-rubric items");
function server(){
  return new Promise(resolve=>{
    const app=http.createServer((req,res)=>{
      const url=new URL(req.url,"http://localhost"),name=decodeURIComponent(url.pathname);
      if(name==="/case/"){
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.end('<!doctype html><meta charset="UTF-8"><title>G11 selfcheck QA</title><div data-g11-chapter-selfcheck="CHI"></div><script src="/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js"></script>');
        return;
      }
      const f=path.resolve(docs,"."+name);
      if(!f.startsWith(docs+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile()){res.writeHead(404);res.end("Missing");return;}
      const type=f.endsWith(".json")?"application/json":f.endsWith(".js")?"text/javascript":"text/plain";
      res.writeHead(200,{"Content-Type":type+"; charset=utf-8"});res.end(fs.readFileSync(f));
    });
    app.listen(0,"127.0.0.1",()=>resolve({app,port:app.address().port}));
  });
}
(async()=>{
  const {app,port}=await server();
  const browser=await chromium.launch({headless:true});
  try{
    for(const width of [390,820,1440]){
      const page=await browser.newPage({viewport:{width,height:900}});
      try{
        await page.addInitScript(()=>{
          window.__g11Writes=[];
          for(const target of [window.localStorage,window.sessionStorage]){
            const old=target.setItem.bind(target);
            target.setItem=(...args)=>{window.__g11Writes.push(args);return old(...args)};
          }
        });
        await page.goto("http://127.0.0.1:"+port+"/case/",{waitUntil:"networkidle"});
        const root=page.locator("[data-g11-chapter-selfcheck]");
        await root.locator(".g10sc-progress").waitFor();
        const beginning=await root.innerText();
        assert(beginning.includes("Câu 1 / 20"),"Wrong question count");
        for(const forbidden of ["Đáp án:","Lời giải:","Đúng theo đáp án","Kết quả tự đánh giá","4đ:","Rubric (/4):"])
          assert(!beginning.includes(forbidden),"Pre-submit answer leak: "+forbidden);
        assert.equal(await root.locator(".g10sc-review").count(),0);
        assert.equal(await root.locator("textarea").count(),1,"All Written answers use manual rubric");
        await root.locator("textarea").fill("Bài làm nháp của học sinh để tự đối chiếu.");
        await root.locator("[data-g10sc-next]").click();
        assert((await root.innerText()).includes("Câu 2 / 20"),"Next page failed");
        assert(!(await root.innerText()).includes("Lời giải:"),"Next leaked solution");
        await root.locator("[data-g10sc-prev]").click();
        assert.equal(await root.locator("textarea").inputValue(),"Bài làm nháp của học sinh để tự đối chiếu.","Answer not preserved");
        await root.locator('[data-g10sc-jump="19"]').click();
        assert((await root.innerText()).includes("Câu 20 / 20"),"Jump failed");
        assert(!(await root.innerText()).includes("Đáp án:"),"Jump leaked answer");
        await root.locator("[data-g10sc-final]").click();
        const post=await root.innerText();
        assert(post.includes("Kết quả tự đánh giá"),"No final report");
        assert(post.includes("Cần tự đối chiếu lời giải/rubric: 20 câu."),"Written results are not manual-only");
        assert(post.includes("Đáp án:")&&post.includes("Lời giải:")&&post.includes("Hướng dẫn tự đối chiếu:"),"No post-final rubric");
        assert(!post.includes("Phần có khóa chấm máy: 20 / 20"),"Written erroneously machine scored");
        assert.equal(await root.locator("[data-g10sc-final]").count(),1);
        assert.equal(await root.locator("[data-g10sc-final]").isVisible(),false,"Second submit exposed");
        assert.equal(await root.locator("textarea").isDisabled(),true,"Post submit answer editable");
        assert.deepEqual(await page.evaluate(()=>window.__g11Writes),[],"Unexpected storage write");
        const docWidth=await page.evaluate(()=>document.documentElement.scrollWidth);
        assert(docWidth<=width+8,"Page horizontally overflows viewport "+width);
      }finally{await page.close()}
    }
    console.log("PASS G11 ChI 20 Written selfcheck × 390/820/1440: before Final Submit no leak; one submission; rubric after; no machine score, no persistent writes.");
  }finally{await browser.close();await new Promise(resolve=>app.close(resolve));}
})().catch(err=>{console.error(err);process.exitCode=1});
