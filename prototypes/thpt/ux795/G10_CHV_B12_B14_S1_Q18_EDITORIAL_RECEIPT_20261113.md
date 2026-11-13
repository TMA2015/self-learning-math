# G10 Chương V B12–B14 · S1/Q18 ENRICHMENT_DELTA_RECEIPT · v3.1.0

**Ngày kiểm:** 13/11/2026 · **Lane:** RELEASE Knowledge đã phát hành, §X-C/§X-F/Q01–Q18, **không phải tác vụ AUTHORING Topic**.  
**Gói:** G10 SGK ChV B12, B13, B14 · **Baseline main:** `95c111b313886283bd8245babcc9ffdbfcc7c54f` · **PR:** [Draft #837](https://github.com/TMA2015/self-learning-math/pull/837).  
**Mode:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / RELEASE editorial self-audit; **không nhận là NotebookLM/independent reviewer PASS**.  
**Delta:** `DELTA_C_ACADEMIC_MATERIAL` chỉ trong Knowledge ba bài (đổi trình tự PED, bổ sung diễn giải), `DELTA_A_UI` chỉ trong JS Golden; không thay câu/đáp án, Core, Practice, Written, chapter readiness, Q15/Q16, Mastery/Firebase/Gemini/THCS.
**Release status:** `SOURCE_SNAPSHOT_STAGED / ACADEMIC_SELF_QA_EVIDENCED / AP_R_FINAL_HEAD_PENDING / NO_MERGE_NO_DEPLOY`. Receipt tự nó không là bằng chứng deploy/P2.

## 1. S1 thật, phạm vi và giới hạn provenance

**Nguồn giáo khoa:** *Toán 10, Kết nối tri thức với cuộc sống*, Tập một, Nhà xuất bản Giáo dục Việt Nam; PDF sách do Mê Tải Sách lưu trữ tại:
https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf

Text của **PDF SGK** đã được đối chiếu trực tiếp với mục lục, đề mục và nội dung chính: B12 trang **73–77**, B13 **78–83**, B14 **84–88**; Chương V bài tập trang **89–90**. Web PDF screenshot API trả `cache miss`, tải trực tiếp file bytes thất bại, vì vậy **chưa chứng nhận chỉ số trang PDF tương ứng với trang in hay Git blob SHA của PDF**. Đây là giới hạn provenance, không suy diễn chỉ số trang PDF; các trang **in trong sách** và nội dung S1 được đọc từ văn bản PDF. Không dùng một nguồn web giải bài thay thẩm quyền S1.

**S1 mapping theo bài/outcome:**

| LESSON | SGK in | Original S1 section 1 / 2 / 3 (hiển thị tab 2 bằng 2.1 / 2.2 / 2.3) | Affected OUTCOME_ID |
|---|---|---|---|
| B12 | 73–77 | Số gần đúng / Sai số tuyệt đối và sai số tương đối / Quy tròn số gần đúng | `G10-B12-APPROX_CONCEPT`, `G10-B12-ABS_ERROR`, `G10-B12-REL_ERROR`, `G10-B12-ROUNDING` |
| B13 | 78–83 | Số trung bình và trung vị / Tứ phân vị / Mốt | `G10-B13-MEAN`, `G10-B13-MEDIAN`, `G10-B13-QUARTILES`, `G10-B13-MODE`, `G10-B13-INTERPRETATION` |
| B14 | 84–88 | Khoảng biến thiên và khoảng tứ phân vị / Phương sai và độ lệch chuẩn / Phát hiện số liệu bất thường hoặc không chính xác bằng biểu đồ hộp | `G10-B14-RANGE_IQR`, `G10-B14-VARIANCE`, `G10-B14-STDDEV`, `G10-B14-OUTLIERS`, `G10-B14-COMPARISON` |

Outcome IDs đối chiếu với nguồn V2 AUTHORING bất biến ở [PR #755](https://github.com/TMA2015/self-learning-math/pull/755), handoff Git blob `653316f9b937832308f244de71e27770b3ff062a`. Quy tắc/đáp án đã được duyệt cũ không bị thay thế.

## 2. Nguồn Markdown source-lock theo Git blob SHA

| LESSON | PUBLISHED_BASELINE_BLOB | EDITED_SOURCE_BLOB | FIRST_TRY_MOVED_TO_DISCOVERY | Three public worked examples | Two HELP |
|---|---|---|---:|---:|---:|
| B12 | `23b11a7263661ae6f6e2a06029307b490b145dfb` | `625e8223f036c53284eaada6d62a2d770768b0a1` | 4 | 3 | 2 |
| B13 | `c55d650f5b59c5260960de136e3c7fc26f219cdf` | `4555cb41808de199b440dbdcb58d1427ea76b004` | 5 | 3 | 2 |
| B14 | `894c31de396a2f6d6d30912399d6cad39f790130` | `12e52c62e254326d24c91dc3c050d6f05e2d9234` | 5 | 3 | 2 |

- **Q15 lock:** `THPT-G10-CHV-TRY01` đến `TRY14` xuất hiện đúng 1 lần mỗi câu; 14 **answer/body** `thpt-r4-first-try-answer` vẫn nguyên byte so với baseline, được so bởi script; 6 `HELP-G10-B12/13/14-01/02` bất biến; tab 3 giữ 9 ví dụ, tab 4 giữ sáu D6. Không có canonical item mới. Các prompt hiển thị thêm trước câu Tự thử là cách dẫn dắt nguồn S1 tương đương với đáp án đã duyệt, không thay đáp án.
- **Golden 1.x/2.x/3.x/4.x:** Tab 1 gồm Cùng tìm hiểu → Ví dụ trực quan (đưa 14 First Try/chuỗi WHY-PED đã có từ tab 2 sang) → thuật ngữ/outcome; tab 2 đi thẳng vào `2.1`, đúng ba đề mục chính thức, không lặp `Kiến thức SGK`; tab 3/4 vẫn cùng source. JS chỉ trang trí chủ đề Golden giống B01–B11, không thay nguồn toán.
- **Figure 1–3:** B12 SVG `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52`, B13 SVG `acaf49296892e35c48fb2b4a5b335a7d26643336`, B14 original dispersion SVG `98ab8375e496468e8f7fbc79f6cacc03d08a4645` giữ nguyên. **B14 thêm hình nguồn** `docs/assets/images/thpt/G10_B14_BOXPLOT_S1_Q18_ENRICHMENT_20261113.svg`, Git blob `60627e01f44dcf1e4c8e4aab5ec9617bece28888`, alt/title/desc/figure caption, không thay hình đã duyệt.

## 3. Chứng cứ tự kiểm toán học, điều kiện, PED (Delta C affected-scope)

| Lesson / outcome | S1 & toán tự kiểm thực chất | PED/khắc phục |
|---|---|---|
| B12 `APPROX_CONCEPT` / `ROUNDING` | B12 SGK in 74 ghi máy tính cầm tay cho biểu thức vô tỉ và trang 77 bài 5.3; bổ sung hướng dẫn `sqrt(2)`: `1.4135²=1.99798225 < 2 < 2.00081025=1.4145²` nên sai số `|sqrt(2)-1.414| < 0.0005`. Không lấy độ dài màn hình làm chứng cứ độ chính xác; làm tròn theo hàng/giới hạn sai số. | Câu Tự thử TRY01,03,04 có prompt rõ trước khi mở answer nguyên bản; nối D6. |
| B12 `ABS_ERROR` / `REL_ERROR` | Giữ `Delta_a=|a-abar|<=d` khi chưa biết số đúng; `a !=0` khi lấy tỉ số `Delta_a/|a|`; dấu `<=` cho cận chứ không suy bằng. Hình khoảng đo cũ giữ, chỉ đặt hướng dẫn đọc hình sau ảnh thật. | Phân biệt sai số thực và độ chính xác, tình huống đo trước kí hiệu; 4 First Try đều về tab 1. |
| B13 `MEAN/MEDIAN/QUARTILES` | Sắp mẫu trước khi lấy Q2, bỏ phần tử Q2 ở n lẻ theo KNTT; n chẵn lấy trung vị mỗi nửa; trung bình bảng tần số chia tổng tần số, không chia số giá trị phân biệt. Hình tứ phân vị và 3 ví dụ cũ giữ. | 5 First Try về tab 1; prompt cho TRY05/06 có dữ kiện phù hợp answer, hoàn thiện đường tự đối chiếu và sửa lỗi. |
| B13 `MODE/INTERPRETATION` | S1 B13 trang 82: nếu **mọi giá trị phân biệt có cùng tần số**, mẫu không có mốt; không chỉ trường hợp tần số bằng một. Nhiều mốt chỉ khi có nhiều giá trị đồng hạng tần số cao nhất **và** không phải tất cả giá trị đều đồng tần số. | Bài có giá trị cực trị ưu tiên trung vị; thêm prompt TRY08/09, không đổi lời giải. |
| B14 `RANGE_IQR / VARIANCE / STDDEV` | `R=max−min`, `IQR=Q3−Q1`. S1 trang 86 định nghĩa `s²=sum((x−mean)²)/n`, **có thêm chú ý** `hat{s}²=sum((x−mean)²)/(n−1)` cho `n>1` (khác đại lượng). Không nói SGK tuyệt đối không có mẫu số `n−1`; câu hỏi về `s²` vẫn chia cho `n`. Đơn vị `s²` là đơn vị bình phương, `s` cùng đơn vị dữ liệu. | Đưa 5 First Try về tab 1; prompt minh họa mẫu `2,4,6`, `2,2,6,6`, không đổi original answers. |
| B14 `OUTLIERS/COMPARISON` | S1 trang 87–88: bất thường khi `x<Q1−1.5 IQR` hoặc `x>Q3+1.5 IQR` (bất đẳng thức nghiêm ngặt). Hình tự vẽ mới với mẫu `1,2,3,4,5,6,7,8,20`: `Q1=2.5`, `Q2=5`, `Q3=7.5`, `IQR=5`, hàng rào `−5,15`, outlier duy nhất `20`; râu tới **quan sát không bất thường** cực trị `1,8`, không đồng nhất râu với hàng rào. Chưa có chứng cứ giá trị bất thường là chắc chắn ghi sai, nên yêu cầu kiểm bối cảnh. | Hình được đặt **trước** câu hướng dẫn đọc; thêm prompt TRY13, giữ D6 câu cũ và không clone một canonical item. |

**P0/P1 học thuật phần thay đổi:** không phát hiện sau phép tính, điều kiện, S1 section/source mapping, ID/answer-body checks trên chính ứng viên; **đây là QA tự ký cho phần thay đổi, không phải reviewer độc lập**. Nếu test ngữ nghĩa/toán/figure/browser thất bại thì tự hạ xuống `Q18_SUBSTANTIVE_HOLD` và sửa đúng phần, không xóa gate.

## 4. Nguyên tắc chốt cổng phát hành

**CONTENT_MATH_PED_SOURCE:** source SHA mỗi B12–B14 khớp bảng; chính xác SGK in/3 đề mục, toán điều kiện, câu hỏi Q15/answers/figures. `scripts/test-g10-chv-editorial-source.cjs` kiểm code, các trường hợp làm sai ID/SGK/SVG đều phải FAIL.  
**ASSESSMENT_DATA_SAFETY:** chỉ làm trang Knowledge; 14 First Try là `SGK_PRE_CORE_FIRST_TRY_UNSCORED`; sáu D6 là `HELP`. Không mở private RD1, official Readiness/Final Submit/Mastery, không đổi dữ liệu học sinh.  
**RENDER_RELEASE_QA:** Golden 1.x–4.x, 44px four tabs, hình trước cách đọc, MathJax, canonical links/TOC/closed answer, 390/820/1440, 27/27 G10, G11/G12/THCS regression, exact final HEAD R4/Roadmap, P1 deploy đúng SHA, P2 Safari thật nếu owner yêu cầu. **Các workflow PASS trước lần sửa source này là lịch sử; phải chạy lại trên HEAD cuối.**

**Không được merge/deploy chỉ từ receipt này.** Quyền owner cho RELEASE thực hiện cải thiện ChV không thay điều kiện tất cả gate; trạng thái `DRAFT/P1_NOT_DEPLOYED/P2_NOT_TESTED` tới khi có bằng chứng hoàn tất.
