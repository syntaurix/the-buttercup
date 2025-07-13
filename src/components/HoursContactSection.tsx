import { Clock, Phone, MapPin, Mail } from "lucide-react";
import risottoImage from "@/assets/risotto.jpg";

export const HoursContactSection = () => {
  const hours = [
    { day: "Monday - Tuesday", time: "Closed" },
    { day: "Wednesday - Thursday", time: "5:00 PM - 10:00 PM" },
    { day: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
    { day: "Sunday", time: "4:00 PM - 9:00 PM" }
  ];

  return (
    <section className="py-luxury-8 px-luxury-2 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-luxury-6">
          {/* Left Column - Quote with Background */}
          <div className="relative h-96 md:h-auto overflow-hidden rounded-lg">
            <img
              src={risottoImage}
              alt="Fine dining inspiration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-buttercup-dark/60 flex items-center justify-center">
              <div className="text-center px-luxury-2">
                <blockquote className="font-playfair text-2xl md:text-3xl text-cream-50 font-light italic leading-relaxed">
                  "Good food is the foundation of genuine happiness."
                </blockquote>
                <cite className="font-cormorant text-lg text-buttercup-accent mt-4 block">
                  — Auguste Escoffier
                </cite>
              </div>
            </div>
          </div>

          {/* Right Column - Hours & Contact */}
          <div className="space-y-luxury-4">
            {/* Opening Hours */}
            <div>
              <div className="flex items-center mb-luxury-2">
                <Clock className="h-6 w-6 text-buttercup-primary mr-3" />
                <h3 className="font-playfair text-2xl md:text-3xl text-buttercup-dark font-normal tracking-wide">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3 ml-9">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-buttercup-accent/30 pb-2">
                    <span className="font-cormorant text-lg text-charcoal-500 font-light">
                      {schedule.day}
                    </span>
                    <span className={`font-source text-sm font-medium ${
                      schedule.time === "Closed" ? "text-red-500" : "text-buttercup-dark"
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl text-buttercup-dark mb-luxury-2 font-normal tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-buttercup-primary mr-3" />
                  <div>
                    <p className="font-cormorant text-lg text-charcoal-500 font-light">
                      123 Culinary Boulevard
                    </p>
                    <p className="font-cormorant text-lg text-charcoal-500 font-light">
                      Fine Dining District, FD 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-buttercup-primary mr-3" />
                  <div>
                    <p className="font-cormorant text-lg text-charcoal-500 font-light">
                      Main: (555) 123-4567
                    </p>
                    <p className="font-cormorant text-lg text-charcoal-500 font-light">
                      Reservations: (555) 123-4568
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-buttercup-primary mr-3" />
                  <p className="font-cormorant text-lg text-charcoal-500 font-light">
                    info@thebuttercup.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location Buttons */}
            <div className="pt-luxury-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 px-luxury-2 py-3 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded">
                  Get Directions
                </button>
                <button className="border-2 border-buttercup-primary text-buttercup-primary hover:bg-buttercup-primary hover:text-cream-50 px-luxury-2 py-3 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 rounded">
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};