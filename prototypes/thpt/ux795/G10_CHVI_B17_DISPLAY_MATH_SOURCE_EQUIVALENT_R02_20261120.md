# G10 B17 · R02 — Sửa hiển thị duy nhất một khối MathJax (20/11/2026)

**RECEIPT_ID:** G10-CHVI-B17-RELEASE-DISPLAY-MATH-R02-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE Q01–Q18 · one canonical SGK source  
**LESSON_ID:** G10-B17 · **AFFECTED_OUTCOME:** B17_OUT_01  
**MAIN_BASE_COMMIT:** `918a8673924d7bcdf10871a886ac4f07353260cd`  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-17.md`  
**PREVIOUS_B17_SOURCE_BLOB:** `524d55d5caa792ee3f44bb77bb5c3b2c723eed45`  
**CANDIDATE_B17_SOURCE_BLOB:** `9e7e7b6b147de53274b8f17140cdcd91cd04aeef`  
**R01_RECEIPT:** `prototypes/thpt/ux795/G10_CHVI_B17_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md` (immutable; original source line still at R01 SHA)  
**DELTA:** `DELTA_B_SOURCE_EQUIVALENT` + `DELTA_A_UI`, whitespace/Markdown display rendering only, no change to theorem, formula or instructional wording.

**P1 browser discovery:** GitHub Actions run `44579227563`, scoped single B17 build, reported **5 built display wrappers versus 6 standalone source display blocks**, although scoped Chromium 390/820/1440 reported 311 rendered math snippets and 5 First Try + 5 D6 all intact. The affected block is the newly introduced square completion for the `Δ<0` case under S1 §2.1.

**Minimal correction:** Add exactly one empty Markdown line before `\\[` and one after `\\]` at the existing proof `f(x)=a[(x+b/(2a))²-Δ/(4a²)]`. This makes MkDocs treat it as an independent display formula. Existing six TeX blocks, order/content, all Q15 First Try/HELP IDs, original answer HTML, full S1 section headings, figures and independent Core/Practice/Written libraries are unchanged; no other SGK lesson/Topic/Final Submit, RD1, Firebase or Mastery change.

**GATES:** Preserve R01 SHA in history; route candidate through R02 only after previous==R01 candidate. Targeted `test-thpt-chvi-math-block-render.cjs --built` must see **6/6** matching source/built display blocks for B17 (and unchanged B15/B16/B18). Exact-HEAD scoped Chromium for B17 at 390/820/1440 and Q15/Q16 source checks must PASS before merge and Pages release. No all-site 79/93/27 browser regression. Do not certify P1 or P2 before actual gh-pages evidence.

**SELF_VERIFIED_SOURCE_DELTA:** 2 added empty lines; mathematical expression and original closed answers byte-identical; `STANDARD_CONFLICT_HOLD` not identified for this source-equivalent formatting change.