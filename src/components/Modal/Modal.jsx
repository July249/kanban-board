import { forwardRef } from 'react';
import classNames from 'classnames';
import style from './Modal.module.css';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import threeDigitTag from 'utils/threeDigitTag';

export const Modal = forwardRef(({ taskId, modalSwitch, onModalToggle }, ref) => {
  const tasks = useStore((store) => store.tasks.filter((task) => task.id === taskId), shallow);
  const handleDeleteTask = () => {
    deleteTask(taskId);
    onModalToggle(modalSwitch);
  };
  const handleModalToggle = () => {
    onModalToggle(modalSwitch);
  };

  const task = tasks[0];
  const tag = !!task ? threeDigitTag(task.tag) : '';
  const description = !!task ? task.description : '';

  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <div className={classNames(style.modal, `${modalSwitch && !!task ? style.active : ''}`)}>
      <div ref={ref} className={style.modal_wrapper}>
        <section className={style.content}>
          <div className={style.task}>
            <h2>
              {tag}
              <span className={style.delete_btn} onClick={handleDeleteTask}>
                <i className='xi-trash'></i>
              </span>
            </h2>
            <p>{description}</p>
          </div>
        </section>
        <div className={style.close_modal} onClick={handleModalToggle}>
          <i className='xi-close'></i>
        </div>
      </div>
    </div>
  );
});
