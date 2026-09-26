
import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase";
import { streams, exams, institutions, institutionDetails, careers, scholarships, loans, roadmapStages, streamRoadmaps, sampleSearchItems } from "./data";
import {
  ArrowRight, BookOpen, BrainCircuit, BriefcaseBusiness, Calculator, Check, ChevronDown,
  ChevronRight, CircleDollarSign, GraduationCap, House, LogIn, LogOut, Menu, Search,
  ShieldCheck, Sparkles, Target, X, ExternalLink, MapPin, WalletCards, PlayCircle, Layers3,
  UserRound, Lightbulb, MessageCircle, Cloud, Database, Code2, Shield, BarChart3, Palette,
  Network, Wrench, Stethoscope, Scale, Landmark, LineChart, Server, GitBranch, Globe2
} from "lucide-react";

const examSymbols = {
  "JEE Main":"JEE", "JEE Advanced":"JEE", "MHT-CET":"CET", "BITSAT":"BITS",
  "VITEEE":"VIT", "NEET-UG":"NEET", "ICAR AIEEA":"ICAR", "NDA":"NDA",
  "UPSC Civil Services":"UPSC", "MPSC":"MPSC", "CA Foundation":"CA",
  "CLAT":"CLAT", "IPMAT":"IPM", "NATA":"NATA", "NID DAT":"NID", "UCEED":"UCEED"
};
const examSymbol = (name) => examSymbols[name] || name.slice(0,4).toUpperCase();

const navItems = [
  ["profile","Student Profile",GraduationCap],
  ["streams","Choose Stream",Target],
  ["roadmaps","Roadmaps",BookOpen],
  ["exams","Competitive Exams",Calculator],
  ["institutions","Institutions",House],
  ["careers","Career Paths",BriefcaseBusiness],
  ["funding","Scholarships & Loans",CircleDollarSign],
  ["simulator","What-If Simulator",Sparkles]
];

const initialProfile = {
  name:"", board:"", percentage:"", strengths:"", budget:"", hobbies:"",
  location:"India", abroad:false, preferredSubjects:[], stream:"", financialPriority:"balanced"
};

function App(){
  const [session,setSession]=useState(null);
  const [profile,setProfile]=useState(initialProfile);
  const [page,setPage]=useState("profile");
  const [selectedStream,setSelectedStream]=useState("pcm");
  const [query,setQuery]=useState("");
  const [showAuth,setShowAuth]=useState(false);
  const [authMode,setAuthMode]=useState("login");
  const [toast,setToast]=useState("");
  const [loading,setLoading]=useState(true);
  const [sidebar,setSidebar]=useState(false);

  useEffect(()=>{
    if(!supabase){setLoading(false);return;}
    supabase.auth.getSession().then(({data})=>{
      setSession(data.session);
      if(data.session) loadProfile(data.session.user.id);
      setLoading(false);
    });
    const {data:listener}=supabase.auth.onAuthStateChange((_event,newSession)=>{
      setSession(newSession);
      if(newSession) loadProfile(newSession.user.id);
    });
    return ()=>listener.subscription.unsubscribe();
  },[]);

  async function loadProfile(userId){
    const {data}=await supabase.from("profiles").select("*").eq("id",userId).maybeSingle();
    if(data){
      const p={...initialProfile,...data,preferredSubjects:data.preferred_subjects||[]};
      setProfile(p);
      if(p.stream) setSelectedStream(p.stream);
    }
  }

  async function saveProfile(){
    if(!supabase || !session){setToast("Demo mode: connect Supabase to persist your profile.");return;}
    const payload={
      id:session.user.id,name:profile.name,board:profile.board,
      percentage:Number(profile.percentage)||null,strengths:profile.strengths,
      budget:Number(profile.budget)||null,hobbies:profile.hobbies,location:profile.location,
      abroad:profile.abroad,preferred_subjects:profile.preferredSubjects,stream:profile.stream
    };
    const {error}=await supabase.from("profiles").upsert(payload);
    setToast(error ? error.message : "Profile saved successfully.");
  }

  async function logout(){
    if(supabase) await supabase.auth.signOut();
    setProfile(initialProfile);setPage("profile");
  }

  const searchResults=useMemo(()=>{
    const q=query.trim().toLowerCase();
    if(!q)return [];
    return sampleSearchItems.filter(x=>x.name.toLowerCase().includes(q)).slice(0,9);
  },[query]);

  if(loading)return <div className="loading">Loading Pathfinder…</div>;

  return <div className="app-shell">
    <header className="topbar">
      <button className="mobile-menu" onClick={()=>setSidebar(!sidebar)}><Menu/></button>
      <div className="brand" onClick={()=>setPage("profile")}>
        <div className="brand-mark"><BrainCircuit size={23}/></div>
        <div><b>Pathfinder</b><span>Education • Career • Future</span></div>
      </div>
      <div className="search-wrap">
        <Search size={18}/>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search streams, exams, colleges, careers…"/>
        {searchResults.length>0&&<div className="search-results">
          {searchResults.map(x=><button key={x.type+x.id} onClick={()=>{
            setQuery("");
            const p=x.type==="Stream"?"streams":x.type==="Exam"?"exams":x.type==="Institution"?"institutions":"careers";
            setPage(p);
          }}><span>{x.type}</span>{x.name}</button>)}
        </div>}
      </div>
      <div className="top-actions">
        <button className="mahi-mini" onClick={()=>setPage("mahi")}><Sparkles size={16}/> Ask Mahi</button>
        {session?<button className="avatar" onClick={logout}>{(profile.name||session.user.email||"U")[0].toUpperCase()}</button>:
        <button className="login-btn" onClick={()=>setShowAuth(true)}><LogIn size={16}/> Login</button>}
      </div>
    </header>

    <aside className={"sidebar "+(sidebar?"open":"")}>
      <div className="mobile-close"><button onClick={()=>setSidebar(false)}><X/></button></div>
      <div className="profile-mini">
        <div className="avatar large">{(profile.name||"S")[0].toUpperCase()}</div>
        <div><strong>{profile.name||"Student"}</strong><small>{session?"Saved profile":"Guest mode"}</small></div>
      </div>
      <div className="progress-card"><div><span>Pathway progress</span><b>Explore</b></div>
        <div className="progress"><i style={{width:`${Math.min(100,Math.max(10,Object.values(profile).filter(Boolean).length*4))}%`}}/></div>
      </div>
      <nav>{navItems.map(([id,label,Icon])=><button key={id} className={page===id?"active":""} onClick={()=>{setPage(id);setSidebar(false);}}>
        <Icon size={18}/><span>{label}</span>
      </button>)}</nav>
      <button className={"mahi-side "+(page==="mahi"?"active":"")} onClick={()=>setPage("mahi")}><Sparkles size={18}/><span><b>Ask Mahi</b><small>Your guidance companion</small></span></button>
      {session&&<button className="logout-side" onClick={logout}><LogOut size={17}/> Sign out</button>}
    </aside>

    <main className="main">
      <Page page={page} profile={profile} setProfile={setProfile} selectedStream={selectedStream}
        setSelectedStream={setSelectedStream} setPage={setPage} saveProfile={saveProfile}
        toast={toast} setToast={setToast}/>
    </main>
    {showAuth&&<AuthModal mode={authMode} setMode={setAuthMode} close={()=>setShowAuth(false)}/>}
  </div>
}

