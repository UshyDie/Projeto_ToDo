import ItemsContainer from './ItemsContainer';
import AddItemsContainer from './AddItemsContainer';
import TaskProvider from './TaskProvider';
import TaskContext from './TaskContext';
import './App.css';

function App() {
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <TaskProvider>
        <AddItemsContainer />
        <ItemsContainer />
      </TaskProvider>
    </div>
  );
}

export default App;
