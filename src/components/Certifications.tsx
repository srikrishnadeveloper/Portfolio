
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  recipient?: string;
  verify?: string;
}

const certifications: CertificationProps[] = [
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "FEB 2025 - FEB 2028",
    image: "/lovable-uploads/044f5c7e-8a5d-4a02-8f05-aef22eeb08cc.png",
    recipient: "srikirshna",
    verify: "https://www.credly.com/go/iwE5eTV8"
  },
  {
    title: "CodSoft Internship",
    issuer: "CodSoft",
    date: "2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "LinkedIn Learning",
    issuer: "LinkedIn",
    date: "2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advanced Cloud Computing",
    issuer: "AWS Academy",
    date: "2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning Specialist",
    issuer: "Google AI",
    date: "2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Science Professional",
    issuer: "DataCamp",
    date: "2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  }
];

const CertificationCard = ({ certification }: { certification: CertificationProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative h-full overflow-hidden group",
        "before:absolute before:inset-0 before:rounded-xl before:border before:border-neutral-800/50",
        "before:transition-all before:duration-300",
        "hover:before:border-primary/30"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {/* Radial glow effect on hover */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 rounded-xl",
          "bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Dot grid background on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-grid-primary/[0.02] transition-opacity duration-300 rounded-xl",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Card content with border animation */}
      <div className={cn(
        "relative z-10 h-full rounded-xl border border-neutral-800/50 p-6",
        "flex flex-col overflow-hidden",
        "bg-background/80 dark:bg-background/30 backdrop-blur-sm",
        "transition-all duration-300 ease-out group-hover:border-primary/30",
        "dark:shadow-none shadow-sm group-hover:shadow-md",
        "after:absolute after:inset-0 after:rounded-xl after:opacity-0",
        "after:transition-opacity after:duration-500 group-hover:after:opacity-100",
        "after:bg-gradient-to-br after:from-neutral-50/5 after:via-primary/5 after:to-neutral-800/5 dark:after:from-neutral-900/5"
      )}>
        
        {/* Certificate image with hover animation */}
        <div className="flex justify-center mb-4 overflow-hidden rounded-lg h-32 sm:h-40 bg-neutral-100/10 dark:bg-neutral-900/20">
          <motion.div
            className="relative w-full h-full"
            initial={false}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              opacity: 1 
            }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence initial={false}>
              {certification.image ? (
                <motion.img
                  key={certification.title}
                  src={certification.image}
                  alt={certification.title}
                  className="object-contain w-full h-full p-2 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  key={`placeholder-${certification.title}`}
                  className="flex items-center justify-center w-full h-full bg-neutral-100 dark:bg-neutral-800 animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm text-neutral-400">No image available</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Certificate details with hover animation */}
        <motion.div 
          className="flex flex-col flex-grow space-y-1"
          initial={false}
          animate={{ 
            y: isHovered ? 0 : 3,
            opacity: isHovered ? 1 : 0.9 
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">
            {certification.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {certification.issuer}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            {certification.date}
          </p>
          
          {/* Conditionally render recipient and verification link */}
          <div className="mt-auto pt-3 space-y-1">
            {certification.recipient && (
              <p className="text-xs text-muted-foreground">
                Issued to: <span className="font-mono">{certification.recipient}</span>
              </p>
            )}
            {certification.verify && (
              <a 
                href={certification.verify} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-1 transition-all group"
              >
                Verify Certificate
                <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-3">Certifications</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Professional credentials highlighting my expertise and continuous learning
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <CertificationCard 
                key={certification.title} 
                certification={certification} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
