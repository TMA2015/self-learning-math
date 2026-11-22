# Temp · G12 CHIII B09–B10 · Optional scoped independent review
Candidate only; independent review NOT_RUN. Not a second learner source. No private RD1. Q18 receipt blob acec45dfbf6f954e6822e17f5c59c448d62edb84.

Phản biện độc lập Delta-C Toán 12 KNTT Chương III B09–B10 với đúng năm Permanent Sources THPT v2.1 và SGK/SBT S1. Kiểm theo bài/outcome/item, nhất là phân biệt dữ liệu gốc và ghép, quy ước mốc tứ phân vị đúng biên/có lớp rỗng, phương sai mẫu số n và chú ý n−1, bài toán ngưỡng và độ sâu chuyển giao. Kiểm cả SVG tần số tích lũy và 12 D6 đổi nhãn; trả SOURCE_RECEIPT, Academic/PED verdict, P0/P1/P2, MINIMAL_DELTA. Không suy rộng PASS cũ, không cấp readiness/Mastery hay quyền RELEASE.

# G12 SGK KNTT Tập Một · Chương III B09–B10 · AUTHORING Q18 source-scoped receipt · 22/11/2026

MASTER_TASK: #987 only
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 · 488afe2908e0b471320e1d55f775391578d88bba
BRANCH: authoring/sgk-g12-chiii-b09-b10-r02-20261122
BASE_COMMIT: c7083ad28d50414c3f4a93f5b33b84c1e9439b9e
DELTA_CLASS: DELTA_C for lessons and instructional plot; HELP label-only equivalence delta
Q18_MODE: AUTHOR_SELF_VERIFIED / scoped source QA
STATUS: AUTHORING_SOURCE_CANDIDATE_READY; NOT CONTENT_READY
RELEASE_AUTHORIZATION: NO

## 1. Exact source locks
| Canonical source | Old blob | Candidate blob |
|---|---|---|
| docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md | 4571bac678c36c4fb06d6a7fde45b86703f8ebce | d4bbfcfb62f5a3b3c5056652022a59f8a1d1a484 |
| docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md | 32f4eda1cfd151592eef5a35921ad872c1f644c4 | 7fe3db93885de61675d237e63317529eeca231b5 |
| docs/assets/data/thpt-g12-chiii-b09-b10-public-r00.json | e72c6050cc97f897939bfbc4e1469691a4ffed62 | d91cad435b9a945b044b2fd2f8ff37c21c00abf9 |
| docs/assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg | 51fd46bc69ee7c4279e5024aa29dc0e83651a1a7 | c69f87d1eef339b238b74db647e24ffe58f3e2c1 |

No parallel learner source; 12 legacy EX IDs retained. Existing bank historical source_blob/receipt_blob metadata retained for renderer compatibility, not a new proof of reviewer approval; reconcile before handoff. No runtime, CSS, data/progress or private assessment change.

## 2. Q01/Q02 source evidence and limitations
Reopened actual historical original visual receipt prototypes/thpt/review-packets/G12_SGK_S1_ORIGINAL_PDF_VISUAL_SCOPE_AND_CHI_PREFLIGHT_20261102.md blob 3089da687075018f6d798293659d7d622f272adc. SGK Tập Một original 104 pages SHA256 faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd; SBT Tập Một original 117 pages SHA256 db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca. Historical observed offset SGK one-based PDF index = print+2; SBT Tập Một print−2 for confirmed sample pages. SGK B09 printed 75–79 (expected PDF1 77–81), B10 80–84 (expected PDF1 82–86), chapter-end begins 85. **No fresh original PDF image/SBT per-lesson page verification this turn.** Do not infer SBT ranges or declare original PDF custody PASS.
Reopened actual historical deep audit prototypes/thpt/ux795/G12_CHIII_B09_B10_DEEP_S1_48_PUBLIC_12_WRITTEN_12_HELP_3_SVG_Q16_AP_AUDIT_R01_20261115.md (blob 5571e1aa1c66799f3206717d3b43d2505c0f678b at f44c6c7fa6c3108ad96e928e131fe769581f822d). It records these public digital lesson transcriptions (not freshly reopened as complete publisher PDF):
- https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-muc-do-phan-tan-cua-mau-so-lieu-ghep-nhom-3542/bai-9-khoang-bien-thien-va-khoang-tu-phan-vi-12942.html
- https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-muc-do-phan-tan-cua-mau-so-lieu-ghep-nhom-3542/bai-10-phuong-sai-va-do-lech-chuan-12988.html
Fresh corroborating secondary text search result https://www.thivien.org/toan-12-kn/ly-thuyet-bai-10-phuong-sai-va-do-lech-chuan.jsp supports n-denominator descriptive variance, SD units and conditional risk comparison. It is not S1 authority and not an original PDF. B09 boundary-position handling follows baseline convention (first positive-frequency group reaching target) and raw even-sized median-of-halves; verify exact original convention for boundary with empty groups in targeted review. B10 n−1 note follows historical audit p81, distinguished from descriptive n; no fresh original print confirmation. B09 top headings 1 range, 2 IQR; B10 1 variance/SD, 2 risk; exact original printed wording pending.
Authored new raw data, not copying textbook problems. Existing six outcomes each preserved; new subskills mapped to parent outcomes, not claim complete new bank coverage.

## 3. Pedagogy and substantive scope
| Lesson | Existing outcomes | FirstTry | Worked EX (legacy + new) | Local HELP | SVG |
|---|---:|---:|---:|---:|---:|
| B09 | 6 | 7 | 6+2=8 | 7 | 2 |
| B10 | 6 | 8 | 6+3=9 | 8 | 1 |
B09: start with raw data and half-open intervals, loss of information, range sensitivity, cumulative positions, derive interpolation fraction, interpret R vs IQR, full exact-vs-grouped method, boundary and empty class. B10: derive weighted mean/variance from repeated representatives and cancellation, expand shortcut, units, comparison of stability, distinguish descriptive n and optional n−1, raw data grouping followed by threshold decision, raw/group comparison and contextual CV limits. 15 local self-opened comparisons and 15 local recoveries with two links to exact same-outcome canonical practice/core. Four Golden tabs, TeX and semantic cards. 17 examples preserve 12 original IDs, add 5 original-data examples. Three SVG (two unchanged, one corrected scale). Some old examples share data with the public bank: formative retrieval only, no independent evidence.

Actual source read-back QA: 24/24 per lesson, total 48/48, including four tab order, unique try/help/EX and legacy IDs, hidden comparison/diagnostic count, existing outcomes and same-outcome link targets, four distinct example fields, figure alt/caption, TeX delimiters (no doubled command escapes), semantic card counts 4/3, error tab headings, original routes, HTML tag balance and no runtime/private markers. Not a browser render pass.
Actual numerical QA: B09 15/15, B10 17/17 = 32/32 scenario check groups (one per try or EX), using explicit half-open grouping counts, sorted median-of-halves, cumulative interpolation, weighted direct variance and algebraically equivalent shortcut (agreement tolerance 1e-8), arithmetic and threshold checks. Examples B09 raw [12,13,16,17,19,21,22,24,26,28,31,38] exact R=26, IQR=10.5; grouped f=(5,5,2), R=30, Q1=16,Q3=28,IQR=12; first-reaching boundary with f=(4,0,8,4) gives Q1=10,Q3=30. B10 12 raw observations f=(2,7,3), mean=1/30, variance=59/900, SD=sqrt(59)/30>0.25; separate six-value sample exact variance=29/3, grouped=6.25; n versus n−1 example 2 versus 8/3. Numerical checks are not proof of original source fidelity.
SVG read-back 11/11 scale relationships: y=410−6.5v; 4 bars with heights 39,130,208,260; 5 grid/tick levels 0,10,20,30,40; 2 horizontal quartile lines y345 and y215. One consistent scale, no previous unequal heights. No on-device verification.

