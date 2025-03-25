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
        className="p-2 w-65 border rounded w-full"
      />
      <button
  type="submit"
  className="m-4 px-6  block mx-auto p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
>
  Adicionar
</button>
    </form>
  );
};

export default TaskForm;