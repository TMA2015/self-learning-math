# Temp · TARGETED DELTA-C · G12 ChV B17-O06 · 22/11/2026

PACKET_ID: G12-SGK-CHV-B17-O06-TARGETED-DELTA-C-20261122
STATUS: CANDIDATE_ONLY / INDEPENDENT_REVIEW_NOT_RUN
MASTER: #987, Draft PR #1008 (unmerged)
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 (GitHub blob 488afe2908e0b471320e1d55f775391578d88bba)
PERMANENT_SOURCES: đúng 5 THPT v2.1, không thêm bản cũ hay nguồn thứ sáu
SGK: KNTT Toán 12 Tập hai, trang in 57–58, PDF1 59–60, ảnh gốc được đọc trực tiếp; SHA256 3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb
SBT: KNTT Tập hai SHA256 823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1; thiếu trang 25 ChV chưa giải quyết, không giả vờ full PASS
B17_LEARNER_BLOB: ce6a4ff6458ba1f2d929134935e494214e3b32d5
PUBLIC_BANK_BLOB: 622308c8f7293d576e8690db4741ddfe7ad882c8
Q18_RECEIPT_BLOB: 20ca30d14fac135ceba427372e282d68ec7483dc
RUNTIME_GUARD: BLOCKED / JS 96 item,24 help,24 END; candidate bank 100/25/25
Q16: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY; no private RD1, independent readiness, Firebase or release

## Prompt review độc lập (4 câu)
Hãy phản biện độc lập Delta-C cho outcome Toán 12 B17-O06 về vĩ độ, kinh độ và cung ngắn mặt cầu theo đúng năm Permanent Sources THPT v2.1 cùng SGK/SBT Kết nối tri thức gốc đã khóa. Đánh giá bốn câu canonical C06/P06/A06/W06 theo đúng Q01–Q18, đặc biệt tính đúng của hai dấu Bắc–Nam/Đông–Tây, tích vô hướng có dấu, góc tâm và đổi radian, độ sâu Tự luận /5 và đường D6 khắc phục. Trả SOURCE_RECEIPT với SHA, Academic/PED verdict theo item/outcome, P0/P1/P2 và MINIMAL_DELTA; không suy rộng PASS sang toàn chương hay READINESS. Phân biệt blocker academic còn lại với guard runtime 96/24/24 thuộc RELEASE, không tự cấp quyền phát hành.

## Phạm vi learner hiện hành — trích nguyên từ canonical B17

