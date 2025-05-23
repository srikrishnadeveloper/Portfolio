import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

const projects = [
	{
		title: "One Stop Dev",
		description:
			"A comprehensive development platform with integrated tools and resources.",
		image: "/placeholder.svg",
		tech: ["React", "Node.js", "MongoDB"],
		github: "https://github.com",
		demo: "https://demo.com",
	},
	{
		title: "Techwagon",
		description:
			"Modern solution for technical documentation and knowledge sharing.",
		image: "/placeholder.svg",
		tech: ["Next.js", "TypeScript", "Tailwind"],
		github: "https://github.com",
		demo: "https://demo.com",
	},
	{
		title: "DataViz Pro",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/placeholder.svg",
		tech: ["D3.js", "Vue.js", "Python"],
		github: "https://github.com",
		demo: "https://demo.com",
	},
	{
		title: "CloudSync",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
		image: "/placeholder.svg",
		tech: ["AWS", "Docker", "Kubernetes"],
		github: "https://github.com",
		demo: "https://demo.com",
	},
	{
		title: "AI Assistant",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		image: "/placeholder.svg",
		tech: ["TensorFlow", "Python", "FastAPI"],
		github: "https://github.com",
		demo: "https://demo.com",
	},
];

const ProjectCard = ({
	project,
	index,
}: {
	project: typeof projects[0];
	index: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -10 }}
			className="glass-card overflow-hidden group"
		>
			<div className="aspect-video w-full overflow-hidden relative">
				<motion.img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
					<div className="flex gap-4">
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors"
							aria-label="View GitHub repository"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors"
							aria-label="View live demo"
						>
							<ExternalLink className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
			<div className="p-6 space-y-4">
				<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
					{project.title}
				</h3>
				<p className="text-muted-foreground">{project.description}</p>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20"
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
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</a>
				</div>
			</div>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="section-padding relative">
			<div className="absolute inset-0 w-full h-full">
				<SparklesCore
					id="tsparticlesprojects"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#ffffff"
				/>
			</div>
			<div className="container mx-auto relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-3xl font-bold text-center mb-3">Projects</h2>
					<p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
						Showcasing my recent work and creative problem-solving abilities
					</p>
					<div className="grid gap-8 md:grid-cols-2">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
