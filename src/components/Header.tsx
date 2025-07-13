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
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/"
              className={`font-playfair text-2xl md:text-3xl font-normal tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary-green" : "text-white"
              }`}
            >
              The Buttercup
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wider font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path 
                    ? (isScrolled ? "text-primary-green" : "text-warm-orange")
                    : (isScrolled ? "text-warm-gray hover:text-primary-green" : "text-white/90 hover:text-warm-orange")
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  location.pathname === item.path 
                    ? (isScrolled ? "w-full bg-primary-green" : "w-full bg-warm-orange")
                    : "w-0 group-hover:w-full bg-warm-orange"
                }`}></span>
              </Link>
            ))}
            
            {/* Reservation CTA Button */}
            <Link
              to="/reservations"
              className="bg-warm-orange hover:bg-orange-600 text-white px-6 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 rounded-sm ml-4"
            >
              RESERVATIONS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-warm-gray hover:text-primary-green" : "text-white hover:text-warm-orange"
            }`}
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
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`text-sm tracking-wider font-medium transition-colors duration-300 text-left px-4 py-2 ${
                    location.pathname === item.path 
                      ? "text-primary-green" 
                      : "text-warm-gray hover:text-primary-green"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Reservation Button */}
              <Link
                to="/reservations"
                onClick={closeMobileMenu}
                className="bg-warm-orange text-white px-4 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded-sm mx-4 text-center"
              >
                RESERVATIONS
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};