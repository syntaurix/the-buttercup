
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

      {/* Our Chef Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Chef Info */}
          <div>
            <div className="text-brand-accent font-medium text-lg tracking-wider mb-4">
              Our Chef/Chef
            </div>
            <h2 className="font-playfair text-4xl text-neutral-900 mb-6 font-normal">
              Sushan Peiris
            </h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                Cuisine Colombo came into being solely through a passion which was instilled in the 
                heart of Mr. Sushan Peiris the Founder /Managing Director of Cuisine Colombo Pvt 
                Ltd to start his own chain of restaurants coupled in Colombo and subsequently to other 
                locations both locally as well as internationally.
              </p>
              <p>
                Being an Alumnus of Law by profession, this passion towards the food business, forced 
                him to take a break from his field, practice and venture into the field of Food & Beverage 
                industry thereafter with a 15 year experience in the hospitality industry as well as was 
                able to occupy Cuisine Colombo from what is a successful restaurant operating in 
                Colombo.
              </p>
              <p>
                Born in Colombo, Sri Lanka and schooled at St Thomas' Preparatory School and 
                subsequently St Thomas' College, Sushan completed his higher education at Oxford 
                International School, Colombo. He was inspired further a degree in Law from the 
                University of London, but his love of food and his interest in the hospitality sector and 
                experience in the fields of law and business able to joining the family owned Mutton 
                Group of Companies.
              </p>
            </div>
          </div>

          {/* Right Column - Chef Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Chef Sushan Peiris"
              className="rounded-lg shadow-xl w-full max-w-md h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl text-neutral-900 mb-12 text-center font-normal">
            Here's a glimpse of how Our Journey unfolded
          </h2>
          <div className="space-y-8 text-neutral-600 text-lg leading-relaxed">
            <p>
              <strong>Cuisine Colombo began its operations in January 2016.</strong>
            </p>
            <p>
              What 15 months later operations commenced to the best of our capacity due to the several all branches direct from the beginning of the Country due to the 1st delay of CONCH.
            </p>
            <p>
              Subsequent to this, we opened the Country's second direct of the best menu. Cuisine Colombo began operations other again by opening to the public on the 26th of June 2020 and thus was enabled then to welcoming international foodbusiness to the area. We initially privately from that starting begun operations, 3 weeks prior to the first dinner of March 31, then down operation and commercially had begun and now provide excellent service to the hospitality arena as a successfully restaurant in our industry.
            </p>
            <p>
              Whilst this success story is completing one year of the business, Cuisine Colombo opened it's 2nd CONCH outlet at the heart of Colombo 04, to Development Executive, Colombo 07 and has begun and is the 3 announced and we cannot business ventures after the following years can enable its best.
            </p>
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
