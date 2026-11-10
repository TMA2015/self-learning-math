# SLM — Đề xuất kiện toàn AUTHORING theo trải nghiệm tự học (R01, 11/11/2026)

**Trạng thái:** GOVERNANCE_DRAFT_FOR_OWNER_REVIEW. **Quyết định tức thời:** dừng toàn bộ biên soạn học liệu mới; chỉ rà soát và sửa quy trình. **Giới hạn:** không sửa nội dung học sinh, không merge/deploy, không làm tiêu chuẩn Q01–Q18 thứ hai. Cần chủ dự án phê duyệt chữ nghĩa quy phạm trước khi đổi chuẩn gốc đang có hiệu lực.

## 1. Mục tiêu duy nhất

SLM giúp học sinh **tự hiểu, tự giải, tự luyện và tự đánh giá năng lực Toán học**, không cần giáo viên giải hộ. Hiệu quả đo ở chỗ học sinh chưa biết có thể đọc, suy luận, thử, phát hiện lỗi và tự giải bài toán **khác ví dụ đã xem**. Git SHA, ID, Notebook review, receipt và cổng CI là biện pháp quản trị hậu trường, không phải học liệu mà học sinh đọc.

**Dòng chảy học tập** — em bắt đầu từ đâu, được dẫn giải thế nào, có hiểu bản chất chưa, tự thử ra sao, luyện được không, sai được giúp thế nào và có tự giải được bài mới không — là **định hướng biên tập ngầm**, KHÔNG phải bảy tiêu đề hoặc bảy card ép buộc lên trang. Giữ ba phần Topic **Kiến thức / Luyện tập / Tự kiểm tra**; giữ cấu trúc SGK độc lập có Core và Tự kiểm tra cuối chương. Học liệu không phụ thuộc phải sang hành trình kia để học tiền đề bắt buộc.

## 2. Các nút thắt đã kiểm tra từ nguồn thực

| Nút thắt | Bằng chứng và nguyên nhân | Cách xử lý đề xuất |
|---|---|---|
| Xé việc thành quá nhiều vòng nhỏ | PR AUTHORING #801 có **51 tệp thay đổi**, trong đó **23 tệp có tên QA/CHECKPOINT/HANDOFF/AUDIT/MATRIX/REVIEW/RECEIPT**. R06–R14 nối tiếp trong một đơn vị học tập | Một đơn vị công việc là **cả phần học của Topic hoặc trọn Topic**, một QA/handoff ở cuối; không báo cáo hoàn thành từng hình, câu, SHA |
| Nhãn quy trình bị đưa lên bài học | Trang SGK cũ trên main lặp **Vì sao cần học? / Em đã biết gì? / Hiểu bản chất trước công thức / Tự thử trước Core**; đọc như checklist | Viết dẫn dắt bằng **văn xuôi tự nhiên**, tiêu đề chỉ khi chuyển ý toán; PED được kiểm bằng tác dụng thực, không bằng tên nhãn |
| Chưa nhân rộng cách giảng mới | Draft RELEASE #797 trang G10 B01/B16 dùng **Cùng tìm hiểu** và mạch tình huống → bản chất → hình → suy luận → tự vận dụng, ít nhãn khuôn mẫu | Lấy làm **tham chiếu lối diễn đạt** cho AUTHORING; không sao chép cứng layout/tabs và không giả #797 đã phát hành |
| Nguồn quy phạm lệch thời điểm | Chuẩn gốc GitHub main đã **v2.0.0**, §X-C hiệu lực 10/11/2026 nhưng đường dẫn vẫn mang v1.0; Source 07 trong Project vẫn v1.1, trong Git đã có bản 07 v1.2; Source 09 tóm tắt v1.0; AGENTS.md còn nói v1.2.0 | Đồng bộ một lần Project Sources, AGENTS và mẫu; bản cũ là lịch sử, không được dùng phủ quyết quyết định mới |
| Mẫu bàn giao trùng/lỗi thời | main HANDOFF_V2_TEMPLATE.md **lặp STANDARD_ID/VERSION và mục QUALITY_Q01_Q18_EVIDENCE**, vẫn gợi version 1.0.0, Permanent Sources NotebookLM v2.0 | Sửa **mẫu chung** một lần, dùng giá trị thực ở lúc chốt; không bắt tác giả sửa bằng tay từng gói |
| Review quá sớm và lặp | Notebook/Gemini vừa có thể gợi ý câu chuyện, hình, ví dụ, vừa bị đẩy vòng review ngay khi mới viết vài đoạn; Project Source 06 chỉ buộc file+prompt **khi thật sự gửi review** | Biên tập xong **toàn đơn vị**, tự kiểm toán toán/PED và mới quyết định review đúng delta chịu ảnh hưởng; không bắt Notebook review lại chính lời dẫn Notebook tạo nếu không có rủi ro mới |
| Chồng lấn chuẩn và cổng | D1–D6, PED1–PED6, A1–A7, AP1–AP5, R1–R5 thường được biến thành nhiều lần PASS tách rời | Chúng là các **chứng cứ cho cùng Q01–Q18**, không tạo các chuẩn học thuật khác nhau; gom kiểm tra có nghĩa vào một lượt QA và ba cổng RELEASE sẵn có |
| Thay phiên bản bị legacy SHA/FNV ngăn | §X-C của chuẩn v2.0.0 đã bác việc dùng hash/đếm công thức lịch sử để chặn **ứng viên Knowledge mới**, yêu cầu kiểm toán math/PED và SHA ứng viên thực | **Ngừng viện dẫn gate lỗi thời** đối với phạm vi đã được chuẩn v2.0 cho phép. SHA vẫn phải đúng tại snapshot review/handoff/release |
| Handoff được coi là công đoạn biên soạn | V2 yêu cầu một canonical source, IDs/receipt, manifest/REGISTER; PR #799 đã merge hỗ trợ Topic | Không tạo handoff/receipt sau từng chỉnh câu. Sinh metadata/ma trận sau khi trọn học liệu và review; **một lần giao chính thức** |
| Tái biên soạn bài đã có | Source 08 và Written Contract 05 đã xác lập **một canonical ID nhiều placement**, một thư viện Written/Anchor | Mặc định dùng lại bài SGK/Topic/Written tốt, bổ sung theo **năng lực thiếu**, không theo quota hay phép đổi số |
| Trộn quyền AUTHORING và RELEASE | Browser, Golden, Firebase, Final Submit và production thuộc RELEASE; nguồn/chất lượng học thuật là AUTHORING | Không dùng gate RELEASE chưa có để ngừng viết lý thuyết; cũng không gọi QA nguồn là bài đã hiển thị/chấm điểm trên site |
| Chưa đo trải nghiệm học sinh | Đếm Tự thử, SVG, công thức và số câu dễ khiến bài được gọi “đầy đủ” nhưng học sinh vẫn không hiểu | Kiểm **suy luận từ đầu đến cuối**, một bài chuyển giao chưa xem, lỗi thường mắc và đường khắc phục; nếu chưa có thử nghiệm người học thật, ghi rõ **LEARNER_EVIDENCE_PENDING** |

