# G10 ChVI B15 · Q18 OWNER_SELF_VERIFIED Knowledge enrichment · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B15-OWNER-SELF-QA-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 (Q01–Q18), §X-C/§X-F; G0→G1→G2 whole-lesson editor verification
**LESSON_ID:** G10-B15 · **PATH:** SGK Knowledge · **MATH_S1:** Toán 10 Kết nối tri thức với cuộc sống, tập 2, *Bài 15. Hàm số*, printed 4–10 (PDF pages 5–11, per historical source-scan receipt)
**AUTHOR_LANE:** RELEASE, explicitly owner authorized to continue B15 after B01–B14 P2 PASS
**BASE_MAIN_COMMIT:** `467a3cd1231592c7e49de7c082cca052e9f39b31`
**BASELINE_PUBLISHED_B15_BLOB:** `01d905b7dd058515da590e63af1aeece5b34a081`
**CANDIDATE_B15_SOURCE_BLOB:** `131947762d1c2ad1c109602a5cbe2e7fea71652e`
**ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB:** `bda67d4ed6368179c5a8c9e0a368e149304ab71c`
**CANDIDATE_SCOPED_GOLDEN_CSS_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078`
**PRIOR_CHVI_S1_RECEIPT_BLOB:** `05ee519080506cf6028c785fb843a3c9482537ca`
**PRIOR_CHVI_EXAMPLE_UI_RECEIPT_BLOB:** `9751134e995c479322543c1c96fcffae226b85a3`
**ORIGINAL_BANK:** Public Core/Practice/Written/Final Submit, Firebase, RD1 unchanged: no assessment or learner records edited.
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, not independent NotebookLM reviewer PASS.
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for complete lesson explanation, examples and D6; targeted `DELTA_A_UI` for four teal definition/concept cards plus one blue formal rule on B15-only CSS selector. This is **one source canonical Markdown file**, not a second learning manuscript.
**SOURCE_REFERENCE:** Existing source-scan provenance `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md` (printed 4–10, verified historically from owner-supplied 102-page scan SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`), without re-opening or independently re-hashing that PDF in this turn. Never silently upgrade historical verification.

## G0–G2 whole-lesson owner-led editorial audit

- **G0:** Directly inspected published B15 baseline and latest owner-P2 accepted B12–B14 Golden (4 horizontal tabs, semantic teal concepts / blue rules, readable examples, precise headings and remedies), original ChVI outcome/receipt matrix. Kept section 2.1 **Khái niệm hàm số**, 2.2 **Đồ thị của hàm số**, 2.3 **Sự đồng biến, nghịch biến của hàm số**, exact KNTT S1 conditions and one original D5 mapping SVG.
- **G1 — not merely a diff review:** Discovery 1.1–1.3 is connected from real need to five observed situations; meaningful prerequisites replace generic repeated filler. Fixed a substantive original error: **TRY03 had answer/ID but no visible question**, now explicit prompt (A(−2;3), B(2;5), f(x)=x²−1) matching its existing byte-exact original answer. Four semantic concept/rule cards in formal S1 plus one extra concept for domain/range; no invented S1 section. Exactly four reasoned worked examples 3.1–3.4 with **Đề → Phân tích → Lời giải từng bước → Kiểm lại**; original three independent extra exercises and hidden solutions retained **byte-exact**. Golden ChVI existing runtime groups source text from **Lời giải.** up to **Kiểm lại:**; source does **not** add a second manual solution HTML panel.
- **G2 — read as learner:** checked all five canonical First Try in learner order 01/02/03/05/04, each with visible canonical **Em vận dụng.**, voluntary **Đối chiếu**, all five original answer HTML bodies unchanged. All five D6 labels now describe **concrete mathematically possible wrong results** instead of five identical "Gợi ý khắc phục" headers, followed by cause, numerical correction, misconception diagnosis and appropriate Practice/section return. There is no empirical claim about how often students make these errors; they are **plausible content-specific misconceptions** identified by actual wrong reasoning.
- **G3–G5 distinct:** browser 390/820/1440, MathJax, CSS, SVG, Q15/Q16, exact final HEAD, deploy/P1/physical P2 are separate technical and release gates. **No merge/deploy/P2 implied by this Q18 receipt.**

## Outcome/DELTA evidence (math verified by substitution and quantified definitions, not by counting cards)

