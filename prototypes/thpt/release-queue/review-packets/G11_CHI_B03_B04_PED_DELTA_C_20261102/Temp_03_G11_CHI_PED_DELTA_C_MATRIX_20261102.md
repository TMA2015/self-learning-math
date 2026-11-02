# Temp_03 — G11 ChI B03/B04 targeted PED Delta_C: source/delta matrix and release gates

**Trạng thái:** DRAFT_NOT_ACADEMICALLY_REVIEWED · DELTA_C_PROPOSED_UNAPPLIED · A6 SYSTEM_HOLD. Đây là đề xuất dành cho reviewer, **không phải nội dung đã đưa lên website**. Không sửa đáp án, rubric, canonical ID, hình SVG, RD1 hay dữ liệu học sinh.

**Source lock:** PR tác giả #681, public whole-chapter Git blob `599d12ac7c2252001f881833c39978f94112cee4`; Academic PASS ChI tại Issue #682 chỉ áp dụng đúng snapshot cũ. Dự thảo này **không kế thừa** PED PASS và cần review targeted theo #691/#675. S1: cần reviewer đối chiếu trực tiếp SGK/SBT Toán 11 KNTT tập 1; Issue #682 ghi SBT B03 trang in 11–18, B04 19–24, cuối chương 25–30, chưa coi đó là kiểm chứng trang trực tiếp của A6.


**PR tích hợp:** https://github.com/TMA2015/self-learning-math/pull/697 · **PR tác giả:** https://github.com/TMA2015/self-learning-math/pull/681 · **Issue nguồn:** https://github.com/TMA2015/self-learning-math/issues/682 · **Issue sư phạm:** https://github.com/TMA2015/self-learning-math/issues/691.

## Delta matrix (không áp dụng vào học liệu live)

| Phần | Bản hiện tại | Đề xuất thay đổi | Gate |
|---|---|---|---|
| B03 trước D1 | Đi thẳng 7 tính chất/định nghĩa sin/cos/tan/cot | Động cơ điểm quay → hàm theo x; bảng 5 góc; giải thích chu kỳ và miền xác định | DELTA_C, PED1–3 |
| B03 D5 | 4 SVG đúng blob, chú thích chung | Thuyết minh cách đọc sin, cos, tan, cot theo từng hình; không sửa SVG | DELTA_C, PED4/AP3 |
| B03 trước Core | Chưa có Tự thử | Micro-check chu kỳ `sin(x+2π)`, feedback chỉ sau tự nghĩ | DELTA_C, PED6 |
| B04 trước D1 | Mở bằng 8 quy tắc giải phương trình | Đặt bài toán tìm toàn bộ góc có tung độ 1/2; hai họ nghiệm + vòng quay | DELTA_C, PED1–3 |
| B04 đồ thị | Chỉ dẫn link về B03 | Giải thích giao điểm đồ thị sin với đường ngang và sự lặp nghiệm | DELTA_C, PED4 |
| B04 trước Core | Chưa có Tự thử | Micro-check `sin x=0` trên một vòng rồi toàn ℝ | DELTA_C, PED6 |
| D2 B03/B04 | 5+6 ví dụ gốc | Giữ nguyên, reviewer kiểm PED5; nếu cần sửa phải tách delta | REVIEW_REQUIRED |
| D3/D4/D6 | 42 formative + 4 Written; 8 D6 | Giữ nguyên ID, đề, đáp án, rubric, placement, source SHA | UNCHANGED |
| D5 SVG | 4 B03 SVG source-locked | Không thay byte/đồ thị | UNCHANGED |
| RD1 | 20 câu Written độc lập, private SHA256 `b34b5f232b41e03eaddd1c3566ce2f73881ec09f8b3449432814b763d754f107` | Không copy stem/key/rubric vào public repo, không activate | PRIVATE_HOLD |
| End-ChI Final Submit | CHƯA KÍCH HOẠT | Không thay trong gói PED này; xử lý riêng theo Issue #662 | R3/R4 HOLD |

## Reviewer acceptance (không tự đánh dấu PASS)

- [ ] S1 đối chiếu SGK/SBT trực tiếp: phạm vi, thuật ngữ, vị trí của B03/B04; ghi trang in, không chỉ trang PDF.
- [ ] PED1–PED3: động cơ và bản chất xuất hiện trước định nghĩa/quy tắc, nối được B01/B02/B03.
- [ ] PED4: bốn thuyết minh phù hợp nội dung SVG nguồn; không suy ra điều đồ thị không thể hiện.
- [ ] PED5: ví dụ hiện hữu có lí do chọn cách làm, kiểm điều kiện, lỗi điển hình; ghi thiếu sót theo ví dụ.
- [ ] PED6: Tự thử đúng toán, đúng thứ tự và không thành canonical Readiness/điểm.
- [ ] AP1–AP5: phân nhóm ý, MathJax, hình, diễn đạt và responsive phải được QA trên learner page **sau** khi reviewer PASS; P2 iPhone/iPad vật lý chưa có bằng chứng.
- [ ] Nếu reviewer yêu cầu sửa toán, đáp án, điều kiện, hình hoặc độ phủ: mở targeted Delta_C bổ sung, không tự PASS.
- [ ] A6 chỉ tích hợp sau verdict targeted + source-lock SHA mới + exact-head CI; R1–R5 và owner conditional authorization vẫn phải thỏa.

**Kiểm kê không đổi:** G11 ChI 26 RD0 outcomes, 46 public canonical (42 Core/Practice + 4 Written), 6 SVG toàn chương, 8 D6; 20 private RD1. **Không cấp Academic/PED/AP/R/PASS** trong packet này.

## Phân loại theo Source 07 v1.1

`DELTA_C_TARGETED_PED_ACADEMIC_REVIEW_REQUIRED` đối với **văn bản dạy học dự kiến bổ sung**. Việc tạo packet/đính kèm link này là `DELTA_A_METADATA_ONLY` và **không sửa website**. Các ID, lời giải, đáp án và hình học gốc không bị tác động.
