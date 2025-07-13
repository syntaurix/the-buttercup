import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Pan-Seared Diver Scallops",
      description: "Atlantic diver scallops, cauliflower silk, pancetta crisps, microgreens from our garden",
      price: 28,
      image: scallopsImage,
      category: "Appetizers"
    },
    {
      id: 2,
      name: "Herb-Crusted Rack of Lamb",
      description: "Colorado lamb, rosemary crust, roasted root vegetables, red wine reduction",
      price: 42,
      image: lambImage,
      category: "Main Courses"
    },
    {
      id: 3,
      name: "Wild Mushroom Risotto",
      description: "Arborio rice, seasonal wild mushrooms, truffle oil, aged parmesan, fresh herbs",
      price: 24,
      image: risottoImage,
      category: "Main Courses"
    },
    {
      id: 4,
      name: "Seasonal Vegetable Tasting",
      description: "Chef's selection of seasonal vegetables, prepared three ways with herb oil",
      price: 22,
      image: scallopsImage,
      category: "Appetizers"
    },
    {
      id: 5,
      name: "Chocolate Tart",
      description: "Dark chocolate ganache, raspberry coulis, gold leaf, vanilla bean ice cream",
      price: 16,
      image: lambImage,
      category: "Desserts"
    },
    {
      id: 6,
      name: "Artisanal Cheese Selection",
      description: "Curated selection of local and imported cheeses with honey and candied walnuts",
      price: 18,
      image: risottoImage,
      category: "Desserts"
    }
  ];

  const categories = ["Appetizers", "Main Courses", "Desserts"];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-buttercup-primary text-cream-50">
        <div className="max-w-6xl mx-auto px-luxury-2 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-luxury tracking-wide">
            Our Menu
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-charcoal-500 max-w-3xl mx-auto leading-relaxed">
            A carefully curated selection of dishes celebrating seasonal ingredients and culinary artistry
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-luxury-8 px-luxury-2">
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-luxury-6">
              <h2 className="font-playfair text-4xl text-buttercup-dark text-center mb-luxury-4 font-normal">
                {category}
              </h2>
              
              <div className="grid gap-luxury-4">
                {menuItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group flex flex-col md:flex-row items-start bg-white p-luxury-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-800 hover:bg-cream-50/60"
                    >
                      <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden mb-luxury-2 md:mb-0 md:mr-luxury-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-luxury-2">
                          <h3 className="font-playfair text-2xl md:text-3xl text-sage-600 mb-2 md:mb-0 font-normal tracking-wide">
                            {item.name}
                          </h3>
                          <span className="font-source font-medium text-sage-600 text-xl md:text-2xl tracking-wider">
                            ${item.price}
                          </span>
                        </div>
                        
                        <p className="font-cormorant text-lg md:text-xl text-charcoal-500 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;