function Page({page,...props}){
  if(page==="profile")return <ProfilePage {...props}/>;
  if(page==="streams")return <StreamsPage {...props}/>;
  if(page==="roadmaps")return <RoadmapsPage {...props}/>;
  if(page==="exams")return <ExamsPage/>;
  if(page==="institutions")return <InstitutionsPage/>;
  if(page==="careers")return <CareersPage selectedStream={props.selectedStream}/>;
  if(page==="funding")return <FundingPage {...props}/>;
  if(page==="simulator")return <Simulator profile={props.profile}/>;
  return <Mahi profile={props.profile}/>;
}

function Hero({eyebrow,title,text,accent="blue"}){
  return <div className={"hero hero-"+accent}>
    <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>
    <div className="hero-art"><div className="hero-grid"/><BrainCircuit size={72}/><div className="orb o1"/><div className="orb o2"/></div>
  </div>
}

function ProfilePage({profile,setProfile,saveProfile,setPage,toast}){
  const update=(k,v)=>setProfile(p=>({...p,[k]:v}));
  return <div className="page">
    <Hero eyebrow="STEP 01 • BUILD YOUR PROFILE" title="Start with you." text="Tell Pathfinder about your academics, interests, budget and study preferences. The goal is to compare pathways, not force one answer."/>
    <section className="profile-design-strip solar-profile" aria-label="Student future banner">
      <div className="profile-banner-copy">
        <span className="profile-banner-kicker">PATHFINDER • YOUR STUDENT JOURNEY</span>
        <b>Your future starts here.</b>
        <span>Learn • Explore • Build • Grow — one student profile, many possible futures.</span>
      </div>
      <div className="solar-system" aria-hidden="true">
        <div className="sun-core"/>
        <i className="planet-orbit orbit-1"><span className="planet-motion"><span className="planet planet-1"/></span></i>
        <i className="planet-orbit orbit-2"><span className="planet-motion"><span className="planet planet-2"/></span></i>
        <i className="planet-orbit orbit-3"><span className="planet-motion"><span className="planet planet-3"/></span></i>
        <i className="planet-orbit orbit-4"><span className="planet-motion"><span className="planet planet-4"/></span></i>
        <i className="planet-orbit orbit-5"><span className="planet-motion"><span className="planet planet-5"/></span></i>
        <i className="planet-orbit orbit-6"><span className="planet-motion"><span className="planet planet-6"><em/></span></span></i>
        <i className="planet-orbit orbit-7"><span className="planet-motion"><span className="planet planet-7"/></span></i>
        <i className="planet-orbit orbit-8"><span className="planet-motion"><span className="planet planet-8"/></span></i>
        <span className="star star-1"/><span className="star star-2"/><span className="star star-3"/><span className="star star-4"/><span className="star star-5"/>
      </div>
    </section>

    <section className="grid-2 profile-cards">
      <div className="card profile-card academic-card">
        <div className="section-title"><GraduationCap/><div><h2>Academic Profile</h2><p>Class 10 foundation and subject strengths</p></div></div>
        <label className="big-field">Student name<input className="name-input" value={profile.name} onChange={e=>update("name",e.target.value)} placeholder="Your full name"/></label>
        <div className="two">
          <label>Board<select value={profile.board} onChange={e=>update("board",e.target.value)}><option value="">Select board</option><option>CBSE</option><option>ICSE</option><option>Maharashtra State Board</option><option>Other State Board</option><option>International</option></select></label>
          <label>Overall percentage<input type="number" min="0" max="100" value={profile.percentage} onChange={e=>update("percentage",e.target.value)} placeholder="e.g. 82"/></label>
        </div>
        <label>Strong subjects / strengths<textarea value={profile.strengths} onChange={e=>update("strengths",e.target.value)} placeholder="e.g. Maths, logical reasoning, biology…"/></label>
        <label>Preferred subjects<input value={profile.preferredSubjects.join(", ")} onChange={e=>update("preferredSubjects",e.target.value.split(",").map(s=>s.trim()).filter(Boolean))} placeholder="Maths, Computer Science, Biology"/></label>
      </div>

      <div className="card profile-card finance-card">
        <div className="section-title"><CircleDollarSign/><div><h2>Preferences & Finance</h2><p>Good planning includes practical constraints.</p></div></div>
        <label className="big-field">Annual education budget (₹)<input className="name-input" type="number" value={profile.budget} onChange={e=>update("budget",e.target.value)} placeholder="e.g. 150000"/></label>
        <label>Hobbies & interests<textarea value={profile.hobbies} onChange={e=>update("hobbies",e.target.value)} placeholder="e.g. coding, drawing, cricket, public speaking…"/></label>
        <div className="two">
          <label>Preferred location<input value={profile.location} onChange={e=>update("location",e.target.value)} placeholder="City / State / India"/></label>
          <label>Financial priority<select value={profile.financialPriority} onChange={e=>update("financialPriority",e.target.value)}><option value="balanced">Balanced</option><option value="lowest-cost">Lowest total cost</option><option value="flexible">Flexible if opportunity is strong</option></select></label>
        </div>
        <label className="check-line"><input type="checkbox" checked={profile.abroad} onChange={e=>update("abroad",e.target.checked)}/> Keep international study options visible</label>
      </div>
    </section>

    <div className="action-row">
      <button className="primary" onClick={saveProfile}>Save profile <Check size={17}/></button>
      <button className="secondary" onClick={()=>setPage("streams")}>Choose my stream <ArrowRight size={17}/></button>
    </div>
    {toast&&<div className="toast">{toast}</div>}
  </div>
}

