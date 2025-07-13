import { Link } from "react-router-dom";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

export const FeaturedMenu = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Pan-Seared Diver Scallops",
      description: "Atlantic diver scallops with cauliflower silk and microgreens",
      price: "$36",
      image: scallopsImage
    },
    {
      id: 2,
      name: "Herb-Crusted Rack of Lamb",
      description: "Colorado lamb with rosemary crust and red wine reduction",
      price: "$48",
      image: lambImage
    },
    {
      id: 3,
      name: "Wild Mushroom Risotto",
      description: "Arborio rice with seasonal mushrooms and truffle oil",
      price: "$28",
      image: risottoImage
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-primary-green mb-6 font-normal">
            Signature Dishes
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our most celebrated dishes, crafted with passion and presented with artistry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium tracking-wider uppercase">View Details</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl text-primary-green font-normal">
                    {dish.name}
                  </h3>
                  <span className="text-warm-orange font-medium text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-warm-gray leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block bg-warm-orange hover:bg-orange-600 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-sm"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};