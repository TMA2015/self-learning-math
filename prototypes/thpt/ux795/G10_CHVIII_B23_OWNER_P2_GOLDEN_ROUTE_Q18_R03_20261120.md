# B23 — Golden owner P2 correction R03 (20/11/2026)

**RECEIPT_ID:** G10-CHVIII-B23-OWNER-P2-GOLDEN-ROUTE-R03-20261120
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, approved Golden R4 and original G0→G5. NO new standard or test suite.
**SOURCE_PATH:** docs/thpt-preview/sgk/chuong-viii/bai-23.md, the ONE canonical learner source.
**R03_PREVIOUS_SOURCE_BLOB:** `ed7a35d6650ecbe59f01e824295174541c4e3b49`
**R03_CORRECTED_SOURCE_BLOB:** `e0c20af522b61cb69b33ad5f7d4d6bde8c011f47`
**R01_SNAPSHOT:** 8e94c245250b77b6f7670345f9edcb7b85e958ac, untouched R01.
**R02_SNAPSHOT:** ed7a35d6650ecbe59f01e824295174541c4e3b49, untouched R02.
**DELTA:** DELTA_A_UI only. All math, answer/rationale, Q15 IDs, D6, links, source SVG and Q16 unchanged.
**OWNER_P2:** OWNER_P2_FAIL_RECEIVED / R03 correction requires owner reinspection.
**ISSUE:** B23-GOLDEN-03..07, master #795 comment 7037123158.

## G0: What failed — verified against accepted B22

Approved B22 has four blue rounded tabs, active blue selected state, pale blue section/subsection frames, neutral worked-solution panels and blue-gray ▶ D6 disclosures. Existing shared JavaScript docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js routes only chapters I–VII up to B22 into the approved Golden article classes. B23 is missing, hence four raw MkDocs tabs without the approved Golden look. The previous R02 CSS tried to mask this root cause using bespoke amber/blue styling. Previous G0/G2 did not compare all four actual learner-facing tabs against the owner-accepted B22, although the owner had already specified that process. Source/CI count PASS was mistakenly treated as UX parity.

## G1: One-lesson compatibility correction, no second interface

One originally intended shared-router change was evaluated but NOT retained because it touched shared runtime and triggered wider historic unrelated red gates (B17 source receipt; B19 D6/G10 preview; stale B23 figure single-count assertion that contradicts the owner's dual-placement rule). No other lesson or global gate was silently rewritten or disabled.

R03 instead adds a narrowly guarded display initializer **inside the ONE B23 canonical Markdown**: only on B23 with a unique page-level display marker (never repeats the canonical TRY01 ID in script source), it assigns the existing Golden article class thpt-g10-chiv-golden, inserts the exact already-approved four h2.thpt-g10-section-heading titles, and synchronizes slm-g10-active-tab based on the four existing Material radio inputs. **ALL visual CSS** comes from the unchanged accepted B22 stylesheet docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css. No cloned theme, no new Golden runtime or global DOM mutation; no assessment, Firebase, Mastery, RD1, Final Submit, THCS, other SGK or Topic route touched.

Removed competing R02-only details/question/tip/solution CSS, removed redundant lead and error subheadings, aligned discovery h3 to 1.1–1.5, knowledge 2.1–2.3, worked examples 3.1–3.3. Reuse the six existing D6 headings 4.1–4.6, the genuine three example solution containers and two references to immutable source SVG G10_B23_ADD_MULTIPLY_CHOICES_R02.svg.

## G2: Self-review of WHOLE four-tab learner journey

- **Khám phá kiến thức:** concept-first distinctions between one alternative vs completed multistep result; four source-locked TRY01–04 and voluntary closed Đối chiếu; SVG reads 4+3=7 versus 4×3=12; genuine five-leaf counting tree with 10,12,20,30,32; section 1.1–1.5.
- **Kiến thức SGK:** authentic textbook sections 2.1 addition+tree, 2.2 multiplication, 2.3 combination; two teal concept and two blue formal rule cards, three readable unboxed conditions, and same canonical SVG with independent learner reading guidance.
- **Ví dụ:** three full problems with analysis, solution, independent check; correct 7/12, 16/20, 5. Three Lời giải containers inherit the same neutral B22 Golden box rather than R02 bright blue.
- **Lỗi thường gặp:** precisely four original five-step HELP plus two historical D6 with unique 4.1–4.6 labels, default-closed and formative/Written links, the same approved muted blue ▶ fold surface as B22.

Original answers, explanations, item/outcome IDs and math conditions byte-identical; no new bank or official mastery. Existing two-placement SVG immutable SHA 4b3aaa807855768100975b4afcd2912be99946b6. Numerical cross-check: 2+6=8; 4×3=12; 3×3=9; 3+2=5; 4×4=16 and 4×5=20.

**G2_VERDICT:** OWNER_P2_GOLDEN_CORRECTION_SOURCE_SELF_REVIEW_COMPLETE, not a real-device owner P2 PASS; final rendered QA pending at drafting.

**G3–G5:** Run only the existing source, scoped Golden browser, MathJax/SVG, Q15/Q16, receipt and release-impact checks on exact HEAD; do not fabricate an independent Academic PASS. Inspect actual 390/820/1440 output for four visible Golden section cards, blue active tab, neutral Lời giải, blue ▶ D6, all 27 maths/4 TRY/6 D6; compare B22 immutable HTML. Only after green gates, merge/deploy under previously granted owner release authority and check gh-pages parity. P2 still requires owner reinspection.
