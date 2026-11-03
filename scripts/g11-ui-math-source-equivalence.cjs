"use strict";
// Reconstruct reviewed D2 text with exact display-only math markup, no academic edits.
const powers={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9"};
const subs={"₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9"};
function tex(s){
 s=s.replace(/([A-Za-z])\u0304/g,(_,x)=>"\\overline{"+x+"}")
 .replace(/([ⁿ³⁴])√\(([^()]*)\)/g,(_,n,v)=>"\\sqrt["+(n==="ⁿ"?"n":n==="³"?"3":"4")+"]{"+v+"}")
 .replace(/([ⁿ³⁴])√([A-Za-z0-9]+)/g,(_,n,v)=>"\\sqrt["+(n==="ⁿ"?"n":n==="³"?"3":"4")+"]{"+v+"}")
 .replace(/∛\(([^()]*)\)/g,(_,v)=>"\\sqrt[3]{"+v+"}")
 .replace(/√\(([^()]*)\)/g,(_,v)=>"\\sqrt{"+v+"}")
 .replace(/√([A-Za-z0-9]+)/g,(_,v)=>"\\sqrt{"+v+"}")
 .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g,x=>"^{"+[...x].map(v=>powers[v]).join("")+"}")
 .replace(/[₀₁₂₃₄₅₆₇₈₉]+/g,x=>"_{"+[...x].map(v=>subs[v]).join("")+"}");
 let out="";
 for(let i=0;i<s.length;i++){
  if(s[i]==="^"&&s[i+1]==="("){
   let depth=1,j=i+2;
   for(;j<s.length&&depth;j++){if(s[j]==="(")depth++;else if(s[j]===")")depth--}
   if(!depth){out+="^{"+s.slice(i+2,j-1)+"}";i=j-1;continue}
  }
  out+=s[i];
 }
 return out.replace(/(?<!\\)(arcsin|arccos|arctan|sin|cos|tan|cot|log|ln|lg)(?=\b|_|\d)/g,x=>"\\"+x)
  .replace(/−/g,"-").replace(/·/g,"\\cdot ").replace(/×/g,"\\times ")
  .replace(/÷/g,"\\div ").replace(/∈/g,"\\in ").replace(/∪/g,"\\cup ")
  .replace(/∩/g,"\\cap ").replace(/≤/g,"\\le ").replace(/≥/g,"\\ge ")
  .replace(/≠/g,"\\ne ").replace(/π/g,"\\pi ").replace(/Ω/g,"\\Omega ")
  .replace(/Σ/g,"\\sum ").replace(/ℝ/g,"\\mathbb{R}").replace(/ℤ/g,"\\mathbb{Z}");
}
function render(line){
 const c=line.replace(/\x60([^\x60\n]+)\x60/g,(_,val)=>"\\("+tex(val)+"\\)");
 return c.split(/(\\\([\s\S]*?\\\))/g).map(part=>part.startsWith("\\(")?part:
  part.split(/(<[^>]*>)/g).map(v=>v.startsWith("<")&&v.endsWith(">")?v:
   v.replace(/\^(\{([^{}]+)\}|\(([^()]*)\)|([A-Za-z0-9]))/g,(_,all,b,d,e)=>"<sup>"+(b??d??e)+"</sup>")
  ).join("")
 ).join("");
}
module.exports={render};
