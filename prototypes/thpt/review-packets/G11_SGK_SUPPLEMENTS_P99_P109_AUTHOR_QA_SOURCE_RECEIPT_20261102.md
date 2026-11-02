# G11 SGK KNTT Tập Hai p99–109 — AUTHORING canonical-source QA and NotebookLM review HOLD

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
ROLE: AUTHORING_ONLY
DATE: 2026-11-02
PACKET_ID: G11-SGK-SUPPLEMENT-P99-P109-INDEPENDENT-REVIEW-R00-20261102
ACADEMIC_VERDICT: NOTEBOOKLM_INDEPENDENT_PENDING
PEDAGOGICAL_VERDICT: NOTEBOOKLM_INDEPENDENT_PENDING
P0_P1_P2: NOT_YET_ASSESSED_BY_INDEPENDENT_REVIEWER
CONTENT_READY: NO
STATUS: BLOCKED_BY_AUTHORING
BLOCKER_ID: G11-SGK-P99-P109-Q18-INDEPENDENT_ACADEMIC_PED_REVIEW_MISSING
RELEASE_AUTHORIZATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## 1. Immutable candidate source hashes actually fetched on current PR #709 branch

| Original review/source file | Git blob SHA | Scope |
|---|---|---|
| `Temp_G11_SGK_EXPERIENCE_P99_P104_PUBLIC_D1_D6_AUTHOR_R00_20261102.md` | `7d369b8e6c3aa25fcfcbe5e10418d87f59d4b8e5` | E01 + E02 SGK printed p99–104 |
| `Temp_G11_SGK_YEAR_END_P105_P109_PUBLIC_D1_D6_AUTHOR_R00_20261102.md` | `f78e1f4bcb477c995ffdb1281d366bf3b0e88a59` | SGK all-year review p105–109 |
| `Temp_G11_SGK_SUPPLEMENTS_P99_P109_FULL_NOTEBOOKLM_REVIEW_R00_20261102.md` | `b848436621c17c89919e3d3f93519d12612fe039` | Exact source1/source2 + all 8 SVG inline, effective review candidate |
| `Temp_G11_SGK_SUPPLEMENTS_P99_P109_NOTEBOOKLM_REVIEW_PROMPT_20261102.txt` | see GitHub branch source | 5-sentence independent reviewer prompt |

The two academic source files are included in the full-review candidate **exactly** (substring and original Git SHA cross-checked); each original SVG XML source is likewise included exactly and its SHA listed. All source/file SHA checks were performed against actual original GitHub content on the review branch, not copied from historical prose.

## 2. S1 primary source boundaries

- Author owner-connected original SGK KNTT Toán 11 Tập Hai **printed p99–109**, scan PDF pages one-based 100–110, SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`. p99–101 exponential/log models; p102–104 geometry experiences; p105–109 year-end review.
- Author owner-connected original SBT Toán 11 Tập Hai **printed p66–72** revision, scan PDF1 67–73, SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`. Original SGK printed year-end has 38 numbered exercises; SBT year-end has 43. These source lists are *scope* evidence; authored new items are not SGK verbatim copies.
- NotebookLM must independently cross-check the actual original S1, not assume the above metadata alone proves full learning coverage.

## 3. Executed structural QA on exact current Git SHA

| Test | Experience p99–104 | Annual p105–109 | Combined result |
|---|---:|---:|---|
| Distinct RD0 OUTCOME_ID in source matrix | 11 | 11 | 22 globally distinct |
| Unique canonical PUBLIC item_id | 27 | 41 | 68 globally distinct |
| D3 Core, Practice, Application | 21 | 31 | 52 |
| D4 Written /4 | 6 | 10 | 16, Anchor is a label not duplicate |
| D2 worked examples | 12 | 16 | 28 |
| D6 HELP return targets | 11 | 12 | 23; **23/23** point to an existing item of SAME outcome |
| Distinct outcomes with both formative item and HELP | 11/11 | 11/11 | 22/22 |
| D5 SVG original files | 5 | 3 | 8 actual XML originals included byte-identically in the R00 review source |

No item_id duplicate within/between these two source candidates. Each public item maps one valid primary outcome; each source outcome has a real public item plus an appropriate D6 remediation. No untrusted external SVG scripts/foreignObject/HTTP refs; all eight SVG have accessible title, desc, viewBox and original Git SHA. This validates **source structure only**; it does not establish academic/pedagogical suitability or finished SVG visual QA.

## 4. D5 exact original SVG Git snapshots

| Original SVG | Git blob |
|---|---|
| `Temp_FIG-G11-SUPP-E01-01_R00.svg` | `11c1c4f741618196e5d6f3782ef6cd4dc3956934` |
| `Temp_FIG-G11-SUPP-E01-02_R00.svg` | `a11fb6984ba634f8f3eab32e239e670d9cf55884` |
| `Temp_FIG-G11-SUPP-E02-01_R00.svg` | `5aa8d1e7f7a1830198ad9006cd507a547d7aeca4` |
| `Temp_FIG-G11-SUPP-E02-02_R00.svg` | `7060dba434f209628399cc70d432a4580e439b7a` |
| `Temp_FIG-G11-SUPP-E02-03_R00.svg` | `5331b822907dc04e1017462bf1cf8bb4179961b9` |
| `Temp_FIG-G11-YR-01_R00.svg` | `281989c0bafdca415b98f422f9b2b27c6882d445` |
| `Temp_FIG-G11-YR-02_R00.svg` | `1eef534b5f4434b1e2c8dd4f1fde73557d719754` |
| `Temp_FIG-G11-YR-03_R00.svg` | `69862b21745e192f5eac200fbd9ab6502e8fa244` |

