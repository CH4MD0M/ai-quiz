import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GoCheckCircleFill, GoXCircleFill } from 'react-icons/go';
import { MdTopic } from 'react-icons/md';

import { useTopicStore } from 'store/useTopicStore';
import { useQuizConfigStore } from 'store/useQuizConfigStore';
import { useQuizStore } from 'store/useQuizStore';
import {
  containerVariants,
  itemVariants,
  quizListVariants,
  quizItemVariants,
  tagVariants,
} from 'utils/framerVariants';

import CircleProgressBar from 'components/CircleProgressBar';
import ResultItemList from 'components/ResultItem';
import DifficultyLevelTag from 'components/atoms/DifficultyLevelTag';

const ResultPage = () => {
  const { quizDataList } = useQuizStore();
  const { subTopic: selectedTopic } = useTopicStore();
  const { difficultyLevel, quizType, quizCount } = useQuizConfigStore();

  const correctCount = useMemo(() => {
    if (!quizDataList) return 0;

    return quizDataList.filter(quiz => {
      return quizType === '빈칸 맞추기'
        ? (quiz.answer as string[]).includes(quiz.userAnswer as string)
        : quiz.answer === quiz.userAnswer;
    }).length;
  }, [quizDataList, quizType]);

  const score = (correctCount / quizCount) * 100;

  return (
    <div className="mx-auto my-[10rem] max-w-[900px] rounded-lg bg-white p-[2rem] shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)] md:p-[4rem]">
      <h1 className="text-center text-[3.5rem] font-bold">퀴즈 결과</h1>

      <div className="mb-[6rem] p-[3rem] pb-0">
        <motion.div
          className="mb-[6rem] flex items-center justify-center gap-[2rem] pb-[2rem]"
          variants={tagVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <DifficultyLevelTag level={difficultyLevel} />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-[1rem] rounded-[10px] bg-blue-200 px-[1.2rem] py-[.5rem] text-[2rem] text-blue-600"
          >
            <MdTopic />
            <span className="font-medium">{selectedTopic}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-around gap-[5rem]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <CircleProgressBar value={score} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-2 flex flex-col items-center gap-[1rem] text-nowrap text-[2rem]"
          >
            <GoCheckCircleFill className="text-[4rem] text-green-500" />
            <span className="inline-block">{correctCount} </span>
            <span className="inline-block text-gray-500">맞은 문제</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-2 flex flex-col items-center gap-[1rem] text-nowrap text-[2rem]"
          >
            <GoXCircleFill className="text-[4rem] text-red-500" />
            <span className="inline-block">{quizDataList.length - correctCount}</span>
            <span className="inline-block text-gray-500">틀린 문제</span>
          </motion.div>
        </motion.div>
      </div>

      <hr />

      <motion.div
        className="mt-[7rem] space-y-[3rem]"
        variants={quizListVariants}
        initial="hidden"
        animate="visible"
      >
        {quizDataList.map((quiz, index) => (
          <motion.div key={quiz.id} variants={quizItemVariants}>
            <ResultItemList key={quiz.id} quiz={quiz} index={index} quizType={quizType} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ResultPage;
