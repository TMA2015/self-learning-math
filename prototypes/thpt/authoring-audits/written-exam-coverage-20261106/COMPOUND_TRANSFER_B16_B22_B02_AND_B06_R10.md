# AUTHORING R10 — Phân rã chuỗi suy luận thay vì tìm bản sao đề thi

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-TRANSFER-CHAIN-SOURCE-INSPECTION-R10-20261106
BASELINE: 238 canonical D4 Written, unchanged
SCOPE: ordinary Hanoi THPT 2022–2026 HKI/HKII, source reference R08–R09
NEW_CANONICAL_ITEMS: 0
ACADEMIC_PED_RE_REVIEW: NO
GAP_VERDICTS: 0
SCHOOL_PDF_ORIGINAL_VISUAL: HOLD
RELEASE_AUTHORIZATION: NO

## 1. Source and evidence boundaries

Original school publisher index (Phùng Khắc Khoan–Thạch Thất, 23/12/2025): https://thptphungkhackhoan-thachthat.edu.vn/thi-va-tuyen-sinh/c/21796 . It announces a three-grade HKI exam-and-answers bundle with seven attachments. The school-issued attachment files are still inaccessible (502/Cache miss), so their bytes and page graphics are not authenticated.

Secondary G12 HKI combined PDF text: https://file.montoan.com.vn/file-pdf/de-cuoi-ky-1-toan-12-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi.pdf . Browser parses 28 pages and printed code 123 Part IV C1–C3; however PDF page screenshots still fail Cache miss, and independent byte download failed. Text-indexed evidence is not image-verified evidence. Four variants 123, 345, 567 and 789 are one school exam event, with their own problem parameters/keys, not independent exam papers.

G10 HKI 2025–26 multi-segment route example is a THIRD-PARTY WEB EXCERPT from https://toan12.edu.vn/de-cuoi-ky-1-toan-10-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi . Its original printed exam question number, long-response section and diagram have NOT been verified.

This file adds method-level observations, not a new academic standard or a re-review of any original NotebookLM Academic/PED PASS.

## 2. Case A — G12 code 123 Part IV C1: parabolic shore / shortest bridge to circular island

As described by indexed exam text, the solution has the following chain: choose coordinate axes from physical geometry; construct a quadratic shoreline from a vertex and a known point; parameterize a physically bounded arc; set up squared Euclidean distance to a fixed circle centre; optimize over the arc with derivative and endpoint checks; subtract the circle radius associated with the CORRECT paper code; interpret the result. Exact figure, parameter conventions, detailed mark scheme still VISUAL_HOLD.

| Method component | Real approved canonical evidence | What the existing source actually rehearses | R10 audit status |
|---|---|---|---|
| Quadratic and parabolic graph; vertex, axis and extremum | G10 B16: THPT-G10-CHVI-APP-A2; historical Written HPT-WRI-DEMO-01; first-try THPT-G10-CHVI-TRY08 / TRY10 | Convert a GIVEN quadratic into vertex form, find axis/extremum, recognize applied modeling bounds | QUADRATIC_REPRESENTATION_PRESENT; FIT_FROM_PHYSICAL_FIGURE_PENDING |
| Parabola focus, directrix and physical example | G10 B22: THPT-G10-B22-P03 / P04 / P06 | Identify parabola properties and solve a reflector/application when the equation is ALREADY supplied | PARABOLA_CONCEPT_PRESENT; EQUATION_RECOVERY_PENDING |
| Build, differentiate and optimize objective with admissible domain | G12 B02: THPT-G12-CHI-B02-C03 / P03 / A01 / W02 | Check critical points and endpoints, explain open/closed boundaries; the Written optimization example uses a rectangle | OPTIMIZATION_AND_DOMAIN_PRESENT; DISTANCE_COMPOSITION_PENDING |
| Distinguish Euclidean metric from coordinate sums | G12 B08: THPT-G12-B08-W05 | Derive and interpret point-to-point norm in 3D, not L1 path length | DISTANCE_METRIC_PRESENT; CURVE_TO_CIRCLE_MODEL_PENDING |
| Interpret a diagram to bound curve and choose target boundary distance | None of the inspected examples ALONE demonstrates the entire school-problem chain | Need school-issued figure and full inspection of other D2/D3 applications | INTEGRATED_TRANSFER_UNDETERMINED |

**Finding, not verdict:** it is FALSE to say the existing SLM lacks parabolas or bounded optimization. The inspected items genuinely teach these underlying concepts. No exact integrated source item is demonstrated among these inspected rows, but absence in a sample is not proof of a curriculum-wide gap. Check G10 ChVI B16 complete concept-first content, G12 B01–B05 D3, the original school diagram and at least two more normal Hanoi semester sources before any supplementation request.

