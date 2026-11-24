# Kho bài tập THPT dùng chung — AUTHORING (#1090)

Theo quyết định owner 24/11/2026: lập kho trước, sau đó kiểm toán và chuẩn hóa tương tác. Kho nằm ngoài docs/, không phải trang học mới. Áp dụng Q15/Q16/Q18 hiện hành và Project 08, không tạo chuẩn học thuật mới.

- items/: một record theo ID gốc, chia theo chủ nguồn để tiện sửa. Không nhân bản theo SGK/CĐ. Stem, key, solution từ source học thuật; tương tác hiện SELF_COMPARE, không tự chấm. Version gốc và provenance giữ nguyên.
- placements/: danh sách item_id theo collection/role/order, outcome/skill theo ngữ cảnh; không chép đề/đáp án.
- written-references.json: Written/Anchor tham chiếu nguồn đã có; không chép rubric/lời giải lần hai.
- import-manifest.json: snapshot, khác biệt projection cần kiểm, phạm vi thực nhập. Khác biệt ký tự/nhãn không tự coi là sai toán.
- schema.json: hợp đồng dữ liệu tối thiểu, không phải chuẩn học thuật; field chưa xác minh để null/rỗng.

Trong migration, nguồn cũ/website giữ bất biến để bảo toàn receipt. Kho là candidate chuyển giao, chưa là nguồn được RELEASE tiêu thụ. Khi xác nhận chuyển quyền canonical, chỉ sửa record tại kho; nguồn lịch sử trở thành evidence bất biến, projection site sinh từ ID/version đã bàn giao. Không sửa tay projection hoặc tạo bản Rxx. Không xóa snapshot PASS. Không đổi ID, điểm, tiến độ; không đưa RD1 private vào kho.

## Đợt đầu
CĐ07 + SGK G11 ChII/ChV: 84 record formative (36+30+18), 16 Written reference, 69 placement luyện tập CĐ07, 18 replay CĐ07, 28 replay SGK. 40 formative SGK dùng chung với CĐ07, một record/ID. Chỉ kiểm nhập/source/ID/placement, chưa Academic/PED PASS hoặc audit toàn bộ. Còn 21 CĐ và các chương SGK khác cần nhập đối chiếu nguồn, kể cả supplement công khai. Điều hành tại #1090. Không thay website, runtime, build, Firebase, Mastery, RD1, Final Submit. Hoàn tất kho rồi mới kiểm toán và chuẩn hóa tương tác theo scope owner.
