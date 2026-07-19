import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './gallery.css'

const projects = [
  { id:'smart', client:'smart', title:'Making a new EV easy to understand', tags:['Integrated Campaign','Product Launch','Global Collaboration'], intro:'An integrated launch campaign that translated a complex new EV proposition into clear communication across customer touchpoints.', context:'Launching a new EV meant translating numerous technical features into simple, engaging messages while coordinating teams across Germany and China.', roles:['Account Lead','Client Communication','Global Collaboration'], did:['Turned product information and client input into clear briefs','Coordinated day-to-day communication between China and Germany teams','Aligned creative, social, website and e-commerce workstreams','Managed review rounds, timelines and cross-channel delivery'], outcome:'The launch was delivered as one connected campaign across digital and offline touchpoints, with teams aligned around a consistent product story.', color:'#8fcbd2', hero:'/projects/smart/hero-kv.jpg', assets:[{type:'video',src:'/projects/smart/design-film.mp4',label:'Design Film · 30 sec'},{type:'video',src:'/projects/smart/performance-film.mp4',label:'Performance Film'},{type:'image',src:'/projects/smart/premium-seats.jpg',label:'Premium Seats'},{type:'image',src:'/projects/smart/pulse-console.jpg',label:'Pulse Console Storage'},{type:'image',src:'/projects/smart/halo-roof.jpg',label:'Halo Roof'},{type:'image',src:'/projects/smart/body-stability.jpg',label:'Body Stability'},{type:'image',src:'/projects/smart/trunk.jpg',label:'Trunk'}] },
  { id:'pgi', client:'PGI', title:'Reframing platinum for modern relationships', tags:['Brand Repositioning','Integrated Campaign','Youth Communication'], intro:'A brand communication project that explored a more contemporary role for platinum jewelry beyond traditional wedding occasions.', context:'With declining marriage rates, PGI needed to reposition platinum jewelry beyond weddings and connect with younger couples.', roles:['Account Lead','Campaign Planning','Client Communication'], did:['Helped translate the business challenge into a focused campaign brief','Coordinated consumer and category inputs with strategy and creative teams','Managed client feedback and cross-functional collaboration','Supported consistent messaging across campaign deliverables'], outcome:'The project established a more relevant communication direction for younger audiences and delivered a cohesive set of campaign touchpoints.', color:'#d7c4f2', hero:'/projects/pgi/hero-kv.jpg', assets:[{type:'video',src:'/projects/pgi/lazy-story.mp4',label:'Becoming Lazy · English Version'},{type:'video',src:'/projects/pgi/photo-story.mp4',label:'Taking Photos · English Version'},{type:'image',src:'/projects/pgi/hero-kv.jpg',label:'Campaign Key Visual 01'},{type:'image',src:'/projects/pgi/kv-02.jpg',label:'Campaign Key Visual 02'},{type:'image',src:'/projects/pgi/kv-03.jpg',label:'Campaign Key Visual 03'}] },
  { id:'momcozy', client:'Momcozy', title:'Making shared parenting part of the story', tags:["Father's Day",'Brand Repositioning','Social Campaign'], intro:'A Father’s Day campaign that shifted the conversation from supporting mothers alone to encouraging shared parenting.', context:"Momcozy needed to reposition the brand from supporting mothers to promoting shared parenting during Father's Day.", roles:['Marketing Communication','Project Management','Creative Collaboration'], did:['Helped shape the communication brief around shared parenting','Coordinated messaging and content development across the team','Managed project feedback and stakeholder communication','Supported campaign delivery across social and brand touchpoints'], outcome:'The campaign gave the brand a broader, more inclusive parenting narrative and delivered a consistent Father’s Day communication experience.', color:'#f0a68e', hero:'/projects/momcozy/hero-kv.jpg', assets:[{type:'mpeg',src:'/projects/momcozy/campaign-film.mpg',label:'Father’s Day Campaign Film · 66 sec'},{type:'image',src:'/projects/momcozy/hero-kv.jpg',label:'Campaign Key Visual'},{type:'image',src:'/projects/momcozy/june-social-01.jpg',label:'June Social Content 01'},{type:'image',src:'/projects/momcozy/june-social-02.jpg',label:'June Social Content 02'},{type:'image',src:'/projects/momcozy/social-03.jpg',label:'Shared Parenting Social 01'},{type:'image',src:'/projects/momcozy/social-08.jpg',label:'Shared Parenting Social 02'},{type:'image',src:'/projects/momcozy/fathers-day-04.jpg',label:'Father’s Day Social 01'},{type:'image',src:'/projects/momcozy/fathers-day-05.jpg',label:'Father’s Day Social 02'},{type:'image',src:'/projects/momcozy/fathers-day-06.jpg',label:'Father’s Day Social 03'},{type:'image',src:'/projects/momcozy/fathers-day-07.jpg',label:'Father’s Day Social 04'}] },
  { id:'comfort', client:'Comfort', title:'Building attention around a celebrity launch', tags:['Celebrity Campaign','Product Launch','FMCG'], intro:'A celebrity-led launch campaign created to build broad awareness for a new Comfort product.', context:'Comfort needed to launch a celebrity campaign with Dilraba to maximize awareness for a new product.', roles:['Account Assistant','Project Coordination','Creative Collaboration'], did:['Supported market and competitor research for campaign planning','Contributed to creative brainstorming and proposal preparation','Coordinated communication between client, creative teams and vendors','Followed up on production feedback and campaign asset delivery'], outcome:'The celebrity campaign and supporting assets were successfully coordinated from proposal through production and launch.', color:'#b7d7ad', hero:'/projects/comfort/hero-lasting-fragrance.jpg', assets:[{type:'video',src:'/projects/comfort/celebrity-film.mp4',label:'Celebrity Campaign Film · 15 sec'},{type:'video',src:'/projects/comfort/dog-film.m4v',label:'Dog Story Film · 15 sec'},{type:'video',src:'/projects/comfort/flower-film.mp4',label:'Flower Story Film · 15 sec'},{type:'image',src:'/projects/comfort/hero-lasting-fragrance.jpg',label:'Long-lasting Fragrance KV'},{type:'image',src:'/projects/comfort/softness-kv.jpg',label:'Softness & Comfort KV'},{type:'image',src:'/projects/comfort/color-care-kv.jpg',label:'Shape & Color Care KV'}] },
  { id:'employer-branding', client:'Employer Branding', title:'Turning employer value into candidate relevance', tags:['Employer Branding','Campus Recruitment','Talent Communication'], intro:'Employer branding and campus recruitment programs for adidas, Coach, Sephora and other global brands.', context:'Brands needed to communicate their employer value proposition clearly so they could attract top talent in a competitive hiring market.', roles:['Project Management','Marketing Communication','Cross-functional Collaboration'], did:['Translated employer propositions into candidate-facing communication plans','Planned WeChat and campaign content around brand and audience needs','Coordinated clients, strategists, copywriters and creative teams','Managed stakeholder feedback, quality and delivery across parallel projects','Supported research and ideation with AI tools'], outcome:'The programs delivered clear, brand-consistent employer communication across digital and offline candidate touchpoints.', color:'#d9ef66', hero:'/projects/employer-branding/hero-hundsun.jpg', assets:[{type:'image',src:'/projects/employer-branding/hero-hundsun.jpg',label:'HUNDSUN Campus Recruitment'},{type:'image',src:'/projects/employer-branding/uaes-camp.jpg',label:'UAES U+AI Challenge Camp'},{type:'image',src:'/projects/employer-branding/adidas-program.jpg',label:'adidas Future Store Manager Program'},{type:'image',src:'/projects/employer-branding/sephora-material.jpg',label:'Sephora Employer Brand Material'},{type:'image',src:'/projects/employer-branding/budweiser-event.jpg',label:'Budweiser Event Material'},{type:'image',src:'/projects/employer-branding/hengbao-ip.jpg',label:'Employer Brand IP Character'},{type:'image',src:'/projects/employer-branding/campaign-poster.jpg',label:'Recruitment Campaign Poster'},{type:'image',src:'/projects/employer-branding/recruitment-poster.jpg',label:'Offline Recruitment Poster'},{type:'image',src:'/projects/employer-branding/recruitment-longform-01.jpg',label:'Recruitment Communication Longform 01'},{type:'image',src:'/projects/employer-branding/recruitment-longform-02.jpg',label:'Recruitment Communication Longform 02'}] },
]

