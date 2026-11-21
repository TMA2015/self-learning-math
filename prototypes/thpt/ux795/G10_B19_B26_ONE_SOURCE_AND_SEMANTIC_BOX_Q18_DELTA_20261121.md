# G10 SGK B19–B26 · One source, no redundant prose, correct SGK semantic cards

**RECEIPT_ID:** G10-B19-B26-ONE-SOURCE-SEMANTIC-Q18-20261121
**DECISION:** owner 21/11/2026 — remove duplicated source footer in B23–B26 and all earlier affected lessons; remove B26 meta-explanation; box ONLY SGK concepts, definitions, properties, formulas and principles, not an application calculation.
**SINGLE_ANTI_REPEAT_LEDGER:** Issue [#795](https://github.com/TMA2015/self-learning-math/issues/795), IDs `SGK-G0-SOURCE-DUPLICATE-20261121`, `SGK-G0-REDUNDANT-META-TEXT-20261121`, `SGK-G0-SEMANTIC-BOX-ROLE-20261121`. This file is a Q18 *source receipt*, not another checklist.
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18; G0–G5; preserve canonical Q15/Q16, Golden four tabs, original reviewed answers, Golden UI, THCS, assessment/privacy and owner P2 historical receipts.
**SOURCE_AUTHORITY:** SGK Toán 10 KNTT tập 2 pp.30–82 as applicable; B26 pp.77–82 cross-checked in S1 source (chapter IX, three titled sections). B26 §1 SGK p77–79: random trial, sample space, event, complementary event; §2 p79–81: equiprobability, classical definition, probability bounds; §3 p81–82: boxed small-probability principle and practical frequency approximation nP(A) (n≥30) with 0.488 / 0.512 birth scenario.
**DELTA:** B19–B25 = `DELTA_A_UI_METADATA` (one source footnote instead of duplicate; maths, IDs, figures, tabs, examples, assessment unchanged); B26 = `DELTA_C_ACADEMIC_MATERIAL` (targeted pedagogical semantics and page citation correction, no new exercise, solution or model data; self-reviewed S1; independent NotebookLM reviewer PASS not claimed).
**Q18_OWNER_SELF_VERIFIED_ENRICHMENT:** G0 direct inspection B01–B26; B01–B18 already one source footnote. G1 edits directly eight canonical published source Markdown files, no duplicate learner manuscript. G2 strict byte-reconstruction from B19–B25 corrected sources to old Git blobs proves *only* source-footnote change; B26 verified outcome roles and original item IDs; G3 and G5 CI/production post-edit remain gating until observed.
**OWNER_P2:** previous immutable P2 records retained; new B26 owner real-device P2 not inferred from source QA.

## Source-locked canonical Git blob transitions
| Lesson | Old published canonical Git blob | New canonical Git blob | DELTA | Owner-visible correction |
|---|---|---|---|---|
| B19 | `0c7f9d7a4eb96846931317b4da3c7335a73bf85e` | `79ea13417b34c5e2f436d35a906cf25bd5fb126d` | DELTA_A_UI_METADATA | Single source SGK p30–35/SBT p28–31 |
| B20 | `37a88cd9bc176a472f6e181db4429490b6d0a3b9` | `e5cd5bbc4332322bbb4a0e0a2257d72f994f0bc7` | DELTA_A_UI_METADATA | Single source SGK p36–42/SBT p32–38 |
| B21 | `5456fd9756c6f1c795f0d56d51f49561cbad7e1c` | `4b6ab3755ff8d5c074f4ffa7d7a283fa8799bfb7` | DELTA_A_UI_METADATA | Single source SGK p43–47/SBT p39–41 |
| B22 | `463f1cc79861ed32a4e88283351bea947bc9282b` | `0b37ecdc4270fe24b6ba0b3dc724a2444f703cd4` | DELTA_A_UI_METADATA | Single source SGK p48–57/SBT p42–46 |
| B23 | `25f460ab8432496a2685cbaed4d21fd04ed1adbe` | `a5512d5a206d89808863257d5094e242e28d91c9` | DELTA_A_UI_METADATA | Single source SGK p60–65/SBT p51–53 |
| B24 | `31aca301dafaf86403873e324b5bce7d4fa66a43` | `dbf48cdd16811a2581be679bdc86fc6ca15fe311` | DELTA_A_UI_METADATA | Single source SGK p66–71/SBT p54–55 |
| B25 | `3fdd065beb95b317d7e213a9ab9d9ed845fc16a2` | `d8491aa03be4d1356fbbbb902d7f97a6e8553e0d` | DELTA_A_UI_METADATA | Single source SGK p72–75/SBT p56–57 |
| B26 | `72f336c1c0113d530f6f7687505b347b97c9d191` | `6b695c41cff31490630b380522752636fc57f8b7` | DELTA_C_ACADEMIC_MATERIAL | One source SGK p77–82/SBT p61–63; remove redundant example exposition; semantic boxes match SGK |

**B26_SOURCE_FORMULA_REPHRASE:** `1` historical \\(0\\le P(A)\\le 1\\) occurrence subsumed into the equivalent blue-box property with compact TeX spacing; original range, event conditions, probabilities and values are preserved. Affected scope exact old and new B26 blob SHAs are locked in the B26 row above. No loss of a mathematical outcome.

## G2 B26 semantic outcomes (source audited)

- SGK §1 (p77–79): Event is subset of Ω and complementary event Ω\\A; separate **turquoise concept cards** for both definitions. Random trial/sample-space prerequisite remains explicitly taught before definitions. Venn SVG unchanged.
- SGK §2 (p79–81): formal **definition concept card** P(A)=n(A)/n(Ω) with `n(Ω)>0`, finite equiprobability; separate **blue rule card** for `0≤P(A)≤1`, `P(∅)=0`, `P(Ω)=1`. Complement identity explained as derived auxiliary bridge (B27 formalizes it).
- SGK §3 (p81–82): formal **blue rule card** for small probability principle, immediately qualified as a practical heuristic, not P(A)=0. Frequency nP(A) and real-world gender estimate `n≈10000/0.488≈20491.8` and `boys≈10491.8` are **unboxed explanatory prose**, explicitly estimates, no new formal theorem. Original 6 worked examples remain unchanged.
- Removed learner-irrelevant meta sentence “Mỗi ví dụ có …”, redundant chapter-scope recap, corrected §1/§2 printed page ranges. Kept five canonical First Try and five closed Đối chiếu answer contents, seven HELP/D6 IDs, 6 example solution cards, both illustrations, core/practice links, security model intact.
- Future anti-repeat prevention: verify **one source at last page footer** (not counting any valid SGK references inside pedagogy); verify **box type by mathematical semantic role**, not number of boxes; never reinsert self-congratulatory structure explanations before actual examples. This lives in Issue #795 only.

**G0/G1/G2:** targeted source academic/pedagogical self-check performed. **G3/G5:** must verify final HEAD CI and Pages built HTML after permitted deploy. **NO_INDEPENDENT_NOTEBOOKLM_PASS_CLAIMED / NO_OWNER_P2_CLAIM.**
