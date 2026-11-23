# SELF-LEARNING MATH — TIÊU CHUẨN CHẤT LƯỢNG HỌC LIỆU THPT THỐNG NHẤT

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **Ứng viên:** v4.0.0 (24/11/2026) · **Trạng thái:** DRAFT — CHƯA CÓ HIỆU LỰC; v3.2.0 trên `main` còn hiệu lực đến khi chủ dự án phê duyệt và tích hợp.  
**Áp dụng:** Hai hành trình Toán 10–12 Kết nối tri thức — học theo 79 bài SGK và học theo 22 Chuyên đề. **Một chuẩn chất lượng, hai checklist tổ chức học liệu, một hợp đồng kỹ thuật–an toàn.** Không cấp PASS hồi tố hay quyền merge/deploy.

## 1. Mục tiêu và nguồn thẩm quyền

Một học sinh chưa biết bài có thể **tự đọc → hiểu bản chất → nhận biết khi nào dùng → xem cách giải → tự giải bài khác → phát hiện và sửa lỗi → tự kiểm tra**, không cần phải chuyển sang hành trình kia để tìm kiến thức bắt buộc.

**Thẩm quyền:** Quyết định mới nhất của chủ dự án → chương trình, SGK Toán KNTT đúng lớp/tập (S1) → chuẩn này và checklist nhánh → SBT/nguồn bài tập tin cậy để tham khảo dạng, độ khó và ứng dụng. Tác giả không được phỏng đoán kiến thức SGK hoặc gán ví dụ tự viết là nguyên văn SGK. Nội dung đã nghiệm thu được bảo toàn theo snapshot và Delta.

**Độ phủ hai hành trình:** SGK dạy theo lớp/chương/bài; Chuyên đề gom *cùng kiến thức bắt buộc* thành mảng toán học, có thể xuyên lớp. Đây là **ánh xạ nhiều–nhiều**, không mặc định phân hoạch 79 bài thành 22 nhóm rời nhau. Mỗi Chuyên đề cần đối chiếu các khái niệm/phát biểu/điều kiện/kỹ năng SGK liên quan và bổ sung cầu nối sư phạm để tự học đủ; liên kết tới SGK chỉ là tùy chọn. Dùng bản đồ SGK ↔ Chuyên đề hiện hữu khi có chứng cứ; không tự tuyên bố 100% coverage từ số lượng 79/22.

## 2. Sáu yêu cầu chất lượng có thể kiểm chứng

### C1 — Đủ và bám đúng kiến thức nguồn
Mỗi bài SGK dạy đủ mạch kiến thức bắt buộc đúng phạm vi SGK. Mỗi Chuyên đề bao đủ các phần SGK liên quan đến mảng đó, được sắp xếp theo logic học, không phải sao chép và nối các bài. **Định nghĩa, khái niệm, định lý, tính chất, quy tắc, công thức, điều kiện và ghi nhớ quan trọng có trong SGK phải xuất hiện đúng nghĩa** ở cả hai hành trình khi thuộc phạm vi. Không thêm kiến thức ngoài phạm vi dưới nhãn bắt buộc; nội dung mở rộng ghi rõ vai trò.

### C2 — Đúng học thuật và trung thực về mức giải thích
Tự giải và kiểm chứng **mọi phép tính, nhận định, hình, ví dụ, bài tập, tự luận, Vận dụng, đáp án, lời giải và diễn giải tự biên soạn**; kiểm giả thiết, miền giá trị, trường hợp biên, đơn vị, phản ví dụ và khả năng áp dụng. Phát biểu SGK được đối chiếu đúng bản; phần giải thích/ứng dụng tự viết vẫn cần kiểm toán. **Phân biệt trực giác minh họa với chứng minh**; không nói “đã chứng minh” nếu mới mô tả hoặc viện dẫn. Phát hiện lỗi toán là lý do sửa thực chất, dù QA hình thức đã PASS.

