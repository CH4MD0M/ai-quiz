import { createStore } from 'utils/createStore';

import { Modal, ModalName, OpenedModal } from 'types/modal';

interface State {
  openedModals: OpenedModal;
}

interface Actions {
  actions: {
    openModal: (modalName: ModalName, modal: Modal) => void;
    closeModal: (modalName: ModalName) => void;
  };
}

const initialState: State = {
  openedModals: {},
};

export const useModalStore = createStore<State & Actions>(set => ({
  ...initialState,
  actions: {
    openModal: (modalName, modal) =>
      set(state => {
        state.openedModals[modalName] = modal;
      }),
    closeModal: (modalName: ModalName) =>
      set(state => {
        delete state.openedModals[modalName];
      }),
  },
}));
