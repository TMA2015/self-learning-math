# AUTHORING HANDOFF R13, SOURCE R14 · CHUYÊN ĐỀ 1 — MỘT BẢN HỢP NHẤT BA PHẦN

**Ngày:** 10/11/2026 · **Lane:** AUTHORING only · **Github:** Draft PR #801. Đây là **một gói handoff tổng** cho 3 phần Kiến thức/Luyện tập/Tự kiểm tra. Nguồn R18 đã nghiệm thu được bảo toàn, không dùng nội dung R18 làm lời tuyên bố PASS cho các thay đổi R11/R12.

PACKET_ID: THPT-TOPIC-FUNCTIONS-G10-G12-FULL-R13-20261110
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
LESSON_IDS: TOP-FUNC-M1..TOP-FUNC-M7
OUTCOME_COUNT: 48
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
PRIVATE_RD1_ASSESSMENT_MODE: OWNER_HELD_PRIVATE_TOPIC_READINESS_R01_NOT_DEPLOYED
PRIVATE_RD1_COUNT: 30
ACADEMIC_SOURCE_SCHEME: SINGLE_PUBLIC_COMPILATION_WITH_THREE_EXACT_PARTS
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_FULL_THREE_PART_PUBLIC_CANONICAL_R14_20261110.md
ACADEMIC_SOURCE_BLOB: aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b
ACADEMIC_SOURCE_PARITY: EXACT_R11_R12_R13_SECTION_TEXT_VERIFIED
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC_FUNCTIONS_FULL_R18_Q18_OWNER_INDEPENDENT_VERDICT_RECEIPT_R01_20261108.md
REVIEW_RECEIPT_BLOB: d2e86bac887ff04cf41f5cc9a1fa3ca622a9ca63
AUTHOR_A1_A7_PATH: prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_FULL_AUTHORING_Q01_Q18_A1_A7_PREFLIGHT_R17_20261107.md
AUTHOR_A1_A7_BLOB: 8cee94ee5471e52499a94c711100c807984be397
BASELINE_R18_SOURCE_BLOB: 2340ea4975b37a457363eea59dd617070934983c
PRIVATE_RD1_ACADEMIC_VERDICT: PASS_ACCEPTED_ON_UNCHANGED_R01
PRIVATE_RD1_PED_VERDICT: PASS_ACCEPTED_ON_UNCHANGED_R01
ACADEMIC_VERDICT: PENDING_R11_R12_DELTA_C_RISK_CLEARANCE
PEDAGOGICAL_VERDICT: PENDING_R11_R12_DELTA_C_RISK_CLEARANCE
R11_R12_NEW_MATERIAL_VERDICT: NOT_INHERITED_FROM_R18
CONTENT_READY: NO
PUBLIC_SITE_INTEGRATION: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
BLOCKERS: R12_TO_PRIVATE_R01_EXPOSURE_AUDIT_PENDING; NEW_PUBLIC_R11_R12_RISK_CLEARANCE; Q15_NEW_PUBLIC_CANDIDATES_9_PENDING; R14_REVIEW_RECEIPT_SOURCE_LOCK_PENDING; TOPIC_RELEASE_INTAKE_790; SECURE_FINAL_SUBMIT_RUNTIME_QA_PENDING

**Không đưa gói này vào `ready/`, không ghi REGISTER thành CONTENT_READY, không merge/deploy.** Đã đóng nút thắt **single-source transport** bằng cách tạo MỘT bản vận chuyển R14 có Git blob `aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b`; ba phần R11/R12/R13 được chép nguyên văn, có marker BEGIN/END và source SHA. Không thêm chuẩn Q01–Q18. Việc hỗ trợ TOPIC/v1.2.0 của cổng V2, chấp thuận theo thẩm quyền và QA bảo mật vẫn do nhánh RELEASE xử lý.

## 1. Một nguồn vận chuyển V2 và ba phần học sinh được bảo toàn nguyên văn

**ACADEMIC_SOURCE_PATH duy nhất:** `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_FULL_THREE_PART_PUBLIC_CANONICAL_R14_20261110.md`, SHA `aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b` (bản R14 ghép **đúng nguyên văn** từng body R11/R12/R13; không thay toán, không nhân bản câu). Ba tệp dưới đây là **nguồn provenance**, không phải ba `ACADEMIC_SOURCE_PATH` cạnh tranh trong V2.

| Phần | Path chuẩn ở PR #801 | Git blob trên HEAD |
|---|---|---|
| KIẾN THỨC M1–M7 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_KIEN_THUC_M1_M7_FULL_LEARNER_READY_DRAFT_R11_20261110.md` | `25a91f18d6a4a764e3600d12b835b4b58e972b1f` |
| LUYỆN TẬP M1–M7 | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_LUYEN_TAP_M1_M7_FULL_PUBLIC_SHARED_SOURCE_R12_20261110.md` | `20c97d7bd7e1d5699ed186f7d7fbfd15c9d74c92` |
| TỰ KIỂM TRA M1–M7 — chỉ hướng dẫn an toàn, **không có câu RD1** | `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_TU_KIEM_TRA_M1_M7_SAFE_STUDENT_SOURCE_R13_20261110.md` | `cb1f5aa42e176218b3127711202d5bfd8d06acf0` |

- **Kiến thức R11:** 7 mạch, 25 SVG (tệp thật), 4 lab HTML, 40 Tự thử/Đối chiếu, QA nguồn/toán đã ghi trong R11 QA tại `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_KIEN_THUC_M1_M7_R11_QA_HANDOFF_AND_UPGRADE_PROCESS_20261110.md`. **Không tuyên bố 25 hình/lab đã QA thiết bị thực**.
- **Luyện tập R12:** 48 outcome, 99 placement tham chiếu **92 item công khai** (= 79 SGK JS/JSON + 10 Topic riêng + 3 ứng dụng cuối ChVI), 28 Written gốc, 14 hoạt động tự luyện thêm. 20/20 kiểm thử toán học tác giả trên 14 hoạt động và ứng dụng mục tiêu. Hai nguồn draft cũ chỉ còn redirect R12, không còn đề cạnh tranh. QA source `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_LUYEN_TAP_M1_M7_R12_QA_HANDOFF_20261110.md`.
- **Tự kiểm tra R13:** nội dung học sinh giới thiệu phạm vi, hướng dẫn trước/trong/sau phiên, chính sách **không hint/AI/correctness/key/rubric trước Final Submit**, fallback trung thực nếu không có phiên bảo mật, không biến bài Practice thành kết quả kiểm tra. **30 câu riêng tư không nằm trong bản công khai**.
- Chuyên đề vẫn **3 phần duy nhất**: Kiến thức / Luyện tập / Tự kiểm tra. Không tạo Core riêng, không chuyển SGK_CHAPTER_READINESS thành TOPIC_READINESS.

