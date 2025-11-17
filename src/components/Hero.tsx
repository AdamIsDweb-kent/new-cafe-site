import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/80 via-coffee-medium/70 to-coffee-dark/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <Coffee className="w-16 h-16 mx-auto mb-6 text-cream" />
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 tracking-tight">
            Le Cafe
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Your neighborhood haven for specialty coffee & artisanal treats
          </p>
          <p className="text-lg text-cream/80 mb-10 max-w-xl mx-auto">
            Just 2 minutes from Canterbury West Station
          </p>
          <Button 
            onClick={scrollToMenu}
            size="lg"
            className="bg-matcha hover:bg-matcha/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Menu
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
