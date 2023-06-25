import Column from 'components/Column/Column';
import './App.css';

const states = ['NOT_STARTED', 'IN_PROGRESS', 'DONE'];

function App() {
  return (
    <div className='App'>
      {states.map((state) => (
        <Column key={state} state={state} />
      ))}
    </div>
  );
}

export default App;
