# THPT SGK 79 — LIVE canonical learner source inventory and historic-draft cleanup

**Date:** 2026-11-19 · **Lane:** RELEASE metadata-only hygiene · **Source of audit:** `main@32429541782518c337887d55db2a2a10bb44266e` · **Disposition:** candidate, not a deploy/academic approval.

## Scope and truth

- Verified original tree has **79 exact learner lesson Markdown files**, G10 27, G11 33, G12 19. Each corresponds to one current site input; no duplicate `bai-N.md` within the chapter-grade scope. This is **not** proof that 79 authoring manuscript snapshots were all consolidated into 79 per-lesson files.
- G10 B09–B12 maintain one explicitly named academic canonical upstream file per lesson in `prototypes/thpt/content-drafts/`; published `docs/...` Markdown is a **derived presentation surface**, not a second manuscript. Other SGK upstream content remains chapter/source-locked and may deliberately contain separately retained component draft and reviewer evidence. Neither an R00 immutable review component nor its later R01 composite may be pruned solely because both exist.
- PR #911 already deleted 27 obsolete G10 `HYBRID_KNOWLEDGE_CANDIDATE_R01/R02` copies from `main`. THIS cleanup retires seven non-public A/B HTML research previews and seven legacy pilot scripts; several legacy scripts referenced already-deleted R01/R02 copies and could no longer run against `main`. None is a live site page or a signed academic receipt. All original bytes remain in Git under the baseline commit above.
- Do not delete/alter canonical source snapshots, Q18/NotebookLM receipts, V2/ready/REGISTER, item IDs, answers, rubrics, SVG/PNG, private RD1 metadata, public learner pages, Golden UI, Gemini, Firebase or student progress. R00, R01, R02 history can remain on HEAD when needed to prove a signed chain. **File count is not source authority.**
- This is strictly an integrity/scope test for RELEASE, **not** a new Q criterion, and not Academic/PED/RELEASE PASS. Later changes to any live learner page must still pass source/receipt/standard and exact-HEAD AP/R gates.

## Unique site input at audit baseline (Git blob SHAs)

### Toán 10 — 27 bài

