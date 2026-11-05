# G12 SGK ChIV R00 — AUTHORING structural QA & source receipt

PACKET_ID: G12-SGK-CHIV-B11-B13-R00-REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
PERMANENT_SOURCES_VERSION: THPT-v2.1 (for independent NotebookLM, not yet invoked)
STATE: AUTHORING_DRAFT_R00
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
SGK_S1_SHA256: 3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb
SBT_S1_SHA256: 823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1

## SHA-256 for exact review files (author-computed, reviewer not yet attested)
| File | SHA256 | Bytes |
|---|---|---:|
| `Temp_FIG-G12-CHIV-B11-PRIMITIVES-R00.png` | `9d0115bb7c7a27a502f89b004a9e0b9bb7d0f95147936098de166b866aad2602` | 130586 |
| `Temp_FIG-G12-CHIV-B12-NEWTON-LEIBNIZ-R00.png` | `323ae918430689048cc0b6829bd1692070d53a5dd963ca1a39e1af1c2211f8c8` | 57412 |
| `Temp_FIG-G12-CHIV-B12-SIGNED-AREA-R00.png` | `858cd834ef7f37f96a0c9c30f4ea689c42769f1712088c30dd8b074232fdbd94` | 72154 |
| `Temp_FIG-G12-CHIV-B13-REVOLUTION-R00.png` | `3ab1cfe0491ae36120ba39f7b5fe2a7e1456b98efad62921a2c28f3e01516108` | 66929 |
| `Temp_FIG-G12-CHIV-B13-TWO-CURVES-R00.png` | `28ca3aec16c0beedef37bcffc88f239886ae19fe4c6d2a7182ea37e1a00f5901` | 74893 |
| `Temp_FIG-G12-CHIV-B13-VOLUME-SLICES-R00.png` | `361453d5764de8985d85dc4ddfd540cc92c239cd606ba0396e0aa8d5323159da` | 73430 |
| `Temp_G12_CHIV_B11_LEARNING_R00_20261103.md` | `d17f3905bc770823a6b6f8c81bae44e0ed909db0e47a07271e1431afa9c19c9f` | 35915 |
| `Temp_G12_CHIV_B12_LEARNING_R00_20261103.md` | `40a70eca204e97c40c1bc8a8d466cfee2353a0fc494b168c2c85281a74d0bd98` | 36494 |
| `Temp_G12_CHIV_B13_LEARNING_R00_20261103.md` | `26dafeae1017a818055e6322929355ba7af01c398604344e51e2e37af04c42d2` | 42142 |
| `Temp_G12_CHIV_END_CANONICAL_Q01_Q18_R00_20261103.md` | `867f89ff4119204b5317c26a287d337e406d03b9432c18320e035a095c6b20c7` | 4768 |
| `Temp_G12_CHIV_RD1_PRIVATE_REVIEW_ONLY_R00_20261103.md` | `c503b79dfd49e7b50cd3eebbe6d03a0f6f0025fe348b0e744642eec7c3fe9c74` | 9306 |
| `Temp_G12_CHIV_S1_AUDIT_OUTCOME_MATRIX_R00_20261103.md` | `168a9a04cb723ad9de0a1161b1d45bfeab4313a504602cf4d28798cff2ceaf04` | 17130 |

## Structured internal QA gates
- PASS PDF SHA256 + viewed printed-page↔PDF correspondence on exact ChIV S1 slices; source boundaries B11 SGK4–11, B12 12–18, B13 19–26, end27–28; SBT3–8,9–13,14–18,19–21 respectively.
- PASS 22 outcomes unique (B11 7, B12 7, B13 8), 88 distinct canonical PUBLIC ITEM_ID (22 Core, 22 Practice, 22 Application, 22 Written /5); 88/88 item–outcome–role assignments.
- PASS 22 end-of-chapter public placements reuse 22 Application IDs, no duplicate stem or new canonical item; one shared Written bank, 6 anchor tags not cloned.
- PASS 22 reasoned D2 examples, 22 five-step D6 same-outcome HELP, 6 Tự thử (2 per lesson) before Core, 6 original SVG parsed and 6 PNG screenshots for NotebookLM.
- PASS 26/26 RD1 IDs unique (22 outcome + 4 integrated), held-out texts and answers only in private review file; NOT for public GitHub/Firebase/JS/static site.
- PASS sympy independent recomputation of 28 representative definite-integral checks and 6 protected RD1 arithmetic/area calculations; all checked against authored answers.
- RELEASE QA of GUI/Final Submit, actual device and official RD1 security remains NOT DONE; this authoring file does not claim academic/pass or website deployment.

## Notes for independent reviewer
- Some SBT exercises include richer manipulations such as algebraic expressions and applications; decide whether our per-outcome set really proves enough self-study depth rather than counting items.
- Examine edge cases: piecewise intervals for ln|x|, no imaginary ln x for x<0, base a^x with a>0 and a≠1, no +C in definite integral, signed vs absolute area, crossings f=g, radius vs diameter, squared radius in π∫f² and dimensions.
- For protected RD1, inspect mathematical originality, coverage, rubric/5 and any accidental overlap. A PASS has to apply to the exact R00 files/hashes, not a future modified wrapper.
- Normalize the Q01–Q18 names to the one canonical normative GitHub document, not a new standard; preserve the exact original reviewer text when received.
