# Temp_ · Toán 11 Chương VIII B28–B30 · R04 full-chapter NotebookLM independent-review copy

ROLE: REVIEW_COPY_NOT_CANONICAL_LEARNER
PACKET_ID: G11-SGK-CHVIII-B28-B30-R04
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED_SOURCE_ONLY
SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_R04_CANONICAL_SOURCE_BUNDLE_LOCK_20261122.md
SOURCE_BLOB: bd887525eed15630916c877516b8d5fb751c91e4
Q18_RECEIPT_PATH: prototypes/thpt/review-packets/G11_CHVIII_B28_B30_R04_AUTHOR_SELF_Q18_RECEIPT_20261122.md
Q18_RECEIPT_BLOB: c5da4f4cb695509715071a84d86c81cfff1e8d95
WRITTEN_W03_SHARED_LIBRARY_BLOB: e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26
PRIVATE_RD1: NOT_INCLUDED
INDEPENDENT_NOTEBOOKLM_R04_VERDICT: NOT_RECEIVED
NO_DEPLOY: TRUE

## Prompt review (4 câu)

1. Hãy phản biện độc lập học liệu **DELTA_C** Toán 11 SGK KNTT Tập hai Chương VIII B28–B30 và câu Written W03 đổi cách diễn đạt, dùng **đúng năm Permanent Sources THPT v2.1** (không chọn thêm bộ v2.0) cùng SGK/SBT S1 bản gốc, bám một chuẩn `SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18`, đối chiếu từng mục SGK theo **số trang in** và mỗi outcome.
2. Kiểm độc lập tất cả 19 `FirstTry`, 20 worked examples, 39 câu Core/Practice ngân hàng gốc bất biến, 8 Written gốc, đặc biệt giả thiết đồng khả năng, hợp/giao/bù, xung khắc khác độc lập, đếm tổ hợp, giới hạn phần giao, sơ đồ cây nhân độc lập, bảng hai chiều không suy nhân quả, và **W03 bốn miền có tổng đúng 36**; ghi ID và phản ví dụ nếu phát hiện sai.
3. Trả Academic verdict và PED verdict theo từng bài/outcome/item kèm `SOURCE_RECEIPT` đối chiếu đúng ba Git learner blob SHA, riêng Written W03 shared-library blob và current author Q18 receipt blob dưới đây; nêu P0/P1/P2, nguyên nhân, `MINIMAL_DELTA` và đường khắc phục, tuyệt đối không tự coi phản biện nguồn R00 cũ là PASS của R04 mới.
4. Giữ 20 RD1 chính thức kín ngoài nguồn công khai; xem 20 câu cuối chương đã lộ chỉ là `CLIENT_SELF_CHECK_NO_MASTERY` không phải `SGK_CHAPTER_READINESS`, không đưa kết quả tự kiểm thành quyền merge/deploy, không tạo chuẩn Q mới hoặc sao chép bản Temp thành học liệu canonical.

## Source SHA EXACT_R04

| Lesson/affected canonical | Original Git path | Current exact blob |
|---|---|---|
| B28 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md` | `34cd865b3ac165b6510911c5a9019101b3473f56` |
| B29 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md` | `7f9e8b4725a2b1595c73f14faa6e4f399b90b63d` |
| B30 | `docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md` | `3f9225b353a7100dd42c96b4d5b69bca0977648c` |
| Shared original Written W03 only | `docs/thpt-preview/thu-vien/tu-luan-g11-chuong-viii.md` | `e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26` |
| Author Q18 self-receipt | `prototypes/thpt/review-packets/G11_CHVIII_B28_B30_R04_AUTHOR_SELF_Q18_RECEIPT_20261122.md` | `c5da4f4cb695509715071a84d86c81cfff1e8d95` |

Đây là bản sao review phục vụ phản biện phần DELTA_C, không phải nguồn học sinh thứ hai. Các câu/đáp án/solution gốc vẫn thuộc đúng ngân hàng canonical trong học liệu hiện hành và hồ sơ source SHA; nội dung RD1 độc lập giữ ở chỗ chủ dự án nắm giữ, không có trong bản này.

---