### C3 — Khám phá kiến thức và ngôn ngữ tự học
**Khám phá kiến thức là phần dẫn dắt quan trọng nhất của trang Kiến thức ở cả hai nhánh.** Với mỗi ý chính: xuất phát từ câu hỏi hoặc nhu cầu toán học tự nhiên; nhắc tiền đề đúng lúc; dùng văn xuôi, tình huống, quan sát, ví dụ trực quan, hình/bảng/đồ thị nếu cần; giải thích điều gì thay đổi, *vì sao* quan hệ đúng hoặc hợp lý, khái niệm giúp giải quyết việc gì và giới hạn của nó. **Không có khuôn bắt buộc sáu heading “PED”**; thứ tự thực tế tùy nội dung. Mọi câu viết cho học sinh phải rõ chủ ngữ/đối tượng, đủ nghĩa, từ ngữ giản dị, nối đoạn mạch lạc; không viết như receipt, bản kiểm toán hoặc lời của người lập trình.

### C4 — Hai chức năng của Ví dụ và hoạt động Vận dụng
- **Ví dụ loại 1 (minh họa trực tiếp):** giúp học sinh thấy một kiến thức/tính chất/công thức hoạt động ra sao, có thể xuất hiện trong mạch Khám phá. Thường nối với một **Vận dụng** ngay sau ý/ví dụ ấy để học sinh tự thử.
- **Ví dụ loại 2 (hướng dẫn giải toán):** giúp nhận dạng dạng bài, phân tích dữ kiện, chọn công cụ/phương pháp và điều kiện áp dụng; bao gồm bài thường gặp và dạng thi khi phù hợp trình độ.
- Cả hai phải có tình huống/đề bài tự đủ khi là bài toán, **Phân tích** (khi cần), **Lời giải** đúng và đủ bước với lý do, **Kiểm lại/Lưu ý** (khi hữu ích). Không tạo hai nhãn phân loại kỹ thuật mới trên giao diện.
- **Vận dụng → Đối chiếu → Kiểm lỗi** (khi cần): người học có cơ hội tự làm **trước khi thấy** lời giải, câu mới đủ khác ví dụ để kiểm tra hiểu; khi sai biết sai ở đâu, vì sao, cần ôn gì và thử lại thế nào. Không lộ đáp án từ hình/caption hoặc ví dụ kề trước.

### C5 — Luyện tập và tự kiểm tra phản ánh năng lực
SGK: **Core** củng cố hiểu khái niệm, **Luyện tập** vận dụng và phối hợp kiến thức, **Tự kiểm tra cuối chương** đánh giá chương. Chuyên đề: **Luyện tập** từ mức cơ bản đến vận dụng/tổng hợp (không có Core riêng), **Tự kiểm tra Chuyên đề** đánh giá phạm vi mảng kiến thức đã học. Có bài thật và lời giải thật, đa dạng *cách nhận diện, điều kiện, phương pháp*, không lấy số lượng item làm bằng chứng độ sâu; bài tự luận có lời giải/rubric hữu ích. Đánh giá độc lập không được suy từ câu đã xem đáp án; chế độ tự đối chiếu công khai phải ghi đúng bản chất và **không tạo Mastery giả**.

### C6 — Hình, bố cục, nhãn và tự học xuyên mảng
Hình/bảng/đồ thị **đúng toán, đọc được, đặt gần chỗ cần và được chỉ cách quan sát**; dùng lại asset canonical chính xác giữa hai nhánh, giữa hai tab khi phù hợp. Không có quota hình, ví dụ, khung, Vận dụng, heading. Tiêu đề ngắn, chuẩn sách học, cùng chức năng dùng cùng tên; **không lộ SGK-trang/ID/SHA/outcome/PED/Qxx/receipt** trong lời học sinh. Với Chuyên đề lớn, người học phải hiểu *vì sao chuyển từ mảng trước sang mảng sau* và tiền đề nằm ở đâu. Đọc thử toàn mạch như học sinh, không chỉ kiểm từng mục rời.

## 3. Tổ chức theo hai checklist, không ép một khuôn

