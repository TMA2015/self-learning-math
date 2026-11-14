# PLAN22-20 / CĐ20 · Q15 34 canonical pointer provenance preflight · 14/11/2026

STATE: AUTHORING_Q15_PROVENANCE_PREFLIGHT_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v3.1.0
TOPIC_20_LATEST_SOURCE_BLOB: 51eb5d4ebb6504390e1e0ac378d6566e7d940c37
LEGACY_CATALOG_PR: #810 OPEN_DRAFT_AND_NOT_MERGED
LEGACY_CATALOG_INDEX_BLOB: c4e472d628165f4b14281843436697202977a875
LEGACY_SOURCE_HISTORICAL_COMMIT: b99297c1470d9ef3f273c8393a39427172c38fba
LEGACY_G10_BANK_BLOB: c6be192d33f3741992d57988d94bc49c5f07650b
LEGACY_G11_BANK_BLOB: bb6010e7718e71885a49440e63692a62ccc2a2e8
EXTENSION_G10_G11_BANK_BLOB: eafc0164beee72111bc27f0ddbd84f26b601698f
POINTERS_IN_THIS_SCOPE: 34
G10_OLD: 16
G11_OLD: 10
G10_NEW_EXTENSION: 4
G11_NEW_EXTENSION: 4
DISTINCT_POINTER_IDS: 34_OF_34
POINTER_ID_FOUND_IN_NAMED_SOURCE: 34_OF_34
Q15_VERDICT: HOLD_SOURCE_CUSTODY_AND_OUTCOME_PLACEMENT_STILL_PENDING
CONTENT_READY: NO
MERGE_DEPLOY: NO

## Critical correction to earlier generalized blocker label

The **34** are not 34 historically merged SGK "old pointers": their composition is **16 G10 historical + 10 G11 historical + 4 G10 new extension + 4 G11 new extension**. The original 26 item-bearing files **are accessible at historical commit `b99297c1470d9ef3f273c8393a39427172c38fba` with the expected blob SHAs**, but **are absent at the same paths on PR #810 head and `main`** (GitHub file 404 under those refs). The 8 additional items live in a newer extension file on #810 head, not in that historical snapshot. Therefore a link with only path and no pinned historical commit will not resolve those original 26 references on a current checkout.

## Immutable exact pointer register (not answer/rubric text)

| item_id | Source category | SHA | Outcome when extension |
|---|---|---|---|
| `THPT-G10-B26-C01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-C02` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-P01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-P02` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-P03` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-P04` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B26-P05` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-CHIX-W26-01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-C01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-C02` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-P01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-P02` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-P03` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-P04` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-B27-P05` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G10-CHIX-W27-ANCHOR-01` | `LEGACY_PUBLIC_CANDIDATE` | `c6be192d33f3741992d57988d94bc49c5f07650b` | historical source register |
| `THPT-G11-B28-P01` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B28-P02` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B28-P03` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B29-P01` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B29-P02` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B29-P03` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B30-P01` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B30-P02` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-B30-P03` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G11-CHVIII-W30-ANCHOR-01` | `LEGACY_PUBLIC_CANDIDATE` | `bb6010e7718e71885a49440e63692a62ccc2a2e8` | historical source register |
| `THPT-G10-TOPPROB-ADD01` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G10-B26-EXPERIMENT_SAMPLE_SPACE` |
| `THPT-G10-TOPPROB-ADD02` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G10-B26-COMPLEMENT` |
| `THPT-G10-TOPPROB-ADD03` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G10-B26-SCOPE_SMALL_PROBABILITY` |
| `THPT-G10-TOPPROB-ADD04` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G10-B27-COMPLEMENT_PROBABILITY` |
| `THPT-G11-TOPPROB-ADD05` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G11-B28-EVENT_UNION_INTERSECTION` |
| `THPT-G11-TOPPROB-ADD06` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G11-B28-INDEPENDENT_EVENTS` |
| `THPT-G11-TOPPROB-ADD07` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G11-B28-DISJOINT_EVENTS` |
| `THPT-G11-TOPPROB-ADD08` | `NEW_EXTENSION_PUBLIC` | `eafc0164beee72111bc27f0ddbd84f26b601698f` | `G11-B29-ADDITION_DISJOINT` |

## What the source check proves and cannot prove

**Proved directly:** Every one of these 34 distinct IDs is present in its exact original Git blob. The three source blobs have been read at their correct refs; 34/34 ID presence and uniqueness **within this subset** confirmed, without copying stems/answers/solutions/rubrics into a second canonical bank.

**Not proved (Q15 HOLD):** canonical stem/key/rubric equality against the current authoritative SGK bank on active branches; no same-ID/different-stem outside these 34; full 17 outcome-to-34 placement mapping for CĐ20; correct `content_version` for each runtime shared item; recovery of 26 historical sources into a durable handoff (path+commit/blob fetch) without silently creating new canonical versions; and independent Q15 signoff. Do not copy historical item bodies into current public files to "fix" 404.

**Owner source protection:** No private RD1/key/rubric leak, no Mastery from practice/preview, and no SGK->Topic automatic PASS. Do not promote CĐ20 R05 to CONTENT_READY until Q15, Q01 source, Q16 and Q18 receipts, V2/ready/REGISTER have been checked on exact new source.
