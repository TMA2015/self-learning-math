"use strict";
/* G10 B09 R04 targeted new canonical public Practice item only.
 * Original R01 formative source (24 items) stays immutable.
 * Academic content source: prototypes/thpt/ux795/G10_CHIV_B09_DECOMP_CANONICAL_DELTA_R04_20261117.md
 * No official Readiness, no Mastery, no Firebase writes, no Topic clones. */
(function(root){
 const item=Object.freeze({
   "item_id": "THPT-G10-B09-P07",
   "lesson": "9",
   "role": "PRACTICE",
   "skill": "G10-B09-DECOMP_S1",
   "stem": "Cho tam giác $ABC$. $M$ là trung điểm của $BC$, $N$ thuộc đoạn $AB$ sao cho $AN=\\tfrac13 AB$. Đặt $\\vec a=\\overrightarrow{AB}$, $\\vec b=\\overrightarrow{AC}$. Hãy biểu thị $\\overrightarrow{MN}$ theo $\\vec a,\\vec b$ và giải thích vì sao cặp hệ số là duy nhất.",
   "solution": "Đáp án: $\\overrightarrow{MN}=-\\tfrac16\\vec a-\\tfrac12\\vec b$.\nLời giải: Vì $M$ là trung điểm $BC$, $\\overrightarrow{AM}=\\tfrac12(\\overrightarrow{AB}+\\overrightarrow{AC})=\\tfrac12\\vec a+\\tfrac12\\vec b$. Vì $N$ thuộc đoạn $AB$ và $AN=\\tfrac13 AB$, $\\overrightarrow{AN}=\\tfrac13\\vec a$. Theo quy tắc ba điểm, $\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}=-\\tfrac12(\\vec a+\\vec b)+\\tfrac13\\vec a=-\\tfrac16\\vec a-\\tfrac12\\vec b$. Hai vectơ $\\vec a,\\vec b$ không cùng phương vì $ABC$ là tam giác không suy biến; do đó cặp hệ số duy nhất.",
   "hint": "Viết $\\overrightarrow{AM}=\\tfrac12(\\vec a+\\vec b)$ rồi dùng $\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}$; kiểm tra dấu vectơ $\\overrightarrow{MA}$.",
   "exposure": "FORMATIVE_ONLY",
   "difficulty": "CORE_APPLY",
   "content_version": 1
 });
 const records=Object.freeze([item]);
 const validate=()=>({valid:records.length===1&&item.item_id==="THPT-G10-B09-P07"&&
  item.lesson==="9"&&item.role==="PRACTICE"&&
  item.skill==="G10-B09-DECOMP_S1"&&item.exposure==="FORMATIVE_ONLY"&&
  item.content_version===1&&!Object.prototype.hasOwnProperty.call(item,"options")});
 const forLesson=(lesson,role)=>String(Number(lesson))==="9"&&role==="practice"?records:[];
 root.THPT_G10_B09_DECOMP_R04_EXTENSION=Object.freeze({records,validate,forLesson});
})(window);
