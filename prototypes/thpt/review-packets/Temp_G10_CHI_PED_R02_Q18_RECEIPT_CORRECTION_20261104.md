# Temp · G10 Chương I B01–B02 R02 — đính chính provenance Q18, không review lại toán đã PASS

PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
CORRECTION_SCOPE: TARGETED_Q18_SOURCE_PARITY_AND_OFFICIAL_Q01_Q18_CROSSWALK_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
REVIEW_STATE: NOTEBOOKLM_ACADEMIC_PED_PASS_REPORTED_Q18_SOURCE_PARITY_HOLD
DELTA_CLASS_ORIGINAL: DELTA_C_ACADEMIC_MATERIAL
CORRECTION_KIND: REVIEW_RECEIPT_METADATA_ONLY_IF_SOURCE_PARITY_PROVEN
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Không thay học liệu, chỉ đính chính review receipt

Nguồn phản biện **gốc** là 4 file Markdown trong ZIP 
`Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip`, SHA256 ZIP **`196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d`**; kiểm tra ZIP CRC PASS. Bốn file đó đã được khóa trên Draft GitHub PR #641, HEAD ban đầu của R02 `cb984f77306b2b29dc520b0f2f9f5abd8943685f`; **không thay nội dung sư phạm/đề/đáp án/rubric**. Đây không phải nguồn SGK/SBT thứ sáu hay Permanent Source mới: khi phản biện tiếp tục chỉ dùng đúng 5 Permanent Sources THPT v2.1, S1 và các file Temp của phạm vi R02.

| File R02 trong ZIP đã gửi review | SHA256 file BYTE-LEVEL gốc (đã tự kiểm qua zipfile, không phải trong văn bản trích xuất) | Git blob SHA gốc | SHA256 `Văn bản đã dán (1)(9).txt` báo cáo là "thực tế" | SHA256 Studio report báo cáo là "thực tế" |
| --- | --- | --- | --- | --- |
| `Temp_G10_CHI_PED_R02_LEARNING_20261104.md` | `8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339` | `6e35f036329b11465189a2256cfbfd536e95993c` | `ac04c40e2c65c9876a970d9b7bdeadb639c7e674b9abca1176c17f8ddd058b74` | `ac04c40e2c65c9876a970d9b7bdeadb639c7e674b9abca1176c17f8ddd058b74` |
| `Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md` | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `a112973b74768c3177d1a50a09229b214a1ef8b6` | `3ab3f215bc8d39c1def2b957f8363c66e7e6697035f8e85369cfce9f1fd93440` | `3ab3f215bc8d39c1def2b957f8363c66e7e6697035f8e85369cfce9f1fd93440` |
| `Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md` | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `ef7c1b5bec66aca0b4bd427218a4eb653cf9f92e` | `058439a852a2e939223fd28d04180ad9de106c2c4a96dac13ca28b1c96a4c0a2` | `058439a852a2e939223fd28d04180ad9de106c2c4a96dac13ca28b1c96a4c0a2` |
| `Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md` | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `3711fbd92e912661424d228c575b0dddf7dc979a` | `9d554a99119cdccaebe269bb3f7a49931751dbe5a5bdbe2f2b37ca3dcecb23aa` | `d67bf969b5f03f7aef966e9eff20ffcf9ef28f3de4c9945ee71a4eac7fad44fd` |

Ngoài 4 SHA256 sai khác, hai bản báo cáo khẳng định `SOURCE_RECEIPT = PASS` mà **chưa chứng minh** việc nội dung đã reviewer đọc là đúng 4 file byte-identical với ZIP/Git source. Đề nghị reviewer tự kiểm tra lại nội dung nguồn đã đọc (có thể có biến đổi do môi trường nạp/tách file); không chỉ sao chép mã băm từ bảng này rồi kết luận parity. Nếu cùng học liệu chính xác, ghi rõ phương pháp và bằng chứng, trả `SOURCE_PARITY=PASS`, `SOURCE_RECEIPT_CORRECTED`, `Q18_VERDICT=PASS`; nếu không kiểm chứng được, trả `SOURCE_PARITY=UNPROVEN`, `Q18_VERDICT=HOLD` và nêu thiếu gì. Báo cáo sửa metadata không yêu cầu phát sinh R03 hay soạn lại học liệu trước khi có chứng cứ lỗi toán hoặc nội dung thay đổi.

