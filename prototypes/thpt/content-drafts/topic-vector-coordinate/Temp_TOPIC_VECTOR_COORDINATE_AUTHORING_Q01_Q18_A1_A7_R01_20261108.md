# Chuyên đề 2 — AUTHORING A1–A7 và Q01–Q18 sau NotebookLM PASS

**Phạm vi:** MỘT chuyên đề xuyên lớp 10–12 gồm BẢY phần, trang Kiến thức / Luyện tập / Tự kiểm tra.  
**AUTHORING_STATE:** ACADEMIC_PED_REVIEW_ACCEPTED / BLOCKED_BY_RELEASE_INTAKE_CONTRACT; không CONTENT_READY.  
**Chất lượng:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18, cùng chuẩn THPT duy nhất.

## Một nguồn được review / nguồn kín
- PUBLIC source canonical R02: `prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md` · blob `29669e6de80cba50a11bb8574220c6a19b4f7138` · SHA256 `3daf6d83bfa03ec5417f233e1871114bf390bfd42d50e241d115e3829ffe7cdd` · 82,015 UTF-8 bytes.
- PRIVATE Topic Readiness R01: **owner-held only** · SHA256 `100076f65e91b4551bfe3488ff3eedf66711b662ba18cec521203e2f631b00be` · 42 items, sáu câu/phần, 7 Written rubric/4, 35 MCQ/SHORT. **KHÔNG GHI stems/keys/rubric lên Git công khai**.
- Independent NotebookLM accepted reviewer report: 7/7 Academic/PED PASS + 42/42 protected RD1 Academic/PED PASS, P0=P1=P2=0, MINIMAL_DELTA=0. Hai báo cáo raw của owner đều chứa tóm tắt đáp án kín, nên **chỉ safe review receipt được commit**: `prototypes/thpt/review-packets/Temp_TOPIC_VECTOR_COORDINATE_R02_Q18_SAFE_NOTEBOOKLM_REVIEW_RECEIPT_R01_20261108.md`.
- Bản được duyệt là R02. Các tệp Part1/Part2 R00/R01 cũ không phải nguồn canonical thứ hai; không sửa nội dung R02 chỉ để thay metadata. Theo quyết định owner Issue #787, không bắt reviewer corrigenda metadata.

## A1–A7 AUTHORING EVIDENCE

| Gate | Kết quả AUTHORING theo source scope | Chứng cứ / giới hạn |
| --- | --- | --- |
| A1_SOURCE_SNAPSHOT | PASS | Public Git blob, SHA256; private SHA256; reviewer raw report SHA256 trong safe receipt; không sửa nguồn sau reviewer |
| A2_SGK_SBT_SCOPE | PASS with documented S1 gap | SGK/SBT KNTT lớp 10–12 đúng phân đoạn trang in/PDF trong PUBLIC source; SBT G12 Tập Hai thiếu in25, G10 SBT Tập Hai một số offset chưa khóa. Reviewer đã thừa nhận caveats và không nêu lỗi nội dung |
| A3_NOTEBOOKLM_VERDICT | PASS | Một đợt phản biện độc lập, 2 bản báo cáo owner-held, public + RD1 Academic/PED PASS; 5 Permanent THPT v2.1 |
| A4_ITEM_OUTCOME_IDS | PASS at document level | 56 outcomes, 114 public canonical/proposed IDs, 42 private IDs giữ kín, 7 parts; item–outcome/placement source và V2 draft; chưa nhập registry/runtime |
| A5_D1_D6_SCOPE | PASS for reviewed source | 39 D2 worked examples, phân biệt 8 Written PUBLIC với 7 Written PRIVATE; hình SGK gốc tái sử dụng, 1 SVG mới ở Phần 1; WHY/meaning/method/first try/D6 qua 7 phần |
| A6_DELTA_RESOLVED | PASS academic | Reviewer MINIMAL_DELTA 0; chỉ diễn giải lại dữ liệu số lượng và nguồn trong receipt, không đổi toán/key/solution/rubric R02; nếu thay học thuật sau đây phải DELTA_C review đúng phần |
| A7_PUBLIC_PRIVATE_BOUNDARY | PASS at source level | Private 42 câu không Git/JS, raw report chứa đáp án không Git; runtime Final Submit và Mastery vẫn RELEASE-only chưa triển khai/QA |