## 2. Hồ sơ RD1 R01 được giữ nguyên và được nghiệm thu đúng snapshot

**Tuyên bố có chứng cứ:** [Q16/Q18 owner independent review receipt](../review-packets/Temp_TOPIC_FUNCTIONS_FULL_R18_Q18_OWNER_INDEPENDENT_VERDICT_RECEIPT_R01_20261108.md), current Git blob `d2e86bac887ff04cf41f5cc9a1fa3ca622a9ca63`, ghi nhận **một** verdict độc lập từ hai biểu hiện báo cáo cùng nguồn: `ACADEMIC_PASS + PED_PASS`; `P0=P1=P2=0`; `MINIMAL_DELTA=0`. Bộ owner-held gốc có **30 câu**, source cover **48/48 outcome** theo receipt, được review với đúng 5 Permanent Sources THPT v2.1 và S1. Không tạo vòng Notebook review mới cho chính đề cũ.

**Private owner-held, SHA-256 công khai được phép:**

| Tài sản thật, KHÔNG đưa lên GitHub public | SHA-256 từ receipt đã nghiệm thu |
|---|---|
| ZIP 3 file tư nhân `Temp_TOPIC_FUNCTIONS_PRIVATE_RD1_REVIEW_R01_20261107.zip` | `59dba34b09695f8b127e10ab7ec8cc295b03293e9cbdeedf8bc2218799eb658a` |
| Questions R01 | `562d4f371da285a7d05d17f788160bcd03a93c025c9ee2730ca34b4724389a15` |
| Answers, worked solutions, rubric R01 | `ccbe2fad0843a239dd504386a9776addb16f1a9d28800401700b73292450c303` |
| 48-outcome coverage R01 | `503af3076cc741d793dec6c3431d920effa0925119505343dfeddb71f68e6ff9` |

**Phân định QA:** Các SHA-256 là **biên nhận được owner cung cấp, đã ghi tại GitHub**, không phải hash vừa được tính lại từ bộ private trong lượt R13. AUTHORING **không có bytes đề tư nhân để mở/kiểm toán lại trực tiếp**. Mọi câu, đáp án, lời giải, rubric, private item_id thuộc custody của owner; **không xuất hiện tại PR này**. Số 48/48 là kết quả reviewer trên file ma trận private, **không phải một ma trận per-item đã được đọc trong turn này**.

## 3. Q16 — đặc tả đánh giá phải đúng khi RELEASE tích hợp (không giả lập feature đã chạy)

| Thời điểm/cổng | Điều kiện bắt buộc | Trạng thái kiểm nghiệm |
|---|---|---|
| Chưa có phiên hợp lệ | Không gọi là bài chính thức; chỉ hiển thị thông báo fallback, không nạp đề/key ở client/asset công khai | COPY_AUTHORING_COMPLETE; runtime **PENDING** |
| Cấp câu hỏi | Chỉ kênh được cấp phép, phiên hợp lệ và nguồn kín đúng phiên bản; không cache hoặc nhúng key/rubric/đáp án vào HTML/JS/response công khai | **PENDING_RELEASE** |
| Trong khi làm | Không hint, đáp án, correct/incorrect, AI Tutor, feedback, score hoặc payload phụ làm lộ kết quả; trạng thái lưu chỉ kỹ thuật | **PENDING_RELEASE** |
| Nộp cuối | Chỉ khi người học chủ động xác nhận **Final Submit**; backend xác nhận mới ghi đã nộp, chống double-submit/race/retry, không tự nộp khi reload | **PENDING_RELEASE** |
| Sau nộp | Phản hồi có quyền và đúng thời điểm; phần tự luận nếu chưa có engine duyệt thì để trạng thái chờ, **không tự chấm bằng so đáp án client** | **PENDING_RELEASE** |
| Skill Mastery | Không ghi từ Practice, mở giải, client self-check hoặc Written tự đối chiếu; chỉ kết quả chính thức theo quyền và điều kiện được duyệt | **PENDING_RELEASE** |
| Tách hành trình | `TOPIC_READINESS` riêng version, attempt và coverage với `SGK_CHAPTER_READINESS`; không dùng lại câu đã tiếp xúc làm chứng cứ độc lập | ACADEMIC_MODE_DEFINED; runtime **PENDING** |
| Privacy | Không để đề/kết quả của học sinh khác lộ qua client/API/log; không đưa private RD1 lên Git, không gửi cho Notebook lại khi không cần | PUBLIC_GIT_SOURCE_SAFE (static); actual storage **PENDING** |

**Q16 targeted acceptance scenarios** (RELEASE kiểm bằng phiên thực):
1. User chưa được cấp quyền / phiên hết hạn / dịch vụ offline ⇒ fallback, **không** có đề/key.
2. Dùng console/network/SSR/html source trước Final Submit ⇒ không thấy key, đáp án/rubric, flag correctness, score hoặc endpoint preview;
3. User sửa câu trước khi nộp ⇒ không hiển thị correct/incorrect; nếu có save, phải có phản hồi xác nhận từ backend; không giả lưu;
4. Final Submit thành công ⇒ trạng thái server ACK, attempt khóa; retry/reload/đa tab không tạo chấm/nộp kép;
5. Mất kết nối trong lúc nộp ⇒ hỏi backend về attempt-state, không tự suy submit thành công;
6. Có Written chưa chấm ⇒ không tính Mastery hoặc “đúng” tự động từ tự so sánh;
7. Dùng lại câu Practice đã có lời giải ⇒ chỉ formative, không đánh giá độc lập;
8. Không dùng kết quả SGK Chapter thay kết quả Topic Readiness; riêng đường lui D6 sau nộp về đúng Kiến thức/Luyện tập Topic.

## 4. Điểm khóa thực sự mới do R11/R12 nâng cấp

**EXPOSURE_DIFF = chưa đủ chứng cứ để PASS:** R18/RD1 R01 đã được review trước khi 14 hoạt động public của R12 được bổ sung vào trải nghiệm. Để bảo đảm 30 câu **thực sự độc lập** sau các hoạt động mới, chủ thể có quyền truy cập đề private cần **đối chiếu ngữ nghĩa kín** với 14 public exercise (đặc biệt 9 bài ứng viên), kiểm cả các biến thể trùng phương pháp/số liệu/rubric. Đầu ra chỉ cần kết quả phân loại `NO_COLLISION / COLLISION_REPLACE_OR_RESTRICT / REVIEW_NEEDED`, tổng số và receipt SHA, **không đưa stem hay item_id riêng tư lên GitHub**. Không tự coi PASS R01 đã chứng minh điều mới này, nhưng cũng **không mở lại toàn bộ 30 câu chỉ vì thay metadata**.

