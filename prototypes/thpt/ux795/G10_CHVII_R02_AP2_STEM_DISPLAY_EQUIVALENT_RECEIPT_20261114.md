# G10 ChVII — AP2 hiển thị toán trong 25 đề Vận dụng (14/11/2026)

**Phạm vi:** Sửa **duy nhất cách hiển thị công thức trong 25 câu Vận dụng** B19–B22, dựa trên báo cáo kiểm tra website Chromium của Work và source PR #856. Đây là `DELTA_B_SOURCE_EQUIVALENT`/AP2, **không thay bài toán** và không tạo chuẩn học thuật mới. Kết luận Academic/PED PASS của nguồn giảng R02 được bảo toàn cho nội dung không đổi.

**Kết quả tự đối chiếu với nguồn SGK đã tích hợp:** 25/25 đề giữ nguyên nội dung chữ, số, phương trình, điều kiện, tọa độ, vai trò mở rộng, câu hỏi, dấu và đơn vị sau phép chuẩn hóa ký pháp hiển thị. Chỉ thay ký pháp hiển thị `\( ... \)`, vectơ `\vec{}`, số mũ `x^2`, phân số `\dfrac{}{}`, chỉ số `d_1` và dấu so sánh. Phép thử so sánh được với **25 đề gốc** trong Git commit `bfc15b552a1ea697edb1327f0a48d7a95bbb73ed`.

| Bài | Source trước AP2 stems (Git blob) | Source sau AP2 stems (Git blob) | Số đề | Equivalence |
| --- | --- | --- | ---: | --- |
| B19 | `d8ae15ed503c11810b5d8390002a856570b41202` | `2be35615045fbd20278959e9cae814ae1814237d` | 7 | 7/7 |
| B20 | `fc313698286697fd5827561cb1b4d41aa777c2a7` | `02734542234ef3a634ace63062893be727da8540` | 5 | 5/5 |
| B21 | `797b4fdb77c3ea74b62f2f048cceb80137f4b0ef` | `e12b5dce8178a44cddd1d82aea04e3d93a10d825` | 5 | 5/5 |
| B22 | `2024edffecbf0759cc290a28a2cd8dd239acb245` | `0e8d53abf7d64453e91704e813ca741645f7fef1` | 8 | 8/8 |

**Giới hạn thay đổi bảo vệ Q15–Q16:** Chỉ 25 dòng markdown `**Em vận dụng.**` khác so với snapshot trước. Tất cả 25 ID canonical, các câu Đối chiếu, lời giải/rubric, HELP 33 mục, bốn Golden tab, vị trí SVG và dữ liệu đánh giá được giữ nguyên. Không tạo item mới và không chuyển luyện tập thành chứng cứ Mastery.

**Bằng chứng QA bắt buộc:** Chạy `scripts/test-g10-chvii-ap2-stems.cjs` để đối chiếu từng đề với nguồn cũ, xác minh dấu/phân số không thay nghĩa, không có TeX lồng, và nội dung không thuộc đề không đổi. Chạy Chromium 390/820/1440 để kiểm tra **25 đề đã render MathJax thực**, không chỉ phát hiện `\(\)` trong source. Sau đó chạy full G10/R4 đúng HEAD.

**Không suy rộng:** Cổng QA hiện tại từng PASS cho lời giảng nhưng **không kiểm 25 stem MathJax**. Cải tiến này chỉ đóng AP2 của 25 đề Vận dụng, không tự chứng nhận mọi công thức trong các đoạn Đối chiếu/HELP khác. Không merge/deploy cho tới khi đủ QA và có phép phát hành của chủ dự án.