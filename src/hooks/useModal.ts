import { useModalStore } from 'store/useModalStore';

export const useModal = () => {
  const openedModals = useModalStore(state => state.openedModals);
  const openModal = useModalStore(state => state.actions.openModal);
  const closeModal = useModalStore(state => state.actions.closeModal);

  return { openedModals, openModal, closeModal };
};
