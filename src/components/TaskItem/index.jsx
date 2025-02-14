import React from 'react';


const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Título da tarefa */}
      <span
        className={`text-lg font-medium ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {task.title}
      </span>

      {/* Botões de ação */}
      <div className="flex space-x-2">
        {/* Botão "Concluir" ou "Desfazer" */}
        <button
          onClick={() => onToggle(task.id)}
          className={`px-4 py-2 rounded font-semibold ${
            task.completed
              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          } transition-colors`}
        >
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>

        {/* Botão "Remover" */}
        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition-colors"
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default TaskItem;