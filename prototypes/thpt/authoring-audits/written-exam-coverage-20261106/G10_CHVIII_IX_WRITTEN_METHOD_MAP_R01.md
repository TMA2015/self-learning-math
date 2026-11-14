# G10 ChVIII–IX · D4 Written method/rubric inventory vs Hanoi semester excerpt (AUTHORING read-only)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
SCOPE: G10_CHVIII_B23_25_AND_CHIX_B26_27
CANONICAL_D4_ITEMS_OBSERVED: 5
ORIGINAL_D4_SOURCE_EDIT: NO
REVIEW_REOPEN: NO
EXAM_PDF_VERIFIED: NO
COVERAGE_GAP_VERDICT: NONE
TOPIC_PLACEMENT_STATUS: CANDIDATE_ONLY

**Purpose:** record **what existing approved exercises actually ask a learner to do**, which method decisions and rubric checkpoints they already expose, and which recent ordinary Hanoi exam method excerpts resemble them. No reassessment of mathematical validity of any existing item/answer/rubric; historical Academic/PED PASS remains preserved. This is **method coverage inventory**, not a new Q19/review standard.

## Canonical five D4 cards and observed method content

| SGK lesson | Canonical ID | Existing problem / method family (described, not reproduced) | Existing rubric checks (observed, not rescored) | Candidate normal-THPT exam link |
|---|---|---|---|---|
| G10 B23 | `THPT-G10-CHVIII-W23-01` | Independent multistage options (box, cake, card, ribbon); **rule of product**, new option stage | Identify required independent choice steps, compute and explain chained multiplication | No specific recent school excerpt in current verified discovery set; `EXAM_LINK_PENDING` |
| G10 B24 | `THPT-G10-CHVIII-W24-ANCHOR-01` | Fixed numbers chosen from disjoint gender groups **without order**, then label one team leader; combinations plus role assignment | Correct male group, female group, product, leader role; no distinct score for a fixed last **position in an ordered relay** | `HN-VD-2026-HK2-G10-WEB-EX01` structurally similar; `HN-PHT-2026-HK2-G10-WEB-EX02` only **partially same** method |
| G10 B25 | `THPT-G10-CHVIII-W25-01` | Newton expansion to degree four, coefficient extraction, **sum of coefficients** by substituting `x=1` | Binomial coefficients, sign bookkeeping, requested coefficient, total coefficient sum/consistency | No specific current Hanoi exam excerpt established yet; `EXAM_LINK_PENDING` |
| G10 B26 | `THPT-G10-CHIX-W26-01` | Cartesian coin × die sample space; list event, determine probability, complement event using count or `1−P(A)` | Correct sample space and count; explicit event; complement interpretation and arithmetic; optional table representation | `HN-PHT-2026-HK2-G10-WEB-EX01` shares equally likely **two-stage counting** but tosses die twice and uses a sum condition; **not an identical event** |
| G10 B27 | `THPT-G10-CHIX-W27-ANCHOR-01` | Distinct cards drawn simultaneously, choose unordered pairs; split disjoint same-color cases; complement for at-least-one case; **justify combinations over permutations** | Sample-space combinations, partition of favorable events, complementary event, explicit choice of counting method | No direct identical recent Hanoi exam excerpt found in this small discovery set; only `GENERAL_COUNTING_PROBABILITY_FAMILY` |

## Existing canonical source evidence

- G10 ChVIII Written library: `docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md`, immutable reviewed blob `e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e` on `main`, 3 actual D4 cards. V2 source-locked author handoff: [PR #765](https://github.com/TMA2015/self-learning-math/pull/765) `G10-SGK-CHVIII-FULL-R02_HANDOFF_V2_20261105.md`.
- G10 ChIX Written library: `docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md`, reviewed blob `fe0c6486eef27392d116c076d848c372c95ec881`, 2 actual D4 cards. V2 author handoff [PR #768](https://github.com/TMA2015/self-learning-math/pull/768), same canonical IDs.
- School mirror excerpt evidence and full URL: [Exam excerpt candidate mapping R01](EXAM_EXCERPT_CANDIDATE_MAPPING_R01.md); current **PDFs/diagrams and official question references have NOT been verified**.

## Preliminary interpretation (not a verdict)

- The existing D4 Written set already represents more than direct formula substitution: `W24` combines constrained combinations + leader selection; `W26` requires full event representation + a complement; `W27` explicitly asks **why combinations are the valid method**. Preserve all five exercises, including W23 and W25 when no school excerpt is yet linked.
- The recent exam excerpt concerning **ordered relay with a fixed last runner** is a **different constraint pattern** from W24's unordered group + captain role. This is **only an exam-type candidate to check across G10 B24 D3 and other school exams**, not evidence of a missing problem in the whole curriculum.
- The exam excerpt concerning **two die tosses summing to a target** is a different random experiment from W26's coin+die event. Current written exercises cover the underlying count/event/complement tools; **whether exact subtype transfer is adequately practiced remains untested**, not a `GAP`.
- Mathematical complexity is not a single permanent property of an item: distinguish required steps, representation changes, boundary conditions and method-choice explanation. Exam frequency/prevalence cannot be inferred from one snippet or an unverified PDF.

## Next scoped checks

1. Read actual PDFs for the Việt Đức and Phạm Hồng Thái 2025–2026 final-exam papers, confirm question numbers/graphics, then compare D3 B24 and B26–27 as well as D4 to avoid false subtype gaps.
2. Crosscheck **another ordinary Hanoi THPT** and another academic year for alleged underpracticed variants; use verified full paper, not selective example snippets from mirror websites.
3. Add only evidence-backed `problem_type_id / method_tag / complexity` metadata for the frozen items; propose no new question until owner sees a concrete `COVERAGE_GAP` and approves targeted Delta C.
4. Prepare Topic `placement` candidates only once actual topic IDs/slugs from source inventory are matched; one canonical source, no standalone topic Written copy, no Topic PASS yet.
