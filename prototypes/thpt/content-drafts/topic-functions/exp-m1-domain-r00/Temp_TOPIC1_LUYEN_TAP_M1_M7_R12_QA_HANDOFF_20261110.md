# AUTHORING R12 — QA + handoff trọn phần LUYỆN TẬP Chuyên đề 1 (M1–M7)

Ngày 10/11/2026 · Draft PR #801 · Lane AUTHORING only.

**Sản phẩm hợp nhất (đang dùng):** [Temp_TOPIC1_LUYEN_TAP_M1_M7_FULL_PUBLIC_SHARED_SOURCE_R12_20261110.md](Temp_TOPIC1_LUYEN_TAP_M1_M7_FULL_PUBLIC_SHARED_SOURCE_R12_20261110.md)

**SOURCE_GIT_BLOB:** 20c97d7bd7e1d5699ed186f7d7fbfd15c9d74c92. Source này là bản học liệu AUTHORING đã soạn xong cho **Luyện tập**, KHÔNG phải website quiz đã tích hợp, KHÔNG phải Tự kiểm tra RD1 và KHÔNG tự thành CONTENT_READY.

## A. Kết quả kiểm toán toàn phần

| Cổng | Số liệu đã xác minh | Giới hạn |
|---|---|---|
| Outcome | **48/48** gồm M1 2, M2 3, M3 5, M4 10, M5 9, M6 9, M7 10 | Mỗi outcome có tuyến bài gốc; runtime placement còn chờ |
| References | **99 placements** tới **92 unique public item IDs**, 0 ID lạ | 79 IDs thuộc 6 SGK bank JS/JSON, 10 IDs Topic, 3 IDs bài cuối Chương VI |
| Shared bank | 6/6 file thật, **255 distinct IDs** (18+26+41+30+62+78) | Không phải 255 bài được đưa vào Topic |
| Written/Anchor | **28/28** mã xác minh trong 6 nguồn gốc | Không copy rubrics; HPT-G10 historical alias giữ nguyên |
| Bài công khai thêm | 14 bài có đề và đối chiếu, gồm 12 từ R09 + 2 bài liên thông M4–M7 | 5 bài chỉ phục vụ ôn/khắc phục; 9 candidate cần Q15 trước khi canonical |
| Đối chiếu | 17/17 cặp details/summary đóng/mở; 20/20 nhóm kiểm toán có kết quả đúng trong các mẫu đã thử | Math/structure author QA ≠ independent Academic/PED hoặc QA UI |
| An toàn | Không có RD1 stem, key, rubric hoặc trạng thái Mastery chính thức | Final Submit và độc lập Tự kiểm tra là quy trình riêng |

**Đính chính dữ liệu trước đây:** Trong R18, 88 unique ID tham chiếu bao gồm **78 SGK + 10 Topic**; báo cáo R09 gọi cả 88 là SGK là không chính xác. R12 có 92 unique gồm **79 SGK + 10 Topic + 3 bài cuối chương**. Tổng số placements là 99 do một câu có thể được dùng tại nhiều outcome.

## B. Source receipts — kiểm trực tiếp trên HEAD

| Nguồn SGK công khai | Git blob | Item trong bank |
|---|---|---:|
| docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js | 1223d4c2b574433479c5d222dbeff363718ee4bb | 18 |
| docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js | 9a8f0c1f65acb0cb9ab2fb8efaa9115f785aa8a0 | 26 |
| docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js | 33cf4229baa63ac70b4ca1b640a5be8414ed54c1 | 41 |
| docs/assets/javascripts/thpt-g11-chv-b15-b17-source-locked-formative-r03.js | cbe3608a8551b85440e955835706f7046d88ef7d | 30 |
| docs/assets/javascripts/thpt-g11-chix-b31-b33-source-locked-formative-r00.js | eda6fdf74345d93cd23e77008d2dcc9a9f6c7111 | 62 |
| docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json | 4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a | 78 |

**Bài cuối chương SGK:** docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md, Git blob 4876a1d38267bfaf0a570b9ea5bffa48563488ad: THPT-G10-CHVI-APP-A1 (căn/miền), A2 (parabol), B3 (diện tích–điều kiện ngưỡng). B15-P04 là bài cước theo ngân sách trong bank SGK G10. Các bài gốc chỉ thêm placement Topic, **không chép stem/key/solution**.

**10 item Topic vốn có:** 6 mã THPT-G10-TOP-FUNC-P01..P06 trỏ source Topic học thuật đã nghiệm thu theo R18; 4 mã THPT-G11-TOP-FUNC-P01/P02 và THPT-G12-TOP-FUNC-P01/P02 có đăng ký R13 theo Git blob 6aaad9e3129b8c961d3f7dc5de71b1424976cc4a, trỏ về source M6 blob c735a2e21bffe4ffe2e16d06de1d8592acc22674 và M7 blob 7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d. R12 không tạo lại nội dung các item đã có.

**28 Written xác minh theo 6 nguồn:**

| Source | SHA | Count |
|---|---|---:|
| docs/thpt-preview/thu-vien/tu-luan.md | 4da918f36d30c9b7110099e81fc88943e5b7705b | 2 |
| docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md | 61ccb1d3c6242bd96c8db1948d100906b90d5afc | 1 |
| docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vi.md | dba16473909e60d1dc186f41dfc2e270f06a104e | 2 |
| docs/thpt-preview/thu-vien/tu-luan-g11-chuong-v.md | 047f42f1d3cd241d1d5155e6f7ebc3c5bdd20aff | 4 |
| docs/thpt-preview/thu-vien/tu-luan-g11-chuong-ix.md | 4d2eb7580e1f04360422134d96ba6712a1293d0e | 9 |
| docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json | 4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a | 10 |

