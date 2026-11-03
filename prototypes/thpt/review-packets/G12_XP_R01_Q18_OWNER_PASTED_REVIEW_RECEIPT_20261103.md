# BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ ĐỐI CHIẾU NGUỒN ĐỘC LẬP
**XÁC MINH SOURCE_RECEIPT Q18 VÀ NGUỒN CANONICAL GÓI R01 TARGETED**
*(Hoạt động thực hành trải nghiệm SGK Toán 12 KNTT Tập Hai)*

> PROVENANCE: Chủ dự án dán nguyên nội dung kết luận Q18 từ NotebookLM vào cuộc trò chuyện ngày 03/11/2026. Hồ sơ dưới đây là bản ghi lại các trường kết luận, bảng provenance, lời xác nhận và ranh giới hệ thống từ nội dung được dán. Đây **không phải file Studio gốc được tải trực tiếp**, không thay thế nhận dạng tác giả hay quyền phê duyệt phát hành. Các SHA của file học liệu được kiểm lại độc lập bằng byte tại `/mnt/data` và trên PR #733.

- **PACKET_ID:** `G12-SGK-EXP01-EXP02-R01-TARGETED-Q18-RECEIPT-CORRECTION`
- **STANDARD_ID:** `SLM-THPT-QUALITY-ONE` (v1.1.0, cổng Q01–Q18).
- **Nguồn phản biện báo cáo đã chọn:** đúng 5 Permanent Sources THPT v2.1; SGK/SBT Toán 12 KNTT Tập Hai gốc; `Temp_G12_SGK_XP_R01_Q18_SOURCE_RECEIPT_CORRECTION_20261103.md` và `Temp_G12_SGK_XP_R01_TARGETED_WRITTEN_O05_NOTEBOOKLM_20261103.md`.
- **Studio report name do NotebookLM nêu:** `Bao_Cao_Dinh_Chinh_Source_Receipt_Q18_Toan_12_Hoat_Dong_Trai_Nghiem_R01.md` (không có bản tải Studio độc lập trong ngữ cảnh này).

## I. Kết luận reviewer độc lập, chép từ báo cáo chủ dự án gửi

1. **Hiệu chỉnh SHA256 R01 targeted:** báo cáo R01 trước nhầm SHA256 ma trận R00 `1b60e1f3430a03e0d148cd08003eaa61574babf5a3a687a0465539224a05d271`. Correct targeted file SHA256: `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67`.
2. **Xác nhận canonical học sinh R01:** `G12_SGK_XP_TWO_EXPERIENCES_R01_CANONICAL_20261103.md`, Git Blob SHA `8a34d1cf4009b9b6511a34c08c5d8e31525a6a46`, SHA256 `f71ad85676357005318b07068102415cb663549cdea87c677ed74382fea7d4de`. Theo reviewer, R01 tích hợp đúng 10 lời giải D4 đã PASS và bảo toàn R00 còn lại.
3. **Q18/SOURCE_PARITY: PASS**, bảo toàn `ACADEMIC_VERDICT=PASS` và `PEDAGOGICAL_SELF_LEARNING_READY=PASS` của R00 + R01 targeted. Reviewer báo 10 outcome, 10 D2, 40 canonical public items, 10 HELP, 5 PNG/SVG, 10 placements secondary, đáp án **22 m** cho EXP01-O05 vẫn đúng.
4. **Không được nâng trạng thái hệ thống:** `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`, `CONTENT_READY=NO`; không cấp quyền merge/deploy hay Final Submit/Mastery chỉ nhờ Q18.

## II. Bảng provenance từ lời giải trình Q18

