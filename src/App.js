import logo from './logo.svg';
import './App.css';
import { TodoForm } from './Components/TodoForm';
import { ListOfTasks } from './Components/ListOfTasks';
import { useState } from 'react';

function App() {
  const Tasks=[{inputv:"Exercise"},{inputv:"study"}];
  const [new_task,setnewTask]=useState(Tasks);
  const fetchTaskHandler=(task)=>{
    setnewTask([...new_task,task])
  }
  
   
  const deleteHandler=(inputv)=>{
     const updatedTasks = [...new_task];
      updatedTasks.splice(inputv, 1);
      setnewTask(updatedTasks)
    };
  
 
  return (
    <div className="App">
      <div className='container'>
      <TodoForm fetchTask={fetchTaskHandler}/>
      <ListOfTasks TaskList={new_task} onDelete={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
