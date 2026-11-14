# AUTHORING QA — Topic Hàm số và đồ thị / pilot R01 (07/11/2026)

PACKET_ID: THPT-TOPIC-FUNCTIONS-VERTICAL-PILOT-PREP-R00-20261107
QA_MODE: AUTHOR_STATIC_AND_SELECTED_MATH_TESTS_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0, Q01–Q18
STATUS: SCOPED_PREFLIGHT_PASS / ACADEMIC_PED_REVIEW_PENDING / CONTENT_READY=NO
NO_RELEASE: YES
NO_MASTERY: YES
NO_PRIVATE_RD1: YES

## 1. Đối chiếu SHA từ GitHub branch theo đúng nguồn

| File Temp_ (ở thư mục topic-functions/) | Source Git blob | Mục đích |
|---|---|---|
| Temp_TOPIC_FUNCTIONS_VERTICAL_10_12_SCOPE_OUTCOME_PED_AUDIT_R00_20261107.md | fe314ae2c0fd03e9497ffec5dd008ccedeaea3bb | 7 mảng, 21 proposed outcomes, Q gap |
| Temp_TOPIC_FUNCTIONS_STUDENT_KNOWLEDGE_FLOW_PILOT_R00_20261107.md | 256f6fc5899397701d85cbb801e4f2c20fbc99d4 | 7 mảng diễn giải, 9 Tự thử mở đối chiếu, có hàm chẵn/lẻ |
| Temp_TOPIC_FUNCTIONS_PRACTICE_AND_READINESS_BLUEPRINT_R00_20261107.md | 36dd0c52d2f1dabdb4e7245b94d3b78fda353bed | 7 họ bài và ví dụ luyện tập, self-check blueprint không chứa RD1 |
| Temp_TOPIC_FUNCTIONS_S1_DIRECT_PDF_VISUAL_RECEIPT_R01_20261107.md | ed429ebee3ef1d66009e1fcbb92414798a408a2a | 4 SGK scanned PDF: original SHA256, trang in và chỉ số PDF |

G10 historical v2.0 #672 source blob 57eaf0141a5db9bfba91f0e6c863fc7dcc638068 và reviewer-summary receipt 95e34644c4520adf748cfe3118d8726a5202e3e3 **bất biến**, Academic PASS vẫn chỉ dành cho G10 B15/B16 original snapshot. Không gán PASS đó cho lời dẫn mới hoặc các mảng G11/G12.

## 2. QA thực chạy, phân biệt bằng chứng và giới hạn

| Check | Kết quả | Giới hạn |
|---|---|---|
| SGK KNTT direct source identification | PASS, bốn PDF tải trực tiếp, SHA256 tính từ raw PDF, mở ảnh mục lục và trang mở bài | Chưa đọc toàn bộ từng trang/ý và SBT |
| Knowledge module count | 7 mảng văn bản (PASS về cấu trúc) | Không phải PASS Q01, Q02, D1 |
| First Try authoring controls | 9 HTML details mở + 9 đóng thực, plus một chuỗi details nằm trong inline code của ghi chú tác giả | Chưa chứng nhận UI browser/AP4 |
| Math delimiters | 228 mở và 228 đóng inline MathJax, 4 mở + 4 đóng MathJax display | Chưa nghiệm thu thực tế AP2 trên website |
| File source integrity | 4 GitHub fetch_file readbacks, 0 merge-conflict markers và 0 escaped-code-tick artifact | Không thay thế reviewer source SHA |
| Sample mathematics | SymPy 19/19 deterministic cases PASS sau khi sửa một phép kiểm bị lập trình sai trong script cục bộ (không có lỗi bài toán nguồn) | Chỉ xác minh 19 công thức/giá trị đã chọn, không phải QA hết Toán |
| Private readiness | Không thêm câu/đáp án/rubric private RD1 hay scoring runtime | Chưa chứng minh cơ chế bảo vệ RD1 khi tích hợp |

