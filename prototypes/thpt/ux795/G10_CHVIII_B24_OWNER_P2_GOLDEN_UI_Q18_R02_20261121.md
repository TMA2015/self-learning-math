# G10 B24 — Owner P2 Golden UI correction, Q18 R02, 21/11/2026

**RECEIPT_ID:** G10-CHVIII-B24-OWNER-P2-GOLDEN-UI-R02-20261121
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, original Golden R4 B22–B23
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-24.md`
**R02_PREVIOUS_SOURCE_BLOB:** `7a6029b70a73376c8b2728b2d18efd7aa5b35a8c`
**R02_CORRECTED_SOURCE_BLOB:** `d4850e3726a092f0f2cd79631bade7e59e53b682`
**R01_RECEIPT:** `G10_CHVIII_B24_S1_FIVE_SECTIONS_OWNER_Q18_R01_20261120.md` immutable
**DELTA:** `DELTA_A_UI` — exact B24 route, semantic colors and presentation of five examples; move one generic error summary without changing mathematics
**OWNER_P2:** `OWNER_P2_FAIL_RECEIVED`; correction `OWNER_P2_RECHECK_PENDING`, not PASS
**Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, technical source review, not independent Academic/PED pass
**MASTER_ISSUE:** #795 / SGK-TAB-PLACEMENT-01

## G0–G2 · Three confirmed display defects against accepted B22/B23

- **P2-GOLDEN-24-01 (blocking):** The inline B24 Golden bridge incorrectly checked `/thpt-preview/sgk/chuong-viii/bai-23/`, never B24. It could not activate `thpt-g10-chiv-golden`, numbered section headings or blue active-tab treatment. Fixed pathname to B24 only.
- **P2-GOLDEN-24-02:** B24 had six unstyled `thpt-r4-concept-card` / `thpt-r4-rule-card` containers. Copied only the four approved B23 semantic CSS declarations (green concepts, blue rules, light and dark), scoped to `THPT-G10-CHVIII-TRY05`. No shared CSS/JS changes.
- **P2-GOLDEN-24-03:** B24 had zero Golden example solution panels (B22/B23 use `thpt-g10-example-solution`), and two examples in a single running line. Display five examples with 3.1–3.5 headings and existing Golden solution-card class; mathematical expressions and original example statements preserved. The unchanged general “Lỗi hay gặp” summary was moved from Example to general Lỗi thường gặp ahead of the existing two D6 items.

**Canonical preservation:** old published B24 R01 source SHA `7a6029b70a73376c8b2728b2d18efd7aa5b35a8c` → new Git blob `d4850e3726a092f0f2cd79631bade7e59e53b682`. Original R01 receipt untouched. Exactly four First Try IDs and four voluntary answer/rationale disclosures, four contextual HELP plus two general D6 IDs, all old MathJax formula expressions, five SGK subtopics, nPr/nCr instructions and existing practice/assessment unaffected. Q15/Q16, RD1/Final Submit, Firebase, Gemini, Mastery unchanged.

**G2 preflight:** B24-specific route and style source present, five example panels, source-scoped semantic colors, four Golden tab labels, all math and IDs preserved; scoped source `P0=0/P1=0`. **P2 remains FAIL from owner until recheck**, not inferred from CI. G3–G5 require exact-head current Chromium (390/820/1440) and matching Pages HTML on published commit; no global tests added.
