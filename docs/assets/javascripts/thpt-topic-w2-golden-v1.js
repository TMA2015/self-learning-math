/* W2 RELEASE · CĐ06–11 · SGK/CĐ01 Golden 20261122.1.
 * Display-only DOM adapter. Source text stays in approved Markdown projections;
 * no extra question/answer bank, no mastery/grading, no account/data writes.
 * PUBLIC_REPLAY_ONLY selfcheck fetches same-origin public Practice answer by ID.
 */
(()=>{"use strict";
const config=document.querySelector(".topic-w1-release-nav[data-topic-w1][data-topic-w1-part]");
if(!config)return;
const topic=config.dataset.topicW1,part=config.dataset.topicW1Part;
const sizes={"10":{"outcomes":36,"items":120,"replay":36,"groups":6,"practiceGroups":6},"11":{"outcomes":22,"items":116,"replay":22,"groups":4,"practiceGroups":4},"06":{"outcomes":16,"items":66,"replay":16,"groups":4,"practiceGroups":4},"07":{"outcomes":18,"items":69,"replay":18,"groups":4,"practiceGroups":4},"08":{"outcomes":18,"items":58,"replay":18,"groups":4,"practiceGroups":4},"09":{"outcomes":32,"items":108,"replay":32,"groups":5,"practiceGroups":4}};
const expected=sizes[topic];
/* Presentation-only aliases. Full, reviewed heading text stays in its panel and
 * remains accessible through the tab's aria-label/title. */
const topicTabNames={
 "10": {
  "modules": [
   "1. Biến thiên",
   "2. Cực trị toàn miền",
   "3. Tiệm cận",
   "4. Khảo sát đồ thị",
   "5. Tối ưu thực tế",
   "6. Kiểm nghiệm"
  ],
  "subs": [
   [
    "1.1. Đồng biến và nghịch biến",
    "1.2. Dấu đạo hàm",
    "1.3. Điểm cấm và biến thiên",
    "1.4. Cực trị qua đổi dấu",
    "1.5. Điểm dừng không cực trị",
    "1.6. Chiều chuyển động"
   ],
   [
    "2.1. Cực trị địa phương/toàn cục",
    "2.2. GTLN, GTNN trên đoạn",
    "2.3. Ứng viên và biên",
    "2.4. Miền mở và khả đạt",
    "2.5. Miền ràng buộc",
    "2.6. Lập mô hình ba cạnh"
   ],
   [
    "3.1. Tiệm cận ngang",
    "3.2. Tiệm cận đứng",
    "3.3. Tiệm cận xiên",
    "3.4. Lỗ khử được",
    "3.5. Giới hạn hợp lệ theo miền",
    "3.6. Tiệm cận qua hình"
   ],
   [
    "4.1. Các bước khảo sát",
    "4.2. Đồ thị hàm bậc ba",
    "4.3. Khảo sát phân thức",
    "4.4. Giao trục",
    "4.5. Tâm đối xứng",
    "4.6. Bảng biến thiên",
    "4.7. Miền rời và biến thiên"
   ],
   [
    "5.1. Chi phí cận biên",
    "5.2. Vận tốc và gia tốc",
    "5.3. Sai khác chi phí thực",
    "5.4. Miền khả thi của hộp",
    "5.5. Tối ưu trên đoạn",
    "5.6. Điểm không khả vi",
    "5.7. Nghiệm tối ưu nguyên"
   ],
   [
    "6.1. Cực trị địa phương",
    "6.2. Tiệm cận và bảng dấu",
    "6.3. Lợi nhuận đúng mục tiêu",
    "6.4. Kiểm lỗi bằng điều kiện"
   ]
  ]
 },
 "11": {
  "modules": [
   "1. Nguyên hàm",
   "2. Tích phân xác định",
   "3. Diện tích hình học",
   "4. Thể tích"
  ],
  "subs": [
   [
    "1.1. Nhận ra nguyên hàm",
    "1.2. Họ nguyên hàm, điều kiện",
    "1.3. Nguyên hàm lũy thừa",
    "1.4. Nguyên hàm 1/x trên khoảng",
    "1.5. Hàm mũ và hệ số bù",
    "1.6. Nguyên hàm lượng giác",
    "1.7. Từ vận tốc tìm vị trí"
   ],
   [
    "2.1. Tích phân xác định",
    "2.2. Tính tuyến tính tích phân",
    "2.3. Đảo cận và ghép cận",
    "2.4. Tích phân và diện tích",
    "2.5. Độ dời và quãng đường",
    "2.6. Tích phân lượng giác",
    "2.7. Tích lũy theo thời gian"
   ],
   [
    "3.1. Diện tích dưới hàm căn",
    "3.2. Diện tích đổi dấu qua trục",
    "3.3. Diện tích giữa hai đường",
    "3.4. Hai đường đổi thứ tự",
    "3.5. Diện tích ứng dụng"
   ],
   [
    "4.1. Tích phân theo thiết diện",
    "4.2. Thể tích từ tiết diện tròn",
    "4.3. Đĩa và vành khăn khối xoay"
   ]
  ]
 },
 "06": {
  "modules": [
   "1. Góc quay",
   "2. Công thức lượng giác",
   "3. Hàm lượng giác",
   "4. Phương trình lượng giác"
  ],
  "subs": [
   [
    "1.1. Độ và radian góc có hướng",
    "1.2. Sin/cos trên đường tròn",
    "1.3. Độ dài cung và độ dời"
   ],
   [
    "2.1. Hệ thức lượng giác",
    "2.2. Góc liên quan và đối xứng",
    "2.3. Công thức cộng/trừ góc",
    "2.4. Góc nhân đôi và đổi dạng"
   ],
   [
    "3.1. Miền xác định lượng giác",
    "3.2. Chu kỳ cơ bản và đối xứng",
    "3.3. Biên độ, pha và trục giữa",
    "3.4. Tan/cot và tiệm cận"
   ],
   [
    "4.1. Nghiệm của sin/cos",
    "4.2. Nghiệm của tan/cot",
    "4.3. Biến đổi giữ nghiệm",
    "4.4. Lọc nghiệm theo khoảng",
    "4.5. Chu kỳ mô hình có giới hạn"
   ]
  ]
 },
 "07": {
  "modules": [
   "1. Dãy số",
   "2. Cấp số cộng",
   "3. Cấp số nhân",
   "4. Mô hình tăng trưởng"
  ],
  "subs": [
   [
    "1.1. Dãy số và tập chỉ số",
    "1.2. Công thức và quy luật",
    "1.3. Hệ thức truy hồi",
    "1.4. Chứng minh tăng, giảm",
    "1.5. Tính bị chặn"
   ],
   [
    "2.1. Nhận diện cấp số cộng",
    "2.2. Số hạng tổng quát CSC",
    "2.3. Tìm công sai",
    "2.4. Tổng các số hạng đầu",
    "2.5. Bài toán tích lũy"
   ],
   [
    "3.1. Công bội đặc biệt",
    "3.2. Số hạng tổng quát",
    "3.3. Tìm công bội",
    "3.4. Tổng hữu hạn",
    "3.5. Tổng vô hạn và phần dư"
   ],
   [
    "4.1. Tăng đều và tăng tỉ lệ",
    "4.2. Mô hình lãi kép",
    "4.3. Gửi góp và trả nợ theo kỳ"
   ]
  ]
 },
 "08": {
  "modules": [
   "1. Giới hạn dãy số",
   "2. Giới hạn hàm số",
   "3. Tính liên tục",
   "4. Giá trị trung gian"
  ],
  "subs": [
   [
    "1.1. Giới hạn dãy số qua sai số",
    "1.2. Dãy phân kỳ, dao động",
    "1.3. Giới hạn dãy lũy thừa",
    "1.4. Giới hạn dãy phân thức",
    "1.5. Tổng cấp số nhân vô hạn"
   ],
   [
    "2.1. Giới hạn hàm tại một điểm",
    "2.2. Giới hạn trái và phải",
    "2.3. Giới hạn vô cực gần điểm",
    "2.4. Giới hạn khi x tiến vô cực",
    "2.5. Khử dạng 0/0 bằng nhân tử",
    "2.6. Khử dạng 0/0 bằng liên hợp",
    "2.7. Vô cực trừ vô cực"
   ],
   [
    "3.1. Liên tục tại một điểm",
    "3.2. Ba kiểu gián đoạn",
    "3.3. Liên tục trên miền",
    "3.4. Phép toán liên tục"
   ],
   [
    "4.1. Định lí giá trị trung gian",
    "4.2. Phương pháp chia đôi"
   ]
  ]
 },
 "09": {
  "modules": [
   "1. Đạo hàm tại điểm",
   "2. Ý nghĩa đạo hàm",
   "3. Quy tắc đạo hàm",
   "4. Hàm hợp và đạo hàm",
   "5. Gia tốc và vi phân"
  ],
  "subs": [
   [
    "1.1. Vận tốc trung bình",
    "1.2. Cát tuyến và độ dốc",
    "1.3. Đạo hàm bằng định nghĩa",
    "1.4. Miền khả vi",
    "1.5. Khả vi kéo theo liên tục",
    "1.6. Đạo hàm một phía"
   ],
   [
    "2.1. Hệ số góc tiếp tuyến",
    "2.2. Phương trình tiếp tuyến",
    "2.3. Vận tốc có hướng",
    "2.4. Đơn vị của đạo hàm"
   ],
   [
    "3.1. Lũy thừa và hằng số",
    "3.2. Căn thức và điểm biên",
    "3.3. Quy tắc tổng",
    "3.4. Quy tắc tích",
    "3.5. Quy tắc thương",
    "3.6. Quy tắc dây chuyền"
   ],
   [
    "4.1. Sin và cos",
    "4.2. Tan và cot",
    "4.3. Hàm lượng giác hợp",
    "4.4. Hàm mũ",
    "4.5. Logarit và miền",
    "4.6. Mũ–logarit hợp",
    "4.7. Đạo hàm và miền gốc",
    "4.8. Chọn đúng quy tắc"
   ],
   [
    "5.1. Vận tốc từ tọa độ",
    "5.2. Đạo hàm bậc hai",
    "5.3. Đạo hàm đa thức bậc hai",
    "5.4. Đạo hàm hàm hợp bậc hai",
    "5.5. Gia tốc",
    "5.6. Dấu vận tốc và gia tốc",
    "5.7. Phối hợp ba đại lượng",
    "5.8. Vi phân xấp xỉ"
   ]
  ]
 }
};
const displayShortTopicW1=(button,label,full)=>{
 if(!label||!full||label.length>full.length)throw Error("TOPIC_W1_SHORT_TAB_SOURCE_HOLD");
 button.textContent=label;button.title=full;button.setAttribute("aria-label",full);
};
const topicTitles={
 "10": "Ứng dụng đạo hàm: Khảo sát hàm số và tối ưu hóa",
 "11": "Nguyên hàm, tích phân và ứng dụng hình học",
 "06": "Lượng giác và phương trình lượng giác",
 "07": "Dãy số, cấp số cộng và cấp số nhân",
 "08": "Giới hạn và tính liên tục",
 "09": "Đạo hàm và ý nghĩa vi phân"
};
if(!expected||!["kien-thuc","luyen-tap","tu-kiem-tra"].includes(part))return;
const article=config.closest(".md-content__inner");
const start=article?.querySelector("[data-topic-w1-source-start]"),end=article?.querySelector("[data-topic-w1-source-end]");
if(!article||!start||!end||start.dataset.ready==="1")return;
const first=start.closest("p")||start,last=end.closest("p")||end;
const create=(tag,cls,value)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined)x.textContent=String(value);return x};
/* OWNER P2 W2 hotfix: render presentation-only raw mathematical syntax.
 * Traverse TEXT nodes rather than editing canonical learner content or innerHTML.
 * Never rewrite already approved .arithmatex, item IDs, answer keys, or rubrics.
 * This function is idempotent across tab/pager re-renders. */
