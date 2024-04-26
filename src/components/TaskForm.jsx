import React,{useState} from 'react'
import Tag from './Tag'
import './TaskForm.css'


export const TaskForm = ({setTasks}) => {
const  [taskData, setTaskData]= useState({
  task:"",
  status:"todo",
  tags:[],
});

const checkTag = (tag) =>{
  return  taskData.tags.some(item=> item === tag)
}
const selecttag=(tag)=>{
  if(taskData.tags.some(item=> item === tag)){
    const filtertag=taskData.tags.filter(item=> item !==tag) 
 setTaskData((prev)=> {
  return{...prev,tags:filtertag}
 })
}
else{
 setTaskData((prev)=>{
   return{ ...prev,tags:[...prev.tags,tag]}
  })
 }
};
 
const handleChange = (e) => {
  const { name, value } = e.target;

  setTaskData((prev) => {
      return { ...prev, [name]: value };
  });
};

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(taskData);
  setTasks((prev)=>{
    return[ ...prev, taskData]
  })
  setTaskData({
    task:"",
    status:"todo",
    tags:[],}
  )
};


 return (
    <header className='app-header'>
        <form onSubmit = {handleSubmit} >
            <input 
            name="task"
            type="text" 
           value={taskData.task}
            className='task-input' 
            placeholder='Enter your Task'
            onChange={handleChange}/>
            
            <div className="task-form-bottom-line" name="tags" >
                
                <Tag tagName="HTML" selecttag={selecttag} selected={checkTag("HTML")}/>
                <Tag tagName="CSS" selecttag={selecttag} selected={checkTag("CSS")}/>
                <Tag tagName="JavaScript" selecttag={selecttag} selected={checkTag("JavaScript")}/> 
                <Tag tagName="React" selecttag={selecttag} selected={checkTag("React")}/>
               
                 
                <select 
                className='task-status' 
                name="status" 
                value={taskData.status}
                 onChange={handleChange}>
                    <option value='todo'>To Do</option>
                    <option value='doing'>Doing</option>
                    <option value='done'>Done</option>
                </select>
                
                <button  type='submit' className='task-submit'>
                  +Add Task
                  </button>
                
            </div>
        </form>
    </header>
  )
}
