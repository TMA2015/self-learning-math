# G10 Chương VI B15–B18 · S1/Q18 v3.1.0 ENRICHMENT_DELTA_RECEIPT · RELEASE

**Date:** 13/11/2026 · **Mode:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` for *already published* SGK Knowledge, §X-C/§X-F of single `SLM-THPT-QUALITY-ONE`. This is **RELEASE self-QA on affected sections, not an independent NotebookLM verdict**, not a new textbook source, not a Topic handoff, not an assertion of P1/P2 publication.
**Baseline `main`:** `bb6d7a92308d78628761a3284264fa7b55d6c912` (G10 ChV P1 complete).
**Candidate branch:** `release/g10-chvi-b15-b18-s1-golden-preview-20261113` (Draft PR pending); exact final-head CI and production permission separately required.
**Delta:** `DELTA_C_ACADEMIC_MATERIAL` for learner sequence/reordering and B16 concept/completeness fix, plus `DELTA_A_UI` for scoped Golden JS/visual grouping. No changed Core, Practice, Written, official Readiness, item banks, scoring, private RD1, Final Submit, Mastery, Firebase, Gemini, THCS, G11–G12, or Topic.

## 1. S1 custody & genuine section mapping

S1 provenance retained from *Toán 10 Kết nối tri thức với cuộc sống, Tập 2*, NXB Giáo dục Việt Nam: owner-provided 102-page scan `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf`, **SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`**, **PDF index (1-based) = printed page + 1**, as previously recorded with direct visual scan checks at `prototypes/thpt/ux795/UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md` (source Git blob `24df7d8bed80e89884e38ac51363326839ffaac1`). That file's claims of owner/source access belong to that historical verification; this RELEASE edit **did not re-download or re-hash** the original scan. SGK's chapter headings independently cross-checked against digitized textbook transcription:
- https://sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-do-thi-va-ung-dung-3132/bai-15-ham-so-11320.html
- https://sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-do-thi-va-ung-dung-3132/bai-16-ham-so-bac-hai-11335.html
- https://sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-do-thi-va-ung-dung-3132/bai-17-dau-cua-tam-thuc-bac-hai-11990.html
- https://sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-do-thi-va-ung-dung-3132/bai-18-phuong-trinh-quy-ve-phuong-trinh-bac-hai-11991.html
Secondary transcription supports headings but is not a replacement for the S1 scan. No claim of new full printed-page/outcome audit beyond earlier receipt.

| LESSON | PRINTED SGK T2 | PDF 1-based | Canonical S1 titles shown at formal tab 2 | Affected outcome IDs |
|---|---|---|---|---|
| B15 | 4–10 | 5–11 | 2.1. Khái niệm hàm số; 2.2. Đồ thị của hàm số; 2.3. Sự đồng biến, nghịch biến của hàm số | `B15_OUT_01` … `B15_OUT_05` |
| B16 | 11–18 | 12–19 | 2.1. Khái niệm hàm số bậc hai; 2.2. Đồ thị của hàm số bậc hai | `B16_OUT_01` … `B16_OUT_05` |
| B17 | 19–24 | 20–25 | 2.1. Dấu của tam thức bậc hai; 2.2. Bất phương trình bậc hai | `B17_OUT_01` … `B17_OUT_05` |
| B18 | 25–27 | 26–28 | 2.1. Phương trình dạng `sqrt(A)=sqrt(B)`; 2.2. Phương trình dạng `sqrt(A)=B` | `B18_OUT_01` … `B18_OUT_04` |

**Crucial B17 correction:** The book has **two**, not three, major sections. Definition of the quadratic trinomial and theorem of its signs are nested *inside 2.1*, rather than advertised as three separate top-level textbook sections. B18 two radicals types/conditions follow S1. No book-level headings invented for parameter extensions.

## 2. Immutable source custody / signed candidate

| LESSON | PUBLISHED_BASELINE_BLOB | EDITED_SOURCE_BLOB | FIRST_TRY_MOVED_TO_DISCOVERY | Original HELP in mistakes tab |
|---|---|---|---:|---:|
| B15 | `7b579927e0f6fe4d5a562d5e1127efa8d6deeb96` | `1db49afc587c8c736e1c870851d431d0bca0d6a6` | 5 | 5 |
| B16 | `afe31b484ba60f8f7fed243b29995332a5609826` | `15eff8a5de7b06cf31851df1d18f21e9fa535717` | 5 | 5 |
| B17 | `93cd934ce90cc41d46d07a9af011975d6f930332` | `7f2b4ecdd3245b03924220b700668dde775722d2` | 5 | 5 |
| B18 | `f6fee0d64fd5452d8ac00a59e7d21b3d3ba48c6f` | `a392c81f8c80270a97db142edf1cca6e37fccf71` | 4 | 4 |

Original **19 unique canonical First Try placements**, corresponding `data-outcome-id`, **19 exact original HELP IDs/content**, existing voluntary extra clarification reveals, **five original figures (B15 1 / B16 2 / B17 1 / B18 1)** and all old TeX expressions remain; the transformation script verified answer bodies text-identical and an old-math multiset subset before staging. The B18 `THPT-G10-B18-C01` is still the *same* canonical item reused for formative placement (Q15), not duplicated. Full B15–B18 source files on `main` are unchanged unless this branch is merged.

