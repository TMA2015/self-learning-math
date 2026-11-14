# AUTHORING R00 — Chuyên đề Hàm số và đồ thị: Luyện tập + Tự kiểm tra theo mạch năng lực

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-VERTICAL-PILOT-PREP-R00-20261107  
**LEARNING_PATH:** TOPIC · **SCOPE:** G10→G12 (planning, NOT CONTENT_READY)  
**ONE STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18  
**STUDENT STRUCTURE:** 1) Kiến thức · 2) Luyện tập · 3) Tự kiểm tra — không có trang Core riêng.  
**STATE:** PRACTICE_DESIGN_CANDIDATE / ASSESSMENT_BLUEPRINT_ONLY · **NO RD1 PRIVATE STEM/KEY**  
**CRITICAL:** Không tạo nguồn câu/đáp án thứ hai cho item SGK. Tất cả câu dưới đây chỉ là **ví dụ minh họa thiết kế dạng tập** chưa có `item_id` canonical mới, chưa được độc lập NotebookLM review và không dùng để chứng nhận năng lực.

## 1. Chuyên đề tự học độc lập: trang Luyện tập phải trực tiếp dùng được

**Mục tiêu của trang này:** Học sinh chọn **mạch đang hiểu** và **việc cần luyện**, không phải chọn lớp hay số bài SGK. Mỗi câu cần hiển thị ngay trên Topic với stem và tương tác trong Golden runtime chung. Khi câu từng ở SGK Core/Practice, `placement` Topic trỏ tới **đúng cùng canonical item/key/solution** và giữ lịch sử/role thật; không chỉ dẫn một URL SGK như điều kiện bắt buộc để làm được bài.

**Lộ trình trong mỗi họ dạng:** 
- *Hiểu nền*: nhận diện, giải thích khái niệm/đọc hình; tùy ngữ cảnh có gợi ý tự chọn.
- *Làm được*: chọn công cụ, tính đúng điều kiện và kiểm kết quả; luyện đa dạng cấu trúc, không đổi số cho đủ lượng.
- *Vận dụng & tổng hợp*: chọn phương pháp trong tình huống mới, kết hợp nhiều mạch, ghi giả định/đơn vị/ngoại lệ.
- *Tự luận/Anchor*: làm giấy, tự mở rubric và giải đầy đủ; cùng thư viện Written canonical, Anchor là nhãn. Không tự chấm Mastery khi học sinh tự đối chiếu.

**Tuyến D6 sau khi sai:** câu sai → nêu kiểu sai cụ thể → giải thích ngắn → quay lại đoạn kiến thức **ngay trong Topic** → xem một ví dụ đủ bước → thử lại câu tương đương. Học sinh không bị bắt mở một trang SGK hoặc hỏi AI mới hiểu. Gemini chỉ hỗ trợ trên trang học công khai; **không xuất hiện ở Tự kiểm tra**.

## 2. Ma trận dạng luyện tập (cấu trúc tư duy, không theo chương SGK)

| Mạch | Gia đình bài / biểu hiện hiểu | Core/formative canonical đã có | Bằng chứng bổ sung cần biên soạn hoặc xác minh |
|---|---|---|---|
| M1 | Hàm số hay không, miền, giá trị & giao điều kiện | G10 R01 B15 C01/C02/P01 qua placement | Dạng mở nhiều điều kiện, mô hình đầu vào nguyên/rời rạc |
| M2 | Đọc đồ thị/bảng, khoảng tăng giảm, hàm từng đoạn | G10 B15 P02/P03, D6 B15 | Hình đọc sai dễ mắc; khớp tại điểm nối; phân biệt quan sát và giả định |
| M3 | Dạng đỉnh, giao trục, giới hạn miền, tối ưu | G10 B16 R4 pilot và 6 Topic Practice mới G10 R01 | Câu kết hợp miền, phản ví dụ không giao Ox; chuyển từ mô hình sang hàm |
| M4 | Nhận biết đồ thị tuần hoàn, mũ/log, miền và xu thế | G11 ChI B03 / ChVI B20 có bank SGK riêng | **Chưa xác minh exact Topic placements/IDs**; cần giữ mỗi canonical đúng nguồn; bài so sánh các họ khác nhau |
| M5 | Giới hạn gần điểm, một/bên, liên tục, lỗ đồ thị | G11 ChV B16/B17 bank hiện hữu | Câu phân biệt \(f(a)\) với giới hạn, điều kiện vá lỗ; đọc hình có điểm loại |
| M6 | Thương sai phân/đạo hàm, hình tiếp tuyến, đơn vị | G11 ChIX B31–B33 bank hiện hữu | Câu quyết định khi nào quy tắc đạo hàm hợp lệ; đạo hàm bậc hai đúng ngữ cảnh |
| M7 | Bảng dấu/biến thiên, tiệm cận, khảo sát, tối ưu | G12 ChI B01–B05 canonical PUBLIC bank hiện hữu | Bài đa ý có lựa chọn phương pháp/kiểm nghiệm; phân biệt local/global; ứng dụng điều kiện |