projects.find(project => project.id === 'momcozy').assets[0] = {
  type: 'video',
  src: '/projects/momcozy/campaign-film.mp4',
  label: 'Father’s Day Campaign Film · 66 sec',
}

const experience = [
  ['2024 — Present','Project Manager, Employer Branding','51job · Shanghai','adidas, Coach, HUNDSUN, UAES, Sephora, Lianjia'],
  ['2020 — 2024','Account Manager','Serviceplan · Shanghai','smart, HiPP, Milkana, PGI'],
  ['2019 — 2020','Account Executive','Ogilvy · Shanghai','Unilever (Comfort), Wyeth'],
]

function App(){
  const [activeProject,setActiveProject]=useState(null)
  const [activeMedia,setActiveMedia]=useState(null)
  const [menu,setMenu]=useState(false)
  const go=(id)=>{ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenu(false) }
  useEffect(()=>{ document.body.style.overflow=activeProject?'hidden':''; return()=>{document.body.style.overflow=''} },[activeProject])
  useEffect(()=>{ const onKey=(e)=>{if(e.key==='Escape'){if(activeMedia)setActiveMedia(null);else setActiveProject(null)}}; addEventListener('keydown',onKey); return()=>removeEventListener('keydown',onKey)},[activeMedia])
  return <>
    <header className="site-nav">
      <button className="brand" onClick={()=>go('about')}>Celia Chen<span>.</span></button>
      <nav className={menu?'open':''}>{['About','Selected Work','Resume','Contact'].map(x=><button key={x} onClick={()=>go(x.toLowerCase().replace('selected work','work'))}>{x}</button>)}</nav>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?'Close':'Menu'}</button>
    </header>

    <main>
      <section className="about page-section" id="about">
        <div className="section-label">01 · About</div>
        <div className="about-copy">
          <div className="about-intro">
            <div>
              <h2>Communication is not decoration. <em>It is how an idea moves.</em></h2>
              <p className="hello">Hi, I’m Celia. I enjoy turning complex ideas into experiences that feel clear, thoughtful and human.</p>
            </div>
            <figure className="about-portrait">
              <div className="portrait-shape" />
              <img src="/celia-chen.jpeg" alt="Celia Chen" />
              <figcaption>Based in Shanghai · Always curious</figcaption>
            </figure>
          </div>
          <div className="two-col">
            <p>Over the past five years, I’ve worked across marketing, branding and creative communications—partnering with global brands to deliver campaigns that connect with people in meaningful ways.</p>
            <p>My role is to bring clarity to the process: understand the objective, shape the story, align different disciplines and make sure the final experience feels coherent wherever people meet it.</p>
          </div>
          <div className="principles"><span>Curiosity</span><span>Clarity</span><span>Thoughtful collaboration</span></div>
        </div>
      </section>

      <section className="work page-section" id="work">
        <div className="section-label light">02 · Selected Work</div>
        <div className="work-heading"><h2>Selected stories,<br/><em>not just outputs.</em></h2><p>Each case study follows the thinking behind the work—from context and challenge through approach and outcome.</p></div>
        <div className="project-list">
          {projects.map((p,i)=><button className="project-row" onClick={()=>setActiveProject(p)} key={p.id} style={{'--project':p.color}}>
            <span className="project-no">0{i+1}</span><span className="project-client">{p.client}</span><span className="project-title">{p.title}</span><span className="project-open">Read case ↗</span>
          </button>)}
        </div>
      </section>

      <section className="resume page-section" id="resume">
        <div className="section-label">03 · Resume</div>
        <div className="resume-wrap">
          <h2>Experience across<br/><em>strategy and delivery.</em></h2>
          <div className="timeline">{experience.map(x=><article key={x[1]}><p>{x[0]}</p><div><h3>{x[1]}</h3><strong>{x[2]}</strong><span>Selected clients: {x[3]}</span></div></article>)}</div>
          <div className="resume-bottom">
            <div><p className="mini-label">Education</p><h3>The University of Sydney</h3><span>Master of Digital Communication &amp; Culture · 2020</span><h3>Hunan University</h3><span>Bachelor of Advertising · 2018</span></div>
            <div><p className="mini-label">Capabilities</p><p>Integrated marketing · Employer branding · Content planning · Project management · Stakeholder communication · AI-assisted ideation</p></div>
          </div>
        </div>
      </section>

      <section className="contact page-section" id="contact">
        <div className="section-label light">04 · Contact</div>
        <div className="contact-details">
          <h2>Contact</h2>
          <a href="mailto:csy3582@outlook.com"><span>Email</span>csy3582@outlook.com ↗</a>
          <a href="tel:+8617621734090"><span>Phone</span>+86 176 2173 4090 ↗</a>
          <p><span>Location</span>Shanghai, China</p>
        </div>
        <footer><span>© {new Date().getFullYear()} Celia Chen</span><a href="tel:+8617621734090">+86 176 2173 4090</a><button onClick={()=>go('about')}>Back to top ↑</button></footer>
      </section>
    </main>

    {activeProject&&<div className="case-overlay" role="dialog" aria-modal="true" aria-label={`${activeProject.client} case study`}>
      <button className="close-case" onClick={()=>setActiveProject(null)}>Close ×</button>
      <article className="case-study">
        <header className="case-hero text-only" style={{'--project':activeProject.color}}><p>Case Study</p><h2>{activeProject.client}</h2></header>
        <section className="project-tags"><p className="case-label">Project Tags</p><div className="case-tags">{activeProject.tags.map(tag=><span key={tag}>{tag}</span>)}</div></section>
        <section className="case-overview"><p className="case-label">Overview</p><p className="case-lead">{activeProject.intro}</p></section>
        <section className="case-context"><p className="case-label">Context</p><h3>{activeProject.context}</h3></section>
        <section className="role-block"><p className="case-label">My Role</p><div className="role-tags">{activeProject.roles.map(role=><span key={role}>{role}</span>)}</div><p>Focused on communication, coordination and campaign delivery.</p></section>
        <div className="case-chapters">
          <section className="what-i-did"><p className="case-label">What I Did</p><ul>{activeProject.did.map(item=><li key={item}>{item}</li>)}</ul></section>
          <section className="outcome"><p className="case-label">Outcome</p><h3>{activeProject.outcome}</h3></section>
        </div>
        <section className="gallery"><div className="gallery-head"><p className="case-label">Gallery</p><p>Click any item to view it larger.</p></div><div className={activeProject.assets.some(a=>typeof a==='object')?'gallery-grid media-gallery':'gallery-grid'}>{activeProject.assets.map((a,i)=>typeof a==='string'?<figure key={a} className={`asset asset-${i+1}`} style={{'--project':activeProject.color}}><div><span>{String(i+1).padStart(2,'0')}</span><b>{a}</b></div><figcaption>Project asset placeholder · Add final approved material</figcaption></figure>:<figure key={a.src} className={`asset media-asset ${a.type}`}><button className="media-thumb" onClick={()=>setActiveMedia(a)} aria-label={`Open ${a.label}`}>{['video','mpeg','mov'].includes(a.type)?<><video muted playsInline preload="metadata" onLoadedMetadata={e=>{try{e.currentTarget.currentTime=Math.min(1,e.currentTarget.duration*.1)}catch{}}}><source src={a.src} type={a.type==='mpeg'?'video/mpeg':a.type==='mov'?'video/quicktime':'video/mp4'} /></video><span className="play-mark">Play</span></>:<img src={a.src} alt={a.label} loading="lazy" />}</button><figcaption><span>{String(i+1).padStart(2,'0')}</span>{a.label}</figcaption></figure>)}</div></section>
        <button className="next-case" onClick={()=>setActiveProject(projects[(projects.indexOf(activeProject)+1)%projects.length])}>Next case study <span>→</span></button>
      </article>
      {activeMedia&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={activeMedia.label} onClick={()=>setActiveMedia(null)}><button className="lightbox-close" onClick={()=>setActiveMedia(null)}>Close ×</button><div className="lightbox-content" onClick={e=>e.stopPropagation()}>{['video','mpeg','mov'].includes(activeMedia.type)?<video controls autoPlay playsInline><source src={activeMedia.src} type={activeMedia.type==='mpeg'?'video/mpeg':activeMedia.type==='mov'?'video/quicktime':'video/mp4'} /></video>:<img src={activeMedia.src} alt={activeMedia.label}/>}<p>{activeMedia.label}</p></div></div>}
    </div>}
  </>
}
createRoot(document.getElementById('root')).render(<App/>)
