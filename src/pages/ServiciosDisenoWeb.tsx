import { ArrowLeft, CheckCircle, Palette, Smartphone, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiciosDisenoWeb = () => {
  const features = [
    "Diseño responsive para todos los dispositivos",
    "Optimización de velocidad y rendimiento",
    "UX/UI profesional y moderno",
    "Integración con CMS (WordPress, etc.)",
    "SEO técnico incluido",
    "Certificado SSL y seguridad",
    "Formularios de contacto funcionales",
    "Integración con redes sociales",
    "Soporte técnico por 3 meses"
  ];

  const process = [
    {
      icon: Palette,
      title: "Diseño y Prototipo",
      description: "Creamos wireframes y prototipos visuales adaptados a tu marca y objetivos de negocio."
    },
    {
      icon: Smartphone,
      title: "Desarrollo Responsive",
      description: "Desarrollamos el sitio web garantizando una experiencia perfecta en todos los dispositivos."
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Optimizamos velocidad, SEO y conversiones para maximizar el rendimiento."
    },
    {
      icon: BarChart3,
      title: "Lanzamiento y Seguimiento",
      description: "Lanzamos tu sitio web y proporcionamos seguimiento y soporte continuo."
    }
  ];

  const portfolio = [
    {
      name: "Restaurante La Mesa",
      category: "Hostelería",
      result: "+200% reservas online"
    },
    {
      name: "Clínica Dental Sonrisa",
      category: "Salud",
      result: "+150% citas programadas"
    },
    {
      name: "Bufete Legal Martínez",
      category: "Servicios",
      result: "+300% consultas"
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
            <div className="inline-block bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              MÁS POPULAR
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Diseño Web Premium
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Sitios web profesionales, rápidos y optimizados para convertir visitantes en clientes. Diseño moderno y funcionalidad avanzada.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-accent">€1,497</span>
              <span className="text-white/70 line-through">€2,000</span>
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
                Diseño web que convierte visitantes en clientes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Creamos sitios web que no solo se ven increíbles, sino que están optimizados para generar resultados reales para tu negocio.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Casos de Éxito</h3>
              <div className="space-y-6">
                {portfolio.map((project, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg shadow-soft">
                    <h4 className="font-bold text-foreground">{project.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                    <p className="text-success font-medium">{project.result}</p>
                  </div>
                ))}
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
              Nuestro Proceso de Diseño
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde el concepto hasta el lanzamiento, cada paso está diseñado para crear el sitio web perfecto para tu negocio
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

      {/* Package Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              ¿Qué incluye el paquete Premium?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Diseño y Desarrollo</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Hasta 10 páginas personalizadas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Diseño responsive premium
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Animaciones y efectos visuales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Optimización de imágenes
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Funcionalidades</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Sistema de gestión de contenidos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Formularios avanzados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Integración con Google Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-success" size={16} />
                    Chat en vivo opcional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tener el sitio web de tus sueños?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Solicita una consulta gratuita y descubre cómo podemos crear el sitio web perfecto para tu negocio.
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

export default ServiciosDisenoWeb;