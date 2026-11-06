# SGK Toán 12 KNTT Tập Hai — Học liệu HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM (bản tự biên soạn R00)
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
CONTENT_READY: NO
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
ITEM_POLICY: ONE_CANONICAL_ITEM_ID_ONE_QUESTION
LESSON_ID: G12-SGK-EXP02
SOURCE_ROLE: ORIGINAL_AUTHORED
EXPERIENCE_LEARNING_ROLE: SGK_EXPERIENCE_CORE_PRACTICE_NOT_NEW_SGK_MANDATORY_CORE
RD1_PRIVATE: NOT_DEFINED_FOR_EXPERIENCE; SGK_CHAPTER_READINESS_REMAINS_SEPARATE

**Nguồn thẩm quyền S1:** SGK Toán 12 KNTT Tập Hai SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`, HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM trang in **81–89** (PDF 1-based **83–91**). Cụ thể thực hành nguyên hàm/tích phân GeoGebra và phương pháp hình thang trang **81–84**; vẽ đồ họa 3D GeoGebra với tam giác Penrose/mặt Möbius trang **85–89**. Nội dung/bài tập dưới đây là sáng tạo của AUTHORING, không chép SGK và không khẳng định đã thực hiện GeoGebra trên thiết bị thật.

**Phạm vi:** đây là **hai trải nghiệm SGK**, KHÔNG phải Bài 20/21 mới, không phải Chương VII, không tạo Topic hoặc Core SGK mới ngoài phạm vi chương trình. Bài thực hành yêu cầu thao tác công cụ *hoặc* tính toán/diễn giải thay thế cho học sinh chưa truy cập được GeoGebra; hai hình thức đều có thể học độc lập. Câu luyện tập có lời giải chỉ được lộ sau thao tác đối chiếu phù hợp, không cung cấp đánh giá Mastery.

# Thực hành 2: Vẽ 3D bằng GeoGebra — ảo giác Penrose và mặt Möbius

## Vì sao cần học? — PED1
Một hình 3D được nhìn qua màn hình 2D nên góc nhìn có thể tạo ảo giác không tồn tại trong cấu hình không gian thật. GeoGebra 3D giúp ta xây mô hình tái lập và **phản biện bằng tọa độ**, từ tam giác Penrose (ảo giác do hình chiếu) đến mặt Möbius (dải bị vặn nửa vòng).

## Tiền đề — PED2
Điểm Oxyz, đoạn thẳng và mặt phẳng trong 3D, phép chiếu lên Oxy, đơn vị đo, tam giác/lăng trụ, lượng giác cơ bản nếu chọn phương án Möbius có tham số.

## Bản chất trước công thức — PED3
**Tam giác Penrose:** đường nét trên màn hình trông khép kín nhưng cấu hình thật có thể đứt rời về độ sâu. Phải kiểm tọa độ/giao nhau trong Oxyz, không chỉ screenshot. **Mặt Möbius:** một dải vật liệu nối hai đầu sau vặn nửa vòng; tham số hai biên bị đổi dấu sau một chu kỳ (`v ↔ −v`). Đây là trải nghiệm hình học không gian có mở rộng tôpô, **không phải định lí Core cần học thuộc**.

## Đọc hình — PED4
- PROJECTION: hai đoạn z=0 và z=2 tách nhau trong không gian; khi nhìn xuống Oxy thì trùng nét. Sự mất chiều sâu chính là nguồn ảo giác.
- MOBIUS: một dải 3D với mép ghép đảo chiều; một ảnh không chứng minh tính một mặt, cần đọc công thức ghép `M(0,v)=M(2π,−v)`.

## Thực hành có thể tái lập — PED5
1. Mở **GeoGebra 3D**. Với lăng trụ, nhập từng điểm tọa độ trong Input/CAS hoặc bằng công cụ Point; tạo hai tam giác bằng `Polygon`, nối các đỉnh tương ứng hoặc dùng lệnh tạo lăng trụ tương ứng phiên bản hiện có.
2. Với ảo giác Penrose, dựng các phần thanh thẳng riêng và điều chỉnh góc nhìn sao cho hình chiếu có vẻ liền; tiếp đó **xoay góc nhìn** và chỉ ra vị trí các thanh không nối thật. Không đánh tráo hiệu ứng chiếu thành một hình tam giác 3D thật.
3. Với Möbius, tham số tham khảo: `M(u,v)=((1+v cos(u/2)/2)cos(u),(1+v cos(u/2)/2)sin(u),v sin(u/2)/2)`, `0≤u≤2π`, `−1≤v≤1`; dùng `Surface(x(u,v),y(u,v),z(u,v),u,0,2π,v,−1,1)` theo cú pháp phiên bản. Xoay để xem dải và giải thích quy tắc ghép mép, thay vì tự gán đặc tính tôpô chỉ từ ảnh.
4. Nếu không dùng được GeoGebra: dùng bản vẽ dưới đây + tính tọa độ, chứng minh hai hình chiếu có thể trùng nhưng hai đoạn 3D không giao; kiểm công thức ghép Möbius. **Đây là đường tự học độc lập** không phụ thuộc liên kết bên ngoài.
5. Lưu tọa độ, tham số, hai góc nhìn và giải thích điều kiện/giới hạn của mô hình. Không đoán số liệu từ một ảnh màn hình.

## Tự thử TRƯỚC Core (tự mở đáp án; không ghi Mastery)
- `G12-SGK-EXP02-T01`: P(1,2,0),Q(1,2,3) có cùng ảnh chiếu xuống Oxy không? **Tự mở:** có; ảnh chiếu đều (1,2), nhưng khoảng cách thực là 3.
- `G12-SGK-EXP02-T02`: Dải Möbius vặn nửa vòng, khi đi hết u=0 đến u=2π thì v ghép với v hay −v? **Tự mở:** ghép với −v, giải thích sự đảo bề ngang.

## Hình minh họa nguồn gốc tự vẽ
- `Temp_FIG_G12_XP02_PROJECTION_R00.png` — hình chiếu giống nhau của hai đoạn tách nhau theo z.
- `Temp_FIG_G12_XP02_MOBIUS_R00.png` — mô hình tham số dải Möbius.

## Ma trận kiến thức → ví dụ D2 → Core/Practice/Application/Written → D6

### G12-SGK-EXP02-O01 — Phân biệt mô hình 3D và ảnh chiếu 2D gây ảo giác
**Vì sao:** Một ảnh có thể làm ta tin các đoạn nối nhau dù cấu hình 3D không nối.

**Tiền đề:** Biết biểu diễn điểm và trục Oxyz và khác biệt góc nhìn phối cảnh.

**Bản chất:** Hình Penrose lý tưởng tạo mâu thuẫn độ sâu nếu đòi là một tam giác vật chất liên tục với các thanh vuông chuẩn; dựng mô hình 3D có thể tạo ảo giác từ góc nhìn riêng.

**Lý do chọn phương pháp:** Đọc ảnh chiếu, xoay 3D để phát hiện chỗ lệch/tách rời; gọi đó là dựng ảo giác, không khẳng định vật vô khả thành khả.

**Điều kiện/giới hạn:** Ảnh 2D không đủ khẳng định hai điểm có cùng tọa độ z; góc nhìn khác làm lộ ảo giác.

**Ví dụ giải mẫu `EX-G12-EXP02-O01` (D2).** Hai đoạn trong Oxyz A(0,0,0)→B(1,0,0), C(0,0,2)→D(1,0,2) có ảnh chiếu xuống Oxy trùng nhau. Chúng có giao nhau không?

**Lời giải có suy luận:** Không; z=0 và z=2 nên hai đoạn rời nhau dù ảnh chiếu top-view trùng.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C01`** — Hai điểm P(1,2,0) và Q(1,2,3) có hình chiếu lên Oxy giống không?

