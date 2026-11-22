# Temp · Math Lab Golden UI R02 — source-level delta QA (17/11/2026)

**AUTHORING ONLY** · SLM-THPT-QUALITY-ONE v3.1.0 Q07/Q12/Q14/Q18. **SOURCE:** [Registry R02](../content-drafts/interactive-models/Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md) in Draft #880; 11 actual HTML files on their respective Draft branches represent 22 MODEL_ID candidates.

## Outcome pin and identity G0

- Verified exact placement from current learner source: TOP15-O11, TOP17-O10, TOP20-O11; CĐ18 two sub-scenes XYZ_PROJECTION for TOP18-O07/O08/O15 and SPHERE_PLANE for TOP18-O40/O23; CĐ19 entry points: TOP19-O01/O02, TOP19-O05/O06/O07, TOP19-O09. CĐ16 already pinned TOP16-O13/O14; CĐ21/O05–08 and CĐ22 original SGK raw-data outcome refs remain as on #880.
- CĐ17 HTML missing inline MODEL_ID repaired with exact `SLM-TOP17-FRUSTUM-VOLUME-R00`, `OUTCOME: TOP17-O10` (metadata comment only), then unified CSS.
- CĐ21/CĐ22 registry PR links formerly #844 corrected to actual Draft #880. 22/22 Topic entries now have grounded placement and source SHA; G0 **source-level verified**, not live-route acceptance.

## Visual CSS delta A — executed and source-readback confirmed

Each of 11 HTML files received **the same CSS token override** `SLM_MATH_LAB_GOLDEN_UI_TOKENS_R02_20261117`. Shared system UI/Segoe font, base 16px/1.6 line-height, white background, #eaf4fa header, #fafdff figure field, #c7dfe9 border, #183b54 text, #1687b4 controls, #218f73 pedagogical accent, #e9922a focus, h1/h2 scale, 42px min button target and keyboard focus. This CSS-only delta is **not a new math/PED Q18 verdict**.

- **11/11 source blobs re-fetched after commit** and verified exact expected SHA, exactly one style marker, required four palette tokens, viewport meta, and embedded JS block present.
- During each edit, prior and updated text **from first `<script>` onward compared byte-exact**; 11/11 unchanged JavaScript. No canonical questions/answers/rubrics, protected RD1, learner data or original 22 Topic sources changed.
- Script equality preserves the previously checked numeric **logic code** for CĐ21/CĐ22, but the prior 22,050 Bayes +4,004 stats test runs were on **R01 blob** `12c51b...`, not re-executed on the changed CSS-only blob; do not mislabel them as new browser tests.

| Topic(s) | Model asset | Authoring PR | HTML before Git blob | HTML after Git blob | CSS delta commit |
|---|---|---|---|---|---|
| CĐ01–04,06–08,10–12,14 | 11-in-1 | #844 | `e71afeafd6c12fad6bb5e44a7ba1268b1211c191` | `966f1a472372ffeb3af72f17a817cefcf5660271` | `c6e32d07063f47f64c9fdd1713f3eb965b86a2fb` |
| CĐ05 | M3 graph transform | #801 | `5bc8204f8bd024f30a73230231857210f1ce2123` | `249c433ba4fc58c8b6f88467ca003fb978d18c01` | `c67bac8ce263cb90419aaf4c195737610c943efb` |
| CĐ09 | M6 tangent derivative | #801 | `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5` | `6e3420462d60e985a976fe5f81db9b3a846b0da0` | `f0a63fe02d287c6b36fc4bb58c6b563e2b0600b4` |
| CĐ13 | dot product projection | #793 | `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e` | `a0db48db73198044a262312dc438fc4ae5e03788` | `f73f5fdf1b56310bb46ed6ec7a934d04d38a8d63` |
| CĐ15 | line–plane | #846 | `3f3c75765b6cddcaa53994027c45e79701d4d840` | `cf6510d5d964958982fae3ebce5823e35aeac639` | `e24660cffc457bcc3a6a509b363686817ab79e3d` |
| CĐ16 | ramp angle | #848 | `e14ee4c6ec6c851f228352656b0cd8e2fc3a2a06` | `931093557eb411b9f78286a92e6545dcbd59aa73` | `2c94c7f6c161dff40d94c7d820f68ea8776d2010` |
| CĐ17 | frustum volume | #853 | `727c05896a9d9bf95385b54559faa22917f1510e` | `cfb2bd522531167003eeae8e7342c6d1349ca425` | `91834f05e523b7b40f373f7cce7c6e73d6f00cf4` |
| CĐ18 | Oxyz and sphere | #855 | `1117d351d6818f1b4f7b40b5b42a5263b225849a` | `06a59b1624bf9eceef9722440acacfbac5969140` | `3fe49bd3e95a498193f02cc5cb82a949d2574f45` |
| CĐ19 | count/Pascal | #858 | `f4a078d0a7b4111f6cac483cca6cca65f05c111c` | `d68b220e5faadda774b7540606de3b024a472bd1` | `31df392fc83e526a4ea1c8d2e9520f0d25677f00` |
| CĐ20 | events | #860 | `6c327d5fdeb3763bebf0b69aa30080626ae1643a` | `117237ff935fdef0f5ce7ad8ec99a664f5f980b6` | `a26236f670ccbbb6d11f803b9663dd7a3124f096` |
| CĐ21–22 | Bayes/data 2-in-1 | #880 | `12c51bce313ed32da7907af1ea42f0bed4f20f4e` | `918088d1dde434dcf991c226859454320d4b3596` | `6958ce795eb8ca3c521b021772cfe693142df05e` |

## Remaining acceptance gates

- **G0 inventory/source/outcome:** 22/22 source metadata verified; cross-branch bundle and release combined-HEAD still pending.
- **G1 independent math/PED acceptance:** targeted model-by-model Q07/Q12/Q14 math/condition, figure semantics, all boundary cases and remediation **OPEN**. Prior static/numeric precheck for new two modules is preserved, not generalized to all 22 models.
- **G2 Golden:** `CSS_TOKEN_SOURCE_PARITY=22/22` by 11 files **PASS**. **Actual rendered visual parity/SVG/Canvas stroke colors NOT_TESTED**. Drawing hues inside canvas JS still vary and need screenshot/visual review.
- **G3:** browser Chromium at 390/820/1440, keyboard, actual touch, offline, errors, focus, SVG/Canvas clipping, iOS Safari **NOT_TESTED**.
- **G4:** browser + Q18 evidence, canonical model placement on same HEAD, final release handoff and owner approval **PENDING**.

**Verbatim status:** `G0_METADATA_PASS` / `G2_CSS_SOURCE_PASS` / `G1_SUBSTANTIVE_QA_OPEN` / `G2_VISUAL_OPEN` / `G3_RUNTIME_OPEN` / `G4_HANDOFF_OPEN` / `NO_RELEASE`. Math Lab remains dual-entry-point proposal; actual public route is RELEASE territory.
