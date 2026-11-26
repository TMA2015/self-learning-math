# CĐ22 — Thống kê: QA trực tiếp 13 tuyến Kiến thức → Vận dụng → D6, không sửa nguồn

**Ngày:** 20/11/2026; AUTHORING scoped mathematics/pedagogy QA. Đọc và kiểm trực tiếp nguồn learner hiện hành. Đây KHÔNG phải phán quyết NotebookLM toàn chuyên đề, KHÔNG phải pass cho 114 canonical khác chưa tái kiểm độc lập.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
SOURCE_PATH: prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R09_GLOBAL_PRACTICE_NUMBERING_20261116.md
SOURCE_BLOB: 155f14cc191800d52fce98b0f7df6ab30bb0faf4
PR: #812
REVIEW_MODE: DIRECT_AUTHOR_MATH_PED_SPOTCHECK_13_TEACHING_PATHS
SOURCE_CHANGED: NO
OBSERVED_MATH_P0_P1: 0/0
ACADEMIC_AUTHOR_SPOTCHECK: PASS_ON_INSPECTED_13_PATHS
PED_AUTHOR_SPOTCHECK: PASS_ON_INSPECTED_13_PATHS
RELEASE_AUTHORIZATION: NO

## 13 tuyến học theo từng nhóm kiến thức, chứng minh và thử ví dụ

1. **Sai số, độ chính xác, đơn vị:** minh họa `12,5 cm; d=0,1 cm; a_bar=12,47 cm` cho Δ=0,03 **cm**. Ví dụ tiếp theo là một bài **khác** dùng `12,47 mm` và `12,5 mm`, đúng Δ=0,03 **mm**; không phải sai đơn vị, vì đề đã đổi. Vận dụng `9,68 mm→9,7 mm` Δ=0,02 mm, δ=0,02/9,7≈0,206%; chặn d không được tự nhận bằng sai số thực.
2. **Trung bình/mốt:** mẫu `1,3,3,5,8` có tổng20, n=5, trung bình4, mốt3, phải phân biệt tần suất với vị trí số giữa.
3. **Trung vị/tứ phân vị:** mẫu `2,4,6,8,10,12` sắp tăng, Me=(6+8)/2=7, nửa dưới trung vị4, nửa trên trung vị10. Cách chia hai nửa cần thống nhất với nguồn KNTT đang sử dụng.
4. **IQR và giá trị ngoại lệ:** mẫu `2,3,4,5,6,7,25`, Q1=3, Q3=7, IQR4, hàng rào trên=7+1.5×4=13, nên25 là điểm cần kiểm tra chứ KHÔNG tự xóa khỏi mẫu.
5. **Phương sai dữ liệu thô:** A=(4,5,6), B=(2,5,8), trung bình đều5. s²A=2/3, s²B=6 dùng mẫu số n=3 theo phương pháp học trong SGK, A ít dao động hơn.
6. **Ghép nhóm biên đóng/mở:** dữ liệu 3,10,10,20,29 với [0,10),[10,20),[20,30) cho tần số1,2,2; số10 nằm ở nhóm thứ hai và20 ở nhóm thứ ba.
7. **Trung bình nhóm có trọng số:** nhóm [0,10):1,[10,20):2,[20,30):1 có trung điểm5,15,25; trung bình ước lượng(5+30+25)/4=15, tích lũy1,3,4. Phân biệt ước lượng nhóm với trung bình gốc.
8. **Nội suy Me/Q nhóm:** n20 và nhóm [0,10):5,[10,20):5,[20,30):10 cho tích lũy5,10,20. Theo quy ước nội suy của nguồn, Me≈20, Q1≈10, Q3≈25. Không khẳng định là tứ phân vị chính xác từ dữ liệu gốc.
9. **Mốt nhóm (cùng độ rộng):** tần số4,10,6 theo [0,10),[10,20),[20,30) -> modal [10,20), Mo≈10+[6/(6+4)]×10=16. Không dùng tần số thô máy móc khi độ rộng nhóm khác nhau; xét mật độ theo đơn vị.
10. **Khoảng phủ theo nhóm:** từ [5,15) đến [25,35), chênh cận là35−5=30; đây là ước lượng độ phủ theo nhóm, không bảo đảm khoảng biến thiên thực bằng30.
11. **IQR theo nội suy nhóm:** f=(4,10,6), n20, h10; Q1≈10+(5−4)×10/10=11; Q3≈20+(15−14)×10/6=65/3; IQR=32/3≈10,67. Quan hệ Q1≤Q3 được kiểm.
12. **Phương sai nhóm:** f=(1,2,1), midpoint=(5,15,25), mean15, variance=[(5−15)²+(25−15)²]/4=50, std=√50=5√2≈7,071. Có trọng số, không đổi mẫu số n−1.
13. **So phân tán theo cùng nhóm:** f_A=(1,4,1), f_B=(2,2,2) với midpoint5,15,25, cả hai mean15; s²_A=200/6=100/3, s²_B=400/6=200/3, A ít phân tán hơn. Không suy nhân quả hay chắc chắn về dữ liệu gốc từ ước lượng nhóm.

## Pedagogical / Q09–Q14 kiểm trên chính các đoạn học sinh

- Những bài học minh họa vì sao phải có thông tin nguồn, cỡ mẫu, đơn vị đo và điều kiện thống kê; giải thích bản chất trước công thức, rồi mới cho **Vận dụng** có **Đối chiếu/D6**.
- Những lỗi quen thuộc được chữa cụ thể: nhầm d với Δ thực; nhầm trung bình với mốt; chưa sắp mẫu trước Me/Q; tự xóa outlier; quên trọng số nhóm; nội suy sai nhóm; dùng mẫu số n−1; nhầm bảng ghép nhóm là dữ liệu gốc.
- Phần nhóm nhấn mạnh kết quả nội suy **chỉ là ước lượng** và có thể có nhiều bộ dữ liệu gốc rất khác nhau cùng bảng tần số; đây là điều kiện quan trọng để học sinh không tưởng mình đã biết trung bình/phương sai chính xác.

## Verdict có giới hạn

13/13 **tuyến minh họa–vận dụng điển hình** được đối chiếu phép tính/điều kiện và hướng giải theo nguồn. Không phát hiện lỗi P0/P1 trong 13 tuyến. Có **127 khối Đối chiếu cân bằng** trong full learner nhưng không lấy số lượng này làm chứng cứ bảo đảm 114 canonical câu khác đúng toán: scope đó chưa được tự kiểm lại toàn phần trong lượt này. Nguồn R09 và CONTENT_READY cũ không đổi, không cần NotebookLM phản biện lại nếu không có thay đổi Delta C. Không tích hợp website, chấm Mastery hoặc merge/deploy.