const normalizeRenderedMath=node=>{
 if(!node)return;
 const texts=[];
 const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const t=walker.currentNode,p=t.parentElement;
  if(!p||p.closest(".arithmatex,mjx-container,code,pre,script,style,textarea,svg"))continue;
  if(t.nodeValue.includes("^")||t.nodeValue.includes("\\operatorname{sđ}"))texts.push(t);
 }
 // Python-Markdown stripped two verified blockquote display forms: CĐ06 Chasles
 // and CĐ08 finite-limit theorem. Recover only these original TeX expressions.
 const fragments=/\[\s*((?:\\operatorname\{sđ\}|\\lim\b)[^\]]+?)\s*\]|(?:[A-Za-z]|\d+)\^(?:\{[^{}\n]{1,40}\}|[A-Za-z0-9]+)/g;
 for(const t of texts){
  const v=t.nodeValue,parts=document.createDocumentFragment();let lastIndex=0,hit=false,match;
  fragments.lastIndex=0;
  while((match=fragments.exec(v))){
   hit=true;
   if(match.index>lastIndex)parts.append(document.createTextNode(v.slice(lastIndex,match.index)));
   const math=create("span","arithmatex");
   math.dataset.topicW2DisplayMath=match[1]?"recovered-display":"exponent";
   math.textContent=match[1]?"\\["+match[1].trim()+"\\]":"\\("+match[0]+"\\)";
   parts.append(math);lastIndex=fragments.lastIndex;
  }
  if(hit){if(lastIndex<v.length)parts.append(document.createTextNode(v.slice(lastIndex)));t.replaceWith(parts)}
 }
};
const renderMath=node=>{normalizeRenderedMath(node);const m=window.MathJax;if(m?.typesetPromise)m.typesetPromise([node]).catch(()=>{});else if(m?.startup?.promise)m.startup.promise.then(()=>m.typesetPromise([node])).catch(()=>{})};
/* Source SVGs remain byte-identical; only the rendered footprint is constrained.
 * W2-only data attribute avoids changing accepted CĐ01/W1 and SGK images. */
