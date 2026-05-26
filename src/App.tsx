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
  ShieldCheck,
  Sparkles,
  Heart,
  MessageCircle,
  Share2
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

// 🎬 COMPONENTE DEL PRELOADER CINEMÁTICO (ESTILO NETFLIX / DISNEY+)
function PreloaderCinematic({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Temporizador de salida de la animación principal (3.4 segundos totales)
    const timer = setTimeout(() => {
      onComplete();
    }, 3400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[200] overflow-hidden select-none"
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
      }}
    >
      {/* Resplandor ambiental de fondo expandiéndose suavemente */}
      <motion.div 
        className="absolute w-[50vw] h-[50vw] rounded-full bg-[#00B4D8]/10 blur-[140px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.6, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <div className="relative flex flex-col items-center text-center px-6">
        {/* Contenedor del Logotipo Principal con efecto Zoom-In e Iluminación */}
        <motion.h1 
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white select-none drop-shadow-[0_0_35px_rgba(0,180,216,0.2)]"
          initial={{ scale: 0.75, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1.05, opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 2.2, 
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier para desaceleración cinematográfica premium
            delay: 0.2 
          }}
        >
          <span className="text-[#00B4D8] relative">
            G
            {/* Destello de luz detrás de la G */}
            <span className="absolute inset-0 bg-[#00B4D8]/30 blur-xl rounded-full scale-75 animate-pulse" />
          </span>
          <span>rowth</span>
          <span className="text-[#00B4D8] relative">
            B
            <span className="absolute inset-0 bg-[#00B4D8]/30 blur-xl rounded-full scale-75 animate-pulse" />
          </span>
          <span>rand</span>
        </motion.h1>

        {/* Subtítulo o Sello que emerge de abajo hacia arriba de forma sutil */}
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
        >
          <span className="h-px w-8 bg-[#00B4D8]" />
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white font-medium">
            Potenciadores de Marcas
          </p>
          <span className="h-px w-8 bg-[#00B4D8]" />
        </motion.div>
      </div>

      {/* Barra de progreso de carga cinemática en la parte inferior */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#00B4D8] to-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.8, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Control de estado para la carga de la animación de bienvenida
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo mientras la animación inicial esté activa
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const whatsappMessage = encodeURIComponent(
    "Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analicemos las oportunidades de crecimiento de mi empresa. Mi nombre es..."
  );

  return (
    <div className="selection:bg-[#00B4D8]/30 font-['Inter',_sans-serif] bg-[#FFFFFF] text-[#0A192F] relative overflow-x-hidden antialiased">
      
      {/* Control de animación AnimatePresence para desmontar el preloader limpiamente */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <PreloaderCinematic key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Google Fonts e Inyecciones CSS Globales */}
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

      {/* Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00B4D8]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#0A192F]/3 blur-[100px] rounded-full" />
      </div>

      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'h-20 bg-[#FFFFFF]/90 backdrop-blur-2xl border-b border-[#0A192F]/5 shadow-sm' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-extrabold text-[#0A192F] text-2xl tracking-tight">
              <span className="text-[#00B4D8]">G</span>rowth<span className="text-[#00B4D8]">B</span>rand
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

      {/* Menú Móvil */}
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

      {/* 2. HERO SECTION */}
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
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A192F] leading-[1.25] tracking-tight text-left">
                Inteligencia Artificial para multiplicar tus datos. <br />
                <span className="text-[#00B4D8] italic">Inteligencia Humana</span> para multiplicar tus ventas.
              </h1>
              
              <p className="text-[#0A192F]/70 text-base sm:text-lg leading-relaxed text-left max-w-xl font-light">
                En GrowthBrand no dejamos que las herramientas reemplacen a las personas; las ponemos a su servicio para liberar la chispa creativa que hace a tu marca única. Bienvenidos a una nueva forma de crecer.
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

            {/* Ficha Local de Google Business Profile */}
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
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Phone className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">LLAMAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><MapPin className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">UBICACIÓN</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Bookmark className="w-4 h-4" /></div>
                        <span className="text-[8px] font-bold tracking-tight text-[#0A192F]/60">GUARDAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
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

      {/* 3. MARQUESINA DE SOCIOS CORPORATIVOS */}
      <section className="bg-[#0A192F] py-16 border-y border-white/5 relative z-20 overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#00B4D8] italic font-bold tracking-tight mb-12">
            Ecosistemas e Infraestructura Tecnológica Integrada con<span className="text-white font-sans font-normal">.</span>
          </h2>
          <div className="relative w-full flex overflow-x-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0A192F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0A192F] after:to-transparent">
            <div className="animate-marquee-css flex items-center gap-24 whitespace-nowrap" style={{ display: 'flex', width: 'max-content', minWidth: 'max-content', willChange: 'transform' }}>
              <div className="flex items-center gap-24 shrink-0">
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white">Google</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white">GitHub</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} alt="" /><span className="font-sans font-bold text-2xl text-white">Meta</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white">Vercel</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/FFFFFF" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} alt="" /><span className="font-sans font-bold text-2xl text-white">TikTok</span></div>
              </div>
              <div className="flex items-center gap-24 shrink-0" aria-hidden="true">
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white">Google</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white">GitHub</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} alt="" /><span className="font-sans font-bold text-2xl text-white">Meta</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white shrink-0" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white">Vercel</span></div>
                <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/FFFFFF" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} alt="" /><span className="font-sans font-bold text-2xl text-white">TikTok</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE DOLORES PREMIUM */}
      <section id="dolores" className="py-24 bg-[#F8F9FA] relative z-20 border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Fricciones comerciales que removemos de tu infraestructura
            </h2>
            <div className="w-20 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                pain: "Tienen redes débiles para el nivel de negocio que manejan",
                solution: "El negocio puede vender bien offline, pero su imagen digital no transmite confianza ni profesionalismo. Elevamos el estatus de tus activos para alinearlos con tu facturación real.",
                icon: <Layers className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              },
              {
                pain: "No saben cómo crecer ni convertir seguidores en clientes",
                solution: "Publicas contenido sin estrategia, orden ni objetivos claros. Tienen visitas o interacción, pero carecen de un proceso para captar prospectos y cerrar ventas predecibles.",
                icon: <TrendingUp className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              },
              {
                pain: "Preocupación y miedo por el retorno real del marketing",
                solution: "Temen invertir en algo que no conocen y no ver resultados claros en ventas o contactos. Instalamos modelos analíticos de trazabilidad para auditar cada centavo en tiempo real.",
                icon: <BarChart3 className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              },
              {
                pain: "Delegación del ecosistema comercial a personas sin estrategia",
                solution: "Familiares o empleados manejan tus canales sin análisis, planificación ni medición. GrowthBrand toma el timón operativo bajo estándares de ingeniería predictiva.",
                icon: <Users className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              },
              {
                pain: "Pensar que la IA puede reemplazar todo el marketing",
                solution: "Creen que pueden resolverlo gratis o barato. La IA es una herramienta de optimización brutal, pero necesita dirección, criterio humano y estrategia corporativa para no volver a tu marca invisible.",
                icon: <Bot className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              },
              {
                pain: "Compiten por precio bajo en lugar de valor de mercado",
                solution: "Al no comunicar bien tu autoridad de firma, terminas comparado con opciones baratas. Diseñamos diferenciadores que defienden tus márgenes de ganancia.",
                icon: <AlertTriangle className="text-[#00B4D8] transition-colors group-hover:text-[#0A192F]" />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-[#0A192F]/5 shadow-sm transition-all duration-300 flex flex-col justify-between hover:bg-[#00B4D8]/5 hover:shadow-xl hover:border-[#00B4D8]/20 group cursor-default"
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">El Síntoma</h4>
                  <p className="font-display font-bold text-[#0A192F] text-lg leading-snug">{item.pain}</p>
                  <div className="h-px bg-gray-100 w-full group-hover:bg-[#00B4D8]/20 transition-colors" />
                  <h4 className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">La Solución</h4>
                  <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify group-hover:text-[#0A192F]">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MÓDULOS DE ANUNCIOS PREMIUM */}
      <section id="sistemas" className="py-24 bg-white relative z-20 border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32">
          
          {/* Mockup Meta Ads */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block text-xs font-bold">Meta Ads Strategy</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">Contenido Profesional de Alta Confianza</h2>
              <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">
                Tus activos e identidad publicitaria digital deben estar al nivel que el cliente corporativo espera. Reemplazamos la improvisación por una pauta de ingeniería comercial optimizada para rastrear conversiones reales.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-[2.5rem] p-6 sm:p-8 border border-[#0A192F]/5 shadow-inner space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-2 border-b border-[#0A192F]/5">
                <span className="font-display font-bold text-sm uppercase tracking-wider text-[#0A192F]/80">Manejamos Tus Redes</span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-[11px] font-mono font-bold text-emerald-600 shrink-0">Resultados:</span>
                  <div className="w-full sm:w-36 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[75%] h-full bg-[#00B4D8]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: "Líneas de Diseño Premium", tag: "Estrategia", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400" },
                  { title: "Elegancia Estructural Única", tag: "Conversión", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=400" },
                  { title: "Calzado de Alta Autoridad", tag: "Autoridad", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=400" },
                  { title: "Sistemas de Adquisición", tag: "Sistemas", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" },
                  { title: "Ingeniería de Producto", tag: "RevOps", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400" },
                  { title: "Casos de Éxito Comercial", tag: "Evidencia", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400" }
                ].map((post, i) => (
                  <div key={i} className="aspect-square bg-[#0A192F] rounded-2xl relative overflow-hidden flex flex-col justify-end p-4 group border border-white/5">
                    <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                    <span className="absolute top-3 right-3 text-[9px] font-mono font-bold bg-[#00B4D8] text-white px-2 py-0.5 rounded-full z-20 uppercase tracking-wider">{post.tag}</span>
                    <p className="text-white text-xs font-display font-bold leading-tight relative z-20 drop-shadow-sm">{post.title}</p>
                    <div className="flex gap-3 text-white/60 text-[10px] mt-2 relative z-20 pt-1 border-t border-white/5">
                      <span className="flex items-center gap-1"><Heart size={10} className="text-rose-500 fill-rose-500" /> 142</span>
                      <span className="flex items-center gap-1"><MessageCircle size={10} /> 42</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mockup TikTok Ads */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-[2.5rem] p-8 border border-[#0A192F]/5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[300px] bg-black rounded-[2.5rem] p-3 shadow-2xl relative text-white">
                <div className="rounded-[2.2rem] overflow-hidden bg-zinc-900 aspect-[9/16] relative flex flex-col justify-between p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=600" 
                    alt="Premium Footwear Commercial Ad" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10" />
                  <div className="flex justify-center gap-4 text-[10px] font-bold text-white/60 pt-2 relative z-20">
                    <span>Siguiendo</span>
                    <span className="text-white border-b-2 border-white pb-1">Para ti</span>
                  </div>
                  <div className="mt-auto space-y-3 relative z-20">
                    <div className="text-xs font-bold">@growthbrandname</div>
                    <div className="text-[11px] text-white/80 font-light">Sistemas de adquisición integrales. Ads will be shown on For You page.</div>
                    <div className="w-full bg-[#00B4D8] py-2.5 rounded-md text-center text-xs font-bold tracking-wider cursor-pointer">
                      Registrar Empresa
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block text-xs font-bold">TikTok Business Integration</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">Estructura de Conversión In-Feed Absoluta</h2>
              <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">
                Desplegamos embudos comerciales conectados directamente a tu WhatsApp o CRM de ventas, configurando mensajes claros y flujos de atención que cierran ventas predecibles.
              </p>
            </div>
          </div>

          {/* Mockup Google Business Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block text-xs font-bold">Local SEO Authority</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">Tu Negocio en el Mapa del Mundo</h2>
              <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">
                Optimizamos la ficha de Google Business Profile para que tu marca aparezca de forma impecable en búsquedas estratégicas locales, respondiendo reseñas y captando clientes recurrentes.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-[2.5rem] p-8 border border-[#0A192F]/5 flex justify-center">
              <div className="w-full max-w-[350px] bg-white border border-gray-200 rounded-3xl p-4 shadow-lg space-y-4">
                <div className="h-32 bg-gray-100 rounded-xl relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" alt="Local store" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-[#0A192F]">Tienda de jerséis</h4>
                  <span className="inline-block bg-blue-50 text-blue-600 font-bold text-[9px] px-2 py-0.5 rounded uppercase">Resumen</span>
                  <button className="w-full bg-[#FFFFFF] border border-blue-600 text-blue-600 text-xs font-bold py-2 rounded-xl mt-2 flex items-center justify-center gap-2">
                    <span>🛒 Pedir online</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECCIÓN DE INVERSIÓN */}
      <section id="inversión" className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-[#00B4D8] mb-6 font-bold tracking-tight">
              Modelos de Implementación B2B
            </h2>
            <p className="text-[#0A192F]/60 text-lg">
              Infraestructura volumétrica blindada para acelerar tus flujos comerciales de adquisición.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                type: 'ESTRATEGIA BASE',
                title: 'Arquitectura inicial para negocios tradicionales que buscan estructura de conversión y orden comercial.',
                subtitle: '',
                icon: '◉',
                textBtn: 'Adquirir Estrategia base',
                msgWa: 'Hola equipo de GrowthBrand. Me interesa adquirir el plan de Estrategia base para mi marca. My name is...',
                features: ['Gestión de Leads', 'Pauta Avanzada Google/Meta', 'Auditoría Mensual Comercial', 'Estructura SEO Local Básica']
              },
              {
                type: 'CRECIMIENTO ESCALABLE',
                title: 'Sistema robusto diseñado para automatizar flujos de pauta, optimizar el ROI y aumentar la conversión.',
                subtitle: 'TODO LO INCLUIDO EN ESTRATEGIA BASE +',
                icon: '◎',
                premium: true,
                textBtn: 'Adquirir sistema de crecimiento',
                msgWa: 'Hola equipo de GrowthBrand. Me interesa adquirir el sistema de crecimiento escalable para mi empresa. Mi nombre es...',
                features: ['WhatsApp API Business', 'CRM & Automations Core', 'Funnel UX Corporativo', 'Lead Scoring Algorítmico']
              },
              {
                type: 'GROWTH COMMAND',
                title: 'Infraestructura élite de adquisición continua orientada a dominar mercados regionales de forma predecible.',
                subtitle: 'TODO LO INCLUIDO EN CRECIMIENTO ESCALABLE +',
                icon: '⬢',
                textBtn: 'Adquirir Growth Command',
                msgWa: 'Hola socios de GrowthBrand. Requerimos la infraestructura de adquisición avanzada Growth Command. Mi nombre es...',
                features: ['Agentes de IA Avanzados', 'Centralización de Inteligencia Comercial', 'Análisis Predictivo de Costos']
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className={`bg-white p-10 rounded-[2.5rem] flex flex-col justify-between border border-[#0A192F]/10 shadow-[0_30px_70px_rgba(10,25,47,0.12)] transition-all duration-500 hover:bg-[#00B4D8]/5 hover:border-[#00B4D8]/30 group ${
                  plan.premium ? 'scale-[1.04] z-20 border-[#0A192F]/30 shadow-[0_45px_90px_rgba(10,25,47,0.18)]' : ''
                }`}
                whileHover={{ y: -8 }}
              >
                <div>
                  <div className="text-center mb-8">
                    <span className="font-mono text-2xl text-[#00B4D8] block mb-4 group-hover:scale-110 transition-transform">{plan.icon}</span>
                    <span className="font-mono font-bold tracking-[0.2em] text-xs text-[#0A192F]/60 uppercase block mb-4">{plan.type}</span>
                    <p className="text-[#0A192F]/70 text-sm leading-relaxed">{plan.title}</p>
                  </div>

                  {plan.subtitle && (
                    <p className="text-[10px] text-[#00B4D8] font-mono tracking-wider mb-6 italic text-center underline underline-offset-4 decoration-[#00B4D8]/20">
                      {plan.subtitle}
                    </p>
                  )}

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-[#0A192F]/80">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00B4D8]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/502YOURNUMBER?text=${encodeURIComponent(plan.msgWa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all bg-[#00B4D8] hover:bg-[#0096B4] text-white flex items-center justify-center gap-2 shadow-lg shadow-[#00B4D8]/20 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{plan.textBtn}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO DE CAPTACIÓN */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FFFFFF] relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-[#0A192F]/5">
          <div className="p-10 md:p-16 bg-[#0A192F] text-white flex flex-col justify-center">
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
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
              
              <div className="space-y-4">
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-bold uppercase tracking-[0.2em] text-[12px] shadow-2xl hover:bg-[#0096B4] transition-all flex items-center justify-center gap-3 font-display"
                >
                  <Send className="w-5 h-5" />
                  <span>Solicitar Diagnóstico Estratégico</span>
                </button>
                
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
          <div className="font-display font-extrabold text-[#0A192F] text-2xl italic">
            <span className="text-[#00B4D8]">G</span>rowth<span className="text-[#00B4D8]">B</span>rand
          </div>
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
