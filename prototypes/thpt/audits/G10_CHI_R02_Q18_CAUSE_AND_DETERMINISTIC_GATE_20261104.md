# G10 ChI R02 — root cause and deterministic Q18 source-custody gate (AUTHORING)

AUDIT_ID: G10-CHI-R02-Q18-DETERMINISTIC-ROOT-CAUSE-20261104
DATE: 2026-11-04
PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
STANDARD: SLM-THPT-QUALITY-ONE v1.1.0 Q01–Q18 (NO STANDARD CHANGE)
SCOPE: B01-B02, 11 outcomes, 11 FIRST_TRY, one new D6 HELP, immutable R01 preserved
ACADEMIC_R02: NOTEBOOKLM_REPORTED_PASS_ON_MOUNTED_TEXT
PED_R02: NOTEBOOKLM_REPORTED_PASS_ON_MOUNTED_TEXT
CANONICAL_ZIP_TO_GIT: PASS
REVIEWED_MOUNTED_TO_GIT: UNPROVEN
Q18_VERDICT: HOLD
CONTENT_READY_R02: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## What actually went wrong (not a confirmed data alteration)

The 4 Markdown files AUTHORING compressed into one ZIP were byte-identical with the four Git blob objects. NotebookLM reports of the alleged `/workspace/knowledge/` files give four *different* SHA256 values and different byte sizes; none of those exact mounted bytes has been supplied as an export. The original two independent academic/pedagogical reviewer reports were positive, and the later corrections kept the verdicts, but they did not document a reproducible binding of the *reviewed input* to the author's canonical Git data.

The report's claim that CRLF→LF plus trailing-space trimming explains the mismatch was disproved: all four original ZIP Markdown entries are LF-only and three contain zero trailing whitespace. The latest independent NotebookLM report itself records `Q18=HOLD` and `BYTE_PARITY=UNPROVEN`. There is **no evidence here of a hacked repository, changed student math, leaked RD1 or a corrupt ZIP**. The apparent computed mount paths and hash values are **reviewer assertions that cannot be independently authenticated from a text-only report**; whether NotebookLM reserialized the source, processed a different version or generated incorrect hash claims is unresolved. Do not claim a specific platform bug without actual source bytes.

## Reproducible AUTHORING evidence

A self-contained Python-standard-library verifier is stored at `prototypes/thpt/audits/tools/verify_g10_chi_r02_review_parity.py` (not a new Q18 criterion). Given the immutable source ZIP, it checks the container SHA256, CRC, exact four member names, each member size + SHA256 + *locally computed Git blob SHA1*. It **never asks an LLM to hash a virtual file**. With `--reviewed-dir` it additionally reads four *actually exported* reviewer input files and checks byte identity, with the first differing byte/line displayed. No unproven normalization is accepted as semantic proof.

Command:

```bash
python prototypes/thpt/audits/tools/verify_g10_chi_r02_review_parity.py --zip Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip --json-out author_source_check.json
python prototypes/thpt/audits/tools/verify_g10_chi_r02_review_parity.py --zip Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip --reviewed-dir PATH_TO_ACTUAL_REVIEWER_EXPORT --json-out reviewer_source_check.json
```

**Local observed results 04/11**:

- Canonical ZIP SHA256 `196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d`, CRC PASS; 4/4 SHA256/Git blob/membership sizes PASS; result `CANONICAL_ZIP_TO_GIT=PASS, REVIEWED_SOURCE_PARITY=UNPROVEN, Q18=HOLD` because *no reviewer input export exists*. This is a successfully completed canonical-custody test, not completed NotebookLM source parity.
- A **synthetic positive self-test**, intentionally pointing `--reviewed-dir` at the same original ZIP-extracted files, returned `PASS_BYTE_EXACT`; this is a **software correctness check only**, *not* evidence the NotebookLM reviewer read those bytes.
- A **negative test** changed only `THPT-G10-CHI-TRY01` to `THPT-G10-CHI-TRY99` in a *separate scratch export* while retaining file size and most content. The tool returned exit code 3, `DIFFERENT_OR_MISSING`, exact first divergent byte offset `3678` (zero-based), line 42. This confirms the gate detects even a single-character change that might be missed by outcome-count checks. This test input is not an academic source and must never be committed.

## Narrow, non-looping resolution

**Do not ask NotebookLM to invent SHA256 numbers, DevOps to approve unmatched hashes, or the owner to override Q18.** This would not improve source fidelity. Only two evidence routes are valid:

A. If actual reviewer-consumed **four Markdown exports** can be obtained from the exact NotebookLM/Studio review session, run the deterministic tool on those exports. If bytes differ, inspect actual diffs; for any proven harmless textual transformation document precise `DELTA_B_SOURCE_EQUIVALENT` and a reviewer assessment of the affected spans. Bare claims of `Semantic Parity 100%` or eleven IDs are not full equivalence evidence.

B. **Preferred if NotebookLM has no raw export:** start a single fresh *targeted* independent review from the exact original 4 Git/ZIP Markdown files, not previous explanatory corrections. A trusted AUTHORING process computes/source-locks the SHA256 + Git blobs; the reviewer reviews the current source directly and supplies source-specific passages, all 11 canonical item IDs/outcome-to-answer checks, the actual HELP details, an Academic/PED verdict and a signed statement identifying the exact source files and pinned source commit. A reviewer text-only claim to have computed bytes is not accepted as cryptographic proof. Lock that new reviewer report as its own Git receipt blob, then close Q18 *only if* independent provenance and QA satisfy Q18 under the official standard. Otherwise keep HOLD.

**Important:** A model's ability to paraphrase the 11 item answers is useful academic evidence but by itself cannot establish which source blob was consumed. Repeating the same Q18 prompt against the same unknown mounted source is unproductive.

All historical R01 PASS evidence remains intact. No new content, Core questions, RD1, website/API/CI assessment state, merge or deploy is changed by this tool. The R02 unit remains an incomplete chapter-level pedagogic Delta-C scope; `FULL_LEARNING_PATH` and chapter-wide `CONTENT_READY` are not claimed.
