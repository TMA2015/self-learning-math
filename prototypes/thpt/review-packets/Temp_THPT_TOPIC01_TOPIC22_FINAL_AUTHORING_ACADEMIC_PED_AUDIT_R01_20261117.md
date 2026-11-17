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
