"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiFirebase,
} from "react-icons/si";

const techStacks = [
  { id: "react", icon: <FaReact />, color: "text-blue-400" },
  { id: "typescript", icon: <SiTypescript />, color: "text-blue-600" },
  { id: "nextjs", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
  { id: "vite", icon: <SiVite />, color: "text-purple-500" },
  { id: "tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { id: "nodejs", icon: <FaNodeJs />, color: "text-green-500" },
  { id: "python", icon: <FaPython />, color: "text-yellow-400" },
  { id: "firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { id: "database", icon: <FaDatabase />, color: "text-gray-500" },
  { id: "git", icon: <FaGitAlt />, color: "text-orange-600" },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {techStacks.map((tech) => (
          <motion.div
            key={tech.id}
            className={`flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
          >
            <div className={`text-5xl ${tech.color} mb-3`}>{tech.icon}</div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {t(tech.id)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
