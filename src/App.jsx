import Navbar from "./components/nav-bar";
import HeroSection from "./components/ui/hero-section";
import { lazy, Suspense } from "react";
import { Spinner } from "./components/ui/spinner";

const AboutMeSection = lazy(() => import("@/components/about-me-section"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const ProjectsSection = lazy(() => import("@/components/project-section"));
const ContactSection = lazy(() => import("@/components/contacts-section"));
function App() {
  return (
    <>
      <Navbar className="p-0" />
      <div className="p-10">
        <div style={{ position: "relative", zIndex: 0 }}>
          <HeroSection />
          <Suspense
            fallback={
              <div>
                <Spinner />
              </div>
            }
          >
            <AboutMeSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
