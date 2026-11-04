# Self-Learning Math — working instructions for coding and content agents

**Repository:** `TMA2015/self-learning-math`. Apply this file whenever a new development session, branch or conversation works on the repository.

## Owner-approved SGK supplementary AUTHORING V2 types — 03–04/11/2026

For source-locked V2 handoffs, owner has approved separate, truthful supplemental packet types: `SGK_EXPERIENCE_SUPPLEMENT` (G12 EXP01/02, Draft #733) and `SGK_YEAR_END_REVIEW_SUPPLEMENT` (G12 public year-end review, Draft #735). Both remain within the same `SLM-THPT-QUALITY-ONE v1.1.0`, are **not** whole chapters or Topics, and must meet the same independent Academic/PED/Q18, source+receipt blob, A1–A7, one handoff/manifest/REGISTER and exact-final-HEAD QA. Require no held-out RD1, no official independent Readiness or Mastery, and no RELEASE authorization. Do not copy a different packet's READY file or falsely select `SGK_CHAPTER / FULL_LEARNING_PATH`. No automatic merge/deploy.

## ONE OFFICIAL quality standard for both authoring and release (PR #703 merged 02/11/2026)
The single OFFICIAL normative quality rubric is [`SLM-THPT-QUALITY-ONE`](prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md) v1.0.0; owner authorized governance merge after 3/3 exact-head QA PASS and PR #703 merged on 02/11/2026. Apply criteria Q01–Q18 on every new SGK/TOPIC academic source, with AUTHORING responsible for D1–D6/PED/NotebookLM source evidence and RELEASE responsible for rendered AP/R/assessment/QA of the **same** Q criteria. Do not invent a second release-side mathematics standard. Owner/latest decisions, S1, Sources 08/06/07 and five NotebookLM Permanent Sources v2.1 replace v2.0 only after owner installs the five new files (see v2.1 replacement manifest); historical v2.0 reviews remain scoped to their original source snapshots. No retroactive mass re-review or release automation restart during owner pause.

## G11 RELEASE — owner supersession 03/11/2026 (operational, NOT another standard)
Owner explicitly restarted hourly **RELEASE SGK Toán 11** with conditional merge/deploy when all Q01–Q18, AP1–AP5, R1–R5, exact-final-head CI and P1 checks pass. This supersedes the 02/11 release PAUSE **only for G11**, not AUTHORING, G12/Topic or data/Mastery changes. Required operational guide: [G11_RELEASE_OPERATIONS_20261103.md](prototypes/thpt/release-queue/G11_RELEASE_OPERATIONS_20261103.md). Use the one official quality standard unchanged.
- Academic V2 `CONTENT_READY` on AUTHORING Draft #710 is a valid immutable intake if actual source/receipt Git blob SHAs, review and Q01–Q18 match; **do not merge an authoring Draft simply to receive content** or call `RELEASE_AUTHORIZATION=NO` within a historical authoring snapshot a veto over later owner RELEASE authority. REQUIRE a separate RELEASE integration PR.
- Per Issue #662, **Q16 public-client voluntary Final Submit**, including reusing existing reviewed public canonical IDs without duplicated question bodies, is **owned by RELEASE**. Protected RD1 stays private. Only return to AUTHORING for true new/changed math/answer/rubric or mismatched source/receipt. No answers, feedback, AI or hints before Final Submit; no Mastery, independent Readiness credit or fake automatic free-text scoring.
- Process packets independently and skip chapter-specific blockers; never hold all ChII–IX because one is blocked. Include the original SGK supplement pp99–109 as a **tenth separate packet**, not Chapter X. Each hourly cycle records `PUBLISHED_P1`, `RELEASE_PROGRESS`, `BLOCKED` with owner and evidence, or `NO_CHANGE`; avoid repeated no-change comments. Auto-stop only after ChI–IX **and supplement** actual P1. Real-device P2 remains separately open.

## Binding two-lane handoff for new THPT chapter packets (owner 02/11/2026)
**Read FIRST**: [THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md](prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md). AUTHORING owns complete S1 + RD0 + D1–D6 + PED1–PED6 + independent NotebookLM academic AND pedagogical review, source-locked Git blobs, ID mapping and delta resolution. Do not call an author PR `CONTENT_READY` unless a matching canonical manifest has passed source-lock V2 and been placed in `release-queue/ready/` with REGISTER updated. RELEASE must reject unaudited author notes and own AP1–AP5 rendered QA, Final Submit, R1–R5 and P1/P2; no math changes without authoring delta review. New READY packets are structurally gated in CI by `scripts/test-thpt-handoff-gate-v2.cjs`. Source-identity CI is **not** an academic verdict. Existing historical manifests remain scoped.
**HISTORICAL PAUSE (02/11/2026):** Owner initially disabled Math THPT release automation; **superseded for G11 RELEASE ONLY by explicit 03/11/2026 owner authorization above**. Other scopes remain paused. A chat/agent must still not assume another conversation received a message; coordinate through GitHub and actual owner-approved automation. This chat/agent in RELEASE role must not assume another ChatGPT conversation received a message; coordinate only via canonical GitHub handoffs/issues and an explicit owner-transferred prompt.

## Start every THPT work session
1. Verify live `main`, open PR heads, commit SHA, CI and deploy state. Do not accept old chat/checkpoint status as live status.
2. Read `prototypes/thpt/release-queue/README.md` and `REGISTER.md` and the relevant inventory/ready packet manifest.
3. Respect user Project source **08** for dual learning paths and shared canonical resources, **06** for NotebookLM Temp_ files + prompt, **07** for review delta policy, SGK/SBT KNTT S1 for academic scope.
4. Read latest relevant checkpoint, then choose **authoring lane** (A1–A7) or **release lane** (R1–R5); do not combine their permission boundaries.

## Non-negotiable workflow
- Academic authoring/review: source → independent NotebookLM verdict (per actual snapshot) → correction/delta → checklist A1–A7 → move *manifest only* to `ready/` when ALL pass. `CONTENT_READY` is not release approval.
- Release: only receive checked `ready/` packets, integrate on current code, test exact content/commit, student-first UI, held-out Readiness safety and THCS regression. All R1–R5 plus explicit owner approval before merge/deploy; record P1/P2 after. No production account/backend changes.
- SGK chapter and TOPIC vertical paths must each cover knowledge/practice/independent readiness; do not infer one path's Academic PASS or Readiness from another. One canonical item_id, one shared Written/Anchor library; never duplicate.
- No hint, keys, answer leak or correct/incorrect before Final Submit in actual Readiness; demo cannot award points or Mastery. Never expose held-out private questions/keys in GitHub Pages.
- No internal NotebookLM/QA/PR/batch metadata in student UI. Preserve Golden UI THCS/THPT and existing deep links, Gemini/Firebase/progress keys.
- File `scripts/test-thpt-release-queue.cjs` enforces manifest/register consistency but does **not** certify mathematical correctness itself.

## Where to find the next task
- `prototypes/thpt/release-queue/REGISTER.md`: one list of packets and true gate status.
- `prototypes/thpt/release-queue/inventory/`: still under review/integration or historically scoped release.
- `prototypes/thpt/release-queue/ready/`: source-scoped, **A1–A7 complete**, ready for release lane QA.
- `docs/collaboration/current-handoff.md`: current work and blockers. Distinguish approved content from merged/deployed state.

Never claim a new Academic PASS, merged PR, QA PASS or deploy without checking independent evidence. Never merge or deploy unless the owner clearly permits the exact scope.
