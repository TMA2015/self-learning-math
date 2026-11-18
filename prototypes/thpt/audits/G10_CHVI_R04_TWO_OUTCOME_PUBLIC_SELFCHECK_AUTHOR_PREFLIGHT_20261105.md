# G10 SGK ChVI R04 — AUTHORING preflight học thuật và an toàn tự kiểm tra

AUDIT_ID: G10-CHVI-R04-2OUTCOME-SELFCHECK-AUTHOR-PREFLIGHT-20261105
ROLE: AUTHORING_ONLY
STATUS: AUTHOR_QA_PASS_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING
STANDARD_ID: SLM-THPT-QUALITY-ONE
GOVERNANCE_VERSION: 1.2.0
R04_TEMP_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md
R04_TEMP_SOURCE_BLOB: ef0b82555bb9f8028c49d948d2276b6ea0f16956
R03_FROZEN_SOURCE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R01_INDEPENDENT_ACADEMIC_RECEIPT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
PUBLIC_SELFCHECK_JSON_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
NEW_ITEMS: THPT-G10-B16-R06,THPT-G10-B17-R05
NEW_HELP_IDS: HELP-G10-CHVI-R04-B16-01,HELP-G10-CHVI-R04-B17-01
NEW_SVG: 0
REVIEW_RESULT: NOT_YET_RECEIVED
CONTENT_READY: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO

## 1. Phạm vi thực sự cần bổ sung

18 câu cuối chương R01 đã công khai trong CHVI.json và tất cả có outcome_id rỗng. Bản AUTHORING đã ghép nghĩa 18 câu vào 19 outcome; chỉ hai outcome có **độ sâu kiểm tra PARTIAL**, không phải thiếu toàn bộ kiến thức học: B16_OUT_04 thiếu hỏi khoảng đồng/nghịch biến, B17_OUT_01 thiếu phân biệt đủ Δ âm/0/dương cùng dấu a. Nguồn R03 sư phạm đã có First Try và HELP; R04 chỉ đề xuất bổ sung **hai câu cuối chương mang tính tự đối chiếu**, không tạo đề thi kín, không thay 18 câu gốc và không mở chương mới.

## 2. QA học thuật bằng tính toán độc lập của AUTHORING

| Phép kiểm | Kết quả toán | Author QA |
|---|---|---|
| B16 trên D=[-2;5] | f=−(x−1)²+9; I(1;9); tăng [-2;1], giảm [1;5] | PASS |
| B16 biên và đỉnh | f(-2)=0, f(1)=9, f(5)=−7 | PASS |
| B16 tập giá trị | T_D=[−7;9], khác T toàn ℝ=(−∞;9] | PASS |
| B17 P=2x²+4x+5 | a=2>0, Δ=−24<0, P>0 trên ℝ | PASS |
| B17 Q=−(x+1)² | a=−1<0, Δ=0; Q=0 tại −1, âm ở hai phía | PASS |
| B17 R=−2(x−1)(x−4) | a=−2<0, Δ=36>0; nghiệm 1,4, dương trong/âm ngoài | PASS |
| Trường hợp giá trị mẫu | Các mẫu nguyên/phân số ở ba khoảng đều cho dấu dự kiến | PASS |
| ID và phạm vi | Hai item ID mới không nằm trong 18 câu cuối chương hoặc R03; không tạo câu trùng | PASS |
| D6 | Hai HELP với đúng năm bước, quay về R03 knowledge/Core đã có | PASS |
| PED1–PED5 | Đủ hai chuỗi WHY/PRE/MEANING/READ_VISUAL/METHOD | AUTHOR_PRESENT, REVIEW_PENDING |
| Q16 | Chỉ mở lời giải, đáp án, rubric, HELP sau Final Submit; no Mastery; không dùng làm RD1 kín | SPECIFIED_NOT_IMPLEMENTED |
| Q18 | R04 blob được khóa riêng; chỉ xác nhận source do author tạo, không đòi NotebookLM hash | PASS_AUTHOR_SOURCE_ONLY |

## 3. Nguồn học liệu và quyền phát hành

- Bài 16/17 đã có bảng biến thiên/bảng xét dấu, đồ thị B16 runtime vẽ bằng JS; không cần tạo SVG mới chỉ để đủ số.
- Nội dung mới là DELTA_C và **chưa có PASS học thuật/sư phạm độc lập**. Không được thay tên file review thành đã nghiệm thu, không gửi cho nhánh RELEASE khi chưa PASS.
- Khi NotebookLM review đúng **hai item + hai HELP** và trả verdict, AUTHORING chỉ sửa lỗi học thuật thật sự nếu có, sau đó đóng snapshot R04 và ghi receipt; không mở lại PASS R01/R03 bất biến. Tồn đọng Q18 external mounted R02 vẫn riêng, không được chuyển cho NotebookLM thành nhiệm vụ kiểm SHA.
- Cả hai câu nếu được duyệt vẫn thuộc **CLIENT_SELF_CHECK_NO_MASTERY**; có thể tăng nội dung tự kiểm tra công khai từ 18 lên 20 nhưng **không** tạo protected RD1 mới hay Skill Mastery. Mọi tích hợp UI, JSON, ghép danh sách, Final Submit, QA browser và phát hành thuộc RELEASE sau handoff hợp lệ và chủ dự án cho phép.

## 4. Prompt review đúng vai trò NotebookLM

Hãy kiểm toán toán học và sư phạm file Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md theo chuẩn duy nhất SLM-THPT-QUALITY-ONE v1.2.0 và đúng năm Permanent Sources v2.1 với SGK/SBT KNTT Toán 10 Tập Hai.
Chỉ phản biện THPT-G10-B16-R06, THPT-G10-B17-R05 và hai HELP D6, tập trung miền xác định, ba trường hợp biệt thức, giải thích bản chất, rubric và tự kiểm tra sau Final Submit.
Bảo toàn reviewer PASS của R01/R03, không kiểm tra Git, byte hay hash.
Trả Academic/PED verdict từng item, P0/P1/P2 và MINIMAL_DELTA, không cấp CONTENT_READY hay quyền phát hành.
