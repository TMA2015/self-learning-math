# CHECKLIST BIÊN SOẠN SGK TOÁN 11–12

**Quyết định của chủ dự án: 22/11/2026.**  
**Phạm vi:** Bài 2–33 Toán 11 và Bài 1–19 Toán 12. **Trạng thái:** Đang biên soạn lại tuần tự từ Toán 11 Bài 2 theo chỉ đạo chủ dự án ngày 23/11/2026: **tác giả tự viết và tự kiểm, không dừng chờ chủ dự án xem từng bài**. Các bản thảo của đợt nâng cấp vừa hủy không được sử dụng làm nguồn hay mẫu viết bài mới.

## KHÓA PHẠM VI NHIỆM VỤ — QUYẾT ĐỊNH CHỦ DỰ ÁN 23/11/2026 (ƯU TIÊN CAO NHẤT)

> **MỤC TIÊU DUY NHẤT CỦA ĐỢT NÂNG CẤP HIỆN TẠI:** Nâng cấp **TRANG KIẾN THỨC SGK** Toán 11–12 để học sinh có thể tự học độc lập. Đây là khóa phạm vi công việc AUTHORING, **không phải một chuẩn chất lượng mới**; áp dụng trong cùng checklist/SLM-THPT-QUALITY-ONE hiện hành. Khi chỉ đạo trước đây về dứt điểm chương hoặc hoàn thiện hành trình SGK có thể bị hiểu là làm lại Core/đánh giá, quyết định cụ thể mới này **giới hạn đợt nâng cấp** vào trang Kiến thức.

### ĐƯỢC PHÉP LÀM — chỉ nằm trong trang bài học Kiến thức

- Biên soạn/nâng cấp **bốn tab của trang Kiến thức SGK**: **Khám phá kiến thức, Kiến thức SGK, Ví dụ, Lỗi thường gặp**; thêm **Vận dụng → Đối chiếu → Kiểm lỗi** *ngay trong trang Kiến thức*, khi phục vụ học bài.
- Kiểm đúng SGK/SBT S1, mục chính 1:1 ở hai tab đầu, điều kiện/toán và phát biểu; mẫu Golden Toán 10; 3+1 nhãn/khung; hình/SVG phục vụ trực tiếp bài giảng, có thể dùng một nguồn hình canonical ở hai tab.
- Tự giải lại Ví dụ và Vận dụng **của trang Kiến thức**, tự kiểm 4 tab, sửa lỗi học thuật/sư phạm của **đúng phần Kiến thức**; NotebookLM phản biện **chỉ phạm vi source đã đổi** và trả verdict riêng từng bài. Ghi SHA/receipt/handoff scoped khi cần; **không suy ra PASS/CONTENT_READY của cả hành trình hay chương từ việc nâng cấp trang Kiến thức**.
- Đường dẫn sửa dự kiến: learner `docs/thpt-preview/sgk/lop-11/chuong-*/bai-*.md` hoặc `lop-12/chuong-*/bai-*.md`, cùng SVG **của bài đó** nếu thực sự cần. Chỉ sửa tài liệu kiểm toán/handoff đúng phạm vi, không đổi giao diện/nền tảng dùng chung.

### KHÔNG THUỘC NHIỆM VỤ — BẢO TOÀN NGHIỆM THU HIỆN CÓ

