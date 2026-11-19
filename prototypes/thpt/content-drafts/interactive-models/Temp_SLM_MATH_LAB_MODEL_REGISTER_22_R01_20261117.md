<!-- I798_OWNER_MATHLAB_ACCEPTANCE_SCOPE_20261119 -->
### QUY TẮC NGHIỆM THU MÔ HÌNH MATH LAB — OWNER 19/11/2026 (AUTHORING)

**Phạm vi:** 25 HTML minh họa toán học ở `selected/`, **không phải** biên soạn lại bài SGK/Chuyên đề hoặc gói học liệu V2. Mục tiêu: mô hình toán **đúng học thuật, trực quan đúng bản chất, tương tác chạy đúng, dễ dùng** (kể cả phím và màn hình nhỏ). Kiểm công thức, đồ thị, điều kiện, biên, nội dung diễn giải học sinh nhìn thấy và source SHA; kiểm chạy HTML thực trước khi nhận `MODEL_PASS`. **Không yêu cầu** đối chiếu từng trang SGK/SBT, ma trận bao phủ toàn bài/chương, NotebookLM, Academic/PED review kiểu học liệu, receipt Q18/V2 riêng **chỉ vì một mô hình minh họa**. Điều này **không thay tiêu chuẩn Q01–Q18** của học liệu canonical, không miễn kiểm soát bảo mật và không tự cấp quyền tích hợp website.

**Ghi nhận đơn giản cho từng mô hình:** `MATH_CORRECT` + `VISUAL_TRUE` + `INTERACTION_PASS` + `USABLE_RESPONSIVE` + `SOURCE_BLOB` → `MODEL_PASS` (chỉ khi đủ chứng cứ), ngược lại `MODEL_QA_PENDING` nêu lỗi thật. Có thể tái sử dụng sổ hiện hữu, **không** dựng bộ hồ sơ mới. PASS của mô hình không phải CONTENT_READY/RELEASE PASS của chương hay Chuyên đề. **Chỉ sửa đúng 1 HTML selected hiện hành**; không merge/deploy, không thay item/Readiness/Mastery/RD1/Firebase.

<!-- I798_UNIFIED_22_MODEL_PROGRAM_20261119 -->
<!-- I798_OWNER_FINAL_COUNT_25_20261119 -->
<!-- I798_LOCKED_25_INVENTORY_PER_MODEL_20261119 -->
<!-- I798_SELECTED_25_CANONICAL_PATHS_20261119 -->
### 25 FILE ỨNG VIÊN HIỆN HÀNH — DUY NHẤT `selected/`

**25/25 HTML vật lý đã ghi vào Draft PR #880**, tại `prototypes/thpt/content-drafts/interactive-models/selected/`. Cột trạng thái của từng dòng trong bảng dưới chứa **đường dẫn cùng blob SHA thực tế**. Chỉ sửa đúng file này qua các lượt, không phát sinh `_Rxx`/second-final. **CĐ21** đã tích hợp công thức Bayes hậu nghiệm + bốn lá từ donor #13, kiểm thử **1153/1153 Chromium PASS** theo exact source SHA; chưa có review độc lập G1/G2/G4. **Tại mốc tách nguồn ban đầu**, 24 file còn lại là ứng viên chưa QA. **Sau các lượt AUTHORING 19/11: 25/25 đã có DEV_QA theo nguồn** (mức khác nhau), nhưng **0/25 được cấp Final MODEL_PASS**; xem bảng và checkpoint hiện hành phía dưới. Bảy donor mới không làm nền nằm trong [`reference/`](./reference/README.md) và Library ZIP, không có HTML tham khảo lẫn trong `selected/`.


<!-- I798_DEV_BASE_SELECTION_25_R01_20261119 -->
### QUYẾT ĐỊNH CHỌN NỀN PHÁT TRIỂN — R01 (19/11/2026)

**25/25 mô hình đã được CHỌN MÃ NỀN** để phát triển tiếp, có căn cứ mã nguồn thực và source SHA; **không phải 25/25 mô hình đã hoàn thiện/được QA G1–G4**. Quy ước nguồn `OLD_*` và `NEW_NN` cùng báo cáo toán và phần bù bắt buộc được khóa tại [biên bản chọn nguồn có SHA](../../review-packets/Temp_I798_DEV_BASE_SOURCE_SELECTION_25_R01_20261119.md). Đúng **19 nguồn cũ làm nền cho Chuyên đề + 3 HTML mới làm nền cho Chuyên đề + 3 HTML mới cho SGK**, tổng 25 mục. 13 HTML mới được bảo toàn (6 làm nền, 7 làm nguồn bổ sung), không tự tạo bản thứ 26. Chốt nguồn cuối/receipt QA **sau khi** hoàn thiện từng mô hình.

## SỔ KHÓA 25 MÔ HÌNH ĐƯỢC CHỌN — PHẠM VI GIAI ĐOẠN 1 (19/11/2026)

**Quyết định chủ dự án:** Math Lab **trước mắt dự kiến đúng 25 mục tiêu mô hình**. Danh sách bên dưới là 25 **loại mô hình đã chọn để hoàn thiện**, không phải lời chứng nhận 25 mô hình đã qua G1–G4 hay đang chạy trên website. **Chỉ tăng số lượng sau khi chủ dự án duyệt đề xuất bổ sung.** Danh sách 22 MODEL_ID/Outcome/PR/source SHA chi tiết phía dưới **vẫn là nguồn canonical** cho Chuyên đề; 3 khóa `SLM-SGK-...` là **khóa theo dõi tài nguyên bổ trợ** (không phải MODEL_ID canonical của Chuyên đề, không phải ITEM_ID).

| STT | Nơi phục vụ | Mã nguồn/khóa theo dõi | Loại mô hình được chọn | HTML mới liên hệ | Quyết định nguồn & tiến độ |
|---|---|---|---|---|---|
| 01 | CĐ01 | `SLM-TOP01-TRUTH-01` | Mô hình chân trị | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP01-TRUTH-01.html) · `ab4858c9285237be472393b34715810407452459` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 02 | CĐ02 | `SLM-TOP02-QUADRATIC-01` | Dấu tam thức | `#02` + `#05` | **DEV_BASE_SELECTED**: `OLD_S`; donor: `NEW_02 (và phần parabol NEW_05 nếu phù hợp)`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP02-QUADRATIC-01.html) · `25485efbf1a1abe6cf05ee839b76b1b37417ef66` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 03 | CĐ03 | `SLM-TOP03-SQUARING-01` | Bình phương và nghiệm ngoại lai | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP03-SQUARING-01.html) · `3d20ec5728b03e0580c39c6b4a2793105424ae9c` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 04 | CĐ04 | `SLM-TOP04-EXPLOG-01` | Hàm mũ/lôgarit ngược nhau | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP04-EXPLOG-01.html) · `c5b555a04e7400e2161661d83eeb9f527763d367` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 05 | CĐ05 | `SLM-TOP05-GRAPH-01` | Biến đổi đồ thị | `#05` | **DEV_BASE_SELECTED**: `OLD_G`; donor: `NEW_05`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP05-GRAPH-01.html) · `bf564b03dce50a984a3b88a04f87efc06bf4f6b0` · **AUTHORING_MODEL_QA_PASS_CHROMIUM_52_52 + BATCH_25_STRICT_CHROMIUM_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 06 | CĐ06 | `SLM-TOP06-UNIT-CIRCLE-01` | Đường tròn lượng giác | `#07` | **DEV_BASE_SELECTED**: `NEW_07`; donor: `OLD_S (liên hệ đồ thị sin)`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP06-UNIT-CIRCLE-01.html) · `2556c904e910138dc677ded0318e1c2f90e6b1b8` · **AUTHORING_MODEL_QA_PASS_CHROMIUM_92_92 + BATCH_25_STRICT_CHROMIUM_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 07 | CĐ07 | `SLM-TOP07-SEQUENCE-01` | CSC và CSN | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP07-SEQUENCE-01.html) · `ea71ddde65cb8c35ec9c050eadc9f2aa12e6f5bb` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 08 | CĐ08 | `SLM-TOP08-LIMIT-01` | Giới hạn trái/phải | `#04` | **DEV_BASE_SELECTED**: `OLD_S`; donor: `NEW_04`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP08-LIMIT-01.html) · `c2af3490c7010c1a1d0f64d4473e48a816cc9364` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 09 | CĐ09 | `SLM-TOP09-TANGENT-01` | Cát tuyến đến tiếp tuyến | `#11` | **DEV_BASE_SELECTED**: `OLD_D`; donor: `NEW_11`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP09-TANGENT-01.html) · `c54cde631b8d3af36f7aed70d981481e3f1fdb63` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 10 | CĐ10 | `SLM-TOP10-BOX-01` | Tối ưu thể tích hộp | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP10-BOX-01.html) · `7938e4c1943dfb5d8cabbe5b930fb99033ea5266` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 11 | CĐ11 | `SLM-TOP11-RIEMANN-01` | Tổng Riemann | `#06` | **DEV_BASE_SELECTED**: `NEW_06`; donor: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP11-RIEMANN-01.html) · `44f74146b7f6c8b6fcd906252096263882fac286` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 12 | CĐ12 | `SLM-TOP12-SSA-01` | Mơ hồ SSA | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP12-SSA-01.html) · `910424f069e50e9d4dcfe068ed7680cad32cd138` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 13 | CĐ13 | `SLM-TOP13-DOT-01` | Tích vô hướng/hình chiếu | `#01` | **DEV_BASE_SELECTED**: `OLD_V`; donor: `NEW_01`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP13-DOT-01.html) · `d6f755311bc414c037ebdee895a7361aa249028e` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 14 | CĐ14 | `SLM-TOP14-PARABOLA-01` | Parabol tiêu điểm/đường chuẩn | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP14-PARABOLA-01.html) · `a9448b1aa754c9caadca0bd2e06fa2056f5f2ea2` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 15 | CĐ15 | `SLM-TOP15-LINE-PLANE-R00` | Đường thẳng và mặt phẳng | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_LP`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP15-LINE-PLANE-R00.html) · `1f289ca00c3edba83abe722f0db8e2e15cf6cc8f` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 16 | CĐ16 | `SLM-TOP16-RAMP-ANGLE-R00` | Góc dốc/hình chiếu | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_RA`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP16-RAMP-ANGLE-R00.html) · `58373c20fa2155a5b9fc67af8270df799fc84d60` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 17 | CĐ17 | `SLM-TOP17-FRUSTUM-VOLUME-R00` | Khối và thể tích | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_FR`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP17-FRUSTUM-VOLUME-R00.html) · `921e8af63394878904c3f1fed8c914d8ff92fcd1` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 18 | CĐ18 | `SLM-TOP18-OXYZ-GEOMETRY-R00` | Mặt phẳng/mặt cầu Oxyz | `#03` | **DEV_BASE_SELECTED**: `OLD_OX`; donor: `NEW_03`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP18-OXYZ-GEOMETRY-R00.html) · `bee54ac6ac6e0386023bc6a8c55944afe4761023` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 19 | CĐ19 | `SLM-TOP19-COMBINATORICS-PASCAL-R00` | Đếm chọn và Pascal | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_PA`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP19-COMBINATORICS-PASCAL-R00.html) · `f467a3b775bb2a5a3cdf8d6e16dbc38f99e3ae92` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 20 | CĐ20 | `SLM-TOP20-PROB-EVENTS-R00` | Hai biến cố | `#12` | **DEV_BASE_SELECTED**: `NEW_12`; donor: `OLD_EV (PR #860 đã đóng, chỉ tham khảo)`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP20-PROB-EVENTS-R00.html) · `086ecc628d226a3580b733bfb5e5416163d83a0b` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 21 | CĐ21 | `SLM-TOP21-BAYES-TREE-R01` | Bayes/sơ đồ cây | `#13` | **DEV_BASE_SELECTED**: `OLD_BD`; donor: `NEW_13`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP21-BAYES-TREE-R01.html) · `ed54561e72b38e0b82a6d3e7e429ad53be0ab710` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 22 | CĐ22 | `SLM-TOP22-DISTRIBUTION-R01` | Dữ liệu thô/ngoại lệ | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_BD`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-TOP22-DISTRIBUTION-R01.html) · `42da41a6fb299c74990bd09abc082530ba738ab1` · **AUTHORING_MODEL_QA_PASS_CHROMIUM_96_96 + BATCH_25_STRICT_CHROMIUM_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 23 | SGK Toán 11 Bài 3 | `SLM-SGK-G11-B03-SINCOS` | Đồ thị sin/cos và tính tuần hoàn | `#08` | **DEV_BASE_SELECTED**: `NEW_08`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-SGK-G11-B03-SINCOS.html) · `33a9b11463db77d2136ec78873f527dc1eb95759` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 24 | SGK Toán 11 Bài 3 | `SLM-SGK-G11-B03-TANCOT` | Đồ thị tan/cot và tiệm cận | `#09` | **DEV_BASE_SELECTED**: `NEW_09`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-SGK-G11-B03-TANCOT.html) · `da207f8491e0eeebff8b304579aadfe0f9b6ded2` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |
| 25 | SGK Toán 11 Bài 4 | `SLM-SGK-G11-B04-TRIGEQ` | Phương trình lượng giác cơ bản | `#10` | **DEV_BASE_SELECTED**: `NEW_10`; **MODEL_SOURCE_SHA_LOCKED_OWNER_ACCEPTED** · [selected](./selected/SLM-SGK-G11-B04-TRIGEQ.html) · `05061a9bb5100249d210879e9e21a5e712294d51` · **BATCH_25_EXACT_SHA_CHROMIUM_STRICT_QA_PASS+SEMANTIC_ORACLE_CHROMIUM_1100_1100_PASS / OWNER_ACCEPTED_MODEL_PASS_20261119 / RELEASE_INTAKE_PENDING** |

