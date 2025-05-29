import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CommitsGrid } from "@/components/ui/commits-grid"; // Updated import path
import { SparklesCore } from "@/components/ui/sparkles"; // Updated import path
import React from "react";  

const Hero = () => {  const handleResumeDownload = () => {
    // Open resume in new tab - works on all hosting platforms
    const resumeUrl = '/Srikrishna%20Resume.pdf';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 
        min-h-screen: Sets minimum height to 100% of the viewport height.
        flex: Enables flexbox layout.
        items-center: Aligns flex items vertically to the center.
        justify-center: Aligns flex items horizontally to the center.
        relative: Sets position to relative, for absolute positioning of children.
        overflow-hidden: Hides content that overflows the element's bounds.
      */}
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      {/*
        absolute: Positions the element absolutely relative to the nearest positioned ancestor.
        inset-0: Sets top, right, bottom, and left to 0 (covers the parent).
        bg-gradient-to-b: Applies a background gradient from top to bottom.
        from-primary/5: Starts the gradient with the primary color at 5% opacity.
        to-transparent: Ends the gradient with a transparent color.
      */}
      <SparklesCore // Added SparklesCore component
        id="tsparticles"
        background="transparent"
        minSize={0.9}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute inset-0 z-0"
        particleColor="#ffffff" // Ensure this is set to your desired green
      />
      {/* <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" 
        // absolute: Positions the element absolutely.
        // top-20: Positions 20 units from the top.
        // left-10: Positions 10 units from the left.
        // w-64: Sets width to 64 units.
        // h-64: Sets height to 64 units.
        // rounded-full: Makes the element a circle.
        // bg-primary/5: Sets background to primary color with 5% opacity.
        // blur-3xl: Applies a large blur effect.
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }} // Animates x and y position.
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} // Defines animation transition properties.
      /> */}
 
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/*
          container: Applies container styles (max-width, padding - theme-dependent).
          mx-auto: Centers the container horizontally.
          px-4 sm:px-6 lg:px-8: Sets horizontal padding (responsive).
          relative: Sets position to relative.
          z-10: Sets z-index to 10 (stacks above elements with lower z-index).
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation state: transparent and slightly moved down.
          animate={{ opacity: 1, y: 0 }} // Target animation state: fully opaque and at original y position.
          transition={{ duration: 0.8 }} // Animation duration.
          className="max-w-4xl mx-auto text-center"
          // max-w-4xl: Sets maximum width to 4 extra large units.
          // mx-auto: Centers the element horizontally.
          // text-center: Centers text content.
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Initial animation state: transparent and slightly scaled down.
            animate={{ opacity: 1, scale: 1 }} // Target animation state: fully opaque and at original scale.
            transition={{ delay: 0.2 }} // Animation delay.
            className="mb-8"
            // mb-8: Adds margin to the bottom.
            >
            <CommitsGrid text="SRIKRISHNA" /> {/* Added CommitsGrid component with multiple symbols */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-6"
              // text-lg sm:text-xl: Sets text size (large on mobile, extra large on small screens and up).
              // text-muted-foreground: Sets text color to muted foreground color (theme-dependent).
              // max-w-2xl: Sets maximum width to 2 extra large units.
              // mx-auto: Centers the element horizontally.
              // mt-6: Adds margin to the top.
              initial={{ y: 20, opacity: 0 }} // Initial animation state.
              animate={{ y: 0, opacity: 1 }} // Target animation state.
              transition={{ delay: 0.5, duration: 0.7 }} // Animation delay and duration.
            >
              Full-stack Developer turning bold ideas into seamless digital products using modern web and AI technologies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state.
            animate={{ opacity: 1, y: 0 }} // Target animation state.
            transition={{ delay: 0.7 }} // Animation delay.
            className="flex flex-col sm:flex-row justify-center gap-4"
            // flex: Enables flexbox layout.
            // flex-col sm:flex-row: Stacks items vertically on mobile, horizontally on small screens and up.
            // justify-center: Aligns flex items horizontally to the center.
            // gap-4: Adds a gap between flex items.
          >
            <motion.a
              whileHover={{ scale: 1.05 }} // Scales up on hover.
              whileTap={{ scale: 0.95 }} // Scales down on tap/click.
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all"
              // group: Used for styling child elements on parent hover (e.g., ArrowRight icon).
              // inline-flex: Displays as an inline-level flex container.
              // items-center: Aligns flex items vertically to the center.
              // justify-center: Aligns flex items horizontally to the center.
              // gap-2: Adds a small gap between flex items (text and icon).
              // px-6: Sets horizontal padding.
              // py-3: Sets vertical padding.
              // text-sm: Sets text size to small.
              // font-medium: Sets font weight to medium.
              // text-primary-foreground: Sets text color to primary foreground color (theme-dependent, typically contrasts with primary bg).
              // bg-primary: Sets background color to primary color.
              // rounded-full: Makes the button fully rounded.
              // hover:bg-primary/90: Changes background color to primary with 90% opacity on hover.
              // transition-all: Applies transition effect to all animatable properties.
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {/*
                w-4: Sets width to 4 units.
                h-4: Sets height to 4 units.
                group-hover:translate-x-1: Moves the icon to the right by 1 unit when the parent 'group' is hovered.
                transition-transform: Applies transition effect to transform property.
              */}
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }} // Scales up on hover.
              whileTap={{ scale: 0.95 }} // Scales down on tap/click.
              onClick={handleResumeDownload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-transparent border border-primary text-primary rounded-full hover:bg-primary/10 transition-all"
              // inline-flex: Displays as an inline-level flex container.
              // items-center: Aligns flex items vertically to the center.
              // justify-center: Aligns flex items horizontally to the center.
              // gap-2: Adds a small gap between flex items (icon and text).
              // px-6: Sets horizontal padding.
              // py-3: Sets vertical padding.
              // text-sm: Sets text size to small.
              // font-medium: Sets font weight to medium.
              // bg-transparent: Sets background to transparent.
              // border: Adds a border.
              // border-primary: Sets border color to primary color.
              // text-primary: Sets text color to primary color.
              // rounded-full: Makes the button fully rounded.
              // hover:bg-primary/10: Changes background color to primary with 10% opacity on hover.
              // transition-all: Applies transition effect to all animatable properties.
            >
              <Download className="w-4 h-4" />
              {/*
                w-4: Sets width to 4 units.
                h-4: Sets height to 4 units.
              */}
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
