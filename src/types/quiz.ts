import { DIFFICULTY_LEVELS, QUIZ_COUNTS, QUIZ_TYPES } from 'constants/quizConfigOption';

export type QuizType = (typeof QUIZ_TYPES)[number];
export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number];
export type QuizCount = (typeof QUIZ_COUNTS)[number];

interface BaseQuizData {
  id: string;
  question: string;
  commentary: string;
}

type UserAnswer<T> = T | null;

export interface MultipleChoiceQuizData extends BaseQuizData {
  optionList: string[];
  answer: string;
  userAnswer: UserAnswer<string>;
}

export interface TrueFalseQuizData extends BaseQuizData {
  answer: boolean;
  userAnswer: UserAnswer<boolean>;
}

export interface FillBlankQuizData extends BaseQuizData {
  answer: string[];
  userAnswer: UserAnswer<string>;
}

export type QuizDataType = MultipleChoiceQuizData | TrueFalseQuizData | FillBlankQuizData;

export interface FetchQuizParams {
  quizTopic: string;
  difficulty: DifficultyLevel;
  quizCount: QuizCount;
  quizType: QuizType;
}
