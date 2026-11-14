# Temp · NOTEBOOKLM R2 · FIVE COMPLETE corrected learning-source snapshots · 14 November 2026

<!-- REVIEW_BATCH_NON_CANONICAL_NOT_FOR_STUDENT; SOURCE_LANE=AUTHORING; NO_RELEASE -->
STANDARD: SLM-THPT-QUALITY-ONE v3.1.0 (ONE Q01–Q18 standard)
REVIEW_METHOD: target new DELTA_C academic/semantic corrections in 5 full-source candidates only, with full topic content included below.
PERMANENT_SOURCES: Exactly 5 THPT v2.1 already installed in the NotebookLM; this file is a temporary **BATCH SOURCE**, NOT a 6th Permanent Source.
BOOK_PRIMARY_SOURCE: Kết nối tri thức SGK/SBT S1 originals; the reviewer must directly verify printed-page number vs PDF index and not invent pages.
NEW_CANDIDATES_READY: NO
CONTENT_READY_REUSE_FROM_OLD_SOURCE: FORBIDDEN
RELEASE_AUTHORIZATION: NO

## Five exact full learner-source receipts

1. **CĐ19 · Tổ hợp và Nhị thức Newton** · PR #858; exact Git blob `0143c612438270861a32872233fe1d87d3aa3b93`; `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R06_NOTEBOOKLM_P1_CORE_SCOPE_20261114.md`; focus: Core k≥1; Newton n=4,5 then extended general formula; source printed-page conflict
2. **CĐ20 · Xác suất cổ điển** · PR #860; exact Git blob `51eb5d4ebb6504390e1e0ac378d6566e7d940c37`; `prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R05_NOTEBOOKLM_P1_OMEGA_20261114.md`; focus: Omega sample space vs omega elementary outcome; 34 canonical pointers/Q15 HOLD
3. **CĐ22 · Thống kê mô tả** · PR #812; exact Git blob `d06250947d78e13a97716fc5b4e97e3f116982db`; `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R03_NOTEBOOKLM_P1_GROUP_MODE_EDGE_20261114.md`; focus: grouped mode edge f−=0 or f+=0; original textbook page mismatch requires scan
4. **Lượng giác G10–G11** · PR #813; exact Git blob `404d46dfb46cd6e9775b116aeace2ba322a031d7`; `prototypes/thpt/content-drafts/topic-trigonometry/Temp_TOPIC_TRIG_G10_G11_R03_NOTEBOOKLM_P1_INTEGER_K_20261114.md`; focus: sin/cos/tan/cot integer k and domain in formal formula boxes
5. **Vectơ–Tọa độ G10–G12** · PR #793; exact Git blob `da0436e99f5c4ff1e33bdb672f000502801a1820`; `prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_R06_NOTEBOOKLM_EXPLICIT_NORMAL_20261114.md`; focus: explicit nonzero normal a²+b² ≠0; 7/7 SVG source refs preserved

## NotebookLM review prompt (four sentences)

Đọc **đầy đủ năm nguồn học liệu mới** trong Batch Source này, so sánh với SGK/SBT Kết nối tri thức S1 và đúng năm Permanent Sources THPT v2.1 theo Q01–Q18, tập trung vào khung/điều kiện/toán học/đường khắc phục và outcome chịu tác động của các P1 đã chỉnh, không chỉ đọc riêng khung trích. Kiểm tra đặc biệt các điều kiện chỉnh hợp, phạm vi Nhị thức Newton Toán 10, định nghĩa không gian mẫu, Mốt ghép nhóm ở biên, biến nguyên k của phương trình lượng giác, pháp tuyến khác không, cùng việc hình thực tế có hướng dẫn đọc đúng và không sai về toán. Xác minh trang SGK/SBT in/PDF trực tiếp khi báo cáo cũ mâu thuẫn, ghi riêng các source conflict, Q15 34 pointer refs CĐ20 còn HOLD, và phân biệt `\\[...\\]` MathJax hợp lệ với hình thức render Web/AP2 chưa được chứng minh. Trả `SOURCE_RECEIPT` đúng mỗi SHA ở trên, Academic và PED PASS/REVISE/HOLD riêng theo bài/outcome, P0/P1/P2 có chứng cứ, `MINIMAL_DELTA` và điều kiện đóng blocker; không tự chuyển `CONTENT_READY`, không chuyển PASS từ snapshot cũ, không chấm RD1 hay cho phép merge/deploy.

## Important reviewer discrepancies from R1 report

- The R1 metadata counts **9 P1** while the seven-row breakdown is **8 P1**; reconcile before final consolidated report.
- Its claim that all 79 blocks use *invalid literal square brackets* conflicts with actual GitHub sources using escaped `\\[` and `\\]` MathJax display delimiters; do **not** rewrite all 79 based only on text extraction. AP2 browser/rendering QA is a separate gate.
- R1 references SGK G10 T2 *chỉnh hợp* at printed p46; original author source ledger puts Bài 24 at p66–71. R1 references G11 T1 grouped-mode at p130; original author scope puts Bài 9 at p58–68. Resolve by inspecting physical printed pages and actual PDF scan offsets, not asserting either unverified reference.
- CĐ21 source PR #863 R01 `0258f29a1ece0fd9d0c1772781878ce827282c24` is unchanged; HOLD remains on Q15 G12 same-ID different-stem collision. Functions source PR #801 R16 `ad7aadd6b8056384078a4dc315811478bec250f0` was PASS/PASS **for excerpted box scope only**, not a full learner curriculum/new-Q18 certification. These two are NOT included in the five-source retest to avoid unneeded full re-review.
- Previous frozen Academic/PED/ready source snapshots remain valid only for their own immutably signed blob. New files are AUTHORING CANDIDATES, NOT CONTENT_READY.

---


# Source 1 of 5 — CĐ19 · Tổ hợp và Nhị thức Newton (FULL EXACT LEARNER CONTENT)

SOURCE_GIT_BLOB: 0143c612438270861a32872233fe1d87d3aa3b93
SOURCE_REPOSITORY_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R06_NOTEBOOKLM_P1_CORE_SCOPE_20261114.md
SOURCE_BRANCH: authoring/topic19-combinatorics-binomial-r00-20261114
SOURCE_PR: 858

<!-- BEGIN_EXACT_GITHUB_CONTENT_1 -->
# Chuyên đề 19 · Đại số tổ hợp và Nhị thức Newton



## 1. Kiến thức

### Mạch xuyên suốt: Hội chợ của lớp — từ chọn một món đến khai triển một nhị thức

Buổi hội chợ của lớp cần giải một chuỗi câu hỏi: chọn **một** câu lạc bộ thì có bao nhiêu lựa chọn; chuẩn bị **một bộ gồm áo và huy hiệu** thì bao nhiêu bộ; lập số/mã và loại cấu hình không hợp lệ; chọn đội và **phân vai**; cuối cùng vì sao hệ số trong (a+b)⁴ lại là 1,4,6,4,1? Tất cả dùng một ý tưởng: **phải xác định khi nào hai kết quả được coi là khác nhau và một kết quả có bao nhiêu bước/đối tượng**.

**Cần biết trước (được ôn ngay tại đây):** phép nhân/cộng số tự nhiên, tập hợp rời nhau, đếm ô trống, lũy thừa của biểu thức, biến và hệ số đa thức. Không bắt người học mở SGK hoặc Topic khác mới hiểu khái niệm bắt buộc.

### 1. Quy tắc đếm và chia trường hợp

![So sánh chọn một nhóm và tạo một cặp lựa chọn](../../../../docs/assets/images/thpt/FIG-TOP19-B23-ADD-MULTIPLY-WHITE-R00.svg)

![Sơ đồ hình cây: 2 áo, 3 quần và đúng 6 cặp](../../../../docs/assets/images/thpt/FIG-TOP19-B23-TWO_STAGE_TREE_WHITE_R00.svg)

**Cách đọc cây:** Đi từ nút “Bắt đầu”, mỗi lần chọn một áo rồi một quần. Hai nhánh áo A/B, mỗi nhánh có ba lá A1,A2,A3/B1,B2,B3. Mỗi lá là **một kết quả đầy đủ**: 2×3=6. Chỉ cần đếm lá để kiểm quy tắc nhân, không đo nhánh qua màu hoặc độ dài.

**Đọc hình:** Khung “hoặc” gồm 4 nhóm nghệ thuật, 3 thể thao không trùng nên 4+3=7; khung “và” yêu cầu một mục ở **mỗi** nhóm, nên 4×3=12 cặp. Hình mang màu nền trắng; phép đếm không phụ thuộc màu. Chỉ dùng quy tắc cộng đơn giản khi hai danh sách không giao nhau.

[Mở mô hình tương tác công khai: “Hoặc / Và”](Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114.html) — kéo hai số lượng, chuyển chế độ và so liệt kê trước khi áp dụng quy tắc. Mô hình không chấm điểm.

#### 1.1. Đếm đúng một lựa chọn: khi nào cộng?

<!-- LESSON_ID: TOP19-M01; OUTCOME_ID: TOP19-O01; ORIGINAL_SGK_SKILL: G10-B23-ADDITION; S1_LESSON: G10-B23; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Ở hội chợ trường, mỗi học sinh chỉ đăng ký một câu lạc bộ. Nếu hai nhóm câu lạc bộ rời nhau, em có thể gộp số lựa chọn; nhưng nếu một câu lạc bộ nằm trong cả hai danh sách thì cộng thẳng sẽ đếm hai lần.

**Hiểu bản chất trước công thức.** Một kết quả hoàn chỉnh ở đây chỉ là **một** câu lạc bộ. Chia các kết quả thành các nhóm không trùng nhau rồi cộng số phần tử từng nhóm. Nếu A và B giao nhau, phải trừ phần giao: |A∪B|=|A|+|B|−|A∩B|; phần có giao là kiến thức giúp kiểm điều kiện, không thay quy tắc cộng rời nhau của B23.

**Điều kiện và giới hạn:** Các trường hợp cộng phải rời nhau hoặc đã sửa đếm trùng; không nhầm “chọn đúng một” với “làm cả hai bước”.

> **PHƯƠNG PHÁP · Quy tắc cộng**
>
> Nếu kết quả thuộc **một trong các trường hợp rời nhau** với số cách lần lượt m và n, số lựa chọn là \(m+n\). Nếu nhóm giao nhau phải trừ phần giao.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Có 4 câu lạc bộ nghệ thuật và 3 câu lạc bộ thể thao khác nhau, danh sách không trùng. Người học chọn đúng một câu lạc bộ. Tập kết quả gồm 4 lựa chọn nhóm nghệ thuật **hoặc** 3 lựa chọn thể thao, nên có 4+3=**7** cách. Ta cộng vì không thể cùng chọn cả hai nhóm.

**Vận dụng trước khi đối chiếu.** Một tủ sách có 5 truyện khác nhau và 2 sách tranh khác nhau. Chọn đúng một cuốn để đọc. Hỏi có mấy cách?

<!-- ITEM_ID: THPT-TOP19-T01; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O01; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**7 cách**, vì hai nhóm cuốn sách không trùng nhau và mỗi kết quả chỉ lấy đúng một cuốn: 5+2=7.

**Nếu chưa đúng (D6):** Nếu tính 5×2, hãy thử viết một kết quả: chỉ tên **một** cuốn sách, không phải một cặp. Quay lại xem điều kiện “hoặc”.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 1.2. Một kết quả gồm nhiều bước: khi nào nhân?

<!-- LESSON_ID: TOP19-M02; OUTCOME_ID: TOP19-O02; ORIGINAL_SGK_SKILL: G10-B23-MULTIPLICATION; S1_LESSON: G10-B23; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Ở hội chợ, để làm một bộ quà học sinh phải chọn cả áo và huy hiệu. Một chiếc áo riêng lẻ chưa phải bộ quà hoàn chỉnh, nên cách đếm khác với chọn chỉ một món.

**Hiểu bản chất trước công thức.** Nếu mỗi kết quả là cặp (áo,huy hiệu), với mỗi lựa chọn áo có thể ghép cùng tất cả lựa chọn huy hiệu, số cặp bằng số nhánh của bước đầu nhân với số nhánh của bước sau. Khi lượng chọn ở bước sau phụ thuộc bước đầu, phải tính từng nhánh rồi cộng.

**Điều kiện và giới hạn:** Các bước phải mô tả **một** kết quả có đủ thành phần; kiểm lựa chọn lặp, phụ thuộc nhánh và giới hạn mỗi bước.

> **PHƯƠNG PHÁP · Quy tắc nhân**
>
> Nếu mỗi kết quả gồm **hai bước**, bước đầu có m cách và mỗi lựa chọn đầu cho n cách tiếp theo, tổng số là \(m\cdot n\). Bước thứ hai có thể phụ thuộc lựa chọn bước đầu.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Có 3 kiểu áo và 2 loại huy hiệu, một bộ quà cần đúng mỗi loại một món. Với mỗi áo có 2 bộ; có 3 áo nên **3×2=6** bộ. Không dùng 3+2 vì như vậy chỉ đếm các món riêng lẻ, không đếm cặp.

**Vận dụng trước khi đối chiếu.** Có 4 loại áo và 3 kiểu huy hiệu. Một bộ gồm đúng một loại mỗi nhóm. Hỏi có bao nhiêu bộ?

<!-- ITEM_ID: THPT-TOP19-T02; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O02; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**12 bộ**, mỗi trong 4 áo ghép với 3 huy hiệu: 4×3=12.

**Nếu chưa đúng (D6):** Nếu chỉ được 7, hãy dùng mô hình A/B để liệt kê (áo 1, huy hiệu 1)… rồi xem mỗi áo xuất hiện bao nhiêu lần.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 1.3. Đếm các số: chữ số đầu và điều kiện lặp

<!-- LESSON_ID: TOP19-M03; OUTCOME_ID: TOP19-O03; ORIGINAL_SGK_SKILL: G10-B23-DIGIT_COUNT; S1_LESSON: G10-B23; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Mã thẻ học sinh có thể bắt đầu bằng 0, nhưng một số tự nhiên có ba chữ số thì không. Cùng một tập chữ số, hai cách đếm khác nhau vì đối tượng phải đếm khác nhau.

**Hiểu bản chất trước công thức.** Vẽ ba ô hàng trăm, chục, đơn vị; chọn thứ tự theo ô có điều kiện nghiêm ngặt nhất trước. Khi các chữ số không lặp, số cách chọn giảm sau mỗi ô. Chữ số 0 có thể xuất hiện ở ô sau nhưng không được nằm đầu số ba chữ số.

**Điều kiện và giới hạn:** Cần nêu rõ đây là **số** hay **mã**, chữ số đầu có bị cấm 0 không, có được lặp không, và ba vị trí có khác nhau không.

> **GHI NHỚ · Đếm số theo chữ số**
>
> Số tự nhiên nhiều chữ số không thể có chữ số đầu bằng 0. Cần ghi rõ số chữ số, thứ tự, cho lặp hay không và áp dụng quy tắc nhân cho đúng số cách từng ô.

**Ví dụ bổ trợ để phân biệt mã với số:** Với mã gồm hai kí tự được lấy từ {A,B,C,D} (có thể lặp) rồi một chữ số từ 0–9, kí tự đầu có thể là A và chữ số cuối có thể là 0. Số mã là 4×4×10=160. Đây là **mã**, không phải số tự nhiên có ba chữ số. Điều kiện đầu 0 vì thế không được áp từ bài lập số sang bài mã.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Từ {0,1,2,3} lập số tự nhiên có **ba chữ số khác nhau**. Hàng trăm chọn từ 1,2,3: 3 cách; hàng chục còn 3 chữ số (có thể có 0): 3; hàng đơn vị còn 2: 2. Có 3×3×2=**18** số. Không tính cả chuỗi bắt đầu bằng 0.

**Vận dụng trước khi đối chiếu.** Từ {0,1,2,3,4} lập số tự nhiên có hai chữ số khác nhau. Có bao nhiêu số?

<!-- ITEM_ID: THPT-TOP19-T03; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O03; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Hàng chục có 4 cách (1–4); hàng đơn vị còn 4 cách (kể cả 0 nếu chưa dùng): 4×4=**16** số.

**Nếu chưa đúng (D6):** Nếu có 20, em đã cho chữ số hàng chục nhận 0. Nếu có 12, em có thể đã loại 0 khỏi cả hàng đơn vị.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 1.4. Chia trường hợp khi đếm số chẵn

<!-- LESSON_ID: TOP19-M04; OUTCOME_ID: TOP19-O04; ORIGINAL_SGK_SKILL: G10-B23-CASE_SPLIT; S1_LESSON: G10-B23; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Nếu yêu cầu số chẵn, chữ số cuối phải chẵn. Nhưng chọn số cuối bằng 0 và bằng 2 có thể làm số cách ở hàng đầu khác nhau; nhân mù một số cố định sẽ sai.

**Hiểu bản chất trước công thức.** Chia theo chữ số hàng đơn vị thành các nhóm **rời nhau**. Trong từng nhóm, dùng quy tắc nhân cho các ô còn lại; sau đó cộng các nhóm. Cấu trúc là cộng các tích, không phải chọn cộng hay nhân một cách máy móc.

**Điều kiện và giới hạn:** Các trường hợp phải phủ hết và không trùng; chữ số 0 đứng đầu bị cấm; không được lặp khi đề nói khác nhau.

> **PHƯƠNG PHÁP · Chia trường hợp**
>
> Chia thành các trường hợp **rời nhau**, đếm từng trường hợp theo điều kiện chữ số cuối/đầu rồi cộng. Không nhân một số cố định nếu số cách ở bước khác thay đổi.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Từ {0,1,2,3,4} lập số chẵn có ba chữ số khác nhau. Nếu tận cùng 0: hàng trăm 4, hàng chục 3, được 12. Nếu tận cùng 2 hoặc 4: 2 chọn số cuối; hàng trăm có 3 chữ số khác 0 còn lại; hàng chục 3, được 2×3×3=18. Tổng **12+18=30** số.

**Vận dụng trước khi đối chiếu.** Từ {0,1,2,3} lập số chẵn có hai chữ số khác nhau. Có bao nhiêu số?

<!-- ITEM_ID: THPT-TOP19-T04; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O04; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Đơn vị 0: hàng chục có 3 cách; đơn vị 2: hàng chục chỉ 1 hoặc 3, có 2 cách; tổng **3+2=5** số.

**Nếu chưa đúng (D6):** Nếu em nhân 2×3, hãy xét riêng đuôi 0: hàng chục có 3 lựa chọn, còn đuôi 2 chỉ có 2.

</details>

**Nối sang bài kế:** Từ đếm từng số hợp lệ, ta chuyển sang đếm các cách sắp người và chọn nhóm; kết quả có hoặc không có thứ tự là câu hỏi quyết định.


### 2. Hoán vị, chỉnh hợp, tổ hợp và công cụ tính

![Đếm nhóm và phân vai khác nhau](../../../../docs/assets/images/thpt/FIG-TOP19-B24-ORDER-GROUP-WHITE-R00.svg)

**Đọc hình:** Từ A, B, C, khi có hai **vai khác nhau**: AB,BA là hai kết quả; khi chỉ chọn nhóm hai người, AB và BA trùng nhau. Đếm trực tiếp n=3,k=2 là 6 và 3. Điều kiện là các thành viên phân biệt và không chọn lặp.

[Mở mô hình tương tác công khai: “Chọn nhóm / Phân vai”](Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114.html) — thử n=4,k=2 và n=5,k=3. Cần so **cả danh sách kết quả** để thấy vì sao phải chia k!, không chỉ so hai con số.

#### 2.1. Hoán vị: xếp tất cả đối tượng

<!-- LESSON_ID: TOP19-M05; OUTCOME_ID: TOP19-O05; ORIGINAL_SGK_SKILL: G10-B24-PERMUTATION; S1_LESSON: G10-B24; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Bốn bạn cùng tham gia hội chợ nhưng đứng thành hàng theo thứ tự khác nhau sẽ tạo ra ảnh xếp hàng khác nhau, dù tập bốn bạn không đổi.

**Hiểu bản chất trước công thức.** Để xếp hết n đối tượng **phân biệt**, vị trí thứ nhất có n lựa chọn, vị trí sau còn n−1,… đến vị trí cuối còn 1. Do đó số hoán vị bằng n!=n(n−1)…2·1; quy ước 0!=1 giúp công thức nhất quán với tập rỗng, không có nghĩa là 0 vật có nhiều cách.

**Điều kiện và giới hạn:** Đếm thứ tự của **tất cả** n đối tượng riêng biệt, mỗi đối tượng dùng đúng một lần. Nếu vật trùng nhau thì n! có thể đếm lặp, cần quy tắc khác.

> **ĐỊNH NGHĨA · HOÁN VỊ**
>
> Với \(n\) đối tượng phân biệt, một hoán vị là một cách **xếp thứ tự toàn bộ n đối tượng**; số hoán vị \[P_n=n!,\quad n\ge1.\]

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Có 4 cuốn sách Toán, Văn, Anh, Lý khác nhau, xếp theo hàng. Chọn vị trí đầu có 4 cách, vị trí sau 3, rồi 2, rồi 1. Tổng 4×3×2×1=**24** cách.

**Vận dụng trước khi đối chiếu.** Có 5 học sinh khác nhau xếp thành một hàng, không ràng buộc. Có bao nhiêu thứ tự?

<!-- ITEM_ID: THPT-TOP19-T05; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O05; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Hoán vị cả 5 học sinh, mỗi người một vị trí: 5!=**120**.

**Nếu chưa đúng (D6):** Nếu em dùng tổ hợp, hãy đổi chỗ hai học sinh; thứ tự hàng đổi thành kết quả khác, do đó phải đếm tất cả thứ tự.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 2.2. Chỉnh hợp: chọn một số rồi phân vai

<!-- LESSON_ID: TOP19-M06; OUTCOME_ID: TOP19-O06; ORIGINAL_SGK_SKILL: G10-B24-ARRANGEMENT; S1_LESSON: G10-B24; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Hội chợ có ban ba người giữ ba vai trưởng, thư ký, thủ quỹ. Chọn đúng ba bạn nhưng đổi người giữ vai sẽ thay đổi kết quả.

**Hiểu bản chất trước công thức.** Chỉnh hợp chập k của n phần tử phân biệt là chọn k phần tử **có thứ tự**, không lặp. Vị trí đầu có n cách, kế có n−1,… k vị trí: A(n,k)=n!/(n−k)!.

**Điều kiện và giới hạn:** 0≤k≤n là số nguyên; các vai/ô có phân biệt thứ tự, mỗi đối tượng chỉ nhận một vai. Không dùng công thức này khi một người được giữ nhiều vai nếu đề cho phép.

> **ĐỊNH NGHĨA · CHỈNH HỢP**
>
> Chỉnh hợp chập \(k\) của \(n\) phần tử phân biệt là chọn \(k\) phần tử **có thứ tự, không lặp**. \[A_n^k=\frac{n!}{(n-k)!},\qquad 1\le k\le n.\] **Điều kiện trong nội dung SGK:** \(n,k\) nguyên, \(n\ge1\). Quy ước trường hợp \(k=0\) là một mở rộng của phép đếm rỗng, không trình bày như định nghĩa bắt buộc ở đây.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Từ 5 bạn chọn trưởng, thư ký, thủ quỹ, mỗi vai một người. Trưởng 5 cách, thư ký 4, thủ quỹ 3: A(5,3)=5×4×3=**60**.

**Vận dụng trước khi đối chiếu.** Từ 6 bạn chọn một trưởng nhóm và một phó nhóm khác nhau. Có bao nhiêu cách?

<!-- ITEM_ID: THPT-TOP19-T06; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O06; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Hai vai phân biệt, lần lượt 6 rồi 5 lựa chọn: A(6,2)=**30**.

**Nếu chưa đúng (D6):** Nếu ra 15, em đang coi A làm trưởng/B làm phó giống B trưởng/A phó; hãy viết hai kết quả để thấy khác.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 2.3. Tổ hợp: chỉ chọn nhóm, không phân vai

<!-- LESSON_ID: TOP19-M07; OUTCOME_ID: TOP19-O07; ORIGINAL_SGK_SKILL: G10-B24-COMBINATION; S1_LESSON: G10-B24; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Nhóm bạn đại diện đi thi không phân vai. Viết nhóm AB hay BA vẫn cùng hai người, nên phép đếm có thứ tự đang đếm nhiều lần một nhóm.

**Hiểu bản chất trước công thức.** Mỗi nhóm k người có đúng k! cách hoán đổi thứ tự (k người phân biệt). Vì chỉnh hợp đã đếm mỗi nhóm k! lần, số nhóm C(n,k)=A(n,k)/k!=n!/[k!(n−k)!]. Đây là số tập con k phần tử, không phải công thức học riêng khỏi chỉnh hợp.

**Điều kiện và giới hạn:** 0≤k≤n là số nguyên; nhóm không phân vai/không xét thứ tự và mỗi người chỉ chọn một lần. C(n,0)=C(n,n)=1; C(n,k)=C(n,n−k) do chọn người cũng tương ứng chọn nhóm không được chọn.

> **ĐỊNH NGHĨA · TỔ HỢP**
>
> Tổ hợp chập k của n phần tử phân biệt là chọn k phần tử **không xét thứ tự, không lặp**. \[C_n^k=\binom nk=\frac{n!}{k!(n-k)!}.\]

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Chọn 2 người từ 5 người khác nhau, không phân vai: chọn có thứ tự 5×4=20 cặp. Mỗi nhóm bị kể 2!=2 lần (AB,BA), nên C(5,2)=20/2=**10** nhóm.

**Vận dụng trước khi đối chiếu.** Chọn một nhóm 3 người từ 6 người khác nhau, không phân vai. Có bao nhiêu nhóm?

<!-- ITEM_ID: THPT-TOP19-T07; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O07; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

C(6,3)=6×5×4/(3×2×1)=**20** nhóm.

**Nếu chưa đúng (D6):** Nếu em ra 120, đó là số thứ tự của bộ ba; mỗi nhóm bị đếm 3!=6 lần, phải chia 6.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 2.4. Chọn nhóm có điều kiện và phân vai sau

<!-- LESSON_ID: TOP19-M08; OUTCOME_ID: TOP19-O08; ORIGINAL_SGK_SKILL: G10-B24-CONSTRAINTS; S1_LESSON: G10-B24; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Đội hội chợ cần đủ nữ và nam, nhưng chỉ chọn bốn người không phân vai. Ta cần đếm đúng thành phần trước; nếu sau đó chỉ định trưởng nhóm mới nhân thêm số cách chọn trưởng.

**Hiểu bản chất trước công thức.** Cố định số lượng ở từng nhóm rời nhau rồi dùng tổ hợp từng nhóm; nhân vì một kết quả cần đủ các phần; nếu có nhiều cấu hình thành phần khác nhau thì cộng các tích. Nếu sau khi chọn nhóm phân vai, nhân tiếp số cách phân vai **trong từng nhóm**.

**Điều kiện và giới hạn:** Các nhóm người ban đầu không giao; ràng buộc “đúng” hay “ít nhất” phải đọc chính xác; không nhân thêm vai trò khi đề không có.

> **PHƯƠNG PHÁP · Chọn nhóm theo điều kiện**
>
> Đếm số cách chọn mỗi nhóm bằng tổ hợp, nhân khi cần lựa chọn ở các nhóm đồng thời; chỉ sau khi nhóm đã chọn mới nhân số cách phân vai nếu đề yêu cầu.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Từ 5 nữ và 4 nam, chọn nhóm 3 người gồm đúng 2 nữ, 1 nam, không phân vai: C(5,2)×C(4,1)=10×4=**40** nhóm. Nếu cần thêm đội trưởng từ nhóm đã chọn, mới nhân 3, được 120 trường hợp có trưởng.

**Vận dụng trước khi đối chiếu.** Từ 4 bạn nữ và 3 bạn nam chọn nhóm 3 người gồm đúng 2 nữ, 1 nam, không phân vai. Bao nhiêu nhóm?

<!-- ITEM_ID: THPT-TOP19-T08; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O08; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Chọn 2 nữ trong 4: C(4,2)=6; chọn 1 nam trong 3: 3. Nhân: **18** nhóm.

**Nếu chưa đúng (D6):** Nếu tính A(4,2)×3, em đã phân biệt thứ tự hai nữ; bài này chỉ chọn nhóm nên dùng tổ hợp.

</details>

**Nối sang bài kế:** Hãy tự kiểm thử n!, nPr và nCr ở O14 để nhớ khi nào kết quả là một **nhóm** và khi nào là **danh sách có thứ tự**. Sau đó C(n,k) sẽ trở thành hệ số trong khai triển Newton.


#### 2.5. Máy tính cầm tay hỗ trợ tính n!, chỉnh hợp và tổ hợp — và cách tự kiểm kết quả

<!-- LESSON_ID: TOP19-M14; OUTCOME_ID: TOP19-O14; ORIGINAL_SGK_SKILL: G10-B24-CALCULATOR_N_FACTORIAL_NPR_NCR; S1_LESSON: G10-B24; S1_PRINT_PAGE: 70; SOURCE_ROLE: SGK_CORE_AUTHORITY; SOURCE_STATUS: DIRECT_ORIGINAL_PDF_VERIFIED -->

**Vì sao cần học?** Khi số phần tử tăng lên, việc nhân thủ công dễ mất thời gian và sai số. Bài học phần này hướng dẫn dùng máy tính cầm tay để tính **hoán vị, chỉnh hợp, tổ hợp**. Máy chỉ giúp tính số nhanh hơn; em vẫn phải hiểu bài toán là **xếp có thứ tự hay chọn nhóm**, nếu không máy sẽ cho đúng phép tính nhưng sai phương pháp.

**Hiểu bản chất trước khi bấm máy.** Trước hết hãy viết rõ ý nghĩa và đối số: `n!` là xếp hết n vật; `nPr` (hay `A_n^k`) là chọn k vật **có thứ tự** từ n; `nCr` (hay `C_n^k`) là chỉ chọn k vật **không thứ tự**. Một số máy có menu xác suất/hoán vị/tổ hợp, máy khác cần phím `SHIFT` hoặc tổ hợp phím riêng; **không có một chuỗi phím chung cho mọi mẫu máy**. Trên máy đang dùng, tìm chức năng được ghi `x!`, `nPr`, `nCr` trong hướng dẫn/nhãn phím, nhập đúng n rồi k, nhấn dấu bằng. Nếu máy không có chức năng này, em dùng các tích ngắn và chia bằng tay; kiến thức phải tự đủ, không phụ thuộc thương hiệu máy.

**Điều kiện và giới hạn:** n và k nguyên, n≥0, 0≤k≤n; số hoán vị/chỉnh hợp/tổ hợp luôn không âm và nguyên. Để kiểm kết quả, dùng `A_n^k = C_n^k × k!`. Lưu ý `nPr` không phải `nCr`; giới hạn số lớn của máy có thể gây tràn, không được xem hiển thị `E` hoặc kết quả thập phân xấp xỉ là số cách chính xác nếu đề đếm hữu hạn.

> **PHƯƠNG PHÁP · Máy tính cầm tay**
>
> Các phép \(n!\), \(nPr\), \(nCr\) giúp tính số khi đã xác định đúng **xếp hết, chọn và xếp k, hay chọn k không thứ tự**. Dùng máy để kiểm phép tính, không thay bước nhận dạng mô hình.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Xếp cả 6 sách khác nhau: dùng `6!` và đối chiếu 6×5×4×3×2×1=**720**. Từ 8 người chọn **hai chức danh phân biệt**, dùng `8 nPr 2` nên A(8,2)=8×7=**56**. Nhưng nếu chỉ **chọn hai người không phân vai**, dùng `8 nCr 2` nên C(8,2)=56/2!=**28**. Cả ba phép tính đều được đối chiếu thủ công: máy không quyết định phương pháp thay em.

**Vận dụng trước khi đối chiếu.** Từ 8 ứng viên khác nhau, chọn 3 bạn giữ ba vai trò phân biệt. Hãy (a) xác định phép tính máy cần dùng, (b) cho số cách và (c) tự kiểm bằng tích không cần máy.

<!-- ITEM_ID: THPT-TOP19-T14; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O14; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Ba vai khác nhau, nên dùng **nPr** (chỉnh hợp): A(8,3)=8×7×6=**336** cách. Trên máy có `nPr`, tính `8 nPr 3`; trên máy không có, nhân ba số giảm dần 8·7·6. Không dùng C(8,3) vì đó là chọn **nhóm không phân vai**.

**Nếu chưa đúng (D6):** Nếu kết quả ra 56, em mới chọn hai vai thay vì ba. Nếu ra C(8,3)=56, em quên **ba vai phân biệt**; so A(8,3)=C(8,3)×3!=56×6=336. Quay lại O06/O07 để phân biệt kết quả có thứ tự và không có thứ tự.

</details>

**Nối sang Bài 25:** Các số `C(n,k)` trên máy không phải một loại hệ số bí ẩn: chúng chính là số cách chọn k vị trí trong n thừa số của nhị thức. Bây giờ em có thể nhìn tam giác Pascal và hiểu vì sao các số tổ hợp trở thành hệ số Newton.

### 3. Nhị thức Newton và các vận dụng

![Tam giác Pascal từ hàng n=0 đến n=4](../../../../docs/assets/images/thpt/FIG-TOP19-B25-PASCAL-WHITE-R00.svg)

**Đọc hình:** Hàng thứ tư 1,4,6,4,1 giải thích hệ số của (a+b)⁴. Số 6 ở giữa nhận từ 3+3 của hàng trên, đồng thời bằng C(4,2) là số cách lấy hai vị trí b. Đây là kết nối **tổ hợp → hệ số**, không phải công thức cần nhớ rời nhau.

[Mở mô hình tương tác công khai: “Hệ số Newton n=4,5”](Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114.html) — đổi k và đọc hạng tử, không dùng ngoài phạm vi n=4,5 khi chưa học mở rộng.

#### 3.1. Nhị thức Newton: hệ số là số cách chọn vị trí

<!-- LESSON_ID: TOP19-M09; OUTCOME_ID: TOP19-O09; ORIGINAL_SGK_SKILL: G10-B25-NEWTON_EXPANSION; S1_LESSON: G10-B25; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Khai triển (a+b)^4 bằng nhân từng thừa số rất dài. Nhưng mỗi hạng tử tương ứng một quyết định lấy a hay b ở bốn vị trí; hệ số được đếm bằng chính tổ hợp vừa học.

**Hiểu bản chất trước công thức.** Để nhận hạng tử a^(n−k)b^k trong (a+b)^n, chọn đúng k trong n vị trí lấy b, các vị trí còn lại lấy a. Có C(n,k) cách. Vì thế khai triển là tổng các hệ số C(n,k)a^(n−k)b^k. Ở phạm vi SGK đang đối chiếu chỉ học chắc n=4,5; không đưa mũ bất kỳ vào Core nếu chưa xác nhận.

**Điều kiện và giới hạn:** n là số nguyên không âm; trong chương này đặc biệt dùng n=4 hoặc n=5. Hệ số là số cách chọn vị trí, không phải số lần ta viết chữ b trong một tích.

