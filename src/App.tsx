import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import ServiciosSeoTecnico from "./pages/ServiciosSeoTecnico";
import ServiciosDisenoWeb from "./pages/ServiciosDisenoWeb";
import ServiciosConsultoriaSeo from "./pages/ServiciosConsultoriaSeo";
import Directorios from "./pages/Directorios";
import DirectoryDetail from "./pages/DirectoryDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/seo-tecnico" element={<ServiciosSeoTecnico />} />
          <Route path="/servicios/diseno-web" element={<ServiciosDisenoWeb />} />
          <Route path="/servicios/consultoria-seo" element={<ServiciosConsultoriaSeo />} />
          <Route path="/directorios" element={<Directorios />} />
          <Route path="/directorios/:id" element={<DirectoryDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
