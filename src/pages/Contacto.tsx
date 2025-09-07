import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+34 900 123 456",
      description: "Lun - Vie: 9:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      info: "hola@seoagency.com",
      description: "Respuesta en 24h"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Madrid, España",
      description: "También trabajamos remoto"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Vie: 9:00 - 18:00",
      description: "Consulta gratis disponible"
    }
  ];

  const services = [
    "SEO y Posicionamiento Web",
    "Diseño y Desarrollo Web",
    "Marketing Digital",
    "Auditoría SEO",
    "Consultoría IA",
    "Mantenimiento Web",
    "Otro"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hablemos de tu <span className="text-accent">Proyecto</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            ¿Listo para llevar tu presencia digital al siguiente nivel? 
            Contáctanos y descubre cómo podemos ayudarte a crecer.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Cuéntanos sobre tu proyecto</h2>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas 
                  para ofrecerte una consulta gratuita personalizada.
                </p>
              </div>

              {!isSubmitted ? (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nombre completo *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Teléfono
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+34 600 000 000"
                            type="tel"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          type="email"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Servicio de interés
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Selecciona un servicio</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Cuéntanos más sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-gradient">
                        <Send size={18} className="mr-2" />
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="text-center">
                  <CardContent className="p-8">
                    <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-green-600">
                      ¡Mensaje enviado correctamente!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tiempo de respuesta habitual: menos de 24 horas
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Información de contacto</h2>
                <p className="text-muted-foreground">
                  También puedes contactarnos directamente a través de cualquiera de estos medios.
                </p>
              </div>

              <div className="grid gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-accent rounded-lg text-white">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="font-medium text-foreground">{item.info}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <Card className="bg-gradient-secondary">
                <CardHeader>
                  <CardTitle className="text-xl">¿Por qué elegirnos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">Consulta inicial gratuita y sin compromiso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">Más de 200 proyectos exitosos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">Equipo especializado en SEO y diseño</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">Soporte continuo y resultados medibles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-muted-foreground">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Cuánto tiempo lleva ver resultados?</h3>
                <p className="text-sm text-muted-foreground">
                  Los resultados de SEO suelen verse entre 3-6 meses, mientras que el diseño web 
                  se entrega en 2-4 semanas según la complejidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Ofrecen mantenimiento web?</h3>
                <p className="text-sm text-muted-foreground">
                  Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, 
                  copias de seguridad y soporte técnico.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Trabajan con cualquier sector?</h3>
                <p className="text-sm text-muted-foreground">
                  Tenemos experiencia en múltiples sectores: e-commerce, servicios profesionales, 
                  tecnología, salud y más.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Qué incluye la consulta gratuita?</h3>
                <p className="text-sm text-muted-foreground">
                  Análisis inicial de tu web, identificación de oportunidades de mejora y 
                  propuesta de estrategia personalizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;