
(()=>{
 const apply=()=>{
  const elements=[document.body,...document.querySelectorAll('body *')];
  // Snapshot computed typography first, so inherited values are not incremented repeatedly.
  const updates=elements.map(el=>{
   const cs=getComputedStyle(el);
   if(!cs.fontFamily.toLowerCase().includes('manrope')) return null;
   const fs=parseFloat(cs.fontSize)||16;
   const ls=cs.letterSpacing, ws=cs.wordSpacing;
   const lsPx=ls==='normal'?0:parseFloat(ls)||0;
   const wsPx=ws==='normal'?0:parseFloat(ws)||0;
   const nextLs=lsPx<0?Math.max(.08,fs*.006):lsPx+fs*.004;
   const nextWs=Math.max(0,wsPx)+fs*.025;
   return [el,nextLs,nextWs];
  }).filter(Boolean);
  updates.forEach(([el,ls,ws])=>{
   el.style.setProperty('letter-spacing',ls+'px','important');
   el.style.setProperty('word-spacing',ws+'px','important');
  });
 };
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
})();
