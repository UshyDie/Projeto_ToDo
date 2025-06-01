import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import AddItemsContainer from './AddItemsContainer';
import TaskContext from './TaskContext';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(['Lavar roupa', 'ir ao mercado']);

  const removeFromList = (item) => {
    const newList = [...taskList]; // cria uma nova lista
    const itemIndex = newList.indexOf(item); // identifica o indece do item
    newList.splice(itemIndex, 1); // remove o item da lista
    setTaskList(newList); // retorna a lista modificada
  };

  const addToList = (item) => {
    // const newList = [...taskList];
    // newList.push(item);
    // setTaskList(newList);
    setTaskList([...taskList, item]);
  };
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <TaskContext.Provider value={{ taskList, addToList, removeFromList }}>
        <AddItemsContainer />
        <ItemsContainer />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
