# Xác suất G10–G12 — 12 câu bổ sung đúng 12 outcome mỏng · canonical extension R02

**Thuộc AUTHORING, không phải bộ Tự kiểm tra độc lập.** Mỗi câu có một `item_id`, `content_version=1`, một đáp án/lời giải; `placement=TOPIC_PRACTICE`, `answer_mode=CHECK_THEN_REVEAL`, `mastery_write=NO`. Khi học sinh cần tự luận giải thích, không cho chấm tự động tùy tiện; rubric chỉ để đối chiếu thủ công hoặc hệ thống được kiểm định. Các câu này khác câu gốc đã review; ChatGPT tự kiểm toán theo Q18 v3.0.1, không gán NotebookLM PASS giả.

**Lý do bổ sung:** bảng 38 ID ban đầu có 12/25 outcome chỉ có một câu; thêm một dạng khác ở mỗi outcome để tối thiểu có 2 canonical item placements/outcome. Không tăng số lượng đồng loạt; năm Written/Anchor gốc vẫn giữ nguyên.

PUBLIC_ITEM_COUNT: 12
SOURCE_KIND: ORIGINAL_AUTHORING_PUBLIC_PRACTICE
PRIVATE_RD1: NONE

## Canonical item–outcome matrix

| item_id | outcome_id | level | version | role |
|---|---|---|---:|---|
| `THPT-G10-TOPPROB-ADD01` | `G10-B26-EXPERIMENT_SAMPLE_SPACE` | Cơ bản–Hiểu | 1 | TOPIC_PRACTICE |
| `THPT-G10-TOPPROB-ADD02` | `G10-B26-COMPLEMENT` | Hiểu | 1 | TOPIC_PRACTICE |
| `THPT-G10-TOPPROB-ADD03` | `G10-B26-SCOPE_SMALL_PROBABILITY` | Hiểu–Vận dụng | 1 | TOPIC_PRACTICE |
| `THPT-G10-TOPPROB-ADD04` | `G10-B27-COMPLEMENT_PROBABILITY` | Vận dụng | 1 | TOPIC_PRACTICE |
| `THPT-G11-TOPPROB-ADD05` | `G11-B28-EVENT_UNION_INTERSECTION` | Hiểu | 1 | TOPIC_PRACTICE |
| `THPT-G11-TOPPROB-ADD06` | `G11-B28-INDEPENDENT_EVENTS` | Vận dụng | 1 | TOPIC_PRACTICE |
| `THPT-G11-TOPPROB-ADD07` | `G11-B28-DISJOINT_EVENTS` | Hiểu–Phản biện | 1 | TOPIC_PRACTICE |
| `THPT-G11-TOPPROB-ADD08` | `G11-B29-ADDITION_DISJOINT` | Hiểu–Ứng dụng | 1 | TOPIC_PRACTICE |
| `THPT-G12-TOPPROB-ADD09` | `G12-B18-CONDITIONAL_INTERPRETATION` | Hiểu | 1 | TOPIC_PRACTICE |
| `THPT-G12-TOPPROB-ADD10` | `G12-B18-INDEPENDENCE_CONNECTION` | Vận dụng–Phản biện | 1 | TOPIC_PRACTICE |
| `THPT-G12-TOPPROB-ADD11` | `G12-B19-TREE_MODEL` | Vận dụng | 1 | TOPIC_PRACTICE |
| `THPT-G12-TOPPROB-ADD12` | `G12-B19-BASE_RATE_REASONING` | Vận dụng–Phản biện | 1 | TOPIC_PRACTICE |

## 12 bài toán hoàn chỉnh (đề – lời giải – giới hạn – khắc phục)

### THPT-G10-TOPPROB-ADD01

**Outcome:** `G10-B26-EXPERIMENT_SAMPLE_SPACE` · **Mức:** Cơ bản–Hiểu · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Ba thẻ A, B, C khác nhau được rút lần lượt **hai thẻ không hoàn lại**; ghi thứ tự rút. Liệt kê toàn bộ không gian mẫu và số kết quả làm cho thẻ đầu là A.

**Vì sao chọn cách giải? (chỉ sau Check):** Cần xét cặp có thứ tự vì A trước B và B trước A là hai kết quả khác nhau.

**Lời giải (chỉ sau Check):** Ω={(A,B),(A,C),(B,A),(B,C),(C,A),(C,B)}; n(Ω)=3×2=6. Thẻ đầu A có (A,B),(A,C): 2 kết quả. Nếu mỗi lượt chọn đều thì P(thẻ đầu A)=2/6=1/3.

