import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

import { StepProps } from 'types/topic';
import { topicVariant } from 'utils/framerVariants';
import useTopicSelection from 'hooks/useTopicSelection';

// Components
import { FetchErrorBoundary } from 'components/boundary/FetchErrorBoundary';
import MainTopicStep from 'components/topicStep/MainTopicStep';
import SubTopicStep from 'components/topicStep/SubTopicStep';

const steps: StepProps[] = [
  {
    title: 'Main Topic',
    Component: MainTopicStep,
  },
  {
    title: 'Sub Topic',
    Component: SubTopicStep,
  },
];

const Topic = () => {
  const {
    currentStepIndex,
    CurrentStep,
    isFirstStep,
    isLastStep,
    progressDirection,
    prevStep,
    nextStep,
  } = useTopicSelection(steps);

  const handleNext = () => {
    if (isLastStep) return;
    nextStep();
  };

  const handleBack = () => {
    if (isFirstStep) return;
    prevStep();
  };

  return (
    <FetchErrorBoundary>
      <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.6 }}>
        <div className="overflow-hidden">
          <AnimatePresence custom={progressDirection} mode="wait">
            <motion.div
              key={currentStepIndex}
              custom={progressDirection}
              variants={topicVariant}
              initial="initial"
              animate="normal"
              exit="exit"
              className="mx-auto my-[2rem] px-[4rem]"
            >
              <CurrentStep onClick={handleNext} onBack={handleBack} />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>
    </FetchErrorBoundary>
  );
};

export default Topic;
