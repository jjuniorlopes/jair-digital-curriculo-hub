// Update this page (the content is just a fallback if you fail to update the page)

import ProfileHeader from "@/components/ProfileHeader";
import SkillsSection from "@/components/SkillsSection";
import AreaCardsSection from "@/components/AreaCardsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import PublicationsSection from "@/components/PublicationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-10">
      <ProfileHeader />
      <AreaCardsSection />
      <SkillsSection />
      <EducationSection />
      <AwardsSection />
      <PublicationsSection />
      <footer className="text-xs text-center mt-10 mb-4 text-gray-500">
        Página gerada digitalmente para divulgação profissional de Jair Costa Lopes Junior.
      </footer>
    </div>
  );
};

export default Index;
