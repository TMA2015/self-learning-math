# AUTHORING QA M6 R02 — Đạo hàm và tốc độ thay đổi tức thời (07/11/2026)

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M6-R01-20261107
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18), single norm.
**LANE:** AUTHORING, one owner-approved vertical Topic pilot. No Golden/website/assessment/Firebase/release modifications.
**VERDICT:** SOURCE_AND_SELECTED_MATH_QA_PASS_SCOPED / INDEPENDENT_ACADEMIC_PED=PENDING / FULL_TOPIC_CONTENT_READY=NO.
**NOTE:** This is author preflight, not NotebookLM and NOT Academic/PED PASS.

## 1. SHA-locked artifacts actually read back on Draft PR #782

| File | Git blob SHA / actual readback | Function |
|---|---|---|
| Temp_TOPIC_FUNCTIONS_M6_KNOWLEDGE_CONCEPT_TO_SECOND_DERIVATIVE_R01_20261107.md | f35e7fcd99b853bb5f9392c6ded25c2e20aa012f; 12,086 chars | Learner-facing concept-first knowledge, 6 self-reveal First Tries and worked examples with why/conditions |
| Temp_TOPIC_FUNCTIONS_M6_PRACTICE_CANONICAL_REUSE_LEDGER_R01_20261107.md | c735a2e21bffe4ffe2e16d06de1d8592acc22674; 17,281 chars | 62 exact SGK public IDs, 9 Written IDs, 11 HELP, 5 SVG blob refs; 2 differentiated new transfer candidates with one canonical candidate stem+key+worked+D6 source |

The older R00 seven-module Student Knowledge Flow is a **historical pilot overview**, not a second canonical M6 source. When promoted after reviewer, source-of-truth must be chosen by explicit Delta, not copy the same MathJax, questions or rubric into two banks.

## 2. Original S1 directly visually inspected, including PDF offset

| Original source | PRINTED page range | PDF 1-based including cover | Source byte SHA256 |
|---|---|---|---|
| SGK Toán 11 KNTT Tập 2 B31 | 81–87 | 82–88 | 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491 |
| SGK Toán 11 KNTT Tập 2 B32 | 88–94 | 89–95 | same SGK SHA |
| SGK Toán 11 KNTT Tập 2 B33 | 95–96 | 96–97 | same SGK SHA |
| SBT Toán 11 KNTT Tập 2 B31 | 54–57 | 55–58 | a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189 |
| SBT Toán 11 KNTT Tập 2 B32 | 58–60 | 59–61 | same SBT SHA |
| SBT Toán 11 KNTT Tập 2 B33 | 61–62 | 62–63 | same SBT SHA |

Also inspected SGK ChIX end p97 opening and SBT ChIX end printed p63–65. These two PDFs are image-scanned originals (no text layer); direct render/visual reading, not OCR. **S1_VERIFIED_DIRECT_ON_SCOPED_PAGES**, not a claim of full S1 audit of unrelated chapters.

## 3. Actual math/structural QA executed

| Evidence | Observed result | What it does NOT prove |
|---|---|---|
| SymPy independent selected-case checks | **54/54 PASS** (54 unique test IDs). Source: local test script and generated JSON in author QA environment | Does not certify all outcomes, all examples, all links or independent Academic/PED |
| Difference quotient s(t)=t²+2t | Correct 6+h and limit 6 at t=2 | Meaning/wording still reviewer-dependent |
| Secant/tangent and absolute-value cusp | P(2,3), slope 2; one-sided absolute slopes −1/+1 | Geometry SVG presentation not yet browser QA |
| Product/quotient/chain and log-root | Correct symbolic derivatives and two transfer candidate solutions, with domain constraints | Not full bank dedup or official canonical promotion |
| Model v(t), a(t) and f'' sign | Selected values, signs and units correct; quartic f''(0)=0 without inflection | Does not establish all optimization outcomes |
| Knowledge HTML self-reveal | 6 opening and 6 closing details | Only source balance; real AP4 not done |
| MathJax block delimiters | 10 \[ opening, 10 \] closing on knowledge; 1 pair on ledger; inline is largely Unicode/math prose and still needs AP2 | Not actual MathJax/browser rendering PASS |
| GitHub source integrity | Readback of the two blob IDs above; no merge-conflict markers; no private RD1 stems/keys/rubrics | Not content approval |
| D5 existing image source | Five existing SVG files fetched, exact source blobs in ledger | Real SVG/alt/responsive placement still release gate |

**Preflight limitations:** SymPy cases select representative calculations, not all SGK/SBT problem variants; proof-style math like conceptual definitions, domain endpoint interpretation and graphical reading needs independent review. No answers or rubrics of held-out private Topic Readiness were placed in public GitHub.

