# G10 B27 · P2 correction of SGK Knowledge formula visibility and image placement (Q18 R02)

**RECEIPT_ID:** G10-CHIX-B27-KNOWLEDGE-FORMULA-TREE-R02-20261121
**STANDARD_ID:** SLM-THPT-QUALITY-ONE
**STANDARD_VERSION:** 3.2.0, Q01–Q18 and X-F.3 semantic 3+1 contract
**LESSON_ID:** G10-B27
**SOURCE_CANONICAL_PATH:** `docs/thpt-preview/sgk/chuong-ix/bai-27.md`
**R02_PREVIOUS_SOURCE_BLOB:** `be9ce1b6de3aa381c47d143cfb3827d012ca9e3b`
**R02_CORRECTED_SOURCE_BLOB:** `759bfa7333b7a81f73fe6523fadc749695bf2001`
**EXISTING_SINGLE_SVG_BLOB:** `877abd0e755950e6112f1c2aaa33f281027ad33f`
**DELTA:** DELTA_C_ACADEMIC_MATERIAL (targeted pedagogical explanation) + DELTA_A_UI (formula frame, original image reused); no changed item/answer, mathematical outcome, condition or mastery.
**Q18:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT; **INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED**.
**OWNER_P2:** OWNER_P2_DEFECT_RECEIVED, OWNER_P2_RECHECK_PENDING (the previous B27 published P1 source remains immutable in history).
**BLOCKERS_ON_EDITED_SOURCE:** P0=0 P1=0 after targeted S1/self-QA; G3 exact-final-HEAD CI + G5 deployed HTML P1 parity required.

## Source and semantic verification

Primary S1 is SGK Toán 10 Kết nối tri thức tập 2 **printed pp.83–87**, B27:
- **§1, p83–84**, *Sử dụng phương pháp tổ hợp*: explains counting sample/event outcomes via combinatorial counting rules and gives examples, **no new boxed formal definition**. Neutral **KEY_FORMULA** in Knowledge 2.1 only reuses existing B24 combination count `n(Ω)=C(n,k)` and B26 classical probability `P(A)=n(A)/n(Ω)`. Conditions must be explicit: `0≤k≤n`, n distinct objects, exactly k selected as unordered set, **equal likelihood of every resulting group**, `n(Ω)>0`. This neutral card is an APPLICATION TOOL, not falsely attributed as a new B27 formal rule.
- **§2, pp84–85**, *Sử dụng sơ đồ hình cây*: SGK explicitly uses **diagram of multistep outcomes**, including its worked three-box tree. B27 uses already-reviewed four-distinct-card no-replacement tree, **same exact SVG file and SHA**, in Knowledge 2.2 immediately before its reading directions. The original same figure in Discovery 1.2 remains; no duplicated file, new illustration or SVG editing. Both placements have alt/caption.
- **§3, p85**, *Xác suất của biến cố đối*: SGK has **one formal framed formula** `P(\overline E)=1-P(E)`. The original approved blue `FORMAL_RULE` card in Knowledge 2.3 remains unchanged; do not add a bogus B27 new definition or turn examples into theorems. Formula from B24/B26 and SVG are not new B27 SGK box claims.

Evidence: exact textbook PDF textual page content https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf (text inspected under printed SGK headers; remote PDF screenshot service returned a cache miss, so no unverified PDF-index assertions). User decision is the source of correction and retained one anti-repeat list [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795), defect `B27-G0-KNOWLEDGE-FORMULA-FIGURE-20261121`.

## Q18/G2 affected-scope tests (source-locked)

- **GOLDEN:** exactly four named Golden tabs, same B27 route and marker; only Knowledge 2.1/2.2 enhanced.
- **KEY_FORMULA:** Knowledge §2.1 contains exactly one `data-b27-key-formula="combinations"`, class `thpt-g10-key-formula`, scoped neutral outline with **no coloured fill**, dark-mode styling; not `thpt-r4-rule-card` / `thpt-r4-concept-card`; no duplicated mathematics masquerading as independent B27 definitions.
- **IMAGE_IN_KNOWLEDGE:** Knowledge §2.2 contains exactly one `data-b27-knowledge-figure="reused-discovery-tree"` `<figure>` using existing `THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg`, and Discovery 1.2 has one link to **the same asset**, no new SVG. Both captions explain 4×3=12 ordered outcomes and equiprobability condition; the Knowledge figure is placed before the guide text.
- **FORMAL_RULE:** Knowledge §2.3 retains exactly **one blue FORMAL_RULE** for complement, no invented definition and no extra colored rule or numerical example box.
- **OUTCOME/PED:** The first two knowledge sections are visually self-sufficient: counting formula and source-labeled assumptions at the point of need; re-used tree and reading instructions at point of use; example solution tab remains separate. All 5 canonical First Try question stems and **5 closed answers** byte-identical, 7 HELP/D6 IDs, 6 worked solutions, one SGK/SBT citation at last footer.
- **MATHEMATICS_Q18:** all **75/75** previously rendered TeX tokens remain present, plus three added valid TeX render occurrences; math conditions `n(Ω)=C(n,k)`, `P(A)=n(A)/n(Ω)`, `P(A)=n(A)/C(n,k)` use *the same uniform-group sample space*. SGK small-probability principle belongs to B26, not B27.
- **ASSESSMENT_MODE:** `CLIENT_SELF_CHECK_NO_MASTERY`; no change to Q15 IDs, Q16/RD1, assessments, Firebase, THCS, Core/Practice/Topic or student data.
- **G3:** require exact-final-HEAD browser at 390/820/1440 px on both light/slate schemes, resolved MathJax, decoded original SVG in both tabs, correct figure/box semantics; fail if formula/figure placed in another tab only.
- **G5:** source locked to exact signed Git SHA; do not mark P1 until `gh-pages` generated HTML proves formula visible in Knowledge, reused tree twice, official rule once, unchanged B26 accepted HTML.

**NO_INDEPENDENT_REVIEW_PASS_CLAIMED; NO_OWNER_P2_PASS_CLAIMED.**