**Không được claim:** Các nguồn SGK G11/G12 đã được review trong hành trình SGK không tự trở thành Topic Academic PASS. Không đưa những câu SGK đã xem lời giải thành `TOPIC_READINESS` hợp lệ nếu không kiểm soát exposure.

## 3. Bộ ví dụ Practice để kiểm nghiệm cách nhóm — tất cả là SOURCE DRAFT, KHÔNG là câu canonical mới

### Ví dụ nhóm "Đầu vào nào được chấp nhận?" (M1, cơ bản)

Cho \(f(x)=\sqrt{x+1}/(x-2)\). Xác định tập xác định.  
**Cách nghĩ:** Căn bậc hai yêu cầu \(x+1\ge0\); mẫu số yêu cầu \(x-2\ne0\). **Kết quả:** \(D=[-1,+\infty)\setminus\{2\}\). Kiểm lại \(x=-1\) được phép, \(x=2\) không.  
**D6:** Nếu bỏ sót một điều kiện, lập bảng "điều kiện căn / mẫu / mô hình", lấy giao các tập.

### Ví dụ nhóm "Chỉ từ bảng đo liệu có đủ?" (M2, thông hiểu)

Một bảng có ba cặp \((t,T(t))\): \((8,20),(12,26),(16,23)\) (giờ, °C). Có thể kết luận từ 8–12 giờ nhiệt độ tăng **mọi lúc** hay không?  
**Lý do:** Ba lần đo chỉ chứng minh 12h cao hơn 8h, chưa loại trừ nhiệt độ giảm ở một thời điểm giữa hai lần đo. **Đáp án:** Không kết luận hàm đồng biến trên cả khoảng nếu không có dữ liệu/hàm mô hình bổ sung.  
**D6:** So sánh "giá trị tại hai mốc" với "đúng với mọi cặp điểm trong khoảng".

### Ví dụ nhóm "Đỉnh ở ngoài miền" (M3, vận dụng)

Cho \(g(x)=-(x-3)^2+10\), nhưng chỉ xét \(0\le x\le2\). Tìm GTLN/GTNN trên miền đã cho.  
**Lý do chọn:** Dạng đỉnh cho biết đỉnh \(x=3\) không được phép; trên đoạn \([0,2]\), g tăng. **Kết quả:** GTNN \(g(0)=1\), GTLN \(g(2)=9\); không dùng giá trị 10 vì x=3 ngoài miền.  
**D6:** Luôn đánh dấu D trước khi dùng công thức giá trị đỉnh.

### Ví dụ nhóm "Thay đổi theo kiểu nào?" (M4, thông hiểu)

Một đại lượng \(N(n)=50\cdot2^n\) chỉ đo theo kỳ nguyên \(n=0,1,2,\ldots\). Tìm \(N(2)\); giải thích vì sao không mặc định kết luận về thời điểm n=1,5.  
**Kết quả:** \(N(2)=200\). Dữ liệu chỉ xây mô hình trên các kỳ nguyên; phép mở rộng sang n không nguyên đòi giả định thêm.  
**D6:** Trước khi tính, xác định biến rời rạc hay liên tục và đơn vị.

### Ví dụ nhóm "Một lỗ có làm mất giới hạn?" (M5, thông hiểu)

Với \(h(x)=(x^2-1)/(x-1)\) khi \(x\ne1\), đặt thêm \(h(1)=c\). Tìm c để h liên tục tại x=1.  
**Cách nghĩ:** Trên miền x khác 1, h=x+1; giới hạn là 2. **Kết quả:** \(c=2\). Nếu c khác 2, giá trị tại điểm không khớp xu thế gần điểm.  
**D6:** Viết hai dòng riêng \(\lim_{x\to1}h(x)\) và \(h(1)\), rồi so sánh; không thế 1 vào mẫu ban đầu.

### Ví dụ nhóm "Đạo hàm không chỉ là thao tác tính" (M6, vận dụng)