*Đáp án tự mở:* Có, đều là (1,2).

**Practice `THPT-G12-EXP02-P01`** — Vì sao một hình tam giác Penrose trông khép kín ở một góc không chứng minh mô hình 3D đó thực sự khép kín?

*Đáp án tự mở:* Vì ảnh chiếu bỏ mất độ sâu và có thể che khuất các chỗ nối không khớp.

**Application `THPT-G12-EXP02-A01`** — Sau khi xoay một mô hình Penrose 3D, thấy khe hở. Phát biểu nhận xét toán học.

*Đáp án tự mở:* Mô hình chỉ khép kín trong hình chiếu được chọn, không khép kín về tọa độ không gian.

**Written `THPT-G12-EXP02-W01`** — Dựng lập luận với hai đoạn song song, cùng hình chiếu Oxy nhưng khác z và kết luận về tam giác Penrose.

*Lời giải chuẩn tự đối chiếu:* Hai đoạn cách nhau 2 đơn vị theo z, ảnh chiếu Oxy trùng nhau; góc nhìn khác thấy tách; Penrose là ảo giác chiếu.

**Rubric /5:** 1đ nêu hai hình chiếu; 1đ chỉ ra z khác; 1đ kết luận không cắt; 1đ liên hệ ảo giác; 1đ nêu cần đổi góc nhìn để kiểm.

