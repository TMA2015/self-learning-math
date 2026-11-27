# CĐ17 · Exact-source editorial regression QA · 14/11/2026

STATE: AUTHORING_EDITORIAL_CANDIDATE_NOT_CONTENT_READY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
FROZEN_SOURCE_BLOB: baa6c6c575a4cf79187b2aebd2047b1cf872b983
EDITORIAL_SOURCE_BLOB: a2c829415ee3f60ceec0edd49fc6f4ec1ed37ecb
EDITORIAL_SOURCE_PATH: prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_TOPIC17_DISTANCE_VOLUME_R01_FORMAL_MATH_VAN_DUNG_20261114.md
NUMBERED_FORMAL_KNOWLEDGE_BLOCKS: 12
EXISTING_CANONICAL_ITEM_ID_OCCURRENCES_PRESERVED: 27
IMAGE_REFERENCES_PRESERVED: 2
AUTHOR_Q18_SIGNOFF_ON_NEW_FORMAL_BOXES: NOT_DONE
CONTENT_READY_NEW_SOURCE: NO
RELEASE_INTAKE: NO

## Nine directly executed source diff/structure checks

1. **PASS** — All original `ITEM_ID` definitions occur in the same order (old 27, new 27; CĐ01 uses independent original metadata and noncanonical knowledge prompts so this check applies to zero explicit source definitions).
2. **PASS** — All original `OUTCOME_ID` occurrences and canonical association order preserved.
3. **PASS** — All 2 original image Markdown ref paths preserved in exactly their original order.
4. **PASS** — 12/12 knowledge statements are explicitly typed as definition/property/formula/theorem/method/remember; no formula box invented by release.
5. **PASS** — The three independent TOPIC learner pages still exist: Kiến thức / Luyện tập / Tự kiểm tra.
6. **PASS** — One public-facing SGK/SBT bibliography placed before the end of Knowledge and not duplicated.
7. **PASS** — No student-visible “Tự thử” text; uses **Vận dụng**, without altering technical question IDs.
8. **PASS** — The voluntary public self-check keeps `CLIENT_SELF_CHECK_NO_MASTERY`; no official independent RD1 created.
9. **PASS** — Candidate source Git blob differs from and does not overwrite the frozen baseline.

**Interpretation:** These nine checks directly compare the old and new *source content* and source references, not mathematical truth of the new formal classification. The explicit knowledge boxes and any newly formalized wording are `DELTA_C_ACADEMIC_MATERIAL` requiring targeted verification of mathematical conditions against S1, D1–D6/PED1–PED6 and diagram semantics. Even if old Rxx was CONTENT_READY, it remains valid only for original frozen blob `baa6c6c575a4cf79187b2aebd2047b1cf872b983`; new Rxx has **not** signed Q18 and must not silently inherit acceptance. This QA file is not independent NotebookLM PASS, website AP/MathJax render proof, device proof or RELEASE authorization.

**No** V2 handoff update, ready/REGISTER promotion, Mastery, protected RD1 import, merge or deploy.

## Figure-first source correction
Both original B26/B27 diagram refs are unchanged but moved before their learner `Đọc hình` directions; no new figure invented and no release browser QA claimed. R01 candidate is now exact blob `af08791b4d7104679a3ea3481068266a07c72dce`.
