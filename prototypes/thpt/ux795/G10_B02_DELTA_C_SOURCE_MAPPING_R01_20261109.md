# UX795 · G10 B02 — Delta C source/outcome & QA R01

**Scope:** SGK_CHAPTER / G10 / Chương I / B02, riêng trang Kiến thức. **Tình trạng:** nội dung ứng viên, chưa phải Academic/PED PASS cho snapshot mới, chưa tích hợp website.

## 1. Source receipts

| Vai trò | Nguồn | SHA / đường dẫn |
|---|---|---|
| Phạm vi toán S1 | SGK Toán 10 KNTT tập 1 Bài 2 trang in 12–19; giấy tờ nguồn R01 đã review trước đó, chưa tái xác minh S1 mới | prototypes/thpt/release-queue/ready/G10-SGK-CHI.md |
| Source website đã phát hành | docs/thpt-preview/sgk/chuong-i/bai-2.md | blob 70c77844b0bee75565f8a059ddc4befd3ad9dd2d |
| Old independently reviewed authoring | prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md | blob 95a554e31a613b8e215679fe6790738473d598df; reviewer receipt fece80dcb4b0e17d369e2ecbe12e8d13b672281a |
| Gemini Word gốc | Gemini/Lớp 10-bài 2.docx | [Google Drive](https://docs.google.com/document/d/17BRAn3ApceabHPNOAiPUEh1e1zIShp85/edit); ZIP member SHA256 5e7d243218b438bad105741a86a263d320bb36ad960ed44f178fc0a1bee1a009 |
| Notebook Gemini v1 | Notebook Gemini/bai-hoc-chi-tiet-toan-10-kntt.md, mục BÀI 2 | [Google Drive](https://drive.google.com/file/d/1Ickwg2M_9XghU5C602k-w5wqargqOadT/view); SHA256 19d572505065ab742a97f2507a5a56b566f461191e7f0ae8452d411cc2e3ec1c |
| D5 diagram đã phát hành | docs/assets/images/thpt/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg | blob ea84ee68187e83aa4bc6b14e49a965b3d7da5a11 |
| SVG mới do SLM tự tạo | [images/G10_B02_MEMBERSHIP_SUBSET_R01.svg](images/G10_B02_MEMBERSHIP_SUBSET_R01.svg) | blob c78f7e746ed8837603919f9ed8666d6f8657f0b8, ứng viên DELTA_C; nội dung A={2,4}, B={2}; chưa phê duyệt |
| Quy tắc cấp trang đã được chủ dự án chốt | [UX795_SGK_THPT_LEVEL1_TABS_AND_VISUALS_GUIDE_R01_20261109.md](UX795_SGK_THPT_LEVEL1_TABS_AND_VISUALS_GUIDE_R01_20261109.md) | Phase 1 chỉ **4 tab cấp 1**; Phase 2 sau toàn bộ SGK, riêng từng bài |
| Candidate R01 | [G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md](G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) | current draft blob 5f92c7d90729b36586e797b9bc7fc9610149bdb3; earlier blob beecbb71be368fe3a0aac1d32e76bbf7c51a0726 remained unchanged |

## 2. Mapping six source outcome IDs to new narrative

| OUTCOME_ID from R01 authoring | New lesson location | Primary contribution | Existing First Try / HELP |
|---|---|---|---|
| G10-B02-MEMBERSHIP_SUBSET | Discovery box-of-cards analogy + **new SVG**; Knowledge §2.1 + **contrast table** | Gemini everyday grouping + owner box analogy + canonical definition | THPT-G10-CHI-TRY06 / HELP-G10-B02-01 |
| G10-B02-UNION_INTERSECTION | Discovery club example; Knowledge §2.2 | Gemini everyday groups and canonical union/intersection | THPT-G10-CHI-TRY07 / HELP-G10-B02-02 |
| G10-B02-DIFFERENCE | Knowledge §2.2, Worked Example 1 | canonical set difference and noncommutativity | THPT-G10-CHI-TRY08 / HELP-G10-B02-02 |
| G10-B02-COMPLEMENT | Knowledge §2.2 | canonical universe condition and complement | THPT-G10-CHI-TRY09 / HELP-G10-B02-02 |
| G10-B02-INTERVALS | Knowledge §2.3, Worked Example 2 | NotebookLM v1 actual interval worked example with A=(-3,2], B=[0,5) and endpoint reasoning | THPT-G10-CHI-TRY10 / HELP-G10-B02-03 |
| G10-B02-VENN_MODEL | Knowledge §2.4 with figure; Worked Example 3 | unchanged 40/23/25/12 canonical data and original D5 SVG | THPT-G10-CHI-TRY11 / HELP-G10-B02-02 |

Do not invent a seventh OUTCOME_ID for skill G10-B02-SET_EQUALITY used in P06; it is taught within Membership/Subset.

## 3. Exact Delta category and preserved boundaries

**DELTA_C_ACADEMIC_MATERIAL**: Discovery rewritten into continuous teacher-like narrative instead of repeating six public PED labels; terminology/skills summary and illustrated knowledge conclusions newly composed; concept text reorganized; Worked Example 2 changed from old (-infinity,3],(1,+infinity) to NotebookLM v1 (-3,2],[0,5) and adds set difference. Worked Example 3 adds derived exact-one-course count 11+13=24; check after targeted math/source review. These are not merely UI moves.

**Preserved without copying bank data:** 6 existing First Try IDs (TRY06 through TRY11), each one answer closed within details before Core; 3 original HELP IDs; **1 existing source SVG preserved + 1 newly authored SVG** linked to membership/subset; a symbol comparison table; no edits to canonical Core/Practice, Written/Anchor, scores, Firebase, Gemini, student records, Golden or Final Submit/Q16.

**Source selectivity:** Gemini Word provided accessible explanation/grouping as inspiration, owner-provided analogy made concrete in authored prose. NotebookLM v1 provided a specific mathematically complete interval example reused with step-by-step explanation. NotebookLM v2 is excluded as default due to generic placeholders and mismatched mappings. OMML equations in Gemini DOCX cannot be validated only by plain text extraction.

## 4. QA ledger / acceptance gates

| Evidence gate | Current finding |
|---|---|
| Four top-level areas | STATIC PASS: Markdown four regions; **prototype has 4 tabs in ONE horizontal tier**, with only one active panel, click/arrow/Home/End in mocked DOM; **no level-2 tabs** |
| Six active checkpoints | STATIC PASS: 6 distinct pre-existing First Try IDs, zero duplicates; answer remains hidden by closed details |
| Three help cards | STATIC PASS: 3 original HELP_IDs |
| SVG/Q07 | SOURCE BLOB PASS: existing Venn diagram (40=11+12+13+4) kept; **new subset SVG** (A={2,4}, B={2}) + symbol table added immediately beside explanation; new illustration candidate Q07/PED4 **semantic/render QA pending** |
| Public terminology | STATIC PASS: no checklist labels “Vì sao cần học?”, “Em đã biết gì?”, “Hiểu bản chất trước công thức”, “Tự thử trước Core”, or public audit source receipts |
| MathJax/AP2, AP1/3/4/5 | NOT RUN on real browser 390/820/1440; visual actual device P2 pending |
| S1/Q01-Q14 on **new** source snapshot | PENDING: individual definition/example/source check; old PASS is tied to old immutable snapshot |
| Q15/Q16 runtime | PENDING exact item register and Golden/Final Submit regression; no bank/runtime files touched |
| Q18 / owner no-duplicate-review request | STANDARD_CONFLICT_HOLD if v1/reviewer documents do not prove coverage of changed R01 snapshot. No independent PASS invented; resolve under the ONE existing standard, without automatically re-reviewing all unchanged B01/B02 content |
| Release authorization | NO MERGE / NO DEPLOY until owner design acceptance, evidence and exact-final-HEAD gates |

**Phase-1 decision:** apply precisely 4 tabs on SGK Knowledge pages across grades 10–12, leave concepts vertically ordered within each; **do not implement Level-2 tab before whole SGK rollout and individual owner authorization**. Add concept images/tables proactively where SGK S1 already uses them or when needed for self-learning, maintaining original assets and receipts.

**Next:** read the [A/B preview HTML](UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html) in a browser and assess the learner experience; audit each of the six outcomes against SGK and release gate. This draft does not authorize publication or conclude that it is better for real learners.

**Checkpoint:** UX795_G10_B02_DRAFTED / 6_OUTCOMES_MAPPED / USER_SOURCE_USED / ACADEMIC_Q18_NOT_YET_CLOSED / RELEASE_HOLD.
