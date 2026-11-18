function polishG10StudentProse(source){
 const ids=attr=>[...source.matchAll(new RegExp(attr+'="([^"]+)"','g'))].map(m=>m[1]);
 const oldTry=ids("data-thpt-first-try-id"),oldHelp=ids("data-thpt-help-id");
 let s=source
  .replace(/học liệu canonical SLM/g,"học liệu SLM hiện hành")
  .replace(/câu canonical cũ\s+`THPT-[^`]+`/g,"câu luyện tập tương ứng")
  .replace(/câu canonical đã review/g,"câu luyện tập đã có")
  .replace(/(?:luyện bài|Luyện tiếp|luyện tiếp|Luyện)\s+canonical\s+`THPT-[^`]+`/g,"luyện câu liên quan trong phần Luyện tập")
  .replace(/trong ngân hàng đã review/g,"ở phần Luyện tập")
  .replace(/đã review lịch sử/g,"đã có trong phần Luyện tập")
  .replace(/đã review/g,"đã được kiểm tra")
  .replace(/Core\/Practice/g,"Core/Luyện tập")
  .replace(/Tự thử unscored, không cộng Mastery/g,"câu tự đối chiếu, không tính điểm thành thạo")
  .replace(/không cộng điểm\/Mastery/g,"không tính điểm thành thạo")
  .replace(/không ghi Mastery/g,"không ghi điểm thành thạo")
  .replace(/không tính lại câu đã xem lời giải thành Readiness/g,"không dùng câu đã xem lời giải làm chứng cứ tự kiểm tra độc lập")
  .replace(/Chuyển đến hướng dẫn D6/g,"Đến hướng dẫn tự sửa")
  .replace(/xem D6\s+`HELP-G10-[^`]+`/g,"xem hướng dẫn tự sửa tương ứng")
  .replace(/Điểm quay về canonical:/g,"Nơi luyện tiếp:")
  .replace(/Nơi luyện tập canonical:/g,"Nơi luyện tiếp:")
  .replace(/(?:luyện|Luyện) canonical THPT-G10-[A-Z0-9-]+/g,"luyện câu liên quan trong phần Luyện tập")
  .replace(/câu canonical THPT-G10-[A-Z0-9-]+/g,"câu luyện tập liên quan")
  .replace(/câu mới chỉ là Tự thử unscored, không cộng Mastery/g,"đây là câu tự đối chiếu, không thay thế Tự kiểm tra cuối chương")
  .replace(/câu mới chỉ là Tự thử unscored, không cộng mức độ thành thạo/g,"đây là câu tự đối chiếu, không thay thế Tự kiểm tra cuối chương")
  .replace(/câu mới chỉ là Tự thử unscored, không ghi điểm thành thạo/g,"đây là câu tự đối chiếu, không thay thế Tự kiểm tra cuối chương")
  .replace(/\bcanonical\b/g,"đã có")
  .replace(/\bMastery\b/g,"mức độ thành thạo")
  .replace(/\bReadiness\b/g,"đánh giá cuối chương");
 const nextTry=[...s.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const nextHelp=[...s.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(m=>m[1]);
 if(JSON.stringify(oldTry)!==JSON.stringify(nextTry)||JSON.stringify(oldHelp)!==JSON.stringify(nextHelp))throw Error("canonical ids modified");
 return {text:s,changed:s!==source,oldAudit:(source.match(/\b(?:canonical|Mastery|Readiness|đã review)\b/g)||[]).length,newAudit:(s.match(/\b(?:canonical|Mastery|Readiness|đã review)\b/g)||[]).length};
}