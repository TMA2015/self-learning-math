# G10 SGK ChV · B13 — ENRICHMENT DELTA RECEIPT · R01 · 19/11/2026

**RECEIPT_ID:** G10-CHV-B13-20261119-GOLDEN-SELF-STUDY-R01  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18 (no second academic standard)  
**SCOPE:** `G10-B13` only, SGK ChV *Các số đặc trưng đo xu thế trung tâm*; B01–B12 owner-approved unchanged; B14 not opened.  
**STATE:** `RELEASE_CANDIDATE / DELTA_C_ACADEMIC_MATERIAL_AFFECTED_REVIEW_HOLD / NOT_MERGED / NOT_DEPLOYED / NOT_OWNER_P2_PASS`. Do NOT treat this document or CI as an independent academic/PED verdict.  
**S1:** SGK Toán 10 Kết nối tri thức tập 1, printed pp78–83, §1 Số trung bình và trung vị / §2 Tứ phân vị / §3 Mốt, verified against original frozen teaching source and public SGK transcription (external witness, **not** publisher-authenticated full PDF). The authentic SGK/SBT scanned edition and PDF-page offset remain **SOURCE_RECEIPT_S1_PDF_UNVERIFIED**. No guessed PDF page numbers or SBT page references.  
**Q18_REVIEW:** targeted independent Academic/PED verification of genuinely changed explanation/exemplars (Delta C), or signed owner-authorized Q18 self-QA supported by direct S1 evidence, remains to be collected. No PASS is self-issued here.

## Canonical and immutable source custody

| Role | Path / evidence | Git blob SHA |
|---|---|---|
| Frozen baseline B13 public Knowledge | `docs/thpt-preview/sgk/chuong-v/bai-13.md` on `main=f4d97fac0a3535dee8c31a8a682db5f4d6e523e1` | `0459b67858246cb6136cf9a2cf9e7a7d18bd27be` |
| **One active B13 candidate learner Knowledge** | same exact path on `release/g10-b13-central-tendency-upgrade-20261119`; **not cloned into a competing Markdown source** | `d15c561b281986f3e122dcaba1a25ccf0046fda7` |
| Previously owner-accepted G10 B01–B12 CSS prefix | `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css` frozen main | `aac2ad16261382987ea0fbb47ceee0987c5f9631` |
| B13 **only** CSS Golden palette appended | same CSS path, exact signed candidate; previous prefix remains byte-identical | `a4fa446f5437ae5054627700434fb101524827c4` |
| B13–B14 canonical public bank (unchanged) | `docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js` | `ddd5ec947029f644865110f2f381047214499e3e` |
| Original reviewed D5 B13 quartile SVG (unchanged) | `docs/assets/images/thpt/THPT_G10_B13_QUARTILES_D5_R01.svg` | `acaf49296892e35c48fb2b4a5b335a7d26643336` |
| Frozen authoring R01 (unchanged, NOT candidate) | `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` | `49502fe39cf0a67f6a3e973a77f94164150637a7` |

## Exact affected lesson/outcome and evidence map

