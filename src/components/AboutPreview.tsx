import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-soft-cream">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-green font-normal">
              Our Story
            </h2>
            <p className="text-warm-gray leading-relaxed">
              Founded in the heart of culinary tradition, The Buttercup began as a vision to create 
              a dining experience that transcends the ordinary. Our journey started with a simple 
              belief: that exceptional food has the power to bring people together and create 
              lasting memories.
            </p>
            <p className="text-warm-gray leading-relaxed">
              For over a decade, we have been dedicated to sourcing the finest seasonal ingredients, 
              working closely with local farmers and artisans who share our passion for quality.
            </p>
            <Link
              to="/about"
              className="inline-block bg-primary-green hover:bg-green-600 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="font-playfair text-3xl text-primary-green mb-4 font-normal">
                The Buttercup
              </h3>
              <p className="text-sage-green text-lg font-light">
                Fine Dining Experience
              </p>
              <div className="w-16 h-1 bg-warm-orange mx-auto mt-6 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};