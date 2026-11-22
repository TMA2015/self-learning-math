# Temp review evidence: G11 ChVIII B28–B30
Candidate, no independent verdict; no RD1. Receipt blob ae7d3cc54936d7bf88401092cf638776654bde10.
Review copy only, not canonical learner source.

Hãy phản biện độc lập Delta-C của Toán 11 KNTT ChVIII B28–B30 theo đúng 5 Permanent Sources THPT v2.1, SGK/SBT S1 và Q01–Q18 hiện hành. Kiểm tra từng outcome và item/EX, đặc biệt phân biệt xung khắc–độc lập, rút hoàn lại/không hoàn lại, tổ hợp, sơ đồ cây, bảng hai chiều và W03. Trả SOURCE_RECEIPT khóa đúng blob, Academic/PED verdict từng bài/outcome, P0/P1/P2 và MINIMAL_DELTA. Không chuyển PASS cũ sang snapshot mới, không PASS khi thiếu S1 và không cấp quyền RELEASE.

---
# Toán 11 KNTT Tập hai · Chương VIII B28–B30 · AUTHORING source receipt · 22/11/2026

MASTER_TASK: #987 (only master)
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0, main standard blob 488afe2908e0b471320e1d55f775391578d88bba
BRANCH: authoring/sgk-g11-chviii-b28-b30-r02-20261122
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL (learner explanation, examples, first-try); targeted W03 stem clarification with unchanged ID/solution/rubric.
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED, source-scoped only
STATUS: AUTHORING_SOURCE_CANDIDATE_READY; independent verdict/new handoff not attested
RELEASE_AUTHORIZATION: NO

## 1. Canonical source lock
Base 3558dc246c6dba18a48295674a6eaafd4f250cac. Current main was checked against base for the three lesson files, Written and formative bank: all five blobs remain equal. Branch is behind/diverged from main; unrelated main changes not imported or overwritten.

| Canonical path | Old blob | New blob |
|---|---|---|
| docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md | 86018a916315d313249f958ff2c66acdb52612be | 193f97f06c9bdad971b049d37ff835ac6962cbe9 |
| docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md | 51b686118c52605d8c8ab64b2e05d3fea419c1f8 | f86bec27f7265abfba3c4ebb1ecacf8ad61fbc1f |
| docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md | 7ef2e8be4bca6c64f7ab190ed5d1cde921998373 | 7eb64ee31505ea1f57209c02ff312b46cdaf29ad |
| docs/thpt-preview/thu-vien/tu-luan-g11-chuong-viii.md | 378b118788e3cd7ab92ef6bc91ef8cac83063f3a | e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26 |

No parallel learner. Historical R00 review/source PASS is immutable, not a fresh PASS of this change.

## 2. Q01–Q02 · S1 and scope
Historical owner-original SGK/SBT direct page-image receipt: prototypes/thpt/review-packets/G11_T2_OWNER_DRIVE_S1_PDF_VISUAL_SHA_RECEIPT_20261102.md, blob c63ca380fe0416b4ed4214f5192197c7e95d20a6; SGK original SHA256 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491, 114 PDF pages; SBT a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189, 126 pages. For that original edition historical verified PDF one-based index = printed page +1.
SGK lesson print pp66–71, 72–75, 76–78 respectively; historical verified lesson start printed pages 66,72,76 respectively (PDF 67,73,77). SBT verified starts 44,47,49 (PDF 45,48,50); ChVIII answer pages 103–110. SBT endpoints not claimed without fresh check. Current turn cross-check uses historic receipt, original learner and bank, audit #862 and available online lesson excerpts/heading evidence; no fresh original print-page image or full SBT rescan. This is a source limitation, not new independent S1 PASS. 
B28 formal sequence: biến cố hợp, biến cố giao, biến cố độc lập. B29: công thức cộng cho hai biến cố xung khắc, công thức cộng cho hai biến cố bất kì. B30: công thức nhân cho hai biến cố độc lập, vận dụng. Concept formation and extended examples are editorial learner support, not extra official SGK sections.

## 3. Q03–Q14 · actual source-scoped checks
| Lesson | Outcomes / Try | Examples | HELP incl. legacy | Main improvements and conditions |
|---|---:|---:|---:|---|
| 28 | 7/7 | 6 | 10 / 3 | Set/sample/event, union includes overlap, complement and exactly one vs neither, disjoint vs independent with positive probability, replacement vs nonreplacement, complementary independence. |
| 29 | 6/6 | 7 | 8 / 2 | Partition into disjoint regions, addition and intersection bounds, complement, equiprobable unordered combinations and overlap; distinct worked examples same-color and contains either endpoint. |
| 30 | 6/6 | 7 | 9 / 3 | Product only under independence, tests against joint probability with zero boundary, tree branches, complement/at least one, mutual independence for three trials, actual two-dimensional contingency table and no causal inference. |

Four Golden tabs each; concept before rule, 19 unscored voluntary FirstTry with hidden marker and optional comparison plus local remediation; 20 separately worked examples with question/analysis/reasoning/check. 27 distinct HELP markers include all eight legacy IDs. Example IDs retained where matching old family; R02-identified added examples, no claim old review covers changed examples. One footer each. Existing figure assets (no SVG source edit): B28 e74a36b76333707519ac9e1432904e83ffbe408e; B29 1984743b38a2f9855763214608cd264f976976a4; B30 27df5f16c8aa69cf5458f3117abab9eff256970d. Read source SVG text and matched mathematical alt/caption: Venn four regions, counts 9+6+11+14=40, tree leaves 1/2+1/4+1/6+1/12=1. No rendered-browser claim.

18 source assertions per lesson = **54/54** on the three final blobs: Golden tab order, Try count/unique IDs, outcome list and coverage against public bank, optional compare count, HELP count/unique IDs, old HELP retained, all link targets exist, example count/IDs and four fields, SVG and reading cue, one footer, balanced MathJax delimiters, no runtime/script/style or private assessment markers, Written route, Try IDs distinct from public and Written IDs, local D6. This is source QA only.
39 scenario-level arithmetic/set checks = **13/13 B28, 13/13 B29, 13/13 B30**; separate W03 arithmetic check. Checks are not an external academic verdict. Manual read-back included all stems, solutions, and examples. Illustrative outputs: B28 {1,2,4} exactly one, {5,6} neither; without replacement red 1/4 vs 2/4; 24-student partition 5+7+3+9. B29 20/30, 3/6, 0.28, 13+11+7+19=50, impossible union 1.15; 16/36=4/9, 21/45=7/15, 11/21. B30 1/2, 0.2≠0.25, repeated four leaves sum 1, 23/25, 0≠1/12, 0.12=0.3×0.4; negative contingency example 0.12≠0.16 (200 respondents). B29-W03 four disjoint cells 11/36,8/36,6/36,11/36; sum 1. No new P0/P1 detected within checked mathematics/source scope; full S1 review and handoff remain open.