| Object | SHA256 | Git blob SHA | Reviewer conclusion |
|---|---|---|---|
| R01 Targeted review file | `a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67` | `4eb118bad3e773fcac2e1ef39d71ba2243a75b6a` | RECONCILED PASS |
| R01 canonical learner source | `f71ad85676357005318b07068102415cb663549cdea87c677ed74382fea7d4de` | `8a34d1cf4009b9b6511a34c08c5d8e31525a6a46` | MATCH PASS |
| R00 historical matrix | `1b60e1f3430a03e0d148cd08003eaa61574babf5a3a687a0465539224a05d271` | `a080bf79f6744d59bf195f7ad2fa26cf8827bf6b` (Git custody verified separately by AUTHORING) | CONFIRMED R00 |
| R00 original ZIP | `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f` | N/A | IMMUTABLE R00 |

## III. SOURCE_PARITY — reviewer findings

- 2 Hoạt động trải nghiệm: EXP01 và EXP02; 10 OUTCOME_ID, 40 canonical scored public items (10 Core/10 Practice/10 Application/10 Written), 10 END placements phụ tham chiếu đúng Application IDs, không tạo câu mới.
- 10 D4 Written theo R01, riêng `THPT-G12-EXP01-W01` có hai cách kiểm chứng (đạo hàm và đối chiếu tích phân trên `[0,π/2]`) và 5 tiêu chí rubric mỗi tiêu chí 1 điểm.
- `THPT-G12-EXP01-W05`: bảng thời gian `(0,2,4,6)` giây; vận tốc `(2,3,5,4)` m/s; tích phân gần đúng hình thang `T_3 = 22` mét. Reviewer xác nhận dữ liệu và đáp án đồng nhất.
- **SOURCE_PARITY=PASS**; không ghi nhận lỗi hay mâu thuẫn học thuật ở nguồn canonical cuối.

## IV. Machine-checkable reviewer verdict, như phần III báo cáo người dùng cung cấp

```text
STANDARD_ID|SLM-THPT-QUALITY-ONE
STANDARD_VERSION|1.1.0
PERMANENT_SOURCES_VERSION|THPT-v2.1
REVIEW_SCOPE|G12-SGK-EXP01-EXP02-R01-TARGETED-Q18-RECEIPT-CORRECTION
R01_REVIEWED_TARGET_PACKET_SHA256_CORRECT|a6f6d0c17f25d42c5ec654b8d90c201f2f1ce0d8c979584aad06b10fa0985b67
R01_CANONICAL_GIT_BLOB_SHA|8a34d1cf4009b9b6511a34c08c5d8e31525a6a46
R01_CANONICAL_SHA256|f71ad85676357005318b07068102415cb663549cdea87c677ed74382fea7d4de
SOURCE_PARITY|PASS
Q18|PASS
ACADEMIC_VERDICT|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
REMAINING_DISCREPANCIES|NONE
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
DELTA_CLASS|DELTA_B_SOURCE_EQUIVALENT
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
CONTENT_READY|NO
```

## V. Phạm vi delta và trách nhiệm

- `DELTA_C_ACADEMIC_MATERIAL` là 10 Written lời giải mới và thay đổi W01 đề/rubric từ R00 sang R01, **đã qua review R01 targeted riêng**; không áp nhãn DELTA_B cho các chỉnh sửa học thuật đó.
- `DELTA_B_SOURCE_EQUIVALENT` của báo cáo Q18 này **chỉ** cho việc đính chính SHA và liên kết source provenance; không thêm nội dung toán.
- Theo báo cáo NotebookLM, `ACADEMIC_VERDICT=PASS` + `PEDAGOGICAL_SELF_LEARNING_READY=PASS` đã bảo toàn trên đúng snapshot R01 ở trên; việc phát hành website vẫn yêu cầu riêng hợp đồng V2, thủ tục release và chủ dự án cho phép.

> **Lưu ý AUTHORING:** Đây là bản ghi từ báo cáo được dán trong chat, không giả danh file Studio nguyên bản. Git SHA/sha256 của bản ghi này sẽ được khóa riêng để thực thi truy vết, đồng thời giữ nguyên bất biến các báo cáo NotebookLM R00 và R01 đã nhận ở các vòng trước.
