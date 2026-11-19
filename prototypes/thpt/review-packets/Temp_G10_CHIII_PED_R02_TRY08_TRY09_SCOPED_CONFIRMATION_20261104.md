# Temp · G10 SGK Chương III R02 — xác nhận đúng snapshot TRY08 và TRY09 (scoped only)

PACKET_ID: G10-SGK-CHIII-PED-R02-TRY08-TRY09-SOURCE-PARITY-20261104
ROLE: NOTEBOOKLM_TARGETED_SOURCE_RECEIPT_ONLY
ONE_STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18
PERMANENT_SOURCES: EXACTLY_5_THPT_V2.1
S1: SGK/SBT KNTT Toán 10 Tập Một B05 pp33–37, B06 pp38–43; chapter pp44–45; SBT B05 pp29–33, B06 pp34–39, chapter pp40–44 (printed)
FROZEN_R02_SOURCE_GIT_BLOB: f7bbffc8e06fdde446f15016f837541e216225b0
FROZEN_R02_SOURCE_SHA256: aa0f6400e3276eadfb28332d1916fef18466afac649de925ee4a7454e785e774
ORIGINAL_R02_SOURCE_BYTES: 34884
FROZEN_R01_SOURCE_GIT_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f
FROZEN_R01_REVIEW_BLOB: 3fb823c4353d368ae5a9c14f03c7309933d47e6f
OWNER_PASTED_REVIEW_GIT_BLOB: 62ab31e03554241883a41d2e66c1cc7f5ab93f60
TARGETED_ITEM_IDS: THPT-G10-CHIII-TRY08, THPT-G10-CHIII-TRY09
CHANGES_TO_CANONICAL_ITEMS: NONE
PUBLIC_FORMATIVE_ONLY: YES
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Vì sao yêu cầu xác nhận đúng hai câu này?

NotebookLM đã báo Academic/PED PASS 10/10 outcomes và P0/P1/P2=0 cho bản review R02. Kết quả nội dung PED1–PED6 và các câu TRY01–07, TRY10 tương ứng nguồn R02; tuy nhiên phần item cụ thể của TRY08/TRY09 trong báo cáo lại khác file Temp đã cung cấp:

- TRY08 nguồn đã gửi: **hai tam giác có b=6,c=8 và góc xen giữa A lần lượt 30° và 150°, hỏi diện tích và giải thích vì sao bằng nhau**. Báo cáo đã phản biện một câu khác: **a=6,b=8,C=30°; nếu chu vi 24 thì tính r**. Phương án trong báo cáo còn mâu thuẫn dữ kiện: cạnh thứ ba xác định từ cos và chu vi không thể đồng thời là 24. Không sao chép bản câu khác từ báo cáo vào nguồn canonical.
- TRY09 nguồn đã gửi: **bộ 3-4-5, tính S và r; bộ 2-3-6, phân tích vì sao không phải tam giác**. Báo cáo đã phản biện câu **bộ 5-6-7, tính p và S**. Đây không phải cùng một item mặc dù dùng chung ITEM_ID.

Không yêu cầu sửa học liệu hay mở lại R01. Reviewer chỉ cần xác nhận **đúng nguyên văn bản gốc bên dưới** theo mỗi ITEM_ID, kiểm tra đáp án/điều kiện, lý do sư phạm, link D6 và xác nhận vị trí trước Core. Nếu cả hai đạt, bổ sung một receipt scoped để khóa nguồn; không yêu cầu rà soát lại 8 câu và 18 câu R01 đã PASS.

## 2. Trích NGUYÊN VĂN hai mục từ source R02 bất biến

### 08. G10-B06-AREA_SIN — THPT-G10-CHIII-TRY08

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-AREA_SIN
ITEM_ID: THPT-G10-CHIII-TRY08
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY08-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-C02

**PED1 · Vì sao cần học.** Nếu hai cạnh và góc xen giữa đã biết nhưng chưa biết đường cao, liệu tính được diện tích mà không cần dựng và đo đường cao trực tiếp?

