import { useMutation } from '@tanstack/react-query';
import { fetchQuizQuestions } from 'api/fetchQuiz';
import { FetchQuizParams, QuizDataType } from 'types/quiz';

export const useQuizMutation = () => {
  return useMutation<QuizDataType[], Error, FetchQuizParams>({
    mutationFn: async quizConfigData => {
      const data = await fetchQuizQuestions(quizConfigData);
      return data;
    },
    throwOnError: true,
  });
};
