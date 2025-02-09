'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSeminars } from '@/shared/hooks/use-seminars';
import { useState } from 'react';

interface ModalWindowProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  seminarId: string;
}

/* Модальное окно */ export default function ModalWindow({
  open,
  setOpen,
  seminarId,
}: ModalWindowProps) {
  const { removeSeminarId, editSeminar } = useSeminars();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  /* функция сохранения изменений в семинаре */
  const handleSaveChanges = () => {
    if (!title || !description) return;
    editSeminar(seminarId, { title, description });
    setOpen(false);
  };

  /* функция удаления семинара */
  const handleRemoveSeminar = () => {
    removeSeminarId(seminarId);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Редактировать</DialogTitle>
          <DialogDescription>
            Впишите данные о семинаре, который вы хотите изменить
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='discription' className='text-right'>
              Description
            </Label>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              id='discription'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            <Input onChange={(e) => setTitle(e.target.value)} id='title' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSaveChanges} type='submit'>
            сохранить изменения
          </Button>
          <Button className='bg-red-500' onClick={handleRemoveSeminar} type='submit'>
            удалить семинар
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