## 4. Canonical Q15: R03 corrected 62 exact source items

**R03 AUDIT CORRECTION (07/11/2026):** Original G11 source Git blob `3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0` has **62 exact PART D Core/Practice headings**: B31=20, B32=30, B33=10, PLUS CHIX level `THPT-G11-CHIX-CHIX-C01` (integrated velocity/acceleration) and `THPT-G11-CHIX-CHIX-P01` (integrated tangent/second derivative). Prior scoped regex matched only B31–B33 and erroneously concluded “60 vs 62”; original PART D title **was correct**. 9 Written, 11 HELP and 5 FIG remain unchanged. Newly corrected M6 ledger blob `c735a2e21bffe4ffe2e16d06de1d8592acc22674` and R03 evidence `Temp_TOPIC_FUNCTIONS_CANONICAL_METADATA_EXACT_ID_RECONCILIATION_R03_20261107.md` establish the IDs. Only candidate placement is proposed, not live; no new item/rubric created. `SOURCE_STEM_COUNT_DIFF_HOLD=CLOSED` without changing historical G11 source.

New public D3 candidates: **CAND-P-M6-01** (continuity + differentiability at a join) and **CAND-P-M6-02** (domain and derivative of ln√(4−x²)). Both have complete worked/D6 in **one candidate source**, no official ITEM_ID promoted. Need whole bank duplicate scan + reviewer Delta C. Public exposure means neither may serve as independently held-out Topic RD1.

## 5. Q-based remaining gates — one standard, no parallel norms

- **Q01/Q02:** S1 printed→PDF verified exactly for M6; nine proposed M6 learning outcomes and their prerequisites still require independent per-outcome review. Other Topic modules cannot inherit this PASS.
- **Q03/Q04:** Knowledge explains derivative from a limit, secant→tangent, continuity vs differentiability, WHY of product/chain, conditionally valid derivative rules and a second derivative/acceleration model. Pedagogical/scientific reviewer must inspect reasoning, not infer from number of headings.
- **Q05/Q06:** 62 existing C/P plus 9 Written are available for placement, not cloned; source-count HOLD is closed by exact CHIX IDs. Two differentiated new public candidate items still require cross-bank semantic de-dup and Delta C review.
- **Q07/Q12:** Five canonical SVG and instructional readings already in M6 source; no duplicate drawing created. Browser AP3 and displayed mathematical labels still pending in RELEASE after source approval.
- **Q08/Q14:** 11 existing HELP and six First Try self-reveal, with paths back to Topic concepts. Help must render immediately at Topic; SGK deep-links are optional, never necessary.
- **Q09–Q13:** WHY → intuitive change → limit → geometry → rules → acceleration; this is deliberately concept-driven, not a mandatory fixed 7-step outline. Delta C requires independent NotebookLM pedagogy verdict.
- **Q15:** One item_id/key/solution/rubric, many placements; 2 new public candidates pending. Anchor is only label, not another bank.
- **Q16:** NO protected private Topic Readiness source/evaluation yet; no pre-Final-Submit hint, AI tutor, answer, correctness feedback or Mastery from public/ordinary Written.
- **Q17:** M6 content is available inside Topic as authoring source, but whole cross-grade Topic 10–12 remains in progress (M7 and source harmonization of M1–M3 still pending); no SGK PASS ⇒ Topic PASS inference.
- **Q18:** This R02 locks exact Git blobs. Review target M6 as NEW DELTA_C with exactly five THPT Permanent Sources v2.1 plus original S1, one receipt per reviewed snapshot. Historical SGK B31–33 original PASS remains scoped to original source.

## 6. Next checkpoint

Continue the authorized single-pilot **M7: use derivative sign to read monotonicity, extrema, asymptotes, sketch and optimize**, with direct SGK/SBT 12 source pages and G12 canonical shared bank. Then reconcile Topic M1–M7 to one source-of-truth, outcome coverage, FIG/D6, private held-out Readiness, correct versioned item placements and independent NotebookLM Academic+PED review. Only after full Q01–Q18/A1–A7 and independent verdict may AUTHORING create one V2 handoff/ready manifest/REGISTER. **Never merge/deploy or change website in AUTHORING.**

**CHECKPOINT:** M6_SOURCE_SCOPED_PASS; SYMPY_54_OF_54_PASS; Q15_62_PUBLIC_9_WRITTEN_11_HELP_5_FIG; SOURCE_COUNT_DIFF_CLOSED_R03; M6_NEW_CANONICAL_APPROVED=0; M6_ACADEMIC/PED=PENDING; FULL_TOPIC_CONTENT_READY=NO; RELEASE=NO.
