# G10 ChIV B09 · SGK scalar-vector 3+1 / noncollinear decomposition R03 · 17/11/2026

**PACKET_ID:** `G10_CHIV_B09_S1_Q18_SEMANTIC_DECOMPOSITION_R03_20261117`
**LESSON_ID:** `G10-CHIV-B09`
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.2.0`
**MASTER_DEFECT_LEDGER:** [#795](https://github.com/TMA2015/self-learning-math/issues/795) / `B09-F01` / `B09-F02` / `G10-SEM-01`
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (missing S1 outcome + explanation/examples/diagram), `DELTA_A_UI` (scoped Golden semantic palette).
**REVIEW_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT_CANDIDATE` — self-audited affected lesson content; **not** an independent NotebookLM Academic/PED PASS; *NOT CONTENT_READY*.
**SOURCE_BASELINE_BLOB:** `2529b915e4089862e1a48e685ba5dc88d5450558`
**R03_SOURCE_BLOB:** `507408fb2f7f57c7d6b8ebd135f372e33c325283`
**CSS_BASELINE_BLOB:** `0cdc618cf9a070f1b1ed50566877f5de0d025ee8`
**R03_CSS_BLOB:** `7a658ab449818a616382c145c72880066c2ab57a`
**R03_SVG_BLOB:** `6a7c8a608dcc2ad90353890b5415e123d7878807`
**R03_MOBILE_SVG_BLOB:** `a37dd77639b3300ab5b860da6dec9d856c0a152d`
**MOBILE_SVG_PATH:** `docs/assets/images/thpt/THPT_G10_B09_DECOMPOSITION_MOBILE_D5_R03.svg`
**STANDARD_BLOB:** `24f744b5d9f114d053b6e2e1ab8a0fb26c3fab39`
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-9.md`
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`
**SVG_PATH:** `docs/assets/images/thpt/THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg`
**SOURCE_AUTHORITY:** SGK KNTT Toán 10 tập 1 **printed pp55–59 indicated in public table of contents / digital source**, public SGK text at `https://olm.vn/thu-vien-so/doc-sach/shs-toan-tap-1.4491362330` (searched 17/11/2026): official “Chú ý” after Luyện tập 3 states every plane vector decomposes **uniquely** against two noncollinear vectors. **Original publisher printed-page/PDF-index pair was NOT directly reopened in this session**; `SOURCE_SCAN_AUTHORITY_PENDING`. Do not claim publisher S1 full direct scan.
**ASSESSMENT_STATUS:** `BLOCKED_BY_AUTHORING / NO_CANONICAL_DECOMPOSITION_ITEM` and `NO_NEW_ITEM_IN_RELEASE`.
**STATE:** `R03_DRAFT_QA_PENDING / B09_F01_FIX_IN_CANDIDATE / B09_F02_AUTHORING_BLOCKED / NO_MERGE_NO_DEPLOY`

## G0 source/known-defect intake

Use one effective v3.2.0 (Q01–Q18, X-F.3 3+1, G0–G5); Issue #795 and historic Issue #861 (14/11 snapshot B09 no formal semantic boxes). B07 R05 and B08 R04 have owner P2 PASS immutable. B09 is the sole active RELEASE lesson. Do not retroactively change B01–B08, don't restart old rollout, don't create Topic work or clone questions.

## G1 academic semantics and S1 outcome coverage — reviewer must inspect actual contents, not count boxes

