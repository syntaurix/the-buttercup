import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Pan-Seared Diver Scallops",
      description: "Atlantic diver scallops, cauliflower silk, pancetta crisps, microgreens from our garden",
      price: 28,
      image: scallopsImage
    },
    {
      id: 2,
      name: "Herb-Crusted Rack of Lamb",
      description: "Colorado lamb, rosemary crust, roasted root vegetables, red wine reduction",
      price: 42,
      image: lambImage
    },
    {
      id: 3,
      name: "Wild Mushroom Risotto",
      description: "Arborio rice, seasonal wild mushrooms, truffle oil, aged parmesan, fresh herbs",
      price: 24,
      image: risottoImage
    }
  ];

  return (
    <section id="menu" className="py-luxury-8 px-luxury-2 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-5xl text-sage-600 mb-luxury-2 font-normal tracking-wide">
            Signature Menu
          </h2>
          <p className="font-cormorant text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed font-light">
            Each dish is carefully crafted using the finest seasonal ingredients,
            prepared with techniques passed down through generations.
          </p>
        </div>

        <div className="space-y-luxury-4">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-luxury-3 p-luxury-2 border-b border-sage-500/8 transition-all duration-800 hover:translate-x-2 hover:pl-luxury-2 hover:bg-cream-100/60 hover:rounded group ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-80 h-64 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-playfair text-2xl md:text-3xl text-sage-600 mb-luxury font-normal tracking-wide">
                  {item.name}
                </h3>
                <p className="font-cormorant text-lg md:text-xl text-charcoal-500 leading-relaxed mb-luxury-2 font-light">
                  {item.description}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <span className="font-source font-medium text-sage-600 text-xl tracking-wider">
                    ${item.price}
                  </span>
                  <span className="font-source text-sm text-charcoal-500 tracking-wider uppercase">
                    Per serving
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-luxury-6">
          <button className="bg-sage-500 hover:bg-sage-600 text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-500/30 rounded">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};