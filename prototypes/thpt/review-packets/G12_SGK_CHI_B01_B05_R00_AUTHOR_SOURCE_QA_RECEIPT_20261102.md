# G12 SGK ChI (B01–B05 + cuối chương) — pre-independent-review AUTHOR source/structure QA receipt

PACKET_ID: G12-SGK-CHI-B01-B05-R00-CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
OWNER_S1: SGK/SBT Toán 12 KNTT Tập Một
AUTHORING_BRANCH: content/g12-sgk-chI-s1-authoring-20261102
SOURCE_QA: PASS_STRUCTURE_ONLY
ACADEMIC_VERDICT: INDEPENDENT_PENDING
PEDAGOGICAL_SELF_LEARNING_READY: INDEPENDENT_PENDING
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Frozen original source and Git cryptographic identity

- Exactly one author **canonical combined full-chapter source**: `prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md`; Git blob `f0862dcdab21dec136e43969f45c42638e7c7574`.
- Exactly one **NotebookLM temporary review packet, Git byte-identical to original author canonical**: `prototypes/thpt/review-packets/Temp_G12_SGK_CHI_B01_B05_FULL_INDEPENDENT_NOTEBOOKLM_REVIEW_R00_20261102.md`; same blob `f0862dcdab21dec136e43969f45c42638e7c7574`. It contains all original six complete Markdown components, six SVG XML and a one-to-one item-outcome-role matrix. Review source metadata and original Markdown data together form the locked candidate snapshot; students should only see student learning content, not the reviewer/author wrapper.
- Original six Markdown component source blobs: B01 `adf4f161ff4db1d203465b22b88da8827bf8a699`, B02 `ae768307157fbfc38cb4c61443dee599197aa0f4`, B03 `0143707da223a2dd476ab9cbc40d48c15b87b916`, B04 `01242eea1c26fb142b3a285bb8e122c7d6ebfa18`, B05 `a5abc67eb67aaf33c7954c200d836779c2da5e5b`, END `b9dc8aa0ae1e4f36fb365df4f01b2d4d259e5d85`.
- Original six SVG Git blobs: B01 `e2696224533994826104e6c505d9dab26fc0a2e2`; B02 `057991020c0f9349f160047cd87ae35ce03a87ef`; B03 `802f01f5b8dce392e3a064a54efe33ae1aea44fc`; B04 rational `529b05d33fb0347dab70587c84c8ec08789c5c98`; B04 cubic `8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b`; B05 box `eacd5ba60f25d87c102917a55d314fb16d6f8341`. Each has original SVG title, desc and viewBox, no script/foreignObject/network image references.

## Original owner S1 PDF receipts and pagination

| Original book | SHA256 | Actual PDF size/pages | Lesson printed page → 1-based PDF page |
|---|---|---|---|
| SGK KNTT Toán 12 Tập Một | `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd` | 15,988,398 bytes; 104 pages | B01 5–14→7–16; B02 15–19→17–21; B03 20–25→22–27; B04 26–32→28–34; B05 33–41→35–43; chapter-end 42–44→44–46 |
| SBT KNTT Toán 12 Tập Một | `db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca` | 25,644,753 bytes; 117 pages | B01 4–9→2–7; B02 10–16→8–14; B03 17–20→15–18; B04 21–26→19–24; B05 27–32→25–30; chapter-end 33–37→31–35 |

Author directly rendered owner scan pages and inspected book's original printed numbering, titles, examples, figure requirements. **Do not extrapolate SGK page offset to SBT.** Original source S1 educational depth is checked by independent NotebookLM separately.

## QA counts and auditable source checks (STRUCTURAL ONLY)

- **5** complete SGK lesson drafts B01–B05 and **1** end-of-chapter RD0 *self-check* (not confidential official RD1), **36** unique student-facing/public RD0 outcome IDs, **78** globally unique public canonical item IDs, **24** concept-first worked D2 examples, **36** five-step D6 HELP cards whose return-item belongs to that same primary outcome; **6** original teaching SVG XML sources.
- AUTHOR direct source scan: 78/78 item IDs unique across all six component files; every item has exactly one primary skill/outcome + one placement/role heading; all 36/36 outcomes have ≥1 item and ≥1 same-outcome HELP; 36/36 HELP return to existing public canonical item of the **same** outcome; 24 unique EX IDs; no duplicate outcome IDs.
- Original Author SVG mathematical spot checks: B01 f=x³−3x extrema (−1,2),(1,−2); B02 max/min f=x²−4x+1 on [0,5] are 6 at5 and −3 at2; B03 f=3+7/(x−2) with x=2 and y=3 asymptotes; B04 cubic f=x³−3x² has extrema (0,0),(2,−4) and center (1,−2), rational g=(x+2)/(x−1) has asymptotes x=1,y=1; B05 volume V=x(30−2x)(20−2x) with x*=(25−5√7)/3≈3.9237478 cm, Vmax≈1056.305895 cm³. Author formula spot checks are **not independent academic review verdict**.
- All publicly written Worked/D3/D4 source answer lines and /4 Written rubrics are for independent reviewer and post-submit learner self-comparison only, not for static site serving before Final Submit or writing Skill Mastery. End chapter 12 items are explicitly **PUBLIC RD0 client self-check**; independent SGK_CHAPTER_READINESS and all RD1 material are absent/private.
- Each learner section has WHY, prerequisites, concept-before-formula, method choice/limits, examples, self-try before Core, Canonical Practice + Written/Anchor and D6 paths. Whether self-study **depth is actually sufficient** is intentionally reserved for original independent NotebookLM Q01–Q18 Academic/PED verdict; do NOT infer from item counts.

## Hold / next action

`BLOCKED_BY_AUTHORING: G12_CHI_R00_EXTERNAL_ACADEMIC_PED_REVIEW_PENDING`. User independently runs NotebookLM with **exactly five THPT Permanent Sources v2.1**, S1 original SGK/SBT and this one `Temp_` source; deliver report Academic/PED separately, per lesson/outcome/item, original SHA/receipt, P0/P1/P2 and MINIMAL_DELTA. If P0/P1, update only affected source Delta C and re-review affected scope, source-lock new SHA. Only when Academic + PED PASS Q01–Q18 can G12 Chapter I receive exactly one handoff V2, one manifest `ready/` and one REGISTER row. The authoring branch must not merge/deploy or alter existing THCS/THPT Golden website, Firebase, RD1, official progress or Mastery.
