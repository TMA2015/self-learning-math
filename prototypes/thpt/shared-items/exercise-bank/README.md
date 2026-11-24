# Kho bài tập THPT dùng chung — AUTHORING (#1090)

Theo quyết định owner 24/11/2026: lập kho trước, sau đó kiểm toán và chuẩn hóa tương tác. Kho nằm ngoài docs/, không phải trang học mới. Áp dụng Q15/Q16/Q18 hiện hành và Project 08, không tạo chuẩn học thuật mới.

- items/: một record theo ID gốc, chia theo chủ nguồn để tiện sửa. Không nhân bản theo SGK/CĐ. Stem, key, solution từ source học thuật; tương tác hiện SELF_COMPARE, không tự chấm. Version gốc và provenance giữ nguyên.
- placements/: danh sách item_id theo collection/role/order, outcome/skill theo ngữ cảnh; không chép đề/đáp án.
- written-references.json: Written/Anchor tham chiếu nguồn đã có; không chép rubric/lời giải lần hai.
- import-manifest.json: snapshot, khác biệt projection cần kiểm, phạm vi thực nhập. Khác biệt ký tự/nhãn không tự coi là sai toán.
- schema.json: hợp đồng dữ liệu tối thiểu, không phải chuẩn học thuật; field chưa xác minh để null/rỗng.

Trong migration, nguồn cũ/website giữ bất biến để bảo toàn receipt. Kho là candidate chuyển giao, chưa là nguồn được RELEASE tiêu thụ. Khi xác nhận chuyển quyền canonical, chỉ sửa record tại kho; nguồn lịch sử trở thành evidence bất biến, projection site sinh từ ID/version đã bàn giao. Không sửa tay projection hoặc tạo bản Rxx. Không xóa snapshot PASS. Không đổi ID, điểm, tiến độ; không đưa RD1 private vào kho.

## Phạm vi đã nhập
CĐ01–12; SGK G10 ChI/ChII/ChIII/ChVI, G11 ChI/ChII/ChV/ChVI/ChIX và G12 ChI/ChIV. Xem import-manifest.json để biết tổng và checkpoint thực tế. Các bộ tự kiểm tra SGK G10/G11 có ID RD1 lịch sử nhưng đã công khai theo #662 được phân loại PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY; không nhập RD1 kín. Mọi record auto_grade=false trong candidate. Với nguồn gộp đáp án và lời giải, giữ nguyên worked_solution và answer_key=null; chỉ tách khi kiểm toán. ID HPT lịch sử giữ nguyên. CĐ01 có lời giải trình bày không tách key/solution, các điểm khác định dạng ghi trong manifest để kiểm toán sau. Chưa Academic/PED PASS; chưa chuyển tương tác. Không sửa website/runtime/build/Firebase/Mastery/Final Submit hoặc merge/deploy. Điều hành tại #1090.
