import {
  FillBlankQuizData,
  MultipleChoiceQuizData,
  QuizDataType,
  QuizType,
  TrueFalseQuizData,
} from 'types/quiz';

// Components
import MultipleChoiceQuestion from 'components/QuestionType/MultipleChoice';
import TrueFalseQuestion from 'components/QuestionType/TrueFalse';
import FillInTheBlankQuestion from 'components/QuestionType/FillInTheBlank';

interface QuizStepProps {
  quizData: QuizDataType;
  quizType: QuizType;
}

const QuizStep = ({ quizData, quizType }: QuizStepProps) => {
  const renderQuestion = () => {
    switch (quizType) {
      case '객관식':
        return <MultipleChoiceQuestion quizData={quizData as MultipleChoiceQuizData} />;
      case 'OX':
        return <TrueFalseQuestion quizData={quizData as TrueFalseQuizData} />;
      case '빈칸 맞추기':
        return <FillInTheBlankQuestion quizData={quizData as FillBlankQuizData} />;
      default:
        return <div>지원되지 않는 질문 유형입니다.</div>;
    }
  };

  return <div className="my-[3rem]">{renderQuestion()}</div>;
};

export default QuizStep;
