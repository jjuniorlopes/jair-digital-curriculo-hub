
import ProfileHeader from "@/components/ProfileHeader";
import SkillsSection from "@/components/SkillsSection";
import AreaCardsSection from "@/components/AreaCardsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />
        <AreaCardsSection />
        <SkillsSection />
        <EducationSection />
        <AwardsSection />
        <PublicationsSection />
        <div id="contato">
          <ContactSection />
        </div>
        <footer className="text-xs text-center mt-10 mb-4 text-gray-500">
          Página gerada digitalmente para divulgação profissional de Jair Costa Lopes Junior.
        </footer>
      </div>
    </div>
  );
};

export default Index;
