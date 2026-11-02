# NotebookLM THPT — bộ 5 Permanent Sources v2.1 thay thế TOÀN BỘ v2.0 (02/11/2026)

**OWNER_DECISION:** Chủ dự án chấp thuận tạo bộ nguồn mới và thay thế toàn bộ 5 v2.0 thay vì kiểm tra đối chiếu nguyên văn từng nguồn cũ. **Không** chọn v2.0 cùng lúc với v2.1. **Không** tạo nguồn quy tắc Permanent thứ sáu.

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `1.0.0` · **NORMATIVE_GITHUB_FILE:** `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` trên main sau owner-approved governance merge (#703).

## Năm file người dùng tải ZIP và thêm vào NotebookLM sau khi giải nén

| # | Tên file Permanent Source v2.1 | Nội dung chuyên trách | SHA-256 (nội dung file UTF-8) |
| --- | --- | --- | --- |
| 1 | `01_THPT_MASTER_PLAN_v2.1.md` | Lộ trình, hai hành trình, quy trình, bảng đầy đủ Q01–Q18 | `f4912cb9b4a046deb053f18911164c1923e31744e9d2b1b6748f20dedcf32cb3` |
| 2 | `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.1.md` | Independent Academic/PED verdict, phân loại lỗi, format review, đúng snapshot | `30f8ebc8fff045a0b6cf40f17f8ceea24596589fc8dbaf0a31b617b423348078` |
| 3 | `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.1.md` | S1 SGK/SBT, số trang in/PDF, D1–D6, chiều sâu, Q01–Q08/Q15/Q18 | `e409520642b763cf0ae1d0778c489296f62475f2c4705e351512d36d7c21f321` |
| 4 | `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.1.md` | Hai hành trình đầy đủ, Golden R4, concept-first, AP1–AP5, readiness/exposure | `be0cb57f4546f9ad1f6a9bb85169d1c090f61668a2089d4fa0e1aa70d21345a5` |
| 5 | `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1.md` | item_id/role/placement, Written/Anchor, private RD1, Final Submit/Mastery, V2 source lock | `e5ac01d9d5bd9e185805be855c121734f536f03bddc6644776f277334077adac` |

**DELIVERY_FILE:** `THPT_5_Permanent_Sources_v2.1_20261102.zip`, tạo trong cuộc hội thoại chủ dự án; không thêm ZIP làm nguồn NotebookLM vì NotebookLM phải đọc từng Markdown bên trong. **DELIVERY_TEST:** ZIP chứa đúng 5 tệp Markdown UTF-8, tất cả nội dung dài hơn 4 KB, checksum mỗi tệp được kiểm tra tại nguồn tạo. ZIP/5 file do chủ dự án tải từ cuộc hội thoại, không được giả định đã tự động được thêm vào notebook.

## Replacement checklist — CHỈ THAO TÁC TRONG NOTEBOOKLM

1. Giải nén file ZIP trên máy. Giữ nguyên **5 file v2.1**, không đổi tên và không tải lại bản v2.0.
2. Trong notebook Toán THPT, bỏ chọn/xóa **đúng năm Permanent Sources v2.0** hiện hành; không động tới nguồn **SGK/SBT** hoặc review `Temp_` đang cần giữ lịch sử.
3. Thêm đủ năm file Markdown mới v2.1; xác minh NotebookLM nhận đúng danh sách năm tên và không còn tên v2.0 được chọn.
4. Khi yêu cầu phản biện mới: dùng **5 Permanent Sources v2.1** + SGK/SBT KNTT S1 + Temp review đúng snapshot, yêu cầu `STANDARD_ID|SLM-THPT-QUALITY-ONE`, `STANDARD_VERSION|1.0.0`, `PERMANENT_SOURCES_VERSION|THPT-v2.1`.
5. NotebookLM **chỉ** phản biện toán, PED, nguồn, outcome và item; không phê duyệt website/merge/deploy, không ghi Skill Mastery.

## Authority and version safety

- `STANDARD_ID` là **một chuẩn**. Năm file Permanent được chia theo vai trò, không phải năm chuẩn độc lập. Tài liệu gốc 08 (hai hành trình), 06 (bàn giao review) và 07 (delta) vẫn có hiệu lực riêng cho ChatGPT Project; chúng không làm tăng số lượng Permanent NotebookLM.
- Không tuyên bố đã đối chiếu byte-to-byte các file v2.0 cũ: chủ dự án đã **bỏ yêu cầu so sánh**, thay toàn bộ bằng bộ v2.1 mới. Việc thay thế là hành động thủ công của chủ dự án; người dùng đã xác nhận thay toàn bộ năm file v2.1 vào NotebookLM ngày 02/11/2026: `NOTEBOOKLM_V21_SOURCE_INSTALLATION=OWNER_CONFIRMED_20261102` (không phải xác minh truy cập trực tiếp vào NotebookLM).
- Review đã PASS hợp lệ trên snapshot v2.0 được bảo toàn với đúng phạm vi cũ; chỉ các đợt review **mới** dùng đủ v2.1. Không tự áp chuẩn 1.0 hồi tố mọi bài đã phát hành hoặc gọi PASS cũ thành PASS v2.1.
- Gói thay thế này **không** cho phép phát hành học liệu. PR #703 governance-only đã merge trên main tại `10cac5ffed2217a3e3d08f33149d2a8fea11b6f8` sau 3/3 exact-head QA PASS; không khởi động lại phát hành. Release hiện tại có thể kết thúc tác vụ đang được phép, không tự mở tác vụ mới hoặc restart automation.
