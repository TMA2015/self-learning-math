# G10 B18 — Golden Knowledge, learner narrative and error-remediation R02

**RECEIPT_ID:** G10-CHVI-B18-OWNER-P2-FINDINGS-R02-20261120  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE  
**STANDARD_VERSION:** 3.2.0 (effective)  
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / signed author PED and mathematics self-QA; this receipt is **not** NotebookLM / independent review.  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (pedagogy, definitions/rules, examples' method explanations and standalone D6 context) and `DELTA_A_UI` (Golden semantic cards/labels). Formal mathematics, key, Core/Practice, Final Submit, scoring, ID and RD1 remain unchanged.  
**LESSON_ID:** G10-B18 · **OUTCOMES:** B18_OUT_01..B18_OUT_04  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-18.md` (one canonical source only).  
**PREVIOUS_B18_SOURCE_BLOB:** `98059f63097812bcdf90bed239f79e7521d8f058` (R01 already published 20/11).  
**CANDIDATE_B18_SOURCE_BLOB:** `432ef036d598e18e2aac200b2a51599f350164e9` (R02 current exact source).  
**BASE_COMMIT:** `bb04ab779da59b37d2c16c9b253e167c610e4db8` (after separate B17 repair merge).  
**AUTHOR_SELF_QA_SIGNOFF:** scoped `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, `P0=0`, `P1=0` for source-math/PED review; **OWNER_DEVICE_P2_NOT_CLAIMED**.  
**RELEASE_SCOPE:** only B18 Knowledge. Shared runtime, shared CSS, all other content (including B17's already merged changes), Core/Practice/Written/RD1 unaffected.

## G0 — original S1 provenance and owner evidence

Owner's screenshots 20/11 show B18 **two separate error lists**: a four-bullet summary followed by four collapsible five-step D6 procedures. Screenshot of expanded 4.4 shows a **ladder-specific diagnosis without restating the ladder problem**. Owner additionally reports over-compressed Discovery prose; no formal semantic definition/concept boxes; nonstandard headings `Vì sao cách này đúng?` and `Vì sao chọn cách này?` instead of Golden **Phân tích**.

S1 authority preserved from historical direct scan: SGK Toán 10 KNTT Tập 2 printed pp **25–27** (PDF index 1-based 26–28), SBT pp **19–21**, owner-supplied SGK scan SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`; original `UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md`, ChVI S1 receipt 13/11 and immutable B18 R01 self-QA receipt 20/11. **Not** claiming the PDF was re-downloaded or re-inspected this turn. Two original SGK formal forms remain 2.1 and 2.2; no invented third textbook section.

## G1/G2 — author self-check per outcome, actual edits

| Outcome/placement | Canonical mathematics / keys rechecked | Learner impact |
| --- | --- | --- |
| **B18_OUT_01 / THPT-G10-CHVI-TRY16** | `sqrt(x+1)=sqrt(2x−2)`, both radicands nonnegative (`x≥1`), `x=3`, both sides 2. Only in valid domain is squaring reversible | Explain why both radicals must exist **before** squaring; Discovery narrative flows worked examples → conditions → self-try → answer |
| **B18_OUT_02 / THPT-G10-B18-C01** | `sqrt(x+5)=x−1`; right side `x−1≥0`, candidates 4 and −1; reject −1, verify `sqrt9=3=4−1` | Show one-radical sign distinction from two-radical form and clear choice of method; `Phân tích:` before examples |
| **B18_OUT_03 / THPT-G10-CHVI-TRY18** | `sqrt(2x+3)=x`: need `x≥0`, square gives 3,−1, only 3 passes original equation; `sqrt(u²)=|u|` for real u, avoid sign loss | Define candidate/extraneous root in words, explain why squaring is not always equivalence; worked 2-radical geometry and equation conditions unchanged |
| **B18_OUT_04 / THPT-G10-CHVI-TRY19** | Ladder 13m, foot 5m, unknown height `h>0`: `sqrt(h²+25)=13` gives h=12m and reject −12m as a physical length. Two people meeting: `0≤x≤8`, `sqrt(x²+9)/5=(8−x)/4` yields x=4 (both times 1h) or 364/9 (invalid) | Explain modelling choice and relevance of physical domain, then independent student question with context and units |

**User's 4.4 objection resolved:** removed the separate `Các sai lầm cần tránh` bullet list entirely; its important original conditions `sqrt(A(x))=B(x)`, `B(x)≥0`, `u\in R`, `sqrt(u²)=|u|` now appear in *one introductory explanation* (not a second taxonomy). Four existing canonical HELP panels remain; their **Tự chẩn đoán** now restates each original first-try case: two radicals, one radical, extraneous root, 13m ladder/5m foot. For item 4.4 the actual problem is visible inside the disclosure before step-by-step diagnosis, so no guessing which exercise it means. Its header now names general error *nhầm cạnh huyền hoặc chấp nhận chiều dài âm*. No second question bank, no duplicate item IDs/solutions.

**Golden formal UI:** use one `Khái niệm — Phương trình chứa căn` and two `Quy tắc — Hai căn bằng nhau / Một căn bằng biểu thức` inside tab Kiến thức SGK, with identical approved concept-teal and rule-blue colors as B16, including dark mode, **only inside exact B18 Markdown**, no global CSS edit. Both original displayed equivalent systems and their conditions remain. All B18 example reasoning labels are **Phân tích**, with specific method rationale *before* each worked solution and a separate `Bối cảnh` (not pseudo analysis) for real-world setup.

## Safety and verification snapshot

- Original source Git blob `98059f63097812bcdf90bed239f79e7521d8f058` → new source Git blob `432ef036d598e18e2aac200b2a51599f350164e9`.
- **All 173 original visible LaTeX expressions preserved as multiset**, 176 in R02 because the contextual D6 additions refer to old exercises; **all 10 original display math blocks** remain. Original 4 canonical First Try IDs, 4 canonical D6 HELP IDs, outcome IDs, one unchanged SVG, and **4 original answer HTML bodies byte-for-byte unchanged**.
- Four canonical Discovery tabs and two S1 formal subsections preserved; no global theme, Firebase, Gemini, Mastery, Final Submit, READINESS or Q16 changes. 4/4 D6 now self-contained, no duplicate opening error list.
- Signed Q18 R01 is historical and untouched. R02 corrects owner-visible findings rather than inflating review status. No new NotebookLM academic verdict claimed; `P0=0` `P1=0` in source/Q18 authored scope.

**G3–G5 release gates:** exactly ONE B18 canonical Markdown + immutable receipt + source-router/test companions, `SCOPED_LESSON` only. Run B18-only browser 390/820/1440 MathJax/SVG/Golden/CSS/overflow/Q15/Q16, source SHA and Q18; do not run 27/79/all-site regression suites. After exact-head CI success, scoped Pages deploy with broad job SKIPPED and verify published B18 HTML 10/10 display math plus 3 semantic cards. Owner real-device P2 remains outside this receipt.