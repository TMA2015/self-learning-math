# G11 SGK Chương VI B18–B21 — NotebookLM R01 academic/PED verdict receipt and source-fidelity triage

**Received 2026-11-01** from owner: full Studio report `Bao_Cao_Kiem_Toan_Toan_11_Chuong_VI_Batch_R01.md` (11,878 UTF-8 bytes, SHA256 `bb34c5a82f642e8977ab59edfa6744472df33eaa9708582ca5965084c87c388b`) plus pasted executive summary (12,777 UTF-8 bytes, SHA256 `d14cda30098d506d7391bdbfb4b2942737f00e5a1048a859a6ce4c52caf3a419`). **The full Studio text itself is not committed to public GitHub**, because its illustrative citations include protected RD1 context. Report is saved as owner-supplied conversation attachment.

## Frozen independently reviewed candidate

- `PACKET_ID=THPT-G11-CHVI-B18-B21-WHOLE-CHAPTER-AUTHORING-R00-20261101`; `PUBLIC_REV=R01`, `PRIVATE_RD1_REV=R00`, `LEARNING_PATH=SGK_CHAPTER` / `SGK_CHAPTER_READINESS` (not Topic).
- Public canonical GitHub Markdown `prototypes/thpt/review-packets/Temp_THPT_G11_CHVI_B18_B21_PUBLIC_D1_D6_REVIEW_CANDIDATE_R01_20261101.md`, immutable Git blob `f37113dc2a3a002511bc6b53ec53e049537f1947`; exact delivered public file `Temp_THPT_G11_CHVI_B18_B21_PUBLIC_D1_D6_REVIEW_CANDIDATE_R01_20261101.md`, 87,341 UTF-8 bytes, SHA256 `cfb0068bde422077554f1d7f2a3b27665ea0be8a6d647e4c381787dfc0f305cc`. Original Git vs delivered text content equivalent after whitespace normalization; **not byte-identical**.
- Private original `Temp_THPT_G11_CHVI_B18_B21_PRIVATE_RD0_RD1_AUTHOR_CANDIDATE_R00_20261101.md`, 18,369 UTF-8 bytes, SHA256 `5d33a8a0f55786e858d88c5a5536a9a8df1113bbb225407594c67d07c3ad8304`; 22 held-out IDs, solutions and rubrics held **outside public GitHub**.
- Studio report shortened/abbreviated actual selected source filenames: `Temp_THPT_G11_CHVI_B18_B21_PUBLIC_D1_D6_REVIEW_CANDIDATE_R01.md` and `Temp_THPT_G11_CHVI_B18_B21_PRIVATE_RD0_RD1_AUTHOR_CANDIDATE_.md`. Exact NotebookLM selected titles or cryptographic hashes are **not explicitly confirmed** in full report. No byte-exact NotebookLM source receipt may be inferred from the reported matching ID counts.

## Received reviewer verdicts (report, not author's independent re-grading)

```text
ACADEMIC_CHAPTER_VI|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
SOURCE_RECEIPT|SGK_TOAN_11_TAP_2_KNTT_P4-26;SBT_TOAN_11_TAP_2_KNTT_P4-23
OUTCOME_MATRIX_22|ALL_FULL_COVERAGE
WORKED_EXAMPLES_D2_19|ALL_PASS
PUBLIC_ITEMS_VERDICT_49|ALL_PASS
PRIVATE_RD1_ITEMS_VERDICT_22|ALL_PASS
SVG_GRAPH_VERDICT_4|ALL_PASS
REMEDIATION_HELP_VERDICT_8|ALL_PASS
EXPOSURE_STRUCTURAL_VERDICT|INDEPENDENT_STRUCTURES_APPROVED
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

Reviewer confirmed SGK KNTT 11 T2 B18 printed p4–9, B19 p10–15, B20 p16–19, B21 p20–24, chapter final p25–26; SBT KNTT 11 T2 B18 p4–7, B19 p8–10, B20 p11–15, B21 p16–19, final p20–23, answer section p117–134.

## Source fidelity risks — documentary only, not an automatic math P1

Report's PED overview attributes or implies these examples are **publicly taught**, but they are **not located in the reviewed PUBLIC R01**:

1. **B18 PED6:** device-depreciation worked model appears in **private `THPT-G11-CHVI-RD1-05`**, rather than student-facing D1/D2/D3/D4; actual public self-check involves integer/rational exponents and growth/compound-interest concepts.
2. **B19 PED6:** concentration-decay threshold example appears in **private `THPT-G11-CHVI-RD1-10`**, not public lesson's self-try; actual public self-try discusses log definition, log of 0, and invalid log-sum rule.
3. **B20 PED1:** reference to pH, Richter and logarithmic scales is **not present** as a taught example in PUBLIC R01 nor in the 22 held-out private candidate prompts. Public D1 motivates changing-time growth and inverse questions; do not claim teaching material that is absent.
4. **B21 PED5:** full report says student is taught the method of substitution; PUBLIC R01 explicitly **excludes advanced substitutions from Core unless S1 requires**, and teaches same-base equivalence, domain and monotonicity. Do not infer a missing math outcome if S1 has only basic forms, but do not credit a method as actually taught.
5. **B21 PED6:** the model cited as student self-try is **private `THPT-G11-CHVI-RD1-22`**, rather than the public microcheck. Public self-try covers decreasing-base inequality and domain condition.
6. **B21 'half-life' narrative:** no worked half-life student example in PUBLIC R01; reviewer must distinguish general domain examples from actual learning content.

**Provisional diagnosis:** cross-citation between reviewer PED narrative and protected private assessment plus unsupported illustrations, not proven that questions/graphs/rubrics are mathematically wrong. Because the same issue happened in ChV and required targeted source-fidelity clarification, **A3=HOLD** pending reviewer confirmation of **exact two selected filenames** and correction of evidence locations. Do not overwrite the original report or claim `SOURCE_FIDELITY_R01=PASS` before confirmation.

## Author-identified formatting defect not noted by NotebookLM

- `EX-G11-B18-06` in public D1 uses malformed decimal grouping `0,000,0042` while its solution explicitly equals `4,2×10^{-6}`. Vietnamese decimal numeral should be `0,0000042` to represent that value.
- `THPT-G11-CHVI-B18-P07` public D3 uses malformed decimal grouping `0,000,0075` while its answer explicitly equals `7,5×10^{-6}`. Correct spelling `0,0000075`.
- Both corrections have a **unique mathematically intended value from existing answers**, do NOT change canonical item IDs, skills, solutions, conditions, rubric or level. Classify as `DELTA_B_SOURCE_EQUIVALENT` (numeral punctuation only, original value unambiguously fixed by the already-reviewed key), with explicit 10^-6 numerical and surrounding-domain verification, source-frozen before/after diff. *Do not* casually generalize this to meaningful number changes. Keep the reviewed PUBLIC R01 immutable; author-updated D1/D3 and postpass consolidated source have a different Git blob/revision to track this documented delta.

## Release gating

**Academic/PED PASS as reported:** YES, **only for exact R01 public + R00 private reviewer snapshot**. **Reviewer source/citation fidelity gate:** HOLD for targeted independent evidence correction. **Current official CONTENT_READY:** NO until A3 clarification; do not create ready manifest or transfer to publisher as if entirely cleared.

`RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`; `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`. Keep protected RD1 outside GitHub, no merge/deploy or scoring/browser/Firebase/THCS changes. 