- **SGK:** [Checklist SGK 11–12](SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md) quy định 4 tab trang Kiến thức (Khám phá kiến thức, Kiến thức SGK, Ví dụ, Lỗi thường gặp) và vị trí Core/Luyện tập/Tự kiểm tra. Nội dung Khám phá và Kiến thức SGK đối ứng *ý chính thật* của SGK theo đúng thứ tự; sách không đánh số thì không giả nhận có đề mục SGK chính thức.
- **Chuyên đề:** [Checklist Chuyên đề](THPT_TOPIC_AUTHORING_CHECKLIST.md) quy định 3 trang (Kiến thức, Luyện tập, Tự kiểm tra), nhóm mảng kiến thức hợp logic, tính tự đủ và nối ý xuyên lớp.
- **Kỹ thuật/an toàn/bàn giao:** [Hợp đồng dùng chung](THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md) giữ item/answer/rubric canonical, Q15/Q16, RD1/Final Submit/Mastery, Delta/Q18/ready/V2/RELEASE, Golden và QA trình duyệt.

Checklist dùng **sau khi viết** để kiểm đúng ý, không sao chép thành nhãn/đề mục trong học liệu. Dùng mẫu Golden đã nghiệm thu để giữ giao diện, không áp máy móc số câu/mục của một bài mẫu.

## 4. NotebookLM, tự kiểm và quy tắc sửa

1. **AUTHORING tự đọc S1, tự biên soạn và kiểm toán trước** toàn bộ phần mới: công thức/điều kiện, lời giải, hình, ngôn ngữ, đủ kiến thức và độ dễ tự học.
2. **NotebookLM phản biện độc lập đối với học liệu toán/giải thích mới biên soạn hoặc thay đổi học thuật–sư phạm thực chất theo phạm vi được giao**, có thể gửi theo cụm; tập trung đúng/sai, chứng minh, diễn giải, độ phủ kiến thức và khả năng tự học, chỉ rõ vị trí + bằng chứng + sửa tối thiểu. **Không giao NotebookLM kiểm số trang/offset/SHA/tên file/receipt/CI/đếm SVG**; những việc này thuộc AUTHORING. Khi reviewer đã PASS snapshot, không mặc định xem lại chỉ vì metadata hoặc câu chữ tương đương.
3. **Delta:** A (UI/chính tả không đổi nghĩa) và B (tương đương học thuật có kiểm chứng) → tác giả tự QA/log; C (thay đổi toán hoặc cách dạy có ảnh hưởng thực chất) → tự kiểm + phản biện đúng phần tác động theo yêu cầu mới; D (sai nghiêm trọng/không kiểm chứng được nguồn hoặc rủi ro đánh giá) → HOLD đúng phần. Không phân loại theo số dòng sửa.
4. **Một nguồn learner canonical; PASS gắn với snapshot.** Một receipt/checkpoint đủ chứng cứ thực, không nhiều vòng giấy tờ. Không suy Academic PASS của bản cũ cho đoạn toán mới; cũng không phá PASS phần bất biến. Bảo vệ phần nằm ngoài scope.

## 5. Mã Q01–Q18 — giữ tương thích, không phải 18 khuôn trình bày

