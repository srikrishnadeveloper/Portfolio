import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

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

const CertificationCard = ({ certification, index }: { certification: CertificationProps; index: number }) => {
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
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          {certification.verify && (
            <div className="flex gap-4">
              <a
                href={certification.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors"
                aria-label="Verify certification"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{certification.title}</h3>
        <p className="text-muted-foreground">Issued by {certification.issuer}</p>
        <p className="text-sm text-muted-foreground font-mono">{certification.date}</p>
        
        {certification.recipient && (
          <div className="text-sm">
            <span className="text-muted-foreground">Issued to: </span>
            <span className="font-mono">{certification.recipient}</span>
          </div>
        )}
        
        {certification.verify && (
          <div className="flex gap-4 pt-2">
            <a
              href={certification.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              Verify Certificate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlescertifications"
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
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-3">Certifications</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Professional credentials highlighting my expertise and continuous learning
          </p>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <CertificationCard 
                key={certification.title} 
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