## 3. Phân loại các yêu cầu cũ: giữ, ngừng, đơn giản hóa, đề xuất sửa chuẩn

**GIỮ NGUYÊN yêu cầu chất lượng:** S1 SGK KNTT/điều kiện toán/phạm vi và đủ outcome (Q01–Q02); diễn giải bản chất, ví dụ, hình có ý nghĩa, tự thử, khắc phục và chuyển giao (Q03–Q14); một canonical item/Worked/Written/Anchor và nhiều placement (Q15); quyền riêng tư RD1, Final Submit, không Mastery từ Practice (Q16); hai hành trình độc lập (Q17); kiểm chứng Academic/PED trung thực theo snapshot và quyền (Q18). THCS Golden UI và 25 chuyên đề đã nghiệm thu được bảo toàn.

**NGỪNG ÁP DỤNG trong vận hành biên tập** (những điều này không phải chuẩn chất lượng cần đạt): (i) bảy tiêu đề cứng cho bảy bước học; (ii) quota card/đoạn/câu/Tự thử/hình; (iii) mỗi chỉnh sửa nhỏ một checkpoint/file review; (iv) NotebookLM round-trip khi chưa có review cần thiết; (v) so bản mới với FNV/đếm công thức/SHA lịch sử như điều kiện PASS; (vi) đòi trang SBT tham khảo còn thiếu để HOLD toàn phần khi SGK Core/outcome đã đủ; (vii) đòi handoff V2/ready/REGISTER ngay lúc đang viết nháp; (viii) xem AP/QA thiết bị chưa chạy như lỗi AUTHORING về toán. Chỉ ngừng **cách dùng sai**; không tự tắt các script Q15/Q16/Q18 đang bảo vệ sản phẩm trên main.

**ĐƠN GIẢN HÓA:** D1–D6/PED/A1–A7 thành **một ma trận minh chứng theo bài/outcome** ở cuối lô, không viết nhiều sổ PASS cho cùng một điểm; trạng thái Git/receipt chỉ ở hậu trường; chỉ khóa SHA lúc có snapshot thật để review/handoff. R18 và các PASS cũ giữ đúng snapshot bất biến. Review Delta A/B theo bằng chứng tương đương, không review lại toàn bộ vì metadata/UI; Delta C/D xét đúng nội dung thay đổi.

