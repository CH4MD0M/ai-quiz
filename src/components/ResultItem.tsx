import { useMemo } from 'react';
import { GoCheckCircleFill, GoXCircleFill } from 'react-icons/go';
import { MdInsertComment } from 'react-icons/md';

import { QuizDataType, QuizType } from 'types/quiz';

interface ResultItemListProps {
  quiz: QuizDataType;
  index: number;
  quizType: QuizType;
}

const ResultItemList = ({ quiz, index, quizType }: ResultItemListProps) => {
  const isCorrect = useMemo(() => {
    switch (quizType) {
      case '빈칸 맞추기':
        return (
          Array.isArray(quiz.answer) &&
          quiz.answer.some(
            answer => answer.toLowerCase() === (quiz.userAnswer as string).toLowerCase(),
          )
        );
      case 'OX':
      case '객관식':
      default:
        return quiz.answer === quiz.userAnswer;
    }
  }, [quiz, quizType]);

  const formatAnswer = (answer: string | boolean | string[]): string => {
    if (typeof answer === 'boolean') return answer ? 'O' : 'X';
    return Array.isArray(answer) ? answer.join(', ') : answer.toString();
  };

  return (
    <div
      className={`grid grid-cols-[1fr,10%] gap-[1rem] rounded-lg border-[2px] p-[2rem] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] ${
        isCorrect ? 'border-gray-50' : 'border-red-400'
      }`}
    >
      <div className="gap-[.5rem]">
        <div className="mb-[.8rem] flex items-start gap-[.5rem]">
          <span className="block font-semibold text-blue-600">Q{index + 1}.</span>
          <p>{quiz.question}</p>
        </div>
        <div className="flex items-start gap-[.5rem]">
          <span className="block font-semibold text-sky-400">A{index + 1}.</span>
          {isCorrect ? (
            <p className="text-gray-600">{formatAnswer(quiz.answer)}</p>
          ) : (
            <div className="flex flex-col items-start">
              <span className="line-through">
                {formatAnswer(quiz.userAnswer as string | boolean)}
              </span>
              <span className="text-red-500">{formatAnswer(quiz.answer)}</span>
            </div>
          )}
        </div>
        <div className="mt-[2.5rem] flex items-start gap-[.7rem] pl-[1rem]">
          <MdInsertComment className="text-[2rem] text-zinc-400" />
          <p className="text-gray-500">{quiz.commentary}</p>
        </div>
      </div>
      <div className="flex items-center justify-center text-[3.5rem]">
        {isCorrect ? (
          <GoCheckCircleFill className="text-green-500" />
        ) : (
          <GoXCircleFill className="text-red-500" />
        )}
      </div>
    </div>
  );
};

export default ResultItemList;
