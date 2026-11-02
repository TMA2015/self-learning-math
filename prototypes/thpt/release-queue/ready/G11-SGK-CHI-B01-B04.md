# G11 SGK Chương I B01–B04 — canonical READY packet (new THPT-TWO-LANE-V2)

PACKET_ID: G11-SGK-CHI-B01-B04
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: CONTENT_READY
SOURCE_COMMIT: bec760c9db4c424302c203cad869e91a45236139
CURRENT_PR: authoring #681; release integration #697 remains DRAFT / owner-paused; governance process PR #699 open
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md
ACADEMIC_SOURCE_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/G11_SGK_CHI_B01_B04_R03_COMBINED_INDEPENDENT_REVIEW_RECEIPT_20261102.md
REVIEW_RECEIPT_BLOB: 4a7831cea1738a0d57f3e60bf6791f995aa693d8
AUTHOR_HANDOFF: prototypes/thpt/release-handoffs/G11-SGK-CHI-B01-B04_HANDOFF_V2_20261102.md
REVIEW_RECEIPT: independent R01 whole-chapter Academic PASS #682 + targeted B03/B04 PED R02 PASS + owner-supplied independent B01/B02 PED R03 PASS, all exact source SHA reconciled in review receipt 4a7831cea1738a0d57f3e60bf6791f995aa693d8
ACADEMIC_VERDICT: PASS_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: PASS_ON_LOCKED_SNAPSHOT
BLOCKERS: NONE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## A — nguồn học thuật / bản quyền biên soạn

- [x] A1_SOURCE_SNAPSHOT — Frozen canonical 99870-character public Markdown R03 source Git blob 256ceb5edc5e02aec320e83e99c8e08e035654f3; unchanged R01/R02 lines locked by author audit and individual reviewer scopes.
- [x] A2_SGK_SBT_SCOPE — SGK Toán 11 KNTT tập 1 B01 5–16 B02 17–21 B03 22–30 B04 31–39, cuối 40–41; SBT corresponding 4–30 verified reviewer receipts, listed per lesson in V2 handoff.
- [x] A3_NOTEBOOKLM_VERDICT — Owner-supplied independent R01 whole-chapter Academic PASS plus R02 PED PASS for B03/B04 and R03 PED PASS for B01/B02, reviewer packet IDs and content mapping source-locked; P0/P1/P2=0.
- [x] A4_ITEM_OUTCOME_IDS — Exactly 4 lessons, 26 unique RD0 outcomes, 46 unique public items (42 Core/Practice and 4 Written/Anchor); all 46 rows map one-to-one to outcomes and source section in handoff.
- [x] A5_D1_D6_SCOPE — Source contains original full four-lesson D1–D6, 18 guided examples, 42 formative, 4 shared Written, 6 original SVG, 8 D6 help; reviewed new PED explanations and self-tries source-locked.
- [x] A6_DELTA_RESOLVED — R01 Academic PASS frozen; B03/B04 R02 material pedagogy reviewed independently with zero delta; B01/B02 R03 material pedagogy reviewed independently zero delta; all 949 previous R02 source lines remain unchanged.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — 20 held-out Chapter RD1 Written with /4 rubrics remain in private canonical archive, only custody SHA-256/IDs count in handoff; no stems/keys/rubrics in GitHub; self-check is no Mastery.

## PED — pedagogy independent learner progression (SOURCE ONLY, not UI AP)

