# G10 B15 · Owner readability, explanatory flow and Figure D5 R02 · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B15-P2-READABILITY-FIGURE-R02-20261119
**LESSON_ID:** G10-B15 · **OUTCOMES:** B15_OUT_01..05 · **PATH:** SGK Knowledge
**STANDARD:** SLM-THPT-QUALITY-ONE Q01–Q18, original Golden; preserve all B01–B14 owner P2 snapshots
**OWNER_APPROVAL:** Owner-provided two screenshots and authorized editing/republication, possibly alongside B16 if B16 gated
**PRIOR_MAIN_COMMIT:** `400e4820fe37c12a6db151cdcb094a79e31f7376`
**PREVIOUS_B15_SOURCE_BLOB:** `cc0b8a2d8aad63fc360246b07122094498634779`
**CANDIDATE_B15_SOURCE_BLOB:** `7f6448acf6e127b6dc40f3e34f155f151bc7d23b`
**GOLDEN_STYLESHEET_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078` (identical, no CSS changes)
**ORIGINAL_SVG_ASSET_BLOB:** `8a3b090af3a1bb73c972c4cb0a3795bbbc7f2f31` (identical, no modified geometry/text/art)
**SOURCE_VERIFICATION:** `Q18_OWNER_SELF_VERIFIED_SCOPED_DELTA_PENDING_CI`; not an independent NotebookLM academic/PED PASS
**DELTA_CLASS:** `DELTA_A_UI` for reusing existing Golden concept-figure class + `DELTA_C_ACADEMIC_MATERIAL` for reordering worked explanation **before** First Try in B15_OUT_02/B15_OUT_05; redundant labels removed without altering math
**CURRENT_STATUS:** `DRAFT / TARGETED_PED_REVIEW_PENDING / CI_PENDING / NOT_MERGED / NOT_DEPLOYED`

## Owner screenshot defects and precise scope

1. **B15-P2-FLOW-01** · Discover subtopics 1.2.1/1.2.2/1.2.4/1.2.5: remove four bold mini-headings `Vì sao chọn phương pháp này?`. The immediately preceding concept/prerequisite prose already teaches the relevant approach. Keep only the explicit label `Vận dụng.` beneath each uninterrupted explanatory sequence. Five canonical First Try prompt sentences, IDs, outcome placements, voluntary `Đối chiếu` answers, D6 bodies, and Core routes remain verbatim.
2. **B15-P2-FLOW-02** · B15_OUT_02: two existing sample domain/range explanations formerly occurred *after* the answer-reveal control and were labeled `Ví dụ 1`/`Ví dụ 2`. Move their mathematics intact before Vận dụng, remove only their mini-heading labels and make them flowing “Chẳng hạn, ...” explanation. **No equations, conditions, domain/range claims, example inputs, answers or item IDs changed.**
3. **B15-P2-FLOW-03** · B15_OUT_05: move the existing hypothetical piecewise shipping-cost sample from after answer-reveal to before Vận dụng. Keep same piecewise function, values `C(1)=8`, `C(2)=16`, `C(3)=22`, domain `[0;+∞)`, `x=2` branch, lines `y=8x` and `y=6x+4` intersecting `(2;16)`. Replace titled/bullet list with one ordinary prose paragraph and preserve “self-authored, not actual tariff” disclaimer.
4. **B15-P2-FIGURE-04** · Formal §2.1 illustrated mapping SVG existed but rendered too small on desktop relative to body text. Keep SVG and its original figure/alt/caption byte unchanged; append *existing* `thpt-r4-concept-figure` class to the original `thpt-r4-probability-figure`. Its approved Golden CSS uses `max-width: min(100%, 48rem)`, image `width: 100%; height: auto`; HTML cannot exceed parent width. On smaller screens honor fit-to-parent (do not force page overflow). Check width and text legibility at 390/820/1440.

## Q15/Q16, S1, and risk

- B15 S1 heading set `2.1/2.2/2.3`, original five Discovery scenarios, four worked formal examples, **five unique TRY IDs and five HELP IDs**, original answers/rubrics, source mapping figure, plain graph-check explanation, and B12–B14 published snapshots preserved.
- No duplicate canonical item, answer reveal before student tap, Mastery, RD1 private material, Final Submit, Firebase, Gemini or deploy workflow change.
- One canonical Markdown source; no parallel student manuscript. Prior full B15 source-lock receipts remain immutable. This receipt chains from `cc0b8...`, and is the only B15 follow-on source.
- **Delta C independent reviewer gate remains open** solely for B15_OUT_02/B15_OUT_05 pedagogical ordering (not all B15 or B16). Must not claim `CONTENT_READY`/P1 published/new-owner P2 until source-specific review and CI/cross-site UI gates close. If no independent reviewer available, keep this PR Draft and publish B16 only if independently qualified.

## Required tests

1. Source SHA exact current + prior, SVG and CSS byte-identical, five First Try, five HELP, five answer disclosures, **no duplicated short-method title**, no missing conditions or changed item answers.
2. Render 390/820/1440: Golden four tabs, 5/5 `Vận dụng`, no `Em vận dụng` or `Em tự thử`, semantic concept-figure image is larger on desktop but never exceeds available panel width; normal caption/MathJax, no page horizontal overflow.
3. Preserve academic S1 historical receipts and snapshot acceptance of B01–B14. Any material correction to math/rubric must produce a new Delta and affected NotebookLM review.
