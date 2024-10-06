import { motion } from 'framer-motion';
import { useQuizConfigStore } from 'store/useQuizConfigStore';
import { useQuizStore } from 'store/useQuizStore';

const ProgressBar = () => {
  const { quizCount } = useQuizConfigStore();
  const { currentQuestionIndex } = useQuizStore();

  const percentage = Math.min(((currentQuestionIndex + 1) / quizCount) * 100, 100);

  return (
    <div className="h-[2rem]">
      <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-4 rounded-full bg-[#6CA6F6]"
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div>
      </div>
      <p className="mt-[1rem] text-right text-[1.3rem] text-gray-400">{`${currentQuestionIndex + 1} / ${quizCount} `}</p>
    </div>
  );
};

export default ProgressBar;
