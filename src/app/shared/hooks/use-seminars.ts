import { useSeminarsStore } from '@/app/store/seminars';
import { useEffect } from 'react';

export const useSeminars = () => {
  const seminarsState = useSeminarsStore((state) => state);
  useEffect(() => {
    seminarsState.fetchSeminars();
  }, []);
  return seminarsState;
};
