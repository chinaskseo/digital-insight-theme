import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectoryCard from "@/components/DirectoryCard";
import { Search, Filter, Grid, List, Star, Zap } from "lucide-react";

const Directorios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("rating");

  const categories = [
    "Todas",
    "Generación de Texto",
    "Generación de Imágenes",
    "Asistente IA",
    "Análisis de Datos",
    "Productividad",
    "Diseño",
    "Programación",
    "Marketing"
  ];

  const directories = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "El asistente de IA más popular del mundo para generación de texto, programación, análisis y tareas creativas. Desarrollado por OpenAI con tecnología GPT-4.",
      category: "Generación de Texto",
      rating: 4.8,
      reviewCount: 1250,
      isPremium: true,
      tags: ["GPT-4", "Conversación", "Escritura", "Código", "Análisis"],
      dateAdded: "Nov 2024",
      externalUrl: "https://chat.openai.com"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      description: "Generador de imágenes con IA líder en el mercado que crea arte digital impresionante y profesional a partir de descripciones de texto detalladas.",
      category: "Generación de Imágenes",
      rating: 4.7,
      reviewCount: 890,
      isPremium: true,
      tags: ["Arte", "Diseño", "Creatividad", "Discord", "V6"],
      dateAdded: "Oct 2024",
      externalUrl: "https://midjourney.com"
    },
    {
      id: "claude",
      name: "Claude AI",
      description: "Asistente de IA avanzado desarrollado por Anthropic, especializado en análisis profundo, escritura técnica y programación con alta precisión y seguridad.",
      category: "Asistente IA",
      rating: 4.6,
      reviewCount: 567,
      isPremium: false,
      tags: ["Análisis", "Seguro", "Programación", "Investigación", "Sonnet"],
      dateAdded: "Dic 2024",
      externalUrl: "https://claude.ai"
    },
    {
      id: "copilot",
      name: "GitHub Copilot",
      description: "Asistente de programación con IA que ayuda a escribir código más rápido y eficiente, integrado directamente en tu editor favorito.",
      category: "Programación",
      rating: 4.5,
      reviewCount: 423,
      isPremium: true,
      tags: ["Código", "GitHub", "VS Code", "Autocompletado", "Desarrollo"],
      dateAdded: "Sep 2024",
      externalUrl: "https://github.com/features/copilot"
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      description: "Potente herramienta de productividad que combina bases de datos, documentos y IA para organizar y generar contenido de manera eficiente.",
      category: "Productividad",
      rating: 4.4,
      reviewCount: 678,
      isPremium: true,
      tags: ["Productividad", "Documentos", "Organización", "Colaboración", "Plantillas"],
      dateAdded: "Ago 2024",
      externalUrl: "https://notion.so"
    },
    {
      id: "canva-ai",
      name: "Canva AI",
      description: "Plataforma de diseño gráfico con herramientas de IA integradas para crear presentaciones, posts, logos y contenido visual profesional.",
      category: "Diseño",
      rating: 4.3,
      reviewCount: 892,
      isPremium: false,
      tags: ["Diseño", "Plantillas", "Visual", "Presentaciones", "Marketing"],
      dateAdded: "Jul 2024",
      externalUrl: "https://canva.com"
    }
  ];

  const filteredDirectories = directories.filter(dir => {
    const matchesSearch = dir.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dir.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dir.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todas" || dir.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap size={16} className="text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">
              +50 Herramientas IA Curadas
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Directorio de Herramientas
            <span className="block text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Descubre las mejores herramientas de IA para potenciar tu productividad, creatividad y negocio. 
            Todas verificadas y evaluadas por nuestro equipo de expertos.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar herramientas IA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent"
              >
                <option value="rating">Mejor valoradas</option>
                <option value="reviews">Más reseñas</option>
                <option value="name">Nombre A-Z</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-accent text-white" : "bg-background text-muted-foreground"}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-accent text-white" : "bg-background text-muted-foreground"}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando {filteredDirectories.length} de {directories.length} herramientas
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredDirectories.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}>
              {filteredDirectories.map((directory, index) => (
                <DirectoryCard key={directory.id} {...directory} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                No se encontraron herramientas que coincidan con tu búsqueda
              </div>
              <button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("Todas");}}
                className="btn-outline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Star size={32} className="text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Conoces alguna herramienta IA increíble?
            </h2>
            <p className="text-muted-foreground mb-6">
              Ayúdanos a mantener actualizado nuestro directorio. Envíanos tus herramientas favoritas y las evaluaremos para incluirlas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="btn-hero">
                Sugerir Herramienta
              </a>
              <a href="/newsletter" className="btn-outline">
                Newsletter Semanal
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Directorios;