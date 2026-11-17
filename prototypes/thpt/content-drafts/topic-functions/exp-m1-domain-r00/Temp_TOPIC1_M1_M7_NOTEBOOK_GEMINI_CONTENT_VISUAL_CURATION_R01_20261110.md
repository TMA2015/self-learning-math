# AUTHORING — Chọn lọc học liệu Notebook/Gemini cho Chuyên đề 1 M1–M7 (R01, 10/11/2026)

**Mục đích:** cụ thể hóa chỉ đạo chủ dự án: tận dụng nội dung thật sự tốt từ Notebook/Gemini, dựa vào kết quả tự kiểm nguồn/toán và **không sao chép nguyên bộ**. Đây là **sổ nguồn và quyết định tác giả**, không phải thay nguồn SGK/SBT, không tự cấp Academic/PED PASS cho thay đổi lớn. Không áp dụng một khuôn cứng cho mọi chặng.

## 1. Nguồn Notebook thực sự đã đọc

Archive do chủ dự án cấp: \`Notebook chuyên đề.zip\`, các đường dẫn nội bộ:
1. \`Notebook chuyên đề/22 chuyên đề/hoc-lieu-tu-hoc-toan-thpt-nhanh-2.md\` — phần **Chuyên đề 5: Hàm số, đồ thị và phép biến đổi** và **Chuyên đề 6–10** cho các mạch mở rộng.
2. \`Notebook chuyên đề/Temp_TOPIC_01_HAM_SO_VA_DO_THI_FULL_PUBLIC_R00.md\` — bộ **12 chuyên đề**: khái niệm hàm, cực trị, khảo sát, ví dụ; file có tình trạng dự thảo riêng và không mang Academic/PED PASS của nguồn R18.
3. \`Notebook chuyên đề/22 chuyên đề/Decoding_Reality.pptx\` và PDF 15 trang — **15 slide đều là ảnh raster toàn trang**, không là tập SVG/chữ vector editable.
4. \`Notebook chuyên đề/22 chuyên đề/mo-hinh-toan-hoc-tuong-tac-v2.html\`, \`interactive_visual_im_ca880bfaa690d985.html\` — mã tương tác; mô hình của Gemini ưu tiên làm **tham chiếu phong cách giao diện sáng**, không sao chép CSS/framework.

Các tài liệu Notebook là **nguồn ý tưởng bổ sung**, chưa được phép thay S1. Phần nguồn academic chính vẫn là SGK/SBT KNTT S1 và R18 đã review, blob \`2340ea4975b37a457363eea59dd617070934983c\`.

## 2. Chọn lọc và xử lý cụ thể

| Ý từ Notebook / Gemini | Vị trí trong Chuyên đề 1 | Quyết định theo nguồn thực |
|---|---|---|
| Hàm số như máy nhận đầu vào, cần hiểu **miền hợp lệ** | M1 | **Nhận tinh thần giải thích**, dùng ví dụ vé, căn/mẫu và tập giá trị đã tự kiểm; không lấy nguyên câu Notebook |
| Trị tuyệt đối ở **đầu ra** \(|f(x)|\) khác ở **đầu vào** \(f(|x|)\) | M3 | **Đã biên soạn lại bằng suy luận + SVG + lab**, giữ miền đúng; đây là enrichment, không khẳng định là Core SGK B16 |
| Dịch đồ thị \(f(x-a)+b\) phải giải thích **vì sao dấu trừ dịch phải** | M3 | **Đã bổ sung** ví dụ \(f(u)=(u-1)^2\) trên [0,2], dịch sang phải 2/lên 3, miền mới [2,4], và hình SVG mới; kiểm điều kiện của miền |
| Nội suy dữ liệu từ vài mốc không tự là số đo | M2 | **Đã biên soạn độc lập**, nêu rõ giả định cần thiết và giới hạn mô hình |
| Giới hạn dạng \(0/0\), nhân liên hợp | M5 | **R18 đã có** lý do chọn phương pháp và trường hợp biên; ưu tiên **tái sử dụng** nguồn PASS, không nhân thêm bài cùng dạng chỉ để tăng số lượng |
| Đạo hàm là giới hạn tốc độ trung bình | M6 | **R18 đã có** secant→tangent, unit, trường hợp góc nhọn và D5; không thay bằng bản Notebook ngắn hơn |
| Xét tối ưu từ bài toán hình trụ, số liệu \(V=2000\pi\) | M7 | Phương pháp đại số Notebook có thể dùng làm **ứng viên ví dụ thêm** nếu tạo ra outcome khác; R18 đã có bài hộp không nắp, miền \(0<x<10\), nên **chưa nhân thêm câu** vì chưa chứng minh lợi ích độc lập |
| “\(f'(x)=0\) ⇒ đổi chiều ⇒ cực trị” ở Nhánh II, Chuyên đề 10 | M7 | **REJECT_MATH_ERROR**: phát biểu suy diễn này sai. Lấy \(f(x)=x^3\), \(f'(0)=0\) nhưng không có cực trị. R18 M7.1 đã có phản ví dụ đúng; tuyệt đối không sao chép câu sai |
| Lập trình mô hình nhìn được trước công thức | M1–M3 | **Nhận**, nhưng là \`D5 PUBLIC_FORMATIVE_ONLY\`, không dùng làm bài kiểm tra độc lập, không ghi Mastery |
| Tiêu đề ngắn gọn, sáng; giải thích thân thiện nhưng không “nén” câu | Kiến thức toàn Topic | **Nhận định hướng chủ dự án**, giữ \`Vận dụng\` và \`Đối chiếu\` ở tiêu đề/nút; phần lời giảng được phép tự nhiên, có chiều sâu. Không lập chuẩn UX thứ hai |

**Kiểm toán toán đáng chú ý:** Bộ 22, Nhánh II, Chuyên đề 5 đưa ví dụ \(f(x)=x^2-4x+3\), so số nghiệm \(|f(x)|=m\): kết luận \(m<0:0\), \(m=0:2\), \(0<m<1:4\), \(m=1:3\), \(m>1:2\) là **đúng** (giao với đường ngang); có thể dùng làm bài nâng cao sau khi review, không cần thêm một item clone trước đó. Bộ 22, Chuyên đề 10 ngược lại có lỗi logic đạo hàm nêu trên — do đó **không** đánh giá nguồn theo cảm giác “nhiều hình là chắc đúng”.

## 3. Phần M4–M7 đã đạt độ sâu ở R18: chủ động không viết lại

| Mạch R18 có Academic/PED PASS theo snapshot | Học liệu và hình chia sẻ đã có | Quyết định |
|---|---|---|
| **M4** chẵn/lẻ, tuần hoàn, sin/cos/tan/cot, mũ và log | **5 SVG gốc**: FIG-G11-B03-01..04_R01.svg và FIG-G11-CHVI-B20-01_R00.svg; nêu miền, biên độ, chu kỳ, điều kiện log và hướng tự chữa | **REUSE_R18_NO_DELTA**. Notebook 22 cung cấp trực giác; R18 đã giải thích đủ. Không viết lại chỉ để khác lời |
| **M5** giới hạn và liên tục | **2 SVG gốc**: FIG-G11-B16-01_R01.svg, FIG-G11-B17-01_R01.svg; có giới hạn một phía, lỗ, bậc nhảy, định lý nghiệm tồn tại | **REUSE_R18_NO_DELTA**. Giữ ví dụ/đáp án/rubric đã duyệt |
| **M6** đạo hàm và ý nghĩa | **5 SVG gốc**: FIG-G11-CHIX-B31-01/02, B32-01/02, B33-01_R00.svg; tốc độ trung bình vs tức thời, tiếp tuyến, quy tắc hàm hợp, đơn vị và D6 | **REUSE_R18_NO_DELTA**. Không hạ độ sâu thành bảng công thức |
| **M7** dấu đạo hàm, khảo sát, tối ưu | **6 SVG gốc**: G12_B01..B05 nhiều hình, gồm dấu đạo hàm, cực trị đoạn, tiệm cận, đồ thị phân thức/đa thức, bài hộp 30×20 | **REUSE_R18_NO_DELTA**. R18 đã sửa bẫy “đạo hàm 0 ⇒ cực trị” và phân biệt cực trị/cực đại toàn cục |

Như vậy, M4–M7 **không có lý do để review lại** chỉ vì tiếp nhận ý tưởng Notebook. Nguồn PASS được bảo toàn. Những thay đổi thật sự có nội dung mới tập trung ở M1–M3, ghi \`DELTA_C\` chứ không tự coi là tương đương.

## 4. Khai thác 15 slide có kiểm toán

| Slide | Ý tưởng từ hình | Sử dụng phù hợp (không chép nguyên slide) | Gate |
|---:|---|---|---|
| 1 | Bìa “Giải mã thực tế” | Không đưa nguyên vào phần giải thích một công thức | \`DECORATIVE_ONLY\` |
| 2 | Năm góc nhìn toán | Có thể dùng để định hướng **toàn chương trình**; không ép thành 7 mạch M1–M7 | \`MAP_CANDIDATE\` |
| 3 | Nhận diện biến thiên | M7 mở câu hỏi “đồ thị đang tăng/giảm vì sao?” | \`RE-DRAW_OR_CROP\`, kiểm trục và điểm |
| 4 | Đỉnh và tối ưu | M7.1–M7.2, giúp đọc dấu đạo hàm | \`RE-DRAW_OR_CROP\`, kiểm dấu/điểm/cực trị |
| 5 | Tối ưu kỹ thuật/vận tải/kinh tế | M7.5–M7.6 minh họa ứng dụng có miền | \`EXTERNAL_NUMERIC_CLAIMS_HOLD\`: các con số hiệu quả thực tế chưa có nguồn độc lập |
| 6 | Hình học không gian | **Chuyên đề 2**, không ép vào Chuyên đề 1 | \`DEFER_TOPIC2\` |
| 7 | Khoảng cách ngắn nhất trong không gian | **Chuyên đề 2** | \`DEFER_TOPIC2\` |
| 8 | Số hóa Oxyz | **Chuyên đề 2** | \`DEFER_TOPIC2\` |
| 9 | Vectơ và quãng cách | **Chuyên đề 2**, phải kiểm toán tọa độ và con số trước khi dùng | \`DEFER_TOPIC2_MATH_CHECK\` |
| 10 | Hình học tổng hợp và tọa độ | **Chuyên đề 2**, là so sánh cách nhìn | \`DEFER_TOPIC2\` |
| 11 | Trực giác xác suất có điều kiện/Bayes | Chuyên đề xác suất, **không** nhét vào Hàm số | \`DEFER_PROBABILITY\` |
| 12 | Ví dụ Bayes xét nghiệm | Chuyên đề xác suất, **không** dùng trực tiếp | **\`HOLD_MATH_ERROR\`**: số gốc cho \(0{,}9/(0{,}9+499{,}95)\approx 0{,}1797\%\), không phải 17,97% |
| 13 | Bayes/search map | Chuyên đề xác suất; dữ liệu tìm kiếm chỉ là hình tượng nếu không có nguồn | \`DEFER_VERIFY_DATA\` |
| 14 | Bản đồ tri thức tổng thể | Có thể là hình dẫn nhập nhưng không thay bản đồ outcome của Topic | \`ORIENTATION_ONLY\` |
| 15 | Kết thúc/trang trí | Không đưa vào giảng giải lý thuyết | \`DECORATIVE_ONLY\` |

**Về phong cách:** slide rất mạnh về hình không gian, các quan hệ sáng/tối và nhấn ý chính. Trên **nền sáng Gemini / Golden UI** đã chọn, chuyển hóa quan hệ thị giác thành **SVG/Canvas rõ trục, nhãn, kích thước chữ, nét**, không đưa nguyên screenshot nền đen nhiều chữ lên mobile. Chỉ sử dụng khi việc nhìn hình giúp hiểu ý, không đạt quota số hình.

## 5. Quyết định xử lý và kiểm soát

- **TỰ KIỂM CÓ THỂ CHẤP NHẬN:** ý tưởng giải thích **tương đương** với snapshot đã review, cách chia đoạn, metadata, placement/reuse không sửa toán → xử lý bằng \`DELTA_A_UI\` hoặc \`DELTA_B_SOURCE_EQUIVALENT\` có chứng cứ; không mở Academic/PED review toàn Topic.
- **PHẢI PHẢN BIỆN ĐỘC LẬP THEO CHUẨN GỐC:** M1–M3 bổ sung định nghĩa, suy luận, ví dụ, hình và bài mới thực chất \`DELTA_C_ACADEMIC_MATERIAL\`. Chủ dự án có thể duyệt định hướng và tác giả có thể tự QA nguồn; nhưng **tự QA không được giả làm Academic+PED PASS độc lập** hay biến bản nháp thành \`CONTENT_READY\` khi Q18/review receipt chưa có. Nếu muốn đổi cơ chế review bắt buộc, dùng \`STANDARD_CHANGE_REQUEST\` theo chuẩn duy nhất, không tạo một bộ “self-PASS” song song.
- **HÌNH/HTML:** bảo vệ một \`FIG_ID\`/mã nguồn hình và nhiều vị trí sử dụng khi phù hợp; các mô hình D5 là \`PUBLIC_FORMATIVE\`, không xâm nhập \`TOPIC_READINESS\`.
- **KẾT CẤU** người học vẫn ba mục \`Kiến thức / Luyện tập / Tự kiểm tra\`, bản đồ/chặng nằm trong \`Kiến thức\`; thuật ngữ tiêu đề \`Vận dụng\`, nút \`Đối chiếu\`.

**Checkpoint:** \`M4_M7_R18_REUSE_DECIDED\`; \`M1_M3_NOTEBOOK_SELECTIVE_DELTA_C\`; \`SLIDE_CURATED_15_OF_15\`; \`NO_NEW_REVIEW_FOR_UNCHANGED_R18\`; \`DELTA_C_TARGETED_REVIEW_REQUIRED\`; \`CONTENT_READY=NO\`; \`NO_MERGE_DEPLOY\`.
