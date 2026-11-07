# AUTHORING QA R02 — Topic Hàm số và đồ thị · M7 (07/11/2026)

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M7-R01-20261107
**LANE:** AUTHORING; owner-approved ONE vertical Topic pilot; no website integration/PR release/merge/deploy.
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; no new PED/academic standard.
**QA_VERDICT:** SOURCE_REFERENCE_AND_SELECTED_MATH_PREFLIGHT_PASS_SCOPED.
**ACADEMIC_VERDICT / PED_VERDICT:** PENDING independent NotebookLM 5 Permanent Sources v2.1 + S1.
**CONTENT_READY:** NO; **TOPIC_READINESS_PRIVATE:** NOT PREPARED/NOT PUBLIC; **MASTERY:** NO.

## 1. Git SHA exact source readback

| AUTHORING file | Git blob SHA | Actual contents |
|---|---|---|
| Temp_TOPIC_FUNCTIONS_M7_DERIVATIVE_TO_GRAPH_OPTIMIZATION_KNOWLEDGE_R01_20261107.md | \`944673fffe5dad9444c994e7719e5c054570bca2\` | 18,507 characters, 7 actual details/answer reveal pairs; 9 worked explanation examples, 6 original D5 FIG references; WHY/rule limits and recovery, Q01–Q14 candidate |
| Temp_TOPIC_FUNCTIONS_M7_S1_CANONICAL_REUSE_DEDUP_LEDGER_R01_20261107.md | \`7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d\` | 18,571 characters, 66 per-lesson existing source-candidate ID rows, 12 END RD0 demos excluded from protected readiness, 6 shared FIG/SHA, **36 HELP ID headings** (32 lesson + 4 END), 2 differentiated new public candidates |
| Temp_TOPIC_FUNCTIONS_S1_DIRECT_PDF_VISUAL_RECEIPT_R01_20261107.md | \`001a9dd34cf8af83e787fd28d760431fe63e1f24\` | Corrected G12 Tập 1 source pagination: PDF 1-based = printed+2; previous printed+3 statement was wrong |

**R04 corrected original G12 Chapter I source verdict:** Original source blob `f0862dcdab21dec136e43969f45c42638e7c7574` carries a frozen *pre-review* label `INDEPENDENT_PENDING`; independently verified **subsequent owner-review receipt** Git blob `8fef1c7dbd9b404881ff40cec8147c9ae89ef473` gives Academic/PED PASS on this exact original **SGK_CHAPTER** source (2026-11-02, 5 Permanent THPT v2.1) with exposure SYSTEM_HOLD. **M7 Topic pedagogy and new placements/transfer items have NOT been independently reviewed**. See R04 receipt triage. No historical source modified.

## 2. Original S1 page anchors and honest scope limits

**SGK KNTT Toán 12 Tập 1:** exact raw SHA256 \`faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd\`, 104 scanned pages. Original printed→PDF (1-based) verification: B01 p5–14→PDF7–16, B02 p15–19→PDF17–21, B03 p20–25→PDF22–27, B04 p26–32→PDF28–34, B05 p33–41→PDF35–43.

**SBT KNTT Toán 12 Tập 1:** exact raw SHA256 \`db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca\`, 117 scanned pages. B01 p4–10→PDF2–8; B02 p11–16→PDF9–14; B03 p17–20→PDF15–18; B04 p21–26→PDF19–24; B05 p27–32→PDF25–30; ChI end p33–37→PDF31–35.

**What was actually verified:** local original scans rendered and visually inspected for direct page-number anchors and selected representative theory/figures/exercise-family pages for each SGK and SBT part, plus original-GitHub source-author mapping. SBT printed p4, p17, p21, p27 were seen at PDF p2, p15, p19, p25; SGK printed p5, p15, p26, p33 were seen at PDF p7, p17, p28, p35. The original source spans are **available** in complete PDFs, but this turn does **not** certify that every paragraph/diagram on all 37 SGK chapter pages was visually audited. **Before independent full Academic/PED review, do the page-by-page S1 completeness pass per proposed outcome**, and do not substitute a TOC/source excerpt for those pages.

**Critical correction:** the earlier Topic S1 receipt mistakenly asserted G12 printed p5=PDF p8 (+3); actual original PDF p7 (+2). Fixed on AUTHORING branch as a documented **DELTA_B_SOURCE_EQUIVALENT metadata correction only**; no mathematical source or historical PASS altered.

## 3. Selected mathematical preflight (not a full academic review)

A deterministic local SymPy script \`_topic_m7_review/m7_math_preflight.py\` with source cases and JSON output, plus 5 marginal-cost addendum checks, reported **64/64 PASS** on 64 explicit mathematical predicates. Selected checked content includes:

- \(f=x^3-3x\) derivative signs and extrema; \(x^3\) derivative 0 without extrema.
- \(x^2\) closed/open domain comparisons, diagram-source \(x^2-4x+1\) endpoints and minimum.
- Rational hole \((x^2-1)/(x-1)\) and \((x^2-9)/(x-3)\) as finite-limit, not vertical-asymptote examples.
- \((3x+1)/(x-2)\) decomposition, vertical one-sided signs and horizontal y=3.
- Slant \(y=x+1\) as asymptote of \(x+1+2/(x-1)\).
- \(g=(x+2)/(x-1)\) derivative, zeros, intercepts, vertical/horizontal limits.
- \(h=x^3-3x^2\) extrema/root positions.
- 30×20 cm box feasible domain, derivative factorization, roots, continuous optimum, volumes for integer cuts x=3/4, endpoint behavior.
- \(C=x+16/x\) derivative, limits and global minimum; discontinuous jump counterexample with branch derivatives +1.
- Marginal-cost model \(K(q)=100+3q+0.02q^2\), \(K'(10)=3.4\) while \(K(11)-K(10)=3.42\) and first-unit discrete delta 3.02.

**Limits:** 64 sample predicates do NOT prove completeness of all SGK/SBT cases, all graphical interpretations, full D1–D6 coverage, pedagogy, assessment privacy or verified deployed UI. No source answer/key/rubric changed due to these tests.

## 4. Structural and canonical source preflight

**R03/R04 correction:** Previous regex omitted 4 CHI-END HELP IDs, but direct source yields 36/36, count closed. The original G12 source independent Academic/PED PASS has also been found and source SHA verified at `8fef1c7dbd9b404881ff40cec8147c9ae89ef473` (R04). **New Topic M7** still Academic/PED PENDING and Q16 protected readiness remains separate. Evidence: `Temp_TOPIC_FUNCTIONS_CANONICAL_METADATA_EXACT_ID_RECONCILIATION_R03_20261107.md`, `Temp_TOPIC_FUNCTIONS_NLM_UPLOAD_G10_G12_SOURCE_RECEIPT_TRIAGE_R04_20261107.md`.

| Check run | Observed | Boundary |
|---|---|---|
| M7 Knowledge source HTML | 7 \`<details>\` opening + 7 \`</details>\` closing | Balanced author Markdown, not browser AP4 PASS |
| M7 Knowledge math | 111 \`\\(\` opens/111 \`\\)\` closes; 3 \`\\[\` opens/3 \`\\]\` closes | Balanced delimiters, not browser MathJax AP2 |
| M7 source Git readback | 2 source blobs + corrected S1 blob verified, 0 merge markers/private RD1 material | Author preflight |
| G12 R00 chapter source headings | **78** exact source item headings = **66 B01–05** (20 Core, 28 Practice, 8 Application, 10 Written) + **12 END RD0** demos | **Original SGK_CHAPTER source Academic/PED PASS receipt verified**, but 12 END demos are public self-check, not protected RD1 and do not confer Topic readiness |
| G12 HELP source headings | **36** exact original HELP headings: 32 \`HELP-G12-BXX-NN\` plus 4 \`HELP-G12-CHI-END-NN\` | **R03 COUNT_CLOSED**, unchanged source, END four only public RD0 demo remediation |
| D5 existing assets | Six source SVGs, exact file Git blobs in M7 ledger | AUTHORING may guide reading; browser AP3 pending |
| Two differentiated public D3 cases | One two-branch positive-derivative/global-monotonicity counterexample; one continuous vs integer-constrained box optimization | \`NEW_CANDIDATE_HOLD\` after de-dup, **0 canonical new items** |
| Full Topic readiness | Nothing official generated in public, all source examples are formative | \`TOPIC_READINESS_INDEPENDENCE_HOLD\` |

**No-clone:** Written/Anchor remains one source/version/rubric; labels/placements may differ but no second copy. Original G12 SGK ChI R00 has independently reviewed owner PASS receipt `8fef1c7dbd9b404881ff40cec8147c9ae89ef473` on exact immutable source. The **new M7 Topic** still requires independent academic/pedagogical review and semantic duplicate checking; do not infer Q08 Topic or Q16 from original SGK source counts.

## 5. Outcome-level gates (Q01–Q18, not another standard)

| Proposed outcome M7 | Candidate learning evidence (inside Topic) | Open audit check |
|---|---|---|
| M7-O01 sign of f' and monotonicity | M7.1, EX-M7-01, TRY-T01, B01 FIG | Q02 proper sign-interval teaching |
| M7-O02 local extrema and counterexamples | M7.1, x³ vs x³−3x, point of nondifferentiability | Q03/Q09 condition and whether extrema can occur at f' undefined |
| M7-O03 global extrema/endpoints/nonattainment | M7.2, EX-M7-02, TRY-T02, B02 FIG | Q04/Q05 open vs closed and conditions |
| M7-O04 standing, horizontal and oblique asymptotes | M7.3, EX-M7-03/04, TRY-T03, B03 FIG | Q01/Q07 source and limit sign depth |
| M7-O05 distinguish hole and vertical asymptote | M7.3, one removable rational example | Q03/Q14 misconception remediation |
| M7-O06 survey rational branches | M7.4, EX-M7-05, TRY-T04, B04 FIG01 | Q04/Q07 diagram correctness |
| M7-O07 survey cubic points and roots | M7.4, EX-M7-06, B04 FIG02 | Q04/Q07 graph reasoning |
| M7-O08 optimize on feasible continuous interval | M7.5, box and \(C=x+16/x\), TRY-T05/06, B05 FIG | Q02/Q08 model constraints and endpoint logic |
| M7-O09 distinguish discrete and continuous optima | M7.5, public candidate integer box optimization | Q05/Q15 candidate novelty and answer scope |
| M7-O10 explain meaning of derivative rate in units | M7.6, EX-M7-09, TRY-T07, cost/marginal | Q01 B05 scope and dimensions |

**Full M7 PASS blockers:** R01 concepts + candidate D3 only; full original page-by-page review, canonical item register and new candidate duplication review (**HELP 36 ID count now reconciled R03**), full independent NotebookLM Academic+PED on exact source blob, figures and proof/conditions. Whole Topic G10–12 also needs M1–M3 harmonization, Q01–Q18/outcomes and protected independently held-out Topic Readiness.

## 6. AUTHORING next gate and safety

1. Close M7 metadata and S1 page completeness; assemble one canonical Topic knowledge source from modules M1–M7 with clear precedence (broad R00 sketches are historical, not competing canonical M4/M5/M6/M7).
2. Audit whole Topic outcome→item→HELP→FIG→role/placement/version; use **one** existing canonical bank, no duplicated Written/Anchor/rubric/solution.
3. Prepare an actual NotebookLM batch for independent Academic+PED with exactly **five Permanent THPT v2.1** plus original S1. When providing ≥3 \`Temp_*.md\` files, package one \`Temp_*.zip\` containing only \`Temp_\`-prefixed files; add 3–6 sentence prompt and unzip instruction. Source Git blob and SHA receipts must match exact reviewed snapshots.
4. Keep Q16: RD1 encrypted/protected outside public GitHub, no hints/AI Tutor/keys/correctness until Final Submit, no Mastery from formative/self-comparison. Do not create V2 handoff/ready manifest/REGISTER until Q01–Q18/A1–A7 full and independent Academic/PED PASS.
5. AUTHORING stops at approved handoff; website/Golden/Firebase/merge/deploy remain untouched and solely RELEASE responsibility.

**CHECKPOINT:** TOPIC_M7_SOURCE_R01_AUTHORING_QA_SCOPED_PASS; S1_G12_PAGINATION_CORRECTED; 64/64_SELECTED_MATH_PASS; G12_ORIGINAL_SGK_CHI_R00_ACADEMIC_PED_PASS_RECEIPT_VERIFIED; NEW_M7_TOPIC_DELTA_C_ACADEMIC_PED=PENDING; HELP_COUNT_36_VERIFIED_32_LESSON_PLUS_4_END_R03; NEW_CANONICAL_PROMOTED=0; TOPIC_FULL_CONTENT_READY=NO; RELEASE=NO.
