# G12 B01 — nghiên cứu UX/PED để học sinh tự học độc lập · 04/11/2026

**Tracking:** [Issue #742](https://github.com/TMA2015/self-learning-math/issues/742) · **Role:** RELEASE research, không sửa AUTHORING · **State:** PILOT_CANDIDATE_ONLY / NO_PUBLISH

**Only normative standard:** `SLM-THPT-QUALITY-ONE v1.1.0` (Q01–Q18) tại `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`. Đây là hồ sơ bằng chứng áp dụng, **không phải tiêu chuẩn thứ hai**.

## Bản nguồn bất biến

- Original lesson: `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md`, Git blob **`7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc`**, baseline `main=440e3b6970da21e201d7a2fb862b4705cb6c8394`.
- Original figure `docs/assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg` (không sửa dữ liệu hình).
- Học liệu canonical, Core/Practice/Written, D6, tự kiểm tra Q16 và student progress **không thay**. Không tạo item/câu mới và không thay kết luận Academic/PED PASS đã khóa nguồn.

## Lý do nghiên cứu — ranh giới giữa dễ đọc và hiểu thật

Owner nhận thấy phần AI giải thích trực giác bằng chuyện xe tiến/lùi dễ tiếp cận hơn đoạn mở bài trên web, dù hai bên hướng tới cùng kiến thức. Đây là **quan sát chủ quan có giá trị**, chưa phải thực nghiệm đo hiệu quả. Không đưa nguyên văn Gemini/NotebookLM thành source; ví dụ xe cần rạch ròi vị trí có dấu/quãng đường và vận tốc có hướng/tốc độ.

Đích thử nghiệm: **chỉ thay hiển thị và phân đoạn của cùng nội dung đã duyệt**, không bớt giả thiết, điều kiện, phản ví dụ hoặc lời giải. Bản A trong file HTML prototype là Markdown nguyên văn được render tối thiểu; B là một cách *trình bày lại*, không phải bản sao chụp pixel website production.

## Ma trận audit theo khối bài, đối chiếu Q và cổng kiểm

| Khối nguồn gốc | Nguy cơ tải nhận thức dự kiến | Biến thể B presentation-only | Điều khoản chuẩn | Delta / biên giới |
|---|---|---|---|---|
| §1 WHY | Ký hiệu s(t), v(t), f(x), f′(x) xuất hiện trong một đoạn dài ngay đầu | Nhóm câu gốc thành nhịp đọc ngắn, không thêm phép tương tự mới | Q03, Q09–Q11; AP1/AP4 | A nếu chỉ DOM/bố cục. Viết lại lời dẫn là C |
| §1 Mục tiêu | Bốn yêu cầu trong một đoạn | Dùng khối mục tiêu nổi và nhịp dòng dễ đọc | Q02, Q10, AP1/AP4 | A |
| §2 Tiền đề | Ký hiệu đạo hàm đan trong văn xuôi | Nhấn nhóm tiền đề, điều kiện và khả năng đọc biểu thức | Q03/Q10; AP1/AP2/AP4 | A nếu chỉ renderer |
| §3.1–3.3 | Định nghĩa, dấu đạo hàm, điều kiện và ngoại lệ liên tục | Giữ nguyên thứ tự, tăng phân cấp tiêu đề/spacing, phản ví dụ gần quy tắc | Q03/Q11/Q13; AP1/AP2/AP4 | A |
| §4 Hình | FIG ID và tên SVG lộ trực diện | Metadata vào disclosure dành cho kiểm toán, hướng dẫn đọc hình thành khối riêng gần nguyên SVG | Q07/Q12/Q18; AP1/AP3 | A nếu bảo toàn metadata ngoài learner view |
| §5 Ví dụ 1–4 | Lời giải dày, nhãn biên tập nội bộ | Nhịp spacing từng ví dụ; *chưa* thay lời giải hay bỏ nhãn gốc | Q04/Q13; AP1/AP4 | A, đổi ý nghĩa thành C |
| §6 Tự thử | Ba nhiệm vụ chưa đủ nổi bật | Ba câu gốc được phân định bằng khối tự thử, không tự động chấm | Q14/Q16; AP4 | A |
| §7 Core/Practice | Bài canonical được nạp runtime, không thể thay bằng bản demo | Prototype chỉ hiển thị placeholder gốc, chú giải rõ không chạy Tutor/Core/Final Submit | Q05/Q06/Q08/Q15/Q16/Q17 | Không sửa functionality |

**Giới hạn:** `OUTCOME_ID` cụ thể và lesson-to-outcome matrix phải đối chiếu V2 handoff và source receipt trong T2 tiếp theo; **không tự đặt ID** từ bốn mục tiêu văn xuôi. Q18 không thể chứng minh chỉ bằng mắt nhìn preview.

## Phương án so sánh A/B

- **A — tối thiểu:** hiển thị nguyên văn source Markdown với hệ thống heading/list/figure, không phải bản production pixel-perfect.
- **B — bố cục dẫn dắt:** cùng source bytes, các khối WHY tách thành nhịp ngắn; hình đặt gần hướng dẫn; metadata nguồn nằm trong disclosure; Tự thử nổi bật; max-width/line-height và spacing nhịp nhàng.
- **No behavioral claim:** B chỉ có khả năng *dễ quét mắt hơn*; chưa chứng minh học sinh hiểu tốt hơn. Không áp dụng B cho production cho đến khi đo comprehension.

## Thiết kế đánh giá người học (sau khi prototype kỹ thuật QA PASS)

Hai người/nhóm thử (nếu đủ mẫu), trình độ tiền đề tương tự; không cần lưu tên, tài khoản hay dữ liệu riêng. Cân nhắc hoán đổi thứ tự A/B để giảm hiệu ứng làm quen. Cùng một mục tiêu **trước** khi học và cùng thời lượng đọc tối đa. Dùng một nhiệm vụ giải thích bằng lời: *"Dấu f′ giúp biết điều gì? Tại sao f′(x₀)=0 chưa đủ kết luận cực trị?"* và một tình huống chuyển giao chưa xem (do OWNER/AUTHORING phê duyệt trước nếu trở thành câu chính thức; không tạo canonical item tự phát). Mỗi câu ghi `0=chưa hiểu;1=hiểu một phần;2=đúng kèm điều kiện`. Ghi cảm nhận dễ đọc 1–5, thời gian, và các chỗ học sinh phải đọc lại. **Không tính Skill Mastery**, không lấy n nhỏ chứng minh tổng quát.

## Nguồn nghiên cứu tham chiếu, không thay nguồn SGK

- NSW CESE — *Cognitive load theory in practice*, 2018: bỏ thông tin không thiết yếu, cung cấp ví dụ làm mẫu, tăng dần tính độc lập; không đồng nghĩa rút ngắn bài bằng mọi giá. https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/cognitive-load-theory-in-practice
- CAST — UDL guideline 3: kích hoạt kiến thức trước đó, làm nổi bật quan hệ/bản chất, hỗ trợ chuyển giao. https://udlguidelines.cast.org/representation/building-knowledge/
- W3C WCAG 2.2 — reflow và text spacing: không mất nội dung/chức năng khi phóng to/điều chỉnh khoảng cách. https://www.w3.org/TR/WCAG22/

## Checkpoint và quyền

`T0/T1=DONE`; `T2=PARTIAL` (đã đối chiếu theo phần, chưa xong canonical OUTCOME_ID); `T3=IN_PROGRESS` (prototype cô lập, không deploy); `T4=NO_REAL_LEARNER_DATA`; `T5=OWNER_REVIEW_PENDING`.

**Không mở QA PASS toàn bài, không sửa chuẩn v1.1.0 trên main, không merge/deploy.** Nếu cần lời dẫn mới như Gemini thì đề xuất `DELTA_C_ACADEMIC_MATERIAL` và review phần chịu ảnh hưởng trước khi dùng.
