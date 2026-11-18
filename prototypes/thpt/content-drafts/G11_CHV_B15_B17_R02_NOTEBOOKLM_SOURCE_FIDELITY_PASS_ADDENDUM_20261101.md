# Toán 11 Chương V — NotebookLM R02 source fidelity reconciliation · PASS addendum

**Received:** 2026-11-01 · **Scope:** Bài 15–17 SGK KNTT, đúng PACKET_ID `THPT-G11-CHV-B15-B17-WHOLE-CHAPTER-AUTHORING-R01-20261101` (public + private revision **R02**).  
**Authority:** Owner-pasted targeted follow-up from NotebookLM after reviewing `Temp_G11_CHV_R02_PED_SOURCE_FIDELITY_RECONCILIATION_20261101.md` with the same two selected R02 sources. **No changes to the academic candidate or private RD1 after this correction.**

## 1. Confirmed selected source identity

- **Public R02:** `Temp_THPT_G11_CHV_B15_B17_PUBLIC_D1_D6_REVIEW_R02_20261101.md` — NotebookLM reports a displayed size of **60,856 bytes**. Author's exact local original `/mnt/data` copy is **60,787 bytes**, SHA256 `1aa21d79bd2599e2c71d113854de89b1dc24d18d82cd6d0d2fffdbc430c8c73f`; public GitHub candidate at `prototypes/thpt/review-packets/Temp_THPT_G11_CHV_B15_B17_PUBLIC_D1_D6_AUTHOR_CANDIDATE_R02_20261101.md` has immutable blob `77be75de3fd01c7aa9dcc0f1a14e5e2ca68ab7fa`, present unchanged at **SOURCE_COMMIT** `3fffdf12cc0f4e6bb4fa764d4f4f7fb3821b3b5b`. Local public Markdown and the Git blob were cross-checked content-equivalent after whitespace normalization. Different byte sizes are kept as *source-display metadata*, not silently equated.
- **Private R02:** `Temp_THPT_G11_CHV_B15_B17_PRIVATE_RD0_RD1_17_AUTHOR_CANDIDATE_R02_20261101.md` — NotebookLM displayed **16,258 bytes**, author's exact local original has **16,302 bytes**, SHA256 `e9985e56cc17decd688a5fd3b068a8c75c5a709025a87afea68491ced18d2f98`, **17/17 held-out item IDs**. File name is now explicitly confirmed in NotebookLM sources; the earlier abbreviated `...AUTHOR_CANDIDAT.md` was a *report truncation*, not a different source. **Private source body, stems, keys and rubrics stay outside GitHub.** NotebookLM did not provide cryptographic hashes of its own uploads; do not falsely declare byte-for-byte equivalence based on display sizes.
- **Reconciliation input:** `Temp_G11_CHV_R02_PED_SOURCE_FIDELITY_RECONCILIATION_20261101.md`; exact local source SHA256 `11390072fe58566114e505d0849a904fca95833413349a3547bcaa47cfd4b267`.
- **Source S1 receipt reconfirmed by reviewer:** SGK Toán 11 T1 KNTT B15 p104–110, B16 p111–118, B17 p119–122, cuối chương p123. SBT Toán 11 T1 KNTT B15 p96–101, B16 p102–108, B17 p109–112, cuối chương p113–116, lời giải p157–172. This corrects the previous secondary-index ambiguity, on NotebookLM's S1 authority.

## 2. Four PED narrative corrections — no academic DELTA

1. **B15 SVG `FIG-G11-B15-01`:** correct actual figure is the discrete `u_n=1/n` sequence approaching 0, not the cited rational-sequence limit approaching 3. The latter is a distinct public worked example `EX-G11-B15-01`.
2. **B15 lesson launch:** actual D1 §1 uses `1,1/2,1/3,...`; D1 §6 discusses `5+5/4+5/16+...` and `EX-G11-B15-04` develops application. The prior 'shrinking squares' analogy was not a public-D1 launch; reviewer confirmed it came from a **separate private item**, without authorizing that item to be copied or used as practice.
3. **B16 PED6:** actual public microcheck is `(x²−9)/(x−3)` for x≠3, public application `THPT-G11-CHV-B16-P07` has an efficiency/saturation model, and `EX-G11-B16-05` is a one-sided threshold-fee example. The two earlier alternative examples were reviewer cross-references to *private assessment only*, not taught in public D1/D3. **Do not expose those protected examples in D1/Practice.**
4. **B17 PED5:** actual public `EX-G11-B17-04` proves existence of a zero for a cubic using continuity and signs. The earlier higher-degree example was in a different private RD1 item, not public teaching content. Keep its exact stem and solution private.

**Independent reviewer conclusion:** `REPORT_NARRATIVE_CORRECTION` for each of all four; *none requires changes* to theory, diagrams, public or protected questions, answers or rubrics. This addendum corrects only documentation of where evidence lives; do not retroactively edit or falsely replace the original Studio report, which remains a historical snapshot.

## 3. Machine verdict received

```text
PACKET_ID|THPT-G11-CHV-B15-B17-WHOLE-CHAPTER-AUTHORING-R01-20261101
SOURCE_FIDELITY_R02|PASS
ACADEMIC_CHAPTER_V|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
REPORT_NARRATIVE_DISCREPANCIES|RECONCILED_AND_CORRECTED
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
EXPOSURE_STRUCTURAL_VERDICT|INDEPENDENT_STRUCTURES_APPROVED
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

**Authoring gate meaning:** A3 can now be accepted **for the exact named R02 content as confirmed by NotebookLM**, with the byte-size discrepancy recorded transparently as an unverified source-display metadata difference; an actual cryptographic NotebookLM upload receipt is **not** available. D1–D6 / PED1–PED6 mathematical content unchanged, so **DELTA_B_REPORT_ONLY**, no new academic review necessary. The release queue may move `inventory/HOLD` → `ready/CONTENT_READY` with full A1–A7 evidence. This **is not** permission to merge/deploy or expose RD1, grade learners or activate Mastery; those gates remain R1–R5/AP1–AP5/P1–P2 and owner authorization.