### Tự khám phá 1.6–1.7
    ### 1.6. Từ vĩ độ, kinh độ tới tọa độ
    
    Mô hình Trái Đất là mặt cầu đơn vị tâm O; mỗi đơn vị tương ứng 6371 km. Oz hướng Bắc, Ox qua giao xích đạo và kinh tuyến gốc, Oy hướng 90° Đông. Vĩ độ có dấu φ∈[−90°,90°] (Bắc dương), kinh độ λ∈[−180°,180°] (Đông dương). Hình chiếu lên Oxy dài cosφ, z=sinφ; tách hình chiếu theo λ cho $P=(\cos\varphi\cos\lambda,\cos\varphi\sin\lambda,\sin\varphi)$.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B17-GEO-R02.svg" alt="Cầu đơn vị với vĩ độ φ và kinh độ λ; hình chiếu H trên Oxy."/><figcaption>Độ cao z=sinφ, OH=cosφ; tách OH theo λ.</figcaption></figure>
    
    **Vận dụng.** Tìm tọa độ điểm 30° Nam, 60° Đông trên cầu đơn vị.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHV-B17-O06" data-thpt-first-try-id="THPT-G12-B17-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** φ=−30°, λ=60°. P=(√3/4,3/4,−1/2); tổng bình phương =3/16+9/16+1/4=1.
    
    <span data-thpt-help-id="HELP-G12-B17-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Nếu nhầm dấu, đọc lại quy ước Nam/Tây; ở cực kinh độ không xác định duy nhất. Ôn [Core tọa độ địa lí](../luyen-tap/#thpt-g12-b17-c06) và [Luyện tập khoảng cách mặt cầu](../luyen-tap/#thpt-g12-b17-p06), đều thuộc đúng outcome địa lí. Tự kiểm: điểm 0° vĩ độ, 90° Tây có tọa độ (0,−1,0); điểm cực Nam là (0,0,−1). Đối chiếu chuẩn 1 và tự làm lại.

    ### 1.7. Khoảng cách ngắn nhất trên bề mặt Trái Đất
    
    Hai bán kính OP,OQ tạo góc tâm θ∈[0,π]. Đường tròn lớn qua O,P,Q cho cung ngắn nhất trên cầu (đối cực có nhiều cung cùng độ dài). Trên cầu đơn vị, cosθ=OP·OQ; không lấy trị tuyệt đối như góc hai đường. Độ dài thực s=6371θ với θ radian, khác độ dài dây thẳng $2R\sin(\theta/2)$.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B17-ARC-R02.svg" alt="Mặt cắt qua O,P,Q: cung ngắn và dây PQ, góc tâm θ."/><figcaption>Cung có độ dài Rθ, dây là đoạn thẳng nối P,Q; θ có thể tù.</figcaption></figure>
    
    **Vận dụng.** P trên xích đạo kinh độ 0°, Q trên xích đạo kinh độ 120°Đ. Tìm khoảng cách mặt cầu.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHV-B17-O06" data-thpt-first-try-id="THPT-G12-B17-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** P=(1,0,0), Q=(−1/2,√3/2,0). Dot=−1/2, θ=120°=2π/3. $s=6371\cdot2\pi/3\approx13343{,}4$ km.
    
    <span data-thpt-help-id="HELP-G12-B17-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy |dot|, không lấy θ theo độ nhân 6371, không dùng khoảng cách dây cung. Ôn [Core địa lí](../luyen-tap/#thpt-g12-b17-c06) và [Luyện tập tính cung](../luyen-tap/#thpt-g12-b17-p06); nếu quên tích vô hướng, xem [Bài 16](../bai-16/). Tự kiểm mới: hai điểm xích đạo lệch 90° cho dot=0, θ=π/2, s=6371π/2 km; thử lại câu ban đầu khi đã tự giải được phép đổi độ–radian.



### Kiến thức SGK 2.2
    ### 2.2. Một số ứng dụng của phương trình mặt cầu trong thực tiễn
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Một số ứng dụng của phương trình mặt cầu trong thực tiễn.</strong><p>SGK mô hình hóa bề mặt Trái Đất bằng mặt cầu bán kính 6371 km. Trên cầu đơn vị, đặt \(P=(\cos\varphi_1\cos\lambda_1,\cos\varphi_1\sin\lambda_1,\sin\varphi_1)\), tương tự Q; φ có dấu Bắc/Nam, λ có dấu Đông/Tây. \(\theta=\arccos(P\cdot Q)\in[0,\pi]\) không lấy trị tuyệt đối. \(s=6371\theta\) km khi θ tính radian, hoặc \(s=6371\pi\theta^\circ/180\) khi θ tính độ. Với mô hình cầu, s là cung ngắn nhất, không phải chiều dài đường đi thực tế hay dây cung. Giữ đủ chữ số khi tính; diễn giải mô hình gần đúng. Với vùng phủ hình cầu, so khoảng cách tới tâm với R; tiếp xúc mặt phẳng khi d(I,P)=R&gt;0.</p></div>



