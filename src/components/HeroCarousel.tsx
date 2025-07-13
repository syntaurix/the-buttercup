import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-background.jpg";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: heroImage1,
      title: "Culinary Excellence",
      subtitle: "Where tradition meets innovation in every carefully crafted dish",
      cta: "Discover Our Story",
      ctaLink: "/about"
    },
    {
      image: scallopsImage,
      title: "Fresh Seasonal Ingredients",
      subtitle: "Hand-selected daily from local farms and the finest purveyors",
      cta: "View Menu",
      ctaLink: "/menu"
    },
    {
      image: lambImage,
      title: "Artisanal Mastery",
      subtitle: "Time-honored techniques creating extraordinary dining experiences",
      cta: "Make Reservation",
      ctaLink: "/reservations"
    },
    {
      image: risottoImage,
      title: "Intimate Fine Dining",
      subtitle: "An elegant atmosphere perfect for life's most memorable moments",
      cta: "Book Now",
      ctaLink: "/reservations"
    }
  ];

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
    <section className="h-screen relative overflow-hidden">
      {/* Carousel Container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700/40 to-charcoal-700/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl px-luxury-2 animate-fade-in-up">
                <h1 className="font-playfair text-5xl md:text-7xl font-normal text-cream-50 mb-luxury-2 tracking-wide">
                  {slide.title}
                </h1>
                <p className="font-cormorant text-xl md:text-2xl text-cream-100 mb-luxury-3 font-light leading-relaxed max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to={slide.ctaLink}
                    className="bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-buttercup-primary/30 rounded"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    to="/reservations"
                    className="bg-buttercup-orange hover:bg-orange-600 text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 rounded"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-buttercup-primary/20 hover:bg-buttercup-primary/40 text-cream-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-buttercup-primary/20 hover:bg-buttercup-primary/40 text-cream-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-buttercup-primary scale-125"
                : "bg-cream-50/50 hover:bg-cream-50/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};