# G10 B15 · iPhone owner P2 editorial / graphic-note DELTA · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B15-P2-EDITORIAL-NOTE-R01-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 · Q01–Q18, §X-C/§X-F · existing Golden
**LESSON_ID:** G10-B15 · **OUTCOME_ID:** B15_OUT_03 for graph reading; Tab 4 metadata only
**PRIOR_RELEASE_COMMIT:** `5af93d8f6ae6a490e8a721dbb25ef4c9daf54aad`
**PREVIOUS_B15_SOURCE_BLOB:** `131947762d1c2ad1c109602a5cbe2e7fea71652e`
**CANDIDATE_B15_SOURCE_BLOB:** `cc0b8a2d8aad63fc360246b07122094498634779`
**HISTORICAL_OWNER_Q18_RECEIPT_BLOB:** `e42392b9a020dd5cbea463a42739b3fbcd4e0cd0`
**EXISTING_GOLDEN_CSS_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078`
**QA_MODE:** `Q18_OWNER_SELF_VERIFIED_SCOPED_COPY_UI`; not independent NotebookLM review
**DELTA:** `DELTA_A_UI` (remove standalone admonition) + `DELTA_B_SOURCE_EQUIVALENT` (concise accurate explanation); no material math/answer/assessment delta
**OWNER_AUTHORIZATION:** Owner directly requested fix and republication after reviewing actual iPhone P2 screenshots. B16 work authorized after B15 release; B16 release separately gated.

## Exact minimal delta, G0–G2 editorial self-check

1. **Tab 4:** remove the redundant student-facing meta paragraph starting `Những lỗi dưới đây là sai lầm toán học dễ mắc`. All 4.1–4.5 mistakes, five D6 HELP IDs, detailed self-remediation and Core links remain verbatim.
2. **Tab 2 §2.2:** remove one `!!! tip "Lưu ý khi đọc hình"` MkDocs admonition; preserve the useful vertical-line criterion as one ordinary body-font paragraph beginning `Cách kiểm tra trên đồ thị:` and explicitly clarify it is a general test, not an instruction for the earlier mapping SVG. **No new diagram/card/component/CSS.** Mathematical condition retained: two distinct ordinates at one abscissa violate single-valued function.
3. **Source and assessment protected:** only these two hunks change. Prior full-lesson Q18 receipt, Q15 canonical First Try, five voluntary `Đối chiếu`, all answer/rubric bodies, MathJax, SVG, figure captions, Golden tabs and shared CSS remain exactly as approved. No Mastery, private RD1, Final Submit, Gemini or Firebase change.

**Proof:** `scripts/test-g10-b15-p2-editorial-delta.cjs` reconstructs previous released B15 source byte for byte from the revised source and asserts both Git blob SHAs, exact 2-hunk transform and guards labels/ids/answers. Whole-site R4 is not needed for a lesson-local copy update without CSS/runtime changes; scoped ChVI browser at 390/820/1440, Q16/receipt and exact-final-head CI still required.

**STATUS AT AUTHORING:** `P2_FIX_DRAFT / CI_PENDING / NOT_MERGED / NOT_DEPLOYED`. After owner-authorized merge/deploy, verify `gh-pages` emitted HTML/source/CSS and B12–B14 P2 snapshot parity; only then claim P1. Owner P2 remains pending until the new real-device check.
