# Temp — D5 canonical figure design specs from 5-page NotebookLM-reviewed PDF (07/11/2026)

PACKET_ID: SLM-THPT-TRANSFER-WRITTEN-20261106-R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
SCOPE: FIVE_REVIEWED_PUBLIC_DIAGRAMS
ORIGINAL_REVIEW_PDF: Temp_D5_FIGURES_PDF_R00_20261106.pdf
ORIGINAL_PDF_SHA256: 99a58a3b06df2e762bc0552f3ea6620aaa42f2ed3dec05bd0b9974f080dabdaf
ORIGINAL_PDF_BYTES: 851797
ORIGINAL_PDF_PAGES: 5
OWNER_REVIEWER_REPORT_GIT_BLOB: 865bb30feca7b4ade054b9b53d6306044b2d5e9f
AUTHORING_GIT_ASSET_ROLE: SOURCE_SPEC_AND_FIGURE_RECEIPT_ONLY
NOTEBOOKLM_SOURCE_RULE: THREE_MARKDOWN_PLUS_ONE_PDF_NO_SVG_NO_PROMPT_IN_ZIP
RELEASE_BOUNDARY: SVG_OR_OTHER_RESPONSIVE_RENDERING_IS_RELEASE_OWNED_AND_MUST_MATCH_THIS_SOURCE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

This source spec preserves the **mathematical geometry and visual-reading constraints** of the original five-page PDF that NotebookLM independently reviewed; it is NOT an image renderer and is NOT a replacement for the exact binary PDF, whose SHA is logged above. Do not infer AP3 or rendered website PASS from this document. Git commits carry enough design/math data to reproduce/check the same figure; arbitrary new figures or changed learner problem parameters are a separate scoped delta. Do not include SVG files in NotebookLM sources.

## FIG-G10-CHIV-FORCE-TR01 — PDF p1

- **Coordinate system:** common point O, +Ox to the right, +Oy up. Both vectors start at O.
- **Original forces:** F1=(8,0) N; F2=(15cos120°,15sin120°)=(-15/2,15√3/2) N. The included angle is 120°.
- **Resultant:** R=(1/2,15√3/2) N, norm 13 N. Dotted completion of parallelogram connects the vector heads. **Third equilibrium force:** F3=(-1/2,-15√3/2) N (opposite R), norm 13 N. F3 arrow nearly vertical down, not exactly Ox or Oy.
- **Labels:** F1=8, F2=15, R=13, F3=−R, 120°, O, x, y; units N. Explain that a 120° oblique sum is neither 8+15 nor Pythagoras 8²+15².
- **Accessibility text:** “Hai lực cùng điểm đặt 8 N hướng Đông và 15 N lệch 120°; hợp lực 13 N gần thẳng lên; lực cân bằng cùng độ lớn, ngược chiều hợp lực.”

## FIG-G10-CHIV-RIVER-TR01 — PDF p2

- Ox east, Oy north; two horizontal parallel banks. Boat's own speed relative water fixed **6.5 m/s**, river current (2.5,0) m/s east.
- **Case (i):** point nose north, v_own=(0,6.5), v_bank=(2.5,6.5), actual path drifts east by 750/13 ≈57.69 m over 300/13 ≈23.08 s for width150m. Blue vector straight up (nose), green bank vector northeast, orange current right.
- **Case (ii):** nose northwest, v_own=(-2.5,6), current=(2.5,0), actual bank velocity=(0,6), path perpendicular to banks, 25s with no drift. Blue vector NW (nose), green bank north, orange current east.
- **Labels:** “bờ Nam”, “bờ Bắc”, “v riêng Bắc”, “v riêng lệch Tây”, “v bờ”, “dòng”, “trôi Đông”, “không trôi”. Vectors diagram qualitative, no screenshot inference of pixel-accurate scale. Emphasize v_bank is **vector sum** and crossing time depends on north component, not norm of diagonal bank velocity.
- **Accessibility text:** “Lái thẳng Bắc bị nước đẩy lệch Đông; lái chếch Tây để dòng nước bù đúng thành phần ngang thì đi thẳng tới điểm đối diện.”