**Bản private còn owner-held:** không có file nguồn tư nhân trong runtime AUTHORING lượt này; không thể tính lại SHA/so semantic. Nếu phát hiện collision thật, xử lý đúng phần bị ảnh hưởng với owner theo minimal delta, đồng bộ SHA/receipt/review nếu thay câu hoặc đáp án. Nếu không có collision, bảo toàn academic PASS của RD1 R01.

**R11/R12 khác R18:** các đoạn dẫn, bài mới, hình và luyện mới có thể thuộc `DELTA_C_ACADEMIC_MATERIAL`. Quy định Source 07 v1.1 hiện đòi review affected scope, còn quyết định owner mới nhấn review **khi rủi ro thật sự cần**. R11 QA đã ghi `STANDARD_CHANGE_REQUEST` cần đồng bộ vào **chuẩn gốc** khi được phê duyệt. **Không tự cấp PASS mới** của bản R11/R12 từ chứng cứ R18; chưa xong rà soát theo quy định hiện hành thì ghi `STANDARD_CONFLICT_HOLD` đúng phần, không cản việc soạn học liệu.

**Source-lock V2:** Đã có ONE BLOB R14 làm `ACADEMIC_SOURCE_BLOB`, thay thế phương án multi-part chưa chắc được hỗ trợ. R18 handoff Draft `prototypes/thpt/release-handoffs/THPT-TOPIC-FUNCTIONS-G10-G12-FULL-R18_HANDOFF_V2_DRAFT_20261108.md` (blob `34d286aaad311b660580df580d4b89509c1adbb7`) chỉ đúng snapshot cũ; **R13 là handoff đề xuất hiện hành được cập nhật để tham chiếu R14; không tự sửa lịch sử R18**. V2 hiện cần tương thích với `TOPIC / FULL_TOPIC_LEARNING_PATH`, `STANDARD_VERSION=1.2.0`, ba nguồn học liệu khóa SHA và private receipt; Issue #790 chưa đóng, RELEASE Draft PR #799 đang mở. Không được sửa nhãn thành SGK hoặc giảm version để qua gate.

## 5. QA AUTHORING R13 thực hiện và checkpoint

- Kiểm trực tiếp GitHub **3/3 nguồn hiện hành SHA đúng**, baseline R18 và Q18 receipt giữ bất biến; `48/48` outcome có mặt trong R12, `28/28` Written IDs trong R12, M1–M7 được nhắc trong cả ba phần.
- R13 student copy có hướng dẫn trước/trong/sau, Final Submit, privacy và fallback; không chứa thân câu/đáp án/rubric hoặc bảng ID kín; soát hành vi UI vẫn PENDING.
- Q16/18 receipt original có đúng 4 SHA-256 tư nhân và Academic/PED PASS; **không** giả tính hash mới của tệp chưa được cung cấp.
- **Đã đóng:** source transport một file, một Git blob; 3/3 source-body parity (không phải academic review mới). **Chưa QA:** runtime bảo mật; private vs 14 public collision; 9 candidate Q15; cổng Topic/v1.2.0 của RELEASE; review học thuật/PED phần R11/R12 nếu còn yêu cầu hiện hành; actual browser/device AP/CI trên HEAD.

**AUTHORING THREE PARTS SOURCE ASSEMBLED = YES.** **ONE PUBLIC ACADEMIC_SOURCE_BLOB = aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b.** **PRIVATE RD1 R01 ACADEMIC/PED PASS PRESERVED = YES.** **OFFICIAL TOPIC SELF-CHECK RUNNING = NO.** **CONTENT_READY = NO.** **MERGE/DEPLOY = NO.**

Bước tiếp theo không viết lại đề: owner-held private collision audit và chuẩn nguồn, sau đó RELEASE tiếp nhận qua cổng #790 khi hợp đồng đã hợp lệ; không biến phần còn lại thành chuỗi công việc nhỏ thuộc nhánh AUTHORING.


## R14 V2 CONTRACT EVIDENCE — HISTORICAL BASELINE + CURRENT DELTA

Các mục sau dùng đúng tên/cấu trúc V2 đã có từ handoff R18, nhưng phân biệt rõ **chứng cứ R18 đã PASS** với **đóng gói mới R14 đang HOLD**. Trạng thái của R14 không được nâng thành READY chỉ vì có đủ đề mục.

## S1_SGK_SBT_SOURCE

Original verified KNTT SGK/SBT and receipts from G10 B15–B16; G11 B03/B20, B16–B17, B31–B33; G12 B01–B05. See exact original academic-source receipts R10/R11, R18 and current Q01–Q18 R17. G10 SGK Tập Hai B15 printed 4–10 and B16 printed 11–17 from original source; G12 SGK Tập Một B01 5–14 through B05 33–41 from original receipts; G11 individual page ranges remain linked to original audited source rather than invented here. SBT is problem-family reference only, not a replacement for official S1 scope.

## LESSON_IDS

- TOP-FUNC-M1
- TOP-FUNC-M2
- TOP-FUNC-M3
- TOP-FUNC-M4
- TOP-FUNC-M5
- TOP-FUNC-M6
- TOP-FUNC-M7

## OUTCOME_IDS

- TOP-G10-FUNC-O01
- TOP-G10-FUNC-O02
- TOP-G10-FUNC-O03
- TOP-G10-FUNC-O04
- TOP-G10-FUNC-O05
- TOP-G10-FUNC-O06
- TOP-G10-FUNC-O07
- TOP-G10-FUNC-O08
- TOP-G10-FUNC-O09
- TOP-G10-FUNC-O10
- TOP-FUNC-M4-O01
- TOP-FUNC-M4-O02
- TOP-FUNC-M4-O03
- TOP-FUNC-M4-O04
- TOP-FUNC-M4-O05
- TOP-FUNC-M4-O06
- TOP-FUNC-M4-O07
- TOP-FUNC-M4-O08
- TOP-FUNC-M4-O09
- TOP-FUNC-M4-O10
- TOP-FUNC-M5-O01
- TOP-FUNC-M5-O02
- TOP-FUNC-M5-O03
- TOP-FUNC-M5-O04
- TOP-FUNC-M5-O05
- TOP-FUNC-M5-O06
- TOP-FUNC-M5-O07
- TOP-FUNC-M5-O08
- TOP-FUNC-M5-O09
- TOP-FUNC-M6-O01
- TOP-FUNC-M6-O02
- TOP-FUNC-M6-O03
- TOP-FUNC-M6-O04
- TOP-FUNC-M6-O05
- TOP-FUNC-M6-O06
- TOP-FUNC-M6-O07
- TOP-FUNC-M6-O08
- TOP-FUNC-M6-O09
- TOP-FUNC-M7-O01
- TOP-FUNC-M7-O02
- TOP-FUNC-M7-O03
- TOP-FUNC-M7-O04
- TOP-FUNC-M7-O05
- TOP-FUNC-M7-O06
- TOP-FUNC-M7-O07
- TOP-FUNC-M7-O08
- TOP-FUNC-M7-O09
- TOP-FUNC-M7-O10

