# G12 SGK Chương II — xác minh hẹp Q06/Q07/Q14/Q18 và SOURCE_RECEIPT R00

**TRẠNG THÁI:** `TARGETED_RECEIPT_CORRECTION_REQUEST` · `SOURCE_CONTENT_DELTA=NONE` · `CONTENT_READY=HOLD_Q18` · `RELEASE_AUTHORIZATION=NO`.
**PACKET_ID:** `G12-SGK-CHII-B06-B08-R00-REVIEW_CANDIDATE`; **chỉ một chuẩn:** `SLM-THPT-QUALITY-ONE v1.0.0`. Đây là hồ sơ kiểm tra sai khác provenance và thông tin rubric trên *bản R00 đã phản biện*, KHÔNG phải yêu cầu thẩm định lại toàn chương hay cấp chuẩn mới.

## 1. Phạm vi và kết quả cần bảo toàn

- Hai báo cáo NotebookLM do chủ dự án cung cấp cho cùng `R00` đều ghi `ACADEMIC_G12_CHAPTER_II=PASS`, `PEDAGOGICAL_SELF_LEARNING_READY=PASS`, `P0=P1=P2=0`, `MINIMAL_DELTA=0` theo đúng 5 Permanent Sources v2.1 và S1. Các nhận định về toán học và PED vốn đúng snapshot gốc được giữ nguyên; **không tạo verdict mới bằng tác giả**.
- AUTHORING đọc **byte thực của gói ZIP đã được chuyển cho NotebookLM**, đối chiếu với chính hai báo cáo. Phát hiện sai khác về tên file ↔ SHA, mô tả thang rubric, số hoạt động Tự thử và tiêu đề Q01–Q18. Cần reviewer hiệu chỉnh **riêng phần chứng cứ**, không sửa đề/đáp án/lời giải/rubric và không cấp `CONTENT_READY` cho đến khi Q18 nguồn được đóng đúng.
- Người phản biện tiếp tục dùng SGK/SBT KNTT 12 Tập Một gốc (SGK SHA256 `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd`, SBT SHA256 `db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca`). Gói hiện tại **không chứa tài liệu RD1 kín**, vì RD1 R00 đã được đưa vào đợt phản biện trước; chỉ cần đối chiếu digest/chứng cứ RD1 đã có.

## 2. Sai khác 1: PNG bị gắn nhầm SHA của nguồn SVG (Q07/Q18)

Ba ảnh PNG đã được tải trong bộ NotebookLM được kết xuất từ ba SVG nguồn gốc; report ghi đúng tên `.png` và kích thước PNG nhưng đặt SHA256 của `.svg` bên cạnh. Như vậy các dòng SHA256 của PNG trong báo cáo **không xác thực PNG theo byte**. Bảng đối chiếu dưới là SHA256 tính trực tiếp từ hai ZIP nguyên gốc, không phải số do NotebookLM đo.

| Bài | SVG gốc (bytes) | SHA256 SVG (bị báo cáo ghi dưới tên PNG) | PNG thực tế (bytes) | SHA256 PNG thực tế |
|---|---:|---|---:|---|
| B06 | 2246 | `391d1a9dbe7a70cbf2c941303edcdf44aaf757fba730a3d345f65d71a97afcf5` | 85163 | `bebacb9f3ecf6c0b6c517f20bcc4db3e57b9a6daf6a1ec1bfe9096ebe04a5405` |
| B07 | 2030 | `c3470b8bc38f37af1d837617eb4488241b8c93907710a2a350171296003cee72` | 71561 | `c737130d76e38a849f446731049f7196c2987c91872ff96f99a6302ce34a678b` |
| B08 | 1878 | `df3edb70ad9444247c7f49a6da07a78600192ff28eb94c092b44fd95a3259cd3` | 68467 | `d61686b1fd014756224bfada3e707ce1e17069f1caff92ebb0d414e2d01879eb` |

**Kiểm chứng hiển thị bổ sung của AUTHORING:** tôi đã dựng lại ba SVG bằng CairoSVG tại 1680 × 1040 và so từng pixel với PNG review; mỗi hình đạt khoảng **99,848% số pixel RGBA trùng chính xác**, sai khác nằm ở điểm raster/anti-alias nhỏ. Đây là QA hình học trực quan bổ sung, **không thay thế xác nhận reviewer đã xem đúng ba PNG trong NotebookLM**.

**Yêu cầu xác minh:** kiểm chính ba ảnh PNG đính kèm trong gói mục tiêu so với lời diễn giải hình đã nhận trong R00, xác nhận `FIG_ID` tương ứng và có/không đổi ý nghĩa toán học. **Không** tự tuyên bố NotebookLM đã tính được SHA256 binary; công việc tính băm là do AUTHORING thực hiện ở bảng trên. SOURCE chuẩn cho website sau này vẫn là SVG gốc, không mặc nhiên thay bằng PNG review transport.

