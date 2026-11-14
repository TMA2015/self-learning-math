# AUTHORING R19 — Chốt nguồn thực tế hai Written Toán 10 B15 dùng lại trong Chuyên đề Hàm số

**Review scope:** Pure Q15 existing-source provenance and original rubric reuse, **NO new math, NO DELTA C**, no NotebookLM repeat. One normative Q01–Q18 v1.2.0. AUTHORING branch PR #782.

## Verified existing canonical source in actual GitHub main (08/11/2026)

- `docs/thpt-preview/thu-vien/tu-luan.md`, **actual Git blob `4da918f36d30c9b7110099e81fc88943e5b7705b`**, contains complete original two Written **stems, model worked answers and original scoring rubrics**, not just a reference. The exact existing `data-thpt-written-canonical` attribute is already the original HPT-prefixed ID. DO NOT rename it to THPT.
- `prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs`, **actual Git blob `1634608678b54c2bdf0598e8520a4cad15d5b1ae`**, independently lists these exact same two Written IDs in the already-established public G10 ChVI placement registry.
- Historical independently reviewed G10 Topic R01 source `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` explicitly reuses these two IDs and original rubrics. **The original public item has ONE answer/rubric.** No duplicate Topic bank is created.

| Exact existing canonical item_id | Source lesson | Rubric in actual source | Topic outcome/role | Disposition |
|---|---|---:|---|---|
| `HPT-G10-CHVI-WRI-15-01` | G10 B15, value table, function mapping, graph membership | **5 points** | `TOP-G10-FUNC-O03`, TOPIC_WRITTEN via existing shared item | REUSE_EXISTING_CANONICAL_NO_RENAME |
| `HPT-G10-CHVI-WRI-15-02` | G10 B15, piecewise transportation cost, domain budget | **6 points** | `TOP-G10-FUNC-O05`, TOPIC_WRITTEN + ANCHOR_TAG (tag is not a second ID) | REUSE_EXISTING_CANONICAL_NO_RENAME |

**Validation:** Original HTML source directly fetched: one section with `data-thpt-written-canonical="HPT-G10-CHVI-WRI-15-01"` and rubric score 5; one `HPT-G10-CHVI-WRI-15-02` and rubric score 6. Both IDs appear in original reviewed G10 public placement file. This closes any claim that these are phantom/typo IDs. The `HPT-` prefix is **historical canonical**, not a mistake to correct.

**Q15 result:** `G10_SHARED_WRITTEN_2_OF_2_SOURCE_VERIFIED`; `ORIGINAL_RUBRICS_PRESERVED`; `ORIGINAL_SOURCE_BLOBS_PINNED`; `NEW_MATH=0`; `R18_SCHOLARLY_PUBLIC_SOURCE_UNCHANGED`. RELEASE still owns verifying that its final independent Topic UI imports the one existing bank and preserves those IDs/score rubrics; no independent re-review or new source invented. No private RD1 included in this file.

**Overall Topic state:** Independent Academic/PED PASS unchanged and now 2/2 historic G10 Written references resolved; the real final `CONTENT_READY` gate is **owner-authorized V2 TOPIC/standard v1.2.0 intake compatibility** (Issue #790), not this canonical source reference. No merge/deploy.
