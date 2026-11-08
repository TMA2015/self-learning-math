# AUTHORING R00 — Chuyên đề 2 (thứ tự triển khai): Vectơ và phương pháp tọa độ, lớp 10–12

**Ngày lập:** 08/11/2026  
**Vai trò:** AUTHORING ONLY · DRAFT · NO RELEASE  
**Một chuẩn:** SLM-THPT-QUALITY-ONE v1.2.0, Q01–Q18  
**Phạm vi:** 1 chuyên đề, 7 phần học; không phải 7 chuyên đề.  
**Số thứ tự "2":** thứ tự báo cáo/triển khai sau chuyên đề Hàm số và đồ thị, **không** tự nhận là mã chuyên đề chính thức đã được chuẩn hóa ở website.  
**Tình trạng:** Đã có đề cương 7 phần; **2/7 phần có bản thảo Kiến thức + Luyện tập**: Phần 1 `Temp_TOPIC_VECTOR_COORDINATE_PART1_SELF_STUDY_RD0_R01_20261108.md`, Phần 2 `Temp_TOPIC_VECTOR_COORDINATE_PART2_VECTOR_OPERATIONS_RD0_R00_20261108.md`. **0/7 phần Academic/PED PASS**. Bản R00 bên dưới là lịch sử ý tưởng, **R01 thay thế mọi diễn giải R00 mâu thuẫn**, nhất là quy ước vectơ-không. Không có review NotebookLM Topic, handoff, ready manifest hoặc quyền phát hành.

## A. Trạng thái chương trình chuyên đề

| Thứ tự báo cáo | Tên chuyên đề | Tiến độ học liệu | Review | Bàn giao |
| --- | --- | --- | --- | --- |
| 1 | Hàm số và đồ thị (lớp 10–12) | 7/7 phần xong | Academic/PED PASS; Topic Readiness private PASS | Chờ tương thích cổng tiếp nhận V2 — Issue #790. Giữ bất biến nguồn R18 tại Draft PR #782. |
| 2 | Vectơ và phương pháp tọa độ (lớp 10–12) | **2/7 phần có bản nháp RD0**; 0/7 phần được duyệt | Chưa review | Chưa bàn giao |

**Chưa có tổng số chuyên đề THPT canonical được xác minh trong nguồn vận hành đang đọc.** Không dùng số lượng 25 chuyên đề THCS làm tổng số chuyên đề THPT.

## B. Phạm vi nguồn cần khóa trước Academic Review

Các đầu mối dưới đây dùng để **xác định đúng phạm vi cần đọc**, không thay cho việc kiểm trực tiếp SGK/SBT KNTT S1 theo **trang in và chỉ số trang PDF**:

| Lớp | SGK KNTT cần đối chiếu | Vai trò |
| --- | --- | --- |
| 10, tập 1 | Chương IV, Bài 7–11: khái niệm vectơ; tổng/hiệu; tích với số; tọa độ; tích vô hướng | Nền tảng bắt buộc |
| 10, tập 2 | Chương VII, Bài 19–22: đường thẳng, góc/khoảng cách, đường tròn, ba đường conic | Ứng dụng phương pháp tọa độ phẳng |
| 11 | Chương IV, Bài 10–14: quan hệ song song; Chương VII, Bài 22–27: quan hệ vuông góc trong không gian | Tiền đề hình học không gian, phép chiếu, góc, khoảng cách; không tự giả định các kết quả này là công thức vectơ |
| 12, tập 1 | Chương II, Bài 6–8: vectơ trong không gian, hệ tọa độ, biểu thức tọa độ | Mở rộng từ mặt phẳng lên không gian |
| 12, tập 2 | Chương V, Bài 14–17: mặt phẳng, đường thẳng, góc, mặt cầu | Hình học giải tích không gian |

Đầu mối kiểm mục lục để định hướng, **chưa phải SOURCE_RECEIPT S1**:
- https://www.mathvn.com/2026/08/muc-luc-sach-giao-khoa-toan-10-kntt.html
- https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/toan-10-tap-2-1969.html
- https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/toan-tap-1-1192.html
- https://www.sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/toan-12-tap-mot-3500.html
- https://www.sgkvn.com/xem-sach-pdf-toan-12-tap-hai-3520.html

