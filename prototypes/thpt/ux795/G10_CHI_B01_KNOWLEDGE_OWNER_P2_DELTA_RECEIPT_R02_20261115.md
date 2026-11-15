# G10 ChI B01 · Owner P2 correction DELTA receipt R02 · 15/11/2026

**RECEIPT_TYPE:** `ENRICHMENT_DELTA_RECEIPT` · **STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.1.0` (effective on main; pending Draft PR #867 v3.1.1 is not effective)  
**SCOPE:** `SGK_CHAPTER / G10 / CHI / B01 / Knowledge-only / OWNER_P2_CORRECTION`.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-i/bai-1.md`  
**PREVIOUS_RELEASED_MAIN_MERGE_SHA:** `5bd9a7375744c6c2482a9c12ddbdf890371074e7`  
**BASELINE_LESSON_GIT_BLOB:** `0b37ec0d4b1394de0f4f396e7727084870250177` (deployed B01 R01 — immutable)  
**CANDIDATE_LESSON_GIT_BLOB:** `dba6430cd79b17dee0591fb2dcd075ea5200b126`  
**PREVIOUS_IMMUTABLE_RECEIPT:** `prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_ENRICHMENT_DELTA_RECEIPT_R01_20261115.md` (do not edit or reinterpret original release approval).

## S1 and Owner evidence

- **Owner reported live-site P2 defects:** (a) in all four B01 examples, heading “Vì sao chọn cách này?” appears before any selected solution method; the prose is actually a **Phân tích** of the problem / potential solving route; (b) core mathematical statements are definitions/concepts but rendered as unmarked plain prose in SGK Knowledge; (c) “Vận dụng — chiều kéo theo” and “Vận dụng — hai chiều” are unnecessary labels instead of simply **Vận dụng**.
- **Source S1:** Toán 10 Kết nối tri thức với cuộc sống, Tập một, Bài 1 Mệnh đề, printed pp5–11, five original sections: 1. Mệnh đề và mệnh đề chứa biến; 2. Mệnh đề phủ định; 3. Mệnh đề kéo theo và đảo; 4. Mệnh đề tương đương; 5. Kí hiệu ∀, ∃. Verified against previously locked S1 R01 source crosswalk and published textbook chapter contents (SGK247 / OLM). This is a targeted proof of section/concept parity; not a new page-by-page S1 or SBT academic audit.
- **Owner decision:** correct and re-release B01 before moving to B02; preserve history and log in [#795](https://github.com/TMA2015/self-learning-math/issues/795).

## Delta and affected outcome/source checks

| DELTA_ID | Qxx / source concept | Type / change | Q18 math verification and protected scope |
|---|---|---|---|
| B01-R02-01 | Q04/Q12/Q13 · four examples | `DELTA_B_SOURCE_EQUIVALENT` — replace four **Vì sao chọn cách này?** with **Phân tích.**, make introduction describe analysis before solution | All four examples retain same mathematical problem, solving arguments, conclusions, counterexamples, IDs and MathJax; label now accurately describes prose content rather than pretending method was selected first |
| B01-R02-02 | Q01/Q03/Q09–Q11 · sections 2.1–2.5 | `DELTA_B_SOURCE_EQUIVALENT` plus targeted `DELTA_C_PED_PRESENTATION` — mark seven source-aligned **Khái niệm** / **Kí hiệu** statements explicitly inside existing Knowledge note boxes; keep all five S1 sections and existing worked explanations; demote five redundant summary highlight boxes to ordinary **Lưu ý** paragraphs | Core facts unchanged: a proposition is exactly true or false (never both); substitution in a propositional form yields a proposition; negation reverses truth value; `P⇒Q` only false for true P and false Q; converse `Q⇒P` needs separate proof; `P⇔Q` requires both directions; ∀ vs ∃ on same domain. No new claims about source status and no changes to answer keys |
| B01-R02-03 | Q14/Q17 · five source First Try placements | `DELTA_A_UI` — unify five visible prompts to **Vận dụng.**, with no “chiều kéo theo”/“hai chiều” subtitles | Five original `THPT-G10-CHI-TRY01…TRY05` are exactly preserved with their existing hidden public disclosure answers, roles and placement; no content or Q16 scoring changed |

**Seven boxed labels:** Mệnh đề; Mệnh đề chứa biến; Mệnh đề phủ định; Mệnh đề kéo theo; Mệnh đề đảo; Mệnh đề tương đương; Kí hiệu lượng từ. “Điều kiện cần/đủ” is visibly titled in 2.3. Explicit **Khái niệm** is a pedagogical label for an existing S1 definition; no new normative standard or independent credential.

**Q15/Q16 invariants:** four Golden tabs, 5 canonical First Try IDs, 2 original HELP/D6 IDs, the original SGK B01 SVG and image alt/caption, all Core/Practice/Written/Anchor, private RD1, Final Submit, official Mastery, Firebase, Gemini, other SGK lessons, all Topic and THCS paths unchanged. `SOURCE_BLOB` chain is immutable R01 → R02; no retroactive rewrite of R01 QA PASS.

**Q18_SELF_VERIFICATION:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, based on source crosswalk, owner-provided P2 defects and independent internal examination of unchanged examples. It is **not** NotebookLM/independent academic-reviewer PASS and does not certify production UX.  
**MATH_VERIFICATION:** 7 core logical definitions and truth conditions checked (negation, conditional, converse, equivalence, quantifiers); all four previous examples unchanged mathematically.  
**PED_VERIFICATION:** Labels distinguish concept/notation from example, “Phân tích” honestly describes the step before worked solution, all first-try prompts now uniformly “Vận dụng”, no redundant extra Golden tab.  
**RELEASE_QA_PENDING:** exact-head source/receipt hash, 18-case B01–B06 Golden browser, 27-lesson UX795 browser, R4 full preview and Roadmap, then authorized merge/push deploy, actual `gh-pages` SHA/content verified, owner real-device P2 final acceptance. Do not pre-claim QA SUCCESS or browser acceptance.  
**OWNER_SCOPE:** fix B01 only in current release; B02 must wait for owner approval of corrected B01.
