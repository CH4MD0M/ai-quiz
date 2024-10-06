import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import cn from 'utils/cn';

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-[8px] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: 'bg-[#6CA6F6] text-white hover:bg-blue-600 active:bg-blue-700',
        ghost: 'cursor-not-allowed bg-gray-200',
        outline: 'border-2 border-blue-500 bg-transparent text-blue-500',
      },
      size: {
        sm: 'h-[20px] px-[10px] text-[10px]',
        md: 'h-[40px] min-w-[120px] px-[20px] text-[15px]',
        lg: 'h-[50px] w-full text-[18px]',
      },
      state: {
        default: '',
        selected: '',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        state: 'selected',
        class: 'bg-gray-100',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      state: 'default',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  variant,
  size,
  state,
  leftIcon,
  rightIcon,
  children,
  className,
  ...attributes
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, state }), className)} {...attributes}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
