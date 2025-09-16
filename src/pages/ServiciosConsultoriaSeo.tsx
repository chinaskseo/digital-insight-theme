import { ArrowLeft, CheckCircle, BarChart3, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiciosConsultoriaSeo = () => {
  const features = [
    "Estrategia SEO personalizada para tu sector",
    "Análisis exhaustivo de la competencia",
    "Investigación de palabras clave avanzada",
    "Planificación de contenido SEO",
    "Auditoría mensual completa",
    "Reportes detallados de progreso",
    "Soporte y consultas ilimitadas",
    "Reuniones mensuales de seguimiento"
  ];

  const process = [
    {
      icon: Target,
      title: "Análisis Inicial",
      description: "Evaluamos tu situación actual, objetivos y competencia para crear una estrategia efectiva."
    },
    {
      icon: BarChart3,
      title: "Estrategia Personalizada",
      description: "Desarrollamos un plan SEO específico con objetivos claros y métricas de seguimiento."
    },
    {
      icon: TrendingUp,
      title: "Implementación Guiada",
      description: "Te guiamos paso a paso en la implementación de las mejoras SEO necesarias."
    },
    {
      icon: Users,
      title: "Seguimiento Continuo",
      description: "Monitoreo constante de resultados con reportes mensuales y ajustes de estrategia."
    }
  ];

  const benefits = [
    {
      metric: "+250%",
      description: "Incremento promedio en tráfico orgánico"
    },
    {
      metric: "85%",
      description: "De palabras clave en primera página"
    },
    {
      metric: "+180%",
      description: "Aumento en leads cualificados"
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
              Consultoría SEO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Estrategia personalizada de posicionamiento web con seguimiento mensual y soporte continuo para hacer crecer tu negocio online.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-accent">€697</span>
              <span className="text-white/70">/mes</span>
              <Link to="/contacto" className="btn-hero">
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros clientes ven mejoras significativas en su posicionamiento y tráfico orgánico
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-muted/30 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-success mb-2">{benefit.metric}</div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                ¿Qué incluye nuestra consultoría SEO?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Un servicio completo de consultoría SEO que incluye estrategia, implementación y seguimiento continuo para garantizar resultados sostenibles.
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
            
            <div className="bg-card p-8 rounded-xl shadow-medium">
              <h4 className="text-xl font-bold text-foreground mb-6">Plan Mensual Incluye:</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Auditoría SEO completa</span>
                  <CheckCircle className="text-success" size={20} />
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Reporte de progreso</span>
                  <CheckCircle className="text-success" size={20} />
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Reunión de seguimiento</span>
                  <CheckCircle className="text-success" size={20} />
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Soporte por email/chat</span>
                  <CheckCircle className="text-success" size={20} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Ajustes de estrategia</span>
                  <CheckCircle className="text-success" size={20} />
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
              Metodología Probada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seguimos un proceso estructurado que ha demostrado generar resultados consistentes para nuestros clientes
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

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Inversión Mensual
            </h2>
            <div className="bg-card p-8 rounded-xl shadow-medium">
              <div className="text-5xl font-bold text-foreground mb-4">€697</div>
              <div className="text-muted-foreground mb-6">por mes, sin permanencia</div>
              
              <div className="space-y-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Estrategia SEO personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Soporte ilimitado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Reportes mensuales detallados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Reuniones de seguimiento</span>
                </div>
              </div>
              
              <Link to="/contacto" className="btn-hero w-full block text-center">
                Comenzar Ahora
              </Link>
              
              <p className="text-sm text-muted-foreground mt-4">
                Primer mes con garantía de satisfacción o te devolvemos el dinero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para dominar Google?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Solicita una consulta gratuita y descubre cómo nuestra estrategia SEO puede transformar tu negocio.
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

export default ServiciosConsultoriaSeo;