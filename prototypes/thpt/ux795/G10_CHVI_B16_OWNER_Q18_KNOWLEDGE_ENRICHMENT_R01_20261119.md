# G10 B16 Hàm số bậc hai · owner-initiated RELEASE Knowledge enrichment · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B16-OWNER-SELF-QA-R01-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 · Q01–Q18, §X-C/§X-F
**LESSON_ID:** G10-B16 · **OUTCOMES:** B16_OUT_01..05 · **PATH:** SGK Knowledge, 4 Golden tabs
**OWNER_AUTHORIZATION:** “... sau đó tiến hành nâng cấp bài 16” after B15 P2 hotfix publication; this **authorizes B16 authoring/editing only**, not automatic merge or deploy
**S1_REFERENCE:** Toán 10 KNTT tập 2, Bài 16 *Hàm số bậc hai*, printed 11–18, PDF 12–19 per historical S1 receipt `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md`; historical scan not directly reopened or newly hashed here
**BASE_MAIN_COMMIT:** `400e4820fe37c12a6db151cdcb094a79e31f7376`
**BASELINE_PUBLISHED_B16_SOURCE_BLOB:** `4ddf9c449f92a9f48bace5a3f9b84186bf33af20`
**CANDIDATE_B16_SOURCE_BLOB:** `08bfaf6b7c341556cdd9e1660fca5b0b2fa78429`
**PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078`
**CANDIDATE_SCOPED_GOLDEN_CSS_BLOB:** `14001f525b1825557493f439a1f0555e9614185f`
**VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT_IN_PROGRESS`, no independent NotebookLM PASS
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for new visible questions, formalization and reasoned examples, plus `DELTA_A_UI` for B16-only semantic teal/blue CSS
**ASSESSMENT:** Public First Try self-reveal only; no new item IDs, changes to Core/Practice/Written, Final Submit, RD1, Firebase or Mastery

## G0 / G1 / G2: learner-first whole-lesson defects and corrections

- **B16-PED-FIRST-TRY-08/10:** Original canonical `TRY08` and `TRY10` had `data-thpt-first-try-id` and unchanged answers but **no visible posed problem**. Restored learner prompts aligned exactly to original answer: `TRY08` for `f(x)=(x-1)^2-4` graph characteristics; `TRY10` for `h(t)=-5(t-2)^2+20` on `0 ≤ t ≤ 4`. Keep five original TRY IDs/order, answers and five D6 HELP IDs.
- **B16-S1-GRAPH-02:** Original formal §2.2 `Cách đọc hình` wrongly stated vertex `(1;-4)`, axis `x=1`, roots `-1,3` while the immediately preceding in-page graph describes `y=x²−4x+3=(x−2)²−1`. Corrected prose to vertex `I(2;−1)`, axis `x=2`, Ox intersections `(1;0), (3;0)`, Oy intersection `(0;3)`; explicitly distinguishes it from the separate Discovery image of `(x−1)²−4`. The existing Discovery figure asset (x−1)²−4 remains byte-identical. The former formal §2.2 text-only SVG placeholder is now replaced **inside the one canonical Markdown** with an actual 97-vertex polyline/path for y=x²−4x+3, x/y axes, dashed x=2, the plotted vertex I(2;−1), intersections (1;0), (3;0), (0;3), and source-visible caption; original mathematical function, roots and outcomes unchanged.
- **B16-PED-D6-01..05:** Five identical `Gợi ý khắc phục khi chưa làm được — 5 bước` headings replaced with five concrete error titles matched respectively to HELP TRY10/TRY06/TRY07/TRY09/TRY08. The five original remediation bodies remain intact.
- **B16-PED-WORKED-01/02:** Earlier two worked examples had terse one-line/bullet answers. Expanded them into learner-facing `Đề → Phân tích → Lời giải từng bước → Kiểm lại` using the same original mathematics, with explicit method selection, all boundary conditions and self-verification.
- **B16-GOLDEN-FORMAL-01:** Existing S1 sections 2.1/2.2 are preserved; two teal concept/definition cards and one blue rule card now teach `a ≠ 0`, domain, vertex/axis and variation/range by sign `a`. CSS only appended for exact B16 TRY06 selector in light/slate. Prior B01–B15 CSS prefix and all learner source snapshots remain byte-identical.

## Affected-outcome independent arithmetic recheck (author self-audit)

| OUTCOME | Original/updated mathematical claim | Direct independent check |
|---|---|---|
| B16_OUT_01 | `ax²+bx+c` is quadratic iff `a ≠ 0` | `0x²+2x+1` linear; `−x²+2x+1` quadratic |
| B16_OUT_02 | `f=(x−2)²−3` has `I(2;−3)`, opens up | `(x−2)² ≥ 0`, equality at `x=2` |
| B16_OUT_03 | `(x−1)²−4` vertex `(1;−4)`, Ox at `−1,3`, Oy at `−3`; *separate* `x²−4x+3` has vertex `(2;−1)`, Ox at `1,3`, Oy at `3` | Substitute `x=−1,0,1,2,3,4`, check symmetry and actual figure descriptions |
| B16_OUT_04 | `−2(x+1)²+8` maximum `8`, increases before `−1`, decreases after | `−2(x+1)² ≤ 0`, equality at `−1`, range `(−∞;8]` |
| B16_OUT_05 | `h(t)=−5(t−2)²+20` on `[0;4]`, max 20 m at 2 s, endpoints 0 | `h(0)=h(4)=0`, `−5(t−2)² ≤ 0`; extremal time 2 inside domain |

