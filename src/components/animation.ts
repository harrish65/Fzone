// animation.ts
import type { Variants } from "framer-motion";

export const slideUpVariants: Variants = {
  hidden: { y: 50, opacity: 0 }, // Start slightly below with no opacity
  visible: {
    y: 0, // Final position
    opacity: 1, // Fully visible
    transition: {
      staggerChildren: 0.2,
      duration: 0.75, // Duration of the slide-up animation
      ease: "easeOut",
    },
  },
};

export const zoomInVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 }, // Start smaller with no opacity
  visible: {
    scale: 1, // Full size
    opacity: 1, // Fully visible
    transition: {
      staggerChildren: 0.2,
      duration: 0.75, // Duration of the zoom-in animation
      ease: "easeOut",
    },
  },
};
