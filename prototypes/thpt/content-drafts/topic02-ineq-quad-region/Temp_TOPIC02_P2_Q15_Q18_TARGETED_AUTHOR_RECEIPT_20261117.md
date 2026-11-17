# CĐ02 · Targeted P2 author QA receipt · 17/11/2026

PACKET_ID: TOP02-P2-LEARNER-CANDIDATE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: Q08_PED6
DELTA_CLASS: DELTA_C_PED_TARGETED
SOURCE_PATH: prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_P2_LEARNER_PROSE_CANDIDATE_20261117.md
SOURCE_BLOB: d1c05e91d3ca21d28981be404cbca23fb5937bb2
FROZEN_BASELINE_SOURCE_BLOB: eb5a01b50262dc4b151b3915f5a5e4b436432374
FROZEN_BASELINE_Q18_RECEIPT_BLOB: 19a8ce12552d94add042dc2127a054d20cd29027
BASELINE_P0_P1_VERDICT: HISTORICAL_IMMUTABLE_ONLY
P0_AFFECTED: 0
P1_AFFECTED: 0
P2_AFFECTED: 0
TARGETED_Q18_AUTHOR_QA: PASS_FOR_DOCUMENTED_DELTA_ONLY
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: NOT_SYNCHRONIZED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Exact changed learner lines and rationale

Original Git source Rxx and candidate Git source exact blobs above were both fetched. Ignore one newly added author-only HTML provenance line. **Changed original lines: L201 only.** Đổi chỉ dẫn kỹ thuật 'Written W01' thành bài học sinh thật nhìn thấy là Bài 17, phần (b)–(c), với điều kiện Δ=0 là biên phải loại của dấu nghiêm >0.

## Affected-scope independent math/PED check

Tự kiểm: với x²−2mx+4>0 mọi x, Δ=4(m²−4)<0 nên −2<m<2; tại m=2 có (x−2)² bằng 0 tại x=2, phải loại. Khác với Vận dụng x²−2mx+1≥0 mọi x thì −1≤m≤1. Bài 17 đúng phép phân biệt đó. Practice/Selfcheck unchanged.

## Q07/Q15/Q16 custody and immutable source

All existing source item markers (canonical IDs and public replay placements), order, disclosure boundaries and image references were compared against the frozen original and are identical. Answer key, original Practice stems, solutions and rubric text are unchanged; only the targeted Knowledge/First Try explanatory sentence described above was edited. 3/3 SVG path khả dụng trên candidate, một SVG Topic riêng được sao nguồn blob 809ee7091849592e8312548fb8d916f1f461a77f.

The verified public Topic selfcheck only reuses previously viewed Practice IDs, with no source key leakage in its question-only section; it is CLIENT_SELF_CHECK_NO_MASTERY rather than official protected TOPIC_READINESS. No private RD1 source, Final Submit engine or Firebase record is touched. The original Q18 signed receipt stays bound to its old source blob, not copied as an independent NotebookLM verdict for this revision. Original S1 SGK/SBT PDF pages have not been reopened in this targeted language-repair turn; historical S1 receipts remain background evidence for unchanged outcomes.

**Administrative HOLD:** candidate-only source; global canonical owner/version, one V2 handoff, ready manifest and REGISTER are not yet aligned to this new SHA. This is not a global authoring promotion and not a RELEASE or browser QA verdict.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP02_P2_EXACT_SOURCE_Q08_PED6_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Compare the exact candidate source blob with its immutable original and verify only the recorded lines changed. Check the mathematical meaning and self-learning clarity of the correction, including real reference to the visible exercise or figure where applicable. Verify unchanged public canonical IDs, answer/rubric disclosure, SGK source mapping and public selfcheck boundary; return a targeted P0/P1/P2 with MINIMAL_DELTA if wrong. Do not present this receipt as a full new NotebookLM PASS or as CONTENT_READY.
