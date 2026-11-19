#!/usr/bin/env node
"use strict";
/* P2 Delta A/B: byte-exact reconstruction from immutable released B15. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),
 cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const file="docs/thpt-preview/sgk/chuong-vi/bai-15.md";
const receipt=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
const field=k=>{
 const line=receipt.split("**"+k+":** "+String.fromCharCode(96))[1];
 assert(/^[a-f0-9]{40}/.test(line||""),"Receipt missing SHA "+k);
 return line.slice(0,40);
};
const blob=x=>{x=Buffer.isBuffer(x)?x:Buffer.from(x);
 return crypto.createHash("sha1").update("blob "+x.length+"\0").update(x).digest("hex")};
const original=cp.spawnSync("git",["show",field("PRIOR_RELEASE_COMMIT")+":"+file],{cwd:root,encoding:"utf8"});
assert.equal(original.status,0,"Cannot read immutable approved original: "+original.stderr);
const before=original.stdout,after=fs.readFileSync(path.join(root,file),"utf8");
assert.equal(blob(before),field("PREVIOUS_B15_SOURCE_BLOB"),"frozen P1 source SHA");
assert.equal(blob(after),field("CANDIDATE_B15_SOURCE_BLOB"),"scoped candidate source SHA");
const oldTip=before.match(/^    !!! tip "Lưu ý khi đọc hình"\n        [^\n]+/m);
assert(oldTip,"exactly one historical unlinked note");
const newTip=after.match(/^    \*\*Cách kiểm tra trên đồ thị:\*\* [^\n]+/m);
assert(newTip,"exactly one plain-text graph condition");
assert(newTip[0].includes("hai điểm có tung độ khác nhau")&&newTip[0].includes("không phải lời hướng dẫn đọc hình"),
 "keep graph test mathematics and general scope");
const intro="    Những lỗi dưới đây là **sai lầm toán học dễ mắc khi giải năm dạng trong bài**, không phải các nhãn lỗi chung chung. Mỗi mục chỉ ra một kết luận sai cụ thể, giải thích vì sao sai, rồi hướng dẫn em tự làm lại. Không coi việc học sinh đã mở “Đối chiếu” là bằng chứng làm chủ kiến thức.\n\n";
assert.equal(before.split(intro).length,2,"one obsolete editorial paragraph");
assert.equal(after,before.replace(oldTip[0],newTip[0]).replace(intro,""),
 "ONLY two approved hunks can change in the entire canonical B15 lesson");
assert.equal((after.match(/\*\*Em vận dụng\.\*\*/g)||[]).length,5,"five source First Tries unchanged");
assert.equal((after.match(/\?\?\? question "Đối chiếu"/g)||[]).length,5,"five voluntary disclosures");
const css="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css";
assert.equal(blob(fs.readFileSync(path.join(root,css))),field("EXISTING_GOLDEN_CSS_BLOB"),
 "do not restyle existing Golden");
for(const f of [12,13,14,16,17,18]){
 const ch=f<=14?"v":"vi",p="docs/thpt-preview/sgk/chuong-"+ch+"/bai-"+f+".md";
 const frozen=cp.spawnSync("git",["show",field("PRIOR_RELEASE_COMMIT")+":"+p],{cwd:root});
 assert.equal(frozen.status,0,"Missing frozen out-of-scope "+p);
 assert.equal(blob(fs.readFileSync(path.join(root,p))),blob(frozen.stdout),"Out-of-scope changed: "+p);
}
console.log("PASS B15 P2 copy/UI: exact two-hunk transform, original/candidate SHA, 5 First Tries, 5 disclosures, Golden CSS, six neighboring lessons frozen.");