**Cập nhật S1 phần 2:** SGK KNTT T1 B08 trang in 51–54 ↔ PDF trang 52–55, B09 trang in 55–59 ↔ PDF trang 56–60; SBT B08 trang in 48–50 ↔ PDF trang 49–51, B09 trang in 51–54 ↔ PDF trang 52–55. Đã trực tiếp render và xem trang gốc, đối chiếu SHA256 của SGK/SBT; chi tiết trong file Phần 2. **Chưa phải Academic/PED PASS Topic.**

**S1 PARTIAL VERIFIED:** Đã đọc trực tiếp SGK Toán 10 T1 B07 trang **in 46–50 ↔ PDF trang 47–51 (1-based)**, SBT Toán 10 T1 B07 **in 45–47 ↔ PDF 46–48**, đối chiếu từ folder Drive `KNTT TOAN 10`. Quy ước vectơ-không đúng SBT trang in 45; SGK B07 trang in 49 có điều kiện thẳng hàng/điểm nằm giữa. **SOURCE_HOLD chỉ còn đối với Phần 3–7 chưa tự kiểm trực tiếp SGK/SBT và chưa có review Chuyên đề**; không tự suy Q01–Q02 toàn chuyên đề PASS.

## C. Bảy phần của CHÍNH MỘT chuyên đề — đề cương R00

| Phần | Tên học sinh nhìn thấy | Kết quả học tập dự kiến (chưa canonical) | Trạng thái |
| --- | --- | --- | --- |
| 1 | Vectơ: độ lớn và hướng | Hiểu vectơ, độ lớn/phương/hướng, vectơ-không theo KNTT, bằng nhau; đọc hình, chứng minh thẳng hàng/điểm giữa | **Bản nháp RD0 R01 + S1 đã tự kiểm**, có 2 câu và 1 SVG mới, **chưa NotebookLM PASS** |
| 2 | Cộng, trừ vectơ và nhân với một số | Giải thích quy tắc ghép dịch chuyển; chọn phương pháp; trung điểm/trọng tâm; hệ số vectơ và hướng | **RD0 R00 đủ D1–D6/PED bản thảo; SGK/SBT B08–B09 đã đối chiếu trực tiếp, 18 item canonical tham chiếu, chưa NotebookLM PASS** |
| 3 | Tọa độ vectơ và tích vô hướng trong mặt phẳng | Đổi hình sang thành phần tọa độ; hiểu ý nghĩa tích vô hướng, góc và vuông góc; kiểm điều kiện | Đề cương |
| 4 | Giải bài toán hình học bằng tọa độ phẳng | Từ điểm/hướng/khoảng cách lập phương trình đường thẳng, đường tròn; nhận diện phạm vi ba conic | Đề cương |
| 5 | Quan hệ hình học trong không gian | Nhìn và mô tả thẳng hàng, song song, vuông góc, hình chiếu và khoảng cách trước khi dùng tọa độ | Đề cương |
| 6 | Vectơ và hệ tọa độ trong không gian | Mở rộng vectơ thành ba thành phần; phép toán và tích vô hướng trong Oxyz | Đề cương |
| 7 | Phương pháp tọa độ giải hình học không gian | Hiểu và chọn phương trình mặt phẳng, đường thẳng, mặt cầu; giải thích góc/vị trí tương đối và giới hạn phương pháp | Đề cương |

**Kiến trúc trang:** Chỉ ba mục **Kiến thức / Luyện tập / Tự kiểm tra**. Mỗi phần phải tự giải thích được và có dẫn dắt WHY → tiền đề → trực giác/bản chất → formal có điều kiện → ví dụ vì sao chọn cách → Tự thử → khắc phục. Không bắt học sinh rời sang SGK để học nội dung bắt buộc. Written/Anchor, hình và item dùng chung qua placement, không sao chép đáp án/rubric.

## D. PHẦN 1 — Bản nháp kiến thức cho học sinh (chưa nghiệm thu)

### 1. Vì sao cần học vectơ?

Một bạn đi 3 mét về phía Đông, bạn khác đi 3 mét về phía Tây. Hai chuyển động có **độ dài bằng nhau**, nhưng đưa tới những vị trí khác nhau. Chỉ nói “3 mét” không mô tả đủ sự dịch chuyển. Vì vậy ta cần một đối tượng lưu được cả **độ lớn lẫn hướng**: vectơ.

### 2. Cần biết trước

Biết đoạn thẳng, độ dài đoạn thẳng, điểm đầu/điểm cuối và cách quan sát mũi tên chỉ chiều trên hình. Chưa cần biết tọa độ hay công thức tích vô hướng.

