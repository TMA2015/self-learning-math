# CĐ20 · QA học thuật / sư phạm trực tiếp 37 câu hỏi tự sở hữu · 20/11/2026

**Loại kiểm toán:** AUTHORING độc lập đối chiếu toán học + khả năng học sinh tự học trên learner hiện tại; không sửa nguồn; không nhận là một vòng phản biện NotebookLM mới. Không yêu cầu NotebookLM trả về SHA.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R11_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: a336816eb1935c739bd1f128bd81de7b510d0060
PR: #884, existing SOURCE-READY R12 unchanged
CONTENT_DELTA: NONE
REVIEW_SCOPE: 17 Topic FirstTry T, 17 Topic Practice P, 3 Topic Written W; 17 outcomes, 37 balanced answer disclosure blocks
AUTHOR_Q18_MATH: PASS_SCOPED_DIRECT_CHECK
AUTHOR_Q18_PED: PASS_SCOPED_DIRECT_CHECK
P0_P1_OBSERVED: 0/0
RELEASE_AUTHORIZATION: NO

## I. Đúng toán — các họ bài theo outcome, điều kiện và cách kiểm

1. **Không gian mẫu & biến cố (O01–O06):** T01 rút một thẻ từ 1..8, A chẵn {2,4,6,8}; T10 A={1,2}; T02 sáu phiếu đồng khả năng với hai đỏ cho 2/6; T11 hai lần tung xu có 4 chuỗi kết quả đồng khả năng NN/NS/SN/SS, không được gán cùng xác suất cho số ngửa 0,1,2; T03 P(không đen)=19/20 còn P(đen)=1/20>0; T12 một vé trúng trong 100 có P=1/100, **hiếm ≠ không thể**. P01 0 là số chẵn; P02 biến cố <2 là {1}, có thể xảy ra nhưng không chắc chắn; P03 3 phiếu trúng/10 P=3/10; P04 phần bù 8/12=2/3; P05 một vé trúng/40 P=1/40 ≠0. Điều kiện rút đều theo từng thẻ/vé, không coi nhãn là kết quả cùng xác suất.
2. **Đếm và rút không hoàn lại (O07–O10):** T04 C(6,2)=15 nhóm so 6×5=30 cách phân hai vai; T13 P(ít nhất một đỏ) từ một đỏ/bốn xanh chọn hai = 1−C(4,2)/C(5,2)=2/5; T05 hai xúc xắc có 36 cặp thứ tự, tổng 12 chỉ (6,6) cho 1/36; T14 ba lần tung xu đúng hai ngửa có 3/8. P06 lấy hai thẻ 1..4 không hoàn lại: **12 cặp thẻ có thứ tự đồng khả năng**, nhưng tổng các số **không đồng khả năng**; P(tổng 5)=4/12=1/3, P(tổng 7)=2/12=1/6. P07 cả hai sao C(3,2)/C(7,2)=1/7; P08 từ 2 đỏ/4 xanh P(ít nhất một đỏ)=1−C(4,2)/C(6,2)=3/5; P09 xu ba lần lượt đầu/cuối ngửa, lượt giữa tự do: 2/8=1/4; P10 trong 5 thẻ có hai đỏ, cặp rút lần lượt không hoàn lại P(hai đỏ)=(2×1)/(5×4)=1/10.
3. **Hợp–giao, xung khắc vs độc lập (O11–O17):** T06 A={2,4,6},B={5,6}, giao{6}, hợp{2,4,5,6}; T07 coin/die độc lập cho 1/2×3/6=1/4; T15 A,B rời nhau nhưng P(A)P(B)>0 nên KHÔNG độc lập; T08 die A lẻ B={4,5,6} cho P(hợp)=5/6; T16 2 biến cố rời nhau P(hợp)=2/3; T09 hai thiết bị độc lập P(ít nhất một hoạt động)=1−(1/5)(1/4)=19/20; T17 P(hợp) hai điều kiện trên hai con xúc xắc =1/2+1/2−1/4=3/4. P11 A={1,3,5}, B={5,6}, giao{5}, hợp{1,3,5,6}; P12 hai xúc xắc độc lập P(A∩B)=1/6; P13 hai biến cố xung khắc A={1,2},B={3,4} không độc lập vì 0≠1/9; P14 A={1,2,3,4},B={2,4,6} cho hợp 5/6; P15 A={1},B={6} xung khắc cho 1/3, không tự suy độc lập; P16 coin+die divisible3 cho 1/6; P17 hai xúc xắc P(A∪B)=1/2+1/3−1/6=2/3.
4. **Tự luận W01–W03 /4:** W01 trong 8 phiếu phân biệt 3 đỏ/5 xanh chọn 2 không thứ tự, tổng C(8,2)=28, P(cả hai đỏ)=3/28, P(ít nhất một đỏ)=1−C(5,2)/28=9/14. W02 die A={2,4,6},B={2,3,5}, giao {2}, hợp {2,3,4,5,6}, P(hợp)=5/6 và không độc lập vì 1/6≠1/4. W03 xu ngửa P=1/2; xúc xắc >4 P=1/3; P(giao)=1/6, P(hợp)=2/3 và P(cả hai đều không xảy ra)=1/3. Mỗi đề có thang /4 tổng 4 điểm, từng bước phù hợp câu hỏi, phần giải thích logic, D6 gắn sai lầm thực tế.

## II. Độ sâu sư phạm và đường khắc phục

- Học sinh được chỉ rõ **kết quả sơ cấp phải đồng khả năng** trước khi sử dụng P(A)=n(A)/n(Ω), phân biệt phiếu vật lý đồng đều với nhóm nhãn hoặc tổng được ghi. Đặc biệt P06 chỉ ghi tổng vẫn dựa trên 12 chuỗi gốc, tránh sai lầm coi 3,4,5,6,7 có xác suất bằng nhau.
- Các câu O03/O04 giúp phân biệt biến cố hiếm nhưng xác suất dương với biến cố không thể; O13 dùng định nghĩa độc lập P(A∩B)=P(A)P(B), không nhầm xung khắc với độc lập.
- Bài W01 nhấn mạnh nhất quán mẫu không thứ tự 28 với thuận lợi 3, hoặc mẫu có thứ tự 56 với thuận lợi 6; không trộn hai cách đếm. W02 và W03 yêu cầu tính giao–hợp và phần bù theo đúng từ khóa đề.
- Tự thử và luyện tập có lời giải ẩn sau khi tự làm, cùng hướng chữa lỗi và link kiến thức; không chứa private RD1. 17 FirstTry, 17 Practice, 3 Written và 37 `<details>` cân bằng. Không bịa một Core thứ tư ở Topic hay tuyên bố public self-comparison làm Mastery.

## III. Kết luận có giới hạn

AUTHOR_Q18_AFFECTED_SCOPE: PASS mathematics and self-learning for all 37 Topic-owned T/P/W reviewed items. No known P0/P1 within checked scope, NO source or question changes. This **does not** independently revalidate wording of original SGK/SBT or all original display-only items, and does not claim a new NotebookLM full-Topic Academic/PED PASS. Original source-ready version keeps its own source-locked historical evidence; browser/rendering and official private Readiness remain separate RELEASE responsibility.
NEXT: tiếp tục thực chất từng Topic kế tiếp; không yêu cầu NotebookLM thêm vòng cho nguồn không đổi; không merge/deploy.