- **KHÔNG biên soạn lại, chỉnh sửa, bổ sung hoặc chuyển vị trí** các trang **Core & Luyện tập**, **Tự kiểm tra cuối chương**, ngân hàng câu hỏi, Written/Anchor, đáp án, lời giải, rubric, RD1, canonical item IDs và cơ chế đánh giá/Mastery. Đây là các phần đã có và đã qua NotebookLM review trước đó theo xác nhận của chủ dự án; **không review lại mặc định** chỉ vì trang Kiến thức nâng cấp.
- Không tạo Core mới, không chạm `luyen-tap.md`, `tu-kiem-tra-chuong.md`, dữ liệu assessment/Ready/RD1, Firebase/Auth/học sinh, không sửa CSS/JS/architecture chung, không chuyển công việc sang RELEASE, không tự merge/deploy.
- Chỉ khi **phát hiện sai sót thực chất có bằng chứng** liên quan tới phần đã nghiệm thu: ghi rõ `AUTHORING_DEFECT / STANDARD_CONFLICT_HOLD` (nếu phù hợp), chỉ ra **file + bài/outcome/item + bằng chứng + ảnh hưởng**, và **xin quyết định mới của chủ dự án trước khi mở rộng sửa đổi**. Không âm thầm “tiện tay” sửa Core/Tự kiểm tra; nếu điều kiện chỉ là metadata/UI tương đương thì dùng phân loại Delta hiện hành, không phát động review học thuật lại toàn bộ.
- Từng lượt kiểm **file diff trong PR**: chỉ learner trang Kiến thức, SVG liên quan, và chứng cứ review scoped. Có thay đổi ngoài ranh giới này thì **HOLD và loại khỏi PR**, không tính là hoàn thành nhiệm vụ.

### Dấu xác nhận phạm vi mỗi checkpoint

`SCOPE=G11_G12_SGK_KNOWLEDGE_PAGES_ONLY`; `CORE_PRACTICE=FROZEN`; `CHAPTER_SELF_CHECK=FROZEN`; `EXISTING_NOTEBOOKLM_VERDICTS=PRESERVED`; `BRANCH=AUTHORING_ONLY`; `MERGE_DEPLOY=NOT_AUTHORIZED`.

**Nguyên tắc:** Hoàn thiện trang Kiến thức từng bài → tự kiểm → phản biện đúng phần thay đổi → sửa đúng phần chịu ảnh hưởng → khóa source scoped → tiếp tục bài kế tiếp. **Không đặt Core/Tự kiểm tra đã nghiệm thu thành công việc còn thiếu của đợt nâng cấp này.**

## Quy tắc vận hành AUTHORING: phân công phản biện và trao đổi với chủ dự án — owner 23/11/2026

**Đây là quy tắc làm việc của AUTHORING trong checklist hiện hành, không phải chuẩn học thuật thứ hai hoặc cổng nghiệm thu mới.** Áp dụng xuyên các cuộc trò chuyện, không để mỗi phiên lại thương lượng và nhắc lại cam kết tương tự.

- **ChatGPT/tác giả tự chịu trách nhiệm nguồn S1 và học liệu:** đọc trực tiếp SGK/SBT; kiểm nội dung, cấu trúc, số trang nếu cần, điều kiện toán, ví dụ, hình; biên soạn, tự giải, tự đọc như học sinh, sửa và quản lý source/SHA/receipt/handoff. Các chi tiết trang in, offset PDF, tên file, SVG inventory, Git SHA là **kiểm soát nguồn nội bộ của tác giả**, không phải nội dung mặc định giao NotebookLM phản biện.
- **NotebookLM là phản biện học thuật/sư phạm độc lập:** tập trung phát hiện **công thức/định lý/điều kiện/lời giải sai**, diễn giải thiếu bản chất hoặc khó hiểu, mạch kiến thức/đồ thị/hình/ví dụ thiếu thuyết phục, và khả năng **tự học độc lập**; nêu **vị trí + bằng chứng + mức ảnh hưởng + MINIMAL_DELTA** cụ thể. Không yêu cầu NotebookLM chứng minh mọi metadata/đếm hình/trang PDF, trừ khi sai lệch đó **thực sự** có nguy cơ dùng sai SGK, sai kiến thức hoặc sai snapshot.
- **Bảo toàn verdict và review đúng Delta:** Academic/PED PASS gắn với source đã review; metadata/câu chữ không đổi toán có chứng cứ tương đương thì tự đối soát/log, không đưa lại NotebookLM toàn bài/chương. Chỉ phản biện lại **đúng phần nội dung học thuật/sư phạm chịu ảnh hưởng** khi có thay đổi đáng kể hoặc lỗi có bằng chứng. Không tranh luận nhiều vòng về sai khác hành chính không ảnh hưởng chất lượng học tập.
- **Giao tiếp với chủ dự án chỉ khi có giá trị quyết định:** ưu tiên **sản phẩm đã sửa / kết quả kiểm chứng / blocker thực chất cần giải quyết / lựa chọn cần phê duyệt**, kèm link PR/Issue/commit và bước tiếp theo ngắn gọn khi hữu ích. Không dùng cuộc trò chuyện để lặp lời hứa `“từ nay tôi sẽ...”`, tự giải thích lại quy trình hoặc viết các báo cáo/trạng thái dài không tạo tiến độ.
- **Thực thi quy tắc bằng hành động, không bằng cam kết:** khi nhận góp ý về quy trình, cập nhật ngay **đúng checklist/quy tắc canonical hiện hữu** (nếu được phép), nêu file và commit đã đổi; không tạo checklist/chuẩn song song. Nếu chưa thể cập nhật, báo thẳng blocker một lần và đưa bản sửa chính xác. **Không tự merge/deploy.**

