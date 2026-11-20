# G10 B07–B14 · Đặt HELP canonical vào đúng Vận dụng · Q18 R01

**RECEIPT_ID:** G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, Golden đã nghiệm thu; G0–G5 hiện có. Không thêm chuẩn/bộ test.  
**SOURCE_SCOPE:** Tám file canonical `docs/thpt-preview/sgk/chuong-iv/bai-{7..11}.md` và `docs/thpt-preview/sgk/chuong-v/bai-{12..14}.md`, các file khác không sửa.  
**DELTA:** `DELTA_A_UI` chuyển vị trí, `DELTA_C_ACADEMIC_MATERIAL` các HELP gắn với trải nghiệm tự sửa và hai tình huống minh họa nguồn đã phát hiện sai lệch ngữ cảnh.  
**OWNER_P2:** snapshot đã nghiệm thu không đổi. Các ứng viên này chưa được review độc lập Academic/PED, không có P2 mới, giữ `AUTHORING_REVIEW_HOLD`.  
**ISSUE:** #795 audit B23 ngược B01.

| LESSON | PREVIOUS_SOURCE_BLOB (Git) | CORRECTED_SOURCE_BLOB (Git) | canonical HELP moved | links to shared HELP |
|---|---|---|---:|---:|
| B7 | `e1487ce01e81738228ae69d4d87cbdc56b5e0c69` | `3da2505bb7eb490665eaabeb91d2cba92db7ee51` | 2 | 3 |
| B8 | `22e53396caf7753e813c492615a491e1f24cc9fd` | `e72d07ecd8e4f128ebecaff82daf732a1eaa08d3` | 2 | 3 |
| B9 | `3d79a17e9ba39cd0f46077823800f5f38c73e313` | `e799a1ebf12c4342849fe0e692bcb49c2d4b9084` | 2 | 3 |
| B10 | `b5f72c28668f9cad548bb6ec000dc435d9557652` | `0fc27341a3194f69c8d2798f109e3628c1c38cce` | 3 | 3 |
| B11 | `bae18dce68974edc15f940bf7fb2cca09d99ddf8` | `53f7c5e7918f80057dc54b3b81e71f281e2c07b2` | 3 | 2 |
| B12 | `a2ea6c909cdd2317188b13c2bde22e7923dba3de` | `2a6ce7e2286a099b5e18aa4c2bd467b1acd6c6e2` | 3 | 0 |
| B13 | `cb5adaa7804902fece7dd4ec30575733efd4c9c1` | `28e9bb1f4118972ddbf30baee0b584e0ba343ceb` | 2 | 0 |
| B14 | `a23afab8015c83813f0c8cbe918efa93e58aa623` | `13f658c80292a7fc358fb2ec83c237be4fcc313e` | 2 | 0 |

## G0–G2: đọc và phân loại nội dung, không sao chép HELP

Đã mở đủ 8 bài và đối chiếu đoạn **Vận dụng** trong Khám phá với nội dung thật của từng **Lỗi thường gặp** (kể cả ví dụ số liệu không giống câu). 19 khối HELP gốc được đặt một lần dưới câu gần nhất có **cùng outcome và bản chất**, trong khung `??? tip "Kiểm lỗi"` mặc định đóng. Với một HELP phục vụ nhiều câu hỏi, khối đó chỉ ở một vị trí canonical; ở Vận dụng liên quan khác là **đường dẫn tới đúng khung** (không nhân bản cả đáp án/lời giải hoặc thêm HELP_ID). Tất cả các trường dữ liệu Q15 khác và Final Submit/RD1/Mastery giữ nguyên.

**Cặp đại diện:** B07 HELP01→TRY01, HELP02→TRY03; B08 HELP01→TRY08, HELP02→TRY07; B09 HELP01→TRY12, HELP02→TRY15; B10 HELP01→TRY16, HELP02→TRY20, RIVER→TRY-RIVER-TR01; B11 HELP01→TRY23, HELP02→TRY21, FORCE→TRY-FORCE-TR01; B12 HELP01→TRY02, HELP02→TRY03, CALC→TRY-CALC-R01; B13 HELP01→TRY07, HELP02→TRY08; B14 HELP01→TRY12, HELP02→TRY13.

**Lỗi học thuật trong HELP được phát hiện và sửa đúng câu đang dạy (DELTA_C):**
- B10: Ví dụ tọa độ HELP01 chuyển về đúng `A(-3;2), B(2;-1)`, `AB=(5;-3)` và `BA=(-5;3)`. HELP02 dùng đúng bộ dữ liệu Vận dụng về tâm/trọng tâm `A(-2;4),B(4;0),C(1;5),G(1;3)`, cùng phương `u=(2;1), v=(6;3), w=(6;4)` để không tự đổi đề.
- B11 FORCE: sửa ví dụ HELP từ 2 lực `6 N` góc `120°` thành đúng Vận dụng 2 lực `4 N` góc `60°`, hợp lực `4√3 N`, lực thứ ba ngược chiều tổng.
- B12 CALC: sửa trợ giúp `∛7≈1,913` thành `∛11≈2,224` với bất đẳng thức `2,2235³<11<2,2245³` theo Vận dụng thật. Nội dung mới phải được kiểm lại về đúng con số và lý do.

**Tab lỗi:** 8 bài không có D6/HELP tổng quát độc lập sau phân loại, nên không tạo thêm lỗi giả; giữ nội dung điều hướng/học tiếp/footnote vốn có. Không can thiệp bốn tab Golden, figure, MathJax, Q16 hay đường link Core.

**G2_VERDICT:** G0/G1/G2 author self-QA trên nguồn, chưa có independent Academic/PED PASS. **G3–G5:** chờ phản biện phần chịu ảnh hưởng và chạy QA thực tế đúng HEAD, không merge/deploy chỉ vì thống kê/tự khẳng định.
