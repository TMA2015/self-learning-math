# THPT ACADEMIC HANDOFF V2 — TEMPLATE (NOT AN APPROVED PACKET)

**Important:** This is a template only; never mark this document CONTENT_READY, never select it as NotebookLM source, and never place it in `release-queue/ready/`. Fill all concrete evidence in a separate chapter-specific file under `release-handoffs/`.

**Student-first workflow:** Complete and actually audit one coherent SGK chapter or one whole Topic section/full Topic **before** filling this V2 handoff. This file is metadata for cross-lane intake, never learner-facing content. Model B uses natural prose with meaningful mathematics-first section breaks; there is **no requirement** to expose seven WHY/PED headings or reproduce old Markdown structure. Math/source/reviewer evidence belongs to AUTHORING; compatibility with rendered Model B and conversion of historical-only release tests belong to RELEASE. Do not generate another handoff merely because an author fixes a phrase or diagram.

PACKET_ID: REPLACE_WITH_REAL_PACKET_ID
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: REPLACE_WITH_EFFECTIVE_STANDARD_VERSION
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
LEARNING_PATH: REPLACE_WITH_SGK_CHAPTER_OR_TOPIC
RELEASE_SCOPE: REPLACE_WITH_APPROVED_SCOPE
ACADEMIC_SOURCE_PATH: REPLACE_WITH_CANONICAL_PUBLIC_SOURCE_PATH
ACADEMIC_SOURCE_BLOB: REPLACE_WITH_40_HEX
REVIEW_RECEIPT_PATH: REPLACE_WITH_REAL_RECEIPT_PATH
REVIEW_RECEIPT_BLOB: REPLACE_WITH_40_HEX
QUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE
ACADEMIC_VERDICT: PENDING_NOT_INHERITED
PEDAGOGICAL_VERDICT: PENDING_NOT_INHERITED
Q18_VERIFICATION_MODE: REPLACE_WITH_MODE_ALLOWED_FOR_SCOPE
ASSESSMENT_MODE: REPLACE_WITH_OWNER_APPROVED_MODE
BLOCKERS: OPEN

## S1_SGK_SBT_SOURCE
Official KNTT SGK/SBT edition, volume, chapter, *verified* page ranges, RD0 coverage and source evidence. Do not invent pages.

## LESSON_IDS
- REPLACE_LESSON_ID

## OUTCOME_IDS
- REPLACE_OUTCOME_ID

## PUBLIC_ITEM_IDS
- REPLACE_ITEM_ID

## ITEM_OUTCOME_MATRIX
| ITEM_ID | OUTCOME_ID | role / placement | D3/D4/Written |
| --- | --- | --- | --- |
| REPLACE_ITEM_ID | REPLACE_OUTCOME_ID | REPLACE_ROLE | REPLACE_D |

## D1_D6_EVIDENCE
Actual source locations per lesson/outcome for concepts, distinct worked examples, Core/Practice/Application, Written/Anchor, authentic/source evidence, D6 remediation.

## PED1_PED6_EVIDENCE
Provide outcome-scoped evidence for a **natural, continuous teaching narrative**, prerequisite help in context, mathematical meaning before formulas, relevant figure reading, reasoned examples, purposeful first-try/reveal and effective remediation. Do not require mechanical learner-facing WHY/PED headings. Verify Academic/PED via the Q18 mode effective for this scope and exact snapshot.

## QUALITY_Q01_Q18_EVIDENCE

**Chỉ có một chuẩn:** prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md, dùng **VERSION thực hiệu lực trên main** (tên đường dẫn lịch sử không phản ánh version hiện hành). Đây là bảng **chứng cứ QA nội bộ** theo bài/outcome, không phải bảng nội dung học sinh đọc. Điền **đủ đúng 18 dòng Q01–Q18** và chỉ ra nguồn chứng minh toán/PED, reuse, assessment và review đúng mode/snapshot. Khi cổng V2 cho phép bảng Topic compact, dùng đúng nguồn A1–A7 có blob, không chép lại bảng thứ hai.

| Q_ID | LESSON_OUTCOME_IDS | AUTHORING_EVIDENCE | INDEPENDENT_OR_APPROVED_MODE_RECEIPT | RELEASE_RECHECK |
| --- | --- | --- | --- | --- |
| Q01 | REPLACE_WITH_SCOPE | REPLACE_WITH_REAL_S1_AND_OUTCOME_EVIDENCE | REPLACE_WITH_SCOPE_VERDICT | REPLACE_WITH_RECHECK |
| Q02 | REPLACE_WITH_SCOPE | REPLACE_WITH_REAL_DEPTH_AND_ITEM_EVIDENCE | REPLACE_WITH_SCOPE_VERDICT | REPLACE_WITH_RECHECK |
<!-- Bổ sung Q03–Q18 đúng thứ tự, không trùng dòng và không dùng placeholder khi muốn READY. Không thêm điều Q19. -->

## REVIEW_SOURCE_RECEIPT
Use the **current effective standard VERSION** and the exact source blob. For new Topic, new questions/outcomes/conditions/keys/rubrics/RD1, Q18 independent Academic + PED review remains required per scoped delta; where a formally approved alternative Q18 mode exists, record its exact evidence and limits (current v2.0 only grants SGK Knowledge enrichment with owner-delegated self-verification, not new Topic). If NotebookLM independent review is actually requested, use **exactly five Permanent Sources THPT v2.1** and S1, and deliver a real Temp_ Markdown/TXT file plus short prompt per Source 06. Preserve reviewer P0/P1/P2, expected/reviewed IDs, and exact source/receipt. Do not call an internal SHA check a reviewer PASS.

## DELTA_LEDGER
Class A/B/C/D for the **whole authored unit**, with affected lesson/outcomes, real math/PED source proofs, and **review only affected Delta C per the effective Q18 mode**; A/B are source-equivalent and do not automatically require another NotebookLM round. Keep one ledger per completed section/topic, not one QA file for every sentence or image.

## PRIVATE_RD1_CUSTODY_METADATA
Private bank item COUNT, SHA-256, custody/accessibility, assessment outcome mapping, exposure plan. **Never paste private stems, answer keys, rubrics or full private bank into GitHub.** Release lane must authorize any public self-check variant separately.

## AUTHOR_SIGNOFF
Author signoff after completing a **whole unit of learning** (SGK chapter or Topic section/full topic): exact immutable public source and approved review scope/mode, outcome/item register, Q01–Q18 evidence, receipt and private custody metadata. Only CONTENT_READY when academic/PED and data-safety blockers are truly closed; no merge/deploy permission is conferred.

## RELEASE_ACCEPTANCE
Release must validate this against the canonical `ready/PACKET_ID.md` and run live learner/technical QA; this document alone is NOT CONTENT_READY and never grants release permission.

**Design/test alignment:** On a Model B release candidate, do not demand old `## 1. Kiến thức SGK`, `## 2. Ví dụ`, fixed PED labels, FNV or formula counts as proof of good teaching. Such checks may remain scoped to the historical source snapshot only. RELEASE owns a coordinated workflow migration to verify mathematics/S1, meaningful explanation, the actual rendered user journey, protected assessment, Firebase/learner data and actual device QA. Report back to AUTHORING only a real content/source defect tied to lesson/outcome and evidence, not a technical Markdown-test contradiction.
