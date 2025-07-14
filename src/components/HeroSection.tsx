
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          The Buttercup
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in-up">
          Experience culinary excellence with our chef's finest creations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Link
            to="/reservations"
            className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Reserve Your Table
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/menu"
            className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
