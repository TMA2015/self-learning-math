# G11 Chương I B03–B04 · Academic Delta_C R02 — tác giả bàn giao xét duyệt (chưa PASS)

**PACKET_ID:** `G11-CHI-B03-B04-PED-DELTA-C-R02-20261102`  
**STATE:** `PED_DELTA_C_CANDIDATE_REVIEW_REQUIRED` · `NOT_CONTENT_READY_FOR_RELEASE` · `DO_NOT_MERGE`  
**AUTHOR_PR:** #681, author branch `content/thpt-g11-chi-b01-b04-complete-r01-20261031`  
**CANDIDATE_FILE:** `prototypes/thpt/content-drafts/G11_CHI_B03_B04_CONCEPT_FIRST_PED_DELTA_C_FULL_REVIEW_CANDIDATE_R02_20261102.md`  
**CANDIDATE_BLOB:** `9dcb7c8ef50cbddfd4167bd5dec2e1ef403cd761` (retrieved/read back GitHub)  
**BASE_ORIGINAL_PUBLIC_R01_BLOB:** `599d12ac7c2252001f881833c39978f94112cee4` (Immutable original Academic PASS 31/10, Issue #682).  
**SNAPSHOT_BASE_HEAD:** `d02f7315c05d9166e6fd53de8f132b3b48a368f9`; **R02 candidate commit:** `d9f8900861a2670b7274f29293c24264a7ac1f5f`.

## Phần tác giả đã sửa thật, không phải nhiệm vụ UI

- B03: thêm động cơ hàm lượng giác (B01 đường tròn đơn vị → B02 công thức → B03 hàm sin/cos), bảng năm góc, giải thích chu kỳ và điều kiện tan/cot; thuyết minh 4 SVG; bổ sung lý do chọn bước giải cho 5 ví dụ D2; một câu Tự thử không chấm, trở về `THPT-G11-B03-C01`.
- B04: thêm bài toán ngược `sin x=1/2` trước công thức nghiệm; giải thích hai họ nghiệm và vai trò k nguyên, cầu nối B01–B03, miền xác định; nối hình sin với đường ngang; bổ sung 6 ghi chú lựa chọn cách giải D2; một Tự thử nghiệm `sin x=0`, trở về `THPT-G11-B04-C01`.
- Mỗi khối mới trong file ứng viên được đánh `[R02-NEW]`, có 8 nhóm review ID `R02-B03-PED1-3/PED4/PED5/PED6` và `R02-B04-PED1-3/PED4/PED5/PED6`.

## Source-fidelity QA — kết quả đã kiểm tra trên GitHub

- R01 public blob **vẫn là** `599d12ac7c2252001f881833c39978f94112cee4`. Toàn bộ **859/859 dòng gốc** nằm nguyên dạng theo thứ tự trong candidate R02 mới; mọi thay đổi là đoạn chèn được nhận diện, không sửa các dòng toán cũ.
- 26/26 ID D3 của B03/B04 hiện diện; giữ cùng số lượng 42 formative + 4 Written = 46 public canonical toàn chương; không tạo `item_id` mới cho Tự thử, không sửa SGK Core/Practice/đáp án/rubric.
- Giữ 6 SVG cũ và 8 D6; không chèn private stem/key/rubric RD1 vào public GitHub. Kiểm tra **không có** heading `### THPT-G11-CHI-RD1-01..` trong R02.
- Không chỉnh learner pages, Javascript, runtime assessment, THCS, Firebase/Gemini, dữ liệu tiến độ hoặc Mastery trong author PR.

## Review độc lập còn chặn

1. NotebookLM kiểm S1 SGK Toán 11 KNTT Tập 1 B03 pp22–30, B04 pp31–39, cuối chương pp40–41; SBT B03 pp11–18, B04 pp19–24, cuối chương pp25–30 theo receipt owner #682; 5 Permanent Sources v2.0.
2. Reviewer trả `SOURCE_RECEIPT`, verdict `PASS/REVISE/HOLD` theo **B03/B04, từng nhóm R02-NEW và 11 ví dụ EX-G11-B03-01..05, EX-G11-B04-01..06**, thuyết minh 4 SVG; PED1–PED6; lỗi P0/P1/P2; `MINIMAL_DELTA`.
3. Sau khi nhận PASS, tác giả **mới** source-lock snapshot R02 hiệu lực và bàn giao A6 **một** handoff mới; không sửa/ghi đè R01, không yêu cầu review lại B01/B02 bất biến, và không tự kết luận AP5 thực tế hay R1–R5 release QA.
4. Nhánh phát hành #697 độc lập chịu trách nhiệm tích hợp, AP1–AP5, Final Submit Chapter I, CI exact-head, merge/deploy theo owner conditional authorization. Không đưa 20 RD1 private ra công khai nếu chưa có release plan/QA cho tính năng tự đánh giá, không chấm tự động Written tùy ý.

**Release disposition:** AUTHORING DELTA R02 READY_FOR_REVIEW **≠** Academic PASS **≠** PUBLISHED. Chương I #697 còn HOLD ở thời điểm tạo file.