# G10 B24 · Q18 R01 · SGK S1 và tự học hoàn chỉnh · 20/11/2026
**RECEIPT_ID:** G10-CHVIII-B24-S1-FIVE-SECTIONS-G0G2-Q18-R01-20261120
**LESSON_ID:** G10-SGK-CHVIII-B24
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18, không thêm chuẩn khác
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-24.md`
**R01_PREVIOUS_SOURCE_BLOB:** `1d7ac3e42f45ded6023573569c34c6d3d7b753cd`
**R01_CORRECTED_SOURCE_BLOB:** `7a6029b70a73376c8b2728b2d18efd7aa5b35a8c`
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (kiến thức §5, tiến trình giải thích và vị trí Tự thử)
**Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`; independent NotebookLM reviewer NOT_CLAIMED
**OWNER_P2:** `OWNER_P2_PENDING`; snapshot cũ bất biến
**MASTER:** #795, SGK-TAB-PLACEMENT-01

## G0 · S1, audit 79, Golden
Đã đối chiếu bản trình bày SGK Kết nối tri thức Toán 10 tập 2 **trang in 66–71** với learner source:
1. Hoán vị P_n=n!, n≥1, 0!=1 (tr.66–67).
2. Chỉnh hợp A_n^k=n!/(n-k)!, 1≤k≤n (tr.67–68).
3. Tổ hợp C_n^k=n!/[k!(n-k)!], 0≤k≤n (tr.68).
4. Ứng dụng đếm nhiều nhóm có điều kiện và chọn công cụ phù hợp (tr.69).
5. **Sử dụng máy tính cầm tay** (tr.70): SHIFT x!, nPr (SHIFT ×), nCr (SHIFT ÷), ví dụ 9!=362880, A_15^2=210, C_20^5=15504, với lưu ý phím tùy đời máy.
SGK văn bản https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf ; mirror https://sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-viii-dai-so-to-hop-3244/bai-24-hoan-vi-chinh-hop-va-to-hop-12036.html. PDF screenshot mirror bị cache miss; không tuyên bố đã inspect thành công ảnh trang PDF. SBT Toán 10 KNTT tập 2 Bài 24 trang in 54–55 dùng kiểm họ dạng, không thay định nghĩa S1: https://file.giaitoan.edu.vn/file-pdf/sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf .
79-deep audit bất biến PR #862 HEAD f44c6c7fa6c3108ad96e928e131fe769581f822d: B24 thiếu §5, Tab Khám phá quá mỏng. Golden đối chiếu B23 source đã nghiệm thu về vị trí, 4 tabs, lớp CSS chung B22; không sửa CSS/JS/Firebase.

## G1 · Một nguồn canonical, outcome matrix
| Outcome | Lý giải bản chất & Tự thử ở Khám phá | §2.x SGK | Ví dụ và D6 |
|---|---|---|---|
| G10-B24-PERMUTATION | TRY05 + HELP-G10-CHVIII-TRY05, gộp khối | §1 hoán vị | 4 sách AB kề → 12 |
| G10-B24-ARRANGEMENT | TRY06 + HELP-G10-CHVIII-TRY06, phân hai vai | §2 chỉnh hợp | 5·4=20, chọn ban phân vai |
| G10-B24-COMBINATION | TRY07 + HELP-G10-CHVIII-TRY07, hình 6 cặp/3 nhóm | §3 tổ hợp | 5 chọn 2 nhóm =10 |
| G10-B24-CONSTRAINTS | TRY08 + HELP-G10-CHVIII-TRY08, chọn đúng cơ cấu | §4 ứng dụng đếm | C6²·C5¹=75; ban 20 người =1,162,800 |
| Kỹ năng calculator liên thông ba outcome đếm, không sinh item đánh giá mới | Tự kiểm công thức trước khi bấm | §5 sử dụng máy tính | 9!, nPr, nCr, ràng buộc số nguyên |

## G2 · Tự đọc cả bốn tab và chống lặp lỗi
Khám phá: động cơ → tiền đề → giải thích lý do/phạm vi → **4 câu Vận dụng + Đối chiếu đóng mặc định + 4 Kiểm lỗi đúng ngữ cảnh** trước Core. Giữ nguyên ID/đề/đáp án/lập luận/5 bước từ source cũ; chỉ đổi tên fold HELP. Kiến thức SGK theo đúng **5 mục** có khung khái niệm, quy tắc, và giải thích điều kiện riêng (hoán vị n≥1; chỉnh hợp 1≤k≤n; tổ hợp 0≤k≤n), khắc phục `0le kle n`. SVG `G10_B24_ORDER_VS_COMBINATION_R02.svg` dùng chính ảnh cũ trong Khám phá và SGK, caption hướng dẫn đọc, không tạo hình giả.
Ví dụ: so nhóm/phân vai 20 vs10; gộp khối12; chọn đúng2 nam1 nữ từ6nam5nữ là15×5=75; chọn 6 người trong 20, hai chức vụ riêng: 20×19×C18^4=380×3060=1,162,800 =C20^6×30. Lỗi thường gặp: 2 D6 tổng quát `D6-G10-B24-01/02` giữ nguyên tại tab4, không chuyển nhầm sang Ví dụ hay Vận dụng.
**Source preservation verified:** 4/4 First Try IDs, 6/6 HELP IDs, 4/4 voluntary answer folds preserved, toàn bộ 14 MathJax expressions cũ không mất, đúng 4 Golden tabs, không đổi Core/Practice/RD1/Final Submit/Mastery. Source G2 affected scope `P0=0 P1=0`, không giả danh independent Academic/PED PASS.
**G3–G5:** khi exact-head CI nguồn, Chromium 390/820/1440 Golden/MathJax/SVG/Q15/Q16, deploy proof SHA/answers PASS mới merge và publish. Owner P2 thực tế riêng.