## PUBLIC_ITEM_IDS

- HPT-G10-CHVI-WRI-15-01
- HPT-G10-CHVI-WRI-15-02
- THPT-G10-B15-C01
- THPT-G10-B15-C02
- THPT-G10-B15-P01
- THPT-G10-B15-P02
- THPT-G10-B15-P03
- THPT-G10-TOP-FUNC-P01
- THPT-G10-TOP-FUNC-P02
- THPT-G10-TOP-FUNC-P03
- THPT-G10-TOP-FUNC-P04
- THPT-G10-TOP-FUNC-P05
- THPT-G10-TOP-FUNC-P06
- THPT-G11-B03-C01
- THPT-G11-B03-C02
- THPT-G11-B03-C03
- THPT-G11-B03-C04
- THPT-G11-B03-P01
- THPT-G11-B03-P03
- THPT-G11-B03-P04
- THPT-G11-B03-P06
- THPT-G11-B03-P08
- THPT-G11-CHI-W03
- THPT-G11-CHIX-B31-C01
- THPT-G11-CHIX-B31-C04
- THPT-G11-CHIX-B31-C07
- THPT-G11-CHIX-B31-C09
- THPT-G11-CHIX-B31-P01
- THPT-G11-CHIX-B31-P05
- THPT-G11-CHIX-B31-P06
- THPT-G11-CHIX-B31-P08
- THPT-G11-CHIX-B31-W01
- THPT-G11-CHIX-B31-W02
- THPT-G11-CHIX-B31-W03
- THPT-G11-CHIX-B32-C03
- THPT-G11-CHIX-B32-C06
- THPT-G11-CHIX-B32-C12
- THPT-G11-CHIX-B32-P04
- THPT-G11-CHIX-B32-P09
- THPT-G11-CHIX-B32-P13
- THPT-G11-CHIX-B32-W01
- THPT-G11-CHIX-B32-W02
- THPT-G11-CHIX-B32-W03
- THPT-G11-CHIX-B33-C01
- THPT-G11-CHIX-B33-P03
- THPT-G11-CHIX-B33-P05
- THPT-G11-CHIX-B33-W01
- THPT-G11-CHIX-B33-W02
- THPT-G11-CHIX-B33-W03
- THPT-G11-CHIX-CHIX-C01
- THPT-G11-CHIX-CHIX-P01
- THPT-G11-CHV-B16-C01
- THPT-G11-CHV-B16-C02
- THPT-G11-CHV-B16-C03
- THPT-G11-CHV-B16-P01
- THPT-G11-CHV-B16-P02
- THPT-G11-CHV-B16-P03
- THPT-G11-CHV-B16-P04
- THPT-G11-CHV-B16-P05
- THPT-G11-CHV-B16-P06
- THPT-G11-CHV-B16-P07
- THPT-G11-CHV-B16-W01
- THPT-G11-CHV-B16-W02-ANCHOR
- THPT-G11-CHV-B17-C01
- THPT-G11-CHV-B17-C02
- THPT-G11-CHV-B17-C03
- THPT-G11-CHV-B17-P02
- THPT-G11-CHV-B17-P03
- THPT-G11-CHV-B17-P05
- THPT-G11-CHV-B17-P07
- THPT-G11-CHV-B17-W01
- THPT-G11-CHV-B17-W02-ANCHOR
- THPT-G11-CHVI-B20-C01
- THPT-G11-CHVI-B20-C02
- THPT-G11-CHVI-B20-C03
- THPT-G11-CHVI-B20-C04
- THPT-G11-CHVI-B20-P01
- THPT-G11-CHVI-B20-P02
- THPT-G11-CHVI-B20-P04
- THPT-G11-CHVI-B20-W01
- THPT-G11-CHVI-B20-W02-ANCHOR
- THPT-G11-TOP-FUNC-P01
- THPT-G11-TOP-FUNC-P02
- THPT-G12-CHI-B01-C02
- THPT-G12-CHI-B01-C04
- THPT-G12-CHI-B01-P02
- THPT-G12-CHI-B01-P04
- THPT-G12-CHI-B01-W01
- THPT-G12-CHI-B01-W02
- THPT-G12-CHI-B02-C02
- THPT-G12-CHI-B02-P03
- THPT-G12-CHI-B02-W01
- THPT-G12-CHI-B02-W02
- THPT-G12-CHI-B03-C01
- THPT-G12-CHI-B03-C02
- THPT-G12-CHI-B03-C03
- THPT-G12-CHI-B03-C04
- THPT-G12-CHI-B03-P05
- THPT-G12-CHI-B03-W01
- THPT-G12-CHI-B03-W02
- THPT-G12-CHI-B04-C02
- THPT-G12-CHI-B04-C03
- THPT-G12-CHI-B04-P03
- THPT-G12-CHI-B04-P04
- THPT-G12-CHI-B04-W01
- THPT-G12-CHI-B04-W02
- THPT-G12-CHI-B05-C01
- THPT-G12-CHI-B05-C03
- THPT-G12-CHI-B05-C04
- THPT-G12-CHI-B05-P03
- THPT-G12-CHI-B05-P04
- THPT-G12-CHI-B05-P05
- THPT-G12-CHI-B05-W01
- THPT-G12-CHI-B05-W02
- THPT-G12-TOP-FUNC-P01
- THPT-G12-TOP-FUNC-P02
- THPT-G10-B15-P04
- THPT-G10-CHVI-APP-A1
- THPT-G10-CHVI-APP-A2
- THPT-G10-CHVI-APP-B3

**PUBLIC_ITEM_IDS scope:** 120 **distinct proposed placed public ID references** (116 original + 4 SGK/ChVI reuse IDs) selected from the existing 192-source inventory, the four genuinely new R13 source pointers, and 28 historical Written references (10 already overlap G12 public inventory). This is NOT a claim of 116 new questions or live website records. The two original G10 `HPT-` IDs have now also been verified at **actual existing canonical source + original rubrics** via [R19](../content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_G10_SHARED_WRITTEN_SOURCE_EXACT_REUSE_R19_20261108.md) blob `89851c0ae78ab53b4d89d50391579806bc4f0dd6`. Their unusual HPT prefix is correct, NOT a typo. Original `tu-luan.md` source blob `4da918f36d30c9b7110099e81fc88943e5b7705b` contains /5 and /6 rubric respectively; the public placement registry separately confirms same IDs. RELEASE must reuse existing original runtime IDs unchanged, not invent THPT-prefixed duplicates.

