# Temp · Issue #798 · Quyết định chọn nền mã nguồn phát triển cho 25 mô hình · R01

**Ngày:** 19/11/2026 · **Nhánh:** AUTHORING · **Issue chủ trì:** #798 · **Sổ canonical mục tiêu:** `Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md` trên Draft PR #880.

## Phạm vi quyết định

- **25/25 DEV BASE CHOSEN** = **19/22 Chuyên đề chọn mã nguồn cũ** + **3/22 Chuyên đề chọn HTML mới (#07, #06, #12)** + **3 mô hình SGK dùng HTML mới (#08, #09, #10)**.
- **Phân biệt tuyệt đối:** `DEV_BASE_SELECTED` là **quyết định chọn mã bắt đầu phát triển**, KHÔNG phải source canonical cuối, không phải 25/25 Academic/PED PASS, G1–G4 PASS hoặc website release. Khi xây dựng xong một mô hình phải tạo HTML độc lập, so toán học và UI, QA trên **file chốt thực**, khóa source SHA và cập nhật sổ.
- **Nguồn chọn căn cứ:** đã mở cả **11 HTML cũ trực tiếp ở GitHub theo HEAD của các Draft PR** và kiểm tra SHA trùng sổ; đã đọc lại **13 HTML mới trực tiếp từ ZIP master** theo SHA và mã điều khiển. Bộ mới gói SHA256 `bed77d2c29761f6056ddd80a8f884123bf6e6a381fd473bb909751093a98c45c`, ZIP CRC PASS. Các lượt thử Chromium `5539/5539` thuộc về 13 standalone **cũ trước khi sửa, không chuyển chứng cứ** sang mã trích xuất/ghép mới.
- **Không tự mở lại nội dung SGK/Topic đã ký:** nguồn chọn là mã minh họa toán học, không đổi câu/đáp án/rubric/Mastery. Tích hợp Math Lab là giai đoạn khác.

## Bảng quyết định 25 mô hình — **một nền mã nguồn** cho mỗi mục

| STT | Mô hình | NỀN MÃ ĐÃ CHỌN | Đóng góp của bản còn lại | Chức năng/QA cần hoàn thiện |
|---|---|---|---|---|
| 01 | Chân trị | **OLD_S** | — | Tách scene và kiểm 4 tổ hợp; bảo toàn p⇒q. |
| 02 | Dấu tam thức | **OLD_S** | NEW_02 | Giữ dấu, nghiệm kép/k<0; xem dùng giao điểm bản mới làm phần mở rộng có ích. |
| 03 | Bình phương nghiệm ngoại lai | **OLD_S** | — | Giữ điều kiện x≥0 và đối chiếu nghiệm ngoại lai x=−1. |
| 04 | Mũ/logarit ngược | **OLD_S** | — | QA giới hạn miền x>0, cơ số <1 hoặc >1. |
| 05 | Biến đổi đồ thị | **OLD_G** | NEW_05 | Giữ 2 phép biến đổi M3, bổ sung kiểm soát đỉnh/dịch chuyển a,h,k từ HTML05. |
| 06 | Đường tròn lượng giác | **NEW_07** | OLD_S | Dùng #07 làm nền, giữ đường liên hệ hình sin (bản #844/SGK #08) nếu đúng outcome. |
| 07 | CSC/CSN | **OLD_S** | — | Kiểm n chỉ nguyên, r=1, chuỗi tăng/giảm và thang trục. |
| 08 | Giới hạn một phía | **OLD_S** | NEW_04 | Giữ lõi giới hạn/điều kiện, tận dụng đồ thị điểm rỗng/đặc và phép đọc giá trị từ HTML04. |
| 09 | Đạo hàm/tiếp tuyến | **OLD_D** | NEW_11 | Giữ hai đồ thị và giải thích dấu f′; bổ sung trường hợp góc nhọn cùng kiểm soát h nếu phù hợp. |
| 10 | Tối ưu hộp | **OLD_S** | — | QA giới hạn hộp không suy biến/khả năng đọc hình. |
| 11 | Tổng Riemann | **NEW_06** | OLD_S | Dùng HTML06 làm nền, đối chiếu hai bối cảnh [0,2] và [1,2], sai số và giải thích tổng hữu hạn. |
| 12 | Mơ hồ SSA | **OLD_S** | — | QA nghiệm suy biến, biên tiếp xúc và hướng hình. |
| 13 | Tích vô hướng/hình chiếu | **OLD_V** | NEW_01 | Giữ công thức tích vô hướng và hình chiếu, cân nhắc nhập tọa độ/kéo vectơ từ HTML01. |
| 14 | Tiêu điểm/đường chuẩn | **OLD_S** | — | QA đồng nhất khoảng cách MF=d(M,đường chuẩn), p>0. |
| 15 | Đường thẳng–mặt phẳng | **OLD_LP** | — | QA tình huống h=0, α=0 và giao ngoài khung hình. |
| 16 | Góc dốc/hình chiếu | **OLD_RA** | — | QA run=0, rise=0, góc 90°/không xác định. |
| 17 | Chóp cụt/thể tích | **OLD_FR** | — | QA k=0 chóp, k=1 lăng trụ; không suy diễn khối bất kỳ. |
| 18 | Oxyz/mặt cầu | **OLD_OX** | NEW_03 | Giữ Oxyz projection + sphere-scene, tận dụng kiểm soát và phép toán mặt cắt của HTML03. |
| 19 | Đếm/chọn/Pascal | **OLD_PA** | — | QA khi k=0,n, số cách và giới hạn tương tác. |
| 20 | Hai biến cố/Venn | **NEW_12** | OLD_EV | Dùng HTML12; giữ ví dụ xúc xắc nguyên thủy nếu phù hợp với source CĐ20 hiện hành, không nhập học liệu #860 trái phép. |
| 21 | Bayes/sơ đồ cây | **OLD_BD** | NEW_13 | Giữ posterior Bayes; bổ sung giải thích nhánh P=0 và kiểm không chia cho P(B)=0. |
| 22 | Phân phối dữ liệu/ngoại lệ | **OLD_BD** | — | Tách scene thành HTML độc lập; kiểm quy ước tứ phân vị và dữ liệu bằng nhau. |
| 23 | Sin/cos và chu kỳ | **NEW_08** | G11 B03 | Giữ standalone hiện hành; QA gắn SGK/placement còn là cổng riêng |
| 24 | Tan/cot và tiệm cận | **NEW_09** | G11 B03 | Giữ standalone hiện hành; QA gắn SGK/placement còn là cổng riêng |
| 25 | Phương trình lượng giác | **NEW_10** | G11 B04 | Giữ standalone hiện hành; QA gắn SGK/placement còn là cổng riêng |

**CĐ02 có thể nhận tối đa 2 nguồn donor** (HTML02 và tùy phần đồ thị của HTML05) nhưng không tăng số lượng mô hình. **CĐ05 chọn OLD_G làm nền vì hai phép trị tuyệt đối là outcome quan trọng**, HTML05 chỉ là nguồn mở rộng hình thức parabol. CĐ21 chọn OLD_BD vì có Bayes hậu nghiệm, trong khi HTML13 không tính P(A|B) trong bản hiện tại.

## Bằng chứng so sánh theo mục

### 01 · Chân trị — chọn OLD_S

**Căn cứ từ mã:** Nguồn #844 có bảng chân trị p,q, các phép logic; trích xuất scene để QA độc lập.

**Bước bổ sung:** Tách scene và kiểm 4 tổ hợp; bảo toàn p⇒q.

### 02 · Dấu tam thức — chọn OLD_S

**Căn cứ từ mã:** Nguồn #844 xét dấu x²−k trực tiếp; HTML02 mới là giao đường–parabol, không thay lập luận miền dấu.

**Bước bổ sung:** Giữ dấu, nghiệm kép/k<0; xem dùng giao điểm bản mới làm phần mở rộng có ích.

### 03 · Bình phương nghiệm ngoại lai — chọn OLD_S

**Căn cứ từ mã:** Scene #844 so nghiệm phương trình gốc √(x+2)=x với phương trình bình phương.

**Bước bổ sung:** Giữ điều kiện x≥0 và đối chiếu nghiệm ngoại lai x=−1.

### 04 · Mũ/logarit ngược — chọn OLD_S

**Căn cứ từ mã:** Scene #844 có y=a^x, log_a(x), y=x, cơ số >0 khác 1.

**Bước bổ sung:** QA giới hạn miền x>0, cơ số <1 hoặc >1.

### 05 · Biến đổi đồ thị — chọn OLD_G

**Căn cứ từ mã:** M3 #801 có f(x)=ax²+bx+c và hai phép biến đổi |f(x)|, f(|x|). HTML05 mới chỉ thể hiện dạng a(x−h)²+k; không được thay mất chức năng bản cũ.

**Bước bổ sung:** Giữ 2 phép biến đổi M3, bổ sung kiểm soát đỉnh/dịch chuyển a,h,k từ HTML05.

### 06 · Đường tròn lượng giác — chọn NEW_07

**Căn cứ từ mã:** HTML07 mới xử lý góc âm/nhiều vòng, tọa độ sin/cos, tan/cot không xác định; scene #844 còn sóng sin minh họa.

**Bước bổ sung:** Dùng #07 làm nền, giữ đường liên hệ hình sin (bản #844/SGK #08) nếu đúng outcome.

### 07 · CSC/CSN — chọn OLD_S

**Căn cứ từ mã:** Scene #844 đồ thị các điểm u_n, v_n với n nguyên và so công sai/công bội.

**Bước bổ sung:** Kiểm n chỉ nguyên, r=1, chuỗi tăng/giảm và thang trục.

### 08 · Giới hạn một phía — chọn OLD_S

**Căn cứ từ mã:** Scene #844 tính giới hạn trái=2, phải=b, liên tục iff b=2; HTML04 mới chỉ phân biệt dấu bằng tại điểm c.

**Bước bổ sung:** Giữ lõi giới hạn/điều kiện, tận dụng đồ thị điểm rỗng/đặc và phép đọc giá trị từ HTML04.

### 09 · Đạo hàm/tiếp tuyến — chọn OLD_D

**Căn cứ từ mã:** M6 #801 có hai đồ thị f và f′, dấu đạo hàm/cực trị; HTML11 thêm |x| không khả vi tại 0 và thao tác h trái/phải.

**Bước bổ sung:** Giữ hai đồ thị và giải thích dấu f′; bổ sung trường hợp góc nhọn cùng kiểm soát h nếu phù hợp.

### 10 · Tối ưu hộp — chọn OLD_S

**Căn cứ từ mã:** Scene #844 V(x)=x(12−2x)², 0<x<6, cực đại x=2.

**Bước bổ sung:** QA giới hạn hộp không suy biến/khả năng đọc hình.

### 11 · Tổng Riemann — chọn NEW_06

**Căn cứ từ mã:** HTML06 mới cho a,b,n và lựa chọn điểm đầu trái/phải/trung điểm; scene #844 mặc định [0,2] trung điểm.

**Bước bổ sung:** Dùng HTML06 làm nền, đối chiếu hai bối cảnh [0,2] và [1,2], sai số và giải thích tổng hữu hạn.

### 12 · Mơ hồ SSA — chọn OLD_S

**Căn cứ từ mã:** Scene #844 xét 0/1/2 tam giác không suy biến qua giao tia và đường tròn.

**Bước bổ sung:** QA nghiệm suy biến, biên tiếp xúc và hướng hình.

### 13 · Tích vô hướng/hình chiếu — chọn OLD_V

**Căn cứ từ mã:** D5 #793 có góc θ, |u|,|v| và tích vô hướng; HTML01 chỉ có vectơ AB trong Oxy.

**Bước bổ sung:** Giữ công thức tích vô hướng và hình chiếu, cân nhắc nhập tọa độ/kéo vectơ từ HTML01.

### 14 · Tiêu điểm/đường chuẩn — chọn OLD_S

**Căn cứ từ mã:** Scene #844 parabol y²=2px, F(p/2,0), đường chuẩn x=−p/2; không trùng đồ thị y=ax²+…

**Bước bổ sung:** QA đồng nhất khoảng cách MF=d(M,đường chuẩn), p>0.

### 15 · Đường thẳng–mặt phẳng — chọn OLD_LP

**Căn cứ từ mã:** Nguồn #846 phân biệt d nằm trong/parallel/cắt mặt phẳng theo h và góc.

**Bước bổ sung:** QA tình huống h=0, α=0 và giao ngoài khung hình.

### 16 · Góc dốc/hình chiếu — chọn OLD_RA

**Căn cứ từ mã:** Nguồn #848 có run/rise, chiều dài và góc dốc.

**Bước bổ sung:** QA run=0, rise=0, góc 90°/không xác định.

### 17 · Chóp cụt/thể tích — chọn OLD_FR

**Căn cứ từ mã:** Nguồn #853 có hai đáy tương tự, tỉ số k, thể tích chóp cụt.

**Bước bổ sung:** QA k=0 chóp, k=1 lăng trụ; không suy diễn khối bất kỳ.

### 18 · Oxyz/mặt cầu — chọn OLD_OX

**Căn cứ từ mã:** Nguồn #855 có cả hình chiếu điểm trong Oxyz và mặt cắt mặt cầu; HTML03 mới chỉ có mặt phẳng ngang z=t.

**Bước bổ sung:** Giữ Oxyz projection + sphere-scene, tận dụng kiểm soát và phép toán mặt cắt của HTML03.

### 19 · Đếm/chọn/Pascal — chọn OLD_PA

**Căn cứ từ mã:** Nguồn #858 có cộng/nhân, phân biệt chọn/sắp, Pascal/Newton.

**Bước bổ sung:** QA khi k=0,n, số cách và giới hạn tương tác.

### 20 · Hai biến cố/Venn — chọn NEW_12

**Căn cứ từ mã:** HTML12 mới có bốn miền, tập hợp/xác suất và kiểm tra độc lập bằng số nguyên; source #860 minh họa sáu kết quả xúc xắc nhưng PR #860 CLOSED/SUPERSEDED.

**Bước bổ sung:** Dùng HTML12; giữ ví dụ xúc xắc nguyên thủy nếu phù hợp với source CĐ20 hiện hành, không nhập học liệu #860 trái phép.

### 21 · Bayes/sơ đồ cây — chọn OLD_BD

**Căn cứ từ mã:** Nguồn #880 tính xác suất toàn phần và Bayes hậu nghiệm; HTML13 mới chỉ là cây hai bước có điều kiện/xung khắc.

**Bước bổ sung:** Giữ posterior Bayes; bổ sung giải thích nhánh P=0 và kiểm không chia cho P(B)=0.

### 22 · Phân phối dữ liệu/ngoại lệ — chọn OLD_BD

**Căn cứ từ mã:** Nguồn #880 có bảy quan sát, biểu đồ chấm, mean/median/quartiles/IQR/outlier.

**Bước bổ sung:** Tách scene thành HTML độc lập; kiểm quy ước tứ phân vị và dữ liệu bằng nhau.


## Nguồn Git HTML cũ (11 file; 10 có mục làm nền, 1 nguồn lịch sử bổ trợ)

- **OLD_S**: PR #844, Git blob `966f1a472372ffeb3af72f17a817cefcf5660271` (`prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html`)
- **OLD_G**: PR #801, Git blob `249c433ba4fc58c8b6f88467ca003fb978d18c01` (`prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html`)
- **OLD_D**: PR #801, Git blob `6e3420462d60e985a976fe5f81db9b3a846b0da0` (`prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html`)
- **OLD_V**: PR #793, Git blob `a0db48db73198044a262312dc438fc4ae5e03788` (`prototypes/thpt/content-drafts/topic-vector-coordinate/exp-notebook-d5-equivalent/Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html`)
- **OLD_LP**: PR #846, Git blob `cf6510d5d964958982fae3ebce5823e35aeac639` (`prototypes/thpt/content-drafts/topic15-spatial-parallelism/Temp_THPT_TOPIC15_LINE_PLANE_RELATION_R01_20261113.html`)
- **OLD_RA**: PR #848, Git blob `931093557eb411b9f78286a92e6545dcbd59aa73` (`prototypes/thpt/content-drafts/topic16-perpendicularity/Temp_THPT_TOPIC16_RAMP_ANGLE_R01_SCOPE_CORRECTED_20261113.html`)
- **OLD_FR**: PR #853, Git blob `cfb2bd522531167003eeae8e7342c6d1349ca425` (`prototypes/thpt/content-drafts/topic17-spatial-distance-volume/Temp_THPT_TOPIC17_FRUSTUM_VOLUME_MODEL_R00_20261113.html`)
- **OLD_OX**: PR #855, Git blob `06a59b1624bf9eceef9722440acacfbac5969140` (`prototypes/thpt/content-drafts/topic18-oxyz/Temp_THPT_TOPIC18_OXYZ_SPHERE_GEOMETRY_R00_20261114.html`)
- **OLD_PA**: PR #858, Git blob `d68b220e5faadda774b7540606de3b024a472bd1` (`prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114.html`)
- **OLD_EV**: PR #860, Git blob `117237ff935fdef0f5ce7ad8ec99a664f5f980b6` (`prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_EVENTS_INTERACTIVE_WHITE_R00_20261114.html`)
- **OLD_BD**: PR #880, Git blob `33632fdf8743b5526b925e8c9f393397bb04d943` (`prototypes/thpt/content-drafts/interactive-models/Temp_THPT_TOPIC21_TOPIC22_SHARED_MATH_LAB_R01_20261117.html`)

## Nguồn HTML mới (13 file; tất cả được bảo toàn hoặc sử dụng)

- **NEW_01**: Library `Temp_I798_FINAL_01_VECTOR_OXY.html`, SHA256 `c7a6cdfe603097b978f3d7007fd38f7d6af5c2eb4ad8dfd5320ae0b0aebd2181`
- **NEW_02**: Library `Temp_I798_FINAL_02_PARABOLA_LINE.html`, SHA256 `7b81119269de3ec0b83336bbb3f5c123ed67a6cc5a8ad7a5c5c65fe73c6e0b44`
- **NEW_03**: Library `Temp_I798_FINAL_03_SPHERE_PLANE.html`, SHA256 `2fdc06264fb2726a7e3a05dcf8b5a31b5481464b77cea662aab5f3d0d2653d80`
- **NEW_04**: Library `Temp_I798_FINAL_04_PIECEWISE.html`, SHA256 `6cb8d90a8a216408ae72fb140d90662721560ed16632fc52f17bde2b5a6c58f3`
- **NEW_05**: Library `Temp_I798_FINAL_05_PARABOLA_TRANSFORM.html`, SHA256 `8b853a36ccc2bd8d14af7abee91128658cc21413e2a272775d5e3a778dac973b`
- **NEW_06**: Library `Temp_I798_FINAL_06_RIEMANN.html`, SHA256 `ce559693052d06eece68e77f035361e84e1d36c930d905a2b124dacdb273a203`
- **NEW_07**: Library `Temp_I798_FINAL_07_UNIT_CIRCLE.html`, SHA256 `55583c3e393173967efa6ac86063b86d194244ab156f68a1945f98a3a98a66b2`
- **NEW_08**: Library `Temp_I798_FINAL_08_SIN_COS_PERIOD.html`, SHA256 `2dd74126516a9da634d44b6d49a174f9c4f6231f21b24c1d9e9594b7e391a009`
- **NEW_09**: Library `Temp_I798_FINAL_09_TAN_COT_ASYMPTOTES.html`, SHA256 `422b59b54fad766004b16186287430ebe141b263b97bd5be969533711cb6a413`
- **NEW_10**: Library `Temp_I798_FINAL_10_TRIG_EQUATIONS.html`, SHA256 `c14717c132cd63ddf3bfdb7ee1858dfb5fb7b34955578778badbab2a0afb2e77`
- **NEW_11**: Library `Temp_I798_FINAL_11_DERIVATIVE_TANGENT.html`, SHA256 `9de150e9aedcd0814f6c04c87a3525fafae21a4406e05b640d4259c980a6d3be`
- **NEW_12**: Library `Temp_I798_FINAL_12_VENN_PROBABILITY.html`, SHA256 `26e3764bd46f6d88ad2ad8eb4ac7e9006cba28f8fd59f5189cb6cff3333bad54`
- **NEW_13**: Library `Temp_I798_FINAL_13_PROBABILITY_TREE.html`, SHA256 `9c32d27f8c3b6defc3ca6395afa4970e9d0ec05b1c5a52a3cdb2be77485805b0`

## Quy tắc thực thi để không nhầm nguồn

1. **Chỉ một DEV_BASE cho một mục**, donor giữ nguồn như tham chiếu và *không* tạo MODEL_ID thứ hai. Mọi tính năng được đưa từ donor sang base đều kiểm tra toán học độc lập, gồm điều kiện xác định/biên/thuyết minh.
2. **19 OLD_BASE Chuyên đề**: lấy đúng Git blob của source Draft; nếu scene trong file chung, tách thành một HTML độc lập đồng bộ G Learning; giữ nguyên khái niệm bắt buộc và dấu vết SHA. **3 NEW_BASE Chuyên đề**: giữ đúng HTML/SHA master mới, port phần còn thiếu của bản cũ sau kiểm thử; **3 SGK NEW_BASE** giữ nguyên đã tự QA.
3. **Math/G1-PED, Golden/G2, browser/G3, handoff/G4** thực hiện và ghi receipt lần lượt từng mô hình; không chuyển `CONTENT_READY` của 22 học liệu Topic thành model PASS. Không yêu cầu NotebookLM đánh giá lại toàn chương nếu chỉ sửa CSS; DELTA_C thực sự đi đúng nguồn Q01–Q18 và review phần ảnh hưởng.
4. **Khóa cuối khác khóa nền:** sau khi code được hoàn thiện mới ghi `FINAL_MODEL_SHA`, `G1/G2/G3` và `MODEL_DEV_COMPLETE` vào **sổ duy nhất trong PR #880**. Tuyệt đối không tự nhận 25 mô hình đã hoàn tất vì bảng R01 này.
5. #860 **đã đóng và superseded**; OLD_EV chỉ là nguồn diễn giải xúc xắc tham khảo, không phải nguồn canonical CĐ20 hiện hành. Tương tự các SHA cũ là provenance tại thời điểm rà soát, không được ghi đè học liệu ký.
6. Không tự tích hợp website, không merge/deploy, không mở chương trình song song.

**Kết quả chốt:** `I798_DEV_BASE_SOURCE_SELECTED_25_OF_25 / TOPIC_OLD_19 / TOPIC_NEW_3 / SGK_NEW_3 / FINAL_MODEL_QA_PENDING / AUTHORING_ONLY`.