## REVIEW SOURCE B28 BEGIN · 34cd865b3ac165b6510911c5a9019101b3473f56

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
    
        **Vì sao dễ sai:** Đếm các cặp là đổi phép thử một lần rút thành hai lần rút; không gian mẫu phải mô tả đúng một kết quả của thí nghiệm.

        **Tự sửa:** Không thêm các cặp vì chỉ chọn một thẻ. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C01">Luyện lại câu B28-C01</a>

    ### 1.2. Mô tả biến cố
    
    Từ mô tả bằng lời, giữ lại đúng các kết quả thỏa điều kiện; nếu chọn đều mới đếm số kết quả chia tổng.
    
    **Vận dụng.** Chọn đều thẻ từ 1 đến 8. A là biến cố chọn số nguyên tố. Viết A và tính P(A).
    
    <span data-ped-first-try="2" data-outcome-id="G11-B28-EVENT_MODEL" data-thpt-first-try-id="THPT-G11-B28-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** A={2,3,5,7}; P(A)=4/8=1/2.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Tập biến cố phải lọc kết quả đúng điều kiện; quy tắc chia số lượng chỉ hợp lệ khi các kết quả đồng khả năng.

        **Tự sửa:** Số 1 không nguyên tố; kiểm điều kiện đồng khả năng. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C02">Luyện lại câu B28-C02</a>

    ### 1.3. Hoặc: kể cả hai
    
    Một kết quả thỏa ít nhất một điều kiện thì thuộc hợp, kể cả kết quả thỏa cả hai; không viết lặp.
    
    **Vận dụng.** Cho A={1,3,7}, B={2,3,8}. Tìm hợp.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B28-UNION" data-thpt-first-try-id="THPT-G11-B28-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** A∪B={1,2,3,7,8}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Trong xác suất, 'A hoặc B' là hoặc bao hàm; vùng chung nằm trong hợp đúng một lần.

        **Tự sửa:** Nếu bỏ 3, em đang hiểu hoặc theo nghĩa loại trừ. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C03">Luyện lại câu B28-C03</a>

    ### 1.4. Và: đồng thời
    
    Chỉ giữ kết quả trong cả hai tập; khi một điều kiện không thể cùng xảy ra với điều kiện kia thì giao rỗng.
    
    **Vận dụng.** Chọn một số từ 1 đến 12. A là bội của 2, B là bội của 3. Tìm AB.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B28-INTERSECTION" data-thpt-first-try-id="THPT-G11-B28-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** AB=A∩B={6,12}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Giao đòi đồng thời cả hai điều kiện; bội chung của 2 và 3 phải là bội của 6.

        **Tự sửa:** Kiểm từng số phải chia hết cho cả 2 và 3. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C04">Luyện lại câu B28-C04</a>

    ### 1.5. Chỉ một và không có cái nào
    
    Chia Ω thành bốn miền: chỉ A, chỉ B, cả hai, ngoài cả hai. Hai cách nói 'chỉ một' và 'không cái nào' khác nhau.
    
    **Vận dụng.** Ω={1,2,3,4,5,6}, A={1,2,3}, B={3,4}. Liệt kê các kết quả chỉ thuộc một biến cố và không thuộc biến cố nào.
    
    <span data-ped-first-try="5" data-outcome-id="G11-B28-COMPLEMENT" data-thpt-first-try-id="THPT-G11-B28-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Chỉ một: {1,2,4}; không thuộc biến cố nào: {5,6}.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Biến cố đối ̅A là mọi kết quả không thuộc A; 'chỉ một' là hai miền riêng, khác với ngoài cả hai.

        **Tự sửa:** Tránh hiểu 'không có cả hai' mơ hồ; viết rõ không A và không B. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C05">Luyện lại câu B28-C05</a>

    ### 1.6. Xung khắc không phải độc lập
    
    Xung khắc nói về khả năng cùng xảy ra. Độc lập nói về việc thông tin xảy ra của biến cố này có thay đổi cơ hội biến cố kia hay không.
    
    **Vận dụng.** Gieo một xúc xắc đều. A là ra 1 hoặc 2, B là ra 5. Xung khắc không? Độc lập không?
    
    <span data-ped-first-try="6" data-outcome-id="G11-B28-DISJOINT" data-thpt-first-try-id="THPT-G11-B28-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Có xung khắc vì giao rỗng. Không độc lập vì khi A xảy ra, B chắc chắn không xảy ra, khác cơ hội trước đó 1/6.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Xung khắc là giao rỗng; khi cả hai xác suất dương thì tích riêng dương, nên không thể độc lập.

        **Tự sửa:** Hai biến cố xung khắc có xác suất dương không độc lập. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C06">Luyện lại câu B28-C06</a>

    ### 1.7. Hoàn lại hay không hoàn lại
    
    Hộp có 2 bi đỏ, 3 bi xanh, mỗi bi được chọn đều. Nếu trả bi đầu lại, cơ hội đỏ ở lượt sau vẫn 2/5. Nếu không trả, thành phần hộp phụ thuộc màu lượt đầu.
    
    **Vận dụng.** Cùng hộp trên, không hoàn lại: so sánh cơ hội đỏ lượt hai khi lượt đầu đỏ và khi lượt đầu xanh.
    
    <span data-ped-first-try="7" data-outcome-id="G11-B28-INDEPENDENCE" data-thpt-first-try-id="THPT-G11-B28-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Nếu đầu đỏ: 1/4; nếu đầu xanh: 2/4. Khác nhau nên hai biến cố đỏ ở từng lượt không độc lập.
    
    <span data-thpt-help-id="HELP-G11-B28-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Không hoàn lại làm thành phần hộp thay đổi theo lượt trước, nên không dùng cơ hội cố định ở lượt sau.

        **Tự sửa:** Phải xét lại số bi còn trong hộp, không giữ mẫu số 5. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C07">Luyện lại câu B28-C07</a>

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
    
        Hợp vẫn gồm miền giao; xem mục 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C03">Luyện lại câu B28-C03</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B28-02" hidden></span>
    
    ??? tip "4.2. Nhầm giao với hợp"
    
        Giao đòi thỏa cả hai điều kiện; xem mục 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-C04">Luyện lại câu B28-C04</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B28-03" hidden></span>
    
    ??? tip "4.3. Nhầm xung khắc với độc lập"
    
        Giao rỗng và xác suất hai biến cố dương làm thay đổi cơ hội; xem mục 2.3. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B28-P04">Luyện lại câu B28-P04</a>

    [Core và Luyện tập Bài 28](luyen-tap.md) · <a href="../../../thu-vien/tu-luan-g11-chuong-viii.md">Tự luận Chương VIII</a> · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 28, trang in 66–71.*

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 28 (trang in 66–71); đối chiếu SBT cùng bộ (tài liệu tham khảo luyện tập).</p>

