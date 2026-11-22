# G12 SGK KNTT Tập Hai · Chương V B14–B17 · AUTHORING Q18 scoped receipt · 22/11/2026

> **LATEST DELTA CHECKPOINT — 22/11/2026, B17-O06 Q15 AUTHORING:** This document has an immutable preceding R02 baseline (detailed sections below) and the current source-locked addendum appended at the end. **CURRENT authoritative candidate** B17 learner blob `ce6a4ff6458ba1f2d929134935e494214e3b32d5`, 100-item canonical bank blob `622308c8f7293d576e8690db4741ddfe7ad882c8`; old B17 `d486451936944e8653ed566543be14b7264fade7` and bank `bb1a65808a899301475165944380aa3bfa51c26b` remain historical snapshot only. B17-O06 geography/short-great-circle mandatory outcome now has four canonical roles and a same-outcome D6. **NOT CONTENT_READY, NOT RELEASE/INTEGRATION SAFE:** unmodified JS d4fa6a68cebf072aa963141a5d8b78fe48c0cceb still requires 96 items, 24 help, 24 END placements and labels 23 mandatory; new bank is 100/25/25, so runtime is deliberately fail-closed pending RELEASE authorization and exact-head QA. No Mastery, Firebase, RD1 or Final Submit changes.

MASTER_TASK: #987 only
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 · 488afe2908e0b471320e1d55f775391578d88bba
BRANCH: authoring/sgk-g12-chv-b14-b17-r02-20261122
BASE: c7083ad28d50414c3f4a93f5b33b84c1e9439b9e
DELTA_CLASS: C knowledge, figures, B15-W05 solution/rubric and affected D6; other HELP label changes.
Q18_MODE: AUTHOR_SELF_VERIFIED scoped source QA
STATUS: AUTHORING_SOURCE_CANDIDATE_READY; NOT CONTENT_READY
RELEASE_AUTHORIZATION: NO

## Exact source locks
| Component | Old blob | Candidate blob |
|---|---|---|
| docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md | 265381a3bcef201aefff38185753a35f706237c1 | 2a48f2e0e15d0b6ea54adfc9ae49291984d02546 |
| docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md | 05a81b707824146d6829ef385091dd4046bbe8fe | 246d6ed9cae0c34afc4ab5a4610b2a9c8baa64a4 |
| docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md | b226f2e5e38b0e4eb7d1e12c6dca4a3bae2e629d | 2319a691166f5af1d17e2c8c3df517f06191f791 |
| docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md | 29b609be3195efcd341aea39cb604a930dba8468 | d486451936944e8653ed566543be14b7264fade7 |
| docs/thpt-preview/sgk/lop-12/chuong-v/mo-rong-sau-bai-17.md | 35f7083deffa689b86fadd72940ec6eb0267ee4c | 4dcaebcb5f042c7bed5b6297d72923d059ff827f |
| docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json | 04478b7f379efb21377216b3543de656e2ace1f0 | bb1a65808a899301475165944380aa3bfa51c26b |
| docs/assets/images/thpt/FIG-G12-CHV-B14-NORMAL-R02.svg | new SVG | 4e576e52131595fc8e9dcc9d6f8a15976fb50655 |
| docs/assets/images/thpt/FIG-G12-CHV-B14-DISTANCE-R02.svg | new SVG | 8085188b6edb3dc9f10a6aabd3d4477b04bd1c77 |
| docs/assets/images/thpt/FIG-G12-CHV-B15-LINE-R02.svg | new SVG | ac0a7bb30fbc4e5e4eebe316cec3bd3695164602 |
| docs/assets/images/thpt/FIG-G12-CHV-B15-OCCLUSION-R02.svg | new SVG | 88151978e7df15f0750d5911b29a1c07a5369b5e |
| docs/assets/images/thpt/FIG-G12-CHV-B16-ANGLE_LP-R02.svg | new SVG | d0d40bf6ff1dd79728e68c1799bbc8bdf4706f41 |
| docs/assets/images/thpt/FIG-G12-CHV-B16-ANGLE_PP-R02.svg | new SVG | 1e20aa95a46ba761fbad12694c30eb1c90372bb3 |
| docs/assets/images/thpt/FIG-G12-CHV-B17-SPHERE-R02.svg | new SVG | 8ab6fdd05663bf58c595ae2103ef5c3fce35f0d4 |
| docs/assets/images/thpt/FIG-G12-CHV-B17-GEO-R02.svg | new SVG | 0f6ebdcb23d5c7fdd245c62e0e71e98dc4d30e8f |
| docs/assets/images/thpt/FIG-G12-CHV-B17-ARC-R02.svg | new SVG | b273a1da080fc03a7513be10e7147922ad38e1fa |
| docs/assets/images/thpt/FIG-G12-CHV-B17-SECTION-R02.svg | new SVG | a84e6ac5abdc5495c652a372eaffd099bbd447d1 |
Six old PNGs untouched; candidate lessons/extension no longer reference them. No parallel canonical learner page, no new bank, no JS/CSS changes.

