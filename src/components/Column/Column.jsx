import Task from 'components/Task/Task';
import style from './Column.module.css';
import classNames from 'classnames';
import { useStore } from '../../store';
// import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';

// const tasks = [
//   {
//     id: '1',
//     title: 'Task Title',
//     desc: 'Hello! My name is asdfasdfasdfasdfasdfasdfasdfasdfasdfsadfsadasdfasdfasdfasdfasdfasdasf',
//   },
//   {
//     id: '2',
//     title: 'Task Title',
//     desc: 'Hello!',
//   },
//   {
//     id: '3',
//     title: 'Task Title',
//     desc: 'Hello!',
//   },
// ];

export default function Column({ state }) {
  // Bad
  // const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
  // > "filter" or "map", etc. methods are always make a new instance of array
  // > so react will rerender the component even if the array is the same

  // Good
  // > useMemo is a hook that will return the same instance of array
  // > if the dependencies are the same
  // const tasks = useStore((store) => store.tasks);
  // const filtered = useMemo(() => tasks.filter((task) => task.state === state), [tasks, state]);

  // Best
  // > Using "shallow" option of zustand is the best way to do this
  // > because it will return the same instance of array
  // > if the array is the same
  const tasks = useStore((store) => store.tasks.filter((task) => task.status === state), shallow);

  // Notice that "shallow" option can be replaced with some custom function
  // that will compare the array and return true if the array is the same
  // Below is the example of custom function that will compare the array
  // const tasks = useStore(
  //   (store) => store.tasks.filter((task) => task.state === state),
  //   (prev, next) => {
  //     const longest = prev.length > next.length ? prev.length : next.length;
  //     for (let i = 0; i < longest; i++) {
  //       if (prev[i] !== next[i]) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // );
  // > Remark that this custom function will run whenever the store is updated
  // > so if your comparison is too complex, then it will run too often and it will cause the performance issue
  // > therefore using useMemo is perfectly fine to do this and it could be more understandable
  return (
    <div className={style.column}>
      <h1 className={classNames(style.column_title, state)}>{state}</h1>
      <ul className={style.tasks}>
        {tasks.map((task) => (
          <li key={task.id} className={style.task_item}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
