# G10 Chapter IV B08 R04 — owner-approved 3+1 semantic and mathematics source-lock

**PACKET_ID:** `G10_CHIV_B08_OWNER_P2_SEMANTIC_3PLUS1_R04_20261117`
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.2.0`
**LESSON_ID:** `G10-CHIV-B08` · **ISSUE:** `#795 B08-F01 / G10-SEM-01`
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` + `DELTA_A_UI`
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` (not independent NotebookLM PASS)
**S1:** SGK Toán 10 KNTT tập 1, B08, printed pp51–54 per R02 receipt; secondary reproduction cross-check 17/11/2026, **original publisher PDF cover/index not reopened** (`SOURCE_SCAN_AUTHORITY_PENDING`). No new SGK page assertions.
**BASELINE_R03_SOURCE_BLOB:** `9cf96a0e81bea14903a64385359f738145e5a048`
**R04_SOURCE_BLOB:** `22e53396caf7753e813c492615a491e1f24cc9fd`
**BASELINE_R05_B07_CSS_BLOB:** `2aaaa262a1e3fe8195ab507bad2f08302302341e`
**R04_CSS_BLOB:** `0cdc618cf9a070f1b1ed50566877f5de0d025ee8`
**PREVIOUS_STANDARD_BLOB:** `5a80b20ce99be3179d03d56a73fa57b6f4882fd8`
**R04_STANDARD_BLOB:** `24f744b5d9f114d053b6e2e1ab8a0fb26c3fab39`
**STANDARD_CHANGE_REQUEST:** `prototypes/thpt/standard-changes/SLM_THPT_QUALITY_ONE_SCR_3PLUS1_20261117.md`
**PREVIOUS_R03_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md`
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-8.md`
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`
**SCOPE:** B08 §2.1 and §2.2 only; other three Golden tabs and B01–B07 immutable.

## G0 — defects and history intake

Owner screenshot 17/11/2026 proves B08 has 2.1.1 “Định nghĩa tổng” in heading but unboxed definition, and “Quy tắc ba điểm” as amber box. Source contains the correct `concept-card` marker on three 2.x statements but CSS did not target B08. This is both semantic classification clarity and rendered-CSS scope defect, NOT an excuse to infer class from a heading keyword alone. All source and UI work belongs to master Issue #795 (`B08-F01`, `G10-SEM-01`), not a new issue/standard.

## G1 — S1/outcome → canonical mathematical semantic placement

| § | Role | Required math/condition | Edited B08 evidence |
|---|---|---|---|
| 2.1.1 | `FORMAL_DEFINITION` teal | Sum defined by `AB=u,BC=v` and resulting `AC=u+v`, independent of A choice | “Định nghĩa — Tổng hai vectơ” |
| 2.1.1 | `FORMAL_RULE` blue | Three-point `AB+BC=AC` for A,B,C arbitrary; head-tail placement | “Quy tắc ba điểm” |
| 2.1.2 | `FORMAL_RULE` blue | Parallelogram `AB+AD=AC` when ABCD is a parallelogram | “Quy tắc hình bình hành” |
| 2.1.3 | `FORMAL_RULE` blue | Commutativity, associativity, zero identity for any u,v,w | “Tính chất phép cộng vectơ” |
| 2.2.1 | `FORMAL_DEFINITION` teal | Nonzero opposite vector equal length opposite direction; zero opposite itself; `BA=-AB` | “Định nghĩa — Vectơ đối” |
| 2.2.1 | `FORMAL_DEFINITION` teal | Difference `u-v=u+(-v)` | “Định nghĩa — Hiệu hai vectơ” |
| 2.2.2 | `FORMAL_RULE` blue | Common-origin difference `AB-AC=CB`; `C→B`, not `B→C` | “Quy tắc hiệu hai vectơ chung gốc” |
| 2.2.2 | `LOCAL_NOTE` / ordinary MathJax | Intermediate algebra checks the formal rule; it is **not** a second key-formula box | “Kiểm chứng bằng định nghĩa hiệu” |
| 2.2.3 | `KEY_FORMULA` white/unfilled | `MA+MB=0`, `GA+GB+GC=0` with midpoint/centroid conditions | “Hệ thức trọng tâm và trung điểm” |
| 2.2.3 | `MANDATORY_RECAP` amber | One compact summary of sum, opposite, difference, midpoint/centroid conditions | “Kiến thức cần nhớ — Bài 8” |
| 2.1.3/2.2.1/2.2.3 | `LOCAL_NOTE` | Ghi nhớ đọc hình, Lưu ý khi trừ, Ghi nhớ khi vận dụng | **bold inline prose, no fifth colored card** |

No new meaning inferred from words “quy tắc”; rule is a relationship/algorithm **distinct from defining an operation**. Worked Example 3.3 now writes `AM+AM` rather than using `2AM` vector scalar multiplication before B09; the equivalent vector sum and original question/answer/rubric remain unchanged. In section 2.2.3 the proof of centroid uses two additions of `GM` and geometric median 2:1 ratio. The sum/difference rules, conditions and algebraic results remain equivalent. Original published ChIV B08 R03 has **6 display TeX blocks**; R04 adds one genuine key-formula frame for midpoint/centroid and is **DELTA_C**, so do not reapply the R03 visual-only 9-blank-lines reversible hash gate to R04. R03 frozen SHA and receipt still remain valid for historical snapshot.

## G2 — affected mathematics and pedagogy self-check

- Defining sum and three-point rule are two distinct mathematical statements; formulas match the original point-based construction.
- Parallelogram vector diagonal is from common origin; no false (AB+AD=AC) as lengths.
- Commutative/associative laws and zero identity correct; opposite/difference conditions correct.
- Common-origin subtraction result direction is C→B, not B→C. Midpoint `MA+MB=0` (for M midpoint AB) and centroid `GA+GB+GC=0` (G centroid) require their respective geometric premises.
- Five canonical First Try `THPT-G10-CHIV-TRY06`, `TRY07`, `TRY08`, `TRY09`, `TRY10` and two original HELP IDs preserved, exact question/disclosure content intact; four Golden tabs unchanged; no Mastery/RD1/Final Submit/assessment bank alterations.
- Four worked examples preserved except **vector-scalar prerequisite refactoring** in Example 3.3 (`2AM` replaced by `AM+AM`); not an answer change, but correctly categorized material pedagogy delta.

## G3/G4/G5 — exact source and rendered QA

Require Q18 source/receipt SHA + CSS tail exactly scoped to B08 canonical `TRY06` and immutable predecessor prefix, plus standard v3.2.0 SHA. Check actual B08 DOM role counts (3 formal, 4 rule, 1 recap, 1 unfilled key formula), not generic box counts. Inspect computed styles **light and slate at 390/820/1440 px** (teal/blue/amber/transparent); verify MathJax no literal raw `\\overrightarrow`, all display formulas and closed self-compare; full applicable exact-HEAD CI including ChIV, UX795, R4, Roadmap and cross-chapter regressions. Real deploy checks `gh-pages` HTML and CSS parity, production P1. Owner physical Safari P2 is independent; **do not self-certify**. Issue #795 states `B08-F01 OPEN→FIXED_IN_PR→CI_PASS→P1_VERIFIED→OWNER_P2_PASS` with actual SHA evidence.

**STATUS:** `R04_CANDIDATE_QA_PENDING / OWNER_P2_PENDING / NO_MERGE_OR_DEPLOY_CLAIM`.
