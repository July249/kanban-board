import Task from 'components/Task/Task';
import style from './Column.module.css';
import classNames from 'classnames';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

export default function Column({
  state,
  onCurrentStatus,
  onOpenInput,
  onModalToggle,
  onModalTaskId,
}) {
  const [drop, setDrop] = useState(false);
  const columnTitle = state.replace('_', ' ');
  const tasks = useStore((store) => store.tasks.filter((task) => task.status === state), shallow);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className={classNames(style.column, drop && style.drop)}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className='task_wrapper'>
        <h1 className={classNames(style.column_title, state)}>{columnTitle}</h1>
        <ul className={style.tasks}>
          {tasks.map((task) => (
            <li key={task.tag} className={style.task_item} onClick={() => onModalTaskId(task.id)}>
              <Task task={task} onModalToggle={onModalToggle} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(style.add_item)}>
        <button
          type='button'
          className={classNames('add_button', state)}
          onClick={() => {
            onCurrentStatus(state);
            onOpenInput();
          }}
        >
          + Add item
        </button>
      </div>
    </div>
  );
}
