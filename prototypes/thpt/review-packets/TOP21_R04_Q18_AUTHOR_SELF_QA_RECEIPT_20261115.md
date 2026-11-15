# CĐ21 R04 · Q18 AUTHOR SELF QA receipt (one standard, one locked source) · 15/11/2026

AUTHOR_SELF_QA_RECEIPT
PACKET_ID: TOP21-CONDITIONAL-BAYES-R04-20261115
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_KIND: AUTHOR_MATH_PED_SOURCE_SELF_QA_NOT_INDEPENDENT_NOTEBOOKLM
SOURCE_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R04_FULL_KHAM_PHA_TREE_CANONICAL_20261115.md
SOURCE_BLOB: 2fa6557286aba05dd0eea972d4c4ac68371842d7
AUTHOR_A1_A7_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R04_A1_A7_OUTCOME_MATH_PED_SELF_AUDIT_20261115.md
AUTHOR_A1_A7_BLOB: fbe87fdd5c860c770d1d2e40470ad8212ddd48db
P0: 0
P1: 0
P2: 0
MATH_SELF_QA_VERDICT: AUTHOR_QA_PASS
PED_SELF_QA_VERDICT: AUTHOR_QA_PASS
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
OFFICIAL_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

## S1_RECEIPT:

- Correct grade/scope: SGK **Toán 12 KNTT Tập Hai, Chương VI, Bài 18 Xác suất có điều kiện and Bài 19 Công thức xác suất toàn phần và công thức Bayes**. Original owner/book material had prior immutable scrutiny; main Git [`prototypes/thpt/release-queue/ready/G12-SGK-CHVI-B18-B19-END-R00.md`] blob `35980562f448094bab053fa22d6dc899968cff3e` records original print scope p64–80/PDF1 p66–82, SBT print p40–47 and independent historical Chapter VI core review. Source receipt `prototypes/thpt/review-packets/G12_CHVI_R00_INDEPENDENT_ACADEMIC_PED_SOURCE_RECEIPT_20261103.md` blob `c371e9f4873caa04c0c005b625316cf07ef5449a`.
- The author did **not** reopen or claim newly verified image-scanned primary SGK/SBT in this turn. The pre-existing original scope receipt is used to check lesson/outcome range, and every conditional/Bayes formula is independently reasoned. SGK controls mandatory knowledge, but deeper Topic explanations and problem contexts are original. Student-facing bibliographic footer is **one simple line** as the owner approved.
- The earlier R01/SGK independent PASS **does not transfer** to new R04 academic text. R04 uses the owner-effective v3.1.0 Q18 §X-E `AUTHOR_SELF_VERIFIED` mode, not a fabricated independent NotebookLM review.

## OUTCOME_AUDIT:

Eight `TOP21-O01–TOP21-O08` cover intuitive conditioning, proper conditional denominator, dependent-step multiplication, mathematical independence, total probability, reverse Bayes, tree reading, and base-rate fallacy. Each has one dedicated full Khám phá–formal statement–Ví dụ–Vận dụng, one dedicated Practice with worked answer and remediation, and three cross-outcome Written with rubrics. Full per-outcome CONCEPT, METHOD, DIFFICULTY, SOURCE_ROLE, problem family, exact canonical items and recovery map are in `prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R04_A1_A7_OUTCOME_MATH_PED_SELF_AUDIT_20261115.md` blob `fbe87fdd5c860c770d1d2e40470ad8212ddd48db`. No hidden cross-path prerequisite: the Topic reintroduces prerequisites in place.

## MATH_VERIFICATION:

- Actual final R04 source calculations were **independently recomputed as 45/45 correct** for 8 examples, eight public first tries, eight Practice, three Written, and both SVG figures, including probability denominators and branch sums. Examples: Bayes with prevalence 1% and 95% sensitivity/10% false positives gives (19/217); three-step no replacement red–yellow–red gives (4/21); a counter-intuitive independent coin condition gives (1/4=(1/2)(1/2)).
- Explicit domain/limit: (P(B)>0) for (P(A|B)), (P(A)>0) for conditional multiplication (P(A∩B)=P(A)P(B|A)); total probability uses disjoint exhaustive sources, each positive for conditional probabilities; Bayes denominator observation (P(L)>0); the base-rate positive-report formula now expressly gives (P(+)>0). Independence checked by (P(A∩B)=P(A)P(B)), including zero-probability edge statement; distinct from disjointness.
- SVG1 tree source blob `03b94e7d1c60c0d410dc8f48c10e71b7a1cf540a`, with four checked leaf probabilities and total 1, is shown **only with its already-solved worked example**, not before the same-number Vận dụng. SVG2 route tree blob `e6b10a7dc30e723360dc7e2cfd0228d3d48e023d` matches its solved R/S example and four leaves sum 1; subsequent Vận dụng uses different data.
- Eight separately authored **confidential** RD1 candidates were recomputed with ten direct rational/integer checks: 8/8 correct end results, distinct from public 19 stems, source ZIP SHA256 `c4242630d329f794e570cc406939fd85d5f65302b8b286ddcd2c74e8220a2e3b`. Private stems, keys and rubric must never be published to GitHub, JS or HTML.

