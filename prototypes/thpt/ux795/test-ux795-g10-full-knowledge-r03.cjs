// Self-Learning Math G10 UX795 static safety check, no browser/academic Q18 claims.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
function auditG10Pair(raw,s,cfg){
 const errors=[];
 const warn=[];
 const rx=(x,re)=>[...x.matchAll(re)].map(m=>m[1]||m[0]);
 const origTry=rx(raw,/data-thpt-first-try-id="([^"]+)"/g).sort(),newTry=rx(s,/data-thpt-first-try-id="([^"]+)"/g).sort();
 const origHelp=rx(raw,/data-thpt-help-id="([^"]+)"/g).sort(),newHelp=rx(s,/data-thpt-help-id="([^"]+)"/g).sort();
 if(JSON.stringify(origTry)!==JSON.stringify(newTry))errors.push("First Try ID parity mismatch");
 if(JSON.stringify(origHelp)!==JSON.stringify(newHelp))errors.push("HELP ID parity mismatch");
 if(newTry.length!==new Set(newTry).size)errors.push("Repeated First Try item id");
 if(newHelp.length!==new Set(newHelp).size)errors.push("Repeated HELP id");
 const headers=rx(s,/^## ([^\n]+)/gm);
 const want=["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ giải toán","4. Lỗi thường gặp và cách tự khắc phục"];
 if(JSON.stringify(headers)!==JSON.stringify(want))errors.push("Four section structure differs");
 const bad=[...s.matchAll(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g)];
 if(bad.length)errors.push("Control characters: "+bad.length);
 if(/^\?\?\? (question|tip)/m.test(s))errors.push("Unrendered old collapsibles");
 if(/PREREQUISITE_CONFIRMED|PED[1-6]\/PED|D5 kế thừa|FIG-G10|Tự thử trước Core|\bcanonical\b|\bMastery\b/g.test(s))errors.push("Internal student-facing vocabulary");
 if((s.match(/\\\(/g)||[]).length!==(s.match(/\\\)/g)||[]).length)errors.push("Unbalanced inline TeX");
 if((s.match(/\\\[/g)||[]).length!==(s.match(/\\\]/g)||[]).length)errors.push("Unbalanced display TeX");
 if((s.match(/<details\b/g)||[]).length!==(s.match(/<\/details>/g)||[]).length)errors.push("Unbalanced details");
 if((s.match(/<details\b/g)||[]).length<newTry.length)warn.push("Not all First Try have separate folded HTML; inspect manual");
 const imageSrc=rx(s,/<img\b[^>]*src="([^"]+)"/g),images=rx(raw,/<img\b[^>]*src="([^"]+)"/g);
 const initialImages=new Set(images.map(x=>x.split("/").at(-1)));
 const finalImages=new Set(imageSrc.map(x=>x.split("/").at(-1)));
 for(const p of initialImages)if(!finalImages.has(p))errors.push("Original image missing: "+p);
 for(const im of imageSrc)if(im.startsWith("../../../../assets/images/thpt/"))errors.push("Unrebased asset "+im);
 if((s.match(/<figure\b/g)||[]).length!==(s.match(/<\/figure>/g)||[]).length)errors.push("Unbalanced figure");
 const leakedH2=rx(s,/^## B(\d+)\s+[—-]/gm);
 if(leakedH2.length)errors.push("Next lesson heading leaked");
 // Math snippets in newly authored demos are verified separately.
 return {b:cfg.b,pass:errors.length===0,errors,warn,sourceTry:origTry.length,candidateTry:newTry.length,help:origHelp.length,figures:(s.match(/<figure\b/g)||[]).length,originalImages:images.length,finalImages:imageSrc.length,details:(s.match(/<details\b/g)||[]).length,chars:s.length};
}
const SOURCE_LOCKS={
  "7": [
    "iv",
    "1f1b0976cfcfe6c5d812c056e13df09e561eb89f"
  ],
  "8": [
    "iv",
    "a7758b4647f28681acdc3f99b8f7f80956deebf1"
  ],
  "9": [
    "iv",
    "84c67363264698fab87db0e76eca5e4561006fa6"
  ],
  "10": [
    "iv",
    "84494e72805d4beb681465595d923bb98a2afb61"
  ],
  "11": [
    "iv",
    "899379e55ce9cc332acb88009c99626dd316f7be"
  ],
  "12": [
    "v",
    "672ac88b3c36a5abde45b73ab7ad0fb7ff830983"
  ],
  "13": [
    "v",
    "b4008a227494ef7165871b67a1a0f255c66c5c6c"
  ],
  "14": [
    "v",
    "0cb35d210afc9dba136a6b256bc1c8138cb01396"
  ],
  "15": [
    "vi",
    "72ed03b1cb625f157bb49064cf1df2100856e057"
  ],
  "16": [
    "vi",
    "a0fc509e1c08b7ee90225dee3994d6b3fa84e21a"
  ],
  "17": [
    "vi",
    "f94608d832b43e671439afde9c14332bb443ac13"
  ],
  "18": [
    "vi",
    "0f2c6420f40112018dfd4be1268b0deb83f4452a"
  ],
  "19": [
    "vii",
    "a4dbf99d12c35f0b3af73fb3df423126aa861add"
  ],
  "20": [
    "vii",
    "489e4d1784e19a896748d83a9e71a9b00ac73a09"
  ],
  "21": [
    "vii",
    "361f5ed232e500d7db567ef9ffa8aaca4e5b6fe5"
  ],
  "22": [
    "vii",
    "fb879e4428998cfd388315b4781810a98637b67b"
  ],
  "23": [
    "viii",
    "a3adcc4882a58d3ffd5346c65d94821092686cf7"
  ],
  "24": [
    "viii",
    "f0ec9161dc9553fc36b203f63e2d45f212cace89"
  ],
  "25": [
    "viii",
    "7fa6775d6da704193e0e0924451abc844873428f"
  ],
  "26": [
    "ix",
    "74b1ba86a8c3b0ac9a48c6545e28af29792cb734"
  ],
  "27": [
    "ix",
    "80bfadb4a9a3ae91e303f89506eb73e4a0d5bf9f"
  ]
};

const root=path.resolve(__dirname,'../../..');
let failed=0;const summary=[];
for(const [n,val]of Object.entries(SOURCE_LOCKS)){
 const lesson=Number(n),ch=val[0],sourcePath=path.join(root,'docs/thpt-preview/sgk/chuong-'+ch+'/bai-'+lesson+'.md');
 const newPath=path.join(__dirname,'G10_B'+String(lesson).padStart(2,'0')+'_HYBRID_KNOWLEDGE_CANDIDATE_R02.md');
 const data=fs.readFileSync(sourcePath,'utf8'),md=fs.readFileSync(newPath,'utf8');
 const bytes=Buffer.from(data,'utf8'),blob=crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+bytes.length+'\0'),bytes])).digest('hex');
 const result=auditG10Pair(data,md,{b:lesson});
 if(blob!==val[1])result.errors.push('Main canonical source changed: expected '+val[1]+' got '+blob);
 for(const item of md.matchAll(/<img\b[^>]*src="([^"]+)"/g)){
  const resolved=path.resolve(path.dirname(newPath),item[1]);if(!fs.existsSync(resolved))result.errors.push('Image not found: '+item[1]);
 }
 result.pass=result.errors.length===0;
 if(!result.pass)failed++;
 summary.push(result);
 console.log((result.pass?'PASS':'FAIL')+' B'+String(lesson).padStart(2,'0')+' · TRY='+result.sourceTry+' HELP='+result.help+' figures='+result.figures+' '+result.errors.join('; '));
}
console.log('SUMMARY G10 B07–B27: '+(summary.length-failed)+'/'+summary.length+' static PASS · '+failed+' blockers; NOT ACADEMIC OR BROWSER QA.');
if(failed)process.exitCode=1;
