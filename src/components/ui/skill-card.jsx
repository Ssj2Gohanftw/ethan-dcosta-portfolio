/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const SkillCard = ({ skills }) => {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img
            className="h-12 w-12 mx-auto mb-2"
            src={skill.imgSrc}
            alt={skill.skillName}
          />
          <div className="font-semibold text-lg mb-1">{skill.skillName}</div>
          <div className="text-sm text-white dark:text-white">
            {skill.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillCard;
