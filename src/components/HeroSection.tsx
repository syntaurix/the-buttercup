import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl px-6 animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a1ae38a2-9cfa-493f-b421-eb8e554a4485.png" 
            alt="The Buttercup Logo" 
            className="h-32 w-32 mx-auto mb-6 animate-float"
          />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-6 tracking-wide leading-tight">
          The Buttercup
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-buttercup-orange to-transparent mx-auto mb-8"></div>
        
        <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-buttercup-warm-cream mb-4 font-light leading-relaxed max-w-4xl mx-auto">
          Foods of Nature
        </p>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
          Where farm-fresh ingredients meet culinary artistry. Experience the pure taste of nature's bounty, 
          crafted with passion and served with love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection("menu")}
            size="lg"
            className="bg-buttercup-green hover:bg-buttercup-dark-green text-white px-8 py-4 text-lg font-medium tracking-wide uppercase transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-buttercup-green/30 rounded-none"
          >
            Explore Menu
          </Button>
          <Button
            onClick={() => scrollToSection("reservations")}
            variant="outline"
            size="lg"
            className="border-2 border-buttercup-orange hover:bg-buttercup-orange text-buttercup-orange hover:text-white px-8 py-4 text-lg font-medium tracking-wide uppercase transition-all duration-500 hover:scale-105 rounded-none"
          >
            Reserve Table
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("story")}
          className="animate-bounce text-white hover:text-buttercup-orange transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm uppercase tracking-wider opacity-80 group-hover:opacity-100">Discover</span>
            <ArrowDown className="h-6 w-6" />
          </div>
        </button>
      </div>
    </section>
  );
};