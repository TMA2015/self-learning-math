# UX795 · Hướng dẫn triển khai tab, hình và bảng — SGK Toán 10–12

**Ngày quyết định:** 09/11/2026. **Chủ dự án:** Chốt giai đoạn 1 dùng duy nhất **tab ngang cấp 1** cho trang Kiến thức SGK của cả Toán 10–12. **Tab cấp 2 chỉ xem xét sau khi đã hoàn thiện toàn bộ chương trình**, nghiên cứu và quyết định riêng theo từng bài. Mẫu giao diện/lời giảng: mô hình lai, kiến thức theo mạch SGK, không đóng khuôn máy móc.

**Tài liệu này là hướng dẫn triển khai UI/biên tập cho Issue #795, KHÔNG phải tiêu chuẩn học thuật mới, KHÔNG thay `SLM-THPT-QUALITY-ONE` (Q01–Q18), Golden R4 5+1, Q15/Q16, S1 hoặc Project Source 08.** Mọi bản sửa vẫn phân loại Delta, có source/receipt, QA trên HEAD thực và quyết định phát hành của chủ dự án.

## A. Tab ngang — đúng một tầng trong giai đoạn 1

Một hàng bốn tab, tên công khai ngắn gọn, **giống nhau trên toàn bộ SGK Toán 10–12**:

| ID ổn định nội bộ | Nhãn học sinh | Nội dung |
|---|---|---|
| `discovery` | **Khám phá kiến thức** | Cùng tìm hiểu (lời giảng tự nhiên) → 1–2 ví dụ trực quan → **Thuật ngữ · Kiến thức và kỹ năng** ngay cuối tab |
| `knowledge` | **Kiến thức SGK** | Từng mảng liền mạch: khái niệm, định nghĩa/điều kiện/công thức, **hình/bảng sát lời**, khung kết luận, vận dụng nhỏ có đáp án học sinh tự mở (Q14) |
| `examples` | **Ví dụ** | Các dạng toán học sinh cần biết giải: đề → **vì sao chọn phương pháp** → lời giải có suy luận → kiểm kết quả và giới hạn |
| `mistakes` | **Lỗi thường gặp** | Sai lầm/nhầm lẫn thật, vì sao sai, cách sửa và đường trở về ý/câu Core thích hợp |

**Không tạo tab thứ hai trong từng tab**, kể cả ở bài nhiều mảng. Trong tab Kiến thức SGK, vẫn dùng **H3 và bố cục cuộn dọc theo các concept của S1**; không làm cho học sinh phải chuyển nhiều tầng để đi từ định nghĩa đến hình/ví dụ. Không chia lại thành WHY/PRE/PED/FIG/TRY checklist. Không biến bốn tab này thành bốn hành trình riêng; SGK/Chuyên đề và Golden Core/Luyện tập/Tự kiểm tra vẫn là điều hướng độc lập.

**Quy tắc tương tác/UI:**

- Một thanh tab duy nhất; cuộn ngang trên màn hình hẹp (không ép chữ xuống dòng thành nhiều hàng), vùng bấm tối thiểu khoảng 44 px; thanh có thể sticky nhưng phải đặt **dưới thanh Golden/site header** khi tích hợp thật, không che nội dung.
- Mỗi tab `role=tab`/ `aria-selected` / `aria-controls`; vùng `tabpanel` tương ứng; hỗ trợ Click/Enter/Space và Left/Right/Home/End, quản lý focus/Tab, đọc được với screen reader.
- Chuyển tab **không xóa DOM/học liệu, trạng thái câu tự mở hoặc vị trí học đang xem**, không nhân bản `item_id`/đáp án. Khi bật panel ẩn lần đầu phải kích hoạt lazy SVG/hình và MathJax đúng lúc; **không được đợi toàn bộ hình lazy ngoài màn hình** rồi báo fail.
- Nội dung nguyên vẹn trong HTML source/accessible fallback nếu JavaScript lỗi; có lối quay về tab đã chọn, deep links nếu cần sau rollout, tránh ghi Mastery từ việc xem tab.
- Cùng một hệ font-size, line-height, spacing, H2/H3/H4, khung kết luận, figcaption, table caption cho ba lớp. Cùng cấp semantic heading = cùng typography; không phụ thuộc lớp/chương.
- Không biến tab cấp 1 thành công tắc làm ẩn Core/Final Submit bảo vệ Q16; tab chỉ vận hành **trang Kiến thức** và không chạm ngân hàng đánh giá.

