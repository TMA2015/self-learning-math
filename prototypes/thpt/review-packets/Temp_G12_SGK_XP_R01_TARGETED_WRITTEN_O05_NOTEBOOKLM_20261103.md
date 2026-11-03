# Temp — TARGETED R01 NotebookLM review: G12 SGK EXP01/EXP02 Written D4 và O05 source parity

PACKET_ID: G12-SGK-EXP01-EXP02-R01-TARGETED-Q06-Q18
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
PERMANENT_SOURCES_VERSION: THPT-v2.1 (5 sources already installed)
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
REVIEW_SCOPE: 10 Written worked solutions (same ten public W IDs), 1 targeted reviewer numerical discrepancy EXP01-O05, canonical Q-code mapping Q01–Q18
SOURCE_SNAPSHOT: R00 immutable originals, PR #733 Git exact blobs; proposed answer/rubric delta R01 **NOT APPROVED**
AUTHORING_STATE: DELTA_C_PROPOSED_FOR_WRITTEN; ACADEMIC_PED_REVIEW_PENDING
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
RD1: NONE_FOR_EXPERIENCE; END secondary references use CLIENT_SELF_CHECK_NO_MASTERY

## A. Nguồn và cách dùng packet

- SGK Toán 12 KNTT Tập Hai bản S1 PDF SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`; EXP01 trang **in** 81–84/PDF1 83–86, EXP02 trang **in** 85–89/PDF1 87–91; không biến EXP thành chương hoặc Topic mới.
- Original R00 ZIP (9 tệp) SHA256 `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f`, CRC OK, mỗi SHA256 tệp khớp checkpoint; Git-custodied dưới `prototypes/thpt/content-drafts/G12_SGK_XP_R00_ORIGINAL_SOURCE/` PR #733.
- Original learner Markdown R00 exact SHA256: EXP01 `bbf34859bb439ebe38c8ccb48cd8f6f28529ef4fce3f02e10319bb99d5b0cb21`; EXP02 `f9b84c421d7681b1d1a05f7d39cc84c5f41bd07ff0a01b26dcda6ec8dc826f64`. **Do not edit R00**.
- Owner pasted independent NotebookLM report on R00, Academic/PED PASS stated with P0/P1/P2=0; full original archived byte-exact in Git blob `84f41a2e6e53619772d385cec3ae69483d8ae081`. This file records reviewer remarks **without silently overwriting** the report.
- Scope below: the **original prompt and R00 solution/rubric** are quoted locally for each affected W item; the **proposed R01 solution** is candidate replacement for only its `Lời giải chuẩn tự đối chiếu` (also W01 statement and rubric as explicitly marked). All other theory, D1–D3, D5–D6, Core/P/A items, IDs, original figures and placement metadata remain R00. Treat new answers as review candidates, not as already accepted fixes.
- Labels Q in original NotebookLM report are misassigned: official Q02=Outcomes, Q03=D1, Q04=D2, Q05=D3, Q06=D4 Written, Q07=D5, Q08=D6, Q09–Q14=PED1–6, Q15=canonical ID, Q16=assessment/exposure, Q17=dual path, Q18=review/source fidelity. **Review under official Q names, not report's relabeled Q table**.

## B. Targeted source-parity issue EXP01-O05 (original R00 math is correct)

- **Source `EX-G12-EXP01-O05` and Written `THPT-G12-EXP01-W05` (R00):** samples at t=0,2,4,6 s with v=2,3,5,4 m/s. Trapezoid width h=2s gives `T_3=2[(2+4)/2+3+5]=22 m`. The original rubric awards point for **22 m**.
- The NotebookLM report wrote another dataset `v=(2,5,4,1)`, for which `T_3=2[(2+1)/2+5+4]=21 m`; **that is not the R00 example**. Do not change the original 22 m. Review source identity and the two R00 items precisely, then return an exact correction receipt without requiring unrelated questions to be reviewed again.

## C. Proposed complete model solutions for the SAME 10 Written IDs

### THPT-G12-EXP01-W01 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP01-W01`** — Giả sử phần mềm trả F=sin(2x)+3x². Viết lời giải đầy đủ và hai cách kiểm chứng.
> 
> *Lời giải chuẩn tự đối chiếu:* sin(2x)+3x²+C
> 
> **Rubric /5:** 2đ nguyên hàm sin(2x); 1đ nguyên hàm 6x; 1đ +C và miền; 1đ kiểm tra đạo hàm.

**Candidate R01 (only text below is proposed change):**

