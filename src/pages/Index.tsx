import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { ContactInfo } from "@/components/ContactInfo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <FeaturedMenu />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;