import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  // Buscar tarefas da API ao carregar o componente
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTasks(response.data.slice(0, 20)); // Limita a 20 tarefas
      })
      .catch((error) => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, []);

  // Adicionar uma nova tarefa
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Gera um ID único com timestamp
      userId: 1, // ID do usuário
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado
  };

  // Remover uma tarefa (localmente)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Marcar/desmarcar uma tarefa como concluída (localmente)
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtrar tarefas com base no estado (concluídas, pendentes ou todas)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="min-h-screen bg-neutral-800 py-8">
      <div className="flex justify-center">
        <div className="max-w-2xl w-full rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-400 mb-6">Lista de Tarefas</h1>

          {/* Formulário de adição de tarefas */}
          <TaskForm onAddTask={addTask} />

          {/* Botões de filtro */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Concluídas
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'pending'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Pendentes
            </button>
          </div>

          {/* Lista de tarefas */}
          <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
        </div>
      </div>
    </div>
  );
};

export default App;