# CĐ13 — AUTHOR_SELF_QA_RECEIPT · 13/11/2026

**AUTHOR_SELF_QA_RECEIPT:** source-locked mathematical, Q01–Q18 and pedagogical self-audit of new narrow Topic CĐ13, not independent NotebookLM Topic verdict or browser release clearance.

PACKET_ID: THPT-TOPIC13-PLANAR-SPATIAL-VECTORS-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_PLANAR_SPATIAL_VECTORS_FULL_R01_20261113.md
SOURCE_BLOB: d8a544101788e07fb33961fbe38f9c20827bcec4
ACADEMIC_SOURCE_BLOB: d8a544101788e07fb33961fbe38f9c20827bcec4
AUTHOR_METADATA_PATH: prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_R01_AUTHORING_ONLY_METADATA_20261113.md
AUTHOR_METADATA_BLOB: 0661419665ca0e0dc9339571d398088db6450c45
G10_ORIGINAL_R03_BLOB: 96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9
G12_ORIGINAL_R00_BLOB: 856a37bd16d2746ffc2e12906de18d1f4338a3b6
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
P2: 0
PRIVATE_RD1_COUNT: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO
AUTHOR_SIGNOFF: TOP13_R01_Q18_SOURCE_LOCK_16_OUTCOMES_52_CANONICAL_20261113

S1_RECEIPT: Original Toán 10 KNTT Tập1 ChIV B07–B11 SGK printed pp46–70, SBT pp45–65, end SGK 71–72, SBT66–71, independently source-scoped verified in G10 R01/R02 source receipts and frozen R03 composite Git `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9`. Original Toán 12 KNTT Tập1 ChII B06–B08 SGK printed45–72/PDF47–74, SBT printed38–54/PDF36–52 (end printed SGK73–74/PDF75–76; SBT55–58/PDF53–56), original R00 wrapper Git `856a37bd16d2746ffc2e12906de18d1f4338a3b6`. **No new scans or page-offset verification in this Topic turn**; preserve G10 historical page discrepancy as described in original packet rather than inventing reconciliation.
OUTCOME_AUDIT: 16/16 TOP13-O01..O16 have one connected concept→condition→worked example→First Try→opt-in comparison→targeted D6 within same learner topic; 3-page Topic path, zero extra Core, 52 unique PUBLIC canonical pointers.
MATH_VERIFICATION: 25 independent computational/structural assertions checked plus exact 20 new item answers/solutions and four Written rubric sums; tested Chasles, zero-vector convention, norm/dot Oxy–Oxyz, centroid, planar/spatial midpoint, direction and 3D drone work. No new unsolved author P0/P1 observed.
PED_VERIFICATION: Concept-first paragraphs answer why vector displacement requires direction, why Chasles works, when Pitago 3D is valid, why dot requires angle, how a projection differs from space angle, and why endpoint difference is coordinate vector. 16 First Try with optional reveal and local D6, 4 original reference SVGs with guided reading; technical ID labels hidden from student prose.
CANONICAL_Q15: 20 unchanged G10 SGK item IDs reuse source `96b5...`, 12 unchanged G12 SGK IDs reuse `856a...`, 16 new Topic Practice P01–P16 and four Written W01–W04 from one source `d8a544101788e07fb33961fbe38f9c20827bcec4`. 52 unique canonical IDs, one body/answer/rubric for each new ID. 16 public self-check placements reuse same IDs, no new hidden items; no duplicated QuestionBank.
ASSESSMENT_Q16: 0 private RD1 items in public source; optional public `CLIENT_SELF_CHECK_NO_MASTERY` is **not independent TOPIC_READINESS**. Actual runtime must hide key/hint/correctness/rubric/AI Tutor before Final Submit, never write Skill Mastery for Practice or self-compared free text; RELEASE must validate on browser.

## Q01–Q14 subject and pedagogical verification by outcome

