# G11 SGK ChI B01–B04 — PED/AP release-scope evidence audit · 2026-11-02

**Packet:** `G11-SGK-CHI-B01-B04-R01` · **PR:** #697 · **STATE:** HOLD / NOT_RELEASE_READY.
**Reviewed public source:** Git blob `599d12ac7c2252001f881833c39978f94112cee4` from author PR #681; owner-reported whole-chapter Academic PASS receipt [Issue #682](https://github.com/TMA2015/self-learning-math/issues/682). No change to this blob or to any original academic item, answer, SVG, Written rubric or RD1 archive.

## Actual release-scope audit (not a new NotebookLM verdict)

| Gate | Status | Evidence and action |
|---|---|---|
| PED1 — Why concept exists | OPEN | B03 `bai-3.md` opens section 1 directly with seven sin/cos/tan/cot definitions/properties; B04 opens with equation rules. No prior motivating problem. Authoring must supply and independently review a concept-first entry for B03/B04 before academic source-lock can be promoted. |
| PED2 — Prior vocabulary | OPEN | No explicit pre-knowledge bridge from B01/B02 unit-circle/identities to B03 graphs or B04 solution families. Need learner-facing prerequisite check and explanation, not just a nav link. |
| PED3 — Essence before formula | OPEN | B03 starts `y=sin x` and periodicity; B04 starts general solution rules. Need explain *why* function-as-rotation and solving all repeated angles before procedural formulae. |
| PED4 — Teaching figure | PARTIAL / NOT PASS | Four B03 source-locked SVGs are present, but current captions only say “Hình 1/2/3/4 ... đọc cùng mô tả”; they do not explicitly guide what each curve/axis/discontinuity demonstrates. New academic figure interpretation requires targeted PED review. |
| PED5 — Reasoned examples | PARTIAL / NOT PASS | B03 has five, B04 six worked examples, including conditions/periods/extraneous roots. Reviewer must confirm reasoning at each prerequisite transition; item count alone is not PED PASS. |
| PED6 — Try before Core | OPEN | Both B03/B04 move from examples/figures to D6 and navigation without an explicit low-stakes `Tự thử` before Core. Add source-reviewed first-try tasks and a return path, not another canonical graded item. |
| AP1 — Idea hierarchy | OPEN | B03/B04 present 7/8 dense numbered knowledge propositions in one section. Require independent hierarchy check on learner page, not only heading presence. |
| AP2 — Formula visibility | OPEN | Several displayed mathematical relationships are literal inline code rather than MathJax; inspect 390/820/1440 rendered page before approval. |
| AP3 — Figure readability | OPEN | SVG existence/byte lock verified; captions and interpretation still require learner-facing verification. |
| AP4 — Self-study clarity | PARTIAL / NOT PASS | B03/B04 D6 `<summary>` now uses learner-facing Vietnamese labels (UI-only; no math/item/source changes), and browser smoke checks this. Full self-learning clarity and PED6 first-try still need independent learner/reviewer evidence. |
| AP5 — Responsive visual | PARTIAL / NOT PASS | PR #697 THPT browser smoke on 390/820/1440 has CI evidence; no real iPhone/iPad Safari P2 claim. Require final-head AP screenshot/readability acceptance. |

**Source custody:** SGK/SBT printed-page receipt for B03/B04 verified in Issue #682 (SBT pp11–18 / pp19–24 / end pp25–30). Current integration 42 Core/Practice + 4 Written/Anchor = 46 public IDs, six total SVG and eight D6. The private 20 RD1 original remains outside GitHub (author-recorded SHA256 `b34b5f232b41e03eaddd1c3566ce2f73881ec09f8b3449432814b763d754f107`); no original protected question stem/key is in this PR.

**Final Submit gate:** `docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md` remains **CHƯA KÍCH HOẠT**. Issue #662 permits a *separate*, clearly labelled client self-check after Final Submit with no Mastery, but it does not automatically authorize publishing the private RD1 source or equating self-check with independent `SGK_CHAPTER_READINESS`. The technical QA-only engine already exists on Draft PR #663; do not clone its logic or call this chapter complete before an approved integration and QA.

**Delta / next action:** This audit is `DELTA_A_METADATA_ONLY`. Any new motivating explanation, concept derivation, new self-try mathematical question, altered answer or coverage is `DELTA_C_TARGETED_PED_ACADEMIC_REVIEW_REQUIRED` for the affected B03/B04 sections. Frozen B01/B02 learner material remains unchanged under Issue #675; retrospective review deferred under Issue #691. Keep #697 Draft; no merge/deploy, no Skill Mastery, no changes to THCS, Firebase/Gemini, browser keys or student history.