## 4. Item/outcome mapping and Q15/Q16
| FirstTry ID | Outcome | Placement | Existing canonical return / practice |
|---|---|---|---|
| THPT-G12-B09-TRY01 | G12-CHIII-B09-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C01 / THPT-G12-B09-P01 |
| THPT-G12-B09-TRY02 | G12-CHIII-B09-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C02 / THPT-G12-B09-P03 |
| THPT-G12-B09-TRY03 | G12-CHIII-B09-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C03 / THPT-G12-B09-P05 |
| THPT-G12-B09-TRY04 | G12-CHIII-B09-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C04 / THPT-G12-B09-P07 |
| THPT-G12-B09-TRY05 | G12-CHIII-B09-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C05 / THPT-G12-B09-P09 |
| THPT-G12-B09-TRY06 | G12-CHIII-B09-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C06 / THPT-G12-B09-P11 |
| THPT-G12-B09-TRY07 | G12-CHIII-B09-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C05 / THPT-G12-B09-P09 |
| THPT-G12-B10-TRY01 | G12-CHIII-B10-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C01 / THPT-G12-B10-P01 |
| THPT-G12-B10-TRY02 | G12-CHIII-B10-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C02 / THPT-G12-B10-P03 |
| THPT-G12-B10-TRY03 | G12-CHIII-B10-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C03 / THPT-G12-B10-P05 |
| THPT-G12-B10-TRY04 | G12-CHIII-B10-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C04 / THPT-G12-B10-P07 |
| THPT-G12-B10-TRY05 | G12-CHIII-B10-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C05 / THPT-G12-B10-P09 |
| THPT-G12-B10-TRY06 | G12-CHIII-B10-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C06 / THPT-G12-B10-P11 |
| THPT-G12-B10-TRY07 | G12-CHIII-B10-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C05 / THPT-G12-B10-P09 |
| THPT-G12-B10-TRY08 | G12-CHIII-B10-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C02 / THPT-G12-B10-P03 |

Read-back reverse replacement of the 12 HELP steps restores exactly the parsed original bank. Exactly 36 entries (steps 2,4,5 in each five-step HELP) change machine-looking codes to natural learner-facing labels; preserve diagnosis, mathematical explanation, example identity, return/practice IDs and role. All 48 item records/answers/solutions/rubrics unchanged, 12 CORE +12 SGK_PRACTICE +12 SGK_APPLICATION +12 WRITTEN, 12 HELP with five steps each, 24 link IDs resolve, 12 public END references unchanged. Existing player reads h.steps; no changes to renderer. Public END reuses previously exposed items, explicitly CLIENT_SELF_CHECK_NO_MASTERY. No RD1 accessed, published or copied. No Final Submit, official grading or Firebase change.
Unchanged control blobs: hub 8773a0e953be1186f47e5cfe852f3ea7b15bf188; end 38d20c092e24c1c8f1a4b23c629eaf081b5c6e91; player 10587fecd9723b702fa079fad227fcf5bee4f99f. New raw-to-group transfer is taught and practised locally in knowledge; dedicated bank/Written depth for those new subskills still pending. Historical source/receipt lock claims do not automatically certify the changed bank metadata.

## 5. Open conditions
SOURCE_CANDIDATE_READY with self-verified scoped QA only; not CONTENT_READY. Fresh original S1 print image and SBT scope missing; targeted independent Delta-C review as warranted, especially quartile boundary/empty-class convention and n−1 note; new dedicated transfer bank coverage, source/receipt/guard reconciliation and V2/ready/REGISTER not attested. No CI/browser AP1–AP5/R/P1/P2, no official readiness or deployment. Next G12 ChIV B11–B13 in MASTER #987.


---

# Candidate B09 · d4bbfcfb62f5a3b3c5056652022a59f8a1d1a484

# Toán 12 · Bài 9. Khoảng biến thiên và khoảng tứ phân vị

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG III · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 75–79</p><p class="thpt-r4-lead">Hiểu số liệu, đọc hình, tự làm và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương III</a><a href="../bai-10/">Bài 10 · Học tiếp</a></nav></div>

