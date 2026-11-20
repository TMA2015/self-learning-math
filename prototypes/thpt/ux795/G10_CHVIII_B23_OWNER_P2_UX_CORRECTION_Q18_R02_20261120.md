# Toán 10 B23 — OWNER P2 UX corrective delta R02 · 20/11/2026

**RECEIPT_ID:** G10-CHVIII-B23-OWNER-P2-UX-R02-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, existing Q01–Q18 / AP1–AP5; **no new standard**.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-23.md` (one canonical, no replacement).  
**R01_RECEIPT:** `prototypes/thpt/ux795/G10_CHVIII_B23_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md`; ID `G10-CHVIII-B23-G0G2-Q18-KNOWLEDGE-R01-20261120`, historically immutable.  
**R02_PREVIOUS_SOURCE_BLOB:** `8e94c245250b77b6f7670345f9edcb7b85e958ac` (P1-published source from PR #941).  
**R02_CORRECTED_SOURCE_BLOB:** `ed7a35d6650ecbe59f01e824295174541c4e3b49`.  
**R02_DELTA:** `DELTA_A_UI` for Golden disclosures/box geometry/D6 fold labels; `DELTA_C_ACADEMIC_MATERIAL` limited to owner-requested pedagogical labeling and figure reading clarification, all math/answers/outcomes unchanged.  
**OWNER_P2:** `OWNER_P2_FAIL_RECEIVED` with six visual defects, after previously reported technical P1. Correction needs **fresh owner P2**; NOT `OWNER_P2_PASS`.  
**ISSUE:** [#795 comment 7035061243](https://github.com/TMA2015/self-learning-math/issues/795#issuecomment-7035061243), owner-provided six production screenshots.

## Six owner-reported defects and source corrections

| ID | P2 failure (Qxx/AP) | Source correction | Testable learner outcome |
|---|---|---|---|
| UX-P2-01 | `Đối chiếu` bright-green question-mark alert, not Golden fold (Q09/Q13/AP1) | Page-scoped CSS for 4 existing `??? question`: neutral blue deliberate disclosure surface, no decorative '?' icon, stays **closed** by default; never alter four answer/rationale blocks | A learner recognizes four voluntary Đối chiếu and must click for answers |
| UX-P2-02 | Figure help contains "tab Kiến thức SGK" and "hình canonical dùng chung" (Q07/Q11) | Rewrite exact figure reading as left *one item* 4+3=7 vs right *one pair* 4×3=12, without project jargon | Figure instructions explain actual visible image |
| UX-P2-03 | Concepts boxed; **formal rules** unboxed; **conditions** incorrectly boxed (Q03/Q12) | Exactly 2 green concept boxes, exactly 2 blue formal Quy tắc cộng / Quy tắc nhân boxes, exactly 3 condition **paragraphs**, not blue rule boxes | Stable semantic hierarchy, rule visually findable |
| UX-P2-04 | “Ví dụ đọc nhánh” misplaced in Knowledge (Q04/Q13) | Rename as short “Quan sát hai nhánh” illustration of condition; worked examples stay in tab Ví dụ | Formal Knowledge contains rule conditions, tab Ví dụ contains actual examples |
| UX-P2-05 | Three `thpt-g10-example-solution` containers have **no CSS** so Lời giải is plain (Q04/AP1) | Page-scoped visible solution boxes with background, border, left accent, padding, responsive and dark theme | Exactly three visibly framed worked-solution sections |
| UX-P2-06 | Four identical tip headers, opaque "4.1–4.4" grouping, teal saturated help controls (Q08/Q14/AP1) | Six individually named errors (4 original 5-step HELP + 2 historical D6), clearer headings, subdued readable amber disclosure color; preserve IDs, HELP text and links | Each common mistake identifiable without opening all folds |

## G0–G2 content/self-audit and ownership boundaries

**Root cause confirmed in source:** B23 #941 used original Material `question` admonition styling (lime/“?”) without an explicit Golden skin; it inserted a class for Lời giải without a matching CSS declaration; it boxed three conditional paragraphs while leaving both formal rules as plain bold; it retained engineering notes in learner-facing figure directions and reused identical HELP display titles. The previous scoped browser test checked tab count, basic computed style for generic `thpt-r4-knowledge-conclusion`, MathJax, image loading, responsive overflow, Q15/Q16; **it did not assert required rule vs condition box roles, actual solution box appearance, distinctive D6 titles, question disclosure style, or editorial jargon**. This explains why technical CI PASS and owner P2 FAIL coexisted.

**Preserved math/IDs:** Same four `THPT-G10-CHVIII-TRY01..04` linked to `G10-B23-ADDITION`, `G10-B23-MULTIPLICATION`, `G10-B23-DIGIT_COUNT`, `G10-B23-CASE_SPLIT`; same four question/answer/rationale/remediation blocks; same four HELP IDs, two D6 IDs and original formative/Written references. Same reviewed SVG blob `4b3aaa807855768100975b4afcd2912be99946b6` in **two tabs**, no new media assets. Number counts remain (2+6=8), (4×3=12), (3×3=9), (3+2=5), 16/20. No RD1, grading, Final Submit, Firebase, progress or other lessons modified.

**Scope and evidence:** `B23 only`; attach exact-final-HEAD targeted Chromium check at 390/820/1440, including **actual CSS computed** disclosure/box style and 4 clickable closed fold answers, unique error titles, figure references/text, Q16; check Q18 source SHA chain R01→R02. CI green can prove technical display only; the owner must judge pedagogical design on production. **No preemptive P2 PASS**.

**G0–G2_VERDICT:** `OWNER_P2_FIX_SOURCE_PREPARED`; QA/production verification pending at creation. **P0/P1:** No new mathematical or assessment defect detected in changed scope; UI six defects must be demonstrated closed before release.  
