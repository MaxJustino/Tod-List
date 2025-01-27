function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2 shadow-md">
      <div>
        <input
          id={`task-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <label htmlFor={`task-${task.id}`} className="cursor-pointer">
          <span className={task.completed ? 'line-through text-gray-500' : ''}>
            {task.title}
          </span>
        </label>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        aria-label={`Remover tarefa ${task.title}`}
      >
        Remover
      </button>
    </div>
  );
}

export default TaskItem;