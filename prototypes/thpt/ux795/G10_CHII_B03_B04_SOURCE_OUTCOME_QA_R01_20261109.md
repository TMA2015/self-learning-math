# UX795 · Toán 10, Chương II · B03–B04 R01 — source / outcome / QA

**Scope:** RELEASE phụ trách hoàn thiện trang Kiến thức SGK, không sửa Core/Luyện tập/Written/Tự kiểm tra. Đây là hai bản học liệu ứng viên DELTA_C, không phải Academic/PED PASS, CONTENT_READY hay website đã phát hành.

## 1. Xuất xứ và nguồn đã khóa

| Nguồn | Bài 3 | Bài 4 |
|---|---|---|
| SGK S1 | Toán 10 KNTT tập 1, B03; trang in 22–25 theo footnote canonical hiện hành, chưa tự đối chiếu PDF trang in ở lượt này | Toán 10 KNTT tập 1, B04; trang in 26–30 theo footnote canonical hiện hành, chưa đối chiếu lại PDF |
| Canonical tại main | docs/thpt-preview/sgk/chuong-ii/bai-3.md — blob a8ca8ff2a354df8cfa0292cf26051d0a8fe8edb0 | docs/thpt-preview/sgk/chuong-ii/bai-4.md — blob 69d4067e31ac714b451e9d1827e6081c8f9f2726 |
| Gemini | [Lớp 10 bài 3,4,5.docx](https://docs.google.com/document/d/1dUQjKprFbQKhwf19g7W2P1chryDKfwhs/edit): tình huống giới hạn sản xuất, hướng giải theo nửa mặt phẳng; text extraction mất công thức OMML nên không dùng làm nguồn kiểm công thức | Cùng DOCX: điều kiện đồng thời, giao miền, lựa chọn phương án; công thức đối chiếu canonical |
| Notebook v1 | [Toán 10 v1](https://drive.google.com/file/d/1Ickwg2M_9XghU5C602k-w5wqargqOadT/view) Bài 3: x+2y≤4, điểm thử O, biên liền | Cùng v1 Bài 4: cách giảng tối ưu trên miền tam giác; không gán lại các số đó cho hình canonical |
| SVG canonical | THPT_G10_B03_HALFPLANES_D5_R01.svg, blob a69e5ffabce6c77787ba3829471be7da97e21578 | THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg, blob 64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61 |
| HTML gh-pages khóa | b9134eacbe6573532a5a212f6b78e8260ecb5fa3 | 5b7a51b968fb5e91fbbcde778390cdac7e6f829d |
| Bản học liệu mới | [B03 R01](G10_B03_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) — blob 9332018cdcab6bf9ea12afe3c31b6edff1197b5e | [B04 R01](G10_B04_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) — blob b83dcf37c0e90e3d40e80777e047306d3ee1083a |
| Trang bốn tab A/B | [B03](UX795_G10_B03_CONTINUOUS_NARRATIVE_AB_R01.html) | [B04](UX795_G10_B04_CONTINUOUS_NARRATIVE_AB_R01.html) |

Bộ nguồn đầy đủ được lưu trong [sổ đăng ký Gemini/Notebook](SOURCE_REGISTRY_GEMINI_NOTEBOOK_20261109.md); không sao chép toàn bộ tài liệu người dùng lên GitHub public.

## 2. Mapping từng outcome

| Outcome | Đoạn kiến thức và chứng cứ mới | Canonical item |
|---|---|---|
| G10-B03-LINEAR_INEQUALITY | §2.1 dạng ax+by, a,b không đồng thời 0; phân biệt xy và hệ số bằng 0 | THPT-G10-CHII-TRY01 |
| G10-B03-POINT_TEST | §2.2 bảng thế A(2,2)=6, B(3,2)=7, C(0,0)=0 vào x+2y≤6 | THPT-G10-CHII-TRY02 |
| G10-B03-BOUNDARY | §2.3 SVG đúng hai trường hợp ≤ có biên và < không biên; (2,0) với 3x+y<6 trên biên bị loại | THPT-G10-CHII-TRY03 |
| G10-B03-HALFPLANE | §2.4 điểm thử phải ngoài biên, 3x-y<3 tương đương y>3x-3; O là nghiệm | THPT-G10-CHII-TRY04 |
| G10-B03-MODELING | §2.5 đơn vị, số lượng nguyên và điều kiện mẫu dương; 4x+6y≤120, (10,10) cần 100 phút | THPT-G10-CHII-TRY05 |
| G10-B04-SYSTEM | §2.1 điều kiện đồng thời; (2,3) đạt, (0,4) vi phạm x≥1 | THPT-G10-CHII-TRY06 |
| G10-B04-REGION_INTERSECTION | §2.2 miền giao; bài x,y≥0, x+2y≤6 có các đỉnh (0,0),(6,0),(0,3), khác hẳn hình tứ giác | THPT-G10-CHII-TRY07 |
| G10-B04-FEASIBILITY | §2.3 x≥3,y≥0 suy x+y≥3, trái x+y≤2 | THPT-G10-CHII-TRY08 |
| G10-B04-LINEAR_OBJECTIVE | §2.4 F=x+2y trên tam giác 2x+y≤6 có các giá trị 0,3,12 | THPT-G10-CHII-TRY09 |
| G10-B04-INTEGER_MODELS | §2.5 (7/3,7/3) không nguyên; F(2,2)=10, F(3,1)=11, chỉ so hai điểm không kết luận tối ưu | THPT-G10-CHII-TRY10 |

HELP_ID hiện hành giữ một lần: B03 HELP-G10-B03-01/02; B04 HELP-G10-B04-01/02. First Try vẫn là hoạt động tự mở đáp án trước Core; ID không được nhân bản giữa vị trí.

## 3. Đối chiếu điều kiện hình, công thức và ví dụ

- **B03 hình:** nửa trái x+2y≤4, biên qua (4,0),(0,2), lấy O; nửa phải 2x-y<1, tương đương y>2x-1, loại (1,1) trên biên. Hai hình chính xác ứng với hai ví dụ đã giải, **không** dùng làm hình của TRY02 x+2y≤6.
- **B04 hình:** hệ x,y≥0; x+y≤6; 2x+y≤8 cho tứ giác O(0,0), A(4,0), B(2,4), C(0,6); F=3x+2y bằng 0,12,14,12. Chỉ dùng hình cho hệ này, khác các bài TRY07, TRY09.
- **B04 bài toán nguyên:** vốn 20x+10y≤1200, tổng x+y≤100; miền liên tục có đỉnh (0,0),(60,0),(20,80),(0,100). F=3,5x+2y có các giá trị 0,210,230,200; điểm (20,80) nguyên nên đủ để đạt tối ưu nguyên.
- **DELTA_C:** lời dẫn viết mới theo Gemini/NotebookLM v1, bảng tình huống, giải thích bản chất, khung kết luận, phân tích chọn phương pháp, tổ chức lại từng outcome và diễn giải tự vận dụng. Không đánh đồng với DELTA_A chỉ đổi UI.

## 4. QA / blockers

| Hạng mục | Trạng thái |
|---|---|
| 4 mục cấp trang và 1 tầng tab | PASS kiểm tĩnh cho B03/B04; không có tab cấp 2 |
| 5+5 First Try / 2+2 HELP_ID | PASS kiểm tĩnh: không trùng, đáp án trong details đóng |
| Math delimiters | B03: 186 cặp inline + 4 display; B04: 145 cặp inline + 3 display — cân bằng trong Markdown |
| Hình/bảng | Mỗi bài 1 SVG source-locked đặt sát kiến thức; dữ kiện SVG khớp ví dụ, không sao chép hình cho bài toán khác |
| A/B source receipts | B03/B04 JSON khóa blob Markdown và HTML gh-pages, SVG SHA; 4 script mỗi trang parse được |
| Trình duyệt/MathJax/mobile/ARIA | **NOT RUN** thật trên Chrome/Safari 390/820/1440; chưa AP1–AP5/P2 |
| Academic/PED Q01–Q14/Q18 | **PENDING** chứng cứ S1 đúng snapshot Delta C. Không suy PASS cũ thành PASS mới; chủ dự án muốn tránh review trùng nguyên bộ Gemini/Notebook |
| Q15/Q16, Golden/Final Submit | Source bank không đổi nhưng runtime regression chưa chạy |
| Phát hành | **NO MERGE / NO DEPLOY**; Draft PR #797 chưa được owner cho phép phát hành |

**Checkpoint:** G10_CHII_B03_B04_R01_DRAFTED / SOURCE_LOCKED / STATIC_QA_PASS / Q18_BROWSER_RELEASE_HOLD. Hoàn thiện chương trước khi chuyển sang Chương III; không chạy dàn trải.
