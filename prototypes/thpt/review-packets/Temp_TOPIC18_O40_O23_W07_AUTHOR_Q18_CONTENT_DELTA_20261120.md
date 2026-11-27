# CĐ18 — Kiểm toán TOÁN & TỰ HỌC sau Delta C: mặt cầu, khối cầu, đường tròn · 20/11/2026

**Đánh giá nội dung học sinh thực sự nhìn thấy. Không lấy việc thiếu trang SBT làm lý do không kiểm được toán.** Đây là AUTHOR self-Q18, không phải NotebookLM độc lập.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
DELTA: DELTA_C_ACADEMIC_MATERIAL
REVIEW_SCOPE: TOP18-O38, TOP18-O40, TOP18-O23; original canonical THPT-G12-B14-W07 v2
PREVIOUS_LEARNER_BLOB: bcc7cb6c57ea3cddbfae312a1fe2d31c0791b3f4
PREVIOUS_CANONICAL_BANK_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
CURRENT_LEARNER_BLOB: 1ad945ea583ce7ee91df64b58d3f31b31c202cd3
PROPOSED_CANONICAL_W07_V2_BANK_BLOB: a24abd682932e11761f7c85fa3a3d3cdd77b600e
SIGNED_ACTIVE_SHARED_G12_CHV_BANK_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
PROPOSED_CANONICAL_V2_SOURCE_COMMIT: 99acf796b94310728733820b18f4cebdfa7541a0
CANONICAL_ITEM_ID: THPT-G12-B14-W07
PROPOSED_CANONICAL_CONTENT_VERSION: 2 (same ITEM_ID, changed stem, mathematical key, reasoned solution, /5 rubric; not promoted to current shared bank)
Q15: one signed active shared canonical v1; proposed v2 of the SAME ITEM_ID is a bounded review candidate only. Proposed W07 v2 stem/key/solution/rubric match blocked Topic learner projection exactly; no dual active owner.
Q16: no official readiness/private RD1 changes; public selfcheck retains NO_MASTERY
ACADEMIC_AUTHOR_VERDICT: PASS_AFFECTED_SCOPE
PED_AUTHOR_VERDICT: PASS_AFFECTED_SCOPE
INDEPENDENT_NOTEBOOKLM_VERDICT: PENDING_AFFECTED_DELTA_C
CURRENT_CANDIDATE_STATE: BLOCKED_BY_AUTHORING_PENDING_AFFECTED_REVIEW
PREVIOUS_CONTENT_READY: IMMUTABLE_HISTORIC_SNAPSHOT_ONLY
RELEASE_AUTHORIZATION: NO

## 1. Vì sao cần sửa học liệu

- **W07 định nghĩa chưa rõ:** viết 'cầu' không phân biệt được mặt cầu (lớp biên) và khối cầu (cả bên trong), rồi đáp án nói 'hình tròn' khi nói giao của mặt cầu; đây là nguy cơ học sinh suy ra cả đĩa nằm trên mặt cầu.
- **Rubric không ăn khớp đề:** yêu cầu 1 điểm 'giải thích ý nghĩa vật lý' nhưng đề không cung cấp bối cảnh vật lý; có thể chấm sai học sinh giải hình học đúng. Đã thay yêu cầu cuối bằng phân biệt mặt cầu/khối cầu và ba kết quả hình học.
- **O38 mơ hồ:** 'nằm trong mặt cầu' dễ lẫn với 'thuộc mặt cầu'. Đã giải thích bằng bình phương khoảng cách: < là trong khối cầu nhưng không thuộc mặt; = là trên mặt; > là ngoài.
- **O23 D6 lộ mã nội bộ:** cả FirstTry và Practice trước nói O23/Core/SGK-ChII; đã thay bằng đường khắc phục trực tiếp: vẽ chân vuông góc H, tính h, dùng Pitago và so d/R. O23 intro và ví dụ bỏ phần điều phối thuật ngữ.

## 2. Chứng minh toán độc lập (không đòi trang SBT p25)

