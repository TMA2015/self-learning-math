# Kiểm toán độ phủ 238 Written canonical SGK theo đề thi phổ thông (AUTHORING, 06/11/2026)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
SCOPE: SGK_GRADES_10_11_12_D4_WRITTEN_PLUS_SGK_SUPPLEMENTS
BASELINE_TOTAL: 238
BASELINE_G10: 31
BASELINE_G11: 83
BASELINE_G12: 124
AUDIT_STATE: BASELINE_LOCKED_COVERAGE_ANALYSIS_PENDING
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_CHANGE_REQUEST: NONE
ACADEMIC_PED_REVIEW_REOPEN: NO
SOURCE_CONTENT_CHANGES: 0
TOPIC_NEW_CURRICULUM: NO
RELEASE_AUTHORIZATION: NO

## Quyết định chủ dự án 06/11/2026 — phạm vi không được suy rộng

1. **Giữ nguyên** toàn bộ 238 câu D4 SGK đã Academic/PED PASS và các Canonical `item_id`, đề/đáp án/lời giải/rubric; không xóa bài vì trùng dạng hoặc số lượng nhiều; 1–2 bài cùng dạng được giữ nếu giúp luyện tập. Đã duyệt không tái chấm toán hoặc PED. Chỉ sửa toán gốc khi có **sai học thuật có chứng cứ** theo Delta C đúng phạm vi.
2. **Chỉ bổ sung** câu mới sau khi có bằng chứng quan trọng về **dạng bài/phương pháp/mức vận dụng còn thiếu**; không đặt quota số câu hoặc nhân bản bài vì mục tiêu số lượng. Nội dung mới phải có `item_id` duy nhất và NotebookLM review đúng Delta C **chỉ phần mới**.
3. **Đề thi đối chiếu**: trong **5 năm gần nhất (2022–2026 cho đợt audit 2026)**. Chủ yếu **đề học kỳ I/II của các trường THPT thông thường tại Hà Nội**; đối chiếu thêm đề thi tốt nghiệp THPT quốc gia của Bộ GD&ĐT và đề khảo sát phổ thông Hà Nội; giữa kỳ chỉ dùng bổ trợ khi có giá trị. Ưu tiên đề thật/đề tham khảo có nguồn/ảnh PDF, năm học, trường, môn, lớp, loại đề, mã câu. Không lấy đề chuyên, HSG, Olympic, đội tuyển, tuyển sinh chuyên, chuyên đề luyện thi cực khó làm chuẩn cho giai đoạn này. **SAT/ATC và thi chuyên** hoàn toàn ngoài phạm vi hiện hành.
4. **SGK/SBT KNTT S1 là nguồn kiến thức/phạm vi**, đề thi là dữ liệu tham chiếu **năng lực/vận dụng và độ phức tạp**, không thành nguồn thay thế toán SGK hay một chuẩn chất lượng khác. Đề tốt nghiệp từ 2025 phản ánh CT GDPT 2018 tốt hơn; dữ liệu 2022–2024 có giá trị lịch sử nhưng phải kiểm mức tương thích chương trình trước khi đưa vào phân tích gap.
5. **Chia sẻ SGK ↔ Topic** là kiến trúc đã chốt tại Project Source `08` và Q15/Q17, **không phải thay đổi dự án**. Một nguồn canonical, nhiều `placement`/tag; liên kết Topic chỉ `CANDIDATE` trước review hành trình Topic riêng, không suy SGK PASS thành Topic PASS. Nhánh AUTHORING chịu trách nhiệm phân loại; RELEASE tích hợp bộ lọc/đường dẫn khi được chủ dự án phê duyệt riêng.
6. Không thay website, Firebase, Gemini, keys học sinh, RD1 private, Mastery, Final Submit hay Golden UI trong cuộc kiểm toán này.

## Baseline bất biến — đã rút trực tiếp từ GitHub V2 handoff

