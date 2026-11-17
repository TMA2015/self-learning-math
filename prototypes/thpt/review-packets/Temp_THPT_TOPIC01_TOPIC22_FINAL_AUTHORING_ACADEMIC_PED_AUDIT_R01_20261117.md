# Temp — Final AUTHORING audit: 22 THPT Topics (17/11/2026)

**Lane:** AUTHORING only; **standard:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18; **editorial:** [Issue #864](https://github.com/TMA2015/self-learning-math/issues/864); **defect ledger:** [#865](https://github.com/TMA2015/self-learning-math/issues/865).

**Scope:** Cross-topic source QA addendum. Does not replace the 22 already signed Q18 receipts, reclassify their independent-review status, change source/bank, or authorize merge/deploy.

## Verified on current source snapshots

1. Directly fetched 22/22 learner Markdown sources by each authoring Draft PR exact head; matched 22 actual Git blobs below.
2. Directly fetched 22/22 Q18 receipts; the academic SOURCE_BLOB in each matched the fetched source. Existing receipts record `P0=0/P1=0` in **author self-verification scope**, not 22 fresh NotebookLM verdicts.
3. Source learner-view cross-check: every Topic has Knowledge / Practice / Self-check sections (Markdown heading level varies), real learner-facing practice problems with corresponding solutions, and actual question-only public self-check. No immediately displayed key/rubric/hint found in self-check section. Public replay is `CLIENT_SELF_CHECK_NO_MASTERY`, not official independent Readiness.
4. Inspected concept-first introductions and representative worked examples in all Topic areas; independently checked selected math in quadratic inequalities, radical equations, trigonometry, CSN, limits, derivatives, integrals, triangle SSA, vector/spatial geometry, frustum, sphere-plane, permutations/combinations, event independence, Bayes and grouped descriptive statistics. **No new P0/P1 identified in this targeted examination.**
5. Limitations: **did not re-solve every public item**, did not re-open every original SGK PDF page index, and did not run live browser/mobile UI, MathJax or SVG QA. Previous S1/Q18 evidence remains separately scoped. This is not a claim of independent full-content re-review or real student UAT.

**Audit verdict:** `SOURCE_RECEIPT_SHA_PARITY_PASS=22/22`; `LEARNER_3_PARTS_PRESENT=22/22`; `TARGETED_MATH_PED_NO_NEW_BLOCKER`. Existing per-topic Q18 self-verification already records P0/P1=0 on source-locked snapshots. No historic PASS is rewritten.

## Exact source and receipt register

| Topic | Draft PR | Version | Outcomes | Learner Git blob SHA | Q18 receipt Git blob SHA | Audit |
|---|---|---|---:|---|---|---|
| CĐ01 | [#817](https://github.com/TMA2015/self-learning-math/pull/817) | R06 | 11 | `d4eafd811066997ee64de70a49c5da4a7ff26dcd` | `12868fe449d32f70fa1caf83f27be9571c4f1aae` | SOURCE/RECEIPT PARITY |
| CĐ02 | [#818](https://github.com/TMA2015/self-learning-math/pull/818) | R05 | 16 | `eb5a01b50262dc4b151b3915f5a5e4b436432374` | `19a8ce12552d94add042dc2127a054d20cd29027` | SOURCE/RECEIPT PARITY |
| CĐ03 | [#820](https://github.com/TMA2015/self-learning-math/pull/820) | R05 | 12 | `05e9675a7dca802aa9540a96a46d76d013055d8b` | `871edc307cae9e156dab528da6d98653b6686331` | SOURCE/RECEIPT PARITY |
| CĐ04 | [#822](https://github.com/TMA2015/self-learning-math/pull/822) | R05 | 18 | `c948ad9957bbcd55b416ea7ddce96a6dcdf0d799` | `436084332b4acc642db3a2a8523d91d980cf566d` | SOURCE/RECEIPT PARITY |
| CĐ05 | [#824](https://github.com/TMA2015/self-learning-math/pull/824) | R05 | 17 | `3052d5f7090f74af2eca7739047c59ed76ccda63` | `9b3c25de45fc8601f2b5c8c11c6f7dc89b015fbc` | SOURCE/RECEIPT PARITY |
| CĐ06 | [#826](https://github.com/TMA2015/self-learning-math/pull/826) | R05 | 16 | `dd3af68f681eba9a7b75040d9490815f81efdd6b` | `8f4d721ec8ab5b08baaf0a19c7aeaf2aa9cf454f` | SOURCE/RECEIPT PARITY |
| CĐ07 | [#828](https://github.com/TMA2015/self-learning-math/pull/828) | R06 | 18 | `22609934f525e6e9c2c8f1513e439c3cd4d54221` | `73fc766c9bea00be48e25d0514548e12fa783f60` | SOURCE/RECEIPT PARITY |
| CĐ08 | [#829](https://github.com/TMA2015/self-learning-math/pull/829) | R05 | 18 | `a33d1e6a20dba1dc7861097e231906aff2938c02` | `3285d8d9db6882e798995d92a0d8f83ce592d8e9` | SOURCE/RECEIPT PARITY |
| CĐ09 | [#831](https://github.com/TMA2015/self-learning-math/pull/831) | R05 | 32 | `8222107d717f7d02b845f79ccdd154e8dbe71cc6` | `bce770e351460d9d01d7567332aed489bc68aa4d` | SOURCE/RECEIPT PARITY |
| CĐ10 | [#833](https://github.com/TMA2015/self-learning-math/pull/833) | R05 | 36 | `68d3ccd180162c0b850c7e419a5098982d3785a0` | `cdf1356b3bedc5c3a246464f34600ed7ec99579a` | SOURCE/RECEIPT PARITY |
| CĐ11 | [#834](https://github.com/TMA2015/self-learning-math/pull/834) | R05 | 22 | `7d8eac917be4f7688a8a718e54cce4a84bc055ef` | `c6df9cdc86b8f3df9d163e8c6e4c16a6e7d48c15` | SOURCE/RECEIPT PARITY |
| CĐ12 | [#840](https://github.com/TMA2015/self-learning-math/pull/840) | R03 | 12 | `e74f32b1092d571af0091174a55104e7d3bec5b5` | `d8ad3986da4776260c950cca337e0407da015252` | SOURCE/RECEIPT PARITY |
| CĐ13 | [#841](https://github.com/TMA2015/self-learning-math/pull/841) | R03 | 16 | `7f3e90e5eadcbaa1dc7b49cd6d5136f6dbf61e22` | `bf040651f959e2559c37662caeb66d31d68b6bf9` | SOURCE/RECEIPT PARITY |
| CĐ14 | [#843](https://github.com/TMA2015/self-learning-math/pull/843) | R02 | 23 | `8f61c67a11dd3e2869cbd71dbb279bdcfdd92bf3` | `c064ed1ba8e2c88318e3acac2b78fccb05ca9717` | SOURCE/RECEIPT PARITY |
| CĐ15 | [#846](https://github.com/TMA2015/self-learning-math/pull/846) | R04 | 22 | `581ff0b0c019a705d36f306d7d5b0db38d185c0b` | `6b0efa57a177160d2a9c2d9570f0108830683e56` | SOURCE/RECEIPT PARITY |
| CĐ16 | [#848](https://github.com/TMA2015/self-learning-math/pull/848) | R03 | 21 | `0adf45aa8d776634d66f5c8e57b1c86ad77c8ed2` | `61984089e3108ccf7fb1ef72123ee2c54c699d82` | SOURCE/RECEIPT PARITY |
| CĐ17 | [#853](https://github.com/TMA2015/self-learning-math/pull/853) | R02 | 12 | `7cfc1c44d8f8aa722118d945900290fd560b621b` | `5d55b6a38bf5bb4e81d099e05635001876c2a90a` | SOURCE/RECEIPT PARITY |
| CĐ18 | [#855](https://github.com/TMA2015/self-learning-math/pull/855) | R04 | 40 | `41daf40a3b639a3ef35e129099525137a05b1848` | `5262fd454346801b050b5eb4f3dc407bc99d3530` | SOURCE/RECEIPT PARITY |
| CĐ19 | [#858](https://github.com/TMA2015/self-learning-math/pull/858) | R09 | 14 | `2b46a2c92004f2c030d030e2b2021a34157bc95d` | `55bc391995cccdf0ce66b96ebfa8840c0148c075` | SOURCE/RECEIPT PARITY |
| CĐ20 | [#860](https://github.com/TMA2015/self-learning-math/pull/860) | R11 | 17 | `74e758075d17e98649d9dd08709b523e8a782b63` | `4e6133b77eeaf1d38394d1e4d6f8058d421fd763` | SOURCE/RECEIPT PARITY |
| CĐ21 | [#863](https://github.com/TMA2015/self-learning-math/pull/863) | R05 | 8 | `65938a700e0da630694e9cbb6e636d337e67aeb5` | `aa3e00f55eb8f6930e23e9b15bbba3ba2d8e972a` | SOURCE/RECEIPT PARITY |
| CĐ22 | [#812](https://github.com/TMA2015/self-learning-math/pull/812) | R09 | 39 | `b5713f0c2a1aa6a9fa7a7d63f6e6878bdf8d338b` | `d311899df9a71fc41683df85f6fbd49db30404aa` | SOURCE/RECEIPT PARITY |

Outcome counts are from canonical Topic PR/receipt. CĐ20 outcomes use `PRIMARY_OUTCOME: TOP20-Oxx`, CĐ22 source uses SGK `OUTCOME_REF` rather than fictional TOP22-Oxx IDs. Fetch paths from each PR body on its own exact HEAD; these 22 files are **not claimed to exist together on main**.

## Remaining scope-specific notices (do not mislabel as fresh academic P1)

- **CĐ07** (Q17, P2): outer Knowledge heading `### 1. Kiến thức` differs from Practice/Selfcheck `## 2`/`## 3`; early source HTML comment still says Q18 pending but current R06 receipt is signed on matching SHA. Check learner-page routing/heading during intake; do not reopen immutable math receipt for old comment.
- **CĐ08–CĐ11** (Q18 metadata, P2): early historical candidate/review-pending HTML comments persist in learner source, while matching current Q18 receipts are signed. Hygiene only unless shown to cause a runtime defect.
- **CĐ13 L98** (Q01/Q15/R1 dependency): canonical G10 public source blob `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9` is on sibling Draft #750, not CĐ13 PR tree. RELEASE must verify source exists with same SHA on combined HEAD or HOLD that integration. See Issue #865.
- **CĐ19** (P2 learner prose): bold `Mạch xuyên suốt — Hội chợ của lớp` remains in Knowledge R09. Recheck editorial readability; retain useful context and avoid visible technical labels, without treating this as an unproven math error.
- **CĐ22 L08** (Q01/P2): R09 receipt itself records `P2=1` for S1 PDF page-index not directly reopened this round; reviewer R2 wrong chapter metadata reconciled against historical S1 receipts. Do not claim a new direct PDF scan.
- **Q16 across all 22:** public self-check replay is not protected held-out Topic Readiness and does not grant Mastery. Actual Final Submit/readiness/browser security remains an independent RELEASE gate. No RD1 protected content on GitHub.

**Conclusion:** Authoring Q18 self-signoffs are source-consistent and targeted global regression found no new P0/P1; finish any actual evidence-backed delta within affected source scope, not a blanket rewriting of all 22. Issue #865 remains open for genuine outstanding evidence/intake dependency. **Next distinct AUTHORING work item: Math Lab model registry and G0–G4 QA (#880). NO MERGE/DEPLOY.**


---

<!-- OWNER_LANGUAGE_ADDENDUM_20261117 -->
## AUTHORING addendum · 17/11/2026 — đọc ngôn ngữ như học sinh, tham chiếu chỉ cục bộ

**Owner bổ sung:** Với “điều này”, “nó”, “cách đó”, “trường hợp trên”, “hình trên”, v.v., chỉ dùng khi đối tượng đã nêu **trong cùng mục và ở câu/đoạn ngay trước hoặc cùng câu**. Không bắt học sinh quay lại mục, trang hay bài khác để hiểu một đại từ hoặc hình được ngụ ý. Khi cần ôn nơi khác, gọi **đích danh khái niệm/tiêu đề** và cho lối điều hướng rõ ràng, không dùng chỉ từ mơ hồ. Áp dụng trong Q03/Q08/Q10–Q14, #864 mục 3/6/11/13 và defect ledger #865; **không tạo Q19/checklist mới**.

**Đã kiểm chứng trong lượt này:** Fetched/compared **22/22 exact learner Git blobs** trong bảng trên; sàng lọc toàn văn theo mẫu lời dẫn/tham chiếu, sau đó đọc trực tiếp các đoạn nghi vấn và ngữ cảnh sát trước/sau. Đây **chỉ là FIRST PASS + TARGETED CLOSE READING**, **không phải** đã đọc và nghiệm thu câu-văn-từng-bài cho toàn bộ 22 Chuyên đề. Không gán LANGUAGE_PASS 22/22; 22 nguồn Q18 cũ giữ nguyên theo immutable SHA. Kiểm tự động chỉ phát hiện ứng viên, kết luận dựa trên văn cảnh thật.

| Mã | Nguồn/locus đọc trực tiếp | Triệu chứng người học | Qxx / mức | Đề xuất xử lý / trạng thái |
|---|---|---|---|---|
| LANG-01 | CĐ01 R06 blob `d4eafd8…`, L177–181 | Đầu mục 2 nói “Ở phần trước”, bắt người đọc truy mục 1 để hiểu câu mở đầu | Q03/Q10 P2 | Viết mục 2 tự đủ: giới thiệu trực tiếp đối tượng thỏa điều kiện và phép toán tập hợp; **OPEN** |
| LANG-02 | CĐ07 R06 blob `2260993…`, L40–46 | Đầu mục 1.2 “Từ miền chỉ số…” phụ thuộc tên/ý mục 1.1, chưa tự giới thiệu dãy và n | Q03/Q10 P2 | Mở bằng “Với một dãy có các số hạng \\(u_n\\) được đánh số theo \\(n\\), …”; **OPEN** |
| LANG-03 | CĐ08 R05 blob `a33d1e6…`, L350–362 | “Ngay tại hình này” đặt **trước** hình; “Điều này khác ví dụ … ở trên” không rõ chủ ngữ so sánh | Q03/Q12 P2 | Giới thiệu hai nhánh \\(f(x)\\) trực tiếp, đặt hình sát lời đọc và so rõ hai ví dụ gián đoạn nhảy; **OPEN** |
| LANG-04 | CĐ09 R05 blob `8222107…`, L221–227 | Đầu mục 2.3 “độ dốc ấy” trỏ sang 2.1–2.2; câu thiếu đối tượng ngay tại mục 2.3 | Q03/Q10/Q13 P2 | Viết “Khi \\(s(t)\\) là tọa độ theo thời gian, \\(s'(t)\\) là vận tốc có hướng…”; **OPEN** |
| LANG-05 | CĐ13 R03 blob `7f3e90e…`, L1/L16–30 và các mục tương tự | Heading hiện “R03 student-first”, 48 dòng mẫu “Vì sao cần học / Hiểu bản chất / Tự thử / Gặp lỗi ở đâu”, làm lời giảng thành khung checklist | Q03/Q09–14/#864 mục 3/8/11 **P1 biên tập** | Biên soạn lại thành văn xuôi khám phá→bản chất→Ví dụ→Vận dụng→Đối chiếu đúng nhãn đã duyệt; **OPEN, cần tự QA theo affected outcomes, không coi receipt R03 đã xét delta mới** |
| LANG-06 | CĐ18 R04 blob `41daf40…`, L700–707 | Đầu mục 5 “Tiếp tục chuyến bay đã biết” trỏ xa; khẳng định \\(t=1\\) giây trong khi **ngay mục này** chưa định nghĩa t là thời gian và đơn vị của vectơ v | Q03/Q04/Q10 **P1 ngữ cảnh/đơn vị** | Tự giới thiệu bài toán drone, t tính giây và v có đơn vị tọa độ/giây (nếu đúng với S1/mô hình), tránh gọi là “hướng” rồi suy đơn vị thời gian; **OPEN / S1 MODEL VERIFY** |
| LANG-07 | CĐ19 R09 blob `2b46a2c…`, L7/70/76/93/388/504, tám câu kết giống nhau | Lời dẫn quá dài, “mô hình A/B” mơ hồ, bước nhân thiếu phân biệt số cách n cố định; “vừa học/đã học” trỏ mục khác; câu cuối lặp như mẫu | Q03/Q08/Q10/Q13/14 P1–P2 | Đã tạo **R10 candidate trên Draft PR #883**: sửa văn xuôi và điều kiện toán, giữ Practice/Selfcheck byte-identical; **R10 NOT_CONTENT_READY, Q15 T02 canonical và Q18 targeted pending** |
| LANG-08 (PASS-example) | CĐ16 R03 blob `0adf45a…`, L15–21 | “mô tả bằng lời ở trên” có hình và đoạn mô tả **ngay trước trong cùng mục** | Q12 | **Không phải lỗi tham chiếu** theo owner; giữ nguyên đoạn này nếu không có vấn đề khác |

**Phân biệt quan trọng:** Lời điều hướng minh bạch “Xem hình Venn ở mục Kiến thức 2.1” như CĐ20 R11 L808 là hướng **khắc phục D6 có đích rõ**, không phải đại từ ngụ ý buộc người đọc tự đoán. Chỉ chỉnh khi đoạn đang đọc không tự đủ thông tin cần thiết.

**Trạng thái kiểm toán ngôn ngữ toàn bộ:** `SOURCE_SCAN=22/22`; `TARGETED_MANUAL_FINDINGS=7 topic cases + 1 acceptable-reference control`; `FULL_LESSON_SENTENCE_BY_SENTENCE_PASS=NOT_ESTABLISHED`. Phần sửa R10 **không được** ghi là R09 đã sửa; Q15/T02 và Q18/V2/ready/REGISTER phải đóng trên bản nguồn mới trước bất kỳ CLAIM CONTENT_READY. PR #882 vẫn Draft source-only, không merge/deploy.

---

<!-- FULL_SCOPE_AUTHORING_RECHECK_R02_20261117 -->
## R02 · 17/11/2026 — kiểm toán toàn bộ Chuyên đề, không chỉ ngôn ngữ

**Phạm vi:** Trực tiếp đọc lại **22/22 learner sources**, từng nguồn ở ba phần Kiến thức/Luyện tập/Tự kiểm tra, xác định LESSON_ID/OUTCOME_ID nếu source có khai báo, kiểm ví dụ, Vận dụng, câu luyện thật, đáp án/lời giải tự mở, hình, nguồn và Tự kiểm tra công khai. Tìm đường khắc phục D6 có trỏ đúng đích và các mã/metadata xuất hiện trong lời học sinh. Tự đọc mẫu toán ở cả 22 mảng và kiểm lại các kết quả cụ thể; chưa tái giải mọi câu canonical hay mở lại trực tiếp từng trang SGK/SBT S1. Đây là **learner-source audit và manual targeted Academic/PED audit**, không phải QA browser/MathJax thật.

### Ma trận kiểm tra theo 22 Chuyên đề

| Chuyên đề | Outcome theo source | Ba phần học | Toán/chuỗi tự học đã soi mẫu | Khiếm khuyết và trạng thái mới |
|---|---:|---|---|---|
| CĐ01 | 11 | Có đủ | Lượng từ, phủ định, tương đương | **LANG-01 P2:** L181 mở mục 2 bằng “Ở phần trước…”; phải nêu đối tượng ngay tại mục |
| CĐ02 | 16 | Có đủ | Dấu tam thức, nghiệm biên | **P2 Q08:** L201 hướng “Written W01” thay vì số/tên bài học sinh thấy |
| CĐ03 | 12 | Có đủ | Hai căn, miền, nghiệm thử lại | **P1 Q08/PED6:** 11 D6 tại L65–369 nhắc ADD03/Pxx/Cxx/Wxx, nhưng Practice hiển thị “Bài 1, Bài 2…”; không tìm được đích từ nhãn |
| CĐ04 | 18 | Có đủ | Logarit, đổi cơ số, miền dương | **P1 Q08/PED6:** 9 D6 tại L101–543 dùng M10/Pxx/B19-Cxx; **P2 Q03:** L206 dùng b>0 sau đẳng thức cơ số a, ký hiệu không liền mạch |
| CĐ05 | 17 | Có đủ | Miền, biến đổi giá trị tuyệt đối và đồ thị | **P1 Q08/PED6:** 16 D6 L67–519 trỏ P03/P04… nhưng Practice chỉ đánh “Bài 1–38” |
| CĐ06 | 16 | Có đủ | Chu kỳ, tan/cot, điểm loại | **P1 Q08/PED6:** 15 D6 L69–493 chứa mã THPT-G11-.../THPT-TOP06-... thay tên/số bài thật |
| CĐ07 | 18 | Có đủ | Dãy số, cấp số nhân, q=0 | **LANG-02 P2:** L40–46 mở mục 1.2 “Từ miền chỉ số…” mà chưa tự giới thiệu lại đối tượng |
| CĐ08 | 18 | Có đủ | Giới hạn một phía và phân loại gián đoạn | **LANG-03 P2:** L350–362 nói “Ngay tại hình này” trước hình, so sánh “ở trên”; L331 “Như M06” lộ mã |
| CĐ09 | 32 | Có đủ | Dấu vận tốc–gia tốc, tốc độ | **LANG-04 P2:** L225 “độ dốc ấy” trỏ mục khác; L1699 “dùng P15” không tương ứng nhãn học sinh |
| CĐ10 | 36 | Có đủ | Miền rời, cực trị/biên tối ưu | **P1 Q03/Q15:** L1026 lộ “item_id W02”; L2512–2516 heading Q15/Q16 invariants và metadata kỹ thuật nằm trong disclosure Lời giải; Mastery notes khác P2 |
| CĐ11 | 22 | Có đủ | Diện tích, đĩa/vành khăn và thể tích | **P1 Q03/Q15:** L2334–2338 heading Q15/Q16 identity và metadata RD1/Mastery nằm trong disclosure Lời giải |
| CĐ12 | 12 | Có đủ | SSS/SSA, cos và diện tích | **P2 Q03:** L1 tiêu đề hiển thị R03 learner-first |
| CĐ13 | 16 | Có đủ | Độ dời, vectơ và tích vô hướng | **P1 Q03/Q14/PED:** 16 nhãn “Tự thử trước luyện tập” thay Vận dụng, 32 khối “Vì sao cần học”/“Hiểu bản chất” giống checklist; L1 lộ R03 student-first; L394 lộ Draft PR #750/blob trong Practice; Q15/R1 dependency #750 vẫn mở |
| CĐ14 | 23 | Có đủ | Đường thẳng, đường tròn, tiệm cận | Chưa phát hiện blocker mới trong phần toán và learner path đã soi; **không** suy full mathematical PASS |
| CĐ15 | 22 | Có đủ | Giao tuyến, hai mặt song song | Chưa phát hiện blocker mới trong mẫu đã soi |
| CĐ16 | 21 | Có đủ | Góc giữa hai đường/mặt và nhị diện | Chưa phát hiện blocker mới trong mẫu đã soi |
| CĐ17 | 12 | Có đủ | Khoảng cách vuông góc, thể tích chóp | Chưa phát hiện blocker mới trong mẫu đã soi |
| CĐ18 | 40 | Có đủ | Phương trình mặt cầu, đường–mặt | **P1 Q03/Q10:** L702 mở “Tiếp tục chuyến bay đã biết”, kết luận t=1 “giây” dù chưa khai báo đơn vị t/v trong cùng mục; **P2:** 24 lời kỹ thuật “không tự động ghi Mastery” lặp trong Written Practice |
| CĐ19 | 14 | Có đủ | Quy tắc đếm, hệ số nhị thức, tăng trưởng | **P2 Q03:** L580–926 lặp “nguồn canonical” học sinh không cần. R09 bất biến; Draft R10 #883 sửa một số đoạn nhưng **Q15 T02 và Q18 vẫn HOLD**, chưa CONTENT_READY |
| CĐ20 | 17 | Có đủ | Độc lập, xung khắc, biến cố đối | **P1 Q08/PED6:** L782/808/836 trỏ các bài Luyện tập 2.8/2.13/2.14/2.16 **không tồn tại**; nhóm 2 thực có 2.1–2.7 |
| CĐ21 | 8 | Có đủ | Xác suất có điều kiện, toàn phần, Bayes | **P1 Q08/PED6:** L48–315 và L493/523/547 trỏ Kiến thức 4–8 (thực chỉ có nhóm 1–3) và Luyện tập 2.3–2.8 (thực nhóm 2 chỉ 2.1–2.2) |
| CĐ22 | 39 | Có đủ | IQR ghép nhóm, nội suy, ngoại lệ | **P2 Q03:** lời kỹ thuật “không ghi Mastery” lặp trong Practice L999/1013/1027/1041/1055/1463/1477; Q01 S1 PDF-index P2 còn theo receipt cũ |

**Diễn giải coverage:** Có ba phần và số outcome khớp bản hiện hành không phải là PED PASS. Ở các nguồn dùng metadata/marker khác LESSON_ID/OUTCOME_ID (CĐ20–22), lấy outcome từ Q18/V2 chính thức, không báo sai là “0 outcome”. Giữ kết quả source–receipt SHA parity đã xác minh 22/22 trong R01; không trộn R10 candidate vào R09 signed.

### Thứ tự xử lý, trong đúng Q01–Q18 và #864/#865

1. **P1 Q08/PED6:** CĐ03–06 và CĐ20–21 phải sửa tên/nơi trỏ của đường D6 theo nhãn bài thực tế, kiểm toàn bộ D6 bị ảnh hưởng, không để internal ID thay cho điều hướng được.
2. **P1 Q03/Q14:** CĐ10–11 loại metadata Q15/Q16 khỏi phần học sinh nhìn thấy; CĐ13 thay mẫu checklist bằng diễn giải tự nhiên và nhãn Vận dụng/Đối chiếu, bỏ branch/SHA khỏi lời học sinh.
3. **P1 ngữ cảnh/toán:** CĐ18 làm bài toán drone tự đủ dữ kiện và đơn vị, kiểm mô hình S1; CĐ04 chỉnh ký hiệu cơ số nhất quán. Những thay đổi ảnh hưởng toán/D6/item phải phân loại delta đúng phần, không gọi sửa metadata là toán PASS.
4. **P2:** sửa các câu tham chiếu xa, mã kỹ thuật, mô tả quy trình và vị trí hình; không sửa đoạn đang rõ chỉ để đồng dạng.
5. **Bảo toàn nghiệm thu:** các source/receipt/V2/ready/REGISTER signed Rxx giữ nguyên; bản candidate mới cần kiểm delta theo outcome/item, Q15/Q16/canonical và Q18 nguồn mới trước khi chuyển CONTENT_READY. Không giả có direct S1 page re-scan, full item math re-solving, real browser/AP QA hoặc independent NotebookLM review.

**Verdict R02:** SOURCE_SCAN=22/22, TARGETED ACADEMIC/PED AUDIT PER TOPIC, **NEW P1/P2 FINDINGS OPEN**. KHÔNG kết luận 22/22 PED PASS hay 22/22 LANGUAGE PASS. AUTHORING ONLY; NO MERGE/DEPLOY.


---

<!-- FULL_AUDIT_R03_EVIDENCE_LOCK_20261117 -->
## R03 · Chốt vòng kiểm toán toàn diện 22/22 nguồn: có verdict và lỗi còn mở

**Kết luận phân biệt rõ:** AUDIT_SOURCE_RECHECK_COMPLETED_WITH_OPEN_DEFECTS — đã kết thúc việc kiểm chứng nguồn/chuỗi học/ID và lập defect ledger đối với 22 bản học liệu hiện có, **không phải** CONTENT_READY mới, FULL_ACADEMIC_PASS hay PED_PASS. R03 cập nhật kết luận R01/R02 trong cùng tài liệu, không sửa chữ ký hoặc trạng thái lịch sử của 22 Q18 receipt.

### Bằng chứng kiểm toán đã thực hiện, không suy rộng

1. **Q18:** đọc lại trực tiếp đúng 22/22 learner Git blobs và 22/22 Q18 receipt Git blobs; tất cả receipt chứa source SHA tương ứng và chuẩn v3.1.0. Đây là AUTHOR_SELF_VERIFIED lịch sử, **không** phải 22 verdict mới từ NotebookLM; CĐ22 receipt ghi P2=1 về PDF page-index S1.
2. **Q02/Q03/Q04/Q08/PED:** kiểm trong nguồn tất cả các outcome marker phần Kiến thức CĐ01–CĐ19: **376** đơn vị có Ví dụ, Đề bài (CĐ12–13 dùng nhãn kép), Lời giải, Vận dụng hoặc Tự thử và khối Đối chiếu. Đánh dấu riêng lỗi chất lượng như dẫn giải thành checklist, mô hình thiếu đơn vị, đường khắc phục sai. CĐ20 có 17 outcome trải trên 9 mảng, CĐ21 8 outcome/8 mảng, CĐ22 39 outcome/13 mảng; **không** tự áp quan hệ một mảng = một outcome.
3. **Q05/Q15:** kiểm marker Practice trong 22 learner sources có tổng **1.478 bản ghi ID**; không tìm thấy trùng ID **trong từng phần Practice**. Kiểm **338 public-self-check placements** với đúng Practice item_id: không phát hiện thay đổi nội dung đề, CĐ15 có lỗi nhãn kép nhưng giữ nguyên dữ kiện toán. **Chưa** so từng key/solution/rubric với mọi original bank hoặc kiểm trùng trên toàn repository, nên chưa cấp Q15 full PASS.
4. **Q16/Q17:** cả 22 nguồn có ba phần Kiến thức/Luyện tập/Tự kiểm tra; cả 22 public self-check không đặt key/hint/rubric hay lời giải mở sẵn trong chính phần question-only. Đây là tự ôn PUBLIC REPLAY, chỉ CLIENT_SELF_CHECK_NO_MASTERY, **không** là đánh giá độc lập, Final Submit hay TOPIC_READINESS.
5. **Q07/Q12:** tất cả ảnh Markdown trong 22 source đều có alt khác rỗng; cặp delimiter MathJax inline/display cân bằng về số lượng. Đã mở SVG và đọc label/số liệu mẫu CĐ15/20/21/22 (11 asset), kiểm hình CĐ21 gắn với Ví dụ đã giải khác đề Vận dụng; liên kết mô hình HTML tương tác CĐ20 tồn tại (blob 117237ff935fdef0f5ce7ad8ec99a664f5f980b6). Không suy QA mọi SVG, render, chức năng website hoặc MathJax browser đã PASS.
6. **Q01/Q04 toán:** đối chiếu phép tính, điều kiện và lời giải mẫu ở cả 22 lĩnh vực (log/miền; lượng giác; q=0; giới hạn; dấu vận tốc/gia tốc; tối ưu; tích phân hình học; SSA; vectơ; hình không gian; xác suất; nội suy nhóm) và kiểm thêm một số canonical SGK original blobs. Chưa tái giải mọi câu trong 1.478 bản ghi, chưa tự mở lại toàn bộ SGK/SBT PDF S1 và không giả đã có independent full mathematical review. **P0_NOT_PROVEN_ZERO_GLOBAL**, không phát hiện P0 trong mẫu đã kiểm.

### Bảng kết luận theo toàn bộ 22 Chuyên đề

| Topic | Outcome | Practice / Public replay | Phát hiện kiểm toán trên source blob R01 | Verdict cho phạm vi lỗi mới |
|---|---:|---:|---|---|
| CĐ01 | 11 | 24 / 11 | LANG-01: L181 “Ở phần trước”, tham chiếu vượt mục | P2_REVISE |
| CĐ02 | 16 | 38 / 16 | L201 “Written W01” không phải nhãn bài học sinh | P2_REVISE |
| CĐ03 | 12 | 31 / 12 | ACA-01: L65–369, 11 D6 dùng mã ADD/P/W/C thay tên bài thật | **P1_Q08_PED6_HOLD** |
| CĐ04 | 18 | 75 / 18 | ACA-02: L101–543, 9 D6 dùng mã M/P/B; L206 ký hiệu cơ số lệch | **P1_Q08_PED6_HOLD**, P2 Q03 |
| CĐ05 | 17 | 38 / 17 | ACA-02: L67–519, 16 D6 dùng raw Pxx | **P1_Q08_PED6_HOLD** |
| CĐ06 | 16 | 66 / 16 | ACA-02: L69–493, 15 D6 dùng mã THPT-G11/TOP | **P1_Q08_PED6_HOLD** |
| CĐ07 | 18 | 69 / 18 | LANG-02: mục 1.2 “Từ miền chỉ số…” tham chiếu mục khác | P2_REVISE |
| CĐ08 | 18 | 58 / 18 | LANG-03: L350–362 nói “hình này” trước hình; L331 lộ M06 | P2_REVISE |
| CĐ09 | 32 | 108 / 32 | LANG-04: L225 “độ dốc ấy” trỏ xa; L1699 lộ P15 | P2_REVISE |
| CĐ10 | 36 | 120 / 36 | ACA-03: L1026 và L2512–16 metadata Q15/Q16/Anchor/ID hiện trong disclosure Lời giải | **P1_Q03_Q15_HOLD** |
| CĐ11 | 22 | 116 / 22 | ACA-03: L2334–38 metadata identity/RD1/Mastery ở trong disclosure Lời giải | **P1_Q03_Q15_HOLD** |
| CĐ12 | 12 | 34 / 12 | L1 title phơi “R03 learner-first” | P2_REVISE |
| CĐ13 | 16 | 52 / 16 | ACA-04: 16 nhãn “Tự thử” thay Vận dụng, checklist lý thuyết, L394 lộ Draft #750/blob; dependency #750 | **P1_Q03_Q14_HOLD**, R1 dependency |
| CĐ14 | 23 | 87 / 23 | Chưa phát hiện P1 mới từ phần nguồn/toán đã soi | NO_NEW_DEFECT_OBSERVED, not blanket PASS |
| CĐ15 | 22 | 67 / 8 | **NEW P2:** selfcheck L1544–65 có “Câu 2. Bài 6.”; Câu 1 lược tiêu đề “Đường và mặt.”, vẫn tự đủ dữ kiện | P2_LEARNER_LABEL |
| CĐ16 | 21 | 65 / 8 | Chưa phát hiện P1 mới từ phần nguồn/toán đã soi | NO_NEW_DEFECT_OBSERVED |
| CĐ17 | 12 | 37 / 8 | Chưa phát hiện P1 mới từ phần nguồn/toán đã soi | NO_NEW_DEFECT_OBSERVED |
| CĐ18 | 40 | 207 / 12 | ACA-07: L702 drone thiếu t là thời gian và đơn vị; Practice lặp thông tin kỹ thuật Mastery | **P1_Q03_Q04_Q10_HOLD**, P2 |
| CĐ19 | 14 | 42 / 7 | R09 O02/T02 chưa giải thích rõ điều kiện m×n cố định và D6 “mô hình A/B”; Draft R10 #883 sửa nhưng chưa source-lock Q15/Q18; lộ metadata P2 | **P1_R10_DELTA_C_HOLD** |
| CĐ20 | 17 | 20 / 11 | ACA-05: L782/808/836 D6 trỏ Luyện tập 2.8/2.13/2.14/2.16 không có heading đó; mapping đúng đã ghi #865 | **P1_Q08_PED6_HOLD** |
| CĐ21 | 8 | 11 / 8 | ACA-06: D6 trỏ Kiến thức 4–8 và Luyện tập 2.3–2.8 không đúng số heading thực; mapping 8 outcome đã ghi #865 | **P1_Q08_PED6_HOLD** |
| CĐ22 | 39 | 114 / 9 | ACA-08: 7 hướng dẫn chứa metadata Mastery ở Practice, một hình hộp đặt sau Vận dụng L190–194; receipt Q01 S1 PDF-index P2 | P2_Q03_Q12 + Q01 EVIDENCE_LIMIT |

**Chú ý cách đếm:** 1.478 là số marker Practice được rà trên mỗi file, chưa chứng minh 1.478 unique toàn repo; 338 là placement câu tự ôn công khai. 440 là số outcome theo register, **không** khẳng định 440 kết quả học tập đã được giải độc lập hết. Không có phép tính số lượng nào thay QA sâu và bằng chứng S1 theo từng outcome.

### Verdict cuối của vòng audit — không đóng nhầm acceptance

- **11 Topic có P1 mới chưa xử lý:** CĐ03–06, CĐ10–11, CĐ13, CĐ18–21 (bao gồm CĐ19 R09/R10). Không tự huỷ bỏ các Q18 receipt hay CONTENT_READY lịch sử: ghi đây là **AUTHORING_DEFECT phát hiện mới**, chỉ đóng trên candidate SHA sau sửa, đối chiếu affected outcome/item và phân loại DELTA theo chuẩn.
- **Các P2:** CĐ01,02,07–09,12,15,22, và một phần CĐ04/18/19. **Chưa thấy P1 mới ở CĐ14,16,17** trong phạm vi đã đọc nhưng không suy Academic/PED PASS cho toàn item bank.
- **Hướng sửa:** D6 điều hướng đến tên mục/bài đang hiển thị thật (CĐ03–06,20–21); bỏ metadata trong nội dung learner (CĐ10–11/13/18/19/22); CĐ18 nêu t, đơn vị, mô hình; CĐ19 kiểm lại quy tắc nhân và canonical T02; sửa tham chiếu cục bộ và nhãn/placement hình. Phân loại DELTA_A/B/C đúng phần, giữ một item_id canonical, không đưa nội dung RD1 kín lên GitHub.
- **Chứng cứ còn thiếu ngoài phạm vi**: giải lại toàn bộ câu/đáp án/rubric, đối chiếu trực tiếp trang in–PDF SGK/SBT S1 ở nơi còn bất định, 100% SVG visual accuracy, browser UI/MathJax và bảo vệ Final Submit. Các mục chưa chứng minh **UNVERIFIED_IN_THIS_ROUND**, không được gọi PASS.
- **Kết thúc:** đây là **báo cáo audit nguồn toàn phạm vi 22/22 với defect verdict và checkpoint đã khóa**. Chưa được nghiệm thu bản source sửa nào thành CONTENT_READY mới cho tới khi P1=0 trên affected scope, Q18 receipt/SHA + V2/ready/REGISTER thống nhất. Không merge/deploy/release.


---

<!-- TOPIC_R04_DELTA_STAGING_20261117 -->
## R04 · Đã sửa nguồn tại 10 Draft candidate, còn HOLD Q15/Q18 (17/11/2026)

**Trạng thái:** 10 file learner candidate đã tạo thật trên nhánh tách từ Topic HEAD; đã refetch và khóa chính xác các Git blob SHA dưới đây. **Không thay source/Q18 lịch sử, không merge/deploy, không CONTENT_READY mới.** Mỗi dòng trạng thái = STAGED_FIX + TARGETED_Q15_Q18_RECHECK_PENDING. Chỉ được FIXED sau khi kiểm lại đường học sinh thực đi và đúng canonical snapshot.

| CĐ | Lỗi Q/PED cần đóng | Draft sửa | Old Rxx signed blob | Candidate source blob đã kiểm |
|---|---|---|---|---|
| 03 | Q08/PED6: 11 đường D6 raw ID | [#888](https://github.com/TMA2015/self-learning-math/pull/888) | 05e9675a7dca802aa9540a96a46d76d013055d8b | d258b880fe695a152d677061a7d307cf262f2862 |
| 04 | Q08/PED6: 9 D6; Q03: cơ số phải a>0 | [#890](https://github.com/TMA2015/self-learning-math/pull/890) | c948ad9957bbcd55b416ea7ddce96a6dcdf0d799 | 9b0a9bf090cd8e13bd3807030bb326c0756bd6e8 |
| 05 | Q08/PED6: 16 D6 raw P/W ID | [#889](https://github.com/TMA2015/self-learning-math/pull/889) | 3052d5f7090f74af2eca7739047c59ed76ccda63 | 663c5423070397ba5e389b5f307598664ab28808 |
| 06 | Q08/PED6: 15 D6 THPT-G11/TOP refs | [#891](https://github.com/TMA2015/self-learning-math/pull/891) | dd3af68f681eba9a7b75040d9490815f81efdd6b | f4ede20e309b02705567bd42390912ec415a84c8 |
| 10 | Q03/Q15: Anchor/Q15/Q16 metadata trong Lời giải | [#886](https://github.com/TMA2015/self-learning-math/pull/886) | 68d3ccd180162c0b850c7e419a5098982d3785a0 | 069f4f52eb7ae88ac609f11cfa933ec09c2b08d5 |
| 11 | Q03/Q15: technical identity/Mastery trong Lời giải | [#887](https://github.com/TMA2015/self-learning-math/pull/887) | 7d8eac917be4f7688a8a718e54cce4a84bc055ef | 8017adb5616901a4f2a159d1f6179bd2a3f62e1a |
| 13 | Q03/Q14: lời giảng thành checklist, lộ branch/SHA | [#893](https://github.com/TMA2015/self-learning-math/pull/893) | 7f3e90e5eadcbaa1dc7b49cd6d5136f6dbf61e22 | 68b9732ca6bcae07f270b22f60e9d4850bbec4a6 |
| 18 | Q03/Q04/Q10: drone thiếu tham số và đơn vị | [#892](https://github.com/TMA2015/self-learning-math/pull/892) | 41daf40a3b639a3ef35e129099525137a05b1848 | af8a3529398e5f876d5c979b0d5d26df3519d6ac |
| 20 | Q08/PED6: trỏ sai heading Luyện tập | [#884](https://github.com/TMA2015/self-learning-math/pull/884) | 74e758075d17e98649d9dd08709b523e8a782b63 | 0f85e1985f47357bd4d0d56379bfd1f647470fe3 |
| 21 | Q08/PED6: Kiến thức 1–8/Luyện tập 2.1–2.8 sai heading | [#885](https://github.com/TMA2015/self-learning-math/pull/885) | 65938a700e0da630694e9cbb6e636d337e67aeb5 | 14a436e4f2eb59e307cadfb69f8f67c1bedaf881 |

### Chứng cứ và điều kiện đóng

- **CĐ03–06:** đã đọc trực tiếp cả item_id và số Bài đang hiển thị trong Luyện tập. Chuyển đúng 11/9/16/15 D6 sang số bài, kể cả Written chen giữa hoặc ký hiệu SGK rút gọn. Với bốn candidate này Practice và Selfcheck nguyên văn byte (không đổi stem/key/rubric). Riêng CĐ04 sửa ký hiệu quy tắc lũy thừa cơ số a>0, cần Q01/S1 targeted math verify.
- **CĐ10–11:** chỉ bỏ nội dung Q15/Q16/Anchor/Mastery lộ trong learner explanations; đối chiếu item ID sequence, Bài stems, công thức MathJax payload và disclosure vẫn đồng nhất.
- **CĐ13:** đã biên tập bằng văn xuôi 16 phần dẫn dắt, thống nhất nhãn Ví dụ–Đề bài–Vận dụng–Đối chiếu, đánh số 1.1–3.6 và bỏ branch/SHA learner; IDs, công thức và disclosures nguyên. Phải đánh giá thủ công lại 16 outcome Q09–Q14 và SGK G10 source dependency PR #750, không lấy đổi nhãn làm PED PASS.
- **CĐ18:** đầu mục đường thẳng được viết tự đủ với A, vectơ chỉ phương, t tham số hình học không gán đơn vị giây; kết quả giao t=1, M=(2,1,3) không đổi, Practice/Selfcheck byte-identical. Cần S1/Q18 review đúng phần.
- **CĐ20:** sửa 3 D6 Written về Bài luyện 7/8/13/14/16 và heading thực; ngoài D6 Practice byte-identical, Selfcheck byte-identical, IDs/đáp án không đổi.
- **CĐ21:** sửa 8 First Try D6 và 3 Written D6 về đúng Kiến thức 1.1–3.2, Bài luyện 1–8; ngoài 11 dòng D6 learner source byte-identical.
- **CĐ19:** Draft R10 [#883](https://github.com/TMA2015/self-learning-math/pull/883) còn Q15_T02 source-version/bank parity và Q18; **không** tự promote. Như vậy 11 Topic có P1 R03 đã có 10 candidate mới + 1 candidate CĐ19 lịch sử, nhưng **0/11 candidate CONTENT_READY**.

**Đóng P1 đúng chuẩn:** self-QA từng affected outcome, khắc phục/đi đúng D6 bằng tên bài đang thấy, kiểm Q15 canonical stem/key/solution/rubric và content_version nếu D6 đổi, Q16 giữ client-self-check/no mastery, khóa candidate SHA + đúng một receipt Q18 và V2/ready/REGISTER (chỉ khi P0/P1=0). Kiểm S1 in sách–PDF với trường hợp toán chịu ảnh hưởng; không nói MathJax/browser/AP/R đã PASS. Giữ nguyên signed snapshots Rxx. NO MERGE/DEPLOY.


---

<!-- TOPIC_R05_TOPIC19_T02_VERSION_20261117 -->
## R05 · CĐ19: khóa phiên bản item T02 trong candidate R10 (17/11/2026)

- Baseline R09 signed source blob 2b46a2c92004f2c030d030e2b2021a34157bc95d vẫn giữ nguyên.
- Candidate [Draft #883](https://github.com/TMA2015/self-learning-math/pull/883) đã cập nhật phiên bản của đúng THPT-TOP19-T02: CONTENT_VERSION TOP19-R03 → TOP19-R10 để nhận diện stem và D6 thay đổi. **Git source blob mới = 37612a3fb8d804efa6dd4f65ddd22d90bf2772ae**, commit 28bc108f49b76f981025081638265b82f0a5862f. 13 First Try item khác vẫn TOP19-R03; tổng 14 item_id unchanged; 56 disclosure open/close; public selfcheck question-only; toàn Practice/Selfcheck giữ đúng R09.
- Q15 canonical R09 metadata còn khai owner TOPIC_R08_CANONICAL cho T02; **chưa** cập nhật sang canonical active R10. Để đóng phải kiểm trong một source canonical mới cùng 1 item_id/1 version/1 đề–key–solution–rubric, không thêm bản sao chấm. T02 stem tương đương về điều kiện 4 áo/3 huy hiệu, đáp án 12 bộ không đổi, D6 được giải thích bằng bảng 4×3 tại chỗ; **DELTA_C_PED_MATERIAL** vì thay D6 và quy tắc nhân. Học thuật/nguồn/receipt Q18 của bản R10 chưa sign; CHƯA CONTENT_READY.
- Chốt tiến độ: 11/11 Topic P1 của R03 đã có candidate chỉnh sửa thực tế trong #883–#893, nhưng **0/11 candidate mới đã đạt Q15/Q18 hoàn chỉnh**. Không đồng nghĩa 11 P1 được FIXED_FINAL. Giữ signed snapshot lịch sử, không merge/deploy.


---

<!-- TOPIC_R06_D6_TARGETED_RECEIPTS_20261117 -->
## R06 · Source-locked Q15/Q18 targeted AUTHOR_SELF_QA for CĐ20/CĐ21

**Source authority Q18 clarification:** GitHub effective SLM-THPT-QUALITY-ONE v3.1.0 (standard blob 5a80b20ce99be3179d03d56a73fa57b6f4882fd8) explicitly permits Q18_AUTHOR_SELF_VERIFIED if there is real source/math/S1/PED/item and assessment custody evidence. It does **not** require NotebookLM independent review by default for every delta; do not claim NotebookLM verdict without actually collecting one. This R06 documents **targeted** author recheck only, not CONTENT_READY. It supersedes the R05 field “Q15/Q18 chưa kiểm phần sửa” **for the affected scope of only these two Topics**.

### CĐ20 · R12, original blocker ACA-05

- [Draft #884](https://github.com/TMA2015/self-learning-math/pull/884); learner Git SOURCE_BLOB **a5507a33daea690a1193c965999e1d652340cb58**.
- Author Q18 targeted receipt [file](https://github.com/TMA2015/self-learning-math/blob/7eef632822c652db5db00c9699b5e72677660fda/prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R12_D6_Q15_Q18_AUTHOR_TARGETED_RECEIPT_20261117.md), Git blob **5ee1dbfa9170272036433d128bfa25cef1912e36**.
- Source-derived Q15 full active-for-candidate matrix [file](https://github.com/TMA2015/self-learning-math/blob/7eef632822c652db5db00c9699b5e72677660fda/prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R12_Q15_CANONICAL_ITEM_OUTCOME_ROLE_VERSION_MATRIX_20261117.md), Git blob **a19bed3c52a24e582bfa2b262d6d20f76f0e7c09**.
- Exact old→new source diff excluding new author-only HTML comment: **7 original lines changed**: intro L9; W01/W02/W03 CONTENT_VERSION L760/L788/L814; D6 L782/L808/L836. Everything else byte-identical, including all math/rubric content and whole question-only Tự kiểm tra. W01–W03 versions moved from TOP20-R09 to **TOP20-R12**; exactly same 37 IDs, 17 T + 17 P + 3 W, 11 public replay placements, 17 outcome coverage.
- Manual six route proof: W01 unordered Bài 7 / complement Bài 8, W02 union Bài 14 / independence Bài 13, W03 independent conjunction Bài 16 / union Bài 14, all actual headings and explanations located. Independently rechecked W01 C(8,2)=28, 3/28 and 9/14; W02 union 5/6 and non-independence 1/6≠1/4; W03 intersection 1/6, union 2/3, neither 1/3.
- **Verdict:** Q08/PED6 affected-author QA PASS, candidate Q15 ID/version/placement PASS, Q18 targeted-author receipt PASS. **Active global canonical owner, V2/ready/REGISTER not changed** → CONTENT_READY=NO; old R11 signed receipt still pinned to immutable R11 SHA.

### CĐ21 · R06, original blocker ACA-06

- [Draft #885](https://github.com/TMA2015/self-learning-math/pull/885); learner Git SOURCE_BLOB **f1e9a0f2a52574f832c27a724189e9f1869940ae**.
- Author Q18 targeted receipt [file](https://github.com/TMA2015/self-learning-math/blob/51f946398469f948c2c062798250dd9875641de0/prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R06_D6_Q15_Q18_AUTHOR_TARGETED_RECEIPT_20261117.md), Git blob **567b7503f40c07d998792560043e28251f405ed1**.
- Source-derived Q15 full active-for-candidate matrix [file](https://github.com/TMA2015/self-learning-math/blob/51f946398469f948c2c062798250dd9875641de0/prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R06_Q15_CANONICAL_ITEM_OUTCOME_ROLE_VERSION_MATRIX_20261117.md), Git blob **6c5cd14634f2ecbfe77062228c8964a53c1b1176**.
- Exact old→new source diff excluding author comment: **22 original lines changed**: eight First Try item version lines and eight D6 lines; three Written item version lines and three D6 lines. Every other line is byte-identical; T01–T08 and W01–W03 now TOP21-R06; P01–P08 keep TOP21-R03, exact 19 IDs, 8 public selfcheck replay placements, 8 outcome coverage. Two repetitive D6 phrases also polished in the same two D6 lines.
- All 11 learner routes inspected against true Knowledge 1.1–3.2 and corresponding eight full visible Practice items. Independently recomputed **11 affected maths** including conditional 1/3, without replacement 5/18, 1/4 independence, total 1/20, Bayes 3/4, tree 7/25, base rate 6/55, Written 5/8 +5/11 +1/4, 2/15 +1/2, and 16/115.
- **Verdict:** Q08/PED6 affected-author QA PASS, candidate Q15 ID/version/placement PASS, Q18 targeted-author receipt PASS. **Active global canonical owner, V2/ready/REGISTER not changed** → CONTENT_READY=NO; old R05 signed receipt remains historically scoped.

### Remaining blockers and boundary

The two targeted receipts do **not** change the verdict for the other nine affected candidates, and do not prove new full-book S1 PDF verification or website AP/Final Submit. The pair of Q15 source-derived candidate matrices each declares one **proposed** new canonical owner, without activating that owner in global REGISTER or spawning duplicate active item bodies. Administrative harmonization (single V2/ready/REGISTER matching source SHA, owner acceptance gate) is next. The 22-topic audit ledger remains intact: **11/11 have source candidates, 2/11 targeted author source-delta QA completed, 0/11 newly CONTENT_READY**. Do not merge/deploy or edit Firebase/RD1.


---

<!-- TOPIC_R07_TARGETED_9_OF_11_20261117 -->
## R07 · 9/11 affected-scope QA receipts, source SHA-locked

R06 documented CĐ20/CĐ21. R07 records seven more verified corrections, all source files still **candidates** on Draft PRs. Q18 owner-effective v3.1.0 permits evidenced AUTHOR_SELF_VERIFIED; each receipt is targeted to its **changed** source area, not a new independent full-book reviewer verdict or automatic CONTENT_READY. Baseline source and baseline Q18 signed snapshots remain immutable.

| CĐ | Draft PR | Current candidate learner blob (supersedes R04 table if changed) | Newly fetched targeted Q15/Q18 author receipt blob | Verified scope and remaining gate |
|---|---|---|---|---|
| 03 | [#888](https://github.com/TMA2015/self-learning-math/pull/888) | d258b880fe695a152d677061a7d307cf262f2862 | 1e62775fd62785814926bdc2e865aac5f93b3b18 | 11 D6; 31 unchanged public Practice IDs, 12 question-only replay placements; V2/ready/REGISTER HOLD |
| 04 | [#890](https://github.com/TMA2015/self-learning-math/pull/890) | 9b0a9bf090cd8e13bd3807030bb326c0756bd6e8 | 4b0ebf600385f0e7b67af79ce5faf7ac02010e0a | 9 D6 + Q03: algebraic powers a>0, no stray b>0; 75 Practice, 18 selfchecks; historical S1 scope used; V2 HOLD |
| 05 | [#889](https://github.com/TMA2015/self-learning-math/pull/889) | 663c5423070397ba5e389b5f307598664ab28808 | 39b5d7ac1a7f50e132d01444a402df2abd4944a3 | 16 D6; 38 Practice, 17 replay; V2 HOLD |
| 06 | [#891](https://github.com/TMA2015/self-learning-math/pull/891) | **3eb442f9399b2a6fb5b715953401585a3bed0c5d** | 598a18284e9ff6fb8120ee192de0c461b5c438f8 | 15 D6. Two more conceptual fixes at original lines L313/L437, new math on cos range/phase and no division by zero. 66 Practice, 16 replay; V2 HOLD. **Previous R04 candidate SHA f4ede... is superseded, not current.** |
| 10 | [#886](https://github.com/TMA2015/self-learning-math/pull/886) | 069f4f52eb7ae88ac609f11cfa933ec09c2b08d5 | 0b97f1aefd3681f00450a401bcbf75a67225fc33 | 9-line editorial-only metadata removal, 120 unique Practice IDs, 36 replays, math/rubric byte parity; V2 HOLD |
| 11 | [#887](https://github.com/TMA2015/self-learning-math/pull/887) | 8017adb5616901a4f2a159d1f6179bd2a3f62e1a | 43bcbf655617872e409b5e623b564d6bfa988b16 | 4-line editorial-only metadata removal, 116 unique Practice IDs, 22 replay; math/rubric byte parity; V2 HOLD |
| 18 | [#892](https://github.com/TMA2015/self-learning-math/pull/892) | af8a3529398e5f876d5c979b0d5d26df3519d6ac | 9d0f5a224f55eda978bb1aebbeb2c9d20ade5233 | One original line L702 context fix, t is geometric not seconds, t=1→M=(2,1,3) unique intersection; Q15 Practice/Selfcheck byte parity; preserve unrelated SBT P2; V2 HOLD |

**QA method:** for CĐ03–06, exact old/new Git source line-diff excluding unrendered metadata, detect only 11/10/16/15 changed lines respectively (CĐ04 9 D6+Q03 formula); every D6 corrected exercise number was resolved to actual Practice heading and mathematical exercise stem in the same file. In CĐ06, checking substantive learner route rather than label alone revealed overbroad references in O10 and O14; the candidate was **amended once more**, then refetched and reviewed before Q18 receipt. All four Practice + Selfcheck sections are byte-identical with original signed sources, item IDs unchanged; original Knowledge First Tries have no independent canonical item marker to duplicate. CĐ10–11: exact 9/4 editorial lines changed; original ID sequence, visible Practice stems, all MathJax expressions and disclosures identical. CĐ18: exactly one changed original mathematical entry paragraph, recomputed plane normal·direction=2≠0, unique intersection at (2,1,3), existing SVG description checked.

**Scope-limited verdict:** AUTHOR_Q08/PED6 or AUTHOR_Q03/PED_DELTA_VERIFIED for CĐ03–06/10–11/18, in addition to CĐ20/21 from R06. **Overall: 11/11 original P1 Topics have candidates; 9/11 targeted source delta checks now have AUTHOR_SELF_QA_RECEIPT on exact SHA; CĐ13 and CĐ19 still need targeted reviews/active canonical reconciliation. Still 0/11 new CONTENT_READY** without source-consistent active bank, one V2 handoff, ready manifest and REGISTER plus remaining gates; no merge/deploy.


---

<!-- TOPIC_R08_ALL_11_TARGETED_SOURCE_QA_20261117 -->
## R08 · All eleven P1 Topic deltas have exact-source-targeted AUTHOR_SELF_QA, not CONTENT_READY

Date 17/11/2026. One standard only SLM-THPT-QUALITY-ONE v3.1.0 Q01–Q18. Q18 author self-verification on an exact source is valid with substantive evidence; this is NOT an independent NotebookLM full-Topic PASS. R01–R07 hold the original 22-topic QA, 440 outcomes and previously pinned source/receipt IDs. Immutable historical signed sources stay intact.

### CĐ13 R04 – 16-outcome PED and actual SVG correction

- Draft [#893](https://github.com/TMA2015/self-learning-math/pull/893); latest learner source Git blob **7837fa88ba6376f873bd9f3bc3cbea134b3a838d**; new targeted author Q18 receipt Git blob **744a3b4c3b950b5b122d8a72e8a6a9702313a8a0**.
- Reviewed all sixteen Knowledge outcomes: natural motivation, concept and conditions, worked example and correct mathematics, First Try with optional disclosure, local D6. Same original 52 Practice item stems/solutions/rubrics, 16 public selfcheck stems, same IDs, MathJax expressions and disclosure counts. **Practice and Selfcheck intro text DID change; their entire sections are not byte-identical**.
- Found a real Q07 mismatch in the first R04 candidate: O13 figure alt/read guide described A→B coordinate decomposition, but source SVG B06 showed box addition. Corrected image to real SVG B08 source Git blob **13445da079245a556a08e7a57069d9987097a0be** and explained that this single-vector diagram does not depict the angle between two distinct vectors; the O13 dot product is what verifies the angle. B06 still fits O11. Four unique SVG sources fetched and inspected by title/desc; no browser/render claim.
- Original G10 ChIV source [Draft #750](https://github.com/TMA2015/self-learning-math/pull/750) still open and unmerged. Cross-branch S1/shared canonical owner, active V2/ready/REGISTER remain **HOLD**, not CONTENT_READY.

### CĐ19 R10 – product rule, T02 version and complete source-derived Q15 mapping

- Draft [#883](https://github.com/TMA2015/self-learning-math/pull/883); latest learner Git blob **37612a3fb8d804efa6dd4f65ddd22d90bf2772ae**; new targeted author Q18 receipt Git blob **440f0c17f1a4f6b813e8627f29626248ba7f5684**; full source-derived Q15 candidate 56-item matrix Git blob **448c913a0263cdc537a8e33a39bcdd8052ec3372**.
- Source old R09→R10 line-LCS had 23 local change blocks in Knowledge: the condition for product rule m×n explicitly requires every first-step choice to offer exactly n second-step choices; if counts differ, add branch totals. Changed T02 FIRST_TRY stem gives a more explicit 4-shirts×3-badges gift question, unchanged numeric answer 12; D6 now maps to an actual four-row by three-column table. Its canonical ID and outcome remain, **only T02 CONTENT_VERSION changes TOP19-R03→TOP19-R10**; all 13 other T versions unchanged.
- Independently recomputed 14 Knowledge example results (addition, counting codes, permutations, combinations, binomial coefficients/signs, growth approximation and constant terms); mathematical checks PASS on affected lesson narratives. Both original SVGs fetched and checked: 4+3=7 versus 4×3=12, separate tree 2×3=6. Source from the Luyện tập heading to end is **byte-identical** to original R09 including every Practice key/rubric and seven public question-only selfcheck replays.
- Exact 56 unique IDs verified against signed R09 author metadata: 25 original G10 SGK shared-bank items, 14 T, 14 P and 3 W, plus seven selfcheck reference placements. G10 SGK canonical bank remains original source blob 2ae62fada28913ec336b3507684408a1e05a3232, not copied to create a new owner. The R10 Q15 candidate is a proposed source and is **NOT YET GLOBAL ACTIVE REGISTER**.

### Current 22-topic comprehensive QA / 11-topic remediation checkpoint

| Evidence gate | Verified present state |
|---|---|
| Source-scope audit | 22/22 Topics, 440 registered outcomes in R03; previous source/receipt parity and P2 ledger preserved |
| Original newly found P1 Topic defects | 11 Topics: CĐ03–06, 10–11, 13, 18–21 |
| Topics with real new learner source candidates and Draft PRs | **11/11** |
| Topics with exact source-SHA-bound targeted math/PED/Q15/Q18 author self-QA receipt | **11/11** (R06 CĐ20/21; R07 CĐ03–06,10/11,18; R08 CĐ13/19) |
| Targeted source delta verdict | AFFECTED_DELTA_AUTHOR_SELF_QA_PASS, NOT a blanket 22/22 Academic/PED PASS |
| Canonical active bank/source owner/V2/ready/REGISTER synchronization | **HOLD**, CĐ13 additional dependency G10 PR #750 |
| New source CONTENT_READY promotions | **0/11** |
| Website, assessment runtime, independent TOPIC_READINESS, Firebase/Skill Mastery, merge/deploy | NOT CLAIMED; NO MERGE/DEPLOY |

R03 P2 learner issues for CĐ01–02,07–09,12,15,22 and smaller P2 associated with other Topics remain open in the separate ledger; targeted P1 remediation does not close them. Existing original SGK/SBT PDFs were not reopened page-by-page in R08; prior historical S1 receipts are cited without inventing new visual checks. Before claiming CONTENT_READY for any candidate, the owner must resolve active canonical item/version identity, exact SOURCE_BLOB and source-level authoring receipts, then one V2 handoff + ready manifest + REGISTER aligned on that SHA, with P0/P1 zero under the one original standard. Preserve previous immutable snapshots and review scope; no RELEASE action.

---

<!-- TOPIC_R09_EIGHT_P2_SHA_LOCK_20261117 -->
## R09 · Eight remaining learner-visible P2 deltas, new exact-source targeted AUTHOR_SELF_QA

**Source 17/11/2026:** [Draft PR #895](https://github.com/TMA2015/self-learning-math/pull/895), head **eb4235720734d460926c96714035a5b102f55773**, branch authoring/thpt-topic-p2-editorial-8topics-r01-20261117. R09 ledger: prototypes/thpt/review-packets/Temp_THPT_8TOPIC_P2_EDITORIAL_SOURCE_LOCKED_AUTHOR_AUDIT_R09_20261117.md. New candidates and receipts are separate Temp_* files; original signed source/receipts and original Q15 owner remain immutable. All eight Q18 checks use owner-approved AUTHOR_SELF_VERIFIED on changed scope, not full independent NotebookLM approval.

| CĐ | Old signed learner SOURCE_BLOB | New R09 candidate SOURCE_BLOB | Targeted Q18 receipt Git blob | Scope / outstanding |
|---|---|---|---|---|
| 01 | d4eafd811066997ee64de70a49c5da4a7ff26dcd | dc6e8366e912953f6fd6e1adfb641c601a99e538 | bfa7f23ca7bd16d082222bfa14d5b6c959a597d4 | Make sets intro self-contained (L181) |
| 02 | eb5a01b50262dc4b151b3915f5a5e4b436432374 | d1c05e91d3ca21d28981be404cbca23fb5937bb2 | 0117391ecb1ddccc1d2d067f3e9b2a819f30b56a | Real Bài17 rubric D6, not raw W01 |
| 07 | 22609934f525e6e9c2c8f1513e439c3cd4d54221 | 3e49d4032d6274c8992cee26d50d0de1fd768d29 | 5734640f9948659cebafa52e0fcdd61d85be1460 | Standalone index explanation + H2 Knowledge page |
| 08 | a33d1e6a20dba1dc7861097e231906aff2938c02 | 3f1f55d1a05eece7de25508318e8ed6c2cecb621 | f86a0dfc1a7ab73533395f19428368aeeabac676 | Derive lim -1; explicit jump comparison; no early 'hình này' |
| 09 | 8222107d717f7d02b845f79ccdd154e8dbe71cc6 | 252c4719396b3692ea6cf62f1845c0874b666a8f | ba072154f7fc60ae82952f8060f0cb17184cb6d6 | Signed metres/seconds in v=s'; real Bài52 instead of raw P15 |
| 12 | e74f32b1092d571af0091174a55104e7d3bec5b5 | d4724b24f4dba4b45a2198860e2db8e2f472d7dc | abe40c57320889533301bc41652a67b8584561f5 | Remove visible R03 learner-first release marker in title |
| 15 | 581ff0b0c019a705d36f306d7d5b0db38d185c0b | 98f911d70d6e69fed5747c4f4865fa1a0942f3d1 | a386670f51f70ba3f207a9bf98e34727d31cd3d0 | Seven double labels 'Câu/Bài' cleaned; 8 question-only mathematical stems and canonical IDs same |
| 22 | b5713f0c2a1aa6a9fa7a7d63f6e6878bdf8d338b | 58619b8b613b382fbdd4874670bdc24d54ac1c62 | 559f0e875d7687e7410b60a8304ceeb18572224e | Boxplot/n=20 grouped figure next to actual matching explanation, seven Mastery suffixes removed; separate S1 PDF-index P2 remains OPEN |

**Proof beyond lint:** Direct old/new source diff, unchanged ordered item IDs/disclosure count, no Practice question/key/rubric mathematical change. CĐ01/02/07/08 have fully byte-identical Practice+Selfcheck; CĐ09 only one D6 in Practice changed (real Bài52, source mathematical outcome matched) and Selfcheck unchanged; CĐ12 only title; CĐ15 seven source-label prefixes removed, selfcheck mathematical payloads exact; CĐ22 two figures moved with exact same SVG refs and mathematical terms, seven rubric technical suffixes changed without changing rubric criteria, entire public selfcheck unchanged. CĐ08 jump SVG source matched left limit 2 and right 1; CĐ22 figures matched sample 1,2,2,4,5,8,30 and grouped-frequency counts 4,6,8,2 with total 20.

**Critical cross-branch asset QA:** eight candidate learner files reference 24 relative SVG images. The branch was created from main and initially lacked 18 original Topic SVGs; all 18 were copied byte-identically from original authoring branches, and all 24 were read back from exact candidate branch with valid unchanged SVG blobs. No new diagram mathematics or website/browser visual QA is claimed.

**Verdict:** 8/8 AFFECTED_P2_AUTHOR_SELF_QA_PASS on these proposed sources, but **0/8 new CONTENT_READY**. No active global source-bank owner change; V2/ready/REGISTER and RELEASE/AP gates remain HOLD. R08's original 11/11 P1 candidate delta QA remains source-locked on its own branches, untouched by R09. Remaining P2: CĐ18/19 technical readability within their separate draft candidates, CĐ22 historical S1 original PDF index, plus any new issue found in future release/browser QA. No merge/deploy, private RD1/Final Submit/Skill Mastery or Firebase change.

---

<!-- TOPIC_R10_TOPIC18_19_P2_FINAL_20261117 -->
## R10 · CĐ18/CĐ19 remaining reader-facing P2 metadata cleaned on new source SHA; CĐ22 PDF-index evidence remains open

**Time:** 17/11/2026. Single owner-effective `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18 only. This is AUTHORING targeted DELTA_B editorial author self-verification, **not** a new independent review, Q01/S1 full-book claim or CONTENT_READY. All R05/R10 signed or staged historical author sources remain immutable. New source files are separate `Temp_*` candidate children, no merge/deploy.

### CĐ18 · R06 replaces technical Written control-plane boilerplate

- [Draft #896](https://github.com/TMA2015/self-learning-math/pull/896) is based on previous CĐ18 candidate Draft #892, not `main`. New learner source `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R06_P2_WRITTEN_RUBRIC_CLARITY_CANDIDATE_20261117.md`, **SOURCE_BLOB 331c31e124179b31731f9caca2669eaa8948bcbd**. Targeted Q15/Q18 author self-QA receipt `Temp_TOPIC18_R06_P2_WRITTEN_Q15_Q18_AUTHOR_TARGETED_RECEIPT_20261117.md`, **receipt blob f4f7acefae8640227cebdb421ec328b9d9cb3259**.
- Compared old R05 candidate Git blob af8a3529398e5f876d5c979b0d5d26df3519d6ac to new R06. Removed **exactly 24 redundant `Written: ... Mastery` lines** and changed 24 redundant `Rubric Written /5` display headings to a learner-readable `Thang tự đối chiếu /5`. The first rubric no longer leaks old reviewer Delta C state. Every one of 24 original SGK-bank Written IDs is preserved, all 24 per-step criterion strings are byte-identical after heading, all 24 point sums independently verified **5/5**, no learner stem/key/formula/diagram changes.
- Same ordered canonical item markers, 247 open+247 close disclosures, and **byte-identical full public Tự kiểm tra section**. The previously corrected t=1 geometric parameter/line-plane example from R05 is inherited unchanged. No Q16 assessment behavior changed; original Q18 R05 SHA-bound receipt 9d0f5a224f55eda978bb1aebbeb2c9d20ade5233 remains immutable. **AFFECTED_DELTA_B_AUTHOR_SELF_QA_PASS**; active source owner/V2/ready/REGISTER HOLD, no new CONTENT_READY.

### CĐ19 · R11 removes repeated SGK-source status labels without altering S1 or item IDs

- [Draft #897](https://github.com/TMA2015/self-learning-math/pull/897) is based on previous CĐ19 candidate Draft #883, not `main`. New learner source `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R11_P2_CANONICAL_LABEL_LEARNER_CLARITY_CANDIDATE_20261117.md` **SOURCE_BLOB 8f7d149c0359ac895fb2d04496d46e2294511123**. New complete source-derived 56-ID candidate Q15 matrix blob **c4718f6786e4b6e36d705a3a6b0a5ccf890ba9e0**, new scoped Q15/Q18 receipt blob **2c17b30e78f484606509cf9d3817fea431ae8dad**.
- Old R10 source blob 37612a3fb8d804efa6dd4f65ddd22d90bf2772ae; removed 12 redundant visible `Bài SGK dùng chung — ... canonical / mở rộng tự chọn` lines outside stems, left each actual `Bài SGK N.` label and optional status *inside* its original question. Rewrote only two intro paragraphs to use plain learner instructions; public selfcheck still explicitly **not independent assessment**, no hints or keys.
- Actual source comparison: 56/56 canonical item ID markers (14 T +14 P +3 W +25 original G10 SGK public placements), seven public reused Practice placements, 56 balanced disclosures, all math expressions/stems/keys/rubrics/SVG refs unchanged. New 56-row Q15 line-number matrix recomputed after 12 source-line deletions; **T02 still CONTENT_VERSION TOP19-R10**, no new item ID/version or change of original SGK bank ownership. Older R10 academic/PED receipt blob 440f0c17f1a4f6b813e8627f29626248ba7f5684 remains pinned to old R10 source, full worked math therefore source-equivalent here.
- **AFFECTED_DELTA_B_AUTHOR_SELF_QA_PASS**; global active canonical owner, V2, ready/REGISTER HOLD; no new CONTENT_READY.

### CĐ22 · legitimate S1 provenance precheck vs unresolved original PDF page-index

- Original CĐ22 R09 author receipt blob d311899df9a71fc41683df85f6fbd49db30404aa explicitly records **one P2**: original SGK PDF page-index was not independently reopened in that round. Its S1 scope names KNTT G10 T1 ChV B12–14 printed pp73–88, G11 T1 ChIII B08–B09 pp58–68, G12 T1 ChIII B09–B10 pp75–84. Old NotebookLM R2 erroneously referred to G11 B14 as statistics; that error was historically corrected with intact reviewer receipt.
- Current external secondary reference check found G10 B12 pp73–77/B13 pp78–83/B14 pp84–88 (https://toan10.edu.vn/sgk-toan-10-ket-noi-tri-thuc), G11 B08 starts p58 (https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-xu-the-trung-tam-cua-mau-so-lieu-ghep-nhom-3430/bai-8-mau-so-lieu-ghep-nhom-12616.html), B09 pp62–67 (https://www.thivien.org/toan-11-kn/bai-9-cac-so-dac-trung-do-xu-the-trung-tam.jsp); G11 B14 is in ChIV **Phép chiếu song song**, not statistics (https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-quan-he-song-song-trong-khong-gian-3442/bai-14-phep-chieu-song-song-12660.html). G12 original book PDF text extraction TOC gives B09 printed p75 and B10 p80 (https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), consistent with prior receipt.
- **Evidence limitation explicitly recorded:** the available original-book PDF mirror returned text/Toc but visual page screenshot fetching failed (cache miss); no direct verified PDF document-page-index ↔ printed-number offset or source S1 page screenshot has been obtained for all three books. The old R09 S1 index **P2 stays OPEN**. The new CĐ22 R10 P2 editorial source candidate #895 does not inherit a false full-S1 re-verification or change original R09 CONTENT_READY snapshot at separate SHA.

### R10 truthful global checkpoint

**Total targeted findings:** 11 original P1 Topics have source candidates + scoped Q18 author self-QA receipts (R08); eight early P2 Topics have staged candidate+receipt (R09); now CĐ18/19 have staged separate source+receipt (R10). Thus **10/10 identified learner-readable P2 Topic edit sets** are QA checked by exact SHA, but CĐ22 historic S1 page-index P2 remains open and these staged candidates remain **0 newly promoted CONTENT_READY**. Global one-source canonical owner, Q15/version, one V2 handoff and ready/REGISTER and full Q01–Q18/A1–A7 promotion must still be reconciled. Original previously signed CONTENT_READY snapshots remain historically valid only on their own source SHA. No merge/deploy/website/Final Submit/Firebase/RD1/Mastery changes.

---

<!-- TOPIC_R11_READY_RECONCILIATION_20261117 -->
## R11 · Hai gói CONTENT_READY có thật trên Draft #896/#897; GitHub Actions V2 PASS, preview Chromium environment HOLD

Ngày 17/11/2026. Một chuẩn SLM-THPT-QUALITY-ONE v3.1.0 Q01–Q18. Bản R10 ghi zero new READY trước khi các ready/REGISTER mới xuất hiện trên HEAD hai nhánh. R11 **thay thế kết luận zero đó đúng với hai packet bên dưới**, không thay immutable historical PASS, không coi CONTENT_READY là merge/deploy.

**CĐ18 R06 / Draft PR #896:** source Git blob `331c31e124179b31731f9caca2669eaa8948bcbd`, composite Q18 author-self receipt `709d4d12af2a0d2af044d1250ba75a59f679ed7e`, canonical A1–A7 metadata `7983125c26031017b10c09b4526601b66be54730`, single canonical V2 `a57c6f3aed696cfa8ba3c9f2e7beca1c9ba55397`. The actual `ready/THPT-TOPIC18-OXYZ-FULL-R06-20261117.md` Git blob is `f6fe9e6a7ce14d06fac3e4ddf3ff54809680e8cc`, `STATE: CONTENT_READY`, `BLOCKERS: NONE`; branch REGISTER blob at check was `bdb4ef1dcebf3f8ffc431c38e8e28c2552a90bea`. All path/SHA pointers verified directly. 40 outcomes, 247 distinct public IDs, 12 public question-only replays, 24 Written rubric scores /5 unchanged; original SBT B14 printed p25 reference gap stays documented P2. Original frozen R04/R02 ready rows unchanged.

**CĐ19 R11 / Draft PR #897:** source Git blob `8f7d149c0359ac895fb2d04496d46e2294511123`, composite Q18 author-self receipt `2669873f807ec19f008ce5476884b883c391289d`, canonical A1–A7 metadata `676f261b543f14013b67d9d8ec68e1265fcd07f5`, single canonical V2 `e93f94ed08a525c48a753012840cec3630f2c3a1`, source-derived Q15 56-ID matrix `c4718f6786e4b6e36d705a3a6b0a5ccf890ba9e0`. The actual `ready/TOP19-COMBINATORICS-BINOMIAL-R11-20261117.md` Git blob is `8684f903baeb711685372225073edea21b806e31`, `STATE: CONTENT_READY`, `BLOCKERS: NONE`; branch REGISTER blob at check `ec71e8fdc7543964c1d4af32933ea104f03ede6b`. All SHA/pointers verified directly. 14 outcomes, 56 canonical public IDs (25 original G10 SGK +14 T +14 P +3 Written), seven public replay-only; same T02 item ID, CONTENT_VERSION TOP19-R10 in canonical source and V2 row. Historical metadata owner `TOPIC_R08_CANONICAL` means original Topic-ID creation, not a new SGK owner or second live source. Frozen R09/R08/R03 ready rows unchanged.

**Actual GitHub Actions at ready-containing commits:** workflow 44050521676 for PR #896 SUCCESS, log `SOURCE_LOCK_PASS THPT-TOPIC18-OXYZ-FULL-R06-20261117: 40 lessons, 40 outcomes, 247 public item IDs`. Workflow 44050894348 for PR #897 SUCCESS, log `SOURCE_LOCK_PASS TOP19-COMBINATORICS-BINOMIAL-R11-20261117: 14 lessons, 14 outcomes, 56 public item IDs`. These were mechanical source-lock/ready-intake gates, not Academic/PED independent reviewer or release QA.

**Independent R4 preview CI issue:** workflow 44050521835 (#896) and 44050894362 (#897) both FAILURE at `Install isolated Chromium test dependency`, exact log `Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64` after `npm install --no-save playwright@1.56.1` and `npx playwright install chromium`. MkDocs preview build/static output checks completed earlier; source math is not implicated by this runner failure. Browser/render/AP QA remains **NOT PASS**. CI maintainer/RELEASE owns the runtime/runner fix; AUTHORING does not edit website or workflow under this task.

**Duplicate draft cleanup:** four extra unsigned Temp-only A1/V2 preflight files generated by this audit were deleted after confirming official ready and official V2 never referenced them; signed official A1/V2/ready/REGISTER/source/receipt left untouched. This cleanup added commits after the recorded CI runs; do not assert CI PASS on the very latest cleanup HEAD without fresh HEAD check.

**Current checkpoint:** 2 NEW source-only AUTHORING CONTENT_READY packets on open Draft PRs, 0 merge, 0 deploy, no new official Topic Readiness/Mastery. Earlier P1 11/11 and P2 10/10 exact delta author QA preserved. CĐ22 PDF printed-page-to-PDF-index P2 still OPEN; SGK dependency Draft #750 remains. Original historical source SHA PASS is not transferred to a different source without Q18/V2 proof.

---

<!-- TOPIC_R12_22_LATEST_CANDIDATE_AUDIT_20261117 -->
## R12 · AUTHORING 22-topic latest-source audit closure (17/11/2026)

**Verdict: AUDIT_SOURCE_TRIAGE_COMPLETED_WITH_TRACKED_DEFECTS.** This concludes the source-level learner presentation/structure/targeted PED and language defect discovery for this audit batch, **not** all-lesson language acceptance, full S1 verification, independent academic PASS or new full CONTENT_READY. Only the owner-effective one standard SLM-THPT-QUALITY-ONE v3.1.0 Q01–Q18 applies; Issue #864 is the existing 13-item Topic editorial checklist, Issue #865 is the defect ledger. No second standard.

### What was actually checked (do not inflate)

- Fetched **22/22 complete student-facing learner-source files** from the exact HEAD of their distinct active candidate PRs after R11. The PRs are on separate branches; this is NOT a claim that all 22 sources exist on main.
- Scanned the full text after excluding non-rendered HTML provenance comments: learner labels, remote pronouns, D6 remedy pointers, developer IDs/metadata leakage, domain/condition language, mathematical inline-code markers, source section architecture and question-only public replay. Inspected representative flagged passages and relevant local context manually for mathematical/pedagogical plausibility.
- Every one of 22 sources contains Knowledge / Practice / Self-check, and actual public selfcheck question stems, with **0 details/disclosure blocks in the Selfcheck question-only section** in this full-source structural scan. This neither creates a real Final Submit engine nor validates browser anti-leak.
- Rechecked former P1 D6 branches CĐ03–06 and CĐ20–21: respective student Practice sections contain 31/75/38/66/17/8 visible numbered exercises, with targeted remediation lines reading as learner-facing destinations rather than unresolved canonical ID codes in manually inspected samples. Historical receipts describe their affected-scope author self-QA; no new independent Topic-wide verdict follows.
- Directly read flagged passages for CĐ04, CĐ12, CĐ15, CĐ17, CĐ18, CĐ19 and CĐ22 and compared with the signed prior defects. The CĐ12 R10 source and receipt pair from #895 has been updated; historical snapshots were not overwritten.
- NOT checked as a fresh exhaustive PASS: every canonical stem/key/rubric calculation, 100% language semantics sentence-by-sentence, every original printed-to-PDF S1 page, all SVG pixels, actual MkDocs MathJax/browser responsiveness or private RD1/Final Submit runtime. These remain scoped to source/RELEASE evidence as applicable.

### Exact SHA register (all rows fetched in R12)

| Topic | Candidate PR | Verified student SOURCE_BLOB | Latest R12 status |
|---|---|---|---|
| CĐ01 | #895 | dc6e8366e912953f6fd6e1adfb641c601a99e538 | CĐ01 local reference corrected; V2 HOLD |
| CĐ02 | #895 | d1c05e91d3ca21d28981be404cbca23fb5937bb2 | CĐ02 D6 real exercise label corrected; V2 HOLD |
| CĐ03 | #888 | d258b880fe695a152d677061a7d307cf262f2862 | D6 raw ID correction candidate; V2 HOLD |
| CĐ04 | #890 | 9b0a9bf090cd8e13bd3807030bb326c0756bd6e8 | D6/base math correction; 3 source code-math lines for AP2 check; V2 HOLD |
| CĐ05 | #889 | 663c5423070397ba5e389b5f307598664ab28808 | D6 repaired; V2 HOLD |
| CĐ06 | #891 | 3eb442f9399b2a6fb5b715953401585a3bed0c5d | D6 repaired; V2 HOLD |
| CĐ07 | #895 | 3e49d4032d6274c8992cee26d50d0de1fd768d29 | Local sequence explanation corrected; V2 HOLD |
| CĐ08 | #895 | 3f1f55d1a05eece7de25508318e8ed6c2cecb621 | Jump/hole/figure antecedent corrected; V2 HOLD |
| CĐ09 | #895 | 252c4719396b3692ea6cf62f1845c0874b666a8f | Signed velocity and Bài 52 D6 corrected; V2 HOLD |
| CĐ10 | #886 | 069f4f52eb7ae88ac609f11cfa933ec09c2b08d5 | Exposed technical metadata removed; V2 HOLD |
| CĐ11 | #887 | 8017adb5616901a4f2a159d1f6179bd2a3f62e1a | Exposed metadata removed; V2 HOLD |
| CĐ12 | #895 | 35148794c6396b213ec18930ac99f031d074c78e | R10 metadata fixed with Q18 receipt; math backtick typography review OPEN; V2 HOLD |
| CĐ13 | #893 | 7837fa88ba6376f873bd9f3bc3cbea134b3a838d | Natural prose/first try correction; G10 #750 cross-source dependency OPEN; V2 HOLD |
| CĐ14 | #843 | 8f61c67a11dd3e2869cbd71dbb279bdcfdd92bf3 | No new defect in tested source scope; no new independent PASS |
| CĐ15 | #895 | 98f911d70d6e69fed5747c4f4865fa1a0942f3d1 | Repeated label fixed; inline-code coordinate notation review OPEN; V2 HOLD |
| CĐ16 | #848 | 0adf45aa8d776634d66f5c8e57b1c86ad77c8ed2 | No new defect in tested source scope; no new independent PASS |
| CĐ17 | #853 | 7cfc1c44d8f8aa722118d945900290fd560b621b | Student-facing Mastery term P2 OPEN at L849; escaped math backticks recheck |
| CĐ18 | #896 | 331c31e124179b31731f9caca2669eaa8948bcbd | Source-only CONTENT_READY; vector arrows in sum explanation P2 OPEN |
| CĐ19 | #897 | 8f7d149c0359ac895fb2d04496d46e2294511123 | Source-only CONTENT_READY; T02 answer phrase mỗi trong 4 áo P2 OPEN |
| CĐ20 | #884 | a5507a33daea690a1193c965999e1d652340cb58 | Invalid D6 heading references corrected; V2 HOLD |
| CĐ21 | #885 | f1e9a0f2a52574f832c27a724189e9f1869940ae | Invalid D6 heading references corrected; V2 HOLD |
| CĐ22 | #895 | 58619b8b613b382fbdd4874670bdc24d54ac1c62 | Figure/metadata edited; S1 printed page vs PDF index P2 OPEN; V2 HOLD |

All SHA cells above are complete Git blob SHAs fetched from PR heads, NOT current main blobs, and NOT proof of global Q15 item ownership/version acceptance.

### New/open learner defects, grounded locations and closure rules

1. **CĐ12 P2 Q03/Q07/AP2** — #895 learner source SHA 35148794… contains about **180** math-containing Markdown backtick spans, notably Knowledge first section defining sin/cos and worked self-try expressions. Code styling is not MathJax markup; inspect actual projected HTML first, then normalize typographic notation only with stem/key/solution/rubric and shared canonical parity verified. Historical CĐ12 language metadata P1 has been fixed in R10 with source SHA 35148794… and receipt SHA 39b796e10cacdc57811a1d578784c5992b717ab6; do not reopen that old P1.
2. **CĐ17 P2 Q03/Q16** — #853 source SHA 7cfc1c44… learner selfcheck intro at line 849 states “không ghi Mastery”; replace with natural student direction describing self-practice. Backtick escapes near line 326 merit source-to-render check. Historical R02 receipt remains immutable; no silent alteration.
3. **CĐ18 P2 Q03/Q07** — #896 source SHA 331c31e… Knowledge 1.3 / TOP18-O03 writes unarrowed AB+BC=AC and AB+AD=AC for a *vector sum*. Learner might mistake this for equality of segment lengths; use explicit vector arrows in a new source-bound delta only after checking diagram and Q18/source/handoff. Current R06 CONTENT_READY snapshot is not changed by this audit.
4. **CĐ19 P2 Q03/Q10** — #897 source SHA 8f7d149… TOP19-O02, THPT-TOP19-T02 revealed explanation reads “12 bộ, mỗi trong 4 áo ghép với 3 huy hiệu.” Suggested Vietnamese “Mỗi loại trong bốn loại áo ghép được với ba kiểu huy hiệu, nên có 4×3=12 bộ.” Do not edit only a copy of the canonical answer/solution: source version, Q15 matrix, Q18/one V2/ready/REGISTER must reflect any actual content change. Current R11 CONTENT_READY remains tied to old SHA.
5. **CĐ04/CĐ15/CĐ17/CĐ19 P2 typography** — a few localized mathematical inline-code spans (CĐ04 three learner lines, CĐ15 coordinate expressions, CĐ17 escaped markup, CĐ19 combinatorics identity) require real render review before alleging AP2 failure or mechanically rewriting canonical items.
6. **CĐ22 P2 Q01** — historical source receipt recorded direct SGK printed-page/PDF-index mismatch/uncertainty. Not reopened with authenticated original PDF images in R12; retain HOLD on that evidence and do not invent page offsets.
7. **Cross-branch canonical/handoff HOLD** — #895 eight-source candidate, the earlier eleven P1 targeted PRs and G10 SGK dependency #750 still require accurate single active item owner/version and source-locked matching Q18/A1–A7/V2/ready/REGISTER before new CONTENT_READY. Current scoped source-only ready #896/#897 remains **2**; no website merge/deploy.

### Completed audit versus remaining acceptance

- SOURCE_FETCH_22/22 = PASS; THREE_OUTER_LEARNER_PARTS_22/22 = PASS; PUBLIC_SELF_CHECK_QUESTION_ONLY_SOURCE_22/22 = PASS.
- R03 P1 learner defects were repaired in separately staged candidate sources and checked by their targeted Q18 receipts; corrected source status is not the same as current-merged active content.
- FULL_SENTENCE_BY_SENTENCE_LANGUAGE_PASS = **NOT ESTABLISHED**. The audit **has completed source discovery/triage with explicit tracked exceptions**, but a full academic/pedagogical acceptance of every source and every exercise is **not claimed**.
- FULL_S1_PDF_INDEX_QA = NOT ESTABLISHED; ALL_MATH_STEMS_KEYS_RUBRICS_RESOLVED = NOT ESTABLISHED; SVG_RENDER_BROWSER_P2 = NOT TESTED.
- AUTHORING new CONTENT_READY = **2 source-only Draft packets** (#896 CĐ18 R06, #897 CĐ19 R11); remaining new candidate promotion = HOLD by source-specific Q18/canonical/V2, not by arbitrary metadata quotas.
- RELEASE/AP/R/P1/P2 QA, official private Readiness/Mastery, merge and deploy = OUT OF SCOPE / NOT CLAIMED.

**Operational close of this audit iteration:** do not repeat another 22-source inventory as if the recorded findings were absent. The next actual work is remediation/verification of these **specific open defects** and per-source handoff synchronization. Any future assertion of all-22 full-language PASS must be backed by different, genuinely exhaustive evidence rather than this automated-plus-targeted review.

---

<!-- TOPIC_R13_FIRST_TRY_CLONE_20261117 -->
## R13 · Verify formative independence: exact solved Example versus immediate Vận dụng (17/11/2026)

**Reason for extra pass:** R12 source structural triage cannot prove that a supposedly independent First Try is not copied from the solved Example directly above it. Re-fetched all 22 candidate sources, extracted per-lesson solved-example prompts and adjacent Vận dụng, checked nearby exact/normalized matches with human context confirmation. The tokenizer produces false positives for short generic commands like “Giải”; **no Q14 defect is assigned from similarity alone**. CĐ12 uses its own combined “Ví dụ tự học — Đề bài” presentation; its twelve first tries were manually checked for identical numerical data against that style of example, with no exact original-stem clone observed in this targeted comparison.

### Verified real P1 discovered and corrected

- **CĐ03 / TOP03-O09**, PR #888 R06 source blob `d258b880fe695a152d677061a7d307cf262f2862`, around Knowledge L266–272: solved Ví dụ and immediately following Vận dụng BOTH asked exactly `sqrt(2x+7)=x+1`, and both supplied the same unique answer `sqrt(6)`. Students had already seen the answer before being asked to self-try. **P1 Q04/Q13/Q14**, not a source ID collision.
- **Only the prior teaching Example was changed** in the new R07 candidate on **the same Draft #888**. New worked Example: `sqrt(x+6)=x`; condition x≥0; square to x²−x−6=0 → candidates 3 and −2, reject −2, verify sqrt(9)=3, final solution {3}. This is mathematically correct and demonstrates candidate filtration; it does not show the student's unchanged original question/answer.
- **New source Git blob:** `9d275d9bb2f0cfed1e13c42df957505d8b3d27fb`; **new Q18 AUTHOR_SELF_VERIFIED receipt Git blob:** `6ea89f6b98e6339c2a5a965ea715ee6712a606b4` (old R06 source/receipt are preserved by Git history). Checked 43/43 ordered canonical/public replay markers, same optional disclosures, Practice and Selfcheck byte-identical; only the teaching Example changed. This material PED delta is Q18 scoped self-QA, not an independent NotebookLM PASS or new full Topic PASS.
- **Other Topic results:** No other normalized-exact worked-Example versus immediate First Try stem was confirmed in the same targeted source scan. This is not mathematical proof all future questions are novel, nor full duplicate-semantic detection for all Practice.
- **Status:** `CĐ03_FIRST_TRY_CLONE_P1=FIXED_ON_R07_CANDIDATE`; `GLOBAL_ACTIVE_CANONICAL_Q15_V2_READY_REGISTER=HOLD`; `CONTENT_READY=NO`. The R12 line for CĐ03 R06 blob is historical and is **superseded for the latest candidate by this R13 new R07 blob**. Do not silently edit previous signed R05 source, publish, merge or deploy.

---

<!-- TOPIC_R14_ONE_ACTIVE_DRAFT_20261117 -->
## R14 · Quyết định chủ dự án: sửa lỗi trực tiếp trong một bản thảo hiệu lực (17/11/2026)

**Owner instruction overrides the previous R08–R13 working-file strategy:** quality of the actual pupil's content is the real acceptance basis; SHA/receipt management is internal, never a reason to multiply learner source files. For **each Topic, select exactly one effective working learner source**, directly correct it and inspect Knowledge/First Try/Practice/Written/Selfcheck there. Preserve older signed historical content as Git history/archival custody, not additional potential active RELEASE inputs. Do not create new learner `Rxx_FIX/CANDIDATE` files for every defect. Historical receipt PASS remains source-specific, not transferable.

### Actual consolidation performed in R14 (not claiming 22/22 complete)

| Topic | Latest current learner source path | Scope and actual QA | Branch PR and authoritative status |
|---|---|---|---|
| CĐ03 | `prototypes/thpt/content-drafts/topic03-algebra-equations/Temp_TOPIC03_R06_NUMBERING_CONSISTENT_20261116.md` | Corrected eleven unreadable D6 IDs to actual Practice Bài; changed TOP03-O09 solved Example (previously exact clone of First Try) to independently solved sqrt(x+6)=x, x=3. Original 31 Practice, 12 public question-only replays, 43 marker placements/opt-in disclosures unchanged; original heading formatting preserved. Deleted newly created parallel candidate and parallel receipt. | Draft #888; source `daeeb5d571d120b31265f8c603a76049a1f2c78c`, existing Q18 `6f7641528ea7bd8acb6a98e1c46be03a8ef44aae`; **HEAD V2 CI FAIL at OUTDATED validator accepting only v3.0/3.0.1**, while the owner-effective standard is v3.1.0. Academic edited scope selfchecked; no claim of CI all PASS |
| CĐ17 | `prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_TOPIC17_DISTANCE_VOLUME_R02_LEARNER_FIRST_20261116.md` | Replaced learner-visible “Mastery” with concrete independent self-practice and recheck instructions, unchanged 57 placements, 49 answer disclosures and 8 selfcheck-only stems. Deleted parallel R03 learner/receipt files. | Draft #900; source `76b8a10c12e2a60fa155901d153f17c9982193c4`; **V2/source-scope CI run 44073698142 PASS**, browser/AP separate |
| CĐ18 | `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R06_P2_WRITTEN_RUBRIC_CLARITY_CANDIDATE_20261117.md` | Corrected TOP18-O03 three student-facing worked-example paragraphs to proper MathJax vector-arrow identities and proof; 247 original item IDs, 12 public replays, 247 opt-in disclosures, no question, solution/rubric or figure mutated. Did NOT create separate patched learner file. | Draft #896; source `f8c6a52c84fecd0dd63dae60413cfbe4327f54b5`; **V2/source-scope CI run 44073955493 PASS**, browser/AP separate |
| CĐ19 | `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R11_P2_CANONICAL_LABEL_LEARNER_CLARITY_CANDIDATE_20261117.md` | Rephrased T02 optional math explanation to “Mỗi loại trong 4 loại áo đều có 3 cách chọn huy hiệu...” (4×3=12), with 56 canonical ID, seven public selfcheck replays, same single item version TOP19-R10, same Practice and rubric. Did NOT create parallel patched learner file. | Draft #897; source `32721032973866087dcc4b8981e33d4bf3391c8d`; **V2/source-scope CI run 44073967347 PASS**, browser/AP separate |

All four source snapshots have updated **existing** Q18/metadata/handoff/ready/REGISTER with a single current learner SOURCE_PATH. Older release-queue/ready snapshots and REGISTER rows for R02/R04/R08/R09 are **historical signed data**, not invitations to release the older source. The validator in `scripts/test-thpt-release-queue.cjs` requires historical signed rows to retain `CONTENT_READY` matching their manifest, so archival status is expressed in description rather than inventing an invalid machine state. No content-source duplicate added on these four PRs; #888 and #900 source-fix copy files actually removed.

**Still outstanding before a real 22-topic global quality acceptance:** perform the same source consolidation for the other 18 Topics, including all eight edited provisional sources under #895 and targeted sources under #884–#893; verify CĐ12 180 math-backtick render candidates against actual MathJax projection and canonical text, CĐ22 direct S1 printed-page/PDF-index evidence, semantic independence of all Lesson First Try from solved Examples and full written rubric coverage. Current 22/22 source-inventory from R12/R13 remains a *triage*, not full sentence-by-sentence LANG_PASS, independent all-question Academic/PED PASS, or RELEASE QA.

**Boundary:** source-quality-first AUTHORING only; reviewer and owner decide final acceptance; do not auto-merge/deploy or modify production/Final Submit/RD1.


---

<!-- TOPIC_R15_INLINE_C12_C15_20261117 -->
## R15 · sửa trực tiếp CĐ12 và CĐ15, không thêm file học liệu (17/11/2026)

This supersedes R14's **pending CĐ12 ~180 code spans** finding; it does not override the 22-topic full Academic/PED audit requirements. The two existing learner source paths on AUTHORING Draft [#895](https://github.com/TMA2015/self-learning-math/pull/895) were edited **in place**; no new source/correction .md files were created. The two pre-existing targeted Q18 receipts and the single 8-topic audit report were updated **in place**.

- **CĐ12 — presentation + correct rubric notation** (Q03/Q04/Q07/Q14): 189 exact student mathematical spans used Markdown inline code. Converted 189 to `\\(...\\)` mathematical markup, normalized special TeX macros (sine/cosine, degree, root, inequality, fractions, decimal comma); 79 original source lines touched, source total 769 lines unchanged. In SGK reused Written Bài SGK 9, rubric `x=Rcos`, `y=Rsin` was incomplete; now `x=R\\cos\\alpha`, `y=R\\sin\\alpha`, correct geometric meaning and unchanged /7 allocations/answer. Current one-source blob `ccf74ca47859794333b8ce6af56fbda4458c5f62`; same receipt path blob `dc306b4df5ae07aead6fb4541ba42969bd2ddf1b`. Validated 46/46 public ID placements, 46/46 optional disclosures, 12/12 question-only selfchecks, original two SVG refs; TeX brace-balance 167 unique converted expressions. Math semantic operand clarification is **DELTA_C**, with affected-source author selfQA only. The original canonical SGK bank rubric/source equality must be independently reconciled; browser AP2 render remains unverified.
- **CĐ15 — student-first words + math source typography** (Q03/Q07/Q09/Q10): the prerequisite section used 14 double-backtick code formulas for 3D coordinates/line-plane incidence. Converted all 14 to math; explicit `w=0,c=0` line contained in plane z=0, `w=0,c\\ne0` strictly parallel, `w\\ne0` intersection proof unchanged. Intro now addresses **Em**, removed meta commentary about “chú thích dành cho tác giả” and instead asks student to justify figure relations. Changed only three learner lines 12/16/20. Current one-source blob `6017e5b6108bfa13241f10be6d4b7050ee68066d`; existing Q18 receipt blob `cc4b9322b8a65f6e2f77013bb60e15a117cf363a`. Verified 70/70 public markers, 90/90 optional disclosures, five original SVG refs, eight question-only selfcheck replays. `DELTA_B_SOURCE_EQUIVALENT`, scoped author selfQA only.

**Actual GitHub QA on current #895 HEAD:** [THPT Topic V2 Intake and Source-Scope QA workflow 44080043127](https://github.com/TMA2015/self-learning-math/actions/runs/44080043127) **SUCCESS**; Roadmap PR Quality 44080043123 still in progress at last verification. This source-scope CI does not certify actual MathJax output, a 22-topic all-sentence language verdict, original SGK PDF page-index verification or protected Readiness. Prior GitHub R4 preview workflows on other PRs failed before browser QA due to `Playwright does not support chromium on ubuntu26.04-x64`; no visual PASS is assumed.

**Consolidation coverage today: 6/22 topics actually received direct effective-learner-source edits and corresponding existing receipt updates** (#888 CĐ03, #900 CĐ17, #896 CĐ18, #897 CĐ19, #895 CĐ12 and CĐ15). This does NOT imply six Topic-wide Academic/PED PASS or 16 remaining Topics are wrong. Continue correcting only **verified** defects in the one selected learner source per Topic. Remaining blockers include CĐ12 SGK canonical Written rubric equivalence, CĐ22 S1 original printed/PDF evidence, AP2 MathJax proof, full Practice/Written individual math checks and cross-topic source-owner Q15/V2/ready/REGISTER consolidation. No self-merge, deploy or other RELEASE action.


---

<!-- TOPIC_R16_EFFECTIVE_SOURCE_QA_20261117 -->
## R16 · 22-source effective-draft cross-check, original SVG path integrity and focused maths (17/11/2026)

The following is a **read-only cross-Topic SOURCE quality checkpoint** over the current AUTHORING Draft PR branches, not a new set of 22 learner versions or a new academic standard. Each row names **one effective current learner file** (one per Topic), fetched at its own GitHub PR HEAD. Former signed receipts/older draft files remain Git history/restricted to historical verification, not the chosen RELEASE source. The table MUST be refreshed after any newer authoring edit before a future final 22-topic pre-release QA.

| Topic | Current Authoring PR | One current learner SOURCE_PATH | Exact current Git blob | Actual referenced SVG paths accessible |
|---|---|---|---|---:|
| CĐ01 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic01-logic-sets/Temp_TOPIC01_R07_P2_LEARNER_PROSE_CANDIDATE_20261117.md` | `dc6e8366e912953f6fd6e1adfb641c601a99e538` | 2/2 |
| CĐ02 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_P2_LEARNER_PROSE_CANDIDATE_20261117.md` | `d1c05e91d3ca21d28981be404cbca23fb5937bb2` | 3/3 |
| CĐ03 | [#888](https://github.com/TMA2015/self-learning-math/pull/888) | `prototypes/thpt/content-drafts/topic03-algebra-equations/Temp_TOPIC03_R06_NUMBERING_CONSISTENT_20261116.md` | `daeeb5d571d120b31265f8c603a76049a1f2c78c` | 3/3 |
| CĐ04 | [#890](https://github.com/TMA2015/self-learning-math/pull/890) | `prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R06_D6_AND_CONDITION_CANDIDATE_20261117.md` | `5791f37b7ac777e62fd9088fa40aba5add1be3c0` | 5/5 |
| CĐ05 | [#889](https://github.com/TMA2015/self-learning-math/pull/889) | `prototypes/thpt/content-drafts/topic05-functions-graph/Temp_TOPIC05_R06_D6_NAVIGATION_CANDIDATE_20261117.md` | `663c5423070397ba5e389b5f307598664ab28808` | 3/3 |
| CĐ06 | [#891](https://github.com/TMA2015/self-learning-math/pull/891) | `prototypes/thpt/content-drafts/topic06-trigonometry/Temp_TOPIC06_R06_D6_NAVIGATION_CANDIDATE_20261117.md` | `3eb442f9399b2a6fb5b715953401585a3bed0c5d` | 3/3 |
| CĐ07 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_R07_P2_LEARNER_PROSE_CANDIDATE_20261117.md` | `3e49d4032d6274c8992cee26d50d0de1fd768d29` | 3/3 |
| CĐ08 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_R06_P2_LEARNER_PROSE_CANDIDATE_20261117.md` | `3f1f55d1a05eece7de25508318e8ed6c2cecb621` | 3/3 |
| CĐ09 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R06_P2_LEARNER_PROSE_CANDIDATE_20261117.md` | `252c4719396b3692ea6cf62f1845c0874b666a8f` | 4/4 |
| CĐ10 | [#886](https://github.com/TMA2015/self-learning-math/pull/886) | `prototypes/thpt/content-drafts/topic10-applied-derivative/Temp_TOPIC10_R06_LEARNER_METADATA_CLEANUP_CANDIDATE_20261117.md` | `069f4f52eb7ae88ac609f11cfa933ec09c2b08d5` | 4/4 |
| CĐ11 | [#887](https://github.com/TMA2015/self-learning-math/pull/887) | `prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_R06_LEARNER_METADATA_CLEANUP_CANDIDATE_20261117.md` | `8017adb5616901a4f2a159d1f6179bd2a3f62e1a` | 4/4 |
| CĐ12 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic12-triangle/Temp_TOPIC12_R04_P2_LEARNER_TITLE_CANDIDATE_20261117.md` | `ccf74ca47859794333b8ce6af56fbda4458c5f62` | 2/2 |
| CĐ13 | [#893](https://github.com/TMA2015/self-learning-math/pull/893) | `prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_R04_PED_LEARNER_CANDIDATE_20261117.md` | `ca2e68cc78413e8aa22679a3341b118a9f413bc1` | 4/4 |
| CĐ14 | [#843](https://github.com/TMA2015/self-learning-math/pull/843) | `prototypes/thpt/content-drafts/topic14-analytic-oxy/Temp_TOPIC14_ANALYTIC_OXY_R02_LEARNER_FIRST_20261116.md` | `8f61c67a11dd3e2869cbd71dbb279bdcfdd92bf3` | 3/3 |
| CĐ15 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic15-spatial-parallelism/Temp_TOPIC15_R05_P2_PUBLIC_LABELS_CANDIDATE_20261117.md` | `6017e5b6108bfa13241f10be6d4b7050ee68066d` | 5/5 |
| CĐ16 | [#848](https://github.com/TMA2015/self-learning-math/pull/848) | `prototypes/thpt/content-drafts/topic16-perpendicularity/Temp_TOPIC16_PERPENDICULARITY_R03_LEARNER_FIRST_20261116.md` | `0adf45aa8d776634d66f5c8e57b1c86ad77c8ed2` | 4/4 |
| CĐ17 | [#900](https://github.com/TMA2015/self-learning-math/pull/900) | `prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_TOPIC17_DISTANCE_VOLUME_R02_LEARNER_FIRST_20261116.md` | `7ee09cea9c33e2ae520a1a40df694ab7118adb42` | 2/2 |
| CĐ18 | [#896](https://github.com/TMA2015/self-learning-math/pull/896) | `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R06_P2_WRITTEN_RUBRIC_CLARITY_CANDIDATE_20261117.md` | `f8c6a52c84fecd0dd63dae60413cfbe4327f54b5` | 10/10 |
| CĐ19 | [#897](https://github.com/TMA2015/self-learning-math/pull/897) | `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R11_P2_CANONICAL_LABEL_LEARNER_CLARITY_CANDIDATE_20261117.md` | `5546204168eb3c3402b21af9ca1b9d08b118c378` | 4/4 |
| CĐ20 | [#884](https://github.com/TMA2015/self-learning-math/pull/884) | `prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R12_D6_NAVIGATION_CANDIDATE_20261117.md` | `a5507a33daea690a1193c965999e1d652340cb58` | 2/2 |
| CĐ21 | [#885](https://github.com/TMA2015/self-learning-math/pull/885) | `prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R06_D6_NAVIGATION_CANDIDATE_20261117.md` | `f1e9a0f2a52574f832c27a724189e9f1869940ae` | 2/2 |
| CĐ22 | [#895](https://github.com/TMA2015/self-learning-math/pull/895) | `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R10_P2_LEARNER_GUIDANCE_FIGURE_CANDIDATE_20261117.md` | `58619b8b613b382fbdd4874670bdc24d54ac1c62` | 2/2 |

### 22/22 structural and source-safety checks actually performed

- **22/22** current full Markdown learner sources fetched from each exact authoring branch. All 22 contain genuine learner **Kiến thức → Luyện tập → Tự kiểm tra** sections with worked examples, conditional practice and optional answer disclosures. Source only; not website Golden UI proof.
- Stripped unrendered HTML comments before scanning **student-facing material** for `item_id`, `Mastery`, `canonical`, `SOURCE_BLOB`, TODO/FIXME/placeholder: **no direct visible matches** in current 22 source snapshots. No visible answer `<details>` found inside each final selfcheck section; prior public replay is an intentionally ungraded self-practice and NOT protected Topic Readiness.
- Across 22 sources, counts of opening `<details>` and closing `</details>` balance per source; MathJax delimiters `\\(` / `\\)`, `\\[` / `\\]` numerically balance per source. This does NOT establish full TeX syntax validity or actual browser MathJax rendering.
- Read **all 77 distinct intra-topic resolved image SOURCE_PATH references** (including duplicated-use SVGs only once per path/topic) directly from exact branch in GitHub: **77/77 paths exist and contain an `<svg` element**, no missing image path in authoring sources. This is **asset-existence and SVG-source presence PASS**, NOT visual diagram semantics, renderer compatibility or responsive/browser AP3.
- Across 19 Topic areas, separately read representative worked examples (normally 2–3 from start/middle/end) and checked core mathematical conditions and resulting answers: no additional confirmed numerical errors in this **sampling**. This was NOT an exhaustive independent re-solve of every canonical Practice and Written item across the 22 Topics, nor every First Try vs worked Example semantic duplicate check.

### Direct corrections to effective current learner sources in R16

1. **CĐ04 (#890):** 16 Practice math expressions mistakenly in inline Markdown code converted to inline TeX in **six existing lines 640/644/646/724/728/730**, preserving original 93/93 public item placements, 93 answer disclosures, 18 selfcheck items and five SVGs; mathematical requirements for principal root vs equation roots and coefficient in standard scientific notation unchanged. Single existing learner blob `5791f37b7ac777e62fd9088fa40aba5add1be3c0`, **existing** Q18 updated receipt `89fad96831bbc99f7484f81fa32768d407a3ca5f`. Scoped DELTA_B on top of previous R06 D6/material correction; global V2 and independent render HOLD.
2. **CĐ13 (#893): verified substantive vector meaning defect** persisted across Knowledge and Practice: equations `AB+BC=AC`, `MA+MB=0`, `AC'=AB+AD+AA'`, etc. were presented without arrow notation, making false scalar segment-length readings possible. Fixed **23 Knowledge lines**, then **19 Practice/SGK feedback/Written/public-replay lines** **directly in SAME learner file**. Clear vector `\\overrightarrow{AB}` and length `AB=|\\overrightarrow{AB}|`, directed Chasles, midpoint and centroid, Oxyz; 68/68 placements, 68 opt-in answer disclosures, all five SVG reference placements and four original Written /7 score totals preserved. P04 and P06 public question-only replay stems rephrased identically to their corresponding Practice stems; no new item ID/answer/condition created. Source `ca2e68cc78413e8aa22679a3341b118a9f413bc1`, **existing** Q18 `af328fd23b035661bfdcffc467996827ef4e454c`. Q03/Q04 DELTA_C for Knowledge and DELTA_B source-equivalent for original bank typography in Practice. **G10 original canonical SGK dependency PR #750 still open DRAFT → Q01/Q15 active owner HOLD**. Browser AP/Q15 owner reconciliation not complete.
3. **CĐ17 (#900): pedagogical self-sufficiency** (Q09/Q13/Q14) — Knowledge frustum asked learner to operate a slider although model is only AUTHOR_ONLY_MODEL_REFERENCE. Corrected original same source line 326 to a fully static derivation for square frustum with big side 6, small side 6k, height 4, 0≤k≤1: `S=36`, `S'=36k²`, `\\sqrt{SS'}=36k`, `V=48(1+k+k²)`; checked `V(0)=48`, `V(1/2)=84`, `V(1)=144` cm³. No mandatory viewer/model dependency remains. Also repaired two escaped-backtick math labels. All student questions, Practice, eight public question-only selfchecks, rubrics, SVG preserved. Current source `7ee09cea9c33e2ae520a1a40df694ab7118adb42`; existing Q18/source A1/V2/ready/REGISTER updated to this one source; **THPT Topic V2 Intake/source-scope CI [run 44087819757](https://github.com/TMA2015/self-learning-math/actions/runs/44087819757) SUCCESS**. UI/browser R4 fails at Chromium install, so visual proof still HOLD.
4. **CĐ19 (#897):** four Knowledge learner lines now distinguish actual mathematical `n!`, `A_n^k`, `C_n^k`, `P(1)`, `1/x` (TeX) from literal calculator button names `nPr`, `nCr`, `SHIFT` (code). Original Practice, Written, Selfcheck, 56 canonical IDs, seven public selfchecks and 56 disclosures untouched. Current one learner source `5546204168eb3c3402b21af9ca1b9d08b118c378`; existing Q15/Q18/A1/V2/ready/REGISTER in branch updated in place. **THPT Topic V2 Intake/source-scope CI [run 44089223729](https://github.com/TMA2015/self-learning-math/actions/runs/44089223729) SUCCESS**. This was a source-equivalent DELTA_B clarity correction, not independent Topic all-academic PASS.

### 22-Topic full acceptance: explicit NOT-YET-PASS gates

The user-defined learning quality is decisive. The source-lint and sampled maths are useful but insufficient for full Academic/PED acceptance per outcome. **FINAL_ALL_22_CONTENT_QUALITY_VERDICT: HOLD** until original S1 SGK/SBT printed-page vs PDF page evidence (notably **CĐ22**), original G10 canonical owner PR #750 (notably **CĐ13**), full 22-topic point-by-point textbook/outcome and individual item academic/pedagogical review, actual MathJax/SVG UX renderer QA, and one harmonized current content-owner/V2/ready/REGISTER record each are resolved. No NotebookLM independent PASS automatically inferred from author self-review. No merge/deploy; RELEASE lane stays separate, and private RD1/official assessment data remain untouched.


---

## R17 · 4,272 TeX region braces across 22 selected learner sources (17/11/2026)

Additional source-level static QA, exactly on each effective learner SHA from R16 (source ownership and branches unchanged). After stripping unrendered HTML author comments, scan each `\\(...\\)`, `\\[...\\]`, and single-line `$...$` TeX region, check brace nesting and escaped literal braces for early closing/unbalanced grouping.

**Actual result:** **4,272** detected TeX regions across 22 sources, **zero unbalanced/underflow TeX brace warnings** by this controlled source parser. Counts by topic: 01:270 · 02:144 · 03:134 · 04:216 · 05:193 · 06:169 · 07:201 · 08:218 · 09:274 · 10:84 · 11:65 · 12:331 · 13:211 · 14:498 · 15:14 · 16:0 · 17:25 · 18:116 · 19:309 · 20:207 · 21:181 · 22:412. CĐ16 is consciously written in readable Unicode symbols and therefore has zero explicit TeX delimited regions by this measure, **not** zero mathematical substance; it has 21 topic outcomes/actual worked examples and needs the same eventual visual/API math-output check as other Topics.

**Precision limit:** This is a BRACE-BALANCE SOURCE CHECK, not a complete LaTeX grammar parser, proof of valid macros or web-based MathJax/Katex rendering; source-level math may still display incorrectly in Golden UI or responsive/mobile, so AP2 remains **UNVERIFIED**. No additional learner files or learner changes were made for R17. Source Q01/Q02/Q04–Q14/Q15/Q18 full-quality acceptance remains **HOLD** where direct original SGK PDF and/or item-level review is missing. In particular CĐ13 PR #750 and CĐ22 original printed-page/PDF-index S1 evidence are still open. No automatic RELEASE promotion, merge or deploy.
