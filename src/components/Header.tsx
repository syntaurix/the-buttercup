import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "Menu", 
      path: "/menu",
      dropdown: [
        { name: "À la Carte Menu", path: "/menu" },
        { name: "Bar Menu", path: "/menu#bar" }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-sm border-b border-sage-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-luxury-2 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-normal text-sage-600 tracking-wide">
              The Buttercup
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-source text-sm tracking-wider uppercase transition-colors duration-300 relative group ${
                  location.pathname === item.path 
                    ? "text-buttercup-primary" 
                    : "text-charcoal-500 hover:text-buttercup-primary"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-buttercup-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
            
            {/* Reservation CTA Button */}
            <Link
              to="/reservations"
              className="bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 px-luxury-2 py-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-buttercup-primary/30 rounded ml-4"
            >
              Reservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal-500 hover:text-sage-600 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-cream-50/95 backdrop-blur-sm rounded-lg border border-sage-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`font-source text-sm tracking-wider uppercase transition-colors duration-300 text-left px-4 py-2 ${
                    location.pathname === item.path 
                      ? "text-buttercup-primary" 
                      : "text-charcoal-500 hover:text-buttercup-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Reservation Button */}
              <Link
                to="/reservations"
                onClick={closeMobileMenu}
                className="bg-buttercup-primary text-cream-50 px-4 py-3 font-source text-sm tracking-wider uppercase transition-all duration-300 rounded mx-4 text-center"
              >
                Make Reservation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};