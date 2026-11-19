# AUTHORING R06 — Báo cáo NotebookLM M4–M7 do chủ dự án cung cấp: ghi nhận verdict và đối chiếu chứng cứ nguồn

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M4-M7-DELTA_C-INDEPENDENT-R01-20261107
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; dùng đúng 5 THPT Permanent Sources v2.1.
**LANE:** AUTHORING, [Draft PR #782](https://github.com/TMA2015/self-learning-math/pull/782). Không tích hợp website, không merge/deploy, không thêm ngân hàng RD1.
**INBOUND DATE:** 07/11/2026, hai attachment chủ dự án gửi trong chat; không tự khẳng định nội dung đã được studio kiểm chứng ngoài các tệp người dùng cung cấp.
**VERDICT CLASSIFICATION:** `REVIEWER_REPORTED_ACADEMIC_PED_PASS_M4_M7`; `SOURCE_RECEIPT_CONTENT_INCONSISTENCY_HOLD` trước khi chốt PASS vào snapshot nguồn Git; `CONTENT_READY=NO`, `RELEASE=NO`.

## 1. Hai tài liệu đầu vào thực tế, không coi là hai verdict độc lập

| Tệp đính kèm | Dạng thực tế / SHA256 byte nguyên | Quy tắc chứng cứ |
|---|---|---|
| `Văn bản đã dán (1)(20261107-123602).txt` | TXT báo cáo trực tiếp, 22,800 bytes, SHA256 `346e3b28754893f5f50c5394005fa3e148c96607b6d6b4f90479fcf5649de97c` | Nguồn chính của lời tuyên bố verdict của reviewer |
| `Bao_Cao_Kiem_Toan_Chuyen_De_Ham_So_M4_M7_R01.md` | Nội dung tệp bắt đầu bằng **Python `import os` và `report_content = """...`**, không phải Markdown báo cáo thuần; 22,073 bytes; SHA256 `c5af13ea991eef101ea20ff9bf41186d9983b452f2f62a31831e6335f8072d44` | Bản script đóng gói nội dung báo cáo tương tự, **không** là phiếu review thứ hai |

Reviewer tuyên bố **Academic PASS + PED PASS** cho M4/M5/M6/M7, **38 outcomes** (10+9+9+10), Q01–Q18 PASS, P0=0, P1=0, **P2=4 quản lý**, `MINIMAL_DELTA=0` về diễn giải toán, và riêng `CONTENT_READY=NO`/`RELEASE_AUTHORIZATION=NO`/`MASTERY_ACTIVATION=NO`. Ghi nhận trung thực các lời tuyên bố này nhưng không được tự phê duyệt source Git khác với source reviewer mô tả. Reviewer giữ `SOURCE_SNAPSHOT_MISMATCH_HOLD` cho M1–M3; G10 historical PASS và G12 SGK ChI historical PASS không truyền sang Topic.

## 2. SOURCE_RECEIPT — có đối chiếu được 12 blob, nhưng tên/dung lượng tệp tổng hợp không khớp

**Tệp SOURCE thực tế đang ở #782:** `Temp_TOPIC_FUNCTIONS_M4_M7_ONE_SOURCE_NOTEBOOKLM_INDEPENDENT_DELTA_C_PACKET_R01_20261107.md`; Git blob `39548922eddee9712441a264424e08f61c6de966`. Đọc trực tiếp UTF-8 có **181,533 ký tự mã hóa JS** và **204,122 bytes**; đính kèm đúng 12 phụ lục gốc. Toàn bộ **12/12** Git blob SHA trong manifest của báo cáo reviewer đều tồn tại và khớp GitHub ở nhánh #782 trong lượt kiểm tra hiện tại.

**Reviewer tự ghi:** `Temp_TOPIC_FUNCTIONS_M4_M7_ONE_SOURCE_NOTEBOOKLM_INDEPENDENT.md` (**204,668 bytes UTF-8**). Tên khác và kích thước khác **546 bytes**; báo cáo không ghi Git blob SHA của chính *tệp tổng hợp 204,668 byte*. Chưa có chứng cứ byte-identical của tệp chính mà NotebookLM nhận được, dù manifest 12 nguồn con **đúng SHA**. Có thể là file đổi tên/chèn mô tả trước khi upload; không suy nguyên nhân nếu chưa nhận bản đúng bytes.

**R06 boundary:** `PACKET_SOURCE_SHA_MATCH_ON_12_SUBFILES=YES`, `PACKET_UPLOAD_FILE_BYTE_IDENTITY=UNVERIFIED`, `Q18_FULL_REVIEW_RECEIPT=HOLD` cho đến khi reviewer xác nhận file tổng hợp đã dùng và bảo đảm đúng 12 nguồn gốc.

## 3. Ít nhất bốn mô tả học liệu cần reviewer đối chiếu lại đúng item/outcome

| ID/nguồn | Trong GitHub R01 chính xác | Trong báo cáo NotebookLM đính kèm | Trạng thái |
|---|---|---|---|
| `CAND-P-M6-02` | `F(x)=ln(sqrt(4−x²))`, tập xác định **−2<x<2**, đạo hàm `−x/(4−x²)`; ledger blob `c735a2e21bffe4ffe2e16d06de1d8592acc22674` | Ghi thành `ln(sqrt(x²−4))`, tập xác định **|x|>2** | **MATERIAL_CONTENT_MISMATCH**: hai bài khác nhau, cần xác nhận reviewer đã thực sự xem bản chính |
| `CAND-P-M7-01` | Hàm từng đoạn `f(x)=x+10` nếu x<0, `f(x)=x` nếu x≥0; bài kiểm đạo hàm hai nhánh, bước nhảy và tính đồng biến toàn R; ledger blob `7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d` | Mô tả `f(x)=−1/x`, x≠0; đó là một phản ví dụ *khác* | **ITEM_STEM_MISMATCH**; không cấp PASS ứng viên dựa trên lời giải bài khác |
| Outcome M7 | Ledger/QA & crosswalk dùng `TOP-FUNC-M7-O01..O10` (trong một số bảng dạng rút gọn `M7-O01..O10`) | Ghi `TOP-G12-FUNC-O01..O10` | **OUTCOME_ID_MAPPING_MISMATCH**, không tự đổi ID vì báo cáo |
| M4 Q07/Q15 figure | Ledger M4 blob `3a399a40e837e2fef1ad04e2712ccbcb5a8ba839` ghi rõ **5 SVG** (bốn lượng giác B03 + một mũ/log B20) | M4 summary nêu **2 FIG** | **FIG_SCOPE_COUNT_MISMATCH**, reviewer cần xác nhận năm asset và từng chỉ dẫn đọc hình |

Ngoài ra, reviewer mô tả `CAND-P-M6-01` bằng ví dụ `|x|` góc nhọn, trong khi stem ứng viên thật là **hàm ghép hệ số a,b** liên tục/khả vi ở x=1; `|x|` là minh họa lý thuyết khác của M6. Đề nghị xác nhận phân biệt hai nội dung khi phản biện; không tạo clone hoặc sửa câu đã có.

**Q16:** Reviewer đánh dấu PASS vì First Try dùng `<details>` và không ghi Mastery. Điều đó chỉ hỗ trợ **an toàn nguồn formative**, chưa chứng minh hệ thống Final Submit/held-out TOPIC_READINESS bí mật, coverage đánh giá độc lập hay chống lộ đáp án; `Q16_OFFICIAL_TOPIC_READINESS_GATE=HOLD`. Q16 nguồn chỉ được xem đúng phạm vi nghiên cứu của nó, không chuyển thành hệ thống đã vận hành.

## 4. Disposition: preserve review result, request **targeted source reconciliation**, no blanket re-review

- **Academic/PED:** giữ verbatim `REVIEWER_REPORTED_PASS` cả M4–M7; không viết `ACADEMIC_PED_VERIFIED_PASS_ON_EXACT_#782_SOURCE` cho các mục có xung đột. Không đưa sang `CONTENT_READY`.
- **Minimal targeted clarification**: reviewer cung cấp SHA hoặc bytes của file Temp thật đã nhận; xác nhận trên các SHA ledger M6/M7 và M4 các ứng viên, năm SVG và outcome M7. Nếu các sai số là **lỗi trích dẫn/báo cáo**, phát hành đính chính `SOURCE_RECEIPT` và bảng affected outcomes/items, giữ nguyên verdict ở các phần thật sự đã đọc đúng. Nếu reviewer thực tế xét **stem khác**, yêu cầu chỉ review phần item/outcome chịu ảnh hưởng (Delta C) với exact source; tránh re-review toàn mạch khi không cần.
- **P2 quản lý:** 6 proposed new public candidates trong báo cáo còn `HOLD_DEDUP_REVIEW` không cấp `item_id`; M6 đề nghị 9 outcomes không tự thêm O10; historical PASS chỉ cho immutable snapshot; G10 khác snapshot vẫn HOLD.
- **Q15/Q16/Q18:** các gate phụ thuộc single canonical answer/rubric, original S1, unexposed private `TOPIC_READINESS`, final submission và source receipt SHA vẫn riêng; không sử dụng FIRST TRY public làm held-out assessment.
- **Quy tắc làm việc đã tồn tại:** reviewer prompt NotebookLM **luôn gửi trực tiếp trong ChatGPT, 3–6 câu**, **không tạo file prompt .txt/.md**. Các lỗi tạo file prompt trước đây là **không tuân thủ hướng dẫn đã có**, không phải thay đổi tiêu chuẩn hoặc yêu cầu mới. Bất kỳ prompt đính chính nào ở bước sau phải gửi **ngay trong chat**, không lưu tệp prompt.

**CHECKPOINT:** `M4_M7_EXTERNAL_REVIEWER_REPORTED_ACADEMIC_PED_PASS`; `12_OF_12_CHILD_BLOBS_MATCH`; `PACKET_FILENAME_AND_SIZE_MISMATCH`; `M6_CAND_P02_MATERIAL_MISMATCH`; `M7_CAND_P01_AND_OUTCOME_ID_MISMATCH`; `M4_FIG_5_VS_2_MISMATCH`; `TARGETED_RECEIPT_CORRECTION_HOLD`; `FULL_TOPIC_CONTENT_READY=NO`; `RELEASE=NO`.
