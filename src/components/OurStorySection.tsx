import { Button } from "@/components/ui/button";

export const OurStorySection = () => {
  return (
    <section id="story" className="py-24 bg-buttercup-warm-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23000000\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></g></svg>')"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-buttercup-orange font-medium tracking-widest uppercase text-sm mb-4 block">
                About The Buttercup
              </span>
              <h2 className="font-playfair text-4xl md:text-6xl font-light text-buttercup-dark-green mb-6 leading-tight">
                Our Story
              </h2>
              <div className="w-24 h-0.5 bg-buttercup-orange mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-charcoal-warm leading-relaxed font-light">
                Founded with a passion for authentic, natural cuisine, The Buttercup celebrates 
                the pure essence of farm-to-table dining.
              </p>
              
              <p className="text-lg text-charcoal-warm/80 leading-relaxed">
                Our commitment to sourcing the finest ingredients directly from local farms 
                ensures every dish bursts with natural flavors and seasonal freshness. We believe 
                that great food starts with great ingredients, and great ingredients come from 
                nature's bounty.
              </p>
              
              <p className="text-lg text-charcoal-warm/80 leading-relaxed">
                Every recipe is crafted with love, honoring traditional techniques while 
                embracing innovative culinary artistry that respects the integrity of each ingredient.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <Button 
                className="bg-buttercup-green hover:bg-buttercup-dark-green text-white px-8 py-4 text-base font-medium tracking-wide uppercase transition-all duration-500 hover:scale-105 hover:shadow-lg rounded-none"
              >
                Our Philosophy
              </Button>
              <div className="text-center">
                <div className="text-3xl font-playfair text-buttercup-green font-bold">25+</div>
                <div className="text-sm text-charcoal-warm/70 uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:order-2">
            <div className="relative z-10 text-center">
              <div className="bg-white rounded-full p-12 inline-block shadow-2xl">
                <img 
                  src="/lovable-uploads/a1ae38a2-9cfa-493f-b421-eb8e554a4485.png" 
                  alt="The Buttercup Logo" 
                  className="w-64 h-64 mx-auto"
                />
              </div>
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-buttercup-light-green rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-buttercup-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-buttercup-green/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};