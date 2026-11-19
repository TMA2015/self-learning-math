# G10 B16 Hàm số bậc hai · owner-initiated RELEASE Knowledge enrichment · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B16-OWNER-SELF-QA-R01-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 · Q01–Q18, §X-C/§X-F
**LESSON_ID:** G10-B16 · **OUTCOMES:** B16_OUT_01..05 · **PATH:** SGK Knowledge, 4 Golden tabs
**OWNER_AUTHORIZATION:** Chủ dự án ngày 19/11/2026 trực tiếp quyết định “tự sửa, tự kiểm tra đi, xong thì phát hành nhanh”; chủ dự án cho phép RELEASE tự hoàn thiện phần B16 chưa có học liệu canonical, tự QA theo Q01–Q18, merge/deploy khi cổng an toàn và exact-HEAD PASS. Không suy rộng sang B17/Chuyên đề.
**S1_REFERENCE:** Toán 10 KNTT tập 2, Bài 16 *Hàm số bậc hai*, printed 11–18, PDF 12–19 per historical S1 receipt `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md`; historical scan not directly reopened or newly hashed here
**BASE_MAIN_COMMIT:** `400e4820fe37c12a6db151cdcb094a79e31f7376`
**BASELINE_PUBLISHED_B16_SOURCE_BLOB:** `4ddf9c449f92a9f48bace5a3f9b84186bf33af20`
**CANDIDATE_B16_SOURCE_BLOB:** `b8c808e62e954991004df44db4c69fe9189a949d`
**PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078`
**CANDIDATE_SCOPED_GOLDEN_CSS_BLOB:** `14001f525b1825557493f439a1f0555e9614185f`
**VERIFICATION_MODE:** `Q18_OWNER_AUTHORIZED_SELF_QA_SCOPE_B16` · owner does NOT require separate NotebookLM for this scoped work; self-audit/math tests and Q18 SHA, no independent NotebookLM verdict claimed
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for new visible questions, formalization and reasoned examples, plus `DELTA_A_UI` for B16-only semantic teal/blue CSS
**ASSESSMENT:** B16 First Try retains 5 canonical IDs and original keys/HELP; existing SGK Core page now holds one public canonical B16 Core/Practice bank (12 distinct items), shared Written library adds 2 B16 rubrics; all formative self-check only. No private RD1, Final Submit, Firebase or Mastery change.

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

**SOURCE_BLOB:** `b8c808e62e954991004df44db4c69fe9189a949d`
**PREVIOUS_B16_CANDIDATE:** `3d08b7abea421c8850e41afa0519fade05b2b700`
**B16_Q07_SELF_CHECK:** numerical geometry and SVG parsing test to run on this exact HEAD, plus live browser layout/AP3 checks at 390/820/1440. Do not assert P1/P2 publication from source edit.

**Review boundary:** This resolves the originally reported **source-defect** drawing (not a new mathematical theorem or exercise). Earlier B16 example/teaching Delta C still requires the appropriate independently grounded approval under the governing Q18 mode. Do not silently classify the *entire* B16 change as Delta B, nor claim reviewer PASS on this receipt alone.

## Five canonical D6 recovery paths — anti-repeat check · 19/11/2026

**Scoped pedagogical correction:** Updated the *existing* five tab-4 `Tự chẩn đoán` phrases to specify the actual wrong step in TRY10/06/07/09/08 instead of repeating the generic phrase “Em có đang mắc đúng lỗi này...”. For TRY10/06/09, replaced the generic return instructions with references to the *already existing* corresponding `Vận dụng` question. The original five `item_id`/HELP IDs, `Nhận diện lỗi`, `Kiến thức gốc`, `Tự sửa`, Q15 answer bodies, and two existing `Luyện lại` links (TRY07/TRY08) were preserved. No new question or alternate canonical source.

**DELTA_C_PEDAGOGICAL_REMEDIATION_SCOPE:** B16_OUT_01–05 D6 wording; demonstrate exactly which text was affected by Q18 source/body comparisons and self-QA. Do not call original independent review PASS for this new draft. Source Git blob `b8c808e62e954991004df44db4c69fe9189a949d`. Exact browser/safety QA and reviewer conditions remain open.

**D6 MathJax proof detail:** New remediation math is embedded in the same `<span class="arithmatex">\\(…\\)</span>` wrapper as original HELP formulae, avoiding raw TeX literal presentation inside HTML list items. No answer body changed. **FINAL_CURRENT_CANDIDATE_SOURCE_BLOB:** `b8c808e62e954991004df44db4c69fe9189a949d`; pending exact-HEAD CI check.

**Final SVG responsive scope:** The previously text-only §2.2 inline plot now renders at `width:100%; max-width:100%; height:auto` inside the already approved `thpt-r4-concept-figure`, with intrinsic 760×440 coordinate viewBox for scalable legible labels. Mobile width is bounded by the content parent. Current source SHA `b8c808e62e954991004df44db4c69fe9189a949d`. Numeric curve/vertex/axes/Q15 tests still apply; browser computed-style QA required before release.

**R4 browser contract:** The existing dashed `x=2` line now carries `data-thpt-symmetry-axis="x=2"` without changing a pixel or mathematical value; this is an AP3/Delta A semantic attribute required by existing R4 browser test. Source SHA `b8c808e62e954991004df44db4c69fe9189a949d`.

**Owner Golden prose and sequencing self-check:** In Discovery outcome `B16_OUT_04`, the existing two-sign monotonicity bullets and the exact old table were moved unchanged **before** the corresponding `Vận dụng` prompt and closed `Đối chiếu`; no new condition/formula/answer. In `B16_OUT_03` the three bold pseudo-headings around the table were rewritten as continuous explanatory prose, preserving the same value table, symmetry and five-point plotting requirements. Scope is `DELTA_B_SOURCE_EQUIVALENT` after math/ID parity, separate from earlier Delta C example expansion. **Current canonical Git blob:** `b8c808e62e954991004df44db4c69fe9189a949d`.

**R4 double-plot prevention (real browser bug found):** `docs/assets/javascripts/thpt-r4-preview.js` already adds one curve and **four circles** to every `[data-thpt-quadratic-plot] svg` when `data-r4-plotted` is absent; the new complete static SVG initially produced **eight rendered circles** (4 authored + 4 injected), caught by run #44553713896. The figure now carries `data-r4-plotted="1"` *only on its own SVG*, so legacy runtime leaves this mathematically verified static graph alone; no shared JS/runtime edits or changes to other pages. New candidate SHA `b8c808e62e954991004df44db4c69fe9189a949d`; R4 real-browser verification pending exact HEAD.


## Owner-directed B16 complete SGK independent journey — Q01–Q18 self-audit addendum (19/11/2026)

**Single learner Knowledge manuscript:** `docs/thpt-preview/sgk/chuong-vi/bai-16.md`, SHA `b8c808e62e954991004df44db4c69fe9189a949d`, four Golden tabs and five unchanged `THPT-G10-CHVI-TRY06..TRY10` ID/answer bodies; current worked examples, D6, figure and original R4 CSS remain the academic source. Git commits and this receipt are historical evidence, not alternate drafts.

**One B16 public formative bank:** `docs/thpt-preview/sgk/core/ham-so-bac-hai.md` SHA `ff29cbee1f5566bb6eef9e352355e156400a17ac`. Contains *exactly one* legacy canonical `THPT-CORE-QF01` preserved as an interactive Core, five new Core `THPT-G10-B16-C01..C05`, and six independent Practice `THPT-G10-B16-P00..P05`. One canonical ID per source item, 12 independent items; two original check-after-click interactive forms and 10 voluntary `Đối chiếu` text items; no score recorded/Mastery or hidden Readiness keys. All item bodies, question, hint and answer are co-located once in this one bank. The legacy Topic demo `PRACTICE-THPT-DEMO-01` is **not** imported into SGK or relabeled.

**SGK-only routing:** `docs/assets/javascripts/thpt-r4-preview.js` SHA `a2eabd27257c5a54cc2043f085b68bcbc8c4075d`, `b16-core` and `b16-practice` now point to separate sections in the SAME B16 SGK bank page. The shared runtime's inherited form feedback is preserved for the exact original validated correct values (-3 and 1,3). All other B01–15/B17–18 route entries, Firebase/Topic, Final Submit, Q16/RD1 unchanged.

**B16 Written/Anchor:** existing one shared library `docs/thpt-preview/thu-vien/tu-luan.md` SHA `d96deee9b440076954d6f44b3007ea083fdd6eb0` now holds `HPT-G10-CHVI-WRI-16-01` (parabola 6-pt rubric) and `HPT-G10-CHVI-WRI-16-02` (revenue threshold 7-pt Anchor); two new IDs with independently checkable mathematical conditions, voluntary reveal and no automated mastery credit. Prior eight Written entries remain unchanged in the same canonical library.

**Owner self-QA outcome map:**

| B16 outcome | Core | Practice | Written |
|---|---|---|---|
| `B16_OUT_01` — `a\ne0`, type and domain | `C01` | `P01` | covered by the canonical 5-item Knowledge+First Try |
| `B16_OUT_02` — vertex, axis, sign | preserved `THPT-CORE-QF01`, `C05` | `P02` | `WRI-16-01` |
| `B16_OUT_03` — plot/intercepts/symmetry | `C02` | `P00`, `P03` | `WRI-16-01` |
| `B16_OUT_04` — increasing/decreasing/range | `C03` | `P04` | `WRI-16-01` |
| `B16_OUT_05` — modeled extrema + domain | `C04` | `P05` | `WRI-16-02` |

**Independent math self-check examples:** `x²−2x−8=(x−1)²−9=(x−4)(x+2)`, vertex `I(1;−9)`, roots `−2,4`, `f(0)=f(2)=−8`; revenue `R(p)=160p−2p²=−2(p−40)²+3200`, `R\ge3000\iff30\le p\le50\subset[0;80]`; 36-m three-side fence `S=x(36−2x)=−2(x−9)²+162` for `0<x<18`, max `162 m²`; restricted `f(x)=−(x−2)²+7` on `[3;5]` gives `[−2;6]`, not global maximum 7. Each calculation is checked by independent substitution in canonical test; entire PDF of publisher S1 not claimed rehashed in this turn, scope benchmark is previously validated S1 printed pages 11–18 and current source.

**Q15:** IDs unique across 12 SGK public formative, 2 Written, 5 retained First Try, no replica of assessed/private bank. **Q16:** hint/answer for formative only on explicit learner action; Readiness Final Submit/private keys unaffected; self-check does not assert proficiency or write Mastery. **Q17:** SGK Core/Practice content and routes now independent from the three-part Topic path. **Q18:** source and public bank/library/runtime blob SHAs above, immutable B15 owner-P2 source `7f6448acf6e127b6dc40f3e34f155f151bc7d23b` preserved. This addendum supersedes earlier statement that Core/Practice/Written were unchanged or unavailable. **No independent NotebookLM PASS invented; owner explicitly authorized self-review**, with exact-head QA and real browser results to be entered after execution.

**Discovery continuous prose correction (owner feedback B15→B16):** Removed the five `####` pseudo-headings between B16 outcome narratives and their single associated `Vận dụng` prompt, leaving the full mathematical text, examples, tables, same 5 Q15 IDs, D6, conditions, answers and self-disclosure unchanged. This is a `DELTA_B_SOURCE_EQUIVALENT` editorial sequence within the one source. Current B16 Git source blob `b8c808e62e954991004df44db4c69fe9189a949d`.

