import { forwardRef } from 'react';
import classNames from 'classnames';
import style from './Modal.module.css';
import { useStore } from '../../store';

export const Modal = forwardRef(({ modalSwitch }, ref) => {
  const task = useStore((store) => store.task);
  console.log(task);
  return (
    <div ref={ref} className={classNames(style.modal, `${modalSwitch ? style.active : ''}`)}>
      <div className={style.modal_wrapper}>
        <section className={style.content}>
          <div className={style.task}>
            <h2>
              Task Tag
              <span className={style.delete_btn}>
                <i className='xi-trash'></i>
              </span>
            </h2>
            <p>Task Description</p>
          </div>
        </section>
        <div className={style.close_modal}>
          <i className='xi-close'></i>
        </div>
      </div>
    </div>
  );
});
