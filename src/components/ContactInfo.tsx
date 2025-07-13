import { Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactInfo = () => {
  return (
    <section className="section-padding bg-primary-green text-white">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Location */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-normal">Location</h3>
            <p className="text-white/90 leading-relaxed">
              123 Culinary Avenue<br />
              Downtown District<br />
              City, State 12345
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-normal">Hours</h3>
            <div className="text-white/90 leading-relaxed">
              <p>Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
              <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p>Sunday: 4:00 PM - 9:00 PM</p>
              <p className="text-warm-orange mt-2">Closed Mondays</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-normal">Contact</h3>
            <div className="text-white/90 leading-relaxed">
              <p>(555) 123-4567</p>
              <p>info@thebuttercup.com</p>
              <Link
                to="/contact"
                className="inline-block text-warm-orange hover:text-orange-300 underline mt-2 transition-colors duration-300"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};