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
  MessageCircle,
  ShieldCheck,
  Zap,
  Target,
  BarChart,
  Search
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
    "Hola equipo de GrowthBrand. He visto su enfoque de IA con ADN humano y me interesa agendar un espacio para analizar las oportunidades de mi empresa."
  );

  return (
    <div className="selection:bg-[#00B4D8]/30 font-['Inter',_sans-serif] bg-[#FFFFFF] text-[#0A192F] relative overflow-x-hidden antialiased">
      
      {/* Estilos Globales */}
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

      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'h-20 bg-[#FFFFFF]/90 backdrop-blur-2xl border-b border-[#0A192F]/5 shadow-sm' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-extrabold text-[#0A192F] text-2xl tracking-tight">
              Growth<span className="text-[#00B4D8]">B</span>rand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Sistemas', 'Dolores', 'Inversión'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#0A192F]/70 font-mono font-bold hover:text-[#00B4D8] transition-all text-[11px] uppercase tracking-[0.2em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#aplicar"
              className="hidden md:flex bg-[#0A192F] text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-[#172A45] text-xs font-display uppercase tracking-wider"
            >
              Agendar Diagnóstico
            </a>
            <button className="md:hidden text-[#0A192F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[140] md:hidden bg-white flex flex-col pt-24 px-6"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          >
            {['Sistemas', 'Dolores', 'Inversión'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-display font-bold text-2xl py-4 border-b border-gray-100">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION (TEXTO CORREGIDO - SIN ESPACIOS RAROS) */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div className="lg:col-span-6 space-y-8" initial="initial" whileInView="animate" variants={fadeIn}>
            <div className="inline-block py-1 px-4 rounded-full bg-[#00B4D8]/10 text-[#0A192F] font-mono text-[10px] uppercase font-bold tracking-widest">
              Arquitectura de Crecimiento B2B
            </div>
            {/* CORRECCIÓN DE TÍTULO: BLOQUE SÓLIDO */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] leading-tight tracking-tight text-left">
              Inteligencia Artificial para multiplicar tus datos. <br />
              <span className="text-[#00B4D8] italic">Inteligencia Humana</span> para multiplicar tus ventas.
            </h1>
            <p className="text-[#0A192F]/70 text-lg leading-relaxed text-justify max-w-xl">
              Dominamos los algoritmos para liberar la chispa creativa que hace a tu marca única. Bienvenidos a la era del crecimiento estratégico donde el ser humano siempre tiene el control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#aplicar" className="bg-[#0A192F] text-white px-8 py-4 rounded-xl font-bold font-display text-xs tracking-widest hover:bg-[#172A45] transition-all text-center">SOLICITAR DIAGNÓSTICO</a>
              <a href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="bg-[#F8F9FA] border border-gray-200 text-[#0A192F] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 text-xs">
                <WhatsAppIcon className="text-emerald-500" /> HABLAR CON UN SOCIO
              </a>
            </div>
          </motion.div>

          {/* Google Profile Board (Interactividad) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="absolute w-64 h-64 bg-[#00B4D8]/10 rounded-full animate-radar" />
            <div className="w-full max-w-[340px] bg-white border border-gray-100 rounded-[3rem] p-4 shadow-2xl relative z-10">
              <div className="rounded-[2.5rem] overflow-hidden border border-gray-50">
                <img src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&q=80&w=600" className="h-40 w-full object-cover" alt="Visibilidad" />
                <div className="p-6 bg-white">
                  <h3 className="font-display font-bold text-lg">Arquitectura y construcción</h3>
                  <div className="flex items-center gap-1 mt-1 text-amber-500 text-sm font-bold">4.5 ★★★★★ <span className="text-gray-400 font-normal text-xs">(83)</span></div>
                  <div className="grid grid-cols-4 gap-2 mt-6 py-4 border-y border-gray-50">
                    <div className="flex flex-col items-center gap-1"><Phone size={18} className="text-[#00B4D8]" /><span className="text-[8px] font-bold">LLAMAR</span></div>
                    <div className="flex flex-col items-center gap-1"><MapPin size={18} className="text-[#00B4D8]" /><span className="text-[8px] font-bold">LLEGAR</span></div>
                    <div className="flex flex-col items-center gap-1"><Bookmark size={18} className="text-[#00B4D8]" /><span className="text-[8px] font-bold">GUARDAR</span></div>
                    <div className="flex flex-col items-center gap-1"><Globe size={18} className="text-[#00B4D8]" /><span className="text-[8px] font-bold">WEB</span></div>
                  </div>
                  <div className="mt-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /><span className="text-xs font-medium">Abierto · Horario estelar</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE DOLORES: "EL TECHO DE CRISTAL DIGITAL" */}
      <section id="dolores" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-6">Fricciones estructurales que detienen tu escalabilidad</h2>
            <p className="text-gray-500 text-lg italic">Identifica el síntoma, nosotros inyectamos la cura técnica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { pain: "Crees que el marketing es solo publicar diseños", solution: "Construimos sistemas de adquisición, no galerías de arte.", icon: <Layers /> },
              { pain: "Redes débiles para el nivel de tu negocio", solution: "Elevamos tu autoridad digital para que tu imagen iguale tu facturación.", icon: <ShieldCheck /> },
              { pain: "No entiendes si el marketing te da retorno", solution: "Instalamos trazabilidad absoluta: cada centavo es medible.", icon: <BarChart /> },
              { pain: "Delegaste tus redes a personas sin estrategia", solution: "Nuestro equipo de directores planifica cada paso con analítica real.", icon: <Users /> },
              { pain: "Miedo a invertir en algo que no conoces", solution: "Transparencia total. Te explicamos la ingeniería detrás de cada dólar.", icon: <ShieldCheck /> },
              { pain: "No sabes cómo convertir seguidores en clientes", solution: "Diseñamos embudos de conversión que transforman clicks en contratos.", icon: <Zap /> },
            ].map((item, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-[#00B4D8]/10 group-hover:text-[#00B4D8] transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-gray-400 text-sm uppercase tracking-widest">El Problema</h4>
                  <p className="font-medium text-[#0A192F] text-lg">{item.pain}</p>
                  <div className="h-px bg-gray-50 w-full" />
                  <h4 className="font-display font-bold text-[#00B4D8] text-sm uppercase tracking-widest">Nuestra Solución</h4>
                  <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DIVIDIDA: POSICIONAMIENTO GOOGLE (NUEVOS COPYS) */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
             <div className="w-full max-w-[360px] bg-white border border-gray-100 rounded-[2.5rem] p-4 shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-[#F8F9FA] border border-gray-50 p-4 space-y-4">
                <div className="h-36 w-full rounded-xl bg-cover bg-center relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-display font-bold">Arquitectura de Visibilidad</h4>
                  <p className="text-xs text-gray-500">Optimizamos tu perfil para que Google te priorice ante la competencia.</p>
                  <button className="w-full py-2.5 rounded-xl bg-[#00B4D8] text-white text-xs font-bold shadow-lg shadow-[#00B4D8]/20">Aparecer en el Mapa Ahora</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Tu negocio a la vista del mundo con estrategia real</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0 text-[#00B4D8]"><Target /></div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Prepara tus redes para vender</h3>
                  <p className="text-gray-500 text-justify">Configuramos tus canales (WhatsApp, Instagram, Facebook) con una estructura de atención y seguimiento profesional que cierra ventas, no solo responde dudas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0 text-[#00B4D8]"><BarChart /></div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Comunica valor, no precio</h3>
                  <p className="text-gray-500 text-justify">Rediseñamos tu comunicación con contenido profesional que genera confianza inmediata, permitiéndote competir por autoridad y no por ser el más barato.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0 text-[#00B4D8]"><Search /></div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Estrategia Comercial Conectada</h3>
                  <p className="text-gray-500 text-justify">Unimos los puntos: anuncios, contenido y seguimiento. Creamos un flujo lógico donde cada publicación tiene el único propósito de alimentar tu motor de ventas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO DE CAPTACIÓN REVISADO */}
      <section id="aplicar" className="px-4 sm:px-6 py-24 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto bg-[#0A192F] rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          <div className="p-10 md:p-16 text-white flex flex-col justify-center">
            <blockquote className="border-l-4 border-[#00B4D8] pl-6 mb-8 italic text-2xl font-light">"Dejemos de hablar de métricas genéricas. Hablemos de tu visión."</blockquote>
            <p className="text-white/70 text-lg leading-relaxed text-justify mb-8">
              Registra tu marca aquí. No te enviaremos un PDF automatizado. Nuestro equipo de directores analizará tu ecosistema digital actual y **agendaremos una sesión para entregarte tu diagnóstico y analizar tu caso corporativo**.
            </p>
          </div>

          <div className="p-10 md:p-14 bg-white">
            <form action="https://formspree.io/f/xaqkqjvq" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="nombre" type="text" placeholder="Nombre Completo" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#00B4D8]" required />
                  <input name="email" type="email" placeholder="Correo Corporativo" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#00B4D8]" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="telefono" type="tel" placeholder="WhatsApp (Ej: +502...)" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#00B4D8]" required />
                  <input name="website" type="text" placeholder="Sitio Web o Red Social" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#00B4D8]" />
                </div>
                <select name="objetivo" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#00B4D8]">
                  <option>Elevar Imagen de Marca</option>
                  <option>Multiplicar Ventas</option>
                  <option>Automatizar Atención</option>
                </select>
                <textarea name="contexto" placeholder="Cuéntanos el reto principal de tu empresa..." className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 h-32 text-sm outline-none focus:border-[#00B4D8]" required />
              </div>
              <div className="space-y-4">
                <button type="submit" className="w-full py-5 rounded-2xl bg-[#00B4D8] text-white font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#00B4D8]/20 hover:bg-[#0096B4] transition-all">
                  Solicitar Diagnóstico Estratégico
                </button>
                {/* TEXTO DE PROTECCIÓN RESTAURADO */}
                <p className="text-center text-gray-400 text-[10px] font-mono leading-relaxed px-4">
                  🔒 <strong>Privacidad Garantizada:</strong> Su información es confidencial y solo se utilizará para coordinar su sesión estratégica privada bajo estricto secreto profesional.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#F8F9FA] py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display font-extrabold text-[#0A192F] text-2xl mb-4 italic">GrowthBrand</div>
          <p className="text-gray-400 text-xs font-mono uppercase tracking-[0.3em]">Aceleramos los datos con tecnología, expandimos los negocios con empatía.</p>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-[#0A192F]/40 text-[10px] font-mono tracking-widest">© 2026 GROWTHBRAND GLOBAL. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <motion.a 
        href={`https://wa.me/502YOURNUMBER?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 transition-all group"
        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
      >
        <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-[10px] uppercase tracking-widest px-0 group-hover:px-2">Hablar con un Socio</div>
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
