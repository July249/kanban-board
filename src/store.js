import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    {
      tag: '001',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error temporibus! Vero, obcaecati deleniti nihil quibusdam quis delectus dolores sit!',
      status: 'NOT_STARTED',
    },
    {
      tag: 2,
      description: 'Task Description2',
      status: 'IN_PROGRESS',
    },
    {
      tag: 3,
      description: 'Task Description3',
      status: 'DONE',
    },
  ],
  addTask: (description, status) =>
    set((store) => ({
      tasks: [
        ...store.tasks,
        {
          tag: store.tasks.length + 1,
          description,
          status,
        },
      ],
    })),
});

export const useStore = create(store);
