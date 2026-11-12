function stageG10Knowledge(candidate, original, settings){
  const lesson=settings.lesson, chapter=settings.chapter;
  const title=(candidate.match(/^# ([^\n]+)/m)||[])[1];
  if(!title)throw Error("No candidate H1 for B"+lesson);
  const chunks=[...candidate.matchAll(/^## ([1-4])\. (.+)$/gm)];
  const headings=["Khám phá kiến thức","Kiến thức SGK","Ví dụ giải toán","Lỗi thường gặp và cách tự khắc phục"];
  const tabLabels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
  if(chunks.length!==4||chunks.some((c,i)=>Number(c[1])!==i+1||c[2]!==headings[i]))throw Error("B"+lesson+" sections invalid");
  const originalScreen=(original.match(/<div class="thpt-r4-screen"[\s\S]*?<\/div>/)||[])[0];
  if(!originalScreen)throw Error("G10 B"+lesson+" original R4 header missing");
  // Reuse the page identity, but avoid a duplicate navigation: native lesson navigation
  // is already mounted in the exact same route by thpt-sgk-lesson-nav-v1.js.
  const safeScreen=originalScreen.replace(/<nav class="thpt-r4-lesson-tabs"[^>]*>[\s\S]*?<\/nav>/g,"")
     .replace(/Học định nghĩa, công thức và ví dụ, rồi luyện tập theo từng kĩ năng\./g,"Học từ tình huống trực quan, nắm kiến thức và tự kiểm tra cách hiểu trước khi luyện tập.")
     .replace(/<p class="thpt-r4-lead">[^<]*Mastery[^<]*<\/p>/g,'<p class="thpt-r4-lead">Học khái niệm, kiểm điều kiện và tự đối chiếu trước khi luyện tập.</p>');
  function escapeCell(s){
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
      .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
  }
  function tableColumns(line){
    if(!line.startsWith("|")||!line.endsWith("|"))throw Error("Malformed pipe line "+line.slice(0,60));
    return line.slice(1,-1).split("|").map(s=>s.trim());
  }
  function markdownTablesToHtml(text){
    const lines=text.split("\n"),out=[];
    for(let i=0;i<lines.length;){
      const isRow=s=>s?.trim().startsWith("|")&&s?.trim().endsWith("|");
      if(!isRow(lines[i])||!isRow(lines[i+1])||!/^\|[\s:|-]+\|$/.test(lines[i+1].trim())){out.push(lines[i++]);continue;}
      const head=tableColumns(lines[i].trim());
      const divider=tableColumns(lines[i+1].trim());
      if(head.length!==divider.length)throw Error("Table width mismatch B"+lesson);
      i+=2;
      const rows=[];
      while(i<lines.length&&isRow(lines[i])){const row=tableColumns(lines[i].trim());if(row.length!==head.length)throw Error("Table row cols B"+lesson);rows.push(row);i++;}
      if(!rows.length)throw Error("Empty Markdown table B"+lesson);
      out.push('<div class="thpt-g10-table-scroll"><table class="thpt-g10-knowledge-table">');
      out.push("<thead><tr>"+head.map(x=>"<th>"+escapeCell(x)+"</th>").join("")+"</tr></thead>");
      out.push("<tbody>");
      for(const row of rows)out.push("<tr>"+row.map(x=>"<td>"+escapeCell(x)+"</td>").join("")+"</tr>");
      out.push("</tbody></table></div>");
    }
    return out.join("\n");
  }
  function detailsToAdmonition(text){
    let conversions=0;
    const result=text.replace(/<details\b([^>]*)>\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*?)\s*<\/details>/g,(full,attrs,summary,body)=>{
      const typ=/thpt-r4-help-fold|data-thpt-help-id/.test(attrs)?"tip":"question";
      const label=summary.replace(/<[^>]+>/g,"").trim().replace(/"/g,"'");
      const inner=body.replace(/^\n+|\n+$/g,"");
      // Preserve the canonical data attributes that were on the original HTML
      // details element. Native pymdownx.details renders a new details element;
      // a nearby hidden span retains the original ID and pedagogical role.
      const meta=[...attrs.matchAll(/(?:\bid|\bdata-[a-z0-9-]+)="[^"]*"/g)].map(m=>m[0]);
      const marker=meta.length?'<span '+meta.join(" ")+' hidden></span>\n\n':"";
      conversions++;
      return marker+'??? '+typ+' "'+label+'"\n\n'+inner.split("\n").map(ln=>ln?"    "+ln:"").join("\n")+"\n";
    });
    if(result.includes("<details")||result.includes("</details>"))throw Error("Unconverted details B"+lesson);
    return {text:result,count:conversions};
  }
  let result='# '+title+"\n\n"+safeScreen+"\n\n";
  let folds=0;
  const paths=[];
  for(let i=0;i<4;i++){
    let section=candidate.slice(chunks[i].index+chunks[i][0].length,chunks[i+1]?.index??candidate.length).trim();
    const converted=detailsToAdmonition(section);section=converted.text;folds+=converted.count;
    section=markdownTablesToHtml(section);
    section=section.replace(/\bcanonical SLM(?: hiện hành)?\b/g,"học liệu SLM hiện hành");
    section=section.replace(/src="(?:\.\.\/){3}docs\/assets\/images\/thpt\//g,'src="../../../../assets/images/thpt/')
       .replace(/src="images\/(G10_[^"]+\.svg)"/g,'src="../../../../assets/images/thpt/$1"');
    // Raw HTML figcaption does not use markdown-in-HTML; convert its simple emphasis to semantic HTML.
    section=section.replace(/<figcaption>([\s\S]*?)<\/figcaption>/g,(_,txt)=>"<figcaption>"+txt.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")+"</figcaption>");
    paths.push(...[...section.matchAll(/src="([^"]+)"/g)].map(m=>m[1]));
    result+='=== "'+tabLabels[i]+'"\n\n'+section.split("\n").map(ln=>ln?"    "+ln:"").join("\n")+"\n\n";
  }
  const count=(s,re)=>(s.match(re)||[]).length;
  function ids(s,attr){return [...s.matchAll(new RegExp(attr+'="([^"]+)"','g'))].map(x=>x[1]).sort()}
  for(const key of ["data-thpt-first-try-id","data-thpt-help-id"]){
    if(JSON.stringify(ids(candidate,key))!==JSON.stringify(ids(result,key)))throw Error("ID parity "+key+" B"+lesson);
  }
  const expected=count(candidate,/<details\b/g);
  if(folds!==expected)throw Error("fold conversion count mismatch B"+lesson+" "+folds+"/"+expected);
  if(count(result,/^=== "/gm)!==4)throw Error("Tab count B"+lesson);
  if(/^\|.*\|$/m.test(result))throw Error("Raw markdown table remains B"+lesson);
  if(count(result,/\\\(/g)!==count(result,/\\\)/g))throw Error("Inline LaTeX mismatch B"+lesson);
  if(count(result,/\\\[/g)!==count(result,/\\\]/g))throw Error("Display LaTeX mismatch B"+lesson);
  if(/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(result))throw Error("Control char B"+lesson);
  if(/\bsrc="(?:images\/|\.\.\/\.\.\/\.\.\/docs\/)/.test(result))throw Error("Image path not rebased B"+lesson);
  return {markdown:result,lesson,chapter,folds,figurePaths:paths,sourceBytes:candidate.length,outputBytes:result.length};
}