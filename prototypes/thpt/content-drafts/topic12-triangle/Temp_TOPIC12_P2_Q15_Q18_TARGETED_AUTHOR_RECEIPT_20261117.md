# CĐ12 · R06 TARGETED AUTHORING Q03/Q07/Q14/Q15/Q18 · source editing in place · 17/11/2026

PACKET_ID: TOP12-P2-LEARNER-CANDIDATE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
REVIEW_SCOPE: Q03_Q04_Q07_Q10_Q14_Q15_Q16_Q18_MATH_PRESENTATION_AND_RUBRIC_CLARITY
SOURCE_PATH: prototypes/thpt/content-drafts/topic12-triangle/Temp_TOPIC12_R04_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: 4c0fc6c5791648f4bb1bdd0cfa5dfa5b9ba6253e
SOURCE_BRANCH: authoring/topic12-triangle-solving-r01-20261113
PREVIOUS_R05_TARGETED_SOURCE_BLOB: 35148794c6396b213ec18930ac99f031d074c78e
PREVIOUS_CANDIDATE_SOURCE_BLOB: d4724b24f4dba4b45a2198860e2db8e2f472d7dc
IMMUTABLE_R03_BASELINE_SOURCE_BLOB: e74f32b1092d571af0091174a55104e7d3bec5b5
IMMUTABLE_R03_Q18_RECEIPT_BLOB: d8ad3986da4776260c950cca337e0407da015252
AFFECTED_SCOPE_P0: 0
AFFECTED_SCOPE_P1: 0
AFFECTED_SCOPE_P2: 0
AFFECTED_SCOPE_VERDICT: AUTHOR_SELF_QA_PASS
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## 1. Source delta and editorial rationale

The original R03/R04 signed sources remain immutable. This receipt supersedes **the previous targeted CĐ12 P2 receipt on this same Draft branch only**; prior candidate R04 title fix remains valid and is carried forward.

Verified precise learner-facing changes on R04 candidate:
1. Source lines 312–315 (old): remove the technical SGK/SBT provenance mini-section between Knowledge and Practice. Preserve the relevant **verified SGK class/volume/chapter/lesson** in one ordinary source line at the **end of the full Topic**, with no unverifiable PDF index or receipt/PR text in learner prose; the old SBT documentation stays in historical author custody.
2. Old Practice intro (around L321) and visible intro to 18 SGK cards (around L325): replace code/process words `canonical` and `item_id` with practical learner instruction to solve first and open *Đối chiếu* afterward.
3. Old Written rubric L475 and L623: remove references to *Mastery* and clarify human self-scoring **without changing any numeric step score or scoring condition**.
4. Old public selfcheck intro L715: replace technical *Mastery*, *official* and website-implementation claims with a clear instruction to solve twelve question-only items independently in a notebook and then return to Practice for optional self-comparison. **No new official assessment, Final Submit or Mastery credit is claimed.**
5. Original exact per-item question stems, choices, math worked solutions, answer keys and rubrics remain unmodified; source comment metadata remains author-only.

All six replacements were asserted once in the old candidate source. One SGK source line was appended at the end, following all twelve self-check question-only items. No scientific claim about external SBT page numbers is added.

## 2. Actual affected-scope mathematics, pedagogy and disclosure QA

- This delta **does not change any formula, hypothesis, answer, item/question stem, solution, grading point**. The only edits in disclosure texts are the two narrative sentences about comparing rubric points; the original rubric allocations are unchanged.
- Canonical marker sequence preserved **46/46**, ordered exactly as prior candidate, including Practice originals and public replay markers. Practice/Selfcheck total disclosure boundaries preserved **46/46**, no new reveal.
- Public selfcheck section contains **12 numbered visible question-only items** and no new key/rubric/hint within this section. It is `CLIENT_SELF_CHECK_NO_MASTERY`, not protected independent `TOPIC_READINESS`.
- Scanned rendered-language projection after stripping HTML comments for the obsolete technical terms `item_id`, `Mastery`, `canonical`, `receipt original PR`, `source SHA`: **0 matches**.
- The two existing SGK SVG references and geometry/data were not changed; browser/Safari/MathJax are **NOT TESTED** in this AUTHORING edit. Math expressions previously written as Markdown inline code are outside this six-span editorial delta; no AP2 PASS is assumed.
- The prior S1 receipt is unchanged; original SGK/SBT PDF page index is **not reopened** for this purely editorial delta, and no independent NotebookLM verdict is claimed.

## 3. Governance and closure

The old R03 signed source, original A1/V2/ready/REGISTER and other Topic copies are preserved untouched. This new candidate is **NOT_CONTENT_READY** pending global active canonical owner/version reconciliation, one matching current V2 handoff, ready manifest, REGISTER, and any other outstanding source-specific Q01–Q18/A1–A7 blockers. No protected RD1, student data, Firebase, official Final Submit, website source, merge, deploy or RELEASE action.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP12_MATHJAX189_R06_SOURCE_CCF74CA4_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.


---

## R06 superseding QA: full learner math notation, one file only

The R05 claims in Sections 1–3 above are **historical to its prior source**, NOT claims that no formula was touched in R06. The student material source path remains exactly the same existing file; no corrected learner-source filename and no extra source-version copy was created.

