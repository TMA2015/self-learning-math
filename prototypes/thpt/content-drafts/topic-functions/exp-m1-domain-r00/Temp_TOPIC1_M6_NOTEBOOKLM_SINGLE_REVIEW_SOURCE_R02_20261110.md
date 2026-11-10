# AUTHORING · Chuyên đề 1 M6 — nguồn phản biện DELTA_C có SHA (R02)

**PACKET_ID:** \`THPT-TOP-FUNC-M6-LINKED-DERIVATIVE-D5-R02-20261110\`  
**SOURCE STATUS:** \`DRAFT_UNREVIEWED\`; \`CONTENT_READY=NO\`; \`NO_RELEASE\`.  
**SNAPSHOT GỐC ĐÃ PASS:** canonical R18 blob \`2340ea4975b37a457363eea59dd617070934983c\` không thay đổi.  
**CHUẨN DUY NHẤT:** \`SLM-THPT-QUALITY-ONE 1.2.0\`, Q01–Q18 và **đúng 5 Permanent Sources THPT v2.1**.  
**PHẠM VI:** chỉ phần M6 mới bổ sung (Kiến thức, HTML D5, QA và S1/SBT receipt). Không review lại phần R18 bất biến.  
**Bản R01 của review transport:** \`SUPERSEDED\`, không dùng đồng thời; R02 chứa mã đã sửa thang hình để hiển thị cả điểm M, N trong các trường hợp đầu vào cực đoan.

## Prompt NotebookLM (5 câu)

Hãy phản biện độc lập **chỉ bổ sung M6** trong R02, đối chiếu SGK/SBT KNTT Toán 11 tập 2 Bài 31 và đúng 5 Permanent Sources THPT v2.1 theo Q01–Q18, không review lại canonical R18 đã PASS. Kiểm cả toán và sư phạm: thương sai phân khi h dương/âm, điều kiện tồn tại giới hạn hữu hạn hai phía, tiếp tuyến qua điểm, đồ thị f/f′, thang X/Y động để nhìn thấy M/N, và phản ví dụ \(f'(0)=0\) nhưng không cực trị với \(x^3\). Kiểm riêng \(x^3/3-x\) tại ±1, \(x^3\) so với \(x^4\), mức độ học sinh có thể tự đọc hình và sửa ngộ nhận mà không cần giáo viên. Trả Academic/PED verdict theo outcome và mô hình, Qxx, P0/P1/P2, MINIMAL_DELTA và SOURCE_RECEIPT gắn Git blob của từng file; phân biệt toán tương đương với diễn giải sư phạm mới DELTA_C. Không cho \`CONTENT_READY\`, merge/deploy, RD1 hoặc ghi Mastery.

## Manifest nguồn chính xác

| # | File | Git blob SHA | Ký tự |
|---:|---|---|---:|
| 1 | `Temp_TOPIC1_M6_DERIVATIVE_LINKED_GRAPHS_KNOWLEDGE_DELTA_C_R01_20261110.md` | `ec8d7db6d5672e273bd7f392b1260db124266f43` | 5716 |
| 2 | `Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html` | `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5` | 9318 |
| 3 | `Temp_TOPIC1_M6_TANGENT_D5_AUTHORING_QA_R01_20261110.md` | `8343467b912e684bad3cd45bd54c9612aefe99dc` | 5621 |
| 4 | `Temp_TOPIC1_M6_S1_SBT_SOURCE_RECEIPT_R01_20261110.md` | `b387ca72188bc6998a4d109157574ede770b7b0f` | 2954 |

## Các source exact blob

---

### SOURCE 01 — `Temp_TOPIC1_M6_DERIVATIVE_LINKED_GRAPHS_KNOWLEDGE_DELTA_C_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `ec8d7db6d5672e273bd7f392b1260db124266f43`