**Đề W01 làm rõ (đề xuất):** Cho $f(x)=2\cos(2x)+6x$ trên $\mathbb R$. CAS đề xuất $F(x)=\sin(2x)+3x^2$. Hãy tìm **họ nguyên hàm** của $f$ và kiểm bằng **hai cách:** (i) đạo hàm biểu thức nhận được; (ii) đối chiếu tích phân xác định trên $[0,\pi/2]$ tính bằng hai cách.

**Lời giải đầy đủ đề xuất:** Hàm cần lấy nguyên hàm là $f(x)=2\cos(2x)+6x$ trên $\mathbb R$. Vì $\int 2\cos(2x)\,dx=\sin(2x)$ và $\int 6x\,dx=3x^2$, mọi nguyên hàm có dạng $F(x)=\sin(2x)+3x^2+C$, $C\in\mathbb R$. **Kiểm 1 (đạo hàm):** $F'(x)=2\cos(2x)+6x=f(x)$ trên $\mathbb R$. **Kiểm 2 (tích phân xác định):** Trên $[0,\pi/2]$, tính từng phần được $\int_0^{\pi/2}2\cos(2x)\,dx=0$ và $\int_0^{\pi/2}6x\,dx=3\pi^2/4$. Đồng thời $F(\pi/2)-F(0)=3\pi^2/4$, khớp kết quả; hằng số $C$ triệt tiêu khi lấy hiệu cận.

**Rubric /5 đề xuất (thay đúng W01):** 1đ nguyên hàm $2\cos(2x)$; 1đ nguyên hàm $6x$; 1đ viết đủ $+C$, nêu miền $\mathbb R$; 1đ kiểm tra đạo hàm; 1đ kiểm thêm bằng giá trị tích phân xác định trên đoạn thử.

### THPT-G12-EXP01-W02 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP01-W02`** — Một công cụ hiển thị ∫₀²(x²+1)dx≈4,67. Hãy nêu chính xác phân số, kiểm và giải thích khác biệt.
> 
> *Lời giải chuẩn tự đối chiếu:* 14/3
> 
> **Rubric /5:** 2đ tìm F=x³/3+x; 1đ thế hai cận; 1đ phân số 14/3; 1đ giải thích 4,67 chỉ là làm tròn.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Đặt $f(x)=x^2+1$, liên tục trên $[0,2]$, nên dùng Newton–Leibniz. Một nguyên hàm là $F(x)=x^3/3+x$ vì $F'(x)=x^2+1$. Khi đó $\int_0^2(x^2+1)\,dx=[x^3/3+x]_0^2=8/3+2=14/3$. Giá trị thập phân $14/3=4{,}6666\ldots$ được làm tròn đến hai chữ số sau dấu phẩy là $4{,}67$; đây không phải hai tích phân khác nhau.

**Rubric /5:** giữ nguyên bản R00, không đổi số điểm hay điều kiện.

