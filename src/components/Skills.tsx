
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileJson,
  Github,
  Globe,
  Layout,
  Search,
  Server,
  Blocks,
  LayoutDashboard,
  Smartphone,
  Code,
  BoxSelect,
} from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "HTML",
    icon: <Layout className="w-5 h-5 text-orange-500/70" />,
    filledIcon: <Layout className="w-5 h-5 text-orange-500" />,
    level: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <BoxSelect className="w-5 h-5 text-blue-500/70" />,
    filledIcon: <BoxSelect className="w-5 h-5 text-blue-500" />,
    level: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-5 h-5 text-yellow-500/70" />,
    filledIcon: <FileJson className="w-5 h-5 text-yellow-500" />,
    level: 88,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Flutter",
    icon: <Code2 className="w-5 h-5 text-blue-400/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-blue-400" />,
    level: 80,
    link: "https://flutter.dev",
  },
  {
    name: "Dart",
    icon: <Code className="w-5 h-5 text-cyan-500/70" />,
    filledIcon: <Code className="w-5 h-5 text-cyan-500" />,
    level: 78,
    link: "https://dart.dev",
  },
  {
    name: "MongoDB",
    icon: <Database className="w-5 h-5 text-green-600/70" />,
    filledIcon: <Database className="w-5 h-5 text-green-600" />,
    level: 82,
    link: "https://www.mongodb.com",
  },
  {
    name: "Node.js",
    icon: <Server className="w-5 h-5 text-green-500/70" />,
    filledIcon: <Server className="w-5 h-5 text-green-500" />,
    level: 85,
    link: "https://nodejs.org",
  },
  {
    name: "React",
    icon: <Blocks className="w-5 h-5 text-blue-600/70" />,
    filledIcon: <Blocks className="w-5 h-5 text-blue-600" />,
    level: 87,
    link: "https://reactjs.org",
  },
  {
    name: "Express",
    icon: <Server className="w-5 h-5 text-gray-600/70" />,
    filledIcon: <Server className="w-5 h-5 text-gray-600" />,
    level: 83,
    link: "https://expressjs.com",
  },
  {
    name: "Angular",
    icon: <Code2 className="w-5 h-5 text-red-500/70" />,
    filledIcon: <Code2 className="w-5 h-5 text-red-500" />,
    level: 75,
    link: "https://angular.io",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5 text-gray-700/70" />,
    filledIcon: <Github className="w-5 h-5 text-gray-700" />,
    level: 90,
    link: "https://github.com",
  },
  {
    name: "SEO",
    icon: <Search className="w-5 h-5 text-blue-800/70" />,
    filledIcon: <Search className="w-5 h-5 text-blue-800" />,
    level: 80,
    link: "https://developers.google.com/search",
  },
  {
    name: "Next.js",
    icon: <LayoutDashboard className="w-5 h-5 text-black/70 dark:text-white/70" />,
    filledIcon: <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />,
    level: 85,
    link: "https://nextjs.org",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
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
              <SkillCard 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                filledIcon={skill.filledIcon}
                level={skill.level} 
                link={skill.link}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
