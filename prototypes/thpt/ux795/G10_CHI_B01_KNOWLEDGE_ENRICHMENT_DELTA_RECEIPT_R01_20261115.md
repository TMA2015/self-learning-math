# G10 B01 — Knowledge enrichment delta receipt R01 · 15/11/2026

**RECEIPT_TYPE:** `ENRICHMENT_DELTA_RECEIPT` · **STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.1.0` (effective on `main` at source baseline; governance #867 v3.1.1 still Draft, not effective)  
**SCOPE:** `SGK_CHAPTER / G10 / CHI / B01 / Knowledge-only`; no SGK Core/Practice/Final Submit bank alteration.  
**BASELINE_MAIN_COMMIT:** `b103cd91cd32a2ff3accd1ae14c24870330ef9a2`  
**BASELINE_LESSON_GIT_BLOB:** `fb4bd72f6101523e30e30cc970d74c23b76228a8`  
**CANDIDATE_LESSON_GIT_BLOB:** `0b37ec0d4b1394de0f4f396e7727084870250177`  
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-i/bai-1.md`  
**HISTORIC_ACADEMIC_BASELINE:** `prototypes/thpt/release-queue/ready/G10-SGK-CHI.md` references exact initial reviewed R01 `THPT_G10_CHI_B01_B02_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md` blob `fece80dcb4b0e17d369e2ecbe12e8d13b672281a`; original reviewed snapshot blob `95a554e31a613b8e215679fe6790738473d598df`. This is historical clearance only, NOT new independent reviewer PASS for this candidate.

## S1 source audit

**Source S1:** SGK Toán 10 Kết nối tri thức, Tập một, **Bài 1 Mệnh đề, printed pages 5–11**, direct PDF text at `https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf`. PDF contents explicitly say Bài 1 starts printed page 5 and Bài 2 page 12; printed section 1 page 6, section 2 page 7, sections 3 page 8–9, section 4 page 9, section 5 page 10 and exercises page 11. PDF screenshot service could not render page at this checkpoint, so **visual page-index audit remains limited**; readable PDF text + actual printed-page labels and matching independent source summaries were checked, not a claim of separate verified PDF screenshot. SBT not re-opened for this Knowledge-only delta. No calculator instructions appear in this SGK B01 scope, so no invented calculator module.

**S1 section parity:** (1) mệnh đề/mệnh đề chứa biến → Knowledge **2.1**; (2) phủ định → **2.2**; (3) kéo theo/mệnh đề đảo → **2.3**; (4) tương đương → **2.4**; (5) `∀`, `∃` → **2.5**. No SGK concept dropped or mislabeled as an optional extension.

## Delta evidence by affected outcome

| DELTA_ID | OUTCOME / Qxx | Change class and source evidence | MATH_VERIFICATION | PED_VERIFICATION |
|---|---|---|---|---|
| B01-D01 | Proposition / variables · Q01/Q03/Q09–Q11 | `DELTA_A_UI+B_SOURCE_EQUIVALENT`: Tab 1 opening gets 1.1 and 1.4 numbered meaningfully; original worked concept preserved | “14 chia hết cho 7” true; an unanswered question is not a proposition; unspecified `n+2=7` has no fixed truth value before substitution | Narrative precedes formal Tab 2; no technical PED labels shown |
| B01-D02 | Conditional, converse · Q03/Q04/Q07/Q12/Q13 | `DELTA_C_ACADEMIC_MATERIAL`: replace exact Tab1 `6→3` reused example with square→rectangle (3×2 rectangle counterexample to converse); retain figure and original reasoning in Tab2 | All squares are rectangles, non-square 3 cm × 2 cm rectangle disproves converse; existing divisibility figure `6k=3(2k)`, counterexample 3 is correct | Tab1 remains intuitive; Tab2 figure/caption adjacent to relevant rule; new 2.3 conclusion states necessary/sufficient conditions |
| B01-D03 | Quantifiers and negation · Q01/Q03/Q09–Q14 | `DELTA_C_ACADEMIC_MATERIAL`: add natural 1.3 discovery of “mọi” vs “tồn tại”, and negation as counterexample, without making 6 PED headings | `∀n∈N, n>0` false at `n=0`; `∃n∈N, n>0` true at `n=1`; `¬∀ = ∃¬` and `¬∃ = ∀¬`, domain unchanged | Covers missing first-tab concept identified by audit #862/B01-F01; formal notation taught at 2.5 rather than unexplained in opening |
| B01-D04 | SGK original five-part hierarchy · Q01/Q17 | `DELTA_B_SOURCE_EQUIVALENT`: split former combined 2.3 into independent 2.3 conditional/converse and 2.4 equivalence; old 2.4 quantifiers becomes 2.5; move existing Q14 first-try 03 into corresponding 2.3 | Original five source concepts retained; existing first-try stems/answers/IDs unchanged | Every real S1 main section has a discoverable heading, self-attempt comes immediately after its associated knowledge |
| B01-D05 | Worked example for conditional · Q04/Q13/Q14 | `DELTA_C_ACADEMIC_MATERIAL`: replace former exact repeated 6/3 worked example with `x>3 ⇒ x>1`, converse tested with `x=2`; number examples 3.1–3.4 | `x>3 ⇒ x>1` for all `x∈R` true; converse false at `x=2`; proof independent of Tab2 divisibility example | Transfer across contexts rather than same stem/answer in Tab2 and Tab3 |
| B01-D06 | Learner navigation/HELP/footnote · Q08/Q17 | `DELTA_A_UI`: number two actual HELP units 4.1/4.2; collapse duplicate footnote to one accurate printed-page note | No answer/rubric/scoring altered | Retain both original D6 remediation links to existing canonical Practice IDs |

**Q15/Q16 invariants:** Four Golden Knowledge tabs remain unchanged; five first-try IDs remain unchanged `THPT-G10-CHI-TRY01…TRY05`, public self-opened explanations only; two original HELP cards/link targets unchanged; the original SVG asset path/alt/caption unchanged. All SGK public Core/Practice/Written/Anchor/Private RD1, `item_id`, scoring/Final Submit/Mastery/Firebase/Gemini/THCS and Topic paths untouched. No early key/hint/feedback for protected Final Submit added.

**AUTHOR_SELF_VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` (not new NotebookLM or independent reviewer).  
**MATH_VERIFICATION:** all changed propositions/counterexamples independently re-evaluated in table above; S1 five-section direct-text crosswalk; no new calculator obligation.  
**PED_VERIFICATION:** quantifier introduction added before formal notation; original hidden self-attempt and D6 retained; duplicates in Tab1/Tab3 reduced; original lesson structure remains legible.  
**P0:** 0 *identified in changed source after self-check* · **P1:** 0 *identified in changed source after self-check*. These are self-QA claims on the stated scope, not approval of website/browser or all lesson banks.
**UNTESTED / RELEASE GATES:** dynamic browser/MathJax/figure sizing/390–820–1440, runtime Final Submit and current head CI must pass independently; P1 deployed SHA, real-device P2 owner inspection after publication. Any new defect is logged in [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795) before next lesson.

**OWNER_SCOPE:** Owner expressly approved **one-lesson-at-a-time update and production release after QA** on 15/11/2026; the next lesson is not automatically authorized before owner review of this live B01. **NO CLAIM OF PUBLISHED UNTIL EXACT PRODUCTION IS VERIFIED.**
