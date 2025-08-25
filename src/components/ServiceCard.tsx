import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  href: string;
  featured?: boolean;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price, 
  href, 
  featured = false 
}: ServiceCardProps) => {
  return (
    <div className={`card-service ${featured ? 'ring-2 ring-accent ring-offset-2' : ''} animate-fade-in`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
          Más Popular
        </div>
      )}
      
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          featured ? 'bg-gradient-accent' : 'bg-secondary'
        }`}>
          <Icon size={24} className={featured ? 'text-white' : 'text-accent'} />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <div className="w-2 h-2 bg-success rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          {!price.includes('Consulta') && (
            <span className="text-muted-foreground text-sm">/mes</span>
          )}
        </div>
        
        <Link 
          to={href}
          className={`block text-center ${
            featured ? 'btn-hero' : 'btn-outline'
          } w-full`}
        >
          {price.includes('Consulta') ? 'Contactar' : 'Comenzar'}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;