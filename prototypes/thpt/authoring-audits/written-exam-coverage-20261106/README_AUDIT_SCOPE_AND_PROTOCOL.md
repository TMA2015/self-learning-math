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


## CHECKPOINT 2026-11-06 — R04: official Ministry key confirmed; external solution conflict isolated

- Confirmed via Gov-linked PDF **official Bộ GD&ĐT Toán 2026 answer key**, one-page stamped 24-code table, issued 19/06/2026. The *official exam* itself was administered 11/06/2026. These **24 codes are variants of one national exam event**, not 24 independent exam source samples. Official key document was visually inspected; **file bytes/SHA and all question stems have not been secured**, so `OFFICIAL_QUESTION_OUTCOME_MAPPING=PENDING`.
- **Source reliability defect** (outside SLM): Drive-supplied `HN-DOE-2026-MOCK-L1` PDF SHA `1e7fde330bbd5e3dca6a61a6be3088752c73b7c2ae9f7e74eea328fdf82dfc40`, PDF pages 13–14, displays `2502` for 4x4 row/column constrained decorations despite its alternative reasoning and independent exhaustive enumeration both yielding `90`. Flag `EXTERNAL_REFERENCE_SOLUTION_CONFLICT_CONFIRMED` and quarantine **only the external answer/solution as evidence**, not the question's classification and **not the SLM 238 canonical cards**.
- Verified G10 ChVIII B24 accepted academic source blob `d4c839ef7fdcb324220de59e54e33ee37684cbcb`: permutation, choose-vs-arrange, adjacent-block self-try and D6 are **already taught**. An ordered-seating multiple-gap problem can remain a **compound transfer candidate** but is **not** evidence of absent permutation theory. Review actual D3 P04/P05/P06 plus other examples before any claim of a gap.
- **Primary Hanoi semester** PDF locators for Vạn Xuân G10/G12 HKI 2025–26 are retrievable as indexed text, but page-image API still reports `Cache miss`; retain `VISUAL_HOLD`, do not raise source reliability score. G12 mirrored PDF currently exposes **19 total pages** including ancillary solutions, whereas printed exam section says **8 pages**; file-page count and printed exam pagination must not be conflated.
- **QA boundary**: 238 unique IDs remain immutable (including eight historical `HPT-` IDs). No new Written, no re-review of PASS, no Topic implementation, no RELEASE/merge/deploy. R04 evidence: [official 2026 source and external mock QA note](OFFICIAL_2026_KEY_AND_EXTERNAL_MOCK_SOURCE_QA_R04.md).


## CHECKPOINT 2026-11-06 — R05: D3 item-level transfer audit without re-review

