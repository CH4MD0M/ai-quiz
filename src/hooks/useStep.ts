import { useState } from 'react';
import { StepItem } from 'types/step';

const useStep = (steps: StepItem[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressDirection, setProgressDirection] = useState(1);

  const goToPrevStep = () => {
    setCurrentStepIndex(index => Math.max(0, index - 1));
    setProgressDirection(-1);
  };

  const goToNextStep = () => {
    setCurrentStepIndex(index => Math.min(steps.length - 1, index + 1));
    setProgressDirection(1);
  };

  return {
    currentStepIndex,
    setCurrentStepIndex,
    CurrentStep: steps[currentStepIndex].Component,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    progressDirection,
    goToPrevStep,
    goToNextStep,
  };
};

export default useStep;
