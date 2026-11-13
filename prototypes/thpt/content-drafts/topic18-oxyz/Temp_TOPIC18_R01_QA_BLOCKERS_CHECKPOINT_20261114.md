# CĐ18 · QA CHECKPOINT R01 — 14/11/2026 · NOT Q18 SIGNOFF

**Checkpoint AUTHORING có bằng chứng kỹ thuật nhưng chưa nghiệm thu học thuật.** One standard `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18. Exact GitHub snapshots verified at checkpoint:
- Academic learner source: `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R01_FULL_40_OUTCOMES_20261114.md`, **Git blob `fb23f4b600fccef3d018d513a0f598f914cc75a2`**.
- 246-item exact Q15 source mapping: `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_R01_246_CANONICAL_OUTCOME_MATRIX_20261114.md`, Git blob `c6203eb735b40d587c210bc9cab95cea09017cb9`.
- Original S1 outcome/SGK reference crosswalk: `prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_R01_S1_40_OUTCOME_160_SGK_CANONICAL_CROSSWALK_20261114.md`, Git blob `7cba588cfe60d3675df99d8aa7e4b9275da9690e`.
- Original SGK G12 ChII blob `856a37bd16d2746ffc2e12906de18d1f4338a3b6`; G12 ChV blob `11eb2834cfdb4a24685157f84666c2bb0767970a`.
- Catalog ID CĐ18/PLAN22-18 study only, runtime `TOPIC_ID` owner-unassigned. Original NotebookLM Topic09 draft read as prose inspiration, not Q01/Academic/PED authority. [Editorial guidance Issue #851](https://github.com/TMA2015/self-learning-math/issues/851) inside Q09–Q14, not a new standard.

## STRUCTURAL_QA actual counts

- 40 original G12 SGK outcomes (16 ChII +24 ChV), **40/40** Topic lesson `TOP18-M01..M40` with learner-facing explanation/why/condition/example, each with opt-in Tự thử and D6.
- One active R01 learner source with exactly **3 student pages** `Kiến thức / Luyện tập / Tự kiểm tra`, no Topic Core; reading order positions `TOP18-O23` optional B14 integrated *after* B17 (the 40th displayed lesson).
- 40 new T (First Try), 40 new P (Practice), 6 W Written /4 (4 explicit 1-point criteria each), **86 distinct new IDs**, **160 original SGK pointer IDs**, **246 unique public canonical IDs**; 12 replay-only public selfcheck placements, no new item IDs.
- 9 original source visual references unchanged with SHA: 3 SVG CHII checked by actual `title/desc/text` labels, 6 PNG ChV path/blob verified but full visual/label screenshot UAT **PENDING**.
- Exactly 86 `<details>` paired with 86 close tags; keys are opt-in reveal in this authoring Markdown; not rendered official assessment.
- **80/80** new T/P item body chunks from partial drafting A/B were byte-preserved in merged R01 canonical. Both duplicate partial source files were deleted from current branch (retained in Git history), one active academic source.
- R01 W04 error detected in author QA: initial values gave coincident line–plane and line–normal angles 45°, confusing wording. Replaced with u=(1,0,√3), n=(0,0,1), **line–plane60°** vs **line–normal30°** and aligned W04 answer/rubric.

## Per-outcome executed geometry / numeric checks

40 independently executed JavaScript arithmetic/direction/geometry checks **PASS** against chosen examples, including:
| outcome | tested result / precondition | author check |
|---|---|---|
| TOP18-O01 | Vectơ-không có độ dài 0; góc không định nghĩa | MATH_ASSERTION_PASS |
| TOP18-O02 | AB và CD hình bình hành đối nhau; đổi đầu–cuối đổi dấu | MATH_ASSERTION_PASS |
| TOP18-O03 | Tổng độ dời theo quy tắc ba điểm | MATH_ASSERTION_PASS |
| TOP18-O04 | Độ dài (−2)u với /u/=5 là 10 | MATH_ASSERTION_PASS |
| TOP18-O05 | 3·4·cos60°=6 | MATH_ASSERTION_PASS |
| TOP18-O06 | Hợp lực hai lực vuông góc 6/8 là 10 | MATH_ASSERTION_PASS |
| TOP18-O07 | Điểm Oxy có z=0 | MATH_ASSERTION_PASS |
| TOP18-O08 | Vectơ −2i+3j+k có bộ ba (−2,3,1) | MATH_ASSERTION_PASS |
| TOP18-O09 | Từ Oy=−2 sang Oy=2 là +4 | MATH_ASSERTION_PASS |
| TOP18-O10 | AB cuối trừ đầu=(3,−2,4) | MATH_ASSERTION_PASS |
| TOP18-O11 | 2(−1,2,4)−(3,−2,1)=(−5,6,7) | MATH_ASSERTION_PASS |
| TOP18-O12 | (3,6,0)=3(1,2,0); kiểm zero component | MATH_ASSERTION_PASS |
| TOP18-O13 | Trọng tâm (0,0,0),(3,0,3),(0,6,0)=(1,2,1) | MATH_ASSERTION_PASS |
| TOP18-O14 | (1,1,0)·(1,−1,0)=0 → 90° | MATH_ASSERTION_PASS |
| TOP18-O15 | Khoảng cách (0,1,−2) đến (2,−2,4) là 7 | MATH_ASSERTION_PASS |
| TOP18-O16 | M0=(2,−1,4),v=(1,2,−1),t=2 → (4,3,2) | MATH_ASSERTION_PASS |
| TOP18-O17 | (1,1,0)×(0,1,1)=(1,−1,1) | MATH_ASSERTION_PASS |
| TOP18-O18 | M0=(−1,2,0) thuộc x+2y−z−3=0 | MATH_ASSERTION_PASS |
| TOP18-O19 | AB=(1,0,1),AC=(0,1,1) độc lập; z=x+y | MATH_ASSERTION_PASS |
| TOP18-O20 | Mặt chứa Oy và A=(2,0,−1): x+2z=0 | MATH_ASSERTION_PASS |
| TOP18-O21 | (1,−1,0)·(1,1,0)=0 → hai mặt vuông góc | MATH_ASSERTION_PASS |
| TOP18-O22 | Điểm (1,1,1), mặt 2x−y+2z−6=0 → d=1 | MATH_ASSERTION_PASS |
| TOP18-O23 | Mặt cầu R10, z=6 → bán kính thiết diện 8, OPTIONAL_AFTER_B17 | MATH_ASSERTION_PASS |
| TOP18-O24 | Đường qua (−1,2,0),v=(0,3,−2): x=−1,y=2+3t,z=−2t | MATH_ASSERTION_PASS |
| TOP18-O25 | Đường C=(1,−1,0) đến D=(1,1,4) qua t=1 | MATH_ASSERTION_PASS |
| TOP18-O26 | Thành phần hướng x=0 phải giữ x=2, không chia cho 0 | MATH_ASSERTION_PASS |
| TOP18-O27 | P=(2,0,2) không thuộc x=1+t,y=z=t | MATH_ASSERTION_PASS |
| TOP18-O28 | Hai đường cùng hướng và có điểm chung thì trùng | MATH_ASSERTION_PASS |
| TOP18-O29 | d1 z=0,d2 z=2 không đồng phẳng cắt; hướng khác, chéo | MATH_ASSERTION_PASS |
| TOP18-O30 | d=(2+t,−1,t), P:x+y+z=3 → t1, M=(3,−1,1) | MATH_ASSERTION_PASS |
| TOP18-O31 | Vectơ u=(1,1,0),v=(1,−1,0) → góc đường90° | MATH_ASSERTION_PASS |
| TOP18-O32 | u=(3,4,0), mặt z=0 → sinθ=0, θ0° | MATH_ASSERTION_PASS |
| TOP18-O33 | Pháp tuyến mặt (1,1,0),(1,−1,0) → 90° | MATH_ASSERTION_PASS |
| TOP18-O34 | D=(1,t,0), mặt x=0: song song phân biệt | MATH_ASSERTION_PASS |
| TOP18-O35 | Dây cáp ngang8 cao6 dài10 → sinθ=3/5 | MATH_ASSERTION_PASS |
| TOP18-O36 | Mặt cầu tâm(−1,2,0) R3: bình phương bán kính9 | MATH_ASSERTION_PASS |
| TOP18-O37 | Phương trình hoàn bình phương tâm(−1,2,0), R1 | MATH_ASSERTION_PASS |
| TOP18-O38 | P=(1,1,3), tâm(1,1,1), R2: P trên mặt | MATH_ASSERTION_PASS |
| TOP18-O39 | Đường kính (0,2,0)→(0,2,6) có R3 | MATH_ASSERTION_PASS |
| TOP18-O40 | Mặt cầu R5, mặt cắt cách tâm3 cho bán kính4 | MATH_ASSERTION_PASS |

**Bounded claim:** These 40 checks cover one representative math/condition case per outcome, not a full independent manual proof of **all** 40 examples +80 T/P bodies +6 rubrics. Two literal claim-matching smoke assertions (O02/O32) used source phrase variants and failed **string match only**, not numeric tests; exact semantic statements exist in learner source. Full audit must target actual 86 new stem/key/solution/rubric and non-degenerate boundary cases before Q18 author signature. **Do not elevate 40/40 math assertions to Academic or PED PASS**.

## Blockers / Qxx

1. `TOP18_Q01_B14_SBT_PRINT_P25_SOURCE_HOLD` — original G12 SBT Tập Hai B14 printed p25 absent in owner-locked PDF; exact impact of exercises5.6–5.7 on candidate item/outcome mapping not yet source-verified. **DELTA_D_SOURCE_GAP**, scope affected items only; never fill with invented S1 or third-party answer.
2. `TOP18_Q07_CHV_PNG_VISUAL_LABEL_QA_PENDING` — six existing G12 ChV PNG image refs verified by Git path+blob, but actual diagram/image labels and learner-fallback correspondence not yet visually inspected on 3 native device widths. This is academic author D5 figure QA pending; later RELEASE AP/P2 separate.
3. `TOP18_Q18_SUBSTANTIVE_ITEM_AUDIT_PENDING` — required exact source full 40 worked example +40 T +40 P +6 Written stem/key/solution/conditions, especially B14 O23 optional late, math method choice, D6 depth, math markup and proper source scope. Need properly signed self author receipt only after P0/P1=0.

**State:** `AUTHORING_CANDIDATE_R01 / Q18_PENDING / CONTENT_READY_BLOCKED_BY_AUTHORING`. No signed `AUTHOR_SELF_QA_RECEIPT`, no V2/ready/REGISTER, no Topic official Readiness, no imported private RD1 or Skill Mastery, no website/merge/deploy.

**Next:** resolve or precisely quarantine SBT p25 impacts, inspect PNG visual/conditions, complete stem-level independent author math/PED audit on exact R01 SHA; only then decide Academic/PED self sign and handoff V2. Preserve one canonical source, unchanged SGK SHA and Topic16/17 existing Draft PASS snapshots.