**D6 HELP `HELP-G12-EXP02-O01` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Phân biệt một hình chiếu trong Oxy với toàn bộ điểm trong Oxyz. (2) Hai đoạn có cùng (x,y) nhưng khác z vẫn không giao nhau. (3) Đoạn z=0 và đoạn z=2 cho cùng bóng xuống Oxy mà cách nhau 2. (4) Một ảnh góc nhìn Penrose có thể che khe nối; không biến ảo giác thành vật thật. (5) Dùng tọa độ/góc nhìn khác xác minh điểm cắt của câu gốc. Không ghi Mastery.

### G12-SGK-EXP02-O02 — Dựng khối lăng trụ tam giác và kiểm bằng tọa độ
**Vì sao:** Muốn dựng hình 3D có thể kiểm chứng, cần các điểm, cạnh và mặt được xác định chính xác.

**Tiền đề:** Tọa độ Oxyz, véc-tơ, khoảng cách, mặt phẳng tọa độ; lệnh Point/Polygon/Prism tùy phiên bản GeoGebra.

**Bản chất:** Lăng trụ tam giác có 6 đỉnh, 9 cạnh, 5 mặt; diện tích đáy × chiều cao cho thể tích.

**Lý do chọn phương pháp:** Dựng A,B,C trên z=0 rồi A′,B′,C′ trên z=h; vẽ đa giác hai đáy và ba mặt bên, kiểm khoảng cách.

**Điều kiện/giới hạn:** Các đáy tam giác phải không thẳng hàng, hai đáy tương ứng song song/bằng nhau; kiểm điểm đồng phẳng.

**Ví dụ giải mẫu `EX-G12-EXP02-O02` (D2).** Dựng A(0,0,0),B(2,0,0),C(0,2,0), A′(0,0,3),B′(2,0,3),C′(0,2,3). Tính thể tích.

