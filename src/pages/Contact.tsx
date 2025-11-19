
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-brand-primary to-brand-secondary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-6 tracking-wide">
            Contact Us
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch for reservations, inquiries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center  items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Location</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  No 221,<br /> High Level Road,<br />  Maharagama,<br /> Sri Lanka
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Phone</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  0112 845 813<br />
                  <span className="text-sm text-neutral-500">Call us daily from 11.00 AM to 11.00 PM for reservations, inquiries, or order support.
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Email</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  buttercupmhg@gmail.com<br />
                  <span className="text-sm text-neutral-500">Feel free to write to us anytime. We respond promptly during business hours.
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Hours</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  Daily 11 am - 11pm <br />
                  <span className="text-sm text-neutral-500">We are closed on Poya Days in respect of local religious traditions.</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl mb-8 font-normal">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-medium text-brand-dark mb-2 tracking-wide uppercase">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="border-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-brand-dark mb-2 tracking-wide uppercase">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="border-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-brand-dark mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-brand-dark mb-2 tracking-wide uppercase">
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="General Inquiry"
                    className="border-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-brand-dark mb-2 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 px-8 rounded-lg font-inter text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
