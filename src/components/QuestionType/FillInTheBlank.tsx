import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { FillBlankQuizData } from 'types/quiz';
import { useQuizStore } from 'store/useQuizStore';
import { useDebounce } from 'hooks/useDebounce';

interface FillInTheBlankQuestionProps {
  quizData: FillBlankQuizData;
}

const FillInTheBlankQuestion = ({ quizData }: FillInTheBlankQuestionProps) => {
  const { question, userAnswer } = quizData;
  const { currentQuestionIndex, quizDataList, setUserAnswer } = useQuizStore();
  const [inputValue, setInputValue] = useState((userAnswer as string) || '');
  const debouncedInputValue = useDebounce(inputValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Update GLOBAL state when the debounced input value changes
  useEffect(() => {
    setUserAnswer(currentQuestionIndex, debouncedInputValue);
    inputRef.current?.focus();
  }, [debouncedInputValue]);

  // Synchronize LOCAL input value with global state when the question changes
  useEffect(() => {
    setInputValue((quizDataList[currentQuestionIndex].userAnswer as string) || '');
  }, [currentQuestionIndex]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{question}</h3>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="답변을 입력하세요"
        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default FillInTheBlankQuestion;
