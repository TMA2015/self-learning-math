# G10-CHIV-B09 · Q18 R06 · Tab 4 lỗi phân tích vectơ thật (owner P2 feedback 17/11/2026)

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `v3.2.0` Q01–Q18, X-F.1 4.x · **RELEASE_SCOPE:** SGK 10 B09 Knowledge Tab 4 only · **DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (replace vague PED/D6 advice with actual learner mistake and worked remediation) · **VERIFICATION_MODE:** `Q18_AUTHOR_SELF_VERIFIED`, **not** independent NotebookLM PASS. **OWNER_P2_STATUS:** `PENDING_CORRECTIVE_REVIEW`.

**DEFECT_ID:** `B09-F04` · **OWNER_EVIDENCE:** screenshot/tab 4 from 17/11 plus quoted paragraph beginning “Khi chưa phân tích được vectơ theo hai hướng” · **ACTIVE_DEFECT_LEDGER:** https://github.com/TMA2015/self-learning-math/issues/795 . **DEFECT_CLASS:** `Q08/D6 + X-F.1 + PED6/AP1`.

**PRIOR_R05_SOURCE_BLOB:** `a28fa50f223f260c8fded1f42b13065d3e047d63`
**PRIOR_R05_CANONICAL_BLOB:** `3c22b8d72d1f514257a4fe815bb1e46fccd7c3a3`
**R06_SOURCE_BLOB:** `3d79a17e9ba39cd0f46077823800f5f38c73e313`
**R06_ONE_CANONICAL_LESSON_BLOB:** `7f3139b851f6a1161de0b813eac2fa7909aae9ed`
**CANONICAL_SOURCE_PATH:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md`
**DERIVED_WEBSITE_MD:** `docs/thpt-preview/sgk/chuong-iv/bai-9.md`
**PREVIOUS_Q18_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md` (immutable R05 historical receipt, **not** second active draft)
**AUDIT_GATES:** G0–G5 master #795; exact HEAD CI/AP1–AP5/R1–R5 required before any corrective merge/deploy.

## G0 / S1 and learner-facing misclassification

**Original status:** B09 P1 published; learner tab 4 had two `??? tip` (4.1/4.2) and then a **top-level ordinary paragraph** “Khi chưa phân tích được…” outside the error list. It offers a general method / a D6 remediation path; it **does not identify any incorrect learner step, why the step is wrong or how a learner detects the misstep**. Mathematical content was mostly useful, but the placement **violates X-F.1** and creates an unnumbered third topic outside the 4.x error pattern. The owner raised the issue in P2 review.

S1 Toán 10 KNTT tập 1 B09 printed pp55–59, decomposition of planar vector on two **noncollinear vectors** is mandatory; B09 website Example 4 explicitly uses a triangle with $M,N$ midpoints. **No S1 mathematics changed**, no new requirement/notation or SGK subsection order. Historical deep 79 audit consulted in prior R05. Official NXB scan/page-index provenance gap unchanged; this correction uses verified existing B09 example + elementary vector subtraction.

## G1 / Targeted correctness and genuine error

New **4.3 collapsible tip**, not an additional HELP/item ID:
- **Specific wrong student step:** for $M,N$ midpoints of $AB,AC$, $`\vec a=\overrightarrow{AB}`, $`\vec b=\overrightarrow{AC}`, learner writes $`\overrightarrow{MN}=\tfrac12\vec a-\tfrac12\vec b`. This is actually $`\overrightarrow{NM}` (**wrong orientation/sign**).
- **Proof (independent of claims):** $`\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}= -\overrightarrow{AM}+\overrightarrow{AN}=-\tfrac12\vec a+\tfrac12\vec b`. Reversing endpoints gives $`\overrightarrow{NM}=\tfrac12\vec a-\tfrac12\vec b`. Since $A,B,C$ form a (nondegenerate) triangle, $`\vec a,\vec b` are noncollinear, so the pair of coefficients is unique. No vector division.
- **How to self-repair:** check arrow start/end → write three-point rule before substituting midpoint coefficients → verify signs by reversing arrow; return to B08 and Example 4; attempt public formative `THPT-G10-B09-P07` through existing deep-link. Diagnosis/reason/fix/independent self-check/route all explicit. It is **a genuine mathematical error, not general homework advice**.
- **No duplicate content:** original worked Example 4 unchanged; this is one incorrect line and focused debugging, not a second worked example nor the full method in Tab 3.

## G2/Q15–Q18 preservation and evidence

- R05 tab1 discovery, S1 §2.x, tab3 four examples, 3+1 roles, scalar/decomposition SVG, five First Try `TRY11–TRY15`, exactly **two original** `HELP-G10-B09-01/02` and written/formative banks all unchanged.
- R01 8 inherited B09 Core/Practice items and P07 JS are byte-exact in the single canonical manuscript. `B09-F04` is a **presentation and pedagogic correction within B09 Knowledge**, not new item, rubric, academic outcome, or Readiness assessment.
- Q16 source-locked held-out Final Submit, private RD1, no auto-graded written text, no Mastery writes, no data/Firebase/Topic change. B01–B08 owner P2 accepted snapshots are immutable.
- **Author math/Q08/X-F.1 self-QA result:** P0=0, affected-scope P1 academic/PED=0 in source manuscript. **NO OWNER P2** and no independent reviewer. Actual UI/browser and final exact-HEAD CI gates remain necessary.

## G3–G5 regression / no false P2

- `scripts/test-g10-chiv-editorial-source.cjs` verifies **3** tab 4 error disclosures, semantic wording for new third error, no stray prose “Khi chưa phân tích…”, two original D6 HELPs and exact R06 one-master SHA.
- `scripts/test-g10-chiv-golden-browser.cjs` verifies **real rendered tab 4** on 390/820/1440: 4.3 is a third closed disclosure, opening reveals explicit **Lỗi thường gặp / Vì sao sai? / Tự kiểm / Ôn và luyện lại** and correct MathJax vector orientation; first two unchanged.
- `scripts/test-ux795-g10-postmerge-headings.cjs`, isolated QA integration and other source SHA routers must follow `R05→R06` **without rewriting immutable R05**. All exact final HEAD full CI and released Pages B09 artifact required before `P1_VERIFIED`; owner will evaluate P2 separately. Log any failure/fix into the **same active #795** row `B09-F04`.

**AUTHOR_SIGNOFF:** `Q18_AUTHOR_SELF_VERIFIED / SCOPED_B09_F04_CANDIDATE`, not `P2_PASS`, not independent review. The only current authoritative B09 academic manuscript after this change is `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md` Git blob `7f3139b851f6a1161de0b813eac2fa7909aae9ed`, backed by exact derived website Markdown `3d79a17e9ba39cd0f46077823800f5f38c73e313`.