> **CÔNG THỨC · Nhị thức Newton**
>
> \[(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k,\qquad n\in\mathbb N.\] Hệ số \(\binom nk\) đếm số cách chọn \(k\) vị trí lấy \(b\) trong \(n\) thừa số. **Phạm vi học:** Trước tiên luyện trường hợp \(n=4\) và \(n=5\) ở Toán 10; ký hiệu tổng \(\sum\) cho số mũ tổng quát là **kiến thức mở rộng**, không coi là yêu cầu bắt buộc của bài Toán 10.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Trong (a+b)^4 muốn có a²b² phải lấy b ở 2 trong 4 thừa số. Có C(4,2)=**6** cách, nên hạng tử là 6a²b². Khai triển đầy đủ: (a+b)^4=a⁴+4a³b+6a²b²+4ab³+b⁴.

**Vận dụng trước khi đối chiếu.** Hệ số của x³ trong (x+1)^4 bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP19-T09; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O09; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Muốn x³ chọn x tại 3 trong 4 vị trí: C(4,3)=**4**.

**Nếu chưa đúng (D6):** Nếu em lấy C(4,1) thì vẫn ra 4 vì đối xứng, nhưng phải giải thích số lần chọn x là 3; thử hệ số x² để tự kiểm khái niệm.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 3.2. Khai triển có dấu âm: dấu đến từ số lần chọn

<!-- LESSON_ID: TOP19-M10; OUTCOME_ID: TOP19-O10; ORIGINAL_SGK_SKILL: G10-B25-COEFFICIENT_SIGN; S1_LESSON: G10-B25; SOURCE_ROLE: SGK_CORE_AUTHORITY -->

**Vì sao cần học?** Cùng hệ số tổ hợp nhưng (x−2)^5 có hạng tử dương và âm. Nếu chỉ nhớ 'dấu xen kẽ' mà không xét số lần chọn −2, ta rất dễ sai.

**Hiểu bản chất trước công thức.** Trong (u+v)^n, hạng tử chọn v đúng k lần có hệ số C(n,k)u^(n−k)v^k. Nếu v âm, dấu của hạng tử là (−1)^k. Khi hỏi hệ số x^m, tìm số lần chọn bằng cách giải phương trình số mũ trước rồi mới tính dấu.

**Điều kiện và giới hạn:** Với một đa thức thật, số mũ x là không âm; không nhầm thứ tự k là số lần lấy hạng tử thứ hai. Đặc biệt 0≤k≤n.

> **TÍNH CHẤT · Dấu của hạng tử**
>
> \[(a-b)^n=\sum_{k=0}^{n}(-1)^k\binom nk a^{n-k}b^k.\] Dấu \((-1)^k\) đến từ chọn \(-b\) k lần, không tự gắn dấu theo vị trí nhìn vào biểu thức.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Tìm hệ số x³ trong (2x−1)^5. Mỗi hạng tử chọn −1 đúng k lần còn (2x)^(5−k); muốn x³ thì 5−k=3 nên k=2. Hệ số C(5,2)·2³·(−1)²=10·8=**80**. Dấu dương do hai dấu âm nhân nhau.

**Vận dụng trước khi đối chiếu.** Hệ số x² trong (x−2)^4 là bao nhiêu?

<!-- ITEM_ID: THPT-TOP19-T10; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O10; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Muốn x² thì k=2 lần chọn −2. Hệ số C(4,2)(−2)²=6·4=**24**.

**Nếu chưa đúng (D6):** Nếu ra −24, kiểm lại: chọn −2 hai lần thì tích dương; dấu phụ thuộc k chẵn/lẻ.

</details>

**Nối sang bài kế:** Nhớ kiểm chính xác một kết quả cần đếm và điều kiện của nó trước khi dùng công thức.

#### 3.3. Nhị thức Newton để ước lượng tăng trưởng: không nhầm gần đúng với chính xác

<!-- LESSON_ID: TOP19-M13; OUTCOME_ID: TOP19-O13; ORIGINAL_SGK_SKILL: G10-B25-BINOMIAL_APPROX_APPLICATION; S1_LESSON: G10-B25; S1_PRINT_PAGE: 75; SOURCE_ROLE: SGK_CORE_AUTHORITY; SGK_EXERCISES: 8.15_AND_8.16_ORIGINAL_CONTEXT_NOT_COPIED -->

**Vì sao cần học?** Hội chợ muốn ước tính nhanh lượng đơn đặt hàng sau vài đợt tăng trưởng. Nhân lặp (1+r)^5 có thể tính chính xác bằng máy, nhưng đôi khi ta chỉ cần **ước lượng có lý do** và biết mình đang bỏ qua phần nào.

**Hiểu bản chất trước công thức.** Nếu lượng ban đầu N₀ tăng tỉ lệ r (viết dạng số thập phân) ở cuối mỗi năm, sau 5 năm ta có N₅=N₀(1+r)^5. Nhị thức Newton cho (1+r)^5=1+5r+10r²+10r³+5r⁴+r⁵. Khi 0<r≪1, các hạng chứa r²,r³,… nhỏ hơn nhiều so với 5r. **Hai số hạng đầu** cho ước tính N₅≈N₀(1+5r), chứ không phải một đẳng thức chính xác.

**Điều kiện và giới hạn:** r>-1 để hệ số tăng hằng năm không âm theo mô hình thực tế, và chỉ khi |r| nhỏ mới hy vọng bỏ qua các hạng bậc cao mà vẫn gần chính xác. Với r>0, các hạng bỏ đi đều dương, nên dùng hai số hạng đầu **ước lượng thấp hơn** số chính xác. Phải nêu rõ đơn vị số lượng, thời gian và giả thiết tỉ lệ mỗi năm như nhau.

> **VẬN DỤNG · Ước tính tăng trưởng**
>
> \[(1+r)^5=1+5r+10r^2+10r^3+5r^4+r^5.\] Khi \(|r|\) nhỏ, có thể dùng \(1+5r\) để **ước lượng**, nhưng phải nêu phần còn bỏ và không gọi là đẳng thức chính xác.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Một kho có 1 000 bộ dụng cụ, tăng 2% mỗi năm trong 5 năm, giả sử tăng theo hệ số đều. Chuyển 2% thành r=0,02. Ước lượng nhanh bằng hai số hạng đầu: 1000(1+5×0,02)=**1 100 bộ**. Tính cả nhị thức (hoặc máy) cho N₅=1000(1,02)^5≈**1 104,08** bộ; sai lệch ≈4,08 bộ. Giải thích sai lệch: 10r²+10r³+5r⁴+r⁵>0.

**Vận dụng trước khi đối chiếu.** Một kho ban đầu có 5 000 bộ dụng cụ, tăng 1% mỗi năm theo cùng tỉ lệ, trong 5 năm. Dùng **hai số hạng đầu** của (1+0,01)^5 để ước tính số bộ cuối kỳ và nêu vì sao đây không phải giá trị đúng tuyệt đối.

<!-- ITEM_ID: THPT-TOP19-T13; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O13; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

r=0,01. Hai số hạng đầu là 1+5r=1,05. Do đó 5 000×1,05=**5 250 bộ** (ước tính). Các hạng bậc 2 trở lên đều dương nên số thực tế mô hình 5 000×1,01^5 lớn hơn 5 250 một ít.

**Nếu chưa đúng (D6):** Nếu tính 5 000(1+0,01) mà bỏ mũ 5, em mới tính tăng một năm. Quay O09 để viết năm thừa số rồi đọc hệ số của r là C(5,1)=5. Nếu viết dấu bằng chính xác, hãy chỉ phần r² còn bị bỏ qua.

</details>

**Nối sang toàn Chuyên đề:** Em đã dùng quy tắc nhân trong đếm bước, tổ hợp trong chọn nhóm và chính số tổ hợp làm hệ số để ước lượng một mô hình thực tế. Không thay một ước lượng bằng kết quả chính xác khi đề yêu cầu độ sai số.


### Mở rộng sau mạch SGK bắt buộc (tự chọn)

Hai chặng tiếp theo giúp giải các bài SBT có lũy thừa `1/x` hoặc nhận biết tổng hệ số qua `P(1)`. Đây là phần **mở rộng**, không phải điều kiện tiên quyết để học Bài 25 trong SGK; có thể học sau khi em đã tự thử phần ước lượng ở `TOP19-O13`.

#### 3.4. Số hạng không chứa x: từ đa thức đến mở rộng phân thức

<!-- LESSON_ID: TOP19-M11; OUTCOME_ID: TOP19-O11; ORIGINAL_SGK_SKILL: G10-B25-CONSTANT_TERM; S1_LESSON: G10-B25; SOURCE_ROLE: SGK_CORE_POLYNOMIAL_CONSTANT_WITH_SBT_OPTIONAL_RECIPROCAL -->

**Vì sao cần học?** Trong \((3x-2)^5\), hệ số của các số hạng có \(x\) thay đổi theo số lần chọn \(3x\). Nhưng số hạng **không chứa \(x\)** xuất hiện khi không chọn \(3x\) lần nào. Đó là một trường hợp riêng của cách đếm vị trí đã học, không cần một mẹo mới.

**Hiểu bản chất trước công thức.** Trong khai triển \((ax+b)^n\), nếu chọn \(b\) đúng \(k\) lần thì số mũ của \(x\) là \(n-k\) (khi a khác 0). Muốn số hạng tự do, cần \(n-k=0\), tức \(k=n\): chọn \(b\) ở cả \(n\) thừa số, nên số hạng không chứa \(x\) là \(b^n\). Với nhị thức như \((4x-3)^5\), nó bằng \((-3)^5\), **âm**. Đừng nhân thêm \(C(n,1)\) khi chỉ có đúng một cách chọn tất cả các vị trí b: \(C(n,n)=1\).

**Điều kiện và giới hạn:** Đây là đa thức theo \(x\), nên không phải loại \(x=0\). Trong trường hợp \(a=0\), toàn bộ nhị thức là hằng số, vẫn có số hạng tự do \(b^n\). Chỉ khi gặp hạng tử dạng \(1/x\) (tham khảo SBT), mới phải kiểm \(x\ne0\), theo dõi số mũ âm và giải phương trình tổng số mũ bằng 0. Bài chứa \(1/x\) là **mở rộng tự chọn**, không coi là SGK Core.

> **MỞ RỘNG · Số hạng không chứa x**
>
> Trong mỗi số hạng khai triển, cộng số mũ của x từ các thừa số đã chọn. Chỉ giữ số hạng có **tổng số mũ bằng 0**; với phân thức cần điều kiện \(x\ne0\). Đây là mở rộng thực hành, không phải toàn bộ Core B25.

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Tìm số hạng không chứa \(x\) trong \((2x-3)^4\). Nếu chọn \(2x\) ở bất cứ thừa số nào, tích chứa \(x\); do đó để không chứa \(x\) phải chọn \(-3\) ở đủ bốn vị trí. Số hạng cần tìm là \((-3)^4=\mathbf{81}\). Cách đếm vị trí giải thích rõ hơn việc dò năm hạng tử.

**Vận dụng trước khi đối chiếu.** Trong khai triển \((3x-2)^5\), số hạng không chứa \(x\) là bao nhiêu? Giải thích bằng cách chọn hạng tử từ năm thừa số.

<!-- ITEM_ID: THPT-TOP19-T11; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O11; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Chọn \(-2\) từ cả năm thừa số, không chọn \(3x\) ở vị trí nào, nên có duy nhất \(C(5,5)=1\) cách cho hạng tử đó. Hệ số tự do là \((-2)^5=\mathbf{-32}\).

**Nếu chưa đúng (D6):** Nếu được +32, em đã quên số lần chọn thừa số âm là **5 lần (lẻ)**. Nếu tính \(5\cdot(-2)\), em đã nhầm cộng năm lần với **nhân năm thừa số**. Thử n=2 trước: \((x-2)^2=x^2-4x+4\) có hằng số \((-2)^2=4\).

</details>

**Tự chọn mở rộng sau khi hiểu đa thức:** Với \((x+2/x)^4\), \(x\ne0\), nếu chọn \(2/x\) đúng \(k\) lần thì số mũ \(x\) là \(4-2k\). Số hạng không chứa \(x\) chỉ khi \(4-2k=0\), \(k=2\), được \(C(4,2)\cdot2^2=\mathbf{24}\). Đây là một họ bài mở rộng, **không thay câu Vận dụng cơ bản**.

**Nối sang bài kế:** Từ đọc từng số hạng, em có thể kiểm toàn bộ hệ số bằng cách thay \(x=1\) nếu biểu thức là đa thức.

#### 3.5. Tổng hệ số và tam giác Pascal (vận dụng sau khai triển)

<!-- LESSON_ID: TOP19-M12; OUTCOME_ID: TOP19-O12; ORIGINAL_SGK_SKILL: G10-B25-COEFFICIENT_SUM; S1_LESSON: G10-B25; SOURCE_ROLE: TOPIC_EXTENSION_OPTIONAL; OPTIONAL_SCOPE -->

**Vì sao cần học?** Khi khai triển dài, cộng từng hệ số là việc nặng. Nhưng tổng hệ số của đa thức P(x) lại có một cách kiểm đơn giản: thay x=1 để mọi x^k trở thành 1.

**Hiểu bản chất trước công thức.** Với đa thức P(x)=a₀+a₁x+...+aₙxⁿ, P(1)=a₀+...+aₙ. Các hệ số tổ hợp hàng n tạo thành tam giác Pascal; mỗi số ở giữa bằng tổng hai số ở hàng n−1 vì có thể chọn hoặc không chọn một phần tử cố định.

**Điều kiện và giới hạn:** Chỉ áp dụng tổng hệ số bằng P(1) khi biểu thức là **đa thức theo x**, không tùy tiện áp dụng cho phân thức chưa xác định tại 1. Tổng hệ số/tổng chẵn lẻ cao hơn yêu cầu n=4,5 phải gắn nhãn vận dụng hoặc mở rộng.

> **MỞ RỘNG · Tổng hệ số và tam giác Pascal**
>
> Với \(P(x)=\sum_{k=0}^{n}a_kx^k\), tổng hệ số bằng \(P(1)\). Tam giác Pascal thỏa \(\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}\) cho \(1\le k\le n-1\); nếu đếm tất cả nhóm con, \(\sum_k\binom nk=2^n\).

**Ví dụ có suy luận – vì sao chọn phương pháp này?** Tính tổng hệ số của P(x)=(2x−1)^4. Vì P là đa thức, thay x=1 được P(1)=(2−1)^4=**1**. Nếu khai triển, hệ số âm dương triệt tiêu để cho tổng đúng 1.

**Vận dụng trước khi đối chiếu.** Tổng hệ số của đa thức (x+2)^5 bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP19-T12; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP19-O12; ANSWER_REVEAL: OPT_IN_AFTER_TRY; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

Thay x=1: (1+2)^5=**243**.

**Nếu chưa đúng (D6):** Nếu cộng lẻ từng số hạng và sai, nhớ P(1) chỉ đúng khi cả đa thức được tính tại 1, không chỉ thay hệ số tổ hợp.

</details>

**Nối sang bài kế:** Thử nhìn lại một tình huống thực tế: từ quy tắc nhân tạo kết quả nhiều bước, từ không thứ tự suy ra tổ hợp, rồi tổ hợp trở thành hệ số trong khai triển.



## 2. Luyện tập

**Học theo độ sâu:** Từng nhóm câu được xếp từ hiểu cấu trúc kết quả → áp dụng phép đếm → xử lý điều kiện → vận dụng tổng hợp. Hãy giải trước, tự mở lời giải sau. Ở nơi có câu SGK tương đương, trang này dùng placement trỏ **một ID canonical**, không chép lại đề/đáp án.

### 2.1. Đếm đúng một lựa chọn: khi nào cộng?

<!-- ITEM_ID: THPT-TOP19-P01; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O01; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Trong quầy có 6 loại nước trà và 4 loại nước trái cây khác nhau, các loại không trùng nhau. Khách chọn đúng một loại. Có bao nhiêu cách?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Hai nhóm không giao; mỗi kết quả chỉ chọn một loại. Áp dụng cộng 6+4=**10** cách.

**D6 – Khắc phục lỗi thường gặp:** Nếu cộng hai danh sách vẫn bị trùng một sản phẩm, phải tách/loại giao trước. Bài này đã nêu rõ không trùng.

</details>

### 2.2. Một kết quả gồm nhiều bước: khi nào nhân?

<!-- ITEM_ID: THPT-TOP19-P02; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O02; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Một suất ăn gồm đúng một món khai vị từ 2 món, một món chính từ 3 món và một đồ uống từ 4 món. Có bao nhiêu suất ăn?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Mỗi kết quả có đủ 3 thành phần. Theo quy tắc nhân: 2×3×4=**24** suất ăn khác nhau.

**D6 – Khắc phục lỗi thường gặp:** Nếu chỉ nhân 2×3, em quên bước đồ uống. Viết rõ ba vị trí của một suất trước khi đếm.

</details>

### 2.3. Đếm các số: chữ số đầu và điều kiện lặp

<!-- ITEM_ID: THPT-TOP19-P03; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O03; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Từ {0,1,2,3,4} lập số tự nhiên ba chữ số đôi một khác nhau. Có bao nhiêu số?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Hàng trăm có 4 cách (khác 0); hàng chục còn 4; hàng đơn vị còn 3. Vậy **4×4×3=48** số.

**D6 – Khắc phục lỗi thường gặp:** Vẽ các ô hàng trăm/chục/đơn vị; chỉ ô đầu cấm 0. Sau mỗi lựa chọn xóa chữ số đã dùng.

</details>

### 2.4. Chia trường hợp khi đếm số chẵn

<!-- ITEM_ID: THPT-TOP19-P04; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O04; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Từ {0,1,2,3,4,5} lập số chẵn có ba chữ số khác nhau. Có bao nhiêu số?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Cuối 0: 5×4=20. Cuối 2 hoặc 4: 2 cách, hàng trăm còn 4 chữ số khác 0, hàng chục còn 4; 2×4×4=32. Tổng **52** số.

**D6 – Khắc phục lỗi thường gặp:** Không gộp các chữ số cuối thành một nhánh trước khi xét 0. Kiểm 20+32=52, tránh thiếu điều kiện khác nhau.

</details>

### 2.5. Hoán vị: xếp tất cả đối tượng

<!-- ITEM_ID: THPT-TOP19-P05; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O05; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Có 6 quyển sách phân biệt xếp vào 6 vị trí liên tiếp. Có bao nhiêu cách?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Hoán vị tất cả 6 quyển: 6!=**720** cách.

**D6 – Khắc phục lỗi thường gặp:** Kiểm từng ô nhận lần lượt 6,5,4,3,2,1 lựa chọn. Không cộng 6+5+…+1.

</details>

### 2.6. Chỉnh hợp: chọn một số rồi phân vai

<!-- ITEM_ID: THPT-TOP19-P06; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O06; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Có 7 vận động viên phân biệt, trao huy chương vàng, bạc, đồng cho 3 người khác nhau. Có bao nhiêu kết quả?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Ba vị trí có thứ tự: A(7,3)=7×6×5=**210** cách.

**D6 – Khắc phục lỗi thường gặp:** Chọn 3 người chưa xong vì còn phân vai vàng/bạc/đồng. Kiểm vai nào được chọn đầu tiên.

</details>

### 2.7. Tổ hợp: chỉ chọn nhóm, không phân vai

<!-- ITEM_ID: THPT-TOP19-P07; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O07; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Chọn nhóm 4 người từ 7 người khác nhau, không phân vai. Có bao nhiêu nhóm?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

C(7,4)=7!/(4!3!)=7×6×5/(3×2×1)=**35** nhóm.

**D6 – Khắc phục lỗi thường gặp:** Không dùng 7×6×5×4 vì thứ tự của thành viên không quan trọng; mỗi nhóm bị lặp 4! lần.

</details>

### 2.8. Chọn nhóm có điều kiện và phân vai sau

<!-- ITEM_ID: THPT-TOP19-P08; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O08; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Một lớp có 6 bạn nam và 5 bạn nữ. Chọn nhóm 4 người gồm đúng 2 nam, 2 nữ, không phân vai. Có bao nhiêu nhóm?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

C(6,2)×C(5,2)=15×10=**150** nhóm.

**D6 – Khắc phục lỗi thường gặp:** Nếu nhân thêm 4! khi chưa phân vai, em sẽ đếm lặp mỗi nhóm. Không thêm điều kiện mà đề không nêu.

</details>

### 2.9. dùng máy và kiểm tay nCr / nPr

<!-- ITEM_ID: THPT-TOP19-P14; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O14; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Từ 9 người khác nhau: (a) chỉ chọn nhóm 3 người không phân vai, (b) chọn 3 người giữ ba chức danh phân biệt. Hãy nêu phép tính trên máy (nCr hay nPr), cho đáp án và kiểm quan hệ giữa hai kết quả mà không cần máy.

<details><summary>Tự đối chiếu lời giải từng bước</summary>

(a) Chọn **nhóm**, dùng `9 nCr 3`: C(9,3)=9×8×7/(3×2×1)=**84 nhóm**. (b) Chọn **ba chức danh phân biệt**, dùng `9 nPr 3`: A(9,3)=9×8×7=**504** cách. Kiểm: 84×3!=84×6=**504**; máy và công thức phải thống nhất.

**D6 – Khắc phục lỗi thường gặp:** Nếu dùng nPr ở câu (a), hãy đổi chỗ ba người mà không phân vai: đó vẫn là cùng một nhóm. Nếu cả hai câu cùng ra 84, hãy nêu ba chức danh và nhân 3! số cách phân vai. Kiểm cặp (n,k)=(9,3) nhập đúng thứ tự, không dùng nCr khi cần nPr.

</details>

### 2.10. Nhị thức Newton: hệ số là số cách chọn vị trí

<!-- ITEM_ID: THPT-TOP19-P09; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O09; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Hãy khai triển đầy đủ (x+2)^4 và cho biết hệ số x².

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Dùng hệ số hàng n=4 là 1,4,6,4,1: (x+2)^4=x⁴+4·2x³+6·2²x²+4·2³x+2⁴=**x⁴+8x³+24x²+32x+16**. Hệ số x² là **24**.

**D6 – Khắc phục lỗi thường gặp:** Nếu viết hệ số x² chỉ là 6, em quên chọn hạng tử 2 ở hai vị trí, nên còn nhân 2².

</details>

### 2.11. Khai triển có dấu âm: dấu đến từ số lần chọn

<!-- ITEM_ID: THPT-TOP19-P10; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O10; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Tìm hệ số của x⁴ trong (3x−2)^5.

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Muốn x⁴ thì chọn −2 đúng một lần, 3x bốn lần. Hệ số C(5,1)·3⁴·(−2)=5·81·(−2)=**−810**.

**D6 – Khắc phục lỗi thường gặp:** Nếu ra +810, hãy viết riêng thừa số −2 trước khi nhân; số lần chọn nó là k=1 lẻ.

</details>

### 2.12. Ước lượng hai số hạng đầu trong tăng trưởng

<!-- ITEM_ID: THPT-TOP19-P13; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O13; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Một kho ban đầu có 2 000 sản phẩm. Số sản phẩm tăng theo hệ số 2% mỗi năm trong 5 năm. **(a)** Dùng hai số hạng đầu của (1+0,02)^5 để ước lượng số sản phẩm. **(b)** Tính giá trị mô hình chính xác bằng máy (làm tròn đến 2 chữ số thập phân) và nhận xét ước lượng cao hay thấp.

<details><summary>Tự đối chiếu lời giải từng bước</summary>

(a) Với r=0,02, (1+r)^5≈1+5r=1,10; số ước lượng là 2 000×1,10=**2 200** sản phẩm. (b) Giá trị mô hình đầy đủ là 2 000×1,02^5=**2 208,1616064≈2 208,16** sản phẩm. Số ước lượng thấp hơn khoảng 8,16 sản phẩm vì phần bỏ qua 10r²+10r³+5r⁴+r⁵ dương.

**D6 – Khắc phục lỗi thường gặp:** Nếu ra 2040, em chỉ tính 1 năm, cần hệ số 5r cho 5 năm. Nếu trừ 8,16 ra số khác, hãy xác định rõ “ước lượng thấp hơn” nghĩa là 2 200 nhỏ hơn 2 208,16.

</details>


**Bài tự chọn / mở rộng sau nội dung SGK:**

### 2.13. Số hạng không chứa x: tìm số mũ bằng 0 (mở rộng)

<!-- ITEM_ID: THPT-TOP19-P11; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O11; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

**Tự chọn mở rộng SBT (sau phần đa thức):** Tìm số hạng không chứa x trong (2x+1/x)^4, x≠0.

<details><summary>Tự đối chiếu lời giải từng bước</summary>

Hạng tử với k lần chọn 1/x có số mũ x là 4−2k. Lấy k=2, hệ số C(4,2)·(2)^(4−2)·1²=6·4=**24**.

**D6 – Khắc phục lỗi thường gặp:** Dù chọn phần 1/x hai lần, còn hai phần 2x nên phải nhân 2²; đừng bỏ hệ số 2.

</details>

### 2.14. Tổng hệ số và tam giác Pascal (vận dụng sau khai triển)

<!-- ITEM_ID: THPT-TOP19-P12; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP19-O12; ASSESSMENT: FORMATIVE_ONLY_NO_MASTERY -->

Tổng hệ số của đa thức (2x+1)^4 bằng bao nhiêu?

<details><summary>Tự đối chiếu lời giải từng bước</summary>

P(1)=(2+1)^4=3⁴=**81**. Kiểm cách khác: hệ số khai triển cộng lại phải bằng 81.

**D6 – Khắc phục lỗi thường gặp:** Nếu ra 16, em đã bỏ hạng tử +1. Thay toàn bộ nhị thức tại x=1 trước khi nâng lũy thừa.

</details>


### Tự luận có lời giải và rubric — câu mới thuộc một thư viện canonical chung

### Tự luận W01 /4 — giải thích phương pháp và điều kiện

<!-- ITEM_ID: THPT-TOP19-W01; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP19-O04; PUBLIC_SELF_SCORED_ONLY_NO_MASTERY; NO_OFFICIAL_READINESS -->

Dùng các chữ số {0,1,2,3,4}, lập số tự nhiên **ba chữ số lẻ**, các chữ số không lặp. Hãy đếm bằng chia trường hợp và giải thích vì sao không đếm cả chuỗi bắt đầu 0.

<details><summary>Đối chiếu sau khi tự giải và chấm theo rubric /4</summary>

**Lời giải:** Chọn hàng đơn vị lẻ 1 hoặc 3: 2 cách. Hàng trăm khác 0 và khác hàng đơn vị: còn 3 cách; hàng chục còn 3 cách (có thể là 0). Theo quy tắc nhân **2×3×3=18** số.

**Rubric 4 điểm:**
- Nhận ra đơn vị thuộc {1,3}: 2 cách — **1 điểm**.
- Hàng trăm còn 3 lựa chọn hợp lệ khác 0 — **1 điểm**.
- Hàng chục còn 3 lựa chọn và không lặp — **1 điểm**.
- Nhân 2×3×3=18, nêu đây là số có ba chữ số — **1 điểm**.

**D6 — nếu chưa làm được:** Nếu ra 24, em đang đếm cả chữ số 0 ở hàng trăm hoặc không cố định hàng đơn vị lẻ. Viết ba ô [trăm][chục][đơn vị], đặt đơn vị trước (1 hoặc 3), rồi loại 0 và chữ số đã dùng ở hàng trăm. Làm lại T04 (đuôi 0/2 và giới hạn chữ số đầu) trước khi giải lại W01. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>

### Tự luận W02 /4 — giải thích phương pháp và điều kiện

<!-- ITEM_ID: THPT-TOP19-W02; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP19-O08; PUBLIC_SELF_SCORED_ONLY_NO_MASTERY; NO_OFFICIAL_READINESS -->

Có 5 học sinh nữ và 4 học sinh nam. Chọn một nhóm gồm đúng 2 nữ và 2 nam không phân vai. Sau đó chọn đúng **một đội trưởng từ nhóm đã chọn**. Có bao nhiêu cách lập nhóm **có đội trưởng**?

<details><summary>Đối chiếu sau khi tự giải và chấm theo rubric /4</summary>

**Lời giải:** Chọn 2 nữ: C(5,2)=10; chọn 2 nam: C(4,2)=6. Có **60 nhóm không phân vai**. Mỗi nhóm có 4 người để chọn một trưởng, nên có **60×4=240** kết quả nhóm có trưởng. Nếu chỉ hỏi số nhóm thì đáp án phải dừng ở 60.

**Rubric 4 điểm:**
- Chọn 2 nữ bằng tổ hợp C(5,2)=10 — **1 điểm**.
- Chọn 2 nam bằng tổ hợp C(4,2)=6 — **1 điểm**.
- Tính 10×6=60 nhóm không phân vai — **1 điểm**.
- Chọn trưởng trong nhóm 4 cách, ra 240 và phân biệt 60 với 240 — **1 điểm**.

**D6 — nếu chưa làm được:** Nếu ra 60, em mới chọn nhóm và quên phân vai trưởng; nếu ra 240 ngay khi chỉ hỏi số nhóm, em đã thêm vai không có trong đề. Tách câu trả lời thành hai hàng: 10×6=60 nhóm và **mỗi nhóm 4 chọn trưởng**. Luyện lại T08/P08 để nhớ chỉ dùng tổ hợp khi không phân vai; sau đó giải lại W02. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>

### Tự luận W03 /4 — giải thích phương pháp và điều kiện

<!-- ITEM_ID: THPT-TOP19-W03; CONTENT_VERSION: TOP19-R03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP19-O10; PUBLIC_SELF_SCORED_ONLY_NO_MASTERY; NO_OFFICIAL_READINESS -->

Với đa thức P(x)=(x−2)^5, hãy **(a)** tìm hệ số của x², **(b)** tính tổng tất cả hệ số của P mà không cần khai triển đủ. Giải thích vì sao dấu âm xuất hiện.

<details><summary>Đối chiếu sau khi tự giải và chấm theo rubric /4</summary>

**Lời giải:** (a) Muốn x² phải chọn hạng tử −2 đúng 3 trong 5 vị trí: k=3. Hệ số C(5,3)·(−2)³=10·(−8)=**−80**. Dấu âm vì k lẻ. (b) Vì P(x) là đa thức nên tổng hệ số bằng P(1)=(1−2)^5=**−1**.

**Rubric 4 điểm:**
- Nêu đúng k=3 để được x² từ năm thừa số — **1 điểm**.
- Tính C(5,3)=10 và (−2)³=−8 — **1 điểm**.
- Kết luận hệ số x² là −80, giải thích dấu âm — **1 điểm**.
- Tính P(1)=−1 và nêu lý do tổng hệ số — **1 điểm**.

**D6 — nếu chưa làm được:** Nếu hệ số x² là +80, em đã bỏ dấu của (−2)³. Trước khi thế số, giải **5−k=2 ⇒ k=3**, sau đó ghi ba lần nhân hạng tử âm nên hệ số âm. Nếu tổng hệ số không bằng −1, hãy thay x=1 vào **cả đa thức P(x)** chứ không cộng dấu từng hạng theo cảm tính. Luyện lại T10/P10 về số lần chọn hạng tử âm; tiếp đó kiểm P(1) như O12 rồi giải lại W03. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>



### Thư viện SGK dùng chung — 25 ID canonical public đã có (chỉ trỏ placement)

**Bài luyện dùng chung:** Những bài này dùng lại đúng câu đã được biên soạn trong ngân hàng luyện tập, không sao chép đề hoặc lời giải thành bản thứ hai. Hãy chọn câu phù hợp, tự giải rồi mới xem phần Đối chiếu.

| SGK canonical item_id | Topic primary outcome | Topic placement | source role |
|---|---|---|---|
| THPT-G10-B23-C01 | TOP19-O01 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-C02 | TOP19-O02 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P01 | TOP19-O03 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P02 | TOP19-O02 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P03 | TOP19-O01 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P04 | TOP19-O02 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P05 | TOP19-O04 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B23-P06 | TOP19-O04 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-C01 | TOP19-O05 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-C02 | TOP19-O06 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P01 | TOP19-O07 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P02 | TOP19-O06 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P03 | TOP19-O05 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P04 | TOP19-O08 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P05 | TOP19-O08 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B24-P06 | TOP19-O05 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-C01 | TOP19-O09 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-C02 | TOP19-O09 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P01 | TOP19-O10 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P02 | TOP19-O11 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P03 | TOP19-O10 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P04 | TOP19-O10 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P05 | TOP19-O10 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P06 | TOP19-O12 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |
| THPT-G10-B25-P07 | TOP19-O10 | TOPIC/LUYEN_TAP/SGK_PUBLIC_REUSE | SGK_CANONICAL_REUSE |

## 3. Tự kiểm tra

**Chế độ hiện tại: `CLIENT_SELF_CHECK_NO_MASTERY` / chỉ tự đối chiếu.** Sáu câu đại diện dưới đây **dùng lại** câu công khai đã luyện với cùng item_id, **không** phải ngân hàng đánh giá độc lập hay `TOPIC_READINESS`. Vì đã có quyền mở lời giải, tuyệt đối không dùng điểm ở đây để chứng minh Skill Mastery. Trước Final Submit của kiểm tra độc lập trong website sau này, không được lộ đáp án, đúng/sai, rubric, gợi ý hay AI Tutor; chưa có RD1 private owner-held cho Topic.

| Tự đối chiếu | Canonical item có sẵn | Kiểm trọng tâm | Tình trạng |
|---|---|---|---|
| Bước 1 | THPT-TOP19-P02 | TOP19-O02 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 2 | THPT-TOP19-P04 | TOP19-O04 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 3 | THPT-TOP19-P06 | TOP19-O06 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 4 | THPT-TOP19-P07 | TOP19-O07 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 5 | THPT-TOP19-P09 | TOP19-O09 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 6 | THPT-TOP19-P10 | TOP19-O10 | PUBLIC_REPLAY_ONLY / NO_MASTERY |
| Bước 7 | THPT-TOP19-P13 | TOP19-O13 | PUBLIC_REPLAY_ONLY / NO_MASTERY |

**Đường khắc phục:** Nếu sai bài nào, trở lại đúng `TOP19-Oxx` → đọc “vì sao/bản chất/điều kiện” → làm Vận dụng `Txx` → luyện `Pxx`. Đây là lộ trình hỗ trợ thật, không chỉ một câu “ôn lại lý thuyết”.



### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 Kết nối tri thức, Tập Hai:** Chương VIII; Bài 23 trang in 60–65, Bài 24 trang 66–71, Bài 25 trang 72–75, cuối chương trang 76.
- **SBT Toán 10 Kết nối tri thức, Tập Hai (tham khảo họ dạng):** Bài 23 trang in 51–53, Bài 24 trang 54–55, Bài 25 trang 56–57, cuối chương 58–60.



<!-- END_EXACT_GITHUB_CONTENT_1 -->

---


# Source 2 of 5 — CĐ20 · Xác suất cổ điển (FULL EXACT LEARNER CONTENT)

SOURCE_GIT_BLOB: 51eb5d4ebb6504390e1e0ac378d6566e7d940c37
SOURCE_REPOSITORY_PATH: prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R05_NOTEBOOKLM_P1_OMEGA_20261114.md
SOURCE_BRANCH: authoring/plan22-20-probability-source-scope-preflight-20261114
SOURCE_PR: 860

<!-- BEGIN_EXACT_GITHUB_CONTENT_2 -->
# Chuyên đề 20 · Xác suất cổ điển và các quy tắc tính xác suất



## 1. Kiến thức

Một lượt quay số tại hội chợ có những kết quả nào? Nếu kết quả nằm trong hai nhóm thưởng, có bị tính trùng không? Hai lượt chơi có thực sự độc lập? Em sẽ học cách mô tả đúng không gian mẫu và biến cố trước, rồi mới chọn phép đếm, quy tắc cộng hoặc nhân. Kiến thức về tập hợp, phân số và đếm theo bước được nhắc lại tại chỗ; không phải hoàn thành một chuyên đề khác mới học được.

**Nguyên tắc đối chiếu:** Tất cả lời giải Vận dụng là nội dung public formative, chỉ mở sau khi thử. Không dùng các câu đã xem đáp án làm kiểm tra độc lập, không ghi Mastery.

### 1. Mô hình ngẫu nhiên



#### 1.1. Phép thử, không gian mẫu và biến cố

Một phép thử ngẫu nhiên có nhiều kết quả có thể xuất hiện, nhưng không biết chắc kết quả của một lần thực hiện. Tập tất cả kết quả sơ cấp là **không gian mẫu** \(\Omega\). Mỗi kết quả ghi nhận phải được mô tả rõ: số nào được chọn, thứ tự các lượt có quan trọng hay không, thẻ có được trả lại hay không.

Một **biến cố** \(A\) là tập con \(A\subseteq\Omega\): chỉ gồm những kết quả khiến câu phát biểu của \(A\) đúng. \(A=\varnothing\) là biến cố không thể, \(A=\Omega\) là biến cố chắc chắn.

> **ĐỊNH NGHĨA — Phép thử, không gian mẫu và biến cố**
>
> **Không gian mẫu** \(\Omega\) là **tập hợp tất cả các kết quả có thể xảy ra** của một phép thử ngẫu nhiên; mỗi kết quả sơ cấp là một phần tử \(\omega\in\Omega\). **Biến cố** \(A\subseteq\Omega\) là tập các kết quả làm biến cố xảy ra; \(\varnothing\) là biến cố không thể và \(\Omega\) là biến cố chắc chắn.

**Ví dụ hướng dẫn:** Rút đều một thẻ trong bảy thẻ mang số \(1,2,\ldots,7\). Khi đó \(\Omega=\{1,2,3,4,5,6,7\}\). Biến cố “lấy được số nguyên tố” có tập kết quả \(\{2,3,5,7\}\); biến cố đối là \(\{1,4,6\}\). Không được gọi “số nguyên tố” là một kết quả sơ cấp duy nhất.

**Tự chốt kiến thức:** Hãy luôn viết \(\Omega\) trước khi đếm; một cặp có thứ tự \((a,b)\) khác cặp không thứ tự \(\{a,b\}\).

**Vận dụng trước khi xem lời giải.** Gieo một xúc xắc 8 mặt đồng khả năng ghi các số 1–8. Viết Ω và biến cố “ra số chẵn”.

<!-- ITEM_ID: THPT-TOP20-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

Ω={1,2,3,4,5,6,7,8}; A={2,4,6,8}.

**D6 – Tự khắc phục:** Nếu chỉ viết xác suất 1/2, em chưa mô tả biến cố; hãy ghi kết quả sơ cấp vào tập.

</details>





**Vì sao cần xét tập con?** Khi đổi tên một kết quả thành một câu “trúng hay không”, em phải nhận biết **mọi kết quả** làm câu ấy đúng; nếu bỏ sót một phần tử, tử số xác suất sẽ sai. **Bản chất:** A là tập con Ω, kết quả thuộc A thì A xảy ra. **Ví dụ:** xúc xắc chia hết cho 3 có A={3,6}. **Giới hạn:** ∅ là biến cố không thể, Ω là chắc chắn, A không phải một con số xác suất.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Một vòng quay cân đối có các kết quả ghi 1 đến 6. Biến cố A là “kết quả không lớn hơn 2”. Hãy viết A và nói khi nào A xảy ra.

<!-- ITEM_ID: THPT-TOP20-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** A={1,2}; A xảy ra nếu lượt quay cho kết quả 1 hoặc 2.

**D6 – Tự khắc phục:** Nếu viết A={2}, em đã bỏ kết quả 1 cũng không lớn hơn 2. Xem từng phần tử Ω={1,…,6}.

</details>

#### 1.2. Đồng khả năng và cách tính xác suất

Đối với không gian mẫu hữu hạn với **mọi kết quả sơ cấp đồng khả năng**, xác suất của \(A\) là

Nếu đề chỉ nói có ba “loại kết quả”, chưa thể kết luận mỗi loại có xác suất \(1/3\). Phải xác định các kết quả sơ cấp thực sự có cơ hội như nhau, rồi mới đếm.

> **CÔNG THỨC — Xác suất cổ điển**
>
> \[P(A)=\frac{n(A)}{n(\Omega)},\quad n(\Omega)>0.\] Chỉ dùng khi các kết quả sơ cấp hữu hạn và đồng khả năng.

**Ví dụ hướng dẫn:** Một hộp có 8 phiếu khác nhau, mang nhãn \(A,A,B,B,B,C,C,C\), chọn ngẫu nhiên đều một phiếu. Không gian mẫu là 8 **phiếu vật lí**. Biến cố “nhãn B” có xác suất \(3/8\); ba nhãn A, B, C **không** có xác suất \(1/3\). Mô hình này dùng để *dạy kiến thức*, không lấy làm câu Tự kiểm tra độc lập.

**Kiểm tra trước khi tính:** Có đang đếm nhóm không thứ tự trong khi mẫu gốc là chuỗi có thứ tự không? Các kết quả được đếm có thực sự đồng khả năng không? Nếu không, không được dùng công thức cổ điển theo tỉ số đơn giản.

**Vận dụng trước khi xem lời giải.** Hộp có 2 phiếu đỏ và 4 phiếu xanh khác nhau, rút đều một phiếu. P(đỏ) có phải 1/2 vì có hai màu không?

<!-- ITEM_ID: THPT-TOP20-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

Không. Sáu phiếu vật lí đồng khả năng, P(đỏ)=2/6=1/3.

