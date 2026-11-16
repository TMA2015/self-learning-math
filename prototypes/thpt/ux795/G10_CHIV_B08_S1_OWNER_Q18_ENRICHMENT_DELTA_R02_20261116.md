# G10 ChIV B08 — OWNER-Q18 Knowledge enrichment R02 · 16/11/2026

**PACKET_ID:** `G10_CHIV_B08_S1_PED_TRANSFER_R02_20261116`  
**SINGLE_STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18 · **Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · `AUTHOR_SELF_VERIFIED_ENRICHMENT` (not NotebookLM independent review)  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` for meaningful concept-first learner scaffolds and four new worked examples, `DELTA_A_UI` for labels/figure placement/scoped keyboard and help-copy.  
**LESSON_ID:** `G10-CHIV-B08` · **SOURCE_S1:** SGK Toán 10 Kết nối tri thức, tập 1, Bài 8 printed pp51–54 (online SGK reproduction and PR #862 deep audit); the publisher PDF cover-to-printed-page index was not reopened, so `SOURCE_SCAN_AUTHORITY_PENDING` remains a provenance limitation.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-8.md`  
**R01_EDITORIAL_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B07_B11_SGK_S1_Q18_EDITORIAL_RECEIPT_20261112.md` (immutable)  
**R01_APPROVED_SOURCE_BLOB:** `dcdb7aec2ce8afd285739bc3e098d615e4faf623`  
**R02_CANDIDATE_SOURCE_BLOB:** `196976859489744bf10e6c3ad60e8dac7afb2422`  
**JS_PATH:** `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`  
**JS_PREVIOUS_BLOB:** `1d78bd34bd51233a48669b1358b228eb99fbc34d`  
**JS_CANDIDATE_BLOB:** `da426ed2d7966ab5b242405eaeeaadbfaecefa7d`  
**CSS_UNCHANGED_BLOB:** `a6f5061a0660ad5ae32867e3639d4a375e05fe29`  
**D5_FIGURE_UNCHANGED_BLOB:** `3d7550c8667ed8ea629563b8078ae3dfbc680135` file `docs/assets/images/thpt/THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg`.  
**B06_DEPENDENCY:** PR #877 (P2 wording correction) must be merged or branch rebased on its accepted HEAD before this B08 candidate can merge; never move accepted B06 source backwards.

## Q01–Q18 / outcomes / minimal changes

**S1:** Exactly two authentic major sections remain: 2.1 “Tổng của hai vectơ”, 2.2 “Hiệu của hai vectơ” in the original order. Formative items are in Tab 1 as existing ChIV Golden contract; Tab 2 contains six explanatory subtopics under those two authentic parents without duplicate question/answer disclosures.

**Q03–Q08 / D1–D6, Q09–Q14 / PED1–PED6:** Tab 1 now has five numbered and natural learner steps, each anchored to named geometry before referring to “two vectors”, “two points”, “a triangle”, “area/length”. All five original `THPT-G10-CHIV-TRY06` through `TRY10` prompts and complete question/disclosure bodies have been preserved byte-for-byte (only visible “Em vận dụng.”→“Vận dụng.”), all five canonical IDs and outcome/HELP refs remain. Crucially, their numerical answer is *not* given by the new preceding narrative (aside from genuine rule/pre-requisite), and each answer remains in closed voluntary `details.question`.

**B08-Audit #862 CHIV-08-B:** Original triangle+parallelogram vector SVG moved from Tab2 to Tab1 §1.1, with guided caption telling learners exactly what arrows to inspect at the point of conceptual formation. Original single SVG unchanged (no false diagram regeneration). Worked Tab3 was merely three terse “Đề/Giải/Tự kiểm” one-line examples. New Tab3 has four fully worked, **independent transfer** cases: 3.1 nonadjacent A→C→B→D sum=AD; 3.2 5N and 7N at 60° resultant (√109)N by cosine (not the canonical 3N/4N/right-angle case); 3.3 midpoint M of BC yields AB+AC=2AM with complete derivation; 3.4 three legs 7m East, 2m West, 4m North, path 13m and displacement (√41)m, not the original 3/4 case. Distinct from Tab1 and explained method choice/condition and verification.

**B08-Audit #862 CHIV-08-A (existing frozen public Practice exposure):** Original published `B08-P02` repeats old public TRY08 geometry and `B08-P06` repeats old 3N/4N example; **the source Core/Practice bank has NOT been rewritten**. Those legacy items must not be counted as *independent held-out mastery* after a learner has seen their exact answer. Add dedicated new examples to improve Knowledge transfer, but no false claim that this edits official bank or closes bank duplication entirely. `LEGACY_TRANSFER_EXPOSURE_NOT_HELD_OUT`, tracked for separate AUTHORING if required for Chapter readiness.

**Q08 D6:** `HELP-G10-B08-01, HELP-G10-B08-02` canonical IDs unchanged, student-facing error-repair prose now specific to arrow direction, difference, midpoint, centroid and force, without leaking code-like item IDs or QA metadata. Tab4 two properly numbered headings 4.1/4.2.

**Golden/AP:** Four tabs, Tab1 five `1.x` subsections; Tab2 two `2.x` parent sections + six `2.x.x` nested subtopics; Tab3 four `3.x` worked examples with separate Phân tích / Lời giải / Kiểm lại; Tab4 two `4.x` help. JS respects authored numbers (no double-prefix), wraps only B08 new worked solutions in existing Golden cards, adds **B08-only ArrowLeft/ArrowRight** on tab labels. B07 and B09–B11 and B01–B06 earlier source/behavior stay untouched. CSS shared blob unchanged.

**Q15/Q16:** Five original public First Try `THPT-G10-CHIV-TRY06`, `TRY07`, `TRY08`, `TRY09`, `TRY10` exactly once; no new IDs. Two HELP IDs original. Public disclosures remain `CLIENT_SELF_CHECK_NO_MASTERY`; no changes to Chapter IV 40 Core/Practice items, 21 Final Submit/Q16 protected items, Written/Anchor, readiness, RD1, Firebase or learner data.

## Mathematics independently recalculated

- 3.1: (\overrightarrow{AC}+\overrightarrow{CB}=\overrightarrow{AB}), then (\overrightarrow{AB}+\overrightarrow{BD}=\overrightarrow{AD}) for arbitrary points.
- 3.2: (R^2=5^2+7^2+2(5)(7)\cos60^\circ=109), (R\approx10.44\)N, (7<R<12)N.
- 3.3: (\overrightarrow{AB}=\overrightarrow{AM}+\overrightarrow{MB}), (\overrightarrow{AC}=\overrightarrow{AM}+\overrightarrow{MC}), (\overrightarrow{MB}+\overrightarrow{MC}=\vec0), so total (2\overrightarrow{AM}).
- 3.4: 7m East + 2m West +4m North = 5m East, 4m North; traveled 13m; displaced (\sqrt{25+16}=\sqrt{41}\approx6.40\)m.

**Q18 self-QA scope:** Learning explanation/conditions and 4 examples manually verified, original canonical question bodies/IDs compared exactly, SGK hierarchy and SVG source retained. `KNOWLEDGE_ENRICHMENT_P0=0` / `KNOWLEDGE_ENRICHMENT_P1=0` **within this edited lesson scope**; existing Practice same-data exposure is separate Q15/readiness concern, not declared closed. Exact-head browser AP/keyboard/math/CSS and full 8 GitHub workflows pending, no deployment/owner P2 claim.

**STATE:** `G10_CHIV_B08_CANDIDATE_RELEASE_QA_PENDING` · DO NOT MERGE/DEPLOY until all exact-HEAD release gates satisfy QA + PR #877 dependency; B07 untouched.

**MARKDOWN_RENDER_PRE_QA_FIX:** Source candidate corrected 11 leading-line indentations (one D5 SVG, five canonical markers, five first-trial labels) from 8 to 4 spaces. Original five question/answer disclosure bodies unchanged. Final source SHA is `196976859489744bf10e6c3ad60e8dac7afb2422`, never accept provisional `508241e1b334fdc913864244a02491e02a04c727` for release.
