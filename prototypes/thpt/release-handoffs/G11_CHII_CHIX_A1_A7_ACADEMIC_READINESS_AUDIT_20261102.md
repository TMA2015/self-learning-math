# Self-Learning Math · Toán 11 Chương II–IX — kiểm toán học liệu A1–A7 và bàn giao A6 · 02/11/2026

**TYPE:** Authoring academic-source readiness checkpoint; **NO R1–R5 RELEASE AUTHORIZATION**, no production/deploy. Ưu tiên trục SGK; giữ ba phần Chuyên đề riêng. Mọi số mục chỉ là kiểm kê, không tự thay chứng cứ D1–D6/PED.

## 1. Tổng quan tám chương

| Chương / bài | Author PR | RD0 | Public canonical | PRIVATE RD1 | D2 | SVG | HELP D6 | Nguyên bản đã duyệt | Điều kiện bàn giao R02 |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| II B05–B07 | #683 | 16 | 42 | 19 | 9 | 3 | 6 | Academic R01 PASS, Issue #684 | **R02 PED review required** + SBT ChII/III pagination reconcile |
| III B08–B09 | #685 | 14 | 32 | 21 | 10 | 3 | 6 | Academic R01 PASS, Issue #687 | **R02 PED review required** + SBT printed-page citation S1 |
| IV B10–B14 | #688 | 22 | 40 | 22 | 20 | 5 | 10 | Academic/PED R01 PASS, source-fidelity owner | **R02 pedagogical enhancement review required if integrating R02**; frozen R01 PASS remains |
| V B15–B17 | #690 | 17 | 36 | 17 | 13 | 3 | 6 | Academic/PED R02 PASS and source-fidelity addendum | **A1–A7 CONTENT_READY, effective R02 already locked** |
| VI B18–B21 | #692 | 22 | 49 | 22 | 19 | 4 | 8 | Academic/PED R01 PASS, source-fidelity addendum | **A1–A7 CONTENT_READY** |
| VII B22–B27 | #693 | 33 | 63 | 33 | 27 | 6 | 10 | Academic/PED R01 PASS, canonical content equivalence | **A1–A7 CONTENT_READY** |
| VIII B28–B30 | #694 | 20 | 47 | 20 | 16 | 3 | 8 | Academic/PED R00 PASS, source-fidelity addendum | **A1–A7 CONTENT_READY** |
| IX B31–B33 | #695 | 31 | 71 | 31 | 32 | 5 | 11 | Academic/PED R00 PASS, source-fidelity addendum | **A1–A7 CONTENT_READY** |
| **Tổng II–IX** | | **175** | **380** | **185** | **146** | **32** | **65** | | |

**Kết quả kiểm tra GitHub thực tế:** ChIV–IX **6/6** manifests đã tồn tại trong `prototypes/thpt/release-queue/ready/` trên nhánh tác giả và đều ghi `STATE: CONTENT_READY` với **7/7 mục A1–A7 được đánh dấu**. R1–R5, AP1–AP5 vẫn 0 mục PASS trong manifest; **không suy Academic PASS thành phát hành**.

Public 426/426 unique toàn G11 ChI–IX đã được A6 đối chiếu trên nguồn cụ thể trong Issue #698, không phải bằng chứng private 205 RD1 đã kiểm lại trong lần audit này. Toàn bộ RD1 private được bảo vệ, không đưa đề, lời giải, đáp án hay rubric vào PR công khai.

## 2. Source locks học thuật đã khóa, CHIV–CHIX không cần review lại toán bất biến

| Chương | Effective public source Git blob | Handoff/manifest tác giả hiện hành |
|---|---|---|
| IV | `f376c37dc4b98fe229f3151357da1d2701cab15e` | `prototypes/thpt/release-queue/ready/G11-SGK-CHIV-B10-B14-R01.md` |
| V | `77be75de3fd01c7aa9dcc0f1a14e5e2ca68ab7fa` | `prototypes/thpt/release-queue/ready/G11-SGK-CHV-B15-B17-R02.md` |
| VI | `f37113dc2a3a002511bc6b53ec53e049537f1947` | `prototypes/thpt/release-queue/ready/G11-SGK-CHVI-B18-B21-R01.md` |
| VII | `afc8ec039213b87b4930f2d34d48c28d1fc6277f` | `prototypes/thpt/release-queue/ready/G11-SGK-CHVII-B22-B27-R01.md` |
| VIII | `fde4f8be91b5884b4559fef59fde46cf826c2bc9` | `prototypes/thpt/release-queue/ready/G11-SGK-CHVIII-B28-B30-R00.md` |
| IX | `3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0` | `prototypes/thpt/release-queue/ready/G11-SGK-CHIX-B31-B33-R00.md` |

