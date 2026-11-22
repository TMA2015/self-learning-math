# AUTHORING · Chuyên đề 2 P03/P06/P07 — nguồn phản biện D5 có SHA (R01)

**PACKET_ID:** \`THPT-TOPIC-VECTOR-P03-P06-P07-D5-R01-20261110\`  
**LANE:** AUTHORING · **CONTENT_READY:** NO · **PUBLISH:** NO · **PR:** #793.  
**CANONICAL R02 SOURCE BLOB:** \`29669e6de80cba50a11bb8574220c6a19b4f7138\`, **BẤT BIẾN**, 7/7 phần đã Academic/PED PASS đúng snapshot cũ.  
**Chuẩn duy nhất:** \`SLM-THPT-QUALITY-ONE\` bản hiệu lực \`1.2.0\`, Q01–Q18; NotebookLM đúng **5 Permanent Sources THPT v2.1** và SGK/SBT KNTT theo từng lớp/bài.  
**Không có private RD1** hoặc dữ liệu Mastery trong gói.

## Prompt NotebookLM (5 câu)

Hãy phản biện **đúng phần hình và giải thích bổ sung** của Chuyên đề Vectơ–Tọa độ ở P03, P06, P07, dùng đúng 5 Permanent Sources v2.1 và SGK/SBT KNTT đã định danh trong provenance; không review lại toàn canonical R02 bất biến. Với P03, kiểm lập luận hình chiếu có hướng, điều kiện hai vectơ khác 0, sự khác nhau giữa tích vô hướng và tổng vectơ, cùng mô hình kéo thả trên điện thoại và bộ số 0°/60°/90°/120°/180°. Với P06, xác nhận SVG mới **toán tương đương** ví dụ A(1;−2;3), B(4;0;−1) cho \(\overrightarrow{AB}=(3;2;−4)\), \(AB=\sqrt{29}\), hoặc nêu sai khác cần sửa; P07 kiểm d=|t|, ba trạng thái cắt/tiếp xúc/không giao và tính đúng của hình chiếu mặt cầu. Hãy phân loại **Delta B tương đương có chứng cứ** hay **Delta C thay đổi sư phạm** theo từng file, trả Qxx, Academic/PED verdict nếu cần, P0/P1/P2, MINIMAL_DELTA và SOURCE_RECEIPT trên đúng file/hash; không tự cấp \`CONTENT_READY\` hoặc quyền merge/deploy.

## Manifest nguồn gốc

| # | Tên file | Git blob SHA | Số ký tự |
|---:|---|---|---:|
| 1 | `Temp_TOPIC2_P03_DOT_PRODUCT_PROJECTION_KNOWLEDGE_DELTA_C_R01_20261110.md` | `de093616ff4b7474a48e4c95163a61aea6def958` | 4303 |
| 2 | `Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html` | `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e` | 8311 |
| 3 | `Temp_TOPIC2_P03_DOT_PRODUCT_D5_AUTHORING_QA_R01_20261110.md` | `2bda38b31346374e9a9b74c176244b710b588b12` | 4479 |
| 4 | `Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg` | `a97456cc3606099a2443605859417196cd672303` | 2956 |
| 5 | `Temp_TOPIC2_SLIDE06_10_D5_SOURCE_EQUIVALENT_AUDIT_R01_20261110.md` | `5a20a2ad21bd216f6b208998b7bce7984a16735c` | 5796 |
| 6 | `Temp_TOPIC2_P07_SPHERE_PLANE_INTERSECTION_LAB_D5_R00_20261110.html` | `f5874a1e65a0db40dc77098c4356952c0f7d3043` | 9600 |
| 7 | `Temp_TOPIC2_P06_P07_D5_AUTHORING_QA_R01_20261110.md` | `58472e9820ec9f63d19ea5070753998262f829fd` | 4961 |

## Nguồn nhúng chính xác

---

### SOURCE 01 — `Temp_TOPIC2_P03_DOT_PRODUCT_PROJECTION_KNOWLEDGE_DELTA_C_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `de093616ff4b7474a48e4c95163a61aea6def958`

`````markdown
# Chuyên đề 2 · Phần 3 — Hình chiếu có hướng và dấu của tích vô hướng

**Vị trí:** Kiến thức → Phần 3 (Tọa độ vectơ và tích vô hướng trong mặt phẳng), sau định nghĩa tích vô hướng và trước các ví dụ về vuông góc. **Outcome:** \`TOPIC-VEC-P03-O06\` và \`TOPIC-VEC-P03-O07\`. **Trạng thái:** học liệu bổ sung AUTHORING chưa được nhập vào nguồn R02 đã PASS.

## Vì sao tích vô hướng có thể là một số âm?

Hãy hình dung hai người cùng kéo một chiếc thùng. Nếu cả hai kéo gần cùng hướng, lực của người thứ hai hỗ trợ hướng chuyển động của thùng. Nếu người thứ hai kéo ngược về phía sau, lực đó cản trở chuyển động. Ta muốn có một phép tính không chỉ nói hai lực mạnh đến mức nào, mà còn cho biết **chúng hỗ trợ hay chống lại nhau theo một hướng đã chọn**.

Với hai vectơ \(\vec u,\vec v\) khác vectơ-không và góc giữa chúng là \(\alpha\in[0^\circ,180^\circ]\), hình chiếu của \(\vec v\) lên **đường thẳng có hướng** của \(\vec u\) có giá trị có dấu \(|\vec v|\cos\alpha\). Tại góc nhọn, giá trị này dương; tại góc vuông, nó bằng 0; tại góc tù, nó âm. Nhân tiếp với độ dài \(|\vec u|\), ta được

\[
\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\alpha.
\]

**Tích vô hướng là một số thực**, không phải đường chéo của hình bình hành. Đường chéo ấy là \(\vec u+\vec v\), tức kết quả của phép cộng vectơ, là một đối tượng khác hẳn.

## Mô hình tương tác — hình chiếu, góc và hình bình hành

[Mở mô hình HTML: Vectơ, hình chiếu và tích vô hướng](Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html)

*File hiện là học liệu AUTHORING độc lập trong thư mục nguồn, chưa phải bản nhúng website.*

Trên hình, \(\vec u\) màu xanh dương hướng sang phải, \(\vec v\) màu xanh lá có thể quay và thay đổi độ dài. Điểm H màu cam là chân đường vuông góc hạ từ đầu mút \(\vec v\) xuống đường thẳng chứa \(\vec u\). Khi góc \(\alpha\) lớn hơn \(90^\circ\), chân H nằm **bên trái gốc O**, chứ không mất đi. Đường nét đứt còn lại dựng hình bình hành cho phép cộng hai vectơ; hãy phân biệt nó với đường hình chiếu.

Dùng trước ba nút: **0° (cùng hướng)**, **90° (vuông góc)** và **180° (ngược hướng)**. Sau đó thử góc 60° và 120°, giữ hai độ dài là 4 và 3. Em sẽ thấy:

| Góc \(\alpha\) | Hình chiếu có hướng \(|\vec v|\cos\alpha\) | Tích vô hướng \(\vec u\cdot\vec v\) |
|---:|---:|---:|
| 60° | 1,5 | 6 |
| 90° | 0 | 0 |
| 120° | −1,5 | −6 |

Số âm ở hàng 120° **không có nghĩa một vectơ có độ dài âm**. Độ dài luôn không âm; dấu âm đến từ cos của góc tù, biểu diễn hướng chiếu ngược chiều \(\vec u\).

## Khi nào được nói hai vectơ vuông góc?

Nếu \(\vec u\ne\vec0\) và \(\vec v\ne\vec0\), ta có

\[
\vec u\cdot\vec v=0\quad\Longleftrightarrow\quad\cos\alpha=0\quad\Longleftrightarrow\quad\alpha=90^\circ.
\]

Điều kiện **hai vectơ khác 0** rất quan trọng: khi một vectơ là \(\vec0\), tích vô hướng bằng 0 nhưng không có góc xác định giữa hai vectơ để gọi là \(90^\circ\). Mô hình đã giới hạn độ dài các vectơ ở giá trị dương để không tạo hình giả về một góc của vectơ-không.

## Vận dụng — cùng độ dài, khác hướng

Giữ \(|\vec u|=4\) và \(|\vec v|=3\). Một bạn dự đoán rằng nếu chỉ thay đổi góc giữa hai vectơ, tích vô hướng không thể âm vì \(4\cdot3=12>0\). Em hãy chọn góc 120°, quan sát vị trí H và nêu lý do dự đoán đó sai.

<details><summary>Đối chiếu</summary>

Ở góc 120°, \(\cos120^\circ=-\tfrac12\), nên thành phần chiếu có hướng của \(\vec v\) bằng \(3\cdot(-\tfrac12)=-1{,}5\). H nằm bên trái O vì giá trị hình chiếu âm. Tích vô hướng là \(4\cdot3\cdot(-\tfrac12)=-6\). Bạn học đã bỏ mất yếu tố **\(\cos\alpha\)**, tức bỏ qua sự khác nhau về hướng.

</details>

**Nếu em nhầm:** Nếu hình bình hành làm em tưởng tích vô hướng cũng là vectơ, quay lại Phần 2 về phép cộng. Nếu em chưa hiểu chữ “hình chiếu có hướng”, đặt góc 0°, 90°, 180° và đọc lại dấu của tọa độ H. Nếu một vectơ bằng 0, không tính góc bằng cách chia cho tích hai độ dài.

---

**Truy nguồn AUTHORING:** nền lý thuyết và outcome dùng lại từ canonical R02 \`29669e6de80cba50a11bb8574220c6a19b4f7138\`; mã mô hình mới \`Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html\`; ý tưởng chọn lọc từ mô hình #6 của tệp 10-in-1. Không tạo item canonical mới, không dùng câu có lời giải công khai cho Tự kiểm tra. Mức delta có thay đổi giải thích sư phạm cần được reviewer phân loại và phản biện đúng phần trước khi \`CONTENT_READY\`.

`````

