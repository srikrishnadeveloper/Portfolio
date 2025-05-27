import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

const projects = [	{
		title: "One Stop Dev",
		description:
			"A comprehensive development platform with integrated tools and resources.",
		image: "/onestopdev.png",
		tech: ["React", "Node.js", "MongoDB"],
		github: "https://github.com/srikrishnadeveloper/ONESTOPDEV.git",
		demo: "https://github.com/srikrishnadeveloper/ONESTOPDEV.git",
	},
	{
		title: "Techwagon",
		description:
			"Techwagon delivers expert laundry solutions and maintenance services..",
		image: "/techwagon.png",
		tech: ["Wordpress", "PHP", "WooCommerce"],
		github: "https://github.com",
		demo: "https://demo.com",
	},	{
		title: "RESQUATO",
		description:
			"RESQUATO is a Flutter-based app offering on-demand vehicle services like fuel delivery, roadside assistance, and service booking. It connects users with providers for fast, reliable help.",
		image: "/resquato.jpg",
		tech: ["Flutter", "Dart", "Supabase"],
		github: "https://github.com/srikrishnadeveloper/RESQUATO",
		demo: "https://github.com/srikrishnadeveloper/RESQUATO",
	},	{
		title: "MY ARCHIVES",
		description:
			"Archive is a full-stack web app that lets users link and manage multiple Google Drive accounts from one dashboard. It optimizes storage by distributing files across accounts and supports file operations like upload, download, and delete.",
		image: "/myarchive.png",
		tech: ["React", "Node.js", "Supabase"],
		github: "https://github.com/srikrishnadeveloper/MYARCHIVES",
		demo: "https://demo.com",	},
];

const ProjectCard = ({
	project,
	index,
}: {
	project: typeof projects[0];
	index: number;
}) => {
	return (		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ 
				y: -10,
				transition: { 
					type: "spring", 
					stiffness: 600, 
					damping: 25,
					duration: 0.15,
					bounce: 0.2
				}
			}}
			className="glass-card overflow-hidden group"
			style={{
				transition: 'box-shadow 0.3s ease'
			}}
		>			<div className={`w-full overflow-hidden relative ${
				project.title === "RESQUATO" 
					? "aspect-[4/3]" // More suitable ratio for portrait phone screenshots
					: "aspect-video"
			}`}>				{project.title === "RESQUATO" ? (
					<motion.img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
					/>
				) : (
					<motion.img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>				)}{project.title === "One Stop Dev" ? (
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
						</div>
					</div>				) : project.title === "Techwagon" ? (
					// No hover icons for Techwagon
					null				) : project.title === "RESQUATO" ? (
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
						</div>
					</div>) : project.title === "MY ARCHIVES" ? (
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
						</div>
					</div>
				) : (
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
				)}
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
				</div>				{project.title !== "Techwagon" && (
					<div className="flex gap-4 pt-4">						<a							href={
								project.title === "One Stop Dev" 
									? "https://github.com/srikrishnadeveloper/ONESTOPDEV.git" 
									: project.title === "RESQUATO"
									? "https://github.com/srikrishnadeveloper/RESQUATO"
									: project.title === "MY ARCHIVES"
									? "https://github.com/srikrishnadeveloper/MYARCHIVES"
									: project.github
							}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
						>
							<Github className="w-4 h-4" />
							GitHub
						</a>						{project.title !== "Techwagon" && (
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
							>
								Demo
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</a>
						)}
					</div>
				)}
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
