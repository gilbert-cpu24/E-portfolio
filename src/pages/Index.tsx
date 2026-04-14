import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import IntroductionSection from "@/components/IntroductionSection";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import GallerySection from "@/components/GallerySection";
import AssessmentSection from "@/components/AssessmentSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TableOfContents />
      <IntroductionSection />
      <CompanyProfileSection />
      <AboutSection />
      <SkillsSection />
      <ActivitiesSection />
      <GallerySection />
      <AssessmentSection />
      <FooterSection />
    </div>
  );
};

export default Index;
