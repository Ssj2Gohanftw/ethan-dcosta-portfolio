import Navbar from "./components/nav-bar";
import HeroSection from "./components/ui/hero-section";
import AboutMeSection from "./components/about-me-section";
import SkillsSection from "./components/skills-section";
import ToolsSection from "./components/tools-section";
import ProjectsSection from "./components/project-section";
import ContactSection from "@/components/contacts-section";
import { Separator } from "./components/ui/separator";
// import BackGround from "./components/background";
// import BackGround from "./components/background";
// import { FollowCursorAnimation } from "./data/animations";
// import useDesktop from "./hooks/useDesktop";
function App() {
  // const isDesktop = useDesktop("(min-width:769px)");
  return (
    <>
      <Navbar className="p-0" />
      <div className="p-10">
        {/* <BackGround /> */}
        <div style={{ position: "relative", zIndex: 0 }}>
          <HeroSection />
          <Separator className="mt-10 mb-5" />
          <AboutMeSection />
          <Separator className="mt-10 mb-5" />
          <SkillsSection />
          <Separator className="mt-10 mb-5" />
          <ToolsSection />
          <Separator className="mt-10 mb-5" />
          <ProjectsSection />
          <Separator className="mt-10 mb-5" />
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default App;
