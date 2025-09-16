import { ArrowLeft, CheckCircle, Search, BarChart3, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiciosSeoTecnico = () => {
  const features = [
    "Auditoría SEO completa de tu sitio web",
    "Optimización de Core Web Vitals",
    "Implementación de Schema Markup",
    "Optimización de velocidad de carga",
    "Análisis de palabras clave",
    "Optimización de meta tags y títulos",
    "Mejoras en la arquitectura del sitio",
    "Reportes mensuales detallados"
  ];

  const process = [
    {
      icon: Search,
      title: "Auditoría Inicial",
      description: "Análisis completo de tu sitio web actual identificando todas las oportunidades de mejora SEO."
    },
    {
      icon: Target,
      title: "Estrategia Personalizada",
      description: "Creamos una estrategia SEO específica basada en tu negocio y competencia."
    },
    {
      icon: Zap,
      title: "Implementación",
      description: "Aplicamos todas las optimizaciones técnicas necesarias para mejorar tu posicionamiento."
    },
    {
      icon: BarChart3,
      title: "Monitoreo",
      description: "Seguimiento continuo de resultados y ajustes para maximizar el rendimiento."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient relative py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/servicios" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Volver a Servicios
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SEO Técnico
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Optimización técnica completa de tu sitio web para maximizar tu visibilidad en Google y mejorar la experiencia del usuario.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-accent">€997</span>
              <Link to="/contacto" className="btn-hero">
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Qué incluye nuestro servicio de SEO Técnico?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro servicio de SEO técnico cubre todos los aspectos fundamentales para que tu sitio web tenga el mejor rendimiento posible en los motores de búsqueda.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Resultados Esperados</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft">
                  <span className="font-medium">Mejora en velocidad de carga</span>
                  <span className="text-2xl font-bold text-success">+40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft">
                  <span className="font-medium">Incremento en tráfico orgánico</span>
                  <span className="text-2xl font-bold text-success">+65%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft">
                  <span className="font-medium">Mejora en Core Web Vitals</span>
                  <span className="text-2xl font-bold text-success">+80%</span>
                </div>
              </div>
            </div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seguimos una metodología probada para garantizar los mejores resultados en cada proyecto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para mejorar tu SEO técnico?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicita una consulta gratuita y descubre cómo podemos optimizar tu sitio web para obtener mejores resultados en Google.
          </p>
          <Link to="/contacto" className="btn-hero text-lg px-8 py-4">
            Consulta Gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosSeoTecnico;