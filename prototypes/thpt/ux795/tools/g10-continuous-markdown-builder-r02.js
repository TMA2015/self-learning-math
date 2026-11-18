function buildG10KnowledgeR02(source,cfg){
 const title=(source.match(/^# (.+)$/m)||[])[1];if(!title)throw Error("Missing title "+cfg.b);
 let text=source.replace(/^# [^\n]*\n/,"").replace(/<div class="thpt-r4-screen"[\s\S]*?<\/div>/,"").replace(/<!--[\s\S]*?-->/g,"");
 const figures=[...text.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map(x=>x[0].replace(/\sdata-thpt-(?:fig-id|reviewed-d5)="[^"]*"/g,"").replace(/Hình\s+FIG-G10-[A-Z0-9-]+/g,"hình minh họa").replace(/\s*·\s*Bản R0[12] đã được duyệt/g,""));text=text.replace(/<figure\b[\s\S]*?<\/figure>/g,"");
 text=text.replace(/(?:Trạng thái tiền đề:|D5 kế thừa:)[^\n]*?(?=\n|$)/g,"")
 .replace(/^.*\*\*(?:Đọc hình như thế nào|Cách đọc hình và hình dung)[^:]*:?\*\*.*$/gm,"")
 .replace(/^.*\b(?:PED[1-6]|FIG-G10|PREREQUISITE_CONFIRMED)[^\n]*$/gm,"")
 .replace(/^#{4}\s+D6\s+—[^\n]*\n/gm,"")
 .replace(/^##\s+B\d+\s+—[^\n]*\n/gm,"")
 .replace(/\*\*Vì sao cần học(?:\?|\:)\*\*\s*/g,"")
 .replace(/\*\*Kiến thức cần nhớ trước:\*\*\s*/g,"")
 .replace(/\*\*Kiến thức tiền đề và điều kiện:\*\*\s*/g,"")
 .replace(/\*\*Em đã biết gì\?\*\*\s*/g,"")
 .replace(/\*\*Hiểu bản chất trước công thức(?:\:)?\*\*\s*/g,"")
 .replace(/\*\*Hình thành bản chất trước công thức(?:\:)?\*\*\s*/g,"")
 .replace(/\*\*Chọn phương pháp và giới hạn(?:\:)?\*\*\s*/g,"")
 .replace(/\*\*Vì sao chọn phương pháp này và giới hạn áp dụng(?:\:)?\*\*\s*/g,"")
 .replace(/\*\*Vì sao làm theo cách này\?\*\*\s*/g,"")
 .replace(/\*\*Tự thử trước Core(?:\:)?\*\*/g,"**Em vận dụng.**")
 .replace(/^.*(?:Hoạt động này không chấm điểm|Hoạt động công khai này không tính điểm|Tự thử này là công khai)[^\n]*$/gm,"")
 .replace(/^.*Câu Tự thử này là công khai[^\n]*$/gm,"")
 .replace(/`FIG-[^`]+`/g,"hình minh họa phù hợp")
 .replace(/`PREREQUISITE_CONFIRMED[^`]*`/g,"")
 .replace(/đọc lại mục PED3\/PED5 ở trên/g,"đọc lại phần giải thích gần nhất")
 .replace(/SGK Core\/Practice R01/g,"phần luyện tập của bài")
 .replace(/(?:D1|D2|D3|D4|D5|D6|PED1|PED2|PED3|PED4|PED5|PED6)\s+R0[12]/g,"");
 const matches=[...text.matchAll(/^## (.+)$/gm)];
 const parts=matches.map((m,i)=>({head:m[1],body:text.slice(m.index+m[0].length,matches[i+1]?.index??text.length).trim()}));
 const prelude=text.slice(0,matches[0]?.index??text.length).trim();
 const intro=[],theory=[],worked=[],errors=[];
 for(const part of parts){
  const h=part.head;
  if(/^(Tự khám phá|Trước khi học)/i.test(h))intro.push(part.body);
  else if(/Hình minh họa/i.test(h)&&!/khắc phục/i.test(h))continue;
  else if(/(?:Tự khắc phục|Khi gặp khó khăn|Lỗi sai|Lỗi thường|Hình minh họa và tự khắc phục)/i.test(h))errors.push(part.body);
  else if(/Tiếp tục|Liên kết kiến thức/i.test(h))continue;
  else if(/^\d+\.\s*(?:Ví dụ|Luyện tập|Tự luyện|Vận dụng)/i.test(h)&&!cfg.forceKnowledgeHeaders?.some(s=>h.includes(s)))worked.push(part.body);
  else theory.push(part);
 }
 if(prelude&&/### /.test(prelude))intro.unshift(prelude);
 let knowledge=[...intro,...theory.map(p=>`### ${p.head.replace(/^\d+\.\s*/,"")}\n\n${p.body}`)].join("\n\n");
 knowledge=knowledge.replace(/^(?:\s*)(?:Em hãy đọc tình huống[^\n]*|Hãy hiểu bản chất[^\n]*)/gm,"");
 for(const bridge of cfg.bridges||[]){const at=knowledge.indexOf(bridge.before);if(at<0)throw Error("Missing bridge anchor "+cfg.b);knowledge=knowledge.slice(0,at)+bridge.text+"\n\n"+knowledge.slice(at);}
 const allFigures=[...figures,...(cfg.extraFigures||[])];
 for(let i=0;i<allFigures.length;i++){
  const anchor=cfg.figureAnchors?.[i]||cfg.figureAnchor||"";
  const explanation=cfg.figureReadings?.[i]||"Quan sát nhãn, hướng và vị trí trên hình; đối chiếu từng chi tiết với khái niệm đang học.";
  const chunk=`**Cách đọc hình.** ${explanation}\n\n${allFigures[i]}\n\n`;
  const at=anchor?knowledge.indexOf(anchor):-1;
  if(at>=0){const end=knowledge.indexOf("\n",at),offset=end>=0?end+1:knowledge.length;knowledge=knowledge.slice(0,offset)+"\n"+chunk+knowledge.slice(offset);}
  else knowledge=chunk+knowledge;
 }
 let exampleSection=worked.join("\n\n").trim();
 if(!exampleSection){if(!cfg.worked)throw Error("Missing authored worked example "+cfg.b);exampleSection=cfg.worked;}
 if(cfg.workedLead)exampleSection=cfg.workedLead+"\n\n"+exampleSection;
 let errorSection=errors.join("\n\n").trim();
 if(!errorSection){
  const extracted=[];
  knowledge=knowledge.replace(/<details\b(?=[^>]*data-thpt-help-id)[\s\S]*?<\/details>/g,m=>{extracted.push(m);return "";});
  errorSection=extracted.join("\n\n").trim();
 }
 if(!errorSection){if(!cfg.errors)throw Error("Missing original errors "+cfg.b);errorSection=cfg.errors;}
 const out=["# "+title,"## 1. Khám phá kiến thức","### Cùng tìm hiểu",cfg.lead.trim(),"### Thuật ngữ, kiến thức và kỹ năng",
 "**Thuật ngữ:** "+cfg.terms,"**Sau bài học, em cần làm được:** "+cfg.skills,"## 2. Kiến thức SGK",knowledge.trim(),
 "## 3. Ví dụ giải toán",cfg.methodIntro||"Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.",exampleSection.trim(),
 "## 4. Lỗi thường gặp và cách tự khắc phục",errorSection.trim(),
 "**Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/).",
 '<p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu canonical SLM. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>',
 ""].join("\n\n").replace(/\n{4,}/g,"\n\n\n");
 const ids=(v,attr)=>[...v.matchAll(new RegExp(attr+'="([^"]+)"','g'))].map(x=>x[1]);
 for(const attr of ["data-thpt-first-try-id","data-thpt-help-id"]){
  const old=ids(source,attr),next=ids(out,attr);
  if(old.length!==next.length||old.some(id=>!next.includes(id)))throw Error(`B${cfg.b} ${attr} set mismatch ${old.length}/${next.length}`);
  if(new Set(next).size!==next.length)throw Error("Duplicate "+attr);
 }
 if((out.match(/^## /gm)||[]).length!==4)throw Error("Four section rule B"+cfg.b);
 if((out.match(/<figure\b/g)||[]).length!==allFigures.length)throw Error("Figures count B"+cfg.b);
 if(/PREREQUISITE_CONFIRMED|PED3\/PED5|D5 kế thừa|FIG-G10/.test(out))throw Error("Audit leaked B"+cfg.b);
 return {markdown:out,items:ids(source,"data-thpt-first-try-id"),helps:ids(source,"data-thpt-help-id"),figureCount:allFigures.length,chars:out.length,title};
}