**Khóa giai đoạn:** Phase 1 = four level-one tabs for SGK 10–12 + đúng nội dung/figure/QA, **NO LEVEL-2 TABS**. Phase 2 mở **sau khi toàn bộ SGK hoàn thành**, do chủ dự án xem và cho phép riêng từng bài nếu thật sự cần.

## B. Hình và bảng — ưu tiên chức năng học, không theo quota

**Nguyên tắc chủ dự án:** Nếu **SGK S1 dùng hình hoặc bảng để giúp hình thành/hiểu một kiến thức**, thì SLM — vốn nhắm tới học sinh không có thầy giảng trực tiếp — **càng phải có một hình/bảng tương ứng hoặc một cách trực quan hiệu quả hơn**, không tự giới hạn vì bản website cũ, Gemini hay NotebookLM thiếu. Có thể thêm mới hình/bảng chủ động nếu chúng giúp học sinh hiểu hình thành khái niệm, điều kiện áp dụng, quan hệ, phương pháp, lỗi dễ mắc hoặc ví dụ thực tế. **Đây là ưu tiên rà soát có mục tiêu, không phải sao chép tất cả hình của SGK hoặc đặt chỉ tiêu mỗi bài phải có N hình.**

### Vai trò / loại nên tạo

| Khi dạy | Hình/bảng gợi ý | Ví dụ cần kiểm |
|---|---|---|
| Một khái niệm trực giác và ký hiệu mới | SVG vật/nhóm, sơ đồ quan hệ, hình đối chiếu | G10 B02 tập A={2,4}, B={2}; phân biệt phần tử và tập con |
| Nhiều ký hiệu, điều kiện, trường hợp | Bảng so sánh ngắn, phản ví dụ | `\in` vs `\subseteq`; ngoặc tròn/vuông và đầu mút |
| Quan hệ đại số/đồ thị/trục số | Trục số, bảng giá trị, đồ thị có đơn vị/miền xác định | giao/hợp khoảng; dấu ở đầu mút; biến thiên hàm số |
| Hình học phẳng/không gian | SVG vector, góc, hình chiếu, hệ trục, chú giải đọc hình | phương/chiều, 3D coordinates, phương trình đường thẳng |
| Đếm, xác suất, dữ liệu | Sơ đồ Venn, cây, bảng phân phối/ghép nhóm, biểu đồ | 40 học sinh: Venn 11/12/13/4 phải khớp chính xác văn bản |
| Tóm lược kiến thức chuẩn | Khung chốt công thức/định lý, bảng thuật ngữ/kỹ năng | định nghĩa kéo theo/đảo, các điều kiện cần/đủ |

### Quy trình tạo và gắn hình/bảng

