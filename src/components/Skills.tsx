
import { motion } from "framer-motion";
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
  ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    name: "HTML",
    icon: <Layout className="w-5 h-5 text-orange-500/70" />,
    filledIcon: <Layout className="w-5 h-5 text-orange-500" />,
    level: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "bg-gradient-to-br from-orange-500/20 to-orange-500/5",
    borderColor: "group-hover:border-orange-500/50",
    dotColor: "bg-orange-500"
  },
  {
    name: "CSS",
    icon: <BoxSelect className="w-5 h-5 text-blue-500/70" />,
    filledIcon: <BoxSelect className="w-5 h-5 text-blue-500" />,
    level: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "bg-gradient-to-br from-blue-500/20 to-blue-500/5",
    borderColor: "group-hover:border-blue-500/50",
    dotColor: "bg-blue-500"
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-5 h-5 text-yellow-500/70" />,
    filledIcon: <FileJson className="w-5 h-5 text-yellow-500" />,
    level: 88,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "bg-gradient-to-br from-yellow-500/20 to-yellow-500/5",
    borderColor: "group-hover:border-yellow-500/50",
    dotColor: "bg-yellow-500"
  },
  {
    name: "Flutter",
    icon: <Code2 className="w-5 h-5 text-blue-400/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-blue-400" />,
    level: 80,
    link: "https://flutter.dev",
    color: "bg-gradient-to-br from-blue-400/20 to-blue-400/5",
    borderColor: "group-hover:border-blue-400/50",
    dotColor: "bg-blue-400"
  },
  {
    name: "Dart",
    icon: <Code className="w-5 h-5 text-cyan-500/70" />,
    filledIcon: <Code className="w-5 h-5 text-cyan-500" />,
    level: 78,
    link: "https://dart.dev",
    color: "bg-gradient-to-br from-cyan-500/20 to-cyan-500/5",
    borderColor: "group-hover:border-cyan-500/50",
    dotColor: "bg-cyan-500"
  },
  {
    name: "MongoDB",
    icon: <Database className="w-5 h-5 text-green-600/70" />,
    filledIcon: <Database className="w-5 h-5 text-green-600" />,
    level: 82,
    link: "https://www.mongodb.com",
    color: "bg-gradient-to-br from-green-600/20 to-green-600/5",
    borderColor: "group-hover:border-green-600/50",
    dotColor: "bg-green-600"
  },
  {
    name: "Node.js",
    icon: <Server className="w-5 h-5 text-green-500/70" />,
    filledIcon: <Server className="w-5 h-5 text-green-500" />,
    level: 85,
    link: "https://nodejs.org",
    color: "bg-gradient-to-br from-green-500/20 to-green-500/5",
    borderColor: "group-hover:border-green-500/50",
    dotColor: "bg-green-500"
  },
  {
    name: "React",
    icon: <Blocks className="w-5 h-5 text-blue-600/70" />,
    filledIcon: <Blocks className="w-5 h-5 text-blue-600" />,
    level: 87,
    link: "https://reactjs.org",
    color: "bg-gradient-to-br from-blue-600/20 to-blue-600/5",
    borderColor: "group-hover:border-blue-600/50",
    dotColor: "bg-blue-600"
  },
  {
    name: "Express",
    icon: <Server className="w-5 h-5 text-gray-600/70" />,
    filledIcon: <Server className="w-5 h-5 text-gray-600" />,
    level: 83,
    link: "https://expressjs.com",
    color: "bg-gradient-to-br from-gray-600/20 to-gray-600/5",
    borderColor: "group-hover:border-gray-600/50",
    dotColor: "bg-gray-600"
  },
  {
    name: "Angular",
    icon: <Code2 className="w-5 h-5 text-red-500/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-red-500" />,
    level: 75,
    link: "https://angular.io",
    color: "bg-gradient-to-br from-red-500/20 to-red-500/5",
    borderColor: "group-hover:border-red-500/50",
    dotColor: "bg-red-500"
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5 text-gray-700/70" />,
    filledIcon: <Github className="w-5 h-5 text-gray-700" />,
    level: 90,
    link: "https://github.com",
    color: "bg-gradient-to-br from-gray-700/20 to-gray-700/5",
    borderColor: "group-hover:border-gray-700/50",
    dotColor: "bg-gray-700"
  },
  {
    name: "Next.js",
    icon: <LayoutDashboard className="w-5 h-5 text-black/70 dark:text-white/70" />,
    filledIcon: <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />,
    level: 85,
    link: "https://nextjs.org",
    color: "bg-gradient-to-br from-gray-900/20 to-gray-900/5 dark:from-white/20 dark:to-white/5",
    borderColor: "group-hover:border-gray-900/50 dark:group-hover:border-white/50",
    dotColor: "bg-gray-900 dark:bg-white"
  },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Card
      className={`group relative overflow-hidden h-44 border border-primary/10 transition-all duration-300 ${skill.borderColor}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.color}`}
      />
      
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
              className={`h-full ${skill.dotColor}`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Animated dots background for a subtle effect */}
      {hovered && (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 h-1 rounded-full absolute ${skill.dotColor}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: Math.random() * 0.7 + 0.3, 
                scale: Math.random() * 0.5 + 0.5 
              }}
              transition={{ 
                duration: Math.random() * 2 + 0.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
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
