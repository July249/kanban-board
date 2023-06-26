import { useState, useRef } from 'react';
import Column from 'components/Column/Column';
import TaskInput from 'components/TaskInput/TaskInput';
import { Modal } from 'components/Modal/Modal';
import './App.css';

const states = ['NOT_STARTED', 'IN_PROGRESS', 'DONE'];

function App() {
  const modalRef = useRef(null);
  const [status, setStatus] = useState('NOT_STARTED');
  const [isActive, setIsActive] = useState(false);
  const [modalSwitch, setModalSwitch] = useState(false);
  const [taskId, setTaskId] = useState('');
  const onOpenInput = () => setIsActive(true);
  const onCloseInput = () => setIsActive(false);
  const onModalToggle = (prev) => setModalSwitch(!prev);
  const onCurrentStatus = (status) => {
    setStatus(status);
  };
  const onModalTaskId = (taskId) => {
    setTaskId(taskId);
  };

  return (
    <div className='App'>
      <section>
        {states.map((state) => (
          <Column
            key={state}
            state={state}
            onCurrentStatus={onCurrentStatus}
            onOpenInput={onOpenInput}
            onModalToggle={onModalToggle}
            onModalTaskId={onModalTaskId}
          />
        ))}
      </section>
      <TaskInput status={status} isActive={isActive} onCloseInput={onCloseInput} />
      <Modal
        ref={modalRef}
        taskId={taskId}
        modalSwitch={modalSwitch}
        onModalToggle={onModalToggle}
      />
    </div>
  );
}

export default App;
