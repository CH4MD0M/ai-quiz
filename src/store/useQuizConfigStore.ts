import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

import { DifficultyLevel, QuizCount, QuizType } from 'types/quiz';

export interface State {
  quizType: QuizType;
  difficultyLevel: DifficultyLevel;
  quizCount: QuizCount;
}

interface Actions {
  updateConfig: <K extends keyof State>(key: K, value: State[K]) => void;
  resetQuizConfigState: () => void;
}

const initialState: State = {
  quizType: '객관식',
  difficultyLevel: '보통',
  quizCount: 10,
};

export const useQuizConfigStore = create<State & Actions>()(
  devtools(
    persist(
      immer(set => ({
        ...initialState,
        updateConfig: (key, value) => set({ [key]: value }),
        resetQuizConfigState: () => set(initialState),
      })),
      {
        name: 'quiz-config',
      },
    ),
  ),
);
