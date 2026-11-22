# G11 Chương VI · B18–B21 · AUTHORING Q18 source-lock · 22/11/2026

**MASTER:** #987 (single checkpoint); OWNER_SCOPE=G11 B02–33, then G12 B01–19; **ROLE:** AUTHORING only. **STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, actual main standard blob `488afe2908e0b471320e1d55f775391578d88bba`, X-C/X-D/X-E/X-F. **Q18_MODE:** Q18_AUTHOR_SELF_VERIFIED; **DISPOSITION:** AUTHORING_SOURCE_CANDIDATE_READY; not new CONTENT_READY_V2, not RELEASE READY. **CHANGE:** DELTA_C_ACADEMIC_MATERIAL (new concept-first, examples, FirstTry, revised academic conditions and depth); scoped presentation changes only in learner Markdown. No release approval.

## 1. Exact canonical learner sources

| Lesson | Existing learner source (one per lesson) | Original main blob | Exact new candidate Git blob |
| --- | --- | --- | --- |
| B18 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md | fd7d7a33ec276c4e03c95185c5ea49b53643b584 | 26618bb80b2a60db5528e74f2889a47b2e872f4d |
| B19 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md | f872e9f19e28467e1b6ea11a943e04a2edf3b266 | 60eb65189e9176016b7037591c1859b0c702c311 |
| B20 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md | 1587f399e7ea9557a9fc490768c589991f25dcb0 | 0d2ba970c8d5af3024e38c55a3551524a327aee1 |
| B21 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md | b7fb59866ce1b250e446cb957d975e7c58d037bb | f88193938f9ee21eb1a0ac1c7e3c40f66b854191 |

Branch `authoring/sgk-g11-chvi-b18-b21-r02-20261122`. This receipt is the single new chapter Q18 author record. No parallel learner copies for production; any Temp packet is review-only, not a learner URL.

## 2. G0–G2 / Q01–Q02 · actual source evidence and scope

Author inspected current accessible SGK digital text (Toán 11 KNTT tập hai, third reprint text, https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf), TOC, chapter VI headings and formal knowledge paragraphs, including B18 integer/rational/real powers, B19 three main sections, B20 two function sections with domain/range/continuity and graphs, B21 four equation/inequality sections and sign cases. Automated web PDF page-image requests failed (cache miss). Extracted public PDF text has transcription artifacts (e.g. an inconsistent displayed result in the rational-power example); do NOT reproduce those as mathematics or certify them as a publisher erratum. The corrected mathematics was independently derived. This new turn did NOT inspect all physical page images, re-download or hash the owner's original PDFs.

Historical directly verified owner-source evidence (preserve for the exact prior snapshot):
- `prototypes/thpt/review-packets/G11_CHVI_B18_B21_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md` blob `1badeeaf12462da1b0e2778213ce8a8dbf92e14b`.
- Owner SGK KNTT 11 T2 original scan 114 PDF pages, SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`; SBT T2 original scan 126 PDF pages, SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`; historical printed offset PDF1=printed+1, source visual receipt `prototypes/thpt/review-packets/G11_T2_OWNER_DRIVE_S1_PDF_VISUAL_SHA_RECEIPT_20261102.md`.
- SGK printed B18 4–9 / B19 10–15 / B20 16–19 / B21 20–24 / chapter exercises 25–26. SBT printed B18 4–7 / B19 8–10 / B20 11–15 / B21 16–19 / end chapter 20–23; SBT solutions chapter VI pp73–85 (not old erroneous pp117–134). These exact ranges are from the existing owner visual receipt, not newly inferred screenshots.
- Historical independent Academic/PED PASS on original reviewed R01 blob `f37113dc2a3a002511bc6b53ec53e049537f1947`; effective postpass Delta-B source `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` at `prototypes/thpt/content-drafts/G11_CHVI_B18_B21_PUBLIC_CANONICAL_R01_POSTPASS_DELTA_B_SOURCE_LOCK.md`; historical preflight `e3d66bccf5ca9d1da9cc5eb9f0291932d20a444c`. Old reviewer used five v2.0 Permanent Sources. Do not transplant that independent PASS to new Delta-C learner blobs.

