
(() => {
  const records = [
    {title:'Google UX Design',file:'google-ux-design.webp',provider:'GOOGLE · COURSERA',date:'16 Aug 2021',subtitle:'UX research · Interaction design · Prototyping',caption:'A foundation in designing for people.',description:'A structured introduction to the end-to-end UX design process: understanding users, defining problems, exploring solutions, prototyping and testing.'},
    {title:'Generative AI',file:'generative-ai.webp',provider:'MICROSOFT · LINKEDIN LEARNING',date:'20 May 2024',subtitle:'Generative AI · Responsible use · Applications',caption:'Exploring what generative AI can make possible.',description:'Career Essentials in Generative AI — a learning path covering core AI concepts, practical applications and responsible use.'},
    {title:'User Psychology',file:'user-psychology.webp',provider:'UXCEL',date:'02 May 2025',subtitle:'People · Behaviour · Decisions',caption:'Looking more closely at what shapes behaviour.',description:'A focused course in user psychology, with an emphasis on the human factors behind how people think, decide and interact.'},
    {title:'Vibe Coding Essentials',file:'vibe-coding.webp',provider:'COURSERA · SCRIMBA',date:'04 Nov 2025',subtitle:'AI-assisted building · Prototyping',caption:'Turning ideas into working experiences with AI.',description:'A practical specialisation exploring how AI-assisted tools can help turn an idea into a working software experience.'},
    {title:'Product Management Foundations',file:'product-management.webp',provider:'UXCEL',date:'26 May 2025',subtitle:'Product thinking · Strategy · Delivery',caption:'Building stronger foundations in product practice.',description:'A concise course covering core product management foundations, from framing product problems to making informed product decisions.'}
  ];
  const stack=document.getElementById('learning-stack');
  if(!stack)return;
  const index=document.getElementById('learning-index');
  const modal=document.getElementById('learning-modal');
  const modalImage=document.getElementById('learning-modal-image');
  const modalTitle=document.getElementById('learning-modal-title');
  const modalDescription=document.getElementById('learning-modal-description');
  const modalMeta=document.getElementById('learning-modal-meta');
  const modalClose=document.getElementById('learning-modal-close');
  let active=0,returnFocus=null;
  const pad=n=>String(n+1).padStart(2,'0');

  records.forEach((r,i)=>{
    const card=document.createElement('button');
    card.type='button';
    card.className='learning-folio';
    card.dataset.learningIndex=i;
    card.setAttribute('aria-label',`Select ${r.title}`);
    card.innerHTML=`<img class="learning-folio-image" src="assets/learning/${r.file}" alt="${r.title} certificate"><span class="learning-folio-label"><b>${r.title}</b></span>`;
    card.addEventListener('click',()=>{
      if(i===active) openModal();
      else select(i);
    });
    card.addEventListener('pointermove',e=>{
      if(i!==active || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      const rect=card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      card.style.setProperty('--tilt-x',`${-y*3}deg`);
      card.style.setProperty('--tilt-y',`${x*4}deg`);
    });
    card.addEventListener('pointerleave',()=>{
      card.style.setProperty('--tilt-x','0deg');
      card.style.setProperty('--tilt-y','0deg');
    });
    stack.appendChild(card);
  });

  function select(i){
    active=(i+records.length)%records.length;
    const cards=[...stack.children];
    const n=records.length;
    cards.forEach((card,j)=>{
      let delta=(j-active+n)%n;
      if(delta>n/2)delta-=n;
      card.classList.remove('is-active','is-left','is-right','is-far-left','is-far-right');
      card.style.pointerEvents='auto';
      if(delta===0){card.classList.add('is-active');card.setAttribute('aria-label',`Open ${records[j].title}`);}
      else if(delta===-1)card.classList.add('is-left');
      else if(delta===1)card.classList.add('is-right');
      else if(delta===-2)card.classList.add('is-far-left');
      else card.classList.add('is-far-right');
      card.style.setProperty('--stack-order',String(5-Math.abs(delta)));
    });
    index.querySelectorAll('[data-learning-index]').forEach(btn=>{
      const selected=Number(btn.dataset.learningIndex)===active;
      btn.classList.toggle('is-active',selected);
      btn.setAttribute('aria-pressed',String(selected));
    });
    const r=records[active];
    document.getElementById('learning-stage-caption').textContent=r.caption;
  }
  function openModal(){
    const r=records[active];
    returnFocus=document.activeElement;
    modalImage.src=`assets/learning/${r.file}`;
    modalImage.alt=`${r.title} certificate`;
    modalTitle.textContent=r.title;
    modalDescription.textContent=r.description;
    modalMeta.textContent=`${r.provider.replace(' · ',' / ')}  ·  ${r.date}`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    modalClose.focus();
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    if(returnFocus && returnFocus.focus)returnFocus.focus();
  }
  index.addEventListener('click',e=>{
    const btn=e.target.closest('[data-learning-index]');
    if(btn)select(Number(btn.dataset.learningIndex));
  });
  document.getElementById('learning-prev').addEventListener('click',()=>select(active-1));
  document.getElementById('learning-next').addEventListener('click',()=>select(active+1));
  document.getElementById('learning-modal-prev').addEventListener('click',()=>{select(active-1);openModal();});
  document.getElementById('learning-modal-next').addEventListener('click',()=>{select(active+1);openModal();});
  modalClose.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('is-open'))return;
    if(e.key==='Escape')closeModal();
    if(e.key==='ArrowRight'){select(active+1);openModal();}
    if(e.key==='ArrowLeft'){select(active-1);openModal();}
  });
  select(0);
})();
