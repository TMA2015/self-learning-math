# HỢP ĐỒNG KỸ THUẬT VÀ AN TOÀN CHUNG — TOÁN THPT SGK / CHUYÊN ĐỀ

**Ứng viên 24/11/2026 · DRAFT, chưa có hiệu lực; giữ đường dẫn canonical V2 hiện hữu để tương thích.**  
**Vai trò:** Chỉ quy định **nguồn dữ liệu chung, tương tác Golden, an toàn đánh giá, snapshot/Delta, bàn giao và phát hành**. Không quyết định học liệu giảng có dễ hiểu hay không; vấn đề đó thuộc [chuẩn chất lượng chung](THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md) và hai checklist SGK/Chuyên đề.

**Cấu trúc bất biến:** SGK = Kiến thức (4 tab) → Core/Luyện tập → Tự kiểm tra cuối chương; Chuyên đề = Kiến thức → Luyện tập → Tự kiểm tra (**không Core riêng**). Hai nhánh **tự đủ**, khác tổ chức nhưng dùng chung thành phần được phép. Quy tắc nguồn kiến trúc đã phê duyệt ở [Shared Resources v2.0](THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md) vẫn có hiệu lực; không tạo bản thứ hai của ngân hàng câu hỏi, skill hoặc Golden UI.

## I. Clear accountability and definitions

- **AUTHORING** sở hữu SGK/SBT S1, kiến thức, các phát biểu toán, giải thích, ví dụ, bài tập, đồ thị/hình, đáp án/rubric, bản thảo learner canonical và tự kiểm. NotebookLM độc lập phản biện **toán và diễn giải mới/thay đổi thực chất** theo phạm vi chủ dự án giao. Không nhờ NotebookLM kiểm filename, page offset, SHA, receipt, manifest/CI. Nguồn bảo mật RD1 chỉ ở vị trí cho phép, không bao giờ gửi vào reviewer packet công khai.
- **RELEASE** chỉ tích hợp đúng source đã bàn giao, kiểm Golden/HTML/JS/CSS/browser/MathJax/SVG, route, item placement, dữ liệu/assessment/exposure và QA theo **diff ảnh hưởng**. Lỗi toán/PED thực chất trả AUTHORING với bằng chứng, không tự viết lại nội dung toán.
- **Owner** quyết định phạm vi đang giao và quyền merge/deploy. DRAFT PR/checklist, NotebookLM PASS, build CI hoặc owner duyệt thiết kế Golden **không** đồng nghĩa cho phép phát hành.
- **Bốn trạng thái riêng:** `AUTHOR_SELF_QA` / `ACADEMIC_PED_REVIEW` (theo nguồn), `CONTENT_READY` (source/handoff), `RELEASE_READY` (QA tích hợp), `PUBLISHED` (đã được phép triển khai). Không lấy trạng thái lịch sử làm trạng thái hiện hành khi HEAD đã đổi.

## II. Required single-packet authoring handoff (A1–A7 plus PED)

**Mỗi bài SGK hoặc Chuyên đề chỉ có duy nhất một bản thảo learner canonical tại một đường dẫn ổn định, chính là nguồn nội dung để RELEASE tạo trang tương ứng trên website.** Không tạo hoặc duy trì bản nội dung học sinh song song riêng cho website, bản R01/R02, bản review hay một nhánh học thứ ba. RELEASE được chuyển đổi nguồn sang HTML/Golden UI và dùng lại asset/item chung, nhưng **không biên soạn một bản nội dung độc lập**; phải kiểm tra bản hiển thị đúng nội dung canonical tại **source commit được phát hành**. Bản thảo đang nâng cấp có thể mới hơn website chưa phát hành: ghi rõ source/commit đang dự thảo và bản đang live, **không mặc nhận chúng giống nhau trước khi deploy**. Git history/blob giữ các snapshot cũ và PASS, không nhân bản file learner để lưu phiên bản. Mỗi bài/CĐ giữ một nguồn canonical, một ngân hàng item dùng chung; receipt/handoff ghi đúng blob.

**Bản giao thực chất tối thiểu cho phần được giao:** định danh bài/CĐ + phạm vi/outcome liên quan, canonical path + blob/HEAD, chứng cứ đọc S1 và kiểm toán toán/điều kiện/lời giải/hình/rubric, kết quả phản biện khi áp dụng và Delta, danh sách blocker thật. Khi cần V2 handoff, giữ **một Q18 receipt, một V2 handoff, một `ready/PACKET_ID.md` và một `REGISTER` row** theo schema hiện có; không tạo cổng phê duyệt học thuật mới sau khi đã tự kiểm/review đủ. Metadata thiếu nhưng học liệu toán đã QA xong là `HANDOFF_PACKAGING_PENDING`, **không phải** lý do yêu cầu NotebookLM review toàn bài lại.

