# CĐ21 R04 · A1–A7 AUTHOR SELF QA · Outcome-level math and pedagogy audit · 15/11/2026

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R04_FULL_KHAM_PHA_TREE_CANONICAL_20261115.md
SOURCE_BLOB: 2fa6557286aba05dd0eea972d4c4ac68371842d7
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
A1_A7_AUTHOR_VERDICT: AUTHOR_QA_PASS
OFFICIAL_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

## A1–A7 actual reviewed evidence

- [x] **A1 Source lock:** exactly one R04 source `2fa6557286aba05dd0eea972d4c4ac68371842d7`, 8 numbered Knowledge units, two real SVGs, 8 public Vận dụng, 8 Practice, 3 Written with three preserved four-point rubrics, a separate Public Tự ôn. No Topic Core tab.
- [x] **A2 S1 subject scope:** G12 KNTT SGK Tập Hai **Chương VI B18 “Xác suất có điều kiện”, B19 “Công thức xác suất toàn phần và công thức Bayes”**, as supported by existing SGK ChVI owner-reviewed original S1 evidence: `prototypes/thpt/release-queue/ready/G12-SGK-CHVI-B18-B19-END-R00.md` blob `35980562f448094bab053fa22d6dc899968cff3e`. Historic SGK original printed pp64–80/PDF1 pp66–82; SBT printed pp40–47 reference only. **No claim of newly reopening original PDF scans**; the original source receipt already covers the chapter scope.
- [x] **A3 Mathematical correctness:** independently recomputed **45 relations** across 8 Ví dụ, 8 Vận dụng, 8 Practice, 3 Written, both SVGs, including P(A|B) vs P(B|A), positive denominators, no-replacement tree, independence, full probability partitions, Bayes posterior and low-prevalence detection. All 45/45 comparisons matched the source formulas/numbers.
- [x] **A4 Canonical Q15:** 19 distinct `TOP21` public IDs, 8 `TOPIC_FIRST_TRY` version `TOP21-R01`, 8 `TOPIC_PRACTICE`+3 `TOPIC_WRITTEN` version `TOP21-R03` for revised solution text. Each has one answer/rubric body in one R04 canonical source, one primary outcome, no duplicate stem. Eight Public Tự ôn placements reference existing Practice IDs, not cloned questions. **Legacy G12 10 historical IDs in a separate index have ZERO placements in this packet**, so their old Q15 custody issues are outside active R04 source scope.
- [x] **A5 D1–D6:** eight continuous concept-first Khám phá narratives that explain why a problem needs conditional reasoning, relevant conditions and limits; 8 complete independent `Ví dụ` each with `Đề bài`+`Lời giải`; 8 first tries + 8 Practice solutions + 3 Written solutions/rubrics; two guided, literal SVG probability trees; corrective D6 in all 19 public task answers.
- [x] **A6 Delta custody:** Original R01/R02/R03 remain readable. R02 changed discovery/standalone examples and removed answer-leaking diagram, R03 deepened 8 Practice + 3 Written explanations; R04 adds matching tree under section 7 and explicit (P(+)>0), improving Q07/Q09–Q14. R04 changed no original first-try/Practice stems or opt-in answer/rubric bodies, updated P/W content versions only. These are **DELTA_C academic/pedagogical changes self-verified under §X-E of effective v3.1.0**, not reviewed R01 PASS.
- [x] **A7 Q16 safety:** Public Tự ôn references previously seen Practice only and cannot be `TOPIC_READINESS`; all 19 public answers remain behind collapsed `<details>`. Prepared **eight new separate owner-deliverable private RD1 items**, TOP21-O01–O08, questions separated from keys/solutions/rubrics in private ZIP SHA256 `c4242630d329f794e570cc406939fd85d5f65302b8b286ddcd2c74e8220a2e3b`, **never committed to public GitHub**. Self QA private 10 distinct calculations PASS. Runtime Final Submit and protection are RELEASE-only; not live, not Mastery.

## Outcome-by-outcome teaching-depth crosswalk

