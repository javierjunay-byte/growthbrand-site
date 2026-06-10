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
  ArrowRight,
  Star,
  Shield,
  Clock,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ─── WhatsApp SVG ──────────────────────────────────────────────────────── */
const WaIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.212-1.252-6.234-3.53-8.513z"/>
  </svg>
);

/* ─── 🎬 PRELOADER CINEMÁTICO PREMIUM ───────────────────────────────────── */
function PreloaderCinematic({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center z-[200] overflow-hidden select-none"
      exit={{ 
        opacity: 0,
        filter: "blur(24px)",
        scale: 1.02,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      <motion.div 
        className="absolute w-[60vw] h-[60vw] rounded-full bg-[#00B4D8]/10 blur-[150px]"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 3.2, ease: "easeOut" }}
      />

      <div className="relative flex flex-col items-center text-center px-6">
        <motion.h1 
          className="font-display-premium font-extrabold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-white drop-shadow-[0_0_50px_rgba(0,180,216,0.25)] select-none"
          initial={{ scale: 0.8, opacity: 0, filter: "blur(12px)" }}
          animate={{ scale: 1.02, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="text-[#00B4D8] relative">
            G<span className="absolute inset-0 bg-[#00B4D8]/20 blur-2xl rounded-full scale-90 animate-pulse" />
          </span>
          <span>rowth</span>
          <span className="text-[#00B4D8] relative">
            B<span className="absolute inset-0 bg-[#00B4D8]/20 blur-2xl rounded-full scale-90 animate-pulse" />
          </span>
          <span>rand</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1.5 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#00B4D8]" />
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.5em] text-white font-semibold">Ecosistemas de Adquisición Élite</p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#00B4D8]" />
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#00B4D8] via-[#00E5FF] to-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main App ──────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [loading,     setLoading]     = useState(true);
  const [cursorPos,   setCursorPos]   = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Custom cursor ── */
  useEffect(() => {
    document.body.style.cursor = 'none';
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select, label')) {
        setCursorHover(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select, label')) {
        setCursorHover(false);
      }
    };
    const onDown = () => setCursorClick(true);
    const onUp   = () => setCursorClick(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout',  onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout',  onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  const whatsappMessage = encodeURIComponent(
    'Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analicemos las oportunidades de crecimiento de mi empresa. Mi nombre es...'
  );

  const heroImg = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=90&w=1400';
  const gbpImg  = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600';
  const tiktokImg = 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=600';
  const storeImg  = 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600';

  const pains = [
    { num:'01', pain:'Imagen digital que no refleja el nivel real del negocio',            sol:'Elevamos todos tus activos digitales para alinearlos con tu posicionamiento de mercado y facturación real.', icon: <Layers className="text-[#00B4D8]" /> },
    { num:'02', pain:'Presencia activa pero sin conversión ni clientes calificados',        sol:'Diseñamos un sistema de captación estratégica que convierte seguidores en prospectos de alta calidad.', icon: <TrendingUp className="text-[#00B4D8]" /> },
    { num:'03', pain:'Inversión en marketing sin métricas claras de retorno',               sol:'Instalamos modelos de trazabilidad para auditar cada centavo de pauta en tiempo real.', icon: <BarChart3 className="text-[#00B4D8]" /> },
    { num:'04', pain:'El ecosistema comercial delegado a personas sin visión estratégica',  sol:'GrowthBrand toma el timón operativo con estándares de ingeniería predictiva y crecimiento medible.', icon: <Users className="text-[#00B4D8]" /> },
    { num:'05', pain:'Confiar en que la IA resolverá el marketing sola',                    sol:'La IA optimiza, pero requiere dirección humana y estrategia corporativa para no perder posicionamiento.', icon: <Bot className="text-[#00B4D8]" /> },
    { num:'06', pain:'Compiten por precio en vez de defender su valor de mercado',          sol:'Diseñamos diferenciadores de firma que protegen tus márgenes y atraen clientes de alto poder adquisitivo.', icon: <AlertTriangle className="text-[#00B4D8]" /> },
  ];

  const plans = [
    { tier:'Base', icon:'◉', tag:'GROWTH STARTER', desc:'Para empresas que quieren validar su sistema de captación y comenzar a generar leads calificados de forma predecible.', features:['Gestión de Leads Calificados','Pauta Avanzada Google / Meta','Auditoría Mensual Comercial','Estructura SEO Local'], waLink:`https://wa.me/50200000000?text=${encodeURIComponent('Hola. Me interesa recibir más información sobre el despliegue del modelo ESTRATEGIA BASE. Busco estructurar correctamente mis canales de conversión y ordenar la pauta digital de mi marca. Mi nombre es...')}` },
    { tier:'Pro',  icon:'◎', tag:'GROWTH ACCELERATOR', desc:'Para empresas listas para automatizar sus procesos comerciales, escalar sus resultados y tener visibilidad total de su retorno.', sub:'TODO EN BASE +', features:['WhatsApp API Business','CRM & Automations Core','Funnel UX Corporativo','Lead Scoring Algorítmico'], premium:true, waLink:`https://wa.me/50200000000?text=${encodeURIComponent('Hola equipo. Quiero automatizar mis flujos comerciales y optimizar el ROI de mis campañas. Me interesa adquirir e implementar el sistema de CRECIMIENTO ESCALABLE en mi empresa. Mi nombre es...')}` },
    { tier:'Elite',icon:'⬢', tag:'GROWTH PREMIUM', desc:'Para empresas que buscan autoridad omnicanal, automatización avanzada y un socio estratégico de crecimiento a largo plazo.', sub:'TODO EN PRO +', features:['Agentes de IA Avanzados','Inteligencia Comercial Centralizada','Análisis Predictivo de Costos'], waLink:`https://wa.me/50200000000?text=${encodeURIComponent('Hola socios de GrowthBrand. Nuestra organización está lista para implementar una estructura de adquisición continua y analítica avanzada. Solicito detalles para integrar la infraestructura GROWTH COMMAND. Mi nombre es...')}` },
  ];

  const navLinks = ['Sistemas','Dolores','Metodología','Inversión'];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  /* ────────────────────────────── RENDER ─────────────────────────────── */
  return (
    <div className="selection:bg-[#00B4D8]/30 bg-[#030712] text-slate-300 relative overflow-x-hidden antialiased">
      
      {/* ═══ TIPOGRAFÍA Y ESTILOS GLOBALES INYECTADOS ═════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        .font-display-premium { font-family: 'Syne', sans-serif; }
        .font-serif-premium { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes marqueeScrollContinuous {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-css {
          animation: marqueeScrollContinuous 30s linear infinite !important;
        }
        @keyframes pulseRadar {
          0% { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-radar {
          animation: pulseRadar 3s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
        }
        
        /* Dark Immersive Grain */
        body::after {
          content: ''; position: fixed; inset: 0; z-index: 9997; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 160px 160px;
        }
      `}</style>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <PreloaderCinematic key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* ═══ CUSTOM CURSOR ══════════════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none', borderRadius: '50%',
          border: cursorHover ? '1.5px solid #00B4D8' : '1.5px solid rgba(255,255,255,0.15)',
          background: cursorHover ? 'rgba(0,180,216,0.08)' : 'transparent', mixBlendMode: 'normal',
        }}
        animate={{
          x: cursorPos.x - (cursorHover ? 22 : 18),
          y: cursorPos.y - (cursorHover ? 22 : 18),
          width:  cursorHover ? 44 : 36,
          height: cursorHover ? 44 : 36,
          scale: cursorClick ? 0.82 : 1,
        }}
        transition={{ type: 'spring', stiffness: cursorHover ? 220 : 280, damping: 22, mass: 0.6 }}
      />
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none', borderRadius: '50%',
          background: cursorHover ? '#00B4D8' : '#ffffff',
          boxShadow: cursorHover ? '0 0 12px rgba(0,180,216,0.6)' : 'none',
        }}
        animate={{
          x: cursorPos.x - (cursorHover ? 4 : 3),
          y: cursorPos.y - (cursorHover ? 4 : 3),
          width:  cursorHover ? 8 : 5,
          height: cursorHover ? 8 : 5,
          scale: cursorClick ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28, mass: 0.3 }}
      />

      {/* Ambient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#00B4D8]/3 blur-[120px] rounded-full" />
      </div>

      {/* ═══ NAV ═══════════════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'h-20 bg-[#030712]/85 backdrop-blur-2xl border-b border-white/5 shadow-sm' : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>
            <span className="font-display-premium font-extrabold text-white text-2xl tracking-tight">
              <span className="text-[#00B4D8]">G</span>rowth<span className="text-[#00B4D8]">B</span>rand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="font-sans text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase hover:text-[#00B4D8] transition-colors relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#aplicar" 
              className="font-sans bg-[#00B4D8] text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#0096B4] shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all active:scale-95"
            >
              Diagnóstico de Crecimiento
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-[90] bg-[#071426] flex flex-col pt-28 px-8 border-b border-white/10"
            initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:.25 }}>
            <div className="flex flex-col gap-6 text-left">
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className="font-serif-premium font-bold text-3xl text-white hover:text-[#00B4D8] py-2 border-b border-white/5"
                >{l}</a>
              ))}
              <a href="#aplicar" onClick={() => setMenuOpen(false)}
                className="bg-[#00B4D8] text-white text-center py-4 rounded-xl font-bold font-sans mt-6 tracking-wider text-sm shadow-[0_0_20px_rgba(0,180,216,0.3)]"
              >SOLICITAR DIAGNÓSTICO</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-[#030712] border-b border-white/5">
        <img src={heroImg} alt="City" className="absolute inset-0 w-full h-full object-cover object-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/60 to-[#071426]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div className="lg:col-span-6 space-y-6"
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] font-sans text-[10px] uppercase tracking-[0.25em] font-bold border border-[#00B4D8]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-ping" />
                Agencia Integral de Crecimiento Empresarial
              </div>
              <h1 className="font-display-premium font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight uppercase">
                Inteligencia Artificial para multiplicar tus datos. <br />
                <span className="text-[#00B4D8] font-serif-premium font-normal italic normal-case">Inteligencia Humana</span> para multiplicar tus ventas.
              </h1>
              <p className="font-sans font-light text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Integramos marketing, ventas, contenido y automatización en un solo sistema medible. Sin improvisación. Sin agencias genéricas. Con resultados reales para tu negocio B2B.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#aplicar" className="font-sans bg-[#00B4D8] hover:bg-[#0096B4] text-white px-8 py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,180,216,0.3)] text-center flex items-center justify-center gap-2">
                  Diagnóstico de Crecimiento <ArrowRight size={14}/>
                </a>
                <a href="https://wa.link/447jwu" target="_blank" rel="noopener noreferrer" className="font-sans border border-white/10 hover:border-[#00B4D8] text-white bg-white/5 hover:bg-[#00B4D8]/10 px-8 py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all text-center flex items-center justify-center gap-2 backdrop-blur-md">
                  <WaIcon /> Hablar con un Socio
                </a>
              </div>
            </motion.div>

            {/* GBP Card Adapted to Glassmorphism */}
            <motion.div className="lg:col-span-6 flex justify-center relative"
              initial={{ opacity:0, scale:.92 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once: true }} transition={{ duration:1, delay:.4 }}>
              <div className="animate-radar absolute w-72 h-72 rounded-full bg-[#00B4D8]/10 pointer-events-none" />
              <div className="w-full max-w-[340px] bg-[#071426]/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-3.5 shadow-[0_45px_85px_rgba(3,7,18,0.35)] relative z-10">
                <div className="bg-[#030712] rounded-[2.5rem] overflow-hidden border border-white/5">
                  <div className="h-44 w-full relative overflow-hidden">
                    <img src={gbpImg} alt="Negocio" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
                    <span className="absolute top-4 left-4 bg-[#00B4D8]/20 border border-[#00B4D8]/30 text-[#00B4D8] font-sans font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md">En Línea</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-sans font-bold text-white text-lg tracking-tight">Arquitectura y Construcción</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="font-sans font-bold text-sm text-[#F59E0B]">4.5</span>
                        <span className="text-[#F59E0B] text-xs">★★★★★</span>
                        <span className="font-sans text-xs text-slate-500">(83)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 border-y border-white/5 py-4">
                      {[{ I:Phone, l:'Llamar' },{ I:MapPin, l:'Ruta' },{ I:Bookmark, l:'Guardar' },{ I:Globe, l:'Web' }].map(({I,l}) => (
                        <div key={l} className="flex flex-col items-center gap-1.5">
                          <div className="w-8 h-8 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center">
                            <I size={13} className="text-[#00B4D8]" />
                          </div>
                          <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-wider">{l}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                      <p className="font-sans text-xs text-slate-300">
                        <span className="text-[#10B981] font-bold">Abierto</span> · Horario estelar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }}>
            <ChevronDown size={24} className="text-white/30" />
          </motion.div>
        </div>
      </section>

      {/* ═══ MARQUEE ════════════════════════════════════════════════════════ */}
      <section className="bg-[#030712] py-14 border-y border-white/5 relative z-20 overflow-hidden shadow-2xl">
        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#030712] to-transparent" />
          <div className="animate-marquee-css flex items-center gap-28 whitespace-nowrap">
            {[0,1].map(r => (
              <div key={r} className="flex items-center gap-28 shrink-0 font-sans text-xs font-bold text-slate-500 tracking-[0.25em] uppercase">
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-auto shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg>
                  Google
                </span>
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-auto shrink-0" viewBox="0 0 24 24"><path fill="#0064E0" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  Meta
                </span>
                <span className="flex items-center gap-3">
                  <svg className="h-5 w-auto shrink-0 fill-white" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475Z"/></svg>
                  Vercel
                </span>
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-auto shrink-0 fill-white" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.65-4.63 2.51-7.1 2.05-2.47-.44-4.63-2.05-5.88-4.25-1.26-2.22-1.46-4.99-.48-7.35 1.01-2.41 3.2-4.22 5.76-4.83 1.06-.25 2.15-.31 3.24-.22v4.21c-.56-.05-1.12-.03-1.67.11-1.24.28-2.31 1.08-2.92 2.16-.62 1.09-.76 2.45-.37 3.63.39 1.19 1.25 2.17 2.4 2.65 1.16.48 2.5.54 3.69.15 1.2-.41 2.2-1.26 2.81-2.37.62-1.1.8-2.41.52-3.64-.02-5.91-.01-11.82-.01-17.73h4.04z"/></svg>
                  TikTok
                </span>
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-auto shrink-0 fill-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASOS DE ESTUDIO ════════════════════════════════════════════════ */}
      <section style={{ padding:'7rem 0', background:'#071426', borderBottom:'1px solid rgba(255,255,255,.05)', position:'relative', zIndex:20 }}>
        <div style={{ maxWidth:1260, margin:'0 auto', padding:'0 2rem' }}>
          <div className="reveal" style={{ textAlign:'center', maxWidth:600, margin:'0 auto 4.5rem' }}>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#00B4D8] mb-4">Casos de Crecimiento</p>
            <h2 className="font-serif-premium font-normal text-4xl sm:text-5xl tracking-tight text-white leading-tight">
              Resultados reales.<br />Negocios que crecen con sistema.
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[
              { sector:'Retail Boutique', challenge:'"Una empresa líder en su sector que se sentía estancada y desconectada de su audiencia digital."', solution:'Implementamos modelos de machine learning para identificar nichos de mercado ocultos y rediseñamos toda su comunicación con un enfoque profundamente humano y persuasivo.', kpi:'+320%', kpiLabel:'aumento en leads calificados' },
              { sector:'Constructora Premium', challenge:'"Facturaban bien offline pero su presencia digital no reflejaba el calibre de sus proyectos."', solution:'Construimos una identidad digital de firma, optimizamos su Google Business Profile y lanzamos campañas de pauta de alto impacto orientadas a clientes corporativos.', kpi:'4.2×', kpiLabel:'retorno sobre inversión en ads' },
              { sector:'Consultoría Financiera', challenge:'"Dependían completamente del referido sin un sistema propio de captación de clientes de alto valor."', solution:'Diseñamos un funnel de captación premium con contenido de autoridad, automatizaciones de CRM y estrategia de posicionamiento en LinkedIn y Google.', kpi:'+18', kpiLabel:'clientes de alto valor en 90 días' },
            ].map((c,i) => (
              <motion.div key={i} whileHover={{ y:-6 }}
                className="bg-[#030712]/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 shadow-[0_45px_85px_rgba(3,7,18,0.35)] flex flex-col group hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="bg-[#030712] padding p-7">
                  <p className="font-sans text-[10px] font-bold text-[#00B4D8] uppercase tracking-wider mb-4">{c.sector}</p>
                  <div className="bg-white/5 rounded-2xl p-5 border-l-4 border-white/10">
                    <p className="font-sans text-[9px] text-slate-400 uppercase tracking-widest mb-2 font-bold">El desafío humano</p>
                    <p className="font-serif-premium text-base font-normal italic text-slate-300 leading-relaxed">{c.challenge}</p>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col gap-5 bg-gradient-to-br from-[#071426] to-[#030712]">
                  <div className="bg-[#00B4D8]/5 rounded-2xl p-5 border-l-4 border-[#00B4D8]">
                    <p className="font-sans text-[9px] text-[#00B4D8] uppercase tracking-widest mb-2 font-bold">La Solución GrowthBrand</p>
                    <p className="font-sans text-sm leading-relaxed text-slate-400 font-light">{c.solution}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                    <span className="font-display-premium font-bold text-4xl text-[#00B4D8]">{c.kpi}</span>
                    <span className="font-sans text-xs text-slate-400 font-light leading-snug uppercase tracking-wider">{c.kpiLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DOLORES — DARK PREMIUM ═══════════════════════════════════════ */}
      <section id="dolores" className="py-24 bg-[#030712] relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

          <div className="reveal text-center max-w-4xl mx-auto mb-20">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#00B4D8] mb-4">Diagnóstico Comercial</p>
            <h2 className="font-serif-premium font-normal text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Fricciones comerciales que removemos de tu infraestructura
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pains.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#071426]/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-[0_45px_85px_rgba(3,7,18,0.35)] flex flex-col justify-between hover:border-[#00B4D8]/40 hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#030712] border border-white/5 flex items-center justify-center group-hover:bg-[#00B4D8]/10 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-sans text-[10px] font-bold text-rose-500 uppercase tracking-widest">El Síntoma</h4>
                  <p className="font-sans font-bold text-white text-lg leading-snug">{item.pain}</p>
                  <div className="h-px bg-white/5 w-full group-hover:bg-[#00B4D8]/20 transition-colors" />
                  <h4 className="font-sans text-[10px] font-bold text-emerald-500 uppercase tracking-widest">La Solución</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify group-hover:text-slate-300 font-light">{item.sol}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SISTEMAS (META ADS Y GRILLA ORGÁNICA) ═══════════════════════════ */}
      <section id="sistemas" className="py-24 bg-[#071426] relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-28">
          
          {/* Módulo de Meta Ads: Mockup Live Ad y Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Mockup Translúcido Live Ad Simulation */}
            <div className="lg:col-span-6 bg-[#030712]/60 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/5 shadow-[0_45px_85px_rgba(3,7,18,0.35)] relative overflow-hidden flex flex-col items-center group hover:border-[#00B4D8]/40 transition-all duration-500 hover:-translate-y-1.5">
              <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
              <div className="w-full max-w-[360px] bg-[#071426] border border-white/10 rounded-3xl p-5 shadow-2xl space-y-5 relative z-10">
                <div className="h-56 w-full rounded-2xl relative flex flex-col justify-end p-5 text-white overflow-hidden bg-slate-900 border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                    alt="Infraestructura Corporativa B2B" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-transparent" />
                  <div className="text-[9px] font-sans font-extrabold text-[#00B4D8] tracking-[0.25em] relative z-10 uppercase mb-1">LIVE AD SIMULATION</div>
                  <div className="text-lg font-sans font-bold relative z-10 text-white tracking-tight">Infraestructura Corporativa B2B</div>
                </div>
                
                <div className="space-y-3 pt-1">
                  <div className="bg-[#030712] p-4 rounded-xl border border-white/5 flex justify-between items-center transition-all hover:border-[#00B4D8]/20">
                    <span className="text-xs font-sans text-slate-400 tracking-wider uppercase font-bold">CPA por Audiencia</span>
                    <span className="text-xs font-sans font-bold text-rose-500 tracking-wide uppercase">Optimizado</span>
                  </div>
                  <div className="bg-[#030712] p-4 rounded-xl border border-white/5 flex justify-between items-center transition-all hover:border-[#00B4D8]/20">
                    <span className="text-xs font-sans text-slate-400 tracking-wider uppercase font-bold">Valor de Vida (LTV)</span>
                    <span className="text-xs font-sans font-bold text-emerald-500 tracking-wide uppercase">Maximizado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copys Corporativos Alta Conversión */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#00B4D8] font-sans tracking-[0.3em] uppercase block text-xs font-bold">Meta Ads Strategy</span>
              <h2 className="font-serif-premium text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight">
                Contenido Profesional de Alta Confianza
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed text-justify font-light">
                Tus activos e identidad publicitaria digital deben estar al nivel que el cliente corporativo espera. Reemplazamos la improvisación por una pauta de ingeniería comercial optimizada para rastrear conversiones reales.
              </p>
            </div>
          </div>

          {/* Grilla Orgánica de Contenidos (Aspect-Square 3D) */}
          <div className="bg-[#030712]/50 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 border border-white/5 shadow-[0_45px_85px_rgba(3,7,18,0.35)] max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-white/5 mb-8">
              <span className="font-sans font-bold text-sm uppercase tracking-wider text-slate-300">
                Infraestructura de Contenidos Activa
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-sans font-bold text-emerald-500 uppercase tracking-widest">Rendimiento Técnico:</span>
                <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#00B4D8]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Enfoque de Crecimiento Avanzado", tag: "Estructura", color: "bg-[#00B4D8] text-white" },
                { title: "Hábitos Simples, Grandes Resultados", tag: "Conversión", color: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" },
                { title: "Tu Marca en Manos Profesionales", tag: "Autoridad", color: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" },
                { title: "Sistemas de Adquisición B2B", tag: "Sistemas", color: "bg-purple-500/20 text-purple-400 border border-purple-500/30" },
                { title: "Optimización Orgánica de Redes", tag: "RevOps", color: "bg-amber-500/20 text-amber-400 border border-amber-500/30" },
                { title: "Casos de Éxito Comercial Real", tag: "Evidencia", color: "bg-teal-500/20 text-teal-400 border border-teal-500/30" }
              ].map((post, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-[#071426] to-[#030712] aspect-square rounded-[2rem] p-8 flex flex-col justify-between border border-white/5 shadow-[0_20px_45px_rgba(3,7,18,0.2)] hover:shadow-[0_45px_85px_rgba(0,180,216,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00B4D8]/40 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                  <div className="flex justify-between items-start gap-2 relative z-10">
                    <span className={`text-[9px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider ${post.color}`}>
                      {post.tag}
                    </span>
                  </div>
                  
                  <p className="text-white text-xl font-sans font-bold leading-tight my-4 group-hover:text-[#00B4D8] transition-colors relative z-10 drop-shadow-md">
                    {post.title}
                  </p>
                  
                  <div className="flex gap-5 text-slate-500 text-xs pt-4 border-t border-white/5 relative z-10 font-sans font-bold">
                    <span className="flex items-center gap-1.5">
                      <Heart size={13} className="text-rose-500 fill-rose-500" /> 142
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} className="text-[#00B4D8]" /> 42
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ TIKTOK Y GBP (DARK GLASSMORPHISM) ═══════════════════════════════ */}
      <section className="py-24 bg-[#030712] relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-28">
          
          {/* TikTok Ads */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[320px] bg-[#071426]/80 backdrop-blur-2xl rounded-[3rem] p-4 shadow-[0_45px_85px_rgba(3,7,18,0.4)] border border-white/10 hover:border-[#00B4D8]/40 transition-all duration-500 hover:-translate-y-1.5 relative group">
                <div className="rounded-[2.5rem] overflow-hidden bg-[#030712] aspect-[9/16] relative flex flex-col justify-between p-5 border border-white/5">
                  <img 
                    src={tiktokImg} 
                    alt="Premium Corporate Commercial" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-transparent to-[#030712]/90 z-10" />
                  <div className="flex justify-center gap-6 text-[10px] font-sans font-bold text-slate-400 pt-2 relative z-20 uppercase tracking-widest">
                    <span>Siguiendo</span>
                    <span className="text-white border-b-2 border-[#00B4D8] pb-1">Para ti</span>
                  </div>
                  <div className="mt-auto space-y-3 relative z-20">
                    <div className="text-sm font-sans font-bold text-white">@growthbrandname</div>
                    <div className="text-[11px] font-sans text-slate-300 font-light leading-relaxed">Sistemas de adquisición integrales. Construyendo autoridad B2B de forma predictiva.</div>
                    <div className="w-full bg-[#00B4D8] py-3 rounded-xl text-center text-[10px] font-sans font-bold tracking-widest text-white uppercase shadow-[0_0_15px_rgba(0,180,216,0.4)] cursor-pointer">
                      Registrar Empresa
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-[#00B4D8] font-sans tracking-[0.3em] uppercase block text-xs font-bold">TikTok Business Integration</span>
              <h2 className="font-serif-premium text-4xl sm:text-5xl font-normal text-white leading-[1.1] tracking-tight">Estructura de Conversión In-Feed Absoluta</h2>
              <p className="text-slate-400 text-base leading-relaxed text-justify font-light">
                Desplegamos embudos comerciales conectados directamente a tu WhatsApp o CRM de ventas, configurando mensajes claros y flujos de atención que cierran ventas predecibles.
              </p>
            </div>
          </div>

          {/* Google Business Profile Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#00B4D8] font-sans tracking-[0.3em] uppercase block text-xs font-bold">Local SEO Authority</span>
              <h2 className="font-serif-premium text-4xl sm:text-5xl font-normal text-white leading-[1.1] tracking-tight">Tu Negocio en el Mapa del Mundo</h2>
              <p className="text-slate-400 text-base leading-relaxed text-justify font-light">
                Optimizamos la ficha de Google Business Profile para que tu marca aparezca de forma impecable en búsquedas estratégicas locales, respondiendo reseñas y captando clientes recurrentes.
              </p>
            </div>
            
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[360px] bg-[#071426]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-5 shadow-[0_45px_85px_rgba(3,7,18,0.4)] space-y-5 hover:border-[#00B4D8]/40 transition-all duration-500 hover:-translate-y-1.5 group">
                <div className="h-40 bg-[#030712] rounded-[1.8rem] relative overflow-hidden border border-white/5">
                  <img src={storeImg} alt="Local store" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
                </div>
                <div className="space-y-3 px-2">
                  <h4 className="font-sans font-bold text-lg text-white">Boutique de Autor Local</h4>
                  <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-sans font-bold text-[9px] px-3 py-1 rounded-full uppercase tracking-widest border border-[#00B4D8]/20">Resumen Estratégico</span>
                  <button className="w-full bg-transparent border border-[#00B4D8]/50 text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-colors font-sans text-xs font-bold py-3 rounded-xl mt-3 flex items-center justify-center gap-2 uppercase tracking-widest">
                    <span>🛒 Canal Digital Activo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ INVERSIÓN (MODELOS B2B TRIDIMENSIONALES) ══════════════════════════ */}
      <section id="inversión" className="py-24 bg-[#071426] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#00B4D8] mb-4">Sistemas de Crecimiento</p>
            <h2 className="font-serif-premium text-4xl sm:text-5xl lg:text-6xl text-white mb-6 font-normal tracking-tight">
              Modelos de Implementación B2B
            </h2>
            <p className="text-slate-400 text-lg font-light font-sans">
              Infraestructura volumétrica y sobresalida diseñada para blindar tus canales de adquisición.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`bg-[#030712]/80 backdrop-blur-2xl p-10 rounded-[2.5rem] flex flex-col justify-between border shadow-[0_45px_85px_rgba(3,7,18,0.35)] transition-all duration-500 hover:border-[#00B4D8]/40 hover:-translate-y-1.5 group relative overflow-hidden ${
                  plan.premium ? 'scale-[1.04] z-20 border-[#00B4D8]/50' : 'border-white/10'
                }`}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                
                {plan.premium && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent opacity-80" />
                )}

                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <span className="font-sans text-3xl text-[#00B4D8] block mb-5 group-hover:scale-110 transition-transform duration-500">{plan.icon}</span>
                    <span className="font-sans font-bold tracking-[0.25em] text-[10px] text-white uppercase block mb-4">{plan.tag}</span>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">{plan.desc}</p>
                  </div>

                  {plan.sub && (
                    <p className="font-sans text-[9px] text-[#00B4D8] font-bold tracking-[0.2em] mb-6 uppercase text-center border-b border-[#00B4D8]/20 pb-2">
                      {plan.sub}
                    </p>
                  )}

                  <ul className="space-y-5 mb-10">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-slate-300 font-sans font-light">
                        <CheckCircle2 size={18} className="shrink-0 text-[#00B4D8] mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full text-center py-4 rounded-xl text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all bg-[#00B4D8] hover:bg-[#0096B4] text-white flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,180,216,0.3)] active:scale-95"
                >
                  <WaIcon className="w-4 h-4" />
                  <span>{plan.tier === 'Base' ? 'Adquirir Estrategia base' : plan.tier === 'Pro' ? 'Adquirir sistema de crecimiento' : 'Adquirir Growth Command'}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULARIO DE CAPTACIÓN ═════════════════════════════════════════ */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#030712] relative z-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto bg-[#071426]/50 backdrop-blur-2xl rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_45px_85px_rgba(3,7,18,0.4)] border border-white/10 relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          
          <div className="p-10 md:p-16 bg-[#030712]/80 text-white flex flex-col justify-center relative z-10 border-r border-white/5">
            <blockquote className="border-l-4 border-[#00B4D8] pl-8 mb-10">
              <p className="font-serif-premium text-3xl sm:text-4xl font-normal tracking-tight text-white leading-[1.2] italic">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
            <p className="text-slate-400 text-base leading-relaxed font-light mb-10 text-justify font-sans">
              Registra tu marca aquí. No te enviaremos un PDF automatizado por un bot. Nuestro equipo analizará tu ecosistema digital actual utilizando nuestras herramientas de IA, y agendaremos una sesión para entregarte tu diagnóstico y analizar tu caso B2B.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon:<Shield size={16}/>, text:'Información 100% confidencial' },
                { icon:<Clock size={16}/>,  text:'Respuesta estratégica en < 24 horas' },
                { icon:<Star size={16}/>,   text:'Evaluación Directiva sin compromiso' },
              ].map(({icon,text}) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="text-[#00B4D8]">{icon}</div>
                  <span className="font-sans text-sm text-slate-300 font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 bg-transparent relative z-10">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const response = await fetch(form.action, {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                });
                if (response.ok) {
                  window.location.href = "/gracias.html";
                }
              }}
              name="diagnostico-growthbrand"
              method="POST"
              action="https://formspree.io/f/xaqkqjvq"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Nombre Completo</label>
                  <input name="nombre" type="text" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 text-white focus:border-[#00B4D8] transition-all outline-none text-sm font-sans font-light placeholder:text-slate-600 shadow-inner" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Correo Corporativo</label>
                  <input name="email" type="email" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 text-white focus:border-[#00B4D8] transition-all outline-none text-sm font-sans font-light placeholder:text-slate-600 shadow-inner" placeholder="ejemplo@empresa.com" required />
                </div>
                <div>
                  <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Sitio Web / Red Social</label>
                  <input name="website" type="text" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 text-white focus:border-[#00B4D8] transition-all outline-none text-sm font-sans font-light placeholder:text-slate-600 shadow-inner" placeholder="URL (Opcional)" />
                </div>
                <div>
                  <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Celular / WhatsApp</label>
                  <input name="telefono" type="tel" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 text-white focus:border-[#00B4D8] transition-all outline-none text-sm font-sans font-light placeholder:text-slate-600 shadow-inner" placeholder="+502 0000 0000" required />
                </div>
              </div>

              <div>
                <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Objetivo Principal</label>
                <select name="objetivo" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 text-slate-300 focus:border-[#00B4D8] transition-all outline-none text-sm font-sans font-light shadow-inner appearance-none">
                  <option>Generar Leads Calificados B2B</option>
                  <option>Optimizar Visibilidad Local</option>
                  <option>Estructura Comercial Integral</option>
                </select>
              </div>

              <div>
                <label className="font-sans text-slate-400 mb-3 block text-[9px] uppercase font-bold tracking-[0.25em]">Desafío o Contexto</label>
                <textarea name="contexto" className="w-full bg-[#030712] border border-white/10 rounded-2xl p-4 h-[100px] resize-none text-sm font-sans font-light outline-none focus:border-[#00B4D8] text-white placeholder:text-slate-600 shadow-inner" placeholder="Escribe tus retos corporativos aquí..." required />
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-sans font-bold uppercase tracking-[0.2em] text-[10px] shadow-[0_0_25px_rgba(0,180,216,0.3)] hover:bg-[#0096B4] transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Diagnóstico Estratégico</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer className="bg-[#030712] border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="font-display-premium font-extrabold text-white text-3xl tracking-tight">
            <span className="text-[#00B4D8]">G</span>rowth<span className="text-[#00B4D8]">B</span>rand
          </div>
          <p className="text-slate-500 text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Aceleramos los datos con tecnología, expandimos los negocios con empatía.</p>
          <div className="mt-14 pt-10 border-t border-white/5">
            <p className="text-[9px] text-slate-600 font-sans font-bold tracking-[0.2em] uppercase">
              © 2026 GrowthBrand. Ecosistemas de Crecimiento Integrales.
            </p>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING WHATSAPP BUTTON ═══════════════════════════════════════ */}
      <motion.a
        href={`https://wa.me/50200000000?text=${encodeURIComponent('Hola equipo de GrowthBrand. Estuve revisando su infraestructura web y me interesa agendar un espacio directo con un socio para analizar el ecosistema digital de mi empresa y evaluar opciones de crecimiento. Mi nombre es...')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-[0_15px_35px_rgba(37,211,102,0.3)] hover:-translate-y-2 transition-all duration-300 group border border-white/10 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
      >
        <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap px-0 group-hover:px-4 font-sans font-bold text-[9px] uppercase tracking-[0.2em]">
          Hablar con un Socio B2B
        </div>
        <WaIcon className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