## REVIEW SOURCE B28 END

---

## REVIEW SOURCE B29 BEGIN · 7f9e8b4725a2b1595c73f14faa6e4f399b90b63d

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
    
        **Vì sao dễ sai:** Cộng hai tổng nhóm trực tiếp đếm phần giao hai lần; phải trừ đúng một lần.

        **Tự sửa:** Phải trừ 4, không trừ hai lần. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C01">Luyện lại câu B29-C01</a>

    ### 1.2. Cộng khi không giao
    
    Chỉ khi hai sự kiện không thể cùng xảy ra mới cộng trực tiếp.
    
    **Vận dụng.** Gieo xúc xắc đều. A ra 1 hoặc 2, B ra 6. Tính xác suất A hoặc B.
    
    <span data-ped-first-try="2" data-outcome-id="G11-B29-ADDITION_DISJOINT" data-thpt-first-try-id="THPT-G11-B29-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 3/6=1/2, vì giao rỗng.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Cộng trực tiếp chỉ khi giao rỗng; một kết quả trong giao không thể được đếm hai lần.

        **Tự sửa:** Kiểm tra giao trước khi cộng. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C02">Luyện lại câu B29-C02</a>

    ### 1.3. Không biến cố nào
    
    Biến cố không A và không B là đối của A∪B, khác đối của giao.
    
    **Vận dụng.** Biết P(A∪B)=0,72. Tính cơ hội không A và không B.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B29-COMPLEMENT_PROB" data-thpt-first-try-id="THPT-G11-B29-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−0,72=0,28.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Không xảy ra cả A lẫn B là biến cố đối của hợp, không phải đối của giao.

        **Tự sửa:** Không dùng 1−P(AB) nếu muốn cả hai đều không xảy ra. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C03">Luyện lại câu B29-C03</a>

    ### 1.4. Đọc bốn miền
    
    Tổng của bốn miền chính là kích thước mẫu.
    
    **Vận dụng.** Trong 50 người có 20 chọn A, 18 chọn B, 7 chọn cả hai. Tìm bốn miền.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B29-VENN_COUNTS" data-thpt-first-try-id="THPT-G11-B29-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 13 chỉ A, 11 chỉ B, 7 cả hai, 19 không cái nào.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Bốn miền không giao nhau phải khớp tổng mẫu; nếu thiếu miền ngoài cả hai, bảng chưa đủ.

        **Tự sửa:** Kiểm 13+11+7+19=50. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C04">Luyện lại câu B29-C04</a>

    ### 1.5. Kiểm dữ kiện
    
    Giao không lớn hơn từng biến cố, hợp không lớn hơn 1.
    
    **Vận dụng.** P(A)=0,65, P(B)=0,6, P(AB)=0,1. Dữ kiện có thể đúng không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B29-PROBABILITY_BOUNDS" data-thpt-first-try-id="THPT-G11-B29-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không: hợp=1,15>1. Giao phải ít nhất 0,25.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độ lớn phần giao còn chịu giới hạn dưới do P(A∪B) ≤ 1, chứ không chỉ bị chặn trên.

        **Tự sửa:** Kiểm cả giới hạn dưới của giao, không chỉ giới hạn trên. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C05">Luyện lại câu B29-C05</a>

    ### 1.6. Đếm bằng tổ hợp
    
    Chọn hai vật khác nhau không kể thứ tự, đều các cặp: mẫu có C(n,2) cặp. Đếm theo nhóm màu là các biến cố xung khắc.
    
    **Vận dụng.** Hộp có 5 bi đỏ, 4 xanh, lấy đều 2 bi không hoàn lại. Tính xác suất hai bi cùng màu.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B29-REAL_APPLICATION" data-thpt-first-try-id="THPT-G11-B29-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** C(5,2)+C(4,2)=10+6=16 cặp; C(9,2)=36; P=4/9.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đơn vị cơ bản là một cặp thẻ không thứ tự; đổi sang đếm từng thẻ riêng làm sai mẫu số.

        **Tự sửa:** Không lấy tổng 9 làm mẫu số; đơn vị kết quả là cặp. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C06">Luyện lại câu B29-C06</a>

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
    
        Đếm từng miền riêng, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C01">Luyện lại câu B29-C01</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B29-02" hidden></span>
    
    ??? tip "4.2. Chấp nhận xác suất lớn hơn 1"
    
        So giới hạn giao và hợp, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C05">Luyện lại câu B29-C05</a>

    [Core và Luyện tập Bài 29](luyen-tap.md) · <a href="../../../thu-vien/tu-luan-g11-chuong-viii.md">Tự luận Chương VIII</a> · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 29, trang in 72–75.*

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 29 (trang in 72–75); đối chiếu SBT cùng bộ (tài liệu tham khảo luyện tập).</p>

## REVIEW SOURCE B29 END

---