**CHƯA ĐƯỢC TỰ TẮT vì là quy phạm hiệu lực:** Q18 hiện tại vẫn yêu cầu reviewer độc lập cho **Chuyên đề mới, bài mới/đổi đáp án, điều kiện, outcome, ngân hàng câu, RD1**. Ngoại lệ tự kiểm chứng Q18 v2.0 chỉ cho **cải tiến Knowledge SGK đã phát hành** trong giới hạn được duyệt, không tự động chuyển sang Topic.

**ĐỀ NGHỊ owner duyệt sửa Q18 có giới hạn cho Topic đã PASS:** Cho phép AUTHORING tự kiểm có chứng cứ đối với **chỉnh sửa diễn đạt/nhịp dẫn thuần tương đương** trên Topic có baseline PASS đúng snapshot, không thay điều kiện/định nghĩa/method quan trọng/outcome/item/key/rubric/RD1, có S1 và kiểm toán toán/PED từng outcome bị tác động. Bổ sung ví dụ toán học thực chất, thay mô hình học hoặc bài tập mới vẫn Delta C: review độc lập **đúng phần chịu ảnh hưởng** nếu chưa đủ mode được owner phê duyệt. Với Topic chưa PASS, vẫn independent Academic/PED theo chuẩn hiện tại. Không đổi nhãn một Delta C thành B để né review.

## 4. Quy trình AUTHORING đề xuất: một công việc lớn, một lần QA, một bàn giao

1. **Khoanh đơn vị đầu ra:** một phần trọn của một Topic (Kiến thức, Luyện tập hoặc Tự kiểm tra), trọn Topic nếu nguồn đủ; SGK theo một chương/cụm bài tự đủ. WIP=1, không mở dàn trải. Quy trình quản trị đang rà soát thì **không mở bất kỳ content authoring mới**.
2. **Đọc nguồn một lần, phân loại KEEP / REVISE / ADD / REJECT:** SGK S1 là thẩm quyền toán, notebook/Gemini là nguồn đề xuất để chọn lọc và kiểm, source học liệu đã PASS là nền; xem kho bài tương tác SGK/Topic và Written chung trước khi viết câu mới.
3. **Viết trọn bản học sinh:** văn xuôi dẫn dắt từng quan hệ toán, giải thích khi cần; hình/lab đúng ngay chỗ giải thích; ví dụ cho thấy lựa chọn phương pháp và giới hạn; một số điểm Tự thử có chủ đích, tự mở đối chiếu và sửa lỗi. **Không chèn các nhãn WHY/PED/Q/SHA/DELTA** lên mặt bài. Topic chỉ có ba phần; SGK vẫn có Core riêng.
4. **Một lượt QA toàn phần:** bắt đầu như học sinh chưa biết, đọc từ đầu đến cuối; kiểm tiền đề, bước suy luận, tất cả điều kiện/toán/đơn vị, hình và diễn giải hình, bài chuyển giao mới, bài tự luận, câu đã lộ lời, lỗi thường gặp và đường khắc phục. Kiểm theo outcome, không đếm đoạn/card. Ghi lỗi thật, sửa hết trong cùng lô.
5. **Một lần review có chủ đích khi cần:** Delta A/B có QA tương đương; Delta C/D theo Q18 **có hiệu lực**. Nếu cần NotebookLM, giao một gói review trọn phạm vi, đủ file thật Markdown/TXT + prompt theo Source 06, đúng năm Permanent Sources v2.1. Không tự mạo danh reviewer PASS.
6. **Chốt nguồn và bàn giao:** một nguồn canonical cho đơn vị đã duyệt, một báo cáo QA ngắn và **một handoff V2**, ready/REGISTER chỉ khi mọi Academic/PED/source/private gate thực sự đóng. SHA/IDs trong source metadata/handoff, không trong nội dung học sinh; có thể sinh bảng từ registry để tránh nhân bản và copy thủ công.
7. **RELEASE độc lập:** tiếp nhận nguồn đã duyệt, QA bản hiển thị và bảo mật, AP1–AP5/R1–R5/P2 khi cần, exact-head CI, owner approval, merge/deploy. Không buộc AUTHORING triển khai site hoặc sửa dữ liệu Firebase.

**Cách báo cáo:** chỉ sau khi hoàn thành một phần/chuyên đề có thể đọc và kiểm, hoặc xuất hiện blocker thực sự cần owner quyết định. Không coi tăng số commit/receipt/SHA là sản lượng học liệu.

## 5. Bộ câu hỏi QA thực chất (diễn giải Q01–Q18, KHÔNG tạo gate mới)

