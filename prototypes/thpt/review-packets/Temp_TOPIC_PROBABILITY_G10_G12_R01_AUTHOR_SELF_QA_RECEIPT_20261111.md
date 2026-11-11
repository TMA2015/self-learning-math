# AUTHOR_SELF_QA_RECEIPT — Ứng viên Chuyên đề Xác suất G10–G12 · R01 (11/11/2026)

**Mode:** `AUTHOR_SELF_VERIFIED` cho nội dung mới thuộc phạm vi đã kiểm; **không** gán NotebookLM đã review R01. **State:** `SOURCE_AUDITED_CANDIDATE / NOT_CONTENT_READY` vì metadata/hợp đồng ngoài phạm vi nội dung còn thiếu. Đây không phải lỗi toán được chứng minh. **Vai trò:** AUTHORING duy nhất; không merge/deploy.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
PACKET_ID: THPT-TOPIC-PROBABILITY-G10-G12-R01-CANDIDATE
SOURCE_PATH: prototypes/thpt/content-drafts/topic-probability/Temp_TOPIC_PROBABILITY_G10_G12_FULL_PUBLIC_R01_20261111.md
SOURCE_BLOB: a4571d8aa0c20c266b26c5e2d8adce53d1a0ead7
S1_RECEIPT: R01 dựa trên nguyên ba nguồn SGK/SBT KNTT đã được người dùng/NotebookLM kiểm và ghi đúng snapshot reviewer 28/10/2026: G10 T2 SGK in77–89/SBT in60–74; G11 T2 SGK in63–82/SBT in42–55; G12 T2 SGK in42–58/SBT in40–64. Trong lượt R01 tác giả chỉ đọc lại toàn văn source Git của các phân đoạn, KHÔNG giả vờ đã mở trực tiếp toàn bộ ảnh PDF S1; reviewer PASS cũ chỉ cho snapshot cũ và được bảo toàn.
OUTCOME_AUDIT: 25 outcome duy nhất (G10=10;G11=7;G12=8) có ánh xạ 38 item PUBLIC canonical và 13 mảng Kiến thức, 13 Tự thử; 9 placement tự đối chiếu công khai là reuse, không cộng thêm item.
MATH_VERIFICATION: 24/24 kiểm tra chủ động trên R01 source và hai SVG PASS theo bảng kiểm toán; gồm 13 bài Tự thử (độc lập kết quả), phép đếm hợp/giao và cây Bayes. Không khẳng định đã kiểm lại mọi private held-out question/answer/rubric không có trong nguồn Git.
PED_VERIFICATION: Có WHY/tiền đề/bản chất/điều kiện/phương pháp trước công thức theo từng mảng; 13 đường lỗi→nguyên nhân→thao tác sửa tại chỗ; 2 hình SVG có mô tả và hướng dẫn đọc, 3 nhóm tab lớn/13 tab con, 3 trang bên ngoài, không ép học sinh sang nhánh SGK để đọc kiến thức bắt buộc.
CANONICAL_Q15: 38 public unique IDs, mapping 38 item–outcome chính với 25 outcome được bao phủ; G10 16 SGK reuse, G11 10 reviewed source, G12 12 reviewed source; một Written/Anchor record mỗi ID. Không clone stem/key/solution/rubric vào R01 mới; cần kiểm địa chỉ original bank khi RELEASE intake.
ASSESSMENT_Q16: Public `CLIENT_SELF_CHECK_NO_MASTERY` dùng 9 ID đã luyện, không có đáp án/đúng-sai/Tutor/hint trước Final Submit; không tính TOPIC_READINESS độc lập/Mastery. 12 private RD1 owner-held đã có reviewer PASS theo metadata snapshot 28/10, nguồn raw không nằm trên GitHub, **không biết SHA256 file private nguyên gốc tại thời điểm bàn giao**; KHÔNG đặt SHA256 của file metadata thay cho SHA256 đề kín.
P0: 0
P1: 0
P2: 0
AUTHOR_SIGNOFF: R01_PUBLIC_CONTENT_MATH_PED_CHECKED_WITH_24_DIRECT_CHECKS; do not promote to CONTENT_READY while packet taxonomy/privacy custody SHA and V2 intake data remain unverified.
BLOCKERS: OWNER_TOPIC_03_TAXONOMY_NOT_LOCKED; PRIVATE_RD1_ORIGINAL_SHA256_NOT_LOCATED; CURRENT_MAIN_CANONICAL_SOURCE_INTAKE_NOT_TESTED

## Dấu vết 13 câu Tự thử đã kiểm thực chất

| Mảng | Bài toán kiểm | Kết quả độc lập |
|---|---|---|
| M01 | Tập kết quả sáu mặt, chia hết cho 3 | {3,6}; phân biệt kết quả sơ cấp và biến cố |
| M02 | 3 A/1 B, rút đều nhãn B | 1/4, không phải 1/2 |
| M03 | 2 thẻ thưởng/10 thẻ | P(không trúng)=4/5 |
| M04 | Cặp 5 người và phân vai | C(5,2)=10; chọn hai vai=20 |
| M05 | Hai xu độc lập theo thứ tự | 4 kết quả; P(ngửa-ngửa)=1/4 |
| M06 | A chia hết 3, B chẵn trong 1..12 | n(A∩B)=2, n(A∪B)=8 |
| M07 | Hai xu độc lập | P(A∩B)=1/4=P(A)P(B) |
| M08 | 25+20−10 trong nhóm 40 | 35/40=7/8 |
| M09 | Hai hệ thống hỏng 1/5 và 1/4 độc lập | P(có ít nhất một hoạt động)=19/20 |
| M10 | Nhóm nữ và thích vẽ | 9/15=3/5 ≠ 9/14 |
| M11 | 3 đỏ 2 xanh, rút không trả | (3/5)(2/4)=3/10 |
| M12 | 60/40 nguồn lỗi 5/10 phần trăm | 7/100 |
| M13 | Hộp X/Y và biến cố đỏ | P(đỏ)=19/30; P(Y|đỏ)=15/19 |

