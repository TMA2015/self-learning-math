# DEEP SOURCE / PED AUDIT · Toán 10 B01–B04 (Chương I–II) · R01 · 14/11/2026

**Purpose:** Actual learner-first audit, not 4-tab shell scan. **STATUS:** `AUDITED_SOURCE_ONLY / PED_REVISE_REQUIRED / S1_PRINTED_OUTLINE_COMPARED / PDF_INDEX_UNVERIFIED / RENDERED_P2_PENDING / NO_ACADEMIC_PED_PASS_GRANTED / OWNER_QUALITY_HOLD`. Work belongs to approved RELEASE *read-only audit* while AUTHORING is still completing Chuyên đề; **do not assign SGK fixes to AUTHORING during this phase**. Future owner decision controls who edits SGK content.

**Same normative standard:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18, X-F.1–X-F.5. **Owner clarification 14/11:** every small knowledge component has a meaningful number/title for locating it, **but the teaching inside must be continuous natural prose**. Tab 1 *Khám phá* must explain **all principal SGK concepts** in intuitive, sufficiently detailed language, genuine figures/examples and self-try; Tab 2 *Kiến thức SGK* follows SGK's real section sequence/heading logic and systematically summarizes formulas, conditions and concepts **without replaying long examples from Tab 1/3**; Tab 3 teaches the method on reasoned problems; Tab 4 identifies/repairs real misconceptions. Not a new quality standard, not a quota.

## A. Source-lock and S1 provenance

| Lesson | Exact main Git blob SHA | S1 KNTT Tập 1 printed pages / actual main SGK chapter |
|---|---|---|
| G10 B01 Mệnh đề | `fb4bd72f6101523e30e30cc970d74c23b76228a8` | pp. **5–11** · ChI |
| G10 B02 Tập hợp và các phép toán trên tập hợp | `8a7b90f1768b789429def045e38ebe97e6adbf3a` | pp. **12–19** · ChI |
| G10 B03 Bất phương trình bậc nhất hai ẩn | `c9ae5104c2f65779f2dd452d3f7775abe2600b7b` | pp. **22–25** · ChII |
| G10 B04 Hệ bất phương trình bậc nhất hai ẩn | `2c432958169cd9f3a8a66e6bc07610b6a60d5815` | pp. **26–30** · ChII |

