/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import {
  TrendingUp, X, Menu, BarChart3, Bot, AlertTriangle,
  Layers, CheckCircle2, Send, Phone, MapPin, Globe,
  Bookmark, Users, Heart, MessageCircle, ArrowRight,
  Star, Shield, Zap, Target, Clock, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';

/* ─── WhatsApp SVG ──────────────────────────────────────────────────────── */
const WaIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.212-1.252-6.234-3.53-8.513z"/>
  </svg>
);

/* ─── Fonts & global CSS ────────────────────────────────────────────────── */
const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

  :root {
    --ink:      #05060F;
    --paper:    #F9F9F7;
    --white:    #FFFFFF;
    --cyan:     #00B4D8;
    --cyan-dk:  #0096B7;
    --cyan-lt:  rgba(0,180,216,.08);
    --muted:    #6B7280;
    --line:     rgba(5,6,15,.08);
    --line-lt:  rgba(5,6,15,.04);
    --serif:    'Playfair Display', Georgia, serif;
    --sans:     'Outfit', system-ui, sans-serif;
  }

  body { font-family: var(--sans); background: var(--paper); color: var(--ink); overflow-x: hidden; }
  ::selection { background: rgba(0,180,216,.2); }
  img { display: block; }
  a { text-decoration: none; }

  /* ── Animations ── */
  @keyframes marquee   { to { transform: translateX(-50%); } }
  @keyframes ping      { 75%,100% { transform: scale(2.2); opacity: 0; } }
  @keyframes radar     { to { transform: scale(1.55); opacity: 0; } }
  @keyframes fadeUp    { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer   { from { background-position: -400px 0; } to { background-position: 400px 0; } }

  .marquee-inner { animation: marquee 38s linear infinite; display:flex; width:max-content; }
  .ping          { animation: ping 1.4s cubic-bezier(0,0,.2,1) infinite; }
  .radar         { animation: radar 3s ease-out infinite; }

  /* ── Grain ── */
  body::after {
    content:''; position:fixed; inset:0; z-index:9999; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E");
    background-size:160px 160px;
  }

  /* ── Utility ── */
  .serif  { font-family: var(--serif); }
  .sans   { font-family: var(--sans);  }
  .label  { font-family:var(--sans); font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; }
  .divider{ width:48px; height:2px; background:var(--cyan); border-radius:4px; }

  /* scroll-reveal */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:none; }

  /* ── Responsive helpers ── */
  @media(max-width:900px){
    .desk-only{ display:none !important; }
    .mob-show { display:flex !important; }
    .col2     { grid-template-columns:1fr !important; }
    .col3     { grid-template-columns:1fr !important; }
    .plans-grid{ grid-template-columns:1fr !important; }
  }
  @media(min-width:901px){
    .mob-show{ display:none !important; }
  }

  /* ══════════════════════════════════════════════
     SECCIÓN DOLORES — DARK PREMIUM
  ══════════════════════════════════════════════ */
  .pain-section {
    background: #05060F;
    position: relative;
    overflow: hidden;
  }
  .pain-section::before {
    content:'';
    position:absolute;
    top:-30%; left:-10%;
    width:55%; height:70%;
    background:radial-gradient(ellipse, rgba(0,180,216,.07) 0%, transparent 70%);
    pointer-events:none;
  }
  .pain-section::after {
    content:'';
    position:absolute;
    bottom:-20%; right:-5%;
    width:40%; height:50%;
    background:radial-gradient(ellipse, rgba(0,180,216,.04) 0%, transparent 70%);
    pointer-events:none;
  }
  .pain-card-dark {
    background: rgba(255,255,255,.032);
    border: 1px solid rgba(255,255,255,.07);
    border-radius: 20px;
    padding: 2rem;
    cursor: default;
    position: relative;
    overflow: hidden;
    transition: border-color .35s, background .35s, transform .35s, box-shadow .35s;
  }
  .pain-card-dark:hover {
    border-color: rgba(0,180,216,.4);
    background: rgba(0,180,216,.05);
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,.35);
  }
  .pain-card-dark::before {
    content:'';
    position:absolute;
    top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg, #00B4D8, transparent);
    opacity:0;
    transition:opacity .35s;
  }
  .pain-card-dark:hover::before { opacity:1; }
  .pain-card-dark .pain-num {
    font-family:'Playfair Display',Georgia,serif;
    font-size:3.5rem;
    font-weight:700;
    color:rgba(0,180,216,.13);
    line-height:1;
    margin-bottom:.9rem;
    letter-spacing:-.04em;
    transition:color .35s;
    user-select:none;
  }
  .pain-card-dark:hover .pain-num { color:rgba(0,180,216,.28); }
  .pain-card-dark .inner-divider {
    width:28px; height:1px;
    background:rgba(255,255,255,.1);
    margin: .9rem 0;
    transition: width .35s, background .35s;
  }
  .pain-card-dark:hover .inner-divider {
    width:44px;
    background:rgba(0,180,216,.5);
  }
  .pain-card-dark .sol-text {
    font-family:'Outfit',system-ui,sans-serif;
    font-size:.82rem; line-height:1.75;
    color:rgba(249,249,247,.45);
    font-weight:300;
    transition:color .35s;
  }
  .pain-card-dark:hover .sol-text { color:rgba(249,249,247,.78); }

  /* ══════════════════════════════════════════════
     SECCIÓN META ADS — EDITORIAL PHOTO
  ══════════════════════════════════════════════ */
  .editorial-photo-wrap {
    position:relative;
    border-radius:28px;
    overflow:hidden;
    aspect-ratio: 4/5;
    background:#111;
    box-shadow: 0 40px 80px rgba(0,0,0,.45);
    flex-shrink:0;
  }
  .editorial-photo-wrap img {
    width:100%; height:100%;
    object-fit:cover;
    filter:contrast(1.05) saturate(1.08);
    transition:transform .9s ease;
    display:block;
  }
  .editorial-photo-wrap:hover img { transform:scale(1.04); }
  .editorial-photo-overlay {
    position:absolute; inset:0;
    background:linear-gradient(to bottom, transparent 45%, rgba(5,6,15,.88) 100%);
  }
  .editorial-tag {
    position:absolute; top:18px; left:18px;
    font-family:'Outfit',sans-serif;
    font-size:.5rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
    background:rgba(0,180,216,.88); color:#fff;
    padding:4px 13px; border-radius:999px;
    backdrop-filter:blur(8px);
  }
  .editorial-credit {
    position:absolute; top:18px; right:18px;
    font-family:'Outfit',sans-serif;
    font-size:.48rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase;
    color:rgba(255,255,255,.38);
    border:1px solid rgba(255,255,255,.14);
    padding:4px 10px; border-radius:999px;
  }
  .editorial-caption {
    position:absolute; bottom:0; left:0; right:0;
    padding:1.5rem;
  }
  .editorial-caption-label {
    font-family:'Outfit',sans-serif;
    font-size:.5rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase;
    color:rgba(249,249,247,.4); margin-bottom:.35rem;
  }
  .editorial-caption-title {
    font-family:'Playfair Display',Georgia,serif;
    font-size:1.05rem; font-weight:700; color:#F9F9F7; line-height:1.3;
  }
  .editorial-stats {
    display:flex;
    border:1px solid rgba(5,6,15,.09);
    border-radius:14px;
    overflow:hidden;
    margin-top:1rem;
    background:var(--white);
  }
  .editorial-stat {
    flex:1;
    padding:.85rem .75rem;
    border-right:1px solid rgba(5,6,15,.07);
    text-align:center;
  }
  .editorial-stat:last-child { border-right:none; }
  .editorial-stat-num {
    font-family:'Playfair Display',Georgia,serif;
    font-size:1.35rem; font-weight:700; color:var(--cyan); line-height:1;
  }
  .editorial-stat-lbl {
    font-family:'Outfit',sans-serif;
    font-size:.55rem; font-weight:400; color:var(--muted); letter-spacing:.06em; margin-top:.25rem;
  }
