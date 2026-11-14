# G10-SGK-CHVI R02 — fourth NotebookLM supplementary Q18 / Q07 verification (05/11/2026)

PACKET_ID: G10-SGK-CHVI-PED-BRIDGE-R02-20261105
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
STATUS: Q18_MECHANICAL_PARITY_HOLD_Q07_PED4_PASS
SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
SOURCE_GIT_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
SOURCE_UTF8_BYTES: 93198
SOURCE_LF_COUNT: 812
SOURCE_CRLF_COUNT: 0
SOURCE_NONBLANK_LINES: 480
SOURCE_EMPTY_SPLIT_ENTRIES: 333
CANONICAL_REMOVE_BLANK_LINES_GIT_BLOB: a5f8fd57d4823235f2c89c31ff1b547b4abbf5c4
CANONICAL_REMOVE_BLANK_LINES_UTF8_BYTES: 92866
CANONICAL_REMOVE_BLANK_LINES_FINAL_LF_COUNT: 480
REVIEWER_MOUNTED_FILE_UTF8_BYTES: 92640
REVIEWER_MOUNTED_FILE_LF_COUNT: 501
REVIEWER_MOUNTED_FILE_CRLF_COUNT: 0
REVIEWER_MOUNTED_SHA256_DECLARED: 10cf8505a05770b0ca9ab16e37722a03b279a98814a6cb3c5ef59eb823d0dfef
REVIEWER_MOUNTED_GIT_BLOB_DECLARED: 116963cd526cc53877a3daeff70e9b7a591a3664
REVIEWER_REPORTED_SEMANTIC_PARITY: PASS
REVIEWER_REPORTED_STRICT_BYTE_PARITY: UNPROVEN
REVIEWER_REPORTED_ACADEMIC_PASS: 19_OF_19
REVIEWER_REPORTED_PED_PASS: 19_OF_19
REVIEWER_REPORTED_SVG_Q07_PED4: PASS_B15_AND_B18
AUTHOR_ACCEPTED_Q07_PED4: PASS_FOR_REVIEWED_INLINE_SVG
Q18_CANONICAL_SOURCE_PARITY: UNVERIFIED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PRIVATE_RD1_NEW: 0

## 1. Fourth reviewer result: Q07/PED4 scope closed

Owner supplied supplementary NotebookLM report "BÁO CÁO PHẢN BIỆN BỔ SUNG HAI CỔNG Q18 VÀ Q07/PED4 CHƯƠNG VI R02". It quoted BOTH correct original XML title and desc strings from the canonical source:
- `FIG-G10-CHVI-B15-01`: `<title id="chviB15Title">Bài 15: Một đầu vào ứng với đúng một đầu ra</title>`. Original desc A [(1;7),(3;2),(3;2)] versus B [(1;7),(3;2),(3;4)], verifying single-valued input/output, no false domain/range/monotonicity role.
- `FIG-G10-CHVI-B18-01`: `<title id="chviB18Title">Bài 18: Kiểm điều kiện, bình phương rồi thử nghiệm gốc</title>`. Original desc: sqrt(A)=sqrt(B) and sqrt(A)=B require defined/nonnegative signs, squaring creates candidate solutions, check original equation, no mistaken geometric ladder diagram.
Reviewer independently reports `Q07/PED4: PASS` on both exact XMLs. Author compared titles/descriptions and visual structure to Git source and accepts scoped **Q07/PED4 PASS**; this is NOT visual QA of integrated rendered website (RELEASE AP3 remains pending).

## 2. Q18 is not CLOSED by semantic claim alone

NotebookLM reports `SOURCE_PARITY=PASS (Semantic) / UNPROVEN (Strict Byte-Level)` with source mounted `/workspace/knowledge/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md`, 92,640 UTF-8 bytes, **501 LF** and blob `116963cd...`, versus Git canonical 93,198 UTF-8 bytes, **812 LF** and Git blob `1e6a76ee...`. Neither the mounted file bytes nor a line-by-line/full-content diff is included in this owner report. The report states the ingestion pipeline collapsed blank lines or normalized whitespace; that is a **hypothesis**, not a mechanically evidenced complete diff. The semantic review of 19 outcomes/TRY/HELP remains a substantive positive result, but does not establish cryptographic source equivalence under Q18.

Author re-read source Git blob and performed additional deterministic checks:
- Total LF = 812, CRLF=0; 480 nonblank lines and 333 empty entries when splitting by LF (includes trailing empty entry).
- Git source contains no trailing whitespace on any line and no repeated ASCII spaces; this excludes those simple explanations for a further 226-byte reduction.
- Strict blank-line-only normalization of the **canonical source** as specified in §3 yields **92,866 bytes and 480 LF**, Git blob `a5f8fd57d4823235f2c89c31ff1b547b4abbf5c4`. Mounted 92,640 bytes is **226 bytes smaller than even that nonblank canonical result**, while mounted 501 LF is 21 lines greater. Thus blank-line removal **alone cannot explain the discrepancy**. It may include another form of normalization, but cannot assert math/PED/SVG source parity without direct evidence of those transformations.

## 3. Minimal deterministic test for mounted source

Ask reviewer to run this EXACT content normalizer on the **actual mounted file bytes**. It ignores only completely blank/whitespace-only lines and translates CRLF line endings to LF, but preserves every character of each nonblank source line unchanged; it is a *receipt proof helper*, NOT a second canonical learning-source standard or a content edit:

```python
from pathlib import Path
import hashlib

p = Path('/workspace/knowledge/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md')
raw = p.read_bytes()
txt = raw.decode('utf-8')
canonical_nonblank = '\n'.join(line for line in txt.splitlines() if line.strip()) + '\n'
data = canonical_nonblank.encode('utf-8')
blob_data = b'blob ' + str(len(data)).encode('ascii') + b'\0' + data
print('mounted_bytes', len(raw))
print('mounted_lf', raw.count(b'\n'))
print('normalized_bytes', len(data))
print('normalized_git_blob', hashlib.sha1(blob_data).hexdigest())
print('normalized_sha256', hashlib.sha256(data).hexdigest())
```

If the **mounted normalized Git blob = `a5f8fd57d4823235f2c89c31ff1b547b4abbf5c4`**, **all nonblank academic/PED/SVG line content is byte-identical**, and the difference is only blank-line spacing or line endings. This is a sufficient direct source-equivalence check for Q18 when logged alongside the raw mounted hash and the frozen Git source, without re-reviewing 19 mathematics tasks. If not, provide the actual mounted `Temp_` bytes/working copy and a clear unified diff identifying any nonblank changed lines (especially formulas, item IDs, D6 explanations and SVG XML), then apply scoped DELTA_C review only to those mathematically material lines.

**Do not assert normalized hash equality unless run on the mounted file.** The hash `a5f8fd...` above was computed from the CANONICAL Git source only.

## 4. State and next

- Historical independent 54-item Academic PASS and prior B17_OUT_04 scoped correction remain immutable, unaffected.
- 19/19 new-item Academic/PED PASS remains **reviewer-reported**, with correct question-level mapping in second review. 19 HELP IDs and two SVGs match; actual Q07/PED4 independently PASS after fourth report.
- **Only Q18 mechanical source equivalence remains OPEN**. Current authoring candidate is not CONTENT_READY until exact-snapshot proof; do not create one FULL R03 ready handoff, ready manifest or REGISTER entry yet.
- Do NOT change approved student math contents or repo/website runtime, private RD1, Skill Mastery, release PR or main. **Draft PR #756**, AUTHORING only, owner approval still required for publication.
