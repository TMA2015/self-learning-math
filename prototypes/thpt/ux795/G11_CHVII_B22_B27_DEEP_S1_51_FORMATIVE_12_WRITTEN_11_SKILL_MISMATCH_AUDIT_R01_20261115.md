# RELEASE — Kiểm toán sâu Toán 11 Chương VII B22–B27 (R01 · 15/11/2026)

**LANE:** RELEASE chỉ thu chứng cứ vào Draft PR #862 / Issue #795. **Trạng thái** `OWNER_QUALITY_HOLD`; `G11_CHVII_Q01_Q02_Q15_AP1_AP2_PED_HOLD`. Không chỉnh nguồn học liệu, canonical item, câu/đáp án/lời giải/rubric, RD1, Firebase, website hay khóa Mastery; không merge/deploy, không tự cấp Academic/PED PASS/C0NTENT_READY/AP-PASS.

**Chuẩn duy nhất:** `SLM-THPT-QUALITY-ONE v3.1.0` (Q01–Q18), owner 4 Knowledge Golden tabs; Golden R4 5+1; AP1–AP5/R1–R5 và SOURCE_RECEIPT. Không tạo chuẩn RELEASE thứ hai. **Quan trọng:** Issue #795 comment [#6860620978](https://github.com/TMA2015/self-learning-math/issues/795#issuecomment-6860620978) về ChVII R02 PASS là **G10 B19–B22**, KHÔNG phải G11 ChVII; không cho phép kế thừa PASS bằng từ khóa trùng.

**Verified repo state đầu lượt:** `main b103cd91cd32a2ff3accd1ae14c24870330ef9a2`, published `gh-pages 469e0c6cffde64a9b6ffbe7c65ed97144eb74659`, PR #862 open/draft head `2a7016217ff9fcaf6341b5feb519e7d361ae4a1b` trước báo cáo này; Issue #795 chưa có G11 B22–B27 deep audit.

## 1. Phạm vi và source SHA thật đã mở

| Phần | Git blob SHA | Nội dung đã thực kiểm |
|---|---|---|
| [B22 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md) | `d8a679897dde1d2fa25e12df56772eb54be29ff4` | 78 lines, 4 EX, 2 HELP, SVG, first-try |
| [B23 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md) | `ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad` | 80 lines, 4 EX, 2 HELP, SVG |
| [B24 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md) | `0bd7550087f455264e2b5e5d3214078e063ccb1c` | 80 lines, 4 EX, 2 HELP, SVG |
| [B25 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md) | `c6ba455035041fbe16ee66f346cb78477ceaaa73` | 87 lines, 5 EX, 2 HELP, SVG |
| [B26 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md) | `417ce70fc81b8a656e803855d0594dfa9db945b2` | 83 lines, 5 EX, 1 HELP, SVG |
| [B27 lesson](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md) | `abd417ddb6d89528eaa8da28c132a126a26738e0` | 83 lines, 5 EX, 1 HELP, SVG |
| [Public formative bank R01](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-g11-chvii-b22-b27-source-locked-formative-r01.js) | `4d656f2b8d952a2ad0be1c4298d065e0b8c95c88` | **51 unique canonical PUBLIC items**: 33 Core (incl chapter-integrated ID), 18 Practice. B22 7, B23 8, B24 8, B25 10, B26 9, B27 9 |
| [Practice hub](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/luyen-tap.md) | `90c35aca6df0b5a437d6bacb33b9e0474154deae` | Core: 4+5+5+7+6+6=**33**; Practice 3×6=**18**, counts match public JS |
| [Canonical Written/Anchor library](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vii.md) | `ef20f074dcd3972877f852c2bb075f6aa5362b9a` | **12** unique canonical Written, one normal + one Anchor-role per lesson, 12 manual rubric /4 |
| [Chapter self-check entry](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-vii/tu-kiem-tra-chuong.md) | `1171a047551fb20aeb8edc51a81f7637bb278f4f` | 18 PUBLIC Practice refs, voluntary manual Final Submit |
| [CHVII public config](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/data/thpt-g11-selfcheck/CHVII.json) | `b7bd2285219261c291ad0c9d728cdbfb3b98efb7` | 18 distinct `item_id`, **18 distinct skill strings, but 11 assigned to wrong actual skills**; no mastery/readiness/persist |
| [Client self-check JS](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js) | `295cc4109943b35d289e816678998568fe7dde74` | Source JS CHVII lines252–270 checks bank version/source/18 refs and unique strings; answer/solution conditional `if(submitted)` lines161–175 |

