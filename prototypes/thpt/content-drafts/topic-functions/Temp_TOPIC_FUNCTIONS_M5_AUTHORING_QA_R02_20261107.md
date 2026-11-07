# AUTHORING QA R02 — Topic Functions M5: Limits and Continuity

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M5-R01-20261107
**ONE STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18
**LANE:** AUTHORING; **ACADEMIC/PED:** PENDING; **CONTENT_READY:** NO; **RELEASE:** NO
**M5 CANDIDATE SOURCE:** Temp_TOPIC_FUNCTIONS_M5_LIMIT_CONTINUITY_D1_D6_AUTHORING_R01_20261107.md — Git blob f1fe1997242714ddadf3e94b981df904f4e12787 (GitHub readback, 24,358 chars).
**M5 Q15 LEDGER:** Temp_TOPIC_FUNCTIONS_M5_CANONICAL_REUSE_Q15_AND_SOURCE_RECEIPT_R01_20261107.md — Git blob 0a1ed99f4df0a6266807a1b7ed843b350855f656 (GitHub readback, 8,416 chars).
**SOURCE AUTHORITY:** M5 R01 is the coherent new pedagogical candidate for this module. The older broad student-flow R00 contains an early sketch of M5 and must remain HISTORICAL, **not** a second canonical source. Any promotion should select approved R01 and use a controlled Delta to replace the sketch.

## 1. Original S1 evidence directly inspected

| Raw source | Original PRINTED pages | PDF pages (1-based, include cover) | Original PDF SHA256 | Inspection |
|---|---|---|---|---|
| SGK KNTT 11 Tập 1 B16 | 111–118 | 112–119 | 4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828 | Entire page range visually read |
| SGK KNTT 11 Tập 1 B17 | 119–122 | 120–123 | same PDF SHA above | Entire page range visually read |
| SBT KNTT 11 Tập 1 B16 | 79–83 | 80–84 | fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229 | Entire page range visually read |
| SBT KNTT 11 Tập 1 B17 | 84–86 | 85–87 | same PDF SHA above | Entire page range visually read |

These are complete original scanned PDF bytes; no text layer, no OCR, no private Drive URL or copied PDF publicly stored. The scope covers finite and one-sided limit, infinite behavior at a and at infinity, algebra/rationalization, continuity at point/interval/segment and endpoint, IVT existence with necessary conditions and limits of conclusion. It does NOT claim S1 content outside B16/B17 has been completely audited in this pass.

## 2. Executed structural and symbolic tests

| Check | Real output | Appropriate conclusion |
|---|---|---|
| SymPy symbolic tests | **33/33 PASS** for selected limits, signs, endpoints and model values | Selected math PASS, NOT all academic depth |
| Local preflight test correction | Initially 27/33 because subtracting equal positive/negative infinities in a comparator produces NaN; comparison was corrected to recognize equal infinities and rerun: 33/33 | Changed only a local test predicate, no academic answer |
| HTML source self-check | Six opening details and six closing details | Source balance PASS; no browser/AP4 tested |
| Inline MathJax delimiters | 145 opening pairs and 145 closing pairs | Source count PASS; no rendered AP2 tested |
| Display MathJax delimiters | Six opening pairs and six closing pairs | Source count PASS; no rendered AP2 tested |
| GitHub readback | Both SHA blobs above confirmed; no merge conflict markers/private RD1 stems | Source-locked draft |
| Topic D1/D2/D3 | Eight EX, six First Try, twelve illustration labels by skill family | Presence verified; no depth or reviewer PASS implied |
| Q15 canonical mapping | 20 existing public items, four existing Written, four existing HELP, two existing SVGs | Candidate placement only; no new official ID |
| New public questions | Two genuinely differentiated candidates P-M5-09 / P-M5-11, full worked solutions and D6, **zero canonical IDs promoted** | Need whole-bank duplication audit and independent Delta C review |

Representative symbolic cases: limit of removable hole (x=2/3/4), ±infinity one-sided for reciprocal and reciprocal square, rational at ±infinity, root sign at negative infinity, conjugate limits at 0 and +infinity, parameter at piecewise junction, endpoint limits of square roots at ±2 and ±3, intermediate-value endpoint signs, 0/0 algebra and a restricted efficiency model. These 33 selected tests are not a substitute for an independent reviewer, SVG QA or student study.

## 3. Q01–Q18 progress and blockers

- **Q01/Q02:** Original S1 SGK/SBT B16/B17 page ranges directly checked. The nine proposed M5 outcome rows still need independent reviewer validation, and full vertical Topic coverage M1–M7 is NOT proven by a matrix count.
- **Q03/Q04/Q09–Q14:** New M5 pedagogical prose WHY → trends → method limits → continuity → existence, with examples/First Try and remediation, must be reviewed as **DELTA_C_ACADEMIC_MATERIAL**. This is an application of Q09–Q14, not a separate standard or a rigid layout.
- **Q05/Q06/Q15:** Existing 10 B16 plus 10 B17 public canonical IDs, 4 Written (2 Anchor tags only), 4 HELP, 2 SVG are source locked in Q15 ledger. P-M5-07 is a combination of prior B17-C01/C02 skills; only P-M5-09 and P-M5-11 remain true new candidates. **No duplicate canonical item/source created.**
- **Q07/Q12:** Existing FIG-G11-B16-01_R01.svg blob d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73 and FIG-G11-B17-01_R01.svg blob 0cc06960b371bca72ee78da414a04aa56f5e5fbe reused with Topic-native figure reading guidance. RELEASE must later do actual AP3.
- **Q08/Q14:** Four existing HELP IDs mapped to within-Topic return sections. Student never must navigate to SGK to see obligatory remediation.
- **Q16:** There is no approved private full-scope Topic RD1, no key/hint/AI Tutor before official Final Submit, and no Mastery from these public Try/Practice/ordinary Written.
- **Q17:** M5 itself can be read and used within Topic, but the whole cross-grade Topic cannot claim independent FULL until remaining modules are complete and validated.
- **Q18:** Exact source/blob receipt captured; **no NotebookLM review of NEW M5 source has happened**. Preserve original G10 Topic historic PASS and original SGK immutable PASS scope; do not backport new assertions.

## 4. Next AUTHORING gate

Continue M6 instant rate/derivative → M7 behavior/optimization with direct original S1 and canonical mapping, not SGK lesson-shaped duplicate pages. When a coherent Topic review batch is ready, provide true Temp_ reviewer files; if three or more files, bundle in a single Temp_ ZIP with all internal names Temp_, unzip instruction and one 3–6 sentence prompt. Use exactly FIVE Permanent THPT v2.1 NotebookLM sources and S1; Academic+PED verdict per outcome/source blob only. Create V2 handoff/one ready manifest/REGISTER **after** all Q01–Q18/A1–A7 and source/receipt/privacy gates pass. Authoring never merges/deploys website.

**CHECKPOINT:** M5_S1_DIRECT_SOURCE_PASS_SCOPED; M5_SYMPY_33_OF_33_PASS; M5_Q15_REUSE_20_PUBLIC_4_WRITTEN_4_HELP_2_FIG; M5_NEW_APPROVED=0; M5_ACADEMIC_PED=PENDING; FULL_TOPIC_CONTENT_READY=NO; RELEASE=NO.
