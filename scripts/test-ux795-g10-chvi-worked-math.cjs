#!/usr/bin/env node
"use strict";
/*
 * Focused mathematical self-check of G10 ChVI B15–B18 enriched examples.
 * Source-bound examples, not full S1/PED/Q18 certification.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const s=Object.fromEntries([15,16,17,18].map(n=>[n,fs.readFileSync(
 path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-"+n+".md"),"utf8")]));
let cases=0;
const eq=(a,b)=>Math.abs(a-b)<1e-9;
function check(n,name,markers,proof){
 for(const m of markers)assert(s[n].includes(m),"B"+n+" source missing "+m);
 assert(proof(),"B"+n+" mathematical mismatch: "+name);
 cases++;console.log("PASS B"+n+": "+name);
}
check(15,"function uniqueness",["(1;7),(3;2),(3;2)","(1;7),(3;2),(3;4)"],()=>{
 const functional=pts=>new Set(pts.map(p=>p[0])).size===new Set(pts.map(p=>p.join(","))).size;
 return functional([[1,7],[3,2],[3,2]])&&!functional([[1,7],[3,2],[3,4]]);
});
check(15,"radical/rational domain and output",["f(x)=\\sqrt{x-1}","g(x)=\\frac{x+1}{x-2}"],()=>{
 const rational=x=>(x+1)/(x-2);
 return [3,4,6].every(x=>eq(rational(x),1+3/(x-2)))&&
 [2,4,-3].every(y=>eq(rational((2*y+1)/(y-1)),y))&&
 [1,2,5].every(x=>Math.sqrt(x-1)>=0);
});
check(15,"piecewise tariff",["16+6(x-2)","C(1)=8","C(3)=22"],()=>{
 const C=x=>x>=0&&x<=2?8*x:x>2?16+6*(x-2):NaN;
 return C(0)===0&&C(1)===8&&C(2)===16&&C(3)===22;
});
check(16,"vertex/roots",["f(x)=(x-1)^2-4","I(1;-4)","(3;0)"],()=>{
 const f=x=>(x-1)**2-4;
 return f(1)===-4&&f(-1)===0&&f(3)===0&&[-2,0,1,3,7].every(x=>f(x)>=-4);
});
check(16,"S1 quadratic value table and symmetric point pairs",["Bảng giá trị giúp em kiểm tra","f(x)=x^2-4x+3","<td>3</td><td>0</td><td>−1</td><td>0</td><td>3</td>"],()=>{
 const f=x=>x*x-4*x+3;
 const ys=[0,1,2,3,4].map(f);
 return JSON.stringify(ys)===JSON.stringify([3,0,-1,0,3])&&f(0)===f(4)&&f(1)===f(3)&&f(2)===-1;
});
check(16,"recover downward parabola from vertex and off-axis point",[
 "Khi biết đỉnh và một điểm, làm sao tìm lại công thức?",
 "I(1;2)", "A(0;0)", "a=-2", "a=0",
 "không có hàm bậc hai"
],()=>{
 const h=1,k=2,px=0,py=0;
 const a=(py-k)/((px-h)**2);
 const f=x=>a*(x-h)**2+k;
 const unique=a===-2&&a!==0&&f(0)===0&&f(1)===2&&f(2)===0&&f(3)===-6;
 const impossibleSameHeight=(k-k)/((0-h)**2)===0;
 return unique&&impossibleSameHeight;
});
check(16,"projectile maximum within physical domain",["h(t)=19{,}6t-4{,}9t^2","0\\le t\\le4"],()=>{
 const h=t=>19.6*t-4.9*t*t;
 return eq(h(0),0)&&eq(h(4),0)&&eq(h(2),19.6)&&[0,1,2,3,4].every(t=>h(t)<=19.6);
});
check(16,"revenue units and maximum",["n(x)=600-10x","R(x)=x\\,n(x)","9000"],()=>{
 const q=x=>600-10*x,R=x=>x*q(x);
 return q(0)===600&&q(60)===0&&q(30)===300&&R(30)===9000&&[0,10,20,30,40,50,60].every(x=>R(x)<=9000);
});
check(17,"two-root signs",["f(x)=-x^2+4x-3","\\boxed{[1;3]}"],()=>{
 const f=x=>-x*x+4*x-3;
 return f(1)===0&&f(3)===0&&f(2)>0&&f(0)<0&&f(4)<0;
});
check(17,"20m three-side fence",["x(20-2x)","x\\in[4;6]"],()=>{
 const A=x=>x*(20-2*x);
 return A(4)===48&&A(6)===48&&A(5)>48&&A(3)<48&&A(7)<48;
});
check(17,"18m three-side fence",["x(18-2x)","\\boxed{3\\le x\\le6}"],()=>{
 const A=x=>x*(18-2*x);
 return A(3)===36&&A(6)===36&&A(4)>36&&A(2)<36&&A(7)<36;
});
check(17,"parameter condition for positive quadratics",["x^2+2mx+4","8(m-1)"],()=>{
 const f=(x,m)=>x*x+2*m*x+4,g=(x,m)=>x*x-2*(m+1)*x+m*m+3;
 return f(-2,2)===0&&f(2,-2)===0&&f(0,0)>0&&g(1,0)>0&&g(2,1)===0&&g(3,2)<0;
});
check(17,"projectile height threshold and physical flight-time intersection",[
 "Khi bất phương trình đi cùng thời gian thực tế",
 "h(t)=-5t^2+20t+5",
 "0\\le t\\le2+\\sqrt5",
 "(t-1)(t-3)\\le0",
 "h(1)=h(3)=20"
],()=>{
 const h=t=>-5*t*t+20*t+5,impact=2+Math.sqrt(5);
 const roots=[1,3],before=0,after=4;
 return eq(h(0),5)&&eq(h(1),20)&&eq(h(2),25)&&eq(h(3),20)&&eq(h(4),5)&&
        eq(h(impact),0)&&impact>3&&
        roots.every(t=>t>=0&&t<=impact&&h(t)>=20)&&
        h(before)<20&&h(after)<20;
});
check(18,"radical candidate sign filtering",["\\sqrt{2x+3}=x-1","2\\pm\\sqrt6"],()=>{
 const good=2+Math.sqrt(6),bad=2-Math.sqrt(6);
 return eq(Math.sqrt(2*good+3),good-1)&&bad<1&&bad-1<0;
});
check(18,"two radicals / inadmissible root",["\\sqrt{x^2+7x+11}=\\sqrt{x+3}","x=-4","x=-2"],()=>{
 return eq(Math.sqrt(4-14+11),Math.sqrt(1))&&(-4+3)<0;
});
check(18,"ladder 5-12-13",["\\sqrt{h^2+25}=13","h=12"],()=>5*5+12*12===13*13);
check(18,"hypotenuse with radical",["\\sqrt{x^2+16}=2x-1","(3x+5)(x-3)"],()=>{
 const f=x=>Math.sqrt(x*x+16)-(2*x-1);
 return eq(f(3),0)&&f(-5/3)>0;
});
check(18,"two-person travel-time intersection; extraneous algebraic candidate",[
 "Vận dụng: hai hành trình gặp nhau cùng thời điểm",
 "\\frac{\\sqrt{x^2+9}}5=\\frac{8-x}4",
 "(x-4)(9x-364)=0",
 "\\dfrac{364}{9}>8",
 "điểm gặp cách B đúng"
],()=>{
 const polynomial=x=>9*x*x-400*x+1456;
 const tA=x=>Math.sqrt(x*x+9)/5,tC=x=>(8-x)/4;
 const valid=4,invalid=364/9;
 return eq(polynomial(valid),0)&&eq(polynomial(invalid),0)&&
        valid>=0&&valid<=8&&eq(tA(valid),1)&&eq(tC(valid),1)&&
        invalid>8&&tC(invalid)<0&&tA(invalid)>0;
});
check(18,"D6 ladder geometry labels must mark 13m hypotenuse rather than 5m",[
 "<strong>cạnh huyền 13 m</strong>",
 "<strong>cạnh góc vuông 5 m</strong>"
],()=>!s[18].includes("đánh dấu cạnh huyền 5")&&5*5+12*12===13*13);
console.log("PASS: "+cases+" source-bound mathematical checks (B15–B18).");
console.log("No S1 printed-page/PED/independent-review/Q18 verdict or release certification.");
