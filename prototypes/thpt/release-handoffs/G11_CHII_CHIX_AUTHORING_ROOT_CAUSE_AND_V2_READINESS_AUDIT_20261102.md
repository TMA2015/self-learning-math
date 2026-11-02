# G11 SGK ChII–IX academic/PED source readiness audit — 02/11/2026

**LANE:** AUTHORING only · **DOCUMENT_TYPE:** A1–A7/PED blocker triage and G12 preflight QA reference · **NEVER** a bulk release authorization. **GOVERNANCE:** merged source-locked Handoff V2 PR #699, 08/06/07, owner #675 whole-chapter, #691 concept-first, #700 author handoff. GitHub author branch was checked directly. Snapshot-date only; PR/head/CI can move.

## 1. Root causes traced to academic source snapshots

**A. Correctness-only PASS used to imply teachability:** ChII R01 B05/B06/B07 and ChIII R01 B08/B09 open their learner D1 with *definitions, formulas or rules*, before an explicit WHY/WHAT/HOW and a first independent attempt. Both R01 versions had independent Academic PASS, but this is insufficient evidence for PED1–6 under owner #691. **Corrective actual content:** ChII R02 `9737e7b0ba33fc875bc1d78d1104e8ebb427b6f3` (3 concepts, 9 D2 reasons, 3 SVG explanations, 3 first-tries) and ChIII R02 `0b0fe33d213350c586f04345c39806c2633c594e` (2 concepts, 10 D2 reasons, 3 SVG explanations, 2 first-tries). Both preserve all original math and original canonical items linewise; both **WAIT independent targeted NotebookLM review**, not `CONTENT_READY`.

**B. New material after PASS has different identity:** ChIV original R01 `f376c37dc4b98fe229f3151357da1d2701cab15e` independently Academic/PED/source-fidelity PASS with 22 outcomes/40 public/22 private, but subsequent optional concept-first R02 `abc89621cc2b8a00950b178b65162c0d4ea34f54` adds 5 teaching starts/20 method explanations/5 picture captions/5 first-tries. Old R01 PASS **remains valid**; new R02 only needs scoped independent PED reviewer verdict **if selected** for the future learner experience. Do not treat draft R02 as an automatic global HOLD of R01, or automatically approve it.

**C. Citation metadata can contradict despite correct mathematics:** ChII historical SBT reviewer Issue #684 B07 41–45 / final 46–49 overlaps ChIII Issue #687 B08 44–46 / B09 47–49 / final 50–52. The actual owner SBT Tập 1 printed pages were not available through connected Drive search; web secondary index is insufficient S1. Mark `SOURCE_RECEIPT_CONFLICT(CHII,CHIII)` and require **one** NotebookLM primary S1 printed-page reconciliation with exact lesson and answer-page boundaries. Do not revise any SGK/SBT sources based on invented pagination; review only affected A2 reference.

**D. Incomplete machine mapping in legacy R01:** ChII 42/42 item headings uniquely identifiable, 16 RD0 outcomes, and 42 primary item→outcome mappings on exact R02; `G11-CHII-STRUCTURAL-COMPARISON` has source-integrated D1/D2 and confidential RD1 but **no direct D3/D4 item carrying that primary outcome**. ChIII 32/32 source item→outcome, 14 RD0, `G11-CHIII-INTEGRATED` similarly lacks direct tagged public primary item. This is **not sufficient to conclude the chapter lacks teaching**. We must explicitly provide actual D1/D2/HELP/assessment evidence for integrated RD0 rather than invent questions. ChIV D4 10 original shared Written/Anchor headings do **not** name primary skill IDs; author added verified metadata-only mapping `prototypes/thpt/release-handoffs/G11_CHIV_B10_B14_D4_WRITTEN_PRIMARY_OUTCOME_V2_REGISTER_20261102.md` on PR #688. All original 10 Written stems/rubrics are unchanged; R01 PASS stays valid.

**E. Legacy review-provenance path inversion for V–IX:** Full canonical PUBLIC snapshots happen to be stored in `prototypes/thpt/review-packets/Temp_*.md` and owner NotebookLM source-fidelity receipts in `prototypes/thpt/content-drafts/`. The *new* V2 source-lock gate enforces the opposite canonical source/receipt directory convention for newly introduced V2 manifest. Existing old `ready/` manifests are expressly grandfathered by V2 until re-handovered. **DO NOT bulk copy / replace legacy sources just to make the CI field agree** and claim original upload was SHA identical; choose a governance-approved source-path exception for exact legacy Git blob, or explicitly copy+prove byte identity, log a zero-math DELTA_A move and link source custody. Never create new item_ids/duplicate content bank, and do not force full NotebookLM re-review for a true byte-identical copy.