### Ví dụ 3.6–3.7
    ### 3.6. Từ tọa độ địa lí đến vectơ đơn vị
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B17-R02-06"><p><strong>Đề bài:</strong> P ở 45° Bắc, 90° Tây. Tính tọa độ.</p><p><strong>Phân tích:</strong> φ=45°, λ=−90°.</p><p><strong>Lời giải:</strong> \(P=(0,-\sqrt2/2,\sqrt2/2)\).</p><p><strong>Kiểm lại:</strong> Norm bằng 1; Tây cho tung độ âm.</p></div>

    ### 3.7. Cung ngắn trên đường tròn lớn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B17-R02-07"><p><strong>Đề bài:</strong> P(30° Bắc,0°), Q(30° Nam,90° Đông). Tính s.</p><p><strong>Phân tích:</strong> P=(√3/2,0,1/2), Q=(0,√3/2,−1/2); dùng góc giữa hai bán kính có hướng.</p><p><strong>Lời giải:</strong> Dot=−1/4, \(\theta=\arccos(-1/4)\approx1{,}8235\) rad; \(s\approx11617{,}4\) km (làm tròn tới 0,1 km từ giá trị đầy đủ).</p><p><strong>Kiểm lại:</strong> Góc &gt;90°, dây cung khác độ dài mặt cầu; không dùng trị tuyệt đối.</p></div>