**Lời giải có suy luận:** Diện tích tam giác đáy =2, h=3 nên V=6 (đv³); 6 đỉnh, 9 cạnh, 5 mặt.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C02`** — Lăng trụ tam giác có bao nhiêu đỉnh?

*Đáp án tự mở:* 6.

**Practice `THPT-G12-EXP02-P02`** — Vì sao A,B,C không được thẳng hàng khi tạo lăng trụ tam giác?

*Đáp án tự mở:* Đáy sẽ suy biến có diện tích bằng 0, không tạo khối lăng trụ thực.

**Application `THPT-G12-EXP02-A02`** — Với cùng đáy, thay h=4 thì thể tích bằng bao nhiêu?

*Đáp án tự mở:* V=2×4=8 (đv³).

**Written `THPT-G12-EXP02-W02`** — Từ bộ 6 đỉnh đã cho, mô tả thao tác dựng và kiểm ba tính chất đáy/song song/thể tích.

*Lời giải chuẩn tự đối chiếu:* Hai tam giác đáy song song và bằng nhau, các cạnh bên (0,0,3), V=6.

**Rubric /5:** 1đ dựng đúng 6 đỉnh; 1đ nối 9 cạnh; 1đ kiểm hai mặt đáy; 1đ tính Sđáy=2; 1đ V=6.

**D6 HELP `HELP-G12-EXP02-O02` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Xác định ba đỉnh đáy không thẳng hàng trước khi tạo khối. (2) Khai báo ba đỉnh phía trên bằng cùng véc-tơ tịnh tiến. (3) Đáy A(0,0,0),B(2,0,0),C(0,2,0): diện tích=2. (4) Chiều cao 3 cho V=6; hình có 6 đỉnh, 9 cạnh, 5 mặt. (5) Quay về mô hình của bạn, kiểm 6 tọa độ và không trộn diện tích với thể tích. Không ghi Mastery.

### G12-SGK-EXP02-O03 — Chọn góc nhìn và kiểm chứng tính thật của hình dựng
**Vì sao:** Nhìn mô hình từ nhiều góc giúp phân biệt kết luận thật với hiệu ứng phối cảnh phụ thuộc người quan sát.

**Tiền đề:** Biết phép chiếu và thao tác xoay, ẩn hiện đối tượng trong khung 3D.

**Bản chất:** Một hướng nhìn có thể trùng nét; xoay để lộ sai khác, dùng tọa độ làm kiểm chứng độc lập ảnh chụp.

**Lý do chọn phương pháp:** Xuất ít nhất hai ảnh góc nhìn, mô tả góc/quy tắc nhìn và lưu tọa độ; so sánh trước–sau xoay.

**Điều kiện/giới hạn:** Hình hiển thị có thể bị che khuất; ảnh không thay thế điều kiện giao cắt trong 3D.

**Ví dụ giải mẫu `EX-G12-EXP02-O03` (D2).** Hai điểm M(1,0,0),N(1,0,3) cùng hình chiếu Oxy. Sau khi xoay góc nhìn sang bên, điều gì đổi?

**Lời giải có suy luận:** Khoảng cách hình chiếu thường thay đổi; tọa độ/độ dài MN=3 vẫn bất biến.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C03`** — Độ dài MN của M(1,0,0),N(1,0,3) là bao nhiêu?

*Đáp án tự mở:* 3.

**Practice `THPT-G12-EXP02-P03`** — Ảnh chụp màn hình tại một góc cho thấy hai đoạn dính nhau. Đó có đủ để khẳng định chúng cắt nhau không?

*Đáp án tự mở:* Không, cần điều kiện giao nhau trong Oxyz hoặc kiểm bằng nhiều góc.

**Application `THPT-G12-EXP02-A03`** — Nếu hai điểm khác nhau ở đúng tọa độ z, nên chọn góc nhìn nào để kiểm?

*Đáp án tự mở:* Nhìn bên, mặt đứng xOz hoặc yOz để thấy chênh lệch z.

**Written `THPT-G12-EXP02-W03`** — Thiết kế thủ tục kiểm mô hình ba thanh tạo hình Penrose sau khi dựng, tránh kết luận sai từ một góc.

*Lời giải chuẩn tự đối chiếu:* Lưu tọa độ, chụp góc gây ảo giác, xoay 90° kiểm khe, xác minh giao điểm bằng tọa độ.

**Rubric /5:** 1đ nêu ảnh gốc và quy tắc nhìn; 1đ lưu tọa độ; 1đ xoay kiểm; 1đ xem chỗ nối 3D; 1đ kết luận giới hạn của ảnh.

