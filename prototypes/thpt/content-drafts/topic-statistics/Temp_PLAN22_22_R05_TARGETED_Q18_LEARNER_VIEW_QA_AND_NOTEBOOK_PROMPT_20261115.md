# CĐ22 R05 · TARGETED AUTHORING QA / LEARNER-VIEW · 15/11/2026

**LANE:** AUTHORING Chuyên đề, **STANDARD:** SLM-THPT-QUALITY-ONE v3.1.0 Q01–Q18, dùng checklist 13 mục đã được chủ dự án chốt và cập nhật ngay tại Issue #864. **STATE:** `R05_SOURCE_RECONCILED / TARGETED_AUTHOR_SELF_QA_PARTIAL / Q18_CONTENT_CHECK_PENDING`. Không cấp CONTENT_READY mới, không mạo nhận reviewer PASS, không merge/deploy.

## I. Source SHA và provenance không được thay

- **R04 baseline:** `9627b7750125a82ea2e7808dc8463211830f997a`.
- **R05 learner-view Markdown:** `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R05_LEARNER_FIRST_FULL_CANONICAL_PROJECTION_20261115.md` · **Git blob `0762cc67491965a4bab700aa1d33937aa3bf7cb6`**.
- **9-item public self-check offline demo:** `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R05_PUBLIC_SELF_CHECK_LOCAL_DEMO_20261115.html` · **Git blob `a2dc982d21e352d3ff9d175f19072a8f5cb3ee05`** (chỉ chứng minh chức năng trong bản minh họa, không phải website đã hoạt động).
- **107 old canonical references:** G10 `49502fe39cf0a67f6a3e973a77f94164150637a7` (27); G11 `4ea8df2ca2682d9fac8b1556852334af336930a5` (32); G12 `4e8e462a5c2243583be8c71625a9be3095e48c7b` (48). **7 extension canonical:** `c222f9c8ef2c3b34caf4f6d6c33fa88f960471c3`. **Index:** `51a6e99587187838aea61c5c72108adae7874d1d`.
- R05 **materializes a learner-facing, read-only display projection** of these canonical public items. It is **not a fifth canonical bank** or permission to edit stems/keys/rubrics in a second place. Every display block carries `DISPLAY_ONLY` with original item ID and original blob in a **non-rendered HTML comment**. Any future change must regenerate from its single canonical source and re-run parity, not edit the projection as authority.

## II. 13 yêu cầu: learner-view QA đúng phần mới

