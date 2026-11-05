
(function(){
 const tabs=[...document.querySelectorAll('.image-tab')];
 const destinations={about:['about'],work:['work'],contact:['contact']};
 const sections=[...document.querySelectorAll('main .section[id]')];
 function activate(tab, shouldScroll=true){
   const key=tab.dataset.tab;
   tabs.forEach(t=>{const on=t===tab;t.classList.toggle('is-active',on);t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;});
   const visible=new Set(destinations[key]||[]);
   sections.forEach(section=>{section.hidden=!visible.has(section.id);});
   document.querySelectorAll('[data-nav-tab]').forEach(a=>a.classList.toggle('active',a.dataset.navTab===key));
   if(shouldScroll){const target=sections.find(section=>visible.has(section.id));(target||document.getElementById('explore')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
 }
 tabs.forEach((t,i)=>{t.addEventListener('click',()=>activate(t));t.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=i;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;tabs[n].focus();activate(tabs[n]);});});
 document.querySelectorAll('[data-nav-tab]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const tab=tabs.find(t=>t.dataset.tab===a.dataset.navTab);if(tab)activate(tab);}));
 // Open the work tab by default: hiring visitors should reach the evidence without an extra decision.
 const defaultTab=tabs.find(t=>t.dataset.tab==='work');
 if(defaultTab) activate(defaultTab,false);
 else sections.forEach(section=>section.hidden=true);

 // Hero calls to action must reveal their destination section before scrolling to it.
 document.querySelectorAll('.hero .actions a[href="#work"], .hero .actions a[href="#contact"]').forEach(link=>{
   link.addEventListener('click',e=>{
     const targetId=link.getAttribute('href').slice(1);
     const tab=tabs.find(t=>t.dataset.tab===targetId);
     const target=document.getElementById(targetId);
     if(!tab||!target)return;
     e.preventDefault();
     activate(tab,false);
     history.replaceState(null,'','#'+targetId);
     requestAnimationFrame(()=>target.scrollIntoView({
       behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',
       block:'start'
     }));
   });
 });

 // Work sub-navigation: projects and product craft.
 const workTabs=[...document.querySelectorAll('[data-work-tab]')];
 const workPanels=[...document.querySelectorAll('.work-panel')];
 function activateWorkTab(btn){const key=btn.dataset.workTab;workTabs.forEach(t=>{const on=t===btn;t.classList.toggle('is-active',on);t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;});workPanels.forEach(p=>p.hidden=p.id!=='work-panel-'+key);}
 function selectWorkTab(btn){
   if(btn.dataset.workTab==='playbooks'){
     if(typeof window.openReadingRoomStandalone==='function') window.openReadingRoomStandalone();
     return;
   }
   activateWorkTab(btn);
 }
 workTabs.forEach((btn,i)=>{btn.addEventListener('click',()=>selectWorkTab(btn));btn.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End','Enter',' '].includes(e.key))return;e.preventDefault();if(e.key==='Enter'||e.key===' '){selectWorkTab(btn);return;}let n=i;if(e.key==='ArrowRight')n=(i+1)%workTabs.length;if(e.key==='ArrowLeft')n=(i-1+workTabs.length)%workTabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=workTabs.length-1;workTabs[n].focus();selectWorkTab(workTabs[n]);});});
 // About sub-navigation: always open on the personal introduction, never an empty panel.
 const aboutTabs=[...document.querySelectorAll('[data-about-tab]')];
 const aboutPanels=[...document.querySelectorAll('.about-subpanel')];
 function activateAboutTab(btn){
   const key=btn.dataset.aboutTab;
   aboutTabs.forEach(t=>{const active=t===btn;t.classList.toggle('is-active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
   aboutPanels.forEach(panel=>{panel.hidden=panel.id!=='about-panel-'+key;});
 }
 const defaultAboutTab=aboutTabs.find(btn=>btn.dataset.aboutTab==='intro')||aboutTabs[0];
 if(defaultAboutTab) activateAboutTab(defaultAboutTab);
 aboutTabs.forEach((btn,i)=>{
   btn.addEventListener('click',()=>activateAboutTab(btn));
   btn.addEventListener('keydown',e=>{
     if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;
     e.preventDefault();let n=i;
     if(e.key==='ArrowRight')n=(i+1)%aboutTabs.length;
     if(e.key==='ArrowLeft')n=(i-1+aboutTabs.length)%aboutTabs.length;
     if(e.key==='Home')n=0;if(e.key==='End')n=aboutTabs.length-1;
     aboutTabs[n].focus();activateAboutTab(aboutTabs[n]);
   });
 });
 const guides=[{"num": "01", "title": "Problem framing", "cat": "Thinking", "sub": "Start with the job, not the proposed feature.", "steps": [["01 · Describe the situation", "Who is trying to do what, in which context? Write the user, trigger, task and desired progress in one sentence."], ["02 · Locate the friction", "Trace the current journey. Mark the moment effort, uncertainty, delay or failure appears. Separate what you observed from what you infer."], ["03 · Test the explanation", "List plausible causes. Ask what evidence would distinguish them. Check frequency, severity and who is affected."], ["04 · Frame the opportunity", "State the user problem, business consequence, constraints and what a better outcome would look like."]], "output": "A useful output"}, {"num": "02", "title": "First principles", "cat": "Thinking", "sub": "Separate what is known from what is merely familiar.", "steps": [["01 · State the belief", "Write the assumption behind the current approach in plain language."], ["02 · Break it apart", "Separate facts, constraints, conventions and preferences. Ask which parts are genuinely fixed."], ["03 · Rebuild from the goal", "Define the outcome that must be achieved, then derive the simplest path that could achieve it."], ["04 · Check reality", "Validate against user behaviour, technical limits, economics, policy and operational cost."]], "output": "A useful output"}, {"num": "03", "title": "Systems thinking", "cat": "Thinking", "sub": "A product is a network of people, processes, incentives and feedback loops.", "steps": [["01 · Set the boundary", "Define the outcome and the part of the system you can influence."], ["02 · Map the actors and flows", "Show users, teams, tools, hand-offs, information and decisions. Follow where work or context gets lost."], ["03 · Find the reinforcing forces", "Look for incentives, delays, bottlenecks, dependencies and feedback loops that keep the problem in place."], ["04 · Change the leverage point", "Prefer a change that improves several connected steps over a local fix that shifts the burden elsewhere."]], "output": "A useful output"}, {"num": "04", "title": "Product discovery", "cat": "Product craft", "sub": "Discovery is not a workshop. It is a disciplined way to learn what is worth building.", "steps": [["01 · Name the uncertainty", "Is the risk about desirability, usability, feasibility, viability or adoption?"], ["02 · Rank the assumptions", "Prioritise assumptions by impact if wrong and how little you know."], ["03 · Choose the cheapest credible test", "Use interviews for motivations, observation for behaviour, prototypes for comprehension and experiments for measurable response."], ["04 · Decide what the evidence means", "Define success, failure and next steps before the test. Record what changed in your understanding."]], "output": "A useful output"}, {"num": "05", "title": "Product requirements", "cat": "Product craft", "sub": "Good requirements describe what must happen, including when things do not go as planned.", "steps": [["01 · Anchor the requirement", "State the user, need, context and outcome."], ["02 · Describe the flow", "Map entry points, decisions, system responses, permissions and exit states."], ["03 · Include the edges", "Cover empty, loading, error, retry, duplicate, partial completion, undo and recovery states where relevant."], ["04 · Make it verifiable", "Write acceptance criteria as observable behaviour. Identify dependencies, non-goals and open questions."]], "output": "A useful output"}, {"num": "06", "title": "Decision making", "cat": "Product craft", "sub": "A good decision is not the one with no trade-offs. It is the one whose trade-offs are understood.", "steps": [["01 · Define the decision", "Write what must be decided, by whom and by when."], ["02 · Set the criteria", "Use user value, business relevance, confidence, effort, risk and reversibility."], ["03 · Compare real options", "Include doing nothing and a smaller alternative. Make opportunity cost explicit."], ["04 · Record the call", "Document the choice, rationale, assumptions, owner and signal that would trigger a review."]], "output": "A useful output"}, {"num": "07", "title": "Writing that works", "cat": "Communication", "sub": "Lead with the point. Give the reader only the context needed to understand it.", "steps": [["01 · Know the reader’s decision", "What do they need to understand, choose or do after reading?"], ["02 · Put the answer first", "Use a clear claim or recommendation before background detail."], ["03 · Make the logic visible", "Connect evidence to interpretation, then to implication. Replace vague claims with concrete examples."], ["04 · Edit for signal", "Remove repeated ideas, inflated language, unexplained terms and detail that does not change the decision."]], "output": "A useful output"}, {"num": "08", "title": "Clear communication", "cat": "Communication", "sub": "Shared understanding comes from explicit context, not simply more updates.", "steps": [["01 · Establish the frame", "State the goal, current situation and why it matters now."], ["02 · Separate status from risk", "Say what is done, what is uncertain, what is blocked and what needs a decision."], ["03 · Make the ask precise", "Name the decision or action, the owner and the deadline."], ["04 · Close the loop", "Record the outcome and communicate what changes as a result."]], "output": "A useful output"}];
 const dialog=document.getElementById('book-dialog');let lastFocus=null;let currentGuide=null;let currentPage=0;
 const pageNames=['Cover','Contents','The situation','Core principles','Step 01','Step 02','Step 03','Step 04','Working canvas','Worked example','Common traps','Review & next move'];
 function pageData(b){
   const [s1,s2,s3,s4]=b.steps;
   const playbookDetails={
    'Problem framing':{
      situation:'A request is usually a proposed answer. Before accepting it, understand the job, the moment it matters and the cost of the current experience.',
      principles:['Describe behaviour before proposing a solution.','Separate the person’s goal from the organisation’s requested feature.','Treat symptoms as clues, not explanations.','Make the boundary of the problem explicit.'],
      example:'A team asks for a dashboard. The useful question is not “Which charts?” but “What decision is currently difficult, for whom, and what information is missing at that moment?”',
      traps:['Starting with the requested feature.','Defining the user as “everyone”.','Using a broad problem statement with no observable friction.','Confusing a business metric with the user problem.'],
      worksheet:['User / actor','Triggering situation','Job they are trying to complete','Observed friction','Evidence available','Likely cause(s)','Desired progress','Constraints and non-goals','What we still need to learn'],
      finish:'A crisp problem brief that makes the user, situation, friction, evidence, desired progress and boundaries unmistakable.'
    },
    'First principles':{
      situation:'Inherited workflows, familiar patterns and industry conventions can masquerade as immutable constraints. This guide helps distinguish what must remain true from what merely happens to be true today.',
      principles:['Start from the outcome, not the existing process.','Label facts, constraints, assumptions and preferences separately.','Challenge the mechanism, not reality itself.','Rebuild the smallest coherent solution and test it against the world.'],
      example:'“Users must fill out this long form” may be convention, not a hard requirement. The real constraint may be that the system needs four verified data points before a transaction can proceed.',
      traps:['Rejecting a convention without understanding why it exists.','Treating every assumption as false.','Ignoring compliance, economics or operational realities.','Optimising simplicity at the expense of the actual outcome.'],
      worksheet:['Desired outcome','Current belief or rule','Evidence supporting it','Type: fact / constraint / assumption / preference','What breaks if removed?','Underlying need','Alternative mechanism','Reality checks'],
      finish:'A short decision note showing what is truly fixed, what can change and the simplest credible way forward.'
    },
    'Systems thinking':{
      situation:'When fixing one part of an experience makes another part worse, the problem is probably connected to a wider system of incentives, hand-offs, information and delays.',
      principles:['Choose a system boundary that matches the outcome.','Map relationships and flows, not just components.','Look for feedback loops and unintended consequences.','Find leverage where a small change shifts the wider pattern.'],
      example:'Support tickets rise after a new self-serve flow. The flow may be reducing contact at one step while creating confusion later. Map the whole journey before celebrating the local improvement.',
      traps:['Drawing a stakeholder map and calling it a system map.','Listing factors without showing causal links.','Optimising one team’s metric while shifting cost elsewhere.','Choosing a visible symptom over a leverage point.'],
      worksheet:['Outcome and boundary','Actors and incentives','Inputs / information','Key hand-offs','Delays and bottlenecks','Reinforcing loops','Balancing forces','Possible leverage points','Side effects to monitor'],
      finish:'A causal system map with a clearly argued leverage point and the downstream effects worth monitoring.'
    },
    'Product discovery':{
      situation:'Discovery is the work of reducing consequential uncertainty before committing to a solution. It should produce decisions, not just activities or workshop outputs.',
      principles:['Frame the opportunity before selecting a method.','Prioritise assumptions by consequence and uncertainty.','Match the test to the kind of uncertainty.','Define interpretation and decision rules before collecting evidence.'],
      example:'If users say they want a feature, interviews can explain the motivation; observation can reveal the workaround; a prototype can test comprehension; a live experiment can test behavioural response.',
      traps:['Running interviews without a decision in mind.','Treating stated preference as proof of behaviour.','Testing several assumptions at once.','Collecting findings without changing a product decision.'],
      worksheet:['Opportunity statement','Desirability / usability / feasibility / viability risk','Critical assumptions','Impact if wrong','Current confidence','Cheapest credible test','Success / failure signal','Decision after learning'],
      finish:'A prioritised learning plan that links each important assumption to a credible test and a decision it will inform.'
    },
    'Product requirements':{
      situation:'Requirements are a shared description of product behaviour. Their job is to remove ambiguity around the user goal, system response, boundaries and exceptional states.',
      principles:['Specify outcomes and observable behaviour.','Describe the end-to-end flow, not isolated screens.','Make edge cases first-class requirements.','Keep scope, dependencies and open questions visible.'],
      example:'“Allow users to save an item” is incomplete. Define where save begins, what confirms success, how duplicates behave, what happens offline, how users undo it and what happens if the destination disappears.',
      traps:['Writing requirements as a list of UI elements.','Leaving errors and recovery states until implementation.','Using vague terms such as fast, intuitive or seamless.','Hiding unresolved decisions in acceptance criteria.'],
      worksheet:['User and job','Entry points','Primary flow','Alternate paths','Loading / empty / error states','Permissions and data rules','Recovery and undo','Acceptance criteria','Dependencies / non-goals'],
      finish:'A reviewable product requirements brief with clear flows, acceptance criteria, edge states and unresolved decisions.'
    },
    'Decision making':{
      situation:'Product decisions are made with incomplete information and competing priorities. A good process makes the trade-offs visible and preserves the reasoning behind the call.',
      principles:['State the decision and deadline precisely.','Choose criteria before comparing options.','Include the cost of delay and doing nothing.','Match decision effort to reversibility and impact.'],
      example:'A team can polish onboarding, improve activation emails or fix a confusing first task. Compare options against user friction, expected impact, confidence, effort, dependencies and time-to-learn—not stakeholder volume.',
      traps:['Scoring options with arbitrary precision.','Treating every criterion as equally important.','Ignoring opportunity cost.','Reopening a decision because its rationale was never recorded.'],
      worksheet:['Decision to make','Decision owner and deadline','Options including do nothing','Criteria and weights','Evidence / confidence','Trade-offs','Chosen option and rationale','Reversal signal / review date'],
      finish:'A decision record that captures the choice, alternatives, rationale, owner, assumptions and conditions for revisiting it.'
    },
    'Writing that works':{
      situation:'Good writing reduces the effort required to understand an idea and act on it. It is organised around the reader’s decision, not the writer’s process of discovery.',
      principles:['Lead with the conclusion or recommendation.','Give only the context needed to evaluate it.','Connect evidence to interpretation and implication.','Use concrete language and remove decorative complexity.'],
      example:'Instead of “There are a number of considerations around onboarding”, write “New users reach the dashboard before completing the first task; move the task prompt into the first session.” Then show the evidence and trade-off.',
      traps:['Burying the point beneath background.','Using abstract nouns where actions would be clearer.','Making claims without evidence.','Editing for elegance while leaving the logic incomplete.'],
      worksheet:['Reader and decision','One-sentence point','Minimum context','Evidence','Interpretation','Implication','Recommendation / ask','What can be removed?'],
      finish:'A concise, decision-oriented document where the claim, evidence, reasoning and requested action are easy to follow.'
    },
    'Clear communication':{
      situation:'Communication breaks down when people have different mental models of the goal, status, risk or next action. More updates do not automatically create shared understanding.',
      principles:['Establish the shared frame before the detail.','Separate completed work from confidence and risk.','Make the ask, owner and timing explicit.','Close the loop by recording what changed.'],
      example:'“We are making progress” tells a reader very little. “The prototype is ready for usability review; the main risk is unclear permission handling; we need a policy decision by Thursday” gives them something to act on.',
      traps:['Confusing activity with progress.','Reporting status without naming risk.','Making an ask with no owner or deadline.','Failing to communicate the decision after a meeting.'],
      worksheet:['Shared goal','Current state','What changed','What is blocked / uncertain','Risk and implication','Decision or action needed','Owner and due date','Next checkpoint'],
      finish:'A compact update or decision brief that leaves every reader clear on status, risk, ownership and the next move.'
    }
   };
   const d=playbookDetails[b.title];
   const esc=x=>x;
   const list=arr=>'<ul>'+arr.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>';
   const step=(st,n)=>({kicker:'THE METHOD · STEP '+String(n).padStart(2,'0'),title:st[0],html:'<p>'+st[1]+'</p><div class="reader-prompt"><strong>Apply it</strong><br>'+({
    1:'Write the output of this step in plain language. Keep it specific enough that someone else could challenge it.',
    2:'Mark what is known, inferred and still uncertain. Do not let a guess quietly become a fact.',
    3:'Identify the decision this step unlocks. If it unlocks no decision, reconsider the work.',
    4:'Record the choice, its rationale and what would cause you to revisit it.'
   }[n])+'</div>'});
   return [
    {kicker:'FIELD MANUAL · '+b.num+' / '+b.cat.toUpperCase(),title:b.title,html:'<p class="book-deck">'+b.sub+'</p><div class="reader-cover-mark">A PRACTICAL PRODUCT FIELD GUIDE</div><p class="book-cover-note">A working method for clearer judgement and more useful product decisions.</p>'},
    {kicker:'IN THIS BOOK',title:'A route through the work.',html:'<ol class="book-contents">'+pageNames.slice(2).map((n,i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span>'+n+'</li>').join('')+'</ol><div class="reader-callout">Read from the beginning for the full method, or use the page index to jump to the part you need.</div>'},
    {kicker:'ORIENTATION · THE CONTEXT',title:'Understand the situation first.',html:'<p>'+d.situation+'</p><p><strong>Use this guide when:</strong> '+(b.sub||'the work needs a clearer frame.')+'</p><p><strong>Bring to the page:</strong> the current context, the people affected, the information you have and the constraints that shape the work.</p>'},
    {kicker:'THE PRINCIPLES',title:'Four ideas to keep in view.',html:list(d.principles)+'<div class="reader-callout">These principles are guardrails, not a checklist. Use them to question the quality of the reasoning as you work.</div>'},
    step(s1,1),step(s2,2),step(s3,3),step(s4,4),
    {kicker:'WORKING CANVAS · MAKE IT YOURS',title:'A page to think on.',html:'<p>Use this canvas to capture the essential thinking. Keep the answers short; the value is in making the logic visible.</p><ol class="book-canvas">'+d.worksheet.map(x=>'<li>'+x+' <span>................................................................................</span></li>').join('')+'</ol>'},
    {kicker:'WORKED EXAMPLE · SEE THE METHOD',title:'What this can look like in practice.',html:'<p>'+d.example+'</p><div class="reader-prompt"><strong>Try the transfer</strong><br>Take a current product question and rewrite it using the same logic. What becomes clearer? What assumption becomes visible?</div>'},
    {kicker:'WATCH OUT · COMMON TRAPS',title:'Where the work tends to go wrong.',html:list(d.traps)+'<div class="reader-callout">A useful test: if the output sounds polished but does not change what someone understands, decides or does, the work is not finished.</div>'},
    {kicker:'CLOSE THE LOOP · REVIEW',title:'Make the next move clear.',html:'<p><strong>What you should leave with:</strong> '+d.finish+'</p><p>Before you share it, check:</p><ul><li>Can another person understand the context without a verbal handover?</li><li>Are facts, interpretations and assumptions distinguishable?</li><li>Is the decision or next action explicit?</li><li>Are constraints and unresolved questions visible?</li><li>Is there a signal that tells you what to learn next?</li></ul><div class="reader-callout">Finish by naming the owner, the next action and the moment you will review what happened.</div>'}
   ];
 }
 function renderReaderPage(){
   const b=currentGuide,pages=pageData(b),page=pages[currentPage];
   document.getElementById('reader-counter').textContent=String(currentPage+1).padStart(2,'0')+' / '+String(pages.length).padStart(2,'0');
   document.getElementById('reader-progress-fill').style.width=((currentPage+1)/pages.length*100)+'%';
   document.getElementById('reader-page-kicker').textContent=page.kicker;
   document.getElementById('reader-page-heading').textContent=page.title;
   document.getElementById('reader-page-content').innerHTML=page.html;
   document.getElementById('reader-page-label').textContent=pageNames[currentPage];
   document.getElementById('reader-prev').disabled=currentPage===0;
   document.getElementById('reader-next').textContent=currentPage===pages.length-1?'Finish ✓':'Next page →';
   document.getElementById('reader-next').disabled=false;
   const toc=document.getElementById('reader-toc');toc.innerHTML='';
   pageNames.forEach((name,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1).padStart(2,'0');button.title=name;if(i===currentPage)button.setAttribute('aria-current','page');button.addEventListener('click',()=>{currentPage=i;renderReaderPage();});toc.append(button);});
   document.getElementById('reader-page').focus({preventScroll:true});
 }
 function openBook(i){currentGuide=guides[i];if(!currentGuide)return;lastFocus=document.activeElement;currentPage=0;document.getElementById('book-dialog-meta').textContent='FIELD GUIDE · '+currentGuide.num+' / '+currentGuide.cat.toUpperCase();document.getElementById('book-dialog-title').textContent=currentGuide.title;document.getElementById('book-dialog-intro').textContent=currentGuide.sub;dialog.hidden=false;document.body.style.overflow='hidden';renderReaderPage();dialog.querySelector('.dialog-close').focus();}
 function closeBook(){dialog.hidden=true;document.body.style.overflow='';if(lastFocus)lastFocus.focus();}
 document.querySelectorAll('[data-book]').forEach(x=>x.addEventListener('click',()=>openBook(Number(x.dataset.book))));
 document.querySelectorAll('[data-close-book]').forEach(x=>x.addEventListener('click',closeBook));
 document.getElementById('reader-prev').addEventListener('click',()=>{if(currentPage>0){currentPage--;renderReaderPage();}});
 document.getElementById('reader-next').addEventListener('click',()=>{if(currentPage<pageData(currentGuide).length-1){currentPage++;renderReaderPage();}else closeBook();});
 document.addEventListener('keydown',e=>{if(dialog.hidden)return;if(e.key==='Escape')closeBook();if(e.key==='ArrowRight'&&currentPage<pageData(currentGuide).length-1){currentPage++;renderReaderPage();}if(e.key==='ArrowLeft'&&currentPage>0){currentPage--;renderReaderPage();}});
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('is-active',x===btn);x.setAttribute('aria-pressed',String(x===btn));});document.querySelectorAll('.book-card').forEach(card=>card.hidden=btn.dataset.filter!=='all'&&card.dataset.category!==btn.dataset.filter);}));
})();