**Golden one-question modal:** B16-only, source-role-scoped `initB16CanonicalBank` in `thpt-r4-preview.js` (Git blob `a2eabd27257c5a54cc2043f085b68bcbc8c4075d`) makes 6 Core or 6 Practice **canonical** cards share one native dialog, but only one card is visible at any time; numbered next/previous buttons maintain original form selection and native solution disclosures. The full bank remains reachable as a standalone SGK Core/Practice page, with unchanged shared Golden runtime/Final Submit. No duplicate item content per button.


## Q15 canonical registry parity and same-site Golden bank · owner self-QA finalization

**One active metadata inventory:** `prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs` source Git blob `4d9080979c17219055eb7a40575f7c107718d455`. Historical Oct 28 reviewed 18 formative + 8 cumulative + 8 Written IDs stay unchanged and their evidence remains in original Git history. B16 owner-authored content adds 11 *new* SGK public Core/Practice IDs plus 2 new Written, preserving original `THPT-CORE-QF01`; **current active unique SGK inventory = 48**, with **76 placements** including previously accepted cumulative A2/B3 conditional Topic references and 5 anchor-labeled public Written items in the whole chapter library. No new B16 Topic pending placements or cloned same-ID questions. `PRACTICE-THPT-DEMO-01` remains solely on the legacy Topic demo page, never counted as current SGK B16 Practice. Historical reviewed-bank JS Git blob `1223d4c2b574433479c5d222dbeff363718ee4bb` untouched.