function StreamsPage({profile,setProfile,selectedStream,setSelectedStream,setPage}){
  const [opening,setOpening]=useState(false);
  function choose(id){
    setSelectedStream(id);
    setProfile(p=>({...p,stream:id}));
  }
  function openStream(id){
    if(opening) return;
    choose(id);
    setOpening(true);
    window.setTimeout(()=>setPage("roadmaps"),420);
  }
  const active=streams.find(s=>s.id===selectedStream);
  return <div className="page streams-page">
    <Hero eyebrow="STEP 02 • EXPLORE OPTIONS" title="Choose a stream to explore." text="Each card has its own direction. Open a stream to see subjects, exam routes, careers and a roadmap built around it." accent={active?.tone||"blue"}/>
    <div className="stream-grid">
      {streams.map(s=><article key={s.id} className={"stream-card "+s.tone+(selectedStream===s.id?" selected":"")+(opening&&selectedStream===s.id?" opening":"")} onClick={()=>openStream(s.id)}>
        <div className="stream-top"><div className="stream-icon">{s.icon}</div><span className="stream-label">{s.examGroup}</span></div>
        <h3>{s.title}</h3><p>{s.short}</p><div className="stream-summary">{s.summary}</div>
        <div className="tag-row">{s.subjects.map(x=><span key={x}>{x}</span>)}</div>
        <div className="stream-bottom">
          <button className="outline" onClick={e=>{e.stopPropagation();openStream(s.id)}}>Explore {s.title.replace("Science • ","")} Roadmap <ArrowRight size={15}/></button>
        </div>
      </article>)}
    </div>
    {active&&<div className="selected-path card"><div><span className="eyebrow">SELECTED PATH</span><h2>{active.title}</h2><p>{active.summary}</p></div><button className="primary" onClick={()=>openStream(active.id)}>Open full roadmap <ArrowRight size={17}/></button></div>}
    <div className={"stream-launch "+(opening?"show":"")} aria-hidden={!opening}>
      <div className="stream-launch-line"/><div className="stream-launch-core">{active?.icon}</div>
      <div><small>PATHFINDER • OPENING YOUR PATH</small><b>{active?.title||"Your selected stream"}</b></div>
    </div>
  </div>
}