=== "Khám phá kiến thức"

    Hai mẫu có thể cùng trung bình nhưng rất khác về độ trải rộng. Khoảng biến thiên trả lời câu hỏi về hai đầu, khoảng tứ phân vị mô tả nửa giữa. Trước khi tính, ôn cách sắp xếp mẫu thô, trung vị, tần số và khoảng nửa kín [a;b). Chẳng hạn 10 thuộc [10;20), không thuộc [0;10).

    ### 1.1. Từ số liệu thô đến bảng nhóm
    
    Khi nhiều quan sát được gộp vào lớp, ta giữ số lần xuất hiện trong mỗi lớp nhưng mất vị trí chính xác bên trong lớp. Tổng tần số phải bằng cỡ mẫu. Nhóm tần số 0 không chứa dữ liệu.
    
    **Vận dụng.** Cho 8 số đo: 11, 16, 19, 20, 22, 27, 28, 31. Lập tần số các nhóm [10;20), [20;30), [30;40).
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIII-B09-O01" data-thpt-first-try-id="THPT-G12-B09-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tần số lần lượt 3, 4, 1; tổng 8. Số 20 thuộc nhóm thứ hai.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Gạch từng quan sát đã đếm, kiểm tổng tần số và đầu mút. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p01). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.2. Khoảng biến thiên dùng hai cận
    
    Với mẫu thô, khoảng biến thiên bằng giá trị lớn nhất trừ nhỏ nhất. Với mẫu nhóm, chỉ biết hai lớp ngoài có dữ liệu: lấy cận trên lớp cuối trừ cận dưới lớp đầu. Cận lớp không nhất thiết là quan sát thật.
    
    **Vận dụng.** Các lớp [0;4), [4;8), [8;12), [12;16), [16;20) có tần số 0,3,5,2,0. Tính R nhóm.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIII-B09-O02" data-thpt-first-try-id="THPT-G12-B09-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Lớp đầu có dữ liệu [4;8), cuối [12;16). $R=16-4=12$ (đơn vị gốc).
    
    <span data-thpt-help-id="HELP-G12-B09-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bỏ lớp rỗng ở hai đầu; không dùng trung điểm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p03). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.3. Biên nhạy với một quan sát xa
    
    Chỉ một quan sát xa có thể làm R tăng mạnh mà phần giữa gần như không đổi. Cách chia lớp cũng ảnh hưởng R nhóm. Vì vậy R không phản ánh hết mức phân tán của cả mẫu.
    
    **Vận dụng.** Ba lớp liên tiếp [10;20),[20;30),[30;40) đều có dữ liệu. Thêm một quan sát ở [70;80). R nhóm thay đổi bao nhiêu?
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIII-B09-O03" data-thpt-first-try-id="THPT-G12-B09-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** R từ 30 thành 70, tăng 40 đơn vị. Không đủ thông tin để kết luận IQR tăng 40.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        So cận ngoài trước và sau, phân biệt một ngoại lệ với toàn bộ mẫu. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p05). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.4. Vị trí tứ phân vị và cộng dồn
    
    Nếu xếp các quan sát theo thứ tự không giảm, Q₁ và Q₃ nằm gần vị trí một phần tư và ba phần tư. Với bảng nhóm, mốc $n/4$ và $3n/4$ được đặt trên cột cộng dồn. Tìm lớp có tần số dương đầu tiên mà cộng dồn đạt hoặc vượt mốc.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg" alt="Biểu đồ tần số tích lũy bốn nhóm: 6, 20, 32, 40; đường ngang tại 10 và 30."/><figcaption>Đọc trục đứng theo thang 0–40: mốc 10 giữa 6 và 20, mốc 30 giữa 20 và 32. Chọn lớp 2 và lớp 3, sau đó mới nội suy trên độ rộng lớp.</figcaption></figure>
    
    **Vận dụng.** Tần số bốn lớp liên tiếp là 4, 8, 12, 8. Tìm n, mốc Q₁, Q₃ và lớp tương ứng.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIII-B09-O04" data-thpt-first-try-id="THPT-G12-B09-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $n=32$; mốc 8 và 24. Cộng dồn 4,12,24,32. Q₁ ở lớp 2; Q₃ ở cận trên lớp 3 theo quy ước chọn lớp đạt mốc trước.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không chọn lớp đông nhất; tại đúng biên, không nội suy tùy tiện qua lớp rỗng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p07). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.5. Nội suy: phần nào của bề rộng lớp?
    
    Giả sử trong lớp chứa tứ phân vị, có f quan sát và C quan sát thuộc các lớp trước. Nếu mốc cần đạt là t thì còn t−C quan sát trong lớp, tức phần $(t-C)/f$ của lớp trong mô hình phân bố đều. Nhân bề rộng h rồi cộng cận dưới L.
    
    **Vận dụng.** Với n=24, lớp chứa Q₁ là [12;18), C=2, f=8. Ước lượng Q₁.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIII-B09-O05" data-thpt-first-try-id="THPT-G12-B09-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $t=6$, phần cần đi $(6-2)/8=1/2$. $Q_1=12+6/2=15$.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm phần nội suy từ 0 đến 1; không lấy tổng cộng dồn hết lớp làm C. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.6. Chọn đại lượng theo câu hỏi
    
    R nhìn hai đầu, khoảng tứ phân vị $\Delta_Q=Q_3-Q_1$ nhìn nửa giữa. Hai mẫu có thể cùng IQR mà R khác nhau hoặc ngược lại. So sánh cùng đơn vị và cách ghép nhóm tương thích.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIII-B09-RANGE-IQR-R00.svg" alt="Miền cận 0–50, Q1≈17,78, Q3≈32,22; khoảng tứ phân vị≈14,44."/><figcaption>Đoạn ngoài thể hiện cận nhóm có dữ liệu, đoạn giữa từ Q₁ tới Q₃. Không nhầm 50 là IQR.</figcaption></figure>
    
    **Vận dụng.** Hai bảng cùng đơn vị: A có R=40, IQR≈12; B có R=60, IQR≈10. Mẫu nào trải rộng toàn miền hơn, mẫu nào tập trung ở giữa hơn?
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIII-B09-O06" data-thpt-first-try-id="THPT-G12-B09-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** B có biên rộng hơn (60>40), đồng thời nửa giữa hẹp hơn (10<12). Không có một kết luận duy nhất về mọi khía cạnh độ phân tán.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đọc kỹ đề hỏi biên hay phần giữa; nêu cả hai nhận xét nếu cần. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p11). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.7. Thực hành cả hai cách: mẫu thô và ghép nhóm
    
    Với 8 quan sát thô đã sắp xếp, Q₁ là trung vị 4 số đầu, Q₃ là trung vị 4 số cuối. Với bảng ghép, phải dùng mốc n/4, 3n/4 và nội suy; hai cách không nhất thiết trùng nhau.
    
    **Vận dụng.** Dữ liệu 6,7,8,9,12,13,14,18. Tính R và IQR gốc, rồi ghép theo [5;10),[10;15),[15;20) và tính R, IQR nhóm.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIII-B09-O05" data-thpt-first-try-id="THPT-G12-B09-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Gốc: $R=18-6=12$; $Q_1=(7+8)/2=7{,}5$, $Q_3=(13+14)/2=13{,}5$, IQR=6. Nhóm: f=(4,3,1), cộng dồn 4,7,8; $R=20-5=15$, $Q_1=5+2\cdot5/4=7{,}5$, $Q_3=10+(6-4)\cdot5/3=40/3$, IQR $=35/6\approx5{,}83$. Giá trị trùng ở Q₁ chỉ là tình cờ.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Giữ nguyên mẫu gốc để tính chính xác, không dùng trung điểm lớp thay từng quan sát. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Khoảng biến thiên của mẫu số liệu ghép nhóm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khoảng biến thiên của mẫu số liệu ghép nhóm.</strong><p>Mẫu số liệu ghép nhóm có các lớp nửa kín, hữu hạn, không chồng lấn, tần số \(f_i\ge0\), \(n=\sum_i f_i&gt;0\). Khoảng biến thiên R của mẫu ghép nhóm là cận trên lớp cuối có tần số dương trừ cận dưới lớp đầu có tần số dương. Nó là độ rộng phủ theo các nhóm, không phải khoảng biến thiên chính xác của mẫu gốc. Với mẫu nằm trong các khoảng nửa kín, \(R_{\rm gốc}\le R\).</p></div>

    ### 2.1.1. Ý nghĩa và giới hạn
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Ý nghĩa và giới hạn.</strong><p>R có cùng đơn vị dữ liệu, nhạy với quan sát xa ở hai đầu và cách chia lớp. R không xác định IQR hay phương sai. Chỉ so các mẫu cùng đơn vị, phạm vi và cách ghép đủ tương thích.</p></div>

    ### 2.2. Khoảng tứ phân vị của mẫu số liệu ghép nhóm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khoảng tứ phân vị của mẫu số liệu ghép nhóm.</strong><p>Khoảng tứ phân vị là \(\Delta_Q=Q_3-Q_1\) (còn gọi IQR), mô tả độ rộng nửa giữa theo các tứ phân vị. Với dữ liệu nhóm, các tứ phân vị được ước lượng bằng nội suy, không nhất thiết bằng tứ phân vị mẫu gốc.</p></div>

    ### 2.2.1. Xác định lớp và nội suy
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Xác định lớp và nội suy.</strong><p>Đặt \(t_r=rn/4\) với r=1 hoặc 3. Chọn lớp có tần số dương đầu tiên chứa mốc theo cộng dồn đạt hoặc vượt t_r. Gọi L là cận dưới, h là bề rộng dương, f&gt;0 là tần số lớp, C là tổng tần số trước lớp. Công thức \(Q_r=L+\frac{t_r-C}{f}h\). Kiểm \(0\le(t_r-C)/f\le1\). Nếu đúng mốc cộng dồn ở biên lớp thì theo quy ước chọn lớp đạt mốc trước; hai lớp kề cùng biên cho cùng giá trị nếu không có khoảng rỗng. Không chia f=0. Giữ số chính xác đến phép trừ cuối; khi so với mẫu thô thì ghi rõ xấp xỉ.</p></div>

