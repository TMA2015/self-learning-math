# SGK Toán 11 Chương II — Q18 author self-verification · Bài 5–7

OWNER_MASTER: https://github.com/TMA2015/self-learning-math/issues/987
WORKFLOW: AUTHORING_ONLY / ONE_CHAPTER_BRANCH / THREE_EXISTING_CANONICAL_LESSON_FILES / ONE_Q18_RECEIPT
PACKET: G11-SGK-CHII-B05-B07-20261121
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 (Q01–Q18) + approved SGK editorial checklist R02 A1–A6
BRANCH: authoring/sgk-g11-chii-b05-b07-r02-20261121
Q18_VERIFICATION_MODE: Q18_AUTHOR_SELF_VERIFIED
AUTHOR_SIGNOFF: AUTHORING ChatGPT · 21/11/2026
VERDICT: SOURCE_SCOPED_ACADEMIC_PED_SELF_VERIFIED_PASS / NO_OBSERVED_P0_P1
HANDOFF_STAGE: AUTHORING_SOURCE_CANDIDATE_READY; NOT_NEW_CONTENT_READY_V2; NOT_RELEASE
INDEPENDENT_REVIEW_THIS_SNAPSHOT: NONE_CLAIMED
RELEASE_AUTHORIZATION: NO

## Q18 canonical source / Git blob lock

| LESSON_ID | Learner path — existing canonical, not an Rxx copy | main baseline Git blob | this authoring candidate Git blob |
| --- | --- | --- | --- |
| G11-B05 | docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md | 8634196e27b5bac8cb3089f433779b592809d955 | d582f2e6f7eafeb76e237fa58dd0f32b2e6c322f |
| G11-B06 | docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md | 43b285b679941e0748ad78f377ab9bbdd73ec3d3 | 3757ed7c46613bf9fb4cd7943c1b2884c5e19f10 |
| G11-B07 | docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md | 3d0886889e383cd76963e1fa3a5eef175a389080 | bc79c42ec0686e20461d1afbcaafdd0db909a312 |

This receipt is the *only new author receipt for the chapter*, tied to the three exact blobs above. Never silently update the old approved ready/ manifest for a new source blob. The older chapter canonical author content source blob 2101e2a248e0cf53ee11847b913b937cebcd0806 and its original receipt 09d77f92e6efb266ac15e0d972256319d92a3e1e remain immutable historical reviewed snapshots; those historical Academic/PED PASS decisions are not misattributed to this rewritten learner source.

## A1 / Q01–Q02: S1 and real outcomes

**Primary mathematics authority:** SGK Toán 11 KNTT, Tập một. Printed B05 pp42–47, B06 pp48–51, B07 pp52–55, chapter exercises pp56–57. Source scope is checked against original S1-scoped historical author/R03 chapter manuscript at Git blob 2101e2a248e0cf53ee11847b913b937cebcd0806, and reviewed source/handoff for that *old* snapshot. A current independent inspection of a final-print page-image copy of the SGK was **not repeated** during this round; do not assert CURRENT_SGK_FINAL_PAGE_IMAGE_PASS.

**SBT:** Original SBT Toán 11 KNTT Tập một primary 154-page scan previously visually checked, source document: prototypes/thpt/review-packets/G11_SBT_TAP1_PRIMARY_PDF_PRINTED_PAGINATION_RECEIPT_20261102.md, immutable Git blob 955efc35bce6a34f09bfc68f5552cb5a65d971b1; original PDF SHA256 fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229. Verified printed B05 pp31–34, B06 pp35–36, B07 pp37–39; chapter pp40–43. This is HISTORICAL_PRIMARY_SOURCE_VERIFIED, not a fresh scan of SBT during this chat. SBT is exercise-family support; SGK controls compulsory Core.

