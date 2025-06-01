const Item = ({ task, removeFromList, showBorderBottom }) => {
  return (
    <div className={`task-item ${showBorderBottom ? 'bottom-border' : ''}`}>
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Remover</button>
    </div>
  );
};

export default Item;
