import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  filledIcon?: React.ReactNode;
  level?: number;
  link?: string;
}
const SkillCard = ({
  name,
  icon,
  filledIcon,
  level,
  link
}: SkillCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return <motion.div className="relative group" whileHover={{
    scale: 1.05
  }} transition={{
    type: "spring",
    stiffness: 400,
    damping: 10
  }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <div className={cn("w-full h-full rounded-xl bg-background border border-primary/10", "relative overflow-hidden", "transition-all duration-300 ease-out", "hover:border-primary/20 hover:shadow-lg", "before:absolute before:inset-0 before:scale-0 before:opacity-0 before:transition-all before:duration-500", "before:bg-gradient-to-r before:from-primary/5 before:via-primary/10 before:to-primary/5", "hover:before:scale-100 hover:before:opacity-100", "group-hover:before:animate-pulse")}>
        {/* Dot grid background on hover */}
        <div className={cn("absolute inset-0 bg-grid-primary/[0.02] -z-10 transition-opacity duration-300", isHovered ? "opacity-100" : "opacity-0")} style={{
        backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: "20px 20px"
      }} />

        {/* Radial glow effect on hover */}
        <div className={cn("absolute -inset-px rounded-xl transition-opacity duration-300", "bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10", "opacity-0 group-hover:opacity-100")} />

        {/* Content container */}
        <div className="relative z-10 p-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-full bg-primary/10 transition-all duration-300">
              {isHovered && filledIcon ? filledIcon : icon}
            </span>
            <span className="font-medium">{name}</span>
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                
              </a>}
          </div>
          
          {level !== undefined && <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary" initial={{
            width: 0
          }} whileInView={{
            width: `${level}%`
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2
          }} />
            </div>}
        </div>
      </div>
    </motion.div>;
};
export default SkillCard;