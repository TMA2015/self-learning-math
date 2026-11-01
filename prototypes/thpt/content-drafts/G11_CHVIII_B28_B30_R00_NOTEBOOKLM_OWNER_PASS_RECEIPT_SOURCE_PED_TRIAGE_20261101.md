# Toán 11 KNTT Chương VIII — NotebookLM dual PASS receipt / exact-source & PED evidence triage

**Date:** 2026-11-01. **PACKET_ID:** `THPT-G11-CHVIII-B28-B30-WHOLE-CHAPTER-AUTHORING-R00-20261101`. **Learning path:** SGK_CHAPTER; Chapter Readiness independent, not Topic Readiness. **Reviewer material:** owner-uploaded real Studio Markdown `Bao_Cao_Kiem_Toan_Toan_11_Chuong_VIII_Batch_R01.md` (10,563 bytes, SHA256 `539edc952ac827d77e6721ddd81d862cf80cc290006d16132a5cfaec4d67d94a`), archived in private ChatGPT Library. Do **not** publish raw review or confidential held-out source on GitHub.

## 1. Preserve reviewer conclusions **as reported**

```text
ACADEMIC_CHAPTER_VIII|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
SOURCE_RECEIPT|SGK_TOAN_11_TAP_2_KNTT_P66-80;SBT_TOAN_11_TAP_2_KNTT_P44-53
OUTCOME_MATRIX_20|ALL_FULL_COVERAGE
WORKED_EXAMPLES_D2_16|ALL_PASS
PUBLIC_ITEMS_VERDICT_47|ALL_PASS
PRIVATE_RD1_ITEMS_VERDICT_20|ALL_PASS
SVG_GRAPH_VERDICT_3|ALL_PASS
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

**S1 receipt per independent reviewer:** SGK KNTT Toán 11 Tập 2 B28 p66–71, B29 p72–75, B30 p76–78, final ChVIII p79–80; ChIX starts p81. SBT Tập 2 B28 p44–46, B29 p47–49, B30 p50–51, end p51–53; answer pages as reviewer report p135–146. Nothing in local original-scanned PDF was modified or claimed byte-verified by author. Scope **A2 candidate PASS on independent reviewer receipt**, subject to no new contradictory S1 evidence.

## 2. Exact author's source identity and reviewer metadata discrepancy

- **PUBLIC R00:** `Temp_THPT_G11_CHVIII_B28_B30_PUBLIC_D1_D6_AUTHOR_REVIEW_R00_20261101.md` actually **52,951 UTF-8 bytes**, SHA256 `e65564a17f1627c318bf13de9ba672aabeaf52ad9b5eff076d5ff6f2ed75e2d7`, 44,045 Unicode codepoints and 7,345 whitespace-delimited tokens. Immutable reviewed candidate GitHub path `prototypes/thpt/review-packets/Temp_THPT_G11_CHVIII_B28_B30_PUBLIC_D1_D6_AUTHOR_REVIEW_R00_20261101.md`, Git blob `fde4f8be91b5884b4559fef59fde46cf826c2bc9`; exact text except trailing newline. Original Public source contains all 20 RD0 /16 D2 /47 public D3+D4 /3 SVG XML /8 HELP, and remains unchanged.
- **PRIVATE R00:** `Temp_THPT_G11_CHVIII_B28_B30_PRIVATE_RD0_RD1_AUTHOR_REVIEW_R00_20261101.md` actually **15,539 UTF-8 bytes**, SHA256 `792f3f07e80a47256a0c53ce2d17a1252b0d4af5371c4196bbf8404a43068882`, 12,999 Unicode codepoints, 20 held-out item IDs with solutions/rubrics. Retained **outside GitHub** in owner's ChatGPT Library only.
- **NotebookLM Studio report** uses the **correct full file titles** but calls PUBLIC **44,518 bytes** and PRIVATE **13,042 bytes**. Neither matches actual original UTF-8 bytes. Reported sizes are near source Unicode codepoint counts, suggesting possible mislabeling or source transformation; this is **a hypothesis**, not an established fact and not evidence of a math error. **No NotebookLM-side SHA256 is provided**, so exact reviewed bytes cannot independently be attested from the report. Prior author's R00 QA note contains an earlier stale PUBLIC 52,819-byte pre-lock count; the later locked source and actual file are 52,951 bytes. This historical QA count is superseded for exact-source custody.

## 3. Reviewer PED narration uses examples that are not taught in PUBLIC

- **B28 PED6:** report describes self-try 'two independent coins versus one card with two attributes', but actual PUBLIC **D1 B28 §6** asks for union, intersection, complement and disjointness in Ω={1,2,3,4,5,6}; public `EX-G11-CHVIII-B28-04` separately teaches two independent coins, `EX-G11-CHVIII-B28-05` separately compares two event properties of one number picked from 1–4. Attribution should be `REPORT_NARRATIVE_CORRECTION`, not an invented first-attempt question.
- **B29 PED6:** reviewer cites '15% of customers selecting both A/B' as if present; actual PUBLIC B29 D1 self-try is a 30-person club with counts 14/12/5, and `EX-G11-CHVIII-B29-01` uses 50 equal-likelihood ballots with counts 23/19/8; `THPT-G11-CHVIII-B29-P06` uses 48-person groups 21/18/8. No '15%' example in PUBLIC R00.
- **B30 PED1/PED6:** report cites a three-channel alarm system/two shooters and a self-try of **three independent sensors**, while actual PUBLIC **D1 B30 §1** uses two independent production stages (3/4 and 2/3); **D1 B30 §6** uses **two** independent sensors (4/5 and 3/4). Public `EX-G11-CHVIII-B30-05` contains three independent **processes**, while `THPT-G11-CHVIII-B30-P07` contains three independent error trials. The three-sensor situation belongs to a *protected RD1 candidate*, not public teaching; never quote protected stem/values/key in the review/citation file or publish it.

**Risk classification:** report-only unsupported/mislocated PED references; **not proven mathematical error**. Numerical and ID inventory matches exact source, and original independent Academic/PED PASS is **not rescinded**. However a reviewer-level source and public-evidence clarification is needed before the author's exact-snapshot A3 gate can be certified. **NO academic text/answer/rubric changes** made; MINIMAL_DELTA remains 0.

## 4. Targeted correction request — one Temp file and short prompt, not whole-chapter re-review

Actual one-file review input `Temp_G11_CHVIII_R00_NOTEBOOKLM_SOURCE_PED_RECONCILIATION_20261101.md`, UTF-8 7,441 bytes SHA256 `a8286e52342ba6cf51f823ce4d87733c513a04e71494ab64ecf2c370da3681d7`, is available in the owner's local conversation and private Library. It cites original PUBLIC sections, IDs and exact source file metadata **without any protected RD1 stems or keys**. NotebookLM should keep same selected original PUBLIC/PRIVATE R00 files and five Permanent THPT v2.0 sources; add the reconciliation file. It should clarify if it can actually determine byte hashes; never ask it to invent one.

**Gate snapshot:** A1 source custody, A2 S1 receipt, A4 canonical IDs, A5 coverage, A6 zero content delta, A7 boundary: checked for this frozen authoring packet; **A3_NOTEBOOKLM_VERDICT=HOLD only on document/source fidelity** pending targeted correction to PED citations and selected-source size metadata. This does not negate the **owner-reported dual PASS**; no `CONTENT_READY`/A6 transfer to publisher until documented resolution.

**Release boundaries:** Draft academic PR #694, not merged or deployed; R1–R5/AP1–AP5/P1–P2 unchecked, `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. No public RD1 content, formal scoring or browser/Firebase/Gemini/THCS changes.
