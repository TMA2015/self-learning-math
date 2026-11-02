# Temp_G11_CHI_B01_B02_PED_DELTA_C_R03 — targeted independent review

**PACKET_ID:** `G11-CHI-B01-B04-PED-B01B02-R03-20261102`  
**STATUS:** `TARGETED_PED_B01_B02_REVIEW_REQUIRED` — do not infer PASS / CONTENT_READY / MERGE permission.
**REVIEW_CONTENT:** **all exact new lines** between R02 frozen source Git blob `9dcb7c8ef50cbddfd4167bd5dec2e1ef403cd761` (independent PED PASS for B03/B04) and R03 candidate Git blob **`256ceb5edc5e02aec320e83e99c8e08e035654f3`**, source file `prototypes/thpt/content-drafts/G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md` on author PR #681. Original R01 Academic PASS Git blob `599d12ac7c2252001f881833c39978f94112cee4`; original R02 949/949 lines are preserved in R03, 0 content deletions.
**S1:** SGK Toán 11 KNTT Tập 1 B01 tr.5–16, B02 tr.17–21; SBT B01 tr.4–7, B02 tr.8–10 according to earlier owner NotebookLM S1 receipts; recheck against S1.
**SOURCES:** Exactly 5 NotebookLM THPT Permanent Sources v2.0: `01_THPT_MASTER_PLAN_v2.0.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`. Not mixing v1.0.
**EXPECTED LESSON_IDS:** `G11-B01`, `G11-B02`.
**EXPECTED OUTCOME_IDS (10):** `G11-B01-DEG_RAD`; `G11-B01-TRIG_UNIT_CIRCLE`; `G11-B01-TRIG_IDENTITIES`; `G11-B01-PERIODIC_REDUCTION`; `G11-B01-ARC_LENGTH`; `G11-B01-RELATED_ANGLES`; `G11-B02-SUM_DIFFERENCE`; `G11-B02-DOUBLE_ANGLE`; `G11-B02-PRODUCT_TO_SUM`; `G11-B02-SUM_TO_PRODUCT`.
**EXPECTED CURRENT PUBLIC ITEM_IDs:** B01 B02 16 original D3 Core/Practice + 2 Written/Anchor; unchanged and previously Academic PASS. Their full content/keys/rubrics are in the R03 source file and frozen R01 original; DO NOT RE-REVIEW THESE UNCHANGED ITEMS unless new material contradicts them. **EXPECTED D2 EX_IDs:** `EX-G11-B01-01..03`, `EX-G11-B02-01..04`; **FIG_IDs:** `FIG-G11-B01-01`, `FIG-G11-B02-01`; two non-graded self-tries without `item_id`.
**PRIVATE RD1:** 20/20 source-locked private Written rubric, no stems/keys/solution in public review file.
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` — added pedagogical concept formation, why-based examples, graph interpretation, first try. **REVIEW P0/P1/P2** by lesson/outcome and the seven original D2 examples and both FIGs; verify **PED1–PED6**, logical placement before definitions, math accuracy, 5-source S1 scope, release safety. Return `SOURCE_RECEIPT`, `B01_PED_VERDICT`, `B02_PED_VERDICT`, `EX_PED5_VERDICT`, `SVG_DESCRIPTIONS_VERDICT`, `SELF_TRY_PED6_VERDICT`, `EXPECTED_REVIEWED_ID_RECONCILIATION`, `P0/P1/P2`, `MINIMAL_DELTA`, `TARGETED_PED_CLEARANCE` and any minimal fixes, no auto website/Readiness/Mastery decisions.

## Exact added source lines (R02 → R03 only)

# G11 Chương I B01–B04 — academic source R03 candidate · B01/B02 concept-first DELTA_C only

**PACKET_ID:** G11-CHI-B01-B04-PED-B01B02-R03-20261102  
**STATUS:** BLOCKED_BY_AUTHORING / PENDING_NOTEBOOKLM_TARGETED_PED_B01_B02. **NO R03 PASS.**  
**PARENT_SOURCE_R02_GIT_BLOB:** `9dcb7c8ef50cbddfd4167bd5dec2e1ef403cd761`; original R01 Git blob `599d12ac7c2252001f881833c39978f94112cee4`. All original lines remain untouched and in their original order below, including the independently PASSed B03/B04 R02 additions.  
**S1:** SGK Toán 11 KNTT Tập 1 B01 tr.5–16, B02 tr.17–21, cuối ChI tr.40–41; SBT B01 tr.4–7, B02 tr.8–10 according to prior NotebookLM source receipts; reviewer re-check original S1 on targeted PED.  
**REVIEW_SCOPE:** only `[R03-NEW]` B01/B02 concept motivation, prerequisite links, SVG reading, EX-G11-B01-01..03 / EX-G11-B02-01..04 explanation choices, two first tries. R02 B03/B04 plus 46 original public IDs / six original SVG / eight HELP / 20 confidential RD1 unchanged.  
**REVIEW_AUTHORITY:** five THPT Permanent Sources v2.0 and SGK/SBT KNTT S1; no Topic-cross-credit, Mastery, website merge/deploy.  

---

### [R03-NEW] B01-PED1-3 — Vì sao mở rộng số đo góc và các tỉ số lượng giác?

**Vấn đề:** Khi một bánh xe quay nửa vòng, rồi tiếp tục thêm hai vòng, tia cuối có thể giống nhau nhưng tổng góc quay và quãng đường đi được khác nhau. Góc hình học thông thường chỉ mô tả độ mở, chưa ghi được **chiều quay** và **số vòng quay**. Vì vậy Bài 1 dùng **góc lượng giác có hướng** và số đo radian: góc dương khi quay ngược chiều kim đồng hồ, âm khi quay cùng chiều.

**Kiến thức đã biết → kiến thức mới:** Ở tam giác vuông, với góc nhọn, sin/cos là **tỉ số cạnh đối/huyền, kề/huyền**; tam giác đồng dạng khiến các tỉ số không phụ thuộc kích thước. Nhưng cách này không trực tiếp mô tả góc quay âm hay hơn 180°. Ta đặt điểm M chạy trên **đường tròn bán kính 1**, lấy trục Ox dương làm tia đầu. Khi góc quay là α, **hoành độ** của M chính là cos α và **tung độ** là sin α. Hai tọa độ vừa giải thích ý nghĩa đại lượng vừa tự làm rõ vì sao sin²α+cos²α=1 và mọi sin/cos nằm trong [-1,1]. Chỉ sau cầu nối ấy hãy học cách tính và các điều kiện tan/cot.

**Radian xuất hiện từ đâu?** Với một góc ở tâm có độ lớn α, tỉ số **độ dài cung / bán kính** không phụ thuộc kích thước đường tròn: số đo radian của góc lấy theo tỉ số này, kèm dấu chiều quay. Vì cả vòng có độ dài 2πR nên cả vòng là 2π rad; nửa vòng là π rad. Nếu bánh xe quay ngược chiều 2π rồi quay tiếp 2π, điểm cuối trùng ban đầu nhưng **tổng đường đi** là 4πR, không phải 0.

**Khi nào dùng và điều kiện:** Dùng radian để tính độ dài cung, dùng tọa độ M để tính sin/cos cho góc bất kỳ; tan α chỉ xác định nếu cos α ≠ 0, cot α chỉ xác định nếu sin α ≠ 0. Không coi sin/cos là độ dài có đơn vị.

### [R03-NEW] B02-PED1-3 — Vì sao cần công thức cộng/trừ, thay vì cộng các giá trị sin?

**Vấn đề:** Em biết sin 30° và sin 45°, nhưng muốn tìm **sin 75°** mà không có bảng thì làm sao? Biểu thức sin(30°+45°) là một giá trị ứng với **một góc 75°**, không phải tổng hai độ cao sin 30° + sin 45°. Ta cần quy tắc liên hệ giá trị của góc tổng với các giá trị đã biết.

**Gợi nhớ Bài 1:** Với điểm trên đường tròn đơn vị M(u)=(cos u,sin u), N(v)=(cos v,sin v), **tích vô hướng** hai vectơ đơn vị OM,ON tính theo tọa độ là cos u cos v + sin u sin v; tính theo góc lệch là cos(u−v). Từ đó nhìn thấy nguồn gốc **cos(u−v)=cos u cos v + sin u sin v**. Đổi v thành −v cho công thức cos(u+v), rồi dùng liên hệ sin x=cos(π/2−x) để thu được công thức sin của tổng/hiệu. Đây là lý do các **tích chéo** xuất hiện thay cho cộng trực tiếp sin/cos.

**Từ nguyên lý đến công cụ:** Đặt v=u sẽ dẫn đến công thức góc nhân đôi. Cộng/trừ cặp công thức cos(u−v), cos(u+v) sẽ xuất hiện tích thành tổng; đảo hướng với nửa tổng/nửa hiệu suy ra tổng thành tích. Trong bài toán phải kiểm **đơn vị góc** thống nhất; với công thức tan cần từng tan xác định và mẫu cuối khác 0. Nhờ vậy học sinh phân biệt đúng lúc dùng dạng sin/cos thay vì chia cho biểu thức có thể bằng 0.

**Tự kiểm trực giác:** sin(30°+60°)=sin90°=1, còn sin30°+sin60°>1; hai cách cho kết quả khác nhau. Hãy giải thích bằng quan hệ “giá trị của góc tổng” chứ không học thuộc quy tắc dấu một cách tách rời.

### [R03-NEW] B01/B02-PED5 — Lý do chọn phương pháp cho 7 ví dụ đã PASS

- `EX-G11-B01-01`: dùng đổi độ–radian theo tỷ lệ 180°=π rad; chỉ **sau** đó mới quy góc về tia cuối nếu bài toán yêu cầu, không làm mất chiều quay khi tính quãng đường.
- `EX-G11-B01-02`: định góc phần tư và điểm trên đường tròn trước khi lấy dấu; góc tham chiếu π/6 cho **độ lớn**, vị trí ở góc phần tư II quyết định dấu.
- `EX-G11-B01-03`: cung dài không âm; lấy độ lớn của góc quay thực tế và nhân bán kính, không lấy số đo góc đã quy về một vòng.
- `EX-G11-B02-01`: kiểm bằng góc cộng 60°+30° trước, sau đó dùng công thức sin(u+v), so với **sai lầm** sin u+sin v.
- `EX-G11-B02-02`: chọn công thức nhân đôi vì đối số là 2u; kiểm lại sin²2u+cos²2u=1 để phát hiện lỗi dấu.
- `EX-G11-B02-03`: nhìn thấy tích 2cos75°cos15° nên chọn **tích thành tổng** cos(u−v)+cos(u+v), không thay nhầm công thức sin·sin.
- `EX-G11-B02-04`: muốn đổi tổng cos75°+cos15° thì dùng **nửa tổng và nửa hiệu**; kiểm các góc ban đầu đang dùng độ, không trộn độ với radian.

Các dẫn giải này chỉ giải thích lựa chọn công cụ, **không sửa** đề, nghiệm, điều kiện hoặc đáp án của bảy ví dụ R01.

### [R03-NEW] B01/B02-PED6 — Tự thử trước Core (formative, tự mở đối chiếu)

**B01:** Một bánh xe bán kính 2 cm quay trọn một vòng ngược chiều kim đồng hồ. Góc có hướng bao nhiêu radian, và quãng đường cung là bao nhiêu cm? Hãy giải thích vì sao một vòng quay khác “không quay” dù tia cuối giống nhau. **Đối chiếu chỉ mở sau khi tự làm:** góc +2π rad, độ dài 4π cm; đọc lại B01-PED1-3 và `EX-G11-B01-03` nếu chưa chắc, rồi đến Core `THPT-G11-B01-C01`.

**B02:** Em dự đoán sin(30°+60°) có bằng sin30°+sin60° không? Vì sao? **Đối chiếu chỉ mở sau khi tự làm:** không; sin90°=1, còn sin30°+sin60°=(1+√3)/2>1. Trở lại B02-PED1-3 và `EX-G11-B02-01`, rồi vào Core `THPT-G11-B02-C01`.

Hai Tự thử này không có canonical `item_id` mới, không thuộc 20 RD1 cuối chương, không ghi điểm hay nâng Mastery; A6 phải hiển thị phản hồi ở trạng thái chưa mở cho tới khi học sinh tự kích hoạt.

### [R03-NEW] B01/B02-PED4 — Đọc hai hình nguồn thay vì coi là trang trí

- **B01/FIG-G11-B01-01:** tìm tâm O, tia đầu Ox dương và tia cuối OM, xác định góc quay cùng/ ngược chiều và góc phần tư của M. Đọc hoành độ M → cos α, tung độ M → sin α; hai góc cùng tia cuối có thể khác **số vòng**. Trước khi dùng hình để suy dấu tan/cot, kiểm mẫu khác 0.
- **B02/FIG-G11-B02-01:** đọc lần lượt các tia biểu diễn góc 30°, 60°, 90° trên cùng đường tròn; phép ghép góc 30°+60° cho góc 90° nhưng không phải phép cộng trực tiếp **tọa độ tung sin**. Hình giúp nhận ra điều cần giải thích bằng công thức cộng; không khẳng định hình tự biểu diễn đầy đủ chứng minh tích vô hướng.

Giữ XML SVG, tọa độ, nhãn trục và alt gốc bất biến; người phản biện kiểm nội dung diễn giải có đúng hình hay không.


## R03 DELTA_C register — authoring blocker

- **Changed:** B01/B02 PED1–3 concept-first, PED4 two SVG descriptions, PED5 notes for 7 original worked examples, PED6 two first tries.
- **Unchanged:** all pre-existing R02 source lines, B03/B04 PED R02 PASS scope, entire R01 Academic PASS content, 26 outcomes / 46 canonical public items (42 D3 + 4 Written) / 6 SVG / 8 HELP, private 20 RD1 exclusively outside GitHub.
- **Missing before ready:** Independent targeted NotebookLM PED verdict for exact R03 snapshot B01/B02, including explicit lesson/outcome PED1–6 evidence, and any reviewer MINIMAL_DELTA closure. Review B01/B02 only; do not repeat Academic R01 or B03/B04 PED R02 unchanged.
- **R1–R5:** separate technical release owner gates; no A6 runtime or deployment changes in this branch.


---

**REVIEWER CAUTION:** B03/B04 R02 independent PASS already supplied by owner for **different unchanged** source; do not re-review those lessons just because R03 source bundles the entire Chapter I. R01 26 outcomes/46 public canonical source remains mathematically identical; this file is the **exact changed part** for the review. R03 must not be marked as a combined PASS until reviewer returns a targeted verdict. Original review source link (R03) is included so NotebookLM can inspect broader context where needed.
