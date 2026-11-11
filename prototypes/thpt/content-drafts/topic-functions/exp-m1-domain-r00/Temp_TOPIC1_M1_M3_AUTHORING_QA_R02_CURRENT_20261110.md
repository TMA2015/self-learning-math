# AUTHORING R02 — Checkpoint đối chiếu nguồn, trùng item và QA tính toán M1–M3

**Ngày:** 10/11/2026 · **CHỦ ĐỀ:** 1 Hàm số & đồ thị (M1–M3) · **RELEASE:** không thuộc nhánh này.

## 1. Nguồn hiệu lực / bảo toàn nghiệm thu

- R18 gốc từ Draft PR #782 vẫn giữ **đúng Git blob** \`2340ea4975b37a457363eea59dd617070934983c\`; Academic/PED PASS thuộc **snapshot cũ**, không áp lên nội dung mới.
- Toàn bộ file mới nằm trong Draft PR **#801**, nhánh \`authoring/topic-functions-m1-domain-depth-d5-20261110\`. Không thay R18, RD1, website, Golden UI hay ngân hàng canonical.
- Chứng cứ S1/SBT đầy đủ: \`Temp_TOPIC1_M1_M3_S1_SBT_VISUAL_RECEIPT_R01_20261110.md\`.
  - SGK 10 T2 B15 **trang in 5–10 / PDF 6–11**; trang in 4/PDF5 là mở đầu Chương VI.
  - SGK 10 T2 B16 **trang in 11–18 / PDF 12–19**, không phải chỉ p13–14.
  - SBT 10 T2 B15 **trang in 3–9 / PDF 4–10**; B16 **in 10–15 / PDF 11–16**.
  - PDF SGK SHA256 \`ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6\`; SBT SHA256 \`3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7\`. SBT giúp đối chiếu độ sâu/họ dạng, không thay thẩm quyền Core SGK.

## 2. Kiểm kê trên GitHub

- **3** Markdown học liệu Kiến thức M1–M3, **2** Markdown Luyện tập, **3** SVG, **3** HTML lab offline; các Markdown còn lại là QA/ma trận/receipt.
- Sau đối chiếu ngân hàng thực, còn **17 DRAFT item** (**13 ứng dụng + 4 Written**). M1 \`DRAFT-T1-M1-APP07\` bị **loại** vì chỉ đổi tham số so với item gốc \`THPT-G10-TOP-FUNC-P05\` (đỉnh ngoài miền). M1 WR02 được thay bằng bài miền số nguyên rời rạc, đầu ra trùng nhau và tập giá trị.
- M3 APP07 được đổi thành bài có **nghiệm âm cần loại khi đặt \(u=|x|\)**; khác bài M3 Written về hai phép biến đổi \(|f|\) và \(f(|x|)\).
- Source Q15 đã kiểm thực tế đúng **12 item PUBLIC gốc**: 6 B15 theo \`docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js\` blob \`1223d4c2b574433479c5d222dbeff363718ee4bb\`, và 6 G10 Topic R01 theo Git blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`. Không sao chép stem/key/rubric từ bank gốc; không gọi 12 items là đủ mọi ngân hàng THPT. Written/Anchor Q15 vẫn HOLD.

## 3. QA nội bộ đã chạy

**Số học và ký hiệu:** chạy script SymPy độc lập trên tệp PDF/SGK đã được mở ở môi trường tác giả, 17 điều kiện/giá trị có đối chiếu:
- M1: domain \(\sqrt{4-x^2}/(x-1)\), giá trị biên −2,0,2; domain \(\sqrt{9-x^2}/(x+2)\), giá trị 0; khoảng giá trị parabol với miền hạn chế; căn ở mẫu.
- M2: giá trị tại mốc theo nhánh \(x\le1\) và phản ví dụ hai nhánh tăng có bước nhảy xuống.
- M3: nghiệm \(|x^2-4x+3|=0\), nghiệm \(f(|x|)=0\), nghiệm mới \(x^2+2x-3\) với điều kiện \(|x|\ge0\), a=0 trở về tuyến tính, cực trị trên hai đoạn rời và cực trị trong 2 giây.
- **17/17 điều kiện đã thử PASS**, nhưng chỉ là kiểm tra **mẫu toán có hạn**, không chứng minh toàn bộ lời giải/rubric đã Academic PASS.

