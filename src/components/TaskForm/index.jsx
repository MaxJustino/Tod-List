import {useState} from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(title == '')
     if(!title == '') { 
      onAddTask(title)
      setTitle('');
      

     }else {
        

      alert ("TESTE")


     }

    
  
   
    
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Adicionar
      </button>
    </form>
  );
};

export default TaskForm;