# AUTHORING R11 · QA, handoff và cập nhật phương thức biên soạn — CHUYÊN ĐỀ 1 / KIẾN THỨC M1–M7

**Ngày:** 10/11/2026 · **Lane:** AUTHORING, Draft PR #801 · **Scope hoàn thiện theo một phần lớn:** toàn bộ **KIẾN THỨC** của Chuyên đề 1, M1–M7. **Không** phát triển lại Luyện tập/Tự kiểm tra, không tạo Core thứ tư, không tác động RELEASE/website/Firebase/học viên.

## 1. Sản phẩm chính: MỘT file Kiến thức hoàn chỉnh để đọc xuyên M1–M7

**FILE:** `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_KIEN_THUC_M1_M7_FULL_LEARNER_READY_DRAFT_R11_20261110.md`  
**Git blob R11:** `25a91f18d6a4a764e3600d12b835b4b58e972b1f` · **97881 ký tự**, 1340 dòng, **7 mạch kiến thức**, **25 SVG**, **4 nguồn mô hình HTML**, **40 khối Tự thử/Đối chiếu**.  
**Nguồn:** `2340ea4975b37a457363eea59dd617070934983c`, `65abb522212389b93c1bdeb476fd4c5c26f5938b`, `727df67dd8c5eebbe2c48b43ee30be9b496e9941`, `8ad5322c610f3e9e2d509f86ea4776b740ffd3f9`, `ec8d7db6d5672e273bd7f392b1260db124266f43`, `aede985499d498df0f0d5645f1462eb42e8ad737`.

Đã hợp nhất bản R18 đã được review (giữ **snapshot R18 bất biến**) với các bổ sung có chọn lọc từ M1, M2, M3, M6, tuyến log xuyên M4–M7. M1–M3 bổ sung kiểm điều kiện bằng hình, ba điểm–hai đồ thị, chấm rỗng/đặc, hai “máy” trị tuyệt đối, dịch miền, ngưỡng tối ưu; M4–M7 dùng cùng hàm `log₂x` để dẫn từ **miền → giới hạn → đạo hàm → khảo sát**. Phần M4/M5/M6/M7 gốc **được giữ** ở những nơi đã đủ tốt, không tự viết lại chỉ để thay văn phong.

Các ghi chú “đặt hình tại đây”, SHA, các lời nhắc RELEASE đã được chuyển khỏi trang học sinh; **18 ảnh có sẵn** dùng nguyên nguồn SGK và **7 ảnh riêng Topic**, **không tạo bản sao hình**. Các hình và bốn mô hình được gắn qua đường dẫn thật; đây là **source AUTHORING** chờ RELEASE xử lý renderer tương ứng, chưa phải trang website được tích hợp.

## 2. QA thực hiện trên toàn bộ file và nguồn

| Cổng | Chứng cứ đã kiểm | Phân định |
|---|---|---|
| Dòng học | 7/7 mạch M1–M7 tồn tại, dẫn dắt tuần tự, các bổ sung đặt **trong** mạch tương ứng | **AUTHOR_QA_PASS về cấu trúc** |
| Tự học | 40/40 `details` đóng/mở, 40/40 `summary` để học sinh tự mở đối chiếu | **SOURCE_STRUCTURE_PASS**, chưa test accessibility thực |
| Hình | 25/25 image references resolve tới tệp SVG thật trên HEAD; 18 reused + 7 Topic; tất cả 25/25 SVG đã đọc: `<svg>`, `<title>`, `<desc>`, không script/inline event/foreignObject | **STATIC_SVG_QA_PASS**, chưa browser/device pass |
| Mô hình | 4/4 HTML links tồn tại; parse JavaScript trong 4/4 file gốc PASS; không `eval`/`document.write` | **JS_SYNTAX_PASS**, chưa QA Chromium exact HEAD |
| Toán | **22/22 nhóm kiểm**: miền, trị tuyệt đối, hai đồ thị, tịnh tiến miền, ngưỡng dạng đỉnh, mũ/log, giới hạn lỗ, cát tuyến/tiếp tuyến, dấu đạo hàm, cực trị, hộp và cận biên; riêng ngưỡng **4.428 bộ tham số/mẫu tương đương** | **AUTHOR_MATH_SPOT_QA_PASS**; không thay độc lập Academic/PED |
| Bank dùng chung | Tuyến M4–M7 trỏ 8/8 `item_id` gốc tại các bank G11/G12; M1–M3 mapping R09 hiện có; không nhân bản stem/key/rubric | **Q15_SOURCE_REF_PASS trong phạm vi này**, chưa tích hợp placement |
| RD1/RELEASE | Không có bộ đề, key hay rubric private; R18 và topic khác giữ nguyên, không chỉnh Mastery/Final Submit | **SOURCE_PRIVACY_PRESERVED** |

