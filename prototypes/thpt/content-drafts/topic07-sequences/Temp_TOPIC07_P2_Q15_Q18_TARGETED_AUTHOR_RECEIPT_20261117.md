# CĐ07 · Targeted P2 author QA receipt · 17/11/2026

PACKET_ID: TOP07-P2-LEARNER-CANDIDATE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: Q03_Q10
DELTA_CLASS: DELTA_C_PED_TARGETED
SOURCE_PATH: prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_R07_P2_LEARNER_PROSE_CANDIDATE_20261117.md
SOURCE_BLOB: 3e49d4032d6274c8992cee26d50d0de1fd768d29
FROZEN_BASELINE_SOURCE_BLOB: 22609934f525e6e9c2c8f1513e439c3cd4d54221
FROZEN_BASELINE_Q18_RECEIPT_BLOB: 73fc766c9bea00be48e25d0514548e12fa783f60
BASELINE_P0_P1_VERDICT: HISTORICAL_IMMUTABLE_ONLY
P0_AFFECTED: 0
P1_AFFECTED: 0
P2_AFFECTED: 0
TARGETED_Q18_AUTHOR_QA: PASS_FOR_DOCUMENTED_DELTA_ONLY
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: NOT_SYNCHRONIZED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Exact changed learner lines and rationale

Original Git source Rxx and candidate Git source exact blobs above were both fetched. Ignore one newly added author-only HTML provenance line. **Changed original lines: L6 and L44 only.** At original L6: promote visible parent `1. Kiến thức` from H3 to H2 so the three Topic pages use the same heading level and numbered H3 groups are nested correctly; this is Markdown structure, not mathematics. At original L44: bỏ câu 'Từ miền chỉ số', tự giới thiệu dãy số (u_n), n thuộc miền chỉ số đã cho và công thức tường minh u_n=f(n); giải thích ba số đầu không ấn định duy nhất quy luật.

## Affected-scope independent math/PED check

Ví dụ u_n=2n+1 cho n≥1 có các giá trị 3,5,7 tại n=1,2,3, u_10=21; cộng một bội (n−1)(n−2)(n−3) vẫn giữ ba số đầu. Điều kiện n thuộc miền chỉ số không bị suy rộng. Toàn bộ Practice/Selfcheck byte-exact.

## Q07/Q15/Q16 custody and immutable source

All existing source item markers (canonical IDs and public replay placements), order, disclosure boundaries and image references were compared against the frozen original and are identical. Answer key, original Practice stems, solutions and rubric text are unchanged; only the targeted Knowledge/First Try explanatory sentence described above was edited. 3/3 SVG Topic được sao nguyên blob 259ba93ec3036b32dd796ea1c06d8c8df7633f06, a99f3f82e2671835f99b7b49704b2b31148560a4, 385fa4e3c5b4e09d29076aacd1e0a08476ff370b.

The verified public Topic selfcheck only reuses previously viewed Practice IDs, with no source key leakage in its question-only section; it is CLIENT_SELF_CHECK_NO_MASTERY rather than official protected TOPIC_READINESS. No private RD1 source, Final Submit engine or Firebase record is touched. The original Q18 signed receipt stays bound to its old source blob, not copied as an independent NotebookLM verdict for this revision. Original S1 SGK/SBT PDF pages have not been reopened in this targeted language-repair turn; historical S1 receipts remain background evidence for unchanged outcomes.

**Administrative HOLD:** candidate-only source; global canonical owner/version, one V2 handoff, ready manifest and REGISTER are not yet aligned to this new SHA. This is not a global authoring promotion and not a RELEASE or browser QA verdict.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP07_P2_EXACT_SOURCE_Q03_Q10_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Compare the exact candidate source blob with its immutable original and verify only the recorded lines changed. Check the mathematical meaning and self-learning clarity of the correction, including real reference to the visible exercise or figure where applicable. Verify unchanged public canonical IDs, answer/rubric disclosure, SGK source mapping and public selfcheck boundary; return a targeted P0/P1/P2 with MINIMAL_DELTA if wrong. Do not present this receipt as a full new NotebookLM PASS or as CONTENT_READY.
