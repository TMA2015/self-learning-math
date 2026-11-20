# G10 B17 — Owner-reported Golden Knowledge readability / semantic cards R03

**RECEIPT_ID:** G10-CHVI-B17-Q18-PED-GOLDEN-R03-20261120  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE  
**STANDARD_VERSION:** 3.2.0 (the ONE Q01–Q18 standard, effective main)  
**MODE:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT — editorial PED self-QA, NOT NotebookLM / independent reviewer  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (pedagogical explanations, editorial semantics) and `DELTA_A_UI` (labels, existing semantic card visuals). Existing S1 theorem, examples/conditions, canonical banks and assessments remain unchanged.  
**LESSON_ID:** G10-B17; **OUTCOMES:** B17_OUT_01..B17_OUT_05  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-17.md`  
**PREVIOUS_B17_SOURCE_BLOB:** `9e7e7b6b147de53274b8f17140cdcd91cd04aeef` (R02 publication, original source unchanged in history)  
**CANDIDATE_B17_SOURCE_BLOB:** `6486539ea41dfb9c60cce967a86c5067c772fbd7` (R03 new exact canonical source)  
**RELEASE_SCOPE:** B17 Knowledge only; no shared CSS/js, chapter Practice/Core, privacy, website routing, or other SGK pages. 
**AUTHOR_SELF_QA_SIGNOFF:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT · P0=0 · P1=0 for B17 learning/source scope reviewed below. **OWNER_P2_NOT_TESTED** remains distinct.

## Owner-reported problems, corrected at source

1. **Discovery felt overly compressed:** the original parabolic-road analogy could confuse students with a physical road; replaced with the meaning of the graph relative to the horizontal axis. From `(x-1)(x-3)` explain 1/3 roots as boundary, signs of factors as the cause of intervals, and strict vs inclusive endpoints; keep the ORIGINAL TeX and mathematics. The learner story now moves graph → factors → sign theorem → sign chart → inequality → real-world domain/parameter restriction. Rephrased abrupt prerequisites into explanatory transitional sentences in each of five outcomes. The fixed `a\ne0` restriction and `\Delta` cases remain explicit.
2. **No visible boxed formal mathematics:** reusing existing `thpt-r4-knowledge-conclusion thpt-r4-concept-card` / `thpt-r4-rule-card` classes, added a *Khái niệm — Tam thức bậc hai* box (`a\ne0`) and *Định lí — Dấu của tam thức bậc hai* box (all `\Delta<0`, `=0`, `>0` cases, two roots and zero points). Reused B16 accepted teal concept and blue rule palette in **B17 source-local and dark-mode-safe CSS**, scoped by exact TRY11 owner tag, not shared stylesheet.
3. **Outdated example labels:** converted all three **Vì sao chọn cách này?** headings to **Phân tích:**; added reasoning *before* the time-model example solution and labelled post-example conclusion as a memory rule rather than a second analysis. Updated extra-practice labels to **Vận dụng** and **Đối chiếu**. No original worked solution, case inequality, or answer changed.

## Independent G2 mathematical check by outcome (not independent reviewer PASS)

| Outcome | Mathematical invariant | Learner clarity |
| --- | --- | --- |
| B17_OUT_01 | Quadratic `a≠0`; `\Delta<0`, graph has no real root, sign of `a`; `x²+2x+5=(x+1)²+4>0` | Sign from graph and discriminant before theorem; named box |
| B17_OUT_02 | `-3(x-2)²<0` for `x≠2`, `≤0` all real; double root no sign change | Separate touch vs cut, 0 at root |
| B17_OUT_03 | `x²-5x+6≤0\iff x\in[2;3]` | Separate zeros from entire interval; explain endpoint |
| B17_OUT_04 | `x²+2mx+4>0` all real iff `a=1>0,\Delta(m)<0`, hence `-2<m<2`; a(m)=0 is excluded in extension | For all x means no touching/crossing horizontal axis |
| B17_OUT_05 | Three-side 20m fence `S=x(20−2x)≥48`, physical `0<x<10` gives `x\in[4;6]`; 18m example gives `[3;6]`. Ball `h(t)=-5t²+20t+5`, physically `0≤t≤2+√5`, h≥20 on `[1;3]` | Connect geometry/time domain to inequality results |

**Q15/Q16:** 5 original canonical `data-thpt-first-try-id` (TRY11–TRY15) and 5 original D6 IDs unchanged; all five original `thpt-r4-first-try-answer` HTML bodies byte-for-byte unchanged; original SVG and display equations retained; original math-expression multiset preserved with only explanatory copies in new boxes; 4 Golden tab structure, independent Core/Practice/Written and protected Final Submit unchanged. B17 source still one canonical Markdown file; earlier R01/R02 receipts immutable.

**G3–G5:** scoped **one-lesson** PR QA (source/Q18, AP browser 390/820/1440, MathJax/figure CSS, Q16); merge/deploy only if PASS on exact head; full-site tests prohibited on this learner-source-only PR. The site may still be built for Pages publication: build ≠ site-wide QA. Owner device P2 must be separately verified after P1.