## Fresh original S1 custody, scope and page map
Reopened original receipt 3089da687075018f6d798293659d7d622f272adc and audit 9f889d6e683196f0046a6af19e51fcae8056810b at f44c6c7fa6c3108ad96e928e131fe769581f822d. Actual original PDFs retrieved from Drive in previous authorized turn, locally reopened/rehashed/rendered in this turn: SGK 99 pages, 15,891,463 bytes, SHA256 3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb (Drive 1ZXndXJ7o6POBlJl-m7P2MsmzSypnE3t7); SBT 117 pages, 23,668,797 bytes, SHA256 823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1 (Drive 1hU7Tz8JWe9mn6cF-Qwj9Gc0DkDSNO2p0); both hash match. SGK directly inspected PDF1 31–63 printed 29–61 inclusive. SBT directly inspected PDF1 20–34 printed 21–24,26–36. **SBT printed p25 NOT LOCATED**, PDF1 23 is printed 24, PDF1 24 is printed 26; footer survey of PDF1 1–20 and 34–117 did not locate it (some crops without visible numbers). Do not infer absence from entire file or page content; no full S1 PASS. No textbook PDF scans uploaded to repository.
| Lesson | SGK print/PDF1 | SBT actually read print/PDF1 |
|---|---|---|
| B14 | 29–40 / 31–42 | 22–24 / 21–23, p25 transition not located |
| B15 | 41–49 / 43–51 | 26–29 / 24–27, p25 transition not located |
| B16 | 50–53 / 52–55 | 30–32 / 28–30 (p32 shared B16/B17) |
| B17 | 54–60 / 56–62 | 32–35 / 30–33 (p35 shared chapter-end) |
B14 SGK p29–31 parametric trajectory, cross product/moment; p32–35 general/point/direction/three points, intercept; p35–37 perpendicular & parallel; p38–40 projected distance, camera, equal distances. SBT p22–24 intercept and constrained plane. B15 SGK p41–44 directions, parametric/canonical (all three components nonzero), two points; p45–46 finite sight disk and perpendicular even when skew, explicit Example 8 p46; p46–49 two-line relative position, triple product, collision and containing plane. SBT p26–29 foot, line-plane, window disk. B16 SGK p50–53 all three angle families, degree/one decimal default, three-column roof and pyramid; SBT p30–32 angles, aircraft and road positions. B17 SGK p54–56 sphere equation, positive radius; **§2 p57–58 geographical coordinates, Earth 6371 km, directed radial vectors' central angle, shorter great-circle arc**; p59 coverage and tangent sphere, p60 GPS optional context. SBT p32–35 normalized sphere, center constrained to axis, sphere chord/tunnel, suspended sphere. Original numbers in new authored examples. S1 page inspection not all independent item coverage; p25 blocker.

