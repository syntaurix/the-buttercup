
export const OpeningHours = () => {
  return (
    <section
      className="py-20 parallax relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image content */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the finest culinary artistry with fresh, locally-sourced ingredients
            </h3>
            <p className="text-white/80 mb-6">
              Our chefs craft each dish with passion and precision, creating unforgettable 
              dining experiences that celebrate the art of cooking.
            </p>
            <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Book Table
            </button>
          </div>

          {/* Right side - Opening Hours */}
          <div className="bg-white rounded-xl p-12 text-neutral-800 max-w-md mx-auto w-full">
            {/* Top decorative line */}
            <div className="text-center mb-8">
              <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-4">
                Please Come In
              </p>
              <div className="w-16 h-px bg-neutral-300 mx-auto"></div>
            </div>

            <h3 className="text-3xl font-playfair font-normal mb-12 text-center tracking-wide">
              OPENING<br />
              HOURS
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Monday</span>
                <span className="text-sm font-light">11AM - 11 PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Tuesday</span>
                <span className="text-sm font-light">11AM - 11 PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Wednesday</span>
                <span className="text-sm font-light">11AM - 11 PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Thursday</span>
                <span className="text-sm font-light">11AM - 11 PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Friday</span>
                <span className="text-sm font-light">11AM - 11 PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Saturday</span>
                <span className="text-sm font-light">11AM - 11PM</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium tracking-wide uppercase">Sunday</span>
                <span className="text-sm font-light">11AM - 11PM</span>
              </div>
            </div>

            {/* Bottom decorative section */}
            <div className="text-center">
              <div className="w-16 h-px bg-neutral-300 mx-auto mb-4"></div>
              <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                Please Come In
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