**Ngoại lệ:** thiếu/sai nguồn S1 thực chất, mâu thuẫn chuẩn có ảnh hưởng, bảo mật RD1 hoặc nguồn QA không khớp là blocker cần xử lý đúng cổng; không bỏ kiểm soát Q01–Q18/Q18 hay ghi PASS không bằng chứng. Trọng tâm công việc và trao đổi vẫn là **chất lượng học liệu để học sinh có thể tự học được**.

## Bốn điểm duy nhất quyết định công việc biên soạn

1. **SGK Kết nối tri thức** — nguồn kiến thức, thứ tự, tính đúng đắn, điều kiện và phạm vi.
2. **27 bài Toán 10 đã nghiệm thu** — mẫu biên soạn, cách giảng và cách trình bày Golden.
3. **Checklist dưới đây** — tác giả tự kiểm bài học, không phải khuôn để chép thành các đề mục.
4. **Tác giả** — trực tiếp viết, tự giải, đọc lại như học sinh và chịu trách nhiệm chất lượng toàn bài.

## Checklist cho từng bài

- [ ] **Đọc SGK:** Đọc hết bài đúng lớp/tập; hiểu mạch kiến thức, khái niệm, định nghĩa, tính chất, công thức, điều kiện và các ví dụ của SGK. Không phỏng đoán nội dung chưa đọc.
- [ ] **Đọc mẫu Toán 10:** Đọc toàn văn ít nhất một bài mẫu đã nghiệm thu phù hợp với loại kiến thức đang viết; làm theo phong cách và cấu trúc thực tế, không chỉ nhìn tên bốn tab.
- [ ] **Khám phá kiến thức:** Bao phủ **đủ và đúng thứ tự từng mục kiến thức chính của SGK (đối ứng 1:1)**, nhưng trình bày như một **mạch giảng văn xuôi**, dùng tình huống, quan sát, hình vẽ hoặc ví dụ trực quan đơn giản để dẫn dắt học sinh hiểu **vì sao, bản chất và cách hình thành** kiến thức đó. Mỗi mục có giải thích đủ để hiểu, không chỉ giới thiệu rồi bắt chuyển tab; chỉ chia tiểu mục khi thực sự chuyển mạch toán, không chia vụn theo mã nội bộ. Hình/bảng/đồ thị có hướng dẫn đọc sát nội dung và **có thể dùng chung nguồn hình với tab Kiến thức SGK**.
- [ ] **Kiến thức SGK:** Là **sổ tay kiến thức tự học**, có **đủ và đúng thứ tự từng mục kiến thức chính của SGK (đối ứng 1:1)**. Trình bày gọn gàng, rõ ràng, rành mạch nhưng **không cắt mất giải thích thiết yếu**; học sinh đọc riêng tab này vẫn hiểu định nghĩa/tính chất/định lý/công thức, ký hiệu, điều kiện, phạm vi, cách dùng. Hình minh họa có thể dùng chung nguồn với tab Khám phá nhưng phải có chú dẫn phù hợp ngay trong tab. Khung kiến thức phải đúng **ngữ nghĩa 3+1, màu/kiểu khung và nhãn chữ hiển thị** như quy tắc bên dưới; không chỉ phân biệt bằng màu. Một phát biểu chính thức phải ghi rõ nhãn tương ứng trước nội dung (ví dụ **Định nghĩa**, **Tính chất**, **Định lý**, **Quy tắc**, **Công thức cộng**) để học sinh hiểu và RELEASE kiểm đúng.
- [ ] **Ví dụ:** Mỗi ví dụ gồm **Đề bài → Phân tích → Lời giải → Kiểm lại** (Phân tích/Kiểm lại khi phù hợp). Giải thích lý do chọn cách ở **Phân tích**, không tạo mục thứ năm; các bước giải có suy luận, điều kiện và kết quả có kiểm chứng. Ví dụ đủ đa dạng, không chỉ thay số.
- [ ] **Vận dụng:** Đặt sau phần kiến thức cần áp dụng; học sinh làm trước, tự mở **Đối chiếu**, có **Kiểm lỗi** khi cần. Chỉ dùng các nhãn ấy; không hiện “Tự thử”, “Tự thử trước Core”, nhãn kỹ thuật hoặc hướng dẫn quản trị.
- [ ] **Lỗi thường gặp:** Tổng kết các ngộ nhận và sai lầm toán học thực chất của bài, chỉ rõ vì sao sai và cách khắc phục. Không lặp lại máy móc các Kiểm lỗi cục bộ.
- [ ] **Tác giả tự kiểm:** Tự đối chiếu **từng mục kiến thức chính của SGK ↔ tab Khám phá kiến thức ↔ tab Kiến thức SGK** theo đúng thứ tự và nội dung; kiểm rằng hai tab không thiếu mục nào và mỗi tab tự đủ đúng vai trò. Tự giải lại từng Ví dụ/Vận dụng, kiểm điều kiện/công thức/đáp án/hình, sau đó đọc **toàn bộ bốn tab theo thứ tự như một học sinh học lần đầu**. Trả lời đầy đủ **5 câu hỏi tự kiểm khung kiến thức** bên dưới, đối chiếu từng phát biểu SGK với nhãn, loại khung, điều kiện và màu/kiểu trình bày. Loại bỏ lời thừa, mục lặp, ngôn ngữ máy móc, nhãn lệch Golden; tự sửa đến khi bài giảng thực sự dễ học.

