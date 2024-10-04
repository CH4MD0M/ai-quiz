import { TrueFalseQuizData } from 'types/quiz';
import { useQuizStore } from 'store/useQuizStore';

interface TrueFalseQuestionProps {
  quizData: TrueFalseQuizData;
}

const TrueFalseQuestion = ({ quizData }: TrueFalseQuestionProps) => {
  const { question, userAnswer } = quizData;
  const { currentQuestionIndex, setUserAnswer } = useQuizStore();

  const handleAnswerClick = (option: boolean) => {
    setUserAnswer(currentQuestionIndex, option);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{question}</h3>
      <div className="flex space-x-4">
        <button
          onClick={() => handleAnswerClick(true)}
          className={`flex-1 rounded-lg py-3 transition-colors ${
            userAnswer === true ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          O
        </button>
        <button
          onClick={() => handleAnswerClick(false)}
          className={`flex-1 rounded-lg py-3 transition-colors ${
            userAnswer === false ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TrueFalseQuestion;