`;

/* ─── Cinematic Preloader ───────────────────────────────────────────────── */
function Preloader({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3600); return () => clearTimeout(t); }, [onDone]);
  return (
    <motion.div
      style={{ position:'fixed', inset:0, background:'#05060F', display:'flex', flexDirection:'column',
               alignItems:'center', justifyContent:'center', zIndex:500, overflow:'hidden' }}
      exit={{ opacity:0, filter:'blur(28px)', transition:{ duration:1, ease:[.25,1,.5,1] } }}
    >
      <motion.div style={{ position:'absolute', width:'60vw', height:'60vw', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,180,216,.14) 0%, transparent 70%)', filter:'blur(80px)' }}
        initial={{ scale:.3, opacity:0 }} animate={{ scale:1.6, opacity:1 }}
        transition={{ duration:3.4, ease:'easeOut' }}
      />
      <motion.h1
        style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700,
                 fontSize:'clamp(3.2rem,9vw,6rem)', letterSpacing:'-.02em',
                 color:'#F9F9F7', lineHeight:1, position:'relative', zIndex:1, textAlign:'center' }}
        initial={{ scale:.72, opacity:0, filter:'blur(14px)' }}
        animate={{ scale:1, opacity:1, filter:'blur(0px)' }}
        transition={{ duration:2.4, ease:[.16,1,.3,1], delay:.2 }}
      >
        <span style={{ color:'#00B4D8' }}>G</span>rowth<span style={{ color:'#00B4D8' }}>B</span>rand
      </motion.h1>
      <motion.p style={{ fontFamily:"'Outfit',sans-serif", fontSize:'.58rem', letterSpacing:'.38em',
        textTransform:'uppercase', color:'rgba(249,249,247,.45)', marginTop:'1.6rem', zIndex:1 }}
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:1.2, delay:1.6 }}
      >— Potenciadores de Marcas —</motion.p>
      <div style={{ position:'absolute', bottom:44, left:'50%', transform:'translateX(-50%)',
        width:110, height:1, background:'rgba(249,249,247,.1)', overflow:'hidden', borderRadius:2 }}>
        <motion.div style={{ height:'100%', background:'linear-gradient(90deg,#00B4D8,#F9F9F7)', borderRadius:2 }}
          initial={{ width:'0%' }} animate={{ width:'100%' }}
          transition={{ duration:3.1, ease:[.42,0,.58,1], delay:.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main App ──────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .12 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  const waMsg = encodeURIComponent('Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analicemos las oportunidades de crecimiento de mi empresa. Mi nombre es...');

  const heroImg = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=90&w=1400';
  const gbpImg  = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600';
  const tiktokImg = 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=700';
  const storeImg  = 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600';

  /* ── EDITORIAL PHOTO — ropa premium, luz natural, fondo neutro ── */
  const editorialImg = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=88&w=800&h=1000';

  /* ── Pain points ── */
  const pains = [
    { num:'01', pain:'Imagen digital que no refleja el nivel real del negocio',            sol:'Elevamos todos tus activos digitales para alinearlos con tu posicionamiento de mercado y facturación real.' },
    { num:'02', pain:'Presencia activa pero sin conversión ni clientes calificados',        sol:'Diseñamos un sistema de captación estratégica que convierte seguidores en prospectos de alta calidad.' },
    { num:'03', pain:'Inversión en marketing sin métricas claras de retorno',               sol:'Instalamos modelos de trazabilidad para auditar cada centavo de pauta en tiempo real.' },
    { num:'04', pain:'El ecosistema comercial delegado a personas sin visión estratégica',  sol:'GrowthBrand toma el timón operativo con estándares de ingeniería predictiva y crecimiento medible.' },
    { num:'05', pain:'Confiar en que la IA resolverá el marketing sola',                    sol:'La IA optimiza, pero requiere dirección humana y estrategia corporativa para no perder posicionamiento.' },
    { num:'06', pain:'Compiten por precio en vez de defender su valor de mercado',          sol:'Diseñamos diferenciadores de firma que protegen tus márgenes y atraen clientes de alto poder adquisitivo.' },
  ];

  /* ── Planes ── */
  const plans = [
    { tier:'Base', icon:'◉', tag:'ESTRATEGIA BASE', desc:'Arquitectura inicial para negocios que buscan estructura de conversión y orden comercial.', features:['Gestión de Leads Calificados','Pauta Avanzada Google / Meta','Auditoría Mensual Comercial','Estructura SEO Local'], msg:'Hola equipo de GrowthBrand. Me interesa el plan Estrategia Base. Mi nombre es...' },
    { tier:'Pro',  icon:'◎', tag:'CRECIMIENTO ESCALABLE', desc:'Sistema robusto para automatizar flujos de pauta, optimizar el ROI y escalar conversiones.', sub:'TODO EN BASE +', features:['WhatsApp API Business','CRM & Automations Core','Funnel UX Corporativo','Lead Scoring Algorítmico'], premium:true, msg:'Hola equipo de GrowthBrand. Me interesa el plan Crecimiento Escalable. Mi nombre es...' },
    { tier:'Elite',icon:'⬢', tag:'GROWTH COMMAND', desc:'Infraestructura élite de adquisición continua para dominar mercados regionales de forma predecible.', sub:'TODO EN PRO +', features:['Agentes de IA Avanzados','Inteligencia Comercial Centralizada','Análisis Predictivo de Costos'], msg:'Hola socios de GrowthBrand. Requiero la infraestructura Growth Command. Mi nombre es...' },
  ];

  const navLinks = ['Sistemas','Dolores','Metodología','Inversión'];

  /* ────────────────────────────── RENDER ─────────────────────────────── */
  return (
    <div style={{ background:'var(--paper)', color:'var(--ink)', overflowX:'hidden', position:'relative' }}>
      <style>{STYLE}</style>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Ambient orbs */}
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-12%', left:'-8%', width:'42%', height:'42%',
          background:'radial-gradient(circle, rgba(0,180,216,.06) 0%, transparent 70%)', filter:'blur(90px)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', bottom:'8%', right:'-6%', width:'30%', height:'30%',
          background:'radial-gradient(circle, rgba(0,180,216,.04) 0%, transparent 70%)', filter:'blur(70px)', borderRadius:'50%' }} />
      </div>

      {/* ═══ NAV ═══════════════════════════════════════════════════════════ */}
      <nav style={{ position:'fixed', top:0, width:'100%', zIndex:200, transition:'all .45s',
        height: scrolled ? 68 : 84,
        background: scrolled ? 'rgba(249,249,247,.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : 'none',
      }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem', height:'100%',
          display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1.55rem',
                     letterSpacing:'-.01em', cursor:'pointer', color:'var(--ink)' }}>
            <span style={{ color:'var(--cyan)' }}>G</span>rowth<span style={{ color:'var(--cyan)' }}>B</span>rand
          </span>

          <div className="desk-only" style={{ display:'flex', alignItems:'center', gap:'2.5rem' }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontFamily:'var(--sans)', fontSize:'.62rem', fontWeight:600,
                         letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(5,6,15,.55)',
                         transition:'color .2s' }}
                onMouseEnter={e=>e.target.style.color='var(--cyan)'}
                onMouseLeave={e=>e.target.style.color='rgba(5,6,15,.55)'}
              >{l}</a>
            ))}
            <a href="#aplicar" style={{ fontFamily:'var(--sans)', background:'var(--ink)', color:'#F9F9F7',
              padding:'.7rem 1.4rem', borderRadius:'.6rem', fontSize:'.58rem', fontWeight:700,
              letterSpacing:'.16em', textTransform:'uppercase', transition:'background .2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#172A45'}
              onMouseLeave={e=>e.currentTarget.style.background='var(--ink)'}
            >Diagnóstico Corporativo</a>
          </div>

          <button className="mob-show" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background:'none', border:'none', cursor:'pointer', color:'var(--ink)', padding:'.4rem' }}>
            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div style={{ position:'fixed', inset:0, zIndex:190, background:'var(--white)',
            display:'flex', flexDirection:'column', padding:'6rem 2rem 2rem' }}
            initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }} transition={{ duration:.25 }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'2rem', color:'var(--ink)',
                         padding:'1rem 0', borderBottom:'1px solid var(--line)' }}
              >{l}</a>
            ))}
            <a href="#aplicar" onClick={() => setMenuOpen(false)}
              style={{ marginTop:'1.5rem', background:'var(--ink)', color:'#F9F9F7', textAlign:'center',
                       padding:'1rem', borderRadius:'.75rem', fontWeight:700, fontSize:'.7rem',
                       letterSpacing:'.14em', textTransform:'uppercase', fontFamily:'var(--sans)' }}
            >SOLICITAR DIAGNÓSTICO</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center',
        overflow:'hidden', background:'var(--ink)' }}>

        <img src={heroImg} alt="Ciudad" style={{ position:'absolute', inset:0, width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'center', opacity:.35 }} />

        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(135deg, rgba(5,6,15,.92) 0%, rgba(5,6,15,.7) 50%, rgba(0,180,216,.12) 100%)' }} />

        <div style={{ position:'relative', zIndex:10, maxWidth:1260, margin:'0 auto',
          padding:'9rem 2rem 6rem', width:'100%' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }} className="col2">

            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:.9, delay:.3, ease:[.16,1,.3,1] }}>

              <div className="label" style={{ display:'inline-flex', alignItems:'center', gap:8,
                color:'var(--cyan)', border:'1px solid rgba(0,180,216,.3)',
                padding:'.3rem .9rem', borderRadius:999, marginBottom:'2rem' }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--cyan)',
                  display:'inline-block', animation:'ping 1.4s cubic-bezier(0,0,.2,1) infinite' }} />
                Sistemas de Posicionamiento Global
              </div>

              <h1 style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'clamp(2.4rem,4.5vw,3.8rem)',
                lineHeight:1.18, letterSpacing:'-.02em', color:'#F9F9F7', marginBottom:'1.5rem' }}>
                Inteligencia Artificial para multiplicar tus datos.{' '}
                <em style={{ color:'var(--cyan)', fontStyle:'italic' }}>Inteligencia Humana</em>{' '}
                para multiplicar tus ventas.
              </h1>

              <p style={{ fontFamily:'var(--sans)', fontWeight:300, fontSize:'1.05rem', lineHeight:1.8,
                color:'rgba(249,249,247,.7)', maxWidth:520, marginBottom:'2.5rem' }}>
                En GrowthBrand no dejamos que las herramientas reemplacen a las personas; las ponemos a su servicio para liberar la chispa creativa que hace a tu marca única. Bienvenidos a una nueva forma de crecer.
              </p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
                <a href="#aplicar" style={{ fontFamily:'var(--sans)', background:'var(--cyan)', color:'#F9F9F7',
                  padding:'1rem 2rem', borderRadius:'.7rem', fontWeight:700, fontSize:'.62rem',
                  letterSpacing:'.16em', textTransform:'uppercase', display:'inline-flex',
                  alignItems:'center', gap:8, transition:'background .2s, transform .15s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.background='var(--cyan-dk)'; e.currentTarget.style.transform='scale(1.03)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='var(--cyan)'; e.currentTarget.style.transform='scale(1)'; }}
                >
                  Iniciar Auditoría Comercial <ArrowRight size={14}/>
                </a>
                <a href={`https://wa.me/502YOURNUMBER?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily:'var(--sans)', border:'1px solid rgba(249,249,247,.2)', color:'#F9F9F7',
                    padding:'1rem 1.75rem', borderRadius:'.7rem', fontWeight:600, fontSize:'.62rem',
                    letterSpacing:'.14em', textTransform:'uppercase', display:'inline-flex',
                    alignItems:'center', gap:8, transition:'border-color .2s' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='var(--cyan)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(249,249,247,.2)'}
                >
                  <WaIcon /> Hablar con un Socio
                </a>
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'1.5rem', marginTop:'3rem',
                paddingTop:'2rem', borderTop:'1px solid rgba(249,249,247,.1)' }}>
                {[['+80','Clientes Premium'],['3×','ROI Promedio'],['48h','Onboarding']].map(([n,l]) => (
                  <div key={l}>
                    <p style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1.6rem',
                      color:'var(--cyan)', lineHeight:1 }}>{n}</p>
                    <p style={{ fontFamily:'var(--sans)', fontSize:'.7rem', color:'rgba(249,249,247,.5)',
                      letterSpacing:'.08em', marginTop:2 }}>{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Google Business card */}
            <motion.div style={{ display:'flex', justifyContent:'center', position:'relative' }}
              initial={{ opacity:0, scale:.92 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:1, delay:.5 }}>

              <div className="radar" style={{ position:'absolute', width:300, height:300, borderRadius:'50%',
                background:'rgba(0,180,216,.1)', pointerEvents:'none' }} />

              <div style={{ width:300, background:'var(--white)', borderRadius:32, padding:12,
                boxShadow:'0 40px 100px rgba(0,0,0,.5)', position:'relative', zIndex:1 }}>
                <div style={{ borderRadius:24, overflow:'hidden', border:'1px solid var(--line)' }}>
                  <div style={{ height:160, position:'relative', overflow:'hidden' }}>
                    <img src={gbpImg} alt="Negocio" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 40%, rgba(5,6,15,.4) 100%)' }} />
                    <span className="label" style={{ position:'absolute', top:10, left:12,
                      background:'rgba(5,6,15,.75)', color:'#F9F9F7', fontSize:8,
                      padding:'3px 10px', borderRadius:999, backdropFilter:'blur(8px)' }}>En Línea</span>
                  </div>
                  <div style={{ background:'var(--white)', padding:'1.1rem 1.2rem' }}>
                    <p style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1rem', color:'var(--ink)' }}>Arquitectura y Construcción</p>
                    <div style={{ display:'flex', alignItems:'center', gap:6, margin:'4px 0' }}>
                      <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'.85rem', color:'#F59E0B' }}>4.5</span>
                      <span style={{ color:'#F59E0B', fontSize:'.75rem' }}>★★★★★</span>
                      <span style={{ fontFamily:'var(--sans)', fontSize:'.65rem', color:'var(--muted)' }}>(83)</span>
                    </div>
                    <p style={{ fontFamily:'var(--sans)', fontSize:'.65rem', color:'var(--muted)' }}>Construcción · Comercio local</p>
                    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6,
                      borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)',
                      padding:'10px 0', margin:'10px 0' }}>
                      {[{ I:Phone,l:'Llamar' },{ I:MapPin,l:'Cómo llegar' },{ I:Bookmark,l:'Guardar' },{ I:Globe,l:'Sitio web' }].map(({I,l}) => (
                        <div key={l} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                          <div style={{ width:32, height:32, borderRadius:'50%', background:'var(--cyan-lt)',
                            display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <I size={13} style={{ color:'var(--cyan)' }} />
                          </div>
                          <span style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:600, color:'var(--muted)', textAlign:'center' }}>{l.toUpperCase()}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <div style={{ width:7, height:7, borderRadius:'50%', background:'#10B981', flexShrink:0 }} />
                      <p style={{ fontFamily:'var(--sans)', fontSize:'.68rem', color:'var(--ink)' }}>
                        <span style={{ color:'#059669', fontWeight:700 }}>Abierto</span> · Horario de cierre 20:00
                      </p>
                    </div>
                    <div style={{ marginTop:10, background:'var(--cyan-lt)', borderRadius:10,
                      padding:'6px 10px', display:'flex', alignItems:'center', gap:6 }}>
                      <div style={{ width:8, height:8, borderRadius:'50%', border:'2px solid var(--cyan)', flexShrink:0 }} />
                      <p style={{ fontFamily:'var(--sans)', fontSize:'.6rem', color:'var(--muted)' }}>Visibilidad Certificada por IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', zIndex:10 }}>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }}>
            <ChevronDown size={22} style={{ color:'rgba(249,249,247,.4)' }} />
          </motion.div>
        </div>
      </section>

      {/* ═══ MARQUEE ════════════════════════════════════════════════════════ */}
      <section style={{ background:'var(--ink)', padding:'3.5rem 0', overflow:'hidden',
        borderTop:'1px solid rgba(255,255,255,.05)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto 2.5rem', padding:'0 2rem', textAlign:'center' }}>
          <h2 style={{ fontFamily:'var(--serif)', color:'var(--cyan)', fontSize:'clamp(1.4rem,2.8vw,2.2rem)',
            fontWeight:700, fontStyle:'italic', letterSpacing:'-.01em' }}>
            Ecosistemas e Infraestructura Tecnológica Integrada con
            <span style={{ color:'#F9F9F7', fontFamily:'var(--sans)', fontStyle:'normal', fontWeight:300 }}>.</span>
          </h2>
        </div>
        <div style={{ position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, zIndex:2,
            background:'linear-gradient(90deg,var(--ink),transparent)' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, zIndex:2,
            background:'linear-gradient(-90deg,var(--ink),transparent)' }} />
          <div className="marquee-inner" style={{ alignItems:'center', gap:72, whiteSpace:'nowrap' }}>
            {[0,1].map(r=>(
              <div key={r} style={{ display:'flex', alignItems:'center', gap:72, flexShrink:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:140 }}>
                  <svg style={{ height:26 }} viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg>
                  <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'1.1rem', color:'#F9F9F7' }}>Google</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:120 }}>
                  <img src="https://cdn.simpleicons.org/meta/0064E0" style={{ height:22 }} alt="" />
                  <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'1.1rem', color:'#F9F9F7' }}>Meta</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:120 }}>
                  <svg style={{ height:18, fill:'#F9F9F7' }} viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475Z"/></svg>
                  <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'1.1rem', color:'#F9F9F7' }}>Vercel</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:130 }}>
                  <img src="https://cdn.simpleicons.org/tiktok/FFFFFF" style={{ height:24 }} alt="" />
                  <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'1.1rem', color:'#F9F9F7' }}>TikTok</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:140 }}>
                  <svg style={{ height:26, fill:'#F9F9F7' }} viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span style={{ fontFamily:'var(--sans)', fontWeight:700, fontSize:'1.1rem', color:'#F9F9F7' }}>GitHub</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY / SOCIAL PROOF ══════════════════════════════════════ */}
      <section style={{ padding:'7rem 0', background:'var(--white)', borderBottom:'1px solid var(--line)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem' }}>
          <div className="reveal" style={{ textAlign:'center', maxWidth:600, margin:'0 auto 4.5rem' }}>
            <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>Historias Reales</p>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(2rem,3.8vw,3rem)', fontWeight:700,
              letterSpacing:'-.02em', lineHeight:1.2, color:'var(--ink)' }}>
              Historias de crecimiento real.<br />Datos con propósito.
            </h2>
            <div className="divider" style={{ margin:'1.5rem auto 0' }} />
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1.5rem' }} className="col3 reveal">
            {[
              { sector:'Retail Boutique', challenge:'"Una empresa líder en su sector que se sentía estancada y desconectada de su audiencia digital."', solution:'Implementamos modelos de machine learning para identificar nichos de mercado ocultos y rediseñamos toda su comunicación con un enfoque profundamente humano y persuasivo.', kpi:'+320%', kpiLabel:'aumento en leads calificados' },
              { sector:'Constructora Premium', challenge:'"Facturaban bien offline pero su presencia digital no reflejaba el calibre de sus proyectos."', solution:'Construimos una identidad digital de firma, optimizamos su Google Business Profile y lanzamos campañas de pauta de alto impacto orientadas a clientes corporativos.', kpi:'4.2×', kpiLabel:'retorno sobre inversión en ads' },
              { sector:'Consultoría Financiera', challenge:'"Dependían completamente del referido sin un sistema propio de captación de clientes de alto valor."', solution:'Diseñamos un funnel de captación premium con contenido de autoridad, automatizaciones de CRM y estrategia de posicionamiento en LinkedIn y Google.', kpi:'+18', kpiLabel:'clientes de alto valor en 90 días' },
            ].map((c,i) => (
              <motion.div key={i} whileHover={{ y:-6 }}
                style={{ background:'var(--paper)', borderRadius:24, overflow:'hidden',
                  border:'1px solid var(--line)', display:'flex', flexDirection:'column' }}>
                <div style={{ background:'var(--ink)', padding:'1.75rem 1.75rem 1.25rem' }}>
                  <p className="label" style={{ color:'var(--cyan)', marginBottom:'.75rem' }}>{c.sector}</p>
                  <div style={{ background:'rgba(249,249,247,.06)', borderRadius:12, padding:'1rem',
                    borderLeft:'3px solid rgba(249,249,247,.2)' }}>
                    <p className="label" style={{ color:'rgba(249,249,247,.4)', marginBottom:'.5rem', fontSize:'.52rem' }}>El desafío humano</p>
                    <p style={{ fontFamily:'var(--serif)', fontSize:'.95rem', fontStyle:'italic',
                      color:'rgba(249,249,247,.85)', lineHeight:1.55 }}>{c.challenge}</p>
                  </div>
                </div>
                <div style={{ padding:'1.5rem 1.75rem', flex:1, display:'flex', flexDirection:'column', gap:'1rem' }}>
                  <div style={{ background:'rgba(0,180,216,.07)', borderRadius:12, padding:'1rem',
                    borderLeft:'3px solid var(--cyan)' }}>
                    <p className="label" style={{ color:'var(--cyan)', marginBottom:'.5rem', fontSize:'.52rem' }}>La Solución GrowthBrand</p>
                    <p style={{ fontFamily:'var(--sans)', fontSize:'.82rem', lineHeight:1.7,
                      color:'var(--muted)', fontWeight:300 }}>{c.solution}</p>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:'0.5rem',
                    borderTop:'1px solid var(--line)', marginTop:'auto' }}>
                    <span style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'2rem', color:'var(--cyan)' }}>{c.kpi}</span>
                    <span style={{ fontFamily:'var(--sans)', fontSize:'.75rem', color:'var(--muted)', fontWeight:300, lineHeight:1.4 }}>{c.kpiLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DOLORES — DARK PREMIUM ═══════════════════════════════════════ */}
      <section id="dolores" className="pain-section" style={{ padding:'7rem 0', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem', position:'relative', zIndex:1 }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign:'center', maxWidth:660, margin:'0 auto 4.5rem' }}>
            <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>Diagnóstico Comercial</p>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(2rem,3.8vw,3rem)', fontWeight:700,
              letterSpacing:'-.02em', lineHeight:1.2, color:'#F9F9F7' }}>
              Fricciones comerciales que removemos de tu infraestructura
            </h2>
            <div className="divider" style={{ margin:'1.5rem auto 0' }} />
          </div>

          {/* Cards grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1.25rem' }} className="col3">
            {pains.map((item, i) => (
              <motion.div
                key={i}
                className="pain-card-dark reveal"
                whileHover={{ y: -6 }}
                transition={{ type:'spring', stiffness:280, damping:22 }}
              >
                {/* Top accent line rendered via CSS ::before */}
                <div className="pain-num">{item.num}</div>

                <p className="label" style={{ color:'#F43F5E', fontSize:'.52rem', marginBottom:'.45rem' }}>El Síntoma</p>
                <h4 style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1.05rem',
                  color:'#F9F9F7', lineHeight:1.4 }}>{item.pain}</h4>

                <div className="inner-divider" />

                <p className="label" style={{ color:'#10B981', fontSize:'.52rem', marginBottom:'.4rem' }}>La Solución</p>
                <p className="sol-text">{item.sol}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SISTEMAS ═══════════════════════════════════════════════════════ */}
      <section id="sistemas" style={{ padding:'7rem 0', background:'var(--white)',
        borderTop:'1px solid var(--line)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem', display:'flex', flexDirection:'column', gap:'7rem' }}>

          {/* ── Meta Ads — EDITORIAL PHOTO ── */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4.5rem', alignItems:'center' }} className="col2 reveal">

            {/* Copy */}
            <div>
              <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>Meta Ads Strategy</p>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.25 }}>
                Contenido Profesional de Alta Confianza
              </h2>
              <p style={{ fontFamily:'var(--sans)', fontSize:'.9rem', lineHeight:1.8, color:'var(--muted)', fontWeight:300 }}>
                Tus activos e identidad publicitaria digital deben estar al nivel que el cliente corporativo espera. Reemplazamos la improvisación por fotografía de producto con dirección creativa propia — nunca stock — y pauta de ingeniería comercial optimizada para rastrear conversiones reales.
              </p>
            </div>

            {/* Editorial photo + stats */}
            <div>
              <div className="editorial-photo-wrap">
                <img
                  src={editorialImg}
                  alt="Fotografía editorial de producto — colección de ropa premium"
                />
                <div className="editorial-photo-overlay" />
                <span className="editorial-tag">Fotografía Propia</span>
                <span className="editorial-credit">GrowthBrand Studio</span>
                <div className="editorial-caption">
                  <p className="editorial-caption-label">Colección SS · Dirección Creativa GrowthBrand</p>
                  <p className="editorial-caption-title">Cada pieza de contenido, una decisión estratégica.</p>
                </div>
              </div>

              {/* Stats strip */}
              <div className="editorial-stats">
                <div className="editorial-stat">
                  <div className="editorial-stat-num">3×</div>
                  <div className="editorial-stat-lbl">CTR vs. Stock</div>
                </div>
                <div className="editorial-stat">
                  <div className="editorial-stat-num">+62%</div>
                  <div className="editorial-stat-lbl">Retención visual</div>
                </div>
                <div className="editorial-stat">
                  <div className="editorial-stat-num">48h</div>
                  <div className="editorial-stat-lbl">Entrega creativa</div>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4.5rem', alignItems:'center' }} className="col2 reveal">
            <div style={{ display:'flex', justifyContent:'center' }}>
              <div style={{ width:240, background:'#0A0A0A', borderRadius:38, padding:11,
                boxShadow:'0 40px 80px rgba(5,6,15,.22)' }}>
                <div style={{ borderRadius:30, overflow:'hidden', aspectRatio:'9/16', position:'relative', background:'#111' }}>
                  <img src={tiktokImg} alt="Ad" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.6 }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, transparent 35%, rgba(0,0,0,.78) 100%)' }} />
                  <div style={{ position:'absolute', top:14, left:'50%', transform:'translateX(-50%)',
                    display:'flex', gap:18, zIndex:2, whiteSpace:'nowrap' }}>
                    <span style={{ fontFamily:'var(--sans)', color:'rgba(255,255,255,.5)', fontSize:'.6rem', fontWeight:600 }}>Siguiendo</span>
                    <span style={{ fontFamily:'var(--sans)', color:'#fff', fontSize:'.6rem', fontWeight:700, borderBottom:'2px solid #fff', paddingBottom:2 }}>Para ti</span>
                  </div>
                  <div style={{ position:'absolute', bottom:18, left:14, right:14, zIndex:2 }}>
                    <p style={{ fontFamily:'var(--sans)', color:'#fff', fontWeight:700, fontSize:'.7rem', marginBottom:5 }}>@growthbrandname</p>
                    <p style={{ fontFamily:'var(--sans)', color:'rgba(255,255,255,.7)', fontSize:'.6rem', lineHeight:1.5, marginBottom:10, fontWeight:300 }}>
                      Sistemas de adquisición integrales para marcas premium.
                    </p>
                    <div style={{ background:'var(--cyan)', borderRadius:7, padding:'.55rem', textAlign:'center' }}>
                      <span style={{ fontFamily:'var(--sans)', color:'#fff', fontSize:'.62rem', fontWeight:700, letterSpacing:'.1em' }}>Registrar Empresa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>TikTok Business Integration</p>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.25 }}>
                Estructura de Conversión In-Feed Absoluta
              </h2>
              <p style={{ fontFamily:'var(--sans)', fontSize:'.9rem', lineHeight:1.8, color:'var(--muted)', fontWeight:300 }}>
                Desplegamos embudos comerciales conectados directamente a tu WhatsApp o CRM, configurando mensajes claros y flujos de atención que cierran ventas predecibles.
              </p>
            </div>
          </div>

          {/* Google Business */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4.5rem', alignItems:'center' }} className="col2 reveal">
            <div>
              <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>Local SEO Authority</p>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.25 }}>
                Tu Negocio en el Mapa del Mundo
              </h2>
              <p style={{ fontFamily:'var(--sans)', fontSize:'.9rem', lineHeight:1.8, color:'var(--muted)', fontWeight:300 }}>
                Optimizamos la ficha de Google Business Profile para que tu marca aparezca de forma impecable en búsquedas estratégicas locales, respondiendo reseñas y captando clientes recurrentes.
              </p>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <div style={{ width:310, background:'var(--white)', borderRadius:26, border:'1px solid var(--line)',
                boxShadow:'0 20px 60px rgba(5,6,15,.09)', overflow:'hidden' }}>
                <div style={{ height:120, overflow:'hidden' }}>
                  <img src={storeImg} alt="Tienda" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ padding:'1.1rem 1.25rem' }}>
                  <h4 style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'.95rem', color:'var(--ink)', marginBottom:6 }}>Tienda de Moda Local</h4>
                  <span className="label" style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB',
                    fontSize:'.48rem', padding:'3px 10px', borderRadius:999, marginBottom:10 }}>Resumen</span>
                  <button style={{ width:'100%', background:'transparent', border:'1.5px solid #2563EB',
                    color:'#2563EB', fontFamily:'var(--sans)', fontWeight:700, fontSize:'.7rem',
                    padding:'.6rem', borderRadius:11, cursor:'pointer', display:'flex',
                    alignItems:'center', justifyContent:'center', gap:6 }}>🛒 Pedir online</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INVERSIÓN / PLANES ══════════════════════════════════════════════ */}
      <section id="inversión" style={{ padding:'7rem 0', background:'var(--paper)',
        borderTop:'1px solid var(--line)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem' }}>
          <div className="reveal" style={{ textAlign:'center', maxWidth:600, margin:'0 auto 4.5rem' }}>
            <p className="label" style={{ color:'var(--cyan)', marginBottom:'1rem' }}>Modelos B2B</p>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(2rem,3.8vw,3rem)', fontWeight:700,
              letterSpacing:'-.02em', lineHeight:1.2, color:'var(--cyan)' }}>
              Modelos de Implementación B2B
            </h2>
            <p style={{ fontFamily:'var(--sans)', color:'var(--muted)', marginTop:'1rem', fontWeight:300, fontSize:'.95rem' }}>
              Infraestructura volumétrica blindada para acelerar tus flujos comerciales de adquisición.
            </p>
          </div>

          <div className="plans-grid reveal" style={{
            display:'grid',
            gridTemplateColumns:'repeat(3, minmax(0, 380px))',
            gap:'1.5rem',
            justifyContent:'center',
            alignItems:'start',
          }}>
            {plans.map((plan, i) => (
              <motion.div key={i} whileHover={{ y:-8 }}
                style={{
                  background: plan.premium ? 'var(--ink)' : 'var(--white)',
                  borderRadius:28,
                  border: plan.premium ? '1.5px solid var(--cyan)' : '1px solid var(--line)',
                  boxShadow: plan.premium
                    ? '0 40px 80px rgba(0,180,216,.18), 0 8px 32px rgba(5,6,15,.12)'
                    : '0 4px 24px rgba(5,6,15,.06)',
                  padding:'2.25rem',
                  display:'flex', flexDirection:'column', gap:'1.25rem',
                  transform: plan.premium ? 'scale(1.04)' : 'scale(1)',
                  position:'relative', overflow:'hidden',
                }}>
                {plan.premium && (
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:3,
                    background:'linear-gradient(90deg, var(--cyan), rgba(0,180,216,.3))' }} />
                )}
                {plan.premium && (
                  <div style={{ position:'absolute', top:14, right:14 }}>
                    <span className="label" style={{ background:'var(--cyan)', color:'#fff',
                      fontSize:'.5rem', padding:'3px 10px', borderRadius:999 }}>Más popular</span>
                  </div>
                )}

                <div>
                  <span style={{ fontSize:'1.5rem', color:'var(--cyan)', display:'block', marginBottom:'.6rem' }}>{plan.icon}</span>
                  <p className="label" style={{ color: plan.premium ? 'rgba(249,249,247,.5)' : 'var(--muted)',
                    fontSize:'.54rem', marginBottom:'.6rem' }}>{plan.tag}</p>
                  <p style={{ fontFamily:'var(--sans)', fontSize:'.85rem', lineHeight:1.7,
                    color: plan.premium ? 'rgba(249,249,247,.7)' : 'var(--muted)', fontWeight:300 }}>{plan.desc}</p>
                </div>

                {plan.sub && (
                  <p className="label" style={{ fontSize:'.5rem', color:'var(--cyan)',
                    textDecoration:'underline', textDecorationColor:'rgba(0,180,216,.3)',
                    textUnderlineOffset:3, textAlign:'center' }}>{plan.sub}</p>
                )}

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.7rem' }}>
                  {plan.features.map((f,fi) => (
                    <li key={fi} style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
                      <CheckCircle2 size={15} style={{ color:'var(--cyan)', flexShrink:0 }} />
                      <span style={{ fontFamily:'var(--sans)', fontSize:'.82rem',
                        color: plan.premium ? 'rgba(249,249,247,.8)' : 'var(--ink)', fontWeight:300 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/502YOURNUMBER?text=${encodeURIComponent(plan.msg)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6,
                           background:'var(--cyan)', color:'#fff', padding:'1rem', borderRadius:14,
                           fontFamily:'var(--sans)', fontWeight:700, fontSize:'.6rem',
                           letterSpacing:'.14em', textTransform:'uppercase', transition:'background .2s',
                           marginTop:'auto' }}
                  onMouseEnter={e=>e.currentTarget.style.background='var(--cyan-dk)'}
                  onMouseLeave={e=>e.currentTarget.style.background='var(--cyan)'}
                >
                  <WaIcon /> {plan.btn || plan.tag}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA URGENCY STRIP ══════════════════════════════════════════════ */}
      <section style={{ background:'var(--cyan)', padding:'3.5rem 2rem', textAlign:'center', position:'relative', zIndex:20, overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Ccircle fill=\'%23ffffff\' opacity=\'0.05\' cx=\'20\' cy=\'20\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E")', opacity:.5 }} />
        <div style={{ position:'relative', zIndex:1, maxWidth:700, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'clamp(1.6rem,3vw,2.4rem)',
            color:'#fff', lineHeight:1.25, marginBottom:'1rem', letterSpacing:'-.01em' }}>
            ¿Listo para dejar de perder clientes premium?
          </h2>
          <p style={{ fontFamily:'var(--sans)', color:'rgba(255,255,255,.85)', fontSize:'.95rem',
            marginBottom:'2rem', fontWeight:300 }}>
            Solo aceptamos 5 nuevos clientes por mes para garantizar resultados excepcionales.
          </p>
          <a href="#aplicar" style={{ display:'inline-flex', alignItems:'center', gap:8,
            background:'var(--ink)', color:'#F9F9F7', padding:'1rem 2.2rem', borderRadius:'.7rem',
            fontFamily:'var(--sans)', fontWeight:700, fontSize:'.62rem', letterSpacing:'.16em',
            textTransform:'uppercase', transition:'background .2s, transform .15s' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='#172A45'; e.currentTarget.style.transform='scale(1.04)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='var(--ink)'; e.currentTarget.style.transform='scale(1)'; }}
          >
            Reservar mi diagnóstico <ArrowRight size={14}/>
          </a>
        </div>
      </section>

      {/* ═══ FORMULARIO ═════════════════════════════════════════════════════ */}
      <section id="aplicar" style={{ padding:'7rem 2rem', background:'var(--white)',
        borderTop:'1px solid var(--line)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1060, margin:'0 auto', borderRadius:36, overflow:'hidden',
          display:'grid', gridTemplateColumns:'1fr 1fr',
          boxShadow:'0 40px 100px rgba(5,6,15,.13)', border:'1px solid var(--line)' }} className="col2">

          <div style={{ background:'var(--ink)', padding:'3.5rem', display:'flex', flexDirection:'column', justifyContent:'center', gap:'2rem' }}>
            <div>
              <p className="label" style={{ color:'var(--cyan)', marginBottom:'1.25rem' }}>Diagnóstico Estratégico</p>
              <blockquote style={{ borderLeft:'3px solid var(--cyan)', paddingLeft:'1.4rem' }}>
                <p style={{ fontFamily:'var(--serif)', fontSize:'clamp(1.3rem,2.2vw,1.9rem)', fontWeight:700,
                  color:'#F9F9F7', lineHeight:1.35, fontStyle:'italic' }}>
                  "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
                </p>
              </blockquote>
            </div>
            <p style={{ fontFamily:'var(--sans)', color:'rgba(249,249,247,.65)', fontSize:'.88rem',
              lineHeight:1.8, fontWeight:300 }}>
              Registra tu marca aquí. Nuestro equipo analizará tu ecosistema digital actual con herramientas de IA y agendaremos una sesión privada para entregarte tu diagnóstico personalizado.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
              {[
                { icon:<Shield size={14}/>, text:'Información 100% confidencial' },
                { icon:<Clock size={14}/>,  text:'Respuesta en menos de 24 horas' },
                { icon:<Star size={14}/>,   text:'Sin contratos a largo plazo' },
              ].map(({icon,text}) => (
                <div key={text} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ color:'var(--cyan)', flexShrink:0 }}>{icon}</div>
                  <span style={{ fontFamily:'var(--sans)', fontSize:'.82rem', color:'rgba(249,249,247,.55)', fontWeight:300 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background:'var(--paper)', padding:'3rem 3rem' }}>
            <p style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1.5rem', color:'var(--ink)', marginBottom:'2rem' }}>
              Solicita tu diagnóstico gratuito
            </p>
            <form
              onSubmit={async e => {
                e.preventDefault();
                const res = await fetch(e.currentTarget.action, {
                  method:'POST', body:new FormData(e.currentTarget),
                  headers:{ Accept:'application/json' }
                });
                if (res.ok) window.location.href = '/gracias.html';
              }}
              action="https://formspree.io/f/xaqkqjvq"
              method="POST"
              style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}
            >
              {[
                { label:'Nombre Completo',       name:'nombre',   type:'text',  ph:'Tu nombre', req:true },
                { label:'Correo Corporativo',     name:'email',    type:'email', ph:'ejemplo@empresa.com', req:true },
                { label:'Celular / WhatsApp',      name:'telefono', type:'tel',   ph:'+502 0000 0000', req:true },
                { label:'Sitio Web / Red Social',  name:'website',  type:'text',  ph:'Opcional' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ fontFamily:'var(--sans)', fontSize:'.58rem', fontWeight:700,
                    letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)',
                    display:'block', marginBottom:'.4rem' }}>{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                    style={{ width:'100%', background:'var(--white)', border:'1px solid var(--line)',
                             borderRadius:11, padding:'.8rem 1rem', fontSize:'.9rem',
                             fontFamily:'var(--sans)', color:'var(--ink)', outline:'none',
                             transition:'border-color .2s' }}
                    onFocus={e=>e.target.style.borderColor='var(--cyan)'}
                    onBlur={e=>e.target.style.borderColor='var(--line)'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontFamily:'var(--sans)', fontSize:'.58rem', fontWeight:700,
                  letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)',
                  display:'block', marginBottom:'.4rem' }}>Objetivo Principal</label>
                <select name="objetivo" style={{ width:'100%', background:'var(--white)',
                  border:'1px solid var(--line)', borderRadius:11, padding:'.8rem 1rem',
                  fontSize:'.9rem', fontFamily:'var(--sans)', color:'var(--ink)', outline:'none' }}>
                  <option>Generar Leads Calificados</option>
                  <option>Optimizar Visibilidad Local</option>
                  <option>Estructura Comercial Integral</option>
                </select>
              </div>

              <div>
                <label style={{ fontFamily:'var(--sans)', fontSize:'.58rem', fontWeight:700,
                  letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)',
                  display:'block', marginBottom:'.4rem' }}>Desafío o Contexto</label>
                <textarea name="contexto" placeholder="¿Cuál es tu mayor reto comercial hoy?" required
                  style={{ width:'100%', background:'var(--white)', border:'1px solid var(--line)',
                           borderRadius:11, padding:'.8rem 1rem', fontSize:'.9rem',
                           fontFamily:'var(--sans)', color:'var(--ink)', outline:'none',
                           resize:'none', height:88, transition:'border-color .2s' }}
                  onFocus={e=>e.target.style.borderColor='var(--cyan)'}
                  onBlur={e=>e.target.style.borderColor='var(--line)'}
                />
              </div>

              <button type="submit"
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                         background:'var(--cyan)', color:'#fff', padding:'1rem', borderRadius:13,
                         fontFamily:'var(--sans)', fontWeight:700, fontSize:'.62rem',
                         letterSpacing:'.16em', textTransform:'uppercase', border:'none',
                         cursor:'pointer', transition:'background .2s', marginTop:'.25rem' }}
                onMouseEnter={e=>e.currentTarget.style.background='var(--cyan-dk)'}
                onMouseLeave={e=>e.currentTarget.style.background='var(--cyan)'}
              >
                <Send size={15}/> Solicitar Diagnóstico Estratégico
              </button>

              <p style={{ fontFamily:'var(--sans)', textAlign:'center', color:'#9CA3AF',
                fontSize:'.6rem', lineHeight:1.6 }}>
                🔒 Tus datos son confidenciales y solo se usarán para coordinar tu sesión privada.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer style={{ background:'var(--ink)', padding:'4rem 2rem', textAlign:'center',
        borderTop:'1px solid rgba(255,255,255,.06)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto' }}>
          <p style={{ fontFamily:'var(--serif)', fontWeight:700, fontSize:'1.7rem',
            color:'#F9F9F7', letterSpacing:'-.01em', fontStyle:'italic', marginBottom:'.75rem' }}>
            <span style={{ color:'var(--cyan)' }}>G</span>rowth<span style={{ color:'var(--cyan)' }}>B</span>rand
          </p>
          <p className="label" style={{ color:'rgba(249,249,247,.3)', fontSize:'.54rem', letterSpacing:'.28em', marginBottom:'2.5rem' }}>
            Aceleramos los datos con tecnología · Expandimos los negocios con empatía
          </p>
          <div style={{ borderTop:'1px solid rgba(249,249,247,.08)', paddingTop:'1.5rem' }}>
            <p className="label" style={{ color:'rgba(249,249,247,.2)', fontSize:'.5rem', letterSpacing:'.2em' }}>
              © 2026 GrowthBrand. Ecosistemas de Crecimiento Integrales.
            </p>
          </div>
        </div>
      </footer>

      {/* ═══ WhatsApp FAB ════════════════════════════════════════════════════ */}
      <motion.a
        href={`https://wa.me/502YOURNUMBER?text=${waMsg}`}
        target="_blank" rel="noopener noreferrer"
        style={{ position:'fixed', bottom:28, right:28, zIndex:300, display:'flex',
          alignItems:'center', gap:10, background:'#25D366', color:'#fff',
          padding:'1rem 1.25rem', borderRadius:22, textDecoration:'none',
          boxShadow:'0 8px 28px rgba(37,211,102,.4)', border:'1px solid rgba(255,255,255,.15)' }}
        initial={{ opacity:0, scale:.5 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ delay:2.4 }}
        whileHover={{ scale:1.08 }}
        whileTap={{ scale:.96 }}
      >
        <WaIcon />
      </motion.a>
    </div>
  );
}
