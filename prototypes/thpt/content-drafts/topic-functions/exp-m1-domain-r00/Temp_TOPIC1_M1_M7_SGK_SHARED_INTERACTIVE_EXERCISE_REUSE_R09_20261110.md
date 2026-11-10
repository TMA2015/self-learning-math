# AUTHORING · Chuyên đề 1 M1–M7 · R09 dùng chung bài tập SGK/Topic và phát hiện khoảng trống thực sự

**Ngày:** 10/11/2026 · **Lane:** AUTHORING · **Chỉ đạo owner:** Khai thác tối đa các bài tương tác SGK có chất lượng; **không giới hạn số bài mới**, bổ sung khi còn thiếu năng lực/độ sâu/khả năng chuyển giao; phần Kiến thức/Luyện tập/Tự kiểm tra vẫn là **3 mục độc lập**, không tạo Core riêng. Các bài Written và Anchor đã có trang nguồn riêng. Không sao chép stem/key/rubric của item đã tồn tại thành một bank Topic mới.

## I. Kiểm trực tiếp nguồn GitHub; không suy từ số liệu tự ghi trước đây

| Ngân hàng public SGK đã đọc | Current Git blob | Số item ID trong ngân hàng |
|---|---|---:|
| \`docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js\` — G10 B15/B17/B18 | \`1223d4c2b574433479c5d222dbeff363718ee4bb\` | 18 |
| \`docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js\` — G11 lượng giác B03/B04 | \`9a8f0c1f65acb0cb9ab2fb8efaa9115f785aa8a0\` | 26 |
| \`docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js\` — G11 mũ/log | \`33cf4229baa63ac70b4ca1b640a5be8414ed54c1\` | 41 |
| \`docs/assets/javascripts/thpt-g11-chv-b15-b17-source-locked-formative-r03.js\` — G11 giới hạn/liên tục | \`cbe3608a8551b85440e955835706f7046d88ef7d\` | 30 |
| \`docs/assets/javascripts/thpt-g11-chix-b31-b33-source-locked-formative-r00.js\` — G11 đạo hàm | \`eda6fdf74345d93cd23e77008d2dcc9a9f6c7111\` | 62 |
| \`docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json\` — G12 dấu đạo hàm/khảo sát | \`4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a\` | 78 |

**Kết quả QA ID:** 6/6 nguồn truy xuất được, **255/255** bản ghi có ID **không trùng nhau** trong chính sáu ngân hàng. Với các mã dạng \`THPT-...\` trích từ mục Luyện tập của **R18** (\`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, blob \`2340ea4975b37a457363eea59dd617070934983c\`), **88 tham chiếu ID** đối chiếu được **trực tiếp** trong sáu ngân hàng trên. **10 tham chiếu \`TOP-FUNC-Pxx\`** là nhóm Topic riêng, không có trong sáu bank SGK; **17 tham chiếu Written** có nguồn/thư viện riêng và **không được tính là thiếu ngân hàng SGK**. Đây là kiểm chứng *ID/source*, không phải đã chạy 88 câu trong trình duyệt hay đã chứng minh mọi câu phù hợp mọi outcome.

Nguồn riêng đã kiểm:
- **6/6 bài SGK B15:** \`THPT-G10-B15-C01/C02/P01/P02/P03/P04\` trong JS blob G10 trên, phiên bản \`THPT-G10-CHVI-REVIEWED-20261028\`; P02 đã mang \`EXPOSED_IN_KNOWLEDGE\`.
- Bài cuối chương (có đề và lời giải mở chọn, **không phải tất cả là MCQ**) tại \`docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md\`, blob \`4876a1d38267bfaf0a570b9ea5bffa48563488ad\`, gồm \`THPT-G10-CHVI-APP-A1/A2/A3/A4/B1/B2/B3/B4\`. Bài phù hợp ưu tiên: **A1**, **A2**, **B3**.
- Một nguồn Written/Anchor chung ở \`docs/thpt-preview/thu-vien/tu-luan.md\`, blob \`4da918f36d30c9b7110099e81fc88943e5b7705b\`, có \`HPT-G10-CHVI-WRI-15-01/15-02\` và các bản demo lớp 10; **không copy đề/rubric**.
- Tham chiếu Topic \`THPT-G10-TOP-FUNC-P01..P06\` có nội dung và lời giải trong canonical R18 (đã PASS đúng snapshot); R01 tiền thân blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\` chỉ là nguồn đối chiếu lịch sử, **không** là ngân hàng tương tác triển khai thay R18.
- \`THPT-CORE-QF01\` và \`PRACTICE-THPT-DEMO-01\` thuộc **pilot/demo** trên trang SGK/Topic: có thể làm minh họa giao diện nhưng **không được tính mặc nhiên là câu đã được nghiệm thu cho mọi Topic outcome hoặc Mastery**.

## II. Tuyến luyện tập M1–M3 đề xuất từ **nguồn dùng chung** (không clone)

| Outcome Topic | Bài nguồn sử dụng được | Cách đặt trong Luyện tập Topic | Khi nào cần bổ sung |
|---|---|---|---|
| \`TOP-G10-FUNC-O01\` đơn trị | \`THPT-G10-B15-C01\` + Written \`HPT-G10-CHVI-WRI-15-01\` | Core SGK đã review → Practice cơ bản cùng **canonical ID** → tự luận chung | Chỉ thêm khi cần kiểm một khái niệm khác, không thay số câu bảng |
| \`TOP-G10-FUNC-O02\` miền/range | \`B15-C02\` → \`B15-P01\`, \`CHVI-APP-A1\` | Căn một điều kiện → mẫu hai điểm loại; A1 là củng cố đã cùng độ khó | \`DRAFT-T1-M1-APP02/05/06\` cho rút gọn có điểm khuyết / giao căn+mẫu / 3 ràng buộc; \`WR01/02\` khi cần biện luận và tập giá trị |
| \`TOP-G10-FUNC-O03\` đồ thị/dữ kiện | \`THPT-G10-TOP-FUNC-P01\`, Written gốc \`WRI-15-01\` | Kiểm điểm thuộc đồ thị → phân biệt số liệu và mô hình | **GAP_INTERACTIVE_CONFIRMED_IN_SIX_SGK_BANKS:** chưa thấy câu tương tác SGK nào hỏi *ba điểm chưa đủ xác định một đường*; giữ ứng viên mới \`DRAFT-T1-M2-APP07\` + Written M2-WR01 (độ sâu giải thích khác) |
| \`TOP-G10-FUNC-O04\` tăng/giảm | \`THPT-G10-B15-P03\` | Dấu trị tuyệt đối/miền biến thiên, trước bài nhảy hàm | \`DRAFT-T1-M2-APP06\` kiểm **hai nhánh tăng nhưng toàn hàm không tăng**; không đồng nghĩa bài P03 |
| \`TOP-G10-FUNC-O05\` từng đoạn/mô hình | \`THPT-G10-B15-P02\` **EXPOSED**, \`THPT-G10-B15-P04\` **bổ sung placement**; Written \`HPT-G10-CHVI-WRI-15-02\` | P02 *ôn nhánh*, không chấm độc lập; P04 *vận dụng ngân sách và khoảng*; Written Anchor một nguồn rubric | \`DRAFT-T1-M2-APP05\` thêm chấm rỗng/đặc và thay dấu bằng, khác P02/P04 |
| \`TOP-G10-FUNC-O06\` bậc hai và a≠0 | \`THPT-G10-TOP-FUNC-P02\`, \`THPT-CORE-QF01\` **pilot only** | P02 làm Practice thật; pilot chỉ quan sát/mở rộng nếu đã chứng minh phù hợp | Không thêm câu chỉ để có bản giống Pilot Core |
| \`TOP-G10-FUNC-O07\` dạng đỉnh | \`THPT-G10-TOP-FUNC-P03\`, \`THPT-G10-CHVI-APP-A2\` | P03 vận dụng hoàn bình phương; A2 tích hợp đỉnh và giao trục nhưng **cùng đề** với R18 M3-T01 đã lộ lời giải | Không lấy A2 làm kiểm tra độc lập sau M3-T01 |
| \`TOP-G10-FUNC-O08\` giao trục/đối xứng | \`THPT-G10-TOP-FUNC-P04\`, \`CHVI-APP-A2\` đã lộ | Dùng P04 là bài chính; A2 làm phản hồi/thực hành tự đối chiếu | \`DRAFT-T1-M3-APP07/WR02\` chỉ cho **phép trị tuyệt đối đầu vào/đầu ra** là phần mở rộng mới có lập luận riêng |
| \`TOP-G10-FUNC-O09\` cực trị trên miền | \`THPT-G10-TOP-FUNC-P05\` | **Đúng bài đã xuất hiện trong R18 M3-T02**; dùng lại để chữa sai, không gọi bài chưa nhìn thấy | \`DRAFT-T1-M3-APP09\` xét **hai đoạn rời**; khác O09 P05 |
| \`TOP-G10-FUNC-O10\` mô hình tối ưu | \`THPT-G10-TOP-FUNC-P06\`, **\`CHVI-APP-B3\` bổ sung placement**; Written \`HPT-WRI-DEMO-ANCHOR-01\` (nhãn demo) | P06: miền thời gian; APP-B3: thiết kế hàng rào–tối ưu–điều kiện ngưỡng; Written tự chấm ở kho riêng | B3 phần bất phương trình cần hướng dẫn **nhắc kiến thức tại chỗ** để Topic tự đủ, không bắt sang B17 SGK; nếu kết quả luyện vẫn yếu mới viết câu mới |

**Lưu ý quan trọng về A2:** nội dung SGK \`CHVI-APP-A2\` là đúng cùng \`-x²+6x-5\`, cùng yêu cầu đỉnh/giao trục mà R18 đã đưa trong M3-T01 (có đáp án mở). Canonical gốc A2 vẫn giữ, **không tạo ID thứ hai**; chỉ dùng như bài công khai ôn tập sau khi đã tiếp xúc. Tương tự, \`TOP-FUNC-P05\` trùng chính tình huống \`p(x)=(x+2)²-4\` trên [-1,2] với R18 M3-T02, không coi là bất ngờ. Đây là **exposure**, không đồng nghĩa “cấm luyện lại”.

## III. Trình tự học và tương tác đề xuất

- **Mỗi outcome:** đọc lý thuyết/hình → Tự thử → mở Practice theo **cùng canonical item_id gốc** với nhãn \`TOPIC_PRACTICE\` → tùy nhu cầu mở gợi ý và giải thích → luyện sâu/viết lời giải khi cần. Không có SGK Core riêng trong Chuyên đề.
- **Ba mức:** (a) hiểu điều kiện và nhận dạng; (b) tính/biện luận; (c) vận dụng mới, có miền/đơn vị hoặc ví dụ chuyển giao. Thứ tự mang tính sư phạm, không dựa thuần tên CORE/PRACTICE của SGK.
- **Câu đã xem:** dùng được ôn tập và khắc phục D6; không tự kết luận đạt mastery hay độc lập Readiness. Mỗi câu giữ gốc \`item_id\` và \`content_version\`; \`placement_id\`/role Topic khác có thể trỏ tới cùng item, **không nhân bản stem/key/solution/rubric**.
- **Câu mới khi thực sự thiếu:** đặt \`DRAFT\` tại AUTHORING, đánh giá khả năng đo outcome và mức trùng, QA toán/đáp án/distractor; sau đó mới đưa vào **một** bank chung. Có thể đồng thời dùng ở SGK và Topic, không mặc định câu mới thuộc riêng Topic. Notebook review **theo rủi ro thực** khi QA không khép được nghi vấn, không tự gửi vòng lặp.

## IV. Bổ sung mới có thực tế trong AUTHORING

- **1 ứng viên bài tương tác M2** đã biên soạn trong \`Temp_TOPIC1_M2_M3_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\`, current blob **\`397f75cba490e47270bc2dd07eabe80efc08aa68\`**: \`DRAFT-T1-M2-APP07\`, chọn một đáp án, hai mô hình \`p(x)=x²\` và \`q(x)=2|x|\` cùng đúng 3 mốc \`(-2,4),(0,0),(2,4)\`, nhưng khác ở x=1. Bốn distractor kiểm riêng: tin ba mốc quyết định cả hình; sợ trị tuyệt đối; nhầm giá trị chưa đo với đầu vào không hợp lệ. Có gợi ý, lời giải, lý do cho từng phương án, D6. **Chưa là item_id canonical, chưa tích hợp engine, chưa review nếu không có rủi ro buộc phải review.**
- Sau bổ sung, M1–M3 có **12 DRAFT = 8 APP + 4 Written** (trước đó 11, R06 là snapshot cũ); các APP/Written còn lại giữ nguyên. **Không đặt giới hạn tối đa 12 bài mới**: đánh giá chiều sâu theo outcome, nếu tiếp tục thiếu thì bổ sung thêm đúng kỹ năng còn yếu.
- **Chưa chỉnh** source JS SGK, bank Topic R18, source private RD1, thư viện Written, Firebase, Golden UI hoặc website.

## V. Quyết định an toàn và bước tiếp

\`SHARED_REUSE_CONFIRMED\` là xác nhận **ID và nguồn**, không có nghĩa đã thực thi placement ở website. Việc tích hợp renderer, device QA, final gate và deploy do RELEASE xử lý khi được phép. Tại AUTHORING, nguồn R18 Git blob \`2340ea4975b37a457363eea59dd617070934983c\` giữ PASS lịch sử; R06 ONE_SOURCE \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` là snapshot review **không còn đại diện HEAD sau R07–R09**; không dùng hồ sơ cũ để tự ghi Academic/PED mới hoặc \`CONTENT_READY\`. Issue #790 V2 Topic intake còn mở, vẫn \`NO_MERGE/NO_DEPLOY\`.

**CHECKPOINT:** \`SIX_BANKS_255_IDS_UNIQUE\` · \`R18_88_SHARED_SGK_IDS_RESOLVED\` · \`REUSE_B15_P04_A1_A2_B3_REVIEWED\` · \`M2_NEW_INTERACTIVE_CANDIDATE_1\` · \`DRAFT_TOTAL_12\` · \`Q15_CANONICAL_NEW_HOLD\` · \`CONTENT_READY_NO\`.
