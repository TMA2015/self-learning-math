# G11 KNTT Chương VI B18–B21 — Author checkpoint, QA/PED gates and NotebookLM review preparation R00

**PACKET_ID:** `THPT-G11-CHVI-B18-B21-WHOLE-CHAPTER-AUTHORING-R00-20261101`  
**DRAFT PR:** #692 · branch `content/thpt-g11-chvi-b18-b21-whole-chapter-concept-first-20261101` · **STATUS:** `AUTHOR_DRAFT_R00_NOT_NOTEBOOKLM_REVIEWED` · no A6 handoff, no release or scores.

## 1. Public and private R00 canonical inventories

| Resource | Actual location | Count |
|---|---|---:|
| S1 scope and RD0 outcome matrix | `G11_CHVI_B18_B21_S1_RD0_AUTHORING_R00_20261101.md` | 22 outcomes |
| D1 concept-first knowledge + D2 explained solutions | `G11_CHVI_B18_B21_D1_D2_CONCEPT_FIRST_R00_20261101.md` | B18–B21 / 17 worked examples |
| D3 unique public formative item_id | `G11_CHVI_B18_B21_D3_PUBLIC_CORE_PRACTICE_R00_20261101.md` | 39 Core/Practice/Application |
| D4 shared Written, Anchor only as label | `G11_CHVI_B18_B21_D4_WRITTEN_D6_HELP_R00_20261101.md` | 8 Written, 4 Anchor tags, rubric /4 |
| D5 SVG concept figures | `svg/FIG-G11-CHVI-B18-01_R00.svg` .. `B21-01_R00.svg` | 4 original SVG |
| D6 five-step misconception repair | same D4/D6 file | 8 HELP_ID |
| **PRIVATE** RD1 held-out single canonical item per outcome | ChatGPT Library `/Math App/THPT_Academic_Review_Archive/Temp_THPT_G11_CHVI_B18_B21_PRIVATE_RD0_RD1_AUTHOR_CANDIDATE_R00_20261101.md` | 22 independent author candidates, /4 rubrics |
| PUBLIC consolidated *candidate only* | `prototypes/thpt/review-packets/Temp_THPT_G11_CHVI_B18_B21_PUBLIC_D1_D6_AUTHOR_CANDIDATE_R00_20261101.md` | 22 outcomes, 17 D2, 47 public items, 4 SVG, 8 HELP |

**PRIVATE source original:** `18,369` UTF-8 bytes · SHA256 `5d33a8a0f55786e858d88c5a5536a9a8df1113bbb225407594c67d07c3ad8304` (local private origin), **stored outside GitHub** in Library. No RD1 stem/solution/rubric may be included in public compiled packet.

**Total:** **47 public items** (39 D3 + 8 Written), plus **22 private held-out** = 69 canonical candidate items (not 69 pre-approved review items).

## 2. Academic and structural QA performed (AUTHOR, not NotebookLM)

- RD0 **22/22 unique**, B18 5 + B19 5 + B20 5 + B21 6 + chapter integrated 1. D3 + D4 skill metadata maps all 22 outcomes (initial missing public B18 POWER_REAL / integrated outcomes repaired with two student-explanation items).
- D3 **39/39 unique**, D4 Written **8/8** (4 Anchor tags, eight 4-point rubrics), D6 **8/8** five-step cards and all 8 return links point to valid public D3 canonical IDs; D1 cites all four SVG by correct repository path.
- PRIVATE R00 **22/22 unique item IDs**, 22 rubrics of exactly four 1-point criteria; no protected content committed to GitHub.
- **Anti-exposure text screen:** compared 22 private prompts with 47 public formative/Written prompts; **0 exact normalized stem matches**. Maximum five-character normalized n-gram Jaccard **0.217** for nearest pair. **This does not certify structural independence**; NotebookLM must compare method, scaffold, SBT exposure, not just words.
- **Symbolic/arithmetical representative QA:** 22/22 RD1 outcome-level checks passed (sympy / direct arithmetic after correcting two Python **representation-only** comparison artifacts; no mathematical stem edited). Spot checks are **not** exhaustive verification of every rubric, diagram or math condition.
- **Figure QA:** 4/4 SVG markup has XML root/title/desc, and figure is linked from D1 with a paragraph teaching students how to read the figure. Actual rendered desktop/mobile visual QA still PENDING; review should inspect exact plotted coordinates, not merely XML syntax.