- Verified actual public reviewed formative sources rather than relying only on the **238 D4 Written** library: `8` G10 B24 Core/Practice records (blob `2ae62fada28913ec336b3507684408a1e05a3232`); `24` G11 B18+B21 Core/Practice records (blob `33cf4229baa63ac70b4ca1b640a5be8414ed54c1`); `27` G12 B02+B05 Core/Practice/Application/**4 already-counted Written** (blob `4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a`). **59/59 unique ID rows** at [R05 D3 exact-item crosswalk](D3_EXACT_ITEM_METHOD_CROSSWALK_R05.md); no new canonical item or D4 double counting.
- **Existing skills shown**, not retested for Academic/PED: G10 B24 P05 complement + P06 adjacent block (`ADVANCED`); G12 B02/B05 practical optimization with domain, boundary, price-demand and marginal-vs-discrete costs; G11 B18-P05 compound annual growth + B21-P06 strict year threshold. These are not necessarily the same as *multi-gap ordered seating*, *piecewise integer profit with a tax breakpoint* or *continuous parameter-fit exponential model*. **Method transfer remains PENDING**, not a proven gap.
- Found **2025–2026 ordinary-school G11 HKII** Hanoi corpus leads: Trần Nhân Tông (secondary transcription includes question fragments, 3-page paper code 115 claimed) and Việt Nam–Ba Lan (secondary listing and claimed PDF marking guidance). Added to [Exam Source Register](EXAM_SOURCE_REGISTER.md) with school-issuer PDF/page/answer-source **HOLD**. These are actual semester-test leads, **not** graduation mocks, exam outlines or specialist school exams.
- **QA checkpoint:** baseline 31+83+124 = **238 distinct ID**; all **4 D4 IDs in the 59-row R05 scan already exist** in the 238 baseline. No changed question/answer/rubric, no new source PASS, no website/RELEASE. `EXAM_PRIMARY_SOURCE_VERIFIED` remains pending on HKII papers, `FORMAL_GAP_REPORT=NONE`.

## CHECKPOINT 2026-11-06 — R06: verified *existing* G11 semester method practice; source-PDF HOLD

- **Scope pivot per owner priority:** normal Hanoi THPT **HKII G11 2025–2026** Trần Nhân Tông, not specialty schools or graduation mocks. Five **secondary** excerpt positions from one school paper have been classified at **method level**, not promoted to official school original PDF question evidence. [R06 excerpt-to-outcome matrix](HANOI_G11_HKII_NORMAL_SCHOOL_SOURCE_CROSSWALK_R06.md).
- Source-locked canonical counterparts: G11 B27 `FRUSTUM_VOLUME` already Core `C04`, Practice `P02` and Written `W02-ANCHOR`; G11 B31/33 velocity and acceleration already D3/D4; G11 B30 `AT_LEAST_ONE` & `MULTIPLY_INDEPENDENT` already D4; G11 B18/B21 compound growth and **strict integer-year threshold** already D3/D4. Football group-allocation probability and *time-of-max-velocity* transfer remain **compound-depth research candidates** only.
- **QA on R06:** 14 distinct canonical ID references verified against their Git source blobs, **7 existing D4 IDs already included in 238** + **7 D3 Core/Practice IDs**. This is **not 14 new Written**. Baseline remains **31+83+124=238** source-locked D4 IDs. No Academic/PED re-review or source answer/rubric modifications.
- **Corpus blocker:** Toanmath school exam mirror PDF could not be rendered/retrieved (`Cache miss`), no reliable page image/original issuer SHA. `HN-VNBL-2026-HK2-G11` still listing-only. Keep `PDF_VERIFICATION_HOLD`, **zero formal `COVERED` / `GAP` verdicts**, zero new Written proposals.
- **Next:** obtain official 3-page school paper code 115 and Hà Nội regular-school G10–12 term exams in 2022–2026; check exact original item numbers and figures, and cross-source D1–D4 (not just 238 D4) before any gap proposal. Future Topic tagging is a pre-agreed use of shared canonical resource, **not** a new architecture or RELEASE authorization.

## CHECKPOINT 2026-11-06 — R07: ordinary Hanoi G12 HKII source-to-lesson method audit

- [R07 G12 HKII school exam and official school source metadata](HANOI_G12_HKII_VNBL_AND_OFFICIAL_SCHOOL_META_R07.md) adds **3 task-type excerpts** attributed to **THPT Việt Nam–Ba Lan, Toán 12 HKII 2025–2026** in a Toanmath article dated 03/05/2026; **secondary text only**. The test's original school issuer PDF/pages and official printed question numbers have **not** been checked, so no `COVERED/COVERAGE_GAP` verdict.
- Positive source-locked method evidence: **G12 ChVI `THPT-G12-B19-W05`** already asks for Bayes with sensitivity/specificity and false-positive posterior, with /5 rubric explaining base rate; **G12 ChIV `THPT-G12-B13-W06`** already models variable *square* cross-sections by squared side length and integrates to get volume. Therefore "Bayes false-positive not taught" or "variable square-slice integral not practiced" are **false gap hypotheses** at the method-family level. Broader exam-equivalence still requires original question details.
- School profit case: G12 ChI B05 `A02/A03` already exercises price/domain and profit; D4 B02 `W02` has boundary-aware optimization; D4 B05 `W02` contrasts marginal and discrete cost. **The combined profit polynomial built from decreasing unit price + cubic total cost** still merits a multi-step transfer audit. Not a gap at this stage.
- **Primary publisher metadata located**: THPT Nguyễn Quốc Trinh's own site lists original **2023–24 HKII** Math attachments for G10/G11 and G12, but attachment PDF bytes/visuals are not accessible. **Curriculum-cohort gate** from `TT32/2018/TT-BGDĐT Art. 2`: G10 2022–23, G11 2023–24, G12 2024–25 first CT2018 cohorts. Thus 2023–24 G12 paper is **legacy program**; `OUT_OF_MODERN_G12_GAP_EVIDENCE`. G10/G11 2023–24 papers are eligible only once PDFs and math content verified. Time-range filter alone is insufficient.
- **QA:** baseline remains **31+83+124=238 unique D4**; R07 references **5 already-counted D4** and 2 D3 Application IDs, all found in source-lock; **0** new item/answer/rubric edits; **0** previously PASS snapshot reopened; **0** Topic implementation/RELEASE. Source proof gate remains `ORIGINAL_SCHOOL_PDF_QUESTION_VISUAL_PENDING`.

## CHECKPOINT 2026-11-06 — R08: actual printed G12 HKI essay locators (visual page HOLD)

- **Normal-school semester** corpus expanded by **2 distinct exam events** from THPT Phùng Khắc Khoan–Thạch Thất, Hà Nội, 2025–26 HKI: G12 **PDF text indexed** with code 123, **Part IV C1–C3 on printed exam pages 3–4/4 plus text-extracted marking guidance**; G10 secondary website reproduces **3 example excerpts without original printed question numbers**. The combined G12 PDF also contains code 345, which is **not another independent school paper event**.
- [R08 method-to-canonical crosswalk](HANOI_PKK_HKI_2025_26_G10_G12_R08.md): G12 drones → B08 3D point distance `W05/W06`; G12 grouped variance/std dev → B10 `W02/W03/W04` with close method match; G12 parabolic pond-to-island shortest bridge → B02 bounded optimization + B08 distance **component methods**, compound construction/derivative transfer pending. G10 crop acreage/labor → ChII `W04-ANCHOR` two-variable LP; G10 egg sample → ChV `W14-ANCHOR` ungrouped stats; G10 three-segment race → ChIII `W06-ANCHOR` triangle-law precursor, full time/geometric modeling pending.
- **Source custody boundary:** G12 PDF browser text and printed code/question refs are visible, but **all PDF screenshots failed `Cache miss`** and file-host byte download failed, so there is **no PDF SHA or visually confirmed formula/diagram/table/key**. G10 articles have only text excerpts. Both await **original school issuer and page-image QA**; no school-publisher full PDF file was authenticated. No `CORPUS_VERIFIED` or `COVERAGE_PASS`.
- **Academic scope:** 238 D4 canonical item IDs remain immutable; a described same-method family is not a full question-equivalence verdict and does **not** trigger an independent Academic/PED re-review. Proposed new items = **0**. No Topic implementation or RELEASE, merge/deploy. The most useful next test is multi-step real-world modeling **within** ordinary Hanoi HKI/HKII papers across multiple schools, combined with full D3/Core and source receipt review.

## CHECKPOINT 2026-11-06 — R09: primary school announcement and four-code PDF safeguards

- Located the **official school-publisher site** (THPT Phùng Khắc Khoan–Thạch Thất) announcing **“Đề và đáp án 3 kỳ thi cuối học kỳ I”** with seven attached files on **23/12/2025**. This upgrades the **school exam event/publisher announcement** to `PUBLISHER_METADATA_CONFIRMED`, **not** the third-party archived PDF byte origin. School detail/attachment access failed HTTP 502/Cache miss; no original school-issued file SHA/page images are verified.
- The already indexed **2025–26 G12 HKI secondary PDF** in fact contains **four** code variants `123/345/567/789`. Strict map key is `EVENT_ID + EXAM_CODE + SECTION + Q_NUMBER + SOURCE_SNAPSHOT + PAGE`. **Code 123** Part IV C1 island radius **15m**, **code 567** radius **10m** (different final bridge lengths), while **code 345** C1 is a *different river pump placement* context; four codes are **one school exam event**, not four independent exam papers for prevalence counting.
- Independent computation of the **code 123** parabola/distance polynomial from PDF text yields critical `x≈13.9177`, minimum squared center distance `≈768.0877`, bridge length `≈12.71m`; text extraction of third-party marking key may show an inconsistent intermediate number (approx 768.8), so tag `EXTERNAL_KEY_NUMERIC_VISUAL_HOLD`, **not** an SLM academic defect or a claim that school-publisher official answer is wrong. [Detailed R09 source/variant/numeric evidence](PKK_SCHOOL_ORIGINAL_INDEX_AND_FOUR_CODE_QA_R09.md).
- Additional **official school** HKI **2022–23** metadata lead dated **01/01/2023** listing G10–12 exams; G10 grade cohort meets CT2018 rollout, but G11/G12 still legacy at that time. Content PDFs for any of these cannot yet be inspected. Date-window + grade-specific curriculum filter both enforced.
- **QA scope unchanged:** **238 immutable canonical Written IDs** (31+83+124); zero item/answer/rubric edits, zero formal `COVERED/GAP` verdicts, no Academic/PED re-review, no source-to-Topic item clone and no RELEASE/deploy/merge. Priority remains original ordinary Hanoi HKI/HKII school tests 2022–26 and full item/outcome analysis.
