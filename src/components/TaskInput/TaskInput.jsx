import { useState, useRef } from 'react';
import { useStore } from '../../store';
import classNames from 'classnames';
import style from './TaskInput.module.css';

export default function TaskInput({ status, isActive, onCloseInput }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      addTask(value, status);
      onCloseInput();
      inputRef.current.value = '';
    }
    return;
  };
  const addTask = useStore((store) => store.addTask);

  return (
    <div className={classNames(style.input_wrapper, `${isActive ? style.active : ''}`)}>
      <input
        type='text'
        placeholder='Type your task'
        ref={inputRef}
        onChange={handleChange}
        onKeyUp={handleSubmit}
      />
      <input
        type='button'
        value='+'
        className={classNames('plus_button')}
        onClick={() => {
          addTask(value, status);
          onCloseInput();
          inputRef.current.value = '';
        }}
      />
    </div>
  );
}
