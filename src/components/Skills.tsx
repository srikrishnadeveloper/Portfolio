
import React from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "bg-emerald-900",
    animationSpeed: 5.1,
    colors: [[0, 255, 255]]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
    color: "bg-black",
    animationSpeed: 3,
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ]
  },
  {
    title: "Other Skills",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Testing"],
    color: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]]
  }
];

const Skills = () => {
  return (
    <section className="section-padding bg-background" id="skills">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              color={category.color}
              animationSpeed={category.animationSpeed}
              colors={category.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  title, 
  skills, 
  color,
  animationSpeed,
  colors
}: {
  title: string;
  skills: string[];
  color: string;
  animationSpeed: number;
  colors: number[][];
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border border-black/[0.2] dark:border-white/[0.2] rounded-lg p-6 h-[24rem] relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner Icons */}
      <div className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black">+</div>
      <div className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black">+</div>
      <div className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black">+</div>
      <div className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black">+</div>
      
      {/* Canvas Effect */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-0 rounded-lg overflow-hidden"
        >
          <CanvasRevealEffect
            animationSpeed={animationSpeed}
            containerClassName={color}
            colors={colors}
            dotSize={2}
          />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className={`text-xl font-semibold mb-4 ${hovered ? "text-white" : ""}`}>
          {title}
        </h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`flex items-center ${hovered ? "text-white" : ""}`}
            >
              <span className="mr-2">•</span>
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Skills;