**Q18:** Với ứng viên nội dung toán hoặc diễn giải *mới/thay đổi thực chất* trong đợt nâng chuẩn được owner chấp thuận, tác giả **tự kiểm trước rồi lấy phản biện độc lập NotebookLM đúng phạm vi**; lưu verdict Academic/PED theo snapshot. `Q18_AUTHOR_SELF_VERIFIED` lịch sử theo v3.2.0 **giữ nguyên giá trị cho nguồn đã được owner nghiệm thu**, không bị hủy hồi tố; các trường hợp được giao cụ thể có thể áp self-QA theo quyền/scope. **Không giả `INDEPENDENT_REVIEW_PASS`** khi chỉ có self-QA; không gửi lại reviewer chỉ vì số trang, SHA hoặc Delta tương đương.

## III. Mechanical V2 gate for new READY manifests

**Một item = một sự thật dữ liệu:**
- `item_id`, `content_version`, `stem`, `answer_key`, `worked_solution`, `rubric` (nếu là Written) phải nhất quán. `placement_id`, `role`, `skill_id`, `problem_type_id`, `difficulty` chỉ định vị trong SGK Core/SGK Practice/Topic Practice/Public self-check; không sao chép bản câu hỏi khác tên nhưng cùng ID.
- Dùng chung **hình/SVG/đồ thị, bài tương tác, kỹ năng, bài tự luận Written/Anchor** khi đúng nội dung và bối cảnh; mỗi trang vẫn có lời giải thích độc lập. Không tự động tạo item/mô hình dựa chỉ trên bảng mapping.
- **Bất nhất cùng ID nhưng khác stem/key/solution/rubric** là lỗi thực chất cần HOLD đúng item; một khác biệt tên file, nguồn tham khảo hoặc số trang không được nâng thành lỗi toán khi nội dung đã đối chiếu.

**Cổng an toàn Q15/Q16 và Privacy — không được nới:**
- `SGK_CHAPTER_READINESS` và `TOPIC_READINESS` có scope riêng, cần đánh giá độc lập; **không tái sử dụng câu đã luyện/đã xem lời giải làm bằng chứng Readiness độc lập hoặc Skill Mastery**.
- **RD1, đề/đáp án/rubric private và key/đúng–sai/hint/Tutor liên quan bài kiểm tra độc lập phải được bảo vệ**; không đưa vào public learner, GitHub public, NotebookLM packet, HTML/JS công khai hay Gemini/Tutor context trước khi được phép. Trước **Final Submit** không được lộ key/hint/đúng–sai/Tutor cho câu đánh giá được bảo vệ.
- `PUBLIC_REPLAY_ONLY` / `CLIENT_SELF_CHECK_NO_MASTERY` chỉ cho tự làm và **Đối chiếu từng câu**, không input/chấm/Final Submit giả/ghi Mastery. Tự đối chiếu không chuyển thành một phiên Readiness.
- Firebase/Auth, dữ liệu tiến độ/học sinh và runtime/Golden shared **không được sửa từ AUTHORING**. Chỉ xử lý trong phạm vi RELEASE/owner cho phép và có QA an toàn tương ứng.

**Quản lý Delta theo ý nghĩa, không theo số dòng:**
- `DELTA_A_UI`: giao diện, nhãn/chính tả không đổi nghĩa → tự QA phần tác động.
- `DELTA_B_SOURCE_EQUIVALENT`: chỉnh văn phong/source có đối chiếu nghĩa toán tương đương → tự kiểm/log, bảo toàn PASS của phần bất biến.
- `DELTA_C_ACADEMIC_MATERIAL`: đổi khái niệm/điều kiện/chứng minh/diễn giải sư phạm cốt lõi/đề/lời giải/rubric → tự kiểm + review đúng thay đổi theo quyền/phạm vi mới, giữ kết quả của phần không đổi.
- `DELTA_D_BLOCKER`: sai toán/chưa xác minh được nguồn bắt buộc/rò dữ liệu đánh giá hoặc rủi ro nghiêm trọng → HOLD **đúng scope có ảnh hưởng**, nêu chứng cứ và cách đóng.
- Xem thêm Project Source **07 v1.3** khi cần phân loại khó; không tạo chính sách Delta thứ hai.

## IV. Release gate and blocker return

