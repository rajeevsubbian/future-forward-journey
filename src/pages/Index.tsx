import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AspirationsSection from "@/components/AspirationsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ReadingSection from "@/components/ReadingSection";
import EducationSection from "@/components/EducationSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AspirationsSection />
      <HobbiesSection />
      <EducationSection />
      <ReadingSection
        title="Supercurricular Reading"
        highlight=""
        description="What am I reading right now?"
        filterStatus="Currently Reading"
        ctaLabel="See all reading"
        ctaTo="/reading"
        showFooterNote={false}
        className="py-12 -mt-6"
      />
      <CurrentFocusSection />
      <Footer />
    </div>
  );
};

export default Index;
