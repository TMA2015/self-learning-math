#!/usr/bin/env node
"use strict";
/* Q18 Golden B19–B22 — fail-closed original published source → candidate.
 * No assessment answer/rubric edits, no Academic/PED reviewer PASS inference.
 * This suite is independent of the original historical G10 source ledger. */
const fs=require("node:fs"),path=require("node:path"),cp=require("node:child_process"),
 crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),published="bfc15b552a1ea697edb1327f0a48d7a95bbb73ed";
const {chviiEditorialReceiptRows,chviiContinuousReceiptRows,chviiAp2ReceiptRows,chviiR02ReceiptRows,chviiClarityReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const blob=data=>{const raw=Buffer.isBuffer(data)?data:Buffer.from(data);return crypto.createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");};
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
const tex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(m=>(m[1]||m[2]).trim().replace(/\s+/g," "));
function revealed(s){
 const lines=s.split("\n"),out=[];let capture=null;
 for(let i=0;i<lines.length;i++){
  const line=lines[i];
  if(/^    \?\?\? question "(?:Tự mở đáp án sau khi đã tự làm|Tự mở kết quả sau khi đã thử|Đối chiếu)"$/.test(line)){
   if(capture)out.push(capture.join("\n").trimEnd());
   capture=[];continue;
  }
  if(capture!==null){
   if(line===""||line.startsWith("        ")){capture.push(line);continue;}
   out.push(capture.join("\n").trimEnd());capture=null;
  }
 }
 if(capture)out.push(capture.join("\n").trimEnd());
 return out.sort();
}
// Preserve every canonical answer and explanation byte-for-byte in meaning.
// The only permitted difference is the fixed, unrelated, misleading navigation sentence.
const obsoleteAnswerNote="**Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.";
const canonicalAnswerText=parts=>parts.map(block=>block.split("\n")
 .map(line=>line.trim()).filter(line=>line&&line!==obsoleteAnswerNote).join("\n")).sort();

const specs={
 19:{count:7,helps:9,figures:2,examples:2,book:["2.1. Phương trình tổng quát của đường thẳng","2.2. Phương trình tham số của đường thẳng"]},
 20:{count:5,helps:7,figures:3,examples:2,book:["2.1. Vị trí tương đối giữa hai đường thẳng","2.2. Góc giữa hai đường thẳng","2.3. Khoảng cách từ một điểm đến một đường thẳng"]},
 21:{count:5,helps:7,figures:3,examples:2,book:["2.1. Phương trình đường tròn","2.2. Phương trình tiếp tuyến của đường tròn"]},
 22:{count:8,helps:10,figures:6,examples:3,book:["2.1. Elip","2.2. Hypebol","2.3. Parabol","2.4. Một số ứng dụng của ba đường conic"]}
};
const rows=chviiEditorialReceiptRows(),followOn=chviiContinuousReceiptRows(),ap2=chviiAp2ReceiptRows(),r02=chviiR02ReceiptRows(),clarity=chviiClarityReceiptRows();
assert.equal(rows.size,4,"Exactly four signed Chapter VII original rows required");
assert.equal(followOn.size,4,"Exactly four source-locked continuous-explanation follow-on rows required");
assert.equal(ap2.size,4,"Exactly four AP2 TeX-normalization source rows required");
assert.equal(r02.size,4,"Four reviewed R02 lesson rows required");
assert.equal(clarity.size,4,"Four scoped learner-clarity correction rows required");
let allTry=0,allHelp=0,allFigures=0,allExamples=0;
for(const [lessonStr,info]of Object.entries(specs)){
 const n=Number(lessonStr),name="B"+n,row=rows.get(name),delta=followOn.get(name),display=ap2.get(name),teaching=r02.get(name),clean=clarity.get(name);
 assert(row&&delta&&display&&teaching&&clean,"Missing reviewed source→R02→clarity chain "+name);
 assert.equal(clean.baseline,teaching.candidate,name+" clarity baseline is not the reviewed R02 candidate");
 assert.equal(clean.moved,info.count,name+" clarity changed canonical count");
 assert.equal(clean.helps,info.helps,name+" clarity changed HELP count");
 assert.equal(clean.examples,info.examples,name+" clarity changed worked-example count");
 assert.equal(teaching.baseline,display.candidate,name+" R02 starts at exact AP2 source");
 assert.equal(teaching.moved,info.count,name+" R02 item count");
 assert.equal(teaching.helps,info.helps,name+" R02 HELP count");
 assert.equal(teaching.examples,info.examples,name+" R02 worked-example count");
 assert.equal(display.baseline,delta.candidate,name+" AP2 origin must equal exact reviewed PR845 blob");
 assert.equal(display.moved,info.count,name+" 25 preserved questions in AP2 receipt");
 assert.equal(display.helps,info.helps,name+" 33 unchanged HELP in AP2 receipt");
 assert.equal(delta.baseline,row.candidate,name+" follow-on baseline must equal immutable approved #842 candidate");
 assert.equal(delta.moved,info.count,name+" revised canonical Vận dụng count");
 assert.equal(delta.helps,info.helps,name+" revised HELP count");
 assert.equal(delta.examples,info.examples,name+" revised D2 count");
 const rel="docs/thpt-preview/sgk/chuong-vii/bai-"+n+".md";
 const bytes=fs.readFileSync(path.join(root,rel)),s=bytes.toString("utf8");
 const old=cp.spawnSync("git",["show",published+":"+rel],{cwd:root,encoding:"utf8"});
 assert.equal(old.status,0,"Original published Git source inaccessible "+rel+" "+old.stderr);
 const baseline=old.stdout;
 assert.equal(blob(baseline),row.baseline,name+" published source baseline SHA mismatch");
 assert.equal(blob(bytes),clean.candidate,name+" R02 learner clarity candidate differs from receipt");
 assert.equal(candidateG10KnowledgeBlob(n),clean.candidate,name+" canonical router must point to final learner source");
 assert.equal(row.moved,info.count,name+" 25 First Try count source receipt");
 assert.equal(row.helps,info.helps,name+" 33 HELP source receipt");
 assert.equal(row.examples,info.examples,name+" example count source receipt");
 for(const id of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id","data-thpt-help-ref","data-thpt-fig-id"]){
  assert.deepEqual(ids(s,id),ids(baseline,id),name+" canonical data ID drift: "+id);
  if(id!=="data-outcome-id")assert.equal(new Set(ids(s,id)).size,ids(s,id).length,name+" duplicated canonical "+id);
  // Q15: multiple distinct item_ids may target the SAME outcome_id. Do not
  // misclassify original B22 shared ellipse/hyperbola outcomes as duplicate items.
 }
 assert.deepEqual(canonicalAnswerText(revealed(s)),canonicalAnswerText(revealed(baseline)),
  name+" canonical answer/rationale changed beyond removing fixed obsolete navigation note");
 assert.equal(revealed(s).length,info.count,name+" original First Try answer-body count");
 const now=Math.max(0,s.indexOf('=== "Khám phá kiến thức"')),k=s.indexOf('=== "Kiến thức SGK"'),e=s.indexOf('=== "Ví dụ"'),m=s.indexOf('=== "Lỗi thường gặp"');
 assert(now>=0&&now<k&&k<e&&e<m,name+" tabs broken");
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],name+" tab identity");
 const d=s.slice(now,k),knowledge=s.slice(k,e),examples=s.slice(e,m),rem=s.slice(m);
 assert(d.split("\n").slice(1).every(line=>!line.trim()||line.startsWith("    ")),name+" unindented narrative terminates MkDocs Golden tabbed block");
 const discoveryChunks=[...d.matchAll(/data-thpt-first-try-id="([^"]+)"[^>]*><\/span>([\s\S]*?)(?=    \*\*Em vận dụng\.\*\*)/g)];
 assert.equal(discoveryChunks.length,info.count,name+" AP2 blocks must keep original canonical Vận dụng identity");
 const proseOnly=new Set(["THPT-G10-CHVII-TRY06","THPT-G10-CHVII-TRY10","THPT-G10-CHVII-TRY22"]);
 for(const match of discoveryChunks){
  const item=match[1],block=match[2],start=(block.match(/\\\(/g)||[]).length,end=(block.match(/\\\)/g)||[]).length;
  assert.equal(start,end,item+" unbalanced inline TeX");
  const rendered=[...block.matchAll(/\\\(([\s\S]*?)\\\)/g)];
  assert.equal(rendered.length,start,item+" TeX delimiters cannot overlap or nest");
  assert(rendered.every(z=>!z[1].includes("\\(")),item+" nested inline MathJax");
  if(!proseOnly.has(item))assert(start>0,item+" math-bearing narrative lacks MathJax delimiters");
 }
 const reviewDiagrams=[...d.matchAll(/<img[^>]+src="([^"]+\.svg)"/g)].map(x=>x[1]);
 for(const ref of reviewDiagrams.filter(x=>x.includes("G10_CHVII_R02_"))){
  const filename=path.basename(ref),where=path.join(root,"docs/assets/images/thpt",filename);
  assert(fs.existsSync(where),name+" missing concept diagram "+filename);
  const svg=fs.readFileSync(where,"utf8");
  assert(svg.includes("<svg")&&svg.includes("<title>")&&svg.includes("<desc>"),name+" inaccessible concept SVG "+filename);
  assert(!/<script|<foreignObject|onload=|onerror=/i.test(svg),name+" executable SVG "+filename);
 }
 if(n===19)assert(d.includes("Mở rộng có hướng dẫn · Học sau Bài 20"),name+" TRY06 should be guided");
 if(n===21)assert(d.includes("Vận dụng liên bài B20–B21"),name+" TRY17 interlesson");
 if(n===22){
  assert(!/tâm sai|e=c\/a/i.test(d),name+" unapproved compulsory eccentricity");
  assert(d.includes("Mở rộng có hướng dẫn · Không bắt buộc"),name+" TRY20 guided extension");
 }
 assert(!/\*\*Nếu chưa đúng:\*\* Mở hướng dẫn tự sửa ngay bên dưới/.test(d),
   name+" obsolete directions to nonexistent immediately-below remediation must be removed");
 assert(!/Mở câu luyện tập tương ứng để tự luyện/.test(d),
   name+" repeated verbose practice callout remains");
 assert.equal([...d.matchAll(/>Luyện tập thêm<\/a>/g)].length,({19:7,20:5,21:5,22:6})[n],
   name+" all real practice links remain with concise labels");
 assert(!/Trước khi xem lời giải, hãy xác định dữ kiện/.test(examples),
   name+" inert generic instruction without a solution gate returned");
 if(n===21){
  assert(!/vùng phủ được mô tả bằng mọi điểm cách trạm \*\*đúng 3 km\*\*/.test(d),
    name+" false wireless coverage definition in student opening");
  assert(!/Với đường thẳng \\\(d\\\), đặt \\\(h=d\\\(I,d\\\)\\\)/.test(knowledge),
    name+" cross-lesson line-circle shortcut must not be mandatory S1 Core");
 }
 if(n===22){
  assert(!/tiệm cận|asymptote/i.test(knowledge),
   name+" hyperbola asymptotes appeared as mandatory S1 textbook knowledge");
  assert(examples.includes("Mở rộng có hướng dẫn — Tiệm cận của hypebol"),
   name+" optional hyperbola example must be labeled in the Examples tab");
 }
 assert(!/Hãy tự giải từng câu Tự thử trước khi mở Đối chiếu/.test(d),name+" redundant global First Try instruction remains");
 const learning=d.slice(d.indexOf("### Ví dụ trực quan"),d.indexOf("### Thuật ngữ, kiến thức và kỹ năng"));
 assert(!/^    #### /m.test(learning),name+" discovery still fragmented into mini subheadings");
 assert(!/\*\*(?:Kiến thức tiền đề|Bản chất trước công thức|Hướng dẫn đọc hình|Vì sao chọn phương pháp và giới hạn|Tại sao là D2 mới):\*\*/.test(learning),name+" internal PED labels still rendered to learners");
 assert.deepEqual([...d.matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),
  ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],name+" Discovery stages");
 assert.deepEqual([...knowledge.matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),info.book,
  name+" only real S1 textbook sections in Knowledge");
 assert.equal(ids(d,"data-thpt-first-try-id").length,info.count,name+" all First Try MUST be before Core/SGK Knowledge");
 assert.equal(ids(knowledge+examples+rem,"data-thpt-first-try-id").length,0,name+" cloned First Try outside Discovery");
 assert.equal(ids(rem,"data-thpt-help-id").length,info.helps,name+" all HELPs in remediation tab");
 assert.equal(ids(d+knowledge+examples,"data-thpt-help-id").length,0,name+" HELP outside remediation");
 assert.equal((s.match(/<figure/g)||[]).length,info.figures,name+" original D5 plus R02 diagrams");
 assert.equal((s.match(/data-chvii-r02-diagram=/g)||[]).length,info.figures-(baseline.match(/<figure/g)||[]).length,
 name+" R02 diagrams must be near matching outcome");
 assert.equal([...examples.matchAll(/^    ### /gm)].length,info.examples,name+" worked example sections incorrect");
 assert.equal([...examples.matchAll(/\*\*Lời giải\.\*\*/g)].length,info.examples,
  name+" missing one clear source-level solution for every example");
 assert(!/Ví dụ do dự án biên soạn|Ví dụ tự biên soạn|Lưu ý về phạm vi Core|outcome Core|RD1/.test(s),
  name+" review metadata exposed in learner-facing source");
 const more=new Map();for(const f of tex(s))more.set(f,(more.get(f)||0)+1);
 for(const f of tex(baseline)){const v=more.get(f)||0;assert(v>=1,name+" original math expression missing "+f.slice(0,90));more.set(f,v-1);}
 assert.equal((s.match(/^    \\\[$/gm)||[]).length,(s.match(/^    \\\]$/gm)||[]).length,name+" math display delimiters malformed");
 assert(!/data-mastery-credit|data-mastery-write|data-thpt-readiness/.test(s),name+" official scoring/mastery in Knowledge");
 assert(!/^\s{4}\?\?\? question "Tự mở đáp án sau khi đã tự làm"/m.test(s),name+" non-Golden reveal label");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="CORRUPTED-'),"data-thpt-first-try-id"),
  ids(baseline,"data-thpt-first-try-id"),name+" negative item-id mutation failed");
 assert.notEqual(blob(s+" "),clean.candidate,name+" negative source SHA mutation failed");
 assert.notDeepEqual([...knowledge.replace(info.book[0],"WRONG_S1_TITLE").matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),
  info.book,name+" negative SGK title mutation failed");
 allTry+=info.count;allHelp+=info.helps;allFigures+=info.figures;allExamples+=info.examples;
 console.log("PASS "+name+" true S1 sections "+info.book.length+", FirstTry "+info.count+", HELP "+info.helps+
  ", figures "+info.figures+", worked problems "+info.examples+", original math and source SHA");
}
assert.deepEqual([allTry,allHelp,allFigures,allExamples],[25,33,14,9]);
const eq=(x,y)=>Math.abs(x-y)<1e-10;
assert(eq(2*1+4-6,0),"B19 line normal example");
assert(eq(6/Math.sqrt(5),Math.hypot(12/5,6/5)),"B20 perpendicular distance example");
assert(eq((5-2)**2+(1-1)**2,9),"B21 source circle tangent point");
assert(eq(25-16,9)&&eq(9+16,25),"B22 ellipse vs hyperbola c² sign");
assert(eq(4,2*2)&&eq(2/2,1),"B22 parabol 2p convention, F(1;0)");
console.log("PASS Q18 G10 ChVII 25/25 canonical First Try, 33 D6, 6 D5, 9 solution boundaries, math/ID/source negative checks; NO DEPLOY.");