=== "Ví dụ"

    ### 3.1. Nhận diện nhóm rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-01"><p><strong>Đề bài:</strong> Bảng [0;10), [10;20), [20;30) có f=(0,5,7). Tìm cỡ mẫu và lớp đầu có dữ liệu.</p><p><strong>Phân tích:</strong> Cộng các tần số, tìm lớp đầu có f dương.</p><p><strong>Lời giải:</strong> n=0+5+7=12; lớp đầu [10;20).</p><p><strong>Kiểm lại:</strong> Tổng đúng 12; không có quan sát trong [0;10).</p></div>

    ### 3.2. Khoảng biến thiên nhóm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-02"><p><strong>Đề bài:</strong> Các nhóm [0;5),[5;10),[10;15),[15;20), f=(0,5,10,0). Tính R.</p><p><strong>Phân tích:</strong> Hai nhóm rỗng ngoài cùng không tham gia xác định cận.</p><p><strong>Lời giải:</strong> \(R=15-5=10\).</p><p><strong>Kiểm lại:</strong> Không lấy 20−0 hay hai trung điểm.</p></div>

    ### 3.3. Tác động ngoại lệ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-03"><p><strong>Đề bài:</strong> Lớp đầu [10;20), lớp cuối [30;40). Thêm quan sát ở [60;70).</p><p><strong>Phân tích:</strong> Chỉ cận trên thay đổi.</p><p><strong>Lời giải:</strong> R từ 40−10=30 thành 70−10=60.</p><p><strong>Kiểm lại:</strong> Tăng 30 nhưng không biết IQR đổi bao nhiêu.</p></div>

    ### 3.4. Định vị Q₁ và Q₃
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-04"><p><strong>Đề bài:</strong> Bốn lớp liền nhau có f=(6,14,12,8). Tìm lớp chứa các tứ phân vị.</p><p><strong>Phân tích:</strong> Lập cộng dồn trước khi nội suy.</p><p><strong>Lời giải:</strong> \(n=40\), t₁=10,t₃=30; cộng dồn 6,20,32,40. Mốc 10 ở lớp 2, mốc 30 ở lớp 3.</p><p><strong>Kiểm lại:</strong> Đối chiếu hình; 6&lt;10≤20 và 20&lt;30≤32.</p></div>

    ### 3.5. Nội suy và trừ hai tứ phân vị
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-05"><p><strong>Đề bài:</strong> Các lớp [10;15),[15;20),[20;25),[25;30), f=(6,14,12,8). Tính IQR.</p><p><strong>Phân tích:</strong> Dựa vào lớp ở ví dụ trước, dùng từng bộ L,h,C,f.</p><p><strong>Lời giải:</strong> \(Q_1=15+\frac{10-6}{14}5=115/7\approx16{,}43\). \(Q_3=20+\frac{30-20}{12}5=145/6\approx24{,}17\). \(\Delta_Q=325/42\approx7{,}74\).</p><p><strong>Kiểm lại:</strong> Hai Q nằm trong lớp đã chọn; làm tròn sau khi trừ.</p></div>

    ### 3.6. Hai mẫu ghép nhóm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-06"><p><strong>Đề bài:</strong> Năm lớp [0;10),[10;20),[20;30),[30;40),[40;50). A có f=(1,9,12,9,1); B có f=(0,7,18,7,0). So sánh R và IQR.</p><p><strong>Phân tích:</strong> Cả hai n=32; so mốc 8 và 24 theo cộng dồn từng bảng.</p><p><strong>Lời giải:</strong> A: \(R=50\), \(Q_1=10+70/9=160/9\), \(Q_3=30+20/9=290/9\), IQR=130/9≈14,44. B: \(R=30\), \(Q_1=20+10/18=185/9\), \(Q_3=20+170/18=265/9\), IQR=80/9≈8,89. B tập trung hơn theo cả hai thước đo.</p><p><strong>Kiểm lại:</strong> Kiểm lớp rỗng B; kết luận giới hạn ở mẫu và cách ghép này.</p></div>

    ### 3.7. Dữ liệu thô, bảng ghép và sai khác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-R02-07"><p><strong>Đề bài:</strong> 12 thời gian (phút): 21,12,19,13,26,38,17,31,28,16,22,24. Ghép lớp [10;20),[20;30),[30;40), so R và IQR gốc/nhóm.</p><p><strong>Phân tích:</strong> Sắp xếp và tính tứ phân vị gốc trước, rồi đếm lớp và nội suy riêng.</p><p><strong>Lời giải:</strong> Mẫu đã xếp: 12,13,16,17,19,21,22,24,26,28,31,38. Gốc: R=26, \(Q_1=(16+17)/2=16{,}5\), \(Q_3=(26+28)/2=27\), IQR=10,5. Nhóm f=(5,5,2), cộng dồn 5,10,12; R=30. Mốc 3 và 9; \(Q_1=10+3\cdot10/5=16\), \(Q_3=20+(9-5)\cdot10/5=28\), IQR=12 phút.</p><p><strong>Kiểm lại:</strong> Tổng tần số 12; R nhóm lớn hơn R gốc, IQR nhóm lệch 1,5 phút. Không suy rằng sai khác luôn cùng dấu.</p></div>

    ### 3.8. Mốc đúng biên và lớp rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-R02-08"><p><strong>Đề bài:</strong> Các lớp [0;10),[10;20),[20;30),[30;40) có f=(4,0,8,4). Tìm Q₁, Q₃ và IQR.</p><p><strong>Phân tích:</strong> Mốc n/4=4, 3n/4=12 đúng tại hai cộng dồn; chọn lớp đạt mốc trước có tần số dương.</p><p><strong>Lời giải:</strong> \(Q_1=0+4\cdot10/4=10\), \(Q_3=20+(12-4)\cdot10/8=30\); IQR=20.</p><p><strong>Kiểm lại:</strong> Không chia cho tần số lớp rỗng. Đây là quy ước nội suy nhóm, không khẳng định tứ phân vị gốc bằng 10 và 30.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Từ số liệu thô đến bảng nhóm
    
    ??? tip "Cách tự sửa"
    
        Gạch từng quan sát đã đếm, kiểm tổng tần số và đầu mút. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c01); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p01).

    ### 4.2. Khoảng biến thiên dùng hai cận
    
    ??? tip "Cách tự sửa"
    
        Bỏ lớp rỗng ở hai đầu; không dùng trung điểm. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p03).

    ### 4.3. Biên nhạy với một quan sát xa
    
    ??? tip "Cách tự sửa"
    
        So cận ngoài trước và sau, phân biệt một ngoại lệ với toàn bộ mẫu. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c03); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p05).

    ### 4.4. Vị trí tứ phân vị và cộng dồn
    
    ??? tip "Cách tự sửa"
    
        Không chọn lớp đông nhất; tại đúng biên, không nội suy tùy tiện qua lớp rỗng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c04); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p07).

    ### 4.5. Nội suy: phần nào của bề rộng lớp?
    
    ??? tip "Cách tự sửa"
    
        Kiểm phần nội suy từ 0 đến 1; không lấy tổng cộng dồn hết lớp làm C. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p09).

    ### 4.6. Chọn đại lượng theo câu hỏi
    
    ??? tip "Cách tự sửa"
    
        Đọc kỹ đề hỏi biên hay phần giữa; nêu cả hai nhận xét nếu cần. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p11).

    ### 4.7. Thực hành cả hai cách: mẫu thô và ghép nhóm
    
    ??? tip "Cách tự sửa"
    
        Giữ nguyên mẫu gốc để tính chính xác, không dùng trung điểm lớp thay từng quan sát. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p09).

    [Core Bài 9](../luyen-tap/#b09-core) · [Luyện tập và Tự luận](../luyen-tap/#b09-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b09-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập một, trang in 75–79.*


---

# Candidate B10 · 7fe3db93885de61675d237e63317529eeca231b5

# Toán 12 · Bài 10. Phương sai và độ lệch chuẩn

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG III · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 80–84</p><p class="thpt-r4-lead">Hiểu số liệu, đọc hình, tự làm và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương III</a><a href="../bai-9/">Bài 9 · Ôn lại tiền đề</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Một máy đo có thể đo trung bình đúng nhưng dao động quá nhiều; một phương án có lợi nhuận trung bình cao nhưng biến động lớn. Để đo mức phân tán quanh trung bình từ tất cả nhóm, cần phương sai và độ lệch chuẩn. Ôn tần số, trung điểm, trung bình có trọng số, bình phương và căn bậc hai.

    ### 1.1. Đại diện mỗi lớp và trung bình có trọng số
    
    Bảng nhóm mất số đo riêng lẻ, nên dùng trung điểm $c_i$ đại diện. Nếu có fᵢ quan sát, giá trị đại diện được lặp fᵢ lần khi tính trung bình, không phải mỗi lớp chỉ góp một lần.
    
    **Vận dụng.** Hai nhóm [0;4),[4;8) có tần số 1 và 3. Tìm trung điểm, trung bình nhóm.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIII-B10-O01" data-thpt-first-try-id="THPT-G12-B10-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $c_1=2,c_2=6,n=4$, $\bar x=(1\cdot2+3\cdot6)/4=5$.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm trung bình gần 6 hơn 2 vì tần số lớp sau lớn hơn. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p01). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.2. Vì sao lấy bình phương độ lệch?
    
    Các độ lệch âm và dương cộng lại bằng 0 quanh trung bình. Bình phương mỗi độ lệch để không triệt tiêu chéo dấu, rồi tính trung bình có trọng số.
    
    **Vận dụng.** Hai giá trị đại diện 2 và 8, mỗi giá trị tần số 1. Tính trung bình và phương sai theo n.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIII-B10-O02" data-thpt-first-try-id="THPT-G12-B10-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\bar x=5$, độ lệch −3,+3; $s^2=(9+9)/2=9$.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bình phương từng độ lệch trước khi cộng, không bình phương tổng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p03). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.3. Rút gọn bằng tổng bình phương
    
    Khai triển $(c_i-\bar x)^2=c_i^2-2c_i\bar x+\bar x^2$ và dùng $\sum f_ic_i=n\bar x$; còn $s^2=\sum f_ic_i^2/n-\bar x^2$. Công thức nhanh nhưng làm tròn sớm có thể gây sai.
    
    **Vận dụng.** Ba giá trị đại diện 1,3,5 có f=(2,4,2). Tính phương sai bằng công thức rút gọn.
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIII-B10-O03" data-thpt-first-try-id="THPT-G12-B10-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $n=8$, $\bar x=3$; $\sum f_ic_i^2=2+36+50=88$. $s^2=88/8-9=2$.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm lại với độ lệch −2,0,2: tổng bình phương có trọng số 16, chia 8. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p05). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.4. Độ lệch chuẩn và đơn vị
    
    Phương sai có đơn vị bình phương, độ lệch chuẩn $s=\sqrt{s^2}$ đưa về đơn vị ban đầu. Không có nghĩa mọi số đo cách trung bình đúng s.
    
    **Vận dụng.** Phương sai 12,25 g². Tìm độ lệch chuẩn và đơn vị.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIII-B10-O04" data-thpt-first-try-id="THPT-G12-B10-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $s=\sqrt{12{,}25}=3{,}5$ g.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Chọn căn không âm và đơn vị g. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p07). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.5. Cùng trung bình, khác mức phân tán
    
    Quan sát hình: hai bảng tần số đối xứng quanh 30, nhưng B có nhiều trọng số xa tâm hơn A. Các cột xa trung bình góp bình phương độ lệch lớn, nên B biến động hơn theo s.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg" alt="Hai bảng tần số tại 10,20,30,40,50: A=(1,2,8,2,1), B=(4,2,2,2,4), cùng trung bình 30."/><figcaption>Các cột xa 30 của B lớn hơn. Bởi bình phương độ lệch tăng nhanh khi xa tâm, s của B lớn hơn A; đây không phải đồ thị từng quan sát thô.</figcaption></figure>
    
    **Vận dụng.** Trung điểm 10,20,30; A f=(1,6,1), B f=(3,2,3). So sánh trung bình và phương sai.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIII-B10-O05" data-thpt-first-try-id="THPT-G12-B10-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Cả hai n=8, trung bình 20. A: $s^2_A=(100+100)/8=25$; B: $s^2_B=(300+300)/8=75$. A có s=5, B có s≈8,66, A ít biến động hơn.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        So cùng đơn vị và cùng mục tiêu; trung bình bằng nhau không kéo theo phương sai bằng nhau. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.6. Đo rủi ro: xem mục tiêu và quy mô
    
    Độ lệch chuẩn là một thước đo biến động tuyệt đối; không phản ánh mọi loại rủi ro. Khi mức trung bình rất khác nhau, cần nêu hạn chế của việc so s trực tiếp. Nếu dữ liệu là các đại lượng dương có thang tỷ lệ thích hợp, có thể tham khảo hệ số biến thiên $CV=s/\bar x$ (ngoài yêu cầu Core).
    
    **Vận dụng.** X có trung bình 50, s=5; Y có trung bình 100, s=8 (cùng đơn vị, đại lượng dương). So biến động tuyệt đối và tương đối.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIII-B10-O06" data-thpt-first-try-id="THPT-G12-B10-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Y có s lớn hơn (8>5), nhưng CV_X=10%, CV_Y=8% trong bối cảnh thang tỷ lệ thích hợp. Không kết luận Y rủi ro hơn về mọi mặt.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không tính CV khi trung bình bằng 0, không dùng máy móc khi âm hoặc thang đo không có gốc 0 ý nghĩa. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p11). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.7. Dữ liệu thô → bảng ghép → quyết định
    
    Muốn quyết định theo ngưỡng s, lập bảng từ dữ liệu thật, tính trung bình và phương sai với mẫu số n, lấy căn rồi so với ngưỡng. Nếu s nhóm sát ngưỡng, nên kiểm mẫu thô vì ghép nhóm làm mất thông tin.
    
    **Vận dụng.** 8 sai số (mm): 0,1; 0,2; 0,3; 0,4; 0,6; 0,7; 0,8; 0,9. Ghép lớp [0;0,5),[0,5;1). Thiết bị cần kiểm tra nếu s nhóm >0,22 mm. Tính và quyết định.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIII-B10-O05" data-thpt-first-try-id="THPT-G12-B10-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** f=(4,4), c=(0,25;0,75), trung bình 0,5 mm. $s^2=(4\cdot0{,}25^2+4\cdot0{,}25^2)/8=0{,}0625$ mm², s=0,25 mm >0,22 nên cần kiểm tra theo tiêu chí nhóm. Số liệu thô cho s khoảng 0,274 mm, cũng vượt ngưỡng.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Ghi rõ tiêu chí dùng mẫu ghép hay mẫu gốc; đừng thay ngưỡng giữa hai cách. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.8. Phân biệt mẫu số n và n−1
    
    Phương sai mô tả của mẫu trong bài dùng mẫu số n. Trong chú ý SGK có công thức khác dùng n−1 cho n>1 (ước lượng phương sai tổng thể trong bối cảnh lấy mẫu thích hợp). Hai đại lượng khác mục đích, không tráo lẫn.
    
    **Vận dụng.** Một bảng có n=5, tổng bình phương độ lệch có trọng số bằng 20. Tính phương sai mô tả; nếu bài riêng yêu cầu chia n−1 thì được bao nhiêu?
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHIII-B10-O02" data-thpt-first-try-id="THPT-G12-B10-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Theo Core: $s^2=20/5=4$. Theo yêu cầu riêng $20/(5-1)=5$. Không dùng 5 thay cho 4 khi đề hỏi phương sai mô tả SGK.
    
    <span data-thpt-help-id="HELP-G12-B10-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đọc mục đích và mẫu số đề yêu cầu; n−1 không dùng khi n=1. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b10-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b10-p03). Sau đó tự làm lại Vận dụng không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Phương sai và độ lệch chuẩn của mẫu ghép nhóm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương sai và độ lệch chuẩn của mẫu ghép nhóm.</strong><p>Với n quan sát, nhóm i có tần số fᵢ và trung điểm đại diện \(c_i\), đặt \(\bar x=\sum_i f_ic_i/n\), \(n=\sum_i f_i&gt;0\). Phương sai mô tả là \(s^2=\frac1n\sum_i f_i(c_i-\bar x)^2\ge0\). Độ lệch chuẩn \(s=\sqrt{s^2}\). Phương sai mang bình phương đơn vị; độ lệch chuẩn cùng đơn vị số đo. Đây là các đại lượng của mẫu ghép nhóm, ước lượng các đại lượng tương ứng của mẫu gốc.</p></div>

    ### 2.1.1. Công thức tính và điều kiện
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức tính và điều kiện.</strong><p>\(s^2=\frac1n\sum_i f_ic_i^2-\bar x^2\) tương đương công thức độ lệch. Giữ đủ chữ số trước phép trừ; kiểm s² không âm. s²=0 khi mọi trung điểm có tần số dương giống nhau; không suy tất cả quan sát gốc bằng nhau. Một cách kiểm: tính trung bình trước, lập cột fᵢcᵢ và fᵢcᵢ², đối chiếu bằng tổng fᵢ(cᵢ−x̄)².</p></div>

    ### 2.2. Sử dụng phương sai, độ lệch chuẩn để đo rủi ro
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Sử dụng phương sai, độ lệch chuẩn để đo rủi ro.</strong><p>Khi cùng thang đo và mục tiêu, s nhỏ hơn nghĩa là ít phân tán quanh trung bình hơn theo tiêu chí này. Khi cùng mức trung bình, phương án có s nhỏ hơn thường ổn định hơn; rủi ro còn phụ thuộc mục tiêu, phân bố, các giá trị cực trị và dữ liệu. Với ngưỡng kiểm định đã cho, so s chưa làm tròn sớm; nêu rõ loại dữ liệu và quy ước tính. Khi trung bình khác đáng kể, không suy rủi ro tương đối từ s tuyệt đối một cách máy móc.</p></div>

    **Chú ý (không thay công thức Core):** Với n>1, một đại lượng khác dùng mẫu số $n-1$ là $\frac{1}{n-1}\sum_i f_i(c_i-\bar x)^2$. Trong bối cảnh lấy mẫu thống kê phù hợp, đây là dạng ước lượng phương sai tổng thể dựa trên giá trị đại diện. Không tự đổi mẫu số n trong các bài tính phương sai mô tả. Nếu tham khảo $CV=s/\bar x$, chỉ dùng khi trung bình dương và thang đo tỷ lệ thích hợp; không coi là yêu cầu Core.

