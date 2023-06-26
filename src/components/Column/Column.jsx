import Task from 'components/Task/Task';
import style from './Column.module.css';
import classNames from 'classnames';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';

export default function Column({
  state,
  onCurrentStatus,
  onOpenInput,
  onModalToggle,
  onModalTaskId,
}) {
  const columnTitle = state.replace('_', ' ');
  const tasks = useStore((store) => store.tasks.filter((task) => task.status === state), shallow);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className={classNames(style.column)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        console.log(draggedTask);
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
