# G10 B18 — Golden learner-copy de-duplication and Vận dụng label R03 (20/11/2026)

**RECEIPT_ID:** G10-CHVI-B18-GOLDEN-OWNER-P2-FEEDBACK-R03-20261120  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE v3.2.0 / Q01–Q18 (ONE effective standard)  
**LESSON_ID:** G10-B18 · **OUTCOMES:** B18_OUT_01..B18_OUT_04  
**MODE:** `DELTA_B_SOURCE_EQUIVALENT` + `DELTA_A_UI` · owner P2 editorial feedback, exact source self-audit, **not independent NotebookLM PASS or OWNER P2 PASS**.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-18.md` (one canonical Markdown).  
**PREVIOUS_B18_SOURCE_BLOB:** `432ef036d598e18e2aac200b2a51599f350164e9` (R02 P1 published, owner reported 99% accepted with minor redundant copy).  
**CANDIDATE_B18_SOURCE_BLOB:** `6ddb8a132aab48ee8a6e2c70bb2b8ce0bfb68af8` (R03 exact source, scope ONLY B18).  
**OWNER_FEEDBACK:** 20/11/2026: B17 owner **P2 PASS**; B18 main content ~99% satisfactory but the tab *Lỗi thường gặp* redundantly links to Luyện tập before the established bottom **Học tiếp: Core và Luyện tập · Tự kiểm tra cuối chương**. Boilerplate urging pupils to reveal solutions only after trying is redundant. Learner application headings must use **Vận dụng**, never **Tự thử**. 

## Author G0/G1/G2 self-QA — source-equivalent editorial delta only

- **Removed one complete duplicated navigation paragraph**, `[Chuyển đến Luyện tập và Vận dụng Chương VI] ... Em chỉ nên mở gợi ý và lời giải sau khi đã tự thử.`, before four D6 disclosures. Kept sole existing bottom `Học tiếp:` navigation to canonical Core/Luyện tập and end-of-chapter self-check.
- Removed **four verbatim reminders** `Chỉ mở lại đáp án ở trên sau khi đã thử giải một lần không xem gợi ý.` from the four `Tự sửa` HELP paragraphs, leaving every problem-specific self-repair instruction intact.
- Changed **four learner-facing administrative labels** `Luyện lại (không nhân bản câu):` to natural `Luyện lại:`, preserving each original linked exercise item/URL and its role in D6.
- Reworded one redundant introductory `Vận dụng` line in Tab Ví dụ to `Vận dụng. Ba câu sau củng cố cách xét điều kiện và loại nghiệm ngoại lai.`, no student task/expression altered.
- Source UI still has **4 exact canonical `**Vận dụng.**` prompts** in Discovery, plus the additional three-question `Vận dụng` in Tab Ví dụ. There is **no visible Tự thử heading**. Internal historical `data-thpt-first-try-id` canonical attribute stays unchanged for Q15 identity; internal technical names are not student-facing titles. Original standard four Golden tabs unchanged.

**Academic/source integrity:** Exactly **176 TeX expressions** byte-identical in old/new, including **10 display blocks**; original mathematics/conditions/formulas and four examples completely unchanged. Four `data-thpt-first-try-id`: `THPT-G10-CHVI-TRY16`, `THPT-G10-B18-C01`, `THPT-G10-CHVI-TRY18`, `THPT-G10-CHVI-TRY19`; four matching `data-thpt-help-id`: `HELP-G10-CHVI-TRY16/17/18/19` and four outcome placements unchanged. **Four `thpt-r4-first-try-answer` HTML bodies byte-identical**, existing one SVG, three concept/rule semantic cards, four self-contained HELP five-step diagnoses retained. No new ID, no answer/rubric, no Core/Practice bank, Q16/Readiness/Final Submit/Mastery/RD1, no shared runtime/CSS/GitHub workflow change.

**Q18_PREVENTION:** updated [cumulative issue #795](https://github.com/TMA2015/self-learning-math/issues/795) with owner B17 P2 acceptance and B18 "do not duplicate navigation/reveal reminders"; follow G0 read old anti-repeat, G1 ensure one learning journey link at end and all visible headings `Vận dụng`, G2 read four tabs from learner's perspective, G3 browser checks only for B18 at 390/820/1440 with Q15/Q16 and 10/10 MathJax; no 79/27/whole-site test. Source-specific R03 receipt extends immutable R02, no historical receipt edited.

**AUTHOR_SELF_QA_SIGNOFF:** `P0=0`, `P1=0` for exact editorial/source-equivalent scope only. **RELEASE_STATE:** in PR / QA pending until GitHub Actions; **OWNER_B18_P2_PENDING**, not automatically passed by deploy.