**D6 – Tự khắc phục:** Nếu dùng 1/2, em đếm màu thay vì từng phiếu; hãy đặt tên cho sáu phiếu.

</details>







**Vì sao gộp kết quả có thể làm hỏng đồng khả năng?** Hai lần tung đồng xu cân đối, độc lập tạo bốn chuỗi có thứ tự NN, NS, SN, SS đồng khả năng. Khi chỉ ghi **số mặt ngửa**, ta được ba nhãn 0, 1, 2 nhưng chúng tương ứng lần lượt với **1, 2, 1** chuỗi. **Bản chất:** chỉ các chuỗi sơ cấp đã xác nhận đồng khả năng, không phải ba nhãn sau khi gộp. **Ví dụ:** \(P(\text{đúng một ngửa})=2/4=1/2\), không phải 1/3. **Giới hạn:** trước khi dùng tỉ số đếm, phải chứng minh các kết quả sơ cấp được chọn có cùng xác suất.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Tung hai đồng xu cân đối và độc lập. Nếu chỉ ghi số mặt ngửa 0, 1, 2 thì ba giá trị ấy có đồng khả năng không? Hãy viết các chuỗi sơ cấp và tính xác suất có đúng một mặt ngửa.

<!-- ITEM_ID: THPT-TOP20-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** Không. Không gian mẫu gồm NN, NS, SN, SS, mỗi chuỗi có xác suất 1/4. Số ngửa 0 ứng với SS, số ngửa 1 ứng với NS và SN, số ngửa 2 ứng với NN. Vì vậy ba giá trị **không** đồng khả năng; xác suất đúng một ngửa là \(2/4=1/2\).

**D6 – Tự khắc phục:** Nếu ra 1/3, em đã đếm ba **nhãn** thay vì bốn chuỗi sơ cấp. Liệt kê đủ NN, NS, SN, SS rồi ghép mỗi chuỗi với số mặt ngửa tương ứng.

</details>

#### 1.3. Biến cố đối và xác suất bé

Với biến cố \(A\) trong \(\Omega\), biến cố đối \(\bar A=\Omega\setminus A\) gồm tất cả kết quả **không** làm \(A\) xảy ra. Hai tập không giao nhau và hợp bằng \(\Omega\), nên

Cách tính biến cố đối hữu ích khi đếm trực tiếp các trường hợp “ít nhất một” khó hơn đếm trường hợp “không có”.

> **TÍNH CHẤT — Biến cố đối**
>
> \[\bar A=\Omega\setminus A,\qquad P(\bar A)=1-P(A).\] A và đối A xung khắc, phủ hết mẫu.

**Ví dụ hướng dẫn:** Có 20 phiếu khác nhau được chọn đều, trong đó 2 phiếu thưởng. Biến cố \(A\) là “không trúng thưởng”. Khi đó \(P(A)=18/20=9/10\); biến cố đối “trúng một trong hai phiếu thưởng” có xác suất \(1/10\).

**Nguyên lí xác suất bé:** Một biến cố có \(0<P(A)\ll 1\) vẫn có thể xảy ra. Không suy ra biến cố không thể và không khẳng định số lần xảy ra trong một số lượt thử bằng chính xác “số lượt × xác suất”.

**Vận dụng trước khi xem lời giải.** Có 20 thẻ đồng khả năng, đúng 1 thẻ màu đen. Tính P(không đen). Biến cố đen có phải không thể?

<!-- ITEM_ID: THPT-TOP20-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

P(không đen)=19/20; P(đen)=1/20>0 nên đen là hiếm, không phải không thể.

**D6 – Tự khắc phục:** Nếu nói xác suất 0, em đã nhầm ít xảy ra với biến cố rỗng.

</details>







**Vì sao phải phân biệt hiếm và không thể?** Một giải thưởng có ít vé vẫn có thể xuất hiện ở lượt đầu. **Bản chất:** một kết quả thuộc Ω cho xác suất dương khi các kết quả sơ cấp hữu hạn đồng khả năng. **Ví dụ:** 1 vé thưởng trong 50 vé có P=1/50, trong khi không có vé thưởng thì P=0. **Giới hạn:** xác suất nhỏ không dự đoán chính xác số lần xuất hiện của một cuộc chơi ngắn.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Trong 100 vé đồng khả năng chỉ có một vé trúng. Biến cố trúng vé là không thể hay hiếm? Viết xác suất.

<!-- ITEM_ID: THPT-TOP20-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** P(trúng)=1/100>0; hiếm chứ không phải biến cố không thể.

**D6 – Tự khắc phục:** Nếu P=0, em đã bỏ một vé trúng còn có mặt trong Ω. Đếm n(A)=1 và n(Ω)=100.

</details>

#### 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây

![Sơ đồ cây hai lần tung đồng xu cân đối với bốn kết quả đồng khả năng](../../../../docs/assets/images/thpt/FIG-TOP20-G10-B27_TWO_TOSSES_TREE_WHITE_R00.svg)

**Đọc cây:** Lượt một có N/S, từ mỗi lựa chọn mở thêm hai nhánh N/S của lượt hai. Bốn lá **NN, NS, SN, SS** là bốn kết quả **có thứ tự**, cùng xác suất 1/4 trong mô hình xu cân đối. Biến cố “đúng một ngửa” gồm **NS và SN**, nên P=2/4; không gộp hai đường đi khác nhau chỉ vì cùng số lần ngửa. Cây không khẳng định các lá luôn đồng khả năng khi cơ chế thử khác.


Có hai kiểu phép thử cần phân biệt:

- **Chọn đồng thời không xét thứ tự:** chọn \(k\) trong \(n\) vật khác nhau và mọi nhóm đồng khả năng, tổng số kết quả là \(\binom nk\). Số trường hợp thuận lợi phải được đếm cùng kiểu “nhóm” này.
- **Thực hiện tuần tự:** dùng quy tắc nhân theo số lựa chọn từng bước hoặc sơ đồ cây. Nếu không hoàn lại, số lựa chọn ở bước sau thay đổi; nếu có hoàn lại, số lựa chọn có thể giữ nguyên. **Không được tự động coi mọi lá cây là đồng khả năng**, trừ khi đã kiểm chứng cách chọn ở mỗi giai đoạn.

> **PHƯƠNG PHÁP — Đếm và đọc sơ đồ cây**
>
> Đếm chuỗi có thứ tự khác nhóm không thứ tự; dùng \(\binom nk\) khi chọn nhóm không phân vai. Không suy mọi lá của cây đồng khả năng nếu chưa kiểm.

**Ví dụ hướng dẫn (tổ hợp):** Có 8 lá phiếu khác nhau đánh số từ 1 đến 8, bốc đồng thời 3 phiếu và mọi bộ 3 đồng khả năng. Số nhóm là \(\binom83=56\). Có 4 phiếu mang số chẵn; biến cố “cả ba số đều chẵn” có \(\binom43=4\) nhóm thuận lợi, do đó \(P=4/56=1/14\).

**Ví dụ hướng dẫn (đếm theo bước):** Có 4 chiếc thẻ khác nhau; rút liên tiếp 2 thẻ không hoàn lại. Mỗi kết quả là một **cặp có thứ tự**, với \(4\cdot3=12\) khả năng đồng đều nếu rút đều mỗi bước. Nếu bốc đồng thời 2 thẻ không xét thứ tự thì mô hình lại có \(\binom42=6\) nhóm, không thể trộn hai mẫu khi lập tỉ số.

**Vận dụng trước khi xem lời giải.** Từ 6 học sinh chọn một nhóm 2 người không phân vai; so với chọn trưởng rồi phó, có bao nhiêu kết quả mỗi loại?

<!-- ITEM_ID: THPT-TOP20-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

Không phân vai có C(6,2)=15 nhóm; phân hai vai có 6×5=30 cặp có thứ tự.

**D6 – Tự khắc phục:** Nếu có cả hai bằng 30, nhóm AB và BA đã bị đếm hai lần ở trường hợp không phân vai.

</details>





**Vì sao dùng biến cố đối cho “ít nhất một”?** Khi chọn 2 trong 5 phiếu, có nhiều cách có ít nhất một phiếu thưởng, còn “không phiếu thưởng” thường chỉ có một họ trường hợp. **Bản chất:** P(ít nhất một)=1−P(không có). **Ví dụ:** nếu 2 đỏ, 3 xanh, nhóm 2 phiếu đồng khả năng, P(ít nhất một đỏ)=1−C(3,2)/C(5,2)=7/10. **Giới hạn:** đừng lấy 1−P(đúng một đỏ) nếu có thể có hai đỏ; cùng dùng **nhóm không thứ tự** ở cả tử lẫn mẫu.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Từ 5 phiếu khác nhau (1 đỏ, 4 xanh), chọn đều **hai phiếu không xét thứ tự**. Xác suất ít nhất một phiếu đỏ?

<!-- ITEM_ID: THPT-TOP20-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** P=1−P(cả hai xanh)=1−C(4,2)/C(5,2)=1−6/10=2/5.

**D6 – Tự khắc phục:** Nếu dùng 1−4/5 thì em đang xét một phiếu. Mẫu này là **nhóm hai phiếu**, phải đếm C(5,2).

</details>

#### 1.5. Chọn đúng mô hình trước khi tính

Trước khi giải một bài xác suất, học sinh cần tự trả lời: (1) Kết quả sơ cấp là gì? (2) Đồng khả năng đã được xác nhận chưa? (3) Thứ tự có quan trọng không? (4) Có hoàn lại không? (5) Biến cố thuận lợi là tập nào? (6) Có thể dùng biến cố đối, đếm theo nhóm hoặc sơ đồ cây nào để tránh đếm sót hay đếm trùng?

> **GHI NHỚ — Kiểm mô hình trước phép tính**
>
> Xác định kết quả sơ cấp, tính đồng khả năng, thứ tự, có/không hoàn lại, tập kết quả thuận lợi và điều kiện dùng công thức.

**Bài mẫu phân tích sai lầm (không chấm điểm):** Khi gieo hai xúc xắc phân biệt, 11 tổng số chấm từ 2 đến 12 không đồng khả năng; chẳng hạn tổng 2 chỉ do một cặp, trong khi tổng 7 do sáu cặp. Nếu tính xác suất biến cố theo số “loại tổng” thay vì 36 cặp có thứ tự đồng khả năng thì mô hình sai dù phép chia đúng số học.

**Tự đánh giá sau phần Kiến thức:** Một xác suất hợp lệ luôn ở \([0,1]\), nhưng điều đó **chưa đủ** chứng minh phương pháp đếm là đúng. Trình bày bằng lời vì sao các kết quả đang đếm có khả năng như nhau.

**Vận dụng trước khi xem lời giải.** Gieo hai xúc xắc phân biệt, cân đối. Có bao nhiêu cặp sơ cấp đồng khả năng và P(tổng số chấm bằng 12)?

<!-- ITEM_ID: THPT-TOP20-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

Có 36 cặp có thứ tự; chỉ (6,6) có tổng12 nên P=1/36.

**D6 – Tự khắc phục:** Không coi 11 tổng số chấm từ 2 đến12 là đồng khả năng; tổng12 chỉ có một cặp.

</details>



**Vì sao cần sơ đồ cây?** Hai lượt rút có thể tạo AB khác BA và nhánh thứ hai có thể giảm lựa chọn. **Bản chất:** mỗi đường đi hoàn chỉnh là một chuỗi kết quả; chỉ lấy tỉ số số lá nếu các lá **đồng khả năng**. **Ví dụ:** hai lần tung đồng xu cân đối có NN,NS,SN,SS với P(đúng một ngửa)=2/4. **Giới hạn:** rút không hoàn lại khác rút có hoàn lại; không tự nhân xác suất biên như hai lượt độc lập.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Tung một đồng xu cân đối ba lần, coi chuỗi có thứ tự. Có mấy kết quả đồng khả năng và xác suất đúng hai mặt ngửa?

<!-- ITEM_ID: THPT-TOP20-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** Có 2³=8 chuỗi; đúng hai ngửa là NNS, NSN, SNN (3 chuỗi), P=3/8.

**D6 – Tự khắc phục:** Nếu đếm ba loại “0/1/2/3 ngửa” là 4 kết quả đồng khả năng, em đã gộp các chuỗi khác nhau. Vẽ cây ba tầng.

</details>

### 2. Kết hợp các biến cố



#### 2.1. Hợp, giao và xung khắc

![Đọc phần giao và phần hợp của hai biến cố khi gieo xúc xắc](../../../../docs/assets/images/thpt/FIG-TOP20-G11-B28-B29_VENN_WHITE_R00.svg)

**Khám phá trên mô hình:** [Chọn các mặt thuộc A và B, quan sát hợp/giao và kiểm độc lập](Temp_PLAN22_20_EVENTS_INTERACTIVE_WHITE_R00_20261114.html). Đây là mô hình minh họa công khai, không phải bài Tự kiểm tra và không ghi điểm.

**Cách đọc hình:** Khung Ω ghi các kết quả 1–6. Bên trái A chứa {2,4,6}, bên phải B chứa {4,5,6}; vùng chồng nhau chỉ có **4 và 6**, vùng chỉ A là 2, vùng chỉ B là 5; 1 và 3 ở ngoài hai tập. Do đó hợp chứa **bốn** kết quả, giao chứa **hai** kết quả: khi tính P(A∪B) phải trừ đi phần giao đã đếm hai lần. Độ lớn/vị trí hình tròn chỉ để hướng dẫn nhìn tập hợp, **không** mang ý nghĩa diện tích xác suất.


**Vì sao cần học?** Một người có thể thích cả bóng đá và bóng rổ. Khi hỏi “thích ít nhất một”, ta cần gom hai nhóm nhưng không được đếm một người hai lần. Trong xác suất, mỗi **biến cố** là một tập kết quả.

- **Hợp** \(A\cup B\): xảy ra \(A\) hoặc \(B\) (kể cả cả hai).
- **Giao** \(A\cap B\): đồng thời xảy ra cả \(A\) và \(B\).
- **Xung khắc**: \(A\cap B=\varnothing\), không thể xảy ra cùng lần thử. Biến cố đối \(\bar A\) là trường hợp đặc biệt của xung khắc với \(A\), đồng thời \(A\cup\bar A=\Omega\).

> **ĐỊNH NGHĨA — Hợp, giao, xung khắc**
>
> \(A\cup B\) là ít nhất một; \(A\cap B\) là cả hai; xung khắc khi \(A\cap B=\varnothing\). Hợp đếm mỗi kết quả ở giao chỉ một lần.

**Ví dụ có suy luận.** Chọn đều một số từ 1 đến 12; \(A\): chia hết cho 3, \(B\): chẵn. Ta có \(A=\{3,6,9,12\}\), \(B=\{2,4,6,8,10,12\}\), \(A\cap B=\{6,12\}\). Hợp gồm \(4+6-2=8\) kết quả, nên \(P(A\cup B)=8/12=2/3\). Hai biến cố này **không xung khắc** vì có hai kết quả chung.

**Hướng dẫn đọc hình:** Nhìn vùng chỉ thuộc A, chỉ thuộc B, vùng chồng nhau và vùng ở ngoài cả hai. Đếm vùng chồng **một lần** khi tìm hợp.

**Vận dụng trước khi xem lời giải.** Gieo xúc xắc cân đối. A=ra số chẵn, B=ra số lớn hơn 4. Viết A∩B và A∪B.

<!-- ITEM_ID: THPT-TOP20-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

A={2,4,6}, B={5,6}; giao={6}, hợp={2,4,5,6}.

**D6 – Tự khắc phục:** Giao chỉ lấy phần có chung, hợp chứa tất cả nhưng mỗi số chỉ ghi một lần.

</details>



**Ghi nhớ khi đối chiếu:** Hình Venn ở đây dùng \(\Omega=\{1,2,3,4,5,6\}\), giao \(\{4,6\}\) và hợp \(\{2,4,5,6\}\). Ví dụ chọn số từ 1 đến 12 ở đoạn trên là **mô hình khác**, không được lấy số 6, 12 trong ví dụ đó để đọc thành phần giao của hình xúc xắc.



#### 2.2. Độc lập không phải xung khắc

**Vì sao cần học?** Đầu ra của hai thiết bị có thể không ảnh hưởng nhau, còn hai lần rút thẻ *không hoàn lại* thường phụ thuộc nhau. Ta cần tiêu chuẩn chính xác để quyết định có được nhân xác suất riêng hay không.

Hai biến cố \(A,B\) **độc lập** khi việc biết \(A\) xảy ra không làm thay đổi khả năng xảy ra \(B\). Trong các tình huống hữu hạn đang xét, kiểm bằng

Đây là **điều kiện**, không phải công thức luôn đúng.

> **TÍNH CHẤT — Độc lập**
>
> \[P(A\cap B)=P(A)P(B).\] Đây là tiêu chuẩn độc lập; không suy từ việc hai biến cố không xung khắc.

**Ví dụ có suy luận.** Tung hai đồng xu công bằng, độc lập; xét kết quả có thứ tự \(\{NN,NS,SN,SS\}\). \(A\): xu đầu ngửa; \(B\): xu sau ngửa. Ta có \(P(A)=P(B)=1/2\), \(P(A\cap B)=1/4=(1/2)(1/2)\): độc lập. Trái lại, nếu \(C\) là “cả hai đều ngửa” và \(D\) là “xu đầu sấp” thì \(C\cap D=\varnothing\) nhưng \(P(C),P(D)>0\); chúng **xung khắc nhưng không độc lập**.

**Giới hạn:** Không suy độc lập chỉ vì hai biến cố có thể đồng thời xảy ra; phải xem mô hình hoặc kiểm công thức.

**Vận dụng trước khi xem lời giải.** Tung một đồng xu cân đối và gieo xúc xắc cân đối độc lập. Xác suất đồng xu ngửa và xúc xắc chẵn là bao nhiêu?

<!-- ITEM_ID: THPT-TOP20-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

P=1/2×3/6=1/4. Hai phép thử độc lập nên số cặp thuận lợi=1×3 trong 12 cặp.

**D6 – Tự khắc phục:** Nếu tính 1/2+1/2, em đang cộng xác suất mà đề yêu cầu cùng xảy ra.

</details>





**Vì sao xung khắc không phải độc lập?** Khi một xúc xắc ra số chẵn, nó không thể đồng thời ra số lẻ, nên biến cố này **loại trừ** nhau. **Bản chất:** xung khắc khi giao rỗng; độc lập lại yêu cầu P(A∩B)=P(A)P(B). **Ví dụ:** A=chẵn và B=lẻ đều có P=1/2 nhưng giao 0≠1/4. **Giới hạn:** nếu một biến cố có P=0 thì vẫn có thể vừa xung khắc vừa độc lập; không áp kết luận không độc lập một cách tuyệt đối.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Gieo một xúc xắc: A=ra 1 và B=ra 6. A,B có xung khắc không? Có độc lập không?

<!-- ITEM_ID: THPT-TOP20-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** A∩B=∅ nên xung khắc; P(A)P(B)=1/36>0 nhưng P(A∩B)=0 nên **không độc lập**.

**D6 – Tự khắc phục:** Nếu viết “vì không xảy ra cùng nên độc lập”, em đã đảo khái niệm. Xung khắc là giao rỗng, độc lập cần kiểm tích xác suất.

</details>

#### 2.3. Quy tắc cộng xác suất

**Từ đếm người đến công thức.** Nếu cộng số phần tử của \(A\) và \(B\), mỗi phần tử của giao đã được tính hai lần. Vì thế

Công thức đúng cho **mọi** hai biến cố trong cùng mô hình xác suất. Nếu chúng xung khắc thì giao bằng 0 và chỉ còn phép cộng.

> **CÔNG THỨC — Quy tắc cộng**
>
> \[P(A\cup B)=P(A)+P(B)-P(A\cap B).\] Nếu giao rỗng thì bỏ số hạng giao.

**Ví dụ có suy luận.** Trong 50 người được chọn đều, 30 thích hoạt động A, 25 thích B, 10 thích cả hai. Số thích ít nhất một là \(30+25-10=45\), nên xác suất \(45/50=9/10\). Ta không cần giả thiết hai sở thích độc lập. Kiểm lại: 45 không vượt 50; hợp phải chứa từng biến cố.

**Sai lầm điển hình:** Cộng \(P(A)+P(B)\) mà quên trừ giao, dẫn tới xác suất có thể vượt 1.

**Vận dụng trước khi xem lời giải.** Gieo xúc xắc cân đối. A=lẻ, B=lớn hơn 3. Tính P(A∪B) bằng quy tắc cộng.

<!-- ITEM_ID: THPT-TOP20-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

A={1,3,5}, B={4,5,6}, giao={5}; P(hợp)=3/6+3/6−1/6=5/6.

**D6 – Tự khắc phục:** Nếu ra 1, em đã cộng mà quên trừ kết quả 5 được đếm hai lần.

</details>





**Vì sao công thức cộng có bản rút gọn?** Khi một lần quay chỉ có thể rơi vào ô A **hoặc** ô B, không có ô nào nằm cả hai nhóm nên không đếm trùng. **Bản chất:** A∩B=∅ làm P(A∪B)=P(A)+P(B). **Ví dụ:** xúc xắc A={1}, B={4}, hợp hai kết quả nên P=2/6=1/3. **Giới hạn:** khi có phần giao, phải trở lại công thức tổng quát và trừ P(A∩B), không dùng rút gọn.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Gieo xúc xắc cân đối. A={1,2}, B={5,6}. Tính P(A∪B) và nêu vì sao cộng trực tiếp.

<!-- ITEM_ID: THPT-TOP20-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** Hai tập rời nhau nên P(A∩B)=0, P(A∪B)=2/6+2/6=4/6=2/3.

**D6 – Tự khắc phục:** Nếu nhân 2/6×2/6, em đã tính giao của biến cố độc lập; ở đây A,B xung khắc và đề hỏi hợp.

</details>

#### 2.4. Quy tắc nhân độc lập và biến cố đối

**Vì sao cần học?** Với hai hệ thống hoạt động độc lập, đôi khi câu hỏi là “cả hai cùng làm việc”, nhưng đôi khi là “ít nhất một làm việc”. Mỗi câu cần một cách nhìn khác.

Chỉ khi \(A,B\) **độc lập**, ta mới viết \(P(A\cap B)=P(A)P(B)\). Tính “ít nhất một xảy ra” thường dễ bằng biến cố đối:

Nếu \(A,B\) độc lập thì \(\bar A,\bar B\) cũng độc lập.

> **CÔNG THỨC — Nhân độc lập và biến cố đối**
>
> Nếu A,B độc lập: \[P(A\cap B)=P(A)P(B),\quad P(A\cup B)=1-P(\bar A)P(\bar B).\] Không nhân xác suất biên cho biến cố phụ thuộc.

**Ví dụ có suy luận.** Hai thiết bị độc lập có xác suất chạy được \(3/4\) và \(4/5\). Cả hai chạy: \((3/4)(4/5)=3/5\). Cả hai hỏng: \((1/4)(1/5)=1/20\). Ít nhất một chạy: \(1-1/20=19/20\). So sánh ba câu hỏi trước khi chọn công thức.

**Giới hạn:** Khi rút liên tiếp không hoàn lại hoặc hai biến cố phụ thuộc, không nhân hai xác suất ban đầu như thể độc lập. Trong chuyên đề này, em vẫn có thể **đếm các chuỗi kết quả đồng khả năng** để giải tình huống cụ thể; công thức xác suất có điều kiện sẽ được học ở chuyên đề khác, không phải tiền đề bắt buộc ở đây.

**Vận dụng trước khi xem lời giải.** Hai thiết bị hoạt động độc lập, xác suất hỏng lần lượt 1/5 và 1/4. Xác suất có ít nhất một thiết bị hoạt động là bao nhiêu?

<!-- ITEM_ID: THPT-TOP20-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở đối chiếu sau khi tự thử</summary>

P=1−P(cả hai hỏng)=1−(1/5)(1/4)=19/20.

**D6 – Tự khắc phục:** Nếu nhân hai xác suất hoạt động 4/5×3/4, em đang tính cả hai hoạt động, không phải ít nhất một.

</details>







**Vì sao phải phối hợp quy tắc?** Khi hai biến cố độc lập nhưng vẫn có thể cùng xảy ra, phép nhân giúp tính **giao**, sau đó phép cộng–trừ giao mới cho **hợp**. **Bản chất:** với hai phép thử độc lập P(A∩B)=P(A)P(B), P(A∪B)=P(A)+P(B)−P(A∩B). **Ví dụ:** xu ngửa P=1/2, xúc xắc >4 P=1/3, hợp=1/2+1/3−1/6=2/3. **Giới hạn:** đừng dùng phép nhân giản lược khi không chứng minh độc lập.

**Vận dụng mở rộng — tự giải trước khi đối chiếu.** Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. A=đồng xu ngửa, B=xúc xắc chẵn. Tính P(A∪B).

<!-- ITEM_ID: THPT-TOP20-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details><summary>Mở lời giải sau khi tự thử</summary>

**Giải:** P(A)=1/2, P(B)=1/2, P(A∩B)=1/4. Vậy P(A∪B)=1/2+1/2−1/4=3/4.

**D6 – Tự khắc phục:** Nếu được 1, em đã cộng mà chưa trừ phần **cả hai cùng xảy ra**; nếu được 1/4 đó là giao, không phải hợp.

</details>

## 2. Luyện tập

Các bài dưới đây cần chọn mô hình xác suất đúng, giải thích cách đếm rồi tự mở Đối chiếu. Nếu chưa đạt, sử dụng D6 quay về đúng mảng Kiến thức.

<!-- AUTHOR_ONLY_Q15: 34 historical G10/G11 PR #810 public items are ID-only source pointers; no stems/keys/rubrics replicated. Source custody Q15 HOLD. -->

### 2.1. Bài luyện tập 1

<!-- ITEM_ID: THPT-TOP20-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Rút đều một thẻ trong 10 thẻ đánh số 0 đến 9. Viết Ω và biến cố A “số chẵn”.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Ω={0,1,2,3,4,5,6,7,8,9}; A={0,2,4,6,8}. A có 5 kết quả.

**D6 – Lỗi cần sửa:** Nếu loại 0 vì không phải số chẵn, hãy nhớ 0 chia hết cho 2.

</details>

### 2.2. Bài luyện tập 2

<!-- ITEM_ID: THPT-TOP20-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Gieo xúc xắc sáu mặt một lần. Biến cố “kết quả bé hơn 2” gồm những phần tử nào và có chắc chắn không?

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** A={1}, không chắc chắn vì Ω có sáu kết quả, chỉ một kết quả thuận lợi.

**D6 – Lỗi cần sửa:** Phân biệt “bé hơn” với “bé hơn hoặc bằng”; A là một tập con chứ không phải số 1/6.

</details>

### 2.3. Bài luyện tập 3

<!-- ITEM_ID: THPT-TOP20-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Túi chứa 10 phiếu khác nhau, đúng 3 phiếu có thưởng, rút đều một phiếu. Tính P(trúng).

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Ba kết quả thuận lợi trong 10 phiếu đồng khả năng, P=3/10.

**D6 – Lỗi cần sửa:** Nếu dùng tỷ số số loại giải thưởng, em đã chọn sai đơn vị kết quả sơ cấp.

</details>

### 2.4. Bài luyện tập 4

<!-- ITEM_ID: THPT-TOP20-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Trong 12 thẻ khác nhau, có 4 thẻ bị lỗi. Rút đều một thẻ. Tính P(không lỗi) bằng biến cố đối.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** P=1−4/12=8/12=2/3.

**D6 – Lỗi cần sửa:** Kiểm A và A̅ phủ hết 12 thẻ, không tính 4/12 là không lỗi.

</details>

### 2.5. Bài luyện tập 5

<!-- ITEM_ID: THPT-TOP20-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Trong 40 vé khác nhau có một vé trúng. Phân biệt xác suất trúng với trường hợp không có vé trúng.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Nếu có một vé trúng: P=1/40>0, hiếm nhưng có thể. Nếu không vé trúng: P=0, biến cố không thể trong mô hình này.

**D6 – Lỗi cần sửa:** Đừng dùng chữ “rất khó” thay cho “bằng 0”.

</details>

### 2.6. Bài luyện tập 6

<!-- ITEM_ID: THPT-TOP20-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Bốn thẻ phân biệt được ghi 1, 2, 3, 4. Rút lần lượt hai thẻ **không hoàn lại**, mỗi lượt chọn đều trong các thẻ còn lại; chỉ ghi **tổng hai số**. So sánh xác suất tổng bằng 5 và tổng bằng 7. Có được xem các tổng có thể xuất hiện là đồng khả năng không?

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Mỗi cặp có thứ tự của hai thẻ khác nhau có xác suất \(1/(4\cdot3)=1/12\). Tổng 5 do bốn cặp (1,4),(4,1),(2,3),(3,2), nên \(P(S=5)=4/12=1/3\). Tổng 7 do hai cặp (3,4),(4,3), nên \(P(S=7)=2/12=1/6\). Các tổng không đồng khả năng dù mỗi lần rút từng thẻ là đều.

**D6 – Lỗi cần sửa:** Nếu chia cho 5 vì thấy các tổng 3,4,5,6,7, em đang coi các **nhãn tổng** là kết quả đồng khả năng. Hãy lập bảng cặp có thứ tự \((a,b)\) với \(a\ne b\), khoanh bốn cặp tổng 5 và hai cặp tổng 7. Không tính cặp \((a,a)\) vì rút không hoàn lại.

</details>

### 2.7. Bài luyện tập 7

<!-- ITEM_ID: THPT-TOP20-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Từ 7 thẻ khác nhau, trong đó có 3 thẻ ghi sao, lấy đều 2 thẻ cùng lúc (không xét thứ tự). Tính P(cả hai sao).

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Số nhóm C(7,2)=21; nhóm sao C(3,2)=3, nên P=3/21=1/7.

**D6 – Lỗi cần sửa:** Nếu dùng 7×6 ở mẫu mà C(3,2) ở tử, em đã trộn có và không xét thứ tự.

</details>

### 2.8. Bài luyện tập 8

<!-- ITEM_ID: THPT-TOP20-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Túi có 2 bóng đỏ và 4 bóng xanh khác nhau. Chọn đều 2 bóng cùng lúc. Tính P(ít nhất một bóng đỏ).

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** 1−C(4,2)/C(6,2)=1−6/15=3/5.

**D6 – Lỗi cần sửa:** Biến cố đối là “không có đỏ”, tức cả hai xanh, không phải “đúng một đỏ”.

</details>

### 2.9. Bài luyện tập 9

<!-- ITEM_ID: THPT-TOP20-P09; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Tung một đồng xu cân đối ba lần độc lập. Vẽ cây ba tầng hoặc liệt kê chuỗi có thứ tự để tính xác suất **lượt đầu và lượt cuối đều ngửa**, không giới hạn lượt ở giữa.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Có \(2^3=8\) chuỗi đồng khả năng. Lượt đầu và cuối ngửa cho **NNN và NSN**, tức 2 chuỗi; xác suất \(2/8=1/4\). Kết quả ở lượt giữa có thể ngửa hoặc sấp.

**D6 – Lỗi cần sửa:** Nếu chỉ đếm NNN, em đã tự áp thêm điều kiện “lượt giữa cũng ngửa”. Nếu gộp chuỗi theo số lần ngửa, em mất thông tin về vị trí; hãy giữ cả ba lượt trên mỗi lá cây.

</details>

### 2.10. Bài luyện tập 10

<!-- ITEM_ID: THPT-TOP20-P10; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Hộp 5 thẻ khác nhau (2 đỏ, 3 xanh), rút đều liên tiếp 2 thẻ không hoàn lại. Tính P(cả hai đỏ) bằng đếm chuỗi.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Tổng 5×4=20 cặp có thứ tự; hai đỏ có 2×1=2 cặp; P=2/20=1/10.

**D6 – Lỗi cần sửa:** Nếu dùng (2/5)², em đã giả sử lượt sau vẫn có 2 đỏ trong 5 thẻ.

</details>

### 2.11. Bài luyện tập 11

<!-- ITEM_ID: THPT-TOP20-P11; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Gieo xúc xắc: A=ra số lẻ, B=ra số không nhỏ hơn 5. Viết A∩B và A∪B.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** A={1,3,5}, B={5,6}; A∩B={5}, A∪B={1,3,5,6}.

**D6 – Lỗi cần sửa:** Nếu gộp kết quả 5 hai lần trong hợp, em chưa coi hợp là tập hợp.

</details>

### 2.12. Bài luyện tập 12

<!-- ITEM_ID: THPT-TOP20-P12; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lớn hơn 4; B: con thứ hai ra số chẵn. Tính P(A∩B).

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** P(A)=2/6=1/3, P(B)=3/6=1/2; độc lập nên P(A∩B)=1/6.

**D6 – Lỗi cần sửa:** Nếu ra 5/6, em đang cộng hai biến cố thay vì lấy giao.

</details>

### 2.13. Bài luyện tập 13

<!-- ITEM_ID: THPT-TOP20-P13; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Một xúc xắc: A={1,2}, B={3,4}. Chúng có xung khắc và độc lập không?

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Xung khắc vì giao rỗng. Không độc lập vì P(A∩B)=0 trong khi P(A)P(B)=(2/6)(2/6)=1/9>0.

**D6 – Lỗi cần sửa:** Hai biến cố không cùng xảy ra có xác suất dương thì không độc lập.

</details>

### 2.14. Bài luyện tập 14

<!-- ITEM_ID: THPT-TOP20-P14; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Gieo xúc xắc. A={1,2,3,4}, B={2,4,6}. Tính P(A∪B) theo quy tắc cộng.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** Giao {2,4}: P(A∪B)=4/6+3/6−2/6=5/6. Liệt kê hợp {1,2,3,4,6} kiểm lại.

**D6 – Lỗi cần sửa:** Nếu ra 7/6>1, phép cộng đã đếm trùng 2,4.

</details>

### 2.15. Bài luyện tập 15

<!-- ITEM_ID: THPT-TOP20-P15; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Gieo xúc xắc, A=ra 1 và B=ra 6. Tính P(A∪B) và giải thích vì sao cộng trực tiếp.

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** A∩B=∅ nên P(A∪B)=1/6+1/6=1/3.

**D6 – Lỗi cần sửa:** Nếu gọi A,B độc lập, thử kiểm P(A)P(B)=1/36 khác 0.

</details>

### 2.16. Bài luyện tập 16

<!-- ITEM_ID: THPT-TOP20-P16; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. P(ngửa và mặt xúc xắc chia hết cho 3)?

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** P=1/2×2/6=1/6; biến cố có mặt xúc xắc 3 hoặc 6.

**D6 – Lỗi cần sửa:** Đừng lấy 1/2+2/6 vì câu hỏi yêu cầu cùng xuất hiện.

</details>

### 2.17. Bài luyện tập 17

<!-- ITEM_ID: THPT-TOP20-P17; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R02; PUBLIC_FORMATIVE_NO_MASTERY -->

Gieo hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lẻ, B: con thứ hai không lớn hơn 2. Tính P(A∪B).

<details><summary>Mở lời giải sau khi tự làm</summary>

**Giải:** P(A)=3/6=1/2, P(B)=2/6=1/3, P(A∩B)=1/6. Vậy P(A∪B)=1/2+1/3−1/6=2/3.

**D6 – Lỗi cần sửa:** Nếu kết quả 5/6, em quên trừ phần giao; nếu 1/6 đó là giao chứ không phải hợp.

</details>


### 2.18. Vận dụng tự luận có rubric

#### 2.18.1. Tự luận 1 (W01) — lập luận và rubric /4

<!-- ITEM_ID: THPT-TOP20-W01; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R02; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

Có 8 phiếu phân biệt, 3 phiếu đỏ và 5 phiếu xanh. Chọn đều một nhóm 2 phiếu không xét thứ tự. (a) Có bao nhiêu nhóm kết quả? (b) Tính P(cả hai đỏ). (c) Tính P(ít nhất một đỏ) bằng biến cố đối.

<details><summary>Mở lời giải và rubric /4 sau khi tự làm</summary>

**Lời giải:** (a) C(8,2)=28 nhóm. (b) C(3,2)/C(8,2)=3/28. (c) 1−C(5,2)/C(8,2)=1−10/28=18/28=9/14.

**Rubric /4:**
- Xác định đúng kết quả sơ cấp là nhóm không thứ tự và C(8,2)=28 — **1 điểm**.
- Đếm nhóm toàn đỏ C(3,2)=3, tính 3/28 — **1 điểm**.
- Chọn biến cố đối hai phiếu xanh với C(5,2)=10 — **1 điểm**.
- Tính 1−10/28=9/14 và diễn giải ít nhất một đỏ — **1 điểm**.

**D6:** Nếu ra **3/56** hoặc **6/28**, em đã trộn quy ước đếm: tử số là nhóm không thứ tự còn mẫu số là cặp có thứ tự, hoặc ngược lại. **Chú ý:** \(6/56=3/28\) vẫn là đáp án **đúng**, nếu đếm nhất quán 6 cặp đỏ có thứ tự trong tổng 56 cặp có thứ tự. Hãy thử liệt kê bốn phiếu chọn hai để phân biệt (A,B) với (B,A), rồi ôn đúng năng lực đếm theo nhóm tại O07 → **T04/P07** trước khi làm lại. Nếu tính “ít nhất một đỏ” bằng cách lấy 1−P(đúng một đỏ), hãy viết biến cố đối **không có đỏ** = hai phiếu xanh, tính C(5,2)/C(8,2) rồi đối chiếu O08 → T08/P08.

</details>

#### 2.18.2. Tự luận 2 (W02) — lập luận và rubric /4

<!-- ITEM_ID: THPT-TOP20-W02; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R02; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

Một lần gieo xúc xắc cân đối. A={2,4,6}, B={2,3,5}. (a) Tìm giao và hợp. (b) Tính xác suất hợp bằng quy tắc cộng. (c) Hai biến cố có độc lập không?

<details><summary>Mở lời giải và rubric /4 sau khi tự làm</summary>

**Lời giải:** A∩B={2}, A∪B={2,3,4,5,6}. P(A∪B)=3/6+3/6−1/6=5/6. P(A∩B)=1/6 nhưng P(A)P(B)=(1/2)(1/2)=1/4, nên không độc lập.

