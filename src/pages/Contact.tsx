
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Location</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  1847 Heritage Lane<br />
                  Willowbrook Valley<br />
                  WV 12345
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Phone</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  (555) 123-BUTTERCUP<br />
                  (555) 123-2883<br />
                  <span className="text-sm text-neutral-500">Call daily 10am-10pm</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Email</h3>
                <p className="font-inter text-neutral-600 leading-relaxed">
                  hello@thebuttercup.com<br />
                  reservations@thebuttercup.com<br />
                  <span className="text-sm text-neutral-500">Response within 24hrs</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-playfair text-xl text-brand-dark mb-3 font-normal">Hours</h3>
                <div className="font-inter text-neutral-600 text-sm space-y-1">
                  <p><span className="font-medium">Tue-Thu:</span> 5:00-10:00pm</p>
                  <p><span className="font-medium">Fri-Sat:</span> 5:00-11:00pm</p>
                  <p><span className="font-medium">Sunday:</span> 4:00-9:00pm</p>
                  <p className="text-neutral-500">Closed Mondays</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="font-playfair text-3xl text-brand-primary mb-8 font-normal">
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

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-brand-primary mb-6 font-normal">
                    Visit Our Restaurant
                  </h3>
                  <p className="font-inter text-lg text-neutral-600 leading-relaxed mb-6">
                    Located in the heart of Willowbrook Valley, The Buttercup is housed in a beautifully 
                    restored 19th-century farmhouse. We're easily accessible by car with complimentary 
                    valet parking, and just a short walk from the downtown historic district.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="font-inter text-neutral-700">Complimentary valet parking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="font-inter text-neutral-700">Wheelchair accessible</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="font-inter text-neutral-700">Historic downtown location</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-brand-light shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-brand-primary mb-6 font-normal">
                    Private Events & Catering
                  </h3>
                  <p className="font-inter text-lg text-neutral-700 leading-relaxed mb-6">
                    The Buttercup offers private dining rooms for special occasions, corporate events, 
                    and intimate celebrations. Our catering services bring our culinary excellence to your venue.
                  </p>
                  <Button
                    variant="outline"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
                  >
                    Learn More About Private Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
