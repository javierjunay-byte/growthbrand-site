/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from 'react';
import { 
  TrendingUp, 
  Bolt, 
  X, 
  Menu,
  ShieldAlert,
  BarChart3,
  Bot,
  AlertTriangle,
  EyeOff,
  Layers,
  CheckCircle2,
  ClipboardCheck,
  MessageSquare,
  MonitorSmartphone,
  Send
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

  const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <div className={`${className} bg-primary rounded-xl flex items-center justify-center shadow-2xl shadow-primary/30 relative group overflow-hidden border border-white/5 transition-all duration-300`}>
      <div className="absolute inset-0 bg-primary-container opacity-0 group-hover:opacity-20 transition-opacity"></div>
      {/* Target Logo Asset */}
      <img 
        src="/input_file_1.png" 
        alt="" 
        className="w-6 h-6 object-contain z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
        }}
      />
      <Layers className="fallback-icon hidden text-surface w-5 h-5 z-10" />
      {/* Premium Glow effect */}
      <div className="absolute -inset-1 bg-primary/20 blur-md rounded-xl -z-10 opacity-40 group-hover:opacity-80 transition-opacity"></div>
    </div>
  );

  return (
    <div className="selection:bg-primary/30 font-sans bg-surface text-on-surface relative overflow-x-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-primary/3 blur-[80px] rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${
        scrolled 
          ? 'h-20 bg-surface/90 backdrop-blur-3xl border-b border-white/5 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.4)]' 
          : 'h-24 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className={scrolled ? "w-9 h-9" : "w-10 h-10"} />
            <span className={`font-display font-bold tracking-tight hidden sm:block text-white group-hover:text-primary transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}>GrowthBrand</span>
          </div>

          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {[
              { name: 'Sistemas', href: '#sistemas' },
              { name: 'Metodología', href: '#metodologia' },
              { name: 'Inversión', href: '#inversion' }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-on-surface-variant font-mono font-bold hover:text-primary transition-all text-[11px] uppercase tracking-[0.2em] relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#aplicar"
              className={`bg-primary text-surface px-7 py-3.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-2.5 uppercase tracking-[0.12em] border border-white/10 group overflow-hidden relative ${
                scrolled ? 'text-[11px] px-5 py-3' : 'text-xs'
              }`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ClipboardCheck className={scrolled ? "w-4 h-4" : "w-5 h-5"} />
              <span>Diagnóstico Estratégico</span>
            </a>
            <button className="md:hidden text-on-surface p-2 hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0F1A]">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#0A0F1A]">
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-[2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
          
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1] opacity-60"
          >
            <source src="/input_file_0.mp4" type="video/mp4" />
          </video>
          
          {/* Sophisticated Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/60 via-transparent to-[#0A0F1A]/80 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/70 to-transparent lg:via-[#0A0F1A]/50 z-[1]"></div>
          
          {/* Animated Atmospheric Glows */}
          <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full animate-pulse-soft"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse-soft" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] mb-8 uppercase tracking-[0.3em] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Sistemas de Control Operativo
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 font-bold tracking-tight drop-shadow-sm">
                Transformamos la atención en <span className="text-primary italic">crecimiento predecible</span>.
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed opacity-90 drop-shadow-sm">
                Diseñamos infraestructuras digitales de adquisición B2B que eliminan la incertidumbre y garantizan escalabilidad sin improvisación.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a 
                  href="https://wa.link/nb439w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-surface px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 premium-glow group w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  HABLAR POR WHATSAPP
                </a>
                <a 
                  href="#metodologia"
                  className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 transition-all hover:bg-white/20 active:scale-95 w-full sm:w-auto group"
                >
                  EXPLORAR SISTEMAS
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 relative [perspective:2000px]"
              initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-pulse-soft"></div>
              <div className="glass-card rounded-[3rem] p-3 border border-white/10 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)] relative group [transform-style:preserve-3d] transition-all duration-700 lg:hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.02)]">
                <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-container-low aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[580px]">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0A0F1A] border border-white/5 flex flex-col">
                    {/* Background Ambience */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] -mr-40 -mt-40 animate-pulse-soft"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] -ml-20 -mb-20 animate-pulse-soft" style={{ animationDelay: '-2s' }}></div>
                    
                    {/* Dashboard Header */}
                    <div className="px-8 py-7 border-b border-white/5 flex items-center justify-between relative z-10 bg-white/[0.01]">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-[0.2em]">Live Data Stream</span>
                        </div>
                        <h3 className="text-white font-semibold text-xl tracking-tight">System Performance</h3>
                      </div>
                      <div className="hidden sm:flex gap-1.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-1.5 rounded-full bg-white/5"></div>
                        ))}
                      </div>
                    </div>

                    {/* KPI High-Level Stats */}
                    <div className="grid grid-cols-2 gap-4 px-8 pt-8 relative z-10">
                      <motion.div 
                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                      >
                        <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest block mb-2">Revenue Growth</span>
                        <div className="flex items-baseline gap-2">
                          <motion.span 
                            className="text-white text-3xl font-bold tracking-tighter"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                          >$142.4K</motion.span>
                          <span className="text-emerald-400 text-[11px] font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded-md leading-none animate-pulse-soft text-nowrap">+24%</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                      >
                        <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest block mb-2">Efficiency Index</span>
                        <div className="flex items-baseline gap-2">
                          <motion.span 
                            className="text-white text-3xl font-bold tracking-tighter"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                          >98.2</motion.span>
                          <span className="text-primary text-[11px] font-bold bg-primary/10 px-1.5 py-0.5 rounded-md leading-none">Optimal</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="flex-grow px-8 pt-10 pb-16 relative z-10">
                      <div className="w-full h-full relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-20">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-px bg-white/20"></div>
                          ))}
                        </div>
                        
                        {/* SVG Data Visualization */}
                        <svg className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]" viewBox="0 0 400 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="premium-area-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Smooth Area Layer */}
                          <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M0,200 L0,150 C40,160 80,70 120,95 C160,120 200,30 240,55 C280,80 320,15 360,40 C380,55 400,30 400,30 L400,200 Z" 
                            fill="url(#premium-area-grad)"
                          />
                          
                          {/* Top Border Line */}
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M0,150 C40,160 80,70 120,95 C160,120 200,30 240,55 C280,80 320,15 360,40 C380,55 400,30 400,30" 
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Data Nodes */}
                          <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} cx="120" cy="95" r="3.5" fill="#3b82f6" stroke="#0A0F1A" strokeWidth="1.5" />
                          <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} cx="240" cy="55" r="3.5" fill="#3b82f6" stroke="#0A0F1A" strokeWidth="1.5" />
                          <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.1 }} cx="360" cy="40" r="3.5" fill="#3b82f6" stroke="#0A0F1A" strokeWidth="1.5" />
                          
                          {/* Pulse Node */}
                          <circle cx="400" cy="30" r="4" fill="#3b82f6" className="animate-pulse" />
                        </svg>

                        {/* Interactive Markers UI */}
                        <motion.div 
                          className="absolute top-[30px] right-0 flex items-center gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 }}
                        >
                          <div className="h-px w-10 bg-primary/40"></div>
                          <span className="text-[10px] font-mono text-primary font-bold bg-primary/10 px-2 py-1 rounded shadow-lg border border-primary/20">TARGET REACHED</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Bottom Status Bar */}
                    <div className="mt-auto px-8 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/20">
                      <span>Ref: 01-A9X-SYSTEM</span>
                      <div className="flex gap-4">
                        <span className="text-emerald-500/50">Node: Active</span>
                        <span>Latency: 42ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 glass-card p-5 rounded-3xl border border-white/10 shadow-2xl hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">+42% Growth</span>
                    <span className="block text-sm font-bold text-on-surface">Efficiency Score</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Obstacles Section */}
      <section id="diagnostico" className="bg-surface-container-low/30 border-y border-outline-variant/10 tech-shimmer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <motion.div 
            className="max-w-3xl mb-16 md:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary/60 font-mono tracking-[0.4em] uppercase block mb-6 text-sm">Diagnóstico de Barreras</span>
            <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8 font-bold tracking-tight">Fricciones estructurales que detienen su escalabilidad</h2>
            <div className="w-16 h-0.5 bg-primary/40"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { icon: <AlertTriangle className="text-error" />, title: 'Fugas de Capital', text: 'Inversión publicitaria sin arquitectura de conversión, resultando en un costo de adquisición insostenible.' },
              { icon: <Bolt className="text-primary" />, title: 'Caos Operativo', text: 'Procesos manuales que generan cuellos de botella y tiempos de respuesta que destruyen el cierre de ventas.' },
              { icon: <EyeOff className="text-secondary-fixed-dim" />, title: 'Cero Visibilidad', text: 'Imposibilidad de atribuir resultados a canales específicos, forzando decisiones basadas en intuición.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="group p-8 lg:p-10 bg-surface/40 rounded-3xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-8 text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-on-surface mb-6">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-80 flex-grow">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="sistemas" className="bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary font-mono tracking-[0.4em] uppercase block mb-6 text-sm">Infraestructura de Clase Mundial</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-on-surface max-w-4xl mx-auto font-bold leading-tight tracking-tight">
              Automatización Inteligente para Líderes de Sector
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-outline-variant/10 rounded-[2.5rem] overflow-hidden bg-surface-container-low/20">
            {[
              { title: 'Demand Gen', text: 'Sistemas de pauta avanzada enfocados en volumen de alta intención y ROAS positivo.' },
              { title: 'Funnels UX', text: 'Ingeniería de conversión que proyecta autoridad corporativa y maximiza el valor.' },
              { title: 'Sales Systems', text: 'Integración de APIs y flujos de automatización que garantizan el control operativo.' },
              { title: 'Data Engine', text: 'Dashboards de inteligencia comercial con métricas de salud en tiempo real.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="p-10 lg:p-12 hover:bg-surface-container-high/50 transition-all group border-b md:border-b-0 md:border-r border-outline-variant/10 last:border-r-0 last:border-b-0 min-h-64 flex flex-col justify-center cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-display font-semibold text-on-surface mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="bg-surface-container-lowest/50 tech-shimmer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              className="relative lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-[2.5rem] p-2 overflow-hidden relative z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Methodology"
                  className="w-full h-auto opacity-80 rounded-[2.2rem] group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full"></div>
            </motion.div>

            <motion.div 
              className="lg:order-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8 font-bold leading-tight tracking-tight">La tranquilidad de un sistema bajo control</h2>
              <p className="text-on-surface-variant text-lg mb-12 leading-relaxed opacity-90">
                Nuestro enfoque es matemático. Operamos bajo estándares de <strong>Revenue Operations (RevOps)</strong> para asegurar que cada acción comercial sea rastreable, medible y escalable.
              </p>
              <div className="grid grid-cols-2 gap-8 lg:gap-12 border-t border-outline-variant/10 pt-12">
                <div className="text-center">
                  <span className="block font-mono text-primary text-4xl lg:text-5xl font-bold mb-3 tracking-tighter">100%</span>
                  <span className="font-mono text-on-surface/50 font-semibold tracking-widest text-[10px] uppercase">Trazabilidad</span>
                </div>
                <div className="text-center">
                  <span className="block font-mono text-secondary-fixed-dim text-4xl lg:text-5xl font-bold mb-3 tracking-tighter">&lt;5min</span>
                  <span className="font-mono text-on-surface/50 font-semibold tracking-widest text-[10px] uppercase">Respuesta</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="inversion" className="bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-display text-4xl md:text-6xl text-on-surface mb-6 font-bold tracking-tight">Modelos de Inversión Estratégica</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg opacity-80">Sistemas modulares diseñados para evolucionar con la madurez digital.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
  {
    type: 'ESTRATEGIA BASE',
    title: 'Arquitectura inicial para negocios que buscan estructura, control y crecimiento medible.',
    icon: '◉',
    btnText: 'SOLICITAR DIAGNÓSTICO',
    waUrl: 'https://wa.link/2bwkim',
    premium: false,
    features: [
      'Gestión de Leads',
      'Pauta Google/Meta',
      'Reporting Mensual',
      'Optimización de Conversión',
      'Diagnóstico Estratégico'
    ]
  },

  {
    type: 'CRECIMIENTO ESCALABLE',
    title: 'Sistema escalable diseñado para automatizar procesos y aumentar la conversión.',
    subtitle: 'TODO LO INCLUIDO EN ESTRATEGIA BASE +',
    icon: '◎',
    btnText: 'EXPLORAR IMPLEMENTACIÓN',
    waUrl: 'https://wa.link/2bwkim',
    premium: true,
    features: [
      'WhatsApp API',
      'CRM & Automations',
      'Funnel UX',
      'Lead Scoring'
    ]
  },

  {
    type: 'GROWTH COMMAND',
    title: 'Infraestructura avanzada para empresas que buscan crecimiento predecible y automatización inteligente.',
    subtitle: 'TODO LO INCLUIDO EN CRECIMIENTO ESCALABLE +',
    icon: '⬢',
    btnText: 'HABLAR CON UN CONSULTOR',
    waUrl: 'https://wa.link/2bwkim',
    premium: false,
    features: [
      'IA Agents 24/7',
      'Centralización Inteligente de Datos',
      'Optimización Comercial Estratégica'
    ]
  }
]
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                className={`glass-card p-10 lg:p-12 rounded-[2.5rem] flex flex-col relative transition-all duration-500 lg:hover:scale-[1.02] h-full ${plan.active ? 'border-primary/40 shadow-[0_20px_50px_rgba(37,99,235,0.1)] bg-surface-container-high/40' : ''} ${plan.premium ? 'border-primary shadow-[0_30px_70px_rgba(37,99,235,0.25)] bg-surface-container-high/60 scale-[1.03] z-20' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className={`font-mono mb-10 font-bold tracking-widest uppercase text-[10px] text-center ${plan.premium ? 'text-primary' : 'text-primary/70'}`}>{plan.type}</span>
                <div className="mb-10 text-center">
                  <div className="flex items-baseline justify-center">
                    <motion.span 
                      className="text-5xl font-bold text-on-surface"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    >{plan.price}</motion.span>
                    <span className="text-on-surface-variant text-sm ml-2">/mes</span>
                  </div>
                </div>
                
                {plan.inheritance && (
                  <p className="text-[11px] text-primary/70 font-mono uppercase tracking-wider mb-8 italic text-center underline decoration-primary/20 underline-offset-4">{plan.inheritance}</p>
                )}

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm text-on-surface-variant">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.active ? 'text-primary' : 'text-primary/40'}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 w-full h-[64px] rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-xl bg-primary-container text-white ${
                    plan.premium 
                      ? 'shadow-primary-container/30 hover:scale-[1.03] hover:shadow-primary-container/40 border border-white/10' 
                      : plan.active 
                        ? 'shadow-primary-container/40 hover:scale-105 hover:shadow-primary-container/50 premium-glow' 
                        : 'shadow-primary-container/20 border border-primary-container/10 hover:scale-[1.02] hover:shadow-primary-container/30'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{plan.btnText}</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center gap-8 px-4">
            <motion.p 
              className="text-on-surface/70 text-center text-sm md:text-base leading-relaxed max-w-4xl font-medium tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Cada implementación se configura de acuerdo con la madurez comercial, objetivos de adquisición y necesidades operativas de la empresa para asegurar escalabilidad sostenible y ejecución eficiente.
            </motion.p>
            
            <motion.p 
              className="text-on-surface-variant/40 text-center text-[11px] md:text-xs italic max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              “La inversión publicitaria en Meta y Google se maneja por separado según los objetivos y volumen de adquisición requerido.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="aplicar" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-white/5">
          <div className="p-10 md:p-16 bg-primary-container/[0.03] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-outline-variant/5">
            <h2 className="font-display text-4xl text-on-surface mb-8 font-bold tracking-tight">El primer paso hacia la escalabilidad</h2>
            <p className="text-on-surface-variant mb-12 text-lg leading-relaxed opacity-90">Completa esta solicitud para que podamos analizar la madurez comercial, oportunidades de adquisición y necesidades operativas de tu empresa.</p>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <span className="text-lg font-medium">Auditoría de Conversión</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed-dim/10 flex items-center justify-center text-secondary-fixed-dim border border-secondary-fixed-dim/20">
                  <Bot className="w-7 h-7" />
                </div>
                <span className="text-lg font-medium">IA & Automatización</span>
              </div>
            </div>
          </div>
          <div className="p-10 md:p-14 bg-surface-container-high/20 backdrop-blur-md relative">
            <AnimatePresence mode="wait">
              <motion.form
onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <label className="font-mono text-on-surface-variant/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Nombre Completo</label>
                        <input 
                          name="nombre"
                          type="text"
                          className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-2xl p-4 text-on-surface focus:border-primary transition-all outline-none" 
                          placeholder="Tu nombre y apellido" 
                          required
                        />
                      </div>
                      <div>
                        <label className="font-mono text-on-surface-variant/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Correo Corporativo</label>
                        <input 
                          name="email"
                          type="email"
                          className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-2xl p-4 text-on-surface focus:border-primary transition-all outline-none" 
                          placeholder="ejemplo@empresa.com" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="font-mono text-on-surface-variant/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Objetivo Principal</label>
                        <select 
                          name="objetivo"
                          className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-2xl p-4 text-on-surface focus:border-primary transition-all outline-none appearance-none cursor-pointer"
                        >
                          <option>Generar Leads</option>
                          <option>Automatizar Adquisición</option>
                          <option>Escalar Operaciones</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-mono text-on-surface-variant/60 mb-3 block text-[10px] uppercase font-bold tracking-[0.2em]">Desafío o Contexto</label>
                        <textarea 
                          name="contexto"
                          className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-2xl p-4 text-on-surface focus:border-primary transition-all outline-none h-28 resize-none" 
                          placeholder="Describe brevemente tus retos actuales..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-primary text-surface font-bold uppercase tracking-[0.2em] text-[13px] shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <Send className="w-5 h-5" />
                    <span>SOLICITAR EVALUACIÓN ESTRATÉGICA</span>
                  </button>
                </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-12 font-bold leading-tight tracking-tight max-w-5xl mx-auto">
            Su negocio no necesita más ruido.<br className="hidden md:block" /> Necesita un sistema que convierta atención en capital.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a 
              href="https://wa.link/nb439w"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-surface px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-widest font-mono flex items-center gap-4"
            >
              <WhatsAppIcon className="w-6 h-6 text-primary" />
              HABLAR POR WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20">
            <div className="md:col-span-5 flex flex-col gap-10">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo />
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">GrowthBrand</span>
              </div>
              <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed opacity-70">
                Growth Systems for Modern Businesses. Diseñamos y operamos infraestructuras de adquisición B2B para líderes de sector en Centroamérica.
              </p>
              <div className="flex gap-8 items-center text-xs font-mono text-on-surface-variant">
                <a href="https://wa.link/nb439w" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors tracking-widest">WHATSAPP</a>
                <a href="mailto:growthbrand@growthbrandgt.com" className="hover:text-primary transition-colors tracking-widest">EMAIL</a>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <span className="font-mono text-on-surface mb-8 block text-[10px] uppercase font-bold tracking-widest">Estrategia</span>
                <ul className="space-y-4 text-sm text-on-surface-variant opacity-70">
                  <li><a href="#" className="hover:text-primary transition-colors">Sistemas</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">RevOps</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Casos</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-on-surface mb-8 block text-[10px] uppercase font-bold tracking-widest">Compañía</span>
                <ul className="space-y-4 text-sm text-on-surface-variant opacity-70">
                  <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-on-surface mb-8 block text-[10px] uppercase font-bold tracking-widest">Ubicación</span>
                <p className="text-sm text-on-surface-variant opacity-70">Guatemala City, GT</p>
                <p className="text-sm text-on-surface-variant transition-colors hover:text-primary mt-4 font-mono">growthbrand@growthbrandgt.com</p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-outline-variant/10 text-center md:text-left">
            <p className="text-xs text-on-surface-variant opacity-50 font-mono tracking-widest uppercase">
              © 2024 GrowthBrand. Precision Growth Systems.
            </p>
          </div>
        </div>
      </footer>

      {/* Success/Error States and Modals removed as per requirement */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[140] md:hidden bg-surface flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="h-24 px-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-4">
                <Logo />
                <span className="font-display font-bold text-xl tracking-tight text-white">GrowthBrand</span>
              </div>
              <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col p-8 gap-8">
              {[
                { name: 'Sistemas', href: '#sistemas' },
                { name: 'Metodología', href: '#metodologia' },
                { name: 'Inversión', href: '#inversion' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#aplicar"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-surface px-8 py-5 rounded-2xl font-bold text-center mt-10 shadow-xl shadow-primary/20"
              >
                DIAGNÓSTICO ESTRATÉGICO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Contact */}
      <motion.a
        href="https://wa.link/nb439w"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:mr-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap px-0 group-hover:px-2 font-bold text-xs uppercase tracking-widest">
          Contacto rápido por WhatsApp
        </div>
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
