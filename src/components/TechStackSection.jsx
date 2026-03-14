import skills from "../data/skills";
import tools from "../data/tools";
import SkillCard from "./ui/skill-card";

const TechStackSection = () => {
  const categories = [
    {
      title: "Frontend",
      description:
        "Languages and technologies for building user interfaces and client-side applications",
      items: skills.filter((skill) =>
        ["HTML", "CSS", "JavaScript"].includes(skill.skillName),
      ),
    },
    {
      title: "Backend",
      description:
        "Programming languages for server-side development and data processing",
      items: skills.filter((skill) =>
        ["Python", "Kotlin", "C", "Java"].includes(skill.skillName),
      ),
    },
    {
      title: "Frameworks",
      description:
        "Libraries and frameworks to accelerate development and provide structure",
      items: skills.filter((skill) => ["Next.js"].includes(skill.skillName)),
    },
    {
      title: "Tools",
      description:
        "Essential tools for development, version control, and productivity",
      items: tools.map((tool) => ({
        id: tool.id,
        skillName: tool.toolName,
        imgSrc: tool.imgSrc,
        description: tool.description,
      })),
    },
  ];

  return (
    <section id="skills" className="mt-10 mb-5">
      <h1 className="headings">My Tech Stack</h1>
      <p className="descriptions">
        I like working with various languages and frameworks as a developer and
        these languages and tools that help me create things and bring my ideas
        to life:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-sm text-white dark:text-white mb-4">
              {category.description}
            </p>
            <SkillCard skills={category.items} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
