# G10 SGK Chương VII B19–B22 — S1/Q18 Golden ENRICHMENT_DELTA_RECEIPT

**Date:** 13/11/2026 · **Standard:** \`SLM-THPT-QUALITY-ONE v3.1.0\` (Q01–Q18, §X-C/§X-F; single authoritative standard in \`main\`). **Mode:** \`Q18_OWNER_SELF_VERIFIED_ENRICHMENT\` in the owner-authorized **RELEASE** lane for *existing published* Knowledge. This is an affected-content S1/math/PED self-review, **not** an independent NotebookLM PASS, not a Topic PASS, and not a replacement for the protected Chapter Readiness gates.

**Previous published main:** \`bfc15b552a1ea697edb1327f0a48d7a95bbb73ed\`. **Candidate branch:** \`release/g10-chvii-b19-b22-golden-s1-q18-preview-20261113\`. **Scope:** knowledge Markdown for four lessons, scoped Golden lesson-nav JavaScript, only targeted QA source/workflow checks. All other pages, CSS, Core/Practice, chapter self-check, canonical ID/bank answer/rubric, Written, private RD1, Q15/Q16/Final Submit/Mastery, student data, THCS, G11/G12, Firebase/Gemini unchanged.

## 1. Primary S1/printed-page scope

**Authority:** Toán 10 **Kết nối tri thức với cuộc sống — Tập 2**, printed book pages 30 onward, following existing G10 source ledger and Project S1 source custody. Cross-checked table-of-contents headings against publicly searchable digitized KNTT book transcription (secondary evidence, not a replacement for S1 primary scan):
- B19: https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-19-phuong-trinh-duong-thang-11997.html
- B20: https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-20-vi-tri-tuong-doi-giua-hai-duong-thang-goc-va-khoang-cach-12001.html
- B21: https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-21-duong-tron-trong-mat-phang-toa-do-12006.html
- B22: https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-22-ba-duong-conic-12012.html

| LESSON | PRINTED SGK T2 | TRUE S1 TAB 2 SECTIONS | FIRST TRY |
|---|---|---|---:|
| B19 | 30–35 | 2.1 Phương trình tổng quát của đường thẳng; 2.2 Phương trình tham số của đường thẳng | 7 |
| B20 | 36–42 | 2.1 Vị trí tương đối giữa hai đường thẳng; 2.2 Góc giữa hai đường thẳng; 2.3 Khoảng cách từ một điểm đến một đường thẳng | 5 |
| B21 | 43–47 | 2.1 Phương trình đường tròn; 2.2 Phương trình tiếp tuyến của đường tròn | 5 |
| B22 | starts p48 (exact final printed page not revalidated) | 2.1 Elip; 2.2 Hypebol; 2.3 Parabol; 2.4 Một số ứng dụng của ba đường conic | 8 |

**S1 custody caveat:** This release turn did not independently open/hash the primary 102-page printed scan nor verify its last-page offset. Do **not** invent PDF page indices or say the four lessons have independent full Academic/PED PASS from S1 screenshots. Published source original content and all mathematical expressions remain the controlling baseline for equivalence checks. Any contradictory S1 snapshot evidence is \`STANDARD_CONFLICT_HOLD\`, not permission to guess.

## 2. Immutable source blob chain

Prior published blobs are the exact candidate column of the 27-row canonical UX795 legacy source ledger \`prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md\`. The new receipt extends those sources for *this one RELEASE*. No original ledger row or earlier ChVI/V/IV receipt is rewritten.

| LESSON | PUBLISHED_BASELINE_BLOB | NEW_CANDIDATE_BLOB | MOVED_FIRST_TRY | TOTAL_D6_HELP | BOXED_EXAMPLES |
|---|---|---|---:|---:|---:|
| B19 | \`36226f87857499897da3f62aaa9bd6a6f2ec7784\` | \`8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c\` | 7 | 9 | 2 |
| B20 | \`4a704fdbc8ff6eecb932c8c61187b891f40e01ec\` | \`510f79eb61930e9b0d7795d4b0288fd29ccb0675\` | 5 | 7 | 2 |
| B21 | \`13692ca5f8c0a7d648edccf5f9a7535cfdb1b85d\` | \`0af5e4d9e2348575f2be7de57f81acd00098bc55\` | 5 | 7 | 2 |
| B22 | \`aac177881e9e8a1fde9f7fa8213c56793eb966f2\` | \`77e4ca9e2b68b057d69bc6f3c997bd09a8c592d3\` | 8 | 10 | 3 |

**Golden JS baseline:** \`53be8f8e427a4d813651d8352f9fde4b98a2de1e\`. **Scoped ChVII candidate:** \`f1e19da9e6629d267010ba055f29482daaaecd59\`. Reuses owner Golden shared CSS *unchanged* and correct ChIV/chV/ChVI behavior unchanged. All 9 ChVII examples have **exactly one** \`.thpt-g10-example-solution\`, wrapping **only** worked \`Lời giải.\` and its calculation steps. No entire-example narrative exception in B19–B22; prompt, justification, self-check and student tip remain *outside*.

## 3. Academic/pedagogical affected-scope self-audit (Q01–Q18)

- **B19:** 2.1 distinguishes a nonzero **normal vector**, \`a²+b²>0\`, and general line \`ax+by+c=0\`; 2.2 distinguishes a nonzero direction vector, free real parameter \`t\` and **two distinct points** \`A≠B\`. A point on a line must satisfy its equation; arbitrary nonzero multiples of a normal/direction vector preserve its role. Formula/figure text from previous published SHA is preserved.
- **B20:** 2.1 intersection vs parallel/distinct vs coincidence checks **all three coefficients** and handles zero determinant; 2.2 smaller angle \`0°–90°\` uses absolute dot product of *nonzero* normals; 2.3 distance uses perpendicular projection and absolute numerator divided by positive normal length; a chosen oblique segment is not the shortest distance.
- **B21:** 2.1 \`(x−a)²+(y−b)²=R²\` with **R>0**; general equation represents a true circle only when recovered \`R²>0\`; \`R²=0\` singleton, \`R²<0\` empty. 2.2 tangent at point \`M\` requires verifying \`M\` is on circle and perpendicularity to \`IM\`; line-circle distance criterion \`h<R,=R,>R\` preserved as supporting explanation.
- **B22:** elip \`c²=a²−b²\` for its specified major-axis \`Ox\` convention; hypebol \`c²=a²+b²\` and asymptotes \`y=±bx/a\`; parabol S1 source convention \`y²=2px,\ p>0\`, \`F(p/2;0)\`, directrix \`x=−p/2\`, not \`F(p;0)\`. Applications retain conditions and units, actual cross-section/coordinate-domain and time-difference sign/which branch. **Two authored transfer D6 references** formerly containing internal D4/RD1/Core administration were rewritten into actionable learning cues; canonical HELP IDs and five-step structure preserved. The irrelevant student-facing optional managerial note about eccentricity Core scope was removed; no mandatory canonical item or required formula removed. Optional specialist \`B22-C01\` remains in its original nonmandatory learning route; RD1 untouched.

**Learner sequence:** the 4 mandatory Golden tabs stay \`Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp\`. Source learner path: *WHY/prior knowledge → pedagogic intuition + 25 original unscored First Try closed answers → exactly 2/3/2/4 true S1 section headings → 9 explicit prompts & solutions → 33 total D6 HELP*. Figures 1/1/1/3 preserved (6 total). All original 25 canonical \`data-thpt-first-try-id\`, outcomes, \`data-thpt-help-ref\`, all 33 \`data-thpt-help-id\`, original first-try answer mathematical bodies and all original TeX remain. Question opening label \`Đối chiếu\` is meaningful because it is a *voluntary canonical First Try*, never a scored answer preview.

## 4. Release guard and no-ChVI-regression specification

1. **Source exact-Git-blob test:** compare original \`main\` commit source to the four signed new blobs, unchanged canonical IDs/formative answers, outcomes, figures and all old TeX; fail on SHA mutation, item-ID mutation, answer change, math omission, misleading official section titles, wrongly placed First Try or HELP. Assert chapter source figures and contextual examples still complete. Only changed review-scope D6 explanatory wording/metadata explicitly logged.
2. **Golden AP / R4 browser:** 4 lessons × 390/820/1440 (12), exactly 2/2/2/3 worked examples, one solution panel per example, boxed text starts \`Lời giải.\`, **no \`Đề bài\`, \`Vì sao chọn cách này?\`, \`Kiểm lại\`, or HTML student note inside box**; there are **zero whole-box exceptions**, unlike conceptual-only ChVI. 25 First Try and 33 HELP default closed; keyboard Enter opens/closes only when asked. Confirm figure SVG decode+alt, no overflow and no private assessment/Mastery writes. Re-run 27 G10 browser lessons, ChIV–VI Golden, UX795, R4 exact HEAD, Roadmap.
3. **Protected assessment:** No additional item rows, public final self-check keys/rubrics, Q16/RD1/Final Submit, Skill Mastery, hints before independent Final Submit, or Firebase/student data changes.
4. **Immutable history:** Old Golden ChIV–VI PASS unaffected by this new scoped route; production P1 and physical device P2 only when release gates and owner permission pass, and the physical device check must cover **new ChVII** separately.

**State on creation:** \`G10_CHVII_B19_B22 / SOURCE_STAGED / Q18_SELF_AUDIT_PENDING_CI / DRAFT_NO_MERGE_NO_DEPLOY / P2_NOT_TESTED\`.
