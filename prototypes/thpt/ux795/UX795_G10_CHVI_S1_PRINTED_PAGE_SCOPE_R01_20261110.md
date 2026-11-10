# UX795 G10 ChVI — đối chiếu phạm vi SGK KNTT S1 theo trang in (RELEASE R01)

**Ngày:** 10/11/2026 · **Phạm vi:** B15–B18 trang Kiến thức SGK mới thuộc Draft PR #797. Hồ sơ xác minh *sách thực và phạm vi bài*, không cấp PASS cho toàn bộ giải thích/hình/ví dụ do dự án thêm.

## S1 source custody (không đưa bản quyền sách lên GitHub)

- Tài liệu gốc: **SGK Toán 10 Kết nối tri thức với cuộc sống, Tập 2**, Nhà xuất bản Giáo dục Việt Nam; bản PDF trong Drive nguồn SGK của chủ dự án, thư mục KNTT TOAN 10.
- File nguồn quét: `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf`; 102 trang PDF; 21.979.142 byte; SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`.
- PDF này là bản scan hình, **không có lớp văn bản trích xuất**; thông tin dưới đây đã được đọc trực tiếp bằng việc kết xuất và xem trang sách, không dùng OCR suy diễn.
- Trong Chương VI, **chỉ số trang PDF (bắt đầu từ 1) = số trang in + 1**. Đã đối chiếu mục lục trang in 3 = PDF trang 4, B16 trang in 11 = PDF trang 12, B17 trang in 19 = PDF trang 20, B18 trang in 25 = PDF trang 26, bài cuối chương trang in 29 = PDF trang 30.

## Bản đồ trang in và outcome SGK đã nhìn thấy

| Bài | Trang in SGK Tập 2 | Trang PDF (1-based) | Phạm vi xác nhận trực tiếp từ mục lục / trang mở đầu | Tình trạng |
|---|---:|---:|---|---|
| B15 — Hàm số | **4–10** | 5–11 | Khái niệm hàm số và biểu diễn/đọc hàm từ bảng, đồ thị; mục lục ghi B15 mở đầu trang 4, B16 mở đầu trang 11. | `S1_LESSON_RANGE_VERIFIED` |
| B16 — Hàm số bậc hai | **11–18** | 12–19 | SGK mở đầu trang 11 yêu cầu nhận diện hàm bậc hai, **thiết lập bảng giá trị**, vẽ parabol, đọc đỉnh/trục đối xứng, giải thích tính chất qua hình và ứng dụng. | `S1_OPENING_OUTCOMES_VERIFIED` |
| B17 — Dấu của tam thức bậc hai | **19–24** | 20–25 | SGK mở đầu trang 19 yêu cầu giải thích định lí dấu qua đồ thị parabol, giải bất phương trình bậc hai và vận dụng tình huống thực tế. | `S1_OPENING_OUTCOMES_VERIFIED` |
| B18 — Phương trình quy về phương trình bậc hai | **25–27** | 26–28 | SGK mở đầu trang 25 giới thiệu hai dạng phương trình căn thức thông dụng, nhấn mạnh biến đổi rồi **thử nghiệm lại** với phương trình ban đầu. | `S1_OPENING_OUTCOMES_VERIFIED` |
| Bài tập cuối Chương VI | **28–29** | 29–30 | Đã đối chiếu mục lục và quan sát trang 29 có các bài 6.33–6.34; không coi đây là gói Chapter Readiness độc lập. | `S1_RANGE_VERIFIED` |

## Defect/Delta có chứng cứ từ SGK thật

- **Q02/B16_OUT_03 (bảng giá trị)**: Trước sửa, Knowledge ứng viên B16 giải thích đỉnh/trục/đồ thị nhưng chưa có ví dụ **lập bảng (x,f(x))** dù SGK trang in 11 nêu rõ năng lực đó. Đã bổ sung bảng giá trị tự biên soạn của `f(x)=x²−4x+3`, tại `x=0,1,2,3,4` cho `f(x)=3,0,−1,0,3`, giải thích hai cặp điểm đối xứng và lý do phải vẽ đường cong thay vì nối điểm bằng các đoạn thẳng. Không dùng lại câu item canonical, không thay dữ liệu kiểm tra.
- B16 source Knowledge phải được khóa lại bằng **Git blob mới** trong intake ledger và bản đồ PED. Đây là bổ sung học thuật/sư phạm thực chất (`DELTA_C_ACADEMIC_MATERIAL`) trong scope SGK Knowledge; kiểm công thức, đường cong và logic bảng độc lập, **không tuyên bố reviewer Academic/PED PASS**.
- B17 ví dụ rào 20 m và B18 các dạng phương trình căn có mạch kết nối đúng chủ đề trong SGK mở đầu. Tuy nhiên, **chưa thể kết luận mọi ví dụ/từng outcome ở B15–B18 đủ S1** chỉ từ mục lục và trang mở đầu; phải xem tiếp chi tiết trang in liên quan khi ký receipt.

## B16 bổ sung đúng họ bài SGK 6.9–6.10 (trang in 16)

- Trang in **16** (trang PDF 17) có Bài tập 6.9, 6.10: xác định hệ số/phương trình parabol từ điểm, trục đối xứng hoặc đỉnh. Đây là chứng cứ về **phạm vi dạng bài**, không sao chép nguyên lời bài tập.
- Knowledge B16 được bổ sung ví dụ độc lập: \(I(1;2)\), \(A(0;0)\), \(y=a(x-1)^2+2\), \(a=-2\), suy ra \(y=-2x^2+4x\). Kiểm tại hai điểm đối xứng \((0;0),(2;0)\), kiểm đỉnh \(I(1;2)\). Nếu \(a=0\) thì không là hàm bậc hai; chỉ biết đỉnh chưa đủ để xác định một parabol duy nhất.
- Source SHA B16 sau bổ sung: `afe31b484ba60f8f7fed243b29995332a5609826`. S1 chứng minh **họ bài** trong SGK; chính ví dụ mới là nội dung tự biên soạn phải chịu tính toán ngược và PED QA theo Q18. Chưa suy rộng thành S1 đầy đủ từng outcome.

## SBT KNTT Tập 2 — nguồn tham khảo S1 đối chiếu dạng bài

- Đã đọc **Sách bài tập Toán 10 Kết nối tri thức, Tập 2**, bản scan trong chính thư mục Drive SGK lớp 10 của chủ dự án. Tên file `sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`, **143 trang PDF**, 16.249.440 bytes; SHA-256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`. Không đưa trang ảnh/bản PDF lên GitHub công khai.
- Đã đối chiếu mục lục (PDF trang 3) với trang in thực tế: **Bài 15 SBT trang in 3–9; Bài 16 trang in 10–15; Bài 17 trang in 16–18; Bài 18 trang in 19–21**. Trong khoảng này, **số trang PDF (đếm từ 1) = trang in + 1**.
- **SBT Bài 16 trang in 12 (PDF trang 13), Ví dụ 3** giải bài toán xác định hệ số parabol `y=ax²+bx+3` từ **hai điểm**, hoặc **một điểm và trục đối xứng**, hoặc **đỉnh**. Điều này củng cố rằng bài toán tìm ngược công thức từ dữ kiện hình học thuộc họ bài cần luyện; ví dụ mới trên Knowledge dùng số khác, chọn dạng đỉnh để giảm ẩn, không sao chép bài nguyên văn.
- **SBT Bài 16 trang in 14 (PDF trang 15), các bài 6.12–6.16** có yêu cầu nhận dạng, vẽ và tìm parabol từ dữ kiện/đỉnh/điểm; việc dạy bảng giá trị và công thức dạng đỉnh là nền phù hợp.
- **SBT Bài 17 trang in 16–18** có xét dấu và bất phương trình, trong đó minh họa mối liên hệ với bảng dấu; **Bài 18 trang in 19–21** triển khai hai dạng phương trình căn và phép thử nghiệm ứng viên. Không suy rộng thành đã đối chiếu từng câu trên toàn bộ 19 outcome.