**Golden UI:** giữ sản phẩm đã nghiệm thu, không đổi theme chung để phù hợp một bài riêng. SGK Knowledge có 4 tab; Topic có đúng 3 trang và Knowledge dùng các tab/mảng Adaptive, khung ngữ nghĩa 3+1. Cùng chức năng dùng cùng tiêu đề/nút (Ví dụ, Đề bài, Phân tích, Lời giải, Vận dụng, Đối chiếu, Kiểm lỗi...), cùng quy tắc đánh số theo cấp; giao diện cần đọc được trên desktop/tablet/mobile, Light/Slate. Không ép số nhóm/câu demo CĐ01 lên mọi CĐ. **Hình có thể dùng chung** giữa nhánh, giữa tab khi ký hiệu/điều kiện/caption đúng.

**Tương tác:** trang public Luyện tập có thể mở lời giải theo câu và Tutor theo cơ chế đã duyệt; Topic Practice dùng modal/pager một câu khi Golden yêu cầu, nút Đối chiếu đúng câu; RD1/Final Submit tuyệt đối giữ cách ly. Các mô hình Math Lab và đường dẫn dùng chung không bị đổi quyền kiểm soát bởi nội dung nguồn.

**Ba cổng khác vai, không kiểm trùng:**
1. `CONTENT_MATH_PED_SOURCE`: AUTHORING kiểm toán học thuật/sư phạm, nguồn đúng và source/receipt đủ phạm vi; NotebookLM đúng phần khi áp dụng.
2. `ASSESSMENT_DATA_SAFETY`: Q15/Q16, canonical ID, no-leak RD1/key/hint, Final Submit, Firebase/Auth, không ghi Mastery giả.
3. `RENDER_RELEASE_QA`: actual render/MathJax/SVG, Golden, responsive và tương tác; exact-HEAD CI/chứng cứ từ browser, owner permission trước merge/deploy.

**RELEASE QA theo phạm vi diff:** bài/CĐ/route thực sự thay đổi và phần shared bị ảnh hưởng. Chỉ mở rộng regression khi diff liên quan runtime/build/CSS chung/bank shared/Q16/đường dẫn dữ liệu; không chạy lại 79 SGK/22 Topic/THCS/Math Lab chỉ vì checksum lịch sử. **Không dùng source-parse/CI xanh thay browser QA**; nếu chưa xem pixel thật, báo `VISUAL_UNVERIFIED`, không tự nhận PASS. Đối với CĐ01–22 dùng Golden owner-approved và [RELEASE Master #995](https://github.com/TMA2015/self-learning-math/issues/995); không tự triển khai.

**Phân luồng lỗi:** sai toán, thiếu khái niệm, giải thích không giúp tự học hoặc hình **sai nghĩa toán** → AUTHORING, nêu bài/đoạn/ảnh hưởng; lỗi CSS/DOM/đường dẫn hiển thị/keyboard/tương phản không làm đổi nghĩa → RELEASE. Nếu nghi rò private Q16/RD1, HOLD bảo mật thật. Không dùng thiếu trang PDF hoặc receipt không đồng bộ nhưng toán đã kiểm để đóng băng nội dung không liên quan.

## V. No fake cross-chat coordination, restart and audit

- **GitHub current PR/Issue/HEAD và nguồn đã đọc là bằng chứng**, không lấy đoạn chat trước hoặc hứa hẹn làm checkpoint. OWNER change mới nhất ưu tiên; khi cũ mâu thuẫn, chỉ báo một blocker có ảnh hưởng thật.
- Chỉ báo cáo với chủ dự án **sản phẩm/commit, lỗi có chứng cứ, blocker/điểm phải quyết định**. Không lặp lời hứa hoặc quy trình trong chat; không tạo báo cáo thứ hai khi một issue/receipt đã đủ.
- Không mở rộng quyền bằng việc sửa hợp đồng này: **không tự merge, deploy, chuyển chế độ assessment, sửa RD1, Mastery hoặc dữ liệu học sinh**. Bất kỳ PR sửa quy chuẩn nào cũng phải Draft, được owner phê duyệt và qua kiểm tra tương thích trước khi có hiệu lực.

## VI. Current checkpoint (historical 02/11/2026; verify live before work)

Phần lịch sử dài của hợp đồng V2 cũ **được giữ đầy đủ trong Git history** tại cùng path; quy tắc v3.2.0/Q18 cũ và source/receipt đã PASS giữ nguyên snapshot khi chưa có quyết định thay đổi riêng. Sau khi owner phê duyệt bản rút gọn, đối chiếu các script/test tiêu thụ chính xác `Q18/V2/ready/REGISTER` và Golden, cập nhật link điều hướng khi cần; **không sửa learner hay nguồn đánh giá** chỉ để phù hợp văn bản tiêu chuẩn.
