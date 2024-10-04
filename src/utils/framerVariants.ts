import type { Variants } from 'framer-motion';

export const stepVariant: Variants = {
  initial: (progressDirection: number) => ({
    x: `${120 * progressDirection}%`,
    opacity: 0,
  }),
  normal: { x: 0, opacity: 1 },
  exit: (progressDirection: number) => ({
    x: `${-120 * progressDirection}%`,
    opacity: 0,
  }),
};
