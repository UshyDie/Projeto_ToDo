import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(['Lavar roupa', 'ir ao mercado']);

  /* const removeFromList = (item) => {
    const newList = [...taskList]; // cria uma nova lista
    const itemIndex = newList.indexOf(item); // identifica o indece do item
    newList.splice(itemIndex, 1); // remove o item da lista
    setTaskList(newList); // retorna a lista modificada
  }; */
  const removeFromList = (item) => {
    const newList = taskList.filter((t) => t !== item);
    setTaskList(newList);
  };

  const addToList = (item) => {
    // const newList = [...taskList];
    // newList.push(item);
    // setTaskList(newList);
    setTaskList([...taskList, item]);
  };
  return (
    <TaskContext.Provider value={{ taskList, addToList, removeFromList }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
