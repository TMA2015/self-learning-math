# AUTHORING — Chuyên đề Hàm số và đồ thị: đối chiếu các cấp Outcome và phạm vi review

PACKET_ID: THPT-TOPIC-FUNCTIONS-VERTICAL-OUTCOME-CROSSWALK-R01-20261107
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18 (ONE STANDARD)
LANE: AUTHORING / PR #782 (Draft); NO WEBSITE / NO MERGE / NO DEPLOY / NO OFFICIAL READINESS
VERDICT: OUTCOME_CLASSIFICATION_PREFLIGHT_ONLY; ACADEMIC_PED_PENDING; CONTENT_READY=NO

## 1. Ba cấp tên KHÔNG được cộng hay tráo lẫn

- **21 planning outcomes** O01–O21 trong `Temp_TOPIC_FUNCTIONS_VERTICAL_10_12_SCOPE_OUTCOME_PED_AUDIT_R00_20261107.md` (Git blob `fe314ae2c0fd03e9497ffec5dd008ccedeaea3bb`): chỉ là chủ đề/nhu cầu kiểm toán, **không có ITEM_ID canonical hay Academic PASS**. O01–O21 được viết ngắn gọn để nhìn thấy đường nối G10–G12, không đại diện cho 21 kỹ năng chấm điểm mới.
- **10 exact historical G10 Topic outcome IDs** `TOP-G10-FUNC-O01..O10`: nằm trong nguồn G10 R01 blob `57eaf0141a5db9bfba91f0e6c863fc7dcc638068`; owner NotebookLM Executive Summary receipt blob `95e34644c4520adf748cfe3118d8726a5202e3e3` ghi Academic PASS 10/10 trên **đúng snapshot đó**, 5 Permanent Sources v2.0 (lịch sử). M1–M3 pedagogical bridge **mới** blob `fcecb2c97fe7799124809c47045f2087d333afa9` cần review Delta C riêng, không thay nguồn canonical cũ.
- **M4–M7 R01 fine-grained review candidates**: M4 đề nghị 10, M5 đề nghị 9, M6 trong canonical reuse ledger đề nghị 9, M7 trong QA đề nghị 10. Đây là **các outcome ứng viên để reviewer xét nội dung**, chưa chuẩn hóa ID chính thức, chưa tự PASS; không cộng với O01–O21 thô để tạo tổng 69. Hiện tổng 10 G10 đã có và 38 ứng viên M4–M7 **= 48 dòng đề nghị**, nhưng **CHƯA khóa thành 48 canonical OUTCOME_ID** do metadata M6 chưa đồng nhất và reviewer chưa nhận.

## 2. Crosswalk từ 21 planning rows đến outcome đã có hoặc candidate chi tiết

| R00 planning row | Nội dung bản chất (không đổi tên chuẩn) | Nguồn outcome nguồn/chứng cứ đề nghị | Kết luận |
|---|---|---|---|
| O01 / M1 | Hàm số đơn trị | TOP-G10-FUNC-O01 | G10 source PASS only; new bridge Delta C |
| O02 / M1 | Miền và tập giá trị | TOP-G10-FUNC-O02 | G10 source PASS only; new bridge Delta C |
| O03 / M2 | Đọc điểm, miền, dữ liệu so với mô hình | TOP-G10-FUNC-O03 | G10 source PASS only; new bridge Delta C |
| O04 / M2 | Tăng/giảm theo khoảng | TOP-G10-FUNC-O04 | G10 source PASS only; new bridge Delta C |
| O05 / M2 | Hàm từng đoạn/điểm ghép | TOP-G10-FUNC-O05 | G10 source PASS only; new bridge Delta C |
| O06 / M3 | Nhận biết bậc hai, dạng đỉnh, điều kiện a≠0 | TOP-G10-FUNC-O06 + O07 | Không sinh 2 outcome khác với bản G10 |
| O07 / M3 | Đọc/vẽ parabol/Δ/giao trục | TOP-G10-FUNC-O08 | Same G10 canonical |
| O08 / M3 | Cực trị miền hạn chế và mô hình | TOP-G10-FUNC-O09 + O10 | Same G10 canonical |
| O09 / M4 | Chẵn/lẻ, tuần hoàn, sin/cos | TOP-FUNC-M4-O01..O03 (proposed) | Delta C NEW, pending |
| O10 / M4 | Tan/cot nhánh, miền loại, chu kỳ và mô hình tuần hoàn | TOP-FUNC-M4-O04..O05 (proposed) | Delta C NEW, pending |
| O11 / M4 | Hàm mũ và log, nghịch đảo, điều kiện/đồ thị | TOP-FUNC-M4-O06..O10 (proposed) | Delta C NEW, pending |
| O12 / M5 | Giới hạn gần a, một phía, vô cực tại a | TOP-FUNC-M5-O01..O03 (proposed) | Delta C NEW, pending |
| O13 / M5 | Liên tục tại điểm/đoạn, định lí đổi dấu | TOP-FUNC-M5-O06..O08 (proposed) | Delta C NEW, pending |
| O14 / M5 (+ M7) | Giới hạn ở ±∞, điều kiện phương pháp và đọc tiệm cận | TOP-FUNC-M5-O04/O05/O09 + TOP-FUNC-M7-O04/O05 (proposed) | Cùng SKILL liên mạch; không tự clone item |
| O15 / M6 | Tốc độ tức thời, thương sai phân, tiếp tuyến | TOP-FUNC-M6-O01..O03 (proposed) | Delta C NEW, pending |
| O16 / M6 | Quy tắc đạo hàm với điều kiện | TOP-FUNC-M6-O04..O06 + O09 (proposed) | Delta C NEW, pending |
| O17 / M6 | f'' và vận tốc/gia tốc | TOP-FUNC-M6-O07/O08 (proposed) | Delta C NEW, pending |
| O18 / M7 | Dấu đạo hàm, cực trị và phản ví dụ | TOP-FUNC-M7-O01/O02 (proposed) | Delta C NEW, pending |
| O19 / M7 | GTLN/GTNN với miền và đầu mút | TOP-FUNC-M7-O03 (proposed) | Delta C NEW, pending |
| O20 / M7 | Tiệm cận đứng/ngang/xiên, khảo sát họ hàm | TOP-FUNC-M7-O04..O07 (proposed) | Delta C NEW, pending |
| O21 / M7 | Tối ưu vật lý/nguyên đơn vị và tốc độ cận biên | TOP-FUNC-M7-O08..O10 (proposed) | Delta C NEW, pending |

