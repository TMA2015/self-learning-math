# Yêu cầu phản biện độc lập Delta C — 27 trang Kiến thức Toán 10

**Nguồn yêu cầu:** RELEASE · **Ngày:** 10/11/2026 · **Theo dõi:** [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795) · **Draft nguồn:** [PR #797](https://github.com/TMA2015/self-learning-math/pull/797).

**Tính chất:** yêu cầu AUTHORING/NotebookLM kiểm tra, **KHÔNG phải biên bản Academic/PED PASS**; không cấp `CONTENT_READY`, không sửa nguồn học thuật từ RELEASE.

## 1. Bản nguồn bất biến và phạm vi

- Mốc nội dung kiến thức ứng viên: `7c25959a87aa1aea38ba2c4b329f5b446052978c`. Các commit sau chỉ thêm test, báo cáo QA, không đổi 27 trang; nếu có sửa bài sau này thì phải đối chiếu Git blob lại.
- Danh sách **27/27 Git blob SHA đúng từng file**: [RELEASE_SOURCE_INTAKE_R01](UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md). Đối chứng `main cbd3c86ca8c41f13baf16b37418a89dee8981496` (đã có tiêu đề ngắn PR #800).
- Phạm vi: `docs/thpt-preview/sgk/chuong-*/bai-*.md` B01–B27; chỉ **Kiến thức**, 4 tab mẫu B đã owner duyệt. Không thay Core/Luyện tập/Tự kiểm tra, nguồn RD1 kín, Firebase, Written/Anchor hoặc dữ liệu học sinh.
- [Bảng Delta C theo bài](UX795_G10_DELTA_C_RELEASE_IMPACT_R01_20261110.md): 27/27 tập canonical First Try/HELP IDs giống bản cũ (137 First Try và 115 HELP); 11 SVG ứng viên mới, mỗi hình cần đối chiếu ngữ cảnh toán. Đây là **bằng chứng kỹ thuật**, không phải academic verdict.

## 2. Tiêu chí phản biện đúng phần bị ảnh hưởng

1. **Q01–Q02/Q03**: đúng chương trình, SGK/SBT Kết nối tri thức S1, đủ khái niệm, điều kiện, kết luận và năng lực theo từng bài/outcome. Ưu tiên những diễn đạt mới có thể thêm giả thiết không có trong sách.
2. **Q04–Q08 và Q09–Q14**: ví dụ có suy luận vì sao chọn phương pháp, tính toán/đáp án đúng, hình bảng/sơ đồ đúng thông số và ý nghĩa; mạch dẫn tự nhiên giúp học sinh tự học, Tự thử trước Core mặc định đóng kèm D6. Không coi một bài có nhiều hình/công thức là đủ độ sâu.
3. **Q07/PED4 hình mới:** B02 membership/subset; B06 tam giác vuông; B16 parabol; B17 bảng dấu; B19 vectơ pháp tuyến; B20 khoảng cách; B21 đường tròn/tiếp tuyến; B22 tiêu điểm/đường chuẩn; B23 phép cộng/nhân; B24 chỉnh hợp/tổ hợp; B25 tam giác Pascal. Kiểm hình minh họa đúng điều kiện toán và đoạn văn dùng hình.
4. **Q15–Q16:** không nhân bản canonical item ID; giữ First Try và D6, không chèn đề/đáp án RD1 kín, không biến tự đối chiếu thành Official Readiness hay Mastery, không thay Final Submit.
5. **Q17–Q18:** kết luận riêng cho 27 SHA nguồn đúng snapshot, không tái sử dụng Academic/PED PASS cũ khi lời giảng/ví dụ/hình thực chất đã khác. Giữ nguyên PASS của phần/bài không chịu ảnh hưởng. Báo P0/P1/P2, `MINIMAL_DELTA`, `SOURCE_RECEIPT`, Lesson/Outcome/Item ID và evidence trích đúng nguồn S1.

## 3. Kết quả yêu cầu bàn giao về RELEASE

- Một verdict Academic + một verdict PED theo bài/outcome chịu ảnh hưởng, nêu rõ PASS/FAIL/HOLD và ID cần khắc phục. Không cho PASS toàn bộ chỉ vì 27 trang render/81 lượt browser QA PASS.
- `SOURCE_RECEIPT` và danh mục SHA từng bài đối chiếu đúng bảng trên, bằng chứng phản biện độc lập đúng **5 Permanent Sources v2.1** NotebookLM THPT hiện hành cùng S1; không thêm nguồn v2.0 hoặc nguồn thứ sáu.
- Nếu có lỗi học thuật, sửa ngay ở nguồn được giao của AUTHORING, kiểm minimal delta và cập nhật SHA/verdict chỉ phần bị ảnh hưởng. Khi đủ Q01–Q18 mới bàn giao theo hợp đồng V2/ready/REGISTER hiện hành, không tạo chuẩn mới.

## Prompt review 5 câu (để sao chép vào NotebookLM nếu người phụ trách cần)

Kiểm tra độc lập phần Kiến thức SGK Toán 10 B01–B27 ở PR #797 theo nguồn KNTT S1 và chuẩn thống nhất Q01–Q18; sử dụng đúng 5 Permanent Sources v2.1 NotebookLM THPT đã được chủ dự án chọn. Đối chiếu từng bài/outcome giữa bản ứng viên có Git blob SHA trong bảng RELEASE intake với kiến thức/điều kiện/ví dụ/hình đúng nguồn, chỉ phản biện những Delta C mới thay đổi chứ không kiểm lại ngân hàng câu bất biến. Đặc biệt kiểm 11 hình SVG mới và Tự thử Q14 mặc định đóng cùng D6, đồng thời bảo vệ Q15/Q16/Final Submit. Trả verdict Academic/PED riêng với danh sách PASS/HOLD/FAIL, P0/P1/P2, ID bị ảnh hưởng, SOURCE_RECEIPT SHA và MINIMAL_DELTA cụ thể. Không coi báo cáo QA trình duyệt của RELEASE là chứng cứ Academic/PED PASS.

## 4. Trạng thái RELEASE

- OWNER_RELEASE_AUTHORIZED_WHEN_READY: **YES**, chủ dự án đã cho phép phát hành gói 27 trang Kiến thức lớp 10 khi đủ cổng; không cần hỏi lại.
- Renderer/browser QA: 27/27 HTML và 81/81 Chromium tại [run #42771625998](https://github.com/TMA2015/self-learning-math/actions/runs/42771625998) PASS.
- THPT R4 hiện **HOLD đúng**: B01 SHA `3e12aa813e5fa472f7d84b754224ca2159b53935` khác khóa nguồn lịch sử `0b8729751a2de0aec450543adfd1808a1a1e1483`; chỉ thay khóa khi có Academic/PED Q18 receipt hợp lệ, không nới gate.
- Sau receipt, RELEASE sync PR #797 với main, chạy lại full QA, kiểm Golden/Q15/Q16 và phát hành theo quyền đã cấp. **Hiện 0/27 nội dung mới đã deploy.**
