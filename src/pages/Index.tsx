import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import GallerySection from "@/components/GallerySection";
import AssessmentSection from "@/components/AssessmentSection";
import ProfileSection from "@/components/ProfileSection";
import FooterSection from "@/components/FooterSection";
import AppSidebar from "@/components/AppSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-16 transition-all duration-300">
        <HeroSection />
        <IntroductionSection />
        <CompanyProfileSection />
        <AboutSection />
        <SkillsSection />
        <ActivitiesSection />
        <GallerySection />
        <AssessmentSection />
        <ProfileSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
