# TOP19 / PLAN22-19 · DIRECT ORIGINAL S1 SGK/SBT PDF VISUAL RECEIPT — 14/11/2026

**AUTHORITY: actual owner-connected ORIGINAL scans from Google Drive, not public summary websites, other author receipt or an OCR guess.** Google Drive file IDs are custody pointers; original page contents were inspected by directly rendering images of the relevant pages (no OCR), then reading printed labels in image.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
ACADEMIC_SCOPE: G10 KNTT Tập Hai ChVIII B23–B25 + Bài tập cuối chương
SOURCE_REVIEW_MODE: DIRECT_ORIGINAL_PDF_PAGE_VISUAL
PDF_PAGE_OFFSET_RULE: zero_based_pdf_index = actual_printed_page_number (verified at multiple chapter boundaries in BOTH PDFs)
NEW_AUTHOR_Q18_VERDICT: NOT_SIGNED
OLD_GITHUB_S1_RECEIPT_STATUS: CONFLICTING_PAGE_LABELS_SUPERSEDED_FOR_TOPIC19_BY_DIRECT_ORIGINAL_SCAN

## Direct original scan and SHA-256

| Authority | Drive item ID / exact original filename | PDF bytes / page count | SHA-256 |
|---|---|---|---|
| SGK Toán 10 Kết nối tri thức Tập Hai | `1v28SYkWsnxg9qUmn-JEmYaEDcCdZWJgf`, `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 21,979,142 bytes / 102 pages, scanned image-only | `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6` |
| SBT Toán 10 Kết nối tri thức Tập Hai | `1Ca0XQ7KGuZWViVg2LOru3CoQ1UsFpd4P`, `sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf` | 16,249,440 bytes / 143 pages, scanned image-only | `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` |

**Page mapping:** both original scans have PDF p(1-based)=printed p+1 (for example SGK printed60 corresponds PDF page61 / zero-based index60; SBT printed51 to PDF page52 / index51). This was visually confirmed by inspecting the bottom printed numbers on pages at the entry of B23/B24/B25/end chapter, not assumed from cover count.

| Unit | SGK printed exact | SGK PDF page 1-based | SBT printed exact | SBT PDF page 1-based | Actual title / content observed |
|---|---|---|---|---|---|
| G10-ChVIII · Bài 23 Quy tắc đếm | **60–65** | 61–66 | **51–53** | 52–54 | Quy tắc cộng cho các phương án loại trừ/không trùng; quy tắc nhân cho công việc nhiều bước; sơ đồ hình cây; số/mật khẩu có điều kiện |
| G10-ChVIII · Bài 24 Hoán vị, chỉnh hợp, tổ hợp | **66–71** | 67–72 | **54–55** | 55–56 | Xếp mọi đối tượng có thứ tự, chọn có phân vai, chọn nhóm không thứ tự, giai thừa/hoán vị/chỉnh hợp/tổ hợp, áp dụng ràng buộc |
| G10-ChVIII · Bài 25 Nhị thức Newton | **72–75** | 73–76 | **56–57** | 57–58 | Khai triển (a+b)^4 và (a+b)^5 bằng tổ hợp; chọn vị trí sinh hệ số; bài SGK 8.15–8.16 ước lượng bằng **hai số hạng đầu** của (1+r)^5; SBT 8.16 có biểu thức dạng x+2/x là dạng tham khảo mở rộng |
| Bài tập cuối ChVIII | **76** | 77 | **58–60** | 59–61 | Bài tổng hợp đếm, tổ hợp, Newton; chỉ dùng câu public/self-check, không lấy lại nguyên stem SBT vào ngân hàng công khai |
| Bắt đầu ChIX (giới hạn loại trừ) | **77** | 78 | **61** | 62 | Xác suất cổ điển; không trộn vào Topic19 |

## Conflict and remediation

1. Existing `main` historical visual receipt `prototypes/thpt/THPT_G10_CHVIII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md`, Git blob `a989cda41a4de81f7e676fb97c2a0a8095a10b8a`, says printed **B23 p59, B24 p65, B25 p72, end p78–79** and SBT B23 p50 etc. The source labels in its erratum are **not accurate for THESE owner original PDF bytes**. Actual original scanned image SGK PDF page61 clearly shows **Bài23 and footer p60**, PDF page67 **Bài24 footer p66**, PDF page73 **Bài25 footer p72**, PDF page77 **end chapter footer p76**, PDF page78 **ChIX footer p77**. SBT PDF page52 begins B23 footer p51, PDF page55 B24 footer p54, PDF page57 B25 footer p56, PDF page59 end footer p58 and PDF page62 starts ChIX footer p61.
2. Multiple third-party table-of-contents mirrors independently say the same present verified **SGK** page ranges 60–65,66–71,72–75, end76, but these are **not relied upon as original S1**. Actual original PDF has precedence for this authoring revision. Do not edit/erase old Git source PASS or prior S1 receipt silently; this new receipt records page-correction provenance and acts as the new exact R01 direct S1 proof.
3. Mandatory **outcome identified by actually observed SGK** on p60: apply add/multiply and a tree diagram. **Important additional B25 scope** seen on SGK printed75: task 8.15 approximates (1+0.02)^5 from two early terms; 8.16 models population after five years with (1+r/100)^5. The original Topic R01 twelve-outcome candidate **omitted** this application family; it **must be added as a NEW Core application outcome** (new T/P with D6) before Q02/Q05 could PASS. This is an academic material `DELTA_C`, not a cosmetic page edit.
4. SBT printed57 actually has 8.16 involving (x+2/x)^4, which supports **reference exercise classification only** for powers containing 1/x. Keep such material marked OPTIONAL_ADVANCED instead of making it mandatory SGK B25 Core. SBT first x=0 exclusion is mathematically required.
5. The original G10 ChVIII 25 public formative canonical item definitions in `docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js`, Git blob `2ae62fada28913ec336b3507684408a1e05a3232`, remain unchanged; new Topic may reuse their `item_id` through placement pointers, but `SGK_PUBLIC_FORMATIVE_ONLY` PASS/reviewer scope cannot become independent Topic PASS.
6. Source Scope acceptance for Topic19: original SGK/SBT scanned pages verified **by actual pixel rendering**, but source needed one new B25 application outcome and direct line-by-line math/PED audit of all new items on the final candidate before any signed Q18/V2/ready/REGISTER. No release, deploy or official exam.

**Footer/image evidence:** materialized originals were read only in this authoring conversation; the public repo stores **provenance metadata and SHA256 only**, not scanned textbook image pages or copyrighted source PDF. No OCR. No protected RD1 information.
