
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate developer focused on creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get in touch
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
