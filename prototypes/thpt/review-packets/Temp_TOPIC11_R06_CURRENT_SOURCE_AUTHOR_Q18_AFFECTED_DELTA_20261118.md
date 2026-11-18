# CĐ11 — Q18 trên nguồn hiệu lực · AUTHOR_SELF_QA, DELTA_C scoped HOLD · 18/11/2026

**AUTHORING ONLY.** Q01–Q18 thuộc chuẩn duy nhất `SLM-THPT-QUALITY-ONE v3.1.0`. Không tự cấp kết quả NotebookLM independent Academic/PED, không coi source CI/HTML là website RELEASE, không ghi Mastery/official TOPIC_READINESS, không merge/deploy.

PACKET_ID: THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
CURRENT_STATUS: BLOCKED_BY_AUTHORING_INDEPENDENT_AFFECTED_SCOPE_REVIEW
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_R06_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: 36c22ff9d441da793181072426d594bfe245a8aa
ACADEMIC_SOURCE_BLOB: 36c22ff9d441da793181072426d594bfe245a8aa
SIGNED_R06_PREVIOUS_SOURCE_BLOB: 58b16f7c442d560f3950aafdbaf1f686e1e337e4
SIGNED_R06_PREVIOUS_Q18_BLOB: ee42fcc98ccc51fef08a7eabdbf99032b0110c27
ORIGINAL_R05_STUDENT_BLOB: 7d8eac917be4f7688a8a718e54cce4a84bc055ef
ORIGINAL_R05_Q18_BLOB: c6df9cdc86b8f3df9d163e8c6e4c16a6e7d48c15
ORIGINAL_SGK_SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b
ORIGINAL_SGK_INDEPENDENT_RECEIPT_BLOB: feabeeeef262e7f6b28c898cdf77e6aa4194da24
PUBLIC_ORIGINAL88_INDEX_BLOB: 672fdce0c02ebf4f6ae6b37b331ca59e259d9b5c
PUBLIC_NEW28_CANONICAL_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0
DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT_PRIOR_FORMAL_BOXES + DELTA_C_ACADEMIC_MATERIAL_O08_O14
P0: 0
P1: 0
P2: 0
PENDING_REVIEW: TOP11-O08; TOP11-O14
AUTHOR_SIGNOFF: TOP11_R06_20261118_36c22ff9d441da793181072426d594bfe245a8aa_AUTHOR_SELF_QA_NOT_FINAL_ACCEPTANCE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
PRIVATE_RD1_IMPORTED: 0
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Toán 12 KNTT tập Hai SGK Chương IV B11 in4–11/PDF1 6–13, B12 in12–18/PDF1 14–20, B13 in19–26/PDF1 21–28, end in27–28/PDF1 29–30. SBT B11 in3–8/PDF1 2–7, B12 in9–13/PDF1 8–12, B13 in14–18/PDF1 13–17, end in19–21/PDF1 18–20; copied with provenance from prior owner S1 source receipt (not newly scanned). Original SGK-only notebook receipt does not certify Topic edits.
OUTCOME_AUDIT: 22/22 TOP11-M01–M22 and TOP11-O01–O22 present, four Knowledge arcs in three complete learner pages. Every outcome has a real standalone worked example, immediate Vận dụng/optional Đối chiếu and D6 routing; visible 116/116 canonical Practice items and question-only 22/22 public replay placements.
MATH_VERIFICATION: On current source, directly rechecked `∫₁³4x dx=16` (O08), `∫₀²(5−2t)dt=6 m` with v(t) m/s (O14), `∫₋₂²(x²−1)dx=4/3` versus area 4 (O16), two-curve area 19/3 (O18), area 9/2 (O19), square cross-section volume 13/3 cm³ (O20) and washer volume 6π (O22). Older 26/26 example/SVG checks remain historical source-locked receipt, not claimed as newly rerun full.
PED_VERIFICATION: O08 states endpoint continuity of F explicitly to block invalid Newton–Leibniz endpoint substitution; O14 student reading now consistently distinguishes flow r(t) L/min model from *velocity* v(t) m/s displacement s(2)-s(0) without mixing units. Real worked example and First Try check dimensional correctness; changes scoped to O08 and O14. Natural explanation remains outside formal boxes, four figures still source referenced.
CANONICAL_Q15: 116 original unique DISPLAY_ONLY_CANONICAL IDs =88 original immutable G12 SGK+28 active Topic NEW28 bank; no changed Practice stems, answer calculations, worked solutions, Written rubrics or item content_version. 22 public replay IDs unchanged and reuse exact existing Topic P01–P22; no clone; 28 Written rubrics remain in original libraries.
ASSESSMENT_Q16: 22 public question-only selfcheck, zero exposed key/hint/rubric or disclosure in Self Check; no protected RD1 on GitHub, no official graded Final Submit or Mastery asserted.

## Ba hồ sơ được kiểm trước sửa

