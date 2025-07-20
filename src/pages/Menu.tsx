import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Big Bites");

  const menuData = {
    "Big Bites": [
      {
        id: 1,
        name: "Pan-Seared Diver Scallops",
        description: "Atlantic diver scallops, cauliflower silk, pancetta crisps",
        price: 28,
        image: scallopsImage
      },
      {
        id: 2,
        name: "Herb-Crusted Rack of Lamb",
        description: "Colorado lamb, rosemary crust, roasted root vegetables",
        price: 42,
        image: lambImage
      },
      {
        id: 3,
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, seasonal wild mushrooms, truffle oil",
        price: 24,
        image: risottoImage
      },
      {
        id: 4,
        name: "Grilled Salmon Fillet",
        description: "Fresh Atlantic salmon with lemon herb butter",
        price: 32,
        image: scallopsImage
      },
      {
        id: 5,
        name: "Beef Tenderloin",
        description: "Prime cut with red wine reduction and garlic mash",
        price: 48,
        image: lambImage
      },
      {
        id: 6,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry glaze",
        price: 36,
        image: risottoImage
      }
    ],
    "Soft Drinks": [
      {
        id: 7,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed Valencia oranges",
        price: 6,
        image: scallopsImage
      },
      {
        id: 8,
        name: "Sparkling Water",
        description: "San Pellegrino with lime",
        price: 4,
        image: lambImage
      },
      {
        id: 9,
        name: "House Lemonade",
        description: "Fresh lemons with mint and honey",
        price: 5,
        image: risottoImage
      },
      {
        id: 10,
        name: "Iced Tea",
        description: "Earl Grey with seasonal fruits",
        price: 5,
        image: scallopsImage
      }
    ],
    "Bite": [
      {
        id: 11,
        name: "Truffle Arancini",
        description: "Crispy risotto balls with truffle oil",
        price: 14,
        image: lambImage
      },
      {
        id: 12,
        name: "Beef Carpaccio",
        description: "Thinly sliced with capers and parmesan",
        price: 16,
        image: risottoImage
      },
      {
        id: 13,
        name: "Oysters Rockefeller",
        description: "Fresh oysters with spinach and herbs",
        price: 18,
        image: scallopsImage
      },
      {
        id: 14,
        name: "Foie Gras Terrine",
        description: "House-made with brioche and fig jam",
        price: 22,
        image: lambImage
      }
    ],
    "Wines": [
      {
        id: 15,
        name: "Château Margaux 2015",
        description: "Bordeaux red wine, full-bodied",
        price: 380,
        image: risottoImage
      },
      {
        id: 16,
        name: "Dom Pérignon 2012",
        description: "Champagne, crisp and elegant",
        price: 450,
        image: scallopsImage
      },
      {
        id: 17,
        name: "Opus One 2018",
        description: "Napa Valley blend, rich and complex",
        price: 520,
        image: lambImage
      },
      {
        id: 18,
        name: "Sancerre Loire Valley",
        description: "Sauvignon Blanc, fresh and mineral",
        price: 85,
        image: risottoImage
      },
      {
        id: 19,
        name: "Barolo Brunate 2017",
        description: "Nebbiolo, structured and elegant",
        price: 180,
        image: scallopsImage
      },
      {
        id: 20,
        name: "Chablis Premier Cru",
        description: "Chardonnay, crisp with mineral notes",
        price: 95,
        image: lambImage
      }
    ],
    "Beer & Cider": [
      {
        id: 21,
        name: "Local IPA",
        description: "Hoppy craft beer with citrus notes",
        price: 8,
        image: risottoImage
      },
      {
        id: 22,
        name: "Belgian Wheat",
        description: "Smooth wheat beer with coriander",
        price: 9,
        image: scallopsImage
      },
      {
        id: 23,
        name: "Apple Cider",
        description: "Traditional dry cider from local orchards",
        price: 7,
        image: lambImage
      },
      {
        id: 24,
        name: "Stout Porter",
        description: "Rich dark beer with coffee notes",
        price: 9,
        image: risottoImage
      }
    ],
    "Cold Beverages": [
      {
        id: 25,
        name: "Iced Coffee",
        description: "Cold brew with vanilla cream",
        price: 6,
        image: scallopsImage
      },
      {
        id: 26,
        name: "Fresh Smoothie",
        description: "Seasonal fruits with yogurt",
        price: 8,
        image: lambImage
      },
      {
        id: 27,
        name: "Coconut Water",
        description: "Pure coconut water with lime",
        price: 5,
        image: risottoImage
      },
      {
        id: 28,
        name: "Green Tea",
        description: "Matcha iced tea with honey",
        price: 6,
        image: scallopsImage
      }
    ],
    "Hot Beverages": [
      {
        id: 29,
        name: "Espresso",
        description: "Double shot Italian roast",
        price: 4,
        image: lambImage
      },
      {
        id: 30,
        name: "Cappuccino",
        description: "Rich espresso with steamed milk foam",
        price: 6,
        image: risottoImage
      },
      {
        id: 31,
        name: "Hot Chocolate",
        description: "Belgian chocolate with whipped cream",
        price: 7,
        image: scallopsImage
      },
      {
        id: 32,
        name: "Herbal Tea",
        description: "Chamomile or peppermint selection",
        price: 5,
        image: lambImage
      }
    ],
    "Mocktails": [
      {
        id: 33,
        name: "Virgin Mojito",
        description: "Fresh mint, lime, and soda water",
        price: 8,
        image: risottoImage
      },
      {
        id: 34,
        name: "Berry Splash",
        description: "Mixed berries with sparkling water",
        price: 9,
        image: scallopsImage
      },
      {
        id: 35,
        name: "Cucumber Cooler",
        description: "Fresh cucumber with mint and lime",
        price: 7,
        image: lambImage
      },
      {
        id: 36,
        name: "Tropical Punch",
        description: "Pineapple, mango, and coconut blend",
        price: 10,
        image: risottoImage
      }
    ],
    "Bottled Water": [
      {
        id: 37,
        name: "Evian Still",
        description: "Premium French natural spring water",
        price: 5,
        image: scallopsImage
      },
      {
        id: 38,
        name: "Perrier Sparkling",
        description: "Naturally carbonated mineral water",
        price: 6,
        image: lambImage
      }
    ]
  };

  const categories = Object.keys(menuData);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-4 tracking-wide">
            Discover Our Menu
          </h1>
          <p className="font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A carefully curated selection of dishes celebrating seasonal ingredients and culinary artistry
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Menu Navigation */}
          <div className="flex justify-center w-full max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4 bg-white rounded-lg p-2 shadow-sm border border-neutral-100">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md ${
                    activeCategory === category
                      ? "bg-brand-primary text-white shadow-md transform scale-105"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="w-full">
              {/* Category Header */}
              <div 
                key={activeCategory}
                className="bg-neutral-900 py-6 px-8 rounded-lg mb-8 transform transition-all duration-700 ease-out animate-fade-in"
              >
                <h2 className="font-playfair text-2xl md:text-3xl text-white text-center font-normal tracking-wide">
                  {activeCategory}
                </h2>
              </div>
              
              {/* Menu Items Grid */}
              <div 
                key={`${activeCategory}-items`}
                className="grid md:grid-cols-2 gap-6 opacity-0 translate-y-4 animate-fade-in-up"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
                }}
              >
                {(menuData[activeCategory as keyof typeof menuData] || []).map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-1"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${0.1 * index + 0.3}s forwards`,
                      opacity: 0,
                      transform: 'translateY(20px)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-110">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair text-lg md:text-xl text-brand-dark font-normal leading-tight">
                            {item.name}
                          </h3>
                          <span className="font-inter font-semibold text-brand-primary text-lg ml-4 flex-shrink-0">
                            ${item.price}
                          </span>
                        </div>
                        
                        <p className="font-inter text-sm md:text-base text-neutral-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
