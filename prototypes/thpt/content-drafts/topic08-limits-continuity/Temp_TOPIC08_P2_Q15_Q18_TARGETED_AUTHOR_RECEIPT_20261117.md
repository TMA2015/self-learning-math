# CĐ08 · Targeted P2 author QA receipt · 17/11/2026

PACKET_ID: TOP08-P2-LEARNER-CANDIDATE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: Q03_Q12_PED3
DELTA_CLASS: DELTA_C_PED_MATH_EXPLANATION_TARGETED
SOURCE_PATH: prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_R05_STUDENT_FIRST_58_CANONICAL_VISIBLE_20261115.md
SOURCE_BLOB: 8e40965f6174b52c386ab461440b1ed11ccededc
SOURCE_BRANCH: authoring/topic08-limits-continuity-r01-20261112
FROZEN_BASELINE_SOURCE_BLOB: a33d1e6a20dba1dc7861097e231906aff2938c02
FROZEN_BASELINE_Q18_RECEIPT_BLOB: 3285d8d9db6882e798995d92a0d8f83ce592d8e9
BASELINE_P0_P1_VERDICT: HISTORICAL_IMMUTABLE_ONLY
P0_AFFECTED: 0
P1_AFFECTED: 0
P2_AFFECTED: 0
TARGETED_Q18_AUTHOR_QA: PASS_FOR_DOCUMENTED_DELTA_ONLY
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: NOT_SYNCHRONIZED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Exact changed learner lines and rationale

Original Git source Rxx and candidate Git source exact blobs above were both fetched. Ignore one newly added author-only HTML provenance line. **Changed original lines: L331,L358 only.** Xóa tham chiếu mã M06 trong giải thích gián đoạn khử được, tự rút f(x)=(x²−5x+6)/(x−2)=x−3 khi x≠2; giải thích hai giới hạn một phía trước hình và so sánh trực tiếp với |x|/x, không viết 'Ngay tại hình này' trước hình.

## Affected-scope independent math/PED check

lim(x→2)(x−3)=−1 nên liên tục tại 2 đúng khi f(2)=−1. Hàm x+2 (x<0),2x+1 (x≥0) có lim trái 2, phải 1, f(0)=1: không có lim hai phía. |x|/x có lim trái −1, phải +1; đều thuộc loại gián đoạn nhảy. SVG jump blob e420051bbf2e4db6925924bde454ea267d396418 mô tả đúng. Practice/Selfcheck byte-exact.

## Q07/Q15/Q16 custody and immutable source

All existing source item markers (canonical IDs and public replay placements), order, disclosure boundaries and image references were compared against the frozen original and are identical. Answer key, original Practice stems, solutions and rubric text are unchanged; only the targeted Knowledge/First Try explanatory sentence described above was edited. 3/3 SVG khả dụng, sao byte-exact từ source gốc. Không có website/render/AP3 QA.

The verified public Topic selfcheck only reuses previously viewed Practice IDs, with no source key leakage in its question-only section; it is CLIENT_SELF_CHECK_NO_MASTERY rather than official protected TOPIC_READINESS. No private RD1 source, Final Submit engine or Firebase record is touched. The original Q18 signed receipt stays bound to its old source blob, not copied as an independent NotebookLM verdict for this revision. Original S1 SGK/SBT PDF pages have not been reopened in this targeted language-repair turn; historical S1 receipts remain background evidence for unchanged outcomes.

**Administrative HOLD:** candidate-only source; global canonical owner/version, one V2 handoff, ready manifest and REGISTER are not yet aligned to this new SHA. This is not a global authoring promotion and not a RELEASE or browser QA verdict.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP08_P2_EXACT_SOURCE_Q03_Q12_PED3_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Compare the exact candidate source blob with its immutable original and verify only the recorded lines changed. Check the mathematical meaning and self-learning clarity of the correction, including real reference to the visible exercise or figure where applicable. Verify unchanged public canonical IDs, answer/rubric disclosure, SGK source mapping and public selfcheck boundary; return a targeted P0/P1/P2 with MINIMAL_DELTA if wrong. Do not present this receipt as a full new NotebookLM PASS or as CONTENT_READY.


## IN_PLACE_CONSOLIDATION to original authoring source

User requested **one active learner source**: the corrected material for CĐ08 is now in the existing numbered/learner-first original authoring source at SOURCE_PATH on SOURCE_BRANCH, exact current blob `8e40965f6174b52c386ab461440b1ed11ccededc`. The separate patch candidate file on this eight-topic editorial branch is superseded and may be deleted without losing the verified fix. Applied only the one/two declared substantive learner lines, not the patch's unrelated heading renumbering or author comments. Canonical item IDs/order, all original practice/selfcheck stems, opt-in answers, mathematical results, rubric points and referenced SVG files retain source parity. Prior signed SOURCE_BLOB history is recoverable through Git; this author-receipt file remains evidence from a separate review branch, **not** another learner draft or authority to deploy. Full Q01–Q18 and actual browser AP gates not independently passed by this limited delta.
