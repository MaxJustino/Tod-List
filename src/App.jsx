import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import TaskForm from './components/TaskForm'; // Corrigido: Importe o TaskForm
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  // Buscar tarefas da API ao carregar o componente
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos') // URL correta da API
      .then((response) => {
        setTasks(response.data.slice(0, 10)); // Limita a 10 tarefas para exemplo
      })
      .catch((error) => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, []);

  // Adicionar uma nova tarefa
  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1, // Gera um ID único (não recomendado para produção)
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado
  };

  // Remover uma tarefa
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtra as tarefas, removendo a que tem o ID especificado
  };

  // Marcar/desmarcar uma tarefa como concluída
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <div className="mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`mr-2 p-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`mr-2 p-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Concluídas
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`p-2 ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Pendentes
        </button>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;