**External SGK reference actually reopened:** [Toán 10 KNTT Tập 1 PDF, bìa NXB Giáo dục Việt Nam](https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf) (public third-party mirror of textbook, **not an authenticated publisher-origin download**); its table of contents and textual page boundaries state pp 5,12,22,26 for B01–B04. Cross-check [independently rendered third-party textbook table of contents](https://www.sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/toan-10-tap-1-1968.html). PDF page screenshot tool and direct PDF byte download **failed** in this run: exact `PDF_PAGE_INDEX_1_BASED` / cover-to-printed offset remain `UNVERIFIED` (never invent). Earlier historical review receipts disagree for B01 (pp 6–12 vs actual printed pp 5–11); this report uses the **directly observed SGK table of contents and printed page labels** but does not misstate PDF-index validation. Text excerpts are used only for auditing/paraphrase; do not copy original SGK text to learner content.

**Actual S1 canonical top-level lesson outlines observed in source:**

- B01 **five**: (1) Mệnh đề, mệnh đề chứa biến; (2) Mệnh đề phủ định; (3) Mệnh đề kéo theo, mệnh đề đảo; (4) Mệnh đề tương đương; (5) Mệnh đề có chứa ký hiệu ∀,∃.
- B02 **three**: (1) Các khái niệm cơ bản về tập hợp; (2) **Các tập hợp số**, including `N⊂Z⊂Q⊂R` and real intervals; (3) Các phép toán trên tập hợp (giao/hợp/hiệu/phần bù), Ven.
- B03 **two**: (1) Bất phương trình bậc nhất hai ẩn (including cặp nghiệm); (2) Biểu diễn miền nghiệm trên mặt phẳng tọa độ (including đường biên/điểm thử); modeling is in opening/example/application.
- B04 **three**: (1) Hệ bất phương trình bậc nhất hai ẩn; (2) Biểu diễn miền nghiệm của hệ; (3) Ứng dụng của hệ, including linear optimization on polygon. These are **actual heading scopes**, not a mandate to remove helpful subheadings; formal Tab 2 numbering must map faithfully to S1.

## B. Lesson × concept audit findings (source lines = exact 1-based line in blob)

### G10 B01 — Mệnh đề · PROVISIONAL `REWRITE_SECTION`

**Evidence:** [source](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/chuong-i/bai-1.md).

- **B01-F01 · P1 PED3/Q09–Q11/Tab1 depth:** lines **11–31** naturally explain true/false, variable, counterexample, implication and reversal through concrete illustrations; **however there is no actual discovery/why/how teaching sequence for `∀, ∃` and their negations** in Tab 1 (only names in the terminology/outcome list at 29–31). Essential quantifier learning is supplied later at **2.4 lines 124–150**, so **not an outright lesson-wide content omission**; the defect is the *first-tab learning journey not covering one major SGK concept* under owner's new clarity.
- **B01-F02 · P1 X-F.1/X-F.2/Q01 S1 section mapping:** Tab 2 headings lines **35,54,80,124** = four sections; website **2.3 combines** original S1 sections **3 (kéo theo/đảo)** and **4 (tương đương)**, website 2.4 = original **5 (∀,∃)**. The formal `2.x` table of contents is **not faithful one-to-one to actual S1 primary hierarchy**; minimal repair is correct headings/scope and numbering while preserving the well-explained mathematics. No assumption that example correctness is thereby invalidated.
- **B01-F03 · P2 X-F.1 learner orientation:** Tab1 `### Cùng tìm hiểu / Ví dụ trực quan / Thuật ngữ` without `1.1/1.2/1.3`, Tab3 examples not `3.1…`, HELP not `4.1…`. Add meaningful numbering per approved visual/editorial pattern, **without splitting teaching prose into PED checkbox sections**.
- **Positives checked:** Tab 2 lines **82–104** gives correct logic and a real implication figure; examples 1–4 at **157–195** each state a reason, working and condition/review; quantifier negation, counterexample and two-way proof were checked independently on displayed algebra (no numerical contradiction observed in examined examples). HELP at **199–218** is targeted and links to specific Core/Practice item query IDs. **Not a mathematical/PED PASS on all items**.

### G10 B02 — Tập hợp · PROVISIONAL `REWRITE_SECTION` with `P1 CONTENT HOLD`

**Evidence:** [source](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/chuong-i/bai-2.md).

- **B02-F01 · P1 Q01/Q02/Q03 S1 CONTENT GAP (not stylistic):** SGK printed **p.15** explicitly has **“2. CÁC TẬP HỢP SỐ”** and explains natural/integer/rational/irrational/real with hierarchy **N⊂Z⊂Q⊂R**, examples and classification. Website Tab 2 lines **42,70,121,143** has (1) basic sets, (2) **operations**, (3) intervals, (4) Ven. It **omits the complete number-system explanation and hierarchy**, while positioning intervals at 2.3 *after* operations instead of **within SGK section 2 before operations section 3**. Some \(\mathbb N\) mentions in a set-builder expression are **not** a replacement for this missing lesson content. OWNER #861 blocker confirmed also in published HTML. **No Academic/PED PASS**.
- **B02-F02 · P1 PED3 Tab1 scope/depth:** lines **11–38** introduce membership/subset with a useful box model and union/intersection with clubs, but **do not actually teach the other principal SGK knowledge group “Các tập hợp số”** nor develop intuitive interval/endpoint meaning in a learner-ready sequence. Listing “khoảng, đoạn, nửa khoảng” in line 36 is *not teaching*. Direct owner objective of being able to learn without SGK is not met for that outcome.
- **B02-F03 · P1 PED4/X-F role split, duplicated worked example:** Tab 2 lines **153–157** fully calculate all four Venn regions for **40 students, 23+25 clubs, 12 overlap**; Tab 3 example 3 lines **192–200** uses the **identical 40/23/25/12 problem and solution**, not a distinct method/example; redundant longer material in supposedly concise Tab2. The different 32/18/15/6 self-try at **159–165** is a valuable independent instance; **retain** its separation.
- **B02-F04 · P1 X-F.1/X-F.2 formal mapping:** Tab2 `2.1 sets → 2.2 operations → 2.3 intervals → 2.4 Venn` incorrectly presents real intervals **after** set operations and drops actual SGK section 2 content; fix source-locked 2.x hierarchy and complete each principal S1 outcome. Tab1/3/4 also lack fully consistent 1.x/3.x/4.x explicit numbering.
- **Positives checked:** examples of finite union/intersection/difference and two interval operators lines **172–190** correctly compute set results and endpoint inclusion. Help sections **204–232** are specific, not generic five-step scaffolding. Venn counting 40→(11,12,13,4) and 32→(12,6,9,5) is arithmetically consistent. **Known missing knowledge overrides these positives.**

### G10 B03 — Bất phương trình hai ẩn · PROVISIONAL `REWRITE_SECTION` (not known wrong maths)

**Evidence:** [source](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/chuong-ii/bai-3.md).

- **B03-F01 · P1 PED6/Q14 FIRST-TRY TRANSFER WEAK:** Tab 2 table lines **70–78** completely **solves** for the three named points `A(2,2), B(3,2), C(0,0)` for `x+2y≤6`; lines **82–88** ask “Em vận dụng” with **the exact same equation and A/B/C points**, then hide identical answer in an expandable block. This is **recognition/repetition**, not an independent trial after learning; a novice can copy the preceding table without reasoning. Need a *different* untreated pair or one-step diagnostic, preserving canonical ID/answer protocol under affected delta review.
- **B03-F02 · P1 X-F.2 Q01 original heading mapping:** Actual SGK two sections (identify/test pair; graph half plane); Tab 2 numbered **2.1 recognition, 2.2 point test, 2.3 boundary, 2.4 side selection, 2.5 modeling**. These are useful instructional microsteps but mislabel the **five source subskills as five same-level SGK main sections** under v3.1. Preserve helpful small subheadings **under correct parent S1 numbers**, rather than delete explanations.
- **B03-F03 · P2 tab1 narrative coverage:** Tab1 lines **7–39** explains real factory constraint, pair-substitution and boundary intuitively, but concrete question **which side** of the line `2x+3y=12` is feasible, and when the boundary is removed (`<`) is taught only from Tab2 onward. To fulfill “Khám phá covers major knowledge areas,” add a natural (not checklist) visual explanation before formal method, using **correct** figure/constraints.
- **Positives checked:** lines **43–51** correct `(a,b)≠(0,0)`; boundary and point-test examples **103–108** and **171–189** algebraically consistent with their labeled conditions; example 3 lines **191–207** correctly maintains `x+y>0` before deriving `y≤3x`, and rejects `(0,0)`. HELP lines **211–230** gives actionable correction. This richer fractional-price example may need S1/Core vs optional application classification; cannot assert scope PASS without register.
- **Small formatting follow-up:** explicit 1.x/3.x/4.x missing in source, despite 4 tab shells.

### G10 B04 — Hệ bất phương trình hai ẩn · PROVISIONAL `REWRITE_SECTION`

**Evidence:** [source](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/chuong-ii/bai-4.md).

- **B04-F01 · P1 X-F.2/Q01 heading hierarchy:** SGK has **3** primary parts (system; graph intersection; applications). Tab2 uses five parallel `2.1…2.5` labels: solution system, feasible region, inconsistent system, linear objective, integer model. Useful micro-concepts exist, but original **S1 primary structure and which knowledge belongs to each** is obscured. Need parent S1-aligned structure plus distinguish optional elaborations; do not remove math just for a heading count.
- **B04-F02 · P1 Tab2 compactness/EX duplication:** Tab2 lines **109–128** fully teaches optimization for the same **four-vertex O(0,0), A(4,0), B(2,4), C(0,6)** polygon and `F=3x+2y` with a complete table `0,12,14,12`; Tab3 example 1 lines **158–170** **repeats the identical system, target, vertices and answer**. Tab2 is now a worked solution, **not concise S1 synthesis**, Tab3 gives negligible new transfer evidence. Keep a succinct max-at-vertex statement and distinguish a genuinely different worked problem in Tab3, with targeted academic delta handling.
- **B04-F03 · P2 Tab1 depth:** Tab1 lines **7–47** has a good natural journey from *simultaneous conditions* to *intersection* and *possible optimization*, but the **reason why a linear objective on a bounded convex polygon can be checked at vertices** is not explained before the formal/tab2 worked problem; evaluate in context and enrich with an intuitive movement-of-level-line explanation *only after* S1-scope check, not by injecting a new theorem without review.
- **B04-F04 · P2 extension-role clarity:** Tab2 lines **139–151** discusses fractional continuous optimum vs integer feasibility. The distinction is mathematically helpful and the self-try correctly limits the conclusion to comparing two lattice points; **check CORE vs application/extension labeling** so no advanced integer optimization is silently added to mandatory S1 outcome.
- **Positives checked:** region vertices and `F` results at 2.2/2.4 and Tab3 are arithmetically consistent; paragraph around lines **72–79** explicitly ties figure to **its own** four constraints, and first-try at **85–91** honestly says its triangle is different. The full text avoids falsely declaring two compared lattice points globally optimal. HELP **211–230** directly addresses real mistakes.
- **Small formatting follow-up:** source lacks fully numbered Tab1 1.x, Tab3 3.x, Tab4 4.x.

## C. Cross-lesson root causes and concrete next checks

| Pattern | Actual student-learning effect | Concrete audit detection (no regex-only PASS) |
|---|---|---|
| **Tab1 fails full concept coverage** (B01 quantifiers; B02 number systems; B03 half-plane side/strict boundary) | Students still need Tab2 or external SGK to *first discover* a main concept instead of Tab2 serving concise synthesis | Map **each S1 main concept → intuitive Tab1 explanation → formal Tab2 2.x → a reasoned Tab3 and targeted Tab4**, using exact source lines. Check *meaning*, not mention of term |
| **Tab2 outline not equivalent to actual S1** (B01 5→4, B02 1→3→2→3, B03 2→5, B04 3→5) | Hard to locate content according to original textbook and distinguish core/extension | Keep microsteps as nested teaching, but make real S1 parent section numbering/sequence explicit; check each outcome's source not name only |
| **Tab2 and Tab3 repeated same fully solved numbers** (B02 40/23/25/12, B04 4 vertices and F values) | Student rereads same solution, not a new application | Compare **problem family, operands, assumptions, method and required reasoning** across Tabs, and test independent transfer |
| **Solved-table copied as self-try** (B03 three A/B/C points) | 'Tự thử' can be answered by copying, no comprehension evidence | Place unique unworked question before self-reveal, evaluate partial hints and actual result; no Mastery from it |
| **Numbering missing outside Tab2** (all four lessons) | Cannot tell which example/help belongs to which microconcept | Require meaningful 1.x,2.x,3.x,4.x and grouping/links, **without** turning continuous prose into PED checklist |
| **False automated clearance risk** | Adding heading 'Các tập hợp số' or a dummy SVG path makes a naive source probe turn green | Keep `B02_S1_NUMBER_SETS_SEMANTIC_REVIEW_REQUIRED` / `B16_FIGURE_GEOMETRY_REVIEW_REQUIRED` even after syntactic superficial fixes; 9/9 synthetic checks in Draft #862 |

**Critical differentiation:** This read-only audit checks Knowledge Tab1–4 **all four lessons from beginning to end**, a subset of displayed examples and all identified errors. It **does not yet independently verify all chapter Core/Practice/Written/item answers/rubrics**, confidential RD1 or rendered browser 390/820/1440; prior source/CI PASS is not invalidated retrospectively by an audit of a different snapshot. No student trial yet: `LEARNER_EVIDENCE_PENDING`.

**Provisional disposition:** B01 `REWRITE_SECTION`, B02 `REWRITE_SECTION + ACADEMIC_CONTENT_HOLD`, B03 `REWRITE_SECTION`, B04 `REWRITE_SECTION`. **These are triage recommendations, NOT authorization to edit or QA PASS**. All four remain `PED_AUDIT_REVISE_REQUIRED` for the specified outcomes until corrected/reviewed source.

## D. Next controlled batch

1. Complete ChI+ChII **Core/Practice/Written + answer/solution verification and links** (excluding publishing private RD1); evaluate transfer families and actual repeated/public exposure. Keep exact snapshot SHA.
2. Continue S1 direct page mapping and full Knowledge Tab1–4 **G10 B05–B06** then ChIV and onward; later G11/G12, keeping per-outcome evidence and provisional choices `RETAIN / REWRITE_SECTION / REAUTHOR_LESSON`.
3. Treat **G10 B16 graph** as existing P1 external to this batch; #861 hold remains, #795 master; PR #856 stays Draft/HOLD. **NO CODE CHANGE TO STUDENT CONTENT / NO MERGE / NO DEPLOY**.