## Per-lesson source evidence
| Lesson | Old mandatory outcomes | New mandatory local outcome | FirstTry | Examples | Local HELP | SVG |
|---|---:|---:|---:|---:|---:|---:|
| B14 | 6 | 0 | 7 | 12 | 7 | 2 |
| B15 | 7 | 0 | 8 | 12 | 8 | 2 |
| B16 | 5 | 0 | 5 | 9 | 5 | 2 |
| B17 | 5 | 1 | 7 | 12 | 7 | 3 |
| Optional after B17 | 1 optional | 0 | 1 | 1 | 1 | 1 |
Four Golden semantic tabs in each main lesson, 23 retained historical EX mappings +22 new, 27 FirstTry/HELP. Separate optional page remains explicitly optional after B17; distinct T02 from old example, new section SVG, no B14 mandatory O07. New G12-CHV-B17-O06 is mandatory knowledge with local tries and examples only; prerequisite Core/B16 links explicitly identified as not same-outcome. Dedicated 4-role bank/Written and handoff required.
| FirstTry ID | Outcome | Role | Linked canonical IDs |
|---|---|---|---|
| THPT-G12-B14-TRY01 | G12-CHV-B14-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C01 / THPT-G12-B14-P01 |
| THPT-G12-B14-TRY02 | G12-CHV-B14-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C02 / THPT-G12-B14-P02 |
| THPT-G12-B14-TRY03 | G12-CHV-B14-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C03 / THPT-G12-B14-P03 |
| THPT-G12-B14-TRY04 | G12-CHV-B14-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C04 / THPT-G12-B14-P04 |
| THPT-G12-B14-TRY05 | G12-CHV-B14-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C05 / THPT-G12-B14-P05 |
| THPT-G12-B14-TRY06 | G12-CHV-B14-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C06 / THPT-G12-B14-P06 |
| THPT-G12-B14-TRY07 | G12-CHV-B14-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B14-C03 / THPT-G12-B14-P03 |
| THPT-G12-B15-TRY01 | G12-CHV-B15-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C01 / THPT-G12-B15-P01 |
| THPT-G12-B15-TRY02 | G12-CHV-B15-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C02 / THPT-G12-B15-P02 |
| THPT-G12-B15-TRY03 | G12-CHV-B15-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C03 / THPT-G12-B15-P03 |
| THPT-G12-B15-TRY04 | G12-CHV-B15-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C04 / THPT-G12-B15-P04 |
| THPT-G12-B15-TRY05 | G12-CHV-B15-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C05 / THPT-G12-B15-P05 |
| THPT-G12-B15-TRY06 | G12-CHV-B15-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C06 / THPT-G12-B15-P06 |
| THPT-G12-B15-TRY07 | G12-CHV-B15-O07 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C07 / THPT-G12-B15-P07 |
| THPT-G12-B15-TRY08 | G12-CHV-B15-O07 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B15-C07 / THPT-G12-B15-P07 |
| THPT-G12-B16-TRY01 | G12-CHV-B16-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B16-C01 / THPT-G12-B16-P01 |
| THPT-G12-B16-TRY02 | G12-CHV-B16-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B16-C02 / THPT-G12-B16-P02 |
| THPT-G12-B16-TRY03 | G12-CHV-B16-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B16-C03 / THPT-G12-B16-P03 |
| THPT-G12-B16-TRY04 | G12-CHV-B16-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B16-C04 / THPT-G12-B16-P04 |
| THPT-G12-B16-TRY05 | G12-CHV-B16-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B16-C05 / THPT-G12-B16-P05 |
| THPT-G12-B17-TRY01 | G12-CHV-B17-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B17-C01 / THPT-G12-B17-P01 |
| THPT-G12-B17-TRY02 | G12-CHV-B17-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B17-C02 / THPT-G12-B17-P02 |
| THPT-G12-B17-TRY03 | G12-CHV-B17-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B17-C03 / THPT-G12-B17-P03 |
| THPT-G12-B17-TRY04 | G12-CHV-B17-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B17-C04 / THPT-G12-B17-P04 |
| THPT-G12-B17-TRY05 | G12-CHV-B17-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B17-C05 / THPT-G12-B17-P05 |
| THPT-G12-B17-TRY06 | G12-CHV-B17-O06 | New S1 outcome; prerequisite only; bank pending | THPT-G12-B17-C01 |
| THPT-G12-B17-TRY07 | G12-CHV-B17-O06 | New S1 outcome; prerequisite only; bank pending | THPT-G12-B17-C01 |
| THPT-G12-B14-TRY-OPTIONAL02 | G12-CHV-B14-O07 | Optional after B17 | THPT-G12-B14-C07 / THPT-G12-B14-P07 |

New example mapping: B14 R02-07/08 O03,09/10/12 O06,11 O01; B15 08/12 O07,09/10 O06,11 O05; B16 06/09 O05,07 O04,08 O03; B17 06/07/10 O06 (GPS 10 optional context),08/09 O01,11 O02,12 O03. Historical EX mapped by original order.