## 4. Q15–Q17 · item and outcome register
| FirstTry ITEM_ID | OUTCOME_ID | Role / placement | Canonical remediation target |
|---|---|---|---|
| THPT-G11-B28-TRY01 | G11-B28-SAMPLE_SPACE | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C01 |
| THPT-G11-B28-TRY02 | G11-B28-EVENT_MODEL | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C02 |
| THPT-G11-B28-TRY03 | G11-B28-UNION | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C03 |
| THPT-G11-B28-TRY04 | G11-B28-INTERSECTION | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C04 |
| THPT-G11-B28-TRY05 | G11-B28-COMPLEMENT | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C05 |
| THPT-G11-B28-TRY06 | G11-B28-DISJOINT | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C06 |
| THPT-G11-B28-TRY07 | G11-B28-INDEPENDENCE | SGK_KNOWLEDGE_FIRST_TRY / B28 | THPT-G11-CHVIII-B28-C07 |
| THPT-G11-B29-TRY01 | G11-B29-ADDITION_OVERLAP | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C01 |
| THPT-G11-B29-TRY02 | G11-B29-ADDITION_DISJOINT | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C02 |
| THPT-G11-B29-TRY03 | G11-B29-COMPLEMENT_PROB | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C03 |
| THPT-G11-B29-TRY04 | G11-B29-VENN_COUNTS | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C04 |
| THPT-G11-B29-TRY05 | G11-B29-PROBABILITY_BOUNDS | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C05 |
| THPT-G11-B29-TRY06 | G11-B29-REAL_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B29 | THPT-G11-CHVIII-B29-C06 |
| THPT-G11-B30-TRY01 | G11-B30-MULTIPLY_INDEPENDENT | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C01 |
| THPT-G11-B30-TRY02 | G11-B30-VERIFY_INDEPENDENCE | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C02 |
| THPT-G11-B30-TRY03 | G11-B30-REPEATED_TRIALS | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C03 |
| THPT-G11-B30-TRY04 | G11-B30-AT_LEAST_ONE | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C04 |
| THPT-G11-B30-TRY05 | G11-B30-INDEPENDENT_VS_DISJOINT | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C05 |
| THPT-G11-B30-TRY06 | G11-B30-REAL_CONTEXT | SGK_KNOWLEDGE_FIRST_TRY / B30 | THPT-G11-CHVIII-B30-C06 |

Public bank unchanged blob b08cfc5dfb8404820b5827d6dc7e2b173d6e23d3, 39 distinct canonical records, 19 lesson outcomes and G11-CHVIII-INTEGRATED preserved. Compare old vs new Written text: exact equality after reversing only the single W03 stem substitution. All eight Written IDs preserved, W03 solution and rubric unchanged; clarified four mutually exclusive alternatives, specifically neither C nor D rather than ambiguous not both. No new parallel Written/Anchor bank. Historical bank labels and version not retagged. Public FirstTry and worked examples are formative source items, no new assessment placements or Mastery. Twenty historic private RD1 items excluded and never opened/copied. Only four learner paths and this receipt/review copy touched. No deployment, Firebase, auth, progress, Final Submit, readiness engine, Golden CSS/JS, Topic modifications or public private-source data.

## 5. Q18 · author signoff and residual blockers
Author signoff on the exact source blobs, 54 structure checks and 39 scenario checks plus W03. AUTHORING_SOURCE_CANDIDATE_READY only. Previous PASS applies to its R00 snapshot. Independent Delta-C Academic/PED review not done; fresh SGK/SBT visual S1 verification incomplete; new V2 handoff / ready manifest / REGISTER parity not attested. Cannot mark CONTENT_READY. Existing integration tests/CI/browser, AP/R and production P1/P2 not verified; RELEASE handles only after appropriate handoff and owner permission. Continue Master #987 at B31 only within owner-authorized SGK scope, preserving unresolved blockers. No merge/deploy.

Prepared review copy is an evidence snapshot, not an alternate learner source. Use exactly five current THPT Permanent Sources v2.1 plus S1 if independent review is requested; do not convert historical PASS to new PASS.


---

# Canonical B28 · blob 193f97f06c9bdad971b049d37ff835ac6962cbe9

