# Bài 33 — Biên nhận tự kiểm và bàn giao Knowledge

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
RELEASE_SCOPE: SGK_KNOWLEDGE_ENRICHMENT_ONLY
LESSON_ID: G11-B33
SOURCE_PATH: docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md
BASELINE_SOURCE_BLOB: 920752c92ab12a97d8e034780907fd2bcaac1308
CANDIDATE_SOURCE_BLOB: d32215716790846bf910a20e334fdbf4253880b2
ACADEMIC_SOURCE_BLOB: d32215716790846bf910a20e334fdbf4253880b2
SOURCE_COMMIT: fa0aa257b5bbcfd3611b46362951098e627c2c01
BASELINE_PUBLISHED_HTML_BLOB: 5e7f0bfa4442903ae4bc271a53e6296320710722
FIG_ASSET_BLOB: 58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9 (existing unchanged)
AUTHORING_PR: #1068
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY (unchanged)
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
BLOCKERS: NONE (authoring Knowledge scope)
AUTHORING_PASS: CONTENT_READY (Knowledge enrichment only)
RELEASE_INTAKE: PENDING_RELEASE

## S1 and scope

Read the actual digitized KNTT Toán 11 tập 2 SGK B33, printed pages 95–96 ([PDF](https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf), text pp.95–96: definition, HĐ1–2, examples, applications, exercises 9.13–9.17). Both sections and all essential results are covered. PDF text was read directly; source screenshot cache miss does not alter the verified textual mathematics. Baseline original chapter's independent receipt and source lock remain unchanged; not claimed for new prose. Main learner baseline and gh-pages HTML checked against matching old section headings.

## Actual self-QA by affected outcome

| OUTCOME_ID | DELTA_ID | Mathematical verification and teaching evidence |
|---|---|---|
| G11-B33-SECOND_DEF | B33-KNOW-01 | §1.1/2.1: definition `f''=(f')'`, existence of f' and differentiability of f' at point; x³−3x²+2x gives f'(1)=−1, f''(1)=0; new counterexample x|x| has f'=2|x| and left/right derivatives −2/+2 at 0, so f''(0) does not exist. Distinguish square from repeated differentiation. |
| G11-B33-POLYNOMIAL | B33-KNOW-02 | §3.1: 2x⁴−3x²+6 → 8x³−6x → 24x²−6; §3.8 parameter a=−1,b=2, independently substitute both conditions. |
| G11-B33-TRIG_EXP | B33-KNOW-03 | §1.1/2.1/3.2–3.5/3.9: two chain applications; x²+e^(2x−1) → 2+4e^(2x−1); xe^(2x) → (4+4x)e^(2x); different self-attempt xe^(3x) → (6+9x)e^(3x); ln(2x+3) → −4/(2x+3)² only for x>−3/2; sin(2x+π/4) → −4sin(2x+π/4); 2sin²(x+π/4) → 4cos(2x+π/2), bound 4 attained. |
| G11-B33-ACCELERATION | B33-KNOW-04 | §1.2/2.2/3.6–3.7: s→v→a from average acceleration limit; SGK spring a(5)=−8π²≈−79 cm/s²; s=2t²+½t⁴ gives v(4)=144 m/s, a(4)=100 m/s². Distinct discovery/recap functions: s=3t²+t³ gives a(2)=18, s=5t²+2t gives a=10. |
| G11-B33-SIGN_INTERPRET | B33-KNOW-05 | §1.2/2.2: same/opposite signs of v,a when v≠0; no inference at v=0. Cubic s example v(0.5)=v(1.5)=−0.25, a=−3/+3; separate SVG velocity/acceleration axes and units; oscillator x=3cos(2πt) gives v(1)=0 and a(1)=−12π². |

All nine original worked-example derivative computations independently checked with centered finite differences and analytical calculations; final edits checked by separate numerical tests and symbolic one-sided limits. All examples/conditions and signs reread. Self-attempt differs from solved product example. Discovery motivation, explanation before formalization, two SGK sections, worked examples and local remediation retained. Existing SVG math corresponds to v=3t²−6t+2, a=6t−6; caption explains separate units/axes. No new learner asset or parallel learner source.

## Scope, safety and handoff

Five original outcome IDs remain unchanged. Existing public Core/Practice C01–C05 and P01–P05 and Written/Anchor remain frozen; original public source register consulted, no item introduced, moved or modified; no private RD1 data accessed or copied. Two Vận dụng self-checks on Knowledge only, no independent assessment claim or Mastery writes. Four-tab source, two aligned sections, inline MathJax pairs balanced, existing SVG path verified. Scope-only author signoff: Q01–Q18 relevant to changed Knowledge satisfied, historical independent review applies only to old snapshot; P0=0; P1=0. This is a self-verification, not a claim of external reviewer PASS.

**AUTHOR_SIGNOFF:** ChatGPT AUTHORING — author confirms complete, correct and teachable within the assigned Knowledge-page scope; source locked at the commit/blob above. The existing §X-C enrichment-delta route applies to an already published SGK page: this receipt serves as the handoff for the one-lesson release batch, not a new whole-chapter V2 manifest/REGISTER or second academic approval. RELEASE may import the exact canonical learner bytes and unchanged asset from PR #1068, compare baseline and candidate blobs, and perform its scoped integration/render/assessment-safety checks. No release permission or deploy claimed.

