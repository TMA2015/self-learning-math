# G10 SGK ChVI — R03 effective canonical source, author QA (05/11/2026)

PACKET_ID: G10-SGK-CHVI-PED-EFFECTIVE-R03-20261105
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
STATE: AUTHOR_QA_PASS_BLOCKED_BY_AUTHORING
SOURCE_R02_REVIEWED_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
SOURCE_R03_EFFECTIVE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md
SOURCE_R03_EFFECTIVE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R03_D6_CROSSWALK_PATH: prototypes/thpt/content-drafts/G10_CHVI_PED_D6_R03_EFFECTIVE_ROUTING_OVERLAY_20261105.md
R03_D6_CROSSWALK_BLOB: 3532973d5b0f09b64160f3d59d4f1c8b644c6877
PRE_HANDOFF_PATH: prototypes/thpt/release-handoffs/G10-SGK-CHVI-FULL-R03_PRE_HANDOFF_AUTHORING_20261105.md
PRE_HANDOFF_BLOB: 561a61f6676b939ad639419104031738e975bebe
HISTORIC_R01_NOTEBOOKLM_RECEIPT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
HISTORIC_R01_54_ITEM_ZIP_SHA256: 704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960
REVIEWER_REPORTED_R02_ACADEMIC_PED: PASS_19_19_P0_P1_P2_ZERO
REVIEWER_REPORTED_TWO_SVG_Q07_PED4: PASS
AUTHOR_Q15_CANONICAL_RECONCILIATION: PASS
AUTHOR_D6_ROUTE_QA: PASS_12_CORRECTED_7_UNCHANGED
REVIEWER_R02_EXTERNAL_MOUNT_Q18: SOURCE_PARITY_UNPROVEN
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Material authoring improvement — not a reviewer rework or Git hash exercise

The author compared the frozen R02 text to **actual canonical item stems**, not only ID presence. The original R02 had 12 recovery destinations that either pointed to a different skill (e.g. monotonicity → piecewise, parameters → garden fence, two radicals → one radical, and vice versa) or a Topic-only demo unrelated to SGK outcome. R03 repairs **only recovery destination / same-item placement text**. Four outcomes return to the already existing SGK explanatory section because there is no suitable *old* canonical practice that directly matches their difficulty; no phantom ID or required Topic detour.

The author then discovered an exact **one-question/two-active-item-ID** defect: R02 `THPT-G10-CHVI-TRY17` and frozen R01 `THPT-G10-B18-C01` ask the identical original question **`√(x+5)=x−1`**, with the same single valid root and false root. The R03 effective source **retires TRY17 as an active item ID** but retains it as a historical reviewer alias, and gives the First Try placement `G10-CHVI-B18-FIRST-TRY-17` the existing canonical `THPT-G10-B18-C01`. The SGK Core placement is the SAME item, **not an independent attempt/mastery**. Its D6 fifth step now routes to a different existing item `THPT-G10-B18-P01` rather than repeating the identical problem. No canonical question content or grading was altered; this is ID/placement source equivalence, not additional mathematics.

## Evidence: mechanical AUTHOR QA on the two Git blobs

| Verification | Observed | Result |
| --- | --- | --- |
| Lessons and outcome inventory | 4 SGK lessons B15–B18, 19 R01 locked outcomes in both sources | PASS |
| Original FIRST_TRY problem stems | **19/19 identical** strings R02 → R03 | PASS |
| Answer and fully reasoned solution | **19/19 identical** lines `Đáp án` and `Lập luận` | PASS |
| PED1 WHY / PED2 PRE / PED3 MEANING / PED4 VISUAL / PED5 METHOD | **19/19 identical** lines per field | PASS |
| D6 error diagnosis, knowledge and self-repair | **19/19 identical** `1`, `3`, `4` steps; `2` changes only the retired TRY17 alias → old canonical name | PASS |
| Two original inline SVG XML blocks | **2/2 byte-identical** R02 → R03 (B15 input/output, B18 radical sign flowchart) | PASS |
| D6 return target matches FIRST_TRY item outcome and source crosswalk | 19/19 link reconciliations, **12 updated**, **7 unchanged** | PASS |
| R01 original count | 28 formative +8 Written +18 public chapter-end = **54** distinct | PASS |
| R03 canonical FIRST_TRY placements | **19**, consisting of **18 newly canonical questions +1 old R01 item reused** | PASS |
| R03 active canonical public `item_id` | **54 original +18 new =72** unique public IDs | PASS |
| R02 exact duplicate Q15 | same equation `√(x+5)=x−1`, formerly 2 IDs | FIXED in R03 by shared ID |
| Original 18 public chapter-end items | `CLIENT_SELF_CHECK_NO_MASTERY`, not private RD1 / not independent graded mastery | PASS boundary |
| Reviewer independently re-reviewed effective R03 | **NO**: it was NOT requested because math/answers/rubrics and the pedagogical explanations are unchanged; only ID and recovery placement source-equivalent corrections | CORRECT SCOPE |
| Original external NotebookLM R02 mounted source parity Q18 | Reviewer mounted file had differing 92,640 vs remote Git 93,198 bytes; no mechanical diff to prove all line parity | **HOLD** |
| Signed `CONTENT_READY` handoff | Not created; current V2 pre-handoff clearly labels HOLD | **PENDING** |

## Effective learning route after this correction

For each SGK B15–B18 outcome, `WHY → PRE → MEANING → READ_VISUAL → METHOD → FIRST_TRY → self-reveal → D6(if needed) → correct SGK explanation/approved Core/Practice → end-chapter selfcheck`. This is concept-first. **Correct D6 routing is part of the educational experience**, not a quest for arbitrary question counts. Duplicate First Try/Core item has one `item_id` across two placements and may not be used twice as independent evidence.

The original reviewed R02 remains unchanged. **This R03 content is now the single effective public SGK ChVI PED source for future RELEASE intake when AUTHORING's independent full-chapter source/receipt gates are genuinely satisfied.** The current public site is NOT modified. The original R01 five-Temp ZIP and privately held Written bodies have not been falsely recreated.

## Gate and next

**AUTHOR QA COMPLETE** for source identity, internal R02→R03 educational text parity, Q15 de-duplication and D6 repair. Independent NotebookLM 19/19 PASS on R02 and separately Q07/PED4 on the two SVGs are preserved as *historical reviewer evidence*, not a newly invented sign-off for R03. **Q18 external R02 source custody still requires AUTHORING evidence**, not another NotebookLM Git/hash task. Until that is resolved, remain `BLOCKED_BY_AUTHORING` with no true `CONTENT_READY`/ready manifest/REGISTER row. RELEASE work, website PRs, Golden UI changes, Mastery, merge/deploy are outside scope.
