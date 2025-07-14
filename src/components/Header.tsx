
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cc13e061-2c4e-4971-af5d-28335275563a.png" 
              alt="The Buttercup Logo" 
              className="h-12 w-auto mr-3"
            />
            <span className="text-2xl font-bold text-brand-primary font-playfair">
              The Buttercup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-brand-primary"
                    : "text-neutral-700 hover:text-brand-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/reservations"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              RESERVATIONS
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-brand-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-brand-primary"
                      : "text-neutral-700 hover:text-brand-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/reservations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium text-center transition-all duration-300"
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
