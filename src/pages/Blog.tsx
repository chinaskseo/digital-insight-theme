import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Blog post images
import coreWebVitalsImg from "@/assets/blog-core-web-vitals.jpg";
import aiMarketingToolsImg from "@/assets/blog-ai-marketing-tools.jpg";
import uxUiTrendsImg from "@/assets/blog-ux-ui-trends.jpg";
import localSeoImg from "@/assets/blog-local-seo.jpg";
import wordpressHeadlessImg from "@/assets/blog-wordpress-headless.jpg";
import aiSeoImg from "@/assets/blog-ai-seo.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const blogPosts = [
    {
      id: "1",
      title: "Cómo optimizar tu sitio web para Google Core Web Vitals en 2024",
      excerpt: "Las métricas de rendimiento web son cruciales para el SEO. Te mostramos cómo mejorar LCP, FID y CLS de manera efectiva.",
      author: "Carlos Mendoza",
      publishDate: "15 Mar 2024",
      readTime: 8,
      category: "SEO Técnico",
      imageUrl: coreWebVitalsImg,
      featured: true
    },
    {
      id: "2",
      title: "10 herramientas de IA para automatizar tu estrategia de contenidos",
      excerpt: "Descubre las mejores herramientas de inteligencia artificial para crear, optimizar y distribuir contenido de manera eficiente.",
      author: "María González",
      publishDate: "12 Mar 2024",
      readTime: 6,
      category: "IA & Marketing",
      imageUrl: aiMarketingToolsImg
    },
    {
      id: "3",
      title: "Diseño UX/UI: Tendencias 2024 que debes implementar",
      excerpt: "Las últimas tendencias en experiencia de usuario y diseño de interfaces que están marcando la pauta este año.",
      author: "Ana Rodríguez",
      publishDate: "10 Mar 2024",
      readTime: 5,
      category: "Diseño Web",
      imageUrl: uxUiTrendsImg
    },
    {
      id: "4",
      title: "SEO Local: Domina los resultados de búsqueda en tu ciudad",
      excerpt: "Estrategias comprobadas para posicionar tu negocio local en Google y atraer más clientes de tu área geográfica.",
      author: "Luis Torres",
      publishDate: "8 Mar 2024",
      readTime: 7,
      category: "SEO Local",
      imageUrl: localSeoImg
    },
    {
      id: "5",
      title: "WordPress vs. Headless CMS: ¿Cuál elegir en 2024?",
      excerpt: "Comparativa completa entre WordPress tradicional y las nuevas opciones de CMS headless para proyectos modernos.",
      author: "Jorge Silva",
      publishDate: "5 Mar 2024",
      readTime: 9,
      category: "Desarrollo Web",
      imageUrl: wordpressHeadlessImg
    },
    {
      id: "6",
      title: "Inteligencia Artificial en el SEO: Oportunidades y desafíos",
      excerpt: "Cómo la IA está transformando las estrategias de posicionamiento y qué debes saber para mantenerte competitivo.",
      author: "Patricia Ruiz",
      publishDate: "3 Mar 2024",
      readTime: 6,
      category: "IA & Marketing",
      imageUrl: aiSeoImg
    }
  ];

  const categories = ["Todas", "SEO Técnico", "IA & Marketing", "Diseño Web", "SEO Local", "Desarrollo Web"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog de <span className="text-accent">SEO y Diseño</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Insights, estrategias y tendencias del mundo digital. 
            Mantente actualizado con las últimas novedades en SEO, diseño web e inteligencia artificial.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Mostrando {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== "Todas" && ` en "${selectedCategory}"`}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No se encontraron artículos</h3>
              <p className="text-muted-foreground mb-6">
                Intenta ajustar los filtros o el término de búsqueda
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todas");
                }}
                variant="outline"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente al día con las últimas tendencias
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre SEO, diseño web e IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Tu email"
              type="email"
              className="flex-1"
            />
            <Button className="btn-gradient whitespace-nowrap">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;