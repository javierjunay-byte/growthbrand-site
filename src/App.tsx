/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  X, 
  Menu,
  BarChart3,
  Bot,
  AlertTriangle,
  Layers,
  CheckCircle2,
  Send,
  Phone,
  MapPin,
  Globe,
  Bookmark,
  Users,
  Heart,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ─── Google Fonts import (injected via <style>) ─────────────────────────── */
const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
`;

/* ─── Palette & CSS variables ─────────────────────────────────────────────── */
const CSS_VARS = `
  :root {
    --ink:     #06091A;
    --paper:   #FAFAF8;
    --cyan:    #00B4D8;
    --cyan-dk: #0093B0;
    --muted:   #5C6070;
    --line:    rgba(6,9,26,.07);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--paper); color: var(--ink); overflow-x: hidden; }
  ::selection { background: rgba(0,180,216,.18); }

  .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
  .font-head    { font-family: 'Syne', sans-serif; }
  .font-body    { font-family: 'DM Sans', sans-serif; }

  /* Marquee */
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 32s linear infinite; }

  /* Radar pulse */
  @keyframes radar {
    0%   { transform: scale(.9);  opacity: .5; }
    100% { transform: scale(1.4); opacity: 0;  }
  }
  .animate-radar { animation: radar 3s ease-out infinite; }

  /* Ping */
  @keyframes ping {
    75%,100% { transform: scale(2); opacity: 0; }
  }
  .animate-ping { animation: ping 1.2s cubic-bezier(0,0,.2,1) infinite; }

  /* Grain overlay */
  .grain::before {
    content: '';
    position: fixed; inset: 0; z-index: 9999; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 128px 128px;
  }
