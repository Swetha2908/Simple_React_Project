import React from 'react'
import Todo from "../assets/direct-hit.png"
import TaskCard from './TaskCard'
import './TaskCol.css'
const TaskCol = ({title,icon,tasks,status,handleDelete}) => {
  return (
    <section className='task-column'>
        <h2 className='task-col-heading'>
          <img className='task-col-img' src={icon} alt=''/>
          {title}</h2>
      {
      tasks.map(
        (task,index) => 
      task.status === status && <TaskCard key={index} 
      title={task.task}
       tags={task.tags}
       handleDelete={handleDelete}
       index={index}
       />
      )}
    </section>
    
  );
};

export default TaskCol