**Rubric /4:**
- Liệt kê giao {2} và hợp {2,3,4,5,6} — **1 điểm**.
- Tính đúng P(A)=P(B)=3/6 và P(A∩B)=1/6 — **1 điểm**.
- Áp dụng cộng tổng quát để được 5/6 — **1 điểm**.
- So 1/6 với 1/4, kết luận không độc lập và nêu lý do — **1 điểm**.

**D6:** Nếu P(hợp)=1, em đã cộng P(A)+P(B) mà **chưa trừ giao {2}**; vẽ lại Venn và viết A∩B một lần, rồi giải T08/P14. Nếu kết luận độc lập vì A,B có phần giao, hãy tách hai câu hỏi: giao rỗng là xung khắc, còn độc lập kiểm **1/6 so với (1/2)(1/2)=1/4**; trở lại O12/O13 → T07/T15 rồi tự kiểm.

</details>

#### 2.18.3. Tự luận 3 (W03) — lập luận và rubric /4

<!-- ITEM_ID: THPT-TOP20-W03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R02; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

Tung đồng xu cân đối và gieo một xúc xắc cân đối, hai phép thử độc lập. A: xu ngửa; B: xúc xắc lớn hơn 4. (a) Tính P(A∩B). (b) Tính P(A∪B). (c) Tính xác suất cả A và B đều không xảy ra.

<details><summary>Mở lời giải và rubric /4 sau khi tự làm</summary>

**Lời giải:** P(A)=1/2, P(B)=2/6=1/3. Vì độc lập nên P(A∩B)=1/6. P(A∪B)=1/2+1/3−1/6=2/3. Cả A,B đều không xảy ra là biến cố đối của hợp, xác suất=1−2/3=1/3.

**Rubric /4:**
- Nhận đúng P(A)=1/2, P(B)=1/3 và tính độc lập — **1 điểm**.
- Tính giao bằng phép nhân là 1/6 — **1 điểm**.
- Tính hợp 1/2+1/3−1/6=2/3 — **1 điểm**.
- Lấy biến cố đối để được 1/3, giải thích cả hai đều không xảy ra — **1 điểm**.

**D6:** Nếu câu (a) ra 5/6, em đã tính hợp thay cho giao; dùng từ **“cả A và B”** để chọn phép nhân trên hai phép thử độc lập (xem O16/T09/P16). Nếu câu (b) ra 1/6, em mới tính giao và quên cộng hai xác suất biên rồi trừ phần chung (xem O14/T08/P14). Nếu câu (c) ra 2/3, em quên lấy biến cố đối của hợp, nên cần viết **không A và không B = (A∪B)̅** trước khi lấy 1−2/3.

</details>


## 3. Tự kiểm tra

**Đường tự đối chiếu công khai:** Chọn câu trong bảng, giải trước rồi tự mở lại **cùng câu đã học** ở Luyện tập. Đây **không phải kiểm tra độc lập**; `CLIENT_SELF_CHECK_NO_MASTERY` và không tạo `TOPIC_READINESS` hay ghi Skill Mastery. Các bản ghi này **không tạo ID mới**, chỉ placement trỏ lại canonical ID trước đó.

| Public replay | Existing same canonical item_id | outcome | assessment |
|---|---|---|---|
| 1 | THPT-TOP20-P01 | TOP20-O01 | CLIENT_SELF_CHECK_NO_MASTERY |
| 2 | THPT-TOP20-P03 | TOP20-O03 | CLIENT_SELF_CHECK_NO_MASTERY |
| 3 | THPT-TOP20-P04 | TOP20-O04 | CLIENT_SELF_CHECK_NO_MASTERY |
| 4 | THPT-TOP20-P07 | TOP20-O07 | CLIENT_SELF_CHECK_NO_MASTERY |
| 5 | THPT-TOP20-P08 | TOP20-O08 | CLIENT_SELF_CHECK_NO_MASTERY |
| 6 | THPT-TOP20-P10 | TOP20-O10 | CLIENT_SELF_CHECK_NO_MASTERY |
| 7 | THPT-TOP20-P11 | TOP20-O11 | CLIENT_SELF_CHECK_NO_MASTERY |
| 8 | THPT-TOP20-P13 | TOP20-O13 | CLIENT_SELF_CHECK_NO_MASTERY |
| 9 | THPT-TOP20-P14 | TOP20-O14 | CLIENT_SELF_CHECK_NO_MASTERY |
| 10 | THPT-TOP20-P16 | TOP20-O16 | CLIENT_SELF_CHECK_NO_MASTERY |
| 11 | THPT-TOP20-P17 | TOP20-O17 | CLIENT_SELF_CHECK_NO_MASTERY |



Các câu này chỉ dùng để **tự đối chiếu**, không đánh giá độc lập và không ghi điểm thành thạo.

<!-- AUTHOR_ONLY_Q16: official protected RD1 and Final Submit not implemented, no owner-controlled private bank on public GitHub; future RELEASE must guard answer disclosure before Final Submit. G12 Bayes/conditional out of scope. -->

<!-- BLOCKED_BY_AUTHORING: Q01_G10_G11_DIRECT_SOURCE_AND_ACTIVITY_RECEIPT; Q02_17_OUTCOME_DEPTH_MAP; Q18_NEW_SPLIT_SOURCE_AUTHOR_MATH_PED_PROOF; NO_V2_READY_REGISTER -->
### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 Kết nối tri thức, Tập Hai:** Chương IX Bài 26 trang in 77–82, Bài 27 trang 83–87, cuối chương 88–89.
- **SGK Toán 11 Kết nối tri thức, Tập Hai:** Chương VIII Bài 28 bắt đầu trang in 66, Bài 29 trang 72, Bài 30 trang 76, cuối chương bắt đầu trang 79.
- **SBT KNTT tham khảo:** Toán 10 Tập Hai B26–B27 trang 61–66; Toán 11 Tập Hai B28–B30 trang 44–50.



<!-- END_EXACT_GITHUB_CONTENT_2 -->

---


# Source 3 of 5 — CĐ22 · Thống kê mô tả (FULL EXACT LEARNER CONTENT)

SOURCE_GIT_BLOB: d06250947d78e13a97716fc5b4e97e3f116982db
SOURCE_REPOSITORY_PATH: prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R03_NOTEBOOKLM_P1_GROUP_MODE_EDGE_20261114.md
SOURCE_BRANCH: authoring/topic-descriptive-statistics-g10-g12-r00-20261111
SOURCE_PR: 812

<!-- BEGIN_EXACT_GITHUB_CONTENT_3 -->
# Chuyên đề 22 · Thống kê mô tả và phân tích số liệu (rời rạc, ghép nhóm)



## 1. Kiến thức

**Vì sao học?** Dữ liệu có thể nói lên mức trung tâm, mức dao động và sự khác nhau giữa các nhóm, nhưng một số duy nhất không mô tả tất cả. Khi số liệu được đo gần đúng hoặc ghép thành khoảng, kết quả tính cũng có giới hạn chính xác. Chuyên đề này học liền mạch từ dữ liệu thô tới dữ liệu ghép nhóm và cách diễn giải có trách nhiệm.

**Tiền đề tại chỗ:** Biết cộng, chia, căn bậc hai, sắp xếp số thực, đọc bảng; số đo cần kèm đơn vị. Mẫu có \(n\) quan sát; tần số là số lần xuất hiện. Không cần mở lại bài SGK bắt buộc khác. Phân biệt các công thức trên **dữ liệu thô** với các đại lượng **ước lượng từ bảng ghép nhóm**.

**Cách học:** Mỗi mục đánh số gồm giải thích, khung kiến thức có tên và điều kiện, từng outcome cần nhớ, một bài **Vận dụng** rồi tự mở **Đối chiếu**; khi sai dùng D6 quay về cùng mạch. Không dùng bài đã mở lời giải làm kiểm tra độc lập.

### 1. Dữ liệu thô, độ chính xác và các số đặc trưng

#### 1.1. Dữ liệu đo và sai số

##### 1.1.1. Khám phá và lý do chọn thước đo

Một giá trị đọc từ dụng cụ có thể là **số gần đúng**, không phải số đúng. Khi biết số đúng \(\bar a\) và số ghi \(a\), sai số tuyệt đối \(\Delta=|\bar a-a|\); sai số tương đối theo số gần đúng \(a\ne0\) là \(\delta_a=\Delta/|a|\). Nếu chỉ biết độ chính xác \(d\), ta biết \(\Delta\le d\), **không** biết chắc sai số thực bằng \(d\). Quy tròn đến hàng phần mười theo quy tắc thông thường có chặn sai số \(0{,}05\) đơn vị. Ví dụ giá trị thật \(12{,}47\) mm và bản ghi \(12{,}5\) mm: \(\Delta=0{,}03\) mm, \(\delta_a=0{,}03/12{,}5=0{,}24\%\).

##### 1.1.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **ĐỊNH NGHĨA · CÔNG THỨC — Sai số của số gần đúng**
>
> \[\Delta=|\bar a-a|,\qquad \delta_a=\frac{\Delta}{|a|}\quad(a\ne0).\] Nếu chỉ biết chặn \(d\), kết luận \(\Delta\le d\), không khẳng định \(\Delta=d\). Dữ liệu phải nêu đơn vị và vị trí làm tròn.


##### 1.1.3. Những kết quả quan trọng và lỗi dễ mắc

- **G10-B12-APPROX_CONCEPT** — Hỏi trước: số này do **đếm** hay do **đo**? Đếm đủ 25 học sinh cho số đúng trong tình huống đã xác định; thước ghi 120,3 cm cho một giá trị gần đúng. Số chữ số dài không biến số đo thành giá trị chính xác. Nếu còn nghi ngờ, viết rõ đối tượng, đơn vị, dụng cụ và độ chính xác.
- **G10-B12-ABS_ERROR** — Muốn tính **sai số tuyệt đối thực**, cần biết cả giá trị đúng và gần đúng. Ví dụ \(a=7{,}2,\bar a=7{,}16\) cho \(\Delta=0{,}04\). Nếu chỉ biết \(d=0{,}1\), điều đúng là \(\Delta\le0{,}1\); không khẳng định \(\Delta=0{,}1\).
- **G10-B12-REL_ERROR** — Sai số \(0{,}1\) ở vật dài 1 đơn vị đáng kể hơn ở vật dài 100 đơn vị. Vì vậy chia sai số tuyệt đối cho \(|a|>0\), rồi nhân 100% nếu muốn tỷ lệ phần trăm. Khi \(a=0\), tỷ lệ theo \(|a|\) không xác định; hãy trở về sai số tuyệt đối.
- **G10-B12-ROUNDING** — Làm tròn là thay giá trị bởi số thuận tiện hơn ở một hàng xác định. Quy tắc chặn bằng nửa đơn vị hàng làm tròn cho phép **ước lượng sai số tối đa**, chứ không cho sai số thật khi chưa biết số gốc. Sau khi làm tròn, viết lại số và so giá trị trước–sau; không chỉ dừng ở quy tắc nhìn chữ số tiếp theo.

##### 1.1.4. Vận dụng

**Vận dụng M01.** Giá trị thật 9,68 mm ghi 9,7 mm: tìm sai số tuyệt đối và phần trăm tương đối.

<details markdown="1"><summary>Đối chiếu Vận dụng M01 — chỉ mở sau khi làm</summary>

\(\Delta=0{,}02\) mm; \(\delta_a=(0{,}02/9{,}7)\cdot100\%\approx0{,}206\%\).

**Khắc phục khi sai (D6):** Đừng lấy độ chính xác làm sai số thật; kiểm đơn vị và việc nhân 100 để ra phần trăm. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 1.2. Số trung bình và mốt

##### 1.2.1. Khám phá và lý do chọn thước đo

Khi cần mô tả một mẫu, **số trung bình** cho biết mức chia đều: \(\bar x=(x_1+\cdots+x_n)/n\). Bảng tần số dùng \(\bar x=\sum f_iv_i/\sum f_i\). **Mốt** là giá trị xuất hiện nhiều nhất, có thể có nhiều mốt. Với 2,2,3,5,8, số trung bình là \(20/5=4\) nhưng mốt là 2. Chọn mốt khi hỏi giá trị phổ biến, trung bình khi quan tâm tổng mức phân bổ; trung bình nhạy với giá trị lớn bất thường.

##### 1.2.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **ĐỊNH NGHĨA · CÔNG THỨC — Trung bình và mốt mẫu**
>
> \[\bar x=\frac{x_1+\cdots+x_n}{n}=\frac{\sum f_iv_i}{\sum f_i}.\] Mốt là giá trị có tần số lớn nhất, có thể nhiều mốt. Dữ liệu định lượng dùng số trung bình cho mức chia đều, nhưng trung bình nhạy với giá trị bất thường.


##### 1.2.3. Những kết quả quan trọng và lỗi dễ mắc

- **G10-B13-MEAN** — Trung bình là mức chia đều, không nhất thiết thuộc danh sách số liệu. Nếu giá trị 5 có tần số 3, phải cộng 5 **ba lần** hoặc nhân (5cdot3); đừng lấy trung bình các giá trị khác nhau mà quên tần số. Khi có số cực đoan, so thêm trung vị để giải thích.
- **G10-B13-MODE** — Mốt trả lời 'giá trị gặp thường nhất' chứ không đo vị trí trung tâm hay tổng. Khi tần số cao nhất xuất hiện ở hai giá trị, ta có **hai mốt**, không tự chọn một. Kiểm bằng cách viết bảng hai cột 'giá trị–số lần xuất hiện' trước khi kết luận.

##### 1.2.4. Vận dụng

**Vận dụng M02.** Mẫu 1,3,3,5,8 có trung bình và mốt nào?

<details markdown="1"><summary>Đối chiếu Vận dụng M02 — chỉ mở sau khi làm</summary>

Trung bình 4, mốt 3. Năm số có tổng bằng 20.

**Khắc phục khi sai (D6):** Nếu nhầm mốt với trung vị, lập bảng số lần xuất hiện trước khi kết luận. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 1.3. Trung vị và tứ phân vị

##### 1.3.1. Khám phá và lý do chọn thước đo

Phải **sắp dãy theo thứ tự**. Trung vị là phần tử ở giữa khi \(n\) lẻ, hoặc trung bình của hai phần tử giữa khi \(n\) chẵn. \(Q_2\) là trung vị; theo cách chia nửa mẫu KNTT, khi \(n\) lẻ loại trung vị rồi lấy trung vị của hai nửa để có \(Q_1,Q_3\). Ví dụ dãy 1,2,2,4,5,8,10 có \(Me=4,Q_1=2,Q_3=8\). Đây là phân vị **dữ liệu thô**, không dùng công thức nội suy ghép nhóm.

##### 1.3.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **ĐỊNH NGHĨA · QUY ƯỚC — Trung vị và tứ phân vị trên dãy thô**
>
> Trước hết **sắp xếp dữ liệu**. Trung vị \(Me=Q_2\) là giá trị giữa (n lẻ) hoặc trung bình hai giá trị giữa (n chẵn). Theo cách chia nửa dãy KNTT: n lẻ **loại trung vị** rồi lấy trung vị hai nửa để có \(Q_1,Q_3\). Đây không phải nội suy trên bảng ghép nhóm.


##### 1.3.3. Những kết quả quan trọng và lỗi dễ mắc

- **G10-B13-MEDIAN** — Muốn tìm trung vị, bước không được bỏ là **xếp lại dãy tăng dần**. Với số phần tử chẵn, hai giá trị ở giữa cần lấy trung bình, dù trung vị có thể không có trong dãy quan sát. Nếu kết quả thay đổi khi hoán vị thứ tự nhập dữ liệu, cách làm đã sai.
- **G10-B13-QUARTILES** — Trên dãy thô, dùng đúng quy ước chia nửa mẫu của SGK KNTT. Với dãy lẻ, tách phần tử trung vị ra rồi mới lấy (Q_1,Q_3) từ hai nửa; với dãy chẵn, chia đôi theo vị trí. Đây **không phải** phép nội suy tần số ghép nhóm sẽ học sau.

##### 1.3.4. Vận dụng

**Vận dụng M03.** Tìm Me, Q1, Q3 của 2,4,6,8,10,12.

<details markdown="1"><summary>Đối chiếu Vận dụng M03 — chỉ mở sau khi làm</summary>

Có 6 số: \(Me=(6+8)/2=7\); nửa dưới 2,4,6 có \(Q_1=4\), nửa trên 8,10,12 có \(Q_3=10\).

**Khắc phục khi sai (D6):** Đánh dấu vị trí giữa và chia hai nửa sau khi đã sắp; không đoán từ thứ tự đề liệt kê. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 1.4. Khoảng biến thiên, IQR và ngoại lệ

##### 1.4.1. Khám phá và lý do chọn thước đo

Khoảng biến thiên \(R=x_{\max}-x_{\min}\) phản ánh độ trải từ đầu tới cuối nhưng rất nhạy với cực trị. Khoảng tứ phân vị \(IQR=Q_3-Q_1\) tập trung vào nửa giữa. Quy ước hàng rào \(Q_1-1{,}5IQR\) và \(Q_3+1{,}5IQR\) giúp **đánh dấu để xem xét**, không chứng minh dữ liệu sai. Với 1,2,2,4,5,8,30: \(Me=4,Q_1=2,Q_3=8,IQR=6\); hàng rào trên 17, nên 30 là ngoại lệ theo quy tắc này. Trung bình \(52/7\approx7{,}43\) chịu ảnh hưởng mạnh hơn trung vị.

##### 1.4.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · GHI NHỚ — Độ trải và hàng rào ngoại lệ**
>
> \[R=x_{\max}-x_{\min},\quad IQR=Q_3-Q_1.\] Hàng rào tham khảo \(Q_1-1{,}5IQR\) và \(Q_3+1{,}5IQR\) giúp nhận diện điểm đáng xem xét, **không chứng minh quan sát bị sai**.


##### 1.4.3. Những kết quả quan trọng và lỗi dễ mắc

- **G10-B13-INTERPRETATION** — Nếu hầu hết thu nhập khoảng 5 nhưng một giá trị là 50, số trung bình bị kéo lên, còn trung vị vẫn mô tả người ở giữa. Không có một số đặc trưng luôn tốt nhất: muốn nói mức chia đều dùng trung bình, còn muốn một mức ít nhạy ngoại lệ hãy cân nhắc trung vị. Nêu lý do chọn.
- **G10-B14-RANGE_IQR** — Khoảng biến thiên chỉ dùng hai cực trị nên nhạy với một số rất lớn, còn IQR dùng (Q_3-Q_1) để đo độ trải trung tâm. Khi hai mẫu cùng trung bình, hãy dùng thêm R/IQR thay vì kết luận mức ổn định như nhau. IQR và R đều cùng đơn vị với dữ liệu.
- **G10-B14-OUTLIERS** — Hàng rào (Q_1-1{,}5IQR) và (Q_3+1{,}5IQR) là quy tắc **phát hiện điểm đáng kiểm tra**. Một điểm vượt hàng rào có thể là quan sát hợp lệ. Nêu đúng ngưỡng và chiều so sánh trước khi gắn nhãn; không xóa dữ liệu chỉ vì bị đánh dấu.

##### 1.4.4. Vận dụng

**Vận dụng M04.** Mẫu 2,3,4,5,6,7,25 có IQR và hàng rào trên bao nhiêu?

<details markdown="1"><summary>Đối chiếu Vận dụng M04 — chỉ mở sau khi làm</summary>

\(Q_1=3,Q_3=7,IQR=4\); hàng rào trên \(7+1{,}5\cdot4=13\). Số 25 vượt hàng rào.

**Khắc phục khi sai (D6):** Đọc đúng Q1/Q3 trước khi gán nhãn ngoại lệ; đừng loại bỏ điểm dữ liệu chỉ vì trông khác. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

##### 1.4.5. Hình minh họa: đọc biểu đồ hộp và ngoại lệ

![Biểu đồ hộp có ngoại lệ 30 theo quy tắc hàng rào](assets/Temp_STATISTICS_BOX_OUTLIER_R00_20261111.svg)

**Đọc hình:** Đọc \(Q_1=2\), trung vị \(Me=4\), \(Q_3=8\); \(IQR=6\), hàng rào trên \(8+1{,}5\cdot6=17\). Điểm 30 vượt 17 nên được đánh dấu để kiểm tra **chứ không tự xóa** khỏi mẫu. Hình phải được đặt tại đây, không chuyển xuống sau tất cả các mục.

#### 1.5. Phương sai và độ lệch chuẩn

##### 1.5.1. Khám phá và lý do chọn thước đo

Để so sánh hai nhóm có cùng trung bình, xét sai lệch từng giá trị so với \(\bar x\). **Phương sai mô tả** \(s^2=\frac1n\sum_{i=1}^n(x_i-\bar x)^2\), **độ lệch chuẩn** \(s=\sqrt{s^2}\). Dữ liệu đo bằng phút thì \(s\) tính phút, \(s^2\) tính phút bình phương. Ví dụ A=3,4,5 và B=1,4,7 đều có trung bình 4; \(s_A^2=2/3\), \(s_B^2=6\) nên A ổn định hơn. Không tự thay mẫu số \(n\) bằng \(n-1\) trong công thức SGK này.

##### 1.5.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC — Phương sai mô tả và độ lệch chuẩn (dữ liệu thô)**
>
> \[s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad s=\sqrt{s^2}.\] Đây là **phương sai mô tả dùng mẫu số n** theo học liệu SGK, không tự thay bằng \(n-1\). \(s\) cùng đơn vị với dữ liệu, \(s^2\) bình phương đơn vị.


##### 1.5.3. Những kết quả quan trọng và lỗi dễ mắc

- **G10-B14-VARIANCE** — Bình phương sai lệch giúp các độ lệch âm/dương không triệt tiêu. Theo phương sai mô tả SGK, chia **cho \(n\)** chứ không tự đổi sang \(n-1\). Khi tính \(s^2\), hãy kiểm \(\sum(x_i-\bar x)^2\ge0\); nếu phương sai âm, chắc chắn có lỗi số học.
- **G10-B14-STDDEV** — Độ lệch chuẩn là căn bậc hai của phương sai, giúp thước đo trở lại cùng **đơn vị** với dữ liệu. Nếu số đo tính bằng cm, (s) tính cm nhưng (s^2) tính cm². So sánh độ lệch chuẩn có ý nghĩa khi các mẫu dùng cùng đơn vị và bối cảnh.
- **G10-B14-COMPARISON** — Hai dãy có cùng số trung bình không nhất thiết phân tán như nhau. Với A=3,4,5 và B=1,4,7, trung bình đều là 4, nhưng B biến động mạnh hơn. Hãy ghi rõ bạn đang so theo phương sai, độ lệch chuẩn hay IQR; không kết luận nguyên nhân chỉ từ khác biệt thống kê.

##### 1.5.4. Vận dụng

**Vận dụng M05.** So sánh phương sai A=4,5,6 và B=2,5,8.

<details markdown="1"><summary>Đối chiếu Vận dụng M05 — chỉ mở sau khi làm</summary>

Trung bình cùng bằng 5; \(s_A^2=2/3\), \(s_B^2=6\). A ít phân tán hơn.

**Khắc phục khi sai (D6):** Lập bảng x−x̄ rồi bình phương và chia đúng n; kiểm phương sai không âm. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

### 2. Dữ liệu ghép nhóm và các ước lượng vị trí

#### 2.1. Ghép nhóm: biên, độ rộng, tần số

##### 2.1.1. Khám phá và lý do chọn thước đo

Khi có quá nhiều quan sát, gom thành các khoảng **trái đóng, phải mở** \([a,b)\) để một số ở ranh giới chỉ thuộc **một** nhóm. Độ rộng nhóm \(h=b-a\); tần số \(f_i\) là số phần tử thuộc nhóm, tổng \(\sum f_i=n\). Ví dụ dữ liệu 0,9,10,19,20 ghép \([0,10),[10,20),[20,30)\) có tần số 2,2,1. Sau ghép nhóm, thông tin từng quan sát mất đi: không thể khẳng định mọi số ở nhóm [10,20) đều bằng 15.

##### 2.1.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **ĐỊNH NGHĨA · TÍNH CHẤT — Bảng tần số ghép nhóm**
>
> Các nhóm dạng \([a_i,b_i)\) **trái đóng, phải mở**, không trùng và phủ các quan sát. Độ rộng \(h_i=b_i-a_i>0\); tần số \(f_i\) là số quan sát trong nhóm; \(\sum_i f_i=n\). Gán điểm biên vào một nhóm duy nhất.


##### 2.1.3. Những kết quả quan trọng và lỗi dễ mắc

- **G11-B08-GROUPED-DEFINITION** — Bảng ghép nhóm thay các số đo riêng lẻ bằng số phần tử nằm trong các khoảng. Được lợi khả năng đọc tổng quan nhưng **mất độ chính xác từng cá thể**. Khi nhóm [10,20) có tần số 5, ta biết có năm quan sát từ 10 đến dưới 20, không biết mỗi người bằng 15.
- **G11-B08-CLASS-BOUNDARIES** — Trong ký hiệu [10,20), 10 được lấy nhưng 20 không; số 20 chuyển sang [20,30). Điều này bảo đảm một điểm biên không bị đếm hai lần. Trước khi lập bảng, hãy kiểm nhóm có liền nhau, không trùng và không bỏ lọt số đo cần xét.
- **G11-B08-GROUP-WIDTH** — Độ rộng nhóm (h=b-a) phải dương. Nhóm [0,10) có độ rộng 10, khác nhóm [10,30) rộng 20. Với độ rộng không đều, chỉ so chiều cao cột tần số hoặc dùng công thức mốt cho nhóm bằng nhau có thể gây sai; phải kiểm điều kiện nhóm của bài.
- **G11-B08-FREQUENCY-TABLE** — Mỗi quan sát được gán đúng **một** khoảng, rồi đếm tần số. Tổng (sum f_i) cần bằng số quan sát gốc (n); nếu thiếu hoặc dư, kiểm ngay các số ở ranh giới. Sau khi tạo bảng, đọc tỷ lệ (f_i/n) thay vì tự gán xác suất hay giá trị trung điểm cho mọi cá thể.
- **G11-B08-INTERPRETATION** — Tần số 8 trên tổng 20 nghĩa là 40% mẫu nằm trong khoảng đó. Điều này **không** cho biết bao nhiêu người đúng bằng trung điểm, và cũng không suy thẳng tỷ lệ tổng thể từ một mẫu thiếu thông tin chọn mẫu. Khi báo cáo, hãy gọi đúng là tỷ lệ trong mẫu.

##### 2.1.4. Vận dụng

**Vận dụng M06.** Tần số của các nhóm [0,10), [10,20), [20,30) với dữ liệu 3,10,10,20,29?

<details markdown="1"><summary>Đối chiếu Vận dụng M06 — chỉ mở sau khi làm</summary>

1,2,2; tổng 5. Hai số 10 thuộc nhóm thứ hai.

**Khắc phục khi sai (D6):** Khoanh từng quan sát theo biên trái đóng–phải mở, rồi đối chiếu tổng tần số với n. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 2.2. Đại diện, trung bình nhóm và tích lũy

##### 2.2.1. Khám phá và lý do chọn thước đo

Trung điểm \(c_i=(a_i+b_i)/2\) đại diện nhóm, không phải giá trị đo của từng cá thể. Ước lượng trung bình nhóm \(\bar x_g=\sum f_i c_i/n\); tần số tích lũy \(F_i=\sum_{j\le i}f_j\). Với \([0,10):2,[10,20):3,[20,30):1\), trung điểm 5,15,25, tổng trọng số 80, \(n=6\): \(\bar x_g=80/6=40/3\). Tích lũy 2,5,6. Số trung bình này chỉ là **ước lượng từ bảng nhóm**.

##### 2.2.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · GHI NHỚ — Trung điểm, trung bình và tần số tích lũy**
>
> \[c_i=\frac{a_i+b_i}{2},\quad \bar x_g=\frac{\sum_i f_ic_i}{n},\quad F_i=\sum_{j\le i}f_j.\] \(\bar x_g\) là **ước lượng** từ trung điểm, không phải trung bình chính xác của dữ liệu thô.


##### 2.2.3. Những kết quả quan trọng và lỗi dễ mắc

- **G11-B09-REPRESENTATIVE** — Trung điểm khoảng ([10,20)) là 15, được dùng thay thế khi chỉ còn số nhóm. Nó đại diện cho phép **ước lượng**, không phải số đo gốc của từng người. Nếu khoảng không đều, trung điểm tính riêng cho từng nhóm; không dùng cùng một trung điểm cho các nhóm.
- **G11-B09-GROUPED-MEAN** — Số trung bình ghép nhóm dùng \(\sum f_ic_i/n\) vì nhóm nhiều quan sát phải có trọng số lớn hơn. Nếu nhóm 1 có tần số 9 và nhóm 2 là 1, trung bình hai trung điểm đơn thuần sẽ sai. Kết quả là ước lượng từ bảng nhóm; hãy viết rõ dấu xấp xỉ khi so với trung bình gốc.
- **G11-B09-CUMULATIVE** — Tần số tích lũy nối lần lượt các nhóm từ trái sang phải; nhóm chứa vị trí (p) là nhóm đầu tiên đạt tới hoặc vượt (p) theo quy ước nội suy đang dùng. Nếu số tích lũy cuối khác (n), cần sửa bảng tần số trước khi tìm trung vị hay tứ phân vị.

##### 2.2.4. Vận dụng

**Vận dụng M07.** Nhóm [0,10):1, [10,20):2, [20,30):1: ước lượng trung bình, tích lũy.

<details markdown="1"><summary>Đối chiếu Vận dụng M07 — chỉ mở sau khi làm</summary>

Trung điểm 5,15,25; trung bình (5+30+25)/4=15, tích lũy 1,3,4.

**Khắc phục khi sai (D6):** Không lấy trung bình ba trung điểm nếu nhóm có tần số khác nhau. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

##### 2.2.5. Hình minh họa: tần số và tích lũy

![Biểu đồ tần số ghép nhóm của 20 quan sát với bốn cột](assets/Temp_STATISTICS_GROUPED_FREQ_R00_20261111.svg)

**Đọc hình:** Bốn cột có tần số \(4,6,8,2\) trên tổng \(20\). Cộng tích lũy lần lượt \(4,10,18,20\). Trục/cột biểu diễn **số quan sát trong mỗi khoảng**, không khẳng định tất cả số trong một khoảng đều bằng trung điểm.

#### 2.3. Nội suy trung vị và tứ phân vị ghép nhóm

##### 2.3.1. Khám phá và lý do chọn thước đo

Với bảng nhóm, tìm nhóm chứa vị trí \(p\) từ **tần số tích lũy**, rồi nội suy: \(\mathrm{estimate}=L+(p-F_{\mathrm{trước}})h/f\) khi tần số nhóm \(f>0\). Với trung vị dùng \(p=n/2\), tứ phân vị \(p=n/4,3n/4\). Ví dụ nhóm [0,10):4, [10,20):6, [20,30):8, [30,40):2 có \(n=20\), tích lũy 4,10,18,20. \(Me=20\), \(Q_1=10+(5-4)10/6=35/3\), \(Q_3=20+(15-10)10/8=26{,}25\). Đều là **ước lượng** từ bảng, không là số gốc chính xác.

##### 2.3.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · ĐIỀU KIỆN — Nội suy các phân vị của bảng ghép nhóm**
>
> \[Q_p\approx L+\frac{(p-F_{\rm trước})h}{f},\qquad f>0.\] Chọn \(p=n/4,n/2,3n/4\) cho \(Q_1,Me,Q_3\); trước đó phải định vị đúng lớp chứa p bằng tần số tích lũy. Đây là **ước lượng**, không phải dữ liệu gốc.


##### 2.3.3. Những kết quả quan trọng và lỗi dễ mắc

- **G11-B09-GROUPED-MEDIAN** — Trung vị ghép nhóm là **ước lượng**: đánh dấu vị trí (n/2), tìm nhóm dựa tích lũy, rồi nội suy từ cận trái (L) với tần số nhóm (f>0). Nếu lấy sai (F_{mathrm{trước}}) hoặc nhầm với tần số nhóm hiện tại, kết quả sẽ lệch. Đặt hai giá trị lên cùng trục để kiểm phạm vi nhóm.
- **G11-B09-GROUPED-QUARTILES** — Với (Q_1,Q_3), thay vị trí (p) bằng (n/4) hoặc (3n/4) trong quy tắc nội suy nhóm. Hai phân vị có thể nằm trong hai nhóm khác nhau; phải tìm nhóm riêng **trước** khi dùng công thức. Cuối cùng kiểm (Q_1le Mele Q_3).

##### 2.3.4. Vận dụng

**Vận dụng M08.** Nhóm [0,10):5, [10,20):5, [20,30):10: ước lượng Me, Q1, Q3.

<details markdown="1"><summary>Đối chiếu Vận dụng M08 — chỉ mở sau khi làm</summary>

Tích lũy 5,10,20. \(Me=20,Q_1=10,Q_3=25\).

**Khắc phục khi sai (D6):** Nếu chọn nhầm nhóm, tô cột tích lũy đến n/4,n/2,3n/4 trước khi nội suy. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 2.4. Mốt ghép nhóm và giới hạn áp dụng

##### 2.4.1. Khám phá và lý do chọn thước đo

Với nhóm **cùng độ rộng**, nhóm tần số lớn nhất là nhóm mốt. Nếu \(f_m\) là tần số nhóm mốt và \(f_-,f_+\) là hai tần số kề, ước lượng \(Mo=L+\frac{f_m-f_-}{(f_m-f_-)+(f_m-f_+)}h\) khi mẫu dương. Ví dụ nhóm [0,10):3,[10,20):9,[20,30):5 cho \(Mo=10+(6/(6+4))10=16\). Nếu nhiều nhóm cùng cực đại, nhóm không đều hoặc thiếu nhóm kề, không dùng máy móc công thức.

##### 2.4.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · ĐIỀU KIỆN — Mốt ước lượng cho nhóm cùng độ rộng**
>
> \[M_o\approx L+\frac{f_m-f_-}{(f_m-f_-)+(f_m-f_+)}\,h.\] Trong đó \(L\) là cận dưới nhóm mốt, \(h>0\) là độ rộng nhóm, \(f_m\) là tần số nhóm mốt, \(f_-\) và \(f_+\) lần lượt là tần số nhóm liền trước và liền sau. **Quy ước biên:** Nếu nhóm mốt đứng đầu thì lấy \(f_-=0\); nếu đứng cuối thì lấy \(f_+=0\). Chỉ áp dụng cho các nhóm **cùng độ rộng**, nhóm mốt được chọn rõ và **mẫu số dương**; nếu nhiều nhóm cùng đạt cực đại cần xét lại tình huống thay vì thế máy móc.


##### 2.4.3. Những kết quả quan trọng và lỗi dễ mắc

- **G11-B09-GROUPED-MODE** — Nhóm mốt có tần số lớn nhất khi **các khoảng cùng độ rộng**. Sau khi xác định nhóm, dùng tần số nhóm trước/nhóm sau để nội suy vị trí mốt; đáp số không nhất thiết là một số đã được quan sát. Mốt ghép nhóm khác mốt của dãy số thô.
- **G11-B09-MODE-CONDITIONS** — Nếu nhóm cao nhất nằm ở biên, nhiều nhóm cùng cao nhất hoặc độ rộng nhóm khác nhau, không thế chỗ điều kiện bằng thói quen máy móc. Với nhóm khác độ rộng, cách đọc biểu đồ tần số cần chú ý diện tích/mật độ; không chỉ nhìn số tần số lớn mà áp dụng công thức nhóm đều.
- **G11-B09-INTERPRETATION** — Từ bảng nhóm, trung bình, trung vị, tứ phân vị và mốt đều được suy qua đại diện/nội suy, nên chỉ báo **ước lượng**. Không suy kết quả chính xác của dữ liệu gốc hoặc kết luận nhóm có 'mọi người như nhau'. Dùng bảng nhóm thích hợp cho mô tả tổng quan, không thay dữ liệu cá nhân.

##### 2.4.4. Vận dụng

**Vận dụng M09.** Nhóm [0,10):4,[10,20):10,[20,30):6, cùng độ rộng: ước lượng mốt.

<details markdown="1"><summary>Đối chiếu Vận dụng M09 — chỉ mở sau khi làm</summary>

Nhóm mốt [10,20); \(Mo=10+(6/(6+4))10=16\).

**Khắc phục khi sai (D6):** Kiểm mẫu số dương, tần số các nhóm kề và điều kiện cùng độ rộng. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

### 3. Độ phân tán ghép nhóm và phân tích số liệu

#### 3.1. Khoảng biến thiên ghép nhóm

##### 3.1.1. Khám phá và lý do chọn thước đo

Khi dữ liệu chỉ còn nhóm, ta không biết số nhỏ nhất/lớn nhất thật. Độ rộng phủ nhóm không rỗng từ \([a_1,b_1)\) tới \([a_k,b_k)\) cho ước lượng \(R_g=b_k-a_1\), **không** đồng nhất với khoảng biến thiên thật. Ví dụ [0,10):2,[10,20):4,[20,30):3 cho \(R_g=30\). Đây là khoảng phủ theo biên nhóm; các quan sát có thể nằm cách xa cận.

##### 3.1.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **GHI NHỚ · GIỚI HẠN — Khoảng biến thiên ghép nhóm**
>
> \[R_g=b_k-a_1\] là **độ phủ theo biên các nhóm không rỗng** từ nhóm đầu đến nhóm cuối, không nhất thiết bằng khoảng biến thiên thực của các quan sát.


##### 3.1.3. Những kết quả quan trọng và lỗi dễ mắc

- **G12-CHIII-B09-O01** — Trước khi tính độ phân tán, đọc xem bảng là số liệu ghép nhóm với tần số hay dữ liệu thô. Phải kiểm tổng tần số, nhóm cực biên có tần số dương và cận nhóm. Không gọi trung điểm và cận là giá trị gốc chính xác của mẫu.
- **G12-CHIII-B09-O02** — Khoảng biến thiên ghép nhóm dựa cận thấp nhất và cận cao nhất của nhóm có số liệu. Vì không biết giá trị thực trong các nhóm, kết quả mô tả **độ rộng phủ** của bảng. Nêu rõ sự khác nhau với khoảng biến thiên của dữ liệu chưa ghép.
- **G12-CHIII-B09-O03** — Chỉ một nhóm cực biên có vài quan sát cũng có thể khiến độ phủ nhóm rất rộng. Khi so sánh, thước đo R nhạy với cực trị, nên cần xem thêm IQR. Không khẳng định hai mẫu 'ổn định như nhau' chỉ vì chúng có trung bình bằng nhau.