Author pre-review correction on new R00 (not a post-PASS revision): E01-01 exponential data points n=0..4 now computed exactly for A(n)=100(1.2)^n with matching continuous interpolation k=ln(1.2), and YR-01 y=x² plotted with exact coordinate scale and tangent through (1,1), slope 2. These are **material mathematical D5 presentation repairs before first NotebookLM review**. Do not preserve or claim any prior independent review PASS for the superseded original incorrect SVG representations. The effective R00 canonical candidate is now the new full-review blob above; further SVG corrections are `DELTA_C_ACADEMIC_MATERIAL` affecting Q07/PED4 and must undergo affected-scope review.

## 4A. Q02/PED targeted pre-review repair — grouped quartiles

Direct inspection of the owner SGK original printed **p109 exercise 36** explicitly requires the **lowest-income 25% threshold**, a Q1 grouped-data outcome. In R00 annual author text, an earlier `STAT-P02` mean-only task did not test quartile reasoning despite the outcome mentioning tứ phân vị. **BEFORE any NotebookLM independent verdict**, author updated original YEAR_END source (now exact Git blob `f78e1f4bcb477c995ffdb1281d366bf3b0e88a59`) to teach and apply Q1/Q2/Q3 grouped interpolation, with n/4 and 3n/4 cumulative positions, plus a Q1/Q3 practice using class counts 4,8,8 (Q1≈11.25, Q3≈23.75), and adjusted D6 STAT remediation. No canonical `item_id` was created, deleted or duplicated; 11 outcomes / 41 items, source1 27 items and eight original SVGs stay in scope. The combined full-review R00 snapshot was rebuilt to Git blob `b848436621c17c89919e3d3f93519d12612fe039`, with new source2 exact bytes/hash. This is a **substantive pedagogic adjustment before initial independent review**; it must be examined by NotebookLM as part of this exact candidate. Do not label prior candidate reviewed or old Academic PASS transferable.

## 5. Q01–Q18 evidence readiness boundary

- **Q01/Q02:** S1 scope/printed-PDF index + eleven E01/E02 and eleven year-end RD0 outcomes; formal independent S1/outcome comparison still required.
- **Q03–Q06:** original D1/D2/D3/D4 text, reasoning, conditions, 16 Written rubrics exist; soundness and pedagogical depth by outcome still must be independently verified.
- **Q07/Q08:** eight real original SVGs, 23 outcome-linked D6 HELP exist; full math/rendered visual QA and remediation usefulness still subject to independent review.
- **Q09–Q14:** PED1–PED6 materials drafted including WHY/prereq/before-formula/self-try; only independent NotebookLM reviewer may return a PED PASS on exact R00.
- **Q15:** source single-item identity/primary outcome checked; independent Written/Anchor semantics must still be reviewed.
- **Q16:** formative demo `CLIENT_SELF_CHECK_NO_MASTERY` only; **no private independent RD1 supplied for new supplement**. Cannot claim official SGK_CHAPTER_READINESS or Mastery for this supplement.
- **Q17:** these are SGK supplemental activities and year-end revision, **not** Chapter X nor Chuyên đề/Topic PASS.
- **Q18:** exact source Git blobs/8 SVGs/receipt locked; **independent NotebookLM Academic+PED P0/P1/P2/MINIMAL_DELTA verdict is missing**, so HOLD prevents V2 ready manifest and REGISTER row.

## 6. Exact next external independent gate (no fabricated verdict)

Use `Temp_G11_SGK_SUPPLEMENTS_P99_P109_FULL_NOTEBOOKLM_REVIEW_R00_20261102.md` **as one complete temporary source** (not the two subfiles again), plus **exactly five THPT Permanent Sources v2.1 already installed in NotebookLM**, and original S1 schoolbook sources already provided there as reviewed references under the project's existing source policy. Send the five-sentence prompt `Temp_G11_SGK_SUPPLEMENTS_P99_P109_NOTEBOOKLM_REVIEW_PROMPT_20261102.txt`. The reviewer must return **distinct Academic and PED verdicts** keyed by lesson/outcome/item/figure + P0/P1/P2 and minimal delta with evidence and selected source names.

On receiving this independent verdict, author corrects impacted source only (DELTA_C, targeted review where necessary), locks the final Git source/receipt SHA, then creates **one canonical V2 handoff + one ready manifest + one REGISTER row** if all Q01–Q18 actually pass. This is the one open academic barrier before a full Grade 11 AUTHORING_COMPLETE candidate. Any website integration, AP/R/P QA and owner full-grade publication approval are **RELEASE lane** and are not performed here.