## Q01–Q18 · CÙNG MỘT CHUẨN DUY NHẤT

| Q | Nguồn/chứng cứ được reviewer nhận | Trạng thái AUTHORING / phạm vi |
| --- | --- | --- |
| Q01 | SGK/SBT S1 Toán 10–12, PDF/in-page, SBT G12 gap được công khai | REVIEW_PASS_SCOPED; không bịa trang khuyết |
| Q02 | 7 phần; 6+10+8+8+8+8+8=56 outcomes; 114 public item IDs | REVIEW_PASS; không lấy tổng số ID thay độ sâu |
| Q03 | D1: vectơ/phép toán/Oxy, lý thuyết không gian/Oxyz/phương trình đủ điều kiện | REVIEW_PASS |
| Q04 | D2: 39 ví dụ giải suy luận WHY–METHOD–CHECK | REVIEW_PASS |
| Q05 | Public D3: 114 canonical/source IDs, phân hóa căn bản/lập luận/vận dụng | REVIEW_PASS |
| Q06 | 8 Written PUBLIC với rubric SGK/Topic gốc (/7 hoặc /5), 7 Written PRIVATE /4 | REVIEW_PASS; không thay rubric theo lỗi tường thuật báo cáo |
| Q07 | D5 figure reference gốc + SVG ở Phần 1, captions/hướng dẫn đọc | REVIEW_PASS_SOURCE; thực tế SVG render AP3 ở RELEASE |
| Q08 | D6 theo lỗi/tiền đề, quay lại ví dụ và bài khác | REVIEW_PASS |
| Q09 | PED1 — WHY mỗi phần | REVIEW_PASS |
| Q10 | PED2 — tiền đề có đường nối hai hành trình độc lập | REVIEW_PASS |
| Q11 | PED3 — bản chất trước công thức | REVIEW_PASS |
| Q12 | PED4 — đọc hình/chọn vectơ/hướng trục | REVIEW_PASS_SOURCE; website AP3 pending |
| Q13 | PED5 — lý do chọn phương pháp, giới hạn và phản ví dụ | REVIEW_PASS |
| Q14 | PED6 — hai Tự thử/phần, chỉ mở lời giải sau tự thử, D6 | REVIEW_PASS_SOURCE; actual UI AP4 pending |
| Q15 | Một canonical item ID, các placement không nhân bản, Written/Anchor chung | REVIEW_PASS_SOURCE; runtime ID registry check deferred |
| Q16 | Private 42 off public Git, Final Submit/no hints/no mastery policy | REVIEW_PASS_SOURCE; Runtime R4 NOT_TESTED; private score thử nghiệm 63 chứ không phải 120 |
| Q17 | Topic tự đủ Kiến thức/Luyện tập/Tự kiểm tra; SGK độc lập | REVIEW_PASS_SOURCE; website routes NOT_TESTED |
| Q18 | Reviewer owner-held scope, source hash, safe receipt và lịch sử Delta | REVIEW_PASS_SOURCE; safe receipt SHA khóa trong V2 draft |

## RELEASE & HANDOFF CHƯA XONG

**Blocker thực tế:** Issue [#790](https://github.com/TMA2015/self-learning-math/issues/790) OPEN: `scripts/test-thpt-handoff-gate-v2.cjs` chưa cho `LEARNING_PATH=TOPIC`, `RELEASE_SCOPE=FULL_TOPIC_LEARNING_PATH`, `STANDARD_VERSION=1.2.0`. AUTHORING không sửa scripts/gate, không giả `SGK_CHAPTER`, không hạ phiên bản, không viết `ready/` và `REGISTER` sai điều kiện.

**Được phép:** chỉ một DRAFT V2 handoff có đúng metadata + SHA, ghi blocker, bàn giao sau khi intake contract được owner authorized. Đóng `CONTENT_READY` cần gate tương thích, 1 handoff validated, 1 manifest ready và REGISTER đồng bộ. Website release cần R1–R5, AP1–AP5 và owner approval; chưa có quyền merge/deploy, không Mastery.
