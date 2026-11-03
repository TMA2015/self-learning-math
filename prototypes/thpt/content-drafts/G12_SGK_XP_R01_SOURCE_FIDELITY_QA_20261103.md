# G12 SGK XP R01 — SOURCE-FIDELITY & AUTHORING QA (03/11/2026)

PACKET_ID: G12-SGK-EXP01-EXP02-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/G12_SGK_XP_TWO_EXPERIENCES_R01_CANONICAL_20261103.md
ACADEMIC_SOURCE_BLOB: 8a34d1cf4009b9b6511a34c08c5d8e31525a6a46
ACADEMIC_SOURCE_SHA256: f71ad85676357005318b07068102415cb663549cdea87c677ed74382fea7d4de
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/G12_XP_R01_Q18_OWNER_PASTED_REVIEW_RECEIPT_20261103.md
REVIEW_RECEIPT_BLOB: b765e732fa8049482936dbededfafd7b9eb99341
REVIEW_RECEIPT_SHA256: 87ffe21892d28f9a9b4fa70e287ff6e47eda794a6f81d46435bc480dc58d933a
STATUS: AUTHORING_SOURCE_LOCKED_V2_SUPPLEMENT_OWNER_APPROVED
CONTENT_READY: YES
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## Provenance and reconciliation

- Immutable original R00 9-file zip SHA256: `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f`, Git originals at `prototypes/thpt/content-drafts/G12_SGK_XP_R00_ORIGINAL_SOURCE/`.
- R01 reviewed Temp packet SHA256 (verified local bytes): `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67`, Git blob `4eb118bad3e773fcac2e1ef39d71ba2243a75b6a`.
- Independent R01 reviewer report is archived exactly byte-for-byte at Git blob `01be2eaec00f82c9257dfd03b5cccf3e617c704c`; reported Academic PASS + PED PASS, 10/10 W item PASS, P0/P1/P2=0 and delta C approved.
- **Source receipt transcription error:** reviewer wrote `R01_TARGETED_FILE_SHA256|1b60e1f3430a03e0d148cd08003eaa61574babf5a3a687a0465539224a05d271`; that SHA256 actually identifies `Temp_G12_SGK_XP_OUTCOME_ITEM_MATRIX_R00_20261103.md` (historical R00 matrix), **not** the R01 targeted review file; actual R01 packet SHA256 `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67`. No editing of independent reviewer report.
- New canonical R01 source text is derived from the unchanged EXP01/EXP02 R00 sources, changing exactly 10 Written solution passages plus the EXP01-W01 question and /5 rubric and introducing authorship version metadata. Other text stays unchanged, 5 PNGs unchanged, canonical item IDs stable.
- **Historical Q18 reviewer receipt limitation — CLOSED by owner-pasted 03/11 correction:** independent R01 reviewer did not identify the resulting combined canonical Git blob `8a34d1cf4009b9b6511a34c08c5d8e31525a6a46` (created only after review). The required independent source-fidelity-only correction has now been received, with exact canonical blob and verified SHA256, and archived as a transcribed owner-pasted report.

## Structural and math spot-QA results

- Two distinct LESSON_IDs: `G12-SGK-EXP01, G12-SGK-EXP02`; 10 distinct OUTCOME_IDs; 40 unique exact PUBLIC_ITEM_IDs (C10/P10/A10/W10), no duplicates. One item belongs to one primary outcome and only the 10 original A item IDs have secondary END placements.
- 10 Worked EX and 10 individual HELP D6, 10 Written model solutions, 10 rubrics totalling 5 points each, 5 original PNG referenced, four Tự thử total, no private RD1.
- EXP01-O05 source uses t=[0,2,4,6] seconds, v=[2,3,5,4] m/s, `T_3=2[(2+4)/2+3+5]=22 m`; interval check 5+8+9=22 m. Wrong 21 m in original reviewer recap came from v=[2,5,4,1]. **Source remains 22 m**.
- EXP01-W01 new prompt requires two independent checks and new rubric 1+1+1+1+1=5; rest rubrics unchanged. All 10 candidate D4 solutions transferred verbatim from targeted reviewed R01 text, not re-authored.
- EXP01 bound test: f''=2, M=2, `1/(6n²)<0.001` leads n>=13; n=12 upper bound 1/864 is not sufficient; note upper bound vs true error.
- EXP02 Möbius `M(0,v)=M(2π,-v)`, Penrose projection is not 3D intersection proof; printed pp85–89 experiential not new compulsory theory core.
- No runtime UI, Final Submit grading, Mastery changes or deploy in AUTHORING.

