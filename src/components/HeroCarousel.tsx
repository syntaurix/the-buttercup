import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-background.jpg";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: heroImage1,
      title: "SIGNATURE CUISINE",
      subtitle: "Scroll down to Discover",
      cta: "Discover Our Story",
      ctaLink: "/about"
    },
    {
      image: scallopsImage,
      title: "FRESH DELICACY",
      subtitle: "Premium ingredients, exceptional taste",
      cta: "View Menu",
      ctaLink: "/menu"
    },
    {
      image: lambImage,
      title: "ARTISAN CRAFT",
      subtitle: "Time-honored culinary techniques",
      cta: "Make Reservation",
      ctaLink: "/reservations"
    },
    {
      image: risottoImage,
      title: "FINE DINING",
      subtitle: "An elegant atmosphere for memorable moments",
      cta: "Book Now",
      ctaLink: "/reservations"
    }
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={carouselRef} className="h-screen relative overflow-hidden parallax">
      {/* Carousel Container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%) translateY(${scrollY * 0.5}px)` 
        }}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image with parallax */}
            <div 
              className="absolute inset-0 parallax-layer"
              style={{
                transform: `translateZ(-1px) scale(2) translateY(${scrollY * 0.3}px)`
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
              <div 
                className={`text-center max-w-4xl px-8 transform transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100 animate-float' 
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 tracking-[0.2em] drop-shadow-2xl">
                  {slide.title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
                <p className="font-light text-lg md:text-xl text-white/90 mb-12 tracking-wide drop-shadow-lg">
                  {slide.subtitle}
                </p>
                
                {/* Scroll indicator for first slide */}
                {index === 0 && currentSlide === 0 && (
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${
              index === currentSlide
                ? "bg-amber-400 border-amber-400 scale-125 animate-pulse-glow"
                : "bg-transparent border-white/50 hover:border-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};