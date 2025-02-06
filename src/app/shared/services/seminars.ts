import { ApiRoutes } from './constants';
import { instance } from './instance';

export const getSeminars = async () => {
  return (await instance.get(ApiRoutes.SEMINARS)).data;
};

export const removeSeminar = async (id) => {
  return (await instance.delete(ApiRoutes.SEMINARS + id)).data;
};

export const editSeminar = async (id, seminar) => {
  return (await instance.patch(ApiRoutes.SEMINARS + id, seminar)).data;
};
