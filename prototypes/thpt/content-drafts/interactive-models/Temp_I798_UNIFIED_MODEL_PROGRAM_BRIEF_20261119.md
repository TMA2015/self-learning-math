<!-- I798_UNIFIED_22_MODEL_PROGRAM_20261119 -->
# QUYẾT ĐỊNH HỢP NHẤT — 19/11/2026 · ONE MATH LAB PROGRAM

**Quyết định mới nhất của chủ dự án:** dừng hai luồng phát triển tách rời, tiếp tục **một chương trình 22 vị trí mô hình của 22 Chuyên đề**, tận dụng toàn bộ mã nguồn ứng viên cũ và **13 HTML độc lập vừa hoàn thiện**. Mục tiêu là một nguồn định danh, không xóa hồ sơ/PR/commit lịch sử, không tự hợp nhất Git branches/merge/deploy, không tăng số lượng theo chỉ tiêu.

## Một nơi quản lý, hai nhóm nguồn (không đếm cộng thành 35 mô hình)

- **Danh mục và nguồn định danh duy nhất:** **22 MODEL_ID trên chính register này**, dùng placement/outcome và PR source hiện có làm baseline; **PR #880** là Draft điều phối **AUTHORING Math Lab** (không phải website Release).
- **Một Issue điều hành còn mở:** **[#798](https://github.com/TMA2015/self-learning-math/issues/798)** theo dõi tiếp tục mô hình, đối soát, quyết định chọn nguồn, blocker/QA/handoff; không mở thêm issue song song cho "13 mô hình mới". [#865](https://github.com/TMA2015/self-learning-math/issues/865) vẫn đóng như ledger AUTHORING 22 Chuyên đề, không mở lại.
- **Nguồn cũ có mã chạy THẬT:** 22 module/placement từ **11 file HTML thực** trên Drafts [#844](https://github.com/TMA2015/self-learning-math/pull/844), [#801](https://github.com/TMA2015/self-learning-math/pull/801), [#793](https://github.com/TMA2015/self-learning-math/pull/793), [#846](https://github.com/TMA2015/self-learning-math/pull/846), [#848](https://github.com/TMA2015/self-learning-math/pull/848), [#853](https://github.com/TMA2015/self-learning-math/pull/853), [#855](https://github.com/TMA2015/self-learning-math/pull/855), [#858](https://github.com/TMA2015/self-learning-math/pull/858), [#860](https://github.com/TMA2015/self-learning-math/pull/860), [#880](https://github.com/TMA2015/self-learning-math/pull/880). **PR #860 đã CLOSED (SUPERSEDED)**; link là hồ sơ nguồn lịch sử, không chứng minh đây là nhánh học liệu CĐ20 hiện hành.
- **Nguồn mới có mã chạy THẬT:** Library `/SLM/Research-Issue798/Temp_I798_MODELS_MASTER_CURRENT.zip`, **13 HTML đơn lẻ**, ZIP **5,141,797 bytes**, SHA256 `bed77d2c29761f6056ddd80a8f884123bf6e6a381fd473bb909751093a98c45c` (CRC PASS). **Không tự xem ZIP cá nhân là 13 nguồn Git canonical**, không ghi đè HTML #844/#801/... khi chưa kiểm so điều kiện và quyết định source owner. Crosswalk chi tiết `/SLM/Research-Issue798/Temp_I798_CROSSWALK_22TOPICS_VS_13_STANDALONE_20261119.md` SHA256 `158bc61c85d7863d6bacb4ff4b651b81277cab05712705c1dd9af50e0fe31666`.
- **Phân loại đúng 22 vị trí:** A **4** cùng mục tiêu chính (**CĐ05, 06, 11, 20**); B **6** mới hỗ trợ một phần (**CĐ02, 08, 09, 13, 18, 21**); C **12** chưa có standalone mới tương ứng (**CĐ01, 03, 04, 07, 10, 12, 14, 15, 16, 17, 19, 22**). **Cả 12 nhóm C đã có mã ứng viên trên GitHub**. Nhãn A/B/C là so chức năng, **không phải G1–G4 PASS**.
- **3 HTML mới bổ trợ SGK, không ép vào 22 dòng:** `Temp_I798_FINAL_08_SIN_COS_PERIOD.html`, `09_TAN_COT_ASYMPTOTES.html`, `10_TRIG_EQUATIONS.html` dùng cho SGK G11 B03/B04; vẫn được giữ trong **cùng một thư viện vật lý** như tài nguyên SGK bổ trợ, **không tự tạo Topic MODEL_ID thứ 23–25**. Bản 13 mới có thể tiếp tục bổ sung mô hình sau khi hoàn thành danh mục đã chọn, không trùng chức năng.

## Cách làm tiếp — đúng một chương trình, không clone hai source-owner

1. **A: 4 candidate:** đối chiếu công thức, giả thiết, phạm vi thao tác, kết quả và PED; chốt *một* MODEL_ID/source owner sau khi xác minh, không tự nhận bản HTML mới đã thay source cũ.
2. **B: 6 partial:** giữ bản tốt nhất, bổ sung chính xác outcome còn thiếu (Bayes hậu nghiệm, tích vô hướng/hình chiếu, Oxyz projection, f′, dấu tam thức, giới hạn một phía); kiểm toán phần ảnh hưởng, không tạo hai MODEL_ID cho một mô hình.
3. **C: 12 source-existing:** dùng mã HTML trên Draft (7 scene từ #844, 4 standalone #846/#848/#853/#858, 1 scene dữ liệu #880), sửa/chuẩn hóa UI và hoàn thiện **từng mô hình độc lập**, không viết lại nếu source đủ tốt.
4. **Giữ chuẩn duy nhất Q01–Q18:** model chỉ là PUBLIC_DISCOVERY_NO_MASTERY. Chốt từng model khi toán/giới hạn/phương pháp đúng, tương tác/keyboard/responsive/Canvas/SVG đúng, render Golden tương thích và có receipt SOURCE_SHA. Nội dung mới thực sự DELTA_C mới qua review phần ảnh hưởng; sửa UI không kéo lại học liệu 22 CĐ đã READY.
5. **Cổng tách bạch:** 13 HTML mới có QA Chromium độc lập; 22 candidate cũ mới G0 source/outcome và G2 CSS source. **G1 academic/PED, G2 rendered visual, G3 browser/control, G4 handoff là OPEN** ở chương trình cũ; không cộng số QA hai bộ thành QA canonical. Không sửa học liệu/22 source SHA, ngân hàng item, RD1, Final Submit, Mastery, Firebase, Golden, website; không merge/deploy.
6. **Nhật ký:** giữ nguyên tất cả comment cũ của Issue #798, lịch sử PR #880 và các PR gốc. Từ nay **sửa sổ này**, cập nhật đúng một Issue #798 và dùng một MASTER_CURRENT khi chọn/khóa từng HTML; không mở thêm danh mục cạnh tranh.

## Ma trận một bản — ba cột bổ sung (HTML mới / mức / khoảng trống)

Bảng register nguyên gốc bên dưới được mở rộng bằng đúng ba cột này; **22 MODEL_ID, Outcome, SHA nguồn và đường dẫn cũ được bảo toàn**. Các con số 13/22 không phải tỉ lệ hoàn thành.

---
## Link đến một sổ hoạt động thực tế

Sổ giữ 22 MODEL_ID có các cột mới là [Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md](./Temp_SLM_MATH_LAB_MODEL_REGISTER_22_R01_20261117.md). Bản briefing này chỉ là quyết định lịch sử để tra cứu, **không phải registry thứ hai**.
