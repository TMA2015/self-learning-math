<!-- I798_UNIFIED_22_MODEL_PROGRAM_20261119 -->
<!-- I798_OWNER_FINAL_COUNT_25_20261119 -->
<!-- I798_LOCKED_25_INVENTORY_PER_MODEL_20261119 -->
<!-- I798_SELECTED_25_CANONICAL_PATHS_20261119 -->
### 25 FILE ỨNG VIÊN HIỆN HÀNH — DUY NHẤT `selected/`

**25/25 HTML vật lý đã ghi vào Draft PR #880**, tại `prototypes/thpt/content-drafts/interactive-models/selected/`. Cột trạng thái của từng dòng trong bảng dưới chứa **đường dẫn cùng blob SHA thực tế**. Chỉ sửa đúng file này qua các lượt, không phát sinh `_Rxx`/second-final. **CĐ21** đã tích hợp công thức Bayes hậu nghiệm + bốn lá từ donor #13, kiểm thử **1153/1153 Chromium PASS** theo exact source SHA; chưa có review độc lập G1/G2/G4. **24 file còn lại** là ứng viên nguồn đã tách/đặt chỗ, **chưa QA bản mới sau tách**. Bảy donor mới không làm nền nằm trong [`reference/`](./reference/README.md) và Library ZIP, không có HTML tham khảo lẫn trong `selected/`.


<!-- I798_DEV_BASE_SELECTION_25_R01_20261119 -->
### QUYẾT ĐỊNH CHỌN NỀN PHÁT TRIỂN — R01 (19/11/2026)

**25/25 mô hình đã được CHỌN MÃ NỀN** để phát triển tiếp, có căn cứ mã nguồn thực và source SHA; **không phải 25/25 mô hình đã hoàn thiện/được QA G1–G4**. Quy ước nguồn `OLD_*` và `NEW_NN` cùng báo cáo toán và phần bù bắt buộc được khóa tại [biên bản chọn nguồn có SHA](../../review-packets/Temp_I798_DEV_BASE_SOURCE_SELECTION_25_R01_20261119.md). Đúng **19 nguồn cũ làm nền cho Chuyên đề + 3 HTML mới làm nền cho Chuyên đề + 3 HTML mới cho SGK**, tổng 25 mục. 13 HTML mới được bảo toàn (6 làm nền, 7 làm nguồn bổ sung), không tự tạo bản thứ 26. Chốt nguồn cuối/receipt QA **sau khi** hoàn thiện từng mô hình.

## SỔ KHÓA 25 MÔ HÌNH ĐƯỢC CHỌN — PHẠM VI GIAI ĐOẠN 1 (19/11/2026)

**Quyết định chủ dự án:** Math Lab **trước mắt dự kiến đúng 25 mục tiêu mô hình**. Danh sách bên dưới là 25 **loại mô hình đã chọn để hoàn thiện**, không phải lời chứng nhận 25 mô hình đã qua G1–G4 hay đang chạy trên website. **Chỉ tăng số lượng sau khi chủ dự án duyệt đề xuất bổ sung.** Danh sách 22 MODEL_ID/Outcome/PR/source SHA chi tiết phía dưới **vẫn là nguồn canonical** cho Chuyên đề; 3 khóa `SLM-SGK-...` là **khóa theo dõi tài nguyên bổ trợ** (không phải MODEL_ID canonical của Chuyên đề, không phải ITEM_ID).

