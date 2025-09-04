import Navbar from "./components/nav-bar";
import HeroSection from "./components/ui/hero-section";
import { Separator } from "./components/ui/separator";
import BackGround from "./components/background";
import { lazy, Suspense } from "react";

const AboutMeSection = lazy(() => import("@/components/about-me-section"));
const SkillsSection = lazy(() => import("@/components/skills-section"));
const ToolsSection = lazy(() => import("@/components/tools-section"));
const ProjectsSection = lazy(() => import("@/components/project-section"));
const ContactSection = lazy(() => import("@/components/contacts-section"));
function App() {
  return (
    <>
      <Navbar className="p-0" />
      <div className="p-10">
        <BackGround />
        <div style={{ position: "relative", zIndex: 0 }}>
          <HeroSection />
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
