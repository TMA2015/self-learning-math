# G10 SGK Chương I · B01–B02 · R03 full-chapter AUTHORING source candidate

PACKET_ID: G10-SGK-CHI-FULL-R03-CANDIDATE-20261104
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE_CANDIDATE: FULL_LEARNING_PATH
CONTENT_READY: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
R01_FROZEN_GIT_BLOB: 95a554e31a613b8e215679fe6790738473d598df
R02_FROZEN_GIT_BLOB: 6e35f036329b11465189a2256cfbfd536e95993c
PUBLIC_CHI_FINAL_SELF_CHECK_GIT_BLOB: bef97279707fa1bdfc00db4e0421cee6df0572a9
MAIN_SOURCE_COMMIT: 440e3b6970da21e201d7a2fb862b4705cb6c8394

## Đúng thứ tự học Chương I

Mỗi outcome: đọc cầu nối R02 ở Phần A (WHY → tiền đề → bản chất trước công thức → lý do phương pháp → Tự thử tự mở giải và D6), sau đó quay về Kiến thức và ví dụ D2 R01, rồi Core/Practice/Written trong Phần B, cuối cùng tự kiểm tra 14 câu Phần C theo chế độ Final Submit công khai không Mastery.

Phần A/B dưới đây bảo toàn nguyên văn nguồn R02/R01 đã phản biện theo các snapshot riêng. Phần C sao nguyên văn các trường câu/đáp án/lời giải/rubric từ JSON client công khai đã được reviewer xét ở snapshot ChI lịch sử; chỉ đổi format cho phép đọc theo chương, không đổi nội dung toán. Bản hợp nhất mới là SOURCE CANDIDATE, không được suy thành PASS mới hoặc hành trình website đã tích hợp.

SGK Toán 10 KNTT Tập Một B01 trang in 5–11, B02 12–19, cuối chương 20–21; SBT cùng tập B01 5–7, B02 8–11, cuối chương 12–15. SGK PDF SHA256 3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2; SBT SHA256 2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1.

---

# PHẦN A — Concept-first và 11 First Try R02 (nguyên văn)

# Temp · Toán 10 KNTT ChI B01–B02 — PED concept-first / First Try Delta C R02 (11 outcomes)

PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
PACKET_KIND: AUTHORING_ACADEMIC_MATERIAL_DELTA_C_REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
PERMANENT_SOURCES_VERSION: THPT-v2.1 — exactly 5 permanent sources, do not mix v2.0
S1: SGK+SBT KNTT Toán 10 Tập Một ChI, printed pages SGK 5–21 and SBT 5–15
SOURCE_ORIGINAL_R01_BLOB: 95a554e31a613b8e215679fe6790738473d598df
HISTORIC_INDEPENDENT_R01_D1_D6_RECEIPT_BLOB: fece80dcb4b0e17d369e2ecbe12e8d13b672281a
SOURCE_LIVE_MAIN_AT_AUDIT: 4fe8de616928d687d7718f48770f98502538ac68
SOURCE_SGK_T1_PDF_SHA256: 3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2
SOURCE_SBT_T1_PDF_SHA256: 2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1
ACADEMIC_VERDICT_NEW: NOTEBOOKLM_PENDING
PED_VERDICT_NEW: NOTEBOOKLM_PENDING
CONTENT_READY: NO
PRIVATE_RD1_COUNT_NEW: 0
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

> **Không viết lại gói R01 đã PASS.** Đây là lớp **bổ sung nguồn candidate riêng** cho 11 outcome về vì sao học, tiền đề, trực giác trước quy tắc, lựa chọn phương pháp, hoạt động tự thử trước Core và cách tự đối chiếu/khắc phục. 18 câu công khai R01 (16 D3 + 2 Written/Anchor), 7 ví dụ D2, 2 SVG và 4 HELP đã được review giữ nguyên nguyên văn/ID/rubric. Không đòi review lại các phần ấy nếu không có lỗi học thuật có chứng cứ. 11 câu First Try **mới và khác** được gán item_id canonical ứng viên duy nhất (không coi là câu RD1; không nằm trong bộ 141 câu tự đối chiếu trên website).

## Quy trình tự học áp dụng thống nhất (chưa tích hợp website)

Học sinh thấy **VÌ SAO CẦN HỌC → TIỀN ĐỀ → HIỂU BẢN CHẤT → QUY TẮC & GIỚI HẠN → TỰ THỬ NGẮN**. Các đáp án bên dưới chỉ mở khi học sinh tự chọn đối chiếu sau khi đã thử; do RELEASE kiểm soát giao diện và hiển thị. Học sinh làm tiếp Core/Luyện tập dùng các ID R01 gốc; nếu sai quay lại HELP và ví dụ liên quan. **Không** ghi Skill Mastery, không xếp 11 câu này vào phép kiểm tra độc lập hoặc chuẩn RD1, không hiển thị đáp án trước Final Submit của chế độ tự kiểm tra cuối chương.

## S1 và khả năng dùng lại học liệu

- SGK in B01 pp5–11 = PDF1 pp6–12; B02 pp12–19 = PDF1 pp13–20; ôn tập cuối chương pp20–21 = PDF1 pp21–22.
- SBT in B01 pp5–7 = PDF1 pp6–8; B02 pp8–11 = PDF1 pp9–12; bài tập cuối chương pp12–15 = PDF1 pp13–16.
- Nguồn gốc kiểm trực tiếp ngày 04/11/2026 qua ảnh scan, không OCR: B01 mở SGK trang in 5 có hình hỏi số con vật nhìn thấy để dẫn vào mệnh đề/khẳng định; B02 mở SGK trang in 12 có hai nhóm thành viên theo chuyên đề và bài hỏi thành viên trùng. Các bài thử dưới đây **tự biên soạn nội dung khác SGK**, chỉ bám nhóm năng lực; không chép câu hoặc hình SGK.
- Figure đã review `FIG-G10-B01-01` (số chia hết) và `FIG-G10-B02-01` (bốn miền Venn 40 học sinh) có thể được dùng làm ví dụ **riêng**, không được gắn số của chúng vào bài thử 32 học sinh.

## 11 cầu nối sư phạm theo từng outcome (nguồn candidate review)


### 01. G10-B01-PROPOSITION — Mệnh đề và mệnh đề chứa biến

LESSON_ID: G10-SGK-B01  
OUTCOME_ID: G10-B01-PROPOSITION  
TRY_ID: TRY-G10-CHI-01  
ITEM_ID: THPT-G10-CHI-TRY01  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B01-01  
REUSE_ORIGINAL_ITEM: THPT-G10-B01-C01  
REUSE_FIGURE: FIG-G10-B01-01 (chỉ liên quan khi bàn đến kéo theo, không áp dụng trực tiếp)  
REMEDIATION_HELP: HELP-G10-B01-01

**PED1 — Vì sao cần học?** Khi đọc thông báo, ta cần biết câu nào có thể kiểm chứng đúng hoặc sai; câu hỏi và câu chưa xác định giá trị biến chưa thể đem ra kết luận.

**PED2 — Nhắc tiền đề.** Nhớ khái niệm câu khẳng định, câu hỏi, số tự nhiên; một chữ như k có thể thay bằng nhiều giá trị.

**PED3 / D1 — Hình thành bản chất trước công thức.** Mệnh đề là câu khẳng định có thể gắn đúng hoặc sai. “k+2=7” chưa được quyết định nếu chưa biết k. Đừng đánh giá đúng/sai từ cảm giác.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** Trong một miền D, câu P(k) chứa biến chỉ cho ra một mệnh đề xác định khi đã thay k bằng giá trị thuộc D, hoặc đóng bằng lượng từ.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Trước hết xác định loại câu, rồi nếu là khẳng định mới xét miền và kiểm tra. Không được gán “sai” cho một câu hỏi hoặc câu chứa biến chưa xác định.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Trong ba câu sau, câu nào là mệnh đề và câu nào là mệnh đề chứa biến hoặc câu hỏi? (a) “14 chia hết cho 7”. (b) “Bạn đã hoàn thành bài chưa?”. (c) “k+2=7”, với k chưa được gán giá trị.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

(a) là mệnh đề **đúng**, vì 14=7×2. (b) là câu hỏi, không phải mệnh đề. (c) là mệnh đề chứa biến; khi k=5 nó đúng, khi k=4 nó sai, vì vậy chưa thể đánh giá khi không biết k.

</details>

**Nếu chưa làm được:** Đánh đồng câu chưa xác định k với một mệnh đề sai. Trở lại định nghĩa ở D1 B01 và HELP-G10-B01-01.

**Đi tiếp:** mở lại ví dụ EX-G10-B01-01, sau đó luyện ở item canonical R01 THPT-G10-B01-C01; không nhân bản item đó.


### 02. G10-B01-NEGATION — Phủ định phát biểu

LESSON_ID: G10-SGK-B01  
OUTCOME_ID: G10-B01-NEGATION  
TRY_ID: TRY-G10-CHI-02  
ITEM_ID: THPT-G10-CHI-TRY02  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B01-03  
REUSE_ORIGINAL_ITEM: THPT-G10-B01-C02 / THPT-G10-B01-P05  
REUSE_FIGURE: không cần hình mới  
REMEDIATION_HELP: HELP-G10-B01-02

**PED1 — Vì sao cần học?** Muốn bác bỏ tuyên bố “mọi thành viên đều ...”, không cần chứng minh cả nhóm sai; chỉ một phản ví dụ đã đủ.

**PED2 — Nhắc tiền đề.** Nhận biết tập những người đang nói đến và phân biệt “mọi người” với “có ít nhất một người”.