## REVIEW SOURCE B30 BEGIN · 3f9225b353a7100dd42c96b4d5b69bca0977648c

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
    
        **Vì sao dễ sai:** Quy tắc nhân xác suất biên chỉ đúng khi đã kiểm/được cho tính độc lập; chữ 'và' không tự cho phép nhân.

        **Tự sửa:** Chỉ nhân vì đã nêu độc lập. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C01">Luyện lại câu B30-C01</a>

    ### 1.2. Kiểm tra bằng số liệu
    
    So xác suất giao thực tế với tích biên. Nếu khác nhau, không độc lập.
    
    **Vận dụng.** P(A)=0,4, P(B)=0,5, P(AB)=0,25. Độc lập không?
    
    <span data-ped-first-try="2" data-outcome-id="G11-B30-VERIFY_INDEPENDENCE" data-thpt-first-try-id="THPT-G11-B30-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; tích=0,2 khác 0,25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độc lập là điều kiện định lượng P(A∩B)=P(A)P(B), không suy từ tên hoặc bối cảnh nghe tách biệt.

        **Tự sửa:** Không suy luận từ tên A,B. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C02">Luyện lại câu B30-C02</a>

    ### 1.3. Cây và các lần thử
    
    Trong cây hai phép thử độc lập, các nhánh bước hai có cùng xác suất dù bước một thế nào.
    
    **Vận dụng.** Hai lần độc lập, mỗi lần thành công 2/3. Tính xác suất cả hai thành công và cả hai thất bại.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B30-REPEATED_TRIALS" data-thpt-first-try-id="THPT-G11-B30-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 4/9 và 1/9; hai trường hợp còn lại mỗi 2/9.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Mỗi đường đi trên cây nhân xác suất nhánh; các lá rời nhau phải cộng thành toàn bộ 1.

        **Tự sửa:** Bốn lá phải cộng bằng 1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C03">Luyện lại câu B30-C03</a>

    ### 1.4. Dùng bù
    
    Ít nhất một thành công gồm cả hai thành công và chỉ một. Bù là cả hai thất bại.
    
    **Vận dụng.** Hai thiết bị độc lập, xác suất đạt 3/5 và 4/5. Tính ít nhất một đạt.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B30-AT_LEAST_ONE" data-thpt-first-try-id="THPT-G11-B30-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−(2/5)(1/5)=23/25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Ít nhất một là biến cố đối của cả hai đều thất bại; không đồng nhất với cả hai cùng thành công.

        **Tự sửa:** Không nhầm với đúng một hay cả hai. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C04">Luyện lại câu B30-C04</a>

    ### 1.5. Độc lập và xung khắc
    
    Nếu hai biến cố dương mà xung khắc, giao bằng 0 nhưng tích dương.
    
    **Vận dụng.** P(A)=1/4, P(B)=1/3, A,B xung khắc. Chúng độc lập không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B30-INDEPENDENT_VS_DISJOINT" data-thpt-first-try-id="THPT-G11-B30-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; P(AB)=0 ≠ 1/12.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Khi xung khắc mà từng xác suất dương, tích xác suất riêng dương nhưng giao bằng 0; ngoại lệ 0 phải kiểm riêng.

        **Tự sửa:** Trường hợp xác suất 0 cần xét riêng bằng đẳng thức. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C05">Luyện lại câu B30-C05</a>

    ### 1.6. Bảng số liệu hai chiều
    
    Chọn đều một người từ bảng. Tính ba tỉ lệ có cùng mẫu số; kiểm giao với tích biên. Không suy ra quan hệ nhân quả.
    
    **Vận dụng.** Trong 100 người, 30 chọn A, 40 chọn B, 12 chọn cả hai. Kiểm tra độc lập trong mô hình chọn người từ bảng.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B30-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B30-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** P(A)=0,3; P(B)=0,4; P(AB)=0,12=0,3·0,4; độc lập trong mô hình này.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Từ một bảng chọn đều người ta suy được xác suất của phân bố đang khảo sát, không suy quan hệ nhân quả hoặc đại diện dân số.

        **Tự sửa:** Không suy rộng ra toàn dân nếu mẫu không đại diện. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C06">Luyện lại câu B30-C06</a>

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
    
        Kiểm tiêu chí tích bằng giao hoặc giả thiết, xem 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C01">Luyện lại câu B30-C01</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-02" hidden></span>
    
    ??? tip "4.2. Lấy giao thay cho ít nhất một"
    
        Dùng bù cả hai thất bại, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C04">Luyện lại câu B30-C04</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-03" hidden></span>
    
    ??? tip "4.3. Suy độc lập từ tên biến cố"
    
        Tính ba xác suất rồi so tích, xem 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-P02">Luyện lại câu B30-P02</a>

    [Core và Luyện tập Bài 30](luyen-tap.md) · <a href="../../../thu-vien/tu-luan-g11-chuong-viii.md">Tự luận Chương VIII</a> · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 30, trang in 76–78.*

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 30 (trang in 76–78); đối chiếu SBT cùng bộ (tài liệu tham khảo luyện tập).</p>

## REVIEW SOURCE B30 END

---

## REVIEW W03 ORIGINAL_SHARED_WRITTEN BEGIN · e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26

