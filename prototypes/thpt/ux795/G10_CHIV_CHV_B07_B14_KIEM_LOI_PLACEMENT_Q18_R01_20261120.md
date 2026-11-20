# G10 B07–B14 · Đặt HELP canonical vào đúng Vận dụng · Q18 R01

**RECEIPT_ID:** G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, Golden đã nghiệm thu; G0–G5 hiện có. Không thêm chuẩn/bộ test.  
**SOURCE_SCOPE:** Tám file canonical `docs/thpt-preview/sgk/chuong-iv/bai-{7..11}.md` và `docs/thpt-preview/sgk/chuong-v/bai-{12..14}.md`, các file khác không sửa.  
**DELTA:** `DELTA_A_UI` chuyển vị trí, `DELTA_C_ACADEMIC_MATERIAL` các HELP gắn với trải nghiệm tự sửa và hai tình huống minh họa nguồn đã phát hiện sai lệch ngữ cảnh.  
**OWNER_P2:** snapshot đã nghiệm thu không đổi. Các ứng viên này chưa được review độc lập Academic/PED, không có P2 mới, giữ `AUTHORING_REVIEW_HOLD`.  
**ISSUE:** #795 audit B23 ngược B01.

| LESSON | PREVIOUS_SOURCE_BLOB (Git) | CORRECTED_SOURCE_BLOB (Git) | canonical HELP moved | links to shared HELP |
|---|---|---|---:|---:|
| B7 | `e1487ce01e81738228ae69d4d87cbdc56b5e0c69` | `e76a0ae4f9628ffd1d183b44eaae1c35e454bf13` | 2 | 3 |
| B8 | `22e53396caf7753e813c492615a491e1f24cc9fd` | `9e5c9227417484e3bbea4f0ba085ff844100f321` | 2 | 3 |
| B9 | `3d79a17e9ba39cd0f46077823800f5f38c73e313` | `e1bc7777f5b39f831f8009f4b564381d23d40aa2` | 2 | 3 |
| B10 | `b5f72c28668f9cad548bb6ec000dc435d9557652` | `7b0428899b64a9986689dc5723d119b4356eb06b` | 3 | 3 |
| B11 | `bae18dce68974edc15f940bf7fb2cca09d99ddf8` | `313a27573cd679234c62f5041587ea86de684733` | 3 | 2 |
| B12 | `a2ea6c909cdd2317188b13c2bde22e7923dba3de` | `d552c5415c05f1c354cdb8e01a61f0165296e66c` | 3 | 0 |
| B13 | `cb5adaa7804902fece7dd4ec30575733efd4c9c1` | `f42ca4234cf03030bde83cdfa6dd7a67561d999d` | 2 | 0 |
| B14 | `a23afab8015c83813f0c8cbe918efa93e58aa623` | `66689cd750d75a0bd37cb6d3841314d18a566ec7` | 2 | 0 |

## G0–G2: đọc và phân loại nội dung, không sao chép HELP

Đã mở đủ 8 bài và đối chiếu đoạn **Vận dụng** trong Khám phá với nội dung thật của từng **Lỗi thường gặp** (kể cả ví dụ số liệu không giống câu). 19 khối HELP gốc được đặt một lần dưới câu gần nhất có **cùng outcome và bản chất**, trong khung `??? tip "Kiểm lỗi"` mặc định đóng. Với một HELP phục vụ nhiều câu hỏi, khối đó chỉ ở một vị trí canonical; ở Vận dụng liên quan khác là **đường dẫn tới đúng khung** (không nhân bản cả đáp án/lời giải hoặc thêm HELP_ID). Tất cả các trường dữ liệu Q15 khác và Final Submit/RD1/Mastery giữ nguyên.

**Cặp đại diện:** B07 HELP01→TRY01, HELP02→TRY03; B08 HELP01→TRY08, HELP02→TRY07; B09 HELP01→TRY12, HELP02→TRY15; B10 HELP01→TRY16, HELP02→TRY20, RIVER→TRY-RIVER-TR01; B11 HELP01→TRY23, HELP02→TRY21, FORCE→TRY-FORCE-TR01; B12 HELP01→TRY02, HELP02→TRY03, CALC→TRY-CALC-R01; B13 HELP01→TRY07, HELP02→TRY08; B14 HELP01→TRY12, HELP02→TRY13.