- [Toán 10: 31 distinct canonical D4 items](G10_WRITTEN_31_CANONICAL_BASELINE.md), 9 chương/B01–B27; G10 ChVI 8 D4 riêng, 2 Written chapter-END selfcheck khác **không cộng vào D4**.
- [Toán 11: 83 distinct canonical D4 items](G11_WRITTEN_83_CANONICAL_BASELINE.md): 67 ChI–IX và 16 SGK supplement pp99–109 (E01/E02 6 + year-end 10); 1 ChVIII integrated Written được gắn tại cấp chương, không ép về một bài.
- [Toán 12: 124 distinct canonical D4 items](G12_WRITTEN_124_CANONICAL_BASELINE.md): 98 ChI–VI, 10 trải nghiệm EXP01/02, 16 ôn tập cuối năm. Hai ChI END-only `THPT-G12-CHI-END-W01`, `THPT-G12-CHI-END-W02` tách riêng; không đếm như D4 học bài.
- **Không được** gọi 238 là số đã phát hành trên site: các lớp/chương có trạng thái AUTHORING/RELEASE khác nhau. Đây là `WRITTEN_LIB_BASELINE` duy nhất cho audit, không phải ngân hàng đề thi hay tổng số lần đặt câu.

## Dòng chứng cứ phân loại (read-only)

`EXAM_SOURCE_ID` → `EXAM_QUESTION_REF` → `PROBLEM_TYPE_ID`/\`OUTCOME_ID` → `METHOD_TAGS`/\`COMPLEXITY_EVIDENCE` → `MATCHED_CANONICAL_ITEM_IDS` → `COVERAGE_STATUS` → `TOPIC_PLACEMENT_CANDIDATE`.

- **Mức độ** dùng mô tả thao tác (trực tiếp / nhiều bước / phối hợp outcomes / mô hình hóa, điều kiện biên), **không tự tạo chuẩn hàn lâm mới hoặc điểm số pass**.
- **Độ phủ** `COVERED`, `PARTIAL_COVERAGE`, `COVERAGE_GAP`, `OUT_OF_SCOPE`, `SOURCE_UNVERIFIED`. Chưa đối chiếu câu cụ thể thì `UNMAPPED` / `PENDING`, tuyệt đối không khẳng định thiếu hay đủ.
- **Phương pháp**: chỉ tag phương pháp có thực trong đề hoặc đã được nguồn canonical hỗ trợ; phân biệt phương pháp giải khác với cách trình bày cùng phương pháp.
- **Lời giải/rubric**: chỉ mô tả các bước suy luận, điều kiện, điểm tự đối chiếu **đang được nguồn gốc hỗ trợ**, không sửa/cấp điểm lại rubric cũ. Nếu phát hiện sai toán, ghi `ACADEMIC_DEFECT_CANDIDATE` kèm `Qxx+LESSON+OUTCOME+ITEM+EVIDENCE`, chuyển targeted reviewer theo owner rules; không tái review toàn bộ.
- **Nguồn đề**: ưu tiên trang THPT/Sở/Bộ gốc, rồi bản lưu/cổng đề thứ cấp có link/nhận diện gốc; PDF/scan cần kiểm nội dung thực (năm, lớp, mã, phần, đề/đáp án) **trước khi dùng làm evidence**. Không tự động suy nội dung đề từ tiêu đề web.
- **Thi tốt nghiệp** có lựa chọn đáp án, đúng/sai, trả lời ngắn; có thể phân rã **yêu cầu suy luận** làm bộ đối chiếu Written nhưng không khẳng định nó là bài thi tự luận viết lời giải.

## Bộ hồ sơ tác nghiệp cần có

