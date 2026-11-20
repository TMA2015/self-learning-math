# SGK Toán 10 Chương VI B15–B18 · HELP sau Vận dụng · Q18 audit R01 · 20/11/2026

**RECEIPT_ID:** G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18; Golden R4 và quy trình G0–G5 hiện hữu. Không thêm tiêu chuẩn/bộ test.  
**SOURCE_SCOPE:** `docs/thpt-preview/sgk/chuong-vi/bai-{15,16,17,18}.md`; 4 canonical source riêng biệt, không nhân bản item/HELP.  
**DELTA:** `DELTA_A_UI` chuyển vị trí, `DELTA_C_ACADEMIC_MATERIAL` tác động đường khắc phục theo outcome; không đổi lời giải/công thức/đáp án.  
**OWNER_P2:** snapshot nghiệm thu cũ nguyên vẹn; snapshot mới chưa có P2. Chuyển vị trí được tự xác minh theo `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` v3.2 trên affected scope; độc lập reviewer **NOT_CLAIMED**.  
**ISSUE:** #795 audit B23→B01.

| LESSON | PREVIOUS_SOURCE_BLOB (Git) | CORRECTED_SOURCE_BLOB (Git) | HELP đã chuyển | D6 tổng quát còn |
|---|---|---|---:|---:|
| B15 | `7f6448acf6e127b6dc40f3e34f155f151bc7d23b` | `ee38fdfeddc78a22a527a6a7449347f86eeee422` | 5 | 0 |
| B16 | `b8c808e62e954991004df44db4c69fe9189a949d` | `190f351516932caf0b8a417132f15e7915f79993` | 5 | 0 |
| B17 | `a919754501790373425ef20c9e6ab6b4aa9e79f1` | `bbfc3fdb1e2a5e153bfe20f933fbf8844263552a` | 5 | 0 |
| B18 | `6ddb8a132aab48ee8a6e2c70bb2b8ce0bfb68af8` | `3d8b0ed45b606f608db4b2a55ecfa8a273a8c802` | 4 | 0 |

## G0–G2: Ma trận item–HELP sau chuyển

- **B15:** 5 câu Vận dụng TRY01, TRY02, TRY03, TRY05, TRY04; 5 HELP có cùng số TRY tương ứng. Đưa mỗi HELP sau Đối chiếu của câu tương ứng. Tab Lỗi thường gặp không tạo câu lỗi mới.
- **B16:** 5 câu TRY06, TRY07, TRY09, TRY08, TRY10; tra ID thay vì dựa thứ tự cũ của các lỗi (trước đó xếp TRY10 đầu tiên). Không tráo nhiệm vụ toán.
- **B17:** 5 câu TRY11, TRY12, TRY13, TRY15, TRY14; 5 HELP tương ứng. Giữ nguyên các dạng bất phương trình và điều kiện xác định.
- **B18:** 4 câu theo canonical First Try: `THPT-G10-CHVI-TRY16`→`HELP-G10-CHVI-TRY16` (hai căn), `THPT-G10-B18-C01`→`HELP-G10-CHVI-TRY17` (một căn, vế phải cần không âm), `THPT-G10-CHVI-TRY18`→`HELP-G10-CHVI-TRY18` (nghiệm ngoại lai), `THPT-G10-CHVI-TRY19`→`HELP-G10-CHVI-TRY19` (thang và độ dài). **Không** suy ra HELP17 từ số thứ tự ID B18-C01 nếu chưa so đề.
- Mỗi bài chỉ chuyển khối HELP đầy đủ (nguyên 5 bước), đổi tiêu đề khung đóng thành `Kiểm lỗi`, không đặt HELP trước khi học sinh thử. Bài B15–B18 không còn D6 có tính tổng quát độc lập tại tab 4, nên không tự viết lỗi mới cho đủ mục.
- Giữ toàn bộ First Try, câu trả lời/lập luận/đáp án gốc, liên kết luyện, SVG/hình hiện hành, RD1/Q16, không ghi Mastery từ luyện tự đối chiếu. Tất cả lịch sử R01/R02/R03 trước đó vẫn khóa tại blob SHA của chính nguồn đã nghiệm thu.

**G2:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` affected placement: 19 HELP IDs duy nhất, ghép đúng từng First Try, 19 khung Kiểm lỗi đóng, không thay đáp án/công thức/hình, không tạo D6 giả; P0=0/P1=0 trên scope chuyển vị trí. Không nhận là độc lập NotebookLM PASS.  
**G3–G5:** QA hiện hành và receipt SHA trên HEAD thực, test scoped theo phạm vi, nghiệm thu thiết bị thật sau publish nếu đủ cổng; không dùng CI làm Academic/PED/P2 PASS.

## Chốt Q18 theo yêu cầu owner 20/11 — chỉ đổi chỗ

Đã rà trực tiếp 4 file đích và tiền nhiệm theo 8 Git SHA ở bảng: B15 5 HELP, B16 5 HELP, B17 5 HELP, B18 4 HELP. Các marker `data-thpt-first-try-id` / `data-thpt-help-id` không đổi và không trùng; 19 chỉ dẫn năm bước được chuyển nguyên khối dưới đúng Đối chiếu trong Khám phá (bỏ tiêu đề vị trí cũ), 4/4 bài vẫn đủ Golden. Biểu thức toán cũ đều được giữ; các lời giải/đáp án không bị sửa. B16 đảo thứ tự HELP10/06–09 về đúng Vận dụng tương ứng; B18 dùng đúng HELP17 cho canonical B18-C01 sau đối chiếu nội dung. Không phát sinh năng lực/đề/đáp án/rubric mới, không thay Mastery/RD1/Final Submit. Kiểm Q08/Q14/Q15/Q16/Q18 affected scope, **không suy rộng thành Academic PASS mới của toàn chương**, không tự cấp Owner P2; browser và Deploy chỉ căn cứ exact candidate HEAD.
