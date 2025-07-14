
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-brand-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-4 tracking-wide">
            About The Buttercup
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A story of culinary passion, seasonal ingredients, and the pursuit of gastronomic excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <h2 className="font-playfair text-4xl text-brand-primary mb-6 font-normal text-center">
              Our Story
            </h2>
            <div className="space-y-6 font-inter text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Founded in 2018, The Buttercup emerged from a simple yet profound vision: to create 
                an intimate dining experience that celebrates the natural bounty of our region while 
                honoring time-tested culinary traditions.
              </p>
              <p>
                Our restaurant takes its name from the delicate wildflowers that bloom each spring 
                in the meadows surrounding our historic building. Like these resilient flowers, we 
                believe in the beauty of simplicity and the power of natural ingredients to create 
                something truly extraordinary.
              </p>
              <p>
                Every dish that leaves our kitchen tells a story – of the local farmers who tend our 
                ingredients with care, of the artisans who craft our serving pieces, and of our team's 
                unwavering commitment to culinary excellence.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <h2 className="font-playfair text-4xl text-brand-primary mb-6 font-normal text-center">
              Our Philosophy
            </h2>
            <div className="space-y-6 font-inter text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                At The Buttercup, we believe that exceptional dining begins with exceptional ingredients. 
                We source exclusively from local farms and artisans who share our commitment to 
                sustainability and quality.
              </p>
              <p>
                Our seasonal menu reflects the natural rhythm of the land, changing with the harvest 
                to ensure that every ingredient is at its peak of flavor and freshness. This approach 
                not only creates the most delicious dishes but also supports our local community and 
                reduces our environmental impact.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-playfair text-4xl text-brand-primary mb-6 font-normal text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-brand-dark mb-4 font-normal">
                  Sustainability
                </h3>
                <p className="font-inter text-lg text-neutral-600 leading-relaxed">
                  We're committed to responsible sourcing, minimal waste, and supporting local ecosystems.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-brand-dark mb-4 font-normal">
                  Quality
                </h3>
                <p className="font-inter text-lg text-neutral-600 leading-relaxed">
                  Every ingredient, every technique, every detail is carefully considered and executed.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-brand-dark mb-4 font-normal">
                  Community
                </h3>
                <p className="font-inter text-lg text-neutral-600 leading-relaxed">
                  We believe in fostering connections between our guests, our team, and our community.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-brand-dark mb-4 font-normal">
                  Innovation
                </h3>
                <p className="font-inter text-lg text-neutral-600 leading-relaxed">
                  While respecting tradition, we constantly explore new ways to delight and surprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