**Per-lesson SGK headings and outcome coverage** (exact outcome prefix G11-Bnn- followed by names below; 21 lesson-specific, original chapter-level G11-CHVI-INTEGRATED stays in existing Chapter VI bank; total 22 original outcome IDs):
| Lesson | S1 sections in order | Outcome evidence in new source |
| --- | --- | --- |
| B18 | 2.1 Lũy thừa với số mũ nguyên; 2.2 Lũy thừa với số mũ hữu tỉ; 2.3 Lũy thừa với số mũ thực | POWER_INTEGER TRY01; POWER_RATIONAL TRY02–03; POWER_REAL TRY04; POWER_LAWS TRY05; GROWTH_MODEL TRY06; EX-R02-01–08; integer/zero/negative bases; chẵn/lẻ, căn thực và trị tuyệt đối; rule domains, rational power, real limit definition, monotonicity; calculator and compound growth |
| B19 | 2.1 Khái niệm lôgarit; 2.2 Tính chất của lôgarit; 2.3 Lôgarit thập phân và lôgarit tự nhiên | LOG_DEFINITION TRY01; LOG_DOMAIN TRY02; LOG_LAWS TRY03; LOG_BASE_CHANGE TRY04; LOG_APPLICATION TRY05–06; EX-R02-01–06; individual positive arguments, change base, lg/ln, e limit and continuous compound interest; pH calculation under stated model |
| B20 | 2.1 Hàm số mũ; 2.2 Hàm số lôgarit | EXP_FUNCTION TRY01; EXP_MONOTONIC TRY02; LOG_FUNCTION TRY03; LOG_MONOTONIC TRY04; INVERSE_GRAPH TRY05; EX-R02-01–06; domains/ranges, continuity, increasing/decreasing, tables and drawing guide, graph symmetry; half-life model |
| B21 | 2.1 Phương trình mũ; 2.2 Phương trình lôgarit; 2.3 Bất phương trình mũ; 2.4 Bất phương trình lôgarit | EXP_EQUATION TRY01; LOG_EQUATION TRY02; EXP_INEQUALITY TRY03; LOG_INEQUALITY TRY04; DOMAIN_CHECK TRY05; REAL_CONTEXT TRY06; EX-R02-01–08; b<=0 mũ cases, strict/inclusive bounds, mixed reciprocal bases, rejected roots, discrete thresholds and pressure model |

## 3. Q03–Q14 · learner depth, math, graphics and D6

