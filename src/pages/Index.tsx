import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { MenuSection } from "@/components/MenuSection";
import { AmbianceSection } from "@/components/AmbianceSection";
import { ChefSection } from "@/components/ChefSection";
import { ReservationSection } from "@/components/ReservationSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <MenuSection />
        <AmbianceSection />
        <ChefSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;