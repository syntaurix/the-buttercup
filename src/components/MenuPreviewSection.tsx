import { Link } from "react-router-dom";
import lambImage from "@/assets/lamb.jpg";

export const MenuPreviewSection = () => {
  const menuCategories = [
    "Appetizers",
    "Salads", 
    "Soups",
    "Mains",
    "Desserts",
    "Beverages"
  ];

  const featuredItems = [
    {
      number: "01",
      name: "Seared Foie Gras",
      description: "Pan-seared foie gras with cherry gastrique and brioche toast",
      price: "$32"
    },
    {
      number: "02", 
      name: "Wagyu Beef Tenderloin",
      description: "Prime wagyu with roasted vegetables and cognac reduction",
      price: "$68"
    },
    {
      number: "03",
      name: "Lobster Thermidor",
      description: "Maine lobster with brandy cream sauce and gruyere cheese",
      price: "$54"
    }
  ];

  return (
    <section className="py-luxury-8 px-luxury-2 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={lambImage}
          alt="Fine dining background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-buttercup-dark/85"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-50 mb-luxury-2 font-normal tracking-wide">
            Enjoy Our Specialties
          </h2>
          <p className="font-cormorant text-xl text-cream-100 max-w-2xl mx-auto leading-relaxed font-light">
            A curated selection from our seasonal menu, featuring the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-luxury-6">
          {/* Left Side - Menu Categories */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl md:text-3xl text-buttercup-primary mb-luxury font-normal tracking-wide">
              Menu Categories
            </h3>
            <div className="space-y-3">
              {menuCategories.map((category, index) => (
                <div
                  key={category}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-buttercup-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-buttercup-primary/40 transition-colors duration-300">
                    <span className="text-cream-50 text-sm font-source font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="font-cormorant text-lg text-cream-100 group-hover:text-buttercup-accent transition-colors duration-300">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Featured Items */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl text-buttercup-primary mb-luxury font-normal tracking-wide">
              Featured Selections
            </h3>
            <div className="space-y-6">
              {featuredItems.map((item) => (
                <div key={item.number} className="flex items-start space-x-4 group">
                  <div className="bg-buttercup-primary text-cream-50 font-source text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-buttercup-secondary transition-colors duration-300">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-playfair text-xl text-cream-50 font-normal tracking-wide">
                        {item.name}
                      </h4>
                      <span className="font-source text-lg text-buttercup-accent font-medium ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-cormorant text-base text-cream-100 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-luxury-6">
          <Link
            to="/menu"
            className="inline-block bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-buttercup-primary/30 rounded"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};