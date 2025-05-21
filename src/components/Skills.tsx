
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { 
  Code2, 
  Database, 
  FileJson, 
  Github, 
  Layout, 
  Server, 
  Blocks, 
  LayoutDashboard, 
  Code, 
  BoxSelect,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ExternalLink } from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: <Layout className="w-5 h-5 text-orange-500/70" />,
    filledIcon: <Layout className="w-5 h-5 text-orange-500" />,
    level: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: [[255, 165, 0]],
  },
  {
    name: "CSS",
    icon: <BoxSelect className="w-5 h-5 text-blue-500/70" />,
    filledIcon: <BoxSelect className="w-5 h-5 text-blue-500" />,
    level: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: [[59, 130, 246]],
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-5 h-5 text-yellow-500/70" />,
    filledIcon: <FileJson className="w-5 h-5 text-yellow-500" />,
    level: 88,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: [[234, 179, 8]],
  },
  {
    name: "Flutter",
    icon: <Code2 className="w-5 h-5 text-blue-400/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-blue-400" />,
    level: 80,
    link: "https://flutter.dev",
    color: [[96, 165, 250]],
  },
  {
    name: "Dart",
    icon: <Code className="w-5 h-5 text-cyan-500/70" />,
    filledIcon: <Code className="w-5 h-5 text-cyan-500" />,
    level: 78,
    link: "https://dart.dev",
    color: [[6, 182, 212]],
  },
  {
    name: "MongoDB",
    icon: <Database className="w-5 h-5 text-green-600/70" />,
    filledIcon: <Database className="w-5 h-5 text-green-600" />,
    level: 82,
    link: "https://www.mongodb.com",
    color: [[22, 163, 74]],
  },
  {
    name: "Node.js",
    icon: <Server className="w-5 h-5 text-green-500/70" />,
    filledIcon: <Server className="w-5 h-5 text-green-500" />,
    level: 85,
    link: "https://nodejs.org",
    color: [[34, 197, 94]],
  },
  {
    name: "React",
    icon: <Blocks className="w-5 h-5 text-blue-600/70" />,
    filledIcon: <Blocks className="w-5 h-5 text-blue-600" />,
    level: 87,
    link: "https://reactjs.org",
    color: [[37, 99, 235]],
  },
  {
    name: "Express",
    icon: <Server className="w-5 h-5 text-gray-600/70" />,
    filledIcon: <Server className="w-5 h-5 text-gray-600" />,
    level: 83,
    link: "https://expressjs.com",
    color: [[75, 85, 99]],
  },
  {
    name: "Angular",
    icon: <Code2 className="w-5 h-5 text-red-500/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-red-500" />,
    level: 75,
    link: "https://angular.io",
    color: [[239, 68, 68]],
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5 text-gray-700/70" />,
    filledIcon: <Github className="w-5 h-5 text-gray-700" />,
    level: 90,
    link: "https://github.com",
    color: [[55, 65, 81]],
  },
  {
    name: "Next.js",
    icon: <LayoutDashboard className="w-5 h-5 text-black/70 dark:text-white/70" />,
    filledIcon: <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />,
    level: 85,
    link: "https://nextjs.org",
    color: [[0, 0, 0]],
  },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Card
      className="relative overflow-hidden h-44 border border-primary/10 hover:border-primary/20 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              colors={[skill.color[0]]}
              animationSpeed={0.8}
              containerClassName="bg-transparent dark:bg-transparent"
              dotSize={2}
              opacities={[0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.5, 0.6, 0.8, 1]}
              showGradient={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="p-6 flex flex-col h-full justify-between relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-full bg-primary/10 transition-all duration-300">
              {hovered ? skill.filledIcon : skill.icon}
            </span>
            <h3 className="font-medium">{skill.name}</h3>
          </div>
          
          {skill.link && (
            <a 
              href={skill.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary/70 hover:text-primary transition-colors"
              aria-label={`Learn more about ${skill.name}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        
        <div className="w-full">
          <div className="text-sm text-muted-foreground mb-2">
            Proficiency
          </div>
          <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-3">Skills</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            A showcase of my technical expertise and proficiency in various technologies
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
