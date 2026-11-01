# Toán 11 Chương V B15–B17 R02 — NotebookLM owner verdict receipt & source fidelity

**Received:** 2026-11-01, pasted owner-supplied NotebookLM EXECUTIVE SUMMARY (10 kB text), not the inaccessible full Studio report `Bao_Cao_Kiem_Toan_Toan_11_Chuong_V_Batch_R02.md`.  
**PACKET_ID:** `THPT-G11-CHV-B15-B17-WHOLE-CHAPTER-AUTHORING-R01-20261101` (**PUBLIC/PRIVATE SNAPSHOT REV R02**). **LEARNING_PATH:** `SGK_CHAPTER` / protected `SGK_CHAPTER_READINESS`. This is NOT Topic Readiness.

## 1. Verbatim owner-reported verdict fields

```text
ACADEMIC_CHAPTER_V|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
OUTCOME_MATRIX_17|ALL_FULL_COVERAGE
WORKED_EXAMPLES_D2_13|ALL_PASS
PUBLIC_ITEMS_VERDICT_36|ALL_PASS
PRIVATE_RD1_ITEMS_VERDICT_17|ALL_PASS
SVG_GRAPH_VERDICT_3|ALL_PASS
REMEDIATION_HELP_VERDICT_6|ALL_PASS
EXPOSURE_STRUCTURAL_VERDICT|INDEPENDENT_STRUCTURES_APPROVED
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

**Owner-reported ID reconciliation:** expected/reviewed RD0 17/17; worked examples 13/13; 36/36 public candidates (30 Core/Practice + 6 Written/Anchor); 17/17 private RD1; 3/3 SVG; 6/6 D6 HELP; MISSING/UNEXPECTED/DUP=0.

**Reviewer-reported original S1 source pages:** SGK KNTT Toán 11 Tập 1 B15 p104–110, B16 p111–118, B17 p119–122, chapter exercises p123 (p124 distinct experiential section). SBT KNTT Toán 11 Tập 1 B15 p96–101 (solution p157–160); B16 p102–108 (solution p161–165); B17 p109–112 (solution p166–168); final ChV exercises p113–116 (solution p169–172). These SBT ranges **follow reported ChIV end p95**, resolving the earlier pagination inconsistency **at reviewer receipt level**. This receipt is not a claim that the author accessed the original S1 PDF pages.

## 2. Independently inspectable frozen material

- GitHub Draft PR #690: consolidated public R02 source `prototypes/thpt/review-packets/Temp_THPT_G11_CHV_B15_B17_PUBLIC_D1_D6_AUTHOR_CANDIDATE_R02_20261101.md`, Git blob `77be75de3fd01c7aa9dcc0f1a14e5e2ca68ab7fa`. Existing downloaded NotebookLM PUBLIC file `Temp_THPT_G11_CHV_B15_B17_PUBLIC_D1_D6_REVIEW_R02_20261101.md` was exported through Google Docs and is not byte-identical to the Git blob; no material-change claim without complete normalized comparison. The report names this PUBLIC export exactly.
- Private R02 local/library original `Temp_THPT_G11_CHV_B15_B17_PRIVATE_RD0_RD1_17_AUTHOR_CANDIDATE_R02_20261101.md`, 16,302 bytes, SHA-256 `e9985e56cc17decd688a5fd3b068a8c75c5a709025a87afea68491ced18d2f98`, exactly 17 RD1 candidates. Kept **outside public GitHub**.
- Report abbreviates/changes private source name to `Temp_THPT_G11_CHV_B15_B17_PRIVATE_RD0_RD1_17_AUTHOR_CANDIDAT.md`. The exact selected NotebookLM source title and snapshot/hash were **not** shown in the pasted summary. Do not quietly assert byte-exact provenance.

## 3. Review-text-to-source discrepancies (A3 HOLD — evidence, not math P1)

The executive summary states `PEDAGOGICAL_SELF_LEARNING_READY=PASS` but describes at least these examples differently from its supposed PUBLIC R02 source:

1. **B15 FIG-G11-B15-01:** summary describes sequence `u_n=(3n+1)/(n+4)` and SVG horizontal asymptote `y=3`. **Actual R02 SVG** explicitly titled `Dãy u_n=1/n tiến gần 0`, with green reference line `u_n=0`; the (3n+1)/(n+4) expression occurs in a separate worked example, not in that SVG. This is verifiable from the exact Git public source and the actual student-review PUBLIC file.
2. **B15 narrative:** report refers to `chuỗi hình vuông thu nhỏ`; this activity/diagram is not present in the frozen public R02 candidate.
3. **B16 PED6:** report attributes a student microcheck involving bounded `x^2 h(x)` and an application `r(t)=R t/(t+1)`; the PUBLIC R02 has a different self-check (factorization at x=3) and a saturation example `H(t)=100t/(t+5)`. The reported model/activity does not match these actual contents.
4. **B17 PED5:** report mentions a fifth-degree equation, while its PUBLIC candidate's existence arguments involve polynomial cubics and a quadratic; no fifth-degree equation appears in the frozen R02 candidate.

The review may have combined another source, invented illustrative material or paraphrased inaccurately; **we do not know which**. Do not attribute a hidden mathematical error to any item merely because the review narrative mismatches. Conversely, **do not independently certify PED1–PED6 on the exact frozen public source solely from this unverified narrative**. These are `REVIEW_SOURCE_FIDELITY_HOLD`, not a replacement for the owner-provided PASS.

## 4. Narrow reconciliation required to clear A3

Obtain the full Studio `Bao_Cao_Kiem_Toan_Toan_11_Chuong_V_Batch_R02.md` or NotebookLM source list/snapshot confirmation showing the actual exact PUBLIC R02 + PRIVATE RD1 R02 selected, and reviewer clarification of the four cited pedagogy examples **against the supplied SVG, example and item IDs**. This is an evidence reconciliation, not automatic full-chapter re-review or source editing. If all correct to R02 and the evidence mismatch is only an explanatory summary error, mark A3 PASS with a written clarification/receipt; no changes to 53 canonical items, answers, rubrics or 17 outcomes. If any content needed for pedagogy is missing or material, classify the affected change under project delta policy and request focused re-review of that area.

**Academic verdict as received:** `PASS_REPORTED_BY_OWNER`. **Pedagogical verdict as received:** `PASS_REPORTED_BY_OWNER`. **Exact reviewer-source fidelity:** `HOLD` pending the narrow mismatch audit. **No implied publisher right.**

`RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`; `SYSTEM_HOLD=YES`. Do not merge/deploy, alter THCS, change browser progress, or publish protected RD1 stems/keys.
