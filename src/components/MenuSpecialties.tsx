
export const MenuSpecialties = () => {
  const specialties = [
    {
      category: "APPETIZERS",
      items: [
        { name: "Foie Gras", description: "Pan-seared foie gras with cherry gastrique", price: "$28" },
        { name: "Oysters", description: "Fresh oysters with mignonette sauce", price: "$24" },
        { name: "Caviar Service", description: "Ossetra caviar with traditional accompaniments", price: "$85" }
      ]
    },
    {
      category: "MAIN COURSES",
      items: [
        { name: "Wagyu Beef", description: "Grilled wagyu with truffle butter", price: "$95" },
        { name: "Lobster Thermidor", description: "Maine lobster with cognac cream sauce", price: "$68" },
        { name: "Duck Breast", description: "Roasted duck with orange glaze", price: "$48" }
      ]
    },
    {
      category: "DESSERTS",
      items: [
        { name: "Chocolate Soufflé", description: "Dark chocolate soufflé with vanilla ice cream", price: "$18" },
        { name: "Crème Brûlée", description: "Classic vanilla crème brûlée", price: "$14" },
        { name: "Tarte Tatin", description: "Upside-down apple tart with caramel", price: "$16" }
      ]
    }
  ];

  return (
    <section
      className="py-20 parallax relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-brand-accent font-medium text-lg tracking-wider mb-2">
            What we offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enjoy Our Specialties
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((category, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-accent mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-white/20 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <span className="text-brand-accent font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
