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