`````markdown
# Chuyên đề 1 · M6 — Khi đồ thị và đạo hàm kể cùng một câu chuyện

**Vị trí:** Kiến thức → M6, sau ý nghĩa thương sai phân và trước bài luyện tập về tiếp tuyến. **Loại nguồn:** bổ sung \`DELTA_C\`, chưa thay canonical R18. **Outcome liên quan:** \`TOP-FUNC-M6-O01\` (tốc độ tức thời), \`TOP-FUNC-M6-O03\` (cát tuyến–tiếp tuyến), liên hệ sang M7 (dấu đạo hàm và cực trị). Các ví dụ gốc, hình B31-01/B31-02 và item bank cũ được dùng chung, không chép nhân bản.

## Vì sao cần nhìn cả hai đồ thị?

Khi nhìn một đường cong đang đi lên, ta thường nói “hàm đang tăng”; nhưng phát biểu này mới mô tả hình dạng, chưa cho biết **nó tăng nhanh hay chậm tại một thời điểm**. Đạo hàm giúp đo điều đó. Điểm quan trọng là đạo hàm không chỉ xuất hiện trong bảng công thức: từ một điểm trên đồ thị, ta có thể nhìn thấy đạo hàm bằng cách cho điểm thứ hai tiến sát lại và quan sát **độ dốc của đường thẳng qua hai điểm**.

Chọn \(M(x_0;f(x_0))\) và điểm lân cận \(N(x_0+h;f(x_0+h))\), với \(h\ne0\). Cát tuyến \(MN\) có hệ số góc

\[
k_h=\frac{f(x_0+h)-f(x_0)}{h}.
\]

Ở đây h có thể **dương** hoặc **âm**: h dương đặt N về bên phải M, h âm đặt N về bên trái. Nếu hai cách tiến đến M cho cùng một giới hạn hữu hạn, ta có đạo hàm

\[
f'(x_0)=\lim_{h\to0} k_h.
\]

Đường thẳng qua M mang hệ số góc đó là tiếp tuyến, có phương trình \(y-f(x_0)=f'(x_0)(x-x_0)\). Chú ý: không phải cứ lấy \(h=0\) vào thương sai phân là tính được đạo hàm, vì khi đó mẫu bằng 0.

## Mô hình tương tác — đọc hình như thế nào?

[Mở nguồn mô hình D5: Cát tuyến, tiếp tuyến và đồ thị đạo hàm](Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html)

*Đây là mô hình AUTHORING để đối chiếu; liên kết tới file nguồn độc lập trong cùng thư mục, chưa phải bản nhúng website.*

Khung bên trái cho thấy đồ thị \(y=f(x)\) (xanh dương), cát tuyến qua M và N (cam nét đứt) và tiếp tuyến tại M (xanh lá). Khung bên phải cho thấy đồ thị \(y=f'(x)\), điểm cam tương ứng với hoành độ \(x_0\) đang chọn. **Đừng chỉ quan sát đường thẳng quay:** hãy so giá trị hệ số góc cát tuyến và đạo hàm hiển thị bên dưới. Khi thu nhỏ \(|h|\), hai số phải tiến gần nhau.

Mô hình **tự co giãn thang trục khi cần**, để cả hai điểm M và N vẫn nằm trong khung ngay cả khi chọn \(x_0=\pm2\) và \(|h|=1{,}5\). Vì vậy, khi quan sát đồ thị giữa hai trạng thái, hãy đọc lại các mốc trên trục: hình trông dốc hơn chưa chắc hệ số góc đại số lớn hơn. Phép so sánh có giá trị vẫn là các con số \(k_h\) và \(f'(x_0)\) được tính từ cùng công thức.

## Ví dụ 1 — Đạo hàm bằng 0 và hàm thật sự đổi chiều

Chọn \(f(x)=x^3/3-x\), có \(f'(x)=x^2-1\). Khi \(x_0=1\), đạo hàm bằng 0: tiếp tuyến nằm ngang. Nhưng vì sao ở đây hàm có **cực tiểu**?

Khi \(x\) nằm giữa \(-1\) và \(1\), \(x^2-1<0\) nên hàm giảm; khi \(x>1\), \(x^2-1>0\) nên hàm tăng. Vì hàm chuyển **từ giảm sang tăng** tại \(x=1\), đây là cực tiểu địa phương. Tương tự, \(x=-1\) là cực đại địa phương do dấu đạo hàm chuyển từ dương sang âm.

Tại \(x_0=1\), nếu lấy \(h>0\), cát tuyến có độ dốc hơi dương; nếu lấy \(h<0\), độ dốc hơi âm. Cả hai phía cùng tiến về 0 khi \(h\to0\). Ta có thể tự kiểm bằng khai triển:

\[
\frac{f(1+h)-f(1)}{h}=h+\frac{h^2}{3},\qquad h\ne0.
\]

Giới hạn bằng 0, đúng với \(f'(1)=0\). Tuy nhiên, **chỉ biết giới hạn bằng 0 chưa giải thích được cực tiểu**: kết luận cực trị cần xét dấu đạo hàm hoặc so giá trị hàm ở lân cận.

## Ví dụ 2 — Tiếp tuyến nằm ngang nhưng không có cực trị

Chọn \(g(x)=x^3\). Ta có \(g'(x)=3x^2\), do đó \(g'(0)=0\): tiếp tuyến tại gốc O nằm ngang. Nếu chỉ nhớ câu “đạo hàm bằng 0 thì cực trị”, ta sẽ dự đoán sai.

Thật vậy, khi \(x<0\), \(g(x)<0\); khi \(x>0\), \(g(x)>0\). Hàm vẫn tăng khi đi qua O. Về dấu đạo hàm, \(g'(x)>0\) ở hai phía của 0 (trừ tại chính 0), không có chuyển từ tăng sang giảm hoặc ngược lại. Vì vậy O **không** là cực trị.

Thương sai phân tại O bằng

\[
\frac{g(h)-g(0)}{h}=h^2 \quad (h\ne0).
\]

Dù h dương hay âm, hệ số góc cát tuyến đều **dương** và tiến về 0. Nhìn cả hai khung giúp ta thấy điều mà một giá trị \(g'(0)=0\) không thể tự nói hết: **đạo hàm bằng 0 là điều kiện cần ở cực trị trong của hàm khả vi, nhưng không phải điều kiện đủ**.

## Vận dụng — Cùng đạo hàm bằng 0, hai kết luận khác nhau

Xét \(p(x)=x^3\) và \(q(x)=x^4\). Cả hai đều có đạo hàm bằng 0 tại \(x=0\). Hãy giải thích bằng dấu đạo hàm hoặc bằng cách so giá trị hàm gần 0: hàm nào có cực trị tại 0, hàm nào không? Hãy nêu lý do **trước khi** mở đối chiếu.

<details><summary>Đối chiếu</summary>

Với \(p(x)=x^3\), ta có \(p'(x)=3x^2>0\) ở cả hai phía của 0 (trừ tại 0), nên hàm tăng qua 0 và không có cực trị.

Với \(q(x)=x^4\), \(q(x)\ge0=q(0)\) với mọi x; vì vậy \(x=0\) là điểm **cực tiểu**, đồng thời là điểm đạt giá trị nhỏ nhất trên toàn \(\mathbb R\). Nếu dùng dấu đạo hàm: \(q'(x)=4x^3<0\) khi x<0 và >0 khi x>0, nên hàm đổi từ giảm sang tăng.

**Bài học:** cùng có tiếp tuyến nằm ngang nhưng bản chất hai điểm rất khác. Chỉ giá trị \(f'(0)=0\) chưa đủ để quyết định cực trị; cần xét sự thay đổi ở hai phía.

</details>

**Nếu em đang nhầm:** Nếu chưa phân biệt độ dốc cát tuyến với tiếp tuyến, quay lại M6.1 và giảm dần \(|h|\). Nếu chưa rõ điều kiện cực trị, đọc lại M7.1 về dấu đạo hàm trước và sau điểm đang xét. Hoạt động Vận dụng này **công khai, tự đối chiếu**, không dùng làm câu Tự kiểm tra độc lập hoặc ghi Skill Mastery.

---

**AUTHORING provenance:** học liệu bổ sung do tác giả tự biên soạn, lấy mô hình #4 của file 10-in-1 làm ý tưởng, đã sửa ngộ nhận “\(f'=0\) ⇒ cực trị”. Mạch cát tuyến/đạo hàm và hình nền được tái sử dụng từ canonical R18 (blob \`2340ea4975b37a457363eea59dd617070934983c\`), không sửa snapshot đó. Đây là \`DELTA_C_ACADEMIC_MATERIAL\` **chưa independent Academic/PED PASS**, cần review đúng phần chịu ảnh hưởng trước khi promoted.

`````