| Bài | Current learner Markdown on main | Git blob SHA at baseline |
|---|---|---|
| B01 | `docs/thpt-preview/sgk/chuong-i/bai-1.md` | `dba6430cd79b17dee0591fb2dcd075ea5200b126` |
| B02 | `docs/thpt-preview/sgk/chuong-i/bai-2.md` | `3002487e974f2693528a39b2b2055fad8724d698` |
| B03 | `docs/thpt-preview/sgk/chuong-ii/bai-3.md` | `03cf894ec9e4fb55b86201ab43dab21c48337ef3` |
| B04 | `docs/thpt-preview/sgk/chuong-ii/bai-4.md` | `4c8bfa2bd9af3ac5a31da945abdc990ceaee4618` |
| B05 | `docs/thpt-preview/sgk/chuong-iii/bai-5.md` | `79f8101d34430bc0d672558115191a95875014a6` |
| B06 | `docs/thpt-preview/sgk/chuong-iii/bai-6.md` | `2f0b998bb7306b47dff3a4e9f0c8c910edf7f6f9` |
| B07 | `docs/thpt-preview/sgk/chuong-iv/bai-7.md` | `e1487ce01e81738228ae69d4d87cbdc56b5e0c69` |
| B08 | `docs/thpt-preview/sgk/chuong-iv/bai-8.md` | `22e53396caf7753e813c492615a491e1f24cc9fd` |
| B09 | `docs/thpt-preview/sgk/chuong-iv/bai-9.md` | `3d79a17e9ba39cd0f46077823800f5f38c73e313` |
| B10 | `docs/thpt-preview/sgk/chuong-iv/bai-10.md` | `b5f72c28668f9cad548bb6ec000dc435d9557652` |
| B11 | `docs/thpt-preview/sgk/chuong-iv/bai-11.md` | `bae18dce68974edc15f940bf7fb2cca09d99ddf8` |
| B12 | `docs/thpt-preview/sgk/chuong-v/bai-12.md` | `ff22a17265a0b3f66607bdfb132975877a7a6eba` |
| B13 | `docs/thpt-preview/sgk/chuong-v/bai-13.md` | `0459b67858246cb6136cf9a2cf9e7a7d18bd27be` |
| B14 | `docs/thpt-preview/sgk/chuong-v/bai-14.md` | `21c1ef59277f742b45a27900b173fac031a4a04f` |
| B15 | `docs/thpt-preview/sgk/chuong-vi/bai-15.md` | `01d905b7dd058515da590e63af1aeece5b34a081` |
| B16 | `docs/thpt-preview/sgk/chuong-vi/bai-16.md` | `4ddf9c449f92a9f48bace5a3f9b84186bf33af20` |
| B17 | `docs/thpt-preview/sgk/chuong-vi/bai-17.md` | `1a3481ee2020f48e924dae5e8b4f5779b3a2d88b` |
| B18 | `docs/thpt-preview/sgk/chuong-vi/bai-18.md` | `91d22f1af8814ed639ada3ee1c9dae2e9501c4c0` |
| B19 | `docs/thpt-preview/sgk/chuong-vii/bai-19.md` | `8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c` |
| B20 | `docs/thpt-preview/sgk/chuong-vii/bai-20.md` | `510f79eb61930e9b0d7795d4b0288fd29ccb0675` |
| B21 | `docs/thpt-preview/sgk/chuong-vii/bai-21.md` | `0af5e4d9e2348575f2be7de57f81acd00098bc55` |
| B22 | `docs/thpt-preview/sgk/chuong-vii/bai-22.md` | `34288f6ed32a0bf100edbf2ef495a4d9cec3ad2a` |
| B23 | `docs/thpt-preview/sgk/chuong-viii/bai-23.md` | `f63524ef47d2990e00799e772a15f7aab1b2d4ca` |
| B24 | `docs/thpt-preview/sgk/chuong-viii/bai-24.md` | `1d7ac3e42f45ded6023573569c34c6d3d7b753cd` |
| B25 | `docs/thpt-preview/sgk/chuong-viii/bai-25.md` | `eebf2002e558f3c8e2bf049fd9a734bf01cc4f7c` |
| B26 | `docs/thpt-preview/sgk/chuong-ix/bai-26.md` | `dafdfcfd801a0873f73e44d42ac102a1b8ffccbe` |
| B27 | `docs/thpt-preview/sgk/chuong-ix/bai-27.md` | `633c7cd0aaa70cdd1524fce17bb81cbf5d1b9a6d` |

### Toán 11 — 33 bài

