# G10 Chương I B01–B02 — deterministic R02 authoring source/outcome QA

QA_ID: G10_CHI_PED_R02_SOURCE_OUTCOME_QA_20261104
DATE: 2026-11-04
ROLE: AUTHORING_ONLY
PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
PR: https://github.com/TMA2015/self-learning-math/pull/641
BASELINE_PR_HEAD_BEFORE_AUDIT: 82f45173920731881e3fb8aa4a2f0cfe4a3d696c
R01_CANONICAL_SOURCE_BLOB: 95a554e31a613b8e215679fe6790738473d598df
R01_INDEPENDENT_REVIEW_BLOB: fece80dcb4b0e17d369e2ecbe12e8d13b672281a
R02_LEARNING_SOURCE_BLOB: 6e35f036329b11465189a2256cfbfd536e95993c
R02_AUTHOR_ZIP_SHA256: 196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d
SOURCE_AUTHOR_QA: PASS_SCOPED_STRUCTURAL_AND_SAMPLE_MATH
ACADEMIC_VERDICT_R02: NOTEBOOKLM_REPORTED_PASS_ON_SELECTED_R02_TEXT
PEDAGOGICAL_VERDICT_R02: NOTEBOOKLM_REPORTED_PASS_ON_SELECTED_R02_TEXT
REVIEWED_MOUNTED_SOURCE_TO_CANONICAL_GIT: UNPROVEN
Q18_VERDICT: HOLD
CONTENT_READY_R02: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Source verification — no change to R01 or R02 learner content

Deterministic stdlib script: `prototypes/thpt/audits/tools/qa_g10_chi_r02_outcomes.py`. It reads canonical `Temp_` Markdown files **from a Git checkout (no ZIP required)**, or from the original frozen ZIP, checks the expected original member sizes, SHA256 and Git blob SHA1, then validates the item/outcome map, single canonical `ITEM_ID`, all pedagogical stages, self-reveal order and sample worked results. An optional `--r01` input verifies the old original Git blob and all reused references. The script does **not** read NotebookLM internals and cannot produce an independent review verdict, Q18 PASS or CMS/RELEASE authorization.

The source ZIP passed `testzip()` CRC and SHA256 `196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d`. Four exact member proofs:

| File | Raw bytes | SHA256 of member | Git blob SHA1 | QA |
| --- | ---: | --- | --- | --- |
| `Temp_G10_CHI_PED_R02_LEARNING_20261104.md` | 30,927 | `8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339` | `6e35f036329b11465189a2256cfbfd536e95993c` | PASS |
| `Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md` | 4,681 | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `a112973b74768c3177d1a50a09229b214a1ef8b6` | PASS |
| `Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md` | 2,948 | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `ef7c1b5bec66aca0b4bd427218a4eb653cf9f92e` | PASS |
| `Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md` | 3,317 | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `3711fbd92e912661424d228c575b0dddf7dc979a` | PASS |

All source bytes retain UTF-8 LF. S1 source PDF SHA256 in both the matrix and S1 audit match pinned SGK Toán 10 KNTT Tập Một SHA256 `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2`, and SBT SHA256 `2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1` (this test checks declared source receipts, **not a new PDF re-audit**).

## 2. Eleven original outcomes and new canonical items

| Bài | OUTCOME_ID | New `ITEM_ID` | Concept-first source sequence / first-try answer |
| --- | --- | --- | --- |
| B01 | `G10-B01-PROPOSITION` | `THPT-G10-CHI-TRY01` | Statement vs question/open sentence; 14 divisible by 7, `k=5/4` cases |
| B01 | `G10-B01-NEGATION` | `THPT-G10-CHI-TRY02` | Negation of universal statement requires one counterexample, option B |
| B01 | `G10-B01-IMPLICATION` | `THPT-G10-CHI-TRY03` | 8-divisibility implies 4-divisibility, converse fails at 4 |
| B01 | `G10-B01-EQUIVALENCE` | `THPT-G10-CHI-TRY04` | Integer evenness of `n` iff `n+2`; proof in both directions |
| B01 | `G10-B01-QUANTIFIERS` | `THPT-G10-CHI-TRY05` | `∀n∈ℤ:n²>0` refuted by `n=0`; negation `∃n∈ℤ:n²≤0` |
| B02 | `G10-B02-MEMBERSHIP_SUBSET` | `THPT-G10-CHI-TRY06` | `2∈{2,4}`, `{2}⊆{2,4}`, `{2}∉{2,4}` |
| B02 | `G10-B02-UNION_INTERSECTION` | `THPT-G10-CHI-TRY07` | Intersection `{b,c}` and union `{a,b,c,d}` |
| B02 | `G10-B02-DIFFERENCE` | `THPT-G10-CHI-TRY08` | `A\\B={1,3}`, `B\\A={6}`; difference is not commutative |
| B02 | `G10-B02-COMPLEMENT` | `THPT-G10-CHI-TRY09` | `U\\A={0,2,4}` with explicitly declared universe |
| B02 | `G10-B02-INTERVALS` | `THPT-G10-CHI-TRY10` | `(-2,4]∩[1,6)=[1,4]` and union `(-2,6)`; endpoint evidence |
| B02 | `G10-B02-VENN_MODEL` | `THPT-G10-CHI-TRY11` | Venn four regions: `12+6+9+5=32` |

