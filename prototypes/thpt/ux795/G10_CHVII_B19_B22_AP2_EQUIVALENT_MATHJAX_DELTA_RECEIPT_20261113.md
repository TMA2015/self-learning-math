# G10 ChVII B19–B22 — RELEASE AP2 equivalent MathJax normalization (13/11/2026)

**Scope:** \`SLM-THPT-QUALITY-ONE v3.1.0\`, \`DELTA_A_UI\` rendering-only correction in the *existing, not-yet-merged* PR #845 Draft text. This is a new isolated \`release/g10-chvii-ap2-typeset-20261113\` branch based on exact PR #845 HEAD \`38f01ecc401bf420b39a7a4ae6c71187bfe3b1f4\`. No SOURCE/ACADEMIC/PED PASS is inferred. The author-reviewed source is *not changed in PR #845*. Do not merge or deploy until all academic DELTA_C blockers are resolved.

## Source chain and immutable question content

| Lesson | PR #845 reviewed baseline Markdown blob | AP2-only new Markdown blob | Unscored canonical exercises | Original HELP |
| --- | --- | --- | ---: | ---: |
| B19 | \`d05c315cf75df5fee356f0be66b04d4009fdafe9\` | \`119cbabec7bfd67edb03462f93f740f670ff01f3\` | 7 | 9 |
| B20 | \`b26f5546a6847907b3d8be414bc308530edfea17\` | \`148932c76eb1a958506575f9cb50f40e77fe05f5\` | 5 | 7 |
| B21 | \`dd870973d7e824ee8b81eaaadf7abe8936d7c78a\` | \`27b9910b575607b123130b4e4a7ac443562215ac\` | 5 | 7 |
| B22 | \`c6253e0a1977728dd1da81448f0d3473d9437be7\` | \`f8ee2df8754fd6a6d4fd2d941ea47700b8a0b9f0\` | 8 | 10 |

**Exact changes:** New \`\\(...\\)\` MathJax delimiters and equivalent mathematical TeX syntax ONLY in the explanatory paragraphs that precede \`**Em vận dụng.**\` of the first Golden tab. Original words, definitions and mathematical conditions remain unchanged. The 22 formula-bearing blocks that needed changes were B19 \`TRY01–05,TRY07\`; B20 \`TRY08,09,11,12\`; B21 \`TRY13–17\`; B22 \`TRY18–21,TRY23,TRY-ELLIPSE-TR01,TRY-HYPERBOLA-TR01\`. Three purely verbal blocks \`TRY06\` B19, \`TRY10\` B20, \`TRY22\` B22 require no artificial math delimiters. B19 \`TRY07\` already had *some* genuine MathJax and got remaining stray variables normalized. This corrects the blanket “24/25 missing” metric: **no artificial target count replaces actual mathematical expressiveness.**

**Examples of exact equivalence:** \`n·u=0\` → \`\(n\cdot u=0\)\`; \`d(M,d)=|ax_M+by_M+c|/√(a²+b²)\` → \`\(d(M,d)=\frac{|ax_M+by_M+c|}{\sqrt{a^2+b^2}}\)\`; \`c²=a²−b²\` → \`\(c^2=a^2-b^2\)\`; \`y²=2px\` → \`\(y^2=2px\)\`. TeX vectors preserve original geometric meaning; no new teaching content/formula beyond previous source.

**Unmodified byte-for-byte:** all four \`=== "Kiến thức SGK"\` and later tabs; 25 question statements, 25 open-on-demand \`Đối chiếu\` answer bodies, 33 HELP, original \`item_id / outcome_id / HELP\` identity, 9 worked examples, 6 SVG, Core, Written, scores, Mastery, private RD1, Q16 Final Submit, website CSS/JS, learner records, THCS, G11/G12. No reclassification of \`TRY06, TRY17, TRY18, TRY20\` in this UI-only patch.

## Separate academic blockers STILL OPEN — no release

Received NotebookLM report and targeted metadata reconciliation both say \`ACADEMIC_REVISE / PED_REVISE\`, \`TARGETED_CLEARANCE_NO\`. Actual P1 academic fixes pending AUTHORING: B21 disk-vs-boundary, B19/B21 prerequisite placement, B22 eccentricity in narration only, B22 asymptote as extension. P2 educational-value gaps: SGK B20 derivation from shared-point system/normal projection, B21 circle and tangent geometry, B22 string-pegs ellipse and focus/directrix parabola. **This receipt does not revise or approve any of those.**

QA acceptance of this AP2-only candidate requires: old/new Git blob chain, exact 4-tabs/IDs, original answer bodies identical, balanced real MathJax delimiters, no nested delimiters, actual rendered equations across 390/820/1440 px, G10 regression, Q15/Q16/R4 and Roadmap on final exact HEAD. Any change of mathematical meaning becomes \`DELTA_C_ACADEMIC_MATERIAL\`, not UI.

**Status:** \`AP2_SOURCE_STAGED / EQUIVALENT_MATH_QA_PENDING / ACADEMIC_REVISE / PED_REVISE / NO_MERGE / NO_DEPLOY\`.