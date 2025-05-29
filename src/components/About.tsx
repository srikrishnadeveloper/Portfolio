import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { SparklesCore } from "./ui/sparkles"; // Added import

const About = () => {  const handleResumeDownload = () => {
    // Open resume in new tab - works on all hosting platforms
    const resumeUrl = '/Srikrishna%20Resume.pdf';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="section-padding relative"> {/* Added relative positioning */}
      {/* Added SparklesCore */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesabout"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <div className="container mx-auto relative"> {/* Added relative positioning for content to be above sparkles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img
                  src="/placeholder.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground">
I’m a full-stack developer focused on building clean, efficient, and user-friendly web applications. I combine technical precision with a practical design approach to ensure every project delivers functionality and a polished experience.
                </p>
              <p className="text-muted-foreground">
I specialize in building responsive, scalable web and mobile apps using React, Node.js, Supabase, Expo, and Flutter. I stay updated with new tools and prioritize clean, maintainable code that delivers real impact.


              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeDownload}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >                  <Download className="w-4 h-4" />
                  Open Resume
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.a>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/srikrishnadeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-muted/80 hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sri-krishna-web-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-muted/80 hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

