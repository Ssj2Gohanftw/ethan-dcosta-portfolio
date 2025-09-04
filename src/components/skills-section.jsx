import skills from "../data/skills";
import SkillCard from "./ui/skill-card";
const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="headings">SKILLS</h1>
      <p className="descriptions">
        I like working with various languages and frameworks as a developer and
        these languages help me create things and bring my ideas to life:
      </p>
      <SkillCard skills={skills} />
    </section>
  );
};
export default SkillsSection;
