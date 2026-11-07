# AUTHORING R04 — Tiếp nhận 2 báo cáo NotebookLM từ chủ dự án, đối chiếu SHA và chặn suy rộng PASS sai snapshot

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-EXTERNAL-NLM-UPLOAD-TRIAGE-R04-20261107  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18 (one standard), exact 5 Permanent THPT v2.1 for new targeted reviews.  
**LANE:** AUTHORING · [Draft PR #782](https://github.com/TMA2015/self-learning-math/pull/782). No content bank/site/Firebase/Final Submit/merge/deploy change.  
**DELTA CLASS:** Receipt/metadata triage ONLY. **This file does not grant Academic or PED PASS to new Topic material.**
**INPUT DATE:** 2026-11-07. Two attachments provided by owner in the conversation; raw byte hashes computed from exact uploaded UTF-8 file contents. Files remain user-provided independent evidence; **do not relabel them as a reviewer result for a different source**.

## A. Uploaded G10 M1–M3 NotebookLM report — reviewer says PASS, source does NOT match Draft #782

**Exact uploaded file:** `Văn bản đã dán (1)(20261107-111226).txt`, full uploaded TXT SHA256 `79a7d2ee9c61714ebcae5af586f80180c9cb75e969d5dc59bd3f07137764da62`, 31,173 UTF-8 characters, 108 physical lines. This uploaded text is a **transcript/log plus a report excerpt beginning at line 26**, not an exported standalone exact review-source file or a byte-identical reviewer report source. Do not represent its whole-file SHA as source blob SHA.

**What external report asserts:** 
- Reviewer PACKET_ID `TOPIC-FUNCTIONS-G10-M1-M3-DELTA-C-R01-20261107`; scope `TOP-G10-FUNC-O01..O10` with 10 new `THPT-TOPIC-FUNC-TRY01..TRY10` and 10 `HELP-TOPIC-FUNC-TRY01..10`, Academic PASS, PED PASS, P0=P1=P2=0, MINIMAL_DELTA=0, Content Ready NO, Release NO.
- Reviewer describes 30 historical R01 canonical items (20 Core/Practice, 5 worked, 5 Written), historical Git blob `e1f9a2b84d720c914e63bb81059f81a7d650123f`, original source SGK/SBT KNTT G10 **Tập 1 B06/B07 + Tập 2 B15/B16**, and its own 6-step PED fixed format.
- This is a report **for that alleged source**, not automatically review of our independently authored vertical bridge.

**Actual current #782 source snapshot read back on GitHub:**
- New M1–M3 bridge `Temp_TOPIC_FUNCTIONS_M1_M3_VERTICAL_FOUNDATIONS_PED_DELTA_R01_20261107.md`, Git blob **`fcecb2c97fe7799124809c47045f2087d333afa9`**; has **seven** local First Try disclosure blocks and **zero** occurrences of `THPT-TOPIC-FUNC-TRY01..10` item IDs. The self-tries are informal instructional labels, not official canonical IDs.
- Exact single-file NotebookLM input `Temp_TOPIC_FUNCTIONS_M1_M3_DELTA_C_NOTEBOOKLM_SCOPED_REVIEW_PACKET_R01_20261107.md`, Git blob **`29e067b51aa0b731185be1ddb1f9e40bd0556760`**. Its first header is “TEMP REVIEW SOURCE — Topic Hàm số và đồ thị M1–M3: Chỉ phản biện phần lời dẫn mới DELTA_C”, NOT the “Temp — Chuyên đề Hàm số G10 Mô-đun 1–3: PED R01 DELTA_C” embedded in the user's transcript.
- Actual historical G10 source Git blob **`57eaf0141a5db9bfba91f0e6c863fc7dcc638068`**, historical owner-summary receipt **`95e34644c4520adf748cfe3118d8726a5202e3e3`**. The reported `e1f9a2...` Git blob returned **GitHub 404** in accessible `TMA2015/self-learning-math`; its original bytes/source version cannot be checked in this repo.
- There is **material meaning mismatch for same OUTCOME_IDs**: frozen G10 blob maps `TOP-G10-FUNC-O05` to *hàm từng đoạn/mô hình/điểm ghép* and `O06` to *nhận biết hàm bậc hai*, whereas uploaded reviewer report maps **O05 to bảng biến thiên** and **O06 to hàm từng đoạn**, O07 to nhận biết bậc hai. Thus it is not a harmless file rename or metadata-only offset.
- Source pagination mismatch: reviewer report describes **SBT G10 Tập 2 B15 printed p4–9, B16 printed p10–16**; original byte-verified directly inspected SBT raw SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` has B15 printed **3–9**, B16 **10–15** and PDF 1-based **printed+1**. The result may have used a different locator/book version; do not silently replace our direct original receipt.

**Verdict and action:** `G10_UPLOADED_REVIEW_REPORTED_ACADEMIC_PASS_PED_PASS_OTHER_SNAPSHOT`, **`SOURCE_SNAPSHOT_MISMATCH_HOLD` for #782**. Preserve the owner's report and historical G10 R01 PASS in their actual scopes; **do not modify our 10 canonical outcome IDs, create the ten reported new TRY/HELP IDs, award Mastery or set M1–M3 new bridge to PASS**. Closing condition: submit/provide **exact reviewed source bytes and source/receipt SHA** proving a one-to-one semantic map, or re-review exact #782 bridge blob `fcecb2...` with original S1 and five Permanent v2.1. The already prepared actual single-file M1–M3 NotebookLM review packet (blob `29e067...`) is the authoritative review target for this Draft.

## B. Uploaded Toán 12 Chương I B01 W01/W02 targeted report — valid, **ALREADY PROCESSED IN SEPARATE AUTHORING LANE**

**Exact uploaded Markdown:** `Bao_Cao_Kiem_Toan_Toan_12_Chuong_I_W01_W02_Delta_C_20261107 (1).md`, UTF-8 SHA256 **`0da9a0fecbefb88494afbd674936a2835eac535096ce154d570c420af241da25`**, 10,003 characters / 141 lines. GitHub found byte-identical stored reviewer Markdown **Git blob `9f0466b7ded7d2a7441fdc55768949536f7a680e`**. Scope is EXACT two existing SGK_CHAPTER IDs `THPT-G12-CHI-B01-W01`, `THPT-G12-CHI-B01-W02` only: new **answer/solution/D6**, original two stems and rubric `/4`, W02 only an Anchor tag; independent Academic/PED PASS P0/P1/P2=0. It is **not** new Topic M7 review, not Topic Readiness.

**Already existing authoritative work, do not duplicate it here:** 
- [Draft AUTHORING PR #780](https://github.com/TMA2015/self-learning-math/pull/780) is still open/Draft for the *separate G12 SGK_CHAPTER targeted Delta C*. Its complete canonical G12 ChI R01 source blob `86063e922bbb883f6ae9a3d86049f60ff3fe5562`, one V2 handoff and ready manifest are recorded in that PR/Issue #767 comments.
- Original unmodified G12 SGK Chapter I R00 source `f0862dcdab21dec136e43969f45c42638e7c7574` **ALREADY had historical independent Academic+PED PASS** by owner-review receipt Git blob **`8fef1c7dbd9b404881ff40cec8147c9ae89ef473`** (2026-11-02, five Permanent v2.1, Q01–Q18 PASS scoped to original SGK source), with system exposure HOLD. Its inline `ACADEMIC_VERDICT: INDEPENDENT_PENDING` is **frozen at pre-review creation time**, not current authoritative verdict for that exact unchanged source. Do **not** reset historical reviewer PASS based on an old inline pre-review label.
- Issue [#767](https://github.com/TMA2015/self-learning-math/issues/767) is now **closed**, and current GitHub `main` public bank `docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json` blob **`98c2bafc5ecd8487417e2fd9df8d6fcb28f7cbec`** has **nonempty `answer` and `solution`** for both unchanged Written IDs (confirmed against actual live main readback). This does not prove full production browser UX or private RD1 but means **no new AUTHORING handoff/source patch is needed within #782**.
- **S1 locator caution:** uploaded targeted G12 report quotes SBT B01 printed p4–13, while original G12 full chapter source receipt identifies B01 printed p4–9 (B02 starts printed p10). Preserve report verbatim; do not replace the original page anchor without checking. This difference does not expand the item-level reviewer scope to B02.

**Verdict and action:** `G12_W01_W02_DELTA_C_REVIEW_PASS_RECORDED_IN_PR_780`; `G12_ORIGINAL_SGK_CHI_R00_PASS_RECEIPT_VERIFIED`; `G12_MAIN_PUBLIC_ANSWER_SOLUTION_PRESENT`. No duplicate new item ID, new handoff, new source file, UI change or release action in Topic AUTHORING PR #782.

## C. Remaining valid blockers for cross-grade Topic pilot

- G10 M1–M3 **new pedagogical bridge** exact blob `fcecb2...`: `SOURCE_SNAPSHOT_MISMATCH_HOLD` until reviewer verifies this exact source, even though another G10 packet has a reported PASS.
- G11 M4–M6 and G12 M7 **new Topic pedagogical learning materials**: independent Academic+PED on their own exact Git source blobs still PENDING. **G12 original SGK Chapter I source PASS is preserved, not inherited by Topic M7**.
- Q15: new public transfer candidates need semantic de-dup and reviewer; 10 new TRY IDs in uploaded alternate G10 packet **not** auto-approved for this Draft.
- Q16: private, never-public full cross-grade `TOPIC_READINESS`, Final Submit and Mastery controls remain independent HOLD. A report's Q16 review of a self-reveal source **cannot demonstrate browser/assessment implementation**.
- Q18: preserve exact source/receipt SHA and historic PASS per snapshot, route any source conflict to HOLD, never change old source solely for metadata.

**CHECKPOINT:** OWNER_REPORTS_RECEIVED_2; G10_UPLOADED_OTHER_SNAPSHOT_PASS_RECORDED_BUT_#782_SOURCE_MATCH=NO; G12_W01_W02_PASS_ALREADY_IN_PR780; ORIGINAL_G12_SGK_PASS_RECEIPT_VERIFIED; NEW_TOPIC_M1_M7_ACADEMIC_PED=NOT_YET_PROVEN; FULL_TOPIC_CONTENT_READY=NO; RELEASE=NO.