##### 3.1.4. Vận dụng

**Vận dụng M10.** Nhóm [5,15):3,[15,25):4,[25,35):1: ước lượng độ rộng phủ theo nhóm.

<details markdown="1"><summary>Đối chiếu Vận dụng M10 — chỉ mở sau khi làm</summary>

35−5=30 đơn vị; không kết luận R thực chắc chắn bằng 30.

**Khắc phục khi sai (D6):** Nếu nhầm đầu mút nhóm với quan sát thực, thử đặt hai bộ số liệu khác nhau vào cùng nhóm. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 3.2. IQR ghép nhóm và so sánh

##### 3.2.1. Khám phá và lý do chọn thước đo

Ước lượng \(Q_1,Q_3\) từ tần số tích lũy và nội suy như mảng trước, sau đó \(IQR_g=Q_3-Q_1\). Mẫu nhóm [0,10):4,[10,20):8,[20,30):8 có \(n=20\), tích lũy 4,12,20: \(Q_1=10+(5-4)10/8=11{,}25\), \(Q_3=20+(15-12)10/8=23{,}75\), \(IQR_g=12{,}5\). IQR nhóm là ước lượng, không dùng để xác định chắc chắn cá thể ngoại lệ khi thiếu dữ liệu thô.

##### 3.2.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · GHI NHỚ — IQR ước lượng của dữ liệu ghép nhóm**
>
> \[IQR_g=Q_{3,g}-Q_{1,g}.\] Hai tứ phân vị được **nội suy** từ tần số tích lũy; không dùng hàng rào nhóm để khẳng định chắc chắn một cá thể là ngoại lệ nếu đã mất dữ liệu thô.


##### 3.2.3. Những kết quả quan trọng và lỗi dễ mắc

- **G12-CHIII-B09-O04** — Để tìm nhóm chứa phân vị, xây tần số tích lũy trước rồi đánh dấu hai vị trí (n/4) và (3n/4). Khi vị trí đúng ở ranh tích lũy, dùng quy ước SGK thống nhất; giá trị nội suy nằm ở cận chung của hai nhóm kề. Không dùng nhóm có tần số 0 làm mẫu số.
- **G12-CHIII-B09-O05** — Sau khi tìm (Q_1,Q_3) từ bảng nhóm, lấy (IQR_g=Q_3-Q_1). Đó là **ước lượng** mức trải của 50% dữ liệu trung tâm, không phải IQR chính xác của mẫu thô đã mất. Kiểm dấu không âm; nếu ra âm, hãy kiểm lại thứ tự hai vị trí nội suy.
- **G12-CHIII-B09-O06** — Khi so độ ổn định hai mẫu, R cho biết độ phủ từ cực thấp đến cực cao còn IQR mô tả phần giữa. Nêu rõ thước đo chọn theo mục tiêu: tìm thay đổi cực trị dùng R, tìm phần trung tâm dùng IQR. Luôn kiểm đơn vị, cách ghép và cỡ mẫu trước kết luận.

##### 3.2.4. Vận dụng

**Vận dụng M11.** Nhóm [0,10):4,[10,20):10,[20,30):6: Q1,Q3,IQR ước lượng?

<details markdown="1"><summary>Đối chiếu Vận dụng M11 — chỉ mở sau khi làm</summary>

\(Q_1=11\), \(Q_3=20+10/6=65/3\), \(IQR_g=32/3\approx10{,}67\).

**Khắc phục khi sai (D6):** Nếu sai Q1/Q3, tự kiểm nhóm chứa vị trí n/4 và 3n/4, luôn kiểm Q1≤Q3. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 3.3. Phương sai và độ lệch chuẩn ghép nhóm

##### 3.3.1. Khám phá và lý do chọn thước đo

Dữ liệu gốc đã ẩn nên dùng trung điểm \(c_i\) để ước lượng: \(\bar x_g=\sum f_ic_i/n\), \(s_g^2=\sum f_i(c_i-\bar x_g)^2/n=\sum f_ic_i^2/n-\bar x_g^2\), \(s_g=\sqrt{s_g^2}\). Nếu nhóm [0,10):2,[10,20):2 thì \(c=5,15\), \(\bar x_g=10\), \(s_g^2=(50+50)/4=25\), \(s_g=5\). Phương sai có **bình phương đơn vị**, độ lệch chuẩn có đơn vị gốc. Đây là ước lượng theo trung điểm.

##### 3.3.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **CÔNG THỨC · ĐIỀU KIỆN — Phương sai và độ lệch chuẩn ghép nhóm**
>
> \[s_g^2=\frac{\sum_i f_i(c_i-\bar x_g)^2}{n}=\frac{\sum_i f_ic_i^2}{n}-\bar x_g^2,\qquad s_g=\sqrt{s_g^2}.\] Trung điểm là đại diện nên đây là **ước lượng**, không đo được độ lệch thật trong mỗi nhóm.


##### 3.3.3. Những kết quả quan trọng và lỗi dễ mắc

- **G12-CHIII-B10-O01** — Muốn ước lượng trung bình ghép nhóm, sử dụng trung điểm (c_i) của từng khoảng và trọng số (f_i). Nếu có nhóm không quan sát nào ((f_i=0)), nhóm đó không góp vào tổng trung bình. Phải chia đúng (n=sum f_i>0) và ghi kết quả là ước lượng.
- **G12-CHIII-B10-O02** — Phương sai là trung bình **bình phương** khoảng cách đến giá trị trung bình, nên không âm. Với bảng nhóm, dùng trung điểm thay số liệu gốc để ước lượng độ phân tán. Không chỉ đọc sự khác nhau giữa các cận nhóm rồi suy phương sai như số liệu thô.
- **G12-CHIII-B10-O03** — Có hai cách kiểm chéo: (sum f_i(c_i-ar x_g)^2/n) và (sum f_i c_i^2/n-ar x_g^2). Hai cách phải bằng nhau (sai khác nhỏ khi làm tròn). Nếu công thức rút gọn cho số âm rõ rệt, kiểm số học và bước ước lượng trung bình.
- **G12-CHIII-B10-O04** — Độ lệch chuẩn là căn của phương sai ước lượng, giúp diễn giải theo đơn vị **gốc**. Phương sai dữ liệu tính bằng phút có đơn vị phút²; độ lệch chuẩn tính bằng phút. Nếu báo cáo ngược đơn vị, người đọc khó hiểu mức biến động thực tế.

##### 3.3.4. Vận dụng

**Vận dụng M12.** Nhóm [0,10):1,[10,20):2,[20,30):1: phương sai/std nhóm?

<details markdown="1"><summary>Đối chiếu Vận dụng M12 — chỉ mở sau khi làm</summary>

Các trung điểm 5,15,25; \(\bar x_g=15\); \(s_g^2=(100+0+100)/4=50\), \(s_g=5\sqrt2\approx7{,}071\).

**Khắc phục khi sai (D6):** Đừng chia n−1 hoặc bỏ trọng số f; dùng hai công thức kiểm chéo để tránh phương sai âm. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

#### 3.4. So sánh phân phối và giới hạn suy luận

##### 3.4.1. Khám phá và lý do chọn thước đo

Hai mẫu có cùng trung bình vẫn có độ ổn định khác nhau. Trên các nhóm [0,10),[10,20),[20,30) với trung điểm 5,15,25: A tần số 1,2,1 và B 2,0,2 cùng \(\bar x_g=15\), nhưng \(s_A^2=50<s_B^2=100\). Vì vậy A ổn định hơn **theo độ phân tán nhóm**, không phải kết luận về mọi biến cố tương lai. Chỉ so sánh khi hai mẫu dùng cùng thang đo, đơn vị và cách nhóm hợp lí.

##### 3.4.2. Định nghĩa, công thức và điều kiện cần ghi nhớ

> **TÍNH CHẤT · GHI NHỚ — So sánh hai phân phối có cùng trung bình**
>
> Hai mẫu có thể có \(\bar x_g\) bằng nhau mà \(s_g^2\) khác nhau. Mẫu có độ lệch chuẩn nhỏ hơn **ít phân tán hơn theo thước đo và cách nhóm đang dùng**, không mặc nhiên tốt hơn hay gây ra kết quả nào. Chỉ so khi đơn vị/thang đo/cách nhóm hợp lý.


##### 3.4.3. Những kết quả quan trọng và lỗi dễ mắc

- **G12-CHIII-B10-O05** — So sánh hai mẫu có cùng thang đo bằng (s_g) hoặc (s_g^2). Số nhỏ hơn phản ánh mẫu tập trung hơn quanh trung bình theo mô hình nhóm, **không** có nghĩa mẫu đó luôn tốt hơn trong mọi mục tiêu. Trước khi so, ghi rõ hai mẫu có cùng cách chia khoảng và đơn vị.
- **G12-CHIII-B10-O06** — Thống kê mô tả chỉ mô tả dữ liệu đã quan sát, không chứng minh nguyên nhân hoặc rủi ro tương lai. Khi cần khuyến nghị, nêu giả định về mẫu, độ mất thông tin do ghép nhóm, thước đo và mục tiêu ra quyết định. Tránh biến 'phân tán cao' thành kết luận chắc chắn 'rủi ro cao' thiếu bối cảnh.

##### 3.4.4. Vận dụng

**Vận dụng M13.** A có tần số 1,4,1 và B 2,2,2 trên ba nhóm trên: so sánh phương sai nhóm.

<details markdown="1"><summary>Đối chiếu Vận dụng M13 — chỉ mở sau khi làm</summary>

Cùng \(\bar x_g=15\). \(s_A^2=100/3\), \(s_B^2=200/3\), nên A ít phân tán hơn.

**Khắc phục khi sai (D6):** Không suy nhân quả từ các số mô tả; kiểm cỡ mẫu, đơn vị và cách ghép nhóm. Sau đó làm một câu tương đương trong ngân hàng public theo outcome.

</details>

<!-- TOPIC_PRACTICE_BEGIN -->
## 2. Luyện tập

Dùng một thư viện canonical công khai, **không nhân bản** câu, key hoặc rubric. Ngân hàng luyện tập dùng 114 câu công khai canonical, phân từ nhận biết đến vận dụng theo 39 mục tiêu năng lực; bộ đề/đáp án/rubric chỉ có một bản nguồn dùng chung. Chọn từ dễ đến vận dụng, giải thích vì sao dùng thống kê **thô** hay **ghép nhóm**, rồi mới mở đối chiếu khi được phép. Written/Anchor chung một bản ghi, Anchor chỉ là nhãn.

| Chặng | Mảng | Điều kiện cần kiểm |
|---|---|---|
| G10 | M01–M05 | Sai số/độ chính xác, median n chẵn/lẻ, phân vị đúng quy tắc, mẫu số n trong phương sai |
| G11 | M06–M09 | Cận trái đóng/phải mở, trung điểm có trọng số, tích lũy, nội suy, nhóm mốt |
| G12 | M10–M13 | R/IQR và phương sai ghép nhóm đều là ước lượng, so sánh cùng đơn vị và cách ghép |

**Cách luyện:** Chọn câu thuộc mảng G10 (độ chính xác, trung bình, trung vị và phân tán thô), G11 (bảng ghép nhóm, trung điểm, nội suy) hoặc G12 (độ phân tán và phân tích ghép nhóm). Ghi điều kiện mô hình, đơn vị và lý do chọn thước đo. Làm trước, sau đó mới mở lời giải công khai, không dùng để ghi Mastery.

<!-- AUTHORING_SHARED_CANONICAL: 114 unique PUBLIC IDs, 107 original refs via original R01 source index blob 51a6e99587187838aea61c5c72108adae7874d1d and 7 extension records blob c222f9c8ef2c3b34caf4f6d6c33fa88f960471c3. One stem/key/solution/rubric per canonical ID. -->

<!-- TOPIC_PRACTICE_END -->


<!-- TOPIC_SELF_CHECK_BEGIN -->
## 3. Tự kiểm tra

Đây là một lượt **tự đối chiếu công khai** `CLIENT_SELF_CHECK_NO_MASTERY`, không phải `TOPIC_READINESS` độc lập. Trước **Final Submit**, không gợi ý, đáp án, đánh dấu đúng/sai hoặc AI Tutor. Sau Final Submit mới mở phần đối chiếu và đường sửa sai D6; không dùng câu Practice đã xem để cấp Mastery.

| Chặng | Item public đã có thể dùng lại bằng placement | Ôn sau sai |
|---|---|---|
| Mẫu G10 | **3 bài ôn dữ liệu thô** (các mã canonical được RELEASE lấy từ ma trận) | Trở lại mục 1.1–1.5 |
| Mẫu ghép G11 | **3 bài ôn ghép nhóm** | Trở lại mục 2.1–2.4 |
| Phân tán G12 | **3 bài ôn phân tán ghép nhóm** | Trở lại mục 3.1–3.4 |

Bộ RD1 kín của từng chương SGK là nguồn đánh giá riêng ngoài GitHub, không được chuyển thành Topic RD1 và không xuất hiện trong source này.

<!-- TOPIC_SELF_CHECK_END -->


<!-- AUTHORING_PUBLIC_SELF_CHECK_PLACEMENTS_SAME_ID: THPT-G10-B12-P01, THPT-G10-B13-P03, THPT-G10-B14-P05, THPT-G11-B08-P03, THPT-G11-B09-P02, THPT-G11-B09-P04, THPT-G12-B09-P04, THPT-G12-B10-P04, THPT-G12-B10-P08; NO_MASTERY; NOT_RD1 -->


### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 Kết nối tri thức, Tập Một:** Chương V, Bài 12–14, trang in 73–88.
- **SGK Toán 11 Kết nối tri thức, Tập Một:** Chương III, Bài 8–9, trang in 58–68.
- **SGK Toán 12 Kết nối tri thức, Tập Một:** Chương III, Bài 9–10, trang in 75–84.
- **SBT Kết nối tri thức (tham khảo dạng bài):** Toán 10 Tập Một trang in 72–80; Toán 11 Tập Một trang in 44–49; Toán 12 Tập Một trang in 59–69.



<!-- END_EXACT_GITHUB_CONTENT_3 -->

---


# Source 4 of 5 — Lượng giác G10–G11 (FULL EXACT LEARNER CONTENT)

SOURCE_GIT_BLOB: 404d46dfb46cd6e9775b116aeace2ba322a031d7
SOURCE_REPOSITORY_PATH: prototypes/thpt/content-drafts/topic-trigonometry/Temp_TOPIC_TRIG_G10_G11_R03_NOTEBOOKLM_P1_INTEGER_K_20261114.md
SOURCE_BRANCH: authoring/topic-trigonometry-g10-g11-r00-20261112
SOURCE_PR: 813

<!-- BEGIN_EXACT_GITHUB_CONTENT_4 -->
# Chuyên đề Lượng giác và giải tam giác · R02 biên tập



<!-- TOPIC_KNOWLEDGE_BEGIN -->
## 1. Kiến thức

Mạch tự học: **hình và góc** → giá trị lượng giác trên đường tròn → phép biến đổi → đồ thị → phương trình và ứng dụng. Trong mỗi mục, tự giải Vận dụng **trước** khi bấm Đối chiếu. Nếu sai, dùng D6 và làm bài canonical cùng outcome. Không cần rời hành trình Topic để đọc kiến thức bắt buộc.

### 1. Hình học và hệ thức lượng

#### 1.1. Đơn vị nửa đường tròn và góc đặc biệt G10


        **Vì sao cần học?** Khi quay một vật quanh tâm, tọa độ điểm cuối thay đổi theo góc. Trên nửa đường tròn đơn vị (0° đến 180°), điểm \(M=(\cos\alpha,\sin\alpha)\) nên **cos là hoành độ**, **sin là tung độ**; sin không âm, cos đổi dấu khi qua 90°. Đây là lý do bảng góc đặc biệt không chỉ là danh sách phải học thuộc.

        **Hình thành bản chất.** Dựng tam giác vuông với bán kính bằng 1 để suy ra ở 30°, 45°, 60° các giá trị 1/2, √2/2, √3/2. Góc \(120^\circ\) nằm phía trái trục Oy nên \(\cos120^\circ=-1/2\), còn \(\sin120^\circ=\sqrt3/2\). **Đọc hình:** hình đường tròn bên dưới có điểm 150° ở phía trên bên trái, hoành độ âm và tung độ dương. Không suy dấu từ giá trị tuyệt đối của góc tham chiếu.


> **ĐỊNH NGHĨA — Đơn vị nửa đường tròn và góc đặc biệt G10**
>
> Trên nửa đường tròn đơn vị, \(M=(\cos\alpha,\sin\alpha)\) và \(0^\circ\le\alpha\le180^\circ\).

        **Ví dụ có suy luận.** Nếu điểm M có \(\sin\alpha=1/2\) và \(\alpha\) là góc tù, \(\cos\alpha=-\sqrt3/2\) (không lấy căn dương vì hoành độ phía trái). Từ đó \(M=(-\sqrt3/2,1/2)\).

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B05-UNIT_SEMICIRCLE:** Hoành độ cos, tung độ sin của điểm M trên nửa đường tròn; cần đọc hình thay vì chỉ ghi nhớ góc.
        - **G10-B05-SPECIAL_ANGLES:** Tái dựng sin/cos góc 0,30,45,60,90,120,135,150,180 bằng góc tham chiếu và dấu.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M01-TRY01`):** Trên nửa đường tròn đơn vị, góc α=135°. Hãy xác định sinα, cosα và cho biết vì sao cos âm.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin135^\circ=\sqrt2/2\), \(\cos135^\circ=-\sqrt2/2\); điểm ở góc phần tư II, hoành độ âm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm vị trí, vẽ hai trục Ox/Oy và đánh dấu hình chiếu điểm M; xác định dấu trước khi thay số. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Hình đường tròn lượng giác 150°, sin dương cos âm](assets/Temp_TOPIC_TRIG_UNIT_CIRCLE_R00_20261112.svg)

**Cách đọc:** Điểm M(−√3/2,1/2) ở bên trái trục Oy và phía trên Ox; chính **tọa độ** giải thích dấu, không phải một mẹo học thuộc.

#### 1.2. Dấu, góc bù, miền xác định và hệ thức G10


        **Bản chất.** Mỗi điểm trên đường tròn đơn vị thỏa \(x^2+y^2=1\), nên \(\sin^2\alpha+\cos^2\alpha=1\). Với góc \(180^\circ-\alpha\), điểm đối xứng qua Oy nên sin giữ nguyên và cos đổi dấu. \(\tan\alpha=\sin\alpha/\cos\alpha\) chỉ khi cos khác 0; \(\cot\alpha=\cos\alpha/\sin\alpha\) chỉ khi sin khác 0. Không được viết công thức mà bỏ miền xác định.


> **CÔNG THỨC — Dấu, góc bù, miền xác định và hệ thức G10**
>
> \[\sin^2\alpha+\cos^2\alpha=1,\quad\tan\alpha=\sin\alpha/\cos\alpha\ (\cos\alpha\ne0),\quad\cot\alpha=\cos\alpha/\sin\alpha\ (\sin\alpha\ne0).\]

        **Ví dụ lựa chọn cách giải.** Với \(\alpha\) tù và \(\cos\alpha=-5/13\), tính \(\sin\alpha\) bằng hệ thức căn: \(\sin^2\alpha=1-25/169=144/169\), sin dương nên \(12/13\); từ đó tan = \(-12/5\). Nếu chỉ biết \(\cos^2\alpha\) mà không biết khoảng góc, dấu không xác định duy nhất.

        **Giới hạn.** \(\tan90^\circ\) không tồn tại, \(\cot0^\circ\) không tồn tại; không điền 0 như một đáp án mặc định.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B05-SIGN_DOMAIN:** Sin/cos dấu theo góc và miền; tan/cot phải xét mẫu cos/sin khác 0.
        - **G10-B05-SUPPLEMENTARY:** Hai góc bù có sin bằng nhau, cos đối nhau; hình học đối xứng qua Oy.
        - **G10-B05-IDENTITIES:** Từ sin²+cos²=1 suy giá trị còn thiếu nhưng phải chọn dấu theo phần tư.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M02-TRY01`):** Góc α tù có cosα=−8/17. Tìm sinα, tanα và nêu điều kiện dùng tan.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin\alpha=\sqrt{1-64/289}=15/17>0\); \(\tan\alpha=-15/8\); dùng được vì \(\cos\alpha\ne0\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu lấy dấu sai, vẽ góc phần tư II và kiểm kết quả bằng sin²+cos²=1; nếu có phân thức, xét mẫu trước. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 1.3. Định lý côsin, diện tích và góc kẹp


        **Vì sao cần học?** Đo được hai khoảng cách từ một điểm đến hai vật và góc giữa hai hướng nhìn, ta có thể tính khoảng cách giữa hai vật mà không cần đi tới đó. Định lý côsin mở rộng định lý Pythagoras: nếu \(b=CA,c=AB,A=\angle BAC\), thì \(a^2=b^2+c^2-2bc\cos A\). Khi \(A=90^\circ\), số hiệu chỉnh bằng 0.

        **Bản chất diện tích.** Chiều cao ứng với một cạnh là cạnh kề nhân \(\sin\) góc kẹp, do đó \(S=\frac12bc\sin A\). Chỉ dùng \(\sin A\) khi hai cạnh đang cho kẹp tại **A**; không chọn góc khác để dễ bấm máy.


> **ĐỊNH LÝ — Định lý côsin, diện tích và góc kẹp**
>
> \[a^2=b^2+c^2-2bc\cos A,\quad S=\frac12bc\sin A.\] Góc A kẹp đúng hai cạnh b,c.

        **Ví dụ có suy luận.** Với b=7,c=9,A=60°, định lý côsin cho \(a^2=49+81-2\cdot7\cdot9\cdot(1/2)=67\), \(a=\sqrt{67}\). Diện tích \(S=(1/2)\cdot7\cdot9\cdot\sin60^\circ=63\sqrt3/4\). Một dữ kiện (góc kẹp) cung cấp cả cạnh thứ ba lẫn diện tích.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B06-COSINE_RULE:** Biết hai cạnh và góc kẹp: sử dụng định lý côsin; góc nằm đối diện đúng cạnh.
        - **G10-B06-AREA_SIN:** Diện tích với hai cạnh phải dùng sin **góc xen giữa**; kết quả đơn vị diện tích.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M03-TRY01`):** Tam giác ABC có b=6,c=8,A=90°. Tính a và diện tích.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(a=\sqrt{36+64}=10\), \(S=\tfrac12\cdot6\cdot8\cdot1=24\) (đv²).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nhầm cạnh đối diện góc thì gắn a↔A, b↔B, c↔C lên hình; sai đơn vị diện tích thì kiểm bình phương đơn vị. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Tam giác vuông 3–4–5 và trường hợp riêng định lý côsin](assets/Temp_TOPIC_TRIG_COSINE_RULE_TRIANGLE_R00_20261112.svg)

**Cách đọc:** a=5 đối diện A=90°, b=4,c=3 kề góc A. (cos90^circ=0) làm định lý côsin rút về (5^2=4^2+3^2); diện tích (S=6) vuông đơn vị.

#### 1.4. Định lý sin, Heron và đo đạc thực tế


        **Vì sao cần học?** Có tình huống biết góc và một cạnh, và tình huống chỉ biết ba cạnh. Cần chọn **phương pháp theo dữ kiện**, không áp công thức theo thói quen.

        **Định lý sin.** Với tam giác không suy biến, \(a/\sin A=b/\sin B=c/\sin C=2R\). Nếu biết một cạnh đối diện một góc và thêm góc thứ hai, tính góc còn lại rồi dùng tỉ số sin để tìm cạnh. Nếu chỉ biết \(A,a,b\) (SSA), phương trình sin có thể cho **hai nghiệm góc**; cần kiểm tổng ba góc và hình học thật.

        **Heron và bán kính.** Ba cạnh dương phải thỏa bất đẳng thức tam giác. Đặt \(p=(a+b+c)/2\), \(S=\sqrt{p(p-a)(p-b)(p-c)}\), \(r=S/p\), \(R=abc/(4S)\). Ví dụ các cạnh 13,14,15 có p=21, \(S=\sqrt{21\cdot8\cdot7\cdot6}=84\), \(r=4\), \(R=13\cdot14\cdot15/(4\cdot84)=65/8\). Không tính r,R khi dữ kiện không tạo tam giác.

        **Đo đạc:** Vẽ tam giác A–B–C từ các vị trí khảo sát, ghi góc và đơn vị thực, sau đó mới suy độ dài từ định lý sin/côsin. Kết quả đo thực tế chịu sai số, không khẳng định chính xác vô hạn.


> **ĐỊNH LÝ — Định lý sin, Heron và đo đạc thực tế**
>
> \[a/\sin A=b/\sin B=c/\sin C=2R.\] Heron \(S=\sqrt{p(p-a)(p-b)(p-c)}\), \(p=(a+b+c)/2\), chỉ khi ba cạnh tạo tam giác.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B06-SINE_RULE:** Biết một cặp góc/cạnh đối diện cùng góc thứ hai: dùng định lý sin; cảnh giác trường hợp hai nghiệm SSA.
        - **G10-B06-HERON:** Ba cạnh phải thỏa bất đẳng thức tam giác trước khi dùng Heron; tìm r=S/p, R=abc/(4S).
        - **G10-B06-APPLICATION:** Vẽ mô hình đo đạc và kiểm đơn vị/độ chính xác; chọn luật sin hay côsin theo dữ kiện.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M04-TRY01`):** Tam giác ABC có A=30°, B=45°, a=6 cm. Tính góc C, cạnh b và bán kính ngoại tiếp R.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(C=105^\circ\); \(b=6\sin45^\circ/\sin30^\circ=6\sqrt2\) cm; \(2R=a/\sin A=12\) nên \(R=6\) cm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu sử dụng SSA, kiểm nghiệm góc tù có thể xảy ra; nếu dùng nhầm Heron cho dữ kiện góc, ưu tiên định lý sin. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 2. Góc lượng giác và công thức

#### 2.1. Góc có hướng, radian, chu kì và độ dài cung


        **Vì sao cần học?** Một bánh xe có thể quay hơn 360° hoặc quay ngược chiều kim đồng hồ. Góc lượng giác ghi cả hướng và số vòng, không chỉ tia cuối. \(180^\circ=\pi\) rad; đổi độ→rad bằng nhân \(\pi/180\). Hai góc có cùng tia cuối khi chênh \(2k\pi\) rad (\(k\in\mathbb Z\)), nhưng quãng chuyển động vẫn khác nhau.

        **Độ dài cung.** Nếu bán kính R>0 và vật thực sự quay góc \(\alpha\) rad, quãng đường dọc cung \(s=R|\alpha|\). **Không** dùng góc đã rút về một vòng nếu câu hỏi là tổng quãng đường nhiều vòng.


> **CÔNG THỨC — Góc có hướng, radian, chu kì và độ dài cung**
>
> \[180^\circ=\pi\mathrm{rad};\quad s=R|\alpha|\quad(R>0,\alpha\text{ rad}).\] Góc cùng tia cuối chênh \(2k\pi\); không dùng góc rút gọn để tính cả quãng nhiều vòng.

        **Ví dụ chọn cách.** Góc −450° tương ứng −5π/2 rad, tia cuối cùng hướng với 270° nhưng hành trình thực là quay âm 450°. Một bánh xe R=6 cm quay 5π/3 rad đi theo cung \(s=6\cdot5\pi/3=10\pi\) cm. Đổi chế độ rad trước khi dùng công thức cung.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B01-DEG_RAD:** Góc có hướng đổi độ–radian theo π/180, không đồng nhất số vòng quay với tia cuối.
        - **G11-B01-PERIODIC_REDUCTION:** Rút tia cuối góc modulo2π, vẫn giữ góc quay thật nếu tính quãng cung.
        - **G11-B01-ARC_LENGTH:** s=R|α| chỉ khi α theo radian, R>0; không thay góc đã rút nếu hỏi nhiều vòng.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M05-TRY01`):** Bánh xe R=2 cm quay dương 810°. Đổi góc sang rad, tìm tia cuối và độ dài quãng cung đã thực sự đi.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(810^\circ=9\pi/2\) rad; tia cuối như \(90^\circ\), hướng Oy dương. Quãng cung \(s=2\cdot9\pi/2=9\pi\) cm, không phải \(\pi\) cm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm góc đồng vị thành số vòng, phân biệt 'tia cuối' và 'đường đã đi'; kiểm Radian/Độ. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.2. Đường tròn lượng giác, góc liên quan và dấu


        **Bản chất.** Trên đường tròn lượng giác tâm O bán kính 1, điểm cuối của góc α có tọa độ \((\cos\alpha,\sin\alpha)\). Vì vậy tan/cot là tỉ số hoành-tung trên miền xác định, không phải tọa độ mới. Dấu hai tọa độ theo góc phần tư là chìa khóa rút căn và tính các góc liên quan.

        **Đối xứng trước công thức.** \(\sin(-\alpha)=-\sin\alpha\), \(\cos(-\alpha)=\cos\alpha\); \(\sin(\pi-\alpha)=\sin\alpha\), \(\cos(\pi-\alpha)=-\cos\alpha\), \(\sin(\pi+\alpha)=-\sin\alpha\). Từ đối xứng không tự suy tan/cot xác định ở mọi góc.


> **ĐỊNH NGHĨA — Đường tròn lượng giác, góc liên quan và dấu**
>
> \(\cos\alpha\) và \(\sin\alpha\) lần lượt là hoành/tung độ điểm trên đường tròn đơn vị; tan/cot chỉ tồn tại khi mẫu số khác 0.

        **Ví dụ đầy đủ.** \(\alpha=7\pi/6\) ở phần tư III, \(\sin\alpha=-1/2\), \(\cos\alpha=-\sqrt3/2\); \(\tan\alpha=1/\sqrt3\) vì cả tử và mẫu đều âm. Chọn phương pháp góc tham chiếu thay vì bấm máy rad rồi học kết quả.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B01-TRIG_UNIT_CIRCLE:** Điểm cuối trên đường tròn đầy đủ M=(cos,sin), xét bốn góc phần tư và miền tan/cot.
        - **G11-B01-TRIG_IDENTITIES:** Hệ thức sin²+cos²=1, 1+tan²=1/cos² chỉ trên miền cos≠0.
        - **G11-B01-RELATED_ANGLES:** Dấu sin/cos của −α, π−α, π+α từ đối xứng; tan/cot cần xét miền.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M06-TRY01`):** Góc α có sinα=−3/5 và cosα>0. Tính cosα, tanα và cos(π+α).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\cos\alpha=4/5\), \(\tan\alpha=-3/4\); \(\cos(\pi+\alpha)=-\cos\alpha=-4/5\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu căn âm sai, kiểm phần tư trước khi tìm căn; nếu tan/cot, kiểm mẫu khác 0. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.3. Công thức cộng, hiệu và góc nhân đôi


        **Vì sao cần học?** Giá trị lượng giác của một tổng góc không bằng tổng hai giá trị. Từ phép quay và phép chiếu, ta có \(\sin(u+v)=\sin u\cos v+\cos u\sin v\) và \(\cos(u+v)=\cos u\cos v-\sin u\sin v\). Đổi dấu v cho công thức hiệu; đặt u=v cho \(\sin2u=2\sin u\cos u\), \(\cos2u=\cos^2u-\sin^2u=2\cos^2u-1=1-2\sin^2u\).


> **CÔNG THỨC — Công thức cộng, hiệu và góc nhân đôi**
>
> \[\sin(a+b)=\sin a\cos b+\cos a\sin b;\quad\cos(a+b)=\cos a\cos b-\sin a\sin b.\] Nhân đôi suy từ hai góc bằng nhau.

        **Ví dụ suy luận.** \(\sin75^\circ=\sin(45^\circ+30^\circ)=(\sqrt6+\sqrt2)/4\). Dùng công thức cộng vì 75° không nằm bảng góc đặc biệt nhưng tách được thành 45+30. \(\cos120^\circ=\cos(2\cdot60^\circ)=2(1/2)^2-1=-1/2\). Công thức tan(u+v) chỉ được dùng khi \(\tan u,\tan v\) tồn tại và \(1-\tan u\tan v\ne0\).

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B02-SUM_DIFFERENCE:** Sin(u+v) không bằng sin u+sin v; áp dụng phép cộng/hiệu đúng dấu cos.
        - **G11-B02-DOUBLE_ANGLE:** Công thức 2u suy từ công thức cộng, chọn biểu diễn cos2u theo sin² hoặc cos² theo dữ kiện.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M07-TRY01`):** Tính sin(π/3+π/6) bằng công thức cộng và cos(2π/3) bằng công thức nhân đôi.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin(\pi/2)=1\) vì \(\sin\pi/3\cos\pi/6+\cos\pi/3\sin\pi/6=3/4+1/4\); \(\cos(2\pi/3)=2(1/2)^2-1=-1/2\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu biến sin(u+v) thành sin u+sin v, so với u=v=π/6 để thấy sai; kiểm dấu trừ trong cos cộng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.4. Tích thành tổng và tổng thành tích


        **Bản chất.** Cộng/trừ các công thức cos(u±v), sin(u±v) giúp biến tích thành tổng để tính giá trị hoặc biến tổng thành tích để phân tích nhân tử. Chẳng hạn \(2\sin u\sin v=\cos(u-v)-\cos(u+v)\) và \(\sin u-\sin v=2\cos\frac{u+v}{2}\sin\frac{u-v}{2}\).


> **PHƯƠNG PHÁP — Tích thành tổng và tổng thành tích**
>
> Đổi tích thành tổng hoặc tổng thành tích dựa vào cấu trúc, giữ điều kiện xác định nếu có mẫu số xuất hiện khi biến đổi.

        **Ví dụ lý do chọn.** Muốn tính \(2\sin75^\circ\sin15^\circ\), tích thành tổng cho \(\cos60^\circ-\cos90^\circ=1/2\), tránh nhân hai căn dài. Muốn giải phương trình ở bài sau, tổng thành tích có thể tạo phương trình tích bằng 0; không được áp khi chưa có đúng hai tổng sin/cos tương ứng.

        **Giới hạn.** Với công thức nửa tổng/nửa hiệu, chia cả hai góc cho 2 **sau** khi cộng/trừ, và giữ đơn vị cùng loại (độ hoặc rad).

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B02-PRODUCT_TO_SUM:** Dùng các tổ hợp cộng/trừ để chuyển tích thành tổng, đặc biệt 2sin u sin v.
        - **G11-B02-SUM_TO_PRODUCT:** Đổi tổng thành tích bằng nửa tổng/nửa hiệu; kiểm nhầm sin/cos và dấu.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M08-TRY01`):** Dùng tổng thành tích tính sin75°−sin15° mà không dùng máy.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(2\cos45^\circ\sin30^\circ=2(\sqrt2/2)(1/2)=\sqrt2/2\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu đổi tích/tổng sai chiều, viết công thức tổng quát rồi thay u,v; kiểm giá trị bằng tính gần đúng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 3. Hàm lượng giác và đồ thị

#### 3.1. Miền xác định và tính chẵn lẻ của hàm lượng giác


        **Vì sao cần học?** Một đường biểu diễn không thể có giá trị ở nơi hàm chưa được xác định. Sin/cos xác định với mọi số thực và nhận giá trị trong [−1,1], tan xác định khi cosx≠0, cot xác định khi sinx≠0. Đồ thị tan/cot có tiệm cận đứng ở các điểm mẫu bằng 0; không nối nét qua đó.

        **Tính chẵn lẻ.** Hàm f chẵn khi \(f(-x)=f(x)\), lẻ khi \(f(-x)=-f(x)\), đồng thời miền xác định đối xứng qua 0. Sin là hàm lẻ, cos là hàm chẵn, tan/cot là hàm lẻ trên miền tương ứng. Tổng của sin và cos nhìn chung không chẵn hay lẻ.


> **ĐỊNH NGHĨA — Miền xác định và tính chẵn lẻ của hàm lượng giác**
>
> \(\sin,\cos\) xác định trên R; tan loại \(\pi/2+k\pi\), cot loại \(k\pi\); sin lẻ, cos chẵn, tan/cot lẻ.

        **Ví dụ.** \(f(x)=\sin x+\cos x\) có f(0)=1 nên không lẻ, nhưng f(π/2)=1 khác f(−π/2)=−1 nên không chẵn. Đây là phản ví dụ cụ thể, không chỉ liệt kê loại hàm.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-DOMAIN_RANGE:** Định miền sin/cos (R) so với tan/cot (loại các điểm mẫu0), range sin/cos [−1,1].
        - **G11-B03-PARITY:** Chẵn/lẻ phải kiểm f(−x) với miền đối xứng; sin+cos không chẵn hoặc lẻ.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M09-TRY01`):** Hàm y=tan x có miền xác định nào? Hàm chẵn hay lẻ? Nêu một điểm không xác định.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(D=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}\); tan(−x)=−tanx nên lẻ; x=π/2 là điểm không xác định.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu quên loại mẫu bằng 0, vẽ đường tròn và xét cosx; kiểm miền đối xứng trước khi xét chẵn lẻ. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 3.2. Chu kì, đồ thị sin và cos


        **Bản chất.** Khi x tăng một vòng 2π, vị trí cuối trên đường tròn trở lại như cũ, nên sin và cos có chu kì cơ bản 2π. Biên độ của \(A\sin(\omega x+\phi)\) (với \(\omega\ne0\)) là |A|, chu kì dương nhỏ nhất \(T=2\pi/|\omega|\). Dấu A âm làm phản chiếu qua trục ngang; \(\phi\) gây dịch pha, không tự đổi chu kì.


> **TÍNH CHẤT — Chu kì, đồ thị sin và cos**
>
> Sin/cos có chu kỳ cơ bản \(2\pi\); trên một vòng sin đạt 1 ở \(\pi/2\), −1 ở \(3\pi/2\), bằng 0 ở \(0,\pi,2\pi\).

        **Ví dụ có suy luận.** \(y=3\sin2x\) có biên độ 3, chu kì π, cực đại tại x=π/4+kπ vì 2x=π/2+2kπ. Đường cos đồng dạng dịch pha π/2 so với sin: \(\cos x=\sin(x+\pi/2)\). **Đọc hình:** xem điểm 0,π/2,π,3π/2,2π trên đồ thị sin; các điểm cực trị và nghiệm là dữ liệu toán, không phải nét trang trí.

        **Giới hạn:** Không đọc trực tiếp giá trị của \(y=3\sin2x\) từ đồ thị sin chuẩn khi chưa điều chỉnh biên độ và trục ngang.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-PERIOD:** Chu kì dương nhỏ nhất của sin(ωx+φ) là 2π/|ω| khi ω≠0; tan/cot dùng π/|ω|.
        - **G11-B03-SIN_GRAPH:** Biên độ, pha, điểm cắt và cực trị đọc từ đồ thị sin chuẩn, có biến đổi tỉ lệ.
        - **G11-B03-COS_GRAPH:** Cos x=sin(x+π/2), đồ thị cos lệch pha; đừng nhầm dịch pha đổi chu kì.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M10-TRY01`):** Với y=−2sin(3x), tìm biên độ, chu kì dương nhỏ nhất và một cực tiểu trong [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Biên độ 2, chu kì \(2\pi/3\); tại \(x=\pi/6\), \(\sin3x=\sin\pi/2=1\), nên \(y=-2\) (cực tiểu).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm 2π/3 với 6π, giải điều kiện 3(x+T)=3x+2π; nếu nhầm dấu A, thử điểm có sin=1. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Đồ thị sin trên một chu kì](assets/Temp_TOPIC_TRIG_SIN_GRAPH_R00_20261112.svg)

