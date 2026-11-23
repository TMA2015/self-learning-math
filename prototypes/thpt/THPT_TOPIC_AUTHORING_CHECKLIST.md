# CHECKLIST BIÊN SOẠN CHUYÊN ĐỀ TOÁN THPT

**Ứng viên 24/11/2026 · DRAFT, chưa có hiệu lực.**  
**Nguồn kế thừa:** 13 yêu cầu biên tập owner tại [Issue #864](https://github.com/TMA2015/self-learning-math/issues/864), nguyên lý concept-first [#691](https://github.com/TMA2015/self-learning-math/issues/691), [chuẩn chung Q01–Q18](THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md), kiến trúc hai hành trình và Golden CĐ01 đã phê duyệt. File này **đề xuất thay thế phần checklist vận hành trong #864 khi được duyệt**, không tạo một chuẩn thứ hai; #864 và ledger #977 tiếp tục là chứng cứ lịch sử theo snapshot. Không tự sửa các Topic đang khóa hoặc tự merge/deploy.

## 1. Vai trò Chuyên đề và cách lấy kiến thức SGK

**Hành trình SGK:** học theo lớp → chương → bài (79 bài). **Hành trình Chuyên đề:** xếp lại **các kiến thức SGK liên quan** theo 22 mảng toán học (có thể xuyên lớp), sao cho *chỉ học Chuyên đề* cũng hiểu đủ kiến thức bắt buộc trong phạm vi Chuyên đề đó. Không rút nội dung thành bảng công thức hoặc dẫn học sinh quay về SGK để học những định nghĩa còn thiếu.

- Rà **79 bài ↔ 22 CĐ theo ánh xạ nhiều–nhiều**: xác định mỗi mảng CĐ dùng những ý/định nghĩa/tính chất/công thức/điều kiện SGK nào, kiến thức tiên quyết ở đâu, phạm vi nào còn thiếu; một bài SGK có thể phục vụ nhiều CĐ. Chỉ ghi coverage PASS sau khi kiểm **nội dung thực**, không suy từ số 79/22 hoặc bảng ID.
- Giữ **đủ và đúng** các phát biểu chính thức của SGK thuộc phạm vi; lời giảng, cách sắp xếp, câu hỏi/ví dụ tự viết để học sinh hiểu theo mạch CĐ. SGK là thẩm quyền Core; SBT, đề thi là nguồn tham khảo dạng và mức độ, không ép sao chép.
- Mỗi CĐ có **mạch khái niệm riêng rõ ràng**: từ kiến thức nền đến kiến thức mới, từ trường hợp dễ đến khái quát hoặc từ vấn đề đến công cụ; mở đầu một mảng cần giải thích **nó liên hệ với mảng trước thế nào**. CĐ lớn không được chỉ là các bài SGK ghép nối.

## 2. Ba trang, ba nhiệm vụ

| Trang | Mục đích và cấu trúc |
|---|---|
| **Kiến thức** | Tổ chức mảng toán và các mục con. Giải thích tự học đầy đủ bằng **Khám phá kiến thức** (trực giác, văn xuôi, quan sát, ví dụ minh họa), phát biểu chính thức/điều kiện, Ví dụ giải toán, Vận dụng tự làm/Đối chiếu và Lỗi thường gặp. Dùng Golden/Adaptive Knowledge Tabs đã nghiệm thu để đọc các mảng thuận tiện; **không phát sinh trang Core riêng**. |
| **Luyện tập** | Có **đề bài và hoạt động thực cho học sinh**, từ củng cố cơ bản tương đương Core đến áp dụng, phối hợp, nâng cao phù hợp; phân nhóm theo kỹ năng/họ dạng/mức độ, giải tự mở, Written có lời giải và rubric. Không thay bằng bảng đếm item/placement. |
| **Tự kiểm tra** | Đánh giá mức hiểu/vận dụng của **toàn phạm vi Chuyên đề**. Phân biệt rõ `PUBLIC_REPLAY_ONLY / CLIENT_SELF_CHECK_NO_MASTERY` (tự làm rồi đối chiếu, không chấm/Mastery) với `TOPIC_READINESS` độc lập thật (bảo vệ RD1/Final Submit); không tạo nút nộp hay điểm giả. |

**Đánh số và tiêu đề như sách:** Mảng lớn `1. Tên mảng`, `2. Tên mảng`; nội dung `1.1. Tên nội dung`, `1.2.`…; cấp sâu hơn chỉ khi toán thật cần. Nội dung cùng cấp dùng cùng kiểu; tên ngắn, rõ, nhất quán với SGK khi cùng chức năng. Không ép một CĐ có bao nhiêu mảng, mục, bài tập/hình. Không thêm “của em”, “hãy”, `Mxx`, tên tiêu chí PED hoặc số trang/receipt vào tiêu đề.

## 3. Chất lượng trang Kiến thức

1. **Khám phá kiến thức dẫn dắt trước khi yêu cầu ghi nhớ:** dùng tình huống/câu hỏi, tiền đề, suy luận, văn xuôi đơn giản, bảng/hình/đồ thị hoặc Ví dụ loại 1 để học sinh hiểu *bản chất* và *mục đích* từng khái niệm. **Đọc toàn mạch** từ mảng này sang mảng khác; không thay lời giảng bằng chuỗi callout, ký hiệu hoặc sáu đầu mục PED.
2. **Phát biểu SGK đủ và chính xác:** có đúng **Định nghĩa/Khái niệm, Tính chất/Định lý/Quy tắc, Công thức, Kiến thức cần nhớ (khi cần)**, điều kiện, ngoại lệ; khung 3+1 đúng ngữ nghĩa Golden. Phân biệt minh họa trực giác với chứng minh.
3. **Hai vai trò Ví dụ:** ví dụ minh họa trực tiếp giúp hiểu ngay một ý; ví dụ phương pháp giúp học sinh phân tích dữ kiện, nhận dạng bài, chọn hướng giải (kể cả dạng thường gặp/thi) rồi xem lời giải rõ bước. **Đề bài tự đủ → Phân tích (khi cần) → Lời giải có suy luận → Kiểm lại (khi hữu ích)**; không nhắc đáp số trước phần học sinh phải thử.
4. **Vận dụng đúng nhịp:** sau ý/ví dụ minh họa khi hữu ích, để người học thử bài gần nhưng không sao y; **Đối chiếu** chỉ mở sau thao tác; **Kiểm lỗi** khi thật sự chỉ ra sai lầm và bước sửa/ôn lại. Không gọi “Tự thử trước Core”, vì Topic **không có Core riêng**.
5. **Hình/đồ thị phục vụ suy nghĩ:** kiểm nội dung, ký hiệu, tỷ lệ, đơn vị; ưu tiên reuse canonical SGK/Topic, có thể reuse một hình ở nhiều vị trí phù hợp với caption riêng. Đặt sát lời giải thích, có alt/chỉ dẫn “nhìn gì và suy ra gì”; không để hình lộ kết quả Vận dụng hay đứng riêng cuối bài. Không quota hình/bảng.
6. **Tiếng Việt dễ hiểu:** câu ngắn vừa đủ, đủ chủ thể, rõ ý, nối đoạn tự nhiên; không lộ `outcome_id`, `item_id`, SHA, Qxx, PED/D6, rubric kỹ thuật, chỉ dẫn phát hành. Nếu cần ghi nguồn học liệu SGK, dùng **một dòng tham khảo ở cuối toàn CĐ** (đúng lớp/tập/chương đã kiểm), không lặp trích trang trong mỗi mục.

## 4. Luyện tập và Tự kiểm tra có giá trị thực

- **Luyện tập:** câu thực hiển thị, nội dung toán đúng, đủ giả thiết/điều kiện/đáp án/lời giải, các họ dạng/mức tăng theo năng lực CĐ. Viết câu mới có khác biệt về nhận diện/ý tưởng, không chỉ thay số; Written và Anchor dùng một bộ nguồn, rubric đánh giá rõ bước. Một `item_id` duy nhất cho một đề/key/solution/rubric, nhiều placement hợp lệ; dùng bài Core SGK làm Practice cơ bản Topic khi thực sự khớp.
- **Tự kiểm tra:** có câu hỏi/luồng trả lời hoặc tự đối chiếu thật; **đánh giá đúng scope Topic**. Câu đã xem trong Luyện tập có thể dùng để tự ôn nhưng **không** làm bằng chứng Readiness độc lập hoặc Mastery. Không lộ đáp án/hint/Tutor trước Final Submit ở mode bảo vệ.
- **D6/sửa lỗi:** khi người học sai, chỉ rõ *chỗ sai → vì sao → nội dung cần học lại → thử câu nào*. Không dựng đường dẫn giả, không để “xem lại kiến thức” chung chung thay remediation.

## 5. Phép thử hoàn thành bằng góc nhìn học sinh

Đọc trọn Chuyên đề theo đúng thứ tự các mảng, **không nhìn receipt**. Tự hỏi: (a) Có thiếu kiến thức SGK bắt buộc nào không? (b) Mỗi ý đã giảng được bản chất và liên hệ tiền đề chưa? (c) Lời giải và hình đúng không, có chọn cách vì lý do rõ không? (d) Học sinh thử một bài khác ví dụ được không? (e) Luyện tập có câu thật nhiều mức và tự kiểm tra có hoạt động đánh giá hợp lệ không? (f) Sau một câu sai, biết sửa ở đâu không?

**Kiểm toán thực chất:** AUTHORING tự giải toàn bộ nội dung biên soạn mới, kiểm S1/toán/điều kiện/đáp án/rubric/hình. NotebookLM phản biện **nội dung toán và sư phạm mới hoặc Delta thực chất** theo chuẩn chung, không phản biện metadata. Giữ PASS blob cũ; chỉ kiểm phần thay đổi. Lỗi chỉ được ghi khi có đoạn nguồn cụ thể + ảnh hưởng thật; không nhân thêm ledger hoặc vòng checklist/biểu mẫu.

**Phân vai:** AUTHORING chỉ sửa đúng canonical/phạm vi được giao; RELEASE dùng [Golden Topic đã duyệt](https://github.com/TMA2015/self-learning-math/issues/995), browser QA và cổng an toàn, không viết lại toán. **Không tự merge/deploy.** CĐ01 hiện có trang Knowledge tham khảo; **không suy rằng cả 22 CĐ đã phát hành chỉ từ 22 hồ sơ AUTHORING có PASS**.

### Tương thích với checklist 13 mục lịch sử #864

- Mục 1–2 → §1–2 (ba trang, nhóm mảng/đánh số).
- Mục 3–8 → §3 (Khám phá, phát biểu, điều kiện, Ví dụ, hình, Vận dụng).
- Mục 9–10 → §4 (Luyện tập/đánh giá thật, an toàn).
- Mục 11–12 → §2–3 (nhãn hiển thị, metadata, nguồn tham khảo).
- Mục 13 → §5 (đọc thử, tự QA, phản biện có chứng cứ).

**Chỉ khi owner duyệt PR quản trị này:** file trên trở thành checklist Topic đang dùng; phần 13 mục trong [Issue #864](https://github.com/TMA2015/self-learning-math/issues/864) giữ là lịch sử/đầu vào đã được hợp nhất, **không vận hành như một checklist thứ hai**.
