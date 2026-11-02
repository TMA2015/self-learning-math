# G11 KNTT SBT Tập 1 — AUTHORING primary-S1 PDF pagination receipt and correction (ChII–ChIV)

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
RECEIPT_SCOPE: Q01/A2 SOURCE_PAGINATION_ONLY
AUTHORING_S1_STATUS: VERIFIED_DIRECT_FROM_BOOK_SCAN
DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT (citation metadata; not math/exercises/answers/rubrics)
PDF_BOOK_TITLE: Bài tập TOÁN 11 — TẬP MỘT — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG, Nhà xuất bản Giáo dục Việt Nam
PDF_ACCESS_LINK: https://drive.google.com/file/d/1kHxzntCDRDzPrPLncZkpsPIlXw0qzuPQ/view
PDF_ACCESS_KIND: public_shared_original_page_images (not generated prose or third-party answer summary)
PDF_FILE_NAME: SBT TOÁN 11 TẬP 1 - KNTT.pdf
PDF_FILE_BYTES: 25481639
PDF_PAGE_COUNT: 154
PDF_FILE_SHA256: fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229
SOURCE_CONTENT_INSPECTION: actual scanned book pages rendered and visually checked, not OCR; copyright PDF bytes and screenshots are not uploaded to the public GitHub author branch

## Printed-page versus PDF-index control

1-based PDF page #1 is the printed book cover without printed page number. Observed **PDF #4 = printed page 3 (MỤC LỤC)**, **PDF #32 = printed 31 (B05/ChII)**, **PDF #41 = printed 40 (end ChII exercises begin)**, **PDF #45 = printed 44 (B08/ChIII begins)**, **PDF #48 = printed 47 (B09 begins)**, **PDF #54 = printed 53 (B10/ChIV begins)**, **PDF #75 = printed 74 (ChIV end exercises)**, **PDF #118 = printed 117 (ChII answer section)**, **PDF #131 = printed 130 (ChIV answer section)**, and **PDF #146 = printed 145 (ChV answers begin)**. Page labels and heading images independently cross-checked at these anchors. The following `PDF_PAGE_INDEX_1_BASED = PRINTED_PAGE + 1` holds on the verified contiguous printed sections; **not an assumed universal offset for arbitrary scans**.

## Corrected, direct printed SBT page map (source is Table of Contents on PDF #4 plus observed chapter headers/transitions)

| Section | PRINTED_PAGE_START_END | PDF_PAGE_INDEX_1_BASED | PREVIOUS_OWNER_NOTEBOOKLM_REPORTED | Q01/A2 |
|---|---|---|---|---|
| ChII B05 Dãy số | 31–34 | 32–35 | 31–36 | CORRECTED |
| ChII B06 Cấp số cộng | 35–36 | 36–37 | 37–40 | CORRECTED |
| ChII B07 Cấp số nhân | 37–39 | 38–40 | 41–45 | CORRECTED |
| ChII Bài tập cuối chương | 40–43 | 41–44 | 46–49 | CORRECTED |
| ChIII B08 Mẫu số liệu ghép nhóm | 44–46 | 45–47 | 44–46 | MATCH |
| ChIII B09 Các số đặc trưng đo xu thế trung tâm | 47–49 | 48–50 | 47–49 | MATCH |
| ChIII Bài tập cuối chương | 50–52 | 51–53 | 50–52 | MATCH |
| ChIV B10 Đường thẳng và mặt phẳng | 53–55 | 54–56 | 65–71 | CORRECTED |
| ChIV B11 Hai đường thẳng song song | 56–59 | 57–60 | 72–76 | CORRECTED |
| ChIV B12 Đường thẳng và mặt phẳng song song | 60–63 | 61–64 | 77–80 | CORRECTED |
| ChIV B13 Hai mặt phẳng song song | 64–67 | 65–68 | 81–86 | CORRECTED |
| ChIV B14 Phép chiếu song song | 68–71 | 69–72 | 87–91 | CORRECTED |
| ChIV Bài tập cuối chương | 72–74 | 73–75 | 92–95 | CORRECTED |

