# G10 ChIV B09 — targeted decomposition canonical delta R04 · 17/11/2026

**SCOPE:** only SGK Toán 10 ChIV B09, not B10/Topic. **STATUS:** SOURCE-CANDIDATE / TECHNICAL-INTEGRATION-QA; no claim of independent NotebookLM PASS, no merge/deploy or owner P2.
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.2.0` (Q01–Q18), `DELTA_C_ACADEMIC_MATERIAL`.
**BASELINE IMMUTABLE REVIEWED AUTHORING:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md` Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34` (24 historical original formative items, including B09 C01–02/P01–06, plus separate original W09).
**BASELINE KNOWLEDGE R03:** `docs/thpt-preview/sgk/chuong-iv/bai-9.md` Git blob `70217896971335905ac7907b222b161073c4df4e`, with full explanation, diagram, and fourth worked example for decomposition.
**S1 EVIDENCE:** Kết nối tri thức Toán 10 tập một, Bài 9 (printed pp55–59), printed p57 **Luyện tập 3** and **Chú ý** on representation by two noncollinear vectors. The book-text and actual printed page label are independently visible in a digital facsimile PDF at `https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf`, section following Hình 4.27. The official publisher-hosted PDF and exact PDF index/edition custody are **not verified**; do not claim publisher-site receipt or add invented offsets.

## A. Outcome / mathematical source check

`OUTCOME_ID: G10-B09-DECOMP_S1` — Given two noncollinear vectors `a,b` in a plane, every vector `u` in that plane has a unique representation `u=x a+y b`. `a,b` must be nonzero and noncollinear; do not apply uniqueness to collinear vectors. Learner explains the reason for a chosen decomposition using vector addition, midpoint and real scalar multiplication, without importing B10 coordinate algorithms.

This outcome has D1 in B09 R03 §2.2, D2 in B09 R03 worked example 4 (MN with midpoints on AB, AC), D5 in two R03 figures, D6 via B08 vector addition and B09 worked examples. The historic bank had **no dedicated independent D3 attempt**; the new original item below addresses precisely that affected gap, without rewriting any previously reviewed C01/C02/P01–P06/W09.

## B. One new original canonical PUBLIC practice item

- **ITEM_ID:** `THPT-G10-B09-P07`
- **CONTENT_VERSION:** `1` (new item only; existing R01 items keep their original versions)
- **LESSON_ID:** `G10-CHIV-B09`
- **OUTCOME_ID / SKILL_ID:** `G10-B09-DECOMP_S1`
- **PROBLEM_FAMILY_ID:** `G10-B09-VECTOR_TWO_NONCOLLINEAR_MIDPOINT_RATIO`
- **PLACEMENT/ROLE:** `SGK_PRACTICE / PRACTICE`
- **EXPOSURE:** `FORMATIVE_ONLY` (public practice; no independent RD1, no Mastery)
- **DIFFICULTY:** `CORE_APPLY`

**Câu hỏi:** Cho tam giác `ABC`. Gọi `M` là trung điểm của `BC`; điểm `N` nằm trên đoạn `AB` sao cho `AN=\frac13 AB`. Đặt `\vec a=\overrightarrow{AB}`, `\vec b=\overrightarrow{AC}`. Hãy biểu thị `\overrightarrow{MN}` theo hai vectơ `\vec a,\vec b` và giải thích vì sao cặp hệ số tìm được là duy nhất.

**Đáp án:** `\overrightarrow{MN}=-\frac16\vec a-\frac12\vec b`.

**Lời giải theo bước:**

1. Vì `M` là trung điểm của `BC`, theo quy tắc cộng vectơ: `\overrightarrow{AM}=\frac12(\overrightarrow{AB}+\overrightarrow{AC})=\frac12\vec a+\frac12\vec b`.
2. Vì `N\in AB` và `AN=\frac13 AB` cùng hướng với `\overrightarrow{AB}`, nên `\overrightarrow{AN}=\frac13\vec a`.
3. Theo quy tắc ba điểm: `\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}=-\overrightarrow{AM}+\overrightarrow{AN}=-\frac16\vec a-\frac12\vec b`.
4. Trong tam giác không suy biến `ABC`, hai vectơ `\vec a,\vec b` không cùng phương; do đó cặp `(-1/6;-1/2)` **duy nhất**. Trường hợp ba điểm thẳng hàng không thỏa giả thiết tam giác.

**Gợi ý sau khi tự làm:** Viết `\overrightarrow{AM}` theo `\vec a,\vec b`, rồi dùng `\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}`; để ý dấu của `\overrightarrow{MA}`.

**D6 tự sửa:** Nếu kết quả mất dấu âm, quay lại Bài 8 (vectơ đối/quy tắc ba điểm). Nếu chỉ có một trong hai vectơ cơ sở, dùng hệ thức trung điểm tại Bài 9 rồi tách thành `\vec a,\vec b`. Nếu quên tính duy nhất, kiểm tra điều kiện `\vec a,\vec b` không cùng phương.

**Rubric tự đối chiếu (tham khảo, không chấm tự động):** 2 điểm xác lập đúng `\overrightarrow{AM}`; 1 điểm xác lập đúng `\overrightarrow{AN}` và hướng; 2 điểm suy ra đúng `\overrightarrow{MN}`; 1 điểm giải thích cặp hệ số duy nhất nhờ `AB,AC` không cùng phương. Tổng 6 điểm. Rubric hỗ trợ Written reasoning **trong cùng một item**, không tạo Written/Anchor item thứ hai.

**Kiểm toán toán học:** Với mô hình thử độc lập `A=(0,0)`, `B=(6,0)`, `C=(0,6)` chỉ dùng để xác minh (không dùng trong lời giải cho học sinh), `M=(3,3)`, `N=(2,0)`, `MN=(-1,-3)`; `-a/6-b/2=(-1,-3)` — khớp. Hai vectơ gốc có định thức 36 khác 0. Trường hợp `N=A` hoặc `M=B` không thuộc giả thiết tỷ lệ đã đặt.

## C. Q01–Q18 affected self-QA matrix (not an external reviewer verdict)

- **Q01/Q02:** B09 p57 required outcome present in Knowledge R03; new independent PRACTICE attempt addresses the previously absent outcome. SGK printed-page match from digital copy, official publisher scan/index still unverified.
- **Q03/Q04/Q07/Q09–Q13:** existing R03 source explains concept, construction, uniqueness, diagram and worked example. This delta does not modify R03 source/historical outcomes.
- **Q05/Q06/Q08/Q14:** P07 has genuine independent two-step practice, full solution, hint and D6; historic 5 first tries and 2 HELP preserved. No new redundant Written record.
- **Q15:** exactly one new `item_id`, one stem/key/solution/rubric, one role; old R01 canonical bank retains byte-identical item fields.
- **Q16/Q17:** `FORMATIVE_ONLY`; no official Readiness or private RD1, no automatic Written scoring/Mastery and no Topic claim.
- **Q18:** self-check algebra/geometry performed in this document; **not independent reviewer approval**. Exact new JS/test/source blob custody and final AP/R/CI to be verified by RELEASE; keep candidate HOLD until those checks pass.

**PROTECTED:** B07/B08 owner P2 snapshots, old B09 item records and W09, all G10 B10/B11 content, routes, Firebase, private RD1, Final Submit/assessment and Topic scope.

**RELEASE_NEXT:** integrate precisely this one canonical P07 into the existing public B09 Practice without modifying old item data; extend source-lock tests to compare the original 24 records and this candidate separately; run exact-head workflows and browser checks (390/820/1440). Production P1 and owner physical P2 remain independent; no auto-merge/deploy.