| Outcome | Knowledge / S1 | Concept | Method/conditions | Student ability tested | Difficulty band | Problem family | Existing canonical items |
|---|---|---|---|---|---|---|---|
| TOP21-O01 | Kiến thức 1, G12 B18 | Ý nghĩa của điều kiện và nhóm đã biết | Mẫu số là nhóm kết quả sau khi biết B; P(B)>0 | Hiểu khái niệm qua câu hỏi thay đổi nhóm; đếm theo nhóm đã biết | Trực tiếp | Thẻ, huy hiệu | `THPT-TOP21-T01` (Vận dụng), `THPT-TOP21-P01` (Luyện tập) |
| TOP21-O02 | Kiến thức 2, G12 B18 | Công thức giao chia xác suất điều kiện | P(A|B)=P(A∩B)/P(B), P(B)>0; không đảo A/B | Xác định đúng giao và điều kiện, tính hai hướng khác nhau | Thông hiểu | Chọn số và tính điều kiện | `THPT-TOP21-T02` (Vận dụng), `THPT-TOP21-P02` (Luyện tập), `THPT-TOP21-W01` (Tự luận) |
| TOP21-O03 | Kiến thức 3, G12 B18 | Quy tắc nhân tổng quát theo nhánh | Rút không hoàn lại cập nhật mẫu sau mỗi lượt | Biện luận nhân xác suất có điều kiện thay vì coi độc lập | Vận dụng | Rút thẻ lần lượt | `THPT-TOP21-T03` (Vận dụng), `THPT-TOP21-P03` (Luyện tập) |
| TOP21-O04 | Kiến thức 4, G12 B18 | Kiểm tra biến cố độc lập | P(A∩B)=P(A)P(B) cả khi P(A)=0; độc lập khác xung khắc | Phản biện độc lập bằng đẳng thức, xét ví dụ cùng phép thử | Vận dụng | Xúc xắc, đồng xu | `THPT-TOP21-T04` (Vận dụng), `THPT-TOP21-P04` (Luyện tập) |
| TOP21-O05 | Kiến thức 5, G12 B19 | Xác suất toàn phần hai nguồn | Hai nguồn phân hoạch; P(X),P(Y)>0; không cộng tỉ lệ lỗi trần | Nhân trên từng nhánh rồi cộng các nhánh rời nhau | Vận dụng | Tỉ lệ lỗi nhiều nguồn | `THPT-TOP21-T05` (Vận dụng), `THPT-TOP21-P05` (Luyện tập) |
| TOP21-O06 | Kiến thức 6, G12 B19 | Công thức Bayes đảo chiều điều kiện | Mẫu số xác suất dấu hiệu quan sát P(L)>0 | Phân biệt P(nguồn|quan sát) và P(quan sát|nguồn) | Vận dụng | Sản phẩm từ nguồn A/B | `THPT-TOP21-T06` (Vận dụng), `THPT-TOP21-P06` (Luyện tập), `THPT-TOP21-W02` (Tự luận) |
| TOP21-O07 | Kiến thức 7, G12 B19 | Sơ đồ cây xác suất có điều kiện | Tổng nhánh ra mỗi nút=1; nhân dọc, cộng lá | Lập nhánh và kiểm tra tổng lá, truy ngược nếu cần | Vận dụng | Tuyến đường – đúng giờ | `THPT-TOP21-T07` (Vận dụng), `THPT-TOP21-P07` (Luyện tập) |
| TOP21-O08 | Kiến thức 8, G12 B19 | Tỉ lệ nền và báo nhầm trong Bayes | P(báo)>0, tỉ lệ nền, nhạy và dương giả | Giải thích hậu nghiệm khác độ nhạy; phản biện lỗi đảo điều kiện | Tổng hợp | Dữ liệu xác suất và tần suất | `THPT-TOP21-T08` (Vận dụng), `THPT-TOP21-P08` (Luyện tập), `THPT-TOP21-W03` (Tự luận) |

The Knowledge sequence is complete and independent of the SGK learning path: all terms used in the calculation are introduced or re-explained, without requiring completion of SGK B18/B19. The private RD1 candidate topics are related to each outcome yet have **different contexts and numbers** from the public current topic first tries/practice, so the same already-opened answer is not reused as independent evidence.

## D5 source-checked diagrams

1. `docs/assets/images/thpt/FIG-TOP21_TOTAL_PROBABILITY_30_70_TREE_WHITE_R01.svg` blob `03b94e7d1c60c0d410dc8f48c10e71b7a1cf540a`: directly next to Knowledge 5's **worked** 30%/70% source example (2%/4% faults), includes all four leaves, weighted total failure 0.034, 100% leaf total. Subsequent Vận dụng has separate numbers, hence SVG does not reveal that answer.
2. `docs/assets/images/thpt/FIG-TOP21_ROUTE_TREE_3_5_2_5_R01.svg` blob `e6b10a7dc30e723360dc7e2cfd0228d3d48e023d`: directly after Knowledge 7's **worked** R/S route example, explains root branches 3/5+2/5, leaves 12/25+3/25+1/5+1/5=1, correct on-time 17/25. Its subsequent Vận dụng uses **different 3/5–2/5 red-card source data**, not the same branches/results.

Both have literal accessible `<title>` and `<desc>`, mathematical correct branches and nearby natural-language directions. Actual website AP3 responsiveness not claimed.

## AUTHOR_SIGNOFF

I have inspected the final R04 student source after canonical version lock, checked complete conditions/constraints, read all eight discovery–formal–worked-example–first-try teaching sequences and each Practice/Written explanation and rubric, recomputed 45 distinct public probability relations, verified the two SVG source descriptions, and separated eight independent private candidate questions from public material. **No identified academic/pedagogical P0/P1** remains in this *declared source packet*. This is Q18 **AUTHOR_SELF_VERIFIED** under the owner-effective single Q01–Q18 standard, **not** an independent NotebookLM reviewer result and not website RELEASE sign-off. No merge/deploy, official Readiness or Mastery.
