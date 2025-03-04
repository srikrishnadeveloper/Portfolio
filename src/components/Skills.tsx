
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
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: <Layout className="w-5 h-5" />,
    level: 90,
  },
  {
    name: "CSS",
    icon: <Layout className="w-5 h-5" />,
    level: 85,
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-5 h-5" />,
    level: 88,
  },
  {
    name: "Flutter",
    icon: <Code2 className="w-5 h-5" />,
    level: 80,
  },
  {
    name: "Dart",
    icon: <Code2 className="w-5 h-5" />,
    level: 78,
  },
  {
    name: "MongoDB",
    icon: <Database className="w-5 h-5" />,
    level: 82,
  },
  {
    name: "Node.js",
    icon: <Server className="w-5 h-5" />,
    level: 85,
  },
  {
    name: "React",
    icon: <Code2 className="w-5 h-5" />,
    level: 87,
  },
  {
    name: "Express",
    icon: <Server className="w-5 h-5" />,
    level: 83,
  },
  {
    name: "Angular",
    icon: <Code2 className="w-5 h-5" />,
    level: 75,
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    level: 90,
  },
  {
    name: "SEO",
    icon: <Search className="w-5 h-5" />,
    level: 80,
  },
  {
    name: "Next.js",
    icon: <Globe className="w-5 h-5" />,
    level: 85,
  },
];

const Skill = ({ name, icon, level }: { name: string; icon: React.ReactNode; level: number }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass-card px-5 py-4 rounded-lg text-base flex flex-col items-center gap-3"
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="p-2 rounded-full bg-primary/10">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  </motion.div>
);

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
              <Skill key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
