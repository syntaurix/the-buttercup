import { ArrowDown } from "lucide-react";
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
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBackground}
          alt="The Buttercup Restaurant Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500/20 to-sage-400/10"></div>
        <div className="absolute inset-0 bg-charcoal-700/30"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl px-luxury-2 animate-fade-in-up">
        <h1 className="font-playfair text-5xl md:text-7xl font-normal text-cream-50 mb-luxury-2 tracking-wide">
          The Buttercup
        </h1>
        <p className="font-cormorant text-xl md:text-2xl text-cream-100 mb-luxury-3 font-light leading-relaxed max-w-2xl mx-auto">
          Where culinary artistry meets timeless elegance. Experience the finest
          ingredients transformed into extraordinary moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-sage-500 hover:bg-sage-600 text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-500/30 rounded"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection("reservations")}
            className="border-2 border-cream-50 hover:bg-cream-50 hover:text-charcoal-600 text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-800 hover:-translate-y-1 rounded"
          >
            Make Reservation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("philosophy")}
          className="animate-parallax-float text-cream-50 hover:text-sage-400 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};