### 3. Hình dung trước khi đặt tên

Vẽ mũi tên từ A đến B. Nếu trượt nguyên mũi tên sang vị trí khác mà **không quay, không đổi chiều, không kéo dài/rút ngắn**, sự dịch chuyển mà mũi tên mô tả vẫn như cũ. Vectơ không phải là tên riêng của một vị trí; nó mô tả độ lớn và hướng.

Một mũi tên từ B về A đi ngược chiều mũi tên từ A đến B. Cùng đoạn thẳng và cùng độ dài không có nghĩa là cùng vectơ.

**Yêu cầu hình D5 cần tạo:** hai mũi tên bằng nhau tại hai vị trí khác nhau, một mũi tên ngược chiều và mũi tên từ A về chính A. Hình phải ghi điểm A, B, C, D và có phần hướng dẫn đọc “nhìn từ đầu có đuôi tới đầu có mũi nhọn”. Chưa tạo/khẳng định SVG PASS.

### 4. Khái niệm và điều kiện

- Vectơ $\overrightarrow{AB}$ là đoạn thẳng có hướng, A là điểm đầu, B là điểm cuối; độ dài ký hiệu $|\overrightarrow{AB}|=AB$.
- Hai vectơ khác vectơ-không **bằng nhau** khi cùng hướng và cùng độ dài.
- $\overrightarrow{BA}$ đối của $\overrightarrow{AB}$: cùng độ dài, ngược hướng.
- $\overrightarrow{AA}=\vec{0}$ là vectơ-không, độ dài bằng 0. **Theo quy ước SGK/SBT KNTT, vectơ-không cùng phương và cùng hướng với mọi vectơ**; trực giác “mũi tên độ dài 0 không có chiều hình học quan sát được” không được thay thế quy ước này. Bản diễn giải đầy đủ ở R01.

### 5. Ví dụ có giải thích phương pháp

**Ví dụ 1.** Cho hình bình hành ABCD, các đỉnh được gọi theo thứ tự quanh hình. Hãy chỉ ra một vectơ bằng $\overrightarrow{AB}$ và một vectơ bằng $\overrightarrow{AD}$.

**Vì sao chọn cách này:** Trong hình bình hành, các cạnh đối song song và bằng nhau. Tuy nhiên phải **kiểm tra chiều mũi tên**, không chỉ độ dài.

- Đi từ A tới B cùng hướng, cùng độ dài với đi từ D tới C, nên $\overrightarrow{AB}=\overrightarrow{DC}$.
- Đi từ A tới D cùng hướng, cùng độ dài với đi từ B tới C, nên $\overrightarrow{AD}=\overrightarrow{BC}$.
- $\overrightarrow{BA}$ **không bằng** $\overrightarrow{AB}$ nếu A và B khác nhau; hai vectơ đối nhau.

**Ví dụ 2.** Hai mũi tên thể hiện: đi 2 ô sang phải và 1 ô lên trên, nhưng xuất phát ở hai ô khác nhau. Chúng có bằng nhau không?

Có, **nếu các ô cùng kích thước**: chúng có cùng độ lớn và cùng hướng; đổi chỗ xuất phát không làm đổi vectơ. Nếu mũi tên thứ hai đi 2 ô sang **trái** và 1 ô lên, không được kết luận bằng nhau vì hướng đã khác.

### 6. Tự thử trước khi luyện tập

**Câu tự thử:** Với hình bình hành ABCD (theo thứ tự), $\overrightarrow{AD}$ bằng $\overrightarrow{BC}$ hay $\overrightarrow{CB}$? Hãy tự chỉ chiều hai mũi tên trước khi mở lời giải.

<details><summary>Đối chiếu sau khi tự thử</summary>
Đáp án: $\overrightarrow{BC}$. Cạnh AD và BC bằng nhau, song song; chiều A→D khớp với B→C. Vectơ CB ngược chiều BC, nên không đúng nếu B khác C.
</details>

**Lưu ý khi đưa lên website:** hành vi “Tự mở” phải do RELEASE triển khai đúng Golden; bản Markdown này chỉ mô tả ý đồ sư phạm, không phải một tính năng đã chạy.

### 7. Lỗi thường gặp và đường khắc phục D6

