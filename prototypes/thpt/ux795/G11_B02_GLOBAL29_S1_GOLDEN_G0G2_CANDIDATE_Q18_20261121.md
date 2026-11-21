# AUTHORING — Toán 11 Bài 2 · một Q18 nguồn chính xác, CHƯA HANDOFF

**TASK:** [#987](https://github.com/TMA2015/self-learning-math/issues/987) · **LESSON_ID:** `G11-B02` · **GLOBAL_ORDER:** 29/79 · **SCOPE:** SGK Toán 11 KNTT Tập một Bài 2, trang in 17–21 · **STANDARD:** `SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18` + SGK checklist R02.

**ONE ACTIVE AUTHORING SOURCE:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md` · **main baseline blob** `15c4de731bfbaf5b8a141a54d9b5493e7895c752` · **closed RELEASE PR #983 input blob** `9d15d0122443ad9897ed64fed0fd2a717ff46582` · **this AUTHORING candidate blob** `08eb70d957be47650a35405bdc48d9a6a3d808a5`. Chỉ một learner source trong nhánh `authoring/sgk-g11-b02-r02-20261121`, không hồi sinh PR #983. `DELTA_C_ACADEMIC_MATERIAL` bổ sung ứng dụng điện thoại & D6 + biên tập prose; `DELTA_A_UI` loại bridge CSS/JS tác giả riêng và sửa link sai; không tác động shared runtime, Q16/RD1/Final Submit/Mastery.

## 1. S1 và mức chứng cứ
| Mục SGK KNTT (trang in) | Nội dung bài | Tab 1 | Tab 2 | Đối chiếu và trạng thái |
|---|---|---|---|---|
| Công thức cộng (17–18) | cos/sin cộng trừ, tan có điều kiện | 1.1 | 2.1 | Vận dụng TRY01, Ví dụ 3.1 · kiểm toán học thuật sơ bộ |
| Công thức nhân đôi (18–19) | sin2u, cos2u ba dạng, tan2u, hạ bậc | 1.2 | 2.2 | TRY02, Ví dụ 3.2 · sơ bộ |
| Tích thành tổng (19) | ba đồng nhất thức sin/cos | 1.3 | 2.3 | TRY03, Ví dụ 3.3 · sơ bộ |
| Tổng thành tích (19–20) | bốn đồng nhất thức & nửa tổng/nửa hiệu | 1.4 | 2.4 | TRY04, Ví dụ 3.4 · sơ bộ |
| Vận dụng điện thoại (20) | phím 4, 770 & 1209 Hz, tổng 2 sóng sin | trong 1.4 | vận dụng 2.4 | TRY05 + D6 · đã tái tạo dữ kiện nguồn thứ cấp, còn thiếu đối chiếu hình in SGK |
| Bài tập cuối bài (21) | nhiều họ tính, chứng minh, ứng dụng | link Core/Practice | thuộc bank riêng | không chép ngân hàng câu; kiểm scope bank trực tiếp còn PENDING |

- **SGK văn bản:** bản PDF nhận diện Bài 2/nhóm công thức/trang in 17–21; đã đọc nội dung trang 20 từ nguồn đối chiếu công khai độc lập [Vietjack](https://vietjack.com/toan-11-kn/van-dung-2-trang-20-toan-11-tap-1.jsp) và [Học247](https://m.hoc247.net/toan-11/van-dung-2-trang-20-sgk-toan-11-ke-t-no-i-tri-thu-c-tap-1-kntt-bt72657.html). **Bản chụp trực tiếp page-image PDF SGK chưa mở thành công**; không tự nhận `S1_DIRECT_PAGE_IMAGE_PASS`. SGK điện thoại dùng đúng phím 4/770/1209; cách diễn giải tự viết.
- **SBT:** đã tra đối chiếu **chỉ mục thứ cấp** [SBT11 KNTT tập 1 trang 10–11, câu 1.10–1.15](https://vietjack.com/sbt-toan-11-kn/bai-2-cong-thuc-luong-giac.jsp); các họ dạng tính góc 105°, góc nhân đôi/hạ bậc, chứng minh đồng nhất thức, tổng lượng giác. **Chưa có PDF/ảnh SBT gốc**, không giả `SBT_DIRECT_PASS`; SBT chỉ tham chiếu độ đa dạng, không quyết định Core.
- **Gợi ý prose** có thể khai thác Notebook Gemini/Gemini trên Drive, không dùng lời giải bên ngoài làm chân lý toán. Một trang lời giải thứ cấp đã nhầm tổng sin → sin×sin, **loại bỏ kết quả sai; tự chứng minh bằng `sin u+sin v=2sin((u+v)/2)cos((u-v)/2)`**.
- **Mô hình tương tác:** không thêm link Math Lab chưa được RELEASE xác nhận hoạt động.

## 2. Q03–Q14 / PED — QA theo bài, không chỉ đếm hộp
- **Bốn tab Golden:** Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp; §1.1–1.4, §2.1–2.4, §3.1–3.5, §4.1–4.2. Văn xuôi nối từng mạch, 5 FirstTry có tự mở Đối chiếu, 5 local Kiểm lỗi và 2 lỗi tổng quát (không cộng lẫn vai trò).
- **TRY01:** `cos(60°+30°)=cos90°=0`, còn `cos60°+cos30°=(1+sqrt3)/2>0`, chẩn đoán không phân phối cos qua tổng góc.
- **TRY02:** sin u=3/5, cos u=4/5 ⇒ sin2u=24/25, cos2u=7/25; kiểm `(24/25)^2+(7/25)^2=1`.
- **TRY03:** `2sin75°sin15°=cos60°−cos90°=1/2`.
- **TRY04:** `sin75°−sin15°=2cos45°sin30°=sqrt2/2`.
- **TRY05 (sửa thực chất):** phím 4: `y(t)=sin(1540πt)+sin(2418πt)=2sin(1979πt)cos(439πt)`. Chứng minh: nửa tổng (1540+2418)/2=1979, nửa hiệu (1540−2418)/2=−439, `cos(−x)=cos x`. Kiểm số độc lập 1007 giá trị t, sai lệch tuyệt đối tối đa dưới `1e-10`. Chẩn đoán tránh dùng sin×sin hoặc bỏ `2π`.
- **Ví dụ 3.1–3.5:** lần lượt: 1; (−7/25,24/25); 1/2; sqrt6/2; `5sin t+5cos t=5sqrt2 sin(t+π/4)`. Đã tự tính và kiểm lại số học.
- **Hình:** giữ đúng **một SVG asset** `docs/assets/images/thpt/THPT_G11_B02_ANGLE_SUM_60_30_D5_R01.svg` blob `b6cb63f72bbd7d93231c457baf19c4942114957b`, hai placement có giải thích khác nhau. Chưa có browser/visual QA trực tiếp.
- **Một footer SGK cuối bài**; đã bỏ `Mastery` hiển thị và bỏ `style/script` đóng gói riêng trong nguồn tác giả (nhánh RELEASE phải bảo đảm Golden/First Paint). **Một link Tự luận thật** sửa từ `../../../thu-vien/` sang `../../../../thu-vien/`; file đích `docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md` có Git blob `61ccb1d3c6242bd96c8db1948d100906b90d5afc`.

## 3. Q15/Q16 và kết quả QA thực tế
- **Unique First Try IDs:** `THPT-G11-B02-TRY01`–`TRY05`, cùng **5 local HELP IDs** `HELP-G11-B02-TRY01`–`TRY05`; hai tổng quát `HELP-G11-B02-01/02`. 5/5 và 7/7 **không trùng trong source này**. Kiểm đối chiếu toàn repo / shared question bank/canonical ownership cho TRY05 **chưa hoàn tất**, không ghi `Q15_GLOBAL_PASS`.
- **Không chạm** question/key/rubric public bank, private RD1 hoặc Final Submit, không ghi Mastery; chỉ sửa một bài knowledge đang ở nhánh Draft.
- **Local structural QA trên GitHub source:** 4 tab, 4 discovery, 4 SGK formal clusters, 5 solved examples, 5 Đối chiếu, 5 local Kiểm lỗi, 2 global HELP, 2 occurrence cùng một SVG, một footer, không có script/style source-local, không có `Mastery` hiển thị; **PASS trong giới hạn tĩnh**, không phải browser/production PASS.

## 4. HOLD và quyết định chuyển giao
- `S1_PAGE_IMAGE_NOT_VERIFIED` — phải xác minh trực quan trang in/hình/điều kiện từ bản SGK S1 trước khi ký Q01/Q07 về hình.
- `Q15_BANK_GLOBAL_PARITY_PENDING` — kiểm source-owned shared bank/TRY05 ID collision trên exact branch.
- `Q18_ACADEMIC_FULL_VERDICT_PENDING` — kết quả kiểm toán tác giả trên toán của scope sửa **đã có**, nhưng chưa đủ nguồn S1, Q15 và visual để ký `AUTHOR_SELF_VERIFIED_ENRICHMENT`.
- `RELEASE_AP_R/P1/P2=NOT_IN_SCOPE`. **Không merge, deploy, sửa website production, ghi Mastery hoặc sang G11 B03.**

**STATUS:** `AUTHORING_CANDIDATE_R02_SOURCE_UPDATED / PARTIAL_SELF_MATH_QA_PASS / HANDOFF_HOLD`. Checkpoint hiện hành duy nhất ở [#987](https://github.com/TMA2015/self-learning-math/issues/987).