## 3. Sai khác 2: QA manifest bị gắn SHA của prompt (Q18)

Báo cáo đang ghi cho `Temp_G12_CHII_QA_SHA_MANIFEST_20261103.md` giá trị `f6829e55edfffa1a22a19ea9ada6b8013edccc252dc6fc8f9ad0543a3d52d64a`, thực tế đó là SHA256 của tệp `Temp_G12_CHII_NOTEBOOKLM_REVIEW_PROMPT_20261103.txt` dài 1,456 bytes; **manifest thực dài 4,334 bytes** có SHA256 `9d78228b584ebeb6450809e258705e90ed11bff7b9dc4eed050b0f4c74e3d834`.
Điều kiện: bổ sung receipt chính xác, không biên tập lại báo cáo NotebookLM nguyên văn và không lấy danh sách hash sai ở báo cáo làm nguồn chuẩn.

## 4. Sai khác 3: Written rubric gốc /5, báo cáo nói /4 (Q06)

Báo cáo cho rằng **16 bài Written đều có rubric /4 với bốn tiêu chí ×1**. Thực tế đúng **16 rubric gốc đều /5**, chia điểm theo đặc trưng từng câu. Cần giữ nguyên /5 được phản biện, **không sửa xuống /4 chỉ để khớp báo cáo**, vì thay rubric là Delta C. Dưới đây là 16 dòng rubric nguyên văn từ ba file R00 (đưa kèm đường dẫn file nguồn và một phần trực tiếp, không sao chép đề RD1):

**Temp_G12_CHII_B06_LEARNING_R00_20261103.md**
- W01: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm lập mô hình ba phương vuông góc; 2 điểm tính căn tổng bình phương; 1 điểm phân biệt đường đi với độ dời.
- W02: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm tìm hai vectơ bằng; 1 điểm vectơ đối; 2 điểm giải thích chiều/độ dài.
- W03: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm mô tả đường đi; 2 điểm nhóm đúng; 1 điểm kết luận AD.
- W04: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm chứng minh cùng phương; 2 điểm giải thích hướng; 1 điểm tỉ số.
- W05: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 1 điểm kiểm hai độ dài dương; 2 điểm thiết lập cos; 1 điểm tìm góc; 1 điểm giải thích dấu.
- W06: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm công mỗi lực; 2 điểm cộng hợp lí bằng phân phối; 1 điểm đơn vị và giả thiết.

**Temp_G12_CHII_B07_LEARNING_R00_20261103.md**
- W01: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm xác định đúng A/B/C; 2 điểm giải thích điều kiện các tọa độ 0.
- W02: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm phân tích đúng; 2 điểm giải thích vectơ tự do; 1 điểm phân biệt điểm/tọa độ.
- W03: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm mô tả A; 2 điểm trục mới và dấu; 1 điểm giải thích tính tương đối.
- W04: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm AB; 2 điểm BA; 1 điểm quan hệ vectơ đối.

**Temp_G12_CHII_B08_LEARNING_R00_20261103.md**
- W01: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm tính đúng ba tọa độ; 2 điểm lý giải phép toán theo trục.
- W02: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm xác định hệ số; 2 điểm suy t và kiểm z; 1 điểm giải thích hướng.
- W03: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm G; 2 điểm M và cách tính từng tọa độ.
- W04: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm tính tích; 1 điểm kiểm khác 0; 2 điểm kết luận và điều kiện.
- W05: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm vectơ AB; 2 điểm độ dài; 1 điểm giải thích hình học.
- W06: - **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm độ dời; 1 điểm độ dài; 1 điểm tốc độ; 1 điểm điều kiện đường thẳng.

**Yêu cầu xác minh:** reviewer xác nhận *đúng 16 rubric `/5`* trong ba source R00, đánh giá chất lượng phân điểm/nguyên tắc tự đối chiếu ở chính thang này; không tự sửa nội dung. Nếu phát hiện rubric cụ thể sai toán hoặc sai chấm, báo chính `ITEM_ID`, `OUTCOME_ID`, lý do và `MINIMAL_DELTA` để AUTHORING xử lý bằng `DELTA_C` **chỉ phần chịu ảnh hưởng**.

## 5. Sai khác 4: Tự thử là 3 hoạt động, không phải 16 (Q14)

R00 chứa ba hoạt động trước Core với nhãn `B06-T01`, `B07-T01`, `B08-T01` (**1/bài**). Báo cáo nói mỗi B06/B07/B08 có lần lượt 6/4/6 “câu Tự thử”, có thể đã nhầm với **6/4/6 outcome/ví dụ/HELP**. Đề nghị xác nhận `PED6 PASS` thực sự dựa trên ba hoạt động này (nếu đủ chất lượng), không khẳng định 16 hoạt động không tồn tại.