## Actual limited QA
108/108 source checks (27 each main lesson), 10/10 optional, 118/118 total. Tab order, unique local IDs, comparison/diagnostic, existing/new local outcome, same-outcome links or explicitly labeled prerequisites, four EX fields, retained EX mapping, actual SVG refs alt/captions, TeX delimiters, cards 6/3/3/2, Lỗi tab/print footer, tags, original routes, no runtime/private marks, exact normalized duplicate question comparison, optional protected. Not proof of semantic novelty or browser behavior.
75/75 limited arithmetic scenario checks (B14 19, B15 20, B16 14, B17 19, optional 2, W05 1). Cross/dot, norm, plane residual, line parametric/triple product, radians/degrees, sphere coordinates, distance. E.g. B14 fixed relation x+y-z=0, distance 2; B15 t=1/2 and OH²10>9, collision t2 vs t3, perpendicular skew; B16 roof 26.6°, pyramid 77.3°; B17 dot −1/4 and s11617.4 km, 120° gives 13343.4 km; optional r12. Numeric tolerance 1e-9 where not rounded. 742/742 SVG source checks (8,7,9,107,129,129,9,209,128,7), tag/title/desc and bounds, projected plane arrows and segment, 100 ring points, complementary/equal angle arcs, unit sphere 202 equator/meridian points, 122 arc point checks, Pythagorean section; tolerance 0.0011 px. No browser rendering/mobile approval.
 
## Canonical bank and Q16
96 unique IDs (92 mandatory+4 optional), 24 per role, 24 HELP x5, 48 target links, 24 END refs preserved. Exactly one material changed item THPT-G12-B15-W05, stem/answer/ID unchanged:
- Old solution: u·v=2−2+0=0; w=3u. Cần thêm giao điểm để gọi hai đường thẳng vuông góc hình học.
- New solution: u·v=2−2+0=0; w=3u. Hai đường thẳng nhận u,v làm chỉ phương vuông góc theo định nghĩa SGK, dù cắt nhau hay chéo nhau. Chỉ từ hướng không kết luận được chúng có giao điểm.
- Old rubric: 2đ tính dot và kiểm cùng phương đúng; 1đ kết luận hướng vuông góc; 1đ kết luận hướng song song; 1đ phân biệt hướng với quan hệ giao nhau hình học.
- New rubric: 2đ tính dot và kiểm cùng phương đúng; 1đ kết luận hướng vuông góc; 1đ kết luận hướng cùng phương; 1đ phân biệt vuông góc với điều kiện giao điểm (hai đường vuông góc vẫn có thể chéo nhau).
SGK p45 definition and p46 EX8 explicitly allow perpendicular and skew. /5 total unchanged. HELP-G12-B15-05 clarification and 24 learner-facing label changes (25 strings total; one label string includes clarified terminology); 95 other item records unchanged. Reverse restore of help.steps and W05 solution/rubric equals parsed base exactly. Same optional flags and end_references. Source/receipt metadata guard historical, not a new evidence receipt, reconcile. Hub d23a60076a10a07663904f2b5a44083a6713c410, END 29743dd2458c6b32b7051156037b6b6aa19a001e, JS d4fa6a68cebf072aa963141a5d8b78fe48c0cceb unchanged. Public END 23+1 optional prior-seen application refs, CLIENT_SELF_CHECK_NO_MASTERY only. No RD1/Final Submit/Firebase/Mastery changes.
 
## Open gates
SBT p25 not located; targeted independent Delta C review especially W05 and new O06; dedicated bank/Written depth for new transfer including O06; provenance lock reconciliation; V2/ready/REGISTER not attested. No independent Academic/PED PASS, browser/CI/real-device AP, release, or CONTENT_READY. Next G12 ChVI B18–B19; one MASTER #987.


## Latest academic Delta-C addendum — B17-O06 canonical coverage (22/11/2026)

**Scope:** Source-only supplement on the existing #1008 authoring branch. S1: original SGK Toán 12 KNTT Tập Hai, printed p57–58, PDF1 59–60 verified by direct image inspection, custody SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`. SGK p57 sets Oxyz axes and vĩ độ/kinh độ and normalized sphere, p58 computes great-circle short distance using central angle; correctly **no absolute value** for radial dot and θ must be in radians for s=6371θ. No independent reviewer verdict. SBT p25 blocker of earlier ChV remains unresolved and is not misrepresented as closed by this scope.

| Edited canonical resource | Previous R02 blob | Current blob |
|---|---|---|
| B17 learner | `d486451936944e8653ed566543be14b7264fade7` | `ce6a4ff6458ba1f2d929134935e494214e3b32d5` |
| Public Chapter V bank | `bb1a65808a899301475165944380aa3bfa51c26b` | `622308c8f7293d576e8690db4741ddfe7ad882c8` |
| Chapter V JS *unchanged* | `d4fa6a68cebf072aa963141a5d8b78fe48c0cceb` | `d4fa6a68cebf072aa963141a5d8b78fe48c0cceb` |