| outcome | scope and precise condition / teaching point | author verdict |
|---|---|---|
| `TOP13-O01` | Độ dời khác quãng đường; vectơ-không dài 0, theo quy ước KNTT cùng phương/hướng mọi vectơ | AUTHOR_QA_PASS |
| `TOP13-O02` | Hai vectơ khác không bằng nhau cần đúng chiều và độ dài; hình bình hành AB=DC chứ không phải CD | AUTHOR_QA_PASS |
| `TOP13-O03` | Chasles AB+BC=AC; độ dài độ dời không bằng tổng quãng đường nói chung | AUTHOR_QA_PASS |
| `TOP13-O04` | Phép trừ AB−AC=CB; hình bình hành cho tổng khi hai vectơ cùng gốc | AUTHOR_QA_PASS |
| `TOP13-O05` | k âm đảo hướng; độ dài |ku|=|k||u|, không mang dấu âm | AUTHOR_QA_PASS |
| `TOP13-O06` | Trung điểm/vectơ vị trí và trọng tâm tam giác, hệ số AG=2/3 AM | AUTHOR_QA_PASS |
| `TOP13-O07` | Oxy cuối trừ đầu; tọa độ điểm khác tọa độ vectơ | AUTHOR_QA_PASS |
| `TOP13-O08` | Độ dài bằng Pitago, trung điểm/trọng tâm, collinear khác same direction | AUTHOR_QA_PASS |
| `TOP13-O09` | Tích vô hướng qua góc; không xác định góc nếu một vectơ-không; công có dấu | AUTHOR_QA_PASS |
| `TOP13-O10` | Tích vô hướng Oxy theo thành phần, kiểm vuông góc khi hai vectơ khác không | AUTHOR_QA_PASS |
| `TOP13-O11` | Vectơ hình hộp ba cạnh đến C', Pitago ba chiều khi ba cạnh đôi một vuông | AUTHOR_QA_PASS |
| `TOP13-O12` | Chasles và điểm cân bằng trong không gian giữ nguyên | AUTHOR_QA_PASS |
| `TOP13-O13` | Tích vô hướng Oxyz và góc 90°, không suy hai đường chéo nhau phải cắt | AUTHOR_QA_PASS |
| `TOP13-O14` | Oxyz điểm M=(2,1,3) và vectơ AB cuối trừ đầu, phối cảnh không giữ góc thật | AUTHOR_QA_PASS |
| `TOP13-O15` | Oxyz tính tổng/tích vô hướng/norm và trung điểm/trọng tâm từng tọa độ | AUTHOR_QA_PASS |
| `TOP13-O16` | Drone Q=P+u+v, độ dời √17 khác đường đi √14+√21, công F·(u+v)=11 J | AUTHOR_QA_PASS |

## Canonical public item key/rubric audit

- P01 hình bình hành DC=AB, CD=−AB
- P02 vectơ-không đúng quy ước S1 KNTT
- P03 đường đi7m/độ dời5m
- P04 AB−AC=(−2,5)=CB
- P05 −3(1,−2)=(−3,6), dài3√5
- P06 M(3,1.5), G(2,1)
- P07 AB=(5,4), dài√41
- P08 v=−u/2 cùng phương ngược hướng
- P09 tích vô hướng =9
- P10 tích =12−12=0
- P11 đường chéo không gian √29
- P12 AB(3,−2,3)+BC(1,3,2)=AC(4,1,5)
- P13 tích =2−2=0
- P14 AB(3,4,−4), dài√41
- P15 M(3,1,0), AB dài6
- P16 Q(3,4,6), độ dời√17, đường đi√14+√21
- W01 Chasles/BC midpoint/centroid AG=2/3 AM rubric2+2+2+1=7
- W02 AB·AC=4, cosA=1/√10, G(5/3,1), area6 rubric2+2+2+1=7
- W03 C'(2,3,4), diag√29, dot4, cos2/√29 rubric2+3+2=7
- W04 drone Q(3,4,6), disp√17/path√14+√21, work11J rubric2+3+2=7

- **Math numerical spot checks:** P04 CB=(−2,5); P06 G=(2,1); P07 |AB|=√41; P10 dot 0; P12 Chasles 3D; P13 dot 0; P14 |AB|=√41; P15 |AB|=6; P16 Q=(3,4,6), total drone length √14+√21>√17; W04 work 11 J.
- **Figure checks:** 4 *existing* source-lock SVG references (G10 B07 parallelogram blob `55ec9add04cb79da2cad7703b3897271e5b3436a`; G12 B06, B07, B08 original SVG blobs `26e388d873521aa5b0bae945343e69357490ec16`, `979ca912e99fdadfc4e91ae0edad5db34fc13928`, `13445da079245a556a08e7a57069d9987097a0be`). Original independent G12 reviewer saw derived PNG representations, not new browser SVG render; never claim browser QA from academic signoff.
- **Scope guard:** CĐ13 uses elementary vector coordinates (G10 B10, G12 B07/B08) only for vector arithmetic; no CĐ14 analytic Oxy line/circle/conic or CĐ18 Oxyz plane/line/sphere equations. Older broad Draft PR #793 has related vector content but neither its Academic/PED receipt nor any merged website state is inherited by the new CĐ13. Q15 cross-placement reuse by ID must be reconciled at RELEASE integration.
- **Risk prevention:** source/receipt/handoff/ready/REGISTER Git blob pointers must be re-read together; REGISTER cross-PR union must be preserved against current main before any future release integration. Academic/PED AUTHOR_SELF_VERIFIED is content handoff only, not a promise of UI, CI, merge, Firebase, or deploy.

## A1–A7/PED signoff

A1 frozen source+receipt; A2 S1 provenance from original source receipts (printed vs PDF where checked); A3 Q18 author mode exact snapshot; A4 16 outcomes/52 canonical matrix; A5 concept-first D1–D6 and PED1–PED6 per outcome; A6 new Topic Delta C self-reviewed and old SGK sources untouched; A7 no RD1 leakage. Q18 v3.1.0 author-self mode P0/P1=0. AUTHORING ceases at one V2 handoff with source lock; RELEASE AP1–AP5, R1–R5, P1/P2 and owner release authorization are not claimed.