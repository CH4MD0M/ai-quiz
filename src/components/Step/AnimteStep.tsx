import { AnimatePresence, motion } from 'framer-motion';

import { stepVariant } from 'utils/framerVariants';

interface AnimteStepProps {
  progressDirection: number;
  currentStepIndex: number;
  children: React.ReactNode;
}

const AnimteStep = ({ progressDirection, currentStepIndex, children }: AnimteStepProps) => {
  return (
    <AnimatePresence custom={progressDirection} mode="wait">
      <motion.div
        key={currentStepIndex}
        custom={progressDirection}
        variants={stepVariant}
        initial="initial"
        animate="normal"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimteStep;