| Bài | Current learner Markdown on main | Git blob SHA at baseline |
|---|---|---|
| B01 | `docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md` | `9605eaf510f9f873751e20bef29f4aac848609a3` |
| B02 | `docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md` | `15c4de731bfbaf5b8a141a54d9b5493e7895c752` |
| B03 | `docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md` | `a8a3592c661b06fae94aad386b991f23a6718957` |
| B04 | `docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md` | `71271b2035bfe289ac3ccf6f384d8f41ec55aefb` |
| B05 | `docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md` | `8634196e27b5bac8cb3089f433779b592809d955` |
| B06 | `docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md` | `43b285b679941e0748ad78f377ab9bbdd73ec3d3` |
| B07 | `docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md` | `3d0886889e383cd76963e1fa3a5eef175a389080` |
| B08 | `docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md` | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` |
| B09 | `docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md` | `46aa17f758783330c2b396f9ed36a25ab77a4094` |
| B10 | `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md` | `b55bf3c5122dd967b3b56fe9085eff19e58d509e` |
| B11 | `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md` | `7dccb87d44c1734cf7b5f3c77df209b75db6e63b` |
| B12 | `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md` | `6dc44484c9e12d7dcbf49c40157645ddae577390` |
| B13 | `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md` | `619162cbe9854188c5873e03a69c3fb5afc95b43` |
| B14 | `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md` | `121b165f6bd95cdfa4c33d4a4def678d9121e81c` |
| B15 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md` | `95bbe5ecdd73b92f88176ae0245e11b1098d8e6e` |
| B16 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md` | `a2242eeb50ae0f02643182bf10c315c41ce05c3b` |
| B17 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md` | `36a7c21f3ae2474318c1e857acbcb640680e1326` |
| B18 | `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md` | `fd7d7a33ec276c4e03c95185c5ea49b53643b584` |
| B19 | `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md` | `f872e9f19e28467e1b6ea11a943e04a2edf3b266` |
| B20 | `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md` | `1587f399e7ea9557a9fc490768c589991f25dcb0` |
| B21 | `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md` | `b7fb59866ce1b250e446cb957d975e7c58d037bb` |
| B22 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md` | `d8a679897dde1d2fa25e12df56772eb54be29ff4` |
| B23 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md` | `ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad` |
| B24 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md` | `0bd7550087f455264e2b5e5d3214078e063ccb1c` |
| B25 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md` | `c6ba455035041fbe16ee66f346cb78477ceaaa73` |
| B26 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md` | `417ce70fc81b8a656e803855d0594dfa9db945b2` |
| B27 | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md` | `abd417ddb6d89528eaa8da28c132a126a26738e0` |
| B28 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md` | `86018a916315d313249f958ff2c66acdb52612be` |
| B29 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md` | `51b686118c52605d8c8ab64b2e05d3fea419c1f8` |
| B30 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md` | `7ef2e8be4bca6c64f7ab190ed5d1cde921998373` |
| B31 | `docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md` | `20f6b47a4f56a1531ee695fde11953edfb9661bb` |
| B32 | `docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md` | `078a5d9aca09954fd2b451508152147f6a655015` |
| B33 | `docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md` | `920752c92ab12a97d8e034780907fd2bcaac1308` |

### Toán 12 — 19 bài

| Bài | Current learner Markdown on main | Git blob SHA at baseline |
|---|---|---|
| B01 | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md` | `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c` |
| B02 | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md` | `d6e517a980ec9259345285964f4c42767faa6122` |
| B03 | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md` | `02f4b8a446e89d824b7b08c833fc306ca9db02c6` |
| B04 | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md` | `a9a9a8f823ee85fe53014150b5cda31201867a4d` |
| B05 | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md` | `54c9c90323f7b1d9077270d90627864f5a468c03` |
| B06 | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md` | `8991c8a30487fdf1db65cf31a19b0ed68ef52518` |
| B07 | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md` | `4bfbed222d552f3ccb9c965616245015930ab1cd` |
| B08 | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md` | `c85922428c85ddeb48cec5e2bd5953faa44207c8` |
| B09 | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md` | `4571bac678c36c4fb06d6a7fde45b86703f8ebce` |
| B10 | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md` | `32f4eda1cfd151592eef5a35921ad872c1f644c4` |
| B11 | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md` | `f3fc0f654a21af7ec72de657643ef97488413dcb` |
| B12 | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md` | `2ea14427518e58acb03e85d64dcc6b18d55f8798` |
| B13 | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md` | `51b5cf8243b4793e159db862379a21df60ff75bd` |
| B14 | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md` | `265381a3bcef201aefff38185753a35f706237c1` |
| B15 | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md` | `05a81b707824146d6829ef385091dd4046bbe8fe` |
| B16 | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md` | `b226f2e5e38b0e4eb7d1e12c6dca4a3bae2e629d` |
| B17 | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md` | `29b609be3195efcd341aea39cb604a930dba8468` |
| B18 | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md` | `c5e96be714ed2b3d440c37c5507ddc79314bf087` |
| B19 | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md` | `e9588ca5fcdb107aa62990dc2e36635ef01085c0` |

