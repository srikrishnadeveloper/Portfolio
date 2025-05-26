"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SparklesCore } from "./ui/sparkles"; // Added import for SparklesCore

// Define the frontend skills data - 9 skills with SVG icons and specific brand colors
const frontendSkillsList = [
  {
    title: "HTML5",
    icon: "/html5.svg",
    colors: [[227, 79, 38]], // #E34F26
    hoverColor: "#E34F26",
    animationSpeed: 4.5,
    containerClassName: "bg-orange-900",
    dotSize: 8,
  },
  {
    title: "CSS",
    icon: "/css.svg",
    colors: [[102, 51, 153]], // #663399
    hoverColor: "#663399",
    animationSpeed: 3,
    containerClassName: "bg-purple-900",
    dotSize: 8,
  },  {
    title: "Tailwind CSS",
    icon: "/tailwindcss.svg",
    colors: [[6, 182, 212]], // #06B6D4
    hoverColor: "#06B6D4",
    animationSpeed: 4.2,
    containerClassName: "bg-cyan-700",
    dotSize: 8,
  },
  {
    title: "Bootstrap",
    icon: "/bootstrap.svg",
    colors: [[121, 82, 179]], // #7952B3
    hoverColor: "#7952B3",
    animationSpeed: 4.0,
    containerClassName: "bg-purple-700",
    dotSize: 8,
  },
  {
    title: "JavaScript",
    icon: "/javascript.svg",
    colors: [[247, 223, 30]], // #F7DF1E
    hoverColor: "#F7DF1E",
    animationSpeed: 5.1,
    containerClassName: "bg-yellow-600",
    dotSize: 8,
  },
  {
    title: "TypeScript",
    icon: "/typescript.svg",
    colors: [[49, 120, 198]], // #3178C6
    hoverColor: "#3178C6",
    animationSpeed: 3.8,
    containerClassName: "bg-blue-700",
    dotSize: 8,
  },
  {
    title: "React",
    icon: "/react.svg",
    colors: [[97, 218, 251]], // #61DAFB
    hoverColor: "#61DAFB",
    animationSpeed: 3.5,
    containerClassName: "bg-sky-600",
    dotSize: 8,
  },  {
    title: "Next.js",
    icon: "/nextdotjs.svg",
    colors: [[255, 255, 255]], // #ffffff
    hoverColor: "#ffffff",
    animationSpeed: 3,
    containerClassName: "bg-gray-800",
    dotSize: 8,
  },{
    title: "Vite",
    icon: "/vite.svg",
    colors: [[100, 108, 255]], // #646CFF
    hoverColor: "#646CFF",
    animationSpeed: 5,
    containerClassName: "bg-indigo-700",
    dotSize: 8,
  },
];