---

### SOURCE 02 — `Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html`

EXACT_GIT_BLOB_SHA: `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e`

`````html
<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vectơ và tích vô hướng · Phòng thí nghiệm</title>
<style>
:root{font-family:system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#183b54;background:white}
*{box-sizing:border-box}body{margin:0;padding:12px}
.d5-box{max-width:910px;margin:auto;border:1px solid #c7dfe9;border-radius:16px;overflow:hidden;background:white}
.d5-head{padding:16px 20px;background:#eaf4fa}
.d5-head h1{margin:0 0 6px;font-size:19px}.d5-head p{margin:0;line-height:1.65}
.d5-body{padding:16px 20px}.d5-controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d5-controls label{display:block;font-size:14px;font-weight:650;margin-bottom:5px}
.d5-controls input{width:100%;accent-color:#1687b4;min-height:34px}
.d5-actions{display:flex;flex-wrap:wrap;gap:8px;margin:13px 0}
.d5-actions button{padding:8px 12px;border:1px solid #b6d3e4;border-radius:9px;background:#fff;color:#184e69;font:inherit;cursor:pointer}
.d5-actions button:focus-visible,.d5-controls input:focus-visible{outline:2px solid #1687b4;outline-offset:2px}
.d5-stage{background:#fbfdff;border:1px solid #dae9f2;border-radius:12px;overflow:hidden}
.d5-stage canvas{width:100%;height:360px;display:block;touch-action:none;cursor:crosshair}
.d5-results{margin-top:13px;padding:13px 15px;background:#f3f9fc;border:1px solid #d9eaf2;border-radius:12px;line-height:1.8}
.d5-note{color:#527186;font-size:13px;line-height:1.7;margin-top:9px}
@media(max-width:570px){body{padding:6px}.d5-head,.d5-body{padding:12px}.d5-controls{grid-template-columns:1fr}.d5-stage canvas{height:290px}.d5-head h1{font-size:17px}}
</style></head><body>
<section class="d5-box" aria-label="Phòng thí nghiệm vectơ và tích vô hướng">
<header class="d5-head"><h1>Tích vô hướng: góc giữa hai vectơ nói lên điều gì?</h1>
<p>Kéo đầu mút hai vectơ hoặc điều chỉnh thanh trượt. Quan sát hình chiếu của vectơ v lên hướng u và dấu của tích vô hướng. Tích vô hướng là <strong>một số thực</strong>, không phải một vectơ.</p></header>
<main class="d5-body">
<div class="d5-controls">
<div><label for="angle">Góc giữa u và v: <output id="angleOut" for="angle">60°</output></label><input id="angle" type="range" min="0" max="180" value="60" step="5"></div>
<div><label for="magU">Độ dài |u|: <output id="uOut" for="magU">4</output></label><input id="magU" type="range" min="1" max="6" value="4" step="0.1"></div>
<div><label for="magV">Độ dài |v|: <output id="vOut" for="magV">3</output></label><input id="magV" type="range" min="1" max="6" value="3" step="0.1"></div>
</div>
<div class="d5-actions"><button type="button" data-a="0">Cùng hướng · 0°</button><button type="button" data-a="90">Vuông góc · 90°</button><button type="button" data-a="180">Ngược hướng · 180°</button><button type="button" id="reset">Đặt lại</button></div>
<div class="d5-stage"><canvas id="vectors" role="img" aria-label="Hai vectơ cùng gốc O: u xanh dương nằm ngang, v xanh lá quay được. Đường nét đứt biểu diễn hình chiếu vuông góc. Hình bình hành của tổng vectơ có nét mờ. Giá trị số được ghi ở bên dưới."></canvas></div>
<div id="readout" class="d5-results" role="status" aria-live="polite"></div>
<p class="d5-note">Hình chiếu có thể nằm phía <strong>trái O</strong> khi góc tù: độ dài hình chiếu có hướng \(|v|\cos α\) lúc đó là số âm. Đường chéo hình bình hành biểu diễn tổng vectơ u + v, nhưng <strong>không</strong> phải tích vô hướng. Dùng thanh trượt nếu không muốn kéo các điểm trên màn hình cảm ứng.</p>
<p class="d5-note">Hoạt động trong phần Kiến thức/Vận dụng, không chấm điểm hoặc ghi mức thành thạo. Độ dài hai vectơ luôn dương để góc giữa chúng có nghĩa.</p>
</main></section>
<script>
(function(){
"use strict";
const g=id=>document.getElementById(id);
const theta=g("angle"),magU=g("magU"),magV=g("magV"),canvas=g("vectors"),readout=g("readout");
const fmt=x=>String(Math.round((Math.abs(x)<1e-9?0:x)*1000)/1000).replace("-","−").replace(".",",");
let geometry=null,drag=null;
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
function draw(){
 const a=Number(theta.value)*Math.PI/180,u=Number(magU.value),v=Number(magV.value),dot=u*v*Math.cos(a);
 const w=canvas.clientWidth||740,h=canvas.clientHeight||360,dpr=Math.min(window.devicePixelRatio||1,2);
 canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
 const c=canvas.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);
 c.fillStyle="#fbfdff";c.fillRect(0,0,w,h);
 const scale=Math.min(w/26,h/10.8,38),ox=w/2,oy=h*0.7;
 const pt=(x,y)=>[ox+x*scale,oy-y*scale];
 const U=pt(u,0),V=pt(v*Math.cos(a),v*Math.sin(a)),W=pt(u+v*Math.cos(a),v*Math.sin(a)),H=pt(v*Math.cos(a),0),O=pt(0,0);
 geometry={ox,oy,scale,U,V};
 function segment(p,q,color,width=2.4,dash=[]){c.beginPath();c.moveTo(...p);c.lineTo(...q);c.lineWidth=width;c.strokeStyle=color;c.setLineDash(dash);c.stroke();c.setLineDash([]);}
 function circle(p,color,r=5.2){c.beginPath();c.arc(p[0],p[1],r,0,2*Math.PI);c.fillStyle=color;c.fill();c.lineWidth=1.4;c.strokeStyle="#fff";c.stroke();}
 function text(t,x,y,color="#365b72"){c.font="14px system-ui,Arial";c.fillStyle=color;c.fillText(t,x,y);}
 for(let k=-6;k<=6;k+=2){let t=pt(k,0);segment([t[0],18],[t[0],h-20],"#e9f1f6",1);}
 for(let k=-2;k<=6;k+=2){let t=pt(0,k);segment([12,t[1]],[w-12,t[1]],"#e9f1f6",1);}
 segment(pt(-6,0),pt(6,0),"#95afbe",1.5);segment(pt(0,-2),pt(0,6),"#95afbe",1.5);
 segment(U,W,"#b7ccdc",1.6,[5,5]);segment(V,W,"#b7ccdc",1.6,[5,5]);
 segment(O,W,"#b7ccdc",1.5,[5,5]);
 segment(V,H,"#d98f2e",1.7,[5,5]);
 segment(O,U,"#1687b4",2.8);segment(O,V,"#218f73",2.8);
 function arrow(from,to,color){const dx=to[0]-from[0],dy=to[1]-from[1],angle=Math.atan2(dy,dx),len=10;c.strokeStyle=color;c.lineWidth=2.3;c.beginPath();c.moveTo(to[0]-len*Math.cos(angle-.55),to[1]-len*Math.sin(angle-.55));c.lineTo(...to);c.lineTo(to[0]-len*Math.cos(angle+.55),to[1]-len*Math.sin(angle+.55));c.stroke();}
 arrow(O,U,"#1687b4");arrow(O,V,"#218f73");circle(U,"#1687b4",5.3);circle(V,"#218f73",5.3);circle(H,"#e9922a",3.8);circle(O,"#55788a",3.5);
 text("O",ox-18,oy+19);text("u",U[0]+7,U[1]+18,"#156f96");text("v",V[0]+8,V[1]-7,"#1c7b61");
 text("u + v",W[0]+5,W[1]-7,"#657e91");text("H",H[0]+7,H[1]+16,"#a66e21");
 g("angleOut").textContent=String(Math.round(Number(theta.value)))+"°";g("uOut").textContent=fmt(u);g("vOut").textContent=fmt(v);
 const signed=v*Math.cos(a);
 let meaning;
 if(Math.abs(dot)<1e-8)meaning="Tích vô hướng bằng 0: hai vectơ khác 0 vuông góc.";
 else if(dot>0)meaning="Tích vô hướng dương: góc nhọn (hoặc 0°), thành phần chiếu của v cùng chiều u.";
 else meaning="Tích vô hướng âm: góc tù (hoặc 180°), thành phần chiếu của v ngược chiều u.";
 readout.textContent="α = "+fmt(Number(theta.value))+"°; hình chiếu có hướng của v lên u = |v|cos α = "+fmt(signed)+". u · v = |u||v|cos α = "+fmt(dot)+". "+meaning;
}
let busy=false;function schedule(){if(busy)return;busy=true;requestAnimationFrame(()=>{busy=false;draw()});}
[theta,magU,magV].forEach(k=>k.addEventListener("input",schedule));
document.querySelectorAll("button[data-a]").forEach(b=>b.addEventListener("click",()=>{theta.value=b.dataset.a;draw();}));
g("reset").addEventListener("click",()=>{theta.value="60";magU.value="4";magV.value="3";draw();});
function pointPosition(e){const r=canvas.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top];}
canvas.addEventListener("pointerdown",e=>{
 if(!geometry)return;const p=pointPosition(e);const d=q=>Math.hypot(p[0]-q[0],p[1]-q[1]);
 if(d(geometry.U)<18)drag="u";else if(d(geometry.V)<18)drag="v";else return;
 canvas.setPointerCapture(e.pointerId);e.preventDefault();
});
canvas.addEventListener("pointermove",e=>{
 if(!drag||!geometry)return;const p=pointPosition(e),ux=(p[0]-geometry.ox)/geometry.scale,uy=(geometry.oy-p[1])/geometry.scale;
 if(drag==="u"){magU.value=String(Math.round(clamp(ux,1,6)*10)/10);}
 else{
  const r=Math.hypot(ux,uy),angle=Math.atan2(Math.max(0,uy),ux)*180/Math.PI;
  magV.value=String(Math.round(clamp(r,1,6)*10)/10);
  theta.value=String(Math.round(clamp(angle,0,180)/5)*5);
 }
 draw();e.preventDefault();
});
function stop(){drag=null}
canvas.addEventListener("pointerup",stop);canvas.addEventListener("pointercancel",stop);
window.addEventListener("resize",schedule);
draw();
})();
</script></body></html>
`````

