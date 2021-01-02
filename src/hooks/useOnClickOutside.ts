/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.MutableRefObject<any>,
  handler: React.Dispatch<VoidFunction>
): void => {
  useEffect(() => {
    const listener = (event): Document => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
