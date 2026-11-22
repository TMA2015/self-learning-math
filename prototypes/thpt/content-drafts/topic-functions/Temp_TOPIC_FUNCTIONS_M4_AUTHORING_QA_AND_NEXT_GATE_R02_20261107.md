# AUTHORING QA R02 — Topic Hàm số và đồ thị M4 (07/11/2026)

PACKET_ID: THPT-TOPIC-FUNCTIONS-M4-R01-20261107
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18 (one standard)
LANE: AUTHORING
SCOPE: M4 of independent TOPIC pathway, not FULL Topic/SGK chapter.
REVIEW_STATUS: AUTHORING_QA_SCOPED_PASS, ACADEMIC/PED_REVIEW_PENDING
NO_RELEASE / NO_MASTERY / NO_RD1_PRIVATE_ON_GIT / NO_MERGE: YES

## 1. Source receipts, read-back SHA and academic source scope

- NEW exact M4 source: \`Temp_TOPIC_FUNCTIONS_M4_TRIG_EXP_LOG_D1_D6_AUTHORING_R01_20261107.md\` in this directory, Git blob **a3db248040abe2109410614f2f11f5ef84aff422**, GitHub readback verified. **M4 knowledge content + 8 pedagogical examples (1 reused SGK example), 5 First Try, 12 exercise illustrations triaged by Q15 (not 12 new items), 2 new Written candidates HOLD, 7 remediation families, D5 five existing FIG assets reused.**
- Q15 de-dup ledger: \`Temp_TOPIC_FUNCTIONS_M4_CANONICAL_REUSE_DEDUP_AND_Q15_R01_20261107.md\`, blob **3a399a40e837e2fef1ad04e2712ccbcb5a8ba839**, readback verified. **20 existing public SGK B03/B20 IDs verified** = 12 B03 + 8 B20, 3 existing applicable Written IDs (B03 W03, B20 W01 and W02-ANCHOR), **3 candidate NEW public practice problems, NO new canonical items approved**.
- Original SGK KNTT 11 T1 B03 printed p22–30, PDF 1-based p23–31; original SGK 11 T2 B20 printed p16–19, PDF p17–20. Both **entire relevant lessons were visually read** page by page. SGK PDF raw SHA256 T1 \`4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828\` / T2 \`14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491\`.
- Original SBT KNTT 11 T1 B03 printed p11–18, PDF p12–19; SBT 11 T2 B20 printed p11–15, PDF p12–16. Looked at original worked and exercise family pages in both scans. Raw SHA256 T1 \`fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229\` / T2 \`a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189\`. No direct PDF files or sensitive Drive URLs committed in public repo.
- SGK canonical source references fetched directly: B03 R03 PED source blob \`256ceb5edc5e02aec320e83e99c8e08e035654f3\`, B20 post-PASS Delta B source blob \`17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872\`. Academic PASS old SGK snapshots remain immutable; Topic narrative NEW requires independent DELTA C review.

## 2. Checks executed — no broader PASS inference

| Test | Actual output | Limit |
|---|---|---|
| Selected math via SymPy | **32/32 PASS** after correcting local test simplifications for \(\log_{1/2}8\) and \(\sin^2x+\cos^2x=1\) | Do not extrapolate to entire module math/PED PASS |
| Document readback | exact Git blob above, 29,906 characters | Source-locked candidate only |
| First Try toggles | **5 actual opening and 5 closing** HTML details | Not browser UI proof |
| MathJax delimiters | 335 opening/335 closing inline \(\;\); 1 opening/1 closing display \(\;\) | Parser counts, no real browser AP2 |
| D2/First Try/D3/D4 presence | 8 EX (including 1 reused), 5 TRY, 12 illustration labels, 2 provisional WRI labels, 7 HELP families | Counts do not prove outcome depth |
| Q15 exact read-back | 4 Core + 8 Practice G11 B03; 4 Core + 4 Practice G11 B20; 3 shared existing Written IDs | Candidate placement metadata is NOT website integration |
| D5 canonical blob readback | 4 trig plots and 1 exponent/log plot, each SHA in Q15 ledger | Browser plot/alt positioning and AP3 RELEASE gate pending |
| Private RD1 source protection | no private RD1 question/answer/solution/rubric in new files | Does not mean official TOPIC_READINESS has been designed/reviewed |
| GitHub source restriction | new files exclusively under prototypes/thpt/content-drafts/topic-functions | PR not merge/deploy |

**SymPy cases actually validated:** odd rational f, even x^4+1, trig periodic shifts sin(3x)/sin(2x), reference sin/cos/tan/cot values, 4 time points and extrema in two cosine models, growth factor 200·1.1², log inverse (3 and 1/2 bases), shifted log, cos x=1 at 2π, six-period sine, 0.8² decay, domain \(\sqrt{\log_2 x}\), the counterexample \(2^x\ne x^2\) at x=0 despite equality at 4, written point inversion and solutions, unit circle identity. Initial two predicate comparisons returned false due to **test-script canonical simplification omission** (SymPy gave \(-\log8/\log2\) and unevaluated \(\cos^2+\sin^2\)); after using \`sympy.simplify\` and \`sympy.trigsimp\`, **32/32**. No academic source answer changed.

## 3. Q-based gaps / next minimal work

- **Q01/Q02:** M4 original SGK/SBT source scope verified page-by-page, but **independent reviewer still must verify** each new Topic pedagogical outcome; nearby M1–M3 and M5–M7 require their own source reconciliation. Topic whole is NOT complete.
- **Q03/Q04/Q09–Q14:** M4 has actual why/concept-first exposition, 8 examples with assumptions and methods, 5 student First Tries with reveal and remediation; requires independent NotebookLM PED verdict. The v2.0 G10 Topic R01 PASS does not grant this new v2.1 PASS.
- **Q05/Q06/Q15:** Q15 ledger identifies 20 existing public items and 3 existing Written, with **3 candidate NEW** public questions having worked step-by-step solutions and D6 in the M4 source. These candidates need full cross-grade duplicate audit and reviewer promotion. The two proposed new Written are HOLD_DEDUP, **not** new library records.
- **Q07/Q12:** five existing SVG sources with exact blob IDs, pedagogical read-the-figure text. No new original art required absent real academic gap. RELEASE later checks AP3 without editing math source.
- **Q08/Q14:** seven misconception routes, reusable prior HELP-G11-B03-01/02 and HELP-G11-CHVI-B20-01/02; canonical HELP placement still to be mapped.
- **Q16:** full-scope hidden Topic Readiness NOT available, no private RD1 generated or published; demo-only remains no-Mastery.
- **Q17:** both pathways must independently teach everything required inside themselves. M4 Topic D1 present here; SGK links do not replace student explanations. FULL vertical Topic remains incomplete.
- **Q18:** exact M4 Git blob and reviewer receipt are required. **No NotebookLM Academic/PED verdict has been received** on new M4 source. Do not package multiple draft files as a review verdict. When full coherent review batch is ready, provide **real Temp_ files and ZIP from ≥3 files plus a 3–6-sentence prompt**, NotebookLM exactly 5 Permanent THPT sources **v2.1** with original S1; then AUTHORING V2/ready/REGISTER only if fully PASS.

**CHECKPOINT:** TOPIC_M4_AUTHOR_QA_R02=PASS_SCOPED; G11_S1_SGK_SBT_DIRECT_REVIEW=COMPLETE_FOR_B03_B20; M4_NEW_CANONICAL=0; M4_ACADEMIC/PED=PENDING; WHOLE_TOPIC_CONTENT_READY=NO; OWNER_RELEASE_AUTHORITY=UNCHANGED.