**Cách đọc:** Trục x ghi 0,π/2,π,3π/2,2π. Sin đạt 1 ở π/2, −1 ở 3π/2, bằng 0 tại 0,π,2π. Chu kì là 2π; đồ thị tan/cot **không có** cùng tính liên tục/chu kì này.

#### 3.3. Đồ thị tan, cot và mô hình dao động


        **Đọc đồ thị tan/cot.** Tan có chu kì π, tăng trên từng khoảng \((-\pi/2+k\pi,\pi/2+k\pi)\), không xác định tại x=π/2+kπ. Cot có chu kì π, giảm trên từng khoảng \((k\pi,(k+1)\pi)\), không xác định tại x=kπ. Các tiệm cận đứng là giới hạn của giá trị hàm, không phải điểm thuộc đồ thị.


> **TÍNH CHẤT — Đồ thị tan, cot và mô hình dao động**
>
> Tan/cot có chu kỳ cơ bản \(\pi\) và tiệm cận đứng ở những giá trị mà mẫu số trong định nghĩa bằng 0.

        **Ví dụ có suy luận.** Trên \((-\pi/2,\pi/2)\), tan từ âm vô hạn qua (0,0) tới dương vô hạn; trên \((0,\pi)\), cot từ dương vô hạn qua (π/2,0) tới âm vô hạn. Mô hình \(h(t)=5+2\sin(\pi t/4)\) có đường trung bình 5, biên độ 2, chu kì \(8\); cực đại 7 tại t=2, cực tiểu 3 tại t=6 trong một chu kì. Mô hình chỉ mang ý nghĩa theo miền t và đơn vị bài toán khai báo.

        **Giới hạn:** Không đi qua đường tiệm cận hay lấy một chu kì cộng thêm kπ của tan để biến thành chu kì sin. Không gán phương trình mô hình như một dự báo chắc chắn ngoài khoảng dữ liệu.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-TAN_GRAPH:** Tan tăng trên từng nhánh, có các đường x=π/2+kπ bị loại; chu kì π.
        - **G11-B03-COT_GRAPH:** Cot giảm trên từng nhánh (kπ,(k+1)π) và không xác định tại kπ.
        - **G11-B03-MODELING:** Biên độ, đường trung bình, pha và chu kì của mô hình sóng chỉ có ý nghĩa trong miền thời gian/đơn vị đã cho.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M11-TRY01`):** Mực nước h(t)=5+2sin(πt/4) (m), 0≤t≤8 (giờ). Tìm mức lớn nhất/nhỏ nhất và thời điểm đạt đầu tiên.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Mức lớn nhất 7 m tại t=2 giờ; mức nhỏ nhất 3 m tại t=6 giờ. Chu kì 8 giờ.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm đường trung bình với biên độ, viết h=mid+A·sin; tìm thời điểm bằng góc đại diện, kiểm giới hạn t. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 4. Phương trình lượng giác

#### 4.1. Phương trình sin và cos cơ bản


        **Vì sao học?** Ta đã học giá trị của sin/cos khi biết góc; phương trình lượng giác đi theo chiều ngược: biết giá trị, tìm **tất cả** góc. Trên đường tròn, một giá trị sin trong (−1,1) thường ứng với hai tia cuối mỗi vòng; sinh họ nghiệm có bội \(2k\pi\), \(k\in\mathbb Z\).


> **CÔNG THỨC — Phương trình sin và cos cơ bản**
>
> \[\begin{aligned}\sin x=\sin a&\iff x=a+2k\pi\ \text{hoặc}\ x=\pi-a+2k\pi,\\ \cos x=\cos a&\iff x=\pm a+2k\pi,\end{aligned}\qquad k\in\mathbb Z.\]

        **Ví dụ có suy luận.** \(\sin x=1/2\) trên [0,2π) có nghiệm \(x=\pi/6,5\pi/6\); \(\cos x=-1/2\) cho \(x=2\pi/3,4\pi/3\). Để giải toàn trục, thêm \(2k\pi\) vào các nghiệm cơ bản. Với \(\cos(2x)=0\), phải giải theo đối số t=2x rồi **chia toàn bộ** họ nghiệm cho 2.

        **Giới hạn.** Nếu \(|a|>1\), phương trình \(\sin x=a\) hoặc \(\cos x=a\) vô nghiệm thực; không bấm arcsin rồi tạo nghiệm ảo.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-SIN_EQ:** Phương trình sin x=a có hai họ nghiệm trong trường hợp |a|<1; kiểm khoảng.
        - **G11-B04-COS_EQ:** Phương trình cos x=a nhìn theo hoành độ hai điểm trên đường tròn; có điều kiện |a|≤1.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M12-TRY01`):** Giải cos x=√2/2 trên [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(x=\pi/4\) hoặc \(x=7\pi/4\). Hai nghiệm thuộc phần tư I,IV.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu quên họ nghiệm đối xứng, đánh dấu hai điểm có cùng hoành/tung trên đường tròn, rồi lọc khoảng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 4.2. Phương trình tan, cot và biến đổi biểu thức


        **Bản chất.** Tan/cot có chu kì cơ bản π nên phương trình \(\tan x=a\) có họ \(x=\arctan a+k\pi\) khi xác định; \(\cot x=a\) cũng một nghiệm đại diện rồi cộng kπ, nhớ loại sin x=0. Khi đối số là 2x hoặc biểu thức tuyến tính khác, phải chia **toàn bộ phương trình** sau khi thêm kπ.


> **CÔNG THỨC — Phương trình tan, cot và biến đổi biểu thức**
>
> \[\tan x=\tan a\iff x=a+k\pi;\qquad\cot x=\cot a\iff x=a+k\pi,\qquad k\in\mathbb Z.\] **Điều kiện:** Giá trị \(\tan a\), \(\cot a\) và các nghiệm tương ứng phải thuộc miền xác định của hàm đang xét.

        **Ví dụ chọn phương pháp.** \(\tan(2x)=1\) → \(2x=\pi/4+k\pi\) → \(x=\pi/8+k\pi/2\). Trong [0,π), giữ x=π/8 và 5π/8. Nếu phương trình ban đầu chứa phân thức tan, điều kiện cos(2x)≠0 phải được kiểm (ở các nghiệm đúng).

        **Biến đổi.** Khi \(\sin x+\sin3x=0\), đổi tổng thành tích \(2\sin2x\cos x=0\). Nghiệm từ hai nhánh nhưng phải **hợp** lại loại trùng và kiểm miền xác định đề gốc.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-TAN_EQ:** Giải tan theo họ kπ, chỉ trong miền cosx≠0.
        - **G11-B04-COT_EQ:** Giải cot theo họ kπ, chỉ trong miền sinx≠0.
        - **G11-B04-TRANSFORM:** Đổi biểu thức bằng công thức lượng giác trước khi nhân/tách; ghi điều kiện mẫu gốc.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M13-TRY01`):** Giải cot x=√3 trên [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Cot dương với góc tham chiếu \(\pi/6\), họ \(x=\pi/6+k\pi\); trên [0,2π) có \(x=\pi/6,7\pi/6\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm chu kì 2π với π, so hai nghiệm trong một vòng; đừng bỏ điều kiện mẫu sinx≠0. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 4.3. Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng


        **Vì sao cần học?** Một họ nghiệm trên toàn trục không tự là danh sách nghiệm đúng trong một khoảng thời gian hoặc góc vật lý. Phải bắt đầu từ miền xác định, giải theo công thức, lọc nghiệm vào khoảng **đúng dấu ngoặc** và thử lại phương trình gốc.


> **GHI NHỚ — Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng**
>
> Nghiệm thu được sau chia/bình phương/thế biến cần thử lại trong phương trình gốc và miền xác định, không dùng nghiệm ngoại lai.

        **Ví dụ.** Với \(\sin x/(1+\cos x)=0\) trên [0,2π), điều kiện \(1+\cos x\ne0\) loại x=π; tử bằng 0 tại x=0,π nhưng chỉ x=0 hợp lệ. Một phép nhân chéo thiếu điều kiện sẽ tạo nghiệm ngoại lai. Với \(h(t)=2+\sin(\pi t/6)\) trên 0≤t≤12, cực đại 3 tại t=3, cực tiểu 1 tại t=9; hãy nêu đơn vị m/giờ và giới hạn mô hình.

        **Giới hạn:** Không tự bật AI Tutor/gợi ý/đúng-sai trong Final Submit của phần Tự kiểm tra. Bài Practice đã xem không được coi là đề held-out độc lập.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-INTERVAL:** Lọc k vào khoảng, giữ dấu ngoặc [) đúng; nghiệm biên được kiểm riêng.
        - **G11-B04-EXTRANEOUS:** Nghiệm tử bằng0 chưa đủ; phải kiểm mẫu và thế vào phương trình gốc.
        - **G11-B04-APPLICATION:** Mô hình sin/cos cho thời điểm/giá trị thực, nhưng không suy chính xác ngoài dữ kiện đầu vào.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M14-TRY01`):** Giải (2cos x−1)/sin x=0 trên [0,2π). Có nghiệm nào phải loại vì mẫu bằng 0?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Điều kiện \(\sin x\ne0\). Tử bằng 0 ⇒ \(\cos x=1/2\), cho \(x=\pi/3,5\pi/3\). Tại hai góc này sin khác 0, không loại nghiệm nào.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu bỏ qua nghiệm ở phần tư IV, vẽ đường tròn; nếu quên mẫu, lập điều kiện trước khi xử lý tử. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.



<!-- TOPIC_KNOWLEDGE_END -->

<!-- TOPIC_PRACTICE_BEGIN -->
## 2. Luyện tập

**Một thư viện canonical cho cả SGK/Topic:** Sổ nguồn `prototypes/thpt/shared-items/Temp_TOPIC_TRIG_G10_G11_CANONICAL_SOURCE_INDEX_R00_20261112.md` (blob `ab53adbb38f988e2478d98d4f888f2ba1b2d9e0e`) trỏ tới **64 bài gốc** đã review theo đúng hai snapshot; không tạo bản sao đề/key/rubric. File mới `prototypes/thpt/shared-items/Temp_TOPIC_TRIG_G10_G11_PUBLIC_EXTENSION_16ITEM_R00_20261112.md` (blob `526d98d427e165d86a8f21e3ed0701d2ed6d1094`) có **16 câu bổ sung đúng các outcome trước chỉ có một câu**, mỗi câu chỉ có một lời giải và rubric. Tổng **80 canonical public item IDs** cho 36 outcomes; sáu Written gốc/Anchor dùng chung.

| Chặng | Mô-đun | Luyện kỹ năng theo độ sâu |
|---|---|---|
| G10 · giá trị và tam giác | M01–M04 | Đọc dấu từ hình, chứng minh miền xác định, phân biệt định lý sin/côsin/Heron, đo đạc có đơn vị và góc |
| G11 · phép quay & công thức | M05–M08 | Radian và cung thực, công thức cộng/trừ, góc đôi, tích→tổng và tổng→tích |
| G11 · đồ thị | M09–M11 | Miền/xác định, chẵn lẻ, biên độ và pha, đường tiệm cận tan/cot, mô hình định kì |
| G11 · phương trình | M12–M14 | Tập nghiệm tổng quát, lọc vào khoảng, điều kiện mẫu và nghiệm ngoại lai, bài toán thời gian |

**Cách tự luyện:** Giải câu nguồn theo outcome, giải thích *vì sao chọn công cụ*, tự kiểm miền và đơn vị trước khi mở lời giải; nếu tự luận, chỉ đối chiếu với rubric thủ công đã kiểm, không tự chấm điểm mastery. Có thể trở về đúng mảng Kiến thức theo ID, nhưng không phải nhảy sang SGK để học phần bắt buộc.

<!-- TOPIC_PRACTICE_END -->

<!-- TOPIC_SELF_CHECK_BEGIN -->
## 3. Tự kiểm tra

**Chỉ là Tự kiểm tra công khai** `CLIENT_SELF_CHECK_NO_MASTERY`. Chọn 12 placement của các item public đã dùng ở Practice để tự đối chiếu; **không** phải held-out Topic Readiness. Học sinh chỉ được xem gợi ý, đáp án, đúng/sai hoặc AI Tutor **sau thao tác Final Submit cho toàn lượt** (phải được RELEASE chứng minh trong browser). Không ghi Skill Mastery từ Practice, giải thích AI hoặc phần tự luận tự chấm.

| Mảng | Public canonical ID dùng lại, không clone | Ôn khi sai |
|---|---|---|
| Góc nửa đường tròn / dấu | `THPT-G10-B05-P01` · `THPT-G10-B05-P02` | M01–M02 |
| Giải tam giác / đo đạc | `THPT-G10-B06-P01` · `THPT-G10-B06-P05` | M03–M04 |
| Radian / phép biến đổi | `THPT-G11-B01-P02` · `THPT-G11-B02-P04` · `THPT-G11-B02-P05` | M05–M08 |
| Đồ thị / mô hình | `THPT-G11-B03-P03` · `THPT-G11-B03-P06` | M09–M11 |
| Phương trình / điều kiện | `THPT-G11-B04-P06` · `THPT-G11-B04-P08` · `THPT-G11-B04-P09` | M12–M14 |

**Q16:** 12 câu public đã xem không trở thành chứng cứ đo năng lực độc lập. Không có private RD1 được đưa lên GitHub, JavaScript hoặc trong gói này; giữ nguyên 20 private RD1 Chương I lớp 11 ngoài phạm vi.

<!-- TOPIC_SELF_CHECK_END -->


### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 KNTT, Tập Một:** Bài 5 trang in 33–37; Bài 6 trang in 38–43.
- **SGK Toán 11 KNTT, Tập Một:** Bài 1 trang in 5–16; Bài 2 trang 17–21; Bài 3 trang 22–30; Bài 4 trang 31–39.
- **SBT tham khảo:** Toán 10 Tập Một B05 29–33/B06 34–39; Toán 11 Tập Một B01 4–7/B02 8–10/B03 11–18/B04 19–24.



<!-- END_EXACT_GITHUB_CONTENT_4 -->

---


# Source 5 of 5 — Vectơ–Tọa độ G10–G12 (FULL EXACT LEARNER CONTENT)

SOURCE_GIT_BLOB: da0436e99f5c4ff1e33bdb672f000502801a1820
SOURCE_REPOSITORY_PATH: prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_R06_NOTEBOOKLM_EXPLICIT_NORMAL_20261114.md
SOURCE_BRANCH: authoring/topic-vector-coordinate-scope-r00-20261108
SOURCE_PR: 793

<!-- BEGIN_EXACT_GITHUB_CONTENT_5 -->
# Vectơ và phương pháp tọa độ G10–G12 · biên tập R05



<!-- TOPIC_KNOWLEDGE_BEGIN -->
## 1. Kiến thức

Bạn sẽ đi từ mũi tên (vectơ) → phép toán → tọa độ Oxy → hình học phẳng → quan hệ không gian → tọa độ Oxyz → phương trình của các hình trong không gian. Mỗi phần có động cơ, kiến thức nền, ví dụ, tự thử và đường khắc phục; không có trang Core riêng.

### 1. Vectơ và tọa độ Oxy

#### 1.1. Vectơ: độ lớn, phương và hướng

        **Khám phá.** Hai người cùng đi 5 m nhưng theo hai hướng đối nhau: điều gì giống nhau và điều gì khác nhau? Tự vẽ mũi tên trước khi đọc tên gọi. **Điều cần nhận ra:** vectơ chứa cả độ lớn lẫn hướng, còn độ dài chỉ là số không âm.

**Giải thích kiến thức:**

        Hai người đi 5 m theo hai hướng ngược nhau: **quãng đường bằng nhau** nhưng độ dời không giống nhau. Ta cần một đối tượng chứa **độ lớn và hướng**. Vectơ `AB` biểu diễn một mũi tên từ A tới B; độ dài $|\overrightarrow{AB}|=AB$. Độ dài là số không âm, không phụ thuộc chiều mũi tên; đổi điểm đầu/cuối sẽ đổi vectơ nếu A khác B.

        **Trước khi có công thức:** Vẽ một mũi tên dài 3 ô sang phải, sau đó trượt nguyên mũi tên (không quay, không đổi tỉ lệ). Nó vẫn biểu diễn cùng một vectơ. Một mũi tên quay 180° có cùng độ dài nhưng không bằng vectơ ban đầu. Với các vectơ **khác không**, hai giá song song hoặc trùng nhau thì chúng cùng phương; hai vectơ cùng hướng **và cùng độ dài** mới bằng nhau. Cùng phương không suy cùng hướng, cùng độ dài không suy bằng nhau.

        **Trường hợp đặc biệt S1:** $\vec0=\overrightarrow{AA}$ có độ dài 0. **Theo quy ước KNTT, vectơ-không cùng phương và cùng hướng với mọi vectơ.** Vì mũi tên có độ dài 0 không có chiều nhìn thấy, cần phân biệt **quy ước toán trong SGK/SBT** với trực giác vật lý; tuyệt đối không dạy phủ định quy ước này. Mọi vectơ-không bằng nhau.

        **Ba điểm thẳng hàng và nằm giữa:** Với A,B,C đôi một phân biệt, A,B,C thẳng hàng ⇔ $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương (hai giá đều qua A). Với A,M,B phân biệt, M **nằm giữa** A,B ⇔ $\overrightarrow{MA}$ và $\overrightarrow{MB}$ ngược hướng. Chỉ biết $\overrightarrow{AB},\overrightarrow{AM}$ cùng hướng **chưa đủ** vì M có thể nằm quá B.
![Đọc hai vectơ MA và MB để xét M nằm giữa A B](Temp_TOPIC_VECTOR_PART1_BETWEENNESS_D5_R01.svg)

**Nhìn hình:** A–M–B có hai vectơ MA, MB ngược hướng; A–B–M có hai vectơ MA, MB cùng hướng về trái. Các điểm phân biệt; không suy độ dài theo tỷ lệ nét vẽ.

**Hướng dẫn đọc hình:** Đọc từ đuôi đến đầu mũi tên, rồi mới so sánh phương, hướng và độ dài. Trong hình bình hành ABCD, $\overrightarrow{AB}=\overrightarrow{DC}$ và $\overrightarrow{AD}=\overrightarrow{BC}$; trái lại $\overrightarrow{CD}$ ngược hướng $\overrightarrow{AB}$. Hãy tự vẽ A–M–B để nhìn hai vectơ $\overrightarrow{MA}$ và $\overrightarrow{MB}$ đi về hai phía.

        
> **ĐỊNH NGHĨA — Vectơ: độ lớn, phương và hướng**
>
> Vectơ \(\overrightarrow{AB}\) đi từ A đến B, có độ dài AB. Hai vectơ khác không bằng nhau khi cùng hướng và cùng độ dài. Vectơ-không dài 0, tuân thủ quy ước KNTT.

**Ví dụ có suy luận:** (1) Hai cạnh đối của hình bình hành: xét **cả** độ dài và hướng mới kết luận vectơ bằng nhau. (2) Hai vectơ $\overrightarrow{AA},\overrightarrow{BB}$ đều là $\vec0$, không thể xét theo chiều hình học nhìn thấy. (3) Tàu đi 6 km Đông, 8 km Bắc: quãng đường 14 km, độ dài độ dời 10 km; dùng Pythagore vì hai hướng vuông góc, không cộng 6+8 để tính độ dời.

        ### Vận dụng trước luyện tập

        1. Với hình bình hành ABCD, vectơ bằng $\overrightarrow{AB}$ là $\overrightarrow{DC}$ hay $\overrightarrow{CD}$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        DC, vì cùng hướng và độ dài; CD ngược hướng.

        </details>
        2. Cho A–B–M lần lượt trên một tia. AB và AM cùng hướng; M có nằm giữa A và B không?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        Không. M nằm sau B, nên tính cùng hướng chưa đủ.

        </details>
        3. Vectơ-không được quy ước thế nào theo KNTT?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        Cùng phương và cùng hướng với mọi vectơ; độ dài 0.

        </details>


#### 1.2. Cộng, trừ và nhân vectơ với số

        **Khám phá.** Đi 4 m về phía Đông rồi 3 m về phía Bắc. Hãy vẽ tuyến đường và mũi tên nối điểm đầu với điểm cuối. Vì sao độ dời không dài 7 m? **Điều cần nhận ra:** cộng vectơ là ghép các độ dời, không cộng máy móc độ dài.

**Giải thích kiến thức:**

        Đi 4 m Đông rồi 3 m Bắc: độ dời tổng là vectơ từ **điểm bắt đầu tới điểm kết thúc**, không phải phép cộng 4+3 về độ dài. Trước công thức, học sinh tự vẽ hai mũi tên đầu–đuôi. Với mọi A,B,C: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. Để cộng hai vectơ **cùng điểm đầu** A của hình bình hành ABCD, trượt một vectơ sang cạnh đối và lấy đường chéo: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. Hai quy tắc là hai cách đọc **cùng một phép cộng**, không là mẹo hình độc lập.

        Đi A→B rồi B→A cho tổng $\vec0$. Vectơ đối $-\overrightarrow{AB}=\overrightarrow{BA}$ và hiệu là $\vec a-\vec b=\vec a+(-\vec b)$. Ví dụ: $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$, **không phải BC**. Phép cộng giao hoán/kết hợp, phép trừ nói chung không giao hoán. Vectơ-không là phần tử trung hòa.

        M là trung điểm AB ⇔ $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$. Nếu M trung điểm BC và E tùy ý, $\overrightarrow{EB}+\overrightarrow{EC}=2\overrightarrow{EM}$ vì hai vectơ MB và MC triệt tiêu; không dùng công thức nếu M không phải trung điểm. Với trọng tâm G của tam giác ABC, $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$; điểm G không phải một điểm bất kỳ trên đường trung tuyến.

        **Nhân vectơ với số thực:** hình dung cùng một hướng đi gấp đôi khi k=2 và đi ngược khi k=-2. Với $\vec u\ne\vec0$, nếu k>0 thì $k\vec u$ cùng hướng, k<0 thì ngược hướng; $|k\vec u|=|k||\vec u|$ cho mọi k và mọi vectơ. Nếu k=0 hoặc $\vec u=\vec0$ thì tích bằng $\vec0$, không gán dấu chiều vật lý cho vectơ-không. Tính chất phân phối $k(\vec u+\vec v)=k\vec u+k\vec v$, $(k+m)\vec u=k\vec u+m\vec u$; luật kết hợp $k(m\vec u)=(km)\vec u$; số $t\ne0$ là tỉ số khi hai vectơ **đều khác 0** cùng phương: $\vec v=t\vec u$. Không chia cho 0.

        **Trung điểm/trọng tâm dùng nhân số:** $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$; $\overrightarrow{AG}=\tfrac23\overrightarrow{AM}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})$ với M trung điểm BC, G trọng tâm tam giác ABC. Hệ số 1/3 xuất phát từ $2/3$ × $1/2$, không là công thức phải nhớ vô cớ.

        ### Vì sao chọn các cách giải sau?

        - `EX-G10-B08-01`: AB+BC+CD → AD; dùng chuỗi đầu–đuôi, kiểm chiều.
        - `EX-G10-B08-02`: AB+AD = AC trong hình bình hành, AC−AB = AD; chọn đường chéo vì hai vectơ chung gốc.
        - `EX-G10-B08-03`: M trung điểm BC ⇒ MB+MC=0; G trọng tâm ⇒ GA+GB+GC=0; không gọi một điểm bất kỳ là trọng tâm.
        - `EX-G10-B09-01`: $\vec v=-3\vec u$ với $|\vec u|=5$ cm ⇒ $|\vec v|=15$ cm và ngược hướng; độ dài không âm.
        - `EX-G10-B09-02`: M trung điểm AB=12 cm, AM/MB cùng hướng AB và đều bằng $\tfrac12 AB$ theo vectơ; MA ngược chiều.
        - `EX-G10-B09-03`: quan hệ G trọng tâm ⇒ AG = (AB+AC)/3 bằng vectơ; giải qua trung tuyến trước.
![Quy tắc tam giác AB cộng BC bằng AC và quy tắc hình bình hành AB cộng AD bằng AC](assets/Temp_TOPIC_VEC_R05_TRIANGLE_PARALLELOGRAM_20261114.svg)

**Đọc hình 1.2:** Bảng trái nối **đầu B của AB** với điểm đầu của BC để được AC. Bảng phải các vectơ AB, AD cùng gốc A và đường chéo AC là tổng; nét đứt chỉ là cạnh hoàn thiện hình bình hành. Không lấy độ dài hai cạnh cộng thành độ dài đường chéo.

**Cách đọc hình:** Ở quy tắc tam giác, nối mũi tên theo kiểu đầu–đuôi; ở hình bình hành, tìm đường chéo xuất phát từ cùng gốc. Khi nhân vectơ với số âm, mũi tên đảo hướng, không đổi quy tắc tính độ dài bằng giá trị tuyệt đối.

        ### Vận dụng trước luyện tập

        1. Với A–B–C, kết quả AB+BC là AC hay CA?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        AC; học sinh tự nối hai mũi tên trước, dùng `THPT-G10-B08-C01`.

        </details>
        2. Cho $\vec u\ne0$, độ dài $|\vec u|=4$ cm; $\vec v=-2\vec u$.

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        8 cm và ngược hướng (`THPT-G10-B09-C01`). Không áp “âm” vào độ dài.

        </details>



> **TÍNH CHẤT — Cộng, trừ và nhân vectơ với số**
>
> \[\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC},\quad\vec u-\vec v=\vec u+(-\vec v),\quad |k\vec u|=|k||\vec u|.\] Phải giữ đúng chiều mũi tên.

#### 1.3. Tọa độ và tích vô hướng trên Oxy

        **Khám phá.** Trên lưới tọa độ, A(−2;3) và B(4;−1). Từ A tới B phải dịch bao nhiêu ô theo mỗi trục? Hãy dự đoán rồi tự kiểm bằng $\overrightarrow{AB}=(6;−4)$. **Điều cần nhận ra:** tọa độ vectơ là độ biến thiên, không phải vị trí riêng của B.


**Giải thích kiến thức:**

        **Vì sao cần học?** Mô tả "mũi tên về bên phải và lên trên" giúp nhìn hình, nhưng không tiện để tính toán. Với trục Oxy có hai vectơ đơn vị vuông góc $\vec i=(1,0),\vec j=(0,1)$, ta biểu diễn duy nhất $\vec u=x\vec i+y\vec j$, ký hiệu $\vec u=(x;y)$. Điều này không phải bản chất khác của vectơ: **tọa độ là cách ghi độ dịch chuyển theo hai phương cố định**.

        **Tiền đề:** Hiểu hướng, độ dài, phép cộng và nhân số (Phần 1–2), hệ trục vuông góc, Pythagore; nếu chưa phân biệt điểm và vectơ, xem ví dụ đầu tiên. Điểm $A(x_A;y_A)$ chỉ *vị trí*, còn vectơ $\overrightarrow{AB}$ chỉ *độ dời* từ A đến B.

        **Tại sao lấy cuối trừ đầu?** Từ A tới B, hoành độ đổi $x_B-x_A$ và tung độ đổi $y_B-y_A$, nên $\overrightarrow{AB}=(x_B-x_A;y_B-y_A)$. Ví dụ A(-2;3), B(4;-1) thì $\overrightarrow{AB}=(6;-4)$, đảo BA được (-6;4). Không lấy tọa độ B làm tọa độ AB trừ khi A=O.

        **Phép toán được suy ra từ dịch chuyển:** $(a;b)+(c;d)=(a+c;b+d)$, $(a;b)-(c;d)=(a-c;b-d)$, $k(a;b)=(ka;kb)$. Tính chất cùng phương: khi $\vec u,\vec v$ khác 0, tồn tại t≠0 thỏa $\vec v=t\vec u$. Điều kiện định thức $a d-b c=0$ với $\vec u=(a;b),\vec v=(c;d)$ là tiêu chuẩn cùng phương, kể cả khi có thành phần 0 (được diễn giải đúng trường hợp vectơ-không riêng theo quy ước KNTT).

        **Độ dài từ Pythagore:** $|\vec u|=\sqrt{x^2+y^2}$ và $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. Hai điểm A,B có trung điểm $M((x_A+x_B)/2;(y_A+y_B)/2)$. Trọng tâm tam giác ABC có tọa độ trung bình ba tọa độ đỉnh theo từng thành phần. Những công thức này có cơ sở là **cân bằng vị trí** chứ không cộng độ dài.

        **Vì sao tích vô hướng đo được góc?** Hình chiếu có hướng của $\vec v$ lên phương $\vec u$ bằng $|\vec v|\cos\theta$. Nhân với $|\vec u|$ cho $\vec u\cdot\vec v=|\vec u||\vec v|\cos\theta$. Khi biểu diễn trên hai trục vuông góc, cùng đại lượng bằng $ac+bd$. Như vậy tích vô hướng nối góc với tính toán:

        $$\vec u\cdot\vec v=ac+bd,\quad \cos\theta=\frac{\vec u\cdot\vec v}{|\vec u||\vec v|},\qquad \vec u,\vec v\ne\vec0.$$

        **Điều kiện và dấu:** Nếu tích vô hướng dương thì góc nhọn, bằng 0 thì vuông góc (với **cả hai vectơ khác 0**), âm thì góc tù. Góc không xác định khi một vectơ bằng 0; đừng thay tích vô hướng bằng tích hai độ dài. Trong bài thực tế, công của lực không đổi $W=\vec F\cdot\vec s$ và có thể âm, còn độ lớn mỗi vectơ không âm.
![Trong Oxy, từ A âm hai ba đến B bốn âm một có vectơ AB bằng sáu âm bốn; hai vectơ tạo góc tù có tích vô hướng âm](assets/Temp_TOPIC_VEC_R05_OXY_COMPONENT_DOT_20261114.svg)

**Đọc hình 1.3:** A(−2;3) đến B(4;−1) cho thành phần \(\Delta x=6\), \(\Delta y=-4\), nên \(\overrightarrow{AB}=(6;-4)\). Hình bên phải có \(\theta\) tù, \(\cos\theta<0\), tích vô hướng của hai vectơ khác không âm; không suy dấu từ chiều dài mũi tên.

**Cách đọc hình:** Trên mặt phẳng tọa độ, đi theo hướng x rồi y; mũi tên từ A đến B mang độ dời theo mỗi trục. Khi hai vectơ tạo góc tù, hãy liên hệ dấu âm của tích vô hướng với $\cos\theta<0$, không chỉ đo góc bằng mắt.

        
> **CÔNG THỨC — Tọa độ và tích vô hướng trên Oxy**
>
> Oxy: \(\overrightarrow{AB}=(x_B-x_A;y_B-y_A)\) và \(\vec u\cdot\vec v=u_1v_1+u_2v_2\); tính góc cần hai vectơ khác không.

### Ví dụ: chọn đúng phương pháp

        1. **Từ điểm sang vectơ.** A(-1;2), B(3;-4): $\overrightarrow{AB}=(4;-6)$. Chọn "cuối trừ đầu" vì câu hỏi là độ dời, không phải tọa độ của B; kiểm lại bằng $A+AB=B$ theo từng thành phần.
        2. **Độ dài và cùng phương.** $\vec u=(3;-4)$ có độ dài 5; $\vec v=(-6;8)=-2\vec u$ nên cùng phương, ngược hướng, độ dài 10. Không lấy tỉ số thành phần nếu mẫu 0.
        3. **Trọng tâm.** Với A(0;0), B(6;0), C(0;9), $G=(2;3)$. Có thể xác minh G nằm trên trung tuyến từ A tới M(3;4,5) và AG=(2/3)AM.
        4. **Vuông góc bằng tích vô hướng.** $\vec u=(3;2)$, $\vec v=(2;-3)$ ⇒ tích $6-6=0$, hai vectơ đều khác 0 ⇒ vuông góc. Không kết luận "góc 90°" với vectơ-không.
        5. **Chọn công thức góc.** $\vec u=(1;0)$, $\vec v=(1;1)$ ⇒ tích 1; độ dài lần lượt 1, $\sqrt2$, nên $\cos\theta=1/\sqrt2$ ⇒ $\theta=45°$. Không lấy cos bằng 1 khi hai vectơ có độ dài khác nhau.
        6. **Bài toán lực.** $\vec F=(4;3)$ N, độ dời $\vec s=(2;-1)$ m ⇒ $W=\vec F\cdot\vec s=8-3=5$ J. Chọn tích vô hướng vì hỏi thành phần lực theo hướng dịch chuyển, không hỏi độ lớn lực tổng hợp.

        ### Hai Vận dụng trước luyện tập (tự mở sau khi làm)

        - **Vận dụng 3A:** A(2;-3), B(-1;1), AB bằng (-3;4) hay (1;-2)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (-3;4), vì cuối trừ đầu; nếu sai, vẽ hai bước ngang/dọc, thử lại.

        </details>
        - **Vận dụng 3B:** $\vec u=(2;1)$, $\vec v=(1;-2)$, tích vô hướng bằng 0 hay 4?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        $2\cdot1+1\cdot(-2)=0$; cả hai vectơ khác 0 nên vuông góc.

        </details>


### 2. Hình học phẳng và không gian

#### 2.1. Đường thẳng, đường tròn và conic

        **Khám phá.** Một điểm có tọa độ (x;y). Làm sao biết nó có nằm trên con đường thẳng hoặc đường tròn đã cho? Hãy thử thay tọa độ vào phương trình. **Điều cần nhận ra:** phương trình mô tả tập hợp điểm thỏa điều kiện hình học, không phải chỉ là biểu thức để tính.


**Giải thích kiến thức:**

        **Tại sao phải học?** Trên bản đồ, tọa độ điểm cho biết vị trí nhưng chưa nói tất cả vị trí thuộc con đường hay đường tròn. Ta cần **phương trình mô tả tập hợp điểm**. Một phương trình không chỉ là phép tính: nó là điều kiện một điểm phải thỏa để nằm trên đường/hình. Học sinh đã biết vectơ pháp tuyến/chỉ phương và khoảng cách, vì thế có thể giải thích **trước** khi ghi công thức.

        ### Đường thẳng: từ pháp tuyến tới phương trình

        Với đường d qua $M_0(x_0;y_0)$, vectơ pháp tuyến $\vec n=(a;b)\ne\vec0$, điểm M(x;y) thuộc d khi $\vec n\cdot\overrightarrow{M_0M}=0$. Suy ra $a(x-x_0)+b(y-y_0)=0$, hay $ax+by+c=0$ với $(a,b)\ne(0,0)$. Vectơ chỉ phương có thể lấy $\vec u=(-b;a)$; tham số: $(x,y)=(x_0,y_0)+t(u_1,u_2)$. Không dùng hai số a=b=0 để gọi đó là đường thẳng.

        **Quan hệ và khoảng cách:** Hai đường thẳng có pháp tuyến cùng phương thì song song hoặc trùng nhau; cần kiểm thêm hằng số. Góc giữa hai đường được xét qua hai vectơ chỉ phương hoặc pháp tuyến. Khoảng cách từ A(x_A;y_A) tới d là $d(A,d)=|ax_A+by_A+c|/\sqrt{a^2+b^2}$. **Vì sao trị tuyệt đối?** Khoảng cách là độ dài không âm; tử là biểu thức định hướng. Nếu không có mẫu khác 0 (a=b=0), "công thức khoảng cách" không có nghĩa.

        ### Đường tròn: từ khoảng cách cố định tới tập hợp điểm

        Một điểm M thuộc đường tròn tâm I(a;b), bán kính R>0 khi $IM=R$. Bình phương khoảng cách tạo $(x-a)^2+(y-b)^2=R^2$. Nếu khai triển thành $x^2+y^2+Dx+Ey+F=0$, cần điều kiện $R^2=(D^2+E^2)/4-F>0$ mới là đường tròn thật (R=0 chỉ còn điểm, R²<0 vô nghiệm thực). Tiếp tuyến tại điểm T trên đường tròn vuông góc bán kính IT; không đoán từ nét tiếp xúc của hình vẽ.

        ### Ba đường conic: cùng là quỹ tích nhưng định nghĩa khác nhau

        - **Ellipse** chuẩn $x^2/a^2+y^2/b^2=1$, a>b>0. Hai tiêu điểm F1, F2 tại $(\pm c,0)$ với $c^2=a^2-b^2$. Bản chất: tổng khoảng cách tới hai tiêu điểm bằng $2a$. Không hoán đổi a,b mà vẫn giữ tên trục lớn Ox.
        - **Hyperbola** chuẩn $x^2/a^2-y^2/b^2=1$, a,b>0, $c^2=a^2+b^2$. Bản chất: **giá trị tuyệt đối của hiệu** hai khoảng cách tới tiêu điểm bằng $2a$. Không thay dấu trừ bằng dấu cộng.
        - **Parabola** chuẩn $y^2=2px$, p>0. Tiêu điểm $F(p/2;0)$, đường chuẩn $x=-p/2$; mỗi M trên parabol cách đều F và đường chuẩn. Đừng nhầm p với hoành độ tiêu điểm.

        **Ranh giới:** Các đường conic học ở đây là dạng chính tắc với trục song song hệ trục và tham số thỏa điều kiện; không suy rằng mọi phương trình bậc hai hai ẩn đều là ellipse, hyperbola hoặc parabola. Bài toán thực tế phải kiểm ý nghĩa vật lý, miền chấp nhận và đơn vị.
