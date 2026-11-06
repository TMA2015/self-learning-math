# R06 — Đề HKII Toán 11 THPT thường Hà Nội: excerpt → outcome → D3/D4 source-locked

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-G11-SEMESTER-R06-20261106
SCOPE: AUTHORING_READ_ONLY_EXAM_METHOD_COVERAGE
DATE: 2026-11-06
WINDOW: 2022-2026
EXAM_SOURCE_ID: HN-TNT-2026-HK2-G11
SOURCE_TYPE: ORDINARY_HANOI_G11_HKII
SCHOOL: THPT_TRAN_NHAN_TONG
SCHOOL_EXAM_TITLE_METADATA: 2025-2026;CODE_115;90_MINUTES;PRINTED_THREE_PAGES
ISSUER_ORIGINAL_PDF_VISUAL_VERIFIED: NO
ISSUER_ORIGINAL_PDF_SHA_VERIFIED: NO
SECONDARY_TEXT_EXCERPTS_REVIEWED: 5
PRIMARY_EXAM_QUESTION_NUMBERS_VERIFIED_BY_PDF: 0
CANONICAL_ITEM_IDS_RENAMED: 0
ACADEMIC_PED_REVIEW_REOPEN: NO
CANONICAL_D4_BASELINE: 238
NEW_ITEMS: 0
FORMAL_COVERAGE_GAP_VERDICTS: 0
TOPIC_IMPLEMENTATION: NO
RELEASE_PERMISSION: NO

## Corpus identity, grade/period and important limits

