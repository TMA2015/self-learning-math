# G10 ChI B01 · Distinct concept/definition colors · UI-only Delta A · 16/11/2026

**DELTA_CLASS:** `DELTA_A_UI` (only shared stylesheet plus UI regression tests; **no Knowledge Markdown or academic source changes**)  
**OWNER_REPORT:** after inspecting released B01 R02, owner confirmed earlier P2 errors fixed and reports that concept/definition boxes visually share the same amber color as memory boxes. Owner requested verification against approved HTML style, and differentiation where absent.  
**OWNER_DESIGN_REFERENCE:** `prototypes/thpt/THPT_R4_GOLDEN_UI_OWNER_DESIGN_LOCK_20261027.md` (owner-approved Golden UI v3 design); v3 raw HTML artifact not found in available Project/GitHub sources. Related retained original `prototypes/thpt/g10-b16-dual-path-full-learning-r2.html` uses **teal** emphasis `.feature` and **amber** caution `.tip`. The present B01 CSS before patch gave all `.thpt-r4-knowledge-conclusion` cards the same amber `#fff3d5`. Source-derived styling relationship is teal concept vs amber memory, not a claim of byte-exact v3 color verification.

**PREVIOUS_RELEASED_MAIN_SHA:** `e36fa06c49298b18c0d09e60bb35f053d8b39ce3` (B01 R02 release, not modified).  
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`  
**BASELINE_CSS_GIT_BLOB:** `44442773ac31eb1a46f0cab699a7d2c7974a5f37`  
**CANDIDATE_CSS_GIT_BLOB:** `d7167adbc35770e8e4785ac11a36e2cb40c5cfe1`  
**IMMUTABLE_B01_KNOWLEDGE_SOURCE_BLOB:** `dba6430cd79b17dee0591fb2dcd075ea5200b126` (R02; should remain exactly equal on main, PR and gh-pages content source).  

## Source-grounded visual delta

- B01 R02 has exactly seven `thpt-r4-knowledge-conclusion` boxes headed `Khái niệm` or `Kí hiệu`, with no other amber `Kiến thức cần nhớ` box in that lesson. The other five lesson sources and all original amber memory boxes retain the original CSS style.
- Use unique canonical hidden B01 First Try `THPT-G10-CHI-TRY01` as CSS-only page scope, combined with existing Golden `thpt-g10-knowledge-ap1.thpt-g10-first-six-golden` route classes; no added JS, page metadata, Q14 changes or semantic text checks that would affect content.
- Light mode concept: background `#e8f7f2`, left border `#087d69`, text `#174137` (teal/green). Amber memory remains background `#fff3d5`, left border `#c49a37`.
- Slate mode concept: background `#193d36`, left border `#76dfc7`, text `#e9fff7`. Amber memory remains `#4a3a25` with amber left edge.
- Only styling. Existing 4 Golden tabs, 5 S1 sections, 7 concept boxes, 4 examples, 5 First Try IDs, 2 HELP IDs, original SVG, Core, Practice, Q16, RD1, Mastery, Firebase and THCS/Topic unaffected.
- **QA required:** source Git SHA chain (stylesheet candidate and unchanged B01 text), real browser `390/820/1440` verifies B01 teal in light and dark, and B02–B06 still amber; existing R4/UX795/Golden/roadmap checks on exact HEAD; after merge deploy must report success and Pages CSS asset blob must equal candidate. Final owner physical-device P2 review is separate.

**ROLL-OUT:** owner-approved B01-only correction and publication after QA; B02 remains unstarted until B01 acceptance. Log as `B01-F10` in existing [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795) — **not** a new quality checklist.