| Lesson / outcome | S1 formal scope and pedagogic teaching route | FirstTry (one canonical source each) | Existing original exercise bank retained |
| --- | --- | --- | --- |
| G11-B05 — SEQUENCE-DEFINITION | finite/infinite sequence as indexed function, discrete graph, n starts at 1 unless stated otherwise | TRY01 finite-index restriction, TRY03 alternating bounded/not monotone | C01, P05 |
| G11-B05 — EXPLICIT-TERM | four distinct ways to give sequence (list/explicit/recurrence/description), index validation, applied model | TRY06 growth-model position and index | C02, P01, P06 |
| G11-B05 — RECURRENCE | initial value(s) and recursive rule, dependence of each term | TRY02 recursive rule with n-dependent increments | C03, P02/P07 |
| G11-B05 — MONOTONICITY | strict increasing/decreasing and sign of u(n+1)-u(n) for all admissible n | TRY04 positive difference proof | C04, P03 |
| G11-B05 — BOUNDS | upper/lower bounds for all n, not necessarily attained | TRY05 two bounds (one unattained) | P04/P08 |
| G11-B06 — AP-DEFINITION | fixed difference d, sign incl d=0, and mean-of-three consequence | TRY01, TRY03 | C01/C04, P02/P05 |
| G11-B06 — AP-NTH | n−1 steps from u1, infer d and u1 from remote terms | TRY02, TRY06 | C02, P01/P04 |
| G11-B06 — AP-SUM | pair from both ends, S_n=n(u1+un)/2, with sign safety | TRY04 | C03, P03/P07 |
| G11-B06 — AP-APPLICATION | distinguish one term and full sum, units/int count | TRY05 | P06/P08 |
| G11-B07 — GP-DEFINITION | multiplication by q, positive/negative/0/1 edge cases, never divide by zero | TRY01 | C01, P01/P07 |
| G11-B07 — GP-NTH | u_n=u1 q^(n−1), with q=0 special initial-term convention | TRY02 | C02, P02 |
| G11-B07 — GP-THREE-TERMS | middle square relation with sign conditions, not an unconditional global converse | TRY03 | C04, P05 |
| G11-B07 — GP-SUM | subtract qS_n; q≠1 branch and q=1 branch, q negative or zero | TRY04/TRY05 | C03, P03/P04 |
| G11-B07 — GP-APPLICATION | distinguish nth-year growth and sum over years | TRY06 | P06 |

Project Source 08 SGK–Topic independent journeys preserved: none of the compulsory knowledge is outsourced to a Topic. B05–B07 chapter exercises, original Written/Anchor bank and end-chapter check remain in their separate established source paths.

## A2–A5 / Q03–Q14: work performed and math QA

**G11 B05:** Four Golden tabs, six coherent discovery pathways, three formal S1 Knowledge groups (definitions; *four* ways of giving a sequence; monotonicity/boundedness), six complete standalone solved examples and six voluntary opt-in FirstTry/HELP pairs. Four generic misconception groups. Existing SVG FIG-G11-B05-01_R01.svg (Git blob 154e10059899d635dec5aacc78616e3d53b9ad17) shows six discrete points of (-1)^n; caption teaches no continuous joining and no implied intermediate values.

**G11 B06:** Four Golden tabs, six discovery/FirstTry pairs, three formal Knowledge sections, six full worked examples and four generic errors. Derives constant difference, n−1, arithmetic mean, and pair-sum of first n terms with an explicit explanatory table. Existing SVG FIG-G11-B06-01_R01.svg (Git blob 7b26242cad828b6b4b6c27b87f3359273b03bf2a) restored beside its appropriate mathematical statement and given a new learner reading cue. It displays discrete u_n=3n, n=1..5 with d=3, not a continuous function.

**G11 B07:** Four Golden tabs, six concept-first attempts, three formal Knowledge groups, six full solved examples, five general error families and table separating u_n from S_n. Original SVG FIG-G11-B07-01_R01.svg (Git blob 3aa50318e6bbe1666d27bd82b5034101f1c100d9) restored to the GP definition, with caption about multiplying not adding and discrete indices. A material condition was caught and corrected: for 0<q<1 and u1>0 the sequence decreases toward zero; for u1<0 it increases toward zero. The q=0 special initial term u1 is explicitly handled so there is no invalid use of 0^0 at n=1. The q=1 sum formula is separate. q<0 sign alternation explained.

