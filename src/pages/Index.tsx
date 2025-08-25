import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import DirectoryCard from "@/components/DirectoryCard";
import { Search, Smartphone, BarChart3, Palette, Code, Bot, Star, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Técnico",
      description: "Optimización completa de tu sitio web para motores de búsqueda con auditorías detalladas y mejoras técnicas.",
      features: ["Auditoría SEO completa", "Optimización técnica", "Core Web Vitals", "Schema markup"],
      price: "€997",
      href: "/servicios/seo-tecnico"
    },
    {
      icon: Palette,
      title: "Diseño Web Premium",
      description: "Creamos sitios web profesionales, rápidos y optimizados para conversión con diseño responsive.",
      features: ["Diseño responsive", "Optimizado para velocidad", "UX/UI profesional", "Compatible con móviles"],
      price: "€1,497",
      href: "/servicios/diseno-web",
      featured: true
    },
    {
      icon: BarChart3,
      title: "Consultoría SEO",
      description: "Estrategia personalizada de posicionamiento con seguimiento mensual y reportes detallados.",
      features: ["Estrategia personalizada", "Reportes mensuales", "Análisis de competencia", "Soporte continuo"],
      price: "€697",
      href: "/servicios/consultoria-seo"
    }
  ];

  const blogPosts = [
    {
      id: "guia-seo-2024",
      title: "Guía completa de SEO para 2024: Estrategias que funcionan",
      excerpt: "Descubre las últimas técnicas y mejores prácticas de SEO que están dominando los resultados de búsqueda en 2024.",
      author: "María González",
      publishDate: "15 Dic 2024",
      readTime: 8,
      category: "SEO",
      featured: true
    },
    {
      id: "herramientas-ia-diseno",
      title: "Las mejores herramientas de IA para diseñadores web",
      excerpt: "Explora las herramientas de inteligencia artificial que están revolucionando el diseño web y cómo integrarlas en tu flujo de trabajo.",
      author: "Carlos Ruiz",
      publishDate: "12 Dic 2024",
      readTime: 6,
      category: "Diseño"
    },
    {
      id: "core-web-vitals",
      title: "Core Web Vitals: Optimización avanzada para PageSpeed",
      excerpt: "Aprende a optimizar los Core Web Vitals de tu sitio web para mejorar el ranking en Google y la experiencia de usuario.",
      author: "Ana López",
      publishDate: "8 Dic 2024",
      readTime: 10,
      category: "Performance"
    }
  ];

  const featuredDirectories = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "El asistente de IA más popular para generación de texto, programación y tareas creativas.",
      category: "Generación de Texto",
      rating: 4.8,
      reviewCount: 1250,
      isPremium: true,
      tags: ["GPT-4", "Conversación", "Escritura", "Código"],
      dateAdded: "Nov 2024",
      externalUrl: "https://chat.openai.com"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      description: "Generador de imágenes con IA que crea arte digital impresionante a partir de descripciones de texto.",
      category: "Generación de Imágenes",
      rating: 4.7,
      reviewCount: 890,
      isPremium: true,
      tags: ["Arte", "Diseño", "Creatividad", "Discord"],
      dateAdded: "Oct 2024",
      externalUrl: "https://midjourney.com"
    },
    {
      id: "claude",
      name: "Claude AI",
      description: "Asistente de IA avanzado de Anthropic para análisis, escritura y programación con alta precisión.",
      category: "Asistente IA",
      rating: 4.6,
      reviewCount: 567,
      isPremium: false,
      tags: ["Análisis", "Seguro", "Programación", "Investigación"],
      dateAdded: "Dic 2024",
      externalUrl: "https://claude.ai"
    }
  ];

  const successMetrics = [
    { icon: TrendingUp, value: "+300%", label: "Incremento en tráfico orgánico" },
    { icon: Users, value: "150+", label: "Clientes satisfechos" },
    { icon: Star, value: "4.9/5", label: "Valoración promedio" },
    { icon: Bot, value: "50+", label: "Herramientas IA catalogadas" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones completas de SEO y diseño web para hacer crecer tu negocio online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <metric.icon size={28} className="text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Últimos Artículos
              </h2>
              <p className="text-xl text-muted-foreground">
                Mantente actualizado con las últimas tendencias en SEO y diseño web
              </p>
            </div>
            <Link to="/blog" className="btn-outline hidden md:block">
              Ver todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Directories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Directorios de IA
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubre las mejores herramientas de inteligencia artificial para tu negocio
              </p>
            </div>
            <Link to="/directorios" className="btn-hero hidden md:block">
              Explorar todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDirectories.map((directory, index) => (
              <DirectoryCard key={directory.id} {...directory} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Obtén una consulta gratuita y descubre cómo podemos optimizar tu presencia digital
          </p>
          <Link to="/contacto" className="btn-hero text-lg px-8 py-4">
            Consulta Gratuita Ahora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
