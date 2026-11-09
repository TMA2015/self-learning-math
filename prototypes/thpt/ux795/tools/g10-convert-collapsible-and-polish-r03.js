function polishG10Collapsibles(md) {
  const ids=(s,name)=>[...s.matchAll(new RegExp(name+'="([^"]+)"','g'))].map(m=>m[1]).sort();
  const beforeTry=ids(md,"data-thpt-first-try-id"),beforeHelp=ids(md,"data-thpt-help-id");
  const lines=md.split("\n");
  const out=[];let converted=0;
  for(let i=0;i<lines.length;i++){
    const m=lines[i].match(/^\?\?\? (question|tip) "([^"]+)"\s*$/);
    if(!m){out.push(lines[i]);continue;}
    const body=[];let j=i+1;
    for(;j<lines.length;j++){
      const t=lines[j];
      if(/^(?: {4}|\t)/.test(t)){body.push(t.replace(/^(?: {4}|\t)/,''));continue;}
      if(t.trim()===""){body.push("");continue;}
      break;
    }
    while(body.length&&!body[0].trim())body.shift();
    while(body.length&&!body[body.length-1].trim())body.pop();
    if(body.length===0)throw Error("Empty collapsible at line "+(i+1));
    const type=m[1],summary=m[2],cls=type==="question"?"thpt-r4-pedagogical-note thpt-r4-first-try-fold":"thpt-r4-pedagogical-note thpt-r4-help-fold";
    out.push('<details class="'+cls+'" markdown="1">');
    out.push('<summary>'+summary+'</summary>');
    out.push('');
    out.push(...body);
    out.push('');
    out.push('</details>');
    out.push('');
    i=j-1;converted++;
  }
  let s=out.join("\n");
  s=s.replace(/Để theo kịp lập luận, em nhớ rằng (?:Đã biết|Nhớ|Biết)\s*/g,"Trước khi tiếp tục, em hãy nhớ lại ")
    .replace(/Để theo kịp bước này, em hãy nhớ rằng (?:Đã biết|Nhớ|Biết)\s*/g,"Trước khi tiếp tục, em hãy nhớ lại ")
    .replace(/luyện câu liên quan trong phần Luyện tập ở phần Luyện tập/g,"luyện câu liên quan ở phần Luyện tập")
    .replace(/đã được kiểm tra để tự sửa/g,"tương ứng để tự luyện")
    .replace(/câu luyện tập đã có, phù hợp `G10-[^`]+`/g,"câu luyện tập cùng kỹ năng")
    .replace(/trong ngân hàng Core\/Luyện tập SGK đã có/g,"trong phần Core/Luyện tập")
    .replace(/chỉ sau khi đã làm; kiểm các điều kiện/g,"sau khi em tự làm; kiểm các điều kiện")
    .replace(/Trong SGK Core n=4 hoặc n=5/g,"Với ví dụ n=4 hoặc n=5");
  if(s.includes("??? question")||s.includes("??? tip"))throw Error("Raw admonition remains");
  for(const [name,old]of [["data-thpt-first-try-id",beforeTry],["data-thpt-help-id",beforeHelp]]){
    if(JSON.stringify(old)!==JSON.stringify(ids(s,name)))throw Error(name+" canonical parity failed");
  }
  if((s.match(/^## /gm)||[]).length!==4)throw Error("4 top sections not preserved");
  if((s.match(/<details\b/g)||[]).length!==(s.match(/<\/details>/g)||[]).length)throw Error("details unbalanced");
  return {text:s,converted,sourceTry:beforeTry.length,sourceHelp:beforeHelp.length};
}