<section class="thpt-r4-written-card" data-thpt-filter-item data-thpt-kind="normal" data-thpt-written-canonical="THPT-G11-CHVIII-B29-W03" data-thpt-exposure-role="SGK_WRITTEN" id="thpt-g11-chviii-b29-w03"><p class="thpt-r4-eyebrow">BÀI 29 · WRITTEN</p><h2>THPT-G11-CHVIII-B29-W03</h2><p>Trong 36 người, có 17 người chọn kênh C, 14 người chọn D, 6 người chọn cả hai. Chọn đều một người. Tính riêng xác suất của bốn trường hợp: chỉ chọn C, chỉ chọn D, chọn cả C và D, không chọn C cũng không chọn D.</p><details><summary>Em đã làm? Mở lời giải và rubric /4</summary><p><strong>Lời giải:</strong> Chỉ C=11/36; chỉ D=8/36; cả hai=6/36; ngoài cả hai=(36−(17+14−6))/36=11/36; tổng=1.</p><ol><li>Phân tách miền chỉ C =11 — 1 điểm.</li><li>Phân tách miền chỉ D =8 và giao =6 — 1 điểm.</li><li>Tính ngoài cả hai =11 — 1 điểm.</li><li>Chia đúng cho 36 và kiểm bốn xác suất cộng bằng 1 — 1 điểm.</li></ol><p>Chỉ tự đối chiếu; không chấm tự luận bằng máy hoặc ghi Mastery.</p></details></section>

## REVIEW W03 ORIGINAL_SHARED_WRITTEN END

---

## AUTHOR Q18 RECEIPT BEGIN · c5da4f4cb695509715071a84d86c81cfff1e8d95

# G11 SGK Chapter VIII B28–B30 · R04 current-source Q18 self-academic/PED author receipt

PACKET_ID: G11-SGK-CHVIII-B28-B30-R04
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
AUTHOR_SELF_QA_RECEIPT: SIGNED_ON_CURRENT_G11_CHVIII_B28_B30_R04_LEARNER_AND_WRITTEN_SOURCE_SHA
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_R04_CANONICAL_SOURCE_BUNDLE_LOCK_20261122.md
SOURCE_BLOB: bd887525eed15630916c877516b8d5fb751c91e4
S1_RECEIPT: HISTORICAL_OWNER_ORIGINAL_TOAN_11_T2_SGK_SBT_SHA256_PRINTED_PAGES_DIRECT_PDF_IMAGES_NO_FRESH_FULL_SCAN
OUTCOME_AUDIT: 20_EXISTING_RD0_OUTCOMES_19_LESSON_PLUS_1_INTEGRATED_AND_66_UNIQUE_PUBLIC_TEACHING_IDS
MATH_VERIFICATION: SOURCE_B28_B29_B30_SET_INTERSECTION_UNION_PROBABILITY_BOUNDS_INCLUSION_EXCLUSION_INDEPENDENCE_BRANCH_TREE_W03_THIRTY_SIX_PERSONS_ARITHMETIC_VERIFIED
PED_VERIFICATION: THREE_ORDERED_GOLDEN_LEARNERS_19_HIDDEN_FIRSTTRY_19_CAUSE_SPECIFIC_D6_EIGHT_OLD_HELP_THREE_ORIGINAL_SVG
CANONICAL_Q15: 66_UNIQUE_39_ORIGINAL_CP_8_ORIGINAL_WRITTEN_19_KNOWLEDGE_TRY_ONE_W03_STEM_CLARIFIED_SAME_KEY_RUBRIC
ASSESSMENT_Q16: 20_PRIVATE_RD1_OWNER_HELD_20_PUBLIC_END_REPLAY_CLIENT_SELF_CHECK_NO_MASTERY
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
INDEPENDENT_NOTEBOOKLM_NEW_R04: NOT_CLAIMED
HISTORICAL_R00_INDEPENDENT_SOURCE_BLOB: fde4f8be91b5884b4559fef59fde46cf826c2bc9
HISTORICAL_R00_REVIEW_BLOB: d7477d24e8513e8e2e60a1f583d4b52e6c29bfc9
P0: 0
P1: 0
P2: 0
PRIVATE_RD1_COUNT: 20
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO

## Exact current canonical sources and S1 receipt

One current source Git blob `bd887525eed15630916c877516b8d5fb751c91e4` inventories 11 original repository paths: three original Golden learner lesson sources B28 `34cd865b3ac165b6510911c5a9019101b3473f56`, B29 `7f9e8b4725a2b1595c73f14faa6e4f399b90b63d`, B30 `3f9225b353a7100dd42c96b4d5b69bca0977648c`, original shared Core/Practice JS `b08cfc5dfb8404820b5827d6dc7e2b173d6e23d3`, and original Written/Anchor library **current W03 clarified stem** `e3d2bb89c88cb0a0a0932f42a32db8e9c8a7ab26`; chapter navigation/practice, end public selfcheck and three original SVG also SHA-locked. No second active learner, original question bank or private RD1 published. Historical original SGK/SBT source PDF page-image scan author receipt `prototypes/thpt/review-packets/G11_T2_OWNER_DRIVE_S1_PDF_VISUAL_SHA_RECEIPT_20261102.md` Git blob `c63ca380fe0416b4ed4214f5192197c7e95d20a6`: SGK original 114 PDF pages SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`, B28 printed66–71, B29 72–75, B30 76–78, end79–80; SBT original 126 pages SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`, B28 44–46 B29 47–48 B30 49–50 end51–53 answers103–110. Previous independent R00 Academic/PED only attest original `fde4f8...` source and historical five v2.0 permanent sources; does not independently sign this Delta-C. Current new original publisher book page-image full scan was **not performed in this turn** and should not be described as newly verified.

