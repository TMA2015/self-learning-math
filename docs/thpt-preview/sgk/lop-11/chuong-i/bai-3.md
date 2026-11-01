# Bài 3. Hàm số lượng giác

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Học kiến thức, xem ví dụ suy luận, đọc đồ thị và tự khắc phục lỗi. Luyện tập theo đúng bài ở phần tiếp theo.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

## 1. Kiến thức SGK

1. **Hàm sin và cos:** `y=sin x`, `y=cos x` xác định với mọi `x∈ℝ`, giá trị trong `[-1,1]`. `sin(-x)=-sin x` (lẻ), `cos(-x)=cos x` (chẵn). Chu kỳ dương nhỏ nhất `2π`.
2. **Đồ thị sin:** qua `(0,0)`, `(π/2,1)`, `(π,0)`, `(3π/2,-1)`, `(2π,0)`; tăng trên `[-π/2+2kπ,π/2+2kπ]`, giảm trên `[π/2+2kπ,3π/2+2kπ]`. Không nói sin tăng trên toàn ℝ.
3. **Đồ thị cos:** qua `(0,1)`, `(π/2,0)`, `(π,-1)`, `(3π/2,0)`, `(2π,1)`; giảm trên `[2kπ,(2k+1)π]`, tăng trên `[(2k-1)π,2kπ]` với `k∈ℤ`.
4. **Hàm tan:** `tan x=sin x/cos x`; TXĐ `ℝ\{π/2+kπ:k∈ℤ}`, TGT ℝ, hàm lẻ, chu kỳ cơ bản π, đồng biến trên mỗi khoảng `(-π/2+kπ,π/2+kπ)`. Tiệm cận đứng tại `x=π/2+kπ`. Không nối đồ thị qua tiệm cận.
5. **Hàm cot:** `cot x=cos x/sin x`; TXĐ `ℝ\{kπ:k∈ℤ}`, TGT ℝ, hàm lẻ, chu kỳ π, nghịch biến trên mỗi `(kπ,(k+1)π)`, tiệm cận đứng tại `x=kπ`. Không tính `cot 0`.
6. **Hàm biến đổi và mô hình:** `f(x)=A sin(ωx+φ)+c` (`Aω≠0`) có biên độ `|A|`, TGT `[c-|A|,c+|A|]`, chu kỳ `2π/|ω|` (nếu miền thời gian đủ để thể hiện chu kỳ); với tan/cot `tan(ωx+φ)` có chu kỳ `π/|ω|`. `y=A sin(ωx+φ)+c` khi `A=0` là hằng, không được tuyên bố có chu kỳ *cơ bản*.
7. **Sử dụng đồ thị:** Hoành độ là radian; xét miền xác định trước, đọc điểm, cực trị và tiệm cận từ hình. Cần phân biệt tập giá trị và tập xác định, chu kỳ biểu thức và thời gian thực tế; trả lời số chu kỳ trong một phút phải đổi đơn vị nhất quán.

## 2. Ví dụ giải thích bản chất

- **EX-G11-B03-01 (TXĐ/TGT).** `f(x)=tan(2x)` yêu cầu `cos(2x)≠0`, nên `x≠π/4+kπ/2` với `k∈ℤ`; giá trị vẫn là ℝ. Không viết x≠π/2+kπ vì quên hệ số 2.
- **EX-G11-B03-02 (chẵn/lẻ).** `f(x)=sin x+cos x` không chẵn, không lẻ vì `f(-x)=-sin x+cos x` khác cả `f(x)` lẫn `-f(x)`; trái lại `sin x` lẻ và `cos x` chẵn.
- **EX-G11-B03-03 (chu kỳ).** `y=2 sin(3x-π/4)` có chu kỳ cơ bản `T=2π/3`, TGT `[-2,2]`; `3x` khiến chu kỳ *ngắn hơn*, không dài hơn 3 lần.
- **EX-G11-B03-04 (đọc đồ thị).** `y=cos x` trên `[0,2π]` cắt Ox tại `π/2` và `3π/2`; vì vậy không kết luận đồ thị luôn dương.
- **EX-G11-B03-05 (ứng dụng).** Nhiệt độ `T(t)=24+3cos(πt/6)` (t tính giờ) có đường trung bình 24°C, biên độ 3°C, chu kỳ 12 giờ; T lớn nhất 27°C tại `t=12k`, nhỏ nhất 21°C tại `t=6+12k`.

## 3. Hình minh họa

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../../assets/images/thpt/FIG-G11-B03-01_R01.svg" loading="lazy" alt="Đồ thị lượng giác hình 1, đọc cùng mô tả trong kiến thức"><figcaption>Hình 1. Đọc trục, miền xác định, điểm mốc và nhánh đồ thị theo phần kiến thức.</figcaption></figure>

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../../assets/images/thpt/FIG-G11-B03-02_R01.svg" loading="lazy" alt="Đồ thị lượng giác hình 2, đọc cùng mô tả trong kiến thức"><figcaption>Hình 2. Đọc trục, miền xác định, điểm mốc và nhánh đồ thị theo phần kiến thức.</figcaption></figure>

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../../assets/images/thpt/FIG-G11-B03-03_R01.svg" loading="lazy" alt="Đồ thị lượng giác hình 3, đọc cùng mô tả trong kiến thức"><figcaption>Hình 3. Đọc trục, miền xác định, điểm mốc và nhánh đồ thị theo phần kiến thức.</figcaption></figure>

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../../assets/images/thpt/FIG-G11-B03-04_R01.svg" loading="lazy" alt="Đồ thị lượng giác hình 4, đọc cùng mô tả trong kiến thức"><figcaption>Hình 4. Đọc trục, miền xác định, điểm mốc và nhánh đồ thị theo phần kiến thức.</figcaption></figure>

## 4. Tự khắc phục lỗi thường gặp

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B03-01"><summary>Miền xác định và tập giá trị của tan/cot</summary><ol><li>Nhận diện lỗi: cố tính tan ở nơi cos=0 hoặc cot nơi sin=0.</li><li>Kiểm tra đầu vào: xác định đối số u(x) của tan/cot.</li><li>Sửa nguyên tắc: tan u cần cosu≠0; cot u cần sinu≠0.</li><li>Tự giải ví dụ nhỏ: tan(2x) loại x=π/4+kπ/2; cot(2x) loại x=kπ/2.</li><li>Học lại: làm lại câu Core xác định miền, rồi Practice với hệ số trong đối số.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B03-C01">Quay lại câu luyện tập phù hợp</a></p></details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B03-02"><summary>Chu kỳ khi đối số có hệ số</summary><ol><li>Nhận diện lỗi: nhân chu kỳ với hệ số của x.</li><li>Gợi nhớ: sin/cos có chu kỳ 2π theo đối số, tan/cot có chu kỳ π.</li><li>Sửa: đặt ωT bằng chu kỳ đối số, T=2π/|ω| hoặc π/|ω|, ω≠0.</li><li>Thử ngay: cos(4x-π/3) có T=π/2.</li><li>Trở về luyện tập: B03-P03, phân biệt chu kỳ cơ bản và chu kỳ bất kỳ.</li></ol><p><a href="../luyen-tap/?item=THPT-G11-B03-P01">Quay lại câu luyện tập phù hợp</a></p></details>

## 5. Tiếp tục

[Core và Luyện tập](luyen-tap.md) · [Tự luận chung Chương I](../../../thu-vien/tu-luan-g11-chuong-i-b01-b02.md)
