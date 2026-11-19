# G10 ChV B14 · DELTA_A_UI · Nhãn “Em vận dụng.” nhất quán · 19/11/2026

**RECEIPT_ID:** G10-CHV-B14-EM-VAN-DUNG-LABEL-DELTA-A-R01-20261119
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 §X-C/Q18
**MODE:** DELTA_A_UI · owner-reported iPhone real-device discrepancy (B14 §1.2.2; all 5 First Try labels)
**OWNER_REPORT:** Hình chụp iPhone hiển thị “Em tự thử.” tại mục 1.2.2; người dùng báo “Còn lỗi: em tự thử.”
**DECISION:** Khớp cách gọi đã nghiệm thu B12/B13: 5/5 câu tự thực hành trước Core đều sử dụng nhãn “Em vận dụng.”; không tạo nhãn “Em tự thử.” độc lập.
**BASE_MAIN_COMMIT:** `b85723c1cc3252862f41a5bd7f78dfbfb4f4b130`
**B14_PREVIOUS_SOURCE_BLOB:** `7538771fdaede3de14143090db35e74a3c7939ff`
**B14_CURRENT_SOURCE_BLOB:** `a23afab8015c83813f0c8cbe918efa93e58aa623`
**HISTORICAL_Q18_RECEIPT_BLOB:** `a44de216a5f9e488163a1eb15eda4aa4467a9188`
**B12_P2_LEARNER_BLOB:** `a2ea6c909cdd2317188b13c2bde22e7923dba3de`
**B13_P2_LEARNER_BLOB:** `cb5adaa7804902fece7dd4ec30575733efd4c9c1`
**GOLDEN_CSS_BLOB:** `bda67d4ed6368179c5a8c9e0a368e149304ab71c`
**PUBLIC_B13_B14_BANK_BLOB:** `ddd5ec947029f644865110f2f381047214499e3e`

## Đối chiếu byte-exact

- Chỉ thay **ba** cụm `**Em tự thử.**` bằng `**Em vận dụng.**`, tại ba First Try `THPT-G10-CHV-TRY11`, `TRY12`, `TRY13`. Hai mục `TRY10` và `TRY14` vốn đã là “Em vận dụng.” và giữ nguyên.
- Dùng phép nghịch đảo `current.replaceAll("**Em vận dụng.**","**Em tự thử.**")` **không hợp lệ**, vì làm thay đổi cả hai nhãn đã đúng. Khi kiểm chứng phải khôi phục theo vị trí tương ứng TRY11/12/13, xác nhận đúng blob gốc và blob mới.
- Nội dung các câu hỏi, điều kiện toán, lời giải, nút Đối chiếu, 5 `item_id`, 2 HELP, 3 ví dụ giải, 4 Golden tabs, 2 SVG, CSS, JS, canonical Core/Practice/Written, Final Submit/RD1 và Mastery bất biến.
- Không sửa biên bản Q18 học thuật của PR #917, không yêu cầu review Academic/PED mới cho sửa nhãn hiển thị tương đương. `DELTA_A_UI` và source-lock riêng chỉ ghi nhận bản sau phát hành.
- Đây là lỗi được báo trong P2 Bài 14; **OWNER_P2 vẫn PENDING** cho tới khi chủ dự án xác nhận thực tế sau hotfix.

## Cổng QA và phát hành

Cần source-fidelity test khôi phục bản gốc đúng ba vị trí và đối chiếu cả hai Git blob SHA; browser 390/820/1440 chứng minh 5/5 nhãn “Em vận dụng.” trước 5/5 nút “Đối chiếu”, 0 “Em tự thử.”, giữ số lượng và nội dung các trường bảo vệ; exact-final-HEAD CI; deploy Pages; đối chiếu HTML xuất bản với SHA nguồn. Không tự nhận P2 PASS.