## ITEM_OUTCOME_MATRIX

**Every row is an actual proposed Topic placement.** An existing `item_id` may appear multiple times for different outcomes/roles; it is still ONE original question with ONE answer, solution and rubric source.

| # | item_id | primary outcome | TOPIC role | proposed placement | status |
|---|---|---|---|---|---|
| 1 | `THPT-G10-B15-C01` | `TOP-G10-FUNC-O01` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 2 | `THPT-G10-B15-C02` | `TOP-G10-FUNC-O02` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 3 | `THPT-G10-B15-P01` | `TOP-G10-FUNC-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 4 | `THPT-G10-TOP-FUNC-P01` | `TOP-G10-FUNC-O03` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 5 | `THPT-G10-B15-P03` | `TOP-G10-FUNC-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 6 | `THPT-G10-B15-P02` | `TOP-G10-FUNC-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 7 | `THPT-G10-TOP-FUNC-P02` | `TOP-G10-FUNC-O06` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 8 | `THPT-G10-TOP-FUNC-P03` | `TOP-G10-FUNC-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 9 | `THPT-G10-TOP-FUNC-P04` | `TOP-G10-FUNC-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 10 | `THPT-G10-TOP-FUNC-P05` | `TOP-G10-FUNC-O09` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 11 | `THPT-G10-TOP-FUNC-P06` | `TOP-G10-FUNC-O10` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 12 | `THPT-G11-B03-C02` | `TOP-FUNC-M4-O01` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 13 | `THPT-G11-B03-C03` | `TOP-FUNC-M4-O02` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 14 | `THPT-G11-B03-P03` | `TOP-FUNC-M4-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 15 | `THPT-G11-B03-C04` | `TOP-FUNC-M4-O03` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 16 | `THPT-G11-B03-P04` | `TOP-FUNC-M4-O03` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 17 | `THPT-G11-B03-C01` | `TOP-FUNC-M4-O04` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 18 | `THPT-G11-B03-P01` | `TOP-FUNC-M4-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 19 | `THPT-G11-B03-P06` | `TOP-FUNC-M4-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 20 | `THPT-G11-B03-P08` | `TOP-FUNC-M4-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 21 | `THPT-G11-CHVI-B20-C01` | `TOP-FUNC-M4-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 22 | `THPT-G11-CHVI-B20-C02` | `TOP-FUNC-M4-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 23 | `THPT-G11-CHVI-B20-P02` | `TOP-FUNC-M4-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 24 | `THPT-G11-CHVI-B20-C02` | `TOP-FUNC-M4-O07` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 25 | `THPT-G11-CHVI-B20-C04` | `TOP-FUNC-M4-O08` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 26 | `THPT-G11-CHVI-B20-C03` | `TOP-FUNC-M4-O08` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 27 | `THPT-G11-CHVI-B20-C03` | `TOP-FUNC-M4-O09` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 28 | `THPT-G11-CHVI-B20-P01` | `TOP-FUNC-M4-O09` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 29 | `THPT-G11-CHVI-B20-P04` | `TOP-FUNC-M4-O10` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 30 | `THPT-G11-B03-P08` | `TOP-FUNC-M4-O10` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M4/TOP-FUNC-M4-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 31 | `THPT-G11-CHV-B16-C01` | `TOP-FUNC-M5-O01` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 32 | `THPT-G11-CHV-B16-C02` | `TOP-FUNC-M5-O02` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 33 | `THPT-G11-CHV-B16-P03` | `TOP-FUNC-M5-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 34 | `THPT-G11-CHV-B16-C03` | `TOP-FUNC-M5-O03` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 35 | `THPT-G11-CHV-B16-P06` | `TOP-FUNC-M5-O03` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 36 | `THPT-G11-CHV-B16-P04` | `TOP-FUNC-M5-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 37 | `THPT-G11-CHV-B16-P05` | `TOP-FUNC-M5-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 38 | `THPT-G11-CHV-B16-P01` | `TOP-FUNC-M5-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 39 | `THPT-G11-CHV-B16-P02` | `TOP-FUNC-M5-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 40 | `THPT-G11-CHV-B17-C01` | `TOP-FUNC-M5-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 41 | `THPT-G11-CHV-B17-C02` | `TOP-FUNC-M5-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 42 | `THPT-G11-CHV-B17-P02` | `TOP-FUNC-M5-O06` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 43 | `THPT-G11-CHV-B17-C03` | `TOP-FUNC-M5-O07` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 44 | `THPT-G11-CHV-B17-P05` | `TOP-FUNC-M5-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 45 | `THPT-G11-CHV-B17-P03` | `TOP-FUNC-M5-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 46 | `THPT-G11-CHV-B17-P07` | `TOP-FUNC-M5-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 47 | `THPT-G11-CHV-B16-P07` | `TOP-FUNC-M5-O09` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 48 | `THPT-G11-CHV-B17-C02` | `TOP-FUNC-M5-O09` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M5/TOP-FUNC-M5-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 49 | `THPT-G11-CHIX-B31-C01` | `TOP-FUNC-M6-O01` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 50 | `THPT-G11-CHIX-B31-P01` | `TOP-FUNC-M6-O01` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 51 | `THPT-G11-CHIX-B31-C04` | `TOP-FUNC-M6-O02` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 52 | `THPT-G11-CHIX-B31-P05` | `TOP-FUNC-M6-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 53 | `THPT-G11-CHIX-B31-P06` | `TOP-FUNC-M6-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 54 | `THPT-G11-CHIX-B31-C07` | `TOP-FUNC-M6-O03` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 55 | `THPT-G11-CHIX-B31-P08` | `TOP-FUNC-M6-O03` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 56 | `THPT-G11-CHIX-B32-C03` | `TOP-FUNC-M6-O04` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 57 | `THPT-G11-CHIX-B32-P04` | `TOP-FUNC-M6-O04` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 58 | `THPT-G11-CHIX-B32-C06` | `TOP-FUNC-M6-O05` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 59 | `THPT-G11-CHIX-B32-P09` | `TOP-FUNC-M6-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 60 | `THPT-G11-CHIX-B32-C12` | `TOP-FUNC-M6-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 61 | `THPT-G11-CHIX-B32-P13` | `TOP-FUNC-M6-O06` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 62 | `THPT-G11-CHIX-B33-C01` | `TOP-FUNC-M6-O07` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 63 | `THPT-G11-CHIX-B33-P03` | `TOP-FUNC-M6-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 64 | `THPT-G11-CHIX-B31-C09` | `TOP-FUNC-M6-O08` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 65 | `THPT-G11-CHIX-B33-P05` | `TOP-FUNC-M6-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 66 | `THPT-G11-CHIX-CHIX-C01` | `TOP-FUNC-M6-O09` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 67 | `THPT-G11-CHIX-CHIX-P01` | `TOP-FUNC-M6-O09` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M6/TOP-FUNC-M6-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 68 | `THPT-G12-CHI-B01-C02` | `TOP-FUNC-M7-O01` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 69 | `THPT-G12-CHI-B01-P02` | `TOP-FUNC-M7-O01` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 70 | `THPT-G12-CHI-B01-C04` | `TOP-FUNC-M7-O02` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 71 | `THPT-G12-CHI-B01-P04` | `TOP-FUNC-M7-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 72 | `THPT-G12-CHI-B02-C02` | `TOP-FUNC-M7-O03` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 73 | `THPT-G12-CHI-B02-P03` | `TOP-FUNC-M7-O03` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O03/PRACTICE` | PROPOSED_NOT_LIVE |
| 74 | `THPT-G12-CHI-B03-C01` | `TOP-FUNC-M7-O04` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 75 | `THPT-G12-CHI-B03-C02` | `TOP-FUNC-M7-O04` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 76 | `THPT-G12-CHI-B03-C03` | `TOP-FUNC-M7-O04` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O04/PRACTICE` | PROPOSED_NOT_LIVE |
| 77 | `THPT-G12-CHI-B03-C04` | `TOP-FUNC-M7-O05` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 78 | `THPT-G12-CHI-B03-P05` | `TOP-FUNC-M7-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 79 | `THPT-G12-CHI-B04-C03` | `TOP-FUNC-M7-O06` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 80 | `THPT-G12-CHI-B04-P03` | `TOP-FUNC-M7-O06` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 81 | `THPT-G12-CHI-B04-C02` | `TOP-FUNC-M7-O07` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 82 | `THPT-G12-CHI-B04-P04` | `TOP-FUNC-M7-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 83 | `THPT-G12-CHI-B05-C04` | `TOP-FUNC-M7-O08` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 84 | `THPT-G12-CHI-B05-P04` | `TOP-FUNC-M7-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 85 | `THPT-G12-CHI-B05-P05` | `TOP-FUNC-M7-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 86 | `THPT-G12-CHI-B05-P04` | `TOP-FUNC-M7-O09` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 87 | `THPT-G12-CHI-B05-C04` | `TOP-FUNC-M7-O09` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 88 | `THPT-G12-CHI-B05-C01` | `TOP-FUNC-M7-O10` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 89 | `THPT-G12-CHI-B05-C03` | `TOP-FUNC-M7-O10` | `TOPIC_PRACTICE_REUSE_OF_SGK_CORE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 90 | `THPT-G12-CHI-B05-P03` | `TOP-FUNC-M7-O10` | `TOPIC_PRACTICE` | `TOPIC/FUNC/M7/TOP-FUNC-M7-O10/PRACTICE` | PROPOSED_NOT_LIVE |
| 91 | `THPT-G11-TOP-FUNC-P01` | `TOP-FUNC-M6-O02` | `TOPIC_PRACTICE_NEW_REVIEWED_SOURCE` | `TOPIC/FUNC/TOP-FUNC-M6-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 92 | `THPT-G11-TOP-FUNC-P02` | `TOP-FUNC-M6-O06` | `TOPIC_PRACTICE_NEW_REVIEWED_SOURCE` | `TOPIC/FUNC/TOP-FUNC-M6-O06/PRACTICE` | PROPOSED_NOT_LIVE |
| 93 | `THPT-G12-TOP-FUNC-P01` | `TOP-FUNC-M7-O01` | `TOPIC_PRACTICE_NEW_REVIEWED_SOURCE` | `TOPIC/FUNC/TOP-FUNC-M7-O01/PRACTICE` | PROPOSED_NOT_LIVE |
| 94 | `THPT-G12-TOP-FUNC-P02` | `TOP-FUNC-M7-O09` | `TOPIC_PRACTICE_NEW_REVIEWED_SOURCE` | `TOPIC/FUNC/TOP-FUNC-M7-O09/PRACTICE` | PROPOSED_NOT_LIVE |
| 95 | `HPT-G10-CHVI-WRI-15-01` | `TOP-G10-FUNC-O03` | `TOPIC_WRITTEN` | `TOPIC/FUNC/G10/WRITTEN` | PROPOSED_NOT_LIVE |
| 96 | `HPT-G10-CHVI-WRI-15-02` | `TOP-G10-FUNC-O05` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/G10/WRITTEN` | PROPOSED_NOT_LIVE |
| 97 | `THPT-G11-CHI-W03` | `TOP-FUNC-M4-O05` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M4/WRITTEN` | PROPOSED_NOT_LIVE |
| 98 | `THPT-G11-CHVI-B20-W01` | `TOP-FUNC-M4-O08` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M4/WRITTEN` | PROPOSED_NOT_LIVE |
| 99 | `THPT-G11-CHVI-B20-W02-ANCHOR` | `TOP-FUNC-M4-O10` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M4/WRITTEN` | PROPOSED_NOT_LIVE |
| 100 | `THPT-G11-CHV-B16-W01` | `TOP-FUNC-M5-O01` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M5/WRITTEN` | PROPOSED_NOT_LIVE |
| 101 | `THPT-G11-CHV-B16-W02-ANCHOR` | `TOP-FUNC-M5-O04` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M5/WRITTEN` | PROPOSED_NOT_LIVE |
| 102 | `THPT-G11-CHV-B17-W01` | `TOP-FUNC-M5-O06` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M5/WRITTEN` | PROPOSED_NOT_LIVE |
| 103 | `THPT-G11-CHV-B17-W02-ANCHOR` | `TOP-FUNC-M5-O07` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M5/WRITTEN` | PROPOSED_NOT_LIVE |
| 104 | `THPT-G11-CHIX-B31-W01` | `TOP-FUNC-M6-O03` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 105 | `THPT-G11-CHIX-B31-W02` | `TOP-FUNC-M6-O02` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 106 | `THPT-G11-CHIX-B31-W03` | `TOP-FUNC-M6-O01` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 107 | `THPT-G11-CHIX-B32-W01` | `TOP-FUNC-M6-O04` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 108 | `THPT-G11-CHIX-B32-W02` | `TOP-FUNC-M6-O05` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 109 | `THPT-G11-CHIX-B32-W03` | `TOP-FUNC-M6-O06` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 110 | `THPT-G11-CHIX-B33-W01` | `TOP-FUNC-M6-O08` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 111 | `THPT-G11-CHIX-B33-W02` | `TOP-FUNC-M6-O07` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 112 | `THPT-G11-CHIX-B33-W03` | `TOP-FUNC-M6-O09` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M6/WRITTEN` | PROPOSED_NOT_LIVE |
| 113 | `THPT-G12-CHI-B01-W01` | `TOP-FUNC-M7-O02` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 114 | `THPT-G12-CHI-B01-W02` | `TOP-FUNC-M7-O01` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 115 | `THPT-G12-CHI-B02-W01` | `TOP-FUNC-M7-O03` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 116 | `THPT-G12-CHI-B02-W02` | `TOP-FUNC-M7-O03` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 117 | `THPT-G12-CHI-B03-W01` | `TOP-FUNC-M7-O04` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 118 | `THPT-G12-CHI-B03-W02` | `TOP-FUNC-M7-O05` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 119 | `THPT-G12-CHI-B04-W01` | `TOP-FUNC-M7-O07` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 120 | `THPT-G12-CHI-B04-W02` | `TOP-FUNC-M7-O06` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 121 | `THPT-G12-CHI-B05-W01` | `TOP-FUNC-M7-O09` | `TOPIC_WRITTEN` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 122 | `THPT-G12-CHI-B05-W02` | `TOP-FUNC-M7-O10` | `TOPIC_WRITTEN+ANCHOR_TAG` | `TOPIC/FUNC/M7/WRITTEN` | PROPOSED_NOT_LIVE |
| 123 | `THPT-G10-B15-P04` | `TOP-G10-FUNC-O05` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O05/PRACTICE` | PROPOSED_NOT_LIVE |
| 124 | `THPT-G10-CHVI-APP-A1` | `TOP-G10-FUNC-O02` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O02/PRACTICE` | PROPOSED_NOT_LIVE |
| 125 | `THPT-G10-CHVI-APP-A2` | `TOP-G10-FUNC-O07` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O07/PRACTICE` | PROPOSED_NOT_LIVE |
| 126 | `THPT-G10-CHVI-APP-A2` | `TOP-G10-FUNC-O08` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O08/PRACTICE` | PROPOSED_NOT_LIVE |
| 127 | `THPT-G10-CHVI-APP-B3` | `TOP-G10-FUNC-O10` | `TOPIC_PRACTICE` | `TOPIC/FUNC/G10/TOP-G10-FUNC-O10/PRACTICE` | PROPOSED_NOT_LIVE |

