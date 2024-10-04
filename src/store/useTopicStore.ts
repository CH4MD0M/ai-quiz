import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

interface State {
  mainTopic: string;
  subTopic: string;
}

interface Actions {
  setMainTopic: (selectedTopic: string) => void;
  setSubTopic: (selectedTopic: string) => void;
  resetTopicState: () => void;
}

const initialState: State = {
  mainTopic: '',
  subTopic: '',
};

export const useTopicStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      ...initialState,
      setMainTopic: selectedMainTopic =>
        set({ mainTopic: selectedMainTopic }, undefined, 'topic/setMainTopic'),
      setSubTopic: selectedSubTopic =>
        set({ subTopic: selectedSubTopic }, undefined, 'topic/setSubTopic'),
      resetTopicState: () => set(initialState),
    })),
  ),
);
