import { motion } from 'framer-motion';

interface CardProps {
  onClick: () => void;
  title: string;
  imageUrl: string;
  index: number;
}

const Card = ({ onClick, title, imageUrl, index }: CardProps) => {
  return (
    <motion.div
      className="group flex w-full max-w-[40rem] transform cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-1 items-center justify-start rounded-b-xl bg-gray-100 p-4">
        <h3 className="text-[2rem] font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
          {title}
        </h3>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="h-[25rem] w-full object-contain p-[4rem] transition-transform duration-300 group-hover:scale-105"
      />
    </motion.div>
  );
};

export default Card;