**F. PED evidence cites phantom classroom examples:** ChV–IX independent owner NotebookLM clarification addenda corrected reviewer narratives that had attributed protected RD1 prompts or illustrative analogies as if PUBLIC teaching content, truncated selected source filenames, or mixed display-character counts with raw UTF-8 bytes. These have been **independently reconciled** by R02/R01/R00 source-fidelity targeted reports. Original mathematical sources and independent PASS stay valid on each original reviewed snapshot. Future review packets must require `EVIDENCE_PUBLIC_SOURCE_ID/PARAGRAPH` and classify whether the example is `PUBLIC_D1`, `PUBLIC_D2`, `PUBLIC_ITEM`, `PRIVATE_RD1` (metadata only) or `REVIEWER_HYPOTHETICAL`. Never silently conflate review narrative and actual bank.

**G. Assessment not release-ready ≠ academic incorrect:** A1–A7/Content ready is not A6 R1–R5 / AP1–AP5 / Final Submit / RD1 exposure. All 205 private RD1 candidates across ChI–IX are protected; no scores/Mastery official until independent authorized runtime. Release remains paused. No source authoring action can clear release code QA or turn on Mastery.

## 2. Chapter-by-chapter exact Git source ledger

| Ch | Lessons | Outcomes | Public IDs | RD1 private | Public reviewed original Git blob | Actual academic/PED disposition |
|---|---|---:|---:|---:|---|---|
| II | B05–B07 | 16 | 42 | 19 | `a0975caaf39ead93c5faef149132f5ff6a828359` | R01 Academic PASS; new R02 PED `9737e7b0ba33fc875bc1d78d1104e8ebb427b6f3` **PENDING**, SBT A2 HOLD |
| III | B08–B09 | 14 | 32 | 21 | `ef7dbfbd55c34abab8a384d4dac3284c100dbaac` | R01 Academic PASS; R02 PED `0b0fe33d213350c586f04345c39806c2633c594e` **PENDING**, SBT A2 HOLD |
| IV | B10–B14 | 22 | 40 | 22 | `f376c37dc4b98fe229f3151357da1d2701cab15e` | R01 Academic+PED PASS. Optional new R02 `abc89621cc2b8a00950b178b65162c0d4ea34f54` **PENDING** if adopted |
| V | B15–B17 | 17 | 36 | 17 | `77be75de3fd01c7aa9dcc0f1a14e5e2ca68ab7fa` | R02 Academic+PED/source-fidelity PASS, old READY; no changed source |
| VI | B18–B21 | 22 | 49 | 22 | `f37113dc2a3a002511bc6b53ec53e049537f1947` | R01 Academic+PED/source-fidelity PASS, source-equivalent punctuation DELTA_B logged |
| VII | B22–B27 | 33 | 63 | 33 | `afc8ec039213b87b4930f2d34d48c28d1fc6277f` | R01 Academic+PED canonical-alias source equivalence PASS, raw alias hashes distinct/retained |
| VIII | B28–B30 | 20 | 47 | 20 | `fde4f8be91b5884b4559fef59fde46cf826c2bc9` | R00 Academic+PED/source-fidelity PASS, reviewer PED examples corrected |
| IX | B31–B33 | 31 | 71 | 31 | `3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0` | R00 Academic+PED/source-fidelity PASS, source/physics/pagination metadata corrected |
| **II–IX** | **29 lessons** | **175** | **380** | **185** | | |

**GitHub structural inspection performed this work cycle:** 380/380 public canonical item headings across ChII–IX are unique (zero cross-chapter duplicate IDs in those sources), separate from ChI 46 original → 426 G11 public. This is a **structural ID-only** check, not a new independent correctness/PED verdict. Protected RD1 counts are from author/owner receipts, not newly extracted private files.

