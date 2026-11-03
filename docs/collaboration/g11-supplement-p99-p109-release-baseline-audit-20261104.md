# G11 SGK supplement pp99–109 — RELEASE baseline audit (2026-11-04)

PACKET_ID: `G11-SGK-SUPPLEMENT-P99-P109-R00`  
STATUS: `BLOCKED_BY_RELEASE_R1_AP1_AP5` (website integration and final-head QA outstanding)  
SCOPE: E01/E02 pp99–104 and annual review pp105–109; separate tenth SGK packet, **not Chapter X or Topic**.

## Live source parity readback

On RELEASE branch `release/g11-sgk-supplement-p99-p109-v2-20261103`, direct GitHub file reads verify:

- Canonical source `prototypes/thpt/content-drafts/G11_SGK_SUPPLEMENT_P99_P109_CANONICAL_R00_SOURCE_LOCK.md` Git blob **`b848436621c17c89919e3d3f93519d12612fe039`**.
- Independent Academic/PED composite receipt `prototypes/thpt/review-packets/G11_SGK_SUPPLEMENT_P99_P109_R00_INDEPENDENT_ACADEMIC_PED_PASS_SOURCE_RECEIPT_20261102.md` Git blob **`3183783afc69d263328a55f937ba22e6deb1f34d`**. Receipt explicitly records owner-supplied independent NotebookLM Academic and PED PASS on the locked snapshot, verbatim review blob `78e020288e009d38a836cb909d37c1b89728fc8c`; the composite is a wrapper, **not a new independent review**.
- Canonical ready manifest `prototypes/thpt/release-queue/ready/G11-SGK-SUPPLEMENT-P99-P109-R00.md` blob `29fe5ae2b13cd86d21ec826ab51fbd532921a306` and V2 handoff `prototypes/thpt/release-handoffs/G11-SGK-SUPPLEMENT-P99-P109-R00_HANDOFF_V2_20261102.md` blob `60657bcdb44d4851b99d28ab140d3af004a03f76` point to the same source and receipt.
- Scope in locked source/receipt: 22 outcomes, 68 PUBLIC canonical IDs (52 formative + 16 shared Written/Anchor), 28 D2, 8 source-locked SVG, 23 D6; original SGK/SBT S1 checksums are recorded in the handoff. **These counts are source claims, not website QA PASS.**

## Main compatibility — must resolve before website integration

GitHub compare `release/g11-sgk-supplement-p99-p109-v2-20261103...main` reports `diverged` with merge base `04c144a39c75b63d7e91cc8e9e0f47477f428337`; RELEASE intake HEAD before this audit was `c598ee9b5067e1ab3ed42671f77499bc92641649`. Current main includes AP2 Core/Practice MathJax renderer repair at **`c13ac05bdb6fa39608dc6e37103d5320fb9cb0f3`**, affecting `docs/assets/javascripts/thpt-r4-preview.js`, QA scripts and workflow gates. **Do not overwrite or roll back this renderer.** Reconcile current main into this RELEASE branch before integration, then rerun CI on the new final HEAD.

## Unclosed RELEASE gates

- R1 / AP1–AP5: E01/E02 and annual review website routes, concept-first flow, canonical JS bank, shared Written/Anchor, eight SVG, D6, responsive browser readback and navigation not yet implemented or independently verified.
- Q16 / R4: voluntary PUBLIC canonical Practice-only Final Submit, no pre-submit answer/hint/AI/correctness, no private RD1, no Mastery, no official independent Readiness, no auto-grading free text; browser tests outstanding.
- R2 / R3 / R5: four required CI workflows on exact final HEAD, Golden THCS/G10/G11 regression, owner conditional authorization and guarded merge pending. P1 merge/deploy/gh-pages parity **NOT CLAIMED**; P2 real Safari **OPEN**.

This audit is a RELEASE-only evidence delta. It changes no academic source, reviewer receipt, canonical IDs, answers, rubrics, Mastery, Firebase, or published ChI–IX content. It does **not** mark the draft Ready or authorize merge. Next action: merge compatible current main into this existing RELEASE branch (no duplicate PR), implement the supplement, run full AP/R/browser and exact-final-head CI.