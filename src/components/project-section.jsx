import portfolioProjects from "../data/projects";
import ProjectCard from "./ui/project-card";
const ProjectsSection = () => {
  return (
    <section id="" className="mt-10 mb-5">
      <div>
        <h1 className="headings">Projects</h1>
        <p className="descriptions"> The projects I've worked on:</p>
        <ProjectCard projects={portfolioProjects} />
      </div>
    </section>
  );
};
export default ProjectsSection;