| S1 concept/outcome | Mandatory math and condition | Candidate learner-facing evidence | Role |
|---|---|---|---|
| `G10-B09-SCALAR_DEFINITION` | (k\vec u) has length (|k|,|\vec u|); direction follows sign (k\ne0) for (\vec u\ne0); (k=0) or (\vec u=0) gives zero vector | `Định nghĩa — Tích của một vectơ với một số` | `FORMAL_DEFINITION` teal |
| `G10-B09-DISTRIBUTION` | (k(u+v)=ku+kv), ((k+m)u=ku+mu), (k(mu)=(km)u), unity/opposite; holds all real k,m | `Tính chất của phép nhân vectơ với một số` | `FORMAL_RULE` blue |
| `G10-B09-COLLINEAR` | with fixed nonzero (\vec b), (a,b) same direction support iff (a=t b); (a=0) possible with t=0; no division by zero | `Điều kiện hai vectơ cùng phương` | `FORMAL_RULE` blue |
| `G10-B09-DECOMP_S1` **provisional authoring outcome mapping only** | Two noncollinear vectors (\vec a,\vec b) yield a **unique** (x,y) with (\vec u=x\vec a+y\vec b); geometric construction and proof uniqueness; failure for collinear base | “Phân tích một vectơ theo hai vectơ không cùng phương”; figure `R03.svg`; `Ví dụ 4` midpoint decomposition | `FORMAL_RULE` blue |
| `G10-B09-MIDPOINT_CENTROID` | (OA+OB=2OI) if I midpoint; (AG=2/3 AM=1/3(AB+AC)) and (OA+OB+OC=3OG) if G centroid | `Hệ thức trung điểm – trọng tâm`, formulas with actual geometric conditions | `KEY_FORMULA` transparent |
| Entire B09 | Required reminders of scalar sign, distributive math, collinearity, decomposition, midpoint/centroid, not just method tip | `Kiến thức cần nhớ — Bài 9` | `MANDATORY_RECAP` amber |
| Local misconception | length never negative, direction of vector zero, problem selection | Bold notes and concrete HELP (two canonical existing HELP IDs) | `LOCAL_NOTE` inline, no fifth card |

**S1 heading safety:** Published source has top two 2.x parent sections unchanged. Decomposition is introduced under `2.2` as a **subtopic/SGK Chú ý**; do not invent a new 2.3 official SGK main heading before direct S1 print check.

## G2 self-pedagogical check / risks

Learner-led “why study” after Five existing First Try, then core definition from intuition, precise length/hypotheses, rule selection by mathematical form, new decomposition picture before text interpretation, proof of uniqueness (coefficients), four progressively different worked examples with “Hướng giải, Giải, Tự kiểm”, explicit noncollinear triangular example (overrightarrow{MN}=-\tfrac12\vec a+\tfrac12\vec b); D6 rescue path points to B08 vector sum/difference and B09 example, not an assessment hint.

Existing original 5 `THPT-G10-CHIV-TRY11`–`TRY15` with exact questions/answers/disclosure unchanged, 2 HELP IDs `HELP-G10-B09-01/02` unchanged. Current canonical formative engine `docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js` provides B09-C01/C02 and B09-P01…P06 only for scalar length/direction, distribution, collinear, midpoint/centroid. Existing public W09 covers point ratio/midpoint. **No canonical item currently checks noncollinear decomposition**, which is an **S1 mandatory outcome**. Do not turn the new worked example into a second untracked canonical assessment item or alter private RD1. This prevents `Q02/Q15 / CONTENT_READY` PASS until AUTHORING supplies canonical source/review/handoff and a RELEASE receives that package.

## G3–G5 release gates and HOLD

- Source SHA locked exact R02 editorial baseline → R03; CSS prefix byte-equal B08 accepted snapshot, add only B09 canonical `TRY11` selectors for teal/blue/neutral, amber inherited. Both source/render dark/light at 390/820/1440 and no orphan TeX, no private data.
- B09 desktop and mobile SVGs must have `title`, `desc`, no scripts, math arrows correct and readable mobile; existing scalar SVG unchanged.
- Unchanged Core/Practice/W09/canonical Q15 content, Final Submit/RD1/Mastery, THCS and other 78 lessons.
- **Blocking criterion** even if all CI PASS: `B09-F02 / BLOCKED_BY_AUTHORING / NO_CANONICAL_DECOMPOSITION_ITEM`, plus publisher S1 page index `SOURCE_SCAN_AUTHORITY_PENDING`. AUTHORING must verify original source, determine canonical outcome and one answer/solution/rubric, conduct affected Academic/PED/Q18 review, handoff V2 with SHA; RELEASE only accepts legitimate `CONTENT_READY` and reruns exact HEAD CI/P1.
- All PR, CI, HTML sha and statuses must be written to #795. `B09-F01` may be `FIXED_IN_DRAFT` only, **never OWNER_P2_PASS**. No automatic B10 until the owner signs off B09.

**STOP STATUS:** `BLOCKED_BY_AUTHORING / READY_FOR_TARGETED_SOURCE_QA_ONLY / NO_MERGE_NO_DEPLOY`.
