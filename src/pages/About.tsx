
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-medium text-lg tracking-wider mb-2">
            Relax, Unwind and Savor the Best Cuisine in Colombo
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-4 tracking-wide">
            About our Restaurant
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="text-brand-accent font-medium text-lg tracking-wider mb-4">
              Our story
            </div>
            <h2 className="font-playfair text-4xl text-neutral-900 mb-6 font-normal">
              Few words about us
            </h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                Cuisine Colombo Pvt Ltd is a limited liability company having registered its business at 
                Sri Lanka in January 2016 and has gradually evolved as a popular Restaurant chain in 
                Colombo serving a multi-cuisine feast in a wide range of categories.
              </p>
              <p>
                The Management of Cuisine Colombo to become a renowned chain of Restaurants with 
                branches in different parts of the World serving top quality food with an array of 
                dishes to cater to a majority.
              </p>
              <p>
                Since that Cuisine Colombo is a multi-cuisine restaurant it caters to different tastes. Visit 
                our facility: Mezzanine, Sri Thai Vegetarian performance, Fusion dishes, Fresh oven grills 
                from our kitchen, Premium bar facilities at Sky bar, Poolside Grills, Italian, Mexican, 
                Indonesian and Indian Thai Cuisine as well.
              </p>
              <p>
                The branch of Cuisine Colombo consists of well experienced, fresh talented chefs from the Hotel with plenty of experience having worked in renowned 5 star Hotels. Cuisine Bars, we which enables Cuisine 
                Colombo to stand out with fine delicacies appreciated by all. Our Waitron is to be recognized as a distinctive service.
              </p>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/cc13e061-2c4e-4971-af5d-28335275563a.png" 
                alt="The Buttercup Logo" 
                className="h-48 w-auto mx-auto mb-6"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-brand-accent mb-2">173</div>
              <div className="text-neutral-300">Google Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-accent mb-2">4.8</div>
              <div className="text-neutral-300">Google Rating out of 5</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-accent mb-2">4337</div>
              <div className="text-neutral-300">FB Followers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-accent mb-2">7</div>
              <div className="text-neutral-300">Days Open</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
