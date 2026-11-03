# G11 SGK · Core/Luyện tập B01–B33 — RELEASE AP2 audit (03/11/2026)

**ROLE:** RELEASE · **CLASSIFICATION:** \`DELTA_A_UI\` / \`BLOCKED_BY_RELEASE_AP2_G11_CORE_PRACTICE\` (until exact-head browser QA and P1) · **STANDARD:** one \`SLM-THPT-QUALITY-ONE\` Q01–Q18, current v1.1.0. Academic source/review snapshots remain immutable.

## Owner UAT evidence

Three screenshots from the currently deployed G11 ChIX B31 Core show the unrendered **literal dollar delimiters** \`$f(x)=x^2$\`, \`$f'(0)$\`, \`$f(x)=3x^2+2x$\`, \`$f(x)=1/x$\`. This is demonstrably student UI rendering, not a changed mathematical definition or answer.

### Reproducible source audit of all nine G11 chapters

Read **all 10 original JS banks** used by \`thpt-r4-preview.js\` for B01–B33; counted 359 canonical PUBLIC Core/Practice items with 359 distinct \`item_id\`, every lesson B01–B33 represented. Breakdown:

| Bài | Public items | Symptom from source |
|---|---:|---|
| B01–B04 | 42 | Unicode/plain expressions; run browser visual QA |
| B05–B07 | 36 | \`u_n\`, \`u_1\`, \`u_{n+1}\` visible raw indices |
| B08–B09 | 28 | Unicode/plain expressions; browser visual QA |
| B10–B14 | 30 | Unicode/plain expressions; browser visual QA |
| B15–B17 | 30 | Unicode/plain expressions; browser visual QA |
| B18–B21 | 41 | \`(2/5)^(-2)\`, \`81^(3/4)\`, \`2^(√2)\`, \`a^(-1/2)\` raw powers |
| B22–B27 | 51 | Unicode/plain expressions; browser visual QA |
| B28–B30 | 39 | Unicode/plain expressions; browser visual QA |
| B31–B33 | 62 | 112 stem/hint/solution source fields contain \`$...$\` that MathJax default does not recognize as inline math |

These are **display-evidence counts**, not academic completeness thresholds or novel Academic PASS. Audit targets each item's stem, four-choice labels if present, hint, solution, modal navigation, and responsive layout; independent Readiness is out of scope.

## Root cause and minimal delta

The dynamic \`showReviewed()\` function writes the original string directly via \`textContent\` for prompts, choices, hints, and solutions, then calls \`MathJax.typesetPromise([card])\`. The stock MathJax inline delimiter recognizes \`\\(...\\)\`, **not** \`$...$\`. A previously merged SGK typography fixer applies inside \`.md-content__inner\` only, not the injected modal, so it cannot repair this.

**Fix:** renderer-only, within G11 PUBLIC formative cards: parse paired TeX delimiters into safe \`\\(...\\)\`/\`\\[...\\]\` text nodes and conservatively typeset unambiguous bare \`^/_\` using semantic \`<sup>/<sub>\`. Ambiguous \`a^1/2\` / \`a^u(x)\` remain untouched rather than changing intended mathematics. No source-bank, answer, worked solution, rubric, item role/ID, data storage, RD1, THCS or Firebase changes. G10 historical rendering stays unchanged.

**Acceptance:** source QA covers all 359 public canonical items/33 lessons; browser QA covers every Core and Practice role, all B01–B33, on at least one mobile viewport, with additional phone/tablet/desktop proof of TeX typesetting, indices, powers, hidden hint/solution until intentionally opened, no source leakage, horizontal overflow guard and THCS isolation. R4 and Roadmap exact-head checks must both succeed, then owner-authorized merge/deploy + gh-pages readback. Physical Safari P2 is separate and OPEN.

**Progress:** release PR under QA; source receipt/Academic PASS unchanged. Do not reuse a green CI from an older HEAD, or call the display defect an academic source failure.
