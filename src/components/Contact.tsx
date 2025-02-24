
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