![Ba hình phẳng: đường thẳng có vectơ pháp tuyến, đường tròn tâm I bán kính R và parabol có trục đối xứng](assets/Temp_TOPIC_VEC_R05_LINE_CIRCLE_PARABOLA_20261114.svg)

**Đọc hình 2.1:** Ô trái là đường thẳng có pháp tuyến \(\vec n\) vuông góc d; ô giữa là tập điểm cách tâm I khoảng R dương; ô phải là parabol có đỉnh và trục đối xứng. Ba ô minh họa **ba kiểu quỹ tích**, không thay việc kiểm phương trình và điều kiện riêng của từng hình.

**Cách đọc hình:** Với đường thẳng, tìm vectơ pháp tuyến và mối liên hệ vuông góc. Với đường tròn, đánh dấu tâm rồi so bán kính; với conic, nhận tiêu điểm, đỉnh, trục đối xứng và dấu trong phương trình. Đừng dùng tỷ lệ nét vẽ thay điều kiện hình học.

        ### Sáu ví dụ có lựa chọn phương pháp và giới hạn

        1. Qua A(1;2), B(3;6), ta cần đường thẳng từ **hai điểm**. Vectơ chỉ phương AB=(2;4), chọn pháp tuyến (2;-1) ⇒ $2(x-1)-(y-2)=0$ ⇒ $2x-y=0$. Kiểm cả A,B thỏa.
        2. Qua M(1;-2) và pháp tuyến n=(2;-3), dùng tích vô hướng pháp tuyến ⇒ $2(x-1)-3(y+2)=0$, hay $2x-3y-8=0$. **Không** viết $2x-3y+8$ khi chưa thế điểm kiểm.
        3. Khoảng cách P(1;2) đến $3x+4y-10=0$ bằng $|3+8-10|/5=1/5$; chọn công thức pháp tuyến vì cần đoạn vuông góc ngắn nhất.
        4. Đường tròn tâm I(-2;3), R=4 có $(x+2)^2+(y-3)^2=16$. Nếu hỏi tiếp tuyến tại T, phải biết T thuộc đường tròn rồi dùng IT là pháp tuyến.
        5. Ellipse $x^2/9+y^2/4=1$: a=3,b=2,c=$\sqrt5$, F1/F2=(±√5;0), tổng khoảng cách luôn 6. Đây là **định nghĩa quỹ tích**, không chỉ đọc phương trình.
        6. Parabol $y^2=8x$: $2p=8$ nên p=4, F(2;0), đường chuẩn x=-2. Kiểm M(2;4): khoảng cách MF=4, tới đường chuẩn cũng 4; không lấy F=(4;0).

        ### Hai Vận dụng trước Luyện tập

        1. Đường thẳng qua M(1;2), pháp tuyến (3;1): $3x+y-5=0$ hay $3x+y+5=0$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        dấu −5 vì thế (1,2) phải được 0.

        </details>
        2. $y^2=6x$ thì tiêu điểm nằm ở (3;0) hay (1,5;0)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        p=3, F=(1,5;0), đường chuẩn x=-1,5. Nếu sai, xem lại hệ số 2p.

        </details>



> **CÔNG THỨC — Đường thẳng, đường tròn và conic**
>
> Đường thẳng có **vectơ pháp tuyến** \(\vec n=(a;b)\ne\vec0\), tức \(a^2+b^2\ne0\), được viết \(ax+by+c=0\). Đường tròn tâm \(I(a;b)\), bán kính \(R>0\): \[(x-a)^2+(y-b)^2=R^2.\] Các conic khác cần kiểm định nghĩa quỹ tích và điều kiện riêng.

#### 2.2. Quan hệ hình học trong không gian

        **Khám phá.** Hai cạnh vẽ trên tờ giấy có vẻ không cắt nhau; liệu trong không gian chúng có thể chéo nhau? Hãy hình dung một hình tứ diện và xét khả năng đồng phẳng trước khi kết luận. **Điều cần nhận ra:** hình chiếu trên giấy không tự chứng minh quan hệ không gian.


**Giải thích kiến thức:**

        Một bản vẽ phẳng có thể làm hai thanh của một cây cầu trông như giao nhau, nhưng ngoài đời chúng nằm ở hai độ sâu khác nhau. Vì vậy để mô tả **đường thẳng, mặt phẳng, góc, khoảng cách trong không gian**, phải phân biệt điều suy được từ giả thiết và điều chỉ là cảm giác do phối cảnh. Vectơ/tọa độ ở phần 6–7 chỉ hữu ích khi ta hiểu đúng hình học cần biểu diễn.

        **Tiền đề:** Đã biết đường thẳng, mặt phẳng hình dung được, song song/vuông góc trong mặt phẳng, vectơ khác không, góc giữa hai vectơ. Khi vẽ, dùng nét liền cho cạnh nhìn thấy, nét đứt cho cạnh khuất; **nét đứt không phải chứng cứ** của quan hệ vuông góc hay giao nhau.

        ### 1. Đường thẳng và mặt phẳng: có nhiều khả năng không giống hình phẳng

        Hai đường phân biệt trong không gian: **cắt nhau**, **song song** (đồng phẳng, không có điểm chung), hoặc **chéo nhau** (không đồng phẳng, không cắt). Một đường so với một mặt phẳng: nằm trong, cắt tại một điểm, hoặc song song (không có điểm chung). Hai mặt phẳng phân biệt: cắt theo đường thẳng hoặc song song. Khi chứng minh quan hệ, phải nêu giả thiết đồng phẳng/không nằm trong trước khi dùng các dấu hiệu quen thuộc.

        
> **TÍNH CHẤT — Quan hệ hình học trong không gian**
>
> Trong không gian, hai đường không giao nhau có thể chéo nhau. Để d vuông góc mặt phẳng (P), có thể chứng minh d vuông góc hai đường cắt nhau trong (P). Phối cảnh không chứng minh hình học.

**Ví dụ cơ sở:** Trong tứ diện ABCD, AB và CD là **chéo nhau**, vì nếu đồng phẳng thì toàn bộ A,B,C,D đồng phẳng, trái giả thiết tứ diện. Không được kết luận chúng song song chỉ vì nét vẽ không giao.

        ### 2. Góc giữa hai đường (có thể chéo nhau)

        Qua một điểm O chọn các đường song song với hai đường đang xét, rồi đo **góc nhỏ** giữa chúng (từ 0° đến 90°). Hai đường có phương vuông góc vẫn được gọi là vuông góc dù **không giao nhau**; phải phân biệt "vuông góc theo phương" với "cắt nhau tại góc vuông". Thay bằng đường song song giữ phương nên góc không đổi. Chọn góc lớn 120° giữa hai vectơ đối hướng rồi ghi góc đường–đường 120° là sai quy ước này.

        ### 3. Vuông góc đường–mặt phẳng: vì sao chỉ một đường là chưa đủ?

        Đường d vuông góc mặt phẳng (P) khi phương của d vuông góc **mọi đường trong (P)**. Dấu hiệu thực hành quan trọng: nếu d vuông góc **hai đường cắt nhau** a,b cùng nằm trong (P), thì d vuông góc (P). Chỉ biết d vuông góc **một** đường thuộc (P) không đủ: d có thể nằm ngay trong (P) nhưng vuông góc với đường ấy. Với hình chóp S.ABC có SA⊥(ABC), SA vuông góc AB, AC, BC (mọi đường trong đáy).

        ### 4. Hình chiếu vuông góc và góc đường–mặt

        Từ điểm A, hạ AH⊥(P); H là hình chiếu, $d(A,(P))=AH$ là đoạn ngắn nhất từ A tới (P). Nếu AB là đoạn xiên và H là hình chiếu của B lên (P), A thuộc (P), hình chiếu AB trên (P) là AH (trừ trường hợp H=A). Góc giữa AB và (P) là góc nhọn hoặc vuông giữa AB và hình chiếu AH: $\sin\alpha=BH/AB$ trong tam giác vuông ABH. Khi AB nằm trong (P), góc 0°; khi AB⊥(P), góc 90° và hình chiếu là một điểm — không dùng đoạn AH=0 làm đường thẳng để đo góc.

        **Định lí ba đường vuông góc:** Quan hệ giữa một đường trong mặt phẳng với hình chiếu vuông góc của một đường xiên có thể dùng để suy vuông góc; phải dựng và nêu **đúng đường chiếu** trước khi áp dụng, không lấy hình chiếu xiên tuỳ tiện.

        ### 5. Hai mặt phẳng và góc nhị diện

        Hai mặt phẳng có thể vuông góc: có một đường nằm trong mặt thứ nhất và vuông góc với mặt thứ hai là dấu hiệu. **Góc giữa hai mặt phẳng** theo quy ước nằm trong [0°,90°], còn **góc nhị diện có hướng chọn hai nửa mặt phẳng** có thể nằm trong [0°,180°]. Muốn đọc góc giữa hai mặt, chọn một thiết diện **vuông góc giao tuyến** và đo góc phù hợp; hình vẽ nghiêng dễ đánh lừa. Không đo đại góc giữa hai nét trên phối cảnh.

        ### 6. Khoảng cách không gian: luôn hỏi đoạn nào vuông góc?

        - Điểm → đường/mặt: đo đoạn vuông góc ngắn nhất, bằng 0 nếu điểm nằm trên đối tượng.
        - Đường song song mặt phẳng: khoảng cách từ **một điểm bất kỳ trên đường** đến mặt, không phải đoạn nối xiên bất kỳ.
        - Hai mặt phẳng song song: khoảng cách giữa hai điểm chiếu theo phương vuông góc chung.
        - Hai đường chéo nhau: khoảng cách bằng **độ dài đoạn vuông góc chung** nối hai đường (khi tồn tại, là duy nhất); không lấy một cạnh bất kỳ làm khoảng cách nếu chưa chứng minh vuông góc với cả hai.
        - Chiều cao lăng trụ/chóp là khoảng cách vuông góc giữa đáy và đỉnh/mặt đáy, không nhất thiết là cạnh bên xiên. Đây là cầu nối với bài toán thể tích, **không** lập phần thể tích riêng vượt trục của Chuyên đề.
![Đường d vuông góc với hai đường cắt nhau a b trong mặt phẳng P, suy ra d vuông góc mặt phẳng P](assets/Temp_TOPIC_VEC_R05_PLANE_PERP_PROJECTION_20261114.svg)

**Đọc hình 2.2:** Hai đường a,b cùng trong mặt phẳng (P) cắt nhau tại H; theo **giả thiết d vuông góc a và d vuông góc b**, suy ra \(d\perp(P)\). Hình vẽ phối cảnh không tự chứng minh hai góc vuông. Muốn phân tích tứ diện/hình chóp khác, em **tự vẽ hình theo giả thiết**, không suy từ sơ đồ này.

**Cách đọc hình không gian:** Nhận các đỉnh tứ diện, đường cao của hình chóp, các cạnh khuất của hình hộp, chân đường vuông góc từ điểm đến mặt. Nét đứt chỉ là cách vẽ vật thể, không đủ để suy ra song song, vuông góc hoặc khoảng cách.

        ### Sáu ví dụ có giải thích chọn phương pháp

        1. Trong tứ diện ABCD, AB và CD là hai đường **chéo nhau**. Chọn chứng minh không đồng phẳng thay vì dựa vào hai nét trên giấy; nếu chúng cùng nằm một mặt thì bốn đỉnh đồng phẳng, mâu thuẫn.
        2. Cho d⊥a, d⊥b, a,b **cắt nhau** và nằm trong (P). Suy ra d⊥(P). Nếu a,b song song không đủ như một dấu hiệu độc lập; cần kiểm điều kiện cắt nhau.
        3. Chóp S.ABC có SA⊥(ABC). Với H nằm trong đáy, SA⊥AH và SA⊥BC. Độ cao từ S tới đáy là SA; không lấy SB nếu SB xiên.
        4. Tam giác vuông ABH với AH nằm trong (P), BH⊥(P), AB=10, BH=6. Góc giữa AB và (P) là $\arcsin(6/10)\approx36,87°$, vì sin đo phần vuông góc; không lấy cos=6/10 khi đó là cạnh đối.
        5. Trong hình hộp chữ nhật có cạnh ba phương dài (a,b,c), AB dọc phương x và CC' dọc z, chúng **chéo nhau** và có góc giữa phương là 90°. Khoảng cách là BC=b vì BC vuông góc cả AB và CC' và nối B thuộc AB đến C thuộc CC'. Không lầm “vuông góc ⇒ cắt nhau”.
        6. Một cột dựng thẳng trên sàn: chỉ kiểm cột vuông góc với một đường kẻ trên sàn là chưa đủ; phải xác nhận hai phương cắt nhau độc lập trên mặt sàn. Đây là lý do tiêu chí hai đường cắt nhau có ích thực tế.

        ### Hai Vận dụng (tự chọn rồi tự mở)

        - **5A:** Trong tứ diện ABCD, hai cạnh đối AB, CD không giao; chúng song song hay chéo?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        chéo nhau vì không đồng phẳng.

        </details>
        - **5B:** d vuông góc một đường a thuộc (P). Có suy d⊥(P) ngay được không?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        không; cần thêm điều kiện như vuông góc hai đường cắt nhau của (P).

        </details>


### 3. Tọa độ không gian Oxyz

#### 3.1. Vectơ và hệ tọa độ Oxyz

        **Khám phá.** Hai điểm của một drone có cùng hình chiếu trên bản đồ nhưng độ cao khác nhau. Tọa độ (x;y) có đủ không? **Điều cần nhận ra:** trục z bổ sung vị trí theo chiều cao, mọi phép toán vectơ vẫn cùng bản chất.


**Giải thích kiến thức:**

        **Vì sao cần học?** Một drone bay trên sân có thể ở cùng vị trí nhìn trên bản đồ Oxy nhưng cao hơn mặt đất một khoảng khác. Hai tọa độ x,y không đủ mô tả độ cao. Ta thêm trục z vuông góc với hai trục cũ và biểu diễn mỗi điểm bằng bộ ba $(x;y;z)$. Đây vẫn là ý tưởng **định vị bằng độ dời theo các phương độc lập**, không phải học ba bảng công thức mới tách rời.

        **Tiền đề:** Phần 1–3: vectơ, cộng/trừ, nhân số, Oxy, tích vô hướng; Phần 5: đọc hình không gian, phân biệt nét thể hiện và góc thật. Nếu chưa biết trục Ox,Oy, hãy đọc lại ví dụ A→B trên mặt phẳng trước khi tăng chiều.

        ### Từ hình hộp đến vectơ trong không gian

        Vectơ trong không gian vẫn có điểm đầu/cuối và có thể tịnh tiến nếu giữ độ dài/hướng; quy tắc ba điểm và hình bình hành vẫn đúng, hình hộp cho quy tắc cộng ba cạnh từ một đỉnh để tới đỉnh đối diện. Góc giữa hai vectơ **khác không** có thể được đo sau khi đưa chúng về chung một gốc; tích vô hướng vẫn là tích hai độ dài với cos góc.

        **Hệ trục Oxyz trực chuẩn:** Gốc O và ba trục vuông góc đôi một, vectơ đơn vị $\vec i,\vec j,\vec k$. Với $A(x_A;y_A;z_A)$, $B(x_B;y_B;z_B)$:

        $$\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A).$$

        **Đọc hình:** Mọi hình chiếu xiên trên giấy đều làm ba trục trông không thật vuông; các **góc thật** giữa Ox,Oy,Oz vẫn 90° theo định nghĩa hệ tọa độ, không đo bằng thước góc trên ảnh. Điểm A và vectơ OA có cùng bộ ba số khi gốc chính là O, nhưng không đồng nhất khái niệm *điểm* với *vectơ*.

        ### Phép toán, tích vô hướng, độ dài

        Với $\vec u=(a;b;c)$, $\vec v=(d;e;f)$:

        - $\vec u\pm\vec v=(a\pm d;b\pm e;c\pm f)$, $t\vec u=(ta;tb;tc)$.
        - $\vec u\cdot\vec v=ad+be+cf$; $|\vec u|=\sqrt{a^2+b^2+c^2}$; $AB=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}$.
        - **Vuông góc** nếu dot=0 và **hai vectơ đều khác không**; khi tính cos cần chia cho tích hai độ dài khác 0 và giữ kết quả trong [-1,1].
        - **Cùng phương** với hai vectơ khác 0 khi tồn tại t≠0 thỏa $\vec v=t\vec u$; không tự chia theo tọa độ có thể bằng 0, xem trường hợp vectơ-không riêng theo KNTT.
        - **Trung điểm** $M=((x_A+x_B)/2;(y_A+y_B)/2;(z_A+z_B)/2)$; **trọng tâm tam giác** là trung bình tọa độ ba đỉnh. Không nhầm trọng tâm **tứ diện** (nếu đề mở rộng), trong chuẩn cơ bản ở đây xét tam giác.

        ### Liên hệ với thực tế và giới hạn

        Chọn gốc/tọa độ/đơn vị trước khi tính. Một tọa độ âm chỉ vị trí theo **hướng âm của trục**, không phải "độ dài âm". Nếu hình cho đơn vị mét mà đáp án tính km, phải đổi đơn vị. Khi dùng góc/độ dài, nhớ điều kiện vectơ khác không. Không suy tất cả vật thể 3D có thể mô tả đúng chỉ bằng khoảng cách: hướng và tham chiếu cũng cần thiết.
**Cách đọc hình tọa độ:** Từ gốc O, nhận ba chiều dương Ox, Oy, Oz. Hình phối cảnh có thể làm các góc trên giấy trông không vuông; kiểm tọa độ $\overrightarrow{AB}$ bằng B−A thay vì đo đếm từ bản vẽ.

        
> **CÔNG THỨC — Vectơ và hệ tọa độ Oxyz**
>
> Oxyz: \[\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A),\quad AB=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}.\]

### Ví dụ: lập luận và kiểm nghiệm

        1. A(1;−2;3), B(4;0;−1) ⇒ AB=(3;2;−4); thử cộng vectơ AB vào tọa độ A cho đúng B.
        2. Độ dài AB ở ví dụ trên là $\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}$. Kết quả luôn không âm, không cộng đại số 3+2−4.
        3. $\vec u=(1;2;−1),\vec v=(2;−1;0)$ ⇒ dot =2−2+0=0; hai vectơ khác 0 ⇒ vuông góc. Không đòi hình vẽ trông là 90°.
        4. A(0;2;−1),B(4;−2;5), trung điểm M=(2;0;2). Dùng tính chất MA+MB=0 để kiểm mỗi tọa độ.
        5. Tam giác A(0;0;0),B(3;0;0),C(0;6;3), G=(1;2;1); có thể dựng trung tuyến rồi kiểm AG=2/3 AM.
        6. Dời drone từ (2;−1;4) tới (−1;3;6) ⇒ vectơ dời (−3;4;2), độ dài $\sqrt{29}$. Cần chọn vị trí **cuối−đầu**, không nhầm độ cao 6 với độ dời thẳng.

        ### Hai Vận dụng trước Luyện tập

        - **6A:** A(−2;1;3), B(1;−1;5) có AB bằng (3;−2;2) hay (−3;2;−2)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (3;−2;2), vì B−A.

        </details>
        - **6B:** u=(1;2;−1), v=(2;−1;0) có vuông góc?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        có vì dot=0 và cả hai khác 0. Nếu thay u=0, không gọi góc giữa hai vectơ là 90°.

        </details>



![Độ dời theo ba trục của vectơ AB trong Oxyz, độ dài căn 29](exp-notebook-d5-equivalent/Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg)

**Đọc hình:** A(1;−2;3), B(4;0;−1) cho \(\overrightarrow{AB}=(3;2;-4)\) và \(AB=\sqrt{29}\). Dấu theo trục, không cộng số đo độ dời có dấu để tính khoảng cách.

#### 3.2. Mặt phẳng, đường thẳng, mặt cầu Oxyz

        **Khám phá.** Một đường bay đi qua A(1;2;3) theo hướng (1;1;−1) có cắt mặt phẳng x+2y+2z−9=0 không? Trước khi tính, hãy đặt câu hỏi: đường bay được cho bằng điểm và hướng, mặt phẳng được cho bằng pháp tuyến. **Điều cần nhận ra:** thay tham số vào phương trình để kiểm điều kiện giao.


**Giải thích kiến thức:**

        **Vì sao cần học?** Một chiếc máy bay bay thẳng trong không gian, mặt đất là một mặt phẳng, radar đo khoảng cách tới một điểm cố định có dạng mặt cầu. Để kiểm tra máy bay có cắt một mặt phẳng nguy hiểm hay có đi vào vùng hình cầu, ta cần biểu diễn hình bằng **phương trình/toạ độ**. Nhưng chưa có ý nghĩa gì nếu chỉ học mẫu công thức mà không hiểu vectơ chỉ phương/pháp tuyến là gì.

        **Tiền đề:** Phần 5 đã biết đường/mặt/phép chiếu/khoảng cách; Phần 6 biết vectơ, tích vô hướng và ba trục Oxyz. Nếu không diễn tả được "đường vuông góc mặt" bằng hình, quay lại phần 5 trước khi dùng pháp tuyến.

        ### 1. Mặt phẳng: pháp tuyến tạo điều kiện vuông góc

        Mặt phẳng (P) qua $M_0(x_0;y_0;z_0)$ có pháp tuyến $\vec n=(a;b;c)\ne\vec0$ gồm các M thỏa $\vec n\cdot\overrightarrow{M_0M}=0$. Từ đó:

        $$a(x-x_0)+b(y-y_0)+c(z-z_0)=0,$$

        hay $ax+by+cz+d=0$ với $a^2+b^2+c^2>0$. Một mặt phẳng không thể có ba hệ số a=b=c=0. Mặt phẳng có một phương trình nhưng có **vô số vectơ pháp tuyến** là các bội khác 0 của nhau.

        **Tại sao chọn pháp tuyến?** Điều kiện nằm trong mặt có nghĩa độ dời theo phương bất kỳ **nằm trong mặt** vuông góc pháp tuyến. Nếu đề cho ba điểm không thẳng hàng, trước hết tìm hai vectơ cùng trong mặt rồi tìm pháp tuyến vuông góc cả hai (bằng hệ thức tuyến tính/định thức phù hợp), không đoán phương trình từ hình phối cảnh.

        **Khoảng cách điểm–mặt:** $d(A,(P))=|ax_A+by_A+cz_A+d|/\sqrt{a^2+b^2+c^2}$, bằng 0 khi A thuộc mặt. Tử có trị tuyệt đối vì khoảng cách không âm; mẫu là độ dài pháp tuyến và khác 0.

        ### 2. Đường thẳng: điểm đi qua + hướng chuyển động

        Đường d qua $M_0(x_0;y_0;z_0)$, vectơ chỉ phương $\vec u=(u_1;u_2;u_3)\ne\vec0$ gồm các điểm:

        $$(x;y;z)=(x_0;y_0;z_0)+t(u_1;u_2;u_3),\qquad t\in\mathbb R.$$

        Phương trình tham số luôn dùng được dù có một thành phần u_i=0. **Dạng chính tắc chia cho u_i chỉ dùng nếu cả ba thành phần được chia đều khác 0**; nếu u_i=0, biến tọa độ tương ứng là hằng số. Kiểm điểm M thuộc d bằng một **giá trị t chung cho cả ba phương trình**, không lấy ba tham số khác nhau.

        **Vị trí tương đối:** Đường–mặt: thay phương trình tham số đường vào phương trình mặt cho phương trình một ẩn t. Một nghiệm → cắt tại một điểm; vô nghiệm → song song phân biệt; đúng với mọi t → đường nằm trong mặt. Hai mặt có pháp tuyến cùng phương: song song phân biệt hoặc trùng, phải so hệ số tất cả thành phần/hằng số; pháp tuyến không cùng phương → cắt theo đường.

        ### 3. Góc và vuông góc từ các vectơ chỉ phương/pháp tuyến

        - Góc giữa hai đường dùng góc nhỏ giữa hai **vectơ chỉ phương**: $\cos\theta=|\vec u\cdot\vec v|/(|\vec u||\vec v|)$, hai vectơ khác 0.
        - Góc giữa hai mặt phẳng dùng góc nhỏ giữa hai **pháp tuyến**: $\cos\varphi=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)$.
        - Đường d vuông góc mặt (P) khi vectơ chỉ phương u **cùng phương** pháp tuyến n của (P), không phải khi dot(u,n)=0. Nếu dot(u,n)=0 thì phương của d song song (P); cần thế điểm để phân biệt d nằm trong hay song song phân biệt.
        - Góc đường–mặt bổ sung với góc giữa u và n: $\sin\alpha=|\vec u\cdot\vec n|/(|\vec u||\vec n|)$, với các vectơ khác 0. Không thay sin bằng cos.

        ### 4. Mặt cầu và ứng dụng sau khi đã biết mặt phẳng/đường thẳng

        Tập điểm cách đều I(a;b;c) một khoảng R>0 có phương trình $(x-a)^2+(y-b)^2+(z-c)^2=R^2$. **Không** nhầm mặt cầu (bề mặt) với **khối cầu** (cả bên trong). Một điểm M thuộc mặt cầu khi bình phương khoảng cách đến I bằng R². Với mặt phẳng (P), nếu khoảng cách từ I đến (P) là h: h>R thì không cắt, h=R tiếp xúc, h<R cắt theo đường tròn bán kính $\sqrt{R^2-h^2}$ (nếu h=0 là đường tròn lớn). **Chỉ xem đây là ứng dụng tích hợp sau khi đã học xong B17**, không biến nó thành một outcome bắt buộc của bài mặt phẳng B14 trước B17.

        **Điều kiện và kiểm nghiệm:** Một phương trình đúng có thể tạo ra nghiệm toán học không phù hợp dữ liệu thực tế (chẳng hạn t âm khi t biểu diễn thời gian sau lúc bắt đầu). Luôn nêu hệ trục, đơn vị, phạm vi t và kiểm lại nghiệm vào phương trình gốc.
![Mô hình Oxyz: mặt phẳng có pháp tuyến n, đường thẳng d có vectơ chỉ phương u và mặt cầu tâm I bán kính R](assets/Temp_TOPIC_VEC_R05_PLANE_LINE_SPHERE_20261114.svg)

**Đọc hình 3.2:** Ở ô trái, \(\vec n\) là **pháp tuyến của mặt phẳng**, còn \(\vec u\) là **hướng của đường d**; ảnh không giả thiết \(d\perp(P)\). Ở ô phải, điểm M thuộc mặt cầu khi \(IM=R>0\); muốn kiểm cắt/giao phải thay phương trình, không kết luận từ nét vẽ.

**Cách đọc hình phương trình không gian:** Nhận hướng của đường, pháp tuyến của mặt và tâm–bán kính của mặt cầu. Khi suy luận về góc, khoảng cách và vị trí tương đối, ưu tiên điều kiện đại số đã xác minh thay vì cảm giác từ một hình phối cảnh.

        
> **CÔNG THỨC — Mặt phẳng, đường thẳng, mặt cầu Oxyz**
>
> Mặt phẳng pháp tuyến khác không: \(ax+by+cz+d=0\). Đường thẳng \(\vec{OM}=\vec{OM_0}+t\vec u\) với chỉ phương khác 0. Mặt cầu tâm (a;b;c) bán kính R dương: \[(x-a)^2+(y-b)^2+(z-c)^2=R^2.\]

### Ví dụ: suy luận trước khi tính

        1. **Mặt phẳng qua A có n:** A(1;2;3), n=(2;−1;1). Từ dot $2(x-1)-(y-2)+(z-3)=0$ suy ra **2x−y+z−3=0**. Thế A:2−2+3−3=0 kiểm đúng.
        2. **Khoảng cách điểm–mặt:** P(1;2;3) tới x+2y+2z−9=0: $|1+4+6-9|/3=2/3$. Không bỏ mẫu norm n=3.
        3. **Đường thẳng khi một hệ số hướng có thể bằng 0:** Qua M(1;0;2), u=(2;−1;3), dạng tham số (1+2t;−t;2+3t); không bắt buộc viết dạng chính tắc.
        4. **Giao điểm:** d:(x;y;z)=(0;0;1)+t(1;1;−1), mặt z=0 ⇒ 1−t=0 ⇒ t=1 ⇒ (1;1;0). Thế vào cả đường và mặt.
        5. **Hai mặt trùng hay song song:** (P):x+2y+3z=1, (Q):2x+4y+6z=4 có pháp tuyến cùng phương, nhưng Q tương đương x+2y+3z=2 ≠ P, nên song song phân biệt. Nếu Q vế phải 2 thì trùng P.
        6. **Mặt cầu cắt mặt phẳng:** $x^2+y^2+z^2=25$ (I=O,R=5) và z=3. Tâm cách mặt 3<5 nên giao tuyến là đường tròn $x^2+y^2=16,z=3$, bán kính 4. **Đây là ứng dụng sau B17**, không được gán như Core B14 ban đầu.

        ### Hai Vận dụng trước Luyện tập

        - **7A:** M(1;0;2), n=(2;−1;1), mặt đi qua M có phương trình $2x-y+z-4=0$ hay $2x-y+z+4=0$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        −4 vì thế (1,0,2) cho 0.

        </details>
        - **7B:** u=(1;0;0), pháp tuyến n=(1;0;0) của (P), đường theo u song song mặt hay vuông góc mặt?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        vuông góc mặt vì u cùng phương n; nếu dot=0 mới là hướng song song mặt.

        </details>


<!-- TOPIC_KNOWLEDGE_END -->

<!-- TOPIC_PRACTICE_BEGIN -->
## 2. Luyện tập

**Cách luyện:** Ở mỗi phần, làm câu nền tảng trước, sau đó tự chọn phương pháp cho câu vận dụng và bài tự luận. Bài gốc được tải qua **một thư viện item canonical**, không tạo bản sao đề, đáp án hoặc rubric. Sau khi nộp câu luyện tập mới mở đáp án/lời giải, đọc lỗi thường gặp và làm câu tương đương. Luyện tập không tự tạo chứng cứ Mastery.

### 2.1. Vectơ: độ lớn, phương và hướng