---

### SOURCE 03 — `Temp_TOPIC2_P03_DOT_PRODUCT_D5_AUTHORING_QA_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `2bda38b31346374e9a9b74c176244b710b588b12`

`````markdown
# AUTHORING P03 · Mô hình vectơ, hình chiếu và tích vô hướng — Source/QA R01

**Ngày:** 10/11/2026 · **Nhánh:** AUTHORING #793 · **Đơn vị học:** Chuyên đề Vectơ và phương pháp tọa độ, **Phần 3/7**, \`TOPIC-VEC-P03-O06\` và \`TOPIC-VEC-P03-O07\`. Đặt **trong Kiến thức** sau giải thích tại sao tích vô hướng bằng tích hai độ dài nhân cos góc, trước Vận dụng/Đối chiếu.

## 1. Source custody / bảo toàn nghiệm thu

- Canonical R02 7/7 đã được review Academic/PED theo snapshot, file \`Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, blob **\`29669e6de80cba50a11bb8574220c6a19b4f7138\`**; **không sửa**.
- Trong R02 P03 đã có hai hình \`FIG-G10-B10-01\` và \`FIG-G10-B11-01\` dùng để đọc tọa độ/góc tù; nội dung giải thích hình chiếu có hướng và tích vô hướng được giữ nguyên. Mô hình bổ sung không thay stem, answer, rubric, 42 private RD1 hay Mastery.
- File 10-in-1 do chủ dự án cung cấp, SHA256 \`b303b6ed23c47f79f6f49bbb5d42288bebd5c66a6f11e509bed16dce754848db\`, mô hình số **6** là tham khảo. Bản gốc chỉ có slider độ dài/góc, chưa vẽ hình bình hành hoặc cho kéo thả như giới thiệu.
- Bản HTML nguồn AUTHORING mới: \`Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html\`, Git blob **\`06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e\`**.

## 2. Vì sao mô hình hữu ích để tự học?

Hai vectơ khác 0 có độ dài \(|u|\), \(|v|\) và tạo góc \(α\in[0°,180°]\). Thả đường vuông góc từ đầu mút v xuống **đường thẳng mang hướng u**. Chân chiếu H có thể ở phía trước hoặc **sau gốc O**; đại lượng chiếu **có hướng** bằng \(|v|\cos α\). Nhân với \(|u|\), ta được \(u\cdot v=|u||v|\cos α\). Tích vô hướng là **số thực**, khác với đường chéo của hình bình hành biểu diễn \(u+v\).

**D5 vừa tạo:** Canvas sáng, nền lưới mảnh, xanh dương cho u, xanh lá cho v, cam cho chân chiếu H, hình bình hành nét đứt. Cho kéo điểm mút hai vectơ bằng pointer hoặc dùng slider góc/độ dài. 3 nút thử nhanh 0°/90°/180° cho dấu tích vô hướng. Luôn giữ \(|u|,|v|\ge1\) để góc có nghĩa, không minh họa vectơ-không bằng một góc định sẵn.

**Ví dụ với \(|u|=4, |v|=3\):**
| Góc | \(\cos α\) | Chiếu có hướng của v lên u | Tích vô hướng |
|---:|---:|---:|---:|
| 0° | 1 | 3 | 12 |
| 60° | 1/2 | 1,5 | 6 |
| 90° | 0 | 0 | 0 |
| 120° | −1/2 | −1,5 | −6 |
| 180° | −1 | −3 | −12 |

**Điều kiện suy luận:** dot=0 ⇒ vuông góc **chỉ khi cả hai vectơ khác 0**. Dấu dương tương ứng góc trong [0°,90°), dấu âm tương ứng góc trong (90°,180°]. Không được lấy \(|u||v|\) thay tích vô hướng khi góc không bằng 0; không gán góc nếu một vectơ bằng 0.

### Vận dụng (chưa mint item mới)

Giữ \(|u|=4, |v|=3\). Thử \(α=120°\). Trước khi mở lời giải, giải thích vì sao phần hình chiếu H nằm bên trái O và tại sao tích vô hướng âm dù độ dài của u và v đều dương.

<details><summary>Đối chiếu</summary>

Vì \(\cos120°=-1/2\), hình chiếu có hướng của v là \(3\cos120°=-1,5\): dấu âm cho biết hình chiếu ngược chiều u, nên H nằm bên trái O. Tích vô hướng \(u\cdot v=4\cdot3\cdot(-1/2)=-6\). Giá trị âm **không** nói độ dài của vectơ nào âm; cả hai độ dài vẫn dương.

</details>

## 3. QA nội bộ

- Đã truy xuất **đúng source HTML GitHub blob** nêu trên; thực thi JavaScript trong DOM/Canvas giả lập ở bề rộng 390/820/1440 px.
- 10 điều kiện/cấu hình: 5 dấu tích vô hướng ứng với các góc 0/60/90/120/180; 3 nút preset; 1 reset; 1 thao tác pointer kéo mút v sang phía x âm; **30/30 PASS**, không JS exception.
- CSS/mã không CDN hoặc network. Lời giải thích bằng chữ ngoài Canvas và \`role=status\`/ \`aria-live\` cho phản hồi.
- **Chưa** có Chromium screenshot/UI thực trên HEAD này, chưa QA cảm ứng/screen reader thực, chưa nghiệm thu Q07/AP3 của hình mới. Mock QA chỉ cho biết logic và phép tính chạy trong môi trường mô phỏng.
- SVG đã review của P03 và item bank R02 không bị thay; nếu mô hình mới làm thay đổi đáng kể tiến trình giải thích thì \`DELTA_C\`, reviewer kiểm phần bổ sung mới, không mở lại toàn P03.

## 4. Gating

**Q01–Q14:** học sinh phải biết chiều của hình chiếu, ý nghĩa dot/cos và điều kiện vectơ khác 0. **Q15:** một canonical model/figure source có thể nhiều placement; Vận dụng trên đây không tự trở thành item_id mới. **Q16:** không dùng để ghi mastery hoặc đưa câu exposed vào private RD1. **Q18:** nếu delta C thì cần Academic/PED independent verdict + source/receipt SHA khớp trước CONTENT_READY.

**STATE:** \`MODEL6_AUTHORING_CANDIDATE\` · \`MOCKED_JS_30_OF_30_PASS\` · \`SOURCE_R02_UNCHANGED\` · \`BROWSER_RENDER_QA_PENDING\` · \`DELTA_CLASSIFICATION_HOLD\` · \`CONTENT_READY=NO\`.

`````

