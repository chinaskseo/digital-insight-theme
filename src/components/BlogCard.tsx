import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  imageUrl?: string;
  featured?: boolean;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  category,
  imageUrl,
  featured = false
}: BlogCardProps) => {
  return (
    <article className={`card-service ${featured ? 'md:col-span-2' : ''} animate-fade-in`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Destacado
        </div>
      )}

      {/* Image */}
      <div className={`w-full bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden ${
        featured ? 'h-48' : 'h-32'
      }`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-2xl font-bold text-primary/20">
            {title.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Category */}
      <div className="flex items-center justify-between mb-3">
        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
          {category}
        </span>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Clock size={12} />
          <span>{readTime} min lectura</span>
        </div>
      </div>

      {/* Title */}
      <h2 className={`font-bold mb-3 text-foreground hover:text-accent transition-colors ${
        featured ? 'text-2xl' : 'text-lg'
      }`}>
        <Link to={`/blog/${id}`}>
          {title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className={`text-muted-foreground mb-4 leading-relaxed ${
        featured ? 'text-base' : 'text-sm'
      }`}>
        {excerpt}
      </p>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{publishDate}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={`/blog/${id}`}
        className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors group"
      >
        Leer más
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  );
};

export default BlogCard;