function RoadmapsPage({selectedStream}){
  const stream=streams.find(s=>s.id===selectedStream)||streams[0];
  const roadmap=streamRoadmaps[stream.id]||roadmapStages;
  const [stage,setStage]=useState(roadmap[0]?.id||"foundation");
  const [openSubject,setOpenSubject]=useState(roadmap[0]?.items?.[0]?.title||"");

  useEffect(()=>{
    const first=roadmap[0];
    setStage(first?.id||"foundation");
    setOpenSubject(first?.items?.[0]?.title||"");
  },[selectedStream]);

  useEffect(()=>{
    const current=roadmap.find(x=>x.id===stage)||roadmap[0];
    setOpenSubject(current?.items?.[0]?.title||"");
  },[stage,selectedStream]);

  const filtered=(roadmap.find(x=>x.id===stage)||roadmap[0]);
  const visibleItems=filtered?.items||[];
  return <div className="page">
    <Hero eyebrow={`STEP 03 • ${stream.title}`} title="Your roadmap, one step at a time." text="Click any stage. Then open each subject or sub-topic to see what to learn and where to continue." accent={stream.tone}/>
    <div className="roadmap-layout">
      <aside className="stage-list card">
        <div className="section-title"><Layers3/><div><h2>Roadmap stages</h2><p>{stream.title} • stream-specific 2026–27 path</p></div></div>
        {roadmap.map((r,i)=><button key={r.id} className={stage===r.id?"stage-btn active":"stage-btn"} onClick={()=>setStage(r.id)}>
          <span className="stage-num">{i+1}</span><span><b>{r.title}</b><small>{r.intro.slice(0,72)}…</small></span><ChevronRight size={16}/>
        </button>)}
      </aside>
      <section className="roadmap-detail">
        <div className={"card stage-hero stage-hero-"+stage}><span className="eyebrow">STAGE {roadmap.findIndex(x=>x.id===stage)+1}</span><h2>{filtered.icon} {filtered.title}</h2><p>{filtered.intro}</p><div className="stage-chips"><span>{filtered.items.length} focus areas</span><span>{stream.title} specific</span><span>2026–27 route map</span><span>Official links where provided</span></div></div>
        <div className="subject-grid">
          {visibleItems.map((item,idx)=><article key={item.title} className={"subject-card subject-tone-"+(idx%6)}>
            <button className="subject-head" onClick={()=>setOpenSubject(openSubject===item.title?"":item.title)}>
              <span><b>{item.title}</b><small>{item.description}</small></span><ChevronDown className={openSubject===item.title?"rotate":""}/>
            </button>
            {openSubject===item.title&&<div className="resource-list">
              {item.resources.map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer"><PlayCircle size={16}/><span>{name}</span><ExternalLink size={14}/></a>)}
            </div>}
          </article>)}
        </div>
      </section>
    </div>
  </div>
}

function ExamsPage(){
  const [filter,setFilter]=useState("All");
  const groups=["All",...new Set(exams.map(e=>e.group))];
  const shown=filter==="All"?exams:exams.filter(e=>e.group===filter);
  return <div className="page">
    <Hero eyebrow="STEP 04 • COMPETITIVE EXAMS" title="Know the exam before you prepare for it." text="Official links stay one click away. Use the current notification for eligibility, dates, syllabus and counselling rules." accent="saffron"/>
    <div className="india-strip"><div className="flag-mark"><i/><i/><i/></div><div><b>India-wide exam hub</b><span>Entrance routes from engineering and medicine to law, management, civil services and design.</span></div></div>
    <div className="filter-row">{groups.map(g=><button key={g} className={filter===g?"filter active":"filter"} onClick={()=>setFilter(g)}>{g}</button>)}</div>
    <div className="exam-grid">{shown.map((e,i)=><article className={"exam-card exam-tone-"+(i%8)} key={e.id}><div className="exam-watermark" aria-hidden="true">{examSymbol(e.name)}</div><div className="exam-icon" aria-label={`${e.name} mark`}><span className="exam-logo-text">{examSymbol(e.name)}</span></div><span className="exam-group">{e.group}</span><h3>{e.name}</h3><p>{e.about}</p><small><b>Eligibility:</b> {e.eligibility}</small><a className="outline full" href={e.official} target="_blank" rel="noreferrer">Open official source <ExternalLink size={15}/></a></article>)}</div>
  </div>
}

function InstitutionsPage(){
  const [query,setQuery]=useState(""); const [type,setType]=useState("All"); const [activeId,setActiveId]=useState(null);
  const types=["All",...new Set(institutions.map(i=>i.type))];
  const shown=institutions.filter(i=>(type==="All"||i.type===type)&&(`${i.name} ${i.state} ${i.focus}`.toLowerCase().includes(query.toLowerCase())));
  const activeInstitution=shown.find(i=>i.id===activeId) || institutions.find(i=>i.id===activeId);
  const activeDetails=activeInstitution?(institutionDetails[activeInstitution.name]||institutionDetails.default):null;
  return <div className="page institutions-page">
    <Hero eyebrow="STEP 05 • INSTITUTION EXPLORER" title="Compare institutions across India." text="Compare programme fit, total cost, location, campus experience, placement or research emphasis, and career direction in one focused view." accent="teal"/>
    <div className="explorer-tools card"><div className="input-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search college, state or course…"/></div><div className="filter-row">{types.map(t=><button key={t} className={type===t?"filter active":"filter"} onClick={()=>setType(t)}>{t}</button>)}</div></div>
    <div className="institution-count">{shown.length} institutions in this starter catalogue</div>
    <div className="institution-grid">{shown.map(i=>{ const d=institutionDetails[i.name]||institutionDetails.default; return <article className="institution-card" key={i.id}>
      <div className="institution-top"><span className="type-pill">{i.type}</span><span className="state-pill"><MapPin size={13}/>{i.state}</span></div>
      <h3>{i.name}</h3><p>{i.focus}</p>
      <div className="institution-compare"><div><small>Programme fit</small><b>{d.programFit||i.focus}</b></div><div><small>Location</small><b>{d.location||i.state}</b></div><div><small>Career direction</small><b>{d.careerDirection||"Depends on the selected programme"}</b></div></div>
      <button className="institution-open" onClick={()=>setActiveId(i.id)}><span>Compare institute</span><ArrowRight size={15}/></button>
    </article>})}</div>
    {activeInstitution&&activeDetails&&<div className="institution-modal-backdrop" role="presentation" onClick={()=>setActiveId(null)}>
      <section className="institution-modal" role="dialog" aria-modal="true" aria-label={`Compare ${activeInstitution.name}`} onClick={e=>e.stopPropagation()}>
        <button className="modal-x institution-modal-x" onClick={()=>setActiveId(null)} aria-label="Close comparison"><X/></button>
        <div className="institution-modal-head"><div><span className="eyebrow">INSTITUTE COMPARISON</span><h2>{activeInstitution.name}</h2><p>{activeInstitution.focus} • {activeInstitution.state}</p></div><span className="modal-mark">{activeInstitution.type}</span></div>
        <div className="institution-detail-modal">
          <div className="detail-cell"><small>Programme fit</small><b>{activeDetails.programFit||activeInstitution.focus}</b></div>
          <div className="detail-cell"><small>Total cost / fee snapshot</small><b>{activeDetails.fee}</b></div>
          <div className="detail-cell"><small>Student-fit criteria</small><b>{activeDetails.criteria}</b></div>
          <div className="detail-cell"><small>Location</small><b>{activeDetails.location||activeInstitution.state}</b></div>
          <div className="detail-cell"><small>Campus experience</small><b>{activeDetails.campus}</b></div>
          <div className="detail-cell"><small>Placement / research</small><b>{activeDetails.placementResearch}</b></div>
          <div className="detail-cell"><small>Career direction</small><b>{activeDetails.careerDirection||"Depends on the selected programme"}</b></div>
        </div>
        <div className="institution-modal-actions">{activeDetails.source&&<a className="outline full" href={activeDetails.source} target="_blank" rel="noreferrer">Open official institute / fee source <ExternalLink size={14}/></a>}<button className="primary" onClick={()=>setActiveId(null)}>Done comparing <Check size={15}/></button></div>
        <small className="institution-disclaimer">Fee snapshots can change by year, category and programme. Use the official source for final figures.</small>
      </section>
    </div>}
  </div>
}

function CareersPage({selectedStream="pcm"}){
  const stream=streams.find(s=>s.id===selectedStream)||streams[0];
  const available=careers.filter(c=>c.streams?.includes(selectedStream));
  const [active,setActive]=useState(available[0]?.id||careers[0]?.id);
  const activeId=available.some(c=>c.id===active)?active:(available[0]?.id||careers[0]?.id);
  const career=careers.find(c=>c.id===activeId)||available[0]||careers[0];
  return <div className="page">
    <Hero eyebrow="STEP 06 • CAREER PATH" title={`Career paths for ${stream.title.replace("Science • ","")}.`} text={`These options are filtered to the selected ${stream.title.replace("Science • ","")} stream. Open a card to compare the route, skills, portfolio ideas and related directions.`} accent={stream.tone}/>
    <div className="career-stream-note"><span className="career-stream-icon">{stream.icon}</span><div><b>{stream.title}</b><small>{available.length} stream-matched career paths • switch streams to see a different career set</small></div></div>
    <div className="career-tabs">{available.map(c=><button key={c.id} className={activeId===c.id?"career-tab active":"career-tab"} onClick={()=>setActive(c.id)}><span className={`career-dot ${c.tone}`}/>{c.title}<ChevronRight size={15}/></button>)}</div>
    <section className={`card career-detail ${career.tone}`}><div className="career-heading"><div><span className="eyebrow">CAREER PATH • {career.track}</span><h2>{career.title}</h2><p>{career.summary}</p></div><div className="career-badge">{career.degree}</div></div>
      <div className="career-highlight-grid">
        <article><span><BriefcaseBusiness size={16}/></span><small>Typical work</small><b>{career.work}</b></article>
        <article><span><Code2 size={16}/></span><small>Portfolio starter</small><b>{career.portfolio}</b></article>
        <article><span><Network size={16}/></span><small>Core direction</small><b>{career.direction}</b></article>
      </div>
      <div className="career-columns"><div><h4>Step-by-step route</h4><div className="timeline">{career.route.map((r,i)=><div className="timeline-item" key={r}><span>{i+1}</span><div><b>{r}</b>{i<career.route.length-1&&<small>Next step → build the required eligibility, skills and evidence.</small>}</div></div>)}</div></div>
      <div><h4>What to build</h4><div className="tag-row big">{career.next.map(x=><span key={x}>{x}</span>)}</div><h4>Related alternatives</h4><div className="alternative-list">{career.alternatives.map(x=><div key={x}><ArrowRight size={15}/>{x}</div>)}</div></div></div>
    </section>
  </div>
}

function FundingPage({profile,selectedStream,setSelectedStream}){
  const stream=profile.stream||selectedStream||"pcm";
  const shown=scholarships.filter(s=>s.streams.includes(stream));
  return <div className="page">
    <Hero eyebrow="FUNDING • SCHOLARSHIPS & LOANS" title="Make money planning part of the roadmap." text="Scholarships are filtered by the stream you select. Eligibility is scheme-specific, so the official portal remains the final check." accent="gold"/>
    <div className="funding-selector card"><div><b>Show scholarships for</b><span>{streams.find(s=>s.id===stream)?.title}</span></div><select value={stream} onChange={e=>setSelectedStream(e.target.value)}>{streams.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}</select></div>
    <div className="funding-summary"><div><ShieldCheck size={19}/><span><b>Funding snapshot</b><small>Check current scheme rules before every application.</small></span></div><strong>{shown.length} options</strong><strong>3 loan guides</strong></div>
    <div className="funding-grid"><section className="card scholarship-panel"><div className="section-title"><ShieldCheck/><div><h2>Scholarships & schemes</h2><p>{shown.length} relevant entries for this stream</p></div></div>{shown.map((s,i)=><article className={"scholarship-card scholarship-tone-"+(i%4)} key={s.name}><div className="scholarship-icon">₹</div><div className="scholarship-body"><div className="scholarship-top"><b>{s.name}</b><span>{s.type}</span></div><small>{s.provider}</small><p>{s.eligibility}</p><div className="coverage">{s.coverage}</div><a href={s.link} target="_blank" rel="noreferrer">Check official portal <ExternalLink size={14}/></a></div></article>)}</section>
      <section className="card loan-panel"><div className="section-title"><WalletCards/><div><h2>Education-loan checklist</h2><p>Compare total borrowing cost, not just EMI.</p></div></div>{loans.map(l=><div className="loan-row" key={l.name}><b>{l.name}</b><p><strong>Interest:</strong> {l.rate}</p><p><strong>Collateral:</strong> {l.collateral}</p><p><strong>Moratorium:</strong> {l.moratorium}</p><small>{l.compare}</small></div>)}</section></div>
  </div>
}

function Simulator({profile}){
  const [scenario,setScenario]=useState("budget"); const [value,setValue]=useState("50000");
  const percentage=Number(profile.percentage)||70, budget=Number(profile.budget)||150000;
  const base=percentage>=85?"strong academic signal":percentage>=70?"moderate academic signal":"needs academic strengthening";
  const outputs={
    budget:{title:`If your budget becomes ₹${Number(value||0).toLocaleString("en-IN")}/year`,items:["Compare government institutions and lower-fee programmes.","Filter scholarships for the selected stream.","Compare hostel, travel and living costs—not only tuition.","Keep more than one eligible route in the shortlist."]},
    jee:{title:"If you don't clear JEE Main / JEE Advanced",items:["Compare MHT-CET and other engineering entrance routes that accept your subject background.","Consider B.Tech / B.E., BCA, BSc Computer Science, BSc IT, Data Science and diploma-to-degree routes where eligible.","Use your PCM preparation for overlapping entrance routes where current rules allow.","Rebuild the shortlist using current eligibility, fees, location and branch availability."]},
    cet:{title:"If you don't clear MHT-CET",items:["Compare JEE Main, other state/private university routes and institute-level opportunities where eligible.","Consider B.Tech / B.E., BCA, BSc CS/IT, Data Science, B.Voc and diploma pathways.","Review branch flexibility and total cost rather than focusing on one college only.","Check the current Maharashtra CET Cell and institution notices before applying."]},
    neet:{title:"If you don't clear NEET-UG",items:["Consider BSc Nursing, B.Pharm, BPT, biotechnology, microbiology, agriculture, food science and other allied-health/life-science routes.","Check CUET, university merit, separate entrance and institute-specific routes programme by programme.","Compare course duration, fees, practical exposure and career direction.","Keep multiple eligible health and life-science pathways ready before counselling closes."]},
    cuet:{title:"If CUET-UG does not go as planned",items:["Compare state-university and autonomous-college admission routes for BA, BSc, BCom, BBA and related programmes.","Look for merit-based or institution-specific applications where available.","Compare the exact course structure, total cost, location and progression options.","Keep an alternate college list before application windows close."]},
    clat:{title:"If you don't clear CLAT / AILET",items:["Compare other recognised law-admission routes, including university-specific entrance or merit routes where available.","Consider the 5-year integrated LLB route at institutions accepting their own admission process.","Keep legal studies, compliance, policy and corporate-law directions in view.","Check the current university notification for eligibility and intake."]},
    design:{title:"If NID DAT / UCEED / design admissions don't work out",items:["Consider BDes, BFA, communication design, interaction design, fashion, animation and multimedia routes.","Use portfolio work, drawing and design fundamentals to strengthen the next application cycle.","Compare institute-specific aptitude, portfolio and entrance requirements.","Keep a practical parallel route such as BA/BSc with design skill-building where it fits your goals."]},
    management:{title:"If IPMAT / integrated management does not work out",items:["Compare BBA, BMS, BCom and BA Economics routes at universities and autonomous colleges.","Add CAT / management preparation later after graduation if that fits the plan.","Compare specialisations such as finance, marketing, analytics, HR and entrepreneurship.","Check current institution-level eligibility and admission notices."]},
    commerce:{title:"If a commerce professional route changes",items:["Compare BCom, BCom Finance, BCom FinTech, BBA, BMS and Economics degrees.","Keep CA, CS, CMA and finance/data certifications as parallel or later options where eligible.","Build spreadsheet, accounting, communication and analytics skills alongside the degree.","Compare total cost, study time and career direction before switching routes."]},
    defence:{title:"If NDA / defence selection does not work out",items:["Keep degree-based routes open and explore graduation-first pathways that can lead to later defence examinations where eligible.","Consider engineering, science, commerce or humanities based on your academic strengths.","Maintain fitness and communication habits if defence remains a long-term goal.","Verify the current UPSC and service-specific eligibility before each cycle."]},
    agriculture:{title:"If agriculture admission does not go as planned",items:["Compare BSc Agriculture, horticulture, forestry, food technology, fisheries and life-science routes.","Check ICAR-linked and university-specific admission rules for the current year.","Compare fieldwork, labs, location and higher-study options.","Keep allied science programmes as a practical alternative."]},
    boards:{title:"If your board marks are lower than expected",items:["Separate one result from your long-term pathway planning.","Strengthen subjects required for the next stage and entrance preparation.","Use improvement / supplementary opportunities only where current board rules permit.","Shortlist routes using eligibility plus skills, not percentage alone."]},
    abroad:{title:"If an abroad plan becomes unaffordable",items:["Compare an India-first degree with a later postgraduate option abroad.","Check scholarships, assistantships and institution funding.","Compare tuition, living cost, currency, visa and loan burden.","Re-check current official costs before making the final plan."]}
  }[scenario];
  return <div className="page simulator-page"><Hero eyebrow="WHAT-IF SIMULATOR" title="Test the plan before life tests it." text="Change one assumption and see realistic alternative outcomes across major Indian education routes." accent="violet"/>
    <div className="sim-cluster" aria-hidden="true"><span className="sc1"/><span className="sc2"/><span className="sc3"/><span className="sc4"/><span className="sc5"/><span className="sc6"/><span className="sim-star s1"/><span className="sim-star s2"/><span className="sim-star s3"/><span className="sim-star s4"/></div>
    <div className="sim-grid"><div className="card"><label>Scenario<select value={scenario} onChange={e=>setScenario(e.target.value)}>
      <option value="budget">My budget is reduced</option><option value="jee">I don't clear JEE Main / Advanced</option><option value="cet">I don't clear MHT-CET</option><option value="neet">I don't clear NEET-UG</option><option value="cuet">CUET-UG does not go as planned</option><option value="clat">I don't clear CLAT / AILET</option><option value="design">Design entrance does not work out</option><option value="management">IPMAT / management route changes</option><option value="commerce">My commerce professional route changes</option><option value="defence">NDA / defence selection does not work out</option><option value="agriculture">Agriculture admission changes</option><option value="boards">My board marks are lower than expected</option><option value="abroad">My abroad plan becomes unaffordable</option>
    </select></label>{scenario==="budget"&&<label>New annual budget (₹)<input type="number" value={value} onChange={e=>setValue(e.target.value)}/></label>}<div className="profile-signal"><b>Current profile signal</b><span>{base}</span><small>Academic percentage: {percentage}% • Budget: ₹{budget.toLocaleString("en-IN")}</small></div></div>
      <div className="card scenario-result"><span className="eyebrow">SIMULATION OUTPUT</span><h2>{outputs.title}</h2>{outputs.items.map(x=><div className="result-item" key={x}><Check/><span>{x}</span></div>)}</div></div>
    <DecisionMatrix profile={profile}/></div>
}
function DecisionMatrix({profile}){
  const pct=Number(profile.percentage)||70;
  const rows=[
    ["JEE Main / Advanced → Engineering","Entrance + academics",pct>=70?"Potentially suitable":"Needs strengthening","Competition + branch availability","Current exam rules / cut-offs vary","MHT-CET / institute route / BCA / BSc CS"],
    ["MHT-CET → Maharashtra Engineering","Entrance + academics",pct>=65?"Potentially suitable":"Needs strengthening","CAP + branch demand","Current cut-offs and seat matrix vary","JEE Main / alternate branch / allied tech"],
    ["NEET-UG → Medical","PCB + entrance",pct>=75?"Potentially suitable":"Needs strengthening","Long training pathway","Current counselling + eligibility rules","Allied health / pharmacy / biotechnology"],
    ["NEET alternatives → Health / Life Science","Interest + subject fit","Explore","Course-specific admissions","Programme rules vary","Nursing / physiotherapy / pharmacy / biotech"],
    ["Commerce → Finance / Management","Interest + academic fit","Explore","Programme + entrance dependent","Institute rules vary","Economics / BBA / FinTech / entrepreneurship"],
    ["Arts → Law / Policy","Interest + aptitude","Explore","Entrance + course dependent","Current admission routes vary","Public policy / research / media / social sciences"]
  ];
  return <section className="matrix card"><div className="section-title"><Target/><div><h2>Decision matrix</h2><p>More scenarios, clearer alternatives and the assumptions behind them.</p></div></div><div className="table-wrap"><table><thead><tr><th>Pathway</th><th>Factor</th><th>Current signal</th><th>Constraint</th><th>Uncertainty</th><th>Alternative</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i}>{x}</td>)}</tr>)}</tbody></table></div><small className="assumption">Assumptions: percentage and budget are incomplete indicators; subject marks, aptitude, eligibility, current admission rules, counselling and preferences can materially change the result.</small></section>
}

