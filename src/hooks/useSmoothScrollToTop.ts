import { DependencyList, useEffect } from 'react';

export const useSmoothScrollToTop = (dependencies: DependencyList = []) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, dependencies);
};
