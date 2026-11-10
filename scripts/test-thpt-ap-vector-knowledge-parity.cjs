#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* UX795 Model B G10 vector AP source lock: preserve legacy display/dollar
 * mathematical expression sequence exactly while allowing owner-approved
 * narrative Delta C in four independent Level-1 tabs. Not academic PASS.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const cases=[
 {n:7,count:9,hash:"bcee085f",sha:"76a449bbc3386e7dc244b1e981dc55f454605350",headings:5,tryCount:5,helpCount:2,figs:1},
 {n:8,count:10,hash:"e7848abf",sha:"9495a09548acffeea2763816336fc22859933890",headings:5,tryCount:5,helpCount:2,figs:1},
 {n:10,count:24,hash:"fe5bcbec",sha:"ff46465388cf3882af931fc181bb635413f7d521",headings:4,tryCount:6,helpCount:3,figs:2}
];
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
const blob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const math=s=>[...s.matchAll(/\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)].map(m=>(m[1]??m[2]).trim());
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
for(const c of cases){
 const src=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/chuong-iv/bai-"+c.n+".md"),"utf8");
 assert.equal(blob(src),expectedG10KnowledgeBlob(c.n,c.sha),"B"+c.n+": pinned Delta C source snapshot changed");
 assert.deepEqual([...src.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
  "B"+c.n+": exactly four Level-1 tabs required");
 const start=src.indexOf('=== "Kiến thức SGK"'),end=src.indexOf('=== "Ví dụ"',start);
 assert(start>=0&&end>start,"B"+c.n+": knowledge/example areas missing");
 const middle=src.slice(start,end),expressions=math(middle);
 assert.equal(expressions.length,c.count,"B"+c.n+": reviewed legacy formulas removed");
 assert.equal(fnv(JSON.stringify(expressions)),c.hash,
  "B"+c.n+": legacy formulas changed or reordered (not UI-only)");
 assert.equal((middle.match(/^    ### \d+\./gm)||[]).length,c.headings,
  "B"+c.n+": all formal SGK concept groups must remain present");
 const tries=[...src.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
 const helps=[...src.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(tries.length,c.tryCount,"B"+c.n+": Q15 canonical First Try count changed");
 assert.equal(new Set(tries).size,c.tryCount,"B"+c.n+": duplicate First Try");
 assert.equal(helps.length,c.helpCount,"B"+c.n+": D6 HELP count changed");
 assert.equal(new Set(helps).size,c.helpCount,"B"+c.n+": duplicate HELP");
 assert.equal((src.match(/^    \?\?\? (question|tip) "/gm)||[]).length,c.tryCount+c.helpCount,
  "B"+c.n+": answers/remediation must stay collapsed");
 assert.equal((src.match(/<figure\b/g)||[]).length,c.figs,
  "B"+c.n+": original D5/extra SVG absent");
 assert(!/PREREQUISITE_CONFIRMED|D5 kế thừa|CONTENT_READY:|data-mastery-credit/.test(src),
  "B"+c.n+": QA metadata/Mastery leaked");
 assert(src.includes("luyen-tap.md")&&src.includes("tu-kiem-tra-chuong.md"),
  "B"+c.n+": Core and end-of-chapter deep links broken");
}
console.log("PASS UX795 vector AP: 43/43 historical math expressions source-locked across B07/B08/B10, 16 First Try, 7 HELP, 4 SVG and four Level-1 tabs.");
