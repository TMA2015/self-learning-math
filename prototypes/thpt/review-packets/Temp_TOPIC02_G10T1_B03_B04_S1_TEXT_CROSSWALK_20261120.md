# CĐ02 · SGK Toán 10 KNTT Tập 1 Bài 3–4 — S1 text crosswalk 20/11/2026

**AUTHORING evidence only · no learner edit / release.**

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
PACKET_ID: TOP02-G10T1-B03-B04-DEEP-S1-TEXT-CROSSWALK-20261120
SOURCE_SCOPE: SGK Toán 10 KNTT Tập một Bài 3 “Bất phương trình bậc nhất hai ẩn” (printed opening p.22); Bài 4 “Hệ bất phương trình bậc nhất hai ẩn” (printed opening p.26). Remaining printed ends/PDF page indices NOT asserted.
CONTENT_PATH: prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md
CONTENT_BLOB: 6c975c6f19c11193fad7546cebccb27a9bcbcd2b
CONTENT_READY_HISTORY: PRESERVED_Q18_SELF_VERIFIED
REVIEW_MODE: TARGETED_AUTHOR_SOURCE_TEXT_CROSSWALK
S1_ACCESS: ONLINE_DIGITIZED_SGK_TRANSCRIPTION_OLM_AND_SGKVN_PLUS_BOOK_TOC
ORIGINAL_SGK_PDF_PAGE_IMAGE_READ: NO
PDF_INDEX_VERIFIED: NO
SOURCE_TEXT_STATUS: B03_B04_TEXT_SCOPE_CHECKED_NOT_FULL_ORIGINAL_PAGE_VISUAL_AUDIT
SOURCE_BLOCKER: NO_CONFIRMED_MISSING_MANDATORY_KNOWLEDGE_IN_THIS_TEXT_COMPARISON
RELEASE_AUTHORIZATION: NO

## Sources actually accessed

- SGK digital transcription: https://olm.vn/thu-vien-so/doc-sach/shs-toan-tap-1.4491362330
- SGKVN reproduced Bài 4 text (including vertex optimum description): https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ii-bat-phuong-trinh-va-he-bat-phuong-trinh-bac-nhat-hai-an-3096/bai-4-he-bat-phuong-trinh-bac-nhat-hai-an-11152.html
- Book ToC: https://metaisach.com/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-063a9c1c

Text themes actually confirmed: linear inequalities in two variables, feasible half-plane with boundary rules, intersection of half-planes in a system, applied constraints, linear objective extremum attained at a polygon vertex. Sources here are digital reproductions rather than direct original scans.

## Affected outcome-by-meaning matrix

| B03/B04 knowledge/action | Topic mapping | Present learner evidence | Finding |
|---|---|---|---|
| Linear inequality two variables, nonzero (a,b), solutions as ordered pairs | TOP02-M09 / O09 | Four signs, (a,b)≠(0,0), degenerate single coefficient case | PRESENT_EXPLICIT |
| Identify correct half-plane via off-boundary test | TOP02-M10 / O10 | Method, test origin caveat when boundary passes origin, worked example | PRESENT_EXPLICIT |
| Boundary included for weak signs and excluded for strict signs | TOP02-M11 / O11 | Straight-line boundary, strict vs non-strict, sign reversal, SVG | PRESENT_EXPLICIT |
| Translate real constraints and measurement/integer domains | TOP02-M12 / O12 | Model x,y, units, nonnegative integers for countable stock | PRESENT_EXPLICIT |
| Solution of a system must satisfy all, intersection not union | TOP02-M13 / O13 | Formal definition, intersection of half-planes, triangle example | PRESENT_EXPLICIT |
| Feasible set may be empty or unbounded, edge case is separate from bounded-polygon optimum | TOP02-M14 / O14 | Explicit examples x+y≤2 with x+y≥5, and unbounded orthant F=-x-y | PRESENT_EXPLICIT_SUPPORT_EXTENSION |
| Bounded nonempty polygon, linear objective max/min at an extreme vertex; may achieve same value along an edge | TOP02-M15 / O15 | Four-vertex region worked example, F values, flat-edge first try | PRESENT_EXPLICIT |
| Integer-feasible objective not automatically equal to relaxed continuous optimum | TOP02-M16 / O16 | Explicit integer-domain teaching, modeled real-word constraint | PRESENT_EXPLICIT_EXTENSION_NOT_MANDATORY_B03_B04_CORE |

The first eight outcomes O01–O08 originate chiefly from other mathematical scope including G10 T2 B17; this receipt does not re-audit them.

## Independent arithmetic/context checks

- For x≥0,y≥0,x+y≤6,2x+y≤8: vertices O(0,0), A(4,0), B(2,4), C(0,6); F=3x+2y evaluates 0,12,14,12 => maximum 14 at B.
- With x≥0,y≥0,x+y≤5,2x+y≤6: vertices (0,0),(3,0),(1,4),(0,5), and F values 0,9,11,10 => max 11 at (1,4). No confusion with the separate SVG region for max 14.
- x-2y>3: (4,0) is a strict solution; (1,-1) lies on excluded boundary; O is off-boundary and fails. \`2x-y<1\` equivalent to y>2x-1. Strictness and inequality reversal checked.

## Disposition

**8/8 scoped lesson rows mapped, 3/3 independent numerical/logic checks pass**, within available digital textbook text. No learner/content Delta C found. Preserve existing learner SHA, self-Q18, A1/V2/ready/REGISTER and all canonical questions and RD1 boundaries. Do **not** call this a verified original printed-page scan or full independent Topic PASS; retained Issue #928 original page-image verification remains open.
