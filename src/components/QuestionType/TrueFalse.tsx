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
          className={`flex flex-1 items-center justify-center rounded-[10px] py-[3rem] text-[6rem] transition-all hover:shadow-[0_2px_4px_0_rgba(7,84,249,0.4)] ${
            userAnswer === true
              ? 'border-[1px] border-blue-200 text-blue-600 shadow-[0_2px_4px_0_rgba(7,84,249,0.4)]'
              : 'bg-white'
          }`}
        >
          <FaRegCircle />
        </button>
        <button
          onClick={() => handleAnswerClick(false)}
          className={`flex flex-1 items-center justify-center rounded-[10px] py-[3rem] text-[7rem] transition-all hover:shadow-[0_2px_4px_0_rgba(7,84,249,0.4)] ${
            userAnswer === false
              ? 'border-[1px] border-blue-200 text-blue-600 shadow-[0_2px_4px_0_rgba(7,84,249,0.4)]'
              : 'bg-white'
          }`}
        >
          <FaXmark />
        </button>
      </div>
    </>
  );
};

export default TrueFalseQuestion;
