import { createStore } from 'utils/createStore';

interface State {
  mainTopic: string;
  subTopic: string;
}

interface Actions {
  actions: {
    setMainTopic: (selectedTopic: string) => void;
    setSubTopic: (selectedTopic: string) => void;
    resetState: () => void;
  };
}

const initialState: State = {
  mainTopic: '',
  subTopic: '',
};

export const useTopicStore = createStore<State & Actions>('topics', set => ({
  ...initialState,
  actions: {
    setMainTopic: selectedMainTopic =>
      set({ mainTopic: selectedMainTopic }, undefined, 'topic/setMainTopic'),
    setSubTopic: selectedSubTopic =>
      set({ subTopic: selectedSubTopic }, undefined, 'topic/setSubTopic'),

    resetState: () => set(initialState),
  },
}));

export const useTopicActions = () => useTopicStore(state => state.actions);
