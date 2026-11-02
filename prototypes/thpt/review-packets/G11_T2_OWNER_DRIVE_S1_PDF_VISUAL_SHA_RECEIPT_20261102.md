# G11 KNTT Tập Hai — owner Drive original SGK/SBT direct page-image + SHA256 S1 receipt

**Audit date:** 02/11/2026. **Scope:** AUTHORING Q01 and metadata DELTA_B for G11 SGK Chapters VI–IX and original end-year SGK material. This is **author-side primary-file inspection**, NOT a new independent NotebookLM Academic or Ped verdict, not release approval.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
S1_PROVENANCE: USER_CONNECTED_GOOGLE_DRIVE_FOLDER_KNTT_TOAN_11
ORIGINAL_FILE_CONTENT_FINGERPRINTS: COMPUTED_LOCAL_SHA256
PRINTED_PAGE_TO_PDF_INDEX_VISUAL_PARITY: VERIFIED
REVIEW_STATUS: ORIGINAL_HISTORICAL_ACADEMIC_PED_PASS_UNCHANGED
PUBLIC_PRIVATE_RD1_BOUNDARY: PROTECTED_NO_TEST_CONTENT_IN_PUBLIC_REPO
RELEASE_AUTHORIZATION: NO

## 1. Exact original input files (PRIVATE SOURCE FILES NOT COMMITTED)

- **SGK:** `sach-giao-khoa-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf`; size **18,642,213 bytes**, **114 PDF pages**, SHA256 **`14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`**. Publisher front matter *TOÁN 11 TẬP HAI KNTT*, visually inspected; watermark present. Original PDF source from user's connected Drive folder named `KNTT TOAN 11`; do not put its file id, private link or book pages in GitHub.
- **SBT:** `sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`; size **20,297,100 bytes**, **126 PDF pages**, SHA256 **`a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`**. NXB Giáo dục Việt Nam, *BÀI TẬP TOÁN 11 TẬP HAI KNTT*, publishing metadata 2023 visible on front matter.
- Tooling: `pdfinfo` verified PDF page count, SHA256 computed over exact downloaded original PDF bytes, `PyMuPDF` rendered actual scan page images, visual contact-sheet inspection compared book-printed footer/section heading versus one-based PDF page index. Both files are **image-only scans** (no embedded selectable PDF text), so no OCR was assumed; no inferred footer from a PDF text extractor.
- **Critical explicit relation:** for all sampled original content pages, **one-based PDF page index = printed book page + 1**; e.g. printed p4 = PDF index 5, p73 = index74, p103 = index104, p111 = index112. The PDF cover/title/TOC occupy the earlier indexes. The below rows were checked against the book TOC and rendered chapter/lesson/answer start images. This relationship should not be generalized to unrelated volumes without independent comparison.

## 2. SGK original printed→one-based PDF page-index
| Original S1 TOC unit | Printed page | PDF page index (one-based) |
|---|---:|---:|
| ChVI B18 | 4 | 5 |
| B19 | 10 | 11 |
| B20 | 16 | 17 |
| B21 | 20 | 21 |
| End VI | 25 | 26 |
| ChVII B22 | 27 | 28 |
| B23 | 31 | 32 |
| B24 | 38 | 39 |
| B25 | 44 | 45 |
| B26 | 54 | 55 |
| B27 | 61 | 62 |
| End VII | 64 | 65 |
| ChVIII B28 | 66 | 67 |
| B29 | 72 | 73 |
| B30 | 76 | 77 |
| End VIII | 79 | 80 |
| ChIX B31 | 81 | 82 |
| B32 | 88 | 89 |
| B33 | 95 | 96 |
| End IX | 97 | 98 |
| Exp models | 99 | 100 |
| Exp geometry | 102 | 103 |
| Annual revision | 105 | 106 |
| Glossary | 110 | 111 |

SGK original experiences and review **are separate from ChIX B31–B33**: pp99–101 real exponential/log models, pp102–104 spatial geometry practice, pp105–109 all-year review; terminology pages follow. Do not invent a Chapter X. Preserve the same G11 SGK route.

