# TOP19 R03 · Q01–Q18 SOURCE-LOCKED PER-OUTCOME AUTHOR MATH & PED AUDIT · 14/11/2026

**AUTHORING ONLY.** This is substantive source-level mathematics and pedagogy QA against one effective `SLM-THPT-QUALITY-ONE v3.1.0`. Q18 AUTHOR_SELF_VERIFIED mode is owner-approved but it is **not** an independent NotebookLM/Gemini PASS and **not** a RELEASE UI/Final Submit PASS. Prior SGK NotebookLM reviews apply only to their original source hashes, not automatically to this Topic.

PACKET_ID: THPT-TOPIC19-COMBINATORICS-BINOMIAL-R03
SOURCE_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_TOPIC19_COMBINATORICS_BINOMIAL_R03_FULL_14_OUTCOMES_20261114.md
SOURCE_BLOB: a638a2f07abfa743135f46a0faeb7b7ddf65a00e
Q15_MATRIX_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_TOPIC19_R03_56_CANONICAL_OUTCOME_MATRIX_20261114.md
Q15_MATRIX_BLOB: 0815082de9e42ad34db5b9fdc10dea0187727ab4
ORIGINAL_S1_PDF_DIRECT_RECEIPT_BLOB: 850dd241e60de58ccf032e48e1e13530988436e3
G10_SGK_PDF_SHA256: ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6
G10_SBT_PDF_SHA256: 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7
INTERACTIVE_MODEL_BLOB: f4a078d0a7b4111f6cac483cca6cca65f05c111c
ORIGINAL_SGK_PUBLIC_CANONICAL_JS_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED_SOURCE_EVIDENCE
PUBLIC_CANONICAL_UNIQUE_COUNT: 56
PRIVATE_RD1_COUNT_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## Q01 S1 direct source versus prior conflicting page receipts

Reopened **both original Drive scanned PDF bytes** and verified SHA256 by independent local hashing, then **visually rendered original printed-page images**, not OCR. Actual SGK Toán10 KNTT Tập Hai printed B23 pp60–65, B24 pp66–71, B25 pp72–75, end ChVIII p76; SGK B24 **printed p70** has mandatory section “Sử dụng máy tính cầm tay” for `n!`, `nPr`, `nCr`; B25 **printed p72** explicitly limits Newton to `n=4` or `n=5`, and printed p74–75 includes “Vận dụng” and exercises 8.15/8.16 using first two terms to estimate `(1+r)^5`. Original SBT printed B23 51–53, B24 54–55, B25 56–57, chapter end 58–60; SBT p57 contains `(x+2/x)^4` reference exercise, marked **optional** in Topic. One-based PDF page is printed page +1, verified at chapter/lesson boundaries and original footers.

**Historical source conflict:** old `main` direct visual receipt `THPT_G10_CHVIII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md` records 59/65/72 and old end78–79; those labels conflict with exact original Drive PDF bytes. This R03 document records new authoritative exact-original-byte SHA/page evidence and preserves historical Git source unchanged, without rewriting older PASS/receipt or inventing book content.

**Q02 actual scope repairs before author signoff:** early R01 was missing original mandatory B25 five-year application; R02 added O13/T13/P13. Further full-page direct SGK B24 p70 showed missing calculator outcome; **R03 added O14/T14/P14**. Original B25-P07 existing polynomial constant item was wrongly mapped into optional reciprocal O11; R03 corrected its **Topic placement only** to O10 without changing original SGK stem/answer/key. All SGK Core skill families now covered as source-verified, not just guessed from an exercise count.

## D1–D6 / PED1–PED6 item and outcome audit

Actual source contains **14** full lesson modules (14 distinct `LESSON_ID`, 14 distinct `OUTCOME_ID`) with 14 meanings, WHY, prerequisite/condition, reasoned worked examples, canonical FirstTry and error-specific D6. Each has a distinct solved Practice and D6; 3 Written have **exact four analytic 1-point criteria** with question-specific routes:
W01 zero-first and odd-last digit; W02 choose group versus choose team with leader; W03 Newton negative coefficient versus P(1). Learner order **O01…O08→O14→O09→O10→O13→O11→O12** ensures mandatory SGK B24 calculator and B25 small-r application are taught before optional reference/transfer topics.

