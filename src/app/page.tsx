'use client';
import { useSeminars } from './shared/hooks/use-seminars';

export default function Home() {
  const { seminars, error, loading, removeSeminarId, editSeminar } = useSeminars();
  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() =>
          editSeminar('5', {
            title: 'sssss',
            description: 'oooo.',
            date: '00.00.2005',
            time: '11:11',
            photo: 'ht1/750/730',
          })
        }
      >
        Remove
      </button>
    </div>
  );
}
