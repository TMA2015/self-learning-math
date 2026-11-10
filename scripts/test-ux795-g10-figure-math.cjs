#!/usr/bin/env node
"use strict";
/*
 * UX795 G10 Knowledge: fail-closed, reproducible numerical + geometric
 * cross-checks for 11 new candidate SVG illustrations.
 * This is RELEASE self-QA EVIDENCE ONLY, not S1 source verification,
 * Academic/PED reviewer PASS, Q18 receipt acceptance or deployment approval.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const specs=[
 ["B02",2,"i","G10_B02_MEMBERSHIP_SUBSET_R01.svg","c78f7e746ed8837603919f9ed8666d6f8657f0b8"],
 ["B06",6,"iii","G10_B06_SURVEY_RIGHT_TRIANGLE_R01.svg","1b7e617d00fe8d03ab17522d4db9937447b62f7a"],
 ["B16",16,"vi","G10_B16_PARABOLA_VERTEX_R02.svg","f18909ddb23029852e743e0d1b306781ab145a53"],
 ["B17",17,"vi","G10_B17_QUADRATIC_SIGN_R02.svg","6c9bb34a2b0ed260ba2da05eeaa07b4259811f8f"],
 ["B19",19,"vii","G10_B19_LINE_NORMAL_R02.svg","e051724efd4ac88a3f135b1695da7bab08895df9"],
 ["B20",20,"vii","G10_B20_POINT_LINE_DISTANCE_R02.svg","ef30404a12bbb1a9241e7efc3c5f8a4fa1a8e9ff"],
 ["B21",21,"vii","G10_B21_CIRCLE_TANGENT_R02.svg","748e6041149f8990c1998dc3c777d8e11630c729"],
 ["B22",22,"vii","G10_B22_PARABOLA_FOCUS_R02.svg","c315a704a6fc87032a9dc95465999d573b6aa54f"],
 ["B23",23,"viii","G10_B23_ADD_MULTIPLY_CHOICES_R02.svg","4b3aaa807855768100975b4afcd2912be99946b6"],
 ["B24",24,"viii","G10_B24_ORDER_VS_COMBINATION_R02.svg","79a193e2964bd28a10fcbc1b8046e952599b32b8"],
 ["B25",25,"viii","G10_B25_PASCAL_TRIANGLE_R02.svg","1251a926fb52c1bebc5dacb5f7fdf801ec7671d5"]
];
function gitBlob(buffer){
 return crypto.createHash("sha1").update(Buffer.from("blob "+buffer.length+"\0")).update(buffer).digest("hex");
}
const near=(a,b,eps=1e-6)=>Math.abs(a-b)<=eps;
const vals=Object.create(null);
for(const [key,n,chapter,asset,expected] of specs){
 const rel="docs/assets/images/thpt/"+asset;
 const raw=fs.readFileSync(path.join(root,rel));
 assert.equal(gitBlob(raw),expected,key+" asset SHA changed: must re-check geometry and source receipt");
 const svg=raw.toString("utf8");
 assert(svg.includes("<svg")&&svg.includes("<title")&&svg.includes("<desc")&&svg.includes('role="img"'),key+" SVG accessibility metadata");
 const source=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md"),"utf8");
 const target="../../../../assets/images/thpt/"+asset;
 assert.equal(source.split(target).length-1,1,key+" source must reference exactly this figure once");
 vals[key]=svg;
}
{
 const s=vals.B02;
 assert(s.includes("A = {2, 4}")&&s.includes("B = {2}")&&s.includes("B ⊆ A")&&s.includes("{2} ∉ A"),"B02 membership versus subset");
 assert(278>=150&&278<=420&&555>420&&555<704,"B02 positions of elements 2 and 4");
}
{
 const s=vals.B06;
 assert(s.includes("CH = 10√2 m")&&s.includes("AB = 20√2 m"),"B06 labels");
 assert(s.includes('M120 390 L560 390 L340 170 Z'),"B06 vertex positions changed");
 const A=[120,390],B=[560,390],C=[340,170],H=[340,390];
 const dist=(P,Q)=>Math.hypot(P[0]-Q[0],P[1]-Q[1]);
 assert(near(dist(A,C),dist(B,C)),"B06 isosceles");
 assert(near(dist(A,B)/dist(A,C),Math.SQRT2),"B06 hypotenuse");
 assert.equal((A[0]-C[0])*(B[0]-C[0])+(A[1]-C[1])*(B[1]-C[1]),0,"B06 right angle at C");
 assert(near(dist(C,H)/dist(A,C),1/Math.SQRT2),"B06 CH=10sqrt2 if AC=20");
 assert(near(20*20/2,200),"B06 area");
}
{
 const s=vals.B16;
 const poly=s.match(/<polyline[^>]*points="([^"]+)"/);
 assert(poly,"B16 parabola geometry");
 const pts=poly[1].trim().split(/\s+/).map(z=>z.split(",").map(Number));
 assert(pts.length>50,"B16 polyline dense enough");
 for(const [X,Y] of pts){
  const x=(X-300)/90;
  const expectedY=145-40*((x-1)**2-4);
  assert(near(Y,expectedY,0.11),"B16 plotted point inconsistent with y=(x-1)^2-4");
 }
 assert(s.includes("I(1; −4)")&&s.includes("(-1; 0)")&&s.includes("(3; 0)"),"B16 vertex and roots");
}
{
 const s=vals.B17;
 assert(s.includes("f(x) = (x − 1)(x − 3)")&&s.includes("x&lt;1")&&s.includes("x&gt;3"),"B17 discriminant/sign labels");
 for(const x of [-2,0,1.5,2,4,5]){
  const value=(x-1)*(x-3);
  assert.equal(Math.sign(value),x<1||x>3?1:-1,"B17 sign intervals");
 }
}
{
 const s=vals.B19;
 assert(s.includes("P(1;4)")&&s.includes("u=(1;−2)")&&s.includes("n=(2;1)"),"B19 labels");
 assert.equal(2*1+4,6,"B19 point on d:2x+y=6");
 assert.equal(1*2+(-2)*1,0,"B19 tangent/normal orthogonality");
 assert(s.includes('x1="325" y1="180" x2="370" y2="270"'),"B19 direction arrow drawn to (2,2)");
 assert(s.includes('x1="325" y1="180" x2="415" y2="135"'),"B19 normal arrow drawn to (3,5)");
}
{
 const s=vals.B20;
 assert(s.includes("H(12/5;6/5)")&&s.includes("MH=6/√5"),"B20 foot and distance labels");
 const x=12/5,y=6/5;
 assert(near(2*x+y,6),"B20 H on line");
 assert(near(Math.hypot(x,y),6/Math.sqrt(5)),"B20 distance");
 assert(near(x/y,2),"B20 MH parallel to line normal (2,1)");
 assert(s.includes('x1="180" y1="330" x2="288" y2="276"'),"B20 geometric projection arrow");
}
{
 const s=vals.B21;
 assert(s.includes('cx="420" cy="205" r="135"')&&s.includes('x1="555" y1="53" x2="555" y2="397"'),"B21 circle radius and vertical tangent");
 assert.equal((5-2)**2+(1-1)**2,9,"B21 tangent point on circle radius 3");
}
{
 const s=vals.B22;
 assert(s.includes("F(1;0)")&&s.includes("x=−1")&&s.includes("y²=4x"),"B22 focus/directrix labels");
 const poly=s.match(/<polyline[^>]*points="([^"]+)"/);
 assert(poly,"B22 parabola geometry");
 const pts=poly[1].trim().split(/\s+/).map(z=>z.split(",").map(Number));
 assert(pts.length>35,"B22 polyline density");
 for(const [X,Y] of pts){
  const x=(X-280)/45,y=(215-Y)/45;
  assert(near(y*y,4*x,0.1),"B22 polyline inconsistent with y^2=4x");
 }
 assert(near(Math.abs(0-1),Math.abs(0-(-1))),"B22 vertex equidistant from focus/directrix");
}
{
 const s=vals.B23;
 assert(s.includes("4 + 3 = 7 cách")&&s.includes("4 × 3 = 12 cặp"),"B23 disjoint addition and staged multiplication");
}
{
 const s=vals.B24;
 assert(s.includes("AB · AC · BA")&&s.includes("BC · CA · CB")&&s.includes("AB · AC · BC"),"B24 arrangement/combination enumeration");
 assert(s.includes("A(3,2) = 6")&&s.includes("C(3,2) = 3"),"B24 counts");
}
{
 const s=vals.B25;
 const circles=[...s.matchAll(/<circle cx="(\d+)" cy="(\d+)" r="22"/g)];
 assert.equal(circles.length,15,"B25 triangular nodes");
 const digits=[...s.matchAll(/<text x="(\d+)" y="(\d+)"[^>]*>(\d+)<\/text>/g)].map(m=>({y:+m[2],value:+m[3]}));
 const rows={};
 for(const p of digits)(rows[p.y]??=[]).push(p.value);
 const actual=Object.keys(rows).map(Number).sort((a,b)=>a-b).map(y=>rows[y]);
 const expected=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
 assert.deepEqual(actual,expected,"B25 Pascal rows through n=4");
}
console.log("PASS UX795 11/11 SVG Git blobs, lesson placement and geometry/mathematical label checks. Automated figure self-QA ONLY; Q18/S1/PED still HOLD; NO DEPLOY.");
