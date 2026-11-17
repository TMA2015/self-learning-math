# CĐ09 · Source-locked P2 affected-scope authoring receipt · 17/11/2026

PACKET_ID: TOP09-P2-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
DELTA_CLASS: DELTA_C_MATERIAL_PEDAGOGICAL_EXPLANATION_TARGETED
REVIEW_SCOPE: Q03_Q08_Q10_Q13
SOURCE_PATH: prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R06_P2_LEARNER_PROSE_CANDIDATE_20261117.md
SOURCE_BLOB: 252c4719396b3692ea6cf62f1845c0874b666a8f
IMMUTABLE_BASELINE_SOURCE_BLOB: 8222107d717f7d02b845f79ccdd154e8dbe71cc6
IMMUTABLE_BASELINE_Q18_RECEIPT_BLOB: bce770e351460d9d01d7567332aed489bc68aa4d
AFFECTED_SCOPE_P0: 0
AFFECTED_SCOPE_P1: 0
AFFECTED_SCOPE_P2: 0
AFFECTED_SCOPE_VERDICT: AUTHOR_SELF_QA_PASS
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## A. Exact source diff/authoring intent

Original signed source and candidate source were fetched directly by Git blob. One author-only provenance HTML line was added; original visible changed locations are L225 and L1699. L225 explains s(t) is coordinate in metres at time t in seconds, v(t)=s'(t) signed m/s and speed |v|. L1699 replaces raw P15 ID with student-visible Bài 52 (an actual practice question of quotient derivative).

## B. Actual Q03/Q07/PED mathematical/visual check

For s(t)=t²−6t m, v(t)=2t−6 m/s and v(2)=−2 m/s while speed at 2 is +2 m/s. For f=(x²+1)/(x−1), quotient derivative is (x²−2x−1)/(x−1)² for x≠1; f'(0)=−1, agreeing with actual Bài 52 source stem and solution. It is incorrect to infer slowing down from negative v alone. All question stems and selfcheck unchanged, only first-try exposition and one D6 remedy.

## C. Canonical asset integrity

4/4 SVG paths fetched and SHA-matched original assets, including velocity figure dc4d16740d001730c298ae94d94a4aeee7f97ec4 with correct v and a labels. No website rendering.

## D. Q15/Q16 original custody and remaining gates

Original source item IDs, roles/placements (including shared SGK items), question stems, relevant answer/rubric mathematics and every optional reveal boundary were compared with the candidate. No new item ID has been created and no version for an unchanged canonical item is invented. Student-visible edits are exactly described above, including changed wording inside learner disclosures if relevant. Do not reclassify previously seen public Practice questions as protected independent TOPIC_READINESS. Public selfcheck is CLIENT_SELF_CHECK_NO_MASTERY; no student data, private RD1 stem/key/rubric, official Final Submit or Skill Mastery is changed.

Full SGK/SBT original PDF printed-page verification was not repeated for this P2 presentation delta; prior source receipts remain historical and invariant, not a fresh independent NotebookLM approval. Each new Git candidate is proposed for the authoring lane only. Before CONTENT_READY, align sole canonical owner/version and one V2 handoff/ready manifest/REGISTER plus additional governance/academic checks that remain unresolved, including CĐ22 historical S1 metadata. No merge/deploy/website QA.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP09_P2_Q03_Q08_Q10_Q13_20261117
VERDICT: TARGETED_AUTHOR_SELF_QA_PASS, GLOBAL_V2_REGISTER_HOLD, CONTENT_READY_NO, NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Read this candidate exact SOURCE_BLOB against the original SOURCE_BLOB, not simply a title or old receipt. Verify each learner-visible change, the matching original worked problem/figure and unchanged mathematical data, conditions, answers, rubric and item IDs. Confirm original public selfcheck has no exposed key or protected assessment activation, and note all remaining P2 governance limitations. Report any affected P0/P1/P2 with line, item/outcome and MINIMAL_DELTA; do not infer global CONTENT_READY or website release.
