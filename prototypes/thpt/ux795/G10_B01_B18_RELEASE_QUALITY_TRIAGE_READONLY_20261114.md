# G10 B01–B18 — RELEASE read-only source triage · 14/11/2026

**State:** `RELEASE_AUDIT_ONLY / OWNER_QUALITY_HOLD / NO_MERGE / NO_DEPLOY`  
**Canonical standard:** `SLM-THPT-QUALITY-ONE v3.1.0` (Q01–Q18; no extra standard)  
**Source snapshot:** `main=b103cd91cd32a2ff3accd1ae14c24870330ef9a2`  
**Evidence:** 18/18 actual Knowledge Markdown files opened on main (source inventories below); S1 findings in [#861](https://github.com/TMA2015/self-learning-math/issues/861), cross-grade UX [#795](https://github.com/TMA2015/self-learning-math/issues/795). **This is NOT Academic/PED PASS, NOT a full SGK PDF page-by-page audit, NOT a browser/device certification.**

## A. Source inventory: one row per lesson

All 18 source pages have the four prescribed Golden tabs. **This is layout evidence ONLY.** Column "Box" counts appearances of `thpt-r4-knowledge-conclusion` in source, not validated maths. "Figure" counts Markdown/HTML `<figure>` elements, not verified geometry. Source SHA values are intentionally **prefixes** for a compact triage table; full Git blob SHA must be taken from GitHub for any source-locked Q18 handoff.

| Lesson | Chapter | Source blob prefix | 2.x headings | Box | Figure | HELP tips | Triage finding (no PASS inferred) |
|---|---|---|---:|---:|---:|---:|---|
| B01 | I | `fb4bd72f61` | 4 | 4 | 1 | 2 | S1 5 official sections vs 4 web 2.x; map 3/4 separately to prove content present |
| B02 | I | `8a7b90f176` | 4 | 4 | 2 | 3 | **P1 AUTHORING Q01/Q02:** missing teaching block "Các tập hợp số" N/Z/Q/R, per direct S1 cross-check #861 |
| B03 | II | `c9ae5104c2` | 5 | 3 | 1 | 2 | S1 2 official sections vs 5 microtopics in 2.x; distinguish teacher scaffold from original SGK sections |
| B04 | II | `2c43295816` | 5 | 3 | 1 | 2 | S1 3 official sections vs 5 microtopics; verify optimization and integer examples as applications, not original headings |
| B05 | III | `d45eacd18a` | 5 | 2 | 1 | 2 | Verify tan/cot domain, angle sign and why-method in examples |
| B06 | III | `3a2f439235` | 5 | 3 | 2 | 2 | Verify law-of-sines/cosines, Heron conditions, figure/solution parity |
| B07 | IV | `d48a1b9eda` | 2 | 0 | 1 | 2 | Missing Knowledge conclusion component; vector definitions need semantic role and S1/outcome review |
| B08 | IV | `dcdb7aec2c` | 2 | 0 | 1 | 2 | Missing Knowledge conclusion component; vector sum/difference examples need readable reasoning |
| B09 | IV | `2529b915e4` | 2 | 0 | 1 | 2 | Missing Knowledge conclusion component; k=0 and direction conditions need explicit learner checks |
| B10 | IV | `ceaa76688e` | 2 | 0 | 2 | 3 | Missing Knowledge conclusion component; 1 generic "Tự khắc phục trong năm bước" tip |
| B11 | IV | `2a1381689f` | 3 | 0 | 2 | 3 | Missing Knowledge conclusion component; dot-product / angle constraints and example reasoning review |
| B12 | V | `386a8d46bb` | 3 | 0 | 1 | 2 | Missing Knowledge conclusion component; "b." heading without matching "a." under section |
| B13 | V | `0459b67858` | 3 | 0 | 1 | 2 | Missing Knowledge conclusion component; check median/quartile/mode interpretation on real examples |
| B14 | V | `21c1ef5927` | 3 | 0 | 2 | 2 | Missing Knowledge conclusion component; variance, box plot, outlier constraints need semantic QA |
| B15 | VI | `01d905b7dd` | 3 | 0 | 1 | 5 | **P1 AP3:** mapping SVG text too small when scaled; 5 identical generic HELP titles; important definitions not boxed |
| B16 | VI | `4ddf9c449f` | 2 | 0 | 2 | 5 | **P1 Q03/Q07/Q12:** inline SVG only has title+text, no graph; y=x²−4x+3 vs guide for different parabola; 5 generic HELP |
| B17 | VI | `1a3481ee20` | 2 | 0 | 1 | 5 | Sign theorem not semantically boxed; 5 generic HELP; internal authoring labels in learner prose |
| B18 | VI | `91d22f1af8` | 2 | 0 | 1 | 4 | Root equation equivalence conditions not boxed; 4 generic HELP, root/domain check required |

**Count observations:** 18/18 four-tab sources; 12/12 B07–B18 lack the `thpt-r4-knowledge-conclusion` component; 19 identically titled HELP tips in B15–B18 (5+5+5+4); one B16 inline text-only SVG and explicitly mismatched diagram reading. These counts **do not** measure lesson completeness, content quality or Golden browser behavior.

## B. Required outcome-level evidence before lifting the hold

1. **AUTHORING/S1**: for each affected 2.x concept identify original S1 book/tập/printed page/PDF index, outcome, condition, theory, independently verified example and canonical item placement. B02 number sets and B16 actual curve are P1 source defects; only AUTHORING may make material maths/PED changes (targeted DELTA_C/Q18 receipt). If direct S1 pages are unavailable, write `SOURCE_GAP_HOLD`, not a guessed mapping.
2. **RELEASE/visual**: run 4 tabs on rendered browser at 390/820/1440 and real Safari P2 as required. Verify MathJax on formula **and exercise/solution**, true figure shapes/labels/axes (not just DOM existence), computed scaled SVG text, adjacency to guide, actually usable D6 navigation. Keep existing THCS, G11/G12, Q15/Q16, RD1, Final Submit, student data and Gemini protected.
3. **As-student test**: without access to reviewer commentary or solution, follow a key concept through a reasoned example and solve a genuinely different example; demonstrate remediation on a predictable misconception. No quota of cards/sentences/illustrations. Record source and browser evidence separately.
4. **Disposition per lesson**: choose `RETAIN` / `REWRITE_SECTION` / `REAUTHOR_LESSON` only after real S1 + outcome + learner review; provisional "review needed" is not `RETAIN` or PASS.
5. **Release**: three existing gates `CONTENT_MATH_PED_SOURCE`, `ASSESSMENT_DATA_SAFETY`, `RENDER_RELEASE_QA` all satisfy correct-source SHA + CI/browser on final HEAD + owner authority. P1 actual gh-pages parity and P2 physical-device are separate evidence; do NOT infer from CI.

## C. Reproducible *detection*, not fake automatic teaching QA

Run `node scripts/audit-thpt-g10-b01-b18-release-evidence.cjs --self-test` for nine synthetic negative/positive controls (missing B02 section, text-only B16 SVG, conflicting graph reading, duplicate HELP titles); run without arguments against a repository checkout to obtain a Markdown inventory. The probe is **read-only**, not connected to deploy. A lesson named “Các tập hợp số” without actual teaching, or an SVG with one fake `<path>`, **still requires semantic human review**. A clean report can **never** establish Academic/PED PASS: it does not compare source PDF page-by-page or understand all geometry/solutions. Known P1s intentionally remain visible; do not "fix" the test to suppress legitimate findings.

## D. Owner boundary / next work

- Issue [#861](https://github.com/TMA2015/self-learning-math/issues/861) retains priority for G10 B01–B18 P1 academic/visual owner HOLD. Cross-grade master [#795](https://github.com/TMA2015/self-learning-math/issues/795) tracks 79 G10/G11/G12 lessons, SGK supplemental experiences, Core/Practice/Written and assessment regression. This audit PR carries only documentation and a read-only QA probe.
- PR [#856](https://github.com/TMA2015/self-learning-math/pull/856) G10 ChVII remains Draft/HOLD despite 7/7 exact-head CI, pending owner's renewed scope authority; never merge intermediate #845/#850.
- **No math source, answered item, figure, RD1, scoring, Firebase, Golden JS/CSS, production website or deploy workflow is altered here.** `NO_MERGE_NO_DEPLOY`.
