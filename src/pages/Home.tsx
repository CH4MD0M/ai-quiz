import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center p-[3rem] pb-0 text-center">
      <motion.div
        className="mb-[3rem] flex flex-col items-center justify-center p-4 text-[5rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-4 flex space-x-[1.5rem] font-bold">
          <motion.div variants={wordVariants}>CS</motion.div>
          <motion.div variants={wordVariants}>실력향상을</motion.div>
          <motion.div variants={wordVariants}>위한</motion.div>
        </motion.div>

        <motion.div className="mb-2 flex space-x-[1.2rem] font-bold">
          <motion.div variants={wordVariants}>가장</motion.div>
          <motion.div className="relative mx-2">
            <motion.div className="z-10" variants={wordVariants}>
              스마트한
            </motion.div>
            <motion.img
              src="https://res.cloudinary.com/dfdnn20e7/image/upload/v1728219007/quiz/underline_hqsrco.png"
              className="absolute bottom-5 -z-10"
              variants={underlineVariants}
            />
          </motion.div>
          <motion.div variants={wordVariants}>선택,</motion.div>
          <motion.div variants={wordVariants} className="font-bold text-blue-600">
            CSQuizHub
          </motion.div>
        </motion.div>
      </motion.div>

      <Link to="/select-topics">
        <Button
          variant="outline"
          size="md"
          className="border-2 border-gray-800 bg-white px-[5rem] py-[2rem] text-gray-800 transition-all hover:-translate-y-2 hover:bg-black hover:text-white"
        >
          시작하기
        </Button>
      </Link>

      <div className="mt-[9rem] max-w-[800px]">
        <img
          src="https://res.cloudinary.com/dfdnn20e7/image/upload/v1728219008/quiz/hero_qs4gaz.jpg"
          alt="hero-image"
        />
      </div>
    </section>
  );
};

export default Home;