## Retired non-public prototypes (14 paths)

- `prototypes/thpt/ux795/UX795_HYBRID_CROSSGRADE_AB_20261108.html` · before-delete Git blob `847be28a6287a2a5bda2b3e591fb4e1b18ded7df`
- `prototypes/thpt/ux795/UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `d6f780fb1d8bc6ace7141c17abbdd88984b9c5a5`
- `prototypes/thpt/ux795/UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `1eb94b6042c47686f64481c5716cb94501522345`
- `prototypes/thpt/ux795/UX795_G10_B03_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `57d03267636a0c54d36cc48e83d84b89f55addc0`
- `prototypes/thpt/ux795/UX795_G10_B04_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `2fbe162662f16b4b413e86a1aed9cb6a57016cd8`
- `prototypes/thpt/ux795/UX795_G10_B05_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `92d0f3c2561886230436c67f65f542d78332a037`
- `prototypes/thpt/ux795/UX795_G10_B06_CONTINUOUS_NARRATIVE_AB_R01.html` · before-delete Git blob `182b8621eede5d7195de5c03bcf8093e8312865a`
- `prototypes/thpt/ux795/test-ux795-pilot.cjs` · before-delete Git blob `2cb9ab9299cd538d6a7f9ad422a91908777ea6b5`
- `prototypes/thpt/ux795/test-ux795-g10-chi-pilot.cjs` · before-delete Git blob `b2c7aa8081ecdb76e6e02d8acf8aee6f6f21958e`
- `prototypes/thpt/ux795/test-ux795-g10-chii-pilot.cjs` · before-delete Git blob `1094a9587a8fbf683f722b0d974eba8d0f28a902`
- `prototypes/thpt/ux795/test-ux795-g10-chiii-pilot.cjs` · before-delete Git blob `76d462a1559320b03170b81b1411a904728e39e0`
- `prototypes/thpt/ux795/test-ux795-g10-full-knowledge-r03.cjs` · before-delete Git blob `533d5d0268d447f0204b3e4751fd122953508ee8`
- `prototypes/thpt/ux795/test-ux795-level1-tabs-and-visuals.cjs` · before-delete Git blob `fd68aafaaeb2b41d5f875c27645442fc47ca335f`
- `prototypes/thpt/ux795/test-ux795-math-render.cjs` · before-delete Git blob `5b9ab9d7e71e7162fbedf9747fd9c17529d0386e`

## Proof and gates

1. No production website `docs/`, source-locked packet, item bank, asset, Firebase, Gemini, scoring or Mastery file changes in this cleanup; only the 14 obsolete prototypes/tests above and this new RELEASE inventory/guard/QA workflow.
2. `node scripts/test-thpt-sgk-79-current-source.cjs` checks 79 learner inputs + exact per-grade numbering + absence of 27 retired hybrid drafts and 14 old A/B pilot artifacts/tests; the G10 B09–B12 named academic canonical files remain present.
3. Existing exact-HEAD Roadmap / Q18 / R4 or other applicable CI must PASS. Metadata-only deploy classifier must not publish a new student site. No branch auto-merge, no deploy, no academic re-review, no owner P2 claim.
4. Historic A/B visual proof is retrievable at [pre-prune main commit](https://github.com/TMA2015/self-learning-math/tree/32429541782518c337887d55db2a2a10bb44266e/prototypes/thpt/ux795). Historical 79 Markdown blobs above reflect this baseline only; ongoing lesson improvements naturally update them, so this is an audit snapshot rather than a continually refreshed source of truth.

**Remaining verification boundary:** The entire AUTHORING chapter-based archive has **not** been declared redundant; a complete 79-per-lesson authoring-manuscript consolidation requires source/receipt/handoff dependency reconciliation under its owning lane, not destructive RELEASE deletion.
