
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-brand-primary to-brand-secondary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-4 tracking-wide">
            About our Restaurant
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Relax, Unwind and Savor the Best Cuisine in Colombo
          </p>
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
                Welcome to The Buttercup Restaurant, a warm and elegant dining destination located in the heart of Maharagama, Sri Lanka. Set along High Level Road, our restaurant has become a favorite spot for families, couples, and friends seeking a memorable dining experience in a relaxed yet refined atmosphere.

              </p>
              <p>
                At The Buttercup, we focus on delivering high-quality dishes inspired by both international and Sri Lankan culinary traditions. Every plate is thoughtfully prepared to highlight freshness, flavor, and creativity — perfect for guests who appreciate great food and great company.
              </p>
              <br />
              <b>A Fine Dining Experience</b>

              <p>
                We offer a fine dine-in area designed for comfort and sophistication. Whether you're celebrating a special moment, hosting a business meeting, or enjoying an intimate evening, our cozy and stylish interior provides the ideal setting.
              </p>
              <br />
              <b>Relaxed BYOB Lounge</b>

              <p>
                For guests who enjoy pairing their meals with their personal choice of beverages, we also feature a dedicated BYOB area. Bring your own bottle and unwind while our team ensures you have everything you need for a comfortable and enjoyable evening.

              </p>
              <br />
              <b>
                A Place for Everyone
                </b>
              <p>
                Our friendly staff, warm ambiance, and diverse menu make The Buttercup a welcoming space for all kinds of occasions — from casual meals to celebrations. We are also available on delivery platforms, allowing you to enjoy our dishes from the comfort of your home.
              </p>
              <p>
                At The Buttercup, we believe that hospitality is an experience. Thank you for choosing us, and we look forward to welcoming you into the Buttercup family.
              </p>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <img
                src="/logo.png"
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