### Đối ứng mục kiến thức SGK ↔ hai tab (bắt buộc khi biên soạn)

- **Một mục SGK → một mục chính tương ứng trong mỗi tab, theo cùng thứ tự.** SGK có **4 mục kiến thức chính** thì tab **Khám phá kiến thức có đủ 4 mục chính** và tab **Kiến thức SGK có đủ 4 mục chính**; SGK có số mục khác thì hai tab theo đúng số mục đó. **Không được bỏ, gộp mất hoặc tự thêm mục kiến thức chính** khiến học sinh không đối chiếu được với SGK. Tên mục ở tab Khám phá có thể diễn đạt gợi mở, còn tab Kiến thức SGK ưu tiên tên khoa học rõ nghĩa, sát SGK; cả hai phải xác định được mỗi mục tương ứng với mục nào của sách.
- **Khác nhau ở cách giảng, không khác phạm vi kiến thức:** **Khám phá kiến thức** giải thích bằng văn xuôi liên tục, tình huống, suy luận, hình hoặc ví dụ trực quan đơn giản để học sinh tự hình thành hiểu biết. **Kiến thức SGK** giống **sổ tay kiến thức**: phát biểu gọn, mạch lạc, định nghĩa/tính chất/công thức, điều kiện và ghi nhớ quan trọng đặt đúng nhãn/khung, vẫn đủ rõ để học độc lập. Không để người học bắt buộc sang tab khác mới hiểu phần kiến thức chính của mục đó.
- **Không chia vụn:** Đối ứng theo **mục kiến thức chính thực sự trong SGK**, không đồng nhất với mỗi outcome/mã nội bộ, mỗi công thức con, Vận dụng hay mỗi đoạn giải thích. Bên trong một mục, tác giả có thể dùng các đoạn liên kết tự nhiên và tiểu mục cần thiết như các bài Golden đã nghiệm thu; không ép số đoạn, ví dụ hay tiểu mục phụ phải giống hệt SGK.