**Q15 outcome-role matrix:** exactly one canonical `item_id` each for B17-O06: `THPT-G12-B17-C06` (CORE), `THPT-G12-B17-P06` (SGK_PRACTICE), `THPT-G12-B17-A06` (SGK_APPLICATION), `THPT-G12-B17-W06` (SGK_WRITTEN); 1 five-step D6 `HELP-G12-B17-06` with canonical `return_item=THPT-G12-B17-C06`, `practice_item=THPT-G12-B17-P06`, and public END reference `END-CHV-17-06 → THPT-G12-B17-A06`. All 96 prior item records/answers/solutions/rubrics preserved as parsed JSON, no duplicates. New bank: 100 unique item IDs, 25 each of Core/Practice/Application/Written; 25 five-step HELP, 25 END references, 24 mandatory outcomes +1 original optional after B17, 4 optional item records unchanged. The new item is public formative only; END reuses A06, no independent/held-out readiness.

**Depth:** Core uses Northern latitude and Western longitude signs; Practice uses two non-equatorial positions and avoids mistaking a small-circle latitude path for great-circle distance; Application compares signed obtuse central-angle surface arc and 3D chord, naming the limitation of each; Written combines opposite latitude/longitude signs, unit coordinate proof, exact dot −5/8, arccos negative value and radian conversion with five separately graded points. `HELP-G12-B17-06` includes a distinct antipodal mini-repair with `dot=-1, θ=π` and a return/practice loop. B17 FirstTry 06–07 plus the Lỗi tab now link to **same-outcome** C06/P06 rather than unrelated spherical-equation C01.

**Math QA:** 16/16 independent JS recomputations: C06 (0,−√3/2,1/2); P06 dot=1/2, θ=π/3, 6671.7 km; A06 dot=−√2/2, θ=3π/4, surface 15011.3 km > chord 11772.1 km; W06 P=(√3/4,3/4,1/2), Q=(√3/4,−3/4,−1/2), both norm 1, dot=−5/8, θ≈128.6822°, s≈14308.8 km; D6 antipodes θ=π. Five Written rubric point units counted. 18/18 canonical/link/optional/role/status assertions, no changes to older 96 answers or options. QA is targeted source/math/learner-flow reasoning, not independent NotebookLM, full B14–B17 PED, SVG/browser or CI.

**Hard runtime blocker / RELEASE handoff:** Existing `docs/assets/javascripts/thpt-g12-chv-b14-b17-r01.js` has explicit bank count guards `96/24/24`, four role counts 24 each and public END labels `23 main+1 optional / 24 total`; new academic bank is `100/25/25`, 25 per role, `24 main+1 optional`. The authoring lane **does not touch this JS or published UI**. RELEASE must reconcile guards, source/receipt lock and labels based on the approved final bank **only after academic Q18 and V2/ready/REGISTER handoff**, then perform Q16 Final Submit and AP/CI tests at actual HEAD, subject to owner release permission. Current source bundle intentionally **NOT CONTENT_READY / NOT INTEGRATION_READY**; if the bank were loaded with unchanged JS it would fail closed. This blocker is explicit, not a claimed successful feature.

**Remaining:** SBT printed p25 not located (B14/B15 source coverage); independent review of B15-W05 rubric and B17-O06 academic transfer if owner requests or self-QA insufficient; chapter-wide transfer and rubric depth still requires verification; historical source/receipt locks and V2/ready/REGISTER not yet finalized. Snapshot-level previous 96-item source QA remains historical evidence, not an active 100-item QA claim.


## Returned external academic/PED review — content mapped, source identity reconciled as metadata discrepancy (22/11/2026)

**Evidence received from owner in current conversation:** independent reviewer text SHA256 `90a3f65e3093f6a5ed045721ab0aa741bd9dabddb7e1482e6a6acebe7cf3feb1` (11,789 bytes); reviewer text title says “Chuyên đề 18” but explicitly reviews `G12-CHV-B17-O06`. Verdict **ACADEMIC_PASS**, **PED_PASS**, P0=0, P1=0, P2=0, MINIMAL_DELTA=NONE for the four listed items and D6 only; RELEASE_AUTHORIZATION=NO, MASTERY_ACTIVATION=NO. Original reviewer text remains immutable in owner-supplied attachment; no fake correction to the reviewer-issued SOURCE_RECEIPT.

