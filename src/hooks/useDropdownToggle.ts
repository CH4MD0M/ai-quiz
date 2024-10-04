import { useState, useEffect, useRef, RefObject } from 'react';

interface DropdownToggle<T extends HTMLElement> {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleOpen: () => void;
  ref: RefObject<T>;
}

export const useDropdownToggle = <T extends HTMLElement = HTMLElement>(): DropdownToggle<T> => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return { isOpen, setIsOpen, toggleOpen, ref };
};