**Published `gh-pages` STATIC HTML inspected:** B22 `85ff1cb06cec5101e0781e54bf16511ac45a7cf7`; B23 `ce00a344bfcaf5022499373732d47f4cfcc8fe01`; B24 `f59146fee7ed4a17ee12e13a9c511eeacd5b46d7`; B25 `895335a3948b5b197eb36a012ec770a78b246f0e`; B26 `4ed9ec3279cc5839ff065131563364f09af6a9ea`; B27 `c2e621fd6f4503a58a4d603dac6c02e9b1c358f8`; Practice `19bc6e0e832285471911ae23a900ed1957c930a4`; Written `f5a304a2fa34de18e06a3ce8a6cd1831fbd25941`; selfcheck `65f86e1e722a0a8cab18ae27821653103ccbd267`. These are real **generated HTML files**, not an actual browser device session/Click QA.

**Actual six SVG source checked (title/desc, labels, geometry and lesson placement):**
B22 `FIG-G11-CHVII-B22-01_R00.svg` `5f2d23adb6f947064312d04d67ce5a5bb2d1ff48` (skew lines + translated perpendicular directions);
B23 `FIG-G11-CHVII-B23-01_R00.svg` `b53b65704f9830e1c97b533bac0e79a0b56761b6` (column perpendicular two intersecting floor lines);
B24 `FIG-G11-CHVII-B24-01_R00.svg` `c98d7df30b87c339336636e00322816a4099681b` (right triangle slope-height-horizontal);
B25 `FIG-G11-CHVII-B25-01_R00.svg` `3f6112a7b12f1829ee2249b979d45f1f5370fc66` (dihedral cross-section);
B26 `FIG-G11-CHVII-B26-01_R00.svg` `26fb51f3af65ba7d86a2907f0eaff808d2d87532` (**only** shortest point-to-plane diagram, see mismatch below);
B27 `FIG-G11-CHVII-B27-01_R00.svg` `a7bec7a20295d09ca6f32aae0e8910cef7bed9dc` (prism, pyramid, frustum and formula labels).
These six SVGs **exist**, display mathematically meaningful shapes, and are placed at knowledge **line 28–30** after concept development and before EX. Do not claim absent/wrong numerical figures. Q07/AP3 missing figures specifically for absent outcomes, and no verified visual zoom or browser P2.

## 2. S1 SGK/SBT coverage and custody

**Correct S1:** SGK Toán 11 *Kết nối tri thức*, **Tập 2**, ChVII Quan hệ vuông góc trong không gian, 6 named B22–B27. Independent SGK text transcription:
- [B22 p27–30](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-22-hai-duong-thang-vuong-goc-12750.html), §1 góc giữa hai đường thẳng, §2 đường vuông góc.
- [B23 p31–36](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-23-duong-thang-vuong-goc-voi-mat-phang-12753.html), §1 tiêu chí, §2 tính chất **mặt phẳng trung trực của đoạn thẳng** + *unique plane through a point ⟂ given line*, §3 quan hệ song song–vuông góc. Printed p33–34 includes exact perpendicular-bisector plane definitions, locus `MA=MB`.
- [B24 p37–43](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-24-phep-chieu-vuong-goc-goc-giua-duong-thang-va-mat-phang-12758.html), SGK learner outcome **orthogonal projection of point, line AND TRIANGLE**, three-perpendicular theorem and line-plane angles.
- [B25 p44–53](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-25-hai-mat-phang-vuong-goc-12759.html), six parent groups two planes, condition, properties, dihedral, special prisms, regular pyramid/frustum.
- [B26 p54–60](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-26-khoang-cach-12766.html), three groups point-to-line/plane, parallel line-plane/plane-plane, skew lines; p58 explicitly: **distance of two skew lines equals distance of one line to plane containing other and parallel to first**, plus auxiliary-plane construction.
- [B27 p61–63](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-27-the-tich-12769.html), four solids: prism, pyramid, box, regular frustum volume and real-world derivation (incl. needing derive perpendicular h from slant edge).
External S1 text is **comparison evidence only**. No authenticated NXB publisher PDF binary screenshot / verified page-index ↔ printed page custody, no complete original SBT item/page audit, no final `Q01_S1_PUBLISHER_VERIFIED_PASS`. A PDF labeled “Toán 11 từ năm 2026” exists but **not substituted automatically** for S1 without owner edition decision.

## 3. P1 — Q15/Q02 semantic labeling: **11 of 18** PUBLIC chapter check items mis-tagged

File `docs/assets/javascripts/thpt-g11-chvii-b22-b27-source-locked-formative-r01.js` SHA `4d656f...` genuinely has 51 unique canonical item IDs, and `CHVII.json` genuinely has **18 distinct IDs with 18 distinct `skill` strings**. But static client JavaScript checks only **string uniqueness**, not whether the stem/solution **actually assesses** the labeled outcome.

