import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowRight, 
  Lock, 
  TrendingUp 
} from 'lucide-react';

// Ecosistema con fijación estricta de proporciones para corregir Meta y TikTok
const brands = [
  { name: 'Google', src: '/google.svg' },
  { name: 'GitHub', src: '/github.svg' },
  { name: 'Meta', src: '/meta.svg' },
  { name: 'Vercel', src: '/vercel.svg' },
  { name: 'TikTok', src: '/tiktok.svg' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });

  // Duplicamos la lista para generar el bucle continuo perfecto
  const infiniteBrands = [...brands, ...brands];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de captación GrowthBrand enviado:', formData);
    alert('¡Perfecto! Nos pondremos en contacto contigo en menos de 24 horas para tu auditoría.');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-blue-600/30 selection:text-white">
      
      {/* 1. NAVEGACIÓN PRINCIPAL */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center font-black text-xl tracking-tighter">
              G
            </div>
            <span className="text-xl font-bold tracking-tight">GrowthBrand</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#infraestructura" className="hover:text-white transition-colors">Infraestructura</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
            <a href="#planes" className="hover:text-white transition-colors">Inversión</a>
            <a href="#contacto" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold">
              Agendar Diagnóstico
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#030712] border-b border-gray-800 px-4 pt-2 pb-6 flex flex-col gap-4">
            <a href="#infraestructura" onClick={() => setIsMenuOpen(false)} className="text-gray-400 py-2">Infraestructura</a>
            <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="text-gray-400 py-2">Metodología</a>
            <a href="#planes" onClick={() => setIsMenuOpen(false)} className="text-gray-400 py-2">Inversión</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-center text-white py-3 rounded-xl font-semibold">
              Agendar Diagnóstico
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <h2 className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-blue-500 uppercase mb-4">
          Sistemas Avanzados de Adquisición B2B / B2C
        </h2>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1]">
          Construimos infraestructura para un <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">crecimiento predecible</span>.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-normal">
          Deje de depender de la suerte o de agencias tradicionales. Implementamos sistemas de ingeniería comercial nativos, automatizados y optimizados para escalar su facturación.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20">
            Iniciar Auditoría Gratuita
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#infraestructura" className="w-full sm:w-auto bg-gray-900/60 border border-gray-800 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all text-center">
            Conocer el Sistema
          </a>
        </div>
      </header>

      {/* 3. MARQUESINA DE LOGOS CONTINUA (MÓDULO REPARADO CON FIJACIÓN ANTICOLAPSO) */}
      <section className="border-y border-gray-900 bg-gray-950/40 py-10 overflow-hidden select-none relative">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">
            Integrado nativamente con ecosistemas globales de infraestructura y conversión
          </p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto overflow-hidden relative">
          {/* Difuminados de degradado en los extremos */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10" />

          {/* Carrusel infinito con bloqueo estricto en línea de flex-shrink */}
          <div 
            className="flex items-center gap-16 whitespace-nowrap"
            style={{
              display: 'flex',
              width: 'max-content',
              minWidth: 'max-content',
              animation: 'marqueeContinuous 25s linear infinite'
            }}
          >
            {infiniteBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="flex items-center gap-4"
                style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
              >
                <div 
                  className="h-7 md:h-8 flex items-center justify-center"
                  style={{ flexShrink: 0, height: '32px' }}
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="filter brightness-90 opacity-80 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                    style={{ 
                      height: '100%', 
                      width: 'auto', 
                      objectFit: 'contain', 
                      display: 'block',
                      flexShrink: 0 
                    }}
                    loading="eager"
                  />
                </div>
                <span className="text-gray-400 font-medium text-base md:text-lg tracking-wide">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes marqueeContinuous {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      {/* 4. SECCIÓN: INFRAESTRUCTURA OPERATIVA */}
      <section id="infraestructura" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold tracking-wider text-blue-500 uppercase">Pilares Estructurales</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">No es marketing digital. Es Arquitectura de Ventas.</h3>
          <p className="mt-4 text-gray-400">Reemplazamos las tácticas temporales por una infraestructura robusta de generación de ingresos controlada por datos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Target className="text-blue-500" size={24} />, title: 'Sistemas Outbound', desc: 'Canales automatizados de prospección directa B2B hacia tomadores de decisión sin fricción.' },
            { icon: <Zap className="text-amber-500" size={24} />, title: 'Embudos de Conversión', desc: 'Páginas y activos optimizados matemáticamente para convertir tráfico frío en llamadas de negocio.' },
            { icon: <BarChart3 className="text-emerald-500" size={24} />, title: 'Atribución y Data', desc: 'Modelos de analítica avanzada para saber exactamente de dónde proviene cada dólar ganado.' },
            { icon: <Users className="text-purple-500" size={24} />, title: 'CRM & Automatización', desc: 'Flujos lógicos integrados para nutrir leads y acelerar el ciclo de cierre de su equipo.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl hover:border-gray-700 hover:bg-gray-900/60 transition-all group">
              <div className="w-12 h-12 bg-gray-900 border border-gray-700/60 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECCIÓN: METODOLOGÍA REVOPS */}
      <section id="metodologia" className="py-20 bg-gray-950/60 border-y border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-mono font-bold tracking-wider text-blue-500 uppercase">Eficiencia en Ejecución</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight mb-6">Un proceso predecible paso a paso.</h3>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Auditoría Técnica Inicial', desc: 'Mapeamos sus cuellos de botella actuales en datos, adquisición y conversión.' },
                { step: '02', title: 'Despliegue de Infraestructura', desc: 'Configuramos sus servidores de email, píxeles avanzados y CRM sin interrumpir su operación.' },
                { step: '03', title: 'Optimización de Retorno (ROI)', desc: 'Lanzamos campañas e iteramos basándonos exclusivamente en métricas de negocio reales.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-mono font-bold text-blue-500 text-lg bg-blue-950/40 border border-blue-900/50 px-2.5 py-1 rounded-lg">{step.step}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={20} />
              Métricas de Control Estructural
            </h4>
            <div className="space-y-4 text-sm font-mono">
              <div className="p-4 bg-gray-950/80 border border-gray-800 rounded-xl flex justify-between items-center">
                <span className="text-gray-400">Tasa de Entrega Outbound</span>
                <span className="text-emerald-400 font-bold">&gt; 99.2%</span>
              </div>
              <div className="p-4 bg-gray-950/80 border border-gray-800 rounded-xl flex justify-between items-center">
                <span className="text-gray-400">Pérdida de Data en Píxel</span>
                <span className="text-rose-400 font-bold">&lt; 2.0%</span>
              </div>
              <div className="p-4 bg-gray-950/80 border border-gray-800 rounded-xl flex justify-between items-center">
                <span className="text-gray-400">Atribución de Canales</span>
                <span className="text-blue-400 font-bold">100% Precisa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLANES DE INVERSIÓN */}
      <section id="planes" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold tracking-wider text-blue-500 uppercase">Modelos de Trabajo</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Escale con total claridad operativa</h3>
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          <div className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Despliegue Core</h4>
              <p className="text-sm text-gray-400 mb-6">Ideal para empresas que requieren montar la infraestructura técnica completa y delegar la supervisión interna.</p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {['Infraestructura de dominios Outbound', 'Embudo de conversión optimizado', 'Setup completo de CRM corporativo', 'Soporte técnico por 30 días'].map((i, k) => (
                  <li key={k} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
            <a href="#contacto" className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all">Cotizar Proyecto</a>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-blue-600 p-8 rounded-2xl flex flex-col justify-between relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white text-xs uppercase font-mono font-bold px-3 py-1 rounded-full tracking-wider">Recomendado</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Socio de Crecimiento (Growth Partner)</h4>
              <p className="text-sm text-gray-400 mb-6">Diseñado para escalar agresivamente mediante infraestructura continua y optimización basándose en ingresos.</p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {['Toda la Infraestructura Core incluida', 'Optimización y creación de embudos mensual', 'Estrategia Outbound e Inbound unificada', 'Dashboard centralizado de atribución', 'Reunión semanal de crecimiento estratégico'].map((i, k) => (
                  <li key={k} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
            <a href="#contacto" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-950/50">Postular como Partner</a>
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO DE CAPTACIÓN */}
      <section id="contacto" className="py-20 bg-gray-950/80 border-t border-gray-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Agende una Sesión de Diagnóstico Técnico</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">Analizaremos su ecosistema actual y diseñaremos un mapa de infraestructura comercial adaptado a sus objetivos. Cero presión de venta.</p>

          <form onSubmit={handleSubmit} className="bg-gray-900/60 border border-gray-800 p-6 sm:p-10 rounded-3xl text-left max-w-2xl mx-auto space-y-5 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Carlos Mendoza" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Email corporativo</label>
                <input 
                  type="email" 
                  required
                  placeholder="Ej. carlos@empresa.com" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Empresa</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Innova Tech" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Teléfono de contacto</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Ej. +34 600 000 000" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg text-base mt-2">
              Solicitar Diagnóstico Técnico
              <ArrowRight size={18} />
            </button>

            <div className="pt-4 border-t border-gray-800/80 flex items-center justify-center gap-2 text-xs text-gray-500 font-mono">
              <Lock size={12} /> Datos cifrados y protegidos. Cumplimiento estricto de privacidad.
            </div>
          </form>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white font-sans">GrowthBrand</span>
          <span>© {new Date().getFullYear()} — Todos los derechos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#infraestructura" className="hover:text-gray-300 transition-colors">Términos</a>
          <a href="#contacto" className="hover:text-gray-300 transition-colors">Privacidad</a>
        </div>
      </footer>

      {/* 9. BOTÓN DE SOPORTE INTEGRADO */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:bg-emerald-500 hover:scale-105 transition-all flex items-center justify-center group"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
      </a>

    </div>
  );
}
