# Golden Editorial SGK THPT 10–12 — MẪU ĐÃ DUYỆT CẤU TRÚC

**DESIGN_STATUS:** `OWNER_EDITORIAL_STRUCTURE_APPROVED_20261112 / STANDALONE_DEMO_STYLE_NOT_APPROVED`  
**CURRENT_MAIN_STANDARD:** `SLM-THPT-QUALITY-ONE v3.0.1`; candidate X-F v3.1.0 đã soạn trong PR #821, chưa hiệu lực cho tới governance merge  
**CANDIDATE:** `SCR-SGK-79-EDITORIAL-20261112 / proposed v3.1.0`  
**REFERENCE:** G10 B01–B06 đã phát hành làm **mốc giao diện màu/font/text-size/spacing**, cùng các lỗi được owner gửi 12/11/2026; owner duyệt mẫu HTML về **biên tập và cấu trúc**.  
**AUDIENCE:** Học sinh tự học SGK Kết nối tri thức; chỉ cho các trang SGK 10–12.  
**NOT AN ACADEMIC SOURCE:** Văn bản ví dụ dưới đây là đoạn demo bố cục, không xác nhận tên đề mục/trang in của từng SGK. Không đưa mẫu demo vào gói học liệu như nguồn toán chính thức.

## Quyết định chủ dự án 12/11/2026

**ĐÃ DUYỆT:** cấu trúc bốn tab 1–4, số 1.x–4.x, vai trò mỗi tab, khung định nghĩa/công thức/ghi nhớ có điều kiện, bảng/hình và cách hiển thị ví dụ.

**KHÔNG DUYỆT:** bảng màu, font chữ, cỡ chữ, spacing, chrome/headbar, CSS của file HTML demo. **Phải giữ nguyên style và theme của G10 Bài 1–6 hiện hữu**; không copy/import CSS demo vào production. Trên từng chương, QA browser phải so ảnh/độ rộng/typography thực theo AP1–AP5, không chỉ tìm selector.

## 1. Hợp đồng bố cục một bài

| Tab cấp 1 | Đầu mục bên trong | Chỉ bao gồm | Tuyệt đối tránh |
|---|---|---|---|
| **1. Khám phá kiến thức** | 1.1 Cùng tìm hiểu; 1.2 Ví dụ trực quan; 1.3 Thuật ngữ, kiến thức và kỹ năng | Vì sao cần học, cầu nối kiến thức cũ, hình thành bản chất, tự thử và điều hướng phục hồi | Chép lại toàn bộ lời giải mẫu/định nghĩa chính thức để rồi lặp tab 2 |
| **2. Kiến thức SGK** | 2.1…2.n theo tên/logic SGK KNTT *đã thẩm tra* | Định nghĩa, tính chất, định lí, công thức, điều kiện, hình/bảng, ghi nhớ, vận dụng ngắn | Lời mở đầu dài, H2 “Kiến thức SGK” thứ hai, nhãn PED “Kiến thức tiền đề/Bản chất/Hướng dẫn đọc hình” xen theo checklist, ví dụ giải dài |
| **3. Ví dụ** | 3.1…, 3.2…, 3.3… | Ví dụ có lời giải từng bước: giả thiết → lựa chọn cách → tính/toán → điều kiện → kết luận và lỗi tránh | Kích thước chữ đổi giữa ví dụ; nhân bản cùng canonical câu/đáp án |
| **4. Lỗi thường gặp** | 4.1…, 4.2… | Lỗi → tại sao sai → cách tự sửa → link D6/Practice thật | Câu chung chung hoặc hiện hướng dẫn Readiness độc lập trước Final Submit |

Quy tắc **một cấp đánh số xuyên bốn tab**: số 1–4 là thứ tự *mục lớn*, số x.y là *đề mục thuộc tab đó*. Không thêm một H2 “Kiến thức SGK” trùng bên trong tab 2. Không ép nội dung SGK phải có đúng số mục của một mẫu; nếu đề mục SGK có nhánh nhỏ hơn thì dùng 2.1.1… hợp lý, không tự phát minh tên mục toán.

## 2. Một ví dụ hình thức hoàn chỉnh — Toán 10, chủ đề Mệnh đề

Trong giao diện thật, bốn khối bên dưới nằm ở **bốn tab ngang**, không phải một trang kéo dài. Nội dung chỉ minh họa *cách chia*, không phải bản thay nguồn G10 B01. Các trang chính thức phải lấy tên mục S1 đã kiểm.

