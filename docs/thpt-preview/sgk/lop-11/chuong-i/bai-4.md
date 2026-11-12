# Bài 4. Phương trình lượng giác cơ bản

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Học kiến thức, xem ví dụ suy luận, đọc đồ thị và tự khắc phục lỗi. Luyện tập theo đúng bài ở phần tiếp theo.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Bài 3 cho biết **từ góc x tìm sin x**. Bài 4 hỏi ngược lại: nếu `sin x=1/2`, phải tìm **tất cả các góc x** như thế nào? Trên một vòng `[0,2π)`, đường ngang có tung độ `1/2` ứng với **hai vị trí** trên đường tròn đơn vị: `π/6` và `5π/6`. Quay thêm bất kỳ `2kπ` (`k∈ℤ`) thì điểm cuối không đổi, nên nghiệm là `x=π/6+2kπ` hoặc `x=5π/6+2kπ`. Một giá trị góc đại diện không thể thay cho toàn bộ tập nghiệm.

    **Nối kiến thức cũ:** Bài 1 giải thích các góc cùng tia cuối, Bài 2 cung cấp công thức biến đổi, Bài 3 giải thích đồ thị và chu kỳ. Giải phương trình lượng giác nghĩa là tìm **mọi x thỏa hai vế đều xác định và bằng nhau**. Với sin/cos, nếu `|m|>1` thì không có tung độ/hoành độ nào như vậy; với tan/cot, không được chia cho 0. Khi đối số là `ax+b`, tìm **đủ họ nghiệm của đối số** rồi mới suy ra x; khi đề giới hạn một khoảng, phải lọc k nguyên theo cả hai đầu mút.

    ### Ví dụ trực quan

    Nếu biết một vị trí của điểm trên đường tròn thì thường có nhiều góc quay đi tới đó. Giải phương trình lượng giác là tìm mọi góc phù hợp, không chỉ góc mà máy tính hiện lên.

    **Quan sát bằng số liệu:** sin x=0 có nghiệm x=kπ với k nguyên, vì trên một vòng có hai hướng trục hoành rồi lặp lại ở các vòng tiếp theo. Chỉ ghi x=0 sẽ bỏ vô số nghiệm.

    ### Thuật ngữ và kiến thức, kỹ năng

    **Thuật ngữ:** phương trình sin, cos, tan, cot; họ nghiệm; điều kiện xác định.

    **Sau bài học, em cần:** chọn họ nghiệm theo đồ thị, kiểm chu kì, kiểm miền và nghiệm trên đoạn.

=== "Kiến thức SGK"

    ### 1.1. Nguyên tắc

    phương trình là tìm toàn bộ `x` sao cho hai vế xác định và bằng nhau. Mỗi nhánh nghiệm phải có `k∈ℤ`; nghiệm tổng quát và nghiệm trên đoạn là hai yêu cầu khác nhau.
    ### 1.2. `sin x=m`

    nếu `|m|>1` vô nghiệm; khi `|m|≤1`, đặt `α=arcsin m` (giá trị chính trong `[-π/2,π/2]`), hai họ `x=α+2kπ` hoặc `x=π-α+2kπ`, `k∈ℤ`. Hai họ có thể trùng khi `m=±1`; khi đó đếm nghiệm theo *tập hợp*, không cộng trùng.
    ### 1.3. `cos x=m`

    nếu `|m|>1` vô nghiệm; nếu `|m|≤1`, đặt `α=arccos m∈[0,π]`, `x=±α+2kπ`. Với `m=±1`, hai họ có thể trùng.
    ### 1.4. `tan x=m`

    với mọi `m∈ℝ`, `x=arctan m+kπ`; chỉ nhận các x thuộc miền `cos x≠0`, tự động được thỏa khi theo họ nghiệm đúng.
    ### 1.5. `cot x=m`

    với mọi `m∈ℝ`, chọn `α∈(0,π)` sao cho `cot α=m`, `x=α+kπ`. Có thể chuyển về `tan x=1/m` **chỉ khi `m≠0` và còn điều kiện TXĐ**; với `cot x=0`, nghiệm `x=π/2+kπ`, không chia cho 0.
    ### 1.6. Đặt đối số

    với `sin(ax+b)=m`, giải cho `t=ax+b` rồi biến đổi *cả* hai họ nghiệm; cùng cách cho cos/tan/cot. Không quên chia `a` và ghi `k∈ℤ` (nếu `a≠0`); khi hệ số bằng 0 phải xét phương trình hằng riêng.
    ### 1.7. Phương trình quy về cơ bản

    biến đổi bằng công thức lượng giác hoặc đặt `u=sin x`... trong đúng miền. Khi chia cho `sin x`, `cos x` có thể mất nghiệm; tốt hơn phân tích nhân tử và xét các trường hợp. Bình phương có thể sinh nghiệm ngoại lai: luôn thử lại phương trình ban đầu.
    ### 1.8. Nghiệm trên đoạn

    tìm các k nguyên phù hợp cận và xét dấu `[a,b]` so với `(a,b)`. Đối chiếu đồ thị để tự kiểm nghiệm nhưng không thay thế phép thế nghiệm vào đề.

    ### Đọc hình và đối chiếu khái niệm

    Kết hợp đường tròn lượng giác và đồ thị sin/cos/tan/cot tại [Bài 3](bai-3.md) để tự kiểm tra số họ nghiệm. Kiểm tra miền xác định và nghiệm ngoại lai trước khi kết luận.

    ### Hướng dẫn đọc hình, đồ thị

    - Với B04, tưởng tượng đường thẳng ngang `y=1/2` cắt **đồ thị sin** hai lần trong `[0,2π)`, các giao điểm lặp lại sau một chu kỳ. Đây chỉ là diễn giải bằng lời, **không** khẳng định đường ngang đã được vẽ trên SVG và **không** coi tiệm cận tan/cot là nghiệm. Reviewer phải kiểm nội dung hình gốc; AP3 hiển thị trên thiết bị thuộc release QA.

    ### Vận dụng — tự thử rồi mở đối chiếu

    Tìm mọi x thuộc [0,2π) sao cho sin x=0. Vì sao trên ℝ nghiệm phải có số nguyên k?

    <details class="thpt-r4-pedagogical-note" data-ped-first-try="4"><summary>Đã thử xong? Mở hướng dẫn đối chiếu</summary>

    Trong [0,2π): x=0 hoặc x=π. Trên ℝ: x=kπ, k∈ℤ. Xem lại đường tròn Bài 1 và đồ thị sin Bài 3, rồi làm câu Core đầu tiên của bài.

    </details>

