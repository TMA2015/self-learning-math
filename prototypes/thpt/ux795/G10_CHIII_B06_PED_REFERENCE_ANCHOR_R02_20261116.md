# G10 ChIII B06 — PED precision corrective delta R02 · 2026-11-16

**PACKET_ID:** `G10_CHIII_B06_PED_REFERENCE_ANCHOR_R02_20261116`  
**STANDARD:** `SLM-THPT-QUALITY-ONE` Q01–Q18 · **Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (clarifies pedagogical language and first-use term definition only; not a new outcome/condition)  
**BASELINE_MAIN_COMMIT:** `b7f5ec7f02df49dc832480ee04c996dbb7a024b0`  
**LESSON_ID:** `G10-CHIII-B06`  
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-iii/bai-6.md`  
**R01_APPROVED_SOURCE_BLOB:** `a695e0f55879350ecac0ea867136da28c62eac33`  
**R02_CORRECTED_SOURCE_BLOB:** `2f0b998bb7306b47dff3a4e9f0c8c910edf7f6f9`  
**R01_RECEIPT_PATH:** `prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md` (immutable; don't retroactively edit)  
**CSS_UNCHANGED_BLOB:** `a6f5061a0660ad5ae32867e3639d4a375e05fe29`  
**JS_UNCHANGED_BLOB:** `1d78bd34bd51233a48669b1358b228eb99fbc34d`  
**SOURCE_S1:** SGK Toán 10 KNTT tập 1 B06 pp38–43; S1 reproduced source previously inspected, no new page provenance claimed. `SOURCE_SCAN_AUTHORITY_PENDING` retained from R01.

## Qxx / outcome / owner feedback / minimal delta / verification

| QA | Outcome & placement | Owner P2 observation | R02 source change & check |
|---|---|---|---|
| Q09-Q10 / PED1-PED2 | B06 COSINE, Tab1 §1.2 | "giữ hai cạnh" lacks geometric object | Start "Xét tam giác ABC" and name (b=CA,c=AB), then hold both lengths; table re-anchors three comparing triangles |
| Q09-Q12 / PED1-PED4 | B06 SINE, Tab1 §1.3 | "biết hai góc và một cạnh" without naming figure | Start "Xét tam giác ABC" and specify 2 angles, 1 side length of **that triangle**; name circumcircle of same triangle and object of solving |
| Q09-Q12 / PED1-PED4 | B06 AREA, Tab1 §1.4 | "Diện tích đã biết ở THCS" unclear which shape | Explicitly name area of **triangle ABC**, specify corresponding base and altitude from vertex C, inradius/circumradius of triangle ABC and semiperimeter (p=(a+b+c)/2) |
| Q03/Q09-Q12 / PED2-PED4 | B06 HERON, Tab1 §1.5 | "tam giác không suy biến" bold with no explanation | First-use local definition: vertices A,B,C **noncollinear**, area positive, for positive side lengths each length smaller than sum of other two; retain usual geometry domain. Tab2 §2.1 recalls definition. |
| Q09-Q12 / PED2-PED4 | B06 SINE, Tab2 §2.2.1 | Circle/angle references can stand without local anchor | Name triangle ABC and its circumcircle; restate angle/side of same triangle before formula |

**PED rule already inside Q01–Q18:** Local `geometric object → given/unknown → symbol → relationship → formula`. Do not manufacture a second standard. User review estimated roughly 95% completeness and explicitly requested these minimal clarity corrections; no general content overhaul.

**Formal condition unchanged:** Nondegenerate triangle requires A,B,C noncollinear; all three side lengths positive and strict triangle inequalities. This only **explains** an existing condition, does not alter any formula or applicability. The equation (S=rac12 bcsin A=pr=abc/(4R)) retains all original unit/domain conditions, same narrative intent.

**Q15/Q16:** All five original canonical `THPT-G10-CHIII-TRY06`, `TRY07`, `TRY08`, `TRY09`, `TRY10` IDs, prompts, collapsed answers and placement order `06,07,10,08,09` unchanged; original two HELP, two SVG and four worked examples unchanged. No Core/Practice/Written/Anchor/RD1 or official Final Submit / Mastery / Firebase edits. `CLIENT_SELF_CHECK_NO_MASTERY` unchanged.

**QA status at authoring:** old-source/new-source receipt SHA verified, original Q15 public questions unchanged, mathematics statements manually checked, 11 local reference/definition replacements only, no CSS/JS assets or hidden assessment source changed. `ACADEMIC_SELF_QA_P0=0`; `ACADEMIC_SELF_QA_P1=0` for this narrow corrective scope. **CI exact-HEAD browser/QA and owner P2 recheck remain pending**; do not mark accepted/deploy before evidence. Owner's earlier B06 95% feedback is not a P2 PASS.

**GATE:** `B06_PED_PRECISION_R02_RELEASE_QA_PENDING`.

**CANONICAL_FULL_ITEM_ID_RECEIPT:** `THPT-G10-CHIII-TRY06`, `THPT-G10-CHIII-TRY07`, `THPT-G10-CHIII-TRY08`, `THPT-G10-CHIII-TRY09`, `THPT-G10-CHIII-TRY10`. Exactly one existing Knowledge placement per ID; no content changes to question/answer or role.