**Legacy source custody paths for V–IX** (do not move silently):
- ChV `review-packets/Temp_THPT_G11_CHV_B15_B17_PUBLIC_D1_D6_AUTHOR_CANDIDATE_R02_20261101.md` → `content-drafts/G11_CHV_B15_B17_R02_NOTEBOOKLM_OWNER_PASS_RECEIPT_AND_SOURCE_FIDELITY_20261101.md`.
- ChVI `review-packets/Temp_THPT_G11_CHVI_B18_B21_PUBLIC_D1_D6_REVIEW_CANDIDATE_R01_20261101.md` → `content-drafts/G11_CHVI_B18_B21_R01_NOTEBOOKLM_SOURCE_FIDELITY_PASS_ADDENDUM_20261101.md`.
- ChVII `review-packets/Temp_THPT_G11_CHVII_B22_B27_PUBLIC_D1_D6_AUTHOR_REVIEW_R01_20261101.md` → `content-drafts/G11_CHVII_B22_B27_R01_NOTEBOOKLM_CANONICAL_A3_SOURCE_FIDELITY_PASS_20261101.md`.
- ChVIII `review-packets/Temp_THPT_G11_CHVIII_B28_B30_PUBLIC_D1_D6_AUTHOR_REVIEW_R00_20261101.md` → `content-drafts/G11_CHVIII_B28_B30_R00_NOTEBOOKLM_SOURCE_FIDELITY_PASS_ADDENDUM_20261101.md`.
- ChIX `review-packets/Temp_THPT_G11_CHIX_B31_B33_PUBLIC_D1_D6_AUTHOR_REVIEW_R00_20261101.md` → `content-drafts/G11_CHIX_B31_B33_R00_NOTEBOOKLM_SOURCE_FIDELITY_PASS_ADDENDUM_20261101.md`.
Prefix the relative paths with `prototypes/thpt/`. We have **verified original reviewed Git blobs and receipt evidence documents** exist by fetch, not attempted an unauthorized source migration.

## 3. Files newly completed for remaining author authoring

- ChII new V2 `BLOCKED_BY_AUTHORING` full register and 42/42 item/outcome/role matrix: `prototypes/thpt/release-handoffs/G11-SGK-CHII-B05-B07_HANDOFF_V2_DRAFT_BLOCKED_20261102.md` on PR #683.
- ChIII new V2 `BLOCKED_BY_AUTHORING` full register 32/32 item/outcome/role matrix: `prototypes/thpt/release-handoffs/G11-SGK-CHIII-B08-B09_HANDOFF_V2_DRAFT_BLOCKED_20261102.md` on PR #685.
- ChIV metadata-only D4 10/10 Written/Anchor primary outcome map: `prototypes/thpt/release-handoffs/G11_CHIV_B10_B14_D4_WRITTEN_PRIMARY_OUTCOME_V2_REGISTER_20261102.md` on PR #688.
- Shared preflight CLI `scripts/audit-thpt-authoring-preflight.cjs` and nondeploy author CI `.github/workflows/thpt-academic-authoring-preflight.yml` added on PR #683 with codepoint/layout, ID collision, basic PED and explicit RD1 leak detection; independent reviewer confirmation still mandatory.
- Shared author contract `prototypes/thpt/THPT_AUTHORING_PED_D1_D6_AND_V2_PREFLIGHT_CONTRACT_v1_20261102.md` on PR #683.

## 4. Review packet & next authoring gate

A single original Temp Markdown **already authored** at `prototypes/thpt/review-packets/Temp_G11_CHII_CHIII_CHIV_PED_DELTA_C_R02_BATCH_REVIEW_20261102.md` on PR #683 contains exact new-source delta lines for all ChII/III/IV against original R01 and source blob locks. It requires a returned **independent NotebookLM** verdict by chapter/lesson/outcome, 9+10+20 original D2 worked examples, 3+3+5 original figure descriptions, 3+2+5 low-stakes first tries, S1 SBT page verification and P0/P1/P2+MINIMAL_DELTA. Existing ChIV R01 PASS may be used without the optional R02 until concept-first necessity is decided; ChII/III R02 cannot be certified before verdict.

**No new full-chapter R01 reviews required for unchanged items, no RD1 files uploaded.** Author will close exactly impacted Delta_C when owner supplies reviewer verdict, then create one effective V2 handoff + `ready/PACKET_ID.md` and REGISTER aligned **on each author branch**. Release owns AP/Final Submit/CI/merge/deploy and owner pause; source-only CONTENT_READY is not a publish authorization.
