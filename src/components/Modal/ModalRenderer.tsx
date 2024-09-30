import { createPortal } from 'react-dom';

import { ModalName } from 'types/modal';
import { useModal } from 'hooks/useModal';

import ModalWrapper from './ModalWrapper';

const ModalRenderer = () => {
  const { openedModals, closeModal } = useModal();
  const element = document.getElementById('modal') as Element;

  const renderModal = Object.entries(openedModals).map(([modalName, modal]) => {
    const ModalComponent = modal.component;

    return (
      <ModalWrapper key={modalName} onClose={() => closeModal(modalName as ModalName)}>
        <ModalComponent onClose={() => closeModal(modalName as ModalName)} />
      </ModalWrapper>
    );
  });

  return createPortal(<>{renderModal}</>, element);
};

export default ModalRenderer;
