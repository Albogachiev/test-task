import { Seminar, EdinSeminar } from '../store/seminar';
import { ApiRoutes } from './constants';
import { instance } from './instance';

/* получение массива семинаров */
export const getSeminars = async (): Promise<Seminar[]> => {
  return (await instance.get(ApiRoutes.SEMINARS)).data;
};

/* удаление семинара по ид */
export const removeSeminar = async (id: string): Promise<Seminar> => {
  return (await instance.delete(ApiRoutes.SEMINARS + id)).data;
};

/* редактирование семинара */
export const editSeminar = async (id: string, seminar: EdinSeminar): Promise<Seminar> => {
  return (await instance.patch(ApiRoutes.SEMINARS + id, seminar)).data;
};