## 6. Sai khác 5: bảng mô tả Q01–Q18 trong báo cáo không dùng đúng ID gốc

Theo chuẩn **duy nhất** trên `main` GitHub `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, tên gốc là Q01 S1/Scope, Q02 Outcomes, Q03 D1, Q04 D2, Q05 D3, Q06 D4, Q07 D5, Q08 D6, Q09–Q14 PED1–PED6, Q15 ID/shared bank, Q16 Assessment/exposure, Q17 Dual complete journeys, Q18 Review/fidelity. Trong báo cáo Q02 được ghi như Math Correctness, Q04 ghi Assessment Safety, Q18 ghi System Authorization. Đây là **mismatch nhãn chứng cứ**, không được tạo thành một bộ chuẩn khác hoặc suy Q18 PASS khi receipt sai. Cần reviewer xác nhận verdict Q01–Q18 bằng đúng ID/định nghĩa gốc; không bắt review lại phần Academic/PED không bị ảnh hưởng.

## 7. SHA256 nguồn đóng băng (AUTHORING local checksum)

Bảng này phản ánh bản 12 file `Temp_G12_CHII_NOTEBOOKLM_SUPPORTED_FILES_R00_20261103.zip` đã gửi, bao gồm file private (chỉ HASH, không trích đề):

| Tệp | Bytes thực | SHA256 thực |
|---|---:|---|
| `Temp_G12_CHII_B06_LEARNING_R00_20261103.md` | 25981 | `58848452a89858e2daeb73e275368dbeef5d87d157a42ca6f2c349ee2d8c61ee` |
| `Temp_G12_CHII_B07_LEARNING_R00_20261103.md` | 17407 | `f2b4834c202088fe0e0139ddada7f307fdac96481c3c514e6672ee3d78fe2050` |
| `Temp_G12_CHII_B08_LEARNING_R00_20261103.md` | 22160 | `834199f674bebf924defe6a7707cd9a726044af437f83d8426d05827446f78f1` |
| `Temp_G12_CHII_END_CANONICAL_Q01_Q18_R00_20261103.md` | 12304 | `f1711b66b4d5ff792f3fca25e5bb61e0e7a83ed9c0735ba5ba326eac1ecc37eb` |
| `Temp_G12_CHII_RD1_PRIVATE_REVIEW_ONLY_20261103.md` | 11732 | `2b25189f74db37a8c79106efc6ebae5e8943a38707d9962eb6f64edffe239dc1` |
| `Temp_G12_CHII_S1_AUDIT_OUTCOME_MATRIX_20261103.md` | 8048 | `8bcd846654fcacc65af6935e361f359a3de2c034012d66566a5e1865db2a06c5` |
| `Temp_G12_CHII_QA_SHA_MANIFEST_20261103.md` | 4334 | `9d78228b584ebeb6450809e258705e90ed11bff7b9dc4eed050b0f4c74e3d834` |
| `Temp_G12_CHII_NOTEBOOKLM_REVIEW_PROMPT_20261103.txt` | 1456 | `f6829e55edfffa1a22a19ea9ada6b8013edccc252dc6fc8f9ad0543a3d52d64a` |

**Chú ý về ma trận S1:** một câu mô tả trong `Temp_G12_CHII_S1_AUDIT_OUTCOME_MATRIX_20261103.md` ghi “12 tham chiếu”, nhưng bảng cuối chương có **16 hàng placement** và báo cáo cũng ghi 16. Khi khóa nguồn, AUTHORING sẽ chỉnh riêng chữ `12 → 16` trong metadata bằng `DELTA_B_SOURCE_EQUIVALENT`; không thay canonical `ITEM_ID`, đáp án, rubric, hay số placement thật.

## 8. Yêu cầu verdict hẹp — KHÔNG nghiên cứu lại toàn chương

Vui lòng trả `TARGETED_Q06_WRITTEN_RUBRIC_5_VERDICT`, `TARGETED_Q07_PNG_VISUAL_FIDELITY`, `TARGETED_Q14_FIRST_TRY_COUNT_AND_PED6`, `TARGETED_Q18_REVIEW_RECEIPT_RECONCILED`, `Q01_Q18_NORMATIVE_ID_MAPPING`, `AFFECTED_ITEM_IDS`, `SOURCE_RECEIPT`, `P0/P1/P2` và `MINIMAL_DELTA` theo **đúng snapshot R00**, nêu rõ mức khẳng định nào dựa trên đọc nội dung và mức nào chỉ dựa trên tác giả tính hash. Bảo toàn verdict độc lập R00 nếu chỉ là sai khác metadata và hoàn tất Q18 chính xác. Không cấp quyền phát hành, không kích hoạt Mastery, không đưa đề/đáp án/rubric RD1 kín lên GitHub.
