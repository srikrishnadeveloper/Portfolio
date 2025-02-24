
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "Flutter", "Dart", "MongoDB",
  "Node.js", "React", "Express", "Angular", "GitHub", "SEO", "Next.js"
];

const Skill = ({ name }: { name: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="glass-card px-4 py-2 rounded-full text-sm"
  >
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
              <Skill key={skill} name={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