- Four Golden tabs per lesson, tab 2 starts at 2.1 and uses exact S1 main section names. Definition/rule boxes use existing concept-card/rule-card; necessary conditions attached, no CSS/JS changes. Discovery starts with why, prerequisites and original figure read guidance; each FirstTry has optional comparison and a local error cue with actual return-to-practice item URL. No assessment action in knowledge.
- B18: six FirstTry, eight separately worked examples; includes real exponent definition via rational approximants, radical multiplication/division/nesting with existence conditions, negative root, rational exponent, comparison and both scientific notation/growth. B19: six FirstTry, six worked examples; logarithm definition with base/argument conditions, derived product law, invalid split of positive product with negative factors, base change, pH, natural log, continuous growth. B20: five FirstTry, six worked examples; restored continuity, value tables for increasing/decreasing exp/log, inverse points, domain and actual model. B21: six FirstTry, eight worked examples; all four basic forms, complete exp b<=0 cases and inequality tables, log domain intersection, exact/boundary checking, reciprocal-base example and discrete/continuous model interpretation.
- Math audit: 54 source-specific calculation/boundary/consistency assertions (53 from initial complete 23 FirstTry + 27 examples + 3 calculator/threshold checks, plus the final mixed-base EX-R02-08). Initial 52/53 due strict JS equality of 32^(3/5) (7.999999999999999); corrected by exact integer identity 8^5=32^3 and 1e-12 floating tolerance; negative rational result 27 verified. Final mixed-base checks at both accepted endpoints x=0,2, excluded x=-1,3, and interior/exterior sample points agree with (-1,0] union [2,3); full algebra in learner. All 54 checks now pass, supplemented by derivations in learner rather than claiming numeric samples prove theorem/entire curriculum. Specific calculator decimals 2^1.3≈2.4623, log_3 11≈2.1827, log_7 13≈1.318, growth 200*1.04^3=224.9728 and 80*1.03^4=90.0407048, threshold ln(5/12)/ln(.8)≈3.923 with n=4 (V3=122.88, V4=98.304), pressure 60kPa threshold -7ln(.6)≈3.576. No detected mathematical P0/P1 from this scoped author pass; image/render and independent-review gates remain separate.
- Original four SVGs unchanged, existing alt/caption verified against original title/desc and usage: FIG-G11-CHVI-B18-01_R00.svg `79528bcd2c87eb40b1b54f18c697b0ae3458e642`; B19 `fe2895ac101dcc4cf4046d57428181ad0f448dc8`; B20 `64bcb465bd6d809095a4ca2b910555e314badb69`; B21 `6d43f842d096b974eb70af21e6751f1ec70eea00`; no new graph or runtime claim. B19 figure reading label fixed before final SHA. Math comparison operators use MathJax lt/gt commands inside delimiters; real browser rendering not asserted.
- 21 checks per exact final learner blob, 84/84 total: Golden tabs, numbering, S1 heading exact match, tab 2 begins 2.1, examples sequential and four steps, versioned EX IDs, Try IDs distinct from bank/Written, complete outcome mapping, opt-in answers, local/global D6, HELP legacy identity, all D6 links correspond to existing item IDs, original figure hash/alt/read cue, one footer, balanced inline/display math, safe comparison markup, no local script/style or admin metadata, actual shared Written URL, unchanged public banks. FirstTry, EX and HELP IDs all unique among these four files. No claim historical all-branch duplicate search, runtime link behavior or mobile/MathJax rendering.

## 4. Q15 · item–outcome–role crosswalk, original public bank custody

| THPT-G11-B18-TRY01 | G11-B18-POWER_INTEGER | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B18-TRY02 | G11-B18-POWER_RATIONAL | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B18-TRY03 | G11-B18-POWER_RATIONAL | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B18-TRY04 | G11-B18-POWER_REAL | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B18-TRY05 | G11-B18-POWER_LAWS | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B18-TRY06 | G11-B18-GROWTH_MODEL | SGK_KNOWLEDGE_FIRST_TRY / B18 |
| THPT-G11-B19-TRY01 | G11-B19-LOG_DEFINITION | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B19-TRY02 | G11-B19-LOG_DOMAIN | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B19-TRY03 | G11-B19-LOG_LAWS | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B19-TRY04 | G11-B19-LOG_BASE_CHANGE | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B19-TRY05 | G11-B19-LOG_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B19-TRY06 | G11-B19-LOG_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B19 |
| THPT-G11-B20-TRY01 | G11-B20-EXP_FUNCTION | SGK_KNOWLEDGE_FIRST_TRY / B20 |
| THPT-G11-B20-TRY02 | G11-B20-EXP_MONOTONIC | SGK_KNOWLEDGE_FIRST_TRY / B20 |
| THPT-G11-B20-TRY03 | G11-B20-LOG_FUNCTION | SGK_KNOWLEDGE_FIRST_TRY / B20 |
| THPT-G11-B20-TRY04 | G11-B20-LOG_MONOTONIC | SGK_KNOWLEDGE_FIRST_TRY / B20 |
| THPT-G11-B20-TRY05 | G11-B20-INVERSE_GRAPH | SGK_KNOWLEDGE_FIRST_TRY / B20 |
| THPT-G11-B21-TRY01 | G11-B21-EXP_EQUATION | SGK_KNOWLEDGE_FIRST_TRY / B21 |
| THPT-G11-B21-TRY02 | G11-B21-LOG_EQUATION | SGK_KNOWLEDGE_FIRST_TRY / B21 |
| THPT-G11-B21-TRY03 | G11-B21-EXP_INEQUALITY | SGK_KNOWLEDGE_FIRST_TRY / B21 |
| THPT-G11-B21-TRY04 | G11-B21-LOG_INEQUALITY | SGK_KNOWLEDGE_FIRST_TRY / B21 |
| THPT-G11-B21-TRY05 | G11-B21-DOMAIN_CHECK | SGK_KNOWLEDGE_FIRST_TRY / B21 |
| THPT-G11-B21-TRY06 | G11-B21-REAL_CONTEXT | SGK_KNOWLEDGE_FIRST_TRY / B21 |

