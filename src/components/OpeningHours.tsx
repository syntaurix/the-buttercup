
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
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Opening Hours</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Monday - Friday</span>
                <div className="text-right">
                  <div className="text-lg font-semibold">11:00</div>
                  <div className="text-lg font-semibold">22:00</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/80">Saturday - Sunday</span>
                <div className="text-right">
                  <div className="text-lg font-semibold">11:00</div>
                  <div className="text-lg font-semibold">22:00</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-brand-accent text-white px-6 py-2 rounded-full inline-block mb-4">
                Call Now
              </div>
              <div className="text-2xl font-bold">0707 000 777</div>
              <div className="bg-brand-accent text-white px-6 py-2 rounded-full inline-block mt-4">
                0707777777
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
