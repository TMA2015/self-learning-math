# RELEASE → AUTHORING source gap handoff · G10 SGK Chương V B12–B14 · R01

**13/11/2026** · **RELEASE-only / PREVIEW / NOT CONTENT_READY** · Master issue [#795](https://github.com/TMA2015/self-learning-math/issues/795) · UI Draft [#837](https://github.com/TMA2015/self-learning-math/pull/837).  
**Canonical quality standard:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18. Do not invent a second standard, certify source material from browser QA, or publish a Draft preview.  
**Main baseline:** `95c111b313886283bd8245babcc9ffdbfcc7c54f`; current published whole-G10 Knowledge was merged at #797; B07–B11 official S1 Golden precedent is #836.

## 1. Source custody — unchanged live Git blobs

| Lesson | Published Knowledge Markdown Git blob SHA | Public First Try IDs | Public HELP IDs | Worked examples (tab 3) | Existing figure Git blob |
|---|---|---:|---:|---:|---|
| B12 | `23b11a7263661ae6f6e2a06029307b490b145dfb` | 4 | 2 | 3 | `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52` |
| B13 | `c55d650f5b59c5260960de136e3c7fc26f219cdf` | 5 | 2 | 3 | `acaf49296892e35c48fb2b4a5b335a7d26643336` |
| B14 | `894c31de396a2f6d6d30912399d6cad39f790130` | 5 | 2 | 3 | `98ab8375e496468e8f7fbc79f6cacc03d08a4645` |

All 14 First Try placements presently live inside **tab 2 Kiến thức SGK**, not **tab 1 Khám phá kiến thức**. The first tab contains only the intro and outcomes. Each tab 2 has non-S1 thematic subheadings before its canonical core content. B12/B13 additionally have nested `### Kiến thức SGK` inside a source block, and B14 has a duplicate `### Kiến thức SGK` heading inside tab 2. Original labels may render differently depending on Markdown indent and should be checked on built HTML, not assumed hidden.

Current public source paths:
- `docs/thpt-preview/sgk/chuong-v/bai-12.md`
- `docs/thpt-preview/sgk/chuong-v/bai-13.md`
- `docs/thpt-preview/sgk/chuong-v/bai-14.md`

Figure paths B12 `docs/assets/images/thpt/THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg`, B13 `THPT_G10_B13_QUARTILES_D5_R01.svg`, B14 `THPT_G10_B14_DISPERSION_D5_R01.svg`. The B14 figure compares two distributions around a common mean; it is **not a box-and-whisker plot**.

## 2. SGK source outline to verify against actual S1

This is **preliminary crosswalk** from digitized/transcribed *SGK Toán 10 Kết nối tri thức*, Tập một, not a source-locked primary PDF receipt. For binding signoff, AUTHORING must check **printed book page number vs PDF page index** from the actual S1 book and lock the exact source SHA. Do not claim the secondary source is a reviewer approval.

| Lesson | SGK printed page range (secondary-source index) | Required top-level sections in tab 2 |
|---|---|---|
| B12 | 73–77 | `2.1. Số gần đúng`; `2.2. Sai số tuyệt đối và sai số tương đối`; `2.3. Quy tròn số gần đúng` |
| B13 | 78–83 | `2.1. Số trung bình và trung vị`; `2.2. Tứ phân vị`; `2.3. Mốt` |
| B14 | 84–88 | `2.1. Khoảng biến thiên và khoảng tứ phân vị`; `2.2. Phương sai và độ lệch chuẩn`; `2.3. Phát hiện số liệu bất thường hoặc không chính xác bằng biểu đồ hộp` |

Transcription cross-check:
- B12: https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-cac-so-dac-trung-cua-mau-so-lieu-khong-ghep-nhom-3101/bai-12-so-gan-dung-va-sai-so-11192.html
- B13: https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-cac-so-dac-trung-cua-mau-so-lieu-khong-ghep-nhom-3101/bai-13-cac-so-dac-trung-do-xu-the-trung-tam-11213.html
- B14: https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-cac-so-dac-trung-cua-mau-so-lieu-khong-ghep-nhom-3101/bai-14-cac-so-dac-trung-do-do-phan-tan-11214.html
- Secondary crosswalk: https://sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/toan-10-tap-1-1968.html

## 3. SOURCE DEFECT (not remediated by RELEASE UI)

| Key | Observed evidence | Exact affected scope | Necessary AUTHORING disposition |
|---|---|---|---|
| `CHV-S1-TAB2-001` | 14 original `data-thpt-first-try-id` placements occur in SGK tab, not Discovery; mixed SLM pedagogic prose and S1 formula summaries appear under the same tab | B12–B14, Q09–Q14/Q18 | Create single source-locked lesson-wise Delta C version: Discovery 1.1/1.2/1.3 contains original self-learning WHY and all First Tries with original answer blocks; tab 2 starts directly with the actual 2.1–2.3 S1 section titles; no duplicated canonicals |
| `CHV-S1-HEAD-002` | Existing tab2 top headings do not correspond to exact S1 section title/order and duplicate/embedded `Kiến thức SGK` headings appear | B12–B14, Q01/Q03/Q18 | Verify S1 primary page; restore official titles and preserve original formulas, conditions, examples, figures, Q15 IDs |
| `CHV-OUTCOME-B12-003` | B12 public Knowledge currently has no explanatory mention of `máy tính cầm tay`, although the SGK outcomes include calculator use for approximate-number calculations | B12, Q02/Q03 | Check complete lesson/outcome matrix first (Knowledge/Core); add only missing teachable calculator explanation if the complete learning path lacks it |
| `CHV-OUTCOME-B14-004` | B14 published Knowledge and current B14 SVG contain no `biểu đồ hộp` / boxplot; the source's current heading simply `Giá trị bất thường` | B14, Q01/Q02/Q07/PED4 | Verify S1 section 3 and add source-accurate boxplot explanation/how to read/figure and example **in AUTHORING only**, with Q18 Delta C review and source lock; cannot mark PASS from existing variance-only SVG |

The above are **observations/requests**, not invented `ACADEMIC_PASS`. If complete existing Core covers a missing skill, document exact `OUTCOME_ID`/route evidence rather than claim it missing across the whole chapter. Preserve all old successful snapshot reviews (no blanket rereview).

## 4. Contract for one corrected source packet

- Exact three edited Markdown source Git blob SHA and primary S1 source receipt SHA; per lesson/outcome Q01–Q14, actual initial `item_id` arrays, 14 existing First Try answer bodies compared byte-for-byte (no new canonical ID), 6 HELP and D6 diagnosis links, and all 9 examples preserved unless an explicitly reviewed semantic fix is needed.
- All three have exactly 4 approved **outer tabs**. No First Try in tab 2. The new `2.1–2.3` headings are exactly aligned to primary S1. Fig B14 boxplot must be inspected as actual image for correctness, not just checked for an alt label.
- Any new explanation, example, graphic, method or answer is `DELTA_C_ACADEMIC_MATERIAL`, with affected Q18 math + PED source-locked `MINIMAL_DELTA`, written academic/self-QA signoff from authorized AUTHORING/owner; no reviewer PASS claim if none.
- RELEASE tests: source SHA/IDs/unmodified answer bodies; B12–B14 Chromium 390/820/1440, responsive MathJax/SVG/TOC, original G10 B01–B11, full G10 27, R4, Roadmap, Q16 closed First Try, Final Submit/RD1 storage preserved, AP1–AP5/R1–R5, exact-head/gh-pages parity after actual merge/deploy.
- Until corrected `CONTENT_READY` + valid receipt enters intake: `BLOCKED_BY_AUTHORING` for academic source while the **UI-only Draft #837 remains preview**. NO MERGE/DEPLOY and no P2 Safari claim.

## 5. RELEASE work already staged

Draft #837 only changes `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`, tests, no-deploy workflow, and this source-gap handoff note. Existing Golden CSS SHA `44442773ac31eb1a46f0cab699a7d2c7974a5f37` remains unchanged. B12–B14 source math Markdown SHAs remain exactly as above. The Preview is **not** signoff for the corrected content sequence.
