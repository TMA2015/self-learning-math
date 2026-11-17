# CĐ20 R12 · Q08/PED6 + Q15/Q18 TARGETED AUTHORING RECEIPT · 17/11/2026

PACKET_ID: TOP20-R12-D6-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: DELTA_C_PED_TARGETED_Q08_Q14_Q15_Q18
SOURCE_PATH: prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R11_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: 14cf1fa93c263fe4b94c101000e8c974a7a0b682
ORIGINAL_R11_SOURCE_BLOB: 74e758075d17e98649d9dd08709b523e8a782b63
ORIGINAL_R11_AUTHOR_Q18_RECEIPT_BLOB: 4e6133b77eeaf1d38394d1e4d6f8058d421fd763
AFFECTED_P0: 0
AFFECTED_P1: 0
AFFECTED_P2: 0
AFFECTED_Q08_PED6: AUTHOR_SELF_QA_PASS
AFFECTED_Q15_VERSION_ID_MATH_PARITY: AUTHOR_SELF_QA_PASS
AFFECTED_Q18: AUTHOR_SELF_QA_PASS
ACTIVE_CANONICAL_BANK_MATRIX: HOLD_NOT_SYNCHRONIZED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## 1. Exact Git source delta and frozen scope

The old R11 and new R12 learner sources were both fetched by GitHub ref and SHA. After excluding a new author-only HTML comment, the complete original source was line-compared against R12. Only original lines 9 (introduction), 760/788/814 (item CONTENT_VERSION), and 782/808/836 (D6) differ. W01, W02 and W03 keep exactly one existing ITEM_ID each; only their CONTENT_VERSION moves TOP20-R09 to TOP20-R12. All other 34 item version labels stay as before. The entire public Tự kiểm tra section is byte-identical. No change in question stems, mathematical solutions, rubric points, MathJax or SVG. Existing source and Q18 receipt remain immutable.

## 2. Review actual learner route, not code label

| Item / outcome | Error students make | Real destination in candidate source |
|---|---|---|
| THPT-TOP20-W01 / TOP20-O08 | Wrong ordered/unordered denominator | Kiến thức 1.4; Bài luyện 7, Luyện tập 1.7 (choose unordered pair) |
| W01 / same | Confuse at least one red with exactly one | Kiến thức 1.3; Bài luyện 8, Luyện tập 1.8 (complement) |
| THPT-TOP20-W02 / TOP20-O14 | Double-count intersection of events | Kiến thức 2.1; Bài luyện 14, Luyện tập 2.4 (union rule) |
| W02 / same | Call overlapping events independent | Kiến thức 2.2; Bài luyện 13, Luyện tập 2.3 (independence test) |
| THPT-TOP20-W03 / TOP20-O17 | Add where task asks for conjunction | Kiến thức 2.4; Bài luyện 16, Luyện tập 2.6 (independent multiplication) |
| W03 / same | Compute intersection but task asks for union | Kiến thức 2.3; Bài luyện 14, Luyện tập 2.4 (subtract overlap) |

All destination headings, numbered visible exercise stems and their actual explanations were inspected. They teach the same operation and missing prerequisite as each D6 error.

## 3. Verify the affected maths and rubric

- W01: choose two distinct tickets from eight without order, C(8,2)=28; both red C(3,2)=3 giving 3/28; complement of at least one red is both green C(5,2)=10, giving 1−10/28=9/14. Ordered alternative is 6/56=3/28. Four rubric steps unchanged.
- W02: A={2,4,6}, B={2,3,5}, A∩B={2}, A∪B={2,3,4,5,6}; P(A∪B)=3/6+3/6−1/6=5/6; P(A∩B)=1/6 differs from P(A)P(B)=1/4. Hence not independent. Four rubric steps unchanged.
- W03: fair independent coin and die: P(A)=1/2, P(B)=2/6=1/3, P(A∩B)=1/6, P(A∪B)=2/3, P(neither)=1/3. Four rubric steps unchanged.

