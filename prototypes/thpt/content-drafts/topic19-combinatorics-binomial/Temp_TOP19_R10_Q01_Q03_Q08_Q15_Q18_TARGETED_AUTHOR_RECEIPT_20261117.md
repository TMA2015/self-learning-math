# CĐ19 R10 · Q01/Q03/PED + Q15/Q18 SOURCE-LOCKED TARGETED AUTHOR SELF-QA · 17/11/2026

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
DELTA_CLASS: DELTA_C_PED_MATERIAL_FOR_O02_T02_PLUS_LEARNER_EDITORIAL
SOURCE_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R10_LANGUAGE_LOCAL_REFERENTS_CANDIDATE_20261117.md
SOURCE_BLOB: 37612a3fb8d804efa6dd4f65ddd22d90bf2772ae
PREVIOUS_R09_SOURCE_BLOB: 2b46a2c92004f2c030d030e2b2021a34157bc95d
PREVIOUS_R09_Q18_AUTHOR_RECEIPT_BLOB: 55bc391995cccdf0ce66b96ebfa8840c0148c075
Q15_CANDIDATE_MAPPING_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_TOP19_R10_Q15_56_CANONICAL_CANDIDATE_MATRIX_20261117.md
Q15_CANDIDATE_MAPPING_BLOB: 448c913a0263cdc537a8e33a39bcdd8052ec3372
ORIGINAL_R09_Q15_MATRIX_BLOB: d21d1d3ede107b3b479d1f61a1ddc0e4df0414ec
S1_G10_ORIGINAL_PUBLIC_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232
S1_ORIGINAL_PDF_REVIEW_RECEIPT_BLOB: 850dd241e60de58ccf032e48e1e13530988436e3
AFFECTED_P0: 0
AFFECTED_P1: 0
Q01_Q03_PED_TARGETED: AUTHOR_SELF_QA_PASS
Q15_SINGLE_ID_T02_R10_VERSION_PROPOSED_OWNER: AUTHOR_SELF_QA_PASS
Q18_TARGETED_DELTA: AUTHOR_SELF_QA_PASS
GLOBAL_ACTIVE_CANONICAL_OWNER_V2_READY_REGISTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## 1. Review exact Git source delta, not text-lint counts

The immutable R09 learner source and current R10 candidate were re-fetched and compared by line-LCS for the Knowledge section. There are 23 local edit blocks: candidate-only HTML provenance, replacement of repetitive event-fair intro, explicit product-rule condition, precise T02 stem/D6/version, deletion of repeated generic student notices, and clearer Newton and free-term explanations at outcome O09/O11. No other item changed. **Everything from the # Luyện tập heading to file end, including all Practice worked keys/rubrics and public question-only Tự kiểm tra, is byte-identical between R09 and R10.** This prevents a silent change to the original shared SGK bank copies, rubric, role or public replay exposure.

### Correctness of modified product rule and T02

With m first-step choices and exactly n available second-step choices for every first-step choice, the disjoint count of complete ordered choice pairs is m×n. The second-stage choices need not be identical sets across first choices; the branch cardinality must consistently be n. If first-step branch j has n_j second choices, the count is Σ n_j, not m×a guessed n. New O02 narrative and method state the distinction correctly, before any formula. Its unchanged worked example gives 3 shirt styles×2 badge types=6. T02 remains the same canonical ID THPT-TOP19-T02 on TOP19-O02, question about one of 4 shirts with one of 3 badges; new wording clarifies what a complete gift is, answer 4×3=12 unchanged. D6 uses a directly executable 4-row ×3-column table rather than an unexplained model A/B. This substantive changed D6 is why only T02 CONTENT_VERSION changed from TOP19-R03 to **TOP19-R10**; the 13 other T items retain TOP19-R03.

## 2. Affected-scope mathematical and pedagogical check across 14 Knowledge outcomes

