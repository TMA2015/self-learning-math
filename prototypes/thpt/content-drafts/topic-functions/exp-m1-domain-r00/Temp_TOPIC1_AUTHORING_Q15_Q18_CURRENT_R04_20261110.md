# AUTHORING checkpoint Q15/Q18 R04 — Chuyên đề 1 M1–M3 + M6 (10/11/2026)

**STATE:** \`SOURCE_QA_SPOT_PASS\` · \`Q15_SEMANTIC_CLEANUP_DONE_FOR_INTERNAL_OVERLAP\` · \`FULL_Q15_BANK_HOLD\` · \`INDEPENDENT_REVIEW_PENDING\` · \`REAL_BROWSER_RENDER_PENDING\` · \`CONTENT_READY=NO\`.  
**Lane:** AUTHORING · **Repo:** \`TMA2015/self-learning-math\` · **Nhánh:** \`authoring/topic-functions-m1-domain-depth-d5-20261110\` · **Draft PR:** #801 · **Chuẩn:** \`SLM-THPT-QUALITY-ONE/1.2.0\` Q01–Q18.

## 1. Tại sao phải giảm số câu thay vì tăng?

Trong bản tạm trước đó có **17 ứng viên mới**, nhưng ba cặp có thể khiến học sinh làm lại **cùng một nhiệm vụ suy luận** với con số hoặc bối cảnh khác nhau:

1. \`DRAFT-T1-M1-APP03\`: so sánh \(\sqrt{5-x}\) với \(1/\sqrt{5-x}\), chỉ khác tham số và mức câu hỏi so với \`DRAFT-T1-M1-WR01\) (phản biện căn ở mẫu, cần chứng minh dấu >0). **Loại APP03** khỏi candidate list; giữ WR01 yêu cầu giải thích và rubric.
2. \`DRAFT-T1-M2-APP04\`: nhiệt độ đo phút 0/4, nội suy 25°C, cùng một kiểu phản biện dữ kiện–giả định với \`DRAFT-T1-M2-WR01\` (vận tốc tại phút 0/10, nội suy dưới giả định tăng đều). **Loại APP04**, giữ WR01 có đầy đủ phân biệt dữ kiện và dự báo.
3. \`DRAFT-T1-M3-APP06\`: tính \( |f(-2)|\) so với \(f(|-2|)\), về bản chất lặp ngay **Vận dụng Kiến thức M3** và \`DRAFT-T1-M3-WR02\` (hình, đầu vào/đầu ra, giá trị và nghiệm). **Loại APP06**, giữ Written nhiều bước và ví dụ Kiến thức đã có.

Không đưa các câu đã loại vào Topic Readiness hoặc mint ID mới, cũng không tạo phiên bản riêng trong bank SGK/Topic. Khi cần một câu tương đương đã có, chỉ dùng một canonical item_id và thêm placement/role; không nhân bản key/rubric.

**Current candidate:** **14 item tạm** = **10 APP + 4 Written** (M1: 5 APP + 2 Written; M2: 2 APP + 1 Written; M3: 3 APP + 1 Written). M6 giải thích mới và Vận dụng tại Kiến thức **không** đăng ký item canonical riêng. Source IDs provisional unique 14/14; chưa đạt chứng cứ semantic uniqueness **toàn ngân hàng**.

**Hai file chính hiện tại có SHA:**
- \`Temp_TOPIC1_M1_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\`, blob \`4518063fcae7535d43461e52dd9a831f6061c0ae\`
- \`Temp_TOPIC1_M2_M3_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\`, blob \`7ab8656bc05c4feb020809f9ffdc215585bc8166\`
- Ma trận \`Temp_TOPIC1_M1_M3_REUSE_AND_NEW_ITEM_MATRIX_R00_20261110.md\`, blob \`d2f6fbb521f144a66b7a94667fb5ca74e056fc71\`.

## 2. Tự kiểm 13 trường hợp toán còn lại bằng SymPy

Đã chạy trực tiếp trong môi trường tác giả 13 phép đối chiếu độc lập sau khi cắt câu trùng, **13/13 đạt**:
- M1 APP02: rút gọn phân thức chỉ hợp lệ khi x≠1; APP04: chi phí đúng cho n=1..6; APP05: căn+mẫu, x=−3/0/3; APP06: căn có điểm biên −2; WR01: điều kiện căn ở mẫu x>1; WR02: thiếu duy nhất giá trị \(\sqrt2\) do bỏ x=1.
- M2 APP05: giá trị p(0)=2, p(1)=1, p(2)=3; APP06: r(−0,5)=0,5 >r(0)=−2; WR01: nội suy dưới giả định cho 15 km/h.
- M3 APP07: nghiệm \(f(x)=0\) là −3,1 nhưng \(f(|x|)=0\) chỉ ±1; APP08: hàm khi a=0 có nghiệm 2/3; APP09: miền hai đoạn rời cho m(0)=m(4)=1 và m(1)=m(3)=4; WR02: g(2)=1,h(2)=−1,g(−2)=15,h(−2)=−1.

**Không phải** chứng cứ QA mọi ký tự/đáp án hay Academic/PED PASS. Kiến thức M1–M3/M6 và các điều kiện trừu tượng còn cần reviewer độc lập nếu delta học thuật mới.

## 3. Nguồn và hình

- **R18 canonical M1–M7 đã PASS:** Git blob \`2340ea4975b37a457363eea59dd617070934983c\`, **giữ nguyên**; không review lại phần bất biến.
- **S1/SBT:** G10 T2 B15 SGK in5–10/PDF6–11, B16 in11–18/PDF12–19; G11 T2 B31 SGK in81–87/PDF82–88. SBT và SHA256 PDF đã ghi trong hai source receipt; tuyệt đối không tự suy trang in từ PDF index.
- **D5 M1–M3:** 4 SVG, 3 HTML lab; **M6:** một HTML lab f/f′ hai đồ thị, chạm vùng biên phải đổi thang để M/N vẫn hiển thị. Logic M6 36/36, tọa độ mock 12/12 sau sửa, **không** thay thế Chromium/browser render QA. Các HTML đều \`PUBLIC_FORMATIVE_ONLY\`, không gắn theo dõi Mastery.
- **Bản source-review duy nhất cho Topic 1:** \`Temp_TOPIC1_ALL_NEW_DELTA_M1_M3_M6_NOTEBOOKLM_ONE_SOURCE_R04_20261110.md\` khi được khóa sau checkpoint này, sẽ **thay thế toàn bộ transport R02/R03** trong HEAD. Review đúng M1–M3 và M6 bổ sung, không phải M4–M7 đã PASS.
- **Q15:** Đã đọc nguồn public B15 (6), Topic G10 R01 (6), hai Written B15; những câu mới còn phải so với các version/item khác và có reviewer independent verdict trước khi gán ID thực. Mô hình D5 mới không tự trở thành item RD1.

## 4. Các chặn còn lại và quyết định AUTHORING

- \`Q01–Q14 / Q18\`: M1–M3/M6 có phần **DELTA_C** thay giải thích sư phạm/đề, cần **targeted independent Academic + PED review**, đúng 5 Permanent Sources v2.1, đánh giá theo outcome và SOURCE_RECEIPT. Không tự tuyên bố PASS chỉ từ SymPy hay bộ Notebook.
- \`Q15\`: chốt map \`item_id ↔ outcome_id ↔ placement ↔ role ↔ content_version ↔ sourceSHA\` cho **chỉ các câu thực sự cần canonical mới**; các câu bị loại không được mint ID.
- \`Q16\`: bảo vệ 30 RD1 kín, không dùng câu public đã lộ lời giải làm readiness độc lập, không ghi Skill Mastery từ lab/Practice.
- \`Q07/AP3\`: static/D5 mock source đã kiểm chọn lọc, nhưng **real-browser pixels, responsive, touch, keyboard/a11y vẫn PENDING**. Chỉ có thể bàn giao mới sau khi cổng thuộc phạm vi đã được nghiệm thu; RELEASE chịu tích hợp website.
- \`Q17\`: đúng ba mục Kiến thức/Luyện tập/Tự kiểm tra; các chặng/mô hình nằm trong Kiến thức, không lập Core Topic.
- \`V2_TOPIC_INTAKE_#790\`: hiện còn OPEN; không \`ready/\`, manifest, REGISTER, merge hoặc deploy.

**NEXT:** khóa source-review R04 đúng Git blob, review độc lập targeted và xử lý MINIMAL_DELTA nếu cần; không mở lại PASS R18.