**PED3 / D1 — Hình thành bản chất trước công thức.** Phủ định phải đúng chính khi phát biểu gốc sai; không được đổi tùy tiện chủ ngữ, phạm vi hay dữ kiện.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** Phủ định của “mọi x∈D đều có P(x)” là “tồn tại x∈D không có P(x)”. Phủ định x≥a là x<a trên cùng miền.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Tìm lượng từ và điều kiện trước; đổi “mọi” ↔ “tồn tại”, đổi P thành không-P. Nếu có dấu, phủ định cả dấu gồm biên. Không dùng “mọi người đều không” để phủ định “mọi người đều có”.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Phủ định chính xác câu “Tất cả các thành viên đội bóng đều biết bơi” là phát biểu nào: (A) “Không ai biết bơi”; (B) “Có ít nhất một thành viên không biết bơi”? Giải thích.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

Chọn **(B)**. Chỉ cần một thành viên không biết bơi thì câu “tất cả đều biết bơi” sai; (A) mạnh hơn mức cần thiết và không phải phủ định tương đương.

</details>

**Nếu chưa làm được:** Dùng “không ai” để phủ định “tất cả”. Tự kiểm một nhóm ba người có hai người biết bơi rồi quay về D1 B01 / HELP-G10-B01-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B01-03, sau đó luyện ở item canonical R01 THPT-G10-B01-C02 / THPT-G10-B01-P05; không nhân bản item đó.


### 03. G10-B01-IMPLICATION — Kéo theo, đảo, điều kiện đủ/cần

LESSON_ID: G10-SGK-B01  
OUTCOME_ID: G10-B01-IMPLICATION  
TRY_ID: TRY-G10-CHI-03  
ITEM_ID: THPT-G10-CHI-TRY03  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B01-02  
REUSE_ORIGINAL_ITEM: THPT-G10-B01-P03 / THPT-G10-CHI-W01  
REUSE_FIGURE: FIG-G10-B01-01 — minh họa hướng từ tập nhỏ sang tập lớn  
REMEDIATION_HELP: HELP-G10-B01-02

**PED1 — Vì sao cần học?** Một điều kiện đủ để được cấp quyền không nhất thiết là điều kiện bắt buộc; nhầm chiều suy luận sẽ làm bài chứng minh sai.

**PED2 — Nhắc tiền đề.** Biết số nguyên chia hết cho 4, chia hết cho 8 và khái niệm phản ví dụ.

**PED3 / D1 — Hình thành bản chất trước công thức.** P kéo theo Q nghĩa là khi P đúng, Q cũng phải đúng. Chiều Q kéo theo P là câu khác, cần chứng minh riêng.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** P⇒Q sai duy nhất khi P đúng và Q sai; P là điều kiện đủ cho Q, Q là điều kiện cần cho P.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Chứng minh chiều thuận theo định nghĩa bội số. Để bác bỏ chiều đảo, tìm một số thỏa Q nhưng không thỏa P; hình FIG-G10-B01-01 chỉ cho trực giác, không thay chứng minh.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Với n∈ℤ: (P) “n chia hết cho 8”, (Q) “n chia hết cho 4”. P⇒Q đúng hay sai? Mệnh đề đảo Q⇒P đúng hay sai? Hãy chỉ ra một phản ví dụ nếu có.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

P⇒Q **đúng**, vì n=8t=4(2t). Q⇒P **sai**: n=4 chia hết cho 4 nhưng không chia hết cho 8.

</details>

**Nếu chưa làm được:** Suy ngược chỉ vì hai điều kiện có liên quan. Tự vẽ hai tập bội số theo chiều bao hàm rồi đối chiếu HELP-G10-B01-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B01-02, sau đó luyện ở item canonical R01 THPT-G10-B01-P03 / THPT-G10-CHI-W01; không nhân bản item đó.


### 04. G10-B01-EQUIVALENCE — Tương đương và chứng minh hai chiều

LESSON_ID: G10-SGK-B01  
OUTCOME_ID: G10-B01-EQUIVALENCE  
TRY_ID: TRY-G10-CHI-04  
ITEM_ID: THPT-G10-CHI-TRY04  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B01-04  
REUSE_ORIGINAL_ITEM: THPT-G10-B01-P04  
REUSE_FIGURE: không cần hình mới  
REMEDIATION_HELP: HELP-G10-B01-02

**PED1 — Vì sao cần học?** “Khi và chỉ khi” là khẳng định mạnh: phải đi được cả chiều đi và chiều về, không thể chỉ thấy vài ví dụ đúng là kết luận.

**PED2 — Nhắc tiền đề.** Biết số chẵn có dạng 2m với m∈ℤ và cộng/trừ số chẵn vẫn giữ tính chẵn.

**PED3 / D1 — Hình thành bản chất trước công thức.** P và Q tương đương khi điều kiện P bảo đảm Q và Q cũng bảo đảm P. Hai phát biểu cùng đúng trên vài giá trị chưa đủ.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** P⇔Q nghĩa là (P⇒Q) và (Q⇒P) đều đúng trên cùng miền.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Chứng minh lần lượt hai chiều. Nếu một chiều không đúng thì dùng phản ví dụ, không kết luận tương đương.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Với n∈ℤ, “n chẵn khi và chỉ khi n+2 chẵn” có đúng không? Hãy trình bày riêng hai chiều.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

**Đúng.** Nếu n=2m thì n+2=2(m+1) chẵn. Nếu n+2=2k thì n=2(k−1) cũng chẵn. Cả hai chiều đúng trên ℤ.

</details>

**Nếu chưa làm được:** Chỉ chứng minh chiều n chẵn ⇒ n+2 chẵn rồi dừng; trở lại khái niệm P⇔Q và HELP-G10-B01-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B01-04, sau đó luyện ở item canonical R01 THPT-G10-B01-P04; không nhân bản item đó.


### 05. G10-B01-QUANTIFIERS — Lượng từ mọi / tồn tại và phủ định

LESSON_ID: G10-SGK-B01  
OUTCOME_ID: G10-B01-QUANTIFIERS  
TRY_ID: TRY-G10-CHI-05  
ITEM_ID: THPT-G10-CHI-TRY05  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B01-03  
REUSE_ORIGINAL_ITEM: THPT-G10-B01-P01 / THPT-G10-B01-P02  
REUSE_FIGURE: không cần hình mới  
REMEDIATION_HELP: HELP-G10-B01-02

**PED1 — Vì sao cần học?** Một mệnh đề nói về mọi trường hợp đòi hỏi lập luận tổng quát, nhưng một trường hợp thất bại đủ bác bỏ; câu “tồn tại” chỉ cần một chứng cứ.

**PED2 — Nhắc tiền đề.** Biết ℤ gồm số âm, 0, số dương; bình phương của 0 bằng 0.

**PED3 / D1 — Hình thành bản chất trước công thức.** “Mọi” khẳng định không có ngoại lệ trong miền; “tồn tại” khẳng định có ít nhất một trường hợp.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** ¬(∀n∈ℤ P(n)) ⇔ ∃n∈ℤ ¬P(n). Khi phủ định n²>0 phải viết n²≤0.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Kiểm một ví dụ phản bác khi xét “mọi”; nếu tìm được, viết phủ định bằng ∃ và giữ nguyên miền. Không đổi miền ℤ sang ℝ giữa chừng.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Xét “Với mọi số nguyên n, n²>0”. Câu này đúng hay sai? Viết phủ định có lượng từ và chỉ ra một chứng cứ.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

**Sai** vì n=0 cho n²=0 không lớn hơn 0. Phủ định: “Tồn tại số nguyên n sao cho n²≤0”, với n=0 là chứng cứ.

</details>

**Nếu chưa làm được:** Bỏ qua 0 trong ℤ hoặc đổi “>” thành “<” thay vì “≤”. Xem D1 lượng từ và HELP-G10-B01-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B01-03, sau đó luyện ở item canonical R01 THPT-G10-B01-P01 / THPT-G10-B01-P02; không nhân bản item đó.


### 06. G10-B02-MEMBERSHIP_SUBSET — Phần tử, tập con và tập bằng nhau

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-MEMBERSHIP_SUBSET  
TRY_ID: TRY-G10-CHI-06  
ITEM_ID: THPT-G10-CHI-TRY06  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-01  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-C01 / THPT-G10-B02-P06  
REUSE_FIGURE: FIG-G10-B02-01 chỉ minh họa bốn miền Venn, không trực tiếp thay chứng minh tập con  
REMEDIATION_HELP: HELP-G10-B02-01

**PED1 — Vì sao cần học?** Danh sách người tham gia và nhóm danh sách là hai loại đối tượng: nhầm một người với nhóm gồm người đó sẽ dẫn tới dùng sai ∈ và ⊆.

**PED2 — Nhắc tiền đề.** Biết cách liệt kê tập hợp bằng ngoặc nhọn, một phần tử có thể là một số hoặc một tập.

**PED3 / D1 — Hình thành bản chất trước công thức.** x∈A nói “x là một phần tử”; B⊆A nói “mọi phần tử của tập B có trong A”. Cùng ký hiệu số 2 không đồng nhất với tập {2}.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** A⊆B ⇔ ∀x (x∈A⇒x∈B); A=B khi đồng thời A⊆B và B⊆A.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Đọc kiểu đối tượng hai vế của mỗi ký hiệu trước khi kiểm phần tử. Đừng suy {2}∈A chỉ từ 2∈A.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Cho A={2,4}. Đánh giá ba phát biểu: (a) 2∈A; (b) {2}⊆A; (c) {2}∈A.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

(a) **đúng** vì 2 là phần tử của A. (b) **đúng** vì phần tử duy nhất 2 của {2} nằm trong A. (c) **sai** vì A gồm hai phần tử là các số 2 và 4, không có phần tử là tập {2}.

