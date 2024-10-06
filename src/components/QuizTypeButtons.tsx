import { motion } from 'framer-motion';
import { State as QuizConfig, useQuizConfigStore } from 'store/useQuizConfigStore';

type ConfigKey = keyof QuizConfig;
type ConfigValue<K extends ConfigKey> = QuizConfig[K];

interface QuizTypeButtonsProps<K extends ConfigKey> {
  selectId: K;
  options: readonly ConfigValue<K>[];
  label: string;
}

const QuizTypeButtons = <K extends ConfigKey>({
  selectId,
  options,
  label,
}: QuizTypeButtonsProps<K>) => {
  const { updateConfig } = useQuizConfigStore();
  const value = useQuizConfigStore(state => state[selectId]);

  const handleSelect = (option: ConfigValue<K>) => {
    updateConfig(selectId, option);
  };
  return (
    <div className="mb-[1rem] flex flex-col">
      <label className="mb-[1rem] text-[1.7rem] font-medium text-neutral-400">{label}</label>
      <div className="flex flex-wrap justify-center gap-[3rem]">
        {options.map(option => (
          <motion.button
            key={option as string}
            className={`min-w-[10rem] rounded-[10px] px-[2rem] py-[1rem] text-[1.5rem] font-medium transition-colors ${
              value === option
                ? 'border-[2px] border-blue-500'
                : 'border-[2px] text-gray-700 hover:bg-blue-100'
            }`}
            onClick={() => handleSelect(option)}
            whileTap={{ scale: 0.95 }}
          >
            {option as string}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuizTypeButtons;
