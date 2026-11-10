
**Owner-approved operational V2 extension (03/11/2026):** `SGK_EXPERIENCE_SUPPLEMENT / SGK_EXPERIENCE_SUPPLEMENT` may use the same `SLM-THPT-QUALITY-ONE` Q01–Q18, exact immutable source/receipt/one V2 handoff/one ready manifest and REGISTER. It is not a separate chapter or Topic; `PRIVATE_RD1_COUNT=0`, `OFFICIAL_READINESS=NOT_CLAIMED`, `CLIENT_SELF_CHECK_NO_MASTERY`. The extension is AUTHORING handoff authority only; website merge/deploy requires independent RELEASE AP/R/CI and owner permission. Original dated rules below retain their historical scope.
# THPT — Two-lane source-locked handoff & release contract v2.0 (2026-11-02)

**Owner decision:** 02/11/2026. **Repository:** `TMA2015/self-learning-math`. **Roles:** AUTHORING = nhánh phát triển học liệu; RELEASE = nhánh phát hành. **Status on 02/11:** Math release automation PAUSED (task `6ae0530a4aa881918360a03e87887990` disabled); no automatic merge/deploy during pause.

This contract is operational; it supplements rather than replaces current Project Sources 08 (dual paths, canonical bank), 06 (NotebookLM Temp_ delivery), 07 v1.1 (delta), S1 KNTT SGK/SBT, Issues #675 (whole chapter), #691 (concept-first), #662 (Final Submit), and `AGENTS.md`. In conflict, owner latest decision and those governing sources prevail.

## 03/11/2026 owner operational supersession — G11 RELEASE only

The 02/11 PAUSED snapshot and older wording below are **historical**, not an active ban on SGK G11 release after the explicit 03/11 owner restart. No independent standard is created: follow `SLM-THPT-QUALITY-ONE` Q01–Q18 and the dated [G11 RELEASE operating rules](release-queue/G11_RELEASE_OPERATIONS_20261103.md). Authoring handoffs remain source-locked and academic-only. RELEASE has conditional permission to merge/deploy G11 after full AP/R/CI, not permission to skip any gate. Source-locked V2 manifests may remain on an AUTHORING Draft while RELEASE stages immutable bytes on its own branch; the absence from `main` does not by itself invalidate a qualified handoff.

**Q16 owner Issue #662:** the browser-based `CLIENT_SELF_CHECK_NO_MASTERY` UI, source references, Final Submit and technical QA belong to RELEASE. Original reviewed public canonical Practice IDs may be presented again by `placement` as voluntary self-check, without duplicating item records, and with no independent assessment/Mastery evidence. Protected RD1 and official independent chapter Readiness still require separate clearance. Missing JS/route/Final Submit from an already-reviewed source is `BLOCKED_BY_RELEASE`, **not `BLOCKED_BY_AUTHORING`**. Never demand new AUTHORING questions unless there is a documented academic coverage/answer/rubric/source defect or new material delta.

**Handoff queue and auditable outcomes:** evaluate 9 chapters independently, skip packet-specific blockers and then evaluate the next, plus the owner-original SGK supplement pp99–109 (distinct packet, not Chapter X). Declare `PUBLISHED_P1` only with merge+deploy+Pages proof, `RELEASE_PROGRESS` for real commits/QA change, `BLOCKED` with owner/Qxx/ID/evidence, or `NO_CHANGE` with no redundant GitHub comments. Final G11 automation stop requires **nine chapters plus the supplement** P1, not 9/9 alone.

## I. Clear accountability and definitions

1. **AUTHORING exclusively owns academic correctness and teachability:** S1 chapter scope; RD0 outcome matrix; full D1–D6; PED1–PED6 from problem/motivation → intuition → mathematical definition and assumptions → when/why → worked reasoning → first attempt/application and remediation; Core/Practice/Application; Written/Anchor; diagram/SVG; mappings, rubrics; private RD1 candidate and exposure policy. Check pedagogical sequencing *before* the final NotebookLM chapter review. Review exact complete chapter in one batch where feasible; correct material deltas; resolve P0/P1 and source uncertainties; source-lock public/private snapshots. Academic source is NOT completed merely because all IDs exist or correctness-only PASS.
2. **RELEASE exclusively owns integration and user-facing QA:** accept only valid canonical `ready/PACKET_ID.md`; integrate source unchanged with original `item_id` and shared Written/Anchor; test learner flow, AP1–AP5 on rendered UI, responsive, MathJax/SVG, Final Submit, no pre-submit hints/answer/correctness/AI, no accidental Mastery/assessment-evidence writes, regression of THCS/Golden R4/deep links/Firebase/Gemini. Own R1–R5 and P1/P2. No silent rewriting of math.
3. **NotebookLM is independent academic reviewer**, not the publisher and not auto-authorizing a changed snapshot. Academic review and concept-first pedagogical review must both have documented scope, outcome/item reconciliation, blocker severity and exact immutable source receipt. A reviewer receipt based on display alias must be mapped rigorously to canonical source. Absent, incomplete, disputed or changed source = HOLD, never inferred PASS.
4. `ACADEMIC_PASS` is snapshot-bound; `PED_PASS` verifies explainability; `CONTENT_READY` = signed authoring handoff; `INTEGRATION_CANDIDATE` ≠ `RELEASE_READY`; `DEPLOYED_P1` requires live page and asset verification, `P2` requires actual-device evidence. Neither authoring nor CI may grant Academic PASS on its own.

