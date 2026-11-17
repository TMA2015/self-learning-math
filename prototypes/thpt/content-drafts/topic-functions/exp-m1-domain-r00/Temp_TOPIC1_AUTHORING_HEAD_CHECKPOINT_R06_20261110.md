# CURRENT AUTHORING CHECKPOINT R06 — Chuyên đề Hàm số và đồ thị M1–M3/M6

**Ngày:** 10/11/2026 · **LANE:** AUTHORING · **PR:** #801 Draft · **STANDARD:** SLM-THPT-QUALITY-ONE/1.2.0 (Q01–Q18).  
**INDEPENDENT_ACADEMIC/PED_DELTA_C:** PENDING · **Q15_FULL_BANK:** HOLD · **Q07_REAL_BROWSER:** HOLD · **CONTENT_READY:** NO · **RELEASE:** NO.

## 1. Bảo toàn nguồn đã nghiệm thu

Canonical R18 PUBLIC M1–M7 vẫn nguyên Git blob **\`2340ea4975b37a457363eea59dd617070934983c\`**; Academic/PED PASS lịch sử đúng snapshot và 30 private RD1 owner-held không đổi. M4/M5/M7, M6 R18 cũ không bị review lại. Không sửa kiến trúc Topic/SGK, website, Golden UI, Firebase, Gemini, answer/rubric canonical hiện hành hoặc Skill Mastery.

## 2. Sản phẩm AUTHORING R06 thật

- Học liệu mới M1–M3/M6 dưới DELTA_C: giải thích miền/tập giá trị, hàm từng đoạn/dữ kiện, đồ thị trị tuyệt đối/miền biến đổi, cát tuyến–tiếp tuyến–đồ thị đạo hàm; **4 SVG + 4 HTML D5** tự chứa đã lưu Git.
- **11 DRAFT = 7 APP + 4 Written**, không có item_id/content_version canonical mới. 6 DRAFT đã retired qua Q15 R04/R05 vì nguy cơ trùng gần và tái dùng ví dụ/câu đã có.
- **24/24 toán spot QA đạt** trên phần đã kiểm bằng SymPy/lập luận; không thay independent review. Ma trận Q15 xác định chỗ HIGH_OVERLAP (M1-APP02 so M7-T03, M2-APP05 so Kiến thức Vận dụng, M2-WR01 so nội suy mẫu) nhưng chưa tự loại tiếp trước reviewer.
- M1 SVG accessible title trước ghi căn ở mẫu trong khi thực tế căn ở tử, **đã sửa** bằng nội dung tương đương về toán (source mới còn DELTA_C chưa review): \`Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg\`, blob **\`ede8ac7f7bf1d4f4b98af1d5736b74a14ab0980f\`**.
- 4/4 SVG được kiểm static có title/desc/viewBox/aria-labelledby và không nhúng script; **không** thay thế real browser visual/touch/keyboard/a11y QA.

## 3. Một nguồn review duy nhất trên active HEAD

**R06 transport:** \`Temp_TOPIC1_ALL_NEW_DELTA_M1_M3_M6_NOTEBOOKLM_ONE_SOURCE_R06_20261110.md\`; Git blob **\`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\`**.

- **23/23 source Git blobs + character lengths** đã so lại từ GitHub HEAD theo hai nhóm 12+11; 23/23 sections hiện diện và 11/11 DRAFT headings unique.
- Source #23: \`Temp_TOPIC1_R06_Q15_TARGETED_MATH_AND_D5_AUDIT_20261110.md\`, Git blob **\`841cd3da14806cdb4722d1af98129d767894a60d\`** — bảng 24 kiểm toán và quyết định Q15 tạm.
- **R05 transport** blob \`ac00738b6db48b01e2c40764bf93176cbd80844e\` là **SUPERSEDED** vì source #6 accessible title thay; giữ Git history, **không dùng đồng thời R05/R06**. Những hồ sơ R04/R05 nói 14/17 ứng viên là lịch sử, current 11.
- Prompt đúng 5 câu nằm trong R06; reviewer dùng đúng 5 Permanent THPT v2.1, SGK/SBT S1 và \`SLM-THPT-QUALITY-ONE\` Q01–Q18; chỉ M1–M3/M6 phần mới, không đọc lại R18 bất biến.

## 4. QA/review gates

| Gate | Trạng thái |
|---|---|
| R18 Academic/PED baseline | PRESERVED_SNAPSHOT |
| 23 source blobs + body/length manifest | VERIFIED, source-lock transport only |
| New candidate DRAFT IDs | 11/11 unique provisional, canonical Q15 HOLD |
| Authoring math spot | 24/24 PASS with limited scope |
| Q07 SVG title bug | CORRECTED_SOURCE, independent reviewer still pending |
| Actual browser QA HTML/D5 | PENDING |
| Independent Academic + PED / SOURCE_RECEIPT R06 | PENDING |
| Full canonical stem/answer/rubric/content_version/placement | Q15 HOLD |
| TOPIC intake Issue #790 / Draft RELEASE PR #799 | OPEN / NOT MERGED |
| READY manifest / REGISTER / CONTENT_READY | NO |
| Merge / deploy / Skill Mastery | NO |

**NEXT:** reviewer độc lập R06 phân loại từng Qxx/outcome/item/model, trả SOURCE_RECEIPT, P0/P1/P2, MINIMAL_DELTA; xử lý phần bị ảnh hưởng, đóng Q15/QA bằng chứng thật và chỉ khi V2 intake được hợp lệ mới xem xét SOURCE_LOCKED handoff/ready/REGISTER. Không yêu cầu owner review lại source R18 đã nghiệm thu.


## 5. Bổ sung kiểm toán file Notebook 10 mô hình mới (same R06 review snapshot, không reset source-lock)

**Nguồn owner upload:** \`Trang_Web_Tương_Tác_10_Mô_Hình_Toán_THPT.html\`, SHA-256 \`93b3764dae9a60defa7d2ebe8d353c60f5e4e7edc4523f5a837c00fae05cddc3\`. **AUTHORING độc lập QA Chromium thật** 390/820/1440 px, 10 Canvas khởi tạo nhưng phát hiện lỗi toán P0 tại model #4/#5/#6/#9, race \`CanvasRenderingContext2D.arc(-1.12)\` khi đổi nhanh view, CDN dependency offline, lời hứa drag vectơ/xoay 3D chưa thực thi. Bộ 4×2 tab thuộc catalog tham khảo, không thêm tầng kiến trúc thứ ba cho Topic.

- **Audit chi tiết Git blob** \`cf30368031bbb351d87ec35bc316c8d3fd9cd504\`: \`Temp_NOTEBOOK_NEW_10_MODELS_REAL_BROWSER_MATH_PED_QA_R01_20261110.md\`.
- **Giữ M6 D5 đã có của Topic1**, hai đồ thị f và f′/phản ví dụ x³; không thay bằng raw model #4 kết luận sai \`f′≈0 ⇒ cực trị\`.
- **Giữ P03/P07 của Topic2 PR #793** theo một nguồn canonical; đã gửi ghi chú trực tiếp ở PR #793. Ý tưởng Carbon-like/chia control/giải thích có thể reuse nhưng đòi QA/parity và targeted review nếu đổi học thuật.
- **R06 NotebookLM packet** blob \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` và **11 DRAFT** bất biến; không đưa raw 10-model vào nguồn reviewer hiện hành, không lặp review R18/R02 đã PASS, không thay \`CONTENT_READY=NO\`.
- **D5 browser QA mới chỉ chứng minh tệp Notebook gốc có lỗi**, KHÔNG phải browser QA thực của từng module AUTHORING #801/#793. Những cổng Q07/Academic/PED/Q15 và V2 #790 vẫn HOLD.


## 6. Standalone Notebook QA repair candidate receipt — NOT a review change

- **Research-only** candidate from owner upload \`Trang_Web_Tương_Tác_10_Mô_Hình_Toán_THPT.html\` source SHA256 \`93b3764dae9a60defa7d2ebe8d353c60f5e4e7edc4523f5a837c00fae05cddc3\`.
- Local repaired **conversation attachment**, **not committed as canonical source**, \`Temp_NOTEBOOK_10_MODELS_QA_REPAIR_CANDIDATE_R01_20261110.html\` SHA256 **\`b25949c157507b47ed7da4e113319699761ca40805b98025b55a930ade52584d\`**, 141586 bytes, 59 targeted edits.
- Exact browser QA **candidate only**: Chromium viewport 390/820/1440, 10/10 Canvas each, 0 JS errors including fast tab navigation, no horizontal overflow; 64 dot-product random / 36 Bayes random property checks, drag vector/3D/chart interactions. **No** real-device Safari/offline KaTeX or independent Academic/PED PASS.
- [Dedicated R02 GitHub receipt](Temp_NOTEBOOK_10MODELS_CANDIDATE_REPAIR_CHROMIUM_QA_RECEIPT_R02_20261110.md), blob **\`4e1a1e79c9c210f0f5b61dc59afe6015c173429a\`**. Candidate code distributed through conversation only, kept out of current topic canonical source tree. This is NOT a third curriculum journey.
- **R06 ONE SOURCE blob \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` unchanged**, baseline R18 blob \`2340ea4975b37a457363eea59dd617070934983c\` unchanged. Q15 11 DRAFT, independent targeted Academic/PED, Q07 existing Topic module browser/device QA, issue #790 and \`CONTENT_READY=NO\` remain HOLD.


## 7. M3 R07 — dẫn dắt lý thuyết trước hình, không tạo nguồn review mới

**Chỉ đạo owner hiện hành:** AUTHORING tận dụng trực tiếp nội dung/diễn giải/mô hình Notebook và Gemini để nâng cấp phần **Kiến thức**, giữ ba mục **Kiến thức/Luyện tập/Tự kiểm tra**. Chỉ dùng Notebook review khi cần giải quyết nghi vấn học thuật thực chất; không tự thêm bước review đầu vào Notebook mặc nhiên. R18 và Topic2 R02 đã PASS giữ nguyên, không viết lại chỉ để có thay đổi.

**Đã thực thi trên M3:**
- Thêm hoạt động \`Tự thử → Đối chiếu\` trước công thức \`|f(x)|\`, \`f(|x|)\`; câu chuyện hai máy xử lý đầu ra/đầu vào, hình mới. **Theory new blob** \`b3efdf2cf0b50725da02a0dcd0510c75f3d17c67\` (old \`c46a5f0a0ce88b4e4128f15836fce0215900bcd9\`).
- **SVG new blob** \`dbdda801c2d02169521db2ae974c00d567dd660a\`; font lớn, bố cục dọc, có \`title/desc\`, không external asset/script.
- **HTML D5 new blob** \`5bc8204f8bd024f30a73230231857210f1ce2123\` (old \`6c150da0406f559e13a1ae9d0eca3f5565790247\`): mặc định chỉ đồ thị f(x), học sinh dự đoán rồi bật từng phép biến đổi; readout không lộ kết quả trước.
- [Parity & static QA receipt](Temp_TOPIC1_M3_PED_GUIDED_VISUAL_EQUIVALENCE_QA_R07_20261110.md) blob \`393a69db53df4d24512a7febc556ad808ebfe69f\`. **6/6** số mẫu và **201/201** thuộc tính toán đạt, HTML JS syntax PASS, SVG accessibility structure PASS. **Real-browser exact branch/device vẫn PENDING.**
- \`DELTA_B_SOURCE_EQUIVALENT + DELTA_A_UI\` cho đoạn trình bày M3, **không thêm item/đáp án/rubric/giả thiết mới**; không thêm một reviewer packet mới. R06 ONE_SOURCE \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` còn nguyên như **snapshot R06 lịch sử**, **không** được mô tả là manifest current 23/23 sau hai file M3 đổi SHA. Cần ghi nhật ký delta khi chốt handoff, Q15 11 DRAFT vẫn HOLD.
- \`CONTENT_READY=NO\`, không merge/deploy, không thay Topic2/RELEASE, không yêu cầu review Notebook cho chính công việc Notebook đã biên soạn chỉ vì nguồn gốc nó là Notebook.
