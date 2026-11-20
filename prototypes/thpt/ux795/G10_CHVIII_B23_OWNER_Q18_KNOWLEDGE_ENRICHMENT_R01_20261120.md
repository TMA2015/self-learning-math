# G10 B23 · Quy tắc đếm — G0–G2 source-locked Q18 Knowledge enrichment R01

**RECEIPT_ID:** G10-CHVIII-B23-G0G2-Q18-KNOWLEDGE-R01-20261120  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.2.0`, Q01–Q18 / §X-C, §X-F; one standard only.  
**ROLE/MODE:** RELEASE-lane source-first author self-QA; `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, **NOT** independent NotebookLM review or new CONTENT_READY/Topic PASS. Owner **authorized B23-only upgrade** on 20/11; **OWNER_P2_PENDING** until owner checks actual published lesson.  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (full concept-first teaching/examples/remediation and mathematical representations) plus `DELTA_A_UI` (Golden semantic visual cards, tabs, SVG placement). Do not mislabel all as metadata/UI.
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-23.md` — exactly one learner-canonical source, no parallel replacement.  
**BEFORE_BLOB:** `f63524ef47d2990e00799e772a15f7aab1b2d4ca` (main `798349032ecf8fdfa7f9c1326dbed6ebca7ee916`).  
**CANDIDATE_BLOB:** `8e94c245250b77b6f7670345f9edcb7b85e958ac`  
**CANDIDATE_B23_SOURCE_BLOB:** `8e94c245250b77b6f7670345f9edcb7b85e958ac` (commit `e1ee09a82765cb646fb8ea931157746915490d92`, restores exact historical additive-rule TeX).  
**EXISTING_CANONICAL_SVG:** `docs/assets/images/thpt/G10_B23_ADD_MULTIPLY_CHOICES_R02.svg`, immutable blob `4b3aaa807855768100975b4afcd2912be99946b6`. Used **twice by reference**, once per tab; **no duplicated image asset**.
**OWNER_G0_DEFECT_LEDGER:** Issue #795, comment `7034063593`, posted BEFORE content edits.

## G0 — S1 and existing interface contract

SGK Toán 10 Kết nối tri thức với cuộc sống, **Tập 2, Bài 23, printed pp.60–65**, Chương VIII Đại số tổ hợp. S1 headings: **(1) Quy tắc cộng và sơ đồ hình cây; (2) Quy tắc nhân; (3) Kết hợp quy tắc cộng và quy tắc nhân**. Verified against the existing source footer and a public digitized textbook transcription (https://sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-viii-dai-so-to-hop-3244/bai-23-quy-tac-dem-12033.html); no claim of freshly hashed official physical S1 scan/PDF offset. Source objective: use addition, multiplication and a tree to count outcomes / finite set cardinality. The four **existing project outcomes** are teaching decompositions of this S1 objective, not invented new textbook sections:

- `G10-B23-ADDITION` — `THPT-G10-CHVIII-TRY01`: alternatives must be nonoverlapping, 2+6=8.
- `G10-B23-MULTIPLICATION` — `THPT-G10-CHVIII-TRY02`: all stages completed, 4×3=12 if every first choice has 3 second options.
- `G10-B23-DIGIT_COUNT` — `THPT-G10-CHVIII-TRY03`: tens from 1,2,3 and units one of 3 unused digits, 3×3=9 (10,12,13,20,21,23,30,31,32).
- `G10-B23-CASE_SPLIT` — `THPT-G10-CHVIII-TRY04`: final digit 0 yields 10,20,30; final digit 2 yields 12,32; 3+2=5, cases disjoint.

Protect original canonical four problems, **four answer lines and four rationale lines byte-identical**, all associated formative references, D6 links, two historical D6 IDs, Q15/Q16, assessment, private RD1 and learner records.

## G1 — actual canonical learner revision

1. **Khám phá kiến thức:** four full causal stories replace checklist-like teaching. First ask what a complete outcome means, then explain disjoint branches, equal-branch product, leading zero and nonrepeat conditions, and why even-number branches have unequal counts. Move each original Vận dụng/closed answer `TRY01..04` to after its corresponding explanation. Rename voluntary fold to **Đối chiếu**, preserve answers/rationales verbatim and direct learners to tab Lỗi thường gặp without broken hidden-tab hash links.
2. **Image and Q07/Q12:** original reviewed **4+3 vs 4×3** SVG shown immediately next to contrast in Khám phá **and again immediately beside the formal rules in Kiến thức SGK**. Same path, one immutable canonical asset, each placement has separate reading guidance. A genuine accessible nested **sơ đồ hình cây** for even two-digit numbers and its case-split table appear at the decision point in Khám phá (five terminal leaves 10,20,30,12,32). The tree is an in-page display, not a new external image asset; fallback text/table carries complete data.
3. **Kiến thức SGK:** independent, full S1 rule explanations in the three textbook sections, **two green concept cards + three blue conditional-rule cards**; addition assumes disjoint outcomes, product assumes same child-count per branch, combination splits cases. Clarifies why overlap leads to subtracting intersection, why zero-leading strings differ from two-digit numbers, and why branch-dependent choices must be summed.
4. **Ví dụ:** three complete worked cases, each **Đề bài → Phân tích → neutral Lời giải → Kiểm lại** (club 7/12; digit set 0..4 without vs with replacement 16/20; even 0..3 gives 5). No added scored item.
5. **Lỗi thường gặp:** relocate four original five-step D6 HELP blocks `HELP-G10-CHVIII-TRY01..04` plus original two comprehensive `D6-G10-B23-01..02`, keep all original Practice/Written references; avoid duplicate question IDs. Preserve Golden four top-level tabs and page-local CSS only.

## G2 — independent-of-CI self-check, source-safe

- **Math conditions:** Addition groups must be disjoint, otherwise inclusion–exclusion; product requires a constant number of next choices across the branches grouped. For two-digit numbers from {0,1,2,3}, first digit has 3 nonzero choices, second has 3 remaining: **9** distinct numbers. Even numbers are exactly **10,12,20,30,32**: five leaves (**3+2=5**, not 6). For digits {0,1,2,3,4}, two-digit distinct = **4×4=16**, repetition allowed = **4×5=20**. Altered bread matching example 3 first choices ×3 plus 1 first choice ×2 gives 11, not 12.
- **IDs/keys/source invariants checked after commit:** four tabs, one occurrence each of the four TRY IDs/outcome IDs, four closed `Đối chiếu`, original 8 answer/rationale lines byte-identical, all original formative reference counts exact, original D6 IDs kept, valid HTML figure/div balance, two SVG references and original single SVG asset; no hidden-tab D6 anchor jumps. Four new narratives + three worked cases checked against all four outcomes, not just count quotas.
- **Original tests run:** source-backed JavaScript assertions against before/after Git blob and explicit enumeration; exact-final-head CI and browser AP1–AP5 **still pending** at receipt creation. The source assertions are not a substitute for rendered browser UX or human P2 inspection.

**G2_VERDICT:** `AUTHOR_SELF_QA_SOURCE_PASS / P0=0 / P1=0` on specified four outcomes; distinct from academic independent reviewer PASS and from release QA.  
**G3–G5:** Open scoped B23 PR; run `SCOPED_LESSON` source/Q15/Q16 + actual 390/820/1440 browser Golden/AP/MathJax/SVG/tree, exact-final-HEAD; verify protection of already owner-P2-approved B19–B22. Merge/deploy require release gates **and owner permission**. After real deployment, confirm P1 source/build equivalence, then seek **OWNER_P2** on actual B23. No site-wide browser QA, no work on B24, no activation of official RD1/Mastery.

## Production proof compatibility (gated before B23 merge)

- CI-only [PR #942](https://github.com/TMA2015/self-learning-math/pull/942) merged to `main` at `3264a6498ff452c3f1326dc48f3b78b2ba47b560`: bounded legacy disclosure-title and exact D6 navigation normalization; original answer/rationale texts remain strictly source-locked. Mutation-negative fixtures still reject changed answers or explanations. This is **not** a relaxation of Q15/Q16 or an independent reviewer verdict.
- Final B23 candidate `8e94c245250b77b6f7670345f9edcb7b85e958ac` restores the unchanged historical additive-rule formula `\\(m_1+\\cdots+m_k\\)` and preserves all old TeX expressions in the source. Pre-deploy source comparison remains mandatory; evidence of the GitHub Pages compiled result only exists **after** successful deploy workflow.