- [x] PED1_MOTIVATION — B01 wheel rotation, B02 sin combined angle, B03 rotating point as function, B04 inverse equations: R03 B01/B02 and R02 B03/B04 independently PASS in reviewer receipts.
- [x] PED2_PREREQUISITES — Earlier right-triangle trig/angle/radian, unit-circle and vector meaning precede calculation; G11 B01→B02→B03→B04 link evidence in exact R03 source and V2 outcome register.
- [x] PED3_MEANING_FIRST — Concept formation and explanation before formulas for all B01–B04; original R01 source text not altered and each change independently cleared under R02/R03.
- [x] PED4_EXPLAINED_VISUAL — Two B01/B02 unit-circle/ray figures and four B03 sin/cos/tan/cot SVG are accompanied by source-exact interpretation and boundary/axis guidance; 6 XML sources remain unchanged.
- [x] PED5_REASONED_EXAMPLES — All 18 original D2 examples have separately reviewer-approved WHY notes (7 B01/B02 R03, 11 B03/B04 R02), using canonical original answers and mathematical conditions.
- [x] PED6_FIRST_TRY_REMEDIATION — One ungraded pre-Core first try per lesson with voluntary reveal and D6/Core fallback; R02/R03 scoped independent PASS, never assessed as independent SGK_CHAPTER_READINESS or Skill Mastery.

## R — Nhánh PHÁT HÀNH phải tự nghiệm thu trên release HEAD

- [ ] R1_INTEGRATED_CURRENT_MAIN — Chưa tích hợp reviewed R03 concept-first into release PR #697 on current main; release lane separately owns exact canonical source integration and navigation.
- [ ] R2_EXACT_HEAD_CI — Chưa có QA R1–R5 trên final integration HEAD after accepted source; prior four workflows GREEN on historical #697 HEAD cannot certify future combined release source.
- [ ] R3_CLEAN_STUDENT_UI — Chưa nghiệm thu AP1–AP5 actual rendered learner interface and no internal review metadata, headings and mobile MathJax; release lane owns tests.
- [ ] R4_ASSESSMENT_SAFETY — Chưa nghiệm thu Chapter Final Submit, pre-submit leak prevention, no automatic scoring Written /4, no Mastery/Readiness evidence writes; separate Issue #662 runtime lane.
- [ ] R5_OWNER_APPROVAL — Owner explicitly PAUSED Math publishing on 02/11/2026; academic source readiness does not resume automation or authorize merge/deploy until new explicit owner decision.

## AP — Presentation and learner-facing QA — RELEASE OWNED

- [ ] AP1_IDEA_HIERARCHY — Release must verify B01–B04 each concept and evidence under separate clear headers after integrating the R03-first source; academic text approval not UI signoff.
- [ ] AP2_FORMULA_VISIBILITY — Release checks MathJax/rad/sin/cos/tan conditions and equations on real HTML/viewport at the exact candidate HEAD; no overflowing inline code or formula.
- [ ] AP3_FIGURE_READABILITY — Release validates six SVG figures' actual geometry/axes/alt/labels and associated explanations on desktop/iPhone/iPad; source content review cannot certify rendering.
- [ ] AP4_SELF_STUDY_CLARITY — Release checks the concept-first process and all D2 methods, 4 voluntary self-tries, Core/Practice and D6 remediation links as encountered by first-time learners.
- [ ] AP5_RESPONSIVE_VISUAL — Release checks real 390/820/1440 layouts and actual-device iPhone/iPad evidence as required, with Golden R4 and THCS regression; virtual viewport tests are not P2.

## P — Publication evidence, not authoring

- [ ] P1_DEPLOY_RECEIPT — No production content merge/deploy permitted in the owner PAUSED phase; future release provides actual main and gh-pages artifact/content and live URL receipts.
- [ ] P2_DEVICE_UAT — Real iPhone/iPad Safari evidence requires separate owner/device verification after actual release; authoring source gate is not physical-device UAT.

**SOURCE / REVIEW LOCK:** Canonical R03 academic source Git blob `256ceb5edc5e02aec320e83e99c8e08e035654f3`; combined review receipt blob `4a7831cea1738a0d57f3e60bf6791f995aa693d8`. R01 and R02 immutable source locks and actual owner-provided R03 reviewer report are enumerated in AUTHOR_HANDOFF. No confidential RD1 published; no learner runtime changed by this packet.
