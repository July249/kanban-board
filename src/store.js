import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    {
      id: 1,
      title: 'Task Not Started',
      description: 'Task Description1',
      status: 'NOT_STARTED',
    },
    {
      id: 2,
      title: 'Task Progress',
      description: 'Task Description2',
      status: 'IN_PROGRESS',
    },
    {
      id: 3,
      title: 'Task Done',
      description: 'Task Description3',
      status: 'DONE',
    },
  ],
  addTask: (title, description, status) =>
    set((store) => ({
      tasks: [
        ...store.tasks,
        {
          id: store.tasks.length + 1,
          title,
          description,
          status,
        },
      ],
    })),
});

export const useStore = create(store);
