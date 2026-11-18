# STANDARD_CHANGE_REQUEST — SGK 79 bài: một cấu trúc biên tập 4 tab

REQUEST_ID: `SCR-SGK-79-EDITORIAL-20261112`  
STANDARD_ID: `SLM-THPT-QUALITY-ONE`  
CURRENT_VERSION: `v3.0.1`  
PROPOSED_VERSION: `v3.1.0` (MINOR — biên tập/trình bày, không thêm Q19)  
OWNER_PROCESS_APPROVAL: `12/11/2026 — APPROVED: 7-step workflow + Golden HTML editorial structure only; demo typography/colors/css NOT approved`  
STATUS: `OWNER_GOLDEN_EDITORIAL_STRUCTURE_PASS / NORMATIVE_DRAFT_v3.1.0_PENDING_GOVERNANCE_QA_MERGE`  
PATH_SCOPE: `SGK_CHAPTER / Knowledge lessons, G10 27 + G11 33 + G12 19 = 79`  
EXCLUDES: `THCS Golden, Topic/Chuyên đề, official Readiness/RD1, Firebase, Gemini, student progress`  
RELEASE_AUTHORIZATION: `NONE / HOLD #819 and #816`  

## 1. Lý do cần thay đổi

Các trang SGK THPT đã triển khai không theo cùng một ngôn ngữ biên tập: G10 B01–B06 được dùng làm tham chiếu hữu ích; từ B07 nhiều đoạn khám phá nằm trong tab Kiến thức SGK, có nhãn PED kỹ thuật; từ B19–B27 xuất hiện những đoạn đọc hình/bảng không có hình ngay trước đó, công thức/khung/kiểu bảng và ví dụ không đồng nhất. G11 và G12 tại snapshot main chưa dùng cùng bốn tab Model B, vì vậy phải kiểm kê và đưa vào lộ trình *sau* khi mẫu được owner duyệt, không sửa tràn lan. Bộ kiểm Q03–Q14 có thể PASS về chứng cứ nhưng vẫn FAIL trải nghiệm biên tập nếu thiếu một hợp đồng hiển thị thống nhất.

## 2. Đề xuất cập nhật **vào chính chuẩn duy nhất Q01–Q18**

Owner đã nghiệm thu phần **cấu trúc biên tập** của mẫu HTML ngày 12/11/2026; **giữ nguyên màu/font/text-size/spacing/thanh điều hướng của Bài 1–6 Toán 10 trên production**, không sao chép CSS demo. Đã đề xuất bổ sung tiểu mục X-F vào file chuẩn hiện hành trong PR #821. Sau khi governance PR được phép merge, điều khoản này mới có hiệu lực. Cụ thể, thêm một tiểu mục riêng mang tên **SGK Editorial Presentation Contract — áp dụng AP1–AP5/PED/Q03–Q14, không phải chuẩn chất lượng thứ hai** vào tài liệu chuẩn gốc `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, cập nhật VERSION thành 3.1.0. Không sửa hay tự mở rộng yêu cầu Q15/Q16. Quy tắc đề xuất:

### E01. Bốn tab = bốn mục lớn của một bài

1. `1. Khám phá kiến thức`: các đề mục `1.1. Cùng tìm hiểu`, `1.2. Ví dụ trực quan`, `1.3. Thuật ngữ, kiến thức và kỹ năng`, điều chỉnh tên tiểu mục có chủ đích nếu SGK bài đó đòi hỏi nhưng giữ hệ thống `1.x`.
2. `2. Kiến thức SGK`: **ngay lập tức** mở bằng `2.1. [đề mục kiến thức SGK]`, tiếp `2.2`, `2.3`…; không có lời dẫn dài hoặc tiêu đề `Kiến thức SGK` lặp bên trong. Mỗi đề mục bám SGK KNTT đã đối chiếu nguồn S1, không đánh số nhảy cấp/trùng.
3. `3. Ví dụ`: các ví dụ **có lời giải đầy đủ** được đánh số `3.1`, `3.2`…; cùng cỡ chữ, bố cục đề–giải thích–bước giải–điều kiện–kết luận. Không trùng EX_ID hoặc nhân bản câu; ví dụ *trực quan* để khám phá thuộc tab 1, còn `Vận dụng` ngắn tự thử ngay kiến thức có thể ở tab 2.
4. `4. Lỗi thường gặp`: `4.1`, `4.2`… mỗi lỗi có tín hiệu nhận biết, giải thích, cách tự khắc phục và đường luyện đúng.

**Tab label thể hiện số 1–4.** Không lặp thêm H2 tiêu đề lớn bên trong tab. Cấu trúc đánh số chỉ là **cách hiển thị** của cùng một bài, không làm thay đổi mã LESSON/OUTCOME/ITEM.

### E02. Phân vai đúng — S1 dẫn cấu trúc kiến thức

- Tab 1: động cơ học, hiện tượng/vấn đề mở, tiền đề, giải thích bản chất, trực quan, thuật ngữ; đảm bảo PED1–PED6 trước khi sang Core, nhưng **không hiện nhãn PED kiểm toán** thành tiêu đề/nhãn giữa mạch bài.
- Tab 2: bản tóm tắt **đầy đủ** kiến thức chính thức theo đề mục SGK; định nghĩa, định lí, điều kiện áp dụng, công thức, sơ đồ/bảng và kiến thức cần nhớ. Dẫn giải ngắn để hiểu hình/công thức là tự nhiên nhưng không thêm các nhóm checklist `Kiến thức tiền đề`/`Bản chất trước công thức`/`Hướng dẫn đọc hình`/`Lý do chọn phương pháp` ở mỗi mục. Không mất nội dung học thuật khi chuyển tab.
- Tab 3: lời giải mẫu có reasoning, trường hợp/giới hạn và đối chiếu; không đặt nhiều ví dụ có lời giải dài trong tab 2.
- Tab 4: sai lầm có thật, nguyên nhân, D6.
- **Đầu mục chính thức tab 2 phải có đối chiếu tên & thứ tự SGK S1 theo từng Bài/Outcome**, không tự nhận khớp SGK chỉ vì regex đánh số.

