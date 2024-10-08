import { cva, VariantProps } from 'class-variance-authority';
import { IoIosCheckbox } from 'react-icons/io';

import { DifficultyLevel } from 'types/quiz';
import cn from 'utils/cn';

const difficultyLevelVariants = cva(
  'flex items-center gap-[1rem] rounded-[10px] px-[1.2rem] py-[.5rem] text-[1.5rem] md:text-[2rem]',
  {
    variants: {
      level: {
        쉬움: 'bg-green-100 text-green-800',
        보통: 'bg-yellow-100 text-yellow-800',
        어려움: 'bg-red-100 text-red-800',
      },
    },
    defaultVariants: {
      level: '쉬움',
    },
  },
);

interface DifficultyLevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof difficultyLevelVariants> {
  level: DifficultyLevel;
}

const DifficultyLevelTag = ({ level, className, ...props }: DifficultyLevelProps) => {
  return (
    <div className={cn(difficultyLevelVariants({ level }), className)} {...props}>
      <IoIosCheckbox />
      {level}
    </div>
  );
};

export default DifficultyLevelTag;
