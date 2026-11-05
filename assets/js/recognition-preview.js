
(() => {
  const items = [
    {title:'Digital Champion',file:'digital-milestone.webp'},
    {title:'(S)miles Award',file:'smiles-award.webp'},
    {title:'Applause for Team',file:'applause-team-award.webp'},
    {title:'On The Spot Award',file:'on-the-spot-award.webp'}
  ];
  const board = document.getElementById('recognition-board');
  const preview = document.getElementById('recognition-preview');
  const previewImage = document.getElementById('recognition-preview-image');
  const previewTitle = document.getElementById('recognition-preview-title');
  const close = document.getElementById('recognition-preview-close');
  if (!board || !preview) return;
  let activeCard = null, raf = 0, lastPointer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function openPreview(index) {
    const item = items[index];
    if (!item) return;
    previewImage.src = 'assets/recognition/' + item.file;
    previewImage.alt = item.title;
    previewTitle.textContent = item.title;
    preview.classList.add('is-open');
    preview.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    close.focus();
  }
  function closePreview() {
    preview.classList.remove('is-open');
    preview.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  close.addEventListener('click',closePreview);
  preview.addEventListener('click',e=>{if(e.target===preview)closePreview();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview();});

  document.querySelectorAll('[data-recognition]').forEach(button=>{
    button.addEventListener('click',()=>{
      const index=Number(button.getAttribute('data-recognition'));
      if (button.classList.contains('pin-card')) {
        button.classList.add('is-selected');
        window.setTimeout(()=>button.classList.remove('is-selected'),420);
      }
      openPreview(index);
    });
  });

  // Spring-like pointer interaction: cards follow the pointer with a soft, damped swing.
  const cards=[...board.querySelectorAll('.pin-card')];
  const states=cards.map((card,i)=>({card,angle:0,velocity:0,rest:[-5,3.5,-2.5,4][i],target:[-5,3.5,-2.5,4][i]}));
  function animate(){
    raf=requestAnimationFrame(animate);
    states.forEach(state=>{
      const stiffness=reduced?0:0.16;
      const damping=0.76;
      const acceleration=(state.target-state.angle)*stiffness;
      state.velocity=(state.velocity+acceleration)*damping;
      state.angle+=state.velocity;
      state.card.style.setProperty('--angle',state.angle+'deg');
    });
  }
  function setHovered(card){
    if(activeCard===card)return;
    if(activeCard){
      const old=states.find(s=>s.card===activeCard);
      if(old)old.target=old.rest;
      activeCard.classList.remove('is-hovered');
    }
    activeCard=card;
    if(activeCard){
      const state=states.find(s=>s.card===activeCard);
      if(state)state.target=state.rest+(state.rest>=0?7:-7);
      activeCard.classList.add('is-hovered');
    }
  }
  cards.forEach(card=>{
    card.addEventListener('pointerenter',()=>setHovered(card));
    card.addEventListener('pointerleave',()=>setHovered(null));
    card.addEventListener('focus',()=>setHovered(card));
    card.addEventListener('blur',()=>setHovered(null));
    card.addEventListener('pointermove',e=>{
      if(reduced)return;
      const rect=card.getBoundingClientRect();
      const offset=(e.clientX-(rect.left+rect.width/2))/(rect.width/2);
      card.style.setProperty('--lift',Math.max(-3,Math.min(3,offset*2))+'px');
    });
    card.addEventListener('pointerleave',()=>card.style.setProperty('--lift','0px'));
  });
  if(!reduced)animate();
  window.addEventListener('pagehide',()=>cancelAnimationFrame(raf),{once:true});
})();
