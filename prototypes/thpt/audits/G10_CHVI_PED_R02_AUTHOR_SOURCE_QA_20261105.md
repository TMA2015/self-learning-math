# G10 SGK Chương VI B15–B18 — PED R02 AUTHORING source QA / NotebookLM scope (05/11/2026)

PACKET_ID: G10-SGK-CHVI-PED-BRIDGE-R02-20261105
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
ROLE: AUTHORING_ONLY
SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
SOURCE_GIT_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
SOURCE_UTF8_BYTES: 93198
REVIEW_SCOPE: NEW_PED1_PED6_AND_NEW_FIRST_TRY_HELP_SVG_DELTA_C
ACADEMIC_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
PED_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
CONTENT_READY: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
HISTORIC_R01_REVIEWER_GIT_RECEIPT: 23156f35aab6ec28771a6a57d48bad74f3900e9c
HISTORIC_R01_ACCEPTED_FIVE_TEMP_ZIP_SHA256: 704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960
HISTORIC_19_OUTCOME_KNOWLEDGE_PARITY_GIT_BLOB: 2f4828b18905991bfa87004009e49bb4dd2aa914
B17_OUT04_SCOPED_R02_ACADEMIC_SOURCE_CORRECTION_GIT_BLOB: 6596bda5e7025aa62cddb199c46151e78e98781b
HISTORIC_CHVI_S1_PDF_INDEX_GIT_BLOB: a18b970126eb2663a71bd4b69c4c79adfd93b4b6
PRIMARY_SGK_TAP2_PDF_SHA256: ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6
PRIMARY_SBT_TAP2_PDF_SHA256: 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7
PUBLIC_CHVI_CLIENT_JSON_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7

## Source S1 and immutable historical verdict

**Correct book:** SGK/SBT Toán 10 KNTT **Tập Hai**, NOT Tập Một. Verified historical Git `THPT_G10_CHVI_S1_PDF_VISUAL_INDEX_RECEIPT_20261027.md` gives printed pages SGK B15 pp4–10, B16 pp11–18, B17 pp19–24, B18 pp25–27, chapter end pp28–29; SBT B15 pp3–9, B16 pp10–15, B17 pp16–18, B18 pp19–21, end pp22–27; PDF page numbers are printed +1 for the historical scans. Historical original S1 PDF hashes are **SGK ee8a0039...** and **SBT 3cb33690...**; the hashes from Toán 10 Tập Một are inapplicable and were removed from this packet. This turn relies on earlier visual source receipt; it did not newly inspect the private scans.

Historical NotebookLM independently PASSed the frozen ChVI 5-Temp ZIP for 19 outcomes and 54 item IDs; 28 Core/Practice/Application, 8 Written/Anchor, 18 originally held-out Readiness. Historical R01 PASS is retained **only for that immutable snapshot**, which is not reprinted or re-certified here. B17_OUT_04 fixed nonzero-a SGK Core parameter scope has an additional independent R02 academic delta PASS and corrected S1 SGK p24 exercise 6.17; do not reintroduce false SGK p23 example pointer or claim a(m)=0 belongs to mandatory Core.

**Public custody at current main differs from historical receipt:** `docs/assets/data/thpt-g10-readiness/CHVI.json` now contains the original 18 end-chapter item IDs with **public stems/answers/rubrics**, `mastery_credit:false` and `persist_results:false`. These were historically recorded as held-out, but after publication they **cannot serve as independent protected Readiness/Skill Mastery**. They remain `CLIENT_SELF_CHECK_NO_MASTERY` under Final Submit protections. This R02 source DOES NOT reproduce those 18 question bodies, answers, keys, rubrics or introduce new protected RD1.

## Author-run structural checks — not independent academic PASS

| Check | Observed | QA author |
| --- | --- | --- |
| Lessons | B15, B16, B17, B18 = 4 | PASS |
| Historical outcome IDs | 19/19 identical to `B15_OUT_01..B18_OUT_04` S1 parity receipt | PASS |
| New `FIRST_TRY_ITEM_ID` | `THPT-G10-CHVI-TRY01..19`, 19/19 distinct | PASS |
| New `D6 HELP_ID` | `HELP-G10-CHVI-TRY01..19`, 19 distinct, each exactly 5 steps | PASS |
| New `D5 SVG_ID` | `FIG-G10-CHVI-B15-01`, `FIG-G10-CHVI-B18-01`, XML balanced, accessible `title/desc`, no external/script resources | PASS |
| Other visual guidance | B16 inherits reviewed R4 parabol SVG; B17 inherits sign tables, PED4 reading guidance | PASS as source inventory, not reviewer verdict |
| Existing R01 return refs | 19/19 point only to frozen original 28 Core/Practice IDs | PASS ID resolution; relevance to be independently reviewed |
| Existing item bank | 28 Core/Practice + 8 Written = 36 reviewed PUBLIC IDs, plus 18 client-only public final = 54 | PASS inventory |
| Distinct public item IDs after R02 approval | 54 historical + 19 new = **73** (no collisions) | PASS identity |
| Voluntary self-reveal | 19/19 `details/summary` pairs, item answer in one corresponding section | PASS |
| HELP format | 19/19 5-step D6 with error diagnosis, cause/grounding, self-repair and existing Core return | PASS |
| Author maths smoke | 19/19 outcome-specific numerical or algebraic independent spot checks | PASS author, not reviewer |
| S1 book volume and PDF hash | Both Toán 10 KNTT **Tập Hai**, original S1 SHA-256 and printed-page map verified against frozen receipt | PASS provenance |
| B17_OUT_04 scoped prior correction | fixed a=1, `f_m>0\ \forall x` iff `Delta(m)<0`, SGK p24 Bài 6.17 | PASS source consistency |
| NEW Academic/PED verdict Q01–Q18 | Not yet independently reviewed for new R02 | PENDING |

## Scope and review contract

**One file** `Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md` contains all *new* 19 PED sequences and first tries, 19 unique D6 cards, 2 new XML SVG diagrams, 19-item outcome/return matrix, actual stems and fully reasoned self-reveal answers. It does **not** contain the private historical original 5-Temp ZIP, nor do we assert byte-equivalence for its contents; original independent PASS is recorded by receipt/ZIP SHA and preserved. The two new SVGs are part of the new Delta C review scope, not already PASSed source graphics.

Ask NotebookLM to read the single current `Temp_` using exactly **5 Permanent THPT Sources v2.1**, S1 **Tập Hai**, one `SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18`, and independently review each new outcome/TRY/HELP/FIG. Require SOURCE_RECEIPT, complete REVIEWED_IDS and lesson/outcome/item Academic + PED verdict, P0/P1/P2, minimal delta, mathematics, D5/PED4 visual validity and B17 source-limit check. Preserve old 54-ID PASS on its immutable snapshot, do not reuse exposed end-chapter questions for official assessment, do not self-authorize CONTENT_READY/merge/deploy.

**STOP here before independent reviewer.** Not a V2 ready manifest; no website integration or release action. Subsequent approved Delta C outcome only may be source-locked into R03 and separate one handoff/one manifest/REGISTER for AUTHORING if every required gate passes.
