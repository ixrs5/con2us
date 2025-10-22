import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Image } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <Heart className="w-5 h-5 fill-primary text-primary" />
          <span className="font-display text-xl font-semibold hidden sm:inline">
            Tuhi & Siyam
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`flex items-center gap-2 transition-colors ${
              location.pathname === "/" 
                ? "text-primary font-medium" 
                : "text-foreground hover:text-primary"
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            to="/moments"
            className={`flex items-center gap-2 transition-colors ${
              location.pathname === "/moments" 
                ? "text-primary font-medium" 
                : "text-foreground hover:text-primary"
            }`}
          >
            <Image className="w-4 h-4" />
            <span className="hidden sm:inline">Moments</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
