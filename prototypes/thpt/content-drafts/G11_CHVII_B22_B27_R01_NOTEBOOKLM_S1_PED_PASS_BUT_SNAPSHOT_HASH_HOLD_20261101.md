# G11 Toán 11 KNTT Chương VII — S1 & PED clarification receipt; exact review snapshot hash mismatch (A3 HOLD)

**Received 2026-11-01**: owner-supplied full NotebookLM Studio clarification `Bao_Cao_Dinh_Chinh_Chung_Cu_Toan_11_Chuong_VII_R01.md`, **8,382 UTF-8 bytes**, SHA256 `665a9b9e2c76bec037e5610ca2d80951730a8c7b3589f880c289aa874b89fb2c`. File archived privately in ChatGPT Library `/Math App/THPT_Academic_Review_Archive/`; its complete text is not copied into public GitHub. Its self-reported machine fields:
```text
PACKET_ID|THPT-G11-CHVII-B22-B27-WHOLE-CHAPTER-AUTHORING-R00-20261101
SOURCE_FIDELITY_R01|PASS
SOURCE_RECEIPT_SGK|PASS
SOURCE_RECEIPT_SBT|PASS
PED_EVIDENCE_LOCATIONS|RECONCILED
ACADEMIC_CHAPTER_VII|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
EXPOSURE_STRUCTURAL_VERDICT|INDEPENDENT_STRUCTURES_APPROVED
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

## 1. S1 TOC/page conflict resolved by the new independent report — A2 accepted

**Confirmed reviewer S1 SGK KNTT Toán 11 Tập 2:** B22 p27–30, B23 p31–37, B24 p38–43, B25 p44–53, B26 p54–60, B27 p61–63; final Chapter VII exercises p64–65, **B28/Chapter VIII starts p66**.  
**Confirmed reviewer S1 SBT Tập 2:** B22 p24–25, B23 p26–28, B24 p29–30, B25 p31–34, B26 p35–37, B27 p38–40, final p41–43, answer key p86–103; Chapter VIII starts p44–45. These corrected TOC ranges agree with the source fence and the previous independent index; the erroneous earlier SGK p67–68/SBT p60–63 are **historical report-only source receipts**. **A2_SGK_SBT_SCOPE=PASS** for the manuscript scope, not a statement that original PDF files were copied into this PR.

## 2. Six PED evidence discrepancies corrected by NotebookLM

1. **B22 PED4/PED6**: actual public reasoning translates parallel directions to a common point, with `EX-G11-CHVII-B22-01` (rectangular prism, AB perpendicular to a skew vertical edge) and `THPT-G11-CHVII-B22-P02` (parallel segments, angle 0°). No explicit public directional-vector/dot-product or cube-diagonal worked method.
2. **B23**: `EX-G11-CHVII-B23-01` and `THPT-G11-CHVII-B23-C05`, two **intersecting** in-plane directions to establish a vertical column perpendicular to the plane, not a separate tile-edge activity.
3. **B24**: actual public teaching uses ramp's sloped length vs ground projection and SVG `FIG-G11-CHVII-B24-01`, not roof or sunlight examples stated as already taught.
4. **B26**: lamp-to-floor minimum and skew bars; actual public `EX-G11-CHVII-B26-04` and `EX-G11-CHVII-B26-05`, not a named electrical cable exercise.
5. **B27**: `EX-G11-CHVII-B27-03` frustum has B1=36 cm², B2=9 cm², h=4 cm, V=84 cm³; `THPT-G11-CHVII-B27-C04` is separate frustum formative practice, not an explicitly taught bucket exercise.
6. **B25/D5**: six source SVG `FIG-G11-CHVII-B22-01` through `FIG-G11-CHVII-B27-01` plus teaching fallback text are present; reviewer recognizes original figures and retracts unsupported narrative attributions.

**Reviewer classification:** `REPORT_NARRATIVE_DISCREPANCIES=RECONCILED_AND_CORRECTED`, both independent Academic/PED verdicts **PASS remain reported**, `MINIMAL_DELTA=0`; no mathematical source/rubric/item ID changes made. **PED narrative evidence HOLD cleared**; however A3 exact-source identity below is not yet independently demonstrated.

## 3. Exact snapshot identity **cannot yet be certified** by raw hash evidence

The new NotebookLM clarification claims the following were the **actual selected review files**:
- PUBLIC displayed name `Temp_THPT_G11_CHVII_B22_B27_PUBLIC_D1_D6_AUTHOR_REVIEW_R01_2.md`; claimed **93,978 bytes**, SHA256 `bf27a8e430f31176cbc158e10c95f1baf98659cc37ca6041b5d967cdd0806965`.
- PRIVATE displayed name `Temp_THPT_G11_CHVII_B22_B27_PRIVATE_RD0_RD1_AUTHOR_REVIEW_R0.md`; claimed **25,769 bytes**, SHA256 `18aad45ff5448b6a577e8724506fccb8ea4699bda3a181ed9a9b6f22140e7031`.

But the actual two **author-delivered canonical source files exist and were independently hashed with SHA-256 directly from container bytes**:
- PUBLIC exact filename `Temp_THPT_G11_CHVII_B22_B27_PUBLIC_D1_D6_AUTHOR_REVIEW_R01_20261101.md`; **94,635 bytes**, SHA256 `2cf2441910b55aee17d89381e1b0b349df29b89bb5567f46b820f96fd7d65252`. Whitespace-normalized text SHA256 `8661eb739df93de3646f4dace9cc17beab185513beb3b598454884bfa479d5f6`; 13,521 tokens, 77,669 normalized code points. Corresponding immutable public Git blob `afc8ec039213b87b4930f2d34d48c28d1fc6277f` remains unchanged on Draft PR #693.
- PRIVATE exact filename `Temp_THPT_G11_CHVII_B22_B27_PRIVATE_RD0_RD1_AUTHOR_REVIEW_R00_20261101.md`; **25,692 bytes**, SHA256 `1e6e7c552738c7fee55aff5b38036eef27cd415746049aae85718d51cb8f3db3`. Whitespace-normalized text SHA256 `ad61448dc0d28761a57598876c8c75ccc9cdb81ea8b3fb185e80f3172c3e1bbd`; 3,691 tokens, 21,263 normalized code points. File is **PRIVATE** and has never been committed to GitHub.

**Consequence:** Two different SHA256 values prove the raw bytes are *not identical* if the NotebookLM claims reflect actual file bytes. Naming truncation or display wrapping does not explain a changed SHA-256 on its own. Whitespace/encoding, re-export, or substantive content differences may explain the hash mismatch, **but we have not obtained the two actual files whose hashes the reviewer reported**. Matching item counts, reported outcomes, or user/reviewer verbal assertion of “100% identical” **cannot establish exact academic snapshot equivalence**. Do not mislabel this as mathematical P1; it is an **A3 source-integrity evidence HOLD**, despite NotebookLM's reported `SOURCE_FIDELITY_R01=PASS`.

**Next minimal evidence:** Obtain *the exact two files selected in NotebookLM*, by exporting them unchanged and providing both actual `Temp_*R01_2.md` and `Temp_*R0.md` files. Compare their raw and normalized contents (IDs, 27 example text, all 63 public item statements/keys, all 33 private RD1 statements/answers/rubrics, SVG XML and outcome skills) against the canonical author files. If only whitespace/export formatting differs, document the comparison and close A3 without rereview; if mathematical content materially differs, classify `DELTA_C` and conduct targeted review only for affected IDs.

## 4. Gates and release boundary

**Academic/PED PASS:** retained exactly as **independent NotebookLM verdict received**, with no fabricated independent re-verdict. **A1, A2, A4–A7:** author evidence accepted (including corrected S1/TOC pages and PED citation correction). **A3_SOURCE_SNAPSHOT_FIDELITY: HOLD**, pending comparison of actual selected alias-file contents; academic scope cannot be transferred as a byte-identical review of the published Git blob yet. **`CONTENT_READY=NO`**, author manifest stays at `inventory/HOLD`.

`EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`; `RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`. No automatic merge/deploy, screenshot/runtime QA PASS, private RD1 exposure, official Readiness scoring or Skill Mastery.