**Source and rubric boundaries:** Original Q15 canonical First Try/HELP placement IDs and original answer bodies must be verified byte-exact by existing source comparators; no held-out item reuse or Mastery changes. Existing 4 worked-example sections, 2 SVG/figures and original Core/Written remain. No user-facing extra fifth tab or a new Golden component.

**OPEN GATES / BLOCKERS:** `B16_DRAFT / EXACT_HEAD_QA_PENDING / BROWSER_390_820_1440_PENDING / OWNER_P2_NOT_REQUESTED / NOT_MERGED / NOT_DEPLOYED`. The B16 source/CSS SHA changes require updating the existing Q18 source router and scoped CSS parity tests without weakening B01–B15 immutable receipts, then QA math/figure/MathJax, AP1–AP5, Q15/Q16 and appropriate shared-CSS regression. Do not call this CONTENT_READY/P1/P2 or publish without gate completion and separate release authorization.

## Owner follow-up: Discovery fluency and labels (19/11/2026)

The owner explicitly requested normal flowing explanations without a pseudo-method heading and with the sole learner action labeled **Vận dụng**. Accordingly, B16 Discovery now has zero `Vì sao chọn phương pháp này?` labels and five `Vận dụng.` prompts (no `Em vận dụng`), without changing the five canonical IDs, answers, maths or conditions. Original real-domain notation `\\mathbb{R}` is preserved in the formal Golden concept card. This updates **only** the SHA-locked candidate source in the same in-progress Delta C receipt; prior baseline and CSS fields remain unchanged. Independent PED review still pending; not a reviewer PASS.

## Q07/AP3 targeted graphical source-equivalence correction · 19/11/2026

**DEFECT_ID:** B16-Q07-PLOT-PLACEHOLDER-01 · **OUTCOME:** B16_OUT_03 · **ROOT CAUSE:** formal §2.2 SVG originally contained only title/text with no drawn curve, axes or marked coordinates. No SVG observation was possible despite its caption.

**Scoped DELTA_B_SOURCE_EQUIVALENT (+ DELTA_A_UI):** Replace this placeholder with an actual **same-function** drawing within the **same canonical B16 Markdown**. Math remains (y=x^2-4x+3=(x-2)^2-1); x-intercepts (1,3), y-intercept (3), vertex (I(2;-1)), symmetry axis (x=2), a>0, opens up. The curve was sampled at 97 x-values on [-0.3,4.5], using display transform (X=120+112x), (Y=315-52y), so points are checked against the exact function rather than sketched freehand. Axes, points and legend are specified; the other Discovery SVG is **not** changed.

**SOURCE_BLOB:** `08bfaf6b7c341556cdd9e1660fca5b0b2fa78429`
**PREVIOUS_B16_CANDIDATE:** `3d08b7abea421c8850e41afa0519fade05b2b700`
**B16_Q07_SELF_CHECK:** numerical geometry and SVG parsing test to run on this exact HEAD, plus live browser layout/AP3 checks at 390/820/1440. Do not assert P1/P2 publication from source edit.

**Review boundary:** This resolves the originally reported **source-defect** drawing (not a new mathematical theorem or exercise). Earlier B16 example/teaching Delta C still requires the appropriate independently grounded approval under the governing Q18 mode. Do not silently classify the *entire* B16 change as Delta B, nor claim reviewer PASS on this receipt alone.

## Five canonical D6 recovery paths — anti-repeat check · 19/11/2026

**Scoped pedagogical correction:** Updated the *existing* five tab-4 `Tự chẩn đoán` phrases to specify the actual wrong step in TRY10/06/07/09/08 instead of repeating the generic phrase “Em có đang mắc đúng lỗi này...”. For TRY10/06/09, replaced the generic return instructions with references to the *already existing* corresponding `Vận dụng` question. The original five `item_id`/HELP IDs, `Nhận diện lỗi`, `Kiến thức gốc`, `Tự sửa`, Q15 answer bodies, and two existing `Luyện lại` links (TRY07/TRY08) were preserved. No new question or alternate canonical source.

**DELTA_C_PEDAGOGICAL_REMEDIATION_SCOPE:** B16_OUT_01–05 D6 wording; demonstrate exactly which text was affected by Q18 source/body comparisons and self-QA. Do not call original independent review PASS for this new draft. Source Git blob `08bfaf6b7c341556cdd9e1660fca5b0b2fa78429`. Exact browser/safety QA and reviewer conditions remain open.

**D6 MathJax proof detail:** New remediation math is embedded in the same `<span class="arithmatex">\\(…\\)</span>` wrapper as original HELP formulae, avoiding raw TeX literal presentation inside HTML list items. No answer body changed. **FINAL_CURRENT_CANDIDATE_SOURCE_BLOB:** `08bfaf6b7c341556cdd9e1660fca5b0b2fa78429`; pending exact-HEAD CI check.
