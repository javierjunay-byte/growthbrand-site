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
  HelpCircle,
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
      
      {/* Estilos Globales de Fuentes y Animaciones */}
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

      {/* Background Glow */}
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
              className="hidden md:flex bg-[#0A192F] text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-[#172A45] hover:scale-105 active:scale-95 shadow-md text-xs font-display uppercase tracking-wider"
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
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-6 text-left">
              {['Sistemas', 'Dolores', 'Metodología', 'Inversión'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-display font-bold text-2xl text-[#0A192F] py-2 border-b border-gray-100">{item}</a>
              ))}
              <a href="#aplicar" onClick={() => setIsMenuOpen(false)} className="bg-[#0A192F] text-white text-center py-4 rounded-xl font-bold font-display mt-4 tracking-wider text-sm shadow-md">SOLICITAR DIAGNÓSTICO</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION (ALINEACIÓN IZQUIERDA PURA, SIN ESPACIOS ROTOS EN EL H1) */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-[#FFFFFF] border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div className="lg:col-span-6 space-y-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00B4D8]/10 text-[#0A192F] font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-ping" />
                Sistemas de Posicionamiento Global
              </div>
              
              {/* CORRECCIÓN: TEXT-LEFT ABSOLUTO CON ALTURA CORRECTA */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0A192F] leading-[1.25] tracking-tight text-left">
                Inteligencia Artificial para multiplicar tus datos. <br />
                <span className="text-[#00B4D8] italic">Inteligencia Humana</span> para multiplicar tus ventas.
              </h1>
              
              {/* NUEVA FRASE CONFIGURADA */}
              <p className="text-[#0A192F]/70 text-base sm:text-lg leading-relaxed text-left max-w-xl font-light">
                En GrowthBrand no dejamos que las herramientas reemplacen a las personas; las ponemos a su servicio para liberar la chispa creativa que hace a tu marca única. Bienvenidos a una nueva forma de crecer.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a href="#aplicar" className="bg-[#0A192F] text-white px-8 py-4 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#172A45] transition-all shadow-xl w-full sm:w-auto text-center uppercase">Iniciar Auditoría</a>
                <a href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="bg-[#F8F9FA] border border-[#0A192F]/10 text-[#0A192F] px-8 py-4 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#0A192F]/5 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 uppercase">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" /> Hablar con un Socio
                </a>
              </div>
            </motion.div>

            {/* Google Profile Board (Simulación Estructural en Código Puro) */}
            <motion.div className="lg:col-span-6 flex items-center justify-center relative" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="absolute w-72 h-72 rounded-full bg-[#00B4D8]/10 animate-radar pointer-events-none" />
              <div className="w-full max-w-[340px] bg-white border border-[#0A192F]/10 rounded-[3rem] p-3.5 shadow-[0_25px_60px_-15px_rgba(10,25,47,0.12)] relative z-10">
                <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden border border-[#0A192F]/5">
                  <div className="h-44 w-full bg-[#172A45] relative flex items-center justify-center text-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-[#0A192F]" />
                    <BarChart3 size={48} className="text-[#00B4D8]/40" />
                  </div>
                  <div className="p-5 bg-white space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-[#0A192F] text-lg">Arquitectura Comercial Local</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-amber-500 font-bold text-sm">4.5</span>
                        <div className="flex text-amber-400 text-xs">★★★★★</div>
                        <span className="text-[#0A192F]/40 text-xs">(83)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2 border-y border-gray-100 py-3">
                      {['LLAMAR', 'UBICACIÓN', 'GUARDAR', 'WEB'].map((btn) => (
                        <div key={btn} className="flex flex-col items-center justify-center text-center space-y-1">
                          <div className="w-8 h-8 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8]"><Globe size={14} /></div>
                          <span className="text-[8px] font-bold text-gray-400">{btn}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs"><div className="w-2 h-2 rounded-full bg-emerald-500" /><span className="text-gray-600 font-medium">Abierto · Posicionamiento Listo</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MARQUESINA DE LOGOS CONTINUA */}
      <section className="bg-[#0A192F] py-14 border-y border-white/5 relative z-20 overflow-hidden">
        <div className="relative w-full flex overflow-x-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0A192F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0A192F] after:to-transparent">
          <div className="animate-marquee-css flex items-center gap-24 whitespace-nowrap" style={{ display: 'flex', width: 'max-content', minWidth: 'max-content', willChange: 'transform' }}>
            <div className="flex items-center gap-24 shrink-0 font-display font-bold text-xl text-white/40 tracking-widest uppercase">
              <span>• Google Cloud</span> <span>• Meta Business</span> <span>• TikTok Ad-Engine</span> <span>• Vercel Network</span> <span>• GitHub Enterprise</span>
            </div>
            <div className="flex items-center gap-24 shrink-0 font-display font-bold text-xl text-white/40 tracking-widest uppercase" aria-hidden="true">
              <span>• Google Cloud</span> <span>• Meta Business</span> <span>• TikTok Ad-Engine</span> <span>• Vercel Network</span> <span>• GitHub Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE DOLORES PREMIUM DINÁMICA (PULSO HOVER CELESTE PREMIUM) */}
      <section id="dolores" className="py-24 bg-[#F8F9FA] relative z-20 border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">Fricciones comerciales que removemos de tu infraestructura</h2>
            <div className="w-20 h-1 bg-[#00B4D8] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                pain: "Tienen redes débiles para el nivel de negocio que manejan",
                solution: "El negocio vende bien offline, pero su imagen digital no transmite confianza ni profesionalismo. Elevamos el estatus de tus activos para alinearlos con tu facturación real.",
                icon: <Layers className="text-[#00B4D8]" />
              },
              {
                pain: "No saben cómo crecer ni convertir seguidores en clientes",
                solution: "Publicas contenido sin estrategia ni objetivos claros. Tienen interacción, pero carecen de un sistema estructurado para captar prospectos y cerrar contratos.",
                icon: <TrendingUp className="text-emerald-500" />
              },
              {
                pain: "Preocupación y miedo por el retorno real del marketing",
                solution: "Miedo a invertir y no ver resultados claros en ventas. Instalamos modelos analíticos RevOps de trazabilidad absoluta para auditar cada centavo en tiempo real.",
                icon: <BarChart3 className="text-indigo-500" />
              },
              {
                pain: "Delegación del ecosistema comercial a personas sin estrategia",
                solution: "Familiares o conocidos manejan tus canales sin análisis, planificación ni medición. GrowthBrand toma el timón operativo bajo estándares de ingeniería predictiva.",
                icon: <Users className="text-purple-500" />
              },
              {
                pain: "Pensar que la IA puede reemplazar toda la estrategia",
                solution: "Creen que pueden resolverlo gratis o barato. La IA necesita dirección, criterio humano refinado y estrategia corporativa para no volver a tu marca invisible.",
                icon: <Bot className="text-blue-500" />
              },
              {
                pain: "Compiten por precio bajo en lugar de valor de mercado",
                solution: "Al no comunicar bien tu autoridad de firma, terminas comparado con opciones baratas. Diseñamos diferenciadores que defienden tus márgenes de ganancia.",
                icon: <AlertTriangle className="text-rose-500" />
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

      {/* 5. SIMULACIONES MÓDULOS DE ANUNCIOS EN CÓDIGO PURO (META ADS & TIKTOK ADS INTEGRADOS) */}
      <section id="sistemas" className="py-24 bg-white relative z-20 border-b border-[#0A192F]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24">
          
          {/* Módulo de Meta Ads Avanzado (Simulando Alcance y ROAS B2B) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block text-xs font-bold">Meta Ads Infrastructure</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">Ingeniería Comercial en Campañas de Conversión</h2>
              <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">
                No subimos publicaciones para ver qué pasa. Diseñamos arquitecturas de pauta digital optimizadas para rastrear el Costo por Adquisición (CPA) por audiencias específicas, protegiendo tu presupuesto y maximizando el valor de vida de tu cliente.
              </p>
            </div>
            
            {/* Simulación Gráfica de Meta UI en Código Puro */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-[2.5rem] p-6 border border-[#0A192F]/5 shadow-inner grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                <div className="flex items-center justify-between"><span className="text-xs font-mono font-bold text-gray-400">AUDIENCIA ALTA INTENCIÓN</span><div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /></div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><div className="w-[78%] h-full bg-[#00B4D8]" /></div>
                <div className="flex justify-between text-xs font-mono"><span>CPA Optimizada</span><span className="font-bold text-[#0A192F]">-34%</span></div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                <div className="flex items-center justify-between"><span className="text-xs font-mono font-bold text-gray-400">RETORNO AD SPEND (ROAS)</span><TrendingUp className="text-emerald-500 w-4 h-4" /></div>
                <div className="text-2xl font-display font-extrabold text-[#0A192F]">4.2x ROAS</div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono font-bold">PREDICTIVO CERTIFICADO</span>
              </div>
            </div>
          </div>

          {/* Módulo de TikTok Ads Placement (Simulando Estructura In-Feed Ad) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 bg-[#0A192F] rounded-[2.5rem] p-6 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[220px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-transparent" />
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] font-bold uppercase tracking-wider"><Sparkles size={14} /> TikTok For You Placement</div>
                <p className="text-white/90 text-sm leading-relaxed text-justify font-light">
                  Configuramos tus llamadas a la acción, títulos persuasivos y creativos dinámicos de forma nativa dentro de la interfaz comercial para enganchar al consumidor corporativo en los primeros 3 segundos críticos.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-[#00B4D8] font-mono tracking-[0.3em] uppercase block text-xs font-bold">TikTok Business Engine</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">Estructura de Conversión In-Feed Absoluta</h2>
              <p className="text-[#0A192F]/70 text-sm leading-relaxed text-justify">
                Desplegamos embudos comerciales conectados directamente a tu WhatsApp o CRM de ventas, eliminando la fricción de salida del usuario tradicional y acelerando el embudo de cierre de prospectos.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HISTORIAS DE CRECIMIENTO REAL */}
      <section id="metodología" className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">Historias de crecimiento real. Datos con propósito.</h2>
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

      {/* 7. FORMULARIO DE CAPTACIÓN (CORREGIDO QUIRÚRGICAMENTE CON TUS NUEVOS TEXTOS) */}
      <section id="inversión" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FFFFFF] relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-[#0A192F]/5">
          <div className="p-10 md:p-16 bg-[#0A192F] text-white flex flex-col justify-center">
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                "Dejemos de hablar de métricas genéricas. Hablemos de tu visión."
              </p>
            </blockquote>
            
            {/* CORRECCIÓN: TEXTO EXACTO APROBADO */}
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
              
              {/* BOTÓN Y FOOTER DE DATOS PROTEGIDOS REINTEGRADO */}
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