## 3. SOURCE_RECEIPT required: original SGK/SBT Tập 2

Public index and SBT scan table of contents indicate SGK: B18 pp4–9, B19 pp10–15, B20 pp16–19, B21 pp20–24, end pp25–26. SBT Tập 2 scan table of contents: B18 p4–7, B19 p8–10, B20 p11–15, B21 p16–19, end p20–23. These are **PROVISIONAL indexed printed page ranges**. Owner-provided **original S1** SGK and SBT PDFs and their page labels/hashes are not on local authoring evidence; NotebookLM must verify original 5 Permanent THPT v2.0 sources and actual S1 PDF. **Do not assign S1 PASS from web index.** Public PDF screenshot retrieval failed; a full visual scan of S1 was NOT done by author.

## 4. Pedagogical reviewer-specific audit: capability to self-learn

Reviewer must inspect per B18/B19/B20/B21 and **each of 22 outcomes**, not just formula correctness.

| Gate | Student-facing evidence to verify | Severity concern |
|---|---|---|
| PED1 — WHY | a^(√2) exists to generalize exponents; logarithm exists to answer the inverse *which exponent?*; functions for varying inputs; equations for time/threshold | Starting from rules without understanding purpose |
| PED2 — PREREQUISITES | power/root/real/domain/inequality/ChV limits recalled as needed; first-use “cơ số”, “đối số”, “tiệm cận”, “đơn ánh”, “hàm ngược” explained | New jargon unexplained |
| PED3 — WHAT | clear difference negative exponent vs negative value, log is an exponent not quotient, x in base vs x in exponent | Memorized symbol without meaning |
| PED4 — VISUAL | SVG B18 sequence values, B19 reverse arrow, B20 two inverse curves/reflect y=x, B21 rising vs falling bases with explanatory readout | Figure decorative or inaccurate |
| PED5 — METHOD | why split powers, why log product requires two positive factors, why base <1 flips inequality, and strict threshold with integer time | Steps are unexplained or mathematically overgeneralized |
| PED6 — SELF-TRY | self-check before Core, public D3 with reasoned solutions, Written with rubrics, D6 for common misconceptions, protected RD1 without hints | No independent initial attempt or accidental readiness leakage |

**Mandatory separate reviewer outputs:** `ACADEMIC_CHAPTER_VI=PASS/FIX/BLOCK` AND `PEDAGOGICAL_SELF_LEARNING_READY=PASS/FIX/BLOCK`; `SOURCE_RECEIPT`, `OUTCOME_MATRIX_22`, `ITEM_VERDICT_47_PUBLIC_AND_22_PRIVATE`, `SVG_VERDICT_4`, `HELP_VERDICT_8`, anti-clone `EXPOSURE_STRUCTURAL_VERDICT`, P0/P1/P2, `MINIMAL_DELTA`. Academic PASS does not automatically imply PED PASS. No Owner release approval/Mastery activation implied.

## 5. Still HOLD before NotebookLM handoff

- Independent full QA of all math statements, 69 canonical items, condition/rubric and structural anti-clone vs owner SGK/SBT original; rendered SVG desktop/mobile QA; S1 original evidence/printed pagination confirmation.
- **Do not send NotebookLM yet** before author QA and source lock; whole chapter one batch **exactly TWO real Temp Markdown files** (public compiled and private held-out) with separate verified download links and 3–6 sentence prompt. No JSON.
- Until independent NotebookLM math AND PED PASS and delta resolution, `A1–A7=NOT_PASSED`, `CONTENT_READY=NO`; not transferred to publishing lane and no release R1–R5/AP1–AP5/P1/P2. No merge/deploy without owner, no browser progress/Firebase/Gemini/THCS changes.

## 6. Next direct actions

Complete source-root SGK/SBT S1 receipt, full formula/rubric and SVG rendering QA. If QA finds clone, replace **within the existing private canonical item_id**, bump revision, recalc SHA, preserve old with superseded tag. Then compile source-lock and release an actual TWO-FILE review pack with PED-first prompt for **ONE whole-chapter** NotebookLM review.
