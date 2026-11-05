
document.documentElement.classList.add('js');
const progress=document.getElementById('progress');
function updateProgress(){const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?(d.scrollTop/max)*100:0)+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
document.getElementById('printBtn').addEventListener('click',()=>window.print());
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