## Actual author math source spot-check and outcome reasoning

**B28 seven outcomes.** A probability experiment uses exactly one result per sample point and only divides counts by total if results are equiprobable; primes 1–8 exactly {2,3,5,7}; union is inclusive: {1,3,7}∪{2,3,8}={1,2,3,7,8}; intersection of multiples of2 and3 between1–12={6,12}. Complement, exclusive exactly-one and neither partition Ω disjoint: Ω1–6, A{1,2,3}, B{3,4}⇒just one {1,2,4}, neither {5,6}; P>0 disjoint A{1,2} vs B{5} from fair die cannot be independent. Without replacement 2 red 3 blue: P(red second | first red)=1/4, P(red second | first blue)=2/4, so not independent. One worked 24-person survey 8 swimming 10 cycling 3 both⇒5 only swimming,7 only cycling,9 neither, sum24; one worked 4red2blue drawing second blue with replacement 2/6 both first colors, without replacement 2/5 or1/5. Each condition is source-owned 7 FirstTry/7 local D6, six current worked.

**B29 six outcomes.** Addition for overlapping A,B from three disjoint Venn regions; data 13,11,4 joint among30⇒P(union)=20/30=2/3, not 24/30. Fair die 1,2 vs6 disjoint⇒P=3/6=1/2. Complement of union given 0.72 is 0.28. In 50 persons |A|=20,|B|=18,intersection7⇒onlyA13, onlyB11, both7, neither19; sum50. Feasibility if P(A)=.65,P(B)=.60,intersection=.10 would yield union1.15>1, so lower intersection bound .25. Unordered pair sampling from 5 red4 blue uses choose9,2=36, same-color choose5,2+choose4,2=16 ⇒P=4/9, not 16/9. Worked examples include 60-survey union41/60, overlap 0.55+0.45−0.75=0.25; disallowed 0.8+0.7−0.4=1.1, and two-number sampling cards 1–7 pair union (6+6−1)/21=11/21. All current six FirstTry hidden/local D6, seven worked.

**B30 six outcomes and original integrated practice item.** Independent machine chances5/6 and3/5⇒both1/2; data .4,.5,intersection .25 imply dependent because product .2. Twice independent p=2/3 ⇒both success4/9, both failure1/9, two one-success branches each2/9 sum1. Two independent devices p=3/5,4/5 ⇒P(at least one)=1−(2/5)(1/5)=23/25. Positive disjoint P(A)=1/4 P(B)=1/3 => joint0 vs product1/12, dependent; zero probability exception explained. Among100 with A30 B40 both12 ⇒ .3*.4=.12 so independent **for the stated sample model only**, no causation extrapolation. Seven worked include 200 respondent 2×2 contingency table (80 bus/120 nonbus, 80 umbrella, intersection24) ⇒ P(A)=.4,P(B)=.4, P(AB)=.12≠.16, dependence within empirical model, no causal inference. Product of three mutually independent events correctly requires joint, not only pairwise independence. Source Goldens use 19 distinct per-lesson FirstTry and one original integrated Core/Practice ID, not 20 new answers.

**Original Written W03 current DELTA_C:** In 36 uniformly sampled persons, chosen C=17,D=14,both6; the **same original `THPT-G11-CHVIII-B29-W03`** stem now explicitly asks four disjoint categories only C, only D, both and neither, eliminating ambiguity of 'not both'. Actual unchanged solution/rubric yields 11/36,8/36,6/36,11/36; sum1, same canonical ID, same /4 rubric, no extra public Written version. Source writer's updated stem is author-self reviewed; a separate independent new NotebookLM result is not asserted.

**Current direct source checks:** exactly three four-tab Golden student sources; 19 source-registered unique Knowledge FirstTry matching 19/19 lesson outcomes, 19 correctly indented voluntary hidden comparisons, 19 immediate differentiated D6 with `Vì sao dễ sai` cause and linked original Core reattempt, eight original general HELP, total27; 20 distinct fully labeled worked examples 6/7/7, original three SVG and reading prompts, three original printed SGK footers. Thirty Markdown relative links normalized to equivalent semantic HTML links preserving label/href (11+9+10). All inline/markup display MathJax delimiter counts balanced. No new raw unindented source answers leaked; no fictional Knowledge 2.x references. Earlier Draft PR candidate 54 structural &39 scenario tests apply to its older learner SHA, not re-certified as fresh identical tests against current final SHA. RELEASE browser AP/R and physical Safari/device not executed.

## ITEM_OUTCOME_ROLE_MATRIX — 66 unique canonical student learning questions

