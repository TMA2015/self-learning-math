# CĐ19 · Kiểm tra toán học và lộ trình tự học trực tiếp trên learner R11 · 20/11/2026

**Phạm vi: reviewer AUTHORING spot-check độc lập các đáp án giải và điều kiện toán.** Không sửa learner/đáp án, không phát hành, không nhận là NotebookLM Academic/PED reviewer PASS mới, không làm mất CONTENT_READY của snapshot cũ.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R10_LANGUAGE_LOCAL_REFERENTS_CANDIDATE_20261117.md
SOURCE_BLOB: 2809816539e438726858daf18d7efb1d751ea7f7
TOPIC: CĐ19 (quy tắc đếm, hoán vị/chỉnh hợp/tổ hợp, nhị thức Newton, ứng dụng)
REVIEW_MODE: AUTHOR_MATH_PED_DIRECT_SPOTCHECK_NO_SOURCE_DELTA
ACTUAL_SOURCE_CHANGED: NO
NOTEBOOKLM_REQUIRED: NO_NEW_DELTA_C
RELEASE_AUTHORIZATION: NO

## 1. Không lấy số lượng thay chất lượng: kiểm toán các phương pháp cụ thể

1. **Đếm cộng/nhân:** T01 chọn duy nhất một cuốn 5+2=7; T02 chọn áo+huy hiệu 4×3=12; điều kiện rời nhau và số nhánh ở mỗi bước được giải thích trước công thức. T03 chữ số đầu ≠0 cho 4×4=16 số hai chữ số; T04 chia đuôi 0/2 cho 3+2=5 số chẵn. Bài luyện 4 số chẵn ba chữ số từ {0,…,5}: đuôi 0: 5×4=20; đuôi 2/4: 2×4×4=32; tổng 52. Hai trường hợp được viết rõ, không bỏ qua chữ số 0.
2. **Hoán vị/chỉnh hợp/tổ hợp:** T05 5!=120; T06 A(6,2)=30; T07 C(6,3)=20; T08 C(4,2)×C(3,1)=18. Bài luyện 5: 6!=720; bài 6 huy chương A(7,3)=210; bài 7 C(7,4)=35; bài 8 C(6,2)C(5,2)=150. Có điều kiện thứ tự/không thứ tự, n/k và nguyên tắc không lặp.
3. **Máy tính không thay quyết định phương pháp:** T14 A(8,3)=336; bài luyện mang ITEM_ID **P14**, trình bày **bài luyện 9**, dùng C(9,3)=84 và A(9,3)=504, kiểm 84×3!=504. **56 có hai nguồn lỗi khác nhau** ở T14: A(8,2)=56 (quên vai thứ ba) hoặc C(8,3)=56 (quên phân vai). D6 đã chỉ ra **cả hai**, không được đánh nhầm thành lỗi nội dung. Số thứ tự bài luyện là placement, khác suffix của ITEM_ID vì canonical ID đã giữ ổn định.
4. **Nhị thức Newton:** T09 hệ số x³ của (x+1)^4 là C(4,3)=4; T10 hệ số x² của (x−2)^4 là C(4,2)(−2)²=24; T11 hằng số (3x−2)^5 là −32; T12 tổng hệ số (x+2)^5 bằng P(1)=3^5=243. Bài luyện 10: (x+2)^4=x^4+8x³+24x²+32x+16; bài luyện 11: hệ số x⁴ (3x−2)^5 là −810; bài luyện 13 mở rộng (2x+1/x)^4 với x≠0 cho hệ số tự do 6×4=24; bài luyện 14 tổng hệ số (2x+1)^4 bằng 81. Điều kiện đa thức/phân thức và dấu âm nêu rõ.
5. **Ứng dụng có kiểm độ sai:** T13 số lượng ban đầu 5000, r=1%, n=5, hai số hạng đầu 5000(1+5r)=5250 là **xấp xỉ**; phần bị bỏ của (1+r)^5 dương với r>0, nên xấp xỉ thấp hơn mô hình đầy đủ. Bài luyện 12: 2000×(1+5×0.02)=2200; mô hình đầy đủ 2000×1.02^5≈2208.16; chênh ≈8.16. Đây là giá trị **theo mô hình** và làm tròn theo đề, không được gọi là số lượng sản phẩm thực tế đếm từng cái chính xác đến 0.01.
6. **Tự luận /4:** W01 đếm ba chữ số lẻ khác nhau từ {0,1,2,3,4}: đuôi 1/3 có 2 lựa chọn, trăm 3, chục 3 -> 18; W02 chọn 2 nữ trong 5, 2 nam trong 4 rồi trưởng nhóm: C(5,2)C(4,2)×4=240; W03 hệ số x² của (x−2)^5: C(5,3)(−2)^3=−80, tổng hệ số P(1)=−1. Ba rubric chấm đúng bước giải, không chấm một đáp số đơn lẻ thay luận giải.

## 2. Kiểm mạch tự học theo bài, không suy rộng từ checklist

- **Kiến thức trước công thức:** O01–O02 nêu rõ thế nào là *một kết quả* để chọn cộng hay nhân; O04 phát hiện điều kiện 0 ở đầu, chia nhánh số chẵn; O06–O07 chứng minh chỉnh hợp/tổ hợp từ cách chọn và số lần đếm trùng; O09 giải thích hệ số Newton từ chọn vị trí.
- **Điều kiện và đường khắc phục:** O03/O04 cấm chữ số đầu 0, T14 chẩn đoán nPr/nCr, O10 D6 phân biệt số lần chọn dấu âm, O11 phân biệt đa thức với 1/x mở rộng, O13 nhắc ước lượng khác chính xác.
- **Tự thử rồi đối chiếu:** 14 FirstTry T01–T14, 14 Topic Practice ID P01–P14, 3 Written W01–W03 đều có điều kiện/method key; 56 opt-in `<details>` cân bằng; 7 public selfchecks là câu hỏi only và no Mastery. Các ví dụ luyện có đủ lời giải và lỗi thường gặp, không chỉ đáp số.
- **Phạm vi kiểm soát:** 14 outcomes và 25 SGK display-only canonical refs; không tạo Core mới cho Topic. Bài chứa 1/x, tổng hệ số/Pascal được ghi mở rộng tùy chọn, không đẩy vào phần SGK bắt buộc.

## 3. Kết quả và giới hạn

AUTHOR_MATH_SPOTCHECK: PASS on the 14 FirstTry + 14 Topic Practice + 3 Written methods/answers/conditional reasoning described above.
AUTHOR_PED_SPOTCHECK: PASS on selected self-learning pathways and D6 for the above outcomes.
P0_P1_OBSERVED_IN_SCOPED_CHECK: 0/0
UNVERIFIED_CLAIM: none beyond this checked scope. This does **not** certify complete S1 wording/parity of all 25 SGK display-only sources anew, nor website responsive/MathJax, nor a fresh independent full Topic reviewer PASS.
CONTENT_DELTA: NONE. Previously accepted AUTHORING `CONTENT_READY` source stays identical at its current blob. No repeat NotebookLM reviewer request, no new version/canonical item ID.