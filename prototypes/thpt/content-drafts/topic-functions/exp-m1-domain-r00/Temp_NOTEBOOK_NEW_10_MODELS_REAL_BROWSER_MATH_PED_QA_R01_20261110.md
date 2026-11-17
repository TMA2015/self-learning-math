# AUTHORING Q07/Q09–Q18 · Kiểm toán file Notebook 10 mô hình tương tác mới (R01)

**Ngày:** 10/11/2026 · **Lane:** AUTHORING (đánh giá nguồn người dùng đưa, KHÔNG chỉnh RELEASE).  
**File nguồn người dùng:** \`Trang_Web_Tương_Tác_10_Mô_Hình_Toán_THPT.html\`. **SHA-256 raw upload:** \`93b3764dae9a60defa7d2ebe8d353c60f5e4e7edc4523f5a837c00fae05cddc3\` · **Raw size:** ~131 KiB · **10 Canvas/10 viewport/24 sliders**. Bản gốc lưu bên owner; chưa tải lên repo và chưa là học liệu canonical.  
**Standard thẩm quyền:** \`SLM-THPT-QUALITY-ONE/1.2.0\` (Q01–Q18). Chuỗi \`SLM-THPT-v2.1\` trong header HTML **không phải tên/phiên bản chuẩn học liệu**, dễ nhầm với **5 Permanent Sources NotebookLM v2.1**.  
**Verdict:** \`UI_REFERENCE_ACCEPT\` · \`STANDALONE_HTML_MATH_P0_HOLD\` · \`CURRENT_MODEL_ID_REUSE_ONLY\` · \`REVIEW_R06_PRESERVED\` · \`CONTENT_READY=NO\`.

## I. QA trên Chromium headless **thật** (không giả lập DOM)

**Môi trường:** Python Playwright + /usr/bin/chromium, cùng HTML nguyên văn nạp bằng \`page.set_content\` để tránh hạn chế URL \`file://\`; viewport **390×900, 820×900, 1440×900** CSS pixel; kiểm nav 4 nhóm/10 subviews, Canvas pixel và tương tác các giá trị biên. Chặn các external HTTP(S) subrequests để kiểm khả năng offline: vì vậy KaTeX/Lucide/Google Fonts không thể tải trong lần kiểm này; **0 node .katex**. Điều này **chỉ chứng minh phụ thuộc CDN khi offline**, không phải online CDN đang hỏng.

- **30/30 lượt chọn view = 10/10 Canvas có pixel** ở cả ba viewport; mỗi lần chỉ một \`model-viewport.active\`, không có tràn ngang body ở 390/820/1440.
- Giao diện Carbon-like: rõ nhóm lý thuyết–thanh điều khiển–chỉ số–khung diễn giải–thử thách, panel biến thành một cột trên mobile. Tuy vậy trên 390 px nhiều nhãn bên trong Canvas nhỏ/cắt và các control liên quan nằm dưới fold.
- **JS error có thể tái hiện ở cả ba viewport** khi chuyển nhanh nhóm/model: \`Failed to execute 'arc' on 'CanvasRenderingContext2D': The radius provided (-1.12) is negative.\`. Race do \`showViewport\` đặt \`setTimeout(updateModelX,50)\`; một update chạy khi model vừa ẩn, \`canvas.getBoundingClientRect().height=0\`; với model #9, \`dotRadius=min((width-60)/40,(height-80)/25)*0.35\` thành **−1.12**. Chuyển nhanh #9→#10 tái hiện. Không thể dùng chuỗi test này làm \`Q07_BROWSER_PASS\`.
- **Không có** \`mousedown\`, \`pointerdown\`, \`pointermove\`, \`touchstart\`, \`touchmove\` handlers trong HTML raw. Test kéo trực tiếp #6 và #7 tại 820px cho thấy tọa độ vectơ và góc \`m7Yaw/m7Pitch\` **không thay đổi**: lời gợi ý kéo vectơ và xoay 3D chưa được hiện thực hóa.
- Formula render/adapter: KaTeX, Lucide, Google Fonts qua CDN; \`<api-shim>\` + \`window.notebookAppApi\` thuộc mô trường Notebook riêng, không mặc nhiên chạy trong website. Không nhúng file gốc vào website.

## II. Toán/PED theo 10 mô hình: phát hiện có chứng cứ

| # | Mô hình | Kết quả thực tế / phản ví dụ | Quyết định AUTHORING |
|---:|---|---|---|
| 1 | Hệ BPT hai ẩn + tối ưu tuyến tính | Miền ràng buộc đang tính được với 2 BPT và x,y≥0, nhưng \`setPresetM1(c1,c2,a,b)\` **không dùng a,b**: bấm “Ưu tiên sản phẩm Y” hay “Đường mức song song cạnh” vẫn chỉ tối ưu \`F=3x+4y\`. Phát biểu “luôn đạt tại đỉnh” cần giới hạn miền khả thi không rỗng và bị chặn hoặc bổ sung giả thiết bảo đảm có cực trị. | \`HOLD_P1_INTERACTION_AND_SCOPE\`; chưa mở Topic mới |
| 2 | Mũ và log đối xứng | \`slider a=1.00\` nhưng DOM hiển thị cơ số **1.05** vì JS tự sửa \`let a\` không cập nhật slider. Đúng điều kiện \(a>0,a\ne1\) cần cấm lựa chọn 1 rõ ràng; không âm thầm đổi bài toán. Cặp điểm đối xứng logic đúng trong ví dụ đã thử. | \`HOLD_P1_DOMAIN_UI\` |
| 3 | Đường tròn lượng giác + sin/cos | Có cả hai sóng và nhãn rad/độ, là cải tiến. Tuy nhiên \`ctx.fillText('&alpha;')\` sẽ in đúng **chuỗi ký tự** thay vì α; chạy animation rồi đổi tab, \`m3Playing\` vẫn true, RAF tiếp tục khi view ẩn. | \`UI_REFERENCE\`, \`HOLD_P1_RUNTIME\` |
| 4 | Cát tuyến/tiếp tuyến | **P0 toán:** code khi \`abs(f′(x0))<0.05\` in “Tiếp tuyến ngang - Điểm cực trị”. Với \(f=\sin x,\,x_0=1.55\), \(f′(1.55)\approx0.021\ne0\) nhưng DOM ghi đúng chuỗi sai ấy; không có nhánh \(x^3\) chứng minh đạo hàm 0 không kéo theo cực trị. Không hiển thị đồ thị f′ như model đang có ở AUTHORING. | \`HOLD_P0_MATH\`, dùng model M6 đã dựng từ #801 |
| 5 | Thể tích khối tròn xoay | **P0 mô phỏng:** chế độ bán cầu \(\sqrt{4-x^2}\) phải dùng \([0,2]\), nhưng \`dx=(b-a)/n\` được tính khi \`b=4\`, trước khi f(x) đổi b=2. Với n=8, browser \`V_n=16.89\`, exact \`16.76\`; tổng trung điểm **đúng trên [0,2]** phải ~**16.79**. Chế độ \(\sqrt x\) dùng midpoint \(\pi x\) nên \(V_n=8\pi\) **cho mọi n**; mô hình không thể cho học sinh thấy hội tụ bằng kéo n trong chế độ mặc định. | \`HOLD_P0_MATH\`, không dùng làm minh họa tích phân |
| 6 | Vectơ + tích vô hướng | **P0 điều kiện:** chọn \(\vec u=\vec0\) làm \`angle=90°\` và nói “Hai vectơ vuông góc”; góc giữa vectơ không và một vectơ khác **không xác định**. Lời hướng dẫn “kéo trực tiếp đầu mút” không hoạt động; chỉ sliders/presets đổi được tọa độ. | \`HOLD_P0_DOMAIN_PED\`, reuse module hiện hành PR #793 |
| 7 | Khoảng cách 3D chóp S.ABC | Đã có mô hình tọa độ cụ thể \(A=(0,0,0),B=(a,0,0),C=(a,b,0),S=(0,0,h)\); **trong hình đặc biệt ấy** \(BC\perp AB\), \(SA\perp(ABC)\), công thức \(AH=ha/\sqrt{h^2+a^2}\) và \(d(SA,BC)=AB\) có thể chứng minh. Nhưng khung sư phạm nói như quy tắc chung; kéo chuột không đổi yaw/pitch, trái cam kết xoay tự do. | \`HOLD_P1_ASSUMPTIONS_AND_INTERACTION\` |
| 8 | Mặt phẳng–mặt cầu | Logic phân biệt \(d<R\), \(d=R\), \(d>R\) đã rõ hơn bản cũ, nhưng khi **\(d>R\)** status hiển thị **\`r=0\`** trong khi không tồn tại đường tròn giao; cần ghi “không có bán kính thiết diện”. Hình dựng theo sơ đồ chiếu, không phải xoay 3D. | \`REUSE_EXISTING_TOPIC2_MODEL\`; title/status refine only after QA |
| 9 | Bayes 1000 người | Cây 4 trường hợp được tính bằng **làm tròn người** rồi dùng các count đã làm tròn làm posterior, không phải xác suất Bayes chính xác. Ví dụ \(P(B)=0.2\%\), sensitivity=80%, specificity=99.5%: code hiển thị **28.57% (2/7)**, công thức xác suất đúng \(\frac{0.002\cdot0.8}{0.002\cdot0.8+0.998\cdot0.005}\approx\)**24.28%**. Cần tách sơ đồ đếm xấp xỉ và công thức xác suất. | \`HOLD_P0_PROBABILITY\` |
| 10 | Thống kê ghép nhóm | Mean/median/quartile được tính theo nội suy bảng nhóm nhưng trạng thái “phân bố đối xứng chuẩn” chỉ dựa \(|\bar x-M_e|<0.5\), **không đủ chứng minh đối xứng/chuẩn**; preset “đối xứng chuẩn” tần số [8,24,36,20,6] thực tế không đối xứng chính xác. Không có drag cột mặc dù hướng dẫn nói có. Khi vào view #10 nhanh từ #9 có JS race như mục I. | \`HOLD_P1_PED_AND_JS\` |

**Xác thực đặc biệt:** 0.5^x=x nghiệm duy nhất thực dương khoảng 0.6412; câu chú giải #2 gần đúng, không phải nguyên nhân HOLD. Phương trình/tính khác kiểm đến đâu ghi đến đó; không tuyên bố 10 mô hình đều sai hoặc toàn bộ QA đã xong.

## III. Quyết định tái sử dụng theo lane AUTHORING đang được mở

| Mô hình Notebook | Nội dung AUTHORING đã có | Quyết định |
|---|---|---|
| #4 tiếp tuyến | Chuyên đề 1 M6, \`Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html\`, blob \`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\` | **Giữ module cũ**: hai đồ thị f và f′, xét cả \(x^3\) phản ví dụ, có h âm/dương. Học bố cục bảng slope/equation của Notebook khi làm future DELTA; **không copy logic extrema lỗi** |
| #6 tích vô hướng | Chuyên đề 2 P03, \`Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html\`, blob \`06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e\` (#793) | **Giữ model P03 hiện hành** có \`pointerdown/pointermove\` thật và hình chiếu có dấu; ghi test cần chặn vectơ không |
| #8 mặt cầu | Chuyên đề 2 P07, \`Temp_TOPIC2_P07_SPHERE_PLANE_INTERSECTION_LAB_D5_R00_20261110.html\`, blob \`f5874a1e65a0db40dc77098c4356952c0f7d3043\` (#793) | **Giữ model P07 hiện hành** đủ 3 trạng thái; không nhân đôi \`MODEL_ID\` hay source canonical |
| #1/#2/#3/#5/#7/#9/#10 | Nằm ngoài phạm vi 2 Topic đã được phép hoàn thiện | **Để kho ý tưởng/tương lai**, không tự mở đợt AUTHORING mới và không tạo nhánh kiến thức thứ ba |

**Q15/Q17:** Bố cục **4 nhóm × 2 tầng tab** của file Notebook chỉ là **catalog tham khảo**. Ở website Topic vẫn phải có đúng **Kiến thức / Luyện tập / Tự kiểm tra**; nhúng riêng một model tại outcome cần học, không tạo cổng 10 model thay thế hai hành trình SGK/Chuyên đề. **Một model canonical, nhiều placement**, khi có \`MODEL_ID/FIG_ID\` chuẩn và version/review đủ.

**Q18/RD1:** File này là **nguồn gợi ý thiết kế chưa độc lập thẩm định**, không làm đổi snapshot R18 đã PASS, không thêm đáp án/key RD1 lên Git. Mọi sửa giải thích/đồ thị/đề toán đáng kể là \`DELTA_C\` và phải reviewer targeted phần ảnh hưởng. HTML bên ngoài không được tự nhận \`CONTENT_READY\`, \`AP PASS\`, hay Golden UI PASS.

## IV. Cổng và bước tiếp theo

1. **Chuyên đề 1:** R06 single review packet blob \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` và 11 DRAFT vẫn **PENDING** NotebookLM Academic + PED theo outcome/item/model; không thêm file Notebook raw vào R06 hay review lại R18.
2. **Chuyên đề 2:** R02 7/7 + RD1 đã PASS vẫn giữ snapshot, model P03/P07 hiện hành là nguồn ứng viên AUTHORING; không copy model #6/#8 của Notebook.
3. Cần QA **trình duyệt thật** các model tại PR tương ứng và reviewer scoped nếu có DELTA_C, rồi khóa source/receipt SHA; mọi sửa UI tương đương phải có parity.
4. Issue **#790** V2 Topic intake vẫn RELEASE-owned; không tự cấp \`ready/\`, REGISTER promotion, \`CONTENT_READY\`, merge hoặc deploy.
5. Không đề xuất “chuẩn SLM-THPT-v2.1” mới; nguồn Q01–Q18 v1.2.0 duy nhất tiếp tục chi phối.

**AUTHORING_CHECKPOINT:** \`RAW_NOTEBOOK_SOURCE_SHA_LOCKED\`, \`10_OF_10_BROWSER_CANVAS_INITIAL_DRAW\`, \`P0_MATH_IDENTIFIED_4_5_6_9\`, \`RUNTIME_RACE_VERIFIED\`, \`CURRENT_MODELS_REUSE_PREFERRED\`, \`NO_READY_NO_RELEASE\`.
