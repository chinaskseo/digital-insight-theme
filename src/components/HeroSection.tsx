import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, value: "300%", label: "Aumento promedio en tráfico" },
    { icon: Target, value: "95%", label: "Clientes satisfechos" },
    { icon: Zap, value: "24h", label: "Tiempo de respuesta" }
  ];

  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-bounce-gentle">
            <Zap size={16} className="text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">
              Expertos en SEO y Diseño Web
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Impulsa tu{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              presencia digital
            </span>{" "}
            con SEO profesional
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Diseñamos sitios web optimizados y creamos estrategias SEO que convierten visitantes en clientes. 
            Descubre también los mejores directorios de IA para potenciar tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Link to="/contacto" className="btn-hero text-lg px-8 py-4">
              Consulta Gratuita
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/servicios" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <stat.icon size={24} className="text-orange-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-background" style={{
        clipPath: 'polygon(0 80%, 100% 100%, 100% 100%, 0% 100%)'
      }}></div>
    </section>
  );
};

export default HeroSection;