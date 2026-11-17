# G10 ChIV B08 — MathJax display repair R03 · 17/11/2026

**PACKET_ID:** `G10_CHIV_B08_MATHJAX_DISPLAY_R03_20261117`  
**SINGLE_STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18; Golden R4, AP2/AP5, Q15/Q18  
**DELTA_CLASS:** `DELTA_A_UI` — Markdown/MathJax block separation only; **NO CHANGE in TeX formula payload, math propositions, item stems, answers, proofs, labels, SVG, or academic scope**  
**LESSON_ID:** `G10-CHIV-B08`  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-8.md`  
**R02_PUBLISHED_SOURCE_BLOB:** `196976859489744bf10e6c3ad60e8dac7afb2422`  
**R03_CANDIDATE_SOURCE_BLOB:** `9cf96a0e81bea14903a64385359f738145e5a048`  
**PUBLISHED_MAIN_COMMIT_BEFORE_FIX:** `447967a6775c414578c841358290d232eacfa80b`  
**PREDECESSOR_Q18_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md` · Git blob `dac1f54d1a0b77b78dafe5a23566b22143683aa7`  
**PUBLISHED_BASELINE_STATUS:** `P1_PAGES_ARTIFACT_VERIFIED` · `OWNER_P2_PENDING` (old R02 snapshot only)  
**CANONICAL_PUBLIC_FIRST_TRY:** `THPT-G10-CHIV-TRY06`, `THPT-G10-CHIV-TRY07`, `THPT-G10-CHIV-TRY08`, `THPT-G10-CHIV-TRY09`, `THPT-G10-CHIV-TRY10` (all invariant)  
**SOURCE_AUTHORITY:** previously checked S1 Toán 10 KNTT tập 1 B08 printed pp51–54; `SOURCE_SCAN_AUTHORITY_PENDING` for independently reopening original PDF; no new S1 claim.

## Owner evidence — display defect, NOT a math defect

Owner screenshots 17/11/2026 show raw text `\\[`, `\\overrightarrow`, `\\cdot` in B08 formal subtraction and four worked examples. Published HTML `gh-pages/thpt-preview/sgk/chuong-iv/bai-8/index.html` at blob `40850874b699f59a33d66092f9beb134eb6b37b5` confirms six display TeX blocks were accidentally included in adjacent Markdown `<p>` tags as literal `[` and `]`, rather than being emitted as `<div class="arithmatex">\\[...\\]</div>`. The published inline `\\(...\\)` equations render correctly, which isolates the defect to display-block whitespace.

## Scoped fix, exactly six preserved display equations

| Affected section | Existing formula meaning (unchanged) | Visual-only fix |
|---|---|---|
| 2.2.2 | `AB-AC=AB+CA=CB` as vectors | Blank Markdown line before/after `\\[...\\]` |
| 3.1 | `AC+CB+BD=AB+BD=AD` | Same |
| 3.2 | `F²=5²+7²+2·5·7 cos60°=109` | Same |
| 3.3 (first) | `AB=AM+MB`, `AC=AM+MC` | Same |
| 3.3 (second) | `AB+AC=2AM` | Same |
| 3.4 | `|AD|=√41≈6.40m` | Same |

**Change-set proof:** exactly **nine blank lines inserted**; six display TeX payloads preserved **byte-for-byte**, original `\\[`/`\\]` delimiters preserved, all inline math and full Markdown nonblank lines unchanged. Existing `TRY06`–`TRY10` complete prompts/disclosed answers and both D6 HELP unchanged; no change to public Core/Practice, Written/Anchor, protected Final Submit/RD1, Mastery, Firebase, Gemini, THCS or Topic. Original D5 SVG blob `3d7550c8667ed8ea629563b8078ae3dfbc680135` and JS `da426ed2d7966ab5b242405eaeeaadbfaecefa7d` unchanged.

## Tests, release conditions, provenance

- Test source SHA chain R02→R03 under existing Q18 router; assert R03 line-level normalization recovers **exact R02 source** (not arbitrary formula changes), six original display payloads, canonical IDs and answers unchanged.
- Build actual MkDocs; assert six `div.arithmatex` display wrappers, **zero orphan raw `\\overrightarrow` / `\\cdot` / `\\sqrt` outside MathJax** in B08 Knowledge/Examples. Browser check at 390/820/1440 including tab visibility, formulas, no horizontal overflow, answer disclosure closed by default and Q16 boundaries.
- All applicable PR workflows must PASS on exact final HEAD; after owner conditional permission, merge/deploy then verify GitHub Pages `gh-pages` HTML/artifact SHA; **owner real iPhone/iPad Safari P2 pending until expressly confirmed**. No automatic `OWNER_P2_PASS`.
- R02 Academic/PED self-verified acceptance is preserved by immutable blob; this R03 is not a new independent academic review and does not reset R02 snapshot.

**STATE:** `DELTA_A_UI_CANDIDATE_QA_PENDING` · no merge/deploy from receipt alone.
