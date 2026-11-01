# G10 A6 · Post-merge self-check / historical held-out policy reconciliation — 2026-11-01

**CLASS:** `DELTA_A_METADATA_AND_RELEASE_POLICY_AUDIT`; **NO math/answer/item edit**, no student-data mutation.
**STATUS:** `SOURCE_DISCOVERY_PASS / POLICY_CONFLICT_REQUIRES_OWNER_CHOICE / INDEPENDENT_READINESS=NOT_CERTIFIED / MASTERY=OFF`.
**SOURCE:** GitHub live `main` after [merged #680](https://github.com/TMA2015/self-learning-math/pull/680) (31/10/2026), [owner issue #662](https://github.com/TMA2015/self-learning-math/issues/662), original [ChVI NotebookLM receipt](../THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md).

## Facts verified without copying any answer/key

1. Original [#612](https://github.com/TMA2015/self-learning-math/pull/612) is **MERGED**, not a live Draft. Audit [#641](https://github.com/TMA2015/self-learning-math/pull/641) remains Draft. This audit must not rewrite a released source, merge or deploy.
2. [#680](https://github.com/TMA2015/self-learning-math/pull/680) is **MERGED**. Nine public JSON files now live at `docs/assets/data/thpt-g10-readiness/CHI.json` through `CHIX.json`. PR metadata reports **141 source-locked reviewed self-check items** across nine chapters; **not** a secured private assessment or independent mastery engine.
3. **ChVI exact historical old18**: `docs/assets/data/thpt-g10-readiness/CHVI.json` on current `main`, Git blob **`0760782256a2d8d91c398814e62d013cf6083eb7`**, contains **18/18** original `THPT-G10-B15/B16/B17/B18-Rxx` canonical IDs listed in the 28/10 academic receipt. The file has student-facing stems **and** `answer`, `solution`, `rubric` fields. Thus the original old18 can **no longer be described as held-out from public GitHub or hidden from a determined client inspector**. Do not republish any of these bodies in this audit.
4. ChVII `CHVII.json` blob `113e291ecf9e2e3258e6bf573b87b53b02372ca6` contains 22 public self-check items with answers/solutions; ChVIII `CHVIII.json` blob `c3a1e108c1ff8a03f28d986c23bd8febe85f29d0` contains 14. **Do not confuse** the latter with the distinct author-only 15-item ChVIII RD1 draft (SHA256 `a17b23a660603df849680f311023ffdaca48617031a5b3eea701551e30e8c4c3`), which remains `DRAFT_NOT_ACADEMICALLY_REVIEWED`. Do not re-author or duplicate either.
5. The three checked public chapter JSON files explicitly set `mastery_credit:false`, `persist_results:false`; #680 describes `Final Submit` as **browser self-assessment**, not authenticated scoring, not official `SGK_CHAPTER_READINESS` evidence and not a Topic test. Four PR #680 workflow checks finished `success` at its exact head; this is technical CI evidence, not owner device acceptance or production Academic PASS.
6. **Policy chronology is essential:** the earlier 28/10 ChVI contract required 18 held-out items never enter public GitHub/client; on **31/10**, owner [#662](https://github.com/TMA2015/self-learning-math/issues/662) explicitly accepted public browser keys for **voluntary self-study only**, no anti-DevTools/backend, no Skill Mastery. The current repeated automation brief still demands strict private held-out delivery. These are materially different contracts; **do not silently claim both are satisfied**.

## Exact current-main public data QA (metadata only)

Directly parsed all nine current-main `docs/assets/data/thpt-g10-readiness/*.json` files without emitting stems or keys: chapter item counts **14 / 14 / 14 / 21 / 18 / 18 / 22 / 14 / 6**, total **141/141 globally distinct canonical IDs**, duplicate IDs **0**. Every item contains `answer` and `solution` fields; all nine JSON roots specify `mastery_credit:false` and `persist_results:false`. This validates public data shape and count only, **not** independent academic fidelity, no-pre-submit DOM isolation, student history or deployed-site parity.

## Consequence and non-destructive hold

- Existing ChVI `ACADEMIC_OVERALL=PASS / ACADEMIC_CLEARANCE=YES` for exact five-Temp 54-ID/19-outcome snapshot remains historically valid. Public publication of the old18 does **not** grant independent assessment/exposure clearance.
- Mark the **old18 as `PUBLICLY_EXPOSED_FOR_INDEPENDENT_ASSESSMENT`** in future source/exposure decisions. A `Final Submit` UI gate can withhold visible feedback until submission, but it cannot cryptographically hide keys already shipped in JSON. Never treat missing learner event logs as proof an item was unseen.
- The old18 vs new20 ChVI alternative candidate overlap cannot be cleared by renaming IDs or by a successful browser test. Maintain `NEW20_EXPOSURE_ISOLATION=HOLD` until protected semantic comparison is separately completed.
- **Owner decision needed only if strict old18 secrecy remains the intended current requirement:** choose either (A) keep already-public A6 as **non-persistent voluntary self-check**, consistent with #662, while retiring these IDs as independent held-out evidence; or (B) explicitly authorize a separate private assessment architecture and replacement/withdrawal plan. Deleting GitHub files later does not make already-public keys secret again. No unilateral rollback or backend implementation.
- No `ACADEMIC_PASS` granted to any new items; no mastery, learner data, Firebase, THCS, Golden R4 or published JSON changed by this audit.

## CI hygiene on Draft #641

The exact-head 31/10 CI failed at `scripts/test-thpt-release-queue.cjs` because the ChI authoring reconciliation **note** was mistakenly placed under `release-queue/ready/`, reserved for valid release manifests with `PACKET_ID`. On 01/11 this note was moved **byte-for-byte (same Git blob `d53e8b1777809100788c0cb2fb5d14952c042330`)** to `prototypes/thpt/release-handoffs/`, and the misplaced original deleted. The validator was **not** weakened. Recheck both exact-new-head CI runs before calling this audit branch green. This is documentation organization only, not a new release or mathematical change.
