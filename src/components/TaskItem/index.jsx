 const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
      <div>
        <button onClick={() => onToggle(task.id)} className="mr-2">
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button onClick={() => onDelete(task.id)}>Remover</button>
      </div>
    </div>
  );
};

export default TaskItem; 


