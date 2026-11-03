# G12 SGK EXP01–EXP02 · AUTHORING A1–A7 precheck after 9/9 exact-source custody (03/11/2026)

PACKET_ID: G12-SGK-EXP01-EXP02-R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
STATE: AUTHORING_REVIEW_HOLD_NOT_CONTENT_READY
BLOCKED_BY: AUTHORING
BLOCKER_IDS: Q06_D4_WRITTEN_DEPTH; Q18_REVIEWER_SOURCE_PARITY_EXP01_O05; A3; A5; A6
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1: NOT_CREATED_FOR_EXPERIENCE
PUBLIC_SCORE_ENGINE: NOT_IMPLEMENTED_BY_AUTHORING

## Immutable source and original reviewer receipt

- R00 ZIP SHA256: `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f`, 9/9 entries SHA256 matches previous author checkpoint and CRC PASS.
- All 4 original UTF-8 MD and 5 PNG bytes are present in Draft PR #733 at `prototypes/thpt/content-drafts/G12_SGK_XP_R00_ORIGINAL_SOURCE/`; source-lock commit `78bc23671981934e1b27742ff8a322ee9d7d766d`. GitHub Contents API verified exact 9 Git blob SHAs/byte sizes.
- Original EXP01 source Git blob `33275bad107da4e417a99dce0323bc6e67600607`; EXP02 `91b2eba8819b32bd326c2df4435814b5de994d84`; matrix `a080bf79f6744d59bf195f7ad2fa26cf8827bf6b`; QA ledger `39f5ce5bd58d58baf652c3d988012eaba5872e9a`.
- PNG blob SHAs: CAS `86f9de9e`; trapezoid `87e4fe91`; error bound `221bba35`; projection `0e2b45a1`; Möbius `ed786d71` (full SHAs are in the stored Git directory).
- Independent original NotebookLM report owner-supplied and byte-exact stored at `prototypes/thpt/review-packets/G12_XP_R00_NOTEBOOKLM_OWNER_VERDICT_SUBMITTED_20261103.txt`, Git blob `84f41a2e6e53619772d385cec3ae69483d8ae081`. Reviewer *reported* Academic/PED PASS and P0/P1/P2 zero; however its item-level data EXP01-O05 changed from `(2,3,5,4)` to `(2,5,4,1)`, and Q-code names do not match official v1.1.0, so source reconciliation is not yet closed.
- R01 candidate **review-only** source (not a student replacement): `prototypes/thpt/review-packets/Temp_G12_SGK_XP_R01_TARGETED_WRITTEN_O05_NOTEBOOKLM_20261103.md`, Git blob `4eb118bad3e773fcac2e1ef39d71ba2243a75b6a`, local SHA256 `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67`.
- S1 direct original PDF previous session receipt: SGK Toán 12 KNTT Tập Hai, PDF SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`. Printed pp81–84 (PDF1 83–86) and pp85–89 (PDF1 87–91). This session did **not** reopen the original PDF; the previously checked printed/PDF alignment is preserved.

## A1–A7 current precheck — never a substitute for reviewer

| Gate | Current evidence | Gate status |
|---|---|---|
| A1_SOURCE_SNAPSHOT | Exact 9/9 source bytes SHA256/Git blobs, 2 lesson MD, 5 PNG, matrix and QA ledger; no source edits to R00 | **PASS – SOURCE CUSTODY ONLY** |
| A2_SGK_SBT_SCOPE | 2 experiential activities, original SGK S1 printed/pdf receipt; supplementary experiential scope, not mandatory new SGK Core or Topic | **PASS – SOURCE SCOPE** |
| A3_NOTEBOOKLM_VERDICT | Original reviewer reported Academic/PED PASS, but O05 dataset mismatch + Q18 source binding not reconciled | **HOLD – TARGETED REVIEW** |
| A4_ITEM_OUTCOME_IDS | Actual 40 unique public IDs, 10 primary outcomes, 10 Written IDs, 10 duplicate-free END placement references to existing A IDs | **PASS – STRUCTURAL** |
| A5_D1_D6_SCOPE | 10 EX, 10 D6, 5 PNG, 10 rubric /5; D4 Worked solution depth incomplete for W01 and W05 and concise across remaining W IDs | **HOLD – Q06 D4 DEPTH** |
| A6_DELTA_RESOLVED | R01 proposes complete Written solutions under DELTA_C; must receive targeted NotebookLM PASS before applying source/receipt | **HOLD – AWAITING DELTA REVIEW** |
| A7_PUBLIC_PRIVATE_BOUNDARY | No private RD1 contents, no Mastery; 10 END references public A item IDs as voluntary client self-check only; frontend safety belongs RELEASE | **PASS – AUTHORING SCOPE ONLY** |

## PED1–PED6 evidence

- PED1/2/3: each lesson starts with WHY → prerequisites → concept before formal.
- PED4: source explicitly guides reading 5 PNG with coordinates/axes/units; mathematical review of 5 images by author was done from original PNG rather than assuming ZIP checksum is visual QA.
- PED5: worked examples include why and method limits; **Written W01/W05** remain flagged for incomplete model answers until scoped R01 review.
- PED6: four First-Tries before Core (two per experience) and 10 outcome-specific D6 HELP pathways. Self-reveal is a learner-facing integration contract; no website behavior claimed.

## Next gate (not performed here)

1. NotebookLM independent **targeted** R01 verdict for exact 10 W IDs and EXP01-O05 22 m source parity; correction of Q-label mapping under official v1.1.0, SOURCE_RECEIPT citing exact R00 Git blobs; return P0/P1/P2 and MINIMAL_DELTA.
2. Only after targeted verdict PASS, apply exact proposed Written changes into a **new R01 learner source** without editing immutable R00 and store new Git blob/receipt; reconcile A1–A7 at new snapshot/affected IDs.
3. Create one canonical V2 handoff in `release-handoffs/`, one `ready/PACKET_ID.md` manifest and one synchronized REGISTER row only after authoring academic+PED blockers are closed. RELEASE AP1–AP5/R1–R5 and merge/deploy remain excluded.

**CHECKPOINT:** R00 source custody DONE; Q06/Q18 targeted review required; `CONTENT_READY=NO`; `RELEASE_AUTHORIZATION=NO`.
