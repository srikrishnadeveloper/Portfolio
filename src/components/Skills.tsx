
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
  },
  {
    name: "CSS",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-5 h-5" />,
  },
  {
    name: "Flutter",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "Dart",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "MongoDB",
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "Node.js",
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "React",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "Express",
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "Angular",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "SEO",
    icon: <Search className="w-5 h-5" />,
  },
  {
    name: "Next.js",
    icon: <Globe className="w-5 h-5" />,
  },
];

const Skill = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="glass-card px-5 py-3 rounded-[3px] text-base flex items-center gap-3"
  >
    {icon}
    {name}
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
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <Skill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