# Bài 28. Biến cố hợp, biến cố giao, biến cố độc lập

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VIII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Diễn đạt các biến cố bằng tập hợp, phân biệt hợp, giao, đối, xung khắc và độc lập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Khi chọn một học sinh để khảo sát, có thể bạn ấy biết bơi, biết đạp xe, biết cả hai hoặc không biết môn nào. Ta cần ngôn ngữ để mô tả từng tình huống trước khi tính cơ hội xảy ra. Một biến cố là tập hợp các kết quả thỏa điều kiện, không phải bản thân một lần thử.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVIII-B28-01_R00.svg" alt="Bốn miền của sơ đồ Venn: chỉ A, giao A và B, chỉ B và ngoài cả hai; một kết quả nằm đúng một miền."><figcaption>Đọc hình: Bốn miền của sơ đồ Venn: chỉ A, giao A và B, chỉ B và ngoài cả hai; một kết quả nằm đúng một miền. Diện tích hình chỉ minh họa miền, không biểu thị tỉ lệ xác suất.</figcaption></figure>

    ### 1.1. Không gian mẫu
    
    Liệt kê mọi kết quả riêng biệt của đúng phép thử. Chẳng hạn chọn một thẻ thì một kết quả là một thẻ, không phải hai thẻ.
    
    **Vận dụng.** Chọn một thẻ trong năm thẻ đánh số 2,4,6,8,10. Viết không gian mẫu.
    
    <span data-ped-first-try="1" data-outcome-id="G11-B28-SAMPLE_SPACE" data-thpt-first-try-id="THPT-G11-B28-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Ω={2,4,6,8,10}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không thêm các cặp vì chỉ chọn một thẻ. [Luyện lại câu B28-C01](../luyen-tap/?item=THPT-G11-CHVIII-B28-C01)

    ### 1.2. Mô tả biến cố
    
    Từ mô tả bằng lời, giữ lại đúng các kết quả thỏa điều kiện; nếu chọn đều mới đếm số kết quả chia tổng.
    
    **Vận dụng.** Chọn đều thẻ từ 1 đến 8. A là biến cố chọn số nguyên tố. Viết A và tính P(A).
    
    <span data-ped-first-try="2" data-outcome-id="G11-B28-EVENT_MODEL" data-thpt-first-try-id="THPT-G11-B28-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** A={2,3,5,7}; P(A)=4/8=1/2.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Số 1 không nguyên tố; kiểm điều kiện đồng khả năng. [Luyện lại câu B28-C02](../luyen-tap/?item=THPT-G11-CHVIII-B28-C02)

    ### 1.3. Hoặc: kể cả hai
    
    Một kết quả thỏa ít nhất một điều kiện thì thuộc hợp, kể cả kết quả thỏa cả hai; không viết lặp.
    
    **Vận dụng.** Cho A={1,3,7}, B={2,3,8}. Tìm hợp.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B28-UNION" data-thpt-first-try-id="THPT-G11-B28-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** A∪B={1,2,3,7,8}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Nếu bỏ 3, em đang hiểu hoặc theo nghĩa loại trừ. [Luyện lại câu B28-C03](../luyen-tap/?item=THPT-G11-CHVIII-B28-C03)

    ### 1.4. Và: đồng thời
    
    Chỉ giữ kết quả trong cả hai tập; khi một điều kiện không thể cùng xảy ra với điều kiện kia thì giao rỗng.
    
    **Vận dụng.** Chọn một số từ 1 đến 12. A là bội của 2, B là bội của 3. Tìm AB.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B28-INTERSECTION" data-thpt-first-try-id="THPT-G11-B28-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** AB=A∩B={6,12}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm từng số phải chia hết cho cả 2 và 3. [Luyện lại câu B28-C04](../luyen-tap/?item=THPT-G11-CHVIII-B28-C04)

    ### 1.5. Chỉ một và không có cái nào
    
    Chia Ω thành bốn miền: chỉ A, chỉ B, cả hai, ngoài cả hai. Hai cách nói 'chỉ một' và 'không cái nào' khác nhau.
    
    **Vận dụng.** Ω={1,2,3,4,5,6}, A={1,2,3}, B={3,4}. Liệt kê các kết quả chỉ thuộc một biến cố và không thuộc biến cố nào.
    
    <span data-ped-first-try="5" data-outcome-id="G11-B28-COMPLEMENT" data-thpt-first-try-id="THPT-G11-B28-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Chỉ một: {1,2,4}; không thuộc biến cố nào: {5,6}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tránh hiểu 'không có cả hai' mơ hồ; viết rõ không A và không B. [Luyện lại câu B28-C05](../luyen-tap/?item=THPT-G11-CHVIII-B28-C05)

    ### 1.6. Xung khắc không phải độc lập
    
    Xung khắc nói về khả năng cùng xảy ra. Độc lập nói về việc thông tin xảy ra của biến cố này có thay đổi cơ hội biến cố kia hay không.
    
    **Vận dụng.** Gieo một xúc xắc đều. A là ra 1 hoặc 2, B là ra 5. Xung khắc không? Độc lập không?
    
    <span data-ped-first-try="6" data-outcome-id="G11-B28-DISJOINT" data-thpt-first-try-id="THPT-G11-B28-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Có xung khắc vì giao rỗng. Không độc lập vì khi A xảy ra, B chắc chắn không xảy ra, khác cơ hội trước đó 1/6.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Hai biến cố xung khắc có xác suất dương không độc lập. [Luyện lại câu B28-C06](../luyen-tap/?item=THPT-G11-CHVIII-B28-C06)

    ### 1.7. Hoàn lại hay không hoàn lại
    
    Hộp có 2 bi đỏ, 3 bi xanh, mỗi bi được chọn đều. Nếu trả bi đầu lại, cơ hội đỏ ở lượt sau vẫn 2/5. Nếu không trả, thành phần hộp phụ thuộc màu lượt đầu.
    
    **Vận dụng.** Cùng hộp trên, không hoàn lại: so sánh cơ hội đỏ lượt hai khi lượt đầu đỏ và khi lượt đầu xanh.
    
    <span data-ped-first-try="7" data-outcome-id="G11-B28-INDEPENDENCE" data-thpt-first-try-id="THPT-G11-B28-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Nếu đầu đỏ: 1/4; nếu đầu xanh: 2/4. Khác nhau nên hai biến cố đỏ ở từng lượt không độc lập.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phải xét lại số bi còn trong hộp, không giữ mẫu số 5. [Luyện lại câu B28-C07](../luyen-tap/?item=THPT-G11-CHVIII-B28-C07)

=== "Kiến thức SGK"

    ### 2.1. Biến cố hợp
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Biến cố hợp.</strong>
    
    Cho A, B cùng thuộc không gian mẫu Ω. Biến cố hợp là A hoặc B xảy ra, kí hiệu \(A\cup B\). Một kết quả thuộc hợp nếu nó thuộc A, B hoặc cả hai. Nhắc: Ω gồm mọi kết quả có thể; biến cố là tập con Ω. Với các kết quả đồng khả năng, \(P(A)=n(A)/n(\Omega)\). Không được dùng phép đếm đơn thuần nếu các kết quả không đồng khả năng.
    
    </div>

    ### 2.2. Biến cố giao
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Biến cố giao.</strong>
    
    Biến cố giao, kí hiệu \(AB=A\cap B\), xảy ra khi cả A và B xảy ra. Biến cố đối \(\overline A=\Omega\setminus A\) xảy ra khi A không xảy ra. Chỉ A: \(A\overline B\); chỉ B: \(\overline A B\); đúng một: \((A\overline B)\cup(\overline A B)\); không biến cố nào: \(\overline A\,\overline B=\overline{A\cup B}\). Xung khắc nghĩa là \(AB=\varnothing\).
    
    </div>

    ### 2.3. Biến cố độc lập
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Biến cố độc lập.</strong>
    
    A và B độc lập nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất của biến cố kia. Ví dụ hai lần gieo xúc xắc độc lập; hai lần rút không hoàn lại có thể phụ thuộc. Khi A và B độc lập, các cặp \(A,\overline B\), \(\overline A,B\), \(\overline A,\overline B\) cũng độc lập: nếu tỉ lệ B không đổi thì tỉ lệ không B cũng không đổi; khi biết A không xảy ra, giả thiết độc lập vẫn giữ nguyên tỉ lệ. Bài 30 sẽ dùng phép kiểm \(P(AB)=P(A)P(B)\), bao gồm cả trường hợp xác suất 0. Không kết luận chỉ từ tên biến cố.
    
    </div>

