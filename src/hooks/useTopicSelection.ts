import { useState } from 'react';
import { StepComponentProps, StepProps } from 'types/topic';

interface UseTopicSelectionReturn {
  currentStepIndex: number;
  CurrentStep: React.ComponentType<StepComponentProps>;
  isFirstStep: boolean;
  isLastStep: boolean;
  progressDirection: number;
  prevStep: () => void;
  nextStep: () => void;
}

const useTopicSelection = (steps: StepProps[]): UseTopicSelectionReturn => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressDirection, setProgressDirection] = useState(1);

  const prevStep = () => {
    setCurrentStepIndex(index => (index <= 0 ? 0 : index - 1));
    setProgressDirection(-1);
  };

  const nextStep = () => {
    setCurrentStepIndex(index => (index >= steps.length - 1 ? index : index + 1));
    setProgressDirection(1);
  };

  return {
    currentStepIndex,
    CurrentStep: steps[currentStepIndex].Component,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    progressDirection,
    prevStep,
    nextStep,
  };
};

export default useTopicSelection;