**Làm rõ ưu tiên của chủ dự án 23/11/2026 — chất lượng Khám phá chiếm khoảng 50% khi đánh giá học liệu SGK:** Đây là **trọng tâm đọc và phản biện sư phạm**, không phải một chuẩn mới, quota hay công thức chấm điểm có thể bù trừ lỗi toán. **SGK có mục kiến thức chính A thì tab Khám phá có một mục tương ứng A**: chọn linh hoạt tình huống/ví dụ trực quan, văn xuôi dẫn dắt, hình/bảng/đồ thị, suy luận giải thích bản chất hoặc ứng dụng thực tế khi thật sự hữu ích; có thể phối hợp nhiều cách, không ép một khuôn cho mọi mục. Sáu câu hỏi nội bộ (*vì sao cần học, dẫn dắt khám phá, hiểu bản chất, hình ảnh trực quan, tự suy nghĩ, tự học độc lập*) **chỉ dành cho tác giả và NotebookLM phản biện**, **KHÔNG biến thành sáu tiêu đề/đề mục xuất hiện trong tab Khám phá**. Tên mục và thứ tự phục vụ chính **nội dung kiến thức SGK**, không theo tên tiêu chí, mã outcome hay checklist. Ưu tiên lời giảng tự nhiên và đúng trọng tâm: học sinh lần đầu có thể hiểu kiến thức ấy hình thành như thế nào và vì sao đúng, thay vì chỉ đọc lại định nghĩa/công thức trong SGK.
- **Hình dùng chung:** Hai tab **được dùng chung một hình/bảng/đồ thị canonical** khi phù hợp (không cần tạo hai file hình); nhưng mỗi nơi phải có chú dẫn đọc và giải thích đúng chức năng: Khám phá dùng để dẫn dắt/quan sát, Kiến thức SGK dùng để minh họa/tóm tắt phát biểu. Không để hình thay lời giải thích bắt buộc.
- **Câu hỏi kiểm tra bắt buộc:** “SGK có mấy mục kiến thức chính, tên và thứ tự từng mục là gì? Tab Khám phá có đủ đúng từng mục không? Tab Kiến thức SGK có đủ đúng từng mục không? Hai tab khác cách trình bày nhưng có cùng phạm vi và đều giúp học sinh tự học được không?” Nếu chưa đạt, giữ `TỰ KIỂM CẦN SỬA`.

### Kiểm soát hình minh họa bắt buộc khi nâng cấp trang Kiến thức — quyết định chủ dự án 23/11/2026

**Quy tắc tái sử dụng trước, bổ sung sau:** Tác giả **không tự vẽ lại toàn bộ hình của bài**. Trước khi biên soạn/nâng cấp từng mục SGK và từng phần Ví dụ/Vận dụng cần hình, **phải rà hình/bảng/đồ thị hiện có** trong trang bài cũ và thư viện asset canonical của repo, **mở/đọc nội dung hình** để đối chiếu đúng đối tượng, ký hiệu, tính chất, điều kiện và ý cần giảng. Hình đã có **đúng và đủ** thì **dùng lại đúng file**, không tạo bản sao hoặc thay chỉ vì muốn đồng bộ phong cách. Hình hiện có sai, thiếu hoặc không giúp người học hiểu điểm bắt buộc mới được **bổ sung hoặc đề xuất sửa trong đúng phạm vi trang Kiến thức**, và phải nêu lý do học thuật cụ thể.

