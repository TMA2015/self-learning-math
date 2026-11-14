# G10 SGK ChV FULL R03 — AUTHORING A1–A7 source and resolved-overlay QA

AUDIT_ID: G10-SGK-CHV-FULL-R03-SOURCE-EQUIVALENCE-20261105
PACKET_ID: G10-SGK-CHV-FULL-R03-CANDIDATE-20261105
ONE_STANDARD: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
ROLE: AUTHORING_ONLY
SOURCE_BLOB: ea0de4b484527c2f47e07840c7f00914badd67e7
REVIEW_RECEIPT_BLOB: 1b9620cd45172277516b0621cd20f3cb695aceaa
HANDOFF_BLOB: 653316f9b937832308f244de71e27770b3ff062a
RAW_OWNER_TXT_REVIEW_BLOB: b722ec8a635d915b736bfa0dfe1b48d7a9dd6e9e
ACADEMIC/PED_NEW_R02: INDEPENDENT_NOTEBOOKLM_PASS_14_14
BLOCKERS: NONE_AFTER_V2_MECHANICAL_QA
CONTENT_READY: YES_AFTER_EXACT_HEAD_SOURCE_QA
RELEASE_AUTHORIZATION: NO

## Original source and reviewed material preservation

1. Original R01 source frozen Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7` retains old historical records; original 27 canonical questions, 9 worked examples, 3 Written, other HELP and figures remain exact content.
2. Corrected B12 **HELP-G10-B12-01@R02** `2cecaba020881a560bc33251c38d55cc10a05516`, **HELP-G10-B12-02@R02** `913400d6aff63befac95a8a47a00870663dd0096` are inserted by **replacement**, one active canonical HELP_ID each, not by appending extra cards.
3. Corrected B12 **FIG-G10-B12-01@R02** SVG from public reviewed resource Git blob `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52` replaces incorrect original R01 SVG at one FIG_ID. B13/B14 FIG untouched, total three effective FIG IDs.
4. New original PED R02 Git blob `524124e5b6d3af92130cd05178d3d58d2035b084`, 14 outcomes and 14 canonical TRY items, all owner-provided NotebookLM Academic/PED PASS, P0/P1/P2=0. R03 effective content prepends all PED material unmodified before R01 effective source, including corrected overlays, and embeds original 18-public-client CHV JSON blob `94c5c39ad7958b2ef02ada016d928954a0b430f6`.
5. Unique 59 public item IDs = 27 original R01, 14 reviewed new TRY, 18 legacy public final checks. All 14 source links resolve to existing canonical R01 Core and six effective D6 HELP. No new private RD1, hidden item/answer, Mastery or Topic claim.

## Evidence / result

| Gate | Evidence | Result |
| --- | --- | --- |
| A1 source identities | All six original blobs and one R03 Git source blob pinned | PASS |
| A2 S1 original printed pages | Correct B12/13/14 SGK/SBT and chapter-end from frozen S1 and new reviewer | PASS |
| A3 independent review | Original R01 PASS, B12 scope corrections PASS, new R02 14/14 Academic/PED PASS | PASS |
| A4 item/outcome matrix | 3 lessons, 14 outcomes, 59 mapped unique public ID | PASS |
| A5 academic/ped content | R01 D1–D6, nine worked examples, 14 PED bridges and first tries | PASS |
| A6 delta scope | Exactly three already PASSed corrected same-ID replacements; new R02 independent Delta C PASS; R03 Delta B source equivalence | PASS |
| A7 RD1 safety | Only old public CHV.json client selfcheck, no official held-out Mastery | PASS |
| Exact owner report | TXT CRLF Git blob `b722ec8a...` SHA256 `99dd14c3...` stable; Studio Markdown corrupt export not promoted | PASS |
| R02 size label discrepancy | Reviewer claims 39,084 bytes vs real Git R02 47,390; metadata logged, no item mismatch | DOCUMENTED |
| Release AP1–AP5 / R1–R5 / P1–P2 | Separate RELEASE gate; not performed here | NOT_CLAIMED |

**No re-review of mathematically identical sources. Do not merge/deploy this AUTHORING PR.**
