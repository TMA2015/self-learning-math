#!/usr/bin/env node
"use strict";
/* Owner P2 Delta A/B. Reconstruct immutable previous B15 from exact two hunks,
 * proving SHA without assuming shallow CI checkout contains historic parent. */
const assert=require("node:assert/strict"),fs=require("node:fs"),
 path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const file="docs/thpt-preview/sgk/chuong-vi/bai-15.md";
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
const field=k=>{
 const line=receipt.split("**"+k+":** "+String.fromCharCode(96))[1];
 assert(/^[a-f0-9]{40}/.test(line||""),"Receipt missing SHA "+k);
 return line.slice(0,40);
};
const blob=x=>{x=Buffer.isBuffer(x)?x:Buffer.from(x);
 return crypto.createHash("sha1").update("blob "+x.length+"\0").update(x).digest("hex")};
const current=fs.readFileSync(path.join(root,file),"utf8");
assert.equal(blob(current),field("CANDIDATE_B15_SOURCE_BLOB"),"source matches P2 receipt");
const now="    **Cách kiểm tra trên đồ thị:** Nếu đường thẳng đứng \\(x=x_0\\) cắt một đường biểu diễn ở hai điểm có tung độ khác nhau, đường đó không phải đồ thị của một hàm số \\(y=f(x)\\) tại \\(x_0\\). Đây là cách kiểm tra chung, không phải lời hướng dẫn đọc hình minh họa phía trên.";
const prior='    !!! tip "Lưu ý khi đọc hình"\n'+
 '        Nếu đường thẳng đứng \\(x=x_0\\) cắt một hình vẽ ở **hai điểm có tung độ khác nhau**, hình đó không thể là đồ thị của hàm số \\(y=f(x)\\) trên miền chứa \\(x_0\\). Đây là cách nhận diện bằng hình của yêu cầu “một đầu vào — một đầu ra”.';
const intro='    Những lỗi dưới đây là **sai lầm toán học dễ mắc khi giải năm dạng trong bài**, không phải các nhãn lỗi chung chung. Mỗi mục chỉ ra một kết luận sai cụ thể, giải thích vì sao sai, rồi hướng dẫn em tự làm lại. Không coi việc học sinh đã mở “Đối chiếu” là bằng chứng làm chủ kiến thức.\n\n';
assert.equal(current.split(now).length,2,"one exact plain graph criterion");
assert.equal(current.split('=== "Lỗi thường gặp"\n\n').length,2,"one unchanged Golden tab boundary");
assert(!current.includes('!!! tip "Lưu ý khi đọc hình"')&&!current.includes(intro),
 "both undesirable texts removed");
const reconstructed=current.replace(now,prior).replace('=== "Lỗi thường gặp"\n\n',
 '=== "Lỗi thường gặp"\n\n'+intro);
assert.equal(blob(reconstructed),field("PREVIOUS_B15_SOURCE_BLOB"),
 "RECONSTRUCTED original B15 blob must exactly equal last P1 release SHA");
assert.equal((current.match(/\*\*Em vận dụng\.\*\*/g)||[]).length,5,"5 original source first tries");
assert.equal((current.match(/\?\?\? question "Đối chiếu"/g)||[]).length,5,"5 original disclosures");
assert.equal((current.match(/data-thpt-help-id="/g)||[]).length,5,"5 D6 HELP entries");
assert.equal(blob(fs.readFileSync(path.join(root,
 "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"))),
 field("EXISTING_GOLDEN_CSS_BLOB"),"Golden CSS remains frozen");
const frozen={
 "docs/thpt-preview/sgk/chuong-v/bai-12.md":"a2ea6c909cdd2317188b13c2bde22e7923dba3de",
 "docs/thpt-preview/sgk/chuong-v/bai-13.md":"cb5adaa7804902fece7dd4ec30575733efd4c9c1",
 "docs/thpt-preview/sgk/chuong-v/bai-14.md":"a23afab8015c83813f0c8cbe918efa93e58aa623",
 "docs/thpt-preview/sgk/chuong-vi/bai-16.md":"4ddf9c449f92a9f48bace5a3f9b84186bf33af20",
 "docs/thpt-preview/sgk/chuong-vi/bai-17.md":"1a3481ee2020f48e924dae5e8b4f5779b3a2d88b",
 "docs/thpt-preview/sgk/chuong-vi/bai-18.md":"91d22f1af8814ed639ada3ee1c9dae2e9501c4c0"
};
for(const [p,sha] of Object.entries(frozen))
 assert.equal(blob(fs.readFileSync(path.join(root,p))),sha,"Out-of-scope frozen source drift "+p);
console.log("PASS B15 P2 Delta A/B: two-hunk SHA-reconstruction, Golden stylesheet, 5 First Try/HELP/Đối chiếu and 6 adjacent approved source blobs.");
