# AUTHORING — Owner process decision: NotebookLM reviews math/pedagogy, AUTHORING owns file provenance

> **QUYẾT ĐỊNH MỚI NHẤT CỦA CHỦ DỰ ÁN 05/11/2026 — ƯU TIÊN HỌC THUẬT, THAY THẾ DIỄN GIẢI CŨ:** Mục tiêu của AUTHORING chỉ là biên soạn học liệu đúng, đủ, có chiều sâu; review NotebookLM kỹ từng nội dung; sửa những lỗi thật; bàn giao. Việc kiểm tra Git blob/metadata phục vụ truy vết tối thiểu, **không được tự tạo thêm vòng xét duyệt nếu reviewer đã mô tả chính xác đề, đáp án, lập luận, hình và outcome của học liệu**. Chênh lệch số byte đơn độc không là một phát hiện sai toán hoặc sai sư phạm. Không xây công cụ, chuẩn hoặc báo cáo kỹ thuật phụ để vượt qua blocker tự phát sinh; vẫn giữ chuẩn Q01–Q18, biên bản review và an toàn RD1. Quyết định này **thay thế** phần diễn giải trong tài liệu cũ đòi truy nguyên byte R02 bằng mọi giá. Học thuật Toán 10 hoàn thành SGK trước, sau đó mới xét Chuyên đề. Chi tiết tại `AGENTS.md` trong cùng nhánh AUTHORING.


DECISION_DATE: 2026-11-05
DECISION_AUTHORITY: PROJECT_OWNER
SCOPE: SLM_THPT_AUTHORING_NOTEBOOKLM_HANDOFF
TYPE: OWNER_WORKFLOW_CLARIFICATION_NOT_NEW_QUALITY_STANDARD
NORMATIVE_STANDARD: SLM-THPT-QUALITY-ONE Q01–Q18 (unchanged)
RELEASE_AUTHORIZATION: NO

## Operational role boundary

**NotebookLM** performs independent academic and pedagogical review against the five THPT Permanent Sources v2.1 and the correct S1 SGK/SBT. Return outcomes, item IDs, actual errors/conditions, Academic/PED verdict, P0/P1/P2, minimal material delta and the source identifier supplied with the review. Do **not** ask NotebookLM to use Python, GitHub APIs, hash normalization, or to reconcile Git blobs, line endings, byte counts, tool ingestion and private mount directories.

**AUTHORING** owns all file preparation, accurate single canonical `Temp_` artifact delivery, snapshot versioning, SHA/receipt management, item/outcome ID verification, technical source-difference diagnosis and Q18 evidence. Ensure the actual review artifact is the same intended curriculum as the Git source **before** submitting it to NotebookLM, rather than repeatedly requesting technical post-hoc verification from the reviewer. When there is a discrepancy in byte identity, resolve it with author-controlled tools/source copies and document evidence; never treat a claimed semantic match as a proven cryptographic match.

**Review efficiency:** Preserve independent Academic/PED PASS for content already reviewed and identified by exact outcome/item/problem; do not ask NotebookLM to re-review unchanged material or run technical scripts. Request scoped independent review again **only** for an actual academically material Delta C or a demonstrably different educational source—not solely metadata, newlines, or size mismatches. Owner's newest decision governs this workflow; do not create a second Q01–Q18 standard or relax actual Q18 audit traceability.

## Immediate ChVI interpretation

On Draft PR #756, original R02 instructional Git blob `1e6a76ee32b722b5e5457e85f90eb32f4d98b57d` remains immutable. Reviewer-reported 19/19 new Academic/PED PASS and Q07/PED4 PASS of two matching SVG diagrams are preserved, along with historical R01 54/54 PASS. Q18 external mounted-byte difference remains an **AUTHORING evidence task**, not an assignment for NotebookLM. Record any unresolved provenance transparently; do not claim Q18 PASS, `CONTENT_READY`, official RD1, Mastery, release, merge or deploy without their separate gates.

**Next author action:** When the source-equivalence evidence is available through author-owned methods, conclude Q18, assemble FULL R03 V2 and handoff; otherwise state the exact blocker and prioritize useful content work rather than generating another NotebookLM hash-check cycle.
