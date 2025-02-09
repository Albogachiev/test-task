import { useEffect } from 'react';
import { useSeminarsStore, SeminarsState } from '../store/seminar';

export const useSeminars = (): SeminarsState => {
  const seminarsState = useSeminarsStore((state) => state);
  useEffect(() => {
    seminarsState.fetchSeminars();
  }, []);
  return seminarsState;
};
