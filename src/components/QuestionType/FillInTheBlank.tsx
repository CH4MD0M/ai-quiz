import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { FillBlankQuizData } from 'types/quiz';
import { useQuizStore } from 'store/useQuizStore';
import { useDebounce } from 'hooks/useDebounce';

interface FillInTheBlankQuestionProps {
  quizData: FillBlankQuizData;
}

const FillInTheBlankQuestion = ({ quizData }: FillInTheBlankQuestionProps) => {
  const { question, userAnswer } = quizData;
  const { currentQuestionIndex, setUserAnswer } = useQuizStore();
  const [inputValue, setInputValue] = useState((userAnswer as string) || '');
  const debouncedInputValue = useDebounce(inputValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Update GLOBAL state when the debounced input value changes
  useEffect(() => {
    if (debouncedInputValue !== userAnswer) {
      setUserAnswer(currentQuestionIndex, debouncedInputValue);
    }
    inputRef.current?.focus();
  }, [debouncedInputValue, currentQuestionIndex]);

  return (
    <>
      <span className="text-[2.2rem] font-semibold text-indigo-700">
        Q{currentQuestionIndex + 1}
      </span>
      <h3 className="text-[2rem] font-normal">{question}</h3>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="답변을 입력하세요"
        className="mt-[3rem] w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </>
  );
};

export default FillInTheBlankQuestion;
