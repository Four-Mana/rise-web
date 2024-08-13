import { useState, useEffect } from 'react';

export function useHasPastHeight(height: number) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolledPast(scrollPosition > height);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return hasScrolledPast;
}
