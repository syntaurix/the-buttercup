
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";

const Menu = () => {
  const menuData = {
    "Big Bites": [
      {
        id: 1,
        name: "Pan-Seared Diver Scallops",
        description: "Atlantic diver scallops, cauliflower silk, pancetta crisps",
        price: 2800,
        image: scallopsImage
      },
      {
        id: 2,
        name: "Herb-Crusted Rack of Lamb",
        description: "Colorado lamb, rosemary crust, roasted root vegetables",
        price: 4200,
        image: lambImage
      },
      {
        id: 3,
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, seasonal wild mushrooms, truffle oil",
        price: 2400,
        image: risottoImage
      },
      {
        id: 4,
        name: "Grilled Salmon Fillet",
        description: "Fresh Atlantic salmon with lemon herb butter",
        price: 3200,
        image: scallopsImage
      },
      {
        id: 5,
        name: "Beef Tenderloin",
        description: "Prime cut with red wine reduction and garlic mash",
        price: 4800,
        image: lambImage
      },
      {
        id: 6,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry glaze",
        price: 3600,
        image: risottoImage
      }
    ],
    "Soft Drinks": [
      {
        id: 7,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed Valencia oranges",
        price: 600,
        image: scallopsImage
      },
      {
        id: 8,
        name: "Sparkling Water",
        description: "San Pellegrino with lime",
        price: 400,
        image: lambImage
      },
      {
        id: 9,
        name: "House Lemonade",
        description: "Fresh lemons with mint and honey",
        price: 500,
        image: risottoImage
      },
      {
        id: 10,
        name: "Iced Tea",
        description: "Earl Grey with seasonal fruits",
        price: 500,
        image: scallopsImage
      }
    ],
    "Bite": [
      {
        id: 11,
        name: "Truffle Arancini",
        description: "Crispy risotto balls with truffle oil",
        price: 1400,
        image: lambImage
      },
      {
        id: 12,
        name: "Beef Carpaccio",
        description: "Thinly sliced with capers and parmesan",
        price: 1600,
        image: risottoImage
      },
      {
        id: 13,
        name: "Oysters Rockefeller",
        description: "Fresh oysters with spinach and herbs",
        price: 1800,
        image: scallopsImage
      },
      {
        id: 14,
        name: "Foie Gras Terrine",
        description: "House-made with brioche and fig jam",
        price: 2200,
        image: lambImage
      }
    ],
    "Wines": [
      {
        id: 15,
        name: "Château Margaux 2015",
        description: "Bordeaux red wine, full-bodied",
        price: 38000,
        image: risottoImage
      },
      {
        id: 16,
        name: "Dom Pérignon 2012",
        description: "Champagne, crisp and elegant",
        price: 45000,
        image: scallopsImage
      },
      {
        id: 17,
        name: "Opus One 2018",
        description: "Napa Valley blend, rich and complex",
        price: 52000,
        image: lambImage
      },
      {
        id: 18,
        name: "Sancerre Loire Valley",
        description: "Sauvignon Blanc, fresh and mineral",
        price: 8500,
        image: risottoImage
      },
      {
        id: 19,
        name: "Barolo Brunate 2017",
        description: "Nebbiolo, structured and elegant",
        price: 18000,
        image: scallopsImage
      },
      {
        id: 20,
        name: "Chablis Premier Cru",
        description: "Chardonnay, crisp with mineral notes",
        price: 9500,
        image: lambImage
      }
    ],
    "Beer & Cider": [
      {
        id: 21,
        name: "Local IPA",
        description: "Hoppy craft beer with citrus notes",
        price: 800,
        image: risottoImage
      },
      {
        id: 22,
        name: "Belgian Wheat",
        description: "Smooth wheat beer with coriander",
        price: 900,
        image: scallopsImage
      },
      {
        id: 23,
        name: "Apple Cider",
        description: "Traditional dry cider from local orchards",
        price: 700,
        image: lambImage
      },
      {
        id: 24,
        name: "Stout Porter",
        description: "Rich dark beer with coffee notes",
        price: 900,
        image: risottoImage
      }
    ],
    "Cold Beverages": [
      {
        id: 25,
        name: "Iced Coffee",
        description: "Cold brew with vanilla cream",
        price: 600,
        image: scallopsImage
      },
      {
        id: 26,
        name: "Fresh Smoothie",
        description: "Seasonal fruits with yogurt",
        price: 800,
        image: lambImage
      },
      {
        id: 27,
        name: "Coconut Water",
        description: "Pure coconut water with lime",
        price: 500,
        image: risottoImage
      },
      {
        id: 28,
        name: "Green Tea",
        description: "Matcha iced tea with honey",
        price: 600,
        image: scallopsImage
      }
    ],
    "Hot Beverages": [
      {
        id: 29,
        name: "Espresso",
        description: "Double shot Italian roast",
        price: 400,
        image: lambImage
      },
      {
        id: 30,
        name: "Cappuccino",
        description: "Rich espresso with steamed milk foam",
        price: 600,
        image: risottoImage
      },
      {
        id: 31,
        name: "Hot Chocolate",
        description: "Belgian chocolate with whipped cream",
        price: 700,
        image: scallopsImage
      },
      {
        id: 32,
        name: "Herbal Tea",
        description: "Chamomile or peppermint selection",
        price: 500,
        image: lambImage
      }
    ],
    "Mocktails": [
      {
        id: 33,
        name: "Virgin Mojito",
        description: "Fresh mint, lime, and soda water",
        price: 800,
        image: risottoImage
      },
      {
        id: 34,
        name: "Berry Splash",
        description: "Mixed berries with sparkling water",
        price: 900,
        image: scallopsImage
      },
      {
        id: 35,
        name: "Cucumber Cooler",
        description: "Fresh cucumber with mint and lime",
        price: 700,
        image: lambImage
      },
      {
        id: 36,
        name: "Tropical Punch",
        description: "Pineapple, mango, and coconut blend",
        price: 1000,
        image: risottoImage
      }
    ],
    "Bottled Water": [
      {
        id: 37,
        name: "Evian Still",
        description: "Premium French natural spring water",
        price: 500,
        image: scallopsImage
      },
      {
        id: 38,
        name: "Perrier Sparkling",
        description: "Naturally carbonated mineral water",
        price: 600,
        image: lambImage
      }
    ]
  };

  const categories = Object.keys(menuData);
  const [activeTab, setActiveTab] = useState("Big Bites");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newTab: string) => {
    const currentIndex = categories.indexOf(activeTab);
    const newIndex = categories.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A carefully curated selection of dishes celebrating seasonal ingredients and culinary artistry
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="flex justify-center w-full max-w-full mx-auto mb-12 bg-transparent border-none p-0 h-auto overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 min-w-max px-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="relative bg-transparent text-neutral-600 hover:text-neutral-900 data-[state=active]:text-neutral-900 data-[state=active]:bg-transparent border-none shadow-none px-4 py-3 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary after:scale-x-0 after:transition-transform after:duration-200 data-[state=active]:after:scale-x-100 whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeTab}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 500, damping: 50 },
                    opacity: { duration: 0.1 }
                  }}
                  className="w-full"
                >
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {menuData[activeTab as keyof typeof menuData].map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-105">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-playfair text-md md:text-lg  font-normal leading-tight">
                                {item.name}
                              </h3>
                              <span className="text-brand-primary text-md ml-4 flex-shrink-0">
                                Rs.{item.price}
                              </span>
                            </div>
                            
                            <p className="text-xs md:text-sm text-neutral-600 ">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
