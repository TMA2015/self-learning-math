# Self-Learning Math — working instructions for coding and content agents

**Repository:** `TMA2015/self-learning-math`. Apply this file whenever a new development session, branch or conversation works on the repository.

## One quality standard for BOTH authoring and release (pending owner governance acceptance)
The proposed single normative quality rubric is [`SLM-THPT-QUALITY-ONE`](prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md) (v1.0 draft; **NOT YET IN FORCE** until owner approves and governance PR is integrated). Once adopted, apply criteria Q01–Q18 on every new SGK/TOPIC academic source, with AUTHORING responsible for D1–D6/PED/NotebookLM source evidence and RELEASE responsible for rendered AP/R/assessment/QA of the **same** Q criteria. Do not invent a second release-side mathematics standard. Owner/latest decisions, S1, Sources 08/06/07 and five NotebookLM Permanent Sources v2.0 retain their stated authority. No retroactive mass re-review or release automation restart during owner pause.

## Binding two-lane handoff for new THPT chapter packets (owner 02/11/2026)
**Read FIRST**: [THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md](prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md). AUTHORING owns complete S1 + RD0 + D1–D6 + PED1–PED6 + independent NotebookLM academic AND pedagogical review, source-locked Git blobs, ID mapping and delta resolution. Do not call an author PR `CONTENT_READY` unless a matching canonical manifest has passed source-lock V2 and been placed in `release-queue/ready/` with REGISTER updated. RELEASE must reject unaudited author notes and own AP1–AP5 rendered QA, Final Submit, R1–R5 and P1/P2; no math changes without authoring delta review. New READY packets are structurally gated in CI by `scripts/test-thpt-handoff-gate-v2.cjs`. Source-identity CI is **not** an academic verdict. Existing historical manifests remain scoped.
**PAUSE:** Owner 02/11/2026 disabled Math THPT hourly release automation. No autonomous merge/deploy/restart until owner explicitly rescinds pause. This chat/agent in RELEASE role must not assume another ChatGPT conversation received a message; coordinate only via canonical GitHub handoffs/issues and an explicit owner-transferred prompt.

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