1. Đọc đúng **SGK S1 lớp/tập/trang in** và outcome của bài, ghi hình/bảng nào làm rõ **chính xác mệnh đề nào**; kiểm SBT nếu cần, không phỏng đoán hình hoặc trang.
2. Chọn `hình`, `bảng`, `đồ thị`, `trục số`, hoặc **không cần** bằng giá trị giúp hiểu, không bằng mong muốn trang đẹp hơn. Nếu SGK đã có hình mang chức năng dạy học, **phải đánh giá đáp ứng chức năng đó** trong SLM; nếu chưa có thì ưu tiên thêm bản minh họa tương đương/chính xác.
3. **Tạo tài sản gốc riêng của SLM** từ sự kiện/khái niệm/điều kiện toán, không đăng scan, ảnh chụp hoặc cắt nguyên hình SGK để công khai; tránh sao chép thiết kế/trang sách. Lưu SVG edit được; bảng dùng bảng HTML semantic. Khi nội dung số liệu do SLM tự đặt, kiểm các phép tính và ghi rõ khác ví dụ SGK.
4. Mỗi hình gắn **1 concept/outcome + ngữ cảnh + điều kiện toán + source receipt + SVG SHA**. Tên/tệp có ID nội bộ, nhưng học sinh chỉ thấy caption tự nhiên, hướng dẫn **nhìn vào đâu / thấy gì / kết luận nào**, không lộ `FIG-`, `PED4` hoặc metadata.
5. **Hình đặt ngay trong tab liên quan và sát câu/định nghĩa/ví dụ**, không có một mục “Hình minh họa” tách rời ở cuối trang. Một hình chỉ tái sử dụng cho nhiều ví dụ khi **chung đúng điều kiện/số liệu**; không dùng hình hệ bất phương trình này cho hệ khác.
6. SVG có `<title>`, `<desc>`, `viewBox`, label dễ đọc, màu có tương phản và **không chỉ phân biệt bằng màu**; bảng có header/thead (và caption khi phù hợp), có khả năng cuộn ngang trên mobile nếu cần. Mọi công thức/nhãn toán phải hiển thị đúng MathJax/Unicode hoặc SVG vector, không lộ TeX thô.
7. Kiểm chéo hình–văn–đáp án: điều kiện, đối tượng, điểm, góc, dấu, hướng vector, dữ liệu, đơn vị, đầu mút, tỉ lệ. Với hình chỉ mang tính sơ đồ, ghi **“không theo tỉ lệ”** khi việc nhìn tỉ lệ có thể gây hiểu nhầm.
8. **Thêm sơ đồ/bảng có ý nghĩa toán mới hoặc thay lời giảng** là `DELTA_C_ACADEMIC_MATERIAL` (phải QA toán/outcome/S1 và receipt đúng snapshot). Chỉ đổi kích thước/vị trí/hình thức không đổi nghĩa, có bằng chứng mới là `DELTA_A_UI`. Lỗi toán trong hình là `DELTA_D_BLOCKER` đúng phạm vi.
9. QA trước phát hành: 390/820/1440, desktop + Safari/iPad khi yêu cầu, zoom/font, dark mode, MathJax, bảng, keyboard/focus, hình không vỡ hoặc mờ, hiệu suất lazy load, đối chiếu theo outcome và một bài transfer chưa xem lời giải; không làm hỏng Q15/Q16/Golden/THCS.

## C. Bài mẫu và rollout

**UX795 R01 · G10 B02** là mẫu minh họa:
- **Bốn tab cấp 1 duy nhất**; “Thuật ngữ · Kiến thức và kỹ năng” nằm trong Khám phá (không tạo tab thứ năm); 6 bước tự đối chiếu nằm ở Kiến thức SGK.
- Thêm **một SVG gốc** về A={2,4}, B={2} ngay sau câu giới thiệu tập con; bảng so sánh `\in`/`\subseteq` sát định nghĩa. Giữ SVG Venn 40 học sinh gốc ngay trong mục Sơ đồ Venn. Không sao chép hình SGK; kiểm đúng `{2}\notin A` **trong ví dụ này**.
- Khi mở tab chứa hình, kích hoạt tải hình và typeset. Bản A/B vẫn là prototype Draft #797, không phải giao diện đã tích hợp.

**Rollout G10–G12:** một thiết kế chung và cùng bảng kiểm hình/bảng cho **mọi bài SGK**, thực hiện trọn từng bài/chương và chỉ bàn giao khi QA/snapshot hợp lệ. Cổng kiểm toàn bộ 79 bài (27/33/19) không được suy từ một pilot PASS. Sau SGK mới xem **tab cấp 2 từng bài** và chuyển giao bài học UX cho Chuyên đề — hành trình Chuyên đề vẫn độc lập theo Q17, không suy SGK PASS → Topic PASS.

**Tracking:** GitHub Issue #795, Draft PR #797. **No merge/deploy** nếu chưa có owner chấp thuận đúng cổng; không phát hành tài liệu từ nguồn tham khảo Gemini/NotebookLM nếu Q01–Q18/S1 chưa đáp ứng. Bảo toàn source canonical, Core/Practice/Final Submit/RD1/Firebase/Gemini và dữ liệu học sinh.

**Checkpoint:** `UX795_PHASE1_L1_TABS_ONLY / PROACTIVE_VISUALS_APPROVED / GUIDELINE_DRAFT_R01 / NO_PRODUCTION_CHANGE`.
