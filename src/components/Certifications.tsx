import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowRight, ExternalLink, X } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";
import { useState } from "react";

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
    image: "certification/github.jpg",
    recipient: "srikirshna",
    verify: "https://www.credly.com/go/iwE5eTV8"
  },
  {
    title: "App Innovations Hackathon",
    issuer: "Hackathon Organization",
    date: "2024",
    image: "/certification/app innovations hackthon participate.jpeg",
  },
  {
    title: "Blender 3D Modeling",
    issuer: "Blender Foundation",
    date: "2023",
    image: "/certification/blender.jpg",
  },
  {
    title: "SEO Foundations",
    issuer: "LinkedIn Learning",
    date: "2023",
    image: "/certification/CertificateOfCompletion_SEO Foundations_page-0001.jpg",
  },
  {
    title: "JavaScript Certification",
    issuer: "LinkedIn Learning",
    date: "2023",
    image: "/certification/Javascript by linked.jpg",
  }
];

const CertificationCard = ({ 
  certification, 
  index, 
  onImageClick 
}: { 
  certification: CertificationProps; 
  index: number;
  onImageClick: (image: string, title: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group"
    >      <div className="aspect-video w-full overflow-hidden relative cursor-pointer" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onImageClick(certification.image, certification.title);
      }}>
        <motion.img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hover:brightness-110"
        /><div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 pointer-events-none">
          {certification.verify && (
            <div className="flex gap-4">
              <a
                href={certification.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors pointer-events-auto"
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ src: image, title });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
        >          <h2 className="text-3xl font-bold text-center mb-3">Certifications</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Professional credentials highlighting my expertise and continuous learning
          </p>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">            {certifications.map((certification, index) => (
              <CertificationCard 
                key={certification.title} 
                certification={certification}
                index={index}
                onImageClick={handleImageClick}
              />
            ))}          </div>
        </motion.div>
      </div>      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Enlarged image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              
              {/* Image title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
            
            {/* Background overlay - clicking closes modal */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={handleCloseModal}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