---

### SOURCE 02 — `Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html`

EXACT_GIT_BLOB_SHA: `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5`

`````html
<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Đạo hàm · Từ cát tuyến đến tiếp tuyến</title>
<style>
:root{font-family:system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#183b54;background:#fff}
*{box-sizing:border-box}
body{margin:0;padding:12px}
.d5-card{max-width:920px;margin:auto;background:#fff;border:1px solid #c7dfe9;border-radius:16px;overflow:hidden}
.d5-top{background:#eaf4fa;padding:17px 20px}
.d5-top h1{font-size:20px;line-height:1.4;margin:0 0 7px}
.d5-top p{margin:0;line-height:1.7;font-size:15px}
.d5-main{padding:17px 20px}
.d5-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.d5-control{min-width:0}
.d5-control label{display:block;font-size:14px;font-weight:650;margin-bottom:5px}
.d5-control select{padding:9px;border-radius:8px;border:1px solid #b9d6e5;background:#fff;color:#183b54;max-width:100%;width:100%;font:inherit}
.d5-control input{width:100%;min-height:35px;accent-color:#1687b4}
.d5-actions{display:flex;flex-wrap:wrap;gap:8px;margin:13px 0}
.d5-actions button{padding:8px 13px;border:1px solid #bad5e3;background:white;color:#18516e;font:inherit;border-radius:9px;cursor:pointer}
.d5-actions button:focus-visible,.d5-control select:focus-visible,.d5-control input:focus-visible{outline:2px solid #1687b4;outline-offset:2px}
.d5-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
.d5-graph{border:1px solid #dceaf2;background:#fbfdff;border-radius:12px;overflow:hidden}
.d5-graph h2{font-size:15px;margin:0;padding:10px 13px;background:#f1f8fc}
.d5-graph canvas{display:block;width:100%;height:285px}
.d5-info{margin-top:13px;background:#f3f9fc;border:1px solid #d7eaf2;border-radius:11px;padding:12px 14px;line-height:1.75;font-size:14px}
.d5-foot{margin-top:10px;color:#526f81;line-height:1.7;font-size:13px}
@media(max-width:640px){body{padding:7px}.d5-top,.d5-main{padding:13px}.d5-graphs,.d5-controls{grid-template-columns:1fr}.d5-graph canvas{height:250px}.d5-top h1{font-size:18px}}
</style></head><body>
<section class="d5-card" aria-label="Mô hình đạo hàm và tiếp tuyến">
<header class="d5-top"><h1>Đạo hàm: từ cát tuyến đến tiếp tuyến</h1>
<p>Chọn một điểm M trên đồ thị, thu hẹp khoảng Δx từ bên trái hoặc bên phải để so độ dốc của cát tuyến với tiếp tuyến. Đồ thị ở khung bên phải cho biết đạo hàm thay đổi ra sao. Hãy thử cả trường hợp tiếp tuyến nằm ngang <strong>nhưng không có cực trị</strong>.</p></header>
<main class="d5-main">
<div class="d5-controls">
<div class="d5-control"><label for="fn">Chọn hàm số</label>
<select id="fn"><option value="turn">f(x) = x³/3 − x (có hai cực trị)</option><option value="flat">f(x) = x³ (đạo hàm bằng 0 nhưng không cực trị)</option></select></div>
<div class="d5-control"><label for="x">Hoành độ tiếp điểm x₀: <output id="xvalue" for="x">0</output></label>
<input id="x" type="range" min="-2" max="2" step="0.05" value="0"></div>
<div class="d5-control"><label for="step">Khoảng Δx = h: <output id="hvalue" for="step">1</output></label>
<input id="step" type="range" min="0.05" max="1.5" step="0.05" value="1"></div>
<div class="d5-control"><label for="side">Điểm N tiến đến M từ phía nào?</label><select id="side"><option value="1">Từ bên phải (h &gt; 0)</option><option value="-1">Từ bên trái (h &lt; 0)</option></select></div>
</div>
<div class="d5-actions"><button type="button" data-x="-1">x₀ = −1</button><button type="button" data-x="0">x₀ = 0</button><button type="button" data-x="1">x₀ = 1</button><button type="button" id="reset">Đặt lại</button></div>
<div class="d5-graphs">
<div class="d5-graph"><h2>Đồ thị f(x) và hai đường qua M</h2><canvas id="graph" role="img" aria-label="Đồ thị f(x) xanh dương, cát tuyến nét đứt màu cam và tiếp tuyến xanh lá. Nội dung chính xác mô tả trong khung chữ bên dưới."></canvas></div>
<div class="d5-graph"><h2>Đồ thị f′(x): dấu đạo hàm</h2><canvas id="derivative" role="img" aria-label="Đồ thị đạo hàm với điểm được đánh dấu tại x không. Dấu của đạo hàm được giải thích bằng chữ."></canvas></div>
</div>
<div class="d5-info" id="info" role="status" aria-live="polite"></div>
<p class="d5-foot">Đường xanh dương: f(x). Xanh lá: tiếp tuyến tại M có hệ số góc f′(x₀). Cam nét đứt: cát tuyến qua M và N ứng với Δx = h. Khi kéo tới gần biên, thang trục có thể tự co dãn để luôn nhìn được M và N. Tại một điểm có đạo hàm bằng 0, <strong>chưa thể kết luận có cực trị</strong>; cần quan sát dấu đạo hàm hai phía hoặc lập luận tương đương.</p>
<p class="d5-foot">Hoạt động công khai trong phần Kiến thức/Vận dụng, không chấm chính thức và không ghi Skill Mastery.</p>
</main></section>
<script>
(function(){
"use strict";
const get=id=>document.getElementById(id);
const mode=get("fn"),x=get("x"),step=get("step"),side=get("side"),info=get("info");
function model(){if(mode.value==="flat")return{f:t=>t*t*t,df:t=>3*t*t,name:"x³"};return{f:t=>t*t*t/3-t,df:t=>t*t-1,name:"x³/3 − x"};}
function pretty(v){const a=Math.round(v*1000)/1000;return String(Object.is(a,-0)?0:a).replace("-","−").replace(".",",");}
function setup(canvas){const w=canvas.clientWidth||420,h=canvas.clientHeight||285,dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);const c=canvas.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#fbfdff";c.fillRect(0,0,w,h);return {c,w,h};}
function plot(canvas,fun,rangeX,rangeY,curveOptions,extra){
 const {c,w,h}=setup(canvas),left=39,right=w-15,top=17,bottom=h-28;
 const xx=t=>left+(t-rangeX[0])/(rangeX[1]-rangeX[0])*(right-left);
 const yy=t=>bottom-(t-rangeY[0])/(rangeY[1]-rangeY[0])*(bottom-top);
 c.lineWidth=1;c.strokeStyle="#e1edf4";c.font="12px system-ui,Arial";c.fillStyle="#557286";
 for(let k=Math.ceil(rangeX[0]);k<=Math.floor(rangeX[1]);k++){const px=xx(k);c.beginPath();c.moveTo(px,top);c.lineTo(px,bottom);c.stroke();c.fillText(String(k),px-4,bottom+17);}
 const tickStep=Math.max(1,Math.ceil((rangeY[1]-rangeY[0])/12));
 for(let k=Math.ceil(rangeY[0]/tickStep)*tickStep;k<=Math.floor(rangeY[1]);k+=tickStep){const py=yy(k);c.beginPath();c.moveTo(left,py);c.lineTo(right,py);c.stroke();c.fillText(String(k),4,py+4);}
 c.lineWidth=1.4;c.strokeStyle="#839eb1";c.beginPath();c.moveTo(xx(0),top);c.lineTo(xx(0),bottom);c.moveTo(left,yy(0));c.lineTo(right,yy(0));c.stroke();
 c.save();c.beginPath();c.rect(left,top,right-left,bottom-top);c.clip();
 function curve(fn,color,width,dashes=[]){c.strokeStyle=color;c.lineWidth=width;c.setLineDash(dashes);c.beginPath();for(let i=0;i<=320;i++){const t=rangeX[0]+(rangeX[1]-rangeX[0])*i/320;const pos=[xx(t),yy(fn(t))];if(i===0)c.moveTo(...pos);else c.lineTo(...pos);}c.stroke();c.setLineDash([]);}
 curve(fun,curveOptions.color||"#1687b4",2.6);
 function dot(px,py,fill){c.beginPath();c.arc(xx(px),yy(py),5.4,0,2*Math.PI);c.fillStyle=fill;c.fill();c.lineWidth=1.3;c.strokeStyle="#fff";c.stroke();}
 extra({curve,dot,c,xx,yy});c.restore();
}
function draw(){
 const m=model(),x0=Number(x.value),h=Number(step.value)*Number(side.value),y0=m.f(x0),next=m.f(x0+h),sec=(next-y0)/h,tan=m.df(x0);
 get("xvalue").textContent=pretty(x0);get("hvalue").textContent=pretty(h);
 const xN=x0+h;
 const graphRangeX=[Math.min(-2.6,xN-0.35),Math.max(2.6,xN+0.35)];
 const graphYBound=Math.ceil(Math.max(mode.value==="flat"?10:5,Math.abs(y0)*1.18,Math.abs(next)*1.18));
 plot(get("graph"),m.f,graphRangeX,[-graphYBound,graphYBound],{color:"#1687b4"},o=>{
 o.curve(t=>y0+tan*(t-x0),"#218f73",2.2);
 o.curve(t=>y0+sec*(t-x0),"#e9922a",2,[6,5]);
 o.dot(x0,y0,"#e9922a");o.dot(x0+h,next,"#1687b4");
 });
 plot(get("derivative"),m.df,[-2.6,2.6],mode.value==="flat"?[-1,13]:[-2,7.5],{color:"#218f73"},o=>{
 o.dot(x0,tan,"#e9922a");
 o.c.beginPath();o.c.moveTo(o.xx(x0),o.yy(0));o.c.lineTo(o.xx(x0),o.yy(tan));o.c.strokeStyle="#e9922a";o.c.setLineDash([4,4]);o.c.lineWidth=1.5;o.c.stroke();o.c.setLineDash([]);
 });
 let explanation;
 if(mode.value==="flat"&&Math.abs(x0)<1e-9)explanation="Tại x₀ = 0, f′(0) = 0 nên tiếp tuyến nằm ngang, nhưng f(x) = x³ vẫn tăng qua 0. Không có cực trị tại đây: đạo hàm không đổi dấu khi đi qua 0.";
 else if(mode.value==="turn"&&Math.abs(Math.abs(x0)-1)<1e-9)explanation=x0<0?"Đạo hàm đổi từ dương sang âm khi qua −1, nên f đạt cực đại địa phương tại x = −1.":"Đạo hàm đổi từ âm sang dương khi qua 1, nên f đạt cực tiểu địa phương tại x = 1.";
 else explanation=tan>0?"Tại x₀ đang chọn, đạo hàm dương nên đồ thị tăng ở lân cận x₀ (trong ví dụ này).":tan<0?"Tại x₀ đang chọn, đạo hàm âm nên đồ thị giảm ở lân cận x₀ (trong ví dụ này).":"f′(x₀) = 0. Cần xét dấu ở hai bên để quyết định có cực trị hay không.";
 info.textContent="f(x) = "+m.name+"; x₀ = "+pretty(x0)+"; f(x₀) = "+pretty(y0)+". Cát tuyến: [f(x₀+h) − f(x₀)]/h = "+pretty(sec)+". Tiếp tuyến: f′(x₀) = "+pretty(tan)+". "+explanation;
}
let busy=false;function schedule(){if(busy)return;busy=true;requestAnimationFrame(()=>{busy=false;draw()});}
[mode,x,step,side].forEach(el=>el.addEventListener("input",schedule));
document.querySelectorAll("button[data-x]").forEach(btn=>btn.addEventListener("click",()=>{x.value=btn.dataset.x;draw()}));
get("reset").addEventListener("click",()=>{mode.value="turn";x.value="0";step.value="1";side.value="1";draw()});
window.addEventListener("resize",schedule);
draw();
})();
</script></body></html>
`````