### Verified scope and actual correction

- Confirmed **189/189** rendered student math expressions in Markdown code spans across Knowledge, Practice/Written reveals and public question-only Selfcheck. Inline code was unsuitable for mathematics. Each one was replaced **in place** with MathJax-compatible `\\(...\\)` and TeX macros: sine/cosine/tangent/arcsine, degrees, powers, square roots, inequality signs, decimal comma, multiplication and fractions. The prior source contained 126 explicit inline MathJax expressions; current source contains 315 (126+189) after systematic conversion. Each converted expression has balanced TeX braces; no math backticks remain. Changed 79 existing lines; unchanged line count **769**; no extra sections, no new questions, no changed original numeric inputs or final answers.
- **One true mathematical-notational defect corrected in a reused SGK Written rubric (Bài SGK 9, around L470):** abbreviations `x=Rcos`, `y=Rsin` omitted their angle operand and looked like an incomplete formula. The learner now sees **`x=R\\cos\\alpha`, `y=R\\sin\\alpha`** for the specified angle in the coordinate model. This is a `DELTA_C_ACADEMIC_MATERIAL` pedagogical notation clarification, even though all 7 allocated points, numerical result and underlying method remain the same. Original canonical SGK bank remains distinct; canonical-owner/source equivalence of this rubric presentation requires scoped Q15 final check before global READY.
- **Structural parity on actual current source:** 46/46 ordered canonical/public replay marker placements preserved; 46/46 original voluntary `<details>` disclosures preserved in order; 12/12 question-only public selfcheck items preserved, no new key/hint/solution inside the Selfcheck section. Same two original SVG references and unchanged SGK source line at end. No HTML or learner-app runtime changes.
- **Source QA:** all 167 distinct converted expressions were checked for balanced TeX braces, conversion of trig operators and special symbols; source expression conversion was mechanical except explicit coordinate-angle rubric repair. Arithmetic/condition/source context around TOP12-O01…O12 sampled and checked in place; **this is NOT a full 34-item mathematical re-solve or independent NotebookLM review**, and not an actual browser MathJax render PASS.
- **State:** `AFFECTED_SOURCE_MATH_AND_PED_AUTHOR_SELF_QA_PASS` on the 189-format/2-rubric-operand-change scope, **`FULL_SOURCE_AP2_RENDER_VERDICT=UNVERIFIED`**, `GLOBAL_CANONICAL_Q15_OWNER_V2_READY_REGISTER_HOLD`, `CONTENT_READY=NO`. Do not activate private RD1, independent Topic Readiness, Final Submit, Mastery, website integration or deploy.

### Targeted independent review prompt (4 sentences)

Open the current learner file and compare the TOP12 R06 source against the R05 source exactly as recorded, paying particular attention to all MathJax conversions, the two angle-bearing coordinate identities and any SGK-owned canonical item. Verify that no numeric value, mathematical condition, solution, grade criterion or question answer was unintentionally changed, and check the original SGK/SBT where the academic owner differs. Review the complete learning flow for the 12 outcomes and the optional Selfcheck/Practice distinction, with P0/P1/P2 and minimal delta only. Return an affected-scope verdict without inventing a browser AP2 PASS or blanket Topic CONTENT_READY.


## CRITICAL_CORRUPT_PATCH_REJECTED; corrected from original source (17/11/2026)

The previous candidate `Temp_TOPIC12_R04_P2_LEARNER_TITLE_CANDIDATE_20261117.md` MUST NOT be used for authoring/release intake. Its naive math-code converter rewrote correct multi-digit rational expressions into **mathematically incorrect TeX mixed-number syntax** (examples: `25/169`→`2\\tfrac{5}{169}`, `144/169`→`14\\tfrac{4}{169}`, `84/21`→`8\\tfrac{4}{21}`, `13/2`→`1\\tfrac{3}{2}`). This is a confirmed `P1_MATH_CORRUPTION` in the discarded patch, not a source-original defect. **Do not copy its content into the correct source.** The patch has been superseded by converting all original 189 mathematical code spans directly from the mathematically correct **original** file, conservatively retaining each original rational numerator and denominator and checking that mathematical numeric tokens were unchanged. Source path above contains 46/46 unchanged item/public placements, 46/46 disclosure blocks, all 12 question-only selfchecks and original SVG assets; 189/189 math spans rendered using TeX, all braces balanced, no reconstructed fraction corruption. Author-facing version/Mastery/canonical/receipt jargon removed from learner visible prose; correct rubric angle now shows `x=R\\cos\\alpha`, `y=R\\sin\\alpha`.

**Current source corrected, not released:** Exact current one selected learner file SHA `4c0fc6c5791648f4bb1bdd0cfa5dfa5b9ba6253e` on SOURCE_BRANCH; previous candidate P1 errors are **rejected and must be deleted**. This Q18 receipt is kept as a historical trail of accepted/rejected changes and is superseded on all statements that asserted the naive candidate source was mathematically equivalent. **FULL Q15 shared SGK W05 original-owner rubric and independent AP2/browser/math review still HOLD**, no CONTENT_READY or merge/deploy.