</details>

**Nếu chưa làm được:** Lẫn ∈ với ⊆. Ghi loại đối tượng từng vế rồi quay về HELP-G10-B02-01.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-01, sau đó luyện ở item canonical R01 THPT-G10-B02-C01 / THPT-G10-B02-P06; không nhân bản item đó.


### 07. G10-B02-UNION_INTERSECTION — Hợp và giao hai tập hợp

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-UNION_INTERSECTION  
TRY_ID: TRY-G10-CHI-07  
ITEM_ID: THPT-G10-CHI-TRY07  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-01  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-C02 / THPT-G10-B02-P05  
REUSE_FIGURE: FIG-G10-B02-01 — nhắc về miền chung và miền hợp, số trên hình thuộc ví dụ R01 khác  
REMEDIATION_HELP: HELP-G10-B02-02

**PED1 — Vì sao cần học?** Hai câu lạc bộ có người tham gia trùng nhau; cộng tổng người của hai nhóm sẽ đếm lặp nếu không xác định phần giao.

**PED2 — Nhắc tiền đề.** Biết cách liệt kê tập hữu hạn; “hoặc” trong tập hợp có nghĩa “ít nhất một”, có thể cả hai.

**PED3 / D1 — Hình thành bản chất trước công thức.** Giao là nhóm chung; hợp là nhóm có mặt trong ít nhất một tập. Không đếm một phần tử hai lần khi viết hợp.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** A∩B={x|x∈A và x∈B}; A∪B={x|x∈A hoặc x∈B}.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Lập phần chung trước, rồi hợp không lặp phần tử; dùng biểu đồ Venn để tự kiểm. Không suy giao là rỗng chỉ vì hai tập có tên khác nhau.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Cho A={a,b,c}, B={b,c,d}. Hãy viết A∩B, A∪B và số phần tử của mỗi tập kết quả.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

A∩B={b,c}, có 2 phần tử; A∪B={a,b,c,d}, có 4 phần tử, không đếm b,c hai lần.

</details>

**Nếu chưa làm được:** Ghi các phần tử b,c hai lần trong hợp. Phác hai vòng tròn có chồng lấn và quay về HELP-G10-B02-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-01, sau đó luyện ở item canonical R01 THPT-G10-B02-C02 / THPT-G10-B02-P05; không nhân bản item đó.


### 08. G10-B02-DIFFERENCE — Hiệu hai tập và chiều phép toán

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-DIFFERENCE  
TRY_ID: TRY-G10-CHI-08  
ITEM_ID: THPT-G10-CHI-TRY08  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-01  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-P01 / THPT-G10-CHI-W02-ANCHOR  
REUSE_FIGURE: không cần hình mới; có thể tô từng miền trên Venn gốc  
REMEDIATION_HELP: HELP-G10-B02-02

**PED1 — Vì sao cần học?** Khi lập danh sách chỉ thuộc nhóm A mà không thuộc B, việc lấy A trừ B khác với lấy B trừ A.

**PED2 — Nhắc tiền đề.** Phân biệt phần riêng và phần giao của hai tập; biết duyệt từng phần tử.

**PED3 / D1 — Hình thành bản chất trước công thức.** A\B giữ lại phần của A ở ngoài B; đổi thứ tự hai tập sẽ đổi kết quả.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** A\B={x|x∈A và x∉B}. Không có công thức A\B=B\A nói chung.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Lọc các phần tử thuộc tập đứng trước, loại những phần tử có ở tập đứng sau; kiểm một phần tử làm chứng nếu nghi hai hiệu bằng nhau.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** A={1,2,3,4}, B={2,4,6}. Tính A\B và B\A. Hai tập kết quả có bằng nhau không?

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

A\B={1,3}; B\A={6}. **Không bằng nhau**, vì chẳng hạn 1 nằm trong A\B nhưng không nằm trong B\A.

</details>

**Nếu chưa làm được:** Cho rằng hiệu là phép giao hoặc luôn đổi chỗ được. Dùng bảng ba cột “chỉ A / cả hai / chỉ B” rồi HELP-G10-B02-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-01, sau đó luyện ở item canonical R01 THPT-G10-B02-P01 / THPT-G10-CHI-W02-ANCHOR; không nhân bản item đó.


### 09. G10-B02-COMPLEMENT — Phần bù phụ thuộc tập vũ trụ

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-COMPLEMENT  
TRY_ID: TRY-G10-CHI-09  
ITEM_ID: THPT-G10-CHI-TRY09  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-01  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-P02  
REUSE_FIGURE: FIG-G10-B02-01 có vùng ngoài hai vòng, nhưng U của bài thử này là tập riêng  
REMEDIATION_HELP: HELP-G10-B02-02

**PED1 — Vì sao cần học?** Muốn hỏi ai “không thuộc A” thì phải biết đang xét toàn trường hay một lớp; cùng nhóm A có thể có phần bù khác nhau tùy tập vũ trụ.

**PED2 — Nhắc tiền đề.** Biết hiệu hai tập, tập vũ trụ U là phạm vi đang xét và A⊆U.

**PED3 / D1 — Hình thành bản chất trước công thức.** Phần bù của A là mọi phần tử trong U nhưng không thuộc A, không phải tất cả đối tượng của thế giới bên ngoài U.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** Nếu A⊆U thì phần bù của A trong U là U\A.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Ghi U rõ ràng, sau đó dùng phép hiệu. Nếu chưa cho U thì phải yêu cầu xác định miền thay vì tự bổ sung vô hạn phần tử.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Với U={0,1,2,3,4,5} và A={1,3,5}, tìm phần bù của A trong U. Vì sao cần ghi U?

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

U\A={0,2,4}. Cần U vì “không thuộc A” chỉ có nghĩa trong phạm vi được xét; thay U sẽ có thể thay phần bù.

</details>

**Nếu chưa làm được:** Lấy phần bù ngoài U hoặc quên số 0. Đối chiếu D1 phần bù và HELP-G10-B02-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-01, sau đó luyện ở item canonical R01 THPT-G10-B02-P02; không nhân bản item đó.


### 10. G10-B02-INTERVALS — Khoảng, đoạn, đầu mút mở/đóng

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-INTERVALS  
TRY_ID: TRY-G10-CHI-10  
ITEM_ID: THPT-G10-CHI-TRY10  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-02  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-P03 / THPT-G10-B02-P04  
REUSE_FIGURE: không thêm hình, hướng dẫn học sinh tự đánh dấu các đầu mút trên trục số  
REMEDIATION_HELP: HELP-G10-B02-03 (mới, CANDIDATE)

**PED1 — Vì sao cần học?** Một khoảng điều kiện x≥1 khác x>1 tại đúng giá trị 1; nếu không đánh dấu đầu mút sẽ loại nhầm nghiệm.

**PED2 — Nhắc tiền đề.** Ôn bất đẳng thức x<a, x≤a, x>a, x≥a; biết trục số và phân biệt ≤ với <.

**PED3 / D1 — Hình thành bản chất trước công thức.** Giao giữ điểm thỏa đồng thời; hợp lấy điểm thỏa ít nhất một. Đầu mút được lấy nếu thỏa điều kiện của tập kết quả.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** [a,b] chứa cả hai đầu mút; (a,b) không chứa; nửa khoảng chứa đúng đầu có ngoặc vuông. ±∞ không là số thực để lấy làm đầu mút.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Vẽ hoặc tưởng tượng hai đoạn trục số. Kiểm giá trị x ở mỗi biên rồi viết ngoặc; không suy ra dấu ngoặc chỉ từ hình dạng chữ viết.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Cho X=(-2,4] và Y=[1,6). Tìm X∩Y và X∪Y. Với mỗi kết quả, cho biết 1, 4 và 6 có thuộc hay không.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

X∩Y=[1,4], gồm 1 và 4 nhưng không có 6. X∪Y=(-2,6), gồm 1,4 nhưng không có 6 (cũng không có -2).

</details>

**Nếu chưa làm được:** Viết (1,4) vì quên 1 hoặc 4 được nhận, hoặc viết (-2,6] vì tưởng 6 thuộc Y. Xem HELP-G10-B02-03 và EX-G10-B02-02.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-02, sau đó luyện ở item canonical R01 THPT-G10-B02-P03 / THPT-G10-B02-P04; không nhân bản item đó.


### 11. G10-B02-VENN_MODEL — Đếm bốn miền sơ đồ Venn

LESSON_ID: G10-SGK-B02  
OUTCOME_ID: G10-B02-VENN_MODEL  
TRY_ID: TRY-G10-CHI-11  
ITEM_ID: THPT-G10-CHI-TRY11  
PLACEMENT: SGK_PRE_CORE_FIRST_TRY; ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED (candidate)  
REUSE_EXAMPLE: EX-G10-B02-03  
REUSE_ORIGINAL_ITEM: THPT-G10-B02-P05 / THPT-G10-CHI-W02-ANCHOR  
REUSE_FIGURE: FIG-G10-B02-01 hướng dẫn bốn miền; KHÔNG được giữ các số 11/12/13/4 của ví dụ cũ khi giải bài thử mới  
REMEDIATION_HELP: HELP-G10-B02-02

**PED1 — Vì sao cần học?** Nếu hỏi có bao nhiêu bạn không vào hai câu lạc bộ, chỉ nhìn số đăng kí từng câu lạc bộ là chưa đủ vì một bạn có thể tham gia cả hai.

**PED2 — Nhắc tiền đề.** Nắm giao, hợp, hiệu và phần bù trong tập U là cả lớp; biết công thức trừ phần giao để không đếm trùng.