**Các cụm trong bảng là phép ánh xạ ngữ nghĩa để kiểm toán, không biến planning O01–O21 thành ITEM_ID, không ra lệnh trình bày giao diện 21 bài/tab.** Một outcome có thể có evidence ở nhiều M, một item có thể placement trên nhiều M; canonical ID giữ nguyên một bản câu/đáp án/rubric.

## 3. M6 có xung đột số lượng đề nghị (khác với lỗi bộ đếm stem đã đóng) — metadata HOLD, không bịa thêm outcome

- Tài liệu M6 trung gian `Temp_TOPIC_FUNCTIONS_M6_DERIVATIVE_MEANING_RULES_SECOND_D1_D6_R01_20261107.md` chưa nằm trong 20 file đang có ở Draft #782; nó từng nêu “TOP-FUNC-M6-O01..O10” trong luồng biên soạn, nhưng **không dùng làm nguồn canonical chính thức**. Nguồn ưu tiên M6 learner R01 là `Temp_TOPIC_FUNCTIONS_M6_KNOWLEDGE_CONCEPT_TO_SECOND_DERIVATIVE_R01_20261107.md`, và ledger `Temp_TOPIC_FUNCTIONS_M6_PRACTICE_CANONICAL_REUSE_LEDGER_R01_20261107.md` cho **9 candidate rows O01–O09**.
- **HOLD_M6_OUTCOME_COUNT_9_VS_10:** Trước khi reviewer chấm, xác nhận outcome “lý do chọn phương pháp/giới hạn mô hình” có được chứng minh đủ bằng M6-O09 hay thực sự là outcome O10 mới với đánh giá độc lập. Không tự chọn 9 hoặc 10 như verdict học thuật chỉ để đẹp thống kê.
- Không lấy ID `TOP-FUNC-M6-O10` từ nguồn trung gian không tồn tại trên Draft làm một canonical ID mới. Source-of-truth là bản Knowledge/ledger R01 đã readback, reviewer quyết định theo nội dung/điều kiện.

## 3a. Uploaded owner NotebookLM verdicts — source lineage boundary (R04)

- Owner's newly attached M1–M3 reviewer report says PASS for a source having **10 new `THPT-TOPIC-FUNC-TRY01..10` and 10 HELP IDs** and historical blob `e1f9a2...` not found in this repo. Its `O05`/`O06` meaning conflicts with exact G10 source outcome mapping; current #782 bridge has **seven** local First Tries and Git blob `fcecb2...`. **Never stamp PASS on this Draft** without exact source and outcome mapping. `SOURCE_SNAPSHOT_MISMATCH_HOLD`.
- Owner's targeted Toán 12 W01/W02 SGK report has SHA256 `0da9a0fecbefb88494afbd674936a2835eac535096ce154d570c420af241da25`, already preserved verbatim Git blob `9f0466b7...` in separate Draft #780, issue #767 closed, current main public bank has populated answer/solution; this is not M7 Topic review. Original G12 SGK Chapter I R00 receipt `8fef1c7...` is independently PASS; its embedded pre-review `INDEPENDENT_PENDING` does not override later receipt.
- Full R04 evidence: `Temp_TOPIC_FUNCTIONS_NLM_UPLOAD_G10_G12_SOURCE_RECEIPT_TRIAGE_R04_20261107.md`; Q18 source/receipt SHA must match and no full Topic PASS is implied.