## PED_VERIFICATION:

- **PED1:** Every one of eight Khám phá sections motivates why known information changes a probability and ends with a meaningful mathematical purpose, rather than a disconnected checklist.
- **PED2:** Prerequisites about finite sample spaces, event intersection, probability ratios and independent trials are explained inside the Topic, not delegated to the SGK path.
- **PED3:** Conceptual meaning precedes the formal mathematical box in all eight units; e.g. all possible ways of observing H before posterior Bayes calculation.
- **PED4:** Actual probability tree figures at units 5 and 7, meaningful accessible XML title/description, labels and neighboring “Hướng dẫn đọc hình” lead learners step by step through multiplying a path and adding disjoint leaves.
- **PED5:** All eight `Ví dụ` contain a complete independent `Đề bài` and `Lời giải`, correct assumptions and why the method fits; all eight Practice and three Written have multi-step reasoned solutions and intact four-point rubrics.
- **PED6:** Every unit has one `Vận dụng` to attempt before optionally expanding `Đối chiếu`. All 19 public answers remain opt-in collapsed; 19 formative-specific “Khi làm sai” instructions identify the misconception and return path. Public self-replay is not presented as official independent assessment.

## CANONICAL_Q15:

Exactly **19 unique public canonical IDs** with one single content owner in R04: 8 `TOPIC_FIRST_TRY` `TOP21-R01` original stems/answers, 8 `TOPIC_PRACTICE` and 3 `TOPIC_WRITTEN` `TOP21-R03` updated reasoning; no duplicate ID, text, answer or rubric. All 8 outcomes have 1 first try + 1 Practice, and 3 have additional Written. The eight public self-check placements are pointers to the **same eight canonical Practice IDs**, never clones or independent unseen questions.
The old G12 external `10/10` historic item ID custody from Draft #810 is **NOT USED**: no original external stem/key/rubric or placement is present in the R04 packet. Its historic reconciliation is not a blocker for this active 19-item source, but must be handled before any future optional reuse.

## ASSESSMENT_Q16:

- The eight independent private **candidate** questions have distinct contexts and numbers from R04 public practice, and question/key/rubric are separated inside a private downloadable ZIP in the conversation, not committed to GitHub. ZIP SHA256: `c4242630d329f794e570cc406939fd85d5f65302b8b286ddcd2c74e8220a2e3b`; count=8, outcome mapping 1:1.
- Public question solutions are enclosed in collapsed `<details>` and only revealed by voluntary click; all public Practice/rewritten Written answers are formative and `CLIENT_SELF_CHECK_NO_MASTERY`. No reuse of an exposed public question as official `TOPIC_READINESS`.
- Official private test runtime protection, unseen bank enrollment, hidden keys before Final Submit, scoring and Mastery are **RELEASE** gates, not claimed implemented here. No Firebase changes and no website authorization.

## DELTA_LEDGER:

- R01 original source `0258f29a1ece0fd9d0c1772781878ce827282c24` → R02: `DELTA_C_ACADEMIC_MATERIAL` (eight coherent exploration paragraphs, eight independent examples, new non-leaking tree).
- R02 → R03: `DELTA_C_ACADEMIC_MATERIAL` (eight multi-step Practice and three Written worked solutions, rubrics and original question content retained).
- R03 original blob `9615cabe7c3b81d8c81d970a9dbf77d11bc04a33` → R04 exact blob `2fa6557286aba05dd0eea972d4c4ac68371842d7`: `DELTA_C` for second tree and Bayes positive denominator explanation, `DELTA_B_METADATA_ONLY` for P/W content versions and author-only comments. All original 19 public stems, 19 optional-reveal answers and three rubric bodies are identical against R03; content changes self-QA checked on this exact R04 snapshot.
- P0: 0 / P1: 0 for student-facing source, exercise solutions and math conditions inspected; no unclosed substantive defect in declared AUTHORING scope.

## AUTHOR_SIGNOFF:

I, ChatGPT acting in the AUTHORING lane, sign **AUTHOR_SELF_VERIFIED / AUTHOR_QA_PASS** on the exact R04 SOURCE_BLOB after reading eight complete teaching units and the entire public Practice/Written section, independently recomputing 45 math relations, verifying two actual SVG source sets, checking one canonical stem/answer/rubric per ID and safeguarding the separately prepared eight private items. This author signoff is **not independent NotebookLM Academic/PED reviewer PASS**, nor a claim of an integrated protected self-check feature, production release, CI success, or Mastery activation.
