import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    {
      id: 1,
      title: 'Task Title',
      description: 'Task Description',
      status: 'NOT_STARTED',
    },
  ],
});

export const useStore = create(store);