function Mahi({profile}){
  const [messages,setMessages]=useState([{role:"mahi",text:"Welcome to Mahi Quest! Pick a mission or type your own question. We’ll explore one pathway at a time."}]);
  const [input,setInput]=useState("");
  const [xp,setXp]=useState(40);
  const quests=["Pick my PCM path","I don’t clear NEET","Compare BCom vs BBA","Best options after Class 12 Arts","I have a limited budget","What can I do after ITI?"];
  function answer(q){
    const x=q.toLowerCase();
    if(x.includes("neet")||x.includes("mbbs"))return "Mission result: Medical is one route, not the only route. Compare MBBS/BDS with nursing, pharmacy, physiotherapy, biotechnology, nutrition and other eligible life-science pathways before counselling closes.";
    if(x.includes("budget")||x.includes("money")||x.includes("fee"))return "Mission result: Compare total course cost, scholarships, fee waivers, hostel/commute and loan repayment—not just the first-year fee.";
    if(x.includes("bcom")||x.includes("bba")||x.includes("commerce"))return "Mission result: BCom leans more toward accounting/finance foundations, while BBA/BMS leans toward management and business. Keep professional routes like CA alongside either where eligible.";
    if(x.includes("arts")||x.includes("humanit"))return "Mission result: Arts can lead into law, psychology, journalism, public policy, civil services, education, media, design and many research-oriented routes.";
    if(x.includes("iti")||x.includes("vocational")||x.includes("diploma"))return "Mission result: ITI/polytechnic/vocational routes can lead to technician, automation, CAD, EV, solar, IT support and later higher-study or lateral-entry options.";
    if(x.includes("pcm")||x.includes("engineering")||x.includes("jee"))return "Mission result: PCM can open engineering, computing, architecture, data, cybersecurity, cloud and physical-science routes. Compare JEE, state and institute pathways.";
    if(x.includes("pcb")||x.includes("doctor")||x.includes("biology"))return "Mission result: PCB opens medical, dental, pharmacy, physiotherapy, biotechnology, nutrition, life-science research and related health pathways.";
    return `Profile mission: ${profile.percentage?profile.percentage+"%":"marks not yet filled"} • ${profile.location||"India"}. I can help compare streams, exams, institutions, careers, scholarships and what-if scenarios.`;
  }
  function sendQuestion(q){
    if(!q.trim())return;
    setMessages(m=>[...m,{role:"user",text:q.trim()},{role:"mahi",text:answer(q.trim())}]);
    setXp(v=>Math.min(100,v+10));
    setInput("");
  }
  function send(e){e?.preventDefault();sendQuestion(input)}
  return <div className="page mahi-page game-mahi-page"><Hero eyebrow="MAHI • PATHFINDER QUEST" title="Turn career planning into a mission." text="Choose a mission, earn XP and explore your next move. Mahi gives guided comparisons so you can test ideas without losing your profile." accent="violet"/>
    <section className="mahi-game-board">
      <div className="mahi-game-glow glow-1"/><div className="mahi-game-glow glow-2"/><div className="mahi-game-glow glow-3"/><div className="mahi-game-stars"/>
      <div className="mahi-game-top"><div className="mahi-game-avatar"><Sparkles size={28}/></div><div><small>PATHFINDER QUEST GUIDE</small><h2>Mahi</h2><span>Level {Math.floor(xp/50)+1} • pathway explorer</span></div><div className="mahi-xp"><div><b>{xp} XP</b><span>next level</span></div><i><em style={{width:`${xp}%`}}/></i></div></div>
      <div className="mahi-quest-panel"><div className="quest-title"><span>Daily missions</span><b>Choose a question to start</b></div><div className="quest-grid">{quests.map((q,i)=><button key={q} className={`quest-card q${i+1}`} onClick={()=>sendQuestion(q)}><span className="quest-icon">{i===0?<Target/>:i===1?<Stethoscope/>:i===2?<BarChart3/>:i===3?<BookOpen/>:i===4?<WalletCards/>:<Wrench/>}</span><div><small>MISSION {String(i+1).padStart(2,"0")}</small><b>{q}</b></div><ChevronRight/></button>)}</div></div>
      <div className="mahi-game-hint"><Lightbulb size={16}/><span>Tip: ask Mahi one decision at a time — marks, budget, exam, course or career.</span></div>
    </section>
    <div className="discussion-intro"><div className="discussion-icon"><MessageCircle size={20}/></div><div><b>Student quest chat</b><span>Talk to Mahi, test choices and turn questions into next-step missions.</span></div><div className="discussion-chips"><span>Exams</span><span>Careers</span><span>Fees</span><span>Colleges</span></div></div>
    <div className="chat game-chat"><div className="chat-head"><div className="mahi-avatar"><Sparkles/></div><div><b>Mahi</b><small>Quest guide • profile-aware</small></div><span className="chat-online">● ONLINE</span></div><div className="messages">{messages.map((m,i)=><div key={i} className={`bubble ${m.role}`}>{m.text}</div>)}</div><form onSubmit={send} className="chat-input"><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your mission… e.g. What if I don't clear NEET?"/><button className="primary" aria-label="Send mission"><ArrowRight/></button></form></div>
  </div>
}

