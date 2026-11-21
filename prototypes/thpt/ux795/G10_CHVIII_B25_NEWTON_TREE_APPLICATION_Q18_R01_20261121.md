# G10 B25 · Q18 R01 · Nhị thức Newton đầy đủ S1 và bốn tab Golden · 21/11/2026

**RECEIPT_ID:** G10-CHVIII-B25-NEWTON-TREE-APPLICATION-Q18-R01-20261121
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18; Golden B24 owner P2 PASS
**LESSON_ID:** G10-SGK-CHVIII-B25
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-25.md`
**R01_PREVIOUS_SOURCE_BLOB:** `eebf2002e558f3c8e2bf049fd9a734bf01cc4f7c`
**R01_CORRECTED_SOURCE_BLOB:** `4b8d329366e0710cbf5a6546d219e9d75f18abcb`
**FIGURE_PATH:** `docs/assets/images/thpt/G10_B25_NEWTON_BRANCH_TREE_R01.svg`
**FIGURE_GIT_BLOB:** `5864e67017b78f6941dabd17b366bf4c44f999d8`
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` · nâng cấp tiến trình giải thích, thêm sơ đồ nhánh thật + ứng dụng xấp xỉ, chỉnh vai trò tab
**Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · self QA affected scope, `INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED`
**OWNER_P2:** `OWNER_P2_PENDING` (B25), B24 R03 `OWNER_P2_PASS` preserved
**MASTER:** Issue #795 · defect `CHVIII-B25-01/02`, `SGK-TAB-PLACEMENT-01`, `SGK-UI-CONTENT-01/02`, `SGK-UI-EXAMPLE-03`

## G0 · Source authority and actual scope

SGK Toán 10 Kết nối tri thức tập 2 **trang in 72–75**, Bài 25: HĐ1–HĐ3 tạo hệ số bằng sơ đồ nhân các nhị thức, n=4; HĐ4 bậc 5; ví dụ khai triển và luyện tập; vận dụng gần đúng (1,05)^4, (1,02)^5, sai số tuyệt đối; ứng dụng dân số thay đổi theo tỉ lệ 8.16. SBT tập 2 Bài 25 trang in 56–57 (bài hệ số và khai triển) dùng đối chiếu độ sâu, không thay S1. Văn bản nguồn SGK PDF `https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf` được đọc ở phần B25; thao tác lấy screenshot PDF mirror trả cache miss: **không tuyên bố xác minh offset trang PDF bằng hình**. Audit Deep S1 79 PR #862, source G10_CHVIII_B23_B25_DEEP_S1_PED_COUNTING_NEWTON_AUDIT_R01_20261114.md nêu P1 thiếu nhánh cây và vận dụng gần đúng/độ sâu, role inversion, nhãn sai, duplicate.

## G1 · Matix nội dung/outcome và canonical

| Outcome | Bằng chứng G1 sau sửa | Canonical inherited |
|---|---|---|
| NEWTON_EXPANSION | 1.1 cây 8 lá → 1.2 đếm vị trí; 2.1/2.2 công thức n4/5; 3.1/3.3 giải đầy đủ | TRY09 + HELP-TRY09 ở Khám phá |
| COEFFICIENT_SIGN | 1.3 đếm số âm; 2.4 điều kiện/giới hạn; 3.2/3.3 phân tích dấu | TRY10 + HELP-TRY10 ở Khám phá |
| CONSTANT_TERM | 1.4 chọn toàn hạng không có x; 2.4 hệ số; 3.4 hệ số độc lập | TRY11 + HELP-TRY11 ở Khám phá |
| COEFFICIENT_SUM | 1.5 lý giải P(1); 3.1/3.3 kiểm tổng hệ số | TRY12 + HELP-TRY12 ở Khám phá |
| NEWTON_APPLIED_ESTIMATE (S1 coverage, không sinh item mới) | 1.6 nguồn sai số; 2.5 quy tắc gần đúng; 3.5 1,05^4; 3.6 800 nghìn tăng 1,5%/năm | Existing Practice/Written only; not a new graded item |

**One source canonical:** chỉ đổi file `bai-25.md`, không tạo bản học liệu song song, không sửa bank hay RD1. 4 existing First Try IDs `THPT-G10-CHVIII-TRY09..12` cùng 4 HELP `HELP-G10-CHVIII-TRY09..12` và 2 D6 `D6-G10-B25-01/02` được giữ đúng một lần, 4 phần Đối chiếu gốc và lời giải giữ nguyên byte; điều chỉnh nhãn 4 HELP thành Kiểm lỗi (đóng mặc định). 2 D6 tổng quát chỉ ở tab4. Tab3 có 6 ví dụ khác tình huống Tự thử, nhãn Phân tích, khung Golden, lời giải/kiểm lại. Hình Pascal R02 giữ ở Tab2 với lời hướng dẫn đọc, hình mới `G10_B25_NEWTON_BRANCH_TREE_R01.svg` 3 tầng, 8 lá ở Tab1 cho phép học sinh kiểm 1,3,3,1.

## G2 · Self-review mathematics / PED / rendered role

- Bài đi theo WHY → hằng đẳng thức và tổ hợp → cây chọn từng hạng tử → 4 Vận dụng trước khi đối chiếu → Kiểm lỗi đúng câu → công thức trong khung xanh/lam → 6 ví dụ chuyển giao → 2 lỗi tổng quát ở tab 4. Không có heading metadata (SGK tr...), không có nhãn Vì sao chọn cách này, không có đoạn Lộ trình SGK dư thừa.
- Công thức n=4 đúng 1,4,6,4,1; n=5 đúng 1,5,10,10,5,1. (2x+1)^4=16x4+32x3+24x2+8x+1; (x-2)^4=x4-8x3+24x2-32x+16; (3x-2)^5 hệ số [243,-810,1080,-720,240,-32], kiểm x0/x1; coefficient x4 (3x-1)^5=-405.
- 1,05^4=1,21550625; lấy hai hạng 1,20; sai số 0,01550625. Dân số 800(1,015)^5=861,8272031075 (nghìn), gần đúng 860, sai số 1,8272031075 (nghìn). Điều kiện tăng đều ghi rõ.
- Hình 8 lá cho 1aaa+3aab+3abb+1bbb có đủ 3 cấp rẽ; Pascal R02 là kiểm hệ số, không đánh tráo thành hình nhánh; hình có alt/caption và hướng dẫn đọc.
- Đã đối chiếu source G2: 4/4 TRY, 6/6 HELP/D6 canonical ID, 4/4 khung đáp án/giải gốc, D6 tổng quát byte intact, 4 tab, đúng B25 route, 6 Golden solution cards, không còn nhãn sai; Q15/Q16 RD1 Mastery Firebase/AI Tutor/bank không đổi. `G2_AFFECTED_SCOPE_P0=0_P1=0`, không tự tuyên bố independent Academic/PED verdict.

## G3–G5

Chỉ dùng cổng hiện hữu: `scripts/thpt-q18-g10-source-receipt.cjs` khóa blob nguồn và SVG, Classified scoped one lesson+figure; Scoped SGK browser 390/820/1440, SVG/MathJax/AP1–AP5/Q15/Q16/RD1; Roadmap QA, deploy exact HEAD; đọc published gh-pages HTML. **Chưa PASS G3–G5 tại thời điểm lập receipt.** Owner P2 chỉ chủ dự án ký sau khi xem.