### Tab 1 — 1. Khám phá kiến thức

#### 1.1. Cùng tìm hiểu

Một câu nói có thể xác định đúng hoặc sai hay không? So sánh câu “2 + 3 = 5” với câu hỏi “Em đã làm bài tập chưa?”. Từ tình huống đó học sinh tự nêu đặc điểm của mệnh đề, trước khi gặp phát biểu định nghĩa.

#### 1.2. Ví dụ trực quan

Hai tập hợp lồng nhau cho thấy “chia hết cho 6” kéo theo “chia hết cho 3”, nhưng chiều đảo không chắc đúng. Có hình **đã kiểm toán/có chú thích thực**, đặt **trước** hướng dẫn quan sát; nếu chỉ yêu cầu học sinh tự vẽ, ghi rõ “Hãy tự vẽ…”. Không dùng chữ “quan sát hình” khi thiếu hình.

#### 1.3. Thuật ngữ, kiến thức và kỹ năng

Giới thiệu “đúng/sai”, “phủ định”, “phản ví dụ”, “điều kiện/miền xét”; kèm một câu **Tự thử** tự mở đối chiếu sau khi làm, không tính Mastery và không đi vào RD1.

### Tab 2 — 2. Kiến thức SGK

Bắt đầu ngay bằng 2.1, **không có đoạn quảng bá quy trình học hoặc một tiêu đề phụ “Kiến thức SGK”**.

#### 2.1. Mệnh đề và mệnh đề chứa biến

**Định nghĩa (khung/nhấn):** Mệnh đề là phát biểu có giá trị đúng hoặc sai, không đồng thời cả hai. Mệnh đề chứa biến cần xác định miền xét hoặc gán giá trị trước khi kết luận.

**Kiến thức cần nhớ (nếu thực sự cần):** Phân biệt câu hỏi và phát biểu; phân biệt biểu thức chứa biến chưa có miền/giá trị với mệnh đề đầy đủ.

#### 2.2. Phủ định một mệnh đề

**Công thức trọng tâm (khung):** \(\neg P\) đúng khi \(P\) sai và ngược lại.

| Phát biểu | Trạng thái của \(P\) | Trạng thái của \(\neg P\) |
|:--|:--:|:--:|
| Trường hợp A | Đúng | Sai |
| Trường hợp B | Sai | Đúng |

Đây là **bảng minh họa cách căn**: nhãn câu chữ căn trái; trạng thái/số liệu căn giữa và cùng trục trên–dưới; ô tiêu đề và số liệu dùng cùng padding/căn dọc.

#### 2.3. Mệnh đề kéo theo, đảo và tương đương

**Khái niệm/công thức trọng tâm (khung đúng điều kiện):** Ghi rõ chiều \(P\Rightarrow Q\); mệnh đề đảo \(Q\Rightarrow P\) cần kiểm chứng riêng. Một minh họa toán học chính xác chỉ được đưa vào sau khi QA hình.

#### 2.4. Lượng từ “với mọi”, “tồn tại”

Giải thích định nghĩa, phạm vi biến và phủ định lượng từ theo SGK tương ứng. Ví dụ dùng để nhận biết ngay kiến thức là **vận dụng ngắn**, không đưa lời giải dài ở đây.

### Tab 3 — 3. Ví dụ

#### 3.1. Ví dụ 1 — Phân biệt mệnh đề

**Đề bài.** Xác định một câu toán học đúng, một câu sai và một câu hỏi không phải mệnh đề.

**Lời giải.** Nêu rõ tiêu chí “có thể xác định đúng hoặc sai”, áp dụng tuần tự vào từng câu; đối chiếu được trường hợp bị bỏ sót.

**Kết luận.** Trả lời đúng yêu cầu đề bài, không chỉ cho đáp án.

#### 3.2. Ví dụ 2 — Mệnh đề kéo theo và phản ví dụ

**Đề bài.** Với số nguyên \(n\), xem xét “Nếu \(n\) chia hết cho 6 thì \(n\) chia hết cho 3” và mệnh đề đảo.

**Giải thích lựa chọn.** Phát biểu tổng quát chiều thuận dùng \(n=6k=3(2k)\). Mệnh đề đảo sai vì \(n=3\) là phản ví dụ.

**Giới hạn áp dụng.** Nêu miền số nguyên; phân biệt một ví dụ minh họa với một chứng minh cho mọi \(n\).