## 3. SBT original printed→one-based PDF page-index
| Original S1 TOC / visually confirmed start | Printed page | PDF page index (one-based) |
|---|---:|---:|
| ChVI B18 | 4 | 5 |
| B19 | 8 | 9 |
| B20 | 11 | 12 |
| B21 | 16 | 17 |
| End VI | 20 | 21 |
| ChVII B22 | 24 | 25 |
| B23 | 26 | 27 |
| B24 | 29 | 30 |
| B25 | 31 | 32 |
| B26 | 35 | 36 |
| B27 | 38 | 39 |
| End VII | 41 | 42 |
| ChVIII B28 | 44 | 45 |
| B29 | 47 | 48 |
| B30 | 49 | 50 |
| End VIII | 51 | 52 |
| ChIX B31 | 54 | 55 |
| B32 | 58 | 59 |
| B33 | 61 | 62 |
| End IX | 63 | 64 |
| Annual revision | 66 | 67 |
| Solution ChVI | 73 | 74 |
| Solution ChVII | 86 | 87 |
| Solution ChVIII | 103 | 104 |
| Solution ChIX | 111 | 112 |
| Solutions annual revision | 117 | 118 |
| End PDF content | 124 | 125 |

**Primary-book answer ranges confirmed by rendered original pages and the first page of the NEXT original answer section:**
- ChVI answers **printed p73–85**, PDF indices **74–86**; printed p86/PDF87 starts ChVII answers.
- ChVII answers **printed p86–102**, PDF indices **87–103**; printed p103/PDF104 starts ChVIII answers.
- ChVIII answers **printed p103–110**, PDF indices **104–111**; printed p111/PDF112 starts ChIX answers.
- ChIX answers **printed p111–116**, PDF indices **112–117**; printed p117/PDF118 begins **BÀI TẬP ÔN TẬP CUỐI NĂM** answer section.
- Annual review answers **printed p117–124**, PDF indices **118–125**. Last page PDF126 is book's back cover, *not* a printed p125 solution page.

## 4. Historical-source conflict ledger and safe DELTA classification

| Earlier claimed reviewer/page receipt | Verified original owner SBT T2 | Effect on academic content |
|---|---|---|
| #692 ChVI solutions p117–134 | **p73–85** | Historical report pagination conflict; source/answer/solution mathematics in unchanged Public R01 + protected RD1 remains as reviewed; author receipt Delta_B source citation only |
| #693 ChVII solutions p86–103 | **p86–102**; p103 starts VIII | End boundary off by one in old report; author receipt Delta_B only |
| #694 ChVIII solutions p135–146 | **p103–110** | Contradicts original book TOC and rendered p103/p111 headers; Delta_B metadata only, no reissue of NotebookLM PASS |
| #695 ChIX solutions p111–125 | **p111–116**; annual answers start p117 | Old section end extended across other answer section and to back cover; Delta_B metadata only |

**Classification:** `DELTA_B_SOURCE_EQUIVALENT` for source-page/edition receipt corrections verified using the owner-connected primary SBT/SGK PDFs and unchanged canonical question/answer/rubric source. This proves primary-file pagination and the old report's pagination mismatch; **it does not prove** NotebookLM selected precisely the same PDF *bytes* in the historical review (older selected-file fingerprints were not supplied), nor issue a new independent academic verdict. If new material mathematical differences are found, escalate impacted source to `DELTA_C_ACADEMIC_MATERIAL` and NotebookLM affected-scope review. Historic owner-supplied Academic/PED verdicts remain bound to original Git blob(s).

## 5. Next gated steps

ChVII–IX V2 authoring handoffs may now cite this Q01 source receipt and close their **direct page-index** HOLD. Still require their own composite review receipt explicitly naming the locked PUBLIC source Git blob and originals, all Q01–Q18 evidence, single canonical V2 ready/manifest/REGISTER row, exact-head QA. Full Grade 11 publication must additionally clear ChVI packet and remaining p99–109 SGK work, then separate RELEASE AP1–AP5/R1–R5 and explicit owner permission. No private RD1 bodies/keys/rubrics uploaded to GitHub.