**Phạm vi ưu tiên theo tab (chủ dự án xác nhận 23/11/2026):**
- **Tab Khám phá kiến thức:** Đây là nơi **ưu tiên** hình, bảng, đồ thị để quan sát và hình thành kiến thức; kiểm nhu cầu minh họa theo từng mục SGK, dùng lại hình phù hợp đã có.
- **Tab Kiến thức SGK:** Đây cũng là nơi **ưu tiên** hình, bảng, đồ thị để minh họa định nghĩa/tính chất/công thức và hướng dẫn đọc; có thể dùng chung **đúng một asset canonical** với Khám phá khi phù hợp.
- **Tab Ví dụ:** **Không bắt buộc có hình hoặc bảng**; chỉ thêm khi thực sự cần cho đề bài, phân tích, lời giải, bước dựng hay để tránh học sinh hiểu sai. Ví dụ giải thích đầy đủ bằng chữ và phép toán thì **không thêm hình để trang trí**.
- **Tab Lỗi thường gặp:** **Không bắt buộc có hình hoặc bảng**; chỉ thêm khi so sánh đúng–sai, phát hiện ngộ nhận từ hình hoặc sửa lỗi trực quan **giúp hiểu rõ hơn**. Không tạo hình cho đủ tab.
- **Cả bốn tab:** kiểm khi có hình/bảng/đồ thị và mọi lời dẫn tham chiếu hình; **không đặt quota số hình theo tab hay theo bài**. Tab Ví dụ/Lỗi thường gặp không có hình vẫn **đạt** nếu đã tự kiểm thấy không cần và không có lời dẫn tới hình vắng mặt. Nếu một đoạn giảng ở bất kỳ tab nào **cần hình để hiểu** thì phải có hình đúng tại chỗ đó.

**Tự kiểm bắt buộc theo từng mục/ý giảng, không chỉ đếm số hình:**

- [ ] **Chỗ nào cần hình?** Đọc SGK S1 và bốn tab như học sinh lần đầu; đánh dấu các điểm cần quan sát để hiểu đối tượng, vị trí, sự biến thiên, cấu trúc, bước dựng, điều kiện hay cách giải. Không để lời giảng đòi quan sát một hình mà không thể nhìn thấy hình đó.
- [ ] **Có hình phù hợp sẵn chưa?** Kiểm file hình/đồ thị hiện có **trong repo và bài gốc**, mở xem/đọc SVG thực tế, so SGK, các ký hiệu, dữ liệu, nội dung toán và thông điệp sư phạm. **Có và phù hợp → bắt buộc tái sử dụng canonical**; thiếu/chưa đủ/sai → **tạo hoặc sửa đúng hình cần thiết**, không làm lại cả bộ.
- [ ] **Đúng chỗ chưa?** Đặt mỗi hình **ngay cạnh đoạn giảng, phát biểu, Ví dụ hoặc Vận dụng mà hình hỗ trợ**, theo đúng mạch giải thích. Không dồn hình về đầu/cuối tab hay đặt ở mục không liên quan. Hai tab có thể dùng chung một asset canonical nhưng từng vị trí phải có chú giải phục vụ vai trò riêng, không phải hai file nhân bản.
- [ ] **Hướng dẫn đọc hình phải có hình thật:** Với **mọi** câu kiểu “nhìn hình”, “quan sát hình”, “hình bên”, “đọc hình”, “hướng dẫn đọc hình” hoặc figcaption dẫn chiếu, phải có **hình đúng nội dung hiện diện ngay ở khu vực đó** và đường dẫn asset hợp lệ. **Tuyệt đối không có chú thích/hướng dẫn đọc hình mồ côi**, hình sai đối tượng, hình chỉ có trong tab khác, hoặc tên file tồn tại nhưng nội dung hình không khớp.
- [ ] **Kiểm kỹ thuật và tính dễ đọc:** Từng tham chiếu tới file thật; SVG được kiểm nội dung toán, nhãn/trục/đơn vị, alt, figcaption, tỷ lệ và khả năng đọc; mã Markdown/HTML không gây mất hình. Phân biệt **QA source/đường dẫn do AUTHORING tự kiểm** với **QA ảnh render/light–slate/responsive của RELEASE**; không tự nhận đã kiểm trực quan trình duyệt nếu chưa có bằng chứng.
- [ ] **Kiểm toàn bài trước tự xác nhận:** Lập kiểm kê nội bộ gắn từng **mục SGK/ý cần hình ↔ asset tái sử dụng hoặc hình mới ↔ vị trí dùng ↔ chú giải đọc hình**, rà lại **cả bốn tab**. Có mục cần hình mà chưa có, hình đặt sai chỗ, hướng dẫn đọc hình không có hình tương ứng, hoặc asset sai → **`TỰ KIỂM CẦN SỬA`**, chưa được ghi `TỰ KIỂM ĐẠT` cho bài. Chỉ tiếp tục sau khi bổ sung/sửa và tự kiểm lại; **không bắt buộc báo cáo thành bảng cho chủ dự án**.