## II. Required single-packet authoring handoff (A1–A7 plus PED)

Use **one PACKET_ID per whole SGK chapter** (G10 → G11 → G12 in chapter order; Topic only after SGK according to #675). Before claiming `CONTENT_READY`, AUTHORING must deliver together:

- **S1 and freeze:** exact SGK/SBT KNTT book/chapter/page ranges verified, chapter learning outcomes and explicit excluded scope; canonical public source file path plus Git blob SHA **and** private RD1 SHA-256/ID count metadata (never publish private stems/keys/rubrics in handoff); content version/commit.
- **Academic register:** actual `LESSON_IDS`, `OUTCOME_IDS`, `PUBLIC_ITEM_IDS` (Core/Practice/Written/Anchor) and their outcome/placement/role mappings; D1–D6 evidence by lesson/outcome, unique canonical IDs and answer/solution/rubric verification, variety beyond changed numbers.
- **Pedagogical register:** PED1–PED6 evidence by outcome/lesson; concept-first starting narrative, explanation of prerequisite vocabulary, guided figures, worked examples with WHY, initial independent attempt and remediation. Not satisfied merely by number of cards or Academic correctness verdict.
- **Review receipts:** one exact-snapshot independent NotebookLM Academic verdict **and a separate pedagogical verdict** (may be within one chapter review batch); source/expected/reviewed IDs and P0/P1/P2; full original verdict and its immutable Git blob path/SHA; `DELTA_A/B/C/D` ledger, affected IDs, receipt of any targeted DELTA_C re-review and closure. Material academic changes invalidate earlier PASS only for affected scope until re-reviewed. No self-issued Academic PASS.
- **Readiness honesty:** private RD1 custody + reviewed scope; `ASSESSMENT_MODE` and exposure boundary, whether a CLIENT_SELF_CHECK_NO_MASTERY variant is prepared for release per #662; distinguish this from independent `SGK_CHAPTER_READINESS`. Only RELEASE decides public client runtime after QA. No pre-submit leak in UI; client-visible keys after Final Submit, no Mastery or official assessment credit.
- **Signed readiness:** `BLOCKERS: NONE` for all academic/PED/source gates; exact authoring PR/commit and explicit handoff link. Record unresolved AP2–AP5 runtime checks as RELEASE-owned, not fraudulent authoring PASS.

The canonical handoff belongs in `prototypes/thpt/release-handoffs/` (template `HANDOFF_V2_TEMPLATE.md`); academic drafts in `content-drafts/`; immutable review receipts in `review-packets/`. The **only** ready payload is `release-queue/ready/PACKET_ID.md` matching one row of `REGISTER.md`, containing receipt pointers and academic source blob. `ready/` must NOT contain narrative handoff documents. A1–A7 + academic + PED + source custody must be complete before promotion. New full chapter SGK handoffs should declare `FULL_LEARNING_PATH` with self-check mode specified honestly, not falsely call client-side self-check scored independent mastery. Prior `PUBLIC_FORMATIVE_ONLY` releases remain historically scoped, not retroactively renamed.

## III. Mechanical V2 gate for new READY manifests

`scripts/test-thpt-handoff-gate-v2.cjs` runs on every PR and checks **all existing V2** `release-queue/ready/*.md` source/receipt hashes (including when the manifest is unchanged); new ready packets must adopt V2, while legacy packets remain scoped; it verifies that (a) protocol fields are present, (b) `SOURCE_PATH` and `REVIEW_RECEIPT_PATH` exist and match their declared **Git blob SHA** using `git hash-object`, (c) canonical handoff exists, matching `PACKET_ID` and source/review blob, (d) source/academic/PED verdicts explicitly PASS with six PED signoff rows checked and no blockers, (e) actual LESSON/OUTCOME/PUBLIC_ITEM IDs appear in the frozen academic source and a distinct register maps each item→outcome, (f) the exact source Git blob is explicitly cited in the review receipt and no placeholder or invalid assessment scope. Existing old ready manifests are grandfathered until explicitly re-handovered (do not rewrite historical certificates). The existing `test-thpt-release-queue.cjs` continues to enforce REGISTER/A/R/P consistency on **all** packets.

**Limit of CI:** structural/source SHA validation cannot prove math or classroom pedagogy; independent NotebookLM review, source audit and rendered QA are separate evidence. No script can guarantee truth of a falsified receipt. Never describe green CI alone as Academic PASS. Branch protection / required checks on `main` are currently not enabled; enforcement across direct pushes needs owner/admin protection configuration.

## IV. Release gate and blocker return

1. RELEASE checks ready manifest, source/blob and receipt before spending integration effort. Missing source, unreviewed PED, broken identity, no authoring manifest => `BLOCKED_BY_AUTHORING`, with specific `PACKET_ID/LESSON_ID/OUTCOME_ID/ITEM_ID`, defect and requested delta; do **not** attempt a self-review or silently change math to make CI green.
2. RELEASE creates one chapter integration PR at a time (WIP=1), uses *public* authored source only; then AP1–AP5, R1–R5, exact-final-HEAD QA and link/safety checks. A technical UI-only issue is `DELTA_A_UI` and stays in RELEASE. A source-equivalent `DELTA_B` must have proof and be logged. Material academic/PED `DELTA_C` returns to AUTHORING for targeted NotebookLM review; serious `DELTA_D` BLOCKER stops release. No automatic whole-chapter re-review for small proven A/B edits.
3. Report blocker in source authoring PR + cross-link the release PR and Issue #698; put `OWNER_LANE`, `BLOCKED_BY`, affected IDs and next action. AUTHORING returns one exact corrected source/receipt/delta, then RELEASE reruns its verification and restages **on the revised SHA**, not old clearance.
4. Release is conditional on green full QA at exact final PR HEAD, current `main`, PR mergeable, R1–R5 complete, explicit owner authorization consistent with current pause, no privacy violations. No merge/deploy during current owner pause, even if code looks ready. `P1` confirms actual `main`/Pages/routes/JS/assets after release; `P2` is not inferred from simulated viewports. Never publish private held-out archive or turn on Mastery.
5. Keep legacy G10 content frozen per #691/#675 except verified P0 incident; prioritize fixing the handoff for G11 ChI PR #697, then G11 ChII–IX and G12 in order. Do not bypass stalled ChI by bulk-merging source author PRs.

## V. No fake cross-chat coordination, restart and audit

Separate ChatGPT conversations do not automatically transmit conversational state or execute work in each other. GitHub issues/PRs and this contract are the durable mailbox: a new AUTHORING conversation must read `AGENTS.md`, current issue and handoff; RELEASE must do the same. Owner may paste the designated authoring prompt; it is a coordination trigger, not a manual data-transfer burden. Do not claim a message has been delivered to the other assistant solely because GitHub was updated.

Run pause stays in force. **Reactivation requires a new owner decision** after proof of one complete chapter (G11 ChI) progressing source locked → ready manifest → rendered QA → authorized release/P1, with meaningful blocker reporting. While paused, all governance PRs may be reviewed/merged only within explicit governance scope; no academic content release.

## VI. Current checkpoint (historical 02/11/2026; verify live before work)

- Automations `Phát hành Toán THPT` disabled; Issue #698 has pause/analysis. `main` at the time: `1cb772558e82d212ad0539565fd1660039058e04`. No new G11 learning content deployed.
- G11 ChI integration PR #697 Draft/HOLD; technical CI success on `7185ce0b...` **does not** close targeted PED Delta_C, AP, Final Submit or ready manifest. G11 authoring source PRs #681/#683/#685/#688/#690/#692/#693/#694/#695 not equivalent to site release.
- Academic proofs must be returned by AUTHORING, not invented by RELEASE. G11 ChI is the pilot to close the exact source-custody gap.


---

## Q18 ENRICHMENT V2.1 PROPOSED — chưa có hiệu lực (10/11/2026)

**STATUS: `GOVERNANCE_DRAFT_ONLY / STANDARD_CONFLICT_HOLD`.** Đính kèm đề xuất [STANDARD_CHANGE_REQUEST Q18](standard-changes/STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110.md) tại [PR #804](https://github.com/TMA2015/self-learning-math/pull/804). Phần hợp đồng V2 hiện hành phía trên **vẫn bắt buộc** cho đến khi owner duyệt điều khoản, Source 07 v1.1 được đồng bộ theo thẩm quyền và CI có test trên đúng HEAD rồi merge. Không tự mở quyền phát hành hay đổi quy tắc chấm.

### Trường hợp đủ điều kiện cơ chế tự kiểm (Knowledge SGK đã phát hành, baseline Academic PASS theo snapshot)

- Cùng `SLM-THPT-QUALITY-ONE` Q01–Q18; `Q18_VERIFICATION_MODE: OWNER_SELF_VERIFIED_ENRICHMENT` và `STANDARD_VERSION: 2.0.0` **chỉ hợp lệ sau ngày hiệu lực**; không tự nhận `ACADEMIC_VERDICT: PASS` hoặc `PEDAGOGICAL_VERDICT: PASS` từ reviewer độc lập khi reviewer không tồn tại.
- Học liệu gốc phải có `BASELINE_SOURCE_BLOB` và `BASELINE_REVIEW_RECEIPT_BLOB` **Academic PASS** thực sự gắn đúng scope; **PED reviewer cũ có thể không có/không bao quát**, phải ghi `BASELINE_PED_REVIEW_STATUS` thật và tự kiểm PED mới **cho mọi outcome đã thay đổi**, tuyệt đối không gán nhãn PED PASS cũ khi không có; tệp Kiến thức mới có `ACADEMIC_SOURCE_BLOB` (Git SHA của đúng tệp), hình mới có `FIG_ASSET_BLOB`, tất cả đối chiếu được byte thực tế.
- Với Knowledge SGK đã nghiệm thu, **nhánh trực tiếp nâng cấp nguồn (RELEASE theo phân công chủ dự án)** chịu trách nhiệm lập/ký bằng chứng toán/PED theo từng delta, không mặc định chuyển sang AUTHORING. Có một `SELF_QA_EVIDENCE_RECEIPT_PATH` và `SELF_QA_EVIDENCE_RECEIPT_BLOB` bất biến, chứa mọi `LESSON_ID`, `OUTCOME_ID`, `DELTA_ID`, ví dụ/hình thay đổi, giả thiết và lời giải/tính kiểm ngược, chứng cứ S1, PED, P0/P1/P2 và chứng cứ đóng lỗi. Reviewer truyền thống không bắt buộc với phần tự kiểm đủ toán và PED hiện hành; lỗi chưa rõ, đổi Core/đáp án/rubric, Q15/Q16/RD1 phải chuyển sang independent review.
- `ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY`, `OFFICIAL_READINESS: NOT_CLAIMED`, `MASTERY_ACTIVATION: NO`, `RELEASE_AUTHORIZATION: NO` trong **handoff**. Quyền phát hành G10 đã được owner chấp thuận riêng khi đầy đủ QA; không viết quyền triển khai vào hồ sơ nguồn.
- Handoff cần một manifest `ready/` và REGISTER row theo scope SGK Knowledge update; **không giả là `FULL_LEARNING_PATH` mới hoặc thành `TOPIC_READY`**. Hợp đồng hiện tại `scripts/test-thpt-handoff-gate-v2.cjs` chưa chấp nhận profile này, phải có bản nâng cấp có kiểm thử âm trước khi phát hành.

### Cổng không được bỏ khi chuyển cơ chế

1. Bằng chứng self-QA là **việc kiểm tra tính đúng toán thực**, không phải chỉ metadata/hash hoặc render PASS; script CI chỉ xác minh schema/fidelity và không cấp Academic PASS.
2. Không nới khóa `SOURCE_BLOB` cũ: đóng source-lock trên bản mới **chỉ sau khi receipt mới khớp SHA, phiên bản chuẩn đã được duyệt và hợp đồng V2 được nâng cấp chính thức**.
3. Dù thay đổi Knowledge, vẫn chạy nguyên AP1–AP5, R1–R5, Q15/Q16 (Final Submit, RD1 private, không ghi Mastery trái phép), THCS/THPT Golden, responsive và deep links trên HEAD cuối.
4. Bất kỳ `STANDARD_CONFLICT_HOLD`, lỗi P0/P1 chưa giải quyết hoặc thiếu owner authorization của phạm vi release nào cũng dừng đúng phần; **không tự merge/deploy**.

**Migration order:** chuẩn Q18 chính thức → đồng bộ Source 07 v1.1 theo quyết định owner → nâng hợp đồng/handoff template và CI âm/dương trên nhánh riêng → RELEASE (chủ biên Knowledge) tự kiểm từng delta và ký receipt → CI/source-lock + RELEASE QA độc lập về kỹ thuật → phát hành đúng quyền owner. Snapshot cũ giữ PASS lịch sử.