| STT | Nơi phục vụ | Mã nguồn/khóa theo dõi | Loại mô hình được chọn | HTML mới liên hệ | Quyết định nguồn & tiến độ |
|---|---|---|---|---|---|
| 01 | CĐ01 | `SLM-TOP01-TRUTH-01` | Mô hình chân trị | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP01-TRUTH-01.html) · `84d4d63b319fb0a06229e3bc9ca228279b750587` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 02 | CĐ02 | `SLM-TOP02-QUADRATIC-01` | Dấu tam thức | `#02` + `#05` | **DEV_BASE_SELECTED**: `OLD_S`; donor: `NEW_02 (và phần parabol NEW_05 nếu phù hợp)`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP02-QUADRATIC-01.html) · `25485efbf1a1abe6cf05ee839b76b1b37417ef66` · **DEV_DELTA_STATIC_QA_PASS / BROWSER_AND_G1_G4_PENDING** |
| 03 | CĐ03 | `SLM-TOP03-SQUARING-01` | Bình phương và nghiệm ngoại lai | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP03-SQUARING-01.html) · `f32e876a6f0f75b1b64d44e521935d2d94be0c60` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 04 | CĐ04 | `SLM-TOP04-EXPLOG-01` | Hàm mũ/lôgarit ngược nhau | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP04-EXPLOG-01.html) · `9ab31faa2987f9161c134417c3d3cde398f76b80` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 05 | CĐ05 | `SLM-TOP05-GRAPH-01` | Biến đổi đồ thị | `#05` | **DEV_BASE_SELECTED**: `OLD_G`; donor: `NEW_05`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP05-GRAPH-01.html) · `65ce1002d913251c380ee6597241c3012f29f445` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 06 | CĐ06 | `SLM-TOP06-UNIT-CIRCLE-01` | Đường tròn lượng giác | `#07` | **DEV_BASE_SELECTED**: `NEW_07`; donor: `OLD_S (liên hệ đồ thị sin)`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP06-UNIT-CIRCLE-01.html) · `eec1ac5126279e22022f74655bea02e72c7b8779` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 07 | CĐ07 | `SLM-TOP07-SEQUENCE-01` | CSC và CSN | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP07-SEQUENCE-01.html) · `520974105030c67287cc16a74d7edfd1c02bb4e1` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 08 | CĐ08 | `SLM-TOP08-LIMIT-01` | Giới hạn trái/phải | `#04` | **DEV_BASE_SELECTED**: `OLD_S`; donor: `NEW_04`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP08-LIMIT-01.html) · `c2af3490c7010c1a1d0f64d4473e48a816cc9364` · **DEV_DELTA_STATIC_QA_PASS / BROWSER_AND_G1_G4_PENDING** |
| 09 | CĐ09 | `SLM-TOP09-TANGENT-01` | Cát tuyến đến tiếp tuyến | `#11` | **DEV_BASE_SELECTED**: `OLD_D`; donor: `NEW_11`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP09-TANGENT-01.html) · `c54cde631b8d3af36f7aed70d981481e3f1fdb63` · **DEV_DELTA_STATIC_QA_PASS / BROWSER_AND_G1_G4_PENDING** |
| 10 | CĐ10 | `SLM-TOP10-BOX-01` | Tối ưu thể tích hộp | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP10-BOX-01.html) · `4071ed429bf6287aee8f442108b988048d93eb66` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 11 | CĐ11 | `SLM-TOP11-RIEMANN-01` | Tổng Riemann | `#06` | **DEV_BASE_SELECTED**: `NEW_06`; donor: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP11-RIEMANN-01.html) · `ab4fe436cfdc36e75e399062e830cf91e2068c08` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 12 | CĐ12 | `SLM-TOP12-SSA-01` | Mơ hồ SSA | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP12-SSA-01.html) · `3b961ad93f9db3b02cf4233cfe7337ed051e94b5` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 13 | CĐ13 | `SLM-TOP13-DOT-01` | Tích vô hướng/hình chiếu | `#01` | **DEV_BASE_SELECTED**: `OLD_V`; donor: `NEW_01`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP13-DOT-01.html) · `d6f755311bc414c037ebdee895a7361aa249028e` · **DEV_DELTA_STATIC_QA_PASS / BROWSER_AND_G1_G4_PENDING** |
| 14 | CĐ14 | `SLM-TOP14-PARABOLA-01` | Parabol tiêu điểm/đường chuẩn | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_S`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP14-PARABOLA-01.html) · `636887b48f474513e6cca95a71d9878c2aa1fb45` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 15 | CĐ15 | `SLM-TOP15-LINE-PLANE-R00` | Đường thẳng và mặt phẳng | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_LP`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP15-LINE-PLANE-R00.html) · `1f289ca00c3edba83abe722f0db8e2e15cf6cc8f` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 16 | CĐ16 | `SLM-TOP16-RAMP-ANGLE-R00` | Góc dốc/hình chiếu | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_RA`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP16-RAMP-ANGLE-R00.html) · `58373c20fa2155a5b9fc67af8270df799fc84d60` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 17 | CĐ17 | `SLM-TOP17-FRUSTUM-VOLUME-R00` | Khối và thể tích | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_FR`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP17-FRUSTUM-VOLUME-R00.html) · `f0b7495f9c8f8b8cb0b46921e0fb5633540c5cf6` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 18 | CĐ18 | `SLM-TOP18-OXYZ-GEOMETRY-R00` | Mặt phẳng/mặt cầu Oxyz | `#03` | **DEV_BASE_SELECTED**: `OLD_OX`; donor: `NEW_03`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP18-OXYZ-GEOMETRY-R00.html) · `bee54ac6ac6e0386023bc6a8c55944afe4761023` · **DEV_DELTA_STATIC_QA_PASS / BROWSER_AND_G1_G4_PENDING** |
| 19 | CĐ19 | `SLM-TOP19-COMBINATORICS-PASCAL-R00` | Đếm chọn và Pascal | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_PA`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP19-COMBINATORICS-PASCAL-R00.html) · `f467a3b775bb2a5a3cdf8d6e16dbc38f99e3ae92` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 20 | CĐ20 | `SLM-TOP20-PROB-EVENTS-R00` | Hai biến cố | `#12` | **DEV_BASE_SELECTED**: `NEW_12`; donor: `OLD_EV (PR #860 đã đóng, chỉ tham khảo)`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP20-PROB-EVENTS-R00.html) · `086ecc628d226a3580b733bfb5e5416163d83a0b` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 21 | CĐ21 | `SLM-TOP21-BAYES-TREE-R01` | Bayes/sơ đồ cây | `#13` | **DEV_BASE_SELECTED**: `OLD_BD`; donor: `NEW_13`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP21-BAYES-TREE-R01.html) · `ed54561e72b38e0b82a6d3e7e429ad53be0ab710` · **DEV_QA_CHROMIUM_1153/1153_PASS, MATH/PED_REVIEW_OPEN** |
| 22 | CĐ22 | `SLM-TOP22-DISTRIBUTION-R01` | Dữ liệu thô/ngoại lệ | Chưa có bản mới tương ứng | **DEV_BASE_SELECTED**: `OLD_BD`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-TOP22-DISTRIBUTION-R01.html) · `10eaf34273ff378ba323af73b4db3c87fee36eec` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 23 | SGK Toán 11 Bài 3 | `SLM-SGK-G11-B03-SINCOS` | Đồ thị sin/cos và tính tuần hoàn | `#08` | **DEV_BASE_SELECTED**: `NEW_08`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-SGK-G11-B03-SINCOS.html) · `33a9b11463db77d2136ec78873f527dc1eb95759` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 24 | SGK Toán 11 Bài 3 | `SLM-SGK-G11-B03-TANCOT` | Đồ thị tan/cot và tiệm cận | `#09` | **DEV_BASE_SELECTED**: `NEW_09`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-SGK-G11-B03-TANCOT.html) · `da207f8491e0eeebff8b304579aadfe0f9b6ded2` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |
| 25 | SGK Toán 11 Bài 4 | `SLM-SGK-G11-B04-TRIGEQ` | Phương trình lượng giác cơ bản | `#10` | **DEV_BASE_SELECTED**: `NEW_10`; **FINAL_SOURCE_NOT_LOCKED** · [selected](./selected/SLM-SGK-G11-B04-TRIGEQ.html) · `abf867dd22fc50275fb4771a62435642d4ec3a11` · **CANDIDATE_EXTRACTED/DEV_QA_PENDING** |

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
