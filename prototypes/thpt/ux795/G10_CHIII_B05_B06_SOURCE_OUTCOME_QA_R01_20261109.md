# UX795 · Toán 10 Chương III B05–B06 — Provenance, Outcome và QA R01

**Phạm vi:** chỉ hai trang Kiến thức SGK, B05 giá trị lượng giác góc 0°–180°, B06 hệ thức lượng trong tam giác. Hai bài là DELTA_C học liệu ứng viên trên Draft PR #797; chưa là Academic/PED PASS, CONTENT_READY hoặc đã phát hành.

## 1. Nguồn đối chiếu và tình huống lệch mapping

| Nguồn | B05 | B06 |
|---|---|---|
| SGK S1 | KNTT Toán 10 tập một Bài 5, lượng giác 0°–180° | KNTT Toán 10 tập một Bài 6, hệ thức lượng |
| Canonical hiện hành | docs/thpt-preview/sgk/chuong-iii/bai-5.md, blob a84ada557f30e484c1b5033238ed3ee6deab366e | docs/thpt-preview/sgk/chuong-iii/bai-6.md, blob 6a305a9ebcd156809b880365c04a2de3d442d011 |
| NotebookLM v1 | [Bài giảng Toán 10 v1](https://drive.google.com/file/d/1Ickwg2M_9XghU5C602k-w5wqargqOadT/view), mục BÀI 5: đường tròn đơn vị, góc bù và bài sin=3/5 góc tù | Cùng v1 mục BÀI 6: ví dụ b=8,c=5,A=60° cho a=7 và S=10√3, khác số liệu hình canonical |
| Gemini | **SOURCE_MAPPING_MISMATCH:** [Lớp 10 bài 3,4,5.docx](https://docs.google.com/document/d/1dUQjKprFbQKhwf19g7W2P1chryDKfwhs/edit) có tiêu đề “BÀI 5: HÀM SỐ”, KHÔNG phải B05 lượng giác của S1. **Không sử dụng** phần sai ánh xạ làm nguồn B05. | [Lớp 10 bài 6,7,8.docx](https://docs.google.com/document/d/1vEXeJkO1x6vgcARq-WvjK2QkUcWPoMoV/edit) có lời mở đầu trắc địa, chỉ dùng diễn giải; Word OMML bị rớt công thức trong text extraction, nên công thức kiểm theo canonical |
| SVG gốc bất biến | THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg, blob 6fd343ea37fdd1f737a17da245c18b7b82b3bc4d | THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg, blob 0dd2f62277ae264fb4f6d6c99699d5a984a0b562 |
| SVG SLM mới | Không thêm ảnh thứ hai, tạo bảng góc nhọn/tù và bảng điều kiện tan/cot | [Tam giác đo đạc](images/G10_B06_SURVEY_RIGHT_TRIANGLE_R01.svg), blob 1b7e617d00fe8d03ab17522d4db9937447b62f7a, tam giác vuông cân A=B=45°, AB=20√2 m, AC=BC=20m, CH=10√2m |
| Draft source R01 | [B05](G10_B05_HYBRID_KNOWLEDGE_CANDIDATE_R01.md), blob 9718cd5bf05432ebaf6ee2efcfb1610d74623d59 | [B06](G10_B06_HYBRID_KNOWLEDGE_CANDIDATE_R01.md), blob ae865ff37038dbb93ad7e4d5678e6adeccd00189 |
| A/B preview | [B05](UX795_G10_B05_CONTINUOUS_NARRATIVE_AB_R01.html) | [B06](UX795_G10_B06_CONTINUOUS_NARRATIVE_AB_R01.html) |
| gh-pages HTML baseline | e5d5c92c644b515a51393c0f51aa60b0f2de4d02 | a38ea060a135a306d4a0a428f2b59fcb619f64e4 |

**Nguồn ngoại trừ:** GEMINI_G10_B05_SOURCE_MISMATCH_EXCLUDED. Đây là lỗi ánh xạ tài liệu tham khảo, không phải xung đột chuẩn Q01–Q18. Notebook v1 khi lấy từ connector có vài ký tự điều khiển ở LaTeX, nên không bê nguyên raw công thức mà khôi phục theo canonical/S1.

## 2. Outcome — canonical item map

| Bài / mảng kiến thức | Nội dung bài mới | ID tự thử và kết quả |
|---|---|---|
| B05 nửa đường tròn | §2.1 cos là hoành độ, sin là tung độ, SVG 120° | THPT-G10-CHIII-TRY01: M(-1,0), sin180=0, cos180=-1 |
| B05 giá trị góc đặc biệt | §2.2 bảng nhọn/tù và đối xứng | THPT-G10-CHIII-TRY02: sin135=√2/2, cos135=-√2/2 |
| B05 tan/cot | §2.3 kiểm mẫu | THPT-G10-CHIII-TRY03: tan0=cot90=0; cot0/tan90 không xác định |
| B05 góc bù | §2.4 40° và 140°, dấu +/− | THPT-G10-CHIII-TRY04: sin bằng, cos/tan/cot đối dấu khi xác định |
| B05 hệ thức | §2.5 chọn dấu từ miền góc | THPT-G10-CHIII-TRY05: cos=-5/13 góc tù, sin=12/13, tan=-12/5 |
| B06 côsin | §2.1 tam giác SVG b=6,c=8,A=60° | THPT-G10-CHIII-TRY06: b=c=5,A=120°, a=5√3 |
| B06 sin | §2.2 cạnh và góc đối diện, ASA/AAS và cảnh báo SSA | THPT-G10-CHIII-TRY07: A=30°,a=5 => R=5, B/C chưa xác định duy nhất |
| B06 diện tích | §2.3 công thức theo sin góc xen giữa | THPT-G10-CHIII-TRY08: b=6,c=8, A=30° hoặc 150°, S=12 |
| B06 Heron | §2.4 nửa chu vi, nội/ngoại tiếp | THPT-G10-CHIII-TRY09: 3–4–5 => S=6,r=1; 2–3–6 không tạo tam giác |
| B06 đo đạc | §2.5 hình khảo sát mới theo số liệu | THPT-G10-CHIII-TRY10: AC=BC=20m, CH=10√2m |

B05 giữ nguyên HELP-G10-B05-01, HELP-G10-B05-02; B06 giữ nguyên HELP-G10-B06-01, HELP-G10-B06-02. Tất cả 10 First Try vẫn là activities tự đối chiếu bằng thẻ details đóng, không phải đánh giá độc lập/ghi Mastery. ID chỉ một lần trong mỗi bản.

## 3. Delta C và kiểm sự phù hợp hình

- Cả hai bài có đúng bốn vùng Khám phá / Kiến thức SGK / Ví dụ / Lỗi, tương ứng bốn tab ngang cấp 1; không tab cấp 2. Các concept trong phần Kiến thức không bị tách rời.
- B05 ảnh góc 120° ở ngay §2.1, hướng dẫn học sinh đọc điểm M và hình chiếu; bảng hai phần để tránh hàng ngang quá rộng trên mobile; điều kiện tan/cot nói rõ không xác định.
- B06 ảnh gốc tại §2.1 có đúng dữ kiện b=6,c=8,A=60° => a²=52, S=12√3; ví dụ Notebook v1 b=8,c=5,A=60° => a=7, S=10√3 được ghi rõ **không** lấy kết quả từ hình khác số liệu.
- SVG khảo sát mới ở §2.5 gắn tam giác cân vuông với AB=20√2m, A=B=45°, CH=10√2m. Có title/desc và lời chỉ dẫn đọc; là sơ đồ hình học, không thể hiện địa hình theo tỉ lệ thực.
- Lời giải thích/bảng/hình mới là DELTA_C_ACADEMIC_MATERIAL, không tự tái sử dụng Academic/PED PASS đã gắn với source cũ.

## 4. QA và blockers

| Gate | Trạng thái |
|---|---|
| Four Level-1 tabs | PASS kiểm tĩnh trên hai Markdown và hai HTML research; không có nested tabs |
| First Try / HELP | 5+5 First Try canonical, 2+2 HELP; details cân bằng, tự mở đáp án |
| Source/figure receipts | SHA của Markdown, published HTML, SVG nhúng trong A/B; B05 1 hình, B06 2 hình |
| LaTeX + JS | Source delimiters cân bằng; 4 inline JS mỗi A/B parse; không lộ checklist PED |
| Maths spot checks | PASS trong JS guard mô phỏng Node: góc đặc biệt, dấu, côsin, diện tích, Heron, r/R, đường cao khảo sát |
| Source S1 & Q18 | **PENDING** SGK trang in/PDF/outcome review cho chính Delta C snapshot; không suy PASS cũ |
| Browser AP1–AP5/P2 | **NOT RUN** thực trên Chrome/Safari 390/820/1440, MathJax, bàn phím/screen reader, responsive |
| Q15/Q16/Golden | Item ID static parity, không đổi bank/runtime; chưa regression production |
| Release | PR #797 Draft; **NO MERGE / NO DEPLOY / NO CONTENT_READY** |

[Test B05/B06](test-ux795-g10-chiii-pilot.cjs) được chạy bằng V8 harness mô phỏng Node fs/assert/vm; chưa phải GitHub Actions CI thực hoặc trình duyệt QA.

**Checkpoint:** G10_CHIII_B05_B06_R01_DRAFTED / SOURCE_MISMATCH_GEMINI_B05_EXCLUDED / 10_IDS_LOCKED / NUMERIC_STATIC_QA_PASS / Q18_BROWSER_HOLD / NO_RELEASE.
