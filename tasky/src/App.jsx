import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash all the dishes in the sink." />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put it away." />
      <Task title="Groceries" deadline="Saturday" description="Buy vegetables, fruits, and snacks." />
    </div>
  );
}

export default App;


