import { MultipleChoiceQuizData } from 'types/quiz';
import { useQuizStore } from 'store/useQuizStore';

interface MultipleChoiceQuestionProps {
  quizData: MultipleChoiceQuizData;
}

const MultipleChoiceQuestion = ({ quizData }: MultipleChoiceQuestionProps) => {
  const { optionList, question, userAnswer } = quizData;
  const { currentQuestionIndex, setUserAnswer } = useQuizStore();

  const handleAnswerClick = (option: string) => {
    setUserAnswer(currentQuestionIndex, option);
  };

  return (
    <>
      <span className="text-[2.2rem] font-semibold text-indigo-700">
        Q{currentQuestionIndex + 1}
      </span>
      <h3 className="text-[2rem] font-normal">{question}</h3>
      <ul className="mt-[3rem] space-y-[1.6rem]">
        {optionList?.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`w-full rounded-[8px] px-[2rem] py-[1.5rem] text-left text-[1.5rem] transition-all ${
              userAnswer === option
                ? 'bg-blue-50 shadow-[0_2px_4px_0_rgba(7,84,249,0.4)]'
                : 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_0_rgba(7,84,249,0.4)]'
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MultipleChoiceQuestion;
