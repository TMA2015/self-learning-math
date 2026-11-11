# SLM — PROJECT SOURCE SYNC INDEX · 11/11/2026

**STATUS:** OWNER_PROJECT_SOURCES_07_09_INSTALLED · V3_0_MAIN_EFFECTIVE · V3_0_1_Q18_PATCH_PENDING_MERGE · **không phải tiêu chuẩn thứ hai**. Mục đích: ngăn ChatGPT Project attachments mang bản 07 v1.1/09 v1.0 cũ áp dụng phủ quyết chuẩn Q18 mới. Các nguồn độc lập của NotebookLM **vẫn đúng 5 Permanent THPT v2.1**, không bổ sung file thứ sáu.

| Nguồn | File hiệu lực sau PR #808 merge | Hướng dẫn Project attachments |
|---|---|---|
| Chuẩn duy nhất Q01–Q18 | `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` **nội dung v3.0.0 trên main; v3.0.1 trong PR patch** | Project Source **09 v3.0** đã được owner cài, là bản tham khảo không phủ quyết §X-E mới; không yêu cầu upload lại để chốt SOURCE_READY |
| Delta/review | `prototypes/thpt/standard-changes/07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.2_20261110.md` **nội dung vận hành v1.3** | Project Source **07 v1.3 đã được owner cài**, là quy tắc thực hành của cùng chuẩn; thêm làm rõ Q18 v3.0.1 trên GitHub, không tạo bộ review thứ hai |
| Hai hành trình | Project Source **08 v2.0** và contract V2 trên GitHub | Giữ nguyên 3 trang Topic, hai journey hoàn chỉnh độc lập, canonical bank chung; Adaptive Knowledge Tabs v2 cho mảng Topic dài |
| Notebook review delivery | Project Source **06 v1.0** | Chỉ áp dụng khi thật sự cần review NotebookLM, không phải gate bắt buộc AUTHORING |
| Hợp đồng handoff | `prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md`; `release-handoffs/HANDOFF_V2_TEMPLATE.md` | V2 vẫn 1 nguồn/receipt/handoff/ready/REGISTER, nhưng receipt có thể là tác giả tự QA (Q18 v3) |
| Workflow/gate | `scripts/test-thpt-unified-content-standard.cjs`, `scripts/test-thpt-handoff-gate-v2.cjs`, `scripts/test-thpt-knowledge-model-v3.cjs`; 3 release gates | Source integrity, Q15/Q16/RD1/Final Submit, Golden, AP/R, exact HEAD và owner approval vẫn bắt buộc |

## Quyết định chủ dự án hiện hành

- AUTHORING **PAUSED** cho tới khi quy trình quản trị, mẫu, test và workflow đồng bộ và hoàn tất QA. Sau đó tiếp tục biên soạn theo Topic trọn phần; 2 Topic đã biên soạn cũng được nâng cấp tự nghiệm thu.
- **Q18_AUTHOR_SELF_VERIFIED** được cho phép cho cả Topic mới và Topic đã review được biên tập lại, có toán/S1/PED/outcome/items/Written/figure/lab/Q16 chính xác và `AUTHOR_SELF_QA_RECEIPT` source-locked, không fake NotebookLM reviewer verdict. NotebookLM là lựa chọn khi không tự xác minh chắc chắn.
- SGK 79 bài theo mẫu B06 có bốn tab ngang. Topic 3 trang ngoài; Knowledge dài sử dụng horizontal subtopic tabs theo Adaptive v2; UX reference R01 đã owner chấp thuận nhãn `Vận dụng` / `Đối chiếu`, chỉ là mẫu, không phải released website.
- Canonical item có thể sử dụng SGK Core/Practice, Topic Practice và public `CLIENT_SELF_CHECK_NO_MASTERY`. Không dùng câu đã lộ làm held-out independent TOPIC_READINESS hoặc ghi Skill Mastery.
- Release SGK Knowledge nâng cấp trước, Topic sau. Governance-only PR không tự làm website published.

## Điều kiện xác nhận đồng bộ

**Checkpoint thực tế 11/11:** PR #808 đã merge commit `e1976f47b13d20faf0cd68f3c862a97ac43d57f4`; GitHub `main` có Q18 v3.0.0 và Source 07 v1.3. Chủ dự án đã cài 07/09 trong Project. Patch quy trình mới **v3.0.1** chờ merge riêng, không yêu cầu upload Source 07/09 lại và không dùng việc cập nhật bản tham khảo 09 như cổng `CONTENT_READY`.

1. Đã xác minh chuẩn **v3.0.0 + Source 07 v1.3** có trên `main` tại merge #808; v3.0.1 §X-E sẽ có hiệu lực khi governance patch được merge và kiểm SHA.
2. Test governance, Topic Intake, Safe Deploy, Roadmap và R4 trên exact final HEAD đạt, không tắt Q15/Q16.
3. **OWNER CONFIRMED PREPARED (11/11/2026):** Chủ dự án đã cập nhật hai file `Temp_07_THPT_DELTA_AND_NOTEBOOK_REVIEW_POLICY_v1.3_PROJECT_SOURCE.md` và `Temp_09_THPT_Q01_Q18_v3_PROJECT_REFERENCE.md` vào nguồn Project SLM. Hai file đều mang `PREPARED_PENDING_PR808_MERGE`, vì thế **không phải v3 đã có hiệu lực** trước GitHub main merge. Sau khi merge, so khớp version/hash và xác nhận activation; **không yêu cầu chủ dự án upload lại**. Source 06/08 và 5 NotebookLM Permanent v2.1 giữ.
4. Lệnh tạm dừng AUTHORING chỉ do chủ dự án quyết định cho phép mở lại; không suy CI xanh là Academic/PED PASS. Khi tác giả kiểm xong và ký đúng nguồn thì **AUTHORING_PASS = CONTENT_READY trong cùng lượt**, không reviewer thứ hai.
