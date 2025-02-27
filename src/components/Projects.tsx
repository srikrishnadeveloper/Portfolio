
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "One Stop Dev",
    description: "A comprehensive development platform with integrated tools and resources.",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Techwagon",
    description: "Modern solution for technical documentation and knowledge sharing.",
    image: "/placeholder.svg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "DataViz Pro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder.svg",
    tech: ["D3.js", "Vue.js", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "CloudSync",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/placeholder.svg",
    tech: ["AWS", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Assistant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: "/placeholder.svg",
    tech: ["TensorFlow", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
