# G10 B11–B12 · OWNER P2 correction · ONE SOURCE-FIRST Delta A receipt

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.2.0` · **SCOPE:** B11 Examples tab + B12 formal SGK / Examples / D5 interval figure. **CLASS:** `DELTA_A_UI` only (presentation/labels/markup; not revised mathematical claim, problem, answer, conditions, rubric, or item id). **ISSUE:** #795. **PR:** #910. **STATUS:** AUTHOR_SOURCE_UPDATE_CREATED / INDEPENDENT_P2_PENDING / NO_RELEASE_BEFORE_CI.

**B11_BASELINE_SOURCE_BLOB:** `60a3d043694986e3250f15b51350380b86f70cfc`
**B11_SOURCE_CURRENT_BLOB:** `d35a39eedef9d5b55e96836de83649d9a014e42e`
**B11_BASELINE_CANONICAL_BLOB:** `db9ec64bc82d44ae09a7cdce79b97e14ac4a2ef8`
**B11_CANONICAL_CURRENT_BLOB:** `d43ec90d02c1ae9e61d66ee886df82692ba2616d`
**B12_BASELINE_SOURCE_BLOB:** `fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78`
**B12_SOURCE_CURRENT_BLOB:** `6b0f137849e11a74a28d4b7fe436d2911a5b5c9d`
**B12_BASELINE_CANONICAL_BLOB:** `c4ee9f322d158d775be551c9888d426aba8ee16d`
**B12_CANONICAL_CURRENT_BLOB:** `b07e9f19f7fea1beb4e334924d795d276d0a8eb4`

## One current canonical per lesson (not new manuscripts)

| Lesson | Former reviewed/published Knowledge SHA | Current learner Knowledge SHA | Former immutable canonical SHA | Updated SAME canonical file SHA |
|---|---|---|---|---|
| G10-CHIV-B11 | `60a3d043694986e3250f15b51350380b86f70cfc` | `d35a39eedef9d5b55e96836de83649d9a014e42e` | `db9ec64bc82d44ae09a7cdce79b97e14ac4a2ef8` | `d43ec90d02c1ae9e61d66ee886df82692ba2616d` |
| G10-CHV-B12 | `fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78` | `6b0f137849e11a74a28d4b7fe436d2911a5b5c9d` | `c4ee9f322d158d775be551c9888d426aba8ee16d` | `b07e9f19f7fea1beb4e334924d795d276d0a8eb4` |

**B11 canonical current path:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md`. 
**B12 canonical current path:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md`.
**Learner rendering paths:** `docs/thpt-preview/sgk/chuong-iv/bai-11.md` and `docs/thpt-preview/sgk/chuong-v/bai-12.md`. Both MUST be byte-identical to canonical Section A, and *only* Section A is changed. All original public item banks/answers/rubrics, Q15 IDs and selfcheck remain unmodified.

## Source-first implementation and proof obligations

1. **B11:** Four existing worked Example source blocks now say `Phân tích`; original full mathematical `Giải` is nested within native MkDocs `!!! example "Lời giải"` admonition while `Đề` and `Kiểm lại` remain outside. Example 4 retains the exact force-transfer illustration, distinct 8N/15N illustrated data and 6N/6N worked values, and displayed equation inside the native solution admonition.
2. **B12:** Same four native boxed solutions, with `Phân tích` and `#### Đề bài` before each original unboxed `Đề` to prevent historic ChV runtime mistakenly boxing first P. Three existing formal mathematical concept paragraphs + one rounding rule now sit in native `!!! abstract` / `!!! info` cards, no mathematical word altered. Exact reviewed interval SVG is displayed at an authored max width 780px, and minimum 600px internal-scroll canvas on narrow screens. Its SVG payload and readings have not changed.
3. **No runtime overlay:** The prior PR #910 overlay approach (new per-lesson JS, CSS, post-page hook) was dropped. No new `docs/assets/javascripts` / `docs/assets/stylesheets` / `hooks` assets. Existing shared Golden UI remains unchanged. This avoids global HTML drift and per-lesson patch accumulation.
4. **Mathematical invariants:** Exact ordered TeX tokens from old and new Knowledge must compare equal; count and order of first-try/outcome/HELP and figure IDs must compare equal; old Core/Practice bank and Written unchanged. New source SHA is distinct but change class is UI-only. This receipt does **not** overwrite or retroactively edit the original independent Academic/PED verdict signed for older source blobs.

## Release gates

Re-check canonical Section A = learner source byte-for-byte, correctly rendered Native MkDocs admonition boxes and MathJax at 390/820/1440, B12 formal card semantics and 600px internal figure pan on phone, no document horizontal scroll, B01–B10 and B13/B14 source/HTML unchanged, R4 / Roadmap CI and protected Q16. After publication verify the actual new website artifact, then return P2 to owner for hands-on device acceptance. **No automatic mastery, no unapproved source changes, no B13 initiation.**

**Receipt purpose:** Current source selection and UI delta proof; historical review receipts are archived via Git history, not competing current manuscript sources.