## B17 đối chiếu sâu trực tiếp các trang in SGK/SBT

- Đã xem thực tế **SGK Toán 10 KNTT Tập 2 trang in 19–24** (PDF trang 20–25). Trang 20–21 hình thành dấu tam thức bằng vị trí đồ thị trên/dưới trục hoành và ba trường hợp của \(\Delta\); trang 22–23 chuyển sang bảng xét dấu, bất phương trình và ứng dụng rào vườn; trang in **24, bài 6.18**, kiểm tình huống chuyển động có điều kiện độ cao.
- Đã xem **SBT Toán 10 Tập 2 trang in 16–18** (PDF trang 17–19). Trang 16–17 có định lí dấu, ví dụ bất phương trình, tham số; trang in **18, bài 6.26** có mô hình quỹ đạo vật phóng. Hai tài liệu cùng hỗ trợ dạy **bất phương trình + miền thực tế** trong B17, nhưng không đòi tái dùng số liệu của sách.
- Trang Knowledge B17 đã thêm ví dụ do dự án tự xây dựng \(h(t)=-5t^2+20t+5\), giải độ cao ít nhất 20 m và lọc \(0\le t\le2+\sqrt5\); SHA của B17 \`93cd934ce90cc41d46d07a9af011975d6f930332\`. Bổ sung này nhằm outcome \`B17_OUT_05\` (ứng dụng), không phát hành thêm bài kiểm tra, không thay \`THPT-G10-CHVI-TRY15\`.
- Đã sửa lỗi hiển thị trong mục thuật ngữ B17: \`a\` và \`e0\` do chuỗi LaTeX bị vỡ dòng, thay bằng MathJax hợp lệ \(a\ne0\). Đây là sửa P1 trình bày có ảnh hưởng đọc hiểu, không được tự nâng lên PED PASS.
- **Giới hạn:** Mới kiểm trực tiếp S1 *phạm vi và các bài đại diện* trong B17, không kết luận tất cả 5 outcome đều đạt PED/Academic trên snapshot mới. Q18 và chuẩn hiệu lực chưa được chuyển.

## B18 — Kiểm trực tiếp SGK/SBT trang in và Delta C ứng dụng

- **SGK KNTT Toán 10 Tập 2, trang in 25–27 (PDF 26–28):** trang 25 trình bày hai phương trình căn \(\sqrt{A}=\sqrt{B}\), \(\sqrt{A}=B\) và yêu cầu **thử ứng viên vào phương trình ban đầu**; trang 26 có ví dụ loại nghiệm vì vế phải âm và vận dụng hai hành trình gặp nhau cùng lúc (mô hình **quãng đường/vận tốc**); trang 27 có bài tập 6.20–6.23 về căn và tình huống hình học/chuyển động.
- **SBT KNTT Tập 2 trang in 19–21 (PDF 20–22):** ghi chính xác phép bình phương và điều kiện miền căn/vế phải; ví dụ cho thấy loại ứng viên khi biểu thức dưới căn âm hoặc vế không chứa căn âm. Các bài 6.28–6.32 củng cố hai dạng căn và một số điều kiện tham số. SBT **không được trích là có cùng số liệu** với ví dụ gặp nhau tự soạn.
- **P1 thật tại B18_OUT_04/D6:** mục HELP-G10-CHVI-TRY19 từng hướng dẫn 'đánh dấu cạnh huyền 5', sai vai trò cạnh của thang; phải là **cạnh huyền 13 m, cạnh góc vuông 5 m**, độ cao 12 m. Đã sửa đúng nguồn có ID canonical bất biến.
- **Delta C tự biên soạn:** thêm ví dụ hai người đến cùng lúc qua đường đi xiên và đường thẳng, điều kiện \(0\le x\le8\), phương trình \(\sqrt{x^2+9}/5=(8-x)/4\); bình phương được \((x-4)(9x-364)=0\). Chỉ \(x=4\) thuộc miền và thỏa thời gian hai bên \(1\) giờ; loại \(x=364/9\) vì ngoài miền, thời gian phía \(C\) âm. Không sao chép bài vận dụng SGK p26. B18 Git blob sau sửa: \`712694dca594379ae27e49d6c192adf47b2d0d81\`.
- Dữ liệu phép tính đã được tái kiểm bằng máy từ biểu thức đại số, không biến thành Academic/PED reviewer PASS. Còn cần đánh giá khả năng học sinh mới đọc hiểu từng outcome khi hồ sơ Q18 có hiệu lực.

## Ranh giới chứng cứ

- Đã xác minh thật **ấn bản, số trang in ↔ trang PDF và outcome mở đầu** của B16–B18; phạm vi B15 từ mục lục và trang đầu.
- **Chưa kiểm chi tiết toàn bộ từng trang/câu SGK và SBT theo outcome, chưa ký `S1_CORE_FULL_QA_PASS`**; không được dùng báo cáo này làm reviewer verdict hay `CONTENT_READY`.
- Bản PDF và ảnh trang sách chỉ dùng nội bộ để QA, **không commit lên repo công khai**. Source sha256 là nhận diện bằng chứng, không là quyền sao chép tài liệu.
- Q15/Q16/RD1/Final Submit/Mastery, dữ liệu học sinh bất biến; `STANDARD_CONFLICT_HOLD`/chưa merge/deploy gói Kiến thức mới giữ nguyên.

**CHECKPOINT:** `S1_G10_CHVI_PAGE_RANGES_VERIFIED / B16_VALUE_TABLE_Q02_DELTA_C_FIXED_STAGED / S1_FULL_OUTCOME_PROOF_PENDING / Q18_HOLD / NO_DEPLOY`.
