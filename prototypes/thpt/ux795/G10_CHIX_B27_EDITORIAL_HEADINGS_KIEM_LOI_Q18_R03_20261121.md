# G10 B27 · R03 Editorial correction — textbook-style headings and canonical Kiểm lỗi

**RECEIPT_ID:** G10-CHIX-B27-EDITORIAL-HEADINGS-KIEM-LOI-Q18-R03-20261121
**STANDARD_ID:** SLM-THPT-QUALITY-ONE
**STANDARD_VERSION:** 3.2.0 Q01–Q18
**LESSON_ID:** G10-B27
**CANONICAL_PATH:** `docs/thpt-preview/sgk/chuong-ix/bai-27.md`
**R03_PREVIOUS_SOURCE_BLOB:** `759bfa7333b7a81f73fe6523fadc749695bf2001`
**R03_CORRECTED_SOURCE_BLOB:** `209de8ae01c8654e55e07648c76b7d98396f7393`
**PREVIOUS_PAGES_HTML_BLOB:** `8914d1288e54adc7632a3ba3e66d002cd42c2330`
**SHARED_ORIGINAL_TREE_SVG_BLOB:** `877abd0e755950e6112f1c2aaa33f281027ad33f`
**DELTA:** DELTA_A_UI_EDITORIAL / DELTA_B_SOURCE_EQUIVALENT, with exact mathematics/outcome/item preservation
**Q18:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT; Q15/Q16 security intact; independent NotebookLM reviewer PASS not claimed
**OWNER_P2:** owner visual defects confirmed; OWNER_P2_RECHECK_PENDING for R03 source
**SINGLE_DEFECT_LEDGER:** https://github.com/TMA2015/self-learning-math/issues/795, row `SGK-G0-EDITORIAL-HEADINGS-D6-NO-META-20261121`
**G2 SELF_QA:** P0=0, P1=0 for B27 editorial correction; G3 exact-final-head and G5 gh-pages proof gating until observed

## Owner correction, scope and editorial rationale

User supplied two screenshots on 21/11/2026:
1. The Knowledge §2.1 neutral formula frame had a long source-relative title “Công thức áp dụng — kết hợp kiến thức Bài 24 và Bài 26”, unnecessary meta sentence “cách vận dụng các công thức đã học, không phải một định nghĩa mới của SGK Bài 27”, and unintended extra line from generic `strong{display:block}` selector. The frame now has **short subject title** `Công thức tính xác suất bằng tổ hợp`, no meta prose, and only a direct-heading CSS selector `> strong`. All correct probability conditions/formulas remain.
2. Discovery §1.1/1.2/1.3 and Knowledge figure guide had conversational question-form headings (e.g. “Tại sao phải đọc hình như vậy?”). Revised to short noun labels: `Chọn nhóm không xét thứ tự`, `Rút thẻ theo nhiều lượt`, `Sử dụng biến cố đối`, `Hướng dẫn đọc sơ đồ cây`. §1.4/1.5 likewise book-style.
3. Official Knowledge §2.1/§2.2/§2.3 headings no longer append `(SGK mục ... tr ...)`; formal complement rule title no longer appends `(SGK)`; editorial eyebrow no publisher label `KNTT`. Exact S1 source provenance **still appears once at the footer** as approved.
4. All five first-try disclosures have exactly the canonical label **`Kiểm lỗi`**; error-specific title is now the first content paragraph `Lỗi cần kiểm:` BEFORE `Bước 1:`, not in disclosure title. All five closed `Đối chiếu` unchanged.
5. Removed other source/editor self-referential paragraphs (e.g. meta assertion an application “is not a new formal definition”); retain plain-language explanations of mathematical models and original worked-out content. All 6 worked examples, D6 tab, and same two placements of the one tree SVG remain.

**G0 prior-lesson scan:** B01–B26 canonical sources include historical question-style headings in several already accepted pages (e.g. B19/B21/B22/B26). Recorded as a single anti-repeat rule in Issue #795; **no edits** to owner-accepted B01–B26, no silent cross-lesson scope expansion or refiling of their P2 snapshots. Future scoped editorial review should distinguish pedagogical questions inside paragraphs (permitted) from conversational **headings/labels** (not permitted).

## G2 exact mathematical/assessment preservation

- Canonical Git blobs **R02 → R03** signed above, previous R01/R02 immutable. Original 78 LaTeX math occurrences **78/78 byte-equal as a multiset**, no removed formulas, conditions or math symbols. Changes are headings, editorial prose/meta, accordion label, and CSS selector only.
- All **5/5 original `Đối chiếu` disclosure bodies identical byte-for-byte**. Exactly five canonical `data-thpt-first-try-id` and seven `data-thpt-help-id` values unchanged, nine `data-thpt-formative-id` values unchanged. Five D6 paragraphs keep original Bước 1–Bước 5, exercises and correction links. No redistribution, no answer hints before voluntary reveal.
- Exactly one `thpt-g10-key-formula` neutral card in SGK Knowledge §2.1, same mathematics; exactly one source SVG (reused in Discovery and Knowledge §2.2), exactly one formal `thpt-r4-rule-card` in §2.3, zero invented concept cards, one final SGK/SBT footnote.
- Q16: untouched Core/Practice/Readiness/Final Submit, public CLIENT_SELF_CHECK_NO_MASTERY, private RD1, Firebase/Gemini/Auth and previous Golden. Scope only B27 canonical, one Q18 receipt, and existing Q18 source integrity guard; NO shared JS/CSS/runtime changes.
- G3: source check must assert **all 8 top-level subheadings/sections** clean of source/page suffix and question-form headings, exact 5 `??? tip "Kiểm lỗi"`, error description content before step 1, absence of meta text/source publisher headings, no textbook-style heading violation; Chromium 390/820/1440 MathJax/SVG/responsive/Q16.
- G5: merge only after exact-final-head release gates PASS; verify actual Pages HTML new blob, no source/page suffix in learner headings, 5 canonical Kiểm lỗi, original figures+answers, B26 published SHA unchanged; OWNER_P2 recheck remains pending.

**No new normative quality standard; this is only Q18 snapshot evidence under the ONE issue #795 ledger.**