**PED3 / D1 — Hình thành bản chất trước công thức.** Bốn miền không chồng lấn là: chỉ A, A∩B, chỉ B, ngoài cả hai; tổng bằng sĩ số lớp.

**Quy tắc, điều kiện và giới hạn sau khi hiểu bản chất.** Với tập hữu hạn: |A∪B|=|A|+|B|−|A∩B|; số ngoài hai tập là |U|−|A∪B|.

**PED5 — Vì sao chọn cách làm này và không áp dụng máy móc.** Đặt số phần giao vào giữa sơ đồ trước, trừ giao khỏi từng CLB, rồi lấy tổng 4 miền để kiểm lại. Hình R01 với 40 bạn là ví dụ khác; không tái dùng các số của hình cho bài 32 bạn.

**PED6 — TỰ THỬ (làm trước khi vào Core, tự đối chiếu sau).** Một lớp có 32 học sinh; 18 bạn tham gia CLB Âm nhạc, 15 bạn tham gia CLB Thể thao và 6 bạn tham gia cả hai. Hãy tính số bạn chỉ tham gia mỗi CLB và số bạn không tham gia CLB nào.

<details><summary>Chỉ mở sau khi tự thử — Đáp án và giải thích (không chấm Mastery)</summary>

Chỉ Âm nhạc: 18−6=12; chỉ Thể thao: 15−6=9; tham gia ít nhất một CLB: 12+6+9=27; không tham gia CLB nào: 32−27=5. Bốn miền 12+6+9+5=32, khớp sĩ số.

</details>

**Nếu chưa làm được:** Đếm 6 bạn trong giao hai lần: 18+15=33>32. Điền giao trước rồi đối chiếu HELP-G10-B02-02/EX-G10-B02-03.

**Đi tiếp:** mở lại ví dụ EX-G10-B02-03, sau đó luyện ở item canonical R01 THPT-G10-B02-P05 / THPT-G10-CHI-W02-ANCHOR; không nhân bản item đó.


## D6 bổ sung scoped duy nhất — khoảng/đoạn và đầu mút

HELP_ID: HELP-G10-B02-03
LESSON_ID: G10-SGK-B02
OUTCOME_ID: G10-B02-INTERVALS
TRIGGER_ITEM_ID: THPT-G10-CHI-TRY10
ROLE: D6_SOURCE_CANDIDATE_ONLY

1. **Nhận biết dấu hiệu sai:** Em viết sai ngoặc ở 1,4 hoặc 6 khi tìm hợp/giao hai khoảng.
2. **Nhớ lại tiền đề:** Hỏi “1 có thuộc X? thuộc Y?”; đọc đúng dấu ≤/< và ý nghĩa ngoặc vuông/tròn. Luôn tách từng điều kiện.
3. **Xem ví dụ đã duyệt:** Quay về D1 ChI B02 “Khoảng/đoạn/nửa khoảng” và EX-G10-B02-02 (X=(-∞,3], Y=(1,+∞)); giải thích vì sao 1 bị loại, 3 được lấy trong giao.
4. **Tự sửa câu ngắn:** X=(-2,4], Y=[1,6). Thử từng giá trị -2,1,4,6 và xác định có ở hợp/giao; chỉ sau đó viết khoảng.
5. **Quay lại & tự đối chiếu:** Làm lại `THPT-G10-CHI-TRY10` và hai item R01 `THPT-G10-B02-P03/P04`, tự mở đối chiếu; không dùng kết quả làm Mastery hay xác nhận official Readiness.

Đây là **HELP mới** (đề nghị NotebookLM review) để phủ outcome INTERVALS; không thay hoặc đổi ID của bốn HELP R01 gốc.

## Q15/Q16/Q17 boundaries

- 11 câu hỏi mới: mỗi câu một `ITEM_ID`, đúng một `OUTCOME_ID`/role/placement, không trùng 18 item R01; mô tả `TRY_ID` chỉ là liên kết UI đến cùng câu, **không phải item thứ hai**.
- Không đụng 141 câu đã hiển thị trong chế độ browser-client self-check từ PR #680. Nội dung mới là bổ sung tuyến học trước Core, không dùng như nguồn chứng cứ kiểm tra độc lập và không sửa đề kín.
- Bài học SGK ChI không tạo Topic kiến thức riêng; hành trình Chuyên đề cần review độc lập sau SGK. Website, MathJax, reveal, mobile, final submit và Mastery thuộc RELEASE; chưa triển khai ở đây.

---

# PHẦN B — Kiến thức/D1–D6, 7 D2, 16 C/P, 2 Written, 2 SVG, 4 HELP R01 (nguyên văn)

# Temp · G10 KNTT tập 1 · Chương I · B01–B02 · D1–D6 authoring candidate R01

