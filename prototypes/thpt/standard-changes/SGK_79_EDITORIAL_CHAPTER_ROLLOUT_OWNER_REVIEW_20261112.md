# THPT SGK Editorial Rollout — lộ trình theo chương (chưa cho phép triển khai học liệu)

**TRACK:** RELEASE/UI-GOVERNANCE, chỉ lập chuẩn/mẫu/kiểm kê. AUTHORING nguồn SGK quyết định tên đề mục và điều kiện toán.  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.0.1`; đề xuất v3.1.0 tại `SCR-SGK-79-EDITORIAL-20261112` **chưa có hiệu lực**.  
**OWNER GOLDEN:** `PENDING`. **MERGE/DEPLOY:** `HOLD`. **G11:** `PAUSED`. **G12:** `NOT OPENED`.  
**MAIN SOURCE:** `92d05d3b3939b385123495d7237d19995c3ea505`. **Baseline audit:** `43186769722`.

## Kế hoạch 24 chương / 79 bài SGK

Danh sách dưới đây là **danh sách thực**, không phải lịch phát hành đã cam kết. `F` là cờ cấu trúc nguồn, *không phải số bài sai toán*.

| Lớp | Chương | Bài | Số bài | Có cờ F (nguồn) | PED-label | Lặp SGK | Trạng thái |
|---:|:---:|:---|---:|---:|---:|---:|---|
| 10 | I | 1–2 | 2 | 2 | 0 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | II | 3–4 | 2 | 2 | 0 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | III | 5–6 | 2 | 2 | 0 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | IV | 7–11 | 5 | 5 | 1 | 5 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | V | 12–14 | 3 | 3 | 0 | 3 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | VI | 15–18 | 4 | 4 | 0 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | VII | 19–22 | 4 | 4 | 4 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | VIII | 23–25 | 3 | 3 | 3 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 10 | IX | 26–27 | 2 | 2 | 2 | 0 | AWAIT_GOLDEN_THEN_CHAPTER_REVIEW |
| 11 | I | 1–4 | 4 | 4 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | II | 5–7 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | III | 8–9 | 2 | 2 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | IV | 10–14 | 5 | 5 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | V | 15–17 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | VI | 18–21 | 4 | 4 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | VII | 22–27 | 6 | 6 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | VIII | 28–30 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 11 | IX | 31–33 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | I | 1–5 | 5 | 5 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | II | 6–8 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | III | 9–10 | 2 | 2 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | IV | 11–13 | 3 | 3 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | V | 14–17 | 4 | 4 | 0 | 0 | HOLD_OWNER_SCOPE |
| 12 | VI | 18–19 | 2 | 2 | 0 | 0 | HOLD_OWNER_SCOPE |

## Cổng bắt buộc theo đúng thứ tự

1. **G0 — OWNER_GOLDEN:** owner kiểm trực tiếp bốn tab, các đầu mục 1.x/2.x/3.x/4.x, form bảng, khung công thức/định nghĩa/ghi nhớ và ví dụ; sửa mẫu nếu cần. Chưa đánh PASS trước khi owner xác nhận.
2. **G1 — NORMATIVE:** sau G0, bổ sung chuẩn biên tập vào **đúng file chuẩn Q01–Q18 hiện hành**, version 3.1.0 và quyết định owner; CI governance PASS; không tạo chuẩn song song.
3. **G2 — SOURCE S1:** mỗi chương kiểm SGK KNTT **trang in**, Bài→đầu mục SGK→outcome→công thức/định nghĩa/điều kiện; không tự đoán tiêu đề bằng script. Nếu thiếu S1, giữ `STANDARD_CONFLICT_HOLD` hoặc `AUTHORING_DEFECT` đúng nơi.
4. **G3 — AUTHORING/PED:** chuyển phần khám phá sang 1.x, kiến thức SGK liền mạch 2.x, ví dụ giải 3.x, D6 4.x; chỉnh Delta A/B/C theo mức ảnh hưởng. Bảo toàn toán/First Try/IDs và receipt SHA; review theo phần thay đổi đáng kể.
5. **G4 — RELEASE/QA:** kiểm source lock Q18, các nhãn 4 tab/đầu mục, bảng/hình/MathJax, AP1–AP5, responsive 390/820/1440, R1–R5/Final Submit/Q15/Q16/RD1/Mastery, THCS/Topic/Gemini/Firebase unaffected. Không dùng green CI làm S1 PASS.
6. **G5 — OWNER REVIEW CHAPTER:** nghiệm thu cả đọc hiểu bài thực và chứng cứ Git SHA/CI. Chapter PASS không suy toàn lớp PASS; chỉ sau đó mới chuyển sang chương kế.
7. **G6 — OWNER RELEASE PERMISSION:** chỉ merge/deploy nếu toàn bộ cổng và quyền rõ ràng. P1 production HTTP/P2 thiết bị thật theo yêu cầu. G11/G12 chỉ mở khi owner gỡ HOLD.

## Trường dữ liệu checkpoint mỗi chương

- `GRADE / CHAPTER / LESSON_IDS / MAIN_BASE_SHA / SOURCE_S1_PRINTED_PAGE_RECEIPT`.
- `OLD_SOURCE_BLOBS / NEW_SOURCE_BLOBS / DELTA_A_B_C_D / AUTHOR_SELF_QA_RECEIPT (nếu material)`.
- `EDITORIAL_GOLDEN_VERSION / OUTCOME_COVERAGE / FORMULA_TABLE_FIGURE / EXAMPLE_PLACEMENTS`.
- `Q15_Q16_RD1_FINAL_SUBMIT_MASTERIES / AP1_AP5 / R1_R5 / CI_EXACT_HEAD / P1_P2`.
- `OWNER_APPROVAL / BLOCKERS / NEXT_CHAPTER`.

**Cạnh tranh công việc:** PR #819 (sửa hình/đầu mục cục bộ G10) cần đối chiếu lại sau Golden, không merge trên giả định đã đúng chuẩn. PR #816 G11 tiếp tục HOLD. Chủ dự án duyệt mẫu trước tiên; bảng này không tự cấp quyền AUTHORING/RELEASE.
