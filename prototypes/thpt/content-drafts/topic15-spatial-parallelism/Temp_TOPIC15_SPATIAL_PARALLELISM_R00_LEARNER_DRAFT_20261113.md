# CĐ15 — Quan hệ song song trong không gian · bản thảo học liệu R00

> **AUTHORING CANDIDATE / CHƯA CONTENT_READY** · `SLM-THPT-QUALITY-ONE v3.1.0` · `Q18_CONTENT_CHECK_PENDING` · Không phải verdict NotebookLM.  
> CĐ15 là **mã làm việc dự kiến** cho phần song song không gian trong chuỗi 22 chuyên đề; cần đối chiếu danh mục 22 chuyên đề được chủ dự án khóa trước khi cấp ID chính thức. Không đưa ID kỹ thuật dưới đây vào giao diện học sinh.

**Nguồn S1 tham chiếu có receipt lịch sử:** Toán 11 Kết nối tri thức, Tập 1, Chương IV B10–B14: trang in SGK B10 70–77, B11 78–83, B12 84–87, B13 88–94, B14 95–101, cuối chương 102–103. SBT Tập 1: B10 53–55, B11 56–59, B12 60–63, B13 64–67, B14 68–71, cuối chương 72–74 (theo receipt kiểm PDF gốc trong PR #705, **không phải lượt tự đọc PDF mới**). Source canonical tham chiếu `prototypes/thpt/content-drafts/G11_CHIV_B10_B14_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md`, Git blob `e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b`. Nguồn SGK chỉ được *tham chiếu*; không nhân bản câu hỏi, đáp án, rubric đã khóa.

## Trang 1 — Kiến thức

### Mạch 1. Từ bản vẽ phẳng đến hình học ba chiều

Nhìn hai nét bút giao nhau trên giấy, ta thường cho rằng hai đường trong không gian cũng cắt nhau. Nhưng hình phối cảnh là hình *biểu diễn*; một nét có thể nằm ở phía trước nét kia. Muốn chứng minh điểm thuộc mặt phẳng hay hai mặt cắt nhau, cần có dữ kiện hình học, không dựa vào mắt.

Nếu hai điểm phân biệt A, B thuộc mặt phẳng (P), đường thẳng AB nằm trọn trong (P). Một mặt phẳng được xác định duy nhất bởi ba điểm không thẳng hàng; hoặc bởi một đường thẳng và điểm nằm ngoài đường; hoặc hai đường cắt nhau; hoặc hai đường phân biệt song song. Ba điểm thẳng hàng chỉ xác định một đường, không xác định duy nhất mặt phẳng.

Ta tìm giao tuyến hai mặt phẳng phân biệt bằng cách tìm **hai điểm chung phân biệt**. Muốn tìm giao điểm của đường d với mặt (P), có thể chọn mặt phẳng phụ (Q) chứa d, dựng giao tuyến g=(P)∩(Q), rồi xét d∩g. Phải kiểm tra giao có thực sự tồn tại. Một thiết diện là phần giao *nằm trong khối*; không nối hai đỉnh chỉ vì chúng gần nhau trên hình.

**Ví dụ dẫn dắt.** Trong tứ diện S.ABC, M, N, K lần lượt nằm trong các cạnh SA, SB, SC. Vì M,N thuộc mặt (SAB), đoạn MN là giao tuyến cục bộ giữa mặt (MNK) và mặt (SAB); tương tự NK thuộc (SBC) và KM thuộc (SAC). Thiết diện của tứ diện là tam giác MNK. Nếu M trùng S hoặc một điểm chuyển ra ngoài cạnh, kết luận về thiết diện phải xét lại.

**Vận dụng.** Trong tứ diện S.ABC, P nằm trong AB. Mặt phẳng (SCP) cắt đáy theo đoạn nào, và cắt mặt (SAB) theo đoạn nào?

<details><summary>Đối chiếu</summary>Mặt cắt và đáy (ABC) có C,P chung nên giao đáy là CP; mặt cắt và (SAB) có S,P chung nên giao trong mặt SAB là SP. Thiết diện tạo bởi SP,PC,CS. Nếu đang nối tùy ý các điểm trên hình, hãy thử xác định từng cặp mặt phẳng chứa cạnh đó.</details>

### Mạch 2. Vì sao trong không gian có đường thẳng chéo nhau?

Trong mặt phẳng, hai đường phân biệt hoặc cắt nhau hoặc song song. Lên không gian, hai đường có thể không cùng nằm trên một mặt phẳng: đó là **chéo nhau**. Vì vậy “không cắt” chưa đủ kết luận “song song”. Hai đường phân biệt song song phải vừa đồng phẳng vừa không giao nhau.

Một cách chứng minh hay gặp là đưa hai đường về cùng mặt phẳng của một tam giác, rồi dùng đường trung bình. Trong tứ diện S.ABC, M,N là trung điểm SA,SB; đoạn MN nằm trong (SAB) và song song AB. Cũng trong tứ diện, SA và BC chéo nhau: nếu chúng đồng phẳng thì S,A,B,C cùng một mặt phẳng, trái định nghĩa tứ diện.

Khi ba đường có cùng phương, phải tách **trùng** và **song song phân biệt**. Nếu a∥b, b∥c thì a,c cùng phương; nếu a=c thì chúng trùng nhau, không được gọi là song song theo định nghĩa yêu cầu hai đường phân biệt.

**Vận dụng.** Hai đường a={(t,0,0):t∈ℝ} và b={(0,2,1)+u(1,0,0):u∈ℝ} có song song không? Nếu thay b bởi c={(0,2,1)+u(0,1,0)}, quan hệ a,c là gì?

<details><summary>Đối chiếu</summary>a và b có véc-tơ chỉ phương (1,0,0), là hai đường phân biệt vì b luôn có z=1; chúng song song. a và c có phương khác nhau; do a nằm trong z=0 còn c nằm trong z=1, chúng không cắt, không song song nên chéo nhau. Không kết luận chéo chỉ vì một hình vẽ có hai nét không gặp.</details>

### Mạch 3. Đường thẳng song song một mặt phẳng

Hãy đặt một cây bút nằm ngang cách mặt bàn vài centimet: dù kéo dài cả hai phía, bút và mặt bàn không giao nhau. Đó là quan hệ đường thẳng song song với mặt phẳng. Nhưng nếu đặt bút **nằm trên** mặt bàn, cây bút cũng cùng hướng với nhiều đường trên bàn mà không được gọi là song song với mặt bàn; khi ấy đường nằm trong mặt.

Với đường d và mặt (P), có ba khả năng: d nằm trong (P), d cắt (P) tại một điểm, hoặc d song song (P), tức không có điểm chung. Dấu hiệu hữu ích: nếu d song song với một đường a nằm trong (P), **và d không nằm trong (P)**, thì d∥(P). Điều kiện cuối không được bỏ. Trong tứ diện S.ABC, M,N là trung điểm SA,SB, nên MN∥AB; do AB nằm trong (ABC) và MN nằm ngoài mặt đáy, suy MN∥(ABC).

**Mô hình khám phá đặt ngay tại đây:** [Mô hình đường thẳng–mặt phẳng](../interactive-models/Temp_THPT_TOPIC15_LINE_PLANE_RELATION_R00_20261113.html) — với mặt (P): z=0 và đường d: (x,y,z)=(t,0,h+t·tanα), thay đổi độ cao h và góc α. Trước khi kéo, hãy dự đoán khi α=0 và h khác 0 thì d có gặp (P) không; rồi cho h=0. Mô hình là hỗ trợ quan sát, không phải chứng cứ định lý và không chấm điểm.

**Vận dụng.** Cho d: (x,y,z)=(1+t,2,3+t), (P): z=0. Hãy xác định giao điểm; nếu thay d bởi (1+t,2,3), kết luận đổi thế nào?

<details><summary>Đối chiếu</summary>Với d ban đầu, z=3+t=0 cho t=-3; giao điểm (-2,2,0). Với d mới, z luôn bằng 3 nên không có điểm chung: d song song (P). Đừng suy chỉ từ hệ số x; cần xét phương trình mặt phẳng.</details>

### Mạch 4. Khi hai mặt phẳng song song

Một giá sách có hai mặt kệ song song: lấy một mặt cắt đi qua cả hai, ta nhận được hai giao tuyến song song. Trong hình học, hai mặt phẳng **phân biệt** song song nếu không có điểm chung. Để chứng minh (P)∥(Q), có thể tìm **hai đường thẳng cắt nhau** cùng thuộc (P), mỗi đường đều song song (Q). Một đường duy nhất không đủ: hai mặt phẳng cắt nhau cũng có thể chứa các đường cùng hướng với giao tuyến.

Trong tứ diện S.ABC, nếu M∈SA, N∈SB, K∈SC và SM/SA=SN/SB=SK/SC=t với 0<t<1, thì MN∥AB, MK∥AC. Hai đường MN,MK cắt nhau, cùng song song mặt đáy nên (MNK)∥(ABC). Hai tam giác tương ứng đồng dạng với tỉ số cạnh t, nên diện tích tỉ lệ **t²**, không phải t.

**Ví dụ có kiểm tra.** Biết t=3/5, diện tích tam giác đáy ABC là 75 cm². Diện tích thiết diện MNK bằng (3/5)²·75=27 cm². Vì đây là diện tích, đơn vị phải là cm². Nếu ba tỉ số dọc SA,SB,SC không bằng nhau thì không thể áp dụng công thức theo đường cắt song song đáy.

**Vận dụng.** M,N nằm trên SA,SB với SM/SA=SN/SB=1/3, còn K nằm trên SC với SK/SC=1/2. Có thể kết luận (MNK)∥(ABC) không?

<details><summary>Đối chiếu</summary>Không. Nếu song song đáy, phép Thales trên các cạnh xuất phát từ S buộc ba tỉ số bằng nhau; ở đây 1/3 khác 1/2. Hãy kiểm tra điều kiện *cùng t* trước khi tính diện tích hoặc chu vi.</details>

### Mạch 5. Phép chiếu song song: hình biểu diễn giữ gì, mất gì?

Một hình chữ nhật trên mặt nghiêng có thể được vẽ trên giấy thành hình bình hành: cặp cạnh đối vẫn song song nhưng góc vuông có thể biến mất. Với mặt chiếu (P) và phương chiếu không song song (P), ảnh của mỗi điểm là giao của (P) với đường qua điểm đó có phương chiếu cố định. Những điểm đã nằm trên (P) không đổi.

Phép chiếu song song giữ tính thẳng hàng và tỉ số trên một đường, nếu ảnh của đường không co thành điểm; do đó giữ trung điểm. Hai đường song song có thể cho hai ảnh song song **hoặc trùng nhau**; không được khẳng định luôn phân biệt. Đường song song phương chiếu bị co thành **một điểm**. Phép chiếu nói chung không giữ góc, độ dài hoặc sự vuông góc.

**Ví dụ kiểm được bằng tọa độ.** Chiếu lên (P): z=0 theo phương v=(1,0,1). Một điểm (x,y,z) có ảnh T(x,y,z)=(x−z,y,0), vì dịch đi −z lần v sẽ đưa z về 0. Bốn đỉnh A(0,0,0), B(2,0,0), C(2,1,1), D(0,1,1) tạo thành hình chữ nhật vì AB·AD=0. Ảnh của chúng lần lượt là A′(0,0), B′(2,0), C′(1,1), D′(−1,1); đây là hình bình hành nhưng góc A′ không vuông (A′B′·A′D′=−2). Vì sao không mâu thuẫn? Phép chiếu không bảo toàn góc.

**Vận dụng.** Hai điểm U(1,2,3), V(3,2,5) có ảnh gì qua phép chiếu T trên? Vì sao có thể hai điểm khác nhau cùng ảnh?

<details><summary>Đối chiếu</summary>T(U)=(-2,2,0) và T(V)=(-2,2,0); UV=(2,0,2)=2v cùng phương chiếu, nên mọi điểm trên UV được chiếu về một điểm. Khi học sinh thấy ảnh một đoạn biến mất, hãy xét phương của đoạn đó trước khi kết luận mô hình lỗi.</details>

## Trang 2 — Luyện tập

Làm trên giấy, chỉ mở Đối chiếu sau khi có lập luận của mình. Các bài dưới đây là **câu mới ứng viên**; ID thuộc metadata, không phải nhãn để hiển thị cho học sinh. Không nhân bản câu SGK B10–B14.

<!-- ITEM_ID: THPT-TOP15-P01; OUTCOME: TOP15-O17; ROLE: TOPIC_PRACTICE -->
**Bài 1 — Thiết diện có điều kiện.** Trong tứ diện S.ABC, M∈SA, N∈SB, K∈SC, biết SM/SA=SN/SB=2/5 nhưng SK/SC=3/5. Có (MNK)∥(ABC) không? Nếu thay SK/SC thành 2/5 và diện tích ABC là 100 cm², tính diện tích MNK.
<details><summary>Đối chiếu</summary>Ban đầu không song song vì ba tỉ số không cùng bằng 2/5. Khi cùng t=2/5 thì (MNK)∥(ABC), diện tích MNK=(2/5)²·100=16 cm². Lỗi thường gặp là nhân diện tích với t thay vì t².</details>

<!-- ITEM_ID: THPT-TOP15-P02; OUTCOME: TOP15-O06; ROLE: TOPIC_PRACTICE -->
**Bài 2 — Không giao hay chéo?** a=(t,0,0), b=(0,2,1)+u(1,0,0), c=(0,2,1)+u(0,1,0), t,u∈ℝ. Phân loại từng cặp a,b; a,c; b,c.
<details><summary>Đối chiếu</summary>a∥b; a,c chéo vì hai hướng khác nhau và z=0 so với z=1; b,c cắt nhau tại (0,2,1). Đặt từng phương trình tham số thay vì tin nét vẽ.</details>

<!-- ITEM_ID: THPT-TOP15-P03; OUTCOME: TOP15-O10; ROLE: TOPIC_PRACTICE -->
**Bài 3 — Đường và mặt.** d=(1+t,2,3+2t); (P): z=0. Xác định d∩(P). Đường e=(1+t,2,3) và f=(1+t,2,0) thuộc loại nào so với (P)?
<details><summary>Đối chiếu</summary>d cắt (P) khi t=−3/2, tại (−1/2,2,0). e∥(P) vì z=3 không đổi; f⊂(P) vì z=0 với mọi t. Ba trường hợp phải phân biệt.</details>

<!-- ITEM_ID: THPT-TOP15-P04; OUTCOME: TOP15-O17; ROLE: TOPIC_PRACTICE -->
**Bài 4 — Mặt cắt và tỉ số.** Tứ diện S.ABC, (MNK)∥(ABC); tỉ số SM/SA=3/5. Nếu chu vi ABC là 30 cm và diện tích ABC là 75 cm², hãy tính chu vi và diện tích MNK. Giải thích vì sao hai phép tính dùng lũy thừa khác nhau.
<details><summary>Đối chiếu</summary>Chu vi tỉ lệ t, bằng 18 cm; diện tích tỉ lệ t², bằng 27 cm². Đồng dạng biến mỗi cạnh nhân t, còn diện tích là tích hai chiều nên nhân t².</details>

<!-- ITEM_ID: THPT-TOP15-P05; OUTCOME: TOP15-O19; ROLE: TOPIC_PRACTICE -->
**Bài 5 — Ảnh suy biến.** Cho T(x,y,z)=(x−z,y,0). Tìm ảnh của U(1,2,3) và V(3,2,5); xác định ảnh của cả đoạn UV; nêu điều kiện phương làm đoạn co thành điểm.
<details><summary>Đối chiếu</summary>T(U)=T(V)=(-2,2,0); mọi điểm U+λ(V−U) có ảnh giống U. Đoạn co thành điểm vì UV∥(1,0,1), đúng phương chiếu.</details>

### Bài tự luận có rubric tự đối chiếu

<!-- ITEM_ID: THPT-TOP15-W01; OUTCOME: TOP15-O16; ROLE: WRITTEN -->
**Tự luận 1.** Cho hình hộp ABCD.A′B′C′D′. Gọi (R) là mặt phẳng đi qua ba điểm A,C,A′. Chứng minh C′ cũng thuộc (R), xác định giao tuyến của (R) với hai mặt đáy và giải thích vì sao hai giao tuyến song song.
<details><summary>Đối chiếu và rubric /4</summary>Do A,A′∈(R) nên AA′⊂(R) (1đ). Trong hình hộp, CC′∥AA′; vì C∈(R), đường qua C song song AA′ nằm trong (R), suy C′∈(R) (1đ). Giao tuyến (R) với (ABCD) là AC, với (A′B′C′D′) là A′C′ (1đ). Hai mặt đáy song song, cắt bởi mặt (R) nên AC∥A′C′ (1đ). Đừng nhận định A′C′ thuộc (R) chỉ vì nhìn giống AC trên hình biểu diễn.</details>

<!-- ITEM_ID: THPT-TOP15-W02; OUTCOME: TOP15-O22; ROLE: WRITTEN -->
**Tự luận 2.** Chứng minh phép chiếu T(x,y,z)=(x−z,y,0) biến hình chữ nhật ABCD với A(0,0,0), B(2,0,0), C(2,1,1), D(0,1,1) thành hình bình hành không có góc vuông tại A′.
<details><summary>Đối chiếu và rubric /4</summary>AB·AD=0 và các cạnh đối tương ứng song song, xác lập ABCD là hình chữ nhật (1đ); tính A′(0,0),B′(2,0),C′(1,1),D′(−1,1) (1đ); A′B′∥C′D′ và A′D′∥B′C′ (1đ); A′B′·A′D′=−2≠0, nên góc A′ không vuông (1đ). Không suy vuông góc từ hình biểu diễn.</details>

## Trang 3 — Tự kiểm tra

Chỉ là bộ câu hỏi **tự đối chiếu công khai** dùng lại các bài đã học, không phải bài đánh giá độc lập. Trong một phiên kiểm tra thực tế, không được để lộ lời giải/đúng-sai trước **Final Submit**; hiển thị câu hỏi bằng tham chiếu `THPT-TOP15-P01` đến `P05`, rồi chỉ cho xem đáp án và hướng khắc phục **sau** khi nộp. Tại bản thảo Markdown này, đáp án nằm trong phần Đối chiếu trang Luyện tập, do đó không thể coi là đề kín hoặc chấm Mastery. `ASSESSMENT_MODE=CLIENT_SELF_CHECK_NO_MASTERY`.

<!-- CLIENT_SELF_CHECK_NO_MASTERY; ITEM_PLACEMENTS: THPT-TOP15-P01..P05; FINAL_SUBMIT_CONTROL: RELEASE_ONLY_NOT_IMPLEMENTED -->

## Ghi chú AUTHORING — không hiển thị cho người học

- `LESSON_ID`: TOP15-M01..M05 (ứng viên); `OUTCOME_ID`: 22 outcome từ G11 ChIV, ánh xạ tác giả dự kiến: O01–O05 = B10 INCIDENCE/PLANE/PLANE_INTERSECTION/LINE_PLANE/SECTION; O06–O09 = B11 RELATIVE/COPLANAR/PARALLEL_PROOF/INTERSECT_PLANES; O10–O13 = B12 POSITIONS/PARALLEL_TEST/PLANE_INTERSECTION/CONSTRUCTION; O14–O17 = B13 PLANE_POSITIONS/PLANE_TEST/TRANSVERSAL/PRISM_RATIO; O18–O21 = B14 PROJECTION_DEF/DEGENERACY/AFFINE_INVARIANTS/PARALLEL_AND_SHAPES; O22 = CHIV INTEGRATED. Cần kiểm đủ từng outcome; chưa suy từ 5 mạch tổng quan rằng Q02 PASS.
- Nguồn đọc SGK/SBT: giữ receipt nguồn `e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b`; không đưa 40 stem/key SGK vào bản copy mới. R01 40 original item IDs chỉ tham chiếu ở canonical index sau khi làm ma trận chuẩn.
- New candidate canonical: `P01..P05`, `W01..W02`, mỗi item một stem/key/solution; self-check chỉ placement, không clone. Q15 kiểm trùng với existing 40 public SKG chưa hoàn thành.
- Model canonical: `SLM-TOP15-LINE-PLANE-R00` / `Temp_THPT_TOPIC15_LINE_PLANE_RELATION_R00_20261113.html`; trạng thái `PUBLIC_DISCOVERY_NO_MASTERY`, không dùng RD1.
- **BLOCKERS**: `TOP15_SCOPE_ID_NOT_LOCKED`, `TOP15_OUTCOME_MAPPING_INCOMPLETE`, `TOP15_FULL_PRACTICE_COVERAGE_PENDING`, `TOP15_BROWSER_QA_NOT_TESTED`, `TOP15_Q18_FULL_QA_PENDING`. Đây là bản thảo R00 thực chất, **không** gọi `AUTHORING_PASS` hay `CONTENT_READY`, chưa sinh V2 ready/REGISTER.