### THPT-G12-EXP01-W03 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP01-W03`** — Cho f(x)=x² trên [0,2], n=4. Hãy lập bảng nút, viết T₄ và tính sai lệch có dấu.
> 
> *Lời giải chuẩn tự đối chiếu:* T₄=11/4 và T₄−8/3=1/12.
> 
> **Rubric /5:** 1đ xác định h/nút; 1đ giá trị f đúng; 1đ đặt công thức trọng số; 1đ T₄=11/4; 1đ sai lệch +1/12.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Với $f(x)=x^2$ trên $[0,2]$, $n=4$ nên $h=(2-0)/4=1/2$. Lập bảng nút $x_i=0;1/2;1;3/2;2$ và $f(x_i)=0;1/4;1;9/4;4$. Áp dụng hình thang hợp thành: $T_4=\frac12[(0+4)/2+1/4+1+9/4]=\frac{11}{4}$. Tích phân đúng $I=\int_0^2x^2\,dx=[x^3/3]_0^2=8/3$. Do đó sai lệch **có dấu** $T_4-I=11/4-8/3=1/12>0$; với hàm lồi $x^2$, dây cung nằm phía trên đồ thị, phù hợp dấu sai lệch.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP01-W04 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP01-W04`** — Trình bày quy trình chọn n cho ∫₀¹x²dx có sai số <0,001; giải thích vì sao n=12 chưa bảo đảm.
> 
> *Lời giải chuẩn tự đối chiếu:* n=13; n=12 cho bound 1/864≈0,001157>0,001.
> 
> **Rubric /5:** 1đ tính f′′ và M; 1đ lập bound 1/(6n²); 1đ giải bất đẳng thức; 1đ chọn 13 và kiểm 12; 1đ phân biệt bound với sai số thật.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Trên $[0,1]$, $f(x)=x^2$ có $f''(x)=2$ liên tục, nên lấy $M=2$. Cận sai số hình thang hợp thành là $|I-T_n|\le M(b-a)^3/(12n^2)=1/(6n^2)$. Để **bảo đảm bằng cận này** sai số nhỏ hơn $0{,}001$, cần $1/(6n^2)<0{,}001$, tương đương $n^2>1000/6=166{,}666\ldots$, nên số nguyên nhỏ nhất thỏa điều kiện là $n=13$. Nếu $n=12$, cận là $1/864\approx0{,}0011574>0{,}001$, vì thế **cận chưa đủ để bảo đảm**, không có nghĩa sai số thật nhất thiết lớn hơn ngưỡng; $n=13$ cho cận $1/1014\approx0{,}0009862<0{,}001$.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP01-W05 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP01-W05`** — Một bảng vận tốc tại 0,2,4,6 s lần lượt 2,3,5,4 m/s. Lập công thức hình thang, tính quãng đường, nêu hạn chế.
> 
> *Lời giải chuẩn tự đối chiếu:* 22 m; chỉ xấp xỉ từ mẫu, không tự bảo đảm sai số.
> 
> **Rubric /5:** 1đ nêu h=2s; 1đ công thức; 1đ giá trị 22; 1đ đơn vị m; 1đ nêu không có bound nếu chỉ có dữ liệu.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Các mốc thời gian $t=0,2,4,6$ (giây) cách đều $h=2$ s; vận tốc tương ứng là **$2,3,5,4$ m/s**. Giả sử vận tốc không âm trong giai đoạn, quãng đường xấp xỉ bằng diện tích dưới đồ thị: $T_3=h[(v_0+v_3)/2+v_1+v_2]=2[(2+4)/2+3+5]=\boxed{22\,\mathrm m}$. Có thể kiểm riêng từng khoảng: $2(2+3)/2=5$ m, $2(3+5)/2=8$ m, $2(5+4)/2=9$ m, tổng $5+8+9=22$ m. Đây chỉ là xấp xỉ từ số đo rời rạc, chưa có chứng nhận cận sai số vì chưa biết độ trơn và $|v''|$, đồng thời chưa xét sai số của cảm biến.

**Rubric /5:** giữ nguyên bản R00, trong đó mục đáp án là **22 m**.

