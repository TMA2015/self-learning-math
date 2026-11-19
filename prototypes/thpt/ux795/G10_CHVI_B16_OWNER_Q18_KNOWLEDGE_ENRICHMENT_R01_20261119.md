# G10 B16 Hàm số bậc hai · owner-initiated RELEASE Knowledge enrichment · 19/11/2026

**RECEIPT_ID:** G10-CHVI-B16-OWNER-SELF-QA-R01-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 · Q01–Q18, §X-C/§X-F
**LESSON_ID:** G10-B16 · **OUTCOMES:** B16_OUT_01..05 · **PATH:** SGK Knowledge, 4 Golden tabs
**OWNER_AUTHORIZATION:** “... sau đó tiến hành nâng cấp bài 16” after B15 P2 hotfix publication; this **authorizes B16 authoring/editing only**, not automatic merge or deploy
**S1_REFERENCE:** Toán 10 KNTT tập 2, Bài 16 *Hàm số bậc hai*, printed 11–18, PDF 12–19 per historical S1 receipt `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md`; historical scan not directly reopened or newly hashed here
**BASE_MAIN_COMMIT:** `400e4820fe37c12a6db151cdcb094a79e31f7376`
**BASELINE_PUBLISHED_B16_SOURCE_BLOB:** `4ddf9c449f92a9f48bace5a3f9b84186bf33af20`
**CANDIDATE_B16_SOURCE_BLOB:** `53302f1370e24ab014fca57f0d4c58bcc80b8fd6`
**PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB:** `4af85dd38d02ed55b29daa6713bfbc892f0d7078`
**CANDIDATE_SCOPED_GOLDEN_CSS_BLOB:** `14001f525b1825557493f439a1f0555e9614185f`
**VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT_IN_PROGRESS`, no independent NotebookLM PASS
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for new visible questions, formalization and reasoned examples, plus `DELTA_A_UI` for B16-only semantic teal/blue CSS
**ASSESSMENT:** Public First Try self-reveal only; no new item IDs, changes to Core/Practice/Written, Final Submit, RD1, Firebase or Mastery

## G0 / G1 / G2: learner-first whole-lesson defects and corrections

- **B16-PED-FIRST-TRY-08/10:** Original canonical `TRY08` and `TRY10` had `data-thpt-first-try-id` and unchanged answers but **no visible posed problem**. Restored learner prompts aligned exactly to original answer: `TRY08` for ((x-1)^2-4) graph characteristics; `TRY10` for (h(t)=-5(t-2)^2+20) on (0\le t\le4). Keep five original TRY IDs/order, answers and five D6 HELP IDs.
- **B16-S1-GRAPH-02:** Original formal §2.2 `Cách đọc hình` wrongly stated vertex ((1;-4)), axis (x=1), roots (-1,3) while the immediately preceding in-page graph describes (y=x^2-4x+3=(x-2)^2-1). Corrected prose to vertex (I(2;-1)), axis (x=2), (Ox) intersections ((1;0),(3;0)), (Oy) intersection ((0;3)); explicitly distinguishes it from the separate Discovery image of ((x-1)^2-4). Original 2 figures/SVG data unmodified.
- **B16-PED-D6-01..05:** Five identical `Gợi ý khắc phục khi chưa làm được — 5 bước` headings replaced with five concrete error titles matched respectively to HELP TRY10/TRY06/TRY07/TRY09/TRY08. The five original remediation bodies remain intact.
- **B16-PED-WORKED-01/02:** Earlier two worked examples had terse one-line/bullet answers. Expanded them into learner-facing `Đề → Phân tích → Lời giải từng bước → Kiểm lại` using the same original mathematics, with explicit method selection, all boundary conditions and self-verification.
- **B16-GOLDEN-FORMAL-01:** Existing S1 sections 2.1/2.2 are preserved; two teal concept/definition cards and one blue rule card now teach (a\ne0), domain, vertex/axis and variation/range by sign (a). CSS only appended for exact B16 TRY06 selector in light/slate. Prior B01–B15 CSS prefix and all learner source snapshots remain byte-identical.

## Affected-outcome independent arithmetic recheck (author self-audit)

| OUTCOME | Original/updated mathematical claim | Direct independent check |
|---|---|---|
| B16_OUT_01 | (ax^2+bx+c) is quadratic iff (a\ne0) | (0x^2+2x+1) linear; (-x^2+2x+1) quadratic |
| B16_OUT_02 | (f=(x-2)^2-3) has (I(2;-3)), opens up | ((x-2)^2\ge0), equality at (x=2) |
| B16_OUT_03 | ((x-1)^2-4) vertex ((1;-4)), (Ox) at (-1,3), (Oy) at (-3); *separate* (x^2-4x+3) has vertex ((2;-1)), (Ox) at (1,3), (Oy) at (3) | Substitute (x=-1,0,1,2,3,4), check symmetry and actual figure descriptions |
| B16_OUT_04 | (-2(x+1)^2+8) maximum 8, increases before (-1), decreases after | (-2(x+1)^2\le0), equality at (-1), range ((-∞;8]) |
| B16_OUT_05 | (h(t)=-5(t-2)^2+20) on ([0;4]), max 20 m at 2 s, endpoints 0 | (h(0)=h(4)=0), (-5(t-2)^2\le0); extremal time 2 inside domain |

**Source and rubric boundaries:** Original Q15 canonical First Try/HELP placement IDs and original answer bodies must be verified byte-exact by existing source comparators; no held-out item reuse or Mastery changes. Existing 4 worked-example sections, 2 SVG/figures and original Core/Written remain. No user-facing extra fifth tab or a new Golden component.

**OPEN GATES / BLOCKERS:** `B16_DRAFT / EXACT_HEAD_QA_PENDING / BROWSER_390_820_1440_PENDING / OWNER_P2_NOT_REQUESTED / NOT_MERGED / NOT_DEPLOYED`. The B16 source/CSS SHA changes require updating the existing Q18 source router and scoped CSS parity tests without weakening B01–B15 immutable receipts, then QA math/figure/MathJax, AP1–AP5, Q15/Q16 and appropriate shared-CSS regression. Do not call this CONTENT_READY/P1/P2 or publish without gate completion and separate release authorization.
