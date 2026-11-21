# CĐ21 R06 · Q08/PED6 + Q15/Q18 TARGETED AUTHORING RECEIPT · 17/11/2026

PACKET_ID: TOP21-R06-D6-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: DELTA_C_PED_TARGETED_Q08_Q14_Q15_Q18
SOURCE_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R05_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: aa325637f659bc5f8ba504f6ce0129e07340a41d
ORIGINAL_R05_SOURCE_BLOB: 65938a700e0da630694e9cbb6e636d337e67aeb5
ORIGINAL_R05_AUTHOR_Q18_RECEIPT_BLOB: aa3e00f55eb8f6930e23e9b15bbba3ba2d8e972a
AFFECTED_P0: 0
AFFECTED_P1: 0
AFFECTED_P2: 0
AFFECTED_Q08_PED6: AUTHOR_SELF_QA_PASS
AFFECTED_Q15_VERSION_ID_MATH_PARITY: AUTHOR_SELF_QA_PASS
AFFECTED_Q18: AUTHOR_SELF_QA_PASS
ACTIVE_CANONICAL_BANK_MATRIX: CURRENT_SOURCE_EXACT_Q15_AUTHOR_QA_PASS
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## 1. Exact Git delta and version control

The old R05 and new R06 learner sources were both refetched from GitHub with their exact blobs. After removing the new R06 author-only HTML comment, line-level diff shows exactly 22 changed source lines:
- First Try marker lines 43/80/117/154/197/234/277/310 and their D6 lines 48/85/122/159/202/239/282/315.
- Written marker lines 472/504/534 and their D6 lines 493/523/547.
- No other source lines change. The entire Luyện tập section outside its three Written D6 paragraphs is unchanged; the full Tự kiểm tra question-only section is byte-identical. There are 19 original canonical public item IDs (eight T, eight P, three W), and all remain unique in the candidate. Math formulas, example stems, key values, solution reasoning, all rubric points, diagrams and disclosure open/close are untouched.
- Changed D6 solution content requires versioning: T01–T08 now TOP21-R06 (from R01); W01–W03 now TOP21-R06 (from R03). Practice P01–P08 remains TOP21-R03. This is versioning of the SAME canonical IDs, not cloned questions.

## 2. Confirm actual remediation pathways across all outcomes

| Item / outcome | Real Knowledge destination | Real visible Practice destination | Remedial reason |
|---|---|---|---|
| THPT-TOP21-T01 / O01 | 1.1 | Bài luyện 1, Luyện tập 1.1 | known group changes denominator |
| THPT-TOP21-T02 / O02 | 1.2 | Bài luyện 2, Luyện tập 1.2 | conditional probability direction |
| THPT-TOP21-T03 / O03 | 1.3 | Bài luyện 3, Luyện tập 1.3 | without replacement updates counts |
| THPT-TOP21-T04 / O04 | 1.4 | Bài luyện 4, Luyện tập 1.4 | compare joint probability with product |
| THPT-TOP21-T05 / O05 | 2.1 | Bài luyện 5, Luyện tập 2.1 | weighted total probability |
| THPT-TOP21-T06 / O06 | 2.2 | Bài luyện 6, Luyện tập 2.2 | reverse source conditional via Bayes |
| THPT-TOP21-T07 / O07 | 3.1 | Bài luyện 7, Luyện tập 3.1 | add appropriate tree leaves |
| THPT-TOP21-T08 / O08 | 3.2 | Bài luyện 8, Luyện tập 3.2 | rare base rate and total flagged group |
| THPT-TOP21-W01 / O01–O02 | 1.1–1.2 | Bài luyện 1–2, Luyện tập 1.1–1.2 | distinguish P(A|B) and P(B|A) |
| THPT-TOP21-W02 / O05–O06 | 2.1–2.2 | Bài luyện 5–6, Luyện tập 2.1–2.2 | compute total then invert |
| THPT-TOP21-W03 / O08 | 3.2 | Bài luyện 8, Luyện tập 3.2 | false-positive count and posterior |

All eight knowledge headings and all eight real Practice exercise stems, math explanations and relevant numbered labels were inspected directly in the R06 source. The original non-existent “Kiến thức 8 / Luyện tập 2.8” navigation is removed. Two original repetitive Written D6 phrases were polished without changing their destinations.

## 3. Independently verify all 11 affected calculations

