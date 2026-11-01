# G12 SGK Chương I B01–B05 R00 — Author-only QA and exact source lock

**State:** AUTHOR_QA_COMPLETE; INDEPENDENT_NOTEBOOKLM_REVIEW_PENDING; **NOT** ACADEMIC PASS, not CONTENT_READY. `PACKET_ID=THPT-G12-CHI-B01-B05-WHOLE-CHAPTER-AUTHORING-R00-20261101`.

| Review file | Actual UTF-8 bytes | SHA256 |
|---|---:|---|
| `Temp_THPT_G12_CHI_B01_B05_PUBLIC_D1_D6_REVIEW_R00_20261101.md` | 156237 | `fe7d869d0b19ded8b973ee954050394412f69b2241f6db36de679894c1e30e19` |
| `Temp_THPT_G12_CHI_B01_B05_PRIVATE_RD0_RD1_REVIEW_R00_20261101.md` (PRIVATE library only) | 35758 | `b5883c446dc3afd6035d823631d8ad31a1235d17ed7dfd79636c02e3cbf62227` |

**Academic scope:** Original KNTT Toán 12 Tập 1 SGK 5 lessons B01–B05 + final exercises, published online SGK index says printed pp5–44; SBT online index p8–37. Exact publisher SGK/SBT scan and SBT answer section must be verified by NotebookLM; online third-party indices do NOT grant SOURCE_RECEIPT_S1 PASS.

**Full inventory:** RD0 28 (B01 6, B02 5, B03 5, B04 6, B05 5, integrated 1); D2 20 explained examples; D3 56 public canonical Core/Practice; D4 10 Written, 5 Anchor role tags in same shared bank, 4-point rubrics; D5 5 SVG XML embedded and separate same-source files; D6 12 five-step HELP, valid canonical public item return links; 28 private held-out RD1, /4 rubric. **Total 66 PUBLIC +28 PRIVATE=94 canonical item IDs**. No public RD1 stems/keys/rubrics.

**Author QA:** 27 independent SymPy assertions PASS (symbolic derivatives, division identities, extrema candidates, rational limits, revenue, box volume and cost). 28 RD0 mapped to exactly 2 different public D3 IDs plus 1 private RD1 ID; 5/5 SVG valid XML and CairoSVG render PASS and visually inspected; all 12 HELP return IDs exist; IDs globally unique and two source files have 28 protected RD1 with 4-point rubric each. No explicit testing of **mathematical correctness of every rubric line**, original SBT comparators, relative difficulty, structural leakage, browser Final Submit safety or actual running student UI — these remain reviewer/release gates.

**Unchanged source governance:** One item_id per canonical problem. Anchor is a role, not duplicated question. `SGK_CHAPTER_READINESS` scope differs from TOPIC_READINESS; no pre-submit correctness, no practice-to-Mastery or demo scoring. Academic changes Delta_C require independent review on affected IDs. No merge/deploy by authoring branch.

## Independent review required

Review five lessons WHOLE CHAPTER against original SGK and SBT KNTT Tập 1, 5 THPT Permanent Sources v2.0, all 28 outcomes, 20 worked examples, all 66 public and 28 private items, 5 SVG and 12 HELP, and pedagogical PED1–PED6. Return `ACADEMIC_G12_CHAPTER_I=PASS/FIX/BLOCK`, `PEDAGOGICAL_SELF_LEARNING_READY=PASS/FIX/BLOCK`, actual selected filename receipt, outcome/item per-ID findings, `EXPOSURE_STRUCTURAL_VERDICT`, `P0/P1/P2`, `MINIMAL_DELTA`; `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. Do not supply a fabricated SHA256 from NotebookLM if raw bytes are inaccessible.