### THPT-G12-EXP02-W01 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP02-W01`** — Dựng lập luận với hai đoạn song song, cùng hình chiếu Oxy nhưng khác z và kết luận về tam giác Penrose.
> 
> *Lời giải chuẩn tự đối chiếu:* Hai đoạn cách nhau 2 đơn vị theo z, ảnh chiếu Oxy trùng nhau; góc nhìn khác thấy tách; Penrose là ảo giác chiếu.
> 
> **Rubric /5:** 1đ nêu hai hình chiếu; 1đ chỉ ra z khác; 1đ kết luận không cắt; 1đ liên hệ ảo giác; 1đ nêu cần đổi góc nhìn để kiểm.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Xét $A(0,0,0)$, $B(1,0,0)$ và $C(0,0,2)$, $D(1,0,2)$. Phép chiếu vuông góc lên mặt phẳng $Oxy$ bỏ tọa độ $z$, do đó cả $AB$ và $CD$ có cùng hình chiếu là đoạn từ $(0,0)$ đến $(1,0)$. Tuy vậy mọi điểm $AB$ đều có $z=0$, còn mọi điểm $CD$ đều có $z=2$, nên hai đoạn **không giao nhau**, cách nhau hai đơn vị theo phương $z$. Nếu đổi sang góc nhìn bên để thấy chiều cao, chúng tách rõ; đây là ví dụ về giới hạn suy luận từ ảnh 2D, giúp hiểu nguyên lí thị giác dùng trong một mô hình ảo giác kiểu Penrose, chứ không phải chứng minh một tam giác Penrose ba thanh cụ thể đã được dựng.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP02-W02 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP02-W02`** — Từ bộ 6 đỉnh đã cho, mô tả thao tác dựng và kiểm ba tính chất đáy/song song/thể tích.
> 
> *Lời giải chuẩn tự đối chiếu:* Hai tam giác đáy song song và bằng nhau, các cạnh bên (0,0,3), V=6.
> 
> **Rubric /5:** 1đ dựng đúng 6 đỉnh; 1đ nối 9 cạnh; 1đ kiểm hai mặt đáy; 1đ tính Sđáy=2; 1đ V=6.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Nhập vào GeoGebra 3D lần lượt $A(0,0,0)$, $B(2,0,0)$, $C(0,2,0)$ và $A'(0,0,3)$, $B'(2,0,3)$, $C'(0,2,3)$. Vẽ hai tam giác $ABC$, $A'B'C'$ rồi nối ba cặp đỉnh $AA'$, $BB'$, $CC'$; tổng cộng có 6 đỉnh, 9 cạnh và 5 mặt. Hai mặt đáy cùng nằm trong các mặt phẳng $z=0$ và $z=3$, song song; mỗi cạnh bên có véc-tơ $(0,0,3)$, nên hai tam giác đồng dạng tỉ số 1 (bằng nhau) và chiều cao là $h=3$. Vì $AB=AC=2$ và $AB\perp AC$, $S_{ABC}=(1/2)\cdot2\cdot2=2$. Do đó thể tích $V=S_{ABC}h=2\cdot3=\boxed{6}$ đơn vị khối. Có thể tự kiểm kết quả bằng tọa độ, không phụ thuộc hình ảnh phần mềm.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP02-W03 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP02-W03`** — Thiết kế thủ tục kiểm mô hình ba thanh tạo hình Penrose sau khi dựng, tránh kết luận sai từ một góc.
> 
> *Lời giải chuẩn tự đối chiếu:* Lưu tọa độ, chụp góc gây ảo giác, xoay 90° kiểm khe, xác minh giao điểm bằng tọa độ.
> 
> **Rubric /5:** 1đ nêu ảnh gốc và quy tắc nhìn; 1đ lưu tọa độ; 1đ xoay kiểm; 1đ xem chỗ nối 3D; 1đ kết luận giới hạn của ảnh.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** (1) Ghi lại tọa độ đầu–cuối của **ba thanh rời**, các điểm dự kiến tạo góc và mặt phẳng chứa từng phần; không dùng mỗi ảnh làm dữ liệu. (2) Chọn một hướng camera để hình chiếu 2D có vẻ tạo ba mối nối khép kín và chụp ảnh, kèm mô tả hướng nhìn. (3) Xoay mô hình sang hướng bên/cao khác để thấy chiều sâu và chụp ảnh thứ hai. (4) Kiểm bằng tọa độ 3D tại từng 'mối nối': nếu hai đầu có cùng hình chiếu nhưng khác tọa độ $z$ hoặc tọa độ không gian, chúng **không** nối thật. (5) Kết luận giới hạn: ảnh đầu chỉ ghi lại một hình chiếu gây ảo giác; chính dữ liệu 3D mới xác nhận có/không giao. Quy trình cần ghi đủ thông số để người khác tái lập, không mặc nhiên cho rằng mọi cấu hình Penrose đều giống bộ tọa độ minh họa.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP02-W04 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP02-W04`** — Trình bày công thức M, kiểm hai cặp mép ghép và giải thích vì sao ảnh 3D không đủ chứng minh mọi tính chất tôpô.
> 
> *Lời giải chuẩn tự đối chiếu:* M(0,±1)=M(2π,∓1), hai cặp hoán đổi; kiểm cấu trúc cần quy tắc dán mép.
> 
> **Rubric /5:** 1đ nêu đúng miền tham số; 1đ công thức tọa độ; 1đ tính cặp v=1; 1đ tính cặp v=−1; 1đ giải thích ghép đảo chiều.

**Candidate R01 (only text below is proposed change):**

**Lời giải đầy đủ đề xuất:** Đặt $M(u,v)=((1+\frac v2\cos\frac u2)\cos u,(1+\frac v2\cos\frac u2)\sin u,\frac v2\sin\frac u2)$ với $0\le u\le2\pi$, $-1\le v\le1$. Với $u=0$: $\cos0=1$, $\sin0=0$, nên $M(0,v)=(1+v/2,0,0)$. Với $u=2\pi$ và tham số ngang $-v$, có $\cos\pi=-1$, $\cos2\pi=1$, $\sin\pi=0$, do đó $M(2\pi,-v)=(1+v/2,0,0)=M(0,v)$. Riêng $v=1$ cho $M(0,1)=M(2\pi,-1)=(3/2,0,0)$; $v=-1$ cho $M(0,-1)=M(2\pi,1)=(1/2,0,0)$. Dấu trừ biểu thị đảo chiều bề ngang khi ghép hai đầu dải sau một vòng, nhưng một ảnh phối cảnh **không tự nó chứng minh** mọi tính chất tôpô như tính một phía.

**Rubric /5:** giữ nguyên bản R00.

### THPT-G12-EXP02-W05 — Target R01 D4/PED5

**R00 original exact question + answer + rubric:**

> **Written `THPT-G12-EXP02-W05`** — Lập báo cáo 6 mục về một mô hình Möbius hoặc ảo giác Penrose và giải thích giới hạn suy luận.
> 
> *Lời giải chuẩn tự đối chiếu:* Mục tiêu; tham số/tọa độ; quy trình; hai góc; kiểm hình học; hạn chế.
> 
> **Rubric /5:** 1đ giả thiết/mục tiêu; 1đ dữ liệu tọa độ/tham số; 1đ quy trình tái lập; 1đ hai góc nhìn & kiểm; 1đ giới hạn hợp lí.

**Candidate R01 (only text below is proposed change):**

**Lời giải mẫu sáu mục đề xuất (chọn trường hợp Möbius):** **(1) Mục tiêu:** dựng dải vặn nửa vòng và kiểm tra quy tắc ghép đảo chiều ở hai mép. **(2) Dữ liệu:** chọn $u\in[0,2\pi]$, $v\in[-1,1]$ và $M(u,v)=((1+\frac v2\cos\frac u2)\cos u,(1+\frac v2\cos\frac u2)\sin u,\frac v2\sin\frac u2)$. **(3) Quy trình:** trong GeoGebra 3D nhập lệnh dạng `Surface((1+v*cos(u/2)/2)*cos(u), (1+v*cos(u/2)/2)*sin(u), v*sin(u/2)/2, u, 0, 2*pi, v, -1, 1)` (đối chiếu đúng cú pháp/lựa chọn ký hiệu của phiên bản đang dùng); lưu file, đối chiếu tọa độ khi $u=0,2\pi$. **(4) Hai góc nhìn:** lưu ảnh nhìn từ trên và ảnh xiên/ngang, ghi rõ góc nhìn và chú thích một vùng dải/mép. **(5) Kiểm chứng:** tính trực tiếp $M(0,v)=(1+v/2,0,0)=M(2\pi,-v)$, đặc biệt với $v=1,-1$, để thấy quy tắc đảo mép; không chỉ dựa vào ảnh. **(6) Giới hạn:** ảnh một góc có thể che vùng, chất lượng vẽ phụ thuộc lấy mẫu máy tính, và kiểm dán mép chưa phải chứng minh hình thức cho mọi đặc tính tôpô của dải Möbius.

**Rubric /5:** giữ nguyên bản R00.

## D. Targeted reviewer checks and expected machine receipt

1. Confirm 10/10 listed W IDs and their original prompt, proposed worked solution and correct rubric, **by item**. For W01 EXP01, confirm **two distinct stated verification methods** and rubric totals exactly /5; for W05 EXP02 verify all six report sections have actual contents. If a proposed argument is circular, ambiguous, uses an invalid GeoGebra syntax, or exceeds S1 Core without being marked experiential/optional, return a precise correction.
2. Confirm EXP01-O05 source math `v=(2,3,5,4)` implies **22 m** and report's `21 m` came from a **different** tuple, without changing R00 W05/key/rubric. Reconcile canonical ID use and no separate RD1/Mastery.
3. Validate only affected D4/PED5/Q06 and source-fidelity Q18/Q15; preserve unaffected prior R00 PASS by source/delta rather than demanding a full package re-review. Review proposal as `DELTA_C_ACADEMIC_MATERIAL` with `MINIMAL_DELTA` if further fixes are needed; check academic and pedagogy outcomes separately.
4. Return `STANDARD_ID`, `STANDARD_VERSION`, `PERMANENT_SOURCES_VERSION`, `SOURCE_RECEIPT` containing original R00 SHA256 and current R01 packet identity; `EXPECTED_WRITTEN=10`, `REVIEWED_WRITTEN=10`, `EXACT_ITEM_ID_RESULTS`, `O05_PARITY`, `Q06`, `Q15`, `Q18`, `ACADEMIC_VERDICT`, `PED_VERDICT`, `P0/P1/P2` with exact IDs, and `MINIMAL_DELTA`. If you cannot inspect or substantiate a criterion, mark `INSUFFICIENT_EVIDENCE` rather than `PASS`.
5. This is a review-only candidate, not authority for website integration, Final Submit or Mastery. AUTHORING must actually apply and source-lock only approved R01 changes after receiving independent PASS; RELEASE is a separate lane.