---

### SOURCE 03 — `Temp_TOPIC1_M6_TANGENT_D5_AUTHORING_QA_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `8343467b912e684bad3cd45bd54c9612aefe99dc`

`````markdown
# AUTHORING M6 · Mô hình cát tuyến–tiếp tuyến và đồ thị đạo hàm — Source/QA R01

**Ngày:** 10/11/2026 · **Phần học:** Chuyên đề Hàm số & đồ thị, M6 (đạo hàm), bố trí **trong Kiến thức**, sau giải thích ý nghĩa giới hạn của thương sai phân và trước Vận dụng. **Không** tạo tab học chính thứ tư; không tạo Core riêng.

## 1. Nguồn đã kiểm và lựa chọn

- Canonical R18 đã Academic/PED PASS của Chuyên đề 1: \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, Git blob \`2340ea4975b37a457363eea59dd617070934983c\`, không chỉnh sửa. Trong M6.1 đã có **thương sai phân/tốc độ tức thời**; M6.2 có hình D5 gốc \`FIG-G11-CHIX-B31-01_R00.svg\`, đồ thị f(x)=x², cát tuyến và tiếp tuyến, source blob \`ca0a19f3931983632f88754bf4317d012add6b79\`. Mô hình mới **bổ sung sự liên kết với f′ và phản ví dụ cực trị**, không thay hình hoặc cách giải đã review.
- File HTML 10-in-1 người dùng cung cấp, SHA-256 \`b303b6ed23c47f79f6f49bbb5d42288bebd5c66a6f11e509bed16dce754848db\`, mô hình số **4** được dùng làm ý tưởng. Không sao chép nguyên, vì câu \`f'(x)=0 ⇒ cực trị\` trong nguồn sai tổng quát và nguồn không thực sự vẽ f′(x).
- **Mô hình AUTHORING đã dựng mới:** \`Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html\`, Git blob **\`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\`**.

## 2. Giá trị tự học/đọc hình

**Giải thích trước khi thao tác:** cát tuyến qua \(M(x_0;f(x_0))\), \(N(x_0+h;f(x_0+h))\) có độ dốc \((f(x_0+h)-f(x_0))/h\) khi \(h\ne0\). Nếu các độ dốc có giới hạn hữu hạn khi \(h\to0\) từ cả hai phía, đó là đạo hàm \(f'(x_0)\), hệ số góc tiếp tuyến tại M. Học sinh có thể chọn \(h>0\) **hoặc** \(h<0\), thu nhỏ \(|h|\), đối chiếu số với tiếp tuyến thực và đồ thị **f′(x)** cạnh bên.

**Hai tình huống để nhận bản chất:**
1. \(f(x)=x^3/3-x\), \(f'(x)=x^2-1\): tại \(x=-1\), đạo hàm đổi từ dương sang âm ⇒ cực đại địa phương; tại \(x=1\), đổi từ âm sang dương ⇒ cực tiểu địa phương.
2. \(f(x)=x^3\), \(f'(x)=3x^2\): tại \(x=0\), đạo hàm bằng 0 nhưng \(f\) vẫn tăng qua điểm đó; **không có cực trị**. Đây là phản ví dụ bắt buộc để sửa lỗi ở nguồn 10-in-1.

**D6:** Khi học sinh coi cát tuyến là tiếp tuyến dù h còn lớn, hãy giảm \(|h|\) và so lại độ dốc. Khi học sinh coi “tiếp tuyến nằm ngang” là đủ cực trị, hãy đổi sang \(f=x^3\) và đọc dấu \(f'\) ở hai bên 0. Không dùng một hình vẽ duy nhất thay chứng minh.

### Vận dụng (không đăng ký item canonical mới ở giai đoạn này)

Với \(f(x)=x^3\), chọn \(x_0=0\) và h=0,1. Dự đoán trước: cát tuyến có độ dốc dương hay âm? Khi đổi h thành −0,1, dấu của độ dốc có đổi không? Vì sao tiếp tuyến vẫn nằm ngang?

<details><summary>Đối chiếu</summary>

\((f(h)-f(0))/h=h^2\) với mọi \(h\ne0\), nên cả h=0,1 và h=−0,1 đều cho độ dốc **0,01** dương. Khi \(h\to0\), thương tiến về 0, vì vậy \(f'(0)=0\), tiếp tuyến ngang. Tuy nhiên \(f'(x)=3x^2>0\) với mọi \(x\ne0\); hàm không đổi chiều tăng tại 0, nên điểm này không phải cực trị.

</details>

## 3. Kiểm tra toán/logic có chứng cứ

**Math invariants:**
- Với \(x^3/3-x\): đạo hàm \(x^2-1\), hai nghiệm ±1; dấu f′ trên (−∞,−1), (−1,1), (1,∞) tương ứng +,−,+.
- Với \(x^3\): f′=3x², chỉ 0 tại x=0, không có biến đổi dấu.
- Thương của \(x^3\) tại \(x_0=0\): \(h^2\to0\) khi h→0 **cả hai phía**, không là 0 khi h còn khác 0.

**D5 smoke trên blob mới sau sửa thang đồ thị:** JavaScript trích từ đúng blob SHA trên, chạy trong V8 với DOM/Canvas **mô phỏng** ở bề rộng 390,820,1440 px. Mỗi cấu hình đã thử 12 tình huống: cực tiểu + cực đại khi f=x³/3−x; đạo hàm 0 không cực trị khi f=x³; cát tuyến với h âm; đạo hàm tại x₀=±2 bằng 12; **hai thang tung độ đổi theo hàm để giữ tiếp điểm trong khung**; hai Canvas vẽ lại; nút reset; ba nút chuyển nhanh x₀=−1,0,1. Những phép thử này là logic với DOM/Canvas giả lập. **12/12 mỗi cấu hình, tổng 36/36 PASS, 0 JS exception.** Không API mạng, không CDN, có các slider và nút keyboard focus, thông báo văn bản \`aria-live\`.

**Q07 kiểm tọa độ Canvas ở các điểm cực đoan (mock, chưa browser thật):** Sau khi phát hiện N bị cắt khỏi khung ở lựa chọn \(x_0=\pm2, |h|=1{,}5\) cho \(f(x)=x^3\), tác giả đã sửa **thang X/Y động** và khoảng chia trục phù hợp. Dùng Canvas \`arc\` spy trong môi trường giả lập, ở bề rộng 390/820/1440, mỗi cấu hình kiểm 4 trường hợp (flat tại ±2 với h=±1,5 và turn tại ±1 với h=±0,1): **12/12** phép kiểm xác nhận cả hai điểm M/N nằm trong khung đồ thị và giá trị đạo hàm hiển thị đúng. Đây là QA vị trí tọa độ nguồn Canvas **trong mock**, không là chứng cứ pixel, Safari, keyboard hay touch thực. Nguồn mới SHA \`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\`.

**Giới hạn:** phép thử dùng Canvas context mock, **không phải Chromium browser render/QA responsive/thiết bị thật**. Hình sau render, hiển thị công thức trong website, ánh xạ source/model/figure trên nhiều placement, kiểm keyboard screen-reader/touch vẫn phải QA đúng HEAD. Không ghi Mastery, không làm bài Tự kiểm tra.

## 4. Tách delta đúng chuẩn

- Chỉ **cập nhật nguồn phần bổ sung**, không sửa M6 R18 đã PASS.
- Mô hình thêm **hai đồ thị liên kết, phản ví dụ và cách dẫn dắt**, nên phân loại \`DELTA_C_ACADEMIC_MATERIAL\` cho **phần bổ sung M6**; targeted independent Academic/PED Q01–Q18 theo đúng scope của asset/diễn giải này, **không review lại R18**.
- Không tự gán \`CONTENT_READY\`, \`MODEL_PUBLISHED\`, \`AP3_PASS\` hoặc tiến độ học sinh. Khi được duyệt, gắn một \`MODEL_ID\` canonical và nhiều placement cùng asset/hash; nhánh RELEASE chịu tích hợp và Golden UI.
- **Gate V2 TOPIC #790 vẫn OPEN.**

**STATE:** \`MODEL4_MATH_FIXED_AND_IMPLEMENTED_IN_AUTHORING\` · \`MOCKED_JS_24_24_PASS\` · \`REAL_BROWSER_RENDER_PENDING\` · \`INDEPENDENT_DELTA_C_REVIEW_PENDING\`.

`````