### Tab 4 — 4. Lỗi thường gặp

#### 4.1. Nhầm câu hỏi với mệnh đề

Nhận diện → lý do sai → cách xác định đúng/sai → đường trở lại kiến thức và First Try.

#### 4.2. Tự suy chiều đảo của mệnh đề kéo theo

Cho phản ví dụ → tự thử bác bỏ chiều đảo → dẫn tới bài Practice tương ứng, không phát lộ key của RD1.

## 3. Quy tắc thành phần trình bày

**A. Định nghĩa/định lí:** khung nhấn có nhãn rõ ràng (ưu tiên một lớp CSS scoped). Chỉ đánh dấu những gì SGK/source audit xác định là chính thức.

**B. Công thức trọng tâm:** giữ MathJax và điều kiện đúng; có viền/khung nhất quán, tương tự công thức côsin B06. Công thức dài trên điện thoại chỉ cuộn *bên trong vùng công thức*, không thu nhỏ toàn trang hay mất vế phải.

**C. Kiến thức cần nhớ:** một khung riêng, chỉ xuất hiện khi có nội dung cốt lõi cần chốt; **không áp hạn ngạch** bắt buộc mỗi bài một khung.

**D. Bảng:** tiêu đề và số liệu khớp lưới; nếu cột là số/biểu thức thì căn giữa theo trục, nếu là mô tả văn bản thì căn trái; padding/căn dọc đồng nhất; responsive giữ khả năng quét hàng/cột.

**E. Hình:** đặt ngay trước phần lời hướng dẫn đọc hình, có alt text và figcaption đúng toán; bản vẽ tự thực hiện phải có ngôn ngữ chỉ dẫn rõ. Không tự bịa hình để đủ điều kiện QA.

**F. Ví dụ:** cùng typography, heading, khoảng trắng và lối trình bày đề–lời giải–kết luận; phân biệt ví dụ trực quan tab 1 với ví dụ giải mẫu tab 3 và vận dụng ngắn tab 2.

**G. Navigation:** giữ shell THPT Golden R4 5+1, Gemini theo các route được phép, THCS Golden và Adaptive Knowledge Tabs v2 của Topic. Không có tab con cấp 2 mới cho SGK.

## 4. Cổng kiểm khi owner xem mẫu

| Gate | Cách kiểm | Hiện tại |
|---|---|---|
| OWNER-1 | Đọc rõ 1.x, 2.x, 3.x, 4.x; không lặp heading cấp 1 trong tab | **OWNER APPROVED — cấu trúc** |
| OWNER-2 | Tab 2 mở bằng mục 2.1, mạch kiến thức bám SGK, không checklist PED xen giữa | **OWNER APPROVED — bố cục; S1 từng bài chưa đối chiếu** |
| OWNER-3 | Định nghĩa, công thức, ghi nhớ có nhấn thích hợp, nhất quán | **OWNER APPROVED — nguyên tắc; UI thực cần QA** |
| OWNER-4 | Bảng, hình, SVG và ví dụ đồng kiểu, mobile 390/iPad 820/desktop 1440 | **OWNER APPROVED — cấu trúc; UI theme giữ G10 B01–B06; browser QA pending** |
| OWNER-5 | Không mất First Try, D6, câu giải/đáp án, Final Submit/RD1/Mastery | **CONTRACT REQUIRED — cần QA khi tích hợp** |

## 5. Bàn giao sau duyệt

1. Cấu trúc mẫu đã **owner approved**, là dẫn chứng cập nhật **chính chuẩn gốc Q01–Q18** mục X-F trong PR #821, không lập chuẩn mới; CSS demo vẫn chỉ là minh họa.
2. AUTHORING phụ trách đối chiếu đề mục SGK in + nội dung, cung cấp source/receipt khi thay cấu trúc học liệu có ý nghĩa.
3. RELEASE áp CSS/JS/HTML và QA theo từng chương đã đủ source Q18, báo lỗi AUTHORING nếu thiếu kiểm chứng toán/S1.
4. Khóa snapshot/chapter; R4, Roadmap, THPT Golden, responsive, Q15/Q16, P1/P2 và quyền merge/deploy phải PASS độc lập.

**HOLD:** Chưa coi minh họa này là Golden UI đã nghiệm thu; chưa thay học liệu sản xuất, chưa cấp quyền phát hành.
