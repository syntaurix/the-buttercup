
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Users, Clock, Star } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Wine Tasting Evening",
      date: "December 15, 2024",
      time: "7:00 PM - 10:00 PM",
      capacity: "Limited to 20 guests",
      description: "Join us for an exclusive wine tasting featuring selections from renowned vineyards, paired with our signature appetizers.",
      price: "$85 per person",
      featured: true
    },
    {
      id: 2,
      title: "Chef's Table Experience",
      date: "December 22, 2024",
      time: "6:00 PM - 9:00 PM",
      capacity: "8 guests maximum",
      description: "An intimate dining experience where you'll watch our chef prepare a seven-course tasting menu exclusively for your table.",
      price: "$150 per person",
      featured: true
    },
    {
      id: 3,
      title: "New Year's Eve Celebration",
      date: "December 31, 2024",
      time: "8:00 PM - 1:00 AM",
      capacity: "Full restaurant",
      description: "Ring in the new year with our special five-course menu, live music, and champagne toast at midnight.",
      price: "$200 per person",
      featured: false
    }
  ];

  const privateEvents = [
    {
      title: "Wedding Celebrations",
      description: "Create unforgettable memories with our customized wedding packages",
      capacity: "Up to 80 guests"
    },
    {
      title: "Corporate Events",
      description: "Professional venues for business dinners and corporate celebrations",
      capacity: "10-50 guests"
    },
    {
      title: "Anniversary Dinners",
      description: "Intimate settings for milestone celebrations and special occasions",
      capacity: "2-20 guests"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-brand-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-4 tracking-wide">
              Events
            </h1>
            <p className="font-inter text-xl md:text-2xl font-light leading-relaxed text-white/90">
              Exclusive dining experiences and private celebrations at The Buttercup
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl text-brand-primary mb-12 font-normal tracking-wide text-center">
              Upcoming Events
            </h2>
            
            <div className="space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    event.featured ? "border-l-4 border-brand-accent" : ""
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-playfair text-2xl text-brand-dark font-normal tracking-wide">
                          {event.title}
                        </h3>
                        {event.featured && (
                          <Star className="h-5 w-5 text-brand-accent ml-2 fill-current" />
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                        <div className="flex items-center text-neutral-600">
                          <Calendar className="h-4 w-4 text-brand-primary mr-2" />
                          <span className="font-inter">{event.date}</span>
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <Clock className="h-4 w-4 text-brand-primary mr-2" />
                          <span className="font-inter">{event.time}</span>
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <Users className="h-4 w-4 text-brand-primary mr-2" />
                          <span className="font-inter">{event.capacity}</span>
                        </div>
                      </div>
                      
                      <p className="font-inter text-lg text-neutral-600 leading-relaxed mb-3">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="lg:ml-6 text-center lg:text-right">
                      <div className="text-2xl font-playfair text-brand-primary font-normal mb-3">
                        {event.price}
                      </div>
                      <button className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 font-inter text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Events */}
        <section className="py-16 px-4 bg-brand-light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-brand-dark mb-4 font-normal tracking-wide">
                Private Events
              </h2>
              <p className="font-inter text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Create memorable experiences with our customized private dining options
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {privateEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal tracking-wide">
                    {event.title}
                  </h3>
                  <p className="font-inter text-lg text-neutral-600 leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-brand-primary">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="font-inter font-medium">{event.capacity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-inter text-lg text-neutral-600 mb-4">
                Interested in hosting a private event?
              </p>
              <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 font-inter text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
