import { useState, useContext } from 'react';
import TaskContext from './TaskContext';

const AddItemsContainer = () => {
  // let newTask = ''; --> usando assim a variavel, o React redefine sempre como vazia ao ser renderizado
  const [newTask, setNewTask] = useState('');
  const { addToList } = useContext(TaskContext);
  return (
    <div className='add-items-container'>
      <input
        type='text'
        value={newTask}
        onChange={(evt) => setNewTask(evt.target.value)}
      />
      <button
        onClick={() => {
          if (newTask !== '') {
            addToList(newTask);
            setNewTask(''); // Limpa o input depois de adicionar
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