This is a new independent recomputation of affected examples only. The old R11 receipt had already recorded S1 scope and original Toán 10/11 book evidence for the unchanged maths; a fresh page-by-page PDF scan is not claimed here. Baseline R11 academic source remains unchanged except for its remedial instructions and the accurate PUBLIC replay introduction.

## 4. Q15/Q16 boundary and what still blocks readiness

Candidate item IDs, roles, outcomes, full stems/keys/solutions/rubrics and 11 public replay question-only placements remain unchanged. W01–W03 have new CONTENT_VERSION TOP20-R12 because their D6 solution text changed; no new item ID has been minted. Public self-check is non-independent CLIENT_SELF_CHECK_NO_MASTERY; no protected RD1, Final Submit, official TOPIC_READINESS, live AI tutor or website feature is claimed. Do not transfer an old signoff to a different Git blob.

A valid new active canonical owner/version registry must now reconcile the three W items against this source, without duplicate active bodies. One V2 handoff, ready manifest, REGISTER and new source SHA must be synchronized before CONTENT_READY. Owner authorization for merge/deploy remains absent, and RELEASE AP/R testing is not part of this AUTHORING receipt.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP20_R12_3WRITTEN_6REMEDIATION_ROUTES_3MATH_CHECKS_20261117
VERDICT: TARGETED_AUTHOR_SELF_QA_PASS, CANONICAL_ACTIVE_MATRIX_HOLD, CONTENT_READY_NO.

Review prompt (four sentences): Read precisely the R12 source blob and immutable R11 baseline before critiquing W01–W03. Follow all six D6 routes to actual visible Bài luyện numbers and verify their underlying probabilities and unchanged rubric. Report any wrong destination by outcome and item ID, with minimal delta. Do not mistake this scoped author self-QA for an independent full-topic review, website QA or CONTENT_READY.
## 5. Q15 source-derived matrix lock (addendum)

Q15_CANDIDATE_MATRIX_PATH: prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R12_Q15_CANONICAL_ITEM_OUTCOME_ROLE_VERSION_MATRIX_20261117.md
Q15_CANDIDATE_MATRIX_BLOB: a19bed3c52a24e582bfa2b262d6d20f76f0e7c09
Q15_CANDIDATE_OWNER: a5507a33daea690a1193c965999e1d652340cb58
Q15_CANDIDATE_SOURCE_LEVEL: AUTHOR_SELF_VERIFIED; ALL_IDS_UNIQUE; PRACTICE_REPLAY_SAME_ID
Q15_GLOBAL_ACTIVE_OWNER_V2_READY_REGISTER: HOLD_PENDING_INTEGRATION

This matrix was generated from the exact item marker lines in the learner source and includes every item-to-outcome/role/content_version and public replay placement, without cloning canonical item bodies. Its SHA is pinned here; it does not imply that the repository-wide ACTIVE REGISTER has been promoted or that external handoff has been completed.


## FINAL_AUTHORING_CONSOLIDATION — vetted 17/11/2026

Source-verified learner patches were merged **in place** into original currently selected `Temp_PLAN22_20_R11_LEARNER_PRESENTATION_20261116.md` (blob `14cf1fa93c263fe4b94c101000e8c974a7a0b682`) after direct baseline/candidate diff. **Accepted 4 actual pedagogy lines, REJECTED 3 item content_version bumps** because the underlying original mathematical stem, key, method and 7-point Written rubric remain unchanged: gratuitous version churn would create unnecessary version inconsistency. Existing original item content_versions remain authoritative. No new ID, new source copy, rubric scoring or numerical revision; original selfcheck question-only section preserved byte-for-byte, opt-in answer disclosures unchanged, all SVG paths retained. Earlier candidate and original source SHA values remain Git history; **SOURCE_PATH and SOURCE_BLOB above are authoritative** for the current source and override any historical narrative in the older receipt sections. `AFFECTED_PED_DELTA_AUTHOR_SELF_QA_PASS`; full Q01–Q18, independent review, original SGK owner and browser QA gates still unproven: `CONTENT_READY=NO`. No RELEASE integration, merge or deploy.
