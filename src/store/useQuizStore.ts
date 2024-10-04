import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware';

import { QuizDataType } from 'types/quiz';

interface State {
  quizDataList: QuizDataType[];
  currentQuestionIndex: number;
}

interface Actions {
  setQuizDataList: (questionList: QuizDataType[]) => void;
  setUserAnswer: (index: number, answer: string | boolean | null) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetQuizData: () => void;
}

const initialState: State = {
  quizDataList: [],
  currentQuestionIndex: 0,
};

export const useQuizStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,
        setQuizDataList: quizDataList => set({ quizDataList }),
        setUserAnswer: (index, answer) =>
          set(state => {
            state.quizDataList[index].userAnswer = answer;
          }),
        nextQuestion: () => {
          const { currentQuestionIndex, quizDataList } = get();
          if (currentQuestionIndex < quizDataList.length - 1) {
            set({ currentQuestionIndex: currentQuestionIndex + 1 });
          }
        },
        prevQuestion: () => {
          const { currentQuestionIndex } = get();
          if (currentQuestionIndex > 0) {
            set({ currentQuestionIndex: currentQuestionIndex - 1 });
          }
        },
        resetQuizData: () => set(initialState),
      })),
      {
        name: 'quiz-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
