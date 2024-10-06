import type { Variants } from 'framer-motion';

export const stepVariant: Variants = {
  initial: (progressDirection: number) => ({
    x: `${100 * progressDirection}%`,
    opacity: 0,
  }),
  normal: { x: 0, opacity: 1 },
  exit: (progressDirection: number) => ({
    x: `${-100 * progressDirection}%`,
    opacity: 0,
  }),
};

// resultSummary
export const tagVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const quizListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.7,
      staggerChildren: 0.2,
    },
  },
};

export const quizItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