All **11/11** sections in the canonical source have correct B01/B02 `LESSON_ID`, `OUTCOME_ID`, exactly one canonical `ITEM_ID` declaration and one matching matrix row, the same placement `SGK_PRE_CORE_FIRST_TRY`, the correct public unscored role, and expected `REMEDIATION_HELP` + `REUSE_EXAMPLE`. Content appears in strict order **PED1 WHY → PED2 prerequisite → PED3 meaning → formal conditions → PED5 method → PED6 TỰ THỬ → hidden solution in one `<details>` → targeted remediation → return to R01**. These are source-order tests, **not website UI tests**.

Direct connector check against the immutable R01 source Git blob `95a554e31a613b8e215679fe6790738473d598df` verified **all 11/11** R02 referenced old item IDs, D2 examples and original HELP IDs exist in R01; the sole new `HELP-G10-B02-03` correctly targets `THPT-G10-CHI-TRY10` and has a five-step D6 remediation route. Old R01 worked answers, 18 canonical items, 7 D2, 2 SVG, 4 HELP and original reviewer receipt were neither edited nor re-reviewed.

## 3. Deterministic run and negative control

Commands available **after checkout** (the `--r01` command is documented but was not run in the local container, which lacks a raw R01 file):

```bash
python prototypes/thpt/audits/tools/qa_g10_chi_r02_outcomes.py \
  --source-dir prototypes/thpt/content-drafts/G10_SGK_CHI_PED_R02_REVIEW_CANDIDATE_20261104 \
  --r01 prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md

# Only when original ZIP is available:
python prototypes/thpt/audits/tools/qa_g10_chi_r02_outcomes.py \
  --zip Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip
```

Local tests on the original ZIP alone and on the extracted four raw files both yielded: `SOURCE=PASS_4_FILE_SHA256_GIT_BLOB`, `MATRIX=PASS_11_OUTCOME_11_CANONICAL_ITEMS`, `PED=PASS_MARKER_ORDER_AND_11_SELF_REVEALS`, `MATH=PASS_11_AUTHOR_CONTROL_SAMPLES`; `R01_REFS=NOT_PROVIDED` for these *local* tests because the old R01 Git source was checked separately through the live GitHub connector. The repo command above enables verifying all R01 pointers in one run from an actual Git checkout. The control cases use elementary integer/set/interval/Venn computations and exact answer-panel assertions; they do not substitute independent pedagogical review.

**Negative control:** A copy of R02 learner content was deliberately changed from `X∩Y=[1,4]` to the false `X∩Y=[1,4)` **outside the canonical source/ZIP**. Running the checker on the modified copy returned **exit 2** and `SHA256_MISMATCH:Temp_G10_CHI_PED_R02_LEARNING_20261104.md`. The temporary mutated copy was discarded; canonical source remains unchanged. This verifies fail-closed source custody for an accidental/malicious content edit, rather than merely counting IDs.

## 4. Remaining AUTHORING gates and exact handoff boundary

1. **Q18 remains `HOLD`**: the independent NotebookLM reviewer reported Academic/PED PASS on the *selected* four R02 files but also declared reviewer-loaded byte parity with canonical Git as `UNPROVEN`. Multiple reviewer returns did not furnish actual loaded input bytes or a reproducible full content diff. Authoring source-vs-Git PASS cannot establish reviewer input identity. A string of correct outcome names or model-written SHA256 values is not enough.
2. The source material here is a **B01–B02 pedagogical Delta C**, not a fully reviewed SGK ChI independent readiness packet. It cannot be relabeled `SGK_CHAPTER/FULL_LEARNING_PATH` to pass V2, and the previously owner-approved V2 supplementary types are **experience** and **year-end public revision**, not a general `PED_BRIDGE` shortcut. Keep `CONTENT_READY_R02=NO` and no `ready/REGISTER` promotion until source receipt, valid scope, A1–A7 and exact-final-head QA are established.
3. If a genuine source file identity issue is proved, retain the original R02 blob and scope any correction; do **not** rewrite original PASSed R01 math. If no data can be exported from NotebookLM, the only reliable alternative is a new independent, *provably source-bound* review receipt on unchanged canonical Git files—without pretending NotebookLM calculated hashes it cannot access. No further identical hash-explanation prompts are useful.
4. Neither Academic/PED reviewer-reported PASS nor this author-side automated QA can authorize website integration, Final Submit state, official Mastery, private RD1 publication, merge or deploy. No work was performed in RELEASE or Topic branches.

**Checkpoint:** `SOURCE_ZIP_GIT=PASS`, `G10_CHI_11_OUTCOME_PED_STRUCTURE=AUTHOR_QA_PASS`, `R01_REFERENCE_FIDELITY=PASS`, `Q18=HOLD`, `CONTENT_READY=NO`, `BLOCKED_BY_AUTHORING=Q18_REVIEWED_SOURCE_TO_CANONICAL_GIT_UNPROVEN;V2_FULL_CHAPTER_SCOPE_UNPROVEN`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`.
