import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { Modal, ModalName, OpenedModal } from 'types/modal';

interface State {
  openedModals: OpenedModal;
}

interface Actions {
  openModal: (modalName: ModalName, modal: Modal) => void;
  closeModal: (modalName: ModalName) => void;
}

const initialState: State = {
  openedModals: {},
};

export const useModalStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      ...initialState,
      openModal: (modalName, modal) =>
        set(
          state => {
            state.openedModals[modalName] = modal;
          },
          undefined,
          'modal/openModal',
        ),
      closeModal: (modalName: ModalName) =>
        set(
          state => {
            delete state.openedModals[modalName];
          },
          undefined,
          'modal/closeModal',
        ),
    })),
  ),
);