**Không tự nâng cấp** sang `CONTENT_READY`, Academic/PED PASS của **R11**, AP1–AP5 browser/device PASS hay “đã phát hành”. Những trạng thái đó khác với hoàn thành bản **Kiến thức AUTHORING**.

## 3. Danh mục tài sản SVG (một nguồn / không clone)

| # | Đường dẫn thật từ repository root | Git blob hiện hành |
|---:|---|---|
| 1 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg` | `ede8ac7f7bf1d4f4b98af1d5736b74a14ab0980f` |
| 2 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M2_SAME_POINTS_DIFFERENT_CURVES_R08.svg` | `9c2802a0c86fd7d7e4045999d4906cd0c798601e` |
| 3 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M2_PIECEWISE_ENDPOINTS_R00.svg` | `1f3365787d724995150012bd22e29edad239e80d` |
| 4 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M3_INPUT_OUTPUT_TWO_MACHINES_R01.svg` | `dbdda801c2d02169521db2ae974c00d567dd660a` |
| 5 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M3_ABSOLUTE_GRAPH_COMPARE_R00.svg` | `a619790e25729f41535935237b05fe79ac9e57d0` |
| 6 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M3_TRANSLATION_AND_DOMAIN_R00.svg` | `f51bb9efe25fda4dd630e21a17d9bfd6247e97f9` |
| 7 | `docs/assets/images/thpt/FIG-G11-B03-01_R01.svg` | `0ec702b2c7e4059fec5b27ba2e14713b9cb68e34` |
| 8 | `docs/assets/images/thpt/FIG-G11-B03-02_R01.svg` | `e394b70aa5b3e238fd09cd4eac7076e2900193de` |
| 9 | `docs/assets/images/thpt/FIG-G11-B03-03_R01.svg` | `719bb8bad9d5d041893d64cb455197139f6c75a4` |
| 10 | `docs/assets/images/thpt/FIG-G11-B03-04_R01.svg` | `784a6486a46ad770a6faf9466301477bcf0a722a` |
| 11 | `docs/assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg` | `64bcb465bd6d809095a4ca2b910555e314badb69` |
| 12 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_FIG_TOPIC1_M4_M7_LOG_ONE_FUNCTION_STORY_R10.svg` | `6e6622388ce07dfcb4473c599a48e59a706def7e` |
| 13 | `docs/assets/images/thpt/FIG-G11-B16-01_R01.svg` | `d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73` |
| 14 | `docs/assets/images/thpt/FIG-G11-B17-01_R01.svg` | `0cc06960b371bca72ee78da414a04aa56f5e5fbe` |
| 15 | `docs/assets/images/thpt/FIG-G11-CHIX-B31-01_R00.svg` | `ca0a19f3931983632f88754bf4317d012add6b79` |
| 16 | `docs/assets/images/thpt/FIG-G11-CHIX-B31-02_R00.svg` | `b569565e99675ad5ba56a11fb38cf1f8977ba134` |
| 17 | `docs/assets/images/thpt/FIG-G11-CHIX-B32-01_R00.svg` | `bc35da6f466cfaac519fe84e483856a3e4e24464` |
| 18 | `docs/assets/images/thpt/FIG-G11-CHIX-B32-02_R00.svg` | `6493758f2ebf13f51a81847f91835b2ba1fcdb38` |
| 19 | `docs/assets/images/thpt/FIG-G11-CHIX-B33-01_R00.svg` | `58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9` |
| 20 | `docs/assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg` | `e2696224533994826104e6c505d9dab26fc0a2e2` |
| 21 | `docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg` | `057991020c0f9349f160047cd87ae35ce03a87ef` |
| 22 | `docs/assets/images/thpt/G12_B03_FIG01_ASYMPTOTES_R00.svg` | `802f01f5b8dce392e3a064a54efe33ae1aea44fc` |
| 23 | `docs/assets/images/thpt/G12_B04_FIG01_RATIONAL_SURVEY_R00.svg` | `529b05d33fb0347dab70587c84c8ec08789c5c98` |
| 24 | `docs/assets/images/thpt/G12_B04_FIG02_CUBIC_SURVEY_R00.svg` | `8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b` |
| 25 | `docs/assets/images/thpt/G12_B05_FIG01_BOX_VOLUME_R00.svg` | `eacd5ba60f25d87c102917a55d314fb16d6f8341` |

**4 nguồn mô hình tương tác** (chỉ dẫn AUTHORING; chưa đưa vào trang đã phát hành):

| HTML nguồn | Git blob |
|---|---|
| `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M1_DOMAIN_LAB_D5_R00.html` | `5e686de54b12fc8891e56343e0ed17a7cd35c505` |
| `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M2_PIECEWISE_LAB_D5_R00.html` | `ca77c9158fc2a57ac0c6f4f52b30f36a33330814` |
| `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html` | `5bc8204f8bd024f30a73230231857210f1ce2123` |
| `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html` | `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5` |

## 4. Thay đổi quy trình dành riêng cho giai đoạn NÂNG CẤP (ghi nhận chỉ đạo owner)

**Nút thắt đã loại khỏi cách tổ chức công việc:** xé nhỏ mỗi ý thành một Rxx/PR checkpoint; bắt đầu biên soạn lại những mảng đã PASS; tự động đưa tài liệu Notebook/Gemini quay lại Notebook review; yêu cầu đủ mọi bước giao học liệu từ đầu mới được sửa một trang lý thuyết; tạo source phụ cạnh tranh làm học sinh mất mạch đọc.

**Quy trình vận hành AUTHORING từ R11 theo quyết định của owner — đơn vị công việc = MỘT PHẦN TRỌN VẸN CỦA CHUYÊN ĐỀ**:

1. **Đọc nguồn một lượt và phân loại:** SGK S1 là chuẩn Core; R18 (hay snapshot Topic khác) đã PASS là nền; Notebook/Gemini là nguồn **ứng viên** để chọn, kiểm, chỉnh, không phải câu trả lời mặc nhiên đúng; kho SGK/Written dùng chung bằng một ID. Đánh dấu giữ/sửa/thêm theo **outcome**.
2. **Soạn MỘT bản sản phẩm học sinh hoàn chỉnh** cho một trong ba phần Kiến thức/Luyện tập/Tự kiểm tra; kiểm tiền đề → giải thích bản chất → tự thử → hình/mô hình → chữa lỗi → cầu nối → sử dụng bank luyện tập, không tạo tab Core ở Topic. Không “xong một đoạn rồi báo cáo cả chuyên đề”.
3. **QA trên bản hợp nhất:** kiểm toán và điều kiện toán, lời giải, các hình/đồ thị, nguồn, IDs, trải nghiệm, không lộ đề độc lập; chỉ phân loại rủi ro **theo nội dung thực**. Bài toán/sư phạm mới có nghi vấn chưa khép bằng SGK+kiểm toán thì sử dụng NotebookLM **targeted**, đúng 5 Permanent Sources v2.1, không ép một vòng review tự động chỉ vì Notebook đã giúp soạn tài liệu.
4. **Một checkpoint và một handoff**: file nguồn hợp nhất SHA-locked + QA/gap rõ, trạng thái cần RELEASE xử lý; **không merge/deploy** bởi AUTHORING, không giả `ready/`. Khi phát hiện blocker phải ghi **đúng điểm còn thiếu**, không HOLD tràn lan vì thiếu thủ tục giai đoạn cũ.

**Giới hạn pháp lý/chuẩn có hiệu lực:** tiêu chuẩn học thuật **SLM-THPT-QUALITY-ONE Q01–Q18** không bị thay bằng “tiêu chuẩn R11”. Project Source `07 v1.1` còn quy định `DELTA_C_ACADEMIC_MATERIAL` phải độc lập review phần ảnh hưởng; phương pháp nâng cấp owner yêu cầu **review khi thực sự cần** nên có khả năng khác cách diễn giải mặc định. **STANDARD_CHANGE_REQUEST (chỉ đúng review trigger của giai đoạn nâng cấp):** làm rõ trường hợp nội dung đã có từ Notebook/Gemini và được kiểm chứng đầy đủ sẽ dùng **SOURCE_EQUIVALENT / RISK_RESOLVED_WITH_EVIDENCE**, chỉ bắt buộc review targeted khi thay đổi điều kiện/đáp án/rubric/outcome, có nghi ngờ chưa giải quyết, hoặc ảnh hưởng đánh giá độc lập. Không sửa Q01–Q18 về tính đúng toán/đánh giá/riêng tư/kiểm tra. **Đây là đề xuất điều chỉnh quy trình, không tự nhận đã cập nhật chuẩn gốc trên main.** Trước việc promote cần owner/RELEASE xác nhận cách xử lý mâu thuẫn quy phạm, hoặc ghi `STANDARD_CONFLICT_HOLD` đúng phạm vi; việc này **không chặn việc soạn Kiến thức trong AUTHORING**.

## 5. Checkpoint phạm vi và điểm chưa đóng

- **Đã làm trọn vẹn một phần lớn:** `TOPIC1_KNOWLEDGE_M1_M7_R11_AUTHORING_SOURCE_COMPOSED`; hình/dẫn dắt đặt vào một file, 7/7 mạch, kiểm static và toán; **không** thay ngân hàng Luyện tập hay câu Tự kiểm tra kín.
- **HOLD đúng phạm vi:** `RENDERER_AND_REAL_DEVICE_QA` (SVG 25 tệp, HTML 4 nguồn); `TARGETED_ACADEMIC_RISK_CLEARANCE` nếu chuẩn gốc yêu cầu cho thay đổi học thuật thực chất; `PROCESS_NORMATIVE_ALIGNMENT` cho trigger review; `TOPIC_V2_RELEASE_INTAKE_790` do RELEASE đảm nhận.
- **R18 baseline blob:** `2340ea4975b37a457363eea59dd617070934983c`, bất biến và vẫn chỉ PASS đúng snapshot cũ; **R11 mới:** `25a91f18d6a4a764e3600d12b835b4b58e972b1f`, không thừa hưởng PASS tự động. R06 ONE_SOURCE blob `1d3d3852aa38ab90ed282349bfc769c02aac3ea3` là lịch sử, không đại diện R11.
- **Bước kế tiếp của AUTHORING (đơn vị lớn):** tiếp nhận phần **Luyện tập toàn Chuyên đề 1**: hợp nhất item gốc SGK/Topic/Written bằng placement, QA outcome-depth, bổ sung câu mới khi thiếu, rồi **một** bộ giao tiếp; không tiếp tục tạo mảnh lẻ của Kiến thức trừ khi QA phát hiện lỗi thực.

**STATE:** `KNOWLEDGE_SOURCE_COMPLETE_R11` · `MATH_STATIC_QA_PASS` · `ASSETS_RESOLVED_25_OF_25` · `HTML_LINKS_4_OF_4` · `REVIEW_RISK_BASED_PROCESS_PROPOSED` · `CONTENT_READY=NO` · `NO_MERGE_DEPLOY`.