---

### SOURCE 04 — `Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg`

EXACT_GIT_BLOB_SHA: `a97456cc3606099a2443605859417196cd672303`

`````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 445" width="1000" height="445" role="img" aria-labelledby="title desc">
<title id="title">Tọa độ vectơ AB và độ dài từ ba độ dời vuông góc</title>
<desc id="desc">Hai điểm A(1,-2,3) và B(4,0,-1) cho vectơ AB=(3,2,-4). Ba thành phần lần lượt là độ dời cộng 3 theo x, cộng 2 theo y, trừ 4 theo z. Độ dài AB là căn bậc hai của 3 bình phương cộng 2 bình phương cộng âm 4 bình phương, bằng căn 29. Hình biểu diễn độ dời trên các thanh trục riêng, không phải phối cảnh 3D để đo khoảng cách bằng mắt.</desc>
<rect width="1000" height="445" fill="#fbfdff" rx="16"/>
<style>
.t{font:650 21px system-ui,Arial,sans-serif;fill:#173d56}.sub{font:400 15px system-ui,Arial,sans-serif;fill:#3f6179}
.cap{font:650 16px system-ui,Arial,sans-serif;fill:#27495f}.num{font:650 24px system-ui,Arial,sans-serif;fill:#163b55}
.note{font:400 14px system-ui,Arial,sans-serif;fill:#527187}
</style>
<text x="28" y="38" class="t">Từ hai điểm đến vectơ độ dời trong Oxyz</text>
<text x="28" y="68" class="sub">A(1; −2; 3) · B(4; 0; −1) — lấy tọa độ điểm cuối trừ điểm đầu, theo từng trục</text>
<g>
<rect x="26" y="100" width="300" height="181" rx="12" fill="#edf7fc" stroke="#cfe4ee"/>
<rect x="350" y="100" width="300" height="181" rx="12" fill="#eff9f5" stroke="#d2e9dd"/>
<rect x="674" y="100" width="300" height="181" rx="12" fill="#fcf6ea" stroke="#eee1c7"/>
<text x="47" y="132" class="cap">Trục x</text>
<text x="371" y="132" class="cap">Trục y</text>
<text x="695" y="132" class="cap">Trục z</text>
<text x="47" y="171" class="num">Δx = 4 − 1 = +3</text>
<text x="371" y="171" class="num">Δy = 0 − (−2) = +2</text>
<text x="695" y="171" class="num">Δz = −1 − 3 = −4</text>
<g stroke-width="2" fill="none" stroke-linecap="round">
<path d="M100 226H251" stroke="#99b4c4"/><path d="M110 226H220" stroke="#1687b4" stroke-width="3.2"/>
<path d="M220 226l-10 -7m10 7l-10 7" stroke="#1687b4" stroke-width="2.5"/>
<path d="M424 226H575" stroke="#a4cdbb"/><path d="M433 226H506" stroke="#218f73" stroke-width="3.2"/>
<path d="M506 226l-10 -7m10 7l-10 7" stroke="#218f73" stroke-width="2.5"/>
<path d="M747 226H900" stroke="#cab995"/><path d="M881 226H759" stroke="#b7832e" stroke-width="3.2"/>
<path d="M759 226l10 -7m-10 7l10 7" stroke="#b7832e" stroke-width="2.5"/>
</g>
<text x="47" y="262" class="note">Dấu +: dịch theo chiều dương của Ox</text>
<text x="371" y="262" class="note">Dấu +: dịch theo chiều dương của Oy</text>
<text x="695" y="262" class="note">Dấu −: dịch ngược chiều dương của Oz</text>
</g>
<rect x="26" y="301" width="948" height="90" rx="12" fill="#f3f8fb" stroke="#dbeaf1"/>
<text x="48" y="334" class="cap">Độ dài AB = √(Δx² + Δy² + Δz²)</text>
<text x="48" y="368" class="num">= √(3² + 2² + (−4)²) = √29 ≈ 5,385</text>
<text x="28" y="426" class="note">Ba thanh tách biệt để thấy độ dời theo từng trục; khoảng cách 3D phải tính bằng căn tổng ba bình phương, không cộng các độ dời có dấu.</text>
</svg>
`````