| Outcome | Actually checked example/condition |
|---|---|
| TOP19-O01 | 4+3=7 for one choice from disjoint lists; do NOT multiply 4×3 |
| TOP19-O02 | 3×2=6 pair combinations; T02 4×3=12; m×n only if every first-stage choice has exactly n second-stage choices, otherwise sum branch counts |
| TOP19-O03 | 4 letter options in each of two positions and 10 digits incl 0 ⇒ 4×4×10=160 codes |
| TOP19-O04 | three-digit even with {0,1,2,3,4}, distinct: last0 yields 4×3=12; last2/4 yields 2×3×3=18; total30 |
| TOP19-O05 | 4 distinct books arranged all ⇒ 4!=24 |
| TOP19-O06 | choose 3 distinct roles from 5 ⇒ 5×4×3=60 |
| TOP19-O07 | choose unordered 2 from 5 ⇒ 5×4/2=10 |
| TOP19-O08 | 5 women choose2 (10 ways),4 men choose1 (4) ⇒ 40 groups, then ×3 leaders⇒120 |
| TOP19-O14 | 6! =720, assign two of8 distinct offices=8×7=56, unordered two of8=28; nPr/nCr depend on roles |
| TOP19-O09 | (a+b)^4 gives coefficients 1,4,6,4,1; coefficient a²b² = C(4,2)=6 |
| TOP19-O10 | coefficient x³ in (2x−1)^5: select −1 twice ⇒ C(5,2)×2³×(−1)²=80 |
| TOP19-O13 | 1000×(1.02)^5≈1104.08 vs first-order 1000×(1+5×0.02)=1100, omitted positive terms total ≈4.08 |
| TOP19-O11 | constant term in (2x−3)^4 requires four choices of −3 ⇒ 81 |
| TOP19-O12 | sum all coefficients of (2x−1)^4 = P(1)=(2−1)^4=1 |

All fourteen source Knowledge units retain the original worked examples and First Try/opt-in solution/D6 structure. The changed Newton explanatory text in O09 starts with four factors and counts choices of b, correctly yielding C(4,2)=6; changed constant-term prose in O11 correctly requires selecting the non-x term in every polynomial factor. All fourteen example arithmetic checks above were independently recomputed here. No inference that every unrelated 56 canonical item's detailed key/rubric was re-solved in this turn; their unchanged source bodies and historic R09 author Q18 receipt remain intact.

## 3. Q07 SVG / Q01/S1 and learner pathway

Two actual original SVG sources were retrieved: FIG-TOP19-B23-ADD-MULTIPLY-WHITE-R00.svg (Git blob cef1e17e52407233945d5b22a21f1d9366ad2572), showing 4+3=7 disjoint alternative choices versus 4×3=12 pair choices; FIG-TOP19-B23-TWO_STAGE_TREE_WHITE_R00.svg (blob aae9f4c23831b8a4a0df0459a55ec3acf37644bd), showing 2 shirts×3 pants and six complete leaves. Both descriptions/titles/labels correspond to the R10 guide and do not conflate the tree's 2×3 pants example with T02's separate 4×3 shirts/badges example. Actual website rendering is not asserted.

Original R09 source receipt's S1 scope is G10 KNTT Tập Hai Ch VIII B23–B25 and the source's pre-existing direct PDF review receipt (SHA above). The newly explained product rule is derived from counting all cases, not a new compulsory Core outcome. Source reviewer did not re-open original PDF pages in this turn; do not claim a new direct textbook-page audit.

## 4. Q15 source identity and assessment custody

Candidate Q15 matrix above was derived from 56 exact source ID markers and matched 56/56 to original R09 metadata: 25 G10 SGK original shared bank placements, 14 T First Try items, 14 P Practice and 3 W Written, with no missing/extra/duplicate ID; seven question-only public selfcheck references are existing P IDs, not new items. T02 is the sole new content version; original SGK items retain owner blob 2ae62... rather than being recopied as canonical sources; unchanged P/W versions are not invented if the learner marker does not declare them. Stem T02 became more explicit but conditions/answer did not change. No private RD1 stem/key/rubric is disclosed and no official Final Submit, TOPIC_READINESS or Skill Mastery is activated.

**Remaining exact blockers:** the global active canonical owner/version cannot be silently changed here. Owner must select R10 as one active canonical Topic source with T02 version TOP19-R10, preserve source ownership of the 25 original SGK items, and synchronize one V2 handoff/ready manifest/REGISTER plus source SHA. This candidate Q15 matrix is not global ACTIVE REGISTER. Existing signed R09 snapshot and receipt remain valid on their own immutable SHA. No independent NotebookLM full-topic verdict is invented.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP19_R10_14_OUTCOMES_56_ITEM_IDS_T02_SINGLE_VERSION_2SVG_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; GLOBAL_Q15_OWNER_V2_READY_REGISTER_HOLD; CONTENT_READY_NO; NO_MERGE_NO_DEPLOY.

Review prompt (four sentences): Compare exact R10 and R09 Git source and review the condition for m×n, new T02 wording and its D6 table, plus changed Newton explanation. Verify 56 item IDs including 25 original G10 SGK displays, all 7 replay placements, and the single T02 content version without creating another canonical owner. Recompute the examples/outcomes and report any genuine source/PED/math error with item/outcome and MINIMAL_DELTA. Do not infer targeted author Q18 PASS is independent NotebookLM verdict, readiness or release authorization.