| Check (Issue #864) | Kết quả chính trên R05 | Giới hạn |
|---|---|---|
| 1 Kiến trúc | PASS source: 3 phần, 114 câu hiển thị + 9 câu công khai tự ôn | Chưa có website LIVE |
| 2 Đề mục | PASS source: 13 mục kiến thức 1.1–3.4, không heading 1.1.1 | Cần xem responsive khi RELEASE |
| 3 Khám phá | PASS source về nhãn ngắn, 13 đoạn dẫn trước khung | PED learner simulation đủ 39 outcome chưa được tái chứng minh trên R05 |
| 4 Phân loại | Giữ các khung toán sẵn có | Độ phù hợp từng khung phải kiểm ngữ nghĩa |
| 5 Điều kiện | `16` arithmetic checks trên số của 13 ví dụ thực và tình huống biên PASS | Chưa tương đương review toàn bộ 114 bài toán |
| 6 Ví dụ | PASS source: 13 Ví dụ có Đề bài độc lập/Lời giải, 1 Ví dụ mỗi module | Một số con số kế thừa từ lời dẫn R04, không nhân thành câu canonical |
| 7 Hình | Giữ 2 SVG tham chiếu cũ và vị trí các đoạn minh họa | Chưa xác nhận browser MathJax/SVG |
| 8 Vận dụng | PASS source: 13 câu độc lập, 13 `<summary>Đối chiếu</summary>`, đáp án giữ nguyên | Không tự ghi Mastery |
| 9 Luyện tập | PASS SOURCE PROJECTION: 114/114 stem + solution **verbatim**, 114/114 một ID display, 19/19 Written có rubric, 6 MCQ options đúng nguồn | Noncanonical materialized view, browser rendering belongs RELEASE |
| 10 Tự kiểm tra | PASS SOURCE: 9 prompt thật; offline demo yêu cầu điền cả 9, nhấn Final Submit mới render đáp án; không chấm điểm/ghi Mastery | **Không** phải TOPIC_READINESS chính thức; chưa QA browser hoặc thực thi trên website |
| 11 Ngôn ngữ | Loại WHY/tiền đề tại chỗ như nhãn, Mxx, outcome/ID và D6 lộ trong lời giảng; HTML comments không render | Chưa QA tự học trực tiếp trên thiết bị |
| 12 Dòng nguồn | Đúng một dòng SGK KNTT cuối toàn Topic; trang in/PDF/SHA chỉ ở đây | Chưa đóng PDF_PAGE_INDEX_UNVERIFIED |
| 13 Kiểm nghiệm | Có đối chiếu 114 câu với 4 immutable blobs và thực hiện `16` phép tính; **Q18 ký chưa hoàn thành** | Cần targeted full 39 outcome semantic pedagogic audit trước READY |

### Negative regression và an toàn đánh giá
- 114/114 nguồn DISPLAY_ONLY có **đề và lời giải nguyên văn canonical**, không nhân bản item ID; 27+32+48+7 =114. **6/6 MCQ có options đúng nguồn**.
- 19/19 Written có rubric; trong lần QA đầu phát hiện **12 rubric G12 chưa được đưa vào bản chiếu** và đã sửa trực tiếp từ canonical trên R05 blob hiện tại. Không tạo rubric mới.
- 13/13 câu Vận dụng/Đối chiếu và 13/13 Khám phá, nhãn Ví dụ/Đề bài/Lời giải nhất quán; không heading kiểu 1.1.1 và không Mxx trong tên học sinh nhìn thấy.
- 9/9 câu Tự kiểm tra đều reuse public item, **không có RD1 kín**, không chấm chính thức hoặc Mastery. Phiếu HTML chỉ thêm câu giải sau click Final Submit khi có đủ chín câu trả lời; câu hỏi và đáp án công khai, dữ liệu JS đọc được trong file nguồn demo nên **không phải cơ chế bảo mật held-out**.
- MathJax ký hiệu trong Markdown source được giữ; **không** gán AP2 browser PASS từ GitHub Preview.

## III. Phân định lại Q01 reference metadata

- **Nguồn KNTT gốc R01 đã ghi đúng** Toán 11 Tập Một ChIII B08 tr.58–61, B09 tr.62–68 (mốt ghép nhóm thuộc B09). S1 G11 R03 ledger có receipt PDF SBT trực tiếp; SBT PDF index = printed+1 trong đúng scan SBT đó.
- **Biên bản NotebookLM R2 của R03** gán kiến thức mốt ghép nhóm cho **ChV B14 tr.129–131**, mâu thuẫn đúng tên bài SGK KNTT (B14 ChIV là Phép chiếu song song). Giữ báo cáo reviewer nguyên gốc, chỉ ghi đính chính ngoài báo cáo.
- **Trạng thái:** `REFERENCE_METADATA_CORRECTION_PENDING`, `Q01_PDF_PAGE_INDEX_UNVERIFIED` trong vòng này. Không làm thành lỗi sai toán nếu chưa có chứng cứ, cũng không tự tuyên bố Q01 overall PASS vì còn phần chưa kiểm. Kiểm gốc PDF đúng lớp/tập khi có file thực để kiểm index, tách khỏi sửa nội dung Q05/Q17.

## IV. Phép tính tự kiểm trong phần biến đổi

1. G10 relative: PASS
2. G10 dispersion A: PASS
3. G10 dispersion B: PASS
4. G11 grouped mean: PASS
5. G11 median: PASS
6. G11 lower quartile: PASS
7. G11 upper quartile: PASS
8. G11 boundary grouped mode: PASS
9. G11 unequal widths 1: PASS
10. G11 unequal widths 2: PASS
11. G12 lower quartile: PASS
12. G12 upper quartile: PASS
13. G12 IQR: PASS
14. G12 estimated variance: PASS
15. G12 comparison A: PASS
16. G12 comparison B: PASS

## V. Cổng còn thiếu và bước tiếp

- `Q18_CONTENT_CHECK_PENDING`: phải đối chiếu **39 outcomes**, tính tự học độc lập, điều kiện từng khung và D6 dựa trên R05 exact blob; rà 114 câu theo mức cần thiết, không tự coi parity là Academic/PED PASS.
- `AP2/BROWSER_NOT_RUN`: SVG/MathJax/responsive, và prototype Final Submit cần được RELEASE kiểm riêng khi tiếp nhận. Offline demo **chưa được chạy browser tự động** ở lượt này nên kiểm của nó mới là kiểm source flow, không gọi UI PASS.
- `CONTENT_READY=NO` cho R05 cho tới khi hoàn thành signed exact-source Q18, một handoff V2/ready/REGISTER đồng bộ, không còn blocker nội dung. Bảo toàn R01 historical receipt/ready đúng R01 SHA.

### Prompt targeted NotebookLM (5 câu, nếu chủ dự án yêu cầu phản biện độc lập)

Dùng đúng năm Permanent Sources THPT v2.1 và SGK/SBT KNTT S1, đọc toàn bộ `Temp_PLAN22_22_R05_LEARNER_FIRST_FULL_CANONICAL_PROJECTION_20261115.md` cùng file QA này. Hãy xác minh bằng chứng Q01–Q18 theo từng mảng/outcome, đặc biệt cấu trúc 13 ví dụ, 114 câu trình bày cho học sinh, điều kiện mốt và khả năng luyện tập–tự kiểm tra độc lập. Phân biệt lỗi tham chiếu SGK trong biên bản NotebookLM R2 cũ với lỗi nội dung toán thật sự của R05; không dùng sai ChV B14 để đánh giá kiến thức ghép nhóm G11. Đối chiếu việc 114 stem/solution/rubric chỉ là bản chiếu từ bốn nguồn canonical, và 9 câu public self-check không đủ chứng minh RD1 độc lập. Trả `Academic/PED verdict`, `SOURCE_RECEIPT`, danh sách P0/P1/P2 theo outcome/item và `MINIMAL_DELTA` đúng phần cần sửa; không tự chuyển thành CONTENT_READY hay website PASS.
