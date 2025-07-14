
export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/cc13e061-2c4e-4971-af5d-28335275563a.png" 
                alt="The Buttercup Logo" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold text-brand-primary font-playfair">
                The Buttercup
              </h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Experience culinary excellence with our chef's finest creations. 
              We pride ourselves on using the freshest ingredients and innovative techniques.
            </p>
            <div className="text-neutral-300">
              <p>123 Fine Dining Street</p>
              <p>Culinary District, CD 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="/menu" className="hover:text-brand-primary transition-colors">Menu</a></li>
              <li><a href="/about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="/reservations" className="hover:text-brand-primary transition-colors">Reservations</a></li>
              <li><a href="/contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="text-neutral-300 space-y-1">
              <p>Monday - Friday: 11:00 - 22:00</p>
              <p>Saturday - Sunday: 11:00 - 22:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2024 The Buttercup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