---

### SOURCE 05 — `Temp_TOPIC2_SLIDE06_10_D5_SOURCE_EQUIVALENT_AUDIT_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `5a20a2ad21bd216f6b208998b7bce7984a16735c`

`````markdown
# AUTHORING · Chuyên đề 2 — Chọn lọc slide 6–10 và hình D5 tương đương R01 (10/11/2026)

**Phạm vi:** chỉ đọc hình, chọn lọc, kiểm toán và bổ sung một hình minh họa **tương đương toán học** với ví dụ đã PASS ở Phần 6/7. **Không chỉnh sửa** canonical R02, private 42 RD1, ngân hàng item, đáp án, rubric, hoặc nguồn reviewer. **Nhánh:** AUTHORING #793; chưa handoff RELEASE, không merge/deploy.

## Nguồn đã PASS bất biến

- \`Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, Git blob \`29669e6de80cba50a11bb8574220c6a19b4f7138\` trên PR #793, đủ 7/7 phần, 56 outcome, 114 item public ID; Academic/PED PASS chỉ đúng snapshot.
- Phần 6/7 của R02 dùng SGK KNTT Toán 12 tập một Chương II B06–B08, trang **in 45–72 / PDF 47–74 (1-based)**; SBT G12 tập một **in 38–54 / PDF 36–52**, **offset khác nhau**. Không suy trang SGK từ số PDF của SBT.
- R02 Phần 6, ví dụ D2 hiện có: \(A(1;-2;3)\), \(B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(AB=\sqrt{29}\). Nội dung này đã được reviewer xét; **hình mới chỉ minh họa đúng ví dụ cũ**, không thêm outcome, item, đáp án, rubric hay điều kiện mới.

## Bằng chứng kiểm toán 5 slide Notebook

Bản gốc: archive \`Notebook chuyên đề.zip\`, \`22 chuyên đề/Decoding_Reality.pptx\`, 15 slide mỗi slide là một ảnh raster toàn trang. Chủ dự án đã ưu tiên phong cách hình trực quan nhưng website sẽ dùng giao diện **sáng**; do đó có thể chọn ý tưởng và **dựng lại thành SVG/Canvas có chữ, trục rõ** mà không dùng nguyên ảnh nền đen chứa nhiều chữ.

| Slide | Tính năng minh họa thực | Phần đã duyệt phù hợp | Quyết định và điểm cần kiểm |
|---:|---|---|---|
| **6** | Hình hộp không gian + một hình chóp, đường cao, ý tưởng khoảng cách | **Phần 5**, hình học không gian và hình chiếu | Chỉ tái sử dụng **quan hệ vuông góc/chiếu**, không tự suy từ bố trí đèn sprinkler thành lời giải số học |
| **7** | Hai đường thẳng chéo nhau, đoạn vuông góc chung | **Phần 5**, khoảng cách giữa hai đường chéo nhau | Ý tưởng tốt; cần dựng một ví dụ với điều kiện thật hai đường **chéo nhau** và đoạn nối thực sự vuông góc **cả hai**, không gọi mọi đoạn nối là ngắn nhất |
| **8** | Hệ trục Oxyz, điểm/vectơ trong 3D | **Phần 6**, cách đặt ba trục và điểm có ba tọa độ | Ý tưởng tốt, nhưng **không đo độ dài/góc từ phối cảnh** và không copy nguyên cách đặt ký hiệu các trục nếu hình không rõ; dựng trục có nhãn đúng \(\vec i,\vec j,\vec k\) |
| **9** | Hai điểm A,B, vectơ dịch chuyển, khoảng cách số | **Phần 6**, hiệu tọa độ và độ dài | Dữ liệu trên slide đúng toán: A(2;1;0,5), B(−1;−1,5;0,8) ⇒ AB=(−3;−2,5;0,3), độ dài \(\sqrt{15,34}\approx3,9166\), làm tròn **3,92**. Nhưng phải nói **đơn vị tọa độ là km** mới ghi “km”; ảnh phối cảnh có nhãn trục có thể gây lẫn, nên cần dựng lại hình dễ đọc |
| **10** | So sánh suy luận tổng hợp với biểu diễn tọa độ | **Phần 5–7**, hai cách chọn phương pháp | Giữ ý tưởng, không gán mô hình tọa độ thay thế **mọi** lập luận hình học; giải thích giới hạn mỗi cách và điểm mạnh của kết hợp |

**Không dùng nguyên ảnh PPTX như SVG chỉnh sửa được:** PowerPoint chỉ chứa raster toàn trang. Khi đưa lên website, sử dụng hình chọn lọc/được vẽ lại có truy nguồn, không kéo nguyên slide để chữ nhỏ và tương phản thấp trên điện thoại. Không tạo quota bắt buộc mọi bài phải có ảnh.

## Hình minh họa mới đã tạo có khả năng chia sẻ

- File thật: \`Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg\`.
- Chỉ biểu diễn **cùng ví dụ đã duyệt** \(A(1;-2;3)\), \(B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(AB=\sqrt{29}\) của canonical R02 Phần 6/7. Ba thanh màu nhạt tách độ dời **+3 theo x, +2 theo y, −4 theo z** để học sinh không nhầm phép cộng đại số với **căn tổng bình phương**.
- Không vẽ một cảnh phối cảnh như thể có thể dùng thước đo độ dài AB từ ảnh. Không tô màu đen. Các trục biểu diễn thành phần được tách để dễ đọc, có \`<title>\` và \`<desc>\` cho khả năng tiếp cận.
- Đề xuất vị trí: sau dòng giải thích quy tắc \(\overrightarrow{AB}=B-A\) và trước Ví dụ D2 về độ dài trong **Phần 6 – Kiến thức**, không tạo mục học thứ tư và không thêm Core Topic.
- **Delta phân loại:** \`DELTA_B_SOURCE_EQUIVALENT_CANDIDATE\` (hình **mới** minh họa dữ kiện/đáp án cũ không thay toán), cần tác giả QA hình và lưu bằng chứng tương đương trước khi xem là Delta B đã đóng. Nếu reviewer phát hiện hình khiến điều kiện/suy luận khác R02 thì nâng \`DELTA_C\` và review phần chịu ảnh hưởng; không tự nhận đã PASS chỉ vì hình đẹp.

### Lời dẫn hỗ trợ cho vị trí hình (không thay canonical R02)

> Trong không gian, đi từ A đến B có thể được mô tả bằng ba thay đổi theo ba phương vuông góc. Trong ví dụ đã học, trục x thay đổi +3 đơn vị, trục y thay đổi +2, còn trục z thay đổi −4. Số âm cho biết hướng dịch chuyển theo trục z, **không phải khoảng cách âm**. Vì ba phương tọa độ vuông góc nhau, định lý Pitago trong không gian cho \(AB=\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}\). Hãy đọc kỹ dấu trong vectơ rồi tính độ dài bằng ba bình phương; không cần lấy thước đo độ dài từ hình chiếu xiên.

Lời dẫn này là diễn giải **cùng chứng cứ nguồn đã duyệt**, không đăng ký một ví dụ/câu hỏi canonical mới.

## QA toán và đường tiếp theo

- \(\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}\approx5{,}38516\) — đúng với bài gốc R02.
- \(\sqrt{(-3)^2+(-2{,}5)^2+(0{,}3)^2}=\sqrt{15{,}34}\approx3{,}91663\) — số 3,92 trong slide 9 **đúng**, nhưng đơn vị cần ghi rõ.
- Hình SVG là **bản thảo AUTHORING**, chưa QA responsive/thực máy, chưa được reviewer thẩm định Q07/AP3; chưa cập nhật reference trong bản R02 bất biến.
- Khi đủ chứng cứ \`DELTA_B_SOURCE_EQUIVALENT\`, chỉ giao hình theo \`FIG_ID\` một nguồn + placement dùng chung. Nếu có thay đổi học thuật thì \`DELTA_C\`, không tự làm âm thầm.

**STATE:** \`5_SLIDES_CURATED\` · \`S1_EQUIVALENT_SVG_DRAFTED\` · \`CANONICAL_R02_UNCHANGED\` · \`Q07_IMAGE_QA_PENDING\` · \`NO_CONTENT_READY\` · \`NO_MERGE_DEPLOY\`.

`````

