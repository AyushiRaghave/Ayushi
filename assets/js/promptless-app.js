
const TOOLS = {
  cold_email: {
    name: "Email Writer", description: "Write a relevant first message or follow-up with a clear reason to connect and a natural next step.", outcome:"A sendable email draft with a relevant opening, clear reason for contact and a natural next step.", bestFor:"Introductions, partnership requests and thoughtful follow-ups.", qualityBar:["Uses only supplied facts", "Makes the reason for contact specific", "Ends with a natural, low-friction next step"], category:"COMMUNICATE",
    fields: [
      {name:"recipient",label:"Who are you contacting?",type:"text",placeholder:"e.g. A product leader at a SaaS company",required:true},
      {name:"objective",label:"What do you want to achieve?",type:"textarea",placeholder:"Explain the reason for reaching out and the next step you want.",required:true},
      {name:"context",label:"Why this recipient?",type:"textarea",placeholder:"Add one relevant detail about the person, organisation or previous interaction."},
      {name:"next_step",label:"What should happen next?",type:"text",placeholder:"e.g. A 15-minute call, a reply, feedback on the proposal"},
      {name:"tone",label:"Tone",type:"select",options:["Professional","Friendly","Direct","Warm and thoughtful"],value:"Professional"}
    ]
  },
  thread_generator: {
    name: "Thread Generator", description: "Turn a clear point of view and supporting ideas into a complete, connected social thread.", outcome:"A complete thread draft with connected posts, a clear point and a useful close.", bestFor:"Explaining an idea, sharing a lesson or building a point of view.", qualityBar:["Maintains one clear through-line", "Uses supplied supporting points without inventing evidence", "Each post advances the argument"], category:"COMMUNICATE",
    fields: [
      {name:"topic",label:"What is the main point?",type:"textarea",placeholder:"State the idea or argument you want readers to remember.",required:true,rows:4},
      {name:"supporting_points",label:"What should the thread cover?",type:"textarea",placeholder:"Add 2–4 supporting points, examples or steps. One per line.",required:true,rows:4},
      {name:"evidence",label:"Any example or evidence to include?",type:"textarea",placeholder:"Add a real example, observation, source or experience. Leave blank if you do not have one."},
      {name:"platform",label:"Platform",type:"select",options:["X","LinkedIn"],value:"X"},
      {name:"audience",label:"Who is it for?",type:"text",placeholder:"e.g. Startup founders, designers, product teams"},
      {name:"length",label:"Length",type:"select",options:["Concise (5 posts)","Expanded (7 posts)"],value:"Expanded (7 posts)"}
    ]
  },
  prompt_architect: {
    name: "Prompt Builder", description: "Create reusable AI instructions with the context, constraints and checks needed for consistent work.", outcome:"A reusable prompt with explicit context, instructions, output format and quality checks.", bestFor:"Repeatable AI tasks where output quality and consistency matter.", qualityBar:["Defines objective, context and constraints", "Specifies a usable output contract", "Includes acceptance checks and uncertainty handling"], category:"STRUCTURE",
    fields: [
      {name:"goal",label:"What should the AI do?",type:"textarea",placeholder:"Describe the task and the result you want.",required:true},
      {name:"context",label:"Relevant context",type:"textarea",placeholder:"Who will use it? What should the AI know?"},
      {name:"output",label:"Ideal output format",type:"select",options:["Structured text","Checklist","Table","JSON","Choose the best format"],value:"Choose the best format"},
      {name:"constraints",label:"Requirements or things to avoid",type:"textarea",placeholder:"Mention must-haves, limitations, and common failure modes."}
    ]
  },
  webpage_builder: {
    name: "Webpage Builder", description: "Turn a page brief into a responsive HTML page with a clear message, useful sections and a working structure.", outcome:"A responsive HTML page with a clear message, structured sections and a usable call to action.", bestFor:"Landing pages, product pages and focused campaign experiences.", qualityBar:["Uses semantic, responsive and accessible HTML", "Keeps claims grounded in the supplied brief", "Provides a clear primary action"], category:"CREATE",
    fields: [
      {name:"brief",label:"What should the page do?",type:"textarea",placeholder:"Describe the page, audience, content, and desired actions.",required:true,rows:5},
      {name:"style",label:"Visual direction",type:"select",options:["Modern editorial","Minimal and clean","Bold and expressive","Professional product"],value:"Modern editorial"},
      {name:"requirements",label:"Sections and content to include",type:"textarea",placeholder:"List the sections, information and interactions the page needs. Add final copy if you have it."},
    ]
  },
  brief_generator: {
    name: "Brief Generator", description: "Turn a loose request into a brief with clear scope, deliverables, ownership and acceptance criteria.", outcome:"A brief another person can act on, with scope, deliverables, constraints and acceptance criteria.", bestFor:"Handing work to a teammate, collaborator or AI workflow.", qualityBar:["Defines scope, deliverables and constraints", "Makes acceptance criteria explicit", "Surfaces unresolved ownership and decisions"], category:"STRUCTURE",
    fields: [
      {name:"request",label:"What needs to be done?",type:"textarea",placeholder:"Share the rough idea, request, or outcome you need to define.",required:true,rows:5},
      {name:"audience",label:"Who will use the brief?",type:"text",placeholder:"e.g. A designer, developer, product team, or AI tool"},
      {name:"context",label:"Background and relevant context",type:"textarea",placeholder:"What should the person know before starting?"},
      {name:"deliverable",label:"Expected output",type:"text",placeholder:"e.g. A landing page, research summary, product feature"},
      {name:"constraints",label:"Requirements and limits",type:"textarea",placeholder:"Must-haves, deadlines, tools, boundaries, or things to avoid."},
      {name:"success_criteria",label:"How will you judge success?",type:"textarea",placeholder:"What must be true for this work to be accepted?"},
      {name:"format",label:"Brief format",type:"select",options:["Concise action brief","Detailed project brief","Creative brief","AI-ready task brief"],value:"Concise action brief"}
    ]
  },
  problem_solver: {
    name: "Problem Solver", description: "Make a messy problem easier to act on by separating evidence, possible causes and the next useful test.", outcome:"A problem brief that separates knowns from assumptions and identifies the next test.", bestFor:"Messy decisions, blocked projects and situations with competing constraints.", qualityBar:["Separates reported facts from hypotheses", "Avoids claiming an unverified root cause", "Recommends a test that can change the decision"], category:"SOLVE",
    fields: [
      {name:"problem",label:"What problem are you facing?",type:"textarea",placeholder:"Describe what is happening and what you have tried.",required:true,rows:5},
      {name:"desired_outcome",label:"What would a good outcome look like?",type:"textarea",placeholder:"Describe the result you want."},
      {name:"constraints",label:"Constraints and limits",type:"textarea",placeholder:"Time, budget, tools, rules, risks, or things you cannot change."},
      {name:"tried",label:"What have you tried so far?",type:"textarea",placeholder:"Include what happened, including anything that partially worked."},
      {name:"approach",label:"How should the answer help?",type:"select",options:["Recommend the best path","Compare possible approaches","Give me step-by-step actions","Find the simplest workaround"],value:"Recommend the best path"}
    ]
  },
  workaround_suggester: {
    name: "Workaround Finder", description: "Find practical ways around a blocker while making effort, risk and trade-offs visible.", outcome:"A shortlist of routes to investigate, with the trade-offs made explicit.", bestFor:"Tool limitations, process blockers and time-sensitive workarounds.", qualityBar:["Respects permissions and security boundaries", "Explains effort, risk and reversibility", "Preserves the underlying goal"], category:"SOLVE",
    fields: [
      {name:"blocker",label:"What is blocked or not working?",type:"textarea",placeholder:"Explain the error, limitation, or obstacle.",required:true,rows:4},
      {name:"goal",label:"What are you ultimately trying to achieve?",type:"textarea",placeholder:"Describe the end result, not just the tool or step." ,required:true},
      {name:"available",label:"What can you use?",type:"textarea",placeholder:"Available tools, permissions, budget, skills, or time."},
      {name:"risk",label:"Preferred trade-off",type:"select",options:["Simplest reliable workaround","Fastest practical option","Free or low-cost option","Most robust long-term fix"],value:"Simplest reliable workaround"}
    ]
  },
  life_coach: {
    name: "Reflection & Next Step", description: "Work through a decision or difficult situation and leave with one realistic next action.", outcome:"A practical reflection that turns a difficult situation into one manageable next step.", bestFor:"Reflection, prioritisation and working through uncertainty.", qualityBar:["Stays practical and non-clinical", "Does not diagnose or make unsupported assumptions", "Ends with a manageable next action"], category:"REFLECT",
    fields: [
      {name:"situation",label:"What is going on?",type:"textarea",placeholder:"Share as much context as you are comfortable sharing.",required:true,rows:5},
      {name:"goal",label:"What would you like to change or achieve?",type:"textarea",placeholder:"What would feel meaningfully better?"},
      {name:"stuck_point",label:"What feels hardest right now?",type:"textarea",placeholder:"e.g. uncertainty, avoidance, competing priorities, a difficult conversation."},
      {name:"style",label:"What kind of support would help?",type:"select",options:["Kind but direct","Practical action plan","Help me think it through","Encouraging and grounded"],value:"Kind but direct"}
    ]
  },
  research_synthesizer: {
    name: "Compare & Decide", description: "Compare options against what matters to you, and make evidence gaps and trade-offs visible.", outcome:"A decision comparison that shows what is known, what is missing and what should decide the choice.", bestFor:"Evaluating alternatives before making a decision.", qualityBar:["Uses traceable and current sources when research is required", "Separates evidence, assumptions and unknowns", "Compares options against the supplied criteria"], category:"DECIDE",
    fields: [
      {name:"question",label:"What do you need to understand?",type:"textarea",placeholder:"State the question or decision you are researching.",required:true},
      {name:"options",label:"Which options are you considering?",type:"textarea",placeholder:"List the options you want to compare, one per line."},
      {name:"source_material",label:"What evidence do you already have?",type:"textarea",placeholder:"Paste notes, specifications, source excerpts or verified details. Do not include confidential information."},
      {name:"criteria",label:"What matters most?",type:"textarea",placeholder:"e.g. reliability, cost, ease, privacy, long-term value."},
      {name:"format",label:"Best output format",type:"select",options:["Recommendation with reasoning","Comparison table","Concise briefing","Questions to investigate next"],value:"Recommendation with reasoning"}
    ]
  },
  message_refiner: {
    name: "Message Refiner", description: "Make a message clearer and more natural without changing what you mean or how you relate to the reader.", outcome:"A cleaner version of your message that keeps your intent and relationship intact.", bestFor:"Important emails, delicate conversations and everyday communication.", qualityBar:["Preserves the original meaning and facts", "Adapts tone to the reader and purpose", "Returns complete rewritten alternatives when requested"], category:"COMMUNICATE",
    fields: [
      {name:"message",label:"Your original message",type:"textarea",placeholder:"Paste the message or rough thought you want to express.",required:true,rows:6},
      {name:"audience",label:"Who will read it?",type:"text",placeholder:"e.g. A colleague, friend, customer"},
      {name:"purpose",label:"What should the message achieve?",type:"text",placeholder:"e.g. Explain, request, set a boundary, persuade"},
      {name:"preserve",label:"What must stay unchanged?",type:"text",placeholder:"e.g. The deadline, boundary, promise or key detail"},
      {name:"tone",label:"Tone",type:"select",options:["Natural and clear","Warm","Firm and respectful","Professional","Persuasive","Thoughtful"],value:"Natural and clear"},
      {name:"variants",label:"Number of versions",type:"select",options:["1","2","3"],value:"2"}
    ]
  }
};
const $ = id => document.getElementById(id);
function storageGet(key){try{return localStorage.getItem(key)||"";}catch{return "";}}
function storageSet(key,value){try{localStorage.setItem(key,value);return true;}catch{return false;}}
function storageRemove(key){try{localStorage.removeItem(key);}catch{}}
let lastRequest = null, isBusy = false, lastRawResult = "", carryForwardNext = false;
const formDrafts = Object.create(null);
let activeToolId = null;
const HISTORY_KEY = "promptless_saved_work_v1";
const TOOL_ICONS = {
  cold_email:"✉", thread_generator:"≋", prompt_architect:"⌘",
  webpage_builder:"▧", brief_generator:"▤", problem_solver:"✳",
  workaround_suggester:"↗", life_coach:"♡", research_synthesizer:"⌕",
  message_refiner:"✎"
};
const TOOL_ACTIONS = {
  cold_email:["Write my email","✉"],thread_generator:["Build my thread","↗"],
  prompt_architect:["Build my prompt","⌘"],webpage_builder:["Create my webpage","▧"],
  brief_generator:["Create my brief","▤"],problem_solver:["Find a solution","⌕"],
  workaround_suggester:["Find alternatives","⇄"],life_coach:["Plan my next step","✦"],
  research_synthesizer:["Build my comparison","▦"],message_refiner:["Refine my message","✎"]
};
const OPTION_ICONS = {"Professional":"◈","Friendly":"♡","Direct":"↗","Warm and thoughtful":"☼","X":"𝕏","LinkedIn":"in","Short (4–6 posts)":"≡","Medium (7–10 posts)":"▤","Long (11–15 posts)":"▥","Structured text":"¶","Checklist":"☑","Table":"▦","JSON":"{}","Choose the best format":"✦","Modern editorial":"▤","Minimal and clean":"◻","Bold and expressive":"✳","Professional product":"◈","Complete single HTML file":"⌘","HTML with embedded CSS and JavaScript":"⌘","Accessible HTML structure":"♧","Recommend the best path":"↗","Compare possible approaches":"⇄","Give me step-by-step actions":"☷","Find the simplest workaround":"⌁","Simplest reliable workaround":"✓","Fastest practical option":"⚡","Free or low-cost option":"＄","Most robust long-term fix":"⌂","Kind but direct":"♡","Practical action plan":"☷","Help me think it through":"⌕","Encouraging and grounded":"☼","Recommendation with reasoning":"✦","Comparison table":"▦","Concise briefing":"▤","Questions to investigate next":"?","Natural and clear":"✎","Warm":"♡","Firm and respectful":"◈","Persuasive":"↗","Thoughtful":"✧"};
function renderTools(){
  const select=$("toolSelect");
  select.innerHTML=Object.entries(TOOLS).map(([id,t])=>`<option value="${id}">${escapeHTML(t.name)}</option>`).join("");
  const list=$("toolPickerList");
  list.innerHTML=Object.entries(TOOLS).map(([id,t],index)=>`
    <button class="tool-picker-option" type="button" role="option" id="tool-option-${id}" data-search="${escapeHTML(t.name+" "+t.description)}" data-value="${id}" aria-selected="${index===0?"true":"false"}">
      <span class="tool-option-icon" aria-hidden="true">${TOOL_ICONS[id]||"✦"}</span>
      <span class="tool-option-copy"><span class="tool-option-name">${escapeHTML(t.name)}</span><span class="tool-option-category">${escapeHTML(t.category||"WORKFLOW")}</span><span class="tool-option-description">${escapeHTML(t.description)}</span></span>
      <svg class="tool-option-check" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>
    </button>`).join("");
  syncToolPicker();
  renderForm();
}
function syncToolPicker(){
  const id=$("toolSelect").value, tool=TOOLS[id];
  if(!tool)return;
  $("toolPickerValue").textContent=tool.name;
  $("toolPickerIcon").textContent=TOOL_ICONS[id]||"✦";
  $("toolPickerList").querySelectorAll('[role="option"]').forEach(option=>{
    const selected=option.dataset.value===id;
    option.setAttribute("aria-selected",String(selected));
    option.classList.toggle("is-selected",selected);
  });
}
function closeToolPicker({restoreFocus=false}={}){
  const menu=$("toolPickerMenu"), trigger=$("toolPickerButton");
  menu.hidden=true;trigger.setAttribute("aria-expanded","false");
  if(carryForwardNext){carryForwardNext=false;hideNotice("formNotice");}
  $("toolPicker").classList.remove("is-open");
  const search=$("toolPickerSearch");if(search){search.value="";filterToolOptions("");}
  $("toolPicker").closest(".panel")?.classList.toggle("has-open-picker",!!$("toolPicker").closest(".panel")?.querySelector(".config-select.is-open,.tool-picker.is-open"));
  if(restoreFocus)trigger.focus();
}
function openToolPicker(){
  const menu=$("toolPickerMenu"), trigger=$("toolPickerButton");
  menu.hidden=false;trigger.setAttribute("aria-expanded","true");
  $("toolPicker").classList.add("is-open");
  $("toolPicker").closest(".panel")?.classList.add("has-open-picker");
  const selected=$("toolPickerList").querySelector('[aria-selected="true"]');
  selected?.scrollIntoView({block:"nearest"});
  $("toolPickerSearch")?.focus({preventScroll:true});
}
function chooseTool(id){
  if(!TOOLS[id])return;
  const carried=carryForwardNext?getCurrentResult():"";
  carryForwardNext=false;
  $("toolSelect").value=id;
  syncToolPicker();
  renderForm();
  if(carried){
    const carryFields={cold_email:"context",thread_generator:"supporting_points",prompt_architect:"context",webpage_builder:"requirements",brief_generator:"context",problem_solver:"tried",workaround_suggester:"available",life_coach:"situation",research_synthesizer:"source_material",message_refiner:"message"};
    const target=$("field_"+(carryFields[id]||TOOLS[id].fields.find(f=>f.type==="textarea")?.name));
    if(target){
      target.value=carried;
      target.dispatchEvent(new Event("input",{bubbles:true}));
      showNotice("formNotice","Previous result added as context. Review it before continuing.","info");
    }
  }
  closeToolPicker({restoreFocus:true});
}
function filterToolOptions(query){
  const q=String(query||"").trim().toLowerCase();let visible=0;
  $("toolPickerList")?.querySelectorAll(".tool-picker-option").forEach(option=>{
    const match=!q||option.dataset.search.toLowerCase().includes(q);
    option.hidden=!match;if(match)visible++;
  });
  const empty=$("toolPickerNoResults");if(empty)empty.hidden=visible>0;
}
function initToolPicker(){
  const trigger=$("toolPickerButton"),list=$("toolPickerList"),picker=$("toolPicker");
  trigger.addEventListener("click",()=>trigger.getAttribute("aria-expanded")==="true"?closeToolPicker():openToolPicker());
  $("toolPickerSearch")?.addEventListener("input",event=>filterToolOptions(event.target.value));
  $("toolPickerSearch")?.addEventListener("keydown",event=>{
    if(event.key==="ArrowDown"){event.preventDefault();$("toolPickerList").querySelector(".tool-picker-option:not([hidden])")?.focus();}
    if(event.key==="Escape"){event.preventDefault();closeToolPicker({restoreFocus:true});}
  });
  list.addEventListener("click",e=>{
    const option=e.target.closest('[role="option"]');
    if(option)chooseTool(option.dataset.value);
  });
  trigger.addEventListener("keydown",e=>{
    const ids=Object.keys(TOOLS),current=ids.indexOf($("toolSelect").value);
    if(["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault();openToolPicker();const next=e.key==="ArrowUp"?ids[Math.max(0,current-1)]:e.key==="ArrowDown"?ids[Math.min(ids.length-1,current+1)]:ids[current];list.querySelector(`[data-value="${next}"]`)?.focus();}
  });
  list.addEventListener("keydown",e=>{
    const options=[...list.querySelectorAll('[role="option"]:not([hidden])')],index=options.indexOf(document.activeElement);
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();options[Math.max(0,Math.min(options.length-1,index+(e.key==="ArrowDown"?1:-1)))].focus();}
    else if(e.key==="Home"||e.key==="End"){e.preventDefault();options[e.key==="Home"?0:options.length-1].focus();}
    else if(e.key==="Enter"||e.key===" "){e.preventDefault();document.activeElement.click();}
    else if(e.key==="Escape"){e.preventDefault();closeToolPicker({restoreFocus:true});}
    else if(e.key==="Tab"){closeToolPicker();}
  });
  document.addEventListener("pointerdown",e=>{if(!picker.contains(e.target))closeToolPicker();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&trigger.getAttribute("aria-expanded")==="true")closeToolPicker({restoreFocus:true});});
}
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function optionIcon(value,fieldName=""){
  if(fieldName==="variants") return value==="1"?"▤":value==="2"?"▤▤":"▤▤▤";
  const icon=OPTION_ICONS[value]||"✦";
  return icon===String(value).trim()?"✦":icon;
}
function buildCustomSelect(f,id){
  // Keep one canonical option per value. This also prevents duplicate labels in custom and native controls.
  const options=[...new Map((f.options||[]).map(o=>[String(o).trim().toLocaleLowerCase(),String(o).trim()])).values()];
  const selected=options.includes(f.value)?f.value:(options[0]||"");
  const iconFor=value=>optionIcon(value,f.name);
  const native=`<select class="native-select-proxy" id="${id}" name="${f.name}" tabindex="-1" aria-hidden="true">${options.map(o=>`<option value="${escapeHTML(o)}" ${o===selected?"selected":""}>${escapeHTML(o)}</option>`).join("")}</select>`;
  const menu=options.map((o,i)=>`<button type="button" class="config-option${o===selected?" is-selected":""}" role="option" aria-selected="${o===selected}" data-value="${escapeHTML(o)}" id="${id}-option-${i}"><span class="config-option-icon" aria-hidden="true">${escapeHTML(iconFor(o))}</span><span class="config-option-label">${escapeHTML(o)}</span><span class="config-option-check" aria-hidden="true">✓</span></button>`).join("");
  return `<div class="config-select" data-select-for="${id}"><button class="config-select-trigger" type="button" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-controls="${id}-list" aria-label="${escapeHTML(f.label)}"><span class="config-select-icon" aria-hidden="true">${escapeHTML(iconFor(selected))}</span><span class="config-select-value">${escapeHTML(selected)}</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg></button><div class="config-select-menu" id="${id}-list" role="listbox" hidden>${menu}</div>${native}</div>`;
}
function closeConfigSelects(except=null){
  document.querySelectorAll(".config-select.is-open").forEach(w=>{if(w===except)return;w.classList.remove("is-open","opens-up");w.querySelector(".config-select-trigger")?.setAttribute("aria-expanded","false");w.querySelector(".config-select-menu").hidden=true;});
  document.querySelectorAll(".panel").forEach(panel=>panel.classList.toggle("has-open-picker",!!panel.querySelector(".config-select.is-open,.tool-picker.is-open")));
}
function initConfigSelects(){
  const fields=$("fields");
  fields.addEventListener("click",e=>{
    const trigger=e.target.closest(".config-select-trigger");
    if(trigger){const wrap=trigger.closest(".config-select"),menu=wrap.querySelector(".config-select-menu"),opening=trigger.getAttribute("aria-expanded")!=="true";closeConfigSelects(wrap);wrap.classList.toggle("is-open",opening);menu.hidden=!opening;trigger.setAttribute("aria-expanded",String(opening));if(opening){const rect=trigger.getBoundingClientRect(),menuHeight=Math.min(menu.scrollHeight,window.innerHeight*.48),opensUp=window.innerHeight-rect.bottom<menuHeight+18&&rect.top>menuHeight+18;wrap.classList.toggle("opens-up",opensUp);wrap.closest(".panel")?.classList.add("has-open-picker");wrap.querySelector('[aria-selected="true"]')?.focus();}return;}
    const option=e.target.closest(".config-option");
    if(option){const wrap=option.closest(".config-select"),native=$(wrap.dataset.selectFor);native.value=option.dataset.value;native.dispatchEvent(new Event("change",{bubbles:true}));wrap.querySelectorAll(".config-option").forEach(o=>{const chosen=o===option;o.classList.toggle("is-selected",chosen);o.setAttribute("aria-selected",String(chosen));});wrap.querySelector(".config-select-value").textContent=option.dataset.value;wrap.querySelector(".config-select-icon").textContent=optionIcon(option.dataset.value,native.name);wrap.classList.remove("is-open","opens-up");wrap.querySelector(".config-select-menu").hidden=true;wrap.querySelector(".config-select-trigger").setAttribute("aria-expanded","false");wrap.closest(".panel")?.classList.toggle("has-open-picker",!!wrap.closest(".panel")?.querySelector(".config-select.is-open,.tool-picker.is-open"));wrap.querySelector(".config-select-trigger").focus();}
  });
  fields.addEventListener("keydown",e=>{
    const option=e.target.closest(".config-option");const trigger=e.target.closest(".config-select-trigger");
    if(trigger&&["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault();trigger.click();return;}
    if(!option)return;const wrap=option.closest(".config-select"),items=[...wrap.querySelectorAll(".config-option")],i=items.indexOf(option);
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();items[Math.max(0,Math.min(items.length-1,i+(e.key==="ArrowDown"?1:-1)))].focus();}
    else if(e.key==="Home"||e.key==="End"){e.preventDefault();items[e.key==="Home"?0:items.length-1].focus();}
    else if(e.key==="Enter"||e.key===" "){e.preventDefault();option.click();}
    else if(e.key==="Escape"){e.preventDefault();wrap.querySelector(".config-select-menu").hidden=true;wrap.classList.remove("is-open","opens-up");wrap.querySelector(".config-select-trigger").setAttribute("aria-expanded","false");wrap.closest(".panel")?.classList.toggle("has-open-picker",!!wrap.closest(".panel")?.querySelector(".config-select.is-open,.tool-picker.is-open"));wrap.querySelector(".config-select-trigger").focus();}
    else if(e.key==="Tab"){closeConfigSelects();}
  });
  document.addEventListener("pointerdown",e=>{if(!e.target.closest(".config-select"))closeConfigSelects();});
  fields.addEventListener("input",event=>{const field=event.target.closest("input,textarea");if(field){field.removeAttribute("aria-invalid");field.closest(".field")?.querySelector(".field-error")?.remove();}updateBriefProgress();});fields.addEventListener("change",event=>{const field=event.target.closest("select");if(field){field.removeAttribute("aria-invalid");field.closest(".field")?.querySelector(".field-error")?.remove();}updateBriefProgress();});
  fields.addEventListener("invalid",event=>{const field=event.target;if(!field.matches("input,textarea,select"))return;field.setAttribute("aria-invalid","true");const wrap=field.closest(".field");if(wrap&&!wrap.querySelector(".field-error")){const label=wrap.querySelector("label span")?.textContent||"this detail";const message=document.createElement("p");message.className="field-error";message.textContent=`Add ${label.toLowerCase()} to continue.`;wrap.appendChild(message);}},true);
}
const EMPTY_STATES = {
  cold_email:{scene:`<div class="mail-scene"><div class="mail-window"><div class="mail-top"><i></i><i></i><i></i><span>New message</span></div><div class="mail-line short"></div><div class="mail-line medium"></div><div class="mail-line long"></div><div class="mail-line medium"></div><div class="mail-signature"></div><div class="mail-send">Send thoughtfully <b>↗</b></div></div><div class="mail-orbit">✉</div><span class="scene-tag tag-one">Relevant</span><span class="scene-tag tag-two">Personal</span></div>`},
  thread_generator:{scene:`<div class="thread-scene"><div class="thread-rail"></div><div class="thread-card thread-card-a"><b>01</b><span class="skeleton w80"></span><span class="skeleton w55"></span><em>THE HOOK</em></div><div class="thread-card thread-card-b"><b>02</b><span class="skeleton w70"></span><span class="skeleton w90"></span><em>THE IDEA</em></div><div class="thread-card thread-card-c"><b>03</b><span class="skeleton w85"></span><span class="skeleton w50"></span><em>THE TAKEAWAY</em></div><div class="thread-node">↗</div></div>`},
  prompt_architect:{scene:`<div class="prompt-scene"><div class="prompt-layer layer-context"><span>CONTEXT</span><b>What the AI needs to know</b></div><div class="prompt-layer layer-role"><span>ROLE & TASK</span><b>What it needs to do</b></div><div class="prompt-layer layer-rules"><span>CONSTRAINTS</span><b>What good looks like</b></div><div class="prompt-core">✳</div><div class="prompt-spark">✦</div></div>`},
  webpage_builder:{scene:`<div class="web-scene"><div class="browser-frame"><div class="browser-bar"><i></i><i></i><i></i><span></span></div><div class="web-nav"><b>brand.</b><span></span><span></span><span class="web-nav-cta"></span></div><div class="web-hero"><div><i></i><b></b><b></b><span></span><small></small></div><div class="web-visual"><i>✦</i></div></div><div class="web-cards"><i></i><i></i><i></i></div></div><span class="web-breakpoint">RESPONSIVE</span></div>`},
  brief_generator:{scene:`<div class="brief-scene"><div class="brief-paper"><div class="brief-paper-head"><span>PROJECT BRIEF</span><b>↗</b></div><div class="brief-title-line"></div><div class="brief-title-line short"></div><div class="brief-section"><i>01</i><span><b>Objective</b><em></em></span></div><div class="brief-section"><i>02</i><span><b>Deliverables</b><em></em></span></div><div class="brief-section"><i>03</i><span><b>Constraints</b><em></em></span></div><div class="brief-stamp">READY TO SHARE</div></div><div class="brief-pin">✓</div></div>`},
  problem_solver:{scene:`<div class="problem-scene"><svg viewBox="0 0 340 190" aria-hidden="true"><path class="map-path path-a" d="M24 73 C78 73 96 16 160 16"/><path class="map-path path-b" d="M160 16 C160 48 160 86 160 118"/><path class="map-path path-c" d="M160 118 C224 118 242 73 296 73"/></svg><div class="map-node node-problem"><b>!</b><span>Problem</span></div><div class="map-node node-cause"><b>⌕</b><span>Cause</span></div><div class="map-node node-option"><b>⇄</b><span>Options</span></div><div class="map-node node-next"><b>✓</b><span>Next move</span></div><div class="map-pulse"></div></div>`},
  workaround_suggester:{scene:`<div class="route-scene"><div class="route-start">BLOCKED</div><div class="route-branch branch-a"><span>Route A</span><b>×</b></div><div class="route-branch branch-b"><span>Route B</span><b>↗</b></div><div class="route-branch branch-c"><span>Route C</span><b>✓</b></div><div class="route-finish">GOAL</div><div class="route-track track-a"></div><div class="route-track track-b"></div><div class="route-track track-c"></div></div>`},
  life_coach:{scene:`<div class="coach-scene"><div class="coach-ring ring-outer"></div><div class="coach-ring ring-inner"></div><div class="coach-compass">✦</div><div class="coach-step step-a"><i>01</i><span>Notice</span></div><div class="coach-step step-b"><i>02</i><span>Choose</span></div><div class="coach-step step-c"><i>03</i><span>Begin</span></div><div class="coach-marker">YOU ARE HERE</div></div>`},
  research_synthesizer:{scene:`<div class="research-scene"><div class="research-col"><div class="research-col-head">OPTION A</div><div class="research-score score-a">A</div><i class="research-bar bar-a"></i><i class="research-bar short"></i><i class="research-bar"></i><div class="research-verdict">Evidence pending</div></div><div class="research-vs">VS</div><div class="research-col chosen"><div class="research-col-head">OPTION B <b>↗</b></div><div class="research-score score-b">B</div><i class="research-bar bar-b"></i><i class="research-bar"></i><i class="research-bar short"></i><div class="research-verdict">Compare criteria</div></div><div class="research-foot">CRITERIA · EVIDENCE · TRADE-OFFS</div></div>`},
  message_refiner:{scene:`<div class="message-scene"><div class="message-card message-before"><span>YOUR DRAFT</span><div class="message-lines"><i></i><i></i><i></i><i></i></div></div><div class="message-transform">↘</div><div class="message-card message-after"><span>REFINED</span><div class="message-lines"><i></i><i></i><i></i></div><div class="message-check">✓</div></div></div>`}
};
function renderEmptyState(){
  const id=$("toolSelect")?.value||"cold_email", state=EMPTY_STATES[id]||EMPTY_STATES.cold_email;
  const el=$("emptyState"); if(!el)return;
  el.className=`result-empty empty-${id}`;
  el.innerHTML=`<div class="empty-experience"><div class="empty-scene empty-scene-${id}" aria-hidden="true">${state.scene}</div></div>`;
}

function renderForm(){
  if(activeToolId && activeToolId!==$("toolSelect").value) formDrafts[activeToolId]=getFormData();
  renderEmptyState();
  const toolId=$("toolSelect").value;
  const tool=TOOLS[toolId]; $("toolDescription").textContent=tool.description;
  const [actionLabel,actionIcon]=TOOL_ACTIONS[toolId]||["Build my result","↗"];
  const generateBtn=$("generateBtn");
  if(generateBtn)generateBtn.innerHTML=`<span>${actionLabel}</span><span aria-hidden="true">${actionIcon}</span>`;
  const context=$("toolContext");
  if(context)context.innerHTML=`<div class="tool-context-main"><span class="context-kicker">WHAT THIS WORKFLOW SHAPES</span><p>${escapeHTML(tool.outcome||tool.description)}</p></div><div class="tool-context-side"><span class="context-kicker">GOOD FIT FOR</span><p>${escapeHTML(tool.bestFor||"A focused everyday task")}</p></div>`;
  const renderField=f=>{
    const id="field_"+f.name, required=f.required?' <span class="field-state is-required">Essential</span>':'';
    let input="";
    if(f.type==="textarea") input=`<textarea id="${id}" name="${f.name}" placeholder="${escapeHTML(f.placeholder||"")}" ${f.required?"required":""} rows="${f.rows||4}" spellcheck="true"></textarea>`;
    else if(f.type==="select") input=buildCustomSelect(f,id);
    else input=`<input id="${id}" name="${f.name}" type="text" autocomplete="on" placeholder="${escapeHTML(f.placeholder||"")}" ${f.required?"required":""}>`;
    const wide=f.type==="textarea"?" is-wide":"";
    return `<div class="field${wide}"><label for="${id}"><span>${escapeHTML(f.label)}</span>${required}</label>${input}${f.help?`<p class="field-help">${escapeHTML(f.help)}</p>`:''}</div>`;
  };
  const essential=tool.fields.filter(f=>f.required), optional=tool.fields.filter(f=>!f.required);
  const optionalMarkup=optional.length?`<details class="optional-fields"><summary><span>Fine-tune your result</span><span class="optional-count">${optional.length} optional detail${optional.length===1?'':'s'}</span></summary><div class="optional-grid">${optional.map(renderField).join('')}</div></details>`:'';
  $("fields").innerHTML=`<div class="fields-heading"><div><span class="context-kicker">YOUR INPUT</span><h3>Let’s get the essentials</h3></div><span class="fields-note">You can add more detail if needed</span></div><div class="essential-grid">${essential.map(renderField).join('')}</div>${optionalMarkup}`;
  $("formNotice").className="notice"; $("formNotice").textContent="";
  const presetMap={
    brief_generator:[
      ["Feature launch",{request:"Define the work required to launch a new feature for an existing digital product.",audience:"Product, design and engineering team",context:"The feature should solve a clearly defined user problem and fit the current product experience.",deliverable:"A scoped feature brief with requirements and acceptance criteria",constraints:"Keep the first release focused. Identify dependencies and what is out of scope.",success_criteria:"The team can estimate the work, understand the user outcome and agree when the feature is complete."}],
      ["Website project",{request:"Create a clear project brief for a small business website redesign.",audience:"Business owner, designer and developer",context:"The current website does not explain the offer clearly or guide visitors towards the main action.",deliverable:"A responsive website with clear service pages and contact path",constraints:"Prioritise mobile usability, accessibility, fast loading and easy content updates.",success_criteria:"Visitors can understand the offer, find relevant information and complete the intended contact action."}]
    ],
    message_refiner:[
      ["Make a request",{message:"Hi, I just wanted to ask if you could share the updated timeline when you get a chance. It would be helpful to know what is still pending so I can plan the next steps."}],
      ["Set a boundary",{message:"I understand the request is urgent, but I cannot take this on by the current deadline without moving another agreed priority. Please let me know which item should take precedence."}]
    ],
    webpage_builder:[
      ["Service landing page",{brief:"A landing page for a small business offering bookkeeping services to solo consultants.",style:"Modern editorial",requirements:"Explain who the service is for and the problems it solves.\nShow three clear service areas.\nInclude a short process section and frequently asked questions.\nProvide a clear consultation enquiry action.",deliverable:"Complete single HTML file"}],
      ["Product waitlist page",{brief:"A waitlist page for a simple tool that helps freelancers track project profitability.",style:"Minimal and clean",requirements:"Explain the product in plain language.\nShow the core benefits without invented metrics.\nDescribe how it works in three steps.\nCollect an email address with a clear privacy note.",deliverable:"Complete single HTML file"}]
    ],
    thread_generator:[
      ["Explain a product lesson",{topic:"A product feature is only valuable when it solves a problem users actually have.",supporting_points:"Start with the user problem, not the feature request.\nLook for the behaviour or friction behind the request.\nDefine what should change for the user.\nChoose a measure that can show whether the change helped.",platform:"LinkedIn"}],
      ["Share a practical lesson",{topic:"A clear brief prevents expensive misunderstandings during execution.",supporting_points:"State the outcome before listing tasks.\nMake scope and exclusions explicit.\nDefine what an acceptable result looks like.\nResolve ownership and approval before work starts.",platform:"X"}]
    ],
    cold_email:[
      ["Warm introduction",{recipient:"A product leader at a B2B software company",objective:"Introduce my product work and explore whether there may be a relevant opportunity to contribute.",context:"I have experience across application support, requirements analysis and product-focused problem framing.",next_step:"a short conversation to understand the team's current priorities",tone:"Professional"}],
      ["Follow up on a proposal",{recipient:"A prospective client who has received a website proposal",objective:"Follow up on the proposal and understand whether the scope addresses their priorities.",context:"The proposal was shared earlier this week. I want to make it easy for them to ask questions or suggest changes.",next_step:"a reply with any questions or changes they would like to discuss",tone:"Warm and thoughtful"}]
    ],
    problem_solver:[
      ["Project is slipping",{problem:"A project is missing its planned milestones. Tasks are repeatedly blocked because decisions and dependencies are being resolved late.",desired_outcome:"Restore a realistic delivery plan and make the next two weeks predictable.",constraints:"The deadline cannot move. The team has limited capacity and several dependencies are owned by other teams.",tried:"The team has added more status meetings, but the same blockers keep returning.",approach:"Recommend the best path"}],
      ["Low conversion",{problem:"A landing page receives visits but very few visitors complete the enquiry form. The team is unsure whether the issue is the offer, page clarity or form friction.",desired_outcome:"Identify the most likely source of friction and define a small test.",constraints:"No major redesign or additional ad spend in the next two weeks.",tried:"The headline was changed, but no controlled comparison was run.",approach:"Compare possible approaches"}]
    ],
    workaround_suggester:[
      ["Access denied",{blocker:"The API request returns a 403 Forbidden response because the current account does not have permission for the endpoint.",goal:"Retrieve the approved data needed for the report without sharing credentials or bypassing access controls.",available:"An administrator can approve access. A scheduled export is also available.",risk:"Simplest reliable workaround"}],
      ["Workflow timeout",{blocker:"A workflow times out when processing a large batch of records. Smaller test batches complete successfully.",goal:"Complete the processing without losing records or creating duplicates.",available:"The workflow can be changed and the input can be split into batches.",risk:"Most robust long-term fix"}]
    ],
    life_coach:[
      ["Make a difficult decision",{situation:"I have two competing priorities and keep delaying the decision because each option has a downside.",goal:"Choose a direction and take one concrete step this week.",stuck_point:"I am trying to find an option with no risk, so I keep reopening the same decision.",style:"Kind but direct"}],
      ["Get unstuck",{situation:"I have a task I know matters, but I keep putting it off and switching to easier work.",goal:"Make meaningful progress without waiting to feel fully ready.",stuck_point:"The task feels too large and I am not sure where to begin.",style:"Practical action plan"}]
    ],
    research_synthesizer:[
      ["Choose a project tool",{question:"Which project management tool is the best fit for a small team that needs clear ownership and lightweight planning?",options:"Notion\nTrello\nLinear",criteria:"Ease of adoption\nTask ownership and visibility\nRecurring workflow support\nCost for a small team"}],
      ["Compare two approaches",{question:"Should the team build a small internal tool or adapt an existing SaaS product?",options:"Build a lightweight internal tool\nConfigure an existing SaaS product",criteria:"Time to first usable result\nTotal cost of ownership\nMaintenance burden\nData and access requirements"}]
    ],
    prompt_architect:[
      ["Research task",{goal:"Compare three project management tools for a small team and recommend the best fit.",context:"The team has five people, limited time for administration and needs clear task ownership.",constraints:"Use current primary sources for pricing and features. Separate verified facts from assumptions. Do not invent user reviews or benchmarks.",output:"A comparison table followed by a recommendation and key caveats"}],
      ["Creative task",{goal:"Develop three distinct landing-page concepts for a bookkeeping service aimed at solo consultants.",context:"The service helps clients keep records organised and understand their business finances.",constraints:"Avoid unsupported financial claims, generic stock phrases and exaggerated promises. Make each concept distinct in positioning.",output:"Three concepts with headline, supporting copy, page structure and rationale"}]
    ]
  };
  const presetArea=$("presetArea"); const presetsFor=presetMap[toolId]||[];
  presetArea.innerHTML=presetsFor.length?'<div class="preset-label">Try a realistic example</div>'+presetsFor.map((p,i)=>`<button type="button" class="preset-chip" aria-pressed="false" data-preset="${i}">${escapeHTML(p[0])}</button>`).join(""):"";
  presetArea.querySelectorAll("[data-preset]").forEach(btn=>btn.addEventListener("click",()=>{
    const preset=presetsFor[Number(btn.dataset.preset)];
    presetArea.querySelectorAll("[data-preset]").forEach(b=>b.setAttribute("aria-pressed",String(b===btn)));
    const values=typeof preset[1]==="string"?{[tool.fields.find(f=>f.type==="textarea")?.name]:preset[1]}:preset[1];
    Object.entries(values).forEach(([name,value])=>{
      const field=$("field_"+name);if(!field)return;
      field.value=value;
      if(field.tagName==="SELECT"){
        const wrap=field.closest(".config-select");
        if(wrap){wrap.querySelector(".config-select-value").textContent=value;wrap.querySelector(".config-select-icon").textContent=optionIcon(value,name);wrap.querySelectorAll(".config-option").forEach(option=>{const selected=option.dataset.value===value;option.classList.toggle("is-selected",selected);option.setAttribute("aria-selected",String(selected));});}
      }
      field.dispatchEvent(new Event("input",{bubbles:true}));
      field.dispatchEvent(new Event("change",{bubbles:true}));
    });
    const first=Object.keys(values).map(name=>$("field_"+name)).find(Boolean);first?.focus();
  }));
  const savedDraft=formDrafts[toolId];
  if(savedDraft){
    Object.entries(savedDraft).forEach(([name,value])=>{
      const field=$("field_"+name);if(!field)return;
      field.value=value;
      const wrap=field.closest(".config-select");
      if(wrap){
        wrap.querySelector(".config-select-value").textContent=value;
        wrap.querySelector(".config-select-icon").textContent=optionIcon(value,name);
        wrap.querySelectorAll(".config-option").forEach(option=>{
          const selected=option.dataset.value===value;
          option.classList.toggle("is-selected",selected);
          option.setAttribute("aria-selected",String(selected));
        });
      }
    });
  }
  activeToolId=toolId;
  updateBriefProgress();
}
function updateBriefProgress(){
  const tool=TOOLS[$("toolSelect").value];if(!tool)return;
  const required=tool.fields.filter(f=>f.required),complete=required.filter(f=>String($("field_"+f.name)?.value||"").trim()).length;
  const status=$("briefProgress");if(status){status.textContent=required.length?`${complete} of ${required.length} essential detail${required.length===1?"":"s"} added`:"Add the context that matters";status.classList.toggle("is-complete",complete===required.length);}
}
function getFormData(){
  const data={}; new FormData($("toolForm")).forEach((v,k)=>data[k]=String(v).trim()); return data;
}
const noticeTimers = Object.create(null);
function showNotice(id,msg,type="error"){
  const el=$(id); if(noticeTimers[id]) clearTimeout(noticeTimers[id]);
  el.className="notice "+type; el.textContent=msg; el.setAttribute("role",type==="error"?"alert":"status"); el.setAttribute("aria-live",type==="error"?"assertive":"polite"); el.classList.remove("toast-out");
  if(id==="resultNotice"){
    // Errors are brief, non-blocking feedback. The form stays intact for another attempt.
    noticeTimers[id]=setTimeout(()=>{el.classList.add("toast-out");setTimeout(()=>{if(el.classList.contains("toast-out")){el.className="notice";el.textContent="";}},220);},5200);
  }
}
function hideNotice(id){
  const el=$(id); if(noticeTimers[id]){clearTimeout(noticeTimers[id]);delete noticeTimers[id];}
  el.className="notice";el.textContent="";
}
function setBusy(b){
  isBusy=b; $("generateBtn").disabled=b;
  const [label,icon]=TOOL_ACTIONS[$("toolSelect").value]||["Build my result","↗"];
  $("generateBtn").innerHTML=b?'<span>Working…</span>':`<span>${label}</span><span aria-hidden="true">${icon}</span>`;
  $("loader").style.display=b?"flex":"none"; $("emptyState").style.display=b?"none":($("resultContent").style.display==="flex"?"none":"flex");
  if(b){$("resultContent").style.display="none";hideNotice("resultNotice");}
}

function getPlainOutput(){return $("output").innerText || $("output").textContent || "";}
function getCurrentResult(){
  const current=getPlainOutput().trim();
  return current||lastRawResult||"";
}
function readSavedWork(){
  try{const parsed=JSON.parse(storageGet(HISTORY_KEY)||"[]");return Array.isArray(parsed)?parsed:[];}catch{return [];}
}
function renderSavedWork(){
  const list=$("savedWorkList"),count=$("historyCount");
  if(!list||!count)return;
  const items=readSavedWork();
  count.textContent=String(items.length);
  list.innerHTML=items.length?items.map(item=>`<div class="saved-work-item"><button type="button" class="saved-work-open" data-load-saved="${escapeHTML(item.id)}"><strong>${escapeHTML(item.title||"Saved result")}</strong><span>${escapeHTML(item.date||"")}</span></button><button type="button" class="saved-work-delete" data-delete-saved="${escapeHTML(item.id)}" aria-label="Delete ${escapeHTML(item.title||"saved result")}">×</button></div>`).join(""):'<p class="saved-work-empty">Your saved results will appear here.</p>';
}
function saveCurrentResult(){
  const content=getCurrentResult();
  if(!content){showNotice("resultNotice","Generate a result before saving it.","info");return;}
  const items=readSavedWork(),toolType=lastRequest?.toolType||"result";
  const item={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:`${TOOLS[toolType]?.name||"Result"} · ${new Date().toLocaleDateString()}`,date:new Date().toLocaleString(),toolType,content,request:lastRequest?JSON.parse(JSON.stringify(lastRequest)):null};
  items.unshift(item);
  if(!storageSet(HISTORY_KEY,JSON.stringify(items.slice(0,20)))){showNotice("resultNotice","Your browser could not save this result. Check local storage settings.","error");return;}
  renderSavedWork();$("savedWorkList").hidden=false;$("historyToggle").setAttribute("aria-expanded","true");
  showNotice("resultNotice","Saved on this device. Reopen it from Saved work.","success");
}
function loadSavedResult(id){
  const item=readSavedWork().find(entry=>entry.id===id);if(!item)return;
  lastRequest=item.request||{toolType:item.toolType,input:{}};
  lastRawResult=item.content||"";
  configureOutput(item.toolType,lastRawResult);
  $("resultToolName").textContent=TOOLS[item.toolType]?.name||"Saved result";
  $("resultStatus").textContent="Saved on this device";
  $("resultContent").style.display="flex";$("emptyState").style.display="none";hideNotice("resultNotice");
  if(item.request?.toolType&&TOOLS[item.request.toolType]){
    $("toolSelect").value=item.request.toolType;syncToolPicker();renderForm();
    Object.entries(item.request.input||{}).forEach(([name,value])=>{
      const field=$("field_"+name);if(field){field.value=value;field.dispatchEvent(new Event("input",{bubbles:true}));}
    });
  }
}
function deleteSavedResult(id){
  storageSet(HISTORY_KEY,JSON.stringify(readSavedWork().filter(item=>item.id!==id)));renderSavedWork();
}
function extractHTML(text){
  let candidate=String(text||'').replace(/\r\n?/g,'\n').trim();
  // Models sometimes wrap the document in a code fence, omit the closing fence, or add a short intro.
  candidate=candidate.replace(/^\s*```(?:html|HTML)?\s*\n?/,'').replace(/\n?\s*```\s*$/,'').trim();
  const start=candidate.search(/<!doctype\s+html|<html(?:\s|>)/i);
  if(start>=0) candidate=candidate.slice(start);
  // If an HTML document exists, keep it intact; never treat an explanatory paragraph as HTML.
  return /<!doctype\s+html|<html(?:\s|>)/i.test(candidate) ? candidate : '';
}
function renderMarkdown(md){
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const inline=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/__(.+?)__/g,'<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,'$1<em>$2</em>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  const lines=String(md||'').replace(/\r\n?/g,'\n').split('\n'); let out=[], i=0;
  while(i<lines.length){let line=lines[i]; if(!line.trim()){i++;continue;}
    const fence=line.match(/^\s*```([\w+-]*)\s*$/);
    if(fence){let lang=fence[1], code=[];i++;while(i<lines.length&&!/^\s*```\s*$/.test(lines[i]))code.push(lines[i++]);if(i<lines.length)i++;out.push(`<pre><code class="language-${esc(lang)}">${esc(code.join('\n'))}</code></pre>`);continue;}
    if(/^\s*\|.*\|\s*$/.test(line)&&i+1<lines.length&&/^\s*\|?\s*:?-{3,}/.test(lines[i+1])){
      const cells=x=>x.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(v=>v.trim());const head=cells(line);i+=2;let rows=[];
      while(i<lines.length&&/^\s*\|.*\|\s*$/.test(lines[i])){rows.push(cells(lines[i]));i++;}
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map(c=>`<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${head.map((_,j)=>`<td>${inline(r[j]||'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);continue;
    }
    const hm=line.match(/^\s*(#{1,6})\s+(.+)$/);if(hm){let n=hm[1].length;out.push(`<h${n}>${inline(hm[2])}</h${n}>`);i++;continue;}
    if(/^\s*([-*_])\1\1+\s*$/.test(line)){out.push('<hr>');i++;continue;}
    if(/^\s*>/.test(line)){let q=[];while(i<lines.length&&/^\s*>/.test(lines[i]))q.push(inline(lines[i++].replace(/^\s*>\s?/,'')));out.push(`<blockquote>${q.join('<br>')}</blockquote>`);continue;}
    if(/^\s*[-*+]\s+/.test(line)){let items=[];while(i<lines.length&&/^\s*[-*+]\s+/.test(lines[i]))items.push(`<li>${inline(lines[i++].replace(/^\s*[-*+]\s+/,''))}</li>`);out.push(`<ul>${items.join('')}</ul>`);continue;}
    if(/^\s*\d+[.)]\s+/.test(line)){let items=[];while(i<lines.length&&/^\s*\d+[.)]\s+/.test(lines[i]))items.push(`<li>${inline(lines[i++].replace(/^\s*\d+[.)]\s+/,''))}</li>`);out.push(`<ol>${items.join('')}</ol>`);continue;}
    let para=[line.trim()];i++;while(i<lines.length&&lines[i].trim()&&!/^\s*(#{1,6}\s|```|[-*+]\s+|\d+[.)]\s+|>|\|.*\|\s*$)/.test(lines[i]))para.push(lines[i++].trim());out.push(`<p>${para.map(inline).join('<br>')}</p>`);
  }
  return `<div class="rendered-markdown">${out.join('\n')}</div>`;
}
function configureOutput(toolType,raw){
  const htmlCode=toolType==='webpage_builder'?extractHTML(raw):'';
  const looksMarkdown=/^\s*#{1,6}\s|\*\*|^\s*[-*+]\s|^\s*\d+[.)]\s|^\s*\|.*\|\s*$/m.test(raw);
  const showPreview=!!htmlCode || looksMarkdown || toolType==='cold_email' || toolType==='thread_generator' || toolType==='message_refiner';
  $('previewTabs').style.display=showPreview?'flex':'none'; $('htmlPreview').style.display='none'; $('markdownPreview').style.display='none'; $('output').style.display='block';
  $('output').classList.add('source-output'); $('output').textContent=htmlCode?htmlCode:raw; $('output').contentEditable='false';
  $('copyBtn').textContent=toolType==='webpage_builder'?'Copy HTML':toolType==='prompt_architect'?'Copy prompt':'Copy result';
  $('downloadBtn').style.display='inline-block'; $('downloadBtn').textContent=toolType==='webpage_builder'?'Download HTML':(looksMarkdown?'Download Markdown':'Download text');
  $('emailBtn').style.display=toolType==='cold_email'?'inline-block':'none'; $('previewTab').textContent='Preview'; $('sourceTab').textContent=htmlCode?'Source':'Text';
  // Keep the generated document mounted in the iframe. Reassigning srcdoc on
  // every tab switch can cause some browsers to reset the document and show a blank frame.
  if(htmlCode && $('htmlPreview').dataset.renderedHtml!==htmlCode){
    $('htmlPreview').srcdoc=htmlCode;
    $('htmlPreview').dataset.renderedHtml=htmlCode;
  }
  if(!htmlCode && showPreview) $('markdownPreview').innerHTML=renderMarkdown(raw);
  $('previewTab').onclick=()=>{
    $('output').style.display='none';
    $('htmlPreview').style.display='none';
    $('markdownPreview').style.display='none';
    if(htmlCode){
      $('htmlPreview').style.display='block';
      $('htmlPreview').style.visibility='visible';
      // Nudge layout after display changes so the iframe reliably paints again.
      void $('htmlPreview').offsetHeight;
    } else {
      $('markdownPreview').style.display='block';
    }
    $('previewTab').classList.add('active');$('sourceTab').classList.remove('active');
  };
  $('sourceTab').onclick=()=>{
    $('htmlPreview').style.display='none';$('markdownPreview').style.display='none';
    $('output').style.display='block';
    $('previewTab').classList.remove('active');$('sourceTab').classList.add('active');
  };
  if(showPreview){$('previewTab').classList.add('active');$('sourceTab').classList.remove('active');$('previewTab').click();} else {$('previewTabs').style.display='none';}
}
function buildRequest(toolType,input){
  const tool=TOOLS[toolType];
  return {
    toolType,
    input,
    product:"Promptless",
    schemaVersion:1,
    task:{
      name:tool.name,
      intendedDeliverable:tool.outcome,
      suitableFor:tool.bestFor,
      qualityBar:tool.qualityBar||[]
    }
  };
}
async function generate(){
  if(isBusy)return;
  if(!$("toolForm").reportValidity())return;
  const url=storageGet("promptless_webhook_url");
  const toolType=$("toolSelect").value, input=getFormData();
  lastRequest=buildRequest(toolType,input);
  if(!url){runSamplePreview(lastRequest);return;}
  await submitRequest(lastRequest,url);
}
function runSamplePreview(payload){
  setBusy(true); hideNotice("resultNotice");
  $("loaderText").textContent="Preparing your task preview…";
  const clean=value=>String(value??"").trim();
  const get=(key,fallback="Not provided")=>clean(payload.input?.[key])||fallback;
  const lines=value=>clean(value).split(/\n|;(?=\s*\S)/).map(v=>v.replace(/^\s*(?:[-*•]|\d+[.)])\s*/,"").trim()).filter(Boolean);
  const sentence=value=>{const s=clean(value);if(!s)return "";return /[.!?]$/.test(s)?s:s+".";};
  const title=TOOLS[payload.toolType].name;
  const data=payload.input||{};
  const bullets=(value)=>lines(value).map(v=>`- ${v}`).join("\n");
  const slug=(value)=>clean(value).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const htmlEscape=value=>String(value??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const drafts={
    cold_email:()=>{
      const objective=get("objective");
      const reason=/^(i\b|we\b|my\b|our\b)/i.test(objective)?`I’m reaching out because ${sentence(objective)}`:`I’m reaching out to ${objective.charAt(0).toLowerCase()+objective.slice(1).replace(/[.!?]+$/,"")}.`;
      const context=clean(data.context);
      const recipient=get("recipient","the recipient");
      const next=get("next_step","a brief conversation");
      const firstWord=next.split(/\s+/)[0].toLowerCase();
      const ask=/^(a|an|the)$/.test(firstWord)||/ing$/.test(firstWord)?`Would you be open to ${next.charAt(0).toLowerCase()+next.slice(1)}?`:`Could you ${next.charAt(0).toLowerCase()+next.slice(1).replace(/[.!?]+$/,"")}?`;
      const tone=get("tone","Professional");
      const subjectCore=objective.replace(/^(i('| a)m|i would like to|i want to|we want to)\s+/i,"").replace(/[.!?]+$/,"");
      const subject=subjectCore.length>62?subjectCore.slice(0,59).replace(/\s+\S*$/,"")+"…":subjectCore;
      const greeting=tone==="Friendly"?"Hi there,":"Hello,";
      const close=tone==="Warm and thoughtful"?"Best wishes,":tone==="Direct"?"Regards,":"Best,";
      return `## Recipient\n${recipient}\n\n## Subject\n${subject||"A quick introduction"}\n\n## Email\n${greeting}\n\n${reason}\n${context?`\n${sentence(context)}`:""}\n\n${ask}\n\n${close}\n[Your name]\n\n## Before sending\n- Replace the sign-off with your name.\n- Check that the recipient and context are accurate.\n- Keep the subject specific to the reason for contacting them.`;
    },
    thread_generator:()=>{
      const topic=get("topic");
      const points=lines(get("supporting_points",""));
      const proof=clean(data.evidence);
      const audience=get("audience","your intended audience");
      const platform=get("platform","X");
      const length=get("length","Medium (7–10 posts)");
      const target=length.startsWith("Expanded")?7:5;
      const posts=[];
      posts.push(`1/ ${sentence(topic)}`);
      posts.push(`2/ Why this matters to ${audience}: connect the idea to a real decision, behaviour or problem.`);
      points.slice(0,target===7?3:1).forEach(point=>posts.push(`${posts.length+1}/ ${sentence(point)}`));
      if(proof&&posts.length<target-1)posts.push(`${posts.length+1}/ A concrete example or evidence point:\n\n${sentence(proof)}`);
      if(posts.length<target-1)posts.push(`${posts.length+1}/ Put the idea into practice: use one real situation to show what changes when someone applies it.`);
      posts.push(`${posts.length+1}/ The takeaway: connect the idea back to what someone should understand, decide or do differently.`);
      return `## Thread draft\n\n${posts.join("\n\n")}\n\n## Publishing check\n- Platform: ${platform}\n- Target: ${length}; generated: ${posts.length} posts\n- Verify every factual claim and add source links where needed.\n- Replace any broad line with a specific example from your own experience or evidence.`;
    },
    prompt_architect:()=>{
      const output=get("output","The most useful format for the task");
      return `## Reusable AI instruction\n\n### Role\nAct as a capable specialist relevant to the task. Do not claim expertise you cannot substantiate.\n\n### Objective\n${get("goal")}\n\n### Context\n${get("context","Use only the context supplied by the user. Ask for missing information when it would materially change the answer.")}\n\n### Requirements\n${get("constraints","Preserve factual accuracy. Separate confirmed information from assumptions. Do not invent sources, data or user details.")}\n\n### Output format\n${output}\n\n### Working method\n1. Identify the actual task and intended audience.\n2. Check whether essential context is missing; ask concise clarification questions before proceeding when necessary.\n3. Produce the requested deliverable, not advice about how to produce it.\n4. Check the result against the requirements before returning it.\n\n### Acceptance criteria\n- Directly addresses the objective.\n- Uses the supplied context without adding unsupported facts.\n- Follows the requested format and constraints.\n- Makes uncertainty and unresolved decisions explicit.`;
    },
    webpage_builder:()=>{
      const brief=get("brief","A focused webpage for a clear user need");
      const requirements=get("requirements","Explain the value clearly, show the most important details and provide one clear next action.");
      const style=get("style","Modern editorial");
      const titleText=brief.length>72?brief.slice(0,69).replace(/\s+\S*$/,"")+"…":brief;
      const bodyText=requirements.split(/\n/).map(v=>v.trim()).filter(Boolean);
      const sections=bodyText.length>1?bodyText:requirements.split(/[.;]\s+/).map(v=>v.trim()).filter(Boolean);
      const sectionHTML=sections.slice(0,5).map((v,i)=>`<section class="detail"><span class="index">0${i+1}</span><div><h2>${["The need","What matters","How it works","What to expect","Next step"][i]||"More detail"}</h2><p>${htmlEscape(v)}</p></div></section>`).join("\n");
      return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${htmlEscape(titleText)}">
<title>${htmlEscape(titleText)}</title>
<style>
:root{color-scheme:light;--ink:#172033;--muted:#667085;--line:#e5e9f0;--accent:${style==="Bold and expressive"?"#b84f42":style==="Professional product"?"#246b68":style==="Minimal and clean"?"#4f647f":"#315fae"};--paper:#fbfcfe;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink)}a{color:inherit}main{width:min(100% - 40px,1040px);margin:auto;padding:clamp(56px,10vw,120px) 0}.eyebrow{font-size:12px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--accent)}h1{max-width:900px;margin:22px 0;font-size:clamp(42px,8vw,88px);line-height:.98;letter-spacing:-.065em} .lead{max-width:680px;color:var(--muted);font-size:clamp(18px,2.2vw,22px);line-height:1.65}.action{display:inline-flex;align-items:center;gap:18px;margin-top:24px;padding:15px 19px;border-radius:10px;background:var(--accent);color:#fff;text-decoration:none;font-weight:650}.details{margin-top:clamp(60px,10vw,110px);border-top:1px solid var(--line)}.detail{display:grid;grid-template-columns:70px 1fr;gap:16px;padding:24px 0;border-bottom:1px solid var(--line)}.index{color:var(--accent);font-size:12px;font-weight:700}.detail h2{margin:0 0 8px;font-size:20px}.detail p{margin:0;max-width:720px;color:var(--muted);line-height:1.7}footer{margin-top:55px;color:var(--muted);font-size:13px}@media(max-width:560px){main{width:min(100% - 32px,1040px)}.detail{grid-template-columns:36px 1fr}}
</style>
</head>
<body><main>
<span class="eyebrow">${htmlEscape(style)}</span>
<h1>${htmlEscape(titleText)}</h1>
<p class="lead">${htmlEscape(requirements)}</p>
<a class="action" href="#details">Explore the details <span aria-hidden="true">↗</span></a>
<div class="details" id="details">${sectionHTML}</div>
<footer>Page structure generated from the supplied brief. Replace draft copy with verified product details and working destination links.</footer>
</main></body></html>`;
    },
    brief_generator:()=>{
      const constraints=lines(get("constraints",""));
      const success=get("success_criteria","");
      return `# Project brief\n\n## 1. Objective\n${get("request")}\n\n## 2. Intended audience\n${get("audience")}\n\n## 3. Background\n${get("context")}\n\n## 4. Deliverable\n${get("deliverable")}\n\n## 5. Scope and constraints\n${constraints.length?constraints.map(v=>`- ${v}`).join("\n"):"- Confirm what is included and excluded before work starts."}\n\n## 6. Acceptance criteria\n${success?bullets(success):"- The deliverable meets the stated objective.\n- Required content and functionality are present.\n- Constraints are respected.\n- The intended recipient can use the deliverable without avoidable clarification."}\n\n## 7. Open decisions\n- Who owns delivery and who approves the result?\n- What is explicitly out of scope?\n- What assumptions need to be validated before work begins?\n\n## 8. First action\nConfirm the owner, acceptance criteria and first review point. Then break the work into deliverable-sized steps.`;
    },
    problem_solver:()=>{
      const problem=get("problem");
      const tried=get("tried","");
      const goal=get("desired_outcome","");
      const constraints=get("constraints","");
      const approach=get("approach","Recommend the best path");
      return `# Problem analysis\n\n## The problem to solve\n${problem}\n\n## Desired outcome\n${goal}\n\n## Constraints\n${constraints}\n\n## What has already been tried\n${tried}\n\n## Separate evidence from interpretation\n**Known from your description**\n- The situation and symptoms stated above.\n- The outcome you want and constraints you have identified.\n\n**Still unverified**\n- The underlying cause.\n- Whether the current obstacle is the root cause or a downstream symptom.\n- Which constraint is decisive.\n\n## Hypotheses to test\n1. **Process or sequence:** Is a dependency, hand-off or prerequisite missing?\n2. **Information or capability:** Is the task blocked by missing access, knowledge, data or a tool limitation?\n3. **Scope or priority:** Is the current approach asking for more than the available time or resources allow?\n\n## Recommended next move\nRun the smallest test that distinguishes between these explanations. Record the expected result before you run it, then compare what actually happens.\n\n## Decision rule\n- If the test confirms a missing dependency, resolve that dependency first.\n- If the test points to a capability limit, choose an alternative route or reduce scope.\n- If the test does not distinguish the causes, gather one more specific piece of evidence before committing to a solution.\n\n**Requested support:** ${approach}\n\n*This local preview structures the problem; it does not diagnose on its own the cause.*`;
    },
    workaround_suggester:()=>{
      const blocker=get("blocker");
      const goal=get("goal");
      const available=get("available","");
      const preference=get("risk","Simplest reliable workaround");
      const b=blocker.toLowerCase();
      let routes=[
        ["Use an equivalent supported path",`Identify another tool, feature or process that can reach the same goal without relying on the blocked step. Check compatibility before moving data.`,"Best when an approved alternative already exists."],
        ["Remove the blocked dependency",`Break the goal into smaller steps and complete the parts that do not depend on the blocked capability. Reconnect the steps when the blocker is resolved.`,"Best when the work can be separated."],
        ["Change the sequence or owner",`Check whether the blocked action can be completed by a person, system or role that already has the required access or capability.`,"Best when the obstacle is permission, ownership or timing."]
      ];
      if(/403|forbidden|permission|access denied|unauthori[sz]ed/.test(b))routes=[
        ["Use an authorised owner",`Ask an administrator or authorised teammate to perform the restricted action through the approved process. Do not bypass access controls.`,"Best when the action is restricted by role or permission."],
        ["Request the minimum required access",`Identify the exact permission needed for ${goal.toLowerCase()} and request only that scope. Confirm the owner and approval path.`,"Best when access is a recurring requirement."],
        ["Use an approved export or hand-off",`If policy allows, have an authorised person provide the required output through an approved hand-off rather than sharing credentials.`,"Best when the task can continue with a permitted artefact."]
      ];
      else if(/timeout|timed out|network|connection|unreachable/.test(b))routes=[
        ["Retry with a smaller operation",`Reduce the amount of data or work sent in one request for ${goal.toLowerCase()}. Check whether smaller operations complete reliably.`,"Best when request size or duration may be contributing."],
        ["Separate the operation into stages",`Complete separate parts first, save checkpoints and retry only the stage that fails.`,"Best when the task can be split safely."],
        ["Use a supported offline or manual route",`Prepare the required inputs locally and complete the time-sensitive portion through an approved alternative while the connection is investigated.`,"Best when continuity matters more than full automation."]
      ];
      else if(/rate.?limit|429|quota|limit exceeded/.test(b))routes=[
        ["Reduce request frequency",`Queue work and process it in smaller batches for ${goal.toLowerCase()}.`,"Best when the limit is temporary or usage-based."],
        ["Use a permitted lower-volume route",`Check whether the provider offers batch processing, a different approved endpoint or a higher quota.`,"Best when the task is recurring."],
        ["Prioritise the essential work",`Identify the minimum output needed now and defer lower-priority operations until capacity is available.`,"Best when there is a deadline."]
      ];
      return `# Workaround options\n\n## Blocker\n${blocker}\n\n## Goal to preserve\n${goal}\n\n## Available resources\n${available}\n\n${routes.map((r,i)=>`## Route ${i+1} — ${r[0]}\n${r[1]}\n\n**Most suitable when:** ${r[2]}`).join("\n\n")}\n\n## Choose based on your priority\n${preference}\n\n## Before proceeding\nConfirm the alternative is permitted, preserves data integrity and can be reversed if it fails.`;
    },
    life_coach:()=>{
      const situation=get("situation");
      const goal=get("goal","");
      const stuck=get("stuck_point","");
      const style=get("style","Kind but direct");
      return `# Reflection and next step\n\n## What is happening\n${situation}\n\n## What you want to change\n${goal}\n\n## What feels difficult\n${stuck}\n\n## Separate what you can influence\n**Within your influence:** the next conversation, the information you gather, the boundary you set or the action you take.\n\n**Outside your direct control:** other people's reactions, past events and outcomes that depend on several people or conditions.\n\n## A manageable next step\nChoose one action that takes 15–30 minutes and moves the situation forward without requiring the whole problem to be solved. Make it specific enough to put on your calendar.\n\n## Check whether it helped\nAfter taking the step, ask: What changed? What did I learn? What is the next decision now?\n\n**Support style:** ${style}\n\n*This is a practical reflection aid, not mental-health or crisis support.*`;
    },
    research_synthesizer:()=>{
      const options=lines(get("options",""));
      const criteria=lines(get("criteria",""));
      const evidence=get("source_material","");
      const format=get("format","Recommendation with reasoning");
      const optionNames=(options.length?options:["Option A","Option B"]).slice(0,3);
      const criterionNames=criteria.length?criteria:["Fit to the objective","Total cost and effort","Reliability and risk","Long-term implications"];
      const table=`| Criterion | ${optionNames.map(o=>o.replace(/\|/g,"/")).join(" | ")} |\n|---|${optionNames.map(()=> "---").join("|")}|\n`+
        criterionNames.slice(0,8).map(c=>`| ${c.replace(/\|/g,"/")} | ${optionNames.map(()=> "Evidence needed").join(" | ")} |`).join("\n");
      const comparison=format==="Questions to investigate next"
        ? `## Questions to investigate\n${criterionNames.map((c,i)=>`${i+1}. What verified evidence shows how each option performs on ${c.toLowerCase()}?`).join("\n")}`
        : format==="Concise briefing"
        ? `## Decision brief\nCompare ${optionNames.join(", ")} against ${criterionNames.join(", ")}. The current information is not sufficient to establish a reliable winner.`
        : `## Comparison matrix\n${table}`;
      const recommendation=format==="Recommendation with reasoning"
        ? `## Recommendation status\n**No defensible recommendation yet.** The criteria are clear, but comparable evidence is missing. Gather the same evidence for each option before ranking them.`
        : `## Decision status\nThe options are identified, but the available information does not support a reliable ranking yet.`;
      return `# Decision comparison\n\n## Decision to make\n${get("question")}\n\n## Options\n${optionNames.map((o,i)=>`${i+1}. ${o}`).join("\n")}\n\n## Criteria\n${criterionNames.map(c=>`- ${c}`).join("\n")}\n\n${comparison}\n\n## Evidence supplied\n${evidence||"No source material was supplied."}\n\n## What must be verified\n- Current facts for each option, using primary or otherwise reliable sources.\n- Whether the evidence is comparable in date, scope and methodology.\n- Total cost, implementation effort, dependencies and exit costs.\n- Any risks that would change the recommendation.\n\n${recommendation}\n\n*This local preview organises a decision. It does not browse the web or verify on its own claims.*`;
    },
    message_refiner:()=>{
      const original=clean(data.message);
      const preserve=clean(data.preserve);
      const tone=get("tone","Natural and clear");
      const tidy=original.replace(/\s+/g," ").replace(/\s+([,.!?;:])/g,"$1").trim();
      const clear=tidy
        .replace(/\bI just wanted to\b/gi,"I’m writing to")
        .replace(/\bI was wondering if you could\b/gi,"Could you")
        .replace(/\bI was wondering whether\b/gi,"Could you")
        .replace(/\bat this point in time\b/gi,"now")
        .replace(/\bin order to\b/gi,"to")
        .replace(/\bdue to the fact that\b/gi,"because")
        .replace(/\bplease be informed that\b/gi,"Please note that")
        .replace(/\bkindly\b/gi,"please")
        .replace(/\s{2,}/g," ");
      const concise=clear.replace(/\b(really|very|basically|actually|just)\b\s*/gi,"").replace(/\s{2,}/g," ").trim();
      const count=Math.max(1,Math.min(3,Number.parseInt(get("variants","2"),10)||2));
      const variants=[
        ["Clear and natural",clear],
        ["More concise",concise],
        ["More direct",clear.replace(/\bI would appreciate it if you could\b/gi,"Please").replace(/\bI wanted to ask if\b/gi,"Could you").trim()]
      ].slice(0,count);
      return `# Message refinement preview\n\n**Audience:** ${get("audience","Not specified")}  \n**Purpose:** ${get("purpose","Not specified")}  \n**Preferred tone:** ${tone}\n\n${variants.map((v,i)=>`## Version ${i+1} — ${v[0]}\n\n${v[1]}`).join("\n\n")}\n\n## Preserve\n${preserve||"The original meaning and factual details are retained."}\n\n*Local preview applies light text cleanup only. Connect an AI workflow for context-aware rewriting and tone adaptation.*`;
    }
  };
  const result=drafts[payload.toolType]?.()||`# ${title}\n\n${Object.entries(data).filter(([,v])=>clean(v)).map(([k,v])=>`**${k.replace(/_/g," ")}:** ${clean(v)}`).join("\n\n")}`;
  lastRawResult=result;
  configureOutput(payload.toolType,lastRawResult);
  $("resultToolName").textContent=title;
  $("resultContent").style.display="flex";$("emptyState").style.display="none";
  $("resultStatus").textContent=payload.toolType==="research_synthesizer"?"Local example · no sources fetched":"Local example · not AI-generated";
  hideNotice("resultNotice");$("retryRow").style.display="none";
  setBusy(false);
}
function unwrapWorkflowResponse(value){
  // n8n versions and response nodes can return the same result at different nesting levels.
  let current=value;
  for(let i=0;i<5;i++){
    if(Array.isArray(current)){if(!current.length)return null;current=current[0];continue;}
    if(!current||typeof current!=="object")return current;
    if(current.success===false)return current;
    if(current.result!=null){current=current.result;continue;}
    if(current.body!=null){current=current.body;continue;}
    if(current.data!=null){current=current.data;continue;}
    if(current.response!=null){current=current.response;continue;}
    if(current.output!=null||current.content!=null||current.text!=null)return current;
    return current;
  }
  return current;
}
function extractWorkflowText(data){
  const unwrapped=unwrapWorkflowResponse(data);
  if(typeof unwrapped==="string")return unwrapped.trim();
  if(unwrapped&&typeof unwrapped==="object"){
    for(const key of ["content","text","output","answer","completion","message"]){
      if(typeof unwrapped[key]==="string"&&unwrapped[key].trim())return unwrapped[key].trim();
    }
    if(unwrapped.result!=null){
      const nested=extractWorkflowText(unwrapped.result);if(nested)return nested;
    }
  }
  return "";
}
async function submitRequest(payload,url){
  setBusy(true); hideNotice("resultNotice");
  $("loaderText").textContent=`Running ${TOOLS[payload.toolType].name}…`;
  const controller=new AbortController();
  const timeoutId=window.setTimeout(()=>controller.abort(),45000);
  try{
    const response=await fetch(url,{method:"POST",mode:"cors",credentials:"omit",cache:"no-store",signal:controller.signal,headers:{"Content-Type":"application/json","Accept":"application/json, text/plain, */*"},body:JSON.stringify(payload)});
    const raw=await response.text(); let data=null; let parsed=false;
    try{data=JSON.parse(raw);parsed=true;}catch(_){/* Some webhook configurations return plain text. Handle it below. */}
    if(!response.ok){
      console.error("Promptless workflow request failed",{status:response.status,body:raw.slice(0,800)});
      if(response.status===404)throw new Error("This tool connection needs a quick check. Open Settings and confirm your Promptless webhook URL.");
      if(response.status>=500)throw new Error("We hit a snag while making your result. Your details are still here. Try again shortly.");
      throw new Error("That request couldn’t be completed. Check the details and try again.");
    }
    if(parsed&&data&&typeof data==="object"&&data.success===false){
      const serverError=String(data.error||data.message||"");
      console.error("Promptless workflow returned a handled error",{toolType:payload.toolType,error:serverError});
      if(/unknown tooltype|supported .* tool/i.test(serverError))throw new Error("This tool needs a refresh. Reload Promptless and try again.");
      if(/required field|please provide|missing/i.test(serverError))throw new Error("A couple of details are missing. Check the highlighted fields and try again.");
      throw new Error("We couldn’t finish that just yet. Your details are still here. Give it another try.");
    }
    let result=parsed?extractWorkflowText(data):"";
    // Accept a plain-text response as a valid result, but never display an HTML error page as the answer.
    if(!result&&!parsed&&raw.trim()&&!/<(!doctype\s+html|html[\s>])/i.test(raw)&&!/^\s*\{\s*"(?:error|message)"/i.test(raw))result=raw.trim();
    if(!result){
      console.error("Promptless received an empty or unrecognised response",{status:response.status,contentType:response.headers.get("content-type"),body:raw.slice(0,800)});
      throw new Error("We couldn’t get a usable result this time. Your details are still here. Try once more.");
    }
    lastRawResult=result; configureOutput(payload.toolType,lastRawResult); $("resultToolName").textContent=TOOLS[payload.toolType].name;
    $("resultContent").style.display="flex"; $("emptyState").style.display="none"; $("resultStatus").textContent="Workflow result · review before use"; hideNotice("resultNotice"); $("retryRow").style.display="none";
  }catch(err){
    $("resultContent").style.display="none"; $("emptyState").style.display="flex";
    let msg=err.name==="AbortError"?"This request took too long. Your details are still here; try again or check your workflow.":(err.message||"Something went wrong. Please try again.");
    if(err instanceof TypeError||/Failed to fetch|NetworkError|Load failed/i.test(msg))msg="We can’t reach your workflow right now. Check your connection and try again.";
    showNotice("resultNotice",msg,"error"); $("retryRow").style.display="flex";
  }finally{window.clearTimeout(timeoutId);setBusy(false);if($("resultContent").style.display==="flex")$("emptyState").style.display="none";}
}
let settingsReturnFocus=null;
function openSettings(){settingsReturnFocus=document.activeElement;$("webhookUrl").value=storageGet("promptless_webhook_url");$("settingsBackdrop").classList.add("open");document.body.classList.add("settings-open");hideNotice("settingsNotice");$("webhookUrl").focus();}
function closeSettings(){$("settingsBackdrop").classList.remove("open");document.body.classList.remove("settings-open");if(settingsReturnFocus?.focus)settingsReturnFocus.focus();}
function updateConnection(){const u=storageGet("promptless_webhook_url");$("connectionLabel").textContent=u?"Workflow URL saved":"Local examples · connect a workflow for AI generation";$("connectionLabel").style.color=u?"#315fae":"#70736d";}
$("toolSelect").addEventListener("change",()=>{syncToolPicker();renderForm();});
initToolPicker();
$("toolForm").addEventListener("submit",e=>{e.preventDefault();generate();});
$("openSettings").addEventListener("click",openSettings);$("cancelSettings").addEventListener("click",closeSettings);
$("saveSettings").addEventListener("click",()=>{
 const v=$("webhookUrl").value.trim();
 if(!v){storageRemove("promptless_webhook_url");updateConnection();closeSettings();return;}
 try{const u=new URL(v);if(!["http:","https:"].includes(u.protocol)||u.username||u.password)throw new Error();if(location.protocol==="https:"&&u.protocol==="http:")throw new Error("mixed-content");if(!storageSet("promptless_webhook_url",u.href)){showNotice("settingsNotice","Your browser couldn’t save this connection. Check its storage settings and try again.");return;}updateConnection();closeSettings();showNotice("formNotice","Connection saved in this browser.","info");}
 catch(err){showNotice("settingsNotice",err?.message==="mixed-content"?"Use the secure HTTPS connection address for your webhook.":"Enter a valid webhook address beginning with https:// (or http:// for local testing).");}
});
$("settingsBackdrop").addEventListener("click",e=>{if(e.target===$("settingsBackdrop"))closeSettings();});
$("settingsBackdrop").addEventListener("keydown",e=>{
  if(e.key!=="Tab")return;
  const focusable=[...$("settingsBackdrop").querySelectorAll('button:not([disabled]),input:not([disabled]),[href],[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent!==null);
  if(!focusable.length)return;
  const first=focusable[0],last=focusable[focusable.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
$("copyBtn").addEventListener("click",async()=>{try{const current=getCurrentResult();const content=lastRequest?.toolType==="webpage_builder"?(extractHTML(current)||current):current;await navigator.clipboard.writeText(content);$("copyBtn").textContent="Copied ✓";setTimeout(()=>$("copyBtn").textContent=lastRequest?.toolType==="webpage_builder"?"Copy HTML":"Copy result",1500);}catch{showNotice("resultNotice","Copy didn’t work in this browser. Select the result and copy it instead.","info");}});
$("downloadBtn").addEventListener("click",()=>{const type=lastRequest?.toolType||"result";let content=getCurrentResult(),filename="promptless-result.txt",mime="text/plain;charset=utf-8";if(type==="webpage_builder"){content=extractHTML(content)||content;filename="index.html";mime="text/html;charset=utf-8";}else if(["research_synthesizer","prompt_architect","brief_generator","problem_solver","workaround_suggester","life_coach"].includes(type)){filename=`promptless-${type.replace(/_/g,"-")}.md`;mime="text/markdown;charset=utf-8";}else if(type==="cold_email")filename="email-draft.txt";const blob=new Blob([content],{type:mime}),a=document.createElement("a"),u=URL.createObjectURL(blob);a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);});
$("emailBtn").addEventListener("click",()=>{
  let raw=String(getCurrentResult()||"").trim(),subject="";
  const subjectMatch=raw.match(/^## Subject\s*\n([^\n]+)/im);
  if(subjectMatch)subject=subjectMatch[1].trim();
  const emailMatch=raw.match(/^## Email\s*\n([\s\S]*?)(?=\n## )/im);
  const body=emailMatch?emailMatch[1].trim():raw;
  window.location.href=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
$("regenerateBtn").addEventListener("click",()=>{if(!$("toolForm").reportValidity())return;const request=buildRequest($("toolSelect").value,getFormData());lastRequest=request;const url=storageGet("promptless_webhook_url");if(url)submitRequest(request,url);else runSamplePreview(request);});
$("retryBtn").addEventListener("click",()=>{if(lastRequest){const url=storageGet("promptless_webhook_url");if(url)submitRequest(lastRequest,url);else runSamplePreview(lastRequest);}});
$("clearBtn").addEventListener("click",()=>{lastRawResult="";lastRequest=null;$("output").textContent="";$("resultContent").style.display="none";$("emptyState").style.display="flex";$("retryRow").style.display="none";hideNotice("resultNotice");});
$("saveResultBtn").addEventListener("click",saveCurrentResult);
$("continueBtn").addEventListener("click",()=>{if(!getCurrentResult()){showNotice("resultNotice","Generate a result before continuing it into another task.","info");return;}carryForwardNext=true;showNotice("formNotice","Choose the next workflow. Your current result will be added as context.","info");openToolPicker();});
$("historyToggle").addEventListener("click",()=>{const list=$("savedWorkList"),opening=list.hidden;list.hidden=!opening;$("historyToggle").setAttribute("aria-expanded",String(opening));});
$("savedWorkList").addEventListener("click",event=>{
  const load=event.target.closest("[data-load-saved]"),remove=event.target.closest("[data-delete-saved]");
  if(load)loadSavedResult(load.dataset.loadSaved);
  if(remove)deleteSavedResult(remove.dataset.deleteSaved);
});
renderSavedWork();
function toggleResultExpanded(force){
  const panel=document.querySelector(".result-panel");
  const expanded=typeof force==="boolean"?force:!panel.classList.contains("is-expanded");
  panel.classList.toggle("is-expanded",expanded);
  document.body.classList.toggle("promptless-expanded",expanded);
  $("expandResult").setAttribute("aria-pressed",String(expanded));
  $("expandResult").setAttribute("aria-label",expanded?"Exit full screen":"Open result full screen");
  $("expandResult").title=expanded?"Exit full screen":"Open result full screen";
  $("expandResult").textContent=expanded?"⤡":"⤢";
  if(expanded) panel.scrollTop=0;
}
$("expandResult").addEventListener("click",()=>toggleResultExpanded());
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.querySelector(".result-panel.is-expanded"))toggleResultExpanded(false);});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();generate();}if(e.key==="Escape")closeSettings();});
renderTools();initConfigSelects();updateConnection();

// Replay the intro on every document load and every pageshow event, including
// BFCache restores (Back/Forward) where the browser may restore the old DOM.
// Intentionally do not persist an "already seen" flag in any storage.
(function initPromptlessIntro(){
  const shell=document.getElementById("productShell");
  const intro=document.getElementById("promptlessIntro");
  if(!shell||!intro)return;
  const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  let timer=null,finished=false;
  let alreadySeen=false;
  try{alreadySeen=sessionStorage.getItem("promptless_intro_seen")==="1";}catch(_){}
  const finish=()=>{
    if(finished)return;
    finished=true;
    if(timer!==null)window.clearTimeout(timer);
    intro.classList.add("is-leaving");
    window.setTimeout(()=>{if(intro.isConnected)intro.remove();},reduced?0:350);
  };
  if(reduced||alreadySeen){intro.remove();return;}
  try{sessionStorage.setItem("promptless_intro_seen","1");}catch(_){}
  intro.querySelector("#skipIntro")?.addEventListener("click",finish,{once:true});
  const onKey=e=>{if(e.key==="Escape"&&!finished){finish();document.removeEventListener("keydown",onKey);}};
  document.addEventListener("keydown",onKey);
  const progress=intro.querySelector(".intro-progress span");
  const complete=()=>{
    finish();
    document.removeEventListener("keydown",onKey);
  };
  // Keep the intro on screen until its full visual sequence has played.
  // The CSS progress bar runs for 5.9s; the extra hold lets the final state land.
  if(progress){
    progress.addEventListener("animationend",()=>{
      // Let the completed state remain visible briefly before transitioning.
      timer=window.setTimeout(complete,550);
    },{once:true});
  }
  // Fallback for delayed stylesheets or browsers that do not dispatch animationend.
  timer=window.setTimeout(complete,6800);
})();