### A source custody

- G10 ChVI consolidated V2 author source at PR head 7ed565eb1e85345f35013cb4bc9150067d7ee248: prototypes/thpt/content-drafts/Temp_G10_SGK_CHVI_FULL_R04_CONSOLIDATED_AUTHOR_SOURCE_20261105.md; Git blob 3f3d32c3bfd13634dad033970e944a3623cb5f14. PRESERVE old HPT- canonical item IDs.
- G10 ChVII reviewed formative JS: docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js; Git blob 2b191d7abba7a4f5bd79d4c122673cd53a45495b. Eight B22 D3 items inspected in this R10.
- G12 ChI reviewed public bank: docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json; Git blob 4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a. Twelve B02 items directly inspected.
- G12 ChII approved source: prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md; Git blob 856a37bd16d2746ffc2e12906de18d1f4338a3b6.

## 3. Case B — G10 HKI applied travel-time model: solve a triangle, then multiple segment travel times

Reference is a secondary web excerpt, NOT verified to be a particular school Part IV Written item. Reported task chain: identify a triangle from angles/length, obtain inaccessible sides using trigonometry, split route into segments, convert units, sum time = distance/speed for differing speeds.

| Required method | Real approved source evidence | What it proves | Audit status |
|---|---|---|---|
| Choose sine rule from two angles and one side | THPT-G10-B06-P01 and THPT-G10-B06-P03 | Learner can practice side reconstruction and sine rule | SINE_RULE_PRESENT |
| Physical/inaccessible-distance triangulation | THPT-G10-B06-P05 | Actual application reconstructs distances across an inaccessible region from a 100m baseline and viewing angles | REAL_WORLD_TRIANGLE_MODEL_PRESENT |
| Multiple calculations from one physical triangle, with interpretation | THPT-G10-CHIII-W06-ANCHOR | Approved Written covers triangle validity, cosine rule, Heron, radii and land-covering costs | MULTISTEP_TRIANGLE_APPLICATION_PRESENT |
| Combine two or more geometric segment lengths and speed/time across changing rates | No identical multi-stage travel-time item identified among those eight B06 Core/Practice questions and W06 | Could occur in other approved chapter examples/SGK applications; full outcome-level D1–D4 not yet exhausted | COMPOUND_SPEED_TIME_TRANSFER_UNDETERMINED |

**Finding, not verdict:** It is FALSE to say G10 lacks a real-world sine-rule application; B06-P05 is a genuine practical triangulation task. The separate task of moving from reconstructed route lengths to total trip time remains an evidence-check candidate, not a confirmed G10 deficiency. Need actual source diagram and several ordinary Hanoi semester papers before prioritizing a new Written.

### B source custody

- G10 ChIII reviewed formative JS docs/assets/javascripts/thpt-chiii-reviewed-formative-v1.js, Git blob 413d63fecc8b984a429cba99a5d170828384eab5; eight B06 Core/Practice records inspected.
- G10 ChIII consolidated R03 author source prototypes/thpt/content-drafts/Temp_G10_SGK_CHIII_FULL_R03_CONSOLIDATED_SOURCE_20261105.md, Git blob 9d186b2eb8d1c8250a716014beae3021625a6f6c at commit a3eb8f1133c588b34fbdcd7c7ce70c7f1f31e473; existing canonical THPT-G10-CHIII-W06-ANCHOR includes the contextual triangle calculation.

## 4. Evidence decision and next required gate

- Baseline 31 G10 + 83 G11 + 124 G12 = 238 already-approved D4 IDs; no duplicates, item edits or changes to old rubrics/answer/NotebookLM receipts.
- This study compares source-locked method practice; it does not infer that an exact school exam exercise must be cloned in SLM. Existing successful learning outcomes can transfer to a new real-world story.
- Both candidate chains are marked INTEGRATED_TRANSFER_UNDETERMINED. No COVERED, PARTIAL_COVERAGE or COVERAGE_GAP verdict issued.
- Obtain school-issued exam PDFs (currently blocked), real question ID, code-specific key and picture; inspect remaining SGK examples/application and at least two additional independent ordinary Hanoi HKI/HKII papers within the CT GDPT 2018 cohorts.
- Only if meaningful gaps remain after D1–D4 per-outcome crosswalk should AUTHORING prepare an evidence-backed minimal supplement proposal for owner approval. Any genuinely new mathematical material goes to targeted independent NotebookLM review per existing DELTA_C; no re-review of frozen PASS and no Topic implementation/RELEASE/merge/deploy in this packet.
