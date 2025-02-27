
import { motion } from "framer-motion";

const certifications = [
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
    image: "/placeholder.svg",
  },
  {
    title: "LinkedIn Learning",
    issuer: "LinkedIn",
    date: "2023",
    image: "/placeholder.svg",
  },
  {
    title: "Advanced Cloud Computing",
    issuer: "AWS Academy",
    date: "2023",
    image: "/placeholder.svg",
  },
  {
    title: "Machine Learning Specialist",
    issuer: "Google AI",
    date: "2023",
    image: "/placeholder.svg",
  },
  {
    title: "Data Science Professional",
    issuer: "DataCamp",
    date: "2023",
    image: "/placeholder.svg",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -5 }}
                className="glass-card p-6 space-y-4"
              >
                <div className={`${index === 0 ? 'w-24 h-24' : 'w-16 h-16'} mx-auto mb-4`}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  {cert.recipient && (
                    <p className="text-xs text-muted-foreground mt-2">Issued to: {cert.recipient}</p>
                  )}
                  {cert.verify && (
                    <a 
                      href={cert.verify} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline mt-1 inline-block"
                    >
                      Verify Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
