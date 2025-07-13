import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sage-50 to-cream-100">
        <div className="max-w-6xl mx-auto px-luxury-2 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal text-sage-600 mb-luxury tracking-wide">
            Contact Us
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-charcoal-500 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-luxury-8 px-luxury-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-luxury-6">
            
            {/* Contact Details */}
            <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
              <h2 className="font-playfair text-4xl text-sage-600 mb-luxury-4 font-normal">
                Get in Touch
              </h2>
              
              <div className="space-y-luxury-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-source text-lg font-medium text-charcoal-600 mb-1">Address</h3>
                    <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed">
                      1847 Heritage Lane<br />
                      Willowbrook Valley, WV 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-source text-lg font-medium text-charcoal-600 mb-1">Phone</h3>
                    <p className="font-cormorant text-lg text-charcoal-500">
                      (555) 123-BUTTERCUP<br />
                      (555) 123-2883
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-source text-lg font-medium text-charcoal-600 mb-1">Email</h3>
                    <p className="font-cormorant text-lg text-charcoal-500">
                      hello@thebuttercup.com<br />
                      reservations@thebuttercup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-source text-lg font-medium text-charcoal-600 mb-2">Hours</h3>
                    <div className="font-cormorant text-lg text-charcoal-500 space-y-1">
                      <p><span className="font-medium">Tuesday - Thursday:</span> 5:00 PM - 10:00 PM</p>
                      <p><span className="font-medium">Friday - Saturday:</span> 5:00 PM - 11:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 4:00 PM - 9:00 PM</p>
                      <p><span className="font-medium">Monday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-luxury-4 rounded-lg shadow-sm">
              <h2 className="font-playfair text-4xl text-sage-600 mb-luxury-4 font-normal">
                Send us a Message
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
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="General Inquiry"
                  />
                </div>

                <div>
                  <label className="block font-source text-sm font-medium text-charcoal-600 mb-2 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage-500 hover:bg-sage-600 text-cream-50 py-4 px-luxury-3 rounded-lg font-source text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-luxury-6 bg-white p-luxury-4 rounded-lg shadow-sm text-center">
            <h2 className="font-playfair text-3xl text-sage-600 mb-luxury-3 font-normal">
              Visit Us
            </h2>
            <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed max-w-3xl mx-auto">
              Located in the heart of Willowbrook Valley, The Buttercup is housed in a beautifully 
              restored 19th-century farmhouse. We're easily accessible by car with complimentary 
              valet parking, and just a short walk from the downtown historic district.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;