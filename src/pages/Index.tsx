
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OpeningHours } from "@/components/OpeningHours";
import { DishesOfTheWeek } from "@/components/DishesOfTheWeek";
import { MenuSpecialties } from "@/components/MenuSpecialties";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OpeningHours />
        <DishesOfTheWeek />
        <MenuSpecialties />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
