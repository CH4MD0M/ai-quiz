import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import { useModalAnimation } from 'hooks/useModalAnimation';

interface ModalWrapperProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalWrapper = ({ children, onClose }: ModalWrapperProps) => {
  const { isVisible, handleClose } = useModalAnimation(onClose);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleContainerClick}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute bottom-0 rounded-[10px] bg-white p-[2rem] shadow-lg md:static md:p-[3rem]"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <div className="mb-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="text-[3rem] text-gray-500 hover:text-gray-700"
                >
                  <IoMdClose />
                </motion.button>
              </div>
              <div>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