// Define the backend skills data - 9 skills with SVG icons and specific brand colors
const backendSkillsList = [
  {
    title: "Node.js",
    icon: "/nodedotjs.svg",
    colors: [[83, 175, 76]], // #53AF4C
    hoverColor: "#53AF4C",
    animationSpeed: 4.5,
    containerClassName: "bg-green-800",
    dotSize: 8,
  },  {
    title: "Express.js",
    icon: "/express.svg",
    colors: [[255, 255, 255]], // #ffffff
    hoverColor: "#ffffff",
    animationSpeed: 4,
    containerClassName: "bg-gray-800",
    dotSize: 8,
  },
  {
    title: "MongoDB",
    icon: "/mongodb.svg",
    colors: [[71, 162, 72]], // #47A248
    hoverColor: "#47A248",
    animationSpeed: 5.1,
    containerClassName: "bg-green-700",
    dotSize: 8,
  },
  {
    title: "PostgreSQL",
    icon: "/postgresql.svg",
    colors: [[51, 103, 145]], // #336791
    hoverColor: "#336791",
    animationSpeed: 3.8,
    containerClassName: "bg-blue-900",
    dotSize: 8,
  },
  {
    title: "Supabase",
    icon: "/supabase.svg",
    colors: [[62, 207, 142]], // #3ECF8E
    hoverColor: "#3ECF8E",
    animationSpeed: 3.5,
    containerClassName: "bg-emerald-700",
    dotSize: 8,
  },
  {
    title: "Firebase",
    icon: "/firebase.svg",
    colors: [[255, 202, 40]], // #FFCA28
    hoverColor: "#FFCA28",
    animationSpeed: 3.2,
    containerClassName: "bg-yellow-500",
    dotSize: 8,
  },
  {
    title: "Docker",
    icon: "/docker.svg",
    colors: [[33, 150, 243]], // #2196F3
    hoverColor: "#2196F3",
    animationSpeed: 3,
    containerClassName: "bg-blue-600",
    dotSize: 8,
  },
  {
    title: "GitHub",
    icon: "/github.svg",
    colors: [[255, 255, 255]], // #ffffff
    hoverColor: "#ffffff",
    animationSpeed: 4.8,
    containerClassName: "bg-gray-800",
    dotSize: 8,
  },  {
    title: "AWS",
    icon: "/aws.svg",
    colors: [[255, 159, 51]], // #FF9F33
    hoverColor: "#FF9F33",
    animationSpeed: 4,
    containerClassName: "bg-orange-600",
    dotSize: 8,
  },
];

