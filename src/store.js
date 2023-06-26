import { create } from 'zustand';

const store = (set) => ({
  tasks: [],
  draggedTask: null,

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

  setDraggedTask: (id) => set({ draggedTask: id }),

  moveTask: (id, status) =>
    set((store) => ({
      tasks: store.tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    })),

  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
});

export const useStore = create(store);
