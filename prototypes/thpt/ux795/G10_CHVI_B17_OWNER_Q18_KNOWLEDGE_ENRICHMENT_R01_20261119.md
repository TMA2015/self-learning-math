# G10 B17 · Dấu của tam thức bậc hai — RELEASE owner self-QA receipt (19/11/2026)

**RECEIPT_ID:** G10-CHVI-B17-OWNER-SELF-QA-R01-20261119  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE  
**STANDARD_VERSION:** 3.2.0 · Q01–Q18  
**LESSON_ID:** G10-B17 · **OUTCOME_IDS:** B17_OUT_01..B17_OUT_05  
**RELEASE_SCOPE:** Toán 10 SGK KNTT Tập 2, Chương VI, **Bài 17 only**  
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / `AUTHOR_SELF_VERIFIED` (not NotebookLM or independent reviewer)  
**OWNER_AUTHORIZATION:** Owner 19/11/2026 explicitly confirms B16 PASS, directs RELEASE to self-edit, self-QA and self-publish B17 when scoped release gates pass, forbids whole-site test suites.  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for concept-first rationale and proof of sign theorem, learner prose and D6 explanations; `DELTA_A_UI` for five Vận dụng labels and more specific HELP headings.  
**MAIN_BASE_COMMIT:** `15efa66fb964c5b8b014be44677290663c297686`  
**BASELINE_PUBLISHED_B17_SOURCE_BLOB:** `1a3481ee2020f48e924dae5e8b4f5779b3a2d88b`  
**CANDIDATE_B17_SOURCE_BLOB:** `4a54c34edc296237e447c97af53326a4ce78632a`  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-17.md` — same canonical source; no duplicate versioned student manuscript.  
**UNMODIFIED_B17_REVIEWED_PUBLIC_BANK:** `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js`, blob `1223d4c2b574433479c5d222dbeff363718ee4bb`.  
**UNMODIFIED_SHARED_WRITTEN:** `docs/thpt-preview/thu-vien/tu-luan.md`, blob `d96deee9b440076954d6f44b3007ea083fdd6eb0`.  
**UNMODIFIED_GOLDEN_RUNTIME:** `docs/assets/javascripts/thpt-r4-preview.js`, blob `a2eabd27257c5a54cc2043f085b68bcbc8c4075d`.  
**S1 HISTORICAL PROVENANCE (not a newly opened PDF):** SGK Toán 10 KNTT Tập 2, NXB GDVN, printed pp19–24, PDF 1-based pp20–25; original owner-file PDF SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`; historical direct-view audit `UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md`, stable S1/Q18 receipt `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md`. Formal S1 sections unchanged: **2.1. Dấu của tam thức bậc hai; 2.2. Bất phương trình bậc hai**. No assertion this release rehashed or visually reopened textbook.

## Whole-lesson G0→G2 self-editorial audit (one canonical lesson)

- **Tab 1 Khám phá:** Reworked introduction from parabol's position above/below `Ox` and `f(x)=0`, then demonstrates `(x-1)(x-3)` intervals. Keeps five separate student **Vận dụng** questions **before** five voluntary original answer disclosures and related D6; removes repetitive pseudo-method headings and sentence `Em có thể học các kiến thức tiền đề ngay trong bài.` without eliminating mathematical prerequisites.
- **Tab 2 Kiến thức SGK:** Preserves both real 2.1/2.2 major headings, theorem + three `Δ` cases, two tables, the original B17 source figure `G10_B17_QUADRATIC_SIGN_R02.svg` and the introduction/answer conditions. New reasoning: for `Δ>0`, `a(x-x1)(x-x2)` gives outer sign `a`, inner opposite; `Δ=0` uses `a(x-x0)^2`; for `Δ<0`, square-completion proves constant sign `a` (strictly positive bracket). Updated guide to read graph symbols, zero endpoints and `a<0` sign reversal.
- **Tab 3 Ví dụ:** preserves four original worked example topics and existing calculations/solutions, clarifies 18m fence's domain `0<x<9`, threshold and endpoint check `S(3)=S(6)=36`, and clarifies why fixed `a=1` allows `Δ(m)<0` for strictly positive for every real `x`.
- **Tab 4 Lỗi thường gặp:** five original `HELP-G10-CHVI-TRY11..15` with unique specific headings and learner-specific self-diagnosis. Math, recognition of cause, original correction methods and original canonical return links retained; no redundant trailing three mistakes duplicating HELP.
- **Q15:** five `THPT-G10-CHVI-TRY11..15` and five HELP IDs preserved in order, **all original closed-answer HTML strings exactly unchanged**, original solution/exam identities untouched. B17 public bank remains six original reviewed canonical formative items (2 Core, 4 Practice), and the two original Written/Anchor ID + rubrics remain unchanged. No self-check item cloned, no Topic source imported.
- **Q16:** neither Final Submit route nor Readiness/RD1, answer keys, Firebase, learner history, scores, Mastery, Gemini or shared runtime changed. First Try answers remain voluntary closed `??? question "Đối chiếu"`; existing non-assessment Practice remains formative-only.
- **Q17:** B17 SGK Core and Practice already independently provided via existing SGK public reviewed bank. Topic's separate three-page journey unchanged.