**Lỗi học thuật trong HELP được phát hiện và sửa đúng câu đang dạy (DELTA_C):**
- B10: Ví dụ tọa độ HELP01 chuyển về đúng `A(-3;2), B(2;-1)`, `AB=(5;-3)` và `BA=(-5;3)`. HELP02 dùng đúng bộ dữ liệu Vận dụng về tâm/trọng tâm `A(-2;4),B(4;0),C(1;5),G(1;3)`, cùng phương `u=(2;1), v=(6;3), w=(6;4)` để không tự đổi đề.
- B11 FORCE: sửa ví dụ HELP từ 2 lực `6 N` góc `120°` thành đúng Vận dụng 2 lực `4 N` góc `60°`, hợp lực `4√3 N`, lực thứ ba ngược chiều tổng.
- B12 CALC: sửa trợ giúp `∛7≈1,913` thành `∛11≈2,224` với bất đẳng thức `2,2235³<11<2,2245³` theo Vận dụng thật. Nội dung mới phải được kiểm lại về đúng con số và lý do.

**Tab lỗi:** 8 bài không có D6/HELP tổng quát độc lập sau phân loại, nên không tạo thêm lỗi giả; giữ nội dung điều hướng/học tiếp/footnote vốn có. Không can thiệp bốn tab Golden, figure, MathJax, Q16 hay đường link Core.

**G2_VERDICT:** G0/G1/G2 author self-QA trên nguồn, chưa có independent Academic/PED PASS. **G3–G5:** chờ phản biện phần chịu ảnh hưởng và chạy QA thực tế đúng HEAD, không merge/deploy chỉ vì thống kê/tự khẳng định.

## Một bản thảo canonical cho B09–B12 (cập nhật cùng source)

B09/B10/B11/B12 mỗi bài có **một manuscript nguyên bài** trong `prototypes/thpt/content-drafts/`. Bề mặt `docs/thpt-preview/sgk/...` được sinh từ **Section A Knowledge** của manuscript đó, không được là bản thảo học thuật cạnh tranh. Không thay thế hoặc sửa Rxx Q18 receipts lịch sử.

| Canonical lesson | PREVIOUS_CANONICAL_GIT_BLOB | CURRENT_CANONICAL_GIT_BLOB |
|---|---|---|
| CANONICAL_B09 | `7f3139b851f6a1161de0b813eac2fa7909aae9ed` | `c85da706d06711f196a9e43577f4d62e08c5e89c` |
| CANONICAL_B10 | `22ebe6b2e11f2a2c47752862a873c8c98fd6d7ec` | `be44fd35b3a39e814a11d0b422cfe64f67d5e7e4` |
| CANONICAL_B11 | `3d59f161977d4222a2399f0b0d3db3ab9eba1e5f` | `22228598320ee81549c4ee9783559e2d4ff9476c` |
| CANONICAL_B12 | `510072650ec215bb0501c14045d603acad4c56cd` | `1d11fadde3b592d68b328eb448318ac52d8a8c95` |

**CANONICAL_PARITY_CONTRACT:** Section A Knowledge must match the public Markdown exactly **byte-for-byte**, including the file-final newline. Preserve the original B09 P07, B10/B11 Core/Practice/Written and B12 formative JS/Written sections without semantic modifications. The old/new public learner Markdown Git blobs are separately source-locked in the eight-lesson matrix above. These old SHA values remain historical baselines; the new SHA fields describe the one current authoring manuscript.

**B11 source-first special:** Previous owner-P2 source-first R01/R02 receipts are historical and must stay byte-identical. New Q18 manuscript+Markdown receipt extends that history rather than substituting it or inventing a second current manuscript.

**STATE:** `AUTHORING_REVIEW_HOLD` pending affected-part DELTA_C independent Academic/PED review, then G3–G5 appropriate scoped QA and release gates. No self-granted content PASS/P2.
