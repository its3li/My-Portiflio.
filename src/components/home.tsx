import { useTheme } from "next-themes";
import Navigation from "./sections/Navigation";
import HeroSection from "./sections/HeroSection";
import ProjectsGrid from "./sections/ProjectsGrid";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function Home() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navigation
        isDarkMode={theme === "dark"}
        onThemeToggle={handleThemeToggle}
        menuItems={[
          { label: "Home", href: "#hero" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <main>
        <section id="hero">
          <HeroSection onExploreClick={() => scrollToSection("projects")} />
        </section>

        <section id="projects">
          <ProjectsGrid />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

export default Home;