**Đáp án (chỉ sau Check):** 6 kết quả; 2 thuận lợi; P=1/3.

**D6/Chỗ dễ sai (sau Check):** Không thay 6 bằng C(3,2)=3 vì đề ghi thứ tự hai lượt.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G10-TOPPROB-ADD02

**Outcome:** `G10-B26-COMPLEMENT` · **Mức:** Hiểu · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Gieo hai xúc xắc công bằng, độc lập, ghi kết quả theo thứ tự. Tính xác suất tổng số chấm **không bằng 7**.

**Vì sao chọn cách giải? (chỉ sau Check):** Đếm trực tiếp 30 trường hợp dễ sót; đếm biến cố đối “tổng bằng 7” trước.

**Lời giải (chỉ sau Check):** Có 6×6=36 cặp đồng khả năng. Tổng 7 xuất hiện ở (1,6),(2,5),(3,4),(4,3),(5,2),(6,1): 6 cặp. P(tổng≠7)=1−6/36=5/6.

**Đáp án (chỉ sau Check):** 5/6.

**D6/Chỗ dễ sai (sau Check):** Đừng coi (1,6) và (6,1) là cùng một cặp vì có thứ tự hai xúc xắc.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G10-TOPPROB-ADD03

**Outcome:** `G10-B26-SCOPE_SMALL_PROBABILITY` · **Mức:** Hiểu–Vận dụng · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Một chương trình chọn ngẫu nhiên đều một mã trong 400 mã, chỉ có đúng **một** mã đạt giải. Tính P(trúng). Phát biểu “Vì xác suất chỉ 0,25% nên 100 lượt độc lập chắc chắn không trúng lần nào” đúng không?

**Vì sao chọn cách giải? (chỉ sau Check):** Phân biệt xác suất nhỏ với biến cố không thể, không biến một tỷ lệ thành bảo đảm tuyệt đối.

**Lời giải (chỉ sau Check):** P(trúng)=1/400=0,0025=0,25%. Mỗi lượt vẫn có khả năng trúng nên câu khẳng định “chắc chắn không trúng lần nào” là sai. Với 100 lượt độc lập, xác suất không trúng cả 100 là (399/400)^100, khác 1.

**Đáp án (chỉ sau Check):** 1/400; phát biểu sai.

**D6/Chỗ dễ sai (sau Check):** Xác suất dương khác 0, không suy chắc chắn từ 'rất nhỏ'; điều kiện độc lập chỉ dùng cho công thức 100 lượt.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G10-TOPPROB-ADD04

**Outcome:** `G10-B27-COMPLEMENT_PROBABILITY` · **Mức:** Vận dụng · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Một hộp có 8 thẻ phân biệt, gồm 5 thẻ tốt và 3 thẻ lỗi. Chọn đồng thời đều ngẫu nhiên 2 thẻ. Tính xác suất **có ít nhất một thẻ lỗi**.

**Vì sao chọn cách giải? (chỉ sau Check):** “Ít nhất một lỗi” có trường hợp 1 lỗi hoặc 2 lỗi; biến cố đối “cả hai tốt” gọn hơn.

**Lời giải (chỉ sau Check):** Tổng số cặp không xét thứ tự C(8,2)=28. Cặp cả hai tốt C(5,2)=10. Vậy P(ít nhất một lỗi)=1−10/28=18/28=9/14.

**Đáp án (chỉ sau Check):** 9/14.

**D6/Chỗ dễ sai (sau Check):** Không dùng xác suất từng lần độc lập vì chọn không hoàn lại; số cặp đồng khả năng mới là mô hình đúng.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G11-TOPPROB-ADD05

**Outcome:** `G11-B28-EVENT_UNION_INTERSECTION` · **Mức:** Hiểu · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Chọn đều một số nguyên từ 1 đến 30. Gọi A là “chia hết cho 4”, B là “chia hết cho 6”. Xác định A∩B, n(A∪B) và P(A∪B).

**Vì sao chọn cách giải? (chỉ sau Check):** Hai tập có giao là bội chung nhỏ nhất; phải trừ đúng phần chung.

**Lời giải (chỉ sau Check):** A có 7 bội (4,...,28), B có 5 bội (6,12,18,24,30), giao {12,24} có 2. Vậy n(A∪B)=7+5−2=10, P(A∪B)=10/30=1/3.

**Đáp án (chỉ sau Check):** A∩B={12,24}; n(A∪B)=10; P=1/3.