19 symbolic cases include: \(x^2-6x+8=(x-3)^2-1\); parabol vertex and endpoints; periodic tan/cot domain anchors; even and odd examples; quadratic restricted profit; removable limits \(\lim_{x\to2}(x^2-4)/(x-2)=4\), \(\lim_{x\to3}(x^2-9)/(x-3)=6\); quotient difference \(6+h\) and derivative at \(t=2\); \(x^3-3x\) critical values; \((2x+1)/(x-1)=2+3/(x-1)\) with derivative \(-3/(x-1)^2\); seven illustrative practice checks. 19/19 is NOT Academic PASS.

## 3. Gaps vẫn cần giải quyết theo Qxx

- **Q01/Q02, M4:** SGK 11 T1 B03 printed 22–30 (PDF 23–31) dạy hàm chẵn/lẻ, tính đối xứng, tuần hoàn, đồ thị sin/cos/tan/cot và tăng/giảm. Phần hàm chẵn/lẻ và miền tan/cot vừa bổ sung vào bản thảo; các nhánh kiến thức/hình/phương pháp khác chưa đủ full outcome.
- **Q01–Q04, M5:** mới giải thích lỗ đồ thị, giới hạn và liên tục kiểu cơ bản. Chưa đủ các loại giới hạn tại vô cực, một bên, điều kiện, các phương pháp và ứng dụng toàn SGK.
- **Q01–Q04, M6:** đạo hàm từ thương sai phân đã giải thích, thiếu bộ quy tắc, điều kiện các họ hàm, hình và bài tự luận đầy đủ.
- **Q01–Q08, M7:** cần các dạng khảo sát/tiệm cận/tối ưu khác, điều kiện phương pháp, SVG/đọc hình và ứng dụng có chiều sâu.
- **Q05/Q06/Q08/Q15:** đủ để minh họa UI và nhóm dạng, nhưng 7 câu practice đang là ví dụ nguồn **không có canonical ITEM_ID đã duyệt**; cần kiểm trùng và mapping đúng với bank SGK shared, D6 HELP ở tại trang Topic, không cần mở SGK.
- **Q16/Q17:** 12 private G10 R01 candidates KHÔNG chứng minh full Topic 10–12 independent Readiness; trang pilot 2 câu vẫn TECHNICAL_DEMO_ONLY và NO_MASTERY.
- **Q18/Q01:** biên bản SGK direct source có offset thật và SHA. Phải kiểm đọc đầy đủ từng trang khi hoàn thiện từng outcome, không lấy mục lục thay nội dung gốc; SBT chỉ là nguồn tham khảo dạng/độ sâu và chưa được kiểm trọn.
- **Q09–Q14:** ngôn ngữ thân thiện, concept-first được đề xuất theo bản chất từng mảng, **không có form/bố cục cố định**. Lời dẫn mới/đảo trình tự suy luận là Delta C và cần NotebookLM review đúng phạm vi.

## 4. Next gates — AUTHORING only

1. Hoàn thiện mỗi mảng Topic thành D1–D6/PED đầy đủ; học sinh học và luyện ngay trên **Topic**, không qua SGK.
2. Ma trận canonical OUTCOME/SKILL/ITEM/FIG/HELP cùng source S1 toàn trang, unique IDs và Written bank dùng chung.
3. Mới gửi NotebookLM review phần DELTA_C/new content với **đúng 5 Permanent Sources v2.1** và S1, file Temp_ thật + prompt 3–6 câu. Không tự gán Academic/PED PASS.
4. Khi và chỉ khi full scope PASS + Q01–Q18/A1–A7/V2 + một ready/manifest và REGISTER, AUTHORING mới bàn giao. RELEASE tự triển khai website/AP/R/CI/P1/P2.

CHECKPOINT: S1_ANCHOR_PASS / SELECTED_MATH_TESTS_19_OF_19_PASS / AUTHORING_CANDIDATE_R00 / TOPIC_FULL_CONTENT_READY=NO / NEW_ACADEMIC_PED= PENDING.
