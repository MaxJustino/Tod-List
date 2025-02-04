import TaskItem from '../TaskItem'; // Importação correta

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};

export default TaskList;