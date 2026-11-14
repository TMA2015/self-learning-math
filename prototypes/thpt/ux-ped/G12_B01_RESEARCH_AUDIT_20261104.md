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

## Đối chiếu OUTCOME_ID canonical (đã kiểm handoff V2)

Đã đọc `prototypes/thpt/release-handoffs/G12-SGK-CHI-B01-B05-R00_HANDOFF_V2_20261102.md`, nguồn `prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md` và ma trận ITEM_ID→PRIMARY_OUTCOME_ID theo gói. 6 mã sau là **ID chính thức trong nguồn**, không tự tạo. Bảng chỉ là liên hệ sư phạm/hiển thị cho pilot và chưa thay đổi ma trận AUTHORING gốc.

| OUTCOME_ID canonical | Chỗ học sinh gặp nội dung (B01) | Item gốc trong handoff | Vấn đề presentation cụ thể | Q/AP kiểm |
|---|---|---|---|---|
| `G12-B01-MONOTONICITY_MEANING` | §1 “Vì sao cần học”; §3.1 định nghĩa/giải thích | C01 | “đang tăng” và dấu vận tốc cần cầu nối trước ký hiệu dày; giữ định nghĩa đúng khoảng | Q03/Q09/Q11; AP1/AP4 |
| `G12-B01-DERIVATIVE_SIGN` | §3.1 quy tắc dấu; §3.2 bảng dấu; ví dụ 1–2 | C02, P02 | Ký hiệu f′ dương/âm và suy luận thay đổi nên có tầng trực quan/công thức riêng | Q03/Q11/Q13; AP1/AP2 |
| `G12-B01-DOMAIN_INTERVALS` | §2 miền xác định; §3.2 điều kiện; ví dụ 3 phân thức | P01, W02 | Ranh giới khoảng không liền thông phải nổi bật gần kết luận, tránh học máy móc | Q03/Q10/Q13; AP2/AP4 |
| `G12-B01-EXTREMA_SIGN_CHANGE` | §3.2 cực trị và đổi dấu; §4 SVG; ví dụ 1–2 | C03, P03, W01 | Đặt dấu, hình, điều kiện đổi dấu và kết luận cùng mạch đọc | Q07/Q11/Q12/Q13; AP1/AP3 |
| `G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT` | §3.2 chiều đảo sai; §3.3 f(x)=x³; §6 Tự thử B | C04, P04 | Nhấn “f′=0 chưa đủ” sát phản ví dụ, không bớt điều kiện | Q03/Q11/Q14; AP1/AP4 |
| `G12-B01-MOTION_CONTEXT` | §1 vị trí/vận tốc; §5 ví dụ 4 chuyển động | A01 | Trực giác không nhầm vận tốc có hướng với quãng đường; kiểm đơn vị và thời gian t≥0 | Q02/Q04/Q09/Q13; AP4 |

**Giới hạn:** các item trên là PUBLIC RD0 (11 ID B01), không lấy ngân hàng private RD1 hoặc tăng item. Chứng cứ Academic/PED đã PASS theo snapshot gốc không được sửa bằng nghiên cứu này. `source_lock=PASS_READ_ONLY`; `outcome_crosswalk=T2_SOURCE_COMPLETE`; `novice_effectiveness=PENDING`.

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