| OUTCOME_ID | DELTA_ID | Mathematical/condition verification | Pedagogical evidence in revised canonical file | Self-audit |
|---|---|---|---|---|
| `B15_OUT_01` | B15-XC-01 | Each \(x\) has exactly one \(y\). A={(1,7),(3,2),(3,2)} is a function despite duplicate identical pairs; B with (3,4) instead fails uniqueness | 1.2.1 before 2.1 formal definition, Figure D5; 4.1 corrects actual false “duplicate x alone means not a function” | P0=0 P1=0 |
| `B15_OUT_02` | B15-XC-02 | \(f(x)=\sqrt{x-2}\): \(x\ge2\Rightarrow D=[2,\infty)\), outputs \(T=[0,\infty)\) attained by \(x=y²+2\). New worked \(g(x)=\sqrt{x+3}\): \(D=[-3,\infty)\), \(T=[0,\infty)\) attained by \(x=y²-3\) | Separate 2.1 definition of D/T; step-by-step example 3.2; 4.2 wrong D=T is explicitly countered | P0=0 P1=0 |
| `B15_OUT_03` | B15-XC-03 | \(x_0\in D\) and \(y_0=f(x_0)\) necessary/sufficient. \(x²−1\) yields \(f(-2)=3\), \(f(2)=3\ne5\), so A belongs/B does not; \(1/(x-2)\) excludes x=2, and f(3)=1 | Missing TRY03 prompt repaired; 2.2 teal definition + blue membership rule; 3.1 includes domain before point; 4.3 counterexample | P0=0 P1=0 |
| `B15_OUT_04` | B15-XC-04 | For all \(x_1<x_2\), \(3x+2\) difference \(3(x_2-x_1)>0\); for worked \(h=5-2x\), difference \(-2(x_2-x_1)<0\). \(x²\) decreases on negative interval, increases on positive; two-point anecdote insufficient | 2.3 universal-quantifier definition; 3.4 method before calculation, checks bound; 4.5 eliminates extrapolating from a pair | P0=0 P1=0 |
| `B15_OUT_05` | B15-XC-05 | In original \(C(x)=12\) for 0≤x≤3, then \(12+4(x-3)\) for x>3: \(C(3)=12\), \(C(5)=20\), not \(12+4×5=32\). At boundary wrong branch can accidentally give the same numeric 12 — method still invalid. New model \(P(2)=10\), \(P(4)=20\) | Situation 1.2.4, worked example 3.3 and precise D6 4.4: choose range first, excess only, right unit; synthetic fees are explicitly labeled hypothetical | P0=0 P1=0 |

**Q03–Q14:** Definitions/conditions before formula memorization, method decisions and limits in examples, learners attempt before reading Core, card captions explain purpose, figures retain original alt/interpretation, five D6 errors now substantively unique; four D6 links use Markdown-canonical `luyen-tap.md?item=...` relative paths, as checked against existing page file, instead of directory URLs that fail source link validation. Math self-audit P0=0/P1=0 in this affected Knowledge scope, subject to technical gate and owner's P2.
**Q15:** one canonical ID for each question. Five existing `THPT-G10-CHVI-TRY01..05` placements (actual teaching order 01/02/03/05/04), five existing HELP IDs, five original answer/reasoning HTML bodies **byte-exact**, original three extra practice stems and hidden answers byte-exact, unchanged public Core/Practice/Written. No test item has been cloned or placed into independent assessment.
**Q16–Q17:** no RD1, official Readiness, Final Submit, Mastery, Firebase, Topic, Student data; no keys or hints leaked. 
**Q18:** baseline SHA and all historical receipts immutable; candidate source & CSS SHA pinned above. Source-first no duplicate draft. Original math/conditions and old answer/ID/figure exact parity versus current source independently asserted at editing time. 
**LEARNER_EVIDENCE:** Pending owner physical P2 after deployment. **RELEASE_STATUS:** Draft candidate, not merged or deployed when this receipt was signed.

## Release requirements (not extra standards)

Run exact-HEAD source/receipt math/PED self-verification for the five affected outcomes; check Golden semantic teal/blue 4+1, visible First Try 5/5, four example solution panels only, five unique D6 headers, keyboard voluntary answer reveals, MathJax, SVG, font and overflow at 390/820/1440. Protect the approved B01–B14 owner P2 CSS prefix and B16–B18 source/answer blobs; do not rewrite old SHA receipts. Then PR QA, merge/deploy only after release gates, published HTML/asset SHA parity P1, owner actual device P2 separately. Unknown/changed shared CSS correctly qualifies for broader R4 according to owner CI decision.