**Biên giới:** Chỉ chỉnh trang Kiến thức SGK và asset phục vụ trực tiếp bài đó theo Issue #1039; giữ nguyên Core/Luyện tập, Tự kiểm tra, ngân hàng đánh giá và mọi kết quả NotebookLM đã nghiệm thu. Quy tắc này là **hướng dẫn thực thi của checklist hiện hành**, không tạo thêm chuẩn học thuật hay quota số hình.

### Quy tắc phân loại và trình bày khung kiến thức 3+1 (thuộc checklist hiện tại)

**Nguồn hiệu lực:** cùng chuẩn `SLM-THPT-QUALITY-ONE v3.2.0`, mục **X-F.3**, không tạo loại khung/chuẩn mới. Phân loại **theo bản chất phát biểu trong SGK KNTT**, không theo từ ngữ tình cờ trong tiêu đề. **Phải đồng thời đúng: nội dung toán + nhãn chữ đọc được + loại khung + màu/kiểu hiển thị.** Màu hỗ trợ nhận biết, **không thay thế nhãn**; tác giả ghi nhãn rõ trong nguồn để nhánh RELEASE phát hành/QA đúng vai trò.

| Loại | Màu/kiểu theo Golden | Nhãn bắt buộc hiện trước nội dung (chọn đúng bản chất) |
|---|---|---|
| `FORMAL_DEFINITION` | **Xanh ngọc** (nền `#e8f7f2`, viền `#a9dccc`, cạnh `#087d69`) | **Định nghĩa** hoặc **Khái niệm**; phát biểu đầy đủ đối tượng/phép toán, ký hiệu và điều kiện. |
| `FORMAL_RULE` | **Xanh lam nhạt** (nền `#eaf1fc`, viền `#a5bee5`, cạnh `#4879c2`) | **Định lý**, **Tính chất** hoặc **Quy tắc**; ghi đúng loại SGK, giả thiết và giới hạn áp dụng. |
| `MANDATORY_RECAP` | **Vàng nhạt** (nền `#fff3d5`, viền `#eacb7c`, cạnh `#c49a37`) | **Kiến thức cần nhớ** khi thực sự cần tổng kết kiến thức bắt buộc; không tạo hộp ghi nhớ cho đủ số lượng. |
| `KEY_FORMULA` | **Viền trung tính, nền trắng/trong suốt**, không tô nền | **Công thức** + tên nhóm rõ nghĩa nếu có (ví dụ **Công thức cộng**, **Công thức nhân đôi**); công thức chính xác, điều kiện đặt liền kề. |

- **Chữ là bắt buộc:** Không dựa riêng vào màu để học sinh hoặc RELEASE đoán vai trò. Ví dụ phát biểu là định nghĩa thì phải ghi **“Định nghĩa”**; là tính chất thì ghi **“Tính chất”** ngay trước phát biểu, không chỉ dùng class/CSS. Với công thức, ghi rõ tên nhóm công thức; không gắn nhãn “Định nghĩa/Tính chất” cho công thức chỉ để có màu.
- **Không ép quota khung:** SGK không có loại nào thì không tạo loại đó. `Ghi nhớ`, `Lưu ý`, `Nhận xét` thông thường là nhãn in đậm trong văn xuôi, không tự động thành hộp vàng. Không đóng khung phép biến đổi trung gian; không nhân đôi công thức đã rõ trong khung định nghĩa/quy tắc.
- **Bảo toàn vai trò giữa hai nhánh:** AUTHORING xác định phát biểu, nhãn và loại khung đúng theo SGK và mẫu Golden; RELEASE kiểm hiển thị/màu/độ tương phản tại light–slate và thiết bị mà **không phải suy đoán ngữ nghĩa chỉ từ CSS**. Không tự đổi CSS chung hay theme Golden đã nghiệm thu.