**R4 one-question-per-dialog:** `thpt-r4-preview.js` source Git blob `a2eabd27257c5a54cc2043f085b68bcbc8c4075d` adds B16-only pagination to the previously existing SGK modal: all six original canonical bank nodes remain in the same DOM, one visible at a time; prev/next/number buttons use no new item IDs, same optional inline Check and voluntary solution toggles, no duplicate question/answer content. Topic and Final Submit unaffected. Browser test `scripts/test-thpt-r4-preview-browser.js` asserts visible single-item, six canonical nodes for each role, no Topic demo in SGK and real interaction. This is learner-facing Golden parity rather than an additional draft.

**Safety:** all *public* formative self-check questions/answers, no held-out RD1 bank stems or keys in Git; CLIENT_SELF_CHECK_NO_MASTERY only, no client scored Skill Mastery or independent chapter readiness claims. Owner release authority is scoped to B16 and exact-head CI before merge.

**Roadmap QA link fix:** [Roadmap run #44562836205](https://github.com/TMA2015/self-learning-math/actions/runs/44562836205) correctly rejected a source Markdown link to `tu-luan.md#bai-16-tu-luan` because HTML section IDs are not part of the checker’s Markdown anchor index. Source now links to existing shared `tu-luan.md` without unsupported fragment, and library’s B16 filter can locate both new Written items. Mathematical content/IDs unchanged. Updated SGK bank blob `ff29cbee1f5566bb6eef9e352355e156400a17ac`.

**P2 repeat-prevention: plotted SVG readability.** Based on B15 P2 figure-size regression, B16 formal 760×440 SVG `font-size` values have been raised from 17–24 to **29–31 intrinsic SVG units** without changing the geometry/labels/curve, enabling text approximately comparable to normal prose when scaled to phone width without overflow. Q07/AP3/Golden G3 test checks all 14 font-size attributes are ≥29; actual rendered mobile viewport check still applies. Updated B16 source Git blob `b8c808e62e954991004df44db4c69fe9189a949d`.
