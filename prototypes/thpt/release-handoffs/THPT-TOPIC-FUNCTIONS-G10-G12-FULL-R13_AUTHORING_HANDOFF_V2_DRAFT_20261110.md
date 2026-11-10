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
ASSESSMENT_MODE: OWNER_HELD_PRIVATE_TOPIC_READINESS_R01_NOT_DEPLOYED
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
R11_R12_NEW_MATERIAL_VERDICT: NOT_INHERITED_FROM_R18
CONTENT_READY: NO
PUBLIC_SITE_INTEGRATION: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
BLOCKERS: R12_TO_PRIVATE_R01_EXPOSURE_AUDIT_PENDING; NEW_PUBLIC_R11_R12_RISK_CLEARANCE; Q15_NEW_PUBLIC_CANDIDATES_9_PENDING; TOPIC_RELEASE_INTAKE_790; SECURE_FINAL_SUBMIT_RUNTIME_QA_PENDING

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