## 4. Map Academic/PED and no-clone review to actual sources

| Scope | Candidate source SHA locked | Existing bank evidence | Review scope / blocker |
|---|---|---|---|
| M1–M3 | `fcecb2c97fe7799124809c47045f2087d333afa9` | G10 R01 Academic PASS exact blob `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` | Only **new Delta C pedagogical bridge**; original G10 SBT T2 direct PDF B15/B16 verified R03, SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` |
| M4 | `a3db248040abe2109410614f2f11f5ef84aff422` | G11 B03/B20 20 public IDs | New content; source S1 direct, duplicates/FIG/WRITTEN need review |
| M5 | `f1fe1997242714ddadf3e94b981df904f4e12787` | G11 B16/B17 20 public IDs | New content; independent Academic/PED |
| M6 | `f35e7fcd99b853bb5f9392c6ded25c2e20aa012f` | G11 ChIX **62 public IDs** (60 B31–B33 plus 2 CHIX integrated), 9 Written, 11 HELP, 5 FIG | New pedagogical source; **62 item metadata count verified and closed R03**, separate M6 9-vs-10 outcome candidate HOLD remains |
| M7 | `944673fffe5dad9444c994e7719e5c054570bca2` | **Original G12 SGK ChI R00** 78 public IDs, 36 HELP has owner independently reviewed Academic/PED PASS receipt Git `8fef1c7dbd9b404881ff40cec8147c9ae89ef473`, on old immutable source `f0862dcdab21dec136e43969f45c42638e7c7574` | **New M7 Topic pedagogy** and placement/new public candidates still independently PENDING; SGK PASS != Topic PASS |

**Q16:** 12 historical G10 Topic private readiness candidates reviewed in 2026-10-31 summary do **NOT** provide independently held-out readiness for all G10–12. Protected source stays outside public Git; no hints/key/correctness/Tutor until Final Submit; no Mastery from public Practice or self-assessment.
**Q18:** no new NotebookLM Academic/PED PASS has been issued for M1–M7 new Delta C sources. Use exactly five Permanent THPT v2.1 + S1, exact source+receipt SHA, P0/P1/P2 and minimal Delta. Do not review historical unchanged G10 in full again.
**Q17:** each Topic concept must be teachable/practicable inside Topic. Linking SGK is optional, not a prerequisite. Golden R4 and THCS unaffected.

## 5. Minimal closure order, AUTHORING only

1. Original G10 SBT Tập 2 B15 printed 3–9 = PDF4–10, B16 printed 10–15 = PDF11–16 is now **directly verified** with SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`; review **only new** M1–M3 Delta C depth without revoking unchanged G10 PASS.
2. Reconcile **only the remaining M6 nine-vs-ten proposed outcome metadata**, and check cross-grade semantic item duplication. G11 D3 62 vs 60 and G12 HELP 36 vs 32 false mismatches were **closed R03 by finding CHIX/END exact IDs**; no new stems or HELP were created.
3. Lock one reviewer-ready inventory with final outcome IDs/placements/FIG/HELP and reviewer scope. New source prose is Delta C; tests/CI do not imply Academic/PED PASS.
4. Prepare downloadable real `Temp_*.md` files + 3–6 sentence prompt; if ≥3 sources use a single `Temp_*.zip` containing only `Temp_` files; remind user to unzip. Exact five THPT Permanent v2.1 and S1.
5. After external Academic+PED PASS (and Q01–Q18/A1–A7, protected RD1), create **one** V2 handoff, one ready manifest, REGISTER synchronized. AUTHORING then stops; RELEASE alone handles integration/merge/deploy with owner authorization.

**CHECKPOINT:** R00_PLANNING_21_NOT_CANONICAL; G10_10_OLD_PASS_IMMUTABLE; G12_ORIGINAL_SGK_CHI_PASS_RECEIPT_8fef1c7d_CONFIRMED; M4_10 + M5_9 + M6_9_CANDIDATE + M7_10_CANDIDATE still NEW_DELTA_C_REVIEW_PENDING; M6_OUTCOME_CANDIDATE_COUNT_HOLD; G11_D3_62_VERIFIED; G12_HELP_36_VERIFIED; G10_SBT_DIRECT_R03_COMPLETE; G10_UPLOADED_EXTERNAL_PASS_DIFFERENT_SNAPSHOT_MISMATCH_HOLD; WHOLE_TOPIC_READINESS_HOLD; FULL_CONTENT_READY=NO.
