# CĐ17 · R03 source-locked AUTHORING receipt · P2 learner prose · 17/11/2026

PACKET_ID: TOP17-R03-SELFCHECK-LANGUAGE-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_GIT_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: Q03_Q10_Q14_Q15_Q16_Q17_LANGUAGE_ONLY
DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT
SOURCE_PATH: prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_TOPIC17_DISTANCE_VOLUME_R03_SELFCHECK_LEARNER_CLARITY_CANDIDATE_20261117.md
SOURCE_BLOB: f97916e97883a82899322fa86b2a6822114864ff
FROZEN_BASELINE_SOURCE_PATH: prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_TOPIC17_DISTANCE_VOLUME_R02_LEARNER_FIRST_20261116.md
FROZEN_BASELINE_SOURCE_BLOB: 7cfc1c44d8f8aa722118d945900290fd560b621b
FROZEN_BASELINE_Q18_RECEIPT_BLOB: 5d55b6a38bf5bb4e81d099e05635001876c2a90a
CHANGED_P0: 0
CHANGED_P1: 0
CHANGED_P2: 0
AFFECTED_SCOPE_VERDICT: AUTHOR_SELF_QA_PASS
GLOBAL_ACTIVE_CANONICAL_V2_READY_REGISTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Source-visible change

Old R02 learner selfcheck preamble (line 849): “Tám câu sau là những bài tự ôn công khai đã có trong Luyện tập. Em hãy tự làm trên giấy trước khi xem lời giải. Đây không phải đánh giá năng lực độc lập, không ghi Mastery.”

New R03 learner selfcheck preamble: “Hãy tự giải tám câu dưới đây vào vở mà chưa xem lại lời giải đã học. Khi làm xong, trở về phần **Luyện tập**, mở lời giải từng câu để đối chiếu, tìm chỗ sai và chọn nội dung cần ôn thêm. Đây là phần tự ôn, không phải bài kiểm tra có chấm điểm chính thức.”

The only learner-visible delta is the one replacement sentence/paragraph at that location. An additional non-rendered HTML comment identifies this R03 source candidate and its R02 predecessor. No original learner solved worked example, mathematical condition, stem, answer, solution, rubric, step score, SVG, model, SGK page metadata or public question is changed. Original R02 signed source, receipt, handoff V2, ready manifest and REGISTER are preserved byte-identically in this branch.

## Q15/Q16 and PED affected-scope checks

- Compared old R02 vs new R03 57/57 ordered HTML item/display/public selfcheck placements; unchanged canonical IDs and unchanged placement order.
- Original 49/49 optional Practice/reveal `<details>` blocks preserved. Selfcheck contains exactly 8/8 same public question-only items, with **zero** `<details>` disclosures (no keys or hints exposed there).
- Source-level Practice and its answer/rubric body remain unchanged. Public replay selfcheck is still `CLIENT_SELF_CHECK_NO_MASTERY` (author-only metadata, never protected independent TOPIC_READINESS), no score/mastery activation or learner data changes.
- Replaced a technical evaluation label with a concrete, natural three-step learner action: work independently → return to Luyện tập → compare/relearn. Does not assert automated assessment or browser feature.
- This is a source-level TARGETED AUTHOR_SELF_VERIFIED review. No fresh original SGK/SBT page-to-PDF mapping, independent NotebookLM comprehensive topic review, browser AP/MathJax render, RD1/Final Submit runtime QA, or actual student UAT is claimed.

## Owner/handoff gate

Source SHA is newly generated candidate; the *existing* R02 `CONTENT_READY` still belongs only to R02 original blob, not this new R03 snapshot. Before R03 becomes `CONTENT_READY`, verify active canonical owner/version and one R03 Q18 + A1–A7, one matching V2 handoff, one ready manifest and REGISTER. Keep signed previous R02 unchanged; no edit to website, deployment, Firebase, private RD1, Final Submit or Skill Mastery.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP17_R03_Q03_Q10_Q14_Q15_Q16_Q18_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_V2_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Read the exact R03 learner source blob against the immutable R02 baseline and verify that only one visible selfcheck introduction changed. Confirm that all eight question-only public replays remain identical and no key, hint, private assessment, or independent Mastery appears within selfcheck. Check that the new wording is practical and does not suggest official scoring, and that all previous canonical IDs, solutions, rubrics and assets remain untouched. Report P0/P1/P2 and MINIMAL_DELTA only for the changed source scope; do not infer full CONTENT_READY, production release or an independent NotebookLM verdict.