| outcome | actual S1 / optional scope | problem family | worked/T/P/W independent numeric evidence | rule/condition/limit | specific D6 recovery | QA |
|---|---|---|---|---|---|---|
| TOP19-O01 | SGK B23 p60–62 | SUM_DISJOINT | 7,7,10 | A∩B=∅ or subtract overlap | choose exactly one item | AUTHOR_SOURCE_QA_PASS |
| TOP19-O02 | SGK B23 p62–64 | MULTIPLY_TREE | 6,12,24 | A×B complete ordered stages; branching can depend | branch by required steps | AUTHOR_SOURCE_QA_PASS |
| TOP19-O03 | SGK B23 p63–65 | DIGIT_CODE_NUMBER | 18,16,48 and code160 | leading zero forbidden for number; repetition conditions | draw positional slots | AUTHOR_SOURCE_QA_PASS |
| TOP19-O04 | SGK B23 p64–65 | CASE_SPLIT_EVEN_ODD | 30,5,52, Written18 | even last-digit 0 separately | split disjoint tails before multiplication | AUTHOR_SOURCE_QA_PASS |
| TOP19-O05 | SGK B24 p66–67 | PERMUTATION | 24,120,720 | n distinct and all positions | arrangement not combination | AUTHOR_SOURCE_QA_PASS |
| TOP19-O06 | SGK B24 p67–69 | ORDERED_K_ROLES | 60,30,210 | 0≤k≤n integer roles distinct | A(n,k) rather than C(n,k) | AUTHOR_SOURCE_QA_PASS |
| TOP19-O07 | SGK B24 p68–69 | UNORDERED_K_GROUP | 10,20,35 | divide k! ordering duplicates | C(n,k) vs A(n,k) | AUTHOR_SOURCE_QA_PASS |
| TOP19-O08 | SGK B24 p69–71 | CONDITIONAL_GROUPS | 40,18,150, Written240 | exact composition; roles multiply after selecting group | groups60 vs teams240 | AUTHOR_SOURCE_QA_PASS |
| TOP19-O14 | SGK B24 p70 | CALCULATOR_NFACT_NPR_NCR | 6!=720,A(8,2)=56,C(8,2)=28,T336,P84/504 | n,k integer 0≤k≤n; check nPr=nCr×k!, keys vary by model | check order n then k and manual product | AUTHOR_SOURCE_QA_PASS |
| TOP19-O09 | SGK B25 p72–74 | PASCAL_POSITION_SELECTION | 6,4,24 | n=4 or 5 mandatory; choose k b positions | multiply constant b^k | AUTHOR_SOURCE_QA_PASS |
| TOP19-O10 | SGK B25 p74–75 | SIGNED_COEFF | 80,24,−810, Written−80 and −1 | exponent solved before coefficient; sign (−1)^k | negative power parity and P(1) | AUTHOR_SOURCE_QA_PASS |
| TOP19-O13 | SGK B25 p74–75 | TWO_TERM_GROWTH_APPROX | exact1104.08 vs approx1100,T5250,P2200 vs2208.16 | five years same r, |r| small, ≈not = | show omitted positive r² terms | AUTHOR_SOURCE_QA_PASS |
| TOP19-O11 | SBT B25 p57 | RECIPROCAL_CONSTANT_OPTIONAL | 24,6,24 | x≠0 and exponent 4−2k=0 integer k | optional, not mandatory SGK Core | AUTHOR_SOURCE_QA_PASS |
| TOP19-O12 | TOPIC_TRANSFER | POLYNOMIAL_SUM_OPTIONAL | 1,243,81 | P(x) polynomial and defined at x=1 | optional, not independent Core | AUTHOR_SOURCE_QA_PASS |

**Independent math execution:** 51/51 distinct numerical and brute-force enumeration tests passed (Python `itertools.permutations`, `math.factorial/perm/comb`, exact polynomial coefficient arithmetic and 5-year growth `r` evaluation). Includes **every 14T and 14P** key and all 3 Written, plus source worked/limits. Cited examples: enumerate digit tails actual 30/5/52 and W01 18, nCr(9,3)=84 versus nPr(9,3)=504 and nPr(8,3)=336, W02 240, W03 −80 and total coefficient −1, SGK B25 p75 estimate 1000(1+0.02)^5≈1104.08 vs 1100, T13 5250, P13 2200 vs exact 2208.16.

**Pedagogical continuity:** Uses a single 3-stage classroom fair story: “one option vs pair of steps” → number vs code / counting cases → “does order matter?” → compute n!,nPr,nCr with semantic check → `C(n,k)` becomes Pascal coefficient → applied growth estimation. O11 reciprocal and O12 total coefficient are explicitly optional after the SGK mandatory path, not prerequisites; a student entering Topic alone learns enough without leaving for another chapter.

**Meaning before formula / method limits:** additive disjointness; multiplicative complete stages; digits leading-zero/no repeat; 0≤k≤n integer for counting; signs from selected negative factor; polynomial domain; x≠0 only in optional reciprocal; 5-year constant annual growth and accuracy bounds for small r; calculator keys model-dependent, with manual fallback and nPr=nCr×k!. 4 actual white-background lesson SVGs (3 source-equivalent from approved G10 UX math, one newly drawn six-leaf counting tree with alt and independent math reading) and one white/offline 3-scene HTML counting/role/Pascal model: **11/11 direct DOM value/edge/reset checks PASS**. Physical iPad/Safari, production MathJax and visual UI AP1–AP5 remain RELEASE-owned, NOT claimed.

## Q15–Q18 assessment and code segregation

Exactly 56 unique **PUBLIC** canonical item IDs: 25 frozen original G10 SGK FORMATIVE references defined only in original JS blob `2ae62fada28913ec336b3507684408a1e05a3232`, plus **14 new Try, 14 new Practice, 3 new Written /4** defined once in R03 academic source `a638a2f07abfa743135f46a0faeb7b7ddf65a00e`. Original SGK 25 item bodies/answers/rubrics are not forked. Seven `TOPIC/TU_KIEM_TRA/REPLAY` placements reuse already exposed P items and are **`CLIENT_SELF_CHECK_NO_MASTERY`**, not held-out TOPIC_READINESS. No newly imported protected RD1 or Private Bank uploaded to GitHub. No new scores, no learner Firebase writes, no Mastery activation.

Three independent Topic learner pages exactly Kiến thức/Luyện tập/Tự kiểm tra; **no Topic Core**. Q16 actual protected Final Submit concealment, privately held-out assessment, Q15 runtime source item composition and AP/R/P on real website remain RELEASE gates. Do not infer deployment, integration, or independent NotebookLM PASS from source QA.