=== "Ví dụ"

    - **EX-G11-B04-01 (sin).** `sin x=√2/2` cho `x=π/4+2kπ` hoặc `3π/4+2kπ`, k∈ℤ. Không ghi duy nhất π/4 vì bỏ nghiệm góc phần tư II.
    - **EX-G11-B04-02 (tan/cot).** `tan x=-√3` cho `x=-π/3+kπ`. `cot x=0` cho `x=π/2+kπ`. Không biến cot=0 thành tan x vô hạn rồi kết luận vô nghiệm.
    - **EX-G11-B04-03 (đối số).** `sin(2x)=1/2` cho `x=π/12+kπ` hoặc `5π/12+kπ`. Mọi nghiệm phải có `k∈ℤ`; không dùng π/6,5π/6 trực tiếp làm nghiệm x.
    - **EX-G11-B04-04 (đoạn).** `cos x=-1/2` trên `[0,2π)` chỉ có `2π/3,4π/3`. Hai biên 0 và 2π không đều thuộc đoạn.
    - **EX-G11-B04-05 (ngoại lai).** `sin x=cos x` cho `tan x=1` **chỉ sau khi kiểm `cos x≠0`**; tại `cos x=0`, `sin x=±1` nên không là nghiệm. Do đó `x=π/4+kπ`, không mất nghiệm.
    - **EX-G11-B04-06 (ứng dụng).** `H(t)=10+2sin(πt/6)` (t giờ) bằng 11 khi `sin(πt/6)=1/2`. Trên `0≤t<12`, có `t=1` và `t=5` giờ, nhờ chọn đúng hai họ và lọc miền thời gian.

    ### Vì sao chọn phương pháp?

    - **Ví dụ 01:** đường ngang cắt đường tròn đơn vị tại hai vị trí; viết đủ hai họ sin trước khi kết luận.
    - **Ví dụ 02:** tan/cot có chu kỳ `π`, nhưng `cot x=0` không được chuyển sang `tan x=1/0`; dùng định nghĩa và điều kiện để tìm nghiệm.
    - **Ví dụ 03:** giải phương trình cho **đối số** `2x` trước; chia cả hai họ cho 2, không lấy nghiệm của `2x` làm nghiệm x.
    - **Ví dụ 04:** dấu ngoặc `[0,2π)` cho phép 0 và loại `2π`; phải lọc nghiệm cụ thể, không chỉ viết tổng quát.
    - **Ví dụ 05:** trước khi chia cho `cos x`, xét riêng khả năng `cos x=0` để không làm mất nghiệm của phương trình ban đầu.
    - **Ví dụ 06:** từ `H(t)=11` quy về `sin(πt/6)=1/2`, tìm đủ hai họ rồi giữ những t trong `0≤t<12`; đơn vị của t là giờ.

=== "Lỗi thường gặp"

    <details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B04-01"><summary>Viết đủ các họ nghiệm của phương trình sin</summary><ol><li>Nhận diện lỗi: bỏ họ nghiệm thứ hai của sin hoặc bỏ k.</li><li>Kiểm tra |m|≤1 và lấy α=arcsin m.</li><li>Viết đủ hai họ x=α+2kπ và x=π-α+2kπ.</li><li>Với sin(2x)=1/2, chia đúng cả hai họ cho 2.</li><li>Trở về B04-C01 và P01; đối chiếu một vòng trên đường tròn.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B04-C01">Quay lại câu luyện tập phù hợp</a></p></details>

    <details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B04-02"><summary>Lọc nghiệm theo khoảng và kiểm tra điểm biên</summary><ol><li>Nhận diện lỗi: đếm hai lần điểm biên hoặc quên loại nghiệm ngoài miền.</li><li>Viết họ nghiệm tổng quát, ghi k∈ℤ.</li><li>Giải bất đẳng thức trên k theo cận [a,b] hoặc [a,b).</li><li>Với cosx=-1/2 trên [0,2π), chỉ có 2π/3 và 4π/3.</li><li>Trở về bài tự luận kiểm tra nghiệm bằng thế vào phương trình ban đầu.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B04-P01">Quay lại câu luyện tập phù hợp</a></p></details>

    ### Học tiếp

    [Core và Luyện tập](luyen-tap.md) · [Tự luận chung Chương I](../../../thu-vien/tu-luan-g11-chuong-i-b01-b02.md)