### E03. Điểm nhấn toán và mẫu bảng/hình

- Định nghĩa/định lí quan trọng: một kiểu nhấn mạnh thống nhất, không đẩy nội dung bắt buộc ra ngoài trang.
- **Công thức trọng tâm**: khung công thức tiêu chuẩn tương đương cách B06 làm tốt; có điều kiện và chú thích cần thiết; không đóng khung tất cả phép tính trung gian hoặc làm biến đổi toán sai.
- **Kiến thức cần nhớ**: khung ghi nhớ thống nhất khi thực sự cần; không ép bài nào cũng phải có.
- **Bảng**: tiêu đề, nhãn hàng, số liệu và công thức căn nhất quán *theo vai trò*; cùng padding, căn dọc, hiển thị MathJax, có cuộn ngang trong mobile khi cần, không tự rút chữ hay nén nhỏ.
- **Hình/sơ đồ**: hình thực đặt sát lời giới thiệu trước khi yêu cầu đọc; nếu học sinh phải tự vẽ thì nói rõ `Hãy tự vẽ…`, không viết `Đọc hình…` như thể hình đã có. Không phát sinh SVG sai chưa kiểm chứng.

### E04. Ranh giới delta và nghiệm thu

- Chỉ CSS/JS/đánh số hiển thị giữ nội dung bất biến: `DELTA_A_UI`, QA AP1–AP5 + responsive.
- Di chuyển lời dẫn, lời giải hoặc biến đổi kết cấu kiến thức giữa tab: so sánh nguồn trước–sau và duy trì logic/outcome/D6; nếu sư phạm bị thay đổi thực chất, `DELTA_C_ACADEMIC_MATERIAL` với Q18 receipt/chứng cứ theo phần chịu ảnh hưởng. **Không tự hạ DELTA_C thành DELTA_A chỉ vì văn bản không thay chữ.**
- Luôn bảo toàn Q15/Q16, First Try tự mở, Final Submit, Readiness không hint/Tutor/key trước Submit, RD1 kín, Mastery, đường dẫn THCS/Topic.
- Chỉ được phát hành sau khi **mẫu owner PASS**, kiểm kê toàn bộ 79 bài, sửa **lần lượt từng chương**, CI đúng HEAD, AP/R/P1/P2 khi cần và **owner cho phép merge/deploy**.
- Q18 giữ snapshot đã nghiệm thu; không review lại nguyên chương chỉ vì CSS hoặc metadata không đổi toán.

## 3. Hai cổng quyết định không thể thay bằng CI

**GATE A — OWNER_GOLDEN_EDITORIAL_APPROVAL = PASS (12/11/2026, cấu trúc):** owner đã xem file HTML, xác nhận cách đánh số bốn tab, phân vai nội dung, công thức/định nghĩa, hình/bảng và ví dụ. *Màu sắc, font, cỡ chữ, khoảng trắng và CSS demo không được duyệt — phải giữ Golden B01–B06 thực tế*. Các ví dụ trong mẫu vẫn chỉ là minh họa, không phải S1 PASS.

**GATE B — S1_SECTION_MAPPING_PER_LESSON:** tác giả nguồn thẩm tra đề mục chính thức SGK KNTT theo bài và điền chứng cứ trang in/đầu mục; RELEASE không tự nhận từ tên heading đã là S1. Mỗi chương hoàn tất rồi mới chuyển tiếp.

Sau hai cổng mới được mở thay nguồn học liệu từng chương, theo 10 → 11 → 12 và owner scope. PR #819, #816 giữ HOLD trong giai đoạn chuẩn/mẫu.

## 4. Bằng chứng và tài liệu thực thi

- Golden mẫu đề xuất: `prototypes/thpt/ux795/THPT_SGK_79_EDITORIAL_GOLDEN_OWNER_REVIEW_20261112.md`
- Kiểm kê tự động: `scripts/audit-thpt-sgk-79-editorial.cjs` và workflow `thpt-sgk-editorial-governance-audit.yml`; kết quả **là danh sách lỗi cần kiểm bằng mắt**, chưa phải học thuật Q01 PASS.
- Sổ quyết định: chính SCR này, cần **owner duyệt mẫu** rồi mới thay phiên bản nguồn chuẩn thực tế. `STANDARD_CONFLICT_HOLD` nếu đề xuất trái Golden đã khóa hoặc cấu trúc SGK.

## 5. Trạng thái 12/11/2026

`OWNER_EDITORIAL_GOLDEN_PASS / NORMATIVE_XF_WRITTEN_IN_PR821 / FORMAL_GOVERNANCE_QA_PENDING / S1_79_PENDING / AUTHORING_CONTENT_PAUSED / PR819_HOLD / PR816_HOLD / NO_MERGE_NO_DEPLOY`.

Không tự nhận việc owner nói “Đồng ý triển khai ngay” là nghiệm thu thiết kế mẫu chưa nhìn thấy.
