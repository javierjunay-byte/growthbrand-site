/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Bolt, 
  X, 
  Menu,
  BarChart3,
  Bot,
  AlertTriangle,
  EyeOff,
  Layers,
  CheckCircle2,
  ClipboardCheck,
  Send,
  Phone,
  MapPin,
  Globe,
  Bookmark,
  Users,
  Target,
  Clock,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.212-1.252-6.234-3.53-8.513z"/>
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analicemos las oportunidades de crecimiento de mi empresa. Mi nombre es..."
  );

  return (
    <div className="selection:bg-[#00B4D8]/30 font-['Inter',_sans-serif] bg-[#FFFFFF] text-[#0A192F] relative overflow-x-hidden antialiased">
      
      {/* Sistema de Fuentes y Animaciones Perpetuas */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes pulseRadar {
          0% { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-radar {
          animation: pulseRadar 3s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
        }
        @keyframes marqueeScrollContinuous {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-css {
          animation: marqueeScrollContinuous 30s linear infinite !important;
        }
      `}</style>

      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00B4D8]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#0A192F]/3 blur-[100px] rounded-full" />
      </div>

      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'h-20 bg-[#FFFFFF]/90 backdrop-blur-2xl border-b border-[#0A192F]/5 shadow-[0_4px_30px_rgba(10,25,47,0.02)]' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-extrabold text-[#0A192F] text-2xl tracking-tight">
              Growth<span className="text-[#00B4D8]">B</span>rand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Sistemas', 'Dolores', 'Metodología', 'Inversión'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#0A192F]/70 font-mono font-bold hover:text-[#00B4D8] transition-all text-[11px] uppercase tracking-[0.2em] relative group/link"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00B4D8] transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#aplicar"
              className="hidden md:flex bg-[#0A192F] text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-[#172A45] hover:scale-105 active:scale-95 shadow-md shadow-[#0A192F]/5 text-xs font-display uppercase tracking-wider"
            >
              <span>Diagnóstico Corporativo</span>
            </a>
            <button className="md:hidden text-[#0A192F] p-2 hover:bg-[#0A192F]/5 rounded-xl transition-colors relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Reparado */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[140] md:hidden bg-white flex flex-col pt-24 px-6 border-b border-[#0A192F]/10 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 text-left">
              {['Sistemas', 'Dolores', 'Metodología', 'Inversión'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display font-bold text-2xl text-[#0A192F] hover:text-[#00B4D8] transition-colors py-2 border-b border-[#0A192F]/5"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#aplicar" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#0A192F] text-white text-center py-4 rounded-xl font-bold font-display mt-4 tracking-wider text-sm shadow-md"
              >
                SOLICITAR DIAGNÓSTICO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION (H1 PERFECTAMENTE ALINEADO A LA IZQUIERDA SIN ESPACIOS ROTOS) */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-[#FFFFFF] border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              className="lg:col-span-6 space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00B4D8]/10 text-[#0A192F] font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-ping" />
                Sistemas de Posicionamiento Global
              </div>
              
              {/* CORRECCIÓN DE ESPACIOS: TEXT-LEFT PURO EN LUGAR DE TEXT-JUSTIFY */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A192F] leading-[1.25] tracking-tight text-left">
                Inteligencia Artificial para multiplicar tus datos. <br />
                <span className="text-[#00B4D8] italic">Inteligencia Humana</span> para multiplicar tus ventas.
              </h1>
              
              <p className="text-[#0A192F]/70 text-base sm:text-lg leading-relaxed text-justify max-w-xl font-light">
                En GrowthBrand no compramos algoritmos para reemplazar personas; los dominamos para liberar la chispa creativa que hace a tu marca única. Bienvenidos a la era del crecimiento con alma.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a 
                  href="#aplicar" 
                  className="bg-[#0A192F] text-white px-8 py-4 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#172A45] transition-all shadow-xl shadow-[#0A192F]/10 w-full sm:w-auto text-center uppercase"
                >
                  Iniciar Auditoría Comercial
                </a>
                <a 
                  href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F8F9FA] border border-[#0A192F]/10 text-[#0A192F] px-8 py-4 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#0A192F]/5 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 uppercase"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                  Hablar con un Socio
                </a>
              </div>
            </motion.div>

            {/* Ficha Google Business Profile */}
            <motion.div 
              className="lg:col-span-6 flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute w-72 h-72 rounded-full bg-[#00B4D8]/10 animate-radar pointer-events-none" />
              
              <div className="w-full max-w-[340px] bg-white border border-[#0A192F]/10 rounded-[3rem] p-3.5 shadow-[0_25px_60px_-15px_rgba(10,25,47,0.12)] relative z-10">
                <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden border border-[#0A192F]/5">
                  <div className="h-44 w-full bg-cover bg-center bg-[#172A45] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&q=80&w=600" 
                      alt="Negocio Local" 
                      className="w-full h-full object-cover object-center opacity-90"
                    />
                    <div className="absolute top-3 left-4 bg-[#0A192F]/80 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      En Línea
                    </div>
                  </div>

                  <div className="p-5 bg-white space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-[#0A192F] text-lg tracking-tight">Arquitectura y construcción</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-amber-500 font-bold text-sm">4.5</span>
                        <div className="flex text-amber-400 text-xs">★★★★★</div>
                        <span className="text-[#0A192F]/40 text-xs">(83)</span>
                      </div>
                      <span className="text-[#0A192F]/50 text-[11px] font-medium block mt-1">Construcción · Comercio local</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2 border-y border-[#0A192F]/5 py-3">
                      <div className="flex flex-col items-center justify-center text-center space-y-1 group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Phone className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">LLAMAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><MapPin className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">CÓMO LLEGAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Bookmark className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">GUARDAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Globe className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">SITIO WEB</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <p className="text-[#0A192F]/80 font-medium">
                          <span className="text-emerald-600 font-bold mr-1.5">Abierto</span> · Horario estelar
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MARQUESINA INFINITA (SIN TIRONES) */}
      <section className="bg-[#0A192F] py-16 border-y border-white/5 relative z-20 overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative w-full flex overflow-x-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0A192F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0A192F] after:to-transparent">
            <div className="animate-marquee-css flex items-center gap-24 whitespace-nowrap" style={{ display: 'flex', width: 'max-content', minWidth: 'max-content', willChange: 'transform' }}>
              <div className="flex items-center gap-24 shrink-0">
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white">Google</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white">GitHub</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} /><span className="font-sans font-bold text-2xl text-white">Meta</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white">Vercel</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/00F2FE" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} /><span className="font-sans font-bold text-2xl text-white">TikTok</span></div>
              </div>
              <div className="flex items-center gap-24 shrink-0" aria-hidden="true">
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white">Google</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white">GitHub</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} /><span className="font-sans font-bold text-2xl text-white">Meta</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white">Vercel</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/00F2FE" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} /><span className="font-sans font-bold text-2xl text-white">TikTok</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE DOLORES INTEGRADOS ("EL TECHO DE CRISTAL DIGITAL") */}
      <section id="dolores" className="py-24 bg-[#F8F9FA] relative z-20 border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Más allá del algoritmo. Por qué la automatización pura está matando la identidad de las marcas.
            </h2>
            <div className="w-20 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          {/* Mapeo estratégico de dolores reales extraídos de la solicitud */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                pain: "Tienen redes débiles para el nivel de negocio que manejan",
                solution: "El negocio puede vender bien, pero su imagen digital no transmite confianza ni profesionalismo. Elevamos tu nivel visual para que esté a la altura de tu facturación real.",
                icon: <Layers className="text-amber-500" />
              },
              {
                pain: "No saben cómo crecer ni convertir seguidores en clientes",
                solution: "Publican contenido sin estrategia, orden ni objetivos claros. Tienen visitas o interacción, pero carecen de un proceso para captar prospectos y cerrar ventas predecibles.",
                icon: <TrendingUp className="text-[#00B4D8]" />
              },
              {
                pain: "Preocupación por el retorno real del marketing",
                solution: "Temen invertir en algo que no conocen y no ver resultados en ventas o contactos. Instalamos modelos de atribución y analítica para que veas cada centavo convertido en tracción.",
                icon: <BarChart3 className="text-emerald-500" />
              },
              {
                pain: "Delegación del ecosistema a personas sin estrategia",
                solution: "Familiares o empleados manejan sus redes sin planificación ni medición. Tomamos el control con un equipo especializado que opera bajo estándares RevOps de Silicon Valley.",
                icon: <Users className="text-indigo-500" />
              },
              {
                pain: "Pensar que la IA puede reemplazar todo el marketing",
                solution: "Creen que pueden resolverlo gratis o barato. La IA es una herramienta de optimización brutal, pero necesita dirección, criterio y estrategia puramente humana para no volverse invisible.",
                icon: <Bot className="text-purple-500" />
              },
              {
                pain: "Compiten por precio bajo en lugar de valor corporativo",
                solution: "Al no comunicar bien su autoridad, terminan siendo comparados con opciones baratas. Diseñamos una propuesta única que proyecta el verdadero estatus y beneficio de tu firma.",
                icon: <AlertTriangle className="text-rose-500" />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-[#0A192F]/5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">El Síntoma</h4>
                  <p className="font-display font-bold text-[#0A192F] text-lg leading-snug">{item.pain}</p>
                  <div className="h-px bg-gray-100 w-full" />
                  <h4 className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">La Solución GrowthBrand</h4>
                  <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DIVIDIDA INTERACTIVA DE GOOGLE BUSINESS (MANTENIDA CON COPYS DE AYUDA) */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#0A192F]/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[360px] bg-white border border-[#0A192F]/10 rounded-[2.5rem] p-4 shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-[#F8F9FA] border border-[#0A192F]/5 p-4 space-y-4">
                <div className="h-36 w-full rounded-xl bg-cover bg-center relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" alt="Local Store" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-[#0A192F] text-base">Infraestructura Comercial Local</h4>
                  <p className="text-xs text-gray-500">Configuramos canales y mapas para que tu empresa sea la opción indiscutible en búsquedas.</p>
                  <button className="w-full py-2.5 rounded-xl bg-[#00B4D8] text-white text-xs font-bold shadow-lg shadow-[#00B4D8]/20">Aparecer en Google Ahora</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
              Preparamos tus canales digitales para captar y cerrar ventas de por vida
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0 text-[#00B4D8]"><Target /></div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-[#0A192F]">Estructura en WhatsApp e Instagram</h3>
                  <p className="text-[#0A192F]/70 text-sm text-justify leading-relaxed">De nada sirve atraer tráfico si tus canales están mal configurados, sin mensajes claros ni flujos de atención rápida. Creamos sistemas donde cada contacto es atendido bajo un orden profesional.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0 text-[#00B4D8]"><Clock /></div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-[#0A192F]">Liberamos tu tiempo operativo</h3>
                  <p className="text-[#0A192F]/70 text-sm text-justify leading-relaxed">Sabemos que estás enfocado en operar el negocio y no puedes sentarte a planificar, crear, medir y optimizar contenido. Nosotros absorbemos la ingeniería completa de tu marketing digital.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HISTORIAS DE CRECIMIENTO REAL */}
      <section id="metodologia" className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Historias de crecimiento real. Datos con propósito.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#0A192F]/5 rounded-[3rem] p-8 sm:p-14 shadow-xl space-y-6 relative overflow-hidden">
            <div className="p-6 bg-rose-50/60 border border-rose-100 rounded-2xl space-y-2">
              <h4 className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> El Desafío Comercial</h4>
              <p className="text-[#0A192F] font-medium text-lg italic text-justify leading-relaxed">
                "Nuestros clientes potenciales llegaban atrapados en métricas de vanidad que no pagaban la planilla a fin de mes. Sentían que habían tocado un techo de cristal invisible y que el mercado los estaba volviendo invisibles."
              </p>
            </div>

            <div className="p-6 bg-blue-50/60 border border-blue-100 rounded-2xl space-y-2">
              <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2"><Layers className="w-4 h-4" /> Nuestra Ingeniería de Crecimiento</h4>
              <p className="text-[#0A192F]/80 text-base leading-relaxed text-justify">
                Implementamos modelos predictivos de inteligencia artificial para identificar oportunidades de adquisición B2B ocultas y rediseñamos su identidad digital con un enfoque empático, transformando la tensión en tracción medible.
              </p>
            </div>

            <div className="p-6 bg-[#0A192F] text-white rounded-2xl space-y-2 shadow-md">
              <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> El Impacto en el Negocio</h4>
              <p className="text-white/90 font-light text-base leading-relaxed text-justify">
                No hacemos auditorías de software para venderte un reporte frío. Aceleramos tu crecimiento técnico para generar socios de vida y un retorno de inversión real, predecible e imparable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO DE CAPTACIÓN (TEXTOS Y BOTÓN REPARADOS DE FORMA QUIRÚRGICA) */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FFFFFF] relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-[#0A192F]/5">
          <div className="p-10 md:p-16 bg-[#0A192F] text-white flex flex-col justify-center">
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
            {/* CORRECCIÓN EXCELENTE DEL GANCHO: TEXTO LIMPIO SIN PROMESAS LIMITANTES */}
            <p className="text-white/80 text-base leading-relaxed font-light mb-8 text-justify">
              Registra tu marca aquí. No te enviaremos un PDF automatizado por un bot. Nuestro equipo analizará tu ecosistema digital actual utilizando nuestras herramientas de IA, y agendaremos una sesión para entregarte tu diagnóstico y analizar tu caso.
            </p>
          </div>

          <div className="p-10 md:p-14 bg-white relative">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Nombre Completo</label>
                    <input name="nombre" type="text" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Correo Corporativo</label>
                    <input name="email" type="email" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" placeholder="ejemplo@empresa.com" required />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Sitio Web / Red Social</label>
                    <input name="website" type="text" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" placeholder="Usuario (Opcional)" />
                  </div>
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Celular / WhatsApp</label>
                    <input name="telefono" type="tel" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" placeholder="+502 0000 0000" required />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Objetivo Principal</label>
                    <select name="objetivo" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm">
                      <option>Generar Leads Calificados</option>
                      <option>Optimizar Visibilidad Local</option>
                      <option>Estructura Comercial Integral</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Desafío o Contexto</label>
                    <textarea name="contexto" className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 h-[54px] resize-none text-sm outline-none focus:border-[#00B4D8]" placeholder="Tus retos..." required />
                  </div>
                </div>
              </div>
              
              {/* BOTÓN Y FOOTER DEL FORMULARIO REDISEÑADO SEGÚN ESPECIFICACIÓN */}
              <div className="space-y-4">
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-bold uppercase tracking-[0.2em] text-[12px] shadow-2xl hover:bg-[#0096B4] transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Solicitar Diagnóstico Estratégico</span>
                </button>
                
                {/* TEXTO DE PROTECCIÓN RE-INTEGRADO EXPLICITAMENTE ABAJO DEL BOTON */}
                <p className="text-center text-gray-400 text-[10px] font-mono leading-relaxed px-4">
                  🔒 <strong>Datos protegidos:</strong> Su información es totalmente confidencial y solo se utilizará para coordinar su sesión estratégica privada bajo estricto secreto profesional.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#F8F9FA] border-t border-[#0A192F]/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="font-display font-extrabold text-[#0A192F] text-2xl mb-4 italic">GrowthBrand</div>
          <p className="text-gray-400 text-xs font-mono uppercase tracking-[0.3em]">Aceleramos los datos con tecnología, expandimos los negocios con empatía.</p>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-[#0A192F]/40 font-mono tracking-widest uppercase">
              © 2026 GrowthBrand. Ecosistemas de Crecimiento Integrales.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 transition-all group border border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap px-0 group-hover:px-2 font-bold text-xs uppercase tracking-widest">
          ¿Cansado de los asistentes virtuales y los menús numéricos? Presiona aquí y habla directamente con un Socio de Crecimiento de nuestro equipo. Sin filtros robóticos.
        </div>
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
