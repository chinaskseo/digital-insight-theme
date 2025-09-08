import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ExternalLink, Calendar, Users, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Directory images
import chatgptImg from "@/assets/chatgpt-directory.jpg";
import midjourneyImg from "@/assets/midjourney-directory.jpg";
import claudeImg from "@/assets/claude-directory.jpg";
import copilotImg from "@/assets/copilot-directory.jpg";
import notionImg from "@/assets/notion-directory.jpg";
import canvaImg from "@/assets/canva-directory.jpg";

const DirectoryDetail = () => {
  const { id } = useParams();

  const directoryData = {
    "chatgpt": {
      id: "chatgpt",
      name: "ChatGPT",
      shortDescription: "El asistente de IA más popular del mundo para generación de texto, programación, análisis y tareas creativas.",
      fullDescription: "ChatGPT, desarrollado por OpenAI, representa la vanguardia de los asistentes de inteligencia artificial conversacional. Basado en la arquitectura GPT-4, esta herramienta revolucionaria ha transformado la forma en que interactuamos con la IA, ofreciendo capacidades extraordinarias en generación de texto, análisis, programación y creatividad.",
      category: "Generación de Texto",
      rating: 4.8,
      reviewCount: 1250,
      isPremium: true,
      pricing: "Gratuito con limitaciones / $20/mes Pro",
      tags: ["GPT-4", "Conversación", "Escritura", "Código", "Análisis"],
      dateAdded: "Nov 2024",
      externalUrl: "https://chat.openai.com",
      imageUrl: chatgptImg,
      features: [
        "Generación de texto avanzada con GPT-4",
        "Análisis y resumen de documentos",
        "Programación en múltiples lenguajes",
        "Resolución de problemas matemáticos",
        "Traducción instantánea",
        "Brainstorming creativo",
        "Análisis de datos y visualizaciones",
        "Integración con plugins"
      ],
      pros: [
        "Interface intuitiva y fácil de usar",
        "Respuestas coherentes y contextuales",
        "Amplio conocimiento general",
        "Capacidades multiidioma",
        "Actualizaciones regulares",
        "Gran comunidad de usuarios"
      ],
      cons: [
        "Limitaciones en información post-2021 (versión gratuita)",
        "Puede generar información incorrecta ocasionalmente",
        "Restricciones de uso en la versión gratuita",
        "Dependencia de conexión a internet"
      ],
      useCases: [
        "Redacción de artículos y blogs",
        "Desarrollo de código y debugging",
        "Análisis de datos empresariales",
        "Creación de contenido educativo",
        "Asistencia en investigación académica",
        "Automatización de tareas repetitivas"
      ],
      alternatives: ["Claude AI", "Google Bard", "Bing Chat", "Perplexity AI"],
      lastUpdated: "Diciembre 2024"
    },
    "midjourney": {
      id: "midjourney",
      name: "Midjourney",
      shortDescription: "Generador de imágenes con IA líder en el mercado que crea arte digital impresionante y profesional.",
      fullDescription: "Midjourney es una plataforma revolucionaria de generación de imágenes con inteligencia artificial que ha redefinido el panorama del arte digital. Utiliza algoritmos avanzados de diffusion models para transformar descripciones textuales en obras de arte visuales extraordinarias, desde ilustraciones fotorealistas hasta creaciones artísticas surrealistas.",
      category: "Generación de Imágenes",
      rating: 4.7,
      reviewCount: 890,
      isPremium: true,
      pricing: "$10-$60/mes según plan",
      tags: ["Arte", "Diseño", "Creatividad", "Discord", "V6"],
      dateAdded: "Oct 2024",
      externalUrl: "https://midjourney.com",
      imageUrl: midjourneyImg,
      features: [
        "Generación de imágenes de alta calidad",
        "Múltiples estilos artísticos",
        "Control de aspectos y resoluciones",
        "Variaciones y refinamiento de imágenes",
        "Blend de imágenes existentes",
        "Upscaling inteligente",
        "Integración con Discord",
        "Versiones V6 con mayor realismo"
      ],
      pros: [
        "Calidad excepcional de imágenes",
        "Amplia variedad de estilos artísticos",
        "Comunidad activa y colaborativa",
        "Actualizaciones frecuentes del modelo",
        "Interface única a través de Discord",
        "Resultados consistentemente impresionantes"
      ],
      cons: [
        "Requiere suscripción de pago",
        "Dependencia de Discord puede ser confusa",
        "Tiempos de espera en horas pico",
        "Curva de aprendizaje para prompts efectivos"
      ],
      useCases: [
        "Concept art para videojuegos y películas",
        "Ilustraciones para libros y revistas",
        "Arte digital para NFTs",
        "Diseño de personajes y criaturas",
        "Paisajes y entornos fantásticos",
        "Arte comercial y publicitario"
      ],
      alternatives: ["DALL-E 2", "Stable Diffusion", "Adobe Firefly", "Leonardo AI"],
      lastUpdated: "Diciembre 2024"
    },
    "claude": {
      id: "claude",
      name: "Claude AI",
      shortDescription: "Asistente de IA avanzado desarrollado por Anthropic, especializado en análisis profundo y seguridad.",
      fullDescription: "Claude AI, creado por Anthropic, representa una nueva generación de asistentes de inteligencia artificial diseñados con un enfoque particular en la seguridad, la utilidad y la honestidad. Basado en técnicas de Constitutional AI, Claude destaca por su capacidad de análisis profundo, razonamiento ético y manejo seguro de información sensible.",
      category: "Asistente IA",
      rating: 4.6,
      reviewCount: 567,
      isPremium: false,
      pricing: "Gratuito con limitaciones / $20/mes Pro",
      tags: ["Análisis", "Seguro", "Programación", "Investigación", "Sonnet"],
      dateAdded: "Dic 2024",
      externalUrl: "https://claude.ai",
      imageUrl: claudeImg,
      features: [
        "Análisis profundo de documentos largos",
        "Programación segura y eficiente",
        "Razonamiento ético avanzado",
        "Procesamiento de archivos múltiples",
        "Conversaciones contextuales extensas",
        "Capacidades de investigación",
        "Escritura técnica especializada",
        "Constitutional AI para mayor seguridad"
      ],
      pros: [
        "Enfoque fuerte en seguridad y ética",
        "Excelente para análisis de documentos largos",
        "Respuestas honestas y bien fundamentadas",
        "Capacidad de admitir incertidumbre",
        "Interface limpia y profesional",
        "Manejo responsable de información sensible"
      ],
      cons: [
        "Menor disponibilidad que ChatGPT",
        "Puede ser demasiado cauteloso ocasionalmente",
        "Base de usuarios más pequeña",
        "Menos integrations de terceros"
      ],
      useCases: [
        "Análisis de documentos legales y técnicos",
        "Investigación académica y científica",
        "Desarrollo de código seguro",
        "Consultoría ética en IA",
        "Redacción técnica especializada",
        "Análisis de riesgos empresariales"
      ],
      alternatives: ["ChatGPT", "Google Bard", "Perplexity AI", "Microsoft Copilot"],
      lastUpdated: "Diciembre 2024"
    },
    "copilot": {
      id: "copilot",
      name: "GitHub Copilot",
      shortDescription: "Asistente de programación con IA integrado en editores de código para acelerar el desarrollo.",
      fullDescription: "GitHub Copilot, desarrollado por GitHub en colaboración con OpenAI, es un asistente de programación revolucionario que utiliza inteligencia artificial para ayudar a los desarrolladores a escribir código más rápido y eficiente. Entrenado en billones de líneas de código público, Copilot comprende el contexto y sugiere líneas de código completas o funciones enteras.",
      category: "Programación",
      rating: 4.5,
      reviewCount: 423,
      isPremium: true,
      pricing: "$10/mes individual / $19/mes business",
      tags: ["Código", "GitHub", "VS Code", "Autocompletado", "Desarrollo"],
      dateAdded: "Sep 2024",
      externalUrl: "https://github.com/features/copilot",
      imageUrl: copilotImg,
      features: [
        "Autocompletado inteligente de código",
        "Generación de funciones completas",
        "Soporte para múltiples lenguajes",
        "Integración nativa con editores populares",
        "Sugerencias contextuales",
        "Explicación de código complejo",
        "Generación de tests unitarios",
        "Refactoring asistido por IA"
      ],
      pros: [
        "Integración perfecta con VS Code",
        "Acelera significativamente el desarrollo",
        "Aprende del contexto del proyecto",
        "Soporte para múltiples lenguajes",
        "Sugerencias de alta calidad",
        "Constantes mejoras y actualizaciones"
      ],
      cons: [
        "Requiere suscripción mensual",
        "Puede generar código subóptimo ocasionalmente",
        "Dependencia excesiva puede reducir habilidades",
        "Limitado a editores compatibles"
      ],
      useCases: [
        "Desarrollo de aplicaciones web",
        "Automatización de tareas repetitivas",
        "Prototipado rápido de funcionalidades",
        "Aprendizaje de nuevos lenguajes",
        "Generación de documentación de código",
        "Refactoring de código legacy"
      ],
      alternatives: ["Amazon CodeWhisperer", "Tabnine", "Kite", "IntelliCode"],
      lastUpdated: "Diciembre 2024"
    },
    "notion-ai": {
      id: "notion-ai",
      name: "Notion AI",
      shortDescription: "Herramienta de productividad que combina bases de datos, documentos y IA para organizar contenido.",
      fullDescription: "Notion AI transforma la plataforma de productividad más versátil del mercado en un espacio de trabajo inteligente. Combinando la flexibilidad de Notion para crear bases de datos, wikis y documentos con capacidades avanzadas de inteligencia artificial, esta herramienta redefine cómo organizamos, creamos y gestionamos información en entornos colaborativos.",
      category: "Productividad",
      rating: 4.4,
      reviewCount: 678,
      isPremium: true,
      pricing: "$8-16/mes por usuario según plan",
      tags: ["Productividad", "Documentos", "Organización", "Colaboración", "Plantillas"],
      dateAdded: "Ago 2024",
      externalUrl: "https://notion.so",
      imageUrl: notionImg,
      features: [
        "Generación automática de contenido",
        "Resumen inteligente de documentos",
        "Traducción instantánea",
        "Mejora de escritura y gramática",
        "Bases de datos inteligentes",
        "Plantillas personalizables",
        "Colaboración en tiempo real",
        "Integración con múltiples herramientas"
      ],
      pros: [
        "Interface intuitiva y flexible",
        "Integración perfecta con funciones existentes",
        "Excelente para equipos colaborativos",
        "Múltiples tipos de contenido en una plataforma",
        "Plantillas pre-diseñadas útiles",
        "Buena relación calidad-precio"
      ],
      cons: [
        "Curva de aprendizaje inicial pronunciada",
        "Puede volverse lento con mucho contenido",
        "Funciones de IA requieren suscripción adicional",
        "Dependencia de conexión a internet"
      ],
      useCases: [
        "Gestión de proyectos empresariales",
        "Bases de conocimiento corporativas",
        "Planificación de contenido marketing",
        "Organización personal avanzada",
        "Documentación técnica colaborativa",
        "CRM básico para pequeñas empresas"
      ],
      alternatives: ["Obsidian", "Roam Research", "Coda", "Airtable"],
      lastUpdated: "Diciembre 2024"
    },
    "canva-ai": {
      id: "canva-ai",
      name: "Canva AI",
      shortDescription: "Plataforma de diseño gráfico con herramientas de IA para crear contenido visual profesional.",
      fullDescription: "Canva AI democratiza el diseño profesional integrando poderosas herramientas de inteligencia artificial en la plataforma de diseño más accesible del mundo. Con capacidades que van desde la generación automática de imágenes hasta la creación de presentaciones completas, Canva AI permite a usuarios de todos los niveles crear contenido visual impresionante sin conocimientos técnicos previos.",
      category: "Diseño",
      rating: 4.3,
      reviewCount: 892,
      isPremium: false,
      pricing: "Gratuito / $15/mes Pro / $30/mes Teams",
      tags: ["Diseño", "Plantillas", "Visual", "Presentaciones", "Marketing"],
      dateAdded: "Jul 2024",
      externalUrl: "https://canva.com",
      imageUrl: canvaImg,
      features: [
        "Generador de imágenes con IA",
        "Magic Write para textos",
        "Presentador automático",
        "Eliminación de fondos inteligente",
        "Redimensionado mágico",
        "Miles de plantillas profesionales",
        "Colaboración en equipo",
        "Brand Kit personalizable"
      ],
      pros: [
        "Interface extremadamente intuitiva",
        "Amplia biblioteca de plantillas",
        "Herramientas de IA integradas naturalmente",
        "Versión gratuita muy completa",
        "Actualizaciones frecuentes",
        "Excelente para no diseñadores"
      ],
      cons: [
        "Limitaciones en personalización avanzada",
        "Dependencia de plantillas prediseñadas",
        "Algunas funciones requieren suscripción",
        "Menos control granular que herramientas profesionales"
      ],
      useCases: [
        "Contenido para redes sociales",
        "Presentaciones corporativas",
        "Material marketing impreso",
        "Infografías educativas",
        "Logos y branding básico",
        "Contenido web y blogs"
      ],
      alternatives: ["Adobe Creative Suite", "Figma", "Sketch", "GIMP"],
      lastUpdated: "Diciembre 2024"
    }
  };

  const tool = directoryData[id as keyof typeof directoryData];

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Herramienta no encontrada</h1>
          <p className="text-muted-foreground mb-8">
            La herramienta que buscas no existe o ha sido movida.
          </p>
          <Link to="/directorios">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al directorio
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/directorios" className="hover:text-accent transition-colors">Directorios</Link>
          <span>/</span>
          <span className="text-foreground">{tool.name}</span>
        </nav>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {tool.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{tool.rating}</span>
                    <span className="text-muted-foreground">({tool.reviewCount} reseñas)</span>
                  </div>
                  {tool.isPremium && (
                    <Badge variant="outline">Premium</Badge>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">{tool.shortDescription}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="btn-gradient">
                <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visitar Sitio Web
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/directorios">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Directorio
                </Link>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <div>
                <div className="text-sm text-muted-foreground">Precio</div>
                <div className="font-semibold">{tool.pricing}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Actualizado</div>
                <div className="font-semibold">{tool.lastUpdated}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={tool.imageUrl} 
              alt={tool.name}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Descripción Completa</h2>
              <p className="text-muted-foreground leading-relaxed">{tool.fullDescription}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pros and Cons */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Ventajas y Desventajas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">✓ Ventajas</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-600">✗ Desventajas</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Casos de Uso Principales</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="p-3 bg-card rounded border">
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-4">Información Rápida</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoría:</span>
                  <span className="font-medium">{tool.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="font-medium">{tool.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reseñas:</span>
                  <span className="font-medium">{tool.reviewCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo:</span>
                  <span className="font-medium">{tool.isPremium ? "Premium" : "Freemium"}</span>
                </div>
              </div>
            </div>

            {/* Alternatives */}
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-4">Alternativas Similares</h3>
              <div className="space-y-2">
                {tool.alternatives.map((alt, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded text-sm">
                    {alt}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-secondary rounded-lg text-center">
              <h3 className="font-semibold mb-2">¿Listo para probarlo?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Descubre todo lo que {tool.name} puede hacer por ti.
              </p>
              <Button asChild className="w-full btn-gradient">
                <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer">
                  Probar {tool.name}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DirectoryDetail;