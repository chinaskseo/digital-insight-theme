import { Star, ExternalLink, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface DirectoryCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  isPremium: boolean;
  imageUrl?: string;
  tags: string[];
  dateAdded: string;
  externalUrl?: string;
}

const DirectoryCard = ({
  id,
  name,
  description,
  category,
  rating,
  reviewCount,
  isPremium,
  imageUrl,
  tags,
  dateAdded,
  externalUrl
}: DirectoryCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="card-directory animate-scale-in">
      {/* Badge Premium */}
      {isPremium && (
        <div className="absolute top-3 right-3 bg-gradient-accent text-white px-2 py-1 rounded-full text-xs font-medium">
          Premium
        </div>
      )}

      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-4xl font-bold text-primary/20">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Category Badge */}
      <div className="flex items-center justify-between mb-2">
        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
          {category}
        </span>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Calendar size={12} />
          <span>{dateAdded}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 text-foreground hover:text-accent transition-colors">
        <Link to={`/directorios/${id}`}>
          {name}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Rating */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center space-x-1">
          {renderStars(rating)}
        </div>
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Users size={12} />
          <span>{reviewCount} reseñas</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
          >
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs text-muted-foreground">
            +{tags.length - 3} más
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex space-x-2 mt-auto">
        <Link
          to={`/directorios/${id}`}
          className="btn-secondary flex-1 text-center text-sm"
        >
          Ver Detalles
        </Link>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-3 py-2"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default DirectoryCard;