## A1–A7 (scoped AUTHORING; not publication QA)

| Gate | Finding | Status |
| --- | --- | --- |
| A1 | Exact 9 R00 original blobs preserved; 1 new canonical R01 source blob hash verified | PASS_SOURCE_LOCK |
| A2 | Original S1 direct printed pp81–89 / PDF1 pp83–91 receipt retained | PASS_SCOPE |
| A3 | R00 full reviewer PASS, R01 targeted 10/10 Written PASS, Q18 independent corrected receipt PASS with exact canonical SHA | PASS_LOCKED_SNAPSHOT |
| A4 | 2 lessons/10 outcomes/40 unique public items and role/outcome register | PASS_STRUCTURAL |
| A5 | D1–D6 / PED evidence, revised 10 Written worked solutions and /5 rubrics | PASS_SCOPED_AUTHORING_QA |
| A6 | DELTA_C Written R00→R01 independently PASS; DELTA_B Q18 receipt-only independently SOURCE_PARITY PASS | PASS_DELTA_CLOSED |
| A7 | No private RD1 and no autonomous Mastery or false assessment | PASS_AUTHORING_BOUNDARY |

## Owner-approved V2 SGK experiential supplement route — 03/11/2026

- Owner explicitly approved `SGK_EXPERIENCE_SUPPLEMENT` as both `LEARNING_PATH` and `RELEASE_SCOPE` for the SGK experiential content packet, without falsely classifying it as `SGK_CHAPTER` or a TOPIC; no change to Q01–Q18.
- `scripts/test-thpt-handoff-gate-v2.cjs` and `scripts/test-thpt-release-queue.cjs` have scoped owner-approved modifications to retain existing chapter checks and verify no held-out RD1 (`PRIVATE_RD1_COUNT=0`), no independent chapter Readiness (`OFFICIAL_READINESS=NOT_CLAIMED`) and no Mastery or authoring release authority.
- One source-locked handoff `prototypes/thpt/release-handoffs/G12-SGK-EXP01-EXP02-R01_HANDOFF_V2_20261103.md` and one manifest `prototypes/thpt/release-queue/ready/G12-SGK-EXP01-EXP02-R01.md` are ready for exact-head CI. `CONTENT_READY` is academic AUTHORING only; AP/R/P and website access are not authorized by this change.

## Final reviewer correction (owner-pasted 03/11/2026) — Q18 closed

- The owner pasted an **independent NotebookLM Q18 correction report**, declaring `Q18=PASS`, `SOURCE_PARITY=PASS`, Academic/PED PASS, `P0=P1=P2=0`, `MINIMAL_DELTA=0`, unchanged 10 outcome/40 canonical IDs, and correct 22 m solution.
- Correct R01 targeted SHA256: `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67` (Git blob `4eb118bad3e773fcac2e1ef39d71ba2243a75b6a`). Correct canonical final Git blob `8a34d1cf4009b9b6511a34c08c5d8e31525a6a46` (SHA256 `f71ad85676357005318b07068102415cb663549cdea87c677ed74382fea7d4de`). Both verified directly from unchanged byte files on 03/11, and canonical source confirmed on GitHub.
- Reviewer-pasted correction was transcribed transparently rather than impersonating a downloaded Studio original: `prototypes/thpt/review-packets/G12_XP_R01_Q18_OWNER_PASTED_REVIEW_RECEIPT_20261103.md`, Git blob `b765e732fa8049482936dbededfafd7b9eb99341`. Original R00/R01 full reports remain unmodified on GitHub.
- **A1–A7 academic/PED/source gates = PASS**, supported by the three-stage independent review chain. Owner approved the V2 supplement extension on 03/11 and the gate now permits **only** truthful scoped supplemental packets with source/receipt SHA checks. A canonical `ready/` manifest and matching REGISTER row are staged for exact HEAD QA. `CONTENT_READY=YES` in AUTHORING scope **conditional on green CI**; no release authorization, independent Readiness or Mastery.
