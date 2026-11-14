# G10 ChVII B19–B22 — Work Browser follow-up (RELEASE UX-only, 14/11/2026)

**Source of issues:** Owner transmitted independent ChatGPT Work browser audit of *old production* (16 Golden tabs / 25 open–closed comparisons). Work confirmed that previously fixed disk/boundary, R02 figure placement, scope and 23 obsolete notes are absent from production but already fixed in Draft PR #856. Four **remaining source defects** were confirmed in PR #856 and corrected in this follow-up.

**Fixed in the candidate (no mathematical meaning or canonical question changes):**
1. B19–B22: **25 individual D6 remediation cards** previously all headed `Tự khắc phục theo năm bước` are now uniquely titled by the *actual learner mistake* (7+5+5+8), so students can find the right card. Their mathematics, the original `HELP_ID`, anchors and assessment safety constraints remain intact. The old **‘bài vừa Tự thử’** directions are updated to point to the actual **Vận dụng → Đối chiếu** in the *Khám phá kiến thức* tab; no nonexistent ‘answer above’ reference remains. The one nonmandatory mention of *tâm sai* in B22 HELP is removed, as previously agreed for the SGK Core. **33 HELP references** remain unchanged.
2. B20 tab Ví dụ: removed "Hình bên cạnh minh họa..." where the example has no adjacent drawing; retained the actual algebraic solution and geometric reason (shortest perpendicular segment).
3. B22: removed raw `HELP-G10-CHVII-ELLIPSE-TR01` and `HELP-G10-CHVII-HYPERBOLA-TR01` visibly printed in two open-on-demand answers. Learner remedial guidance is accessible in the **Lỗi thường gặp** tab under distinct titles; no invented hyperlink or broken target.
4. B22 transfer visual and answer: correct "B nhận trước / trạm nào nhận trước / A đến trước" wording to **"tín hiệu từ B/A đến máy thu trước"** so source station is never misidentified as a receiver. Original ellipse/hyperbola formulas, sign of path difference, near-branch choice, geometry and review-approved teaching intent stay the same. The existing D5 SVG `THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg` received the matching title/description/visible label correction.

**Source chain, existing R02 clarity → UX-only follow-up:**

| Bài | Prior R02+clarity blob | Work UX corrected blob | Canonical Vận dụng | HELP | Worked examples |
| --- | --- | --- | ---: | ---: | ---: |
| B19 | `a1bf8d1cc0ae86beb557dbc076ef456d4bf2b59d` | `d8ae15ed503c11810b5d8390002a856570b41202` | 7 | 9 | 2 |
| B20 | `8df1192bb24a9e8e79657b1373b22a0a9bd7fca7` | `fc313698286697fd5827561cb1b4d41aa777c2a7` | 5 | 7 | 2 |
| B21 | `f5c01087e5e1c662d8aed1b5759ef964ce195b81` | `797b4fdb77c3ea74b62f2f048cceb80137f4b0ef` | 5 | 7 | 2 |
| B22 | `dd4e22f3c22556c799b81c42af5231987755d5a7` | `2024edffecbf0759cc290a28a2cd8dd239acb245` | 8 | 10 | 3 |

**One source art correction:** D5 SVG `docs/assets/images/thpt/THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg` old Git blob `106be01af96e1e399f03c224f4072504b0bad0c9` → new `f0f2b82d16a84e1605166d570827eb2c9c1572fb`. The only changes are the exact Vietnamese receiver wording, title and alt description. Geometry, coordinates, branches and visual layout remain the same.

**Classification:** `DELTA_A_UI` unique labels and orphan pointer cleanup; `DELTA_B_SOURCE_EQUIVALENT` station/receiver linguistic correction. No new maths or learner outcome; keep independent R02 Academic+PED PASS for the original content. Work audited **old production**, not the PR preview. Work screenshot claims cannot be used to assert P1/P2 PASS for the candidate.

**Release gates:** new exact HEAD QA 390/820/1440 Golden and responsive SVG, all G10, R4, Q16/Final Submit, canonical answer check. No merge/deploy before owner authorization. `PR856_DRAFT / WORK_FINDINGS_FIXED_IN_SOURCE / QA_PENDING / P1_P2_PENDING`.
