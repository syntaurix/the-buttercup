import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";

export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Reservation submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservations" className="py-luxury-8 px-luxury-2 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-5xl text-sage-600 mb-luxury-2 font-normal tracking-wide">
            Make a Reservation
          </h2>
          <p className="font-cormorant text-xl text-charcoal-500 leading-relaxed font-light">
            Join us for an unforgettable culinary journey. We look forward to serving you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-luxury-4 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-luxury-3 mb-luxury-3">
            <div>
              <label htmlFor="name" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-luxury-3 mb-luxury-3">
            <div>
              <label htmlFor="phone" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                <Users className="inline h-4 w-4 mr-2" />
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-luxury-3 mb-luxury-3">
            <div>
              <label htmlFor="date" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                <Calendar className="inline h-4 w-4 mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
                <Clock className="inline h-4 w-4 mr-2" />
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select time</option>
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

          <div className="mb-luxury-4">
            <label htmlFor="specialRequests" className="block font-source text-sm font-medium text-charcoal-500 mb-2 tracking-wide uppercase">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={4}
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-cream-200 rounded focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
              placeholder="Dietary restrictions, allergies, special occasions, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sage-500 hover:bg-sage-600 text-cream-50 py-4 px-luxury-3 font-source text-sm tracking-wider uppercase transition-all duration-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-500/30 rounded"
          >
            Reserve Your Table
          </button>
        </form>
      </div>
    </section>
  );
};