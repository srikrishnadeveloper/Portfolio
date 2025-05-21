
import React, { useRef, useEffect } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      if (canvas && container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    // Initial size
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation
    let animationFrame: number;
    
    const drawEffect = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isHovering) {
        // Draw radial gradient
        const gradient = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          canvas.width * 0.6
        );
        
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw dot grid with fade effect
        ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
        const gridSize = 20;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
            const maxDistance = 100;
            
            if (distance < maxDistance) {
              const size = 1 * (1 - distance / maxDistance);
              ctx.beginPath();
              ctx.arc(x, y, size, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
      
      animationFrame = requestAnimationFrame(drawEffect);
    };
    
    drawEffect();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <motion.div 
      className="relative group" 
      whileHover={{
        scale: 1.05
      }} 
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }} 
      onHoverStart={() => setIsHovered(true)} 
      onHoverEnd={() => setIsHovered(false)}
      ref={containerRef}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full rounded-xl -z-10"
      />
      
      <div className={cn(
        "w-full h-full rounded-xl bg-background border border-primary/10", 
        "relative overflow-hidden", 
        "transition-all duration-300 ease-out", 
        "hover:border-primary/20 hover:shadow-lg",
        "before:absolute before:inset-0 before:scale-0 before:opacity-0 before:transition-all before:duration-500", 
        "before:bg-gradient-to-r before:from-primary/5 before:via-primary/10 before:to-primary/5", 
        "hover:before:scale-100 hover:before:opacity-100", 
        "group-hover:before:animate-pulse"
      )}>
        {/* Content container */}
        <div className="relative z-10 p-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-full bg-primary/10 transition-all duration-300">
              {isHovered && filledIcon ? filledIcon : icon}
            </span>
            <span className="font-medium">{name}</span>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          
          {level !== undefined && (
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                initial={{
                  width: 0
                }} 
                whileInView={{
                  width: `${level}%`
                }} 
                viewport={{
                  once: true
                }} 
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2
                }} 
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