**PACKET_ID:** `THPT-G10-CHI-B01-B02-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `DELTA_C_ACADEMIC_MATERIAL / ACADEMIC_REVIEW_PENDING / CONTENT_READY=NO`  
**OWNER_LANE:** `AUTHORING_ONLY`, không giao diện/engine/merge/deploy.  
**LEARNING_PATH:** `SGK_CHAPTER`, phạm vi hai bài công khai formative; chưa có Readiness cuối chương hay Topic Readiness.  
**PERMANENT_SOURCES:** 5 Permanent Sources NotebookLM THPT v2.0: `01_THPT_MASTER_PLAN_v2.0.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`. Không trộn v1.0.  
**S1 DIRECT RECEIPT:** SGK Toán 10 KNTT tập 1, ChI Bài 1 “Mệnh đề” trang in **5–11**, Bài 2 “Tập hợp và các phép toán trên tập hợp” **12–19**, Bài tập cuối chương **20–21**. SBT cùng tập: B1 **5–7**, B2 **8–11**, cuối chương **12–15**, lời giải ChI bắt đầu trang **85**. Đối chiếu trực tiếp mục lục và trang bản PDF scan do chủ dự án cung cấp, không suy thành NotebookLM review. S1 thuộc Google Drive thư mục KNTT TOAN 10.  
**REVIEWED BASE:** không có học liệu G10 ChI đã nhận PASS trên main trong đợt khởi tạo; toàn bộ câu, ví dụ, hình trong file này là nguồn ứng viên mới, không chép nguyên văn SGK/SBT.  

## 1. Ma trận 11 mục tiêu theo từng bài

| Outcome ID | Mục tiêu | Dẫn chứng ứng viên |
|---|---|---|
| `G10-B01-PROPOSITION` | Mệnh đề, mệnh đề chứa biến, giá trị chân lý | B01-C01 |
| `G10-B01-NEGATION` | Phủ định phát biểu (bao gồm dấu bất đẳng thức) | B01-C02, P05 |
| `G10-B01-IMPLICATION` | Kéo theo và mệnh đề đảo; phân biệt điều kiện đủ/cần | B01-P03, P06, W01 |
| `G10-B01-EQUIVALENCE` | Hai chiều của mệnh đề tương đương | B01-P04 |
| `G10-B01-QUANTIFIERS` | ∀/∃, tính đúng sai và phủ định | B01-P01, P02 |
| `G10-B02-MEMBERSHIP_SUBSET` | Phần tử, tập con, tập bằng nhau | B02-C01, P06 |
| `G10-B02-UNION_INTERSECTION` | Phép hợp/giao và liên hệ sơ đồ Venn | B02-C02, P05 |
| `G10-B02-DIFFERENCE` | Hiệu hai tập hợp A\B | B02-P01, W02 |
| `G10-B02-COMPLEMENT` | Phần bù của A trong U | B02-P02 |
| `G10-B02-INTERVALS` | Viết hợp/giao các khoảng trên trục thực | B02-P03, P04 |
| `G10-B02-VENN_MODEL` | Bài toán đếm tập hợp giao/hợp có ngữ cảnh | B02-P05, W02 |

## 2. D1 — Bài 1. Mệnh đề (SGK tr.5–11)

### 2.1. Mệnh đề và mệnh đề chứa biến
- **Mệnh đề** là câu khẳng định có giá trị đúng hoặc sai, không đồng thời cả hai. Câu hỏi/câu cảm thán không phải mệnh đề. Mệnh đề chứa biến P(x) có giá trị chân lý khi thay x bằng một giá trị xác định trong miền đang xét; nếu x chưa được gán, phải có lượng từ cùng miền xét mới thành mệnh đề xác định.
- **Miền xét (domain)** cần được ghi rõ: “n chia hết cho 2” có nghĩa khi n là số nguyên; P(x) với x∈ℝ khác P(n) với n∈ℕ.
### 2.2. Phủ định
- Ký hiệu phủ định `¬P` hoặc `\overline P`. Nếu P đúng thì ¬P sai và ngược lại. Phủ định “x≥a” là “x<a”, phủ định “A⊆B” là tồn tại phần tử thuộc A mà không thuộc B.
### 2.3. Kéo theo, đảo và tương đương
- `P⇒Q` chỉ sai khi P đúng và Q sai; các trường hợp khác được xem là đúng theo quy ước giá trị chân lý. **Không** tự suy từ P⇒Q ra Q⇒P. Với P⇒Q, P là điều kiện **đủ** cho Q, còn Q là điều kiện **cần** cho P.
- `P⇔Q` đúng khi hai chiều P⇒Q và Q⇒P đều đúng. Khi chứng minh một phát biểu “khi và chỉ khi”, phải chứng minh đủ hai chiều (hoặc dùng lập luận tương đương logic).
### 2.4. Lượng từ
- `∀x∈D, P(x)` nghĩa là mọi phần tử x trong D thỏa P(x); chỉ cần **một phản ví dụ** để bác bỏ. `∃x∈D, P(x)` chỉ cần một chứng cứ thỏa. Phủ định: `¬(∀x∈D, P(x)) ⇔ ∃x∈D, ¬P(x)` và `¬(∃x∈D, P(x)) ⇔ ∀x∈D, ¬P(x)`.

## 3. D1 — Bài 2. Tập hợp và các phép toán trên tập hợp (SGK tr.12–19)

### 3.1. Phần tử, tập hợp, tập con và tập bằng nhau
- `x∈A` phát biểu x là phần tử của tập A. `A⊆B` khi **mọi** phần tử của A đều nằm trong B. Hai tập bằng nhau A=B khi A⊆B và B⊆A. Tập rỗng `∅` không có phần tử và là tập con của mọi tập.
- Phải phân biệt `x∈A` (phần tử) với `A⊆B` (tập con); tập `{1}` và phần tử `1` là hai đối tượng khác nhau. Biểu diễn tập qua liệt kê hoặc tính chất đặc trưng kèm miền xét.
### 3.2. Hợp, giao, hiệu và phần bù
- `A∪B={x|x∈A hoặc x∈B}` (“hoặc” có thể đồng thời). `A∩B={x|x∈A và x∈B}`; `A\B={x∈A|x∉B}`. Nếu A⊆U, **phần bù** của A trong U là `U\A`; phải biết U để tính phần bù.
- Với tập hữu hạn, `n(A∪B)=n(A)+n(B)−n(A∩B)`. Không cộng hai tập khi có phần chung mà không trừ giao.
### 3.3. Khoảng, đoạn, nửa khoảng trên ℝ
- `(a,b)`, `[a,b]`, `(a,b]`, `[a,b)` lần lượt biểu thị điều kiện nghiêm ngặt hoặc bao gồm đầu mút. Với vô cực luôn dùng ngoặc tròn; `(-∞,b]` có x≤b, `(a,+∞)` có x>a. Dùng trục số để xem hợp (một trong hai) và giao (cả hai).
### 3.4. Ứng dụng — sơ đồ Venn
- Đếm bốn miền **chỉ A**, **A∩B**, **chỉ B**, **ngoài cả hai**. Tổng bốn miền bằng số phần tử U. Đây là mô hình tập hợp; không suy năng lực xác suất, không nhầm số phần tử với điểm Mastery.

## 4. D2 — Bảy ví dụ giải mẫu

### EX-G10-B01-01 · B01

**Đề và lời giải mẫu:** “12 là số nguyên tố” là mệnh đề sai; “n+1=5” là mệnh đề chứa biến nếu n chưa có giá trị. Giải thích bằng sự tồn tại giá trị chân lý độc lập với biến chưa xác định.


### EX-G10-B01-02 · B01

**Đề và lời giải mẫu:** Với n∈ℤ, P:“n chia hết cho 6”, Q:“n chia hết cho 3”. Chứng minh P⇒Q vì n=6k=3(2k). Q⇒P sai; n=3 là phản ví dụ. Minh họa FIG-G10-B01-01 là hình tập con, không thay chứng minh.


### EX-G10-B01-03 · B01

**Đề và lời giải mẫu:** Phủ định của “∀x∈ℝ, x²≥0” là “∃x∈ℝ: x²<0”; do x² không âm nên phủ định sai. Luôn đổi ∀ thành ∃ và đổi bất đẳng thức tương ứng.


### EX-G10-B01-04 · B01

**Đề và lời giải mẫu:** Với n∈ℤ, “n chẵn ⇔ n² chẵn”: nếu n=2k thì n²=4k² chẵn; nếu n lẻ thì n² lẻ, nên nếu n² chẵn thì n chẵn.


### EX-G10-B02-01 · B02

**Đề và lời giải mẫu:** A={1,2,3,4}, B={3,4,5}. A∩B={3,4}; A∪B={1,2,3,4,5}; A\B={1,2}; B\A={5}. Nêu rõ hiệu không giao hoán.


### EX-G10-B02-02 · B02

**Đề và lời giải mẫu:** X=(-∞,3], Y=(1,+∞). X∩Y=(1,3], X∪Y=ℝ. Xét riêng 1 không thuộc Y và 3 thuộc cả hai.


### EX-G10-B02-03 · B02

**Đề và lời giải mẫu:** Trong lớp 40 học sinh, 23 học Anh, 25 học Toán, 12 học cả hai: chỉ Anh=11, chỉ Toán=13, hợp=36, không học môn nào=4. Hình FIG-G10-B02-01 minh họa bốn miền.


## 5. D3 — 16 câu Formative canonical candidate (8 B01 + 8 B02)

### THPT-G10-B01-C01 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B01-C01`; `skill_id`: `G10-B01-PROPOSITION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xét hai câu: (a) “9 là số chính phương”; (b) “x + 1 = 3”. Câu nào là mệnh đề, và giá trị đúng/sai?
- **Đáp án (formative):** (a) là mệnh đề đúng; (b) là mệnh đề chứa biến, chưa có giá trị chân lý khi chưa quy định x.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Tìm xem câu đã xác định đúng/sai hay còn phụ thuộc biến.
- **Lời giải:** 9=3²; câu x+1=3 đúng khi x=2 và sai khi x khác 2 nên chưa là một mệnh đề xác định nếu không gán biến.

### THPT-G10-B01-C02 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B01-C02`; `skill_id`: `G10-B01-NEGATION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Phủ định của P: “15 chia hết cho 4” là gì? Xét giá trị đúng/sai của P và phủ định.
- **Đáp án (formative):** “15 không chia hết cho 4”; P sai, phủ định đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phủ định thay bằng “không”, không thay 15 bằng số khác.
- **Lời giải:** 15 chia 4 dư 3 nên P sai; phủ định của P đúng.

### THPT-G10-B01-P01 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P01`; `skill_id`: `G10-B01-QUANTIFIERS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xác định đúng/sai của “Với mọi số thực x, x² + 1 > 0”.
- **Đáp án (formative):** Đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Với số thực, bình phương luôn không âm.
- **Lời giải:** Với mọi x∈ℝ, x²≥0 nên x²+1≥1>0.

### THPT-G10-B01-P02 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P02`; `skill_id`: `G10-B01-QUANTIFIERS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xác định đúng/sai của “Tồn tại số nguyên n sao cho n²=2”. Viết phủ định bằng lượng từ.
- **Đáp án (formative):** Sai; phủ định đúng: “Với mọi số nguyên n, n²≠2”.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Bình phương số nguyên kẹp giữa 1 và 4 như thế nào?
- **Lời giải:** Không có số nguyên có bình phương bằng 2; đổi ∃ thành ∀ và = thành ≠ để phủ định.

### THPT-G10-B01-P03 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P03`; `skill_id`: `G10-B01-IMPLICATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xét mệnh đề với n∈ℤ: “Nếu n chia hết cho 6 thì n chia hết cho 3”. Mệnh đề đúng không? Mệnh đề đảo đúng không?
- **Đáp án (formative):** Mệnh đề đúng; mệnh đề đảo sai (n=3).
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Từ n=6k hãy suy ra bội của 3. Đảo chỉ cần một phản ví dụ.
- **Lời giải:** Nếu n=6k=3(2k) nên chia hết cho 3. Đảo “chia hết cho 3 ⇒ chia hết cho 6” sai vì n=3.

### THPT-G10-B01-P04 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P04`; `skill_id`: `G10-B01-EQUIVALENCE`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với n∈ℤ, xét “n chẵn khi và chỉ khi n² chẵn”. Đúng hay sai?
- **Đáp án (formative):** Đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Cần kiểm cả chiều thuận và chiều đảo; ở chiều đảo dùng phản chứng khi n lẻ.
- **Lời giải:** Nếu n=2k thì n²=4k² chẵn; nếu n lẻ, n² lẻ, nên n² chẵn buộc n chẵn.

### THPT-G10-B01-P05 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P05`; `skill_id`: `G10-B01-NEGATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Phủ định của Q: “Với mọi x∈ℝ, x²≥0” là gì? Đúng hay sai?
- **Đáp án (formative):** “Tồn tại x∈ℝ sao cho x²<0”; mệnh đề phủ định sai.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phủ định ∀ là ∃, phủ định ≥ là <.
- **Lời giải:** Với mọi x thực, x²≥0. Vậy không có x thực có bình phương âm, phủ định sai.

### THPT-G10-B01-P06 — SGK_PRACTICE · APPLICATION

- `item_id`: `THPT-G10-B01-P06`; `skill_id`: `G10-B01-IMPLICATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Gọi P: “2>3”, Q: “5<4”. Xác định giá trị đúng/sai của P⇒Q và giải thích theo quy ước mệnh đề kéo theo.
- **Đáp án (formative):** P⇒Q đúng theo bảng giá trị chân lý (P sai, Q sai).
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** P⇒Q chỉ sai khi P đúng và Q sai.
- **Lời giải:** P sai vì 2<3, Q sai vì 5>4. Kéo theo với tiền đề sai là đúng theo quy ước logic.

### THPT-G10-B02-C01 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B02-C01`; `skill_id`: `G10-B02-MEMBERSHIP_SUBSET`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho A={1,2}, B={1,2,3}. Xác định 2∈A và A⊆B đúng/sai; phân biệt hai ký hiệu.
- **Đáp án (formative):** Cả hai đúng; ∈ nối phần tử và tập, ⊆ nối hai tập.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phần tử là số 2, còn A là một tập.
- **Lời giải:** 2 là thành viên A; mọi phần tử của A đều trong B nên A⊆B. Không viết A∈B khi B chỉ chứa các số.

