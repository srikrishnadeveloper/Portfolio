
import { useState, useEffect } from "react";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if user has reached the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Replace with actual resume file when available
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Srikrishna-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              SRIKRISHNA
            </span>
          </motion.div>          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium relative px-1 py-2 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            {/* Resume Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>
          </div>
          
          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
