# SGK Toán 10 Chương VI B15–B18 · HELP sau Vận dụng · Q18 audit R01 · 20/11/2026

**RECEIPT_ID:** G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18; Golden R4 và quy trình G0–G5 hiện hữu. Không thêm tiêu chuẩn/bộ test.  
**SOURCE_SCOPE:** `docs/thpt-preview/sgk/chuong-vi/bai-{15,16,17,18}.md`; 4 canonical source riêng biệt, không nhân bản item/HELP.  
**DELTA:** `DELTA_A_UI` chuyển vị trí, `DELTA_C_ACADEMIC_MATERIAL` tác động đường khắc phục theo outcome; không đổi lời giải/công thức/đáp án.  
**OWNER_P2:** snapshot nghiệm thu cũ nguyên vẹn, thay đổi mới chưa có P2/Academic/PED verdict độc lập; status `AUTHORING_REVIEW_HOLD`.  
**ISSUE:** #795 audit B23→B01.

| LESSON | PREVIOUS_SOURCE_BLOB (Git) | CORRECTED_SOURCE_BLOB (Git) | HELP đã chuyển | D6 tổng quát còn |
|---|---|---|---:|---:|
| B15 | `7f6448acf6e127b6dc40f3e34f155f151bc7d23b` | `f83a6666c8a2657834b13d3ec99a3d7358ff34f6` | 5 | 0 |
| B16 | `b8c808e62e954991004df44db4c69fe9189a949d` | `eb27ad2ebb89e78bd54cd310030a5c8322282468` | 5 | 0 |
| B17 | `a919754501790373425ef20c9e6ab6b4aa9e79f1` | `d8b5d7d21b52bf784644abe27ec8029ebf4e8903` | 5 | 0 |
| B18 | `6ddb8a132aab48ee8a6e2c70bb2b8ce0bfb68af8` | `6c9ab8fb893ea533c66c8e6848ae0494362ef8ea` | 4 | 0 |

## G0–G2: Ma trận item–HELP sau chuyển

- **B15:** 5 câu Vận dụng TRY01, TRY02, TRY03, TRY05, TRY04; 5 HELP có cùng số TRY tương ứng. Đưa mỗi HELP sau Đối chiếu của câu tương ứng. Tab Lỗi thường gặp không tạo câu lỗi mới.
- **B16:** 5 câu TRY06, TRY07, TRY09, TRY08, TRY10; tra ID thay vì dựa thứ tự cũ của các lỗi (trước đó xếp TRY10 đầu tiên). Không tráo nhiệm vụ toán.
- **B17:** 5 câu TRY11, TRY12, TRY13, TRY15, TRY14; 5 HELP tương ứng. Giữ nguyên các dạng bất phương trình và điều kiện xác định.
- **B18:** 4 câu theo canonical First Try: `THPT-G10-CHVI-TRY16`→`HELP-G10-CHVI-TRY16` (hai căn), `THPT-G10-B18-C01`→`HELP-G10-CHVI-TRY17` (một căn, vế phải cần không âm), `THPT-G10-CHVI-TRY18`→`HELP-G10-CHVI-TRY18` (nghiệm ngoại lai), `THPT-G10-CHVI-TRY19`→`HELP-G10-CHVI-TRY19` (thang và độ dài). **Không** suy ra HELP17 từ số thứ tự ID B18-C01 nếu chưa so đề.
- Mỗi bài chỉ chuyển khối HELP đầy đủ (nguyên 5 bước), đổi tiêu đề khung đóng thành `Kiểm lỗi`, không đặt HELP trước khi học sinh thử. Bài B15–B18 không còn D6 có tính tổng quát độc lập tại tab 4, nên không tự viết lỗi mới cho đủ mục.
- Giữ toàn bộ First Try, câu trả lời/lập luận/đáp án gốc, liên kết luyện, SVG/hình hiện hành, RD1/Q16, không ghi Mastery từ luyện tự đối chiếu. Tất cả lịch sử R01/R02/R03 trước đó vẫn khóa tại blob SHA của chính nguồn đã nghiệm thu.

**G2:** author source placement kiểm tra đối chiếu từng item, 19 HELP IDs vẫn duy nhất; cần phản biện độc lập pedagogy chịu ảnh hưởng trước khi cho `CONTENT_READY`.  
**G3–G5:** QA hiện hành và receipt SHA trên HEAD thực, test scoped theo phạm vi, nghiệm thu thiết bị thật sau publish nếu đủ cổng; không dùng CI làm Academic/PED/P2 PASS.
