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

## Ranh giới chứng cứ

- Đã xác minh thật **ấn bản, số trang in ↔ trang PDF và outcome mở đầu** của B16–B18; phạm vi B15 từ mục lục và trang đầu.
- **Chưa kiểm chi tiết toàn bộ từng trang/câu SGK và SBT theo outcome, chưa ký `S1_CORE_FULL_QA_PASS`**; không được dùng báo cáo này làm reviewer verdict hay `CONTENT_READY`.
- Bản PDF và ảnh trang sách chỉ dùng nội bộ để QA, **không commit lên repo công khai**. Source sha256 là nhận diện bằng chứng, không là quyền sao chép tài liệu.
- Q15/Q16/RD1/Final Submit/Mastery, dữ liệu học sinh bất biến; `STANDARD_CONFLICT_HOLD`/chưa merge/deploy gói Kiến thức mới giữ nguyên.

**CHECKPOINT:** `S1_G10_CHVI_PAGE_RANGES_VERIFIED / B16_VALUE_TABLE_Q02_DELTA_C_FIXED_STAGED / S1_FULL_OUTCOME_PROOF_PENDING / Q18_HOLD / NO_DEPLOY`.