=== "Ví dụ"

    ### 3.1. Hợp và giao từ điều kiện
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B28-01"><p><strong>Đề bài:</strong> Chọn đều một số từ 1 đến 10. A là số chẵn, B là bội của 3. Tìm hợp và giao.</p><p><strong>Phân tích:</strong> Liệt kê từng tập rồi so sánh.</p><p><strong>Lời giải:</strong> A={2,4,6,8,10}; B={3,6,9}; hợp {2,3,4,6,8,9,10}; giao {6}.</p><p><strong>Kiểm lại:</strong> 6 thuộc cả hai nhưng chỉ ghi một lần trong hợp.</p></div>

    ### 3.2. Biến cố đối và đúng một
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B28-02"><p><strong>Đề bài:</strong> Ω={a,b,c,d,e,f}, A={a,c,d}, B={b,d,e}. Tìm biến cố đối A, đúng một và không cái nào.</p><p><strong>Phân tích:</strong> Tách bốn miền rời nhau.</p><p><strong>Lời giải:</strong> Đối A={b,e,f}; chỉ A={a,c}; chỉ B={b,e}; đúng một={a,b,c,e}; không cái nào={f}.</p><p><strong>Kiểm lại:</strong> Bốn miền có 2+2+1+1=6 kết quả.</p></div>

    ### 3.3. Xung khắc và độc lập
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B28-03"><p><strong>Đề bài:</strong> Một lần gieo xúc xắc đều. A ra 2, B ra 5. Nhận xét quan hệ.</p><p><strong>Phân tích:</strong> Phân biệt giao rỗng với sự thay đổi khả năng.</p><p><strong>Lời giải:</strong> A∩B=∅. Nếu A xảy ra, B có xác suất 0 thay vì 1/6. Xung khắc nhưng không độc lập.</p><p><strong>Kiểm lại:</strong> Cả A và B đều có xác suất dương.</p></div>

    ### 3.4. Độc lập qua bảng kết quả
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B28-04"><p><strong>Đề bài:</strong> Hai đồng xu cân bằng được gieo độc lập. A là xu đầu ngửa, B là xu sau sấp. Xét B khi A xảy ra và khi A không xảy ra.</p><p><strong>Phân tích:</strong> Bốn kết quả NN, NS, SN, SS đồng khả năng.</p><p><strong>Lời giải:</strong> Trong NN, NS có một kết quả B; trong SN, SS cũng có một kết quả B. Hai tỉ lệ đều 1/2; A và B độc lập.</p><p><strong>Kiểm lại:</strong> Nếu thay B bằng biến cố xu sau ngửa, tỉ lệ vẫn 1/2.</p></div>

    ### 3.5. Đọc bốn miền
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B28-05"><p><strong>Đề bài:</strong> Trong nhóm 24 học sinh, 8 biết bơi, 10 biết đạp xe, 3 biết cả hai. Hỏi bao nhiêu bạn chỉ biết một môn và không biết môn nào trong hai môn.</p><p><strong>Phân tích:</strong> Bỏ 3 khỏi từng nhóm để tìm hai miền riêng.</p><p><strong>Lời giải:</strong> Chỉ bơi=5; chỉ đạp xe=7; đúng một=12; ngoài cả hai=24−(5+7+3)=9.</p><p><strong>Kiểm lại:</strong> 5+7+3+9=24.</p></div>

    ### 3.6. So sánh hai cách rút
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B28-R02-06"><p><strong>Đề bài:</strong> Hộp 4 bi đỏ, 2 bi xanh đồng kích thước. A là lần đầu đỏ, B là lần sau xanh. So sánh lấy có hoàn lại và không hoàn lại.</p><p><strong>Phân tích:</strong> So màu còn trong hộp dựa theo lượt đầu.</p><p><strong>Lời giải:</strong> Hoàn lại: dù lượt đầu đỏ hay xanh, cơ hội xanh lượt hai đều 2/6=1/3; độc lập. Không hoàn lại: đầu đỏ ⇒ 2/5, đầu xanh ⇒ 1/5; phụ thuộc.</p><p><strong>Kiểm lại:</strong> Kết luận dựa vào sự thay đổi thành phần, không dựa vào việc hai lượt có tên khác nhau.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVIII-B28-01" hidden></span>
    
    ??? tip "4.1. Hiểu hoặc là chỉ một"
    
        Hợp vẫn gồm miền giao; xem mục 2.1. [Luyện lại câu B28-C03](../luyen-tap/?item=THPT-G11-CHVIII-B28-C03)

    <span data-thpt-help-id="HELP-G11-CHVIII-B28-02" hidden></span>
    
    ??? tip "4.2. Nhầm giao với hợp"
    
        Giao đòi thỏa cả hai điều kiện; xem mục 2.2. [Luyện lại câu B28-C04](../luyen-tap/?item=THPT-G11-CHVIII-B28-C04)

    <span data-thpt-help-id="HELP-G11-CHVIII-B28-03" hidden></span>
    
    ??? tip "4.3. Nhầm xung khắc với độc lập"
    
        Giao rỗng và xác suất hai biến cố dương làm thay đổi cơ hội; xem mục 2.3. [Luyện lại câu B28-P04](../luyen-tap/?item=THPT-G11-CHVIII-B28-P04)

    [Core và Luyện tập Bài 28](luyen-tap.md) · [Tự luận Chương VIII](../../../thu-vien/tu-luan-g11-chuong-viii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 28, trang in 66–71.*


---

# Canonical B29 · blob f86bec27f7265abfba3c4ebb1ecacf8ad61fbc1f

# Bài 29. Công thức cộng xác suất

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VIII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Đếm đúng hợp của hai biến cố, biết khi nào cộng trực tiếp và khi nào trừ phần chung.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Trong một khảo sát, cùng một người có thể chọn hai sở thích. Cộng số người mỗi nhóm dễ đếm một người hai lần. Trước khi dùng công thức, hãy chia kết quả thành các miền không trùng; khi lấy hai vật, có thể cần tổ hợp để đếm mỗi cặp đúng một lần.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVIII-B29-01_R00.svg" alt="Sơ đồ 40 học sinh chia thành bốn miền: 9 chỉ A, 6 cả hai, 11 chỉ B, 14 ngoài cả hai; tổng 40."><figcaption>Đọc hình: Sơ đồ 40 học sinh chia thành bốn miền: 9 chỉ A, 6 cả hai, 11 chỉ B, 14 ngoài cả hai; tổng 40. Diện tích hình chỉ minh họa miền, không biểu thị tỉ lệ xác suất.</figcaption></figure>

    ### 1.1. Trừ phần chung
    
    Hai nhóm 13 và 11 có chung 4 người thì cộng nhóm đã đếm 4 người hai lần.
    
    **Vận dụng.** Chọn đều 1 trong 30 người, 13 thuộc A, 11 thuộc B, 4 thuộc cả hai. Tính P(A∪B).
    
    <span data-ped-first-try="1" data-outcome-id="G11-B29-ADDITION_OVERLAP" data-thpt-first-try-id="THPT-G11-B29-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** (13+11−4)/30=2/3.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phải trừ 4, không trừ hai lần. [Luyện lại câu B29-C01](../luyen-tap/?item=THPT-G11-CHVIII-B29-C01)

    ### 1.2. Cộng khi không giao
    
    Chỉ khi hai sự kiện không thể cùng xảy ra mới cộng trực tiếp.
    
    **Vận dụng.** Gieo xúc xắc đều. A ra 1 hoặc 2, B ra 6. Tính xác suất A hoặc B.
    
    <span data-ped-first-try="2" data-outcome-id="G11-B29-ADDITION_DISJOINT" data-thpt-first-try-id="THPT-G11-B29-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 3/6=1/2, vì giao rỗng.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm tra giao trước khi cộng. [Luyện lại câu B29-C02](../luyen-tap/?item=THPT-G11-CHVIII-B29-C02)

    ### 1.3. Không biến cố nào
    
    Biến cố không A và không B là đối của A∪B, khác đối của giao.
    
    **Vận dụng.** Biết P(A∪B)=0,72. Tính cơ hội không A và không B.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B29-COMPLEMENT_PROB" data-thpt-first-try-id="THPT-G11-B29-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−0,72=0,28.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không dùng 1−P(AB) nếu muốn cả hai đều không xảy ra. [Luyện lại câu B29-C03](../luyen-tap/?item=THPT-G11-CHVIII-B29-C03)

    ### 1.4. Đọc bốn miền
    
    Tổng của bốn miền chính là kích thước mẫu.
    
    **Vận dụng.** Trong 50 người có 20 chọn A, 18 chọn B, 7 chọn cả hai. Tìm bốn miền.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B29-VENN_COUNTS" data-thpt-first-try-id="THPT-G11-B29-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 13 chỉ A, 11 chỉ B, 7 cả hai, 19 không cái nào.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm 13+11+7+19=50. [Luyện lại câu B29-C04](../luyen-tap/?item=THPT-G11-CHVIII-B29-C04)

    ### 1.5. Kiểm dữ kiện
    
    Giao không lớn hơn từng biến cố, hợp không lớn hơn 1.
    
    **Vận dụng.** P(A)=0,65, P(B)=0,6, P(AB)=0,1. Dữ kiện có thể đúng không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B29-PROBABILITY_BOUNDS" data-thpt-first-try-id="THPT-G11-B29-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không: hợp=1,15>1. Giao phải ít nhất 0,25.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm cả giới hạn dưới của giao, không chỉ giới hạn trên. [Luyện lại câu B29-C05](../luyen-tap/?item=THPT-G11-CHVIII-B29-C05)

    ### 1.6. Đếm bằng tổ hợp
    
    Chọn hai vật khác nhau không kể thứ tự, đều các cặp: mẫu có C(n,2) cặp. Đếm theo nhóm màu là các biến cố xung khắc.
    
    **Vận dụng.** Hộp có 5 bi đỏ, 4 xanh, lấy đều 2 bi không hoàn lại. Tính xác suất hai bi cùng màu.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B29-REAL_APPLICATION" data-thpt-first-try-id="THPT-G11-B29-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** C(5,2)+C(4,2)=10+6=16 cặp; C(9,2)=36; P=4/9.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy tổng 9 làm mẫu số; đơn vị kết quả là cặp. [Luyện lại câu B29-C06](../luyen-tap/?item=THPT-G11-CHVIII-B29-C06)

=== "Kiến thức SGK"

    ### 2.1. Công thức cộng cho hai biến cố xung khắc
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức cộng cho hai biến cố xung khắc.</strong>
    
    Hai biến cố xung khắc khi \(AB=\varnothing\). Các trường hợp của A, B khi đó không trùng nhau, nên \(P(A\cup B)=P(A)+P(B)\). A và biến cố đối của A xung khắc, hợp bằng Ω, suy ra \(P(\overline A)=1-P(A)\). Khi lấy đều k vật trong n vật phân biệt không xét thứ tự, số cách là \(\binom nk=n!/[k!(n-k)!]\), với 0≤k≤n. Các cặp cùng đỏ/cùng xanh là xung khắc; đếm mỗi cặp một lần, không dùng tổ hợp nếu mô hình kết quả có thứ tự mà chưa quy đổi.
    
    </div>

    ### 2.2. Công thức cộng cho hai biến cố bất kì
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức cộng cho hai biến cố bất kì.</strong>
    
    Chia hợp thành chỉ A, giao, chỉ B. Hai tổng P(A),P(B) đã tính giao hai lần; trừ một lần để mỗi miền được tính đúng một lần.
    \[
    P(A\cup B)=P(A)+P(B)-P(AB).
    \]
    Không cần độc lập. Đối của hợp là cả hai không xảy ra: \(P(\overline{A\cup B})=1-P(A\cup B)\). Điều kiện dữ kiện: \(\max(0,P(A)+P(B)-1)\le P(AB)\le\min(P(A),P(B))\); hợp phải nằm từ xác suất lớn hơn của hai biến cố đến 1. Với dữ kiện người/phiếu, chỉ dùng tần số chia tổng như xác suất khi chọn đều một đơn vị. Nếu chưa biết giao, không tự đặt giao bằng tích.
    
    </div>

=== "Ví dụ"

    ### 3.1. Hai nhóm chồng nhau
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-01"><p><strong>Đề bài:</strong> Trong 60 vé, 29 chọn X, 21 chọn Y, 9 chọn cả hai. Chọn đều một vé. Tính P(X∪Y).</p><p><strong>Phân tích:</strong> Trừ số vé chung trước khi chia.</p><p><strong>Lời giải:</strong> (29+21−9)/60=41/60.</p><p><strong>Kiểm lại:</strong> 41 không vượt 60 và không nhỏ hơn 29.</p></div>

    ### 3.2. Hai nhóm xung khắc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-02"><p><strong>Đề bài:</strong> Gieo xúc xắc đều: A ra số 2, B ra số 3 hoặc 5. Tính P(A∪B).</p><p><strong>Phân tích:</strong> Giao rỗng, dùng công thức cộng rút gọn.</p><p><strong>Lời giải:</strong> 1/6+2/6=1/2.</p><p><strong>Kiểm lại:</strong> Đếm trực tiếp ba kết quả trong sáu.</p></div>

    ### 3.3. Tính biến cố đối
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-03"><p><strong>Đề bài:</strong> Một thẻ thuộc A với xác suất 11/25. Tính xác suất không thuộc A.</p><p><strong>Phân tích:</strong> A và đối A phủ Ω, không giao.</p><p><strong>Lời giải:</strong> 1−11/25=14/25.</p><p><strong>Kiểm lại:</strong> Hai xác suất cộng bằng 1.</p></div>

    ### 3.4. Tìm giao từ hợp
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-04"><p><strong>Đề bài:</strong> P(A)=0,55, P(B)=0,45, P(A∪B)=0,75. Tính P(AB).</p><p><strong>Phân tích:</strong> Biến đổi công thức cộng.</p><p><strong>Lời giải:</strong> 0,55+0,45−0,75=0,25.</p><p><strong>Kiểm lại:</strong> Giao nằm giữa 0 và 0,45.</p></div>

    ### 3.5. Phát hiện dữ kiện sai
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-05"><p><strong>Đề bài:</strong> P(A)=0,8, P(B)=0,7, P(AB)=0,4. Có tồn tại mô hình này không?</p><p><strong>Phân tích:</strong> Kiểm tra hợp không vượt 1.</p><p><strong>Lời giải:</strong> Hợp=1,1>1 nên không thể.</p><p><strong>Kiểm lại:</strong> Giao phải ít nhất 0,5.</p></div>

    ### 3.6. Phương pháp tổ hợp và cộng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B29-R02-06"><p><strong>Đề bài:</strong> Có 6 thẻ đỏ, 4 thẻ xanh, lấy đều 2 thẻ không hoàn lại. Tính xác suất cùng màu.</p><p><strong>Phân tích:</strong> Mỗi cặp không thứ tự đồng khả năng. Hai trường hợp cùng đỏ hoặc cùng xanh xung khắc.</p><p><strong>Lời giải:</strong> Mẫu C(10,2)=45; số thuận lợi C(6,2)+C(4,2)=15+6=21; P=7/15.</p><p><strong>Kiểm lại:</strong> Khác màu có 6·4=24 cặp, 21+24=45.</p></div>

    ### 3.7. Tổ hợp với phần giao khác rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B29-R02-07"><p><strong>Đề bài:</strong> Từ các thẻ 1 đến 7 lấy đều hai thẻ, không hoàn lại. A là có thẻ 1, B là có thẻ 7. Tính P(A∪B).</p><p><strong>Phân tích:</strong> Cặp {1,7} nằm ở cả hai biến cố.</p><p><strong>Lời giải:</strong> Có 21 cặp; mỗi A và B có 6 cặp; giao có 1. P=(6+6−1)/21=11/21.</p><p><strong>Kiểm lại:</strong> Đối là lấy 2 trong 5 thẻ giữa: 10/21; tổng 1.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVIII-B29-01" hidden></span>
    
    ??? tip "4.1. Cộng quên trừ giao"
    
        Đếm từng miền riêng, xem 2.2. [Luyện lại câu B29-C01](../luyen-tap/?item=THPT-G11-CHVIII-B29-C01)

    <span data-thpt-help-id="HELP-G11-CHVIII-B29-02" hidden></span>
    
    ??? tip "4.2. Chấp nhận xác suất lớn hơn 1"
    
        So giới hạn giao và hợp, xem 2.2. [Luyện lại câu B29-C05](../luyen-tap/?item=THPT-G11-CHVIII-B29-C05)

    [Core và Luyện tập Bài 29](luyen-tap.md) · [Tự luận Chương VIII](../../../thu-vien/tu-luan-g11-chuong-viii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 29, trang in 72–75.*


---

# Canonical B30 · blob 7eb64ee31505ea1f57209c02ff312b46cdaf29ad

# Bài 30. Công thức nhân xác suất cho hai biến cố độc lập

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VIII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Tính giao khi độc lập, đọc cây xác suất và chọn đúng cách tính ít nhất một.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Hai cảm biến có thể cùng phát hiện một vật hoặc chỉ một cảm biến phát hiện. Muốn tính cơ hội cả hai cùng thành công, phải biết cơ hội của cảm biến thứ hai có thay đổi khi cảm biến thứ nhất thành công hay không. Khi độc lập, tỉ lệ thành công thứ hai giữ nguyên trong từng nhánh; lúc ấy mới được nhân hai xác suất riêng.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVIII-B30-01_R00.svg" alt="Cây hai bước độc lập: nhánh đầu 3/4 và 1/4, mỗi nút bước hai có nhánh 2/3 và 1/3; bốn lá 1/2, 1/4, 1/6, 1/12."><figcaption>Đọc hình: Cây hai bước độc lập: nhánh đầu 3/4 và 1/4, mỗi nút bước hai có nhánh 2/3 và 1/3; bốn lá 1/2, 1/4, 1/6, 1/12. Không nhân xác suất biên trên cây phụ thuộc.</figcaption></figure>

    ### 1.1. Nhân cho giao
    
    Nếu A xảy ra ở 3/4 trường hợp, và B có tỉ lệ 2/3 ngay trong nhóm ấy, phần chung là 3/4 của 2/3.
    
    **Vận dụng.** Hai máy độc lập, cơ hội đạt 5/6 và 3/5. Tính cả hai đạt.
    
    <span data-ped-first-try="1" data-outcome-id="G11-B30-MULTIPLY_INDEPENDENT" data-thpt-first-try-id="THPT-G11-B30-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 5/6·3/5=1/2.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Chỉ nhân vì đã nêu độc lập. [Luyện lại câu B30-C01](../luyen-tap/?item=THPT-G11-CHVIII-B30-C01)

    ### 1.2. Kiểm tra bằng số liệu
    
    So xác suất giao thực tế với tích biên. Nếu khác nhau, không độc lập.
    
    **Vận dụng.** P(A)=0,4, P(B)=0,5, P(AB)=0,25. Độc lập không?
    
    <span data-ped-first-try="2" data-outcome-id="G11-B30-VERIFY_INDEPENDENCE" data-thpt-first-try-id="THPT-G11-B30-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; tích=0,2 khác 0,25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không suy luận từ tên A,B. [Luyện lại câu B30-C02](../luyen-tap/?item=THPT-G11-CHVIII-B30-C02)

    ### 1.3. Cây và các lần thử
    
    Trong cây hai phép thử độc lập, các nhánh bước hai có cùng xác suất dù bước một thế nào.
    
    **Vận dụng.** Hai lần độc lập, mỗi lần thành công 2/3. Tính xác suất cả hai thành công và cả hai thất bại.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B30-REPEATED_TRIALS" data-thpt-first-try-id="THPT-G11-B30-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 4/9 và 1/9; hai trường hợp còn lại mỗi 2/9.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bốn lá phải cộng bằng 1. [Luyện lại câu B30-C03](../luyen-tap/?item=THPT-G11-CHVIII-B30-C03)

    ### 1.4. Dùng bù
    
    Ít nhất một thành công gồm cả hai thành công và chỉ một. Bù là cả hai thất bại.
    
    **Vận dụng.** Hai thiết bị độc lập, xác suất đạt 3/5 và 4/5. Tính ít nhất một đạt.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B30-AT_LEAST_ONE" data-thpt-first-try-id="THPT-G11-B30-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−(2/5)(1/5)=23/25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không nhầm với đúng một hay cả hai. [Luyện lại câu B30-C04](../luyen-tap/?item=THPT-G11-CHVIII-B30-C04)

    ### 1.5. Độc lập và xung khắc
    
    Nếu hai biến cố dương mà xung khắc, giao bằng 0 nhưng tích dương.
    
    **Vận dụng.** P(A)=1/4, P(B)=1/3, A,B xung khắc. Chúng độc lập không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B30-INDEPENDENT_VS_DISJOINT" data-thpt-first-try-id="THPT-G11-B30-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; P(AB)=0 ≠ 1/12.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Trường hợp xác suất 0 cần xét riêng bằng đẳng thức. [Luyện lại câu B30-C05](../luyen-tap/?item=THPT-G11-CHVIII-B30-C05)

    ### 1.6. Bảng số liệu hai chiều
    
    Chọn đều một người từ bảng. Tính ba tỉ lệ có cùng mẫu số; kiểm giao với tích biên. Không suy ra quan hệ nhân quả.
    
    **Vận dụng.** Trong 100 người, 30 chọn A, 40 chọn B, 12 chọn cả hai. Kiểm tra độc lập trong mô hình chọn người từ bảng.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B30-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B30-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** P(A)=0,3; P(B)=0,4; P(AB)=0,12=0,3·0,4; độc lập trong mô hình này.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không suy rộng ra toàn dân nếu mẫu không đại diện. [Luyện lại câu B30-C06](../luyen-tap/?item=THPT-G11-CHVIII-B30-C06)

=== "Kiến thức SGK"

    ### 2.1. Công thức nhân xác suất cho hai biến cố độc lập
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức nhân xác suất cho hai biến cố độc lập.</strong>
    
    Nếu A, B độc lập thì tỉ lệ B trong nhóm A không đổi so với toàn thể. Vì vậy phần chung bằng tỉ lệ nhóm A nhân tỉ lệ B.
    \[
    P(AB)=P(A)P(B).
    \]
    Trong mô hình hữu hạn, đẳng thức này cũng là tiêu chí kiểm tra độc lập, kể cả các trường hợp xác suất 0 hoặc 1. Khi \(P(AB)\ne P(A)P(B)\), hai biến cố không độc lập. Với hai biến cố xung khắc có xác suất dương, giao bằng 0 trong khi tích lớn hơn 0. Nếu một xác suất bằng 0, không được dùng kết luận 'xung khắc thì không độc lập'. Không nhân hai xác suất biên chỉ vì đề nói 'và'; rút không hoàn lại có thể làm thay đổi tỉ lệ.
    
    </div>

    ### 2.2. Vận dụng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Vận dụng.</strong>
    
    Nhờ tính độc lập của các cặp biến cố đối ở B28, nếu \(P(A)=a,P(B)=b\) và A,B độc lập, ta có \(P(\overline A\,\overline B)=(1-a)(1-b)\). Do đó \(P(A\cup B)=1-(1-a)(1-b)\). Đúng một bằng \(a(1-b)+(1-a)b\); lúc tính hợp cũng có thể dùng a+b−ab. Cây độc lập có hai nhánh tại mỗi nút cộng bằng 1; nhân dọc một đường, cộng các lá rời nhau ứng với câu hỏi. Với nhiều phép thử, nhân toàn bộ chỉ khi độc lập đồng thời, không suy từ độc lập từng cặp. Trong bảng hai chiều, chia tổng hàng, tổng cột và ô giao cho cùng tổng N, so sánh tích biên với giao; kết luận chỉ cho phân bố được mô tả, không khẳng định quan hệ nhân quả.
    
    </div>

=== "Ví dụ"

    ### 3.1. Nhân hai xác suất
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-01"><p><strong>Đề bài:</strong> Hai máy hoạt động độc lập, xác suất tốt 7/8 và 4/7. Tính cả hai tốt.</p><p><strong>Phân tích:</strong> Giao, có giả thiết độc lập.</p><p><strong>Lời giải:</strong> 7/8·4/7=1/2.</p><p><strong>Kiểm lại:</strong> Không lớn hơn mỗi xác suất riêng.</p></div>

    ### 3.2. Xác nhận độc lập
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-02"><p><strong>Đề bài:</strong> P(A)=3/5, P(B)=1/3, P(AB)=1/5. Kiểm tra.</p><p><strong>Phân tích:</strong> So tích biên với giao.</p><p><strong>Lời giải:</strong> 3/5·1/3=1/5, bằng giao nên độc lập.</p><p><strong>Kiểm lại:</strong> Giao dương không mâu thuẫn độc lập.</p></div>

    ### 3.3. Phát hiện phụ thuộc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-03"><p><strong>Đề bài:</strong> P(A)=1/2, P(B)=2/3, P(AB)=1/4. Kiểm tra.</p><p><strong>Phân tích:</strong> Giao phải bằng tích nếu độc lập.</p><p><strong>Lời giải:</strong> Tích=1/3 khác 1/4 nên không độc lập.</p><p><strong>Kiểm lại:</strong> Dữ kiện vẫn hợp lệ: hợp=11/12.</p></div>

    ### 3.4. Ít nhất một
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-04"><p><strong>Đề bài:</strong> Hai lần thử độc lập, mỗi lần đạt 3/5. Tính ít nhất một đạt.</p><p><strong>Phân tích:</strong> Lấy bù cả hai trượt.</p><p><strong>Lời giải:</strong> 1−(2/5)^2=21/25.</p><p><strong>Kiểm lại:</strong> Cách khác: 3/5+3/5−9/25=21/25.</p></div>

    ### 3.5. Ba lần thử độc lập đồng thời
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-05"><p><strong>Đề bài:</strong> Ba phép thử độc lập đồng thời, xác suất đạt 1/3, 3/4, 4/5. Tính cả ba đạt.</p><p><strong>Phân tích:</strong> Mở rộng tích cho mô hình độc lập đồng thời.</p><p><strong>Lời giải:</strong> 1/3·3/4·4/5=1/5.</p><p><strong>Kiểm lại:</strong> Không dùng kết quả này chỉ từ độc lập từng cặp.</p></div>

    ### 3.6. Không hoàn lại
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-06"><p><strong>Đề bài:</strong> Hộp 4 đỏ, 3 xanh. Rút đều 2 bi liên tiếp không hoàn lại. A: đầu xanh, B: sau xanh. Hai biến cố độc lập không?</p><p><strong>Phân tích:</strong> Khi đầu xanh, còn 2 xanh/6; khi đầu đỏ, còn 3 xanh/6.</p><p><strong>Lời giải:</strong> 1/3 khác 1/2 nên phụ thuộc; không nhân (3/7)^2.</p><p><strong>Kiểm lại:</strong> Không cần công thức xác suất có điều kiện tổng quát.</p></div>

    ### 3.7. Kiểm tra độc lập bằng bảng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B30-R02-07"><p><strong>Đề bài:</strong> Khảo sát 200 người: trong 80 người dùng xe buýt có 24 người mang ô; trong 120 người không dùng xe buýt có 56 người mang ô. Chọn đều một người. Hai biến cố dùng xe buýt và mang ô có độc lập không?</p><p><strong>Phân tích:</strong> Lập bảng hai chiều. Mỗi ô trong thân bảng đếm đúng một nhóm; đọc giao ở ô 24, xác suất biên từ hàng/cột tổng.</p><table><thead><tr><th scope="col">Phương tiện</th><th scope="col">Mang ô</th><th scope="col">Không mang ô</th><th scope="col">Tổng</th></tr></thead><tbody><tr><th scope="row">Xe buýt</th><td>24</td><td>56</td><td>80</td></tr><tr><th scope="row">Không đi xe buýt</th><td>56</td><td>64</td><td>120</td></tr><tr><th scope="row">Tổng</th><td>80</td><td>120</td><td>200</td></tr></tbody></table><p><strong>Lời giải:</strong> P(A)=80/200=0,4; P(B)=80/200=0,4; P(AB)=24/200=0,12 ≠ 0,16. Không độc lập trong phân bố khảo sát.</p><p><strong>Kiểm lại:</strong> Hàng tổng 80,120; cột tổng 80,120; tổng 200. Không kết luận xe buýt gây ảnh hưởng đến việc mang ô.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-01" hidden></span>
    
    ??? tip "4.1. Nhân khi chưa biết độc lập"
    
        Kiểm tiêu chí tích bằng giao hoặc giả thiết, xem 2.1. [Luyện lại câu B30-C01](../luyen-tap/?item=THPT-G11-CHVIII-B30-C01)

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-02" hidden></span>
    
    ??? tip "4.2. Lấy giao thay cho ít nhất một"
    
        Dùng bù cả hai thất bại, xem 2.2. [Luyện lại câu B30-C04](../luyen-tap/?item=THPT-G11-CHVIII-B30-C04)

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-03" hidden></span>
    
    ??? tip "4.3. Suy độc lập từ tên biến cố"
    
        Tính ba xác suất rồi so tích, xem 2.1. [Luyện lại câu B30-P02](../luyen-tap/?item=THPT-G11-CHVIII-B30-P02)

    [Core và Luyện tập Bài 30](luyen-tap.md) · [Tự luận Chương VIII](../../../thu-vien/tu-luan-g11-chuong-viii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 30, trang in 76–78.*


---

# Affected Written W03 only · library blob e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26

<section class="thpt-r4-written-card" data-thpt-filter-item data-thpt-kind="normal" data-thpt-written-canonical="THPT-G11-CHVIII-B29-W03" data-thpt-exposure-role="SGK_WRITTEN" id="thpt-g11-chviii-b29-w03"><p class="thpt-r4-eyebrow">BÀI 29 · WRITTEN</p><h2>THPT-G11-CHVIII-B29-W03</h2><p>Trong 36 người, có 17 người chọn kênh C, 14 người chọn D, 6 người chọn cả hai. Chọn đều một người. Tính riêng xác suất của bốn trường hợp: chỉ chọn C, chỉ chọn D, chọn cả C và D, không chọn C cũng không chọn D.</p><details><summary>Em đã làm? Mở lời giải và rubric /4</summary><p><strong>Lời giải:</strong> Chỉ C=11/36; chỉ D=8/36; cả hai=6/36; ngoài cả hai=(36−(17+14−6))/36=11/36; tổng=1.</p><ol><li>Phân tách miền chỉ C =11 — 1 điểm.</li><li>Phân tách miền chỉ D =8 và giao =6 — 1 điểm.</li><li>Tính ngoài cả hai =11 — 1 điểm.</li><li>Chia đúng cho 36 và kiểm bốn xác suất cộng bằng 1 — 1 điểm.</li></ol><p>Chỉ tự đối chiếu; không chấm tự luận bằng máy hoặc ghi Mastery.</p></details></section>