**Crucial receipt identity difference:**
- Reviewer `PACKET_ID=THPT-TOPIC18-B17-O06-TARGETED-DELTA-C-20261122` (incorrect learning-path prefix). Correct attached request: `G12-SGK-CHV-B17-O06-TARGETED-DELTA-C-20261122` in `prototypes/thpt/review-packets/Temp_G12_CHV_B17_O06_TARGETED_DELTA_C_20261122.md` blob `ef48ee88998f9d6df92586c1f53634e6e4849a07`.
- Reviewer `LEARNER_BLOB=1ad945ea583ce7ee91df64b58d3f31b31c202cd3` is an **existing Chuyên đề 18 learner blob** (verified GitHub blob lookup), **not** SGK B17. Actual SGK B17 canonical = `ce6a4ff6458ba1f2d929134935e494214e3b32d5`.
- Reviewer `PROPOSED_CANONICAL_W07_V2_BANK_BLOB=a24abd682932e11761f7c85fa3a3d3cdd77b600e` resolves on GitHub to an older ChV source-lock document, **not** the current public bank. Actual existing canonical ChV bank = `622308c8f7293d576e8690db4741ddfe7ad882c8`.
- Hence **do not assert Q18_INDEPENDENT_REVIEW_SOURCE_LOCKED_PASS for these current two file SHAs**. Evidence is **REVIEW_CONTENT_MATCHED_REVIEW_RECEIPT_IDENTITY_MISMATCH**; preserve external review's content verdict, never fabricate its provenance.

**Independent reviewer text → actual canonical item crosswalk, verified manually and by recomputation:**
| Reviewed existing ID | Matching live authoring item | Matched mathematical parameters/results |
|---|---|---|
| C06 | `THPT-G12-B17-C06` | 30° Bắc, 90° Tây; (0,−√3/2,1/2), norm=1 |
| P06 | `THPT-G12-B17-P06` | 45° Bắc; longitudes 0°/90° Đông; θ=60°, s=6671.7 km |
| A06 | `THPT-G12-B17-A06` | 0° latitude, 135° Tây; θ=135°, arc 15011.3 km and chord 11772.1 km |
| W06 | `THPT-G12-B17-W06` | 30° Bắc/60° Đông vs 30° Nam/60° Tây; dot −5/8, θ≈2.24593 rad, s=14308.8 km; five 1-point rubric components |
5-step D6 `HELP-G12-B17-06` review describes the same sign error, abs(dot) error, antipodal remedy and Core/Practice return flow. Reviewer gave the four item-level PASS assessments; own previous scoped source QA 18/18 and independent numerical scenario checks 16/16 remain valid for the unchanged learner/bank blobs cited above. Small extra digits in review's A06 arc approximation are off (exact 15011.315..., not 15011.337...) but its published 0.1-km final result is correct; for θ=0 the generalized reviewer phrase “chord always smaller than arc” is not strict, but no item has θ=0 and canonical items' math is correct. No new source content correction is warranted. These two observations are **external-review prose qualifications only**, not new lesson defects or grounds for automatic repeat review.

**Author-scoped disposition under one standard §X-E:** `Q18_AUTHOR_SELF_VERIFIED_B17_O06=SCOPED_CONTENT_PASS`; `TARGETED_ACADEMIC_CONTENT=PASS`; `TARGETED_PED_CONTENT=PASS`; `P0=0,P1=0` within B17-O06 item/lesson subsection; `MINIMAL_DELTA=NONE`; `NOTEBOOKLM_INDEPENDENT_REVIEW_CONTENT_MATCHED_BUT_RECEIPT_IDENTITY_NOT_LOCKED`. No new NotebookLM cycle needed solely to change the bad header. This is a **narrow outcome-level** Q18 disposition, not full ChV Q01–Q18/A1–A7 signoff, not `CONTENT_READY` chapter, and not RELEASE.

**Unchanged important open scopes:** SBT ChV printed p25 not located, broader B14–B17 lesson/outcome self-QA and bank transfer-depth as applicable, B15-W05 rubric verification and source/receipt guard reconciliation; V2/ready/REGISTER only if this is a new packet, otherwise the existing published-Knowledge enrichment exception is governed by §X-C. Runtime JS still expects 96/24/24 while candidate bank is 100/25/25: RELEASE owns compatibility/assessment/QA without pre-authorization to deploy.
