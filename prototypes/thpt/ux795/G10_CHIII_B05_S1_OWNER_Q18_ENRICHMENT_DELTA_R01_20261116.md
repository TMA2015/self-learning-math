# G10 ChIII B05 — Q18 self-verified S1/PED/Golden enrichment receipt R01

**DATE:** 2026-11-16  
**PACKET_ID:** `G10-CHIII-B05-S1-PED-CALCULATOR-TRANSFER-R01-20261116`  
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `v3.1.0` · **Q01–Q18 ONE STANDARD**  
**SCOPE:** `SGK / G10 / CHIII / B05 / PUBLIC_KNOWLEDGE_ONLY`  
**Q18_VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · **ACADEMIC_SIGNOFF:** `AUTHOR_SELF_VERIFIED_ENRICHMENT` (not NotebookLM independent review)  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` for calculator/inverse/real-world mandatory outcome and independent transfer; `DELTA_A_UI` for authentic parent hierarchy, Golden visual callout and B05-only arrow navigation.  
**BASELINE_MAIN_COMMIT:** `7491cdd885e98f8d458541caef115dd6fa66b918`  
**SOURCE_S1:** Toán 10 KNTT tập một, Chương III Bài 5, **printed pp33–37**; genuine two main parent sections: §1 “Giá trị lượng giác của một góc” and §2 “Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau”. Reopened online SGK lesson reproduction (sachgiaokhoa247.com B05 11154) and corroborated with #862 audit source. **SOURCE_SCAN_AUTHORITY_PENDING:** edition publisher-original PDF bytes / cover-to-printed-page offset were not reopened; never claim otherwise. Existing B05 source/diagram and historic source custody on original snapshot remain preserved.  
**AUDIT_INPUT:** PR #862 `prototypes/thpt/ux795/G10_CHIII_B05_B06_DEEP_S1_PED_TRANSFER_AUDIT_R01_20261114.md`, findings B05-F01–F06 (prior B05 mandatory calculator outcome P1 source gap).  
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-iii/bai-5.md`  
**BASELINE_LESSON_GIT_BLOB:** `d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2`  
**CANDIDATE_LESSON_GIT_BLOB:** `79f8101d34430bc0d672558115191a95875014a6`  
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`  
**BASELINE_CSS_GIT_BLOB:** `8d04ab90cd887c8223d33e13d47043a895d23bb1`  
**CANDIDATE_CSS_GIT_BLOB:** `d295a0574ec439bd4fa390e68d44816c8dc133cc`  
**JS_PATH:** `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`  
**BASELINE_JS_GIT_BLOB:** `f77fe4725c34015f24a1d963b874a3adb895f7da`  
**CANDIDATE_JS_GIT_BLOB:** `48b0a313a6b014992e69be9a19bf0546993c249b`  
**D5_ASSET_UNCHANGED:** `docs/assets/images/thpt/THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg`, original diagram of (120^\circ), preserved source and semantics.  
**B06_SIBLING_BLOB_FROZEN:** `3a2f4392357b0a7155488ba2427fbb2dde0dde81`.  

## Outcome coverage and diagnostic closure

| OUTCOME_ID | S1/PED outcome & placement | B05-FXX remediation/evidence |
|---|---|---|
| `G10-B05-SEMICIRCLE` | Tab1 intuition → 2.1.1 geometry and `sin=y,cos=x` | B05-F02: concept derived from unit semicircle; four discovery subsections `1.1–1.4`. `THPT-G10-CHIII-TRY01` now **before** explicit endpoint values: self-derive (M(-1,0)) rather than copying. |
| `G10-B05-SPECIAL_ANGLES` | 2.1.2 acute table, self-trial, then obtuse lookup | B05-F03: original `TRY02` is before the 135° table/solved value. No altered canonical key. |
| `G10-B05-TAN_COT` | 2.1.3 formal domain, values and Pitagoras | B05-F03: `TRY03` before explicit endpoint-exclusion table; not a four-answer verbatim repetition. |
| `G10-B05-SUPPLEMENTARY` | SGK main §2 → 2.2.1 two supplementary angle coordinates | `TRY04` preserved; maths has `sin(180°-α)=sin α,cos(180°-α)=-cos α`; tan/cot only when denominator nonzero. |
| `G10-B05-IDENTITY_SIGN` | 2.2.2 Pythagorean/trig identities | Original `TRY05` preserved; positive sin/negative cos for obtuse; tan conditional. |
| `G10-B05-CALCULATOR_ANGLE` | 1.4 and 2.1.4 DEG, sin/cos evaluation, inverse and hidden second angle, 2.2.3 self-trial, Example 3.3 | **B05-F01 P1 CORE SCOPE addressed**: instruction to choose DEG, generic machine-specific caution, 3-step angle workflow, inverse `sin^-1(0.6)`, `cos^-1(-0.6)`, new public canonical `THPT-G10-CHIII-TRY11` with `HELP-G10-B05-03` remediation. New source does not modify eight preapproved B05/B06 practice question keys. |
| `G10-B05-COMPLEMENTARY_BRIDGE` | Grade-9 angle pair 90° vs SGK supplementary 180°, both named and contrasted | B05-F05 PED2 prerequisite supported, not falsely promoted to a third SGK main section. |
| `G10-B05_REAL_WORLD` | 2.2.3 and worked EX3.4 independent rotating-cabin altitude model | Missing application transfer resolved: (H=H_0-R\cos \theta), with angle measured **from lowest cabin position**, explicit valid range. |
| `G10-B05-DISTINCT_EXAMPLES` | Tab 3 worked EX3.1–3.4 | B05-F04: no Tab1/Tab3 same 120° solved exercise, no exact 150° copied Core P01; four problems with method justification, solutions and checks. |

**Source headings:** Tab 1 4 numbered `1.x` conceptual discovery segments, Tab 2 two **authentic parent S1** `2.1,2.2`, seven `2.x.x` meaningful subtopics, Tab 3 four `3.x` worked examples, Tab 4 three `4.x` HELP remediation folds. Four Golden L1 tabs unchanged. First Try answers closed until user explicitly opens; source figure `THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg` unchanged. Three explicit S1 definition/concept boxes teal, other recap boxes amber, CSS qualified only by B05 `TRY01` selector and Golden route class. B04 keyboard function preserved verbatim; B05 uses a separate same-behavior route-scoped keyboard binding; no document-wide key capture. No THCS/G11/G12/Topic changes.

## Independent mathematical checks (candidate content)

- `sin23°=0.390731128489`, `cos123°=-0.544639035015`, `sin35°=0.573576436351`, (2\sin35^\circ\approx1.1471529).
- `sin^-1(0.6)=36.8698976458°`, supplementary angle `143.130102354°`. `cos^-1(-0.6)=126.8698976458°`: single solution on [0°,180°]. `sin^-1(0.65)=40.5416018735°` and `139.4583981265°`.
- **New TRY11:** `cos127°=-0.601815023152` → 4 decimals `-0.6018`. `sin^-1(0.4)=23.5781784782°`, supplementary `156.4218215218°` → `23.6°,156.4°`. Both valid on [0°,180°]. `sin^-1` principal-angle limitation is made explicit; D6 `HELP-G10-B05-03`.
- EX3.2 obtuse `cos=-8/17` → `sin=15/17`, `tan=-15/8`; (15^2+8^2=17^2).
- EX3.4 Ferris wheel R=40 m, H0=55 m, 24 min/rev; 3 min → θ=45°; height `55-20*sqrt(2)=26.71572875 m`, checked initial height 15 m and under center height 55 m. Original SGK wheel numbers *not copied*. 
- Sin is nonnegative for 0–180; cos negative in (90,180); tan undefined at 90; cot undefined at 0,180. Complementary formulas apply only to 0–90 interval as stated; supplementary tan/cot identities have domain conditions.

## Q15/Q16 canonical assessment safety

Original **five** Knowledge self-try canonical items copied unchanged in stem, full answer, result and order: `THPT-G10-CHIII-TRY01` → `TRY02` → `TRY03` → `TRY04` → `TRY05`. Only UI heading “Em vận dụng” → “Vận dụng”, and placements moved before explicit answers. Original `HELP-G10-B05-01`, `HELP-G10-B05-02` retained with existing instructional substance and renumbered titles.

**New sixth question one canonical `ITEM_ID`:** `THPT-G10-CHIII-TRY11`, with `data-outcome-id=G10-B05-CALCULATOR_ANGLE`, public placement `KNOWLEDGE_SELF_TRY` / role `FORMATIVE_PUBLIC`, original answer not reused. New `HELP-G10-B05-03` provides DEG/inverse remediation. This new item is a **public self-compare only** `CLIENT_SELF_CHECK_NO_MASTERY`; it never contributes to official Skill Mastery, Readiness or RD1. Existing B06 `TRY06–TRY10` unchanged. New item makes ChIII Knowledge 11 canonical First Try IDs total (6 B05, 5 B06), 5 HELP total, 3 original SVG total. This is an explicit Q15 delta and requires regression guards updated to the new canonical count; historical 10+4 receipt snapshots stay unchanged on old refs.

**No mutation:** `docs/assets/javascripts/thpt-chiii-reviewed-formative-v1.js`, Written/Anchor, `docs/assets/data/thpt-g10-readiness/CHIII.json`, `docs/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong.md`, protected RD1 and Final Submit, Mastery/Firebase/Gemini, B01–B04 accepted sources and B06 unaffected.

## Release gates — HOLD until proven

- **AUTHOR/Q18:** candidate self-verified against online S1 reproduction and #862; no claim of independent NotebookLM PASS; underlying original PDF offset not verified, `SOURCE_SCAN_AUTHORITY_PENDING` explicitly retained as provenance limitation, not a fabricated source receipt.
- **SOURCE STATIC QA:** 4 Golden tabs; 2 S1 main heading parents; 7 nested subheads; 4 distinct examples; 6 B05 self tries (5 existing + 1 new) and 3 HELP (2 existing + 1 new); original figure retained, no answer disclosure before learner actions.
- **ACADEMIC/PED P0/P1:** within inspected source scope 0 unaddressed documented B05-F01–F06 blockers after corrective delta; yet academic reviewer/owner or actual browser QA remains separate, not inferred.
- **RELEASE QA PENDING:** formal source-chain tests, CSS/JS SHA, 390/820/1440 browser AP, B05 keyboard arrows, MathJax/figure, Q15/16 independent Final Submit regressions, all exact final PR HEAD workflows pass; only then merge/deploy under owner's standing permission and verify gh-pages P1. Owner P2 acceptance *only afterward*. B06 not in this PR.

**MARKDOWN_RENDER_CORRECTION:** R01 initial source draft had first-line indentation (five First Try prompt labels, opening D5 figure tag, two HELP spans) at 8 spaces rather than 4; actual CI/browser exposed missing rendered labels/HELP01. Final candidate corrects whitespace only, restoring all six visible learner prompts, one SVG and all three HELP. This is an internal candidate QA correction, not a modification of any canonical answer or a new source standard.
