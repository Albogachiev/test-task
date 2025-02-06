import { create } from 'zustand';
import { Api } from '../shared/services/api-client';

export const useSeminarsStore = create((set, get) => ({
  seminars: [],
  error: false,
  loading: true,
  fetchSeminars: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.seminars.getSeminars();
      set({ seminars: data });
    } catch (e) {
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
        seminars: state.seminars.filter((seminar) => Number(seminar.id) !== id),
      }));
    } catch (e) {
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
    } catch (e) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
