import { useState, useEffect } from 'react';

export const useModalAnimation = (onClose: () => void) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    setTimeout(onClose, 300);
  };

  return { isVisible, handleClose };
};
