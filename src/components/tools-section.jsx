/* eslint-disable no-unused-vars */
import tools from "../data/tools";
import { motion } from "motion/react";
const ToolsSection = () => {
  return (
    <>
      <p className="descriptions">
        In addition,There are a bunch of tools which assist me in developing
        things like:
      </p>
      <div class="card-container">
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            className="card"
            whileHover={{ scale: 1.25 }}
          >
            <img src={tool.imgSrc} alt={tool.toolName} />
            <div className="card-description">{tool.toolName}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default ToolsSection;
