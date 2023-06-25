import Task from 'components/Task/Task';
import style from './Column.module.css';
import classNames from 'classnames';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';

export default function Column({ state }) {
  const tasks = useStore((store) => store.tasks.filter((task) => task.status === state), shallow);
  const addTask = useStore((store) => store.addTask);
  return (
    <div className={classNames(style.column)}>
      <div className='task_wrapper'>
        <h1 className={classNames(style.column_title, state)}>{state}</h1>
        <ul className={style.tasks}>
          {tasks.map((task) => (
            <li key={task.id} className={style.task_item}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(style.add_item)}>
        <button
          type='button'
          className={classNames('add_button', state)}
          onClick={() => {
            addTask('asdfasdf', 'qwerqwerqwerqwer', state);
          }}
        >
          + Add item
        </button>
      </div>
    </div>
  );
}
