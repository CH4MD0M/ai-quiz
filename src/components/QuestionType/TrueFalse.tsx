import { FaRegCircle } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

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
    <>
      <span className="text-[2.2rem] font-semibold text-indigo-700">
        Q{currentQuestionIndex + 1}
      </span>
      <h3 className="text-[2rem] font-normal">{question}</h3>
      <div className="mt-[3rem] flex space-x-4 text-gray-100">
        <button
          onClick={() => handleAnswerClick(true)}
          className={`flex flex-1 items-center justify-center rounded-[10px] py-[3rem] text-[6rem] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] transition-colors ${
            userAnswer === true ? 'text-blue-600' : 'bg-white hover:bg-gray-200'
          }`}
        >
          <FaRegCircle />
        </button>
        <button
          onClick={() => handleAnswerClick(false)}
          className={`flex flex-1 items-center justify-center rounded-[10px] py-[3rem] text-[7rem] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] transition-colors ${
            userAnswer === false ? 'text-blue-600' : 'bg-white hover:bg-gray-200'
          }`}
        >
          <FaXmark />
        </button>
      </div>
    </>
  );
};

export default TrueFalseQuestion;
