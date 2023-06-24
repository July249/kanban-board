import Column from 'components/Column/Column';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Column state='Not Started' />
      <Column state='In Progress' />
      <Column state='Done' />
    </div>
  );
}

export default App;
