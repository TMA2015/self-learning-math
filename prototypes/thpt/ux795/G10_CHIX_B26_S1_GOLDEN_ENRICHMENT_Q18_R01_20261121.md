# G10 B26 · G0–G2 Q18 source-locked enrichment · 21/11/2026

**RECEIPT_ID:** `G10-CHIX-B26-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121`
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE`
**STANDARD_VERSION:** `3.2.0`
**LESSON_ID:** `G10-SGK-CHIX-B26`
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-ix/bai-26.md`
**BASELINE_SOURCE_BLOB:** `dafdfcfd801a0873f73e44d42ac102a1b8ffccbe`
**CANDIDATE_SOURCE_BLOB:** `72f336c1c0113d530f6f7687505b347b97c9d191`
**VENN_SVG_BLOB:** `7ea42ea55c18bd1b820fd42723f36fa8402a6b50`
**ORIGINAL_COIN_DIE_SVG_BLOB:** `e03d92262abb4aa99e88da565f07b7054adc803e`
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (bổ sung phần SGK về nguyên lí xác suất bé, tần số ước lượng; viết lại mạch sư phạm, 6 ví dụ tự biên)
**Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`
**INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED:** YES
**G2_CONTENT_SOURCE_QA:** `P0=0; P1=0` trong phạm vi source được soát; giao diện thực, MathJax, responsive, CI và owner P2 chưa kết luận
**OWNER_P2:** `OWNER_P2_PENDING`
**MASTER:** Issue #795; chỉ B26, không tự mở B27

## G0 — S1 và mạch outcome của đúng bài

S1 kiểm theo trang **in** SGK Toán 10 Kết nối tri thức với cuộc sống tập 2 **tr.77–82** (Chương IX, Bài 26), 3 mục: **Biến cố**, **Định nghĩa cổ điển của xác suất**, **Nguyên lí xác suất bé**; SBT B26 tr.61–63 chỉ là tham khảo họ dạng, không là nguồn để tự định nghĩa Core. Không lấy số trang PDF làm số trang in. Bài 27 là một phạm vi SGK khác, không mở.

| Outcome / phạm vi | Chứng cứ Knowledge và cách tự học |
| --- | --- |
| `G10-B26-EXPERIMENT_SAMPLE_SPACE` | Khám phá 1.1: kết quả hoàn chỉnh, bảng 2×6 đồng xu/xúc xắc, Vận dụng TRY01 + Đối chiếu/Kiểm lỗi |
| `G10-B26-EVENT_SUBSET` | Khám phá 1.2 + SGK 2.1: biến cố là tập con, chắc chắn/không thể, biến cố đối; TRY02 |
| `G10-B26-CLASSICAL_RATIO` | Khám phá 1.3 + SGK 2.2: hữu hạn, khác rỗng, đồng khả năng trước công thức; TRY03 |
| `G10-B26-COMPLEMENT` | Khám phá 1.4 + SGK 2.1–2.2: phần bù trên cùng Ω, phủ định đúng; TRY04 |
| `G10-B26-SCOPE_SMALL_PROBABILITY` | Khám phá 1.5 + SGK 2.3: nguyên lí xác suất bé, giới hạn thực hành, ước lượng nP(A) với n≥30 và ứng dụng tỉ lệ sinh; TRY05 |

**Bố cục:** đúng 4 tab ngang `Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp`; 5 Vận dụng được chuyển vào **Khám phá**, mỗi câu có **Đối chiếu** (fold tự mở) ngay dưới, và **Kiểm lỗi**/đường ôn ngay sau. Tab Kiến thức SGK chỉ diễn giải ba mục của sách, không giữ các câu Vận dụng lạc chỗ. Tab Ví dụ có 6 lời giải có Phân tích + Kiểm lại: gieo xu ba lần; biến cố đối số nguyên tố; bảng hai túi 4×3; tên nhãn không đồng đều; xác suất bé; ước lượng 200 sản phẩm. Tab Lỗi thường gặp chỉ giữ 2 D6 tổng quát, không lặp HELP của từng câu. Coin/die SVG gốc được đưa sát khái niệm; Venn SVG mới đặt sát biến cố đối, có alt/caption và giải thích đọc hình. Golden route guard kiểm **chính xác B26**, không copy guard B25/B23/B24.

## G1/G2 — khóa toán, ID, lời giải và phạm vi can thiệp

- Tất cả **5** `THPT-G10-CHIX-TRY01..TRY05` và **5** `HELP-G10-CHIX-TRY01..TRY05` giữ nguyên, cùng **2** `D6-G10-B26-01/02`; 5 lời giải **giữ nguyên từng đoạn HTML** so với source baseline, không thay stem, đáp án, item canonical hay rubric. 5 Đối chiếu chỉ đổi label fold; giữ hidden-by-default.
- **Ví dụ 3.1:** (3/8) từ ba dãy hai S trên 8 dãy; **3.2:** nguyên tố `{2,3,5,7}`, phần bù `{1,4,6,8,9}` có 4+5=9; **3.3:** 6/12 cặp có tổng ≥5, kiểm bằng từng hàng 0+1+2+3; **3.4:** 3/8 nhãn A; **3.5:** 1/1000 >0; **3.6:** 200×0,97=194 là **ước lượng**, không cam kết kết quả quan sát.
- **SGK ứng dụng nguyên lí xác suất bé:** với tỉ lệ bé gái 0,488, bé trai 0,512 và 10.000 bé gái, ước tính bé trai (10000×0,512/0,488≈10491,803), làm tròn **10.492**. Khẳng định thống kê là xấp xỉ; nguyên lí xác suất bé không biến (p>0) thành (p=0). Không đổi Scope của B27.
- Kiểm tĩnh source: **4/4** tab theo thứ tự; **5/5** TRY; **5/5** hidden answer; **7/7** HELP/D6; **6** ví dụ hộp lời giải; **2** hình; không còn nhãn `Em tự thử`/`Tự đối chiếu lời giải sau khi em đã thử`; không có route guard lớp/bài khác. Nội dung 5 answer HTML từng byte giống baseline (chiều dài 305,297,231,178,464). Q15 identity và các canonical links không nhân bản, không sửa Core/Practice/Final Submit/RD1/privacy/Firebase/Gemini/Mastery.
- **Q07 hình:** SVG bảng 2×6 cũ bất biến, hình Venn bản mới cho A và Ω\\A; SVG chỉ là hình học/miền tập hợp, không chứa lời giải đánh giá.

**Phân loại trung thực:** `DELTA_C_ACADEMIC_MATERIAL` cho diễn giải SGK và ứng dụng mới; bảo toàn toàn bộ câu/đáp án học sinh đã có, không ngụy trang thành DELTA_A. Không claim `ACADEMIC_REVIEWER_PASS` hoặc owner P2. B26 source mới là **một canonical duy nhất**; Git history + SHA/receipt chỉ phục vụ truy xuất, không có R02 shadow manuscript.

## G3–G5 release boundary

Đợi **exact-final-HEAD CI scoped** (source Q18 proof, Golden/AP, MathJax/TeX, SVG, responsive, Q15–Q16), kiểm trang build/gh-pages so với source, rồi mới đề xuất merge/deploy theo quyết định chủ dự án. **PR Draft, không merge/deploy từ receipt này.** Browser/P1/owner P2 vẫn `PENDING`; các bài B01–B25 đã được khóa snapshot, không thay cùng đợt.