**D6 HELP `HELP-G12-EXP02-O03` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Tọa độ Oxyz không đổi khi bạn chỉ xoay camera. (2) Để thấy độ cao z, chọn góc nhìn xOz hoặc yOz thay vì thẳng từ trên xuống. (3) M(1,0,0), N(1,0,3): cùng hình chiếu Oxy nhưng MN=3. (4) Nếu screenshot cho thấy trùng nét, kết luận chỉ là về hình chiếu. (5) Lưu hai góc nhìn và một kiểm chứng giao/không giao bằng tọa độ. Không ghi Mastery.

### G12-SGK-EXP02-O04 — Khám phá mặt Möbius với tham số và ghép biên
**Vì sao:** Một dải vặn nửa vòng là ví dụ hấp dẫn về việc mô hình 3D chứa cấu trúc không giống băng giấy thông thường.

**Tiền đề:** Lượng giác cơ bản, tham số u và v, tọa độ Oxyz; trải nghiệm 3D ở mức mở rộng.

**Bản chất:** M(u,v)=((1+(v/2)cos(u/2))cos u,(1+(v/2)cos(u/2))sin u,(v/2)sin(u/2)), u∈[0,2π],v∈[-1,1]. Mép u=0 và u=2π phải ghép v↔−v.

**Lý do chọn phương pháp:** Nhập lệnh Surface tham số tương ứng trong GeoGebra 3D; xoay và dùng hai màu/đường biên để kiểm một vòng xoắn; giải thích biên bằng M(0,v)=M(2π,−v).

**Điều kiện/giới hạn:** Không suy tính một phía/một biên chỉ bằng một ảnh; tham số hóa có đường cắt giả tại u=0/2π, phải nhận dạng ghép mép.

**Ví dụ giải mẫu `EX-G12-EXP02-O04` (D2).** Với tham số trên, chứng minh M(0,1)=M(2π,−1).

**Lời giải có suy luận:** M(0,1)=(3/2,0,0); M(2π,−1)=(3/2,0,0).

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C04`** — Tại u=0, v=0, điểm M là gì?

*Đáp án tự mở:* M(0,0)=(1,0,0).

**Practice `THPT-G12-EXP02-P04`** — Vì sao mặt vặn nửa vòng có mô tả ghép v với −v khi đi một vòng?

*Đáp án tự mở:* Sau một vòng quanh tâm, chiều ngang của dải bị đảo; hai mép nối đổi hướng.

**Application `THPT-G12-EXP02-A04`** — Tính M(0,−1) và M(2π,1).

*Đáp án tự mở:* Cùng (1/2,0,0).

**Written `THPT-G12-EXP02-W04`** — Trình bày công thức M, kiểm hai cặp mép ghép và giải thích vì sao ảnh 3D không đủ chứng minh mọi tính chất tôpô.

*Lời giải chuẩn tự đối chiếu:* M(0,±1)=M(2π,∓1), hai cặp hoán đổi; kiểm cấu trúc cần quy tắc dán mép.

**Rubric /5:** 1đ nêu đúng miền tham số; 1đ công thức tọa độ; 1đ tính cặp v=1; 1đ tính cặp v=−1; 1đ giải thích ghép đảo chiều.

**D6 HELP `HELP-G12-EXP02-O04` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Nhớ miền u∈[0,2π],v∈[−1,1] và nửa vòng xoắn. (2) Viết M(0,v) và M(2π,−v), chứng minh chúng bằng nhau. (3) Kiểm v=1: cả hai cùng (3/2,0,0). (4) Kiểm v=−1: cả hai cùng (1/2,0,0); đừng suy từ một ảnh chụp. (5) Với bài của bạn, chú giải ghép mép đảo dấu v và xác định điều gì là quan sát/giả thuyết. Không ghi Mastery.

### G12-SGK-EXP02-O05 — Thiết kế báo cáo mô hình 3D tái lập và nhận diện giới hạn
**Vì sao:** Trải nghiệm hình học phải tạo khả năng trình bày kiểm chứng, không chỉ một hình đẹp.

**Tiền đề:** Hiểu mô hình tọa độ, thao tác lưu tệp và chú thích hình vẽ.

**Bản chất:** Một báo cáo tái lập cần giả thiết, tọa độ/tham số, công cụ/lệnh, hai góc nhìn kiểm chứng, quan sát và giới hạn.

**Lý do chọn phương pháp:** Đưa checklist, lưu GeoGebra ggb, gắn alt-text/caption, giải thích dữ liệu nào đo được và cái nào chỉ là ảo giác.

**Điều kiện/giới hạn:** Không lấy một screenshot thay bằng chứng rằng tam giác Penrose là vật thể thật hoặc mặt Möbius đã được kiểm chứng mọi tính chất.

**Ví dụ giải mẫu `EX-G12-EXP02-O05` (D2).** Viết kế hoạch kiểm 3D Penrose: chọn góc nhìn thuận/đối, tọa độ rời nhau và giải thích kết luận.

**Lời giải có suy luận:** Bản tái lập cần điểm/cạnh/mặt, 2 ảnh, góc nhìn, minh chứng không nối thật trong 3D.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C05`** — Báo cáo mô hình tái lập tối thiểu có nên lưu thông số tọa độ không?