Các chương này đều có Academic/PED PASS và đã khóa nguồn theo biên bản chủ dự án cung cấp. Không yêu cầu NotebookLM review lại chỉ vì cập nhật metadata hoặc PR description. **ChIV R02** bên dưới là một phiên bản **mới** với bổ sung sư phạm sau PASS: không kế thừa PED PASS cho nội dung mới; nếu chủ dự án và nhánh phát hành muốn dùng giao diện R01 đã PASS thì phải tự kiểm chứng yêu cầu concept-first Issue #691 trên trải nghiệm thật, không gán mặc định R02 PASS.

**ChV outcome tích hợp:** source RD0 có `G11-CHV-INTEGRATED` với dạy tích hợp trong D1 / `Tự thử tích hợp`, nguồn ghi Written/Anchor + RD1 làm chứng cứ; kiểm tra kỹ thuật trước đó nhận 16/17 direct D3/D4 skill-ID mappings. Đây là chênh lệch *trực tiếp theo tag*, không tự bác owner Academic/PED 17/17 PASS; A6 phải định vị bằng chứng thực tế cho outcome tích hợp trong learner flow. Nếu thiếu một hoạt động công khai độc lập có chiều sâu, tác giả mở Delta_C *đúng phần*, không nhân bản câu hỏi và không tự thêm điểm mastery.

## 3. Ba snapshot PED Delta_C R02 tác giả đã biên soạn — chờ review độc lập

| Chương | R01 owner-reviewed source | Candidate R02 Git blob | Thay đổi thực chất, source parity QA |
|---|---|---|---|
| II | `a0975caaf39ead93c5faef149132f5ff6a828359` | `9737e7b0ba33fc875bc1d78d1104e8ebb427b6f3` | 3 concept intros, 9 VD PED5 notes, 3 SVG explanations, 3 first tries; **667/667** original lines unchanged |
| III | `ef7dbfbd55c34abab8a384d4dac3284c100dbaac` | `0b0fe33d213350c586f04345c39806c2633c594e` | 2 concept intros, 10 VD PED5 notes, 3 SVG explanations, 2 first tries; **310/310** original lines unchanged |
| IV | `f376c37dc4b98fe229f3151357da1d2701cab15e` | `abc89621cc2b8a00950b178b65162c0d4ea34f54` | 5 concept intros, 20 VD PED5 notes, 5 SVG explanations, 5 first tries; **704/704** original lines unchanged |

**ONE actual Temp review file** `prototypes/thpt/review-packets/Temp_G11_CHII_CHIII_CHIV_PED_DELTA_C_R02_BATCH_REVIEW_20261102.md` trên PR #683 chứa nguyên văn các dòng **được thêm** ở cả ba snapshot do chương trình so sánh R01→R02; không có private RD1 và không làm thay câu hỏi R01 đã duyệt. Mỗi phần nêu source Git blob, phạm vi ID, S1, đề nghị verdict riêng.

**SBT ChII–III is unresolved:** Owner receipts #684 and #687 có khoảng trang chồng chéo (ChII B07 41–45/final 46–49, ChIII B08 44–46/B09 47–49/final 50–52). Đối chiếu nguồn tham khảo công khai cho thấy B08 bài 3.1 được dẫn p45, final ChIII p50–52, nhưng **chưa có bản S1 gốc kiểm trực tiếp**, không sửa trang SBT theo nguồn thứ cấp. NotebookLM phải trả source-page reconciliation theo **bài**, với số trang in gốc, trước khi đóng A2 cho phiên bản R02 ChII/III.

## 4. Định nghĩa PASS và trình tự bàn giao

- `R01_ACADEMIC_PASS` ≠ `R02_PED_PASS` ≠ `A6_RELEASE_READY`. ChII/III/IV hiện **R02_CANDIDATE_REVIEW_REQUIRED**; KHÔNG bàn giao ba bản R02 như đã PASS.
- Sau khi NotebookLM trả verdict riêng theo bài và 5 Permanent Sources THPT v2.0, tác giả xử lý MINIMAL_DELTA (nếu có), kiểm tra SHA/source parity/ID/số trang, lưu biên bản PASS chính xác snapshot rồi tạo **một** effective A6 handoff từng chương. Các chương V–IX **đã có** effective academic handoff; không mở vòng review nữa chỉ để đổi nhãn cũ.
- Nhánh phát hành A6 tích hợp trong repo duy nhất, tự hoàn tất AP1–AP5/R1–R5/Final Submit/CI/deploy trên đúng HEAD; không sửa toán ngoài snapshot nguồn review, không clone item, không lộ RD1, không bật Skill Mastery/ghi tiến độ từ self-assessment.
- Mastery, Readiness, điểm chính thức, Firebase/Gemini, THCS Golden, tiến độ trình duyệt là ranh giới bảo vệ; `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD` ở biên bản học thuật không cho phép vượt cổng kỹ thuật.

**CHECKPOINT:** Hoàn thành tác giả R02 cho II/III/IV và đối chiếu các nguồn READY IV–IX; **chưa thể chứng nhận 'tất cả ChII–IX không còn lỗi' trước khi nhận độc lập PED verdict R02 và SBT page reconciliation**.
