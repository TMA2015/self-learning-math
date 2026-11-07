# AUTHORING R07 — NotebookLM M4–M7 corrected review: verdict vs exact source identity

**Scope:** One approved AUTHORING pilot Topic Hàm số và đồ thị, M4–M7; SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18, 5 THPT Permanent Sources v2.1; no RELEASE, no private RD1, no merge or deploy.

**Owner-provided corrected report:** Bao_Cao_Kiem_Toan_Chuyen_De_Ham_So_M4_M7_R01(1).md, uploaded in chat on 07/11/2026. The exact uploaded UTF-8 file is 13,266 bytes and 148 physical lines, SHA256 3363ec6c00632782cb742b2e57a59956b43ef02a281b413b1f4a4ab659009a3a. This file is an owner-supplied independent reviewer output; the present R07 record is a *triage/acceptance receipt*, not a rewrite of that independent report.

## 0. Owner clarification and correction to assistant's over-audit (same day)

The owner explicitly confirmed that **the same review input linked from PR #782 was downloaded and uploaded to NotebookLM without editing or replacing its content**. The reviewer names the **exact same parent Git blob** 39548922eddee9712441a264424e08f61c6de966 and all twelve child Git blobs match. The auxiliary displayed numbers **204,668 bytes / 1,285 lines** in NotebookLM's report are inaccurate relative to GitHub's verified **204,122 UTF-8 bytes / 1,848 physical lines**, but **they do not demonstrate a different academic source was reviewed**, especially in the face of the matching parent SHA, twelve child SHAs and owner's unchanged-file confirmation.