## D1_D6_EVIDENCE

**R14 SCOPE NOTE:** Phần dưới kế thừa chứng cứ R18 đã được review; các bổ sung R11/R12 không tự nhận Academic/PED PASS trên nguồn R14. Cần kiểm độc lập/đóng delta đúng quy định trước READY.


- D1/D2: exact reviewed M1–M7 content in public R18, original why/meaning/conditions/EX/First Try.
- D3: 48 outcome-specific item-anchor routes, source library R12; 4 differentiated original public practice items registered in R13 to original candidate source without retyping source math.
- D4: 28 historical Written source references (Anchor only a role/tag), original rubric unchanged, two G10 original HPT canonical Written have verified underlying source and rubric; RELEASE must preserve exact canonical identifiers.
- D5: original G10 graph hook, M4–M6 original G11 SVG and M7 original G12 ChI SVG; math & reading guidance, actual accessible rendering remains RELEASE.
- D6: source-route HELP references by outcome, original preconditions/failure explanation and remediation. No exposed public practice item supplies protected Topic mastery.

## PED1_PED6_EVIDENCE

**R14 SCOPE NOTE:** Phần dưới kế thừa chứng cứ R18 đã được review; các bổ sung R11/R12 không tự nhận Academic/PED PASS trên nguồn R14. Cần kiểm độc lập/đóng delta đúng quy định trước READY.