47 original public core/canonical IDs (39 C/P plus 8 Written/Anchor) mapped to 20 registered outcomes, plus 19 new Knowledge source-owned `THPT-G11-Bxx-TRYnn` questions with own item IDs and primary outcome links. Exactly **66 distinct education item IDs**, no dual question stems/keys. 20 worked example IDs are instructional example annotations, not extra original practice or exam records. One original integrated outcome `G11-CHVIII-INTEGRATED` maps to unchanged `THPT-G11-CHVIII-CHVIII-P01` and original Written chapter Anchor, not a new cloned exam item.

| ITEM_ID | OUTCOME_ID | PLACEMENT | ROLE |
|---|---|---|---|
| THPT-G11-CHVIII-B28-C01 | G11-B28-SAMPLE_SPACE | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C02 | G11-B28-EVENT_MODEL | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C03 | G11-B28-UNION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C04 | G11-B28-INTERSECTION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C05 | G11-B28-COMPLEMENT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C06 | G11-B28-DISJOINT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-C07 | G11-B28-INDEPENDENCE | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B28-P01 | G11-B28-UNION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-P02 | G11-B28-INTERSECTION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-P03 | G11-B28-EVENT_MODEL | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-P04 | G11-B28-DISJOINT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-P05 | G11-B28-INDEPENDENCE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-P06 | G11-B28-COMPLEMENT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-C01 | G11-B29-ADDITION_OVERLAP | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-C02 | G11-B29-ADDITION_DISJOINT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-C03 | G11-B29-COMPLEMENT_PROB | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-C04 | G11-B29-VENN_COUNTS | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-C05 | G11-B29-PROBABILITY_BOUNDS | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-C06 | G11-B29-REAL_APPLICATION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B29-P01 | G11-B29-ADDITION_OVERLAP | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-P02 | G11-B29-ADDITION_DISJOINT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-P03 | G11-B29-COMPLEMENT_PROB | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-P04 | G11-B29-VENN_COUNTS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-P05 | G11-B29-PROBABILITY_BOUNDS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B29-P06 | G11-B29-REAL_APPLICATION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-C01 | G11-B30-MULTIPLY_INDEPENDENT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-C02 | G11-B30-VERIFY_INDEPENDENCE | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-C03 | G11-B30-REPEATED_TRIALS | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-C04 | G11-B30-AT_LEAST_ONE | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-C05 | G11-B30-INDEPENDENT_VS_DISJOINT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-C06 | G11-B30-REAL_CONTEXT | SGK_CORE | SGK_CORE |
| THPT-G11-CHVIII-B30-P01 | G11-B30-MULTIPLY_INDEPENDENT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P02 | G11-B30-VERIFY_INDEPENDENCE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P03 | G11-B30-REPEATED_TRIALS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P04 | G11-B30-AT_LEAST_ONE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P05 | G11-B30-INDEPENDENT_VS_DISJOINT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P06 | G11-B30-REAL_CONTEXT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B30-P07 | G11-B30-AT_LEAST_ONE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-CHVIII-P01 | G11-CHVIII-INTEGRATED | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVIII-B28-W01 | G11-B28-UNION | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVIII-B28-W02-ANCHOR | G11-B28-INDEPENDENCE | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVIII-B29-W01 | G11-B29-ADDITION_OVERLAP | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVIII-B29-W02-ANCHOR | G11-B29-PROBABILITY_BOUNDS | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVIII-B29-W03 | G11-B29-REAL_APPLICATION | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVIII-B30-W01 | G11-B30-MULTIPLY_INDEPENDENT | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVIII-B30-W02-ANCHOR | G11-B30-AT_LEAST_ONE | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVIII-CHVIII-W01-ANCHOR | G11-CHVIII-INTEGRATED | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-B28-TRY01 | G11-B28-SAMPLE_SPACE | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY02 | G11-B28-EVENT_MODEL | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY03 | G11-B28-UNION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY04 | G11-B28-INTERSECTION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY05 | G11-B28-COMPLEMENT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY06 | G11-B28-DISJOINT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B28-TRY07 | G11-B28-INDEPENDENCE | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY01 | G11-B29-ADDITION_OVERLAP | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY02 | G11-B29-ADDITION_DISJOINT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY03 | G11-B29-COMPLEMENT_PROB | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY04 | G11-B29-VENN_COUNTS | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY05 | G11-B29-PROBABILITY_BOUNDS | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B29-TRY06 | G11-B29-REAL_APPLICATION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY01 | G11-B30-MULTIPLY_INDEPENDENT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY02 | G11-B30-VERIFY_INDEPENDENCE | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY03 | G11-B30-REPEATED_TRIALS | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY04 | G11-B30-AT_LEAST_ONE | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY05 | G11-B30-INDEPENDENT_VS_DISJOINT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B30-TRY06 | G11-B30-REAL_CONTEXT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |

## QUALITY_Q01_Q18_EVIDENCE

Only one normative `SLM-THPT-QUALITY-ONE v3.2.0` at `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`. The 18 criteria Q01–Q18 use existing D1–D6/PED1–PED6/A1–A7 as *evidence*, not parallel standards. This is a **self-signed** SOURCE author academic/PED audit, not new reviewer/RELEASE verification.

