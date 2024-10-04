import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import { StepComponentProps, StepItem } from 'types/step';
import { useQuizStore } from 'store/useQuizStore';
import useQuizStep from 'hooks/useStep';

// Components
import AnimteStep from 'components/Step/AnimteStep';
import QuizStep from 'components/Step/QuizStep';
import Button from 'components/atoms/Button';

const Solve = () => {
  const location = useLocation();
  const quizType = location.state.quizType;
  const { currentQuestionIndex, nextQuestion, prevQuestion, quizDataList, resetQuizData } =
    useQuizStore();

  const isValid =
    quizDataList[currentQuestionIndex].userAnswer !== null &&
    quizDataList[currentQuestionIndex].userAnswer !== '';

  // StepComponent List
  const steps: StepItem[] = quizDataList.map(quizData => ({
    Component: (props: StepComponentProps) => (
      <QuizStep quizType={quizType} quizData={quizData} {...props} />
    ),
  }));

  const {
    currentStepIndex,
    setCurrentStepIndex,
    CurrentStep,
    isFirstStep,
    isLastStep,
    progressDirection,
    goToPrevStep,
    goToNextStep,
  } = useQuizStep(steps);

  const handleNext = () => {
    if (!isLastStep && isValid) {
      goToNextStep();
      nextQuestion();
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      goToPrevStep();
      prevQuestion();
    }
  };

  useEffect(() => {
    // Synchronize currentStepIndex with currentQuestionIndex
    setCurrentStepIndex(currentQuestionIndex);
  }, [currentQuestionIndex, setCurrentStepIndex]);

  useEffect(() => {
    // Reset quiz data when leaving the page
    return () => resetQuizData();
  }, [resetQuizData]);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.6 }}>
      <div className="mx-auto mt-[4rem] max-w-[70rem] overflow-x-hidden rounded-[10px] bg-white p-[3rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)] md:px-[6rem]">
        <AnimteStep progressDirection={progressDirection} currentStepIndex={currentStepIndex}>
          <CurrentStep />
        </AnimteStep>
        <div className="flex justify-center gap-[3rem]">
          <Button variant={isFirstStep ? 'ghost' : 'outline'} onClick={handleBack}>
            이전
          </Button>
          <Button variant={isValid ? 'primary' : 'ghost'} onClick={handleNext}>
            {isLastStep ? '제출' : '다음'}
          </Button>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Solve;
