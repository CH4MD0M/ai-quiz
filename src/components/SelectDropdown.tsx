import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';

import { State as QuizConfig, useQuizConfigStore } from 'store/useQuizConfigStore';
import { useDropdownToggle } from 'hooks/useDropdownToggle';

type ConfigKey = keyof QuizConfig;
type ConfigValue<K extends ConfigKey> = QuizConfig[K];

interface SelectProps<K extends ConfigKey> {
  selectId: K;
  options: readonly ConfigValue<K>[];
  label: string;
}

const SelectDropdown = <K extends ConfigKey>({ selectId, options, label }: SelectProps<K>) => {
  const { isOpen, setIsOpen, toggleOpen, ref } = useDropdownToggle<HTMLDivElement>();
  const { updateConfig } = useQuizConfigStore();
  const value = useQuizConfigStore(state => state[selectId]);

  const handleSelect = (option: ConfigValue<K>) => {
    updateConfig(selectId, option);
    setIsOpen(false);
  };

  return (
    <div className="mb-[1rem] flex flex-col">
      <label className="mb-[1rem] text-[1.7rem] font-medium text-neutral-400">{label}</label>
      <div className="relative" ref={ref}>
        <motion.div
          className="flex cursor-pointer items-center justify-between rounded-md border p-[1rem] text-[1.7rem]"
          onClick={toggleOpen}
          whileTap={{ scale: 0.98 }}
        >
          <span>{value as string}</span>
          <BsChevronDown
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg"
            >
              {options.map(option => (
                <motion.div
                  key={option}
                  className="cursor-pointer p-2 text-[1.5rem] hover:bg-[#e5ebfc]"
                  onClick={() => handleSelect(option)}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectDropdown;
