import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { 
  Search, 
  Palette, 
  BarChart3, 
  Code, 
  Smartphone, 
  Globe,
  Target,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Técnico",
      description: "Optimización completa de tu sitio web para motores de búsqueda con auditorías detalladas y mejoras técnicas que aumentan tu visibilidad.",
      features: [
        "Auditoría SEO completa",
        "Optimización técnica avanzada",
        "Core Web Vitals",
        "Schema markup estructurado",
        "Análisis de velocidad",
        "Corrección de errores técnicos"
      ],
      price: "€997",
      href: "/contacto"
    },
    {
      icon: Palette,
      title: "Diseño Web Premium",
      description: "Creamos sitios web profesionales, rápidos y optimizados para conversión con diseño responsive y experiencia de usuario excepcional.",
      features: [
        "Diseño responsive profesional",
        "Optimizado para velocidad",
        "UX/UI de alta conversión",
        "Compatible con todos los dispositivos",
        "Diseño personalizado",
        "Integración con CMS"
      ],
      price: "€1,497",
      href: "/contacto",
      featured: true
    },
    {
      icon: BarChart3,
      title: "Consultoría SEO",
      description: "Estrategia personalizada de posicionamiento con seguimiento mensual, análisis de competencia y reportes detallados.",
      features: [
        "Estrategia SEO personalizada",
        "Reportes mensuales detallados",
        "Análisis de competencia",
        "Soporte continuo",
        "Keyword research avanzado",
        "Link building estratégico"
      ],
      price: "€697",
      href: "/contacto"
    },
    {
      icon: Code,
      title: "Desarrollo WordPress",
      description: "Desarrollo y optimización de sitios WordPress con temas personalizados, plugins y máximo rendimiento.",
      features: [
        "Temas WordPress personalizados",
        "Optimización de rendimiento",
        "Plugins personalizados",
        "Seguridad avanzada",
        "Mantenimiento incluido",
        "Backup automático"
      ],
      price: "€1,197",
      href: "/contacto"
    },
    {
      icon: Smartphone,
      title: "Optimización Mobile",
      description: "Aseguramos que tu sitio web funcione perfectamente en dispositivos móviles con velocidad y usabilidad óptimas.",
      features: [
        "Design responsive perfecto",
        "Velocidad móvil optimizada",
        "UX móvil profesional",
        "AMP implementation",
        "Progressive Web App",
        "Testeo en múltiples dispositivos"
      ],
      price: "€597",
      href: "/contacto"
    },
    {
      icon: Globe,
      title: "SEO Internacional",
      description: "Posicionamiento global con estrategias multiidioma, geolocalización y expansión internacional de tu negocio.",
      features: [
        "SEO multiidioma",
        "Geolocalización avanzada",
        "Hreflang implementation",
        "Análisis de mercados globales",
        "Estrategia por países",
        "Gestión de dominios ccTLD"
      ],
      price: "€1,897",
      href: "/contacto"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Resultados Garantizados",
      description: "Nos comprometemos con mejoras medibles en tu posicionamiento y tráfico orgánico."
    },
    {
      icon: TrendingUp,
      title: "ROI Comprobado",
      description: "Nuestros clientes ven un retorno de inversión promedio del 300% en los primeros 6 meses."
    },
    {
      icon: CheckCircle,
      title: "Metodología Probada",
      description: "Proceso sistemático basado en mejores prácticas y experiencia de más de 150 proyectos exitosos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Servicios de SEO y Diseño Web
            <span className="block text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Impulsa tu presencia digital con nuestros servicios especializados. 
            Desde SEO técnico hasta diseño web premium, tenemos la solución perfecta para tu negocio.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                    <benefit.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elige el Servicio Perfecto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada servicio está diseñado para ofrecer resultados específicos y medibles para tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground">
              Metodología probada que garantiza resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis Inicial",
                description: "Auditoría completa de tu sitio web actual y análisis de la competencia"
              },
              {
                step: "02", 
                title: "Estrategia",
                description: "Creación de plan personalizado basado en tus objetivos y mercado"
              },
              {
                step: "03",
                title: "Implementación",
                description: "Ejecución de mejoras técnicas y optimizaciones acordadas"
              },
              {
                step: "04",
                title: "Seguimiento",
                description: "Monitoreo continuo y reportes mensuales de progreso y resultados"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Obtén una consulta gratuita y descubre exactamente qué servicios necesita tu negocio para crecer online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-hero text-lg px-8 py-4">
              Consulta Gratuita
            </a>
            <a href="tel:+34600000000" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;