import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import scallopsImage from "@/assets/scallops.jpg";
import lambImage from "@/assets/lamb.jpg";
import risottoImage from "@/assets/risotto.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: heroBackground,
      alt: "Restaurant interior with elegant ambiance",
      category: "Interior"
    },
    {
      id: 2,
      src: scallopsImage,
      alt: "Pan-seared diver scallops beautifully plated",
      category: "Food"
    },
    {
      id: 3,
      src: lambImage,
      alt: "Herb-crusted rack of lamb with seasonal vegetables",
      category: "Food"
    },
    {
      id: 4,
      src: risottoImage,
      alt: "Wild mushroom risotto with truffle oil",
      category: "Food"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-luxury-8 px-luxury-2 bg-buttercup-primary text-cream-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-normal mb-luxury-2 tracking-wide">
              Gallery
            </h1>
            <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed">
              A visual journey through our culinary artistry and elegant ambiance
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-luxury-8 px-luxury-2 bg-cream-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-luxury-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-buttercup-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-buttercup-primary text-cream-50 px-3 py-1 rounded-full font-source text-xs font-medium">
                      {image.category}
                    </div>
                  </div>
                  <div className="p-luxury-2">
                    <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed font-light">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-luxury-6 px-luxury-2 bg-buttercup-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl text-buttercup-dark mb-luxury-2 font-normal tracking-wide">
              Experience The Buttercup
            </h2>
            <p className="font-cormorant text-lg md:text-xl text-charcoal-500 mb-luxury-3 font-light leading-relaxed">
              Book your table today and become part of our culinary story
            </p>
            <a
              href="/reservations"
              className="inline-block bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 px-luxury-3 py-luxury-2 font-source text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-buttercup-primary/30 rounded"
            >
              Make Reservation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;