import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import { StepComponentProps, StepItem } from 'types/step';
import { useQuizStore } from 'store/useQuizStore';
import useQuizStep from 'hooks/useStep';

// Components
import AnimteStep from 'components/Step/AnimteStep';
import QuizStep from 'components/Step/QuizStep';
import Button from 'components/atoms/Button';
import ProgressBar from 'components/ProgressBar';

const Solve = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quizType = location.state.quizType;
  const { currentQuestionIndex, nextQuestion, prevQuestion, quizDataList } = useQuizStore();

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

  // Synchronize currentStepIndex with currentQuestionIndex
  useEffect(() => {
    setCurrentStepIndex(currentQuestionIndex);
  }, [currentQuestionIndex, setCurrentStepIndex]);

  return (
    <div className="mx-auto flex min-h-[60rem] max-w-[70rem] flex-col rounded-[10px] bg-white p-[4rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)] md:px-[6rem]">
      <ProgressBar />

      <div className="flex flex-grow flex-col overflow-x-hidden md:px-[3rem]">
        <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.6 }}>
          <AnimteStep progressDirection={progressDirection} currentStepIndex={currentStepIndex}>
            <CurrentStep />
          </AnimteStep>
        </MotionConfig>
      </div>
      <div className="flex justify-center gap-[3rem]">
        <Button variant={isFirstStep ? 'ghost' : 'outline'} onClick={handleBack}>
          이전
        </Button>
        <Button
          variant={isValid ? 'primary' : 'ghost'}
          onClick={isLastStep ? () => navigate('/result', { replace: true }) : handleNext}
        >
          {isLastStep ? '제출' : '다음'}
        </Button>
      </div>
    </div>
  );
};

export default Solve;
