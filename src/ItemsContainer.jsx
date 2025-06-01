import { useContext, useState } from 'react';
import Item from './Item';
import TaskContext from './TaskContext';
const ItemsContainer = () => {
  const { taskList, removeFromList } = useContext(TaskContext);
  const [checked, setChecked] = useState(false);
  return (
    <div className='items-container'>
      <input
        type='checkbox'
        name='bottom-border'
        id='border-check'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)} //usar onChance no lugar de onClick quando for mudança de estado (useState)
      />
      <label htmlFor='border-check'>Habilitar Linhas</label>
      {taskList.map((t, idx) => (
        <Item
          task={t}
          removeFromList={removeFromList}
          key={`task-item-${idx}`}
          showBorderBottom={checked}
        /> //Mapeia o array de taskItem e insere no Item
      ))}
    </div>
  );
};

export default ItemsContainer;
