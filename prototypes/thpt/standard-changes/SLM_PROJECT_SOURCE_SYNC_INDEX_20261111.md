# SLM — PROJECT SOURCE SYNC INDEX · 11/11/2026

**STATUS:** GOVERNANCE_DRAFT_PENDING_MAIN_MERGE · **không phải tiêu chuẩn thứ hai**. Mục đích: ngăn ChatGPT Project attachments mang bản 07 v1.1/09 v1.0 cũ áp dụng phủ quyết chuẩn Q18 mới. Các nguồn độc lập của NotebookLM **vẫn đúng 5 Permanent THPT v2.1**, không bổ sung file thứ sáu.

| Nguồn | File hiệu lực sau PR #808 merge | Hướng dẫn Project attachments |
|---|---|---|
| Chuẩn duy nhất Q01–Q18 | `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` **nội dung v3.0.0** | Project Source **09** chỉ là bản tham chiếu; phải cập nhật câu trỏ VERSION 3.0.0, không tạo Q01–Q18 bản thứ hai |
| Delta/review | `prototypes/thpt/standard-changes/07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.2_20261110.md` **nội dung vận hành v1.3** | Project Source **07 v1.1 hiện đính kèm là lịch sử**, thay bằng phiên bản mới; không đọc cả hai như 2 quy tắc |
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

1. Chuẩn **v3.0.0 và Source 07 nội dung v1.3** đã có trên `main`, không chỉ Draft PR.
2. Test governance, Topic Intake, Safe Deploy, Roadmap và R4 trên exact final HEAD đạt, không tắt Q15/Q16.
3. Project Sources 07 & 09 trong ChatGPT Project được chủ dự án thay/điều chỉnh (Project attachments không tự cập nhật khi GitHub merge). Source 06/08 và 5 NotebookLM Permanent v2.1 giữ.
4. AUTHORING chỉ mở lại sau các điều kiện này; không suy CI xanh là nội dung Topic mới Academic/PED đã được tự kiểm thực.
