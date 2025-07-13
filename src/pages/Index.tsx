import { HeroSection } from "@/components/HeroSection";
import { OurStorySection } from "@/components/OurStorySection";
import { FeaturedDishesSection } from "@/components/FeaturedDishesSection";
import { MenuPreviewSection } from "@/components/MenuPreviewSection";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { HoursContactSection } from "@/components/HoursContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OurStorySection />
        <FeaturedDishesSection />
        <MenuPreviewSection />
        <CustomerReviewsSection />
        <HoursContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;