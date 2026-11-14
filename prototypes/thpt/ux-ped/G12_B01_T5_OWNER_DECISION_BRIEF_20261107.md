# #742 — T5 hồ sơ để chủ dự án quyết định (CHƯA NGHIỆM THU)
**07/11/2026 · RELEASE research only · SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18**

## Đề nghị quyết định
**Chưa phát hành biến thể B.** Cho phép dùng A/B cô lập để kiểm chứng khả năng tự học thật bằng [phiếu học sinh không có đáp án](G12_B01_T4_LEARNER_WORKSHEET_20261107.md) và [protocol/rubric dành cho người hướng dẫn](G12_B01_T4_LEARNER_AB_TRIAL_PROTOCOL_20261106.md). Sau khi có bằng chứng T4, chủ dự án chọn: giữ nguyên A; triển khai có giới hạn B dạng DELTA_A_UI; hoặc yêu cầu AUTHORING sửa lời dẫn/bản chất (DELTA_C, review có mục tiêu).

## Kết quả hiện có — KHÔNG phải phép đo học sinh
| Tiêu chí | A — trình bày tối thiểu | B — phân đoạn thị giác, nguồn học thuật giữ nguyên |
|---|---|---|
| Học liệu | Cùng snapshot B01 gốc, 7 mục | Cùng văn bản/định nghĩa/ví dụ/SVG/Tự thử, 7 mục |
| Nhịp đọc | Đoạn văn, công thức và metadata nối liên tục | Nhóm đoạn WHY/mục tiêu, đưa hướng dẫn đọc hình gần hình, Tự thử nổi bật |
| Câu hỏi, lời giải, điều kiện | Không đổi | Không đổi |
| Mức độ dễ đọc | Chưa đo ở học sinh | Chưa đo ở học sinh |
| Hiểu bản chất và chuyển giao | Chưa đo | Chưa đo |
| QA kỹ thuật (nguồn cô lập) | Có test source và browser 390/820/1440 | Có test source và browser 390/820/1440 |
| Tình trạng release | Nghiên cứu, không production | Nghiên cứu, không production |

**Phát hiện có căn cứ trong source B01:** §1 mở đầu nhiều ký hiệu \(s(t),v(t),f(x),f'(x)\) liên tiếp trong một đoạn; §4 hiện FIG_ID/tên SVG trực diện với người học; §3.2/§3.3 cần giữ ngoại lệ \(f'(x_0)=0\) không suy ra cực trị; §5 có bốn ví dụ kèm nhãn nội bộ; §6 có ba nhiệm vụ Tự thử. Đề xuất B tác động bố cục/khả năng đọc nhưng **không** sửa một điều kiện toán hay lý do chọn phương pháp.

## Khóa snapshot và cổng
- A/B prototype nguồn học thuật ban đầu: B01 Git blob `7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc`, SVG `e2696224533994826104e6c505d9dab26fc0a2e2`.
- B01 trên production hiện hành: Git blob `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c`; khác ở lời dẫn/phần §7 điều hướng sang chapter hub, không đổi nội dung học thuật §1–§6. Hai SHA được test đóng đinh, kiểm byte-equivalent §1–§6.
- Các snapshot Academic/PED PASS trước đó vẫn giữ; không gán dữ liệu prototype thành nội dung canonical, không thêm item, không xuất RD1, không gọi Gemini trên thực nghiệm, không ghi Firebase/Mastery.
- Q03/Q07/Q09–Q14, AP1–AP5 là những cổng của **cùng chuẩn** v1.2.0. Hồ sơ STANDARD_CHANGE_REQUEST trên PR cũ chỉ là lịch sử đề xuất, không tự nâng chuẩn và không được coi là chuẩn song song.

## Cổng T4 — thực nghiệm cần làm trước T5
1. Người học tương đương tiền đề, mỗi người chỉ đọc một biến thể A **hoặc** B, không chuyển tab; 4–8 người nếu có thể. Nếu mẫu ít, chỉ báo cáo quan sát, không khẳng định ưu thế tổng quát.
2. Thời lượng, trợ giúp, thiết bị giữ tương đương; đọc độc lập rồi giải hai nhiệm vụ giống nhau từ worksheet: **giải thích dấu đạo hàm** và **chuyển giao sang ví dụ chưa xem**.
3. Người hướng dẫn chấm theo rubric /4 + /4 ở T4 protocol, ghi mức dễ đọc 1–5, khó khăn và thời gian, chỉ lưu tổng hợp ẩn danh; ưu tiên việc hiểu đúng điều kiện toán.
4. So sánh với kiến thức tiền đề và ghi rõ giới hạn mẫu. Nếu B làm tăng hứng thú nhưng giảm khả năng giải độc lập thì **không** chấp thuận rollout theo chỉ số dễ đọc.

## Quyết định chỉ được ghi sau khi có bằng chứng
- **Nếu T4 B tiến bộ rõ ở hiểu/transfer mà không giảm độ chính xác, Q16/MathJax/SVG/QA responsive:** đề xuất một PR `DELTA_A_UI` cho **chỉ B01**, giữ nguyên academic/answer/rubric; owner phê duyệt riêng, 4/4 CI trên HEAD và P1/P2. Không mass edit các bài khác.
- **Nếu thiếu/mâu thuẫn bằng chứng:** giữ sản phẩm hiện hành và tiếp tục nghiên cứu; không nhập B.
- **Nếu cần viết lại lời dẫn hoặc đổi ví dụ/điều kiện:** `DELTA_C_ACADEMIC_MATERIAL`, AUTHORING + NotebookLM review đúng phần, cấm RELEASE tự sửa.

**Checkpoint:** `T2_SOURCE_OUTCOME_AUDIT=DONE / T3_AB_BROWSER_QA=PASS / T4_PROTOCOL_AND_ANSWER_FREE_WORKSHEET=READY / T4_REAL_LEARNER_RESULTS=PENDING / T5_OWNER_VERDICT=PENDING / PRODUCTION_UNCHANGED`. Đây là **T5 decision brief**, không phải verdict nghiệm thu hay lệnh phát hành.