Cho mặt cầu S={X∈R³:|X−I|²=R²}, R>0, và mặt phẳng P cách I khoảng h≥0. Đặt H là hình chiếu vuông góc của I lên P. Với mọi X∈P, |X−I|²=h²+|X−H|².

- Nếu 0≤h<R: |X−H|²=R²−h²>0 -> **đường tròn**, tâm H, bán kính sqrt(R²−h²). Khối cầu (≤R²) mới cho **đĩa tròn**.
- Nếu h=R: |X−H|²=0 -> **duy nhất điểm H**.
- Nếu h>R: |X−H|²<0 bất khả -> **không có điểm chung**.
- Kiểm trường hợp biên: h=0, r=R (đường tròn lớn); h=R, 1 tiếp điểm; h>R, tập rỗng. O38: |X−I|²<R² ở bên trong **khối** nhưng KHÔNG ở trên **mặt**.
- Ví dụ bổ trợ: I=(1,2,1), R=2, z=0 -> (x−1)²+(y−2)²=3; chỉ **đường tròn** r=√3. Khoảng cách hai mặt x+2y+2z−1=0 và x+2y+2z−3=0 bằng 2/3 qua cả công thức chuẩn hóa và phép chọn điểm. Không đòi ảnh bài SBT để chứng minh.

## 3. Kiểm kiến trúc tự học và đánh giá

- **Q03–Q04:** O40 trước công thức đã có hình/đoạn vuông và Pitago với R=5, d=3, r=4. W07 mới có đề xác định rõ đối tượng, hình học suy luận qua H, ba trường hợp và điều kiện R>0/h≥0. Không nhảy trực tiếp tới công thức.
- **Q06:** W07 vẫn /5 đúng tổng 2+1+1+1=5, nhưng rubric nay chấm những yêu cầu thực sự có trong đề, không đòi vật lý ngoại đề.
- **Q09–Q14:** O38 giải thích ý nghĩa lớp biên, có ví dụ so bình phương; D6 O38 yêu cầu tự so CM² vs R². D6 O23 FirstTry và Practice hướng dẫn tự dựng tam giác; không lộ code hay gợi ý vô dụng.
- **Q15:** W07 v2 vẫn cùng ITEM_ID, đề/đáp án/lời giải/rubric trong **proposed Git blob** và blocked Topic learner projection trùng nhau từng dòng. Ngân hàng SGK hiệu lực v1 vẫn giữ nguyên byte, không tạo hai owner active hoặc phát hành v2 trước phản biện.
- **Q16–Q17:** giữ đủ ba phần Topic Kiến thức/Luyện tập/Tự kiểm tra, không Core; O23 chỉ sau B17, không biến bài tập public thành chấm Mastery.
- **Source diff gate:** bản Git candidate v2 có **chỉ một khối W07** khác nguồn signed v1; đã khôi phục active SGK bank về blob v1 để bảo toàn SGK R01. Bản Topic learner mới sửa O38/O23 và bản W07 projection, nhưng nằm trong blocked/ chờ review. Không sửa 246 câu canonical khác, không đổi SVG hay private data. 40 outcome markers, 247 balanced disclosure blocks, 40 FirstTry vẫn nguyên.

## 4. Kết luận kiểm toán đúng phạm vi

Không còn sai lệch toán đã biết trong phạm vi 0≤h<R, h=R, h>R và phân biệt sphere surface/solid sau bản sửa. **Tuy nhiên đây là QA tác giả; cần NotebookLM phản biện Academic/PED đúng cụm W07–O38–O23 trước khi cập nhật phiên bản canonical active và phát hành phiên bản mới.** Bản trước có CONTENT_READY tại SHA cũ; bản mới đang BLOCKED_BY_AUTHORING chỉ vì một Delta C sư phạm/toán chưa có independent verdict, không phải vì trang SBT 25.

**Đối chiếu nguồn tham khảo ngoài SGK:** OpenStax Calculus Volume 3 §2.5 (plane distance); LibreTexts Vector Calculus §1.6 (surfaces). Các nguồn này xác minh phương pháp toán, không dùng để thay thế danh mục phạm vi chương trình KNTT.