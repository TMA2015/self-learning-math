# CĐ18 — NotebookLM phản biện độc lập nội dung đã sửa (W07 / O23) · 20/11/2026

PACKET_ID: THPT-TOPIC18-SPHERE-CIRCLE-W07-D6-AFFECTED-20261120
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 (Q01–Q18)
PERMANENT_SOURCES: exactly five current THPT v2.1 sources, no sixth permanent source
REVIEW_SCOPE: canonical THPT-G12-B14-W07 CONTENT_VERSION2, TOP18-O40/TOP18-O23 sphere-plane section learner and remedial D6 only
CANONICAL_BANK_BLOB: ee7351bf5f4704c5d5c6bd08a7932c1630e59edf
LEARNER_BLOB: 1a99d380571afa573afecf64f619fb52d3dd30be
COMPARISON_BASELINE: previous canon 11eb2834cfdb4a24685157f84666c2bb0767970a; previous learner bcc7cb6c57ea3cddbfae312a1fe2d31c0791b3f4
REVIEW_PROMOTION: only affected-scope Academic/PED PASS after NotebookLM output; do not infer full Topic PASS

## Current canonical item W07 (unchanged question, /5 rubric)

**Đề bài:** Giải thích ba trường hợp giao của cầu tâm cách mặt phẳng h và bán kính R.

**Đáp án canonical v2:** Với \(h<R\), giao của **mặt cầu** và mặt phẳng là **đường tròn** bán kính \(r=\sqrt{R^2-h^2}\), không phải hình tròn chứa phần bên trong; với \(h=R\), tiếp xúc tại một điểm; với \(h>R\), không có điểm chung.

**Lời giải có suy luận (unchanged):** Dùng vuông góc tâm–mặt phẳng và r²=R²−h² khi vế phải không âm.

**Rubric Written /5 unchanged:** 2 điểm xác định khoảng cách tâm–mặt và điều kiện h so R; 1 điểm lập r²+h²=R²; 1 điểm tính bán kính/3 trường hợp; 1 điểm giải thích ý nghĩa vật lý.

## Current learner O23 D6 (student-facing)

> Hãy vẽ tâm cầu, chân đường vuông góc từ tâm xuống mặt phẳng và một điểm trên giao tuyến. Tam giác vuông cho \(r^2+d^2=R^2\). So sánh \(d\) với \(R\) trước: \(d<R\) có đường tròn, \(d=R\) chỉ có một tiếp điểm, còn \(d>R\) không có giao. Nếu quên công thức, hãy tự dựng lại từ định lí Pythagore.

## Original existing learner conceptual sequence (UNCHANGED)

Before TOP18-O40: the lesson gives sphere center C(2,1,3), floor z=0, R=5, d=3, derives r²+d²=R² from right triangle -> r=4, includes SVG and figure-reading instructions. O40 gives d>R/d=R/d<R three cases and an example; O23 is explicitly optional after B17 and gives more applications. No SGK-B14 premature Core requirement.

## Independent math anchors

- OpenStax §2.5 point-plane and parallel-plane distance https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space
- Geometry of a sphere intersecting plane yields a circle or a point or none; LibreTexts https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_%28Corral%29/01%3A_Vectors_in_Euclidean_Space/1.06%3A_Surfaces

## Prompt NotebookLM (5 câu)

1. Chỉ dùng đúng năm Permanent Sources THPT v2.1 và gói bị ảnh hưởng này, kiểm độc lập tính chính xác của đáp án W07 v2: phân biệt **mặt cầu/khối cầu** và **đường tròn/hình tròn**, đủ ba trường hợp d so R.
2. Kiểm xem lời giải cũ, đáp án mới và rubric /5 có nhất quán, không lẫn bán kính hình cầu với bán kính giao tuyến, đồng thời thử trường hợp d=0, d=R và d>R.
3. Đánh giá O23 D6 mới có hướng học sinh tự dựng tam giác vuông, tự phát hiện sai và không còn lộ nhãn nội bộ, đồng thời có phù hợp việc chỉ dạy sau B17 hay không.
4. Cho verdict Academic và PED riêng, P0/P1/P2 gắn đúng câu/outcome cùng MINIMAL_DELTA; không cấp lại PASS cho toàn Topic 18 hoặc cho nội dung không được thay.
5. Ghi SOURCE_RECEIPT gồm chính xác hai Git blob khóa trên và chỉ đề nghị sửa tiếp khi tìm được lỗi nội dung thực sự.

**Không cần ảnh SBT trang in 25 để phản biện toán học trên; nếu thiếu, chỉ ghi chú bối cảnh tham khảo, không tạo academic HOLD giả.**