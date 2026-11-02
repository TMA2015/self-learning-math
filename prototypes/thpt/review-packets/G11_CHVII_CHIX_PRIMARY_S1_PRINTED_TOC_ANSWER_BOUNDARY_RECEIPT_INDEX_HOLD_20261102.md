# G11 ChVII–ChIX — direct original SGK/SBT printed-TOC receipt and answer-boundary conflicts (02/11/2026)

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
RECEIPT_SCOPE: G11_SGK_CHVII_CHVIII_CHIX
SOURCE_CLASS: ORIGINAL_PUBLISHER_LABELLED_BOOK_PDF_TEXT_TOC_ONLY
PRINTED_TOC_CHECK: CONFIRMED_EXTRACTED_PRIMARY_TEXT
PDF_INDEX_VISUAL_CHECK: HOLD_CACHE_MISS
SOURCE_EDITION_PARITY: HOLD
ACADEMIC_SOURCE_CHANGES: NONE
RELEASE_AUTHORIZATION: NO

## 1. Source identity and evidence limitations

- **SGK**: *TOÁN 11 TẬP HAI, Kết nối tri thức với cuộc sống*, Nhà xuất bản Giáo dục Việt Nam; the accessible PDF front matter says **(Tái bản lần thứ ba)**, original book PDF link https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf .
- **SBT**: *BÀI TẬP TOÁN 11 TẬP HAI, Kết nối tri thức với cuộc sống*, Nhà xuất bản Giáo dục Việt Nam, **ISBN 978-604-0-34974-3**, publishing metadata 2023, original book PDF link https://file.toan9.edu.vn/file-pdf/sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf .
- Read directly the **printed book's own TOC** and source metadata on 02/11/2026. Web PDF page screenshot calls on *both original book links* returned **Cache miss**; local HTTP fetch has no DNS access. Therefore **no actual printed-page image↔one-based PDF page-index mapping, PDF byte SHA256 or owner-edition raw-file parity has been observed**. Do not record an invented offset or image observation.

## 2. Original SGK/SBT printed lesson boundaries

| Scope | SGK printed p (start) | SBT printed p (start) |
|---|---:|---:|
| ChVII B22 | 27 | 24 |
| B23 | 31 | 26 |
| B24 | 38 | 29 |
| B25 | 44 | 31 |
| B26 | 54 | 35 |
| B27 | 61 | 38 |
| Final ChVII | 64 | 41 |
| ChVIII B28 | 66 | 44 |
| B29 | 72 | 47 |
| B30 | 76 | 49 |
| Final ChVIII | 79 | 51 |
| ChIX B31 | 81 | 54 |
| B32 | 88 | 58 |
| B33 | 95 | 61 |
| Final ChIX | 97 | 63 |
| End-year SGK experiences 1 | 99 | Not applicable — SGK-specific |
| End-year SGK experiences 2 | 102 | Not applicable — SGK-specific |
| End-year SGK final revision | 105 | SBT annual-revision begins p66 |

The book TOC gives **printed section starts**. Individual end-pages are **boundary-derived provisional**, not visually certified. SGK 99–109 are outside B31–B33 and must not silently be called covered by Chapter IX alone.

## 3. SBT exact answer TOC conflicts to resolve (not mathematical revisions)

In the SBT 2023 original TOC, section **LỜI GIẢI – HƯỚNG DẪN – ĐÁP SỐ** begins **printed p73**; subsection starts:
- ChVI: **p73**; ChVII: **p86** ⇒ ChVI lies before p86 (p73–85 by next-section boundary).
- ChVII: **p86**; ChVIII: **p103** ⇒ ChVII lies before p103 (p86–102 by boundary). Earlier #693 reviewer receipt says **p86–103**, overlapping ChVIII start. Treat p103 as ChVIII start, not ChVII confirmed last answer page.
- ChVIII: **p103**; ChIX: **p111** ⇒ ChVIII lies before p111 (p103–110 by boundary). Earlier #694 receipt/manifest says **p135–146**, contradicted by primary TOC in this SBT edition.
- ChIX: **p111**; book-printed last answer page not conclusively verified from TOC; earlier #695 reviewer reports **p111–125**. Mark only **start p111 VERIFIED_BY_PRIMARY_TOC**, end p125 **REVIEWER_REPORTED_NOT_VISUALLY_CHECKED**.

**Impact classification:** source-page/provenance evidence discrepancy, *not* a demonstrated error in the original reviewed student-facing Public R01/R00, private held-out RD1, mathematical key or rubric. Preserve independent NotebookLM historical Academic/PED PASS on exact original source blobs. Any metadata correction pending original-book edition and page screenshot is candidate `DELTA_B_SOURCE_EQUIVALENT` author evidence; if actual S1 mathematical outcome conflicts occur, stop with `DELTA_D_BLOCKER` and targeted C review after author correction.

## 4. Q01 closure test

For exact owner S1 (not an assumed third-party scan equivalence), inspect PDF page images at printed starts and boundaries B22 p27/B23 p31; B28 p66, B30 p76, final ChVIII p79; B31 p81, end ChIX p98, annual sections p99/p102/p105; original SBT printed p85/86, p102/103, p110/111 and end ChIX solution. Record each **book printed p**, **PDF one-based page index**, title/edition, file SHA256 and source receipt. If these pass and content remains source-equivalent, close Q01 and sign V2. Otherwise leave `BLOCKED_BY_AUTHORING`. Screenshot/byte errors are not technical-release AP blockers; they are authoring S1 Q01 provenance blockers.

## 5. Privacy and release

No protected RD1 stems/keys/rubrics, student data, website, Mastery, Final Submit functionality, or deployment in this receipt. Grade-wide owner hold remains active until all ChI–ChIX + end-year SGK completeness and R/AP gates are separately approved.