**Bộ câu canonical trong mảng này:** `THPT-G10-B07-C01` · `THPT-G10-B07-C02` · `THPT-G10-B07-P01` · `THPT-G10-B07-P02` · `THPT-G10-B07-P03` · `THPT-G10-B07-P04` · `THPT-G10-B07-P05` · `THPT-G10-B07-P06` · `THPT-G10-CHIV-W07` · `THPT-TOPIC-VECTOR-P1-R01-T01` · `THPT-TOPIC-VECTOR-P1-R01-P01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Bài tập và ngân hàng dùng chung

| ID canonical SGK (giữ một câu/đáp án/lời giải) | Mục tiêu chính | Đầu ra/lời giải bắt buộc |
|---|---|---|
| `THPT-G10-B07-C01` | điểm đầu/cuối | B: đầu A, cuối B |
| `THPT-G10-B07-C02` | hai vectơ bằng nhau | C: cùng hướng và độ dài |
| `THPT-G10-B07-P01` | độ dài | 7 cm kể cả BA đảo hướng |
| `THPT-G10-B07-P02` | hình bình hành | A: DC bằng AB |
| `THPT-G10-B07-P03` | vectơ ngược | CD ngược AB |
| `THPT-G10-B07-P04` | quy ước vectơ-không | D: độ dài 0, cùng hướng theo quy ước |
| `THPT-G10-B07-P05` | cùng hướng ≠ bằng | B: AC và CB dài khác nhau nhưng cùng hướng nếu A,C,B theo thứ tự |
| `THPT-G10-B07-P06` | độ dài độ dời | 5 km vì $\sqrt{4^2+3^2}=5$; quãng đường 7 km |
| `THPT-G10-CHIV-W07` | lập luận tự luận hình bình hành | Rubric một nguồn SGK gốc, **7 điểm**, mở đối chiếu sau khi giải, không Mastery |

**Câu mới cần review (không nhân bản SGK):** `THPT-TOPIC-VECTOR-P1-R01-T01`: A,M,B khác nhau, M nằm giữa A,B ⇔ hai vectơ MA, MB ngược hướng. `THPT-TOPIC-VECTOR-P1-R01-P01`: A,B,C phân biệt và AB,AC cùng phương ⇒ ba điểm thẳng hàng (vì hai giá chung A phải trùng nhau); **không** suy C nằm giữa AB. Rubric tự đối chiếu P01 /3: 1 điểm hai giá qua A, 1 điểm chúng trùng, 1 điểm bác kết luận nằm giữa có phản ví dụ. Nội dung/ID mới là DELTA_C, reviewer kiểm toán riêng.

### Khắc phục (D6)

- **Nhầm AB/BA:** Vẽ đuôi mũi tên ở chữ đầu và đầu mũi tên ở chữ sau; quay lại `HELP-G10-B07-01` rồi thử `P03`.
- **Nhầm cùng phương/cùng hướng/bằng nhau:** So độ dài **sau** khi xác định hướng; với $\vec0$ dùng đúng quy ước KNTT, tham chiếu `HELP-G10-B07-02`.
- **Nhầm tia và đoạn:** Lấy thứ tự A–B–M; AB và AM cùng hướng nhưng M không giữa; tự kiểm bằng hướng MA và MB.

</details>

### 2.2. Cộng, trừ và nhân vectơ với số

**Bộ câu canonical trong mảng này:** `THPT-G10-B08-C01` · `THPT-G10-B08-C02` · `THPT-G10-B08-P01` · `THPT-G10-B08-P02` · `THPT-G10-B08-P03` · `THPT-G10-B08-P04` · `THPT-G10-B08-P05` · `THPT-G10-B08-P06` · `THPT-G10-B09-C01` · `THPT-G10-B09-C02` · `THPT-G10-B09-P01` · `THPT-G10-B09-P02` · `THPT-G10-B09-P03` · `THPT-G10-B09-P04` · `THPT-G10-B09-P05` · `THPT-G10-B09-P06` · `THPT-G10-CHIV-W08-ANCHOR` · `THPT-G10-CHIV-W09`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Canonical item–role: 16 public formative + hai Written, không nhân bản

| ID gốc | Mục tiêu | Đáp án đúng + mấu chốt |
|---|---|---|
| `THPT-G10-B08-C01` | cộng 3 điểm | A: AC |
| `THPT-G10-B08-C02` | hình bình hành | B: AC |
| `THPT-G10-B08-P01` | vectơ đối | 0 |
| `THPT-G10-B08-P02` | hiệu | CB |
| `THPT-G10-B08-P03` | vòng kín | 0 |
| `THPT-G10-B08-P04` | trung điểm | C: MA+MB=0 |
| `THPT-G10-B08-P05` | trọng tâm | 0 |
| `THPT-G10-B08-P06` | hai lực vuông góc | 5 N cho 3 N và 4 N |
| `THPT-G10-B09-C01` | hệ số âm và độ dài | B: 8 cm, ngược hướng |
| `THPT-G10-B09-C02` | số k=0 | C: 0 |
| `THPT-G10-B09-P01` | độ dài tích số | 18 m cho $|\vec a|=6$ m và $k=3$ |
| `THPT-G10-B09-P02` | phân phối | $\vec a+3\vec b$ từ $3(\vec a+\vec b)-2\vec a$ |
| `THPT-G10-B09-P03` | dấu hệ số | $-\frac35\overrightarrow{AB}$ cho MA nếu M chia 3/5 AB |
| `THPT-G10-B09-P04` | trọng tâm | C: $(AB+AC)/3$ theo vectơ |
| `THPT-G10-B09-P05` | tỉ lệ âm | ngược hướng, $5/2$ |
| `THPT-G10-B09-P06` | độ dời tổng | 3 km Tây khi đi $\vec u$ 3 km Đông rồi $-2\vec u$ |
| `THPT-G10-CHIV-W08-ANCHOR` | tự luận chứng minh trung điểm/trọng tâm | Giữ rubric /7 nguồn gốc SGK, tự đối chiếu, không Mastery |
| `THPT-G10-CHIV-W09` | tự luận tỉ số đoạn thẳng | Giữ rubric /7 nguồn gốc SGK, không câu/rubric khác |

**Luồng Luyện tập:** C01/P01 (cộng, đối) → C02/P02/P03 (quy tắc/trừ/khép kín) → P04/P05/W08 (trung điểm/trọng tâm) → B09-C02/P01/P02 (nhân số) → P03/P04/P05/P06/W09 (ứng dụng). Học sinh phải trả lời **vì sao chọn công thức**, không chỉ điền số.

**D6:** `HELP-G10-B08-01` ghép sai đầu–đuôi → vẽ A→B→C rồi thử lại; `HELP-G10-B08-02` nhầm trung điểm/trọng tâm → đánh dấu M/G và dùng đúng hệ thức; `HELP-G10-B09-01` ghi độ dài âm → tách dấu hệ số/hướng với $|k|$; `HELP-G10-B09-02` nhầm tỷ số AG:GM và AG:AM → vẽ trung tuyến và ghi 2:1 trước khi dùng công thức.

</details>

### 2.3. Tọa độ và tích vô hướng trên Oxy

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P03-` · `THPT-TOPIC-VEC-P03-C01` · `THPT-TOPIC-VEC-P03-P01` · `THPT-TOPIC-VEC-P03-C02` · `THPT-TOPIC-VEC-P03-P02` · `THPT-TOPIC-VEC-P03-C03` · `THPT-TOPIC-VEC-P03-P03` · `THPT-TOPIC-VEC-P03-C04` · `THPT-TOPIC-VEC-P03-P04` · `THPT-TOPIC-VEC-P03-C05` · `THPT-TOPIC-VEC-P03-P05` · `THPT-TOPIC-VEC-P03-C06` · `THPT-TOPIC-VEC-P03-P06` · `THPT-TOPIC-VEC-P03-C07` · `THPT-TOPIC-VEC-P03-P07` · `THPT-TOPIC-VEC-P03-C08` · `THPT-TOPIC-VEC-P03-P08` · `THPT-TOPIC-VEC-P03-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome/Item/Role — câu mới có một ID canonical ứng viên

| OUTCOME_ID | Nội dung cần đạt | Bằng chứng | D6 |
|---|---|---|---|
| `TOPIC-VEC-P03-O01` | Đọc trục và vectơ tọa độ | P03-C01, P03-P01 | phân biệt vị trí và độ dời |
| `TOPIC-VEC-P03-O02` | Phép toán tọa độ | P03-C02, P03-P02 | cộng thành phần, không cộng độ dài |
| `TOPIC-VEC-P03-O03` | Độ dài/khoảng cách | P03-C03, P03-P03 | dùng bình phương thành phần |
| `TOPIC-VEC-P03-O04` | Cùng phương và ngoại lệ 0 | P03-C04, P03-P04 | dùng tỉ số đúng điều kiện |
| `TOPIC-VEC-P03-O05` | Trung điểm và trọng tâm | P03-C05, P03-P05 | tọa độ trung bình, kiểm điểm |
| `TOPIC-VEC-P03-O06` | Tích vô hướng và dấu | P03-C06, P03-P06 | phân biệt dot với norm product |
| `TOPIC-VEC-P03-O07` | Góc và vuông góc | P03-C07, P03-P07 | hai vectơ khác 0 |
| `TOPIC-VEC-P03-O08` | Ứng dụng lực/công/chọn phương pháp | P03-C08, P03-P08, W03 | chọn dot theo hình chiếu |

Các `ITEM_ID` hoàn chỉnh tương ứng có tiền tố `THPT-TOPIC-VEC-P03-` và hậu tố C01–C08/P01–P08/W01; một `item_id` có một câu/đáp án/lời giải/rubric. Đây là **các ứng viên mới**, chưa nhập website hoặc thư viện đánh giá; không trùng tên ID SGK.

| ITEM_ID | Đề bài (PUBLIC formative; Vận dụng mới mở lời giải) | Đáp án + lời giải |
|---|---|---|
| `THPT-TOPIC-VEC-P03-C01` | Cho A(-2;3), B(4;-1). Tính AB theo tọa độ vectơ. | (6;-4) vì B−A=(4+2;-1−3). |
| `THPT-TOPIC-VEC-P03-P01` | Cho A(2;-3), B(-1;1). Tìm BA và AB; kiểm chúng đối nhau. | AB=(-3;4), BA=(3;-4)=-AB. |
| `THPT-TOPIC-VEC-P03-C02` | $\vec u=(2;1),\vec v=(-3;4)$, tính $2\vec u+\vec v$. | (1;6), vì (4;2)+(-3;4). |
| `THPT-TOPIC-VEC-P03-P02` | $\vec u=(1;-2),\vec v=(3;1)$, rút gọn $3(\vec u+\vec v)-2\vec u$. | $\vec u+3\vec v=(10;1)$; khai triển và cộng thành phần. |
| `THPT-TOPIC-VEC-P03-C03` | Tính độ dài $\vec u=(3;-4)$. | 5 do $\sqrt{9+16}$. |
| `THPT-TOPIC-VEC-P03-P03` | A(1;2), B(4;6). Tính AB. | 5 do $\sqrt{3^2+4^2}$. |
| `THPT-TOPIC-VEC-P03-C04` | $\vec u=(2;3),\vec v=(4;6)$ có cùng phương không? | Có, $\vec v=2\vec u$, cả hai khác 0. |
| `THPT-TOPIC-VEC-P03-P04` | Hai vectơ $(2;k)$ và (4;6) cùng phương. Tìm k. | k=3 từ 2·6−4k=0; không chia tùy tiện nếu thành phần 0. |
| `THPT-TOPIC-VEC-P03-C05` | Trung điểm của A(-1;4),B(5;-2)? | M(2;1) theo trung bình hai tọa độ. |
| `THPT-TOPIC-VEC-P03-P05` | Trọng tâm tam giác A(0;0),B(6;0),C(0;9)? | G(2;3), lấy trung bình tọa độ ba đỉnh. |
| `THPT-TOPIC-VEC-P03-C06` | $(2;-1)\cdot(3;4)$ bằng bao nhiêu? | 2 vì 6−4. |
| `THPT-TOPIC-VEC-P03-P06` | $\vec u=(1;0),\vec v=(-2;1)$. Góc giữa chúng là nhọn hay tù? | Tù vì dot=-2<0, cả hai khác 0. |
| `THPT-TOPIC-VEC-P03-C07` | Hai vectơ (3;2) và (2;-3) có vuông góc? | Có: dot=0, khác 0. |
| `THPT-TOPIC-VEC-P03-P07` | Góc giữa (1;0) và (1;1) bằng bao nhiêu? | 45° vì cos=1/√2. |
| `THPT-TOPIC-VEC-P03-C08` | F=(4;3) N và s=(2;-1) m, công bằng bao nhiêu? | 5 J, vì dot=8−3. |
| `THPT-TOPIC-VEC-P03-P08` | F=(2;-3) N, s=(-1;2) m. Dấu công? Tính công. | −8 J, vì dot=−2−6<0; lực cản theo hướng độ dời. |

**Written/Anchor dùng một thư viện:** `THPT-TOPIC-VEC-P03-W01` (PUBLIC tự luận, tự đối chiếu /5). Cho A(-2;1),B(4;3),C(0;7). (a) Tính AB, AC. (b) Chứng minh tam giác ABC vuông hay không tại A. (c) Tính độ dài cạnh BC. **Lời giải:** AB=(6;2), AC=(2;6), dot=12+12=24≠0 nên **không vuông tại A**; BC=(-4;4), $BC=4\sqrt2$. **Rubric /5:** (a) 2 điểm hai hiệu tọa độ; (b) 1,5 điểm dot và kết luận có điều kiện; (c) 1,5 điểm BC, căn tổng bình phương. Học sinh trình bày lập luận, không máy chấm Mastery.

**D6 đường quay lại:** (i) lấy nhầm tọa độ B làm AB ⇒ thử A=O xem khi nào công thức trùng; (ii) dấu sai của tọa độ ⇒ vẽ lưới Oxy, kiểm B=A+AB; (iii) lạm dụng dot=0 với vectơ-không ⇒ đọc lại điều kiện góc; (iv) sai trung điểm/trọng tâm ⇒ giải thích vì sao chia 2 hay 3 trước khi tính. Sau sửa làm lại câu khác cùng outcome, không dùng đáp án vừa xem làm RD1.

</details>

### 2.4. Đường thẳng, đường tròn và conic

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P04-C01` · `THPT-TOPIC-VEC-P04-P01` · `THPT-TOPIC-VEC-P04-C02` · `THPT-TOPIC-VEC-P04-P02` · `THPT-TOPIC-VEC-P04-C03` · `THPT-TOPIC-VEC-P04-P03` · `THPT-TOPIC-VEC-P04-C04` · `THPT-TOPIC-VEC-P04-P04` · `THPT-TOPIC-VEC-P04-C05` · `THPT-TOPIC-VEC-P04-P05` · `THPT-TOPIC-VEC-P04-C06` · `THPT-TOPIC-VEC-P04-P06` · `THPT-TOPIC-VEC-P04-C07` · `THPT-TOPIC-VEC-P04-P07` · `THPT-TOPIC-VEC-P04-C08` · `THPT-TOPIC-VEC-P04-P08` · `THPT-TOPIC-VEC-P04-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | Câu chính | D6/điều kiện |
|---|---|---|---|
| `TOPIC-VEC-P04-O01` | Vectơ chỉ phương/pháp tuyến | C01,P01 | pháp tuyến phải khác 0 |
| `TOPIC-VEC-P04-O02` | Phương trình đường thẳng và thế kiểm | C02,P02 | thay điểm trở lại |
| `TOPIC-VEC-P04-O03` | Quan hệ hai đường/góc | C03,P03 | phân biệt song song/trùng |
| `TOPIC-VEC-P04-O04` | Khoảng cách điểm–đường | C04,P04 | trị tuyệt đối, mẫu khác 0 |
| `TOPIC-VEC-P04-O05` | Đường tròn, tâm/bán kính | C05,P05 | R>0, thế điểm |
| `TOPIC-VEC-P04-O06` | Tiếp tuyến đường tròn | C06,P06 | điểm tiếp xúc thuộc tròn |
| `TOPIC-VEC-P04-O07` | Ellipse/hyperbola và tiêu điểm | C07,P07 | điều kiện a,b,c, dấu |
| `TOPIC-VEC-P04-O08` | Parabola, quỹ tích và ứng dụng | C08,P08,W01 | tiêu điểm p/2, hình thật |

| ITEM_ID mới — PUBLIC | Đề bài cụ thể | Đáp án + chứng minh ngắn |
|---|---|---|
| `THPT-TOPIC-VEC-P04-C01` | Pháp tuyến n=(2;-3), vectơ chỉ phương có thể là gì? | u=(3;2), dot=6-6=0. |
| `THPT-TOPIC-VEC-P04-P01` | Đường thẳng d: 2x−3y+1=0, cho một vectơ chỉ phương. | u=(3;2), khác 0 và vuông góc pháp tuyến (2;-3). |
| `THPT-TOPIC-VEC-P04-C02` | Đường qua A(1;2),B(3;6): viết phương trình. | $2x-y=0$, kiểm cả hai điểm. |
| `THPT-TOPIC-VEC-P04-P02` | Qua M(1;-2), pháp tuyến (2;-3), phương trình? | $2x-3y-8=0$. |
| `THPT-TOPIC-VEC-P04-C03` | d1: x+2y=1; d2:2x+4y=4, có quan hệ gì? | Song song phân biệt: pháp tuyến tỉ lệ, vế hằng không cùng tỷ lệ. |
| `THPT-TOPIC-VEC-P04-P03` | d1: x+y−2=0; d2: 2x+2y−4=0, quan hệ gì? | Trùng nhau vì phương trình thứ hai bằng 2 lần phương trình thứ nhất. |
| `THPT-TOPIC-VEC-P04-C04` | Khoảng cách P(1;2) đến d:3x+4y−10=0. | 1/5 vì $|3+8-10|/5$. |
| `THPT-TOPIC-VEC-P04-P04` | A(−1;3), d:5x−12y+6=0; tính khoảng cách. | $|-5-36+6|/13=35/13$. |
| `THPT-TOPIC-VEC-P04-C05` | Tròn tâm (−2;3), bán kính 4? | $(x+2)^2+(y-3)^2=16$. |
| `THPT-TOPIC-VEC-P04-P05` | $x^2+y^2−4x+6y−3=0$ có tâm/bán kính gì? | $(x-2)^2+(y+3)^2=16$ ⇒ I(2;−3), R=4. |
| `THPT-TOPIC-VEC-P04-C06` | Tiếp tuyến của $x^2+y^2=25$ tại T(3;4)? | $3x+4y=25$, vì bán kính OT là pháp tuyến tại T. |
| `THPT-TOPIC-VEC-P04-P06` | Tròn $(x-1)^2+(y+2)^2=9$; điểm T(4;−2), tiếp tuyến? | x=4 vì bán kính IT=(3;0), T thuộc tròn. |
| `THPT-TOPIC-VEC-P04-C07` | Ellipse $x^2/9+y^2/4=1$, tiêu điểm? | $(\pm\sqrt5;0)$ vì c²=9−4=5. |
| `THPT-TOPIC-VEC-P04-P07` | Hyperbola $x^2/9−y^2/16=1$, tiêu điểm? | $(\pm5;0)$ vì c²=9+16=25. |
| `THPT-TOPIC-VEC-P04-C08` | Parabola $y^2=8x$ tiêu điểm và đường chuẩn? | F(2;0), x=−2 vì p=4. |
| `THPT-TOPIC-VEC-P04-P08` | Cho $y^2=6x$. M(1,5;3) có nằm trên parabol? | Có vì $3^2=9=6\cdot1,5$; tiêu điểm (1,5;0) là một điểm khác. |

**Written D4 `THPT-TOPIC-VEC-P04-W01`, formative /5:** Đường tròn tâm I(1;−1), bán kính 5 và đường thẳng d:y=2. (a) Chứng minh d cắt đường tròn tại hai điểm. (b) Tìm tọa độ hai giao điểm. (c) Giải thích vì sao có đúng hai giao điểm, không dựa vào hình đo. **Lời giải:** $d(I,d)=|-1-2|=3<5$ ⇒ hai giao điểm. Thế y=2: $(x-1)^2+(2+1)^2=25$ ⇒ $(x-1)^2=16$ ⇒ x=−3 hoặc 5; P(−3;2),Q(5;2). **Rubric:** 1 điểm lập được phương trình tròn; 1 điểm khoảng cách tâm–đường và điều kiện <R; 2 điểm giải hệ và hai tọa độ; 1 điểm giải thích đúng hai nghiệm phân biệt. Không chấm Mastery.

**D6 theo lỗi:** (1) pháp tuyến và chỉ phương nhầm nhau ⇒ chấm dot bằng 0, tự dựng; (2) sai c trong đường thẳng ⇒ thế điểm gốc vào phương trình; (3) khoảng cách âm ⇒ đặt trị tuyệt đối; (4) đường tròn không có R>0 ⇒ hoàn thành bình phương và kiểm; (5) parabola sai tiêu điểm ⇒ giải thích p vs p/2 bằng khoảng cách đến đường chuẩn. Sai conic phải vẽ lại tiêu điểm/trục và thử một điểm, không thay bằng thao tác nhớ mẹo.

</details>

### 2.5. Quan hệ hình học trong không gian

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P05-C01` · `THPT-TOPIC-VEC-P05-P01` · `THPT-TOPIC-VEC-P05-C02` · `THPT-TOPIC-VEC-P05-P02` · `THPT-TOPIC-VEC-P05-C03` · `THPT-TOPIC-VEC-P05-P03` · `THPT-TOPIC-VEC-P05-C04` · `THPT-TOPIC-VEC-P05-P04` · `THPT-TOPIC-VEC-P05-C05` · `THPT-TOPIC-VEC-P05-P05` · `THPT-TOPIC-VEC-P05-C06` · `THPT-TOPIC-VEC-P05-P06` · `THPT-TOPIC-VEC-P05-C07` · `THPT-TOPIC-VEC-P05-P07` · `THPT-TOPIC-VEC-P05-C08` · `THPT-TOPIC-VEC-P05-P08` · `THPT-TOPIC-VEC-P05-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | Câu PUBLIC | D6 |
|---|---|---|---|
| `TOPIC-VEC-P05-O01` | Điểm, đường, mặt, đồng phẳng | C01,P01 | xác định giả thiết đồng phẳng |
| `TOPIC-VEC-P05-O02` | Hai đường song song, cắt, chéo | C02,P02 | nhìn hình phối cảnh đúng |
| `TOPIC-VEC-P05-O03` | Góc giữa hai đường theo phương | C03,P03 | góc nhỏ, không cần giao nhau |
| `TOPIC-VEC-P05-O04` | Đường vuông góc mặt | C04,P04 | hai đường cắt nhau trong mặt |
| `TOPIC-VEC-P05-O05` | Hình chiếu, góc đường–mặt | C05,P05 | đủ điều kiện hình chiếu |
| `TOPIC-VEC-P05-O06` | Góc hai mặt/nhị diện | C06,P06 | phân biệt góc nhị diện |
| `TOPIC-VEC-P05-O07` | Khoảng cách vuông góc | C07,P07 | đoạn ngắn nhất |
| `TOPIC-VEC-P05-O08` | Đường chéo nhau và ứng dụng chiều cao | C08,P08,W01 | đoạn vuông góc chung |

| ITEM_ID mới — PUBLIC | Đề bài | Đáp án/lời giải ngắn |
|---|---|---|
| `THPT-TOPIC-VEC-P05-C01` | Trong tứ diện ABCD, ba điểm A,B,C có xác định một mặt phẳng không? | Có, ba điểm không thẳng hàng xác định mặt phẳng (ABC). |
| `THPT-TOPIC-VEC-P05-P01` | Trong tứ diện ABCD, D có thuộc (ABC) không? | Không, nếu thuộc thì bốn điểm đồng phẳng, không còn tứ diện. |
| `THPT-TOPIC-VEC-P05-C02` | Hai cạnh đối AB và CD của tứ diện có quan hệ gì? | Chéo nhau do không đồng phẳng, không cắt và không song song. |
| `THPT-TOPIC-VEC-P05-P02` | Hai đường phân biệt trong không gian không cắt nhau, chắc chắn song song? | Không: có thể chéo nhau; cần biết đồng phẳng. |
| `THPT-TOPIC-VEC-P05-C03` | Hai đường có phương lần lượt song song trục x và y vuông góc: góc giữa chúng? | 90° theo phương dù có thể chéo. |
| `THPT-TOPIC-VEC-P05-P03` | Góc giữa hai đường có hai vectơ chỉ phương tạo góc 120° bằng bao nhiêu? | 60° theo quy ước lấy góc nhỏ của hai đường. |
| `THPT-TOPIC-VEC-P05-C04` | d⊥a,d⊥b, a,b cắt nhau trong (P). d⊥(P)? | Có, dấu hiệu vuông góc đường–mặt với hai phương cắt nhau. |
| `THPT-TOPIC-VEC-P05-P04` | d vuông góc a thuộc (P), chưa biết đường thứ hai. d⊥(P)? | Không được suy vì d có thể nằm trong (P). |
| `THPT-TOPIC-VEC-P05-C05` | AB xiên với (P), BH⊥(P), A,H thuộc (P). Hình chiếu của AB là đoạn nào? | AH; B chiếu xuống H, A chiếu lên chính A. |
| `THPT-TOPIC-VEC-P05-P05` | Trong tam giác ABH vuông tại H với AB=10, BH=6, góc giữa AB và đáy (AH) xấp xỉ? | arcsin(0,6)≈36,87°, do sin=BH/AB. |
| `THPT-TOPIC-VEC-P05-C06` | Góc giữa hai mặt phẳng có thể là 130° không? | Không theo quy ước góc giữa hai mặt thuộc [0°,90°]; một góc nhị diện có thể 130°. |
| `THPT-TOPIC-VEC-P05-P06` | Hai mặt (P),(Q) cắt nhau theo d, muốn dựng góc phẳng của nhị diện phải chọn thiết diện thế nào? | Chọn mặt phẳng vuông góc d và hai tia ở hai nửa mặt phẳng phù hợp. |
| `THPT-TOPIC-VEC-P05-C07` | A nằm trong (P): $d(A,(P))$ bằng bao nhiêu? | 0, hình chiếu chính là A. |
| `THPT-TOPIC-VEC-P05-P07` | Chóp S.ABC có SA⊥(ABC), SA=7 cm. Khoảng cách S đến đáy? | 7 cm, vì SA là đoạn vuông góc ngắn nhất. |
| `THPT-TOPIC-VEC-P05-C08` | Trong hình hộp, AB và CC' có thể vuông góc về phương dù không gặp nhau? | Có: chúng chéo nhau và góc giữa phương bằng 90°. |
| `THPT-TOPIC-VEC-P05-P08` | Hình hộp chữ nhật có AB=4, BC=3, CC'=5. Khoảng cách AB đến CC'? | 3, đoạn BC nối hai đường và vuông góc cả AB lẫn CC'. |

**Written `THPT-TOPIC-VEC-P05-W01` /5:** Cho hình chóp S.ABC có SA⊥(ABC), AB=3 cm, BC=4 cm, góc ABC vuông, SA=12 cm. (a) Giải thích vì sao SA⊥BC. (b) Tính SB. (c) Nếu H là hình chiếu S lên (ABC), H là điểm nào? (d) Giải thích SB không bằng khoảng cách S đến đáy. **Đáp án:** (a) SA⊥mọi đường trong (ABC), kể cả BC; (b) trong tam giác vuông SAB, $SB=\sqrt{12^2+3^2}=3\sqrt{17}$ cm; (c) H=A; (d) khoảng cách bằng SA=12, SB xiên dài hơn. **Rubric /5:** 1 điểm (a) điều kiện; 1,5 điểm (b) vẽ tam giác và dùng Pitago; 1 điểm (c); 1,5 điểm (d) định nghĩa khoảng cách/so sánh; không Mastery.

**D6:** (1) Chéo nhau ≠ song song ⇒ xác nhận đồng phẳng; (2) hai đường vuông góc về phương có thể không giao ⇒ dựng đường song song qua điểm chung; (3) đường–mặt chỉ từ một phương ⇒ lập phản ví dụ d nằm trong mặt; (4) góc đường–mặt ⇒ tự dựng chân chiếu rồi đọc cạnh đối/cạnh huyền; (5) khoảng cách ⇒ đánh dấu đoạn ngắn nhất vuông góc cả hai đối tượng. Trở lại ví dụ liên quan và luyện câu khác, không xem trước lời giải RD1.

</details>

### 2.6. Vectơ và hệ tọa độ Oxyz

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P06-C01` · `THPT-TOPIC-VEC-P06-P01` · `THPT-TOPIC-VEC-P06-C02` · `THPT-TOPIC-VEC-P06-P02` · `THPT-TOPIC-VEC-P06-C03` · `THPT-TOPIC-VEC-P06-P03` · `THPT-TOPIC-VEC-P06-C04` · `THPT-TOPIC-VEC-P06-P04` · `THPT-TOPIC-VEC-P06-C05` · `THPT-TOPIC-VEC-P06-P05` · `THPT-TOPIC-VEC-P06-C06` · `THPT-TOPIC-VEC-P06-P06` · `THPT-TOPIC-VEC-P06-C07` · `THPT-TOPIC-VEC-P06-P07` · `THPT-TOPIC-VEC-P06-C08` · `THPT-TOPIC-VEC-P06-P08` · `THPT-TOPIC-VEC-P06-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Kĩ năng cần đạt | PUBLIC items | D6 |
|---|---|---|---|
| `TOPIC-VEC-P06-O01` | Đọc hình hộp/vectơ 3D | C01,P01 | phân biệt hình vẽ với tọa độ |
| `TOPIC-VEC-P06-O02` | Tọa độ điểm và AB | C02,P02 | cuối trừ đầu |
| `TOPIC-VEC-P06-O03` | Cộng/trừ/nhân hệ số | C03,P03 | làm từng thành phần |
| `TOPIC-VEC-P06-O04` | Độ dài/khoảng cách | C04,P04 | căn tổng ba bình phương |
| `TOPIC-VEC-P06-O05` | Tích vô hướng và góc | C05,P05 | khác không khi chia norm |
| `TOPIC-VEC-P06-O06` | Cùng phương/vuông góc | C06,P06 | trường hợp tọa độ bằng 0 |
| `TOPIC-VEC-P06-O07` | Trung điểm/trọng tâm | C07,P07 | trung bình từng tọa độ |
| `TOPIC-VEC-P06-O08` | Mô hình 3D thực tế | C08,P08,W01 | chọn gốc, trục, đơn vị |

| ITEM_ID mới — PUBLIC formative | Đề bài | Đáp án và lý do |
|---|---|---|
| `THPT-TOPIC-VEC-P06-C01` | Với hình hộp, ba cạnh xuất phát tại A có tổng vectơ là gì? | Đường chéo từ A tới đỉnh đối diện, theo quy tắc tổng ba dịch chuyển. |
| `THPT-TOPIC-VEC-P06-P01` | Điểm A(2;−1;5), vectơ OA là gì? | OA=(2;−1;5) vì O=(0;0;0). |
| `THPT-TOPIC-VEC-P06-C02` | A(1;−2;3),B(4;0;−1), tìm AB. | (3;2;−4) do B−A. |
| `THPT-TOPIC-VEC-P06-P02` | A(−2;1;3),B(1;−1;5). Tìm BA. | BA=(−3;2;−2), ngược AB=(3;−2;2). |
| `THPT-TOPIC-VEC-P06-C03` | u=(1;2;−1),v=(2;−1;0), tính u+v. | (3;1;−1), cộng từng trục. |
| `THPT-TOPIC-VEC-P06-P03` | u=(1;0;2),v=(−2;3;1), tính 2u−v. | (4;−3;3) vì 2u=(2;0;4). |
| `THPT-TOPIC-VEC-P06-C04` | Độ dài u=(2;−3;6)? | 7 vì $\sqrt{4+9+36}=7$. |
| `THPT-TOPIC-VEC-P06-P04` | Khoảng cách A(1;2;2) tới O? | 3 vì $\sqrt{1+4+4}=3$. |
| `THPT-TOPIC-VEC-P06-C05` | u=(1;2;−1),v=(2;−1;0), dot? | 0; vì 2−2+0. |
| `THPT-TOPIC-VEC-P06-P05` | u=(1;0;0),v=(1;1;1). Cos góc giữa chúng? | $1/\sqrt3$, hai vectơ khác 0. |
| `THPT-TOPIC-VEC-P06-C06` | u=(1;2;−1),v=(−2;−4;2), có cùng phương? | Có vì v=−2u; ngược hướng. |
| `THPT-TOPIC-VEC-P06-P06` | u=(1;0;−1),v=(1;2;1), vuông góc? | Có: dot=1+0−1=0, cả hai khác 0. |
| `THPT-TOPIC-VEC-P06-C07` | Trung điểm A(0;2;−1),B(4;−2;5)? | M(2;0;2) theo trung bình từng tọa độ. |
| `THPT-TOPIC-VEC-P06-P07` | Trọng tâm A(0;0;0),B(3;0;0),C(0;6;3)? | G(1;2;1). |
| `THPT-TOPIC-VEC-P06-C08` | Drone từ P(2;−1;4) tới Q(−1;3;6); độ dời? | PQ=(−3;4;2), dài $\sqrt{29}$ theo mét nếu trục tính bằng m. |
| `THPT-TOPIC-VEC-P06-P08` | Drone P(1;−2;3) tới Q(4;2;3), quãng độ dời? | PQ=(3;4;0), dài 5; không có đổi độ cao. |

**Written `THPT-TOPIC-VEC-P06-W01`, formative /5:** A(−1;2;0), B(3;−2;4), C(1;4;2). (a) Tính AB, AC. (b) Kiểm tra AB vuông góc AC không. (c) Tìm M trung điểm BC. (d) Nêu điều kiện vì sao được suy góc từ dot. **Đáp án:** AB=(4;−4;4), AC=(2;2;2), dot=8−8+8=8≠0 ⇒ không vuông; M=(2;1;3). Hai vectơ khác 0 nên định nghĩa góc có nghĩa. **Rubric /5:** (a) 2 điểm, (b) 1 điểm tính dot và 0,5 điểm kết luận, (c) 1 điểm, (d) 0,5 điểm. Tự đối chiếu, không Mastery.

**D6:** Nếu nhầm OA và điểm A, kiểm O=(0;0;0); nếu đảo cuối−đầu, lấy BA và xác nhận AB+BA=0; nếu bỏ tọa độ z, dựng hộp và kiểm chênh cao; nếu dot=0 với vectơ-không, đọc lại điều kiện góc; nếu sai trung điểm, tìm M bằng MA+MB=0 rồi đối chiếu. Mỗi lỗi có thao tác sửa trước khi quay lại câu tương tự.

</details>

### 2.7. Mặt phẳng, đường thẳng, mặt cầu Oxyz

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P07-C01` · `THPT-TOPIC-VEC-P07-P01` · `THPT-TOPIC-VEC-P07-C02` · `THPT-TOPIC-VEC-P07-P02` · `THPT-TOPIC-VEC-P07-C03` · `THPT-TOPIC-VEC-P07-P03` · `THPT-TOPIC-VEC-P07-C04` · `THPT-TOPIC-VEC-P07-P04` · `THPT-TOPIC-VEC-P07-C05` · `THPT-TOPIC-VEC-P07-P05` · `THPT-TOPIC-VEC-P07-C06` · `THPT-TOPIC-VEC-P07-P06` · `THPT-TOPIC-VEC-P07-C07` · `THPT-TOPIC-VEC-P07-P07` · `THPT-TOPIC-VEC-P07-C08` · `THPT-TOPIC-VEC-P07-P08` · `THPT-TOPIC-VEC-P07-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | PUBLIC item | D6/giới hạn |
|---|---|---|---|
| `TOPIC-VEC-P07-O01` | Pháp tuyến và phương trình mặt | C01,P01 | n khác 0, thế điểm |
| `TOPIC-VEC-P07-O02` | Khoảng cách điểm–mặt | C02,P02 | trị tuyệt đối, norm n |
| `TOPIC-VEC-P07-O03` | Đường tham số và vectơ chỉ phương | C03,P03 | u≠0, t chung |
| `TOPIC-VEC-P07-O04` | Giao tuyến đường–mặt | C04,P04 | 0,1,vô hạn nghiệm t |
| `TOPIC-VEC-P07-O05` | Quan hệ mặt–mặt | C05,P05 | cùng phương pháp tuyến chưa đủ trùng |
| `TOPIC-VEC-P07-O06` | Góc đường–mặt và mặt–mặt | C06,P06 | sin/cos/abs khác nhau |
| `TOPIC-VEC-P07-O07` | Mặt cầu từ tâm/bán kính | C07,P07 | mặt cầu ≠ khối cầu, R>0 |
| `TOPIC-VEC-P07-O08` | Vị trí mặt cầu–mặt/phân tích ứng dụng | C08,P08,W01 | chỉ sau B17; kiểm điều kiện |

| ITEM_ID mới — PUBLIC formative | Đề bài | Đáp án và giải thích |
|---|---|---|
| `THPT-TOPIC-VEC-P07-C01` | Mặt qua A(1;2;3), pháp tuyến (2;−1;1)? | 2x−y+z−3=0 do dot(n,AM)=0. |
| `THPT-TOPIC-VEC-P07-P01` | Mặt qua O pháp tuyến (1;−2;2)? | x−2y+2z=0, không có hằng số khác 0. |
| `THPT-TOPIC-VEC-P07-C02` | Khoảng cách P(1;2;3) đến x+2y+2z−9=0? | 2/3 vì tử 2, mẫu 3. |
| `THPT-TOPIC-VEC-P07-P02` | Khoảng cách A(1;−2;3) đến 2x−y+2z−6=0? | $|2+2+6-6|/3=4/3$. |
| `THPT-TOPIC-VEC-P07-C03` | Đường qua (1;0;2), chỉ phương (2;−1;3): viết tham số. | x=1+2t,y=−t,z=2+3t, t thực. |
| `THPT-TOPIC-VEC-P07-P03` | Đường qua (0;1;2), chỉ phương (1;0;−2), viết tham số. | x=t,y=1,z=2−2t; thành phần y không đổi, không chia cho 0. |
| `THPT-TOPIC-VEC-P07-C04` | d:(x;y;z)=(0;0;1)+t(1;1;−1); cắt z=0 ở đâu? | t=1 ⇒ (1;1;0), kiểm lại. |
| `THPT-TOPIC-VEC-P07-P04` | d:(x;y;z)=(1+t;2−t;3), xét quan hệ với (P):x+y+z=6. | d nằm **trong** P vì 1+t+2−t+3=6 với mọi t. |
| `THPT-TOPIC-VEC-P07-C05` | P:x+2y+3z=1,Q:2x+4y+6z=4, quan hệ? | Song song phân biệt, chia Q/2 được vế phải 2 ≠1. |
| `THPT-TOPIC-VEC-P07-P05` | P:x+y+z=1,Q:2x+2y+2z=2, quan hệ? | Trùng nhau, Q là 2×P cả hằng số. |
| `THPT-TOPIC-VEC-P07-C06` | Hai mặt pháp tuyến n1=(1;0;0),n2=(1;1;0), góc nhỏ giữa hai mặt? | 45°, cos=1/√2. |
| `THPT-TOPIC-VEC-P07-P06` | Đường hướng u=(1;0;0), mặt pháp tuyến n=(1;0;0), góc đường–mặt? | 90° vì u cùng phương n; sin=1. |
| `THPT-TOPIC-VEC-P07-C07` | Mặt cầu I(1;−2;3), R=4: phương trình? | $(x-1)^2+(y+2)^2+(z-3)^2=16$. |
| `THPT-TOPIC-VEC-P07-P07` | Mặt cầu $x^2+y^2+z^2−2x+4y−6z−2=0$: tâm/bán kính? | I(1;−2;3), $R=4$ vì hoàn bình phương cho RHS=16. |
| `THPT-TOPIC-VEC-P07-C08` | Mặt cầu x²+y²+z²=25 và mặt z=3, bán kính giao tròn? | 4, vì $r=\sqrt{25-9}$. Chỉ làm sau khi đã học mặt cầu. |
| `THPT-TOPIC-VEC-P07-P08` | Mặt cầu x²+y²+z²=9 và mặt z=4 có giao điểm thực không? | Không, khoảng cách tâm O tới z=4 là 4>R=3. |

**Written `THPT-TOPIC-VEC-P07-W01`, formative /5:** Cho A(1;2;3), mặt (P):x+2y+2z−9=0, đường d qua A theo chỉ phương u=(1;1;−1). (a) Tính khoảng cách A tới (P). (b) Tìm giao điểm d với (P), nếu có. (c) Giải thích vì sao không dùng điều kiện u·n=0 để suy d vuông góc (P). **Lời giải:** (a) $2/3$; (b) d:(1+t;2+t;3−t), thế vào P: $(1+t)+2(2+t)+2(3-t)-9=2+t=0$ ⇒ t=−2 ⇒ M(−1;0;5). (c) pháp tuyến n=(1;2;2), u·n=1+2−2=1≠0; muốn d⊥P phải có u song song n, không phải dot=0. **Rubric /5:** 1,5 điểm khoảng cách, 2 điểm lập/giải t và tọa độ, 1,5 điểm giải thích hướng–pháp tuyến và kiểm điều kiện. Không chấm lập luận tự động/Mastery.

**D6:** (1) Sai mặt phẳng vì hằng số ⇒ thay điểm đã cho; (2) nhầm pháp tuyến với chỉ phương ⇒ dựng u,n và hỏi đường có cắt mặt không; (3) viết chính tắc chia cho 0 ⇒ chuyển sang tham số; (4) nhầm trùng với song song ⇒ chuẩn hóa cả hằng số; (5) tưởng mọi mặt cắt mặt cầu đều là đường tròn ⇒ so h với R trước; (6) nhầm B14–B17 ⇒ không dùng kết quả mặt cầu trước khi học B17. Học sinh thử bài mới sau khi đọc lại tiền đề, không tái dùng câu đã xem làm kiểm tra độc lập.

</details>

<!-- TOPIC_PRACTICE_END -->

<!-- TOPIC_SELF_CHECK_BEGIN -->
## 3. Tự kiểm tra

Đây là **bài tự đối chiếu công khai**, không phải kiểm tra độc lập chấm Mastery. Hãy hoàn thành các câu trước khi nhấn **Nộp bài cuối cùng (Final Submit)**. Trong lúc làm: không có gợi ý, đáp án, kết quả đúng/sai, AI Tutor hoặc bảng lời giải. Sau Final Submit, học sinh mới được mở phần đối chiếu và đường ôn lại. Nếu đã từng làm các câu này, kết quả chỉ cho biết mức độ tự ôn, **không** phải chứng cứ năng lực độc lập.

| Mảng kiến thức | Hai câu được chọn từ đúng ngân hàng canonical (không nhân bản) | Khi sai nên quay lại |
|---|---|---|
| 1. Vectơ: độ lớn, phương và hướng | `THPT-G10-B07-P02` · `THPT-G10-B07-P06` | Kiến thức 1, Vận dụng, Luyện tập cùng dạng và D6 |
| 2. Cộng, trừ và nhân vectơ với số | `THPT-G10-B08-P02` · `THPT-G10-B09-P04` | Kiến thức 2, Vận dụng, Luyện tập cùng dạng và D6 |
| 3. Tọa độ và tích vô hướng trên Oxy | `THPT-TOPIC-VEC-P03-C02` · `THPT-TOPIC-VEC-P03-P05` | Kiến thức 3, Vận dụng, Luyện tập cùng dạng và D6 |
| 4. Đường thẳng, đường tròn và conic | `THPT-TOPIC-VEC-P04-C01` · `THPT-TOPIC-VEC-P04-P04` | Kiến thức 4, Vận dụng, Luyện tập cùng dạng và D6 |
| 5. Quan hệ hình học trong không gian | `THPT-TOPIC-VEC-P05-C02` · `THPT-TOPIC-VEC-P05-P05` | Kiến thức 5, Vận dụng, Luyện tập cùng dạng và D6 |
| 6. Vectơ và hệ tọa độ Oxyz | `THPT-TOPIC-VEC-P06-C02` · `THPT-TOPIC-VEC-P06-P05` | Kiến thức 6, Vận dụng, Luyện tập cùng dạng và D6 |
| 7. Mặt phẳng, đường thẳng, mặt cầu Oxyz | `THPT-TOPIC-VEC-P07-C02` · `THPT-TOPIC-VEC-P07-P05` | Kiến thức 7, Vận dụng, Luyện tập cùng dạng và D6 |

**Chế độ:** `CLIENT_SELF_CHECK_NO_MASTERY`. Hai câu/mảng là một lượt tự kiểm tra minh họa xuyên suốt 7 phần, không thay bộ `TOPIC_READINESS` độc lập. Bộ RD1 chính thức **42 câu** vẫn chỉ có count/SHA, owner-held ngoài GitHub; không bật chức năng hoặc công bố lời giải/rubric RD1. RELEASE chịu trách nhiệm khoá thời điểm lộ đáp án và kiểm thử Final Submit trên UI thật.

<!-- TOPIC_SELF_CHECK_END -->


### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 KNTT Tập Một:** B07 46–50, B08–B09 51–59, B10–B11 60–70 (trang in).
- **SGK Toán 10 KNTT Tập Hai:** ChVII B19–B22 30–56; cuối chương 57–59.
- **SGK Toán 11 KNTT:** Tập Một ChIV 70–103; Tập Hai ChVII 27–65.
- **SGK Toán 12 KNTT:** Tập Một ChII B06–B08 45–72; Tập Hai ChV B14–B17 29–60.
- **SBT KNTT tham khảo:** Scan SBT Toán 12 Tập Hai thiếu trang in 25, không nhận đã kiểm trang thiếu.



<!-- END_EXACT_GITHUB_CONTENT_5 -->

---
