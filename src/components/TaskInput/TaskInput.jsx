import classNames from 'classnames';
import style from './TaskInput.module.css';

export default function TaskInput() {
  return (
    <div className={classNames(style.input_wrapper, style.active)}>
      <input type='text' placeholder='Type your task' />
    </div>
  );
}
