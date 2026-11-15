# CĐ22 · R04 TARGETED AUTHORING QA · 15/11/2026

**LANE:** AUTHORING · **STATE:** `Q18_CONTENT_CHECK_PENDING` / `Q01_PDF_INDEX_HOLD` (không CONTENT_READY cho R04)  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0`, Q01–Q18 (không tạo chuẩn phụ)  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` — thêm hai ví dụ có lời giải/lý do chọn phương pháp trong G11, mục 2.4 Mốt ghép nhóm; không thay canonical câu hỏi/đáp án/rubric.

## 1. Snapshot/source receipt

| Trường | Giá trị |
|---|---|
| Baseline R03 | `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R03_NOTEBOOKLM_P1_GROUP_MODE_EDGE_20261114.md` |
| `BASELINE_GIT_BLOB` | `d06250947d78e13a97716fc5b4e97e3f116982db` |
| R04 full learner source | `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R04_MODE_WORKED_EXAMPLES_SCOPE_20261115.md` |
| `ACADEMIC_SOURCE_BLOB` | `9627b7750125a82ea2e7808dc8463211830f997a` |
| Affected section | `2.4.1 Mốt ghép nhóm` · `G11-B09-GROUPED-MODE`, `G11-B09-MODE-CONDITIONS`, `G11-B09-INTERPRETATION` |
| Existing legacy source-lock | R01 G10/G11/G12 sources and 114 PUBLIC canonical IDs unchanged; R01 READY remains valid **chỉ trên R01 blob** `4f4dc4abcf671479fe0650595e9b67f745738b9a` |
| Reviewer provenance | Owner-pasted NotebookLM R2 reported PASS for **R03** source; reported SGK G11 ChV B14 p129–131 clashes with KNTT textbook mapping; **không** suy thành reviewer PASS R04 |

## 2. Q01 · Phân giải đúng SGK, giới hạn xác minh

- **KNTT Toán 11 Tập Một (NXB Giáo dục VN): Chương III**, Bài 8 *Mẫu số liệu ghép nhóm* và **Bài 9 *Các số đặc trưng đo xu thế trung tâm***. Các mục chính Bài 9: trung bình, trung vị, tứ phân vị, mốt của mẫu **ghép nhóm**. Bản R04 đã ghi đúng ChIII B08–B09 và phạm vi trang in 58–68, kế thừa S1 receipt R01.
- **Bài 14 KNTT là *Phép chiếu song song*, thuộc Chương IV, bắt đầu trang in 95; Chương V KNTT là Giới hạn/Hàm số liên tục.** Vì vậy nguồn reviewer `G11 KNTT ChV B14 p129–131` không thể dùng chứng minh nội dung mốt ghép nhóm; có nguy cơ lẫn với **bộ sách khác**. Không áp dụng trang 130/đầu mục B14 vào KNTT.
- Đối chiếu nguồn đã mở: [mục lục sách TOANMATH](https://toanmath.com/2022/12/sach-giao-khoa-toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song.html), [bản thể hiện SGK Bài 9 trên SGKVN](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-xu-the-trung-tam-cua-mau-so-lieu-ghep-nhom-3430/bai-9-cac-so-dac-trung-do-xu-the-trung-tam-12638.html), [bản thể hiện SGK Bài 14 trên SGKVN](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-quan-he-song-song-trong-khong-gian-3442/bai-14-phep-chieu-song-song-12660.html). Đây là **bản thể hiện/đối chiếu công khai**, không thay PDF SGK gốc có kiểm trang.
- **Giới hạn:** Trong lượt này chưa tải/đọc thành công bản scan PDF gốc Toán 11 T1, chưa xác minh `PDF_PAGE_INDEX` tính từ bìa. Bảng source R01 từng ghi đã scan S1 B08–B09, nhưng không giả định thao tác đó đã lặp lại trên PDF trong R04. `Q01_BOOK_CHAPTER_LESSON=CORROBORATED`; `Q01_PDF_PAGE_INDEX=UNVERIFIED`. **Không tự xóa SOURCE_HOLD tổng thể.**

## 3. Tự kiểm toán học và sư phạm trên phần mới (Q03/Q04/Q07/Q08/PED)

1. **Ví dụ nhóm mốt đầu:** ba nhóm [0,10), [10,20), [20,30), tần số 12/7/3, cùng độ rộng 10; cao nhất 12 ở nhóm đầu. Với quy ước biên `f_-=0`, `f_+=7`, mẫu số `(12-0)+(12-7)=17>0`; mốt nội suy `(12/17)×10 = 120/17 ≈ 7.058823529`, làm tròn `7,06`, nằm trong [0,10). **Cần gọi rõ là ước lượng, không phải mốt quan sát chính xác.**
2. **Ví dụ khoảng nhóm không đều:** [0,5) tần số 6, [5,20) tần số 12: độ rộng 5/15, mật độ tần số `6/5=1.2`, `12/15=0.8). So nhóm theo tần số thô gây sai khi đọc chiều cao histogram mật độ; công thức nội suy mốt nhóm **đều độ rộng** không được dùng.
3. **Đồng hạng:** khi có từ hai nhóm đạt tần số cao nhất, không tự chọn một nhóm duy nhất rồi tự coi số nội suy là quan sát đúng; nêu sự không xác định duy nhất và điều kiện mô hình.
4. **Tự học:** mỗi ví dụ trình bày quan sát → chọn cách → tính → so kết quả với khoảng → giới hạn ý nghĩa, độc lập với Vận dụng M09 (bảng khác); đối chiếu của M09 vẫn do học sinh tự mở.

## 4. Regression source-locked trên R03 → R04

| Kiểm tra thực thi trên 2 nội dung fetch GitHub | Kết quả |
|---|---|
| 13 mục Vận dụng M01–M13 còn đủ | PASS 13/13 |
| 13 khối `Đối chiếu Vận dụng Mxx` không đổi | PASS 13/13 |
| Toàn bộ nội dung 13 đáp án mở `<details>` không đổi | PASS |
| Danh sách 13 tiêu đề module 1.1…3.4 giữ nguyên | PASS |
| Metadata 114 canonical PUBLIC refs/nguồn gốc giữ nguyên | PASS |
| 9 ID public selfcheck reuse, `NO_MASTERY; NOT_RD1` giữ nguyên | PASS |
| Mọi tham chiếu SVG cũ giữ nguyên thứ tự | PASS |
| Nguồn S1 hiển thị cuối học liệu không thay | PASS |
| Kiểm toán tính toán hai ví dụ mới | PASS (120/17≈7,06; 1,2 vs 0,8) |
| Không thêm câu Private RD1, không đổi Final Submit/website | PASS theo phạm vi *diff hai Markdown*; **không** chứng minh hành vi runtime |

**Targeted verdict:** `MATH_PED_CHANGED_SCOPE=AUTHOR_SELF_VERIFIED` cho hai ví dụ bổ sung và các điều kiện áp dụng đã tính lại; `P0=0` trong phần mới, `P1=0` trong phần mới theo chứng cứ hiện có. **Không phải** reviewer độc lập R04, không chứng minh lại toàn bộ 39 outcomes, 114 answers, 19 Written hay Q01 PDF index trên R04.

**OVERALL:** `Q18_CONTENT_CHECK_PENDING / Q01_PDF_INDEX_HOLD`. **NEXT:** khi xác thực SGK PDF bản đúng và index thật, đối chiếu bộ chứng cứ R01 + delta R04, mới quyết định signed Q18/one V2/ready/REGISTER **cho chính R04 SHA**. Không tự thêm manifest READY khi còn HOLD. Không merge/deploy.
