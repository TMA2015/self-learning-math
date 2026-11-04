# G12 SGK ChVI R00 — AUTHORING self-QA and NotebookLM candidate receipt (NOT independent PASS)
PACKET_ID: G12-SGK-CHVI-B18-B19-END-R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
PERMANENT_SOURCES_VERSION: THPT-v2.1
SOURCE_ROLE_CORE: SGK_KNTT_S1
SOURCE_ROLE_EXERCISES: SBT_AND_OTHER_REFERENCE
QA_STATUS: AUTHORING_SELF_QA_PASS_NOT_NOTEBOOKLM
ACADEMIC_VERDICT: NOT_REVIEWED
PED_VERDICT: NOT_REVIEWED
CONTENT_READY: NO
PUBLIC_CANONICAL_SOURCE_GIT_CUSTODY: PENDING_BYTE_EXACT_ARCHIVE_TO_AUTHORING_PR
PUBLIC_ASSET_GIT_CUSTODY: PENDING
PRIVATE_RD1_PUBLIC_GITHUB: NO
RELEASE_AUTHORIZATION: NO

## S1 evidence
Original Toán 12 KNTT SGK Tập Hai SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`; B18 SGK printed64–71/PDF1 66–73; B19 printed72–78/PDF1 74–80; END printed79–80/PDF1 81–82. Original SBT Tập Hai SHA256 `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1`, B18 printed40–42/PDF1 38–40, B19 43–44/PDF1 41–42, END45–47/PDF1 43–45. Verified from rendered page contents; SBT used as reference families, not copied canon.

## Review candidate coverage on immutable local ZIP
| Field | AUTHORING self-QA |
|---|---|
| Local review ZIP filename | `Temp_G12_CHVI_FULL_CHAPTER_NOTEBOOKLM_R00_20261103.zip` |
| Local ZIP SHA256 | `f509303b6d98c45134928c7668c3c76b9a83918705d5222a4d13ccbac9243b1a` |
| ZIP composition | Eleven supported review files: B18/B19/END/S1-matrix Markdown + private RD1 Markdown + QA Markdown + 5 rendered PNG diagrams |
| B18 source Markdown SHA256 | `30458f5edcb6c2ba018ede9ea4a9465f5511f4645566b9beacf3d16a9f63a364` |
| B19 source Markdown SHA256 | `79487a3f52f7ad671c43b58fd2cd407b4fd3990229ba0d429fa8fa3c3c330fbe` |
| END source Markdown SHA256 | `b7fac0289c50e9ea5adca0474b6cde46ba7498f67ce534bfd16981a71fe7cc05` |
| Outcome/Item matrix SHA256 | `c33da553cffe9dcd5a2dc4f6c2f2c01ef70e2e98855831f4b7808e6b60e60773` |
| Private RD1 candidate FULL-FILE SHA256 | `a994426ec0a6968dd5de9307603669832f296d5056a2743e36b550223a75438b` (metadata ONLY) |
| Author QA & PNG SHA ledger | `Temp_G12_CHVI_QA_SHA_MANIFEST_R00_20261103.md`, SHA256 `52062583c6ce4a81e9bb109f3c3b306718de4af0ba16f5ab150f79fb7279e150` |
| Static QA | 14 proposed outcome IDs, 56/56 unique public items (14 each Core/Practice/Application/Written), 14 Written rubric sums exactly /5, 14 outcome-specific reasoned D2 examples plus one original Monty Hall conditions illustration, 14 D6 same-outcome helps, 4 pre-Core first tries |
| Public END | 14 CLIENT_SELF_CHECK_NO_MASTERY placements referencing same 14 Application IDs (not official chapter readiness) |
| Private RD1 | 14 unique held-out candidate questions with keys **inside owner private review ZIP ONLY**; no stems, keys or rubrics in this public Git file |
| Math checks | 70 exact rational arithmetic/answer checks PASS on 14 examples + 56 public tasks; not independent reviewer verdict |
| ZIP / images | CRC + byte equality for 11 entries PASS; all 5 PNG opened successfully |

## AUTHORING controls
- **Not source-locked on Git:** This source receipt stores candidate filenames + SHA256, but **does not mean the full B18/B19 markdown files and five PNG binary files have been archived to Git**. Do not mint a source Git blob or claim Q18 source-custody PASS until byte-identical source+media are persisted and checked. Draft PR #731 is still working, no ready/ manifest, REGISTER CONTENT_READY row, handoff V2, website integration, merger or deployment.
- NotebookLM should independently check each of 14 proposed outcomes/56 public item IDs/14 private RD1 items, Q01–Q18, D1–D6/PED1–PED6, false Bayes base-rate, Monty Hall host assumptions (original 3-box EX-G12-B18-MONTY teaches why switching wins 2/3 only under explicit host protocol), rubric fairness and 5 PNG reading guides, then return Academic/PED verdict, `SOURCE_RECEIPT`, P0/P1/P2, MINIMAL_DELTA by ID. **Only after reviewer PASS** and exact source/media SHA custody can AUTHORING create one V2 handoff + ready manifest + REGISTER row.
- In NotebookLM **KEEP** 5 Permanent THPT v2.1, SGK/SBT 12 Tập Hai; **DESELECT without deleting** prior ChV Temp batches; **ADD** 11 R00 review files by extracting ZIP (never upload ZIP as a source). RD1_PRIVATE is only for owner-controlled reviewer; do not publish it or expose answers to learners.
