import portfolioProjects from "../data/projects";
import ProjectCard from "./ui/project-card";
const ProjectsSection = () => {
  return (
    <section id="">
      <div>
        <h1 className="headings">PROJECTS</h1>
        <p className="descriptions"> The projects I've worked on:</p>
        <ProjectCard projects={portfolioProjects} />
      </div>
    </section>
  );
};
export default ProjectsSection;