=== "Ví dụ"

    ### 3.1. Trung bình có trọng số
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-01"><p><strong>Đề bài:</strong> Các lớp [0;10),[10;20),[20;30),[30;40), f=(2,6,6,2). Tính trung bình.</p><p><strong>Phân tích:</strong> Lấy c=(5,15,25,35), nhân từng tần số.</p><p><strong>Lời giải:</strong> \(n=16\), \(\sum fc=10+90+150+70=320\), \(\bar x=20\).</p><p><strong>Kiểm lại:</strong> Bảng đối xứng quanh 20, nên trung bình hợp lí.</p></div>

    ### 3.2. Phương sai trực tiếp
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-02"><p><strong>Đề bài:</strong> c=(5,15,25,35), f=(2,6,6,2), trung bình 20. Tính phương sai.</p><p><strong>Phân tích:</strong> Tính độ lệch −15,−5,5,15, bình phương và nhân tần số.</p><p><strong>Lời giải:</strong> \(\sum f(c-20)^2=450+150+150+450=1200\); \(s^2=1200/16=75\).</p><p><strong>Kiểm lại:</strong> Đơn vị là bình phương đơn vị gốc; tổng độ lệch có trọng số bằng 0.</p></div>

    ### 3.3. Công thức rút gọn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-03"><p><strong>Đề bài:</strong> c=(1,3,5,7), f=(1,3,3,1). Tính phương sai.</p><p><strong>Phân tích:</strong> Dùng cả tổng fc và fc².</p><p><strong>Lời giải:</strong> \(n=8\), \(\sum fc=32\), \(\sum fc^2=1+27+75+49=152\). \(\bar x=4\), \(s^2=152/8-16=3\).</p><p><strong>Kiểm lại:</strong> Công thức trực tiếp cho (9+3+3+9)/8=3.</p></div>

    ### 3.4. Trở về đơn vị gốc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-04"><p><strong>Đề bài:</strong> Phương sai 75 giây². Tính độ lệch chuẩn.</p><p><strong>Phân tích:</strong> Lấy căn không âm cuối cùng.</p><p><strong>Lời giải:</strong> \(s=\sqrt{75}=5\sqrt3\approx8{,}66\) giây.</p><p><strong>Kiểm lại:</strong> Bình phương 5√3 được 75; không viết giây² cho s.</p></div>

    ### 3.5. So hai phương án
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-05"><p><strong>Đề bài:</strong> c=(10,20,30); A f=(2,6,2), B f=(4,2,4). So sánh độ ổn định theo s.</p><p><strong>Phân tích:</strong> Cả hai n=10 và trung bình 20; so phương sai.</p><p><strong>Lời giải:</strong> \(s_A^2=400/10=40\), \(s_B^2=800/10=80\), \(s_A\approx6{,}32\), \(s_B\approx8{,}94\). A ổn định hơn theo tiêu chí này.</p><p><strong>Kiểm lại:</strong> B có nhiều quan sát ở hai nhóm xa tâm hơn, đúng với kết quả.</p></div>

    ### 3.6. Giới hạn khi mức nền khác nhau
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-06"><p><strong>Đề bài:</strong> Thu nhập X trung bình 20 triệu, s=4 triệu; Y trung bình 200 triệu, s=20 triệu. Có đủ kết luận Y rủi ro tương đối hơn không?</p><p><strong>Phân tích:</strong> Phân biệt biến động tuyệt đối với biến động tương đối.</p><p><strong>Lời giải:</strong> Y biến động tuyệt đối lớn hơn, nhưng với thang tỷ lệ dương, CV tham khảo của X=20%, Y=10%. Chưa đủ để nói Y rủi ro tương đối hơn.</p><p><strong>Kiểm lại:</strong> Không biến kết quả thống kê thành dự báo chắc chắn về thu nhập tương lai.</p></div>

    ### 3.7. Đo máy và ra quyết định từ dữ liệu thô
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-R02-07"><p><strong>Đề bài:</strong> 12 số đo lệch (mm): −0,42; −0,28; −0,15; −0,08; −0,03; 0,02; 0,04; 0,12; 0,18; 0,26; 0,33; 0,45. Ghép [-0,6;-0,2),[-0,2;0,2),[0,2;0,6). Quy trình yêu cầu kiểm máy nếu s nhóm &gt;0,25 mm.</p><p><strong>Phân tích:</strong> Đếm nhóm, lập cột giá trị đại diện; dùng công thức rút gọn, so ngưỡng bằng số chưa làm tròn.</p><p><strong>Lời giải:</strong> f=(2,7,3), c=(−0,4;0;0,4), n=12. \(\bar x=0{,}4/12=1/30\) mm. \(\sum fc^2=5\cdot0{,}16=0{,}8\). \(s^2=0{,}8/12-(1/30)^2=59/900\), \(s=\sqrt{59}/30\approx0{,}2560\) mm. Vì &gt;0,25, cần kiểm máy theo quy trình.</p><p><strong>Kiểm lại:</strong> Tổng tần số 12. Sát ngưỡng nên báo thêm kết quả gốc nếu có; không kết luận máy hỏng chỉ bằng một thước đo.</p></div>

    ### 3.8. Đối chiếu cùng dữ liệu gốc và nhóm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-R02-08"><p><strong>Đề bài:</strong> 6 khối lượng (g): 11,12,13,17,18,19. Ghép [10;15),[15;20). So trung bình, phương sai và độ lệch chuẩn trước và sau ghép.</p><p><strong>Phân tích:</strong> Tính trực tiếp từ 6 số, rồi thay mỗi số bằng trung điểm lớp riêng.</p><p><strong>Lời giải:</strong> Gốc: trung bình 15 g, tổng bình phương độ lệch 16+9+4+4+9+16=58, \(s^2=29/3\), \(s\approx3{,}11\) g. Nhóm: f=(3,3), c=(12,5;17,5), trung bình 15 g, \(s^2=6{,}25\), s=2,5 g.</p><p><strong>Kiểm lại:</strong> Cùng trung bình nhưng phương sai khác; ghép nhóm không nhất thiết bảo toàn phương sai.</p></div>

    ### 3.9. Hai mẫu số, hai mục đích
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B10-R02-09"><p><strong>Đề bài:</strong> c=(2,4,6), f=(1,2,1). Tính s² của SGK và đại lượng chia n−1 nếu được yêu cầu.</p><p><strong>Phân tích:</strong> Trước tiên tính tổng bình phương độ lệch.</p><p><strong>Lời giải:</strong> \(n=4\), \(\bar x=4\), tổng 4+0+4=8. Core \(s^2=8/4=2\); đại lượng chia n−1 là \(8/3\).</p><p><strong>Kiểm lại:</strong> n=4&gt;1; không dùng n−1 để thay đáp án Core.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Đại diện mỗi lớp và trung bình có trọng số
    
    ??? tip "Cách tự sửa"
    
        Kiểm trung bình gần 6 hơn 2 vì tần số lớp sau lớn hơn. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c01); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p01).

    ### 4.2. Vì sao lấy bình phương độ lệch?
    
    ??? tip "Cách tự sửa"
    
        Bình phương từng độ lệch trước khi cộng, không bình phương tổng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p03).

    ### 4.3. Rút gọn bằng tổng bình phương
    
    ??? tip "Cách tự sửa"
    
        Kiểm lại với độ lệch −2,0,2: tổng bình phương có trọng số 16, chia 8. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c03); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p05).

    ### 4.4. Độ lệch chuẩn và đơn vị
    
    ??? tip "Cách tự sửa"
    
        Chọn căn không âm và đơn vị g. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c04); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p07).

    ### 4.5. Cùng trung bình, khác mức phân tán
    
    ??? tip "Cách tự sửa"
    
        So cùng đơn vị và cùng mục tiêu; trung bình bằng nhau không kéo theo phương sai bằng nhau. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p09).

    ### 4.6. Đo rủi ro: xem mục tiêu và quy mô
    
    ??? tip "Cách tự sửa"
    
        Không tính CV khi trung bình bằng 0, không dùng máy móc khi âm hoặc thang đo không có gốc 0 ý nghĩa. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p11).

    ### 4.7. Dữ liệu thô → bảng ghép → quyết định
    
    ??? tip "Cách tự sửa"
    
        Ghi rõ tiêu chí dùng mẫu ghép hay mẫu gốc; đừng thay ngưỡng giữa hai cách. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p09).

    ### 4.8. Phân biệt mẫu số n và n−1
    
    ??? tip "Cách tự sửa"
    
        Đọc mục đích và mẫu số đề yêu cầu; n−1 không dùng khi n=1. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b10-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b10-p03).

    [Core Bài 10](../luyen-tap/#b10-core) · [Luyện tập và Tự luận](../luyen-tap/#b10-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b10-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập một, trang in 80–84.*


# Public D6 labels · bank SHA d91cad435b9a945b044b2fd2f8ff37c21c00abf9

### HELP-G12-B09-01 · G12-CHIII-B09-O01
**Nhận diện dấu hiệu sai:** Đọc một nhóm tần số 0 như nhóm có quan sát.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở đọc lớp và tần số, đặc biệt tiền đề: Tần số; kí hiệu n; khoảng nửa kín [a;b); số liệu gốc và số liệu ghép nhóm.

**Quay lại bản chất/điều kiện:** Bề rộng nhóm h=b−a; tổng tần số n; lớp đầu/lớp cuối có tần số dương mới xác định phần hỗ trợ của dữ liệu. Mẫu đã ghép nhóm không đủ để tái tạo chính xác giá trị lớn nhất/nhỏ nhất của mẫu gốc.

**Xem lại ví dụ có suy luận:** Ví dụ 1 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C01; Practice THPT-G12-B09-P01

### HELP-G12-B09-02 · G12-CHIII-B09-O02
**Nhận diện dấu hiệu sai:** Lấy cận của nhóm tần số 0 hoặc trừ hai trung điểm.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở khoảng biến thiên, đặc biệt tiền đề: đọc lớp và tần số: lớp đầu và cuối có tần số dương.

**Quay lại bản chất/điều kiện:** Khoảng biến thiên ghép nhóm đo độ trải dài xấp xỉ của miền dữ liệu; không phải khoảng cách giữa 2 trung điểm nhóm. R ghép nhóm thường không bằng R mẫu gốc; đừng khẳng định R gốc nếu thiếu dữ liệu thô.

**Xem lại ví dụ có suy luận:** Ví dụ 2 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C02; Practice THPT-G12-B09-P03

### HELP-G12-B09-03 · G12-CHIII-B09-O03
**Nhận diện dấu hiệu sai:** Kết luận mọi giá trị phân tán đều tăng cùng tỷ lệ khi R tăng.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở độ nhạy của khoảng biến thiên, đặc biệt tiền đề: khoảng biến thiên: nhóm đầu/nhóm cuối và R.

**Quay lại bản chất/điều kiện:** R nhạy với giá trị ngoại lệ và với việc mở rộng lớp ở biên; vì vậy R không mô tả đầy đủ nửa giữa phân bố. Không suy ra phương sai, IQR hoặc sự khác biệt từng quan sát chỉ từ R.

**Xem lại ví dụ có suy luận:** Ví dụ 3 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C03; Practice THPT-G12-B09-P05

### HELP-G12-B09-04 · G12-CHIII-B09-O04
**Nhận diện dấu hiệu sai:** Nhầm 3n/4 thành n/3 hoặc lấy lớp có số người lớn nhất.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở tìm lớp chứa tứ phân vị, đặc biệt tiền đề: Tần số tích lũy; cỡ mẫu n; các lớp có độ rộng dương.

**Quay lại bản chất/điều kiện:** Q₁ và Q₃ là các vị trí phân chia mẫu thành bốn phần theo tỉ lệ; từ bảng ghép nhóm chỉ xác định được lớp và ước lượng nội suy. Quy ước định vị theo SGK; không đồng nhất với mọi định nghĩa tứ phân vị cho dữ liệu thô ở từng phần mềm.

**Xem lại ví dụ có suy luận:** Ví dụ 4 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C04; Practice THPT-G12-B09-P07

### HELP-G12-B09-05 · G12-CHIII-B09-O05
**Nhận diện dấu hiệu sai:** Dùng nhầm C cộng dồn đến **sau** lớp đang xét, hoặc làm tròn Q₁ sớm.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở nội suy tứ phân vị, đặc biệt tiền đề: tìm lớp chứa tứ phân vị: vị trí n/4,3n/4; lớp [L;L+h), tần số f và cộng dồn trước lớp C.

**Quay lại bản chất/điều kiện:** Nội suy tuyến tính giả định quan sát phân bố tương đối đều trong lớp để ước lượng vị trí Qᵣ; IQR = Q₃ − Q₁. Q₁, Q₃ và Δ_Q từ dữ liệu ghép nhóm đều là xấp xỉ; không dùng công thức nếu f=0 hoặc lớp có bề rộng không dương.

**Xem lại ví dụ có suy luận:** Ví dụ 5 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C05; Practice THPT-G12-B09-P09

### HELP-G12-B09-06 · G12-CHIII-B09-O06
**Nhận diện dấu hiệu sai:** Dùng R để nhận xét cả nửa giữa hoặc dùng IQR để phủ nhận hoàn toàn tác động biên.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở chọn R hoặc khoảng tứ phân vị, đặc biệt tiền đề: khoảng biến thiên, độ nhạy của khoảng biến thiên, nội suy tứ phân vị; cùng đơn vị và cách chia lớp.

**Quay lại bản chất/điều kiện:** R xem miền ngoài cùng, IQR xem 50% giữa mẫu; dùng kết hợp khi cần kể cả mức nhạy với giá trị bất thường. IQR không cho biết toàn bộ hình dạng phân bố; đừng suy độ phân tán “tuyệt đối đúng” chỉ từ một con số.

**Xem lại ví dụ có suy luận:** Ví dụ 6 trong tab Ví dụ (Bài 9) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B09-C06; Practice THPT-G12-B09-P11

### HELP-G12-B10-01 · G12-CHIII-B10-O01
**Nhận diện dấu hiệu sai:** Cộng trung điểm chia số lớp khi tần số không đều.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở trung bình có trọng số, đặc biệt tiền đề: Tần số, cỡ mẫu n và trung điểm đoạn thẳng.

**Quay lại bản chất/điều kiện:** Chọn trung điểm cᵢ=(aᵢ+aᵢ₊₁)/2 như giá trị đại diện ước lượng của các quan sát trong nhóm. Đơn vị giữ nguyên như dữ liệu; trung điểm không phản ánh vị trí từng quan sát thật.

**Xem lại ví dụ có suy luận:** Ví dụ 1 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C01; Practice THPT-G12-B10-P01

### HELP-G12-B10-02 · G12-CHIII-B10-O02
**Nhận diện dấu hiệu sai:** Quên bình phương hoặc chia n−1 theo công thức khác.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở phương sai, đặc biệt tiền đề: trung bình có trọng số: x̄; số âm bình phương; số không âm.

**Quay lại bản chất/điều kiện:** Phương sai cân bằng các bình phương độ lệch (cᵢ−x̄)² với trọng số tần số fᵢ, chứ không chỉ nhìn hai giá trị biên. Đơn vị của phương sai là **bình phương đơn vị đo**; mẫu số n là công thức Core SGK, không tráo với n−1.

**Xem lại ví dụ có suy luận:** Ví dụ 2 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C02; Practice THPT-G12-B10-P03

### HELP-G12-B10-03 · G12-CHIII-B10-O03
**Nhận diện dấu hiệu sai:** Lấy (Σ fᵢcᵢ/n)² thay cho Σfᵢcᵢ²/n.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở công thức phương sai rút gọn, đặc biệt tiền đề: trung bình có trọng số–phương sai; hằng đẳng thức (a−b)².

**Quay lại bản chất/điều kiện:** Phương sai bằng trung bình trọng số của bình phương giá trị đại diện trừ bình phương trung bình. Không làm tròn trung bình quá sớm; số âm nhỏ do máy tính làm tròn phải rà soát trước khi lấy căn.

**Xem lại ví dụ có suy luận:** Ví dụ 3 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C03; Practice THPT-G12-B10-P05

### HELP-G12-B10-04 · G12-CHIII-B10-O04
**Nhận diện dấu hiệu sai:** Gán đơn vị phút cho phương sai phút², hoặc ghi s=s².

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở độ lệch chuẩn và đơn vị, đặc biệt tiền đề: phương sai–công thức phương sai rút gọn; căn bậc hai không âm.

**Quay lại bản chất/điều kiện:** Độ lệch chuẩn s=√s²≥0 có cùng đơn vị với quan sát; phản ánh mức độ phân tán quanh x̄ ở dữ liệu ghép nhóm. Không diễn giải “mọi quan sát đều cách trung bình đúng s”; s không nói chính xác max/min.

**Xem lại ví dụ có suy luận:** Ví dụ 4 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C04; Practice THPT-G12-B10-P07

### HELP-G12-B10-05 · G12-CHIII-B10-O05
**Nhận diện dấu hiệu sai:** Kết luận bên nào “tốt hơn” chỉ từ s mà bỏ qua mục tiêu hoặc giá trị trung bình.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở so sánh độ ổn định, đặc biệt tiền đề: trung bình có trọng số–độ lệch chuẩn và đơn vị; so sánh số đo cùng đơn vị.

**Quay lại bản chất/điều kiện:** Khi mức trung bình tương đương và cùng đơn vị, s nhỏ hơn thường cho biết dữ liệu tập trung hơn quanh x̄; s lớn hơn cho biết biến động nhiều hơn. Độ lệch chuẩn không phải bảo đảm chất lượng hoặc rủi ro của mọi trường hợp; cần bối cảnh và mẫu phù hợp.

**Xem lại ví dụ có suy luận:** Ví dụ 5 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C05; Practice THPT-G12-B10-P09

### HELP-G12-B10-06 · G12-CHIII-B10-O06
**Nhận diện dấu hiệu sai:** So sánh rủi ro tương đối của hai quy mô khác nhau chỉ qua s tuyệt đối.

**Chẩn đoán lỗ hổng:** Thiếu kiến thức ở giới hạn so sánh rủi ro, đặc biệt tiền đề: so sánh độ ổn định, trung bình, độ lệch chuẩn, cùng thang đo.

**Quay lại bản chất/điều kiện:** Mục tiêu so sánh biến động/tính ổn định gắn với quy mô và ngữ cảnh; chênh trung bình lớn là dấu hiệu cần cẩn trọng. Không gán CV là yêu cầu Core bắt buộc; CV không xác định nếu x̄=0, và khi x̄ âm cần bối cảnh chứ không áp máy móc.

**Xem lại ví dụ có suy luận:** Ví dụ 6 trong tab Ví dụ (Bài 10) và giải thích vì sao chọn cách này.

**Tự làm một câu khác cùng outcome:** câu Luyện tập được liên kết bên dưới → đối chiếu lời giải **sau khi làm**, sau đó quay lại câu Core được liên kết bên dưới.
Core THPT-G12-B10-C06; Practice THPT-G12-B10-P11

# SVG corrected cumulative scale · c69f87d1eef339b238b74db647e24ffe58f3e2c1

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="510" viewBox="0 0 1100 510" role="img" aria-labelledby="t d"><title id="t">Tần số tích lũy và vị trí các tứ phân vị</title><desc id="d">Bốn lớp có tần số 6,14,12,8 và cộng dồn 6,20,32,40. Tất cả cột và đường mốc cùng thang tuyến tính từ 0 đến 40. Mốc 10 thuộc lớp hai và mốc 30 thuộc lớp ba.</desc><rect width="1100" height="510" rx="22" fill="#f6f9fb"/><g font-family="DejaVu Sans" fill="#182d48"><text x="36" y="45" font-size="28" font-weight="bold">Xác định lớp chứa Q₁ và Q₃</text><text x="36" y="80" font-size="20">n = 40; n/4 = 10; 3n/4 = 30</text><text x="36" y="115" font-size="18">Tần số tích lũy</text><line x1="110" y1="410" x2="905" y2="410" stroke="#d1dce5" stroke-width="1"/><text x="92" y="417" font-size="20" text-anchor="end">0</text><line x1="110" y1="345" x2="905" y2="345" stroke="#d1dce5" stroke-width="1"/><text x="92" y="352" font-size="20" text-anchor="end">10</text><line x1="110" y1="280" x2="905" y2="280" stroke="#d1dce5" stroke-width="1"/><text x="92" y="287" font-size="20" text-anchor="end">20</text><line x1="110" y1="215" x2="905" y2="215" stroke="#d1dce5" stroke-width="1"/><text x="92" y="222" font-size="20" text-anchor="end">30</text><line x1="110" y1="150" x2="905" y2="150" stroke="#d1dce5" stroke-width="1"/><text x="92" y="157" font-size="20" text-anchor="end">40</text><line x1="110" y1="410" x2="905" y2="410" stroke="#576c84" stroke-width="3"/><line x1="110" y1="145" x2="110" y2="410" stroke="#576c84" stroke-width="3"/><rect x="160" y="371" width="155" height="39" fill="#bddae8" stroke="#687e93" stroke-width="1"/><text x="237.5" y="361" font-size="22" font-weight="bold" text-anchor="middle">6</text><text x="237.5" y="443" font-size="22" text-anchor="middle">[10;15)</text><rect x="344" y="280" width="155" height="130" fill="#9fd1c0" stroke="#687e93" stroke-width="1"/><text x="421.5" y="270" font-size="22" font-weight="bold" text-anchor="middle">20</text><text x="421.5" y="443" font-size="22" text-anchor="middle">[15;20)</text><rect x="528" y="202" width="155" height="208" fill="#e9ca9e" stroke="#687e93" stroke-width="1"/><text x="605.5" y="192" font-size="22" font-weight="bold" text-anchor="middle">32</text><text x="605.5" y="443" font-size="22" text-anchor="middle">[20;25)</text><rect x="712" y="150" width="155" height="260" fill="#bec3ee" stroke="#687e93" stroke-width="1"/><text x="789.5" y="140" font-size="22" font-weight="bold" text-anchor="middle">40</text><text x="789.5" y="443" font-size="22" text-anchor="middle">[25;30)</text><line x1="110" y1="345" x2="915" y2="345" stroke="#08785f" stroke-width="3" stroke-dasharray="10 6"/><text x="925" y="352" font-size="21" fill="#08785f">10 → Q₁</text><line x1="110" y1="215" x2="915" y2="215" stroke="#a04d24" stroke-width="3" stroke-dasharray="10 6"/><text x="925" y="222" font-size="21" fill="#a04d24">30 → Q₃</text><text x="36" y="487" font-size="18" fill="#40556b">Tìm lớp bằng cộng dồn; sau đó nội suy bên trong lớp, không đọc Q trực tiếp từ chiều cao cột.</text></g></svg>
```
