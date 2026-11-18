# G10 Chương VI B15–B18 — Golden Ví dụ UX Delta · Q18 follow-on receipt

**Ngày:** 13/11/2026 · **Nhánh:** `release/g10-chvi-b15-b18-example-ux-fix-20261113`.
**Gốc phát hành P1 bất biến:** `f23f22bdb0a01c35d73f21a6fe6ec9d1de0f9160` (PR #838).
**Nguồn thẩm quyền:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18 / §X-C/§X-F, S1 Toán 10 KNTT Tập 2 và [receipt ChVI gốc](G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md). **Không sửa/thay PASS hoặc các SHA của receipt gốc.**
**Loại Delta:** `DELTA_A_UI` — chỉ đổi phạm vi khung ví dụ; `DELTA_C_ACADEMIC_MATERIAL` — chỉnh cách tách đề/lời giải và ghi chú điều kiện toán B17 theo góp ý của chủ dự án, tự kiểm chứng phần chịu ảnh hưởng. Nguồn học liệu gốc đã phát hành, dùng đúng `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` có phạm vi. **Không tự nhận đã có NotebookLM Academic/PED PASS mới**, không biến demo thành chấm chính thức, chưa có quyền phát hành P1 từ receipt này.

## 1. Source chain bất biến

Bốn tệp sau phải khớp Git blob SHA **chính xác**; cột đầu là phiên bản ChVI **đã phát hành**, cột thứ hai là bản sửa UX. Hợp đồng này là delta bổ sung, không thay thế receipt ChVI ban đầu.

| LESSON | PREVIOUS_PUBLISHED_BLOB | UX_CANDIDATE_BLOB | GOLDEN_EXAMPLE_SECTIONS |
|---|---|---|---:|
| B15 | `1db49afc587c8c736e1c870851d431d0bca0d6a6` | `01d905b7dd058515da590e63af1aeece5b34a081` | 1 |
| B16 | `5ead550c6d590e781b2cff55e15e0bfcb3a73b83` | `4ddf9c449f92a9f48bace5a3f9b84186bf33af20` | 4 |
| B17 | `7f2b4ecdd3245b03924220b700668dde775722d2` | `1a3481ee2020f48e924dae5e8b4f5779b3a2d88b` | 4 |
| B18 | `a392c81f8c80270a97db142edf1cca6e37fccf71` | `91d22f1af8814ed639ada3ee1c9dae2e9501c4c0` | 4 |

**Golden UI JS baseline:** `2ba110695cbea4e1e0171918925f74b6abb738d9`; **candidate:** `53be8f8e427a4d813651d8352f9fde4b98a2de1e` — chỉ có trình xử lý DOM *scoped* B15–B18, dùng lại CSS Golden chung, không đổi THCS, ChIV, ChV, G11/G12.

## 2. Owner-reported defect → giải pháp

| # | Phạm vi bị ảnh hưởng | Chỉnh UX/giá trị cho người học |
|---|---|---|
| UX-01 | B15–B18 tab 3 | Với **ví dụ giải toán**: `Đề bài`, lý do chọn phương pháp, điều kiện, câu hỏi tự luyện nằm **ngoài** khung; chỉ `Lời giải` và các bước tính nằm **trong** `.thpt-g10-example-solution`. Ghi chú tự kiểm/giới hạn áp dụng ngoài khung. Không ép mọi ví dụ vào cùng số đoạn. |
| UX-02 | B16, ví dụ vận dụng hai mô hình có cùng bản chất | Chỉ một ngoại lệ có lý do: nhóm `Mở rộng mô hình thực tế từ phần cuối Bài 16` là một diễn giải so sánh hai mô hình, không có đề/lời giải dạng riêng, được giữ **toàn bộ trong khung**. Các ví dụ bài toán khác của B16 được tách rõ nhãn; hai bài toán cụ thể vẽ parabol và tìm đỉnh tách thành hai đề mục để người học không nhầm. |
| UX-03 | B15/B17/B18 sau lời giải có ba bài tự luyện độc lập | Nêu rõ `Tự luyện thêm`; nhãn tự mở `Xem lời giải ba câu tự luyện` thay cho `Đối chiếu` không giải thích vai trò. Ba lời giải tự luyện **giữ nguyên** và chỉ hiện sau khi tự mở, không nhân bản `item_id` chính thức. |
| UX-04 | B16–B18 | Bỏ `Ví dụ tự biên soạn`, `Ví dụ 5 (tự soạn)` và nguồn gốc quản trị khỏi trang học; nhãn `Đề bài`/`Lời giải` đọc được rõ ràng. |
| UX-05 | B17 ví dụ tham số | Thay câu `Lưu ý về phạm vi Core và mở rộng` + nội dung SGK/SBT/outcome nội bộ bằng câu hỏi học sinh có thể dùng: `Nếu hệ số bậc hai cũng phụ thuộc tham số thì sao?`. Điều kiện đúng: chỉ dùng định lí dấu tam thức bậc hai khi hệ số `a(m)≠0`; khi `a(m)=0`, cần giải riêng trường hợp bậc nhất/hằng. Giữ nguyên mục tiêu vận dụng giải bài tham số với `a=1>0`, đáp án `m<1`. |

## 3. Invariants và cổng kiểm thử

- **Q01–Q02, Q03–Q08, PED1–PED6 phần chịu ảnh hưởng:** Không thay bảng dấu, điều kiện hàm bậc hai/căn thức, tập nghiệm, tập giá trị, biểu thức toán cũ; người học phân biệt rõ đề — lời giải — tự kiểm — tự luyện. Trường hợp ngoại lệ B16 không che mất điều kiện miền xác định, đơn vị, miền vật lý.
- **Q15/Q16:** 19 First Try canonical, 19 D6 HELP, original answer bodies, outcome IDs, SVG, figures, **mọi công thức TeX cũ** giữ nguyên; 13 nhóm ví dụ (1/4/4/4); ba nhóm tự luyện không tăng canonical item; không lộ đáp án trước khi người học tự mở, không chỉnh Final Submit hoặc Mastery.
- **Q18:** Lập chuỗi SHA `original ledger → ChVI S1/Q18 receipt bất biến → follow-on ví dụ UX`. Các test chỉ chấp nhận SHA ứng viên cuối khi khớp cả hai receipt, kiểm tra biến dị SHA/ID/đáp án, cùng baseline phát hành `f23f22bd`.
- **AP1–AP5 / R1–R5:** Chỉ phần `Lời giải` đóng khung (ngoại lệ một diễn giải B16), đề bài/bài tập thêm nằm ngoài; đối chiếu thực trên 390/820/1440, keyboard, MathJax/SVG, cả 27 trang Toán 10 và R4/UX795/Roadmap. Không thay CSS chung, Core/Practice/Readiness/RD1, Firebase/Gemini, THCS/G11/G12, deep-link, dữ liệu người học.
- **Phân định QA:** Đây là bản **chờ QA**. Chưa claim QA PASS, chưa merge/deploy; P2 iPhone thực của ChVI cần chủ dự án xác nhận riêng. P2 của ChIV–V không suy rộng.

**Trạng thái khi tạo:** `CHVI_EXAMPLE_UX_SOURCE_STAGED / DELTA_A_AND_C_REVIEW_SCOPE / QA_PENDING / DRAFT_NO_MERGE_NO_DEPLOY`.
