# G10 B01–B23 · Kiểm lỗi trực tiếp sau Vận dụng · Q18 placement receipt R01 · 20/11/2026

**RECEIPT_ID:** G10-B01-B23-KIEM-LOI-PLACEMENT-Q18-R01-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE / Q01–Q18, existing G0–G5 and Golden; **not a new standard or test suite**.  
**PROJECT_ISSUE:** [#795 comment 7039726060](https://github.com/TMA2015/self-learning-math/issues/795#issuecomment-7039726060) and owner directive to check all 23 lessons.  
**SOURCE_BASELINE_MAIN:** `de1f74ef5cbac7ccecea82d4be1b26a14e55cced`.  
**SCOPE:** Only canonical SGK Toán 10 B01–B23 audit. **14 files corrected; 9 files unchanged.**  
**PLACEMENT_DELTA:** `DELTA_A_UI` / `DELTA_B_SOURCE_EQUIVALENT` for verbatim relocation of 52 HELP blocks (with original help IDs, rationale, formulas, and original First Try answer bodies preserved).  
**ACADEMIC_DELTA_EXCEPTION:** `DELTA_C_ACADEMIC_MATERIAL` limited to B23 HELP02 correction of unrelated 3 shirts × 2 trousers -> the actual 4 breads × 3 fillings, and Q15 navigation-only answer metadata update for 4 questions.  
**REVIEW_STATUS:** `B23_DELTA_C_AFFECTED_PART_NOTEBOOKLM_PENDING`, do NOT grant Academic/PED or Owner P2 PASS from source QA.  
**OWNER_P2_STATUS:** Previously signed B22 visual snapshot remains frozen in history; requested placement correction is not yet owner device-accepted.  
**TOTAL_MOVED_SINGLE_CANONICAL_HELP:** 53 IDs, exactly once each; 14 lessons changed.  
**DISCOVERY_DISCLOSURE:** one closed panel `??? tip "Kiểm lỗi"` inserted directly after corresponding voluntary `??? question "Đối chiếu"`, with old detailed HELP text and original title included as learner-facing “Lỗi cần kiểm”. No duplicate HELP/First Try ID and no independent-scoring change.

## Actual Git source chain — auditable 14-lesson placements

| Lesson | Previous exact published source Git blob | Candidate canonical source Git blob | Moved HELPs |
| --- | --- | --- | ---: |
| B07 | `e1487ce01e81738228ae69d4d87cbdc56b5e0c69` | `97a470f04b7082e2ef11e95cc856d3c4b20fb491` | 1 |
| B09 | `3d79a17e9ba39cd0f46077823800f5f38c73e313` | `918f74f080adf8cbc56cd6e0dd9b8f543d262974` | 1 |
| B10 | `b5f72c28668f9cad548bb6ec000dc435d9557652` | `77c23e81c7eaad80321c1b668b70d35d17410984` | 1 |
| B11 | `bae18dce68974edc15f940bf7fb2cca09d99ddf8` | `9d9d2558bde8f22994a65642eb1ec73554d65ce8` | 1 |
| B12 | `a2ea6c909cdd2317188b13c2bde22e7923dba3de` | `985b2bd3fbb46f95023d4fb40991b287940920e3` | 1 |
| B15 | `7f6448acf6e127b6dc40f3e34f155f151bc7d23b` | `1c81d3d5e6553f77a418b6c07697521bd2b1e8e3` | 5 |
| B16 | `b8c808e62e954991004df44db4c69fe9189a949d` | `0c59a3e2211a749fcc78218f84cc931b6889ea8b` | 5 |
| B17 | `a919754501790373425ef20c9e6ab6b4aa9e79f1` | `9d4674f5ecb024e03f308c3aa38249e8df9ce93b` | 5 |
| B18 | `6ddb8a132aab48ee8a6e2c70bb2b8ce0bfb68af8` | `040108cf26978b27da0ccf74a957ab3e0da94544` | 4 |
| B19 | `e80126160dfc7670d7feaaeb55cafa416b8e52ff` | `69da9aa680a7bffde45088c5973aabbdd42f912f` | 7 |
| B20 | `2641517eb3ab845e1e73932b80b9896203442fbd` | `1f3e75e6d4b8e73d45e9aad988c618b4a76a955c` | 5 |
| B21 | `f07de06dcd063c473673b11eeaa3cc28091e21dd` | `5c573ed25227ed5ed7e638770e0d90fc83d4ce87` | 5 |
| B22 | `fa70c2b6d399e94f12bbeeb028a81252424a1879` | `6538d5546bbfc7c73f90158b6ca7ec3b9ca011eb` | 8 |
| B23 | `e0c20af522b61cb69b33ad5f7d4d6bde8c011f47` | `fe7f3cefb1dafeeafcaf82de75c213fc10469a17` | 4 |

## Per-lesson review findings (G0/G1)

- B01–B06: no standalone Vận dụng/First Try in Discovery for these general error tips; unchanged, no artificial "Kiểm lỗi".
- B07: moved unique HELP01, retained one genuinely shared semantic HELP02 used by four Vận dụng. B08: two thematic HELPs shared by multiple questions remain in general errors. B09: moved unique HELP02, retained HELP01 shared by four Vận dụng.
- B10: moved real-world river HELP only, retained two shared coordinate/vector conceptual helps. B11: moved force-example HELP only, retained two shared scalar-product/cosine helps. B12: moved one calculator-specific HELP, retained accuracy/relative-error general thematic HELPs. B13–B14: general statistical/dispersion errors remain in Errors, no 1:1 exercise HELP placement.
- B15–B18: all 19 1:1 five-step HELPs moved under real Vận dụng. B18 second exercise's canonical First Try is `THPT-G10-B18-C01`, paired carefully with `HELP-G10-CHVI-TRY17`; Q15 IDs unchanged. Tab "Lỗi thường gặp" may have no enumerated errors, as owner explicitly permits. B18 two original general principle reminders preserved without inventing an error list.
- B19–B22: all 25 1:1 contextual HELPs moved, while two genuinely general historical `D6-G10-B{19,20,21,22}-01..02` per lesson remain in Errors with section numbering 4.1–4.2. Renumbering/intro only; original math untouched.
- B23: four HELP moved under their exact four Vận dụng, while two historical general D6 stay in Errors. Original four answer bodies retained except navigation instruction now points correctly to "Kiểm lỗi" below. HELP02 fixed mismatched concrete remedial numbers (academic material review REQUIRED).

## G2 self-review / boundaries

- Source comparison at same original/candidate SHA: for all 14 lessons, canonical First Try/HELP IDs unchanged; original closed question count unchanged. All original HTML answer bodies byte-identical; all Markdown answers byte-identical except B23's four navigation-only lines. Original math formula multiset preserved; B23 original canonical SVG referenced exactly twice.
- Reused existing Golden `tip` disclosure, closed by default. No new component/stylesheet/route, assessment state, RD1, Mastery, Final Submit, Firebase, THCS, Topic or SGK beyond B23.
- **Important unresolved gate:** Must run actual MkDocs + Chromium placement inspection for the 14 changed lesson sources and existing exact-source Q18, Q15/Q16 checks. Multilesson release cannot bypass existing scoped one-lesson-only production proof. Split clean one-lesson releases after academic/semantic blockers resolved; **no merge/deploy on draft acceptance alone**.

## Reviewer narrow question

Review **only B23 HELP02**: question states 4 breads and 3 fillings, a complete sandwich requires one of each, incorrect attempt is 4+3, corrected practice enumerates four breads B1–B4 paired with three fillings N1–N3 and yields 12. Does the corrected “Kiểm lỗi” explanation correctly remediate the wrong reasoning without revealing answer prematurely, and is placement directly after voluntary Đối chiếu appropriate? Report Academic/PED verdict, affected item `HELP-G10-CHVIII-TRY02`, P0/P1/P2 and minimal delta. No full chapter review merely because other HELPs moved verbatim.