### Lỗi thường gặp 4.6–4.7
    ### 4.6. Từ vĩ độ, kinh độ tới tọa độ
    
    ??? tip "Cách tự sửa"
    
        Nếu nhầm dấu, đọc lại quy ước Nam/Tây; ở cực kinh độ không xác định duy nhất. Ôn [Core tọa độ địa lí](../luyen-tap/#thpt-g12-b17-c06) và [Luyện tập khoảng cách mặt cầu](../luyen-tap/#thpt-g12-b17-p06), đều thuộc đúng outcome địa lí. Tự kiểm: điểm 0° vĩ độ, 90° Tây có tọa độ (0,−1,0); điểm cực Nam là (0,0,−1). Đối chiếu chuẩn 1 và tự làm lại.

    ### 4.7. Khoảng cách ngắn nhất trên bề mặt Trái Đất
    
    ??? tip "Cách tự sửa"
    
        Không lấy |dot|, không lấy θ theo độ nhân 6371, không dùng khoảng cách dây cung. Ôn [Core địa lí](../luyen-tap/#thpt-g12-b17-c06) và [Luyện tập tính cung](../luyen-tap/#thpt-g12-b17-p06); nếu quên tích vô hướng, xem [Bài 16](../bai-16/). Tự kiểm mới: hai điểm xích đạo lệch 90° cho dot=0, θ=π/2, s=6371π/2 km; thử lại câu ban đầu khi đã tự giải được phép đổi độ–radian.



## Bốn câu canonical hiện hành thuộc cùng outcome

### THPT-G12-B17-C06 · CORE · mức 1
- OUTCOME_ID: `G12-CHV-B17-O06`
- SOURCE_ROLE: `SGK_CORE`
- OPTIONAL_AFTER_B17: `false`
- Đề bài: Trên mô hình Trái Đất là mặt cầu đơn vị Oxyz, Ox hướng kinh tuyến gốc ở xích đạo, Oy hướng 90° Đông, Oz hướng Bắc. Điểm M ở vĩ độ 30° Bắc, kinh độ 90° Tây có tọa độ nào?
- Đáp án: M=(0,−√3/2,1/2)
- Lời giải: Lấy φ=30°, λ=−90°. M=(cosφ cosλ,cosφ sinλ,sinφ)=(0,−√3/2,1/2). Kiểm 0²+3/4+1/4=1 và Oy âm vì kinh độ Tây.


### THPT-G12-B17-P06 · SGK_PRACTICE · mức 2
- OUTCOME_ID: `G12-CHV-B17-O06`
- SOURCE_ROLE: `SGK_PRACTICE`
- OPTIONAL_AFTER_B17: `false`
- Đề bài: Trên mặt cầu đơn vị, P ở vĩ độ 45° Bắc kinh độ 0°, Q ở vĩ độ 45° Bắc kinh độ 90° Đông. Giả sử bán kính Trái Đất 6371 km. Tính góc tâm nhỏ POQ và khoảng cách cung ngắn, làm tròn 0,1 km.
- Đáp án: θ=60°=π/3 rad; s=6371π/3≈6671,7 km
- Lời giải: P=(√2/2,0,√2/2), Q=(0,√2/2,√2/2). Tích vô hướng OP·OQ=1/2; hai vectơ đơn vị nên cosθ=1/2, θ=60°=π/3. Cung ngắn theo đường tròn lớn: s=6371θ≈6671,7 km. Không lấy độ dài cung trên vĩ tuyến 45° vì nói đến đường ngắn nhất trên mặt cầu.


### THPT-G12-B17-A06 · SGK_APPLICATION · mức 3
- OUTCOME_ID: `G12-CHV-B17-O06`
- SOURCE_ROLE: `SGK_APPLICATION`
- OPTIONAL_AFTER_B17: `false`
- Đề bài: Hai vị trí A(0° vĩ độ, 0° kinh độ) và B(0° vĩ độ, 135° Tây) nằm trên mô hình mặt cầu Trái Đất bán kính 6371 km. Tính khoảng cách cung ngắn và khoảng cách dây thẳng AB, làm tròn 0,1 km; giải thích vì sao hai số khác nhau.
- Đáp án: Cung ngắn s=6371·3π/4≈15011,3 km; dây AB=2·6371·sin(3π/8)≈11772,1 km
- Lời giải: OA=(1,0,0), OB=(−√2/2,−√2/2,0), nên OA·OB=−√2/2. Góc tâm θ=arccos(−√2/2)=135°=3π/4 rad, không lấy trị tuyệt đối của tích vô hướng. Cung trên mặt cầu s=Rθ≈15011,3 km; đoạn nối thẳng qua bên trong cầu là dây c=2R sin(θ/2)≈11772,1 km. Dây ngắn hơn cung, không phải đường đi trên bề mặt.


### THPT-G12-B17-W06 · SGK_WRITTEN · mức 4
- OUTCOME_ID: `G12-CHV-B17-O06`
- SOURCE_ROLE: `SGK_WRITTEN`
- OPTIONAL_AFTER_B17: `false`
- Đề bài: Trong mô hình Trái Đất bán kính 6371 km, P ở 30° Bắc, 60° Đông; Q ở 30° Nam, 60° Tây. (a) Viết tọa độ P, Q trên cầu đơn vị. (b) Tính tích vô hướng OP·OQ, góc tâm POQ trong [0°,180°]. (c) Tính khoảng cách cung ngắn theo km (làm tròn 0,1 km) và nêu vì sao không được thay tích vô hướng bằng trị tuyệt đối.
- Đáp án: P=(√3/4,3/4,1/2); Q=(√3/4,−3/4,−1/2); OP·OQ=−5/8; θ=arccos(−5/8)≈128,6822°; s≈14308,8 km
- Lời giải: Đặt φP=30°, λP=60°, φQ=−30°, λQ=−60°. Theo công thức tọa độ trên cầu đơn vị, P=(√3/4,3/4,1/2), Q=(√3/4,−3/4,−1/2). Tích vô hướng bằng 3/16−9/16−1/4=−5/8, độ dài mỗi vectơ bằng 1. Do đó θ=arccos(−5/8)≈2,24592786 rad (>π/2), s=6371θ≈14308,8 km. Lấy |dot| sẽ biến góc tù thành góc nhọn và cho cung ngắn sai.
- Rubric: 1đ đúng tọa độ P và quy ước Bắc/Đông; 1đ đúng tọa độ Q và quy ước Nam/Tây; 1đ tính và kiểm tích vô hướng −5/8, hai vectơ đơn vị; 1đ tìm θ=arccos(−5/8) trong [0,π] và không dùng trị tuyệt đối; 1đ đổi radian, tính s≈14308,8 km và giải thích hạn chế của trị tuyệt đối.

## D6 canonical và liên kết đúng outcome

HELP_ID: `HELP-G12-B17-06`; OUTCOME_ID: `G12-CHV-B17-O06`.
1. **Nhận ra lỗi:** Đảo dấu kinh độ Tây hoặc lấy |OP·OQ| như tính góc giữa hai đường thẳng, dẫn tới cung mặt cầu sai.

2. **Quay lại tiền đề:** Tích vô hướng hai vectơ đơn vị cho cos của góc tâm có hướng từ 0 đến π; kinh độ Đông dương, Tây âm; s=6371θ chỉ khi θ là radian.

3. **Ví dụ chữa nhỏ:** Với P ở xích đạo 0° và Q ở xích đạo 180° Đông, P=(1,0,0), Q=(−1,0,0), dot=−1, θ=π và cung ngắn dài 6371π km; hai điểm đối cực có nhiều đường tròn lớn ngắn nhất cùng độ dài. Không đổi dot thành 1.

4. **Tự làm lại có dẫn:** Xác định dấu vĩ độ/kinh độ → tính tọa độ đơn vị → tự kiểm độ dài bằng 1 → lấy dot trong [−1,1] → θ=arccos(dot) trong [0,π] → s=6371θ; làm tròn sau cùng. Thử bài độc lập trước khi đối chiếu.

5. **Quay lại cùng outcome:** làm câu Core địa lí được liên kết trước, sau đó Luyện tập cung mặt cầu; tự giải trước khi xem đáp án. Xem lời giải không ghi Mastery.

- CORE_RETURN: `THPT-G12-B17-C06`
- PRACTICE_RETURN: `THPT-G12-B17-P06`
- Public END placement: `END-CHV-17-06` → `THPT-G12-B17-A06` (đã gặp trong SGK; không tính độc lập).

## Trọng điểm cần độc lập phản biện
- Q01–Q03: B17 O06 có thật ở SGK p57–58, giải thích trục, dấu của kinh vĩ độ, cầu đơn vị và đường tròn lớn
- Q04–Q06: C06/ P06/ A06/ W06 là bốn dạng khác nhau, câu Written /5 có chứng cứ kiểm nhánh âm và miền góc
- Q07–Q08 / PED: học sinh tự đọc hình GEO/ARC trước công thức, tự thử T06/T07 rồi D6 same-outcome; không lấy số lượng câu thay độ sâu
- Q15: 100 item IDs unique; 25 role mỗi loại; 25 help; 25 END; 4 optional B14-O07 giữ nguyên; 96 item cũ bảo toàn
- Q16/RUNTIME: code cũ vẫn guard 96/24/24 và văn bản 23 mandatory +1 optional; không chỉnh JS trong AUTHORING
- Q18: self-QA 18/18 cấu trúc và 16/16 phép tính giới hạn, KHÔNG nhận reviewer PASS; targeted reviewer verdict pending

## Nguồn hình không gian
- FIG-G12-CHV-B17-GEO-R02.svg · blob 0f6ebdcb23d5c7fdd245c62e0e71e98dc4d30e8f (phép chiếu tọa độ)
- FIG-G12-CHV-B17-ARC-R02.svg · blob b273a1da080fc03a7513be10e7147922ad38e1fa (cung và dây)
Không sao chép pixel SGK/SBT hay dữ liệu RD1.

## Kết quả cần reviewer trả
SOURCE_RECEIPT, VERIFIED_SCOPE, OUTCOME_ID=G12-CHV-B17-O06, ACADEMIC_VERDICT, PED_VERDICT, ITEM_VERDICTS, BLOCKERS P0/P1/P2, MINIMAL_DELTA. Không xác nhận toàn ChV, CONTENT_READY hay RELEASE từ review hẹp.
