import { Link } from "react-router-dom";

export const OurStorySection = () => {
  return (
    <section className="py-luxury-8 px-luxury-2 bg-buttercup-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-luxury-6 items-center">
          {/* Left Column - Content */}
          <div className="space-y-luxury-3">
            <h2 className="font-playfair text-4xl md:text-5xl text-buttercup-dark mb-luxury-2 font-normal tracking-wide">
              Our Story
            </h2>
            <p className="font-cormorant text-lg md:text-xl text-charcoal-500 leading-relaxed font-light">
              Founded in the heart of culinary tradition, The Buttercup began as a vision to create 
              a dining experience that transcends the ordinary. Our journey started with a simple 
              belief: that exceptional food has the power to bring people together and create 
              lasting memories.
            </p>
            <p className="font-cormorant text-lg md:text-xl text-charcoal-500 leading-relaxed font-light">
              For over a decade, we have been dedicated to sourcing the finest seasonal ingredients, 
              working closely with local farmers and artisans who share our passion for quality. 
              Every dish tells a story of craftsmanship, creativity, and respect for culinary heritage.
            </p>
            <div className="pt-luxury-2">
              <Link
                to="/about"
                className="inline-block bg-buttercup-secondary hover:bg-buttercup-medium text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-buttercup-secondary/30 rounded"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Column - Logo/Image */}
          <div className="flex items-center justify-center">
            <div className="text-center p-luxury-4 bg-cream-50/80 rounded-lg shadow-lg">
              <h3 className="font-playfair text-6xl md:text-7xl text-buttercup-primary mb-4 font-normal tracking-wide">
                The Buttercup
              </h3>
              <p className="font-cormorant text-xl text-buttercup-dark font-light tracking-wide">
                Fine Dining Experience
              </p>
              <div className="w-16 h-1 bg-buttercup-primary mx-auto mt-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};