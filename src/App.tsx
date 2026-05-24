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
  Building2,
  ArrowRight
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

  return (
    <div className="selection:bg-[#00B4D8]/30 font-['Inter',_sans-serif] bg-[#FFFFFF] text-[#0A192F] relative overflow-x-hidden antialiased">
      
      {/* Tipografías y Animaciones de Estilo Apple / Google Core */}
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

      {/* 1. NAV BAR (Estilo Minimalista de Alta Autoridad) */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'h-20 bg-[#FFFFFF]/90 backdrop-blur-2xl border-b border-[#0A192F]/5 shadow-[0_4px_30px_rgba(10,25,47,0.02)]' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex justify-between items-center">
          {/* Logotipo Tipográfico Limpio (Look Cerebro / Apple) */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-extrabold text-[#0A192F] text-2xl tracking-tight transition-colors duration-300">
              Growth<span className="text-[#00B4D8]">B</span>rand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
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
              className="hidden md:flex bg-[#0A192F] text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-[#172A45] hover:scale-105 active:scale-95 shadow-md shadow-[#0A192F]/5 text-xs font-display uppercase tracking-wider"
            >
              <span>Diagnóstico Corporativo</span>
            </a>
            <button className="md:hidden text-[#0A192F] p-2 hover:bg-[#0A192F]/5 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Rediseño Conceptual: Look Google Business Profile Core) */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FFFFFF] border-b border-[#0A192F]/5">
        <div className="absolute inset-0 z-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Bloque Izquierdo: Mensaje de Alianza y Ayuda Humana */}
            <motion.div 
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00B4D8]/10 text-[#0A192F] font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-ping" />
                Sistemas de Posicionamiento Global
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] leading-[1.15] tracking-tight">
                Inteligencia Artificial para multiplicar tus datos. <span className="text-[#00B4D8] italic">Inteligencia Humana</span> para multiplicar tus ventas.
              </h1>
              <p className="text-[#0A192F]/70 text-lg leading-relaxed font-normal max-w-xl">
                En GrowthBrand no compramos algoritmos para reemplazar personas; los dominamos para liberar la chispa creativa que hace a tu marca única. Bienvenidos a la era del crecimiento con alma.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#aplicar" 
                  className="bg-[#0A192F] text-white px-8 py-4.5 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#172A45] transition-all shadow-xl shadow-[#0A192F]/10 w-full sm:w-auto text-center uppercase"
                >
                  Iniciar Auditoría Humana
                </a>
                <a 
                  href="https://wa.me/502YOURNUMBER?text=Hola%20GrowthBrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F8F9FA] border border-[#0A192F]/10 text-[#0A192F] px-8 py-4.5 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#0A192F]/5 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 uppercase"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                  Hablar con un Socio
                </a>
              </div>
            </motion.div>

            {/* Bloque Derecho: Réplica Exacta Premium del Perfil de Google Business / Local Maps */}
            <motion.div 
              className="lg:col-span-6 flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Pulsos de Radar Inteligente de Google */}
              <div className="absolute w-72 h-72 rounded-full bg-[#00B4D8]/10 animate-radar pointer-events-none" />
              <div className="absolute w-96 h-96 rounded-full bg-[#0A192F]/5 animate-radar pointer-events-none" style={{ animationDelay: '1.5s' }} />

              {/* Contenedor del Smartphone Simulado */}
              <div className="w-full max-w-[340px] bg-white border border-[#0A192F]/10 rounded-[3rem] p-3.5 shadow-[0_25px_60px_-15px_rgba(10,25,47,0.12)] relative z-10">
                <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden border border-[#0A192F]/5">
                  {/* Foto Principal de la Ficha Local (Legal y de Alta Fidelidad) */}
                  <div className="h-44 w-full bg-cover bg-center bg-[#172A45] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&q=80&w=600" 
                      alt="Negocio Local" 
                      className="w-full h-full object-cover object-center opacity-90 brightness-95"
                    />
                    <div className="absolute top-3 left-4 bg-[#0A192F]/80 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
                      En Línea
                    </div>
                  </div>

                  {/* Cuerpo Informativo de Google Business Profile */}
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

                    {/* Fila de Botones Táctiles de Acción de Google */}
                    <div className="grid grid-cols-4 gap-2 pt-2 border-y border-[#0A192F]/5 py-3">
                      <div className="flex flex-col items-center justify-center text-center space-y-1 cursor-pointer group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-colors"><Phone className="w-4 h-4" /></div>
                        <span className="text-[9px] font-bold tracking-tight text-[#0A192F]/60 group-hover:text-[#0A192F]">LLAMAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 cursor-pointer group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-colors"><MapPin className="w-4 h-4" /></div>
                        <span className="text-[9px] font-bold tracking-tight text-[#0A192F]/60 group-hover:text-[#0A192F]">CÓMO LLEGAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 cursor-pointer group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-colors"><Bookmark className="w-4 h-4" /></div>
                        <span className="text-[9px] font-bold tracking-tight text-[#0A192F]/60 group-hover:text-[#0A192F]">GUARDAR</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center space-y-1 cursor-pointer group">
                        <div className="w-9 h-9 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-colors"><Globe className="w-4 h-4" /></div>
                        <span className="text-[9px] font-bold tracking-tight text-[#0A192F]/60 group-hover:text-[#0A192F]">SITIO WEB</span>
                      </div>
                    </div>

                    {/* Estado Operativo */}
                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <p className="text-[#0A192F]/80 font-medium">
                          <span className="text-emerald-600 font-bold mr-1.5">Abierto</span> · Horario de cierre 20:00
                        </p>
                      </div>
                      <div className="h-10 w-full bg-[#F8F9FA] rounded-xl border border-[#0A192F]/5 flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#00B4D8]/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" /></div>
                        <span className="text-[10px] text-[#0A192F]/50 font-mono">Visibilidad Certificada por IA</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN 2: El Factor Diferenciador vs. "Cerebro" (Value Proposition de Contraste) */}
      <section id="sistemas" className="py-24 bg-[#FFFFFF] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block mb-4 text-xs font-bold">
              Análisis del Ecosistema Inbound
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Más allá del algoritmo. Por qué la automatización pura está matando la identidad de las marcas.
            </h2>
            <div className="w-20 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Bloque Izquierdo: Crítica Constructiva al Mercado */}
            <motion.div 
              className="bg-[#F8F9FA] rounded-[2.5rem] p-10 lg:p-14 border border-[#0A192F]/5 flex flex-col justify-between group relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#0A192F]/5 rounded-xl flex items-center justify-center text-[#0A192F]/50">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A192F]/80">
                  Agencias basadas en IA abstracta.
                </h3>
                <p className="text-[#0A192F]/60 text-base leading-relaxed font-normal">
                  El mercado se llenó de reportes automatizados, respuestas de bots configurados y contenidos genéricos que no transmiten nada. Las marcas se vuelven invisibles porque hablan como máquinas. Métricas frías sin retorno real.
                </p>
              </div>
              <div className="pt-8 flex items-center gap-2 text-xs font-mono font-bold text-[#0A192F]/40 uppercase tracking-wider">
                <EyeOff className="w-4 h-4" /> Cero Diferenciación Competitiva
              </div>
            </motion.div>

            {/* Bloque Derecho: Nuestro Enfoque Protector de Ayuda */}
            <motion.div 
              className="bg-[#0A192F] text-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#00B4D8]/10 blur-[100px] rounded-full" />
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 bg-[#00B4D8]/20 rounded-xl flex items-center justify-center text-[#00B4D8]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#00B4D8]">
                  Ingeniería Predictiva + Empatía Estratégica.
                </h3>
                <p className="text-white/80 text-base leading-relaxed font-light">
                  Utilizamos la misma IA avanzada que las firmas de Silicon Valley para procesar millones de datos en tiempo real, predecir tendencias de mercado y reducir tus costos de adquisición. Pero el control del timón es 100% humano. Cada estrategia es afinada por creativos que entienden la cultura, el dolor y la ambición de tu cliente.
                </p>
              </div>
              <div className="pt-8 flex items-center gap-2 text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest relative z-10">
                <CheckCircle2 className="w-4 h-4" /> Alianza de Crecimiento Sostenible
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN 3: El Portafolio / Casos de Éxito (Historias de Impacto) */}
      <section id="metodologia" className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block mb-4 text-xs font-bold">
              Casos de Éxito Reales
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Historias de crecimiento real. Datos con propósito.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#0A192F]/5 rounded-[3rem] p-8 sm:p-14 shadow-xl grid grid-cols-1 gap-8 relative overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#00B4D8]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="p-6 bg-rose-50/60 border border-rose-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> El Desafío Humano
                </h4>
                <p className="text-[#0A192F] font-medium text-lg italic">
                  "Una empresa líder en su sector que se sentía estancada y desconectada de su audiencia digital."
                </p>
              </div>

              <div className="p-6 bg-blue-50/60 border border-blue-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4" /> La Solución GrowthBrand
                </h4>
                <p className="text-[#0A192F]/80 text-base leading-relaxed">
                  Implementamos modelos de machine learning para identificar nichos de mercado ocultos y rediseñamos toda su comunicación con un enfoque profundamente humano y persuasivo.
                </p>
              </div>

              <div className="p-6 bg-[#0A192F] text-white rounded-2xl space-y-2 shadow-md">
                <h4 className="text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> El Resultado de Negocio
                </h4>
                <p className="text-white/90 font-light text-base leading-relaxed">
                  No solo subieron los clics; se transformó el negocio. Retorno de inversión medible ($ROI$) y un equipo de trabajo que recuperó la pasión por conectar con su comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL FORMULARIO DE CAPTACIÓN (El Gancho de Entrada Premium Organizado) */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FFFFFF] relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-[#0A192F]/5">
          <div className="p-10 md:p-16 bg-[#0A192F] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#00B4D8]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
            <p className="text-white/80 text-base leading-relaxed font-light mb-8">
              Registra tu marca aquí. No te enviaremos un PDF automatizado por un bot. Nuestro equipo de directores de estrategia analizará personalmente tu ecosistema digital actual utilizando nuestras herramientas de IA predictiva, y agendaremos una sesión humana de 15 minutos para entregarte la hoja de ruta de tu crecimiento.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#00B4D8] uppercase tracking-widest font-bold">
              <CheckCircle2 className="w-5 h-5 shrink-0" /> Diagnóstico con Criterio de Socios
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
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" 
                        placeholder="Tu nombre y apellido" 
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Correo Corporativo</label>
                      <input 
                        name="email"
                        type="email"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" 
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
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" 
                        placeholder="Link o usuario (Opcional)" 
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[#0A192F]/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Número de Celular</label>
                      <input 
                        name="telefono"
                        type="tel"
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none text-sm" 
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
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none appearance-none cursor-pointer text-sm"
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
                        className="w-full bg-[#F8F9FA] border border-[#0A192F]/10 rounded-2xl p-4 text-[#0A192F] focus:border-[#00B4D8] transition-all outline-none h-[54px] resize-none text-sm" 
                        placeholder="Describe tus retos actuales..."
                        required
                      ></textarea>
                    </div>
                  </div>

                </div>
                
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-bold uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-[#00B4D8]/30 transition-all hover:bg-[#0096B4] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group relative overflow-hidden font-display"
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

      {/* 6. INVERSIÓN SECTIONS (Look Premium B2B) */}
      <section id="inversión" className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block mb-4 text-xs font-bold">Modelos Operativos</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">Escale con total claridad operativa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-[#FFFFFF] p-10 rounded-[2.5rem] border border-[#0A192F]/5 shadow-md flex flex-col justify-between">
              <div>
                <span className="font-mono font-bold tracking-[0.2em] text-xs text-[#0A192F]/60 uppercase block mb-4">Estructura Fija</span>
                <h3 className="font-display text-2xl font-bold text-[#0A192F] mb-4">Despliegue Core</h3>
                <p className="text-[#0A192F]/70 text-sm leading-relaxed mb-8">Ideal para empresas que requieren montar la infraestructura técnica completa de visibilidad y delegar la supervisión interna.</p>
                <ul className="space-y-4 mb-10 text-sm text-[#0A192F]/80">
                  {['Setup de Google Business Premium', 'Infraestructura de conversión local', 'Optimización técnica de adquisición', 'Soporte y transferencia por 30 días'].map((i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#0A192F]/30" /> {i}</li>
                  ))}
                </ul>
              </div>
              <a href="#aplicar" className="block w-full text-center bg-[#F8F9FA] border border-[#0A192F]/10 hover:bg-[#0A192F]/5 text-[#0A192F] font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all">Cotizar Proyecto</a>
            </div>

            <div className="bg-[#0A192F] text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00B4D8]/10 blur-3xl rounded-full" />
              <div>
                <span className="font-mono font-bold tracking-[0.2em] text-xs text-[#00B4D8] uppercase block mb-4">Alianza Continua</span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Socio de Crecimiento</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">Diseñado para escalar de forma agresiva mediante infraestructura de pauta continua y optimización humana basándose en ingresos reales.</p>
                <ul className="space-y-4 mb-10 text-sm text-white/80">
                  {['Toda la Infraestructura Core incluida', 'Optimización y auditoría mensual de datos', 'Estrategia unificada de posicionamiento', 'Dashboard centralizado de analítica', 'Sesión semanal de crecimiento estratégico'].map((i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#00B4D8]" /> {i}</li>
                  ))}
                </ul>
              </div>
              <a href="#aplicar" className="block w-full text-center bg-[#00B4D8] hover:bg-[#0096B4] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#00B4D8]/20">Postular como Partner</a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#F8F9FA] border-t border-[#0A192F]/5 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20">
            <div className="md:col-span-5 flex flex-col gap-8">
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="font-display font-bold text-xl tracking-tight text-[#0A192F]">GrowthBrand</span>
              </div>
              <p className="text-[#0A192F]/60 text-sm max-w-sm leading-relaxed">
                Precision Growth Systems. Diseñamos y operamos infraestructuras de adquisición local y B2B para líderes de sector en Centroamérica de forma legal y segura.
              </p>
              <div className="flex gap-6 items-center text-xs font-mono text-[#0A192F]/50">
                <a href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8] transition-colors tracking-widest font-bold">WHATSAPP</a>
                <a href="mailto:growthbrand@growthbrandgt.com" className="hover:text-[#00B4D8] transition-colors tracking-widest font-bold">EMAIL</a>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <span className="font-mono text-[#0A192F] mb-6 block text-[10px] uppercase font-bold tracking-widest">Estrategia</span>
                <ul className="space-y-3 text-sm text-[#0A192F]/60">
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Sistemas</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">RevOps</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Casos</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-[#0A192F] mb-6 block text-[10px] uppercase font-bold tracking-widest">Compañía</span>
                <ul className="space-y-3 text-sm text-[#0A192F]/60">
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Privacidad</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-[#0A192F] mb-6 block text-[10px] uppercase font-bold tracking-widest">Contacto</span>
                <p className="text-sm text-[#0A192F]/60 leading-relaxed">Guatemala City, GT</p>
                <p className="text-sm text-[#0A192F]/60 transition-colors hover:text-[#00B4D8] mt-2 font-mono">growthbrand@growthbrandgt.com</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[#0A192F]/5 text-center md:text-left">
            <p className="text-xs text-[#0A192F]/40 font-mono tracking-widest uppercase">
              © 2026 GrowthBrand. Ecosistemas de Crecimiento Integrales.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Conversión Inmediata con ADN Humano Sin Filtros Robóticos) */}
      <motion.a
        href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:mr-4 border border-white/10"
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