- **LESSON_ID:** `G10-B13`. `G10-B12` and other owner-signed lessons unchanged.
- **Outcome 1 — Mean and frequency weighted mean:** Knowledge §1.2.1 and §2.1; 3.3 demonstrates eight actual observations rather than averaging four distinct values; formative `THPT-G10-B13-C01/P01` unchanged.
- **Outcome 2 — Median, odd/even sample:** Knowledge §1.2.2 / §2.1; examples 3.1 / 3.2 explain sorted indices and even center positions; `C02` unchanged.
- **Outcome 3 — Quartiles per KNTT:** §1.2.3 with original D5 figure moved next to conceptual explanation; §2.2 stepwise rule; examples 3.1/3.2/3.3 verify `Q1≤Q2≤Q3`. **Odd n excludes only the observation at the central position, not all repeated equal-value observations.** Canonical `P02/P05` unchanged.
- **Outcome 4 — Mode and ties/no distinct mode:** §1.2.4 / §2.3 and examples 3.1–3.3; canonical `P03` unchanged.
- **Outcome 5 — Choose and interpret a representative:** §1.2.5 and 3.4 distinguish outlier effect on mean vs median; canonical `P04/P06` unchanged.
- **Public 8 IDs** = B13 `C01,C02,P01,P02,P03,P04,P05,P06`; exactly one previously canonical `W13` Written question, not cloned. All original questions, keys, options, solutions, rubrics, roles, difficulty and Q15 IDs in bank/Written **unchanged**.
- **First Try / learner self-application 5**: original `THPT-G10-CHV-TRY05..TRY09` IDs, prompts and comparison held in same five original sections; only visible label `Em tự thử` → owner-prescribed `Em vận dụng` and D6 recovery pointers corrected. Voluntary compare is distinct from protected Final Submit.
- **D6 two HELP IDs**: `HELP-G10-B13-01/02` preserved, headings 4.1/4.2 and links go to real Knowledge §1.x/§2.x and real existing canonical practice. No fake section names or developer IDs in visible prose.
- **D1–D6/PED1–PED6 meaningful change:** Concept motivation/why choose→graded examples with multi-step explanation→D5 guided diagram→pre-Core learner attempts→specific D6 remediation. Four separate examples: seven-value odd sample, six-value even sample, eight-observation frequency table, robust median under extreme value. **Not** the solved D5 sample `2,3,3,7,10`. Four formal teal cards and one blue quartile method rule, aligned B10/B12 Golden.
- **Q16/Q17:** Chapter END, client self-check, public bank roles, Mastery, independent RD1 custody, learner storage and Firebase unchanged; no hint/AI Tutor/answer-key reveal policy changed; no separate Topic path altered.

## Recalculated math spot proofs (not a reviewer verdict)

- EX3.1 data sorted `4,5,6,6,7,9,12`: sum=49, mean=7, median=6, Q1=5, Q3=9, mode=6.
- EX3.2 sorted `3,5,7,9,11,14`: sum=49, mean=49/6, median=8, Q1=5, Q3=11, all unique ⇒ no mode according to declared SGK convention.
- EX3.3 frequency rows `x=[3,4,8,10], m=[1,2,3,2]`: n=8, weighted sum55, mean55/8, sorted `3,4,4,8,8,8,10,10`, Q1=4,Q2=8,Q3=9,mode8.
- EX3.4 five waits `5,6,6,7,100`: sum124, mean24.8, median6; changing 100→200 increases mean20 and leaves median6. Original 5 First Try keys and 8 formative answers unchanged.

## QA gates to close before student publication

1. **SOURCE / REVIEW:** authenticate SGK/SBT S1 original page and PDF-to-printed offset; cross-check all changed conceptual text, definitions, odd/even quartiles, examples and mode convention; obtain appropriate scope Q18 Academic/PED receipt or self-QA under authorized mode. Until then `SOURCE_RECEIPT_S1_PDF_UNVERIFIED` and `DELTA_C_REVIEW_PENDING` remain.
2. **Golden / browser:** `test-g10-chv-b12-b14-golden-preview-browser.cjs` checks 390/820/1440, first-try count, **four B13 worked examples**, MathJax, B10 actual computed teal/blue/neutral palette, pan/real decode of original quartile D5 in **Tab1**, 2 D6 and Q16. `test-thpt-g10-chv-b13-b14-release-integration.cjs` preserves R01 bank and figure. `test-thpt-sgk-editorial-theme-preservation.cjs` locks owner B01–B12 CSS prefix and B13 full signed candidate with negative mutation.
3. **Release:** exact final PR HEAD CI; verify no other B01–B12 page, HTML, JS source changed, and CSS B01–B12 prefix SHA unchanged. Any failed browser/MathJax/computed palette remains `BLOCKED_BY_RELEASE`. Merge/deploy only with separate explicit owner permission and complete gates; P1 then owner P2 on real device; do not open B14 before B13 owner acceptance.

**Original audit source:** historical commit `f44c6c7fa6c3108ad96e928e131fe769581f822d`, `G10_CHV_B12_B14_DEEP_S1_PED_PRACTICE_WRITTEN_AUDIT_R01_20261114.md`, findings `CHV-B13-01..03`. **This receipt documents affected change, not an independent Academic/PED PASS.**
