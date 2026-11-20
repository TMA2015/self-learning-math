# CĐ18 — Q18 affected mathematics / pedagogy QA (not independent NotebookLM PASS) · 20/11/2026

**Mục tiêu: chất lượng học liệu, không phải truy nguồn trang SBT.**

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED_AFFECTED_SCOPE_ONLY
NEW_CONTENT_STATUS: NOTEBOOKLM_AFFECTED_REVIEW_PENDING
PREVIOUS_READY_SNAPSHOT: PRESERVED_AT_OLD_GIT_BLOB
TARGETED_OUTCOMES: TOP18-O40; TOP18-O23; G12-CHV-B14-O07 canonical Written answer
PREVIOUS_LEARNER_BLOB: bcc7cb6c57ea3cddbfae312a1fe2d31c0791b3f4
CURRENT_LEARNER_BLOB: 1a99d380571afa573afecf64f619fb52d3dd30be
PREVIOUS_ORIGINAL_SGK_CANONICAL_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
CURRENT_ORIGINAL_SGK_CANONICAL_BLOB: ee7351bf5f4704c5d5c6bd08a7932c1630e59edf
CANONICAL_ITEM_ID: THPT-G12-B14-W07
CANONICAL_CONTENT_VERSION: 2 (same ITEM_ID, corrected answer; old version remains in Git history)
ANSWER_AND_RUBRIC_EFFECT: W07_answer_corrected_from_disk_to_circle; rubric_scoring_criteria_byte_identical
RD1_EFFECT: NONE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO

## Academic independent checks

1. **Mặt cầu ≠ khối cầu.** Mặt cầu là tập điểm thỏa (x-a)²+(y-b)²+(z-c)²=R², vì vậy mặt phẳng cắt mặt cầu (d<R) cho **đường tròn** (chỉ biên). Cắt **khối cầu** cho **hình tròn/đĩa tròn**. Câu W07 trước ghi h<R: hình tròn là sai/không chính xác theo nghĩa tập điểm; sửa ở một canonical và bản hiển thị, không thay câu hỏi/rubric.
2. Với R>0, d≥0: nếu d<R, r²=R²-d²>0 từ Pitago với chân vuông góc => đường tròn bán kính r; nếu d=R, r=0, đúng 1 tiếp điểm; nếu d>R, không có điểm thực của mặt cầu nằm trên mặt.
3. R=2, tâm (1,2,1), z=0: (x−1)²+(y−2)²=3 => đường tròn tâm (1,2,0) r=sqrt(3); không nhầm đường tròn với cả đĩa.
4. Khoảng cách hai mặt x+2y+2z−1=0, x+2y+2z−3=0: chung n=(1,2,2), |n|=3, d=2/3; lấy H=(1,0,0) trên mặt đầu để kiểm bằng khoảng cách điểm–mặt, cũng ra 2/3. Ứng dụng chiều cao yêu cầu hướng đo vuông góc hai mặt.
5. O40 trước đó đã có suy luận hình học và SVG đi trước công thức: đoạn vuông từ tâm đến mặt d và r tạo tam giác với bán kính R. D6 của O23 cũ chỉ lộ tên mã O23/Core/SGK-ChII, không giúp sửa sai; đã thay bằng lời hướng dẫn dựng hình và kiểm ba trường hợp.

## Exact controlled-change QA

- Verified complete source diff against immutable old Git blob: learner is **only 2 exact substitutions** (W07 displayed answer; TOP18-O23 D6 learner remediation). Original canonical source is **only metadata content_version=2 + same answer correction**. One ID canonical; one display placement.
- Learner before/after both exactly 40 outcome markers; 247 balanced opt-in details/closures; 40 first tries; unaffected public 12 replay selfchecks. No change to other question stems/answers/marking rubrics or SVG paths.
- Corrected canonical answer and learner-facing W07 displayed key are **text-identical** after their different labels. Old inaccurate answer no longer selected in current learner/current original bank; immutable historical source remains in Git.
- Prior CĐ18 B14 NotebookLM Academic/PED targeted PASS for O17–O22 and O40/O23 on **old snapshot** remains historical; it is not silently transferred to new W07 answer/D6 revision. New affected-review packet created separately.

## Author verdict / remaining gate

AUTHOR_Q18_MATH: PASS_ON_AFFECTED_CONTENT
AUTHOR_Q18_PED: PASS_ON_AFFECTED_CONTENT
NEW_INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED: NOT_RECEIVED
P0_P1_KNOWN_AFTER_AUTHOR_QA: 0
NEXT: independent NotebookLM review of **only corrected canonical W07 answer + O23 D6** and cross-consumer original SGK vs Topic projection, then lock A1/V2/ready/REGISTER and current HEAD CI before promoting new content. Original previously accepted immutable snapshot remains valid on its old Git blob. No website QA/merge/deploy.

### Trusted external math check (not replacement for primary curricular scope)

- OpenStax *Calculus Volume 3*, §2.5 point-plane distance and parallel-plane examples: https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space
- LibreTexts *Vector Calculus*, §1.6 sphere-plane cut is a circle: https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_%28Corral%29/01%3A_Vectors_in_Euclidean_Space/1.06%3A_Surfaces