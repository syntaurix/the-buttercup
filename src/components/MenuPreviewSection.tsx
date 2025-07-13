import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lambImage from "@/assets/lamb.jpg";

export const MenuPreviewSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const menuCategories = [
    { number: "01", name: "HORS D'OEUVRE" },
    { number: "02", name: "SALADS" },
    { number: "03", name: "SOUPS" },
    { number: "04", name: "VEGGIE LOVERS" },
    { number: "05", name: "DEVILLED" }
  ];

  const featuredItems = [
    {
      number: "01",
      name: "Herb & Garlic Bread",
      description: "Topped with garlic, butter, herbs & made to a special Cuisine Colombo recipe. (Cheese Add-on - Rs. 300/-)",
      price: "Rs. 990/-"
    },
    {
      number: "02", 
      name: "Vegetable Spring Rolls (5 Pieces)",
      description: "Made to an in-house recipe and served with Sweet Chilli Sauce.",
      price: "Rs. 1850/-"
    },
    {
      number: "03",
      name: "Golden Chicken Bites",
      description: "Delicious pieces of Crispy boneless Battered Chicken, ideal for a bite with friends & family. Served with a Kachchi Cocktail Sauce.",
      price: "Rs. 2150/-"
    },
    {
      number: "04",
      name: "Buffalo Wings",
      description: "Made to an in-house recipe and served with Sweet Chilli Sauce",
      price: "Rs. 2150/-"
    }
  ];

  // Parallax and visibility effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <img
          src={lambImage}
          alt="Fine dining background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
      </div>

      {/* Decorative border effect */}
      <div className="absolute inset-0 border-4 border-white/10 m-8"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-amber-400 text-lg tracking-[0.3em] font-light mb-4">What we offer</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-white mb-6 font-normal tracking-wide">
            Enjoy Our Specialties
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Menu Categories */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100 animate-slide-in-left' : '-translate-x-10 opacity-0'
          }`}>
            {menuCategories.map((category, index) => (
              <div
                key={category.name}
                className="flex items-center group cursor-pointer border-l-2 border-transparent hover:border-amber-400 pl-4 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-6 group-hover:bg-amber-400/20 transition-all duration-300 border border-white/20">
                  <span className="text-amber-400 text-sm font-bold tracking-wider">
                    {category.number}
                  </span>
                </div>
                <span className="font-playfair text-xl text-white group-hover:text-amber-400 transition-colors duration-300 tracking-wide">
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side - Featured Items */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100 animate-slide-in-right' : 'translate-x-10 opacity-0'
          }`}>
            {featuredItems.map((item, index) => (
              <div 
                key={item.number} 
                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-playfair text-xl text-white font-normal tracking-wide group-hover:text-amber-400 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="font-bold text-lg text-amber-400 ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-white/80 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/30 rounded border-2 border-amber-400 group"
          >
            View Full Menu
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};