- PED1_MOTIVATION: Original independent-review-PASS source WHY for each concept M1–M7; R18 clear student flow.
- PED2_PREREQUISITES: G10→G11→G12 bridges and authentic prerequisites.
- PED3_MEANING_FIRST: Mathematic concept before formula, derivative and limit by intuition and validity conditions.
- PED4_EXPLAINED_VISUAL: Original graph/tan/cot/limit/derivative/optimization figure descriptions in R18/R15.
- PED5_REASONED_EXAMPLES: Original worked examples explain choice of method, domain and non-applicable cases.
- PED6_FIRST_TRY_REMEDIATION: Public formative self-attempt and source HELP route, no Mastery; private official test separate.

## QUALITY_Q01_Q18_EVIDENCE

**R14 SCOPE NOTE:** Phần dưới kế thừa chứng cứ R18 đã được review; các bổ sung R11/R12 không tự nhận Academic/PED PASS trên nguồn R14. Cần kiểm độc lập/đóng delta đúng quy định trước READY.


Single normative source: `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` effective **v1.2.0**. This is an evidence trace table, NOT a different math standard. The same Q01–Q18 govern AUTHORING and RELEASE.

| Q_ID | LESSON_OUTCOME_IDS | AUTHORING_EVIDENCE | INDEPENDENT_REVIEW_RECEIPT | RELEASE_RECHECK |
|---|---|---|---|---|
| Q01 | M1–M7, G10/G11/G12 KNTT S1 | Original source receipts in R10/R17, R18 covers unchanged taught material | Module Q18 accepted review chain | R1 S1/page & scope |
| Q02 | 48 reviewed outcome rows | R11 48-outcome map; R12/R15 shared source and lesson content | Module reviewer + private Q16 48/48 | R1/Q02 coverage |
| Q03 | M1–M7 | R18 Kiến thức D1/conditions source-exact R14 | Module Academic/PED PASS | AP1/AP4 |
| Q04 | M1–M7 | R18 original worked examples with conditions/WHY | Module Academic/PED PASS | AP1/AP2 |
| Q05 | 48 outcomes | R12 verified item bank; R15 graded practice matrix | Module reviewer accepted on unchanged public source | R1/AP4 |
| Q06 | G10/G11/G12 28 Written | R15 one Written/Anchor library, one original rubric each | Module reviewer accepted; G10 aliases noted | R1/Written consistency |
| Q07 | G10 graph; G11/G12 original SVGs | R12/R15 existing FIG references; not new HTML | Module source/PED review | AP3/alt/MathJax |
| Q08 | 48 outcomes | R12/R15 HELP routes with D6 | Module source/PED review | AP4 HELP links |
| Q09 | M1–M7 | R18 Kiến thức WHY motivation | Module PED PASS | AP4 |
| Q10 | M1–M7 | R18 prerequisite bridges G10–G12 | Module PED PASS | AP4 |
| Q11 | M1–M7 | R18 concept before formulas | Module PED PASS | AP1/AP4 |
| Q12 | M1–M7 FIG | R14/R15 reading figures/axes/domain | Module PED PASS | AP3 |
| Q13 | M1–M7 | R18 when/why methodology and limits | Module PED PASS | AP1/AP4 |
| Q14 | M1–M7 | R18 First Try followed by D6, no Mastery | Module PED PASS | AP4 |
| Q15 | selected public IDs | One original bank R12 + four R13 new pointers + 28 shared Written; THIS handoff matrix | Module Q15 reviewed under correct source; no cloning | R1 runtime ID/version/placement compatibility |
| Q16 | Private full Topic assessment | R16 owner-held 30 question 48-outcome SHA-only custody; no private content Git | R18 Q18 private assessment PASS receipt | R4 protected final-submit/source delivery |
| Q17 | Independent Topic path | R18 3 student sections; knowledge/practice self-contained; private Topic Readiness | Original PED + new Q16 PASS | AP4 complete journey |
| Q18 | Original modules + private R01 | Original Git receipts; R18 full source; Q18 new private receipt | Academic+PED PASS source-level | R1 source SHA/exact-head |