1. **Cùng độ dài ⇒ tưởng cùng vectơ.** Vẽ mũi tên có chiều ngược để thấy điều kiện còn thiếu: hướng.
2. **Nhầm AB với BA.** Bắt đầu từ chữ đầu (điểm đặt đuôi mũi tên) và đi tới chữ cuối (đầu mũi tên).
3. **Nhầm trực giác với quy ước vectơ-không.** Vectơ-không dài 0; dù không quan sát được chiều mũi tên, KNTT **quy ước cùng hướng, cùng phương với mọi vectơ**. Khi làm bài phải vận dụng quy ước này.
4. **Không đọc được hình bình hành.** Nhắc lại cạnh đối và cách di chuyển A→B, D→C; thử với hình chữ nhật trước khi trở lại ví dụ.

### 8. Họ dạng luyện tập cần soạn (chưa tạo item canonical)

- Đọc và vẽ vectơ trong hình/đời sống, chỉ độ dài và hướng.
- So sánh các mũi tên để phân biệt bằng nhau, cùng phương, ngược hướng và đối nhau.
- Chọn chiều đúng của cặp cạnh đối trong hình bình hành.
- Giải thích tình huống thực tế: hai dịch chuyển bằng độ dài nhưng khác hướng.

**Cập nhật:** Bản R01 đã ánh xạ đúng 3 ví dụ D2, 8 câu Core/Practice, 1 Written/rubric, 1 hình D5, 2 HELP từ nguồn canonical SGK Bài 7 đã review, đồng thời bổ sung PED và hai Tự thử qua placement. ĐÂY LÀ DRAFT, **không tự coi Phần 1 Academic/PED PASS**; còn kiểm PDF-index, nguồn Topic, phản biện độc lập.

## E. Kiểm tra AUTHORING tự thực hiện trong R00

| Cổng | Kết quả | Còn thiếu |
| --- | --- | --- |
| Phạm vi một chuyên đề, 7 phần | DRAFT | Chốt danh mục THPT tổng thể và đối chiếu S1 |
| Kiểm tra logic ví dụ hình bình hành | PROVISIONAL_MATH_CHECK | Hình D5, kiểm trực tiếp trang SGK, phản biện độc lập |
| D1 / PED1–PED3 cho phần 1 | DRAFT | Đồng bộ mục tiêu S1, điều kiện/ngoại lệ |
| D2–D6 / PED4–PED6 phần 1 | PARTIAL | Đủ họ dạng, Worked, Written, SVG, Tự thử thật, D6 theo lỗi |
| Canonical ID/placement, Written/Anchor | NOT_STARTED | Không tạo ID hoặc clone từ ngân hàng SGK khi chưa soát |
| Topic Readiness / Q16 | NOT_STARTED | Ngân hàng kín riêng, Final Submit/no key/no Tutor trước nộp; không đưa đề vào Git công khai |
| NotebookLM độc lập | NOT_REVIEWED | Chỉ gửi gói review thật khi hoàn chỉnh; đúng 5 Permanent v2.1 và S1 |
| Handoff/READY/REGISTER | NOT_READY | Academic+PED PASS, Q01–Q18, A1–A7, gate TOPIC tương thích (#790) |

**Mọi chỉnh sửa nội dung mới được phân loại DELTA_C trước khi có verdict.** Không thay đổi website, Golden UI, code gate, Firebase hay nguồn/receipt Chuyên đề 1 đã khóa.

## F. Bước tiếp theo trong AUTHORING

1. Kiểm SGK/SBT bản gốc với trang in ↔ chỉ số PDF cho phạm vi phần 1–7, lập SOURCE_RECEIPT S1.
2. Hoàn thiện phần 1 theo outcome thật, soát lại bài toán/điều kiện, tạo D5 SVG và bài tập canonical dùng chung đúng ID.
3. Mở rộng lần lượt phần 2–7, dứt điểm trọn chuyên đề rồi chuẩn bị một batch NotebookLM đủ nguồn, file Temp thực + prompt 3–6 câu.
4. Không yêu cầu review lại Chuyên đề 1 chỉ vì Issue #790 là lỗi hợp đồng tiếp nhận do RELEASE/Governance xử lý.

**Gửi chủ dự án ngắn gọn:** “Chuyên đề 1: học liệu 7/7, đã PASS, chờ bàn giao kỹ thuật. Chuyên đề 2: đã soạn bản thảo 2/7 phần, 0/7 được nghiệm thu. Tiếp theo Phần 3. Chưa phát hành.”
