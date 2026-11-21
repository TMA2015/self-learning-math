# G11 B04 — ENRICHMENT_DELTA_RECEIPT / Q18 SOURCE LOCK

**SINGLE MASTER:** [#987](https://github.com/TMA2015/self-learning-math/issues/987). **LESSON_ID:** G11-B04; **GLOBAL_ORDER:** 31/79; **STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18 and SGK Checklist R02. **Q18_VERIFICATION_MODE:** Q18_AUTHOR_SELF_VERIFIED. **AUTHOR_SIGNOFF:** AUTHORING assistant, 21/11/2026. **VERDICT:** AUTHORING_HANDOFF_READY, Academic/PED self-check PASS scoped to affected article; P0=0/P1=0 found. Does not claim new NotebookLM independent PASS.

**ONE CANONICAL SOURCE:** docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md, branch authoring/sgk-g11-b04-r02-20261121. **MAIN_BASELINE_BLOB:** 71271b2035bfe289ac3ccf6f384d8f41ec55aefb. **NEW_SOURCE_BLOB:** e3fe2b7168486bc22135c8a2101be6b8e010d180. **DELTA_C_ACADEMIC_MATERIAL:** article rewrite for concept-first four SGK tabs, six S1 formal sections, seven new voluntary FirstTry, nine complete solved examples and matching D6. **DELTA_A_PRESENTATION:** one SGK source footer, original verified Written path, four existing graph SVG references. No modifications to public official question bank or private assessment, CSS/JS, Firebase or learner records.

## Q01–Q02. S1 source, scope and provenance

**Authoritative source read:** SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 4, printed pages 31–39. Read actual *searchable PDF text* for all six textbook sections and exercises 1.20–1.23: https://media.metaisach.com/2025/09/toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song-3c036587.pdf. PDF labels itself BẢN MẪU 11/2022. Web PDF screenshot of relevant pages failed cache miss, so **S1_DIRECT_FINAL_PAGE_IMAGE_THIS_ROUND=UNVERIFIED**. Previous original direct author/reviewer source [#682](https://github.com/TMA2015/self-learning-math/issues/682) signed B01–B04 on immutable snapshot public whole-ChI source Git blob 599d12ac7c2252001f881833c39978f94112cee4; **this does not imply new candidate reviewer PASS**. SBT B04 printed pp19–24 per that historical receipt only; **SBT_DIRECT_RESCAN_THIS_ROUND=NOT_DONE**. This SBT gap is documented provenance, no newly invented Core fact depends on it.

| S1 required block | Updated Knowledge | FirstTry/explanation | Outcome evidence |
| --- | --- | --- | --- |
| §1 pp31–32: equivalent equations and safe transformations | 2.1 | 1.1 / TRY01, worked 3.1,3.5 | EXTRANEOUS |
| §2 pp32–34: sin x=m, two branches, special cases, degrees | 2.2 | 1.2 / TRY02, 1.6 / TRY06, worked 3.2 | SIN_EQ, TRANSFORM |
| §3 pp34–36: cos x=m and Moon phases | 2.3 | 1.3 / TRY03, 1.7 / TRY07, worked 3.3,3.6 | COS_EQ, INTERVAL, APPLICATION |
| §4 p36: tan x=m, principal angle, domain and period | 2.4 | 1.4 / TRY04 and worked 3.4 | TAN_EQ, TRANSFORM |
| §5 p37: cot x=m, principal angle, domain and period | 2.5 | 1.5 / TRY05 and worked 3.4 | COT_EQ |
| §6 p38: calculator inverse trig and DEG/RAD | 2.6 | 1.6 / TRY06 and worked 3.7 | SIN_EQ, COS_EQ |
| Applications/exercises p39: transformed equations, projectile, oscillation | original bank untouched, worked 3.8 and 3.9 | 1.7 / TRY07 | TRANSFORM, INTERVAL, APPLICATION |

**Previous real Q01 omissions corrected:** The baseline knowledge lacked full official §1 equivalent-equation and §6 calculator material. Candidate covers them with actual definition, conditions, examples, error diagnosis and learner outcomes in exact S1 order.

## Q03–Q14. Author independent math/PED checks

- 4 ordered Golden tabs; 7 connected WHY→prior knowledge→essence→FirstTry arcs; 6 formal S1 Knowledge sections 2.1–2.6; 9 standalone worked examples with Đề bài / Phân tích / Lời giải / Kiểm lại; 5 general-rule misconceptions with practical remedies.
- FirstTry verified individually: TRY01 rational equation solution set {3} versus product equation {-2,3}, NOT equivalent; TRY02 sin x=-sqrt(2)/2 on [0,2π) gives 5π/4 and 7π/4; TRY03 cos x=sqrt(2)/2 on [0,2π) gives π/4 and 7π/4; TRY04 tan(2x-π/4)=1 gives x=π/4+kπ/2; TRY05 cot(2x+π/3)=0 gives x=π/12+kπ/2, all defined; TRY06 sin x=0.3 on [0,2π) has x≈0.304692654 and x≈2.836899999 rad (round 0.305, 2.837); TRY07 idealized Moon fraction F=(1-cosα)/2=3/4 has two angles 2π/3 and 4π/3 in [0,2π].
- Nine new complete worked examples re-solved: 3.1 rational-equivalence solution -3 excluding x=3; 3.2 sin(2x+π/3)=-1/2 gives x=-π/4+kπ or 5π/12+kπ; 3.3 cos(3x-π/6)=1/2 gives x=π/6+2kπ/3 or -π/18+2kπ/3; 3.4 tan(2x+π/4)=-1 gives -π/4+kπ/2, cot3x=√3 gives π/18+kπ/3; 3.5 sin2x=sinx gives x=kπ or ±π/3+2kπ (preserves zero branch); 3.6 cos2x=-sqrt(2)/2 on [0,π) gives 3π/8,5π/8; 3.7 cosx=-0.3 on [0,2π) gives x≈1.875,4.408 rad; 3.8 R(α)=Ksin2α on [0,π/2] maximum at α=π/4; 3.9 model s(t)=3cos(3πt-π/6) on [0,2] crosses zero six times (k=0..5 at t=2/9+k/3).
- **Numeric check:** 114 direct assertions and 549 additional equation-family checks over k=-30..30: **663/663 PASS** with exact formula/domain reasoning also checked. Tests corroborate algebra but do not replace independent math proof.
- Figures: existing B03 four source-owned SVGs reused on Tab2 only, alongside domain and graph method. Asset Git blobs: sin 0ec702b2c7e4059fec5b27ba2e14713b9cb68e34; cos e394b70aa5b3e238fd09cd4eac7076e2900193de; tan 719bb8bad9d5d041893d64cb455197139f6c75a4; cot 784a6486a46ad770a6faf9466301477bcf0a722a. The captions do not pretend existing charts show a new horizontal y=m; no pre-Try answer graphics.
- All local D6 routes point to real existing B04 Core/Practice cards, after voluntary comparison. Five Tab4 errors treat transferable methods, not repeated exact FirstTry mistakes.

## Q15–Q16. Canonical and protected evaluation

- Original public formative bank preserved exactly: docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js blob 9a8f0c1f65acb0cb9ab2fb8efaa9115f785aa8a0. Existing B04 C01–C04 and P01–P10 remain unchanged. New source only has TRY01–TRY07 as seven **unscored source-owned canonical stems**, each with exactly one answer and local HELP, non-cloning distinct from original bank stems; no new official assessment. Outcome IDs match original B04 public bank skill families. Seven local HELP and five general HELP IDs: 12 unique.
- Original Written/Anchor unified library untouched: docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md (also contains B03/B04 despite legacy name). Learner link corrected to existing relative Written route. No changes to RD1 private data, Final Submit, results, hints/keys exposure or Skill Mastery; Practice/voluntary comparison never grants official Mastery.
- Source structural QA: **19/19 static PASS** — four tabs, six Knowledge sections, seven discovery arcs, nine worked examples, seven unique FirstTry, 12 unique HELP, reviewed-bank distinct IDs, valid mapped outcomes, seven voluntary disclosures, seven local tips, five general tips, four real SVG paths, exactly one footer, balanced MathJax delimiters, no inline JS/CSS, no technical staff tokens, corrected Written link, no exact Practice stem duplication. Does not assert full historical-branches search or in-browser QA.

## Author signoff and RELEASE boundary

**AUTHORING RESULT: AUTHORING_HANDOFF_READY; Q18_AUTHOR_SELF_VERIFIED for source Git blob e3fe2b7168486bc22135c8a2101be6b8e010d180; scoped Academic/PED P0=0, P1=0 found.** Historical SGK/SBT provenance is preserved at original source SHA; absence of fresh physical page screenshot and SBT re-scan is disclosed, not incorrectly called complete. Only a single canonical source and a single receipt accompany the handoff.

**RELEASE: NOT IN SCOPE.** Draft PR only, not merged/deployed, not owner P2/CI/browser PASS. RELEASE must intake actual source and receipt SHA, verify Golden/MathJax/figure mobile, Q15/Q16, CI exact HEAD, page-image final print if different, publication P1 parity, device P2 if required, and explicit owner authorization. RELEASE priorities remain Math Lab 25 then 22 Chuyên đề. AUTHORING can advance to G11 B05 after the single checkpoint #987 is updated.
