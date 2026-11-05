# Q18: Root cause and prevention of wrong NotebookLM source identity — 05/11/2026

DOCUMENT_TYPE: AUTHORING_OPERATIONAL_RCA_AND_PREVENTION
CASE: G10-SGK-CHVI-R02-20261105
SCOPE: SGK_CHAPTER_AND_TOPIC
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
NEW_QUALITY_STANDARD: NO
BINDING_SOURCES: Q18, Project Source 06, Project Source 07
TRACKING_ISSUE: https://github.com/TMA2015/self-learning-math/issues/760
AFFECTED_AUTHORING_PR: https://github.com/TMA2015/self-learning-math/pull/756
PREVENTION_IMPLEMENTATION: DRAFT_NOT_MERGED
CURRENT_CHVI_Q18: HOLD_R02_EXTERNAL_REVIEW_SOURCE_IDENTITY
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## A. Verified facts, not guesses

1. R01 original five-Temp archive was recovered with exact 26,884-byte ZIP SHA-256 704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960 and all five original member hashes matching the historic receipt. Its review PASS is preserved on its original scope.
2. Canonical R02 Git blob 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d contains 93,198 UTF-8 bytes, 812 LF and zero CR. External reviewer reports a 92,640-byte mounted source / reported blob 116963cd526cc53877a3daeff70e9b7a591a3664, not retrievable from this repo. The 558-byte discrepancy is real in the two *reported* sizes but cannot be attributed to newline conversion. The actual 92,640-byte raw file is missing.
3. The R02 reviewer report repeats a historical R01 count of 48 Core/Practice + 6 Written, conflicting with the authoritative R01 receipt: 28 Core/Practice/Application + 8 Written/Anchor + 18 legacy chapter questions = 54 unique IDs. The 18 legacy chapter questions are now public client selfchecks, not independent protected RD1.
4. Across R02 → R03 immutable Git snapshots, the 19/19 PED1–PED5 sections and the 19/19 first-try stems, answers, reasoning are preserved. R03 changes 12 remedial return routes and reuses canonical THPT-G10-B18-C01 instead of duplicating TRY17. That author-owned comparison does not prove what the external R02 reviewer mounted.
5. Project Source 06 correctly requires real Temp_ Markdown/TXT plus a 3–6 sentence review prompt. Project Source 07 correctly protects PASS under classified deltas. Neither by itself performs a deterministic Git-object-versus-exported-file verification *at the last author-controlled handoff boundary*.

## B. Root-cause chain and uncertainty

**Confirmed root cause of repeated manual audit work:** the AUTHORING transport/receipt boundary did not automatically bind a particular immutable Git blob to the actual file uploaded for review, and the reviewer report lacked reliable independently inspectable file identity. Same-looking filenames, reused metadata, and changes R02→R03 then forced repeated post hoc comparisons to compensate.

**Possible contributing causes, NOT independently proved:** stale Temp file chosen by mistake; file regenerated/re-serialized after source review; reviewer ingestion altering bytes; reviewer copying stale item counts; a tool producing inaccurate blob metadata. We cannot name which one produced the 558-byte discrepancy without the original mounted bytes.

These are provenance/custody failures, not evidence that the academic mathematics was wrong. No new academic standard is necessary.

## C. Immediate preventive implementation (operational only)

Utility: scripts/authoring_review_source_lock.py
Offline tests: scripts/test_authoring_review_source_lock.py

| Gate | OWNER / AUTHORING action | Fail-closed condition |
|---|---|---|
| PREPARE | Commit one public-safe canonical source. Export Temp_PACKET_GITBLOB12.md directly from the verified committed Git object; auto-generate local AuthorLock receipt with full Git blob, SHA256, bytes, packet, scope and source text anchors. | Worktree content differs from Git object; unexpected standard/scope/packet; missing outcome; non-MD/TXT; differing existing target |
| PREFLIGHT | Verify exact file to be uploaded against original Git object and receipt immediately before owner upload; keep filename containing the blob prefix unchanged. | Any one-byte difference, swapped filename or inconsistent receipt |
| REVIEW | Add exactly that Temp_ source, the five Permanent Sources v2.1, and S1. Ask reviewer to quote its perceived source name plus first/last nonempty source lines and correct packet ID, then independently review each affected item/outcome. | Reviewer cannot identify source or anchors, or claims incorrect scope: REVIEW_SOURCE_MISMATCH_HOLD. Never ask NotebookLM to execute hashing or Git |
| AFTER REVIEW | Use check-report to validate four source markers, then author independently inspects academic/PED verdict, S1, IDs, source receipt, P0/P1/P2 and minimal delta. | Incorrect/missing report source markers, missing review scope or other contradicting evidence. Check-report PASS alone is NOT Academic/PED PASS |
| DELTA | Keep previous immutable verdict; metadata/UI or sourced equivalent changes get log/author QA. Only meaningful Delta C/D contents need targeted independent review. | Changes of math/conditions/outcome/answer/rubric or unexplained discrepancies without scoped review |

Distinguish three levels: AUTHOR_DELIVERED_BYTES_LOCKED_ONLY means author-created file raw bytes match their canonical source; REVIEWER_SOURCE_NAMED_WITH_TEXT_ANCHORS means reviewer independently named and quoted source; MOUNTED_BYTES_EXACT_PROVEN means real reviewer-mounted raw bytes can be compared, which is normally not possible and must NOT be claimed without evidence. There is NO magical guarantee about NotebookLM internal preprocessing. Lack of an arbitrary reviewer-generated SHA alone must not trigger repeated review; genuine contradictory source evidence must HOLD.