- Học sinh lần đầu gặp bài **hiểu vì sao vấn đề xuất hiện** và có đủ tiền đề ngay trong hành trình chưa?
- Một khái niệm/công thức mới có **bản chất, giả thiết, điều kiện và giới hạn áp dụng** trước khi dùng chưa?
- Đọc ví dụ, học sinh hiểu **vì sao chọn phương pháp**, không chỉ chép lời giải? Có thể thử một tình huống khác đã xem chưa?
- Hình được **dẫn đọc đúng lúc** hay chỉ để trang trí? Toán/hình/ký hiệu/đơn vị có nhất quán?
- Văn bản có **một mạch liên tục**, hay bị ngắt bởi tiêu đề lặp và đoạn kiểm tra PED máy móc?
- Tự thử có nhịp nghỉ phù hợp và lời giải tự mở; khi sai có chỉ dẫn đúng lỗ hổng không?
- Luyện tập có dùng lại kho chung và tăng chiều sâu thật? Tự kiểm tra có độc lập, không lộ đề và không ghi Mastery sai không?
- Có chứng cứ S1, QA toán/PED phù hợp và **review đúng snapshot/mode**, tách biệt với QA website?

Tám câu hỏi này là **cách đọc/kiểm một học liệu**, không phải tám phép nghiệm thu bổ sung ngoài Q01–Q18; không lập bảng 8×18 cho mỗi bài.

## 6. Công việc quản trị cần đồng bộ một lần sau owner duyệt

- **Giữ đúng một chuẩn gốc:** main hiện Q01–Q18 v2.0.0 (§X-C owner approved 10/11/2026), dù tên file vẫn có v1.0. Không hạ chuẩn. Nếu mở rộng Q18 cho Topic enrichment, cần một STANDARD_CHANGE_REQUEST, phiên bản sau v2.0.0 và owner duyệt đúng chữ, chạy governance QA rồi mới merge.
- **Đồng bộ Project Source 07 và 09:** 07 bản đính kèm hiện v1.1 cũ; Git đã có 07 v1.2 nhưng tiêu đề còn “DỰ THẢO” dù điều VIII ghi owner-approved. Project 09 là bản tham chiếu 1.0, không được áp dụng như chuẩn thứ hai. Cần một bản nguồn Project được owner thay chính thức, không thêm nguồn NotebookLM Permanent thứ sáu.
- **Đồng bộ AGENTS.md:** còn viết chuẩn v1.2.0 trong khi main đã v2.0.0; chỉ dẫn process mới phải trỏ đúng bản chuẩn hiệu lực. Không bắt tác giả tự xử lý xung đột phiên bản mỗi lượt.
- **Sửa HANDOFF_V2_TEMPLATE.md:** loại duplicate STANDARD_ID, STANDARD_VERSION, QUALITY_Q01_Q18_EVIDENCE; dùng placeholder phiên bản hiệu lực (không mặc định 1.0.0), sửa Permanent Sources v2.0 → v2.1; không sao chép bảng Q18 hai lần. Mẫu là công cụ hậu trường, không là tài liệu học sinh.
- **Giữ ba cổng RELEASE duy nhất** đã được chuẩn v2.0 ban hành: CONTENT_MATH_PED_SOURCE; ASSESSMENT_DATA_SAFETY; RENDER_RELEASE_QA. A/PED/AP/R chỉ là chứng cứ trong các cổng này, không phát sinh các phép PASS ngang cấp mới.
- **Không đụng bài/website trong PR quản trị:** PR #801 vẫn Draft, học liệu R11–R14 không sửa trong giai đoạn đóng băng; không chỉnh RD1/quiz/Golden/website/Firebase, không merge/deploy.

## 7. Điều kiện coi nhiệm vụ kiện toàn quy trình đã xong

1. Owner chấp nhận bảng **GIỮ / NGỪNG / SỬA** và cơ chế review theo rủi ro cho AUTHORING; mọi sửa Q18 có version đúng.
2. Chuẩn gốc, Project Sources, AGENTS và V2 mẫu không còn tự mâu thuẫn về hiệu lực và kiểu nguồn.
3. AUTHORING có một cách làm **trọn phần/chuyên đề** và một QA/handoff ở cuối, không tái sản xuất hàng chục checkpoint.
4. Một bài mẫu có thể được đọc như **lời giải thích Toán tự nhiên** với điểm Tự thử và chuyển giao thật; các nhãn kỹ thuật chỉ còn metadata.
5. Tất cả quyền an toàn Q15/Q16/RD1/Final Submit/Mastery, RELEASE và owner vẫn được bảo vệ.

**Trạng thái trước duyệt:** CONTENT_AUTHORING_PAUSED · GOVERNANCE_REVIEW_ONLY · PROCESS_PROPOSAL_NOT_EFFECTIVE · NO_CONTENT_CHANGES · NO_MERGE_DEPLOY.