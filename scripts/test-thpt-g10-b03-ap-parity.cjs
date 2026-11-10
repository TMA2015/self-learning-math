#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* UX795 Model B, Grade 10 B03 AP1–AP5 Delta C. Previous D1 mathHash
 * 20a9cd2f belongs to historical source snapshot. New study content is
 * source-locked with its own math hash and checks all original outcome roles;
 * no academic verdict, merger or release implied.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const src=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/chuong-ii/bai-3.md"),"utf8");
const blob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
const expr=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(x=>(x[1]??x[2]).trim());
assert.equal(blob(src),expectedG10KnowledgeBlob(3,"d7fab29f7727e1873120c81353d9db0d30ef2c69"),
 "B03 exact Model B source changed; classify Delta C before updating receipt");
const labels=[...src.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
assert.deepEqual(labels,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
 "B03 exactly four Level-1 tabs, no L2");
const a=src.indexOf('=== "Kiến thức SGK"'),b=src.indexOf('=== "Ví dụ"',a);
assert(a>=0&&b>a,"B03 contiguous knowledge/example tabs missing");
const k=src.slice(a,b);
assert.equal(expr(k).length,116,"B03 mathematical source expression count drift");
assert.equal(fnv(JSON.stringify(expr(k))),"54ba164b",
 "B03 academic formula sequence changed; new Q18 receipt/Delta review needed");
for(const h of ["### 2.1. Nhận diện","### 2.2. Cặp nghiệm","### 2.3. Đường biên","### 2.4. Chọn đúng nửa mặt phẳng","### 2.5. Từ điều kiện đời sống"])
 assert(k.includes(h),"B03 self-learning concept missing: "+h);
for(const concept of ["a,b","không đồng thời bằng 0","đường biên","điểm thử","đảo dấu","mẫu số dương","số sản phẩm"])
 assert(k.includes(concept),"B03 critical mathematical explanation missing: "+concept);
for(const id of ["THPT-G10-CHII-TRY01","THPT-G10-CHII-TRY02","THPT-G10-CHII-TRY03","THPT-G10-CHII-TRY04","THPT-G10-CHII-TRY05"])
 assert.equal((src.match(new RegExp('data-thpt-first-try-id="'+id+'"','g'))||[]).length,1,
  "B03 Q15 canonical placement changed: "+id);
for(const id of ["HELP-G10-B03-01","HELP-G10-B03-02"])
 assert.equal((src.match(new RegExp('data-thpt-help-id="'+id+'"','g'))||[]).length,1,
  "B03 D6 canonical support missing "+id);
assert.equal((src.match(/data-thpt-help-ref="/g)||[]).length,5,
 "B03 five outcome-to-D6 links must remain explicit");
assert.equal((src.match(/^    \?\?\? (question|tip) "/gm)||[]).length,7,
 "B03 five self-reveals and two closed D6 remedies");
assert.equal((src.match(/<figure\b/g)||[]).length,1,"B03 geometric diagram must remain beside its explanation");
assert(src.includes("luyen-tap.md")&&src.includes("tu-kiem-tra-chuong.md"),"B03 links must target actual chapter pages");
assert(!/data-thpt-readiness|data-mastery-credit|data-scoring-engine/.test(src),
 "B03 must not activate independent Readiness/Mastery");
console.log("PASS G10 B03 UX795 AP: exact source + 116 formula expressions, all five concepts, 5 Q15 item/HELP refs, 2 D6, 1 SVG, Q16 unchanged. Academic Q18 remains separate.");