### Năm câu hỏi tác giả bắt buộc tự trả lời sau khi viết xong tab Kiến thức SGK

1. **SGK có những loại phát biểu kiến thức chính thức nào:** định nghĩa, khái niệm, định lý, tính chất, quy tắc, công thức?
2. **Đã trích đủ và chính xác từng phát biểu, điều kiện áp dụng chưa?**
3. **Đã đặt chúng vào đúng loại khung theo quy tắc màu 3+1 chưa?**
4. **Có tự biến công thức thành định nghĩa/tính chất, hoặc tự tạo khung ghi nhớ không cần thiết không?**
5. **Sau khi biên soạn, học sinh có nhận biết đúng bản chất kiến thức qua cả nhãn chữ và màu/kiểu khung không?** Không chỉ nhìn màu: **Định nghĩa phải có chữ “Định nghĩa”, Tính chất phải có chữ “Tính chất”, Định lý/Quy tắc/Công thức cũng phải có nhãn tương ứng trước nội dung**; nguồn đủ rõ để RELEASE giữ đúng nhãn–loại–màu khi phát hành chưa?

**Điều kiện tự kiểm:** Chưa trả lời thỏa đáng cả năm câu trên hoặc nhãn–loại–màu không khớp SGK thì ghi `TỰ KIỂM CẦN SỬA`, không ghi `TỰ KIỂM ĐẠT`. Nếu đủ, tác giả tự xác nhận `TỰ KIỂM ĐẠT` cho đúng source/scope và **tiếp tục bài kế tiếp mà không chờ chủ dự án xem**. `TỰ KIỂM ĐẠT` **không tự động là** `CONTENT_READY`, QA RELEASE hoặc quyền merge/deploy; các hồ sơ/handoff Q18 hậu trường vẫn phải đủ khi chuyển trạng thái theo chuẩn đã có.

## Hồ sơ hoàn thành ngắn gọn cho mỗi bài

- **Bài:** Lớp – chương – số bài – tên bài.
- **Đã đọc:** Bài SGK KNTT; bài Toán 10 đã dùng làm mẫu.
- **Tác giả xác nhận:** Từng mục kiến thức chính SGK đã đối ứng đủ trong cả tab Khám phá và tab Kiến thức SGK; hai tab tự đủ theo đúng vai trò; kiến thức đúng và đủ; bốn tab dễ học; Ví dụ/Vận dụng đã tự giải kiểm; nhãn/khung đúng mẫu; những điểm chưa đạt (nếu có).
- **Trạng thái:** `CHƯA LÀM` / `ĐANG VIẾT` / `TỰ KIỂM CẦN SỬA` / `TỰ KIỂM ĐẠT` / `CONTENT_READY` (chỉ khi đủ nguồn/receipt/handoff theo chuẩn). Không có cổng mặc định “chờ chủ dự án xem từng bài” ở AUTHORING.

## Giới hạn

- **Không** dùng các Draft PR/bản thảo/hồ sơ nghiệm thu của đợt nâng cấp đã hủy làm tư liệu học thuật hay mẫu trình bày. Không lấy mã Q/PED/D/FirstTry, số mục/câu hoặc kết quả CI làm khuôn viết bài hay bằng chứng bài học tốt.
- Chỉ chỉnh nguồn học liệu trong phạm vi được giao khi chủ dự án cho tiếp tục. **Không tự merge, phát hành hay can thiệp website.**
- Giữ nguyên những thành phần kỹ thuật và dữ liệu không thuộc nhiệm vụ biên soạn (ngân hàng câu hỏi, đáp án/rubric đã bảo vệ, ID canonical, đánh giá kín, dữ liệu học sinh). Chúng không quyết định cách viết bốn tab.

**Không có một checklist biên soạn thứ hai cho phạm vi này.**