1. **Exam Source Register**: [EXAM_SOURCE_REGISTER.md](EXAM_SOURCE_REGISTER.md), nguồn gốc/xuất xứ/định danh, trạng thái xác thực. Chỉ chứng cứ đã đọc đề thực tế mới được gắn mã câu.
2. **Exam Problem-Type Map**: dữ liệu `EXAM_SOURCE_ID:QUESTION_REF → outcome + dạng + độ sâu + phương pháp`, có trích nguồn và snapshot/date. Chưa tạo verdict trong giai đoạn đầu.
3. **Written Coverage Matrix**: mỗi `canonical item_id` trỏ đến problem-type, năng lực, exam evidence và Topic candidate; không sao chép đề/lời giải/rubric sang nguồn thứ hai.
4. **Coverage Gap Report**: chỉ ghi các dạng thiếu đã đối chiếu thực chất theo outcome/đề; đánh giá tầm quan trọng theo tần suất nhiều năm và sức ảnh hưởng, không dùng kết quả trường chuyên để áp ngưỡng.
5. **Topic Shared Placement Map**: danh sách candidate `topic_id → item_id → placement/role`, Topic phải tự đủ kiến thức/luyện tập/tự kiểm tra và QA riêng, không tạo Core riêng cho Chuyên đề.
6. **Owner decision** trước khi viết mới bài, đổi rubric cũ hoặc mở nhánh Topic RELEASE; không merge/deploy trong AUTHORING.

## Các cổng kết luận

`BASELINE_LOCKED` (238 ID kiểm unique) → `CORPUS_VERIFIED` (từng đề xác minh PDF/nguồn) → `QUESTION_OUTCOME_MAPPED` → `COVERAGE_CLASSIFIED` → `GAP_PROPOSAL_OWNER_DECISION` → `TOPIC_PLACEMENT_CANDIDATES_READY`.

Không tuyên bố `COVERAGE_PASS`, không xác nhận Topic `CONTENT_READY`, không đề xuất quota bài mới hoặc chuyển RELEASE trước khi corpus và từng mapping thực sự hoàn thành.

## CHECKPOINT 2026-11-06 — R03: 4 visually inspected mock PDFs / 24 question loci

- Baseline **238 globally unique canonical D4 item IDs** independently re-counted: G10 31, G11 83, G12 124. Eight entries preserve historical `HPT-` canonical prefix; **do not silently rename them to `THPT-`**. This prefix distinction is *not* a duplicate or correction request.
- Four **2026 Hanoi graduation mock** PDF copies from the owner's Google Drive have been downloaded and rendered. Byte-level SHA-256, page count, Part III **6 short-answer loci/source** and diagrams/equations visually checked; 24 question locators distinct. The source-issuing school/Sở official publication copies are **not independently verified**. This is **not the same thing as** `CORPUS_VERIFIED`.
- [R03 24Q source custody + problem-type map](DRIVE_HANOI_2026_MOCK_PDF_VISUAL_24Q_R03.md); [R03 method/rubric comparison + pre-Topic candidates](EXAM_TO_CANONICAL_REASONING_AND_TOPIC_PREPLACEMENT_R03.md). All 14 distinct THPT canonical refs in R03 question matrix exist in frozen baseline. No new `item_id` or cloned item.
- Findings are **only research candidates**. In particular, constrained seating/row-column counting, finance amortization, piecewise economics and 3D locus may require multi-outcome transfer, but no source-complete D3/D4 scan or independent school semester replication has been finished; **no `COVERAGE_GAP` verdict and no proposal to add any question**.
- Corpus: graduation mocks = **secondary** evidence. Still prioritize ordinary Hanoi **semester HKI/HKII** tests (grades 10–12) and official Ministry graduation exams (not the third-party 88-item compilation). From 2022–2026 only; specialist-school papers/HSG/SAT/ATC remain out of scope.
- Publication/privacy: commit classification+PDF SHA/page only; **never** publicize the owner's private Drive identifiers or mirrored PDFs/answer keys. Topic crosswalk remains method/lesson association; actual topic IDs and placement roles are **PENDING** until owner authorizes the later Topic development step.

