import { instance } from './instance';
import { FetchQuizParams } from 'types/quiz';

export const fetchQuizQuestions = async (quizConfigData: FetchQuizParams) => {
  const { data } = await instance.post('/api/quiz', quizConfigData);
  return data;
};
