# G10 ChIII B06 — S1/PED/Golden Q18 self-verified source receipt R01

**DATE:** 2026-11-16 · **PACKET_ID:** `G10-CHIII-B06-S1-PED-GOLDEN-R01-20261116`  
**SINGLE_STANDARD:** `SLM-THPT-QUALITY-ONE` · Q01–Q18 (source standard v1.0, current X-F learning-presentation interpretation recorded in #862); no independent second academic standard  
**SCOPE:** `SGK / G10 / CHIII / B06 / PUBLIC_KNOWLEDGE_ONLY`  
**Q18_VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · **ACADEMIC_SIGNOFF:** `AUTHOR_SELF_VERIFIED_ENRICHMENT` · **NOT** independent NotebookLM PASS  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (substantive discovery, S1 order, new worked examples, first-try placement); `DELTA_A_UI` (4-tab semantic numbering, concept color/keyboard only B06). Original formative data and Q16 source unchanged.
**SOURCE_S1:** SGK Kết nối tri thức với cuộc sống, Toán 10 tập một, printed pp38–43; source reproduction https://www.sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-he-thuc-luong-trong-tam-giac-3097/bai-6-he-thuc-luong-trong-tam-giac-11155.html inspected and cross-checked with independent draft audit PR #862. Exact NXB-original PDF/SBT page scan and printed-to-PDF-index offset **NOT reopened**. **SOURCE_SCAN_AUTHORITY_PENDING**; no fabricated source receipt.
**AUDIT_INPUT:** PR #862, `prototypes/thpt/ux795/G10_CHIII_B05_B06_DEEP_S1_PED_TRANSFER_AUDIT_R01_20261114.md`, B06-F01–F06, old read-only audit SHA `f44c6c7fa6c3108ad96e928e131fe769581f822d`. Existing #862 unmerged source audit has no direct authorizing change to this PR.

**BASELINE_MAIN_COMMIT:** `4e56253371f31bdea71b22f6124bd56a8e0b0481`
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-iii/bai-6.md`
**BASELINE_LESSON_GIT_BLOB:** `3a2f4392357b0a7155488ba2427fbb2dde0dde81`
**CANDIDATE_LESSON_GIT_BLOB:** `a695e0f55879350ecac0ea867136da28c62eac33`
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`
**BASELINE_CSS_GIT_BLOB:** `d295a0574ec439bd4fa390e68d44816c8dc133cc`
**CANDIDATE_CSS_GIT_BLOB:** `a6f5061a0660ad5ae32867e3639d4a375e05fe29`
**JS_PATH:** `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`
**BASELINE_JS_GIT_BLOB:** `48b0a313a6b014992e69be9a19bf0546993c249b`
**CANDIDATE_JS_GIT_BLOB:** `1d78bd34bd51233a48669b1358b228eb99fbc34d`
**B05_ACCEPTED_LESSON_BLOB_FROZEN:** `79f8101d34430bc0d672558115191a95875014a6`
**FORMATIVE_BANK_UNCHANGED:** `docs/assets/javascripts/thpt-chiii-reviewed-formative-v1.js` Git blob `413d63fecc8b984a429cba99a5d170828384eab5`
**CHIII_PUBLIC_SELF_CHECK_UNCHANGED:** `docs/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong.md` `8a850bb64b389038ff82a56a4b17ba78913824b3`
**B06_D5_SVG1_UNCHANGED:** `THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg` Git blob `0dd2f62277ae264fb4f6d6c99699d5a984a0b562`
**B06_D5_SVG2_UNCHANGED:** `G10_B06_SURVEY_RIGHT_TRIANGLE_R01.svg` Git blob `1b7e617d00fe8d03ab17522d4db9937447b62f7a`

## S1 hierarchy and pedagogical evidence

Authentic four **major** SGK sections, in verified order:
1. `2.1. Định lí côsin` → `2.1.1` SAS / cosine from projected side, `2.1.2` SSS / angle retrieval
2. `2.2. Định lí sin` → `2.2.1` opposite-side pairing, `2.2.2` non-unique SSA
3. `2.3. Giải tam giác và ứng dụng thực tế` → `2.3.1` choose SAS/SSS/ASA/AAS, `2.3.2` indirect surveying
4. `2.4. Công thức tính diện tích tam giác` → `2.4.1` inradius/pr, `2.4.2` sine-height, `2.4.3` circumradius/abc/(4R), `2.4.4` Heron derivation using cos and sin.

**B06-F01:** Tab1 is now five natural, continuous `1.1–1.5` segments covering **why learn**, prerequisites, projected cosine correction, sine from circumcircle, strategy for solving, altitude→area, dividing by incenter→\(S=pr\), substituting sine law→\(S=abc/(4R)\), 3-side rationale/validity for Heron. These are genuine explanatory paths, not heading-only PED badges.
**B06-F02:** Tab2 was previously `cos→sin→area→Heron→solving`; now exactly `cos→sin→solving→area` with **ten** nested outcome subheadings, as in SGK; no original true mathematical content silently deleted.
**B06-F03:** Tab2 original `b=6,c=8,A=60°` SVG retained, with concise figure-reading caption rather than duplicate solved prose. Original full Tab3 `b=6,c=8` and Heron `13,14,15` clones replaced by different self-verified transfer cases. First two original D5 SVGs remain unchanged; R4 mobile actual readability must be checked, not inferred.
**B06-F04:** Canonical `TRY06` no longer pre-answered by Tab1's exactly same `120°` table; Tab1 comparison uses \(60^\circ,90^\circ,150^\circ\) instead. `TRY10` original question is now **before** original survey SVG/caption carrying answer; learner encounters self-try first. Keep open/reveal opt-in semantics.
**B06-F05:** Public Core/Practice B06 P01/P03 were historically same triangle family and are **not altered** in this PR; cannot claim practice bank gained new independent family. Tab3 introduces multiple truly different new families for teaching/transfer without corrupting approved public bank.
**B06-F06:** Original 950px SVG source art retained. At phone and narrow tablets (≤740px), B06-only CSS now presents each vector figure at 760px within its own horizontally scrollable figure (≈15px effective size for 19px source labels); no global page horizontal overflow. Actual image width, scroll containment, decoding, accessible caption and no main-page overflow remain browser QA gates.

Four Golden L1 tabs preserved; Tab1 five real discovery headings `1.x`, Tab2 four true S1 major `2.x` with ten `2.x.x` subtopics, Tab3 four distinct examples `3.1–3.4`, Tab4 two scoped D6 cards `4.1–4.2`. Four formal theorem/formula `thpt-r4-concept-card` elements highlighted teal by CSS **only when B06 canonical marker `TRY06` exists**; four existing amber/learner-summary elements remain amber. Dark/light scope for B06; B01–B05 accepted Golden CSS unchanged. B06 has own route-only ArrowLeft/ArrowRight handling on four tab radio/label pairs; mouse/touch/focus protected, no global keyboard interception.

## Mathematical recalculation of changed example data

- **Discovery** \(b=c=5\), \(A=60^\circ,90^\circ,150^\circ\): \(a^2=25,50,50+25\sqrt3\) respectively; no full `A=120^\circ` answer shown before `TRY06`.
- **EX3.1** \(b=9,c=7,A=60^\circ\): \(a^2=81+49-63=67\), \(a=\sqrt{67}\approx8.18535\), \(S=(1/2)\cdot9\cdot7\cdot(\sqrt3/2)=63\sqrt3/4\approx27.2798\).
- **EX3.2** \(A=45^\circ,B=75^\circ,a=6\): \(C=60^\circ\), \(2R=6\sqrt2\), \(R=3\sqrt2\), \(b=3(\sqrt3+1)\), \(c=3\sqrt6\). Check opposite largest angle \(B\) ↔ longest side \(b\).
- **EX3.3** \(a=10,b=13,c=13\): \(p=18,\ S=\sqrt{18\cdot8\cdot5\cdot5}=60\), \(r=10/3\), \(R=169/24\). Independently, height from the equal sides is \(\sqrt{13^2-5^2}=12\), so \(S=10\cdot12/2=60\).
- **EX3.4** baseline AB=80m, \(A=35^\circ,B=75^\circ,C=70^\circ\). \(AC=80\sin75^\circ/\sin70^\circ\approx82.23334\)m and \(BC=80\sin35^\circ/\sin70^\circ\approx48.83098\)m. The largest side AC opposes \(75^\circ\) as required.
- **Original figure1:** \(b=6,c=8,A=60^\circ\), \(a^2=52\), \(a=2\sqrt{13}\), \(S=12\sqrt3\). Figure and label geometry remain true.
- **Original survey figure2/TRY10:** \(AB=20\sqrt2\), \(A=B=45^\circ\), \(AC=BC=20\), \(CH=10\sqrt2\). The original user question is located *before* the SVG and solved caption; canonical answer collapsed until opened.
- **Heron derivation:** \(16S^2=4b^2c^2-(b^2+c^2-a^2)^2=(a+b+c)(-a+b+c)(a-b+c)(a+b-c)\) algebraically correct; with \(p=(a+b+c)/2\), \(S=\sqrt{p(p-a)(p-b)(p-c)}\) for valid nondegenerate triangle.

## Q15/Q16 boundaries

**Exact original public B06 canonical first-try blocks preserved in stem, one item ID each, complete answer and reveal disclosure text**: `THPT-G10-CHIII-TRY06`, `TRY07`, `TRY08`, `TRY09`, `TRY10`. Only label “Em vận dụng.” → “Vận dụng.” and **placement/order** within Tab2 change. New order is `TRY06,TRY07,TRY10,TRY08,TRY09` in authentic S1 section progression; Q15 is canonical identity, not arbitrary numeric order. All original two D6 IDs preserved: `HELP-G10-B06-01`, `HELP-G10-B06-02`. No sixth item or third HELP invented. Last B05 public calculator item `THPT-G10-CHIII-TRY11` retained untouched.

**No official evaluation mutation:** no changes to `THPT-G10-CHIII-C*` or `P*`, Written/Anchor, ChIII protected Final Submit (14 original), RD1 private or mastery state, Firebase, Gemini, ChIII readiness, Golden THCS or THPT other lessons. All five B06 Knowledge self-compare exercises remain `CLIENT_SELF_CHECK_NO_MASTERY`. Merely moving an existing question before a worked illustration does **not** reclassify it as independent RD1 held-out evidence; Q15/16 role contract unchanged.

## QA and release gates

- **Self-QA academic/PED:** original audit #862 B06-F01–F04 addressed in source candidate; F05 overlap not altered, F06 pending real-render AP QA. Self-QA is **not** a new independent NotebookLM Academic/PED PASS and does not overwrite historic reviewed snapshots.
- **Static checks:** 4 Golden tabs; 5 discovery headings; 4 authentic S1 major; 10 nested, 4 independent worked examples; 5 exact original TRY+answers; 2 D6 HELP; 2 SVG original; 4 teal definitions +4 amber recap; contained horizontal SVG scroll on narrow widths; one source footer; maths of four examples independently recalculated.
- **RELEASE QA PENDING:** exact Q18 source/CSS/JS blob receipts, 18 B01–B06 browser cases at 390/820/1440, actual SVG MathJax legibility, 4 tab/keyboard arrow behavior, 11 ChIII public First Try total, Q16 protected Final Submit and all 8 exact-HEAD CI workflows. **NO_MERGE/NO_DEPLOY until these succeed.**
- **Standing owner release permission:** after **all** release gates pass, auto-merge/deploy B06 only then inspect GitHub Pages artifact parity P1 and request Owner P2. No B07 start without new owner scope.