---

### SOURCE 06 — `Temp_TOPIC2_P07_SPHERE_PLANE_INTERSECTION_LAB_D5_R00_20261110.html`

EXACT_GIT_BLOB_SHA: `f5874a1e65a0db40dc77098c4356952c0f7d3043`

`````html
<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Oxyz · Mặt phẳng cắt mặt cầu</title>
<style>
:root{font-family:system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#183e58;background:#fff}
*{box-sizing:border-box}
body{padding:12px;margin:0}
.lab{max-width:950px;margin:auto;border:1px solid #c9dfec;border-radius:15px;overflow:hidden;background:#fff}
header{background:#eaf4fa;padding:16px 19px}
h1{font-size:20px;margin:0 0 6px}
p{line-height:1.65;margin:5px 0}
main{padding:15px 20px}
.controls{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr);gap:15px;align-items:end}
label{font-weight:650;display:block;margin-bottom:5px}
input[type=range]{width:100%;min-height:30px;accent-color:#1586ac}
.buttons{display:flex;flex-wrap:wrap;gap:7px;margin:9px 0 14px}
button{font:inherit;border:1px solid #bcd7e5;border-radius:8px;background:#fff;color:#175271;padding:8px 12px;cursor:pointer}
button:hover,button:focus-visible{outline:2px solid #7db7d2;outline-offset:1px}
.panels{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12px}
.panel{border:1px solid #dbeaf2;border-radius:12px;background:#fbfdff;overflow:hidden}
.panel h2{font-size:14px;margin:0;padding:10px 12px;background:#f0f7fb}
canvas{display:block;width:100%;height:320px;touch-action:pan-y}
#cross{touch-action:auto}
.status{margin-top:12px;padding:12px 15px;border:1px solid #d5e9ef;border-radius:12px;background:#f3f9fc;line-height:1.7}
.help{color:#526e7f;font-size:13px}
@media(max-width:650px){body{padding:7px}header,main{padding:12px}.controls,.panels{grid-template-columns:1fr}canvas{height:260px}h1{font-size:18px}}
</style></head>
<body>
<section class="lab" aria-label="Phòng thí nghiệm mặt phẳng cắt mặt cầu">
<header><h1>Khi mặt phẳng di chuyển qua mặt cầu</h1>
<p>Mặt cầu <strong>x² + y² + z² = 25</strong> có tâm O và bán kính R = 5. Thay đổi độ cao <strong>z = t</strong> của mặt phẳng để quan sát khi nào nó cắt, tiếp xúc hoặc không gặp mặt cầu.</p></header>
<main>
<div class="controls">
<div><label for="height">Độ cao mặt phẳng t: <output id="hvalue" for="height">3</output></label>
<input id="height" type="range" min="-6" max="6" step="0.1" value="3" aria-label="Độ cao mặt phẳng từ âm sáu đến sáu">
</div>
<div><label for="viewAngle">Xoay góc nhìn: <output id="avalue" for="viewAngle">35°</output></label>
<input id="viewAngle" type="range" min="0" max="360" step="5" value="35" aria-label="Xoay quanh trục đứng của mặt cầu">
</div>
<div><label for="viewTilt">Độ nghiêng góc nhìn: <output id="tvalue" for="viewTilt">40°</output></label>
<input id="viewTilt" type="range" min="15" max="85" step="5" value="40" aria-label="Điều chỉnh góc nhìn từ ngang lên phía trên"></div>
</div>
<div class="buttons">
<button type="button" data-h="0">t = 0: qua tâm</button>
<button type="button" data-h="3">t = 3: cắt</button>
<button type="button" data-h="5">t = 5: tiếp xúc</button>
<button type="button" data-h="6">t = 6: không giao</button>
<button type="button" data-h="-3">t = −3: phía dưới</button>
</div>
<div class="panels">
<div class="panel"><h2>Nhìn trong không gian (hình chiếu mô phỏng)</h2><canvas id="spatial" role="img" aria-label="Hình chiếu mô phỏng mặt cầu và mặt phẳng z bằng t. Trạng thái chính xác được mô tả bằng chữ bên dưới."></canvas></div>
<div class="panel"><h2>Thiết diện qua tâm (hệ thức Pitago)</h2><canvas id="cross" role="img" aria-label="Đường tròn mặt cắt qua tâm mặt cầu, bán kính 5 và đường thẳng ngang z bằng t; bán kính giao tròn r được tính bằng hệ thức Pitago."></canvas></div>
</div>
<div id="status" class="status" role="status" aria-live="polite"></div>
<p class="help">Cách đọc: bán kính mặt cầu R luôn bằng 5. Khoảng cách tâm O đến mặt phẳng là d = |t|; nếu d &lt; R thì bán kính giao tuyến r = √(R² − d²). Ở d = R, giao tuyến chỉ còn <strong>một điểm tiếp xúc</strong>, không phải đường tròn có bán kính dương. Ở d &gt; R, không có giao điểm thực.</p>
<p class="help">Hình là mô phỏng hình chiếu, không dùng để đo trực tiếp góc hay độ dài trong Oxyz. Đây là hoạt động Kiến thức/Vận dụng công khai; không chấm điểm, không ghi Skill Mastery hoặc sử dụng làm Tự kiểm tra độc lập.</p>
</main>
</section>
<script>
(()=>{
"use strict";
const R=5, slide=document.getElementById("height"),angle=document.getElementById("viewAngle"),tilt=document.getElementById("viewTilt");
const status=document.getElementById("status");
const spat=document.getElementById("spatial"),cross=document.getElementById("cross");
const val=(v)=>String(Math.round(v*100)/100).replace("-","−").replace(".",",");
function context(canvas){
 const w=canvas.clientWidth||420,h=canvas.clientHeight||320,dpr=Math.min(window.devicePixelRatio||1,2);
 canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
 const c=canvas.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);
 c.fillStyle="#fbfdff";c.fillRect(0,0,w,h);
 return {c,w,h};
}
function line(c,a,b,color,width=1.5,dash=[]){
 c.beginPath();c.setLineDash(dash);c.lineWidth=width;c.strokeStyle=color;c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke();c.setLineDash([]);
}
function circle(c,x,y,r,fill,stroke,width=1.5){
 c.beginPath();c.arc(x,y,Math.max(0,r),0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill();}
 if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
}
function render(){
 const t=Number(slide.value),d=Math.abs(t),deg=Number(angle.value),phi=deg*Math.PI/180,theta=Number(tilt.value)*Math.PI/180;
 document.getElementById("hvalue").textContent=val(t);
 document.getElementById("avalue").textContent=String(deg)+"°";
 document.getElementById("tvalue").textContent=String(Math.round(theta*180/Math.PI))+"°";
 const r2=Math.max(0,R*R-t*t),r=d<R?Math.sqrt(r2):0;
 const spatial=context(spat),c=spatial.c,w=spatial.w,h=spatial.h;
 const scale=Math.min(w/13,h/13),cx=w/2,cy=h/2;
 const planeVertical=Math.sin(theta),sphereVertical=Math.cos(theta);
 function project(x,y,z){
  const xr=x*Math.cos(phi)-y*Math.sin(phi);
  const yr=x*Math.sin(phi)+y*Math.cos(phi);
  return [cx+xr*scale,cy+(yr*planeVertical-z*sphereVertical)*scale];
 }
 // Đường bao mặt cầu theo hình chiếu trực giao; lưới chỉ dùng để gợi độ cong.
 circle(c,cx,cy,R*scale,null,"#a6bfcd",2);
 for(const zz of [-3,0,3]){
  const rr=Math.sqrt(Math.max(0,R*R-zz*zz));
  c.beginPath();for(let i=0;i<=140;i++){const a=2*Math.PI*i/140,p=project(rr*Math.cos(a),rr*Math.sin(a),zz);if(i===0)c.moveTo(...p);else c.lineTo(...p);}
  c.strokeStyle="#d8e8ef";c.lineWidth=1.2;c.stroke();
 }
 for(const meridian of [0,Math.PI/2]){
  c.beginPath();for(let i=0;i<=140;i++){const a=2*Math.PI*i/140,p=project(R*Math.cos(a)*Math.cos(meridian),R*Math.cos(a)*Math.sin(meridian),R*Math.sin(a));if(i===0)c.moveTo(...p);else c.lineTo(...p);}
  c.strokeStyle="#e1ecf2";c.lineWidth=1;c.stroke();
 }
 // Tấm mặt phẳng hiện cả khi không giao, để nhìn thấy sự dịch chuyển qua mặt cầu.
 const corners=[[-6,-6,t],[6,-6,t],[6,6,t],[-6,6,t]];
 c.beginPath();corners.forEach((q,i)=>{const pp=project(...q);if(i===0)c.moveTo(...pp);else c.lineTo(...pp);});c.closePath();
 c.fillStyle="rgba(53,159,197,0.085)";c.fill();
 c.lineWidth=1.3;c.strokeStyle="rgba(48,128,164,0.42)";c.setLineDash([6,5]);c.stroke();c.setLineDash([]);
 if(d<=R){
  const rad=r;
  c.beginPath();
  for(let i=0;i<=180;i++){
   const a=2*Math.PI*i/180,p=project(rad*Math.cos(a),rad*Math.sin(a),t);
   if(i===0)c.moveTo(...p);else c.lineTo(...p);
  }
  c.closePath();
  if(d<R){c.fillStyle="rgba(30,139,174,0.13)";c.fill();}
  c.strokeStyle="#1687b4";c.lineWidth=2.6;c.stroke();
  if(d===R){const p=project(0,0,t);circle(c,p[0],p[1],4.8,"#e9922a","#fff");}
 }
 const origin=project(0,0,0),high=project(0,0,t);
 line(c,origin,high,"#d58c2d",2,[5,4]);
 circle(c,origin[0],origin[1],3.6,"#36576a",null);
 c.font="13px system-ui,Arial";c.fillStyle="#496b82";c.fillText("O",origin[0]+7,origin[1]-8);
 c.fillStyle="#136d91";c.fillText("z = "+val(t),Math.min(w-80,high[0]+8),high[1]-7);
 // Thiết diện qua tâm: mặt cầu thành vòng tròn; mặt phẳng thành đường z=t.
 const side=context(cross),b=side.c,W=side.w,H=side.h,rs=Math.min(W/12,H/12),ox=W/2,oy=H/2;
 circle(b,ox,oy,R*rs,null,"#a6bfcd",2);
 line(b,[ox,24],[ox,H-20],"#cbdce6",1.2);
 line(b,[22,oy],[W-20,oy],"#cbdce6",1.2);
 const yy=oy-t*rs;
 if(yy>-5&&yy<H+5){
  line(b,[16,yy],[W-16,yy],d<R?"#1687b4":d===R?"#d58c2d":"#bd7470",2.5);
 }
 if(d<=R){
  const hx=r*rs;
  if(d<R){line(b,[ox-hx,yy],[ox+hx,yy],"#218f73",4);}
  else{circle(b,ox,yy,5,"#e9922a","#fff");}
  line(b,[ox,oy],[ox+hx,yy],"#d58c2d",2);
 }
 circle(b,ox,oy,3.4,"#36576a",null);
 b.fillStyle="#4d6b7e";b.font="13px system-ui,Arial";
 b.fillText("R = 5",ox+14,oy-12);
 b.fillText("d = |t| = "+val(d),20,20);
 const sentence=d<R?"CẮT: giao tuyến là đường tròn bán kính r = √(25 − "+val(d*d)+") ≈ "+val(r)+".":d===R?"TIẾP XÚC: mặt phẳng và mặt cầu chỉ có một điểm chung; r = 0.":"KHÔNG GIAO: khoảng cách tâm đến mặt phẳng lớn hơn bán kính, không có đường tròn giao tuyến thực.";
 status.textContent="t = "+val(t)+"; d(O,(P)) = "+val(d)+"; R = 5. "+sentence+(t===3?" Với t = 3, phương trình giao tuyến x² + y² = 16, z = 3.":"");
}
let scheduled=false;function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;render();});}
slide.addEventListener("input",schedule);angle.addEventListener("input",schedule);tilt.addEventListener("input",schedule);
document.querySelectorAll("button[data-h]").forEach(b=>b.addEventListener("click",()=>{slide.value=b.dataset.h;render();}));
window.addEventListener("resize",schedule);
render();
})();
</script>
</body></html>
`````

