# Checkpoint AUTHORING — Chuyên đề 1 / M1 · Domain D5 R00 (10/11/2026)

**STATE:** \`DRAFT_UNREVIEWED\` · \`DELTA_C_ACADEMIC_MATERIAL\` · \`NOT_CANONICAL\` · \`CONTENT_READY=NO\` · \`NO_MERGE\` · \`NO_DEPLOY\`.

## 1. Khóa nguồn cũ / truy vết

- Canonical source R18 đã review tại Draft PR #782: \`prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, Git blob **\`2340ea4975b37a457363eea59dd617070934983c\`**; không sửa file này hoặc 30 câu RD1 private.
- R00 là **bộ bổ sung M1 mới**, không thay R18. Tác động giới hạn tại giải thích miền xác định và tập giá trị, đồ họa D5 và bài tập M1 công khai.
- S1 đã đối chiếu bằng ảnh: **SGK Toán 10 tập 2, Bài 15, trang in 5–10 / trang PDF 6–11**; bao gồm dữ liệu vào-ra, định nghĩa hàm, miền, đồ thị và tăng giảm. Ví dụ học liệu là bài toán mới tự biên soạn, không sao chép nguyên hình SGK.
- Bộ 12 và 22 chuyên đề NotebookLM chỉ dùng làm ý tưởng nghiên cứu; các văn bản ấy không có hiệu lực review độc lập và có lỗi LaTeX ở một số phần.

## 2. Danh mục file trên nhánh làm việc

1. \`Temp_TOPIC1_M1_DOMAIN_KNOWLEDGE_DELTA_C_R00_20261110.md\`: giải thích dài, tự đủ, gồm quy tắc hàm, domain/range, miền đại số và miền mô hình, căn và mẫu, điểm biên, tự vận dụng.
2. \`Temp_TOPIC1_M1_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\`: **7 câu áp dụng + 2 Written candidate**, cả đáp án/lời giải/rubric đều chỉ là PUBLIC/FORMATIVE, không dùng làm RD1.
3. \`Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg\`: sơ đồ tập xác định bằng đường số theo UX sáng, không mảng tô đen.
4. \`Temp_TOPIC1_M1_DOMAIN_LAB_D5_R00.html\`: mô hình độc lập offline, chọn x và xem đồng thời hai điều kiện, các mốc \(-2,0,1,2,3\).

## 3. QA hiện đã có / chưa có

**Static + mathematics spot-check:**
- Chọn \(\displaystyle h(x)=\frac{\sqrt{4-x^2}}{x-1}\): \(D=[-2,1)\cup(1,2]\), \(h(-2)=h(2)=0,\ h(0)=-2\), x=1 và x=3 không hợp lệ.
- Chọn \(\displaystyle k(x)=1/\sqrt{5-x}\): \(D=(-\infty,5)\); khác căn đứng riêng vốn nhận x=5.
- Chọn \(\displaystyle p(x)=(x-1)^2+2\): trên \(\mathbb R\) có tập giá trị \([2,+\infty)\), trên \([0,2]\) có tập giá trị \([2,3]\), kiểm đủ giá trị bằng cách chọn \(x=1+\sqrt{y-2}\) cho mọi \(y\in[2,3]\).
- Kiểm tra 9 mã DRAFT không trùng nhau **trong chính file**, chưa cross-bank canonical Q15.
- HTML không gọi CDN/fetch/external script; SVG có title/desc, không chứa script/foreignObject; các mốc x=−3,−2,0,1,2,3 được đối chiếu bằng hàm số học độc lập.
- Soát sự trùng họ dạng với R18: câu nhận dạng bảng và bài căn/mẫu có nội dung tương tự \`EX-M1-01/02\` R18; **không được tự đăng ký ID mới** nếu đối soát cho thấy cùng item theo Q15. Ví dụ APP02 đã đổi sang chủ đề rút gọn phân thức và miền gốc để tăng chiều sâu.
- Chưa có browser/device QA thực của chính file HTML mới, chưa có accessibility audit đầy đủ, chưa có NotebookLM Academic/PED verdict. **Không** được tuyên bố PASS học thuật hay READY.

## 4. Các cổng cần đóng trước khi bàn giao

- **Q01/Q02:** kiểm S1/SGK/SBT và ma trận chính xác theo outcome, đặc biệt phân biệt domain do công thức và domain do bối cảnh.
- **Q03–Q14:** NotebookLM phản biện lời giải thích, các trường hợp biên, tính tự đủ, chất lượng suy luận, SVG/đồ thị và D6; không dùng số lượng câu làm bằng chứng tự học.
- **Q15:** rà soát trùng item/phiên bản/họ dạng/câu đã có trong ngân hàng canonical; gắn placement/role thay vì nhân bản.
- **Q16:** giữ RD1 kín, không Tutor/hint/key trong tự kiểm tra trước Final Submit, không ghi Mastery từ bài công khai.
- **Q17:** học lý thuyết/ứng dụng được độc lập trong Topic, không buộc mở SGK.
- **Q18:** khi đã nghiệm thu delta, khóa Git blob của source và receipt độc lập theo cùng snapshot. Không gắn PASS R18 vào nội dung R00.
- **AUTHORING/RELEASE:** chỉ bàn giao theo V2 khi có cả Academic+PED PASS và gate TOPIC hợp lệ; blocker #790 hiện mở, không tự nới gate/merge/deploy.

## 5. Prompt review ngắn — chỉ sử dụng khi đóng batch

> Hãy phản biện **chỉ phần bổ sung M1 R00** kèm nguồn SGK Toán 10 KNTT tập 2 (Bài 15, trang in 5–10), nguồn R18 đã PASS làm bối cảnh, và đúng năm Permanent Sources THPT v2.1. Kiểm tra độc lập mọi điều kiện xác định, lời giải/tập giá trị, ví dụ biên, mô hình D5, câu luyện tập và khả năng học sinh hiểu được mà không cần giáo viên giảng. Đối chiếu Q01–Q18 theo từng outcome/item, chỉ ra P0/P1/P2 và MINIMAL_DELTA cụ thể; không yêu cầu review lại R18 bất biến. Ghi rõ Academic/PED verdict chỉ cho snapshot R00, không tự xem tài liệu này là \`CONTENT_READY\`.

**NEXT:** đối chiếu câu trùng ngân hàng, khép M1–M3 theo từng outcome rồi tạo review packet \`Temp_*.zip\` khi đủ điều kiện; sau đó xử lý DELTA_C, giữ canonical R18 không đổi. Vẫn ưu tiên dứt điểm Chuyên đề 1 trước khi mở rộng sang chuyên đề khác.
