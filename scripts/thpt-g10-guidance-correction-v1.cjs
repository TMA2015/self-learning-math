#!/usr/bin/env node
"use strict";
/* Source-locked G10 guidance correction: preserve 27-lesson published Model B
 * baseline, apply exactly the 10 declared pedagogical guidance/figure deltas.
 * No questions, answers, canonical mathematics or assessment data touched.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const REL="prototypes/thpt/ux795/UX795_G10_B10_B19_B27_GUIDANCE_DELTA_Q18_V301_20261112.md";
const SPECS=new Map([
 [10,{count:1,asset:"THPT_G10_CHIV_RIVER_TRANSFER_D5_R01_CORRECTED.svg",guide:1}],
 [19,{count:7,asset:"G10_B19_LINE_NORMAL_R02.svg",guide:1}],
 [20,{count:5,asset:"G10_B20_POINT_LINE_DISTANCE_R02.svg",guide:4}],
 [21,{count:5,asset:"G10_B21_CIRCLE_TANGENT_R02.svg",guide:3}],
 [22,{count:8,asset:"G10_B22_PARABOLA_FOCUS_R02.svg",guide:4}],
 [23,{count:4,asset:"G10_B23_ADD_MULTIPLY_CHOICES_R02.svg",guide:1}],
 [24,{count:4,asset:"G10_B24_ORDER_VS_COMBINATION_R02.svg",guide:2}],
 [25,{count:4}], [26,{count:5}], [27,{count:5}]
]);
function transform(source,lesson){
 const spec=SPECS.get(lesson);if(!spec)return source;
 const start=source.indexOf('=== "Kiến thức SGK"\n'),end=source.indexOf('\n=== "Ví dụ"',start);
 assert(start>=0&&end>start,"B"+lesson+" original Knowledge tab boundary");
 let section=source.slice(start,end);
 const rules=[
  ["**Hướng dẫn đọc hình/sơ đồ:**","**Tự dựng sơ đồ minh họa:**"],
  ["**Hướng dẫn đọc hình/bảng:**","**Tự dựng hình hoặc bảng:**"],
  ["**Hướng dẫn đọc hình:**","**Tự phác hình minh họa:**"]
 ];
 let guides=0;
 for(const [before,after] of rules){
  guides+=section.split(before).length-1;
  section=section.split(before).join(after);
 }
 assert.equal(guides,spec.count,"B"+lesson+" exact original guidance labels");
 if(spec.asset){
  const figures=[...section.matchAll(/^    <figure\b[^\n]*<\/figure>[ \t]*\n?/gm)];
  const figure=figures.find(m=>m[0].includes(spec.asset));
  assert(figure,"B"+lesson+" expected original reviewed SVG");
  section=section.replace(figure[0],"");
  const labels=[...section.matchAll(/^    \*\*(?:Tự dựng sơ đồ minh họa|Tự dựng hình hoặc bảng|Tự phác hình minh họa):\*\*/gm)];
  assert.equal(labels.length,spec.count,"B"+lesson+" correction label parity");
  const index=labels[spec.guide-1].index;
  section=section.slice(0,index)+"    "+figure[0].trim()+"\n\n"+section.slice(index);
 }
 return source.slice(0,start)+section+source.slice(end);
}
function readCorrections(root=path.resolve(__dirname,"..")){
 const file=path.join(root,REL);
 if(!fs.existsSync(file))return new Map();
 const txt=fs.readFileSync(file,"utf8"),tick=String.fromCharCode(96);
 assert(txt.includes("STANDARD_VERSION: "+tick+"v3.0.1"+tick)&&txt.includes("DELTA_C_ACADEMIC_MATERIAL"),
   "one Q18 v3.0.1 correction receipt required");
 const rows=[...txt.matchAll(/^\| B(\d{2}) \| \`([a-f0-9]{40})\` \| \`([a-f0-9]{40})\` \| (\d+) \| ([^\|\n]+) \|$/gm)];
 assert.equal(rows.length,SPECS.size,"exact B10 and B19-B27 correction set");
 const changes=new Map();
 for(const row of rows){
  const n=Number(row[1]),spec=SPECS.get(n);
  assert(spec&&!changes.has(n),"missing or duplicate correction B"+n);
  assert.notEqual(row[2],row[3],"corrected source cannot equal original");
  assert.equal(Number(row[4]),spec.count,"guide count changed B"+n);
  assert.equal(row[5].trim(),spec.asset||"none","figure scope drift B"+n);
  changes.set(n,{old:row[2],current:row[3],count:spec.count,asset:spec.asset||null});
 }
 for(const n of SPECS.keys())assert(changes.has(n),"correction receipt lacks B"+n);
 return changes;
}
module.exports={SPECS,REL,transform,readCorrections};
