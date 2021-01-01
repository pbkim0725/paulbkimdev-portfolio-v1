import { useState, useEffect } from 'react';

export function useMedia(): string {
  const [windowSize, setWindowSize] = useState<string | undefined>('');

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth >= 1440) {
        setWindowSize('desktop');
      } else if (window.innerWidth >= 1012) {
        setWindowSize('tabletL');
      } else if (window.innerWidth >= 768) {
        setWindowSize('tablet');
      } else {
        setWindowSize('mobile');
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
