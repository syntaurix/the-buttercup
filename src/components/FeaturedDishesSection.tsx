import { Button } from "@/components/ui/button";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const FeaturedDishesSection = () => {
  const dishes = [
    {
      name: "Pan-Seared Diver Scallops",
      description: "Fresh Atlantic scallops with cauliflower purée, microgreens, and citrus vinaigrette",
      price: "32",
      image: scallopsImage
    },
    {
      name: "Herb-Crusted Rack of Lamb",
      description: "Colorado lamb with rosemary crust, seasonal vegetables, and red wine reduction",
      price: "45",
      image: lambImage
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy arborio rice with seasonal mushrooms, parmesan, and truffle oil",
      price: "28",
      image: risottoImage
    }
  ];

  return (
    <section id="featured" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-buttercup-orange font-medium tracking-widest uppercase text-sm mb-4 block">
            Chef's Selection
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-light text-buttercup-dark-green mb-6 leading-tight">
            Signature Creations
          </h2>
          <div className="w-24 h-0.5 bg-buttercup-orange mx-auto mb-8"></div>
          <p className="text-xl text-charcoal-warm max-w-3xl mx-auto leading-relaxed font-light">
            Each dish is a masterpiece, crafted with seasonal ingredients sourced from our trusted local farms, 
            celebrating the pure essence of nature's bounty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 rounded-none"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-buttercup-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    0{index + 1}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-buttercup-dark-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-light text-buttercup-dark-green mb-4 group-hover:text-buttercup-green transition-colors duration-300">
                  {dish.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-buttercup-green font-semibold text-2xl font-playfair">
                    ${dish.price}
                  </span>
                  <Button 
                    size="lg" 
                    className="bg-transparent border-2 border-buttercup-green text-buttercup-green hover:bg-buttercup-green hover:text-white transition-all duration-500 rounded-none px-6"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};