Cho \(s(t)=t^2+2t\) (m), \(t\ge0\) (s). Hãy giải thích ý nghĩa của \(s'(2)\), tìm giá trị và đơn vị.  
**Lý do:** s là vị trí theo thời gian, nên đạo hàm là vận tốc theo chiều dương quy ước. **Kết quả:** \(s'(t)=2t+2\); \(s'(2)=6\) m/s. Không gọi 6 m/s là gia tốc.  
**D6:** Nếu chỉ viết số "6", quay lại diễn giải tên biến, đơn vị và ý nghĩa đạo hàm.

### Ví dụ nhóm "Tìm hình dạng toàn bộ" (M7, tổng hợp)

Cho \(f(x)=(x+2)/(x-1)\). Hãy nêu miền, tiệm cận đứng/ngang và chiều biến thiên trên từng khoảng.  
**Cách nghĩ:** \(f(x)=1+3/(x-1)\); \(D=\mathbb R\setminus\{1\}\); giới hạn cho \(x=1\) là tiệm cận đứng, \(y=1\) là tiệm cận ngang. Đạo hàm \(f'(x)=-3/(x-1)^2<0\) trên D ⇒ **giảm riêng** trên \((-\infty,1)\) và \((1,+\infty)\). Không nối hai nhánh qua điểm x=1 hoặc khẳng định giảm trên toàn D.  
**D6:** Trước bảng dấu, vẽ đường x=1 và gạch bỏ giá trị ấy khỏi miền.

**Lưu ý cho tác giả:** Các ví dụ này là bản thử mô tả **cách nhóm** và quy trình tự học. Trước khi chọn làm new canonical Practice cần đối chiếu 100% source hiện có, chống clone `ITEM_ID`, bổ sung distractor/solution/rubric/FIG/level thực sự và yêu cầu NotebookLM review phần Delta C. Không được gọi 7 câu này là 7 item đã approved.

## 4. Tự kiểm tra: assessment blueprint, KHÔNG công khai RD1

**Mục đích:** Sau khi học *toàn bộ phạm vi Topic được công bố*, kiểm tra khả năng tự giải và chuyển giao độc lập, khác đánh giá cuối chương SGK. Bài đánh giá không buộc học sinh chuyển sang SGK; link ôn lại sau Final Submit phải dẫn vào đúng mảng Topic.

| Nhóm năng lực | Yêu cầu đánh giá | Nguồn và trạng thái |
|---|---|---|
| Biểu diễn và điều kiện | Nhận diện hàm/miền/đọc bảng và đồ thị mới | Có 12 private G10 candidates từ #672 nhưng chỉ cho phạm vi B15–16; **không lấy đủ toàn Topic** |
| Mô hình và đồ thị | Parabol, miền, điểm đặc trưng và lập luận | G10 readiness candidate riêng, kiểm lại exposure |
| Nhận diện các họ hàm | Tuần hoàn, mũ/log, miền và hình đọc | **NEW TOPIC RD1 DESIGN PENDING**, không mang stem/key lên Git |
| Dự đoán gần điểm | Giới hạn, liên tục, chỗ loại khỏi miền | **NEW TOPIC RD1 DESIGN PENDING** |
| Tốc độ biến thiên | Đạo hàm, điều kiện và ý nghĩa vật lý/hình | **NEW TOPIC RD1 DESIGN PENDING** |
| Tổng hợp đồ thị | Biến thiên, tiệm cận, cực trị, tối ưu và giải thích | **NEW TOPIC RD1 DESIGN PENDING** |

**Cổng Q16 bảo vệ:** 
- \(assessment_scope=TOPIC\) riêng; không gộp chứng cứ SGK chapter, không tự chấm tự luận trên giấy.
- Không hiển thị đáp án/key/đúng-sai/gợi ý/AI Tutor trước **Final Submit**; sau Final Submit học sinh mới được xem lý do/đáp án/rubric theo quyền.
- Không lấy nguyên câu đã luyện/xem lời giải thành bằng chứng độc lập; khi tái dùng cần exposure control và phân loại self-check/retake, không tự cấp Mastery.
- `CLIENT_SELF_CHECK_NO_MASTERY` dùng nếu chỉ có cơ chế đối chiếu công khai; không gắn nhãn chính thức nếu engine RD1 chưa được nghiệm thu.
- Private question bodies, keys, rubrics lưu ngoài repo công khai; Git chỉ ghi ID/hash/count/scope đúng Q18, không phỏng đoán tổng item trước review.

## 5. Handoff/QA cần có để chọn bản này cho thử nghiệm thật

- AUTHORING hoàn thiện D1–D6/PED theo từng outcome thật, S1 trang in và số trang PDF, nguồn dùng chung, danh mục problem family và item matrix. Không ép một mức quota câu.
- Đối chiếu lại G10 R01 (#672) nguồn v2.0 (PASS đúng bản gốc) và phần kể chuyện/sắp xếp mới: `DELTA_C_ACADEMIC_MATERIAL` review riêng; G11/G12 Topic modules và thực hành bổ sung đều Academic/PED PENDING.
- Kiểm thử ở Chuyên đề học sinh sẽ **làm ngay trên cùng nhánh**, không dùng link SGK làm điều kiện để xem kiến thức, ví dụ, thực hành hay lời giải. Chỉ cần URL SGK tự chọn cho mục "Liên quan".
- Golden R4 / Adaptive Tabs v2 và ba màn Kiến thức/Luyện tập/Tự kiểm tra đủ dùng; kiểm AP1–AP5 từ RELEASE sau khi có học liệu approved, không tạo Golden mới.
- Khi có nguồn học thuật FULL: file `Temp_*.md` và prompt 3–6 câu / từ 3 file review thì ZIP chứa toàn bộ file `Temp_`; NotebookLM **5 Permanent v2.1**; academic+PED đúng snapshot; source SHA/receipt/handoff V2+ready/REGISTER; owner authority còn tách khỏi release.

**CHECKPOINT:** `TOPIC_PRACTICE_BLUEPRINT_PREPARED` · `NEW_PUBLIC_ITEMS_APPROVED=0` · `NEW_PRIVATE_RD1_APPROVED=0` · `TOPIC_FULL_CONTENT_READY=NO` · `MERGE_DEPLOY=NO`.
