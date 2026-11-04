# G10 ChI R02 — Q18 source-parity re-verification after owner-uploaded NotebookLM correction (04/11/2026)

PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
OWNER_REVIEW_REPORT: Bao_Cao_Dinh_Chinh_Q18_Source_Parity_G10_CHI_PED_BRIDGE_R02_.md
OWNER_REVIEW_REPORT_SHA256: f89f12abcf032c281eaecfc1de6295566699c932572fd449881b9db1b47e4ed9
OWNER_REVIEW_REPORT_GIT_BLOB: 0457dcfc4ee08d1678e42249e92145d28918d2a3
STANDARD: SLM-THPT-QUALITY-ONE v1.1.0, same normative Q01–Q18
SOURCE_ZIP: Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip
SOURCE_ZIP_SHA256: 196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d
SOURCE_ZIP_CRC: PASS
AUTHORING_ACADEMIC_R02: INDEPENDENT_NOTEBOOKLM_REPORTED_PASS
AUTHORING_PED_R02: INDEPENDENT_NOTEBOOKLM_REPORTED_PASS
OFFICIAL_Q01_Q18_CROSSWALK: CORRECTED_IN_UPLOADED_REPORT
REVIEWER_CLAIMED_Q18: PASS
REVIEWER_CLAIMED_SOURCE_PARITY: PASS
INDEPENDENT_Q18_ACCEPTANCE: HOLD_UNRESOLVED_PROVENANCE
ACTUAL_MOUNTED_FILES_AVAILABLE_TO_AUDITOR: NO
CONTENT_READY_R02: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
DELTA_SOURCE_CHANGED: NO

## A. Deterministic author-side QA (original ZIP and Git)

Computed directly from the immutable **4 original ZIP members**, not inferred from reviewer claims. SHA256 over original raw bytes, Git SHA1 blob via `blob {length}\0{raw bytes}`, and a reproducible transform: replace `CRLF` with `LF`, then remove ASCII spaces/tabs before LF or file end.

| File | ZIP bytes | LF / CRLF | Trailing whitespace | SHA256 gốc | SHA256 sau LF + trim | SHA256 mounted trong báo cáo | Khớp? |
|---|---:|---:|---:|---|---|---|---|
| `Temp_G10_CHI_PED_R02_LEARNING_20261104.md` | 30927 | 442 / 0 | 88 | `8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339` | `f0de4f02cbafc5f7836d73046b6b98a5e6ccbb15402bf3e0db46c2ac72ad591e` | `ac04c40e2c65c9876a970d9b7bdeadb639c7e674b9abca1176c17f8ddd058b74` | **NO** |
| `Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md` | 4681 | 38 / 0 | 0 | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `3ab3f215bc8d39c1def2b957f8363c66e7e6697035f8e85369cfce9f1fd93440` | **NO** |
| `Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md` | 2948 | 34 / 0 | 0 | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `058439a852a2e939223fd28d04180ad9de106c2c4a96dac13ca28b1c96a4c0a2` | **NO** |
| `Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md` | 3317 | 32 / 0 | 0 | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `d67bf969b5f03f7aef966e9eff20ffcf9ef28f3de4c9945ee71a4eac7fad44fd` | **NO** |

- The source ZIP contains **LF already in all four files** and **zero CRLF**. Three files (Matrix/S1/Author QA) have **zero trailing-whitespace groups**, and are byte-for-byte unchanged by the claimed normalization pipeline. The Learning file has 88 trailing-space/tab groups, but its normalized SHA still does **not** match the reported mounted SHA.
- All original ZIP member SHA256 and Git blobs match the pinned AUTHORING source on Draft PR #641. The original 18 R01 items / 7 examples / 2 SVG / 4 HELP remain immutable on their previous PASSed source snapshot.
- The NotebookLM corrected report alleges `SOURCE_PARITY=PASS` and attributes hash differences exclusively to LF/CRLF/trailing whitespace; **the stated transformations cannot produce the four claimed mounted hashes** from these four specific source files. The auditor does not have the actual `/workspace/knowledge/` bytes in this turn; hence it cannot establish or reject semantic parity by direct diff. Merely counting 11 outcome IDs, 11 TRY IDs and one HELP is **not a byte-level or content-level equivalence proof**.
- The corrected Q01–Q18 labels in the new report **now match** the official standard: Q03–Q08 D1–D6; Q09–Q14 PED1–PED6; Q15 canonical ID; Q16 RD1/assessment; Q17 two independent paths; Q18 source/review fidelity. This part is closed; do not repeat the old crosswalk HOLD.

## B. Narrow academic and process finding

**Do not revoke the independently reported 11/11 Academic/PED PASS or re-author R01 math** on an unsupported presumption of content drift. But **do not mark Q18/source fidelity independently PASS**: the alleged normalization mechanism contradicts observed ZIP-level facts, and no actual mounted source bytes/diffs were provided. `SOURCE_PARITY=REVIEWER_CLAIMED_PASS_NOT_REPRODUCED`, `Q18_VERDICT=HOLD`, `BLOCKED_BY_AUTHORING=Q18_MOUNTED_SOURCE_DIFF_UNVERIFIED`. Prior original reviews and this new contradictory corrected report must remain preserved intact. No CODE/UI, website changes, V2 handoff, ready manifest, Mastery, merge or deploy in this step.

## C. Required minimum independent proof to close Q18

1. From the same material that NotebookLM actually **reviewed**, export the exact four mounted Markdown byte streams or supply reproducible per-file `diff -u` against ZIP bytes after a *specified deterministic normalization*; include exact file length, SHA256, line count and file identity. A mere named-path checksum or copies of expected SHA values do not prove sameness.
2. If raw mounted files are unavailable, independently re-review the original **unmodified, verified source ZIP** (or exact four source Markdown files retrieved by Git blob) using exactly 5 Permanent Sources v2.1. Return per-outcome 11/11 coverage and source/receipt identifier based on the actual files, without claiming a byte-to-byte comparison not performed.
3. Explain any differences beyond CRLF/whitespace, with concrete affected line/item and math/PED effect. If semantic changes are found, assess only those affected outcomes as Delta C; if only presentation differences are actually proven, document a truthful source-equivalence receipt and Q18 PASS.
4. Keep the two earlier NotebookLM PASS reports and owner-uploaded corrected report immutable. If parity cannot be demonstrated, respond `SOURCE_PARITY=UNPROVEN` / `Q18=HOLD`. No auto-CONTENT_READY or release permission.

## D. Checkpoint

- Previous AUTHORING PR #641 HEAD `1ec60030250d40d8ebfeb7e1f79add2706d6279e` before this archived correction. Check the PR HEAD after commit, and its actual CI status; no claims about CI before exact-head SUCCESS.
- The new reporter wrote `CONTENT_READY=NO`; AUTHORING agrees on current hold. Once independent Q18 is closed, review the **truthful V2 chapter/partial-ped-delta classification**; do not label a two-lesson Delta C as `SGK_CHAPTER / FULL_LEARNING_PATH` unless all source and scope gates pass and owner-approved route applies.
