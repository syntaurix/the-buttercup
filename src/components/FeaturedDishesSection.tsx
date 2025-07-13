import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const FeaturedDishesSection = () => {
  const featuredDishes = [
    {
      id: "01",
      name: "Pan-Seared Diver Scallops",
      description: "Atlantic diver scallops with cauliflower silk and microgreens",
      image: scallopsImage
    },
    {
      id: "02",
      name: "Herb-Crusted Rack of Lamb",
      description: "Colorado lamb with rosemary crust and red wine reduction",
      image: lambImage
    },
    {
      id: "03",
      name: "Wild Mushroom Risotto",
      description: "Arborio rice with seasonal mushrooms and truffle oil",
      image: risottoImage
    }
  ];

  return (
    <section className="py-luxury-8 px-luxury-2 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-buttercup-dark mb-luxury-2 font-normal tracking-wide">
            Chef's Specials
          </h2>
          <p className="font-cormorant text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our most celebrated dishes, crafted with passion and presented with artistry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-luxury-4">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-buttercup-primary text-cream-50 font-source text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {dish.id}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-buttercup-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-luxury-3">
                <h3 className="font-playfair text-xl md:text-2xl text-buttercup-dark mb-3 font-normal tracking-wide">
                  {dish.name}
                </h3>
                <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed font-light">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};