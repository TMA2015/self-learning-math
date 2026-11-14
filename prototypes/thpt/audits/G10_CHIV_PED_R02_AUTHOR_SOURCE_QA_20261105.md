# G10 SGK ChIV — R02 pre-review author QA & scope evidence (2026-11-05)

PACKET_ID: G10-SGK-CHIV-PED-BRIDGE-R02-20261105
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
ROLE: AUTHORING_QA_ONLY
ACADEMIC_VERDICT: NOT_YET_INDEPENDENTLY_REVIEWED
PEDAGOGICAL_VERDICT: NOT_YET_INDEPENDENTLY_REVIEWED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHIV_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
SOURCE_GIT_BLOB: 8f04bef0ae4eaab14024edc05e66296357a2d726
SOURCE_COMPONENT_R01_B07_B08_BLOB: 42b206e31421b33860a1bf697d2d04b7aba992cf
SOURCE_COMPONENT_R01_B09_B11_BLOB: a9f6fab820559a8da98a5a42cd9902dbf9891f34
ORIGINAL_R01_B07_B08_NOTEBOOKLM_RECEIPT_BLOB: cf4df6ecb603adb258ab5de03f9defa2c695369f
ORIGINAL_R01_B09_B11_NOTEBOOKLM_RECEIPT_BLOB: f13acb74206c00cb489e533df7792870f88830e3
EXISTING_CHIV_PUBLIC_JSON_GIT_BLOB: 55b2753c04cffff897947d7007bdc860bc19fcfb

## Nội dung đã xác nhận trước phản biện độc lập

- Original B07–B08 R01 and B09–B11 R01 together **5 SGK lessons / 24 outcomes / 45 canonical public R01 items / 15 independently reviewed D2 examples / 5 SVG / 10 HELP**; no original stem/answer/rubric/HELP or original review report changed.
- New pedagogical Delta C R02 **24 outcome explanations and 24 new FIRST_TRY IDs** `THPT-G10-CHIV-TRY01..TRY24`. Each has WHY, PRE, MEANING, reading figures, method/limits, self-reveal after personal effort and D6 return to an EXISTING HELP and Core item; 24/24 unique items, no duplicates.
- Existing CHIV.json has **21 already PUBLIC** chapter self-check IDs and `mastery_credit=false`; not an independent held-out testing bank despite historical RD1-like names. Combined future source will have 90 distinct public IDs = 45 R01 + 24 R02 + 21 legacy client-only. **No new protected RD1**, no Mastery changes.
- SGK KNTT printed pp46–72 and SBT pp45–71 proven in the earlier source receipts; no invented PDF index offset.
- Key nuance for reviewer: KNTT SBT uses a special convention that \(\vec0\) is cùng phương/cùng hướng with every vector, but ordinary angle between vectors in B11 needs both vectors nonzero. Underlying geometry/math about midpoint, centroid, opposite, scalar sign, dot sign and units checked author-side.

## Automated structural checks of candidate + current main (not academic PASS)

| Test | Actual | Author preflight |
| --- | --- | --- |
| Lesson IDs | B07, B08, B09, B10, B11 | PASS |
| R01 originals | 45 original unchanged canonical IDs | PASS |
| New outcomes and item mapping | 24 unique / 24 unique | PASS |
| HELP / Core references | 24/24 resolve to original R01 files | PASS |
| Self-reveal blocks and remediation | 24/24 each | PASS |
| Legacy public CHIV.json | 21 originals, no new private bank | PASS |
| Cross-bank item collision | 0, total future public distinct 90 | PASS |
| Academic/PED reviewer verdict for new R02 | Not yet issued | PENDING |

## Handoff scope

A single `Temp_` Markdown file is the **source to upload for NotebookLM**, this QA file is support and not a second permanent source. Send review of new Delta C only against five active THPT Permanent Sources v2.1 and KNTT S1, independent 24 outcomes/items Academic/PED and Q01–Q18. Do not issue `CONTENT_READY`, write Mastery, merge/deploy or act in RELEASE lane. If reviewer identifies errors, apply minimal correction and re-review only affected item/outcome while preserving historical PASS.
