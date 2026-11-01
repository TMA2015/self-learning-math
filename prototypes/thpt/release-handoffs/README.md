# THPT — Bàn giao nguồn học thuật cho nhánh phát hành (A6)

Thư mục này chỉ chứa **biên bản handoff**, tức con trỏ đến nguồn học thuật/Temp review, SGK/SBT, verdict và snapshot đã khóa; **không phải manifest RELEASE_READY**. Các biên bản được chuyển nguyên byte từ những Draft PR biên soạn Toán 11 để tránh trộn với gói phát hành.

## Giới hạn

- Tạo `G11-...-A6_HANDOFF_*.md` tại đây sau khi có review học thuật đúng snapshot; dẫn source Git blob/SHA và danh sách ID, D1–D6, SGK/SBT, delta còn mở, yêu cầu R1–R5, phạm vi được nghiệm thu.
- Giữ nguyên nguồn content-drafts, Temp NotebookLM và phiếu review; không copy riêng ngân hàng held-out hoặc đáp án vào public GitHub.
- Không ghi `STATE: CONTENT_READY` hoặc `RELEASE_READY` cho biên bản này; không thêm handoff vào `release-queue/REGISTER.md`.
- Chỉ tạo/move manifest canonical theo `release-queue/PACKET_TEMPLATE.md` vào `release-queue/inventory/`; sau A1–A7 đúng phạm vi mới chuyển manifest sang `release-queue/ready/`, đồng bộ REGISTER. Kiểm tra AP1–AP5 theo chính sách hiện hành.
- Nhánh phát hành giữ nguyên full QA trên đúng HEAD, kiểm tra THCS, Gemini, dữ liệu học sinh và chỉ merge/deploy theo phê duyệt của chủ dự án. Academic PASS không tự cấp quyền deploy hoặc Skill Mastery.

## CI

PR chỉ chạm các nguồn văn bản/hình trong `content-drafts/`, `review-packets/` và `release-handoffs/` được chạy preflight nhanh; PR chạm `release-queue/ready/`, `REGISTER.md`, `docs/`, scripts hoặc workflow luôn chạy full QA. Không thay đổi `scripts/test-thpt-release-queue.cjs` hay hạ chuẩn A/R/P.