New FirstTry are voluntary and unscored, with one stem/answer/help in their own learner source. New worked example stems are identified individually as EX-G11-Bnn-R02-xx (not graded-bank items, not an assessment substitute). These replace the *learner presentation* examples on Delta-C candidate; original 19 EX identities/stems/solutions preserved in immutable reviewed snapshot, not relabeled or overwritten in the reviewed bank. Crosswalk for academic comparison, not a second canonical question:
| Earlier example family | New worked example location (R02) |
| --- | --- |
| B18 EX01 negative exponent; EX02 rational; EX03 laws; EX04 model; EX05 odd root; EX06 scientific notation/calculator | 3.1; 3.4; 3.5; 3.8; 3.2–3.3; 3.7 + 2.3; comparison 3.6 new |
| B19 EX01 definition; EX02 domain; EX03 log laws; EX04 base change | 3.1; 1.2 + 3.2; 3.3; 3.4; 3.5–3.6 new |
| B20 EX01 exp properties; EX02 inverse; EX03 monotonic; EX04 model | 3.1; 3.5; 3.2 + 3.4; 3.6; 3.3 new |
| B21 EX01 exp equation; EX02 log equation; EX03 exp inequality; EX04 log inequality; EX05 model | 3.1; 3.2; 3.4; 3.5; 3.6; 3.3, 3.7 and 3.8 new |

Original public formative `docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js` Git blob `33cf4229baa63ac70b4ca1b640a5be8414ed54c1`, **41** canonical records (16 Core, 21 Practice, 4 Application); original shared Written library `docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vi.md` Git blob `dba16473909e60d1dc186f41dfc2e270f06a104e`, **8** canonical Written IDs including four Anchor labels, unchanged. Old public bank/Written stems inspected to distinguish new question data, and all new IDs checked against both libraries; related mathematical families/variants intentionally remain learning tasks, never assessed as independent. Original 8 D6 HELP IDs present, 23 local and 16 general D6 (total 39 unique HELP IDs; old 8 included). No bank solutions/keys/rubrics changed.

## 5. Q16–Q18 · protection, open gates and disposition

22 original private RD1 kept outside public repository; not inspected/copied in this task; historical protected receipt SHA exists. No official independent assessment, score, Final Submit, learner Mastery, Firebase, authentication, Gemini, site navigation or production changes. Previously verified SGK and Topic paths remain separate; no cross-path verdict or new Topic PASS. No new release claim.

**Q18 author signoff (scoped):** 84/84 source checks, 54/54 case/consistency checks, source/current editable text and public bank IDs verified; 21/21 lesson outcome mappings with existing G11-CHVI-INTEGRATED preserved separately; no detected source-mathematics P0/P1 in checked scope. New candidate is *not* final CONTENT_READY because source-matched V2, ready/REGISTER, and unresolved source/assessment/runtime evidence are not attested for these SHA. Historical source receipts remain scoped to old snapshot; fresh original SGK/SBT page-image inspection not completed. Prepare targeted independent review of affected Delta-C if owner requires or self-verification insufficiency persists, using exactly five current THPT Permanent Sources v2.1 + SGK/SBT S1. No fabricated reviewer verdict; previous five v2.0 report remains historical. 
**Release compatibility note:** actual old integration script `scripts/test-thpt-g11-chvi-release-integration.cjs` blob `93f9f39ac082db0aae68d8fadc4c995f14b0df72` still asserts pre-Golden heading and exactly two D6 per lesson. This is a known pre-existing test-contract mismatch with the authorized new learner structure, not a new math defect or CI PASS. Do not change it in AUTHORING; RELEASE must reconcile against current Golden at its own QA gate. Browser/CI/exact HEAD render AP1–AP5/R1–R5/P1/P2 and any deploy remain out of scope.
**NEXT after verified Draft PR + single #987 checkpoint:** G11-B22, chapter VII, initial G0 only. No merge or deployment.