## REVIEW_SOURCE_RECEIPT

**R14 SCOPE NOTE:** Phần dưới kế thừa chứng cứ R18 đã được review; các bổ sung R11/R12 không tự nhận Academic/PED PASS trên nguồn R14. Cần kiểm độc lập/đóng delta đúng quy định trước READY.


- PUBLIC source `2340ea4975b37a457363eea59dd617070934983c` (R18) is a source-equivalent compilation of original independently ACCEPTED M1–M7 Academic/PED sources. No unreviewed new mathematical reasoning was added; R14/R15 source SHA lineage preserved. Original R01 topic plus M4–M7 verdicts accepted under owner [#787](https://github.com/TMA2015/self-learning-math/issues/787).
- PRIVATE owner-held `TOPIC_READINESS` 30-item ZIP SHA256 `59dba34b09695f8b127e10ab7ec8cc295b03293e9cbdeedf8bc2218799eb658a`. Owner-provided independent NotebookLM Q16 Academic PASS/PED PASS, P0=P1=P2=0, MINIMAL_DELTA=0, safe public report `d2e86bac887ff04cf41f5cc9a1fa3ca622a9ca63`. This is original source math review, not a claim of real encrypted server-side runtime.
- The private 30-question stems, keys, solutions and rubric remain OFF public GitHub. No new 6th permanent NotebookLM source or metadata-only re-review.

**NEW SOURCE BINDING REQUIRED:** R18 receipt `d2e86bac887ff04cf41f5cc9a1fa3ca622a9ca63` binds **only baseline R18** `2340ea4975b37a457363eea59dd617070934983c`. Current R14 `aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b` has full-part exact parity, but new R11/R12 pedagogical/material deltas do **not** inherit reviewer PASS; targeted valid current-source receipt is PENDING. Do not use a metadata-only document to impersonate reviewer endorsement.

## DELTA_LEDGER

- R14 and R15: derived `DELTA_B_SOURCE_EQUIVALENT` original concept and source-only public question routes; no changed formulas, conditions, solutions or rubric.
- R13: four canonical public item metadata registrations from already-reviewed M6/M7 source candidate headings, original math unchanged.
- R16 private 30-item assessment: `DELTA_C_ACADEMIC_MATERIAL` independent reviewer PASS and now CLOSED; private custody established by SHA only.
- A1–A7 in R17: no active academic/PED defect under the owner-provided correct reviewer verdict. Live Topic gate and client runtime remain outside AUTHORING.
- **HOLD: V2 TOPIC support:** approved TYPE/standard-version compatibility absent in current repository script; DO NOT fabricate READY.

- **R11**: new pedagogical explanation, 25 SVG links, 4 lab pointers, concept-first and student `Tự thử` – classify by affected material, review target where the effective policy requires.
- **R12**: 99 proposed placement routes / 92 distinct public source IDs, 28 Written and 14 new/revised public activities; nine candidates pending Q15, private overlap comparison PENDING.
- **R13**: public student-facing Self-check instructions only; private R01 questions/answers/rubric unchanged.
- **R14**: exact-string compilation of R11/R12/R13 (three section markers, 3/3 content parity), one Git blob `aedd6ec7fa09aa4e1602d7cff8698e33cbcfd96b`; formatting/transport only, no new math.

## PRIVATE_RD1_CUSTODY_METADATA

`RD1_PRIVATE_COUNT = 30`, `TOPIC_OUTCOMES_COVERED = 48/48`, `PRIVATE_BANK_SHA256 = 59dba34b09695f8b127e10ab7ec8cc295b03293e9cbdeedf8bc2218799eb658a`. Separate owner-only question and answer/rubric files SHA listed in R16 safe receipt. `PRIVATE_OWNER_HELD = YES`, `PRIVATE_GIT_CONTENT = NONE`.
**No secure runtime asserted**. RELEASE must implement/verify restricted delivery with no feedback, keys, rubric or AI Tutor before Final Submit, guard exposure, never assign Mastery from formative practice or written self-comparison.

## AUTHOR_SIGNOFF

**R14 AUTHORING SIGNOFF: PENDING**. Trọn ba phần học liệu đã ghép và kiểm toán source/parity; chưa đủ cơ sở tuyên bố Academic/PED PASS cho tất cả nội dung **mới** R11/R12 hoặc Q15 9 candidates. Giữ nguyên **R18 Academic/PED PASS** trên blob `2340ea4975b37a457363eea59dd617070934983c` và private RD1 R01 Academic/PED PASS trên đúng owner-held snapshot. `CONTENT_READY=NO`. Không cho phép RELEASE dùng tài liệu này để tạo ready/manifest giả hoặc ghi Mastery.

## RELEASE_ACCEPTANCE

Draft RELEASE PR #799 đề xuất hỗ trợ `TOPIC/FULL_TOPIC_LEARNING_PATH` với chuẩn v1.2.0; chưa merge. Ở trạng thái hiện tại, source-lock transport một blob đã được chuẩn bị, nhưng **R14 reviewer receipt chưa khóa đúng new blob**, `ASSESSMENT_MODE=CLIENT_SELF_CHECK_NO_MASTERY` chỉ xác định fallback public, **không** kích hoạt private RD1; 14 public activities chưa được đối chiếu với owner-held 30 RD1; 9 candidates chưa được đăng ký canonical. RELEASE chịu trách nhiệm exact-HEAD CI, real-browser AP1–AP5, bảo vệ private answers, Final Submit và sự cho phép merge/deploy của owner. `NO_MERGE/NO_DEPLOY`.
