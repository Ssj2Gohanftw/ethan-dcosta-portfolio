/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
const SkillCard = ({ skills }) => {
  return (
    <div className="card-container">
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          className="card"
          whileHover={{ scale: 1.25 }}
        >
          <img className="icon" src={skill.imgSrc} alt={skill.skillName} />
          <div className="card-description">{skill.skillName}</div>
        </motion.div>
      ))}
    </div>
  );
};
export default SkillCard;
