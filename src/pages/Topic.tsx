import { useEffect } from 'react';

import { MotionConfig } from 'framer-motion';

import { StepItem } from 'types/step';
import { useQuizConfigStore } from 'store/useQuizConfigStore';
import { useSmoothScrollToTop } from 'hooks/useSmoothScrollToTop';
import useTopicStep from 'hooks/useStep';

// Components
import { FetchErrorBoundary } from 'components/boundary/FetchErrorBoundary';
import AnimteStep from 'components/Step/AnimteStep';
import MainTopicStep from 'components/Step/MainTopicStep';
import SubTopicStep from 'components/Step/SubTopicStep';

// StepComponent List
const steps: StepItem[] = [{ Component: MainTopicStep }, { Component: SubTopicStep }];

const Topic = () => {
  const { resetQuizConfigState } = useQuizConfigStore();

  const {
    currentStepIndex,
    CurrentStep,
    isFirstStep,
    isLastStep,
    progressDirection,
    goToPrevStep,
    goToNextStep,
  } = useTopicStep(steps);

  const handleNext = () => {
    if (!isLastStep) goToNextStep();
  };

  const handleBack = () => {
    if (!isFirstStep) goToPrevStep();
  };

  useEffect(() => {
    resetQuizConfigState();
  }, [resetQuizConfigState]);

  useSmoothScrollToTop([currentStepIndex]);

  return (
    <FetchErrorBoundary>
      <section className="mx-auto w-full max-w-[120rem]">
        <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.6 }}>
          <div className="w-full overflow-hidden">
            <AnimteStep progressDirection={progressDirection} currentStepIndex={currentStepIndex}>
              <CurrentStep onNext={handleNext} onBack={handleBack} />
            </AnimteStep>
          </div>
        </MotionConfig>
      </section>
    </FetchErrorBoundary>
  );
};

export default Topic;
