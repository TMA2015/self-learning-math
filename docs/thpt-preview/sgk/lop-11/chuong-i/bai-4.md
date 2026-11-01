# Bài 4. Phương trình lượng giác cơ bản

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Học kiến thức, xem ví dụ suy luận, đọc đồ thị và tự khắc phục lỗi. Luyện tập theo đúng bài ở phần tiếp theo.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

## 1. Kiến thức SGK

1. **Nguyên tắc:** phương trình là tìm toàn bộ `x` sao cho hai vế xác định và bằng nhau. Mỗi nhánh nghiệm phải có `k∈ℤ`; nghiệm tổng quát và nghiệm trên đoạn là hai yêu cầu khác nhau.
2. **`sin x=m`:** nếu `|m|>1` vô nghiệm; khi `|m|≤1`, đặt `α=arcsin m` (giá trị chính trong `[-π/2,π/2]`), hai họ `x=α+2kπ` hoặc `x=π-α+2kπ`, `k∈ℤ`. Hai họ có thể trùng khi `m=±1`; khi đó đếm nghiệm theo *tập hợp*, không cộng trùng.
3. **`cos x=m`:** nếu `|m|>1` vô nghiệm; nếu `|m|≤1`, đặt `α=arccos m∈[0,π]`, `x=±α+2kπ`. Với `m=±1`, hai họ có thể trùng.
4. **`tan x=m`:** với mọi `m∈ℝ`, `x=arctan m+kπ`; chỉ nhận các x thuộc miền `cos x≠0`, tự động được thỏa khi theo họ nghiệm đúng.
5. **`cot x=m`:** với mọi `m∈ℝ`, chọn `α∈(0,π)` sao cho `cot α=m`, `x=α+kπ`. Có thể chuyển về `tan x=1/m` **chỉ khi `m≠0` và còn điều kiện TXĐ**; với `cot x=0`, nghiệm `x=π/2+kπ`, không chia cho 0.
6. **Đặt đối số:** với `sin(ax+b)=m`, giải cho `t=ax+b` rồi biến đổi *cả* hai họ nghiệm; cùng cách cho cos/tan/cot. Không quên chia `a` và ghi `k∈ℤ` (nếu `a≠0`); khi hệ số bằng 0 phải xét phương trình hằng riêng.
7. **Phương trình quy về cơ bản:** biến đổi bằng công thức lượng giác hoặc đặt `u=sin x`... trong đúng miền. Khi chia cho `sin x`, `cos x` có thể mất nghiệm; tốt hơn phân tích nhân tử và xét các trường hợp. Bình phương có thể sinh nghiệm ngoại lai: luôn thử lại phương trình ban đầu.
8. **Nghiệm trên đoạn:** tìm các k nguyên phù hợp cận và xét dấu `[a,b]` so với `(a,b)`. Đối chiếu đồ thị để tự kiểm nghiệm nhưng không thay thế phép thế nghiệm vào đề.

## 2. Ví dụ giải thích bản chất

- **EX-G11-B04-01 (sin).** `sin x=√2/2` cho `x=π/4+2kπ` hoặc `3π/4+2kπ`, k∈ℤ. Không ghi duy nhất π/4 vì bỏ nghiệm góc phần tư II.
- **EX-G11-B04-02 (tan/cot).** `tan x=-√3` cho `x=-π/3+kπ`. `cot x=0` cho `x=π/2+kπ`. Không biến cot=0 thành tan x vô hạn rồi kết luận vô nghiệm.
- **EX-G11-B04-03 (đối số).** `sin(2x)=1/2` cho `x=π/12+kπ` hoặc `5π/12+kπ`. Mọi nghiệm phải có `k∈ℤ`; không dùng π/6,5π/6 trực tiếp làm nghiệm x.
- **EX-G11-B04-04 (đoạn).** `cos x=-1/2` trên `[0,2π)` chỉ có `2π/3,4π/3`. Hai biên 0 và 2π không đều thuộc đoạn.
- **EX-G11-B04-05 (ngoại lai).** `sin x=cos x` cho `tan x=1` **chỉ sau khi kiểm `cos x≠0`**; tại `cos x=0`, `sin x=±1` nên không là nghiệm. Do đó `x=π/4+kπ`, không mất nghiệm.
- **EX-G11-B04-06 (ứng dụng).** `H(t)=10+2sin(πt/6)` (t giờ) bằng 11 khi `sin(πt/6)=1/2`. Trên `0≤t<12`, có `t=1` và `t=5` giờ, nhờ chọn đúng hai họ và lọc miền thời gian.

## 3. Kết nối đồ thị

Kết hợp đường tròn lượng giác và đồ thị sin/cos/tan/cot tại [Bài 3](bai-3.md) để tự kiểm tra số họ nghiệm. Kiểm tra miền xác định và nghiệm ngoại lai trước khi kết luận.

## 4. Tự khắc phục lỗi thường gặp

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B04-01"><summary>Viết đủ các họ nghiệm của phương trình sin</summary><ol><li>Nhận diện lỗi: bỏ họ nghiệm thứ hai của sin hoặc bỏ k.</li><li>Kiểm tra |m|≤1 và lấy α=arcsin m.</li><li>Viết đủ hai họ x=α+2kπ và x=π-α+2kπ.</li><li>Với sin(2x)=1/2, chia đúng cả hai họ cho 2.</li><li>Trở về B04-C01 và P01; đối chiếu một vòng trên đường tròn.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B04-C01">Quay lại câu luyện tập phù hợp</a></p></details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B04-02"><summary>Lọc nghiệm theo khoảng và kiểm tra điểm biên</summary><ol><li>Nhận diện lỗi: đếm hai lần điểm biên hoặc quên loại nghiệm ngoài miền.</li><li>Viết họ nghiệm tổng quát, ghi k∈ℤ.</li><li>Giải bất đẳng thức trên k theo cận [a,b] hoặc [a,b).</li><li>Với cosx=-1/2 trên [0,2π), chỉ có 2π/3 và 4π/3.</li><li>Trở về bài tự luận kiểm tra nghiệm bằng thế vào phương trình ban đầu.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B04-P01">Quay lại câu luyện tập phù hợp</a></p></details>

## 5. Tiếp tục

[Core và Luyện tập](luyen-tap.md) · [Tự luận chung Chương I](../../../thu-vien/tu-luan-g11-chuong-i-b01-b02.md)
