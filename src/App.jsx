import React,{useState , useEffect} from 'react'
import "./App.css";
import TaskCol from './components/TaskCol';
import { TaskForm } from './components/TaskForm';
import todoicon from './assets/direct-hit.png'
import doingicon from './assets/glowing-star.png'
import doneicon from './assets/check-mark-button.png'


const oldTask = localStorage.getItem("tasks")
console.log(oldTask);


const App = () => {
  const[tasks,setTasks]=useState(JSON.parse(oldTask) || []);

 useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);

  const handleDelete=(taskIndex)=>
  {
    const newTasks=tasks.filter((task,index)=> index !== taskIndex)
    setTasks(newTasks)
  };
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}></TaskForm>
      
      <main className='app-main'>
       <TaskCol title='To Do' icon={todoicon}
        tasks={tasks} status="todo" handleDelete={handleDelete} />
       <TaskCol title='Doing' icon={doingicon}
       tasks={tasks} status="doing" handleDelete={handleDelete}/>
       <TaskCol title='Done' icon={doneicon}
       tasks={tasks} status="done" handleDelete={handleDelete}/>
      
      </main>
      
    </div>
  )
}

export default App