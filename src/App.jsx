import Column from 'components/Column/Column';
import './App.css';

const states = [{ section: 'Not Started' }, { section: 'In Progress' }, { section: 'Done' }];

function App() {
  return (
    <div className='App'>
      {states.map((state) => (
        <Column state={state.section} />
      ))}
    </div>
  );
}

export default App;