**Strong physical boundary proof:** PDF #41 / printed 40 shows end of B07 and a new heading `BÀI TẬP CUỐI CHƯƠNG II`. PDF #45 / printed 44 shows a **whole new Chapter III / Bài 8 heading**; there are no intertwined ChII-final exercises on printed 46–49. PDF #54 / printed 53 shows `CHƯƠNG IV / BÀI 10`. Thus the previous owner's NotebookLM R02 assertion that ChII-final begins at 46–49 and ChIV at 65 is **refuted by direct book pages**, not resolved through a shared p44–45.

## Corrected SBT LỜI GIẢI – HƯỚNG DẪN – ĐÁP SỐ printed pages

| Section | PRINTED SOLUTION PAGES | PDF PAGE INDEX 1-BASED | Basis |
|---|---|---|---|
| ChII B05 | 117–119 | 118–120 | TOC #4, solutions at PDF #118 |
| ChII B06 | 120–121 | 121–122 | TOC #4, PDF #121 |
| ChII B07 | 122–124 | 123–125 | TOC #4, PDF #123 |
| ChII cuối chương | 125–127 | 126–128 | TOC #4, PDF #126 |
| ChIII B08 | 128 (shared heading) | 129 | TOC #4, PDF #129 |
| ChIII B09 | 128 (same printed page as B08) | 129 | TOC #4, PDF #129 |
| ChIII cuối chương | 129 | 130 | TOC #4, PDF #130 |
| ChIV B10 | 130–132 | 131–133 | TOC #4, PDF #131 |
| ChIV B11 | 133–135 | 134–136 | TOC #4, PDF #134 |
| ChIV B12 | 136–137 | 137–138 | TOC #4, PDF #137 |
| ChIV B13 | 138–140 | 139–141 | TOC #4, PDF #139 |
| ChIV B14 | 141 | 142 | TOC #4, PDF #142 |
| ChIV cuối chương | 142–144 | 143–145 | TOC #4, PDF #143 |
| ChV begins | 145 | 146 | TOC #4, PDF #146: boundary sanity check |

## Independent source and delta consequences

- Existing owner NotebookLM report `G11-CHII_CHIII_CHIV-PED-DELTA-C-R02-BATCH-20261102` is stored **unmodified** at `prototypes/thpt/review-packets/G11_CHII_CHIII_CHIV_PED_R02_OWNER_NOTEBOOKLM_VERDICT_20261102.md`. It correctly returns `CHII_PED_VERDICT=PASS`, `CHIII_PED_VERDICT=PASS`, `CHIV_R02_PED_VERDICT=PASS`, `P0=P1=P2=0` in its **PED scope** but has a **false SBT printed-page receipt**. Do not falsify/rewrite that report; supersede only its page metadata with this verified original S1.
- R01 independently reviewed mathematical content, items, answer keys, written rubrics, original SVG and protected RD1 are unchanged. The corrected book-page references do **not** alter a single problem condition, item ID, answer, reasoning step or student's assessment boundary. New canonical source with citation-only correction is source-equivalent under `DELTA_B_SOURCE_EQUIVALENT` per Project Source 07 v1.1, **not a reason to send a whole-chapter Academic/PED review again**. Need exact old-new Git blob parity evidence in chapter's own handoff.
- The owner NotebookLM report was generated with five Permanent Sources v2.0 historically; current official five Permanent Sources v2.1 apply to future reviews. This exact primary S1 page read is **AUTHORING direct check**, no invented NotebookLM post-hoc verdict.
- Public GitHub contains only these small printed-page ranges, SHA, and tool provenance; **not the PDF's copyrighted pages nor the protected 19/21/22 RD1 questions**.
