export const motionPresets = {
  // Entrances
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },

  // Interactions
  tap: { whileTap: { scale: 0.98 } },
  hover: { whileHover: { scale: 1.02 } },

  // Spring configs
  spring: { type: "spring" as const, stiffness: 400, damping: 17 },
  springBouncy: { type: "spring" as const, stiffness: 600, damping: 15 },
  springSmooth: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const;