### Exact commands (from local repo checkout)

Public-safe SGK example:

    python scripts/authoring_review_source_lock.py prepare --repo . --source prototypes/thpt/content-drafts/Temp_EXAMPLE_SOURCE.md --packet EXAMPLE_PACKET --scope SGK_CHAPTER --outdir ../Temp_authoring_delivery

    python scripts/authoring_review_source_lock.py preflight --repo . --receipt ../Temp_authoring_delivery/AuthorLock_EXAMPLE_PACKET_<blob12>.txt --file ../Temp_authoring_delivery/Temp_EXAMPLE_PACKET_<blob12>.md

One file: supply one actual Temp download. Two files: two downloads. For 3+ real review files, each must pass preflight individually, then use the script bundle command with --files path1 path2 path3 --receipts receipt1 receipt2 receipt3 --output Temp_ReviewPack.zip; owner unzips and selects each Temp_ member in NotebookLM, NEVER the ZIP itself. AuthorLock metadata stays author-owned and is not a sixth Permanent Source.

Protected RD1 is different: NEVER commit full private questions/answers/rubrics to this public repo just to get a Git blob. Use prepare-private --repo . --source /secure/private.md --packet PRIVATE_PACKET --scope TOPIC --outdir /secure/transfers and preflight; both source and transfer destination must be outside the public repo. Only permitted metadata/hashes can appear in public audits. This private source custody tool does not grade a test.

NotebookLM review response should begin with these exact four labels and values read from its SOURCE, followed by academic/pedagogical findings:

    REVIEW_PACKET_ID: <from file>
    REVIEW_FILE_BASENAME: <exact Temp_ filename>
    REVIEW_SOURCE_FIRST_LINE: <verbatim actual first nonempty source line>
    REVIEW_SOURCE_LAST_LINE: <verbatim actual last nonempty source line>

Sample short prompt (4 sentences, tailored per batch):
> Hãy phản biện độc lập [PACKET_ID] trên đúng file Temp vừa thêm, theo SLM-THPT-QUALITY-ONE Q01–Q18, đúng 5 Permanent Sources THPT v2.1 và SGK/SBT S1. Ghi trước tiên REVIEW_PACKET_ID, REVIEW_FILE_BASENAME, REVIEW_SOURCE_FIRST_LINE và REVIEW_SOURCE_LAST_LINE bằng cách chép trực tiếp từ tệp nguồn; nếu không thấy đúng file hãy trả REVIEW_SOURCE_MISMATCH_HOLD, không đoán mã hash hoặc dung lượng. Đánh giá từng bài, outcome, item, SVG/HELP mới trong phạm vi Delta C; trả SOURCE_RECEIPT, Academic/PED verdict, P0/P1/P2, MINIMAL_DELTA và những ID chưa xem. Không suy rộng PASS sang nội dung khác hay cho phép CONTENT_READY, merge, deploy, Final Submit hoặc Mastery.

After receiving a real report saved to Markdown or TXT:

    python scripts/authoring_review_source_lock.py check-report --receipt ../Temp_authoring_delivery/AuthorLock_EXAMPLE_PACKET_<blob12>.txt --report reviewer_report.txt

This example does NOT replace the Source 06 requirement to deliver actual real Temp file(s) + tailored short prompt together on the actual review turn.

## D. TOPIC readiness before any new Topic authoring is authorized

- TOPIC must be independently scoped with LEARNING_PATH: TOPIC, its own packet/source/outcomes and exactly three learning sections: Kiến thức, Luyện tập, Tự kiểm tra; no separate Core. Crosslink from SGK supports but does not substitute Topic knowledge.
- Reuse shared canonical item_id with distinct placement/role, not cloned stem/answer/rubric. Original SGK review receipt can be cited only for exact shared item snapshot; SGK PASS is never automatic TOPIC PASS.
- Run the new authoring PREPARE / PREFLIGHT / REVIEW / AFTER REVIEW / DELTA gates on every new Topic review. Public-safe RD0 and private RD1 follow separate source protection paths.
- Stop immediately if a reviewer sees the wrong file; do not keep making reviewer solve Git/hash discrepancies or retry full chapters on unchanged content.
- This preventive implementation is on a separate AUTHORING draft branch and does not automatically affect released code, website, owner governance, Firebase or Mastery.

## E. Test evidence (synthetic only, not live CI or academic PASS)

Local offline execution on 05/11/2026:

    python scripts/test_authoring_review_source_lock.py -v

Five synthetic regression tests PASS: (1) public exact Git source passes, changing one byte fails; (2) editing uncommitted working source fails; (3) private off-Git source passes and mutation fails; (4) three independently locked sources form a CRC-valid ZIP but changed member fails; (5) report source filename and textual anchor consistency passes and wrong filename fails.

Test suites and script exist in GitHub Draft branch and **are not automatically enforced on main** until approved and integrated. No private RD1 or real assessment content is included in synthetic tests. G10 ChVI PR #756 remains on Q18 reviewer-input HOLD, not CONTENT_READY; do not retroactively promote its R02 verdict from this tool.