---

### SOURCE 07 — `Temp_TOPIC2_P06_P07_D5_AUTHORING_QA_R01_20261110.md`

EXACT_GIT_BLOB_SHA: `58472e9820ec9f63d19ea5070753998262f829fd`

`````markdown
# AUTHORING QA — Chuyên đề 2 · Hình Oxyz P06 và mô hình mặt cầu–mặt phẳng P07 (R01, 10/11/2026)

**LANE:** AUTHORING · **STANDARD:** SLM-THPT-QUALITY-ONE 1.2.0 (Q01–Q18), nguồn chuẩn một bộ · **STATE:** \`D5_AUTHORING_CANDIDATES_CREATED\` · \`EXACT_SOURCE_REVIEW_PENDING\` · \`NO_CONTENT_READY\` · \`NO_MERGE_DEPLOY\`.

## 1. Căn cứ canonical giữ nguyên

- Topic 2 R02 public canonical: \`prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, Git blob **\`29669e6de80cba50a11bb8574220c6a19b4f7138\`**, 7/7 phần Academic/PED PASS theo snapshot cũ, PR #793. Không sửa source, 114 item gốc hay private RD1 (42 câu).
- **P06, phần 6/7**, ví dụ toán đã review: \(A(1;-2;3),B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(|AB|=\sqrt{29}\).
- **P07, phần 7/7**, ví dụ toán đã review: mặt cầu \(x^2+y^2+z^2=25\) và \((P):z=3\). Khoảng cách tâm O đến P bằng 3, bán kính R=5, giao tuyến \(x^2+y^2=16,z=3\), bán kính 4. Nội dung chỉ đặt **sau bài SGK B17 mặt cầu**, không đẩy vào Core B14.
- Hai nội dung trên là minh họa **lại bằng hình và mô hình** của ví dụ đã review, không phải đặt câu hỏi canonical, outcome hay rubric mới.

## 2. D5 thực tế đã thêm trên nhánh

| File | Tác dụng | Kiểm chính |
|---|---|---|
| \`Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg\` | Ba thanh độ dời x,y,z (màu nhạt, không phải 3D phối cảnh) | +3,+2,−4; độ dài căn 29; title/desc |
| \`Temp_TOPIC2_P07_SPHERE_PLANE_INTERSECTION_LAB_D5_R00_20261110.html\` | Canvas hình chiếu mặt cầu–mặt phẳng + sơ đồ thiết diện qua tâm, slider t từ −6 đến 6; thay góc xoay và độ nghiêng; 5 nút tình huống | d=|t|, r=√(25−d²) nếu d<5, r=0 khi tiếp xúc, không giao khi d>5 |
| \`Temp_TOPIC2_SLIDE06_10_D5_SOURCE_EQUIVALENT_AUDIT_R01_20261110.md\` | Phản biện hình 6–10 Notebook về hình học không gian | slide 9 r≈3,92 đúng số nhưng chưa đủ nguồn đơn vị |

**HTML D5 exact Git blob sau sửa:** \`f5874a1e65a0db40dc77098c4356952c0f7d3043\`. Trang dùng CSS light UI, tiêu đề và nhãn ngắn gọn, chữ dẫn tự nhiên; không CDN/network, không Firebase, không mastery, không gắn vào Final Submit. Mặt phẳng màu nhạt luôn hiện cả khi **không giao**, giúp người học nhận ra vị trí hình học, thay vì chỉ ẩn đường tròn. Góc nghiêng thực sự thay đổi phép chiếu; không đo độ dài/góc từ ảnh.

## 3. Bảng tính đúng toán của giao mặt cầu–mặt phẳng

| t (z của P) | d=|t| | So d với R=5 | Kết luận | Giao tuyến (nếu có) |
|---:|---:|---|---|---|
| 0 | 0 | d<R | đường tròn lớn bán kính 5 | \(x^2+y^2=25,\;z=0\) |
| 3 | 3 | d<R | đường tròn bán kính 4 | \(x^2+y^2=16,\;z=3\) |
| −3 | 3 | d<R | đường tròn bán kính 4 | \(x^2+y^2=16,\;z=-3\) |
| 5 | 5 | d=R | tiếp xúc duy nhất tại (0;0;5) | không gọi là đường tròn bán kính dương |
| −5 | 5 | d=R | tiếp xúc duy nhất tại (0;0;−5) | như trên |
| 6 | 6 | d>R | không giao thực | không có |
| −6 | 6 | d>R | không giao thực | không có |

**Đối chiếu số:** \(5^2-3^2=16\), \(r=4\), \(\sqrt{29}\approx5{,}38516\). Nhầm lẫn có nguy cơ cao là nói “hình cắt lúc nào cũng là đường tròn”, hoặc coi \(z=t\) là mặt phẳng có bán kính mặc định cố định khi t thay đổi.

## 4. QA đã chạy, giới hạn chứng cứ

Tác giả **đọc lại exact file HTML từ GitHub HEAD** và chạy JavaScript trong V8 trên DOM+Canvas **giả lập**, ở 3 cấu hình kích thước 390, 820, 1440. Các tình huống thử tại mỗi cấu hình: 7 trạng thái t=0,3,5,6,−3,−5,−6; 3 góc nghiêng 15°/45°/85°; 1 góc xoay 180°; 5 nút preset ⇒ **16/16 mỗi cấu hình; tổng 48/48 PASS** với 0 JS exception. Hệ thức bán kính/hình cắt và thông báo chữ kiểm qua source math.

**KHÔNG gọi đây là Chromium/Playwright QA thật.** Canvas drawing đã bị mock trong test; chưa chứng minh nét chiếu, vị trí nhãn và responsive trên thiết bị. Hình SVG/HTML nguồn vẫn cần kiểm Q07 chính hình render, keyboard/touch, aria/caption, AP3 trong nhánh RELEASE. Chỉ khi hình/JS thật giữ cùng nghĩa toán của R02 và được xác nhận thì mới có thể xem xét \`DELTA_B_SOURCE_EQUIVALENT\`; nếu thành nội dung giảng giải/hoạt động sư phạm mới đáng kể hoặc phát hiện điều kiện thay đổi, phải phân \`DELTA_C\` và phản biện độc lập đúng phần.

## 5. Cổng bảo toàn

1. Không sửa R02 được nghiệm thu, không thay answer/rubric/condition/item, chỉ bổ sung asset D5 nằm ngoài canonical.
2. Khi có một nguồn hình canonical, \`FIG_ID\` có thể reuse nhiều placement nhưng không tạo bản sao hình không quản lý.
3. \`TOPIC_READINESS\` vẫn là đánh giá độc lập: không hiển thị đề/key/rubric trước Final Submit, không lấy những câu formative lộ đáp án làm kiểm tra kín, không ghi Mastery từ Canvas hoặc bài tự đối chiếu.
4. **BLOCKER #790** release intake Topic V2 còn OPEN. Kết luận nguồn đã review R02 không tự thành handoff hợp lệ hoặc website đã phát hành.

**NEXT:** đối chiếu hình trên trình duyệt thật ở các trạng thái d<R, d=R, d>R; nếu đúng source-equivalent thì đóng chứng cứ Q07 cho hình, còn nếu thay giảng giải đáng kể thì thêm vào review target đúng phạm vi. Không động tới 7/7 phần đã PASS chỉ vì thêm hình.

`````

---

**Handoff chỉ là review transport:** không nhân bản bank câu/đáp án; nếu nội dung mới thay đổi sau khi snapshot lock thì phải tạo receipt mới và review đúng delta. Ba mục học sinh vẫn Kiến thức/Luyện tập/Tự kiểm tra; mọi mô hình ở đây thuộc Kiến thức/Vận dụng và không tự ghi Skill Mastery.
