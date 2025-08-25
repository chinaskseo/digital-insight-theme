import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "SEO On-Page", href: "/servicios/seo-onpage" },
    { name: "SEO Off-Page", href: "/servicios/seo-offpage" },
    { name: "Auditoría SEO", href: "/servicios/auditoria-seo" },
    { name: "Diseño Web", href: "/servicios/diseno-web" },
    { name: "WordPress", href: "/servicios/wordpress" },
    { name: "Directorios IA", href: "/directorios" }
  ];

  const recentPosts = [
    {
      title: "Guía completa de SEO para 2024",
      date: "15 Dic 2024",
      href: "/blog/guia-seo-2024"
    },
    {
      title: "Mejores herramientas de IA para diseñadores",
      date: "12 Dic 2024", 
      href: "/blog/herramientas-ia-diseno"
    },
    {
      title: "Core Web Vitals: Optimización avanzada",
      date: "8 Dic 2024",
      href: "/blog/core-web-vitals"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <ExternalLink size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Últimos Artículos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Últimos Artículos</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.title}
                  to={post.href}
                  className="block group"
                >
                  <h4 className="font-medium text-primary-foreground group-hover:text-accent transition-colors mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-sm text-primary-foreground/60">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </Link>
              ))}
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Ver todos los artículos →
            </Link>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-accent" />
                <div className="text-primary-foreground/80">
                  <p>Madrid, España</p>
                  <p className="text-sm">Trabajamos remotamente</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <a 
                  href="tel:+34600000000" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +34 600 000 000
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <a 
                  href="mailto:hola@seoagency.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  hola@seoagency.com
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/contacto" className="btn-secondary">
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold">SEO Agency</span>
          </div>
          
          <div className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} SEO Agency. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;