function AuthModal({mode,setMode,close}){
  const [name,setName]=useState(""),[email,setEmail]=useState(""),[password,setPassword]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState("");
  async function submit(e){e.preventDefault();setBusy(true);setError("");
    if(!supabase){setError("Add Supabase environment variables first.");setBusy(false);return;}
    let result=mode==="signup"?await supabase.auth.signUp({email,password,options:{data:{name}}}):await supabase.auth.signInWithPassword({email,password});
    if(result.error)setError(result.error.message);
    else if(mode==="signup")setError("Account created. Check your email if confirmation is enabled.");
    else close();
    setBusy(false);
  }
  return <div className="modal-backdrop"><div className="auth-modal"><button className="modal-x" onClick={close}><X/></button><div className="auth-logo"><BrainCircuit/></div><h2>{mode==="login"?"Welcome back":"Create your Pathfinder account"}</h2><p>Save your profile and continue your pathway later.</p><form onSubmit={submit}>{mode==="signup"&&<label>Name<input required value={name} onChange={e=>setName(e.target.value)}/></label>}<label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input required minLength="6" type="password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{error&&<div className="error">{error}</div>}<button className="primary full" disabled={busy}>{busy?"Please wait…":mode==="login"?"Login":"Create account"}</button></form><button className="switch-auth" onClick={()=>{setMode(mode==="login"?"signup":"login");setError("")}}>{mode==="login"?"New here? Create an account":"Already have an account? Login"}</button></div></div>
}

export default App;