`;

/* ─── WhatsApp SVG ────────────────────────────────────────────────────────── */
const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.212-1.252-6.234-3.53-8.513z"/>
  </svg>
);

/* ─── Cinematic preloader ─────────────────────────────────────────────────── */
function Preloader({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="font-head"
      style={{
        position: 'fixed', inset: 0, background: '#06091A',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 300, overflow: 'hidden',
      }}
      exit={{ opacity: 0, filter: 'blur(24px)', transition: { duration: .9, ease: [.25,1,.5,1] } }}
    >
      {/* ambient glow */}
      <motion.div
        style={{ position:'absolute', width:'50vw', height:'50vw', borderRadius:'50%',
                 background:'radial-gradient(circle, rgba(0,180,216,.18) 0%, transparent 70%)',
                 filter:'blur(80px)' }}
        initial={{ scale:.4, opacity:0 }}
        animate={{ scale:1.8, opacity:1 }}
        transition={{ duration:3.2, ease:'easeOut' }}
      />

      {/* wordmark */}
      <motion.h1
        style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontWeight:700,
                 fontSize:'clamp(3rem,10vw,6.5rem)', letterSpacing:'-.02em',
                 color:'#FAFAF8', lineHeight:1, textAlign:'center', position:'relative', zIndex:1 }}
        initial={{ scale:.7, opacity:0, filter:'blur(12px)' }}
        animate={{ scale:1, opacity:1, filter:'blur(0px)' }}
        transition={{ duration:2.4, ease:[.16,1,.3,1], delay:.15 }}
      >
        <span style={{ color:'#00B4D8' }}>G</span>rowth
        <span style={{ color:'#00B4D8' }}>B</span>rand
      </motion.h1>

      {/* tagline */}
      <motion.p
        style={{ fontFamily:"'Syne',sans-serif", fontSize:'.65rem', letterSpacing:'.35em',
                 textTransform:'uppercase', color:'rgba(250,250,248,.5)',
                 marginTop:'1.5rem', position:'relative', zIndex:1 }}
        initial={{ opacity:0, y:12 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1.2, ease:'easeOut', delay:1.5 }}
      >
        — Potenciadores de Marcas —
      </motion.p>

      {/* progress bar */}
      <div style={{ position:'absolute', bottom:48, left:'50%', transform:'translateX(-50%)',
                    width:120, height:1, background:'rgba(250,250,248,.12)', borderRadius:4, overflow:'hidden' }}>
        <motion.div
          style={{ height:'100%', background:'linear-gradient(90deg,#00B4D8,#FAFAF8)', borderRadius:4 }}
          initial={{ width:'0%' }}
          animate={{ width:'100%' }}
          transition={{ duration:2.9, ease:[.42,0,.58,1], delay:.2 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main App ────────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [loading, setLoading]    = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'unset';
  }, [loading]);

  const waMsg = encodeURIComponent(
    'Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analicemos las oportunidades de crecimiento de mi empresa. Mi nombre es...'
  );

  /* ── copyright-free Unsplash images by niche ─ */
  // Architecture / construction
  const archHero  = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600';
  // Social media / branding content mockup images (no logos)
  const gridImgs = [
    { src:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400', tag:'Estrategia',  label:'Identidad de Marca Premium' },
    { src:'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&q=80&w=400', tag:'Conversión',  label:'Creatividad Estructural Única' },
    { src:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=400', tag:'Autoridad',   label:'Presencia Digital de Autoridad' },
    { src:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400', tag:'Sistemas',    label:'Sistemas de Adquisición' },
    { src:'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=400', tag:'RevOps',      label:'Ingeniería de Producto' },
    { src:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', tag:'Evidencia',   label:'Casos de Éxito Comercial' },
  ];
  // TikTok mockup: lifestyle / e-commerce
  const tiktokImg = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600';
  // Google Business mockup: retail store
  const storeImg  = 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=600';
  // Hero section card
  const heroCard  = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600';

  const pains = [
    { pain:'Tienen redes débiles para el nivel de negocio que manejan', solution:'El negocio puede vender bien offline, pero su imagen digital no transmite confianza ni profesionalismo. Elevamos el estatus de tus activos para alinearlos con tu facturación real.', icon:<Layers className="text-cyan-500" /> },
    { pain:'No saben cómo crecer ni convertir seguidores en clientes',   solution:'Publicas contenido sin estrategia, orden ni objetivos claros. Tienen visitas o interacción, pero carecen de un proceso para captar prospectos y cerrar ventas predecibles.',  icon:<TrendingUp className="text-cyan-500" /> },
    { pain:'Preocupación y miedo por el retorno real del marketing',      solution:'Temen invertir en algo que no conocen y no ver resultados claros en ventas o contactos. Instalamos modelos analíticos de trazabilidad para auditar cada centavo en tiempo real.', icon:<BarChart3 className="text-cyan-500" /> },
    { pain:'Delegación del ecosistema comercial a personas sin estrategia', solution:'Familiares o empleados manejan tus canales sin análisis, planificación ni medición. GrowthBrand toma el timón operativo bajo estándares de ingeniería predictiva.', icon:<Users className="text-cyan-500" /> },
    { pain:'Pensar que la IA puede reemplazar todo el marketing', solution:'La IA es una herramienta de optimización brutal, pero necesita dirección, criterio humano y estrategia corporativa para no volver a tu marca invisible.', icon:<Bot className="text-cyan-500" /> },
    { pain:'Compiten por precio bajo en lugar de valor de mercado', solution:'Al no comunicar bien tu autoridad de firma, terminas comparado con opciones baratas. Diseñamos diferenciadores que defienden tus márgenes de ganancia.', icon:<AlertTriangle className="text-cyan-500" /> },
  ];

  const plans = [
    { type:'ESTRATEGIA BASE',      icon:'◉', title:'Arquitectura inicial para negocios tradicionales que buscan estructura de conversión y orden comercial.', subtitle:'', btn:'Adquirir Estrategia base', features:['Gestión de Leads','Pauta Avanzada Google / Meta','Auditoría Mensual Comercial','Estructura SEO Local Básica'], msg:'Hola equipo de GrowthBrand. Me interesa adquirir el plan de Estrategia base para mi marca. Mi nombre es...' },
    { type:'CRECIMIENTO ESCALABLE', icon:'◎', title:'Sistema robusto diseñado para automatizar flujos de pauta, optimizar el ROI y aumentar la conversión.', subtitle:'TODO LO INCLUIDO EN ESTRATEGIA BASE +', btn:'Adquirir sistema de crecimiento', premium:true, features:['WhatsApp API Business','CRM & Automations Core','Funnel UX Corporativo','Lead Scoring Algorítmico'], msg:'Hola equipo de GrowthBrand. Me interesa adquirir el sistema de crecimiento escalable. Mi nombre es...' },
    { type:'GROWTH COMMAND',        icon:'⬢', title:'Infraestructura élite de adquisición continua orientada a dominar mercados regionales de forma predecible.', subtitle:'TODO LO INCLUIDO EN CRECIMIENTO ESCALABLE +', btn:'Adquirir Growth Command', features:['Agentes de IA Avanzados','Centralización de Inteligencia Comercial','Análisis Predictivo de Costos'], msg:'Hola socios de GrowthBrand. Requerimos la infraestructura de adquisición avanzada Growth Command. Mi nombre es...' },
  ];

  const navLinks = ['Sistemas','Dolores','Metodología','Inversión'];

  return (
    <div className="font-body grain" style={{ background:'var(--paper)', color:'var(--ink)', overflowX:'hidden', position:'relative' }}>
      <style>{FONTS + CSS_VARS}</style>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Ambient background orbs */}
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-8%', left:'-6%', width:'38%', height:'38%', background:'radial-gradient(circle, rgba(0,180,216,.07) 0%, transparent 70%)', filter:'blur(80px)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', bottom:'5%', right:'-4%', width:'28%', height:'28%', background:'radial-gradient(circle, rgba(6,9,26,.05) 0%, transparent 70%)', filter:'blur(60px)', borderRadius:'50%' }} />
      </div>

      {/* ── NAV ───────────────────────────────────── */}
      <nav style={{
        position:'fixed', top:0, width:'100%', zIndex:100,
        transition:'all .5s',
        height: scrolled ? '72px' : '88px',
        background: scrolled ? 'rgba(250,250,248,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : 'none',
      }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem', height:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          {/* Logo */}
          <span
            className="font-display"
            style={{ fontWeight:700, fontSize:'1.6rem', letterSpacing:'-.01em', cursor:'pointer', color:'var(--ink)' }}
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          >
            <span style={{ color:'var(--cyan)' }}>G</span>rowth<span style={{ color:'var(--cyan)' }}>B</span>rand
          </span>

          {/* Desktop links */}
          <div style={{ display:'flex', gap:'2.5rem', alignItems:'center' }} className="hidden-mobile">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="font-head"
                style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase',
                         color:'rgba(6,9,26,.6)', textDecoration:'none', transition:'color .2s' }}
                onMouseEnter={e => e.target.style.color='var(--cyan)'}
                onMouseLeave={e => e.target.style.color='rgba(6,9,26,.6)'}
              >{l}</a>
            ))}
            <a href="#aplicar"
              className="font-head"
              style={{ background:'var(--ink)', color:'#FAFAF8', padding:'.75rem 1.5rem', borderRadius:'.75rem',
                       fontSize:'.6rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase',
                       textDecoration:'none', transition:'background .2s' }}
              onMouseEnter={e => e.target.style.background='#172A45'}
              onMouseLeave={e => e.target.style.background='var(--ink)'}
            >Diagnóstico Corporativo</a>
          </div>

          {/* Hamburger */}
          <button
            style={{ display:'none', background:'none', border:'none', cursor:'pointer', color:'var(--ink)', padding:'.5rem' }}
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{ position:'fixed', inset:0, zIndex:140, background:'#FAFAF8',
                     display:'flex', flexDirection:'column', paddingTop:'6rem', paddingInline:'2rem' }}
            initial={{ opacity:0, y:-16 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }}
            transition={{ duration:.28 }}
          >
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-display"
                style={{ fontSize:'2rem', fontWeight:700, color:'var(--ink)', textDecoration:'none',
                         padding:'1rem 0', borderBottom:'1px solid var(--line)' }}
              >{l}</a>
            ))}
            <a href="#aplicar" onClick={() => setMenuOpen(false)}
              className="font-head"
              style={{ marginTop:'1.5rem', background:'var(--ink)', color:'#FAFAF8', textAlign:'center',
                       padding:'1.1rem', borderRadius:'.85rem', fontWeight:700, fontSize:'.75rem',
                       letterSpacing:'.16em', textTransform:'uppercase', textDecoration:'none' }}
            >SOLICITAR DIAGNÓSTICO</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ──────────────────────────────────── */}
      <section style={{ minHeight:'100vh', display:'flex', alignItems:'center',
                        paddingTop:120, background:'var(--paper)',
                        borderBottom:'1px solid var(--line)', position:'relative', zIndex:10, overflow:'hidden' }}>

        {/* large decorative serif letter */}
        <span className="font-display" style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-55%)',
          fontSize:'clamp(18rem,30vw,36rem)', fontWeight:700, color:'rgba(0,180,216,.04)',
          lineHeight:1, userSelect:'none', pointerEvents:'none', letterSpacing:'-.04em' }}>G</span>

        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem 5rem', width:'100%', position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'4rem', alignItems:'center' }} className="hero-grid">

            {/* Left copy */}
            <motion.div style={{ maxWidth:680 }}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>

              <div className="font-head" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'.35rem 1rem', borderRadius:999, border:'1px solid rgba(0,180,216,.25)',
                background:'rgba(0,180,216,.06)', fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.2em', textTransform:'uppercase', color:'var(--ink)', marginBottom:'1.75rem' }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--cyan)', animation:'ping 1.2s cubic-bezier(0,0,.2,1) infinite' }} />
                Sistemas de Posicionamiento Global
              </div>

              <h1 className="font-display" style={{ fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:700,
                lineHeight:1.2, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.25rem' }}>
                Inteligencia Artificial para multiplicar tus datos.{' '}
                <em style={{ color:'var(--cyan)', fontStyle:'italic' }}>Inteligencia Humana</em>{' '}
                para multiplicar tus ventas.
              </h1>

              <p className="font-body" style={{ fontSize:'1.05rem', lineHeight:1.75, color:'var(--muted)',
                maxWidth:560, marginBottom:'2rem', fontWeight:300 }}>
                En GrowthBrand no dejamos que las herramientas reemplacen a las personas; las ponemos a su servicio para liberar la chispa creativa que hace a tu marca única. Bienvenidos a una nueva forma de crecer.
              </p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
                <a href="#aplicar" className="font-head"
                  style={{ background:'var(--ink)', color:'#FAFAF8', padding:'1rem 2rem', borderRadius:'.85rem',
                           fontWeight:700, fontSize:'.6rem', letterSpacing:'.16em', textTransform:'uppercase',
                           textDecoration:'none', transition:'background .2s, transform .15s', display:'inline-block' }}
                  onMouseEnter={e => { e.target.style.background='#172A45'; e.target.style.transform='scale(1.03)'; }}
                  onMouseLeave={e => { e.target.style.background='var(--ink)'; e.target.style.transform='scale(1)'; }}
                >Iniciar Auditoría Comercial</a>

                <a href={`https://wa.me/502YOURNUMBER?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="font-head"
                  style={{ display:'inline-flex', alignItems:'center', gap:'.5rem',
                           background:'var(--paper)', border:'1px solid var(--line)', color:'var(--ink)',
                           padding:'1rem 1.75rem', borderRadius:'.85rem', fontWeight:700,
                           fontSize:'.6rem', letterSpacing:'.14em', textTransform:'uppercase', textDecoration:'none',
                           transition:'border-color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='var(--cyan)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='var(--line)'}
                >
                  <WhatsAppIcon className="w-4 h-4" style={{ color:'#25D366' }} />
                  Hablar con un Socio
                </a>
              </div>
            </motion.div>

            {/* Right: Google Business card mockup */}
            <motion.div style={{ display:'flex', justifyContent:'center', position:'relative' }}
              initial={{ opacity:0, scale:.95 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ duration:.8 }}>

              <div className="animate-radar" style={{ position:'absolute', width:300, height:300, borderRadius:'50%',
                background:'rgba(0,180,216,.08)', pointerEvents:'none' }} />

              <div style={{ width:320, background:'#fff', borderRadius:36, padding:14,
                boxShadow:'0 32px 80px rgba(6,9,26,.14)', border:'1px solid var(--line)', position:'relative', zIndex:1 }}>
                <div style={{ borderRadius:28, overflow:'hidden', border:'1px solid var(--line)' }}>
                  <div style={{ height:170, position:'relative' }}>
                    <img src={heroCard} alt="Negocio" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    <span className="font-head" style={{ position:'absolute', top:10, left:12,
                      background:'rgba(6,9,26,.75)', color:'#FAFAF8', fontSize:9, fontWeight:700,
                      letterSpacing:'.12em', textTransform:'uppercase', padding:'3px 10px', borderRadius:999 }}>En Línea</span>
                  </div>
                  <div style={{ background:'#fff', padding:'1.1rem 1.2rem' }}>
                    <p className="font-display" style={{ fontWeight:700, fontSize:'1.1rem', color:'var(--ink)' }}>Arquitectura y Construcción</p>
                    <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:4 }}>
                      <span style={{ color:'#F59E0B', fontWeight:700, fontSize:'.85rem' }}>4.5</span>
                      <span style={{ color:'#F59E0B', fontSize:'.75rem' }}>★★★★★</span>
                      <span style={{ color:'var(--muted)', fontSize:'.7rem' }}>(83)</span>
                    </div>
                    <p className="font-body" style={{ color:'var(--muted)', fontSize:'.7rem', marginTop:4 }}>Construcción · Comercio local</p>

                    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8,
                      borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', padding:'10px 0', marginTop:12 }}>
                      {[{ Icon:Phone, label:'LLAMAR' },{ Icon:MapPin, label:'UBICACIÓN' },{ Icon:Bookmark, label:'GUARDAR' },{ Icon:Globe, label:'SITIO WEB' }]
                        .map(({ Icon, label }) => (
                        <div key={label} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                          <div style={{ width:34, height:34, borderRadius:'50%', background:'rgba(0,180,216,.1)',
                            display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <Icon size={15} style={{ color:'var(--cyan)' }} />
                          </div>
                          <span className="font-head" style={{ fontSize:7, fontWeight:700, letterSpacing:'.08em', color:'var(--muted)' }}>{label}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:10 }}>
                      <div style={{ width:8, height:8, borderRadius:'50%', background:'#10B981' }} />
                      <p className="font-body" style={{ fontSize:'.7rem', color:'var(--ink)' }}>
                        <span style={{ color:'#059669', fontWeight:700 }}>Abierto</span> · Horario estelar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────── */}
      <section style={{ background:'var(--ink)', padding:'4rem 0', borderTop:'1px solid rgba(255,255,255,.06)',
                        borderBottom:'1px solid rgba(255,255,255,.06)', position:'relative', zIndex:20, overflow:'hidden' }}>
        <div style={{ maxWidth:1280, margin:'0 auto 3rem', padding:'0 2rem', textAlign:'center' }}>
          <h2 className="font-display" style={{ color:'var(--cyan)', fontSize:'clamp(1.5rem,3vw,2.4rem)',
            fontWeight:700, fontStyle:'italic', letterSpacing:'-.01em' }}>
            Ecosistemas e Infraestructura Tecnológica Integrada con
            <span style={{ color:'#FAFAF8', fontFamily:'sans-serif', fontStyle:'normal', fontWeight:300 }}>.</span>
          </h2>
        </div>

        <div style={{ position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:96, zIndex:10,
            background:'linear-gradient(90deg,var(--ink),transparent)' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:96, zIndex:10,
            background:'linear-gradient(-90deg,var(--ink),transparent)' }} />

          <div className="marquee-track" style={{ display:'flex', alignItems:'center', gap:80, whiteSpace:'nowrap', width:'max-content' }}>
            {[1,2].map(rep => (
              <div key={rep} style={{ display:'flex', alignItems:'center', gap:80 }}>
                {/* Google */}
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:160 }}>
                  <svg style={{ height:28 }} viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg>
                  <span className="font-head" style={{ color:'#FAFAF8', fontWeight:700, fontSize:'1.3rem' }}>Google</span>
                </div>
                {/* Meta */}
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:140 }}>
                  <img src="https://cdn.simpleicons.org/meta/0064E0" style={{ height:26 }} alt="" />
                  <span className="font-head" style={{ color:'#FAFAF8', fontWeight:700, fontSize:'1.3rem' }}>Meta</span>
                </div>
                {/* Vercel */}
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:150 }}>
                  <svg style={{ height:22, fill:'#FAFAF8' }} viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg>
                  <span className="font-head" style={{ color:'#FAFAF8', fontWeight:700, fontSize:'1.3rem' }}>Vercel</span>
                </div>
                {/* TikTok */}
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:150 }}>
                  <img src="https://cdn.simpleicons.org/tiktok/FFFFFF" style={{ height:28 }} alt="" />
                  <span className="font-head" style={{ color:'#FAFAF8', fontWeight:700, fontSize:'1.3rem' }}>TikTok</span>
                </div>
                {/* GitHub */}
                <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:160 }}>
                  <svg style={{ height:28, fill:'#FAFAF8' }} viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="font-head" style={{ color:'#FAFAF8', fontWeight:700, fontSize:'1.3rem' }}>GitHub</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOLORES ───────────────────────────────── */}
      <section id="dolores" style={{ padding:'7rem 0', background:'var(--paper)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ textAlign:'center', maxWidth:700, margin:'0 auto 5rem' }}>
            <h2 className="font-display" style={{ fontSize:'clamp(2rem,4vw,3.2rem)', fontWeight:700,
              letterSpacing:'-.02em', lineHeight:1.2, color:'var(--ink)' }}>
              Fricciones comerciales que removemos de tu infraestructura
            </h2>
            <div style={{ width:56, height:2, background:'var(--cyan)', margin:'1.5rem auto 0', borderRadius:4 }} />
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.5rem' }}>
            {pains.map((item, i) => (
              <motion.div key={i}
                style={{ background:'#fff', padding:'2.2rem', borderRadius:28,
                  border:'1px solid var(--line)', cursor:'default', transition:'box-shadow .3s, border-color .3s' }}
                whileHover={{ y:-6, boxShadow:'0 24px 56px rgba(6,9,26,.1)', borderColor:'rgba(0,180,216,.3)' }}
              >
                <div style={{ width:42, height:42, borderRadius:12, background:'rgba(0,180,216,.08)',
                  display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.2rem' }}>
                  {item.icon}
                </div>
                <p className="font-head" style={{ fontSize:'.58rem', fontWeight:700, letterSpacing:'.18em',
                  textTransform:'uppercase', color:'#F43F5E', marginBottom:'.6rem' }}>El Síntoma</p>
                <h4 className="font-display" style={{ fontSize:'1.2rem', fontWeight:700, color:'var(--ink)',
                  lineHeight:1.3, marginBottom:'1rem' }}>{item.pain}</h4>
                <div style={{ height:1, background:'var(--line)', marginBottom:'1rem' }} />
                <p className="font-head" style={{ fontSize:'.58rem', fontWeight:700, letterSpacing:'.18em',
                  textTransform:'uppercase', color:'#10B981', marginBottom:'.6rem' }}>La Solución</p>
                <p className="font-body" style={{ fontSize:'.85rem', lineHeight:1.7, color:'var(--muted)', fontWeight:300 }}>{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTEMAS ──────────────────────────────── */}
      <section id="sistemas" style={{ padding:'7rem 0', background:'#fff', position:'relative', zIndex:20, borderTop:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem', display:'flex', flexDirection:'column', gap:'8rem' }}>

          {/* Meta Ads */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="split-grid">
            <div>
              <span className="font-head" style={{ color:'var(--cyan)', fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.28em', textTransform:'uppercase', display:'block', marginBottom:'1rem' }}>Meta Ads Strategy</span>
              <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.2 }}>
                Contenido Profesional de Alta Confianza
              </h2>
              <p className="font-body" style={{ fontSize:'.9rem', lineHeight:1.75, color:'var(--muted)', fontWeight:300 }}>
                Tus activos e identidad publicitaria digital deben estar al nivel que el cliente corporativo espera. Reemplazamos la improvisación por una pauta de ingeniería comercial optimizada para rastrear conversiones reales.
              </p>
            </div>

            <div style={{ background:'#F8F9FA', borderRadius:36, padding:'2rem',
              border:'1px solid var(--line)', boxShadow:'inset 0 2px 12px rgba(6,9,26,.04)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
                borderBottom:'1px solid var(--line)', paddingBottom:'1rem', marginBottom:'1.5rem' }}>
                <span className="font-head" style={{ fontWeight:700, fontSize:'.7rem', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink)' }}>Manejamos Tus Redes</span>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span className="font-head" style={{ fontSize:'.6rem', fontWeight:700, color:'#10B981' }}>Resultados:</span>
                  <div style={{ width:100, height:6, background:'#E5E7EB', borderRadius:4, overflow:'hidden' }}>
                    <div style={{ width:'75%', height:'100%', background:'var(--cyan)', borderRadius:4 }} />
                  </div>
                </div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
                {gridImgs.map((p, i) => (
                  <div key={i} style={{ aspectRatio:'1', borderRadius:16, overflow:'hidden', position:'relative' }}>
                    <img src={p.src} alt={p.label} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .5s' }}
                      onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                      onMouseLeave={e => e.target.style.transform='scale(1)'}
                    />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,9,26,.85) 0%, transparent 50%)' }} />
                    <span className="font-head" style={{ position:'absolute', top:8, right:8, background:'var(--cyan)',
                      color:'#fff', fontSize:8, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
                      padding:'2px 8px', borderRadius:999 }}>{p.tag}</span>
                    <p className="font-display" style={{ position:'absolute', bottom:10, left:10, right:10,
                      color:'#fff', fontSize:'.7rem', fontWeight:700, lineHeight:1.2 }}>{p.label}</p>
                    <div style={{ position:'absolute', bottom:0, left:10, right:10,
                      display:'flex', gap:10, color:'rgba(255,255,255,.6)', fontSize:'.6rem',
                      paddingBottom:8, paddingTop:4, borderTop:'1px solid rgba(255,255,255,.08)', marginTop:0 }}>
                      <span style={{ display:'flex', alignItems:'center', gap:3 }}>
                        <Heart size={9} style={{ color:'#F43F5E', fill:'#F43F5E' }} /> 142
                      </span>
                      <span style={{ display:'flex', alignItems:'center', gap:3 }}>
                        <MessageCircle size={9} /> 42
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="split-grid">
            <div style={{ display:'flex', justifyContent:'center', order:0 }} className="tiktok-mock">
              <div style={{ width:260, background:'#000', borderRadius:40, padding:12, boxShadow:'0 40px 80px rgba(6,9,26,.25)' }}>
                <div style={{ borderRadius:32, overflow:'hidden', aspectRatio:'9/16', position:'relative', background:'#111' }}>
                  <img src={tiktokImg} alt="Ad" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.65 }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.15) 0%, transparent 40%, rgba(0,0,0,.75) 100%)' }} />
                  <div style={{ position:'absolute', top:16, left:'50%', transform:'translateX(-50%)',
                    display:'flex', gap:20, zIndex:2 }}>
                    <span className="font-head" style={{ color:'rgba(255,255,255,.55)', fontSize:'.65rem', fontWeight:700 }}>Siguiendo</span>
                    <span className="font-head" style={{ color:'#fff', fontSize:'.65rem', fontWeight:700, borderBottom:'2px solid #fff', paddingBottom:2 }}>Para ti</span>
                  </div>
                  <div style={{ position:'absolute', bottom:20, left:16, right:16, zIndex:2 }}>
                    <p className="font-head" style={{ color:'#fff', fontWeight:700, fontSize:'.75rem', marginBottom:6 }}>@growthbrandname</p>
                    <p className="font-body" style={{ color:'rgba(255,255,255,.75)', fontSize:'.65rem', lineHeight:1.5, marginBottom:12, fontWeight:300 }}>
                      Sistemas de adquisición integrales. Ads will be shown on For You page.
                    </p>
                    <div style={{ background:'var(--cyan)', borderRadius:8, padding:'.6rem', textAlign:'center' }}>
                      <span className="font-head" style={{ color:'#fff', fontSize:'.65rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase' }}>Registrar Empresa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ order:1 }}>
              <span className="font-head" style={{ color:'var(--cyan)', fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.28em', textTransform:'uppercase', display:'block', marginBottom:'1rem' }}>TikTok Business Integration</span>
              <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.2 }}>
                Estructura de Conversión In-Feed Absoluta
              </h2>
              <p className="font-body" style={{ fontSize:'.9rem', lineHeight:1.75, color:'var(--muted)', fontWeight:300 }}>
                Desplegamos embudos comerciales conectados directamente a tu WhatsApp o CRM de ventas, configurando mensajes claros y flujos de atención que cierran ventas predecibles.
              </p>
            </div>
          </div>

          {/* Google Business */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="split-grid">
            <div>
              <span className="font-head" style={{ color:'var(--cyan)', fontSize:'.6rem', fontWeight:700,
                letterSpacing:'.28em', textTransform:'uppercase', display:'block', marginBottom:'1rem' }}>Local SEO Authority</span>
              <h2 className="font-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:700,
                letterSpacing:'-.02em', color:'var(--ink)', marginBottom:'1.2rem', lineHeight:1.2 }}>
                Tu Negocio en el Mapa del Mundo
              </h2>
              <p className="font-body" style={{ fontSize:'.9rem', lineHeight:1.75, color:'var(--muted)', fontWeight:300 }}>
                Optimizamos la ficha de Google Business Profile para que tu marca aparezca de forma impecable en búsquedas estratégicas locales, respondiendo reseñas y captando clientes recurrentes.
              </p>
            </div>

            <div style={{ display:'flex', justifyContent:'center' }}>
              <div style={{ width:320, background:'#fff', borderRadius:28, border:'1px solid var(--line)',
                boxShadow:'0 20px 50px rgba(6,9,26,.1)', padding:'1rem', overflow:'hidden' }}>
                <div style={{ height:130, borderRadius:18, overflow:'hidden', marginBottom:'1rem' }}>
                  <img src={storeImg} alt="Tienda" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <h4 className="font-display" style={{ fontWeight:700, fontSize:'1rem', color:'var(--ink)', marginBottom:6 }}>Tienda de Moda Local</h4>
                <span className="font-head" style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB',
                  fontWeight:700, fontSize:'.55rem', letterSpacing:'.1em', textTransform:'uppercase',
                  padding:'3px 10px', borderRadius:999, marginBottom:10 }}>Resumen</span>
                <button className="font-head" style={{ width:'100%', background:'#fff', border:'1.5px solid #2563EB',
                  color:'#2563EB', fontWeight:700, fontSize:'.7rem', padding:'.6rem', borderRadius:12, cursor:'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>
                  🛒 Pedir online
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INVERSIÓN ─────────────────────────────── */}
      <section id="inversión" style={{ padding:'7rem 0', background:'var(--paper)', position:'relative', zIndex:20, borderTop:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 5rem' }}>
            <h2 className="font-display" style={{ fontSize:'clamp(2.2rem,4vw,3.4rem)', fontWeight:700,
              color:'var(--cyan)', letterSpacing:'-.02em', marginBottom:'1rem' }}>
              Modelos de Implementación B2B
            </h2>
            <p className="font-body" style={{ color:'var(--muted)', fontSize:'1.05rem', fontWeight:300 }}>
              Infraestructura volumétrica blindada para acelerar tus flujos comerciales de adquisición.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1.5rem', alignItems:'start' }}>
            {plans.map((plan, i) => (
              <motion.div key={i}
                style={{ background:'#fff', padding:'2.5rem', borderRadius:32,
                  border: plan.premium ? '1.5px solid rgba(0,180,216,.5)' : '1px solid var(--line)',
                  boxShadow: plan.premium ? '0 40px 80px rgba(0,180,216,.1)' : '0 4px 24px rgba(6,9,26,.06)',
                  transform: plan.premium ? 'scale(1.03)' : 'scale(1)',
                  display:'flex', flexDirection:'column', gap:'1.2rem' }}
                whileHover={{ y:-8 }}
              >
                <div style={{ textAlign:'center' }}>
                  <span style={{ fontSize:'1.8rem', color:'var(--cyan)', display:'block', marginBottom:'.75rem' }}>{plan.icon}</span>
                  <span className="font-head" style={{ fontSize:'.58rem', fontWeight:700, letterSpacing:'.2em',
                    textTransform:'uppercase', color:'var(--muted)', display:'block', marginBottom:'.75rem' }}>{plan.type}</span>
                  <p className="font-body" style={{ fontSize:'.85rem', lineHeight:1.7, color:'var(--muted)', fontWeight:300 }}>{plan.title}</p>
                </div>

                {plan.subtitle && (
                  <p className="font-head" style={{ fontSize:'.55rem', color:'var(--cyan)', fontWeight:700,
                    letterSpacing:'.12em', textTransform:'uppercase', textAlign:'center',
                    textDecoration:'underline', textDecorationColor:'rgba(0,180,216,.3)' }}>{plan.subtitle}</p>
                )}

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.75rem' }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
                      <CheckCircle2 size={15} style={{ color:'var(--cyan)', flexShrink:0 }} />
                      <span className="font-body" style={{ fontSize:'.82rem', color:'var(--ink)', fontWeight:300 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/502YOURNUMBER?text=${encodeURIComponent(plan.msg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="font-head"
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.5rem',
                           background:'var(--cyan)', color:'#fff', padding:'1rem', borderRadius:14,
                           fontWeight:700, fontSize:'.6rem', letterSpacing:'.14em', textTransform:'uppercase',
                           textDecoration:'none', transition:'background .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='var(--cyan-dk)'}
                  onMouseLeave={e => e.currentTarget.style.background='var(--cyan)'}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {plan.btn}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ────────────────────────────── */}
      <section id="aplicar" style={{ padding:'7rem 2rem', background:'#fff', position:'relative', zIndex:20, borderTop:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', borderRadius:40, overflow:'hidden',
          display:'grid', gridTemplateColumns:'1fr 1fr',
          boxShadow:'0 40px 100px rgba(6,9,26,.14)', border:'1px solid var(--line)' }} className="form-grid">

          {/* Left */}
          <div style={{ background:'var(--ink)', padding:'4rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <blockquote style={{ borderLeft:'3px solid var(--cyan)', paddingLeft:'1.5rem', marginBottom:'2rem' }}>
              <p className="font-display" style={{ fontSize:'clamp(1.5rem,2.5vw,2.2rem)', fontWeight:700,
                color:'#FAFAF8', lineHeight:1.3, fontStyle:'italic' }}>
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            <p className="font-body" style={{ color:'rgba(250,250,248,.7)', fontSize:'.9rem', lineHeight:1.8, fontWeight:300 }}>
              Registra tu marca aquí. No te enviaremos un PDF automatizado por un bot. Nuestro equipo analizará tu ecosistema digital actual utilizando nuestras herramientas de IA, y agendaremos una sesión para entregarte tu diagnóstico y analizar tu caso.
            </p>
          </div>

          {/* Right */}
          <div style={{ background:'#FAFAF8', padding:'3.5rem' }}>
            <form
              onSubmit={async e => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const res = await fetch(form.action, { method:'POST', body:data, headers:{ Accept:'application/json' } });
                if (res.ok) window.location.href = '/gracias.html';
              }}
              name="diagnostico-growthbrand"
              method="POST"
              action="https://formspree.io/f/xaqkqjvq"
              style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}
            >
              {[
                { label:'Nombre Completo',        name:'nombre',   type:'text',  placeholder:'Tu nombre', required:true },
                { label:'Correo Corporativo',      name:'email',    type:'email', placeholder:'ejemplo@empresa.com', required:true },
                { label:'Sitio Web / Red Social',  name:'website',  type:'text',  placeholder:'Usuario (Opcional)' },
                { label:'Celular / WhatsApp',       name:'telefono', type:'tel',   placeholder:'+502 0000 0000', required:true },
              ].map(f => (
                <div key={f.name}>
                  <label className="font-head" style={{ display:'block', fontSize:'.58rem', fontWeight:700,
                    letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'.5rem' }}>{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                    style={{ width:'100%', background:'#fff', border:'1px solid var(--line)', borderRadius:14,
                             padding:'.85rem 1rem', fontSize:'.9rem', color:'var(--ink)', outline:'none',
                             fontFamily:"'DM Sans',sans-serif", transition:'border-color .2s' }}
                    onFocus={e => e.target.style.borderColor='var(--cyan)'}
                    onBlur={e => e.target.style.borderColor='var(--line)'}
                  />
                </div>
              ))}

              <div>
                <label className="font-head" style={{ display:'block', fontSize:'.58rem', fontWeight:700,
                  letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'.5rem' }}>Objetivo Principal</label>
                <select name="objetivo"
                  style={{ width:'100%', background:'#fff', border:'1px solid var(--line)', borderRadius:14,
                           padding:'.85rem 1rem', fontSize:'.9rem', color:'var(--ink)', outline:'none',
                           fontFamily:"'DM Sans',sans-serif" }}>
                  <option>Generar Leads Calificados</option>
                  <option>Optimizar Visibilidad Local</option>
                  <option>Estructura Comercial Integral</option>
                </select>
              </div>

              <div>
                <label className="font-head" style={{ display:'block', fontSize:'.58rem', fontWeight:700,
                  letterSpacing:'.18em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'.5rem' }}>Desafío o Contexto</label>
                <textarea name="contexto" placeholder="Tus retos..." required
                  style={{ width:'100%', background:'#fff', border:'1px solid var(--line)', borderRadius:14,
                           padding:'.85rem 1rem', fontSize:'.9rem', color:'var(--ink)', outline:'none',
                           fontFamily:"'DM Sans',sans-serif", resize:'none', height:80,
                           transition:'border-color .2s' }}
                  onFocus={e => e.target.style.borderColor='var(--cyan)'}
                  onBlur={e => e.target.style.borderColor='var(--line)'}
                />
              </div>

              <button type="submit" className="font-head"
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.6rem',
                         background:'var(--cyan)', color:'#fff', padding:'1.1rem', borderRadius:16,
                         fontWeight:700, fontSize:'.62rem', letterSpacing:'.18em', textTransform:'uppercase',
                         border:'none', cursor:'pointer', transition:'background .2s', marginTop:'.5rem' }}
                onMouseEnter={e => e.currentTarget.style.background='var(--cyan-dk)'}
                onMouseLeave={e => e.currentTarget.style.background='var(--cyan)'}
              >
                <Send size={16} />
                Solicitar Diagnóstico Estratégico
              </button>

              <p className="font-body" style={{ textAlign:'center', color:'#9CA3AF', fontSize:'.65rem', lineHeight:1.6 }}>
                🔒 <strong>Datos protegidos:</strong> Su información es totalmente confidencial y solo se utilizará para coordinar su sesión estratégica privada.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer style={{ background:'var(--paper)', borderTop:'1px solid var(--line)', padding:'4rem 2rem', textAlign:'center', position:'relative', zIndex:20 }}>
        <div className="font-display" style={{ fontWeight:700, fontSize:'1.8rem', letterSpacing:'-.01em',
          color:'var(--ink)', fontStyle:'italic', marginBottom:'.75rem' }}>
          <span style={{ color:'var(--cyan)' }}>G</span>rowth<span style={{ color:'var(--cyan)' }}>B</span>rand
        </div>
        <p className="font-head" style={{ color:'var(--muted)', fontSize:'.6rem', letterSpacing:'.3em',
          textTransform:'uppercase', marginBottom:'3rem' }}>
          Aceleramos los datos con tecnología, expandimos los negocios con empatía.
        </p>
        <div style={{ borderTop:'1px solid var(--line)', paddingTop:'1.5rem' }}>
          <p className="font-head" style={{ color:'rgba(6,9,26,.3)', fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase' }}>
            © 2026 GrowthBrand. Ecosistemas de Crecimiento Integrales.
          </p>
        </div>
      </footer>

      {/* ── WHATSAPP FAB ──────────────────────────── */}
      <motion.a
        href={`https://wa.me/502YOURNUMBER?text=${waMsg}`}
        target="_blank" rel="noopener noreferrer"
        style={{ position:'fixed', bottom:32, right:32, zIndex:150,
          display:'flex', alignItems:'center', gap:12,
          background:'#25D366', color:'#fff', padding:'1rem 1.2rem',
          borderRadius:24, boxShadow:'0 8px 32px rgba(37,211,102,.35)',
          textDecoration:'none', border:'1px solid rgba(255,255,255,.15)' }}
        initial={{ opacity:0, scale:.5 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ delay:2.2 }}
        whileHover={{ scale:1.08 }}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>

      {/* ── Responsive CSS ────────────────────────── */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none; }
        .hero-grid     { grid-template-columns: 1fr 1fr; }
        .split-grid    { grid-template-columns: 1fr 1fr; }
        .form-grid     { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          .hero-grid, .split-grid, .form-grid { grid-template-columns: 1fr !important; }
          .tiktok-mock   { order: -1 !important; }
        }
      `}</style>
    </div>
  );
}
