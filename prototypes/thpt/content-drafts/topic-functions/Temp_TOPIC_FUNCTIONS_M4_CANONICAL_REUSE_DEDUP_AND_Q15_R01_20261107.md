# SOURCE/ITEM LEDGER — Topic Hàm số & đồ thị M4 · canonical reuse & no-clone preflight

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M4-R01-20261107  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0, Q05/Q06/Q08/Q15/Q17/Q18  
**STATUS:** SOURCE_CROSSWALK_VERIFIED / NEW_ITEM_APPROVAL_PENDING / NO_PRIVATE_RD1 / NO_MASTERY.  
**SCOPE:** M4 only, not all of G10–12. Existing SGK source is **not** being modified; all new Topic text is independent pedagogy, not re-review of old SGK bank.

## 1. Read-backed actual SGK canonical source (not guessed IDs)

- SGK G11 Chương I B03: \`prototypes/thpt/content-drafts/G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md\`, Git blob \`256ceb5edc5e02aec320e83e99c8e08e035654f3\`. Read **exact 12 public B03 canonical IDs**: 4 Core + 8 Practice; **not** all ChI items. The source R03 carries later pedagogical deltas and history; the item stems/keys below are unchanged from the referenced canonical section. Original SGK B03 reviewer PASS must remain on its own receipt; this crosswalk is only reuse metadata.
- SGK G11 Chương VI B20: \`prototypes/thpt/content-drafts/G11_CHVI_B18_B21_PUBLIC_CANONICAL_R01_POSTPASS_DELTA_B_SOURCE_LOCK.md\`, Git blob \`17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872\`. Read **exact 8 public B20 IDs**: 4 Core + 4 Practice/Application.
- **Do not turn these into a separate Topic bank:** a Topic placement points at the **same item_id, version, stem, answer, worked, rubric**, not a retyped new copy. If a part of the question has been publicly solved, it is formative, not independent Topic Readiness.

## 2. Existing G11 B03 canonical placement rows (verified exact)

| Existing item_id | Learning skill / question idea, **not replicated full stem** | Candidate Topic placement |
|---|---|---|
| THPT-G11-B03-C01 | miền tan | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-B03-C02 | chẵn/lẻ của sin cos tan cot | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-B03-C03 | chu kỳ sin vs tan | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-B03-C04 | tập giá trị và đỉnh của sin | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-B03-P01 | miền cot(2x) | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P02 | miền giá trị hàm sin dịch/biên độ | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P03 | chu kỳ cos có hệ số/pha | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P04 | khoảng tăng của sin | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P05 | cos cắt Ox trên miền | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P06 | tiệm cận đứng tan | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P07 | đơn điệu cot theo nhánh | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-B03-P08 | mô hình nhiệt độ tuần hoàn | TOPIC_PRACTICE · M4 APPLICATION |

**B03 Written canonical liên quan:** \`THPT-G11-CHI-W03\`: bài sin có hệ số/pha và các điểm cực trị, rubric hiện có **/7** theo source SGK. Đó là cùng **một** rubric; khi đặt lên Topic, không tự biến thành /4. \`THPT-G11-CHI-W04-ANCHOR\` giải phương trình lượng giác B04, **ngoài M4 pilot nếu không giải trình scope**, không được kéo vào chỉ để đủ Written.

## 3. Existing G11 B20 canonical placement rows (verified exact)

| Existing item_id | Learning skill / question idea | Candidate Topic placement |
|---|---|---|
| THPT-G11-CHVI-B20-C01 | miền/range và điểm cắt trục của 5^x | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-CHVI-B20-C02 | tính giảm khi cơ số 1/5 | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-CHVI-B20-C03 | miền log_3(x−2) | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-CHVI-B20-C04 | điểm tương ứng hai hàm ngược | TOPIC_PRACTICE · M4 BASIC |
| THPT-G11-CHVI-B20-P01 | tìm đối số log qua mũ | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-CHVI-B20-P02 | so sánh 3^u theo tăng | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-CHVI-B20-P03 | log cơ số <1 | TOPIC_PRACTICE · M4 CORE_APPLY |
| THPT-G11-CHVI-B20-P04 | mô hình tăng theo tỷ lệ/ứng dụng | TOPIC_PRACTICE · M4 APPLICATION |

**B20 Written canonical liên quan:** \`THPT-G11-CHVI-B20-W01\` (ba cặp điểm tương ứng, miền/range và đồ thị ngược, rubric /4); \`THPT-G11-CHVI-B20-W02-ANCHOR\` (suy giảm 1/2 qua kỳ, 3 bước tìm t, rubric /4; ANCHOR là tag Written). **Không tạo 2 bản Topic** của lời giải hoặc rubric.

## 4. M4 R01 draft new candidate de-dup vs exact 20 existing public B03/B20

| Candidate in Temp_TOPIC_FUNCTIONS_M4_* | Triage decision | Vì sao / tiêu chí để đổi thành canonical |
|---|---|---|
| P-M4-01 chẵn \(x^4+1\) | **MICRO_NOT_ITEM** | B03-C02 đã có chẵn/lẻ; giữ làm Tự thử, không sinh item mới chỉ đổi đa thức |
| P-M4-02 miền \(1/(1-\cos x)\) | **NEW_CANDIDATE** | ghép điều kiện mẫu với cực trị cos; cần so sánh toàn bank trước promote |
| P-M4-03 tan/cot tại 0 | **MICRO_NOT_ITEM** | bổ trợ B03-C01 và P07, không chứng minh chiều sâu mới |
| P-M4-04 sin có hệ số/mức giữa | **REUSE_FAMILY_NOT_ITEM** | B03-P02/P08 đã có dạng, giữ như ví dụ tại Knowledge |
| P-M4-05 miền/ngắt nhánh tan | **REUSE_FAMILY_NOT_ITEM** | B03-P06/P07 đã có lý luận nhánh |
| P-M4-06 cơ số \(1/3\) | **MICRO_NOT_ITEM** | B20-C02 và P03 đã có điều kiện chiều biến thiên |
| P-M4-07 \(\log_3(1/27)\) | **MICRO_NOT_ITEM** | B20-P01/P03 đã có ý đảo mũ |
| P-M4-08 cặp điểm phản xạ | **REUSE_FAMILY_NOT_ITEM** | B20-C04 exact skill; chỉ đổi tọa độ |
| P-M4-09 suy giảm theo kỳ nguyên | **NEW_CANDIDATE** | phải giải thích miền rời rạc/ngoại suy, thêm năng lực mô hình hóa |
| P-M4-10 miền \(\sqrt{\log_2 x}\) | **NEW_CANDIDATE** | phối hợp điều kiện log và căn, có rationale khác Core |
| P-M4-11 \(2^x\) vs \(x^2\) | **HOLD_DEDUP_CHECK** | SGK EX-G11-B20-01 có đối chiếu hàm mũ và lũy thừa, cần phân biệt chiều sâu transfer thật |
| P-M4-12 mô hình cos đoạn \([0,6]\) | **REUSE_FAMILY_NOT_ITEM** | B03-P08 và W03 đã có mô hình biên độ, cực trị; giữ làm Transfer worked example, không "một câu mới" tự động |

**Kết quả QA Q15:** 20 existing public IDs *đọc được và phân loại*, **3 new practice candidates** chưa được độc lập review, **9 candidates còn lại là MICRO/REUSE/HOLD**, không tính 12 "bài mới" vào coverage. Không sửa ngân hàng SGK. Khi reviewer yêu cầu thêm D3 depth, sáng tác bài có **bước tư duy mới** và lý do khác, không chỉ tăng số câu.

**Ví dụ D2 EX-M4-04 tan(2x):** trùng đúng ý với \`EX-G11-B03-01\` của SGK, phải đánh dấu **REUSED_WORKED_EXAMPLE** khi chuyển sang canonical (không mở hai EX_ID cho cùng lời giải). Bản kể chuyện bên Topic có thể dùng diễn giải độc lập nhưng tham chiếu **cùng** EX gốc.

**CAND-WRI-M4-01:** mô hình nhiệt độ đoạn hữu hạn + ngoại suy, có overlap B03-P08/W03; **HOLD_DEDUP_REVIEW** trước new Written.  
**CAND-WRI-M4-02:** tìm cơ số từ cặp điểm, miền/range, sau đó giải log, overlap B20-W01; **HOLD_DEDUP_REVIEW** trước new Written.  
Không nhận 2 Written draft thành 2 new canonical items. Nên ưu tiên reuse W03 / B20-W01,W02 và phát triển 1 Written transfer chỉ khi chứng minh Q05/Q06 còn thiếu.

## 5. Shared D5/D6 exact asset references (all GitHub blob fetched)

| Asset / HELP | Source evidence | Placement contract |
|---|---|---|
| FIG-G11-B03-01_R01.svg | blob 0ec702b2c7e4059fec5b27ba2e14713b9cb68e34 | sin: range/zero/period |
| FIG-G11-B03-02_R01.svg | blob e394b70aa5b3e238fd09cd4eac7076e2900193de | cos: even symmetry |
| FIG-G11-B03-03_R01.svg | blob 719bb8bad9d5d041893d64cb455197139f6c75a4 | tan: excluded points / disjoint branches |
| FIG-G11-B03-04_R01.svg | blob 784a6486a46ad770a6faf9466301477bcf0a722a | cot: excluded points / branch decrease |
| FIG-G11-CHVI-B20-01_R00.svg | blob 64bcb465bd6d809095a4ca2b910555e314badb69 | exponent/log mirror y=x, domain |
| HELP-G11-B03-01/02 | canonical D6 on SGK B03 source | miền tan/cot; period under coefficient |
| HELP-G11-CHVI-B20-01/02 | canonical D6 on SGK B20 source | base<1 direction; inverse graphs |

**A11y/UX AP3:** a FIG must have actual source legend/reading text rendered on Topic, not a "see SGK Figure" link. The FIG assets' correctness in Topic presentation is not certified by this AUTHORING ledger; RELEASE QA owns actual browser layout, not mathematical authority to edit the asset.

## 6. Next no-clone gate

1. Check *all source canonical families* before promoting the 3 new candidates and potential Written, including cross-grade bank, not just B03/B20; prefer shared \`item_id\` when substance is the same.
2. Build formal per-question \`item_id\`, \`content_version\`, \`answer_key\`, \`worked_solution\`, \`role\`, \`placement_id\`, \`outcome_id\`, \`skill_id\`, \`prerequisite\`, \`difficulty\` only after Q15 review. Draft name P-M4-xx is NOT a canonical ID.
3. New/altered academic teaching M4 and genuinely new items = Delta C; independent NotebookLM 5 Permanent v2.1; unchanged SGK bank snapshots remain PASS, never blanket re-review.
4. Keep \`TOPIC_READINESS\` held-out and protected. This public ledger contains only public Q15 metadata, not RD1 prompts/solutions.
5. Integrate to website only via RELEASE after Academic+PED and owner authority; authoring stops at V2 handoff.

**VERDICT:** \`Q15_REFERENCE_ID_AUDIT=PASS_20_EXISTING\`; \`NEW_CANONICAL_ID_PROMOTION=HOLD\`; \`TOPIC_M4_ACADEMIC_PED=REVIEW_PENDING\`; \`TOPIC_FULL_CONTENT_READY=NO\`.