- T01: P(star|green)=6/9=2/3 (nine green tickets among 24).
- T02: B=even {2,4,6}, A=divisible by three {3,6}; P(A|B)=1/3.
- T03: draw red then green without replacement: (4/9)(5/8)=5/18.
- T04: fair two-coin experiment, A=first heads, B=exactly one head: P(A∩B)=1/4=(1/2)(1/2), so independent.
- T05: (1/4)(1/10)+(3/4)(1/30)=1/20, correctly weighted across sources.
- T06: P(X∩failure)=1/25, P(Y∩failure)=3/25, so P(Y|failure)=3/4.
- T07: leaves A-red 9/50, A-not-red 21/50, B-red 1/10, B-not-red 3/10 sum to 1, P(red)=7/25.
- T08: H prevalence 2%, sensitivity 90%, false-positive rate 15%: P(H|flag)=0.018/(0.018+0.147)=6/55≈10.91%.
- W01: 60 pupils, club C 24 of which 15 wear glasses; non-C 36 of which 18 wear glasses. Thus P(glasses|C)=15/24=5/8, P(C|glasses)=15/33=5/11, P(C∩glasses)=15/60=1/4.
- W02: X prevalence 1/3, failure 1/5; Y prevalence 2/3, failure 1/10; P(failure)=1/15+1/15=2/15, posterior P(X|failure)=1/2; all four leaf probabilities sum to 1.
- W03: among 10,000 cases, H=100 with 80 flagged and not-H=9,900 with 495 false positive flags, P(H|flag)=80/(80+495)=16/115≈13.91%.

All affected answers and public Written rubric criteria stay exactly as the R05 text. This validates affected-scope maths; it is not a claim of newly solving every unrelated item or an independent NotebookLM full-topic verdict.

## 4. S1, Q15 and Q16 custody, remaining blockers

Original R05 author Q18 receipt binds Toán 12 KNTT Tập Hai Chương VI B18–B19 and historical original S1 PDF review evidence. R06 changes no required mathematical condition, book scope, outcome or full example. No claim of new direct printed-versus-PDF scan is made in this targeted round. The old receipt stays valid for the immutable R05 snapshot only; this R06 author self-QA is separately SHA-bound.

Each FIRST_TRY and Written question remains at one canonical ID with a correctly bumped version; eight Practice keys/solutions and public selfcheck exposure stay unchanged. The selfcheck reuses Practice questions, so it is CLIENT_SELF_CHECK_NO_MASTERY, not an independent TOPIC_READINESS. No private RD1 item is copied to GitHub; no pre-submit hint/key, official Final Submit or Mastery behavior has been enabled.

Still mandatory before CONTENT_READY: update the single active item-owner/version matrix to R06 for 11 changed IDs while retaining the eight unchanged P versions, then synchronize one V2 handoff + ready manifest + REGISTER to the exact new SOURCE_BLOB; verify any other broader readiness gates separately. This receipt does not authorize website integration, merge or deploy.

AUTHOR_SIGNOFF: TOPIC21_20261118_EXACT_Q15_SOURCE_VERSION_CUSTODY_aa325637f659bc5f8ba504f6ce0129e07340a41d
VERDICT: TARGETED_AUTHOR_SELF_QA_PASS, ACTIVE_CANONICAL_BANK_HOLD, CONTENT_READY_NO.

Review prompt (four sentences): Critique exactly the R06 source SHA against frozen R05 and inspect 11 D6 paths through Knowledge and visible Practice, rather than checking text labels only. Check the 11 computations, canonical IDs, CONTENT_VERSION and optional-reveal boundary. If an outcome/item route or rubric is wrong, record P0/P1, exact location and MINIMAL_DELTA; do not transfer a verdict to another source. A targeted author receipt is not an independent full-topic review, protected assessment readiness or release approval.
## 5. Q15 source-derived matrix lock (addendum)

Q15_CANDIDATE_MATRIX_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R06_Q15_CANONICAL_ITEM_OUTCOME_ROLE_VERSION_MATRIX_20261117.md
Q15_CANDIDATE_MATRIX_BLOB: 522d13493d18ec53280a752dc5498e92c8896805
Q15_CANDIDATE_OWNER: aa325637f659bc5f8ba504f6ce0129e07340a41d
Q15_CANDIDATE_SOURCE_LEVEL: AUTHOR_SELF_VERIFIED; ALL_IDS_UNIQUE; PRACTICE_REPLAY_SAME_ID
Q15_GLOBAL_ACTIVE_OWNER_V2_READY_REGISTER: HOLD_PENDING_INTEGRATION

This matrix was generated from the exact item marker lines in the learner source and includes every item-to-outcome/role/content_version and public replay placement, without cloning canonical item bodies. Its SHA is pinned here; it does not imply that the repository-wide ACTIVE REGISTER has been promoted or that external handoff has been completed.


## FINAL_AUTHORING_CONSOLIDATION — vetted 17/11/2026

Source-verified learner patches were merged **in place** into original currently selected `Temp_PLAN22_21_R05_LEARNER_PRESENTATION_20261116.md` (blob `cf47f29f9c780237765d32377464eb34efe3fe9c`) after direct baseline/candidate diff. **Accepted 11 actual pedagogy lines, REJECTED 11 item content_version bumps** because the underlying original mathematical stem, key, method and 7-point Written rubric remain unchanged: gratuitous version churn would create unnecessary version inconsistency. Existing original item content_versions remain authoritative. No new ID, new source copy, rubric scoring or numerical revision; original selfcheck question-only section preserved byte-for-byte, opt-in answer disclosures unchanged, all SVG paths retained. Earlier candidate and original source SHA values remain Git history; **SOURCE_PATH and SOURCE_BLOB above are authoritative** for the current source and override any historical narrative in the older receipt sections. `AFFECTED_PED_DELTA_AUTHOR_SELF_QA_PASS`; full Q01–Q18, independent review, original SGK owner and browser QA gates still unproven: `CONTENT_READY=NO`. No RELEASE integration, merge or deploy.