const capKnowledgeFigures=root=>{
 const imgs=[...root.querySelectorAll("img[src*='THPT_TOPIC']")];
 for(const img of imgs)img.dataset.topicW2Figure="1";
 if(!imgs.length||document.getElementById("topic-w2-figure-cap"))return;
 const sheet=create("style");sheet.id="topic-w2-figure-cap";
 sheet.textContent="body.thpt-r4-topic-knowledge .topic-w1-knowledge .thpt-r4-knowledge-content-panel img[data-topic-w2-figure]{display:block;width:min(100%,700px);max-width:100%;height:auto;max-height:450px;object-fit:contain;margin:1rem auto}\nbody.thpt-r4-topic-knowledge .topic-w1-knowledge .thpt-r4-knowledge-content-panel img[data-topic-w2-figure][src*=\"UNIT_CIRCLE_QUADRANTS\"]{width:min(100%,480px);max-height:430px}\nbody.thpt-r4-topic-knowledge .topic-w1-knowledge .thpt-r4-knowledge-content-panel p:has(>img[data-topic-w2-figure]){margin:1rem auto;text-align:center}";
 document.head.append(sheet);
};
const sourceNodes=()=>{const nodes=[];for(let n=first.nextSibling;n&&n!==last;n=n.nextSibling)nodes.push(n);return nodes};
const ready=()=>{start.dataset.ready="1";document.documentElement.classList.remove("topic-w1-pending","topic-w1-fallback");document.documentElement.classList.add("topic-w1-ready")};
const safeFallback=error=>{console.error("TOPIC_W1_GOLDEN_HOLD",topic,part,error);document.documentElement.classList.remove("topic-w1-pending");document.documentElement.classList.add("topic-w1-fallback");let status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung học liệu gốc vẫn có thể đọc bên dưới."};
const sourceRole=label=>{
 const upper=label.toLocaleUpperCase("vi").trim();
 if(upper.startsWith("ĐỊNH NGHĨA")||upper.startsWith("KHÁI NIỆM"))return["concept","thpt-r4-knowledge-conclusion thpt-r4-concept-card"];
 if(upper.startsWith("TÍNH CHẤT")||upper.startsWith("ĐỊNH LÝ")||upper.startsWith("ĐỊNH LÍ")||upper.startsWith("QUY TẮC")||upper.startsWith("PHƯƠNG PHÁP"))return["rule","thpt-r4-knowledge-conclusion thpt-r4-rule-card"];
 if(upper.startsWith("CÔNG THỨC")||upper.startsWith("HỆ THỨC"))return["formula","thpt-r4-key-formula"];
 if(upper.startsWith("KIẾN THỨC CẦN GHI NHỚ")||upper.startsWith("GHI NHỚ")||upper.startsWith("LƯU Ý"))return["recap","thpt-r4-knowledge-conclusion"];
 return null;
};
const solutionContent=details=>{
 const out=create("div","thpt-r4-formative-reveal"),clone=details.cloneNode(true);clone.querySelector("summary")?.remove();
 for(const node of [...clone.childNodes]){
  if(node.nodeType===1){out.append(document.importNode(node,true));continue}
  if(node.nodeType!==3)continue;
  for(const part of node.textContent.trim().split(/\n\s*\n/)){
   if(!part.trim())continue;
   const p=create("p");
   for(const piece of part.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*)/g)){
    if(piece.startsWith("**")&&piece.endsWith("**")&&piece.length>4)p.append(create("strong","",piece.slice(2,-2)));
    else if(piece.startsWith("*")&&piece.endsWith("*")&&piece.length>2)p.append(create("em","",piece.slice(1,-1)));
    else p.append(piece.replace(/\n/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">"));
   }
   out.append(p);
  }
 }
 return out;
};
function normalizeInlineStems(scope,rx){
 // W2 canonical markup may have bold Vận dụng / Bài n. and stem in one P.
 // Move original nodes into a sibling P; don't retype, hide, or change math.
 for(const p of [...scope.querySelectorAll("p")]){
  const strong=p.querySelector(":scope > strong");
  if(!strong||!rx.test(strong.textContent.trim()))continue;
  const remainder=[...p.childNodes].filter(n=>n!==strong);
  if(!remainder.some(n=>n.nodeType===1||n.textContent.trim()))continue;
  const text=create("p");remainder.forEach(n=>text.append(n));p.after(text);
 }
}
function styleKnowledge(root){
 // A single MkDocs blockquote may contain several formal labels; split at every label.
 for(const quote of root.querySelectorAll("blockquote")){
  const boxes=[];let box=null;
  for(const child of [...quote.childNodes]){
   const label=child.nodeType===1?child.querySelector(":scope > strong")?.textContent||"":"";
   const role=sourceRole(label);
   if(role){box=create("div",role[1]);box.dataset.topicW1Callout=role[0];box.setAttribute("role","note");boxes.push(box)}
   if(!box){
    if(child.nodeType===3&&!child.textContent.trim())continue;
    throw Error("Unclassified approved semantic callout "+quote.textContent.slice(0,90));
   }
   box.append(child);
  }
  if(!boxes.length)throw Error("Missing semantic callout");
  quote.replaceWith(...boxes);
 }
 for(const details of root.querySelectorAll("details")){
  const summary=details.querySelector("summary");if(!summary)continue;
  details.classList.add("question");
  const content=solutionContent(details);
  details.replaceChildren(summary,...content.childNodes);
  details.addEventListener("toggle",()=>{if(details.open)renderMath(details)});
 }
 // SGK/CĐ01 Golden: Vận dụng label + stem are ordinary sibling paragraphs;
 // ONLY its voluntary Đối chiếu uses the existing blue-neutral details.question.
 // Do not wrap them in a separate formative card or rewrite learner text.
 for(const p of root.querySelectorAll("p")){
  if(!/^Lời giải[.:]?$/.test(p.querySelector(":scope > strong")?.textContent.trim()||""))continue;
  const box=create("div","thpt-g10-example-solution");p.before(box);box.append(p);let n=box.nextElementSibling;
  while(n&&!n.matches("h2,h3,h4,details,.thpt-r4-knowledge-conclusion,.thpt-r4-key-formula")&&!/^(Vận dụng|Kiểm lại|Ví dụ|Kiểm lỗi|Khám phá kiến thức)/.test(n.textContent.trim())){
   const next=n.nextElementSibling;box.append(n);n=next;
  }
 }
}
function initKnowledge(){
 const elements=[...sourceNodes()].filter(x=>x.nodeType===1);
 const headings=elements.filter(x=>x.tagName==="H2"&&/^\d+\.\s/.test(x.textContent));
 if(headings.length!==expected.groups)throw Error("Knowledge group count mismatch");
 const outcomes=elements.filter(x=>x.tagName==="H3"&&/^\d+\.\d+\./.test(x.textContent));
 if(outcomes.length!==expected.outcomes)throw Error("Knowledge outcome count mismatch actual="+outcomes.length+" expected="+expected.outcomes+" directH3="+elements.filter(x=>x.tagName==="H3").map(x=>x.textContent.slice(0,30)).join("|")+" nestedH3="+[...article.querySelectorAll("h3")].filter(x=>/^\\d+\\.\\d+\\./.test(x.textContent)).map(x=>x.textContent.slice(0,12)+":"+x.parentElement?.tagName+":"+x.parentElement?.className).join("|")+" missing25="+(()=>{let h=article.innerHTML;let i=h.indexOf("2.5. Giải bất phương trình bậc hai");return i<0?"MISSING":h.slice(i-200,i+280)})()+" missing26="+(()=>{let h=article.innerHTML;let i=h.indexOf("2.6. Bất phương trình đúng với mọi x");return i<0?"MISSING":h.slice(i-200,i+250)})());
 // Restore the reviewed topic title from the published topic index as display-only
 // chrome, before the existing introduction; source-locked learner Markdown untouched.
 const intro=config.querySelector(".topic-w1-source-intro");
 if(!intro||!topicTitles[topic])throw Error("Approved topic title/intro unavailable");
 const title=create("h1","topic-w1-topic-heading","Chuyên đề "+topic+" · "+topicTitles[topic]);
 config.after(title,intro);
 article.classList.add("thpt-g10-knowledge-ap1","thpt-g10-first-six-golden","topic01-golden-knowledge","topic-w1-knowledge");
 document.body.classList.add("thpt-r4-topic-knowledge");
 const layout=create("section","topic01-knowledge-layout"),rails=create("nav","thpt-r4-knowledge-tabs thpt-r4-knowledge-modules");
 layout.dataset.topicW1Knowledge="1";rails.setAttribute("role","tablist");rails.setAttribute("aria-label","Mảng kiến thức Chuyên đề "+topic);
 layout.append(rails);headings[0].before(layout);
 const allButtons=[],allPanels=[];
 const activate=(buttons,panels,i)=>{
  buttons.forEach((b,j)=>{const yes=j===i;b.classList.toggle("is-active",yes);b.setAttribute("aria-selected",String(yes));b.tabIndex=yes?0:-1;panels[j].hidden=!yes});
  renderMath(panels[i]);
 };
 const bind=(buttons,panels)=>{
  buttons.forEach((b,i)=>{b.addEventListener("click",()=>activate(buttons,panels,i));
   b.addEventListener("keydown",e=>{const k=e.key;if(!["ArrowLeft","ArrowRight","Home","End"].includes(k))return;e.preventDefault();const next=k==="Home"?0:k==="End"?buttons.length-1:(i+(k==="ArrowRight"?1:-1)+buttons.length)%buttons.length;activate(buttons,panels,next);buttons[next].focus()});
  });activate(buttons,panels,0);
 };
 for(let i=0;i<headings.length;i++){
  const head=headings[i],limit=headings[i+1]||last,key=String(i+1);
  const button=create("button","thpt-r4-knowledge-tab thpt-r4-knowledge-module-tab");displayShortTopicW1(button,topicTabNames[topic].modules[i],head.textContent);button.type="button";button.id="w1-"+topic+"-module-tab-"+key;button.dataset.topicW1ModuleTab=key;
  button.setAttribute("role","tab");button.setAttribute("aria-controls","w1-"+topic+"-module-"+key);
  const panel=create("section","thpt-r4-knowledge-panel thpt-r4-knowledge-module-panel");panel.id="w1-"+topic+"-module-"+key;panel.dataset.topicW1ModulePanel=key;panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby",button.id);
  head.classList.add("thpt-g10-section-heading");
  let node=head;while(node&&node!==limit){const next=node.nextSibling;panel.append(node);node=next}
  rails.append(button);layout.append(panel);allButtons.push(button);allPanels.push(panel);
  const subs=[...panel.children].filter(el=>el.tagName==="H3"&&new RegExp("^"+key+"\\.\\d+\\.").test(el.textContent));
  if(!subs.length)throw Error("Knowledge group without outcomes "+key);
  const wrapper=create("div","thpt-r4-knowledge-subgroup"),subRail=create("nav","thpt-r4-knowledge-tabs thpt-r4-knowledge-subtabs");subRail.setAttribute("role","tablist");subRail.setAttribute("aria-label","Nội dung nhóm "+key);
  panel.insertBefore(wrapper,subs[0]);wrapper.append(subRail);
  const subButtons=[],subPanels=[];
  for(let j=0;j<subs.length;j++){
   const h=subs[j],until=subs[j+1]||null,subKey=key+"-"+(j+1);
   const b=create("button","thpt-r4-knowledge-tab");displayShortTopicW1(b,topicTabNames[topic].subs[i]?.[j],h.textContent);b.type="button";b.id="w1-"+topic+"-subtab-"+subKey;b.dataset.topicW1Subtab=subKey;b.setAttribute("role","tab");b.setAttribute("aria-controls","w1-"+topic+"-content-"+subKey);
   const p=create("section","thpt-r4-knowledge-panel thpt-r4-knowledge-content-panel");p.id="w1-"+topic+"-content-"+subKey;p.setAttribute("role","tabpanel");p.setAttribute("aria-labelledby",b.id);
   let child=h;while(child&&child!==until){const next=child.nextSibling;p.append(child);child=next}
   subRail.append(b);wrapper.append(p);subButtons.push(b);subPanels.push(p);
  }
  bind(subButtons,subPanels);
 }
 normalizeInlineStems(layout,/^Vận dụng$/);styleKnowledge(layout);capKnowledgeFigures(layout);bind(allButtons,allPanels);
 if(layout.querySelectorAll("[data-topic-w1-callout]").length<expected.outcomes)throw Error("Missing formal semantic callouts");
 ready();
}
function practiceBank(){
 normalizeInlineStems(article,/^Bài\s+\d+\.$/);
 const nodes=sourceNodes(),headings=nodes.filter(n=>n.nodeType===1&&n.tagName==="H2"&&/^\d+\.\s/.test(n.textContent));
 if(headings.length!==expected.practiceGroups)throw Error("Practice group count mismatch");
 const items=[];let group="",id="",current=null;
 for(const n of nodes){
  if(n.nodeType===1&&n.tagName==="H2"){group=n.textContent.trim();current=null;continue}
  if(n.nodeType===8){const match=n.textContent.match(/DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)/);if(match){id=match[1];current=null;continue}}
  const title=n.nodeType===1&&n.tagName==="P"?n.querySelector(":scope > strong")?.textContent?.trim():"";
  const hit=/^Bài\s+(\d+)\.$/.exec(title||"");
  if(hit){if(!group||!id)throw Error("Canonical ID missing for Practice item "+hit[1]);current={number:Number(hit[1]),group,id,nodes:[n]};items.push(current);id="";}
  else if(current)current.nodes.push(n);
 }
 if(items.length!==expected.items||items.some((x,i)=>x.number!==i+1)||new Set(items.map(x=>x.id)).size!==expected.items)throw Error("Practice Q15 item count/ID mismatch");
 if(items.some(x=>x.nodes.filter(n=>n.nodeType===1&&n.tagName==="DETAILS").length!==1))throw Error("Practice missing exactly one canonical solution");
 const groups=headings.map(h=>({title:h.textContent.trim(),items:items.filter(q=>q.group===h.textContent.trim())}));
 if(groups.some(g=>!g.items.length))throw Error("Empty Practice group");
 return{nodes,headings,groups,items};
}
function initPractice(){
 const golden=window.THPT_GOLDEN_RUNTIME;
 if(!golden?.bindDialog||!golden?.bindPager||!golden?.renderNav||!golden?.publicOnly)throw Error("Missing SGK Golden runtime");
 const bank=practiceBank();golden.publicOnly();
 const hub=create("section","topic01-golden-hub topic-w1-practice-hub"),grid=create("div","thpt-r4-practice-sections topic01-golden-grid");
 hub.dataset.topicW1Practice="1";hub.append(grid);
 const shelf=create("div","topic-w1-source-shelf");shelf.hidden=true;shelf.setAttribute("aria-hidden","true");
 bank.headings[0].before(hub,shelf);
 // Original canonical source is only moved, never changed or re-serialized.
 const fromFirst=bank.nodes.slice(bank.nodes.indexOf(bank.headings[0]));
 fromFirst.forEach(n=>shelf.append(n));
 const buttons=bank.groups.map((g,i)=>{
  const wrap=create("section","thpt-r4-practice-lesson");wrap.dataset.thptGrade="10";
  const header=create("div","thpt-r4-practice-lesson-header"),meta=create("div");
  meta.append(create("p","thpt-r4-practice-class","Chuyên đề "+topic+" · Nhóm "+(i+1)),create("h2","",g.title.replace(/^\d+\.\s*/,"")));
  header.append(create("span","thpt-r4-lesson-number",String(i+1)),meta);
  const container=create("div","thpt-r4-practice-card-grid topic01-single-card"),card=create("section","thpt-r4-practice-card"),desc=create("div");
  desc.append(create("p","","Tự làm rồi mở đáp án để kiểm lại cách giải."),create("p","",g.items.length+" bài luyện tập"));
  const open=create("button","thpt-r4-practice-open","✎ Luyện tập");open.type="button";open.dataset.topicW1PracticeCard=String(i+1);
  card.append(desc,open);container.append(card);wrap.append(header,container);grid.append(wrap);return open;
 });
 const dialog=create("dialog","thpt-r4-practice-dialog topic01-practice-dialog topic-w1-practice-dialog");dialog.dataset.topicW1Dialog="1";dialog.setAttribute("aria-label","Luyện tập Chuyên đề "+topic);
 const bar=create("div","thpt-r4-modal-top"),badge=create("span","thpt-r4-modal-lesson-badge","1"),heading=create("div","thpt-r4-modal-heading"),title=create("h2");
 heading.append(create("p","thpt-r4-modal-meta","CĐ"+topic+" · LUYỆN TẬP"),title);
 const close=create("button","topic-w1-close","Đóng ×");close.type="button";close.dataset.thptModalClose="";close.setAttribute("aria-label","Đóng bài luyện tập");
 bar.append(badge,heading,close);
 const body=create("div","thpt-r4-modal-main");dialog.append(bar,body);document.body.append(dialog);
 let group=0,cursor=0,pager=null;
 const lifecycle=golden.bindDialog({dialog,closeButton:close,getReturnFocus:()=>buttons[group]});
 const prev=create("button","","← Bài trước"),next=create("button","","Bài tiếp →");prev.type=next.type="button";
 const render=()=>{
  const g=bank.groups[group],q=g.items[cursor],source=q.nodes.find(n=>n.nodeType===1&&n.tagName==="DETAILS");if(!source)throw Error("Missing source solution");
  badge.textContent=String(group+1);title.textContent=g.title.replace(/^\d+\.\s*/,"");body.replaceChildren(create("p","thpt-r4-modal-progress","Câu "+(cursor+1)+" / "+g.items.length));
  const nav=create("div","thpt-r4-modal-question-nav");golden.renderNav({container:nav,count:g.items.length,index:cursor,label:i=>String(i+1),onSelect:i=>{cursor=i;render()}});body.append(nav);
  const card=create("article","md-typeset thpt-r4-reviewed-formative-card topic-w1-question-body");card.dataset.topicW1CurrentItem=String(q.number);card.dataset.thptCanonicalItem=q.id;card.append(create("h3","","Bài "+q.number+"."));
   const stemLabel=create("p","topic-w1-stem-label");stemLabel.append(create("strong","","Đề bài"));card.append(stemLabel);
  for(const n of q.nodes.slice(1))if(n.nodeType===3||n.nodeType===1&&n.tagName!=="DETAILS")card.append(n.cloneNode(true));
  const actions=create("div","thpt-r4-formative-actions"),details=create("details"),solution=solutionContent(source);
  details.append(create("summary","","📖 Đáp án / Lời giải"),solution);
  const remed=create("a","thpt-r4-remediation-link","↶ Ôn lại kiến thức");remed.href="../kien-thuc/";
  actions.append(details,remed);card.append(actions);body.append(card);
  details.addEventListener("toggle",()=>{if(details.open)renderMath(solution)});
  const footer=create("div","thpt-r4-modal-buttons");footer.append(prev,next);body.append(footer);
  pager?.sync();renderMath(card);
 };
 pager=golden.bindPager({prev,next,getIndex:()=>cursor,getCount:()=>bank.groups[group].items.length,go:i=>{cursor=i;render()}});
 buttons.forEach((b,i)=>b.addEventListener("click",()=>{group=i;cursor=0;render();lifecycle.open(b)}));
 ready();
}
function readReplay(){
 const nodes=sourceNodes(),items=[];
 for(const n of nodes){
  if(n.nodeType!==8)continue;
  const id=n.textContent.match(/PUBLIC_REPLAY_ONLY:\s*([A-Z0-9-]+)/)?.[1];if(!id)continue;
  let p=n.nextSibling;while(p&&p.nodeType!==1)p=p.nextSibling;
  if(p?.tagName!=="P")throw Error("Public replay no paragraph "+id);
  const m=p.querySelector(":scope > strong")?.textContent?.match(/^Câu (\d+)\./),number=Number(m?.[1]);
  if(!number)throw Error("Public replay missing number "+id);
  const stem=p.cloneNode(true);stem.querySelector(":scope > strong")?.remove();items.push({id,number,stem});
 }
 if(items.length!==expected.replay||items.some((x,i)=>x.number!==i+1)||new Set(items.map(x=>x.id)).size!==expected.replay)throw Error("Public replay Q15/Q16 count/ID mismatch");
 return{items,nodes};
}
function initSelfcheck(){
 const info=readReplay(),items=info.items;
 const root=create("section","topic-w1-selfcheck");root.dataset.topicW1Selfcheck="1";root.dataset.g10ChapterSelfcheck="TOP"+topic;root.dataset.g10scBound="topic-public-replay";
 root.append(create("h2","g10sc-heading","Tự kiểm tra chuyên đề "+topic),create("p","g10sc-notice","Em tự làm từng câu trên giấy trước khi mở Đối chiếu. Đây là bài công khai để tự ôn, không phải đánh giá độc lập hay ghi Mastery."));
 const progress=create("p","g10sc-progress"),nav=create("div","g10sc-jump"),body=create("section","g10sc-body"),actions=create("div","g10sc-controls"),prev=create("button","g10sc-button","Câu trước"),next=create("button","g10sc-button","Câu tiếp");
 prev.type=next.type="button";actions.append(prev,next);root.append(progress,nav,body,actions);
 const shelf=create("div","topic-w1-selfcheck-source-shelf");shelf.hidden=true;shelf.setAttribute("aria-hidden","true");
 first.after(root,shelf);info.nodes.forEach(n=>shelf.append(n));
 let cursor=0,practiceCache=null;
 async function publicAnswer(id){
  if(!items.some(q=>q.id===id))throw Error("Unapproved replay "+id);
  if(!practiceCache){
   const target=new URL("../luyen-tap/",location.href);
   if(target.origin!==location.origin||!target.pathname.endsWith("/chuyen-de/cd"+topic+"/luyen-tap/"))throw Error("Invalid public Practice URL");
   const res=await fetch(target,{method:"GET",credentials:"omit",redirect:"error"});if(!res.ok)throw Error("Public Practice fetch failed");
   const doc=new DOMParser().parseFromString(await res.text(),"text/html");
   const begin=doc.querySelector('[data-topic-w1-source-start="luyen-tap"]'),end=doc.querySelector('[data-topic-w1-source-end="luyen-tap"]');
   if(!begin||!end)throw Error("Public Practice markers absent");
   const firstNode=begin.closest("p")||begin,lastNode=end.closest("p")||end;
   const bank=new Map();let currentId="";
   for(let n=firstNode.nextSibling;n&&n!==lastNode;n=n.nextSibling){
    if(n.nodeType===8){const m=n.textContent.match(/DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)/);if(m)currentId=m[1]}
    if(n.nodeType===1&&n.tagName==="DETAILS"&&currentId){if(bank.has(currentId))throw Error("Duplicate canonical answer ID");bank.set(currentId,n);currentId=""}
   }
   if(bank.size!==expected.items||items.some(q=>!bank.has(q.id)))throw Error("Selfcheck Q15 mapping mismatch");
   practiceCache=bank;
  }
  return solutionContent(practiceCache.get(id));
 }
 const render=()=>{
  const q=items[cursor];progress.textContent="Câu "+(cursor+1)+" / "+items.length;nav.replaceChildren();
  items.forEach((_,i)=>{const b=create("button","g10sc-jump-button"+(i===cursor?" is-current":""),i+1);b.type="button";b.setAttribute("aria-label","Đến câu "+(i+1));if(i===cursor)b.setAttribute("aria-current","true");b.onclick=()=>{cursor=i;render()};nav.append(b)});
  body.replaceChildren(create("h3","","Câu "+q.number));
   const stemLabel=create("p","topic-w1-stem-label");stemLabel.append(create("strong","","Đề bài"));body.append(stemLabel);
  body.dataset.thptCanonicalItem=q.id;
  const rich=create("div","g10sc-rich");rich.append(q.stem.cloneNode(true));body.append(rich);
  const button=create("button","g10sc-button g10sc-final","Đối chiếu"),solution=create("section","g10sc-review");button.type="button";solution.hidden=true;solution.id="topic-w1-solution-"+topic;solution.dataset.topicW1Solution="";
  button.setAttribute("aria-controls",solution.id);button.setAttribute("aria-expanded","false");body.append(button,solution);
  button.onclick=async()=>{if(!solution.hidden){solution.hidden=true;button.textContent="Đối chiếu";button.setAttribute("aria-expanded","false");return}
   button.disabled=true;
   try{const answer=await publicAnswer(q.id);if(!solution.isConnected)return;solution.replaceChildren(...answer.childNodes);solution.dataset.thptCanonicalSolution=q.id;solution.hidden=false;button.textContent="Ẩn đối chiếu";button.setAttribute("aria-expanded","true");renderMath(solution)}
   catch(error){console.error("TOPIC_W1_PUBLIC_REPLAY_HOLD",error);if(solution.isConnected){solution.replaceChildren(create("p","g10sc-error","Chưa tải được lời giải công khai. Em có thể thử lại hoặc mở Luyện tập."));solution.hidden=false;button.textContent="Ẩn đối chiếu";button.setAttribute("aria-expanded","true")}}
   finally{button.disabled=false}};
  prev.disabled=cursor===0;next.disabled=cursor===items.length-1;renderMath(body);
 };
 prev.onclick=()=>{if(cursor>0){cursor--;render()}};next.onclick=()=>{if(cursor<items.length-1){cursor++;render()}};render();ready();
}
try{
 if(part==="kien-thuc")initKnowledge();
 else if(part==="luyen-tap")initPractice();
 else initSelfcheck();
}catch(error){safeFallback(error)}
})();