1. The [Toanmath secondary listing dated 04/05/2026](https://toanmath.com/2026/05/de-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi.html) labels a **normal Hanoi THPT grade 11 semester-2 assessment**, lists three relevant practical examples verbatim (football group probability; velocity-max movement; frustum pot soil volume), and embeds a PDF at `https://toanmath.com/toanmath-pdf/de-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi.pdf`. The direct mirrored PDF viewer/download produced `Cache miss`; neither PDF bytes, page screenshots nor checksum are accessible in this audit. **We do NOT invent the official question numbers** for these three excerpt cases.
2. Independent [Scribd](https://www.scribd.com/document/1038061230/De-Hoc-Ki-2-Toan-11-Nam-2025-2026-Truong-Thpt-Tran-Nhan-Tong-Ha-Noi) and [Thư viện nhà trường](https://thuviennhatruong.edu.vn/thuviendientu_moi/sach-338267-de-thi-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi) secondary text indexes show the heading `ĐỀ KIỂM TRA KHẢO SÁT HỌC KỲ 2, Khối 11, Mã đề 115` and identify **Phần I Câu 3** (three independent warning systems, probability at least one) and **Phần I Câu 9** (annual compound-interest account exceeding a threshold). Secondary plaintext may lose mathematical typography and is **not an official school-hosted original**. Treat those section numbers as *secondary-transcribed IDs*, not as PDF-verified original.
3. The different secondary listings appear to describe **the same school-paper event/code**, not three independent exams. One exam cannot establish regional frequency. All 5 rows below are **classification candidates** with source-locator and method evidence, *not* `COVERED` or `GAP` verdicts.
4. Do not treat another school's *revision outline* as a semester exam. Do not import third-party copyrighted exam question texts, images or answer keys into public canonical source.

## Method-level crosswalk: normal school paper, five identified problems

| Secondary excerpt locator (not confirmed PDF locator) | Problem type paraphrase | Outcome/skill and current approved item IDs | Actual existing source evidence (without re-review) | Evidence-level reading / unresolved exam transfer |
|---|---|---|---|---|
| `HN-TNT-2026-HK2-G11:WEB-EX-FOOTBALL` (Toanmath three extracted examples, original number unknown) | Randomly allocate 12 teams into three labeled groups of four; three designated guest teams must be in separate groups | `G11-B28-EVENT_MODEL`, `G11-B30-MULTIPLY_INDEPENDENT` as **contrast only**, G10 `G10-B24-CONSTRAINTS`; `THPT-G10-CHVIII-W24-ANCHOR-01` is constrained combination but **not** equal to this exam; relevant G11 `THPT-G11-CHVIII-B30-W01` is **independent** trials and should **NOT** be copied as an algorithm for dependent allocation | G11 ChVIII source teaches event/universe and warns draws without replacement are **not independent**. G10 B24 Written teaches constrained subgroup selection with an assigned role. No inspected D4 item demonstrates the *entire constrained 3-group allocation probability* | `SUBMETHOD_AND_INDEPENDENCE_WARNING_PRESENT; COMPOUND_ALLOCATION_PENDING`. Need G10 B23–24 D3, G11 ChVIII D3 and actual original exam before declaring gap |
| `HN-TNT-2026-HK2-G11:WEB-EX-MOTION` (Toanmath example, original number unknown) | Cubic position function; differentiate to obtain velocity, find the time of **maximum velocity**, then compute displacement to that time | `G11-B31-INSTANT_VELOCITY`, `G11-B33-ACCELERATION`; existing `THPT-G11-CHIX-B31-P09`, `THPT-G11-CHIX-B31-W03`, `THPT-G11-CHIX-B33-P04`, `THPT-G11-CHIX-B33-W03` | B31-P09 evaluates speed `|v|` from derivative; B31-W03 derives `v(t)` and checks time-specific sign/units; B33-P04 and W03 derive `a(t)=v'(t)` and interpret it. These **prerequisite methods are present**, not the same as optimizing quadratic `v(t)` before substitution into cubic `s(t)` | `DERIVATIVE_FOUNDATION_PRESENT; MAX_VELOCITY_COMPOSITE_PENDING`. Check other B33 D3, G12 optimization D3 and year-end integrative examples before inferring missing depth |
| `HN-TNT-2026-HK2-G11:WEB-EX-FRUSTUM` (Toanmath example, original number unknown) | Volume of **three** regular square-pyramid frustum flowerpots, top/bottom edge lengths and height given, convert cubic centimeters to cubic meters and round | `G11-B27-FRUSTUM_VOLUME`, `G11-B27-VOLUME_APPLICATION`; `THPT-G11-CHVII-B27-C04`, `THPT-G11-CHVII-B27-P02`, `THPT-G11-CHVII-B27-C05`, `THPT-G11-CHVII-B27-W02-ANCHOR` | B27-C04 & P02 explicitly calculate frustum volume from two **base areas** and perpendicular height; B27-W02-ANCHOR repeats and explains the limiting case; B27-C05 exercises volume conversion. The school excerpt additionally requires deriving square-base areas from given edges and multiplying by **three** pots, which are simple composed steps | `METHOD_FAMILY_AND_UNIT_SKILLS_EXPLICITLY_PRESENT; FULL_EXAM_STEP_EQUIVALENCE_PENDING_PDF`. No evidence for a new Written question from this one excerpt |
| `HN-TNT-2026-HK2-G11:SECONDARY-I-C3` (secondary transcript **Phần I Câu 3**) | Three independent fault-alert systems; probability at least one detects fault | `G11-B30-AT_LEAST_ONE`; `THPT-G11-CHVIII-B30-W02-ANCHOR`, `THPT-G11-CHVIII-B30-W01` | B30-W02 uses complement and independence for two devices; B30-W01 multiplies three independent events and explains why independence matters. This problem combines both existing submethods for **three systems** | `COMPLEMENT_AND_INDEPENDENT_MULTIPLICATION_PRESENT; COMBINATION_TRANSFER_PENDING`. Not a formal Academic judgement |
| `HN-TNT-2026-HK2-G11:SECONDARY-I-C9` (secondary transcript **Phần I Câu 9**) | Compound interest paid annually; find smallest integer number of years to exceed specified amount | `G11-B18-GROWTH_MODEL`, `G11-B21-REAL_CONTEXT`; `THPT-G11-CHVI-B18-P05`, `THPT-G11-CHVI-B21-P06`; G11 `THPT-G11-CHVI-B21-W02-ANCHOR` | B18-P05 practices annual capitalization and compound growth; B21-P06 explicitly finds first **integer year strictly exceeding** a savings threshold; B21-W02 emphasizes `>` vs `≥` and justified minimal integer solution | `SAME_COMPOUND_GROWTH_STRICT_THRESHOLD_METHOD_FAMILY`; evidence indicates relevant learning practice is present, though not claim entire exam source verified |

## Exact immutable learning-source custody for audit

| SGK grade/lesson/role | Git source file | Source blob SHA |
|---|---|---|
| G10 B24 D4 | `docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md` | `e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e` |
| G11 ChVII B27 D1–D4 | `prototypes/thpt/content-drafts/G11_CHVII_B22_B27_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md` | `afc8ec039213b87b4930f2d34d48c28d1fc6277f` |
| G11 ChVIII B28–B30 D1–D4 | `prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `fde4f8be91b5884b4559fef59fde46cf826c2bc9` |
| G11 ChIX B31–B33 D1–D4 | `prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `3fe3b1a12fac656b543ba3ba855c4fe0` |
| G11 ChVI B18, B21 D3 | `docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js` | `33cf4229baa63ac70b4ca1b640a5be8414ed54c1` |

Source snapshots have existing author receipts and NotebookLM PASS in the appropriate handoffs. This research **does not reassess** their mathematical validity or score old rubrics. The 'method family already practiced' statement is about **breadth of exposure**, not measurable learner outcomes or official Topic readiness.

## Priority for next gate

1. Retrieve or view the **actual 3-page school paper code 115**, verify visuals/formulas and exact Part III numbering; only then promote source to `PDF_QUESTION_LEVEL_VERIFIED` with PDF SHA/page.
2. Obtain original HKII PDF for THPT Việt Nam–Ba Lan, 2025–2026; currently only secondary listing, **zero question-level inspection**, do not infer its method distribution.
3. Continue grade 10/12 **ordinary-school HKI/HKII** verified-paper corpus (2022–2026), not all G12 graduation mock papers. Compare per-question required method steps to full D1/D2/D3/D4 **outcomes** before issuing any `COVERAGE_GAP`. Presence of a shared technique is not full problem-type coverage, but also not a curriculum failure.
4. No additions, deletes, modifications, new standards, Word/PDF uploads to public repo, Topic implementation, or RELEASE until owner-authorized decisions. Existing SGK/Topic one-canonical multi-placement architecture remains unchanged.

## G11 CHIX MOTION METHOD CLOSEOUT — school excerpt x S1 x full public source (06/11/2026)

STAGE_ID: G11_CHIX_B31_B33_MAX_VELOCITY_TO_DISTANCE_S1_ANCHORED_SCOPE_AUDIT
LANE: AUTHORING_READ_ONLY
RESEARCH_REFERENCE: HN-TNT-2026-HK2-G11:WEB-EX-MOTION
SCHOOL_EXAM_PDF_ORIGINAL_PAGE_SHA: HOLD
SOURCE_TYPE: SECONDARY_SCHOOL_PAPER_EXCERPT_ACCEPTED_FOR_METHOD_DISCOVERY
S1_BOOK_ORIGINAL_PDF_SHA_AND_PAGE_IMAGES: VERIFIED
G11_CHIX_PUBLIC_D2_CHECKED: 32_OF_32
G11_CHIX_PUBLIC_D3_CHECKED: 62_OF_62
G11_CHIX_PUBLIC_D4_CHECKED: 9_OF_9
FROZEN_G10_11_12_D4: 238
NEW_CANONICAL_OR_D2_CONTENT: ZERO
PED_ACADEMIC_REVERDICT: NOT_ISSUED
FORMAL_COVERAGE_GAP_VERDICT: NONE
STAGE: SOURCE_METHOD_COMPARISON_CLOSED

### I. Bài luyện thực tế → phép giải độc lập (không lấy mirror làm đáp án chính thức)

Nguồn tham khảo đã có trong R06, không tạo exam event mới: ToanMath 04/05/2026 https://toanmath.com/2026/05/de-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi.html . Bản trích thứ cấp mô tả vật chuyển động với \`s(t)=-t³+9t²+2t\` (m), t giây, yêu cầu **quãng đường từ t=0 đến thời điểm vận tốc đạt lớn nhất**. Vị trí câu/mã/đáp án của PDF gốc trường chưa có SHA/page, nên ghi \`WEB-EX-MOTION\`, không tự gán đề thi tự luận số mấy hay rubric trường.

Phân rã bắt buộc của dạng:
1. Nhận dạng \`s(t)\` vị trí theo thời gian trong **khoảng xét**; \`v(t)=s'(t)=-3t²+18t+2\` m/s, \`a(t)=v'(t)=18-6t\` m/s².
2. Cực đại **vận tốc có dấu**, không mặc nhiên là cực đại **tốc độ** \`|v|\`: \`v(t)=29-3(t-3)²\` đạt tối đa **29 m/s tại t=3 s**, vì hệ số bình phương âm; \`a(3)=0\` là điểm ứng viên, **không đủ riêng để chứng minh cực đại**.
3. Trên đoạn \`0≤t≤3\`, \`v(t)>0\` (từ 2 đến 29 m/s), vật **không đổi chiều**. Do đó quãng đường thực bằng độ tăng vị trí \`s(3)-s(0)=-27+81+6=60\` m. Nếu có đổi chiều, phải chia các khoảng theo dấu v và cộng trị tuyệt đối các độ dời.
4. **Giới hạn mô hình:** Dùng công thức cubic làm tổng “quãng đường đã đi” cho mọi \`t≥0\` không đương nhiên hợp lý vì v về sau có thể âm; bài hỏi chỉ đoạn [0,3] nên kết luận 60m không cần mở rộng thời gian vật lý. Không dùng kết quả 60 m làm đáp án trường đã xác minh.

Các con số này được kiểm toán độc lập bằng biến đổi đại số và symbolic differentiation, **không** được nhận là key trường.

### II. Đã đọc ảnh sách S1 thật, không cần kiếm thêm đề thi để công nhận dạng

**SGK Toán 11 KNTT Tập Hai**, file owner Drive gốc (18,642,213 bytes, **114 PDF pages**), SHA256 **14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491**:
- **Trang in 87 ↔ PDF trang 88** giải thích đạo hàm như tốc độ biến đổi tức thời, mối quan hệ vị trí – vận tốc; cổng phương pháp ở B31.
- **Trang in 96 ↔ PDF trang 97**, B33 định nghĩa \`a(t)=v'(t)=s''(t)\`, ví dụ tính vận tốc và gia tốc chuyển động.
- **Trang in 98 ↔ PDF trang 99**, bài **9.33**: tọa độ \`s(t)=t³−6t²+9t\`, yêu cầu vận tốc ở hai thời điểm, xác định dừng, gia tốc, **tổng quãng đường 5 giây đầu** và khoảng nhanh/chậm. Đề rõ ràng phân biệt quãng đường thật với độ dời và dấu vận tốc; ứng dụng nhiều bước đã nằm trong S1.

**SBT Toán 11 KNTT Tập Hai**, file owner Drive gốc (20,297,100 bytes, **126 PDF pages**), SHA256 **a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189**:
- **Trang in 60 ↔ PDF trang 61**, bài **9.16**: \`s(t)=10+√2 sin(4πt+π/6)\` cm, hỏi vận tốc tại thời điểm và **vận tốc cực đại**. Bài này có họ thao tác **lấy đạo hàm rồi tìm cực đại v**, tuy là chuyển động điều hòa lượng giác chứ không phải s(t) đa thức bậc ba.
- **Trang in 65 ↔ PDF trang 66**, bài **9.41**: từ vị trí bậc bốn có điều kiện **v=20 m/s**, tìm gia tốc ở thời điểm đó; đây là liên hệ v–a bằng hai lần đạo hàm, **không** phải cực đại vận tốc. Bài **9.39** cùng trang xác định tốc độ lúc chạm đất.
- Những nguồn S1 trên **đã xác minh ảnh đúng trang và checksum full bytes**, không chạy OCR; chỉ lưu locator/SHA/diễn giải, không đẩy PDF nguyên bản hoặc ảnh sách lên GitHub.

**Kết luận S1 đúng mức:** không được nói bài “tối đa vận tốc rồi tính quãng đường” là ngoại chương hay thiếu đạo hàm; SGK 9.33 và SBT 9.16 **chứa các thành phần quan trọng**, đồng thời dẫn tới **mức tích hợp nhiều bước** hợp lệ cho SGK G11 ChIX.

### III. Full canonical public source read — tránh nhận nhầm thiếu kỹ năng nền

Đã đọc **toàn bộ** \`prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md\` trên nhánh \`main\`, Git blob **3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0**; header source R00 còn trạng thái authoring/reviewer ở thời điểm tạo, không được tự nâng thành Content Ready hay deployed.

- **31 outcome public** (B31=10, B32=15, B33=5, integrated=1); **32/32 D2 worked examples**, **62/62 distinct D3 Core/Practice**, **9/9 D4 Written**. Đã đọc đủ đề/câu và những giải thích kỹ năng motion, không chỉ đếm số lượng.
- Các item **đã thật sự dạy**: \`EX-G11-CHIX-B31-05\` vận tốc và dấu; \`EX-G11-CHIX-B33-04\` gia tốc từ \`s''\`; \`THPT-G11-CHIX-B31-P09\` phân biệt v=-4 với **tốc độ** 4; \`THPT-G11-CHIX-B33-P04\` gia tốc của chuyển động bậc ba; \`THPT-G11-CHIX-B33-P05\` v>0, a<0 tức giảm tốc.
- **D4 đã có hai bài cùng nhóm chuyển động**, không nên nhân bản: \`THPT-G11-CHIX-B31-W03\` cho \`s(t)=t³−6t²+8t\`, tính v tại t=1,3, xét dấu/tốc độ; \`THPT-G11-CHIX-B33-W03\` cho \`s(t)=t³−9t²+24t\`, tính v, a tại t=1, giải thích dấu và chiều nhanh/chậm. \`THPT-G11-CHIX-B33-W01\` có thời điểm v=0 và giải thích gia tốc âm không luôn giảm tốc.
- **Chưa có trong các 32 D2 + 62 D3 + 9 D4 đã kiểm** một nhiệm vụ yêu cầu **lấy đạo hàm để cực đại chính hàm vận tốc v(t), xác nhận cực đại và khoảng hợp lệ, rồi dùng s(t) tính tổng quãng đường trên đoạn đến thời điểm đạt đỉnh vận tốc**. Đó là **ứng viên độ sâu tích hợp**, chứ không phải thiếu nội dung phương pháp đạo hàm hoặc một \`Qxx_FAIL\`.
- Có thể có các item khác ở các gói tổng ôn cuối năm hoặc liên-chương chưa xét; **không suy rộng thiếu trên toàn lớp 11** hoặc thiếu RD1 kín. Không dùng số lượng 9 D4 tự động kết luận đủ/thiếu năng lực.

### IV. Minimal targeted learning-depth proposal — nghiên cứu, không phải bài mới

**PROPOSAL_ID (không phải canonical ITEM_ID): \`P-G11-CHIX-VELOCITY_MAX_TO_DISTANCE-01\`.**

1. **Ưu tiên một D2/PED5 ví dụ tích hợp**, nằm ở B33 \`G11-B33-ACCELERATION\` / \`G11-B33-SIGN_INTERPRET\` và quay về B31 \`G11-B31-INSTANT_VELOCITY\`: tại sao lấy \`s'\` để được v, lấy \`v'\` tìm thời điểm ứng viên, **phải kiểm max của v** (không chỉ a=0), kiểm v có đổi dấu trước thời điểm đó không để tính **quãng đường**, đặt miền thời gian và đơn vị. D6 quay trực tiếp B31-P09 và B33-P04/P05. Tự thử trước Core không dùng lại chính câu đã mở lời giải hoặc D4 có sẵn.
2. **Không mặc định thêm D4** vì ChIX đã có **9 Written**, trong đó W31-03, W33-03 và W33-01 đều luyện chuyển động và đạo hàm; chỉ đề xuất **1 Written mới thật sự độc lập** khi owner muốn minh chứng năng lực tính cực đại rồi quãng đường và có reviewer kiểm **khác phương pháp sâu**, không chỉ đổi số của đoạn trường/sách.
3. **QA probe tự tạo, chỉ kiểm toán** (không đăng ký ID, không đưa lên ngân hàng): \`s(t)=−2t³+12t²+5t\` (m) cho \`t≥0\`. Khi đó \`v(t)=−6t²+24t+5=29−6(t−2)²\`, cực đại **29 m/s tại t=2s**; \`a(t)=24−12t\`, có a(2)=0; trên [0,2] v>0 nên quãng đường \`s(2)−s(0)=−16+48+10=42m\`. Test này kiểm **từ cực đại của vận tốc có dấu đến quãng đường**, khác cả số lẫn chuỗi luyện motion đang có.
4. **Chống sai sư phạm:** trường hợp v đổi dấu phải chia khoảng; \`a=0\` chỉ cho ứng viên cực trị chứ không bảo đảm cực đại; “vận tốc” có dấu, “tốc độ” không âm; yêu cầu quãng đường (không phải chỉ \`s(t*)\`) và miền vật lý phải giải thích, không dùng công thức không điều kiện.
5. Nếu chủ dự án cho phép thay nguồn, đây là **\`DELTA_C_ACADEMIC_MATERIAL\`** của đúng outcomes/items chịu tác động, phải có nguồn canonical, \`item_id\` duy nhất nếu sinh câu mới, Tự thử/D6/rubric phù hợp, QA học thuật & PED qua **đúng 5 Permanent Sources v2.1 của NotebookLM** và S1, khóa source/receipt SHA; không hồi tố review 238 D4 bất biến.

**CLOSED:** G11 ChIX vận tốc cực đại → quãng đường method-depth crosswalk; original S1 proof and full public-source evidence attached. **OPEN AS SEPARATE OWNER DECISION:** liệu có tạo D2/PED5 hay thêm D4 độc lập hay không; hiện **0 câu mới**, Draft #771 audit-only, no merge/deploy/RELEASE/Topic.
