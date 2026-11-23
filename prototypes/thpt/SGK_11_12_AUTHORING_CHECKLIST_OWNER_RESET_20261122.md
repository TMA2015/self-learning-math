# CHECKLIST BIÊN SOẠN SGK THPT — TRANG KIẾN THỨC

**Ứng viên tinh gọn 24/11/2026 · DRAFT — chưa có hiệu lực; thay thế checklist tại chính đường dẫn này khi được chủ dự án duyệt.**  
**Mục đích:** Áp dụng [chuẩn THPT thống nhất](THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md) vào cách học **lớp → chương → bài**; không phải chuẩn chất lượng thứ hai. Mẫu Golden Toán 10 đã nghiệm thu là chuẩn tham chiếu bố cục/diễn giải; không bắt các bài có cùng số đề mục, hình, ví dụ.

**KHÓA PHẠM VI ĐANG GIAO — owner #1039 (23/11/2026):** Chỉ nâng cấp **trang Kiến thức Toán 11–12** trên learner canonical hiện hữu, bốn tab và SVG gắn trực tiếp khi cần. **Core/Luyện tập, Tự kiểm tra cuối chương, item/key/rubric/RD1, Mastery, CSS/JS chung, Firebase/Auth, website RELEASE đã khóa.** Checklist mô tả toàn kiến trúc SGK để học đúng vai trò, **không cấp quyền sửa các phần ngoài Knowledge**. Bảo toàn PASS và snapshot. Không tự merge/deploy.

## 1. Kiến trúc một bài SGK

| Phần | Học sinh cần nhận được |
|---|---|
| **Tab 1 — Khám phá kiến thức** | Lời giảng liền mạch, dễ hiểu, giúp học sinh làm quen với kiến thức, hiểu bản chất và biết cách vận dụng. Tùy nội dung mà dùng văn xuôi, ví dụ, câu hỏi, hình/bảng/đồ thị hoặc kết hợp; **không biến các cách dẫn dắt thành một loạt đầu mục nhỏ**. |
| **Tab 2 — Kiến thức SGK** | Sổ tay kiến thức tự đủ: đủ các Định nghĩa, Khái niệm, Định lý, Tính chất, Quy tắc, Công thức, điều kiện và ghi nhớ quan trọng; nhãn/khung đúng ngữ nghĩa 3+1. |
| **Tab 3 — Ví dụ** | Bài mẫu tự đủ đề, phân tích (khi cần), lời giải có suy luận và kiểm lại (khi hữu ích), trọng tâm kỹ thuật giải toán và ứng dụng nhiều dạng. |
| **Tab 4 — Lỗi thường gặp** | Ngộ nhận/sai lầm toán thật, chỉ rõ nguyên nhân và cách khắc phục; không lặp các ô Kiểm lỗi chỉ để đủ số mục. |
| **Core — ngoài trang Kiến thức** | Bài tập củng cố hiểu khái niệm/tính chất, mức nhận biết–thông hiểu. **ĐANG FROZEN.** |
| **Luyện tập — ngoài trang Kiến thức** | Bài tập áp dụng kiến thức, phối hợp phương pháp, mức tăng dần. **ĐANG FROZEN.** |
| **Tự kiểm tra cuối chương** | Đánh giá mức độ hiểu và vận dụng cả chương, giữ an toàn đánh giá. **ĐANG FROZEN.** |

**Hai tab đầu đối ứng các ý kiến thức chính SGK theo đúng thứ tự**: không bỏ/mất ý, mỗi tab đủ vai trò của mình. Khi SGK đánh số mục chính, dùng ánh xạ rõ ràng; khi SGK trình bày liên tục **không bịa đề mục chính thức**, tác giả được tổ chức các nhóm học tập có nghĩa toán học. Không yêu cầu cùng tên từng tiểu mục hoặc đồng dạng ví dụ giữa hai tab.

## 2. Trình tự làm việc cho một bài

