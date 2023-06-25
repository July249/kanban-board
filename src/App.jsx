import Column from 'components/Column/Column';
import TaskInput from 'components/TaskInput/TaskInput';
import './App.css';

const states = ['NOT_STARTED', 'IN_PROGRESS', 'DONE'];

function App() {
  return (
    <div className='App'>
      <section>
        {states.map((state) => (
          <Column key={state} state={state} />
        ))}
      </section>
      <TaskInput />
    </div>
  );
}

export default App;