**Canonical First Try identities individually reconciled:** `THPT-G10-CHVI-TRY11` · `THPT-G10-CHVI-TRY12` · `THPT-G10-CHVI-TRY13` · `THPT-G10-CHVI-TRY14` · `THPT-G10-CHVI-TRY15`; each retains the matching `HELP-G10-CHVI-TRY11` … `HELP-G10-CHVI-TRY15`, with original answer HTML and canonical link IDs intact.

## Five outcomes — independent mathematical checks

| Outcome | Mathematical result and method | Robust counter-check / boundary |
|---|---|---|
| `B17_OUT_01` | `x²+2x+5=(x+1)²+4>0`, `a=1`, `Δ=-16<0`; no real zero | `-2x²+4x-5=-2(x-1)²-3<0` for every real x; Δ alone does **not** determine sign without a |
| `B17_OUT_02` | `-3(x-2)²≤0` for all x, equals 0 only x=2; strict `<0` excludes 2 | Values at x=1,3 both -3, so double root does not reverse sign |
| `B17_OUT_03` | `x²-5x+6=(x-2)(x-3)≤0` exactly on [2;3] | x=2.5 gives -0.25, x=1 gives +2; equality endpoints included |
| `B17_OUT_04` | `x²+2mx+4>0` all x iff `Δ=4(m²-4)<0`, i.e. -2<m<2, since a≡1>0 | At m=±2 function attains 0; separate worked example `x²-2(m+1)x+m²+3>0` all x iff m<1 from `Δ=8(m-1)<0`; m=1 fails strict > |
| `B17_OUT_05` | 20 m three-side fence, `0<x<10`, `S=x(20-2x)≥48` iff 4≤x≤6 | S(4)=S(6)=48; S(5)=50; intersected domain; 18m worked case `0<x<9`, `S≥36` iff 3≤x≤6 with endpoints 36 |
 
**Independent case audit:** `Δ>0` factor signs checked with `-(x-1)(x-3)` at x=0,1,2,3,4. With `Δ=0`, zero only at double root; with `Δ<0`, square completion's bracket is strictly positive. `h(t)=-5t²+20t+5≥20` yields t∈[1;3] intersected with flight window [0;2+√5], h(1)=h(3)=20, h(2)=25, h(0)=5. Original B17 SVG content untouched; caption and axes refer correctly to `(x-1)(x-3)` (sign +,0,-,0,+).
 
**QA constraints:** Reject missing/duplicated First Try or HELP IDs, changed answer body, changed two S1 headings, changed B17 existing public Core/Practice/Written or any Q16/RD1/mastery source, missing concept-first proof, generic duplicated HELP diagnostics, missing Fig, damaged MathJax delimiters. Keep historical `chvi` S1 and Golden UX receipts SHA immutable; test candidate router may point to this receipt only with exact baseline→candidate match. Run only lesson-scoped source/browser 390/820/1440 and protected Q15/Q16/source gate; **NO entire 79-lesson or 93-step Roadmap/R4 regression**.

**ACADEMIC_SELF_QA:** Affected B17 knowledge/PED mathematical checks above completed on exact current source, `P0=0`, `P1=0`; no independent reviewer claim.  
**RELEASE:** Commit on B17 branch; scoped exact-final-HEAD/browser QA required before merge, GitHub Pages source/asset parity required for `P1_PUBLISHED`; owner real-device `P2` is separate and not auto-certified.
