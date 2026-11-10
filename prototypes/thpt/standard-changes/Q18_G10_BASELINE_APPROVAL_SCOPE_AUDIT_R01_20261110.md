# RELEASE baseline evidence audit — Toán 10 Knowledge B01–B27 (metadata only)

**Ngày:** 10/11/2026 · **Mục đích:** xác định hồ sơ nghiệm thu học thuật **đã có** theo từng cụm bài trước khi tự kiểm chứng những phần giảng giải/ví dụ/hình mới trong [PR #797](https://github.com/TMA2015/self-learning-math/pull/797). Đây là bằng chứng tìm thấy/khóa phạm vi, **KHÔNG phải Academic/PED verdict mới**, không xác nhận sự tương đương của 27 trang mới. Vẫn `STANDARD_CONFLICT_HOLD` tới khi Q18 đổi phiên bản và điều kiện handoff hoàn tất.

**Nguồn kiểm:** GitHub `main=8cc356eb6e2ffa9e751e653d9c6a7f74a5949039` (xem từng `ready/G10-SGK-*.md`, riêng ChVI `inventory/G10-SGK-CHVI.md`). Dòng `RELEASE_SCOPE` gốc chủ yếu là **PUBLIC_FORMATIVE_ONLY**; không suy ra `FULL_LEARNING_PATH`, độc lập Chapter/Topic Readiness, hoặc Mastery. Đối chiếu Git blob cụ thể của từng trang ứng viên tại [G10 intake R01](../ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md).

| Bài | Phạm vi hồ sơ gốc | Bằng chứng nghiệm thu được tìm thấy trong main | Điều kiện tiếp nhận self-QA của bài mới |
|---|---|---|---|
| B01–B02 | Chương I | `release-queue/ready/G10-SGK-CHI.md`: A3 NotebookLM R01 18/18, 11/11 outcomes và D1–D6 PASS; `THPT_G10_CHI_B01_B02_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md` | Chỉ đối chiếu lời dẫn/ví dụ/hình mới với snapshot R01, không review lại 18 canonical items |
| B03–B04 | Chương II | `release-queue/ready/G10-SGK-CHII.md`: R01 18/18, 10/10 outcomes D1–D6 PASS | Tách Delta C của phần trình bày mới, giữ item bank cũ |
| B05–B06 | Chương III | `release-queue/ready/G10-SGK-CHIII.md`: R01 18/18, 10/10 outcomes D1–D6 PASS | Kiểm phép tính, đơn vị và hình khảo sát B06 mới theo S1 |
| B07–B08 | Chương IV (cụm 1) | `release-queue/ready/G10-SGK-CHIV.md`: R01 18/18, 10/10 outcomes D1–D6 PASS | Giữ bản R01 bất biến; kiểm đúng phần giảng thêm |
| B09–B11 | Chương IV (cụm 2) | `release-queue/ready/G10-SGK-CHIV-B09-B11.md`: R01 27/27 items, 14/14 outcomes D1–D6 PASS | Không suy PASS sang câu hoặc outcome mới ngoài phạm vi cụm |
| B12–B14 | Chương V | `release-queue/ready/G10-SGK-CHV.md`: R01 27/27 IDs, 14/14 outcomes PASS; HELP01/02 và FIG01 có delta receipts riêng | Bảo toàn Help/rubric; nguồn mới phải chứng minh điều kiện và nội dung bổ sung |
| B15–B18 | Chương VI | `release-queue/inventory/G10-SGK-CHVI.md` **PUBLISHED_SCOPED** và `THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`: reviewer Academic overall PASS 54/54 items, 19/19 outcomes thuộc snapshot; `THPT_G10_CHVI_APPROVED_KNOWLEDGE_PARITY_S1_20261028.md` ghi mapping Knowledge | **Đặc biệt:** A5 của manifest ChVI đang unchecked, không được gọi Chapter FULL PASS; chỉ dùng Academic PASS đúng snapshot và scope để đối chiếu phần Knowledge mới, cần PED/baseline mapping trước khi ký self-QA |
| B19–B22 | Chương VII | `release-queue/ready/G10-SGK-CHVII.md`: A3 reviewer scoped PASS; D1/D2, D3/D4, D5/D6 receipts, PUBLIC_FORMATIVE_ONLY | B22 conic và các hình/điều kiện mới cần tự kiểm S1, không đổi bank |
| B23–B25 | Chương VIII | `release-queue/ready/G10-SGK-CHVIII.md`: A3 reviewer scoped PASS, PUBLIC_FORMATIVE_ONLY; receipt chung ChVII/VIII | Xác minh dữ kiện phép đếm/Nhị thức và ba hình mới theo outcome |
| B26–B27 | Chương IX | `release-queue/ready/G10-SGK-CHIX.md`: D1–D4 và D5–D6 owner-supplied reviewer PASS, 16 canonical public, 6 private Readiness not activated | Không đưa private Readiness lên public; xác minh giả thiết đồng khả năng trong ví dụ mới |

**Phát hiện quan trọng:** Có **hồ sơ reviewer cũ cho toàn bộ 27 bài theo các gói khác nhau**, nhưng *đúng phạm vi* của từng gói không đồng nhất và không phải biên bản tự kiểm cho các trang mới. Đặc biệt ChVI chỉ `PUBLISHED_SCOPED`, A5 chưa đóng; không gán full chapter readiness. Tất cả hồ sơ phải đối chiếu đúng SHA/phiên bản gốc và `OUTCOME_ID` trước khi AUTHORING dùng làm baseline trong receipt mới. Không suy từ tên file, nhãn PASS hoặc tổng 27 bài sang Q18 PASS.

## RELEASE handoff checklist khi chính sách mới có hiệu lực

1. AUTHORING tra cụm bài ở bảng trên, lấy **đúng academic source blob + reviewer receipt blob** (không lấy Git commit hoặc tên tệp làm SHA), chứng minh mapping baseline Knowledge trong trang cũ và candidate.
2. Mỗi Delta mới có Lesson/Outcome ID, chứng minh S1 theo trang in, tự tính/kiểm ngược ví dụ, kiểm ngữ nghĩa SVG, PED. Khi không chứng minh được thì HOLD đúng delta, không ký PASS giả.
3. RELEASE kiểm 27 candidate Markdown SHA, 11 figure SHA, 137 First Try + 115 HELP canonical IDs; Q15/Q16/Final Submit/RD1/Mastery; current main CSS-only integration đã QA PASS nhưng cần chạy final-head sau khi receipt đổi.
4. Chỉ khi chuẩn Q18 mới được owner duyệt chính xác, Source 07, V2 ready gate/handoff đã chính thức tương thích, nhận receipt thật và release full QA PASS, mới merge/deploy theo quyền đã cấp; không bypass R4 cũ để xanh CI.

**CHECKPOINT:** `BASELINE_REVIEW_POINTERS_FOUND_27/27 / BASELINE_SCOPE_MIXED / CHVI_A5_OPEN / SELF_QA_RECEIPT_NOT_CREATED / GOVERNANCE_PR804_DRAFT / G10_PR797_UNRELEASED`.

**Đây là bảng chỉ mục bằng chứng** (RELEASE), không thay một chuẩn Q01–Q18, không cấp reviewer verdict và không tạo tài liệu RD1 public.