1. **Đọc thực sự SGK KNTT đúng lớp/tập/bài**: danh sách ý chính, phát biểu chính thức, ký hiệu, điều kiện, ví dụ, hình, câu hỏi. Phân biệt phần SGK bắt buộc với dạng tham khảo SBT/đề thi. Đọc một bài Golden Toán 10 phù hợp để kế thừa văn phong và UI; không sao chép máy móc.
2. **Viết Khám phá kiến thức như một bài giảng liền mạch:** chọn cách giải thích phù hợp để học sinh hiểu *đây là gì, vì sao cần, khi nào dùng*; các câu hỏi này **chỉ để tác giả tự kiểm, không phải các bước hoặc tiêu đề bắt buộc**. Viết câu đủ nghĩa, dễ hiểu; đặt ví dụ/hình minh họa nơi thực sự giúp hiểu. **Chỉ chia mục khi chuyển sang một nội dung toán học chính có ý nghĩa**, dựa vào mạch SGK; không chia nhỏ theo trình tự trực giác → tiền đề → quan sát → bản chất hoặc các nhãn PED. Không đẩy toàn bộ giải thích sang Tab 2.
3. **Viết Kiến thức SGK:** ghi đúng và đủ các phát biểu chính thức, điều kiện/ngoại lệ; phân loại nhãn **Định nghĩa/Khái niệm**, **Tính chất/Định lý/Quy tắc**, **Kiến thức cần nhớ** (khi thật cần), **Công thức**. Cùng 4 loại khung Golden 3+1; không tạo hộp rỗng hoặc nhân đôi công thức.
4. **Viết hai chức năng Ví dụ:** (a) ví dụ minh họa trực tiếp kiến thức, có thể đặt ngay trong Khám phá, thường nối một **Vận dụng → Đối chiếu** cùng ý; (b) Ví dụ trong Tab 3 dạy cách phân tích đề, nhận dạng và chọn hướng giải cho các dạng bài thường gặp/thi. Mọi Ví dụ toán có đề tự đủ, lời giải đúng, rõ lý do; **Phân tích/Kiểm lại/Lưu ý** khi hữu ích, không phải công thức cố định áp mọi tình huống.
5. **Bổ sung Lỗi thường gặp và khả năng sửa sai:** ví dụ về nhầm khái niệm, quên điều kiện, chọn sai dữ kiện, dùng sai công thức; nêu hậu quả và cách kiểm. Vận dụng phải cho học sinh **tự làm trước khi xem đáp án**, không đặt số/đáp án đã hiện trong hình hoặc ví dụ ngay trước.
6. **Rà hình theo nhu cầu, tái sử dụng trước:** mở asset hiện có trong bài và thư viện repo; kiểm đúng ký hiệu/tỷ lệ/ý toán, chỉ bổ sung nếu thật sự thiếu. **Tab Khám phá và Kiến thức SGK ưu tiên hình/bảng/đồ thị**, có thể dùng **chung một asset chính xác** nhưng chú giải phù hợp trong từng tab. Tab Ví dụ/Lỗi thường gặp **không bắt buộc** có hình. Lời “quan sát hình” phải có đúng hình tại điểm đọc, caption/alt hiểu được. Không quota số hình.
7. **Tự kiểm bằng người học:** che đáp án, đọc tuần tự toàn 4 tab, giải lại tất cả Ví dụ/Vận dụng; kiểm đúng–đủ SGK, điều kiện, đại số, đơn vị, trường hợp biên, hình/MathJax/source path; câu nào khó hiểu thì viết lại. Tìm thông báo kỹ thuật, “theo SGK trang…”, SHA/outcome/Qxx lộ trong lời học sinh và loại bỏ. Không kết luận browser/visual PASS chỉ từ Markdown.

## 3. Nhãn, đánh số và giao diện dùng chung

- Bốn tên tab **giữ đúng như trên**. Trong mỗi tab, số mục lớn `1.x`, `2.x`, `3.x`, `4.x` nếu bài thực sự cần đánh số; **một cấp mục = một cấp kiểu đánh số**. Nhãn/heading mang tên nội dung toán, ngắn, rõ như sách học; không thêm “của em”, “hãy”, mã bài tập hay metadata.
- Nhãn chức năng thống nhất hai nhánh: **Ví dụ**, **Đề bài**, **Phân tích** (tùy chọn), **Lời giải**, **Kiểm lại** (tùy chọn), **Vận dụng**, **Đối chiếu**, **Kiểm lỗi** (khi cần), **Lỗi thường gặp**. Khám phá có văn xuôi liền mạch, không đánh số riêng cho từng tiêu chí QA.
- **Khung 3+1, typography, MathJax, disclosure, light/slate** dùng Golden hiện hữu; AUTHORING xác định nội dung/nhãn; RELEASE kiểm pixel/render và tương tác. Không sửa CSS/JS nền trong nhiệm vụ Knowledge-only.
- Dùng lại **asset, item và tương tác canonical** khi đúng kiến thức; tuân thủ [hợp đồng dùng chung](THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md). Không tạo item mới trong phần Core/Luyện tập đã khóa chỉ vì thêm Knowledge.

## 4. Hoàn thành và nghiệm thu có giá trị

**Tác giả tự trả lời bốn câu:** (1) Có đủ các ý/phát biểu SGK ở cả tab 1 và 2? (2) Một học sinh lần đầu có hiểu bản chất và cách dùng trước khi xem lời giải? (3) Ví dụ/Vận dụng có tự giải, kiểm toán đúng và khác nhau về chức năng? (4) Hình, tiêu đề, nhãn, liên kết có thực sự giúp học sinh đọc được không?

- **Phản biện NotebookLM:** gửi nội dung toán/giải thích *mới hoặc thay đổi thực chất* đã tự kiểm để nhận phản biện học thuật, diễn giải và tự học theo chuẩn chung; không giao reviewer xử lý số trang/offset/receipt. Sửa đúng lỗi có bằng chứng, chỉ review lại Delta chịu ảnh hưởng.
- **Một canonical, một checkpoint ngắn khi cần** gồm bài/PR/HEAD, nội dung đổi, kết quả kiểm toán/phản biện và blocker thực chất. Metadata thuần túy do tác giả tự giải quyết, không làm HOLD học thuật.
- `TỰ KIỂM ĐẠT` / `CONTENT_READY` / `RELEASE_READY` / `PUBLISHED` là các trạng thái khác nhau; chuyển theo hợp đồng Q18 và quyền owner. Chỉ đánh giá **trang Kiến thức** đã giao, không kéo Core/Tự kiểm tra đã nghiệm thu thành blocker của đợt này.

**Checklist này là bản thay thế đề xuất cho nội dung lịch sử tại [PR #1022](https://github.com/TMA2015/self-learning-math/pull/1022); khi được phê duyệt phải đối chiếu/đóng hoặc chuyển hướng PR cũ, không duy trì hai checklist có hiệu lực song song.**
