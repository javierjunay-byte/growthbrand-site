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
  ArrowRight,
  ArrowLeft,
  Users,
  Briefcase
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide para el Hero cinematográfico
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // PARTE 1: Rediseño Conceptual del Logotipo (SVG Sagrado de Ingeniería y Sinapsis Humana)
  const NewConceptualLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,180,216,0.5)]">
        {/* Vector de Datos A - Ascendente 45° */}
        <path 
          d="M20,80 L50,50 L80,20" 
          stroke="#0A192F" 
          strokeWidth="10" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Vector de Datos B - Inteligencia Exponencial */}
        <path 
          d="M25,75 C40,60 45,55 50,50 C55,45 60,40 75,25" 
          stroke="#00B4D8" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Punto de Sinapsis Central / Espacio Negativo Apretón de Manos */}
        <circle cx="50" cy="50" r="11" fill="#0A192F" />
        <circle cx="50" cy="50" r="5" fill="#00B4D8" />
        <circle cx="50" cy="50" r="2" fill="#FFFFFF" />
      </svg>
    </div>
  );

  // Data del Hero Section
  const slides = [
    {
      title: "Inteligencia Artificial para multiplicar tus datos. Inteligencia Humana para multiplicar tus ventas.",
      subtitle: "En GrowthBrand no compramos algoritmos para reemplazar personas; los dominamos para liberar la chispa creativa que hace a tu marca única. Bienvenidos a la era del crecimiento con alma.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Tu marca no necesita un proveedor de software. Necesita un compañero de historia.",
      subtitle: "Las máquinas optimizan procesos, pero solo los seres humanos construyen imperios. Caminamos contigo, pensamos contigo, crecemos contigo. Somos familia.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para que analizemos las oportunidades de crecimiento de mi empresa. Mi nombre es..."
  );

  return (
    <div className="selection:bg-[#00B4D8]/30 font-['Inter',_sans-serif] bg-[#FFFFFF] text-[#0A192F] relative overflow-x-hidden">
      
      {/* Estilos Globales Compartidos */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes marqueeScrollContinuous {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-css {
          animation: marqueeScrollContinuous 24s linear infinite !important;
        }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${
        scrolled 
          ? 'h-20 bg-[#FFFFFF]/90 backdrop-blur-3xl border-b border-[#0A192F]/5 shadow-[0_10px_40px_-5px_rgba(10,25,47,0.05)]' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <NewConceptualLogo className={scrolled ? "w-9 h-9" : "w-11 h-11"} />
            <span className="font-display font-extrabold tracking-tight text-[#0A192F] text-xl sm:text-2xl group-hover:text-[#00B4D8] transition-colors duration-300">
              GrowthBrand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {['Sistemas', 'Metodología', 'Inversión'].map((item) => (
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
              className="hidden md:flex bg-[#0A192F] text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:bg-[#172A45] hover:scale-105 active:scale-95 shadow-lg shadow-[#0A192F]/10 items-center justify-center gap-2.5 uppercase tracking-[0.12em] text-xs font-display"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Diagnóstico Humano</span>
            </a>
            <button className="md:hidden text-[#0A192F] p-2 hover:bg-[#0A192F]/5 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: El Carrusel de Entrada (Hero Section de Neuromarketing) */}
      <section className="relative h-screen w-full bg-[#0A192F] overflow-hidden z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Imagen cinematográfica de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] scale-105"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            {/* Capa de degradado corporativo premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent lg:via-[#0A192F]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />

            {/* Contenido Textual */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 text-white space-y-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight drop-shadow-md text-white"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl font-light leading-relaxed"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="pt-4 flex flex-col sm:flex-row items-center gap-4"
                  >
                    <a 
                      href="#aplicar" 
                      className="bg-[#00B4D8] text-white px-8 py-4.5 rounded-xl font-bold font-display text-sm tracking-wide hover:bg-[#0096B4] transition-all shadow-xl shadow-[#00B4D8]/20 w-full sm:w-auto text-center"
                    >
                      SOLICITAR EVALUACIÓN ESTRATÉGICA
                    </a>
                    <a 
                      href="https://wa.me/502YOURNUMBER?text=whatsappMessage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4.5 rounded-xl font-bold font-display text-sm tracking-wide hover:bg-white/20 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                      HABLAR CON UN ASESOR
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles del Slider */}
        <div className="absolute bottom-10 right-6 sm:right-12 z-30 flex items-center gap-4">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <span className={`w-8 h-1.5 rounded-full transition-all duration-500 ${currentSlide === 0 ? 'bg-[#00B4D8]' : 'bg-white/20'}`} />
            <span className={`w-8 h-1.5 rounded-full transition-all duration-500 ${currentSlide === 1 ? 'bg-[#00B4D8]' : 'bg-white/20'}`} />
          </div>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Brand Trust Sliding Section */}
      <section className="bg-[#0A192F] py-14 border-y border-white/5 relative z-20 overflow-hidden shadow-lg">
        <div className="relative w-full flex overflow-x-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0A192F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0A192F] after:to-transparent">
          <div className="animate-marquee-css flex items-center gap-24 whitespace-nowrap" style={{ display: 'flex', width: 'max-content', minWidth: 'max-content', willChange: 'transform' }}>
            <div className="flex items-center gap-24 shrink-0">
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">Google</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">GitHub</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} /><span className="font-sans font-bold text-2xl text-white tracking-tight">Meta</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">Vercel</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/00F2FE" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} /><span className="font-sans font-bold text-2xl text-white tracking-tight">TikTok</span></div>
            </div>
            <div className="flex items-center gap-24 shrink-0" aria-hidden="true">
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.11-3.13z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.13c.94-2.85 3.57-4.96 6.68-4.96z"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">Google</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-8 w-auto fill-white text-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">GitHub</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-6.5 w-auto" src="https://cdn.simpleicons.org/meta/0064E0" style={{ height: '28px' }} /><span className="font-sans font-bold text-2xl text-white tracking-tight">Meta</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><svg className="h-6.5 w-auto fill-white text-white" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z"/></svg><span className="font-sans font-bold text-2xl text-white tracking-tight">Vercel</span></div>
              <div className="flex items-center gap-3.5 justify-center min-w-[180px]"><img className="h-7.5 w-auto" src="https://cdn.simpleicons.org/tiktok/00F2FE" style={{ height: '34px', filter: 'drop-shadow(2px 0px 0px #FE2C55)' }} /><span className="font-sans font-bold text-2xl text-white tracking-tight">TikTok</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: El Factor Diferenciador vs. "Cerebro" (Value Proposition) */}
      <section id="sistemas" className="py-24 bg-[#FFFFFF] border-b border-[#0A192F]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block mb-4 text-xs font-bold">
              Análisis de Paradigma Comercial
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Más allá del algoritmo. Por qué la automatización pura está matando la identidad de las marcas.
            </h2>
            <div className="w-24 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Bloque Izquierdo - Estilo Cerebro Robótico */}
            <motion.div 
              className="bg-[#F8F9FA] rounded-[2.5rem] p-10 lg:p-14 border border-[#0A192F]/5 flex flex-col justify-between group relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-[#0A192F]/5 rounded-2xl flex items-center justify-center text-[#0A192F]/50">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A192F]/80">
                  Agencias basadas en IA abstracta.
                </h3>
                <p className="text-[#0A192F]/60 text-base leading-relaxed font-normal">
                  El mercado se llenó de reportes automatizados, respuestas de bots configurados y contenidos genéricos que no transmiten nada. Las marcas se vuelven invisibles porque hablan como máquinas. Métricas frías sin retorno real.
                </p>
              </div>
              <div className="pt-8 flex items-center gap-2 text-xs font-mono font-bold text-[#0A192F]/40 uppercase tracking-wider">
                <EyeOff className="w-4 h-4" /> Desconexión Humana Permanente
              </div>
            </motion.div>

            {/* Bloque Derecho - Revolución GrowthBrand */}
            <motion.div 
              className="bg-[#0A192F] text-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#00B4D8]/10 blur-[100px] rounded-full" />
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-[#00B4D8]/20 rounded-2xl flex items-center justify-center text-[#00B4D8]">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#00B4D8]">
                  Ingeniería Predictiva + Empatía Estratégica.
                </h3>
                <p className="text-white/80 text-base leading-relaxed font-light">
                  Utilizamos la misma IA avanzada que las firmas de Silicon Valley para procesar millones de datos en tiempo real, predecir tendencias de mercado y reducir tus costos de adquisición. Pero el control del timón es 100% humano. Cada estrategia es afinada por creativos que entienden la cultura, el dolor y la ambición de tu cliente.
                </p>
              </div>
              <div className="pt-8 flex items-center gap-2 text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest relative z-10">
                <CheckCircle2 className="w-4 h-4" /> Retorno de Inversión Estructural
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: El Portafolio / Casos de Éxito (Historias de Impacto) */}
      <section id="metodologia" className="py-24 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block mb-4 text-xs font-bold">
              Evidencia Empírica de Negocio
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Historias de crecimiento real. Datos con propósito.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#0A192F]/5 rounded-[3rem] p-8 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#00B4D8]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="lg:col-span-12 space-y-8 relative z-10">
              <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> El Desafío Humano
                </h4>
                <p className="text-[#0A192F] font-medium text-lg italic">
                  "Una empresa líder en su sector que se sentía estancada y desconectada de su audiencia digital."
                </p>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4" /> La Solución GrowthBrand
                </h4>
                <p className="text-[#0A192F]/80 text-base leading-relaxed">
                  Implementamos modelos de machine learning para identificar nichos de mercado ocultos y rediseñamos toda su comunicación con un enfoque profundamente humano y persuasivo.
                </p>
              </div>

              <div className="p-6 bg-[#0A192F] text-white rounded-2xl space-y-3 shadow-lg">
                <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> El Resultado de Negocio
                </h4>
                <p className="text-white font-light text-base leading-relaxed">
                  No solo subieron los clics; se transformó el negocio. Retorno de inversión medible ($ROI$) y un equipo de trabajo que recuperó la pasión por conectar con su comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo de Control de Rendimiento (Fijado Arquitectónicamente) */}
      <section className="py-20 bg-white border-b border-[#0A192F]/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0A192F] rounded-[3rem] p-4 sm:p-6 border border-white/5 shadow-2xl flex flex-col">
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[0.2em]">Live Data Stream</span>
                </div>
                <h3 className="text-white font-semibold text-lg font-display">System Performance</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-6 pt-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
                <span className="text-white/30 text-[9px] uppercase font-bold tracking-widest block mb-2">Revenue Growth</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-white text-2xl sm:text-3xl font-bold tracking-tighter">$142.4K</span>
                  <span className="text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded-md leading-none">+24%</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
                <span className="text-white/30 text-[9px] uppercase font-bold tracking-widest block mb-2">Efficiency Index</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-white text-2xl sm:text-3xl font-bold tracking-tighter">98.2</span>
                  <span className="text-[#00B4D8] text-[10px] font-bold bg-[#00B4D8]/10 px-1.5 py-0.5 rounded-md leading-none">Optimal</span>
                </div>
              </div>
            </div>

            <div className="px-6 pt-8 pb-12 relative" style={{ height: '200px', minHeight: '200px' }}>
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-10">
                  {[...Array(6)].map((_, i) => <div key={i} className="w-full h-px bg-white" />)}
                </div>
                <svg className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M0,200 L0,150 C40,160 80,70 120,95 C160,120 200,30 240,55 C280,80 320,15 360,40 C380,55 400,30 400,30 L400,200 Z" fill="url(#premium-area-grad)"/>
                  <path d="M0,150 C40,160 80,70 120,95 C160,120 200,30 240,55 C280,80 320,15 360,40 C380,55 400,30 400,30" fill="none" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="120" cy="95" r="3.5" fill="#00B4D8" stroke="#0A192F" strokeWidth="1.5" />
                  <circle cx="240" cy="55" r="3.5" fill="#00B4D8" stroke="#0A192F" strokeWidth="1.5" />
                  <circle cx="360" cy="40" r="3.5" fill="#00B4D8" stroke="#0A192F" strokeWidth="1.5" />
                  <circle cx="400" cy="30" r="4" fill="#00B4D8" className="animate-pulse" />
                </svg>
                <div className="absolute top-[25px] right-0 flex items-center gap-3">
                  <div className="h-px w-10 bg-[#00B4D8]/40" />
                  <span className="text-[9px] font-mono text-[#00B4D8] font-bold bg-[#00B4D8]/10 px-2 py-1 rounded border border-[#00B4D8]/20">TARGET REACHED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTE 3: Optimización Humana del Formulario de Captación Premium */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xl border border-[#0A192F]/5">
          <div className="p-10 md:p-16 bg-[#0A192F] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#00B4D8]/10 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Copy Persuasivo de Cabecera */}
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8">
              <p className="font-display text-3xl font-bold tracking-tight text-white leading-tight">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
            <p className="text-white/80 text-base leading-relaxed font-light mb-8">
              Registra tu marca aquí. No te enviaremos un PDF automatizado por un bot. Nuestro equipo de directores de estrategia analizará personalmente tu ecosistema digital actual utilizando nuestras herramientas de IA predictiva, y agendaremos una sesión humana de 15 minutos para entregarte la hoja de ruta de tu crecimiento.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#00B4D8] uppercase tracking-widest font-bold">
              <CheckCircle2 className="w-5 h-5 shrink-0" /> Auditoría con Criterio Humano 100%
            </div>
          </div>

          <div className="p-10 md:p-14 bg-white relative">
            <AnimatePresence mode="wait">
              <motion.form
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
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                name="diagnostico-growthbrand"
                method="POST"
                action="https://formspree.io/f/xaqkqjvq"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Nuevo lead GrowthBrand" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-6">
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Nombre Completo</label>
                      <input 
                        name="nombre"
                        type="text"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none" 
                        placeholder="Tu nombre y apellido" 
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Correo Corporativo</label>
                      <input 
                        name="email"
                        type="email"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none" 
                        placeholder="ejemplo@empresa.com" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Sitio Web / Red Social</label>
                      <input 
                        name="website"
                        type="text" 
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none" 
                        placeholder="Link o usuario (Opcional)" 
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Número de Celular / WhatsApp</label>
                      <input 
                        name="telefono"
                        type="tel"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none" 
                        placeholder="+502 0000 0000" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Objetivo Principal</label>
                      <select 
                        name="objetivo"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option>Generar Leads</option>
                        <option>Automatizar Adquisición</option>
                        <option>Escalar Operaciones</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Desafío o Contexto</label>
                      <textarea 
                        name="contexto"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none h-[54px] resize-none" 
                        placeholder="Describe tus retos actuales..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* CTA Arreglado con Copys de Neuromarketing */}
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-bold uppercase tracking-[0.2em] text-[13px] shadow-2xl shadow-[#00B4D8]/30 transition-all hover:bg-[#0096B4] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group relative overflow-hidden font-display"
                >
                  <Send className="w-5 h-5" />
                  <span>Solicitar Diagnóstico Estratégico Humano</span>
                </button>
                
                <p className="text-center text-[#0A192F]/50 text-[11px] font-mono mt-4 leading-relaxed px-4">
                  🔒 <strong>Datos protegidos.</strong> Su información es confidencial y solo se utilizará para coordinar su sesión estratégica privada.
                </p>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F9FA] border-t border-[#0A192F]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20">
            <div className="md:col-span-5 flex flex-col gap-10">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <NewConceptualLogo className="w-10 h-10" />
                <span className="font-display font-bold text-xl tracking-tight text-[#0A192F] group-hover:text-[#00B4D8] transition-colors">GrowthBrand</span>
              </div>
              <p className="text-[#0A192F]/70 text-sm max-w-sm leading-relaxed opacity-80">
                Growth Systems for Modern Businesses. Diseñamos y operamos infraestructuras de adquisición B2B para líderes de sector en Centroamérica.
              </p>
              <div className="flex gap-8 items-center text-xs font-mono text-[#0A192F]/60">
                <a href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8] transition-colors tracking-widest font-bold">WHATSAPP</a>
                <a href="mailto:growthbrand@growthbrandgt.com" className="hover:text-[#00B4D8] transition-colors tracking-widest font-bold">EMAIL</a>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <span className="font-mono text-[#0A192F] mb-8 block text-[10px] uppercase font-bold tracking-widest">Estrategia</span>
                <ul className="space-y-4 text-sm text-[#0A192F]/70">
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Sistemas</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">RevOps</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Casos</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-[#0A192F] mb-8 block text-[10px] uppercase font-bold tracking-widest">Compañía</span>
                <ul className="space-y-4 text-sm text-[#0A192F]/70">
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Privacidad</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-[#0A192F] mb-8 block text-[10px] uppercase font-bold tracking-widest">Ubicación</span>
                <p className="text-sm text-[#0A192F]/70">Guatemala City, GT</p>
                <p className="text-sm text-[#0A192F]/70 transition-colors hover:text-[#00B4D8] mt-4 font-mono">growthbrand@growthbrandgt.com</p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-[#0A192F]/5 text-center md:text-left">
            <p className="text-xs text-[#0A192F]/50 font-mono tracking-widest uppercase">
              © 2026 GrowthBrand. Precision Growth Systems.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTONES DE ENLACE A WHATSAPP (Conversión Inmediata con ADN Humano) */}
      <motion.a
        href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:mr-4 border border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        {/* Texto Flotante de Neuromarketing */}
        <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap px-0 group-hover:px-2 font-bold text-xs uppercase tracking-widest">
          ¿Cansado de los asistentes virtuales y los menús numéricos? Presiona aquí y habla directamente con un Socio de Crecimiento de nuestro equipo. Sin filtros robóticos.
        </div>
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
