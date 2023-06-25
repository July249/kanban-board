import Task from 'components/Task/Task';
import style from './Column.module.css';
import classNames from 'classnames';

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
      <h1 className={classNames(style.column_title, state)}>{state}</h1>
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
