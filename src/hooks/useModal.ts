import { useModalActions, useModalStore } from 'store/useModalStore';

export const useModal = () => {
  const openedModals = useModalStore(state => state.openedModals);
  const { openModal, closeModal } = useModalActions();

  return { openedModals, openModal, closeModal };
};
