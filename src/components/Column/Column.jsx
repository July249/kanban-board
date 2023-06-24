import Task from 'components/Task/Task';
import style from './Column.module.css';

const tasks = [
  {
    id: '1',
    title: 'Task Title',
    desc: 'Hello! My name is asdfasdfasdfasdfasdfasdfasdfasdfasdfsadfsadasdfasdfasdfasdfasdfasdasf',
  },
  {
    id: '2',
    title: 'Task Title',
    desc: 'Hello!',
  },
  {
    id: '3',
    title: 'Task Title',
    desc: 'Hello!',
  },
];

export default function Column({ state }) {
  return (
    <div className={style.column}>
      <h1
        className={`${style.column_title} ${
          state === 'Not Started'
            ? style.first
            : state === 'In Progress'
            ? style.second
            : style.third
        }`}
      >
        {state}
      </h1>
      <ul className={style.tasks}>
        {tasks.map((task) => (
          <li className={style.task_item}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