**Cấu trúc nguồn HEAD:**
- 3 HTML tự chứa: có slider + event listener + script đóng đúng; không external JS, CDN, \`fetch\` hoặc \`eval\`. M3 cập nhật khi \(a=0\) hiển thị công thức **bậc nhất/hằng** thay vì giữ dạng bậc hai gây hiểu nhầm.
- 3 SVG: có \`title/desc\`, không \`script/foreignObject\`; 3/3 tham chiếu hình trong Markdown đúng tên file cùng thư mục.
- 17/17 DRAFT IDs **duy nhất theo chuỗi trong hai file luyện tập**; 3 học liệu Kiến thức có 3 thẻ \`details\` mở/đóng cân bằng mỗi file.
- **Chưa QA thực tế bằng trình duyệt/cảm ứng trên chính HEAD mới.** Static source QA không phải browser QA, và quan sát bố cục từ bản pilot R01 cũ không được thay chứng cứ cho ba lab mới.

## 4. Quyết định học liệu cho reviewer

- Trọng tâm chất lượng là **giải thích từng outcome** bằng lời đủ ý, cho học sinh tự hiểu, có ví dụ, mô hình nhìn được điều kiện và bài Vận dụng mở nút \`Đối chiếu\`.
- \(y=|f(x)|\) và \(y=f(|x|)\) thuộc **minh họa/enrichment bổ sung**, không mặc nhiên thành Core bắt buộc của SGK B16. Reviewer phải xác định có hữu ích ở M3 hay nên đặt trong phần mở rộng.
- 17 DRAFT là ứng viên **chưa gán item canonical**, chưa xác minh tất cả Written/Anchor; những bài chỉ thay số không được nâng thành item mới để tăng số lượng.
- Không đưa nội dung PUBLIC có đáp án vào private RD1, không ghi Mastery từ Practice/lab, không gắn rubric mới lên item SGK đã PASS.

## 5. Cổng HOLD trước review độc lập / handoff

| Gate | Hiện trạng |
|---|---|
| S1/SBT receipt theo trang in và PDF | **VERIFIED** trong phạm vi nêu trên |
| Mathematical spot checks | **17/17 PASS** cho các biểu thức đã thử |
| Q15 12 public stems R01/B15 | **VERIFIED**; Written/Anchor và canonical version vẫn HOLD |
| SVG/HTML static structure | **PASS cho kiểm tra tĩnh** |
| Browser QA mới | **PENDING** |
| NotebookLM Academic/PED delta M1–M3 | **PENDING** |
| Hợp đồng V2 TOPIC #790 | **OPEN** |
| \`CONTENT_READY\` | **NO** |
| Merge/deploy | **NOT AUTHORIZED** |

**Reviewer prompt dự kiến (chỉ dùng khi gửi gói):** Hãy đánh giá độc lập phần mới của M1–M3 trên đúng nguồn SGK/SBT đã ghi receipt, 5 Permanent Sources THPT v2.1 và chuẩn Q01–Q18; giữ nguyên chứng cứ Academic/PED PASS của R18. Kiểm điều kiện toán, ví dụ có suy luận, từng D5 và mỗi bài tập còn giữ, đặc biệt phân biệt Core với enrichment và sự trùng câu Q15. Trả Academic/PED verdict, P0/P1/P2 và MINIMAL_DELTA với nguồn và outcome/item rõ ràng, không gán PASS tự động. Không coi review này là quyền triển khai, ghi Mastery, merge hoặc deploy.

**NEXT:** đóng browser QA và kiểm Written/Anchor, sau đó chuyển **targeted DELTA_C** sang phản biện độc lập; không mở lại R18/M4–M7. Không yêu cầu chủ dự án tải ZIP lưu thủ công.