**PED2 · Kiến thức tiền đề.** Diện tích tam giác S=1/2×đáy×chiều cao. Với một cạnh c làm đáy, chiều cao từ đầu cạnh b tạo góc A có độ lớn b sinA; góc trong nằm (0°,180°) nên sinA>0.

**PED3 · Hình thành bản chất trước công thức.** Từ chiều cao h=b sinA, suy S=(1/2)bc sinA. Điều này giải thích cả việc hai góc bù có cùng sin nên khi giữ nguyên hai cạnh kề, diện tích có thể bằng nhau dù cạnh đối diện đổi chiều dài.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Trong `FIG-G10-B06-01`, xem góc A giữa b và c, hình chiếu vuông góc cho chiều cao của đỉnh C xuống đường chứa cạnh c. Nếu A tù, chân đường cao nằm trên phần kéo dài của đáy; diện tích vẫn dương.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Chọn công thức diện tích theo sin cho SAS; khi biết cả ba cạnh mà không biết góc, Heron thuận tiện hơn. Không thay nhầm góc không xen giữa b,c.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Hai tam giác đều có hai cạnh kề b=6, c=8, nhưng góc xen giữa lần lượt A=30° và A=150°. Tính diện tích của từng tam giác và giải thích tại sao bằng nhau.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** Cả hai có S=(1/2)·6·8·sin30°=(1/2)·6·8·sin150°=12 đơn vị diện tích, do sin150°=sin30°. Chúng không nhất thiết có cùng cạnh thứ ba.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-C02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 09. G10-B06-HERON — THPT-G10-CHIII-TRY09

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-HERON
ITEM_ID: THPT-G10-CHIII-TRY09
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY09-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-P02

**PED1 · Vì sao cần học.** Chỉ biết ba cạnh mảnh đất hình tam giác mà chưa biết góc hoặc đường cao, vẫn có thể tính diện tích được hay không? Và ba số đo nào thực sự lập được một tam giác?

**PED2 · Kiến thức tiền đề.** Ba cạnh dương của tam giác phải thỏa tổng hai cạnh lớn hơn cạnh còn lại; nửa chu vi p=(a+b+c)/2. Diện tích S>0, r là bán kính nội tiếp và R là ngoại tiếp, không tráo hai ký hiệu.

**PED3 · Hình thành bản chất trước công thức.** Heron dùng dữ liệu SSS: S=√[p(p−a)(p−b)(p−c)], nhưng điều kiện tam giác phải được kiểm trước. Khi đã có S, công thức S=pr cho bán kính nội tiếp; công thức S=abc/(4R) cho ngoại tiếp.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Vẽ thử tam giác cạnh 3,4,5 so với bộ 2,3,6. Bộ thứ hai không thể khép cạnh thành tam giác vì 2+3<6. Một hình chữ V không khép kín không có “diện tích tam giác” để Heron tính.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Với ba cạnh SSS, kiểm bất đẳng thức tam giác, tính p rồi Heron; nếu dữ kiện đã cho góc xen giữa, cân nhắc công thức theo sin để giảm biến đổi. Không tự lấy căn một biểu thức âm và gọi là diện tích thực.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Bộ ba cạnh (3,4,5) cho diện tích S và bán kính nội tiếp r bao nhiêu? Bộ ba (2,3,6) có áp dụng Heron cho một tam giác được không? Giải thích.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** Với 3,4,5: p=6, S=√(6·3·2·1)=6, r=S/p=1. Với 2,3,6: 2+3<6, không lập thành tam giác nên không có diện tích tam giác hợp lệ.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-P02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

## 3. Yêu cầu kết luận tối thiểu

Trả một receipt cho hai ITEM_ID kèm original source SHA256/Git blob trên, verdict riêng ACADEMIC/PED mỗi câu và Q01–Q18 chỉ trong phần tác động. Ghi rõ điểm khác giữa source gốc và hai item trong báo cáo trước, loại trừ bản câu khác với canonical. Nếu PASS, `MINIMAL_DELTA=0` là hợp lệ vì học liệu không đổi; nếu REVISE chỉ đề xuất sửa đúng câu bị lỗi, không đánh mất PASS của 8 câu khác.
