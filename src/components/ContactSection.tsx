import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-luxury-8 px-luxury-2 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-5xl text-sage-600 mb-luxury-2 font-normal tracking-wide">
            Visit Us
          </h2>
          <p className="font-cormorant text-xl text-charcoal-500 leading-relaxed font-light">
            Located in the heart of the city, we're easily accessible and always ready to welcome you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-luxury-4">
          <div className="text-center p-luxury-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-800">
            <MapPin className="h-8 w-8 text-sage-500 mx-auto mb-luxury-2" />
            <h3 className="font-playfair text-xl text-sage-600 mb-luxury font-normal">Location</h3>
            <p className="font-cormorant text-charcoal-500 leading-relaxed">
              123 Culinary Avenue<br />
              Downtown District<br />
              New York, NY 10001
            </p>
          </div>

          <div className="text-center p-luxury-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-800">
            <Phone className="h-8 w-8 text-sage-500 mx-auto mb-luxury-2" />
            <h3 className="font-playfair text-xl text-sage-600 mb-luxury font-normal">Phone</h3>
            <p className="font-cormorant text-charcoal-500 leading-relaxed">
              Reservations:<br />
              (555) 123-4567<br />
              <span className="text-sm">Call daily 10am-10pm</span>
            </p>
          </div>

          <div className="text-center p-luxury-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-800">
            <Mail className="h-8 w-8 text-sage-500 mx-auto mb-luxury-2" />
            <h3 className="font-playfair text-xl text-sage-600 mb-luxury font-normal">Email</h3>
            <p className="font-cormorant text-charcoal-500 leading-relaxed">
              reservations@<br />
              thebuttercup.com<br />
              <span className="text-sm">We respond within 24hrs</span>
            </p>
          </div>

          <div className="text-center p-luxury-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-800">
            <Clock className="h-8 w-8 text-sage-500 mx-auto mb-luxury-2" />
            <h3 className="font-playfair text-xl text-sage-600 mb-luxury font-normal">Hours</h3>
            <p className="font-cormorant text-charcoal-500 leading-relaxed">
              Tue-Thu: 5:30-10:00pm<br />
              Fri-Sat: 5:30-11:00pm<br />
              <span className="text-sm">Closed Sundays & Mondays</span>
            </p>
          </div>
        </div>

        <div className="mt-luxury-6 text-center">
          <div className="bg-white p-luxury-4 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl text-sage-600 mb-luxury-2 font-normal">
              Special Events & Private Dining
            </h3>
            <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed font-light mb-luxury-2">
              The Buttercup offers private dining rooms for special occasions, corporate events, and intimate celebrations.
            </p>
            <button className="bg-sage-500 hover:bg-sage-600 text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-500/30 rounded">
              Inquire About Private Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};