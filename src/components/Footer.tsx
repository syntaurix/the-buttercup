import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-gray text-soft-cream">
      <div className="container-width py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-playfair text-3xl font-normal text-white">
              The Buttercup
            </h3>
            <p className="text-soft-cream/80 leading-relaxed max-w-md">
              A sophisticated dining experience where culinary artistry meets seasonal ingredients, 
              creating unforgettable moments for our guests.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-normal text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-soft-cream/80 hover:text-warm-orange transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-soft-cream/80 hover:text-warm-orange transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-soft-cream/80 hover:text-warm-orange transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-soft-cream/80 hover:text-warm-orange transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-soft-cream/80 hover:text-warm-orange transition-colors duration-300">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-normal text-white">Contact Info</h4>
            <div className="space-y-2 text-soft-cream/80">
              <p>123 Culinary Avenue</p>
              <p>Downtown District</p>
              <p>City, State 12345</p>
              <p className="pt-2">(555) 123-4567</p>
              <p>info@thebuttercup.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-cream/20 mt-12 pt-8 text-center">
          <p className="text-soft-cream/60">
            © {currentYear} The Buttercup Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};