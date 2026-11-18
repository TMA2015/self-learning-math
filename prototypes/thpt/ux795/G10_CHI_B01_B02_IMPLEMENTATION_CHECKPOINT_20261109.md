# UX795 — G10 Chương I / B01–B02 · Checkpoint triển khai SGK Knowledge

**Date:** 2026-11-09 · **Issue:** #795 · **Draft PR:** #797  
**Owner scope:** RELEASE chịu trách nhiệm học liệu Kiến thức SGK G10–12; AUTHORING tập trung Chuyên đề. **Không merge/deploy.**  
**Giai đoạn 1:** chỉ **bốn tab ngang cấp 1** trong mỗi trang Kiến thức, KHÔNG cấp 2. Sau khi hoàn thiện toàn bộ SGK chủ dự án mới xem từng bài để quyết định tab cấp 2.

## 1. Bản hoàn thiện ứng viên (chưa production)

| Bài | File học liệu | A/B so với HTML đã phát hành | Outcome / First Try | Hình và bảng |
|---|---|---|---|---|
| G10 B01 — Mệnh đề | [G10_B01_HYBRID_KNOWLEDGE_CANDIDATE_R01.md](G10_B01_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) | [UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html](UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html) | 5 outcome; TRY01–05; HELP01–02 | 1 SVG original chia hết cho 6→3 được chuyển về ngay kiến thức; 2 bảng chân lý phủ định và kéo theo |
| G10 B02 — Tập hợp | [G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md](G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) | [UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html](UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html) | 6 outcome; TRY06–11; HELP01–03 | 1 SVG mới về phần tử/tập con A={2,4},B={2}; 1 SVG Venn 40 người gốc; bảng phân biệt \`∈\`/\`⊆\` |

**Bằng chứng nguồn chi tiết:** [B01 receipt](G10_B01_DELTA_C_SOURCE_MAPPING_R01_20261109.md) · [B02 receipt](G10_B02_DELTA_C_SOURCE_MAPPING_R01_20261109.md) · [Gemini/NotebookLM reference registry](SOURCE_REGISTRY_GEMINI_NOTEBOOK_20261109.md).

## 2. Sự khác biệt so với cấu trúc cũ

- Mỗi bài có **bốn khu vực nội dung H2**: Khám phá → Kiến thức SGK → Ví dụ giải toán → Lỗi thường gặp; HTML B dùng bốn tab ngang cấp 1; phần Thuật ngữ/Kỹ năng nằm cuối Khám phá; từng concept trong Kiến thức vẫn **cuộn dọc**.
- Bỏ dãy các nhãn \`Vì sao cần học\`, \`Em đã biết gì\`, \`Hiểu bản chất trước công thức\`, \`Tự thử trước Core\` trên văn bản người học. Thay bằng lời giảng tự nhiên và các câu \`Em vận dụng\` đúng phần lý thuyết, giữ \`details\` đóng trước khi tự đối chiếu.
- Hình và bảng chỉ thêm khi **giải thích một khái niệm**, không làm trang trí; hình đặt sát định nghĩa/đoạn giải thích. Không sao chép scan SGK. Dữ kiện trong hình khớp bài toán.
- Ví dụ có \`Vì sao chọn cách giải?\` ngay cùng đề và lời giải; không gom lý do cuối trang.
- B01 khai thác ví dụ mệnh đề thực và lời giải \`x²+1=0\` từ NotebookLM v1, cách khởi động từ Gemini; B02 khai thác phân nhóm/“chiếc hộp” và ví dụ khoảng/đoạn v1. **Đối chiếu nội dung toán S1 còn ở trạng thái cần xác nhận snapshot mới.**

## 3. QA đã làm / chưa làm

| Gate | Hiện trạng |
|---|---|
| Source structure B01/B02 | PASS kiểm tĩnh: 4 H2 cả hai; 5+6 First Try IDs duy nhất và đúng dải; 2+3 HELP IDs, \`<details>\` mở/đóng cân bằng |
| Static page visual inventory | B01: 1 existing original SVG, 2 bảng; B02: 2 SVG (1 mới, 1 cũ) và bảng ký hiệu; dữ liệu hình đối chiếu theo trường hợp và receipts |
| Preview source pin | B01/B02 \`receipts.md\` trong A/B trùng SHA blob Markdown mới; A dùng snapshot HTML đã phát hành; B dùng nguồn R01 đã nhúng |
| One-level tab logic | Mô phỏng DOM builder B02: 1 tablist/4 panel, click + ArrowRight + Home, chỉ 1 panel visible, content không bị nhân bản |
| JavaScript preview | PASS kiểm tra cú pháp script trên cả hai tệp; test scripts Node đã được viết, **chưa tuyên bố đã chạy trên CI** |
| Actual browser/MathJax/mobile | **PENDING:** mở HTML đã tải bằng Chrome/Safari, 390/820/1440, kiểm công thức, bảng và SVG thực; tab keyboard/screen reader P2 riêng |
| Q01–Q14 & Q18 mới | **PENDING:** đối chiếu outcome/S1 và chi tiết thay đổi sư phạm \`DELTA_C\`. Receipt cũ không biến R01 mới thành Academic/PED PASS |
| Q15/Q16, Golden 5+1, Mastery | Source/bank không đổi; runtime regression **chưa thực hiện** |
| Release | **BLOCKED:** chỉ nghiên cứu ở \`prototypes/\`, không vào \`docs/\`; không merge/deploy khi chưa đủ cổng và owner cho phép |

## 4. Việc tiếp theo

1. QA thật bản HTML B01/B02 trên Chrome 390/820/1440 và Safari/iPad khi đến cổng P2; sửa UI/MathJax/AP2 nếu cần.
2. Soát lại từng khẳng định/điều kiện toán trên R01 với SGK KNTT S1, ảnh/nguồn v1 đã chọn; giải quyết \`STANDARD_CONFLICT_HOLD\` nếu thiếu Q18 cho Delta C mới. Không review lại toàn bộ học liệu không đổi chỉ vì có chỉnh layout.
3. Sau B01/B02 được chủ dự án nghiệm thu làm mẫu, áp dụng một template cấp 1 thống nhất cho 79 bài SGK, hoàn thiện theo từng chương và không mở tab cấp 2.
4. Kiểm quyền/receipt trước merge/deploy riêng; bảo vệ THCS Golden, Firebase, Gemini, Core, Q16/RD1.

**Checkpoint:** \`G10_CHI_B01_B02_NEW_NARRATIVE_DRAFTS_CREATED / PHASE1_L1_TABS_ONLY / STATIC_SOURCE_QA_PASS / REAL_BROWSER_Q18_BLOCKERS_OPEN / NO_PRODUCTION_CHANGE\`.
