'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/shared/container';
import { useSeminars } from '@/shared/hooks/use-seminars';
import { cn } from '@/shared/lib/utils';
import { useState } from 'react';
import ModalWindow from '../modal-window/page';

export default function SeminarList() {
  /* хук для семинаров*/
  const { seminars, error, loading } = useSeminars();
  const [open, setOpen] = useState(false);
  const [seminarClickedId, setSeminarClickedId] = useState<string>('');
  const arrForSkeleton = Array.from({ length: 8 });

  /* функция открывающая модальное окно */
  const handleClick = (id: string) => {
    setOpen(true);
    setSeminarClickedId(id);
  };

  if (error) {
    return <h1>Произошла ошибка...</h1>;
  }

  return (
    <Container>
      <div className={cn('p-7 mx-auto flex-wrap flex gap-4 justify-center')}>
        {loading
          ? arrForSkeleton.map((_, index) => (
              <Skeleton key={index} className='w-[250px] h-[300px] rounded-md' />
            ))
          : seminars.map((seminar) => (
              <Card key={seminar.id} className={cn('max-w-[250px] shadow-lg shadow-red-600/80')}>
                <CardHeader>
                  <CardTitle>{seminar.title}</CardTitle>
                  <CardDescription>{seminar.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <img src={seminar.photo} alt={seminar.title} />
                  <form></form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Button onClick={() => handleClick(seminar.id)}>Открыть</Button>
                </CardFooter>
              </Card>
            ))}
        <ModalWindow open={open} setOpen={setOpen} seminarId={seminarClickedId} />
      </div>
    </Container>
  );
}