---

### SOURCE 04 — `Temp_TOPIC1_M6_S1_SBT_SOURCE_RECEIPT_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `b387ca72188bc6998a4d109157574ede770b7b0f`

`````markdown
# S1/SBT SOURCE RECEIPT — Chuyên đề 1, M6: Đạo hàm–tiếp tuyến và dấu đạo hàm

**Ngày:** 10/11/2026 · **Lane:** AUTHORING · **Scope:** chỉ phần bổ sung M6 \`DELTA_C\`. Đây là **kiểm nguồn trực tiếp từ PDF đã được cung cấp**, không phải Academic/PED PASS cho phần mới.

## Sách gốc đã kiểm hình trang PDF

| Nguồn | Tên PDF | SHA-256 byte gốc | Bài | Trang **in trong sách** | Trang **PDF** 1-based |
|---|---|---|---|---|---|
| SGK KNTT Toán 11 tập 2 | \`sach-giao-khoa-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf\` | \`14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491\` | **Bài 31 · Định nghĩa và ý nghĩa của đạo hàm** | **81–87** | **82–88** |
| SBT KNTT Toán 11 tập 2 | \`sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf\` | \`a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189\` | **Bài 31 · Định nghĩa và ý nghĩa của đạo hàm** | **54–57** | **55–58** |

Đã render **contact sheet liên tiếp SGK PDF 79–97 và SBT PDF 43–61**, kiểm ranh giới các bài. SGK B31 mở đầu PDF82/trang in81 và B32 bắt đầu PDF89/trang in88. SBT B31 mở đầu PDF55/trang in54 và B32 bắt đầu PDF59/trang in58. Đã mở **ảnh toàn trang** SGK PDF83 (in82: định nghĩa đạo hàm, giới hạn hữu hạn, h khác 0, ví dụ) và PDF89 (in88: mở B32), SBT PDF55 (in54: ý nghĩa hình học, phương trình tiếp tuyến). Đây là chứng cứ phân biệt **trang sách in** với **trang thứ tự PDF**, không suy từ filename.

**Phạm vi toán trực tiếp từ S1:**
- Đạo hàm tại điểm trong khoảng được định nghĩa bằng \(\lim_{x\to x_0}(f(x)-f(x_0))/(x-x_0)\) khi giới hạn hữu hạn tồn tại, tương đương cách viết dùng \(h\to0\).
- Hệ số góc tiếp tuyến là \(f'(x_0)\); phương trình tiếp tuyến qua \((x_0;f(x_0))\) là \(y-f(x_0)=f'(x_0)(x-x_0)\).
- Nội dung **hai biểu diễn liên kết f/f′ và phản ví dụ \(x^3\) so với \(x^4\)** là minh họa sư phạm do AUTHORING tự biên soạn, dựa vào kiến thức về đạo hàm/dấu đạo hàm ở các mạch có liên quan; không lấy đó làm trích dẫn nguyên văn SGK B31. Mô hình không được thay định nghĩa giới hạn bằng câu “kéo slider gần 0 là chứng minh”.

**Điều kiện cần lưu ý cho reviewer:** mô hình dùng hai hàm đa thức trên toàn \(\mathbb R\), nên giới hạn đạo hàm hai phía tại mọi x₀ đều hợp lệ; \(h=0\) bị loại trong thương sai phân; xét \(f'=0\) không thể tự suy cực trị. Chú thích hình/Canvas phải ghi đúng điểm và hệ số góc, hiển thị điểm tại x₀=±2 trong khuôn hình khi f=x³.

**Bảo toàn:** canonical R18 \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, Git blob \`2340ea4975b37a457363eea59dd617070934983c\` không thay đổi; hình \`FIG-G11-CHIX-B31-01_R00.svg\` và \`...B31-02_R00.svg\` gốc dùng chung theo placement, không sao chép nguồn thành câu mới. Bản M6 mới đang \`DELTA_C\`, **chưa** có reviewer độc lập Academic/PED verdict và \`SOURCE_RECEIPT\` NotebookLM.

**STATE:** \`S1_SBT_PAGINATION_VISUAL_VERIFIED\`; \`S1_DEFINITION_AND_TANGENT_SOURCE_VERIFIED\`; \`M6_SUPPLEMENT_DELTA_C_REVIEW_PENDING\`; \`CONTENT_READY=NO\`.

`````

---

**Gói review chỉ là nguồn vận chuyển** (không phải canonical thứ hai); nếu bất kỳ file source đổi SHA, phải làm lại receipt và không thể dùng nguyên verdict của snapshot trước.
