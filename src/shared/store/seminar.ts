import { create } from 'zustand';
import { Api } from '../services/api-client';

export interface SeminarsState {
  seminars: Seminar[];
  error: boolean;
  loading: boolean;
  /* Получение семинаров */
  fetchSeminars: () => Promise<void>;
  /* Удаление семинара */
  removeSeminarId: (id: string) => Promise<void>;
  /* Редактирование семинара */
  editSeminar: (id: string, seminar: EdinSeminar) => Promise<void>;
}
export interface Seminar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export interface EdinSeminar {
  title: string;
  description: string;
}

export const useSeminarsStore = create<SeminarsState>((set) => ({
  seminars: [],
  error: false,
  loading: true,
  fetchSeminars: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.seminars.getSeminars();
      set({ seminars: data });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeSeminarId: async (id) => {
    try {
      set({ loading: true, error: false });
      await Api.seminars.removeSeminar(id);
      set((state) => ({
        seminars: state.seminars.filter((seminar) => seminar.id !== id),
      }));
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  editSeminar: async (id, seminar) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.seminars.editSeminar(id, seminar);
      set((state) => ({
        seminars: state.seminars.map((item) => (id === item.id ? data : item)),
      }));
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
