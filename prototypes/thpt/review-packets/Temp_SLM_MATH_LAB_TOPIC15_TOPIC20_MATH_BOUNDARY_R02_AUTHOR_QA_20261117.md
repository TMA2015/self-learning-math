# Temp · Math Lab CĐ15–CĐ20 — academic formula/boundary QA R02 (17/11/2026)

**ONE STANDARD:** SLM-THPT-QUALITY-ONE v3.1.0 Q07/Q12/Q14/Q18. **SOURCE:** six current CSS-normalized HTML model files on authoring PRs #846/#848/#853/#855/#858/#860, source SHA in [Math Lab registry #880](../content-drafts/interactive-models/Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md). **AUTHORING only; static numeric formula QA, not browser or full PED gate.**

## Executed targeted numeric and boundary cross-checks

| Topic | Actual source algorithm inspected | Independent checks | Result |
|---|---|---:|---|
| CĐ15 | d: (t,0,h+t·tan α), classify contained/parallel/intersection; x=−h/tanα | **117** | PASS |
| CĐ16 | slope run/rise: L=hypot(r,h), θ=atan2(h,r), vertical/zero segment | **441** | PASS |
| CĐ17 | similar square bases S=a², S′=Sk² and V=h(S+√SS′+S′)/3; k=0→pyramid, k=1→prism | **2,268** | PASS |
| CĐ18 | sphere-plane distance d versus R and r=√(R²−d²) for d<R, no intersection for d>R | **250** | PASS |
| CĐ19 | C(n,k)=n!/[k!(n−k)!], Pascal and symmetry for 0≤k≤n≤10 | **66** | PASS |
| CĐ20 | Pair of A,B subsets of {1..6}; union = size(A)+size(B)−intersection; independence iff 6 × size(intersection) = size(A) × size(B) | **4,096** | PASS |

**Total: 7,238** formula/boundary cross-check cases PASS (independently implemented from directly inspected source algorithm). Additionally, **70 configurations** of the **exact CĐ19 recursive enumeration implementation** were executed: for n=1..7, k=0..n, ordered or unordered, every result list count and uniqueness matched nPk or C(n,k); largest 5,040 distinct permutations. **7,308 total** model math numeric/enumeration cases in this R02 scope.

### Specific high-risk boundaries

- CĐ15 α=0, h=0 ⇒ line contained; α=0, h≠0 ⇒ line parallel disjoint; otherwise t=−h/tanα exactly solves z=0; intersection can be outside drawn viewport.
- CĐ16 L=0 at r=h=0 ⇒ angle undefined; r=0,h>0 ⇒ right angle and tan undefined; h=0,r>0 ⇒ θ=0.
- CĐ17 k=0 ⇒ Sh/3; k=1 ⇒ Sh; formula assumes cut plane parallel to base and similar square bases, **not generic polyhedron**.
- CĐ18 d=R tangent, d>R no section, d<R section circle; no attempt to take square root of a negative radicand.
- CĐ19 k=0/n included; count does not confuse ordered AB vs unordered AB/BA, independent enumeration list length equals formula.
- CĐ20 event impossibility and probability 0: disjoint does **not** imply dependence if one event has probability zero; direct independence identity correctly handles it.

## Verification boundaries and Q18 scope

All 6 assets were updated with a **CSS-only** unifying overlay; checks during edit show JavaScript byte-exact against previous blobs; no model-specific math altered. Each HTML source has one CSS-token marker and updated Git SHA in the registry; CĐ17 additionally gained an inline metadata-only MODEL_ID. Tests above **verify the source-extracted mathematical algorithms**, but are not JS browser execution and do not evaluate canvas rendering, label clipping, screen readers, actual touch, device pixel ratio, resize, source-specific Vận dụng/D6 narrative or real student comprehension.

- **G1 numeric math for CĐ15–20:** TARGETED_PASS, no P0/P1 discovered in checked math; **G1 full academic/PED per-model NOT COMPLETE**.
- **G2 CSS source:** source parity 22/22 candidates across 11 HTML files verified in R02.
- **G2 visual and G3 runtime:** NOT_TESTED, require real browser and screenshot on actual candidate file at 390/820/1440, focus/touch/offline/console and SVG/Canvas.
- **G4:** Pending. Never grant model CONTENT_READY or website permission from these counts.

Earlier CĐ01–14 source project #844 55/55 math static checks and CĐ21–22 R01 22,050 Bayes+4,004 statistics cases remain historical valid for **unchanged JS** only; not fresh browser tests on CSS-aligned source blobs. No changes to SGK/Topic lesson source, bank, assessment, Firebase, Mastery, site or CI deployment.

**Checkpoint:** 22 MODEL_ID candidates; G0 placement/identity metadata VERIFIED; G2 CSS source parity 22/22; CĐ15–20 targeted formula QA 7,308 cases PASS; G1 full PED / G2 visual / G3 browser / G4 handoff OPEN; **NO RELEASE**.
