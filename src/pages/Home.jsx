import { Navbar } from "../Components/Navbar.jsx";
import { ThemeToggle } from "../Components/ThemeToggle.jsx";
import { StarBackground } from "../Components/StarBackground.jsx";
import { HeroSection } from "../Components/HeroSection.jsx";
import { AboutSection } from "../Components/AboutSection.jsx";
import { SkillsSection } from "../Components/SkillsSection.jsx";
import { ProjectsSection } from "../Components/ProjectsSection.jsx";
import { ContactSection } from "../Components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
