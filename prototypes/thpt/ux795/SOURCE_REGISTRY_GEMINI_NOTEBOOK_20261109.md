# UX795 — Sổ đăng ký nguồn Gemini / NotebookLM cho SGK THPT

**Date verified:** 09/11/2026 · **Owner assignment:** RELEASE chịu trách nhiệm biên soạn + trình bày trang Kiến thức SGK 10–12, AUTHORING tập trung Chuyên đề.  
**Purpose:** Khóa nơi truy cập, phân biệt phiên bản, nguồn từng bài và tính toàn vẹn. **Không phải nguồn học thuật S1, không phải academic receipt hay quyền phát hành.**

## 1. Kho lưu trữ ưu tiên

- [Google Drive — bộ nguồn chung](https://drive.google.com/drive/folders/1j3IGrJVRzuUkxGBt7fgxNfeXh39tZz_B) (đã list trực tiếp 09/11/2026).
- [Thư mục Gemini](https://drive.google.com/drive/folders/1y_KIs3235fweevQHH_AKeCbm0bsl0zFd): **27 DOCX + 2 PDF** (bản theo bài/chương và tổng ôn). File Word có công thức OMML; **không dùng plain-text extraction để khẳng định một công thức biến mất**.
- [Thư mục Notebook Gemini](https://drive.google.com/drive/folders/1ofOAzHYoil1HD1ZUCnagFWfO8yn1Tvfw): **12 Markdown**: ba file bai-hoc-chi-tiet-toan-{10,11,12}-kntt.md (gọi là **v1 / original**), ba file -v2.md (khác biệt, chứa placeholder, **không mặc định dùng để biên tập**), ba ngân hàng bài tập và ba nguồn ôn/đề/khung.
- [ZIP gốc trên Drive](https://drive.google.com/file/d/1K3ui8oyvFVEFso39tIq7SPm8VuJyHA8Q/view): **CT toán THPT Gemini.zip**, SHA-256 (bản upload trong chat) = **5c8c4479e963ef0cbf0d79e36a714a0650fe5da217c1db1e89e8bead2bf07b26**; ZIP gồm 41 file (27 DOCX, 2 PDF, 12 MD). Dung lượng dữ liệu giải nén = 1.798.300 bytes.

**Hai tệp tham khảo cấu trúc ngoài ZIP (đã đính kèm trực tiếp trong chat, chờ lưu vào Drive nếu chưa có):**
- Bố cục bài giảng chuẩn.txt · SHA-256 **3872d73e87ab7df4cb1a94285f13cad47e9e4abb640126a7c16b5c4c44ef95ed**.
- bố cục bài giảng 6 bước cải tiến.docx · SHA-256 **a10795dfb0abd2e342a9fa0d031e781868897d71e7566907b55a207d130641fd**.
Hai file này là **gợi ý quy trình biên soạn**, không tạo năm/sáu nhóm heading trên trang học.

## 2. Những file có liên quan trực tiếp tới pilot

| Mục | Drive | SHA-256 blob gốc từ ZIP |
|---|---|---|
| Gemini — Toán 10 Bài 2 DOCX | [Lớp 10-bài 2.docx](https://docs.google.com/document/d/17BRAn3ApceabHPNOAiPUEh1e1zIShp85/edit) | 5e7d243218b438bad105741a86a263d320bb36ad960ed44f178fc0a1bee1a009 |
| Notebook Gemini v1 — Toán 10 MD | [bai-hoc-chi-tiet-toan-10-kntt.md](https://drive.google.com/file/d/1Ickwg2M_9XghU5C602k-w5wqargqOadT/view) | 19d572505065ab742a97f2507a5a56b566f461191e7f0ae8452d411cc2e3ec1c |
| Notebook Gemini v1 — Toán 11 MD | [bai-hoc-chi-tiet-toan-11-kntt.md](https://drive.google.com/file/d/1Ce4CVL8iXmxbLpXjkToNdmVQNcBvq8Cd/view) | db231a62e5a37e79f2578eeb18451e3594aa4289e7fafab72106dbf8af44e8e2 |
| Notebook Gemini v1 — Toán 12 MD | [bai-hoc-chi-tiet-toan-12-kntt.md](https://drive.google.com/file/d/1Si8LfXdIrr9UlhkHvKlH1Lfd2dv-lhdJ/view) | 5619e378554466345bf8aec501a4bac87b758c0ced583e476ddb0a74705f78cf |

**Lưu ý kiểm phiên bản:** digest trên lấy từ ZIP upload trong chat, không phải Google Drive MD5 của file được upload rời. Khi dùng các file rời trên Drive, đối chiếu kích thước/nội dung/phiên bản nếu có sửa. Không dùng link như receipt chứng minh Academic/PED PASS.

## 3. Phân cấp thẩm quyền / quyền truy cập

1. Quyết định mới nhất của chủ dự án và SGK/SBT KNTT S1 xác định phạm vi/toán.
2. Canonical source SLM và receipt snapshot để bảo toàn câu hỏi, ví dụ, đáp án, D6, item_id, hình gốc.
3. Gemini / NotebookLM v1 là **nguồn gợi ý có thể tái sử dụng nội dung tốt thực chất** sau đối chiếu S1, không chỉ mẫu giọng văn.
4. Các bản NotebookLM v2 có placeholder và mismatch tên bài: dùng riêng khi qua kiểm từng mục, không coi là bản cải tiến tự động của v1.
5. Không đăng lại toàn bộ file nguồn vào GitHub public; lưu URL/metadata/manifest/hash. Vì Drive là một hệ thống phân quyền, khả năng truy cập phụ thuộc kết nối, quyền chia sẻ và việc file còn tồn tại.

## 4. Kiểm soát tác vụ SGK ở nhánh RELEASE theo quyết định owner

- Không biến PED1–PED6 thành sáu tiểu mục; Khám phá = dẫn dắt liền mạch + ví dụ trực quan (kết thúc bằng thuật ngữ / kiến thức kỹ năng), Kiến thức SGK = từng concept có lý thuyết/công thức/hình minh chứng đúng vị trí, Ví dụ = nêu phương pháp/lý do/lời giải liền nhau, sau đó Lỗi thường gặp + remediation.
- Canonical Q15, RD1/Final Submit Q16, Golden R4 và đường học SGK/Chuyên đề Q17 giữ nguyên.
- Các thay đổi lời giảng / ví dụ là DELTA_C: ghi origin, lesson/outcome, minimal delta, Q01–Q18/Q18 snapshot; không suy Academic/PED PASS chỉ do file do Notebook/Gemini viết.
- **Ưu tiên G10 B02 trước**; không phát triển dàn trải toàn 79 bài cùng lúc.
- Khi có xung đột giữa yêu cầu owner “không review trùng lặp” và cổng review Q18 trên snapshot mới, ghi rõ STANDARD_CONFLICT_HOLD với phần chưa đủ receipt, không tự nới gate.

**Registry checkpoint:** 2026-11-09 · SOURCE_ARCHIVE_GDRIVE_VERIFIED · FILE_MANIFEST_CREATED · NO_RELEASE.
