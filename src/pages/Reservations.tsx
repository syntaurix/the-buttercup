import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, Users, Phone } from "lucide-react";

const Reservations = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sage-50 to-cream-100">
        <div className="max-w-6xl mx-auto px-luxury-2 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal text-sage-600 mb-luxury tracking-wide">
            Reservations
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-charcoal-500 max-w-3xl mx-auto leading-relaxed">
            Reserve your table for an unforgettable culinary experience at The Buttercup
          </p>
        </div>
      </section>

      {/* Reservation Content */}
      <section className="py-luxury-8 px-luxury-2">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-luxury-6">
            
            {/* Reservation Form */}
            <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
              <h2 className="font-playfair text-4xl text-sage-600 mb-luxury-4 font-normal text-center">
                Make a Reservation
              </h2>
              
              <form className="space-y-luxury-3">
                <div className="grid md:grid-cols-2 gap-luxury-2">
                  <div>
                    <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-luxury-2">
                  <div>
                    <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                    Party Size
                  </label>
                  <select className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select Party Size</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="more">More than 8</option>
                  </select>
                </div>

                <div>
                  <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                    Special Requests or Dietary Restrictions
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Please let us know about any allergies, dietary restrictions, or special occasions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage-500 hover:bg-sage-600 text-cream-50 py-4 px-luxury-3 rounded-lg font-source text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/30"
                >
                  Request Reservation
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-luxury-4">
              {/* Reservation Guidelines */}
              <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
                <h3 className="font-playfair text-2xl text-sage-600 mb-luxury-3 font-normal">
                  Reservation Guidelines
                </h3>
                <div className="space-y-luxury-2 font-cormorant text-lg text-charcoal-500">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <p>Reservations can be made up to 30 days in advance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <p>Please arrive within 15 minutes of your reservation time</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <p>Parties of 8 or more require a deposit</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <p>For same-day reservations, please call directly</p>
                  </div>
                </div>
              </div>

              {/* Dress Code */}
              <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
                <h3 className="font-playfair text-2xl text-sage-600 mb-luxury-3 font-normal">
                  Dress Code
                </h3>
                <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed">
                  We encourage smart casual attire. While jackets are not required, we ask that 
                  guests refrain from wearing athletic wear, flip-flops, or overly casual clothing.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
                <h3 className="font-playfair text-2xl text-sage-600 mb-luxury-3 font-normal">
                  Cancellation Policy
                </h3>
                <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed">
                  Please provide at least 24 hours notice for cancellations. For parties of 8 or more, 
                  we require 48 hours notice to avoid cancellation fees.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-sage-50 p-luxury-4 rounded-lg">
                <h3 className="font-playfair text-2xl text-sage-600 mb-luxury-3 font-normal">
                  Questions?
                </h3>
                <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed mb-luxury-2">
                  Our reservation team is here to help make your dining experience perfect.
                </p>
                <div className="space-y-1">
                  <p className="font-source text-sage-600 font-medium">
                    Phone: (555) 123-BUTTERCUP
                  </p>
                  <p className="font-source text-sage-600 font-medium">
                    Email: reservations@thebuttercup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;