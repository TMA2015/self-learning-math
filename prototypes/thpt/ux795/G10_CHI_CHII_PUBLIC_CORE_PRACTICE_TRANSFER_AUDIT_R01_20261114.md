# G10 CHI–CHII public Core/Practice — learner transfer audit · R01 · 14/11/2026

**STATUS:** `PUBLIC_BANK_DIRECTLY_OPENED / OVERLAP_DEFECTS_IDENTIFIED / ALL_SOLUTION_QA_NOT_FINISHED / NO_MASTERY_OR_READINESS_VERDICT / NO_MERGE_DEPLOY`. One `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18, particularly Q02/Q04/Q05/Q14/Q15/Q16/Q17. This is a **RELEASE read-only substantive audit**; AUTHORING Chuyên đề must not be interrupted or assigned the SGK repair work.

## 1. Exact runtime source and published parity

- G10 Chapter I public formative JS: [`docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js`](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js), full blob `bfc61f3d0b51f5b58fb663e5e8bb391918e77d4c`; **same exact blob** published at `gh-pages=469e0c6cffde64a9b6ffbe7c65ed97144eb74659` under `assets/javascripts/...`.
- G10 Chapter II public formative JS: [`docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js`](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js), full blob `c258edc212022944c0e0e4693c5efffb72754f4a`; **same exact blob** published.
- Each public bank contains **16 distinct original formative ID strings**: for each lesson `2 CORE + 6 PRACTICE`, so **32 public C/P items in total for B01–B04**. These counts are inventory, not coverage or quality PASS. Canonical ID registers: `THPT_G10_CHI_B01_B02_CANONICAL_ID_REGISTER_R01.md` blob `aa112e9b1bf30b83907c3e1462deeb3a13a5cc9d`, `THPT_G10_CHII_B03_B04_CANONICAL_ID_REGISTER_R01.md` blob `c96aa6aa5471983e37e8e678002fdb037e747119`. ID registers explicitly describe public formative, **not independent held-out Readiness**. Do not expose or equate RD1.
- **Important boundary:** shared JS includes public solutions/hints for formative exercises, **which is allowed Q16 after a learner voluntarily requests formative feedback**, but these are **not evidence of held-out assessment**. No conclusions about private/independent self-check key protection are drawn from public formative bank.

## 2. Confirmed exact or near-exact overlap with solved Knowledge examples

| Q05/PED transfer case | Published formative `item_id` and actual task | Previously displayed/solved knowledge source | Result |
|---|---|---|---|
| **G10 B01** | `THPT-G10-B01-P03` — `n` divisible by 6 ⇒ divisible by 3; assess converse | B01 **Tab1 lines 21–25** gives complete counterexample `n=3`; **Tab3 EX3 lines 177–185** again solves the *identical* question | **Exact concept/data/answer clone of worked example**. Cannot use as evidence of transfer |
| **G10 B01** | `THPT-G10-B01-P04` — `n` even iff `n²` even | B01 **Tab3 EX4 lines 187–195** solves precisely this theorem and both directions | **Exact worked-example clone** |
| **G10 B01** | `THPT-G10-B01-P05` — negate `∀x∈ℝ, x²≥0`, assess truth | B01 **Tab3 EX2 lines 167–175** gives this exact statement and negation | **Exact worked-example clone** |
| **G10 B02** | `THPT-G10-B02-C02` — `A={1,2,3,4}, B={3,4,5}`, find intersection/union | B02 **Tab3 EX1 lines 172–180** uses exact same A,B and solves union/intersection/differences | **Exact Core worked-example clone**; useful as repetition, but does not prove independent understanding |
| **G10 B02** | `THPT-G10-B02-P01` — same `A={1,2,3,4}, B={3,4,5}`, find `A\B` and `B\A` | B02 **Tab3 EX1 lines 172–180** already supplies both differences and solutions | **Exact worked-example clone** |
| **G10 B02** | `THPT-G10-B02-P05` — 40 pupils, 23 English, 25 Math, overlap 12, number in neither | B02 **Tab2 lines 153–157** AND **Tab3 EX3 lines 192–200** already calculate *the same 40/23/25/12* and outcome `4` | **Triple exposure**: Tab2 fully solved, Tab3 re-solves, public PRACTICE asks identical end result. `P1 Q05/PED` transfer-coverage defect |

**Distinct check / no indiscriminate rejection:**
- B02 Tab2 `Em vận dụng` **32 pupils, 18/15/6** at lines **159–165** is a genuinely different parameter set from the 40/23/25/12 solved figure. Its independent trial is an improvement worth retaining.
- B03 first-try `THPT-G10-CHII-TRY02` (B03 source lines **70–88**) still asks **identical three points A/B/C with the same inequality already solved in the table**. This is a self-try evidence issue; the JS formative B03 Core C02 uses a *different* point and inequality, so **do not incorrectly mark every B03 formative item as cloned**.
- B04 public PRACTICE `THPT-G10-B04-P02` uses **new** feasible system `x+y≤7,2x+y≤10` and objective `F=4x+3y`; manually checked vertices `(0,0),(5,0),(3,4),(0,7)`, values `0,20,24,21` → recorded answer **C=24 is correct**. PRACTICE `P03` tests multiple optimal points; `P05` checks why an unbounded domain may have an attained maximum but no minimum. **These are genuine reasoning variations, not clones, and must be preserved**.
- B04 Tab2 and Tab3 still duplicate the **same fully solved** O/A/B/C example and F data (see deep lesson audit), a separate teaching-design duplication regardless of the practice bank.

## 3. Coverage gap by verified *public question wording*, not ID counts

**G10 B02** (`2 CORE + 6 PRACTICE`) public stems have skills `MEMBERSHIP_SUBSET`, `UNION_INTERSECTION`, `DIFFERENCE`, `COMPLEMENT`, `INTERVALS` (twice), `VENN_MODEL`, `SET_EQUALITY`. **None directly teaches or tests the official SGK B02 number-system hierarchy** `N⊂Z⊂Q⊂R` and rational/irrational distinction. One question mentions `ℤ` in a set-builder context; that is not an assessment of number-set inclusion. This corroborates the Knowledge **B02 S1 p15 Q01/Q02 gap** across both theory and public practice. Exact canonical `OUTCOME_ID` for missing branch must be checked in the authored matrix (not invented here).

**G10 B01** public CORE only tests proposition recognition and simple negation, whereas `∀/∃`, implication and equivalence are placed in PRACTICE. This allocation is **not automatically invalid**, because role/level can differ across the journey; review whether learners have first-step Core support for each novel outcome and independent transfer items. The three exact worked-example clones above show **some** Practice coverage has low independent difficulty.

**G10 B03/B04** public stems cover identified skills, conditions and multiple problem families, with no obvious same-data clones seen among named key variants above. A complete `OUTCOME_ID×ITEM_ID×ROLE` and *all* answer/rubric checks remain open; do not claim bank-wide PASS.

## 4. Disposition and minimal correction scope (no editing now)

1. **B02 Q01/Q02:** missing number-set teaching **and independent formative coverage** → `P1 ACADEMIC_AND_TRANSFER_HOLD` in affected concepts.
2. **B01/B02 Q05:** keep already reviewed formative items immutable on old snapshot, but **do not use exact clones as sufficient independent transfer evidence**. Owner can later authorize supplemental *new* source-locked problems/placement adjustments, reviewed in affected scope. Do **not** quietly alter a canonical `item_id` stem/key/solution in place.
3. **B03 Q14:** replace self-try after fully solved table only via explicit source change and Q18 recheck; a new variation must truly test learner action, not just a different variable name.
4. **B04:** do not label all exercises poor. Verified P02/P03/P05 are distinct reasoning families; preserve those strengths. Reduce Tab2/Tab3 redundant full example only if owner approves semantic editing.
5. **Verification still missing:** correctness of **all 32** public answer keys and solutions, rendered quiz modal open/close behavior, exercise source-to-UI canonical ID parity, Written/Anchor and private Chapter Readiness/Final Submit security, learner field test. Status remains `PARTIAL_TRANSFER_AUDIT`, **not Q05/Q16 PASS**.

**Tracking:** [#795 cross-grade master](https://github.com/TMA2015/self-learning-math/issues/795) · [#861 owner G10 hold](https://github.com/TMA2015/self-learning-math/issues/861) · [Draft #862 audit evidence](https://github.com/TMA2015/self-learning-math/pull/862). **NO MERGE / NO DEPLOY**.
