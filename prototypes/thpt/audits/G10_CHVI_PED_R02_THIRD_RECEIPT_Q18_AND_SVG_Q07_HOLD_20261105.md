# G10 SGK ChVI — Q18 source parity + Q07/PED4 SVG review HOLD after owner correction receipt

PACKET_ID: G10-SGK-CHVI-PED-BRIDGE-R02-20261105
AUDIT_ID: G10-CHVI-R02-Q18-Q07-POST-CORRECTION-20261105
ROLE: AUTHORING_ONLY
STATUS: REVIEW_SOURCE_RECEIPT_AND_SVG_Q07_HOLD
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
CANONICAL_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
CANONICAL_SOURCE_GIT_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
CANONICAL_SOURCE_UTF8_BYTES: 93198
CANONICAL_SOURCE_LF_COUNT: 812
CANONICAL_SOURCE_CRLF_COUNT: 0
REVIEWER_DECLARED_MOUNTED_GIT_BLOB: 116963cd526cc53877a3daeff70e9b7a591a3664
REVIEWER_DECLARED_MOUNTED_UTF8_BYTES: 92640
REVIEWER_DECLARED_MOUNTED_SHA256: 10cf8505a05770b0ca9ab16e37722a03b279a98814a6cb3c5ef59eb823d0dfef
REVIEWER_REPORTED_VERDICTS: ACADEMIC_PASS_19_19_PED_PASS_19_19_P0_P1_P2_0_0_0
REVIEWER_REPORTED_CORRECTED_R01_COUNTS: 28_CORE_PRACTICE_PLUS_8_WRITTEN_PLUS_18_CLIENT_CHAPTER_SELF_CHECK
CANONICAL_B17_OUT_03: THPT-G10-CHVI-TRY13
CANONICAL_B17_OUT_04: THPT-G10-CHVI-TRY14
HISTORIC_R01_PASS: PRESERVED
NEW_R02_SNAPSHOT_APPLIED_PASS: HOLD_PENDING_Q18_AND_Q07
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PRIVATE_RD1_NEW: 0

## Input source and result

On 2026-11-05 owner supplied a *third* NotebookLM message titled "BÁO CÁO ĐÍNH CHÍNH SOURCE RECEIPT VÀ XÁC NHẬN NGUỒN CHƯƠNG VI R02" plus a separate Studio-export MD attachment. The **complete readable owner message** states that mounted source `/workspace/knowledge/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md` is **92,640 UTF-8 bytes**, local SHA256 `10cf8505...`, mounted Git blob `116963cd...`. Remote canonical author source is explicitly acknowledged as `1e6a76ee...`, **93,198 UTF-8 bytes**. Reviewer says it could not reach GitHub remotely; nevertheless claims "100% semantic" match of 19 outcomes, 19 First Try, 19 HELP and two SVG.

The uploaded Studio-export MD is **not a byte-exact rendering of the readable owner report**: it has stripped code-font contents, IDs, hash values and many math symbols, so it must not be promoted as a complete cryptographic receipt. Its original uploader bytes can be audited separately via the conversation attachment. This audit preserves all material assertions faithfully without claiming it is a reviewer-origin cryptographic proof.

The previously delivered second NotebookLM report correctly matches all 19/19 outcome–First Try IDs and all reported maths answers of actual PR source. The current correction fixes the historic R01 ledger (54=28+8+18, not 48+6), source S1 printed page receipt, and B17_OUT_04=TRY14. This **preserves the reported independent 19/19 academic/PED PASS**, but does not close source parity or SVG visual audit.

## Objective unresolved evidence (Q18)

Author directly read the actual GitHub blob `1e6a76ee32b722b5e5457e85f90eb32f4d98b57d` at Draft PR #756. It is **93,198 bytes** with **812 LF and zero CRLF**. The mounted bytes reported as 92,640 differ by **558 bytes**; conversion from CRLF to LF cannot explain a *smaller* reported local copy when the canonical file is LF-only. The claimed mounted Git blob `116963cd...` is not accessible in this public repository (GitHub get_blob returns 404), whereas exact remote canonical source blob exists. Neither raw mounted file bytes nor an independently verifiable canonical-match hash was provided. The reviewer did not establish byte identity. Matching 19 item titles and example values is strong semantic evidence, but not sufficient to establish that 19 complete PED/D6 narratives and inline SVG XML bodies were all reviewed unchanged.

## Objective unresolved SVG descriptions (Q07 / Q12 PED4)

The actual **INLINE XML** in canonical Git source contains:
- `FIG-G10-CHVI-B15-01` XML `<title>`: **"Bài 15: Một đầu vào ứng với đúng một đầu ra"**. `<desc>` explicitly compares **A `(1;7),(3;2),(3;2)`** vs **B `(1;7),(3;2),(3;4)`**; this is a **single-valued function mapping diagram**, **NOT** a plot of domain/range, monotonicity or upward/downward movement.
- `FIG-G10-CHVI-B18-01` XML `<title>`: **"Bài 18: Kiểm điều kiện, bình phương rồi thử nghiệm gốc"**. `<desc>` describes two branches `√A=√B` and `√A=B`, sign/domain conditions, squaring and checking original equation; it is an **algebraic radical-solving flowchart**, **NOT** a geometric ladder or real-world distance-model diagram.

The newest reviewer correction instead describes B15 SVG as illustrating "tập xác định, tập giá trị và tính đơn điệu", and B18 SVG as "mô hình hóa bài toán thực tế quy về phương trình căn"; those descriptions materially differ from actual XML `title/desc` and graphical content. This does NOT establish that the original SVG is mathematically incorrect. It demonstrates that Q07/PED4 independent inspection of the **two actual new SVGs** has not yet been evidenced. Preserve all original source body and author QA PASS; do not assign P0/P1 without fresh scoped review.

## Minimal closure — reviewer may avoid repeating all 19 mathematics items

1. Owner must re-upload/download **only the frozen canonical Git source** `Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md`, actual Git blob `1e6a76ee...`, expected bytes **93,198**, *without Studio re-export/copy-paste transformations*. Obtain exact mounted byte SHA256 and Git blob computed from actual mounted bytes and compare to canonical original; if the mount normalization changes file bytes, provide actual source and a mechanical content diff showing no academic/PED/SVG XML changes.
2. Independently inspect the **two actual inline SVG XML blocks** at the same canonical source: quote the exact two `<title>` and describe their actual `<desc>` functions (B15 single-valued mapping comparison, B18 radical sign/squaring/verify-original flowchart). Return scoped `Q07/PED4` verdict for these two graphics and whether diagrams sufficiently support their 19 attached outcomes. Never claim a flowchart to be a geometric diagram.
3. Confirm `54=28+8+18`, `B17_OUT_03`→TRY13, `B17_OUT_04`→TRY14. If exact academic content source is equivalent after normalization, retain second reviewer 19/19 Academic/PED PASS with corrected source receipt, no full re-review. If not, review only materially affected new PED/TRY/HELP/SVG Delta C, **not** original frozen R01 54 items.

**Authoring gate:** `CONTENT_READY=NO` pending Q18 source provenance and Q07/PED4 media delta; keep PR #756 Draft, do not create FULL R03 ready manifest or release handoff until blockers cleared. Historical R01 Academic PASS is preserved. No release, deployment, student website changes, protected RD1 exposure or Skill Mastery.