**One-source cleanup:** Hai tệp draft M1 và M2–M3 vốn chứa 12 câu đã được **thay bằng redirect** đến source R12, bản gốc vẫn còn lịch sử Git (M1 original blob c956563f8e3dc88f6a6277f493b32a629f5069ae → redirect 6c09d5e3598bb7d7d56adf4ebfca1b27627088cc; M2/M3 original 397f75cba490e47270bc2dd07eabe80efc08aa68 → redirect b159203b52c33b88ff25a43c451c8547dab54e47). R18 immutable reviewed baseline blob **2340ea4975b37a457363eea59dd617070934983c**, Kiến thức R11 blob **25a91f18d6a4a764e3600d12b835b4b58e972b1f**, R06 review packet chỉ là lịch sử.

## C. Kiểm toán toán (20 nhóm, author spot QA)

1–5 M1: lỗ tại điểm mẫu bị loại; căn ở tử; ba ràng buộc; căn ở mẫu đòi >0; bỏ một đầu vào làm mất đầu ra căn duy nhất trong ví dụ WR02.
6–9 M2: điểm chấm đặc theo dấu bằng; hai nhánh tăng có bước nhảy xuống; hai mô hình cùng qua ba điểm nhưng khác tại x=1; nội suy chỉ hợp lệ sau khi đặt giả thiết.
10–12 M3: nghiệm của |f(x)|=0 khác f(|x|)=0; cực trị trên hai đoạn rời; đồ thị trị tuyệt đối đầu vào/đầu ra có giá trị/tập nghiệm khác nhau.
13–14 XFER01: với f(x)=log_2(x+2), D=(-2,2], f(-1)=0, f(0)=1, f(2)=2; giới hạn tại -2+ là -∞, f′>0, GTLN 2 tại 2, không GTNN trên D; trên [0,2] GTNN 1; f(x)≥1 chỉ tại x∈[0,2].
15–17 XFER02: T(t)=18+12·2^{-t/3}, t≥0 phút: T(0/3/6)=30/24/21°C; T′(3)=-2ln2 °C/phút; tiệm cận 18°C không đạt; T≤21°C khi t≥6; GTLN 30 ở t=0 và không GTNN.
18–20 SGK A1/A2/B3: miền căn; parabol đỉnh (3,4) và giao Ox tại 1/5; hàng rào S=x(40-2x), 0<x<20, diện tích tối đa 200m² khi x=10, ngưỡng S≥192 cho x∈[8,12].

**MATH_QA_20_OF_20 = PASS trong mẫu kiểm**; không thay được đánh giá học thuật độc lập hoặc QA browser.

## D. Q15 semantic: quyết định sử dụng, không đặt quota

**5 bài dùng ôn luyện/khắc phục (NO_NEW_CANONICAL_ITEM):** DRAFT-T1-M1-APP02, M1-APP05, M1-WR01, M2-APP05, M3-WR02. Đây là các ý gần ví dụ đã giải trong Kiến thức/Practice, giúp thực hành nhưng không tự tạo ID cạnh tranh.

**9 ứng viên cần kiểm Q15 trước khi đăng ký một bank chung:** M1 APP06 và WR02; M2 APP06, APP07 và WR01; M3 APP07 và APP09; XFER01 và XFER02. Hai bài mới kết nối M4–M7 có gợi ý, đáp án và rubric **công khai** để học sinh tự so, không dùng RD1 hoặc Readiness sau khi đã xem.

**Exposure phải giữ:** G10 B15-P02 được bank gốc ghi EXPOSED_IN_KNOWLEDGE; SGK A2 dùng cùng công thức với ví dụ M3-T01; Topic P05 có bài cùng tình huống với M3-T02; M3-WR02 dùng chính hàm đã có lời giải trong Kiến thức M3. Những câu này vẫn được làm để ôn, không phải câu độc lập chưa nhìn thấy.

## E. Chốt hạng mục và phần thuộc lane khác

**AUTHORING COMPLETED:** Một phần **Luyện tập đầy đủ M1–M7** theo 48 outcome, 92 source ID công khai, 28 Written, 14 hoạt động bổ sung. Không giới hạn bài mới nếu về sau chứng minh còn thiếu năng lực thật.

**Còn cổng sau AUTHORING:** import renderer/quiz và placement lên website, QA giao diện/thiết bị, Q15 cho 9 candidate nếu phát hành như canonical item, bảo vệ Final Submit/RD1. Notebook review **chỉ khi có rủi ro toán/sư phạm không tự khép**, nhưng không tuyên bố thay đổi quy phạm cũ trên main; khác biệt trigger Delta C cần xử lý tại đúng đề nghị cập nhật chuẩn/rules (ghi trong QA Kiến thức R11), không tạo chuẩn học thuật thứ hai.

Phần **Tự kiểm tra** sẽ được xử lý thành **một việc lớn riêng**, dựa trên nguồn RD1 đã nghiệm thu/owner-held mà không đưa đề/key lên GitHub công khai. V2 intake issue #790 vẫn do RELEASE. **CONTENT_READY=NO; NO_MERGE/DEPLOY; NO_MASTERY_FROM_PRACTICE.**

**Checkpoint:** TOPIC1_R12_FULL_PUBLIC_PRACTICE_SOURCE_COMPLETE · OUTCOME_48_OF_48 · PUBLIC_IDS_92_OF_92 · WRITTEN_28_OF_28 · MATH_QA_20_OF_20 · Q15_NEW_9_CANDIDATE_PENDING · NO_RELEASE.