**Revised decision:** **CLOSE** the earlier assistant-imposed \`Q18_RECEIPT_METADATA_CORRECTION_HOLD\` as a **nonblocking reporter-metadata observation**, NOT a content/source mismatch. **No repeat NotebookLM correction prompt or full re-review required.** The report's informal original-book locator typo (G11 B16/B17 limit/continuity belongs to Tập 1, not Tập 2) is likewise **nonblocking** because the original authoring M5 S1 direct source receipts are correct. Record \`M4_M7_ACADEMIC_PED_PASS_ACCEPTED_ON_MATCHED_SOURCE_SHAS\` for these four scoped modules only; do **not** transfer this verdict to M1–M3, private Topic Readiness, unapproved item candidates or all-topic CONTENT_READY.

**Independent mathematical spot-check by AUTHORING after owner challenge:** F=ln(sqrt(4-x²)) has domain (−2,2) and F'=−x/(4−x²); piecewise f=x+10 (x<0) / f=x (x≥0) has slope +1 on each open side but f(−1)=9>f(0)=0; the 30×20 cardboard model derivative is 4(3x²−50x+150), continuous optimum x≈3.9237478 with V(3)=1008 and V(4)=1056; G11 limit sqrt(x²+16)/x tends to −1 as x→−∞. These all agree with the mathematically relevant report/source examples. The old report's formula swaps were **summary inaccuracies later corrected**, not evidence that NotebookLM was asked another chapter.

## 1. Scope of reviewer-reported PASS, correctly linked to matching child Git blobs

The corrected report states **Academic PASS and PEDAGOGICAL PASS** for four modules: M4 ten outcomes, M5 nine, M6 nine (not ten), M7 ten. It declares P0=0, P1=0, P2=0 and MINIMAL_DELTA=0 for academic/pedagogical explanations. It explicitly maintains FULL_TOPIC_CONTENT_READY=NO, RELEASE_AUTHORIZATION=NO, MASTERY_ACTIVATION=NO and PRIVATE_RD1_COUNT_NEW=0.

All **12 of the 12 child source Git blob hashes** in its Appendix 01–12 manifest match exact pre-existing files on Draft PR #782. The four errors identified in the *earlier reviewer report* are fixed in this newer supplied reviewer text, matching Git material:

| Target | Correct source/reviewer correction | Exact original source Git blob |
|---|---|---|
| CAND-P-M6-02 | F(x)=ln(sqrt(4−x²)), domain (−2,2), derivative −x/(4−x²) = x/(x²−4); no endpoints | M6 ledger c735a2e21bffe4ffe2e16d06de1d8592acc22674 |
| CAND-P-M7-01 | f=x+10 when x<0 and f=x when x≥0; derivative +1 on both open branches, jump at 0 makes function non-increasing on all R (counterexample f(−1)=9>f(0)=0) | M7 ledger 7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d |
| M7 outcomes | M7-O01..O10, alternatively TOP-FUNC-M7-O01..O10 as author planning alias; do not replace canonical IDs automatically | M7 author QA d4f739299f5acc29949ae868ed746109fe1085d2 |
| M4 FIG | Five existing SVG: B03 sin/cos/tan/cot 01–04 plus CHVI-B20 exponential-log inverse 01. No new assets | M4 ledger 3a399a40e837e2fef1ad04e2712ccbcb5a8ba839 |

**Academic/PED disposition:** RECORD **REVIEWER_REPORTED_ACADEMIC_PED_PASS_M4_M7_CORRECTED**, scope 12 immutable child Git blobs and the four corrected instances above; do not re-review unchanged mathematics solely because of earlier summary mistakes. No new public candidate item has been promoted: CAND-WRI-M4-01, P-M5-11, CAND-P-M6-01/02, CAND-P-M7-01/02 remain CANDIDATE_DEDUP_HOLD (six cited by reviewer); the broader original candidate ledgers remain source of truth for any other proposals. Q15 final role/placement/version mapping still pending.

## 2. Remaining Q18 and S1 receipt discrepancies are METADATA, not silent math edits

- **Verified original packet at GitHub:** Temp_TOPIC_FUNCTIONS_M4_M7_ONE_SOURCE_NOTEBOOKLM_INDEPENDENT_DELTA_C_PACKET_R01_20261107.md; Git blob 39548922eddee9712441a264424e08f61c6de966; exactly **204,122 UTF-8 bytes and 1,848 physical lines** at direct readback. Its 12 child sources match the 12 hashes cited above.
- **Latest corrected reviewer report:** gives exactly the **same parent Git SHA/name**, BUT states **204,668 UTF-8 bytes and 1,285 lines**. The reported figures differ from bytes actually referenced by the stated Git blob (546 bytes, 563 lines). The SHA is a stronger content identity anchor, but contradictory size/line counts **cannot be silently certified**. Status: PARENT_GIT_BLOB_ID_MATCH=YES; PARENT_REVIEW_RECEIPT_BYTE_LINE_COUNT_MATCH=NO; **Q18_RECEIPT_METADATA_CORRECTION_HOLD=OPEN**. Minimal closure is a one-line reviewer/source-receipt erratum correcting bytes/lines; no new Academic/PED re-review unless underlying content actually differs.
- **S1 locator typo still in reviewer report:** it places G11 B15–17 limit/continuity in Tập 2, whereas the original relevant SGK/SBT G11 B16/B17 were directly inspected in **Tập 1** in the author's M5 source receipts. Mark **S1_G11_VOLUME_LOCATOR_METADATA_CORRECTION_REQUIRED**; retain original author source SHA and page receipts, not an invented new source.
- **Q16 distinct gate:** a self-reveal First Try with details and no Mastery in authoring source is NOT evidence that full G10–G12 official protected TOPIC_READINESS, Final Submit, exposure prevention and no-Mastery production behavior are complete. Q16_FULL_TOPIC_READINESS_HOLD remains OPEN.

## 3. Explicit blocker disposition and scope preservation

**CLOSED or confirmed:** corrected original example/FIG/outcome names, 12/12 original child blob match, M6=9 outcomes, M7=10; original G11 62 public D3 items and original G12 36 HELP counts were reconciled earlier (R03). The external report's P0/P1/P2=0 belongs to its scoped pedagogical review, not to all independent handoff/system gates.

**STILL OPEN:** G10 M1–M3 newly authored bridge SOURCE_SNAPSHOT_MISMATCH_HOLD; M4–M7 Q18 receipt numeric metadata correction and G11 S1 volume locator metadata; six-new-candidate semantic no-clone review; full Topic M1–M7 single-canonical-source consolidation; outcome→item→HELP→FIG/placement mapping; official privately held-out TOPIC_READINESS/Q16; exact source/receipt reviewer gates and A1–A7; one V2 handoff/ready manifest/REGISTER only after all PASS. Do not inherit historical G10 or G12 SGK PASS into new Topic material outside its exact reviewed blobs.

**STANDING workflow (not a new rule):** every NotebookLM prompt is given directly in the ChatGPT chat, 3–6 sentences, with real Temp review file links, never as a separate prompt file. Past attempts to create prompt .txt/.md were assistant noncompliance.

**CHECKPOINT:** M4_M7_REVIEWER_REPORTED_CORRECTED_ACADEMIC_PED_PASS; CHILD_BLOBS_12_OF_12_MATCH; PARENT_SHA_MATCH; PARENT_BYTE_LINE_RECEIPT_HOLD; S1_G11_VOLUME_LOCATOR_METADATA_HOLD; CANDIDATE_DEDUP_HOLD; M1_M3_SOURCE_SNAPSHOT_MISMATCH_HOLD; Q16_FULL_TOPIC_HOLD; FULL_TOPIC_CONTENT_READY=NO; RELEASE=NO.


## R07 final status addendum after owner-confirmed unchanged input

**SUPERSEDES any earlier phrases in this historical R07 document labelling packet byte/line numbers or the G11 S1 book-volume shorthand as blocking.** Preserve the numerical discrepancy as an audit note only, not as a fresh request to NotebookLM. Actual M4–M7 module Academic/PED PASS is **ACCEPTED** on the documented parent source Git SHA and 12/12 exact child Git SHAs; six public candidate dedup decisions, the separate M1–M3 snapshot conflict, and official protected TOPIC_READINESS remain open. No prompt file, no re-review of the same content, no merge/deploy.
