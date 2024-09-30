import { MODAL_NAMES } from 'constants/modalType';

export type ModalName = (typeof MODAL_NAMES)[keyof typeof MODAL_NAMES];

export type Modal = {
  component: React.ComponentType<{ onClose: () => void }>;
};

export type OpenedModal = Partial<Record<ModalName, Modal>>;