*Đáp án tự mở:* Có; tọa độ/tham số là chứng cứ có thể kiểm độc lập.

**Practice `THPT-G12-EXP02-P05`** — Nếu phần mềm đổi giao diện hoặc ngôn ngữ menu, cách nào giữ báo cáo tái lập?

*Đáp án tự mở:* Lưu lệnh, dữ liệu và quy tắc dựng, không chỉ nhãn nút trên giao diện.

**Application `THPT-G12-EXP02-A05`** — Một mô hình có 1 ảnh duy nhất ở góc nhìn đẹp. Cần thêm gì để kiểm tra 3D?

*Đáp án tự mở:* Thêm góc nhìn khác và dữ liệu tọa độ/quan hệ giao–song song.

**Written `THPT-G12-EXP02-W05`** — Lập báo cáo 6 mục về một mô hình Möbius hoặc ảo giác Penrose và giải thích giới hạn suy luận.

*Lời giải chuẩn tự đối chiếu:* Mục tiêu; tham số/tọa độ; quy trình; hai góc; kiểm hình học; hạn chế.

**Rubric /5:** 1đ giả thiết/mục tiêu; 1đ dữ liệu tọa độ/tham số; 1đ quy trình tái lập; 1đ hai góc nhìn & kiểm; 1đ giới hạn hợp lí.

**D6 HELP `HELP-G12-EXP02-O05` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Viết mục tiêu và giả thiết mô hình thành câu có thể kiểm. (2) Ghi tọa độ/tham số và các bước dựng theo thứ tự để tái lập. (3) Chụp 2 góc nhìn; từ chúng hãy chỉ ra chỗ nối/tách nhau hoặc mép ghép. (4) Phân loại điều chứng minh từ tọa độ và điều chỉ quan sát từ hiển thị. (5) Thử đưa báo cáo cho người khác làm lại; sửa mọi điểm thiếu đầu vào. Không ghi Mastery.

## Kết thúc trải nghiệm — tự kiểm tra thao tác và giải thích
Trả lời lần lượt các câu Application theo thứ tự đã học. Đây là **secondary placement** của 5 ID `-A01` đến `-A05` đã tồn tại, không tạo `ITEM_ID` mới. Tự đánh giá chất lượng mô hình và lời giải; công khai chỉ `CLIENT_SELF_CHECK_NO_MASTERY`. Không gọi đây là đề RD1 kín hay `SGK_CHAPTER_READINESS`; không hiện lời giải/rubric trước thao tác tự mở/Final Submit theo hợp đồng RELEASE.