## Hình và điều kiện biên

- **SVG Venn:** tập Ω={1,...,12}, A chia hết 3 có 4 phần tử, B chẵn có 6, giao {6,12} có 2, hợp 8, ngoài hợp {1,5,7,11} có 4; không gán từ vùng được tô thành luật đồng khả năng cho bài khác.
- **SVG Bayes:** 4 đường đi có xác suất `2/15 + 1/5 + 1/2 + 1/6 = 1`. Hai nhánh dẫn đến đỏ cộng `2/15+1/2=19/30`; hậu nghiệm `(1/2)/(19/30)=15/19`. Nhánh X và Y là một phân hoạch, conditional denominators đều dương. SVG có `<title>`, `<desc>`, nhãn/đường nối, không CDN/script. Browser/alt QA thực vẫn RELEASE.
- **G10 điều kiện:** tỉ số đếm cổ điển chỉ cho kết quả sơ cấp hữu hạn và đồng khả năng. Có/không hoàn lại và thứ tự tạo mô hình khác nhau.
- **G11 điều kiện:** giao và độc lập khác nhau; nhân xác suất riêng chỉ khi độc lập; cộng hợp luôn trừ phần giao.
- **G12 điều kiện:** `P(A|B)` chỉ khi `P(B)>0`; rút không hoàn lại dùng nhân có điều kiện; Bayes cần phân hoạch và xác suất dữ kiện dương. `THPT-G12-B19-P05` ba nhánh chỉ là `SUPPORT_EXTENSION`.

## Q01–Q18 / A1–A7 — cổng theo phạm vi có thật

| Q | Ghi nhận phạm vi AUTHORING |
|---|---|
| Q01 | SGK/SBT S1 theo reviewer receipts ba lớp; bản R01 dùng snapshot nguồn đã đọc, không tự nhận đọc ảnh PDF mới |
| Q02 | 25 outcome với 38 mapping (toàn bộ có item đại diện) |
| Q03 | 13 mảng lý thuyết giải thích định nghĩa/điều kiện và biên sử dụng |
| Q04 | Worked reasoning G10/G11/G12 từ nguồn đã review; 13 phép kiểm mới trong Tự thử |
| Q05 | 38 item public với phân tầng Practice, 9 selfcheck reused không clone |
| Q06 | Written gốc, Anchor chỉ tag, không tạo rubric bản sao |
| Q07 | Hai SVG chứng minh hợp/giao và cây Bayes, giá trị biên và mô tả đọc hình kiểm |
| Q08 | M13 có lỗi đảo điều kiện, M09 lỗi nhân không độc lập; tương tự mỗi module có D6 cụ thể |
| Q09 | 13 dẫn nhập xuất phát từ vấn đề, không chỉ danh mục công thức |
| Q10 | Tiền đề theo trình tự mô hình → biến cố → điều kiện và đảo xác suất |
| Q11 | Bản chất độ may rủi và không gian mẫu đứng trước tỉ số, tập hợp trước cộng/nhân |
| Q12 | SVG Venn/cây có hướng dẫn, nguyên toán; QA thực render chưa thực hiện |
| Q13 | Ví dụ nêu lý do chọn công thức/các trường hợp không áp dụng |
| Q14 | 13 first tries với `<details>` tự mở Đối chiếu và D6 ở từng tab |
| Q15 | Một `item_id` canonical và registry, 38 ID unique, 9 placement public reuse |
| Q16 | 12 held-out raw private not in public source; Final Submit runtime chưa QA, không Mastery |
| Q17 | Chính xác 3 trang Topic, không có Core; mỗi mảng có lý thuyết tự đủ |
| Q18 | Một source SHA và receipt tự kiểm; giữ reviewer old snapshot receipts không giả PASS mới |

**A1–A7 scoped:** A1 source SHA; A2 old S1 receipt với giới hạn đã nói; A3 Q18 author self-QA; A4 25 outcome/38 ID; A5 D1–D6/PED/2 SVG; A6 sửa thuật ngữ + câu Tự thử có kiểm phép tính, không đổi canonical answers; A7 privacy metadata-only. Đây không phải 1 check-list mới; cùng Q01–Q18 v3.0.1.

## Điều kiện đóng bàn giao

- Owner xác nhận Chuyên đề 3 trong taxonomy 22 thực sự là **Xác suất** hoặc xác nhận mã/tên khác; việc này không được tác giả tự khóa.
- Cung cấp/đối chiếu đúng **SHA256 của file private 12 RD1** nguyên bản owner-held nếu V2 mới cần hash, hoặc một chứng cứ custody owner-held khác được hợp đồng v3 chấp nhận chính thức; không sử dụng hash file metadata công khai thay thế.
- Đối chiếu khả năng nhận 38 canonical source references trên source-locked handoff, rồi chốt một V2 handoff/ready manifest/REGISTER khi mọi blocker đã đóng. RELEASE QA và quyền phát hành vẫn riêng, không có deployment hoặc Mastery.
