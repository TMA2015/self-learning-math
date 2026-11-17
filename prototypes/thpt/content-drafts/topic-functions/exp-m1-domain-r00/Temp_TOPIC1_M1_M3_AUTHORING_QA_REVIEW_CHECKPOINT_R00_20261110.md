# AUTHORING checkpoint R00 — Chuyên đề 1 M1–M3: nguồn mới, D5 và luyện tập (10/11/2026)

**LANGUAGE:** Vietnamese · **LANE:** AUTHORING · **STATE:** \`DRAFT_UNREVIEWED\` · **DELTA:** \`DELTA_C_ACADEMIC_MATERIAL\` · **CONTENT_READY:** NO · **RELEASE AUTHORIZATION:** NO.

## A. Nguồn đã được khóa, không thay đổi

- Chuyên đề 1 canonical R18: \`prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, Git blob **\`2340ea4975b37a457363eea59dd617070934983c\`**, Draft PR #782.
- Nội dung M1–M7 R18 và private RD1 30 câu đã có independent Academic/PED PASS theo nguồn/receipt cũ, **không** tái tuyên bố PASS cho file R00.
- Nhánh này phát triển từ nguồn PR #782 và thêm **một thư mục tách biệt** \`exp-m1-domain-r00/\`. Không sửa R18, ngân hàng item, SGK, website, Golden UI hoặc Firebase.
- S1 trực tiếp được kiểm tra trong các lượt AUTHORING trước và **kiểm tra lại toàn dải trang ngày 10/11/2026**: SGK KNTT Toán 10 Tập 2, Bài 15 (in 5–10 / PDF 6–11) cho M1–M2 và Bài 16 (in 11–18 / PDF 12–19) cho M3. Tham khảo NotebookLM 12/22 chỉ là nguồn ý tưởng, không có hiệu lực thay S1.

## B. Sản phẩm thực tế trên nhánh này

| Mạch | Học liệu bổ sung | D5 | Luyện tập ứng viên |
|---|---|---|---|
| M1 · Hàm, miền, tập giá trị | một file Markdown đầy đủ: quy tắc đơn trị, miền công thức và miền thực tế, căn/mẫu, điểm biên, ví dụ chứng minh tập giá trị | 1 SVG giao hai điều kiện + 1 lab HTML chọn x | 6 APP + 2 WR = **8** |
| M2 · Đọc dữ kiện/đồ thị | một file Markdown: phép đo vs nội suy, tập vào rời rạc, nhánh tại điểm mốc, đồng biến trên từng miền | 1 SVG điểm rỗng/đặc + 1 lab HTML đọc x tại mốc 1 | 3 APP + 1 WR = **4** |
| M3 · Parabol | một file Markdown: \(|f(x)|\) vs \(f(|x|)\), miền biến đổi, \(a=0\), tối ưu trên miền con | 1 SVG so sánh 2 khung cùng tỉ lệ trục + 1 lab Canvas hệ số a/b/c | 4 APP + 1 WR = **5** |
| **Tổng** | **3 Markdown kiến thức** | **3 SVG + 3 HTML lab** | **17 DRAFT item** |

Tổng thư mục sau bổ sung ma trận dùng chung có **14 file**, tính cả 2 hồ sơ QA và 1 ma trận existing/reuse. Ma trận được ghi ở \`Temp_TOPIC1_M1_M3_REUSE_AND_NEW_ITEM_MATRIX_R00_20261110.md\`. Nội dung student-facing không hiển thị metadata QA và không được dùng làm trang Tự kiểm tra kín. Các câu có đáp án mở \`<details><summary>Đối chiếu</summary>\` chỉ thuộc Kiến thức/Luyện tập.

## C. Kết quả QA sơ bộ có chứng cứ

1. **GitHub readback:** đã fetch 12/12 file từ nhánh và xác minh blob SHA từng file. R18 canonical blob **vẫn chính xác** \`2340ea4975b37a457363eea59dd617070934983c\`.
2. **Q15 sơ bộ:** 17 \`DRAFT-T1-...\` ID trong hai file practice đều **duy nhất nội bộ**; chưa có ID nào trùng dạng chuỗi trong nguồn R18. Đây **không** có nghĩa bài/đề/hướng giải khác nhau về nội dung. Bài APP07 M1 đã bỏ vì trùng phương pháp/ý nghĩa với canonical TOP-FUNC-P05; WR02 M1 đã đổi thành bài miền rời rạc. Các ứng viên khác lặp đúng ví dụ Vận dụng đã được đổi sang bài về bước nhảy tại 0, miền hai đoạn rời nhau, biên căn khác số và tập giá trị khi đỉnh bị loại; vẫn phải đối chiếu stem/key/rubric toàn thư viện SGK/Topic (12/12 item G10 đã được truy xuất trong bước QA 10/11, Written/Anchor vẫn HOLD).
3. **Toán M1:** \(h(x)=\sqrt{4-x^2}/(x-1)\) có \(D=[-2,1)\cup(1,2]\), \(h(-2)=0,\ h(0)=-2,\ h(2)=0\), x=1/3 bị loại. \(p(x)=(x-1)^2+2\) trên \([0,2]\) có tập giá trị \([2,3]\) (chứng minh tính đạt mọi giá trị bằng \(x=1+\sqrt{y-2}\)).
4. **Toán M2:** \(f(x)=x+1\) khi x<1, bằng 3 khi x≥1: \(f(1)=3\), vòng rỗng \((1;2)\), điểm đặc \((1;3)\). Bài mới \(r(x)=x+1\) khi x<0, \(r(x)=x-2\) khi x≥0: \(r(-0{,}5)=0{,}5>r(0)=-2\) — phản ví dụ cho việc suy tăng toàn miền.
5. **Toán M3:** với \(f(x)=(x-2)^2-1\), \(f(-2)=15,\ |f(2)|=1,\ f(|-2|)=-1\); \(|f|=0\) có nghiệm 1,3, còn \(f(|x|)=0\) có nghiệm ±1,±3. Nếu \(a=0\) thì không có đỉnh parabol. Với \(m(x)=5-(x-2)^2\), \(D=[0,1]\cup[3,4]\), GTLN là 4 tại x=1 hoặc x=3; GTNN là 1 tại x=0 hoặc x=4.
6. **D5 source static:** các SVG có \`title\` / \`desc\`, không \`foreignObject\`, không script. HTML có JS inline, không CDN/fetch/script ngoài; một nguồn có logic x<1 và x≥1; lab M3 có nhánh phân biệt a=0. Cả ba hình theo hướng sáng, nét và điểm nhỏ, không tô khối đen.
7. **Chưa làm:** browser runtime/keyboard/touch QA cho **ba lab mới trên đúng file GitHub**, full accessibility audit; đối soát SBT/trang printed/PDF toàn scope và item-bank semantic duplicate QA; độc lập Academic/PED NotebookLM verdict; QA website/mobile thật. Không được nâng các kiểm tra tĩnh thành PASS phát hành.

## D. Các điều kiện chặn, theo chuẩn duy nhất Q01–Q18

- **Q01–Q02:** kiểm outcome/in-S1 và các ví dụ mở rộng, bảo đảm không đổi phạm vi bắt buộc hay ép khái niệm của lớp cao vào lớp 10. Cả hai hành trình SGK/Topic vẫn độc lập.
- **Q03–Q08:** nội dung có điều kiện, định nghĩa, lý do chọn cách, ví dụ, D5 SVG/HTML, bài viết mới; cần reviewer xác nhận chiều sâu theo **từng outcome** chứ không chỉ theo số câu.
- **Q09–Q14:** giải thích đủ lời, hình gắn sát ý, Vận dụng/Đối chiếu tự mở, hỗ trợ lỗi thường gặp. Tên mục đã theo owner UX quyết định 10/11/2026 nhưng đây **không** là thay đổi chuẩn gốc.
- **Q15:** đã dẫn lại **10 outcome và 11 tham chiếu item existing** của M1–M3 từ nguồn R18 trong ma trận `Temp_TOPIC1_M1_M3_REUSE_AND_NEW_ITEM_MATRIX_R00_20261110.md`; đây là danh mục nguồn dùng chung, **không** sao chép câu/rubric. Vẫn phải so trùng ngữ nghĩa đề/đáp án/rubric với R18/SGK/Topic trước khi gán canonical ID. Nếu trùng, thêm placement, không đăng ký câu hai lần.
- **Q16:** RD1 vẫn kín, không hint/key/đúng-sai trước Final Submit và không ghi Mastery từ Practice, Written tự đối chiếu hoặc lab.
- **Q17:** ba mục người học \`Kiến thức / Luyện tập / Tự kiểm tra\` được giữ, bản đồ/chặng nằm trong Kiến thức; không thêm Core Topic.
- **Q18:** nội dung \`DELTA_C\` mới chỉ được khóa snapshot/receipt khi reviewer độc lập chấp nhận Academic+PED theo đúng nguồn và standard; không suy rộng PASS của R18.

**Kết quả nội bộ:** \`STATIC_MATH_SPOT_QA=PASS_FOR_CASES_TESTED\`; \`SVG_STATIC_CHECK=PASS\`; \`BROWSER_QA=PENDING\`; \`CROSS_BANK_SEMANTIC_Q15=PENDING\`; \`INDEPENDENT_REVIEW=PENDING\`; \`CONTENT_READY=NO\`.

## E. Prompt NotebookLM — sử dụng khi có gói review

> Hãy phản biện độc lập **chỉ phần bổ sung AUTHORING R00 cho M1–M3**, gồm 3 Markdown Kiến thức, 2 Markdown Luyện tập, 3 SVG và 3 HTML lab, với SGK Toán 10 KNTT tập 2 (Bài 15–16) và đúng 5 Permanent Sources THPT v2.1. Kiểm tra Q01–Q18 theo từng mạch/outcome/item, đặc biệt điều kiện miền xác định, dữ liệu và nội suy, điểm đặc/rỗng, phân biệt \(|f(x)|\) với \(f(|x|)\), \(a=0\), các miền tối ưu và tính đúng của hình/mô hình. Trả riêng Academic verdict, PED verdict, P0/P1/P2, MINIMAL_DELTA cùng nguồn/receipt rõ ràng; **không yêu cầu review lại canonical R18 bất biến**. Các item DRAFT có thể trùng họ dạng với ngân hàng có sẵn nên cần chỉ ra câu nào thực sự thêm chiều sâu, câu nào chỉ nên dùng placement chung; không tuyên bố \`CONTENT_READY\` hoặc cấp quyền phát hành.

**Handoff review:** trước khi gửi NotebookLM cần đóng ZIP \`Temp_*.zip\` thật khi từ 3 file trở lên, mỗi file bên trong bắt đầu \`Temp_\`, kèm prompt 3–6 câu; tránh JSON làm nguồn review. Chưa gửi người dùng tải ZIP vì người dùng đã yêu cầu **không phải tự quản lý các gói kỹ thuật**.

**NEXT:** semantic Q15 đối chiếu toàn bank; browser QA ba HTML và SVG trên responsive; khi chốt candidate, thực hiện review targeted. Không nhập vào canonical R18 hoặc viết ready/REGISTER khi #790 chưa đóng và chưa có PASS phần mới.
