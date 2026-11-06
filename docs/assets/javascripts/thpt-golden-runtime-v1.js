/* SLM THPT Golden R4 shared interaction runtime v1.
 * RELEASE UI-only. This module never reads/writes learner answers, assessment
 * secrets, Firebase, localStorage, SessionStorage or canonical academic banks.
 * Grade/role-specific renderers own content and Submit/Final Submit boundaries.
 */
(()=>{"use strict";
 if(window.THPT_GOLDEN_RUNTIME)return;
 const fail=message=>{throw Error("GOLDEN_RUNTIME_V1: "+message)};
 const isProtected=()=>/(?:^|\/)(?:tu-kiem-tra(?:-chuong|-trai-nghiem)?|readiness|final-submit)(?:\/|$)/i.test(location.pathname);
 const publicOnly=()=>{if(isProtected())fail("protected assessment route cannot open formative modal")};
 const bindDialog=({dialog,closeButton,getReturnFocus,onClose,backdrop=true})=>{
  if(!(dialog instanceof HTMLDialogElement))fail("dialog element required");
  if(dialog.dataset.thptGoldenSharedBound==="1")fail("duplicate dialog binding");
  publicOnly();
  dialog.dataset.thptGoldenSharedBound="1";
  let lastFocus=null;
  const close=()=>{if(dialog.open)dialog.close()};
  closeButton?.addEventListener("click",close);
  if(backdrop)dialog.addEventListener("click",event=>{if(event.target===dialog)close()});
  dialog.addEventListener("close",()=>{
   onClose?.();
   const focus=getReturnFocus?.()||lastFocus;
   if(focus?.isConnected&&typeof focus.focus==="function")focus.focus({preventScroll:true});
   lastFocus=null;
  });
  return Object.freeze({
   open:(trigger)=>{
    publicOnly();
    if(trigger?.isConnected)lastFocus=trigger;
    if(!dialog.open)dialog.showModal();
   },
   close,
   get isOpen(){return dialog.open}
  });
 };
 /* One canonical record is rendered by its academic adapter. The shared nav
  * owns the one-active-question selection UI, not the answer reveal rules. */
 const renderNav=({container,count,index,onSelect,buttonClass="",activeClass="active",label=(i)=>"Câu "+(i+1),
  ariaCurrent="true",allAriaCurrent=true})=>{
  publicOnly();
  if(!container||!Number.isSafeInteger(count)||count<1||!Number.isSafeInteger(index)||index<0||index>=count||
     typeof onSelect!=="function")fail("invalid question navigation");
  container.replaceChildren();
  const buttons=[];
  for(let i=0;i<count;i++){
   const current=i===index;
   const button=document.createElement("button");button.type="button";
   button.className=[buttonClass,current?activeClass:""].filter(Boolean).join(" ");
   button.textContent=String(label(i));
   button.setAttribute("aria-label","Chọn câu "+(i+1));
   if(allAriaCurrent)button.setAttribute("aria-current",current?ariaCurrent:"false");
   else if(current)button.setAttribute("aria-current",ariaCurrent);
   button.addEventListener("click",()=>onSelect(i));
   container.append(button);buttons.push(button);
  }
  return buttons;
 };
 const bindPager=({prev,next,getIndex,getCount,go})=>{
  if(!prev||!next||typeof getIndex!=="function"||typeof getCount!=="function"||typeof go!=="function")fail("invalid pager");
  const advance=delta=>{
   const at=getIndex(),count=getCount(),to=at+delta;
   if(to>=0&&to<count)go(to);
  };
  prev.addEventListener("click",()=>advance(-1));
  next.addEventListener("click",()=>advance(1));
  const sync=()=>{
   const at=getIndex(),count=getCount();
   prev.disabled=at<=0;next.disabled=at>=count-1;
  };
  sync();
  return Object.freeze({sync});
 };
 window.THPT_GOLDEN_RUNTIME=Object.freeze({version:"1.0.0",bindDialog,renderNav,bindPager,publicOnly});
})();