| Q ID | CURRENT R04 author academic/PED verdict | Concrete evidence or limitation |
|---|---|---|
| Q01 | AUTHOR_SELF_VERIFIED | Exact KNTT 11 T2 historical owner SGK/SBT actual scanned printed pages & SHA. B28 66–71 B29 72–75 B30 76–78, SBT B28 44–46 B29 47–48 B30 49–50, answers 103–110. No new full PDF scan in this revision |
| Q02 | AUTHOR_SELF_VERIFIED | 20 original outcomes: B28 seven, B29 six, B30 six, one integrated; each lesson outcome has one new unscored FirstTry; original integrated skill mapped to original chapter P01 and W01-ANCHOR |
| Q03 | AUTHOR_SELF_VERIFIED | Original B28 event sets, Ω, union/intersection/complement, mutually exclusive vs independent; B29 addition/complement/count Venn/probability feasibility; B30 independence/product, repeated trials, complement and two-way tables |
| Q04 | AUTHOR_SELF_VERIFIED | 20 distinct method-reasoned worked examples (6+7+7) in actual three student Golden tab 3 sources, each shows problem, analysis, full calculation/proof and check |
| Q05 | AUTHOR_SELF_VERIFIED | 39 original public canonical Core/Practice records (19 Core,20 Practice), original Git blob b08cfc5dfb8404820b5827d6dc7e2b173d6e23d3 unchanged including keys/solutions/skills |
| Q06 | AUTHOR_SELF_VERIFIED | 8 original canonical Written/Anchor in the shared library; W03 ambiguity removed by specifying four disjoint requested cases with same W03 ID, mathematically same rubric and answer; other Written unchanged |
| Q07 | AUTHOR_SELF_VERIFIED | 3 original preserved SVG plots include four-area Venn, 40-student inclusion-exclusion Venn and two-branch independence tree, with learner reading instructions not a decorative only picture |
| Q08 | AUTHOR_SELF_VERIFIED | 19 new cause-specific local D6 reasons and reattempt links plus 8 old general misconception HELP =27 total. Each error diagnosis refers back to a real source Core item |
| Q09 | AUTHOR_SELF_VERIFIED | Real motivation through inclusive-or school survey, overlapping group counts, manufacturing/censor independent events and why branch multiplication needs model conditions |
| Q10 | AUTHOR_SELF_VERIFIED | Prerequisites set union/intersection/empty, sample space, equally likely outcomes, complement, combinatorics choosing unordered pairs and branches, studied before formulas |
| Q11 | AUTHOR_SELF_VERIFIED | Event set and disjoint cases explained before formal union/intersection or inclusion-exclusion; B30 conditional branch ratio motivates product only when independence |
| Q12 | AUTHOR_SELF_VERIFIED | Original D5 Venn/independence tree interpreted with four mutually exclusive regions, labels and exact branch multiplication; nonuniform SVG area explicitly not treated as probability |
| Q13 | AUTHOR_SELF_VERIFIED | Conditions for equiprobability, non-replacement dependence, independent vs disjoint with P>0, feasibility lower bound P(AB)≥max(0,P(A)+P(B)-1), pairwise vs joint independence and no causal inference |
| Q14 | AUTHOR_SELF_VERIFIED | 19 unscored per-outcome FirstTry preceding the Core, all 19 mathematical comparisons opt-in hidden and correctly indented plus 19 corresponding voluntary local Kiểm lỗi; no end-independent test leak |
| Q15 | AUTHOR_SELF_VERIFIED | One original source bank 39 C/P and one shared Written eight canonical IDs (W03 same ID, only clarified semantic stem); 19 separate unscored Knowledge TRY =>66 unique teaching item IDs with one outcome/role each |
| Q16 | AUTHOR_SELF_VERIFIED | 20 original owner-held private RD1 never imported, original 20 exposed chapter-end public replay is CLIENT_SELF_CHECK_NO_MASTERY, cannot grant SGK_CHAPTER_READINESS or Skill Mastery |
| Q17 | AUTHOR_SELF_VERIFIED | Complete independent SGK chapter path three Knowledge Golden lessons to original Core/Practice to Written to public chapter-end selfcheck; separate Topic path not substituted or Core duplicated |
| Q18 | AUTHOR_SELF_VERIFIED | One 11-component current source blob inventory, 3 full learner exact Git blobs, original bank/W03 canonical and current signed self Q18; historical independent R00 review source SHA preserved only for R00 |

## Protected RD1 and signed source scope

Original confidential 20 independent RD1 items held off public GitHub; this receipt contains only their count/assessment-mode/custody metadata, not the stems, keys, full solution or rubric. 20 exposed public chapter-end practice replay items remain `CLIENT_SELF_CHECK_NO_MASTERY`: public, thus not official `SGK_CHAPTER_READINESS`, and never generate Mastery. No Topic Core or Topic Readiness created, no changes to original 39 Core/Practice solutions, JS quiz runtime, Final Submit, Firebase, Auth, student records, or production release.

AUTHOR_SIGNOFF: Q01_Q18_A1_A7_AUTHOR_SELF_VERIFIED_CURRENT_SOURCE_bd887525eed15630916c877516b8d5fb751c91e4
P0_P1_AUTHORING: 0_0_IN_SCOPE
SOURCE_STATE: AUTHORING_PASS_ELIGIBLE_FOR_SINGLE_V2_READY_REGISTER
RELEASE_STATE: NOT_AUTHORIZED_OR_DEPLOYED

## AUTHOR Q18 RECEIPT END