## 2. Đúng bảng mã Q01–Q18 của CHUẨN DUY NHẤT v1.1.0

| Q | Nội hàm chuẩn thực tế — không gán nhầm ID |
| --- | --- |
| Q01 | S1/Scope — SGK Core, nguồn và phạm vi, tham khảo SBT |
| Q02 | Outcomes — đủ kết quả học tập cho bài |
| Q03 | D1 — lý thuyết, bản chất, điều kiện |
| Q04 | D2 — ví dụ mẫu có suy luận, điều kiện |
| Q05 | D3 — Core/Practice/Application có độ sâu |
| Q06 | D4 — Written/Anchor và rubric một thư viện |
| Q07 | D5 — hình, SVG, bảng và hướng dẫn hiểu hình |
| Q08 | D6 — HELP và đường khắc phục |
| Q09 | PED1 — lý do cần học trước kỹ thuật |
| Q10 | PED2 — kiến thức tiền đề |
| Q11 | PED3 — hình thành bản chất trước công thức |
| Q12 | PED4 — hướng dẫn đọc hình |
| Q13 | PED5 — vì sao chọn phương pháp, giới hạn |
| Q14 | PED6 — Tự thử trước Core, tự mở lời giải, D6 |
| Q15 | Canonical item bank, ID/placement/role không nhân bản |
| Q16 | An toàn đánh giá/exposure, RD1/Final Submit/Mastery |
| Q17 | Hai hành trình SGK và Chuyên đề độc lập |
| Q18 | Review độc lập và provenance trên snapshot, source/receipt SHA |

**Hai báo cáo cũ đã gán sai nhiều Q:** Q03–Q08 cho các khía cạnh ID/role/retention; Q12 cho PED5 thay PED4; Q13 cho PED6 thay PED5; Q14 cho self-check thay PED6; Q15 cho HELP thay shared canonical; Q16 cho Delta thay assessment; Q17 cho SHA thay dual path; Q18 cho authority thay source lock. Bản đính chính cần dùng đúng bảng mã khi kết luận Q18 và đánh giá Q03–Q17 applicable theo phạm vi Delta C, kể cả các mục N/A_WITH_REASON nếu không tác động. **Không cho tất cả Q=PASS chỉ vì có đủ câu.**

## 3. Snapshot được bảo toàn và yêu cầu phán quyết có thể hành động

- R01 original student source Git blob `95a554e31a613b8e215679fe6790738473d598df`; original independent reviewer Git blob `fece80dcb4b0e17d369e2ecbe12e8d13b672281a` (18 canonical cũ, 7 D2, 2 SVG, 4 HELP): **bảo toàn PASS trong snapshot lịch sử**.
- R02 reviewer **đã báo** `ACADEMIC_VERDICT_NEW=PASS`, `PEDAGOGICAL_VERDICT_NEW=PASS` cho 11 outcome / 11 First Try item `THPT-G10-CHI-TRY01..11` / 1 D6 `HELP-G10-B02-03`; `MINIMAL_DELTA=0`, `P0/P1/P2` cần xác nhận rõ bằng giá trị máy đọc được. Chỉ đánh giá lại phần toán khi reviewer chứng minh nguồn khác hoặc phát hiện lỗi cụ thể.
- Đề nghị kết quả sửa trả **`REVIEW_SCOPE`, `REVIEWED_SOURCE_FILES` và đúng byte/git SHAs, `SOURCE_RECEIPT_CORRECTED`, `SOURCE_PARITY`, `Q18_VERDICT`, `ACADEMIC_VERDICT_NEW`, `PEDAGOGICAL_VERDICT_NEW`, `P0/P1/P2`, `MINIMAL_DELTA`, `OFFICIAL_Q01_Q18_CROSSWALK` và `DELTA_CLASS`**. Giữ `CONTENT_READY=NO`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`; reviewer không được cấp quyền vận hành.
