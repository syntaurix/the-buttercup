import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center container-width animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide">
            The Buttercup
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            A story of culinary passion, seasonal ingredients, and gastronomic excellence
          </p>
          <Link
            to="/reservations"
            className="inline-block bg-warm-orange hover:bg-orange-600 text-white px-12 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 rounded-sm"
          >
            Reserve Your Table
          </Link>
        </div>
      </div>
    </section>
  );
};