**D6/Chỗ dễ sai (sau Check):** Không chỉ cộng 7+5 vì 12 và 24 được đếm hai lần.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G11-TOPPROB-ADD06

**Outcome:** `G11-B28-INDEPENDENT_EVENTS` · **Mức:** Vận dụng · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Chọn đều một số trong {1,...,12}. A: “số chẵn”; B: “số chia hết cho 3”. Kiểm tra độc lập bằng xác suất, không chỉ dựa vào tên biến cố.

**Vì sao chọn cách giải? (chỉ sau Check):** Cần so sánh P(A∩B) với P(A)P(B), có giao chưa chứng minh độc lập.

**Lời giải (chỉ sau Check):** A có 6 số, B có 4 số, giao {6,12} có 2. P(A)=1/2, P(B)=1/3, P(A∩B)=2/12=1/6=(1/2)(1/3). Vậy A và B độc lập trong mô hình này.

**Đáp án (chỉ sau Check):** Độc lập: P(giao)=1/6=P(A)P(B).

**D6/Chỗ dễ sai (sau Check):** Chỉ nói “chẵn không liên quan chia hết cho 3” mà không kiểm trong không gian mẫu cụ thể.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G11-TOPPROB-ADD07

**Outcome:** `G11-B28-DISJOINT_EVENTS` · **Mức:** Hiểu–Phản biện · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Chọn đều số trong {1,...,10}. A là “số nguyên tố”, B là “bội của 4”. Hai biến cố có xung khắc và có độc lập không?

**Vì sao chọn cách giải? (chỉ sau Check):** Hai khái niệm khác nhau: xung khắc kiểm giao rỗng; độc lập so giao với tích xác suất.

**Lời giải (chỉ sau Check):** A={2,3,5,7}; B={4,8}; A∩B=∅ nên xung khắc. P(A)=4/10, P(B)=2/10, P(A)P(B)=8/100>0 nhưng P(A∩B)=0; vậy không độc lập.

**Đáp án (chỉ sau Check):** Xung khắc, không độc lập.

**D6/Chỗ dễ sai (sau Check):** Nhầm xung khắc thành độc lập, dù hai biến cố đều có xác suất dương.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G11-TOPPROB-ADD08

**Outcome:** `G11-B29-ADDITION_DISJOINT` · **Mức:** Hiểu–Ứng dụng · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Chọn đều một số nguyên từ 1 đến 20. A: “chia hết cho 5”, B: “chia 5 dư 2”. Tính P(A∪B) và giải thích có cần trừ phần giao không.

**Vì sao chọn cách giải? (chỉ sau Check):** Một số không thể vừa chia hết cho 5 vừa dư 2; đây là hai biến cố xung khắc.

**Lời giải (chỉ sau Check):** A={5,10,15,20} có 4; B={2,7,12,17} có 4; giao rỗng. P(A∪B)=(4+4)/20=2/5.

**Đáp án (chỉ sau Check):** 2/5; không trừ giao vì giao rỗng.

**D6/Chỗ dễ sai (sau Check):** Dùng P(A)+P(B) chỉ sau khi chứng minh giao rỗng.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G12-TOPPROB-ADD09

**Outcome:** `G12-B18-CONDITIONAL_INTERPRETATION` · **Mức:** Hiểu · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Trong nhóm 40 học sinh, 22 bạn đi xe buýt, 18 bạn đi xe đạp. Có 14 bạn đi xe buýt mang ba lô và 9 bạn đi xe đạp mang ba lô. Chọn đều một bạn. So sánh P(mang ba lô | đi xe buýt) với P(đi xe buýt | mang ba lô).

**Vì sao chọn cách giải? (chỉ sau Check):** Làm rõ nhóm đã biết quyết định mẫu số của xác suất có điều kiện.

**Lời giải (chỉ sau Check):** P(ba lô | xe buýt)=14/22=7/11. Có 14+9=23 bạn mang ba lô, nên P(xe buýt | ba lô)=14/23. Hai xác suất không bằng nhau.

**Đáp án (chỉ sau Check):** 7/11 và 14/23 (khác nhau).

**D6/Chỗ dễ sai (sau Check):** Không dùng cùng mẫu số 40 cho hai xác suất có điều kiện.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G12-TOPPROB-ADD10

**Outcome:** `G12-B18-INDEPENDENCE_CONNECTION` · **Mức:** Vận dụng–Phản biện · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Hộp có 3 thẻ đỏ và 2 xanh. Hai lượt rút đều: (a) có hoàn lại, (b) không hoàn lại. A: lượt đầu đỏ; B: lượt hai đỏ. So sánh P(A | B) với P(A) trong hai trường hợp.