| Mã cũ | Nghĩa kiểm chứng trong bản tinh gọn | Nhóm |
|---|---|---|
| Q01 | Đúng SGK/SBT vai trò nguồn và đủ phạm vi | C1,C2 |
| Q02 | Đủ kiến thức/kỹ năng theo bài, mảng, outcome thật | C1,C5 |
| Q03 | Lý thuyết rõ nghĩa, đúng, có bản chất và điều kiện | C1–C3 |
| Q04 | Ví dụ có phân tích và lời giải kiểm chứng | C2,C4 |
| Q05 | Core/Luyện tập có bài thật, đủ dạng và chiều sâu | C5 |
| Q06 | Tự luận/Written/Anchor có rubric và lời giải đúng | C2,C5 |
| Q07 | Hình/bảng/mô hình đúng toán, có chức năng giảng | C2,C6 |
| Q08 | Học sinh có lối sửa sai có thể thực hiện | C4,C5 |
| Q09 | Có động cơ/tình huống thích hợp để hiểu ý cần học | C3 |
| Q10 | Tiền đề, thuật ngữ, ký hiệu rõ đúng lúc | C3 |
| Q11 | Bản chất và logic hình thành không bị thay bằng công thức | C3 |
| Q12 | Hình có hướng dẫn đọc và đúng vị trí | C6 |
| Q13 | Ví dụ nói rõ vì sao chọn cách/điều kiện/giới hạn | C4 |
| Q14 | Vận dụng tự làm trước Đối chiếu, có kiểm lỗi phù hợp | C4 |
| Q15 | Một item canonical nhất quán qua mọi placement | Hợp đồng kỹ thuật |
| Q16 | Readiness/Final Submit/RD1 bảo mật, không giả Mastery | Hợp đồng kỹ thuật |
| Q17 | SGK và Chuyên đề là hai hành trình tự đủ khác bố cục | C1,C5,checklist |
| Q18 | Tự kiểm/độc lập đúng scope, chứng cứ và snapshot/Delta | Mục 4,hợp đồng |

**Giữ nguyên IDs và nghĩa an toàn Q15/Q16/Q18** cho mọi mã nguồn, test và receipt đang dùng. `D1–D6`, `PED1–PED6`, `A1–A7`, `AP1–AP5`, `R1–R5` là cách kiểm cùng các nguyên tắc trên theo vai trò; không cộng thêm lớp PASS hay bắt học liệu trình bày thành các đầu mục mã hóa.

## X-F.3. Bộ thành phần toán cần làm nổi bật nhất quán — Q03/Q07/PED4, AP2/AP3

Đây là **vai trò ngữ nghĩa/hiển thị hiện hữu**, không thêm loại khung: `FORMAL_DEFINITION` (Định nghĩa/Khái niệm — xanh ngọc), `FORMAL_RULE` (Định lý/Tính chất/Quy tắc — xanh lam), `MANDATORY_RECAP` (Kiến thức cần nhớ khi cần — vàng nhạt), `KEY_FORMULA` (Công thức — nền trong/trắng, viền trung tính). **Nhãn chữ chính xác và phát biểu đúng bản chất quan trọng hơn màu.** Không tạo hộp cho đủ bốn loại, không đổi Golden CSS chung; kế thừa stylesheet đã nghiệm thu, kiểm light/slate ở RELEASE.

## X-G. OWNER DECISION 22/11/2026 — Golden R4: thống nhất phát hành 22 Chuyên đề theo SGK

Giữ nguyên **Golden Topic `TOPIC_GOLDEN_UI_REV=20261122.1`**, thiết kế CĐ01 owner approved và **ba trang Topic**. Kiến thức có tab/mảng ngang thích ứng; Luyện tập nhóm thẻ và modal một câu; tự kiểm tra public replay có Đối chiếu từng câu, không input/chấm/Final Submit/Mastery giả. Independent Topic Readiness giữ Q16/Final Submit. **Đặc tả thực thi thuộc hợp đồng kỹ thuật, checklist Topic và [RELEASE master #995](https://github.com/TMA2015/self-learning-math/issues/995)**, không đưa thành tiêu chí học thuật mới. Không tự merge/deploy.

## 6. Điều kiện thay thế phiên bản

Đây là **bản ứng viên viết lại trên cùng đường dẫn canonical**, không tạo một chuẩn Q khác. Chỉ sau **phê duyệt của chủ dự án + merge có phép + xác nhận các test/đường dẫn tham chiếu tương thích** mới chuyển hiệu lực từ v3.2.0 sang v4.0.0. Lịch sử đầy đủ v3.2.0 nằm trong Git history (không bắt các nguồn PASS bất biến sửa để khớp bản mới). Mọi vấn đề ngoài phạm vi đã giao giữ nguyên khóa AUTHORING/RELEASE.
