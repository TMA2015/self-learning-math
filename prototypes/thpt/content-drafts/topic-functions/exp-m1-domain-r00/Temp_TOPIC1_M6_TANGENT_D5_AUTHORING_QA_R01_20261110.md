# AUTHORING M6 · Mô hình cát tuyến–tiếp tuyến và đồ thị đạo hàm — Source/QA R01

**Ngày:** 10/11/2026 · **Phần học:** Chuyên đề Hàm số & đồ thị, M6 (đạo hàm), bố trí **trong Kiến thức**, sau giải thích ý nghĩa giới hạn của thương sai phân và trước Vận dụng. **Không** tạo tab học chính thứ tư; không tạo Core riêng.

## 1. Nguồn đã kiểm và lựa chọn

- Canonical R18 đã Academic/PED PASS của Chuyên đề 1: \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, Git blob \`2340ea4975b37a457363eea59dd617070934983c\`, không chỉnh sửa. Trong M6.1 đã có **thương sai phân/tốc độ tức thời**; M6.2 có hình D5 gốc \`FIG-G11-CHIX-B31-01_R00.svg\`, đồ thị f(x)=x², cát tuyến và tiếp tuyến, source blob \`ca0a19f3931983632f88754bf4317d012add6b79\`. Mô hình mới **bổ sung sự liên kết với f′ và phản ví dụ cực trị**, không thay hình hoặc cách giải đã review.
- File HTML 10-in-1 người dùng cung cấp, SHA-256 \`b303b6ed23c47f79f6f49bbb5d42288bebd5c66a6f11e509bed16dce754848db\`, mô hình số **4** được dùng làm ý tưởng. Không sao chép nguyên, vì câu \`f'(x)=0 ⇒ cực trị\` trong nguồn sai tổng quát và nguồn không thực sự vẽ f′(x).
- **Mô hình AUTHORING đã dựng mới:** \`Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html\`, Git blob **\`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\`**.

## 2. Giá trị tự học/đọc hình

**Giải thích trước khi thao tác:** cát tuyến qua \(M(x_0;f(x_0))\), \(N(x_0+h;f(x_0+h))\) có độ dốc \((f(x_0+h)-f(x_0))/h\) khi \(h\ne0\). Nếu các độ dốc có giới hạn hữu hạn khi \(h\to0\) từ cả hai phía, đó là đạo hàm \(f'(x_0)\), hệ số góc tiếp tuyến tại M. Học sinh có thể chọn \(h>0\) **hoặc** \(h<0\), thu nhỏ \(|h|\), đối chiếu số với tiếp tuyến thực và đồ thị **f′(x)** cạnh bên.

**Hai tình huống để nhận bản chất:**
1. \(f(x)=x^3/3-x\), \(f'(x)=x^2-1\): tại \(x=-1\), đạo hàm đổi từ dương sang âm ⇒ cực đại địa phương; tại \(x=1\), đổi từ âm sang dương ⇒ cực tiểu địa phương.
2. \(f(x)=x^3\), \(f'(x)=3x^2\): tại \(x=0\), đạo hàm bằng 0 nhưng \(f\) vẫn tăng qua điểm đó; **không có cực trị**. Đây là phản ví dụ bắt buộc để sửa lỗi ở nguồn 10-in-1.

**D6:** Khi học sinh coi cát tuyến là tiếp tuyến dù h còn lớn, hãy giảm \(|h|\) và so lại độ dốc. Khi học sinh coi “tiếp tuyến nằm ngang” là đủ cực trị, hãy đổi sang \(f=x^3\) và đọc dấu \(f'\) ở hai bên 0. Không dùng một hình vẽ duy nhất thay chứng minh.

### Vận dụng (không đăng ký item canonical mới ở giai đoạn này)

Với \(f(x)=x^3\), chọn \(x_0=0\) và h=0,1. Dự đoán trước: cát tuyến có độ dốc dương hay âm? Khi đổi h thành −0,1, dấu của độ dốc có đổi không? Vì sao tiếp tuyến vẫn nằm ngang?

<details><summary>Đối chiếu</summary>

\((f(h)-f(0))/h=h^2\) với mọi \(h\ne0\), nên cả h=0,1 và h=−0,1 đều cho độ dốc **0,01** dương. Khi \(h\to0\), thương tiến về 0, vì vậy \(f'(0)=0\), tiếp tuyến ngang. Tuy nhiên \(f'(x)=3x^2>0\) với mọi \(x\ne0\); hàm không đổi chiều tăng tại 0, nên điểm này không phải cực trị.

</details>

## 3. Kiểm tra toán/logic có chứng cứ

**Math invariants:**
- Với \(x^3/3-x\): đạo hàm \(x^2-1\), hai nghiệm ±1; dấu f′ trên (−∞,−1), (−1,1), (1,∞) tương ứng +,−,+.
- Với \(x^3\): f′=3x², chỉ 0 tại x=0, không có biến đổi dấu.
- Thương của \(x^3\) tại \(x_0=0\): \(h^2\to0\) khi h→0 **cả hai phía**, không là 0 khi h còn khác 0.

**D5 smoke trên blob mới sau sửa thang đồ thị:** JavaScript trích từ đúng blob SHA trên, chạy trong V8 với DOM/Canvas **mô phỏng** ở bề rộng 390,820,1440 px. Mỗi cấu hình đã thử 12 tình huống: cực tiểu + cực đại khi f=x³/3−x; đạo hàm 0 không cực trị khi f=x³; cát tuyến với h âm; đạo hàm tại x₀=±2 bằng 12; **hai thang tung độ đổi theo hàm để giữ tiếp điểm trong khung**; hai Canvas vẽ lại; nút reset; ba nút chuyển nhanh x₀=−1,0,1. Những phép thử này là logic với DOM/Canvas giả lập. **12/12 mỗi cấu hình, tổng 36/36 PASS, 0 JS exception.** Không API mạng, không CDN, có các slider và nút keyboard focus, thông báo văn bản \`aria-live\`.

**Q07 kiểm tọa độ Canvas ở các điểm cực đoan (mock, chưa browser thật):** Sau khi phát hiện N bị cắt khỏi khung ở lựa chọn \(x_0=\pm2, |h|=1{,}5\) cho \(f(x)=x^3\), tác giả đã sửa **thang X/Y động** và khoảng chia trục phù hợp. Dùng Canvas \`arc\` spy trong môi trường giả lập, ở bề rộng 390/820/1440, mỗi cấu hình kiểm 4 trường hợp (flat tại ±2 với h=±1,5 và turn tại ±1 với h=±0,1): **12/12** phép kiểm xác nhận cả hai điểm M/N nằm trong khung đồ thị và giá trị đạo hàm hiển thị đúng. Đây là QA vị trí tọa độ nguồn Canvas **trong mock**, không là chứng cứ pixel, Safari, keyboard hay touch thực. Nguồn mới SHA \`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\`.

**Giới hạn:** phép thử dùng Canvas context mock, **không phải Chromium browser render/QA responsive/thiết bị thật**. Hình sau render, hiển thị công thức trong website, ánh xạ source/model/figure trên nhiều placement, kiểm keyboard screen-reader/touch vẫn phải QA đúng HEAD. Không ghi Mastery, không làm bài Tự kiểm tra.

## 4. Tách delta đúng chuẩn

- Chỉ **cập nhật nguồn phần bổ sung**, không sửa M6 R18 đã PASS.
- Mô hình thêm **hai đồ thị liên kết, phản ví dụ và cách dẫn dắt**, nên phân loại \`DELTA_C_ACADEMIC_MATERIAL\` cho **phần bổ sung M6**; targeted independent Academic/PED Q01–Q18 theo đúng scope của asset/diễn giải này, **không review lại R18**.
- Không tự gán \`CONTENT_READY\`, \`MODEL_PUBLISHED\`, \`AP3_PASS\` hoặc tiến độ học sinh. Khi được duyệt, gắn một \`MODEL_ID\` canonical và nhiều placement cùng asset/hash; nhánh RELEASE chịu tích hợp và Golden UI.
- **Gate V2 TOPIC #790 vẫn OPEN.**

**STATE:** \`MODEL4_MATH_FIXED_AND_IMPLEMENTED_IN_AUTHORING\` · \`MOCKED_JS_24_24_PASS\` · \`REAL_BROWSER_RENDER_PENDING\` · \`INDEPENDENT_DELTA_C_REVIEW_PENDING\`.