### Phân biệt dứt khoát “đã chọn mô hình” và “đã chọn source cuối”

1. **ĐÃ CHỌN 25 LOẠI:** 22 vị trí gắn 22 Chuyên đề + 3 bổ trợ SGK Toán 11 B3/B4. Khi triển khai, chỉ hoàn thiện các loại trên theo đúng STT/mã, không tự phát sinh model ID mới hoặc nhân bản nguồn vì có 2 HTML thử nghiệm.
2. **CHƯA CHỐT SOURCE THẮNG CUỘC cho 10 mục A/B:** #01–#13 mới được xem là nguồn ứng viên có QA Chromium độc lập; nguồn Git HTML cũ giữ nguyên quyền truy nguyên. Chỉ chọn source cuối sau khi so phạm vi toán, điều kiện, kết quả, ví dụ, khả năng tự học, Golden, responsive/keyboard; bổ sung chức năng nếu thiếu. Ghi source blob SHA đã khóa, owner và QA receipt sau khi chọn.
3. **12 mục C có code thực từ PR cũ, không phải ý tưởng:** tách/tái sử dụng/đồng bộ từng mô hình; chỉ viết lại phần lỗi, không tái tạo từ đầu.
4. **Ba HTML SGK (#08/#09/#10)** đã có standalone tự QA và được tính là **ba mục riêng** ngoài 22 Chuyên đề, nhưng chưa tích hợp hoặc phát hành. Mô hình #02 và #05 đều hỗ trợ CĐ02 song **CĐ02 chỉ được tính một mục**.
5. **Kho nguồn mới duy nhất:** `/SLM/Research-Issue798/Temp_I798_MODELS_MASTER_CURRENT.zip`, 13 HTML, SHA256 `bed77d2c29761f6056ddd80a8f884123bf6e6a381fd473bb909751093a98c45c`. Ví dụ tên file: `Temp_I798_FINAL_01_VECTOR_OXY.html`, `Temp_I798_FINAL_13_PROBABILITY_TREE.html`. Khi chọn xong nguồn cho từng mô hình, chuyển từ ứng viên sang một source canonical cùng MODEL_ID, không tạo bộ 25 cạnh tranh.
6. **Điểm hoàn tất một mục:** toán/PED có kiểm thử với điều kiện và edge cases, có HTML chạy độc lập đồng bộ Golden, QA 320/390/820/1440 và keyboard/text fallback/offline, tài liệu source SHA + receipt. **Chưa phải website RELEASE.** G1–G4 cần đóng đúng phạm vi trước handoff; bảo vệ 22 Topic `CONTENT_READY`/RD1/Final Submit/Mastery.
7. **Điều chỉnh tương lai:** nếu xác định bài học còn thiếu mô hình độc lập, lập đề xuất `MATH_LAB_SCOPE_CHANGE_REQUEST` trên Issue #798 với bài/outcome/giá trị sư phạm, chống trùng; **chỉ tăng từ 25 khi chủ dự án phê duyệt**. Không quota mỗi bài.

**Checkpoint:** `MATH_LAB_PHASE1_25_SELECTED_TYPES / SOURCE_WINNERS_PENDING_10_A_B / OLD_C12_REUSE / SGK3_INCLUDED / NO_RELEASE`.

---


## CHỐT DANH MỤC MÔ HÌNH (19/11/2026) — **25 MỤC TIÊU, KHÔNG PHẢI 35 HAY 31**

**Quyết định của chủ dự án:** tổng danh mục nghiên cứu/bàn giao là **25 mục tiêu mô hình** = **22 mục tiêu gắn với 22 Chuyên đề** (22 MODEL_ID tồn tại trong sổ) **+ 3 mô hình bổ trợ SGK Toán 11** ngoài 22 mục. Đây là **đơn vị tính để theo dõi hoàn thành**, không phải số HTML vật lý hoặc số module đã nghiệm thu. Nếu một mô hình bao gồm nhiều cảnh hay tái sử dụng ở hai nơi, **không nhân bản số mục tiêu**.

**Giải thích phép đếm nguồn:** 22 ứng viên cũ đã có mã thật trong **11 tệp HTML** của các PR nguồn; 13 HTML mới gồm **10 tệp có thể phục vụ 10/22 mục tiêu** (4 mục gần trùng chức năng, 6 mục chỉ đáp ứng một phần), **3 HTML phục vụ SGK ngoài 22 mục**. Vì vậy **22 + 13 không phải 35 mô hình cần xây dựng**, và phép trừ chỉ **4** mục A để ra **31** là sai: còn **6** mục B cũng đang được ghép chức năng vào 22 mục tiêu sẵn có, dù **chưa đủ điều kiện thay thế**. Phép đối chiếu đúng theo *vị trí mục tiêu*: **22 + 3 = 25**. Không tự tuyên bố 6 B đã hoàn thành; cần bổ sung phần còn thiếu và giữ đầy đủ giá trị của 13 HTML.

### 22 mục tiêu Chuyên đề — nguồn đang có và cần hoàn thiện

- **A = 4 mục có HTML mới gần trùng chức năng:** CĐ05 ← HTML05 (biến đổi parabol); CĐ06 ← HTML07 (đường tròn lượng giác); CĐ11 ← HTML06 (Riemann); CĐ20 ← HTML12 (Venn/hai biến cố). **Chưa tự chuyển quyền sở hữu nguồn**; so bản cũ và mới, chọn bản đúng/toàn diện hơn, bổ sung nếu thiếu.
- **B = 6 mục mới hỗ trợ một phần:** CĐ02 ← HTML02 + HTML05 (dấu tam thức chưa đủ); CĐ08 ← HTML04 (giới hạn trái/phải); CĐ09 ← HTML11 (đồ thị f′); CĐ13 ← HTML01 (tích vô hướng/hình chiếu); CĐ18 ← HTML03 (hình chiếu Oxyz); CĐ21 ← HTML13 (Bayes hậu nghiệm). Giữ chức năng bổ ích của bản mới, **không tuyên bố tương đương** cho đến khi bổ sung đủ chức năng theo outcome.
- **C = 12 mục đã có mã ứng viên cũ, chưa có HTML mới tương ứng:** CĐ01, CĐ03, CĐ04, CĐ07, CĐ10, CĐ12, CĐ14 (7 scene từ #844); CĐ15, CĐ16, CĐ17, CĐ19 (4 HTML từ các PR riêng); CĐ22 (1 scene #880). Tận dụng mã cũ và hoàn thiện **mỗi mục một bản chạy độc lập**, không viết lại từ con số không.

### 3 mục bổ trợ SGK — thêm vào danh mục, **không thêm MODEL_ID Chuyên đề**

| Số trong bộ 13 | Nội dung | Vị trí đề xuất | Trạng thái |
|---|---|---|---|
| HTML08 | Đồ thị sin/cos và tính tuần hoàn | SGK Toán 11 · Bài 3 | STANDALONE_SELF_QA; NOT WEBSITE |
| HTML09 | Đồ thị tan/cot và tiệm cận | SGK Toán 11 · Bài 3 | STANDALONE_SELF_QA; NOT WEBSITE |
| HTML10 | Phương trình lượng giác cơ bản | SGK Toán 11 · Bài 4 | STANDALONE_SELF_QA; NOT WEBSITE |

**Tình trạng kiểm đếm, không phải nghiệm thu:** **13/25 mục tiêu đã có HTML standalone mới liên hệ** (= 10 mục trong 22 + 3 SGK), nhưng **mới hoàn thiện độc lập, chưa chốt 10 mục Topic là canonical PASS**; trong đó 6 mục B cần bổ sung, 4 mục A cần so sánh. **12/22 mục C chưa có standalone mới tương ứng** nhưng đã có mã nguồn cũ. Chưa tích hợp website/phát hành mô hình nào. Nếu phát sinh mô hình có chức năng giáo dục độc lập thật sự nằm ngoài 25 mục, phải đề xuất thay đổi phạm vi để chủ dự án quyết định; không tự âm thầm tăng tổng.

**Quy trình từ nay:** dùng **một danh mục 25 mục tiêu**, một register 22 MODEL_ID + ba dòng SGK trên, một Issue [#798](https://github.com/TMA2015/self-learning-math/issues/798) và Draft PR #880; đối chiếu chức năng → sửa và test **từng mô hình** → chốt một nguồn chính/một standalone mỗi mục → làm mục tiếp theo. Không sửa snapshot 22 Chuyên đề CONTENT_READY, không nhân bản item hay đánh giá, không tự merge/deploy.

---


# QUYẾT ĐỊNH HỢP NHẤT — 19/11/2026 · ONE MATH LAB PROGRAM

**Quyết định mới nhất của chủ dự án:** dừng hai luồng phát triển tách rời, tiếp tục **một chương trình 22 vị trí mô hình của 22 Chuyên đề**, tận dụng toàn bộ mã nguồn ứng viên cũ và **13 HTML độc lập vừa hoàn thiện**. Mục tiêu là một nguồn định danh, không xóa hồ sơ/PR/commit lịch sử, không tự hợp nhất Git branches/merge/deploy, không tăng số lượng theo chỉ tiêu.

## Một nơi quản lý, hai nhóm nguồn (không đếm cộng thành 35 mô hình)

- **Danh mục và nguồn định danh duy nhất:** **22 MODEL_ID trên chính register này**, dùng placement/outcome và PR source hiện có làm baseline; **PR #880** là Draft điều phối **AUTHORING Math Lab** (không phải website Release).
- **Một Issue điều hành còn mở:** **[#798](https://github.com/TMA2015/self-learning-math/issues/798)** theo dõi tiếp tục mô hình, đối soát, quyết định chọn nguồn, blocker/QA/handoff; không mở thêm issue song song cho "13 mô hình mới". [#865](https://github.com/TMA2015/self-learning-math/issues/865) vẫn đóng như ledger AUTHORING 22 Chuyên đề, không mở lại.
- **Nguồn cũ có mã chạy THẬT:** 22 module/placement từ **11 file HTML thực** trên Drafts [#844](https://github.com/TMA2015/self-learning-math/pull/844), [#801](https://github.com/TMA2015/self-learning-math/pull/801), [#793](https://github.com/TMA2015/self-learning-math/pull/793), [#846](https://github.com/TMA2015/self-learning-math/pull/846), [#848](https://github.com/TMA2015/self-learning-math/pull/848), [#853](https://github.com/TMA2015/self-learning-math/pull/853), [#855](https://github.com/TMA2015/self-learning-math/pull/855), [#858](https://github.com/TMA2015/self-learning-math/pull/858), [#860](https://github.com/TMA2015/self-learning-math/pull/860), [#880](https://github.com/TMA2015/self-learning-math/pull/880). **PR #860 đã CLOSED (SUPERSEDED)**; link là hồ sơ nguồn lịch sử, không chứng minh đây là nhánh học liệu CĐ20 hiện hành.
- **Nguồn mới có mã chạy THẬT:** Library `/SLM/Research-Issue798/Temp_I798_MODELS_MASTER_CURRENT.zip`, **13 HTML đơn lẻ**, ZIP **5,141,797 bytes**, SHA256 `bed77d2c29761f6056ddd80a8f884123bf6e6a381fd473bb909751093a98c45c` (CRC PASS). **Không tự xem ZIP cá nhân là 13 nguồn Git canonical**, không ghi đè HTML #844/#801/... khi chưa kiểm so điều kiện và quyết định source owner. Crosswalk chi tiết `/SLM/Research-Issue798/Temp_I798_CROSSWALK_22TOPICS_VS_13_STANDALONE_20261119.md` SHA256 `158bc61c85d7863d6bacb4ff4b651b81277cab05712705c1dd9af50e0fe31666`.
- **Phân loại đúng 22 vị trí:** A **4** cùng mục tiêu chính (**CĐ05, 06, 11, 20**); B **6** mới hỗ trợ một phần (**CĐ02, 08, 09, 13, 18, 21**); C **12** chưa có standalone mới tương ứng (**CĐ01, 03, 04, 07, 10, 12, 14, 15, 16, 17, 19, 22**). **Cả 12 nhóm C đã có mã ứng viên trên GitHub**. Nhãn A/B/C là so chức năng, **không phải G1–G4 PASS**.
- **3 HTML mới bổ trợ SGK, không ép vào 22 dòng:** `Temp_I798_FINAL_08_SIN_COS_PERIOD.html`, `09_TAN_COT_ASYMPTOTES.html`, `10_TRIG_EQUATIONS.html` dùng cho SGK G11 B03/B04; vẫn được giữ trong **cùng một thư viện vật lý** như tài nguyên SGK bổ trợ, **không tự tạo Topic MODEL_ID thứ 23–25**. Bản 13 mới có thể tiếp tục bổ sung mô hình sau khi hoàn thành danh mục đã chọn, không trùng chức năng.

## Cách làm tiếp — đúng một chương trình, không clone hai source-owner

1. **A: 4 candidate:** đối chiếu công thức, giả thiết, phạm vi thao tác, kết quả và PED; chốt *một* MODEL_ID/source owner sau khi xác minh, không tự nhận bản HTML mới đã thay source cũ.
2. **B: 6 partial:** giữ bản tốt nhất, bổ sung chính xác outcome còn thiếu (Bayes hậu nghiệm, tích vô hướng/hình chiếu, Oxyz projection, f′, dấu tam thức, giới hạn một phía); kiểm toán phần ảnh hưởng, không tạo hai MODEL_ID cho một mô hình.
3. **C: 12 source-existing:** dùng mã HTML trên Draft (7 scene từ #844, 4 standalone #846/#848/#853/#858, 1 scene dữ liệu #880), sửa/chuẩn hóa UI và hoàn thiện **từng mô hình độc lập**, không viết lại nếu source đủ tốt.
4. **Giữ chuẩn duy nhất Q01–Q18:** model chỉ là PUBLIC_DISCOVERY_NO_MASTERY. Chốt từng model khi toán/giới hạn/phương pháp đúng, tương tác/keyboard/responsive/Canvas/SVG đúng, render Golden tương thích và có receipt SOURCE_SHA. Nội dung mới thực sự DELTA_C mới qua review phần ảnh hưởng; sửa UI không kéo lại học liệu 22 CĐ đã READY.
5. **Cổng tách bạch:** 13 HTML mới có QA Chromium độc lập; 22 candidate cũ mới G0 source/outcome và G2 CSS source. **G1 academic/PED, G2 rendered visual, G3 browser/control, G4 handoff là OPEN** ở chương trình cũ; không cộng số QA hai bộ thành QA canonical. Không sửa học liệu/22 source SHA, ngân hàng item, RD1, Final Submit, Mastery, Firebase, Golden, website; không merge/deploy.
6. **Nhật ký:** giữ nguyên tất cả comment cũ của Issue #798, lịch sử PR #880 và các PR gốc. Từ nay **sửa sổ này**, cập nhật đúng một Issue #798 và dùng một MASTER_CURRENT khi chọn/khóa từng HTML; không mở thêm danh mục cạnh tranh.

## Ma trận một bản — ba cột bổ sung (HTML mới / mức / khoảng trống)

Bảng register nguyên gốc bên dưới được mở rộng bằng đúng ba cột này; **22 MODEL_ID, Outcome, SHA nguồn và đường dẫn cũ được bảo toàn**. Các con số 13/22 không phải tỉ lệ hoàn thành.

---
# Math Lab · 22 Chuyên đề · sổ canonical mô hình R01 (AUTHORING)

**Ngày:** 17/11/2026 · **Repo:** `TMA2015/self-learning-math` · **Tiêu chuẩn duy nhất:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18 · **Phạm vi:** metadata + HTML mô hình, KHÔNG phải website, không thay 22 snapshot học liệu/handoff cũ. 

**Phân loại bằng chứng:** 20/22 model HTML nguồn đã có trong các Draft PR (CĐ01–14: 14 placements = 11 engine modules + 3 SHA reuses; CĐ15–20: 6 HTML riêng). R01 bổ sung 2 module thực CĐ21–22; tổng nay **22 model candidates for 22 topics**, nhưng **KHÔNG phải 22/22 nghiệm thu**. Nguồn các branch khác nhau nên registry là ledger cross-branch, không phải một bundle release chạy trực tiếp. 

## Quy tắc một nguồn – hai nơi sử dụng

- Một mô hình có đúng một `MODEL_ID` và một source blob Git SHA; placement trong **trang Kiến thức** đúng outcome và tương lai chỉ mục **Math Lab** đều gọi cùng một mô hình. Không clone HTML/chương trình vào hai nơi.
- `MODEL_ID` không phải `ITEM_ID`. Demo `PUBLIC_DISCOVERY_NO_MASTERY` không ghi điểm, không dùng trong held-out `TOPIC_READINESS`, không rò RD1/Final Submit.
- Mọi URL từ Draft và `?model=<MODEL_ID>` chỉ là đường dẫn nguồn dự kiến; **chưa phải URL website production**. Topic vẫn chỉ **Kiến thức / Luyện tập / Tự kiểm tra**.

## Sổ model → outcome → source

| Topic | MODEL_ID | Outcome/placement học thuật | Trực quan | Draft PR | SOURCE_BLOB SHA | Canonical path | Trạng thái nguồn cũ | HTML mới liên hệ | Mức | Cần hoàn thiện / ghi chú |
|---|---|---|---|---|---|---|---|---|---|---|
| CĐ01 | `SLM-TOP01-TRUTH-01` | `TOP01-O01` | Mô hình chân trị | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Chân trị: dùng mã #844, tách thành HTML độc lập |
| CĐ02 | `SLM-TOP02-QUADRATIC-01` | `TOP02-O02` | Dấu tam thức | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 02, 05 | B | Bổ sung miền xét dấu tam thức |
| CĐ03 | `SLM-TOP03-SQUARING-01` | `TOP03-O09` | Bình phương và nghiệm ngoại lai | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Bình phương và nghiệm ngoại lai: nguồn #844 |
| CĐ04 | `SLM-TOP04-EXPLOG-01` | `TOP04-O09` | Hàm mũ/lôgarit ngược nhau | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Hàm mũ/logarit hàm ngược: nguồn #844 |
| CĐ05 | `SLM-TOP05-GRAPH-01` | `TOP05-O10` | Biến đổi đồ thị | [#801](https://github.com/TMA2015/self-learning-math/pull/801) | `249c433ba4fc58c8b6f88467ca003fb978d18c01` | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 05 | A | Đối chiếu a≠0 và thao tác biến đổi M3 |
| CĐ06 | `SLM-TOP06-UNIT-CIRCLE-01` | `TOP06-O01` | Đường tròn lượng giác | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 07 | A | Đối chiếu góc–tọa độ và đồ thị sin |
| CĐ07 | `SLM-TOP07-SEQUENCE-01` | `TOP07-O11` | CSC và CSN | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Cấp số cộng/nhân: nguồn #844 |
| CĐ08 | `SLM-TOP08-LIMIT-01` | `TOP08-O13` | Giới hạn trái/phải | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 04 | B | Bổ sung giới hạn trái/phải, điều kiện liên tục |
| CĐ09 | `SLM-TOP09-TANGENT-01` | `TOP09-O01` | Cát tuyến đến tiếp tuyến | [#801](https://github.com/TMA2015/self-learning-math/pull/801) | `6e3420462d60e985a976fe5f81db9b3a846b0da0` | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 11 | B | Bổ sung đồ thị f′, đọc dấu đạo hàm |
| CĐ10 | `SLM-TOP10-BOX-01` | `TOP10-O29` | Tối ưu thể tích hộp | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Tối ưu hộp cắt góc: nguồn #844 |
| CĐ11 | `SLM-TOP11-RIEMANN-01` | `TOP11-O11` | Tổng Riemann | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 06 | A | Đối chiếu đoạn [0,2] và [1,2], quy tắc lấy mẫu |
| CĐ12 | `SLM-TOP12-SSA-01` | `TOP12-O08` | Mơ hồ SSA | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Mơ hồ cạnh–cạnh–góc (SSA): nguồn #844 |
| CĐ13 | `SLM-TOP13-DOT-01` | `TOP13-O09` | Tích vô hướng/hình chiếu | [#793](https://github.com/TMA2015/self-learning-math/pull/793) | `a0db48db73198044a262312dc438fc4ae5e03788` | `prototypes/thpt/content-drafts/topic-vector-coordinate/exp-notebook-d5-equivalent/Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | 01 | B | Bổ sung tích vô hướng, góc và hình chiếu |
| CĐ14 | `SLM-TOP14-PARABOLA-01` | `TOP14-O21` | Parabol tiêu điểm/đường chuẩn | [#844](https://github.com/TMA2015/self-learning-math/pull/844) | `966f1a472372ffeb3af72f17a817cefcf5660271` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html` | MODEL_AUTHOR_SOURCE_READY_BROWSER_OPEN | — | C | Parabol tiêu điểm/đường chuẩn: nguồn #844 |
| CĐ15 | `SLM-TOP15-LINE-PLANE-R00` | `TOP15-O11` | Đường thẳng và mặt phẳng | [#846](https://github.com/TMA2015/self-learning-math/pull/846) | `cf6510d5d964958982fae3ebce5823e35aeac639` | `prototypes/thpt/content-drafts/topic15-spatial-parallelism/Temp_THPT_TOPIC15_LINE_PLANE_RELATION_R01_20261113.html` | MODEL_ID_AND_OUTCOME_PIN_VERIFIED_G2_G3_OPEN | — | C | Đường thẳng–mặt phẳng: nguồn #846 |
| CĐ16 | `SLM-TOP16-RAMP-ANGLE-R00` | `TOP16-O13,TOP16-O14` | Góc dốc/hình chiếu | [#848](https://github.com/TMA2015/self-learning-math/pull/848) | `931093557eb411b9f78286a92e6545dcbd59aa73` | `prototypes/thpt/content-drafts/topic16-perpendicularity/Temp_THPT_TOPIC16_RAMP_ANGLE_R01_SCOPE_CORRECTED_20261113.html` | MODEL_SOURCE_READY_STYLE_AUDIT_OPEN | — | C | Góc dốc/hình chiếu: nguồn #848 |
| CĐ17 | `SLM-TOP17-FRUSTUM-VOLUME-R00` | `TOP17-O10` | Khối và thể tích | [#853](https://github.com/TMA2015/self-learning-math/pull/853) | `cfb2bd522531167003eeae8e7342c6d1349ca425` | `prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_THPT_TOPIC17_FRUSTUM_VOLUME_MODEL_R00_20261113.html` | MODEL_ID_EMBEDDED_G0_PIN_VERIFIED_G2_G3_OPEN | — | C | Thể tích chóp cụt: nguồn #853 |
| CĐ18 | `SLM-TOP18-OXYZ-GEOMETRY-R00` | `TOP18-O07/O08/O15 (XYZ_PROJECTION); TOP18-O40/O23 (SPHERE_PLANE)` | Mặt phẳng/mặt cầu Oxyz | [#855](https://github.com/TMA2015/self-learning-math/pull/855) | `06a59b1624bf9eceef9722440acacfbac5969140` | `prototypes/thpt/content-drafts/topic18-oxyz/Temp_THPT_TOPIC18_OXYZ_SPHERE_GEOMETRY_R00_20261114.html` | MODEL_PLACEMENTS_VERIFIED_G2_G3_OPEN | 03 | B | Bổ sung hình chiếu Oxyz và cảnh khác ngoài mặt phẳng ngang |
| CĐ19 | `SLM-TOP19-COMBINATORICS-PASCAL-R00` | `TOP19-O01/O02 (đếm); TOP19-O05/O06/O07 (chọn/xếp); TOP19-O09 (Newton)` | Đếm chọn và Pascal | [#858](https://github.com/TMA2015/self-learning-math/pull/858) | `d68b220e5faadda774b7540606de3b024a472bd1` | `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114.html` | MODEL_PLACEMENTS_VERIFIED_G2_G3_OPEN | — | C | Quy tắc đếm, Pascal: nguồn #858 |
| CĐ20 | `SLM-TOP20-PROB-EVENTS-R00` | `TOP20-O11` | Hai biến cố | [#860](https://github.com/TMA2015/self-learning-math/pull/860) | `117237ff935fdef0f5ce7ad8ec99a664f5f980b6` | `prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_EVENTS_INTERACTIVE_WHITE_R00_20261114.html` | MODEL_PLACEMENT_VERIFIED_G2_G3_OPEN | 12 | A | Đối chiếu xúc xắc 6 kết quả và bốn miền; nguồn #860 lịch sử, đã đóng |
| CĐ21 | `SLM-TOP21-BAYES-TREE-R01` | `TOP21-O05,TOP21-O06,TOP21-O07,TOP21-O08` | Bayes/sơ đồ cây | [Draft mới](https://github.com/TMA2015/self-learning-math/pull/880) | `33632fdf8743b5526b925e8c9f393397bb04d943` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_TOPIC21_TOPIC22_SHARED_MATH_LAB_R01_20261117.html` | NEW_AUTHORING_CANDIDATE_BROWSER_OPEN | 13 | B | Bổ sung Bayes hậu nghiệm P(A\|B) |
| CĐ22 | `SLM-TOP22-DISTRIBUTION-R01` | `G10-B13-MEAN,G10-B13-MEDIAN,G10-B13-QUARTILES,G10-B14-RANGE_IQR,G10-B14-OUTLIERS` | Dữ liệu thô/ngoại lệ | [Draft mới](https://github.com/TMA2015/self-learning-math/pull/880) | `33632fdf8743b5526b925e8c9f393397bb04d943` | `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_TOPIC21_TOPIC22_SHARED_MATH_LAB_R01_20261117.html` | NEW_AUTHORING_CANDIDATE_BROWSER_OPEN | — | C | Biểu đồ chấm, tứ phân vị, IQR, ngoại lệ: nguồn #880 |

**G0 R02 và G2 CSS R02 — đối chiếu nguồn 17/11:** CĐ15 mô hình đặt ngay trong `TOP15-O11`; CĐ17 mô hình chóp cụt trong `TOP17-O10`, HTML #853 đã nhúng `MODEL_ID` và `OUTCOME` bằng thay đổi comment thuần metadata, blob `cfb2bd522531167003eeae8e7342c6d1349ca425` (sau CSS; commit nhúng ID trước đó `80ab23e69171461e8197e15bc99b08cdb04a7543`), không đổi công thức/mã. CĐ18 có **2 scene**, được đóng pin theo 2 comment `AUTHOR_INTERACTIVE_PLACEMENT` ở learner source; CĐ19 có **3 entry points** cùng một HTML, pin theo vị trí link nội dung đếm/chọn/Newton; CĐ20 link model nằm tại mục hợp/giao `TOP20-O11`. CĐ21/CĐ22 PR đúng là **#880** (không phải #844). `G0_REGISTRY_PINS_AND_EMBEDDED_IDS=22/22 VERIFIED` theo source metadata; **không biến G0 thành G1/G2/G3 PASS**. Chưa cấp verdict học thuật Q18 mới cho các mô hình.

## Golden-aligned Math Lab UI — mẫu vận hành cần đồng nhất

- **Font:** `system-ui, -apple-system, "Segoe UI", Arial, sans-serif`, base 16 px / line height 1.6; `h1` 1.3–1.7 rem tùy viewport, `h2` 1.1 rem, chữ giải thích 16 px. Không tự kéo font bằng canvas hoặc layout SVG; phần số văn bản phải vẫn đọc được.
- **Palette token:** nền trắng `#fff`, header `#eaf4fa`, mặt hình `#fafdff`, border `#c7dfe9`, chữ `#183b54`, muted `#50697b`, đồ thị `#1687b4`, highlight kiến thức `#218f73`, điểm tác động/cảnh báo `#e9922a`. Đây là chuẩn **AUTHORING presentation contract** kế thừa ưu tiên owner/PR #844; **không** phải Q19 hay phê duyệt CSS mới cho website.
- **Khoảng cách:** đơn vị 4/8/12/16/24 px, bo góc 8–16 px; nút ≥42 px cao, input range hit target ≥32 px, focus-visible rõ; bố cục 2 cột desktop → 1 cột mobile; khung SVG có scroll riêng nếu chiều rộng gây chữ quá nhỏ.
- **Nội dung một model:** tình huống **Dự đoán → Điều chỉnh → Quan sát → Giải thích → Vận dụng → Đối chiếu**; luôn có miền giá trị, điều kiện, thử biên, fallback chữ; mô hình không thay ví dụ/lý thuyết gốc. Các lời giải Vận dụng chỉ mở tự nguyện khi đang học, KHÔNG trong đề Tự kiểm tra.

## Cổng nghiệm thu có kiểm soát

1. **G0 · inventory/source lock:** mã duy nhất, source blob/branch đọc được, outcome/placement đúng, bảo vệ 22 học liệu source gốc. **R02 reconciliation: 22 entries, all exact learner placement mappings resolved and CĐ17 embedded MODEL_ID confirmed; G0 metadata source-lock VERIFIED, chưa nghiệm thu G1–G4.**
2. **G1 · học thuật/PED Q07/Q12/Q14/Q18:** kiểm công thức, điều kiện/ngoại lệ, đạo hàm/đồ thị/chính xác hình, trường hợp biên, ý nghĩa thực của điều khiển, lỗi và đường D6. 2 model mới có test số và static tác giả; **chưa có Q18 receipt bất biến đầy đủ**.
3. **G2 · Golden style parity:** **G2_SOURCE_TOKEN_ALIGNED = 22/22 candidates on 11 unique HTML source files**; all now append the same source-scoped 20261117 CSS token overlay, preserving JavaScript byte-exact and frozen math. Native inline Canvas/SVG drawing hues may still differ. **G2_VISUAL_SCREENSHOT_BROWSER = NOT_TESTED**, not full Golden visual PASS. No unjustified academic delta review for CSS-only edit.
4. **G3 · browser lab QA:** chạy thật Chromium tại 390/820/1440, bàn phím, touch, reset, screen reader/text fallback, offline/CDN blocked, console errors, no overflow, no clipped SVG/Canvas. **NOT_TESTED** trong gói này.
5. **G4 · handoff:** source/receipt/ID/place sửa đúng, một ghi chép kiểm toán model, không nói `CONTENT_READY` của model nếu G0–G3 chưa đóng. Chỉ sau đó mới cho RELEASE quyết định tích hợp và chạy AP1–AP5/R1–R5/iOS Safari/Final Submit trên HEAD.

## Hai mô hình mới · kiểm thử toán tĩnh trước khi tạo source

- CĐ21: `P(X)=0,3`, `P(lỗi|X)=0,02`, `P(lỗi|Y)=0,04` ⇒ `P(lỗi)=0,034`, `P(X|lỗi)=3/17≈0,17647`. Nếu hai nhánh lỗi đều 0 ⇒ `P(lỗi)=0`, hiển thị **không xác định**, không NaN/Infinity. Tiền đề `0<P(X)<1` được khóa slider [1,99]%. Kiểm cực trị và tính chuẩn hóa.
- CĐ22: dãy 2,2,3,4,5,5,20 ⇒ tổng 41; mean 41/7; Me 4; Q1 2; Q3 5; IQR 3; range 18; hàng rào trên 9,5. Với 7 giá trị trùng nhau phải hiển thị đủ 7 chấm không bị cắt; đã sửa nguồn R01 để đảm bảo y của chấm trên cùng vẫn nằm trong viewBox.

**Checkpoint R02:** `AUTHORING_MODEL_REGISTER_R02_CSS_DELTA` / `22_MODEL_CANDIDATE_SOURCES` / `G0_METADATA_RECONCILED` / `G2_CSS_TOKENS_22_OF_22` / `G1_MATH_PED_OPEN` / `G2_RENDER_OPEN` / `G3_BROWSER_OPEN` / `G4_HANDOFF_OPEN` / `NO_RELEASE` / `NO_MASTERY`. **Math Lab** hiện chỉ là tên/kiến trúc đề xuất cho thư viện tra cứu; thêm menu/route public thuộc RELEASE sau owner approval, không phải một trang học thứ tư hay hành trình học thứ ba.


## R03 · Q14 First Try / Disclosure correction (17/11/2026)

CĐ21 `SLM-TOP21-BAYES-TREE-R01` và CĐ22 `SLM-TOP22-DISTRIBUTION-R01` vẫn dùng **một** HTML nguồn chung, source blob của vòng R03 `5926ccb91237a9de4a18e8e21bab0204f05d31ac` trên Draft PR #880. Hai câu **Vận dụng · Tự thử trước** nay hiển thị trước nút `Đối chiếu sau khi tự thử`; đáp án mẫu nằm riêng trong disclosure tự mở. Đây là sửa **đúng hai vùng HTML trình bày** theo Q14/PED6, không thay JavaScript, công thức, số liệu, SVG, MODEL_ID hay vai trò `PUBLIC_DISCOVERY_NO_MASTERY`. R01/R02 SHA là bằng chứng lịch sử, không còn là SHA dùng để intake.

**Targeted source QA:** `FIRST_TRY_VISIBLE=2/2`, `SOLUTION_DISCLOSURE_OPTIONAL=2/2`, `JAVASCRIPT_BYTE_PARITY=PASS`. Không suy từ sửa này thành `G1_FULL_PASS`, `G2_VISUAL_PASS`, `G3_BROWSER_PASS` hoặc `G4_CONTENT_READY`. S1 gốc, QA mô hình từng outcome và browser tiếp tục OPEN.


## R04 · Q03/Q10 learner-facing copy correction (17/11/2026)

Hai mô hình CĐ21/CĐ22 tiếp tục dùng đúng **một** HTML nguồn như trước, source blob **hiện hành** `33632fdf8743b5526b925e8c9f393397bb04d943` (Draft #880). Bốn dòng giao diện thay mã kỹ thuật outcome/nguồn đánh giá bằng tên khái niệm dễ đọc và hướng dẫn khám phá/tự đối chiếu: không hiển thị `TOP21-O05`, `G10-B13-MEAN`, `RD1` hay `Mastery` cho học sinh. `MODEL_ID`/outcome canonical vẫn giữ trong registry và thuộc tính nguồn, không xóa metadata kiểm toán. Mạch Tự thử → mở Đối chiếu của R03 được giữ nguyên; không đổi JavaScript/công thức/SVG/đề hay đáp án. Đây là `DELTA_B_SOURCE_EQUIVALENT` đối với lời dẫn hiển thị, không cấp G1/G2/G3/G4 PASS toàn bộ.


<!-- I798_DEV_5MODELS_DELTA_READBACK_20261119 -->
### AUTHORING DEV DELTA 19/11/2026 — CĐ02, CĐ08, CĐ09, CĐ13, CĐ18 (không cấp MODEL FINAL PASS)

Năm file trong `selected/` được **chỉnh trực tiếp cùng đường dẫn** tại Draft PR #880, GitHub readback blob đều trùng SHA sau commit; 22 Topic MODEL_ID lịch sử và 25 mục tiêu không đổi. Thay đổi đều thuộc mô hình khám phá công khai, không phải học liệu SGK/Chuyên đề canonical, không cấp điểm/Mastery/Readiness.

| MODEL_ID | Git blob sau cập nhật (đã readback) | Delta | Cổng còn mở |
|---|---|---|---|
| `SLM-TOP02-QUADRATIC-01` | `25485efbf1a1abe6cf05ee839b76b1b37417ef66` | Tự thử trước đối chiếu dấu, nghiệm và tập nghiệm f(x)≤0; đánh dấu nghiệm trên Ox, co giãn trục y khi k thay đổi | Các cổng G1–G4 như trên |
| `SLM-TOP08-LIMIT-01` | `c2af3490c7010c1a1d0f64d4473e48a816cc9364` | Tự dự đoán trước đối chiếu hai giới hạn; chấm rỗng/đặc và co trục y khi b thay đổi | Các cổng G1–G4 như trên |
| `SLM-TOP09-TANGENT-01` | `c54cde631b8d3af36f7aed70d981481e3f1fdb63` | Đối chiếu sau tự dự đoán; độ lệch cát tuyến–tiếp tuyến và góc nghiêng đường tiếp tuyến; nhắc h khác 0 | S1 Q01/outcome Q02, G1 Academic/PED, G2 rendered Golden, G3 Chromium keyboard/responsive, G4 final handoff |
| `SLM-TOP13-DOT-01` | `d6f755311bc414c037ebdee895a7361aa249028e` | Hiện đoạn hình chiếu có hướng OH; tự thử trước đối chiếu; phân biệt hình chiếu có hướng/độ dài, vectơ 0 | Các cổng G1–G4 như trên |
| `SLM-TOP18-OXYZ-GEOMETRY-R00` | `bee54ac6ac6e0386023bc6a8c55944afe4761023` | Tự thử/đối chiếu tọa độ và mặt cầu; tiếp điểm nhìn thấy khi d=R; không tính căn âm khi d>R | Các cổng G1–G4 như trên |

**QA hiện có đúng phạm vi:** static/source-contract assertions PASS và 5/5 Git blob readback PASS. Oracle đại số độc lập chạy **5197/5197 bộ tham số**: CĐ02 475, CĐ08 533, CĐ09 2040, CĐ13 1332, CĐ18 817; 0 lỗi tính toán trong oracle. Đã thực thi JavaScript nguyên bản từ cả 5 HTML trên môi trường V8 có DOM/Canvas giả lập: **24/24 assertion theo ca biên PASS** (khởi tạo, input slider, nội dung kết quả, ẩn Đối chiếu, tiếp điểm d=R, nghiệm x²−k, giới hạn trái/phải, tiếp tuyến, hình chiếu). Đây là **synthetic runtime QA**, không phải Chromium/Playwright thực và không chứng nhận bố cục, thiết bị, bàn phím hay màn hình. Đã xác minh các công thức đối chiếu, miền dấu và trường hợp biên bằng toán độc lập, nhưng chưa đối chiếu trực tiếp SGK/SBT S1 và chưa chạy Playwright trên các bytes HTML đã sửa. **BROWSER_QA_PENDING / S1_SOURCE_RECEIPT_PENDING / G1_G4_OPEN / CONTENT_READY_NOT_CLAIMED**.

**Checkpoint:** CĐ21 giữ nguyên DEV Chromium 1153/1153 PASS theo blob cũ; CĐ02/CĐ08/CĐ09/CĐ13/CĐ18 có development delta chưa QA browser; 19 mô hình khác chưa QA sau khi tách. 24/25 mô hình vẫn chờ browser QA trên đúng snapshot selected. Tiếp tục hoàn thiện từng model trên cùng đường dẫn, không dùng tên file sửa nối đuôi phiên bản.

<!-- I798_AUTHORING_SIX_MODELS_OWNER_SCOPE_DEV_20261119 -->
### AUTHORING · MODEL QA THEO NGUYÊN TẮC OWNER: 6 HTML TIẾP THEO

Theo quy tắc owner ngay đầu sổ, **không** cần review từng trang SGK/SBT hay thủ tục học liệu V2/NotebookLM cho các HTML mô hình minh họa. Chỉ giữ tính đúng toán, hình/trực quan, tương tác và dễ dùng làm tiêu chí nghiệm thu Math Lab. Sáu file dưới đây đã chỉnh **đúng path selected có trước**, Git blob hậu thay đổi đã đọc lại, không nhân đôi MODEL_ID.

| Vị trí | Git blob hiện tại | Phần hoàn thiện |
|---|---|---|
| CĐ03 ngoại lai sau bình phương | `3d20ec5728b03e0580c39c6b4a2793105424ae9c` | Đồ thị chỉ rõ tại x=−1 hai vế khác nhau, x=2 giao điểm; điều kiện x≥0; đối chiếu tự mở |
| CĐ04 hàm mũ/log | `c5b555a04e7400e2161661d83eeb9f527763d367` | Đổi slider index 0–4 dễ gây nhầm thành **select 5 cơ số hợp lệ** 0,5/0,7/1,3/2/3; miền x>0, a>0, a≠1 |
| CĐ07 CSC/CSN | `ea71ddde65cb8c35ec9c050eadc9f2aa12e6f5bb` | Dãy số chỉ n nguyên, trường hợp r=1, quan hệ hai số hạng, vị trí vₙ vượt uₙ đầu tiên trong 10 số hạng được hiển thị |
| CĐ10 tối ưu hộp | `7938e4c1943dfb5d8cabbe5b930fb99033ea5266` | **Mới có SVG tấm vuông 12×12, bốn góc cắt và đáy thay đổi theo x** đồng bộ đồ thị V(x), điều kiện 0<x<6, giải thích cực đại |
| CĐ12 SSA | `910424f069e50e9d4dcfe068ed7680cad32cd138` | Bổ sung đường cao h=b sin30°, phân loại 0/1/2 tam giác, biên suy biến b=8 và tiếp xúc b=16 |
| CĐ14 parabol | `a9448b1aa754c9caadca0bd2e06fa2056f5f2ea2` | Đoạn MF/MD thật trong SVG-like canvas, suy luận MF=MD, trục y tự co theo p và tọa độ x |

**Source verification:** GitHub readback từng blob 6/6 đúng; source JS từ 6 HTML đã chạy trong V8 với mock DOM/Canvas, kiểm khởi tạo/chọn tham số/thông báo/biên/đối chiếu **26/26 assertion PASS**. Oracle toán độc lập **2295/2295** bộ (CĐ03 25; CĐ04 1000; CĐ07 990; CĐ10 59; CĐ12 65; CĐ14 156), không phát hiện sai số ở các mệnh đề kiểm. Đây KHÔNG phải Playwright/Chromium và KHÔNG chứng nhận thực tế hình ảnh, bàn phím, màn hình nhỏ hoặc hỗ trợ người dùng. **MODEL_PASS chưa cấp**, cần `MATH_CORRECT + VISUAL_TRUE + INTERACTION_PASS + USABLE_RESPONSIVE` trên snapshot cuối, sau đó chỉ khóa một SHA/receipt gọn trong sổ hiện hữu.

**Trạng thái lũy kế sau lượt này:** CĐ21 giữ `DEV_QA_CHROMIUM_1153/1153_PASS` lịch sử; CĐ02/03/04/07/08/09/10/12/13/14/18 = 11 mô hình có kiểm toán math + JS mock sau sửa, **chưa kiểm browser thực**; còn 13 mô hình source tách chưa QA. Tổng 25, không thêm mục; không đụng học liệu canonical/đề/RD1/Mastery/Firebase; không merge/deploy.

<!-- I798_AUTHORING_MATHLAB_BATCH_05_06_11_22_20261119 -->
### AUTHORING · BỔ SUNG CHỨNG CỨ 4 MÔ HÌNH (OWNER-SCOPED MODEL QA)

**Chỉ kiểm mô hình đúng học thuật, hình/trực quan, tương tác và dễ dùng.** Không đặt cổng SGK/SBT/NotebookLM/lesson-outcome hoặc handoff V2 cho HTML minh họa.

| Mô hình | SHA HTML hiện hành | Điều chỉnh nội dung chính |
|---|---|---|
| CĐ05 biến đổi đồ thị | `c8aeff24f0ec6ea2d0885e9ea1cc40209dc1c220` | Thay khung y cố định (đã cắt đồ thị) bằng trục y tự co giãn theo toàn bộ ba họ đồ thị, ổn định khi bật/tắt; đối chiếu `|f(−2)|` và `f(|−2|)` |
| CĐ06 đường tròn lượng giác | `2556c904e910138dc677ded0318e1c2f90e6b1b8` | Vẽ cung theo **góc dư có hướng**: −90° là quay thuận 90°, không phải cung +270°; vẫn giữ cùng tia cuối, bảng số vòng và sin/cos |
| CĐ11 tổng Riemann | `44f74146b7f6c8b6fcd906252096263882fac286` | Thêm sai số lý thuyết chính xác cho x²: left/right có hạng Δx và Δx², midpoint `−(b−a)Δx²/12`; không tuyên bố số sai giảm đơn điệu khi tăng n |
| CĐ22 phân phối | `b96b8f193d9e568c80eb2ae4bcb4818a4e562ded` | Thêm đường/chú giải TB và Me trực tiếp trên biểu đồ chấm; mô tả SVG động accessible; giữ quy tắc ngoại lệ 1,5×IQR và công thức Q1/Q3 n=7 |

**Test sau commit:** CĐ05/06/22 chạy JavaScript gốc trên V8 với DOM/Canvas/SVG giả lập, thử trạng thái khởi tạo, tham số, nhãn, reset; CĐ11 chạy **riêng math core từ đúng thẻ script của HTML** và kiểm công thức UI bằng đối chiếu source (UI mount thật chưa test). **23/23 kiểm tra mã nguồn/mock PASS**. Oracle/toán độc lập: CĐ05 1.331 bộ hệ số, CĐ06 1.441 góc nguyên, CĐ22 5.000 dãy dữ liệu = **7.772/7.772 PASS**; CĐ11 dùng trực tiếp math core **1.638/1.638 bộ**, max sai khác số học với công thức đóng `7,11×10⁻¹⁵`. Các số liệu này **không** là Chromium thực, screenshot, usability hoặc Final MODEL_PASS.

**Tổng chương trình:** 25 HTML selected; **25/25** đã có tối thiểu QA phát triển gắn nguồn (**CĐ21: Chromium DEV source cũ; 24 file còn lại: kiểm nguồn/toán/V8 ở mức khác nhau**), **0** file đang ở trạng thái candidate chưa QA sau khi tách; **0 Final MODEL_PASS** được cấp cho snapshot vì chưa đủ bằng chứng QA tương tác/hiển thị thật. `MODEL_PASS` vẫn chưa cấp theo tiêu chí nghiệm thu owner vì chưa có kiểm duyệt thực tế hình ảnh và tương tác của các snapshot liên quan. Không thay source/handoff học liệu SGK, Golden site, đáp án/RD1, Firebase, Mastery, không merge/deploy.

<!-- I798_AUTHORING_TRIG_COMPANION_THREE_20261119 -->
### AUTHORING · KIỂM TOÁN 3 MÔ HÌNH BỔ TRỢ LƯỢNG GIÁC TOÁN 11

Ba HTML bổ trợ giữ **đúng các slot 23–25 trong danh sách 25**; không thêm loại mô hình, không thay nội dung bài học SGK.

| Slot | Blob hiện tại | Kết quả |
|---|---|---|
| 23: SGK11 B03 sin/cos | `33a9b11463db77d2136ec78873f527dc1eb95759` | **Đã QA nguồn hiện hữu, không sửa file**. Thử nghiệm chu kỳ 360°, trục chính xác, nút ±360° vô hiệu ở cận và kiểm lỗi góc ngoài phạm vi; V8 mock **7/7** |
| 24: SGK11 B03 tan/cot | `da207f8491e0eeebff8b304579aadfe0f9b6ded2` | **Đã QA nguồn hiện hữu, không sửa file**. Kiểm tiệm cận, không xác định, chu kỳ π trên miền xác định, nút ±180° ở biên và thống kê nhánh; V8 mock **7/7** |
| 25: SGK11 B04 phương trình lượng giác | `05061a9bb5100249d210879e9e21a5e712294d51` | **Đã sửa đúng file selected** lỗi ép đường `y=m` vào mép hình khi |m| lớn; trục y nay mở theo m, có chấm nghiệm đúng. V8 mock **13/13** kiểm sin ±1, |m|>1, cận mở/đóng, tan/cot m=20 và mode |

**27/27 assertion V8 + DOM/Canvas giả lập PASS** trên đúng JS/HTML nguồn (bao gồm 3 source readback); không phải Chromium renderer thực, chưa đủ bằng chứng tương tác/phím/responsive để cấp `MODEL_PASS`. Không cần SGK/SBT theo trang, NotebookLM hay full outcome matrix cho các minh họa này. Tổng: **19/25 có DEV QA bất kỳ; 6/25 còn candidate chưa QA**, **chưa mô hình nào được cấp Final MODEL_PASS**. Không merge/deploy.

<!-- I798_AUTHORING_LAST_SIX_DEVQA_20261119 -->
### AUTHORING · QA PHÁT TRIỂN ĐỦ 25/25 NGUỒN ỨNG VIÊN · KHÔNG PHẢI FINAL PASS

**Sáu file chưa có QA sau tách** đã được xem và chạy chính nguồn JS trên V8 với DOM/Canvas/SVG giả lập; **34/34 assertion PASS** sau khi hiệu chỉnh bộ mock cho property `input.value` (DOM thực luôn string). Các ca gồm:

- **CĐ01**, blob `ab4858c9285237be472393b34715810407452459`: bảng chân trị đủ bốn tổ hợp p/q, phép kéo theo chỉ sai ở p đúng/q sai, reset; **chỉnh chú giải cho đúng bảng thay vì ghi “Đường chính”** (7/7).
- **CĐ15**, blob `1f289ca00c3edba83abe722f0db8e2e15cf6cc8f`: `tanα=0` phân biệt đường nằm trong/đường song song mặt phẳng; góc khác 0 tính điểm giao đúng và dấu h; mã không cần sửa (5/5).
- **CĐ16**, blob `58373c20fa2155a5b9fc67af8270df799fc84d60`: 3–4–5, khi h=r=0 đoạn suy biến, khi r=0/h>0 góc 90° và tan không xác định, h=0 đường nằm trong nền; mã không cần sửa (5/5).
- **CĐ17**, blob `921e8af63394878904c3f1fed8c914d8ff92fcd1`: thể tích chóp cụt đúng ở k=0 chóp, k=1 lăng trụ, k=.5 bằng 84 cm³ trong ví dụ; **chỉnh phát biểu biên và biểu thức tỷ lệ V/(Sh)=(1+k+k²)/3** (5/5).
- **CĐ19**, blob `f467a3b775bb2a5a3cdf8d6e16dbc38f99e3ae92`: cộng, nhân, chỉnh hợp, tổ hợp, Pascal và reset theo các tham số; mã không cần sửa (5/5).
- **CĐ20**, blob `086ecc628d226a3580b733bfb5e5416163d83a0b`: 4 miền Ω, tính P(A∪B), độc lập `|A∩B|·N=|A|·|B|`, xung khắc và trường hợp P(A)=0, từ chối N=0/số âm; mã không cần sửa (7/7).

**Oracle toán độc lập:** CĐ15 493 bộ, CĐ16 441 bộ, CĐ17 2.268 bộ, CĐ19 66 bộ, CĐ20 3.000 bộ = **6.268/6.268 PASS**. Chỉ chứng minh logic và trường hợp biên đã kiểm, không chứng minh màn hình Chromium, thao tác phím hay mobile. Giữ SHA của 4 file không sửa; đổi SHA **chỉ** CĐ01/CĐ17. Sau này chỉ cấp `MODEL_PASS` khi kiểm trực tiếp `MATH_CORRECT`, `VISUAL_TRUE`, `INTERACTION_PASS`, `USABLE_RESPONSIVE` trên exact SHA. Không đòi SGK/SBT theo trang, NotebookLM hay Q01–Q18 handoff kiểu học liệu cho mô hình minh họa.

**Khóa trạng thái hiện hành:** 25 model selected; **25/25 DEV_QA** ở mức khác nhau; **0/25 Final MODEL_PASS** được chứng nhận từ những kiểm tra này; không tự chuyển website/RELEASE.

<!-- I798_OWNER_SCOPED_TOP05_EXACT_CHROMIUM_QA_20261119 -->
### CHROMIUM THỰC · MODEL CĐ05 · CHỐT DEV QA THEO EXACT SOURCE

**Model:** `SLM-TOP05-GRAPH-01` · Chỉ cập nhật file `selected/SLM-TOP05-GRAPH-01.html` (không nhân bản) · Source blob Git SHA **`bf564b03dce50a984a3b88a04f87efc06bf4f6b0`** đã đối chiếu bằng thuật toán Git blob SHA-1 trên **chính file HTML dùng trong Playwright**, đúng từng byte so với SHA của GitHub. Source cũ trước mobile fix: `c8aeff24f0ec6ea2d0885e9ea1cc40209dc1c220`.

**Lỗi thực trên ảnh Chromium (đã sửa):** CSS mobile `@media(max-width:540px)` trước sửa vẫn đặt ba slider hệ số trên một hàng, làm nhãn/điều khiển chật trên màn hình 390px. Đã chuyển `.controls{grid-template-columns:1fr;gap:10px}` và tăng vùng thao tác slider. Chỉ thay CSS, giữ nội dung toán và JavaScript.

**Bằng chứng trên snapshot mới, Chromium headless 144.0.7559.96:** Playwright `page.set_content(exact_html)` vì quyền file:// bị chặn trong máy kiểm; vẫn dùng **nguyên full HTML/CSS/JS**, có exact SHA. Kiểm bốn viewport **320 / 390 / 768 / 1280 CSS px**, mỗi viewport **13/13 assertions**, tổng **52/52 PASS**: số cột đúng theo breakpoint, không tràn ngang, slider có kích thước dùng được, canvas khởi tạo/vẽ lại, `|f(−2)|=15` khác `f(|−2|)=−1` khi a=1,b=−4,c=3, trường hợp hàm hằng a=b=0, reset, phím mũi tên, không có JavaScript exception. Có screenshot trên desktop/mobile được nhìn kiểm trực tiếp. Bản QA trước sửa cũng đã có 20/20 Chromium interactions, nhưng lỗi responsive **không được bỏ qua**.

**Toán học:** oracle trước đó **1.331/1.331** bộ hệ số CĐ05, công thức f(x), `|f(x)|`, `f(|x|)`, trục y thích nghi; thay mới chỉ CSS nên không làm đổi toán. Theo owner-scoped 4 tiêu chí: `MATH_CORRECT`, `VISUAL_TRUE`, `INTERACTION_PASS`, `USABLE_RESPONSIVE` đều có QA AUTHORING trên SHA này. Kết luận **`AUTHORING_MODEL_QA_PASS_CHROMIUM_52_52`** (kỹ thuật, chờ chủ dự án xác nhận nghiệm thu cuối nếu yêu cầu); **không có nghĩa model đã tích hợp website, RELEASE PASS hoặc trang SGK/Chuyên đề CONTENT_READY**.

**Tổng 25:** 25/25 đã có DEV_QA ở mức độ khác nhau; **CĐ05 là 1 snapshot có Chromium source-locked QA mới**; CĐ21 có historical Chromium DEV 1153/1153 ở SHA cũ nhưng chưa được chủ dự án chốt Final; 23 model khác chưa có browser QA exact snapshot được xác minh ở lượt này. **Không tự tăng Final MODEL_PASS.** Không kiểm trang SGK/SBT hay NotebookLM cho từng mô hình.

<!-- I798_OWNER_SCOPED_TOP22_EXACT_CHROMIUM_QA_20261119 -->
### CHROMIUM THỰC · MODEL CĐ22 · RESPONSIVE OUTLIER / 19.11.2026

**Canonical model:** `SLM-TOP22-DISTRIBUTION-R01`, `selected/SLM-TOP22-DISTRIBUTION-R01.html`. Git blob **`42da41a6fb299c74990bd09abc082530ba738ab1`** đã đối chiếu bằng Git blob SHA-1 trên bytes của **toàn bộ HTML/CSS/JS chạy trong Playwright Chromium 144.0.7559.96**; nguồn trước sửa `b96b8f193d9e568c80eb2ae4bcb4818a4e562ded`. Chỉ thay **1 file selected** hiện hữu, không tạo file model mới.

**Lỗi UI thật phát hiện bằng screenshot:** SVG biểu đồ chấm có `min-width:600px` nằm trong cột hẹp. Khi bật preset ngoại lệ 20, điểm cam tại x=20 nằm **ngoài vùng nhìn thấy cả ở desktop 1280px và mobile**, dù số liệu trong văn bản đúng. Đây là lỗi `VISUAL_TRUE / USABLE_RESPONSIVE`, không phải sai công thức. **Đã sửa:** viewBox/trục 1–20/tick/chấm/đường mean–median co giãn theo bề ngang cột; trên màn hình nhỏ chỉ gắn nhãn tick chọn lọc, luôn nhìn được x=20, không cần cuộn ngang; slider có chiều cao thao tác tối thiểu 44px; redraw trên resize; giữ đúng thuật toán Q1/Q3/ngoại lệ 1.5×IQR.

**QA sau sửa:** 320, 390, 768, 1280 CSS px × `18` UI/math/interaction assertions = **72/72 PASS** (đúng mean 3.86→5.86, median 4, Q1/Q3/IQR, outlier 20, tất cả cùng giá trị, key ArrowRight, reset, ARIA dynamic, no JS exception); × `6` geometric/visibility assertions = **24/24 PASS** (điểm ngoại lệ nằm trọn trong SVG, tick 20 có trên trục, không cuộn ngang bên trong SVG, marker mean > median, trục không vượt viewBox, no exceptions). Tổng **96/96 PASS** trên exact SHA mới, ảnh before/after đã chụp desktop/mobile; bằng chứng được đóng gói tại conversation `Temp_I798_TOP22_Chromium_Evidence_20261119.zip`.

**Kết luận duy nhất cho mô hình này:** `AUTHORING_MODEL_QA_PASS_CHROMIUM_96_96 / OWNER_FINAL_SIGNOFF_PENDING`. **Không cấp tự động `Final MODEL_PASS`**, không suy diễn sang 23 model khác, không tự tích hợp website hoặc merge/deploy. Chỉ bốn tiêu chí Math Lab owner, không buộc đối chiếu trang SGK/SBT hay NotebookLM.


<!-- I798_OWNER_SCOPED_TOP06_EXACT_CHROMIUM_QA_20261119 -->
### CHROMIUM THỰC · MODEL CĐ06 · QUAY GÓC ÂM/ẢNH MOBILE · 19.11.2026

**Canonical model:** `SLM-TOP06-UNIT-CIRCLE-01`, selected HTML blob `2556c904e910138dc677ded0318e1c2f90e6b1b8`. Không có sửa nguồn sau kiểm Chromium; đã đọc lại GitHub và tính Git blob SHA-1 của toàn bộ HTML/CSS/JS test trong Playwright trùng 100%.

**Chromium 144.0.7559.96** dùng nguyên HTML nguồn và viewport 320/390/768/1280. `17` controls/academic/keyboard/responsive tests × 4 = **68/68 PASS** (150°, −90°, −150°, 450°, −720°/720°, input invalid, sin/cos/tan/cot, marker, resize, không có JS exceptions). Cộng thêm kiểm bằng `CanvasRenderingContext2D.arc` thực tế `6` assertions × 4 = **24/24 PASS**: góc **−90° là cung thuận 90°**, góc +270° là cung ngược 270°, −450°/+450° giữ dấu góc dư và số vòng; hai góc cùng tia cuối có sin/cos đúng. Tổng **92/92 PASS** trên exact SHA; screenshot desktop/mobile đã review.

**Trạng thái:** `AUTHORING_MODEL_QA_PASS_CHROMIUM_92_92 / OWNER_FINAL_SIGNOFF_PENDING` cho riêng CĐ06, **không** tự cấp Final MODEL_PASS hoặc kéo sang SGK học liệu. Bằng chứng hội thoại `Temp_I798_TOP06_Chromium_Evidence_20261119.zip` (Markdown + JSON + 4 screenshots). Không sửa file selected, không merge/deploy hoặc thay dữ liệu học viên, không kích hoạt NotebookLM/SGK trang in.

<!-- I798_AUTHORING_MATHLAB_25_EXACT_CHROMIUM_1000_20261119 -->
### AUTHORING Math Lab · 25/25 SOURCE-LOCKED CHROMIUM QA · 19/11/2026

**Bằng chứng CI hoàn tất**: workflow riêng `Math Lab Authoring Chromium QA (NO DEPLOY)`, [run 44544713767](https://github.com/TMA2015/self-learning-math/actions/runs/44544713767), trên commit **`0cafe37e5b985102c510f4917ec4749ec7935263`**, kết luận `success`. Workflow `.github/workflows/math-lab-authoring-chromium.yml`; runner `qa/mathlab_chromium_all25.py` ở cùng thư mục Draft.

- **25/25 file canonical** trong `selected/` được băm theo Git blob SHA-1 từ nguyên byte, tất cả **khớp** bản ghi trong register (đã kiểm hai lượt qua GitHub connector).
- **Chromium 141.0.7390.37 trên Ubuntu 24.04**: mỗi model chạy **320, 390, 768, 1280 CSS px**, tổng **100 phiên UI/viewport**; **1.000/1.000 assertions PASS**, không JS pageerror, không tràn ngang hoặc control ngoài viewport trong các ca đã thử. Mọi mô hình có heading, control hoạt động, đồ thị Canvas/SVG có kích thước hợp lệ; **đổi điều khiển phải đổi text hoặc Canvas/SVG sau khi render** (vòng CI thứ nhất 900/900, sau đó siết điều kiện mới thành 1000/1000).
- **CĐ21 Bayes** chỉ dùng input number và preset, không có slider. Đã sửa **QA harness** để thật sự thay đổi input `pA` 30→100 và thêm invariant 4 lá = 100%, xử lý `P(lỗi)=0`; **không sửa** model CĐ21.
- Artifact GitHub run `Temp_MathLab_25_Chromium_Evidence` (`artifact_id=14541240412`) có **50 screenshot PNG 390/1280px + JSON test report**; các contact sheet đã xem chung và spot-check riêng ảnh của CĐ11, CĐ12, CĐ17, CĐ21, SGK11 B04. Không thấy blocker cấu trúc/phản ánh bản chất trong các ảnh đã xem; đây là **QA Chromium headless/responsive emulation**, **không tự xưng QA thiết bị vật lý**.
- **CĐ05 52/52**, **CĐ06 92/92**, **CĐ22 96/96** là những mô hình có thêm bộ kiểm chuyên biệt từ lượt trước; 22 mô hình khác có batch Chromium nghiêm ngặt, cùng các test toán/V8 phát triển đã ghi ở các checkpoint trước. Không đồng nhất baseline tự động với kiểm duyệt toán độc lập toàn diện từng bài.
- **Kết luận kỹ thuật:** `AUTHORING_TECH_QA_25_OF_25_PASS` trên SHA nêu trên. **Final MODEL_PASS do chủ dự án xác nhận vẫn `OWNER_FINAL_SIGNOFF_PENDING`**; `0/25` tự gắn nhãn Final, không tự tích hợp website. Các failure của workflow `Roadmap PR Quality` và `Scoped SGK Lesson Release QA` thuộc cổng phát hành/handoff khác, **không được quy về lỗi toán của 25 Math Lab**.

**Không tự thêm gói SGK/SBT/NotebookLM/Q01–Q18/handoff V2 vào phạm vi mô hình minh họa**, không thay Golden website, dữ liệu học sinh, Q16/RD1 hoặc Mastery; không merge/deploy.


<!-- I798_AUTHORING_MATHLAB_DEEP_SEMANTIC_CHROMIUM_1100_20261119 -->
### REVIEW-CLOSE AUTHORING: CHROMIUM SOURCE-LOCKED + 25 PHÉP ĐỐI CHIẾU TOÁN · 19.11.2026

**Run chính thức:** [GitHub Actions Math Lab Authoring Chromium #44548613225](https://github.com/TMA2015/self-learning-math/actions/runs/44548613225) · **SUCCESS** trên HEAD **`ed8048b02c987524a1195d816c2e08d440975e28`** · runner `prototypes/thpt/content-drafts/interactive-models/qa/mathlab_chromium_all25.py` blob `8323b0eae22f32efdfd896084eebbc33e798fdbc`. Trình duyệt Chromium Headless Shell 141.0.7390.37, Playwright 1.56.0.

**Kết quả JSON/artifact kiểm chứng độc lập:** 25/25 selected HTML SHA Git blob khớp register, 100/100 phiên Chromium (320, 390, 768, 1280 CSS px × 25), **1.100/1.100 assertions PASS** gồm 1.000/1.000 checks giao diện/chức năng và **100/100 kiểm toán học ngữ nghĩa** (25 model × 4 viewport). 0 failed assertion, 0 JS pageerror, 0 HOLD, 50 ảnh chụp 390/1280px. Artifact **`Temp_MathLab_25_Chromium_Evidence`**, GitHub artifact id **`14543540542`**, 51 file (50 screenshot + JSON); ZIP checksum SHA256 khi tải: `099e6e18000f26b0e0d3be2c7fb8ff727c7f6c3866d5b4b549e7909e0da4ad84` (checksum của ZIP tải từ connector, không phải canonical source SHA).

**Ý nghĩa kiểm toán học:** từng slot 01–25 phải vượt qua ca kiểm độc lập/biên cụ thể: mệnh đề kéo theo; dấu tam thức; nghiệm ngoại lai; tăng/giảm mũ-log; f(|x|)/|f(x)|; góc âm lượng giác; CSC/CSN; giới hạn một bên; đạo hàm tiếp tuyến; thể tích hộp; sai số tổng Riemann; SSA 0/1/2 nghiệm; vuông góc tích vô hướng; parabol tiêu điểm-đường chuẩn; giao tuyến đường/mặt; đoạn dốc 0/90°/tam giác 3-4-5; chóp/lăng trụ k=0/1; mặt cầu cắt/tiếp xúc/rời; phép cộng/chọn/chỉnh hợp; hai biến cố độc lập/xung khắc; Bayes tổng bốn lá + xác suất điều kiện 0; ngoại lệ 20 nhìn thấy; sin/cos chu kỳ 2π; tan/cot cực không xác định; phương trình lượng giác miền nghiệm nửa mở. Đây là **test ngữ nghĩa cho ca kiểm cụ thể**, không tuyên bố chứng minh toàn diện mọi giá trị/thao tác hoặc QA thiết bị thật.

**Lịch sử minh bạch:** run trung gian [#44547527926](https://github.com/TMA2015/self-learning-math/actions/runs/44547527926) thất bại 24 PASS / 1 HOLD ở kiểm CĐ09 do harness chỉ phát sự kiện `change` trong khi mã nguồn lắng nghe `input`. Đã sửa harness để phát **cả `input` và `change`**, mô phỏng thao tác người dùng thực; **không chỉnh bất kỳ HTML canonical nào trong vòng này**. Run mới đã PASS tất cả 25, đúng SHA.

**Verdict AUTHORING kỹ thuật:** `AUTHORING_TECH_QA_25_OF_25_PASS + SEMANTIC_1100_1100_PASS`. Giữ **`OWNER_FINAL_SIGNOFF_PENDING`** cho cả 25; Final MODEL_PASS chưa tự cấp. Thẩm quyền chủ dự án xác nhận nghiệm thu/khóa final snapshot. Gói mô hình chỉ là minh họa bổ trợ, không biến thành nguồn học liệu SGK đã CONTENT_READY; không tạo chuẩn học thuật riêng, không bắt kiểm trang SGK/SBT/NotebookLM. Không tự tích hợp website, merge/deploy, không ghi Mastery hoặc dữ liệu học sinh.


<!-- I798_OWNER_ACCEPTED_MODEL_PASS_25_OF_25_20261119 -->
### QUYẾT ĐỊNH CHỦ DỰ ÁN · 19/11/2026 · 25/25 MODEL_PASS Ở NHÁNH AUTHORING

**Owner decision verbatim:** “Nếu bạn kiểm tra đạt thì tôi sẽ coi nó là đạt.” Sau khi xác minh trên GitHub Workflow [Math Lab Authoring Chromium QA #44548613225](https://github.com/TMA2015/self-learning-math/actions/runs/44548613225) SUCCESS (25/25 canonical HTML exact blob SHA, 100/100 Chromium sessions 320/390/768/1280, 1.100/1.100 assertions PASS, gồm 100 kiểm toán học ngữ nghĩa; không JS exceptions), chủ dự án **chấp nhận kết quả kiểm tra làm nghiệm thu mô hình**. Đây là quyết định owner về *mô hình bổ trợ* theo bốn tiêu chí chính xác toán / trung thực trực quan / tương tác / responsive, không áp NotebookLM SGK học liệu.

**Chốt 25 slots ở bảng trên:** `OWNER_ACCEPTED_MODEL_PASS_20261119` cho 22 mô hình CĐ01–CĐ22 và 3 mô hình SGK G11. Giữ nguyên đúng 25 đường dẫn `selected/<MODEL_ID>.html`, source/blob SHA đã QA; không tạo phiên bản song song, không đổi nội dung toán, assessment, CSS/JS hoặc source canonical. PR #880 còn **Draft OPEN, unmerged**. Receipt này có hiệu lực *sau* các đoạn lịch sử “0/25 Final MODEL_PASS / owner pending” ở phía trên; chúng là checkpoint trước owner decision và không được suy ngược về hiện tại.

**Phạm vi bàn giao:** `MATH_LAB_25_MODEL_AUTHORING_COMPLETE / OWNER_ACCEPTED / READY_FOR_RELEASE_INTAKE`. Đây **không phải** `RELEASE_QA_PASS`, `TOPIC_RUNTIME_INTEGRATED` hoặc `PRODUCTION_DEPLOYED`. Nhánh RELEASE tiếp nhận mã nguồn theo đúng SHA, ánh xạ 22 vị trí Topic +3 SGK, đối chiếu catalog/placement và Golden, browser/device/AP1–AP5/R1–R5/P1/P2 sau tích hợp; chỉ merge/deploy khi có phê duyệt thực thi riêng của chủ dự án. Không đánh đồng 25 mô hình với 22 gói học liệu Topic CONTENT_READY, không đưa private RD1, không ghi điểm/Skill Mastery.

**No-change guard:** Quyết định nghiệm thu là metadata/trạng thái AUTHORING, không sửa dữ liệu học sinh, không release và không thay đổi chính mô hình đã được xác nhận.