Golden tab roles: `1. Khám phá` has WHY/meaning-first/19 First Tries, `2. Kiến thức SGK` starts directly at `2.1` and retains official math definitions/conditions, `3. Ví dụ` contains existing solved examples/extended applications, `4. Lỗi thường gặp` contains 19 D6 recovery cards. Math/figure guides appear after the **actual** figure, not before. Scoped JS reuses published B01–B14 Golden theme, no imported demo CSS.

## 3. Affected-scope math & pedagogical audit (Q01–Q18, Q02/PED1–PED6)

| Lesson/outcomes | Mathematical invariants checked / misinterpretations to prevent | Self-learning progression |
|---|---|---|
| B15 `OUT_01..05` | Function means each allowed input has **exactly one output**; repeated identical input/output is permitted. Domain of `sqrt` uses nonnegative radicand, of fractions excludes zero denominator. Graph point needs both `x∈D` and `y=f(x)`; monotonicity is established **over a specified interval**, not over two cherry-picked points. Piecewise branch and units determine tariff. Definitions of domain/range remain in formal 2.1. | 5 original questions after why/conditions, student chooses when to reveal unchanged answers; recovered via five D6. S1 2.1–2.3 separate from examples. |
| B16 `OUT_01..05` | `y=ax²+bx+c` requires `a≠0`; formerly malformed discovery `a\n e0` corrected to genuine MathJax. Vertex `h=−b/(2a)`, `k=f(h)`, axis `x=h`; for **a>0**, decreases before h, increases after h, range `[k,+∞)`; **a<0** inverse, range `(−∞,k]`; restricted real-world intervals intersect these. Table `f(x)=x²−4x+3` on `x=0,1,2,3,4` yields `3,0,−1,0,3`; reverse parabola from vertex/point retains original arithmetic. | Formal tab 2 now contains a concise missing monotonicity/range summary (Delta C) and drawing procedure; pre-Core TRY06–TRY10 in Discovery, five D6 in tab 4, worked reverse problem in example tab; no change to reviewed item answers. |
| B17 `OUT_01..05` | For `a≠0`, sign determined jointly by `a` and `Δ`; `Δ<0` constant sign of a; `Δ=0` zero only at double root, no sign change; `Δ>0` outside sign a, inside opposite. Strict vs non-strict inequality endpoints matter. Conditions for `f_m(x)>0` for all real x with **fixed a>0** require `Δ<0`; parameter case `a(m)=0` needs separate handling, not silently assumed. `x(18−2x)≥36` with `0<x<9` gives `3≤x≤6`. | 5 intact First Tries move to Discovery; official two S1 sections retained with theorem/table and figure; five HELP relocate to tab 4; long rào-vườn/time/parameter examples move to tab 3, clearly distinguished from mandatory S1. |
| B18 `OUT_01..04` | `sqrt(A)=sqrt(B)` requires **both** `A,B≥0` and `A=B`. `sqrt(A)=B` requires `B≥0` and `A=B²`, then source-equation check. Squaring can create extraneous roots; keep initial domain/physical distance/time constraints. | Existing four First Tries in Discovery, four HELP in tab 4; long worked geometry/meeting examples move to tab 3. All two source forms and original solutions remain. |

**P0/P1 after source-level revision:** no math or canonical-item regression found in moved source blocks using exact old-snapshot comparisons; automated QA must still validate rendered formulae, default-closed answers, five figures and cross-lesson context. Scope is **existing Knowledge enrichment only**, not a fresh full academic PASS on all S1 outcomes, not independent review.

## 4. Release gates (fail closed)

- **CONTENT_MATH_PED_SOURCE:** every source Git blob must match above; compare against actual baseline commit, original 19 questions/answers, 19 D6, five figures, all existing TeX expressions, official 3/2/2/2 SGK heading sets, four native tabs, original Core/Practice unchanged. Test deliberate negative mutations of item ID, answer, math, S1 headings and SHA.
- **ASSESSMENT_DATA_SAFETY:** no privately held RD1 or official mastery exposed; public First Try/HELP remain voluntary and unscored; no hint/key before **independent Final Submit**. G10 CHVI chapter self-check only existing `CLIENT_SELF_CHECK_NO_MASTERY` if supported, no invented official scoring.
- **RENDER_RELEASE_QA:** original B01–B14 Golden typography, 390/820/1440 Chromium, figure alt/MathJax, keyboard fold, TOC cross-tabs, all 27 G10, R4/Roadmap and production parity. iPhone owner P2 PASS was for **ChIV and ChV**, not this ChVI candidate. **No merge/deploy** until actual final HEAD CI passes and owner release authority applies.

**Current state:** `CHVI_SOURCE_STAGED / Q18_AFFECTED_SCOPE_SELF_VERIFIED / FINAL_HEAD_QA_PENDING / NO_DEPLOY / P2_NOT_TESTED`.
