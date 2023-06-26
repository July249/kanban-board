import { create } from 'zustand';

const store = (set) => ({
  tasks: [],
  addTask: (description, status) =>
    set((store) => ({
      tasks: [
        ...store.tasks,
        {
          id: new Date().getTime(),
          tag: store.tasks.length + 1,
          description,
          status,
        },
      ],
    })),

  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
});

export const useStore = create(store);