Eleven explicit mismatches, each included in the 18-item self-check (short ID suffix prefixes are `THPT-G11-CHVII-`):

| Canonical suffix | Existing `skill` | What learner is truly asked |
|---|---|---|
| `B22-P02` | `G11-B22-PERP_SKEW` | `AB//D′C′` → angle **0°** for **parallel**, not skew perpendicular |
| `B23-P01` | `G11-B23-PERP_PLANE_DEF` | Transfer (d⊥P, P//Q⇒d⊥Q), **parallel-plane transfer**, not definition |
| `B24-P01` | `G11-B24-POINT_PROJECTION` | Complement angle **35°→55°** with vertical, **line-plane angle** |
| `B24-P03` | `G11-B24-THREE_PERP` | Distinguish horizontal projection vs vertical height, **not three-perpendicular theorem** |
| `B25-P02` | `G11-B25-DIHEDRAL` | A regular pyramid's **lateral edge not necessarily ⟂ base**, no dihedral measurement |
| `B25-P03` | `G11-B25-PERP_PLANES` | Right prism with arbitrary trapezoid base **not regular prism**, not ⟂-plane proof |
| `B26-P01` | `G11-B26-POINT_LINE` | Right triangle computes **pyramid altitude / point-to-plane** h=8, not distance to a line |
| `B26-P03` | `G11-B26-PARALLEL_LINE_PLANE` | Two **skew lines** distance cannot be 0, not parallel line-plane distance |
| `B27-P01` | `G11-B27-PRISM_VOLUME` | **Pyramid** volume 12×9/3=36, not prism |
| `B27-P02` | `G11-B27-PYRAMID_VOLUME` | **Regular frustum** formula (V=74), not full pyramid |
| `B27-P03` | `G11-B27-BOX_VOLUME` | Detect incorrectly using **slanted frustum edge as perpendicular height**, not box volume |

**11/18 mislabeled**, **not** “only 7 unique labels” (there are 18 different strings); do NOT infer 18 independent skills/outcomes achieved. The mismapped IDs range from semantic proximity (B23-P01) to opposite concepts (B22-P02, B27-P01/P02/P03). Every stem/answer can be mathematically correct **while outcome metadata is false**. Q15 single canonical item source applies across practice and chapter check; Q16 semantic readiness reporting must **never** rely only on unique labels. `AUTHORING_DEFECT` ID-specific Q02/Q15 with source/receipt SHA; source-equivalent metadata Delta B candidate **only** after reconciling actual outcome with approved item-outcome matrix; if teaching/outcome coverage changes materially, scoped Delta C+independent review. RELEASE does **not** relabel bank or self-check directly.

**Positive Q15 detail:** One original chapter-integrated Core `THPT-G11-CHVII-CHVII-C01` is intentionally placed under **B27 Core** `lesson=27`; its atypical canonical ID is existing reviewed single source with placement, **not evidence of duplicate content or a generated second ID**.

## 4. P1 S1 missing required learnable outcomes

### `G11_B23_PERP_BISECTOR_PLANE_S1_GAP` (Q01/Q02/Q03/Q05/Q10)
SGK original B23 §2, printed p33–34 introduces the **mặt phẳng trung trực của đoạn thẳng AB**: plane through midpoint I⊥AB, and `MA=MB ⇔ M` lies on it; also the theorem **unique plane through prescribed point perpendicular to prescribed line**. B23 full source lines 10–26 only gives d⊥plane, two intersecting lines sufficient, uniqueness of line through point perpendicular to a plane, and parallel transfers. No bisector-plane definition/locus or dual uniqueness theorem. None of **B23 5C+3P or two Written** tests either. This is an actual *distinct missing S1 outcome*, not a wrong supplied answer.

### `G11_B24_TRIANGLE_ORTHOGONAL_PROJECTION_S1_GAP` (Q01/Q02/Q07/Q13)
SGK B24 stated learner outcomes identify orthogonal image of **point, straight line and triangle**. B24 source lines10–26 teaches projections of point and line and three-perpendicular theorem, **does not demonstrate how to project each vertex of a triangle and join the projected edges / handle degenerate projection**. Four EX, B24 5C+3P, two Written and only SVG of a sloped **segment**, no triangle-projection task. A pupil could solve all B24 public tasks without acquiring the named triangle outcome. Needs a standalone graph/visual/self-try from AUTHORING.

### `G11_B26_SKEW_DISTANCE_AUXILIARY_PLANE_METHOD_GAP` (Q01/Q02/Q04/Q05/Q07)
SGK B26 §3 p58 gives construction of a plane containing b and parallel a, then computes `d(a,b)=d(a,(Q))`; includes line projection and common perpendicular. B26 lesson lines19–24 states definition of common-perp segment, but **does not teach its general construction using auxiliary parallel plane or this equivalence**. EX04 line61–65 is a specially coordinate-aligned Ox/Oy case with pre-visible perpendicular, not general self-study from solid figure. B26 six Core+three Practice and W01/W02 no method `d(a,b)=d(a,(Q))` application. Crucially **source B26 image alt/caption l28–30 promises “đoạn vuông góc chung giữa hai đường chéo nhau”**, whereas actual SVG blob `26fb...` depicts **only point M to plane P** with MH⊥P and MK oblique, no two skew lines or common-perp segment. This is exact **Q07/AP3 text–figure evidence mismatch**, not claim existing point-plane graphic is mathematically wrong.

### `G11_B27_S1_INVERSE_HEIGHT_TRANSFER_DEPTH` (Q02/Q04/Q05)
SGK B27 exercises/real-world p62–63 require obtaining volume from indirect angles/slanted side/radii and constructing perpendicular heights (e.g. volume of non-right prism, frustum with side edge known). Current B27 does explain perpendicular height requirement, 5 EX, worked frustum formula and numeric examples, but core + practice are mostly **direct substitution** or identification; lack a specific independent learner construction calculating a frustum/prism height **from given slant length and base shape** before volume, as in S1. This is **depth/transfer deficit**, not claim formula absent or wrong. Best route targeted outcome matrix review; maintain past R01 snapshot.

## 5. P1/P2 published pedagogy and math precision

- **Golden missing** (Q03–Q14/AP1/AP4): Six actual published learner article HTML files show **0 independent four-tab Knowledge widgets**. Each has vertical `1. Kiến thức... → 1.8 Ví dụ → 2. Tự khắc phục → 3. Tiếp tục`. Chapter/Core/Selfcheck top nav isn't 4 Golden tabs. Present explanations do have `Vì sao`, condition reasoning, 4/5 EX and 1–2 HELP, so do NOT claim no teaching content.
- **AP2 formulas missing markup:** MathJax CDN present in every page, but **each lesson article has 0 `arithmatex`**, raw strings like `d⊥(P)`, `S_đáy·h`, `√(SS′)`; some texts in Unicode and inline plain, not textbook-quality typeset. Measured number of `<code>` spans B22 2 / B23 2 / B24 2 / B25 2 / B26 1 / B27 1. Therefore do not claim JS missing or high code counts; but genuine AP2 semantic typesetting required (MathJax loaded cannot render unmarked formulas).
- **PED first-try pre-answered** all six (Q09–Q14): B22 l32–33 already concludes `(AB,CC′)=90°`; B23 l34–35 already says “Chưa”; B24 l34–35 writes 6 m and sin 6/10; B25 l34–35 already supplies perpendicular planes; B26 l32–33 writes SH=3; B27 l34–35 gives `90, 30, 28`. Details `data-ped-first-try` only asks pupil compare to a following example; **does not hide any of those answers**. It is not an independent pre-Core reasoning try. Stronger than mere repeated EX; fix only via AUTHORING pedagogic Delta C.
- **B22 EX04 misleading added condition (Q03/Q04):** B22 l61–65 correctly says a⊥c,b⊥c does **not** imply a//b. But final line “Cần thêm điều kiện cùng nằm trong mặt phẳng vuông góc c hoặc định hướng phù hợp” can imply **coplanarity in plane ⟂c suffices** to deduce a//b—FALSE. Explicit counterexample: a=Ox,b=Oy both lie in plane Oxy⊥c=Oz and both ⟂Oz, but a⊥b and not parallel. **Do not incorrectly extrapolate this ambiguity to the 51 public keys;** escalate as explanation-level `AUTHORING_DEFECT` Q03/Q04 with exact EX ID, scoped review if rewritten.
- **Skill/prompt leakage to learners (AP4/Q13/Q14):** published 1.8 section headings show raw `EX-G11-CHVII-...`; Written cards display long canonical `THPT-G11-...`; source HELP text exposes `D1` and states private “RD1” policy inside student help. All 51 generic hints have just **one variant per lesson** (6 total). There ARE real HELP chains (2 per B22–B25; 1 each for B26–B27), do not falsely mark D6 totally absent. Distinguish simple display cleanup Delta A from pedagogic explanation changes Delta C.
- **Positive placement:** all six SVG are already adjacent after introduction (source ~l28–30) with “Hướng dẫn đọc hình”, though for B26 common-perpendicular outcome the shown diagram is not what the caption promises. No six-figure absent/late blanket defect.
- **Q05 exposure:** Several PUBLIC Practice questions are near-identical to fully solved EX, e.g. B22 P03 `AB⊥CC′` exactly in source first-try l33 and EX01 l42–44; B23 P02 same two parallel insufficient EX02 l49–53; B25 P02 pyramid side edge misconception already explained l17/l24 and HELP02 l82; B27 P02 frustum direct formula after l24/EX03; public reuse valid for formative retrieval, **not held-out readiness**. Some tasks do challenge error reasoning, so do NOT claim all 18 are clones.

## 6. Positive arithmetic + Written QA / Q16 boundary

**All 51 canonical PUBLIC records** have unique IDs and source stem/answer/solution inspected; no wrong numerical/algebraic final answer observed. Explicit checks include B22 145°→35°, parallel D′C′∥AB→0°; B24 35°→55°, 3/4/5; B25 125°→55°, true condition planes; B26 17²−15²→8 and skew distance positivity; B27 `25,4,3→39cm³`, `16,9,6→74cm³`, prism 105, pyramid 42, l→360. **Math answer correctness ≠ correctly mapped outcome ≠ Academic/PED PASS**.

**All 12 canonical Written /4 rubrics checked:** B22 W01 AB⊥DD′, W02 135°→45°; B23 W01 criterion, W02 perpendicular lines parallel; B24 W01 triangle 9–12–15 angle `asin 3/5≈36.87°`, W02 three-perp; B25 W01 dihedral 112→68, W02 square side8 and SO6→SA=2√17; B26 W01 MK13 vs MH5, W02 two skew coordinate lines distance4; B27 W01 prism216/chop72, W02 frustum `49,16,6→186cm³`, S′→0→98. **No incorrect math solution identified in these twelve;** Anchor only a label; solutions behind manual `details`; no automated Written grading or Mastery.

**CHVII self-check Q16 static review:** 18 PUBLIC Practice refs all found, 18 unique IDs, **18 unique `skill` strings but 11 semantic mismatches**. Mode `PUBLIC_CANONICAL_REFERENCE_ONLY`, `mastery_credit=false`, `independent_readiness_credit=false`, `persist_results=false`, 33 *protected private RD1* reported by public bank header but not inspected. R01 header names author source Git blob `afc8ec039213b87b4930f2d34d48c28d1fc6277f`, historical review receipt `25e7be8637cdd9cfe021fbc70537e44bbdec04e2`; both **historical references**, not a new review. JS guards CHVII lines252–270 source/version/public role, `if(submitted)` lines161–175 solution reveal; FREE_TEXT manual self-review only. No live click, pre-Submit network/DOM, RD1 exfiltration, Safari/390/820/1440 and private readiness source audit. Do not certify Q16 actual P2/Skill Mastery.

## 7. Disposition and checkpoint

**Priority 1 — AUTHORING_DEFECT Q02/Q15**: 11 exact public Practice `item_id` mappings in §3; author to reconcile outcome matrix and CHVII config while preserving one canonical item each and original review source/receipt SHA; **do not simply replace labels in RELEASE**. Verify whether metadata is strictly Delta B equivalent; if new knowledge/outcome/inference changed route Delta C targeted independent NotebookLM review (exact five permanent v2.1 sources) after owner authorizes. Never silently transform PUBLIC Practice into RD1 or mastery.

**Priority 2 — AUTHORING_DEFECT Q01/Q02**: B23 perpendicular-bisector plane, B24 triangle projection, B26 auxiliary-plane skew-distance method; B27 indirect heights/transfer depth. Original S1 publisher PDF printed page-index/SBT still needs custody verification before a final Q01 PASS.

**Priority 3 — AP1/AP2/PED**: four actual Golden Knowledge tabs per lesson, typeset full math, hide preanswered first-try and add standalone reasoning/outcome-recovery, fix B22 EX04 wording, correct B26 image-alt promise. Preserve existing correct SVG, formulas, canonical IDs and unaffected prior PASS, distinguish A/B/C/D deltas. No site modifications in this audit.

**Count:** G10 B01–B27 **27** + G11 B01–B21 **21** + this G11 ChVII B22–B27 **6** = **54/79 SGK THPT lessons deep SOURCE-audited** (not released/Academic PASS). **Next RELEASE deep scope** G11 ChVIII B28–B30, after GitHub HEAD and Issue #795 refresh; `OWNER_QUALITY_HOLD` maintained. No merge/deploy.
