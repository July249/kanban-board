import { useState } from 'react';
import Column from 'components/Column/Column';
import TaskInput from 'components/TaskInput/TaskInput';
import './App.css';

const states = ['NOT_STARTED', 'IN_PROGRESS', 'DONE'];

function App() {
  const [status, setStatus] = useState('NOT_STARTED');
  const [isActive, setIsActive] = useState(false);
  const onOpenInput = () => setIsActive(true);
  const onCloseInput = () => setIsActive(false);
  const onCurrentStatus = (status) => {
    setStatus(status);
  };

  console.log(isActive);

  return (
    <div className='App'>
      <section>
        {states.map((state) => (
          <Column
            key={state}
            state={state}
            onCurrentStatus={onCurrentStatus}
            onOpenInput={onOpenInput}
          />
        ))}
      </section>
      <TaskInput status={status} isActive={isActive} onCloseInput={onCloseInput} />
    </div>
  );
}

export default App;
