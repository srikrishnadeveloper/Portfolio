"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SparklesCore } from "./ui/sparkles"; // Added import for SparklesCore

// Define the skills data - 9 skills with SVG icons
const skillsList = [
  {
    title: "HTML5",
    icon: "/html5.svg",
    colors: [[227, 79, 38]], // Orange
    animationSpeed: 4.5,
    containerClassName: "bg-orange-900",
  },
  {
    title: "CSS",
    icon: "/css.svg",
    colors: [[38, 77, 228]], // Blue
    animationSpeed: 3,
    containerClassName: "bg-blue-900",
  },
  {
    title: "Tailwind CSS",
    icon: "/tailwindcss.svg",
    colors: [[56, 189, 248]], // Tailwind blue
    animationSpeed: 4.2,
    containerClassName: "bg-cyan-700",
  },
  {
    title: "JavaScript",
    icon: "/javascript.svg",
    colors: [[240, 219, 79]], // Yellow
    animationSpeed: 5.1,
    containerClassName: "bg-yellow-800",
    dotSize: 2,
  },
  {
    title: "TypeScript",
    icon: "/typescript.svg",
    colors: [[49, 120, 198]], // TypeScript blue
    animationSpeed: 3.8,
    containerClassName: "bg-blue-800",
  },
  {
    title: "React",
    icon: "/react.svg",
    colors: [[97, 218, 251]], // Light Blue
    animationSpeed: 3.5,
    containerClassName: "bg-sky-700",
  },
  {
    title: "Next.js",
    icon: "/nextdotjs.svg",
    colors: [[0, 0, 0]], // Black/White depending on theme
    animationSpeed: 3,
    containerClassName: "bg-neutral-800",
    dotSize: 2,
  },
  {
    title: "Express.js",
    icon: "/express.svg",
    colors: [[104, 160, 99]], // Green
    animationSpeed: 4,
    containerClassName: "bg-green-800",
  },
  {
    title: "Vite",
    icon: "/vite.svg",
    colors: [[188, 51, 245], [252, 205, 60]], // Purple and Yellow gradient
    animationSpeed: 5,
    containerClassName: "bg-purple-800",
  },
];

function DemoWithCards() {
  return (
    // Added relative positioning to the parent section for SparklesCore
    <section id="skills" className="section-padding relative"> 
      {/* Added SparklesCore for background effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesskills" // Unique ID for this instance
          background="transparent" // Transparent background for the sparkles canvas
          minSize={0.6} // Minimum size of the particles
          maxSize={1.4} // Maximum size of the particles
          particleDensity={100} // Density of the particles
          className="w-full h-full" // Make sparkles fill the container
          particleColor="#ffffff" // Color of the particles
        />
      </div>      {/* 3×3 grid layout - 3 rows with 3 cards each */}
      <div className="py-20 flex flex-col items-center justify-center bg-transparent dark:bg-transparent w-full mx-auto relative">
        {/* First row - cards 0-2 */}
        <div className="flex flex-row">
          {skillsList.slice(0, 3).map((skill, index) => (
            <Card key={skill.title} title={skill.title} icon={skill.icon}>
              <CanvasRevealEffect
                animationSpeed={skill.animationSpeed}
                containerClassName={skill.containerClassName}
                colors={skill.colors}
                dotSize={skill.dotSize}
              />
              {skill.title === "Next.js" && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
            </Card>
          ))}
        </div>
        {/* Second row - cards 3-5 */}
        <div className="flex flex-row">
          {skillsList.slice(3, 6).map((skill, index) => (
            <Card key={skill.title} title={skill.title} icon={skill.icon}>
              <CanvasRevealEffect
                animationSpeed={skill.animationSpeed}
                containerClassName={skill.containerClassName}
                colors={skill.colors}
                dotSize={skill.dotSize}
              />
              {skill.title === "Next.js" && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
            </Card>
          ))}
        </div>
        {/* Third row - cards 6-8 */}
        <div className="flex flex-row">
          {skillsList.slice(6, 9).map((skill, index) => (
            <Card key={skill.title} title={skill.title} icon={skill.icon}>
              <CanvasRevealEffect
                animationSpeed={skill.animationSpeed}
                containerClassName={skill.containerClassName}
                colors={skill.colors}
                dotSize={skill.dotSize}
              />
              {skill.title === "Next.js" && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string,
  icon: string, // Changed to string for SVG path
  children?: React.ReactNode,
}) => {  const [hovered, setHovered] = React.useState(false);
  return (    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Fixed size components: 200px width, 150px height
      className="group/canvas-card flex items-center justify-center relative border border-[#42434d] bg-[#131316]"
      style={{ borderWidth: '0.5px', width: '200px', height: '150px' }}
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>      <div className="relative z-20 flex flex-col items-center justify-end h-full w-full pb-4">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img 
              src={icon} 
              alt={title} 
              className="h-10 w-10 text-white"
              style={{ filter: 'brightness(0) invert(1)' }} // Makes SVG white
            />
          </div>
        </div>
        <h2 className="dark:text-white text-center text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 absolute bottom-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default DemoWithCards;
