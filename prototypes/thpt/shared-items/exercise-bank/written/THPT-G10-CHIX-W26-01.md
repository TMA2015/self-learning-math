# THPT-G10-CHIX-W26-01 — Biến cố và định nghĩa cổ điển của xác suất

- Vai trò: SGK_WRITTEN; mức độ APPLY; Toán 10 KNTT, Bài 26.
- Nguồn lịch sử đã review: blob 51c5f78e41d569fff11070e0f48f3ab25f58b587; receipt 05c3dd40a094b4b34c28b48cc72d1752c21190fe. Projection trước cutover: fe0c6486eef27392d116c076d848c372c95ec881.
- Candidate sửa điều kiện mô hình: 3207c7522f220db8068d7b8d037ba49c2a12328c. Đây là nguồn canonical candidate duy nhất của ID này, thay cho nội dung sửa tay tại projection. Giữ nguyên ID, dữ kiện, yêu cầu và rubric /6; không tự ghi Mastery. Không tuyên bố chapter PASS.

## THPT-G10-CHIX-W26-01

**Đề:** Gieo một con xúc xắc 6 mặt cân đối và tung một đồng xu cân đối, hai phép thử không ảnh hưởng lẫn nhau (độc lập). Trong mô hình này, 12 cặp kết quả có khả năng xảy ra như nhau. Ghi cặp kết quả (mặt đồng xu, số chấm).

a) Mô tả không gian mẫu \(\Omega\) và tính \(n(\Omega)\).

b) Gọi A là biến cố “xuất hiện mặt ngửa và số chấm lớn hơn 4”. Liệt kê A và tính \(P(A)\).

c) Nêu biến cố đối \(\overline A\) và tính \(P(\overline A)\).

**Đáp án — chỉ mở sau khi tự làm:** Kí hiệu N là mặt ngửa, S là mặt sấp. \(\Omega=\{(N;k),(S;k):k=1,2,3,4,5,6\}\), \(n(\Omega)=12\). \(A=\{(N;5),(N;6)\}\), \(P(A)=\frac16\). Biến cố đối: “xuất hiện mặt sấp hoặc số chấm không quá 4”; \(P(\overline A)=\frac56\).

**Lời giải:**

a) Mỗi mặt của đồng xu có thể ghép với 6 số chấm. Hai mặt cho hai nhóm kết quả rời nhau, mỗi nhóm có 6 cặp. Do đó \(n(\Omega)=2\cdot6=12\). Theo giả thiết mô hình, các cặp đồng khả năng; đây là điều kiện để dùng định nghĩa cổ điển.

b) Điều kiện “mặt ngửa” và “số chấm lớn hơn 4” phải đồng thời đúng. Chỉ hai cặp \((N;5),(N;6)\) thỏa mãn. Vì vậy \(n(A)=2\) và

\[
P(A)=\frac{n(A)}{n(\Omega)}=\frac2{12}=\frac16.
\]

c) Biến cố đối gồm mọi cặp không thuộc A: mặt sấp (bất kỳ số chấm nào) hoặc số chấm không quá 4 (bất kỳ mặt xu nào). Chữ “hoặc” bao gồm trường hợp cả hai điều kiện cùng đúng. Có \(12-2=10\) cặp còn lại, nên \(P(\overline A)=\frac{10}{12}=\frac56\). Kiểm tra: \(P(A)+P(\overline A)=1\).

**Rubric tự đối chiếu /6:** 1đ mô tả đúng các cặp trong \(\Omega\); 1đ tính \(n(\Omega)=12\) và nêu lý do; 1đ liệt kê A; 1đ tính \(P(A)=\frac16\); 1đ diễn đạt đầy đủ biến cố đối; 1đ tính \(P(\overline A)=\frac56\). Chấp nhận cách giải tương đương, tránh trừ lặp lỗi kéo theo.

**Gợi ý khắc phục (sau khi tự làm):** Vẽ bảng hai hàng (N, S) và sáu cột (1 đến 6). Tô hai ô của A, rồi đếm các ô còn lại. Không đếm một ô hai lần khi mô tả biến cố đối.

**Ranh giới:** Tự đối chiếu sau khi làm; không tự chấm, không ghi Mastery, không sử dụng làm đánh giá kín độc lập. Không yêu cầu công thức nhân xác suất của lớp 11; tính đồng khả năng được xác định ngay trong giả thiết lớp 10.