- [#864](https://github.com/TMA2015/self-learning-math/issues/864): chỉ ba phần, đánh số 1/1.1, nhãn Ví dụ/Đề/Lời giải/Vận dụng/Đối chiếu, câu thật và 1 nguồn cuối; không lộ control-plane.
- [#882](https://github.com/TMA2015/self-learning-math/pull/882): full Topic Academic/PED audit. Existing R20 22-source consolidation is not new independent full-content PASS.
- [#865](https://github.com/TMA2015/self-learning-math/issues/865): TOP11-Q18-NEWFORMAL source SHA mismatch and previously repaired technical metadata/PED; direct regression check on **current learner**.

## Source-delta comparison / why previous 4 new boxes were NOT just metadata

Direct line-by-line comparison `58b16f7c442d560f3950aafdbaf1f686e1e337e4` (2,432 lines) → `7c3b35380381e6edbf10b64a9f0454f9b676e05b` (2,455 lines), **seven change groups**: four prior prose math sentences rewritten as `ĐỊNH NGHĨA/CÔNG THỨC/ĐỊNH LÝ`, one recap, two student-facing metadata rewrites.

- **O01:** `F'=f` on an interval and all primitives `F+C` as previously explained; separate constants on disconnected pieces.
- **O03:** `∫x^n dx=x^{n+1}/(n+1)+C` with `n≠−1` and valid real interval, and `n=-1 → ln|x|`, same condition/principle as original prose. Verified differentiation of the power and log.
- **O08:** Original Newton–Leibniz text required continuous f on closed interval, primitive F and vaguely `thỏa điều kiện đầu mút`; the box makes old conclusion explicit and newly states precise endpoint condition.
- **O16:** `S=∫|f|` on a finite interval, sign split, not `|∫f|`, as in prior prose.
- **Recap:** no new math, rehearses sign of displacement, proper integration domains, square/circle/washers.
- **Practice and Q15:** learner-facing technical jargon removed previously; old Q18 on `58b16f...` remains historical for that blob.

## New material correction requiring targeted independent review

1. **TOP11-O08 Newton–Leibniz:** changed ambiguous `F nguyên hàm trên đoạn (khả vi phần trong, thỏa điều kiện đầu mút)` to explicitly require `F` **continuous on [a,b]**, differentiable on (a,b), with F'=f in (a,b). Formula `∫_a^b f=F(b)−F(a)` and numeric outcome unchanged. If continuity at endpoint is omitted, redefining F(a) arbitrarily invalidates endpoint evaluation. Check whether the exact wording remains correct and accessible to learner.
2. **TOP11-O14 physical model:** old `Lưu lượng có hướng r(t)=5−2t m/s` falsely used flow terminology with velocity units and calculated *displacement*. New standalone Example uses `v(t)=5−2t m/s`, `s(2)−s(0)=6 m` over 0–2 **seconds**, and explains `v(t)≥1` so distance=displacement; new First Try `v=3t² m/s` on 0–1 s yields 1 m. Original earlier flow model `r(t)=2t` **L/min** giving 4 L is retained for contrast. Exact data, integral, numerical answers, canonical bank and rubric unaffected, but this is an academic modeling correction, so `DELTA_C_ACADEMIC_MATERIAL` for this outcome.

## Direct structural and Q15 safety checks on the current blob

- 22 lesson and outcome markers, 22 headed examples, 22 immediate Vận dụng.
- 116 **Bài** stems and 116 unique display-only canonical IDs, original 88 G12 source and Topic 28 bank SHA exact; unchanged canonical ID sequence vs prior signed source.
- 22 question-only selfcheck placements, all reused from the 116; 138 opening/138 closing `<details>` including 22 First Try and 116 Practice.
- 4 actual Topic SVG paths referenced beside relevant explanation. Original G12 reviewer-reviewed *6 PNG* not falsely claimed as the four new Topic SVG. One SGK S1 source footer at end of full Topic.
- No visible `item_id/Q15/Q16/Anchor/Mastery/Final Submit` jargon in learner prose.

## Decision and scope boundary

**Academic/PED affected-scope author self-verification completed. Independent NotebookLM (exactly five Permanent Sources v2.1 + S1) reviewer verdict still missing for TOP11-O08 and TOP11-O14.** Thus `ACADEMIC_AUTHOR_SELF_QA_PASS` is not `CONTENT_READY` for the **current source** under the owner Delta C policy. Declare `BLOCKED_BY_AUTHORING_INDEPENDENT_AFFECTED_SCOPE_REVIEW`; old R06 ready manifest/source/receipt is historical only and **must not** be treated as current source acceptance. After reviewer Academic+PED PASS/P0/P1=0 and minimal delta closed, update exactly one active Q18/V2/ready/REGISTER to current Git blob and run Topic V2 exact-HEAD; no global Topic re-review from a small affected delta. No merge/deploy.