## 18/11/2026 — effective-source Q15 identity/version reconciliation, Q18 scoped verification

- CURRENT_LEARNER_SOURCE_BLOB `aa325637f659bc5f8ba504f6ce0129e07340a41d` supersedes the in-place pre-verification snapshot `cf47f29f9c780237765d32377464eb34efe3fe9c` by **only 11 canonical item `CONTENT_VERSION` annotations**, aligned with the already-reviewed targeted D6 revision (no changed student prompt, answer, solution, rubric, D6 path, diagram, math condition, reveal or assessment behavior). The older separate candidate `f1e9a0f2a52574f832c27a724189e9f1869940ae` remains historical and is NOT an alternative release source.
- Re-generated existing Q15 candidate matrix SHA `522d13493d18ec53280a752dc5498e92c8896805` from actual in-place learner source: **19/19 canonical item IDs** with exact primary outcome, role, content_version and Git source marker line; **8/8** public selfcheck placements reuse original P-IDs with question-only display. One removed author-only header made historical line numbers off by exactly 1; all 19 line references now checked to the real current file.
- Mathematical correctness and 17/17 vs 8/8 chapter outcome coverage claims from prior historical Q18 are **not** automatically transferred; this newly signed paragraph checks only source/marker version and display parity for the reviewed D6 scope. The previous targeted numeric/D6 checks remain attached to their original candidate SHA, and current student-visible math is byte-equivalent. No fresh independent NotebookLM full-Topic PASS.
- GLOBAL_ACTIVE_Q15_OWNER_V2_READY_REGISTER = **HOLD** and CONTENT_READY = **NO** remain mandatory. Do not edit protected RD1, Final Submit security, Mastery or RELEASE integration. NO MERGE/DEPLOY/MATH LAB.

### 18/11/2026 · same-source matrix activation boundary

- Source `aa325637f659bc5f8ba504f6ce0129e07340a41d`, in-place 19/19 verified Q15 ID/outcome/role/version/line matrix Git blob `522d13493d18ec53280a752dc5498e92c8896805`. Old HOLD_NOT_SYNCHRONIZED **for matrix pointers only** is now closed. This is not an independent full-Topic Academic/PED PASS; `CONTENT_READY: NO` stays until scoped pedagogical review/one active handoff are accepted. No new learner file or bank.

## 18/11/2026 — owner-pasted independent D6/PED6 targeted clearance, exact Git source

INDEPENDENT_TARGETED_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC21_R06_D6_INDEPENDENT_OWNER_PASTED_VERDICT_20261118.md
INDEPENDENT_TARGETED_RECEIPT_BLOB: 06157b8c7e5873611b463f991620c466b72e2741
INDEPENDENT_TARGETED_SOURCE_BLOB: aa325637f659bc5f8ba504f6ce0129e07340a41d
INDEPENDENT_TARGETED_SCOPE: TOP21-O01_TO_O08_D6_PED6_ONLY
INDEPENDENT_TARGETED_ACADEMIC: PASS
INDEPENDENT_TARGETED_PED: PASS
INDEPENDENT_TARGETED_P0_P1_P2: 0_0_0
INDEPENDENT_TARGETED_MINIMAL_DELTA: NONE
OTHER_D6_WRITTEN_SCOPE: AUTHOR_SELF_QA_ONLY_PREVIOUSLY_REVIEWED_LOCALLY
TARGETED_PASS_NOT_FULL_TOPIC_REVIEWER_PASS: YES
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

The owner pasted a complete independent report with eight PASS outcome findings for O01–O08, eight knowledge destinations and eight visible practice routes. This is independent evidence **only for the eight first-try D6/PED6 recovery pathways**; three Written remediation paths remain covered by the separate signed author QA above and were not represented as newly independently reviewed. This exact learner SHA has 19 unique canonical IDs in the Q15 matrix; previous Q18 self-QA, original R04 academic signoff and A1–A7 evidence remain source-scoped and may be composed without transferring independent clearance to unrelated content.

Metadata reconciliation: the reviewer gave a truncated 34-character value labelled SHA256 and used M01–M08 lesson labels, while the current V2 uses K01–K08. The eight canonical outcome IDs O01–O08 reconcile 1:1 against source, and both inconsistencies are documented without altering mathematics or IDs in the archival receipt. The review explicitly withheld system/RELEASE authorization. This authoring document does not by itself declare the whole Topic CONTENT_READY: one source-locked V2, current ready manifest, REGISTER and QA must reconcile before that designation.