## FIG-G10-CHVII-ELLIPSE-TR01 — PDF p3

- Half ellipse roof: x²/100+y²/36=1 with y≥0 and -10≤x≤10, center O=(0,0), top (0,6), feet (-10,0),(10,0), units meters.
- Centered rectangular exhibit width14m from x=-7 to+7, flat top y=4m. At either corner, roof y(±7)=3√51/5≈4.28486m; **minimum clearance 0.28486m**, not 2m at center.
- **Labels:** “−10”, “10”, “(0,6)”, “khối rộng 14m, cao 4m”, “độ hở≈0,285m”, O, x(m). Draw a short vertical dashed gap at both corners to demonstrate the limiting clearance.
- **Accessibility text:** “Nửa mái elip rộng20m, cao6m; góc trên khối chữ nhật rộng14m cao4m cách mái khoảng0,285m, nhỏ hơn yêu cầu0,8m.”

## FIG-G10-CHVII-HYPERBOLA-TR01 — PDF p4

- A=(-50,0), B=(50,0), c=50 km; a=30km, b²=1600 km², equation x²/900−y²/1600=1.
- Branch right **x≥30** thick green curve; left branch **x≤−30** thin grey curve; vertices at (±30,0), foci at A/B (±50,0). Origin O at (0,0). Label a and -a at vertices.
- Difference PA−PB=60km (not both sides without sign). B's signal reaches earlier ⇒ right branch near B; highlight a representative P on right branch, but **one time difference fixes a continuous locus, not one isolated point**.
- **Invalid measurement extension:** 0.00055s at 200000km/s ⇒110km>100km distance AB, no valid P, not a third “branch”.
- **Accessibility text:** “Hypebol hai nhánh với tiêu điểm A trái B phải; B đến trước nên tàu nằm ở nhánh phải x≥30; chưa xác định được duy nhất một điểm.”

## FIG-G11-CHIX-MOTION-TR01 — PDF p5

- **Full displayed analytic model domain [0,3]**: s(t)=−t³+6t²−9t (m), v(t)=−3(t−1)(t−3) m/s; plot TWO panels with a shared time axis: signed position s and signed velocity v. The **asked path interval is [0,2]**, stopping at the time of maximum signed velocity; visual may show t=3 to expose the second velocity zero. This is **NOT** a contradictory interval.
- Key points s(0)=0, s(1)=−4 (turning point), s(2)=−2, s(3)=0. Velocity v(0)=−9, v(1)=0, v(2)=3 (maximum signed velocity), v(3)=0. v negative before t1, positive from t1 to t3.
- **Distance on [0,2]:** |s(1)-s(0)|+|s(2)-s(1)|=4+2=6m; **displacement -2m**. **Max speed on [0,2]** is 9m/s at t0, not same as signed v-max3m/s at t2.
- **Labels:** axes t(s), s(m), v(m/s); times t0,t1,t2,t3; s−4 at1,s−2 at2; v0 at1 and3,v3 at2; explain that stationary v=0 is direction change when sign changes at t1.
- **Accessibility text:** “Vị trí giảm từ0 xuống−4 trong giây đầu rồi tăng lên−2 tại t2; vật đi thật6m, độ dời−2m; vận tốc lớn nhất3m/s tại t2 nhưng tốc độ lớn nhất9m/s tại t0.”

## Asset custody and authoring vs release

- **Reviewer** saw the PDF itself (SHA file printed above), not SVG. Git stores this precise mathematical design/spec and the original PDF SHA; the user-delivered ZIP contains the PDF. It is not a second review or a claim of copied binary into Git.
- **AUTHORING:** source and diagram geometry/captions/learning outcomes are frozen. Can render a true SVG *outside NotebookLM* using these specifications only after exact math/visual equivalence QA, which is a DELTA_B candidate, not permission to change meanings.
- **RELEASE:** choose render format (e.g. accessible inline SVG, responsive), verify AP3 and Q16 on actual website. If any figure no longer corresponds to the reviewed PDF or required mathematical details, return a specific Authoring DELTA_C academic defect. Do not run RELEASE from this draft.