// Define the other skills data - 6 skills with SVG icons and specific brand colors
const otherSkillsList = [
  {
    title: "React Native",
    icon: "/react.svg",
    colors: [[97, 218, 251]], // #61DAFB
    hoverColor: "#61DAFB",
    animationSpeed: 3.5,
    containerClassName: "bg-sky-600",
    dotSize: 8,
  },
  {
    title: "Flutter",
    icon: "/flutter.svg",
    colors: [[2, 125, 251]], // #027DFB
    hoverColor: "#027DFB",
    animationSpeed: 4.0,
    containerClassName: "bg-blue-600",
    dotSize: 8,
  },
  {
    title: "Expo",
    icon: "/expo.svg",
    colors: [[0, 0, 0]], // #000000
    hoverColor: "#ffffff",
    animationSpeed: 4.5,
    containerClassName: "bg-gray-900",
    dotSize: 8,
  },
  {
    title: "Vercel",
    icon: "/vercel.svg",
    colors: [[255, 255, 255]], // #ffffff
    hoverColor: "#ffffff",
    animationSpeed: 3.8,
    containerClassName: "bg-gray-800",
    dotSize: 8,
  },
  {
    title: "Netlify",
    icon: "/netlify.svg",
    colors: [[0, 173, 181]], // #00ADB5
    hoverColor: "#00ADB5",
    animationSpeed: 4.2,
    containerClassName: "bg-teal-600",
    dotSize: 8,
  },
  {
    title: "WordPress",
    icon: "/wordpress.svg",
    colors: [[33, 117, 155]], // #21759B
    hoverColor: "#21759B",
    animationSpeed: 3.6,
    containerClassName: "bg-blue-700",
    dotSize: 8,
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
        />      </div>

      {/* Skills Section - Frontend and Backend Side by Side */}
      <div className="py-20 flex flex-col items-center justify-center bg-transparent dark:bg-transparent w-full mx-auto relative">        {/* Section Headers - Desktop only */}
        <div className="hidden lg:flex lg:flex-row justify-between w-full max-w-7xl mb-12 gap-0">
          <h2 className="text-3xl font-bold text-center flex-1 text-black dark:text-white">Frontend Skills </h2>
          <h2 className="text-3xl font-bold text-center flex-1 text-black dark:text-white">Backend Skills</h2>
        </div>{/* Skills Container - Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 w-full max-w-7xl">{/* Frontend Skills Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2">            {/* Frontend Title - Mobile/Tablet */}
            <h2 className="text-2xl md:text-3xl lg:hidden font-bold text-center mb-6 text-black dark:text-white">Frontend Skills</h2>

            {/* Frontend Skills - Responsive grid layout */}{/* Mobile layout - 2 cards per row */}
            <div className="flex flex-wrap sm:hidden w-full max-w-xs gap-y-2">
              {frontendSkillsList.slice(0, 8).map((skill, index) => (
                <div key={skill.title} className="w-1/2">
                  <Card title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
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
                </div>
              ))}
              {/* Last card centered */}
              <div className="w-full flex justify-center mt-2">
                <Card title={frontendSkillsList[8].title} icon={frontendSkillsList[8].icon} hoverColor={frontendSkillsList[8].hoverColor}>
                  <CanvasRevealEffect
                    animationSpeed={frontendSkillsList[8].animationSpeed}
                    containerClassName={frontendSkillsList[8].containerClassName}
                    colors={frontendSkillsList[8].colors}
                    dotSize={frontendSkillsList[8].dotSize}
                  />
                  {frontendSkillsList[8].title === "Next.js" && (
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  )}
                </Card>
              </div>
            </div>            {/* Tablet/Desktop layout - 3 cards per row */}
            <div className="hidden sm:flex sm:flex-col gap-4">
              {/* First row - cards 0-2 */}
              <div className="flex flex-row justify-center w-full gap-4">
                {frontendSkillsList.slice(0, 3).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
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
              <div className="flex flex-row justify-center w-full gap-4">
                {frontendSkillsList.slice(3, 6).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
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
              <div className="flex flex-row justify-center w-full gap-4">
                {frontendSkillsList.slice(6, 9).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
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
          </div>          {/* Backend Skills Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2">            {/* Backend Title - Mobile/Tablet */}
            <h2 className="text-2xl md:text-3xl lg:hidden font-bold text-center mb-6 text-black dark:text-white">Backend Skills</h2>
            
            {/* Backend Skills - Responsive grid layout */}{/* Mobile layout - 2 cards per row */}
            <div className="flex flex-wrap sm:hidden w-full max-w-xs gap-y-2">
              {backendSkillsList.slice(0, 8).map((skill, index) => (
                <div key={skill.title} className="w-1/2">
                  <Card title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {(skill.title === "Express.js" || skill.title === "GitHub") && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                </div>
              ))}
              {/* Last card centered */}
              <div className="w-full flex justify-center mt-2">
                <Card title={backendSkillsList[8].title} icon={backendSkillsList[8].icon} hoverColor={backendSkillsList[8].hoverColor}>
                  <CanvasRevealEffect
                    animationSpeed={backendSkillsList[8].animationSpeed}
                    containerClassName={backendSkillsList[8].containerClassName}
                    colors={backendSkillsList[8].colors}
                    dotSize={backendSkillsList[8].dotSize}
                  />
                  {(backendSkillsList[8].title === "Express.js" || backendSkillsList[8].title === "GitHub") && (
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  )}
                </Card>
              </div>
            </div>            {/* Tablet/Desktop layout - 3 cards per row */}
            <div className="hidden sm:flex sm:flex-col gap-4">
              {/* First row - cards 0-2 */}
              <div className="flex flex-row justify-center w-full gap-4">
                {backendSkillsList.slice(0, 3).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {(skill.title === "Express.js" || skill.title === "GitHub") && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>              {/* Second row - cards 3-5 */}
              <div className="flex flex-row justify-center w-full gap-4">
                {backendSkillsList.slice(3, 6).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {(skill.title === "Express.js" || skill.title === "GitHub") && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>              {/* Third row - cards 6-8 */}
              <div className="flex flex-row justify-center w-full gap-4">
                {backendSkillsList.slice(6, 9).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {(skill.title === "Express.js" || skill.title === "GitHub") && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>            </div>
          </div>

        </div>        {/* Other Skills Section */}
        <div className="mt-8 lg:mt-16">          {/* Mobile title - shown only on mobile */}
          <div className="lg:hidden text-center mb-4">
            <h2 
              className="text-2xl md:text-3xl font-bold tracking-wide text-black dark:text-white"
            >
              Other Skills
            </h2>
          </div>

          {/* Desktop title and grid container */}
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <h2 
              className="text-3xl font-bold mb-6 tracking-wide text-black dark:text-white"
            >
              Other Skills
            </h2>
              {/* Desktop grid - 2x3 layout for 6 cards */}
            <div className="grid grid-cols-3 gap-4">
              {otherSkillsList.map((skill, index) => (
                <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                  <CanvasRevealEffect
                    animationSpeed={skill.animationSpeed}
                    containerClassName={skill.containerClassName}
                    colors={skill.colors}
                    dotSize={skill.dotSize}
                  />
                  {skill.title === "Vercel" && (
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            <div className="flex flex-wrap justify-center gap-y-2">              {/* First row - cards 0-1 */}
              <div className="flex flex-row justify-center w-full">
                {otherSkillsList.slice(0, 2).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {skill.title === "Vercel" && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>              {/* Second row - cards 2-3 */}
              <div className="flex flex-row justify-center w-full">
                {otherSkillsList.slice(2, 4).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {skill.title === "Vercel" && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>              {/* Third row - cards 4-5 */}
              <div className="flex flex-row justify-center w-full">
                {otherSkillsList.slice(4, 6).map((skill, index) => (
                  <Card key={skill.title} title={skill.title} icon={skill.icon} hoverColor={skill.hoverColor}>
                    <CanvasRevealEffect
                      animationSpeed={skill.animationSpeed}
                      containerClassName={skill.containerClassName}
                      colors={skill.colors}
                      dotSize={skill.dotSize}
                    />
                    {skill.title === "Vercel" && (
                      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  hoverColor,
  children,
}: {
  title: string,
  icon: string, // SVG path
  hoverColor: string, // Hex color string for hover state
  children?: React.ReactNode,
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Responsive size components with hover scale effect and high z-index
      className="group/canvas-card flex items-center justify-center relative border border-[#42434d] bg-white dark:bg-[#131316] transition-all duration-200 hover:scale-105 hover:z-50 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-52 lg:h-36 xl:w-56 xl:h-40 rounded-lg"
      style={{ borderWidth: '0.5px' }}
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
      </AnimatePresence>      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        {/* Icon container - moves up slightly on hover but starts slightly lower */}
        {/* Icon should be set to the translate-y-3.5 */}        <div className="text-center translate-y-1 sm:translate-y-3.5 group-hover/canvas-card:-translate-y-1 transition duration-200 flex items-center justify-center">
          <div className="h-10 w-10 relative">            
            {/* Default icon - black in light mode, white in dark mode */}
            <div 
              className="h-10 w-10 transition-all duration-200 absolute inset-0 bg-black dark:bg-white"
              style={{ 
                mask: `url(${icon}) no-repeat center`,
                maskSize: 'contain',
                WebkitMask: `url(${icon}) no-repeat center`,
                WebkitMaskSize: 'contain',
                opacity: hovered ? 0 : 1 
              }}
            />
            {/* Colored icon on hover */}
            <div 
              className="h-10 w-10 transition-all duration-200 absolute inset-0"
              style={{ 
                backgroundColor: hoverColor,
                mask: `url(${icon}) no-repeat center`,
                maskSize: 'contain',
                WebkitMask: `url(${icon}) no-repeat center`,
                WebkitMaskSize: 'contain',
                opacity: hovered ? 1 : 0 
              }}
            />
          </div>
        </div>
          {/* Skill name - appears below icon on hover for desktop, always visible on mobile */}
        <h2 className="dark:text-white text-center text-xs sm:text-sm opacity-100 sm:opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-2 sm:mt-3 font-medium transition duration-200">
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
