# UX795 — THPT CROSS-GRADE HYBRID PRESENTATION PILOT (08/11/2026)

**Issue:** [#795](https://github.com/TMA2015/self-learning-math/issues/795)  
**Mode:** `RELEASE_RESEARCH_DRAFT / SOURCE_LOCKED_REFERENCE / NOT_PUBLISHED`  
**Owner design direction:** SGK concept flow + hybrid 4-area navigation, flexible per lesson. **This is not an Academic/PED review, not CONTENT_READY, not P1 or P2 QA.**

## 1. Deliverable

- [`UX795_HYBRID_CROSSGRADE_AB_20261108.html`](UX795_HYBRID_CROSSGRADE_AB_20261108.html): one HTML-only **A/B research viewer**, 3 switchable case studies (G10 B02, G11 B08, G12 B07), `noindex`, browser-only, no backend, no scoring or student data.
- `A`: original `<article>` fragment from a locked, published `gh-pages` snapshot, with the exact published SVG embedded. Not a complete copy of production site scaffolding/CSS.
- `B`: **selected/organised fragments** from the same HTML snapshot: four main regions `Khám phá kiến thức` (with `Thuật ngữ và kiến thức, kỹ năng` immediately at the bottom of Discovery) → `Kiến thức SGK` → `Ví dụ giải toán` → `Lỗi thường gặp và cách khắc phục`. In source-locked examples, a figure is re-positioned near the relevant knowledge concept; solution-reason is relocated closer to G11 examples; existing pre-Core formative prompt stays under SGK knowledge rather than inside discovery.
- `B` intentionally selects or hides **some** original narrative. **Do not publish** without targeted AUTHORING verification that every lesson/outcome and Q01–Q14 remain complete. The terminology/skills overview is a study placeholder derived from visible source headings/terms and must be checked against S1; **no new mathematical claim is certified**.

## 2. Source receipts

| Case | Main Markdown blob | Published HTML blob (`gh-pages`) | Original SVG blob |
|---|---|---|---|
| G10 B02 · Sets | `70c77844b0bee75565f8a059ddc4befd3ad9dd2d` | `6a05e1409d00f8f24ac95b8ee686b16a0b150cf6` | `ea84ee68187e83aa4bc6b14e49a965b3d7da5a11` |
| G11 B08 · Grouped data | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` | `9cc5b34cbafb1f6691f6be7dd0c8f89dcda26616` | `ef440d8b314bbbf74a21d624843a38577b040876` |
| G12 B07 · 3D coordinates | `4bfbed222d552f3ccb9c965616245015930ab1cd` | `016708f22252ea6b9e0061d2868496861252b06b` | `979ca912e99fdadfc4e91ae0edad5db34fc13928` |

Markdown source:
- `docs/thpt-preview/sgk/chuong-i/bai-2.md`;
- `docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md`;
- `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md`.

SVG source is not modified, and prototypes are **outside `docs/` / `mkdocs.yml` navigation**. No changes to `main`, `gh-pages`, Golden, Core, Written, Q15 IDs, Q16 Final Submit, RD1, Firebase or Gemini.

## 3. First-pass QA

- **PASS (static source inventory):** three exact source receipts and three original source SVGs embedded as local `data:image/svg+xml`; three compiled HTML lesson fragments isolated in A mode.
- **PASS (JS parser / mocked DOM, not real browser):** B mode renders four uniform H2 regions for each grade; retains one figure per lesson; G10 B02 keeps 6 distinct original First Try IDs **without duplicate placements** and preserves closed-answer blocks.
- **PASS (no write paths):** A/B switch and lesson choice affect only isolated DOM in research viewer, no forms, marks, storage or server calls.
- **NOT_RUN:** interactive Chromium/Safari/iPad QA at 390/820/1440, computed font/size parity, MathJax online/CDN availability or accessibility audit with real screen reader.
- **NOT_RUN:** learner evidence (unseen transfer tasks, without AI Tutor). No claim that the hybrid design is yet better than source or SGK.

Run the dependency-free smoke check locally: `node prototypes/thpt/ux795/test-ux795-pilot.cjs`. This test deliberately does **not** certify AP5/browser performance.

## 4. Open issues and required handoff

| ID | Open decision/blocker | Owner / gate |
|---|---|---|
| UX795-01 | Verify discovery for a multi-concept lesson (G10 B02) does not drop mandatory explanation/outcomes when converting repeated PED-labelled narrative into natural prose; prototype B is selected excerpts, not complete. | **AUTHORING DELTA_C** scoped review if new/rewritten pedagogy required. |
| UX795-02 | Terms/skills summary and 1–2 intuitive examples need S1-aligned authoring confirmation; do not present headings-derived placeholders as canonical knowledge. | **AUTHORING Q01/Q02/Q10** + NotebookLM on affected sections. |
| UX795-03 | G11 B08 figure has its **own** distinct sample, not the example data. Maintain specific caption/conditions when moving it; check example reason-to-statement mapping. | **RELEASE AP3/Q07** plus targeted AUTHORING only if new math claims. |
| UX795-04 | G12 B07 SVG belongs beside the three-axis explanation, not as a delayed standalone illustration. Check semantics with exact published SVG. | **RELEASE AP3/PED4** |
| UX795-05 | Self-try cannot vanish: keep a small active learner step and self-revealed answer **in Knowledge/Example before Core** (Q14/PED6); do not create a separate awkward heading. | **Q14 protected**, no Standard Change required if first try preserved. |
| UX795-06 | Live production has additional leaks (metadata `FIG-`, `PED4`, `PREREQUISITE_`) and misrendered code/MathJax in G10 B01; this isolated viewer does **not** fix them. | **Issue #795 rollout inventory**, DELTA_A UI fixes after design signoff. |
| UX795-07 | CDN MathJax in viewer is optional; no offline math-render parity, no live site CSS proof. | **Browser QA + AP2/AP5** required before owner acceptance. |

## 5. Review questions for owner (pilot only)

1. Does switching the same lesson from A to B make the self-learning flow more apparent, without feeling like a six-label QA checklist?
2. Are the four page areas useful *as navigation*, while each individual SGK concept stays together with its own definition, conditions, diagram and immediately relevant example?
3. Are G11 B08 explanations more usable when attached to their examples, and is G12 B07 diagram better near the three-axis concept?
4. Is the Q14 active learner step placed in an appropriate part of `Kiến thức SGK` or `Ví dụ giải toán`, rather than in `Khám phá`?
5. Which wording/illustrations genuinely require a **targeted Delta C AUTHORING handoff** before a production-quality article is possible?

**Release gate:** `UX795_DESIGN_REVIEW_PENDING`. This Draft branch is a research artifact only. No `merge`, `deploy`, `CONTENT_READY`, `P1_PASS` or `P2_PASS` claim. Design preference alone does not certify self-learning; collect learner evidence and Q/AP receipts before any rollout.