**Proof checks:** Each worked example contains independently reasoned method, solution and way to check, including integer index admissibility, complete recurrence initialization, strict inequality for all n, geometric q=0/1/negative, sign conditions for x^2=ac, and sum-vs-term distinction.
- B05 numeric QA: 5000 integer indices ×11 assertion families = **55,000 checks PASS**, relative-error tolerance 1e-10, worst relative deviation 4.399095377547536e-16; 10/10 direct example/TRY spot checks.
- B06/B07 combined: deterministic LCG seed 20261121, 8000 randomized AP/GP cases across positive/negative/zero q, **58,386 checks PASS**, maximum relative deviation 4.1014946481901703e-16. **25/25** independent example/FirstTry exact-answer spot checks (incl B05 cross-check).
- Numeric checks corroborate symbolic algebra, not replace source reading, condition proofs or outcome depth.

**Per-lesson final static QA on *locked blobs above*:** B05 19/19, B06 19/19, B07 19/19 checks PASS, **57/57 total**. Each validates ordered four-tab Golden, six Discovery arcs, all three SGK formal chapters, six reasoned worked examples, six unique source-owned FirstTry IDs, unique local/general HELP IDs, same bank-registered outcome skill IDs, six opt-in comparison panels, six local remediation panels and general errors, one footer, balanced inline/display MathJax delimiters, one original verified SVG with reading cue per lesson, verified existing Written deep link, no lesson-local CSS/JS or technical author token or duplicate student-facing official bank. This is static SOURCE QA only, NOT responsive visual/browser/CI/release test.

## Q15/Q16: one bank and protected assessment

Original public formative canonical remains unchanged:
- docs/assets/javascripts/thpt-g11-chii-b05-b07-source-locked-formative-r03.js, Git blob f9f11db523b4a40bbce549fc4bfab2ea356d717c, **36 original public Core/Practice records** (12 for each lesson). No modifications to their stems, keys, solution/exposure role or IDs.
- New public Knowledge FirstTry IDs THPT-G11-B05-TRY01..TRY06, THPT-G11-B06-TRY01..TRY06, THPT-G11-B07-TRY01..TRY06: 18 distinct source-owned pedagogic checks, one stem/answer/HELP per ID on ONE learner canonical each, independent of original C/P bank; no new official assessment or second student bank. Same source-canonical rule as Q15; exact official bank cross-reference checked. Exhaustive cross-branch GitHub search is not claimed.
- Existing original Written/Anchor unified bank unchanged: docs/thpt-preview/thu-vien/tu-luan-g11-chuong-ii.md, blob 2ddde229be6ee78855a244b08f63b6b9f5184220, six original Written/Anchor canonical. The three learner deep links all point to that one existing library. No new graded Written bank, no RD1 private items, Final Submit, server/learner records, Firebase, exposure state or Skill Mastery. Client practice and viewing an answer do NOT grant Mastery.

## Q17–Q18 / disposition

**SOURCE_SCOPED_AUTHOR_SELF_VERIFIED** for exact B05/B06/B07 learner blobs in this receipt; **P0/P1=0 observed for reviewed math/PED scope**, with S1 historic-review provenance and new math self-audit distinctly identified. No claim that NotebookLM reran independent review under the five Permanent Sources v2.1; R01/R02 prior independent Academic/PED verdict remains attached solely to its old source blob. A one-chapter Q18 receipt is sufficient for this focused editorial source delta, but a **new V2 handoff / new ready manifest / REGISTER parity** has **NOT** been completed for these new learner blobs. Thus do NOT mark the new chapter package CONTENT_READY, RELEASE_READY, or PUBLISHED solely by inheriting the old R03 ready manifest. Delivery is **AUTHORING_SOURCE_CANDIDATE_READY, ready for owner/RELEASE intake decision only when required gates are completed**.

**RELEASE not performed:** Website Golden runtime/render, 390/820/1440 AP1–AP5, exact HEAD CI, R1–R5, actual device P2, production source parity, live client FirstTry/HELP/MathJax/SVG, Q16/Final Submit exposure, merge/deploy and owner publication approval all remain with RELEASE. Owner's release priority is Math Lab 25 → 22 Topics, not SGK. Work on G11 B08 must begin only after logging the single #987 checkpoint, no side issue or second task.
