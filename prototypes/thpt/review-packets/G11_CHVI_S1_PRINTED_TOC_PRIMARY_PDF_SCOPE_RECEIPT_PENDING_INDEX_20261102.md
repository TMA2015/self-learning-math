# G11 SGK Chương VI — S1 primary-book text/TOC audit, 02/11/2026

**Scope:** AUTHORING Q01 preflight for `G11-SGK-CHVI-B18-B21-R01`. This is a **limited primary-text receipt**, **NOT** proof of PDF page-index/paper page visual parity, independent NotebookLM v2.1 PASS, or a release authorization.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
PACKET_ID: G11-SGK-CHVI-B18-B21-R01
LEARNING_PATH: SGK_CHAPTER
SGK_PRINTED_TOC_STATUS: MATCHED_PRIMARY_PDF_EXTRACTED_TEXT
SBT_PRINTED_TOC_STATUS: MATCHED_PRIMARY_PDF_EXTRACTED_TEXT
PDF_PAGE_INDEX_VISUAL_CHECK: NOT_VERIFIED_TOOL_SCREENSHOT_CACHE_MISS
FINAL_Q01_STATUS: HOLD_PENDING_SOURCE_PAGE_VISUAL_RECONCILIATION
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO

## S1 file provenance (primary books, not third-party lesson summaries)

**SGK**: publisher-labelled *TOÁN 11 TẬP HAI, Kết nối tri thức với cuộc sống*, Nhà xuất bản Giáo dục Việt Nam, authors Hà Huy Khoái et al. Source PDF text checked on 02/11/2026:
`https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf`.
The visible extracted front matter explicitly identifies **“Tái bản lần thứ ba”**. Because this is a 2026-hosted reprint and some historical author/reviewer citations date from earlier editions, **SOURCE_EDITION_PARITY=NOT_VERIFIED**. Do not silently substitute this 2026 PDF for the exact owner original S1.

**SBT**: publisher-labelled *BÀI TẬP TOÁN 11 – Tập hai, Kết nối tri thức với cuộc sống*, Nhà xuất bản Giáo dục Việt Nam, ISBN **978-604-0-34974-3**, title/copyright metadata **2023**, code `G1BHYT002H23`. Primary publisher-book PDF text checked:
`https://file.toan9.edu.vn/file-pdf/sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`.
The PDF extractor provided the original book TOC and chapter opening; it does not establish the exact PDF page index. No user-private Drive documents were copied or published.

## Printed chapter boundaries: verified text in the books' own tables of contents

| Unit | SGK printed page (start) | SBT printed page (start) | Printed-page range provisional to next start |
|---|---:|---:|---|
| B18 — Lũy thừa với số mũ thực | 4 | 4 | SGK 4–9; SBT 4–7 |
| B19 — Lôgarit | 10 | 8 | SGK 10–15; SBT 8–10 |
| B20 — Hàm số mũ và hàm số lôgarit | 16 | 11 | SGK 16–19; SBT 11–15 |
| B21 — Phương trình, bất phương trình mũ và lôgarit | 20 | 16 | SGK 20–24; SBT 16–19 |
| Bài tập cuối Chương VI | 25 | 20 | SGK 25–26; SBT 20–23 |
| Chương VII / B22 begins | 27 | 24 | chapter VI ends strictly before this boundary |

**SBT answer section:** SBT's original TOC explicitly says `LỜI GIẢI – HƯỚNG DẪN – ĐÁP SỐ` begins on printed page **73** and its **Chapter VI** section begins on printed page **73**; Chapter VII answers begin printed p86. Thus Chapter VI answers fall within **73–85** by next section boundary, **not** p117–134 (which would be a different edition/book). This is S1 original-book TOC evidence rather than a reviewer guess. Confirm first/last solution page visually at final review.

## Evidence vs remaining gaps

**VERIFIED:** publisher-labelled PDF readable text displays the book-specific contents, ISBN for SBT, ordered lesson starts, end-of-chapter boundary and SBT Chapter VI answer-section start. These match the lesson/outcome scope of the reviewed 22-outcome / 49-public-item G11 ChVI R01 source. This is a *metadata consistency check*, not a newly earned academic verdict.

**NOT VERIFIED:** screenshots/page images on the original SGK/SBT PDF failed with provider cache errors; exact PDF page indices (one-based) at start/end of each section were not obtained. No PDF byte checksum/file-size receipt or first-party user-owned original copy was obtained; there is no honest basis for claiming byte-identical book editions. Source source-owner edition match remains pending.

**Required minimal closure (Q01):** capture original SGK/SBT page images at printed 3/4, 7/8, 10/11, 15/16, 19/20, 23/24, 25/26 and SBT answer p73/p85/p86, record actual one-based PDF page indices and original file SHA256, verify edition parity. If only source-page/edition metadata is corrected while all approved mathematics remains fixed, classify `DELTA_B_SOURCE_EQUIVALENT` and document parity. If S1 scope mathematically differs, `DELTA_D_BLOCKER` pending review of affected scope. Preserve the historical R01 Academic and PED PASS on their exact originally reviewed sources.

## Authoring boundaries

- Original independent reviewer file and postpass Delta_B source preserved; no re-review requested by this metadata-only receipt.
- Private 22 RD1 items, answers and rubrics remain outside GitHub; no Mastery or Final Submit official assessment.
- V2 `ready/` manifest and REGISTER promotion are **not** authorized until Q01 is closed.