### THPT-G10-B02-C02 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B02-C02`; `skill_id`: `G10-B02-UNION_INTERSECTION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với A={1,2,3,4}, B={3,4,5}, tìm A∩B và A∪B.
- **Đáp án (formative):** A∩B={3,4}; A∪B={1,2,3,4,5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Giao là cùng nằm trong hai tập; hợp là nằm trong ít nhất một tập.
- **Lời giải:** Phần tử chung: 3,4. Phần tử thuộc A hoặc B: 1,2,3,4,5 không lặp.

### THPT-G10-B02-P01 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P01`; `skill_id`: `G10-B02-DIFFERENCE`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với A={1,2,3,4}, B={3,4,5}, hãy tìm A\B và B\A.
- **Đáp án (formative):** A\B={1,2}; B\A={5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Hiệu phụ thuộc thứ tự A trừ B hay B trừ A.
- **Lời giải:** A\B lấy phần tử chỉ trong A; B\A lấy phần tử chỉ trong B.

### THPT-G10-B02-P02 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P02`; `skill_id`: `G10-B02-COMPLEMENT`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Trong tập vũ trụ U={1,2,3,4,5,6}, cho A={2,4,6}. Tìm phần bù U\A.
- **Đáp án (formative):** {1,3,5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phần bù luôn cần chỉ rõ tập vũ trụ U.
- **Lời giải:** Loại 2,4,6 khỏi U, còn 1,3,5.

### THPT-G10-B02-P03 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P03`; `skill_id`: `G10-B02-INTERVALS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho X=(-∞,3], Y=(1,+∞). Tìm X∩Y.
- **Đáp án (formative):** (1,3].
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Kiểm lần lượt đầu mút 1 và 3.
- **Lời giải:** Hai điều kiện đồng thời x≤3 và x>1 nên 1<x≤3.

### THPT-G10-B02-P04 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P04`; `skill_id`: `G10-B02-INTERVALS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho X=(-∞,3], Y=(1,+∞). Tìm X∪Y.
- **Đáp án (formative):** ℝ.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Xét mọi số thực x: x≤3 hoặc x>1.
- **Lời giải:** Mọi số thực x đều thuộc ít nhất một trong hai khoảng nên hợp bằng ℝ.

### THPT-G10-B02-P05 — SGK_PRACTICE · APPLICATION

- `item_id`: `THPT-G10-B02-P05`; `skill_id`: `G10-B02-VENN_MODEL`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Lớp có 40 học sinh, 23 học câu lạc bộ Anh, 25 học câu lạc bộ Toán, 12 học cả hai. Hỏi bao nhiêu học sinh không học câu lạc bộ nào?
- **Đáp án (formative):** 4 học sinh.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Tính số học ít nhất một CLB bằng công thức cộng trừ giao.
- **Lời giải:** n(A∪B)=23+25−12=36; ngoài cả hai =40−36=4.

### THPT-G10-B02-P06 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P06`; `skill_id`: `G10-B02-SET_EQUALITY`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho A={x∈ℤ | x²=4}, B={−2,2}. Hai tập A và B có bằng nhau không?
- **Đáp án (formative):** Có, A=B.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Giải phương trình trên ℤ, rồi so hai chiều chứa nhau.
- **Lời giải:** x²=4 ⇔ x=±2; A={−2,2}=B.

## 6. D4 — Written dùng chung; Anchor chỉ là nhãn

### THPT-G10-CHI-W01 — Bài 01

**item_id:** `THPT-G10-CHI-W01` · **skill_id:** `G10-B01-IMPLICATION` · **written=true** · **anchor_tag:** `false`.

**Đề tự luận:** Tự luận: Xét các số nguyên n. (a) Chứng minh “n chia hết cho 12 ⇒ n chia hết cho 4”. (b) Viết mệnh đề đảo và cho biết đúng/sai. (c) Viết phủ định của mệnh đề “Mọi n chia hết cho 4 đều chia hết cho 12”.

**Lời giải:** (a) n=12k=4·3k. (b) “n chia hết cho 4 ⇒ n chia hết cho 12” là sai, phản ví dụ n=4. (c) “Tồn tại n nguyên chia hết cho 4 nhưng không chia hết cho 12”, đúng, ví dụ n=4.

**Rubric tự đối chiếu:** Rubric 7 điểm: (a) biểu diễn n=12k 2đ, suy ra n=4(3k) 1đ; (b) phát biểu đảo 1đ, phản ví dụ n=4 1đ; (c) đổi đúng ∀→∃ 1đ, nêu đồng thời chia hết 4 và không chia hết 12 1đ.

**Không** tự động ghi điểm/Skill Mastery dựa trên rubrics tự đối chiếu.

### THPT-G10-CHI-W02-ANCHOR — Bài 02

**item_id:** `THPT-G10-CHI-W02-ANCHOR` · **skill_id:** `G10-B02-VENN_MODEL` · **written=true** · **anchor_tag:** `true`.

**Đề tự luận:** Tự luận/Anchor: Khối lớp có 42 học sinh. Có 24 bạn đăng kí CLB Tiếng Anh, 21 bạn đăng kí CLB Âm nhạc, 9 bạn đăng kí cả hai. (a) Vẽ sơ đồ Venn kèm đủ bốn miền; (b) tính số bạn chỉ học Tiếng Anh; (c) số bạn không vào CLB nào; (d) giải thích ý nghĩa hiệu A\B.

**Lời giải:** Giao =9; chỉ Anh 24−9=15; chỉ Nhạc 21−9=12; hợp =24+21−9=36; ngoài =42−36=6; A\B là tập 15 bạn chỉ học Anh.

**Rubric tự đối chiếu:** Rubric 7 điểm: sơ đồ đúng hai tập và giao 2đ; chỉ Anh 1đ; chỉ Nhạc 1đ; hợp và ngoài 2đ; giải thích A\B 1đ.

**Không** tự động ghi điểm/Skill Mastery dựa trên rubrics tự đối chiếu.

## 7. D5 — Hai SVG nguồn thật, accessible, xuất xứ tự dựng

### FIG-G10-B01-01 — Hình bội 6 nằm trong bội 3; ví dụ 3 bác bỏ chiều đảo, hình không thay chứng minh.

**Source asset:** `prototypes/thpt/visuals/THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg` (candidate, chưa tích hợp website).

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="510" viewBox="0 0 1000 510" role="img" aria-labelledby="title desc">
<title id="title">Ví dụ minh họa chiều kéo theo của mệnh đề chia hết</title>
<desc id="desc">Các bội của 6 nằm trong tập bội của 3 trên số nguyên. Chiều nếu chia hết cho 6 thì chia hết cho 3 đúng. Chiều đảo sai, vì 3 chia hết cho 3 nhưng không chia hết cho 6. Hai ô tập hợp không thay thế chứng minh tổng quát.</desc>
<rect width="1000" height="510" rx="20" fill="#f8fafc"/>
<text x="40" y="55" font-family="Arial,sans-serif" font-size="29" font-weight="bold" fill="#0f172a">Mệnh đề kéo theo và mệnh đề đảo</text>
<rect x="54" y="94" width="892" height="335" rx="16" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
<text x="84" y="134" font-family="Arial,sans-serif" font-size="22" fill="#1d4ed8">Các số nguyên chia hết cho 3 (ví dụ: −9, −6, −3, 0, 3, 6, 9)</text>
<rect x="218" y="190" width="564" height="176" rx="25" fill="#dcfce7" stroke="#047857" stroke-width="4"/>
<text x="500" y="242" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="27" fill="#065f46">Các số nguyên chia hết cho 6</text>
<text x="500" y="290" text-anchor="middle" font-family="Arial,sans-serif" font-size="29" fill="#0f172a">… −12, −6, 0, 6, 12 …</text>
<text x="500" y="332" text-anchor="middle" font-family="Arial,sans-serif" font-size="21" fill="#065f46">Những số này cũng chia hết cho 3</text>
<text x="54" y="476" font-family="Arial,sans-serif" font-size="19" fill="#334155">Ví dụ phản chứng cho chiều đảo: 3 chia hết cho 3, nhưng không chia hết cho 6.</text>
</svg>
```

### FIG-G10-B02-01 — Bốn miền Venn 11/12/13/4 theo ví dụ 40 bạn, có <title>/<desc>; không lấy nguyên bài tự luận để kiểm tra độc lập.

**Source asset:** `prototypes/thpt/visuals/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg` (candidate, chưa tích hợp website).

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="590" viewBox="0 0 1000 590" role="img" aria-labelledby="title desc">
<title id="title">Sơ đồ Venn cho bài toán 40 học sinh, 23 học Anh, 25 học Toán, 12 học cả hai</title>
<desc id="desc">Hình chữ nhật là lớp 40 học sinh. Hai hình tròn giao nhau, phần chỉ học Anh có 11, giao có 12, chỉ học Toán có 13, ngoài cả hai có 4. Tổng 11+12+13+4=40.</desc>
<rect width="1000" height="590" rx="20" fill="#f8fafc"/>
<text x="40" y="55" font-family="Arial,sans-serif" font-size="29" font-weight="bold" fill="#0f172a">Sơ đồ Venn — cùng một lớp 40 học sinh</text>
<rect x="70" y="102" width="860" height="387" rx="17" fill="#fff" stroke="#64748b" stroke-width="3"/>
<circle cx="405" cy="290" r="150" fill="#bfdbfe" fill-opacity=".78" stroke="#2563eb" stroke-width="4"/>
<circle cx="605" cy="290" r="150" fill="#bbf7d0" fill-opacity=".74" stroke="#047857" stroke-width="4"/>
<text x="300" y="170" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#1e40af">Học Anh (23)</text>
<text x="622" y="170" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#065f46">Học Toán (25)</text>
<text x="330" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">11</text>
<text x="505" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">12</text>
<text x="679" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">13</text>
<text x="810" y="458" font-family="Arial,sans-serif" font-size="23" font-weight="bold" fill="#334155">Ngoài: 4</text>
<text x="48" y="536" font-family="Arial,sans-serif" font-size="20" fill="#334155">11 (chỉ Anh) + 12 (cả hai) + 13 (chỉ Toán) + 4 (không học môn nào) = 40.</text>
</svg>
```

## 8. D6 — Bốn thẻ hỗ trợ học sinh tự khắc phục

### HELP-G10-B01-01 · Nhầm mệnh đề với mệnh đề chứa biến

- **Dấu hiệu:** Thấy x+2=5 thì khẳng định đúng/sai dù x chưa xác định.
- **Bản chất:** Một mệnh đề cần chân lý xác định; phát biểu có biến phải nêu x hoặc miền x và lượng từ.
- **Tự sửa:** Hỏi: phát biểu có biến nào chưa định? Gán hai giá trị x khác nhau để thử. Nếu đúng/sai đổi theo x, đó là P(x) chưa phải mệnh đề xác định.
- **Tiền đề:** EX-G10-B01-01
- **Quay lại item đã có:** THPT-G10-B01-C01. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B01-02 · Nhầm chiều kéo theo, đảo và lượng từ

- **Dấu hiệu:** Từ P⇒Q kết luận Q⇒P, hoặc phủ định “mọi” thành “mọi không”.
- **Bản chất:** P⇒Q không đảm bảo Q⇒P; phủ định ∀ là ∃ với mệnh đề phủ định.
- **Tự sửa:** Viết P,Q rõ bằng lời; chứng minh chiều có cơ sở; thử tìm phản ví dụ cho chiều đảo; khi phủ định ∀, chỉ cần một trường hợp không đạt.
- **Tiền đề:** EX-G10-B01-02/03
- **Quay lại item đã có:** THPT-G10-B01-P03, THPT-G10-B01-P05. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B02-01 · Nhầm phần tử và tập con

- **Dấu hiệu:** Viết 1⊆A thay vì 1∈A, hoặc cho rằng A=B khi chỉ kiểm một chiều A⊆B.
- **Bản chất:** Một số là phần tử; một tập được so bằng quan hệ tập con. Để kết luận hai tập bằng nhau cần đủ hai chiều.
- **Tự sửa:** Ghi loại đối tượng mỗi vế. Khi là tập, liệt kê phần tử; kiểm mọi phần tử A trong B và mọi phần tử B trong A.
- **Tiền đề:** EX-G10-B02-01
- **Quay lại item đã có:** THPT-G10-B02-C01, THPT-G10-B02-P06. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B02-02 · Nhầm giao, hợp, phần bù và đếm trùng

- **Dấu hiệu:** Khi có 12 người ở giao, cộng 23+25 không trừ; hoặc tìm U\A mà quên U.
- **Bản chất:** Giao là “và”, hợp là “hoặc”; tổng hai tập đếm giao hai lần. Phần bù phụ thuộc tập vũ trụ.
- **Tự sửa:** Vẽ bốn miền Venn; điền giao trước, trừ ra hai miền chỉ một tập, cuối cùng lấy tổng U trừ hợp. Với khoảng, tô đúng đầu mút và dùng giao/hợp.
- **Tiền đề:** EX-G10-B02-03
- **Quay lại item đã có:** THPT-G10-B02-C02, THPT-G10-B02-P02, THPT-G10-B02-P05. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

## 9. QA tác giả và giới hạn

- Có đúng **16 formative**, **2 Written (1 Anchor tag)** = **18 candidate canonical IDs**, **11 outcome IDs**, **7 ví dụ**, **2 FIG_ID SVG**, **4 HELP_ID**. Không tạo ngân hàng riêng cho Anchor hoặc Topic.
- Tất cả ví dụ và câu được tự biên soạn dựa trên phạm vi SGK/SBT; chưa được NotebookLM review, chưa được đăng ký vào canonical bank runtime. Cần kiểm toán S1 B01 pp.5–11, B02 pp.12–19, phần bài tập cuối chương, SBT 5–15 và cảnh báo nếu thiếu kiến thức bắt buộc Core.
- Các câu luyện tập hiển thị gợi ý/giải khi tự nguyện; **không** tái dùng nguyên câu đã xem làm chứng cứ Readiness độc lập. Không có item Readiness, key private, Firebase/Gemini hay lịch sử learner trong packet.
- Phân loại thay đổi: DELTA_C_ACADEMIC_MATERIAL toàn bộ packet mới, phải review độc lập. D1–D6 trong packet là bằng chứng biên soạn, chưa phải clearance.

## 10. Yêu cầu NotebookLM

1. Xác minh 5 Permanent v2.0, trực tiếp SGK/SBT KNTT 10 tập 1 S1, kiểm trang in và phạm vi hai bài. Phân biệt Core bắt buộc vs mở rộng.
2. Trả reviewer verdict D1–D6 theo từng B01/B02, 11 outcome, 18 item, 7 ví dụ, 2 SVG và 4 HELP_ID, bao gồm tính đúng đắn, điều kiện, độ khó, tính đa dạng/không trùng.
3. Kiểm chặt tính chân lý của câu P⇒Q có tiền đề sai (B01-P06), miền ℤ/ℝ cho lượng từ và phản ví dụ, đầu mút khoảng, sơ đồ Venn và độ trùng thực chất với SGK/SBT.
4. Trả `SOURCE_RECEIPT`, `ID_RECONCILIATION`, `P0/P1/P2`, `MINIMAL_DELTA`, `LESSON_VERDICTS`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`. Nếu chưa đủ S1, kết luận HOLD; không tự cấp PASS từ số lượng.
5. Không kết luận cả ChI FULL, Tự kiểm tra cuối chương, nhánh Topic, website QA hoặc quyền phát hành/Skill Mastery.

**FINAL_STATE:** `NOT_REVIEWED / A5_HOLD / NO_RELEASE`

---

# PHẦN C — 14 câu cuối chương public self-check (bản đọc Markdown từ JSON)

PUBLIC_JSON_ORIGIN: docs/assets/data/thpt-g10-readiness/CHI.json
PUBLIC_JSON_GIT_BLOB: bef97279707fa1bdfc00db4e0421cee6df0572a9
PUBLIC_JSON_ORIGINAL_SOURCE_SHA256: a3c3410555b86b2186bcfe342f3cb084475a37c4777d2fb9b1c8562433d40d32
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

Chú ý: item IDs có tiền tố RD1 là nhãn lịch sử, nhưng dữ liệu đã công khai trong JSON browser. Tuyệt đối không sử dụng 14 câu làm private RD1, independent mastery hoặc chứng chỉ chương.

### 1. THPT-G10-CHI-RD1-01 — MCQ_SINGLE

ITEM_ID: THPT-G10-CHI-RD1-01
OUTCOME_REFS_RAW: G10-B01-PROPOSITION, G10-B01-QUANTIFIERS.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho P(n): “n(n+1) chẵn”, với n là số nguyên. Phát biểu nào là mệnh đề ĐÚNG? A. Với mọi n∈ℤ, P(n); B. Tồn tại n∈ℤ sao cho ¬P(n); C. Với mọi n∈ℤ, n² lẻ; D. Với mọi n∈ℤ, n>0.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** A

**Lời giải:** Trong hai số nguyên liên tiếp n,n+1 luôn có một số chẵn nên n(n+1) chẵn với mọi n. B sai vì không tồn tại phản ví dụ; C sai với n=2; D sai với n=0.

**Rubric:** 1đ chọn A và xác định mệnh đề đóng.

</details>

### 2. THPT-G10-CHI-RD1-02 — TRUE_FALSE_GROUP

ITEM_ID: THPT-G10-CHI-RD1-02
OUTCOME_REFS_RAW: G10-B01-IMPLICATION.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho n∈ℤ, xét các điều kiện A: “n chia hết cho 12”, B: “n chia hết cho 4”, C: “n chia hết cho 3”. Đánh giá Đ/S: (a) A⇒B; (b) A⇒C; (c) B⇒A; (d) (B và C)⇒A.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** (Đ, Đ, S, Đ)

**Lời giải:** 12 là bội của 4 và 3 nên (a),(b) đúng; n=4 là phản ví dụ cho (c). Vì 4 và 3 nguyên tố cùng nhau nên n chia hết cả 4 và 3 thì chia hết 12, (d) đúng.

**Rubric:** Mỗi ý 1đ; phải giải thích phản ví dụ và kết hợp hai điều kiện.

</details>

### 3. THPT-G10-CHI-RD1-03 — SHORT_EXPLANATION

ITEM_ID: THPT-G10-CHI-RD1-03
OUTCOME_REFS_RAW: G10-B01-NEGATION, G10-B01-QUANTIFIERS.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Với D=[−1;2], hãy viết phủ định của câu “∀x∈D, x²−x≥0” rồi xác định tính đúng/sai của câu ban đầu bằng một giá trị x cụ thể.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** Phủ định: ∃x∈D: x²−x<0; câu ban đầu sai.

**Lời giải:** Chọn x=1/2 thuộc D; x²−x=1/4−1/2=−1/4<0, bác bỏ lượng từ ∀.

**Rubric:** 3đ: phủ định ∀↔∃ 1đ; đảo ≥ thành < 1đ; phản ví dụ đúng 1đ.

</details>

### 4. THPT-G10-CHI-RD1-04 — WRITTEN_RUBRIC

ITEM_ID: THPT-G10-CHI-RD1-04
OUTCOME_REFS_RAW: G10-B01-IMPLICATION, G10-B01-EQUIVALENCE.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Với n∈ℤ, chứng minh n chia hết cho 6 khi và chỉ khi n chia hết cho cả 2 và 3. Nêu rõ hai chiều và vì sao n chia hết cho 2 và 3 là đủ.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** n chia hết cho 6 ⇔ (2|n và 3|n).

**Lời giải:** Chiều thuận hiển nhiên vì 6=2·3. Chiều đảo: nếu 2|n và 3|n, do gcd(2,3)=1 nên n chia hết cho BCNN(2,3)=6. Có thể viết n=2k; từ 3|2k và gcd(2,3)=1 suy 3|k, vậy n=6h.

**Rubric:** 4đ: phát biểu hai chiều 1đ; chiều thuận 1đ; chứng minh chiều đảo 2đ.

</details>

### 5. THPT-G10-CHI-RD1-05 — MCQ_SINGLE

ITEM_ID: THPT-G10-CHI-RD1-05
OUTCOME_REFS_RAW: G10-B01-QUANTIFIERS.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Xét phương trình x²−5x+6=0 trên ℝ. Phát biểu nào đúng? A. Mọi x thực đều là nghiệm; B. Tồn tại ít nhất một x thực thỏa phương trình; C. Không tồn tại nghiệm thực; D. Mọi số nguyên x đều là nghiệm.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** B

**Lời giải:** x²−5x+6=(x−2)(x−3), nên có nghiệm thực x=2 hoặc x=3, nhưng không đúng với mọi x.

**Rubric:** 1đ chọn B.

</details>

### 6. THPT-G10-CHI-RD1-06 — SHORT_EXPLANATION

ITEM_ID: THPT-G10-CHI-RD1-06
OUTCOME_REFS_RAW: G10-B01-PROPOSITION, G10-B01-QUANTIFIERS.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho n thuộc D={0,1,2,3,4,5}. Xét P(n): “n²≤9”. P(n) có phải một mệnh đề hoàn chỉnh khi chưa gán n không? Hãy tìm tập các n làm P(n) đúng và phát biểu một mệnh đề có lượng từ ∃ đúng.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** P(n) là mệnh đề chứa biến; tập nghiệm {0,1,2,3}; ví dụ ∃n∈D: n²≤9 đúng.

**Lời giải:** Chưa cố định n thì P(n) chưa có giá trị chân lý duy nhất; xét từng n trong D cho 0,1,2,3 thỏa.

**Rubric:** 3đ: nhận biết mệnh đề chứa biến 1đ; tập đúng 1đ; lượng từ đúng 1đ.

</details>

### 7. THPT-G10-CHI-RD1-07 — TRUE_FALSE_GROUP

ITEM_ID: THPT-G10-CHI-RD1-07
OUTCOME_REFS_RAW: G10-B01-NEGATION, G10-B01-IMPLICATION, G10-B01-EQUIVALENCE.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho P: “9 chia hết cho 3” và Q: “9 chia hết cho 2”. Đánh giá Đ/S: (a) P⇒Q; (b) Q⇒P; (c) P⇔Q; (d) ¬(P hoặc Q).

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** (S, Đ, S, S)

**Lời giải:** P đúng, Q sai. Do vậy P⇒Q sai; Q⇒P đúng vì tiền đề Q sai; P⇔Q sai vì khác giá trị chân lý; P∨Q đúng nên phủ định sai.

**Rubric:** Mỗi ý 1đ; nêu điều kiện sai duy nhất của kéo theo.

</details>

### 8. THPT-G10-CHI-RD1-08 — MCQ_SINGLE

ITEM_ID: THPT-G10-CHI-RD1-08
OUTCOME_REFS_RAW: G10-B02-MEMBERSHIP_SUBSET.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho A={−2,0,2} và B={x∈ℤ | x²=4}. Phát biểu nào đúng? A. B⊆A và B≠A; B. A⊆B; C. 0∈B; D. B=A.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** A

**Lời giải:** B={−2,2}, nên mọi phần tử B đều thuộc A nhưng 0 thuộc A và không thuộc B.

**Rubric:** 1đ chọn A và phân biệt tập con với tập bằng nhau.

</details>

### 9. THPT-G10-CHI-RD1-09 — SHORT_EXPLANATION

ITEM_ID: THPT-G10-CHI-RD1-09
OUTCOME_REFS_RAW: G10-B02-INTERVALS, G10-B02-UNION_INTERSECTION, G10-B02-DIFFERENCE.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho X=(−∞,2] và Y=[−1,5). Tìm X∩Y, X∪Y và X∖Y, giải thích đầu mút −1 và 2.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** X∩Y=[−1,2]; X∪Y=(−∞,5); X∖Y=(−∞,−1).

**Lời giải:** −1 thuộc cả X,Y; 2 thuộc cả X,Y. Các số nhỏ hơn −1 chỉ thuộc X. X và Y giao nhau nên hợp phủ mọi x<5.

**Rubric:** 4đ: mỗi tập 1đ, giải thích ngoặc 1đ.

</details>

### 10. THPT-G10-CHI-RD1-10 — WRITTEN_RUBRIC

ITEM_ID: THPT-G10-CHI-RD1-10
OUTCOME_REFS_RAW: G10-B02-VENN_MODEL, G10-B02-UNION_INTERSECTION.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Lớp có 38 học sinh; 22 em tham gia bơi, 19 em tham gia cầu lông, 6 em không tham gia môn nào trong hai môn. Tìm số em tham gia cả hai, chỉ bơi, chỉ cầu lông, rồi kiểm tra tổng bốn vùng sơ đồ Venn.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** Cả hai 9; chỉ bơi 13; chỉ cầu lông 10; ngoài hai 6.

**Lời giải:** |A∪B|=38−6=32; |A∩B|=22+19−32=9; chỉ A=22−9=13; chỉ B=19−9=10; 13+9+10+6=38.

**Rubric:** 4đ: tính hợp 1đ; giao 1đ; hai vùng chỉ 1đ; kiểm tra tổng 1đ.

</details>

### 11. THPT-G10-CHI-RD1-11 — TRUE_FALSE_GROUP

ITEM_ID: THPT-G10-CHI-RD1-11
OUTCOME_REFS_RAW: G10-B02-INTERVALS, G10-B02-UNION_INTERSECTION.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Với X=[−2,3) và Y=(1,5], cho biết Đ/S: (a) 3∈X; (b) −2∈X; (c) 1∈X∩Y; (d) 5∈X∪Y.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** (S, Đ, S, Đ)

**Lời giải:** X không chứa 3; có −2; Y không chứa 1 nên 1 không thuộc giao; Y chứa 5 nên 5 thuộc hợp.

**Rubric:** 4 ý, mỗi ý 1đ; dấu ngoặc là căn cứ.

</details>

### 12. THPT-G10-CHI-RD1-12 — SHORT_EXPLANATION

ITEM_ID: THPT-G10-CHI-RD1-12
OUTCOME_REFS_RAW: G10-B02-MEMBERSHIP_SUBSET, G10-B02-DIFFERENCE.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Cho A={x∈ℤ | −2≤x≤2}, B={x∈ℤ | x²≤1}. Liệt kê A,B và xác định B⊆A có đúng không; tính A∖B.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** A={−2,−1,0,1,2}, B={−1,0,1}; B⊆A, A∖B={−2,2}.

**Lời giải:** Giải điều kiện bình phương trong số nguyên, so từng phần tử, rồi loại ba phần tử B khỏi A.

**Rubric:** 3đ: liệt kê 1đ; quan hệ tập con 1đ; hiệu 1đ.

</details>

### 13. THPT-G10-CHI-RD1-13 — MCQ_SINGLE

ITEM_ID: THPT-G10-CHI-RD1-13
OUTCOME_REFS_RAW: G10-B02-COMPLEMENT.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Với U={−2,−1,0,1,2,3,4,5} và A={x∈U | x chẵn}, U∖A bằng tập nào? A. {−2,0,2,4}; B. {−1,1,3,5}; C. {−1,0,1,3,5}; D. {1,3,5}.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** B

**Lời giải:** Các phần tử chẵn trong U là −2,0,2,4; phần bù trong U chứa các phần tử còn lại −1,1,3,5.

**Rubric:** 1đ chọn B; lưu ý −1 là phần tử của U.

</details>

### 14. THPT-G10-CHI-RD1-14 — WRITTEN_RUBRIC

ITEM_ID: THPT-G10-CHI-RD1-14
OUTCOME_REFS_RAW: G10-B02-INTERVALS, G10-B02-UNION_INTERSECTION, G10-B02-DIFFERENCE, G10-B02-COMPLEMENT.
ROLE: PUBLIC_CLIENT_SELF_CHECK_NO_MASTERY

**Đề bài:** Lấy U=ℝ, A=[−1,4], B=(2,6). Hãy xác định A∩B, A∪B, A∖B và phần bù U∖A. Giải thích vì sao 2 thuộc A∖B còn 4 thuộc A∩B.

<details><summary>Chỉ đối chiếu sau Final Submit (khi tích hợp vào website)</summary>

**Đáp án:** A∩B=(2,4]; A∪B=[−1,6); A∖B=[−1,2]; U∖A=(−∞,−1)∪(4,+∞).

**Lời giải:** B không chứa đầu mút 2 nên 2 thuộc A nhưng không thuộc B; B chứa 4 và A chứa 4, nên 4 ở giao. Chú ý phần bù lấy trong U=ℝ.

**Rubric:** 4đ: giao/hợp 1đ mỗi phần; hiệu/phần bù 1đ mỗi phần; điều kiện giải thích dùng chấm theo từng ý.

</details>
