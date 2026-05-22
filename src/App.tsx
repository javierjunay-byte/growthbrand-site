import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Target, 
  Cpu, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Send,
  MessageSquare,
  AlertTriangle,
  Layers,
  LineChart,
  Zap,
  Menu,
  Phone
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    employees: '1-10',
    painPoint: 'infrastructure'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <Layers className="w-5 h-5 text-surface font-bold" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-[-0.03em] text-xl text-white leading-none">
                Growth<span className="text-primary font-bold">Brand</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/40 mt-1">
                Precision Systems
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#diagnostico" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Obstáculos</a>
            <a href="#infraestructura" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Infraestructura</a>
            <a href="#retorno" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Impacto</a>
            <a 
              href="#evaluacion" 
              className="px-5 py-2.5 rounded-xl bg-surface-container-high border border-outline-variant/20 text-sm font-bold tracking-wide text-white hover:bg-surface-container-highest hover:border-primary/30 transition-all shadow-md"
            >
              Diagnóstico Estratégico
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface-container-low border border-outline-variant/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-md md:hidden pt-24 px-6">
          <div className="flex flex-col gap-6 text-center">
            <a 
              href="#diagnostico" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 py-2 border-b border-white/5"
            >
              Obstáculos
            </a>
            <a 
              href="#infraestructura" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 py-2 border-b border-white/5"
            >
              Infraestructura
            </a>
            <a 
              href="#retorno" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 py-2 border-b border-white/5"
            >
              Impacto
            </a>
            <a 
              href="#evaluacion" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 rounded-xl bg-primary text-surface font-bold uppercase tracking-wider text-sm shadow-xl shadow-primary/20"
            >
              Solicitar Evaluación
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,102,255,0.08),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                Sistemas de Control Operativo
              </span>
            </div>
            
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white leading-[1.05] mb-8">
              Diseñamos y operamos la <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">infraestructura digital</span> que acelera a los líderes del sector.
            </h1>
            
            <p className="font-sans text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              Elimine la fricción operativa. Integramos flujos de datos automatizados, CRM avanzado y tableros de control en tiempo real para que su equipo ejecute a máxima velocidad.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#evaluacion" 
                className="px-8 py-4 rounded-xl bg-primary text-surface font-bold uppercase tracking-[0.15em] text-xs shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 group"
              >
                <span>Agendar Auditoría de Sistemas</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#infraestructura" 
                className="px-8 py-4 rounded-xl bg-surface-container-low border border-outline-variant/10 text-white font-bold uppercase tracking-[0.15em] text-xs hover:bg-surface-container-high transition-colors flex items-center justify-center"
              >
                Explorar Soluciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Partners / Integrations Section */}
      <section className="bg-[#0A0F1A] py-12 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <p className="text-center text-white/30 text-[10px] font-mono uppercase tracking-[0.3em] mb-8 font-bold">
            Infraestructura integrada con tecnologías líderes globales
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale contrast-200">
            {/* Logo Google */}
            <svg className="h-7 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.23 1 .01 6.22.01 13s5.22 12 12.23 12c7.31 0 12.17-5.12 12.17-12.39 0-.83-.09-1.47-.2-1.926H12.24z"/></svg>
            {/* Logo HubSpot */}
            <svg className="h-7 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.023 12.242a4.437 4.437 0 00-2.454-3.136c.162-.423.25-.88.25-1.356a4.453 4.453 0 10-5.748 4.237c-.66.862-1.7 1.423-2.87 1.423-1.04 0-1.97-.432-2.63-1.127l2.846-1.642a2.316 2.316 0 10-1.157-2.01c0 .416.113.805.305 1.144L7.72 11.417a4.452 4.452 0 10-.613 6.643c1.066.867 2.43 1.39 3.92 1.39 2.58 0 4.767-1.576 5.684-3.834a4.444 4.444 0 002.86-.532 4.428 4.428 0 002.452-2.842zm-15.65.65a2.227 2.227 0 112.226-2.226 2.23 2.23 0 01-2.226 2.227z"/></svg>
            {/* Logo Meta */}
            <svg className="h-6 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.977 11.23a5.556 5.556 0 00-4.81-5.187c-.167-.023-.333-.035-.5-.035a6.046 6.046 0 00-4.225 1.7A6.471 6.471 0 0012 9.475a6.471 6.471 0 00-2.443-1.767 6.046 6.046 0 00-4.225-1.7 5.485 5.485 0 00-.5.035A5.556 5.556 0 00.023 11.23a6.221 6.221 0 001.328 4.394 6.786 6.786 0 003.542 2.223 5.483 5.483 0 002.593-.16 6.55 6.55 0 003.2-2.235A6.55 6.55 0 0013.916 17.7a5.483 5.483 0 002.593.16 6.786 6.786 0 003.542-2.223 6.221 6.221 0 001.326-4.407zM5.38 15.11a3.42 3.42 0 01-1.574-.131 4.14 4.14 0 01-2.093-1.312 3.86 3.86 0 01-.84-2.656 3.492 3.492 0 012.352-3.131c.106-.035.215-.054.326-.06a3.522 3.522 0 012.635 1.05A4.558 4.558 0 017.9 11.144a4.4 4.4 0 01-2.52 3.966zm13.24 0a4.4 4.4 0 01-2.52-3.966 4.558 4.558 0 011.314-2.274 3.522 3.522 0 012.635-1.05c.11.006.22.025.326.06a3.492 3.492 0 012.352 3.131 3.86 3.86 0 01-.84 2.656 4.14 4.14 0 01-2.093 1.312 3.42 3.42 0 01-1.574.131z"/></svg>
            {/* Logo Zapier Text Minimal */}
            <span className="text-white text-xl font-black tracking-tight">ZAPIER</span>
            {/* Logo Make Text Minimal */}
            <span className="text-white text-xl font-bold tracking-widest italic">MAKE.</span>
          </div>
        </div>
      </section>

      {/* Obstacles Section */}
      <section id="diagnostico" className="bg-surface-container-low/30 border-y border-outline-variant/10 tech-shimmer">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold block mb-3">
              Los Síntomas del Estancamiento
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-[-0.02em] text-white mb-6">
              ¿Su operación crece, pero su control disminuye?
            </h2>
            <p className="text-white/60">
              Las empresas escalan hasta que la falta de sistemas rompe la experiencia del cliente o agota al equipo. Si experimenta estos bloqueos, su infraestructura actual llegó a su límite:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                title: "Silas de Información",
                desc: "Datos atrapados en hojas de cálculo individuales o software que no se comunican entre sí. Nadie tiene la foto completa."
              },
              {
                icon: <Cpu className="w-5 h-5 text-red-500" />,
                title: "Fugas Operativas",
                desc: "Prospectos que no se atienden a tiempo, cotizaciones lentas y seguimiento manual que depende de la memoria humana."
              },
              {
                icon: <LineChart className="w-5 h-5 text-emerald-500" />,
                title: "Decisiones a Ciegas",
                desc: "Falta de tableros con métricas en tiempo real. Dirigir la empresa mirando el retrovisor financiero del mes pasado."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-outline-variant/30 transition-all flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Infrastructure Section */}
      <section id="infraestructura" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold block mb-3">
              Arquitectura de Sistemas Avanzada
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl tracking-[-0.02em] text-white mb-6">
              Infraestructura que escala sin esfuerzo
            </h2>
            <p className="text-white/60">
              No vendemos software empaquetado. Diseñamos e implementamos a medida el ecosistema digital que su negocio requiere para dominar el mercado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Automatización de Extremo a Extremo",
                  desc: "Conectamos sus herramientas comerciales, operativas y financieras. Los datos fluyen de forma segura, eliminando el error humano y liberando horas de trabajo manual."
                },
                {
                  num: "02",
                  title: "Sistemas CRM e Inteligencia Comercial",
                  desc: "Centralice cada interacción con el cliente. Diseñamos embudos visuales que permiten a las gerencias auditar el pipeline de ventas al instante."
                },
                {
                  num: "03",
                  title: "Data Analytics y Business Intelligence",
                  desc: "Consolidamos sus KPIs críticos en tableros de control ejecutivos y limpios. Tome decisiones estratégicas basadas en certezas, no en intuición."
                }
              ].map((solution, index) => (
                <div key={index} className="p-6 rounded-2xl bg-surface-container-low/50 border border-outline-variant/10 flex gap-6 items-start hover:bg-surface-container-low transition-colors">
                  <span className="font-mono font-bold text-primary/40 text-lg leading-none mt-1">{solution.num}</span>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white mb-2">{solution.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                System Health: Optimal
              </div>
              <h3 className="font-sans font-black text-xl text-white mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Estándar Corporativo
              </h3>
              
              <div className="space-y-4">
                {[
                  "Arquitectura modular compatible con futuras tecnologías.",
                  "Seguridad de datos robusta con cifrado de grado bancario.",
                  "Interfaces limpias diseñadas para máxima adopción del equipo.",
                  "Soporte e iteración continua post-implementación."
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-high/40 border border-outline-variant/5">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI / Impact Section */}
      <section id="retorno" className="bg-surface-container-low/30 border-t border-outline-variant/10 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold block mb-3">
                Resultados Medibles
              </span>
              <h2 className="font-sans font-black text-3xl tracking-[-0.02em] text-white mb-6">
                El impacto real de la precisión
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                La transformación digital no es un gasto, es la inversión con mayor retorno en la empresa moderna. Optimizamos sus procesos para impactar directamente la última línea de su estado de resultados.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { metric: "-75%", label: "Tiempo en Tareas Manuales", desc: "Liberamos a su talento clave de la carga administrativa repetitiva." },
                { metric: "100%", label: "Visibilidad Operativa", desc: "Control total y auditoría de procesos comerciales en tiempo real." },
                { metric: "+40%", label: "Velocidad de Respuesta", desc: "Atención comercial inmediata para maximizar la tasa de cierre." },
                { metric: "0", label: "Pérdida de Prospectos", desc: "Cero leads olvidados gracias a sistemas de seguimiento implacables." }
              ].map((stat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 flex flex-col justify-between">
                  <span className="font-sans font-black text-4xl text-white tracking-tight block mb-2">{stat.metric}</span>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-primary mb-1">{stat.label}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section id="evaluacion" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,102,255,0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:py-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold block mb-3">
                Cupos Limitados Mensuales
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-[-0.03em] text-white mb-6 leading-tight">
                Solicite una Evaluación Estratégica sin costo
              </h2>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                Analizaremos la situación actual de sus sistemas y diseñaremos un mapa de ruta preliminar para eliminar sus principales cuellos de botella operativos.
              </p>

              <div className="space-y-4 hidden lg:block">
                <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Sesión estratégica de 45 minutos vía Zoom.
                </div>
                <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Entregable con arquitectura sugerida.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10 shadow-2xl relative">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-sans font-black text-2xl text-white mb-3">Solicitud Recibida</h3>
                    <p className="text-white/60 text-sm max-w-sm mx-auto mb-8">
                      Un ingeniero de sistemas de GrowthBrand se pondrá en contacto en las próximas 24 horas para coordinar su sesión.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">Nombre Completo</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="Ej: Carlos Mendoza"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">Correo Corporativo</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="carlos@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">Empresa</label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="Ej: Logística Central"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">WhatsApp Directo</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="+502 5555 5555"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">Tamaño del Equipo</label>
                        <select 
                          value={formData.employees}
                          onChange={(e) => setFormData({...formData, employees: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                        >
                          <option value="1-10" className="bg-surface-container-high">1 a 10 colaboradores</option>
                          <option value="11-50" className="bg-surface-container-high">11 a 50 colaboradores</option>
                          <option value="51-200" className="bg-surface-container-high">51 a 200 colaboradores</option>
                          <option value="201+" className="bg-surface-container-high">Más de 200 colaboradores</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-bold">Mayor Desafío Actual</label>
                        <select 
                          value={formData.painPoint}
                          onChange={(e) => setFormData({...formData, painPoint: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-high border border-outline-variant/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                        >
                          <option value="infrastructure" className="bg-surface-container-high">Herramientas desconectadas</option>
                          <option value="tracking" className="bg-surface-container-high">Pérdida de leads comerciales</option>
                          <option value="metrics" className="bg-surface-container-high">Falta de reportes confiables</option>
                          <option value="scalability" className="bg-surface-container-high">Procesos manuales muy lentos</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 rounded-2xl bg-primary text-surface font-bold uppercase tracking-[0.2em] text-[13px] shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <Send className="w-5 h-5" />
                      <span>SOLICITAR EVALUACIÓN ESTRATÉGICA</span>
                    </button>
                    
                    <p className="text-center text-white/40 text-[11px] font-mono mt-4 leading-relaxed">
                      🔒 Datos protegidos. Reciba un diagnóstico inicial de su ecosistema digital en menos de 48 horas laborales.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/10 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <span className="font-sans font-black text-sm tracking-tight text-white">
              Growth<span className="text-primary font-bold">Brand</span>
            </span>
          </div>
          <p className="text-[11px] font-mono text-white/30 text-center sm:text-right">
            © 2026 GrowthBrand. Precision Growth Systems. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Fixed Floating Button */}
      <a 
        href="https://wa.me/50255106961" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-primary hover:bg-primary/90 text-surface text-xs font-bold tracking-[0.15em] uppercase shadow-2xl shadow-primary/30 flex items-center gap-2.5 group transition-all hover:translate-y-[-4px] active:translate-y-0"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Hablemos por WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