**Vì sao chọn cách giải? (chỉ sau Check):** Kiểm thử xem thông tin về lần hai có thay đổi khả năng lần đầu; chỉ khi độc lập mới giữ nguyên.

**Lời giải (chỉ sau Check):** (a) Có hoàn lại: P(A)=3/5, P(A|B)=3/5 nên độc lập. (b) Không hoàn lại: P(A∩B)=(3/5)(2/4)=3/10; do tính đối xứng P(B)=3/5 nên P(A|B)=(3/10)/(3/5)=1/2, khác P(A)=3/5: phụ thuộc.

**Đáp án (chỉ sau Check):** Có hoàn lại: 3/5 và độc lập. Không hoàn lại: 1/2≠3/5 nên phụ thuộc.

**D6/Chỗ dễ sai (sau Check):** Không tự dùng P(A|B)=P(A) trong bài rút không hoàn lại.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G12-TOPPROB-ADD11

**Outcome:** `G12-B19-TREE_MODEL` · **Mức:** Vận dụng · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Một sản phẩm được lấy từ nguồn A với xác suất 1/3, nguồn B với xác suất 2/3. Xác suất lỗi tương ứng là 1/20 và 1/10. (a) Tính P(lỗi). (b) Biết sản phẩm lỗi, tính P(đến từ B).

**Vì sao chọn cách giải? (chỉ sau Check):** Phải đọc cây hai tầng: nhân từng đường dẫn đến lỗi, cộng các đường để lấy mẫu số, sau đó đảo.

**Lời giải (chỉ sau Check):** P(lỗi)=(1/3)(1/20)+(2/3)(1/10)=1/60+1/15=1/12. P(B∩lỗi)=1/15. Vậy P(B|lỗi)=(1/15)/(1/12)=4/5.

**Đáp án (chỉ sau Check):** P(lỗi)=1/12; P(B|lỗi)=4/5.

**D6/Chỗ dễ sai (sau Check):** Không đảo P(lỗi|B)=1/10 thành P(B|lỗi); phải nhân xác suất nguồn B.

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.

### THPT-G12-TOPPROB-ADD12

**Outcome:** `G12-B19-BASE_RATE_REASONING` · **Mức:** Vận dụng–Phản biện · **Phiên bản:** 1 · **Role:** TOPIC_PRACTICE.

**Đề (hiển thị lúc luyện):** Chỉ 2% sản phẩm của một lô thực sự lỗi. Thiết bị kiểm báo “lỗi” ở 95% sản phẩm lỗi và báo nhầm “lỗi” ở 5% sản phẩm tốt. Biết thiết bị báo lỗi, xác suất sản phẩm thực sự lỗi là bao nhiêu?

**Vì sao chọn cách giải? (chỉ sau Check):** Dùng Bayes với tỉ lệ nền 2%; số báo lỗi giả từ 98% sản phẩm tốt có thể đáng kể.

**Lời giải (chỉ sau Check):** P(lỗi∩+)=0,02×0,95=0,019. P(tốt∩+)=0,98×0,05=0,049. P(+)=0,068. P(lỗi|+)=0,019/0,068=19/68≈0,2794 (27,94%).

**Đáp án (chỉ sau Check):** 19/68 ≈27,94%.

**D6/Chỗ dễ sai (sau Check):** Không lấy 95% làm đáp án; đó là P(báo lỗi | lỗi), không phải P(lỗi | báo lỗi).

**Rubric thủ công gợi ý:** 1 điểm dựng đúng mẫu/giả thiết/điều kiện; 1 điểm tính/suy luận đúng; 1 điểm giải thích kết luận/kiểm điều kiện. Không tự động chấm lời tự luận hoặc ghi Mastery.


## Q18 authoring math QA

- 12/12 câu tự biên soạn mới, chỉ 12 outcome đã thiếu câu thứ hai. Đối chiếu điều kiện đồng khả năng, thứ tự, hoàn lại, tính độc lập, giao/xung khắc, P(B)>0 và các nhánh Bayes; các đáp án độc lập được kiểm trên source-locked receipt sau khi khóa blob.
- **Không tái dùng đề từ bộ 12 private RD1 owner-held**; chỉ kiểm mã nguồn công khai, không có quyền so sánh từng private stem. Do đó chưa được tuyên bố NONCLONE_WITH_PRIVATE_VERIFIED.
- SOURCE Git blob được khóa ở receipt cuối, không thay key/rubric cũ.
