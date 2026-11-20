# CĐ18 — Biên bản tiếp nhận phản biện độc lập: W07 v2 / O38 / O23 (O40 ngữ cảnh)

**Ngày nhận:** 20/11/2026  
**Nguồn kết quả:** Chủ dự án gửi nguyên văn báo cáo phản biện trong hội thoại. Đây là bản ghi trung thực của verdict được cung cấp, không phải tuyên bố hệ thống đã kết nối/trực tiếp chạy NotebookLM. **Không yêu cầu NotebookLM thực hiện quản lý Git/SHA.**  
**Chuẩn đánh giá theo báo cáo:** SLM-THPT-QUALITY-ONE v3.2.0 (Q01–Q18), 5 Permanent Sources THPT v2.1.

## 1. Phạm vi và kết quả nhận được

- PACKET_ID: THPT-TOPIC18-SPHERE-SURFACE-SOLID-W07-O38-O23-CANDIDATE-20261120
- REVIEW_SCOPE: THPT-G12-B14-W07 proposed content_version 2; TOP18-O38; TOP18-O23; TOP18-O40 as conceptual context
- ACADEMIC_VERDICT_REPORTED: **PASS**
- PED_VERDICT_REPORTED: **PASS**
- P0: 0
- P1: 0
- P2: 0
- MINIMAL_DELTA: **NONE**
- SCOPE_BOUNDARY: PASS **chỉ phần đã gửi**, không có kết luận PASS mới cho toàn Topic 18, Chương V SGK, các bài/đề khác hay website
- EXPLICIT_RELEASE_AUTHORIZATION: NO
- SYSTEM_CI_IN_REVIEW_REPORT: SYSTEM_HOLD_UNLESS_VERIFIED (CI phải do AUTHORING/RELEASE kiểm chứng thực, không phải trách nhiệm reviewer)

## 2. Tóm lược căn cứ chuyên môn từ báo cáo độc lập

**Toán học / W07 và O23.** Mặt cầu là tập hợp các điểm có IM=R; khối cầu gồm các điểm có IM≤R. Với H là hình chiếu vuông góc của tâm I xuống mặt phẳng P, h=IH≥0 và R>0, hệ thức IM²=IH²+HM² cho mọi M thuộc P. Do đó:
- h=0: giao mặt cầu với P là đường tròn lớn bán kính R;
- 0<h<R: giao là đường tròn bán kính √(R²−h²), **không phải đĩa tròn**;
- h=R: đúng một điểm H;
- h>R: không có giao thực.
Giao của **khối cầu** với P khi h<R mới là đĩa tròn. Ví dụ O23 C(1;−2;3), R=13 và P:z=8: h=5, bán kính đường tròn là 12; báo cáo xác nhận đúng.

**O38.** M(3;4;0) thuộc mặt cầu tâm O bán kính 5 vì OM²=25. N(1;1;1) có ON²=3<25 nên nằm trong **khối cầu**, không thuộc **mặt cầu**. Báo cáo xác nhận nội dung học sinh đúng và cách so bình phương phù hợp.

**Sư phạm.** Lời dẫn O38 giải thích biên/miền; các mục Tự thử và phần Đối chiếu được bố trí sau kiến thức; D6 của O38 nhắc so CM² với R², D6 của O23 tái dựng chân vuông góc và Pitago, D6 của P23 chữa nhầm bán kính R=10 thành r=8. O23 chỉ dùng sau khi học B17, không ép vào Core B14.

**Written W07 v2.** Báo cáo xác nhận đề, đáp án, lời giải qua tam giác vuông IHM và thang /5 nhất quán: 2 điểm phân loại h<R/h=R/h>R; 1 điểm dựng H/chỉ ra góc vuông; 1 điểm lập hệ thức và tính r; 1 điểm phân biệt đường tròn/đĩa, tiếp xúc/không giao. Không yêu cầu giải thích vật lý ngoài đề.

**Kết luận reviewer:** Toán học ĐẠT; Khả năng tự học ĐẠT; P0/P1/P2 = 0; không cần sửa thêm học liệu (MINIMAL_DELTA NONE). Report không cấp quyền merge, deploy hoặc kích hoạt Mastery.

## 3. Đối chiếu source-lock do AUTHORING thực hiện (không giao NotebookLM)

- CANONICAL_LEARNER_SOURCE_BLOB: 1ad945ea583ce7ee91df64b58d3f31b31c202cd3
- PROPOSED_W07_V2_BANK_BLOB: a24abd682932e11761f7c85fa3a3d3cdd77b600e
- PROPOSED_W07_V2_GIT_COMMIT: 99acf796b94310728733820b18f4cebdfa7541a0
- SIGNED_ACTIVE_SHARED_G12_CHV_BANK_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
- SOURCE_REVIEW_PACKET: prototypes/thpt/review-packets/Temp_TOPIC18_O40_O23_W07_NOTEBOOKLM_AFFECTED_REVIEW_20261120.md
- AUTHOR_SOURCE_CROSSCHECK: **PASS** — GitHub đối chiếu theo phần tử: W07 proposed với learner projection khớp 4/4 trường Đề, Đáp án, Lời giải và Rubric; O38/O40/O23 hiện diện; 40 outcomes, 40 first tries và 247 balanced disclosure blocks giữ nguyên.
- Provenance/identity Git SHA is **verified by AUTHORING**, not a requested NotebookLM output.
- Reviewer prose describes a generic “??? question” syntax; actual learner Markdown uses các khối \`<details markdown="1"><summary>Đối chiếu</summary>\`. This minor terminology difference does not alter the reported Academic/PED verdict or the actual visibility behavior in source; UI/render QA remains a separate release gate.

## 4. Không đánh đồng phản biện PASS với CONTENT_READY

**CLOSED_BLOCKER:** CĐ18_W07_O38_O23_DELTA_C_AFFECTED_INDEPENDENT_ACADEMIC_PED_REVIEW_PENDING — **CLOSED** bởi kết quả độc lập do chủ dự án cung cấp, có gói nội dung khớp.

**STILL_OPEN:** W07_V2_SINGLE_ACTIVE_CANONICAL_PROMOTION_Q15_Q18. W07 v2 mới là đề xuất trong bản học sinh CĐ18 *blocked* và gói review. Ngân hàng SGK được ký vẫn giữ W07 v1. Không được âm thầm đổi ngân hàng SGK v1 hoặc ký Content Ready khi projection khác phiên bản canonical active. Cần đồng bộ một canonical v2 có kiểm soát và xác minh các consumer/manifest/CI liên quan trước khi có CONTENT_READY bản mới.

**CURRENT_CANDIDATE_STATE:** BLOCKED_BY_AUTHORING, **không phải vì lỗi toán, lỗi sư phạm, thiếu ảnh SBT p25 hay thiếu verdict NotebookLM.** Chỉ còn đồng bộ canonical/handoff theo Q15/Q18; lịch sử CONTENT_READY cũ bất biến.

**Không merge/deploy/khởi tạo official Final Submit/Mastery.**