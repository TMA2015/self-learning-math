# CĐ12 · R05 targeted AUTHORING learner-language and metadata hygiene receipt · 17/11/2026

PACKET_ID: TOP12-P2-LEARNER-CANDIDATE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT
REVIEW_SCOPE: Q01_Q03_Q07_Q10_Q14_Q15_Q16_Q17_EDITORIAL
SOURCE_PATH: prototypes/thpt/content-drafts/topic12-triangle/Temp_TOPIC12_R04_P2_LEARNER_TITLE_CANDIDATE_20261117.md
SOURCE_BLOB: 35148794c6396b213ec18930ac99f031d074c78e
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

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP12_P2_LANGUAGE_R05_SOURCE_35148794_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.
